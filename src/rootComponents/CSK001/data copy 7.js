// ================================
// 📦 IMPORT
// ================================
import DataFront from "./data_Front_001.json" with { type: "json" };
import { initTransitions } from "../../components/ActionOrchestrator/utils/transitions/transitionResolver.js";
// ─── DataFront arrays ────────────────────────────────────────────────────────
// arr05 (index 4): tuỳ chọn — mảng flat-row transitions cùng format transitions.json
// Nếu DataFront chỉ có 4 mảng thì arr5_transitions = undefined → an toàn
const [arr1_configs, arr2_styles, arr3_contents, arr4_data, arr5_transitions] =
  DataFront;
// ─── Runtime load custom transitions từ arr05 ────────────────────────────────
// Gọi TRƯỚC khi bất kỳ component nào render → transitions sẵn sàng ngay
// Hỗ trợ 2 format:
//   - Flat array: [{ transitionName, isLoop, delayState, at-01, keyframes-01, ... }]
//   - Wrapped array (Excel export): [[{ ... }]] → unwrap tự động
if (arr5_transitions) {
  const rows = Array.isArray(arr5_transitions)
    ? Array.isArray(arr5_transitions[0])
      ? arr5_transitions[0]
      : arr5_transitions
    : [];
  if (rows.length > 0) {
    initTransitions(rows);
    console.log(
      `✅ data.js: Loaded ${rows.length} custom transition(s) from arr05`,
    );
  }
}

let videoData01 = [];

// ================================
// 🎲 RANDOM RESOLVER
// ================================
// Seed cố định per-video — được gán lại đầu mỗi vòng arr4_data.forEach
// Đảm bảo mọi RANDOMfixed() trong cùng 1 video luôn chọn cùng index
let _videoRandomSeed = 1;

// Parse danh sách tham số: "1,2,hello,3.5" → [1, 2, "hello", 3.5]
function parseRandomArgs(argsStr) {
  return argsStr.split(",").map((s) => {
    const t = s.trim();
    if (t !== "" && !isNaN(t)) return Number(t);
    return t;
  });
}

// RANDOM: mỗi lần gọi chọn ngẫu nhiên hoàn toàn
function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// RANDOMfixed: dùng seed cố định của video hiện tại → index nhất quán
function pickRandomFixed(items) {
  return items[_videoRandomSeed % items.length];
}

// Kiểm tra nhanh có chứa pattern RANDOM không
function hasRandomPattern(value) {
  return (
    typeof value === "string" &&
    (value.includes("RANDOM(") || value.includes("RANDOMfixed("))
  );
}

// Thay thế inline tất cả RANDOM/RANDOMfixed trong 1 chuỗi (trả về string)
// Dùng cho buildStyleCss trước khi parseCssString
//
// Hỗ trợ 2 dạng:
//   Exact  : RANDOM(-1,2,10)              → "2"
//   Concat : +RANDOM(-1,2,10)+deg         → "2deg"   (+ là delimiter, bị bỏ ra)
//            prefix+RANDOM(-1,2,10)+deg   → "prefix2deg"
//
// Regex bắt toàn bộ "concat token" gồm ký tự [A-Za-z0-9_.+-] bao quanh RANDOM(...)
// → nếu token chứa + thì đẩy qua resolveConcat để nối đúng
function resolveRandomInlineString(str) {
  if (typeof str !== "string") return str;

  // RANDOMfixed trước để không bị RANDOM khớp nhầm phần "fixed"
  str = str.replace(
    /[A-Za-z0-9_.+\-]*RANDOMfixed\([^)]+\)[A-Za-z0-9_.+\-]*/g,
    (match) => {
      if (match.includes("+")) return String(resolveConcat(match, null));
      const m = match.match(/^RANDOMfixed\(([^)]+)\)$/);
      return m ? String(pickRandomFixed(parseRandomArgs(m[1]))) : match;
    },
  );

  str = str.replace(
    /[A-Za-z0-9_.+\-]*RANDOM\([^)]+\)[A-Za-z0-9_.+\-]*/g,
    (match) => {
      if (match.includes("+")) return String(resolveConcat(match, null));
      const m = match.match(/^RANDOM\(([^)]+)\)$/);
      return m ? String(pickRandom(parseRandomArgs(m[1]))) : match;
    },
  );

  return str;
}

