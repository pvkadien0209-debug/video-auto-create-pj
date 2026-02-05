import React from "react";
import { useCurrentFrame } from "remotion";
import {
  useAnimations,
  getAnimationStyle,
} from "../../utils/animations/animationResolver.js";
import {
  useTransition,
  applyTransitionToStyle,
} from "../../utils/transitions/transitionResolver.js";

/**
 * ⭐ DivView với transition support
 */
const DivView = ({
  frame,
  styCss = {},
  startFrame = 0,
  endFrame = 300,
  data = {},
  dataAction = {},
}) => {
  const currentFrame = useCurrentFrame();

  // ⭐ Lấy id/class từ dataAction hoặc data
  const elementId = dataAction.id || data.id;
  const elementClass = dataAction.className || data.className;

  // ⭐ Lấy animations từ data
  const animations = dataAction.animations || data.animations || [];
  const animationStyles = useAnimations(animations);

  // ⭐ Calculate relative frame
  const relativeFrame = frame - startFrame;
  const durationInFrames = endFrame - startFrame;

  // ⭐ USE TRANSITION HOOK
  const transitionValues = useTransition(
    relativeFrame,
    data,
    dataAction,
    durationInFrames,
    { type: "fadeIn", duration: 15, loop: false }, // default
  );

  // Visibility check
  if (frame < startFrame || frame > endFrame) return null;

  // ⭐ BUILD SELECTOR
  const containerSelector = elementId ? `#${elementId}` : null;

  // ⭐ CONTAINER STYLE - styCss + transition + animation
  const baseStyleWithTransition = applyTransitionToStyle(
    styCss,
    transitionValues,
  );

  const containerStyle = containerSelector
    ? getAnimationStyle(
        animationStyles,
        containerSelector,
        baseStyleWithTransition,
      )
    : baseStyleWithTransition;

  // Debug
  if (currentFrame % 60 === 0 && elementId) {
    console.log(`🎬 DivView [${elementId}] - Frame ${currentFrame}`, {
      containerSelector,
      hasContainerAnimation: !!animationStyles[containerSelector],
      transition: transitionValues.config,
      relativeFrame,
    });
  }

  return (
    <div id={elementId} className={elementClass} style={containerStyle}>
      {/* Div content here */}
    </div>
  );
};

export default DivView;
