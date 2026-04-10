// src/Components/ActionOrchestrator/utils/transitions/transitionResolver.js
/**
 * 🎬 TRANSITION RESOLVER ENGINE
 *
 * ✅ Data-driven: toàn bộ transition data trong transitions.json
 * ✅ Thêm transition mới: chỉ edit JSON, không sửa code
 * ✅ Hỗ trợ at-01 … at-50 keyframes
 *
 * ─── transitions.json format ─────────────────────────────────────────────────
 * File được wrap [[...]] (mảng của mảng). Engine tự unwrap.
 * Mỗi row có:
 *   transitionName           string  — tên (required)
 *   description              string  — mô tả
 *   isLoopDefault            boolean — transition này THIẾT KẾ để loop
 *                                      (có fadeIn 15f, linear progress khi loop)
 *   useLinearProgressDefault boolean — dùng linear progress thay spring
 *                                      kể cả khi KHÔNG loop (ví dụ bounceIn)
 *   delayState               string  — JSON trạng thái trong giai đoạn delay
 *   at-01 … at-50            number  — vị trí keyframe 0–1 (null = bỏ qua)
 *   keyframes-01 … -50       string  — JSON props tại keyframe đó
 *
 * ─── PHÂN BIỆT isLoopDefault vs transitionLoop (props) ──────────────────────
 *
 *  isLoopDefault   = đặc tính THIẾT KẾ của transition (trong JSON)
 *                    • true  = transition có keyframe lặp trơn (kenBurns, pulse…)
 *                    • false = transition one-time (fadeIn, slideIn…)
 *
 *  transitionLoop  = QUYẾT ĐỊNH CỦA NGƯỜI DÙNG lúc runtime (trong dataAction)
 *                    • có thể khác với isLoopDefault
 *
 *  4 tổ hợp kết quả:
 *  ┌──────────────────┬───────────────┬──────────────────────────────────────┐
 *  │ isLoopDefault    │ transitionLoop│ Hành vi                              │
 *  ├──────────────────┼───────────────┼──────────────────────────────────────┤
 *  │ true  (loop)     │ true          │ ✅ LOOP CHÍNH THỨC                   │
 *  │                  │               │   fadeIn 15f → loop vô hạn           │
 *  │                  │               │   linear progress                    │
 *  ├──────────────────┼───────────────┼──────────────────────────────────────┤
 *  │ true  (loop)     │ false         │ ▶️  ONE-TIME (chạy 1 lần rồi hold)   │
 *  │                  │               │   spring / linear theo JSON          │
 *  │                  │               │   Ví dụ: kenBurns chạy 1 lần        │
 *  ├──────────────────┼───────────────┼──────────────────────────────────────┤
 *  │ false (oneTime)  │ true          │ 🔁 PING-PONG                         │
 *  │                  │               │   forward → reverse → forward…       │
 *  │                  │               │   linear progress                    │
 *  │                  │               │   TH3: moveToID → đến đích → về gốc  │
 *  ├──────────────────┼───────────────┼──────────────────────────────────────┤
 *  │ false (oneTime)  │ false         │ ▶️  ONE-TIME CHUẨN                   │
 *  │                  │               │   spring (hoặc linear nếu JSON=true) │
 *  │                  │               │   hold frame cuối                    │
 *  └──────────────────┴───────────────┴──────────────────────────────────────┘
 *
 * ─── props.xxx trong keyframes ───────────────────────────────────────────────
 *   "translateX": "props.deltaX"  →  extraProps.deltaX tại runtime
 *   Mọi key trong dataAction không phải key tiêu chuẩn → extraProps tự động
 *
 * ─── noDelayState ─────────────────────────────────────────────────────────────
 *   false (default) → trong delay: ẩn element theo delayState JSON
 *   true            → trong delay: KHÔNG thay đổi style (giữ CSS hiện tại)
 *   TransitionToID mặc định noDelayState=true
 *
 * ─── MERGE vs REPLACE (applyTransitionToStyle) ────────────────────────────────
 *   Mặc định (isNoMerge = false/undefined):
 *     transform = baseStyle.transform + " " + transition.transform  (MERGE)
 *     filter    = baseStyle.filter    + " " + transition.filter     (MERGE)
 *     opacity   = baseStyle.opacity   ×      transition.opacity     (MULTIPLY)
 *   Khi isNoMerge = true (set trong dataAction):
 *     transform = transition.transform   (REPLACE)
 *     filter    = transition.filter      (REPLACE)
 *     opacity   = transition.opacity     (REPLACE)
 *
 * ─── Supported keyframe properties ──────────────────────────────────────────
 *   Transform : translateX, translateY, translateZ
 *               translateXPct, translateYPct   (% thay vì px)
 *               rotate, rotateX, rotateY, rotateZ
 *               scale, scaleX, scaleY, scaleZ
 *               skewX, skewY
 *               perspective
 *   Filter    : blur, brightness, saturate, contrast,
 *               hueRotate, invert, grayscale, sepia
 *   Other     : opacity
 *   Note: value có thể là số (15) hoặc string có đơn vị ("15deg", "100px")
 *         → toNumeric() tự động strip unit trước khi interpolate
 *
 * ─── TRƯỜNG HỢP DỄ GÂY LỖI ──────────────────────────────────────────────────
 *   1. transitionDuration=0               → treated as none (không crash)
 *   2. relativeFrame < 0                  → clamp về 0
 *   3. transitionDuration=0 + loop        → guard tránh mod 0 = NaN
 *   4. delayState JSON không hợp lệ       → fallback {}
 *   5. keyframes JSON không hợp lệ        → row bị bỏ qua, warn
 *   6. props.xxx chưa có trong extraProps → default 0 (không crash)
 *   7. flipIn: perspective PHẢI đứng đầu transform string
 *   8. keyframe value "15deg","100px"      → toNumeric strip unit tự động
 *   9. translateX và translateXPct không dùng cùng lúc (px ưu tiên)
 *  10. opacity > 1 (breathe)              → clamp tại registry
 *  11. slideInFromRight delayState lỗi    → engine fallback an toàn
 */
