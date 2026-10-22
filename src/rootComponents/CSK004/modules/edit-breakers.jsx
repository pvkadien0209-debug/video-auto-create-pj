// edit-breakers.jsx — #144 họ BRK: 12 cảnh ngắt nhịp toàn màn (mã edit E-BRK-01…12), mỗi cảnh 3–8 s,
// chèn giữa các ô bảng để phá nhịp / rehook (NGHIEN-CUU-QUAY-DUNG §4.1, §4.4, §5.2):
//   BRK-01 dừng hình + nhãn      BRK-02 tiêu đề đập vào     BRK-03 con số đếm nhảy     BRK-04 chia đôi Sai/Đúng
//   BRK-05 nhắc lại có Đét PiP   BRK-06 dải montage nhanh   BRK-07 "Nhưng khoan…"     BRK-08 dòng thời gian quét
//   BRK-09 lower-third nguồn     BRK-10 trích dẫn lớn       BRK-11 "3 điều" đếm ngược  BRK-12 chữ khớp chuyển (match cut)
// Mọi phần tử mới hiện theo lời đọc (ctx.lines[i].startMs) nếu có, không thì theo lịch riêng; nội dung nằm trên dải phụ đề (y ≤ 885).
// Kịch bản: { module: "BRK-01", data: {...}, lines: [...] } — danh mục + mẫu: core/edit-breakers-list.js.
// Kịch bản có presenter: ghi scene.panel = false để cảnh giữ toàn màn (cho tới khi presenter.jsx thêm "BRK" vào FULL).
import React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, TYPE } from "../core/theme.js";
import { Icon, Illus, IllusBadge, Kicker, fitSize } from "../core/ui.jsx";
import { flash, idle, shake, slam } from "../core/motion.js";
import { lineTimeline } from "../core/timing.js";
import { DetG, DET_POSES } from "../cast/mascot/Det.jsx";
import { mouthAt } from "../cast/anim.js";

