// goi-dang-bai.js — #172 (SP11 mức 1) Gói đăng bài Facebook / Zalo cho từng bài học, từ nội dung đã có (không soạn mới, #088).
//
//   npx tsx goi-dang-bai.js                         mọi bài đã có video mp4 (renders\dp) hoặc ảnh bìa (renders\dp\img), bỏ qua gói đã có
//   npx tsx goi-dang-bai.js --only=ten-bai          chỉ bài này (có hay không có "--w01" đều được), làm lại kể cả đã có
//   npx tsx goi-dang-bai.js --lai                   làm lại tất cả
//   --so-cau=3        số ảnh "Câu hỏi hôm nay" mỗi bài (mặc định 3)
//   --khong-anh       chỉ soạn chữ + trang, không dựng ảnh (nhanh, để xem thử)
//   --data=<thư mục>  dữ liệu bài (mặc định C:\Dienpham\App\SEO-PT-projectjs\client\public\jsonData\units)
//   --site=<địa chỉ>  mặc định https://detpro.vercel.app
//
// Ra:  renders\social\<bài>\  — cau-1.jpg …, anh-bia.jpg (chép từ renders\dp\img), bai-dang.json, index.html (trang đăng tay)
//      renders\social\index.html — danh sách mọi gói, đánh dấu bài đã đăng.
// Loại bài đăng (SP11 §3): P1 video tóm tắt · P2 câu hỏi hôm nay (+ chữ đáp án cho bình luận đầu tiên) · P5 tin nhắn Zalo.
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "renders", "social");
const DP = path.join(__dirname, "renders", "dp");
const arg = (n) => {
  const a = process.argv.find((x) => x.startsWith(`--${n}=`));
  return a ? a.slice(n.length + 3) : null;
};
const flag = (n) => process.argv.includes(`--${n}`);
const DATA = arg("data") || "C:\\Dienpham\\App\\SEO-PT-projectjs\\client\\public\\jsonData\\units";
const SITE = (arg("site") || "https://detpro.vercel.app").replace(/\/+$/, "");
const N_Q = Math.max(1, Math.min(10, Number(arg("so-cau")) || 3));
const NO_IMG = flag("khong-anh");
const REDO = flag("lai") || !!arg("only");
const ONLY = arg("only") ? arg("only").split(/[\s,]+/).filter(Boolean).map((s) => s.replace(/--w\d+$/, "")) : null;

// #133: bài pháp lý / tài chính / sức khoẻ → một dòng lưu ý chung cuối bài đăng
const NOTE_BRANCH = {
  "law-practice": "pháp lý", "law-everyday": "pháp lý", "lawyer-exam": "pháp lý", "epc-contracts": "pháp lý",
  "personal-finance": "tài chính", "money-life": "tài chính", "food-health": "sức khoẻ",
};
const noteOf = (branch) =>
  NOTE_BRANCH[branch] ? `Lưu ý: nội dung mang tính tham khảo chung, không thay cho tư vấn ${NOTE_BRANCH[branch] === "sức khoẻ" ? "của bác sĩ / chuyên gia y tế" : NOTE_BRANCH[branch] === "tài chính" ? "tài chính cá nhân" : "pháp lý"} cho trường hợp cụ thể của bạn.` : "";