// ================================
// 🔗 GENERAL CONCAT RESOLVER  (thay thế resolveMODEOBJConcat)
// ================================
// Xử lý chuỗi dạng "partA + partB + partC" — mỗi part có thể là:
//   MODEOBJ.key  |  RANDOM(...)  |  RANDOMfixed(...)  |  số  |  string thuần
// Cộng số+số = tổng; còn lại nối chuỗi
function resolveConcat(value, modeObjData) {
  const parts = value.split("+").map((p) => p.trim());
  const resolved = parts.map((part) => {
    // MODEOBJ.key
    const mobjMatch = part.match(/^MODEOBJ\.(\w+)$/);
    if (mobjMatch && modeObjData) {
      const val = modeObjData[mobjMatch[1]];
      return val !== undefined && val !== null ? val : "";
    }
    // RANDOMfixed(...)
    const rfMatch = part.match(/^RANDOMfixed\(([^)]+)\)$/);
    if (rfMatch) return pickRandomFixed(parseRandomArgs(rfMatch[1]));
    // RANDOM(...)
    const rMatch = part.match(/^RANDOM\(([^)]+)\)$/);
    if (rMatch) return pickRandom(parseRandomArgs(rMatch[1]));
    // số thuần
    if (part !== "" && !isNaN(part)) return Number(part);
    return part;
  });
  let result = resolved[0];
  for (let i = 1; i < resolved.length; i++) {
    const next = resolved[i];
    if (typeof result === "number" && typeof next === "number")
      result = result + next;
    else result = String(result) + String(next);
  }
  return result;
}

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
    const upper = value.toUpperCase().trim();
    if (upper === "TRUE") return true;
    if (upper === "FALSE") return false;
  }
  return value;
}
function parseActionKey(key) {
  if (!key || typeof key !== "string") return null;
  const match = key.match(/^content-(\d{2})$/);
  if (match) return { actionNum: parseInt(match[1], 10), originalKey: key };
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
  if (dataRow && Object.prototype.hasOwnProperty.call(dataRow, addKey))
    return dataRow[addKey];
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
// resolveMODEOBJConcat giữ lại để không breaking change,
// nhưng delegate sang resolveConcat (đã bao gồm RANDOM)
function resolveMODEOBJConcat(value, modeObjData) {
  return resolveConcat(value, modeObjData);
}
function resolveMODEOBJ(value, modeObjData) {
  if (!modeObjData || !value || typeof value !== "string") return value;
  if (!value.includes("MODEOBJ.")) return value;
  // Dùng resolveConcat thay vì resolveMODEOBJConcat riêng lẻ
  // → xử lý đúng cả "MODEOBJ.x + RANDOM(1,2,3) + B"
  if (value.includes("+")) return resolveConcat(value, modeObjData);
  const exactMatch = value.match(/^MODEOBJ\.(\w+)$/);
  if (exactMatch) {
    const resolved = modeObjData[exactMatch[1]];
    return resolved !== undefined ? resolved : null;
  }
  return value.replace(/MODEOBJ\.(\w+)/g, (_, key) => {
    const resolved = modeObjData[key];
    return resolved !== undefined && resolved !== null ? resolved : "";
  });
}

// ================================
// ⭐ PARSE SPECIAL VALUE
// ================================
function parseSpecialValue(value, dataRow, modeObjData) {
  if (isNullOrEmpty(value)) return null;

  // ── 1. MODEOBJ. ──────────────────────────────────────────────────────────
  if (modeObjData && typeof value === "string" && value.includes("MODEOBJ.")) {
    value = resolveMODEOBJ(value, modeObjData);
    if (value === null || value === undefined) return null;
    if (typeof value !== "string") return value;
  }

  // ── 2. RANDOM / RANDOMfixed ───────────────────────────────────────────────
  // Xử lý sau MODEOBJ để MODEOBJ có thể resolve trước, sau đó RANDOM chạy tiếp
  if (hasRandomPattern(value)) {
    // Dạng concat: "A+RANDOM(1,2,3)+B" hoặc "MODEOBJ.x+RANDOMfixed(a,b)"
    if (value.includes("+")) {
      value = resolveConcat(value, modeObjData);
      if (typeof value !== "string") return value;
      // tiếp tục pipeline (có thể là số string còn sót)
    } else {
      // Exact match: toàn bộ value là RANDOM(...)
      const rfExact = value.match(/^RANDOMfixed\(([^)]+)\)$/);
      if (rfExact) {
        const picked = pickRandomFixed(parseRandomArgs(rfExact[1]));
        // parse thử số
        if (typeof picked === "string" && picked !== "" && !isNaN(picked))
          return Number(picked);
        return picked;
      }
      const rExact = value.match(/^RANDOM\(([^)]+)\)$/);
      if (rExact) {
        const picked = pickRandom(parseRandomArgs(rExact[1]));
        if (typeof picked === "string" && picked !== "" && !isNaN(picked))
          return Number(picked);
        return picked;
      }
      // Inline trong chuỗi: "scaleX(RANDOM(0.8,1,1.2))" → "scaleX(1)"
      value = resolveRandomInlineString(value);
    }
  }

  // ── 3. JSON_ prefix ───────────────────────────────────────────────────────
  if (typeof value === "string" && value.startsWith("JSON_")) {
    return parseCssString(value.replace("JSON_", ""));
  }

  // ── 4. Boolean ────────────────────────────────────────────────────────────
  if (typeof value === "string") {
    const upper = value.toUpperCase().trim();
    if (upper === "TRUE" || upper === "FALSE") return parseBoolean(value);
  }

  // ── 5. ADD_ ───────────────────────────────────────────────────────────────
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

  // ── 6. Number coercion ────────────────────────────────────────────────────
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
    if (resolvedValue !== null) resolved[key] = resolvedValue;
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
    if (!actionsMap.has(parsed.actionNum)) actionsMap.set(parsed.actionNum, {});
    actionsMap.get(parsed.actionNum).content = resolvedValue;
  }
  const validActions = new Map();
  for (const [num, data] of actionsMap) {
    if (data.content && !isNullOrEmpty(data.content))
      validActions.set(num, data);
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

    // ── MODEOBJ inline trên raw cssValue string ──────────────────────────
    if (
      modeObjData &&
      typeof cssValue === "string" &&
      cssValue.includes("MODEOBJ.")
    ) {
      cssValue = resolveMODEOBJ(cssValue, modeObjData);
      if (cssValue === null) continue;
    }

    // ── ADD_ inline trên raw cssValue string ─────────────────────────────
    if (typeof cssValue === "string" && cssValue.includes("ADD_")) {
      const matches = cssValue.match(/ADD_[\w]+/g);
      if (matches) {
        for (const addKey of matches) {
          cssValue = cssValue.replace(addKey, resolveAddKey(addKey, dataRow));
        }
      }
    }

    // ── RANDOM / RANDOMfixed inline trên raw cssValue string ─────────────
    // Xử lý trước parseCssString để chuỗi JSON không bị lỗi parse
    // Ví dụ: {"scale":"RANDOM(0.8,1,1.2)"} → {"scale":"1"} → parseCssString → {scale: 1}
    if (typeof cssValue === "string" && hasRandomPattern(cssValue)) {
      cssValue = resolveRandomInlineString(cssValue);
    }

    const parsed = parseCssString(cssValue);
    if (Object.keys(parsed).length > 0) {
      for (const [cssProp, cssVal] of Object.entries(parsed)) {
        // parseSpecialValue xử lý nốt các token còn sót (MODEOBJ/ADD_/RANDOM
        // nằm bên trong JSON value đã được parse ra)
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
    if (parsedValue !== null) contentObj[keyName] = parsedValue;
  }
  return contentObj;
}

// ================================
// ⭐⭐⭐ MODE PROCESSING
// ================================
function parseModeOBJ(rawModeOBJ, configIndex, rowIndex) {
  let modeObjData = {};
  if (!isNullOrEmpty(rawModeOBJ)) {
    if (typeof rawModeOBJ === "string") {
      try {
        modeObjData = JSON.parse(rawModeOBJ);
      } catch (e) {
        console.warn("   ⚠️ Failed to parse modeOBJ:", e.message);
      }
    } else if (typeof rawModeOBJ === "object") {
      modeObjData = { ...rawModeOBJ };
    }
  }
  if (isNullOrEmpty(modeObjData.id)) {
    modeObjData.id = `mode-auto-id-r${rowIndex}-c${configIndex}`;
  }
  return modeObjData;
}
function cleanNullGroup(action) {
  if ("group" in action && isNullOrEmpty(action.group)) delete action.group;
  return action;
}
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
    if (Object.keys(builtStyle).length > 0) action.styleCss = builtStyle;
    if (modeContentItem.sttMode != null)
      action._sttMode = Number(modeContentItem.sttMode);
    if (!isNullOrEmpty(modeContentItem.modeGroup))
      action._modeGroup = Number(modeContentItem.modeGroup);
    actions.push(action);
  }
  return actions;
}