const HAND = "'Patrick Hand', 'Be Vietnam Pro', cursive";
const BOTTOM = 885; // mép dưới vùng nội dung (dải phụ đề ở dưới)
const cl = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };
const ramp = (t, a, b, ease = Easing.out(Easing.cubic)) => interpolate(t, [a, Math.max(a + 1, b)], [0, 1], { ...cl, easing: ease });
const msF = (ms, fps) => Math.max(0, Math.round((ms / 1000) * fps));
const useT = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return { frame, fps, t: (frame / fps) * 1000 };
};
const words = (s) => String(s ?? "").trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const lastEnd = (c) => (c?.lines?.length ? c.lines.at(-1).endMs : 0);
/** Thời điểm (ms) n phần tử hiện: câu đọc thứ (i + offset) nếu có, không thì cách đều `step` sau phần tử trước. */
const cues = (c, n, first, step, offset = 0) => {
  const out = [];
  for (let i = 0; i < n; i++) {
    const l = c?.lines?.[i + offset];
    const prev = out[i - 1];
    out.push(l ? Math.max(l.startMs, prev != null ? prev + 250 : 0) : prev != null ? prev + step : first);
  }
  return out;
};
/** Thời lượng cảnh: đủ cho phần hình, đủ cho lời đọc, tối thiểu 3 s. */
const fin = (ms, c) => Math.max(3000, ms, lastEnd(c) + 350);
/** Đét đang nói? (câu không có who hoặc who "det") → độ mở miệng. */
const detTalk = (c, t) => {
  const l = (c?.lines || []).find((x) => t >= x.startMs && t < x.endMs);
  return l && (!l.who || l.who === "det") ? mouthAt(l, t) : 0;
};
const norm = (w) => String(w).toLowerCase().replace(/[.,!?;:“”"'‘’()…–-]/g, "");
const markMask = (ws, mark) => {
  const mt = String(mark || "").split(/\s+/).map(norm).filter(Boolean);
  const nw = ws.map(norm);
  const mask = ws.map(() => false);
  if (!mt.length) return mask;
  for (let i = 0; i + mt.length <= nw.length; i++) if (mt.every((x, j) => nw[i + j] === x)) { for (let j = 0; j < mt.length; j++) mask[i + j] = true; break; }
  return mask;
};
const fmtNum = (v, dec = 0) => {
  const s = Math.abs(v).toFixed(dec);
  const [a, b] = s.split(".");
  const g = a.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (v < 0 ? "−" : "") + g + (b ? "," + b : "");
};

/** Đét nhỏ đứng (chân ở y). h = cao px. */
const MiniDet = ({ x, y, h = 320, pose = "idle", face = "happy", talk = 0, style }) => {
  const w = (h * 480) / 460; // hình Đét cao ≈ 410 đơn vị (chân ở y = 0)
  return (
    <svg width={w} height={h} viewBox="-240 -440 480 460" style={{ position: "absolute", left: x - w / 2, top: y - h, overflow: "visible", ...style }}>
      <DetG pose={typeof pose === "string" ? DET_POSES[pose] || {} : pose} face={face} talk={talk} />
    </svg>
  );
};

/** Mũi tên vẽ tay từ (x1,y1) tới (x2,y2), cong `bend`, vẽ dần theo p. */
const HandArrow = ({ x1, y1, x2, y2, p = 1, color = COLORS.coral, bend = 0.25, w = 10 }) => {
  const mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
  const d = `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
  const a = Math.atan2(y2 - my, x2 - mx), L = 34;
  const h1 = [x2 - L * Math.cos(a - 0.5), y2 - L * Math.sin(a - 0.5)], h2 = [x2 - L * Math.cos(a + 0.5), y2 - L * Math.sin(a + 0.5)];
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", pointerEvents: "none" }}>
      <path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" pathLength={100} strokeDasharray={100} strokeDashoffset={100 * (1 - p)} />
      {p > 0.9 && <path d={`M ${h1[0]} ${h1[1]} L ${x2} ${y2} L ${h2[0]} ${h2[1]}`} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
};

const Bg = ({ color, children }) => <AbsoluteFill style={{ background: color, fontFamily: FONT, color: COLORS.ink, overflow: "hidden" }}>{children}</AbsoluteFill>;

// ---------- kiểm dữ liệu chung ----------
const need = (d, keys) => keys.filter((k) => d[k] == null || d[k] === "" || (Array.isArray(d[k]) && !d[k].length)).map((k) => `thiếu ô "${k}"`);
const maxWords = (d, k, n) => (d[k] != null && words(d[k]) > n ? [`ô "${k}" có ${words(d[k])} tiếng, tối đa ${n}`] : []);
// #145: cảnh dạng danh sách (BRK-05/06/08/11) được tới 12 s; còn lại 8 s
const voiceLen = (lines, max = 8000) => {
  if (!lines?.length) return [];
  const end = lineTimeline(lines).at(-1).endMs;
  return end > max ? [`lời đọc ≈ ${(end / 1000).toFixed(1)} s — cảnh ngắt nhịp này tối đa ${max / 1000} s, rút lời cho ngắn hoặc tách cảnh`] : [];
};
const tone = (d) => (d.tone != null && !["bad", "good"].includes(d.tone) ? [`tone "${d.tone}" phải là bad | good`] : []);

// =====================================================================================
// BRK-01 Dừng hình + nhãn (freeze-frame label): cảnh đang chạy → loé + đứng hình, ngả xám, khoanh đỏ, nhãn "Sai ở đây!"; Đét chỉ vào.
// data: { illus, around?[≤3], label (≤6 tiếng), note? (≤14), tone?: "bad"|"good" }
// =====================================================================================
const F01 = { x: 170, y: 118, w: 1350, h: 760 };
const Brk01 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const FZ = 450, fzF = msF(FZ, fps);
  const live = Math.min(frame, fzF);
  const c = cues(ctx, 2, 700, 1300);
  const circleAt = Math.max(FZ + 250, c[0] + 150);
  const labelAt = circleAt + 380;
  const noteAt = Math.max(labelAt + 550, c[1]);
  const col = data.tone === "good" ? COLORS.ok : COLORS.coral;
  const gray = ramp(t, FZ, FZ + 200);
  const fl = flash(frame, fzF, 7);
  const sh = shake(frame, fzF, 9, 12);
  const cx = F01.x + F01.w * 0.36, cy = F01.y + F01.h * 0.53;
  const around = (data.around || []).slice(0, 3);
  const pos = [[-0.62, -0.5], [0.55, -0.62], [-0.7, 0.45]];
  const cir = ramp(t, circleAt, circleAt + 420, Easing.inOut(Easing.quad));
  const lab = spring({ frame: frame - msF(labelAt, fps), fps, config: { damping: 10, stiffness: 170, mass: 0.6 } });
  const lx = F01.x + F01.w * 0.62, ly = F01.y + 190;
  const detIn = spring({ frame: frame - msF(FZ + 200, fps), fps, config: { damping: 14, stiffness: 120 } });
  return (
    <Bg color={COLORS.ink}>
      <div style={{ position: "absolute", inset: 0, transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        {/* khung hình "đang chạy" → đứng */}
        <div style={{ position: "absolute", left: F01.x, top: F01.y, width: F01.w, height: F01.h, borderRadius: 26, overflow: "hidden", background: COLORS.paper,
          boxShadow: "0 30px 80px rgba(0,0,0,.45)", filter: `grayscale(${gray * 0.92}) contrast(${1 + gray * 0.12})` }}>
          <div style={{ position: "absolute", inset: 0, transform: `scale(${1.02 + 0.05 * (live / Math.max(1, fzF))}) translateX(${-14 * (live / Math.max(1, fzF))}px)`, transformOrigin: "40% 55%" }}>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 210, background: COLORS.pineSoft }} />
            <div style={{ position: "absolute", width: 620, height: 620, borderRadius: "50%", background: ctx.accent, opacity: 0.1, left: cx - F01.x - 310, top: cy - F01.y - 310 }} />
            <div style={{ position: "absolute", left: cx - F01.x - 200, top: cy - F01.y - 200 + (frame < fzF ? idle(live, 8, 40) : idle(fzF, 8, 40)) }}><Illus name={data.illus} size={400} /></div>
            {around.map((n, i) => (
              <div key={i} style={{ position: "absolute", left: cx - F01.x + pos[i][0] * 420 - 70, top: cy - F01.y + pos[i][1] * 420 - 70 }}><Illus name={n} size={140} /></div>
            ))}
          </div>
          {/* vạch quét phim khi đứng hình */}
          <div style={{ position: "absolute", inset: 0, opacity: gray * 0.35, backgroundImage: "repeating-linear-gradient(0deg, rgba(23,32,51,.10) 0 2px, transparent 2px 6px)" }} />
          <div style={{ position: "absolute", left: 28, top: 26, display: "flex", alignItems: "center", gap: 14, padding: "10px 22px", borderRadius: 14, background: "rgba(23,32,51,.85)", color: "#fff",
            fontSize: TYPE.small, fontWeight: 800, opacity: gray }}>
            <Icon name="pause" size={40} color={COLORS.marker} stroke={3} /> Dừng hình
          </div>
        </div>
        {/* khoanh tròn + mũi tên + nhãn */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <ellipse cx={cx} cy={cy} rx={258} ry={236} fill="none" stroke={col} strokeWidth={13} strokeLinecap="round" pathLength={100}
            strokeDasharray={100} strokeDashoffset={100 * (1 - cir)} transform={`rotate(-14 ${cx} ${cy})`} />
        </svg>
        <HandArrow x1={lx - 30} y1={ly + 90} x2={cx + 230} y2={cy - 110} p={ramp(t, labelAt - 120, labelAt + 260)} color={col} bend={-0.22} />
        <div style={{ position: "absolute", left: lx - 40, top: ly - 40, maxWidth: 500, opacity: frame < msF(labelAt, fps) ? 0 : Math.min(1, lab * 1.5),
          transform: `scale(${0.5 + 0.5 * lab}) rotate(${-4 + 2 * (1 - lab)}deg)`, transformOrigin: "left center" }}>
          <div style={{ padding: "22px 34px", borderRadius: 22, background: col, color: "#fff", fontSize: fitSize(data.label, 76, 52, 14), fontWeight: 800, lineHeight: 1.12, boxShadow: "0 16px 36px rgba(0,0,0,.3)" }}>{data.label}</div>
          {data.note && (
            <div style={{ marginTop: 18, padding: "16px 26px", borderRadius: 18, background: "#fff", color: COLORS.ink2, fontSize: TYPE.small + 2, fontWeight: 600, lineHeight: 1.25,
              opacity: ramp(t, noteAt, noteAt + 300), transform: `translateY(${(1 - ramp(t, noteAt, noteAt + 300)) * 20}px) rotate(2deg)` }}>{data.note}</div>
          )}
        </div>
      </div>
      <AbsoluteFill style={{ background: "#fff", opacity: fl * 0.85 }} />
      <MiniDet x={1720 + (1 - detIn) * 320} y={BOTTOM} h={300} pose="pointL" face={t < labelAt ? "surprised" : data.tone === "good" ? "happy" : "stern"} talk={detTalk(ctx, t)} />
    </Bg>
  );
};

// =====================================================================================
// BRK-02 Tiêu đề đập vào (title slam): nền tối, từng từ lao xuống, màn rung mỗi cú; từ nhấn màu vàng; dòng phụ hiện sau.
// data: { title (2–8 tiếng), hl? (từ/cụm tô vàng, mặc định từ cuối), kicker?, sub? (≤14) }
// =====================================================================================
const PER02 = 170;
/** Chia tiêu đề thành 1–2 dòng cân nhau (không để một từ lẻ loi ở dòng dưới). */
const rows02 = (ws, size) => {
  const len = (a, b) => ws.slice(a, b).join(" ").length;
  const idx = ws.map((_, i) => i);
  if (len(0, ws.length) * size * 0.56 <= 1640 || ws.length < 2) return [idx];
  let best = 1, bm = 1e9;
  for (let k = 1; k < ws.length; k++) { const m = Math.max(len(0, k), len(k, ws.length)); if (m < bm) (bm = m), (best = k); }
  return [idx.slice(0, best), idx.slice(best)];
};
const Brk02 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const ws = String(data.title).split(/\s+/).filter(Boolean);
  const hl = data.hl ? markMask(ws, data.hl) : ws.map((_, i) => i === ws.length - 1);
  const at = ws.map((_, i) => 180 + i * PER02);
  const end = at.at(-1) + 260;
  const c = cues(ctx, 2, 0, end + 500);
  const subAt = Math.max(end + 450, c[1]);
  const size = Math.min(fitSize(data.title, 168, 96, 16), Math.floor(1640 / (0.56 * Math.max(8, Math.ceil(String(data.title).length / 2)))));
  let sx = 0, sy = 0, punch = 0;
  at.forEach((a) => { const s = shake(frame, msF(a, fps) + 3, 8, 13); sx += s.x; sy += s.y; punch += flash(frame, msF(a, fps) + 3, 7); });
  const bar = ramp(t, end - 100, end + 300);
  return (
    <Bg color={COLORS.ink}>
      <AbsoluteFill style={{ backgroundImage: `repeating-linear-gradient(-28deg, rgba(255,255,255,.035) 0 60px, transparent 60px 140px)`, backgroundPosition: `${frame * 3}px 0` }} />
      <div style={{ position: "absolute", width: 1200, height: 1200, borderRadius: "50%", left: 360, top: -60, background: ctx.accent, opacity: 0.22 + 0.1 * Math.min(1, punch), filter: "blur(40px)" }} />
      <div style={{ position: "absolute", left: 120, right: 120, top: 120, bottom: 1080 - BOTTOM, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        transform: `translate(${sx}px, ${sy}px) scale(${1 + 0.025 * Math.min(1, punch)})` }}>
        {data.kicker && <div style={{ opacity: ramp(t, 0, 250), marginBottom: 34 }}><Kicker accent={ctx.accent}><Icon name="zap" size={36} color="#fff" /> {data.kicker}</Kicker></div>}
        {rows02(ws, size).map((row, r) => (
          <div key={r} style={{ display: "flex", justifyContent: "center", columnGap: size * 0.26, whiteSpace: "nowrap" }}>
            {row.map((i) => (
              <span key={i} style={{ ...slam(frame, fps, msF(at[i], fps), 1.9), display: "inline-block", fontSize: size, fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em",
                color: hl[i] ? COLORS.marker : "#fff", textShadow: "0 10px 30px rgba(0,0,0,.35)" }}>{ws[i]}</span>
            ))}
          </div>
        ))}
        <div style={{ height: 16, width: 520, borderRadius: 8, background: ctx.accent === COLORS.ink ? COLORS.marker : COLORS.marker, marginTop: 34, transform: `scaleX(${bar})`, opacity: 0.9 }} />
        {data.sub && (
          <div style={{ marginTop: 34, fontSize: fitSize(data.sub, 58, 46, 34), fontWeight: 600, color: "rgba(255,255,255,.88)", textAlign: "center", maxWidth: 1400,
            opacity: ramp(t, subAt, subAt + 300), transform: `translateY(${(1 - ramp(t, subAt, subAt + 300)) * 24}px)` }}>{data.sub}</div>
        )}
      </div>
    </Bg>
  );
};

// =====================================================================================
// BRK-03 Con số đếm nhảy (counter punch): nền màu nhấn, tia toả xoay; số lăn từ `from` tới `value` rồi "đấm" (nảy + rung + vòng sáng).
// data: { value (số), from? (0), prefix?, suffix?, decimals?, label (≤12 tiếng), illus? }
// =====================================================================================
const ROLL03 = [250, 1550];
const Brk03 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const v = Number(data.value), v0 = Number(data.from || 0), dec = Number(data.decimals || 0);
  const p = ramp(t, ROLL03[0], ROLL03[1], Easing.out(Easing.poly(4)));
  const cur = v0 + (v - v0) * p;
  const shown = fmtNum(p >= 1 ? v : Math.round(cur * 10 ** dec) / 10 ** dec, dec);
  const hitF = msF(ROLL03[1], fps);
  const hit = spring({ frame: frame - hitF, fps, config: { damping: 8, stiffness: 220, mass: 0.6 } });
  const sc = frame < hitF ? 0.9 + 0.1 * p : 1.28 - 0.28 * hit;
  const sh = shake(frame, hitF, 10, 16);
  const c = cues(ctx, 2, 0, 1900);
  const labAt = Math.max(ROLL03[1] + 250, c[1]);
  const lab = ramp(t, labAt, labAt + 320);
  const full = `${data.prefix || ""}${fmtNum(v, dec)}${data.suffix || ""}`;
  const nSize = full.length <= 4 ? 330 : full.length <= 6 ? 270 : full.length <= 9 ? 210 : 160;
  const ring = frame >= hitF ? (frame - hitF) / 18 : 0;
  return (
    <Bg color={ctx.accent}>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g transform={`translate(960 470) rotate(${frame * 0.6})`}>
          {Array.from({ length: 16 }, (_, i) => {
            const a = (i / 16) * Math.PI * 2, b = a + Math.PI / 16;
            return <path key={i} d={`M 0 0 L ${Math.cos(a) * 1500} ${Math.sin(a) * 1500} L ${Math.cos(b) * 1500} ${Math.sin(b) * 1500} Z`} fill="#fff" opacity={0.06} />;
          })}
        </g>
        {ring > 0 && ring < 1 && <circle cx={960} cy={440} r={220 + 520 * ring} fill="none" stroke={COLORS.marker} strokeWidth={24 * (1 - ring)} opacity={1 - ring} />}
      </svg>
      <div style={{ position: "absolute", left: 96, right: 96, top: 120, bottom: 1080 - BOTTOM, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        {data.illus && (
          <div style={{ marginBottom: 6, opacity: Math.min(1, hit * 2), transform: `scale(${0.4 + 0.6 * hit}) rotate(${-8 * (1 - hit)}deg)` }}>
            <IllusBadge name={data.illus} size={170} bg="rgba(255,255,255,.92)" />
          </div>
        )}
        <div style={{ fontSize: nSize, fontWeight: 800, lineHeight: 1, color: "#fff", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.03em", whiteSpace: "nowrap",
          transform: `scale(${sc})`, textShadow: "0 18px 40px rgba(0,0,0,.25)", opacity: ramp(t, 0, 200) }}>
          {data.prefix && <span style={{ fontSize: nSize * 0.45 }}>{data.prefix}</span>}
          {shown}
          {data.suffix && <span style={{ fontSize: nSize * 0.4, marginLeft: nSize * 0.06 }}>{data.suffix}</span>}
        </div>
        <div style={{ marginTop: 34, padding: "18px 40px", borderRadius: 999, background: "#fff", color: COLORS.ink, fontSize: fitSize(data.label, 60, 46, 30), fontWeight: 800,
          textAlign: "center", maxWidth: 1500, opacity: lab, transform: `translateY(${(1 - lab) * 40}px)`, boxShadow: "0 14px 34px rgba(0,0,0,.18)" }}>{data.label}</div>
      </div>
    </Bg>
  );
};

// =====================================================================================
// BRK-04 Chia đôi Sai/Đúng (split screen): nửa "Sai" lấp màn, rồi nửa "Đúng" đẩy vào chia đôi; bên Sai mờ đi và bị đóng dấu ✗.
// data: { wrong (≤14), right (≤14), wrongIllus?, rightIllus?, labels? ["Sai","Đúng"], title? (≤8) }
// =====================================================================================
const Half04 = ({ good, text, illus, label, x, w, t0, t, dim, accent }) => {
  const col = good ? accent : COLORS.coral;
  const e = ramp(t, t0, t0 + 380);
  return (
    <div style={{ position: "absolute", left: x, top: 0, width: w, height: 1080, overflow: "hidden", background: good ? COLORS.pineSoft : COLORS.coralSoft }}>
      <div style={{ position: "absolute", left: "50%", top: 150, width: 820, marginLeft: -410, height: BOTTOM - 170, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30,
        opacity: e * (1 - 0.45 * dim), filter: `grayscale(${dim * 0.6})`, transform: `translateY(${(1 - e) * 40}px)` }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "12px 32px", borderRadius: 999, background: col, color: "#fff", fontSize: TYPE.body, fontWeight: 800 }}>
          <Icon name={good ? "check" : "x"} size={50} color="#fff" stroke={3.4} /> {label}
        </div>
        <div style={{ position: "relative" }}>
          <IllusBadge name={illus} size={280} bg="#fff" />
        </div>
        <div style={{ fontSize: fitSize(text, 70, 48, 22), fontWeight: 800, lineHeight: 1.2, textAlign: "center", color: COLORS.ink, maxWidth: 760, textWrap: "balance" }}>{text}</div>
      </div>
    </div>
  );
};
const Brk04 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const c = cues(ctx, 2, 150, 1500);
  const rAt = Math.max(1300, c[1]);
  const s = spring({ frame: frame - msF(rAt, fps), fps, config: { damping: 15, stiffness: 120 } });
  const e = frame < msF(rAt, fps) ? 0 : s;
  const leftW = 1920 - 960 * e;
  const [la, lb] = data.labels || ["Sai", "Đúng"];
  const stamp = spring({ frame: frame - msF(rAt + 450, fps), fps, config: { damping: 9, stiffness: 200, mass: 0.6 } });
  const stampOn = t >= rAt + 450;
  return (
    <Bg color={COLORS.paper}>
      <Half04 good={false} text={data.wrong} illus={data.wrongIllus || "cross-mark"} label={la} x={0} w={leftW} t0={0} t={t} dim={e} accent={ctx.accent} />
      <Half04 good text={data.right} illus={data.rightIllus || "check-mark-button"} label={lb} x={1920 - 960 * e} w={960} t0={rAt} t={t} dim={0} accent={ctx.accent} />
      {/* dấu ✗ đóng lên nửa Sai */}
      {stampOn && (
        <div style={{ position: "absolute", left: 480 - 170, top: 290, width: 340, height: 340, display: "grid", placeItems: "center", opacity: Math.min(1, stamp * 2) * 0.9,
          transform: `scale(${2 - stamp}) rotate(-12deg)` }}>
          <div style={{ width: 300, height: 300, borderRadius: "50%", border: `16px solid ${COLORS.coral}`, display: "grid", placeItems: "center" }}>
            <Icon name="x" size={220} color={COLORS.coral} stroke={3} />
          </div>
        </div>
      )}
      {/* vạch chia + mũi tên */}
      {e > 0.01 && (
        <>
          <div style={{ position: "absolute", left: 960 - 7 + (1 - e) * 960, top: 0, width: 14, height: 1080, background: "#fff", boxShadow: "0 0 24px rgba(23,32,51,.18)" }} />
          <div style={{ position: "absolute", left: 960 - 56 + (1 - e) * 960, top: 470, width: 112, height: 112, borderRadius: "50%", background: COLORS.ink, display: "grid", placeItems: "center", opacity: e }}>
            <Icon name="arrow-right" size={64} color="#fff" stroke={3} />
          </div>
        </>
      )}
      {data.title && (
        <div style={{ position: "absolute", left: 0, right: 0, top: 36, display: "flex", justifyContent: "center", opacity: ramp(t, 0, 250) }}>
          <Kicker accent={COLORS.ink} style={{ fontSize: TYPE.small }}>{data.title}</Kicker>
        </div>
      )}
    </Bg>
  );
};

// =====================================================================================
// BRK-05 Nhắc lại, Đét trong khung nhỏ (PiP recap): thẻ "Nhắc nhanh" bên trái, các ý tick lần lượt; Đét nói trong cửa sổ PiP góc phải.
// data: { title (≤8), points [1–3] (mỗi ý ≤10 tiếng), illus?, kicker? }
// =====================================================================================
const Brk05 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const pts = data.points || [];
  const off = (ctx.lines || []).length > pts.length ? 1 : 0;
  const at = cues(ctx, pts.length, 900, 1100, off).map((x) => Math.max(700, x));
  const card = spring({ frame, fps, config: { damping: 15, stiffness: 120 } });
  const pip = spring({ frame: frame - 8, fps, config: { damping: 11, stiffness: 150, mass: 0.7 } });
  const talk = detTalk(ctx, t);
  const live = talk > 0;
  return (
    <Bg color={COLORS.paper}>
      <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", right: -260, top: -320, background: ctx.accent, opacity: 0.07 }} />
      {/* thẻ nhắc lại */}
      <div style={{ position: "absolute", left: 96, top: 128, width: 1190, height: 750, borderRadius: 36, background: "#fff", border: `3px solid ${COLORS.line}`, boxShadow: "0 30px 70px rgba(23,32,51,.12)",
        overflow: "hidden", transform: `translateX(${(1 - card) * -160}px)`, opacity: Math.min(1, card * 1.4) }}>
        <div style={{ height: 96, background: ctx.accent, display: "flex", alignItems: "center", gap: 18, padding: "0 40px", color: "#fff", fontSize: TYPE.small, fontWeight: 800 }}>
          <Icon name="rotate-ccw" size={46} color="#fff" stroke={2.6} /> {data.kicker || "Nhắc nhanh"}
          <span style={{ marginLeft: "auto", display: "flex", gap: 10 }}>{[0, 1, 2].map((i) => <span key={i} style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", opacity: 0.4 + i * 0.2 }} />)}</span>
        </div>
        <div style={{ padding: pts.length > 2 ? "30px 50px" : "40px 56px", position: "relative" }}>
          {data.illus && <div style={{ position: "absolute", right: 40, top: 26, transform: `rotate(${8 + idle(frame, 3, 120)}deg)` }}><Illus name={data.illus} size={170} /></div>}
          <div style={{ fontSize: fitSize(data.title, 72, 54, 22), fontWeight: 800, lineHeight: 1.15, maxWidth: 860, marginBottom: pts.length > 2 ? 22 : 34 }}>{data.title}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: pts.length > 2 ? 16 : 24 }}>
            {pts.map((p, i) => {
              const e = ramp(t, at[i], at[i] + 320);
              const tk = spring({ frame: frame - msF(at[i] + 150, fps), fps, config: { damping: 9, stiffness: 200, mass: 0.5 } });
              const now = t >= at[i] && (i === pts.length - 1 || t < at[i + 1]);
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 26, padding: "12px 22px", borderRadius: 22, background: now ? COLORS.markerSoft : COLORS.paper,
                  opacity: e, transform: `translateX(${(1 - e) * 60}px)` }}>
                  <div style={{ width: 68, height: 68, borderRadius: "50%", flex: "none", background: ctx.accent, display: "grid", placeItems: "center", transform: `scale(${t < at[i] + 150 ? 0.4 : 0.4 + 0.6 * tk})` }}>
                    <Icon name="check" size={44} color="#fff" stroke={3.4} />
                  </div>
                  <div style={{ fontSize: fitSize(p, 54, 44, 30), fontWeight: 700, lineHeight: 1.15 }}>{p}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* cửa sổ PiP Đét */}
      <div style={{ position: "absolute", left: 1336, top: 372, width: 488, height: 506, borderRadius: 34, overflow: "hidden", border: "10px solid #fff",
        boxShadow: "0 26px 60px rgba(23,32,51,.25)", background: `linear-gradient(160deg, ${COLORS.pineSoft}, #fff)`,
        transform: `scale(${0.5 + 0.5 * pip}) rotate(${(1 - pip) * 6}deg)`, opacity: Math.min(1, pip * 1.6), transformOrigin: "100% 100%" }}>
        <div style={{ position: "absolute", left: -40, right: -40, bottom: -10, height: 140, background: ctx.accent, opacity: 0.14, borderRadius: "50% 50% 0 0" }} />
        <MiniDet x={244} y={600 + idle(frame, 4, 60)} h={520} pose={live ? "pointL" : "idle"} face={live ? "happy" : "neutral"} talk={talk} />
        <div style={{ position: "absolute", left: 18, top: 16, display: "flex", alignItems: "center", gap: 10, padding: "6px 16px", borderRadius: 12, background: "rgba(23,32,51,.82)", color: "#fff", fontSize: 30, fontWeight: 800 }}>
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: live && Math.floor(frame / 8) % 2 === 0 ? COLORS.coral : "rgba(255,255,255,.4)" }} /> Đét
        </div>
      </div>
    </Bg>
  );
};

