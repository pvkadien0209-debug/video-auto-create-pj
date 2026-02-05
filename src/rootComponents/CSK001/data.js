// ================================
// 📦 IMPORT
// ================================
import DataFront from "./data_Front_001.json" with { type: "json" };
const [arr1_configs, arr2_styles, arr3_contents, arr4_data] = DataFront;
let videoData01 = [];

// ================================
// 🛠️ HELPER FUNCTIONS
// ================================

/**
 * ⭐ Check if value is null/empty
 */
function isNullOrEmpty(value) {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    value === "null" ||
    value === "NULL"
  );
}

/**
 * Parse CSS string - add quotes to keys
 */
function parseCssString(cssStr) {
  if (!cssStr || cssStr === "null" || cssStr === null) return {};
  cssStr = cssStr.trim();
  // Add quotes to keys: position: → "position":
  cssStr = cssStr.replace(/(\w+):/g, '"$1":');
  try {
    const result = JSON.parse(cssStr);
    return result;
  } catch (e) {
    console.warn("⚠️ Failed to parse CSS:", cssStr, e.message);
    return {};
  }
}

/**
 * ⭐ Parse Boolean values
 */
function parseBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const upperValue = value.toUpperCase().trim();
    if (upperValue === "TRUE") return true;
    if (upperValue === "FALSE") return false;
  }
  return value;
}

/**
 * ⭐⭐⭐ Parse action key - only content-XX format
 */
function parseActionKey(key) {
  if (!key || typeof key !== "string") return null;

  // Pattern: "content-01", "content-02"
  const pattern = /^content-(\d{2})$/;
  const match = key.match(pattern);

  if (match) {
    return {
      actionNum: parseInt(match[1], 10),
      originalKey: key,
    };
  }

  return null;
}

/**
 * ⭐⭐⭐ Group config keys by action number (skip null values)
 * Returns: Map<actionNum, {content: string}>
 */
function groupConfigsByAction(configItem) {
  const actionsMap = new Map();

  for (const [key, value] of Object.entries(configItem)) {
    const parsed = parseActionKey(key);
    if (!parsed) continue;

    // Skip if null/empty
    if (isNullOrEmpty(value)) {
      if (process.env.NODE_ENV === "development") {
        console.log(`   ⊗ Skipping ${parsed.originalKey}: value is null/empty`);
      }
      continue;
    }

    if (!actionsMap.has(parsed.actionNum)) {
      actionsMap.set(parsed.actionNum, {});
    }
    actionsMap.get(parsed.actionNum).content = value;
  }

  // ⭐⭐⭐ Remove actions that have no content
  const validActions = new Map();
  for (const [actionNum, actionData] of actionsMap) {
    if (actionData.content && !isNullOrEmpty(actionData.content)) {
      validActions.set(actionNum, actionData);
    } else {
      if (process.env.NODE_ENV === "development") {
        console.log(`   ⊗ Removing action ${actionNum}: no valid content`);
      }
    }
  }

  // Sort by action number
  return new Map([...validActions.entries()].sort((a, b) => a[0] - b[0]));
}

/**
 * ⭐⭐⭐ Search for ADD_ key in arr2_styles
 */
function searchInStylesArray(key) {
  for (const styleItem of arr2_styles) {
    for (const [prop, value] of Object.entries(styleItem)) {
      if (prop === key) {
        if (process.env.NODE_ENV === "development") {
          console.log(`✅ Found "${key}" in arr2_styles:`, value);
        }
        return value;
      }
    }
  }
  return null;
}

/**
 * ⭐⭐⭐ Search for ADD_ key in arr3_contents
 */
function searchInContentsArray(key) {
  for (const contentItem of arr3_contents) {
    for (const [prop, value] of Object.entries(contentItem)) {
      if (prop === key) {
        if (process.env.NODE_ENV === "development") {
          console.log(`✅ Found "${key}" in arr3_contents:`, value);
        }
        return value;
      }
    }
  }
  return null;
}

