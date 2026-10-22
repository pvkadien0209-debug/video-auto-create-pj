// anim.jsx — họ module HOẠT HÌNH 2D (#106): dàn nhân vật (Lan, Dũng, Thảo, Cô Hoa, Bác Bình; #110: Bé Bin, Bà Tư, Sam) + mascot Đét.
//   SCENE-01 Cảnh nhân vật · SCENE-02 Nhân vật nhắn tin · SCENE-03 Hai cách xử lý (chia đôi)
//   DLG-01 Khoan đã! Đét dừng cảnh · HOST-01 Đét dẫn + thẻ · HOST-02 Đét giơ thẻ Đúng/Sai · HOST-03 Đét mở chương · END-05 Đét kết – Vòng khép
// Lời đọc tiếng Anh + phụ đề tiếng Việt đến qua ctx.lines = [{ id, say, sub, who?, face?, pose?, react?, to?, stop?, phase?, startMs, endMs }].
// Câu có who = id diễn viên → miệng mấp máy, bong bóng hiện line.sub (module có ownSubtitles). Cách viết: ANIM-GUIDE.md.
import React, { useContext } from "react";
import { AbsoluteFill, Audio, Easing, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../core/theme.js";
import { Icon, Illus, IllusBadge, Kicker, fitSize } from "../core/ui.jsx";
import { readMs } from "../core/timing.js";
import { SetBack, getSet, spotOf, W, H, GROUND } from "../core/sets.jsx";
import { Actor, Bubble, LineBubble, actorState, fitBubble, normActors, NAME_OF, COLOR_OF,
  ACTOR_IDS, PERSON_FACES, DET_FACES, PERSON_POSES, DET_POSE_NAMES, SIDES } from "../cast/stage.jsx";
import { cameraAt, camPoint, camActive, camScale, camTransform, bgTransform, checkCamera } from "../core/camera.js";
import { CamBlurDefs, camBlurFilter, PovVignette, otsPlace } from "../core/edit-camera.js";
import { PanelCtx } from "../core/presenter.jsx";
import { DetG, DetBall, DET_POSES } from "../cast/mascot/Det.jsx";
import { DetRing } from "../cast/rig/ring.jsx";
import { VerdictCard } from "../cast/rig/Hand.jsx";
import { NIGHT, RING, INK } from "../cast/rig/geom.js";
import { mix } from "../cast/rig/poses.js";
import { eyeOpenAt, mouthAt, isTalking, ramp, noise1 } from "../cast/anim.js";

const ms = (frame, fps) => (frame / fps) * 1000;
const lastEnd = (c) => (c?.lines?.length ? c.lines.at(-1).endMs : 0);
const cl = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

/** Âm hiệu tuỳ chọn (kịch bản ghi audio.sfx.<key>): phát tại thời điểm atMs. */
const Sfx = ({ ctx, k, atMs, fps, volume = 0.6 }) => {
  const src = ctx?.sfx?.[k];
  if (!src || atMs == null) return null;
  return <Sequence from={Math.max(0, Math.round((atMs / 1000) * fps))} layout="none"><Audio src={staticFile(src)} volume={volume} /></Sequence>;
};

/** Nhãn nhỏ góc trên phải ("Tình huống", "Chuyện của Lan"). */
const Tag = ({ text, frame, icon = "clapperboard", tone = COLORS.ink2 }) =>
  text ? (
    <div style={{ position: "absolute", right: 48, top: 30, opacity: Math.min(1, frame / 8) }}>
      <Kicker accent={tone} style={{ whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(23,32,51,.18)" }}><Icon name={icon} size={34} color="#fff" /> {text}</Kicker>
    </div>
  ) : null;

/** Đồ vật thêm trên sàn (props): đặt ở khoảng giữa các chỗ đứng, nhún nhẹ. */
const PROP_X = [760, 1160, 380, 1540];
const FloorProps = ({ props = [], f }) =>
  props.slice(0, 4).map((p, i) => {
    const name = typeof p === "string" ? p : p.illus;
    const x = typeof p === "object" && p.x ? p.x : PROP_X[i];
    return (
      <div key={i} style={{ position: "absolute", left: x - 60, top: GROUND - 116 + Math.sin(f / 20 + i) * 2, width: 120, height: 120 }}>
        <div style={{ position: "absolute", left: 14, right: 14, bottom: -6, height: 16, borderRadius: "50%", background: "rgba(0,0,0,.12)" }} />
        <Illus name={name} size={120} />
      </div>
    );
  });

// =====================================================================
// SÂN KHẤU CHUNG: nền + đồ vật + diễn viên + bong bóng
// =====================================================================
const castStates = ({ actors, lines, t, f, set }) =>
  actors.map((a, i) => actorState({ a, i, actors, lines, t, set, f }));

/** Hệ số mờ của người nghe: tăng dần khi người khác bắt đầu nói. */
const dimOf = (st, lines, t, actors) => {
  let d = 0;
  for (const l of lines) {
    if (!l.who || l.who === st.id || !actors.some((a) => a.id === l.who)) continue;
    d = Math.max(d, ramp(t, l.startMs, l.startMs + 200) * (1 - ramp(t, l.endMs, l.endMs + 250)));
  }
  return st.isDet ? 0 : d;
};

const CastStage = ({ set, actors: actors0, lines, t, f, props, bubbles: bubbles0 = true, filterOf, bubbleMaxW, freezeLine, bounds, camera }) => {
  // #134: trong khung cảnh nhỏ (Đét đứng bên dẫn) → không vẽ Đét trong cảnh, không bong bóng (lời xuống phụ đề)
  const inPanel = useContext(PanelCtx);
  const actors = inPanel ? actors0.filter((a) => a.id !== "det") : actors0;
  const bubbles = bubbles0 && !inPanel;
  const S = getSet(set);
  const states = castStates({ actors, lines, t, f, set });
  // #126: máy quay (core/camera.js). Bong bóng thoại nằm NGOÀI lớp camera: chỉ dời vị trí, chữ không phóng to.
  // #144: focusOf trả thêm h (cao thế giới), dir (hướng nhìn: phía người kia), others (cho two-shot / qua vai); opt.talk = có bong bóng
  const people = states.filter((x) => !x.isDet);
  const cam = cameraAt(camera, t, lines, (id) => {
    const st = states.find((x) => x.id === id) || states.find((x) => !x.isDet);
    if (!st) return null;
    const others = people.filter((o) => o.id !== st.id).map((o) => ({ id: o.id, x: o.x, y: o.y - o.fig.h * o.s, h: o.fig.h * o.s }));
    const mx = others.length ? others.reduce((a, o) => a + o.x, 0) / others.length : st.x;
    return { id: st.id, x: st.x, y: st.y - st.fig.h * st.s, h: st.fig.h * st.s, dir: Math.abs(mx - st.x) < 40 ? 0 : Math.sign(mx - st.x), others }; // đỉnh đầu
  }, { talk: bubbles });
  const camOn = camActive(cam);
  const camK = camScale(cam);
  const viewSt = (st) => {
    if (!st || !camOn) return st;
    const p = camPoint(cam, st.x, st.y);
    // camera đã đặt đỉnh đầu ở HEAD_Y (≥ 330) nên bong bóng nằm trên đầu, không đè mặt
    // #131: người nói nằm ngoài khung cận (vd. Đét dẫn truyện khi camera cận Thảo) → kéo bong bóng vào trong khung
    const x = Math.max(300, Math.min(1620, p.x)), y = Math.max(st.fig.h * st.s * camK + 330, Math.min(1080, p.y));
    // #144: người nói ngoài khung (cận/đặc tả) → bóng vẫn nằm trọn trong khung, mép dưới ~300 (cũ: giữ nguyên)
    if (cam.v2 && p.x !== x) return { ...st, x, y, s: st.s * camK };
    return { ...st, x, y: p.x === x ? p.y : Math.min(p.y, 1080), s: st.s * camK };
  };
  // #144 qua vai (E-SHOT-10): người kia ở tiền cảnh, to, tối, mờ, sát mép khung
  const otsSt = cam.ots && states.find((s) => s.id === cam.ots.id);
  const talking = lines.find((l) => l.who && isTalking(l, t) && actors.some((a) => a.id === l.who));
  const active = talking ? actors.find((a) => a.id === talking.who)?.side : null;
  const names = Object.fromEntries(actors.filter((a) => a.id !== "det").map((a) => [a.side, NAME_OF(a.id)]));
  // thứ tự vẽ: người đứng sau (y nhỏ) trước, Đét luôn ở trước cùng
  const order = states.map((s, i) => i).sort((a, b) => (states[a].isDet - states[b].isDet) || (states[a].walking - states[b].walking) || states[a].y - states[b].y);
  const visLines = bubbles ? lines.filter((l) => l.who && l.sub && t >= l.startMs - 40 && t <= l.endMs + 320 && states.some((s) => s.id === l.who && s.op > 0)) : [];
  const back = (
    <>
      <SetBack set={set} f={f} active={active} names={names} />
      <FloorProps props={props} f={f} />
    </>
  );
  const world = (
    <>
      {cam.bg ? <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transformOrigin: "0 0", transform: bgTransform(cam.bg) }}>{back}</div> : back}
      {order.map((i) => <Actor key={states[i].id} st={states[i]} dim={dimOf(states[i], lines, t, actors)} filter={filterOf?.(states[i])} />)}
      {S.Top && <S.Top f={f} active={active} names={names} />}
    </>
  );
  return (
    <>
      {camOn ? (
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transformOrigin: "0 0", transform: camTransform(cam), filter: cam.blur ? camBlurFilter(cam.blur) : undefined }}>{world}</div>
      ) : world}
      {cam.blur ? <CamBlurDefs blur={cam.blur} /> : null}
      {otsSt && otsSt.op > 0 ? <Actor st={{ ...otsSt, ...otsPlace(cam, otsSt), talk: 0, clip: undefined }} filter="blur(12px) brightness(.16) saturate(.4)" /> : null}
      {cam.pov ? <PovVignette k={cam.pov} /> : null}
      {visLines.map((l) => (
        <LineBubble key={l.id} line={l} st={viewSt(states.find((s) => s.id === l.who))} t={t} maxW={bubbleMaxW} {...(bounds || {})}
          freezeK={freezeLine && freezeLine.id === l.id ? 1 : undefined} />
      ))}
    </>
  );
};

