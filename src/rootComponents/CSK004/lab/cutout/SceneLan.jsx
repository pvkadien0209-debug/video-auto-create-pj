// SceneLan.jsx — cảnh mẫu 10 giây: trời + mây trôi, đồi (parallax), quán + cây đung đưa, lá rơi,
// Lan đi vào → dừng (có trễ/đà) → vẫy tay → gật đầu → "nói" một câu (phụ đề tô theo lời) → máy quay đẩy nhẹ vào.
import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Illus } from "../../core/ui.jsx";
import { ensureFonts } from "../../core/fonts.js";
import { COLORS, FONT } from "../../core/theme.js";
import { Sway, Bob, Parallax, Drift, eyeOpenAt, noise1 } from "./parts.jsx";
import { fakeTalk, mouthFromTalk, mouthShape, spokenCount } from "./talk.js";
import { Lan } from "./Lan.jsx";

export const LAB_FRAMES = 300; // 10 giây × 30 fps
const SENT = "Hỏi lương ngày đông, hỏi cả ngày vắng.";
const TALK = fakeTalk(SENT, 172);
const TALK_END = TALK[TALK.length - 1].at + 8;
const GROUND = 880, S = 0.9; // đường chân nhân vật, tỉ lệ nhân vật
const STRIDE = 2 * 240 * Math.sin((28 * Math.PI) / 180) * S; // quãng 1 bước (px) → chân không trượt nhiều

const cl = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };
const ease = Easing.bezier(0.3, 0.05, 0.25, 1); // vào nhanh vừa, ra chậm (slow in / slow out)

// Vị trí x của Lan theo khung: đi từ ngoài trái vào, dừng ở 760.
const lanX = (f) => interpolate(f, [12, 100], [-260, 760], { ...cl, easing: ease });

/** Tư thế Lan tại khung f — "bảng nhịp" (beats) viết thẳng bằng số khung. */
const poseAt = (f) => {
  const x = lanX(f), vel = x - lanX(f - 1), velLag = lanX(f - 4) - lanX(f - 5);
  const walkAmt = Math.min(1, vel / 5);
  // Dừng lại có đà: thân nghiêng tới rồi lắc về (follow-through), tắt dần sau khung 100
  const t = f - 100, settle = t > 0 ? 4 * Math.exp(-t / 7) * Math.sin(t / 2.2) : 0;
  // Vẫy tay 104–152: hạ tay lấy đà (anticipation) → giơ → lắc cẳng tay → hạ
  let wave;
  if (f >= 104 && f <= 152) {
    const shoulder = interpolate(f, [104, 108, 116, 144, 152], [-6, 6, -148, -148, -6], { ...cl, easing: Easing.inOut(Easing.quad) });
    const shake = f > 114 && f < 144 ? 24 * Math.sin(((f - 114) / 6) * Math.PI) : 0;
    wave = { shoulder, elbow: interpolate(f, [104, 116, 144, 152], [-4, -12, -12, -4], cl) + shake };
  }
  // Gật đầu chào 152–168, và gật nhẹ nhấn ở "đông," và "vắng."
  const nodBump = (a, d, amp) => (f >= a && f <= a + d ? Math.sin((Math.PI * (f - a)) / d) * amp : 0);
  const stress = TALK.filter((s) => /[,.]$/.test(s.w));
  const nod = nodBump(153, 16, 12) + stress.reduce((n, s) => n + nodBump(s.at, 10, 5), 0);
  const talking = f >= TALK[0].at - 6 && f <= TALK_END + 12;
  return {
    walk: x / STRIDE * Math.PI,
    walkAmt,
    breath: Math.sin((f / 75) * Math.PI * 2) * (1 - walkAmt),
    lean: vel * 0.3 + settle,
    nod,
    wave,
    eyeOpen: eyeOpenAt(f, "lan"),
    mouth: mouthShape(mouthFromTalk(TALK, f)),
    brow: talking ? 0.9 : 0.15,
    pony: -velLag * 1.6 - settle * 1.5 + 3 * noise1("toc", f / 30),
    x,
  };
};

