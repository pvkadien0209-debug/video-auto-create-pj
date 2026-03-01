import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";
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

// ============================================
// 📊 PERFORMANCE MONITOR CLASS
// ============================================
class PerformanceMonitor {
  constructor() {
    this.startTime = Date.now();
    this.samples = [];
    this.renderTimes = [];
    this.MAX_SAMPLES = 50;
    this.MAX_RENDER_TIMES = 100;
  }

  captureMetrics() {
    const cpuUsage = os.loadavg()[0];
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memPercent = ((usedMem / totalMem) * 100).toFixed(1);
    return {
      timestamp: Date.now(),
      cpu: cpuUsage.toFixed(2),
      memUsedGB: (usedMem / 1024 ** 3).toFixed(2),
      memTotalGB: (totalMem / 1024 ** 3).toFixed(2),
      memPercent: memPercent,
      memFreeGB: (freeMem / 1024 ** 3).toFixed(2),
    };
  }

  logMetrics(prefix = "") {
    const metrics = this.captureMetrics();
    console.log(
      `${prefix}📊 CPU: ${metrics.cpu} | ` +
        `RAM: ${metrics.memUsedGB}GB/${metrics.memTotalGB}GB (${metrics.memPercent}%) | ` +
        `Free: ${metrics.memFreeGB}GB`,
    );
    this.samples.push(metrics);
    if (this.samples.length > this.MAX_SAMPLES) {
      this.samples.shift();
    }
    return metrics;
  }

  addRenderTime(time) {
    this.renderTimes.push(time);
    if (this.renderTimes.length > this.MAX_RENDER_TIMES) {
      this.renderTimes.shift();
    }
  }

  forceCleanup() {
    if (this.samples.length > 10) {
      this.samples = this.samples.slice(-10);
    }
    if (this.renderTimes.length > 20) {
      this.renderTimes = this.renderTimes.slice(-20);
    }
    if (global.gc) {
      global.gc();
    }
  }

  getSuggestions() {
    if (this.samples.length === 0) return [];
    const avgMem =
      this.samples.reduce((sum, s) => sum + parseFloat(s.memPercent), 0) /
      this.samples.length;
    const avgCpu =
      this.samples.reduce((sum, s) => sum + parseFloat(s.cpu), 0) /
      this.samples.length;
    const cpuCores = os.cpus().length;
    const suggestions = [];

    if (avgMem < 40) {
      suggestions.push({
        type: "⚡ HIGH",
        message: `RAM usage thấp (${avgMem.toFixed(1)}%). Có thể tăng parallelRenders lên ${Math.min(cpuCores, 8)}.`,
      });
    } else if (avgMem > 85) {
      suggestions.push({
        type: "⚠️ WARNING",
        message: `RAM usage cao (${avgMem.toFixed(1)}%). Giảm parallelRenders xuống 2-3.`,
      });
    }

    if (avgCpu < cpuCores * 0.5) {
      suggestions.push({
        type: "⚡ HIGH",
        message: `CPU chưa tận dụng hết (${avgCpu.toFixed(1)}/${cpuCores} cores).`,
      });
    }
    return suggestions;
  }

  printReport() {
    console.log("\n" + "=".repeat(70));
    console.log("📈 PERFORMANCE REPORT");
    console.log("=".repeat(70));

    if (this.samples.length > 0) {
      const avgMetrics = {
        cpu: (
          this.samples.reduce((sum, s) => sum + parseFloat(s.cpu), 0) /
          this.samples.length
        ).toFixed(2),
        mem: (
          this.samples.reduce((sum, s) => sum + parseFloat(s.memPercent), 0) /
          this.samples.length
        ).toFixed(1),
      };
      const peakMem = Math.max(
        ...this.samples.map((s) => parseFloat(s.memPercent)),
      ).toFixed(1);

      console.log(`📊 Average CPU Load: ${avgMetrics.cpu} cores`);
      console.log(`💾 Average RAM Usage: ${avgMetrics.mem}%`);
      console.log(`💾 Peak RAM Usage: ${peakMem}%`);
    }

    if (this.renderTimes.length > 0) {
      const avgTime = (
        this.renderTimes.reduce((a, b) => a + b, 0) / this.renderTimes.length
      ).toFixed(1);
      const minTime = Math.min(...this.renderTimes).toFixed(1);
      const maxTime = Math.max(...this.renderTimes).toFixed(1);

      console.log(`⏱️  Average Render Time: ${avgTime}s per video`);
      console.log(`⏱️  Fastest: ${minTime}s | Slowest: ${maxTime}s`);
    }

    const totalTime = ((Date.now() - this.startTime) / 1000 / 60).toFixed(1);
    console.log(`⏱️  Total Runtime: ${totalTime} minutes`);

    const suggestions = this.getSuggestions();
    if (suggestions.length > 0) {
      console.log("\n" + "=".repeat(70));
      console.log("💡 OPTIMIZATION SUGGESTIONS");
      console.log("=".repeat(70));
      suggestions.forEach((s, i) => {
        console.log(`${i + 1}. ${s.type}`);
        console.log(`   ${s.message}`);
      });
    }
    console.log("=".repeat(70) + "\n");
  }
}

