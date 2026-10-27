// kiem-drive.mjs — #178 So video / ảnh bìa đã render với thư mục Drive DetProMedia (cả thư mục con video\, img\ …, bỏ audio\):
//   tệp CHƯA có trên Drive → đưa vào  renders\dp-toPush[YYYY-MM-DD - HHhMM]\video\  và  …\img\  để kéo cả thư mục lên Drive.
//   #192: đưa vào bằng LIÊN KẾT CỨNG (hard link) — tệp hiện đủ trong dp-toPush nhưng KHÔNG tốn thêm dung lượng ổ
//         (cùng một tệp với renders\dp; xoá dp-toPush không mất video gốc). Không tạo được liên kết (khác ổ…) thì mới chép,
//         và kiểm dung lượng trống trước; ổ đầy thì báo rõ, không dừng im lặng. DANH-SACH.txt ghi TRƯỚC khi đưa tệp.
//   tệp ĐÃ có nhưng bản trên máy MỚI HƠN (render lại) → chép vào  …\thay-the\  (thay bằng "Quản lý phiên bản" trên Drive, giữ tên).
//
//   node tools\drive\kiem-drive.mjs              (8-kiem-drive-toPush-folder.bat gọi)
//   node tools\drive\kiem-drive.mjs --chi-xem    chỉ báo cáo, không chép
//   node tools\drive\kiem-drive.mjs --loc-drive=renders\dp\_ds-render.txt --ra=renders\dp\_ds-render-drive.txt
//        (#180) lọc danh sách render: bỏ video đã có trên Drive — 4b-render-chua-len-drive.bat gọi
//   node tools\drive\kiem-drive.mjs --don-kokoro [--xoa]
//        (#195) giọng Kokoro public\audio\kokoro\<bài>\ của bài ĐÃ CÓ <bài>--w01.mp4 trên Drive → báo; --xoa thì xoá,
//        ghi tên bài vào kokoro\_da-don.txt (3-tao-giong-kokoro.bat all bỏ qua các bài này) — 7-don-giong-kokoro-video-da-len-drive.bat gọi
//
// Khoá đọc Drive (chỉ đọc danh sách tệp công khai) lấy theo thứ tự — KHÔNG in ra màn hình, KHÔNG đưa vào git:
//   1) biến môi trường DETPRO_DRIVE_KEY
//   2) tệp tools\drive\drive-key.txt (một dòng khoá; đã chặn trong .gitignore) — dùng cho máy 02
//   3) client\src\components\HocKienThuc\config.js của SEO-PT-projectjs (máy 01)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VID = path.resolve(HERE, "..", "..");
const DP = path.join(VID, "renders", "dp");
const CONFIG_JS = "C:\\Dienpham\\App\\SEO-PT-projectjs\\client\\src\\components\\HocKienThuc\\config.js";
const DEFAULT_FOLDER = "1fC5sc5PhkKZka66tfjZL98sCzdyN_vLA"; // DetProMedia (chia sẻ công khai)
const REFERER = "https://detpro.vercel.app/"; // khoá giới hạn theo trang web → gửi kèm địa chỉ trang
const ONLY_VIEW = process.argv.includes("--chi-xem");
const ONLY_KEY = process.argv.includes("--lay-khoa");
// #180: --loc-drive=<danh sách vào> --ra=<danh sách ra> — bỏ các video ĐÃ CÓ trên Drive (4b-render-chua-len-drive.bat)
const argv = (n) => (process.argv.find((x) => x.startsWith(`--${n}=`)) || "").slice(n.length + 3) || null;
const FILTER_IN = argv("loc-drive");
const FILTER_OUT = argv("ra"); // #179: chỉ chép khoá về drive-key.txt rồi dừng
const SKIP_DIR = /^(audio|am[ -]?thanh|âm thanh)$/i;
// #195: dọn giọng Kokoro của bài đã có video trên Drive
const DON_KOKORO = process.argv.includes("--don-kokoro");
const XOA = process.argv.includes("--xoa");
const KOKORO = path.join(VID, "public", "audio", "kokoro");

