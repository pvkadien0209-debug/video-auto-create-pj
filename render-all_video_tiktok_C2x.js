import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  selectComposition,
  renderMedia,
  renderStill as remotionRenderStill,
} from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
// ⚡ Bỏ import folder_render/name_video tĩnh từ root-config.js — giống hệt
// C1x.js: tên folder/tên video được LẤY TỪ DATA (folderName/VideoName của
// item đầu tiên), không dùng giá trị cố định trong root-config.js nữa. Xem
// biến folder_render/name_video được gán bên trong loadDataAndRender().
import { root_JSX, VIDEO_METADATA } from "./root-config.js";
import ffmpegPath from "ffmpeg-static";

// ✅ Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`📂 Loading data from project: ${root_JSX}`);

let videoData;

// ============================================
// ⏱️ DEEP TIMING / BOTTLENECK PROFILING
// ============================================
// Mỗi stage được đo riêng biệt để biết chính xác điểm nghẽn nằm ở đâu:
//   - selectComposition : thời gian Remotion load & evaluate composition (data.js nặng → chậm ở đây)
//   - renderFrames       : thời gian render từng frame (CPU/GPU-bound, animation nặng → chậm ở đây)
//   - encodeVideo        : thời gian ffmpeg stitch/encode SAU khi frame đã render xong (codec/crf/preset → chậm ở đây)
//   - metadataMux        : thời gian remux metadata (thường nhanh, nếu chậm thì bất thường)
//   - ffmpegCut          : thời gian cắt trim đầu video
//   - stillRender        : thời gian render ảnh tĩnh
const stageTimings = {
  bundle: [],
  selectComposition: [],
  renderFrames: [],
  encodeVideo: [],
  metadataMux: [],
  ffmpegCut: [],
  stillRender: [],
};

// Lưu lại các "cửa sổ" frame render chậm bất thường để soi kỹ hơn per-item
// { itemId, fromFrame, toFrame, windowMs, fps }
const slowFrameWindows = [];

// Ngưỡng: nếu 1 khoảng progress có fps < (fps trung bình toàn item) * SLOW_WINDOW_RATIO → coi là bất thường
const SLOW_WINDOW_RATIO = 0.5;

async function timeStageAsync(label, fn) {
  const t0 = process.hrtime.bigint();
  const result = await fn();
  const t1 = process.hrtime.bigint();
  const ms = Number(t1 - t0) / 1e6;
  if (stageTimings[label]) stageTimings[label].push(ms);
  console.log(`   ⏱️  [${label}] ${(ms / 1000).toFixed(2)}s`);
  return result;
}

function timeStageSync(label, fn) {
  const t0 = process.hrtime.bigint();
  const result = fn();
  const t1 = process.hrtime.bigint();
  const ms = Number(t1 - t0) / 1e6;
  if (stageTimings[label]) stageTimings[label].push(ms);
  console.log(`   ⏱️  [${label}] ${(ms / 1000).toFixed(2)}s`);
  return result;
}

