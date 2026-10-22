// src/Components/ActionOrchestrator/actions/TransitionToID.jsx
/**
 * 🎯 TransitionToID
 * Gán transition vào một DOM element có sẵn thông qua ID — không render gì.
 *
 * ─── USAGE ────────────────────────────────────────────────────────────────────
 * {
 *   cmd:             "transitionToID",
 *   toID:            "elementId",      // (required) element nguồn
 *   targetID:        "otherId",        // (moveToID only) element đích
 *   transition:      "fadeIn",         // tên transition trong transitions.json
 *   transitionFrame: 30,               // số frame
 *   transitionDelay: 0,                // delay frames (optional)
 *   transitionLoop:  false,            // loop/ping-pong (optional)
 *   noDelayState:    true,             // default TRUE — giữ CSS trong delay
 *   // + bất kỳ key nào khác → tự động thành extraProps cho "props.xxx"
 *   // Ví dụ: deltaX: 150 → dùng cho transition moveToID
 * }
 *
 * ─── CÁC TRƯỜNG HỢP XỬ LÝ ────────────────────────────────────────────────────
 *
 * TH1 — Merge nhiều TransitionToID trên cùng element:
 *   → domTransitionRegistry merge opacity, transform, filter
 *   → Mỗi instance contribute riêng, không xung đột
 *
 * TH2 — transition="none" → reset tất cả:
 *   → Xóa mọi transition đang chạy (kể cả loop=true)
 *   → Element về base style gốc
 *   → Khi ra khỏi frame range → các transition khác tự resume
 *
 * TH3 — transitionLoop=true với oneTime (đặc biệt moveToID):
 *   → Ping-pong: tiến về đích → quay về origin → lặp lại
 *   → calculateTransition xử lý, registry nhận output
 *
 * ─── EDGE CASES ───────────────────────────────────────────────────────────────
 *   - toID chưa tồn tại khi mount: retry bằng requestAnimationFrame (≤60 lần)
 *   - targetID không tồn tại: warn + deltaX=0, deltaY=0
 *   - transitionDuration=0: treated as none
 *   - relativeFrame < 0: clamp về 0 trong calculateTransition
 *   - Nhiều TransitionToID trên cùng element: dùng registry (TH1)
 *   - Element re-mount: re-register + đọc lại originalStyle
 *   - noDelayState=true (default): KHÔNG ẩn element trong giai đoạn delay
 */

import { useEffect, useRef, useCallback } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import {
  calculateTransition,
  extractExtraProps,
} from "../utils/transitions/transitionResolver";
import {
  registerInstance,
  applyTransitionValues,
  removeInstance,
  releaseDominantNone,
} from "../utils/transitions/domTransitionRegistry";

// ─── Unique instance ID ───────────────────────────────────────────────────────
let _counter = 0;
const genId = () =>
  `tid-${++_counter}-${Math.random().toString(36).slice(2, 6)}`;

