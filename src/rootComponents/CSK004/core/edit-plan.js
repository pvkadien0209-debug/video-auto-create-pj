// edit-plan.js — #144 bộ lập lịch edit tự động: xoay vòng 100 biến thể (E-LAY/E-DET/E-TR/E-SHOT…/E-FR/E-NOTE/E-BD)
// cho kịch bản khuôn "bảng trắng + Đét" (script.presenter) để video không lặp kiểu dàn dựng.
// Luật (w144/NGHIEN-CUU-QUAY-DUNG.md §6, R1–R16 rút gọn):
//   • bố cục người dẫn đổi sau 2–3 cảnh khung, không lặp liền, không quá ~45 s một kiểu; "đi bộ vào" chỉ ngay sau cảnh toàn màn
//   • chuyển cảnh mã E-TR chỉ ở chỗ đổi họ cảnh (khung ↔ toàn màn), không lặp trong 3 lần gần nhất; còn lại cắt thẳng (≥ 60%)
//   • Đét làm động tác ~1 lần / 3–4 câu dẫn, theo dấu câu (? → gãi đầu/nhún vai, ! → nảy/vỗ tay/ngón cái, từ khoá → chỉ bảng/gật)
//   • khung ảnh: mỗi bài 3 kiểu xoay vòng; ghi chú lúc cận: thirds là chính, xen lower-third / thẻ góc / mặt kính
//   • nền bảng: một kiểu mỗi bài (sáng là chính); cảnh nhân vật chưa có camera → autoShots (shot grammar mẫu A)
// Không ghi đè gì kịch bản đã ghi. Tắt: script.edit = false. Tất định theo id bài.
import { autoShots } from "./edit-camera.js";

const hash = (s) => { let h = 2166136261 >>> 0; for (const c of String(s)) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0; return h; };
const rng = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const pickW = (r, items) => { const tot = items.reduce((a, [, w]) => a + w, 0); let x = r() * tot; for (const [v, w] of items) if ((x -= w) <= 0) return v; return items.at(-1)[0]; };

const FULL = new Set(["HOST", "END", "QUIZ", "TOC", "DLG", "STAT", "ASK", "BEAT", "BRK"]);
const famOf = (s) => String(s.module).split("-")[0];
const inPanel = (s) => (s.panel != null ? !!s.panel : !FULL.has(famOf(s)));

// bố cục tự động: chỉ các kiểu không che nội dung bảng (03/04 PiP, 06 trước bảng, 08 ló lên → để người viết tự chọn)
const LAYOUT_POOL = [["E-LAY-01", 5], ["E-LAY-02", 5], ["E-LAY-10", 2], ["E-LAY-09", 2], ["E-LAY-05", 2]];
const TRANS_POOL = [["E-TR-01", 3], ["E-TR-02", 2], ["E-TR-03", 1], ["E-TR-04", 2], ["E-TR-05", 2], ["E-TR-06", 1], ["E-TR-07", 2], ["E-TR-08", 1], ["E-TR-09", 2], ["E-TR-10", 2], ["E-TR-11", 1], ["E-TR-12", 1]];
const FRAME_POOL = ["E-FR-02", "E-FR-04", "E-FR-06", "E-FR-07", "E-FR-09", "E-FR-10"]; // bỏ TV/laptop/dải phim (03/05/08): to hơn khung gốc, dễ đè chữ — để người viết tự chọn
const BOARD_POOL = [["E-BD-01", 6], ["E-BD-04", 2], ["E-BD-05", 2], ["E-BD-03", 2], ["E-BD-09", 2], ["E-BD-08", 1], ["E-BD-02", 1], ["E-BD-06", 1], ["E-BD-07", 1], ["E-BD-10", 1]];
const CLOSE_POOL = [["thirds", 5], ["lower3", 2], ["corner", 2]]; // "glass" (chữ trên mặt kính) khó đọc → chỉ dùng tay
const ACT_Q = ["E-DET-05", "E-DET-03"], ACT_X = ["E-DET-04", "E-DET-06", "E-DET-02"], ACT_K = ["E-DET-01", "E-DET-08", "E-DET-10"];

