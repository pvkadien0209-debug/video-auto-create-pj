import React, { useState, useEffect, useMemo } from "react";
import {
  staticFile,
  continueRender,
  delayRender,
  useCurrentFrame,
  interpolate,
} from "remotion";
import {
  useAnimations,
  getAnimationStyle,
} from "../../utils/animations/animationResolver.js";
import {
  useTransition,
  applyTransitionToStyle,
} from "../../utils/transitions/transitionResolver.js";

/**
 * Component hiển thị hình ảnh với pre-loading, custom styling và smooth transitions
 *
 * ⭐ FADE LOGIC (MỚI):
 * - transition === "none"       → KHÔNG fadeIn, KHÔNG fadeOut
 * - transition === "fadein"     → fadeIn do transitionResolver, auto fadeOut (default 15f)
 * - transition === "fadeout"    → fadeOut do transitionResolver, auto fadeIn (default 15f)
 * - transition !== "none" khác  → Auto fadeIn 15f + fadeOut 15f
 *
 * ⭐ Override fade frames qua:
 *   dataAction.fadeInFrames / data.fadeInFrames
 *   dataAction.fadeOutFrames / data.fadeOutFrames
 *   dataAction.fadeFrames / data.fadeFrames (apply cho cả hai nếu không set riêng)
 *
 * ⭐ Hỗ trợ transition loop (infinite)
 * ⭐ Opacity cuối = baseFadeOpacity × transitionOpacity
 */

// ⭐ Default fade duration (frames)
const DEFAULT_FADE_FRAMES = 15;