// ---------- kiểm dữ liệu dùng chung (tools/check-script.mjs gọi m.check) ----------
const checkCast = (d, lines = [], { maxPeople = 3, allowDet = true, needWho = false } = {}) => {
  // (bối cảnh có thật, id diễn viên có thật, who là nhân vật: tools/check-script.mjs đã kiểm chung — ở đây chỉ kiểm phần riêng của cảnh)
  const E = [];
  const actors = d.actors || (d.actor ? [d.actor] : []);
  const ids = new Set();
  const sides = new Set();
  for (const a of actors) {
    if (a.id === "det" && !allowDet) E.push(`Đét không đứng trong hàng diễn viên ở module này`);
    if (ids.has(a.id)) E.push(`diễn viên "${a.id}" bị lặp`);
    ids.add(a.id);
    if (a.side) {
      if (![...SIDES, "det"].includes(a.side)) E.push(`side "${a.side}" không hợp lệ (${SIDES.join(", ")})`);
      if (d.set === "online" && a.id !== "det" && !["left", "center", "right"].includes(a.side)) E.push(`bối cảnh online chỉ có side left, center, right`);
      if (sides.has(a.side)) E.push(`hai người cùng side "${a.side}" (NN-L2)`);
      sides.add(a.side);
    }
    if (a.face && !(a.id === "det" ? DET_FACES : PERSON_FACES).includes(a.face)) E.push(`nét mặt "${a.face}" không có`);
    if (a.pose && !(a.id === "det" ? DET_POSE_NAMES : PERSON_POSES).includes(a.pose)) E.push(`tư thế "${a.pose}" không có`);
    if (a.enter && !["walk", "pop", "none"].includes(a.enter)) E.push(`enter "${a.enter}" phải là walk | pop | none`);
    if (a.at && !lines.some((l) => l.id === a.at)) E.push(`at "${a.at}" không trùng id câu nào`);
  }
  const people = actors.filter((a) => a.id !== "det").length;
  if (people > maxPeople) E.push(`tối đa ${maxPeople} người + Đét trong một cảnh (NN-L1), đang có ${people}`);
  for (const l of lines) {
    if (l.who && ACTOR_IDS.includes(l.who) && l.who !== "det" && !ids.has(l.who)) E.push(`câu ${l.id}: who "${l.who}" không có trong actors của cảnh`);
    if (l.who && !l.sub) E.push(`câu ${l.id}: câu có who cần sub (chữ trong bong bóng)`);
    if (l.face && l.who && !(l.who === "det" ? DET_FACES : PERSON_FACES).includes(l.face)) E.push(`câu ${l.id}: nét mặt "${l.face}" không có`);
    if (l.pose && l.who && !(l.who === "det" ? DET_POSE_NAMES : PERSON_POSES).includes(l.pose)) E.push(`câu ${l.id}: tư thế "${l.pose}" không có`);
    if (l.sub && l.who && l.sub.split(/\s+/).length > 26) E.push(`câu ${l.id}: bong bóng dài ${l.sub.split(/\s+/).length} tiếng, tối đa 26 (NN-L5)`);
    for (const [k, v] of Object.entries(l.react || {})) {
      if (!ids.has(k)) E.push(`câu ${l.id}: react "${k}" không có trong actors`);
      const fc = typeof v === "string" ? v : v.face;
      if (fc && !(k === "det" ? DET_FACES : PERSON_FACES).includes(fc)) E.push(`câu ${l.id}: react nét mặt "${fc}" không có`);
    }
  }
  if (needWho && !lines.some((l) => l.who && l.who !== "det")) E.push(`cần ít nhất một câu có who là diễn viên`);
  return E;
};

// =====================================================================
// SCENE-01 Cảnh nhân vật
// data: { set, label?, actors:[{ id, side?, enter?: walk|pop|none, at?, face?, pose? }], props?: [illus] }
// =====================================================================
const Scene01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const actors = normActors(data.actors);
  return (
    <AbsoluteFill style={{ background: COLORS.paper, fontFamily: FONT, overflow: "hidden" }}>
      <CastStage set={data.set} actors={actors} lines={ctx.lines || []} t={t} f={frame} props={data.props} camera={data.camera} />
      <Tag text={data.label} frame={frame} />
    </AbsoluteFill>
  );
};

// =====================================================================
// SCENE-02 Nhân vật nhắn tin
// data: { set?, actor:{ id, side? }, contact:{ name, illus? }, messages:[{ from: me|them, text, at? }], label? }
// Tin hiện theo câu `at` (id câu), không có `at` thì lần lượt theo các câu. Câu được tin nhắn trỏ tới
// thì không hiện bong bóng (chữ đã nằm trong tin nhắn). who: "them" = giọng của người bên kia.
// =====================================================================
const s02Times = (d, lines) => {
  let k = 0;
  return d.messages.map((m, i) => {
    const l = m.at ? lines.find((x) => x.id === m.at) : null;
    if (l) return { at: l.startMs + (m.from === "me" ? 350 : 0), typeAt: l.startMs - (m.from === "me" ? 0 : 700), line: l };
    const auto = lines[k++];
    const at = auto ? auto.startMs + 250 : 600 + i * 1800;
    return { at, typeAt: at - 650, line: null };
  });
};

const ChatBubble = ({ m, showing, frame, accent }) => {
  const mine = m.from === "me";
  return (
    <div style={{ display: "flex", justifyContent: mine ? "flex-end" : "flex-start" }}>
      <div style={{
        maxWidth: "86%", padding: showing ? "14px 24px" : "10px 24px", borderRadius: 28, borderBottomRightRadius: mine ? 6 : 28, borderBottomLeftRadius: mine ? 28 : 6,
        background: mine ? accent : COLORS.surface, color: mine ? "#fff" : COLORS.ink, border: mine ? "none" : `2px solid ${COLORS.line}`,
        fontSize: 38, fontWeight: 600, lineHeight: 1.26, boxShadow: "0 6px 16px rgba(23,32,51,.08)",
      }}>
        {showing ? m.text : (
          <div style={{ display: "flex", gap: 10, height: 44, alignItems: "center" }}>
            {[0, 1, 2].map((i) => <div key={i} style={{ width: 13, height: 13, borderRadius: "50%", background: COLORS.muted, opacity: 0.45 + 0.55 * Math.max(0, Math.sin((frame - i * 4) / 3.2)) }} />)}
          </div>
        )}
      </div>
    </div>
  );
};