/**
 * ⭐⭐⭐ Resolve ADD_ key from multiple sources
 */
function resolveAddKey(addKey, dataRow) {
  // 1. Try dataRow first (arr4_data)
  if (dataRow && dataRow.hasOwnProperty(addKey)) {
    if (process.env.NODE_ENV === "development") {
      console.log(`✅ Found "${addKey}" in dataRow:`, dataRow[addKey]);
    }
    return dataRow[addKey];
  }

  // 2. Try arr2_styles
  const fromStyles = searchInStylesArray(addKey);
  if (fromStyles !== null) {
    return fromStyles;
  }

  // 3. Try arr3_contents
  const fromContents = searchInContentsArray(addKey);
  if (fromContents !== null) {
    return fromContents;
  }

  // 4. Not found anywhere
  if (process.env.NODE_ENV === "development") {
    console.warn(`⚠️ ADD_ key "${addKey}" not found in any array`);
  }

  // Return the key without ADD_ prefix as fallback
  return addKey.replace("ADD_", "");
}

/**
 * ⭐⭐⭐ Parse special values (JSON_, ADD_, TRUE/FALSE)
 */
function parseSpecialValue(value, dataRow) {
  // Null check
  if (isNullOrEmpty(value)) {
    return null;
  }

  // 1. Parse JSON_ prefix
  if (typeof value === "string" && value.startsWith("JSON_")) {
    const jsonStr = value.replace("JSON_", "");
    return parseCssString(jsonStr);
  }

  // 2. Parse Boolean (TRUE/FALSE)
  if (typeof value === "string") {
    const upperValue = value.toUpperCase().trim();
    if (upperValue === "TRUE" || upperValue === "FALSE") {
      return parseBoolean(value);
    }
  }

  // 3. Resolve ADD_
  if (typeof value === "string" && value.startsWith("ADD_")) {
    const resolvedValue = resolveAddKey(value, dataRow);
    if (resolvedValue !== value) {
      return resolvedValue;
    }
    return value.replace("ADD_", "");
  }

  // 4. Try to parse as number
  if (typeof value === "string" && !isNaN(value) && value.trim() !== "") {
    return Number(value);
  }

  // Return as-is
  return value;
}

/**
 * ⭐⭐⭐ Build CSS từ arr2_styles
 * Returns empty object {} if styleCssName not found (silent fail)
 */
function buildStyleCss(styleCssName) {
  if (isNullOrEmpty(styleCssName)) return {};

  const styleItem = arr2_styles.find(
    (item) => item.styleCssName === styleCssName,
  );

  if (!styleItem) {
    // ⭐ Silent fail - không warn vì styleCss là optional
    if (process.env.NODE_ENV === "development") {
      console.log(
        `   ℹ️ StyleCss "${styleCssName}" not found in arr2_styles (optional)`,
      );
    }
    return {};
  }

  let mergedCss = {};

  for (let i = 1; i <= 12; i++) {
    const key = `css-${String(i).padStart(3, "0")}`;
    const cssValue = styleItem[key];

    if (isNullOrEmpty(cssValue)) {
      continue;
    }

    const parsed = parseCssString(cssValue);
    if (Object.keys(parsed).length > 0) {
      mergedCss = { ...mergedCss, ...parsed };
    }
  }

  return mergedCss;
}

/**
 * Build content object
 */
function buildContentObject(contentName, dataRow) {
  if (isNullOrEmpty(contentName)) return {};

  const contentItem = arr3_contents.find(
    (item) => item.contentName === contentName,
  );

  if (!contentItem) {
    console.warn(`⚠️ Content not found: ${contentName}`);
    return {};
  }

  let contentObj = {};

  // Parse all key-value pairs
  for (let i = 1; i <= 8; i++) {
    const keyField = `key-${String(i).padStart(2, "0")}`;
    const contentField = `content-${String(i).padStart(2, "0")}`;

    const keyName = contentItem[keyField];
    let contentValue = contentItem[contentField];

    // Skip null
    if (isNullOrEmpty(keyName) || isNullOrEmpty(contentValue)) {
      continue;
    }

    // Skip metadata
    if (keyName === "contentName" || keyName === "Mô tả") {
      continue;
    }

    // Parse special values
    const parsedValue = parseSpecialValue(contentValue, dataRow);
    if (parsedValue !== null) {
      contentObj[keyName] = parsedValue;
    }
  }

  return contentObj;
}