// ================================
// ⭐⭐⭐ INMODE SPLITTING
// ================================
function splitInmodeSegments(segments) {
  const result = [];
  for (const segment of segments) {
    if (segment.code !== "INMODE") {
      result.push(segment);
      continue;
    }
    const actions = segment.actions || [];
    if (actions.length === 0) continue;
    const allGroupIndices = new Set();
    for (const action of actions) {
      if (action._modeGroup != null && !isNaN(action._modeGroup)) {
        allGroupIndices.add(action._modeGroup);
      }
    }
    if (allGroupIndices.size === 0) allGroupIndices.add(0);
    const sortedGroupIndices = [...allGroupIndices].sort((a, b) => a - b);
    const firstGroupIndex = sortedGroupIndices[0];
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
      let newCode = segment.code,
        newTimeFixed,
        hasTimeFixed = false;
      for (const action of cleanedActions) {
        if (action.code != null && action.code !== "") newCode = action.code;
        if (action.timeFixed != null) {
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
      if (hasTimeFixed) newSegment.timeFixed = newTimeFixed;
      else delete newSegment.timeFixed;
      result.push(newSegment);
    }
  }
  return result;
}
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
  // ── Khởi tạo seed ngẫu nhiên cho video này ────────────────────────────────
  // Tất cả RANDOMfixed() trong cùng video sẽ dùng chung seed này
  // → luôn trỏ đến cùng index trong danh sách options
  _videoRandomSeed = Math.floor(Math.random() * 100) + 1; // 1–100

  let videoSegments = [];
  arr1_configs.forEach((configItem, configIndex) => {
    let actions = [];
    // STEP 0: Resolve modeOBJ → mode
    let resolvedMode = null;
    let modeObjData = null;
    if (configItem.modeOBJ && typeof configItem.modeOBJ === "string") {
      const rawModeOBJ = parseSpecialValue(configItem.modeOBJ, dataRow);
      modeObjData = parseModeOBJ(rawModeOBJ, configIndex, rowIndex);
    }
    if (configItem.mode && typeof configItem.mode === "string") {
      const rawMode = parseSpecialValue(configItem.mode, dataRow);
      if (!isNullOrEmpty(rawMode) && rawMode !== "NULLA")
        resolvedMode = rawMode;
    }
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
      if (Object.keys(builtStyle).length > 0) action.styleCss = builtStyle;
      actions.push(action);
    }
    // STEP 2: MODE actions
    if (resolvedMode) {
      const modeActions = buildModeActions(resolvedMode, dataRow, modeObjData);
      if (modeActions.length > 0) actions.push(...modeActions);
    }
    if (actions.length === 0) return;
    // STEP 3: Build segment
    const excludeKeys = Object.keys(configItem)
      .filter((key) => parseActionKey(key) !== null)
      .concat(["stt", "mode", "modeOBJ"]);
    const resolvedConfigProps = resolveAllProperties(
      configItem,
      dataRow,
      excludeKeys,
      modeObjData,
    );
    let segment = { actions, ...resolvedConfigProps, stt: configIndex };
    Object.keys(segment).forEach((key) => {
      if (segment[key] === null || segment[key] === undefined)
        delete segment[key];
    });
    videoSegments.push(segment);
  });
  // ── KQ001: Tách INMODE trước ─────────────────────────────────────────────
  const splitSegments = splitInmodeSegments(videoSegments);
  // ── KQ002: Filter NULLA sau khi split ────────────────────────────────────
  const validatedSegments = splitSegments
    .filter((segment) => {
      if (segment.code === "NULLA" || segment.code == null) return false;
      return true;
    })
    .map((segment) => {
      const validActions = segment.actions.filter(
        (action) => !JSON.stringify(action).includes("NULLA"),
      );
      return { ...segment, actions: validActions };
    });
  const finalSegments = cleanMetadataFromActions(validatedSegments);
  if (finalSegments.length > 0) videoData01.push(finalSegments);
});
console.log(JSON.stringify(videoData01));
// ================================
// 📤 EXPORT
// ================================
export { videoData01 };