import { useMemo } from "react";
import { spring, useVideoConfig } from "remotion";
import RAW_TRANSITIONS from "./transitions.json";

// ─── Constant ─────────────────────────────────────────────────────────────────
export const LOOP_FADEIN_DURATION = 5; // frames fadeIn intro cho loop transitions

// ─── Unwrap [[...]] → [...] ───────────────────────────────────────────────────
// transitions.json được lưu dạng [[row1, row2, ...]] (wrap 1 lớp)
const _rawRows = Array.isArray(RAW_TRANSITIONS[0])
  ? RAW_TRANSITIONS[0]
  : RAW_TRANSITIONS;

// ─── Internal registry: Map<transitionName, InternalDef> ─────────────────────
/**
 * InternalDef = {
 *   isLoopDefault:            boolean
 *   useLinearProgressDefault: boolean
 *   delayState:               object  — parsed, fallback {}
 *   keyframes:                Array<{at, ...props}>
 * }
 */
let _REGISTRY = new Map();

function _parseDelayState(raw, transitionName) {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed === "object" && parsed !== null) return parsed;
  } catch (_) {
    console.warn(
      `⚠️ transitionResolver: delayState JSON lỗi ở "${transitionName}", dùng fallback`,
    );
  }
  return {};
}

function _buildRegistry(rows) {
  for (const row of rows) {
    const name = row.transitionName;
    if (!name || name === "null" || name === null) continue;

    const delayState = _parseDelayState(row.delayState, name);

    const keyframes = [];
    for (let i = 1; i <= 50; i++) {
      const pad = String(i).padStart(2, "0");
      const atVal = row[`at-${pad}`];
      const kfRaw = row[`keyframes-${pad}`];
      if (atVal === null || atVal === undefined) continue;
      if (!kfRaw || kfRaw === "null") continue;
      try {
        const kfObj = JSON.parse(kfRaw);
        keyframes.push({ at: Number(atVal), ...kfObj });
      } catch (_) {
        console.warn(
          `⚠️ transitionResolver: keyframes JSON lỗi tại "${name}" index ${i}, bỏ qua`,
        );
      }
    }
    if (keyframes.length === 0) continue;

    _REGISTRY.set(name, {
      isLoopDefault: Boolean(row.isLoopDefault),
      useLinearProgressDefault: Boolean(row.useLinearProgressDefault),
      delayState,
      keyframes,
    });
  }
}
_buildRegistry(_rawRows);

