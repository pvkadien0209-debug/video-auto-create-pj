// ================================
// 📦 IMPORT
// ================================
import DataFront from "./data_Front_001.json" with { type: "json" };
const [arr1_configs, arr2_styles, arr3_contents, arr4_data] = DataFront;
let videoData01 = [];
// ================================
// 🛠️ HELPER FUNCTIONS
// ================================
function isNullOrEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "null" ||
    value === "NULL"
  );
}
function parseCssString_old(cssStr) {
  if (!cssStr || cssStr === "null" || cssStr === null) return {};
  cssStr = cssStr.trim();
  cssStr = cssStr.replace(/(\w+):/g, '"$1":');
  try {
    return JSON.parse(cssStr);
  } catch (e) {
    console.warn("⚠️ Failed to parse CSS:", cssStr, e.message);
    return {};
  }
}
function splitCssPairs(str) {
  const pairs = [];
  let current = "";
  let depth = 0;
  let inQuote = null;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const prev = i > 0 ? str[i - 1] : "";
    if ((ch === '"' || ch === "'") && prev !== "\\") {
      if (inQuote === null) inQuote = ch;
      else if (inQuote === ch) inQuote = null;
      current += ch;
      continue;
    }
    if (inQuote === null) {
      if (ch === "(") depth++;
      if (ch === ")") depth--;
      if (ch === "," && depth === 0) {
        const trimmed = current.trim();
        if (trimmed) pairs.push(trimmed);
        current = "";
        continue;
      }
    }
    current += ch;
  }
  const trimmed = current.trim();
  if (trimmed) pairs.push(trimmed);
  return pairs;
}
/**
 * Parse a single "key: value" pair → [key, value]
 */
function parseKeyValue(pair) {
  let colonIdx = -1;
  let inQuote = null;
  let parenDepth = 0;
  for (let i = 0; i < pair.length; i++) {
    const ch = pair[i];
    const prev = i > 0 ? pair[i - 1] : "";
    if ((ch === '"' || ch === "'") && prev !== "\\") {
      if (inQuote === null) inQuote = ch;
      else if (inQuote === ch) inQuote = null;
      continue;
    }
    if (inQuote === null) {
      if (ch === "(") parenDepth++;
      if (ch === ")") parenDepth--;
      if (ch === ":" && parenDepth === 0) {
        colonIdx = i;
        break;
      }
    }
  }
  if (colonIdx === -1) return null;
  let key = pair
    .slice(0, colonIdx)
    .trim()
    .replace(/^["'`]|["'`]$/g, "");
  if (!key) return null;
  let value = pair.slice(colonIdx + 1).trim();
  // Strip wrapping quotes
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith("`") && value.endsWith("`"))
  ) {
    value = value.slice(1, -1);
  }
  // Convert types
  if (/^-?\d+(\.\d+)?$/.test(value)) value = Number(value);
  else if (value === "true") value = true;
  else if (value === "false") value = false;
  else if (value === "null") value = null;
  return [key, value];
}
/**
 * Main: CSS string → JS object
 */
function parseCssString(cssStr) {
  if (!cssStr || cssStr === "null" || cssStr === "undefined") return {};
  if (typeof cssStr === "object" && cssStr !== null) return cssStr;
  if (typeof cssStr !== "string") return {};
  cssStr = cssStr.trim();
  if (!cssStr) return {};
  // Fast path: valid JSON
  try {
    const parsed = JSON.parse(cssStr);
    if (typeof parsed === "object" && parsed !== null) return parsed;
  } catch (_) {}
  // Manual parse
  try {
    let s = cssStr;
    if (s.startsWith("{")) s = s.slice(1);
    if (s.endsWith("}")) s = s.slice(0, -1);
    s = s.trim();
    if (!s) return {};
    const pairs = splitCssPairs(s);
    const result = {};
    for (const pair of pairs) {
      const kv = parseKeyValue(pair);
      if (kv) result[kv[0]] = kv[1];
    }
    return result;
  } catch (e) {
    console.warn("⚠️ Failed to parse CSS:", cssStr, e.message);
    return {};
  }
}
function parseBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const upperValue = value.toUpperCase().trim();
    if (upperValue === "TRUE") return true;
    if (upperValue === "FALSE") return false;
  }
  return value;
}
function parseActionKey(key) {
  if (!key || typeof key !== "string") return null;
  const pattern = /^content-(\d{2})$/;
  const match = key.match(pattern);
  if (match) {
    return { actionNum: parseInt(match[1], 10), originalKey: key };
  }
  return null;
}
function searchInConfigsArray(key) {
  for (const configItem of arr1_configs) {
    for (const [prop, value] of Object.entries(configItem)) {
      if (prop === key) return value;
    }
  }
  return null;
}
function searchInStylesArray(key) {
  for (const styleItem of arr2_styles) {
    for (const [prop, value] of Object.entries(styleItem)) {
      if (prop === key) return value;
    }
  }
  return null;
}
function searchInContentsArray(key) {
  for (const contentItem of arr3_contents) {
    for (const [prop, value] of Object.entries(contentItem)) {
      if (prop === key) return value;
    }
  }
  return null;
}
function resolveAddKey(addKey, dataRow) {
  if (dataRow && dataRow.hasOwnProperty(addKey)) return dataRow[addKey];
  const fromConfigs = searchInConfigsArray(addKey);
  if (fromConfigs !== null) return fromConfigs;
  const fromStyles = searchInStylesArray(addKey);
  if (fromStyles !== null) return fromStyles;
  const fromContents = searchInContentsArray(addKey);
  if (fromContents !== null) return fromContents;
  return addKey.replace("ADD_", "");
}
// ================================
// ⭐ MODEOBJ RESOLVER
// ================================
/**
 * Resolve MODEOBJ.xxx pattern in a value
 * ⭐ Nếu modeObjData null/undefined → trả value nguyên gốc, KHÔNG xét
 */
