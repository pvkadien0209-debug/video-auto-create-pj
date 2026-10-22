// stage.jsx — DIỄN VIÊN TRÊN SÂN KHẤU (#106): vẽ nhân vật theo id + chỗ đứng + tư thế + nét mặt + miệng,
// tính trạng thái từng người theo các câu thoại (ctx.lines), bong bóng thoại tiếng Việt (line.sub).
// Luật NN-L: chỗ đứng cố định; người nói sáng, người nghe hơi mờ và quay về phía người nói; tối đa 3 người + Đét.
import React from "react";
import { interpolate, Easing } from "remotion";
import { COLORS, FONT } from "../core/theme.js";
import { spotOf, W, H } from "../core/sets.jsx";
import { CAST, byId } from "./cast.js";
import { PersonG, heightOf, headY } from "./rig/Person.jsx";
import { EXPR } from "./rig/Face.jsx";
import { POSES, DIRECTIONAL, mirrorPose, mix } from "./rig/poses.js";
import { DetG, DET_POSES, EXPR_DET } from "./mascot/Det.jsx";
import { eyeOpenAt, isTalking, mouthAt, ramp } from "./anim.js";

// ---------------------------------------------------------------- danh mục hợp lệ (người viết kịch bản tra ở ANIM-GUIDE.md)
export const PEOPLE_IDS = CAST.map((c) => c.id); // lan, dung, thao, hoa, binh, bin, tu, sam (#110)
export const ACTOR_IDS = [...PEOPLE_IDS, "det"];
export const SIDES = ["farleft", "left", "center", "right", "farright"];
export const PERSON_FACES = Object.keys(EXPR); // neutral happy surprised worried sad thinking stern
export const DET_FACES = Object.keys(EXPR_DET); // + wink laugh
export const PERSON_POSES = Object.keys(POSES).filter((p) => p !== "walk");
// Tên tư thế của Đét: dùng chung tên với người khi có thể (point, wave, stop, thumb, think); "present" = chỉ sang thẻ.
export const DET_POSE_ALIAS = { stand: "idle", present: "point", explain: "point" };
export const DET_POSE_NAMES = [...Object.keys(DET_POSES), "present", "stand"];
export const NAME_OF = (id) => (id === "det" ? "Đét" : byId[id]?.name || id);
export const COLOR_OF = (id) => (id === "det" ? "#b8693d" : byId[id]?.color || COLORS.ink2);

const detPose = (name) => DET_POSES[DET_POSE_ALIAS[name] || name] || DET_POSES.idle;
const personPose = (name) => POSES[name] || POSES.stand;

// ---------------------------------------------------------------- hình học
/** Chiều cao hình (px ở tỉ lệ 1) và vị trí miệng (so với chân). */
export const figureOf = (id) => {
  if (id === "det") return { h: 392, mouthY: -232, headY: -300 };
  const S = byId[id]?.skin || byId.lan.skin;
  const hy = headY(S), k = (S.scale ?? 1) * (S.headK ?? 1); // Bé Bin: scale + đầu to (#110)
  return { h: heightOf(S), mouthY: hy + 40 * k, headY: hy };
};

// ---------------------------------------------------------------- trạng thái theo thời gian
const WALK_DIST = 560, WALK_MS = 1100, POP_MS = 420, MIX_MS = 240;

/** Chỗ đứng mặc định khi kịch bản không ghi side: 1 người giữa, 2 người trái–phải, 3 người trái–giữa–phải. */
export const defaultSides = (n) => (n <= 1 ? ["center"] : n === 2 ? ["left", "right"] : ["left", "center", "right"]);

/** Chuẩn hoá danh sách diễn viên: điền side, tách Đét ra (Đét đứng ở chỗ "det" nếu không ghi side). */
export const normActors = (actors = []) => {
  const people = actors.filter((a) => a.id !== "det");
  const def = defaultSides(people.length);
  let k = 0;
  return actors.map((a) => (a.id === "det" ? { ...a, side: a.side || "det" } : { ...a, side: a.side || def[k++] || "center" }));
};

/** Thời điểm bắt đầu vào cảnh (ms). at = id câu: tới câu đó mới vào (đi bộ tới nơi đúng lúc câu bắt đầu). */
const enterStart = (a, lines, i) => {
  if (a.at) {
    const l = lines.find((x) => x.id === a.at);
    if (l) return Math.max(0, l.startMs - (a.enter === "walk" ? WALK_MS : a.enter === "pop" ? POP_MS : 200));
  }
  return a.enter === "pop" ? 150 + i * 160 : 0;
};