// ─── PUBLIC: Runtime loader từ arr05 trong data.js ────────────────────────────
/**
 * Merge thêm transitions từ flat array (cùng format transitions.json).
 * User rows ghi đè built-in nếu trùng tên.
 * arr05 hỗ trợ cả [[...]] và [...].
 * @param {Array} flatRows
 */
export function initTransitions(flatRows) {
  if (!Array.isArray(flatRows) || flatRows.length === 0) return;
  const rows = Array.isArray(flatRows[0]) ? flatRows[0] : flatRows;
  _buildRegistry(rows);
}

// ─── PUBLIC utils ─────────────────────────────────────────────────────────────
/** Tên tất cả transitions (debug / autocomplete) */
export const getTransitionNames = () => [..._REGISTRY.keys()];

/** Tên tất cả loop transitions (isLoopDefault=true) */
export function getLoopTransitionNames() {
  return [..._REGISTRY.entries()]
    .filter(([, d]) => d.isLoopDefault)
    .map(([n]) => n);
}

// Alias tương thích cũ
export const LOOP_TRANSITIONS = getLoopTransitionNames();

// ─── Các key tiêu chuẩn — không phải extraProp ───────────────────────────────
const STANDARD_KEYS = new Set([
  "transition",
  "transitionFrame",
  "transitionLoop",
  "transitionDelay",
  "noDelayState",
  "isNoMerge",
  "toID",
  "targetID",
  "cmd",
  "id",
  "group",
  "styleCss",
  "startFrame",
  "endFrame",
  "timeFixed",
  "code",
]);

/** Lấy extra props từ dataAction (loại bỏ standard keys) */
export function extractExtraProps(dataAction = {}) {
  const extra = {};
  for (const [k, v] of Object.entries(dataAction)) {
    if (!STANDARD_KEYS.has(k)) extra[k] = v;
  }
  return extra;
}

// ─── Resolve "props.xxx" → số thực ───────────────────────────────────────────
function resolveValue(value, extraProps) {
  if (typeof value === "string" && value.startsWith("props.")) {
    const key = value.slice(6);
    const v = extraProps?.[key];
    return v !== undefined && v !== null ? Number(v) : 0;
  }
  return value;
}

// ─── Strip unit suffix để lấy số thuần ───────────────────────────────────────
// "15deg" → 15  |  "100px" → 100  |  "50%" → 50  |  15 → 15
// Tránh NaN khi người dùng nhập "0deg" thay vì 0 trong keyframe JSON
function toNumeric(v) {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = parseFloat(v);
    return isNaN(n) ? 0 : n;
  }
  return 0;
}

// ─── Nội suy tuyến tính giữa các keyframes tại progress 0→1 ──────────────────
function interpolateKeyframes(keyframes, progress, extraProps = {}) {
  const sorted = [...keyframes].sort((a, b) => a.at - b.at);
  const propSet = new Set();
  for (const kf of sorted) {
    for (const k of Object.keys(kf)) {
      if (k !== "at") propSet.add(k);
    }
  }

  const result = {};
  for (const prop of propSet) {
    const defined = sorted.filter(
      (kf) => kf[prop] !== undefined && kf[prop] !== null,
    );
    if (defined.length === 0) continue;

    if (progress <= defined[0].at) {
      result[prop] = toNumeric(resolveValue(defined[0][prop], extraProps));
      continue;
    }
    if (progress >= defined[defined.length - 1].at) {
      result[prop] = toNumeric(
        resolveValue(defined[defined.length - 1][prop], extraProps),
      );
      continue;
    }
    for (let i = 0; i < defined.length - 1; i++) {
      const k1 = defined[i];
      const k2 = defined[i + 1];
      if (progress >= k1.at && progress <= k2.at) {
        const v1 = toNumeric(resolveValue(k1[prop], extraProps));
        const v2 = toNumeric(resolveValue(k2[prop], extraProps));
        const t = k2.at - k1.at > 0 ? (progress - k1.at) / (k2.at - k1.at) : 0;
        result[prop] = v1 + (v2 - v1) * t;
        break;
      }
    }
  }
  return result;
}

