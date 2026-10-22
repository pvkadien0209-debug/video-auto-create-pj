// tools/check-script.mjs — kiểm từng kịch bản video W, không cần đăng ký vào data/scripts/index.js.
// Chạy: node tools/check-script.mjs <tệp kịch bản .js hoặc thư mục>... [--units=<thư mục units của bài>]
// Kiểm: module có thật · đủ ô bắt buộc và độ dài trong giới hạn · hình minh hoạ / biểu tượng có thật · mỗi cảnh có lời đọc ·
//       `ref` trỏ đúng đoạn/câu hỏi của bài · câu đố đúng đáp án và thứ tự của bài · tổng thời lượng 2–3 phút · có `hook`.
// Lưu ý (#112, luật kể chuyện): có `loop` đúng mã cảnh · Đét ≤ 20% thời lượng · cảnh DLG ≤ 30 s ·
//       ≤ 4 nhân vật có tên mỗi video, ≤ 3 người nói + Đét mỗi cảnh.
import { build } from "esbuild";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
// #110: độ dài mp3 thật (nếu đã chép thư mục audio/dp từ server sang) → thời lượng đúng theo giọng
// #138: hai kho giọng — Kokoro (public/audio/kokoro) ưu tiên, Google (public/audio/dp)
const readDat = (d) => { try { return JSON.parse(fs.readFileSync(path.resolve(`public/audio/${d}/durations.dat`), "utf8")); } catch { return {}; } };
// #145: --text → bỏ qua mp3 có sẵn (kịch bản viết lại trùng mã câu cũ), ước thời lượng theo chữ
const AUDIO_MS = process.argv.includes("--text") ? { kokoro: {}, google: {} } : { kokoro: readDat("kokoro"), google: readDat("dp") };

const argv = process.argv.slice(2);
const UNITS = path.resolve((argv.find((a) => a.startsWith("--units=")) || "--units=../u3/soan/units").slice(8));
// Đối số có thể là tệp hoặc thư mục (lấy mọi *--w01.js) — trên Windows npm không tự mở rộng dấu *
const files = argv.filter((a) => !a.startsWith("--")).flatMap((a) =>
  fs.existsSync(a) && fs.statSync(a).isDirectory() ? fs.readdirSync(a).filter((x) => /--w\d\d\.js$/.test(x)).sort().map((x) => path.join(a, x)) : [a]);
const ROOT = path.resolve("src/rootComponents/CSK004");
const FPS = 30;

const lib = path.resolve("node_modules/.cache/check-lib-138.mjs");
if (!fs.existsSync(lib) || Date.now() - fs.statSync(lib).mtimeMs > 10 * 60 * 1000) {
  await build({ stdin: { contents: `export { REGISTRY } from ${JSON.stringify(ROOT + "/modules/index.js")};
export { layoutScript } from ${JSON.stringify(ROOT + "/script/ScriptVideo.jsx")};
export { pickVoice } from ${JSON.stringify(ROOT + "/core/voice.js")};
export { ILLUS } from ${JSON.stringify(ROOT + "/core/illus-names.js")};
export { ICONS } from ${JSON.stringify(ROOT + "/core/icons.js")};
export { sfxMissing } from ${JSON.stringify(ROOT + "/core/sfx.js")};
export { boardHidden } from ${JSON.stringify(ROOT + "/modules/board.jsx")};
${fs.existsSync(ROOT + "/core/sets.jsx") ? `export { SETS } from ${JSON.stringify(ROOT + "/core/sets.jsx")};` : "export const SETS = null;"}`, resolveDir: process.cwd(), loader: "js" },
    bundle: true, platform: "node", format: "esm", outfile: lib, loader: { ".jsx": "jsx", ".js": "jsx" }, jsx: "automatic", logLevel: "error",
    external: ["remotion", "@remotion/*", "react", "react-dom"] });
}
const { REGISTRY, layoutScript, pickVoice, ILLUS, ICONS, SETS, sfxMissing, boardHidden } = await import(pathToFileURL(lib).href);
const CAST_IDS = new Set(["lan", "dung", "thao", "hoa", "binh", "bin", "tu", "sam", "det"]); // #110: + bin, tu, sam

const ILLUS_KEYS = /^(illus|[a-z]+Illus|illus[A-Z][a-zA-Z]*|doIcons|dontIcons|around|props)$/; // props: đồ vật trong cảnh hoạt hình (#106)
const words = (s) => String(s).trim().split(/\s+/).filter((w) => /[\p{L}\p{Nd}]/u.test(w)).length; // #143: bỏ ký hiệu + → /
let bad = 0;

