// T01_InfoTable/index.jsx — BỐ CỤC + HIỆU ỨNG template CSK003 · T01.
// Thứ tự hiện: [SUBJECT] → [DETAIL] → [SUBJECT_TABLE] → [TABLE] → [NOTICE]  (xong trước frame 30)
// Tìm nhanh mục bằng Ctrl+F "[T01.<MÃ>]".
import React, { useEffect, useRef, useState } from "react";
import {
  AbsoluteFill,
  Easing,
  continueRender,
  delayRender,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {
  Section,
  SecLabel,
  debugOutline,
  mergeSectionStyles,
} from "../../../CSK002/templates/_shared/Section.jsx";
import { META, DEFAULTS, SIZE, TIMING } from "./config.js";
import { STYLES } from "./styles.js";

const T = META.code;
const has = (v) => v !== null && v !== undefined && String(v).trim() !== "";

// Hiệu ứng vào: mờ → rõ + trượt lên
const useEnter = ({ from, dur }, dy = 26) => {
  const f = useCurrentFrame();
  const opt = {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  };
  const t = interpolate(f, [from, from + dur], [0, 1], opt);
  return { opacity: t, transform: `translateY(${(1 - t) * dy}px)` };
};

const Row = ({ cells, idx, total, S }) => {
  const { from, dur, spread } = TIMING.TABLE_ROWS;
  const step = total > 1 ? spread / (total - 1) : 0;
  const anim = useEnter({ from: from + idx * step, dur }, 14);
  return (
    <tr style={{ ...(idx % 2 === 1 ? S.ROW_ALT : null), ...anim }}>
      {cells.map((c, j) => (
        <td key={j} style={{ ...S.TD, ...(j === 0 ? S.TD_FIRST : null) }}>
          {c}
        </td>
      ))}
    </tr>
  );
};

// ─── Tự thu nhỏ khi nội dung dài hơn khung ─────────────────────────────────
// Đo 1 lần sau khi font sẵn sàng (delayRender giữ frame cho tới khi đo xong).
const useAutoFit = (innerRef, availW, availH, deps) => {
  const [scale, setScale] = useState(1);
  const [handle] = useState(() => delayRender("CSK003 auto-fit"));

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        await document.fonts?.ready;
      } catch {
        /* ignore */
      }
      const el = innerRef.current;
      let s = 1;
      if (el) {
        const prevW = el.style.width;
        // Tìm s lớn nhất sao cho (chiều cao khi rộng availW/s) × s ≤ availH  (chia đôi)
        const visualH = (sc) => {
          el.style.width = `${availW / sc}px`;
          return el.scrollHeight * sc;
        };
        if (visualH(1) > availH) {
          let lo = 0.3;
          let hi = 1;
          for (let i = 0; i < 14; i++) {
            const mid = (lo + hi) / 2;
            if (visualH(mid) <= availH) lo = mid;
            else hi = mid;
          }
          s = lo;
        }
        el.style.width = prevW;
      }
      if (alive) setScale(s);
      continueRender(handle);
    })();
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scale;
};

// ─── Template ───────────────────────────────────────────────────────────────
export const InfoTable = (props) => {
  const p = { ...DEFAULTS, ...props };
  const S = mergeSectionStyles(STYLES, p.style);
  const dbg = p.showSections;
  const columns = p.columns || [];
  const rows = p.rows || [];

  // Vùng khả dụng = khung − padding của FRAME
  const PAD_X = 48;
  const PAD_Y = 44;
  const availW = SIZE.width - PAD_X * 2;
  const availH = SIZE.height - PAD_Y * 2;

  const innerRef = useRef(null);
  const scale = useAutoFit(innerRef, availW, availH, [
    p.subject,
    p.detail,
    p.subjectTable,
    p.notice,
    JSON.stringify(columns),
    JSON.stringify(rows),
    JSON.stringify(p.style),
  ]);

  const aSubject = useEnter(TIMING.SUBJECT);
  const aDetail = useEnter(TIMING.DETAIL);
  const aSubTable = useEnter(TIMING.SUBJECT_TABLE);
  const aHead = useEnter(TIMING.TABLE_HEAD, 14);
  const aNotice = useEnter(TIMING.NOTICE);

  const fits = scale >= 0.999;

  return (
    <AbsoluteFill style={S.ROOT}>
      <div
        style={{
          ...S.FRAME,
          padding: `${PAD_Y}px ${PAD_X}px`,
          justifyContent: fits ? "center" : "flex-start",
        }}
      >
        <div
          ref={innerRef}
          style={{
            width: fits ? "100%" : availW / scale,
            transform: fits ? undefined : `scale(${scale})`,
            transformOrigin: "top left",
            flexShrink: 0,
          }}
        >
          {/* ═══ [T01.SUBJECT] ═══ */}
          {has(p.subject) && (
            <Section tpl={T} code="SUBJECT">
              <div style={{ ...S.SUBJECT, ...aSubject, ...debugOutline(dbg) }}>
                <SecLabel tpl={T} code="SUBJECT" show={dbg} />
                {p.subject}
              </div>
            </Section>
          )}

          {/* ═══ [T01.DETAIL] ═══ */}
          {has(p.detail) && (
            <Section tpl={T} code="DETAIL">
              <div style={{ ...S.DETAIL, ...aDetail, ...debugOutline(dbg) }}>
                <SecLabel tpl={T} code="DETAIL" show={dbg} />
                {p.detail}
              </div>
            </Section>
          )}

          {/* ═══ [T01.SUBJECT_TABLE] ═══ */}
          {has(p.subjectTable) && (
            <Section tpl={T} code="SUBJECT_TABLE">
              <div style={{ ...S.SUBJECT_TABLE, ...aSubTable, ...debugOutline(dbg) }}>
                <SecLabel tpl={T} code="SUBJECT_TABLE" show={dbg} />
                {p.subjectTable}
              </div>
            </Section>
          )}

          {/* ═══ [T01.TABLE] ═══ */}
          {columns.length > 0 && (
            <Section tpl={T} code="TABLE">
              <div style={{ position: "relative", ...aHead, ...debugOutline(dbg) }}>
                <SecLabel tpl={T} code="TABLE" show={dbg} />
                <table style={S.TABLE}>
                  <thead>
                    <tr>
                      {columns.map((c, j) => (
                        <th key={j} style={S.TH}>
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <Row key={i} cells={r} idx={i} total={rows.length} S={S} />
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          )}

          {/* ═══ [T01.NOTICE] ═══ */}
          {has(p.notice) && (
            <Section tpl={T} code="NOTICE">
              <div style={{ ...S.NOTICE, ...aNotice, ...debugOutline(dbg) }}>
                <SecLabel tpl={T} code="NOTICE" show={dbg} />
                {has(p.noticeLabel) && <div style={S.NOTICE_LABEL}>{p.noticeLabel}</div>}
                <div>{p.notice}</div>
              </div>
            </Section>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default InfoTable;
