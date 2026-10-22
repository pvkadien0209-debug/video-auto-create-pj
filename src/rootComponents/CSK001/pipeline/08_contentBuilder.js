import {
  parseSpecialValue,
  isNullOrEmpty,
} from "./04_specialValueResolver.js";

export function buildContentObjectFromItem(
  contentItem,
  dataRow,
  modeObjData,
  resolveAddKey,
) {
  const contentObj = {};

  for (let i = 1; i <= 50; i++) {
    const keyField = `key-${String(i).padStart(2, "0")}`;
    const contentField = `content-${String(i).padStart(2, "0")}`;

    const keyName = contentItem[keyField];
    const contentValue = contentItem[contentField];

    if (isNullOrEmpty(keyName) || isNullOrEmpty(contentValue)) continue;

    if (keyName === "contentName" || keyName === "Mô tả") continue;

    const parsedValue = parseSpecialValue(
      contentValue,
      dataRow,
      modeObjData,
      resolveAddKey,
    );

    if (parsedValue !== null) {
      contentObj[keyName] = parsedValue;
    }
  }

  return contentObj;
}

export function buildContentObject(
  contentName,
  dataRow,
  modeObjData,
  arr3_contents,
  resolveAddKey,
) {
  if (isNullOrEmpty(contentName)) return {};

  const contentItem = arr3_contents.find(
    (item) => item.contentName === contentName,
  );

  if (!contentItem) {
    console.warn(`⚠️ Content not found: ${contentName}`);
    return {};
  }

  return buildContentObjectFromItem(
    contentItem,
    dataRow,
    modeObjData,
    resolveAddKey,
  );
}
