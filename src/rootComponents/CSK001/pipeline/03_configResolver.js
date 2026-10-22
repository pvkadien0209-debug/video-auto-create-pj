import {
  parseSpecialValue,
  isNullOrEmpty,
} from "./04_specialValueResolver.js";

export function parseActionKey(key) {
  if (!key || typeof key !== "string") return null;

  const match = key.match(/^content-(\d{2})$/);
  if (!match) return null;

  return {
    actionNum: parseInt(match[1], 10),
    originalKey: key,
  };
}

export function createAddKeyResolver({
  arr1_configs,
  arr2_styles,
  arr3_contents,
}) {
  // ⚡ Trước đây: với mỗi item, duyệt Object.entries(item) rồi so sánh từng
  // prop === key — tốn O(số property/item) trong khi 1 object không thể có 2
  // property trùng tên, nên chỉ cần kiểm tra "key có tồn tại trong item không"
  // là đủ, cho kết quả HỆT NHAU nhưng khỏi phải liệt kê hết property. Không ảnh
  // hưởng dataset nhỏ hiện tại, nhưng rẻ và an toàn nên sửa luôn để không thành
  // điểm nghẽn nếu sau này arr1/arr2/arr3 (hoặc thư viện style/content dùng chung)
  // phình to.
  function search(array, key) {
    for (const item of array) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        return item[key];
      }
    }
    return null;
  }

  return function resolveAddKey(addKey, dataRow) {
    if (
      dataRow &&
      Object.prototype.hasOwnProperty.call(dataRow, addKey)
    ) {
      return dataRow[addKey];
    }

    const fromConfigs = search(arr1_configs, addKey);
    if (fromConfigs !== null) return fromConfigs;

    const fromStyles = search(arr2_styles, addKey);
    if (fromStyles !== null) return fromStyles;

    const fromContents = search(arr3_contents, addKey);
    if (fromContents !== null) return fromContents;

    return addKey.replace("ADD_", "");
  };
}

export function groupConfigsByAction(
  configItem,
  dataRow,
  resolveAddKey,
) {
  const actionsMap = new Map();

  for (const [key, value] of Object.entries(configItem)) {
    const parsed = parseActionKey(key);
    if (!parsed) continue;
    if (isNullOrEmpty(value)) continue;

    const resolvedValue = parseSpecialValue(
      value,
      dataRow,
      null,
      resolveAddKey,
    );

    if (!actionsMap.has(parsed.actionNum)) {
      actionsMap.set(parsed.actionNum, {});
    }

    actionsMap.get(parsed.actionNum).content = resolvedValue;
  }

  const validActions = new Map();

  for (const [num, data] of actionsMap) {
    if (data.content && !isNullOrEmpty(data.content)) {
      validActions.set(num, data);
    }
  }

  return new Map(
    [...validActions.entries()].sort((a, b) => a[0] - b[0]),
  );
}