function resolveMODEOBJ(value, modeObjData) {
  if (!modeObjData || !value || typeof value !== "string") return value;
  if (!value.includes("MODEOBJ.")) return value;
  // Exact match "MODEOBJ.xxx"
  const exactPattern = /^MODEOBJ\.(\w+)$/;
  const exactMatch = value.match(exactPattern);
  if (exactMatch) {
    const key = exactMatch[1];
    const resolved = modeObjData[key];
    return resolved !== undefined ? resolved : null;
  }
  // Inline replacement "...MODEOBJ.xxx..."
  return value.replace(/MODEOBJ\.(\w+)/g, (fullMatch, key) => {
    const resolved = modeObjData[key];
    return resolved !== undefined && resolved !== null ? resolved : "";
  });
}
/**
 * Parse special values (JSON_, ADD_, TRUE/FALSE, MODEOBJ.xxx)
 */
function parseSpecialValue(value, dataRow, modeObjData) {
  if (isNullOrEmpty(value)) return null;
  // 0. Resolve MODEOBJ.xxx — CHỈ khi modeObjData tồn tại
  if (modeObjData && typeof value === "string" && value.includes("MODEOBJ.")) {
    value = resolveMODEOBJ(value, modeObjData);
    if (value === null || value === undefined) return null;
    if (typeof value !== "string") return value;
  }
  // 1. JSON_ prefix
  if (typeof value === "string" && value.startsWith("JSON_")) {
    return parseCssString(value.replace("JSON_", ""));
  }
  // 2. Boolean
  if (typeof value === "string") {
    const upperValue = value.toUpperCase().trim();
    if (upperValue === "TRUE" || upperValue === "FALSE") {
      return parseBoolean(value);
    }
  }
  // 3. ADD_
  if (typeof value === "string" && value.startsWith("ADD_")) {
    const resolvedValue = resolveAddKey(value, dataRow);
    if (
      resolvedValue !== value &&
      resolvedValue !== value.replace("ADD_", "")
    ) {
      return parseSpecialValue(resolvedValue, dataRow, modeObjData);
    }
    return value.replace("ADD_", "");
  }
  // 4. Number
  if (typeof value === "string" && !isNaN(value) && value.trim() !== "") {
    return Number(value);
  }
  return value;
}
function resolveAllProperties(obj, dataRow, excludeKeys = [], modeObjData) {
  const resolved = {};
  for (const [key, value] of Object.entries(obj)) {
    if (excludeKeys.includes(key)) {
      resolved[key] = value;
      continue;
    }
    const resolvedValue = parseSpecialValue(value, dataRow, modeObjData);
    if (resolvedValue !== null) {
      resolved[key] = resolvedValue;
    }
  }
  return resolved;
}
function groupConfigsByAction(configItem, dataRow) {
  const actionsMap = new Map();
  for (const [key, value] of Object.entries(configItem)) {
    const parsed = parseActionKey(key);
    if (!parsed) continue;
    if (isNullOrEmpty(value)) continue;
    const resolvedValue = parseSpecialValue(value, dataRow);
    if (!actionsMap.has(parsed.actionNum)) {
      actionsMap.set(parsed.actionNum, {});
    }
    actionsMap.get(parsed.actionNum).content = resolvedValue;
  }
  const validActions = new Map();
  for (const [actionNum, actionData] of actionsMap) {
    if (actionData.content && !isNullOrEmpty(actionData.content)) {
      validActions.set(actionNum, actionData);
    }
  }
  return new Map([...validActions.entries()].sort((a, b) => a[0] - b[0]));
}
function buildStyleCss(styleCssName, dataRow, modeObjData) {
  if (isNullOrEmpty(styleCssName)) return {};
  const styleItem = arr2_styles.find(
    (item) => item.styleCssName === styleCssName,
  );
  if (!styleItem) return {};
  let mergedCss = {};
  for (let i = 1; i <= 18; i++) {
    const key = `css-${String(i).padStart(3, "0")}`;
    let cssValue = styleItem[key];
    if (isNullOrEmpty(cssValue)) continue;
    // Resolve MODEOBJ. — CHỈ khi modeObjData tồn tại
    if (
      modeObjData &&
      typeof cssValue === "string" &&
      cssValue.includes("MODEOBJ.")
    ) {
      cssValue = resolveMODEOBJ(cssValue, modeObjData);
      if (cssValue === null) continue;
    }
    // Resolve ADD_
    if (typeof cssValue === "string" && cssValue.includes("ADD_")) {
      const matches = cssValue.match(/ADD_[\w]+/g);
      if (matches) {
        for (const addKey of matches) {
          cssValue = cssValue.replace(addKey, resolveAddKey(addKey, dataRow));
        }
      }
    }
    const parsed = parseCssString(cssValue);
    if (Object.keys(parsed).length > 0) {
      for (const [cssProp, cssVal] of Object.entries(parsed)) {
        mergedCss[cssProp] = parseSpecialValue(cssVal, dataRow, modeObjData);
      }
    }
  }
  return mergedCss;
}
function buildContentObject(contentName, dataRow, modeObjData) {
  if (isNullOrEmpty(contentName)) return {};
  const contentItem = arr3_contents.find(
    (item) => item.contentName === contentName,
  );
  if (!contentItem) {
    console.warn(`⚠️ Content not found: ${contentName}`);
    return {};
  }
  let contentObj = {};
  for (let i = 1; i <= 8; i++) {
    const keyField = `key-${String(i).padStart(2, "0")}`;
    const contentField = `content-${String(i).padStart(2, "0")}`;
    const keyName = contentItem[keyField];
    let contentValue = contentItem[contentField];
    if (isNullOrEmpty(keyName) || isNullOrEmpty(contentValue)) continue;
    if (keyName === "contentName" || keyName === "Mô tả") continue;
    const parsedValue = parseSpecialValue(contentValue, dataRow, modeObjData);
    if (parsedValue !== null) {
      contentObj[keyName] = parsedValue;
    }
  }
  return contentObj;
}
// ================================
// ⭐⭐⭐ MODE PROCESSING
// ================================
/**
 * Parse modeOBJ string → object
 * ⭐ rawModeOBJ null/undefined → trả về {} rỗng + auto-id
 *    → MODEOBJ.id luôn có giá trị, tránh lỗi
 *    → MODEOBJ.img sẽ = undefined → bị bỏ qua (không lỗi)
 */
