import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { root_JSX, folder_render, name_video } from "./root-config.js";
import ffmpegPath from "ffmpeg-static";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(`📂 Loading data from project: ${root_JSX}`);
// ============================================
// 🔧 CONFIGURATION
// ============================================
const VIDEO_CONFIG = {
  width: 1080,
  height: 1920,
  fps: 30,
  codec: "h264",
  crf: 23,
  pixelFormat: "yuv420p",
};
const RENDER_SETTINGS = {
  // 🎞️ Danh sách frame muốn chụp — sửa tại đây
  // VD: [15] hoặc [0, 15, 30, 60] phía dưới là lấy frame 2 5 8 11 14 làm ảnh
  // Frame nằm ngoài phạm vi video sẽ tự động bỏ qua (không gây lỗi)
  // lưu ý ko lấy số lẻ như 2.5; 5.5 ...
  stillFrames: [8, 17, 24, 33, 42, 51, 60],
  stillFormat: "png", // "png" | "jpeg"
  stillQuality: 95, // chỉ dùng khi format = "jpeg"
  overwriteExisting: false,
  showDetailedProgress: true,
};
// ============================================
// 📁 FOLDER & NAMING
// name_video = "thumb_" → stillDir = ./renders/img/thumb/
// filename: thumb_<id>-<frame>.png
// ============================================
const nameBase = name_video.endsWith("_")
  ? name_video.slice(0, -1)
  : name_video;
