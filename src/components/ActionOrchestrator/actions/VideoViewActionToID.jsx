// src/Components/ActionOrchestrator/actions/VideoViewAction.jsx
import React from "react";
import { Sequence } from "remotion";
import { createPortal } from "react-dom";
import VideoView from "../smallComponents/media/VideoView.jsx";
import { mergeStyles } from "../utils/cssOverrideManager.js";
import { useDomElementByID } from "../utils/useDomElementByID.js";

/**
 * 🎬 VIDEO VIEW ACTION
 *
 * FEATURES:
 * ✅ Video seek (videoStartFrom, videoDuration) — ĐƠN VỊ: GIÂY (vd 3, 5, 2.5)
 * ✅ Smart sizing (auto width/height)
 * ✅ Audio đồng bộ tuyệt đối — OffthreadVideo + Audio cùng Sequence
 * ✅ Portal rendering (toID)
 * ✅ delay/ChangeStartFrame không làm lệch audio/visual
 *
 * ⏱️ QUY ƯỚC THỜI GIAN:
 * - videoStartFrom: giây (vd 30 = 30 giây), tự động convert sang frame theo fps
 * - videoDuration: giây (vd 15 = 15 giây), tự động convert sang frame theo fps.
 *   Mặc định null = KHÔNG trim, phát nguyên video gốc từ videoStartFrom.
 *
 * AUDIO:
 * - volume: 0-1 (default: 0 = muted, không load audio)
 *
 * ⭐ LOOP LÀM ĐẦY SEGMENT:
 * - loop mặc định = false (giữ nguyên logic cũ — video ngắn hơn segment thì
 *   đứng hình/trống sau khi hết, KHÔNG tự lặp).
 * - Set loop: true trong data nếu muốn video/videoDuration ngắn hơn segment
 *   thì tự lặp lại để làm đầy segment.
 *
 * EXAMPLES:
 *
 * 1. Background muted:
 * { cmd: "videoView", video: "bg.mp4", ToEndFrame: true }
 *
 * 2. Video có âm thanh, seek từ giây 30, phát 15 giây:
 * { cmd: "videoView", video: "clip.mp4", volume: 0.8, videoStartFrom: 30, videoDuration: 15 }
 *
 * 3. Delayed video — audio và visual cùng bắt đầu:
 * { cmd: "videoView", video: "video.mp4", delay: 40, actionDuration: 120 }
 */
function VideoViewAction({ data }) {
  const {
    action,
    item,
    actionStartFrame,
    actionEndFrame,
    cssOverrides,
    defaultTextStyle,
    className,
    id,
  } = data;

  // ⚡ Có retry qua requestAnimationFrame nếu element đích chưa kịp mount
  // (giống Transitiontoid.jsx) — gọi TRƯỚC early-return bên dưới để tuân thủ
  // Rules of Hooks. Xem chi tiết trong useDomElementByID.js.
  const targetElement = useDomElementByID(action.toID);

  const video = action.video || item.video || data.video;
  if (!video) return null;
  const mergedStyle = mergeStyles(
    action,
    item,
    defaultTextStyle,
    className,
    id,
    cssOverrides,
  );
  const durationInFrames = actionEndFrame - actionStartFrame;
  // ⏱️ Cả hai đều nhập bằng GIÂY — VideoView sẽ tự convert sang frame
  const videoStartFrom = action.videoStartFrom ?? 0; // giây
  // ⭐ Mặc định null = phát NGUYÊN video gốc (không tự trim còn 3s như trước).
  // Chỉ trim khi data chỉ định videoDuration tường minh.
  const videoDuration = action.videoDuration ?? null; // giây
  const volume = action.volume ?? 1;
  // ✅ Sequence bắt đầu tại actionStartFrame (đã bao gồm delay/ChangeStartFrame)
  // VideoView dùng useCurrentFrame() bên trong → tự động 0-based
  // OffthreadVideo và Audio đều bắt đầu tại frame 0 nội bộ → không bao giờ lệch
  const videoContent = (
    <Sequence
      from={actionStartFrame}
      durationInFrames={durationInFrames}
      name={`video-${video}-${videoStartFrom}s`}
    >
      <VideoView
        video={video}
        styCss={mergedStyle}
        durationInFrames={durationInFrames}
        volume={volume}
        // ⭐ loop mặc định false (đúng logic cũ). Set loop:true trong data để
        // tự lặp video làm đầy segment khi video/videoDuration ngắn hơn segment.
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
  if (action.toID) {
    if (!targetElement) return null;
    return createPortal(videoContent, targetElement);
  }
  return videoContent;
}

export default VideoViewAction;
