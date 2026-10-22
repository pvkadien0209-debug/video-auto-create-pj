import {
  parseRandomArgs,
  pickRandom,
  pickRandomFixed,
} from "./02_randomResolver.js";

export function hasStarSyntax(value) {
  return typeof value === "string" && value.includes("**");
}

export function resolveStarToken(
  token,
  dataRow,
  modeObjData,
  resolveAddKey,
) {
  token = token.trim();

  const modeObjMatch = token.match(/^MODEOBJ\.(\w+)$/);
  if (modeObjMatch) {
    if (modeObjData) {
      const value = modeObjData[modeObjMatch[1]];
      return value !== undefined && value !== null ? String(value) : "";
    }
    return "";
  }

  const fixedMatch = token.match(/^RANDOMfixed\(([^)]+)\)$/);
  if (fixedMatch) {
    return String(pickRandomFixed(parseRandomArgs(fixedMatch[1])));
  }

  const randomMatch = token.match(/^RANDOM\(([^)]+)\)$/);
  if (randomMatch) {
    return String(pickRandom(parseRandomArgs(randomMatch[1])));
  }

  if (token.startsWith("ADD_")) {
    const resolved = resolveAddKey(token, dataRow);
    return resolved !== null && resolved !== undefined ? String(resolved) : "";
  }

  return token;
}

export function resolveStarSyntax(
  str,
  dataRow,
  modeObjData,
  resolveAddKey,
) {
  if (typeof str !== "string" || !str.includes("**")) return str;

  return str.replace(
    /\*\*([^*]+)\*\*/g,
    (_, token) =>
      resolveStarToken(token, dataRow, modeObjData, resolveAddKey),
  );
}