const monitor = new PerformanceMonitor();

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
  parallelRenders: 1,
  useGPU: true,
  useTmpDir: true,
};

// ============================================
// ✂️ FFMPEG CUT CONFIGURATION
// ============================================
const CUT_SETTINGS = {
  enabled: true, // Bật/tắt tính năng cắt
  trimStart: 0.06, // Cắt bao nhiêu giây đầu tiên
  prefix: "CUT_", // Prefix cho file output
  deleteOriginal: false, // Xóa file gốc sau khi cắt xong?
  codec: "copy", // "copy" = không re-encode (nhanh), "h264" = re-encode (chính xác hơn)
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
    low: { crf: 28, preset: "veryfast" },
    medium: { crf: 23, preset: "fast" },
    high: { crf: 18, preset: "medium" },
    ultra: { crf: 15, preset: "slow" },
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
// ✂️ FFMPEG TRIM FUNCTION
// ============================================
/**
 * Cắt N giây đầu tiên của video bằng FFmpeg
 *
 * @param {string} inputPath  - Đường dẫn video gốc (vd: renders/videos/folder/ID1-name.mp4)
 * @param {string} itemId     - ID để log
 * @returns {{ success: boolean, cutPath: string, sizeMB: string }}
 *
 * ⭐ Chiến lược:
 * - codec "copy": dùng -ss + -c copy → cực nhanh, không re-encode
 *   ⚠️ Có thể không chính xác tuyệt đối vì phải seek tới keyframe gần nhất
 *
 * - codec "h264": dùng -ss (input) + re-encode → chính xác đến từng frame
 *   nhưng chậm hơn nhiều
 *
 * Với 0.04s (khoảng 1-2 frames ở 30fps), "copy" thường đủ chính xác.
 * Nếu cần cắt chính xác tuyệt đối, chuyển CUT_SETTINGS.codec = "h264".
 */
function trimVideoStart(inputPath, itemId) {
  if (!CUT_SETTINGS.enabled) {
    return { success: false, skipped: true };
  }

  if (!fs.existsSync(inputPath)) {
    console.log(`   ⚠️  [CUT] File không tồn tại: ${inputPath}`);
    return { success: false, skipped: false };
  }

  // Tạo output path: cùng folder, thêm prefix CUT_
  const dir = path.dirname(inputPath);
  const baseName = path.basename(inputPath);
  const cutName = `${CUT_SETTINGS.prefix}${baseName}`;
  const cutPath = path.join(dir, cutName);

  // Skip nếu đã tồn tại
  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(cutPath)) {
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
      // ⚡ FAST MODE: Stream copy, không re-encode
      // -ss trước -i → input seeking (nhanh)
      // -avoid_negative_ts make_zero → fix timestamp sau khi cắt
      cmd =
        `"${ffmpegPath}" -ss ${trimSec} -i "${inputPath}" ` +
        `-c copy -avoid_negative_ts make_zero "${cutPath}" -y`;
    } else {
      // 🎯 PRECISE MODE: Re-encode để cắt chính xác từng frame
      const quality = getVideoQuality(RENDER_SETTINGS.videoQuality);
      cmd =
        `ffmpeg -ss ${trimSec} -i "${inputPath}" ` +
        `-c:v libx264 -crf ${quality.crf} -preset ${quality.preset} ` +
        `-c:a aac -b:a 192k ` +
        `-pixel_format ${VIDEO_CONFIG.pixelFormat} ` +
        `-avoid_negative_ts make_zero ` +
        `"${cutPath}" -y`;
    }

    console.log(`   ✂️  [CUT] Trimming ${trimSec}s from start → ${cutName}`);
    execSync(cmd, { stdio: "pipe", maxBuffer: 50 * 1024 * 1024 });

    if (fs.existsSync(cutPath)) {
      const stats = fs.statSync(cutPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(1);

      // Xóa file gốc nếu cấu hình yêu cầu
      if (CUT_SETTINGS.deleteOriginal) {
        fs.unlinkSync(inputPath);
        console.log(`   🗑️  [CUT] Deleted original: ${baseName}`);
      }

      console.log(`   ✅ [CUT] Done: ${cutName} (${sizeMB}MB)`);
      return { success: true, skipped: false, cutPath, sizeMB };
    } else {
      console.log(`   ❌ [CUT] Output file not created: ${cutName}`);
      return { success: false, skipped: false };
    }
  } catch (error) {
    console.error(`   ❌ [CUT] Error trimming ${itemId}:`, error.message);
    return { success: false, skipped: false };
  }
}

