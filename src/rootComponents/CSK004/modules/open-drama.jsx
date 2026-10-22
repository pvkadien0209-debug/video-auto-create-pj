// open-drama.jsx — họ OPEN, đợt mở đầu kịch tính (OPEN-17 … OPEN-24). Chữ chính hiện trong ~10 khung đầu.
// OPEN-17 chữ đập · OPEN-18 phóng to hé lộ · OPEN-19 cảnh báo đỏ · OPEN-20 đồng hồ đếm ngược
// OPEN-21 tin nhắn bất ngờ · OPEN-22 đèn sân khấu · OPEN-23 mưa câu hỏi · OPEN-24 cái giá đắt
import React from "react";
import { AbsoluteFill, Easing, interpolate, random, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, SAFE, TYPE } from "../core/theme.js";
import { FitText, Icon, Illus, Kicker, fitSize } from "../core/ui.jsx";
import { EASE_STD, fadeUp, flash, idle, pop, progress, shake, slam } from "../core/motion.js";
import { msToFrames, readMs } from "../core/timing.js";

// ---------- khung dùng chung của file ----------
const W = 1920;
const H = 1080;
const SW = W - SAFE.x * 2; // 1728
const SH = H - SAFE.top - SAFE.bottom; // 770
const clampX = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

const Full = ({ bg = COLORS.ink, children }) => (
  <AbsoluteFill style={{ background: bg, fontFamily: FONT, color: COLORS.ink, overflow: "hidden" }}>{children}</AbsoluteFill>
);
const Safe = ({ children, style }) => (
  <div style={{ position: "absolute", left: SAFE.x, top: SAFE.top, width: SW, height: SH, ...style }}>{children}</div>
);
const words = (t) => String(t || "").trim().split(/\s+/).filter(Boolean);
const clean = (w) => w.toLowerCase().replace(/[.,!?:;“”"'…()]/g, "");
const fmtVi = (n) => Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/** Cộng nhiều cú rung vào nhau (mỗi lần chữ đập là một cú). */
const shakeSum = (frame, hits) =>
  hits.reduce((a, [at, dur, amp]) => { const s = shake(frame, at, dur, amp); return { x: a.x + s.x, y: a.y + s.y }; }, { x: 0, y: 0 });
/** Tia sáng xoay chậm sau hình (dùng nền tối). */
const Rays = ({ size = 900, color = COLORS.surface, opacity = 0.07, rot = 0, n = 16 }) => (
  <svg width={size} height={size} viewBox="-100 -100 200 200" style={{ position: "absolute", left: "50%", top: "50%", marginLeft: -size / 2, marginTop: -size / 2, transform: `rotate(${rot}deg)`, opacity }}>
    {Array.from({ length: n }).map((_, i) => {
      const a = (i / n) * Math.PI * 2;
      const b = a + Math.PI / n;
      return <path key={i} d={`M0 0 L${Math.cos(a) * 100} ${Math.sin(a) * 100} L${Math.cos(b) * 100} ${Math.sin(b) * 100} Z`} fill={color} />;
    })}
  </svg>
);

// ---------- OPEN-17 Chữ đập: từng chữ đập xuống, rung khung, loé sáng, hình đập vào sau cùng ----------
const Open17 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ws = words(data.line);
  const step = 4;
  const hits = ws.map((_, i) => i * step);
  const illAt = hits[hits.length - 1] + 8;
  const hot = new Set((data.hot || []).map(clean));
  const sh = shakeSum(frame, [...hits.map((h) => [h, 7, 8]), [illAt, 14, 24]]);
  const size = fitSize(data.line, 132, 76, 20);
  const lines = Math.ceil((String(data.line).length * 0.56 * size) / 1560);
  const illSize = Math.max(200, Math.min(330, SH - (data.kicker ? 90 : 0) - lines * size * 1.14 - 150));
  const ill = slam(frame, fps, illAt, 3.4);
  const rot = interpolate(progress(frame, illAt, 16), [0, 1], [-30, 0]);
  const fl = Math.max(flash(frame, illAt, 10) * 0.85, flash(frame, 0, 5) * 0.4);
  return (
    <Full bg={COLORS.ink}>
      <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        <div style={{ position: "absolute", left: 0, top: 120, width: W, height: H, opacity: progress(frame, illAt, 10) }}>
          <Rays size={1500} rot={frame * 0.4} opacity={0.06} />
        </div>
        <Safe style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {data.kicker && (
            <div style={{ ...fadeUp(frame, 0, 6), marginBottom: 36 }}>
              <Kicker accent={COLORS.coral}><Icon name="zap" size={36} color="#fff" /> {data.kicker}</Kicker>
            </div>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", columnGap: size * 0.26, rowGap: 4, maxWidth: 1600, fontSize: size, fontWeight: 800, lineHeight: 1.14, letterSpacing: "-0.01em" }}>
            {ws.map((w, i) => {
              const s = slam(frame, fps, hits[i], 2.4);
              const on = hot.has(clean(w));
              return (
                <span key={i} style={{ ...s, display: "inline-block", color: on ? COLORS.ink : COLORS.surface, background: on ? COLORS.marker : "transparent", padding: on ? "0 0.12em" : 0, borderRadius: 14 }}>{w}</span>
              );
            })}
          </div>
          <div style={{ position: "relative", marginTop: 70, width: illSize, height: illSize }}>
            <div style={{ position: "absolute", inset: -illSize * 0.2, opacity: ill.opacity * 0.9, transform: `scale(${0.6 + 0.4 * progress(frame, illAt, 8)})` }}>
              <Illus name="collision" size={illSize * 1.4} />
            </div>
            <div style={{ position: "absolute", inset: 0, opacity: ill.opacity, transform: `${ill.transform} rotate(${rot}deg) translateY(${idle(frame, 6, 70)}px)` }}>
              <Illus name={data.illus || "collision"} size={illSize} />
            </div>
          </div>
        </Safe>
      </div>
      <AbsoluteFill style={{ background: COLORS.surface, opacity: fl }} />
    </Full>
  );
};

// ---------- OPEN-18 Phóng to hé lộ: bắt đầu sát một chi tiết, lùi máy ra thấy cả cảnh, tiêu đề đập vào ----------
const Open18 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const VW = 1500;
  const VH = 470;
  const main = 380;
  const [fx, fy] = data.focus || [0.5, 0.4];
  const px = VW / 2 - main / 2 + fx * main;
  const py = VH / 2 - main / 2 + fy * main;
  const zStart = 18; // cảnh mở đầu được tua trước 18 khung: bắt đầu lùi máy đúng lúc người xem thấy
  const zDur = 32;
  const p = progress(frame, zStart, zDur, EASE_STD);
  const z = (data.zoomFrom || 7) + (1 - (data.zoomFrom || 7)) * p;
  const revealAt = zStart + zDur;
  const around = (data.around || []).slice(0, 4);
  const pos = [[-500, -40], [500, -60], [-330, 120], [330, 110]];
  const ring = progress(frame, revealAt - 4, 18);
  const corner = (r) => ({ position: "absolute", width: 70, height: 70, borderColor: COLORS.surface, borderStyle: "solid", borderWidth: 0, ...r });
  return (
    <Full bg={COLORS.ink}>
      <Safe style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: VW, height: VH, borderRadius: 40, overflow: "hidden", background: COLORS.pineSoft, transform: `scale(${0.96 + 0.04 * progress(frame, 0, 10)})` }}>
          <div style={{ position: "absolute", inset: 0, transformOrigin: `${px}px ${py}px`, transform: `translate(${(1 - p) * (VW / 2 - px)}px, ${(1 - p) * (VH / 2 - py)}px) scale(${z})` }}>
            <div style={{ position: "absolute", left: VW / 2 - 560, top: VH / 2 - 120, width: 1120, height: 300, borderRadius: "50%", background: COLORS.surface, opacity: 0.55 }} />
            <div style={{ position: "absolute", left: VW / 2 - main / 2, top: VH / 2 - main / 2 }}><Illus name={data.illus || "house"} size={main} /></div>
            {around.map((n, i) => (
              <div key={n + i} style={{ position: "absolute", left: VW / 2 + pos[i][0] - 90, top: VH / 2 + pos[i][1] - 90 + idle(frame + i * 17, 8, 80) }}>
                <Illus name={n} size={180} />
              </div>
            ))}
          </div>
          {/* vòng sóng khi lộ cảnh */}
          <div style={{ position: "absolute", left: VW / 2 - 300, top: VH / 2 - 300, width: 600, height: 600, borderRadius: "50%", border: `10px solid ${COLORS.surface}`, opacity: ring > 0 && ring < 1 ? 1 - ring : 0, transform: `scale(${0.4 + ring * 1.6})` }} />
          {/* khung ngắm máy quay */}
          <div style={{ position: "absolute", inset: 26, opacity: 1 - progress(frame, revealAt, 10) }}>
            <div style={corner({ left: 0, top: 0, borderLeftWidth: 8, borderTopWidth: 8, borderTopLeftRadius: 18 })} />
            <div style={corner({ right: 0, top: 0, borderRightWidth: 8, borderTopWidth: 8, borderTopRightRadius: 18 })} />
            <div style={corner({ left: 0, bottom: 0, borderLeftWidth: 8, borderBottomWidth: 8, borderBottomLeftRadius: 18 })} />
            <div style={corner({ right: 0, bottom: 0, borderRightWidth: 8, borderBottomWidth: 8, borderBottomRightRadius: 18 })} />
          </div>
          {data.teaser && (
            <div style={{ ...fadeUp(frame, 0, 6), position: "absolute", left: 50, top: 44, display: "flex", alignItems: "center", gap: 16, padding: "12px 28px", borderRadius: 999, background: COLORS.ink, color: COLORS.surface, fontSize: TYPE.small, fontWeight: 700 }}>
              <Icon name="scan-search" size={44} color={COLORS.marker} /> {data.teaser}
            </div>
          )}
        </div>
        <div style={{ ...slam(frame, fps, revealAt + 2, 1.8), marginTop: 44, maxWidth: 1560 }}>
          <FitText text={data.headline} max={TYPE.h1 + 6} target={32} color={COLORS.surface} />
        </div>
      </Safe>
      <AbsoluteFill style={{ background: COLORS.surface, opacity: flash(frame, revealAt, 8) * 0.6 }} />
    </Full>
  );
};

