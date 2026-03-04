// src/Components/ActionOrchestrator/actions/TransitionToID.jsx
/**
 * 🎯 TransitionToID
 * Gán transition vào một DOM element có sẵn thông qua ID
 *
 * Tương tự actionCSSId nhưng thay vì gán CSS tĩnh,
 * component này gán transition animation theo frame.
 *
 * USAGE trong data config:
 * {
 *   cmd: "transitionToID",
 *   toID: "abc",                    // ID của element cần gán transition
 *   transition: "fadeIn",           // Loại transition
 *   transitionFrame: 30,            // Số frame cho transition
 *   transitionDelay: 0,             // (Optional) Delay trước khi bắt đầu
 *   transitionLoop: false,          // (Optional) Lặp lại không
 *   styleCss: { color: "red" },     // (Optional) CSS bổ sung
 * }
 *
 * HOW IT WORKS:
 * 1. Tìm DOM element bằng document.getElementById(toID)
 * 2. Mỗi frame, tính transition values (opacity, transform, filter)
 * 3. Apply trực tiếp lên element.style
 * 4. Khi unmount → cleanup styles
 *
 * ⭐ Props có thể được truyền theo 2 cách:
 *    - Spread trực tiếp: <TransitionToID toID="abc" transition="fadeIn" ... />
 *    - Nested trong dataAction/data: <TransitionToID dataAction={{toID: "abc"}} ... />
 */

import { useEffect, useRef } from "react";
import { useCurrentFrame } from "remotion";
import {
  calculateTransition,
  mergeTransforms,
  mergeFilters,
} from "../utils/transitions/transitionResolver";

const TransitionToID = (props) => {
  const {
    data = {},
    dataAction = {},
    startFrame = 0,
    endFrame = Infinity,
    durationInFrames = Infinity,
  } = props;

  const frame = useCurrentFrame();
  const elementRef = useRef(null);
  const originalStylesRef = useRef(null);

  // ⭐ Lấy config: ưu tiên props trực tiếp > dataAction > data
  // (ActionOrchestrator có thể spread action properties thành props)
  const toID = props.toID || dataAction.toID || data.toID;

  const transitionType =
    props.transition ?? dataAction.transition ?? data.transition ?? "none";

  const transitionDuration =
    props.transitionFrame ??
    dataAction.transitionFrame ??
    data.transitionFrame ??
    0;

  const transitionDelay =
    props.transitionDelay ??
    dataAction.transitionDelay ??
    data.transitionDelay ??
    0;

  const transitionLoop =
    props.transitionLoop ??
    dataAction.transitionLoop ??
    data.transitionLoop ??
    false;

  const styleCss =
    props.styleCss || dataAction.styleCss || data.styleCss || null;

  // ⭐ Tìm element và lưu original styles khi mount
  useEffect(() => {
    if (!toID) {
      console.warn("⚠️ TransitionToID: toID is required. Received props:", {
        "props.toID": props.toID,
        "dataAction.toID": dataAction?.toID,
        "data.toID": data?.toID,
      });
      return;
    }

    const el = document.getElementById(toID);
    if (!el) {
      console.warn(`⚠️ TransitionToID: Element with id="${toID}" not found`);
      return;
    }

    elementRef.current = el;

    // Lưu original styles để cleanup khi unmount
    originalStylesRef.current = {
      opacity: el.style.opacity,
      transform: el.style.transform,
      filter: el.style.filter,
      transition: el.style.transition,
    };

    // Tắt CSS transition để tránh conflict với frame-based animation
    el.style.transition = "none";

    // ⭐ Apply styleCss bổ sung (nếu có) — chỉ CSS KHÔNG liên quan transition
    if (styleCss && typeof styleCss === "object") {
      for (const [prop, value] of Object.entries(styleCss)) {
        if (
          prop !== "opacity" &&
          prop !== "transform" &&
          prop !== "filter" &&
          prop !== "transition"
        ) {
          el.style[prop] = typeof value === "number" ? `${value}px` : value;
        }
      }
    }

    // Cleanup khi unmount
    return () => {
      if (elementRef.current && originalStylesRef.current) {
        const el = elementRef.current;
        const orig = originalStylesRef.current;
        el.style.opacity = orig.opacity;
        el.style.transform = orig.transform;
        el.style.filter = orig.filter;
        el.style.transition = orig.transition;
      }
    };
  }, [toID]); // eslint-disable-line react-hooks/exhaustive-deps

  // ⭐ Apply transition mỗi frame
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Chỉ apply trong khoảng startFrame → endFrame
    if (frame < startFrame || frame > endFrame) return;

    const relativeFrame = frame - startFrame;

    // Tính transition values
    const transitionValues = calculateTransition(
      relativeFrame,
      transitionType,
      transitionDuration,
      transitionLoop,
      durationInFrames,
      transitionDelay,
    );

    // ⭐ Apply lên element
    if (transitionValues.isNone) {
      el.style.opacity = "1";
      el.style.transform = "";
      el.style.filter = "";
      return;
    }

    // Merge with any existing transform/filter from styleCss
    const baseTransform =
      styleCss && styleCss.transform ? styleCss.transform : "";
    const baseFilter = styleCss && styleCss.filter ? styleCss.filter : "";

    el.style.opacity = String(transitionValues.opacity);
    el.style.transform = mergeTransforms(
      baseTransform,
      transitionValues.transform,
    );
    const mergedFilter = mergeFilters(baseFilter, transitionValues.filter);
    el.style.filter = mergedFilter || "";
  }, [
    frame,
    startFrame,
    endFrame,
    transitionType,
    transitionDuration,
    transitionDelay,
    transitionLoop,
    durationInFrames,
    styleCss,
  ]);

  // Component không render gì — chỉ điều khiển element có sẵn qua DOM
  return null;
};

export default TransitionToID;
