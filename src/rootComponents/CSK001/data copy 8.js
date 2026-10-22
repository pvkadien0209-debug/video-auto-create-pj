// ================================
// 📦 IMPORT
// ================================
import DataFront from "./data_Front_001.json" with { type: "json" };
import { initTransitions } from "../../components/ActionOrchestrator/utils/transitions/transitionResolver.js";

// ─── DataFront arrays ─────────────────────────────────────────────────────────
// [0] arr1_configs       : cấu hình segment
// [1] arr2_styles_raw    : styles
// [2] arr3_contents_raw  : contents / mode contents
// [3] arr4_data          : dữ liệu video
// [4] arr5_transitions   : tuỳ chọn — custom transitions
// [5] arr6_stylesLib     : tuỳ chọn — thư viện styles (gộp vào arr2)
// [6] arr7_contentsLib   : tuỳ chọn — thư viện contents (gộp vào arr3)
//     arr6 và arr7 bắt buộc phải cùng có hoặc cùng không có
const [
  arr1_configs,
  arr2_styles_raw,
  arr3_contents_raw,
  arr4_data,
  arr5_transitions,
  arr6_stylesLib,
  arr7_contentsLib,
] = DataFront;

// ─── Merge arr6 → arr2 ; arr7 → arr3 ─────────────────────────────────────────
let arr2_styles = arr2_styles_raw || [];
let arr3_contents = arr3_contents_raw || [];

if (arr6_stylesLib && arr7_contentsLib) {
  arr2_styles = [...arr6_stylesLib, ...arr2_styles];
  arr3_contents = [...arr7_contentsLib, ...arr3_contents];
  console.log(
    `✅ data.js: Merged arr6 (${arr6_stylesLib.length}) into arr2, ` +
      `arr7 (${arr7_contentsLib.length}) into arr3`,
  );
} else if (arr6_stylesLib || arr7_contentsLib) {
  console.warn(
    "⚠️ data.js: arr6 và arr7 phải cùng có hoặc cùng không có — bỏ qua merge.",
  );
}

// ─── Runtime load custom transitions từ arr05 ─────────────────────────────────
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
let _videoRandomSeed = 1;

function parseRandomArgs(argsStr) {
  return argsStr.split(",").map((s) => {
    const t = s.trim();
    if (t !== "" && !isNaN(t)) return Number(t);
    return t;
  });
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickRandomFixed(items) {
  return items[_videoRandomSeed % items.length];
}

function hasRandomPattern(value) {
  return (
    typeof value === "string" &&
    (value.includes("RANDOM(") || value.includes("RANDOMfixed("))
  );
}

// ================================
// ✨ STAR SYNTAX RESOLVER  ( **TOKEN** )
// ================================
// Cú pháp **TOKEN** nhúng trong chuỗi bất kỳ.
// TOKEN có thể là:
//   ADD_xxx          → tra cứu giá trị từ dataRow / arr1 / arr2 / arr3
//   MODEOBJ.key      → tra cứu từ modeObjData
//   RANDOM(...)      → chọn ngẫu nhiên
//   RANDOMfixed(...) → chọn theo seed cố định của video
//
// Ví dụ:
//   {"top":"**ADD_CSStop**"}            → {"top":"100px"}
//   "perspective(800px) rotateY(**RANDOM(-15,2,15)**deg)"
//                                       → "perspective(800px) rotateY(2deg)"
//   {"width":"**MODEOBJ.w**px"}         → {"width":"300px"}

function resolveStarToken(token, dataRow, modeObjData) {
  token = token.trim();

  // MODEOBJ.key
  const mobjMatch = token.match(/^MODEOBJ\.(\w+)$/);
  if (mobjMatch) {
    if (modeObjData) {
      const val = modeObjData[mobjMatch[1]];
      return val !== undefined && val !== null ? String(val) : "";
    }
    return "";
  }

  // RANDOMfixed(...)
  const rfMatch = token.match(/^RANDOMfixed\(([^)]+)\)$/);
  if (rfMatch) return String(pickRandomFixed(parseRandomArgs(rfMatch[1])));

  // RANDOM(...)
  const rMatch = token.match(/^RANDOM\(([^)]+)\)$/);
  if (rMatch) return String(pickRandom(parseRandomArgs(rMatch[1])));

  // ADD_xxx
  if (token.startsWith("ADD_")) {
    const resolved = resolveAddKey(token, dataRow);
    return resolved !== null && resolved !== undefined ? String(resolved) : "";
  }

  return token;
}

