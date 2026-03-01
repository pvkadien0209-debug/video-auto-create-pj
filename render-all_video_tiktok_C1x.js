import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  root_JSX,
  folder_render,
  name_video,
  VIDEO_METADATA,
} from "./root-config.js";
import ffmpegPath from "ffmpeg-static";

// ✅ Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`📂 Loading data from project: ${root_JSX}`);

let videoData;

async function loadDataAndRender() {
  try {
    const dataPath = path.join(
      __dirname,
      "src",
      "rootComponents",
      root_JSX,
      "data.js",
    );
    const dataUrl = new URL(`file:///${dataPath.replace(/\\/g, "/")}`).href;
    console.log(`📂 Loading from: ${dataPath}`);

    if (!fs.existsSync(dataPath)) {
      throw new Error(`❌ Data file not found: ${dataPath}`);
    }

    const dataModule = await import(dataUrl);
    const { videoData01 } = dataModule;

    if (!videoData01) {
      throw new Error(`❌ videoData01 not found in data.js`);
    }

    if (!videoData01[0]?.id) {
      let temVideoData = [];
      videoData01.forEach((e, i) => {
        temVideoData.push({
          id: i + 1,
          data: e,
          nameUseFN: `ID${i + 1}-${name_video}`,
          folderUSe: folder_render,
        });
      });
      videoData = temVideoData;
    } else {
      videoData = videoData01;
    }

    console.log(`✅ Loaded ${videoData.length} video items`);
    runRenderProcess();
  } catch (error) {
    console.error(`❌ Failed to load data:`, error.message);
    console.error(
      `📍 Check if file exists: src/rootComponents/${root_JSX}/data.js`,
    );
    process.exit(1);
  }
}

// ============================================
// 🎬 RENDER CONFIGURATION
// ============================================
const VIDEO_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
  codec: "h264",
  crf: 18,
  pixelFormat: "yuv420p",
};

const RENDER_SETTINGS = {
  enableVideo: true,
  videoQuality: "high",
  enableStill: false,
  stillFormat: "png",
  stillFrame: 10,
  overwriteExisting: false,
  showDetailedProgress: true,
};

// ============================================
// ✂️ FFMPEG CUT CONFIGURATION
// ============================================
const CUT_SETTINGS = {
  enabled: true,
  trimStart: 0,
  prefix: "CUT_",
  deleteOriginal: false,
  // "copy" = không re-encode (nhanh, có thể lệch vài frame)
  // "h264" = re-encode (chính xác từng frame, chậm hơn)
  codec: "h264",
  // ✅ Luôn ghi đè file CUT_ cũ nếu trimStart thay đổi
  overwriteCut: true,
};

const RENDER_MODE = {
  VIDEO_ONLY: "video",
  STILL_ONLY: "still",
  BOTH: "both",
};

const currentMode = (() => {
  if (RENDER_SETTINGS.enableVideo && RENDER_SETTINGS.enableStill)
    return RENDER_MODE.BOTH;
  if (RENDER_SETTINGS.enableVideo) return RENDER_MODE.VIDEO_ONLY;
  if (RENDER_SETTINGS.enableStill) return RENDER_MODE.STILL_ONLY;
  throw new Error("❌ Phải enable ít nhất một trong video hoặc still!");
})();

const getVideoQuality = (quality) => {
  const qualityMap = {
    low: { crf: 28, preset: "fast" },
    medium: { crf: 23, preset: "medium" },
    high: { crf: 18, preset: "slow" },
    ultra: { crf: 15, preset: "veryslow" },
  };
  return qualityMap[quality] || qualityMap.high;
};

const STILL_CONFIG = {
  width: VIDEO_CONFIG.width,
  height: VIDEO_CONFIG.height,
  format: RENDER_SETTINGS.stillFormat,
  quality: 95,
  frame: RENDER_SETTINGS.stillFrame,
};

const renderDir = "./renders/videos";
const stillDir = "./renders/stills";

function createDirectories() {
  if (!fs.existsSync(renderDir)) {
    fs.mkdirSync(renderDir, { recursive: true });
    console.log(`📁 Created directory: ${renderDir}`);
  }
  if (
    (currentMode === RENDER_MODE.STILL_ONLY ||
      currentMode === RENDER_MODE.BOTH) &&
    !fs.existsSync(stillDir)
  ) {
    fs.mkdirSync(stillDir, { recursive: true });
    console.log(`📁 Created directory: ${stillDir}`);
  }
}