export const planEdits = (script) => {
  if (!script || script._edited || !script.presenter || script.edit === false) return script;
  const r = rng(hash(script.id || script.unit?.slug || "x"));
  const out = { ...script, _edited: true, scenes: script.scenes.map((s) => ({ ...s, edit: { ...(s.edit || {}) } })) };

  // ---- nền bảng: một kiểu / bài
  if (out.boards) {
    out.boards = Object.fromEntries(Object.entries(out.boards).map(([k, b]) => [k, b.style ? b : { ...b, style: pickW(r, BOARD_POOL) }]));
  }
  // dải hành trình góc trên trái → tránh bố cục không Đét (05) khi có storyline
  const layPool = script.storyline ? LAYOUT_POOL.filter(([v]) => v !== "E-LAY-05") : LAYOUT_POOL;

  // ---- bố cục người dẫn theo đoạn cảnh khung
  let cur = "E-LAY-01", run = 0, runLen = 2 + Math.floor(r() * 2), lastFull = true, firstPanel = true;
  const recentTr = [];
  let prevPanel = null;
  // xáo bằng Fisher–Yates (số lần gọi r() cố định — Array.sort với hàm ngẫu nhiên gọi số lần khác nhau giữa Node và Chromium → lệch kết quả)
  const fy = [...FRAME_POOL]; for (let k = fy.length - 1; k > 0; k--) { const j = Math.floor(r() * (k + 1)); [fy[k], fy[j]] = [fy[j], fy[k]]; }
  const frames = fy.slice(0, 2);
  const framePal = ["E-FR-01", ...frames];
  let vi = 0, detGap = 1 + Math.floor(r() * 2), lastAct = null;

  out.scenes.forEach((s, i) => {
    const panel = inPanel(s);
    // chuyển cảnh ở chỗ đổi họ (khung ↔ toàn màn); cảnh đầu và cảnh có sẵn transition thì giữ
    if (i > 0 && prevPanel !== null && panel !== prevPanel && !s.transition && !s.edit.trans && s.module !== "END-05" && s.module !== "HOST-03") {
      let tr, n = 0;
      do tr = pickW(r, TRANS_POOL); while (recentTr.includes(tr) && ++n < 20);
      s.edit.trans = tr; recentTr.push(tr); if (recentTr.length > 3) recentTr.shift();
    }
    if (panel) {
      if (!s.edit.layout) {
        if (firstPanel) cur = "E-LAY-01";
        else if (run >= runLen) {
          let nx, n = 0;
          do nx = pickW(r, layPool); while (nx === cur && ++n < 20);
          cur = nx; run = 0; runLen = 2 + Math.floor(r() * 2);
        }
        s.edit.layout = cur;
      } else cur = s.edit.layout;
      run++; firstPanel = false;
    }
    lastFull = !panel;
    prevPanel = panel;

    // ---- động tác Đét theo câu dẫn (chỉ cảnh khung, Đét đang đứng bên)
    if (panel && Array.isArray(s.lines)) {
      s.lines = s.lines.map((l) => {
        if (l.detAct || (l.who && l.who !== "det")) return l;
        if (--detGap > 0) return l;
        const say = String(l.say || "");
        const pool = /\?\s*$/.test(say) ? ACT_Q : /!\s*$/.test(say) ? ACT_X : l.keys?.length ? ACT_K : null;
        if (!pool) return l;
        let a = pool[Math.floor(r() * pool.length)];
        if (a === lastAct) a = pool[(pool.indexOf(a) + 1) % pool.length];
        lastAct = a; detGap = 3 + Math.floor(r() * 2);
        return { ...l, detAct: a };
      });
    }

    // ---- bảng: khung ảnh, ghi chú lúc cận, camera trong khung ảnh
    if (s.module === "BOARD-01" && s.data) {
      const items = (s.data.items || []).map((it) => {
        if (it.t !== "vignette") return it;
        const it2 = { ...it };
        if (!it2.frame) it2.frame = framePal[vi++ % framePal.length];
        const mod = it2.module || "SCENE-01";
        if (mod === "SCENE-01" && it2.data && !it2.data.camera?.length) {
          const cam = autoShots(s.lines || [], it2.data.actors || [], { seed: hash(s.id + it.id) });
          if (cam.length) it2.data = { ...it2.data, camera: cam };
        }
        return it2;
      });
      const hasClose = (s.data.shots || []).some((x) => Array.isArray(x.fit));
      s.data = { ...s.data, items, ...(hasClose && !s.data.closeNote ? { closeNote: pickW(r, CLOSE_POOL) } : {}) };
    }
    // ---- cảnh nhân vật toàn màn chưa có camera
    if (s.module === "SCENE-01" && s.data && !s.data.camera?.length) {
      const cam = autoShots(s.lines || [], s.data.actors || [], { seed: hash(s.id) });
      if (cam.length) s.data = { ...s.data, camera: cam };
    }
  });
  return out;
};