const stillDir = `./renders/img/${nameBase}`;
const tmpDir = `./renders/img/_tmp`;
function getStillPath(itemId, frame) {
  const ext = RENDER_SETTINGS.stillFormat;
  return path.join(stillDir, `${name_video}${itemId}-${frame}.${ext}`);
}
function getTmpVideoPath(itemId) {
  return path.join(tmpDir, `tmp_${itemId}.mp4`);
}
// ============================================
// 📂 LOAD DATA
// ============================================
let videoData;
async function loadDataAndRender() {
  if (!fs.existsSync("out")) {
    console.error("❌ Folder 'out/' không tồn tại! Chạy: npx remotion bundle");
    process.exit(1);
  }
  if (!ffmpegPath || !fs.existsSync(ffmpegPath)) {
    console.error(
      "❌ ffmpeg-static không tìm thấy! Chạy: npm install ffmpeg-static",
    );
    process.exit(1);
  }
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
    if (!videoData01) throw new Error(`❌ videoData01 not found in data.js`);
    videoData = videoData01[0]?.id
      ? videoData01
      : videoData01.map((e, i) => ({
          id: i + 1,
          data: e,
          nameUseFN: `ID${i + 1}-${name_video}`,
          folderUSe: folder_render,
        }));
    console.log(`✅ Loaded ${videoData.length} items\n`);
    runRenderProcess();
  } catch (error) {
    console.error(`❌ Failed to load data:`, error.message);
    console.error(`📍 Check: src/rootComponents/${root_JSX}/data.js`);
    process.exit(1);
  }
}
// ============================================
// 📁 CREATE DIRECTORIES
// ============================================
function createDirectories() {
  [stillDir, tmpDir].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created: ${dir}`);
    }
  });
}
// ============================================
// 🔍 ĐỌC FRAME COUNT TỪ VIDEO ĐÃ RENDER
// Dùng `ffmpeg -i` để parse "Duration: HH:MM:SS.ss" → tính số frames
// Không cần ffprobe, không cần query Remotion
// ffmpeg luôn in Duration ra stderr kể cả khi không có output file
// ============================================
function getVideoFrameCount(videoPath) {
  try {
    let stderr = "";
    try {
      execSync(`"${ffmpegPath}" -i "${videoPath}"`, {
        stdio: "pipe",
        maxBuffer: 2 * 1024 * 1024,
      });
    } catch (e) {
      // execSync throw vì không có output file chỉ định — đây là bình thường
      stderr = e.stderr?.toString() ?? "";
    }
    // Parse "Duration: 00:00:00.50"
    const m = stderr.match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/);
    if (!m) return null;
    const totalSec =
      parseInt(m[1]) * 3600 + parseInt(m[2]) * 60 + parseFloat(m[3]);
    // Math.round để tránh floating point; +1 vì frame đánh số từ 0
    return Math.round(totalSec * VIDEO_CONFIG.fps) + 1;
  } catch {
    return null;
  }
}
// ============================================
// 🎬 BƯỚC 1: Render TOÀN BỘ video bằng Remotion (không giới hạn frame)
// Đảm bảo không bao giờ lỗi do frame vượt duration
// getVideoFrameCount() sẽ lọc frame hợp lệ sau khi render xong
// ============================================
function renderTmpVideo(item) {
  const tmpPath = getTmpVideoPath(item.id);
  const cmd =
    `npx remotion render ` +
    `--serve-url=out ` +
    `--width=${VIDEO_CONFIG.width} ` +
    `--height=${VIDEO_CONFIG.height} ` +
    `--fps=${VIDEO_CONFIG.fps} ` +
    `--codec=${VIDEO_CONFIG.codec} ` +
    `--crf=${VIDEO_CONFIG.crf} ` +
    `--pixel-format=${VIDEO_CONFIG.pixelFormat} ` +
    `${item.id} "${tmpPath}"`;
  if (RENDER_SETTINGS.showDetailedProgress) {
    console.log(`   📝 Render CMD: ${cmd}`);
  }
  execSync(cmd, {
    stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
    maxBuffer: 100 * 1024 * 1024,
  });
  return tmpPath;
}
// ============================================
// 🖼️ BƯỚC 2: Extract frame từ video bằng FFmpeg
// ============================================
function extractFrame(tmpVideoPath, frame, stillPath) {
  const timeSec = (frame / VIDEO_CONFIG.fps).toFixed(6);
  const qualityFlag =
    RENDER_SETTINGS.stillFormat === "jpeg"
      ? `-q:v ${Math.round(((100 - RENDER_SETTINGS.stillQuality) / 100) * 31)}`
      : `-compression_level 3`;
  const cmd = [
    `"${ffmpegPath}"`,
    `-ss ${timeSec}`,
    `-i "${tmpVideoPath}"`,
    `-frames:v 1`,
    qualityFlag,
    `"${stillPath}"`,
    `-y`,
  ].join(" ");
  if (RENDER_SETTINGS.showDetailedProgress) {
    console.log(`      📝 FFmpeg CMD: ${cmd}`);
  }
  execSync(cmd, {
    stdio: "pipe",
    maxBuffer: 50 * 1024 * 1024,
  });
}
// ============================================
// 🖼️ RENDER ITEM: render video → filter frames → extract
// ============================================
function renderItem(item, index) {
  console.log(`🎬 [${index + 1}/${videoData.length}] ID: ${item.id}`);
  const t0 = Date.now();
  // Skip sớm nếu tất cả frames đã tồn tại
  if (!RENDER_SETTINGS.overwriteExisting) {
    const allExist = RENDER_SETTINGS.stillFrames.every((f) =>
      fs.existsSync(getStillPath(item.id, f)),
    );
    if (allExist) {
      console.log(`   ⏭️  Tất cả frames đã tồn tại, skipping...\n`);
      return true;
    }
  }
  const tmpPath = getTmpVideoPath(item.id);
  try {
    // ── Bước 1: Render toàn bộ video ──
    console.log(`   🎬 Rendering full video...`);
    renderTmpVideo(item);
    if (!fs.existsSync(tmpPath)) {
      console.log(`   ❌ Tmp video không được tạo`);
      return false;
    }
    const videoSizeMB = (fs.statSync(tmpPath).size / 1024 / 1024).toFixed(1);
    console.log(`   ✅ Tmp video: ${videoSizeMB}MB`);
    // ── Bước 1b: Đọc frame count thực tế → lọc frames hợp lệ ──
    const actualFrameCount = getVideoFrameCount(tmpPath);
    let effectiveFrames = RENDER_SETTINGS.stillFrames;
    if (actualFrameCount !== null) {
      effectiveFrames = RENDER_SETTINGS.stillFrames.filter(
        (f) => f < actualFrameCount,
      );
      const skipped = RENDER_SETTINGS.stillFrames.filter(
        (f) => f >= actualFrameCount,
      );
      if (skipped.length > 0) {
        console.log(
          `   ⚠️  Bỏ qua frame ngoài phạm vi (video có ${actualFrameCount} frames): [${skipped.join(", ")}]`,
        );
      } else {
        console.log(
          `   📊 Video: ${actualFrameCount} frames — tất cả frames hợp lệ`,
        );
      }
    } else {
      console.log(
        `   ℹ️  Không đọc được frame count, thử extract toàn bộ stillFrames`,
      );
    }
    if (effectiveFrames.length === 0) {
      console.log(`   ⚠️  Không có frame hợp lệ nào để extract\n`);
      fs.unlinkSync(tmpPath);
      return false;
    }
    // ── Bước 2: Extract từng frame hợp lệ ──
    let successCount = 0;
    for (const frame of effectiveFrames) {
      const stillPath = getStillPath(item.id, frame);
      console.log(`      🎯 Extracting frame ${frame} → ${stillPath}`);
      try {
        extractFrame(tmpPath, frame, stillPath);
        if (fs.existsSync(stillPath)) {
          const sizeMB = (fs.statSync(stillPath).size / 1024 / 1024).toFixed(2);
          console.log(`      ✅ Frame ${frame}: ${sizeMB}MB`);
          successCount++;
        } else {
          console.log(`      ❌ Frame ${frame}: File không được tạo`);
        }
      } catch (err) {
        console.log(`      ❌ Frame ${frame}: ${err.message}`);
      }
    }
    // ── Bước 3: Xóa video tạm ──
    fs.unlinkSync(tmpPath);
    console.log(`   🗑️  Deleted tmp video`);
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    const ok = successCount > 0;
    if (ok) {
      console.log(
        `✅ Done: ${item.id} (${elapsed}s) — ${successCount}/${effectiveFrames.length} frames\n`,
      );
    } else {
      console.log(`❌ Failed: ${item.id}\n`);
    }
    return ok;
  } catch (error) {
    console.error(`❌ Error: ${item.id} — ${error.message}`);
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    return false;
  }
}
// ============================================
// 🚀 MAIN
// ============================================
function runRenderProcess() {
  createDirectories();
  console.log("=".repeat(60));
  console.log("🚀 REMOTION → FFMPEG BATCH STILL RENDER");
  console.log("=".repeat(60));
  console.log(`📐 Resolution  : ${VIDEO_CONFIG.width}x${VIDEO_CONFIG.height}`);
  console.log(`🖼️  Format      : ${RENDER_SETTINGS.stillFormat.toUpperCase()}`);
  console.log(`🎞️  Frames      : [${RENDER_SETTINGS.stillFrames.join(", ")}]`);
  console.log(`📁 Output      : ${stillDir}`);
  console.log(
    `🏷️  Pattern     : ${name_video}<id>-<frame>.${RENDER_SETTINGS.stillFormat}`,
  );
  console.log(
    `🔄 Overwrite   : ${RENDER_SETTINGS.overwriteExisting ? "YES" : "NO"}`,
  );
  console.log(`⚡ FFmpeg      : ${ffmpegPath}`);
  console.log("=".repeat(60) + "\n");
  let successCount = 0;
  const startTime = Date.now();
  for (const [index, item] of videoData.entries()) {
    const ok = renderItem(item, index);
    if (ok) successCount++;
  }
  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log("=".repeat(60));
  console.log("🎯 COMPLETE");
  console.log(`✅ Success : ${successCount}/${videoData.length}`);
  console.log(`❌ Errors  : ${videoData.length - successCount}`);
  console.log(`⏱️  Time    : ${totalTime} min`);
  if (fs.existsSync(stillDir)) {
    const files = fs
      .readdirSync(stillDir)
      .filter((f) => /\.(png|jpe?g)$/.test(f));
    const totalBytes = files.reduce(
      (sum, f) => sum + fs.statSync(path.join(stillDir, f)).size,
      0,
    );
    console.log(
      `🖼️  Stills  : ${(totalBytes / 1024 / 1024).toFixed(1)}MB (${files.length} files) — ${stillDir}`,
    );
  }
  console.log(`\n🎉 Done!`);
}
// ✅ Start
loadDataAndRender();