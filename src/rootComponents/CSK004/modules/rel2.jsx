// rel2.jsx — họ REL (quan hệ), đợt 2: sơ đồ vẽ bằng SVG, đường nối vẽ dần (strokeDasharray tính theo khung hình).
// REL-03 Vòng lặp · REL-04 Xương cá · REL-05 Sơ đồ cây · REL-06 Venn 2 vòng · REL-07 Venn 3 vòng
// REL-08 Ma trận 2×2 · REL-09 Phễu · REL-10 Kim tự tháp · REL-11 Cân so sánh · REL-12 Toả tia
// Nút có thể là chuỗi hoặc { label, illus?, icon? } (illus = tên Fluent Emoji, icon = tên Lucide).
import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, DOOR_ACCENT, TYPE } from "../core/theme.js";
import { Icon, Illus, Stage } from "../core/ui.jsx";
import { EASE_STD, fadeUp, idle, pop, progress, shake } from "../core/motion.js";
import { msToFrames, plan } from "../core/timing.js";

// ---------- dùng chung trong tệp ----------
const W = 1728; // bề ngang vùng an toàn
const FULL_H = 770; // chiều cao vùng an toàn (120 → 890)
const TITLE_H = 92;
const boxH = (title) => (title ? FULL_H - TITLE_H : FULL_H);

const N = (x) => (typeof x === "string" ? { label: x } : x || {});
const clamp01 = (v) => Math.max(0, Math.min(1, v));

// Ước lượng xuống dòng (Be Vietnam Pro đậm ≈ 0,66 em mỗi ký tự) để chữ không tràn, không chồng nhau.
const CW = 0.66;
const wrapN = (text, fs, w) => {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  let lines = 1, cur = 0;
  const sp = fs * 0.28;
  for (const wd of words) {
    const ww = wd.length * fs * CW;
    if (cur === 0) cur = ww;
    else if (cur + sp + ww <= w) cur += sp + ww;
    else { lines += 1; cur = ww; }
  }
  return lines;
};
const fitFs = (text, w, maxLines, max = 52, min = 40) => {
  for (let fs = max; fs > min; fs -= 2) if (wrapN(text, fs, w) <= maxLines) return fs;
  return min;
};
const textH = (text, fs, w, lh = 1.18) => wrapN(text, fs, w) * fs * lh;

const sched = (texts, ctx, fps, lead = 400, gap = 300) => {
  const p = plan(texts, { level: ctx.level, lead, gap });
  return { at: p.starts.map((ms) => msToFrames(ms, fps)), endMs: p.endMs, endF: msToFrames(p.endMs, fps) };
};

const palette = (accent) => [accent, ...Object.values(DOOR_ACCENT).filter((c) => c.toLowerCase() !== String(accent).toLowerCase())].slice(0, 3);

const polyD = (pts) => pts.map((p, i) => `${i ? "L" : "M"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
const polyLen = (pts) => pts.reduce((s, p, i) => (i ? s + Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y) : 0), 0);

/** Đường gấp khúc vẽ dần, có mũi tên ở cuối (tuỳ chọn). */
const DrawPath = ({ pts, p, color, width = 8, arrow = false }) => {
  if (!pts || pts.length < 2 || p <= 0) return null;
  const len = Math.max(1, polyLen(pts));
  const a = pts[pts.length - 2], b = pts[pts.length - 1];
  const ang = Math.atan2(b.y - a.y, b.x - a.x);
  const s = width * 2.8;
  const h1 = { x: b.x - s * Math.cos(ang - 0.55), y: b.y - s * Math.sin(ang - 0.55) };
  const h2 = { x: b.x - s * Math.cos(ang + 0.55), y: b.y - s * Math.sin(ang + 0.55) };
  return (
    <g>
      <path d={polyD(pts)} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={len} strokeDashoffset={len * (1 - p)} />
      {arrow && (
        <path d={`M ${h1.x} ${h1.y} L ${b.x} ${b.y} L ${h2.x} ${h2.y}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round"
          strokeLinejoin="round" opacity={clamp01((p - 0.88) * 9)} />
      )}
    </g>
  );
};
const seg = (x1, y1, x2, y2) => [{ x: x1, y: y1 }, { x: x2, y: y2 }];

/** Hình nhỏ của một nút: illus (màu) > icon (Lucide) > hình mặc định. */
const Pic = ({ node, size = 80, def, color = COLORS.pine }) => {
  if (node?.illus) return <Illus name={node.illus} size={size} />;
  if (node?.icon) return <Icon name={node.icon} size={size * 0.78} color={color} stroke={2.2} />;
  if (def) return <Illus name={def} size={size} />;
  return null;
};
const hasPic = (node, def) => !!(node?.illus || node?.icon || def);

const Title = ({ text, frame }) =>
  text ? (
    <div style={{ ...fadeUp(frame, 0, 10), width: W, height: TITLE_H - 18, marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: fitFs(text, W - 40, 1, 60, 44), fontWeight: 800, letterSpacing: "-0.01em", whiteSpace: "nowrap", color: COLORS.ink }}>
      {text}
    </div>
  ) : null;

const Box = ({ h, children, style }) => <div style={{ position: "relative", width: W, height: h, flex: "none", ...style }}>{children}</div>;
const Svg = ({ h, children }) => (
  <svg width={W} height={h} viewBox={`0 0 ${W} ${h}`} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>{children}</svg>
);
const useUid = (p) => p + String(React.useId()).replace(/[^a-zA-Z0-9]/g, "");

const cardStyle = ({ bc = COLORS.line, bw = 3, ...extra }) => ({
  position: "absolute", background: COLORS.surface, borderRadius: 26, border: `${bw}px solid ${bc}`,
  boxShadow: "0 14px 34px rgba(23,32,51,.10)", boxSizing: "border-box", ...extra,
});