const Scene02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const lines = ctx.lines || [];
  const accent = ctx.accent || COLORS.pine;
  const set = data.set || "room";
  const actor = { side: "left", pose: "phone", scale: 0.86 / 0.74, ...data.actor };
  const times = s02Times(data, lines);
  const usedIds = new Set(times.filter((x) => x.line).map((x) => x.line.id));
  // câu nói gắn với tin nhắn: không vẽ bong bóng (đổi who để CastStage bỏ qua) nhưng vẫn mấp máy miệng
  const stageLines = lines.map((l) => (usedIds.has(l.id) && l.who === actor.id ? { ...l, sub: "" } : l));
  const contact = { name: "Liên hệ", illus: "bust-in-silhouette", ...data.contact };
  const phoneIn = spring({ frame: frame - 4, fps, config: { damping: 15, stiffness: 120 } });
  const items = [];
  data.messages.forEach((m, i) => {
    const { at, typeAt } = times[i];
    if (t < typeAt) return;
    const showing = t >= at;
    if (m.from === "me" && !showing) return;
    items.push({ m, i, showing, p: ramp(t, showing ? at : typeAt, (showing ? at : typeAt) + 260) });
  });
  const typingMe = data.messages.find((m, i) => m.from === "me" && times[i].line && t >= times[i].line.startMs && t < times[i].at);
  const draft = typingMe ? typingMe.text.slice(0, Math.floor(((t - times[data.messages.indexOf(typingMe)].line.startMs) / 350) * typingMe.text.length)) : "";
  const PX = 1160, PY = 128, PW = 620, PH = 756;
  return (
    <AbsoluteFill style={{ background: COLORS.paper, fontFamily: FONT, overflow: "hidden" }}>
      <CastStage set={set} actors={normActors([actor])} lines={stageLines} t={t} f={frame} bubbleMaxW={560} />
      <AbsoluteFill style={{ background: "linear-gradient(90deg, rgba(244,246,249,0) 40%, rgba(244,246,249,.55) 60%)" }} />
      {/* điện thoại lớn */}
      <div style={{ position: "absolute", left: PX, top: PY, width: PW, height: PH, transform: `translateX(${(1 - phoneIn) * 700}px) rotate(${(1 - phoneIn) * 6}deg)` }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 70, background: COLORS.ink, padding: 18, boxShadow: "0 30px 60px rgba(23,32,51,.28)" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: 54, background: COLORS.paper, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{ position: "absolute", top: 14, left: "50%", width: 140, height: 28, marginLeft: -70, borderRadius: 999, background: COLORS.ink, zIndex: 3 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "56px 26px 16px", background: COLORS.surface, borderBottom: `2px solid ${COLORS.line}` }}>
              <Icon name="chevron-left" size={42} color={accent} stroke={3} />
              <IllusBadge name={contact.illus} size={76} />
              <div style={{ fontSize: contact.name.length > 18 ? 30 : 36, fontWeight: 800, lineHeight: 1.12, flex: 1, minWidth: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{contact.name}</div>
              <Icon name="phone" size={38} color={accent} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 14, padding: "0 20px 14px", overflow: "hidden",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 80px)", maskImage: "linear-gradient(to bottom, transparent 0, #000 80px)" }}>
              {items.map((it) => (
                <div key={it.i} style={{ maxHeight: it.p * 600, opacity: Math.min(1, it.p * 1.5), transform: `translateY(${(1 - it.p) * 16}px)`, flex: "none" }}>
                  <ChatBubble m={it.m} showing={it.showing} frame={frame} accent={accent} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 20px 22px", background: COLORS.surface, borderTop: `2px solid ${COLORS.line}` }}>
              <div style={{ flex: 1, height: 62, borderRadius: 31, background: COLORS.paper, border: `2px solid ${COLORS.line}`, padding: "0 22px", fontSize: 34, fontWeight: 500,
                color: draft ? COLORS.ink : COLORS.muted, display: "flex", alignItems: "center", overflow: "hidden", whiteSpace: "nowrap" }}>
                {draft ? draft.slice(-22) : "Nhắn tin…"}
                {draft && <span style={{ width: 4, height: 38, background: accent, marginLeft: 4, flex: "none" }} />}
              </div>
              <div style={{ width: 62, height: 62, borderRadius: "50%", background: draft ? accent : COLORS.line, display: "grid", placeItems: "center" }}><Icon name="send" size={32} color="#fff" /></div>
            </div>
          </div>
        </div>
      </div>
      <Tag text={data.label} frame={frame} icon="message-circle" />
    </AbsoluteFill>
  );
};

// =====================================================================
// SCENE-03 Hai cách xử lý (chia đôi màn hình) — cùng một tình huống, bên trái Cách A, bên phải Cách B.
// data: { set, actors:[{id}], left:{ label, ok? }, right:{ label, ok? } }. Câu có phase: "a" thuộc bên trái, phase: "b" bên phải.
// =====================================================================
const S03 = { s: 0.72, cx: 960, top: 104 }; // mỗi nửa: sân khấu thu 0,72, khung nhìn giữa x 960 của sân khấu
const Scene03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const lines = ctx.lines || [];
  const people = normActors((data.actors || []).slice(0, 2).map((a, i) => ({ ...a, side: i ? "right" : "left" })));
  const half = (k) => {
    const L = lines.filter((l) => l.phase === k);
    const done = (L.at(-1)?.endMs ?? 0) + 300;
    const spec = data[k === "a" ? "left" : "right"] || {};
    return { k, L, done, spec, ok: spec.ok ?? k === "b", on: L.some((l) => isTalking(l, t)) };
  };
  const A = half("a"), B = half("b");
  const viewW = W / 2 / S03.s; // bề rộng sân khấu nhìn thấy trong một nửa
  const x0 = S03.cx - viewW / 2;
  const Panel = ({ h, x }) => {
    const other = h === A ? B : A;
    const dim = other.on ? 0.42 : 0;
    const res = t >= h.done;
    return (
      <div style={{ position: "absolute", left: x, top: 0, width: W / 2, height: H, overflow: "hidden", background: COLORS.paper }}>
        <div style={{ position: "absolute", left: 0, top: S03.top, width: W, height: H, transformOrigin: "0 0", transform: `scale(${S03.s}) translateX(${-x0}px)` }}>
          <CastStage set={data.set} actors={people} lines={h.L} t={t} f={frame} bubbleMaxW={640} bounds={{ minX: x0 + 24, maxX: x0 + viewW - 24 }} />
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, top: S03.top + H * S03.s - 90, height: 92, background: `linear-gradient(rgba(244,246,249,0), ${COLORS.paper})` }} />
        <div style={{ position: "absolute", inset: 0, background: COLORS.paper, opacity: dim }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: S03.top, background: COLORS.paper }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 22, display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 28px 10px 16px", borderRadius: 999, whiteSpace: "nowrap",
            background: res ? (h.ok ? COLORS.ok : COLORS.coral) : COLORS.ink2, color: "#fff", fontSize: 40, fontWeight: 800, transform: `scale(${res ? 1 + 0.08 * (1 - ramp(t, h.done, h.done + 250)) : 1})` }}>
            <Icon name={res ? (h.ok ? "circle-check" : "circle-x") : h.k === "a" ? "circle-dot" : "circle-dot"} size={40} color="#fff" stroke={2.6} /> {h.spec.label || (h.k === "a" ? "Cách A" : "Cách B")}
          </div>
        </div>
      </div>
    );
  };
  return (
    <AbsoluteFill style={{ background: COLORS.paper, fontFamily: FONT, overflow: "hidden" }}>
      <Panel h={A} x={0} />
      <Panel h={B} x={W / 2} />
      <div style={{ position: "absolute", left: W / 2 - 4, top: 0, width: 8, height: H, background: "#fff", boxShadow: "0 0 18px rgba(23,32,51,.25)" }} />
    </AbsoluteFill>
  );
};

// =====================================================================
// DLG-01 Khoan đã! Đét dừng cảnh
// data: { set, label?, actors, verdict:{ ok, label, why, rule? } }
// Câu chạy như SCENE-01 tới câu stop:true → đứng hình, nhạt màu, tem "Khoan đã!", Đét lăn vào → bung ra; câu who:"det" = lời Đét;
// thẻ verdict + Vòng Đét khoanh chỗ sai. Câu phase:"redo" → tua lại, diễn viên làm lại cách đúng, dấu tích xanh.
// =====================================================================
const FR = { x: 64, y: 104, s: 0.5 }; // khung hình đứng (freeze frame) sau khi thu nhỏ
const DET_STOP = { x: 1580, y: 886, s: 0.74 };

export const dlgPlan = (d, lines = []) => {
  let stopIdx = lines.findIndex((l) => l.stop);
  if (stopIdx < 0) {
    const firstDet = lines.findIndex((l) => l.who === "det");
    stopIdx = firstDet > 0 ? firstDet - 1 : Math.max(0, lines.length - 1);
  }
  const stopLine = lines[stopIdx];
  const freezeT = stopLine ? stopLine.endMs + 120 : 1500;
  const redoIdx = lines.findIndex((l, i) => i > stopIdx && l.phase === "redo");
  const redoT = redoIdx >= 0 ? Math.max(freezeT + 1600, lines[redoIdx].startMs - 1100) : null; // lineTimeline chừa 1,1 s cho đoạn tua lại
  const detAfter = lines.filter((l, i) => i > stopIdx && l.who === "det" && (redoIdx < 0 || i < redoIdx));
  const shrinkA = freezeT + 650, shrinkB = shrinkA + 520;
  const rollA = freezeT + 220, rollB = rollA + 560, popT = rollB + 220;
  const verdictT = Math.max(shrinkB + 100, detAfter[1]?.startMs ?? shrinkB + 300);
  const ringT = Math.max(shrinkB + 80, Math.min(verdictT - 350, shrinkB + 500));
  const RW = 950;
  const redoLines = redoIdx >= 0 ? lines.filter((l, i) => i >= redoIdx && l.phase === "redo" && l.who !== "det") : [];
  const lastRedo = redoLines.at(-1);
  const okT = lastRedo ? lastRedo.endMs + 250 : null;
  const end = Math.max(lastEnd({ lines }), okT ?? 0) + (okT ? 1500 : 900);
  return { stopIdx, stopLine, freezeT, redoIdx, redoT, RW, shrinkA, shrinkB, rollA, rollB, popT, verdictT, ringT, okT, lastRedo, end, detAfter };
};

