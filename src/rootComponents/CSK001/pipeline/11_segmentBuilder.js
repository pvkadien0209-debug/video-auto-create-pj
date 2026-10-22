import {
  parseSpecialValue,
  isNullOrEmpty,
} from "./04_specialValueResolver.js";

import {
  parseActionKey,
  groupConfigsByAction,
} from "./03_configResolver.js";

import {
  buildContentObject,
} from "./08_contentBuilder.js";

import { buildStyleCss } from "./09_styleBuilder.js";

import {
  buildModeActions,
  parseModeOBJ,
  resolveSubMode,
  cleanNullGroup,
} from "./10_modeProcessor.js";

import {
  resolveAllProperties,
} from "./07_propertyResolver.js";

export function buildSegment({
  configItem,
  configIndex,
  rowIndex,
  dataRow,
  arr1_configs,
  arr2_styles,
  arr3_contents,
  resolveAddKey,
}) {
  let actions = [];

  // STEP 0: modeOBJ → mode → subMode
  let resolvedMode = null;
  let modeObjData = null;

  if (
    configItem.modeOBJ &&
    typeof configItem.modeOBJ === "string"
  ) {
    const rawModeOBJ = parseSpecialValue(
      configItem.modeOBJ,
      dataRow,
      null,
      resolveAddKey,
    );

    modeObjData = parseModeOBJ(
      rawModeOBJ,
      configIndex,
      rowIndex,
    );
  }

  if (
    configItem.mode &&
    typeof configItem.mode === "string"
  ) {
    const rawMode = parseSpecialValue(
      configItem.mode,
      dataRow,
      modeObjData,
      resolveAddKey,
    );

    if (!isNullOrEmpty(rawMode) && rawMode !== "NULLA") {
      resolvedMode = rawMode;
    }
  }

  if (
    !resolvedMode &&
    modeObjData &&
    !isNullOrEmpty(modeObjData.mode)
  ) {
    resolvedMode = modeObjData.mode;
  }

  if (
    resolvedMode &&
    !isNullOrEmpty(configItem.subMode)
  ) {
    resolvedMode = resolveSubMode(
      resolvedMode,
      configItem.subMode,
    );
  }

  // STEP 1: content-XX actions
  const actionsMap = groupConfigsByAction(
    configItem,
    dataRow,
    resolveAddKey,
  );

  for (const [, actionData] of actionsMap) {
    const { content: contentName } = actionData;
    if (isNullOrEmpty(contentName)) continue;

    let action = buildContentObject(
      contentName,
      dataRow,
      modeObjData,
      arr3_contents,
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

    actions.push(action);
  }

  // STEP 2: MODE actions
  if (resolvedMode) {
    const modeActions = buildModeActions(
      resolvedMode,
      dataRow,
      modeObjData,
      arr3_contents,
      arr2_styles,
      resolveAddKey,
    );

    if (modeActions.length > 0) {
      actions.push(...modeActions);
    }
  }

  if (actions.length === 0) return null;

  // STEP 3: Build segment
  const excludeKeys = Object.keys(configItem)
    .filter((key) => parseActionKey(key) !== null)
    .concat(["stt", "mode", "modeOBJ", "subMode"]);

  const resolvedConfigProps = resolveAllProperties(
    configItem,
    dataRow,
    excludeKeys,
    modeObjData,
    resolveAddKey,
  );

  const segment = {
    actions,
    ...resolvedConfigProps,
    stt: configIndex,
  };

  Object.keys(segment).forEach((key) => {
    if (segment[key] === null || segment[key] === undefined) {
      delete segment[key];
    }
  });

  return segment;
}