function printBottleneckReport() {
  console.log("\n" + "=".repeat(70));
  console.log("🩺 BOTTLENECK REPORT (theo giai đoạn)");
  console.log("=".repeat(70));

  const rows = Object.entries(stageTimings)
    .filter(([, arr]) => arr.length > 0)
    .map(([label, arr]) => {
      const total = arr.reduce((a, b) => a + b, 0);
      const avg = total / arr.length;
      const max = Math.max(...arr);
      const min = Math.min(...arr);
      return { label, count: arr.length, total, avg, max, min };
    })
    .sort((a, b) => b.total - a.total); // giai đoạn tốn nhiều thời gian nhất lên đầu

  const grandTotal = rows.reduce((sum, r) => sum + r.total, 0);

  rows.forEach((r) => {
    const pct =
      grandTotal > 0 ? ((r.total / grandTotal) * 100).toFixed(1) : "0.0";
    console.log(
      `   ${r.label.padEnd(18)} | count: ${String(r.count).padEnd(3)} | ` +
        `total: ${(r.total / 1000).toFixed(1)}s | avg: ${(r.avg / 1000).toFixed(2)}s | ` +
        `max: ${(r.max / 1000).toFixed(2)}s | ${pct}% tổng thời gian`,
    );
  });

  if (rows.length > 0) {
    console.log("─".repeat(70));
    console.log(
      `🔥 Điểm nghẽn lớn nhất: "${rows[0].label}" — chiếm ${((rows[0].total / grandTotal) * 100).toFixed(1)}% tổng thời gian xử lý`,
    );
    console.log(
      `   → Gợi ý: nếu là "renderFrames", nghẽn nằm ở animation/logic component (CPU/GPU render frame).`,
    );
    console.log(
      `   → Gợi ý: nếu là "encodeVideo", nghẽn nằm ở ffmpeg encode (thử preset nhanh hơn hoặc crf cao hơn).`,
    );
    console.log(
      `   → Gợi ý: nếu là "selectComposition", nghẽn nằm ở lúc Remotion evaluate data.js/root (data quá nặng).`,
    );
    console.log(
      `   → Gợi ý: nếu là "ffmpegCut", nghẽn nằm ở bước cắt (thử đổi codec "copy" thay vì "h264").`,
    );
  }

  if (slowFrameWindows.length > 0) {
    console.log("─".repeat(70));
    console.log("🐌 TOP CỬA SỔ FRAME CHẬM BẤT THƯỜNG (per item):");
    slowFrameWindows
      .sort((a, b) => a.fps - b.fps)
      .slice(0, 8)
      .forEach((w) => {
        console.log(
          `   • ${w.itemId}: frame ${w.fromFrame}→${w.toFrame} chỉ đạt ~${w.fps.toFixed(1)} fps ` +
            `(baseline item ~${w.baselineFps.toFixed(1)} fps) trong ${(w.windowMs / 1000).toFixed(2)}s`,
        );
      });
    console.log(
      `   → Đây thường là dấu hiệu của: transition nặng, ảnh/video lớn chưa cache, font load lần đầu, hoặc GC pause.`,
    );
  }

  console.log("=".repeat(70));
}

// ============================================
// 📦 ENSURE BUNDLE EXISTS (tự bundle nếu chưa có, đo timing riêng)
// ============================================
// Thử vài entry point phổ biến của Remotion; nếu project bạn dùng tên khác,
// sửa ENTRY_POINT_CANDIDATES bên dưới cho đúng file gốc (nơi registerRoot() được gọi).
const ENTRY_POINT_CANDIDATES = [
  path.join(__dirname, "src", "index.ts"),
  path.join(__dirname, "src", "index.tsx"),
  path.join(__dirname, "src", "index.js"),
  path.join(__dirname, "src", "Root.tsx"),
  path.join(__dirname, "src", "Root.ts"),
];

// ⚡ CHỐNG "BUNDLE CŨ ĐÔNG CỨNG DỮ LIỆU": trước đây ensureBundle() chỉ kiểm
// tra out/index.html có tồn tại hay không — nếu có là dùng luôn, dù data
// (data_Front_001.json, data.js, pipeline/...) đã đổi khác xa lúc bundle
// được build. Vì JSON/JS được nhúng thẳng vào bundle lúc build, chỉ có
// dạng bundle này mới thấy dữ liệu mới; nếu không rebuild, video sẽ mãi
// mãi render nội dung CŨ dù data đã cập nhật (đây chính là lỗi C2x gặp
// phải: bundle build từ ~57 ngày trước data_Front_001.json mới nhất).
// Giải pháp: so sánh thời gian sửa đổi mới nhất trong toàn bộ src/ với
// thời gian build của out/index.html — nếu có file trong src/ mới hơn,
// coi bundle là stale và tự xoá + build lại. Nếu không có gì đổi thì vẫn
// tái sử dụng bundle cũ để giữ tốc độ.
function getDirLatestMtimeMs(dir) {
  let latest = 0;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return latest;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = getDirLatestMtimeMs(full);
      if (sub > latest) latest = sub;
    } else {
      try {
        const mtime = fs.statSync(full).mtimeMs;
        if (mtime > latest) latest = mtime;
      } catch {
        // bỏ qua file lỗi (vd: symlink hỏng)
      }
    }
  }
  return latest;
}

