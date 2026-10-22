// _shared/Section.jsx — dùng chung cho MỌI template.
//
// Mỗi phần tử nhìn thấy/nghe thấy trong video được bọc trong <Section code="HEAD">.
//  • Trong Remotion Studio, timeline hiện tên "T01·HEAD" → biết ngay mã để ra lệnh.
//  • Bật prop showSections: true (sửa trong sidebar Props của Studio) → mỗi mục có
//    viền đỏ + nhãn mã ngay trên hình.
import React from "react";
import { Sequence } from "remotion";

export const Section = ({ tpl, code, from = 0, durationInFrames, children }) => (
  <Sequence
    name={`${tpl}·${code}`}
    from={from}
    durationInFrames={durationInFrames}
    layout="none"
  >
    {children}
  </Sequence>
);

// Nhãn debug: đặt BÊN TRONG phần tử của mục (phần tử cần position khác static).
// Chỉ render khi showSections = true.
export const SecLabel = ({ tpl, code, show }) =>
  !show ? null : (
  <div
    style={{
      position: "absolute",
      zIndex: 99999,
      padding: "4px 10px",
      background: "red",
      color: "white",
      fontSize: 28,
      fontFamily: "monospace",
      fontWeight: 700,
      pointerEvents: "none",
      top: 0,
      left: 0,
      lineHeight: 1.2,
      fontStyle: "normal",
      WebkitTextStroke: "0",
      textShadow: "none",
    }}
    data-section={`${tpl}.${code}`}
  >
    {tpl}.{code}
  </div>
);

// Viền đỏ cho mục khi showSections = true
export const debugOutline = (show) =>
  show ? { outline: "4px dashed red", outlineOffset: -4 } : null;

// Gộp style mặc định của template với override theo từng video:
// videos.js → style: { HEAD: { fontSize: 90 } }
export const mergeSectionStyles = (base, override = {}) => {
  const out = { ...base };
  for (const code of Object.keys(override || {})) {
    out[code] = { ...(base[code] || {}), ...override[code] };
  }
  return out;
};
