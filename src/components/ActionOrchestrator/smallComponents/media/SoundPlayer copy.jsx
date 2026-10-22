// src/Components/ActionOrchestrator/smallComponents/media/SoundPlayer.jsx
import React from "react";
import { Html5Audio, staticFile, Sequence } from "remotion";
import { getAudioPath as getAudioPathUtil } from "../../../../utils/pathResolver.js";
import { secondsToFrames } from "../../utils/timeUtils.js";
/**
 * 🔊 SOUND PLAYER COMPONENT
 * Phát âm thanh cho một segment cụ thể
 * ⭐ Hỗ trợ loop on/off
 *  * ⏱️ QUY ƯỚC THỜI GIAN (INPUT):
 * - AudioStartFrom: GIÂY (vd 3, 5, 2.5) — tự động convert sang frame theo fps composition
 * - AudioDuration: GIÂY (vd 3, 5, 2.5) — tự động convert sang frame theo fps composition
 */
const SoundPlayer = ({
  startFrame = 30,
  endFrame = 90,
  sound = true,
  soundSource,
  volume = 1,
  playbackRate = 1,
  loop = false, // ⭐ Thêm loop parameter (default: false)
  showInTimeline = false,
  AudioStartFrom = 0, // giây
  AudioDuration = 3, // giây
}) => {
  // Lấy đường dẫn audio
  const getAudioPath = () => {
    if (!soundSource) return null;

    // Nếu soundSource là object có code
    if (typeof soundSource === "object" && soundSource.code) {
      return getAudioPathUtil(soundSource);
    }

    // Nếu soundSource là string
    if (soundSource.includes("_")) {
      const prefix = soundSource.split("_")[0];
      return `audio/${prefix}/${soundSource}.mp3`;
    } else {
      return `audio/Khac/${soundSource}.mp3`;
    }
  };

  const audioPath = getAudioPath();

  if (!audioPath || !sound) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
      }}
    >
      <Sequence from={startFrame} durationInFrames={endFrame - startFrame}>
        <Html5Audio
          src={staticFile(audioPath)}
          volume={volume}
          playbackRate={playbackRate}
          loop={loop} // ⭐ Pass loop prop
          showInTimeline={showInTimeline}
          onError={(err) => {
            if (process.env.NODE_ENV === "development") {
              console.warn(`Sound playback error for ${audioPath}:`, err);
            }
          }}
        />
      </Sequence>
    </div>
  );
};

export default SoundPlayer;