async function ensureBundle(serveUrl) {
  const indexHtmlPath = path.join(serveUrl, "index.html");
  const srcDir = path.join(__dirname, "src");

  let needRebuild = true;

  if (fs.existsSync(indexHtmlPath)) {
    const bundleMtimeMs = fs.statSync(indexHtmlPath).mtimeMs;
    const srcLatestMtimeMs = fs.existsSync(srcDir)
      ? getDirLatestMtimeMs(srcDir)
      : 0;

    if (srcLatestMtimeMs <= bundleMtimeMs) {
      console.log(
        `Serve URL: ✅ bundle tại "${serveUrl}" (build lúc ${new Date(bundleMtimeMs).toLocaleString()}) vẫn mới hơn toàn bộ src/ — tái sử dụng, không build lại.`,
      );
      needRebuild = false;
    } else {
      console.log(
        `♻️  Phát hiện src/ đã thay đổi SAU khi bundle được build ` +
          `(src mới nhất: ${new Date(srcLatestMtimeMs).toLocaleString()}, ` +
          `bundle cũ: ${new Date(bundleMtimeMs).toLocaleString()}) — build lại bundle để lấy data/code mới nhất...`,
      );
    }
  } else {
    console.log(
      `⚠️  Không tìm thấy "${indexHtmlPath}" — tiến hành bundle tự động...`,
    );
  }

  if (!needRebuild) return;

  // Xoá bundle cũ (nếu có) trước khi build lại để tránh lẫn file rác của lần build trước
  if (fs.existsSync(serveUrl)) {
    fs.rmSync(serveUrl, { recursive: true, force: true });
  }

  const entryPoint = ENTRY_POINT_CANDIDATES.find((p) => fs.existsSync(p));
  if (!entryPoint) {
    throw new Error(
      `❌ Không tìm thấy entry point để bundle. Đã thử: ${ENTRY_POINT_CANDIDATES.join(", ")}. ` +
        `Hãy sửa ENTRY_POINT_CANDIDATES trong script cho đúng file gốc (nơi gọi registerRoot()), ` +
        `hoặc tự chạy "npx remotion bundle <entry> --out-dir=${serveUrl}" trước khi chạy script này.`,
    );
  }

  console.log(`📦 Entry point: ${entryPoint}`);

  await timeStageAsync("bundle", () =>
    bundle({
      entryPoint,
      outDir: serveUrl,
    }),
  );

  if (!fs.existsSync(indexHtmlPath)) {
    throw new Error(
      `❌ Bundle chạy xong nhưng vẫn không thấy "${indexHtmlPath}". Kiểm tra lại outDir/entry point.`,
    );
  }
  console.log(`✅ Bundle thành công → ${serveUrl}`);
}

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

    // ⚡ Y CHANG C1x.js: folder_render/name_video lấy từ data (item đầu tiên)
    // thay vì từ root-config.js — mỗi video có thể tự khai báo folderName/
    // VideoName riêng trong data, có fallback nếu data không khai báo.
    let folder_render = "";
    let name_video = "";

    if (!videoData01[0]?.id) {
      let temVideoData = [];
      videoData01.forEach((e, i) => {
        if (i === 0) {
          folder_render = e[0]?.folderName || "default_folder";
          name_video = e[0]?.VideoName || "default_name";
        }
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

// ============================================
// 🎬 RENDER CONFIGURATION
// ============================================
const SERVE_URL = path.join(__dirname, "out"); // ✅ Đường dẫn tuyệt đối, tránh lỗi cwd khác vị trí script

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
  videoQuality: "low",
  enableStill: false,
  stillFormat: "png",
  stillFrame: 10,
  overwriteExisting: false,
  showDetailedProgress: true,
  // ⚡ QUAN TRỌNG: renderMedia() KHÔNG tự đọc remotion.config.js (file đó chỉ
  // được `npx remotion render` CLI đọc) — trước đây gọi renderMedia() không
  // truyền concurrency nên Remotion tự chọn mặc định (thường ~1/2 số logical
  // CPU, ví dụ 4 tab như thấy trong log), HOÀN TOÀN BỎ QUA setConcurrency(1)
  // đã cấu hình có chủ đích trong remotion.config.js ("Giảm concurrency vì 2K
  // tốn RAM"). Theo BOTTLENECK REPORT thực tế, renderFrames chiếm 98.2% tổng
  // thời gian — 4 tab chạy song song trên máy RAM/CPU hạn chế nhiều khả năng
  // gây tranh chấp CPU/RAM (thrashing) khiến MỖI frame render chậm đi, ngốn
  // hết lợi ích của việc chạy song song. Đặt lại = 1 để khớp đúng ý định gốc;
  // có thể thử tăng dần lên 2, 3... rồi quan sát Task Manager (RAM/CPU) để
  // tìm điểm tối ưu cho máy cụ thể của bạn.
  concurrency: 1,
};

// ============================================
// ✂️ FFMPEG CUT CONFIGURATION
// ============================================
const CUT_SETTINGS = {
  enabled: true,
  trimStart: 0.02, // seconds
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

  const dir = path.dirname(inputPath);
  const baseName = path.basename(inputPath);
  const cutName = `${CUT_SETTINGS.prefix}${baseName}`;
  const cutPath = path.join(dir, cutName);

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
// 🎬 RENDER FUNCTIONS (dùng @remotion/renderer API để có onProgress chi tiết)
// ============================================
async function renderVideo(item) {
  console.log(item.data[0].hook, "hook");
  const nameUse = item.nameUseFN;
  const folder = item.folderUSe;
  const videoPath = `${renderDir}/${folder}/${nameUse}.mp4`;

  const subDir = path.dirname(videoPath);
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir, { recursive: true });
  }

  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(videoPath)) {
    console.log(`   ⏭️  Video already exists, skipping render...`);
    const stats = fs.statSync(videoPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(1);
    const cutResult = timeStageSync("ffmpegCut", () =>
      trimVideoStart(videoPath, item.id),
    );
    return {
      success: true,
      size: fileSizeMB,
      type: "video",
      skipped: true,
      cutResult,
    };
  }

  const quality = getVideoQuality(RENDER_SETTINGS.videoQuality);

  // 1️⃣ selectComposition — đo riêng thời gian Remotion load/evaluate root + data.js
  const composition = await timeStageAsync("selectComposition", () =>
    selectComposition({
      serveUrl: SERVE_URL,
      id: String(item.id),
    }),
  );

  // 2️⃣ renderMedia — tách "render frame" khỏi "encode" bằng onProgress
  const totalFrames = composition.durationInFrames;
  const progressSamples = []; // { t: bigint ns, renderedFrames, encodedFrames }
  let renderFramesDoneAt = null;
  const renderStartNs = process.hrtime.bigint();

  await renderMedia({
    composition,
    serveUrl: SERVE_URL,
    codec: VIDEO_CONFIG.codec,
    outputLocation: videoPath,
    crf: quality.crf,
    pixelFormat: VIDEO_CONFIG.pixelFormat,
    overwrite: true,
    // ⚡ Truyền tường minh thay vì để Remotion tự auto-detect — xem giải
    // thích chi tiết ở RENDER_SETTINGS.concurrency phía trên.
    concurrency: RENDER_SETTINGS.concurrency,
    onProgress: ({ renderedFrames, encodedFrames }) => {
      const now = process.hrtime.bigint();
      progressSamples.push({ t: now, renderedFrames, encodedFrames });
      if (renderFramesDoneAt === null && renderedFrames >= totalFrames) {
        renderFramesDoneAt = now;
      }
      if (RENDER_SETTINGS.showDetailedProgress) {
        process.stdout.write(
          `\r   🎞️  render: ${renderedFrames}/${totalFrames}  |  encode: ${encodedFrames}/${totalFrames}   `,
        );
      }
    },
  });

  if (RENDER_SETTINGS.showDetailedProgress) process.stdout.write("\n");

  const renderEndNs = process.hrtime.bigint();
  const renderFramesEndNs = renderFramesDoneAt ?? renderEndNs;

  const renderFramesMs = Number(renderFramesEndNs - renderStartNs) / 1e6;
  const encodeMs = Number(renderEndNs - renderFramesEndNs) / 1e6;

  stageTimings.renderFrames.push(renderFramesMs);
  stageTimings.encodeVideo.push(encodeMs);
  console.log(`   ⏱️  [renderFrames] ${(renderFramesMs / 1000).toFixed(2)}s`);
  console.log(`   ⏱️  [encodeVideo]  ${(encodeMs / 1000).toFixed(2)}s`);

  // 3️⃣ Phân tích progressSamples để tìm cửa sổ frame render chậm bất thường
  analyzeSlowFrameWindows(
    item.id,
    progressSamples,
    totalFrames,
    renderStartNs,
    renderFramesEndNs,
  );

  if (fs.existsSync(videoPath)) {
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
        timeStageSync("metadataMux", () =>
          execSync(metadataCmd, { stdio: "pipe" }),
        );
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

    const cutResult = timeStageSync("ffmpegCut", () =>
      trimVideoStart(videoPath, item.id),
    );

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

// Chia tiến trình thành các "cửa sổ" giữa 2 lần progress liên tiếp, tính fps từng cửa sổ,
// so với baseline fps trung bình của item để phát hiện cụm frame chậm bất thường.
function analyzeSlowFrameWindows(
  itemId,
  samples,
  totalFrames,
  startNs,
  framesDoneNs,
) {
  if (samples.length < 2 || !totalFrames) return;

  const totalRenderMs = Number(framesDoneNs - startNs) / 1e6;
  const baselineFps =
    totalRenderMs > 0 ? totalFrames / (totalRenderMs / 1000) : 0;
  if (!baselineFps || !isFinite(baselineFps)) return;

  let prev = { t: startNs, renderedFrames: 0 };
  for (const sample of samples) {
    // chỉ xét trong giai đoạn render frame (bỏ qua giai đoạn encode-only)
    if (sample.t > framesDoneNs) break;

    const deltaFrames = sample.renderedFrames - prev.renderedFrames;
    const deltaMs = Number(sample.t - prev.t) / 1e6;

    if (deltaFrames > 0 && deltaMs > 0) {
      const fps = deltaFrames / (deltaMs / 1000);
      if (fps < baselineFps * SLOW_WINDOW_RATIO && deltaMs > 200) {
        slowFrameWindows.push({
          itemId,
          fromFrame: prev.renderedFrames,
          toFrame: sample.renderedFrames,
          windowMs: deltaMs,
          fps,
          baselineFps,
        });
      }
    }
    prev = sample;
  }
}

async function renderStill(item) {
  const stillPath = `${stillDir}/${item.id}.${STILL_CONFIG.format}`;
  if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(stillPath)) {
    console.log(`   ⏭️  Still already exists, skipping...`);
    const stats = fs.statSync(stillPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    return { success: true, size: fileSizeMB, type: "still", skipped: true };
  }

  const composition = await timeStageAsync("selectComposition", () =>
    selectComposition({
      serveUrl: SERVE_URL,
      id: String(item.id),
    }),
  );

  await timeStageAsync("stillRender", () =>
    remotionRenderStill({
      composition,
      serveUrl: SERVE_URL,
      output: stillPath,
      frame: STILL_CONFIG.frame,
      imageFormat: STILL_CONFIG.format === "jpeg" ? "jpeg" : "png",
      jpegQuality:
        STILL_CONFIG.format === "jpeg" ? STILL_CONFIG.quality : undefined,
      overwrite: true,
    }),
  );

  if (fs.existsSync(stillPath)) {
    const stats = fs.statSync(stillPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    return { success: true, size: fileSizeMB, type: "still", skipped: false };
  }
  return { success: false, type: "still", skipped: false };
}

async function renderItem(item, index) {
  console.log(`🎬 [${index + 1}/${videoData.length}] Processing: ${item.id}`);
  const results = [];
  const itemStartTime = Date.now();
  try {
    if (
      currentMode === RENDER_MODE.VIDEO_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      console.log(`   📹 Rendering video...`);
      const videoResult = await renderVideo(item);
      results.push(videoResult);
    }
    if (
      currentMode === RENDER_MODE.STILL_ONLY ||
      currentMode === RENDER_MODE.BOTH
    ) {
      console.log(`   🖼️  Rendering still image...`);
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
async function runRenderProcess() {
  createDirectories();

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
  try {
    await ensureBundle(SERVE_URL);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  console.log("\n" + "=".repeat(70));
  console.log("🚀 REMOTION BATCH RENDER - SEQUENTIAL MODE (deep-profiled)");
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

  for (let index = 0; index < videoData.length; index++) {
    const item = videoData[index];
    const result = await renderItem(item, index);
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
  }

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

  printBottleneckReport();

  console.log(`\n🎉 Batch render completed!`);
}

// ✅ Start the process
loadDataAndRender();
