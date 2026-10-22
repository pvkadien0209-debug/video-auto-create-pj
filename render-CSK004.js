// render-CSK004.js — Render video bài học DetPro (CSK004) → mp4, có theo dõi từng bước để dễ thấy lỗi.
//
//   npx tsx render-CSK004.js --only=a-day-within-a-day--w01 --scale=0.5     (PowerShell: gọi thẳng, khỏi lo dấu --)
//   npm run renderw -- --only=ten-bai--w01                                   (cmd)
//
// Tham số:
//   --only=a--w01,b--w01   chỉ các video này (tên tệp trong data/scripts, bỏ .js)
//   --scale=0.5 | 2/3      0.5 = 960x540 xem nhanh · 2/3 = 1280x720 bản web · mặc định 1 = 1920x1080
//   --frames=0-299         chỉ dựng đoạn khung này (thử nhanh 10 s đầu)
//   --concurrency=auto     số tab dựng song song (mặc định auto: ≤ 4, theo CPU và RAM trống; máy yếu dùng 1)
//   --gl=angle             GPU qua Chrome ANGLE (mặc định, #150) · swangle = chỉ CPU nếu GPU lỗi
//   --skip-done            bỏ qua video đã có mp4 (chạy lại sau khi dừng giữa chừng)
//   --only-file=ds.txt     danh sách video trong tệp (4-render-tat-ca.bat tự tạo)
//   --gallery              thêm GalleryReel
//
// Theo dõi:
//   • Đầu lệnh: kiểm máy (RAM, CPU, ổ đĩa, Node) và kiểm đầu vào (hình illus, phông, mp3 của từng bài).
//   • Mỗi video: thanh tiến độ có số khung, tốc độ, thời gian còn lại, bước đang làm; cảnh báo khi đứng hình > 45 s.
//   • Lỗi trong trang dựng (hình 404, mp3 thiếu, tab sập) in ngay.
//   • Cuối lệnh: bảng tổng kết + lệnh render lại video lỗi; nhật ký đầy đủ ở renders/dp/_log/render-<ngày-giờ>.log
//
// ⭐ Bundle src/index.js (qua src/RemotionRoot.js). RemotionRoot.js phải đang trỏ CSK004.
import path from "path";
import fs from "fs";
import os from "os";
import { fileURLToPath } from "url";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENTRY = path.join(__dirname, "src", "index.js");
const ROOT_FILE = path.join(__dirname, "src", "RemotionRoot.js");
const PUBLIC = path.join(__dirname, "public");
const REQUIRED_ROOT = "CSK004";
const OUT_DIR = path.join(__dirname, "renders", "dp");
const LOG_DIR = path.join(OUT_DIR, "_log");