// ============================================
// 🎨 METADATA GENERATOR
// ============================================
function generateMetadata(item) {
  const escapeMetadata = (str) =>
    str.replace(/["'\\]/g, "\\$&").replace(/\n/g, " ");

  const hook = item.data[0].hook || "";
  const id = item.id;
  const hashtags = VIDEO_METADATA.hashtags.join(" ");

  const title = VIDEO_METADATA.titleTemplate
    .replace("{id}", id)
    .replace("{hook}", hook);

  const description = VIDEO_METADATA.descriptionTemplate
    .replace("{hook}", hook)
    .replace("{hashtags}", hashtags)
    .replace("{id}", id);

  const comment = VIDEO_METADATA.commentTemplate
    .replace("{hook}", hook)
    .replace("{id}", id);

  return {
    title: escapeMetadata(title),
    description: escapeMetadata(description),
    comment: escapeMetadata(comment),
    artist: escapeMetadata(VIDEO_METADATA.artist),
  };
}

// ============================================
// ✂️ FFMPEG TRIM FUNCTION (FIXED — GIỮ AUDIO)
// ============================================
function trimVideoStart(inputPath, itemId) {
  if (!CUT_SETTINGS.enabled) {
    console.log(`   ⏭️  [CUT] Disabled, skipping`);
    return { success: false, skipped: true };
  }

  // ✅ Kiểm tra ffmpegPath
  if (!ffmpegPath) {
    console.error(
      `   ❌ [CUT] ffmpegPath is NULL! Run: npm install ffmpeg-static`,
    );
    return { success: false, skipped: false };
  }

  if (!fs.existsSync(inputPath)) {
    console.error(`   ❌ [CUT] File không tồn tại: ${inputPath}`);
    return { success: false, skipped: false };
  }

  // Tạo output path
  const dir = path.dirname(inputPath);
  const baseName = path.basename(inputPath);
  const cutName = `${CUT_SETTINGS.prefix}${baseName}`;
  const cutPath = path.join(dir, cutName);

  // ✅ Dùng CUT_SETTINGS.overwriteCut
  // overwriteCut = true → luôn cắt lại (khi thay đổi trimStart)
  // overwriteCut = false → skip nếu đã tồn tại
  if (!CUT_SETTINGS.overwriteCut && fs.existsSync(cutPath)) {
    console.log(`   ⏭️  [CUT] Already exists: ${cutName}`);
    const stats = fs.statSync(cutPath);
    return {
      success: true,
      skipped: true,
      cutPath,
      sizeMB: (stats.size / (1024 * 1024)).toFixed(1),
    };
  }

  try {
    const trimSec = CUT_SETTINGS.trimStart;
    let cmd;

    if (CUT_SETTINGS.codec === "copy") {
      // ⚡ FAST MODE: Stream copy
      // ✅ FIX: -ss SAU -i + -map để giữ cả video & audio
      cmd = [
        `"${ffmpegPath}"`,
        `-i "${inputPath}"`,
        `-ss ${trimSec}`,
        `-map 0:v:0`,
        `-map 0:a:0?`,
        `-c copy`,
        `-avoid_negative_ts make_zero`,
        `"${cutPath}" -y`,
      ].join(" ");
    } else {
      // 🎯 PRECISE MODE: Re-encode để cắt chính xác từng frame
      // ✅ FIX: -ss SAU -i + -map để giữ cả video & audio
      const quality = getVideoQuality(RENDER_SETTINGS.videoQuality);
      cmd = [
        `"${ffmpegPath}"`,
        `-i "${inputPath}"`,
        `-ss ${trimSec}`,
        `-map 0:v:0`,
        `-map 0:a:0?`,
        `-c:v libx264`,
        `-crf ${quality.crf}`,
        `-preset ${quality.preset}`,
        `-c:a aac -b:a 192k`,
        `-pixel_format ${VIDEO_CONFIG.pixelFormat}`,
        `-avoid_negative_ts make_zero`,
        `"${cutPath}" -y`,
      ].join(" ");
    }

    console.log(`   ✂️  [CUT] Trimming ${trimSec}s from start → ${cutName}`);
    console.log(`   🔍 [CUT] Codec: ${CUT_SETTINGS.codec}`);
    console.log(`   🔍 [CUT] CMD: ${cmd}`);

    execSync(cmd, {
      stdio: "pipe",
      maxBuffer: 50 * 1024 * 1024,
    });

    if (fs.existsSync(cutPath)) {
      const originalStats = fs.statSync(inputPath);
      const cutStats = fs.statSync(cutPath);
      const originalMB = (originalStats.size / (1024 * 1024)).toFixed(1);
      const cutMB = (cutStats.size / (1024 * 1024)).toFixed(1);

      console.log(`   ✅ [CUT] Done: ${cutName}`);
      console.log(`   📊 [CUT] Original: ${originalMB}MB → Cut: ${cutMB}MB`);

      // Xóa file gốc nếu cấu hình yêu cầu
      if (CUT_SETTINGS.deleteOriginal) {
        fs.unlinkSync(inputPath);
        console.log(`   🗑️  [CUT] Deleted original: ${baseName}`);
      }

      return { success: true, skipped: false, cutPath, sizeMB: cutMB };
    } else {
      console.error(`   ❌ [CUT] Output file not created: ${cutName}`);
      return { success: false, skipped: false };
    }
  } catch (error) {
    console.error(`   ❌ [CUT] Error trimming ${itemId}:`);
    console.error(`   Message: ${error.message}`);
    // ✅ Log stderr từ ffmpeg để biết lỗi cụ thể
    if (error.stderr) {
      console.error(`   FFmpeg stderr: ${error.stderr.toString().slice(-500)}`);
    }
    if (error.stdout) {
      console.error(`   FFmpeg stdout: ${error.stdout.toString().slice(-300)}`);
    }
    return { success: false, skipped: false };
  }
}

// ============================================
// 🎬 RENDER FUNCTIONS
// ============================================
function renderVideo(item) {
  console.log(item.data[0].hook, "hook");

  const nameUse = item.nameUseFN;
  const folder = item.folderUSe;
  const videoPath = `${renderDir}/${folder}/${nameUse}.mp4`;

  // Ensure subfolder exists
  const subDir = path.dirname(videoPath);
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir, { recursive: true });
  }

  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(videoPath)) {
    console.log(`   ⏭️  Video already exists, skipping render...`);
    const stats = fs.statSync(videoPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);

    // ✂️ Vẫn chạy CUT nếu cần
    const cutResult = trimVideoStart(videoPath, item.id);

    return {
      success: true,
      size: fileSizeMB,
      type: "video",
      skipped: true,
      cutResult,
    };
  }

  const quality = getVideoQuality(RENDER_SETTINGS.videoQuality);
  const cmd =
    `npx remotion render ${item.id} ${videoPath} ` +
    `--width=${VIDEO_CONFIG.width} ` +
    `--height=${VIDEO_CONFIG.height} ` +
    `--fps=${VIDEO_CONFIG.fps} ` +
    `--codec=${VIDEO_CONFIG.codec} ` +
    `--crf=${quality.crf} ` +
    `--pixel-format=${VIDEO_CONFIG.pixelFormat} ` +
    `--serve-url=out`;

  execSync(cmd, {
    stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
    maxBuffer: 50 * 1024 * 1024,
  });

  if (fs.existsSync(videoPath)) {
    // Add metadata if configured
    if (VIDEO_METADATA.includeMetadata) {
      const tempPath = videoPath.replace(".mp4", "_temp.mp4");
      const metadata = generateMetadata(item);

      try {
        const metadataCmd =
          `ffmpeg -i "${videoPath}" ` +
          `-metadata title="${metadata.title}" ` +
          `-metadata description="${metadata.description}" ` +
          `-metadata comment="${metadata.comment}" ` +
          `-metadata artist="${metadata.artist}" ` +
          `-codec copy "${tempPath}" -y`;

        execSync(metadataCmd, { stdio: "pipe" });
        fs.unlinkSync(videoPath);
        fs.renameSync(tempPath, videoPath);
        console.log(`   ✅ Added metadata successfully`);
      } catch (error) {
        console.error(`   ⚠️  Failed to add metadata: ${error.message}`);
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }

    const stats = fs.statSync(videoPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);

    // ✂️ CẮT SAU KHI RENDER XONG
    const cutResult = trimVideoStart(videoPath, item.id);

    return {
      success: true,
      size: fileSizeMB,
      type: "video",
      skipped: false,
      cutResult,
    };
  }

  return { success: false, type: "video", skipped: false };
}

