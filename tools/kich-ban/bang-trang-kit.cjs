// bang-trang-kit.cjs — #136 HẠT NHÂN kịch bản "Đét đứng bên + một bảng trắng chung" (khuôn từ a-day bản 5, #135).
// Dùng: const K = require("./bang-trang-kit.cjs")({ cells: "ABCDEFGHIJ", cols: 5 });
//       K.scenes.push(K.B("s00", { shots: [K.shot(0, "A", { move: "cut" })], items: [K.T("A", "a-1", "16 giờ", 60, 150, 200, "l1:sixteen")] }, [K.L(...)]));
//       K.write(outFile, { base: kichBanCu, ref, loop, hook, notes })
// Đọc trước: SEO\DetPro\HAT-NHAN-KICH-BAN.md (luật dựng) · ví dụ đầy đủ: tools/kich-ban/vi-du-a-day.cjs
const fs = require("fs");

module.exports = function kit({ cells = "ABCDEFGHIJ", cols = 5, CW = 1728, CH = 770, GX = 240, GY = 320, board = "bang-trang" } = {}) {
  // ---------- lưới ô ----------
  const frames = {};
  [...cells].forEach((k, i) => { const c = i % cols, r = Math.floor(i / cols); frames[k] = [c * (CW + GX), r * (CH + GY), CW, CH]; });
  const rows = Math.ceil(cells.length / cols);
  const size = [cols * CW + (cols - 1) * GX, rows * CH + (rows - 1) * GY];
  const at = (cell) => (x, y) => [frames[cell][0] + x, frames[cell][1] + y];

  // ---------- lời ----------
  // L(id, who, say EN, sub VI, { keys: ["cụm trong phụ đề sẽ tô vàng"], face })
  const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

  // ---------- món trên bảng (toạ độ trong ô, 1728 × 770) ----------
  // when = "l2:word+ms" | "l3:end" | "l1" | số ms — gắn vào từ được đọc
  const T = (cell, id, text, x, y, size, when, extra = {}) => { const [X, Y] = at(cell)(x, y); return { id, t: "text", text, x: X, y: Y, size, at: when, ...extra }; };
  const I = (cell, id, name, x, y, size, when, extra = {}) => { const [X, Y] = at(cell)(x, y); return { id, t: "illus", name, x: X, y: Y, size, at: when, ...extra }; };
  const BX = (cell, id, x, y, w, h, when, extra = {}) => { const [X, Y] = at(cell)(x, y); return { id, t: "box", x: X, y: Y, w, h, at: when, ...extra }; };
  const AR = (cell, id, a, b, when, extra = {}) => ({ id, t: "arrow", from: at(cell)(...a), to: at(cell)(...b), at: when, ...extra });
  // khung ảnh nhân vật (SCENE-01 / SCENE-03 thu nhỏ dán lên bảng)
  const V = (cell, id, x, y, w, data, when, caption, icon, module = "SCENE-01") => { const [X, Y] = at(cell)(x, y); return { id, t: "vignette", module, x: X, y: Y, w, data, at: when, caption, icon }; };
  const TITLE = (cell, id, text, when, extra) => T(cell, id, text, 50, 24, 84, when, extra);
  // tô vàng một cụm trong chữ: HL("cụm", "l2:word")
  const HL = (text, when) => ({ text, at: when });

  // ---------- camera ----------
  // fit = "A" (một ô) | ["id1","id2"] (cận vào món) | "all" (cả bảng)
  const shot = (when, fit, extra = {}) => ({ at: when, fit, ...extra });
  // vào ô mới: cắt tại ô cũ rồi lướt sang (900 ms) — dùng ở cảnh đầu mỗi ô
  const enter = (from, to) => [shot(0, from, { move: "cut" }), shot(150, to, { ms: 900 })];
  // cận khung ảnh khi nhân vật nói, lùi về ô khi Đét chốt
  const zoomIn = (when, ids, back, cell, zoom = 1.35) => [shot(when, ids, { zoom, ms: 700 }), shot(back, cell, { ms: 700 })];

  const B = (id, data, lines, extra = {}) => ({ id, module: "BOARD-01", data: { board, ...data }, lines, ...extra });
  const scenes = [];

  const boards = { [board]: { size, hand: "det-paw", font: "hand", frames } };

  /** Ghi tệp kịch bản .js — giữ phần đầu (import/ghi chú) nếu tệp đã có. */
  // base = phần đầu kịch bản (id, slug, unit, voice, lang…) lấy từ kịch bản cũ/khung; mặc định tắt tiếng bút chạy (#136)
  const write = (OUT, { base = {}, ref = {}, loop, hook, anchor, notes, audio = { sfxPack: "detpro-1", sfxOff: ["but-viet"] }, presenter = { side: "left" } }) => {
    for (const s of scenes) if (ref[s.id]) s.ref = ref[s.id];
    const keep = Object.fromEntries(Object.entries(base).filter(([k]) => !["scenes", "boards", "storyline", "loop"].includes(k)));
    const out = { ...keep, presenter, audio: { ...(keep.audio || {}), ...audio }, boards, scenes };
    if (hook) out.hook = hook;
    if (anchor) out.anchor = anchor; // #145: neo của HOOK-24/25 { type, value, ref }
    if (notes) out.notes = notes;
    if (loop) out.loop = loop;
    const head = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8").split("export default ")[0] : `// ${out.id || ""} — dựng bằng bang-trang-kit (#136)\n`;
    fs.writeFileSync(OUT, head + "export default " + JSON.stringify(out, null, 2) + ";\n");
    console.log("ok", scenes.length, "cảnh");
  };

  return { frames, size, at, L, T, I, BX, AR, V, TITLE, HL, shot, enter, zoomIn, B, scenes, boards, write };
};
