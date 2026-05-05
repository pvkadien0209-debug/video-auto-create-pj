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
  // VD: [15] hoặc [0, 15, 30, 60] phia dưới là lấy frame 2 5 8 11 14 làm ảnh; lưu ý ko lấy số lẻ như 2.5; 5.5 ...
  stillFrames: [2, 5, 8, 11, 14],

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
// 🎬 BƯỚC 1: Render video ngắn bằng Remotion
// Chỉ render đủ frame cần thiết (đến frame cao nhất trong stillFrames)
// ============================================
function renderTmpVideo(item) {
  const tmpPath = getTmpVideoPath(item.id);
  const maxFrame = Math.max(...RENDER_SETTINGS.stillFrames);

  // Render từ frame 0 đến maxFrame để đảm bảo animation đã chạy đủ
  const cmd =
    `npx remotion render ` +
    `--serve-url=out ` +
    `--frames=0-${maxFrame} ` +
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
  // Tính timestamp chính xác theo fps
  const timeSec = (frame / VIDEO_CONFIG.fps).toFixed(6);

  const qualityFlag =
    RENDER_SETTINGS.stillFormat === "jpeg"
      ? `-q:v ${Math.round(((100 - RENDER_SETTINGS.stillQuality) / 100) * 31)}`
      : `-compression_level 3`; // PNG compression nhẹ để nhanh hơn

  const cmd = [
    `"${ffmpegPath}"`,
    `-ss ${timeSec}`, // seek đến đúng thời điểm
    `-i "${tmpVideoPath}"`, // input video
    `-frames:v 1`, // chỉ lấy 1 frame
    qualityFlag,
    `"${stillPath}"`,
    `-y`, // overwrite nếu tồn tại
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
// 🖼️ RENDER ITEM: render video → extract tất cả frames
// ============================================
function renderItem(item, index) {
  console.log(`🎬 [${index + 1}/${videoData.length}] ID: ${item.id}`);
  const t0 = Date.now();

  // Kiểm tra nếu tất cả frame đã tồn tại → skip
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
    // ── Bước 1: Render video ngắn ──
    console.log(
      `   🎬 Rendering video (frames 0–${Math.max(...RENDER_SETTINGS.stillFrames)})...`,
    );
    renderTmpVideo(item);

    if (!fs.existsSync(tmpPath)) {
      console.log(`   ❌ Tmp video không được tạo`);
      return false;
    }

    const videoSizeMB = (fs.statSync(tmpPath).size / 1024 / 1024).toFixed(1);
    console.log(`   ✅ Tmp video: ${videoSizeMB}MB`);

    // ── Bước 2: Extract từng frame ──
    let successCount = 0;
    for (const frame of RENDER_SETTINGS.stillFrames) {
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
        `✅ Done: ${item.id} (${elapsed}s) — ${successCount}/${RENDER_SETTINGS.stillFrames.length} frames\n`,
      );
    } else {
      console.log(`❌ Failed: ${item.id}\n`);
    }
    return ok;
  } catch (error) {
    console.error(`❌ Error: ${item.id} — ${error.message}`);
    // Dọn tmp nếu lỗi
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
