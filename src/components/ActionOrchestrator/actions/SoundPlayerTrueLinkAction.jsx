// src/Components/ActionOrchestrator/actions/SoundPlayerTrueLinkAction.jsx
import React from "react";
import SoundPlayer from "../smallComponents/media/SoundPlayer.jsx";

/**
 * 🔊 SOUND PLAYER TRUE LINK ACTION
 * Giống soundPlayerAction, nhưng dùng ĐÚNG NGUYÊN VĂN soundSource làm đường
 * dẫn audio — KHÔNG dò thư mục theo prefix, KHÔNG tự thêm ".mp3". Dùng khi
 * cần chỉ định thẳng file, ví dụ soundSource = "a_001.m4a" hoặc
 * "audio/nhacnen/nhacnen_vuituoi.mp3".
 *
 * cmd: "soundPlayTrueLink"
 */
function SoundPlayerTrueLinkAction({ data }) {
  const { action, item, actionStartFrame, actionEndFrame } = data;

  // ✅ Lấy sound source từ action hoặc item
  const soundSource =
    action.soundSource || item.soundSource || action.sound || item.sound;
  // ✅ Lấy AudioStartFrom từ action hoặc item
  const audioStartFrom = action.AudioStartFrom ?? item.AudioStartFrom ?? 0;
  // ✅ Lấy AudioDuration từ action hoặc item
  const audioDuration =
    action.AudioDuration ??
    item.AudioDuration ??
    (actionEndFrame - actionStartFrame) / 30; // Default: duration = endFrame - startFrame (in seconds)
  if (!soundSource) return null;

  return (
    <SoundPlayer
      startFrame={actionStartFrame}
      endFrame={actionEndFrame}
      sound={action.sound !== false} // Default: true
      soundSource={soundSource}
      volume={action.volume ?? 1}
      playbackRate={action.playbackRate ?? 1}
      loop={action.loop ?? false}
      showInTimeline={action.showInTimeline ?? false}
      AudioStartFrom={audioStartFrom}
      AudioDuration={audioDuration}
      trueLink // ⭐ Điểm khác biệt duy nhất so với SoundPlayerAction
    />
  );
}

export default SoundPlayerTrueLinkAction;
export { SoundPlayerTrueLinkAction };