/** Các mốc đổi tư thế / nét mặt của một diễn viên: từ câu của chính họ (pose, face) và phản ứng (react) trong câu người khác. */
/** Tư thế cử chỉ (chỉ, giải thích, vẫy…) chỉ giữ trong câu đó rồi trở về tư thế gốc; tư thế "đứng yên" (cầm điện thoại, khoanh tay…) thì giữ. */
export const TRANSIENT = new Set(["explain", "point", "pointL", "wave", "stop", "shrug", "thumb"]);
const changesOf = (a, lines) => {
  const out = [];
  const base = a.pose || (a.id === "det" ? "idle" : "stand");
  let rest = base;
  for (const l of lines) {
    if (l.who === a.id && (l.pose || l.face)) {
      out.push({ t: l.startMs, pose: l.pose, face: l.face });
      if (l.pose && TRANSIENT.has(l.pose) && !l.hold) out.push({ t: l.endMs + 350, pose: rest });
      else if (l.pose) rest = l.pose;
    }
    const r = l.react?.[a.id];
    if (r) out.push({ t: l.startMs + 250, ...(typeof r === "string" ? { face: r } : r) });
  }
  return out;
};

/**
 * Trạng thái một diễn viên tại thời điểm t (ms) — dùng chung cho mọi module có nhân vật.
 * actors đã qua normActors. lines = ctx.lines (đã lọc nếu cần, ví dụ sau khi "tua lại").
 */
export const actorState = ({ a, i, actors, lines, t, set, f }) => {
  const spot = spotOf(set, a.side);
  const isDet = a.id === "det";
  const t0 = enterStart(a, lines, i);
  const fromLeft = a.from ? a.from === "left" : spot.x < 960; // from: "left" | "right" = phía đi vào (enter: "walk")
  let x = spot.x, y = spot.y, s = spot.s * (a.scale || 1), op = 1, scaleK = 1;
  let walking = false, walkDir = 0;
  if (t < t0) op = 0;
  else if (a.enter === "walk") {
    const p = Math.min(1, (t - t0) / WALK_MS);
    const e = 1 - Math.pow(1 - p, 2.2);
    x = spot.x + (fromLeft ? -1 : 1) * WALK_DIST * (1 - e);
    walking = p < 1;
    walkDir = fromLeft ? 1 : -1;
    op = Math.min(1, (t - t0) / 180);
  } else if (a.enter === "pop") {
    const p = Math.min(1, (t - t0) / POP_MS);
    scaleK = p < 1 ? interpolate(p, [0, 0.6, 0.8, 1], [0.2, 1.08, 0.97, 1]) : 1;
    op = Math.min(1, p * 3);
  } else if (a.enter === "none" || !a.enter) {
    op = t0 > 0 ? Math.min(1, (t - t0) / 200) : 1;
  }

  // tư thế + nét mặt theo các câu đã qua
  const ch = changesOf(a, lines).filter((c) => c.t <= t).sort((p, q) => p.t - q.t);
  let poseName = a.pose || (isDet ? "idle" : "stand"), prevPose = poseName, poseAt = -1e9, face = a.face || "neutral";
  for (const c of ch) {
    if (c.pose && c.pose !== poseName) (prevPose = poseName), (poseName = c.pose), (poseAt = c.t);
    if (c.face) face = c.face;
  }
  const valid = isDet ? EXPR_DET : EXPR;
  if (!valid[face]) face = "neutral";

  // ai đang nói?
  const cur = lines.find((l) => isTalking(l, t) && l.who && actors.some((o) => o.id === l.who));
  const mine = lines.find((l) => l.who === a.id && isTalking(l, t));
  const talk = mine ? mouthAt(mine, t) : 0;
  const speaking = !!mine;

  // hướng nhìn: người nói nhìn người nghe (line.to hoặc người gần nhất); người nghe nhìn người nói; im lặng: nhìn người vừa nói
  const others = actors.filter((o) => o.id !== a.id && (o.id !== "det" || isDet));
  const xOf = (id) => spotOf(set, actors.find((o) => o.id === id)?.side).x;
  let lookX = null;
  if (speaking) {
    const to = mine.to && actors.find((o) => o.id === mine.to);
    if (to) lookX = xOf(to.id);
    else if (others.length) lookX = others.reduce((b, o) => (Math.abs(xOf(o.id) - spot.x) < Math.abs(b - spot.x) ? xOf(o.id) : b), Infinity);
  } else {
    const last = cur || [...lines].reverse().find((l) => l.startMs <= t && l.who && l.who !== a.id && actors.some((o) => o.id === l.who));
    if (last) lookX = xOf(last.who);
    else if (others.length) lookX = others.reduce((sum, o) => sum + xOf(o.id), 0) / others.length;
  }
  if (a.look === "front" || (isDet && speaking && !mine.to)) lookX = null; // Đét nói với người xem
  const dir = walking ? walkDir : lookX == null || Math.abs(lookX - spot.x) < 40 ? 0 : Math.sign(lookX - spot.x);

  // dựng pose số
  const k = ramp(t, poseAt, poseAt + MIX_MS);
  let pose;
  if (isDet) {
    pose = mix(detPose(prevPose), detPose(poseName), k);
  } else {
    const P = (n) => (DIRECTIONAL.has(n) && dir < 0 ? mirrorPose(personPose(n)) : personPose(n));
    pose = walking ? { ...POSES.walk, walk: (t / 1000) * 9.5 } : mix(P(prevPose), P(poseName), k);
  }
  const seed = a.id + i;
  const breath = Math.sin(f / 13 + i * 1.7);
  pose = {
    ...pose,
    breath,
    turn: (pose.turn || 0) + dir * (isDet ? 0.3 : walking ? 0.45 : 0.32),
    nod: (pose.nod || 0) + (speaking ? 3 * Math.sin(t / 170) : 0),
    ...(isDet ? { tail: 6 * Math.sin(f / 9 + i) } : {}),
  };

  return {
    id: a.id, isDet, x, y, s: s * scaleK, op, pose, face, talk, speaking, walking, listening: !!cur && !speaking && !isDet,
    eyeOpen: eyeOpenAt(f, seed), clip: spot.clip, bubble: spot.bubble || "above", side: a.side, fig: figureOf(a.id), spot,
  };
};