/** Vòng Đét dạng elip quanh một khung chữ (khoanh chỗ sai). sweep 0..360, khe ở hướng 1 giờ. */
const RingOval = ({ cx, cy, rx, ry, sweep, w = 12, color = RING }) => {
  if (sweep <= 0.5) return null;
  return (
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" pathLength={360}
      strokeDasharray={sweep >= 359.5 ? "none" : `${sweep} ${360 - sweep + 0.01}`} strokeDashoffset={30} transform={`rotate(-4 ${cx} ${cy})`} />
  );
};

/** Tia "Đét!" — vạch vàng toả ra + chữ. t 0..1. */
const Burst = ({ x, y, t, size = 1, label = "Đét!" }) => {
  if (t <= 0 || t >= 1) return null;
  const r0 = 70 + 90 * t, r1 = r0 + 50 * (1 - t);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none", overflow: "visible" }}>
      <g transform={`translate(${x} ${y}) scale(${size})`} opacity={1 - t * t}>
        {Array.from({ length: 10 }, (_, i) => {
          const a = (i / 10) * Math.PI * 2 + 0.3;
          return <line key={i} x1={Math.cos(a) * r0} y1={Math.sin(a) * r0} x2={Math.cos(a) * r1} y2={Math.sin(a) * r1} stroke={RING} strokeWidth={12} strokeLinecap="round" />;
        })}
        {label && <text y={22 - 30 * t} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={76} fill="#fff" stroke={INK} strokeWidth={10} paintOrder="stroke">{label}</text>}
      </g>
    </svg>
  );
};

/** Đét ở dạng svg toàn khung (đứng hoặc quả bóng). */
const DetFigure = ({ x, y, s, ball, pose = {}, face = "neutral", talk = 0, eyeOpen = 1, rot = 0, sweep = 0, squash = 0, op = 1, ringSweep }) => (
  <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", opacity: op }}>
    <g transform={`translate(${x} ${y}) scale(${s * (1 + squash * 0.5)} ${s * (1 - squash)})`}>
      {ball ? <DetBall rot={rot} sweep={sweep} /> : <DetG pose={pose} face={face} talk={talk} eyeOpen={eyeOpen} ringSweep={ringSweep} />}
    </g>
  </svg>
);

/** Trạng thái Đét dẫn chuyện theo các câu who:"det" (tư thế/nét mặt từ câu, miệng mấp máy). */
const detSpeech = (lines, t, base = { pose: "idle", face: "happy" }) => {
  let pose = base.pose, prev = base.pose, at = -1e9, face = base.face;
  for (const l of lines) {
    if (l.who !== "det" || l.startMs > t) continue;
    if (l.pose && l.pose !== pose) (prev = pose), (pose = l.pose), (at = l.startMs);
    if (l.face) face = l.face;
  }
  const P = (n) => DET_POSES[{ stand: "idle", present: "point", explain: "point" }[n] || n] || DET_POSES.idle;
  const cur = lines.find((l) => l.who === "det" && isTalking(l, t));
  return { pose: mix(P(prev), P(pose), ramp(t, at, at + 240)), face, talk: cur ? mouthAt(cur, t) : 0, cur };
};