/** Lá rơi: trôi chéo xuống, lắc qua lại (động tác phụ — secondary action). */
const FallingLeaf = ({ start, x0, y0, seed, size = 70 }) => {
  const f = useCurrentFrame() - start;
  if (f < 0 || f > 170) return null;
  const p = f / 170;
  const x = x0 - 420 * p + 40 * Math.sin(f / 9);
  const y = y0 + (GROUND - y0 - 30) * p;
  const r = 35 * Math.sin(f / 9) + 20 * noise1(seed, f / 30);
  return <div style={{ position: "absolute", left: x, top: y, transform: `rotate(${r}deg)`, opacity: interpolate(f, [0, 8, 150, 170], [0, 1, 1, 0], cl) }}><Illus name="leaf-fluttering-in-wind" size={size} /></div>;
};

const Hills = ({ color, d }) => (
  <svg width={2600} height={1080} viewBox="0 0 2600 1080" style={{ position: "absolute", left: -340, top: 0 }}><path d={d} fill={color} /></svg>
);

/** Phụ đề: luôn hiện khi nói (#092); chữ đã nói đậm màu, chữ chưa nói nhạt. */
const Subtitle = ({ f }) => {
  const op = interpolate(f, [164, 172, TALK_END + 28, TALK_END + 38], [0, 1, 1, 0], cl);
  const n = spokenCount(TALK, f);
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 52, display: "flex", justifyContent: "center", opacity: op }}>
      <div style={{ background: "rgba(255,255,255,0.94)", borderRadius: 22, padding: "18px 40px", fontSize: 54, fontWeight: 700, boxShadow: "0 6px 24px rgba(23,32,51,0.15)" }}>
        <span style={{ color: COLORS.pine, marginRight: 18 }}>Lan:</span>
        {TALK.map((s, i) => <span key={i} style={{ color: i < n ? COLORS.ink : "#a7b0bd" }}>{s.w}{" "}</span>)}
      </div>
    </div>
  );
};