// ---------- OPEN-19 Cảnh báo đỏ: nền tối, viền nháy như còi, tín hiệu đỏ đập nhịp ----------
const Open19 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const siren = 0.5 + 0.5 * Math.sin((frame / 16) * Math.PI * 2);
  const sh = shake(frame, 2, 14, 18);
  const warnEnd = msToFrames(readMs(data.warning, ctx) * 0.5, fps);
  const stripe = progress(frame, 6, 16);
  return (
    <Full bg={COLORS.ink}>
      <div style={{ position: "absolute", left: 120, top: 140, width: 900, height: 900, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.coral} 0%, transparent 65%)`, opacity: 0.18 + 0.22 * siren }} />
      <div style={{ position: "absolute", inset: 22, borderRadius: 34, border: `16px solid ${COLORS.coral}`, opacity: 0.25 + 0.75 * siren, boxShadow: `inset 0 0 ${40 + 60 * siren}px ${COLORS.coral}` }} />
      <div style={{ position: "absolute", inset: 0, transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        <Safe style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 80 }}>
          <div style={{ position: "relative", width: 420, height: 420, flex: "none", display: "grid", placeItems: "center" }}>
            {[0, 1].map((k) => {
              const t = ((frame + k * 20) % 40) / 40;
              return <div key={k} style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `8px solid ${COLORS.coral}`, opacity: 1 - t, transform: `scale(${0.6 + t * 0.7})` }} />;
            })}
            <div style={{ ...pop(frame, fps, 0), position: "absolute", inset: 40, borderRadius: "50%", background: COLORS.coralSoft, display: "grid", placeItems: "center" }}>
              <div style={{ transform: `scale(${1 + 0.06 * siren}) rotate(${Math.sin(frame / 3) * 3 * (1 - progress(frame, 0, 30))}deg)` }}>
                <Illus name={data.illus || "warning"} size={250} />
              </div>
            </div>
          </div>
          <div style={{ flex: 1, maxWidth: 1180 }}>
            <div style={{ ...fadeUp(frame, 0, 6) }}>
              <Kicker accent={COLORS.coral} style={{ fontSize: TYPE.small, letterSpacing: "0.06em" }}>
                <Icon name="siren" size={44} color="#fff" /> {(data.label || "Cảnh báo").toUpperCase()}
              </Kicker>
            </div>
            <div style={{ height: 22, width: 560 * stripe, margin: "30px 0 26px", borderRadius: 6, background: `repeating-linear-gradient(-45deg, ${COLORS.coral} 0 22px, ${COLORS.ink} 22px 44px)`, backgroundPosition: `${frame * 2}px 0` }} />
            <div style={slam(frame, fps, 2, 1.7)}>
              <FitText text={data.warning} max={TYPE.hero} target={24} color={COLORS.surface} align="left" />
            </div>
            {data.detail && (
              <div style={{ ...fadeUp(frame, warnEnd, 10), marginTop: 30, fontSize: TYPE.body, fontWeight: 600, color: COLORS.line, lineHeight: 1.3 }}>{data.detail}</div>
            )}
          </div>
        </Safe>
      </div>
      <AbsoluteFill style={{ background: COLORS.coral, opacity: flash(frame, 2, 8) * 0.55 }} />
    </Full>
  );
};

// ---------- OPEN-20 Đồng hồ đếm ngược: vòng tích tắc chạy, câu hỏi hiện bên cạnh, hết giờ thì loé đỏ ----------
const Open20 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const from = data.from ?? 3;
  const ticks = Math.min(from, data.ticks ?? 3);
  const start = 18; // khớp với 18 khung tua trước của cảnh đầu: khung 0 của video hiện đúng số bắt đầu
  const tickF = 15;
  const endF = start + ticks * tickF;
  const cont = interpolate(frame, [start, endF], [0, ticks], clampX);
  const done = Math.min(ticks, Math.floor(Math.max(0, frame - start) / tickF));
  const num = from - done;
  const sinceTick = frame < start ? frame + 99 : (frame - start) - done * tickF;
  const numPop = spring({ frame: sinceTick, fps, config: { damping: 10, stiffness: 220 } });
  const arc = 1 - cont / ticks;
  const over = frame >= endF;
  const ringColor = over ? COLORS.coral : ctx.accent;
  const R = 180;
  const C = 2 * Math.PI * R;
  const sh = shake(frame, endF, 14, 18);
  const sweep = (frame * 6) % 360;
  return (
    <Full bg={COLORS.ink}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at 50% 50%, transparent 40%, ${COLORS.coral} 140%)`, opacity: 0.25 + 0.6 * progress(frame, start, endF - start) }} />
      <div style={{ position: "absolute", inset: 0, transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        <Safe style={{ display: "flex", alignItems: "center", gap: 80, paddingLeft: 30 }}>
          <div style={{ ...pop(frame, fps, 0), position: "relative", width: 460, height: 460, flex: "none" }}>
            <svg width={460} height={460} viewBox="-230 -230 460 460" style={{ position: "absolute", inset: 0 }}>
              {Array.from({ length: 60 }).map((_, i) => {
                const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
                const big = i % 5 === 0;
                const lit = Math.abs(((i * 6 - sweep + 360) % 360)) < 30;
                return <line key={i} x1={Math.cos(a) * 206} y1={Math.sin(a) * 206} x2={Math.cos(a) * (big ? 224 : 216)} y2={Math.sin(a) * (big ? 224 : 216)}
                  stroke={lit && !over ? COLORS.marker : COLORS.surface} strokeOpacity={lit ? 1 : 0.35} strokeWidth={big ? 6 : 3} strokeLinecap="round" />;
              })}
              <circle r={R} fill="none" stroke={COLORS.surface} strokeOpacity={0.12} strokeWidth={26} />
              <circle r={R} fill="none" stroke={ringColor} strokeWidth={26} strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - arc)} transform="rotate(-90)" />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: from >= 10 ? 170 : 210, fontWeight: 800, color: over ? COLORS.coral : COLORS.surface, lineHeight: 1, transform: `scale(${1.35 - 0.35 * Math.min(1, numPop)})`, fontVariantNumeric: "tabular-nums" }}>{num}</div>
              {data.unit && <div style={{ fontSize: TYPE.small, fontWeight: 700, color: COLORS.line, marginTop: 6 }}>{data.unit}</div>}
            </div>
            <div style={{ position: "absolute", right: -30, top: -30, transform: `rotate(${over ? Math.sin(frame * 2) * 14 * (1 - progress(frame, endF, 24)) : Math.sin(frame / 4) * 4}deg)` }}>
              <Illus name={data.illus || "stopwatch"} size={150} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            {data.kicker && (
              <div style={{ ...fadeUp(frame, 0, 6), fontSize: TYPE.body, fontWeight: 700, color: COLORS.marker, marginBottom: 26, lineHeight: 1.25 }}>{data.kicker}</div>
            )}
            <div style={{ ...fadeUp(frame, 6, 8), transform: `${fadeUp(frame, 6, 8).transform} scale(${1 + 0.05 * flash(frame, endF, 12)})`, transformOrigin: "left center" }}>
              <FitText text={data.question} max={TYPE.h1 + 8} target={30} color={COLORS.surface} align="left" />
            </div>
          </div>
        </Safe>
      </div>
      <AbsoluteFill style={{ background: COLORS.coral, opacity: flash(frame, endF, 10) * 0.6 }} />
    </Full>
  );
};

