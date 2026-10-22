// src/Components/ActionOrchestrator/smallComponents/text/StyledCard.jsx
import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import {
  useAnimations,
  getAnimationStyle,
} from "../../utils/animations/animationResolver.js";
import {
  useTransition,
  applyTransitionToStyle,
} from "../../utils/transitions/transitionResolver.js";
import {
  STYLED_CARD_TYPES,
  BG_OPTIONS,
  getStyledCardDef,
} from "../../utils/cssUtils/StyledCardStyles.js";

/**
 * 🎨 STYLED CARD COMPONENT
 * Hiển thị box + text với 25 preset styles
 *
 * ════════════════════════════════════════════════════════════
 *  DISPLAY MODES (dataAction.display):
 * ════════════════════════════════════════════════════════════
 *  "box-text"  → Box + Text (mặc định)
 *  "text-only" → Chỉ text, KHÔNG box (transparent wrapper)
 *  "box-only"  → Chỉ box, KHÔNG text
 *  "text-box"  → Text + Box nhưng box KHÔNG có background
 *  "none"      → Không render gì (ẩn)
 *
 * ════════════════════════════════════════════════════════════
 *  STYLE CSS OVERRIDE (ưu tiên cao nhất):
 * ════════════════════════════════════════════════════════════
 *  dataAction.styleCSS      → Override container style
 *  dataAction.boxStyleCSS   → Override box style
 *  dataAction.textStyleCSS  → Override text style
 *  dataAction.subTextStyleCSS → Override subText style
 *  dataAction.stepStyleCSS  → Override step circle style
 *
 * ════════════════════════════════════════════════════════════
 *  FADE & TRANSITION:
 * ════════════════════════════════════════════════════════════
 *  - FadeIn/FadeOut mặc định 30 frames
 *  - Override qua dataAction.fadeFrames
 *  - Transition từ transitionResolver
 *  - Opacity = baseFade × transitionOpacity
 */

const DEFAULT_FADE_FRAMES = 30;