const Dlg01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const lines = ctx.lines || [];
  const P = dlgPlan(data, lines);
  const actors = normActors((data.actors || []).filter((a) => a.id !== "det"));
  const v = { ok: false, label: "", why: "", ...data.verdict };
  const freezeF = Math.round((P.freezeT / 1000) * fps);
  const phase = t < P.freezeT ? "play" : P.redoT == null || t < P.redoT ? "stop" : t < P.redoT + P.RW ? "rewind" : "redo";

  // thời gian của cảnh truyện: chạy → đứng → tua ngược → chạy phần làm lại
  const backTo = P.stopLine ? P.stopLine.startMs - 30 : P.freezeT;
  let tA = t, fA = frame, stageLines = lines.filter((l) => l.who !== "det");
  if (phase === "stop") (tA = P.freezeT), (fA = freezeF);
  if (phase === "rewind") {
    const k = ramp(t, P.redoT, P.redoT + P.RW * 0.85);
    tA = P.freezeT + (backTo - P.freezeT) * k;
    fA = Math.round((tA / 1000) * fps);
  }
  if (phase === "redo") stageLines = lines.filter((l, i) => l.who !== "det" && (i < P.stopIdx || l.phase === "redo"));

  // khung hình đứng: thu nhỏ rồi phóng lại
  const shrink = phase === "play" ? 0 : phase === "stop" ? ramp(t, P.shrinkA, P.shrinkB) : phase === "rewind" ? 1 - ramp(t, P.redoT + 100, P.redoT + P.RW - 80) : 0;
  const sc = 1 + (FR.s - 1) * shrink;
  const tx = FR.x * shrink, ty = FR.y * shrink;
  const gray = phase === "play" ? 0 : phase === "stop" ? ramp(t, P.freezeT, P.freezeT + 240) * 0.85 : phase === "rewind" ? 0.85 * (1 - ramp(t, P.redoT + P.RW * 0.6, P.redoT + P.RW)) : 0;
  const flash = Math.max(0, 1 - Math.abs(t - P.freezeT - 40) / 140) * (t >= P.freezeT ? 1 : 0);

  // vị trí bong bóng câu sai (để Vòng Đét khoanh)
  const stopSt = P.stopLine?.who ? actorState({ a: actors.find((a) => a.id === P.stopLine.who) || actors[0], i: Math.max(0, actors.findIndex((a) => a.id === P.stopLine.who)), actors, lines: stageLines, t: P.freezeT, set: data.set, f: freezeF }) : null;
  let ring = null;
  if (stopSt && P.stopLine.sub) {
    const headTop = stopSt.y - stopSt.fig.h * stopSt.s;
    const edge = headTop - 34;
    const { w, h } = fitBubble(P.stopLine.sub, Math.max(150, edge - 100), 820);
    const left = Math.max(40, Math.min(W - 40 - w, stopSt.x - w / 2));
    const realH = h + (P.stopLine.who ? 8 : 0);
    ring = { cx: left + w / 2, cy: edge - realH / 2 + 10, rx: w / 2 + 46, ry: realH / 2 + 46 };
  }
  const ringSweep = phase === "stop" ? interpolate(t, [P.ringT, P.ringT + 420], [0, 300], { ...cl, easing: Easing.out(Easing.cubic) }) : phase === "rewind" ? 300 * (1 - ramp(t, P.redoT, P.redoT + 300)) : 0;

  // Đét
  const detLines = lines.filter((l) => l.who === "det");
  const sp = detSpeech(detLines, t, { pose: "stop", face: "stern" });
  let det = null;
  if (t >= P.rollA) {
    if (t < P.popT) {
      const rx = interpolate(t, [P.rollA, P.rollB], [W + 160, DET_STOP.x], { ...cl, easing: Easing.out(Easing.cubic) });
      const sweep = interpolate(t, [P.rollB - 120, P.popT - 40], [0, 360], cl);
      const sq = interpolate(t, [P.popT - 120, P.popT], [0, 0.16], cl);
      det = <DetFigure ball x={rx} y={DET_STOP.y} s={DET_STOP.s} rot={((rx - W) / 104) * (180 / Math.PI)} sweep={sweep} squash={sq} />;
    } else {
      const pop = spring({ frame: frame - Math.round((P.popT / 1000) * fps), fps, config: { damping: 9, stiffness: 170 } });
      // sau khi tua: Đét lùi về góc (chỗ "det" của bối cảnh) để xem làm lại
      const home = spotOf(data.set, "det");
      const back = phase === "rewind" || phase === "redo" ? ramp(t, P.redoT, P.redoT + P.RW) : 0;
      const x = DET_STOP.x + (home.x - DET_STOP.x) * back, y = DET_STOP.y + (home.y - DET_STOP.y) * back, s = DET_STOP.s + (home.s - DET_STOP.s) * back;
      let pose = sp.pose, face = sp.face;
      const noOwn = (k) => !detLines.some((l) => l.startMs <= t && l[k]);
      if (t >= P.verdictT && noOwn("pose")) pose = mix(DET_POSES.stop, DET_POSES.pointL, ramp(t, P.verdictT, P.verdictT + 260));
      if (t >= P.verdictT && noOwn("face")) face = v.ok ? "happy" : "thinking";
      if (phase === "redo" || phase === "rewind") (pose = DET_POSES.idle), (face = "neutral");
      if (P.okT && t >= P.okT) (pose = mix(DET_POSES.idle, DET_POSES.thumb, ramp(t, P.okT, P.okT + 240))), (face = "happy");
      if (phase === "redo" && sp.cur) (pose = sp.pose), (face = sp.cur.face || "happy");
      const turn = phase === "redo" ? -0.35 : -0.12;
      det = (
        <DetFigure x={x} y={y} s={s} pose={{ ...pose, turn, squash: -0.2 * (1 - pop), tail: 6 * Math.sin(frame / 9), nod: sp.talk ? 3 * Math.sin(t / 170) : 0 }}
          face={face} talk={sp.talk} eyeOpen={eyeOpenAt(frame, "det", { start: 40 })} />
      );
    }
  }

  // bong bóng của Đét: khi đứng lớn → bên dưới khung đứng hình, đuôi chỉ sang Đét; khi ở góc → trên đầu, phía phải
  const detBubble = (() => {
    const l = sp.cur || detLines.find((x) => t >= x.startMs && t <= x.endMs + 320);
    if (!l || t < P.popT) return null;
    const k = Math.min(ramp(t, Math.max(l.startMs, P.popT) - 40, Math.max(l.startMs, P.popT) + 160), 1 - ramp(t, l.endMs + 120, l.endMs + 320));
    if (phase === "redo") {
      const home = spotOf(data.set, "det");
      // khung đặt cao (mép dưới ≤ y 350) như mọi bong bóng → không che mặt người đứng bên phải; đuôi dài xuống tới Đét
      const top = home.y - 392 * home.s;
      const edge = Math.min(top - 30, 350);
      return <Bubble text={l.sub} name="Đét" color={COLOR_OF("det")} tip={{ x: home.x - 12, y: top + 18 }} place="above" edge={edge} maxH={edge - 100} maxW={600} minX={home.x - 520} k={k} />;
    }
    if (phase !== "stop") return null;
    const top = FR.y + H * FR.s + 34;
    const tip = { x: DET_STOP.x - 64, y: DET_STOP.y - 232 * DET_STOP.s };
    return <Bubble text={l.sub} name="Đét" color={COLOR_OF("det")} tip={tip} place="left" edge={DET_STOP.x - 130} minX={FR.x} minY={top} maxY={896} maxH={896 - top} maxW={1100} k={k} />;
  })();

  // thẻ verdict
  const vIn = phase === "stop" ? spring({ frame: frame - Math.round((P.verdictT / 1000) * fps), fps, config: { damping: 14, stiffness: 130 } }) : phase === "rewind" ? 1 - ramp(t, P.redoT, P.redoT + 350) : 0;
  const vc = v.ok ? COLORS.ok : COLORS.coral;
  const whyAt = P.verdictT + 450, ruleAt = P.verdictT + 900;
  const VX = 1110, VW = W - VX - 56;

  // dấu tích xanh khi làm lại xong
  // dấu tích đặt trên đầu người đã làm sai rồi làm lại (người nói câu stop)
  const okWho = P.stopLine?.who || P.lastRedo?.who;
  const lastSt = P.okT && okWho ? actorState({ a: actors.find((a) => a.id === okWho) || actors[0], i: Math.max(0, actors.findIndex((a) => a.id === okWho)), actors, lines: stageLines, t, set: data.set, f: frame }) : null;
  const okK = P.okT ? spring({ frame: frame - Math.round((P.okT / 1000) * fps), fps, config: { damping: 10, stiffness: 150 } }) : 0;

  const rewinding = phase === "rewind";
  return (
    <AbsoluteFill style={{ background: COLORS.ink2, fontFamily: FONT, overflow: "hidden" }}>
      {/* nền khi khung đứng thu nhỏ */}
      <AbsoluteFill style={{ background: `radial-gradient(circle at 75% 30%, #34405c, ${NIGHT})`, opacity: shrink }} />
      <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transformOrigin: "0 0", transform: `translate(${tx}px, ${ty}px) scale(${sc})` }}>
      <div style={{ position: "absolute", inset: 0, boxShadow: shrink > 0 ? `0 0 0 ${18 * shrink / sc}px #fff, 0 ${30 / sc}px ${60 / sc}px rgba(0,0,0,.35)` : "none", borderRadius: 12 / sc * shrink, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, filter: gray > 0 ? `grayscale(${gray}) contrast(${1 - 0.1 * gray}) brightness(${1 + 0.04 * gray})` : undefined,
          transform: rewinding ? `translateX(${noise1("rw", frame * 1.7) * 10}px) skewX(${noise1("rws", frame) * 2}deg)` : undefined }}>
          <CastStage set={data.set} actors={actors} lines={stageLines} t={tA} f={fA} freezeLine={phase === "stop" ? P.stopLine : null} />
        </div>
        {rewinding && (
          <AbsoluteFill style={{ background: "repeating-linear-gradient(0deg, rgba(255,255,255,.10) 0 4px, transparent 4px 18px)", backgroundPosition: `0 ${(frame * 37) % 180}px` }} />
        )}
      </div>
        {ring && (
          <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
            <RingOval {...ring} sweep={ringSweep} w={14} />
          </svg>
        )}
        {/* nhãn tạm dừng ở góc dưới trái khung đứng */}
        {phase === "stop" && (
          <div style={{ position: "absolute", left: 40, bottom: 40, opacity: ramp(t, P.shrinkB - 80, P.shrinkB + 120), transform: `scale(${1 / sc})`, transformOrigin: "0 100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 24px 10px 16px", borderRadius: 16, background: NIGHT, color: RING, fontSize: 34, fontWeight: 800 }}>
              <svg width={34} height={34}><rect x={5} y={4} width={9} height={26} rx={3} fill={RING} /><rect x={20} y={4} width={9} height={26} rx={3} fill={RING} /></svg> Khoan đã!
            </div>
          </div>
        )}
      </div>

      {/* nhãn góc trên */}
      {phase === "play" && <Tag text={data.label} frame={frame} />}

      {/* tem "Khoan đã!" đập xuống lúc đứng hình */}
      {t >= P.freezeT && t < P.shrinkB + 200 && (() => {
        const s = spring({ frame: frame - freezeF, fps, config: { damping: 11, stiffness: 260, mass: 0.7 } });
        const out = ramp(t, P.shrinkA, P.shrinkA + 300);
        return (
          <div style={{ position: "absolute", left: 0, right: 0, top: 560, display: "grid", placeItems: "center", opacity: Math.min(1, s * 3) * (1 - out) }}>
            <div style={{ transform: `scale(${2.4 - 1.4 * s}) rotate(-6deg)`, display: "flex", alignItems: "center", gap: 22, padding: "18px 48px", borderRadius: 30, background: NIGHT,
              color: RING, fontSize: 104, fontWeight: 800, border: `8px solid ${RING}`, boxShadow: "0 20px 50px rgba(0,0,0,.35)" }}>
              <svg width={84} height={84}><rect x={12} y={8} width={22} height={68} rx={6} fill={RING} /><rect x={50} y={8} width={22} height={68} rx={6} fill={RING} /></svg>
              Khoan đã!
            </div>
          </div>
        );
      })()}

      {/* thẻ nhận xét */}
      {vIn > 0.01 && (
        <div style={{ position: "absolute", left: VX, top: 96, width: VW, transform: `translateX(${(1 - vIn) * 900}px)`, opacity: Math.min(1, vIn * 1.4) }}>
          <div style={{ background: COLORS.surface, borderRadius: 30, padding: "22px 30px 24px 42px", boxShadow: "0 24px 50px rgba(0,0,0,.30)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 16, background: vc }} />
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "8px 24px 8px 14px", borderRadius: 999, background: vc, color: "#fff", fontSize: 36, fontWeight: 800 }}>
              <Icon name={v.ok ? "circle-check" : "circle-x"} size={38} color="#fff" stroke={2.6} /> {v.ok ? "Nên" : "Không nên"}
            </div>
            <div style={{ fontSize: fitSize(v.label, 50, 38, 26), fontWeight: 800, lineHeight: 1.18, marginTop: 16, color: COLORS.ink, textWrap: "balance" }}>{v.label}</div>
            <div style={{ fontSize: fitSize(v.why, 38, 31, 60), fontWeight: 600, lineHeight: 1.3, marginTop: 14, color: COLORS.ink2, opacity: ramp(t, whyAt, whyAt + 250), textWrap: "pretty" }}>{v.why}</div>
            {v.rule && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginTop: 18, padding: "10px 16px", borderRadius: 16, background: COLORS.paper, border: `2px solid ${COLORS.line}`,
                fontSize: 28, fontWeight: 600, color: COLORS.muted, lineHeight: 1.22, opacity: ramp(t, ruleAt, ruleAt + 250) }}>
                <div style={{ flex: "none", marginTop: 2 }}><Icon name="scale" size={34} color={COLORS.muted} /></div><span>{v.rule}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {det}
      {t >= P.popT - 60 && <Burst x={DET_STOP.x} y={DET_STOP.y - 330} t={ramp(t, P.popT - 60, P.popT + 480)} size={0.9} />}
      {detBubble}

      {/* tua lại */}
      {rewinding && (
        <div style={{ position: "absolute", left: 0, right: 0, top: 120, display: "grid", placeItems: "center", opacity: ramp(t, P.redoT, P.redoT + 120) * (1 - ramp(t, P.redoT + P.RW - 150, P.redoT + P.RW)) }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 40px", borderRadius: 999, background: COLORS.ink, color: "#fff", fontSize: 60, fontWeight: 800, boxShadow: "0 16px 40px rgba(0,0,0,.3)" }}>
            <div style={{ transform: `translateX(${-((frame * 4) % 20)}px)` }}><Icon name="rewind" size={64} color="#fff" stroke={2.6} /></div> Tua lại
          </div>
        </div>
      )}

      {/* làm lại xong: dấu tích xanh trên đầu người làm đúng */}
      {okK > 0.01 && lastSt && (
        <div style={{ position: "absolute", left: lastSt.x - 90, top: lastSt.y - lastSt.fig.h * lastSt.s - 230, width: 180, display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          transform: `scale(${0.4 + 0.6 * okK})`, opacity: Math.min(1, okK * 2), transformOrigin: "50% 100%" }}>
          <div style={{ width: 150, height: 150, borderRadius: "50%", background: COLORS.ok, display: "grid", placeItems: "center", border: "8px solid #fff", boxShadow: "0 14px 30px rgba(46,139,87,.35)" }}>
            <Icon name="check" size={100} color="#fff" stroke={3.4} />
          </div>
          <div style={{ padding: "4px 22px", borderRadius: 999, background: "#fff", color: COLORS.ok, fontSize: 36, fontWeight: 800, whiteSpace: "nowrap", border: `3px solid ${COLORS.ok}` }}>Nên làm vậy</div>
        </div>
      )}

      <AbsoluteFill style={{ background: "#fff", opacity: flash * 0.75, pointerEvents: "none" }} />
      <Sfx ctx={ctx} k="stop" atMs={P.freezeT} fps={fps} />
      <Sfx ctx={ctx} k="det" atMs={P.popT - 60} fps={fps} />
      <Sfx ctx={ctx} k="rewind" atMs={P.redoT} fps={fps} />
      <Sfx ctx={ctx} k="ok" atMs={P.okT} fps={fps} />
    </AbsoluteFill>
  );
};

