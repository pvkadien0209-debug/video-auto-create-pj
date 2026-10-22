import { loadData } from "./01_dataLoader.js";

import { setVideoRandomSeed } from "./02_randomResolver.js";

import {
  createAddKeyResolver,
} from "./03_configResolver.js";

import { buildSegment } from "./11_segmentBuilder.js";

import { splitInmodeSegments } from "./12_inmodeSplitter.js";

import { validateSegments } from "./13_validator.js";

import {
  cleanMetadataFromActions,
} from "./14_metadataCleaner.js";

export function processData() {
  const {
    arr1_configs,
    arr2_styles,
    arr3_contents,
    arr4_data,
  } = loadData();

  const resolveAddKey = createAddKeyResolver({
    arr1_configs,
    arr2_styles,
    arr3_contents,
  });

  const videoData01 = [];

  arr4_data.forEach((dataRow, rowIndex) => {
    // ⚡ Seed theo rowIndex (không random nữa) — xem giải thích trong
    // 02_randomResolver.js. Đảm bảo mọi RANDOM(...) trong video này luôn
    // resolve ra cùng giá trị dù chạy script nào / worker nào.
    setVideoRandomSeed(rowIndex);

    let videoSegments = [];

    arr1_configs.forEach((configItem, configIndex) => {
      const segment = buildSegment({
        configItem,
        configIndex,
        rowIndex,
        dataRow,
        arr1_configs,
        arr2_styles,
        arr3_contents,
        resolveAddKey,
      });

      if (segment) {
        videoSegments.push(segment);
      }
    });

    const splitSegments =
      splitInmodeSegments(videoSegments);

    const validatedSegments =
      validateSegments(splitSegments);

    const finalSegments =
      cleanMetadataFromActions(validatedSegments);

    if (finalSegments.length > 0) {
      videoData01.push(finalSegments);
    }
  });

  // ⚡ Chỉ dump toàn bộ dataset (tất cả video, không riêng video đang render) ra
  // console khi cần debug — mặc định tắt để tránh spam console mỗi lần module
  // này được load (kể cả trong từng browser worker khi render với concurrency > 1).
  // Bật lại bằng cách set env DEBUG_PIPELINE=1 trước khi chạy.
  if (process.env.DEBUG_PIPELINE === "1") {
    console.log(JSON.stringify(videoData01));
  }

  return videoData01;
}
