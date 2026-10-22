import React from "react";
import { Html5Audio, staticFile, Sequence } from "remotion";

/**
 * Component phát âm thanh
 * ✅ Updated với Html5Audio
 * ⭐ trueLink: mặc định false (giữ nguyên hành vi cũ). Khi true, vẫn dò thư
 * mục theo prefix y hệt bình thường, CHỈ khác là KHÔNG tự ép thêm ".mp3" —
 * dùng đúng đuôi file đã có sẵn trong soundSource (vd .m4a).
 */
function SoundPlay({
  startFrame = 30,
  endFrame = 90,
  sound = true,
  soundSource,
  volume = 1,
  playbackRate = 1,
  showInTimeline = false,
  trueLink = false, // ⭐ true = dùng nguyên soundSource, không thêm/bớt gì
}) {
  // Xác định đường dẫn audio dựa trên soundSource
  const getAudioPath = () => {
    if (!soundSource) return null;

    // ⭐ trueLink: vẫn dò thư mục theo prefix như bình thường, chỉ khác là
    // KHÔNG tự ép thêm ".mp3" — dùng đúng đuôi đã có sẵn trong soundSource.
    if (trueLink) {
      if (soundSource.includes("_")) {
        const AAA = soundSource.split("_")[0];
        return `audio/${AAA}/${soundSource}`;
      } else {
        return `audio/Khac/${soundSource}`;
      }
    }

    if (soundSource.includes("_")) {
      // Nếu có "_", split và lấy phần đầu tiên làm thư mục
      const AAA = soundSource.split("_")[0];
      return `audio/${AAA}/${soundSource}.mp3`;
    } else {
      // Nếu không có "_", đặt vào thư mục "Khac"
      return `audio/Khac/${soundSource}.mp3`;
    }
  };

  const audioPath = getAudioPath();

  return (
    <div style={{ display: "none" }}>
      {audioPath && sound ? (
        <Sequence from={startFrame} durationInFrames={endFrame - startFrame}>
          <Html5Audio
            src={staticFile(audioPath)}
            volume={volume}
            playbackRate={playbackRate}
            showInTimeline={showInTimeline}
            onError={(err) => {
              if (process.env.NODE_ENV === "development") {
                console.warn(`Audio error [${soundSource}]:`, err.message);
              }
            }}
          />
        </Sequence>
      ) : null}
    </div>
  );
}

export default SoundPlay;