const ImageView = ({
  img,
  frame,
  styCss = {},
  startFrame = 30,
  endFrame = 90,
  imgSize = "800px",
  fps = 30,
  data = {},
  dataAction = {},
}) => {
  const currentFrame = useCurrentFrame();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadedImageSrc, setLoadedImageSrc] = useState(null);
  const [handle] = useState(() => delayRender("Loading image"));

  // Lấy id/class từ dataAction hoặc data
  const elementId = dataAction.id || data.id;
  const elementClass = dataAction.className || data.className;

  // Lấy animations từ data
  const animations = dataAction.animations || data.animations || [];
  const animationStyles = useAnimations(animations);

  // ⭐ Resolve transition type
  const resolvedTransitionType = useMemo(() => {
    if (dataAction.transition !== undefined) return dataAction.transition;
    if (data.transition !== undefined) return data.transition;
    return "none"; // default cho ImageView
  }, [dataAction.transition, data.transition]);

  // ⭐ Normalize transition type (lowercase for comparison)
  const normalizedTransition = useMemo(() => {
    if (
      resolvedTransitionType === null ||
      resolvedTransitionType === undefined
    ) {
      return "none";
    }
    return String(resolvedTransitionType).toLowerCase();
  }, [resolvedTransitionType]);

  // ⭐ Determine fade behavior based on transition type
  const { shouldFadeIn, shouldFadeOut } = useMemo(() => {
    switch (normalizedTransition) {
      case "none":
        // transition === "none" → KHÔNG fadeIn, KHÔNG fadeOut
        return { shouldFadeIn: false, shouldFadeOut: false };

      case "fadein":
        // transition === "fadein" → fadeIn do transitionResolver xử lý
        // → auto thêm fadeOut (mặc định)
        return { shouldFadeIn: false, shouldFadeOut: true };

      case "fadeout":
        // transition === "fadeout" → fadeOut do transitionResolver xử lý
        // → auto thêm fadeIn (mặc định)
        return { shouldFadeIn: true, shouldFadeOut: false };

      default:
        // Bất kỳ transition khác (zoomIn, slideLeft, etc.)
        // → Auto thêm fadeIn 15f + fadeOut 15f
        return { shouldFadeIn: true, shouldFadeOut: true };
    }
  }, [normalizedTransition]);

  // ⭐ Resolve fade frame counts (cho phép override riêng fadeIn/fadeOut)
  const fadeInFrames = useMemo(() => {
    if (dataAction.fadeInFrames !== undefined) return dataAction.fadeInFrames;
    if (data.fadeInFrames !== undefined) return data.fadeInFrames;
    if (dataAction.fadeFrames !== undefined) return dataAction.fadeFrames;
    if (data.fadeFrames !== undefined) return data.fadeFrames;
    return DEFAULT_FADE_FRAMES;
  }, [
    dataAction.fadeInFrames,
    data.fadeInFrames,
    dataAction.fadeFrames,
    data.fadeFrames,
  ]);

  const fadeOutFrames = useMemo(() => {
    if (dataAction.fadeOutFrames !== undefined) return dataAction.fadeOutFrames;
    if (data.fadeOutFrames !== undefined) return data.fadeOutFrames;
    if (dataAction.fadeFrames !== undefined) return dataAction.fadeFrames;
    if (data.fadeFrames !== undefined) return data.fadeFrames;
    return DEFAULT_FADE_FRAMES;
  }, [
    dataAction.fadeOutFrames,
    data.fadeOutFrames,
    dataAction.fadeFrames,
    data.fadeFrames,
  ]);

  // Logic lấy image path
  const getImagePath = (imgName) => {
    if (!imgName) return null;
    if (imgName.includes("_")) {
      const prefix = imgName.split("_")[0];
      return `assets/${prefix}/${imgName}`;
    } else {
      return `assets/khac/${imgName}`;
    }
  };

  const imgPath = getImagePath(img);

  // ⭐ Calculate relative frame for transition
  const relativeFrame = useMemo(() => {
    return frame - startFrame;
  }, [frame, startFrame]);

  const durationInFrames = useMemo(() => {
    return endFrame - startFrame;
  }, [endFrame, startFrame]);

  // ⭐ BASE FADE OPACITY
  const baseFadeOpacity = useMemo(() => {
    const totalFrames = durationInFrames;
    let opacity = 1;

    // ⭐ FadeIn: chỉ khi shouldFadeIn === true
    if (shouldFadeIn && fadeInFrames > 0 && relativeFrame < fadeInFrames) {
      opacity = interpolate(relativeFrame, [0, fadeInFrames], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }

    // ⭐ FadeOut: chỉ khi shouldFadeOut === true
    if (
      shouldFadeOut &&
      fadeOutFrames > 0 &&
      relativeFrame > totalFrames - fadeOutFrames
    ) {
      const fadeOutOpacity = interpolate(
        relativeFrame,
        [totalFrames - fadeOutFrames, totalFrames],
        [1, 0],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      );
      // Nếu đang trong vùng fadeIn + fadeOut chồng nhau, lấy min
      opacity = Math.min(opacity, fadeOutOpacity);
    }

    return opacity;
  }, [
    relativeFrame,
    durationInFrames,
    shouldFadeIn,
    shouldFadeOut,
    fadeInFrames,
    fadeOutFrames,
  ]);

  // ⭐ USE TRANSITION HOOK
  // Nếu transition === "none" → không cần transition
  // Nếu transition === "fadein"/"fadeout" → transitionResolver xử lý phần đó
  // Nếu transition khác → transitionResolver xử lý transition chính
  const transitionValues = useTransition(
    relativeFrame,
    data,
    dataAction,
    durationInFrames,
    normalizedTransition === "none"
      ? { type: "none", duration: 0, loop: false }
      : undefined, // để transitionResolver tự resolve từ data/dataAction
  );

  // Pre-load image với delayRender/continueRender
  useEffect(() => {
    if (!imgPath) {
      setImageLoaded(true);
      continueRender(handle);
      return;
    }

    const image = new Image();
    image.src = staticFile(imgPath);

    image.onload = () => {
      console.log(`✅ Image loaded: ${imgPath}`);
      console.log(
        ` 🎭 Fade: fadeIn=${shouldFadeIn ? fadeInFrames + "f" : "off"} | fadeOut=${shouldFadeOut ? fadeOutFrames + "f" : "off"} | Transition: ${transitionValues.config.type} (${transitionValues.config.duration}f, loop: ${transitionValues.config.loop})`,
      );
      setLoadedImageSrc(image.src);
      setImageLoaded(true);
      continueRender(handle);
    };

    image.onerror = () => {
      console.warn(`⚠️ Failed to load image: ${imgPath}`);
      setImageLoaded(true);
      continueRender(handle);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imgPath, handle]);

  // Check visibility
  if (frame < startFrame || frame > endFrame) return null;
  if (!imageLoaded) return null;
  if (!imgPath) return null;

  // Nếu image load fail
  if (!loadedImageSrc) {
    return (
      <div style={{ color: "red", padding: "10px" }}>
        ⚠️ Image not found: {img}
      </div>
    );
  }

  // BUILD SELECTOR
  const containerSelector = elementId ? `#${elementId}` : null;

  // ⭐ STEP 1: Apply transition (transform, filter, transition opacity)
  const transitionedStyle = applyTransitionToStyle(styCss, transitionValues);

  // ⭐ STEP 2: Multiply baseFadeOpacity × transitionOpacity
  const styleWithFade = {
    ...transitionedStyle,
    opacity:
      (transitionedStyle.opacity !== undefined
        ? transitionedStyle.opacity
        : 1) * baseFadeOpacity,
  };

  // ⭐ STEP 3: Apply animation styles
  const finalStyle = containerSelector
    ? getAnimationStyle(animationStyles, containerSelector, styleWithFade)
    : styleWithFade;

  // Debug
  if (currentFrame % 60 === 0 && elementId) {
    console.log(`🖼️ ImageView [${elementId}] - Frame ${currentFrame}`, {
      containerSelector,
      transition: normalizedTransition,
      shouldFadeIn,
      shouldFadeOut,
      fadeInFrames,
      fadeOutFrames,
      baseFadeOpacity: baseFadeOpacity.toFixed(2),
      transitionOpacity: transitionValues.opacity?.toFixed(2),
      finalOpacity: finalStyle.opacity?.toFixed(2),
      transitionConfig: transitionValues.config,
      relativeFrame,
    });
  }

  return (
    <img
      id={elementId}
      className={elementClass}
      src={loadedImageSrc}
      alt={img}
      style={finalStyle}
    />
  );
};

export default ImageView;
