import {
  hasRandomPattern,
  parseRandomArgs,
  pickRandom,
  pickRandomFixed,
} from "./02_randomResolver.js";

import { hasStarSyntax, resolveStarSyntax } from "./05_starSyntaxResolver.js";

import { parseCssString } from "./06_cssParser.js";

import { resolveExpression } from "./05.1_expressionResolver.js";

export function isNullOrEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "null" ||
    value === "NULL"
  );
}

export function parseBoolean(value) {
  if (typeof value === "boolean") return value;

  if (typeof value === "string") {
    const upper = value.toUpperCase().trim();
    if (upper === "TRUE") return true;
    if (upper === "FALSE") return false;
  }

  return value;
}

export function resolveMODEOBJ(value, modeObjData) {
  if (!modeObjData || !value || typeof value !== "string") return value;
  if (!value.includes("MODEOBJ.")) return value;

  const exactMatch = value.match(/^MODEOBJ\.(\w+)$/);

  if (exactMatch) {
    const resolved = modeObjData[exactMatch[1]];
    return resolved !== undefined ? resolved : null;
  }

  return value.replace(/MODEOBJ\.(\w+)/g, (_, key) => {
    const resolved = modeObjData[key];
    return resolved !== undefined && resolved !== null ? String(resolved) : "";
  });
}

export function parseSpecialValue(value, dataRow, modeObjData, resolveAddKey) {
  if (isNullOrEmpty(value)) return null;

  // ======================================================
  // 0. **TOKEN**
  // ======================================================
  if (hasStarSyntax(value)) {
    value = resolveStarSyntax(value, dataRow, modeObjData, resolveAddKey);
  }

  // ======================================================
  // 0.5 EXPRESSION
  // ======================================================
  const expressionResult = resolveExpression(value, {
    dataRow,
    modeObjData,
    resolveAddKey,
    pickRandom,
    pickRandomFixed,
    parseRandomArgs,
  });

  if (expressionResult !== value) {
    return expressionResult;
  }

  // ======================================================
  // 1. MODEOBJ exact / inline
  // ======================================================
  if (modeObjData && typeof value === "string" && value.match(/^MODEOBJ\./)) {
    value = resolveMODEOBJ(value, modeObjData);

    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value !== "string") {
      return value;
    }
  }

  // ======================================================
  // 2. RANDOM / RANDOMfixed exact
  // ======================================================
  if (hasRandomPattern(value)) {
    const fixedMatch = value.match(/^RANDOMfixed\(([^)]+)\)$/);

    if (fixedMatch) {
      const picked = pickRandomFixed(parseRandomArgs(fixedMatch[1]));

      if (typeof picked === "string" && picked !== "" && !isNaN(picked)) {
        return Number(picked);
      }

      return picked;
    }

    const randomMatch = value.match(/^RANDOM\(([^)]+)\)$/);

    if (randomMatch) {
      const picked = pickRandom(parseRandomArgs(randomMatch[1]));

      if (typeof picked === "string" && picked !== "" && !isNaN(picked)) {
        return Number(picked);
      }

      return picked;
    }
  }

  // ======================================================
  // 3. JSON_
  // ======================================================
  if (typeof value === "string" && value.startsWith("JSON_")) {
    return parseCssString(value.replace("JSON_", ""));
  }

  // ======================================================
  // 4. BOOLEAN
  // ======================================================
  if (typeof value === "string") {
    const upper = value.toUpperCase().trim();

    if (upper === "TRUE" || upper === "FALSE") {
      return parseBoolean(value);
    }
  }

  // ======================================================
  // 5. ADD_
  // ======================================================
  if (typeof value === "string" && value.startsWith("ADD_")) {
    const resolvedValue = resolveAddKey(value, dataRow);

    if (
      resolvedValue !== value &&
      resolvedValue !== value.replace("ADD_", "")
    ) {
      return parseSpecialValue(
        resolvedValue,
        dataRow,
        modeObjData,
        resolveAddKey,
      );
    }

    return value.replace("ADD_", "");
  }

  // ======================================================
  // 5.5 NU<số> → lấy số ngay sau "NU" (vd: NU10 → 10, NU30 → 30, NU-5 → -5)
  // ======================================================
  if (typeof value === "string") {
    const nuMatch = value.match(/^NU(-?\d+(?:\.\d+)?)$/);
    if (nuMatch) {
      return Number(nuMatch[1]);
    }
  }

  // ======================================================
  // 6. NUMBER
  // ======================================================
  if (typeof value === "string" && !isNaN(value) && value.trim() !== "") {
    return Number(value);
  }

  return value;
}
