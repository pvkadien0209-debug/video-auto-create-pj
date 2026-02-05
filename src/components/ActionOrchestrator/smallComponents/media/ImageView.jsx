import React, { useState, useEffect, useMemo } from "react";
import {
  staticFile,
  continueRender,
  delayRender,
  useCurrentFrame,
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
 * ⭐ Sử dụng centralized transition system
 * ⭐ Hỗ trợ transition loop (infinite)
 */
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

  // ⭐ USE TRANSITION HOOK
  const transitionValues = useTransition(
    relativeFrame,
    data,
    dataAction,
    durationInFrames,
    { type: "fadeIn", duration: 15, loop: false }, // default
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
        ` 🎭 Transition: ${transitionValues.config.type} (${transitionValues.config.duration} frames, loop: ${transitionValues.config.loop})`,
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

  // Default style nếu không có custom
  const defaultStyle = {
    width: imgSize,
    height: imgSize,
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
  };

  // BUILD SELECTOR
  const containerSelector = elementId ? `#${elementId}` : null;

  // ⭐ MERGE: defaultStyle + styCss + transition
  const baseStyle = applyTransitionToStyle(styCss, transitionValues);

  const finalStyle = containerSelector
    ? getAnimationStyle(animationStyles, containerSelector, baseStyle)
    : baseStyle;

  // Debug animations
  if (currentFrame % 60 === 0 && elementId && animations.length > 0) {
    console.log(`🖼️ ImageView [${elementId}] - Frame ${currentFrame}`, {
      containerSelector,
      hasAnimation: !!animationStyles[containerSelector],
      animationCount: animations.length,
      transition: transitionValues.config,
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
