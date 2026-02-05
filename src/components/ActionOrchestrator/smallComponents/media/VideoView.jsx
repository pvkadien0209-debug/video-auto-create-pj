import React, { useState, useEffect, useMemo } from "react";
import { Html5Video, staticFile, continueRender, delayRender } from "remotion";
import {
  useTransition,
  applyTransitionToStyle,
} from "../../utils/transitions/transitionResolver.js";

/**
 * 🎬 VIDEO VIEW - WITH INTELLIGENT SIZING & SMOOTH TRANSITIONS
 * ⭐ Sử dụng centralized transition system
 * ⭐ Hỗ trợ transition loop (infinite)
 */
const VideoView = React.memo(
  ({
    video,
    relativeFrame,
    styCss = {},
    durationInFrames,
    volume = 0,
    loop = false,
    playbackRate = 1,
    objectFit = "contain",
    videoStartFrom = 0,
    videoDuration = null,
    data = {},
    dataAction = {},
    ...props
  }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [loadedVideoSrc, setLoadedVideoSrc] = useState(null);
    const [videoMetadata, setVideoMetadata] = useState(null);
    const [handle] = useState(() => delayRender("Loading video"));

    // Get video path
    const getVideoPath = (videoName) => {
      if (!videoName) return null;
      if (videoName.includes("_")) {
        const prefix = videoName.split("_")[0];
        return `video/${prefix}/${videoName}`;
      }
      return `video/${videoName}`;
    };

    const videoPath = getVideoPath(video);

    // Calculate STATIC startFrom
    const staticStartFrom = useMemo(() => {
      return videoStartFrom;
    }, [videoStartFrom]);

    // Calculate endAt
    const endAt = useMemo(() => {
      if (videoDuration !== null && videoDuration > 0) {
        return videoStartFrom + videoDuration;
      }
      return undefined;
    }, [videoStartFrom, videoDuration]);

    // ⭐ USE TRANSITION HOOK
    const transitionValues = useTransition(
      relativeFrame,
      data,
      dataAction,
      durationInFrames,
      { type: "fadeIn", duration: 30, loop: false }, // default
    );

    // Pre-load video và lấy metadata
    useEffect(() => {
      if (!videoPath) {
        setVideoLoaded(true);
        continueRender(handle);
        return;
      }

      const videoElement = document.createElement("video");
      videoElement.src = staticFile(videoPath);

      videoElement.onloadedmetadata = () => {
        const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;

        setVideoMetadata({
          width: videoElement.videoWidth,
          height: videoElement.videoHeight,
          aspectRatio: aspectRatio,
        });

        console.log(`✅ Video loaded: ${videoPath}`);
        console.log(
          ` 📐 Dimensions: ${videoElement.videoWidth}x${videoElement.videoHeight}`,
        );
        console.log(` 📊 Aspect Ratio: ${aspectRatio.toFixed(3)}`);
        console.log(
          ` 🎭 Transition: ${transitionValues.config.type} (${transitionValues.config.duration} frames, loop: ${transitionValues.config.loop})`,
        );

        if (videoStartFrom > 0) {
          console.log(` ⏩ Seek to: ${videoStartFrom}s`);
        }
        if (typeof endAt === "number") {
          console.log(` ⏸️ End at: ${endAt}s (duration: ${videoDuration}s)`);
        }

        setLoadedVideoSrc(videoElement.src);
        setVideoLoaded(true);
        continueRender(handle);
      };

      videoElement.onerror = () => {
        console.warn(`⚠️ Failed to load video: ${videoPath}`);
        setVideoLoaded(true);
        continueRender(handle);
      };

      return () => {
        videoElement.onloadedmetadata = null;
        videoElement.onerror = null;
      };
    }, [videoPath, handle, videoStartFrom, endAt, videoDuration]);

    // Tính toán kích thước thông minh
    const calculatedDimensions = useMemo(() => {
      if (!videoMetadata) return { width: "100%", height: "auto" };

      const { aspectRatio } = videoMetadata;
      const hasHeight = styCss.height && styCss.height !== "auto";
      const hasWidth = styCss.width && styCss.width !== "100%";

      if (hasHeight && hasWidth) {
        const heightValue = parseFloat(styCss.height);
        const calculatedWidth = heightValue * aspectRatio;
        return {
          width: `${calculatedWidth}px`,
          height: styCss.height,
        };
      }

      if (hasHeight && !hasWidth) {
        const heightValue = parseFloat(styCss.height);
        const calculatedWidth = heightValue * aspectRatio;
        return {
          width: `${calculatedWidth}px`,
          height: styCss.height,
        };
      }

      if (hasWidth && !hasHeight) {
        const widthValue = parseFloat(styCss.width);
        const calculatedHeight = widthValue / aspectRatio;
        return {
          width: styCss.width,
          height: `${calculatedHeight}px`,
        };
      }

      return { width: "100%", height: "auto" };
    }, [videoMetadata, styCss.height, styCss.width]);

    // Visibility checks
    if (relativeFrame < 0 || relativeFrame > durationInFrames) return null;
    if (!videoLoaded || !videoPath || !loadedVideoSrc) return null;

    // ⭐ Container style - Combine với calculated dimensions và transition
    const containerStyle = applyTransitionToStyle(
      {
        ...styCss,
        width: calculatedDimensions.width,
        height: calculatedDimensions.height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      },
      transitionValues,
    );

    // Video style
    const videoStyle = {
      width: "100%",
      height: "100%",
      objectFit: objectFit,
      display: "block",
    };

    return (
      <div style={containerStyle}>
        <Html5Video
          src={loadedVideoSrc}
          style={videoStyle}
          volume={volume}
          muted={volume === 0}
          startFrom={staticStartFrom}
          endAt={endAt}
          loop={loop}
          playbackRate={playbackRate}
          onError={(err) => {
            if (process.env.NODE_ENV === "development") {
              console.warn(`Video playback error [${video}]:`, err.message);
            }
          }}
          {...props}
        />
      </div>
    );
  },
);

VideoView.displayName = "VideoView";

export default VideoView;
