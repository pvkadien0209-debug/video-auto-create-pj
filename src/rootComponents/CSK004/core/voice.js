// voice.js — #138 Hai kho giọng tách riêng, ưu tiên Kokoro:
//   public/audio/kokoro/<bài>/<cảnh>-<câu>.mp3 + public/audio/kokoro/durations.dat   ← 3-tao-giong-kokoro.bat
//   public/audio/dp/<bài>/<cảnh>-<câu>.mp3     + public/audio/dp/durations.dat       ← Google (1-chep-audio.bat)
// Mỗi video dùng MỘT giọng cho cả bài (không trộn câu Kokoro với câu Google):
//   1) kịch bản ép: audio.giong = "kokoro" | "google"
//   2) Kokoro đủ mọi câu → Kokoro;  3) Google đủ mọi câu → Google;  4) bên nào nhiều câu hơn (hoà → Kokoro).
export const VOICE_DIRS = { kokoro: "audio/kokoro", google: "audio/dp" };

const codesOf = (script) => {
  const slug = script.unit?.slug;
  return slug ? script.scenes.flatMap((s) => (s.lines || []).map((l) => `${slug}/${s.id}-${l.id}`)) : [];
};

/** bundle = { kokoro: {mã: ms}, google: {mã: ms} } (bản cũ: một bảng phẳng = Google). */
export const pickVoice = (script, bundle = {}) => {
  const b = bundle && (bundle.kokoro || bundle.google) ? bundle : { google: bundle || {} };
  const codes = codesOf(script);
  const n = (m) => codes.filter((c) => (m || {})[c] != null).length;
  const k = n(b.kokoro), g = n(b.google), all = codes.length;
  const want = script.audio?.giong;
  const src = want === "kokoro" || want === "google" ? want
    : all && k === all ? "kokoro" : all && g === all ? "google" : k >= g ? "kokoro" : "google";
  return { src, audioMs: b[src] || {}, dir: VOICE_DIRS[src] };
};

// #159: chỉ giữ độ dài các câu CỦA BÀI NÀY. calculateMetadata trả audioMs vào props của từng video;
//   để cả bảng (~800 KB) thì ~490 video × 800 KB ≈ 400 MB props → getCompositions đứng rất lâu sau bước đóng gói.
export const trimBundle = (script, bundle = {}) => {
  const codes = codesOf(script);
  const pick = (m) => Object.fromEntries(codes.filter((c) => (m || {})[c] != null).map((c) => [c, m[c]]));
  return { kokoro: pick(bundle.kokoro), google: pick(bundle.google) };
};