// ---------- tham số ----------
const arg = (name) => {
  const a = process.argv.find((x) => x.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : null;
};
const flag = (name) => process.argv.includes(`--${name}`);
// #154: --only-file=<tệp> danh sách video (mỗi dòng / dấu phẩy một mã) — dùng khi danh sách dài quá giới hạn dòng lệnh của cmd
const ONLY_RAW = arg("only-file") ? fs.readFileSync(arg("only-file"), "utf8") : arg("only");
const ONLY = ONLY_RAW == null ? null : ONLY_RAW.split(/[\s,]+/).map((s) => s.trim()).filter(Boolean);
if (ONLY && !ONLY.length) { console.error("Danh sách video trống."); process.exit(1); }
const SCALE = String(arg("scale") ?? 1).split("/").map(Number).reduce((a, b) => a / b);
// #150: mặc định dùng GPU (Chrome ANGLE, như render-all_video_tiktok.js) + nhiều tab song song theo CPU/RAM.
//   --gl=angle (mặc định, GPU) | swangle (CPU, an toàn) | egl | off (để Chrome tự chọn)
//   --concurrency=auto (mặc định) | số tab
const GL = (arg("gl") ?? "angle").toLowerCase();
const autoTabs = () => {
  const s = String(arg("scale") ?? 1).split("/").map(Number).reduce((a, b) => a / b);
  const perTab = s >= 1 ? 1.5 : s >= 0.6 ? 1 : 0.7; // GB ước lượng mỗi tab
  return Math.max(1, Math.min(4, Math.floor(os.cpus().length / 2), Math.floor((os.freemem() / 1024 ** 3 - 1) / perTab)));
};
const CONCURRENCY = !arg("concurrency") || arg("concurrency") === "auto" ? autoTabs() : Number(arg("concurrency"));
const FRAMES = arg("frames")?.split("-").map(Number); // [from, to]
const SKIP_DONE = flag("skip-done");
const GALLERY = flag("gallery");

// ---------- nhật ký: in ra màn hình + ghi tệp ----------
fs.mkdirSync(LOG_DIR, { recursive: true });
const stamp = new Date().toISOString().replace(/[:T]/g, "-").slice(0, 19);
const LOG_FILE = path.join(LOG_DIR, `render-${stamp}.log`);
const T0 = Date.now();
const since = () => `${((Date.now() - T0) / 1000).toFixed(0).padStart(4)}s`;
const write = (s) => fs.appendFileSync(LOG_FILE, s.replace(/\x1b\[[0-9;]*m/g, "") + "\n");
const log = (s = "") => { console.log(s); write(`[${since()}] ${s}`); };
const warn = (s) => { console.log(`\x1b[33m${s}\x1b[0m`); write(`[${since()}] ⚠ ${s}`); };
const fail = (s) => { console.log(`\x1b[31m${s}\x1b[0m`); write(`[${since()}] ✖ ${s}`); };
const gb = (b) => (b / 1024 ** 3).toFixed(1) + " GB";
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;

// ---------- kiểm máy ----------
const checkMachine = async () => {
  const total = os.totalmem(), free = os.freemem();
  log(`🖥  Máy: ${os.cpus().length} luồng CPU (${os.cpus()[0]?.model?.trim() || "?"}) · RAM ${gb(total)}, trống ${gb(free)} · Node ${process.version} · ${os.platform()}`);
  try {
    const st = await fs.promises.statfs(__dirname);
    const freeDisk = st.bavail * st.bsize;
    log(`💾 Ổ đĩa chứa my-sta-video trống ${gb(freeDisk)}`);
    if (freeDisk < 5 * 1024 ** 3) warn("   Ổ đĩa còn dưới 5 GB — render dài có thể hỏng giữa chừng.");
  } catch { /* Node cũ không có statfs */ }
  if (free < 2 * 1024 ** 3) warn("   RAM trống dưới 2 GB — nên đóng bớt Chrome/VS Code, dùng --scale=0.5 và --concurrency=1.");
  const perTab = SCALE >= 1 ? 1.5 : SCALE >= 0.6 ? 1 : 0.7; // GB ước lượng mỗi tab
  if (CONCURRENCY * perTab > free / 1024 ** 3) warn(`   ${CONCURRENCY} tab ở scale ${SCALE.toFixed(2)} cần khoảng ${(CONCURRENCY * perTab).toFixed(1)} GB RAM trống.`);
};

// ---------- kiểm đầu vào ----------
const checkInputs = (ids) => {
  let ok = true;
  const illus = path.join(PUBLIC, "illus");
  const nIllus = fs.existsSync(illus) ? fs.readdirSync(illus).filter((f) => f.endsWith(".svg")).length : 0;
  if (nIllus < 100) { fail(`❌ Thiếu hình: public/illus có ${nIllus} hình — chạy 0-lay-hinh-illus.bat.`); ok = false; }
  else log(`🖼  Hình minh hoạ: ${nIllus} tệp SVG`);
  const fontDir = path.join(PUBLIC, "fonts", "Be_Vietnam_Pro");
  const need = ["Regular", "SemiBold", "Bold", "ExtraBold"].filter((n) => !fs.existsSync(path.join(fontDir, `BeVietnamPro-${n}.ttf`)));
  if (need.length) { fail(`❌ Thiếu phông Be Vietnam Pro: ${need.join(", ")} (public/fonts/Be_Vietnam_Pro)`); ok = false; }
  else log("🔤 Phông Be Vietnam Pro: đủ 4 độ đậm");
  // #149: hai kho giọng (#138) — Kokoro public/audio/kokoro (ưu tiên), Google public/audio/dp
  const kho = { Kokoro: path.join(PUBLIC, "audio", "kokoro"), Google: path.join(PUBLIC, "audio", "dp") };
  const nMp3 = (root, id) => { const d = path.join(root, id.replace(/--w\d+$/, "")); return fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith(".mp3")).length : 0; };
  log(`🔊 Âm thanh: ${Object.entries(kho).map(([k, d]) => `${k} ${fs.existsSync(path.join(d, "durations.dat")) ? "có" : "chưa có"} durations.dat`).join(" · ")}`);
  if (ids.length <= 10) for (const id of ids) {
    const k = nMp3(kho.Kokoro, id), g = nMp3(kho.Google, id);
    log(`   • ${id}: Kokoro ${k} mp3 · Google ${g} mp3${k || g ? ` → dùng giọng ${k >= g ? "Kokoro" : "Google"} (đủ câu thì ưu tiên Kokoro)` : " — chưa có giọng: chạy 3-tao-giong-kokoro.bat <bài>"}`);
  }
  return ok;
};

const bar = (p) => { const n = Math.round(p * 20); return "█".repeat(n) + "░".repeat(20 - n); };

const main = async () => {
  log(`🎬 render-CSK004 · scale ${SCALE.toFixed(2)} · ${CONCURRENCY} tab · GPU ${GL === "off" ? "Chrome tự chọn" : GL}${FRAMES ? ` · khung ${FRAMES.join("–")}` : ""}${SKIP_DONE ? " · bỏ qua video đã có" : ""}`);
  log(`📝 Nhật ký: ${path.relative(__dirname, LOG_FILE)}`);
  await checkMachine();

  const active = fs.readFileSync(ROOT_FILE, "utf8").split(/\r?\n/)
    .filter((l) => /^\s*import\s.*rootComponents\//.test(l))
    .map((l) => l.match(/rootComponents\/([^/]+)\//)?.[1]);
  if (active.length !== 1 || active[0] !== REQUIRED_ROOT) {
    fail(`❌ src/RemotionRoot.js đang trỏ: ${active.join(", ") || "(không có)"} — cần trỏ ${REQUIRED_ROOT}. Sửa dòng import rồi chạy lại.`);
    process.exit(1);
  }

  // [A] đóng gói
  const tb = Date.now();
  log("\n📦 [A] Đóng gói code + thư mục public (1–3 phút)…");
  let lastPct = -1;
  const serveUrl = await bundle({
    entryPoint: ENTRY, publicDir: PUBLIC, enableCaching: false,
    onProgress: (p) => { if (p !== lastPct) { lastPct = p; process.stdout.write(`\r   đóng gói ${p}%   `); } },
  });
  log(`\n   ✔ xong sau ${((Date.now() - tb) / 1000).toFixed(0)} s`);

  // [B] danh sách video
  const allComps = await getCompositions(serveUrl);
  const isW = (c) => !c.id.startsWith("G-") && !c.id.startsWith("LAB-") && c.id !== "GalleryReel";
  let comps = allComps.filter((c) => (ONLY ? ONLY.includes(c.id) : isW(c) || (GALLERY && c.id === "GalleryReel")));
  if (ONLY) {
    const miss = ONLY.filter((id) => !comps.some((c) => c.id === id));
    if (miss.length) {
      fail(`❌ Không có video tên: ${miss.join(", ")}`);
      const hint = allComps.filter(isW).filter((c) => miss.some((m) => c.id.startsWith(m.slice(0, 10)))).slice(0, 5).map((c) => c.id);
      if (hint.length) log(`   Gần giống: ${hint.join(", ")}`);
    }
  }
  if (SKIP_DONE) {
    const before = comps.length;
    comps = comps.filter((c) => !fs.existsSync(path.join(OUT_DIR, `${c.id}.mp4`)));
    if (before !== comps.length) log(`⏭  Bỏ qua ${before - comps.length} video đã có mp4`);
  }
  log(`\n📋 [B] ${comps.length} video sẽ render → ${path.relative(__dirname, OUT_DIR)}`);
  if (!comps.length) return;
  if (!checkInputs(comps.map((c) => c.id))) { fail("Dừng vì thiếu đầu vào (xem dòng ❌ ở trên)."); process.exit(1); }

  // [C] render từng video
  const results = [];
  for (const [k, comp] of comps.entries()) {
    const output = path.join(OUT_DIR, `${comp.id}.mp4`);
    const range = FRAMES ? [FRAMES[0], Math.min(FRAMES[1], comp.durationInFrames - 1)] : null;
    const nFrames = range ? range[1] - range[0] + 1 : comp.durationInFrames;
    log(`\n🎞  [C ${k + 1}/${comps.length}] ${comp.id} · dài ${mmss(comp.durationInFrames / comp.fps)} · dựng ${nFrames} khung`);
    const t1 = Date.now();
    let stage = "mở trình duyệt";
    let lastLine = 0, lastFrame = 0, lastFrameAt = Date.now();
    const pageMsgs = [];
    const watchdog = setInterval(() => {
      const idle = (Date.now() - lastFrameAt) / 1000;
      if (idle > 45) warn(`\n   ⏳ ${Math.round(idle)} s chưa có khung mới (bước: ${stage}, khung ${lastFrame}) · RAM trống ${gb(os.freemem())}`);
    }, 45000);
    try {
      await renderMedia({
        composition: comp, serveUrl, codec: "h264", outputLocation: output,
        inputProps: comp.props, scale: SCALE, overwrite: true, concurrency: CONCURRENCY,
        chromiumOptions: GL === "off" ? {} : { gl: GL },
        frameRange: range ?? undefined,
        timeoutInMilliseconds: 120000,
        onStart: () => { stage = "dựng khung"; write(`[${since()}]    bắt đầu dựng`); },
        onBrowserLog: (l) => {
          if (l.type === "error" || l.type === "warning") {
            const t = String(l.text).slice(0, 240);
            pageMsgs.push(t);
            if (pageMsgs.length <= 15) warn(`\n   [trang ${l.type}] ${t}`);
            else write(`   [trang ${l.type}] ${t}`);
          }
        },
        onProgress: ({ progress, renderedFrames, encodedFrames, stitchStage }) => {
          if (renderedFrames !== lastFrame) { lastFrame = renderedFrames; lastFrameAt = Date.now(); }
          stage = stitchStage === "muxing" ? "ghép âm thanh" : renderedFrames >= nFrames ? "nén video" : "dựng khung";
          const el = (Date.now() - t1) / 1000;
          const fps = renderedFrames / Math.max(el, 1);
          const eta = fps > 0 ? (nFrames - renderedFrames) / fps : 0;
          process.stdout.write(`\r   ${bar(progress)} ${String(Math.round(progress * 100)).padStart(3)}% · khung ${renderedFrames}/${nFrames} · nén ${encodedFrames} · ${fps.toFixed(1)} khung/s · còn ~${mmss(eta)} · ${stage}   `);
          if (Date.now() - lastLine > 30000) {
            lastLine = Date.now();
            write(`[${since()}]    ${Math.round(progress * 100)}% khung ${renderedFrames}/${nFrames} · ${fps.toFixed(1)} khung/s · RAM trống ${gb(os.freemem())}`);
          }
        },
      });
      const sec = (Date.now() - t1) / 1000;
      const mb = fs.statSync(output).size / 1024 ** 2;
      log(`\n   ✅ xong sau ${mmss(sec)} · ${mb.toFixed(1)} MB${pageMsgs.length ? ` · ${pageMsgs.length} cảnh báo trong trang (xem nhật ký)` : ""}`);
      results.push({ id: comp.id, ok: true, sec, note: pageMsgs.length ? `${pageMsgs.length} cảnh báo` : "" });
    } catch (e) {
      const msg = String(e.message || e).split("\n")[0];
      fail(`\n   ❌ LỖI ở bước "${stage}", khung ${lastFrame}/${nFrames}: ${msg}`);
      if (/delayRender/.test(msg)) log("      → Trang dựng chờ một tài nguyên quá lâu (hình/phông/mp3). Xem các dòng [trang …] ở trên; máy yếu thì thêm --scale=0.5.");
      if (/Target closed|crash|Page crashed|Protocol error/i.test(msg)) log(`      → Tab trình duyệt bị sập, thường do thiếu RAM (trống ${gb(os.freemem())}). Thử --scale=0.5, đóng bớt chương trình.`);
      if (/ENOSPC/.test(msg)) log("      → Ổ đĩa đầy.");
      if (GL !== "swangle" && /gl|GPU|WebGL|ANGLE|context/i.test(msg)) log("      → Có thể do GPU. Chạy lại với --gl=swangle (dùng CPU) hoặc --concurrency=1.");
      write(String(e.stack || e));
      results.push({ id: comp.id, ok: false, sec: (Date.now() - t1) / 1000, note: `${stage} @ khung ${lastFrame}: ${msg.slice(0, 80)}` });
    } finally {
      clearInterval(watchdog);
    }
  }

  // [D] tổng kết
  const ok = results.filter((r) => r.ok).length;
  log(`\n📊 [D] Tổng kết: ${ok}/${results.length} video · ${mmss((Date.now() - T0) / 1000)}`);
  for (const r of results) log(`   ${r.ok ? "✅" : "❌"} ${r.id.padEnd(48)} ${mmss(r.sec).padStart(6)}  ${r.note}`);
  const bad = results.filter((r) => !r.ok).map((r) => r.id);
  if (bad.length) log(`\n   Render lại các video lỗi:\n   npx tsx render-CSK004.js --only=${bad.join(",")} --scale=${arg("scale") ?? 1}`);
  log(`📝 Nhật ký đầy đủ: ${LOG_FILE}`);
};

main().catch((e) => {
  fail(`❌ Dừng: ${e.message}`);
  write(String(e.stack || e));
  process.exit(1);
});
