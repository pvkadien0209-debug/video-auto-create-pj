// src/Components/ActionOrchestrator/utils/transitions/transitionResolver.js
import { useMemo } from "react";
import { interpolate } from "remotion";

/**
 * 🎨 TRANSITION RESOLVER
 * Centralized transition logic cho tất cả components
 *
 * SUPPORTED TRANSITIONS:
 * - fadeIn: Mờ dần → rõ
 * - scaleIn: Thu nhỏ → phóng to
 * - zoomIn: Phóng to + fade
 * - slideInFromBottom: Trượt từ dưới lên
 * - slideInFromTop: Trượt từ trên xuống
 * - slideInFromLeft: Trượt từ trái qua
 * - slideInFromRight: Trượt từ phải qua
 * - slideInFromBottomFade: Trượt từ dưới + fade mượt
 * - scaleRotate: Scale + rotate
 * - bounceIn: Elastic bounce effect
 * - flipIn: 3D flip effect
 * - none: Không có transition
 */

/**
 * Calculate transition values based on frame
 * @param {number} relativeFrame - Frame tương đối (0 = bắt đầu action)
 * @param {string} transitionType - Loại transition
 * @param {number} transitionDuration - Độ dài transition (frames)
 * @param {boolean} transitionLoop - Có lặp lại không (infinite)
 * @param {number} durationInFrames - Tổng số frame của action
 */
export const calculateTransition = (
  relativeFrame,
  transitionType,
  transitionDuration,
  transitionLoop = false,
  durationInFrames = Infinity,
) => {
  // No transition
  if (transitionType === "none" || transitionDuration <= 0) {
    return { opacity: 1, transform: "" };
  }

  let effectiveFrame = relativeFrame;

  // ⭐ LOOP LOGIC: Nếu loop = true, lặp lại animation
  if (transitionLoop && durationInFrames > 0) {
    // Lặp lại transition trong suốt duration
    effectiveFrame = relativeFrame % transitionDuration;
  } else {
    // Chỉ chạy 1 lần ở đầu
    if (relativeFrame < 0 || relativeFrame > transitionDuration) {
      return { opacity: 1, transform: "" };
    }
  }

  // Calculate progress (0 → 1)
  const progress = interpolate(
    effectiveFrame,
    [0, transitionDuration],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return getTransitionStyle(transitionType, progress);
};

/**
 * Get transition style based on type and progress
 */
const getTransitionStyle = (transitionType, progress) => {
  let opacity = 1;
  let transform = "";

  switch (transitionType) {
    case "fadeIn":
      opacity = progress;
      break;

    case "scaleIn":
      const scale = interpolate(progress, [0, 1], [0.5, 1]);
      transform = `scale(${scale})`;
      break;

    case "zoomIn":
      opacity = progress;
      const zoomScale = interpolate(progress, [0, 1], [0.8, 1]);
      transform = `scale(${zoomScale})`;
      break;

    case "slideInFromBottom":
      const translateYBottom = interpolate(progress, [0, 1], [100, 0]);
      transform = `translateY(${translateYBottom}%)`;
      opacity = progress;
      break;

    case "slideInFromTop":
      const translateYTop = interpolate(progress, [0, 1], [-100, 0]);
      transform = `translateY(${translateYTop}%)`;
      opacity = progress;
      break;

    case "slideInFromLeft":
      const translateXLeft = interpolate(progress, [0, 1], [-100, 0]);
      transform = `translateX(${translateXLeft}%)`;
      opacity = progress;
      break;

    case "slideInFromRight":
      const translateXRight = interpolate(progress, [0, 1], [100, 0]);
      transform = `translateX(${translateXRight}%)`;
      opacity = progress;
      break;

    case "slideInFromBottomFade":
      opacity = progress;
      const slideY = interpolate(progress, [0, 1], [50, 0]);
      transform = `translateY(${slideY}px)`;
      break;

    case "scaleRotate":
      const scaleRotate = interpolate(progress, [0, 1], [0.5, 1]);
      const rotate = interpolate(progress, [0, 1], [-10, 0]);
      transform = `scale(${scaleRotate}) rotate(${rotate}deg)`;
      opacity = progress;
      break;

    case "bounceIn":
      const bounceScale = interpolate(
        progress,
        [0, 0.5, 0.75, 1],
        [0, 1.1, 0.95, 1],
      );
      transform = `scale(${bounceScale})`;
      opacity = interpolate(progress, [0, 0.3], [0, 1], {
        extrapolateRight: "clamp",
      });
      break;

    case "flipIn":
      const rotateY = interpolate(progress, [0, 1], [90, 0]);
      transform = `perspective(1000px) rotateY(${rotateY}deg)`;
      opacity = progress;
      break;

    case "rotateIn":
      const rotateZ = interpolate(progress, [0, 1], [-180, 0]);
      transform = `rotate(${rotateZ}deg)`;
      opacity = progress;
      break;

    case "expandIn":
      const scaleX = interpolate(progress, [0, 1], [0, 1]);
      const scaleY = interpolate(progress, [0, 1], [0, 1]);
      transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
      opacity = progress;
      break;

    case "blurIn":
      opacity = progress;
      const blur = interpolate(progress, [0, 1], [10, 0]);
      transform = `blur(${blur}px)`;
      break;

    default:
      opacity = progress;
  }

  return { opacity, transform };
};

/**
 * 🎯 HOOK: useTransition
 * Hook chính để sử dụng trong các component
 *
 * @param {number} relativeFrame - Frame tương đối từ startFrame
 * @param {object} data - Data object chứa transition config
 * @param {object} dataAction - DataAction object chứa transition config
 * @param {number} durationInFrames - Tổng số frame của action
 * @param {object} defaultTransition - Default transition config
 */
export const useTransition = (
  relativeFrame,
  data = {},
  dataAction = {},
  durationInFrames = Infinity,
  defaultTransition = {},
) => {
  const transitionValues = useMemo(() => {
    // ⭐ Lấy transition config từ dataAction hoặc data
    const transitionType =
      dataAction.transition ||
      data.transition ||
      defaultTransition.type ||
      "fadeIn";

    const transitionDuration =
      dataAction.transitionFrame ||
      data.transitionFrame ||
      defaultTransition.duration ||
      15;

    const transitionLoop =
      dataAction.transitionLoop !== undefined
        ? dataAction.transitionLoop
        : data.transitionLoop !== undefined
          ? data.transitionLoop
          : defaultTransition.loop !== undefined
            ? defaultTransition.loop
            : false;

    // Calculate transition
    const values = calculateTransition(
      relativeFrame,
      transitionType,
      transitionDuration,
      transitionLoop,
      durationInFrames,
    );

    return {
      ...values,
      config: {
        type: transitionType,
        duration: transitionDuration,
        loop: transitionLoop,
      },
    };
  }, [relativeFrame, data, dataAction, durationInFrames, defaultTransition]);

  return transitionValues;
};

/**
 * Helper: Merge transition transform with existing transform
 */
export const mergeTransforms = (
  existingTransform = "",
  transitionTransform = "",
) => {
  if (!transitionTransform) return existingTransform;
  if (!existingTransform) return transitionTransform;
  return `${existingTransform} ${transitionTransform}`.trim();
};

/**
 * Helper: Apply transition to style object
 */
export const applyTransitionToStyle = (baseStyle, transitionValues) => {
  const existingTransform = baseStyle.transform || "";
  const combinedTransform = mergeTransforms(
    existingTransform,
    transitionValues.transform,
  );

  return {
    ...baseStyle,
    opacity: transitionValues.opacity,
    transform: combinedTransform,
  };
};
