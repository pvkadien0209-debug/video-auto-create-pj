// kiem-drive.mjs — #178 So video / ảnh bìa đã render với thư mục Drive DetProMedia (cả thư mục con video\, img\ …, bỏ audio\):
//   tệp CHƯA có trên Drive → chép sang  renders\dp-toPush[YYYY-MM-DD - HHhMM]\video\  và  …\img\  để kéo cả thư mục lên Drive.
//   tệp ĐÃ có nhưng bản trên máy MỚI HƠN (render lại) → chép vào  …\thay-the\  (thay bằng "Quản lý phiên bản" trên Drive, giữ tên).
//
//   node tools\drive\kiem-drive.mjs              (8-kiem-drive.bat gọi)
//   node tools\drive\kiem-drive.mjs --chi-xem    chỉ báo cáo, không chép
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
const ONLY_KEY = process.argv.includes("--lay-khoa"); // #179: chỉ chép khoá về drive-key.txt rồi dừng
const SKIP_DIR = /^(audio|am[ -]?thanh|âm thanh)$/i;

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
  let bytes = 0;
  const copy = (x, sub) => {
    const dir = path.join(out, sub);
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(x.full, path.join(dir, x.name));
    bytes += x.size;
  };
  missing.forEach((x) => copy(x, x.kind));
  newer.forEach((x) => copy(x, path.join("thay-the", x.kind)));
  const list = [
    `Tạo lúc ${new Date().toLocaleString("vi-VN")} — so với Drive DetProMedia (${nDrive} tệp).`,
    "",
    "CHƯA CÓ TRÊN DRIVE — kéo thư mục video\\ vào DetProMedia\\video, img\\ vào DetProMedia\\img (giữ nguyên tên):",
    ...missing.map((x) => `  ${x.kind}\\${x.name}`),
    "",
    "THAY THẾ — trên Drive bấm chuột phải tệp cùng tên → Quản lý phiên bản → Tải lên phiên bản mới (đừng tải thành tệp mới, Drive sẽ thêm \" (1)\" vào tên):",
    ...newer.map((x) => `  thay-the\\${x.kind}\\${x.name}  (Drive: ${drive[x.name].folder})`),
  ].join("\r\n");
  fs.writeFileSync(path.join(out, "DANH-SACH.txt"), list, "utf8");
  console.log(`\n📁 Đã chép ${missing.length + newer.length} tệp (${mb(bytes)}) vào:\n   ${out}`);
  console.log("   Xem DANH-SACH.txt trong thư mục đó. Tải xong lên Drive thì xoá thư mục này cho đỡ chật ổ.");
}

main().catch((e) => {
  console.error(`❌ ${e.message}`);
  process.exit(1);
});
