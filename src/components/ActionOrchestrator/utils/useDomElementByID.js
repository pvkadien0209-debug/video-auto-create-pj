import { useState, useRef, useEffect } from "react";

/**
 * 🎯 useDomElementByID
 *
 * Tìm DOM element theo ID để dùng cho createPortal — có retry giống hệt cơ
 * chế đã dùng trong Transitiontoid.jsx (requestAnimationFrame, tối đa 60 lần).
 *
 * ⚡ FAST PATH (trường hợp phổ biến nhất — 99% số frame): element đã tồn tại
 * ngay trong lượt render này → trả về NGAY LẬP TỨC trong thân hàm render,
 * KHÔNG tốn thêm effect/re-render nào — giữ nguyên tốc độ & hành vi cũ 100%.
 *
 * 🔁 SLOW PATH (hiếm — thường chỉ ở frame đầu tiên khi container đích và
 * component dùng toID cùng mount trong một lượt commit, hoặc ở frame đầu của
 * mỗi Chromium worker khi Remotion render với concurrency > 1): trước đây
 * các component (ImageViewActionToID, DivActionToID, TypingTextAction,
 * TypingTextActionToID, StyledCardAction, VideoViewActionToID) gọi thẳng
 * document.getElementById() trong thân render — nếu chưa có, chúng warn rồi
 * return null VĨNH VIỄN cho lượt render đó, không có cơ chế thử lại (khác với
 * TransitionToID — component DUY NHẤT có retry). Giờ dùng effect để tự thử
 * lại qua requestAnimationFrame rồi mới re-render, thay vì bỏ qua hẳn.
 *
 * @param {string|undefined} toID
 * @returns {HTMLElement|null}
 */
export function useDomElementByID(toID) {
  const [, forceTick] = useState(0);
  const foundRef = useRef(false);

  // Lấy trực tiếp trong lúc render — y hệt code cũ (document.getElementById),
  // không thêm chi phí gì khi element đã sẵn sàng.
  const el = toID ? document.getElementById(toID) : null;
  foundRef.current = !!el;

  useEffect(() => {
    if (!toID || foundRef.current) return;

    let cancelled = false;
    let retryCount = 0;
    const MAX_RETRY = 60;

    const retry = () => {
      if (cancelled) return;

      if (document.getElementById(toID)) {
        // Tìm thấy rồi → re-render để lấy lại element ở fast path phía trên.
        forceTick((n) => n + 1);
        return;
      }

      if (retryCount++ >= MAX_RETRY) {
        console.warn(
          `⚠️ Element with ID "${toID}" not found after ${MAX_RETRY} retries`,
        );
        return;
      }

      requestAnimationFrame(retry);
    };

    requestAnimationFrame(retry);

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toID, el]);

  return el;
}

export default useDomElementByID;
