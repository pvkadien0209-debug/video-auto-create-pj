// src/Components/ActionOrchestrator/utils/cssOverrideManager.js
import { staticFile } from "remotion";

/**
 * 🎨 CSS OVERRIDE MANAGER
 * Quản lý việc tính toán CSS overrides tích lũy theo timeline
 */

/**
 * 🖼️ Process CSS properties với url() thành staticFile()
 */
function processCssForRemotion(styleCss) {
  if (!styleCss || typeof styleCss !== "object") return styleCss;

  const processed = { ...styleCss };

  // Xử lý backgroundImage
  if (
    processed.backgroundImage &&
    typeof processed.backgroundImage === "string"
  ) {
    processed.backgroundImage = processUrlInCss(processed.backgroundImage);
  }

  // Xử lý background (có thể chứa url)
  if (
    processed.background &&
    typeof processed.background === "string" &&
    processed.background.includes("url(")
  ) {
    processed.background = processUrlInCss(processed.background);
  }

  // Xử lý content (cho pseudo elements)
  if (
    processed.content &&
    typeof processed.content === "string" &&
    processed.content.includes("url(")
  ) {
    processed.content = processUrlInCss(processed.content);
  }

  // Xử lý listStyleImage
  if (
    processed.listStyleImage &&
    typeof processed.listStyleImage === "string"
  ) {
    processed.listStyleImage = processUrlInCss(processed.listStyleImage);
  }

  return processed;
}

/**
 * Convert url() paths thành staticFile()
 */
function processUrlInCss(cssValue) {
  return cssValue.replace(/url\(['"]?([^'"()]+)['"]?\)/g, (match, path) => {
    // Bỏ leading slash nếu có
    const cleanPath = path.startsWith("/") ? path.substring(1) : path;

    // Skip nếu là data URL hoặc external URL
    if (
      cleanPath.startsWith("data:") ||
      cleanPath.startsWith("http://") ||
      cleanPath.startsWith("https://")
    ) {
      return match;
    }

    try {
      return `url(${staticFile(cleanPath)})`;
    } catch (error) {
      console.warn(`Failed to process URL: ${cleanPath}`, error);
      return match;
    }
  });
}

/**
 * ⚡ NEW — tách phần KHÔNG phụ thuộc `currentFrame` ra riêng:
 * quét codeFrame tìm các actionCssClass/actionCssId, tính actionStartFrame,
 * PROCESS SẴN css (regex url()→staticFile()) và SORT SẴN theo thời gian.
 * Kết quả này không đổi khi frame đổi (chỉ đổi khi codeFrame đổi), nên gọi
 * 1 lần (vd: qua useMemo([codeFrame]) ở ActionOrchestrator) rồi tái dùng
 * cho mọi frame, thay vì làm lại toàn bộ (kể cả regex) mỗi frame như trước.
 *
 * Giữ nguyên 100% cách tính actionStartFrame so với bản cũ — 2 nhánh if/else
 * cũ (ToEndFrame true/false) thực chất làm ĐÚNG MỘT VIỆC giống nhau (dead
 * branch), nên gộp lại đây không đổi kết quả.
 */
export function prepareCssActions(codeFrame) {
  const prepared = [];

  codeFrame.forEach((item, itemIndex) => {
    const actions = Array.isArray(item.actions)
      ? item.actions
      : item.action
        ? [item.action]
        : [];

    actions.forEach((action, actionIndex) => {
      if (
        !action ||
        !action.cmd ||
        (action.cmd !== "actionCssClass" && action.cmd !== "actionCssId")
      ) {
        return;
      }

      let actionStartFrame = item.startFrame;
      if (typeof action.ChangeStartFrame === "number") {
        actionStartFrame = item.startFrame + action.ChangeStartFrame;
      }

      prepared.push({
        itemIndex,
        actionIndex,
        actionStartFrame,
        cssMode: action.cssMode || "replace",
        toID: action.toID,
        toClass: action.toClass,
        // ⚡ Process CSS (regex url() → staticFile()) MỘT LẦN ở đây,
        // thay vì mỗi frame trong calculateCssOverrides.
        processedCss: processCssForRemotion(action.css),
      });
    });
  });

  // Sắp xếp theo thời gian — làm 1 lần duy nhất ở đây
  prepared.sort((a, b) => {
    if (a.actionStartFrame !== b.actionStartFrame) {
      return a.actionStartFrame - b.actionStartFrame;
    }
    if (a.itemIndex !== b.itemIndex) {
      return a.itemIndex - b.itemIndex;
    }
    return a.actionIndex - b.actionIndex;
  });

  return prepared;
}

