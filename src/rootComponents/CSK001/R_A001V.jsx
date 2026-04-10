// R_A001V.jsx
import React, { useState, useEffect } from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Sequence,
  continueRender,
  delayRender,
} from "remotion";
import { getBackgroundForId } from "../../utils/getColorFromID";
import SoundPlay from "../../otherComponent/soundPlay";
import TrungGianXuly from "../../components/ActionOrchestrator/ActionOrchestrator";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const isVideoCode = (code) => Boolean(code && code.endsWith(".mp4"));

const getMediaPath = (code) => {
  if (!code) return null;
  if (isVideoCode(code)) {
    // ✨ .mp4 → /video/...  (code đã chứa .mp4)
    if (code.includes("_")) {
      const prefix = code.split("_")[0];
      return `video/${prefix}/${code}`;
    }
    return `video/khac/${code}`;
  }
  // MP3 bình thường
  if (code.includes("_")) {
    const prefix = code.split("_")[0];
    return `audio/${prefix}/${code}.mp3`;
  }
  return `audio/khac/${code}.mp3`;
};

const getImagePath = (e) => {
  if (!e.img) return null;
  if (e.img.includes("_")) {
    const prefix = e.img.split("_")[0];
    return `assets/${prefix}/${e.img}`;
  }
  return `assets/khac/${e.img}`;
};

// ─── AudioDurationLoader ───────────────────────────────────────────────────────
// Hỗ trợ cả audio và video element

const AudioDurationLoader = ({
  audioPath,
  onDurationLoad,
  index,
  isVideo = false,
}) => {
  const { fps } = useVideoConfig();

  useEffect(() => {
    if (!audioPath) return;

    const src = staticFile(audioPath);

    if (isVideo) {
      // ✨ Dùng video element cho .mp4
      const video = document.createElement("video");
      video.src = src;
      video.preload = "metadata";

      const handleLoaded = () => {
        const durationInFrames = Math.ceil(video.duration * fps);
        onDurationLoad(index, durationInFrames);
        video.remove();
      };
      const handleError = () => {
        console.warn(`Failed to load video metadata: ${audioPath}`);
        onDurationLoad(index, 180);
        video.remove();
      };

      video.addEventListener("loadedmetadata", handleLoaded);
      video.addEventListener("error", handleError);
      return () => {
        video.removeEventListener("loadedmetadata", handleLoaded);
        video.removeEventListener("error", handleError);
        video.remove();
      };
    } else {
      // Audio element như cũ
      const audio = document.createElement("audio");
      audio.src = src;
      audio.preload = "metadata";

      const handleLoadedMetadata = () => {
        const durationInFrames = Math.ceil(audio.duration * fps);
        onDurationLoad(index, durationInFrames);
      };
      const handleError = () => {
        console.warn(`Failed to load audio: ${audioPath}`);
        onDurationLoad(index, 180);
      };

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("error", handleError);
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("error", handleError);
        audio.remove();
      };
    }
  }, [audioPath, index, onDurationLoad, fps, isVideo]);

  return null;
};

// ─── buildFrames helper ────────────────────────────────────────────────────────
// Tách ra để dùng chung cho cả 2 useEffect

const buildFrames = (items, durations, fps) => {
  let accumulatedFrames = 0;
  const tempCodeFrame = [];
  const tempImgFrame = [];

  items.forEach((e, i) => {
    const mediaPath = getMediaPath(e.code);
    const isVid = isVideoCode(e.code);

    // Lấy audio/video duration (frames)
    const mediaDuration = mediaPath ? (durations[i] ?? 180) : null;

    let duration; // tổng duration của segment (frames)
    let soundDuration; // duration SoundPlay chạy (frames)

    if (e.timeFixed && e.timeFixed > 0) {
      // ✨ timeFixed từ data + timePlus (nếu có cả hai)
      const fixedSec = e.timeFixed + (e.timePlus || 0);
      duration = Math.max(1, Math.round(fixedSec * fps));
      // SoundPlay tối đa bằng duration thực của media
      soundDuration = mediaDuration
        ? Math.min(mediaDuration, duration)
        : duration;
    } else if (e.duration) {
      // duration thủ công
      duration = e.duration * fps;
      soundDuration = mediaDuration ?? duration;
    } else if (mediaDuration !== null) {
      // Logic chuẩn: media duration + timePlus
      duration = mediaDuration + Math.round((e.timePlus || 0) * fps);
      soundDuration = mediaDuration;
    } else {
      // Fallback không có code/path
      duration = 180;
      soundDuration = 180;
    }

    // ✨ Với .mp4: SoundPlay dùng SOUNDCHUNG_SpaceSound thay vì code thật
    const effectiveSoundSource = isVid ? "SOUNDCHUNG_SpaceSound" : e.code;

    const imgPath = getImagePath(e);
    tempCodeFrame.push({
      ...e,
      startFrame: accumulatedFrames,
      endFrame: accumulatedFrames + duration,
      soundEndFrame: accumulatedFrames + soundDuration,
      duration,
      effectiveSoundSource, // ✨
    });

    if (imgPath) {
      tempImgFrame.push({
        startFrame: accumulatedFrames,
        endFrame: accumulatedFrames + duration,
        imgPath,
        index: i,
      });
    }

    accumulatedFrames += duration;
  });

  // Merge imgFrame liên tiếp cùng ảnh
  const mergedImgFrame = [];
  let currentGroup = null;
  tempImgFrame.forEach((frame) => {
    if (!currentGroup || currentGroup.imgPath !== frame.imgPath) {
      if (currentGroup) mergedImgFrame.push(currentGroup);
      currentGroup = { ...frame };
    } else {
      currentGroup.endFrame = frame.endFrame;
    }
  });
  if (currentGroup) mergedImgFrame.push(currentGroup);

  return { tempCodeFrame, mergedImgFrame };
};

