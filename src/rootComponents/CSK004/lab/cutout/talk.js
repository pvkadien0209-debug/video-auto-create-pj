// talk.js — mấp máy miệng (lip flap). Hai nguồn: (1) dãy "đang nói" giả lập từ câu chữ, (2) biên độ mp3 thật.
import { random } from "remotion";
import { visualizeAudio } from "@remotion/media-utils";

/** Chia câu thành âm tiết, gán khung bắt đầu. Dấu phẩy/chấm = nghỉ. Trả về [{w, at, len}]. */
export const fakeTalk = (text, start = 0, { syl = 8, comma = 10 } = {}) => {
  const out = [];
  let t = start;
  for (const w of text.split(/\s+/).filter(Boolean)) {
    out.push({ w, at: t, len: syl });
    t += syl + (/[,;:]$/.test(w) ? comma : /[.!?]$/.test(w) ? comma * 1.5 : 0);
  }
  return out;
};

/** Độ mở miệng 0..1 tại khung `frame` theo dãy âm tiết giả lập (mỗi âm tiết mở rồi khép). */
export const mouthFromTalk = (talk, frame) => {
  const s = talk.find((x) => frame >= x.at && frame < x.at + x.len);
  if (!s) return 0;
  const k = 0.55 + 0.45 * random(`am-${s.w}-${s.at}`); // âm tiết to nhỏ khác nhau
  return k * Math.sin((Math.PI * (frame - s.at)) / s.len);
};

/** Từ đã nói xong tới khung `frame` (để tô phụ đề theo lời). */
export const spokenCount = (talk, frame) => talk.filter((x) => frame >= x.at).length;

/** Cách 2 — theo mp3 thật (chưa chạy thử trong lab vì chưa có tệp giọng):
 *   const audio = useAudioData(staticFile(`audio/dp/${slug}/${code}.mp3`));
 *   const open = audio ? mouthFromAudio(audio, frame - startFrame, fps) : 0;
 *  Lấy trung bình các dải tần thấp–giữa (giọng nói), nhân hệ số, kẹp 0..1. */
export const mouthFromAudio = (audioData, frame, fps, gain = 6) => {
  if (!audioData || frame < 0) return 0;
  const bins = visualizeAudio({ audioData, frame, fps, numberOfSamples: 32, optimizeFor: "speed" });
  const voice = bins.slice(1, 10).reduce((a, b) => a + b, 0) / 9; // bỏ dải 0 (ù), lấy dải giọng
  return Math.min(1, voice * gain);
};

/** Lượng tử hoá kiểu phim hoạt hình cũ: 3 hình miệng (khép / hé / mở to) thay vì mở trơn. */
export const mouthShape = (open) => (open < 0.15 ? 0 : open < 0.55 ? 1 : 2);