const StyledCard = ({
  frame,
  styCss = {},
  startFrame = 0,
  endFrame = 90,
  fps = 30,
  data = {},
  dataAction = {},
}) => {
  const currentFrame = useCurrentFrame();

  // ═══════════════════════════════════════════════════════════
  //  1. RESOLVE PROPS từ dataAction (tất cả config nằm ở đây)
  // ═══════════════════════════════════════════════════════════
  const {
    // Style type - chọn 1 trong 25 preset
    type = "GLASS_CARD",
    // Display mode
    display = "box-text",
    // Background option
    bgOption,
    // Content
    text: textContent = "",
    subText: subTextContent = "",
    step,
    // CSS Overrides (ưu tiên cao nhất)
    styleCSS = {},
    boxStyleCSS = {},
    textStyleCSS = {},
    subTextStyleCSS = {},
    stepStyleCSS = {},
    stepTextStyleCSS = {},
    // Fade config
    fadeFrames: customFadeFrames,
    // Element identifiers
    id: elementId,
    className: elementClass,
    // Animations & Transitions
    animations = [],
    transition,
    // Width constraint
    maxWidth,
    minWidth,
    width,
  } = dataAction;

  // ═══════════════════════════════════════════════════════════
  //  2. GET STYLE DEFINITION
  // ═══════════════════════════════════════════════════════════
  const styleDef = useMemo(() => getStyledCardDef(type), [type]);

  // ═══════════════════════════════════════════════════════════
  //  3. DISPLAY MODE FLAGS
  // ═══════════════════════════════════════════════════════════
  const showBox = display === "box-text" || display === "box-only";
  const showText =
    display === "box-text" || display === "text-only" || display === "text-box";
  const showSubText = showText && !!subTextContent && !!styleDef.subText;
  const showStep =
    showText && styleDef.hasStep && step !== undefined && step !== null;
  const clearBoxBg = display === "text-only" || display === "text-box";

  // "none" → không render
  if (display === "none") return null;

  // ═══════════════════════════════════════════════════════════
  //  4. BACKGROUND
  // ═══════════════════════════════════════════════════════════
  const bgStyle = useMemo(() => {
    if (!bgOption || bgOption === "none") return {};
    const bg = BG_OPTIONS[bgOption] || bgOption; // cho phép custom gradient string
    return { background: bg };
  }, [bgOption]);

  // ═══════════════════════════════════════════════════════════
  //  5. FRAME & FADE CALCULATIONS
  // ═══════════════════════════════════════════════════════════
  const fadeFrames =
    customFadeFrames !== undefined
      ? customFadeFrames
      : data.fadeFrames !== undefined
        ? data.fadeFrames
        : DEFAULT_FADE_FRAMES;

  const relativeFrame = frame - startFrame;
  const durationInFrames = endFrame - startFrame;

  const resolvedTransitionType =
    transition !== undefined
      ? transition
      : data.transition !== undefined
        ? data.transition
        : "none";

  const isTransitionNone =
    resolvedTransitionType === "none" ||
    resolvedTransitionType === null ||
    resolvedTransitionType === undefined;

  // Base fade opacity
  const baseFadeOpacity = useMemo(() => {
    if (fadeFrames <= 0) return 1;
    const total = durationInFrames;
    let opacity = 1;

    if (!isTransitionNone && relativeFrame < fadeFrames) {
      opacity = interpolate(relativeFrame, [0, fadeFrames], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
    }
    if (!isTransitionNone && relativeFrame > total - fadeFrames) {
      const fadeOut = interpolate(
        relativeFrame,
        [total - fadeFrames, total],
        [1, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
      );
      opacity = Math.min(opacity, fadeOut);
    }
    return opacity;
  }, [relativeFrame, durationInFrames, fadeFrames, isTransitionNone]);

  // ═══════════════════════════════════════════════════════════
  //  6. ANIMATIONS & TRANSITIONS
  // ═══════════════════════════════════════════════════════════
  const animationStyles = useAnimations(animations);

  const transitionValues = useTransition(
    relativeFrame,
    data,
    dataAction,
    durationInFrames,
    { type: "none", duration: 0, loop: false },
  );

  // ═══════════════════════════════════════════════════════════
  //  7. BUILD FINAL STYLES
  // ═══════════════════════════════════════════════════════════

  // --- Box style ---
  const finalBoxStyle = useMemo(() => {
    let base = { ...styleDef.box };

    // Clear background nếu text-only hoặc text-box
    if (clearBoxBg) {
      base = {
        ...base,
        background: "transparent",
        border: "none",
        boxShadow: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      };
    }

    // box-only: ẩn text alignment
    if (display === "box-only") {
      // giữ nguyên box style
    }

    // Size constraints
    if (maxWidth) base.maxWidth = maxWidth;
    if (minWidth) base.minWidth = minWidth;
    if (width) base.width = width;

    // ⭐ boxStyleCSS override (ưu tiên cao nhất)
    return { ...base, ...boxStyleCSS };
  }, [styleDef, clearBoxBg, display, maxWidth, minWidth, width, boxStyleCSS]);

  // --- Text style ---
  const finalTextStyle = useMemo(() => {
    return { ...styleDef.text, ...textStyleCSS };
  }, [styleDef.text, textStyleCSS]);

  // --- SubText style ---
  const finalSubTextStyle = useMemo(() => {
    if (!styleDef.subText) return {};
    return { ...styleDef.subText, ...subTextStyleCSS };
  }, [styleDef.subText, subTextStyleCSS]);

  // --- Step styles ---
  const finalStepStyle = useMemo(() => {
    return { ...(styleDef.stepStyle || {}), ...stepStyleCSS };
  }, [styleDef.stepStyle, stepStyleCSS]);

  const finalStepTextStyle = useMemo(() => {
    return { ...(styleDef.stepTextStyle || {}), ...stepTextStyleCSS };
  }, [styleDef.stepTextStyle, stepTextStyleCSS]);

  // --- Container style (wrapper bên ngoài) ---
  const containerBaseStyle = useMemo(() => {
    return {
      position: "relative",
      ...bgStyle,
      ...styleCSS,
    };
  }, [bgStyle, styleCSS]);

  // ═══════════════════════════════════════════════════════════
  //  8. APPLY TRANSITION + FADE + ANIMATION
  // ═══════════════════════════════════════════════════════════
  const containerSelector = elementId ? `#${elementId}` : null;

  // Apply transition to container
  const transitionedStyle = applyTransitionToStyle(
    containerBaseStyle,
    transitionValues,
  );

  // Multiply fade
  const styleWithFade = {
    ...transitionedStyle,
    opacity:
      (transitionedStyle.opacity !== undefined
        ? transitionedStyle.opacity
        : 1) * baseFadeOpacity,
  };

  // Apply animation
  const finalContainerStyle = containerSelector
    ? getAnimationStyle(animationStyles, containerSelector, styleWithFade)
    : styleWithFade;

  // ═══════════════════════════════════════════════════════════
  //  9. VISIBILITY CHECK
  // ═══════════════════════════════════════════════════════════
  if (frame < startFrame || frame > endFrame) return null;

  // ═══════════════════════════════════════════════════════════
  //  10. RENDER
  // ═══════════════════════════════════════════════════════════

  // Debug logging
  if (currentFrame % 90 === 0 && elementId) {
    console.log(
      `🎨 StyledCard [${elementId}] type=${type} display=${display}`,
      {
        baseFadeOpacity: baseFadeOpacity.toFixed(2),
        transitionOpacity: transitionValues.opacity?.toFixed(2),
        finalOpacity: finalContainerStyle.opacity?.toFixed(2),
      },
    );
  }

  return (
    <div id={elementId} className={elementClass} style={finalContainerStyle}>
      {/* Box wrapper */}
      {(showBox || showText) && (
        <div style={finalBoxStyle}>
          {/* Step circle */}
          {showStep && (
            <div style={finalStepStyle}>
              <span style={finalStepTextStyle}>{step}</span>
            </div>
          )}

          {/* Text content area */}
          {showText && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: showSubText ? "4px" : "0",
              }}
            >
              {/* Main text */}
              {textContent && <span style={finalTextStyle}>{textContent}</span>}
              {/* Sub text */}
              {showSubText && (
                <span style={finalSubTextStyle}>{subTextContent}</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Box-only: render box without text */}
      {display === "box-only" && <div style={finalBoxStyle} />}
    </div>
  );
};

export default StyledCard;
export { StyledCard, STYLED_CARD_TYPES, BG_OPTIONS };