function parseModeOBJ(rawModeOBJ, configIndex, rowIndex) {
  let modeObjData = {};
  if (!isNullOrEmpty(rawModeOBJ)) {
    if (typeof rawModeOBJ === "string") {
      try {
        modeObjData = JSON.parse(rawModeOBJ);
      } catch (e) {
        console.warn("   ⚠️ Failed to parse modeOBJ:", e.message);
        modeObjData = {};
      }
    } else if (typeof rawModeOBJ === "object") {
      modeObjData = { ...rawModeOBJ };
    }
  }
  // ⭐ Auto-generate id nếu thiếu — đảm bảo cùng mode = cùng id = duy nhất
  if (isNullOrEmpty(modeObjData.id)) {
    modeObjData.id = `mode-auto-id-r${rowIndex}-c${configIndex}`;
  }
  return modeObjData;
}
/**
 * ⭐ FIX #2: Nếu group === null / "null" / undefined → xóa khỏi action
 * Coi như không có group
 */
function cleanNullGroup(action) {
  if ("group" in action && isNullOrEmpty(action.group)) {
    delete action.group;
  }
  return action;
}

/**
 * Build actions from MODE
 * Tìm tất cả arr3 items có mode trùng → sort by sttMode → build actions
 */
function buildModeActions(resolvedMode, dataRow, modeObjData) {
  if (isNullOrEmpty(resolvedMode)) return [];
  const modeContents = arr3_contents
    .filter((item) => item.mode === resolvedMode)
    .sort((a, b) => {
      const sttA = a.sttMode != null ? a.sttMode : 999;
      const sttB = b.sttMode != null ? b.sttMode : 999;
      return sttA - sttB;
    });
  if (modeContents.length === 0) return [];
  const actions = [];
  for (const modeContentItem of modeContents) {
    const contentName = modeContentItem.contentName;
    if (isNullOrEmpty(contentName)) continue;
    // ⭐ modeObjData có thể là {} (khi MODEOBJ gốc = null)
    // → MODEOBJ.img = undefined → bị bỏ qua
    // → MODEOBJ.id = auto-id → hoạt động bình thường
    let action = buildContentObject(contentName, dataRow, modeObjData);
    if (Object.keys(action).length === 0) continue;
    // ⭐ FIX #2: group null → xóa
    cleanNullGroup(action);
    // ⭐ styleCss: cùng 1 mode → cùng contentName → cùng css
    const styleCssName = `${contentName}-css`;
    const builtStyle = buildStyleCss(styleCssName, dataRow, modeObjData);
    if (Object.keys(builtStyle).length > 0) {
      action.styleCss = builtStyle;
    }
    actions.push(action);
  }
  return actions;
}
// ================================
// 🎬 MAIN PROCESSING
// ================================
arr4_data.forEach((dataRow, rowIndex) => {
  let videoSegments = [];
  arr1_configs.forEach((configItem, configIndex) => {
    let actions = [];
    // ⭐ STEP 0: Resolve modeOBJ TRƯỚC, rồi mới resolve mode
    let resolvedMode = null;
    let modeObjData = null;

    // ⭐ FIX #1 & #3: Parse modeOBJ ĐỘC LẬP với mode
    // → Dù configItem.mode = null, MODEOBJ.xxx vẫn resolve được
    // → modeObjData.id luôn có giá trị (auto-generate nếu thiếu)
    if (configItem.modeOBJ && typeof configItem.modeOBJ === "string") {
      const rawModeOBJ = parseSpecialValue(configItem.modeOBJ, dataRow);
      modeObjData = parseModeOBJ(rawModeOBJ, configIndex, rowIndex);
    }

    // Resolve mode từ configItem.mode (ADD_ → arr4)
    if (configItem.mode && typeof configItem.mode === "string") {
      const rawMode = parseSpecialValue(configItem.mode, dataRow);
      if (!isNullOrEmpty(rawMode) && rawMode !== "NULLA") {
        resolvedMode = rawMode;
      }
    }

    // ⭐ FIX #3b: Nếu configItem.mode = null nhưng modeObjData có .mode → dùng nó
    if (!resolvedMode && modeObjData && !isNullOrEmpty(modeObjData.mode)) {
      resolvedMode = modeObjData.mode;
    }
    // ⭐ STEP 1: content-XX actions (giữ nguyên logic cũ)
    const actionsMap = groupConfigsByAction(configItem, dataRow);
    for (const [actionNum, actionData] of actionsMap) {
      const { content: contentName } = actionData;
      if (isNullOrEmpty(contentName)) continue;
      let action = buildContentObject(contentName, dataRow, modeObjData);
      if (Object.keys(action).length === 0) continue;
      // ⭐ FIX #2: group null → xóa
      cleanNullGroup(action);
      const styleCssName = `${contentName}-css`;
      const builtStyle = buildStyleCss(styleCssName, dataRow, modeObjData);
      if (Object.keys(builtStyle).length > 0) {
        action.styleCss = builtStyle;
      }
      actions.push(action);
    }
    // ⭐ STEP 2: MODE actions — chỉ khi có resolvedMode
    if (resolvedMode) {
      const modeActions = buildModeActions(resolvedMode, dataRow, modeObjData);
      if (modeActions.length > 0) {
        actions.push(...modeActions);
      }
    }
    // ⭐ STEP 3: Build segment
    if (actions.length === 0) return;
    const excludeKeys = Object.keys(configItem).filter(
      (key) => parseActionKey(key) !== null,
    );
    excludeKeys.push("stt", "mode", "modeOBJ");
    const resolvedConfigProps = resolveAllProperties(
      configItem,
      dataRow,
      excludeKeys,
      modeObjData,
    );
    let segment = {
      actions: actions,
      ...resolvedConfigProps,
      stt: configIndex,
    };
    Object.keys(segment).forEach((key) => {
      if (segment[key] === null || segment[key] === undefined) {
        delete segment[key];
      }
    });
    videoSegments.push(segment);
  });
  // ⭐ VALIDATION & FILTERING (giữ nguyên)
  const validatedSegments = videoSegments
    .filter((segment) => {
      if (
        segment.code === "NULLA" ||
        segment.code === null ||
        segment.code === undefined
      ) {
        return false;
      }
      return true;
    })
    .map((segment) => {
      const validActions = segment.actions.filter((action) => {
        return !JSON.stringify(action).includes("NULLA");
      });
      return { ...segment, actions: validActions };
    });
  if (validatedSegments.length > 0) {
    videoData01.push(validatedSegments);
  }
});
console.log(JSON.stringify(videoData01));
// ================================
// 📤 EXPORT
// ================================
export { videoData01 };