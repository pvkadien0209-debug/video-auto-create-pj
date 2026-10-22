// sets.jsx — BỐI CẢNH cho cảnh hoạt hình (#106): phẳng, màu web, chuyển động nhẹ (mây trôi, lá đung đưa, đèn nhấp nháy, hơi nóng bốc).
// Mỗi bối cảnh: { name, ground, spots, Back }. Back nhận { f } (khung hình — truyền khung đứng yên để "đóng băng" cảnh),
// { active } (chỗ đứng của người đang nói) và { names } (tên người theo chỗ đứng, chỉ "online" dùng).
// Chỗ đứng (spots): x = tâm chân, y = đường chân, s = tỉ lệ người; "det" = chỗ của Đét (phía trước, bên phải).
// Sàn (ground) ở y = 852: chừa dải phụ đề ~170 px phía dưới. Đầu người cao nhất ở y ≈ 380, vùng bong bóng thoại là y 100–360.
import React from "react";
import { Img, staticFile } from "remotion";
import { ILLUS } from "./illus-names.js";
import { FONT } from "./theme.js";
import { noise1, windAngle } from "../cast/anim.js";

export const W = 1920, H = 1080, GROUND = 852;
const HZ = 640; // đường chân tường (tường / sàn) của cảnh trong nhà

// ---------------------------------------------------------------- phần nhỏ dùng chung
const Svg = ({ children }) => (
  <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", left: 0, top: 0 }}>{children}</svg>
);

/** Hình Fluent Emoji đặt theo tâm đáy (x, y). sway = biên độ đung đưa (độ), pivot = điểm xoay. */
const Prop = ({ name, x, y, size = 120, f = 0, sway = 0, period = 110, seed = name, pivot = "50% 100%", rot = 0, flip = false, opacity = 1, dy = 0 }) => {
  if (!ILLUS.has(name)) return null;
  const a = sway ? windAngle(f, { amp: sway, period, gust: sway * 0.4, seed }) : 0;
  return (
    <div style={{ position: "absolute", left: x - size / 2, top: y - size + dy, width: size, height: size, transformOrigin: pivot, transform: `rotate(${rot + a}deg) scaleX(${flip ? -1 : 1})`, opacity }}>
      <Img src={staticFile(`illus/${name}.svg`)} style={{ width: size, height: size, objectFit: "contain" }} />
    </div>
  );
};

const Cloud = ({ x, y, s = 1, o = 0.95 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} opacity={o}>
    <ellipse cx={0} cy={18} rx={92} ry={26} fill="#fff" />
    <circle cx={-38} cy={4} r={34} fill="#fff" />
    <circle cx={8} cy={-12} r={44} fill="#fff" />
    <circle cx={50} cy={8} r={30} fill="#fff" />
  </g>
);

/** Mây trôi ngang đều rồi quay vòng trong [x0, x1]. */
const Clouds = ({ f, x0 = -200, x1 = 2120, items }) =>
  items.map(([x, y, s, speed = 0.35], i) => {
    const span = x1 - x0;
    const xx = ((((x - x0 + f * speed) % span) + span) % span) + x0;
    return <Cloud key={i} x={xx} y={y + noise1(`may${i}`, f / 80) * 4} s={s} />;
  });

/** Cửa sổ có trời + mây trôi. */
const Window = ({ id, x, y, w, h, f, frame = "#d9b98a", sky = ["#bfe3f5", "#e3f3fb"], bars = true, children }) => (
  <g>
    <defs>
      <clipPath id={`win-${id}`}><rect x={x} y={y} width={w} height={h} rx={10} /></clipPath>
      <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={sky[0]} /><stop offset="1" stopColor={sky[1]} /></linearGradient>
    </defs>
    <rect x={x} y={y} width={w} height={h} rx={10} fill={`url(#sky-${id})`} />
    <g clipPath={`url(#win-${id})`}>
      <Clouds f={f} x0={x - 160} x1={x + w + 160} items={[[x + w * 0.2, y + h * 0.3, 0.55, 0.3], [x + w * 0.75, y + h * 0.55, 0.42, 0.22]]} />
      {children}
    </g>
    <rect x={x} y={y} width={w} height={h} rx={10} fill="none" stroke={frame} strokeWidth={16} />
    {bars && <path d={`M ${x + w / 2} ${y} V ${y + h} M ${x} ${y + h / 2} H ${x + w}`} stroke={frame} strokeWidth={10} />}
    <rect x={x - 18} y={y + h + 2} width={w + 36} height={16} rx={6} fill={frame} />
  </g>
);