// ─── Chuyển property map → { opacity, transform, filter } ────────────────────
// Supported transform : translateX/Y/Z, translateXPct/YPct,
//                       rotate, rotateX, rotateY, rotateZ,
//                       scale, scaleX, scaleY, scaleZ,
//                       skewX, skewY, perspective
// Supported filter    : blur, brightness, saturate, contrast,
//                       hueRotate, invert, grayscale, sepia
function buildStyleFromValues(values) {
  const transforms = [];
  const filters = [];

  // ── perspective PHẢI đứng đầu (flipIn) ──────────────────────────────────
  if (values.perspective != null)
    transforms.push(`perspective(${values.perspective}px)`);

  // ── translate — px ưu tiên hơn % ────────────────────────────────────────
  const hasTx = values.translateX != null || values.translateXPct != null;
  const hasTy = values.translateY != null || values.translateYPct != null;
  if (hasTx || hasTy) {
    const tx =
      values.translateX != null
        ? `${values.translateX}px`
        : values.translateXPct != null
          ? `${values.translateXPct}%`
          : "0";
    const ty =
      values.translateY != null
        ? `${values.translateY}px`
        : values.translateYPct != null
          ? `${values.translateYPct}%`
          : "0";
    transforms.push(`translate(${tx}, ${ty})`);
  }
  if (values.translateZ != null)
    transforms.push(`translateZ(${values.translateZ}px)`);

  // ── rotate ───────────────────────────────────────────────────────────────
  if (values.rotate != null) transforms.push(`rotate(${values.rotate}deg)`);
  if (values.rotateX != null) transforms.push(`rotateX(${values.rotateX}deg)`);
  if (values.rotateY != null) transforms.push(`rotateY(${values.rotateY}deg)`);
  if (values.rotateZ != null) transforms.push(`rotateZ(${values.rotateZ}deg)`);

  // ── scale ────────────────────────────────────────────────────────────────
  if (values.scale != null) transforms.push(`scale(${values.scale})`);
  if (values.scaleX != null) transforms.push(`scaleX(${values.scaleX})`);
  if (values.scaleY != null) transforms.push(`scaleY(${values.scaleY})`);
  if (values.scaleZ != null) transforms.push(`scaleZ(${values.scaleZ})`);

  // ── skew ─────────────────────────────────────────────────────────────────
  if (values.skewX != null) transforms.push(`skewX(${values.skewX}deg)`);
  if (values.skewY != null) transforms.push(`skewY(${values.skewY}deg)`);

  // ── filter ───────────────────────────────────────────────────────────────
  if (values.blur != null && values.blur > 0)
    filters.push(`blur(${values.blur}px)`);
  if (values.brightness != null)
    filters.push(`brightness(${values.brightness})`);
  if (values.saturate != null) filters.push(`saturate(${values.saturate})`);
  if (values.contrast != null) filters.push(`contrast(${values.contrast})`);
  if (values.hueRotate != null)
    filters.push(`hue-rotate(${values.hueRotate}deg)`);
  if (values.invert != null) filters.push(`invert(${values.invert})`);
  if (values.grayscale != null) filters.push(`grayscale(${values.grayscale})`);
  if (values.sepia != null) filters.push(`sepia(${values.sepia})`);

  return {
    opacity: values.opacity ?? 1,
    transform: transforms.join(" "),
    filter: filters.join(" "),
  };
}