// =====================================================================================
// BRK-06 Dải montage nhanh: 3–5 ô cắt dồn (mỗi ô 0,6 s toàn màn, màu khác nhau), rồi xếp thành dải phim kèm tiêu đề.
// data: { items [3–5] { illus, text (≤4 tiếng) }, title? (≤8) }
// =====================================================================================
const TILE06 = 600;
const TONES06 = (a) => [a, COLORS.coral, COLORS.ink, "#2f5fb3", "#6b3fa0"];
const Brk06 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const items = (data.items || []).slice(0, 5);
  const n = items.length || 1;
  const tones = TONES06(ctx.accent);
  const stripAt = n * TILE06;
  const i = Math.min(n - 1, Math.floor(t / TILE06));
  if (t < stripAt) {
    const it = items[i] || {};
    const f0 = msF(i * TILE06, fps);
    const k = spring({ frame: frame - f0, fps, config: { damping: 12, stiffness: 240, mass: 0.5 } });
    const fl = flash(frame, f0, 3);
    return (
      <Bg color={tones[i % tones.length]}>
        <AbsoluteFill style={{ backgroundImage: "radial-gradient(circle at 50% 45%, rgba(255,255,255,.16), transparent 60%)" }} />
        <div style={{ position: "absolute", right: 70, top: 50, fontSize: 56, fontWeight: 800, color: "rgba(255,255,255,.7)", fontVariantNumeric: "tabular-nums" }}>{i + 1}/{n}</div>
        <div style={{ position: "absolute", left: 0, right: 0, top: 130, bottom: 1080 - BOTTOM, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30,
          transform: `scale(${1.25 - 0.25 * k + 0.03 * ((frame - f0) / 18)}) rotate(${(i % 2 ? 1 : -1) * 2 * (1 - k)}deg)` }}>
          <Illus name={it.illus} size={400} />
          <div style={{ fontSize: fitSize(it.text, 120, 80, 12), fontWeight: 800, color: "#fff", textShadow: "0 8px 24px rgba(0,0,0,.25)", textAlign: "center" }}>{it.text}</div>
        </div>
        <AbsoluteFill style={{ background: "#fff", opacity: fl * 0.7 }} />
      </Bg>
    );
  }
  const w = Math.min(330, (1620 - (n - 1) * 34) / n);
  const tl = ramp(t, stripAt + 200, stripAt + 500);
  return (
    <Bg color={COLORS.paper}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 330, height: w * 1.25 + 80, background: COLORS.ink }}>
        {["top", "bottom"].map((side) => (
          <div key={side} style={{ position: "absolute", left: 0, right: 0, [side]: 10, height: 22, backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.85) 0 30px, transparent 30px 64px)",
            backgroundPosition: `${-frame * 6}px 0`, opacity: 0.55 }} />
        ))}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 370, display: "flex", justifyContent: "center", gap: 34 }}>
        {items.map((it, j) => {
          const s = spring({ frame: frame - msF(stripAt, fps) - j * 3, fps, config: { damping: 14, stiffness: 160 } });
          return (
            <div key={j} style={{ width: w, height: w * 1.25, borderRadius: 18, background: tones[j % tones.length], display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, border: "4px solid rgba(255,255,255,.35)", boxSizing: "border-box",
              transform: `scale(${2.2 - 1.2 * s}) translateY(${(1 - s) * 80}px)`, opacity: Math.min(1, s * 1.5), boxShadow: "0 12px 30px rgba(0,0,0,.3)" }}>
              <Illus name={it.illus} size={w * 0.55} />
              <div style={{ fontSize: Math.min(48, fitSize(it.text, 52, 44, 10)), fontWeight: 800, color: "#fff", textAlign: "center", lineHeight: 1.1, padding: "0 10px" }}>{it.text}</div>
            </div>
          );
        })}
      </div>
      {data.title && (
        <div style={{ position: "absolute", left: 96, right: 96, top: 150, textAlign: "center", fontSize: fitSize(data.title, 78, 56, 22), fontWeight: 800, opacity: tl, transform: `translateY(${(1 - tl) * -30}px)` }}>{data.title}</div>
      )}
    </Bg>
  );
};

