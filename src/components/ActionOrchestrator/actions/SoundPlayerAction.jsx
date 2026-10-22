// src/Components/ActionOrchestrator/actions/SoundPlayerAction.jsx
import React from "react";
import SoundPlayer from "../smallComponents/media/SoundPlayer.jsx";

/**
 * 🔊 SOUND PLAYER ACTION
 * Phát âm thanh với timing tùy chỉnh
 */
function SoundPlayerAction({ data }) {
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
      loop={action.loop ?? false} // ⭐ Default: false
      showInTimeline={action.showInTimeline ?? false}
      AudioStartFrom={audioStartFrom}
      AudioDuration={audioDuration}
    />
  );
}

export default SoundPlayerAction;
export { SoundPlayerAction };
