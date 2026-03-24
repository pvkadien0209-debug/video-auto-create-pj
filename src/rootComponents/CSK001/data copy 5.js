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
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith("`") && value.endsWith("`"))
  ) {
    value = value.slice(1, -1);
  }
  if (/^-?\d+(\.\d+)?$/.test(value)) value = Number(value);
  else if (value === "true") value = true;
  else if (value === "false") value = false;
  else if (value === "null") value = null;
  return [key, value];
}

function parseCssString(cssStr) {
  if (!cssStr || cssStr === "null" || cssStr === "undefined") return {};
  if (typeof cssStr === "object" && cssStr !== null) return cssStr;
  if (typeof cssStr !== "string") return {};
  cssStr = cssStr.trim();
  if (!cssStr) return {};
  try {
    const parsed = JSON.parse(cssStr);
    if (typeof parsed === "object" && parsed !== null) return parsed;
  } catch (_) {}
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
  const match = key.match(/^content-(\d{2})$/);
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
 * Resolve một expression dạng "MODEOBJ.key+literal+MODEOBJ.key2+..."
 *
 * Luật kết hợp (left-to-right):
 *  - Nếu cả 2 phần kề đều là số (number) → cộng số học
 *  - Ngược lại → nối chuỗi (String concat)
 *
 * Ví dụ:
 *  MODEOBJ.id+div001          → "abcdiv001"   (id="abc")
 *  MODEOBJ.price+10           → 110            (price=100, cả 2 là số)
 *  MODEOBJ.price+px           → "100px"        (100 + "px" → string)
 *  MODEOBJ.id+abc+MODEOBJ.name → "xabcy"       (id="x", name="y")
 *  MODEOBJ.x+1+2              → 8              (x=5, 5+1=6, 6+2=8)
 *  MODEOBJ.x+1+abc            → "6abc"         (5+1=6 số, 6+"abc"→string)
 */
function resolveMODEOBJConcat(value, modeObjData) {
  const parts = value.split("+").map((p) => p.trim());

  // Resolve từng phần thành giá trị thực
  const resolved = parts.map((part) => {
    // Là MODEOBJ.xxx?
    const mobjMatch = part.match(/^MODEOBJ\.(\w+)$/);
    if (mobjMatch) {
      const key = mobjMatch[1];
      const val = modeObjData[key];
      return val !== undefined && val !== null ? val : "";
    }
    // Literal number?
    if (part !== "" && !isNaN(part)) return Number(part);
    // Literal string
    return part;
  });

  // Kết hợp left-to-right
  let result = resolved[0];
  for (let i = 1; i < resolved.length; i++) {
    const next = resolved[i];
    if (typeof result === "number" && typeof next === "number") {
      result = result + next; // cộng số học
    } else {
      result = String(result) + String(next); // nối chuỗi
    }
  }
  return result;
}

/**
 * Resolve MODEOBJ.xxx pattern trong một value string.
 * ⭐ Nếu modeObjData null/undefined → trả value nguyên gốc, KHÔNG xét.
 * ⭐ NEW: Hỗ trợ dạng MODEOBJ.xxx+literal+MODEOBJ.yyy (nhiều '+').
 *
 * Ưu tiên xử lý:
 *  1. Có dấu '+' trong value → resolveMODEOBJConcat (toàn bộ expression)
 *  2. Exact match "MODEOBJ.xxx" → trả giá trị trực tiếp (giữ kiểu dữ liệu)
 *  3. Inline replacement trong chuỗi → String.replace
 */
function resolveMODEOBJ(value, modeObjData) {
  if (!modeObjData || !value || typeof value !== "string") return value;
  if (!value.includes("MODEOBJ.")) return value;

  // ⭐ NEW: Phát hiện concat — có dấu '+' trong chuỗi
  // Guard: chỉ kích hoạt khi value thực sự chứa "MODEOBJ." kèm "+"
  if (value.includes("+")) {
    return resolveMODEOBJConcat(value, modeObjData);
  }

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
  for (let i = 1; i <= 50; i++) {
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
  for (let i = 1; i <= 50; i++) {
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
  // Auto-generate id nếu thiếu
  if (isNullOrEmpty(modeObjData.id)) {
    modeObjData.id = `mode-auto-id-r${rowIndex}-c${configIndex}`;
  }
  return modeObjData;
}

/**
 * ⭐ group === null / "null" / undefined → xóa khỏi action
 */
function cleanNullGroup(action) {
  if ("group" in action && isNullOrEmpty(action.group)) {
    delete action.group;
  }
  return action;
}

/**
 * Build actions from MODE
 * ⭐ Gắn _sttMode và _modeGroup để phục vụ splitInmodeSegments
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
    let action = buildContentObject(contentName, dataRow, modeObjData);
    if (Object.keys(action).length === 0) continue;
    cleanNullGroup(action);
    const styleCssName = `${contentName}-css`;
    const builtStyle = buildStyleCss(styleCssName, dataRow, modeObjData);
    if (Object.keys(builtStyle).length > 0) {
      action.styleCss = builtStyle;
    }
    if (modeContentItem.sttMode != null) {
      action._sttMode = Number(modeContentItem.sttMode);
    }
    if (!isNullOrEmpty(modeContentItem.modeGroup)) {
      action._modeGroup = Number(modeContentItem.modeGroup);
    }
    actions.push(action);
  }
  return actions;
}

// ================================
// ⭐⭐⭐ INMODE SPLITTING
// ================================

/**
 * Tách segment có code === "INMODE" thành nhiều segment con theo _modeGroup.
 */
function splitInmodeSegments(segments) {
  const result = [];
  for (const segment of segments) {
    if (segment.code !== "INMODE") {
      result.push(segment);
      continue;
    }
    const actions = segment.actions || [];
    if (actions.length === 0) continue;

    // Thu thập tất cả modeGroup index
    const allGroupIndices = new Set();
    for (const action of actions) {
      if (action._modeGroup != null && !isNaN(action._modeGroup)) {
        allGroupIndices.add(action._modeGroup);
      }
    }
    if (allGroupIndices.size === 0) allGroupIndices.add(0);

    const sortedGroupIndices = [...allGroupIndices].sort((a, b) => a - b);
    const firstGroupIndex = sortedGroupIndices[0];

    // Gom actions vào nhóm
    const groupMap = new Map();
    for (const idx of sortedGroupIndices) groupMap.set(idx, []);
    for (const action of actions) {
      const groupIdx =
        action._modeGroup != null && !isNaN(action._modeGroup)
          ? action._modeGroup
          : firstGroupIndex;
      if (!groupMap.has(groupIdx)) groupMap.set(groupIdx, []);
      groupMap.get(groupIdx).push(action);
    }

    const sortedGroups = [...groupMap.entries()].sort((a, b) => a[0] - b[0]);
    for (let gi = 0; gi < sortedGroups.length; gi++) {
      const [, groupActions] = sortedGroups[gi];
      if (groupActions.length === 0) continue;

      groupActions.sort((a, b) => {
        const sttA = a._sttMode != null ? a._sttMode : 999;
        const sttB = b._sttMode != null ? b._sttMode : 999;
        return sttA - sttB;
      });

      const cleanedActions = groupActions.map((action) => {
        const cleaned = { ...action };
        delete cleaned._sttMode;
        delete cleaned._modeGroup;
        return cleaned;
      });

      // Lấy code và timeFixed từ action cuối cùng có giá trị
      let newCode = segment.code;
      let newTimeFixed = undefined;
      let hasTimeFixed = false;
      for (const action of cleanedActions) {
        if (
          action.code !== null &&
          action.code !== undefined &&
          action.code !== ""
        ) {
          newCode = action.code;
        }
        if (action.timeFixed !== null && action.timeFixed !== undefined) {
          newTimeFixed = action.timeFixed;
          hasTimeFixed = true;
        }
      }

      const newSegment = {
        ...segment,
        code: newCode,
        actions: cleanedActions,
        stt: segment.stt + (gi + 1) * 0.001,
      };
      if (hasTimeFixed) {
        newSegment.timeFixed = newTimeFixed;
      } else {
        delete newSegment.timeFixed;
      }
      result.push(newSegment);
    }
  }
  return result;
}

/**
 * Xóa metadata tạm (_sttMode, _modeGroup) khỏi tất cả actions
 */
function cleanMetadataFromActions(segments) {
  return segments.map((segment) => {
    const cleanedActions = segment.actions.map((action) => {
      const cleaned = { ...action };
      delete cleaned._sttMode;
      delete cleaned._modeGroup;
      return cleaned;
    });
    return { ...segment, actions: cleanedActions };
  });
}

// ================================
// 🎬 MAIN PROCESSING
// ================================
arr4_data.forEach((dataRow, rowIndex) => {
  let videoSegments = [];

  arr1_configs.forEach((configItem, configIndex) => {
    let actions = [];

    // STEP 0: Resolve modeOBJ trước, rồi mới resolve mode
    let resolvedMode = null;
    let modeObjData = null;

    if (configItem.modeOBJ && typeof configItem.modeOBJ === "string") {
      const rawModeOBJ = parseSpecialValue(configItem.modeOBJ, dataRow);
      modeObjData = parseModeOBJ(rawModeOBJ, configIndex, rowIndex);
    }

    if (configItem.mode && typeof configItem.mode === "string") {
      const rawMode = parseSpecialValue(configItem.mode, dataRow);
      if (!isNullOrEmpty(rawMode) && rawMode !== "NULLA") {
        resolvedMode = rawMode;
      }
    }

    // Fallback: nếu modeObjData có .mode → dùng nó
    if (!resolvedMode && modeObjData && !isNullOrEmpty(modeObjData.mode)) {
      resolvedMode = modeObjData.mode;
    }

    // STEP 1: content-XX actions
    const actionsMap = groupConfigsByAction(configItem, dataRow);
    for (const [, actionData] of actionsMap) {
      const { content: contentName } = actionData;
      if (isNullOrEmpty(contentName)) continue;
      let action = buildContentObject(contentName, dataRow, modeObjData);
      if (Object.keys(action).length === 0) continue;
      cleanNullGroup(action);
      const styleCssName = `${contentName}-css`;
      const builtStyle = buildStyleCss(styleCssName, dataRow, modeObjData);
      if (Object.keys(builtStyle).length > 0) {
        action.styleCss = builtStyle;
      }
      actions.push(action);
    }

    // STEP 2: MODE actions
    if (resolvedMode) {
      const modeActions = buildModeActions(resolvedMode, dataRow, modeObjData);
      if (modeActions.length > 0) {
        actions.push(...modeActions);
      }
    }

    // STEP 3: Build segment
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

  // ================================
  // KQ001: Tách INMODE segments TRƯỚC (trước khi filter NULLA)
  // ================================
  const splitSegments = splitInmodeSegments(videoSegments);

  // ================================
  // KQ002: Filter NULLA SAU KHI đã split INMODE
  // ================================
  const validatedSegments = splitSegments
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

  // Xóa metadata tạm (_sttMode, _modeGroup)
  const finalSegments = cleanMetadataFromActions(validatedSegments);

  if (finalSegments.length > 0) {
    videoData01.push(finalSegments);
  }
});

console.log(JSON.stringify(videoData01));

// ================================
// 📤 EXPORT
// ================================
export { videoData01 };
