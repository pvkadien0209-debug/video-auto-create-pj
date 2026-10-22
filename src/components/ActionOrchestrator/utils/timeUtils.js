// src/Components/ActionOrchestrator/utils/timeUtils.js

/**
 * ⏱️ TIME UTILS — chuẩn hóa input thời gian
 *
 * QUY ƯỚC: mọi thời gian nhập vào (videoStartFrom, videoDuration, delay theo giây, v.v.)
 * đều dùng đơn vị GIÂY (ví dụ: 3, 5, 2.5).
 * Các hàm dưới đây tự convert giây -> frame (đơn vị Remotion thực sự dùng để render/seek).
 */

/**
 * Convert giây -> frame, dựa theo fps của composition.
 * @param {number} seconds - thời gian tính bằng giây (vd: 3, 5, 2.5)
 * @param {number} fps - frame rate của composition (từ useVideoConfig())
 * @returns {number} số frame tương ứng (làm tròn)
 */
export function secondsToFrames(seconds, fps) {
  if (seconds === undefined || seconds === null) return undefined;
  return Math.round(Number(seconds) * fps);
}

/**
 * Convert giây -> mili-giây (dùng cho các chỗ cần ms thay vì frame, vd audio backend/TTS).
 * @param {number} seconds
 * @returns {number}
 */
export function secondsToMs(seconds) {
  if (seconds === undefined || seconds === null) return undefined;
  return Math.round(Number(seconds) * 1000);
}
