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

export function calculateCssOverrides(codeFrame, currentFrame, toEndFrame) {
  const overrides = {
    byId: {},
    byClass: {},
  };
  const executedCssActions = [];

  // Thu thập CSS actions đã chạy
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
      if (action.ToEndFrame === true) {
        if (typeof action.ChangeStartFrame === "number") {
          actionStartFrame = item.startFrame + action.ChangeStartFrame;
        }
      } else {
        if (typeof action.ChangeStartFrame === "number") {
          actionStartFrame = item.startFrame + action.ChangeStartFrame;
        }
      }

      if (currentFrame >= actionStartFrame) {
        executedCssActions.push({
          action,
          itemIndex,
          actionIndex,
          actionStartFrame,
        });
      }
    });
  });

  // Sắp xếp theo thời gian
  executedCssActions.sort((a, b) => {
    if (a.actionStartFrame !== b.actionStartFrame) {
      return a.actionStartFrame - b.actionStartFrame;
    }
    if (a.itemIndex !== b.itemIndex) {
      return a.itemIndex - b.itemIndex;
    }
    return a.actionIndex - b.actionIndex;
  });

  // Apply CSS với processing
  executedCssActions.forEach(({ action }) => {
    const cssMode = action.cssMode || "replace";

    // Process CSS trước khi apply
    const processedCss = processCssForRemotion(action.css);

    if (action.toID && processedCss) {
      if (cssMode === "replace") {
        overrides.byId[action.toID] = { ...processedCss };
      } else {
        overrides.byId[action.toID] = {
          ...(overrides.byId[action.toID] || {}),
          ...processedCss,
        };
      }
    }

    if (action.toClass && processedCss) {
      if (cssMode === "replace") {
        overrides.byClass[action.toClass] = { ...processedCss };
      } else {
        overrides.byClass[action.toClass] = {
          ...(overrides.byClass[action.toClass] || {}),
          ...processedCss,
        };
      }
    }
  });

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
