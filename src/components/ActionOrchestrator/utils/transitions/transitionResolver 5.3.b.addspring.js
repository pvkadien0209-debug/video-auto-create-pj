// src/Components/ActionOrchestrator/utils/transitions/transitionResolver.js
import { useMemo } from "react";
import { interpolate } from "remotion";
/**
 * 🎨 TRANSITION RESOLVER
 * Centralized transition logic cho tất cả components
 *
 * SUPPORTED TRANSITIONS:
 *
 * === SPECIAL ===
 * - none: Không có transition (opacity: 1, no transform, no filter)
 *
 * === ONE-TIME TRANSITIONS ===
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
 * - rotateIn: Xoay vào
 * - expandIn: Expand từ center
 * - blurIn: Blur → clear
 *
 * === INFINITE LOOP TRANSITIONS (Smooth Loop - No Jarring) ===
 * 🔥 All loop transitions have 15-frame fadeIn intro before looping
 * - kenBurns: Zoom smooth 1.0 → 1.15 → 1.0 + pan
 * - pulse: Scale breathing 1.0 → 1.05 → 1.0 → 0.95 → 1.0
 * - sway: Rotate smooth 0° → -3° → 0° → +3° → 0°
 * - float: Smooth up/down wave
 * - rotate360: Continuous 360° rotation (smooth)
 * - wave: Complex wave với scale
 * - breathe: Scale + opacity breathing (smooth cycle)
 * - shimmer: Smooth shimmer với brightness
 * - drift: Figure-8 pattern (naturally smooth)
 * - orbit: Circular motion (naturally smooth)
 *
 * === NEW: transitionDelay ===
 * - Delay (in frames) trước khi transition bắt đầu chạy
 * - Trong khoảng delay: element ẩn (opacity: 0) cho one-time transitions
 *   hoặc hiện bình thường cho loop transitions
 */
// ⭐ Define loop transition types
const LOOP_TRANSITIONS = [
  "kenBurns",
  "pulse",
  "sway",
  "float",
  "rotate360",
  "wave",
  "breathe",
  "shimmer",
  "drift",
  "orbit",
];
// ⭐ FadeIn intro duration for loop transitions (frames)
const LOOP_FADEIN_DURATION = 15;
/**
 * Check if transition type is a loop transition
 */
const isLoopTransition = (transitionType) => {
  return LOOP_TRANSITIONS.includes(transitionType);
};
/**
 * ⭐ Get the "waiting" state for a transition type during delay period
 * One-time transitions: element should be invisible (pre-transition state)
 * This returns the initial state BEFORE the transition starts
 */
const getDelayWaitingState = (transitionType) => {
  switch (transitionType) {
    case "fadeIn":
      return { opacity: 0, transform: "", filter: "" };
    case "scaleIn":
      return { opacity: 1, transform: "scale(0.5)", filter: "" };
    case "zoomIn":
      return { opacity: 0, transform: "scale(0.8)", filter: "" };
    case "slideInFromBottom":
      return { opacity: 0, transform: "translateY(100%)", filter: "" };
    case "slideInFromTop":
      return { opacity: 0, transform: "translateY(-100%)", filter: "" };
    case "slideInFromLeft":
      return { opacity: 0, transform: "translateX(-100%)", filter: "" };
    case "slideInFromRight":
      return { opacity: 0, transform: "translateX(100%)", filter: "" };
    case "slideInFromBottomFade":
      return { opacity: 0, transform: "translateY(50px)", filter: "" };
    case "scaleRotate":
      return { opacity: 0, transform: "scale(0.5) rotate(-10deg)", filter: "" };
    case "bounceIn":
      return { opacity: 0, transform: "scale(0)", filter: "" };
    case "flipIn":
      return {
        opacity: 0,
        transform: "perspective(1000px) rotateY(90deg)",
        filter: "",
      };
    case "rotateIn":
      return { opacity: 0, transform: "rotate(-180deg)", filter: "" };
    case "expandIn":
      return { opacity: 0, transform: "scaleX(0) scaleY(0)", filter: "" };
    case "blurIn":
      return { opacity: 0, transform: "", filter: "blur(10px)" };
    default:
      // Loop transitions or unknown → hidden during delay
      return { opacity: 0, transform: "", filter: "" };
  }
};
/**
 * Calculate transition values based on frame
 * @param {number} relativeFrame - Frame tương đối (0 = bắt đầu action)
 * @param {string} transitionType - Loại transition
 * @param {number} transitionDuration - Độ dài transition (frames)
 * @param {boolean} transitionLoop - Có lặp lại không (infinite)
 * @param {number} durationInFrames - Tổng số frame của action
 * @param {number} transitionDelay - ⭐ NEW: Delay (frames) trước khi bắt đầu transition
 */
