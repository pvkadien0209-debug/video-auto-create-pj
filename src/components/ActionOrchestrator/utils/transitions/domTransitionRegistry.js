// src/Components/ActionOrchestrator/utils/transitions/domTransitionRegistry.js
/**
 * 🗂️ DOM TRANSITION REGISTRY
 *
 * Quản lý nhiều TransitionToID instances cùng nhắm vào 1 DOM element.
 *
 * ─── CÁC TRƯỜNG HỢP XỬ LÝ ────────────────────────────────────────────────────
 *
 * TH1 — MERGE (element đã có transition, thêm TransitionToID mới):
 *   - originalStyle lưu 1 lần duy nhất (trước khi bất kỳ instance nào touch)
 *   - Mỗi instance contribute { opacity, transform, filter } riêng
 *   - Kết quả: opacity nhân nhau, transform/filter nối thêm nhau
 *   - Ví dụ: instance A rotate(10deg) + instance B translateY(-20px)
 *            → final transform = "rotate(10deg) translateY(-20px)"
 *
 * TH2 — RESET bằng none (transition='none'):
 *   - dominantNone instance xóa toàn bộ contributions
 *   - Restore về originalStyle gốc
 *   - Cờ dominantNone ngăn các instance khác ghi đè
 *   - Khi instance(none) ra khỏi frame range → tự gọi releaseDominantNone()
 *     → các instance còn lại resume bình thường
 *
 * TH3 — PING-PONG LOOP (xử lý trong calculateTransition, không ở registry):
 *   - registry chỉ nhận output đã tính xong từ calculateTransition
 *
 * ─── EDGE CASES ───────────────────────────────────────────────────────────────
 *   - Element chưa tồn tại khi register → return false, caller retry
 *   - opacity gốc = "" hoặc NaN → default 1
 *   - transform gốc là matrix(...) từ computedStyle → normalize ""
 *     (chỉ đọc inline style, không dùng computedStyle)
 *   - dominantNone instance bị removeInstance → cờ tự xóa
 *   - Instance cuối unmount → KHÔNG restore (giữ style hiện tại)
 *   - Nhiều instance cùng frame race → last-write-wins (đủ cho Remotion)
 *
 * ─── opacity MERGE RULE ───────────────────────────────────────────────────────
 *   Opacity nhân nhau (multiplicative blend):
 *   - base=1, instanceA=0.5, instanceB=0.8 → final = 1 * 0.5 * 0.8 = 0.4
 *   - Clamp về [0, 1] sau khi nhân
 *   - Nếu instance chưa có opacity contribution (undefined) → bỏ qua
 */

// Map<elementId, RegistryEntry>
const _registry = new Map();

// ─── Internal helpers ─────────────────────────────────────────────────────────

function _readInlineStyle(el) {
  // Chỉ đọc inline style để tránh matrix từ computedStyle
  return {
    opacity: el.style.opacity !== "" ? el.style.opacity : "1",
    transform: el.style.transform !== "" ? el.style.transform : "",
    filter: el.style.filter !== "" ? el.style.filter : "",
  };
}