// =====================================================================
// Thẻ bên cạnh Đét (HOST-01/02) — nền giấy, Đét đứng bên trái trên sàn nhẹ
// =====================================================================
const HostStage = ({ children, frame, bg = COLORS.paper, accent = COLORS.pine }) => (
  <AbsoluteFill style={{ background: bg, fontFamily: FONT, color: COLORS.ink, overflow: "hidden" }}>
    <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", right: -260, top: -320, background: accent, opacity: 0.06,
      transform: `translate(${Math.sin(frame / 38) * 14}px, ${Math.sin(frame / 48) * 10}px)` }} />
    <div style={{ position: "absolute", left: 90, width: 560, top: GROUND - 30, height: 60, borderRadius: "50%", background: accent, opacity: 0.08 }} />
    {children}
  </AbsoluteFill>
);

/** Đét dẫn: vào bằng cách lăn rồi bung ra (0,7 s), sau đó đứng nói theo câu who:"det". */
const HostDet = ({ frame, fps, t, lines, x = 360, y = GROUND, s = 1.3, base = { pose: "idle", face: "happy" }, ringSweep, override }) => {
  const POP = 22;
  if (frame < POP) {
    const p = interpolate(frame, [0, POP - 6], [0, 1], { ...cl, easing: Easing.out(Easing.cubic) });
    const rx = -200 + (x + 200) * p;
    return <DetFigure ball x={rx} y={y} s={s * 0.9} rot={rx / 1.8} sweep={interpolate(frame, [POP - 10, POP - 2], [0, 360], cl)} squash={interpolate(frame, [POP - 5, POP], [0, 0.15], cl)} />;
  }
  const pop = spring({ frame: frame - POP, fps, config: { damping: 9, stiffness: 170 } });
  const sp = detSpeech(lines, t, base);
  const o = override?.(sp) || {};
  return (
    <DetFigure x={x} y={y} s={s} pose={{ ...(o.pose || sp.pose), turn: 0.18, squash: -0.2 * (1 - pop), tail: 6 * Math.sin(frame / 9), nod: sp.talk ? 3 * Math.sin(t / 170) : 0 }}
      face={o.face || sp.face} talk={sp.talk} eyeOpen={eyeOpenAt(frame, "det-host", { start: 30 })} ringSweep={ringSweep} />
  );
};

// =====================================================================
// HOST-01 Đét dẫn + thẻ
// data: { title?, items?: [..], text?, pose?: point|wave|think|thumb|present, illus? }
// =====================================================================
const host01Times = (d, lines, end) => {
  const n = (d.items || []).length;
  if (!n) return [];
  if (lines.length === n + 1) return lines.slice(1).map((l) => l.startMs);
  if (lines.length === n) return lines.map((l) => l.startMs);
  const a = 700, b = Math.max(a + n * 600, end * 0.7);
  return Array.from({ length: n }, (_, i) => a + ((b - a) * i) / n);
};
const Host01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const lines = ctx.lines || [];
  const items = data.items || [];
  const times = host01Times(data, lines, lastEnd(ctx) || 4000);
  const base = { pose: { present: "point", think: "think", wave: "wave", thumb: "thumb", point: "point" }[data.pose] || "point", face: "happy" };
  const cardIn = spring({ frame: frame - 8, fps, config: { damping: 15, stiffness: 120 } });
  const n = items.length;
  const itemFs = n > 4 ? 42 : 48;
  return (
    <HostStage frame={frame} accent={ctx.accent}>
      <HostDet frame={frame} fps={fps} t={t} lines={lines} base={base} />
      <div style={{ position: "absolute", left: 740, right: 90, top: 120, bottom: 200, display: "flex", alignItems: "center", transform: `translateX(${(1 - cardIn) * 500}px)`, opacity: Math.min(1, cardIn * 1.4) }}>
        <div style={{ width: "100%", background: COLORS.surface, borderRadius: 36, padding: "40px 52px", border: `2px solid ${COLORS.line}`, boxShadow: "0 20px 44px rgba(23,32,51,.10)", position: "relative" }}>
          {/* đuôi thẻ chỉ về Đét */}
          <div style={{ position: "absolute", left: -26, top: "52%", width: 52, height: 52, background: COLORS.surface, borderLeft: `2px solid ${COLORS.line}`, borderBottom: `2px solid ${COLORS.line}`, transform: "rotate(45deg)" }} />
          {(data.title || data.illus) && (
            <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: n || data.text ? 26 : 0 }}>
              {data.illus && <IllusBadge name={data.illus} size={110} />}
              {data.title && <div style={{ fontSize: fitSize(data.title, 60, 44, 22), fontWeight: 800, lineHeight: 1.15, textWrap: "balance" }}>{data.title}</div>}
            </div>
          )}
          {n > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: n > 4 ? 16 : 22 }}>
              {items.map((it, i) => {
                const p = ramp(t, times[i], times[i] + 260);
                const txt = typeof it === "string" ? it : it.text;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 22, opacity: 0.12 + 0.88 * p, transform: `translateX(${(1 - p) * 30}px)` }}>
                    <div style={{ flex: "none", width: 64, height: 64, borderRadius: "50%", background: p > 0.5 ? ctx.accent || COLORS.pine : COLORS.line, color: "#fff", display: "grid", placeItems: "center", fontSize: 36, fontWeight: 800 }}>{i + 1}</div>
                    <div style={{ fontSize: itemFs, fontWeight: 700, lineHeight: 1.2 }}>{txt}</div>
                  </div>
                );
              })}
            </div>
          )}
          {data.text && (
            <div style={{ fontSize: fitSize(data.text, 64, 46, 34), fontWeight: 800, lineHeight: 1.2, textWrap: "balance", opacity: ramp(t, 500, 800) }}>
              <span style={{ backgroundImage: `linear-gradient(${COLORS.marker}, ${COLORS.marker})`, backgroundRepeat: "no-repeat", backgroundSize: `${ramp(t, 900, 1500) * 100}% 0.42em`, backgroundPosition: "0 88%",
                WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>{data.text}</span>
            </div>
          )}
        </div>
      </div>
    </HostStage>
  );
};