export const calculateTransition = (
  relativeFrame,
  transitionType,
  transitionDuration,
  transitionLoop = false,
  durationInFrames = Infinity,
  transitionDelay = 0,
) => {
  // ⭐ NO TRANSITION - Return immediately
  if (
    transitionType === "none" ||
    transitionType === null ||
    transitionType === undefined ||
    transitionDuration <= 0
  ) {
    return {
      opacity: 1,
      transform: "",
      filter: "",
      isNone: true,
    };
  }

  // ⭐ NEW: TRANSITION DELAY HANDLING
  // Nếu có delay và frame hiện tại vẫn trong khoảng delay → trả về trạng thái chờ
  const effectiveDelay = transitionDelay > 0 ? transitionDelay : 0;
  if (effectiveDelay > 0 && relativeFrame < effectiveDelay) {
    const waitingState = getDelayWaitingState(transitionType);
    return {
      ...waitingState,
      isNone: false,
      isComplete: false,
      isDelaying: true, // ⭐ Flag: đang trong giai đoạn delay
    };
  }

  // ⭐ Trừ delay ra khỏi relativeFrame → transition bắt đầu từ frame 0 sau delay
  const delayAdjustedFrame = relativeFrame - effectiveDelay;

  let effectiveFrame = delayAdjustedFrame;
  let fadeInProgress = 1; // Default: full opacity

  // ⭐ LOOP LOGIC with FadeIn Intro
  if (transitionLoop && durationInFrames > 0) {
    const isLoop = isLoopTransition(transitionType);
    if (isLoop) {
      // 🎬 Loop transitions có fadeIn intro 15 frames
      if (delayAdjustedFrame < LOOP_FADEIN_DURATION) {
        // Phase 1: FadeIn intro (0-15 frames)
        fadeInProgress = interpolate(
          delayAdjustedFrame,
          [0, LOOP_FADEIN_DURATION],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        );
        // Start loop animation từ frame 0 nhưng với opacity fade
        effectiveFrame = 0;
      } else {
        // Phase 2: Loop animation (15+ frames)
        fadeInProgress = 1; // Full opacity
        // Loop animation bắt đầu từ frame 15
        effectiveFrame =
          (delayAdjustedFrame - LOOP_FADEIN_DURATION) % transitionDuration;
      }
    } else {
      // Non-loop transitions: loop toàn bộ animation
      effectiveFrame = delayAdjustedFrame % transitionDuration;
    }
  } else {
    // One-time transition: chỉ chạy 1 lần ở đầu
    if (delayAdjustedFrame < 0 || delayAdjustedFrame > transitionDuration) {
      return {
        opacity: 1,
        transform: "",
        filter: "",
        isComplete: true,
      };
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
  // Get base transition style
  const transitionStyle = getTransitionStyle(transitionType, progress);
  // ⭐ Apply fadeIn to loop transitions
  if (transitionLoop && isLoopTransition(transitionType)) {
    return {
      ...transitionStyle,
      opacity: transitionStyle.opacity * fadeInProgress, // Blend opacity
      isNone: false,
      isComplete: false,
      isDelaying: false,
      isFadingIn: fadeInProgress < 1, // Flag cho debugging
    };
  }
  return {
    ...transitionStyle,
    isNone: false,
    isComplete: false,
    isDelaying: false,
  };
};
/**
 * Get transition style based on type and progress
 */
const getTransitionStyle = (transitionType, progress) => {
  let opacity = 1;
  let transform = "";
  let filter = "";
  switch (transitionType) {
    // ========================================
    // ⭐ SPECIAL: NO TRANSITION
    // ========================================
    case "none":
    case null:
    case undefined:
      opacity = 1;
      transform = "";
      filter = "";
      break;
    // ========================================
    // ONE-TIME TRANSITIONS
    // ========================================
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
      filter = `blur(${blur}px)`;
      break;
    // ========================================
    // 🎬 INFINITE LOOP TRANSITIONS (SMOOTH LOOP)
    // ⭐ Note: FadeIn intro is handled in calculateTransition
    // ========================================
    case "kenBurns":
      const kenBurnsScale = interpolate(
        progress,
        [0, 0.5, 1],
        [1.0, 1.15, 1.0],
      );
      const kenBurnsPan = interpolate(
        progress,
        [0, 0.25, 0.5, 0.75, 1],
        [-3, 0, 3, 0, -3],
      );
      transform = `scale(${kenBurnsScale}) translateX(${kenBurnsPan}%)`;
      break;
    case "pulse":
      const pulseScale = interpolate(
        progress,
        [0, 0.25, 0.5, 0.75, 1],
        [1.0, 1.05, 1.0, 0.95, 1.0],
      );
      transform = `scale(${pulseScale})`;
      break;
    case "sway":
      const swayAngle = interpolate(
        progress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, -3, 0, 3, 0],
      );
      transform = `rotate(${swayAngle}deg)`;
      break;
    case "float":
      const floatY = Math.sin(progress * Math.PI * 2) * 15;
      transform = `translateY(${floatY}px)`;
      break;
    case "rotate360":
      const rotate360 = progress * 360;
      transform = `rotate(${rotate360}deg)`;
      break;
    case "wave":
      const waveY = Math.sin(progress * Math.PI * 2) * 20;
      const waveScale = 1 + Math.sin(progress * Math.PI * 2) * 0.04;
      transform = `translateY(${waveY}px) scale(${waveScale})`;
      break;
    case "breathe":
      const breatheScale = interpolate(
        progress,
        [0, 0.25, 0.5, 0.75, 1],
        [1.0, 1.08, 1.0, 0.92, 1.0],
      );
      const breatheOpacity = interpolate(
        progress,
        [0, 0.25, 0.5, 0.75, 1],
        [0.85, 1.0, 0.85, 1.0, 0.85],
      );
      opacity = breatheOpacity;
      transform = `scale(${breatheScale})`;
      break;
    case "shimmer":
      const shimmerOpacity = interpolate(
        progress,
        [0, 0.25, 0.5, 0.75, 1],
        [0.7, 1.0, 0.7, 1.0, 0.7],
      );
      const shimmerBrightness = interpolate(
        progress,
        [0, 0.5, 1],
        [0.9, 1.15, 0.9],
      );
      opacity = shimmerOpacity;
      filter = `brightness(${shimmerBrightness})`;
      break;
    case "drift":
      const driftAngle = progress * Math.PI * 2;
      const driftX = Math.sin(driftAngle) * 20;
      const driftY = Math.sin(driftAngle * 2) * 15;
      transform = `translate(${driftX}px, ${driftY}px)`;
      break;
    case "orbit":
      const orbitAngle = progress * Math.PI * 2;
      const orbitRadius = 10 + Math.sin(progress * Math.PI * 2) * 5;
      const orbitX = Math.cos(orbitAngle) * orbitRadius;
      const orbitY = Math.sin(orbitAngle) * orbitRadius;
      const orbitScale = 1 + Math.sin(progress * Math.PI * 4) * 0.03;
      transform = `translate(${orbitX}px, ${orbitY}px) scale(${orbitScale})`;
      break;
    default:
      console.warn(
        `⚠️  Unknown transition type: "${transitionType}". Using "none".`,
      );
      opacity = 1;
      transform = "";
      filter = "";
  }
  return { opacity, transform, filter };
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
    // Priority: dataAction > data > defaultTransition > "none"
    const transitionType =
      dataAction.transition !== undefined
        ? dataAction.transition
        : data.transition !== undefined
          ? data.transition
          : defaultTransition.type !== undefined
            ? defaultTransition.type
            : "none";
    const transitionDuration =
      dataAction.transitionFrame !== undefined
        ? dataAction.transitionFrame
        : data.transitionFrame !== undefined
          ? data.transitionFrame
          : defaultTransition.duration !== undefined
            ? defaultTransition.duration
            : 0;
    const transitionLoop =
      dataAction.transitionLoop !== undefined
        ? dataAction.transitionLoop
        : data.transitionLoop !== undefined
          ? data.transitionLoop
          : defaultTransition.loop !== undefined
            ? defaultTransition.loop
            : false;

    // ⭐ NEW: transitionDelay — delay bao nhiêu frame trước khi bắt đầu transition
    // Priority: dataAction > data > defaultTransition > 0
    const transitionDelay =
      dataAction.transitionDelay !== undefined
        ? Number(dataAction.transitionDelay)
        : data.transitionDelay !== undefined
          ? Number(data.transitionDelay)
          : defaultTransition.delay !== undefined
            ? Number(defaultTransition.delay)
            : 0;

    // Calculate transition
    const values = calculateTransition(
      relativeFrame,
      transitionType,
      transitionDuration,
      transitionLoop,
      durationInFrames,
      transitionDelay,
    );
    return {
      ...values,
      config: {
        type: transitionType,
        duration: transitionDuration,
        loop: transitionLoop,
        delay: transitionDelay,
        fadeInDuration: LOOP_FADEIN_DURATION,
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
 * Helper: Merge filters
 */
export const mergeFilters = (existingFilter = "", transitionFilter = "") => {
  if (!transitionFilter) return existingFilter;
  if (!existingFilter) return transitionFilter;
  return `${existingFilter} ${transitionFilter}`.trim();
};
/**
 * Helper: Apply transition to style object
 */
export const applyTransitionToStyle = (baseStyle, transitionValues) => {
  // ⭐ If transition is "none", return base style as-is
  if (transitionValues.isNone) {
    return baseStyle;
  }
  const existingTransform = baseStyle.transform || "";
  const existingFilter = baseStyle.filter || "";
  const combinedTransform = mergeTransforms(
    existingTransform,
    transitionValues.transform,
  );
  const combinedFilter = mergeFilters(existingFilter, transitionValues.filter);
  return {
    ...baseStyle,
    opacity: transitionValues.opacity,
    transform: combinedTransform,
    ...(combinedFilter && { filter: combinedFilter }),
  };
};
// ⭐ Export constants for reference
export { LOOP_TRANSITIONS, LOOP_FADEIN_DURATION };
