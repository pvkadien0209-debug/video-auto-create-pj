// timing.js — thời lượng ở chế độ chỉ chữ (nghiên cứu module §5.4) và nhịp lặng (§5.5).
// Tốc độ đọc dùng tạm (MV-Q6): tiếng Việt 3 âm tiết/giây (B1), tiếng Anh 2,3 từ/giây (B1).

export const READ_RATE = {
  A1: { vi: 2.5, en: 1.8 },
  B1: { vi: 3.0, en: 2.3 },
  C1: { vi: 3.5, en: 2.8 },
};

export const BEAT = { xs: 250, s: 500, m: 800, l: 1200, xl: 2000, think: 3000 };

const count = (t) => String(t || "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;

/** Thời gian đọc một đoạn chữ (ms). lang = "vi" | "en". */
export const readMs = (text, { lang = "vi", level = "B1", fresh = true } = {}) => {
  const r = (READ_RATE[level] || READ_RATE.B1)[lang] || 3;
  const orient = fresh ? 600 : 200; // màn mới cần thời gian định hướng
  return orient + (count(text) / r) * 1000;
};

/** Tổng thời gian đọc của nhiều mục hiện lần lượt trên cùng một màn. */
export const readList = (items, opts = {}) =>
  items.reduce((s, t, i) => s + readMs(t, { ...opts, fresh: i === 0 }), 0);

export const clampMs = (ms, min = 1500, max = 60000) => Math.max(min, Math.min(max, ms));
export const msToFrames = (ms, fps) => Math.max(1, Math.round((ms / 1000) * fps));

/**
 * Lịch hiện cho các mục trên một màn: mục i hiện ở starts[i] (ms), mỗi mục giữ đủ thời gian đọc.
 * lead = thời gian phần đầu (tiêu đề, hiệu ứng vào) trước mục đầu tiên. gap = nhịp giữa hai mục.
 */
export const plan = (texts, { level = "B1", lang = "vi", lead = 400, gap = 0 } = {}) => {
  let t = lead;
  const starts = [];
  texts.forEach((x, i) => {
    starts.push(t);
    t += readMs(x, { lang, level, fresh: i === 0 }) + (i < texts.length - 1 ? gap : 0);
  });
  return { starts, endMs: t };
};

/** Thời gian NÓI một câu (giọng đọc TTS, #106): tiếng Anh ~2,5 từ/giây, tiếng Việt ~4 âm tiết/giây. */
export const SPEAK_RATE = { en: 2.5, vi: 4 };
export const speakMs = (text, lang = "en") => 250 + (count(text) / (SPEAK_RATE[lang] || 2.5)) * 1000;

/**
 * Lịch lời đọc của một cảnh (#106): mỗi câu = max(thời gian nói tiếng Anh, thời gian đọc phụ đề tiếng Việt) + nhịp 300 ms.
 * Trả về [{...line, startMs, endMs}] tính từ đầu cảnh. Khi có mp3 thật, thay bằng độ dài tệp.
 */
// Độ dài mp3 thật (ms) — `audioMs` = { "<slug>/<cảnh>-<câu>": ms }, đọc từ public/audio/dp/durations.dat (#110).
// Có mp3 thì câu dài đúng bằng mp3, chưa có thì ước theo tốc độ đọc.
// Khoảng lặng giữa câu (#110, chống giọng "đều đều"): mp3 đã cắt lặng đầu/cuối ở server, nên mọi khoảng nghỉ do đây quyết định.
// #135: anh thấy ngắt nghỉ hơi lâu → rút nhịp (cũ: same 350, question 650, colon 250, speaker 500, comma 220)
export const PAUSE = { same: 160, question: 380, colon: 160, speaker: 260, comma: 120 };
const pauseAfter = (prev, l) => {
  if (!prev) return 0;
  const end = String(prev.say || "").trim().slice(-1);
  let p = end === "?" ? PAUSE.question : end === ":" ? PAUSE.colon : end === "," ? PAUSE.comma : PAUSE.same;
  if ((prev.who || "") !== (l.who || "")) p = Math.max(p, PAUSE.speaker); // đổi người nói
  return p;
};

export const lineTimeline = (lines = [], { lead = 120, level = "B1", key = null, audioMs = {} } = {}) => {
  let t = lead;
  return lines.map((l, i) => {
    // Nhịp lặng (#106): `wait` (ms) trước câu; tự thêm 1 s sau câu stop:true (tem "Khoan đã!", Đét lăn vào)
    // và 1,1 s trước câu redo đầu tiên (đoạn tua lại), để giọng không đè lên hoạt hình.
    const prev = lines[i - 1];
    t += l.wait || 0;
    if (prev?.stop) t += 1000;
    if (l.phase === "redo" && prev && prev.phase !== "redo") t += 1100;
    if (i > 0) t += pauseAfter(prev, l);
    const real = key ? audioMs[key(l)] : undefined;
    const speak = real != null ? real : speakMs(l.say, l.lang || "en");
    const read = l.sub ? readMs(l.sub, { lang: "vi", level, fresh: false }) * 0.85 : 0;
    // Có mp3 thật: câu dài theo mp3, chỉ kéo thêm tối đa 0,6 s nếu phụ đề tiếng Việt dài cần thời gian đọc
    const dur = real != null ? Math.max(real, Math.min(read, real + 250)) : Math.max(speak, read, 900); // #135: +250 (cũ +600)
    const item = { ...l, startMs: t, endMs: t + dur };
    t += dur;
    return item;
  });
};