// =====================================================================
// HOST-02 Đét giơ thẻ Đúng/Sai
// data: { statement, truth: boolean, why, kicker? }. Thẻ lật ở câu thứ 2 (nếu có), không thì sau khi đọc xong câu nhận định + 1,5 s.
// =====================================================================
const host02Plan = (d, c) => {
  const lines = c?.lines || [];
  const reveal = lines[1]?.startMs ?? 500 + readMs(d.statement, c) + 1500;
  return { reveal, end: reveal + readMs(d.why, { ...c, fresh: false }) + 900 };
};
const QCard = ({ w = 196, h = 104 }) => (
  <g>
    <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={16} fill="#fff" stroke={COLORS.ink2} strokeWidth={7} />
    <text x={0} y={22} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={66} fill={COLORS.ink2}>?</text>
  </g>
);
const Host02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const P = host02Plan(data, ctx);
  const ok = !!data.truth;
  const flip = t < P.reveal ? 1 : t < P.reveal + 170 ? 1 - ramp(t, P.reveal, P.reveal + 170) : ramp(t, P.reveal + 170, P.reveal + 340);
  const card = t < P.reveal + 170 ? <g transform={`scale(${Math.max(0.02, flip)} 1)`}><QCard /></g> : <VerdictCard ok={ok} flip={flip} />;
  const shake = t > 900 && t < P.reveal ? 0.12 * Math.sin(t / 160) : 0;
  const override = (sp) => {
    const face = t < P.reveal ? "thinking" : ok ? "happy" : "stern";
    const pose = { ...DET_POSES.card, R: { ...DET_POSES.card.R, card } };
    return { pose: { ...pose, turn: shake }, face: sp.cur?.face || face };
  };
  const sIn = spring({ frame: frame - 6, fps, config: { damping: 15, stiffness: 120 } });
  const rv = spring({ frame: frame - Math.round((P.reveal / 1000) * fps), fps, config: { damping: 11, stiffness: 160 } });
  const c = ok ? COLORS.ok : COLORS.coral;
  return (
    <HostStage frame={frame} accent={ctx.accent}>
      <HostDet frame={frame} fps={fps} t={t} lines={ctx.lines || []} x={300} override={override} />
      <div style={{ position: "absolute", left: 720, right: 90, top: 110, bottom: 210, display: "flex", flexDirection: "column", justifyContent: "center", gap: 30 }}>
        {data.kicker !== false && (
          <div style={{ opacity: sIn }}><Kicker accent={COLORS.ink2}><Icon name="circle-help" size={36} color="#fff" /> {data.kicker || "Đúng hay sai?"}</Kicker></div>
        )}
        <div style={{ background: COLORS.surface, borderRadius: 34, padding: "34px 44px", border: `3px solid ${t >= P.reveal ? c : COLORS.line}`, boxShadow: "0 18px 40px rgba(23,32,51,.08)",
          transform: `translateY(${(1 - sIn) * 40}px)`, opacity: sIn, position: "relative" }}>
          <div style={{ fontSize: fitSize(data.statement, 62, 46, 30), fontWeight: 800, lineHeight: 1.2, textWrap: "balance" }}>“{data.statement}”</div>
          {t >= P.reveal && (
            <div style={{ position: "absolute", right: -24, top: -34, transform: `scale(${rv}) rotate(-8deg)`, padding: "10px 30px", borderRadius: 18, background: c, color: "#fff", fontSize: 52, fontWeight: 800, boxShadow: "0 10px 24px rgba(0,0,0,.18)" }}>
              {ok ? "ĐÚNG" : "SAI"}
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: 22, alignItems: "flex-start", opacity: ramp(t, P.reveal + 300, P.reveal + 600), transform: `translateY(${(1 - ramp(t, P.reveal + 300, P.reveal + 600)) * 24}px)` }}>
          <div style={{ flex: "none", width: 14, alignSelf: "stretch", borderRadius: 7, background: c }} />
          <div style={{ fontSize: fitSize(data.why, 50, 40, 60), fontWeight: 600, lineHeight: 1.3, color: COLORS.ink2, textWrap: "pretty" }}>{data.why}</div>
        </div>
      </div>
    </HostStage>
  );
};

// =====================================================================
// HOST-03 Đét mở chương — Vòng Đét lấp dần theo n/of (đủ vòng = phần cuối)
// data: { n, of, title }
// =====================================================================
const Host03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const n = Number(data.n) || 1, of = Math.max(n, Number(data.of) || n);
  const sweep = interpolate(t, [500, 1300], [(360 * (n - 1)) / of, (360 * n) / of], { ...cl, easing: Easing.inOut(Easing.cubic) });
  const closed = n === of;
  const tIn = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 120 } });
  const numIn = spring({ frame: frame - 4, fps, config: { damping: 10, stiffness: 160 } });
  const CX = 860, CY = 470, R = 200;
  return (
    <AbsoluteFill style={{ background: COLORS.ink, fontFamily: FONT, color: "#fff", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 120, width: 520, top: GROUND - 28, height: 56, borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0 }}>
        <DetRing cx={CX} cy={CY} r={R} w={34} sweep={360} color="rgba(255,255,255,.10)" />
        <DetRing cx={CX} cy={CY} r={R} w={34} sweep={sweep} />
        {Array.from({ length: of }, (_, i) => {
          const a = 60 + (360 * (i + 1)) / of;
          const rad = (a * Math.PI) / 180;
          return i < of - 1 ? <circle key={i} cx={CX + R * Math.sin(rad)} cy={CY - R * Math.cos(rad)} r={7} fill={COLORS.ink} /> : null;
        })}
        <text x={CX} y={CY + 64} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={190} fill="#fff" opacity={Math.min(1, numIn * 1.5)}
          transform={`translate(${CX} ${CY}) scale(${0.6 + 0.4 * numIn}) translate(${-CX} ${-CY})`}>{n}</text>
      </svg>
      {closed && <Burst x={CX} y={CY} t={ramp(t, 1250, 1900)} size={1.7} label={null} />}
      <HostDet frame={frame} fps={fps} t={t} lines={ctx.lines || []} x={330} s={1.0} base={{ pose: "wave", face: "happy" }}
        override={(sp) => (t > 1400 && !sp.cur?.pose ? { pose: mix(DET_POSES.wave, DET_POSES.point, ramp(t, 1400, 1650)) } : null)} />
      <div style={{ position: "absolute", left: 1140, right: 90, top: 250, display: "flex", flexDirection: "column", gap: 26, transform: `translateX(${(1 - tIn) * 160}px)`, opacity: Math.min(1, tIn * 1.4) }}>
        {/* #109 §9.4: mục lục thu nhỏ — chương đang học sáng lên, chương trước có dấu ✓ */}
        {of > 1 && of <= 7 && (
          <div style={{ display: "flex", gap: 12, marginBottom: 6 }}>
            {Array.from({ length: of }, (_, i) => {
              const k = i + 1, cur = k === n, done = k < n;
              const lit = cur ? spring({ frame: frame - 14, fps, config: { damping: 10, stiffness: 150 } }) : 0;
              return (
                <div key={i} style={{ width: 84, height: 64, borderRadius: 16, display: "grid", placeItems: "center", fontSize: 40, fontWeight: 800,
                  background: cur ? COLORS.marker : "transparent", color: cur ? COLORS.ink : done ? "rgba(255,255,255,.55)" : "rgba(255,255,255,.35)",
                  border: `3px solid ${cur ? COLORS.marker : done ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.18)"}`, transform: `scale(${1 + 0.12 * lit})` }}>
                  {done ? <Icon name="check" size={38} color="rgba(255,255,255,.6)" /> : String(k).padStart(2, "0")}
                </div>
              );
            })}
          </div>
        )}
        <div style={{ fontSize: 46, fontWeight: 700, color: COLORS.marker, letterSpacing: "0.04em" }}>PHẦN {n} / {of}</div>
        <div style={{ fontSize: fitSize(data.title, 84, 54, 18), fontWeight: 800, lineHeight: 1.12, textWrap: "balance" }}>{data.title}</div>
      </div>
    </AbsoluteFill>
  );
};