// =====================================================================================
// BRK-07 Câu hỏi mở rehook "Nhưng khoan…": màn tối lại, chữ viết tay "Nhưng khoan…" gõ ra, rồi câu hỏi đập vào; Đét ló lên ở góc phải.
// data: { question (≤16), kicker? (mặc định "Nhưng khoan…"), illus? }
// =====================================================================================
const Brk07 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const kick = data.kicker || "Nhưng khoan…";
  const c = cues(ctx, 2, 0, 1300);
  const qAt = Math.max(1150, (ctx.lines || []).length > 1 ? c[1] : 1150);
  const dark = ramp(t, 0, 320);
  const n = Math.floor(kick.length * ramp(t, 120, 820, Easing.linear));
  const up = ramp(t, qAt - 100, qAt + 300);
  const q = slam(frame, fps, msF(qAt, fps), 1.7);
  const rise = spring({ frame: frame - msF(450, fps), fps, config: { damping: 12, stiffness: 110 } });
  const surprise = flash(frame, msF(700, fps), 18);
  return (
    <Bg color={COLORS.paper}>
      <AbsoluteFill style={{ background: `radial-gradient(circle at 45% 45%, ${COLORS.ink2}, ${COLORS.ink} 70%)`, opacity: dark }} />
      <div style={{ position: "absolute", left: 860 - 450, top: 40, fontSize: 900, fontWeight: 800, lineHeight: 1, color: ctx.accent, opacity: 0.22 * dark,
        transform: `rotate(${12 + idle(frame, 5, 160)}deg)` }}>?</div>
      <div style={{ position: "absolute", left: 140, width: 1440, top: 120, bottom: 1080 - BOTTOM, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: HAND, fontSize: 150, color: COLORS.marker, lineHeight: 1, whiteSpace: "nowrap", transform: `translateY(${-40 * up}px) scale(${1 - 0.45 * up})`, transformOrigin: "50% 100%" }}>
          <span>{kick.slice(0, n)}</span><span style={{ visibility: "hidden" }}>{kick.slice(n)}</span>
        </div>
        <div style={{ ...q, marginTop: 10, fontSize: fitSize(data.question, 96, 60, 28), fontWeight: 800, color: "#fff", textAlign: "center", lineHeight: 1.18, maxWidth: 1300, textWrap: "balance" }}>
          {data.question}
        </div>
        {data.illus && <div style={{ marginTop: 26, opacity: ramp(t, qAt + 300, qAt + 600) }}><IllusBadge name={data.illus} size={150} bg="rgba(255,255,255,.12)" /></div>}
      </div>
      {/* Đét ló lên sau gờ, không xuống dải phụ đề */}
      <div style={{ position: "absolute", left: 1560, top: 420, width: 360, height: BOTTOM - 420, overflow: "hidden" }}>
        <MiniDet x={150} y={BOTTOM - 420 + 60 + (1 - rise) * 420} h={420} pose="think" face={t < qAt ? "surprised" : "thinking"} talk={detTalk(ctx, t)} />
      </div>
      <div style={{ position: "absolute", left: 1540, top: BOTTOM - 6, width: 400, height: 12, borderRadius: 6, background: "rgba(255,255,255,.18)" }} />
      {surprise > 0 && [[-1, -1], [0, -1.25], [1, -1]].map(([dx, dy], i) => (
        <div key={i} style={{ position: "absolute", left: 1740 + dx * 120 - 8, top: 520 + dy * 60, width: 16, height: 54, borderRadius: 8, background: COLORS.marker, opacity: surprise,
          transform: `rotate(${dx * 30}deg) translateY(${-(1 - surprise) * 30}px)` }} />
      ))}
    </Bg>
  );
};