// ─── FrameCalculator ───────────────────────────────────────────────────────────

const FrameCalculator = ({ items, volume = 2, onDataReady }) => {
  const { fps } = useVideoConfig();
  const [codeFrame, setCodeFrame] = useState([]);
  const [imgFrame, setImgFrame] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [handle] = useState(() => delayRender("Loading audio/video durations"));
  const [durations, setDurations] = useState({});
  const [loadingCount, setLoadingCount] = useState(0);

  const handleDurationLoad = React.useCallback((index, durationInFrames) => {
    setDurations((prev) => ({ ...prev, [index]: durationInFrames }));
    setLoadingCount((prev) => prev + 1);
  }, []);

  // Items cần load media (có code và có path)
  const mediaItems = items.filter((e) => getMediaPath(e.code) !== null);
  const validItemsCount = mediaItems.length;

  // Trường hợp không có item nào cần load media
  useEffect(() => {
    if (validItemsCount !== 0) return;
    const { tempCodeFrame, mergedImgFrame } = buildFrames(items, {}, fps);
    setCodeFrame(tempCodeFrame);
    setImgFrame(mergedImgFrame);
    setIsLoading(false);
    continueRender(handle);
    if (onDataReady) onDataReady(tempCodeFrame, mergedImgFrame);
  }, [validItemsCount, items, handle, fps, onDataReady]);

  // Khi đã load xong tất cả media
  useEffect(() => {
    if (validItemsCount === 0) return;
    if (loadingCount < validItemsCount) return;
    if (!isLoading) return;

    const { tempCodeFrame, mergedImgFrame } = buildFrames(
      items,
      durations,
      fps,
    );
    setCodeFrame(tempCodeFrame);
    setImgFrame(mergedImgFrame);
    setIsLoading(false);
    continueRender(handle);
    if (onDataReady) onDataReady(tempCodeFrame, mergedImgFrame);
  }, [
    loadingCount,
    validItemsCount,
    durations,
    items,
    handle,
    isLoading,
    fps,
    onDataReady,
  ]);

  return (
    <>
      {/* Load media metadata */}
      {isLoading && validItemsCount > 0 && (
        <>
          {items.map((e, i) => {
            const mediaPath = getMediaPath(e.code);
            return mediaPath ? (
              <AudioDurationLoader
                key={"loader-" + i}
                audioPath={mediaPath}
                onDurationLoad={handleDurationLoad}
                index={i}
                isVideo={isVideoCode(e.code)} // ✨
              />
            ) : null;
          })}
        </>
      )}

      {/* SoundPlay: mp4 → SOUNDCHUNG_SpaceSound, mp3 → code thật */}
      {!isLoading && (
        <>
          {codeFrame.map((e, i) => (
            <SoundPlay
              key={"sound-" + i}
              startFrame={e.startFrame}
              endFrame={e.soundEndFrame ?? e.endFrame}
              soundSource={e.effectiveSoundSource} // ✨
              volume={volume}
            />
          ))}
        </>
      )}
    </>
  );
};

// ─── VideoTemplate ─────────────────────────────────────────────────────────────

export const VideoTemplate = ({ item, duration }) => {
  const [codeFrame, setCodeFrame] = useState([]);
  const [imgFrame, setImgFrame] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);
  const [handle] = useState(() => delayRender("⏳ Waiting for fonts..."));

  const handleDataReady = (codeFrameData, imgFrameData) => {
    setCodeFrame(codeFrameData);
    setImgFrame(imgFrameData);
    setIsDataReady(true);
  };

  useEffect(() => {
    document.fonts.ready
      .then(() => continueRender(handle))
      .catch(() => continueRender(handle));
  }, [handle]);

  return (
    <div
      style={{
        position: "relative",
        width: "1080px",
        height: "1920px",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        boxSizing: "border-box",
        lineHeight: 1.4,
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <FrameCalculator
        items={item.data}
        volume={2}
        onDataReady={handleDataReady}
      />
      <Sequence from={0}>
        <div style={{}}>
          {isDataReady && <TrungGianXuly codeFrame={codeFrame} />}
        </div>
      </Sequence>
    </div>
  );
};