// =====================================================================
// END-05 Đét kết – Vòng khép: Đét nói câu cuối → cuộn tròn → Vòng Đét khép "Đét!" → mời làm 40 câu hỏi
// data: { text, sub? }
// =====================================================================
const end05Plan = (c) => {
  const talkEnd = Math.max(1800, lastEnd(c));
  return { curl: talkEnd + 200, close: talkEnd + 700, end: talkEnd + 2600 };
};
const End05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = ms(frame, fps);
  const P = end05Plan(ctx);
  const DX = 560, DY = 770;
  const tIn = spring({ frame: frame - 8, fps, config: { damping: 14, stiffness: 120 } });
  const curl = ramp(t, P.curl, P.curl + 260);
  const ball = t >= P.curl + 260;
  const sweep = interpolate(t, [P.curl + 300, P.close], [0, 360], { ...cl, easing: Easing.in(Easing.quad) });
  const bounce = ball ? spring({ frame: frame - Math.round(((P.close) / 1000) * fps), fps, config: { damping: 8, stiffness: 200 } }) : 0;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(circle at 30% 60%, #2a3550, ${NIGHT} 70%)`, fontFamily: FONT, color: "#fff", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: DX - 260, width: 520, top: DY - 26, height: 52, borderRadius: "50%", background: "#fff", opacity: 0.06 }} />
      {!ball ? (
        <HostDet frame={frame} fps={fps} t={t} lines={ctx.lines || []} x={DX} y={DY} s={1.15} base={{ pose: "wave", face: "happy" }}
          override={(sp) => (curl > 0 ? { pose: { ...mix(sp.pose, DET_POSES.idle, curl), squash: 0.22 * curl }, face: "happy" } : null)} />
      ) : (
        <DetFigure ball x={DX} y={DY} s={1.15 * (1 + 0.06 * Math.sin(bounce * Math.PI))} rot={(t - P.curl) / 6} sweep={sweep} />
      )}
      <Burst x={DX} y={DY - 120 * 1.15} t={ramp(t, P.close - 30, P.close + 600)} size={1.6} />
      <div style={{ position: "absolute", left: 1000, right: 100, top: 250, display: "flex", flexDirection: "column", gap: 30, transform: `translateX(${(1 - tIn) * 160}px)`, opacity: Math.min(1, tIn * 1.4) }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 40, fontWeight: 700, color: COLORS.marker }}>
          <svg width={52} height={52} viewBox="-26 -26 52 52"><DetRing r={17} w={7} sweep={t >= P.close ? 360 : 300} /></svg> Đến lượt bạn
        </div>
        <div style={{ fontSize: fitSize(data.text, 84, 56, 26), fontWeight: 800, lineHeight: 1.15, textWrap: "balance" }}>{data.text}</div>
        {data.sub && <div style={{ fontSize: 44, fontWeight: 600, color: "#aab4c8", lineHeight: 1.3, textWrap: "balance" }}>{data.sub}</div>}
        <div style={{ marginTop: 10, display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 14, padding: "14px 34px", borderRadius: 999, background: COLORS.marker, color: COLORS.ink,
          fontSize: 44, fontWeight: 800, transform: `scale(${1 + 0.04 * Math.sin(frame / 8) * ramp(t, P.close, P.close + 300)})` }}>
          <Icon name="arrow-down" size={44} color={COLORS.ink} stroke={3} /> Làm ngay bên dưới
        </div>
      </div>
      <div style={{ position: "absolute", left: DX - 200, width: 400, top: DY + 40, textAlign: "center", fontSize: 56, fontWeight: 800, opacity: ramp(t, P.close + 100, P.close + 400) }}>
        Det<span style={{ color: RING }}>Pro</span>
      </div>
    </AbsoluteFill>
  );
};

// ---------- danh mục ----------
const castEstimate = (d, c, extra = 600) => Math.max(2500, lastEnd(c) + extra);

export const ANIM = {
  "SCENE-01": { name: "Cảnh nhân vật", family: "SCENE", Component: Scene01, ownSubtitles: true,
    limits: { set: [1, 1], actors: [1, 4], label: [1, 6], props: [0, 4] },
    check: (d, lines) => checkCast(d, lines, { needWho: true }).concat(checkCamera(d.camera, lines, (d.actors || []).map((a) => a.id))),
    estimate: (d, c) => castEstimate(d, c, 700) },
  "SCENE-02": { name: "Nhân vật nhắn tin", family: "SCENE", Component: Scene02, ownSubtitles: true,
    limits: { set: [1, 1], messages: [1, 6], text: [1, 30], name: [1, 5], label: [1, 6] },
    check: (d, lines) => {
      const E = checkCast({ ...d, actors: [d.actor || {}] }, lines, { maxPeople: 1, allowDet: false });
      for (const m of d.messages || []) {
        if (!["me", "them"].includes(m.from)) E.push(`tin nhắn: from phải là me | them`);
        if (m.at && !lines.some((l) => l.id === m.at)) E.push(`tin nhắn: at "${m.at}" không trùng id câu nào`);
      }
      return E;
    },
    estimate: (d, c) => Math.max(castEstimate(d, c, 900), ...s02Times(d, c.lines || []).map((x) => x.at + 1800)) },
  "SCENE-03": { name: "Hai cách xử lý (chia đôi)", family: "SCENE", Component: Scene03, ownSubtitles: true,
    limits: { set: [1, 1], actors: [1, 2], "left.label": [1, 5], "right.label": [1, 5] },
    check: (d, lines) => {
      const E = checkCast(d, lines, { maxPeople: 2, allowDet: false });
      for (const l of lines) if (l.who && !["a", "b"].includes(l.phase)) E.push(`câu ${l.id}: SCENE-03 cần phase "a" (trái) hoặc "b" (phải)`);
      return E;
    },
    estimate: (d, c) => castEstimate(d, c, 1200) },
  "DLG-01": { name: "Khoan đã! Đét dừng cảnh", family: "DLG", Component: Dlg01, ownSubtitles: true,
    limits: { set: [1, 1], actors: [1, 3], label: [1, 6], "verdict.label": [2, 12], "verdict.why": [4, 26], "verdict.rule": [0, 16] },
    check: (d, lines) => {
      const E = checkCast(d, lines, { allowDet: false, needWho: true });
      const P = dlgPlan(d, lines);
      if (!lines.some((l) => l.stop)) E.push(`DLG-01 cần một câu stop: true (câu sai, cảnh đứng hình ngay sau câu đó)`);
      const si = lines.findIndex((l) => l.stop);
      if (si >= 0 && !lines.some((l, i) => i > si && l.who === "det")) E.push(`DLG-01: sau câu stop cần ít nhất một câu who: "det" (lời Đét)`);
      if (si >= 0 && lines.some((l, i) => i < si && l.who === "det")) E.push(`DLG-01: Đét chỉ nói sau câu stop`);
      if (d.verdict && typeof d.verdict.ok !== "boolean") E.push(`verdict.ok phải là true hoặc false`);
      if (d.verdict?.ok === false && P.redoIdx < 0) E.push(`verdict "không nên" nên có phần làm lại: các câu phase: "redo" (cảnh báo nhẹ)`);
      return E;
    },
    estimate: (d, c) => Math.max(4000, dlgPlan(d, c.lines || []).end) },
  "HOST-01": { name: "Đét dẫn + thẻ", family: "HOST", Component: Host01,
    limits: { title: [1, 10], items: [2, 5], text: [3, 24] },
    check: (d, lines) => (d.pose && !["point", "wave", "think", "thumb", "present"].includes(d.pose) ? [`pose "${d.pose}" phải là point | wave | think | thumb | present`] : [])
      .concat(!d.items && !d.text ? ["HOST-01 cần items hoặc text"] : []).concat(lines.filter((l) => l.who && l.who !== "det").map((l) => `câu ${l.id}: HOST-01 chỉ có Đét nói (who: "det")`)),
    estimate: (d, c) => Math.max(3000, 900 + (d.items || []).reduce((s, x) => s + readMs(typeof x === "string" ? x : x.text, { ...c, fresh: false }), 0) + (d.text ? readMs(d.text, c) : 0), lastEnd(c) + 600) },
  "HOST-02": { name: "Đét giơ thẻ Đúng/Sai", family: "HOST", Component: Host02,
    limits: { statement: [4, 20], why: [3, 26] },
    check: (d) => (typeof d.truth !== "boolean" ? ["truth phải là true hoặc false"] : []),
    estimate: (d, c) => Math.max(host02Plan(d, c).end, lastEnd(c) + 600) },
  "HOST-03": { name: "Đét mở chương", family: "BEAT", Component: Host03,
    limits: { n: [1, 9], of: [2, 9], title: [2, 10] },
    check: (d) => (Number(d.n) > Number(d.of) ? ["n không được lớn hơn of"] : []),
    estimate: (d, c) => Math.max(2600, readMs(d.title, c) + 1400, lastEnd(c) + 500) },
  "END-05": { name: "Đét kết – Vòng khép", family: "END", Component: End05,
    limits: { text: [3, 16], sub: [0, 14] },
    estimate: (d, c) => end05Plan(c).end },
};