// ---------------------------------------------------------------- vẽ
/** Một nhân vật trên toàn khung 1920×1080 (svg riêng → lọc mờ bằng CSS, cắt theo ô hình). */
export const Actor = ({ st, dim = 0, filter }) => {
  if (st.op <= 0) return null;
  const S = byId[st.id]?.skin;
  const c = st.clip;
  // #144: người nghe nhạt bằng lọc màu (không dùng opacity → khỏi lộ đồ vật phía sau qua người khi quay cận)
  const f = [dim > 0 ? `saturate(${1 - 0.4 * dim}) contrast(${1 - 0.12 * dim}) brightness(${1 + 0.05 * dim})` : "", filter || ""].join(" ").trim();
  return (
    <div style={{
      position: "absolute", left: 0, top: 0, width: W, height: H, opacity: st.op, filter: f || undefined,
      clipPath: c ? `inset(${c.y}px ${W - c.x - c.w}px ${H - c.y - c.h}px ${c.x}px round ${c.r || 0}px)` : undefined,
    }}>
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <g transform={`translate(${st.x} ${st.y}) scale(${st.s})`}>
          {st.isDet ? (
            <DetG pose={st.pose} face={st.face} eyeOpen={st.eyeOpen} talk={st.talk} />
          ) : (
            <PersonG skin={S} pose={st.pose} face={st.face} talk={st.talk} eyeOpen={st.eyeOpen} />
          )}
        </g>
      </svg>
    </div>
  );
};

/** Ước lượng khung bong bóng vừa chữ: thử cỡ chữ 44 → 34 và bề rộng 520 → 840 cho tới khi vừa chiều cao cho phép (≤ 3 dòng). */
export const fitBubble = (text, maxH = 250, maxW = 820) => {
  const n = String(text || "").length;
  const ws = [520, 600, 680, 760, 840].filter((x) => x <= maxW);
  if (!ws.length) ws.push(maxW);
  // ưu tiên 2 dòng chữ to; không vừa thì cho 3 dòng
  for (const maxLines of [2, 3]) {
    for (const fs of [44, 42, 40, 38, 36, 34]) {
      if (maxLines === 2 && fs < 40) continue;
      for (const w of ws) {
        const per = Math.max(8, Math.floor((w - 64) / (fs * 0.58)));
        const lines = Math.ceil((n * 1.08) / per);
        const h = lines * fs * 1.26 + 48;
        if (h <= maxH && lines <= maxLines) return { fs, w: Math.min(w, Math.max(260, n * fs * 0.6 + 80)), h };
      }
    }
  }
  return { fs: 34, w: maxW, h: maxH };
};

/**
 * Bong bóng thoại (HTML). tip = điểm đuôi chỉ vào. place:
 *   "above" — khung nằm trên tip, mép dưới ở y = edge;  "below" — khung dưới tip, mép trên ở y = edge;
 *   "left"  — khung nằm bên trái tip, mép phải ở x = edge, giữa khung ngang tip (kẹp trong [minY, maxY]).
 * k = 0..1 hiện vào (nảy nhẹ).
 */