export const SceneLan = () => {
  ensureFonts();
  const f = useCurrentFrame();
  const pose = poseAt(f);
  // Máy quay: lia theo Lan (pan), rồi đẩy vào khi cô nói (zoom). Điểm neo zoom cố định để không trôi.
  const camX = interpolate(f, [20, 110], [0, -110], { ...cl, easing: ease });
  const zoom = interpolate(f, [160, 215], [1, 1.1], { ...cl, easing: Easing.inOut(Easing.cubic) });
  const fade = interpolate(f, [0, 10, LAB_FRAMES - 12, LAB_FRAMES - 1], [0, 1, 1, 0], cl);

  return (
    <AbsoluteFill style={{ background: "#eaf6ff", fontFamily: FONT, overflow: "hidden", opacity: fade }}>
      <AbsoluteFill style={{ transformOrigin: "660px 520px", transform: `scale(${zoom})` }}>
        {/* lớp 0: trời (đứng yên) */}
        <AbsoluteFill style={{ background: "linear-gradient(#a9dbff 0%, #dff2ff 55%, #f4fbff 100%)" }} />
        <Parallax depth={0.08} camX={camX}>
          <Bob amp={3} period={150} squash={0.02} style={{ position: "absolute", left: 1600, top: 40 }}><Illus name="sun" size={210} /></Bob>
        </Parallax>
        {/* lớp 1: mây (xa, trôi chậm) */}
        <Parallax depth={0.2} camX={camX}>
          <Drift x0={120} y={70} speed={0.7} seed="m1"><Illus name="cloud" size={250} style={{ opacity: 0.95 }} /></Drift>
          <Drift x0={820} y={170} speed={0.45} seed="m2"><Illus name="cloud" size={170} style={{ opacity: 0.85 }} /></Drift>
          <Drift x0={1350} y={110} speed={0.6} seed="m3"><Illus name="cloud" size={210} style={{ opacity: 0.9 }} /></Drift>
        </Parallax>
        {/* lớp 2–3: đồi xa, đồi gần */}
        <Parallax depth={0.35} camX={camX}>
          <Hills color="#cde9d3" d="M0 700 Q 300 520 650 640 Q 1000 540 1350 650 Q 1750 520 2100 640 Q 2400 560 2600 620 L2600 1080 L0 1080 Z" />
        </Parallax>
        <Parallax depth={0.6} camX={camX}>
          <Hills color="#a8d8b1" d="M0 760 Q 400 640 800 730 Q 1200 650 1600 735 Q 2000 660 2600 720 L2600 1080 L0 1080 Z" />
        </Parallax>
        {/* lớp 4: mặt đất, quán, cây, nhân vật (đi cùng máy quay) */}
        <Parallax depth={1} camX={camX}>
          <div style={{ position: "absolute", left: -400, right: -400, top: 790, bottom: 0, background: "#8cc993" }} />
          <div style={{ position: "absolute", left: -400, right: -400, top: 845, height: 70, background: "#e9d8b4", borderTop: "4px solid #d9c49a" }} />
          {/* quán */}
          <div style={{ position: "absolute", left: 1080, top: 372 }}><Illus name="house" size={480} /></div>
          {/* biển quán treo, đung đưa nhẹ quanh móc treo */}
          <div style={{ position: "absolute", left: 1000, top: 520, width: 14, height: 290, background: "#8a5a3b", borderRadius: 6 }} />
          <div style={{ position: "absolute", left: 1000, top: 520, width: 150, height: 12, background: "#8a5a3b", borderRadius: 6 }} />
          <Sway pivot="50% 0%" amp={3} period={70} gust={2} seed="bien" style={{ position: "absolute", left: 1020, top: 530, width: 140 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 26px" }}>
              <div style={{ width: 3, height: 22, background: "#5b3b28" }} /><div style={{ width: 3, height: 22, background: "#5b3b28" }} />
            </div>
            <div style={{ background: "#fff8e6", border: "5px solid #8a5a3b", borderRadius: 12, textAlign: "center", fontSize: 30, fontWeight: 800, color: "#8a5a3b", padding: "6px 0", lineHeight: 1.05 }}>QUÁN<br />CƠM</div>
          </Sway>
          {/* cây: cả cây lắc nhẹ quanh gốc; chiếc lá treo lắc mạnh hơn quanh cuống */}
          <Sway pivot="50% 96%" amp={1.6} period={110} gust={1.4} seed="cay" style={{ position: "absolute", left: 1500, top: 272 }}>
            <Illus name="deciduous-tree" size={560} />
            <Sway pivot="50% 0%" amp={14} period={46} gust={8} seed="la" style={{ position: "absolute", left: 70, top: 300 }}>
              <div style={{ width: 3, height: 30, background: "#6b8e23", margin: "0 auto" }} />
              <Illus name="leaf-fluttering-in-wind" size={84} />
            </Sway>
          </Sway>
          <FallingLeaf start={40} x0={1640} y0={360} seed="r1" />
          <FallingLeaf start={150} x0={1560} y0={330} seed="r2" size={56} />
          {/* nhân vật */}
          <div style={{ position: "absolute", left: pose.x - 200, top: GROUND - 700, width: 400, height: 720, transformOrigin: "200px 700px", transform: `scale(${S})` }}>
            <Lan pose={pose} />
          </div>
        </Parallax>
      </AbsoluteFill>
      <Subtitle f={f} />
      <div style={{ position: "absolute", left: 28, top: 22, fontSize: 26, fontWeight: 700, color: "rgba(23,32,51,0.45)" }}>LAB-Cutout · thử nghiệm</div>
    </AbsoluteFill>
  );
};