// ============================================
// 🎬 RENDER FUNCTIONS
// ============================================
async function renderVideo(item) {
  const nameUse = item.nameUseFN;
  const folder = item.folderUSe;
  const videoPath = `${renderDir}/${folder}/${nameUse}.mp4`;

  // Ensure subfolder exists
  const subDir = path.dirname(videoPath);
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir, { recursive: true });
  }

  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(videoPath)) {
    console.log(`   ⏭️  Video already exists, skipping: ${item.id}`);
    const stats = fs.statSync(videoPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);

    // ✂️ Vẫn chạy CUT nếu file gốc tồn tại nhưng CUT_ chưa có
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
  let cmd =
    `npx remotion render ${item.id} ${videoPath} ` +
    `--width=${VIDEO_CONFIG.width} ` +
    `--height=${VIDEO_CONFIG.height} ` +
    `--fps=${VIDEO_CONFIG.fps} ` +
    `--codec=${VIDEO_CONFIG.codec} ` +
    `--crf=${quality.crf} ` +
    `--pixel-format=${VIDEO_CONFIG.pixelFormat} ` +
    `--serve-url=out`;

  if (RENDER_SETTINGS.useGPU) {
    cmd += ` --gl=angle`;
  }
  cmd += ` --concurrency=${os.cpus().length}`;

  const renderStart = Date.now();

  return new Promise((resolve) => {
    try {
      execSync(cmd, {
        stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
        maxBuffer: 50 * 1024 * 1024,
      });

      const renderTime = (Date.now() - renderStart) / 1000;
      monitor.addRenderTime(renderTime);

      if (fs.existsSync(videoPath)) {
        // Add metadata if enabled
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
          } catch (error) {
            console.error(`   ⚠️  Failed to add metadata: ${error.message}`);
            if (fs.existsSync(tempPath)) {
              fs.unlinkSync(tempPath);
            }
          }
        }

        const stats = fs.statSync(videoPath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);

        // ✂️ CẮT 0.04s ĐẦU TIÊN SAU KHI RENDER XONG
        const cutResult = trimVideoStart(videoPath, item.id);

        resolve({
          success: true,
          size: fileSizeMB,
          type: "video",
          skipped: false,
          time: renderTime,
          cutResult,
        });
      } else {
        resolve({ success: false, type: "video", skipped: false });
      }
    } catch (error) {
      console.error(`   ❌ Error rendering video ${item.id}:`, error.message);
      resolve({ success: false, type: "video", skipped: false });
    }
  });
}