const TransitionToID = (props) => {
  const {
    data = {},
    dataAction = {},
    startFrame = 0,
    endFrame = Infinity,
    durationInFrames = Infinity,
  } = props;

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Stable instance ID
  const instanceId = useRef(genId());

  // DOM state
  const elementRef = useRef(null);
  const registeredRef = useRef(false);
  const deltaRef = useRef({ x: 0, y: 0 });

  // ── Config: priority props > dataAction > data.action > data ──────────────
  const action = data.action || {};

  const toID = props.toID ?? dataAction.toID ?? action.toID ?? data.toID;

  const targetID =
    props.targetID ?? dataAction.targetID ?? action.targetID ?? data.targetID;

  const transitionType =
    props.transition ??
    dataAction.transition ??
    action.transition ??
    data.transition ??
    "none";

  const transitionDuration = Number(
    props.transitionFrame ??
      dataAction.transitionFrame ??
      action.transitionFrame ??
      data.transitionFrame ??
      0,
  );

  const transitionDelay = Number(
    props.transitionDelay ??
      dataAction.transitionDelay ??
      action.transitionDelay ??
      data.transitionDelay ??
      0,
  );

  const transitionLoop = Boolean(
    props.transitionLoop ??
      dataAction.transitionLoop ??
      action.transitionLoop ??
      data.transitionLoop ??
      false,
  );

  // noDelayState DEFAULT = TRUE cho TransitionToID
  const noDelayState = Boolean(
    props.noDelayState !== undefined
      ? props.noDelayState
      : dataAction.noDelayState !== undefined
        ? dataAction.noDelayState
        : action.noDelayState !== undefined
          ? action.noDelayState
          : data.noDelayState !== undefined
            ? data.noDelayState
            : true,
  );

  // Static extra props từ dataAction (strip standard keys) + direct props
  // deltaX/deltaY được tính lúc mount → merge vào mỗi frame
  const staticExtraRef = useRef(extractExtraProps({ ...dataAction, ...props }));

  // ── Mount: tìm element, register, tính delta cho moveToID ─────────────────
  const tryRegister = useCallback(() => {
    if (!toID) {
      console.warn("⚠️ TransitionToID: toID is required");
      return false;
    }

    const el = document.getElementById(toID);
    if (!el) return false;

    elementRef.current = el;
    registeredRef.current = registerInstance(toID, instanceId.current, el);

    // moveToID: tính delta góc trên trái source → target
    if (transitionType === "moveToID" && targetID) {
      const targetEl = document.getElementById(targetID);
      if (targetEl) {
        const srcRect = el.getBoundingClientRect();
        const tgtRect = targetEl.getBoundingClientRect();
        deltaRef.current = {
          x: tgtRect.left - srcRect.left,
          y: tgtRect.top - srcRect.top,
        };
      } else {
        console.warn(
          `⚠️ TransitionToID (moveToID): targetID "${targetID}" not found. delta=0`,
        );
        deltaRef.current = { x: 0, y: 0 };
      }
    }

    return registeredRef.current;
  }, [toID, targetID, transitionType]); // eslint-disable-line react-hooks/exhaustive-deps

  // Mount effect
  useEffect(() => {
    if (tryRegister()) return; // ngay lập tức

    // Retry nếu element chưa tồn tại
    let retryCount = 0;
    const MAX_RETRY = 60;
    const retry = () => {
      if (retryCount++ >= MAX_RETRY) {
        console.warn(
          `⚠️ TransitionToID: Element "${toID}" not found after ${MAX_RETRY} retries`,
        );
        return;
      }
      if (!tryRegister()) requestAnimationFrame(retry);
    };
    requestAnimationFrame(retry);

    return () => {
      if (toID) {
        releaseDominantNone(toID, instanceId.current);
        removeInstance(toID, instanceId.current);
      }
    };
  }, [toID]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Per-frame: tính và apply transition ───────────────────────────────────
  useEffect(() => {
    if (!registeredRef.current || !elementRef.current) return;

    const isNoneTransition = !transitionType || transitionType === "none";

    // Ngoài frame range
    if (frame < startFrame || frame > endFrame) {
      // TH2: giải phóng cờ dominantNone nếu đang giữ
      if (isNoneTransition) releaseDominantNone(toID, instanceId.current);
      return;
    }

    const relativeFrame = frame - startFrame;

    // Extra props: static + delta (moveToID)
    const extraProps = {
      ...staticExtraRef.current,
      deltaX: deltaRef.current.x,
      deltaY: deltaRef.current.y,
    };

    // TH2: transition='none' → reset qua registry
    if (isNoneTransition) {
      applyTransitionValues(toID, instanceId.current, {}, { isNone: true });
      return;
    }

    // Tính transition
    const values = calculateTransition(
      relativeFrame,
      transitionType,
      transitionDuration,
      fps,
      transitionLoop,
      durationInFrames,
      transitionDelay,
      extraProps,
      noDelayState,
    );

    // Apply qua registry (TH1: merge với instances khác)
    applyTransitionValues(toID, instanceId.current, values, {
      isNone: values.isNone ?? false,
      isDelaying: values.isDelaying ?? false,
      noDelayState: noDelayState && (values.isDelaying ?? false),
    });
  }, [
    frame,
    fps,
    startFrame,
    endFrame,
    transitionType,
    transitionDuration,
    transitionDelay,
    transitionLoop,
    durationInFrames,
    noDelayState,
    toID,
  ]);

  // Không render gì — chỉ điều khiển DOM
  return null;
};

export default TransitionToID;
