// src/Components/ActionOrchestrator/actions/VideoViewAction.jsx
import React from "react";
import { Sequence } from "remotion";
import { createPortal } from "react-dom";
import VideoView from "../smallComponents/media/VideoView.jsx";
import { mergeStyles } from "../utils/cssOverrideManager.js";

/**
 * 🎬 VIDEO VIEW ACTION - COMPLETE VERSION
 *
 * FEATURES:
 * ✅ Video seek (videoStartFrom, videoDuration)
 * ✅ Smart sizing (auto width/height)
 * ✅ Simplified audio (volume only, default = 0)
 * ✅ Transform support
 * ✅ Portal rendering (toID)
 * ✅ Relative frame (video bắt đầu từ frame 0 nội bộ)
 *
 * AUDIO:
 * - volume: 0-1 (default: 0 = muted)
 *
 * EXAMPLES:
 *
 * 1. Background muted (default):
 * {
 *   cmd: "videoView",
 *   video: "bg.mp4",
 *   ToEndFrame: true,
 * }
 *
 * 2. Video với âm thanh:
 * {
 *   cmd: "videoView",
 *   video: "clip.mp4",
 *   volume: 0.8,
 *   videoStartFrom: 30,
 *   videoDuration: 15
 * }
 *
 * 3. Delayed video:
 * {
 *   cmd: "videoView",
 *   video: "video.mp4",
 *   delay: 40,
 *   actionDuration: 120,
 *   // Video bắt đầu tại frame tổng 40, chạy từ frame nội bộ 0→120
 * }
 */
function VideoViewAction({ data }) {
  const {
    action,
    item,
    frame,
    actionStartFrame,
    actionEndFrame,
    cssOverrides,
    defaultTextStyle,
    className,
    id,
  } = data;

  // ✅ Lấy video
  const video = action.video || item.video || data.video;
  if (!video) return null;

  // ✅ Merge styles
  const mergedStyle = mergeStyles(
    action,
    item,
    defaultTextStyle,
    className,
    id,
    cssOverrides,
  );

  // ⭐ Tính duration cho Sequence
  const durationInFrames = actionEndFrame - actionStartFrame;

  // ⭐ FIXED: Tính relative frame (frame nội bộ từ 0)
  const relativeFrame = frame - actionStartFrame;

  // ⭐ Extract props
  const videoStartFrom = action.videoStartFrom ?? 0;
  const videoDuration = action.videoDuration ?? null;
  const volume = action.volume ?? 0; // ⭐ DEFAULT = 0 (MUTED)

  // Debug log (optional)
  if (process.env.NODE_ENV === "development") {
    console.log(`🎬 VideoViewAction: ${video}`, {
      frameTổng: frame,
      actionStartFrame,
      actionEndFrame,
      relativeFrame,
      durationInFrames,
    });
  }

  // ⭐ Video content với Sequence
  const videoContent = (
    <Sequence
      from={actionStartFrame}
      durationInFrames={durationInFrames}
      name={`video-${video}-${videoStartFrom}s`}
    >
      <VideoView
        video={video}
        relativeFrame={relativeFrame} // ⭐ Pass relative frame
        styCss={mergedStyle}
        durationInFrames={durationInFrames} // ⭐ Pass duration
        volume={volume}
        loop={action.loop ?? false}
        playbackRate={action.playbackRate ?? 1}
        objectFit={action.objectFit || "contain"}
        videoStartFrom={videoStartFrom}
        videoDuration={videoDuration}
        data={data}
        dataAction={action}
      />
    </Sequence>
  );

  // ⭐ Nếu có toID, dùng Portal
  if (action.toID) {
    const targetElement = document.getElementById(action.toID);
    if (!targetElement) {
      console.warn(`⚠️ Element with ID "${action.toID}" not found`);
      return null;
    }
    return createPortal(videoContent, targetElement);
  }

  // ⭐ Render bình thường
  return videoContent;
}

export default VideoViewAction;