// ---------- OPEN-21 Tin nhắn bất ngờ: điện thoại chung chung, thông báo rơi xuống lần lượt, tin cuối là móc câu ----------
const Open21 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const notes = data.notes || [];
  const ats = [];
  let t = 2;
  notes.forEach((n, i) => { ats.push(t); t += Math.max(14, msToFrames(readMs(`${n.from} ${n.text}`, { ...ctx, fresh: i === 0 }) * 0.6, fps)); });
  const hookAt = ats[ats.length - 1] ?? 0;
  const shown = notes.map((n, i) => ({ ...n, i, at: ats[i] })).filter((n) => frame >= n.at).reverse().slice(0, 3); // mới nhất ở trên, giữ 3 tin
  const buzz = ats.reduce((a, at, i) => a + shake(frame, at, 10, i === notes.length - 1 ? 14 : 6).x, 0);
  const capAt = hookAt + 14;
  const PW = 620;
  return (
    <Full bg={COLORS.ink}>
      <div style={{ position: "absolute", left: SAFE.x + 40, top: SAFE.top - 10, width: PW + 120, height: SH + 20, borderRadius: "50%", background: `radial-gradient(circle, ${ctx.accent} 0%, transparent 70%)`, opacity: 0.35 }} />
      <Safe style={{ display: "flex", alignItems: "center", gap: 70 }}>
        {/* điện thoại không thương hiệu */}
        <div style={{ ...fadeUp(frame, 0, 6), flex: "none", width: PW, height: SH, marginLeft: 60, borderRadius: 70, background: COLORS.ink2, padding: 14, boxShadow: "0 30px 80px rgba(0,0,0,.45)", transform: `rotate(${buzz * 0.12}deg) translateX(${buzz}px)` }}>
          <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 58, overflow: "hidden", background: `linear-gradient(170deg, ${ctx.accent} 0%, ${COLORS.ink} 85%)`, padding: "22px 24px" }}>
            <div style={{ position: "absolute", left: "50%", top: 16, width: 150, height: 36, marginLeft: -75, borderRadius: 20, background: COLORS.ink }} />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, paddingRight: 14, height: 40, alignItems: "center" }}>
              <Icon name="signal" size={30} color={COLORS.surface} /><Icon name="wifi" size={30} color={COLORS.surface} /><Icon name="battery-medium" size={34} color={COLORS.surface} />
            </div>
            <div style={{ textAlign: "center", color: COLORS.surface, fontSize: 104, fontWeight: 300, lineHeight: 1.1, marginBottom: 18, fontVariantNumeric: "tabular-nums" }}>{data.time || "22:15"}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {shown.map((n, k) => {
                const isHook = n.i === notes.length - 1;
                const fresh = k === 0;
                const s = spring({ frame: frame - n.at, fps, config: { damping: 13, stiffness: 180 } });
                const st = fresh ? { opacity: Math.min(1, s * 1.5), transform: `translateY(${(1 - s) * -90}px) scale(${0.9 + 0.1 * s})` } : { opacity: 0.82 };
                return (
                  <div key={n.i} style={{ ...st, background: COLORS.surface, borderRadius: 28, padding: fresh ? "18px 22px 20px" : "14px 20px", border: isHook && fresh ? `5px solid ${COLORS.coral}` : `5px solid transparent`, boxShadow: isHook && fresh ? `0 0 ${30 * flash(frame, n.at, 20) + 10}px ${COLORS.coral}` : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 54, height: 54, borderRadius: 16, background: isHook ? COLORS.coral : ctx.accent, display: "grid", placeItems: "center", flex: "none" }}>
                        <Icon name={n.icon || "message-circle"} size={34} color="#fff" />
                      </div>
                      <div style={{ fontSize: 40, fontWeight: 800, flex: fresh ? 1 : "none", whiteSpace: "nowrap" }}>{n.from}</div>
                      {fresh ? <div style={{ fontSize: 40, color: COLORS.muted, fontWeight: 600 }}>bây giờ</div>
                        : <div style={{ fontSize: 40, color: COLORS.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1, minWidth: 0 }}>{n.text}</div>}
                    </div>
                    {fresh && <div style={{ fontSize: 42, fontWeight: isHook ? 700 : 500, lineHeight: 1.25, marginTop: 10, color: COLORS.ink }}>{n.text}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ ...pop(frame, fps, hookAt + 6), transform: `${pop(frame, fps, hookAt + 6).transform} translateY(${idle(frame, 8, 60)}px)` }}>
            <Illus name={data.illus || "face-screaming-in-fear"} size={280} />
          </div>
          {data.caption && (
            <div style={{ ...slam(frame, fps, capAt, 2), marginTop: 36 }}>
              <FitText text={data.caption} max={TYPE.h1 + 6} target={22} color={COLORS.surface} />
            </div>
          )}
        </div>
      </Safe>
      <AbsoluteFill style={{ background: COLORS.coral, opacity: flash(frame, hookAt, 8) * 0.35 }} />
    </Full>
  );
};

// ---------- OPEN-22 Đèn sân khấu: màn đen, vệt đèn quét tìm, dừng ở hình rồi bừng sáng cho tiêu đề ----------
const Open22 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cy = 400;
  const s = spring({ frame: frame - 14, fps, config: { damping: 12, stiffness: 90, mass: 1 } });
  const cx = 240 + (960 - 240) * s;
  const landAt = 36;
  const open = progress(frame, landAt, 22, EASE_STD);
  const R = 250 + open * 420;
  const edge = 90 + open * 300;
  const dark = 0.97 - open * 0.25;
  const beam = 1 - open * 0.6;
  return (
    <Full bg={COLORS.ink2}>
      {/* sân khấu (sáng) */}
      <div style={{ position: "absolute", left: 960 - 520, top: cy + 130, width: 1040, height: 150, borderRadius: "50%", background: COLORS.surface, opacity: 0.16 }} />
      {(data.around || []).slice(0, 2).map((n, i) => (
        <div key={n} style={{ position: "absolute", left: i === 0 ? 960 - 470 : 960 + 300, top: cy + 10 + idle(frame + i * 30, 8, 90) }}><Illus name={n} size={160} /></div>
      ))}
      <div style={{ position: "absolute", left: 960 - 170, top: cy - 160, transform: `translateY(${idle(frame, 6, 100)}px) scale(${1 + 0.05 * progress(frame, landAt - 6, 10) - 0.05 * progress(frame, landAt + 4, 10)})` }}>
        <Illus name={data.illus || "person-standing"} size={340} />
      </div>
      {/* lớp tối có lỗ tròn = vệt đèn */}
      <AbsoluteFill style={{ background: `radial-gradient(circle at ${cx}px ${cy}px, transparent 0, transparent ${R}px, rgba(23,32,51,${dark}) ${R + edge}px)` }} />
      {/* chùm sáng từ trên xuống */}
      <svg width={W} height={H} style={{ position: "absolute", inset: 0, opacity: beam }}>
        <defs>
          <linearGradient id="o22beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={COLORS.surface} stopOpacity="0.28" />
            <stop offset="1" stopColor={COLORS.surface} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon points={`${960 - 50},-20 ${960 + 50},-20 ${cx + R * 0.9},${cy + 60} ${cx - R * 0.9},${cy + 60}`} fill="url(#o22beam)" />
        {Array.from({ length: 14 }).map((_, i) => {
          const yy = ((random(`d${i}`) * 500 + frame * (0.6 + random(`v${i}`))) % 480) - 10;
          const k = yy / 480;
          const xx = 960 + (cx - 960) * k + (random(`x${i}`) - 0.5) * (100 + R * 1.4 * k);
          return <circle key={i} cx={xx} cy={yy} r={2 + random(`r${i}`) * 3} fill={COLORS.surface} opacity={0.5} />;
        })}
      </svg>
      <Safe>
        {data.kicker && (
          <div style={{ ...fadeUp(frame, 0, 6), position: "absolute", left: 0, right: 0, top: 0, display: "flex", justifyContent: "center" }}>
            <Kicker accent={ctx.accent}><Icon name="lamp-ceiling" size={38} color="#fff" /> {data.kicker}</Kicker>
          </div>
        )}
        <div style={{ ...slam(frame, fps, landAt + 6, 1.9), position: "absolute", left: 40, right: 40, top: 535, height: 235, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FitText text={data.headline} max={TYPE.h1 + 4} target={30} color={COLORS.surface} style={{ textShadow: "0 6px 30px rgba(0,0,0,.6)" }} />
        </div>
      </Safe>
      <AbsoluteFill style={{ background: COLORS.surface, opacity: flash(frame, landAt, 10) * 0.3 }} />
    </Full>
  );
};

// ---------- OPEN-23 Mưa câu hỏi: dấu hỏi và hình nhỏ rơi, nảy, chất đống; câu hỏi chính đập vào giữa ----------
const Open23 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pool = [...(data.items || []), "red-question-mark", "white-question-mark", "thinking-face", "red-question-mark", "exclamation-question-mark"];
  const N = 16;
  const bins = 9;
  const binW = SW / bins;
  const heights = Array(bins).fill(0);
  const floor = SAFE.top + SH; // 890
  const drops = Array.from({ length: N }).map((_, i) => {
    const size = 104 + Math.round(random(`s${i}`) * 50);
    const b = Math.floor(random(`b${i}`) * bins);
    const x = SAFE.x + b * binW + binW / 2 + (random(`j${i}`) - 0.5) * binW * 0.5;
    const landY = floor - size / 2 - heights[b];
    heights[b] += size * 0.72;
    return { i, size, x, landY, at: i * 2, name: pool[i % pool.length], spin: (random(`r${i}`) - 0.5) * 50 };
  });
  const qAt = 14;
  const sh = shake(frame, qAt, 14, 18);
  return (
    <Full bg={COLORS.paper}>
      <div style={{ position: "absolute", width: 1100, height: 1100, borderRadius: "50%", left: 410, top: -200, background: ctx.accent, opacity: 0.07 }} />
      <div style={{ position: "absolute", inset: 0, transform: `translate(${sh.x * 0.5}px, ${sh.y * 0.5}px)` }}>
        {drops.map((d) => {
          const t = (frame - d.at) / fps;
          if (t < 0) return null;
          const g = 3200;
          const y0 = -160;
          const tLand = Math.sqrt((2 * (d.landY - y0)) / g);
          let y;
          if (t < tLand) y = y0 + 0.5 * g * t * t;
          else {
            const tb = t - tLand;
            const v = g * tLand * 0.28;
            const hop = Math.max(0, v * tb - 0.5 * g * tb * tb);
            y = d.landY - hop;
          }
          const rot = d.spin * Math.min(1, t / tLand) + (t < tLand ? Math.sin(t * 14) * 10 : 0);
          return (
            <div key={d.i} style={{ position: "absolute", left: d.x - d.size / 2, top: y - d.size / 2, transform: `rotate(${rot}deg)` }}>
              <Illus name={d.name} size={d.size} />
            </div>
          );
        })}
      </div>
      <Safe style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 10 }}>
        {data.kicker && (
          <div style={fadeUp(frame, 0, 6)}><Kicker accent={ctx.accent}><Icon name="circle-help" size={38} color="#fff" /> {data.kicker}</Kicker></div>
        )}
        <div style={{ ...slam(frame, fps, qAt, 2.2), marginTop: 34, transform: `${slam(frame, fps, qAt, 2.2).transform} translate(${sh.x}px, ${sh.y}px) rotate(-1.5deg)` }}>
          <div style={{ maxWidth: 1480, padding: "44px 64px", borderRadius: 40, background: COLORS.surface, border: `6px solid ${ctx.accent}`, boxShadow: "0 30px 70px rgba(23,32,51,.22)" }}>
            <FitText text={data.question} max={TYPE.h1 + 8} target={30} />
          </div>
        </div>
      </Safe>
      <AbsoluteFill style={{ background: COLORS.surface, opacity: flash(frame, qAt, 8) * 0.5 }} />
    </Full>
  );
};

