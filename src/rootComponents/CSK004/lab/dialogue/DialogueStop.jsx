// DialogueStop.jsx — bản thử DLG-01 "Tin nhắn + dừng nhận xét" (LAB, chưa vào thư viện module).
// Nhịp: tin nhắn → khoảnh khắc sai → DỪNG (đóng băng, nhạt màu, tem "DỪNG") → người dẫn trượt vào nhận xét
// → tua lại → làm lại cách đúng → kết quả → câu chốt.
// data: { label?, title?, contact:{name, illus}, messages:[{from:"me"|"them", text}], stopAt,
//         host:{name, illus}, verdict:{ok, say, why, law?}, redo:[{from, text, attach?}], result:{ok, say, why}, takeaway }
// Người dẫn tạm là một hình tròn có hình Fluent Emoji; sau này thay bằng mascot (chỉ đổi <HostAvatar>).
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { ensureFonts } from "../../core/fonts.js";
import { COLORS, FONT, SAFE, TYPE } from "../../core/theme.js";
import { FitText, Icon, Illus, IllusBadge, Kicker } from "../../core/ui.jsx";
import { EASE_STD, fadeUp, flash, flyIn, idle, pop, progress, shake, slam, typed } from "../../core/motion.js";
import { msToFrames, readMs } from "../../core/timing.js";

ensureFonts();

const cl = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

// ---------------------------------------------------------------------
// Lịch cảnh (ms → khung). pace < 1 nén thời gian đọc (chỉ dùng cho bản thử chế độ chỉ chữ).
// ---------------------------------------------------------------------
export const dlgPlan = (d, fps, { pace = 1, level = "B1" } = {}) => {
  const r = (t) => readMs(t, { level, fresh: false }) * pace;
  const f = (ms) => msToFrames(ms, fps);
  let t = 700; // nhãn + điện thoại vào
  const rows = [];
  d.messages.slice(0, d.stopAt + 1).forEach((m, i) => {
    const typeAt = t;
    const showAt = t + (m.from === "me" ? 800 : 600);
    t = showAt + (i < d.stopAt ? r(m.text) : 700); // tin sai: giữ 0,7 s rồi dừng
    rows.push({ typeAt: f(typeAt), showAt: f(showAt) });
  });
  const stop = t;
  t += 700; // tem DỪNG đập xuống, lặng
  const hostIn = t;
  const sayAt = t + 350;
  const whyAt = sayAt + r(d.verdict.say);
  const lawAt = whyAt + 500;
  t = whyAt + r(d.verdict.why) + 600;
  const rwStart = t;
  const rwEnd = t + 1100;
  t = rwEnd;
  const redo = (d.redo || []).map((m) => {
    const typeAt = t;
    const showAt = t + 600;
    t = showAt + 900;
    return { typeAt: f(typeAt), showAt: f(showAt) };
  });
  const resAt = t;
  const resWhyAt = resAt + r(d.result.say);
  t = resWhyAt + r(d.result.why) + 500;
  const takeAt = t;
  const end = takeAt + r(d.takeaway) + 1500;
  return {
    rows, redo,
    stop: f(stop), hostIn: f(hostIn), sayAt: f(sayAt), whyAt: f(whyAt), lawAt: f(lawAt),
    rwStart: f(rwStart), rwEnd: f(rwEnd), resAt: f(resAt), resWhyAt: f(resWhyAt), takeAt: f(takeAt), end: f(end),
  };
};