for (const file of files) {
  const E = [], W = [];
  let script;
  try {
    script = (await import(pathToFileURL(path.resolve(file)).href + "?t=" + Date.now())).default;
  } catch (e) { console.log(`${file}: LỖI 1\n  - không đọc được tệp: ${e.message}`); bad++; continue; }
  const id = path.basename(file, ".js");
  if (script.id !== id) E.push(`id "${script.id}" phải trùng tên tệp "${id}"`);
  if (script.schema !== "detpro.video-script/0.2") E.push("schema phải là detpro.video-script/0.2");
  if (!/^HOOK-\d\d$/.test(script.hook || "")) E.push("thiếu hook (mã khuôn mở đầu, ví dụ HOOK-01)");
  const u = script.unit || {};
  const lp = path.join(UNITS, u.audience || "?", (u.slug || "?") + ".json");
  let lesson = null;
  if (!fs.existsSync(lp)) E.push(`không thấy bài ${u.audience}/${u.slug}`);
  else lesson = JSON.parse(fs.readFileSync(lp, "utf8"));
  const paras = new Set(lesson ? lesson.article.body.flatMap((b) => b.paragraphs.map((p) => p.id)).concat(["intro", "outro"]) : []);
  const ids = new Set();
  for (const s of script.scenes || []) {
    const at = s.id;
    if (ids.has(s.id)) E.push(`${at}: trùng mã cảnh`); ids.add(s.id);
    const m = REGISTRY[s.module];
    if (!m) { E.push(`${at}: không có module ${s.module}`); continue; }
    const d = s.data || {};
    // Giá trị của ô: "a.b" = d.a.b (hoặc từng mục d.a[i].b); ô không có ở gốc = tìm trong các mục con (vd. messages[i].text)
    const valuesOf = (k) => {
      if (k.includes(".")) {
        const [a, b] = k.split(".");
        const x = d[a];
        if (Array.isArray(x)) return x.map((it) => (it && typeof it === "object" ? it[b] : undefined));
        return x && typeof x === "object" ? [x[b]] : [undefined];
      }
      if (k in d) return [d[k]];
      const found = [];
      const dig = (x, depth) => {
        if (depth > 3 || !x || typeof x !== "object") return;
        for (const it of Array.isArray(x) ? x : Object.values(x)) {
          if (it && typeof it === "object" && !Array.isArray(it) && k in it) found.push(it[k]);
          else dig(it, depth + 1);
        }
      };
      dig(d, 0);
      return found.length ? found : [null]; // không có ở đâu: coi là ô tuỳ chọn của biến thể
    };
    for (const [k, [lo, hi]] of Object.entries(m.limits || {})) {
      for (const v of valuesOf(k)) {
        if (v === null && !k.includes(".") && !(k in d)) continue;
        if (v == null || v === "" || (Array.isArray(v) && !v.length)) { if (lo > 0) E.push(`${at} ${s.module}: thiếu ô "${k}"`); continue; }
        const n = typeof v === "number" ? v : Array.isArray(v) ? v.length : words(v);
        if (n < lo || n > hi) E.push(`${at} ${s.module}: ô "${k}" ${typeof v === "number" ? "= " + n : "có " + n + (Array.isArray(v) ? " mục" : " tiếng")}, cần ${lo}–${hi}`);
      }
    }
    if (m.needsSource && !d.source) E.push(`${at} ${s.module}: cần ô source`);
    // #106: module hoạt hình tự kiểm diễn viên, bối cảnh, who/face/pose/stop/phase trong lines
    if (typeof m.check === "function") for (const x of m.check(d, s.lines || [])) E.push(`${at} ${s.module}: ${x}`);
    const walk = (v, key) => {
      if (Array.isArray(v)) return v.forEach((x) => walk(x, key));
      if (v && typeof v === "object") return Object.entries(v).forEach(([k, x]) => walk(x, k));
      if (typeof v !== "string") return;
      if (s.module === "BOARD-01" && (key === "around" || key === "over")) return; // #130: id phần tử trên bảng, không phải tên hình
      if (ILLUS_KEYS.test(key) && !ILLUS.has(v)) E.push(`${at}: không có hình minh hoạ "${v}"`);
      if (/^(icon|icons)$/.test(key) && !ICONS[v] && !ILLUS.has(v)) E.push(`${at}: không có biểu tượng "${v}"`);
    };
    walk(d, "");
    if (!s.lines?.length) E.push(`${at}: thiếu lời đọc (lines)`);
    const lids = new Set();
    for (const l of s.lines || []) {
      if (lids.has(l.id)) E.push(`${at}.${l.id}: trùng mã câu`); lids.add(l.id);
      // #106: giọng đọc tiếng Anh + phụ đề tiếng Việt
      if (l.lang !== "en") E.push(`${at}.${l.id}: lang phải là "en" (giọng đọc tiếng Anh, #106)`);
      if (!l.say?.trim()) E.push(`${at}.${l.id}: câu đọc trống`);
      else if ((l.say.replace(/Dũng|Cô Hoa|Bác Bình|Đét|Thảo/g, '').match(/[a-zA-Z]*[ăâđêôơưàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ][a-zA-Zàáảãạăâđêôơư]*/gi) || []).length > 3) W.push(`${at}.${l.id}: câu đọc tiếng Anh có nhiều chữ tiếng Việt`);
      if (!l.sub?.trim()) E.push(`${at}.${l.id}: thiếu phụ đề tiếng Việt (sub)`);
      if (l.who && !CAST_IDS.has(l.who) && !(l.who === "them" && s.module === "SCENE-02")) E.push(`${at}.${l.id}: who "${l.who}" không phải nhân vật (${[...CAST_IDS].join(", ")})`);
    }
    if (d.set && SETS && !SETS[d.set]) E.push(`${at}: không có bối cảnh "${d.set}" (${Object.keys(SETS).join(", ")})`);
    for (const a of d.actors || []) if (a?.id && !CAST_IDS.has(a.id)) E.push(`${at}: diễn viên "${a.id}" không có trong dàn nhân vật`);
    for (const r of String(s.ref || "").split(",").map((x) => x.trim()).filter(Boolean)) {
      const q = r.match(/^questions\[(\d+)\]$/);
      if (q) {
        const qi = lesson?.questions?.[+q[1]];
        if (!qi) { E.push(`${at}: ref ${r} không có trong bài`); continue; }
        if (Array.isArray(d.options)) {
          const want = qi.order.map((i) => qi.options[i]);
          if (JSON.stringify(d.options) !== JSON.stringify(want)) E.push(`${at}: đáp án câu đố phải đúng chữ và đúng thứ tự order của bài ${JSON.stringify(qi.order)}`);
          if (d.correct !== qi.order.indexOf(0)) E.push(`${at}: correct phải là ${qi.order.indexOf(0)}`);
          if (d.q && d.q !== qi.q) E.push(`${at}: câu hỏi phải giữ nguyên chữ của bài`);
        }
      } else if (lesson && !paras.has(r)) E.push(`${at}: ref "${r}" không có trong bài`);
    }
  }
  // #110: phủ ý — ≥ 90% số đoạn bài mà 40 câu hỏi dựa vào phải có cảnh trỏ tới (ref)
  if (lesson) {
    const refs = new Set((script.scenes || []).flatMap((s) => String(s.ref || "").split(",").map((x) => x.trim())));
    const asked = [...new Set((lesson.questions || []).map((q) => q.para).filter(Boolean))];
    const hit = asked.filter((p) => refs.has(p));
    if (asked.length && hit.length / asked.length < 0.9)
      E.push(`phủ ý ${hit.length}/${asked.length} đoạn được hỏi (cần ≥ 90%); thiếu: ${asked.filter((p) => !refs.has(p)).join(", ")}`);
  }
  let secs = 0, gsrc = "";
  try {
    const voice = pickVoice(script, AUDIO_MS); gsrc = voice.src; // #138
    const lay = layoutScript(script, FPS, voice.audioMs);
    secs = lay.total / FPS;
    // #109/#126: câu hỏi chính (ASK-01 hoặc HOST-01 đầu tiên) nên đến trước giây 30 (mở đầu "neo" ~30 s, nghiên cứu 1-ke-chuyen-va-mo-dau)
    const host = lay.scenes.find((x) => x.module === "ASK-01" || x.module === "HOST-01");
    if (host && host.from / FPS > 30) W.push(`${host.module} (câu hỏi chính) bắt đầu ở giây ${(host.from / FPS).toFixed(0)}, nên trước giây 30`);
    // #109 §9 (gần đúng): thẻ thông tin (không phải cảnh hoạt hình) dài > 20 s dễ có khung đứng yên quá 4 s
    for (const x of lay.scenes) {
      const fam = x.module.split("-")[0];
      if (["SCENE", "DLG", "HOST", "END", "QUIZ"].includes(fam)) continue;
      // số phần tử hiện dần ≈ mảng dài nhất trong data (mục danh sách, cột so sánh, bước…)
      const arrs = Object.entries(x.data || {}).filter(([, v]) => Array.isArray(v));
      const content = arrs.filter(([k]) => !/^(illus|icons?|keywordIllus|around)$/.test(k));
      // mảng hình minh hoạ chỉ tính khi không có mảng nội dung (vd. STORY-01: 3 nhịp, mỗi nhịp một hình)
      const arrMax = Math.max(1, ...(content.length ? content : arrs).map(([, a]) => a.length));
      const per = x.frames / FPS / (arrMax + 1);
      if (per > 8)
        W.push(`${x.id} ${x.module} dài ${(x.frames / FPS).toFixed(0)} s, ${arrMax} mục — mỗi nhịp hình ~${per.toFixed(0)} s; chia nhỏ hoặc thêm mục (§9)`);
    }
    // #112 (NV-Q4): Đét ≤ 20% thời lượng — cảnh Đét đứng một mình (HOST-xx, END-05) + câu who:"det" ở các cảnh khác
    // (cảnh DLG chủ yếu là nhân vật diễn, chỉ tính các câu Đét nói)
    let detF = 0;
    for (const x of lay.scenes) {
      if (/^HOST-/.test(x.module) || x.module === "END-05") { detF += x.frames; continue; }
      for (const l of x.timeline || []) if (l.who === "det") detF += ((l.endMs - l.startMs) / 1000) * FPS;
    }
    // #129: kịch bản ghi narrator: "det" (Đét dẫn truyện) → trần nâng lên 50%: Đét kể, nhân vật vẫn phải diễn
    // #143: hạt nhân bảng trắng (presenter) — Đét đứng dẫn suốt bài, nhân vật nói trong khung ảnh → trần 75%
    const detMax = script.presenter ? 0.75 : script.narrator === "det" ? 0.5 : 0.2;
    if (lay.total && detF / lay.total > detMax)
      W.push(`Đét chiếm ${((detF / lay.total) * 100).toFixed(1)}% thời lượng (${(detF / FPS).toFixed(0)}/${(lay.total / FPS).toFixed(0)} s), nên ≤ ${detMax * 100}% (NV-Q4${detMax > 0.2 ? ", #129" : ""})`);
    // #145: nét mặt hợp lệ ở mọi cảnh (cast/stage.jsx PERSON_FACES + DET_FACES)
    const FACES = new Set(["neutral", "happy", "surprised", "worried", "sad", "thinking", "stern", "wink", "laugh"]);
    for (const x of script.scenes || []) for (const l of x.lines || []) if (l.face && !FACES.has(l.face)) E.push(`${x.id}/${l.id}: face "${l.face}" không có (${[...FACES].join(", ")})`);
    // #145: từ khoá tô vàng phụ đề (keys) phải có trong phụ đề
    for (const x of script.scenes || []) for (const l of x.lines || []) for (const k of l.keys || [])
      if (typeof k === "string" && !String(l.sub || "").includes(k)) W.push(`${x.id}/${l.id}: keys "${k}" không có trong phụ đề`);
    // #143: chữ ghi chú bị che khi camera cận khung ảnh nhân vật / đè lên khung ảnh
    for (const x of lay.scenes) {
      if (x.module !== "BOARD-01") continue;
      for (const h of boardHidden(x.data || {}, x.timeline || [], script.boards?.[x.data?.board]))
        W.push(h.kind === "ngoai-khung" ? `${x.id} BOARD: "${h.id}" bị che — lúc ${(h.ms / 1000).toFixed(1)} s chỉ thấy ${h.vis}% (camera đang cận chỗ khác)` : h.kind === "chu-nho" ? `${x.id} BOARD: "${h.id}" cỡ chữ ${h.vis} quá nhỏ (≥ 28; dòng nguồn ≥ 24)` : h.kind === "de-chu" ? `${x.id} BOARD: "${h.id}" đè lên "${h.with}" (${h.vis}%)` : h.kind === "giay-nho" ? `${x.id} BOARD: "${h.id}" (ghi chú đè màn hình lúc cận) chữ chỉ còn ${h.vis}% cỡ — chừa chỗ trống trong khung cận hoặc rút ngắn chữ` : `${x.id} BOARD: "${h.id}" đè lên khung ảnh ${h.with} (${100 - h.vis}% diện tích)`);
    }
    // #112 (DL-Q4): cảnh DLG ở video W ≤ 30 s
    for (const x of lay.scenes)
      if (/^DLG-/.test(x.module) && x.frames / FPS > 30) W.push(`${x.id} ${x.module} dài ${(x.frames / FPS).toFixed(0)} s, nên ≤ 30 s (DL-Q4)`);
  } catch (e) { E.push(`không tính được thời lượng: ${e.message}`); }
  // #112 (KC-Q6, KC-08): vòng mở → đóng, dạng loop: { open: "<mã cảnh mở chuyện>", close: "<mã cảnh khép chuyện>" }
  const sceneIdx = new Map((script.scenes || []).map((s, i) => [s.id, i]));
  if (!script.loop) W.push(`thiếu loop: { open: "<mã cảnh mở chuyện>", close: "<mã cảnh khép chuyện>" } (KC-Q6; tự điền: node tools/add-loop.mjs)`);
  else {
    const { open, close } = script.loop;
    for (const [k, v] of [["open", open], ["close", close]]) if (!sceneIdx.has(v)) W.push(`loop.${k} "${v ?? ""}" không phải mã cảnh có trong kịch bản (KC-Q6)`);
    if (sceneIdx.has(open) && sceneIdx.has(close) && sceneIdx.get(close) <= sceneIdx.get(open)) W.push(`loop.close "${close}" phải nằm sau loop.open "${open}" (KC-Q6)`);
  }
  // #112 (NN-Q1): ≤ 4 nhân vật có tên mỗi video W, ≤ 3 người nói + Đét mỗi cảnh
  const named = new Set();
  for (const s of script.scenes || []) {
    const who = new Set((s.lines || []).map((l) => l.who).filter((w) => w && w !== "det" && w !== "them"));
    for (const a of s.data?.actors || []) if (a?.id && a.id !== "det") named.add(a.id);
    who.forEach((w) => named.add(w));
    if (who.size > 3) W.push(`${s.id}: ${who.size} người nói (${[...who].join(", ")}) + Đét, nên ≤ 3 người + Đét (NN-Q1)`);
  }
  if (named.size > 4) W.push(`${named.size} nhân vật có tên trong video (${[...named].join(", ")}), nên ≤ 4 (NN-Q1)`);
  // #110: bỏ trần 3 phút — video dài bao nhiêu cũng được, miễn đủ ý để hiểu bài và làm được bài tập; tối thiểu 2 phút
  if (secs && secs < 115) E.push(`thời lượng ${secs.toFixed(0)} s, cần ít nhất 120 s`);
  // #127: khoá tiếng động chưa có trong kho (chưa tải âm thật) → video bỏ qua âm đó
  const miss = sfxMissing ? sfxMissing(script) : [];
  if (miss.length) W.push(`sfx chưa có trong kho (bỏ qua khi render, xem KHO-SFX.md "Cần tìm"): ${miss.join(", ")}`);
  const first = script.scenes?.[0];
  // #123: mở đầu "neo" bằng một con số (STAT/NUM) cũng là mở đầu hợp lệ
  if (first && !/^(OPEN|STORY|REL|CMP|TEXT|RSN|NUM|STAT|BOARD|LIST|QUIZ|SCENE|DLG)-/.test(first.module)) W.push("cảnh 1 nên là module mở đầu (OPEN/STORY/SCENE…)");
  const last = script.scenes?.at(-1);
  if (last && !["END-04", "END-05"].includes(last.module)) W.push("cảnh cuối nên là END-04 hoặc END-05 (mời làm câu hỏi)");
  const nmod = new Set((script.scenes || []).map((s) => s.module)).size;
  if (nmod < 8 && !script.presenter) W.push(`chỉ ${nmod} module khác nhau (nên ≥ 8)`);
  if (E.length) bad++;
  console.log(`${file}: LỖI ${E.length} · ${secs ? Math.floor(Math.round(secs) / 60) + ":" + String(Math.round(secs) % 60).padStart(2, "0") : "?"} · ${script.scenes?.length || 0} cảnh` + (process.argv.includes("--text") ? " · ước theo chữ" : gsrc ? ` · giọng ${gsrc}` : "") + (W.length ? ` · lưu ý ${W.length}` : ""));
  for (const x of E) console.log("  - " + x);
  for (const x of W) console.log("  ~ " + x);
}
process.exitCode = bad ? 1 : 0;