function renderStill(item) {
  const stillPath = `${stillDir}/${item.id}.${STILL_CONFIG.format}`;

  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(stillPath)) {
    console.log(`   ⏭️  Still already exists, skipping...`);
    const stats = fs.statSync(stillPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    return { success: true, size: fileSizeMB, type: "still", skipped: true };
  }

  let cmd =
    `npx remotion still ${item.id} ${stillPath} ` +
    `--width=${STILL_CONFIG.width} ` +
    `--height=${STILL_CONFIG.height} ` +
    `--frame=${STILL_CONFIG.frame} ` +
    `--serve-url=out`;

  if (STILL_CONFIG.format === "jpeg") {
    cmd += ` --quality=${STILL_CONFIG.quality}`;
  }

  execSync(cmd, {
    stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
    maxBuffer: 50 * 1024 * 1024,
  });

  if (fs.existsSync(stillPath)) {
    const stats = fs.statSync(stillPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    return { success: true, size: fileSizeMB, type: "still", skipped: false };
  }

  return { success: false, type: "still", skipped: false };
}

function renderItem(item, index) {
  console.log(`🎬 [${index + 1}/${videoData.length}] Processing: ${item.id}`);

  const results = [];
  const itemStartTime = Date.now();

  try {
    if (
      currentMode === RENDER_MODE.VIDEO_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      console.log(`   📹 Rendering video...`);
      const videoResult = renderVideo(item);
      results.push(videoResult);
    }

    if (
      currentMode === RENDER_MODE.STILL_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      console.log(`   🖼️  Rendering still image...`);
      const stillResult = renderStill(item);
      results.push(stillResult);
    }

    const renderTime = ((Date.now() - itemStartTime) / 1000).toFixed(1);
    const successResults = results.filter((r) => r.success);

    if (successResults.length > 0) {
      const sizeInfo = successResults
        .map((r) => {
          let info = `${r.type}: ${r.size}MB`;
          if (r.cutResult?.success && !r.cutResult.skipped) {
            info += ` → CUT: ${r.cutResult.sizeMB}MB`;
          }
          return info;
        })
        .join(", ");

      console.log(`✅ Done: ${item.id} (${renderTime}s) - ${sizeInfo}\n`);
      return { success: true, results: successResults };
    } else {
      console.log(`❌ Failed: ${item.id}\n`);
      return { success: false, results: [] };
    }
  } catch (error) {
    console.error(`❌ Error processing ${item.id}:`, error.message);
    return { success: false, results: [] };
  }
}

// ============================================
// 🚀 MAIN RENDER PROCESS
// ============================================
function runRenderProcess() {
  createDirectories();

  // ✅ Kiểm tra ffmpeg-static ngay đầu
  console.log("\n" + "=".repeat(70));
  console.log("🔍 PRE-FLIGHT CHECKS");
  console.log("=".repeat(70));
  console.log(
    `FFmpeg path: ${ffmpegPath || "❌ NULL — npm install ffmpeg-static"}`,
  );
  if (ffmpegPath && fs.existsSync(ffmpegPath)) {
    console.log(`FFmpeg exists: ✅`);
  } else if (ffmpegPath) {
    console.log(`FFmpeg exists: ❌ File not found at ${ffmpegPath}`);
  }

  console.log("\n" + "=".repeat(70));
  console.log("🚀 REMOTION BATCH RENDER - SEQUENTIAL MODE (C1x)");
  console.log("=".repeat(70));
  console.log(
    `📐 Resolution: ${VIDEO_CONFIG.width}x${VIDEO_CONFIG.height} (2K)`,
  );
  console.log(
    `📊 Video: ${VIDEO_CONFIG.fps}fps, ${VIDEO_CONFIG.codec}, Quality: ${RENDER_SETTINGS.videoQuality}`,
  );
  console.log(`🔧 Mode: ${currentMode.toUpperCase()}`);
  console.log(
    `🔄 Overwrite existing: ${RENDER_SETTINGS.overwriteExisting ? "YES" : "NO"}`,
  );

  // ✂️ CUT info
  if (CUT_SETTINGS.enabled) {
    console.log("─".repeat(70));
    console.log(
      `✂️  FFmpeg Trim: ENABLED — Cắt ${CUT_SETTINGS.trimStart}s đầu tiên`,
    );
    console.log(
      `✂️  Codec: ${CUT_SETTINGS.codec} | Prefix: ${CUT_SETTINGS.prefix} | Overwrite CUT: ${CUT_SETTINGS.overwriteCut ? "YES" : "NO"} | Delete original: ${CUT_SETTINGS.deleteOriginal ? "YES" : "NO"}`,
    );
  }

  console.log("=".repeat(70));
  if (currentMode !== RENDER_MODE.VIDEO_ONLY) {
    console.log(
      `🖼️  Still: ${STILL_CONFIG.format.toUpperCase()}, Frame: ${STILL_CONFIG.frame}`,
    );
  }
  console.log("");

  let successCount = 0;
  let errorCount = 0;
  let cutSuccessCount = 0;
  let cutErrorCount = 0;
  let cutSkipCount = 0;

  const startTime = Date.now();

  videoData.forEach((item, index) => {
    const result = renderItem(item, index);

    if (result.success) {
      successCount++;
      result.results.forEach((r) => {
        if (r.cutResult?.success && !r.cutResult.skipped) cutSuccessCount++;
        else if (r.cutResult?.success && r.cutResult.skipped) cutSkipCount++;
        else if (r.cutResult && !r.cutResult.success && !r.cutResult.skipped)
          cutErrorCount++;
      });
    } else {
      errorCount++;
    }
  });

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log("\n" + "=".repeat(70));
  console.log("🎯 RENDER COMPLETE");
  console.log("=".repeat(70));
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);

  if (CUT_SETTINGS.enabled) {
    console.log(`✂️  CUT Success: ${cutSuccessCount}`);
    console.log(`✂️  CUT Skipped: ${cutSkipCount}`);
    console.log(`✂️  CUT Errors: ${cutErrorCount}`);
  }

  console.log(`⏱️  Total time: ${totalTime} minutes`);

  if (currentMode !== RENDER_MODE.STILL_ONLY && fs.existsSync(renderDir)) {
    const getAllMp4Files = (dir) => {
      let files = [];
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          files = files.concat(getAllMp4Files(fullPath));
        } else if (entry.name.endsWith(".mp4")) {
          files.push(fullPath);
        }
      }
      return files;
    };

    const allVideoFiles = getAllMp4Files(renderDir);
    const originalFiles = allVideoFiles.filter(
      (f) => !path.basename(f).startsWith(CUT_SETTINGS.prefix),
    );
    const cutFiles = allVideoFiles.filter((f) =>
      path.basename(f).startsWith(CUT_SETTINGS.prefix),
    );

    const totalOriginalSize = originalFiles.reduce((sum, f) => {
      return sum + fs.statSync(f).size;
    }, 0);
    const totalCutSize = cutFiles.reduce((sum, f) => {
      return sum + fs.statSync(f).size;
    }, 0);

    console.log(
      `📹 Original Videos: ${(totalOriginalSize / (1024 * 1024)).toFixed(1)}MB (${originalFiles.length} files)`,
    );
    if (CUT_SETTINGS.enabled && cutFiles.length > 0) {
      console.log(
        `✂️  CUT Videos: ${(totalCutSize / (1024 * 1024)).toFixed(1)}MB (${cutFiles.length} files)`,
      );
    }
  }

  if (currentMode !== RENDER_MODE.VIDEO_ONLY && fs.existsSync(stillDir)) {
    const stillFiles = fs
      .readdirSync(stillDir)
      .filter(
        (f) => f.endsWith(".png") || f.endsWith(".jpeg") || f.endsWith(".jpg"),
      );

    let totalStillSize = 0;
    stillFiles.forEach((file) => {
      const stats = fs.statSync(path.join(stillDir, file));
      totalStillSize += stats.size;
    });
    const totalStillSizeMB = (totalStillSize / (1024 * 1024)).toFixed(1);

    console.log(
      `🖼️  Stills: ${totalStillSizeMB}MB (${stillFiles.length} files) - ${stillDir}`,
    );
  }

  console.log(`\n🎉 Batch render completed!`);
}

// ✅ Start the process
loadDataAndRender();
