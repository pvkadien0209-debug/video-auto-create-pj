import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { root_JSX, folder_render, name_video } from "./root-config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`📂 Loading data from project: ${root_JSX}`);

// ============================================
// 🔧 RENDER CONFIGURATION
// ============================================
const VIDEO_CONFIG = {
  width: 1080,
  height: 1920,
};

const RENDER_SETTINGS = {
  stillFormat: "png", // "png" | "jpeg"
  stillFrames: [15], // ✅ Danh sách frames cần capture — sửa tại đây
  stillQuality: 95, // Chỉ dùng khi format = "jpeg"
  overwriteExisting: false,
  showDetailedProgress: true,
};

// ============================================
// 📁 FOLDER & NAMING
// name_video = "thumb_" → folder: "thumb" → ./renders/img/thumb/
// filename: thumb_<id>-<frame>.png
// ============================================
const nameBase = name_video.endsWith("_")
  ? name_video.slice(0, -1)
  : name_video;
const stillDir = `./renders/img/${nameBase}`;

function getStillPath(itemId, frame) {
  const fileName = `${name_video}${itemId}-${frame}.${RENDER_SETTINGS.stillFormat}`;
  return path.join(stillDir, fileName);
}

// ============================================
// 📂 LOAD DATA
// ============================================
let videoData;

async function loadDataAndRender() {
  // Kiểm tra bundle
  if (!fs.existsSync("out")) {
    console.error("❌ Folder 'out/' không tồn tại! Chạy: npx remotion bundle");
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

    if (!videoData01) {
      throw new Error(`❌ videoData01 not found in data.js`);
    }

    // Nếu item chưa có id → tự sinh
    if (!videoData01[0]?.id) {
      videoData = videoData01.map((e, i) => ({
        id: i + 1,
        data: e,
        nameUseFN: `ID${i + 1}-${name_video}`,
        folderUSe: folder_render,
      }));
    } else {
      videoData = videoData01;
    }

    console.log(`✅ Loaded ${videoData.length} items\n`);
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
// 📁 CREATE DIRECTORIES
// ============================================
function createDirectories() {
  if (!fs.existsSync(stillDir)) {
    fs.mkdirSync(stillDir, { recursive: true });
    console.log(`📁 Created: ${stillDir}`);
  }
}

// ============================================
// 🖼️ RENDER STILL (multi-frame)
// ============================================
function renderMultipleStills(item) {
  let totalSize = 0;
  let successCount = 0;

  console.log(`   🖼️  Frames: [${RENDER_SETTINGS.stillFrames.join(", ")}]`);

  for (const frame of RENDER_SETTINGS.stillFrames) {
    const stillPath = getStillPath(item.id, frame);
    console.log(`      🎯 Frame ${frame} → ${stillPath}`);

    // Skip nếu đã tồn tại
    if (!RENDER_SETTINGS.overwriteExisting && fs.existsSync(stillPath)) {
      console.log(`      ⏭️  Already exists, skipping...`);
      totalSize += fs.statSync(stillPath).size / (1024 * 1024);
      successCount++;
      continue;
    }

    try {
      // ✅ TẤT CẢ FLAGS đứng TRƯỚC <compositionId> <output>
      // Đây là thứ tự bắt buộc — nếu --frame đặt sau compositionId sẽ bị ignore → render frame 0
      const qualityFlag =
        RENDER_SETTINGS.stillFormat === "jpeg"
          ? `--quality=${RENDER_SETTINGS.stillQuality} `
          : "";

      const cmd =
        `npx remotion still ` +
        `--serve-url=out ` +
        `--frame=${frame} ` +
        `--width=${VIDEO_CONFIG.width} ` +
        `--height=${VIDEO_CONFIG.height} ` +
        qualityFlag +
        `${item.id} "${stillPath}"`;

      if (RENDER_SETTINGS.showDetailedProgress) {
        console.log(`      📝 CMD: ${cmd}`);
      }

      execSync(cmd, {
        stdio: RENDER_SETTINGS.showDetailedProgress ? "inherit" : "pipe",
        maxBuffer: 50 * 1024 * 1024,
      });

      if (fs.existsSync(stillPath)) {
        const sizeMB = (fs.statSync(stillPath).size / (1024 * 1024)).toFixed(2);
        totalSize += parseFloat(sizeMB);
        successCount++;
        console.log(`      ✅ Frame ${frame}: ${sizeMB}MB`);
      } else {
        console.log(`      ❌ Frame ${frame}: File không được tạo`);
      }
    } catch (error) {
      console.log(`      ❌ Frame ${frame}: ${error.message}`);
    }
  }

  console.log(
    `   📊 ${successCount}/${RENDER_SETTINGS.stillFrames.length} frames OK`,
  );

  return {
    success: successCount > 0,
    size: totalSize.toFixed(2),
    frameCount: successCount,
    totalFrames: RENDER_SETTINGS.stillFrames.length,
  };
}

// ============================================
// 🎬 RENDER ITEM
// ============================================
function renderItem(item, index) {
  console.log(`🎬 [${index + 1}/${videoData.length}] ID: ${item.id}`);
  const t0 = Date.now();

  try {
    const result = renderMultipleStills(item);
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);

    if (result.success) {
      console.log(
        `✅ Done: ${item.id} (${elapsed}s) — ${result.size}MB` +
          ` (${result.frameCount}/${result.totalFrames} frames)\n`,
      );
      return true;
    } else {
      console.log(`❌ Failed: ${item.id}\n`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error: ${item.id} — ${error.message}`);
    return false;
  }
}

// ============================================
// 🚀 MAIN
// ============================================
function runRenderProcess() {
  createDirectories();

  console.log("=".repeat(60));
  console.log("🚀 REMOTION BATCH STILL RENDER");
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
      `🖼️  Stills  : ${(totalBytes / 1024 / 1024).toFixed(1)}MB (${files.length} files)`,
    );
  }

  console.log(`\n🎉 Done!`);
}

// ✅ Start
loadDataAndRender();
