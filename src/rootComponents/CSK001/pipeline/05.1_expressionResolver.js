// ============================================================
// 05.1_expressionResolver.js
// ============================================================
//
// Xử lý biểu thức số học sau khi resolve các token:
//
//   MODEOBJ.timeFixed + 1
//   MODEOBJ.timeFixed - 1
//   MODEOBJ.timeFixed * 2
//   MODEOBJ.timeFixed / 2
//
//   ADD_timeFixed + 1
//   ADD_x - 10
//
//   RANDOM(1,5) + 10
//   RANDOMfixed(10,20) - 2
//
//   (10 + 5) * 2
//   100 / 4
//
// Hỗ trợ:
//   +  -  *  /  %
//   ( )
//
// Không dùng eval().
// ============================================================

// ============================================================
// 1. KIỂM TRA CÓ PHẢI BIỂU THỨC KHÔNG
// ============================================================

export function hasExpressionSyntax(value) {
  if (typeof value !== "string") return false;

  return (
    value.includes("MODEOBJ.") ||
    value.includes("ADD_") ||
    value.includes("RANDOM(") ||
    value.includes("RANDOMfixed(") ||
    /[+*/%]/.test(value) ||
    /(^|\s)-\s*\d/.test(value)
  );
}

// ============================================================
// 2. TOKENIZE
// ============================================================

function tokenize(expression) {
  const tokens = [];
  let i = 0;

  while (i < expression.length) {
    const ch = expression[i];

    // bỏ khoảng trắng
    if (/\s/.test(ch)) {
      i++;
      continue;
    }

    // toán tử / ngoặc
    if ("()+-*/%".includes(ch)) {
      tokens.push({
        type: "operator",
        value: ch,
      });

      i++;
      continue;
    }

    // số
    const numberMatch = expression
      .slice(i)
      .match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);

    if (numberMatch) {
      tokens.push({
        type: "number",
        value: Number(numberMatch[0]),
      });

      i += numberMatch[0].length;
      continue;
    }

    // gặp ký tự không hợp lệ
    throw new Error(`Invalid expression token near: "${expression.slice(i)}"`);
  }

  return tokens;
}

// ============================================================
// 3. PARSER
// ============================================================

function parseExpression(tokens) {
  let index = 0;

  function peek() {
    return tokens[index];
  }

  function consume(value) {
    const token = peek();

    if (!token || token.value !== value) {
      throw new Error(`Expected "${value}"`);
    }

    index++;
  }

  // ----------------------------------------------------------
  // Primary
  // số
  // (expression)
  // +number
  // -number
  // ----------------------------------------------------------

  function parsePrimary() {
    const token = peek();

    if (!token) {
      throw new Error("Unexpected end of expression");
    }

    // ( ... )
    if (token.value === "(") {
      index++;

      const value = parseAdditive();

      consume(")");

      return value;
    }

    // unary + / -
    if (token.value === "+" || token.value === "-") {
      index++;

      const value = parsePrimary();

      return token.value === "-" ? -value : value;
    }

    // number
    if (token.type === "number") {
      index++;

      return token.value;
    }

    throw new Error(`Unexpected token: ${token.value}`);
  }

  // ----------------------------------------------------------
  // * / %
  // ----------------------------------------------------------

  function parseMultiplicative() {
    let value = parsePrimary();

    while (true) {
      const token = peek();

      if (!token || !["*", "/", "%"].includes(token.value)) {
        break;
      }

      index++;

      const right = parsePrimary();

      if (token.value === "*") {
        value *= right;
      }

      if (token.value === "/") {
        value /= right;
      }

      if (token.value === "%") {
        value %= right;
      }
    }

    return value;
  }

  // ----------------------------------------------------------
  // + -
  // ----------------------------------------------------------

  function parseAdditive() {
    let value = parseMultiplicative();

    while (true) {
      const token = peek();

      if (!token || !["+", "-"].includes(token.value)) {
        break;
      }

      index++;

      const right = parseMultiplicative();

      if (token.value === "+") {
        value += right;
      }

      if (token.value === "-") {
        value -= right;
      }
    }

    return value;
  }

  const result = parseAdditive();

  // còn token chưa xử lý
  if (index !== tokens.length) {
    throw new Error(`Unexpected token: ${tokens[index].value}`);
  }

  return result;
}

// ============================================================
// 4. TÍNH BIỂU THỨC SỐ
// ============================================================

export function evaluateNumericExpression(expression) {
  if (typeof expression !== "string") {
    return null;
  }

  const trimmed = expression.trim();

  if (!trimmed) {
    return null;
  }

  try {
    const tokens = tokenize(trimmed);

    if (tokens.length === 0) {
      return null;
    }

    const result = parseExpression(tokens);

    if (!Number.isFinite(result)) {
      return null;
    }

    return result;
  } catch (_) {
    return null;
  }
}

// ============================================================
// 5. RESOLVE TOKEN TRONG BIỂU THỨC
// ============================================================

export function resolveExpression(
  value,
  {
    dataRow,
    modeObjData,
    resolveAddKey,
    pickRandom,
    pickRandomFixed,
    parseRandomArgs,
  } = {},
) {
  if (typeof value !== "string") {
    return value;
  }

  if (!hasExpressionSyntax(value)) {
    return value;
  }

  let expression = value;

  // ==========================================================
  // MODEOBJ.xxx
  // ==========================================================

  expression = expression.replace(/MODEOBJ\.(\w+)/g, (_, key) => {
    const resolved = modeObjData?.[key];

    if (resolved !== undefined && resolved !== null) {
      return String(resolved);
    }

    return "";
  });

  // ==========================================================
  // ADD_xxx
  // ==========================================================

  expression = expression.replace(/ADD_[A-Za-z0-9_]+/g, (token) => {
    if (typeof resolveAddKey !== "function") {
      return token;
    }

    const resolved = resolveAddKey(token, dataRow);

    if (resolved !== undefined && resolved !== null) {
      return String(resolved);
    }

    return token;
  });

  // ==========================================================
  // RANDOMfixed(...)
  // ==========================================================

  expression = expression.replace(/RANDOMfixed\(([^)]+)\)/g, (token, args) => {
    if (
      typeof pickRandomFixed !== "function" ||
      typeof parseRandomArgs !== "function"
    ) {
      return token;
    }

    const resolved = pickRandomFixed(parseRandomArgs(args));

    if (resolved !== undefined && resolved !== null) {
      return String(resolved);
    }

    return token;
  });

  // ==========================================================
  // RANDOM(...)
  // ==========================================================

  expression = expression.replace(/RANDOM\(([^)]+)\)/g, (token, args) => {
    if (
      typeof pickRandom !== "function" ||
      typeof parseRandomArgs !== "function"
    ) {
      return token;
    }

    const resolved = pickRandom(parseRandomArgs(args));

    if (resolved !== undefined && resolved !== null) {
      return String(resolved);
    }

    return token;
  });

  // ==========================================================
  // TÍNH TOÁN
  // ==========================================================

  const result = evaluateNumericExpression(expression);

  // Không phải biểu thức số hợp lệ
  // → giữ nguyên giá trị ban đầu
  if (result === null) {
    return value;
  }

  return result;
}