/**
 * @param {Array} codeFrame
 * @param {number} currentFrame
 * @param {number} toEndFrame
 * @param {Array} [preparedActions] - ⚡ NEW, optional. Kết quả từ prepareCssActions(codeFrame),
 *   dùng để bỏ qua việc quét lại/regex lại mỗi frame. KHÔNG truyền vẫn hoạt động
 *   đúng y hệt bản cũ (tự tính lại từ codeFrame mỗi lần gọi) — 100% backward compatible.
 */
export function calculateCssOverrides(
  codeFrame,
  currentFrame,
  toEndFrame,
  preparedActions,
) {
  const overrides = {
    byId: {},
    byClass: {},
  };

  // ⚡ Fast path: dùng danh sách đã tiền xử lý + sort sẵn nếu được truyền vào.
  // Nếu không, fallback y hệt hành vi cũ (tự build lại ở đây, không đổi kết quả).
  const list = preparedActions ?? prepareCssActions(codeFrame);

  // list đã được sort theo actionStartFrame/itemIndex/actionIndex, nên chỉ cần
  // lọc theo currentFrame và apply tuần tự — giữ đúng thứ tự merge/replace như cũ.
  for (const entry of list) {
    if (currentFrame < entry.actionStartFrame) continue; // action chưa "chạy" tới frame này

    const { cssMode, processedCss, toID, toClass } = entry;

    if (toID && processedCss) {
      if (cssMode === "replace") {
        overrides.byId[toID] = { ...processedCss };
      } else {
        overrides.byId[toID] = {
          ...(overrides.byId[toID] || {}),
          ...processedCss,
        };
      }
    }

    if (toClass && processedCss) {
      if (cssMode === "replace") {
        overrides.byClass[toClass] = { ...processedCss };
      } else {
        overrides.byClass[toClass] = {
          ...(overrides.byClass[toClass] || {}),
          ...processedCss,
        };
      }
    }
  }

  return overrides;
}

/**
 * Apply CSS overrides lên base style
 */
export function applyCssOverrides(baseStyle, className, id, cssOverrides) {
  let finalStyle = { ...baseStyle };

  if (className && cssOverrides.byClass[className]) {
    finalStyle = { ...finalStyle, ...cssOverrides.byClass[className] };
  }

  if (id && cssOverrides.byId[id]) {
    finalStyle = { ...finalStyle, ...cssOverrides.byId[id] };
  }

  return finalStyle;
}

/**
 * Merge styles: action.css → item.styleCss → CSS overrides
 * Tự động process url() trong styleCss
 */
export function mergeStyles(
  action,
  item,
  defaultStyle,
  className,
  id,
  cssOverrides,
) {
  // Process base style từ action.styleCss hoặc item.styleCss
  const baseStyleSource = action.styleCss || item.styleCss || defaultStyle;
  let finalStyle = { ...processCssForRemotion(baseStyleSource) };

  // Process và merge action.css nếu có
  if (action.css) {
    const processedActionCss = processCssForRemotion(action.css);
    finalStyle = { ...finalStyle, ...processedActionCss };
  }

  // Apply CSS overrides (đã được processed trong calculateCssOverrides)
  finalStyle = applyCssOverrides(finalStyle, className, id, cssOverrides);

  return finalStyle;
}

// Export helper để dùng ở nơi khác nếu cần
export { processCssForRemotion };
