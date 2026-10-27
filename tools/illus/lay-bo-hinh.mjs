// lay-bo-hinh.mjs — #203 Tách bộ hình Iconify (npm @iconify-json/<bộ>) thành SVG trong public/illus-<bộ>/ + LICENSE.txt,
// rồi lập mục lục chung public/illus-index.json cho MỌI kho hình (Fluent Emoji Flat đang dùng, các bộ mới, Humaaans).
//   node tools/illus/lay-bo-hinh.mjs              (0b-lay-bo-hinh-moi.bat gọi, sau khi npm i -D @iconify-json/noto)
//   node tools/illus/lay-bo-hinh.mjs --chi-muc-luc  chỉ lập lại mục lục
// Chỉ lấy bộ có giấy phép KHÔNG bắt ghi công (#198, IMG-Q1): MIT / Apache-2.0 / CC0. Bỏ biến thể màu da và cờ (như illus).
// Mã hình trong mục lục:  <tên> (Fluent Emoji Flat, giữ như cũ) · noto:<tên> · humaaans:<tư thế>/<phần>/<tên> · humaaans:canh/<tên>
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const PUB = path.join(ROOT, "public");
const BO = ["noto"]; // thêm bộ khác: npm i -D @iconify-json/<bộ> rồi thêm tên vào đây
const OK_LICENSE = /^(MIT|Apache-2\.0|CC0-1\.0)$/;
const SKIP = (n) => /skin-tone/.test(n) || /^flag-/.test(n);
const ONLY_INDEX = process.argv.includes("--chi-muc-luc");

const index = [];

// 1) Fluent Emoji Flat đang dùng (public/illus) — mã giữ nguyên tên tệp
const illus = path.join(PUB, "illus");
if (fs.existsSync(illus)) {
  for (const f of fs.readdirSync(illus).filter((f) => f.endsWith(".svg")).sort())
    index.push({ id: f.slice(0, -4), bo: "fluent-emoji-flat", file: `illus/${f}`, giayphep: "MIT" });
} else console.log("⚠ Chưa có public/illus (chạy 0-lay-hinh-illus.bat) — mục lục thiếu bộ Fluent Emoji Flat.");

// 2) Các bộ Iconify
for (const bo of BO) {
  const dir = path.join(ROOT, "node_modules", "@iconify-json", bo);
  if (!fs.existsSync(path.join(dir, "icons.json"))) {
    console.log(`⚠ Chưa cài @iconify-json/${bo} — chạy: npm i -D @iconify-json/${bo}`);
    continue;
  }
  const info = JSON.parse(fs.readFileSync(path.join(dir, "info.json"), "utf8"));
  const lic = info.license?.spdx || "";
  if (!OK_LICENSE.test(lic)) {
    console.log(`✖ Bỏ bộ ${bo}: giấy phép ${lic || "?"} phải ghi công / chia sẻ cùng giấy phép (#198).`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(path.join(dir, "icons.json"), "utf8"));
  const out = path.join(PUB, `illus-${bo}`);
  let n = 0;
  if (!ONLY_INDEX) fs.mkdirSync(out, { recursive: true });
  for (const [name, ic] of Object.entries(data.icons).sort(([a], [b]) => a.localeCompare(b))) {
    if (SKIP(name)) continue;
    const w = ic.width ?? data.width ?? 16;
    const h = ic.height ?? data.height ?? 16;
    if (!ONLY_INDEX)
      fs.writeFileSync(path.join(out, `${name}.svg`), `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${ic.left ?? 0} ${ic.top ?? 0} ${w} ${h}">${ic.body}</svg>`);
    index.push({ id: `${bo}:${name}`, bo, file: `illus-${bo}/${name}.svg`, giayphep: lic });
    n++;
  }
  if (!ONLY_INDEX) {
    fs.writeFileSync(
      path.join(out, "LICENSE.txt"),
      `${info.name} — ${info.author?.name || ""}, ${info.license?.title || lic} (${lic})\r\n${info.license?.url || ""}\r\n` +
        `Lấy từ gói @iconify-json/${bo} ${JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8")).version}. Bỏ các biến thể màu da và cờ.\r\n`
    );
  }
  console.log(`✅ ${info.name}: ${n} hình → public/illus-${bo}/ (${lic})`);
}

// 3) Humaaans (đã tách sẵn, nằm trong git): public/humaaans/_index.json
const hm = path.join(PUB, "humaaans", "_index.json");
if (fs.existsSync(hm)) {
  const items = JSON.parse(fs.readFileSync(hm, "utf8"));
  for (const x of items) index.push({ ...x, giayphep: "CC0-1.0" });
  console.log(`✅ Humaaans: ${items.length} phần người + cảnh (CC0)`);
}

fs.writeFileSync(path.join(PUB, "illus-index.json"), JSON.stringify(index));
const by = index.reduce((a, x) => ((a[x.bo] = (a[x.bo] || 0) + 1), a), {});
console.log(`📒 Mục lục public/illus-index.json: ${index.length} hình — ` + Object.entries(by).map(([k, v]) => `${k} ${v}`).join(" · "));