export const Bubble = ({ text, name, color = COLORS.ink2, tip, place = "above", edge, maxH = 250, maxW = 820, k = 1, minX = 40, maxX = W - 40, minY = 100, maxY = 890, tone = "white" }) => {
  if (k <= 0 || !text) return null;
  const { fs, w, h } = fitBubble(text, maxH, maxW);
  const bg = tone === "white" ? "#fff" : tone;
  const sc = interpolate(k, [0, 1], [0.7, 1], { easing: Easing.out(Easing.back(1.8)), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const hh = h + (name ? 10 : 0);
  let left, top, tail, origin;
  if (place === "left") {
    left = Math.max(minX, edge - w);
    top = Math.max(minY, Math.min(maxY - hh, tip.y - hh * 0.35));
    const ty = Math.max(top + 28, Math.min(top + hh - 28, tip.y));
    const rx = left + w; // mép phải
    tail = `M ${rx - 2} ${ty - 22} L ${tip.x} ${tip.y} L ${rx - 2} ${ty + 18}`;
    origin = `100% ${ty - top}px`;
  } else {
    const above = place === "above";
    left = Math.max(minX, Math.min(maxX - w, tip.x - w / 2));
    top = above ? edge - hh : edge;
    const tx = Math.max(left + 50, Math.min(left + w - 50, tip.x));
    const by = above ? edge - 2 : edge + 2; // mép khung nơi đuôi mọc ra
    tail = `M ${tx - 24} ${by} L ${tip.x} ${tip.y} L ${tx + 22} ${by}`;
    origin = `${tx - left}px ${above ? "100%" : "0%"}`;
  }
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, pointerEvents: "none", opacity: Math.min(1, k * 2) }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transformOrigin: `${left}px ${top}px`, transform: `translate(${left}px, ${top}px) scale(${sc}) translate(${-left}px, ${-top}px)` }}>
        {/* đuôi: vẽ trước khung, viền mực; phần chân đuôi bị khung trắng che → liền mạch */}
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <path d={tail} fill={bg} stroke={COLORS.ink} strokeWidth={4} strokeLinejoin="round" />
        </svg>
        <div style={{ position: "absolute", left, ...(place === "above" ? { bottom: H - edge } : { top }), width: w, background: bg, border: `4px solid ${COLORS.ink}`, borderRadius: 34,
          padding: name ? "24px 30px 16px" : "16px 30px", fontFamily: FONT, fontSize: fs, fontWeight: 700, lineHeight: 1.26, color: COLORS.ink, textAlign: "center", textWrap: "balance",
          boxShadow: "0 10px 24px rgba(23,32,51,.12)", boxSizing: "border-box" }}>
          {text}
          {name && (
            <div style={{ position: "absolute", left: 26, top: -24, padding: "4px 18px", borderRadius: 999, background: color, color: "#fff", fontSize: 30, fontWeight: 800, lineHeight: 1.25, border: "3px solid #fff" }}>
              {name}
            </div>
          )}
        </div>
        {/* che mép viền ở chân đuôi */}
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <path d={tail} fill={bg} stroke="none" transform={place === "left" ? "translate(-5 0)" : place === "above" ? "translate(0 -5)" : "translate(0 5)"} />
        </svg>
      </div>
    </div>
  );
};

/** Bong bóng cho câu đang nói của một diễn viên: trên đầu (mép dưới không thấp hơn y 350 → Đét nhỏ thì đuôi dài, khung không che mặt ai),
 *  hoặc dưới ô hình với bối cảnh online. */
export const LineBubble = ({ line, st, t, top = 100, showName = true, maxW, freezeK, minX = 40, maxX = W - 40 }) => {
  if (!line || !st) return null;
  const k = freezeK ?? Math.min(ramp(t, line.startMs - 40, line.startMs + 160), 1 - ramp(t, line.endMs + 120, line.endMs + 320));
  if (k <= 0) return null;
  const headTop = st.y - st.fig.h * st.s;
  const name = showName ? NAME_OF(line.who) : null;
  if (st.bubble === "below") {
    const edge = st.clip.y + st.clip.h + 34;
    return <Bubble text={line.sub} name={name} color={COLOR_OF(line.who)} tip={{ x: st.x, y: st.clip.y + st.clip.h - 6 }} place="below" edge={edge} maxH={890 - edge} maxW={maxW || 700} k={k} />;
  }
  const edge = Math.min(headTop - 34, 350);
  const isDet = st.isDet;
  return (
    <Bubble text={line.sub} name={name} color={COLOR_OF(line.who)} tip={{ x: st.x + (isDet ? -12 * st.s : 0), y: headTop + (isDet ? 24 * st.s : 4) }} place="above"
      edge={edge} maxH={Math.max(150, edge - top)} maxW={maxW || (isDet ? 600 : 820)} k={k} minX={isDet ? Math.max(minX, st.x - 520) : minX} maxX={maxX} />
  );
};
