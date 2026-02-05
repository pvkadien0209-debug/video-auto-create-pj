import React, { useMemo } from "react";
import {
  useTransition,
  applyTransitionToStyle,
} from "../../utils/transitions/transitionResolver.js";

/**
 * Component hiển thị text không có animation
 * ⭐ Có transition support
 */
const TypingTextNoEffect = ({
  frame,
  styCss = {},
  startFrame = 30,
  endFrame = 90,
  data = {},
  dataAction = {},
}) => {
  // ⭐ Calculate relative frame
  const relativeFrame = useMemo(() => frame - startFrame, [frame, startFrame]);
  const durationInFrames = useMemo(
    () => endFrame - startFrame,
    [endFrame, startFrame],
  );

  // ⭐ USE TRANSITION HOOK
  const transitionValues = useTransition(
    relativeFrame,
    data,
    dataAction,
    durationInFrames,
    { type: "fadeIn", duration: 15, loop: false }, // default
  );

  if (frame < startFrame || frame > endFrame) return null;

  // ⭐ Lấy text trực tiếp từ dataAction hoặc data
  const displayText = dataAction.text || data.text || "";

  // ⭐ Apply transition to style
  const finalStyle = applyTransitionToStyle(styCss, transitionValues);

  return <div style={finalStyle}>{displayText}</div>;
};

export default TypingTextNoEffect;