function readKey() {
  if (process.env.DETPRO_DRIVE_KEY) return { key: process.env.DETPRO_DRIVE_KEY.trim(), from: "biến môi trường DETPRO_DRIVE_KEY" };
  const f = path.join(HERE, "drive-key.txt");
  if (fs.existsSync(f)) return { key: fs.readFileSync(f, "utf8").trim(), from: "tools\\drive\\drive-key.txt" };
  if (fs.existsSync(CONFIG_JS)) {
    const t = fs.readFileSync(CONFIG_JS, "utf8");
    const key = (t.match(/apiKey:\s*["']([^"']+)["']/) || [])[1];
    const folder = (t.match(/folderId:\s*["']([^"']+)["']/) || [])[1];
    if (key) {
      // #179: chép khoá về trong Remotion (tools\drive\drive-key.txt, đã chặn git) — máy chỉ có my-sta-video vẫn dùng được
      try {
        fs.writeFileSync(f, key + "\n", "utf8");
        console.log("💾 Đã chép khoá đọc Drive về tools\\drive\\drive-key.txt (không đưa vào git).");
      } catch {
        /* bỏ qua */
      }
      return { key, folder, from: "config.js của SEO-PT-projectjs" };
    }
  }
  return null;
}

async function listDrive(folderId, key) {
  const files = {}; // tên → { id, t: ngày sửa (ms), folder }
  const listIn = async (parent, label, depth) => {
    let token = null;
    const subs = [];
    do {
      const q = encodeURIComponent(`'${parent}' in parents and trashed = false`);
      const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=nextPageToken,files(id,name,mimeType,modifiedTime)&pageSize=1000&key=${key}${token ? `&pageToken=${token}` : ""}`;
      const r = await fetch(url, { headers: { Referer: REFERER } });
      if (!r.ok) {
        const body = await r.text().catch(() => "");
        throw new Error(`Drive trả lỗi ${r.status} khi đọc thư mục "${label}". ${/referer/i.test(body) ? "Khoá đang giới hạn trang web — thêm https://detpro.vercel.app/* vào danh sách cho phép." : r.status === 403 ? "Khoá chưa bật Google Drive API hoặc bị giới hạn." : ""}`);
      }
      const d = await r.json();
      for (const f of d.files || []) {
        if (f.mimeType === "application/vnd.google-apps.folder") {
          if (!SKIP_DIR.test(f.name)) subs.push(f);
        } else {
          const t = Date.parse(f.modifiedTime) || 0;
          if (!files[f.name] || files[f.name].t < t) files[f.name] = { id: f.id, t, folder: label };
        }
      }
      token = d.nextPageToken;
    } while (token);
    if (depth < 2) for (const s of subs) await listIn(s.id, `${label}/${s.name}`, depth + 1);
  };
  await listIn(folderId, "DetProMedia", 0);
  return files;
}

const stamp = () => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} - ${p(d.getHours())}h${p(d.getMinutes())}`;
};
const mb = (b) => `${(b / 1024 ** 2).toFixed(1)} MB`;

/** Dung lượng trống của ổ chứa thư mục p (byte); Node cũ không đo được thì null. */
function freeBytes(p) {
  try {
    const st = fs.statfsSync(p);
    return st.bavail * st.bsize;
  } catch {
    return null;
  }
}

/** Tổng dung lượng một thư mục (byte). */
function dirSize(d) {
  let n = 0;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    n += e.isDirectory() ? dirSize(p) : fs.statSync(p).size;
  }
  return n;
}

/** #195: giọng Kokoro của bài đã có video <bài>--w01.mp4 trên Drive → báo (mã thoát 0 = có bài để xoá, 2 = không có); --xoa thì xoá. */
function donKokoro(drive) {
  if (!fs.existsSync(KOKORO)) {
    console.log("Không có thư mục public\\audio\\kokoro.");
    process.exit(2);
  }
  const dirs = fs.readdirSync(KOKORO, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).sort();
  const done = dirs.filter((s) => drive[`${s}--w01.mp4`]).map((s) => ({ s, size: dirSize(path.join(KOKORO, s)) }));
  const wait = dirs.filter((s) => !drive[`${s}--w01.mp4`]);
  // chưa lên Drive: đã render (có renders\dp\<bài>--w01.mp4, chờ tải lên) hay chưa render (4b sẽ render) — cả hai đều GIỮ giọng
  const rendered = wait.filter((s) => {
    try {
      return fs.statSync(path.join(DP, `${s}--w01.mp4`)).size > 0;
    } catch {
      return false;
    }
  });
  const notRendered = wait.filter((s) => !rendered.includes(s));
  const total = done.reduce((a, x) => a + x.size, 0);
  console.log(`\n🎙 Giọng Kokoro trên máy: ${dirs.length} bài`);
  console.log(`   ✅ Video đã lên Drive → giọng dùng xong, xoá được: ${done.length} bài (${mb(total)})`);
  console.log(`   📦 Đã render, CHƯA lên Drive → GIỮ giọng (tải lên bằng 8-kiem-drive-toPush-folder.bat): ${rendered.length} bài`);
  console.log(`   🎬 CHƯA render → GIỮ giọng (render bằng 4b-render-chua-len-drive.bat): ${notRendered.length} bài`);
  done.slice(0, 40).forEach((x) => console.log(`   🗑  ${x.s}  (${mb(x.size)})`));
  if (done.length > 40) console.log(`   … và ${done.length - 40} bài nữa`);
  if (!done.length) process.exit(2);
  if (!XOA) {
    console.log("\n(Chỉ xem — chưa xoá gì.)");
    return;
  }
  const log = path.join(KOKORO, "_da-don.txt");
  const day = new Date().toISOString().slice(0, 10);
  let ok = 0;
  let freed = 0;
  const failed = [];
  for (const x of done) {
    try {
      fs.rmSync(path.join(KOKORO, x.s), { recursive: true, force: true });
      fs.appendFileSync(log, `${x.s}\t${day}\r\n`, "utf8");
      ok++;
      freed += x.size;
    } catch (e) {
      failed.push(`${x.s}: ${e.code || e.message}`);
    }
  }
  console.log(`\n✅ Đã xoá giọng ${ok}/${done.length} bài, giải phóng ${mb(freed)}.`);
  console.log("   Tên bài ghi vào public\\audio\\kokoro\\_da-don.txt — 3-tao-giong-kokoro.bat all sẽ bỏ qua các bài này.");
  console.log("   Cần render lại một bài: 3-tao-giong-kokoro.bat <bài> (tạo lại giọng) rồi render.");
  if (failed.length) {
    console.error(`⚠ ${failed.length} bài không xoá được (tệp đang mở?):`);
    failed.forEach((f) => console.error(`   ${f}`));
    process.exit(4);
  }
}

async function main() {
  let k = readKey();
  if (!k) {
    // #178b: máy 02 (không có SEO-PT-projectjs) — hỏi khoá một lần, lưu vào tools\drive\drive-key.txt (đã chặn git)
    console.log("🔑 Máy này chưa có khoá đọc Drive (máy 02 không có SEO-PT-projectjs).");
    console.log("   Lấy khoá ở máy 01: mở SEO-PT-projectjs\\client\\src\\components\\HocKienThuc\\config.js, chép giá trị apiKey (trong DRIVE_VIDEO).");
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const key = (await new Promise((ok) => rl.question("   Dán khoá vào đây rồi Enter: ", ok))).trim().replace(/^["']|["']$/g, "");
    rl.close();
    if (!key) {
      console.error("❌ Chưa nhập khoá.");
      process.exit(1);
    }
    fs.writeFileSync(path.join(HERE, "drive-key.txt"), key + "\n", "utf8");
    console.log("   Đã lưu vào tools\\drive\\drive-key.txt (không đưa vào git) — lần sau không hỏi nữa.");
    k = { key, from: "tools\\drive\\drive-key.txt" };
  }
  if (ONLY_KEY) {
    console.log(fs.existsSync(path.join(HERE, "drive-key.txt")) ? "✅ Đã có tools\\drive\\drive-key.txt." : "⚠ Chưa lưu được drive-key.txt.");
    return;
  }
  const folder = k.folder || DEFAULT_FOLDER;
  console.log(`🔑 Khoá lấy từ ${k.from}`);
  console.log("☁  Đọc danh sách tệp trên Drive DetProMedia (cả thư mục con, bỏ audio)…");
  const drive = await listDrive(folder, k.key);
  const nDrive = Object.keys(drive).length;
  console.log(`   Drive có ${nDrive} tệp.`);

  if (FILTER_IN) {
    const ids = fs.readFileSync(FILTER_IN, "utf8").split(/[\s,]+/).map((s) => s.trim()).filter(Boolean);
    // #195: "chưa render" = CHƯA có trên Drive VÀ CHƯA có trong renders\dp (đã render, chờ tải lên → không render lại)
    const onDrive = ids.filter((id) => drive[`${id}.mp4`]);
    const inDp = ids.filter((id) => {
      if (drive[`${id}.mp4`]) return false;
      try {
        return fs.statSync(path.join(DP, `${id}.mp4`)).size > 0;
      } catch {
        return false;
      }
    });
    const todo = ids.filter((id) => !onDrive.includes(id) && !inDp.includes(id));
    const out = FILTER_OUT || FILTER_IN.replace(/\.txt$/i, "-chua-len-drive.txt");
    fs.writeFileSync(out, todo.join("\n") + (todo.length ? "\n" : ""), "utf8");
    console.log(`📋 Trong ${ids.length} bài đủ giọng: ${onDrive.length} đã có trên Drive · ${inDp.length} đã có trong renders\\dp (chờ tải lên) → bỏ qua · ${todo.length} cần render → ${path.relative(VID, out)}`);
    process.exit(todo.length ? 0 : 2);
  }

  if (DON_KOKORO) return donKokoro(drive);

  // Tệp trên máy: video renders\dp\*.mp4 ; ảnh bìa renders\dp\img\*.jpg
  const local = [];
  const add = (dir, ext, kind) => {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir)) if (f.toLowerCase().endsWith(ext)) {
      const st = fs.statSync(path.join(dir, f));
      if (st.isFile() && st.size > 0) local.push({ name: f, full: path.join(dir, f), kind, size: st.size, t: st.mtimeMs });
    }
  };
  add(DP, ".mp4", "video");
  add(path.join(DP, "img"), ".jpg", "img");

  const missing = local.filter((x) => !drive[x.name]);
  const newer = local.filter((x) => drive[x.name] && x.t > drive[x.name].t + 60_000); // bản trên máy mới hơn > 1 phút
  const same = local.length - missing.length - newer.length;
  console.log(`💻 Trên máy: ${local.filter((x) => x.kind === "video").length} video, ${local.filter((x) => x.kind === "img").length} ảnh bìa.`);
  // #192: báo dung lượng trống — ổ gần đầy thì Windows có thể tự dọn thư mục Temp, làm hỏng render Remotion đang chạy
  const free0 = freeBytes(VID);
  if (free0 != null) console.log(`💽 Ổ còn trống: ${mb(free0)}${free0 < 5 * 1024 ** 3 ? "  ⚠ dưới 5 GB — nên dọn ổ trước khi render tiếp" : ""}`);
  console.log(`   ✅ Đã có trên Drive: ${same}   ⬆ Chưa có: ${missing.length}   ♻ Bản trên máy mới hơn: ${newer.length}`);

  if (!missing.length && !newer.length) {
    console.log("\nKhông có gì cần tải lên. 👍");
    return;
  }
  const show = (arr, title) => {
    if (!arr.length) return;
    console.log(`\n${title}`);
    arr.slice(0, 40).forEach((x) => console.log(`   ${x.kind === "video" ? "🎬" : "🖼 "} ${x.name}  (${mb(x.size)})`));
    if (arr.length > 40) console.log(`   … và ${arr.length - 40} tệp nữa`);
  };
  show(missing, "⬆ Chưa có trên Drive:");
  show(newer, "♻ Đã có trên Drive nhưng bản trên máy mới hơn (render lại):");
  if (ONLY_VIEW) return;

  const out = path.join(VID, "renders", `dp-toPush[${stamp()}]`);
  fs.mkdirSync(out, { recursive: true });
  // #192: ghi danh sách TRƯỚC — lỡ dừng giữa chừng vẫn biết cần tải những tệp nào
  const list = [
    `Tạo lúc ${new Date().toLocaleString("vi-VN")} — so với Drive DetProMedia (${nDrive} tệp).`,
    "Tệp trong thư mục này là LIÊN KẾT CỨNG tới renders\\dp (không tốn thêm dung lượng). Xoá thư mục này KHÔNG mất video gốc.",
    "",
    "CHƯA CÓ TRÊN DRIVE — kéo thư mục video\\ vào DetProMedia\\video, img\\ vào DetProMedia\\img (giữ nguyên tên):",
    ...missing.map((x) => `  ${x.kind}\\${x.name}`),
    "",
    "THAY THẾ — trên Drive bấm chuột phải tệp cùng tên → Quản lý phiên bản → Tải lên phiên bản mới (đừng tải thành tệp mới, Drive sẽ thêm \" (1)\" vào tên):",
    ...newer.map((x) => `  thay-the\\${x.kind}\\${x.name}  (Drive: ${drive[x.name].folder})`),
  ].join("\r\n");
  fs.writeFileSync(path.join(out, "DANH-SACH.txt"), list, "utf8");

  const jobs = [...missing.map((x) => [x, x.kind]), ...newer.map((x) => [x, path.join("thay-the", x.kind)])];
  let linked = 0;
  let copied = 0;
  let bytes = 0;
  const failed = [];
  for (const [i, [x, sub]] of jobs.entries()) {
    const dir = path.join(out, sub);
    const dest = path.join(dir, x.name);
    process.stdout.write(`\r   ${i + 1}/${jobs.length} ${x.name.slice(0, 60).padEnd(60)}`);
    try {
      fs.mkdirSync(dir, { recursive: true });
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      try {
        fs.linkSync(x.full, dest); // liên kết cứng: tức thì, 0 byte thêm
        linked++;
        continue;
      } catch (e) {
        if (e.code === "ENOSPC") throw e;
      }
      // không tạo được liên kết (khác ổ, ổ không phải NTFS…) → chép, nhưng kiểm chỗ trống trước
      const free = freeBytes(out);
      if (free != null && free < x.size + 500 * 1024 ** 2) {
        const e = new Error("ổ đầy");
        e.code = "ENOSPC";
        e.need = x.size;
        e.free = free;
        throw e;
      }
      fs.copyFileSync(x.full, dest);
      copied++;
      bytes += x.size;
    } catch (e) {
      try {
        if (fs.existsSync(dest)) fs.unlinkSync(dest); // bỏ tệp chép dở
      } catch {}
      if (e.code === "ENOSPC") {
        console.log("");
        console.error(`\n❌ Ổ ĐĨA ĐẦY — dừng ở tệp ${i + 1}/${jobs.length}: ${x.name}`);
        if (e.free != null) console.error(`   Cần thêm ${mb(e.need)}, ổ còn trống ${mb(e.free)}.`);
        console.error("   Giải phóng ổ rồi chạy lại. Danh sách đầy đủ vẫn ở DANH-SACH.txt.");
        console.error(`   Đã đưa vào: ${linked + copied}/${jobs.length} tệp → ${out}`);
        process.exit(3);
      }
      failed.push(`${x.name}: ${e.code || ""} ${e.message}`);
    }
  }
  console.log("");
  console.log(`\n📁 Đã đưa ${linked + copied}/${jobs.length} tệp vào:\n   ${out}`);
  console.log(`   ${linked} tệp liên kết cứng (không tốn thêm dung lượng)${copied ? ` · ${copied} tệp phải chép (${mb(bytes)})` : ""}.`);
  if (failed.length) {
    console.error(`\n⚠ ${failed.length} tệp KHÔNG đưa vào được:`);
    failed.forEach((f) => console.error(`   ${f}`));
  }
  console.log("   Xem DANH-SACH.txt. Tải xong lên Drive thì xoá thư mục này (không mất video trong renders\\dp).");
  if (failed.length) process.exit(4);
}

main().catch((e) => {
  console.error(`❌ ${e.message}`);
  process.exit(1);
});
