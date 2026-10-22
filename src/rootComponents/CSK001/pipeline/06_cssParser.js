export function splitCssPairs(str) {
  const pairs = [];
  let current = "";
  let depth = 0;
  let inQuote = null;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const prev = i > 0 ? str[i - 1] : "";

    // ⚡ FIX: thêm backtick (`) vào danh sách ký tự quote — trước đây chỉ
    // nhận diện ' và " nên một giá trị dùng template literal (vd:
    // `linear-gradient(...), url(...)`) bị hiểu nhầm dấu phẩy bên trong là
    // dấu phân tách giữa 2 cặp key:value, cắt đứt giá trị giữa chừng.
    if ((ch === '"' || ch === "'" || ch === "`") && prev !== "\\") {
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

export function parseKeyValue(pair) {
  let colonIdx = -1;
  let inQuote = null;
  let parenDepth = 0;

  for (let i = 0; i < pair.length; i++) {
    const ch = pair[i];
    const prev = i > 0 ? pair[i - 1] : "";

    // ⚡ FIX: thêm backtick (`) — xem giải thích ở splitCssPairs phía trên.
    if ((ch === '"' || ch === "'" || ch === "`") && prev !== "\\") {
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

  const key = pair
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

export function parseCssString(cssStr) {
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