// ---------------------------------------------------------------------
// Phần nhỏ
// ---------------------------------------------------------------------
const FADE_TOP = { WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 80px)", maskImage: "linear-gradient(to bottom, transparent 0, #000 80px)" };

const Dots = ({ frame, size = 13 }) => (
  <div style={{ display: "flex", gap: size * 0.7, alignItems: "center", height: size * 2.6 }}>
    {[0, 1, 2].map((i) => (
      <div key={i} style={{ width: size, height: size, borderRadius: "50%", background: COLORS.muted, opacity: 0.5 + 0.5 * Math.max(0, Math.sin((frame - i * 4) / 3.2)) }} />
    ))}
  </div>
);

/** Mục trong dòng tin, cao dần từ 0. Khi p giảm (tua lại) thì tự co lại. */
const Grow = ({ p, children, max = 700 }) => (
  <div style={{ maxHeight: p * max, opacity: Math.min(1, p * 1.4), transform: `translateY(${(1 - p) * 18}px) scale(${0.92 + 0.08 * p})`, transformOrigin: "bottom right", flex: "none" }}>{children}</div>
);

const Bubble = ({ m, frame, showing, ring = 0 }) => {
  const mine = m.from === "me";
  return (
    <div style={{ display: "flex", justifyContent: mine ? "flex-end" : "flex-start" }}>
      <div style={{
        maxWidth: "88%", padding: showing ? "14px 22px" : "8px 22px", borderRadius: 28,
        borderBottomRightRadius: mine ? 6 : 28, borderBottomLeftRadius: mine ? 28 : 6,
        background: mine ? COLORS.pine : COLORS.surface, color: mine ? "#fff" : COLORS.ink,
        border: mine ? "none" : `2px solid ${COLORS.line}`, fontSize: 40, fontWeight: 600, lineHeight: 1.24,
        boxShadow: ring ? `0 0 0 ${8 * ring}px ${COLORS.coral}, 0 0 0 ${16 * ring}px rgba(229,83,61,.22)` : "none",
      }}>
        {showing && m.attach && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,.16)", border: "2px solid rgba(255,255,255,.35)", borderRadius: 16, padding: "6px 14px", marginBottom: 10, whiteSpace: "nowrap" }}>
            <Illus name="identification-card" size={46} />
            <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1 }}>{m.attach}</div>
          </div>
        )}
        {showing ? m.text : <Dots frame={frame} />}
      </div>
    </div>
  );
};

/** Người dẫn tạm: hình tròn có viền, thở nhẹ. Thay bằng mascot ở đây. */
const HostAvatar = ({ host, size = 150, frame, talking }) => (
  <div style={{ transform: `translateY(${talking ? Math.sin(frame / 2.6) * 4 : idle(frame, 4, 100)}px)` }}>
    <IllusBadge name={host.illus} size={size} bg={COLORS.markerSoft} style={{ border: `6px solid ${COLORS.marker}` }} />
  </div>
);

const VerdictChip = ({ ok, children, style }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 26px 10px 16px", borderRadius: 999,
    background: ok ? COLORS.ok : COLORS.coral, color: "#fff", fontSize: 44, fontWeight: 800, whiteSpace: "nowrap", ...style,
  }}>
    <Icon name={ok ? "circle-check" : "circle-x"} size={44} color="#fff" stroke={2.6} /> {children}
  </div>
);