// =====================================================================================
// REL-03 Vòng lặp: 3–5 nút trên một vòng elip, mũi tên chạy vòng, rồi một chấm sáng chạy mãi quanh vòng.
// data: { title?, center?, centerIllus?, tone?: "bad", nodes: [3–5] }
// =====================================================================================
const Rel03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const nodes = data.nodes.map(N);
  const n = nodes.length;
  const H = boxH(data.title);
  const cx = W / 2, cy = H / 2;
  const rx = 600, ry = H / 2 - 88;
  const cw = 480, tw = cw - 44 - 98;
  const col = data.tone === "bad" ? COLORS.coral : ctx.accent;
  const cards = nodes.map((nd, i) => {
    const a = ((-90 + (i * 360) / n) * Math.PI) / 180;
    const fs = fitFs(nd.label, tw, 2, 48, 40);
    const h = Math.max(124, textH(nd.label, fs, tw) + 44);
    return { ...nd, a, fs, h, x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) };
  });
  const inside = (p) => cards.some((c) => Math.abs(p.x - c.x) < cw / 2 + 16 && Math.abs(p.y - c.y) < c.h / 2 + 16);
  const arcs = cards.map((c, i) => {
    const a0 = c.a, a1 = i === n - 1 ? cards[0].a + Math.PI * 2 : cards[i + 1].a;
    const pts = [];
    for (let k = 0; k <= 80; k++) {
      const t = a0 + ((a1 - a0) * k) / 80;
      const p = { x: cx + rx * Math.cos(t), y: cy + ry * Math.sin(t) };
      if (!inside(p)) pts.push(p);
    }
    return pts;
  });
  const lead = data.center ? 1100 : 500;
  const { at, endF } = sched(nodes.map((x) => x.label), ctx, fps, lead);
  const closeAt = endF; // mũi tên cuối đóng vòng
  const loopAt = closeAt + 20;
  const period = fps * 3.2;
  const runT = frame >= loopAt ? -Math.PI / 2 + (((frame - loopAt) % period) / period) * Math.PI * 2 : null;
  const dot = runT !== null ? { x: cx + rx * Math.cos(runT), y: cy + ry * Math.sin(runT) } : null;
  const near = (c) => {
    if (runT === null) return 0;
    let d = Math.abs(((runT - c.a + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
    return clamp01(1 - d / 0.45);
  };
  const cPop = pop(frame, fps, 0);
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H}>
        <Svg h={H}>
          <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={COLORS.line} strokeWidth={4} strokeDasharray="4 18" strokeLinecap="round" opacity={progress(frame, 0, 12)} />
          {arcs.map((pts, i) => {
            const t0 = i === n - 1 ? closeAt : at[i + 1];
            return <DrawPath key={i} pts={pts} p={progress(frame, t0, 16, EASE_STD)} color={col} width={9} arrow />;
          })}
          {dot && (
            <g>
              <circle cx={dot.x} cy={dot.y} r={30} fill={col} opacity={0.18} />
              <circle cx={dot.x} cy={dot.y} r={14} fill={col} />
            </g>
          )}
        </Svg>
        {data.center && (
          <div style={{ position: "absolute", left: cx - 160, top: cy - 160, width: 320, height: 320, borderRadius: "50%", background: COLORS.surface,
            border: `5px solid ${col}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, boxSizing: "border-box",
            opacity: cPop.opacity, transform: cPop.transform, boxShadow: "0 18px 40px rgba(23,32,51,.10)" }}>
            <div style={{ transform: data.centerIllus ? `translateY(${idle(frame, 5, 70)}px)` : `rotate(${frame * 1.2}deg)` }}><Illus name={data.centerIllus || "clockwise-vertical-arrows"} size={96} /></div>
            <div style={{ fontSize: fitFs(data.center, 250, 2, 48, 40), fontWeight: 800, textAlign: "center", lineHeight: 1.12, width: 260, color: col }}>{data.center}</div>
          </div>
        )}
        {cards.map((c, i) => {
          const st = i === 0 ? at[0] : at[i] + 12;
          const pp = pop(frame, fps, st);
          const glow = near(c);
          return (
            <div key={i} style={cardStyle({ left: c.x - cw / 2, top: c.y - c.h / 2, width: cw, height: c.h, display: "flex", alignItems: "center", gap: 18, padding: "0 22px",
              opacity: pp.opacity, transform: `${pp.transform} scale(${1 + glow * 0.05})`, bc: glow > 0.2 ? col : COLORS.line })}>
              <div style={{ width: 80, height: 80, flex: "none", borderRadius: 22, background: COLORS.paper, display: "grid", placeItems: "center" }}>
                {hasPic(c) ? <Pic node={c} size={64} color={col} /> : <span style={{ fontSize: 44, fontWeight: 800, color: col }}>{i + 1}</span>}
              </div>
              <div style={{ fontSize: c.fs, fontWeight: 700, lineHeight: 1.18, width: tw }}>{c.label}</div>
            </div>
          );
        })}
      </Box>
    </Stage2>
  );
};

// Khung riêng: nền + vùng an toàn + tiêu đề (không đụng Stage gốc).
const Stage2 = ({ ctx, title, frame, children, bg }) => (
  <Stage accent={ctx.accent} bg={bg}>
    <Title text={title} frame={frame} />
    {children}
  </Stage>
);

// =====================================================================================
// REL-04 Xương cá: đầu cá là vấn đề, sống cá vẽ dần, 4–6 xương là nhóm nguyên nhân (≤ 2 nguyên nhân mỗi nhóm).
// data: { problem, bones: [{ group, causes: [≤2], icon?, illus? }] }
// =====================================================================================
const Rel04 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = FULL_H;
  const sy = H / 2;
  const headW = 340, headX = W - headW, tailW = 60;
  const bones = data.bones;
  const n = bones.length;
  const k = Math.ceil(n / 2);
  const regL = tailW + 4, regR = headX - 10;
  const colW = (regR - regL) / k;
  const cw = colW - 30;
  const lay = bones.map((b, i) => {
    const col = Math.floor(i / 2), top = i % 2 === 0;
    const tw = cw - 48;
    const gfs = fitFs(b.group, tw - 66, 1, 46, 40);
    const causes = (b.causes || []).map((c) => ({ c, h: textH(c, 40, tw - 26, 1.16) }));
    const h = Math.min(H / 2 - 56, 18 * 2 + 54 + causes.reduce((s, x) => s + x.h + 10, 0)); // chừa ≥ 56 px cho xương
    const x = regL + col * colW + 15;
    const y = top ? 0 : H - h;
    const inner = top ? h : H - h;
    const bx0 = x + cw * 0.42;
    return { ...b, top, gfs, causes, h, x, y, inner, bx0, bx1: bx0 + 120, tw };
  });
  const { at } = sched(bones.map((b) => `${b.group} ${(b.causes || []).join(" ")}`), ctx, fps, 1300);
  const spineP = progress(frame, 0, 18, EASE_STD);
  const head = pop(frame, fps, 14);
  const sh = shake(frame, 18, 12, 10);
  const hy = 185;
  const headD = `M ${headX} ${sy - hy} Q ${W - 30} ${sy - hy} ${W} ${sy} Q ${W - 30} ${sy + hy} ${headX} ${sy + hy} Q ${headX + 46} ${sy} ${headX} ${sy - hy} Z`;
  return (
    <Stage ctx={ctx} accent={ctx.accent}>
      <Box h={H} style={{ transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        <Svg h={H}>
          <path d={`M ${tailW} ${sy} L 0 ${sy - 90} Q 22 ${sy} 0 ${sy + 90} Z`} fill={ctx.accent} opacity={0.22 * progress(frame, 0, 10)} />
          <DrawPath pts={seg(tailW - 6, sy, headX + 24, sy)} p={spineP} color={COLORS.ink2} width={12} />
          {lay.map((b, i) => {
            const p = progress(frame, at[i], 14, EASE_STD);
            return (
              <g key={i}>
                <DrawPath pts={seg(b.bx1, sy, b.bx0, b.inner + (b.top ? 6 : -6))} p={p} color={COLORS.ink2} width={7} />
                <circle cx={b.bx1} cy={sy} r={13 * clamp01(p * 3)} fill={ctx.accent} />
              </g>
            );
          })}
          <g style={{ transformOrigin: `${headX + headW / 2}px ${sy}px`, transform: head.transform }} opacity={head.opacity}>
            <path d={headD} fill={COLORS.coralSoft} stroke={COLORS.coral} strokeWidth={7} strokeLinejoin="round" />
          </g>
        </Svg>
        <div style={{ position: "absolute", left: headX + 40, top: sy - hy + 24, width: headW - 76, height: hy * 2 - 40, display: "flex", flexDirection: "column",
          justifyContent: "center", gap: 8, opacity: head.opacity }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: COLORS.coral, display: "flex", alignItems: "center", gap: 10 }}>
            <Illus name={data.illus || "warning"} size={50} /> Vấn đề
          </div>
          <div style={{ fontSize: fitFs(data.problem, headW - 76, 4, 50, 40), fontWeight: 800, lineHeight: 1.14, color: COLORS.ink }}>{data.problem}</div>
        </div>
        {lay.map((b, i) => {
          const f = fadeUp(frame, at[i] + 10, 10);
          return (
            <div key={i} style={cardStyle({ left: b.x, top: b.y, width: cw, height: b.h, padding: "18px 24px", opacity: f.opacity,
              transform: `translateY(${(b.top ? -1 : 1) * (1 - progress(frame, at[i] + 10, 10)) * 24}px)`, borderTop: `8px solid ${ctx.accent}` })}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, height: 54 }}>
                <div style={{ width: 52, height: 52, flex: "none", display: "grid", placeItems: "center" }}>
                  <Pic node={b} size={52} def={b.icon ? undefined : "red-question-mark"} color={ctx.accent} />
                </div>
                <div style={{ fontSize: b.gfs, fontWeight: 800, color: ctx.accent, whiteSpace: "nowrap" }}>{b.group}</div>
              </div>
              {b.causes.map((c, j) => (
                <div key={j} style={{ display: "flex", gap: 12, marginTop: 10, opacity: progress(frame, at[i] + 16 + j * 8, 8) }}>
                  <span style={{ width: 14, height: 14, borderRadius: "50%", background: COLORS.coral, flex: "none", marginTop: 17 }} />
                  <span style={{ fontSize: 40, fontWeight: 600, lineHeight: 1.16, color: COLORS.ink2 }}>{c.c}</span>
                </div>
              ))}
            </div>
          );
        })}
      </Box>
    </Stage>
  );
};

// =====================================================================================
// REL-05 Sơ đồ cây: gốc → 2–4 nhánh → mỗi nhánh 0–3 lá (xếp dọc dưới nhánh, nối kiểu khuỷu tay).
// data: { title?, root, rootIllus?, children: [{ label, sub?, tone?: "ok"|"warn"|"bad", illus?, icon?, children: [≤3] }] }
// =====================================================================================
const TONE = { ok: COLORS.ok, warn: "#b7791f", bad: COLORS.coral };
const Rel05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = boxH(data.title);
  const root = N(data.root);
  const kids = data.children.map(N);
  const n = kids.length;
  const gapX = 40;
  const colW = Math.min(520, (W - gapX * (n - 1)) / n);
  const totalW = colW * n + gapX * (n - 1);
  const x0 = (W - totalW) / 2;
  // gốc
  const rootFs = fitFs(root.label, 1000 - 150, 1, 52, 40);
  const rootW = Math.min(1000, 150 + root.label.length * rootFs * CW);
  const rootH = 104;
  const rootY = 0;
  const kidY = rootH + 72;
  const ktw = colW - 40 - 82;
  const kidFs = Math.min(...kids.map((k) => fitFs(k.label, ktw, 2, 46, 40)));
  const kidH = Math.max(...kids.map((k) => textH(k.label, kidFs, ktw, 1.12) + (k.sub ? 50 : 0) + 34), 104);
  const leafTop = kidY + kidH + 22;
  const indent = 32;
  const ltw = colW - indent - 40;
  const room = H - leafTop;
  // chọn cỡ chữ lá sao cho cột cao nhất vẫn vừa
  let lfs = 48, lgap = 18, lpad = 26;
  const colNeed = (fs, gap, pad) => Math.max(0, ...kids.map((k) => (k.children || []).reduce((s, l) => s + textH(N(l).label, fs, ltw, 1.14) + pad + gap, 0)));
  for (const [fs, gap, pad] of [[48, 18, 26], [46, 16, 24], [44, 16, 22], [42, 14, 20], [40, 12, 18], [40, 10, 14]]) {
    lfs = fs; lgap = gap; lpad = pad;
    if (colNeed(fs, gap, pad) <= room) break;
  }
  const oy = Math.max(0, (room - colNeed(lfs, lgap, lpad)) / 2);
  const lead = data.title ? 1000 : 500;
  const { at } = sched(kids.map((k) => `${k.label} ${k.sub || ""} ${(k.children || []).map((l) => N(l).label).join(" ")}`), ctx, fps, lead);
  const rp = pop(frame, fps, 0);
  const cxOf = (i) => x0 + i * (colW + gapX) + colW / 2;
  const busY = rootH + 34;
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H} style={{ transform: `translateY(${oy}px)` }}>
        <Svg h={H}>
          {kids.map((k, i) => {
            const p = progress(frame, at[i], 14, EASE_STD);
            const pts = [{ x: W / 2, y: rootH }, { x: W / 2, y: busY }, { x: cxOf(i), y: busY }, { x: cxOf(i), y: kidY }];
            const leaves = (k.children || []).map(N);
            const lx = x0 + i * (colW + gapX) + 22;
            let y = leafTop;
            const mids = leaves.map((l) => { const h = textH(l.label, lfs, ltw, 1.14) + lpad; const m = y + h / 2; y += h + lgap; return m; });
            return (
              <g key={i}>
                <DrawPath pts={pts} p={p} color={ctx.accent} width={6} />
                {mids.length > 0 && <DrawPath pts={seg(lx, kidY + kidH, lx, mids[mids.length - 1])} p={progress(frame, at[i] + 14, 8 + mids.length * 9)} color={COLORS.muted} width={4} />}
                {mids.map((m, j) => (
                  <DrawPath key={j} pts={seg(lx, m, lx + indent + 2, m)} p={progress(frame, at[i] + 16 + j * 9, 6)} color={COLORS.muted} width={4} />
                ))}
              </g>
            );
          })}
        </Svg>
        <div style={cardStyle({ left: (W - rootW) / 2, top: rootY, width: rootW, height: rootH, background: ctx.accent, border: "none", display: "flex",
          alignItems: "center", justifyContent: "center", gap: 18, opacity: rp.opacity, transform: rp.transform })}>
          <Pic node={{ illus: data.rootIllus || root.illus, icon: root.icon }} size={72} />
          <div style={{ fontSize: rootFs, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>{root.label}</div>
        </div>
        {kids.map((k, i) => {
          const kp = pop(frame, fps, at[i] + 10);
          const tc = TONE[k.tone] || ctx.accent;
          const leaves = (k.children || []).map(N);
          let y = leafTop;
          const left = x0 + i * (colW + gapX);
          return (
            <React.Fragment key={i}>
              <div style={cardStyle({ left, top: kidY, width: colW, height: kidH, display: "flex", alignItems: "center", gap: 16, padding: "0 20px",
                bc: tc, bw: 4, opacity: kp.opacity, transform: kp.transform })}>
                <div style={{ width: 70, height: 70, flex: "none", display: "grid", placeItems: "center" }}><Pic node={k} size={70} def="seedling" color={tc} /></div>
                <div>
                  <div style={{ fontSize: kidFs, fontWeight: 800, lineHeight: 1.12, color: COLORS.ink }}>{k.label}</div>
                  {k.sub && <div style={{ marginTop: 6, fontSize: 40, fontWeight: 700, color: tc, whiteSpace: "nowrap" }}>{k.sub}</div>}
                </div>
              </div>
              {leaves.map((l, j) => {
                const h = textH(l.label, lfs, ltw, 1.14) + lpad;
                const top = y;
                y += h + lgap;
                const f = fadeUp(frame, at[i] + 20 + j * 9, 8);
                return (
                  <div key={j} style={{ position: "absolute", left: left + indent + 22, top, width: colW - indent - 22, height: h, boxSizing: "border-box",
                    background: COLORS.surface, borderRadius: 18, border: `2px solid ${COLORS.line}`, padding: `0 18px`,
                    display: "flex", alignItems: "center", fontSize: lfs, fontWeight: 600, lineHeight: 1.14, color: COLORS.ink2, ...f }}>
                    {l.label}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </Box>
    </Stage2>
  );
};

// =====================================================================================
// REL-06 Venn 2 vòng: hai elip trượt vào nhau, phần giao bừng sáng (vàng = chỗ nhấn).
// data: { title?, a: { label, items[1–3], illus? }, b: {…}, both: { label?, items[1–3] } | string }
// =====================================================================================
const ellLen = (a, b) => Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
const Rel06 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const uid = useUid("v2");
  const H = boxH(data.title);
  const [cA, cB] = palette(ctx.accent);
  const A = N(data.a), B = N(data.b);
  const both = typeof data.both === "string" ? { items: [data.both] } : data.both || { items: [] };
  const rx = 560, ry = H / 2 - 6, d = 280;
  const cy = H / 2, xA = W / 2 - d, xB = W / 2 + d;
  const lensW = 2 * rx - 2 * d; // 400
  const exW = 400; // khối chữ phần riêng
  const { at } = sched([`${A.label} ${(A.items || []).join(" ")}`, `${B.label} ${(B.items || []).join(" ")}`, `${both.label || ""} ${both.items.join(" ")}`], ctx, fps, 1100);
  const sA = spring({ frame, fps, config: { damping: 15, stiffness: 90 } });
  const sB = spring({ frame: frame - 5, fps, config: { damping: 15, stiffness: 90 } });
  const L = ellLen(rx, ry);
  const light = progress(frame, at[2], 12);
  const flashA = Math.max(0, 1 - Math.abs(frame - at[2] - 6) / 10);
  const side = (S, color, xc, i, dir) => {
    const ifs = Math.min(...(S.items || []).map((t) => fitFs(t, exW - 34, 2, 44, 40)));
    const lx = dir < 0 ? xA - rx + 120 : W - (xA - rx + 120) - exW; // hai khối đối xứng
    const f = fadeUp(frame, at[i], 10);
    return (
      <div style={{ position: "absolute", left: lx, top: 0, height: H, width: exW, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, ...f }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
          <Pic node={S} size={78} def="sparkles" color={color} />
          <div style={{ fontSize: fitFs(S.label, exW - 100, 2, 52, 40), fontWeight: 800, color, lineHeight: 1.1 }}>{S.label}</div>
        </div>
        {(S.items || []).map((t, j) => (
          <div key={j} style={{ display: "flex", gap: 14, opacity: progress(frame, at[i] + 8 + j * 8, 8) }}>
            <span style={{ width: 16, height: 16, borderRadius: "50%", background: color, flex: "none", marginTop: ifs * 0.42 }} />
            <span style={{ fontSize: ifs, fontWeight: 600, lineHeight: 1.16 }}>{t}</span>
          </div>
        ))}
      </div>
    );
  };
  const bfs = Math.min(46, ...both.items.map((t) => fitFs(t, lensW - 200, 3, 46, 40)));
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H}>
        <Svg h={H}>
          <defs>
            <clipPath id={uid}><ellipse cx={xA} cy={cy} rx={rx} ry={ry} /></clipPath>
          </defs>
          <g transform={`translate(${(1 - sA) * -340} 0)`} opacity={clamp01(sA * 2)}>
            <ellipse cx={xA} cy={cy} rx={rx} ry={ry} fill={cA} fillOpacity={0.1} stroke={cA} strokeWidth={7} strokeDasharray={L} strokeDashoffset={L * (1 - progress(frame, 0, 22))} />
          </g>
          <g transform={`translate(${(1 - sB) * 340} 0)`} opacity={clamp01(sB * 2)}>
            <ellipse cx={xB} cy={cy} rx={rx} ry={ry} fill={cB} fillOpacity={0.1} stroke={cB} strokeWidth={7} strokeDasharray={L} strokeDashoffset={L * (1 - progress(frame, 5, 22))} />
          </g>
          <ellipse cx={xB} cy={cy} rx={rx} ry={ry} clipPath={`url(#${uid})`} fill={COLORS.marker} opacity={0.75 * light} />
          <ellipse cx={xB} cy={cy} rx={rx} ry={ry} clipPath={`url(#${uid})`} fill="#ffffff" opacity={0.7 * flashA} />
        </Svg>
        {side(A, cA, xA, 0, -1)}
        {side(B, cB, xB, 1, 1)}
        <div style={{ position: "absolute", left: W / 2 - lensW / 2 + 100, width: lensW - 200, top: 0, height: H, display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", gap: 10, textAlign: "center" }}>
          <div style={{ ...pop(frame, fps, at[2] + 4) }}>
            <Illus name={both.illus || "handshake"} size={86} />
          </div>
          {both.label && <div style={{ fontSize: 44, fontWeight: 800, color: COLORS.ink, ...fadeUp(frame, at[2] + 6, 8) }}>{both.label}</div>}
          {both.items.map((t, j) => (
            <div key={j} style={{ fontSize: bfs, fontWeight: 700, lineHeight: 1.14, ...fadeUp(frame, at[2] + 10 + j * 8, 8) }}>{t}</div>
          ))}
        </div>
      </Box>
    </Stage2>
  );
};

// =====================================================================================
// REL-07 Venn 3 vòng: ba vòng bay vào từ ba phía; chú thích ở hai bên có đường chỉ; tâm là "điểm ngọt".
// data: { title?, a: { label, sub?, illus? }, b: {…}, c: {…}, center: string | { label, illus? } }
// =====================================================================================
const Rel07 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = boxH(data.title);
  const sets = [N(data.a), N(data.b), N(data.c)];
  const center = N(data.center);
  const cols = palette(ctx.accent);
  const r = Math.round((H - 24) / 2.95);
  const d = r * 1.1;
  const cx = W / 2, cy = H / 2 - d * 0.144;
  const C = [
    { x: cx - d / 2, y: cy - d * 0.289, dx: -0.857, dy: -0.514 },
    { x: cx + d / 2, y: cy - d * 0.289, dx: 0.857, dy: -0.514 },
    { x: cx, y: cy + d * 0.577, dx: 0, dy: 1 },
  ];
  const texts = sets.map((s) => `${s.label} ${s.sub || ""}`).concat(center.label);
  const { at } = sched(texts, ctx, fps, 1200);
  const cardW = (W - (d + 2 * r)) / 2 - 40;
  const L = 2 * Math.PI * r;
  // vị trí chú thích: A trái-trên, B phải-trên, C trái-dưới, tâm phải-dưới
  const cardH = (s) => 34 + 64 + (s.sub ? textH(s.sub, 40, cardW - 48, 1.16) + 8 : 0);
  const hs = sets.map(cardH);
  const centerH = 34 + Math.max(84, textH(center.label, 46, cardW - 140, 1.14));
  const pos = [
    { x: 0, y: 6 },
    { x: W - cardW, y: 6 },
    { x: 0, y: H - hs[2] - 6 },
  ];
  const cpos = { x: W - cardW, y: H - centerH - 6 };
  const anchor = (i) => ({ x: C[i].x + C[i].dx * r * 0.8, y: C[i].y + C[i].dy * r * 0.8 });
  const leader = (i) => {
    const a = anchor(i), p = pos[i];
    const ex = i === 1 ? p.x : p.x + cardW;
    const ey = p.y + hs[i] / 2;
    return [{ x: ex, y: ey }, { x: (ex + a.x) / 2, y: ey }, a];
  };
  const cLead = [{ x: cpos.x, y: cpos.y + centerH / 2 }, { x: cx + r * 0.9, y: cpos.y + centerH / 2 }, { x: cx + 18, y: cy + 10 }];
  const glow = progress(frame, at[3], 14);
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H}>
        <Svg h={H}>
          {C.map((c, i) => {
            const s = spring({ frame: frame - i * 5, fps, config: { damping: 14, stiffness: 100 } });
            return (
              <g key={i} transform={`translate(${(1 - s) * c.dx * 260} ${(1 - s) * c.dy * 260})`} opacity={clamp01(s * 2)}>
                <circle cx={c.x} cy={c.y} r={r} fill={cols[i]} fillOpacity={0.12} stroke={cols[i]} strokeWidth={7}
                  strokeDasharray={L} strokeDashoffset={L * (1 - progress(frame, i * 5, 24))} />
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r={52 + 30 * glow + idle(frame, 4, 40) * glow} fill={COLORS.marker} opacity={0.55 * glow} />
          {sets.map((_, i) => <DrawPath key={i} pts={leader(i)} p={progress(frame, at[i], 14, EASE_STD)} color={cols[i]} width={5} />)}
          {sets.map((_, i) => <circle key={"d" + i} cx={anchor(i).x} cy={anchor(i).y} r={10 * clamp01(progress(frame, at[i] + 12, 4))} fill={cols[i]} />)}
          <DrawPath pts={cLead} p={progress(frame, at[3], 14, EASE_STD)} color={COLORS.ink} width={5} />
        </Svg>
        {C.map((c, i) => {
          const pp = pop(frame, fps, 14 + i * 5);
          return (
            <div key={i} style={{ position: "absolute", left: c.x + c.dx * r * 0.4 - 60, top: c.y + c.dy * r * 0.4 - 60, width: 120, height: 120,
              display: "grid", placeItems: "center", ...pp }}>
              <Pic node={sets[i]} size={110} def={["red-heart", "flexed-biceps", "briefcase"][i]} color={cols[i]} />
            </div>
          );
        })}
        <div style={{ position: "absolute", left: cx - 44, top: cy - 44, width: 88, height: 88, ...pop(frame, fps, at[3] + 4) }}>
          <Illus name={center.illus || "glowing-star"} size={88} />
        </div>
        {sets.map((s, i) => {
          const f = fadeUp(frame, at[i] + 10, 10);
          return (
            <div key={i} style={cardStyle({ left: pos[i].x, top: pos[i].y, width: cardW, height: hs[i], padding: "17px 24px", borderLeft: `10px solid ${cols[i]}`, ...f })}>
              <div style={{ fontSize: fitFs(s.label, cardW - 58, 1, 50, 40), fontWeight: 800, color: cols[i], height: 64, display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>{s.label}</div>
              {s.sub && <div style={{ fontSize: 40, fontWeight: 600, lineHeight: 1.16, color: COLORS.ink2, marginTop: 8 }}>{s.sub}</div>}
            </div>
          );
        })}
        <div style={cardStyle({ left: cpos.x, top: cpos.y, width: cardW, height: centerH, padding: "17px 24px", background: COLORS.markerSoft, bc: COLORS.marker,
          display: "flex", alignItems: "center", gap: 16, ...pop(frame, fps, at[3] + 10) })}>
          <Illus name="bullseye" size={76} />
          <div style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.14 }}>{center.label}</div>
        </div>
      </Box>
    </Stage2>
  );
};

// =====================================================================================
// REL-08 Ma trận 2×2: hai trục vẽ dần, 4 ô, các chấm (việc cụ thể) rơi vào ô.
// data: { title?, xAxis, yAxis, quadrants: [TL, TR, BL, BR]{ title, text?, illus?, tone? }, dots: [{ label, q: 0–3 }] (≤ 1 mỗi ô) }
// x: trái → phải tăng dần; y: dưới → trên tăng dần.
// =====================================================================================
const QTONE = { marker: COLORS.markerSoft, soft: COLORS.pineSoft, coral: COLORS.coralSoft, surface: COLORS.surface, paper: "#eef1f5" };
const Rel08 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = boxH(data.title);
  const axL = 92, axB = 78, gap = 18;
  const gx = axL, gw = W - axL, gh = H - axB;
  const cw = (gw - gap) / 2, ch = (gh - gap) / 2;
  const qs = data.quadrants.map(N);
  const dots = data.dots || [];
  const texts = qs.map((q) => `${q.title} ${q.text || ""}`).concat(dots.map((d) => d.label));
  const { at } = sched(texts, ctx, fps, 1300, 250);
  const ax = progress(frame, 0, 18, EASE_STD);
  const ay = progress(frame, 4, 18, EASE_STD);
  const xLab = typeof data.xAxis === "string" ? data.xAxis : data.xAxis?.label;
  const yLab = typeof data.yAxis === "string" ? data.yAxis : data.yAxis?.label;
  const cellXY = (i) => ({ x: gx + (i % 2) * (cw + gap), y: Math.floor(i / 2) * (ch + gap) });
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H}>
        {qs.map((q, i) => {
          const { x, y } = cellXY(i);
          const shown = progress(frame, 8 + i * 4, 10);
          const t = fadeUp(frame, at[i], 10);
          const hot = q.tone === "marker";
          const myDots = dots.map((d, j) => ({ ...d, j })).filter((d) => d.q === i).slice(0, 1);
          const tfs = fitFs(q.title, cw - 64, 1, myDots.length ? 46 : 50, 40);
          const xfs = fitFs(q.text || "", cw - 64, 2, myDots.length ? 42 : 46, 40);
          return (
            <div key={i} style={{ position: "absolute", left: x, top: y, width: cw, height: ch, borderRadius: 28, boxSizing: "border-box", padding: "18px 30px",
              background: QTONE[q.tone] || COLORS.surface, border: `3px solid ${hot ? COLORS.marker : COLORS.line}`, opacity: shown, overflow: "hidden" }}>
              <div style={{ ...t }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ fontSize: tfs, fontWeight: 800, whiteSpace: "nowrap", color: COLORS.ink, flex: 1 }}>{q.title}</div>
                </div>
                {q.text && <div style={{ fontSize: xfs, fontWeight: 600, lineHeight: 1.16, color: COLORS.ink2, marginTop: 8, width: cw - 60 }}>{q.text}</div>}
              </div>
              <div style={{ position: "absolute", right: 24, bottom: 14, ...pop(frame, fps, at[i] + 4) }}>
                <Pic node={q} size={92} def="pushpin" />
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 16, marginRight: 110 }}>
                {myDots.map((d) => {
                  const st = at[qs.length + d.j];
                  const s = spring({ frame: frame - st, fps, config: { damping: 10, stiffness: 160, mass: 0.7 } });
                  return (
                    <div key={d.j} style={{ display: "flex", alignItems: "center", gap: 12, padding: "4px 20px 4px 12px", borderRadius: 999, background: COLORS.surface,
                      border: `3px solid ${ctx.accent}`, opacity: frame < st ? 0 : 1, transform: `translateY(${(1 - s) * -140}px)` }}>
                      <span style={{ width: 26, height: 26, borderRadius: "50%", background: ctx.accent, flex: "none" }} />
                      <span style={{ fontSize: fitFs(d.label, cw - 260, 1, 44, 40), fontWeight: 700, whiteSpace: "nowrap" }}>{d.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <Svg h={H}>
          <DrawPath pts={seg(gx - 16, gh + 22, W - 10, gh + 22)} p={ax} color={COLORS.ink} width={7} arrow />
          <DrawPath pts={seg(gx - 16, gh + 22, gx - 16, 8)} p={ay} color={COLORS.ink} width={7} arrow />
        </Svg>
        <div style={{ position: "absolute", left: gx, width: gw, top: gh + 30, height: axB - 30, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 44, fontWeight: 800, color: COLORS.ink, ...fadeUp(frame, 16, 8) }}>
          {xLab} →
        </div>
        <div style={{ position: "absolute", left: 32 - gh / 2, top: gh / 2 - 30, width: gh, height: 60, transform: "rotate(-90deg)", display: "flex",
          alignItems: "center", justifyContent: "center", fontSize: 44, fontWeight: 800, color: COLORS.ink, ...{ opacity: progress(frame, 18, 8) } }}>
          {yLab} →
        </div>
      </Box>
    </Stage2>
  );
};

// =====================================================================================
// REL-09 Phễu: các tầng hẹp dần từ trên xuống, mỗi tầng rơi vào và viền vẽ dần; hình bên trái, số bên phải.
// data: { title?, stages: [3–5]{ label, value?, illus?, icon? } } — tầng cuối tô vàng (kết quả).
// =====================================================================================
const Rel09 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = boxH(data.title);
  const st = data.stages.map(N);
  const n = st.length;
  const gap = 14;
  const lh = Math.min(170, (H - gap * (n - 1)) / n);
  const y0 = (H - (lh * n + gap * (n - 1))) / 2;
  const wTop = 1220, wBot = n >= 5 ? 700 : 640;
  const wAt = (k) => wTop - ((wTop - wBot) * k) / n; // bề ngang ở mép trên tầng k
  const { at } = sched(st.map((s) => `${s.label} ${s.value || ""}`), ctx, fps, data.title ? 900 : 400);
  const cx = W / 2;
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H}>
        <Svg h={H}>
          {st.map((s, i) => {
            const y = y0 + i * (lh + gap);
            const w1 = wAt(i), w2 = wAt(i + 1);
            const pts = [{ x: cx - w1 / 2, y }, { x: cx + w1 / 2, y }, { x: cx + w2 / 2, y: y + lh }, { x: cx - w2 / 2, y: y + lh }, { x: cx - w1 / 2, y }];
            const drop = spring({ frame: frame - at[i], fps, config: { damping: 13, stiffness: 150 } });
            const last = i === n - 1;
            return (
              <g key={i} transform={`translate(0 ${(1 - drop) * -70})`} opacity={frame < at[i] ? 0 : clamp01(drop * 2)}>
                <path d={polyD(pts) + " Z"} fill={last ? COLORS.marker : ctx.accent} fillOpacity={last ? 0.85 : 0.1 + 0.07 * i} stroke="none" />
                <DrawPath pts={pts} p={progress(frame, at[i], 16, EASE_STD)} color={last ? COLORS.ink : ctx.accent} width={6} />
              </g>
            );
          })}
        </Svg>
        {st.map((s, i) => {
          const y = y0 + i * (lh + gap);
          const w2 = wAt(i + 1), w1 = wAt(i);
          const tw = w2 - 140;
          let fs = 40;
          for (let f = 52; f >= 40; f -= 2) if (wrapN(s.label, f, tw) * f * 1.14 <= lh - 26) { fs = f; break; }
          const f = fadeUp(frame, at[i] + 6, 8);
          return (
            <React.Fragment key={i}>
              <div style={{ position: "absolute", left: cx - tw / 2, top: y, width: tw, height: lh, display: "flex", alignItems: "center", justifyContent: "center",
                textAlign: "center", fontSize: fs, fontWeight: 800, lineHeight: 1.14, color: COLORS.ink, ...f }}>{s.label}</div>
              {hasPic(s) && (
                <div style={{ position: "absolute", left: cx - w1 / 2 - 128, top: y + lh / 2 - 52, ...pop(frame, fps, at[i] + 4) }}>
                  <Pic node={s} size={104} color={ctx.accent} />
                </div>
              )}
              {s.value != null && (
                <div style={{ position: "absolute", left: cx + w1 / 2 + 26, top: y, height: lh, display: "flex", alignItems: "center", fontSize: 56, fontWeight: 800,
                  color: i === n - 1 ? COLORS.ink : ctx.accent, whiteSpace: "nowrap", ...pop(frame, fps, at[i] + 10) }}>{s.value}</div>
              )}
            </React.Fragment>
          );
        })}
      </Box>
    </Stage2>
  );
};

// =====================================================================================
// REL-10 Kim tự tháp: xây từ đáy lên (build "up") hoặc từ đỉnh xuống ("down"); nhãn ở bên phải, nối bằng đường chỉ.
// data: { title?, build?: "up"|"down", levels: [3–5] liệt kê TỪ ĐÁY LÊN ĐỈNH, mỗi tầng { label, sub?, illus?, icon? } }
// =====================================================================================
const Rel10 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = boxH(data.title);
  const lv = data.levels.map(N);
  const n = lv.length;
  const down = data.build === "down";
  const gap = 10;
  const lh = (H - gap * (n - 1)) / n;
  const PW = 900;
  const px = 0;
  const widthAt = (y) => PW * (0.12 + (0.88 * y) / H); // y tính từ đỉnh (đỉnh cụt để còn chỗ đặt hình)
  const order = lv.map((_, i) => i); // i = 0 là đáy
  const seq = down ? [...order].reverse() : order;
  const { at: atSeq } = sched(seq.map((i) => `${lv[i].label} ${lv[i].sub || ""}`), ctx, fps, data.title ? 900 : 400);
  const at = [];
  seq.forEach((i, k) => (at[i] = atSeq[k]));
  const lx = PW + 90, lw = W - lx;
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H}>
        <Svg h={H}>
          {lv.map((l, i) => {
            const yb = H - i * (lh + gap), yt = yb - lh; // i = 0 là đáy
            const wb = widthAt(yb), wt = widthAt(yt);
            const c = px + PW / 2;
            const pts = [{ x: c - wb / 2, y: yb }, { x: c + wb / 2, y: yb }, { x: c + wt / 2, y: yt }, { x: c - wt / 2, y: yt }, { x: c - wb / 2, y: yb }];
            const s = spring({ frame: frame - at[i], fps, config: { damping: 13, stiffness: 140 } });
            const dy = (1 - s) * (down ? -80 : 80);
            const hi = i === (down ? 0 : n - 1);
            const fillOp = 0.1 + 0.07 * (n - 1 - i);
            const midY = (yb + yt) / 2;
            const edgeX = c + widthAt(midY) / 2;
            return (
              <g key={i}>
                <g transform={`translate(0 ${dy})`} opacity={frame < at[i] ? 0 : clamp01(s * 2)}>
                  <path d={polyD(pts) + " Z"} fill={hi ? COLORS.marker : ctx.accent} fillOpacity={hi ? 0.9 : fillOp} />
                  <DrawPath pts={pts} p={progress(frame, at[i], 16, EASE_STD)} color={ctx.accent} width={5} />
                </g>
                <DrawPath pts={seg(edgeX + 18, midY, lx - 16, midY)} p={progress(frame, at[i] + 10, 10, EASE_STD)} color={COLORS.muted} width={4} />
                <circle cx={lx - 16} cy={midY} r={9 * progress(frame, at[i] + 18, 4)} fill={ctx.accent} />
              </g>
            );
          })}
        </Svg>
        {lv.map((l, i) => {
          const yb = H - i * (lh + gap), yt = yb - lh;
          const midY = (yb + yt) / 2;
          const wMid = widthAt(midY);
          const size = Math.min(lh * 0.7, wMid * 0.6, 120);
          const fs = fitFs(l.label, lw - 30, 1, 52, 40);
          const subFs = l.sub ? fitFs(l.sub, lw - 30, 1, 42, 40) : 0;
          const f = fadeUp(frame, at[i] + 14, 8);
          return (
            <React.Fragment key={i}>
              {hasPic(l) && (
                <div style={{ position: "absolute", left: PW / 2 - size / 2, top: midY - size / 2, ...pop(frame, fps, at[i] + 6) }}>
                  <Pic node={l} size={size} color={ctx.accent} />
                </div>
              )}
              <div style={{ position: "absolute", left: lx, top: midY - lh / 2, width: lw, height: lh, display: "flex", flexDirection: "column", justifyContent: "center", ...f }}>
                <div style={{ fontSize: fs, fontWeight: 800, lineHeight: 1.12, whiteSpace: "nowrap", color: COLORS.ink }}>
                  {i === (down ? 0 : n - 1) ? <span style={{ background: COLORS.markerSoft, boxShadow: `inset 0 -0.42em 0 ${COLORS.marker}`, padding: "0 6px" }}>{l.label}</span> : l.label}
                </div>
                {l.sub && <div style={{ fontSize: subFs, fontWeight: 600, color: COLORS.muted, marginTop: 4, whiteSpace: "nowrap" }}>{l.sub}</div>}
              </div>
            </React.Fragment>
          );
        })}
      </Box>
    </Stage2>
  );
};

// =====================================================================================
// REL-11 Cân so sánh: cân đĩa đặt trên hai đầu đòn; từng món rơi xuống đĩa, đòn nghiêng theo sức nặng;
// món nặng (weight ≥ 2) đập xuống làm cả khung rung. Cuối cùng là câu kết luận (verdict).
// data: { title?, left: { label, items: [≤3] (chuỗi hoặc { text, weight }), illus? }, right: {…}, heavier?: "left"|"right", verdict }
// =====================================================================================
const Rel11 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = boxH(data.title);
  const sides = [data.left, data.right].map((s) => ({ ...N(s), items: (s.items || []).map((it) => (typeof it === "string" ? { text: it, weight: 1 } : { weight: 1, ...it })) }));
  const texts = sides.map((s) => `${s.label} ${s.items.map((x) => x.text).join(" ")}`).concat(data.verdict || "");
  const { at } = sched(texts, ctx, fps, 1100, 400);
  const BL = 540, PWd = 600, BW = 560;
  const cx = W / 2;
  const verdictH = data.verdict ? 92 : 0;
  // khối món: một dòng nếu được
  const blocks = sides.map((s) => s.items.map((it) => {
    const heavy = it.weight >= 2;
    const fs = fitFs(it.text, BW - (heavy ? 120 : 40), 1, heavy ? 54 : 46, 40);
    const lines = wrapN(it.text, fs, BW - (heavy ? 120 : 40));
    const h = lines * fs * 1.14 + (heavy ? 24 + 18 * Math.min(4, it.weight) : 18);
    return { ...it, fs, h };
  }));
  const stackH = Math.max(...blocks.map((b) => b.reduce((s, x) => s + x.h + 8, 0)));
  const P = Math.min(H - verdictH - 164, Math.max(stackH + 104, (H - verdictH) * 0.5)); // trục cân
  const labelY = P + 84;
  // sự kiện rơi
  const ev = [];
  sides.forEach((s, si) => blocks[si].forEach((b, j) => ev.push({ t: at[si] + 6 + j * 12, si, w: b.weight })));
  ev.sort((a, b) => a.t - b.t);
  const MAX = 6;
  let wl = 0, wr = 0, prev = 0;
  const deltas = ev.map((e) => {
    if (e.si === 0) wl += e.w; else wr += e.w;
    const tgt = Math.max(-MAX, Math.min(MAX, (wr - wl) * 3.2));
    const dlt = tgt - prev; prev = tgt;
    return { t: e.t + 4, d: dlt };
  });
  const heav = data.heavier || (wr > wl ? "right" : wl > wr ? "left" : "equal");
  const fin = heav === "right" ? MAX : heav === "left" ? -MAX : 0;
  const finT = at[2] - 4;
  deltas.push({ t: finT, d: fin - prev });
  const ang = deltas.reduce((s, e) => s + e.d * spring({ frame: frame - e.t, fps, config: { damping: 7, stiffness: 70, mass: 0.9 } }), 0);
  const rad = (ang * Math.PI) / 180;
  const ends = [{ x: cx - BL * Math.cos(rad), y: P - BL * Math.sin(rad) }, { x: cx + BL * Math.cos(rad), y: P + BL * Math.sin(rad) }];
  const heavyHits = ev.filter((e) => e.w >= 2);
  const sh = heavyHits.reduce((acc, e) => { const s = shake(frame, e.t + 3, 12, 12); return { x: acc.x + s.x, y: acc.y + s.y }; }, { x: 0, y: 0 });
  const base = progress(frame, 0, 16, EASE_STD);
  const beamS = progress(frame, 8, 14, EASE_STD);
  const cols = [ctx.accent, palette(ctx.accent)[1]];
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H} style={{ transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        <Svg h={H}>
          <DrawPath pts={seg(cx, P + 6, cx, H - verdictH - 34)} p={base} color={COLORS.ink2} width={16} />
          <DrawPath pts={seg(cx - 150, H - verdictH - 28, cx + 150, H - verdictH - 28)} p={base} color={COLORS.ink2} width={16} />
          <g opacity={beamS}>
            <line x1={cx - (cx - ends[0].x) * beamS} y1={P - (P - ends[0].y) * beamS} x2={cx + (ends[1].x - cx) * beamS} y2={P + (ends[1].y - P) * beamS}
              stroke={COLORS.ink} strokeWidth={14} strokeLinecap="round" />
            {ends.map((e, i) => (
              <g key={i} opacity={progress(frame, 18, 8)}>
                <line x1={e.x} y1={e.y} x2={e.x} y2={e.y - 34} stroke={COLORS.ink2} strokeWidth={10} />
                <path d={`M ${e.x - PWd / 2} ${e.y - 40} L ${e.x + PWd / 2} ${e.y - 40} Q ${e.x + PWd / 2 - 20} ${e.y - 22} ${e.x + PWd / 2 - 50} ${e.y - 22} L ${e.x - PWd / 2 + 50} ${e.y - 22} Q ${e.x - PWd / 2 + 20} ${e.y - 22} ${e.x - PWd / 2} ${e.y - 40} Z`}
                  fill={cols[i]} stroke={cols[i]} strokeWidth={4} strokeLinejoin="round" />
              </g>
            ))}
            <circle cx={cx} cy={P} r={22} fill={COLORS.marker} stroke={COLORS.ink} strokeWidth={6} />
          </g>
        </Svg>
        {sides.map((s, si) => {
          let yAcc = ends[si].y - 42;
          return blocks[si].map((b, j) => {
            const t = at[si] + 6 + j * 12;
            const s2 = spring({ frame: frame - t, fps, config: { damping: 12, stiffness: 170, mass: 0.7 } });
            const top = yAcc - b.h;
            yAcc = top - 8;
            const heavy = b.weight >= 2;
            return (
              <div key={`${si}-${j}`} style={{ position: "absolute", left: ends[si].x - BW / 2, top, width: BW, height: b.h, boxSizing: "border-box", borderRadius: 16,
                background: heavy ? COLORS.ink : COLORS.surface, color: heavy ? "#fff" : COLORS.ink, border: `3px solid ${heavy ? COLORS.ink : cols[si]}`,
                display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 20px", fontSize: b.fs, fontWeight: heavy ? 800 : 700, lineHeight: 1.14,
                opacity: frame < t - 12 ? 0 : clamp01((frame - t + 12) / 6), transform: `translateY(${(1 - s2) * -260}px)`, boxShadow: "0 8px 18px rgba(23,32,51,.10)" }}>
                {heavy && <span style={{ marginRight: 16, display: "inline-flex", flex: "none" }}><Illus name="warning" size={56} /></span>}
                {b.text}
              </div>
            );
          });
        })}
        {sides.map((s, si) => {
          const x = si === 0 ? cx - BL : cx + BL;
          const f = fadeUp(frame, at[si], 10);
          return (
            <div key={si} style={{ position: "absolute", left: x - PWd / 2, width: PWd, top: labelY, height: 74, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, ...f }}>
              <Pic node={s} size={66} def={si === 0 ? "package" : "money-bag"} color={cols[si]} />
              <div style={{ fontSize: fitFs(s.label, PWd - 100, 1, 50, 40), fontWeight: 800, color: cols[si], whiteSpace: "nowrap" }}>{s.label}</div>
            </div>
          );
        })}
        {data.verdict && (
          <div style={{ position: "absolute", left: 0, width: W, top: H - verdictH, height: verdictH, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ ...pop(frame, fps, at[2] + 2), display: "flex", alignItems: "center", gap: 18, padding: "14px 40px", borderRadius: 999, background: COLORS.markerSoft,
              border: `4px solid ${COLORS.marker}`, fontSize: fitFs(data.verdict, 1300, 1, 52, 40), fontWeight: 800, whiteSpace: "nowrap" }}>
              <Illus name="balance-scale" size={60} />
              {data.verdict}
            </div>
          </div>
        )}
      </Box>
    </Stage2>
  );
};

// =====================================================================================
// REL-12 Toả tia: ý trung tâm toả các tia vẽ dần tới 3–6 ý phụ (bản đồ tư duy).
// data: { title?, center: string | { label, illus? }, spokes: [3–6] (chuỗi hoặc { label, illus?, icon? }) }
// =====================================================================================
const Rel12 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const H = boxH(data.title);
  const c = N(data.center);
  const sp = data.spokes.map(N);
  const n = sp.length;
  const cx = W / 2, cy = H / 2;
  const R = 160;
  const rx = 620, ry = H / 2 - 100;
  const cwd = 500, tw = cwd - 44 - 96;
  const cards = sp.map((s, i) => {
    const off = n === 4 ? -45 : -90;
    const a = ((off + (i * 360) / n) * Math.PI) / 180;
    const fs = fitFs(s.label, tw, 3, 46, 40);
    const h = Math.max(120, textH(s.label, fs, tw, 1.14) + 40);
    return { ...s, a, fs, h, x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) };
  });
  const { at } = sched(sp.map((s) => s.label), ctx, fps, 1100, 250);
  const cp = pop(frame, fps, 0);
  const ring = (frame % 50) / 50;
  return (
    <Stage2 ctx={ctx} title={data.title} frame={frame}>
      <Box h={H}>
        <Svg h={H}>
          <circle cx={cx} cy={cy} r={R + 20 + ring * 60} fill="none" stroke={ctx.accent} strokeWidth={4} opacity={(1 - ring) * 0.35 * cp.opacity} />
          {cards.map((k, i) => {
            const dx = k.x - cx, dy = k.y - cy, dl = Math.hypot(dx, dy);
            const s = Math.min((cwd / 2 + 14) / Math.max(1e-6, Math.abs(dx)), (k.h / 2 + 14) / Math.max(1e-6, Math.abs(dy)));
            const end = { x: k.x - dx * s, y: k.y - dy * s };
            const start = { x: cx + (dx / dl) * (R + 8), y: cy + (dy / dl) * (R + 8) };
            const p = progress(frame, at[i], 14, EASE_STD);
            return (
              <g key={i}>
                <DrawPath pts={[start, end]} p={p} color={ctx.accent} width={7} />
                <circle cx={end.x} cy={end.y} r={11 * progress(frame, at[i] + 12, 4)} fill={ctx.accent} />
              </g>
            );
          })}
        </Svg>
        <div style={{ position: "absolute", left: cx - R, top: cy - R, width: R * 2, height: R * 2, borderRadius: "50%", background: ctx.accent, color: "#fff",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, boxShadow: "0 18px 40px rgba(23,32,51,.18)", ...cp }}>
          <div style={{ width: 104, height: 104, borderRadius: "50%", background: "#ffffff", display: "grid", placeItems: "center" }}>
            <Illus name={c.illus || "light-bulb"} size={78} />
          </div>
          <div style={{ fontSize: fitFs(c.label, 260, 2, 46, 40), fontWeight: 800, textAlign: "center", lineHeight: 1.1, width: 270 }}>{c.label}</div>
        </div>
        {cards.map((k, i) => {
          const pp = pop(frame, fps, at[i] + 12);
          return (
            <div key={i} style={cardStyle({ left: k.x - cwd / 2, top: k.y - k.h / 2, width: cwd, height: k.h, display: "flex", alignItems: "center", gap: 16, padding: "0 22px", ...pp })}>
              <div style={{ width: 80, height: 80, flex: "none", borderRadius: 22, background: COLORS.pineSoft, display: "grid", placeItems: "center" }}>
                <Pic node={k} size={64} def="sparkles" color={ctx.accent} />
              </div>
              <div style={{ fontSize: k.fs, fontWeight: 700, lineHeight: 1.14, width: tw }}>{k.label}</div>
            </div>
          );
        })}
      </Box>
    </Stage2>
  );
};

// ---------- thời lượng (chế độ chỉ chữ) ----------
const pl = (texts, c, lead, gap = 300) => plan(texts, { level: c.level, lead, gap }).endMs;
const lbl = (x) => N(x).label || "";

export const REL2 = {
  "REL-03": { name: "Vòng lặp", family: "REL", Component: Rel03, limits: { nodes: [3, 5] },
    estimate: (d, c) => pl(d.nodes.map(lbl), c, d.center ? 1100 : 500) + 700 + 1500 },
  "REL-04": { name: "Xương cá", family: "REL", Component: Rel04, limits: { bones: [4, 6], causes: [0, 2] },
    estimate: (d, c) => pl(d.bones.map((b) => `${b.group} ${(b.causes || []).join(" ")}`), c, 1300) + 1000 },
  "REL-05": { name: "Sơ đồ cây", family: "REL", Component: Rel05, limits: { children: [2, 4], leaves: [0, 3] },
    estimate: (d, c) => pl(d.children.map((k) => `${lbl(k)} ${k.sub || ""} ${(k.children || []).map(lbl).join(" ")}`), c, d.title ? 1000 : 500) + 1000 },
  "REL-06": { name: "Venn 2 vòng", family: "REL", Component: Rel06, limits: { items: [1, 3] },
    estimate: (d, c) => {
      const both = typeof d.both === "string" ? { items: [d.both] } : d.both;
      return pl([`${lbl(d.a)} ${(d.a.items || []).join(" ")}`, `${lbl(d.b)} ${(d.b.items || []).join(" ")}`, `${both.label || ""} ${both.items.join(" ")}`], c, 1100) + 1000;
    } },
  "REL-07": { name: "Venn 3 vòng", family: "REL", Component: Rel07, limits: { sets: [3, 3] },
    estimate: (d, c) => pl([d.a, d.b, d.c].map((s) => `${lbl(s)} ${N(s).sub || ""}`).concat(lbl(d.center)), c, 1200) + 1000 },
  "REL-08": { name: "Ma trận 2×2", family: "REL", Component: Rel08, limits: { quadrants: [4, 4], dots: [0, 4] /* ≤ 1 chấm mỗi ô */ },
    estimate: (d, c) => pl(d.quadrants.map((q) => `${q.title} ${q.text || ""}`).concat((d.dots || []).map((x) => x.label)), c, 1300, 250) + 1000 },
  "REL-09": { name: "Phễu", family: "REL", Component: Rel09, limits: { stages: [3, 5] },
    estimate: (d, c) => pl(d.stages.map((s) => `${lbl(s)} ${N(s).value || ""}`), c, d.title ? 900 : 400) + 900 },
  "REL-10": { name: "Kim tự tháp", family: "REL", Component: Rel10, limits: { levels: [3, 5] },
    estimate: (d, c) => pl(d.levels.map((l) => `${lbl(l)} ${N(l).sub || ""}`), c, d.title ? 900 : 400) + 1000 },
  "REL-11": { name: "Cân so sánh", family: "REL", Component: Rel11, limits: { items: [1, 3] },
    estimate: (d, c) => pl([d.left, d.right].map((s) => `${lbl(s)} ${(s.items || []).map((x) => (typeof x === "string" ? x : x.text)).join(" ")}`).concat(d.verdict || ""), c, 1100, 400) + 1000 },
  "REL-12": { name: "Toả tia", family: "REL", Component: Rel12, limits: { spokes: [3, 6] },
    estimate: (d, c) => pl(d.spokes.map(lbl), c, 1100, 250) + 1000 },
};