// =====================================================================================
// BRK-08 Dòng thời gian quét nhanh: đầu quét chạy trái → phải, mỗi mốc bật lên khi được quét qua; mốc hiện tại sáng vàng.
// data: { points [3–6] { label (≤4), sub? (≤6), illus? }, title? (≤8), current? (chỉ số mốc sáng, mặc định mốc cuối) }
// =====================================================================================
const Brk08 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const pts = data.points || [];
  const n = Math.max(1, pts.length);
  const cur = data.current != null ? Number(data.current) : n - 1;
  const X0 = 200, X1 = 1720, Y = 520;
  const xs = pts.map((_, i) => (n === 1 ? (X0 + X1) / 2 : X0 + ((X1 - X0) * i) / (n - 1)));
  const S0 = 350, S1 = S0 + 360 * n + 300;
  const hx = interpolate(t, [S0, S1], [X0 - 80, xs[cur] ?? X1], { ...cl, easing: Easing.inOut(Easing.cubic) });
  const passAt = xs.map((x) => (x <= X0 - 80 ? S0 : S0 + (S1 - S0) * invEase((x - (X0 - 80)) / Math.max(1, (xs[cur] ?? X1) - (X0 - 80)))));
  const done = t >= S1;
  const pulse = done ? 0.5 + 0.5 * Math.sin(((t - S1) / 1000) * Math.PI * 2.4) : 0;
  const zoomK = 1.05 - 0.05 * ramp(t, 0, S1);
  const gap = n > 1 ? (X1 - X0) / (n - 1) : 600;
  const lw = Math.min(420, gap * 1.6);
  return (
    <Bg color={COLORS.paper}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${zoomK})`, transformOrigin: `${hx}px ${Y}px` }}>
        {data.title && (
          <div style={{ position: "absolute", left: 0, right: 0, top: 128, display: "flex", justifyContent: "center", opacity: ramp(t, 0, 260) }}>
            <Kicker accent={ctx.accent} style={{ fontSize: TYPE.small }}><Icon name="history" size={40} color="#fff" /> {data.title}</Kicker>
          </div>
        )}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <linearGradient id="brk08trail" x1="0" x2="1">
              <stop offset="0" stopColor={ctx.accent} stopOpacity="0" />
              <stop offset="1" stopColor={ctx.accent} stopOpacity="1" />
            </linearGradient>
          </defs>
          <line x1={X0 - 100} y1={Y} x2={X1 + 100} y2={Y} stroke={COLORS.line} strokeWidth={12} strokeLinecap="round" />
          <line x1={X0 - 100} y1={Y} x2={hx} y2={Y} stroke={ctx.accent} strokeWidth={12} strokeLinecap="round" />
          {!done && <rect x={hx - 260} y={Y - 14} width={260} height={28} rx={14} fill="url(#brk08trail)" opacity={0.5} />}
          {xs.map((x, i) => {
            const on = t >= passAt[i];
            const s = spring({ frame: frame - msF(passAt[i], fps), fps, config: { damping: 9, stiffness: 220, mass: 0.5 } });
            const isCur = i === cur && done;
            return (
              <g key={i}>
                {isCur && <circle cx={x} cy={Y} r={44 + 14 * pulse} fill={COLORS.marker} opacity={0.35} />}
                <circle cx={x} cy={Y} r={on ? 14 + 10 * s : 12} fill={on ? (isCur ? COLORS.marker : ctx.accent) : "#fff"} stroke={on ? (isCur ? COLORS.ink : ctx.accent) : COLORS.line} strokeWidth={6} />
              </g>
            );
          })}
          <circle cx={hx} cy={Y} r={done ? 0 : 20} fill="#fff" stroke={ctx.accent} strokeWidth={8} />
        </svg>
        {pts.map((p, i) => {
          const on = t >= passAt[i];
          const s = on ? spring({ frame: frame - msF(passAt[i], fps), fps, config: { damping: 11, stiffness: 180, mass: 0.6 } }) : 0;
          const above = i % 2 === 0;
          const isCur = i === cur && done;
          return (
            <div key={i} style={{ position: "absolute", left: xs[i] - lw / 2, width: lw, ...(above ? { bottom: 1080 - Y + 52 } : { top: Y + 52 }),
              display: "flex", flexDirection: above ? "column-reverse" : "column", alignItems: "center", gap: 10, textAlign: "center",
              opacity: Math.min(1, s * 1.6), transform: `translateY(${(above ? 1 : -1) * (1 - s) * 40}px) scale(${isCur ? 1.06 : 1})` }}>
              <div style={{ padding: "10px 22px", borderRadius: 18, background: isCur ? COLORS.marker : "#fff", border: `3px solid ${isCur ? COLORS.ink : COLORS.line}`,
                fontSize: fitSize(p.label, 52, 44, 12), fontWeight: 800, lineHeight: 1.12, boxShadow: "0 10px 24px rgba(23,32,51,.10)" }}>{p.label}</div>
              {p.sub && <div style={{ fontSize: TYPE.small, fontWeight: 600, color: COLORS.muted, lineHeight: 1.15 }}>{p.sub}</div>}
              {p.illus && <Illus name={p.illus} size={96} />}
            </div>
          );
        })}
      </div>
    </Bg>
  );
};
/** nghịch đảo gần đúng của easeInOutCubic (để biết lúc đầu quét đi qua một mốc). */
function invEase(y) {
  const v = Math.max(0, Math.min(1, y));
  let lo = 0, hi = 1;
  for (let k = 0; k < 24; k++) { const m = (lo + hi) / 2; (Easing.inOut(Easing.cubic)(m) < v ? (lo = m) : (hi = m)); }
  return (lo + hi) / 2;
}

// =====================================================================================
// BRK-09 Lower-third thông tin nguồn: cảnh toàn (hình lớn, máy đẩy chậm) + dải tên kiểu Vox hiện theo bước (12 hình/giây) ở 1/3 dưới.
// data: { title (≤8), detail? (≤14), kind? (mặc định "Nguồn"), illus, around?[≤3], icon? (Lucide, mặc định book-open) }
// =====================================================================================
const Brk09 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const f2 = Math.floor(frame / 2) * 2; // "on twos" cho dải chữ
  const t2 = (f2 / fps) * 1000;
  const c = cues(ctx, 2, 350, 1200);
  const inAt = Math.max(350, Math.min(c[0] + 200, 900));
  const detAt = Math.max(inAt + 650, c[1]);
  const blk = ramp(t2, inAt, inAt + 260);
  const bar = ramp(t2, inAt + 160, inAt + 520);
  const txt = ramp(t2, inAt + 360, inAt + 600);
  const det = ramp(t2, detAt, detAt + 300);
  const push = 1 + 0.08 * ramp(t, 0, 7000, Easing.linear);
  const around = (data.around || []).slice(0, 3);
  const pos = [[-1.25, -0.25], [1.2, -0.4], [1.0, 0.55]];
  const titleSize = fitSize(data.title, 64, 50, 24);
  return (
    <Bg color={COLORS.paper}>
      <AbsoluteFill style={{ background: `linear-gradient(180deg, ${COLORS.pineSoft} 0%, ${COLORS.paper} 70%)` }} />
      <div style={{ position: "absolute", inset: 0, transform: `scale(${push})`, transformOrigin: "55% 40%" }}>
        <div style={{ position: "absolute", left: 960 - 310, top: 350 - 310, width: 620, height: 620, borderRadius: "50%", background: ctx.accent, opacity: 0.1 }} />
        <div style={{ position: "absolute", left: 960 - 190, top: 350 - 190 + idle(frame, 6, 140) }}><Illus name={data.illus} size={380} /></div>
        {around.map((nm, i) => (
          <div key={i} style={{ position: "absolute", left: 960 + pos[i][0] * 380 - 80, top: 350 + pos[i][1] * 380 - 80 + idle(frame + i * 30, 8, 110), opacity: 0.95 }}><Illus name={nm} size={160} /></div>
        ))}
      </div>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(23,32,51,.10))" }} />
      {/* dải lower-third */}
      <div style={{ position: "absolute", left: 96 + 170, top: 668 - 50, padding: "4px 18px", borderRadius: "10px 10px 0 0", background: COLORS.ink, color: COLORS.marker, fontSize: 30, fontWeight: 800,
        letterSpacing: "0.08em", textTransform: "uppercase", opacity: txt }}>{data.kind || "Nguồn"}</div>
      <div style={{ position: "absolute", left: 96, top: 668, height: 200, display: "flex", alignItems: "stretch" }}>
        <div style={{ width: 170 * blk, background: ctx.accent, borderRadius: "22px 0 0 22px", display: "grid", placeItems: "center", overflow: "hidden" }}>
          <div style={{ opacity: blk > 0.8 ? 1 : 0 }}><Icon name={data.icon || "book-open"} size={88} color="#fff" stroke={2.4} /></div>
        </div>
        <div style={{ position: "relative", background: "#fff", borderRadius: "0 22px 22px 0", boxShadow: "0 18px 40px rgba(23,32,51,.16)", padding: "26px 44px", minWidth: 520, maxWidth: 1300,
          clipPath: `inset(0 ${(1 - bar) * 100}% 0 0)`, display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
          <div style={{ fontSize: titleSize, fontWeight: 800, lineHeight: 1.12, whiteSpace: "nowrap", opacity: txt, transform: `translateX(${(1 - txt) * 30}px)` }}>{data.title}</div>
          {data.detail && <div style={{ fontSize: TYPE.small, fontWeight: 600, color: COLORS.muted, lineHeight: 1.2, opacity: det, transform: `translateX(${(1 - det) * 30}px)` }}>{data.detail}</div>}
        </div>
      </div>
    </Bg>
  );
};

// =====================================================================================
// BRK-10 Trích dẫn lớn (pull quote): ngoặc kép khổng lồ, câu hiện từng từ, cụm nhấn được tô dạ quang, rồi tên người nói trượt vào.
// data: { quote (≤26 tiếng), by (≤10), mark? (cụm trong quote để tô), illus? }
// =====================================================================================
const Brk10 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const ws = String(data.quote).split(/\s+/).filter(Boolean);
  const mask = markMask(ws, data.mark);
  const W0 = 250, PER = 55;
  const allAt = W0 + ws.length * PER;
  const c = cues(ctx, 2, 0, allAt + 900);
  const markAt = allAt + 250;
  const byAt = Math.max(markAt + 500, (ctx.lines || []).length > 1 ? c[1] : markAt + 500);
  const by = ramp(t, byAt, byAt + 380);
  const size = fitSize(data.quote, 100, 60, 50);
  const mk = ramp(t, markAt, markAt + 450);
  return (
    <Bg color={COLORS.paper}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 28, background: ctx.accent }} />
      <div style={{ position: "absolute", left: 110, top: -60, fontSize: 620, fontWeight: 800, lineHeight: 1, color: ctx.accent, opacity: 0.14 * ramp(t, 0, 300),
        transform: `translateY(${(1 - ramp(t, 0, 400)) * -60}px)` }}>“</div>
      <div style={{ position: "absolute", left: 230, right: 200, top: 120, bottom: 1080 - BOTTOM, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: size, fontWeight: 700, lineHeight: 1.28, color: COLORS.ink, letterSpacing: "-0.01em" }}>
          {ws.map((w, i) => {
            const e = ramp(t, W0 + i * PER, W0 + i * PER + 220);
            return (
              <span key={i} style={{ position: "relative", display: "inline-block", marginRight: size * 0.26, opacity: e, transform: `translateY(${(1 - e) * 18}px)` }}>
                {mask[i] && <span style={{ position: "absolute", left: -6, right: -6 - size * 0.26, bottom: "0.08em", height: "0.48em", background: COLORS.marker, borderRadius: 8, zIndex: 0,
                  transform: `scaleX(${mk})`, transformOrigin: "left" }} />}
                <span style={{ position: "relative", zIndex: 1, fontWeight: mask[i] ? 800 : 700 }}>{w}</span>
              </span>
            );
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 50, opacity: by, transform: `translateX(${(1 - by) * 80}px)` }}>
          <div style={{ width: 120, height: 8, borderRadius: 4, background: ctx.accent }} />
          {data.illus && <IllusBadge name={data.illus} size={104} />}
          <div style={{ fontSize: fitSize(data.by, 54, 44, 24), fontWeight: 700, color: COLORS.ink2 }}>{data.by}</div>
        </div>
      </div>
    </Bg>
  );
};

// =====================================================================================
// BRK-11 "3 điều cần nhớ" đếm ngược: số lớn bên trái lật 3 → 2 → 1, mỗi số kéo một dòng vào danh sách (điều số 1 ở trên cùng, hiện sau cùng).
// data: { items [2–5] (items[0] = điều số 1, quan trọng nhất; lời đọc theo thứ tự đếm ngược), title? }
// =====================================================================================
const plan11 = (d, c) => {
  const n = (d.items || []).length || 1;
  const L = (c?.lines || []).length;
  const off = L >= n + 1 ? 1 : 0;
  const at = cues(c, n, 1000, 1050, off).map((x, i) => Math.max(900 + i * 500, x));
  return { at, end: at.at(-1) + 1500 };
};
const Brk11 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const items = data.items || [];
  const n = items.length || 1;
  const P = plan11(data, ctx);
  const k = P.at.filter((a) => t >= a).length; // đã hiện k dòng (dòng thứ j hiện = điều số n - j)
  const num = k === 0 ? n : n - k + 1;
  const lastAt = k ? P.at[k - 1] : 0;
  const flip = ramp(t, lastAt, lastAt + 260);
  const title = data.title || `${n} điều cần nhớ`;
  const intro = slam(frame, fps, 2, 2);
  const rowH = n > 4 ? 100 : n > 3 ? 112 : 128;
  const rowTop = n > 4 ? 262 : 300;
  return (
    <Bg color={COLORS.paper}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 620, background: COLORS.ink }} />
      <div style={{ position: "absolute", left: 0, top: 150, width: 620, textAlign: "center", color: "rgba(255,255,255,.7)", fontSize: TYPE.small, fontWeight: 700, opacity: ramp(t, 0, 300) }}>
        {k === 0 ? "Đếm ngược" : `Điều số ${num}`}
      </div>
      <div style={{ position: "absolute", left: 0, top: 230, width: 620, height: 520, display: "grid", placeItems: "center", perspective: 1200 }}>
        <div style={{ fontSize: 470, fontWeight: 800, lineHeight: 1, color: k === n ? COLORS.marker : "#fff", fontVariantNumeric: "tabular-nums",
          transform: `rotateX(${k ? (1 - flip) * 90 : 0}deg) ${k === 0 ? intro.transform : ""}`, opacity: k === 0 ? intro.opacity : 0.15 + 0.85 * flip }}>{num}</div>
      </div>
      <div style={{ position: "absolute", left: 700, right: 96, top: 130, opacity: ramp(t, 0, 300) }}>
        <div style={{ fontSize: fitSize(title, 70, 52, 20), fontWeight: 800, lineHeight: 1.12 }}>{title}</div>
        <div style={{ height: 8, width: 160, borderRadius: 4, background: ctx.accent, marginTop: 16 }} />
      </div>
      <div style={{ position: "absolute", left: 700, right: 96, top: rowTop, display: "flex", flexDirection: "column", gap: n > 4 ? 12 : 16 }}>
        {items.map((it, i) => {
          // dòng i = điều số i + 1; hiện ở lượt j = n - 1 - i
          const j = n - 1 - i;
          const a = P.at[j];
          const e = spring({ frame: frame - msF(a, fps), fps, config: { damping: 14, stiffness: 150 } });
          const on = t >= a;
          const now = on && j === k - 1;
          return (
            <div key={i} style={{ height: rowH, display: "flex", alignItems: "center", gap: 26, padding: "0 30px", borderRadius: 24,
              background: on ? (now ? "#fff" : COLORS.surface) : "transparent", border: `3px ${on ? "solid" : "dashed"} ${now ? ctx.accent : COLORS.line}`,
              boxShadow: now ? "0 16px 36px rgba(23,32,51,.14)" : "none", opacity: on ? (now ? 1 : 0.78) : 0.5, transform: `translateX(${on ? (1 - e) * 120 : 0}px)` }}>
              <div style={{ width: 76, height: 76, flex: "none", borderRadius: "50%", background: on ? (i === 0 ? COLORS.marker : ctx.accent) : COLORS.line, display: "grid", placeItems: "center",
                fontSize: 46, fontWeight: 800, color: i === 0 && on ? COLORS.ink : "#fff" }}>{i + 1}</div>
              <div style={{ fontSize: fitSize(it, 54, 44, 26), fontWeight: 700, lineHeight: 1.15, opacity: on ? Math.min(1, e * 1.4) : 0 }}>{it}</div>
            </div>
          );
        })}
      </div>
    </Bg>
  );
};

// =====================================================================================
// BRK-12 Chữ khớp chuyển (match cut): chữ viết tay trên bảng được khoanh, máy lao vào chữ, CẮT sang màn màu: cùng chữ, cùng chỗ, in đậm; dòng giải thích hiện dưới.
// data: { word (≤5 tiếng), sub? (≤14), from? [x, y] (chỗ chữ trên bảng, px 1920×1080; mặc định [560, 380]), others?[≤3] (chữ mờ khác trên bảng) }
// =====================================================================================
const CUT12 = 1100;
const Brk12 = ({ data, ctx }) => {
  const { frame, fps, t } = useT();
  const [wx, wy] = data.from || [560, 380];
  const cutF = msF(CUT12, fps);
  const c = cues(ctx, 2, 0, 1700);
  const subAt = Math.max(CUT12 + 500, (ctx.lines || []).length > 1 ? c[1] : CUT12 + 500);
  const handSize = 120;
  if (frame < cutF) {
    const cir = ramp(t, 150, 600, Easing.inOut(Easing.quad));
    const z = ramp(t, 480, CUT12, Easing.in(Easing.cubic));
    const S = 1 + 1.7 * z;
    const others = data.others || ["…", "…"];
    const spots = [[1250, 260], [1320, 620], [380, 700]];
    const ww = Math.max(260, String(data.word).length * handSize * 0.46);
    return (
      <Bg color="#e9edf2">
        <div style={{ position: "absolute", inset: 0, transformOrigin: `${wx}px ${wy}px`, transform: `translate(${(960 - wx) * z}px, ${(450 - wy) * z}px) scale(${S})`, filter: `blur(${z * z * 6}px)` }}>
          <div style={{ position: "absolute", left: 60, top: 50, width: 1800, height: 900, borderRadius: 18, background: "#fdfdfb", border: "12px solid #d5dbe3", boxShadow: "0 18px 50px rgba(23,32,51,.18)",
            backgroundImage: "linear-gradient(rgba(23,32,51,.035) 2px, transparent 2px), linear-gradient(90deg, rgba(23,32,51,.035) 2px, transparent 2px)", backgroundSize: "80px 80px" }} />
          {others.slice(0, 3).map((o, i) => (
            <div key={i} style={{ position: "absolute", left: spots[i][0], top: spots[i][1], fontFamily: HAND, fontSize: 70, color: COLORS.muted, opacity: 0.45, whiteSpace: "nowrap" }}>
              {o === "…" ? <svg width={300} height={40}><path d={`M 5 20 q 40 -14 80 0 t 80 0 t 80 0`} stroke={COLORS.muted} strokeWidth={6} fill="none" strokeLinecap="round" /></svg> : o}
            </div>
          ))}
          <div style={{ position: "absolute", left: wx, top: wy, transform: "translate(-50%, -50%)", fontFamily: HAND, fontSize: handSize, color: COLORS.ink, whiteSpace: "nowrap", lineHeight: 1 }}>{data.word}</div>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
            <ellipse cx={wx} cy={wy} rx={ww * 0.62 + 40} ry={handSize * 0.75} fill="none" stroke={ctx.accent} strokeWidth={8} strokeLinecap="round" pathLength={100}
              strokeDasharray={100} strokeDashoffset={100 * (1 - cir)} transform={`rotate(-5 ${wx} ${wy})`} />
          </svg>
        </div>
      </Bg>
    );
  }
  const f = frame - cutF;
  const fl = flash(frame, cutF, 5);
  const settle = spring({ frame: f, fps, config: { damping: 16, stiffness: 120 } });
  const big = fitSize(data.word, 190, 110, 8);
  const from = (handSize * 2.7) / big; // khớp cỡ lúc cắt (chữ tay sau khi phóng ≈ 2,7×)
  const sc = from + (1 - from) * settle;
  const ul = ramp(t, CUT12 + 250, CUT12 + 650);
  const sub = ramp(t, subAt, subAt + 350);
  return (
    <Bg color={ctx.accent}>
      <AbsoluteFill style={{ backgroundImage: "radial-gradient(circle at 50% 42%, rgba(255,255,255,.18), transparent 62%)" }} />
      <AbsoluteFill style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.05) 2px, transparent 2px)", backgroundSize: "80px 80px",
        transform: `scale(${1.15 - 0.15 * settle})` }} />
      <div style={{ position: "absolute", left: 96, right: 96, top: 450 - big * 0.6, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: big, fontWeight: 800, lineHeight: 1.1, color: "#fff", whiteSpace: "nowrap", letterSpacing: "-0.02em", transform: `scale(${sc})`, textShadow: "0 16px 40px rgba(0,0,0,.2)" }}>{data.word}</div>
        <div style={{ height: 16, borderRadius: 8, background: COLORS.marker, width: Math.min(1200, String(data.word).length * big * 0.5), marginTop: 6, transform: `scaleX(${ul})` }} />
        {data.sub && (
          <div style={{ marginTop: 44, fontSize: fitSize(data.sub, 60, 46, 30), fontWeight: 600, color: "rgba(255,255,255,.94)", textAlign: "center", maxWidth: 1400, lineHeight: 1.25,
            opacity: sub, transform: `translateY(${(1 - sub) * 26}px)` }}>{data.sub}</div>
        )}
      </div>
      <AbsoluteFill style={{ background: "#fff", opacity: fl * 0.8 }} />
    </Bg>
  );
};

// =====================================================================================
const isIdx = (v, n) => Number.isInteger(Number(v)) && Number(v) >= 0 && Number(v) < n;
export const BRK = {
  "BRK-01": { name: "Dừng hình + nhãn", family: "BRK", Component: Brk01, limits: { label: [1, 6], note: [0, 14] },
    check: (d, lines) => [...need(d, ["illus", "label"]), ...tone(d), ...((d.around || []).length > 3 ? ["around tối đa 3 hình"] : []), ...voiceLen(lines)],
    estimate: (d, c) => fin(Math.max(cues(c, 2, 700, 1300)[0] + 150, 700) + 380 + (d.note ? 1900 : 1500), c) },
  "BRK-02": { name: "Tiêu đề đập vào", family: "BRK", Component: Brk02, limits: { title: [2, 8], sub: [0, 14] },
    check: (d, lines) => [...need(d, ["title"]), ...(d.hl && !markMask(String(d.title || "").split(/\s+/), d.hl).some(Boolean) ? [`hl "${d.hl}" không có trong title`] : []), ...voiceLen(lines)],
    estimate: (d, c) => fin(180 + String(d.title).split(/\s+/).length * PER02 + (d.sub ? 2300 : 1500), c) },
  "BRK-03": { name: "Con số đếm nhảy", family: "BRK", Component: Brk03, limits: { label: [2, 12] },
    check: (d, lines) => [...need(d, ["value", "label"]), ...(d.value != null && !Number.isFinite(Number(d.value)) ? ["value phải là số"] : []),
      ...(d.from != null && !Number.isFinite(Number(d.from)) ? ["from phải là số"] : []), ...(String(d.prefix || "").length + String(d.suffix || "").length > 8 ? ["prefix + suffix quá dài (> 8 ký tự)"] : []), ...voiceLen(lines)],
    estimate: (d, c) => fin(ROLL03[1] + 1700, c) },
  "BRK-04": { name: "Chia đôi Sai/Đúng", family: "BRK", Component: Brk04, limits: { wrong: [2, 14], right: [2, 14], title: [0, 8] },
    check: (d, lines) => [...need(d, ["wrong", "right"]), ...(d.labels && (!Array.isArray(d.labels) || d.labels.length !== 2) ? ["labels phải là mảng 2 chữ, ví dụ [\"Sai\", \"Đúng\"]"] : []), ...voiceLen(lines)],
    estimate: (d, c) => fin(Math.max(1300, cues(c, 2, 150, 1500)[1]) + 2000, c) },
  "BRK-05": { name: "Nhắc lại, Đét PiP", family: "BRK", Component: Brk05, limits: { title: [2, 8], points: [1, 3] },
    check: (d, lines) => [...need(d, ["title", "points"]), ...(d.points || []).filter((p) => words(p) > 10).map((p) => `ý "${p}" quá 10 tiếng`), ...voiceLen(lines, 12000)],
    estimate: (d, c) => { const n = (d.points || []).length || 1; const at = cues(c, n, 900, 1100, (c.lines || []).length > n ? 1 : 0); return fin(Math.max(700, at.at(-1)) + 1400, c); } },
  "BRK-06": { name: "Dải montage nhanh", family: "BRK", Component: Brk06, limits: { items: [3, 5], title: [0, 8] },
    check: (d, lines) => [...need(d, ["items"]), ...(d.items || []).flatMap((it, i) => [...(!it?.illus ? [`items[${i}] thiếu illus`] : []), ...(!it?.text ? [`items[${i}] thiếu text`] : []),
      ...(words(it?.text) > 4 ? [`items[${i}].text quá 4 tiếng`] : [])]), ...voiceLen(lines, 12000)],
    estimate: (d, c) => fin(Math.min(5, (d.items || []).length || 3) * TILE06 + 2200, c) },
  "BRK-07": { name: "Nhưng khoan… (rehook)", family: "BRK", Component: Brk07, limits: { question: [3, 16] },
    check: (d, lines) => [...need(d, ["question"]), ...maxWords(d, "kicker", 4), ...voiceLen(lines)],
    estimate: (d, c) => fin(Math.max(1150, (c.lines || []).length > 1 ? cues(c, 2, 0, 1300)[1] : 1150) + 2000, c) },
  "BRK-08": { name: "Dòng thời gian quét", family: "BRK", Component: Brk08, limits: { points: [3, 6], title: [0, 8] },
    check: (d, lines) => [...need(d, ["points"]), ...(d.points || []).flatMap((p, i) => [...(!p?.label ? [`points[${i}] thiếu label`] : []), ...(words(p?.label) > 4 ? [`points[${i}].label quá 4 tiếng`] : []),
      ...(words(p?.sub) > 6 ? [`points[${i}].sub quá 6 tiếng`] : [])]), ...(d.current != null && !isIdx(d.current, (d.points || []).length) ? [`current ${d.current} không phải chỉ số mốc (0…${(d.points || []).length - 1})`] : []), ...voiceLen(lines, 12000)],
    estimate: (d, c) => fin(350 + 360 * Math.max(1, (d.points || []).length) + 300 + 1600, c) },
  "BRK-09": { name: "Lower-third nguồn", family: "BRK", Component: Brk09, limits: { title: [1, 8], detail: [0, 14] },
    check: (d, lines) => [...need(d, ["title", "illus"]), ...maxWords(d, "kind", 3), ...((d.around || []).length > 3 ? ["around tối đa 3 hình"] : []), ...(String(d.title || "").length > 40 ? ["title quá 40 ký tự (dải một dòng)"] : []), ...voiceLen(lines)],
    estimate: (d, c) => fin(Math.max(350 + 650, cues(c, 2, 350, 1200)[1]) + 1900, c) },
  "BRK-10": { name: "Trích dẫn lớn", family: "BRK", Component: Brk10, limits: { quote: [3, 26], by: [1, 10] },
    check: (d, lines) => [...need(d, ["quote", "by"]), ...(d.mark && !markMask(String(d.quote || "").split(/\s+/), d.mark).some(Boolean) ? [`mark "${d.mark}" không có trong quote`] : []), ...voiceLen(lines)],
    estimate: (d, c) => fin(250 + String(d.quote).split(/\s+/).length * 55 + 250 + 500 + 1600, c) },
  "BRK-11": { name: "Điều cần nhớ, đếm ngược", family: "BRK", Component: Brk11, limits: { items: [2, 5], title: [0, 8] },
    check: (d, lines) => [...need(d, ["items"]), ...(d.items || []).filter((x) => words(x) > 8).map((x) => `điều "${x}" quá 8 tiếng`), ...voiceLen(lines, 12000)],
    estimate: (d, c) => fin(plan11(d, c).end, c) },
  "BRK-12": { name: "Chữ khớp chuyển (match cut)", family: "BRK", Component: Brk12, limits: { word: [1, 5], sub: [0, 14] },
    check: (d, lines) => [...need(d, ["word"]), ...(String(d.word || "").length > 22 ? ["word quá 22 ký tự"] : []),
      ...(d.from && (!Array.isArray(d.from) || d.from.length !== 2 || d.from[0] < 200 || d.from[0] > 1720 || d.from[1] < 160 || d.from[1] > 820) ? ["from phải là [x, y] trong khoảng x 200–1720, y 160–820"] : []),
      ...((d.others || []).length > 3 ? ["others tối đa 3"] : []), ...voiceLen(lines)],
    estimate: (d, c) => fin(Math.max(CUT12 + 500, (c.lines || []).length > 1 ? cues(c, 2, 0, 1700)[1] : 0) + 1800, c) },
};