function _mergeAndApply(entry) {
  const { el, originalStyle, instances } = entry;
  if (!el || !el.isConnected) return;

  let opacity = parseFloat(originalStyle.opacity);
  if (isNaN(opacity) || opacity < 0) opacity = 1;

  const transforms = originalStyle.transform ? [originalStyle.transform] : [];
  const filters = originalStyle.filter ? [originalStyle.filter] : [];

  for (const [, v] of instances) {
    if (v.opacity !== undefined && v.opacity !== null) {
      opacity *= Number(v.opacity);
    }
    if (v.transform) transforms.push(v.transform);
    if (v.filter) filters.push(v.filter);
  }

  el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
  el.style.transform = transforms.join(" ").trim();
  el.style.filter = filters.join(" ").trim();
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Đăng ký 1 instance vào registry.
 * Phải gọi trước applyTransitionValues.
 * @returns {boolean} true nếu thành công
 */
export function registerInstance(elementId, instanceId, el) {
  if (!el) return false;

  if (!_registry.has(elementId)) {
    _registry.set(elementId, {
      el,
      originalStyle: _readInlineStyle(el), // lưu TRƯỚC khi bất kỳ instance touch
      instances: new Map(),
      dominantNone: null,
    });
  } else {
    // Cập nhật el reference (phòng trường hợp re-mount)
    const entry = _registry.get(elementId);
    entry.el = el;
  }
  return true;
}

/**
 * Apply contribution của 1 instance và reapply style tổng hợp lên DOM.
 *
 * @param {object} values         { opacity, transform, filter } từ calculateTransition
 * @param {object} opts
 * @param {boolean} opts.isNone        TH2: reset toàn bộ về base
 * @param {boolean} opts.isDelaying    Đang trong giai đoạn delay
 * @param {boolean} opts.noDelayState  Nếu true + isDelaying: không ghi gì
 */
export function applyTransitionValues(
  elementId,
  instanceId,
  values,
  opts = {},
) {
  const entry = _registry.get(elementId);
  if (!entry) return;

  const { isNone = false, isDelaying = false, noDelayState = false } = opts;

  // ── TH2: transition='none' ───────────────────────────────────────────────
  if (isNone) {
    entry.dominantNone = instanceId;
    entry.instances.clear();
    // Restore về originalStyle
    const { el, originalStyle } = entry;
    if (el) {
      el.style.opacity = originalStyle.opacity;
      el.style.transform = originalStyle.transform;
      el.style.filter = originalStyle.filter;
    }
    return;
  }

  // ── Có dominantNone đang hold (không phải ta) → block ───────────────────
  if (entry.dominantNone && entry.dominantNone !== instanceId) return;

  // ── Đang delay với noDelayState=true → xóa contribution (nếu có) → reapply
  if (isDelaying && noDelayState) {
    entry.instances.delete(instanceId);
    _mergeAndApply(entry);
    return;
  }

  // ── Bình thường: update contribution → reapply ──────────────────────────
  entry.instances.set(instanceId, {
    opacity: values.opacity,
    transform: values.transform || "",
    filter: values.filter || "",
  });
  _mergeAndApply(entry);
}

/**
 * Giải phóng cờ dominantNone (gọi khi TransitionToID(none) ra khỏi frame range).
 * Các instance khác tự resume.
 */
export function releaseDominantNone(elementId, instanceId) {
  const entry = _registry.get(elementId);
  if (!entry || entry.dominantNone !== instanceId) return;
  entry.dominantNone = null;
  _mergeAndApply(entry); // reapply contributions còn lại
}

/**
 * Xóa instance khi component unmount.
 * Instance cuối → KHÔNG restore (hold last state).
 * Còn instance khác → reapply phần còn lại.
 */
export function removeInstance(elementId, instanceId) {
  const entry = _registry.get(elementId);
  if (!entry) return;

  entry.instances.delete(instanceId);
  if (entry.dominantNone === instanceId) entry.dominantNone = null;

  if (entry.instances.size > 0) {
    _mergeAndApply(entry);
  }
  // else: instance cuối → giữ style hiện tại (hold last state behavior)

  // Cleanup registry khi không còn ai
  if (entry.instances.size === 0 && !entry.dominantNone) {
    _registry.delete(elementId);
  }
}

/**
 * Trả originalStyle đã lưu (để TransitionToID tham chiếu nếu cần).
 */
export function getOriginalStyle(elementId) {
  return _registry.get(elementId)?.originalStyle ?? null;
}

/** Debug: xem toàn bộ registry state */
export function debugRegistry() {
  const out = {};
  for (const [id, entry] of _registry) {
    out[id] = {
      originalStyle: entry.originalStyle,
      dominantNone: entry.dominantNone,
      instanceCount: entry.instances.size,
      instances: Object.fromEntries(entry.instances),
    };
  }
  return out;
}