function hasStarSyntax(value) {
  return typeof value === "string" && value.includes("**");
}

// Thay thế TẤT CẢ **TOKEN** trong chuỗi str
function resolveStarSyntax(str, dataRow, modeObjData) {
  if (typeof str !== "string" || !str.includes("**")) return str;
  return str.replace(/\*\*([^*]+)\*\*/g, (_, token) =>
    resolveStarToken(token, dataRow, modeObjData),
  );
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
// ⭐ MODEOBJ RESOLVER  (exact form only — không dùng + concat)
// ================================
function resolveMODEOBJ(value, modeObjData) {
  if (!modeObjData || !value || typeof value !== "string") return value;
  if (!value.includes("MODEOBJ.")) return value;

  // Exact: toàn bộ value là MODEOBJ.key
  const exactMatch = value.match(/^MODEOBJ\.(\w+)$/);
  if (exactMatch) {
    const resolved = modeObjData[exactMatch[1]];
    return resolved !== undefined ? resolved : null;
  }

  // Inline fallback (không dùng ** syntax) — replace trực tiếp
  return value.replace(/MODEOBJ\.(\w+)/g, (_, key) => {
    const resolved = modeObjData[key];
    return resolved !== undefined && resolved !== null ? String(resolved) : "";
  });
}

// ================================
// ⭐ PARSE SPECIAL VALUE
// ================================
// Hai dạng thức được hỗ trợ:
//   Dạng 1 (exact) : value chính là token  → "ADD_xxx" | "MODEOBJ.key" | "RANDOM(...)"
//   Dạng 2 (inline): token nằm trong chuỗi → "prefix **TOKEN** suffix"
function parseSpecialValue(value, dataRow, modeObjData) {
  if (isNullOrEmpty(value)) return null;

  // ── 0. ** Syntax ** — resolve tất cả **TOKEN** trong chuỗi ───────────────
  if (hasStarSyntax(value)) {
    value = resolveStarSyntax(value, dataRow, modeObjData);
    // Nếu sau khi resolve vẫn còn chuỗi thuần, tiếp tục pipeline
  }

  // ── 1. MODEOBJ. (exact) ───────────────────────────────────────────────────
  if (modeObjData && typeof value === "string" && value.match(/^MODEOBJ\./)) {
    value = resolveMODEOBJ(value, modeObjData);
    if (value === null || value === undefined) return null;
    if (typeof value !== "string") return value;
  }

  // ── 2. RANDOM / RANDOMfixed (exact) ───────────────────────────────────────
  if (hasRandomPattern(value)) {
    const rfExact = value.match(/^RANDOMfixed\(([^)]+)\)$/);
    if (rfExact) {
      const picked = pickRandomFixed(parseRandomArgs(rfExact[1]));
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

  // ── 5. ADD_ (exact) ───────────────────────────────────────────────────────
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

    // ── Resolve **TOKEN** syntax trước khi parseCssString ────────────────
    // Ví dụ: {"transform":"rotateY(**RANDOM(-15,2,15)**deg)"}
    //      → {"transform":"rotateY(2deg)"}
    if (typeof cssValue === "string" && hasStarSyntax(cssValue)) {
      cssValue = resolveStarSyntax(cssValue, dataRow, modeObjData);
    }

    const parsed = parseCssString(cssValue);
    if (Object.keys(parsed).length > 0) {
      for (const [cssProp, cssVal] of Object.entries(parsed)) {
        // parseSpecialValue xử lý nốt các token exact còn sót trong JSON values
        mergedCss[cssProp] = parseSpecialValue(cssVal, dataRow, modeObjData);
      }
    }
  }
  return mergedCss;
}

// Core builder — nhận contentItem trực tiếp, không tìm lại arr3
// Dùng bởi cả buildContentObject (STEP 1) và buildModeActions (STEP 2)
// → tránh trường hợp nhiều mode có cùng contentName, lấy nhầm item của mode khác
function buildContentObjectFromItem(contentItem, dataRow, modeObjData) {
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

// Wrapper cho STEP 1 (content-XX trong arr1) — tìm theo tên, không có mode context
// Ở đây dùng find() là đúng vì content-XX không thuộc mode nào cụ thể
function buildContentObject(contentName, dataRow, modeObjData) {
  if (isNullOrEmpty(contentName)) return {};
  const contentItem = arr3_contents.find(
    (item) => item.contentName === contentName,
  );
  if (!contentItem) {
    console.warn(`⚠️ Content not found: ${contentName}`);
    return {};
  }
  return buildContentObjectFromItem(contentItem, dataRow, modeObjData);
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

// ================================
// ⭐ SUBMODE RESOLVER
// ================================
// subMode dạng "(A,B,C)" → bỏ dấu ngoặc, split ",", chọn ngẫu nhiên 1 → mode + subPick
// Ví dụ: mode="modeHook", subMode="(A,B,C)" → "modeHookA" hoặc "modeHookB" hoặc "modeHookC"
function resolveSubMode(baseMode, subModeRaw) {
  if (isNullOrEmpty(subModeRaw) || typeof subModeRaw !== "string")
    return baseMode;
  const stripped = subModeRaw.trim().replace(/^\(|\)$/g, "");
  const options = stripped
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (options.length === 0) return baseMode;
  const picked = options[Math.floor(Math.random() * options.length)];
  return baseMode + picked;
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
    // Dùng buildContentObjectFromItem với item đã filter đúng mode
    // → tránh nhầm contentName trùng tên giữa các mode khác nhau
    let action = buildContentObjectFromItem(
      modeContentItem,
      dataRow,
      modeObjData,
    );
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

      // Sau (thêm timePlus)
      let newCode = segment.code,
        newTimeFixed,
        hasTimeFixed = false,
        newTimePlus,
        hasTimePlus = false; // ← thêm

      for (const action of cleanedActions) {
        if (action.code != null && action.code !== "") newCode = action.code;
        if (action.timeFixed != null) {
          newTimeFixed = action.timeFixed;
          hasTimeFixed = true;
        }
        if (action.timePlus != null) {
          // ← thêm
          newTimePlus = action.timePlus;
          hasTimePlus = true;
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

      if (hasTimePlus)
        newSegment.timePlus = newTimePlus; // ← thêm
      else delete newSegment.timePlus;

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
  _videoRandomSeed = Math.floor(Math.random() * 100) + 1; // 1–100

  let videoSegments = [];

  arr1_configs.forEach((configItem, configIndex) => {
    let actions = [];

    // STEP 0: Resolve modeOBJ → mode → subMode
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

    // ── subMode: "(A,B,C)" → chọn ngẫu nhiên 1 suffix → mode + suffix ──────
    if (resolvedMode && !isNullOrEmpty(configItem.subMode)) {
      resolvedMode = resolveSubMode(resolvedMode, configItem.subMode);
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
      .concat(["stt", "mode", "modeOBJ", "subMode"]);

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

  // ── KQ001: Tách INMODE trước ──────────────────────────────────────────────
  const splitSegments = splitInmodeSegments(videoSegments);

  // ── KQ002: Filter NULLA sau khi split ─────────────────────────────────────
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
