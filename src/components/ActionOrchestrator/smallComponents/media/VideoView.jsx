// src/Components/ActionOrchestrator/smallComponents/media/VideoView.jsx
import React, { useMemo } from "react";
import {
  OffthreadVideo,
  Audio,
  staticFile,
  useCurrentFrame,
  interpolate,
} from "remotion";
import {
  useTransition,
  applyTransitionToStyle,
} from "../../utils/transitions/transitionResolver.js";

/**
 * 🎬 VIDEO VIEW - OffthreadVideo (muted) + Audio riêng biệt
 *
 * ✅ Tách hình ảnh và âm thanh để kiểm soát độc lập
 * ✅ useCurrentFrame() — 0-based trong Sequence, không nhận relativeFrame prop
 * ✅ OffthreadVideo: chất lượng render cao hơn Html5Video
 * ✅ Audio: đồng bộ tuyệt đối với visual vì cùng Sequence
 * ✅ volume = 0 → không render Audio component (không load audio)
 * ✅ Smart sizing giữ nguyên qua styCss
 * ✅ Transition + fadeOut system giữ nguyên
 */
const DEFAULT_FADEOUT_FRAMES = 5;

const VideoView = React.memo(
  ({
    video,
    styCss = {},
    durationInFrames,
    volume = 1,
    loop = false,
    playbackRate = 1,
    objectFit = "contain",
    videoStartFrom = 0,
    videoDuration = null,
    data = {},
    dataAction = {},
  }) => {
    // ✅ 0-based vì VideoView luôn nằm trong <Sequence from={actionStartFrame}>
    const relativeFrame = useCurrentFrame();

    // ✅ Video path resolver
    const videoPath = useMemo(() => {
      if (!video) return null;
      if (video.includes("_")) {
        const prefix = video.split("_")[0];
        return `video/${prefix}/${video}`;
      }
      return `video/${video}`;
    }, [video]);

    // ✅ startFrom (giây) — dùng chung cho cả OffthreadVideo và Audio
    const startFrom = videoStartFrom;

    // ✅ endAt (giây) — dùng chung cho cả OffthreadVideo và Audio
    const endAt = useMemo(() => {
      if (videoDuration !== null && videoDuration > 0) {
        return videoStartFrom + videoDuration;
      }
      return undefined;
    }, [videoStartFrom, videoDuration]);

    // ✅ Transition type
    const isTransitionNone = useMemo(() => {
      const t = dataAction.transition ?? data.transition ?? "fadeIn";
      return String(t).toLowerCase() === "none";
    }, [dataAction.transition, data.transition]);

    // ✅ FadeOut frames
    const fadeOutFrames = useMemo(() => {
      return (
        dataAction.fadeOutFrames ??
        data.fadeOutFrames ??
        dataAction.fadeFrames ??
        data.fadeFrames ??
        DEFAULT_FADEOUT_FRAMES
      );
    }, [
      dataAction.fadeOutFrames,
      data.fadeOutFrames,
      dataAction.fadeFrames,
      data.fadeFrames,
    ]);

    // ✅ FadeOut opacity
    const fadeOutOpacity = useMemo(() => {
      if (isTransitionNone || fadeOutFrames <= 0) return 1;
      if (relativeFrame > durationInFrames - fadeOutFrames) {
        return interpolate(
          relativeFrame,
          [durationInFrames - fadeOutFrames, durationInFrames],
          [1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
      }
      return 1;
    }, [isTransitionNone, fadeOutFrames, relativeFrame, durationInFrames]);

    // ✅ Transition hook
    const transitionValues = useTransition(
      relativeFrame,
      data,
      dataAction,
      durationInFrames,
      { type: "fadeIn", duration: 30, loop: false },
    );

    if (!videoPath) return null;
    if (relativeFrame < 0 || relativeFrame > durationInFrames) return null;

    // ✅ Container style với transition
    const transitionedStyle = applyTransitionToStyle(
      {
        ...styCss,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      },
      transitionValues,
    );

    const containerStyle = {
      ...transitionedStyle,
      opacity:
        (transitionedStyle.opacity !== undefined
          ? transitionedStyle.opacity
          : 1) * fadeOutOpacity,
    };

    const videoStyle = {
      width: "100%",
      height: "100%",
      objectFit: objectFit,
      display: "block",
    };

    return (
      <div style={containerStyle}>
        {/* 🖼 Hình ảnh — muted hoàn toàn, chất lượng render cao */}
        <OffthreadVideo
          src={staticFile(videoPath)}
          style={videoStyle}
          muted
          startFrom={startFrom}
          endAt={endAt}
          loop={loop}
          playbackRate={playbackRate}
          onError={(err) => {
            if (process.env.NODE_ENV === "development") {
              console.warn(`Video error [${video}]:`, err);
            }
          }}
        />

        {/* 🔊 Audio — chỉ render khi volume > 0, dùng cùng src và startFrom */}
        {volume > 0 && (
          <Audio
            src={staticFile(videoPath)}
            volume={volume}
            startFrom={startFrom}
            endAt={endAt}
            loop={loop}
            playbackRate={playbackRate}
          />
        )}
      </div>
    );
  },
);

VideoView.displayName = "VideoView";
export default VideoView;
