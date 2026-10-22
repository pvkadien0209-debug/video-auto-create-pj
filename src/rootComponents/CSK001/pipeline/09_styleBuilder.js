import { parseCssString } from "./06_cssParser.js";

import {
  hasStarSyntax,
  resolveStarSyntax,
} from "./05_starSyntaxResolver.js";

import {
  parseSpecialValue,
  isNullOrEmpty,
} from "./04_specialValueResolver.js";

export function buildStyleCss(
  styleCssName,
  dataRow,
  modeObjData,
  arr2_styles,
  resolveAddKey,
) {
  if (isNullOrEmpty(styleCssName)) return {};

  const styleItem = arr2_styles.find(
    (item) => item.styleCssName === styleCssName,
  );

  if (!styleItem) return {};

  const mergedCss = {};

  for (let i = 1; i <= 50; i++) {
    const key = `css-${String(i).padStart(3, "0")}`;
    let cssValue = styleItem[key];

    if (isNullOrEmpty(cssValue)) continue;

    if (typeof cssValue === "string" && hasStarSyntax(cssValue)) {
      cssValue = resolveStarSyntax(
        cssValue,
        dataRow,
        modeObjData,
        resolveAddKey,
      );
    }

    const parsed = parseCssString(cssValue);

    if (Object.keys(parsed).length > 0) {
      for (const [cssProp, cssVal] of Object.entries(parsed)) {
        mergedCss[cssProp] = parseSpecialValue(
          cssVal,
          dataRow,
          modeObjData,
          resolveAddKey,
        );
      }
    }
  }

  return mergedCss;
}
