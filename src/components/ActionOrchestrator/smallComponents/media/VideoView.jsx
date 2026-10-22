// src/Components/ActionOrchestrator/smallComponents/media/VideoView.jsx
import React, { useMemo } from "react";
import {
  OffthreadVideo,
  Audio,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Loop,
} from "remotion";
import {
  useTransition,
  applyTransitionToStyle,
} from "../../utils/transitions/transitionResolver.js";
import { secondsToFrames } from "../../utils/timeUtils.js";

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
 *
 * ⏱️ QUY ƯỚC THỜI GIAN (INPUT):
 * - videoStartFrom: GIÂY (vd 3, 5, 2.5) — tự động convert sang frame theo fps composition
 * - videoDuration: GIÂY (vd 3, 5, 2.5) — tự động convert sang frame theo fps composition
 *
 * ⭐ LOOP LÀM ĐẦY SEGMENT: loop mặc định = false (giữ nguyên logic cũ — video
 * gốc/videoDuration ngắn hơn segment thì đứng hình/im lặng sau khi hết).
 * Truyền loop={true} nếu muốn tự lặp lại để làm đầy segment khi
 * video/videoDuration ngắn hơn segment (durationInFrames).
 *
 * ⚠️ QUAN TRỌNG: KHÔNG dùng loop prop thẳng trên OffthreadVideo/Audio khi có
 * kèm startFrom/endAt (trim) — lúc render thật, loop prop kết hợp trim không
 * lặp lại đúng (chỉ phát 1 lần đoạn trim rồi đứng hình/im lặng). Phải bọc
 * bằng <Loop durationInFrames={endAt-startFrom}> để lặp đúng đoạn đã trim
 * cho đến hết segment — xem loopUnitFrames/shouldUseLoopWrapper bên dưới.
 */
const DEFAULT_FADEOUT_FRAMES = 5;

const VideoView = React.memo(
  ({
    video,
    styCss = {},
    durationInFrames,
    volume = 1,
    loop = false, // ⭐ true = tự lặp video để làm đầy segment nếu video/videoDuration ngắn hơn
    playbackRate = 1,
    objectFit = "contain",
    videoStartFrom = 0, // giây
    videoDuration = null, // giây — null = phát NGUYÊN video gốc (không trim), không mặc định cắt 3s
    data = {},
    dataAction = {},
  }) => {
    // ✅ 0-based vì VideoView luôn nằm trong <Sequence from={actionStartFrame}>
    const relativeFrame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // ✅ Video path resolver
    const videoPath = useMemo(() => {
      if (!video) return null;
      if (video.includes("_")) {
        const prefix = video.split("_")[0];
        return `video/${prefix}/${video}`;
      }
      return `video/${video}`;
    }, [video]);

    // ✅ startFrom (giây -> frame) — dùng chung cho cả OffthreadVideo và Audio
    const startFrom = useMemo(
      () => secondsToFrames(videoStartFrom, fps) ?? 0,
      [videoStartFrom, fps],
    );

    // ✅ endAt (giây -> frame) — dùng chung cho cả OffthreadVideo và Audio
    const endAt = useMemo(() => {
      if (videoDuration !== null && videoDuration > 0) {
        const startFrames = secondsToFrames(videoStartFrom, fps) ?? 0;
        const durationFrames = secondsToFrames(videoDuration, fps) ?? 0;
        return startFrames + durationFrames;
      }
      return undefined;
    }, [videoStartFrom, videoDuration, fps]);

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

    // ⭐ LOOP LÀM ĐẦY SEGMENT
    // loop prop thẳng trên OffthreadVideo/Audio KHÔNG lặp đúng khi có kèm
    // startFrom/endAt lúc render thật → phải dùng <Loop> của Remotion, bọc
    // đúng đoạn [startFrom, endAt) và để nó tự lặp cho đến hết Sequence cha.
    // - endAt xác định được (có trim tường minh qua videoDuration) → dùng <Loop>.
    // - endAt không xác định (videoDuration=null/mặc định, phát nguyên video
    //   gốc) → không biết trước độ dài gốc để tính 1 vòng lặp thủ công, đành
    //   dùng loop prop gốc trên OffthreadVideo/Audio — trường hợp KHÔNG trim
    //   thì loop gốc của Remotion hoạt động bình thường (bug loop+trim ở trên
    //   chỉ xảy ra khi có startFrom/endAt).
    const loopUnitFrames =
      endAt !== undefined ? Math.max(1, endAt - startFrom) : null;
    const shouldUseLoopWrapper = loop && loopUnitFrames !== null;

    const mediaContent = (
      <>
        {/* 🖼 Hình ảnh — muted hoàn toàn, chất lượng render cao */}
        <OffthreadVideo
          src={staticFile(videoPath)}
          style={videoStyle}
          muted
          startFrom={startFrom}
          endAt={endAt}
          loop={shouldUseLoopWrapper ? false : loop}
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
            loop={shouldUseLoopWrapper ? false : loop}
            playbackRate={playbackRate}
          />
        )}
      </>
    );

    return (
      <div style={containerStyle}>
        {shouldUseLoopWrapper ? (
          <Loop durationInFrames={loopUnitFrames}>{mediaContent}</Loop>
        ) : (
          mediaContent
        )}
      </div>
    );
  },
);

VideoView.displayName = "VideoView";
export default VideoView;