// ================================
// 🎬 MAIN PROCESSING
// ================================

arr4_data.forEach((dataRow, rowIndex) => {
  let videoSegments = [];

  arr1_configs.forEach((configItem, configIndex) => {
    let actions = [];

    // ⭐⭐⭐ Group configs by action number (auto-skip null values)
    const actionsMap = groupConfigsByAction(configItem);

    if (process.env.NODE_ENV === "development") {
      console.log(
        `\n📋 Config ${configIndex + 1}: Found ${actionsMap.size} valid actions`,
      );
    }

    // Process each action group
    for (const [actionNum, actionData] of actionsMap) {
      const { content: contentName } = actionData;

      // Content is required (already validated in groupConfigsByAction)
      if (isNullOrEmpty(contentName)) {
        continue;
      }

      // ⭐⭐⭐ Auto-generate styleCssName from contentName
      const styleCssName = `${contentName}-css`;

      if (process.env.NODE_ENV === "development") {
        console.log(`   └─ Action ${actionNum}:`, {
          contentName,
          styleCssName: styleCssName,
        });
      }

      // Build complete action object
      let action = buildContentObject(contentName, dataRow);

      // If no content, skip
      if (Object.keys(action).length === 0) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            `   ⚠️ Action ${actionNum}: buildContentObject returned empty`,
          );
        }
        continue;
      }

      // ⭐⭐⭐ Try to build styleCss (silent fail if not found)
      const builtStyle = buildStyleCss(styleCssName);
      if (Object.keys(builtStyle).length > 0) {
        action.styleCss = builtStyle;
        if (process.env.NODE_ENV === "development") {
          console.log(`      ✅ Added styleCss from "${styleCssName}"`);
        }
      }

      actions.push(action);
    }

    if (actions.length === 0) {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `   ⊗ Config ${configIndex + 1}: No valid actions, skipping segment`,
        );
      }
      return;
    }

    let segment = {
      actions: actions,
      code: configItem.code || "DEFAULT",
      timeFixed: configItem.timeFixed || null,
      stt: configIndex,
    };

    videoSegments.push(segment);
  });

  videoData01.push(videoSegments);
});

console.log(JSON.stringify(videoData01));
// ================================
// 📤 EXPORT
// ================================
export { videoData01 };

// ================================
// 🐛 DEBUG
// ================================
// if (process.env.NODE_ENV === "development") {
//   console.log("\n=== 🎬 VIDEO DATA GENERATED ===");
//   console.log(`📊 Total videos: ${videoData01.length}`);

//   videoData01.forEach((video, i) => {
//     console.log(`\n📹 Video ${i + 1}:`);
//     video.forEach((segment, j) => {
//       console.log(`   └─ Segment ${j + 1}: ${segment.actions.length} actions`);
//       segment.actions.forEach((action, k) => {
//         console.log(`      └─ Action ${k + 1}:`);
//         console.log(`         cmd: ${action.cmd}`);
//         console.log(`         group: ${action.group || "N/A"}`);
//         if (action.loop !== undefined) {
//           console.log(
//             `         loop: ${action.loop} (type: ${typeof action.loop})`,
//           );
//         }
//         if (action.styleCss) {
//           console.log(
//             `         styleCss keys: ${Object.keys(action.styleCss).join(", ")}`,
//           );
//         }
//       });
//     });
//   });

//   console.log("\n📦 Sample Action Object:");
//   if (
//     videoData01.length > 0 &&
//     videoData01[0].length > 0 &&
//     videoData01[0][0].actions.length > 0
//   ) {
//     console.log(JSON.stringify(videoData01[0][0].actions[0], null, 2));
//   }
// }
