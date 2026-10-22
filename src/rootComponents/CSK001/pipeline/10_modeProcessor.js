import {
  parseSpecialValue,
  isNullOrEmpty,
} from "./04_specialValueResolver.js";

import {
  buildContentObjectFromItem,
} from "./08_contentBuilder.js";

import { buildStyleCss } from "./09_styleBuilder.js";

export function parseModeOBJ(
  rawModeOBJ,
  configIndex,
  rowIndex,
) {
  let modeObjData = {};

  if (!isNullOrEmpty(rawModeOBJ)) {
    if (typeof rawModeOBJ === "string") {
      try {
        modeObjData = JSON.parse(rawModeOBJ);
      } catch (e) {
        console.warn("⚠️ Failed to parse modeOBJ:", e.message);
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

export function resolveSubMode(baseMode, subModeRaw) {
  if (
    isNullOrEmpty(subModeRaw) ||
    typeof subModeRaw !== "string"
  ) {
    return baseMode;
  }

  const stripped = subModeRaw.trim().replace(/^\(|\)$/g, "");

  const options = stripped
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (options.length === 0) return baseMode;

  const picked =
    options[Math.floor(Math.random() * options.length)];

  return baseMode + picked;
}

export function cleanNullGroup(action) {
  if ("group" in action && isNullOrEmpty(action.group)) {
    delete action.group;
  }

  return action;
}

export function buildModeActions(
  resolvedMode,
  dataRow,
  modeObjData,
  arr3_contents,
  arr2_styles,
  resolveAddKey,
) {
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

    let action = buildContentObjectFromItem(
      modeContentItem,
      dataRow,
      modeObjData,
      resolveAddKey,
    );

    if (Object.keys(action).length === 0) continue;

    cleanNullGroup(action);

    const styleCssName = `${contentName}-css`;

    const builtStyle = buildStyleCss(
      styleCssName,
      dataRow,
      modeObjData,
      arr2_styles,
      resolveAddKey,
    );

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