/** Cây tròn phẳng, đung đưa quanh gốc. */
const Tree = ({ x, y, s = 1, f, seed = "cay", c = ["#5f9e6e", "#4f8a5f"], trunk = "#8a6a4a" }) => {
  const a = windAngle(f, { amp: 1.6, period: 130, gust: 0.8, seed });
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) rotate(${a} 0 0)`}>
      <rect x={-14} y={-150} width={28} height={150} rx={10} fill={trunk} />
      <circle cx={-52} cy={-178} r={70} fill={c[1]} />
      <circle cx={48} cy={-186} r={74} fill={c[1]} />
      <circle cx={0} cy={-238} r={84} fill={c[0]} />
      <circle cx={-30} cy={-262} r={22} fill="#fff" opacity={0.12} />
    </g>
  );
};

/** Đồng hồ treo tường có kim chạy. */
const Clock = ({ x, y, r = 54, f, face = "#fff", rim = "#2b3650" }) => {
  const m = (f * 0.5) % 360, h = 300 + f * 0.04;
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={face} stroke={rim} strokeWidth={8} />
      {Array.from({ length: 12 }, (_, i) => <rect key={i} x={-2} y={-r + 9} width={4} height={i % 3 ? 7 : 12} fill={rim} transform={`rotate(${i * 30})`} />)}
      <rect x={-3} y={-r * 0.5} width={6} height={r * 0.5} rx={3} fill={rim} transform={`rotate(${h})`} />
      <rect x={-2} y={-r * 0.75} width={4} height={r * 0.75} rx={2} fill="#e5533d" transform={`rotate(${m})`} />
      <circle r={5} fill={rim} />
    </g>
  );
};

/** Hơi nóng bốc lên (3 sợi cong, mờ dần). */
const Steam = ({ x, y, f, h = 70 }) => (
  <g>
    {[0, 1, 2].map((i) => {
      const t = ((f + i * 20) % 60) / 60;
      return (
        <path key={i} d={`M ${x - 18 + i * 18} ${y} q -10 ${-h * 0.25} 0 ${-h * 0.5} q 10 ${-h * 0.25} 0 ${-h * 0.5}`} fill="none" stroke="#fff" strokeWidth={6}
          strokeLinecap="round" opacity={0.75 * Math.sin(Math.PI * t)} transform={`translate(0 ${-t * 26})`} />
      );
    })}
  </g>
);

const Sign = ({ x, y, w, h, text, size = 46, bg = "#fff", border = "#c99a5b", color = "#8a4524", rot = 0 }) => (
  <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
    <rect x={x} y={y} width={w} height={h} rx={14} fill={bg} stroke={border} strokeWidth={6} />
    <text x={x + w / 2} y={y + h / 2 + size * 0.36} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={size} fill={color} letterSpacing="0.04em">{text}</text>
  </g>
);

const Plant = ({ x, y, f, s = 1, seed = "pl" }) => {
  const a = windAngle(f, { amp: 2.2, period: 120, gust: 1, seed });
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g transform={`rotate(${a} 0 -60)`}>
        {[-40, -14, 14, 40].map((d, i) => (
          <ellipse key={i} cx={d * 0.9} cy={-120 - (i % 2) * 26} rx={22} ry={62} fill={i % 2 ? "#4f8a5f" : "#5f9e6e"} transform={`rotate(${d * 0.7} ${d * 0.9} -70)`} />
        ))}
      </g>
      <path d="M -46 -64 L 46 -64 L 36 0 L -36 0 Z" fill="#c9805a" />
      <rect x={-52} y={-72} width={104} height={14} rx={6} fill="#b06c48" />
    </g>
  );
};

const Floor = ({ y = HZ, c = "#e2c9a3", line = "#d4b88f", planks = true, tiles = false }) => (
  <g>
    <rect x={0} y={y} width={W} height={H - y} fill={c} />
    {planks && [0, 1, 2, 3, 4].map((i) => <path key={i} d={`M 0 ${y + 40 + i * i * 22 + i * 28} H ${W}`} stroke={line} strokeWidth={3} />)}
    {tiles && Array.from({ length: 13 }, (_, i) => <path key={`t${i}`} d={`M ${960 + (i - 6) * 150} ${y} L ${960 + (i - 6) * 420} ${H}`} stroke={line} strokeWidth={3} />)}
    <rect x={0} y={y - 6} width={W} height={12} fill={line} />
  </g>
);

const Lantern = ({ x, y, f, seed, s = 1 }) => {
  const a = windAngle(f, { amp: 4, period: 95, gust: 2, seed });
  return (
    <g transform={`translate(${x} ${y}) rotate(${a} 0 0) scale(${s})`}>
      <line x1={0} y1={0} x2={0} y2={56} stroke="#6b4a2f" strokeWidth={3} />
      <rect x={-14} y={52} width={28} height={10} rx={3} fill="#d4a017" />
      <ellipse cx={0} cy={98} rx={40} ry={40} fill="#e5533d" />
      <path d="M -20 62 Q -34 98 -20 134 M 0 58 V 138 M 20 62 Q 34 98 20 134" stroke="#c63d2a" strokeWidth={3} fill="none" />
      <rect x={-14} y={134} width={28} height={10} rx={3} fill="#d4a017" />
      <path d="M -6 144 V 172 M 0 144 V 178 M 6 144 V 172" stroke="#d4a017" strokeWidth={3} />
    </g>
  );
};

// ---------------------------------------------------------------- các bối cảnh
const SPOTS = {
  farleft: { x: 250, y: GROUND, s: 0.74 },
  left: { x: 560, y: GROUND, s: 0.74 },
  center: { x: 960, y: GROUND, s: 0.74 },
  right: { x: 1360, y: GROUND, s: 0.74 },
  farright: { x: 1660, y: GROUND, s: 0.74 },
  det: { x: 1740, y: GROUND + 6, s: 0.6 },
};

const Cafe = ({ f }) => (
  <>
    <Svg>
      <rect width={W} height={H} fill="#f6ead7" />
      <rect y={500} width={W} height={HZ - 500} fill="#efdcbf" />
      <Floor c="#e3caa4" line="#d6b78c" />
      <Window id="cafe" x={110} y={150} w={330} h={260} f={f} />
      <Sign x={760} y={66} w={400} h={104} text="QUÁN CƠM" size={54} rot={-2} />
      {/* bảng thực đơn */}
      <g>
        <rect x={1490} y={130} width={320} height={300} rx={18} fill="#2f5d50" stroke="#c99a5b" strokeWidth={12} />
        <text x={1650} y={194} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={36} fill="#ffd23f">THỰC ĐƠN</text>
        {["Cơm sườn", "Cơm gà", "Canh chua", "Trà đá"].map((t, i) => (
          <g key={t}>
            <text x={1522} y={250 + i * 46} fontFamily={FONT} fontWeight={600} fontSize={28} fill="#eef5f2">{t}</text>
            <path d={`M ${1690} ${242 + i * 46} H ${1770}`} stroke="#eef5f2" strokeWidth={3} strokeDasharray="4 8" />
          </g>
        ))}
      </g>
      {/* quầy */}
      <rect x={1000} y={538} width={470} height={30} rx={10} fill="#a8743f" />
      <rect x={1016} y={566} width={438} height={160} rx={8} fill="#c99a5b" />
      <path d="M 1016 620 H 1454" stroke="#b9884d" strokeWidth={4} />
      <Steam x={1110} y={468} f={f} />
      <Steam x={1340} y={474} f={f + 17} h={60} />
      <Lantern x={600} y={0} f={f} seed="l1" />
      <Lantern x={1300} y={0} f={f} seed="l2" s={0.85} />
    </Svg>
    <Prop name="pot-of-food" x={1110} y={548} size={120} />
    <Prop name="steaming-bowl" x={1340} y={548} size={100} />
    <Prop name="potted-plant" x={70} y={720} size={180} f={f} sway={1.5} />
  </>
);

const Shop = ({ f }) => {
  const on = Math.floor(f / 22) % 6 !== 5; // đèn chữ chớp nhẹ
  return (
    <>
      <Svg>
        <rect width={W} height={H} fill="#e6f2ee" />
        <Floor c="#d5dde6" line="#c3cdd8" planks={false} tiles />
        {/* kệ hàng */}
        <rect x={70} y={130} width={560} height={500} rx={12} fill="#c99a5b" />
        <rect x={86} y={146} width={528} height={468} rx={8} fill="#f3e6d2" />
        {[290, 450, 610].map((y) => <rect key={y} x={78} y={y - 12} width={544} height={18} rx={6} fill="#a8743f" />)}
        {/* biển MỞ CỬA */}
        <rect x={720} y={110} width={290} height={92} rx={46} fill="#1b2438" />
        <text x={865} y={172} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={44} fill={on ? "#ff7a8a" : "#7a4a55"}
          style={{ filter: on ? "drop-shadow(0 0 10px #ff7a8a)" : "none" }}>MỞ CỬA</text>
        {/* cửa kính */}
        <rect x={760} y={250} width={220} height={HZ - 250} rx={8} fill="#cfe9f5" stroke="#8aa6b8" strokeWidth={10} />
        <path d={`M 870 250 V ${HZ}`} stroke="#8aa6b8" strokeWidth={8} />
        <path d="M 790 300 L 840 260 M 790 350 L 860 290" stroke="#fff" strokeWidth={8} opacity={0.6} strokeLinecap="round" />
        {/* quầy thu ngân */}
        <rect x={1240} y={300} width={420} height={70} rx={14} fill="#0f6e5a" />
        <text x={1450} y={348} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={40} fill="#fff" letterSpacing="0.05em">THU NGÂN</text>
        <path d="M 1300 300 V 250 M 1600 300 V 250" stroke="#8a93a3" strokeWidth={4} />
        <rect x={1180} y={540} width={680} height={28} rx={10} fill="#2b3650" />
        <rect x={1196} y={566} width={648} height={160} rx={8} fill="#3d4a66" />
        <rect x={1196} y={610} width={648} height={10} fill="#ffd23f" opacity={0.8} />
      </Svg>
      {[["bubble-tea", 150, 270], ["cup-with-straw", 260, 270], ["beverage-box", 370, 270], ["glass-of-milk", 480, 270], ["rice-cracker", 560, 270],
        ["bread", 160, 430], ["baguette-bread", 290, 430], ["basket", 420, 430], ["rice-ball", 540, 430],
        ["soap", 160, 590], ["sponge", 280, 590], ["lotion-bottle", 400, 590], ["roll-of-paper", 520, 590]].map(([n, x, y]) => <Prop key={n} name={n} x={x} y={y} size={92} />)}
      <Prop name="desktop-computer" x={1330} y={550} size={130} />
      <Prop name="shopping-bags" x={1600} y={548} size={110} />
      <Prop name="potted-plant" x={1080} y={700} size={150} f={f} sway={1.4} />
    </>
  );
};

const Office = ({ f }) => (
  <>
    <Svg>
      <rect width={W} height={H} fill="#edf1f7" />
      <Floor c="#cdd6e2" line="#bcc7d5" planks={false} />
      <Window id="office" x={110} y={110} w={880} h={360} f={f} frame="#9aa8bb" sky={["#b9dcf0", "#e6f4fb"]} bars={false}>
        {[[140, 300, 90], [250, 240, 130], [400, 330, 70], [490, 210, 150], [660, 280, 100], [780, 250, 120], [900, 320, 80]].map(([x, top, w], i) => (
          <g key={i}>
            <rect x={x} y={top} width={w} height={470 - top} fill={i % 2 ? "#a9c4da" : "#c2d6e6"} />
            {Array.from({ length: Math.floor((470 - top) / 40) }, (_, r) => <rect key={r} x={x + 14} y={top + 16 + r * 40} width={w - 28} height={10} rx={3} fill="#e8f2fa" opacity={0.7} />)}
          </g>
        ))}
      </Window>
      <path d="M 403 110 V 470 M 696 110 V 470" stroke="#9aa8bb" strokeWidth={10} />
      <Clock x={1540} y={200} f={f} />
      {/* kệ sách */}
      <rect x={1240} y={330} width={560} height={16} rx={6} fill="#9aa8bb" />
      {/* bàn làm việc */}
      <rect x={1130} y={548} width={720} height={24} rx={8} fill="#b9c4d4" />
      <rect x={1150} y={572} width={20} height={150} fill="#9aa8bb" />
      <rect x={1810} y={572} width={20} height={150} fill="#9aa8bb" />
      <rect x={1480} y={572} width={200} height={110} rx={8} fill="#c9d2df" />
    </Svg>
    <Prop name="books" x={1330} y={334} size={100} />
    <Prop name="potted-plant" x={1700} y={334} size={96} />
    <Prop name="laptop" x={1290} y={556} size={120} />
    <Prop name="desktop-computer" x={1620} y={556} size={140} />
    <Prop name="potted-plant" x={70} y={720} size={190} f={f} sway={1.5} />
  </>
);

const Meeting = ({ f }) => {
  const fl = 0.04 * (1 + noise1("chieu", f / 6));
  return (
    <>
      <Svg>
        <rect width={W} height={H} fill="#eff0f6" />
        <Floor c="#d4d9e3" line="#c3c9d6" planks={false} />
        {/* màn chiếu */}
        <rect x={560} y={48} width={800} height={14} rx={7} fill="#5d6878" />
        <rect x={580} y={62} width={760} height={430} fill="#ffffff" stroke="#d8dde6" strokeWidth={4} />
        <text x={620} y={122} fontFamily={FONT} fontWeight={800} fontSize={40} fill="#172033">Báo cáo tuần</text>
        <rect x={620} y={140} width={120} height={8} rx={4} fill="#0f6e5a" />
        {[[660, 0.35, "#9fc6b9"], [780, 0.55, "#7fb3a3"], [900, 0.48, "#9fc6b9"], [1020, 0.72, "#0f6e5a"], [1140, 0.86, "#0f6e5a"]].map(([x, h, c], i) => (
          <rect key={i} x={x} y={450 - h * 260} width={84} height={h * 260} rx={8} fill={c} />
        ))}
        <path d="M 640 452 H 1290" stroke="#5d6878" strokeWidth={4} />
        <rect x={580} y={62} width={760} height={430} fill="#fff8d6" opacity={fl} />
        {/* bảng trắng + cây */}
        <rect x={1460} y={140} width={360} height={260} rx={12} fill="#fff" stroke="#c3c9d6" strokeWidth={8} />
        <path d="M 1500 200 q 40 -20 80 0 t 80 0 M 1500 250 H 1700 M 1500 300 H 1640" stroke="#2f5fb3" strokeWidth={6} fill="none" strokeLinecap="round" />
        <circle cx={1760} cy={330} r={26} fill="none" stroke="#e5533d" strokeWidth={6} />
        {/* bàn họp dài */}
        <rect x={220} y={560} width={1480} height={26} rx={12} fill="#8a6a4a" />
        <rect x={240} y={584} width={1440} height={110} rx={8} fill="#a8835e" />
      </Svg>
      <Prop name="laptop" x={420} y={568} size={110} />
      <Prop name="hot-beverage" x={760} y={566} size={70} />
      <Prop name="clipboard" x={1180} y={568} size={84} />
      <Prop name="laptop" x={1500} y={568} size={110} flip />
      <Prop name="potted-plant" x={110} y={700} size={190} f={f} sway={1.5} />
    </>
  );
};

const Room = ({ f }) => {
  const fan = (f * 28) % 360;
  return (
    <>
      <Svg>
        <rect width={W} height={H} fill="#f6eee3" />
        <Floor c="#d9b68d" line="#c8a277" />
        <Window id="room" x={150} y={140} w={320} h={280} f={f} frame="#e7d3b8" />
        <path d="M 120 120 Q 170 280 130 450 L 108 450 L 108 120 Z M 500 120 Q 450 280 490 450 L 512 450 L 512 120 Z" fill="#e5533d" opacity={0.75} />
        <rect x={100} y={112} width={420} height={12} rx={6} fill="#a8743f" />
        {/* giường */}
        <rect x={60} y={520} width={600} height={120} rx={20} fill="#8fb9d6" />
        <rect x={60} y={500} width={150} height={70} rx={24} fill="#fff" />
        <rect x={210} y={540} width={450} height={110} rx={20} fill="#6c9cc0" />
        <rect x={50} y={430} width={30} height={290} rx={10} fill="#a8743f" />
        <rect x={60} y={640} width={600} height={60} rx={10} fill="#a8743f" />
        {/* tranh dán tường */}
        <rect x={880} y={150} width={220} height={260} rx={8} fill="#ffd23f" />
        <circle cx={990} cy={250} r={60} fill="#fff" opacity={0.85} />
        <path d="M 900 380 L 960 320 L 1010 360 L 1060 300 L 1090 380 Z" fill="#0f6e5a" opacity={0.8} />
        {/* quạt treo tường */}
        <g transform="translate(1210 200)">
          <circle r={70} fill="none" stroke="#9aa8bb" strokeWidth={5} />
          <g transform={`rotate(${fan})`}>{[0, 120, 240].map((a) => <ellipse key={a} cx={0} cy={-34} rx={18} ry={34} fill="#bfe3f5" transform={`rotate(${a})`} />)}</g>
          <circle r={14} fill="#5d6878" />
        </g>
        {/* bàn học */}
        <rect x={1300} y={548} width={520} height={24} rx={8} fill="#a8743f" />
        <rect x={1320} y={572} width={18} height={150} fill="#8a5f34" />
        <rect x={1780} y={572} width={18} height={150} fill="#8a5f34" />
        {/* đèn bàn */}
        <path d="M 1720 548 L 1700 450 L 1640 410" stroke="#2b3650" strokeWidth={8} fill="none" strokeLinecap="round" />
        <path d="M 1600 380 L 1680 420 L 1650 460 Z" fill="#2b3650" />
        <ellipse cx={1690} cy={548} rx={40} ry={8} fill="#2b3650" />
      </Svg>
      <Prop name="books" x={1420} y={556} size={100} />
      <Prop name="laptop" x={1560} y={556} size={110} />
    </>
  );
};

const Home = ({ f }) => {
  const fan = (f * 20) % 360;
  const tv = ["#9fd3ee", "#b6e2c8", "#ffe6a3", "#f6c1c8"][Math.floor(f / 40) % 4];
  return (
    <>
      <Svg>
        <rect width={W} height={H} fill="#e9eef4" />
        <rect y={430} width={W} height={HZ - 430} fill="#dde5ee" />
        <Floor c="#c9a17a" line="#b88f67" />
        {/* quạt trần */}
        <rect x={956} y={0} width={8} height={40} fill="#5d6878" />
        <g transform="translate(960 46)">
          <ellipse cx={0} cy={0} rx={240 * Math.abs(Math.cos((fan * Math.PI) / 180))} ry={10} fill="#8a6a4a" />
          <ellipse cx={0} cy={0} rx={240 * Math.abs(Math.sin((fan * Math.PI) / 180))} ry={10} fill="#a8835e" />
          <circle r={18} fill="#5d6878" />
        </g>
        {/* tranh */}
        {[[640, 150, 200, 150, "#ffd23f"], [880, 130, 160, 190, "#9fc6b9"], [1080, 160, 200, 140, "#f2b8a2"]].map(([x, y, w, h, c], i) => (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx={6} fill="#fff" stroke="#8a6a4a" strokeWidth={8} />
            <rect x={x + 18} y={y + 18} width={w - 36} height={h - 36} rx={4} fill={c} />
          </g>
        ))}
        {/* sofa */}
        <rect x={560} y={450} width={800} height={150} rx={40} fill="#3f8a76" />
        <rect x={520} y={520} width={100} height={190} rx={40} fill="#357564" />
        <rect x={1300} y={520} width={100} height={190} rx={40} fill="#357564" />
        <rect x={600} y={560} width={720} height={130} rx={30} fill="#4f9c86" />
        <rect x={650} y={500} width={140} height={90} rx={26} fill="#ffd23f" />
        <rect x={1130} y={500} width={140} height={90} rx={26} fill="#f2937a" />
        {/* TV */}
        <rect x={1520} y={260} width={330} height={200} rx={14} fill="#172033" />
        <rect x={1536} y={276} width={298} height={168} rx={6} fill={tv} />
        <rect x={1560} y={600} width={260} height={110} rx={10} fill="#8a6a4a" />
        <path d="M 1685 460 V 600" stroke="#5d6878" strokeWidth={10} />
        {/* đèn cây */}
        <path d="M 230 700 V 330" stroke="#2b3650" strokeWidth={8} />
        <path d="M 170 330 L 290 330 L 260 250 L 200 250 Z" fill="#ffe6a3" />
        <ellipse cx={230} cy={340} rx={140} ry={60} fill="#ffe6a3" opacity={0.18 + 0.05 * Math.sin(f / 20)} />
      </Svg>
      <Prop name="potted-plant" x={420} y={720} size={170} f={f} sway={1.5} />
    </>
  );
};

const Kitchen = ({ f }) => (
  <>
    <Svg>
      <defs>
        <pattern id="tile-k" width={60} height={60} patternUnits="userSpaceOnUse">
          <rect width={60} height={60} fill="#f2f6f5" />
          <path d="M 60 0 H 0 V 60" fill="none" stroke="#dfe7e5" strokeWidth={3} />
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#tile-k)" />
      <Floor c="#cfd7d5" line="#bcc6c4" planks={false} tiles />
      {/* tủ trên */}
      {[100, 360, 620, 880].map((x) => (
        <g key={x}>
          <rect x={x} y={80} width={250} height={210} rx={10} fill="#8fb9a8" />
          <rect x={x + 112} y={250} width={26} height={8} rx={4} fill="#fff" />
        </g>
      ))}
      <Window id="kit" x={1200} y={140} w={260} h={250} f={f} frame="#8fb9a8" />
      {/* tủ dưới + bếp */}
      <rect x={90} y={520} width={1060} height={26} rx={8} fill="#5d6878" />
      <rect x={100} y={546} width={1040} height={180} rx={8} fill="#8fb9a8" />
      {[100, 360, 620, 880].map((x) => <path key={x} d={`M ${x + 250} 546 V 726`} stroke="#7aa595" strokeWidth={4} />)}
      <rect x={560} y={508} width={240} height={14} rx={6} fill="#2b3650" />
      <Steam x={640} y={430} f={f} h={80} />
      {/* tủ lạnh */}
      <rect x={1540} y={200} width={270} height={520} rx={26} fill="#dfe7ee" stroke="#b9c4d4" strokeWidth={6} />
      <path d="M 1540 380 H 1810" stroke="#b9c4d4" strokeWidth={6} />
      <rect x={1570} y={280} width={12} height={70} rx={6} fill="#8a93a3" />
      <rect x={1570} y={420} width={12} height={110} rx={6} fill="#8a93a3" />
    </Svg>
    <Prop name="pot-of-food" x={640} y={514} size={130} />
    <Prop name="teapot" x={300} y={524} size={100} />
    <Prop name="leafy-green" x={900} y={524} size={90} />
    <Prop name="kitchen-knife" x={1030} y={524} size={80} rot={-30} />
    <Prop name="potted-plant" x={1330} y={398} size={90} f={f} sway={1.2} />
  </>
);

const Campus = ({ f }) => (
  <>
    <Svg>
      <rect width={W} height={H} fill="#f3f0e6" />
      <Floor c="#d9c4a0" line="#c8b08a" />
      <Window id="campus" x={50} y={130} w={250} h={380} f={f} frame="#c8b08a">
        <Tree x={180} y={560} s={0.9} f={f} seed="campus-t" />
      </Window>
      {/* bảng đen */}
      <rect x={400} y={92} width={1120} height={390} rx={14} fill="#8a6a4a" />
      <rect x={416} y={108} width={1088} height={358} rx={8} fill="#2f5d50" />
      <text x={470} y={186} fontFamily={FONT} fontWeight={700} fontSize={46} fill="#eef5f2" opacity={0.92}>Bài hôm nay</text>
      <path d="M 470 240 H 900 M 470 300 H 820 M 470 360 H 960" stroke="#eef5f2" strokeWidth={6} opacity={0.5} strokeLinecap="round" />
      <circle cx={1290} cy={280} r={90} fill="none" stroke="#ffd23f" strokeWidth={8} opacity={0.8} strokeDasharray="470 120" />
      <rect x={400} y={478} width={1120} height={16} rx={6} fill="#a8835e" />
      <Clock x={1710} y={190} f={f} r={58} />
      {/* bàn giáo viên */}
      <rect x={1580} y={560} width={300} height={24} rx={8} fill="#a8743f" />
      <rect x={1600} y={584} width={260} height={130} rx={6} fill="#c99a5b" />
    </Svg>
    <Prop name="globe-showing-asia-australia" x={1660} y={568} size={110} />
    <Prop name="books" x={1800} y={568} size={90} />
  </>
);

const Street = ({ f }) => {
  const bike = (x0, speed, y, name, size, flip) => {
    const span = 2400;
    const x = ((((x0 + f * speed) % span) + span) % span) - 240;
    return <Prop key={name + x0} name={name} x={x} y={y + Math.sin(f / 3 + x0) * 1.5} size={size} flip={flip} />;
  };
  return (
    <>
      <Svg>
        <defs><linearGradient id="sky-street" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bfe3f5" /><stop offset="1" stopColor="#eaf6fb" /></linearGradient></defs>
        <rect width={W} height={H} fill="url(#sky-street)" />
        <Clouds f={f} items={[[200, 90, 0.8, 0.3], [900, 60, 0.6, 0.2], [1500, 110, 0.7, 0.26]]} />
        {/* dãy nhà phố */}
        {[[0, 190, 300, "#f2b8a2", "PHỞ"], [300, 140, 260, "#f6d37a", ""], [560, 220, 330, "#9fc6b9", "TẠP HOÁ"], [890, 160, 280, "#c7b8e0", ""], [1170, 200, 340, "#f2c9a8", "CÀ PHÊ"], [1510, 150, 410, "#a9c4da", ""]].map(([x, top, w, c, sign], i) => (
          <g key={i}>
            <rect x={x} y={top} width={w} height={480 - top} fill={c} />
            {Array.from({ length: Math.floor((340 - top) / 90) }, (_, r) => [0, 1, 2].map((k) => (
              <rect key={`${r}-${k}`} x={x + 30 + k * (w - 60) / 3} y={top + 30 + r * 90} width={(w - 60) / 3 - 24} height={52} rx={6} fill="#fff" opacity={0.75} />
            )))}
            <path d={`M ${x} 380 h ${w}`} stroke="#fff" strokeWidth={4} opacity={0.6} />
            {sign && <Sign x={x + w / 2 - 110} y={312} w={220} h={62} text={sign} size={34} bg="#fff" border="#172033" color="#172033" />}
            <path d={`M ${x + 10} 400 h ${w - 20} l -20 40 h ${-(w - 60)} Z`} fill={i % 2 ? "#e5533d" : "#0f6e5a"} opacity={0.85} />
          </g>
        ))}
        {/* đường */}
        <rect y={480} width={W} height={100} fill="#6b7383" />
        <path d={`M ${-(f * 6) % 120} 530 H ${W + 120}`} stroke="#fff" strokeWidth={6} strokeDasharray="60 60" />
        {/* vỉa hè */}
        <rect y={580} width={W} height={H - 580} fill="#e6ded2" />
        <rect y={574} width={W} height={14} fill="#c9bfae" />
        {Array.from({ length: 12 }, (_, i) => <path key={i} d={`M ${i * 180} 588 L ${i * 180 - 120} ${H}`} stroke="#d8cfc1" strokeWidth={3} />)}
        {[690, 800, 930].map((y) => <path key={y} d={`M 0 ${y} H ${W}`} stroke="#d8cfc1" strokeWidth={3} />)}
        <Tree x={120} y={600} s={1.1} f={f} seed="st1" />
        <Tree x={1820} y={600} s={1.05} f={f} seed="st2" />
      </Svg>
      {bike(0, 7, 520, "motor-scooter", 110, true)}
      {bike(900, 5.5, 520, "motorcycle", 100, true)}
      {bike(1700, -6, 574, "motor-scooter", 120, false)}
      {bike(400, -4.5, 576, "automobile", 150, false)}
    </>
  );
};

const Airport = ({ f }) => {
  const px = ((f * 3.2) % 2600) - 300;
  const blinkOn = Math.floor(f / 18) % 2 === 0;
  const rows = [["HÀ NỘI", "08:15", "ĐÚNG GIỜ"], ["ĐÀ NẴNG", "09:40", "LÊN MÁY BAY"], ["SEOUL", "10:05", "TRỄ 20'"]];
  return (
    <>
      {/* lớp 1: trời, đường băng (ngoài kính) */}
      <Svg>
        <rect width={W} height={H} fill="#eef3f8" />
        <defs><linearGradient id="sky-air" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a9d6f0" /><stop offset="1" stopColor="#e6f4fb" /></linearGradient></defs>
        <rect x={0} y={70} width={W} height={500} fill="url(#sky-air)" />
        <Clouds f={f} items={[[300, 170, 0.7, 0.2], [1100, 130, 0.55, 0.15], [1650, 200, 0.6, 0.22]]} />
        <rect x={0} y={470} width={W} height={100} fill="#9aa8bb" />
        <path d={`M 0 520 H ${W}`} stroke="#fff" strokeWidth={6} strokeDasharray="70 50" />
      </Svg>
      <div style={{ position: "absolute", left: 0, top: 70, width: W, height: 500, overflow: "hidden" }}>
        <Prop name="airplane" x={px} y={400 - Math.max(0, px - 900) * 0.18} size={170} rot={-12 - Math.min(10, Math.max(0, px - 900) * 0.03)} />
      </div>
      {/* lớp 2: khung kính, sàn, bảng giờ bay, quầy */}
      <Svg>
        {Array.from({ length: 9 }, (_, i) => <rect key={i} x={i * 240 - 8} y={70} width={16} height={500} fill="#5d6878" />)}
        <rect x={0} y={60} width={W} height={20} fill="#5d6878" />
        <rect x={0} y={566} width={W} height={20} fill="#5d6878" />
        <Floor y={586} c="#dfe5ec" line="#cdd5df" planks={false} tiles />
        <rect x={70} y={110} width={600} height={250} rx={14} fill="#172033" />
        <text x={100} y={164} fontFamily={FONT} fontWeight={800} fontSize={34} fill="#fff">CHUYẾN BAY ĐI</text>
        {rows.map(([c, t, st], i) => (
          <g key={c}>
            <text x={100} y={226 + i * 50} fontFamily={FONT} fontWeight={700} fontSize={30} fill="#ffd23f">{c}</text>
            <text x={350} y={226 + i * 50} fontFamily={FONT} fontWeight={700} fontSize={30} fill="#ffd23f">{t}</text>
            <text x={460} y={226 + i * 50} fontFamily={FONT} fontWeight={700} fontSize={26} fill={i === 1 ? (blinkOn ? "#7ee2a8" : "#2e6b4a") : "#cfd6e2"}>{st}</text>
          </g>
        ))}
        <rect x={1210} y={380} width={560} height={70} rx={12} fill="#2f5fb3" />
        <text x={1490} y={428} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={40} fill="#fff" letterSpacing="0.06em">LÀM THỦ TỤC</text>
        <rect x={1160} y={560} width={680} height={26} rx={10} fill="#5d6878" />
        <rect x={1176} y={586} width={648} height={140} rx={8} fill="#8a93a3" />
        <rect x={1176} y={630} width={648} height={8} fill="#2f5fb3" />
      </Svg>
      <Prop name="desktop-computer" x={1330} y={566} size={110} />
      <Prop name="luggage" x={90} y={720} size={140} />
    </>
  );
};

const Park = ({ f }) => {
  const birdX = ((f * 2.4) % 2400) - 200;
  return (
    <>
      <Svg>
        <defs><linearGradient id="sky-park" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a9d6f0" /><stop offset="1" stopColor="#eef8fb" /></linearGradient></defs>
        <rect width={W} height={H} fill="url(#sky-park)" />
        <g transform={`translate(1640 140) rotate(${f * 0.4})`}>
          {Array.from({ length: 12 }, (_, i) => <rect key={i} x={-4} y={-92} width={8} height={22} rx={4} fill="#ffd23f" transform={`rotate(${i * 30})`} />)}
          <circle r={58} fill="#ffd23f" />
        </g>
        <Clouds f={f} items={[[300, 110, 0.85, 0.25], [1000, 160, 0.6, 0.18], [1400, 90, 0.5, 0.3]]} />
        <path d="M 0 470 Q 300 360 640 450 T 1300 430 T 1920 440 V 600 H 0 Z" fill="#9fd0a0" />
        <path d="M 0 520 Q 420 450 860 520 T 1920 500 V 620 H 0 Z" fill="#8bc58f" />
        <rect y={580} width={W} height={H - 580} fill="#a8d5a2" />
        {[[160, 600, 1.05], [520, 590, 0.8], [1150, 595, 0.9], [1500, 600, 1.1], [1840, 596, 0.85]].map(([x, y, s], i) => <Tree key={i} x={x} y={y} s={s} f={f} seed={`park${i}`} />)}
        {/* ghế đá */}
        <rect x={760} y={600} width={240} height={22} rx={8} fill="#b9c4d4" />
        <rect x={780} y={620} width={20} height={44} fill="#9aa8bb" />
        <rect x={960} y={620} width={20} height={44} fill="#9aa8bb" />
        {/* đường chạy */}
        <path d="M 0 700 Q 960 660 1920 700 V 1000 Q 960 960 0 1000 Z" fill="#d98a5f" />
        {[770, 860, 940].map((y) => <path key={y} d={`M 0 ${y} Q 960 ${y - 38} 1920 ${y}`} stroke="#fff" strokeWidth={4} fill="none" opacity={0.8} />)}
      </Svg>
      <Prop name="bird" x={birdX} y={260 + Math.sin(f / 8) * 12} size={60} flip />
      <Prop name="bird" x={birdX - 120} y={300 + Math.sin(f / 7 + 1) * 10} size={44} flip />
    </>
  );
};

const Heritage = ({ f }) => (
  <>
    <Svg>
      <defs><linearGradient id="sky-her" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bfe3f5" /><stop offset="1" stopColor="#f6efe0" /></linearGradient></defs>
      <rect width={W} height={H} fill="url(#sky-her)" />
      <Clouds f={f} items={[[250, 120, 0.7, 0.22], [1650, 90, 0.6, 0.18]]} />
      <Tree x={170} y={640} s={1.3} f={f} seed="her1" c={["#6aa86e", "#56925c"]} />
      <Tree x={1760} y={640} s={1.25} f={f} seed="her2" c={["#6aa86e", "#56925c"]} />
      {/* tường bao */}
      <rect x={0} y={520} width={W} height={130} fill="#e9c98a" />
      <rect x={0} y={510} width={W} height={18} fill="#8a5a3c" />
      {/* cổng tam quan: hai cổng bên */}
      {[-1, 1].map((s) => (
        <g key={s}>
          <rect x={960 + s * 420 - 120} y={330} width={240} height={320} fill="#efd08f" />
          <path d={`M ${960 + s * 420 - 60} 650 V 470 Q ${960 + s * 420} 420 ${960 + s * 420 + 60} 470 V 650 Z`} fill="#6b3f2a" />
          <path d={`M ${960 + s * 420 - 170} 340 Q ${960 + s * 420} 310 ${960 + s * 420 + 170} 340 L ${960 + s * 420 + 200} 300 Q ${960 + s * 420 + 160} 318 ${960 + s * 420 + 140} 300 L ${960 + s * 420 - 140} 300 Q ${960 + s * 420 - 160} 318 ${960 + s * 420 - 200} 300 Z`} fill="#4d3b36" />
          <path d={`M ${960 + s * 420 - 140} 300 Q ${960 + s * 420} 250 ${960 + s * 420 + 140} 300 Z`} fill="#5b4740" />
        </g>
      ))}
      {/* cổng giữa, mái cong hai tầng */}
      <rect x={760} y={260} width={400} height={390} fill="#f2d79a" />
      {[800, 1120].map((x) => <rect key={x} x={x - 16} y={260} width={32} height={390} fill="#b5452f" />)}
      <path d="M 870 650 V 420 Q 960 350 1050 420 V 650 Z" fill="#6b3f2a" />
      <path d="M 640 272 Q 960 228 1280 272 L 1330 214 Q 1290 240 1250 220 L 670 220 Q 630 240 590 214 Z" fill="#4d3b36" />
      <path d="M 670 220 Q 960 150 1250 220 Z" fill="#5b4740" />
      <path d="M 720 168 Q 960 136 1200 168 L 1240 124 Q 1206 144 1176 128 L 744 128 Q 714 144 680 124 Z" fill="#4d3b36" />
      <path d="M 744 128 Q 960 70 1176 128 Z" fill="#5b4740" />
      <rect x={880} y={180} width={160} height={46} rx={6} fill="#b5452f" />
      <text x={960} y={214} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={30} fill="#ffd23f">VĂN MIẾU</text>
      {/* sân lát đá */}
      <rect y={650} width={W} height={H - 650} fill="#e8dcc6" />
      {[700, 780, 880, 1000].map((y) => <path key={y} d={`M 0 ${y} H ${W}`} stroke="#d6c7ab" strokeWidth={3} />)}
      {Array.from({ length: 12 }, (_, i) => <path key={i} d={`M ${960 + (i - 6) * 170} 650 L ${960 + (i - 6) * 380} ${H}`} stroke="#d6c7ab" strokeWidth={3} />)}
      <Lantern x={700} y={276} f={f} seed="hl1" s={0.75} />
      <Lantern x={1220} y={276} f={f} seed="hl2" s={0.75} />
    </Svg>
  </>
);

const Hotel = ({ f }) => (
  <>
    <Svg>
      <rect width={W} height={H} fill="#f3ece2" />
      {Array.from({ length: 10 }, (_, i) => <rect key={i} x={i * 200 + 20} y={0} width={160} height={HZ} fill="#efe6d9" />)}
      <Floor c="#ebe5dc" line="#d9d0c2" planks={false} tiles />
      {/* đèn thả */}
      {[420, 960, 1500].map((x, i) => {
        const g = 0.35 + 0.15 * Math.max(0, Math.sin(f / 14 + i * 2));
        return (
          <g key={x}>
            <path d={`M ${x} 0 V 90`} stroke="#8a6a4a" strokeWidth={3} />
            <circle cx={x} cy={110} r={56} fill="#ffe6a3" opacity={g} />
            <path d={`M ${x - 34} 90 h 68 l 14 34 h -96 Z`} fill="#c9a24a" />
          </g>
        );
      })}
      {/* biển lễ tân */}
      <rect x={1040} y={190} width={540} height={110} rx={14} fill="#2b3650" />
      <text x={1310} y={244} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={44} fill="#e7c76a" letterSpacing="0.08em">LỄ TÂN</text>
      <text x={1310} y={282} textAnchor="middle" fontFamily={FONT} fontWeight={600} fontSize={26} fill="#cfd6e2" letterSpacing="0.2em">RECEPTION</text>
      {/* giá chìa khoá */}
      <rect x={1640} y={170} width={200} height={230} rx={10} fill="#8a6a4a" />
      {Array.from({ length: 9 }, (_, i) => <circle key={i} cx={1680 + (i % 3) * 60} cy={215 + Math.floor(i / 3) * 66} r={12} fill="#e7c76a" />)}
      {/* quầy */}
      <rect x={940} y={540} width={760} height={26} rx={10} fill="#5a3d28" />
      <rect x={956} y={566} width={728} height={160} rx={8} fill="#7a5236" />
      <rect x={956} y={600} width={728} height={10} fill="#e7c76a" />
      {/* tranh */}
      <rect x={300} y={180} width={300} height={200} rx={8} fill="#fff" stroke="#c9a24a" strokeWidth={10} />
      <path d="M 320 360 L 400 270 L 460 320 L 520 250 L 580 360 Z" fill="#9fc6b9" />
      <circle cx={530} cy={230} r={22} fill="#ffd23f" />
    </Svg>
    <Prop name="bellhop-bell" x={1120} y={548} size={86} />
    <Prop name="desktop-computer" x={1500} y={548} size={110} />
    <Prop name="potted-plant" x={80} y={720} size={190} f={f} sway={1.5} />
    <Prop name="luggage" x={760} y={700} size={130} />
  </>
);

// Họp trực tuyến: ba ô hình. Người đứng trong ô (bị cắt), bong bóng thoại hiện DƯỚI ô.
const TILE = { y: 124, h: 500, w: 580, xs: [50, 670, 1290] };
const ONLINE_SPOTS = Object.fromEntries(["left", "center", "right"].map((k, i) => [k, {
  x: TILE.xs[i] + TILE.w / 2, y: TILE.y + 680, s: 0.98, bubble: "below",
  clip: { x: TILE.xs[i], y: TILE.y, w: TILE.w, h: TILE.h, r: 22 },
}]));
const Online = ({ f, active, names = {} }) => {
  const rec = Math.floor(f / 20) % 2 === 0;
  const tileBg = [["#f6eee3", "#e5533d"], ["#e9eef4", "#2f5fb3"], ["#eef5ef", "#0f6e5a"]];
  return (
    <>
      <Svg>
        <rect width={W} height={H} fill="#1b2438" />
        <rect x={0} y={0} width={W} height={100} fill="#141b2b" />
        <circle cx={70} cy={50} r={12} fill={rec ? "#e5533d" : "#6b2a2a"} />
        <text x={96} y={62} fontFamily={FONT} fontWeight={700} fontSize={32} fill="#cfd6e2">Họp trực tuyến · 3 người</text>
        {[["#2b3650", "M -10 -8 v 16 M 0 -12 v 24 M 10 -8 v 16"], ["#2b3650", "M -14 -9 h 20 v 18 h -20 Z M 6 -4 l 10 -6 v 20 l -10 -6"], ["#e5533d", "M -16 4 q 16 -16 32 0"]].map(([bg, d], i) => (
          <g key={i} transform={`translate(${860 + i * 100} 50)`}>
            <circle r={32} fill={bg} />
            <path d={d} stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" />
          </g>
        ))}
        {TILE.xs.map((x, i) => {
          const k = ["left", "center", "right"][i];
          return (
            <g key={k}>
              <rect x={x} y={TILE.y} width={TILE.w} height={TILE.h} rx={22} fill={tileBg[i][0]} />
              <rect x={x + 40} y={TILE.y + 40} width={150} height={110} rx={8} fill="#fff" opacity={0.8} />
              <rect x={x + TILE.w - 170} y={TILE.y + 70} width={130} height={14} rx={6} fill={tileBg[i][1]} opacity={0.35} />
              <rect x={x + TILE.w - 160} y={TILE.y + 40} width={30} height={30} rx={4} fill={tileBg[i][1]} opacity={0.4} />
            </g>
          );
        })}
      </Svg>
      {/* khung, tên — vẽ ở lớp trên (actorsTop) để nằm trên người */}
    </>
  );
};
/** Lớp phủ của "online": viền ô sáng cho người nói + tên. Vẽ SAU lớp người. */
const OnlineTop = ({ active, names = {} }) => (
  <Svg>
    {TILE.xs.map((x, i) => {
      const k = ["left", "center", "right"][i];
      const on = active === k;
      return (
        <g key={k}>
          <rect x={x} y={TILE.y} width={TILE.w} height={TILE.h} rx={22} fill="none" stroke={on ? "#7ee2a8" : "#2b3650"} strokeWidth={on ? 8 : 4} />
          {names[k] && (
            <g>
              <rect x={x + 18} y={TILE.y + TILE.h - 64} width={names[k].length * 22 + 70} height={46} rx={12} fill="rgba(20,26,40,.75)" />
              <circle cx={x + 44} cy={TILE.y + TILE.h - 41} r={8} fill={on ? "#7ee2a8" : "#8a93a3"} />
              <text x={x + 62} y={TILE.y + TILE.h - 30} fontFamily={FONT} fontWeight={700} fontSize={28} fill="#fff">{names[k]}</text>
            </g>
          )}
        </g>
      );
    })}
  </Svg>
);

// ---------------------------------------------------------------- danh mục
export const SETS = {
  cafe: { name: "Quán cơm / quán nước", Back: Cafe, spots: SPOTS },
  shop: { name: "Cửa hàng, quầy thu ngân", Back: Shop, spots: SPOTS },
  office: { name: "Văn phòng", Back: Office, spots: SPOTS },
  meeting: { name: "Phòng họp có màn chiếu", Back: Meeting, spots: SPOTS },
  room: { name: "Phòng trọ", Back: Room, spots: SPOTS },
  home: { name: "Phòng khách gia đình", Back: Home, spots: SPOTS },
  kitchen: { name: "Bếp", Back: Kitchen, spots: SPOTS },
  campus: { name: "Lớp học", Back: Campus, spots: SPOTS },
  street: { name: "Phố, xe máy", Back: Street, spots: SPOTS },
  airport: { name: "Sân bay, quầy làm thủ tục", Back: Airport, spots: SPOTS },
  park: { name: "Công viên, đường chạy", Back: Park, spots: SPOTS },
  heritage: { name: "Di tích, cổng mái cong", Back: Heritage, spots: SPOTS },
  hotel: { name: "Sảnh lễ tân khách sạn", Back: Hotel, spots: SPOTS },
  online: { name: "Họp trực tuyến (3 ô hình)", Back: Online, Top: OnlineTop, spots: { ...ONLINE_SPOTS, det: { x: 1800, y: GROUND + 6, s: 0.5 } } },
};
export const SET_NAMES = Object.keys(SETS);
export const getSet = (name) => SETS[name] || SETS.room;
export const spotOf = (set, side) => getSet(set).spots[side] || getSet(set).spots.center;

/** <SetBack set f active names/> — vẽ nền của bối cảnh. */
export const SetBack = ({ set, f, active, names }) => {
  const S = getSet(set);
  return <S.Back f={f} active={active} names={names} />;
};