// ─── DelayState ───────────────────────────────────────────────────────────────
function getDelayWaitingState(transitionName) {
  const def = _REGISTRY.get(transitionName);
  if (!def || Object.keys(def.delayState).length === 0) {
    return { opacity: 0, transform: "", filter: "" };
  }
  return buildStyleFromValues(def.delayState);
}

// ─── Spring progress helper ───────────────────────────────────────────────────
function springProgress(frame, fps, durationFrames) {
  if (durationFrames <= 0) return 1;
  return spring({
    frame,
    fps,
    config: { damping: 28, stiffness: 120, mass: 0.8 },
    durationInFrames: durationFrames,
    from: 0,
    to: 1,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
/**
 * calculateTransition
 * Hàm chính — tính { opacity, transform, filter } tại một frame.
 *
 * @param {number}  relativeFrame      Frame tương đối (0 = bắt đầu action)
 * @param {string}  transitionType     Tên transition trong transitions.json
 * @param {number}  transitionDuration Số frame cho 1 lần chạy
 * @param {number}  fps                FPS từ useVideoConfig
 * @param {boolean} transitionLoop     Props runtime — loop hay không
 * @param {number}  durationInFrames   Tổng frame của action
 * @param {number}  transitionDelay    Delay frames trước khi bắt đầu
 * @param {object}  extraProps         Runtime props cho "props.xxx"
 * @param {boolean} noDelayState       true → giữ CSS trong delay (không ẩn)
 */
export const calculateTransition = (
  relativeFrame,
  transitionType,
  transitionDuration,
  fps,
  transitionLoop = false,
  durationInFrames = Infinity,
  transitionDelay = 0,
  extraProps = {},
  noDelayState = false,
) => {
  const safeFrame = Math.max(0, relativeFrame ?? 0);

  // ── NONE ────────────────────────────────────────────────────────────────────
  if (!transitionType || transitionType === "none" || transitionDuration <= 0) {
    return { opacity: 1, transform: "", filter: "", isNone: true };
  }

  // ── LOOKUP ──────────────────────────────────────────────────────────────────
  const def = _REGISTRY.get(transitionType);
  if (!def) {
    console.warn(
      `⚠️ transitionResolver: Không tìm thấy transition "${transitionType}". ` +
        `Thêm vào transitions.json hoặc gọi initTransitions().`,
    );
    return { opacity: 1, transform: "", filter: "", isNone: true };
  }

  const { isLoopDefault, useLinearProgressDefault, keyframes } = def;

  // ── DELAY ───────────────────────────────────────────────────────────────────
  const effectiveDelay = Math.max(0, transitionDelay || 0);
  if (effectiveDelay > 0 && safeFrame < effectiveDelay) {
    if (noDelayState) {
      return {
        opacity: undefined,
        transform: undefined,
        filter: undefined,
        isNone: false,
        isComplete: false,
        isDelaying: true,
        noDelayState: true,
      };
    }
    return {
      ...getDelayWaitingState(transitionType),
      isNone: false,
      isComplete: false,
      isDelaying: true,
      noDelayState: false,
    };
  }

  const adjustedFrame = safeFrame - effectiveDelay;

  // ── XÁC ĐỊNH CHẾ ĐỘ CHẠY ────────────────────────────────────────────────────
  //  [A] isLoopDefault=true  + transitionLoop=true  → LOOP CHÍNH THỨC
  //  [B] isLoopDefault=true  + transitionLoop=false → ONE-TIME (hold)
  //  [C] isLoopDefault=false + transitionLoop=true  → PING-PONG
  //  [D] isLoopDefault=false + transitionLoop=false → ONE-TIME CHUẨN

  let effectiveFrame = adjustedFrame;
  let fadeInProgress = 1;
  let useLinear = useLinearProgressDefault;

  if (isLoopDefault && transitionLoop) {
    // ── [A] LOOP CHÍNH THỨC ───────────────────────────────────────────────────
    useLinear = true;
    if (adjustedFrame < LOOP_FADEIN_DURATION) {
      fadeInProgress = adjustedFrame / LOOP_FADEIN_DURATION;
      effectiveFrame = 0;
    } else {
      const loopFrame = adjustedFrame - LOOP_FADEIN_DURATION;
      effectiveFrame =
        transitionDuration > 0 ? loopFrame % transitionDuration : 0;
    }
  } else if (isLoopDefault && !transitionLoop) {
    // ── [B] isLoopDefault=true nhưng user chọn không loop ────────────────────
    if (adjustedFrame > transitionDuration) {
      const finalValues = interpolateKeyframes(keyframes, 1, extraProps);
      return {
        ...buildStyleFromValues(finalValues),
        isNone: false,
        isComplete: true,
        isDelaying: false,
      };
    }
  } else if (!isLoopDefault && transitionLoop) {
    // ── [C] PING-PONG ─────────────────────────────────────────────────────────
    useLinear = true;
    const cycle = transitionDuration * 2;
    const cycleFrame = cycle > 0 ? adjustedFrame % cycle : 0;
    effectiveFrame =
      cycleFrame <= transitionDuration ? cycleFrame : cycle - cycleFrame;
  } else {
    // ── [D] ONE-TIME CHUẨN ────────────────────────────────────────────────────
    if (adjustedFrame > transitionDuration) {
      const finalValues = interpolateKeyframes(keyframes, 1, extraProps);
      return {
        ...buildStyleFromValues(finalValues),
        isNone: false,
        isComplete: true,
        isDelaying: false,
      };
    }
  }

  // ── PROGRESS ────────────────────────────────────────────────────────────────
  const progress = useLinear
    ? Math.min(
        1,
        transitionDuration > 0 ? effectiveFrame / transitionDuration : 1,
      )
    : springProgress(effectiveFrame, fps, transitionDuration);

  // ── INTERPOLATE & BUILD ──────────────────────────────────────────────────────
  const values = interpolateKeyframes(keyframes, progress, extraProps);
  const style = buildStyleFromValues(values);

  // Apply fadeIn cho LOOP CHÍNH THỨC [A]
  if (isLoopDefault && transitionLoop && fadeInProgress < 1) {
    style.opacity = style.opacity * fadeInProgress;
  }

  return {
    ...style,
    isNone: false,
    isComplete: false,
    isDelaying: false,
    isFadingIn: fadeInProgress < 1,
  };
};

// ─────────────────────────────────────────────────────────────────────────────
/**
 * useTransition hook — dùng trong Remotion components.
 * Priority: dataAction > data > defaultTransition > fallback
 *
 * @param {object} extraProps - thêm thủ công (merge với dataAction keys)
 */
export const useTransition = (
  relativeFrame,
  data = {},
  dataAction = {},
  durationInFrames = Infinity,
  defaultTransition = {},
  extraProps = {},
) => {
  const { fps } = useVideoConfig();

  return useMemo(() => {
    const transitionType =
      dataAction.transition !== undefined
        ? dataAction.transition
        : data.transition !== undefined
          ? data.transition
          : defaultTransition.type !== undefined
            ? defaultTransition.type
            : "none";

    const transitionDuration = Number(
      dataAction.transitionFrame !== undefined
        ? dataAction.transitionFrame
        : data.transitionFrame !== undefined
          ? data.transitionFrame
          : defaultTransition.duration !== undefined
            ? defaultTransition.duration
            : 0,
    );

    const transitionLoop = Boolean(
      dataAction.transitionLoop !== undefined
        ? dataAction.transitionLoop
        : data.transitionLoop !== undefined
          ? data.transitionLoop
          : defaultTransition.loop !== undefined
            ? defaultTransition.loop
            : false,
    );

    const transitionDelay = Number(
      dataAction.transitionDelay !== undefined
        ? dataAction.transitionDelay
        : data.transitionDelay !== undefined
          ? data.transitionDelay
          : defaultTransition.delay !== undefined
            ? defaultTransition.delay
            : 0,
    );

    const noDelayState = Boolean(
      dataAction.noDelayState !== undefined
        ? dataAction.noDelayState
        : data.noDelayState !== undefined
          ? data.noDelayState
          : defaultTransition.noDelayState !== undefined
            ? defaultTransition.noDelayState
            : false,
    );

    // extraProps = dataAction non-standard keys + explicit extraProps arg
    const mergedExtra = { ...extractExtraProps(dataAction), ...extraProps };

    const values = calculateTransition(
      relativeFrame,
      transitionType,
      transitionDuration,
      fps,
      transitionLoop,
      durationInFrames,
      transitionDelay,
      mergedExtra,
      noDelayState,
    );

    return {
      ...values,
      config: {
        type: transitionType,
        duration: transitionDuration,
        loop: transitionLoop,
        delay: transitionDelay,
        fadeInDuration: LOOP_FADEIN_DURATION,
        noDelayState,
        isLoopDefault: _REGISTRY.get(transitionType)?.isLoopDefault,
        useLinearProgressDefault:
          _REGISTRY.get(transitionType)?.useLinearProgressDefault,
      },
    };
  }, [
    relativeFrame,
    data,
    dataAction,
    durationInFrames,
    defaultTransition,
    fps,
    extraProps,
  ]);
};

// ─── CSS merge helpers ────────────────────────────────────────────────────────

/** Ghép 2 transform string, bỏ qua chuỗi rỗng */
export const mergeTransforms = (existing = "", transition = "") => {
  if (!transition) return existing;
  if (!existing) return transition;
  return `${existing} ${transition}`.trim();
};

/** Ghép 2 filter string, bỏ qua chuỗi rỗng */
export const mergeFilters = (existing = "", transition = "") => {
  if (!transition) return existing;
  if (!existing) return transition;
  return `${existing} ${transition}`.trim();
};

/**
 * Apply transition values lên React style object.
 *
 * Mặc định — MERGE:
 *   transform = base + " " + transition   (nối chuỗi)
 *   filter    = base + " " + transition   (nối chuỗi)
 *   opacity   = base × transition         (nhân — giữ opacity gốc)
 *
 * Khi isNoMerge=true — REPLACE:
 *   transform, filter, opacity đều bị ghi đè hoàn toàn
 *
 * @param {object}  baseStyle        — React style object hiện tại của element
 * @param {object}  transitionValues — output từ calculateTransition / useTransition
 * @param {boolean} isNoMerge        — true → replace thay vì merge
 */
export const applyTransitionToStyle = (
  baseStyle,
  transitionValues,
  isNoMerge = false,
) => {
  // Không có transition → giữ nguyên base
  if (transitionValues.isNone) return baseStyle;

  // Trong delay + noDelayState → giữ nguyên base
  if (transitionValues.isDelaying && transitionValues.noDelayState)
    return baseStyle;

  if (isNoMerge) {
    // ── REPLACE: ghi đè hoàn toàn ─────────────────────────────────────────
    return {
      ...baseStyle,
      opacity: transitionValues.opacity,
      transform: transitionValues.transform || "",
      ...(transitionValues.filter ? { filter: transitionValues.filter } : {}),
    };
  }

  // ── MERGE (default) ───────────────────────────────────────────────────────
  const combinedTransform = mergeTransforms(
    baseStyle.transform || "",
    transitionValues.transform || "",
  );
  const combinedFilter = mergeFilters(
    baseStyle.filter || "",
    transitionValues.filter || "",
  );
  // opacity: nhân để giữ nguyên base opacity, transition chỉ nhân thêm
  const combinedOpacity =
    (baseStyle.opacity ?? 1) * (transitionValues.opacity ?? 1);

  return {
    ...baseStyle,
    opacity: combinedOpacity,
    transform: combinedTransform,
    ...(combinedFilter ? { filter: combinedFilter } : {}),
  };
};