const lowerFirst = (s = "") => s.charAt(0).toLowerCase() + s.slice(1);
const plain = (h) => String(h || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
/** 1–2 câu đầu, tối đa n ký tự (không cắt giữa từ). */
const lead = (s, n = 260) => {
  const t = plain(s);
  const parts = t.match(/[^.!?…]+[.!?…]+/g) || [t];
  let out = "";
  for (const p of parts) {
    if ((out + p).length > n) break;
    out += p;
  }
  out = out.trim() || t.slice(0, n).replace(/\s+\S*$/, "") + "…";
  return out;
};
const noAccent = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
const hashtag = (s) => {
  const t = noAccent(s).replace(/[^A-Za-z0-9 ]+/g, " ").trim().split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
  return t && t.length <= 32 ? `#${t}` : "";
};
const utm = (url, src, slug, kind) => `${url}${url.includes("?") ? "&" : "?"}utm_source=${src}&utm_medium=social&utm_campaign=${slug}&utm_content=${kind}`;

// Tên chuỗi: phần trước " — " (phần sau thường là "cho ai") — giống ảnh bìa #164
const seriesShort = (s) => String(s || "").split(/\s+[—–-]\s+/)[0].trim();
/** Câu nhắc tên nhân vật trong truyện của bài (vd. "Why did Ngan text…" / "Vì sao Ngân…") khó hiểu khi đứng riêng trên mạng → để sau cùng. */
const STOP = new Set(["I", "English", "Vietnam", "Vietnamese", "Civil", "Code", "AI", "OK", "CV", "IELTS", "TOEIC", "VSTEP", "THPT", "EPC", "VAT", "PIT", "HR", "IT", "US", "UK", "EU"]);
const namesIn = (q) => {
  const vi = noAccent(q.vi || "");
  return (q.q.match(/(?<!^|[.?!:]\s)\b[A-Z][a-z]+\b/g) || []).filter((w) => !STOP.has(w) && new RegExp(`\\b${w}\\b`).test(vi));
};
/** Chọn câu cho ảnh: ngắn (vừa ảnh), không nhắc nhân vật, rải đều các đoạn bài viết, cố định theo bài (chạy lại ra cùng câu). */
function pickQuestions(qs, n) {
  const scored = qs
    .map((q, i) => ({ q, i, len: q.q.length + q.options.reduce((a, o) => a + o.length, 0), story: namesIn(q).length > 0 }))
    .filter((x) => x.len <= 330);
  scored.sort((a, b) => a.story - b.story || a.len - b.len || a.i - b.i);
  const pool = scored.slice(0, Math.max(n * 4, 12));
  const out = [];
  const usedPara = new Set();
  for (const x of pool) if (out.length < n && !usedPara.has(x.q.para)) (usedPara.add(x.q.para), out.push(x));
  for (const x of pool) if (out.length < n && !out.includes(x)) out.push(x);
  return out.sort((a, b) => a.i - b.i);
}

/** Soạn mọi bài đăng của một bài học (chữ ghép từ dữ liệu). */
function buildPosts(u, has) {
  const m = u.meta;
  const slug = m.slug;
  const who = m.audienceTitle ? `Dành cho ${lowerFirst(m.audienceTitle)}.` : "";
  const intro = lead(u.article?.intro);
  const note = noteOf(m.branch);
  const series = seriesShort(m.series);
  const tags = ["#DetPro", "#MoiNgayBietThem", hashtag(series)].filter(Boolean).join(" ");
  const lessonUrl = `${SITE}/for/${m.audience}/${slug}`;
  const watchUrl = `${SITE}/videos/${slug}`;
  const posts = [];
  const j = (...xs) => xs.filter((x) => x !== null && x !== undefined && x !== false).join("\n");

  // P1 — video tóm tắt (có video thì dẫn tới trang xem, chưa có thì tới bài)
  const p1url = has.video ? watchUrl : lessonUrl;
  posts.push({
    id: "fb-video", kind: "P1", net: "Facebook", title: has.video ? "Video tóm tắt" : "Giới thiệu bài (chưa có video)",
    media: [has.video && { type: "video", file: `../../dp/${slug}--w01.mp4`, label: "Video mp4" }, has.cover && { type: "image", file: "anh-bia.jpg", label: "Ảnh bìa" }].filter(Boolean),
    text: j(`${has.video ? "🎬 " : ""}${m.title}`, who, "", intro, "", `👉 ${has.video ? "Xem video và luyện 40 câu hỏi" : "Đọc bài và luyện 40 câu hỏi"}: ${utm(p1url, "facebook", slug, "video")}`, tags, note ? "" : null, note || null),
  });
  // P2 — câu hỏi hôm nay
  pickQuestions(u.questions || [], N_Q).forEach((x, k) => {
    const q = x.q;
    const shown = q.order.map((i) => q.options[i]);
    const ans = q.order.indexOf(0) + 1;
    posts.push({
      id: `fb-cau-${k + 1}`, kind: "P2", net: "Facebook", title: `Câu hỏi hôm nay ${k + 1}/${N_Q}`, qi: x.i,
      quiz: { topic: series, q: q.q, vi: q.vi, options: shown },
      media: [{ type: "image", file: `cau-${k + 1}.jpg`, label: `Ảnh câu ${k + 1}` }],
      text: j(`❓ Câu hỏi hôm nay · ${series}`, "", q.vi, `(Ảnh: câu hỏi tiếng Anh và 3 đáp án)`, "", "Bạn chọn 1, 2 hay 3? Đáp án ở bình luận đầu tiên.", `Làm đủ 40 câu: ${utm(`${lessonUrl}/quiz`, "facebook", slug, `cau-${k + 1}`)}`, tags, note ? "" : null, note || null),
      comment: j(`Đáp án: ${ans}. ${q.options[0]}`, plain(q.explain), "", `Bài đầy đủ: ${utm(lessonUrl, "facebook", slug, `dap-an-${k + 1}`)}`),
    });
    posts.push({
      id: `zalo-cau-${k + 1}`, kind: "P2", net: "Zalo", title: `Câu hỏi hôm nay ${k + 1}/${N_Q} (Zalo)`,
      media: [{ type: "image", file: `cau-${k + 1}.jpg`, label: `Ảnh câu ${k + 1}` }],
      text: j(`Câu hỏi hôm nay: ${q.vi}`, "Bạn chọn 1, 2 hay 3? Làm thử và xem đáp án:", utm(`${lessonUrl}/quiz`, "zalo", slug, `cau-${k + 1}`)),
    });
  });
  // P5 — tin nhắn Zalo ngắn (ảnh xem trước tự lấy từ trang)
  posts.push({
    id: "zalo-tin", kind: "P5", net: "Zalo", title: "Tin nhắn ngắn",
    media: has.cover ? [{ type: "image", file: "anh-bia.jpg", label: "Ảnh bìa" }] : [],
    text: j(`${m.title} — ${lead(u.article?.intro, 140)}`, `${has.video ? "Xem video và luyện câu hỏi" : "Đọc và luyện câu hỏi"}: ${utm(p1url, "zalo", slug, "tin")}`, note || null),
  });
  return posts;
}

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const CSS = `:root{--pine:#0f6e5a;--ink:#172033;--muted:#5d6878;--line:#e3e7ee;--paper:#f4f6f9;--marker:#ffd23f}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.5 "Be Vietnam Pro",system-ui,sans-serif}
header{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:12px 20px;background:#fff;border-bottom:1px solid var(--line)}
header b{font-size:18px}header b span{color:var(--pine)}header a{color:var(--pine);font-weight:600;text-decoration:none}
main{max-width:1100px;margin:0 auto;padding:20px}h1{font-size:22px;margin:0 0 4px}.muted{color:var(--muted)}
.card{display:grid;grid-template-columns:260px minmax(0,1fr);gap:16px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:14px;margin:14px 0}
.card.done{opacity:.6}.media img,.media video{width:100%;border-radius:8px;border:1px solid var(--line);display:block}
.mrow{margin-bottom:10px}.mrow .row{margin-top:6px}.how{margin:6px 0 0;padding-left:20px}.how li{margin:2px 0}
.tag{display:inline-block;padding:1px 8px;border-radius:6px;font-size:12px;font-weight:700;margin-right:6px}.fb{background:#e7efff;color:#1d4ed8}.zalo{background:#e0f2fe;color:#0369a1}
textarea{width:100%;min-height:150px;padding:10px;border:1px solid var(--line);border-radius:8px;font:inherit;font-size:14px;resize:vertical}
.row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px}
button,.btn{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 12px;border-radius:8px;border:1px solid var(--line);background:#fff;color:var(--ink);font:inherit;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none}
button.pri{background:var(--pine);border-color:var(--pine);color:#fff}label.chk{margin-left:auto;font-weight:600}
h3{margin:0 0 6px;font-size:16px}.cmt{margin-top:10px;padding-top:10px;border-top:1px dashed var(--line)}
table{width:100%;border-collapse:collapse;background:#fff}td,th{padding:8px 10px;border-bottom:1px solid var(--line);text-align:left;font-size:14px}
@media(max-width:700px){.card{grid-template-columns:1fr}}`;
const JS = `function cp(id,btn){var t=document.getElementById(id);var v=t.value;var ok=function(){var o=btn.textContent;btn.textContent='Đã chép ✓';setTimeout(function(){btn.textContent=o},1400)};
if(navigator.clipboard&&window.isSecureContext!==false){navigator.clipboard.writeText(v).then(ok,function(){t.select();document.execCommand('copy');ok()})}else{t.select();document.execCommand('copy');ok()}}
function flash(btn,txt){var o=btn.textContent;btn.textContent=txt;setTimeout(function(){btn.textContent=o},1600)}
function cpStr(v,btn){var done=function(){flash(btn,'Đã chép ✓')};if(navigator.clipboard){navigator.clipboard.writeText(v).then(done,function(){prompt('Chép dòng này (Ctrl+C):',v)})}else{prompt('Chép dòng này (Ctrl+C):',v)}}
function cpImg(name,btn){var src=IMG[name];if(!src||!navigator.clipboard||!window.ClipboardItem){flash(btn,'Không chép được — dùng Chép đường dẫn');return}
var im=new Image();im.onload=function(){var c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext('2d').drawImage(im,0,0);
c.toBlob(function(b){navigator.clipboard.write([new ClipboardItem({'image/png':b})]).then(function(){flash(btn,'Đã chép ảnh ✓ — Ctrl+V vào ô đăng')},function(){flash(btn,'Không chép được — dùng Chép đường dẫn')})},'image/png')};im.src=src}
function key(s,p){return 'dp.dang.'+s+'.'+p}
function mark(s,p,el){try{localStorage.setItem(key(s,p),el.checked?'1':'')}catch(e){}el.closest('.card').classList.toggle('done',el.checked)}
document.querySelectorAll('input[data-post]').forEach(function(el){var on='';try{on=localStorage.getItem(key(el.dataset.slug,el.dataset.post))}catch(e){}el.checked=!!on;el.closest('.card').classList.toggle('done',!!on)});`;

function lessonHtml(u, posts, dir) {
  const m = u.meta;
  // ảnh nhúng sẵn vào trang (data URL) để nút "Chép ảnh" chép được vào bộ nhớ tạm — trang mở từ ổ đĩa không đọc ngược ảnh rời được
  const imgs = new Map();
  for (const p of posts) for (const x of p.media) if (x.type === "image" && !imgs.has(x.file) && fs.existsSync(path.join(dir, x.file))) imgs.set(x.file, `data:image/jpeg;base64,${fs.readFileSync(path.join(dir, x.file)).toString("base64")}`);
  const cards = posts
    .map((p, k) => {
      // #172b: không cần tải về — tệp đã nằm sẵn trên máy. Ảnh: "Chép ảnh" rồi Ctrl+V vào ô đăng; ảnh/video: "Chép đường dẫn"
      //   rồi dán vào ô "Tên tệp" của hộp chọn tệp khi bấm Ảnh/video trên Facebook/Zalo (hoặc kéo tệp từ thư mục Windows vào).
      const media = p.media
        .map((x) => {
          const full = path.resolve(dir, x.file);
          const pathBtn = `<button onclick="cpStr(${esc(JSON.stringify(full))},this)">Chép đường dẫn</button>`;
          if (x.type === "video") return `<div class="mrow"><b>▶ ${esc(x.label)}</b><div class="row"><a class="btn" href="${esc(x.file)}" target="_blank">Xem</a>${pathBtn}</div></div>`;
          const has = imgs.has(x.file);
          return `<div class="mrow">${has ? `<img src="${esc(x.file)}" alt="${esc(x.label)}" loading="lazy">` : `<span class="muted">${esc(x.label)}: chưa dựng</span>`}<div class="row">${has ? `<button onclick="cpImg('${esc(x.file)}',this)">Chép ảnh</button>` : ""}${pathBtn}</div></div>`;
        })
        .join("");
      const net = p.net === "Facebook" ? `<span class="tag fb">Facebook</span>` : `<span class="tag zalo">Zalo</span>`;
      const open = p.net === "Facebook" ? `<a class="btn" href="https://www.facebook.com/" target="_blank" rel="noopener">Mở Facebook</a>` : `<a class="btn" href="https://chat.zalo.me/" target="_blank" rel="noopener">Mở Zalo</a>`;
      const cmt = p.comment
        ? `<div class="cmt"><b>Bình luận đầu tiên (đáp án) — đăng sau vài giờ</b><textarea id="c${k}" rows="5">${esc(p.comment)}</textarea><div class="row"><button onclick="cp('c${k}',this)">Sao chép đáp án</button></div></div>`
        : "";
      return `<section class="card"><div class="media">${media || '<span class="muted">Không kèm ảnh — Zalo tự lấy ảnh xem trước từ đường dẫn</span>'}</div>
<div><h3>${net}${esc(p.title)}</h3><textarea id="t${k}" rows="9">${esc(p.text)}</textarea>
<div class="row"><button class="pri" onclick="cp('t${k}',this)">Sao chép chữ</button>${open}<label class="chk"><input type="checkbox" data-slug="${esc(m.slug)}" data-post="${esc(p.id)}" onchange="mark(this.dataset.slug,this.dataset.post,this)"> Đã đăng</label></div>${cmt}</div></section>`;
    })
    .join("\n");
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Đăng bài · ${esc(m.title)}</title><style>${CSS}</style></head>
<body><header><b>Det<span>Pro</span></b><span class="muted">Gói đăng bài</span><a href="../index.html">← Tất cả gói</a><a href="${esc(`${SITE}/for/${m.audience}/${m.slug}`)}" target="_blank">Mở bài trên web</a></header>
<main><h1>${esc(m.title)}</h1><p class="muted">${esc(m.series)} · ${esc(m.audienceTitle || "")}. </p>
<ol class="muted how"><li>Bấm <b>Sao chép chữ</b> → mở Facebook / Zalo → bấm vào ô viết bài → <b>Ctrl+V</b>.</li>
<li>Ảnh: bấm <b>Chép ảnh</b> → bấm vào ô viết bài → <b>Ctrl+V</b> (ảnh tự vào bài). Không cần tải về: ảnh đã nằm sẵn trên máy.</li>
<li>Video (hoặc khi Chép ảnh không được): bấm <b>Chép đường dẫn</b> → trên Facebook/Zalo bấm <b>Ảnh/video</b> → hộp chọn tệp hiện ra → dán vào ô <b>File name / Tên tệp</b> → <b>Open</b>. Hoặc mở thư mục của bài trong Windows và kéo tệp vào ô đăng.</li>
<li>Đăng xong → tích <b>Đã đăng</b>.</li></ol>
${cards}</main><script>var IMG=${JSON.stringify(Object.fromEntries(imgs)).replace(/</g, "\\u003c")};${JS}</script></body></html>`;
}

function indexHtml(rows) {
  const tr = rows
    .map((r) => `<tr><td><a href="${esc(r.slug)}/index.html">${esc(r.title)}</a><div class="muted">${esc(r.series)}</div></td><td>${r.video ? "có" : "—"}</td><td>${r.posts.length}</td><td class="st" data-slug="${esc(r.slug)}" data-posts="${esc(r.posts.join(","))}">0/${r.posts.length}</td></tr>`)
    .join("\n");
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Gói đăng bài DetPro</title><style>${CSS}</style></head>
<body><header><b>Det<span>Pro</span></b><span class="muted">Gói đăng bài Facebook / Zalo — ${rows.length} bài</span></header>
<main><table><thead><tr><th>Bài</th><th>Video</th><th>Số bài đăng</th><th>Đã đăng</th></tr></thead><tbody>${tr}</tbody></table></main>
<script>document.querySelectorAll('td.st').forEach(function(td){var s=td.dataset.slug,ps=td.dataset.posts.split(','),n=0;ps.forEach(function(p){try{if(localStorage.getItem('dp.dang.'+s+'.'+p))n++}catch(e){}});td.textContent=n+'/'+ps.length;if(n===ps.length)td.style.color='#0f6e5a'})</script></body></html>`;
}

async function main() {
  const T0 = Date.now();
  const indexFile = path.join(DATA, "index.json");
  if (!fs.existsSync(indexFile)) {
    console.error(`❌ Không thấy dữ liệu bài: ${indexFile}\n   Máy này chưa có SEO-PT-projectjs? Chạy ở máy 01, hoặc thêm --data=<thư mục jsonData\\units>.`);
    process.exit(1);
  }
  const idx = JSON.parse(fs.readFileSync(indexFile, "utf8"));
  const audOf = {};
  for (const b of idx.branches) for (const t of b.topics) for (const u of t.units) if (!audOf[u.slug]) audOf[u.slug] = u.audience;

  const mp4 = new Set(fs.existsSync(DP) ? fs.readdirSync(DP).filter((f) => f.endsWith("--w01.mp4")).map((f) => f.slice(0, -9)) : []);
  const IMG = path.join(DP, "img");
  const jpg = new Set(fs.existsSync(IMG) ? fs.readdirSync(IMG).filter((f) => f.endsWith("--w01.jpg")).map((f) => f.slice(0, -9)) : []);
  let slugs = ONLY || [...new Set([...mp4, ...jpg])].sort();
  const miss = slugs.filter((s) => !audOf[s]);
  if (miss.length) console.log(`⚠ Không có trong mục lục bài, bỏ qua: ${miss.join(", ")}`);
  slugs = slugs.filter((s) => audOf[s]);
  if (!REDO) {
    const before = slugs.length;
    slugs = slugs.filter((s) => !fs.existsSync(path.join(OUT, s, "index.html")));
    if (before !== slugs.length) console.log(`⏭  Bỏ qua ${before - slugs.length} gói đã có (làm lại: --lai hoặc --only=<bài>)`);
  }
  console.log(`📦 Gói đăng bài · ${slugs.length} bài · ${N_Q} ảnh câu hỏi/bài${NO_IMG ? " · không dựng ảnh" : ""} → ${path.relative(__dirname, OUT)}`);
  if (!slugs.length) return writeIndex(idx, audOf, mp4);

  // Dựng ảnh bằng Remotion (một lần đóng gói, một trình duyệt)
  let still = null;
  if (!NO_IMG) {
    const { bundle } = await import("@remotion/bundler");
    const { getCompositions, openBrowser, renderStill } = await import("@remotion/renderer");
    console.log("🔧 Đóng gói Remotion (1–3 phút)…");
    const serveUrl = await bundle({ entryPoint: path.join(__dirname, "src", "index.js"), publicDir: path.join(__dirname, "public"), enableCaching: false });
    const browser = await openBrowser("chrome", { chromiumOptions: { gl: "angle" } });
    const comp = (await getCompositions(serveUrl, { puppeteerInstance: browser })).find((c) => c.id === "S-QUIZ");
    if (!comp) {
      console.error("❌ Không có composition S-QUIZ — src/RemotionRoot.js có đang trỏ CSK004 không?");
      process.exit(1);
    }
    still = {
      // props của khung = composition.props (Remotion 4) → ghép dữ liệu câu hỏi vào đây, không chỉ inputProps
      render: (props, output) => renderStill({ composition: { ...comp, props: { ...comp.defaultProps, ...props } }, serveUrl, output, inputProps: props, frame: 0, imageFormat: "jpeg", jpegQuality: 90, overwrite: true, puppeteerInstance: browser, timeoutInMilliseconds: 60000 }),
      close: () => browser.close({ silent: true }).catch(() => {}),
    };
  }

  let ok = 0;
  for (const [k, slug] of slugs.entries()) {
    try {
      const u = JSON.parse(fs.readFileSync(path.join(DATA, audOf[slug], `${slug}.json`), "utf8"));
      const dir = path.join(OUT, slug);
      fs.mkdirSync(dir, { recursive: true });
      const has = { video: mp4.has(slug), cover: jpg.has(slug) };
      if (has.cover) fs.copyFileSync(path.join(IMG, `${slug}--w01.jpg`), path.join(dir, "anh-bia.jpg"));
      const posts = buildPosts(u, has);
      if (still) for (const p of posts) if (p.quiz && p.net === "Facebook") await still.render({ ...p.quiz, accent: "#0f6e5a" }, path.join(dir, p.media[0].file));
      fs.writeFileSync(path.join(dir, "bai-dang.json"), JSON.stringify({ slug, title: u.meta.title, series: u.meta.series, video: has.video, posts: posts.map(({ quiz, ...p }) => p) }, null, 2));
      fs.writeFileSync(path.join(dir, "index.html"), lessonHtml(u, posts, dir));
      ok++;
      process.stdout.write(`\r   ${k + 1}/${slugs.length} · ${slug.slice(0, 60).padEnd(60)}`);
    } catch (e) {
      console.log(`\n   ❌ ${slug}: ${String(e.message || e).split("\n")[0]}`);
    }
  }
  if (still) await still.close();
  writeIndex(idx, audOf, mp4);
  console.log(`\n✅ Xong ${ok}/${slugs.length} gói sau ${Math.round((Date.now() - T0) / 1000)} s. Mở: renders\\social\\index.html`);
}

/** Trang tổng: mọi gói đang có trong renders\social. */
function writeIndex() {
  if (!fs.existsSync(OUT)) return;
  const rows = fs
    .readdirSync(OUT)
    .filter((d) => fs.existsSync(path.join(OUT, d, "bai-dang.json")))
    .map((d) => JSON.parse(fs.readFileSync(path.join(OUT, d, "bai-dang.json"), "utf8")))
    .map((x) => ({ slug: x.slug, title: x.title, series: x.series, video: x.video, posts: x.posts.map((p) => p.id) }))
    .sort((a, b) => a.series.localeCompare(b.series) || a.title.localeCompare(b.title));
  fs.writeFileSync(path.join(OUT, "index.html"), indexHtml(rows));
}

main().catch((e) => {
  console.error(`❌ Dừng: ${e.message}`);
  process.exit(1);
});