// ---------- OPEN-24 Cái giá đắt: túi tiền rung, tiền mọc cánh bay mất, số tiền mất chạy lên (chỉ khi bài có số) ----------
const Open24 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const hasNum = typeof data.amount === "number";
  const cStart = 6;
  const cDur = 34;
  const val = hasNum ? interpolate(frame, [cStart, cStart + cDur], [0, data.amount], { ...clampX, easing: Easing.out(Easing.cubic) }) : 0;
  const headAt = hasNum ? cStart + cDur + 4 : 6;
  const sh = shake(frame, headAt, 12, hasNum ? 16 : 10);
  const flyers = Array.from({ length: 7 }).map((_, i) => {
    const at = 2 + i * 6;
    const cyc = frame < at ? 0 : ((frame - at) % 42) / 42; // bay mãi theo vòng 42 khung
    const p = Easing.in(Easing.quad)(cyc);
    const dir = i % 2 === 0 ? 1 : -1;
    const dx = dir * (120 + random(`fx${i}`) * 260) * p + Math.sin((frame - at) / 5) * 20 * p;
    const dy = -(380 + random(`fy${i}`) * 200) * p;
    return { i, at, p, dx, dy, rot: dir * 25 * p, sc: 1 - 0.45 * p };
  });
  const bagShake = Math.sin(frame * 1.7) * 6 * (1 - progress(frame, 30, 30));
  return (
    <Full bg={COLORS.ink}>
      <div style={{ position: "absolute", inset: 0, transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        <Safe style={{ display: "flex", alignItems: "center", gap: 70 }}>
          <div style={{ position: "relative", width: 560, height: SH, flex: "none" }}>
            <div style={{ position: "absolute", left: 80, top: 330, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.coral} 0%, transparent 70%)`, opacity: 0.35 }} />
            {flyers.map((f) => (frame < f.at ? null : (
              <div key={f.i} style={{ position: "absolute", left: 280 - 75, top: 470 - 75, opacity: 1 - f.p * 0.9, transform: `translate(${f.dx}px, ${f.dy}px) rotate(${f.rot}deg) scale(${f.sc})` }}>
                <Illus name={f.i % 3 === 2 ? "coin" : "money-with-wings"} size={150} />
              </div>
            )))}
            <div style={{ ...pop(frame, fps, 0), position: "absolute", left: 280 - 170, top: 470 - 150 }}>
              <div style={{ transform: `rotate(${bagShake}deg)`, transformOrigin: "50% 90%" }}><Illus name={data.illus || "money-bag"} size={340} /></div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={fadeUp(frame, 0, 6)}>
              <Kicker accent={COLORS.coral}><Icon name="trending-down" size={40} color="#fff" /> {data.kicker || "Cái giá phải trả"}</Kicker>
            </div>
            {hasNum && (
              <div style={{ marginTop: 34 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 22, color: COLORS.coral, fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>
                  <span style={{ fontSize: 150, lineHeight: 1 }}>−{fmtVi(val)}</span>
                  <span style={{ fontSize: TYPE.h2 }}>{data.unit || "đồng"}</span>
                </div>
                {data.label && <div style={{ ...fadeUp(frame, 10, 10), marginTop: 14, fontSize: TYPE.body, fontWeight: 600, color: COLORS.line }}>{data.label}</div>}
                {data.source && <div style={{ ...fadeUp(frame, 16, 10), marginTop: 12, fontSize: 40, color: COLORS.line, opacity: 0.75 }}>Nguồn: {data.source}</div>}
              </div>
            )}
            <div style={{ ...slam(frame, fps, headAt, hasNum ? 1.6 : 2), marginTop: hasNum ? 40 : 40, transformOrigin: "left center" }}>
              <FitText text={data.headline} max={hasNum ? TYPE.h2 + 8 : TYPE.hero} target={hasNum ? 36 : 26} color={COLORS.surface} align="left" />
            </div>
          </div>
        </Safe>
      </div>
      <AbsoluteFill style={{ background: COLORS.coral, opacity: flash(frame, headAt, 8) * 0.45 }} />
    </Full>
  );
};

// ---------- danh mục ----------
const fr = (f) => (f / 30) * 1000; // khung → ms (30 hình/giây)

export const OPEN_DRAMA = {
  "OPEN-17": { name: "Chữ đập", family: "OPEN", Component: Open17, limits: { line: [3, 12] },
    estimate: (d, c) => fr(words(d.line).length * 4 + 30) + readMs(`${d.kicker || ""} ${d.line}`, c) + 300 },
  "OPEN-18": { name: "Phóng to hé lộ", family: "OPEN", Component: Open18, limits: { teaser: [0, 8], headline: [4, 16], around: [0, 4] },
    estimate: (d, c) => fr(52) + readMs(d.headline, c) + 500 },
  "OPEN-19": { name: "Cảnh báo đỏ", family: "OPEN", Component: Open19, limits: { warning: [3, 12], detail: [0, 14] },
    estimate: (d, c) => readMs(`${d.label || "Cảnh báo"} ${d.warning} ${d.detail || ""}`, c) + 900 },
  "OPEN-20": { name: "Đồng hồ đếm ngược", family: "OPEN", Component: Open20, limits: { from: [3, 60], kicker: [0, 12], question: [4, 22] },
    estimate: (d, c) => Math.max(fr(18 + Math.min(d.from ?? 3, d.ticks ?? 3) * 15) + 1200, fr(6) + readMs(`${d.kicker || ""} ${d.question}`, c) + 400) },
  "OPEN-21": { name: "Tin nhắn bất ngờ", family: "OPEN", Component: Open21, limits: { notes: [2, 4], caption: [0, 8] },
    estimate: (d, c) => {
      const n = d.notes || [];
      let t = 2;
      n.slice(0, -1).forEach((x, i) => { t += Math.max(14, Math.round((readMs(`${x.from} ${x.text}`, { ...c, fresh: i === 0 }) * 0.6 * 30) / 1000)); });
      const last = n[n.length - 1] || { from: "", text: "" };
      return fr(t) + readMs(`${last.from} ${last.text}`, { ...c, fresh: false }) + (d.caption ? readMs(d.caption, { ...c, fresh: false }) + fr(14) : 0) + 500;
    } },
  "OPEN-22": { name: "Đèn sân khấu", family: "OPEN", Component: Open22, limits: { kicker: [0, 8], headline: [4, 16] },
    estimate: (d, c) => fr(44) + readMs(d.headline, c) + 400 },
  "OPEN-23": { name: "Mưa câu hỏi", family: "OPEN", Component: Open23, limits: { kicker: [0, 8], question: [4, 18], items: [0, 4] },
    estimate: (d, c) => Math.max(fr(60), fr(14) + readMs(`${d.kicker || ""} ${d.question}`, c) + 400) },
  "OPEN-24": { name: "Cái giá đắt", family: "OPEN", Component: Open24, limits: { headline: [4, 16], label: [0, 12] },
    estimate: (d, c) => (typeof d.amount === "number" ? fr(44) + readMs(`${d.label || ""} ${d.headline}`, c) + 600 : fr(10) + readMs(`${d.kicker || ""} ${d.headline}`, c) + 900) },
};