// ---------------------------------------------------------------------
// Cảnh
// ---------------------------------------------------------------------
export const DialogueStop = ({ data, pace = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const P = dlgPlan(data, fps, { pace });
  const contact = { name: "Liên hệ", illus: "bust-in-silhouette", ...data.contact };
  const host = { name: "Người dẫn", illus: "owl", ...data.host };

  // --- thời gian của điện thoại: chạy → đóng băng → tua ngược → chạy tiếp phần làm lại
  const lastRow = P.rows[data.stopAt];
  const pf = frame < P.stop ? frame
    : frame < P.rwStart ? P.stop
    : frame < P.rwEnd ? interpolate(frame, [P.rwStart, P.rwEnd - 6], [P.stop, lastRow.typeAt - 1], { ...cl, easing: EASE_STD })
    : frame;
  const afterRewind = frame >= P.rwEnd;
  const rewinding = frame >= P.rwStart && frame < P.rwEnd;

  // nhạt màu khi dừng; trả màu khi tua xong
  const gray = progress(frame, P.stop, 8) * (1 - progress(frame, P.rwEnd - 4, 10));
  const dim = `grayscale(${gray}) contrast(${1 - 0.15 * gray}) brightness(${1 + 0.05 * gray})`; // phần không phải chỗ sai: nhạt đi
  const fl = flash(frame, P.stop, 9);
  const sh = shake(frame, P.stop + 2, 9, 10);

  // dòng tin đang hiện
  const items = [];
  data.messages.slice(0, data.stopAt + 1).forEach((m, i) => {
    const { typeAt, showAt } = P.rows[i];
    if (afterRewind && i === data.stopAt) return; // tin sai đã bị tua bỏ
    if (pf < typeAt) return;
    const showing = pf >= showAt;
    if (m.from === "me" && !showing) return; // tin mình: đang gõ ở ô nhập
    items.push({ m, key: `m${i}`, showing, wrong: i === data.stopAt, p: progress(pf, showing ? showAt : typeAt, 8, EASE_STD) });
  });
  if (afterRewind) {
    (data.redo || []).forEach((m, i) => {
      const { typeAt, showAt } = P.redo[i];
      if (frame < showAt) return;
      items.push({ m, key: `r${i}`, showing: true, p: progress(frame, showAt, 8, EASE_STD) });
    });
  }
  // ô nhập: đang gõ tin của mình
  let draft = "";
  const typingRow = (m, a, b, fr) => (m.from === "me" && fr >= a && fr < b ? typed(m.text, fr, fps, a, (String(m.text).length / Math.max(1, b - a - 2)) * fps) : "");
  data.messages.slice(0, data.stopAt + 1).forEach((m, i) => { if (!afterRewind) draft = typingRow(m, P.rows[i].typeAt, P.rows[i].showAt, pf) || draft; });
  if (afterRewind) (data.redo || []).forEach((m, i) => { draft = typingRow(m, P.redo[i].typeAt, P.redo[i].showAt, frame) || draft; });

  // người dẫn
  const hostP = flyIn(frame, fps, P.hostIn, "right", 420);
  const phase = frame < P.rwStart ? "verdict" : frame < P.resAt ? "rewind" : "result";
  const takeP = progress(frame, P.takeAt, 14, EASE_STD);

  const phoneIn = flyIn(frame, fps, 0, "left", 300);
  const lastMine = items.length > 0 && items[items.length - 1].m.from === "me" && items[items.length - 1].showing;

  return (
    <AbsoluteFill style={{ background: COLORS.paper, fontFamily: FONT, color: COLORS.ink, overflow: "hidden" }}>
      {/* vệt màu nền */}
      <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", right: -260, top: -320, background: COLORS.pine, opacity: 0.06, transform: `translate(${idle(frame, 14, 240)}px, ${idle(frame, 10, 300)}px)` }} />

      <div style={{ position: "absolute", left: SAFE.x, right: SAFE.x, top: SAFE.top, bottom: SAFE.bottom, display: "flex", gap: 80, alignItems: "center" }}>
        {/* ---------- điện thoại ---------- */}
        <div style={{ ...phoneIn, flex: "none", position: "relative" }}>
          <div style={{ transform: `translate(${sh.x}px, ${sh.y}px)` }}>
            <div style={{ width: 600, height: 770, borderRadius: 72, background: COLORS.ink, padding: 18, boxShadow: "0 30px 60px rgba(23,32,51,.25)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: 56, background: COLORS.paper, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: 14, left: "50%", width: 150, height: 30, marginLeft: -75, borderRadius: 999, background: COLORS.ink, zIndex: 3 }} />
                <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "58px 26px 18px", background: COLORS.surface, borderBottom: `2px solid ${COLORS.line}`, filter: dim }}>
                  <Icon name="chevron-left" size={44} color={COLORS.pine} stroke={3} />
                  <IllusBadge name={contact.illus} size={78} />
                  <div style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.1, flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{contact.name}</div>
                  <Icon name="phone" size={40} color={COLORS.pine} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 14, padding: "0 20px 14px", overflow: "hidden", ...FADE_TOP }}>
                  {items.map((it) => (
                    <Grow key={it.key} p={it.p}>
                      <div style={{ filter: it.wrong ? "none" : dim, opacity: it.wrong ? 1 : 1 - 0.35 * gray }}>
                        <Bubble m={it.m} frame={frame} showing={it.showing} ring={it.wrong ? gray : 0} />
                      </div>
                    </Grow>
                  ))}
                  {lastMine && (
                    <div style={{ textAlign: "right", fontSize: 34, color: COLORS.muted, fontWeight: 600, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 6 }}>
                      <Icon name="check-check" size={32} color={COLORS.pine} /> Đã gửi
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px 24px", background: COLORS.surface, borderTop: `2px solid ${COLORS.line}`, filter: dim }}>
                  <div style={{ flex: 1, minHeight: 64, borderRadius: 32, background: COLORS.paper, border: `2px solid ${COLORS.line}`, padding: "8px 22px", fontSize: 38, fontWeight: 500, color: draft ? COLORS.ink : COLORS.muted, display: "flex", alignItems: "center", overflow: "hidden", whiteSpace: "nowrap" }}>
                    <span>{draft ? draft.slice(-19) : "Nhắn tin…"}</span>
                    {draft && <span style={{ width: 4, height: 42, background: COLORS.pine, marginLeft: 4, flex: "none" }} />}
                  </div>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: draft ? COLORS.pine : COLORS.line, display: "grid", placeItems: "center" }}>
                    <Icon name="send" size={34} color="#fff" />
                  </div>
                </div>
                {/* lớp tua lại: sọc ngang chạy */}
                {rewinding && (
                  <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(0deg, rgba(23,32,51,.08) 0 3px, transparent 3px 14px)`, backgroundPosition: `0 ${(frame * 23) % 140}px`, zIndex: 4 }} />
                )}
              </div>
            </div>
          </div>
          {/* tem DỪNG */}
          {frame >= P.stop && frame < P.rwStart + 8 && (
            <div style={{ position: "absolute", left: 0, right: 0, top: 36, display: "grid", placeItems: "center", zIndex: 6, opacity: 1 - progress(frame, P.rwStart, 8) }}>
              <div style={{ ...slam(frame, fps, P.stop + 1, 2.4) }}>
                <div style={{ transform: "rotate(-9deg)", display: "flex", alignItems: "center", gap: 16, padding: "14px 40px", border: `10px solid ${COLORS.coral}`, borderRadius: 26, color: COLORS.coral, background: "rgba(255,255,255,.88)", fontSize: 96, fontWeight: 800, letterSpacing: "0.06em", boxShadow: "0 18px 40px rgba(229,83,61,.25)" }}>
                  <Icon name="pause" size={84} color={COLORS.coral} stroke={3.4} /> DỪNG
                </div>
              </div>
            </div>
          )}
          {/* nhãn tua lại */}
          {frame >= P.rwStart && frame < P.rwEnd + 12 && (
            <div style={{ position: "absolute", left: 0, right: 0, top: 300, display: "grid", placeItems: "center", zIndex: 6, opacity: progress(frame, P.rwStart, 6) * (1 - progress(frame, P.rwEnd + 2, 10)) }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 36px", borderRadius: 999, background: COLORS.ink, color: "#fff", fontSize: 60, fontWeight: 800 }}>
                <div style={{ display: "flex", transform: `translateX(${-((frame * 3) % 18)}px)` }}><Icon name="rewind" size={64} color="#fff" stroke={2.6} /></div> Tua lại
              </div>
            </div>
          )}
        </div>

        {/* ---------- cột phải: nhãn, tiêu đề, người dẫn ---------- */}
        <div style={{ flex: 1, height: 770, display: "flex", flexDirection: "column", gap: 26, minWidth: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start", maxHeight: 260 * (1 - progress(frame, P.hostIn - 6, 10, EASE_STD)), opacity: 1 - progress(frame, P.hostIn - 6, 8), overflow: "hidden", marginBottom: -26 * progress(frame, P.hostIn - 6, 10) }}>
            {data.label && (
              <div style={fadeUp(frame, 0, 10)}><Kicker accent={COLORS.ink2} style={{ whiteSpace: "nowrap" }}><Icon name="message-circle" size={36} color="#fff" /> {data.label}</Kicker></div>
            )}
            {data.title && <div style={fadeUp(frame, 4, 12)}><FitText text={data.title} max={TYPE.h2} min={TYPE.small} target={34} align="left" /></div>}
          </div>

          <div style={{ flex: 1, position: "relative" }}>
            {/* trước khi người dẫn vào: hình minh hoạ */}
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", opacity: 1 - progress(frame, P.hostIn - 4, 8), transform: `scale(${1 - 0.1 * progress(frame, P.hostIn - 4, 8)})` }}>
              <div style={{ ...pop(frame, fps, 8), transform: `${pop(frame, fps, 8).transform} translateY(${idle(frame, 8, 120)}px)` }}>
                <IllusBadge name="identification-card" size={330} />
              </div>
            </div>

            {/* người dẫn */}
            {frame >= P.hostIn && (
              <div style={{ ...hostP, position: "absolute", inset: 0 }}>
                <div style={{ height: "100%", background: COLORS.surface, borderRadius: 40, border: `3px solid ${COLORS.line}`, boxShadow: "0 22px 50px rgba(23,32,51,.12)", padding: "34px 44px", display: "flex", flexDirection: "column", gap: 24, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 14, background: phase === "result" ? COLORS.ok : phase === "verdict" ? COLORS.coral : COLORS.muted }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
                    <HostAvatar host={host} frame={frame} size={130} talking={phase !== "rewind" && frame < P.takeAt} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <div style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.1 }}>{host.name}</div>
                      <div style={{ fontSize: 36, fontWeight: 600, color: COLORS.muted }}>{phase === "rewind" ? "Làm lại cách khác nhé" : "nhận xét"}</div>
                    </div>
                  </div>

                  {phase === "verdict" && (
                    <>
                      <div style={fadeUp(frame, P.sayAt, 10)}><VerdictChip ok={data.verdict.ok}>{data.verdict.say}</VerdictChip></div>
                      <div style={{ ...fadeUp(frame, P.whyAt, 10), fontSize: 52, fontWeight: 600, lineHeight: 1.3, color: COLORS.ink2 }}>{data.verdict.why}</div>
                      {data.verdict.law && (
                        <div style={{ ...fadeUp(frame, P.lawAt, 10), marginTop: "auto", display: "flex", alignItems: "center", gap: 14, padding: "12px 20px", borderRadius: 18, background: COLORS.paper, border: `2px solid ${COLORS.line}`, fontSize: 40, fontWeight: 600, color: COLORS.muted, lineHeight: 1.25 }}>
                          <Icon name="scale" size={40} color={COLORS.muted} /> <span>{data.verdict.law}</span>
                        </div>
                      )}
                    </>
                  )}
                  {phase === "rewind" && (
                    <div style={{ flex: 1, display: "grid", placeItems: "center", opacity: 0.55 }}>
                      <Icon name="undo-2" size={160} color={COLORS.muted} stroke={1.6} />
                    </div>
                  )}
                  {phase === "result" && (
                    <>
                      <div style={pop(frame, fps, P.resAt)}><VerdictChip ok={data.result.ok} style={{ transformOrigin: "left" }}>{data.result.say}</VerdictChip></div>
                      <div style={{ ...fadeUp(frame, P.resWhyAt, 10), fontSize: 52, fontWeight: 600, lineHeight: 1.3, color: COLORS.ink2 }}>{data.result.why}</div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* loé sáng lúc dừng */}
      <AbsoluteFill style={{ background: "#fff", opacity: fl * 0.7, pointerEvents: "none" }} />

      {/* ---------- câu chốt ---------- */}
      {frame >= P.takeAt && (
        <AbsoluteFill style={{ background: `rgba(244,246,249,${0.97 * takeP})`, backdropFilter: `blur(${8 * takeP}px)`, display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: SAFE.bottom - SAFE.top }}>
          <div style={{ opacity: takeP, transform: `translateY(${(1 - takeP) * 30}px)`, display: "flex", alignItems: "center", gap: 56, maxWidth: 1600 }}>
            <HostAvatar host={host} frame={frame} size={220} />
            <div style={{ display: "flex", flexDirection: "column", gap: 26, alignItems: "flex-start" }}>
              <Kicker accent={COLORS.pine}><Icon name="arrow-right" size={36} color="#fff" /> Rút ra</Kicker>
              <div style={{ fontSize: TYPE.hero - 8, fontWeight: 800, lineHeight: 1.16, letterSpacing: "-0.01em", textWrap: "balance", maxWidth: 1250 }}>
                <span style={{ backgroundImage: `linear-gradient(${COLORS.marker}, ${COLORS.marker})`, backgroundRepeat: "no-repeat", backgroundSize: `${progress(frame, P.takeAt + 16, 18) * 100}% 0.42em`, backgroundPosition: "0 88%", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>
                  {String(data.takeaway).split(/(?<=,)\s+/).map((part, i, all) => (
                    <React.Fragment key={i}>{part}{i < all.length - 1 && <br />}</React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
