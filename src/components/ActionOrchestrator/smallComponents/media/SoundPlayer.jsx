// src/Components/ActionOrchestrator/smallComponents/media/SoundPlayer.jsx
import React from "react";
import { Html5Audio, staticFile, Sequence, useVideoConfig } from "remotion";
import { getAudioPath as getAudioPathUtil } from "../../../../utils/pathResolver.js";
import { secondsToFrames } from "../../utils/timeUtils.js";
/**
 * 🔊 SOUND PLAYER COMPONENT
 * Phát âm thanh cho một segment cụ thể
 * ⭐ Hỗ trợ loop on/off
 *  * ⏱️ QUY ƯỚC THỜI GIAN (INPUT):
 * - AudioStartFrom: GIÂY (vd 3, 5, 2.5) — thời điểm bắt đầu trích trong FILE AUDIO GỐC,
 *   tự động convert sang frame theo fps composition (dùng làm trimBefore)
 * - AudioDuration: GIÂY (vd 3, 5, 2.5) — khoảng thời gian audio được phát kể từ AudioStartFrom,
 *   tự động convert sang frame theo fps composition (dùng làm trimAfter)
 *
 * ⭐ trueLink: mặc định false (giữ nguyên hành vi cũ 100%). Khi truyền
 * trueLink={true} (dùng bởi action "soundPlayTrueLink"), vẫn dò thư mục
 * theo prefix y hệt bình thường (audio/<prefix>/... hoặc audio/Khac/...),
 * CHỈ khác là KHÔNG tự ép thêm ".mp3" vào cuối — dùng đúng đuôi file đã có
 * sẵn trong soundSource. Ví dụ soundSource = "a_001.m4a" → dùng
 * "audio/a/a_001.m4a" (không bị đổi/thêm thành .mp3).
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
  trueLink = false, // ⭐ true = dùng nguyên soundSource, không thêm/bớt gì
}) => {
  const { fps } = useVideoConfig();

  // Lấy đường dẫn audio
  const getAudioPath = () => {
    if (!soundSource) return null;

    // Nếu soundSource là object có code
    if (typeof soundSource === "object" && soundSource.code) {
      return getAudioPathUtil(soundSource);
    }

    if (typeof soundSource !== "string") return null;

    // ⭐ trueLink: vẫn dò thư mục theo prefix như bình thường, chỉ khác là
    // KHÔNG tự ép thêm ".mp3" — dùng đúng đuôi đã có sẵn trong soundSource.
    if (trueLink) {
      if (soundSource.includes("_")) {
        const prefix = soundSource.split("_")[0];
        return `audio/${prefix}/${soundSource}`;
      } else {
        return `audio/Khac/${soundSource}`;
      }
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

  // ⏱️ Convert AudioStartFrom / AudioDuration (giây) sang frame theo fps composition
  const trimBeforeFrames = secondsToFrames(AudioStartFrom, fps);
  const trimAfterFrames =
    trimBeforeFrames + secondsToFrames(AudioDuration, fps);

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
          trimBefore={trimBeforeFrames} // ⭐ AudioStartFrom (giây → frame)
          trimAfter={trimAfterFrames} // ⭐ AudioStartFrom + AudioDuration (giây → frame)
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
