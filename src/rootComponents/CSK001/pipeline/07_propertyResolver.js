import {
  parseSpecialValue,
  isNullOrEmpty,
} from "./04_specialValueResolver.js";

export function resolveAllProperties(
  obj,
  dataRow,
  excludeKeys = [],
  modeObjData,
  resolveAddKey,
) {
  const resolved = {};

  for (const [key, value] of Object.entries(obj)) {
    if (excludeKeys.includes(key)) {
      resolved[key] = value;
      continue;
    }

    const resolvedValue = parseSpecialValue(
      value,
      dataRow,
      modeObjData,
      resolveAddKey,
    );

    if (!isNullOrEmpty(resolvedValue)) {
      resolved[key] = resolvedValue;
    }
  }

  return resolved;
}