async function renderStill(item) {
  const stillPath = `${stillDir}/${item.id}.${STILL_CONFIG.format}`;

  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(stillPath)) {
    console.log(`   ⏭️  Still already exists, skipping: ${item.id}`);
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

  return new Promise((resolve) => {
    try {
      execSync(cmd, {
        stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
        maxBuffer: 50 * 1024 * 1024,
      });

      if (fs.existsSync(stillPath)) {
        const stats = fs.statSync(stillPath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        resolve({
          success: true,
          size: fileSizeMB,
          type: "still",
          skipped: false,
        });
      } else {
        resolve({ success: false, type: "still", skipped: false });
      }
    } catch (error) {
      console.error(`   ❌ Error rendering still ${item.id}:`, error.message);
      resolve({ success: false, type: "still", skipped: false });
    }
  });
}

// ============================================
// 🚀 PARALLEL RENDER FUNCTION
// ============================================
async function renderItem(item, index, total) {
  console.log(`\n🎬 [${index + 1}/${total}] Processing: ${item.id}`);
  const itemStartTime = Date.now();
  const results = [];

  try {
    if (
      currentMode === RENDER_MODE.VIDEO_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      console.log(`   📹 Rendering video: ${item.id}...`);
      const videoResult = await renderVideo(item);
      results.push(videoResult);
    }

    if (
      currentMode === RENDER_MODE.STILL_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      console.log(`   🖼️  Rendering still image: ${item.id}...`);
      const stillResult = await renderStill(item);
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
      console.log(`✅ Done: ${item.id} (${renderTime}s) - ${sizeInfo}`);
      return { success: true, results: successResults };
    } else {
      console.log(`❌ Failed: ${item.id}`);
      return { success: false, results: [] };
    }
  } catch (error) {
    console.error(`❌ Error processing ${item.id}:`, error.message);
    return { success: false, results: [] };
  }
}

// ============================================
// 🔥 PARALLEL BATCH PROCESSOR
// ============================================
async function processBatch(items) {
  const results = {
    success: 0,
    errors: 0,
    cutSuccess: 0,
    cutErrors: 0,
  };

  for (let i = 0; i < items.length; i += RENDER_SETTINGS.parallelRenders) {
    const batch = items.slice(i, i + RENDER_SETTINGS.parallelRenders);

    console.log(
      `\n🔥 Batch ${Math.floor(i / RENDER_SETTINGS.parallelRenders) + 1}: Rendering ${batch.length} videos in parallel...`,
    );

    if (i % 10 === 0) {
      monitor.logMetrics("   ");
    }

    if (i > 0 && i % 20 === 0) {
      console.log(`   🧹 Cleaning up metrics...`);
      monitor.forceCleanup();
    }

    const batchPromises = batch.map((item, batchIndex) =>
      renderItem(item, i + batchIndex, items.length),
    );

    const batchResults = await Promise.all(batchPromises);

    batchResults.forEach((result) => {
      if (result.success) {
        results.success++;
        // Đếm kết quả CUT
        result.results.forEach((r) => {
          if (r.cutResult?.success) results.cutSuccess++;
          else if (r.cutResult && !r.cutResult.success && !r.cutResult.skipped)
            results.cutErrors++;
        });
      } else {
        results.errors++;
      }
    });

    console.log(
      `\n✅ Batch completed: ${results.success} success, ${results.errors} errors` +
        (CUT_SETTINGS.enabled
          ? ` | ✂️ CUT: ${results.cutSuccess} done, ${results.cutErrors} errors`
          : ""),
    );
  }

  return results;
}

// ============================================
// 🚀 MAIN RENDER PROCESS
// ============================================
async function runRenderProcess() {
  createDirectories();

  console.log("\n" + "=".repeat(70));
  console.log("🚀 REMOTION BATCH RENDER - PARALLEL MODE");
  console.log("=".repeat(70));
  console.log(
    `📐 Resolution: ${VIDEO_CONFIG.width}x${VIDEO_CONFIG.height} (2K)`,
  );
  console.log(
    `📊 Video: ${VIDEO_CONFIG.fps}fps, ${VIDEO_CONFIG.codec}, Quality: ${RENDER_SETTINGS.videoQuality}`,
  );
  console.log(`🔧 Mode: ${currentMode.toUpperCase()}`);
  console.log(
    `⚡ Parallel Renders: ${RENDER_SETTINGS.parallelRenders} videos at once`,
  );
  console.log(
    `⚡ GPU Acceleration: ${RENDER_SETTINGS.useGPU ? "ENABLED" : "DISABLED"}`,
  );
  console.log(
    `🔄 Overwrite: ${RENDER_SETTINGS.overwriteExisting ? "YES" : "NO"}`,
  );

  // ✂️ CUT info
  if (CUT_SETTINGS.enabled) {
    console.log("─".repeat(70));
    console.log(
      `✂️  FFmpeg Trim: ENABLED — Cắt ${CUT_SETTINGS.trimStart}s đầu tiên`,
    );
    console.log(
      `✂️  Output prefix: ${CUT_SETTINGS.prefix} | Codec: ${CUT_SETTINGS.codec} | Delete original: ${CUT_SETTINGS.deleteOriginal ? "YES" : "NO"}`,
    );
  }

  console.log("─".repeat(70));
  console.log(`💻 CPU Cores: ${os.cpus().length}`);
  console.log(`💾 Total RAM: ${(os.totalmem() / 1024 ** 3).toFixed(1)}GB`);
  console.log("=".repeat(70));

  if (currentMode !== RENDER_MODE.VIDEO_ONLY) {
    console.log(
      `🖼️  Still: ${STILL_CONFIG.format.toUpperCase()}, Frame: ${STILL_CONFIG.frame}`,
    );
  }

  monitor.logMetrics("\n");

  const startTime = Date.now();

  const results = await processBatch(videoData);

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log("\n" + "=".repeat(70));
  console.log("🎯 RENDER SUMMARY");
  console.log("=".repeat(70));
  console.log(`✅ Success: ${results.success}`);
  console.log(`❌ Errors: ${results.errors}`);

  if (CUT_SETTINGS.enabled) {
    console.log(`✂️  CUT Success: ${results.cutSuccess}`);
    console.log(`✂️  CUT Errors: ${results.cutErrors}`);
  }

  console.log(`⏱️  Total time: ${totalTime} minutes`);

  if (currentMode !== RENDER_MODE.STILL_ONLY && fs.existsSync(renderDir)) {
    // Đệ quy scan tất cả subfolder
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

  monitor.printReport();

  console.log(`\n🎉 Batch render completed!\n`);
}

// ============================================
// 📊 LOAD DATA AND START
// ============================================
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

    await runRenderProcess();
  } catch (error) {
    console.error(`❌ Failed to load data:`, error.message);
    console.error(
      `📍 Check if file exists: src/rootComponents/${root_JSX}/data.js`,
    );
    process.exit(1);
  }
}

// ✅ Start the process
loadDataAndRender();
