// Face.jsx — nét mặt người, vẽ trong toạ độ ĐẦU (tâm đầu = 0,0; bán kính 76). Một bảng tham số cho mọi nhân vật.
import React from "react";
import { INK } from "./geom.js";

/** 6 nét mặt chuẩn (+ "stern"). brow = [độ lệch đầu trong, đầu ngoài] (âm = nâng); look = hướng nhìn [-1..1]. */
export const EXPR = {
  neutral: { eye: "dot", brow: [0, 0], mouth: "smile", cheek: 0.45 },
  happy: { eye: "arc", brow: [-5, -3], mouth: "grin", cheek: 0.75 },
  surprised: { eye: "wide", brow: [-13, -10], mouth: "o", cheek: 0.3 },
  worried: { eye: "dot", brow: [-9, 3], mouth: "wavy", cheek: 0.3, look: [0, 0.4] },
  sad: { eye: "half", lid: 1, brow: [-8, 6], mouth: "frown", cheek: 0.15, look: [0, 0.6] },
  thinking: { eye: "dot", brow: [-1, -1], browR: [-9, -11], mouth: "side", cheek: 0.35, look: [0.7, -0.8] },
  stern: { eye: "half", lid: -1, brow: [6, -3], mouth: "flat", cheek: 0.2 },
};
export const EXPR_NAMES = ["neutral", "happy", "surprised", "worried", "sad", "thinking"];
export const EXPR_VI = { neutral: "bình thường", happy: "cười", surprised: "ngạc nhiên", worried: "lo", sad: "buồn", thinking: "nghĩ", stern: "nghiêm", wink: "nháy mắt", laugh: "cười to" };

const MOUTH = (m, c, dx) => {
  const st = { stroke: c, strokeWidth: 4.5, fill: "none", strokeLinecap: "round" };
  switch (m) {
    case "grin":
      return (
        <g>
          <path d={`M ${dx - 18} 30 Q ${dx} 33 ${dx + 18} 30 Q ${dx + 15} 52 ${dx} 52 Q ${dx - 15} 52 ${dx - 18} 30 Z`} fill={c} />
          <ellipse cx={dx} cy={46} rx={9} ry={4.5} fill="#e57373" />
        </g>
      );
    case "o":
      return <ellipse cx={dx} cy={41} rx={9} ry={11} fill={c} />;
    case "wavy":
      return <path d={`M ${dx - 14} 38 Q ${dx - 7} 32 ${dx} 38 Q ${dx + 7} 44 ${dx + 14} 38`} {...st} />;
    case "frown":
      return <path d={`M ${dx - 13} 43 Q ${dx} 32 ${dx + 13} 43`} {...st} />;
    case "side":
      return <path d={`M ${dx - 2} 39 Q ${dx + 10} 39 ${dx + 17} 32`} {...st} />;
    case "flat":
      return <path d={`M ${dx - 12} 38 L ${dx + 12} 38`} {...st} />;
    case 1:
      return <ellipse cx={dx} cy={38} rx={11} ry={6.5} fill={c} />;
    case 2:
      return (
        <g>
          <ellipse cx={dx} cy={40} rx={13} ry={12} fill={c} />
          <ellipse cx={dx} cy={46} rx={8} ry={5} fill="#e57373" />
        </g>
      );
    default:
      return <path d={`M ${dx - 14} 35 Q ${dx} 44 ${dx + 14} 35`} {...st} />;
  }
};

/** c.eye = màu con ngươi (tuỳ chọn, mặc định mực). <Face ex eyeOpen talk turn c>  — talk 1|2 thay miệng bằng hình miệng đang nói; turn -1..1 dịch nét mặt sang bên. */
export const Face = ({ ex, eyeOpen = 1, talk = 0, turn = 0, c }) => {
  const dx = turn * 12;
  const [lx, ly] = ex.look || [0, 0];
  return (
    <g>
      {[-1, 1].map((s) => {
        const cx = s * 25 + dx + lx * 3.5, cy = 4 + ly * 3;
        const far = turn !== 0 && s !== Math.sign(turn) ? 1 - Math.abs(turn) * 0.3 : 1;
        const b = s === 1 && ex.browR ? ex.browR : ex.brow;
        let eye;
        if (eyeOpen < 0.12 && ex.eye !== "arc") {
          eye = <path d={`M ${cx - 10} ${cy + 1} Q ${cx} ${cy + 7} ${cx + 10} ${cy + 1}`} stroke={INK} strokeWidth={4} fill="none" strokeLinecap="round" />;
        } else if (ex.eye === "arc") {
          eye = <path d={`M ${cx - 10} ${cy + 5} Q ${cx} ${cy - 9} ${cx + 10} ${cy + 5}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />;
        } else if (ex.eye === "wide") {
          eye = (
            <g>
              <ellipse cx={cx} cy={cy} rx={12 * far} ry={15 * eyeOpen} fill="#fff" />
              <ellipse cx={cx} cy={cy + 1} rx={7 * far} ry={8 * eyeOpen} fill={c.eye || INK} />
            </g>
          );
        } else if (ex.eye === "half") {
          // mí trên che nửa mắt; lid > 0 = sụp phía ngoài (buồn), lid < 0 = sụp phía trong (nghiêm)
          const lid = ex.lid ?? 0, yi = cy - 4 - lid * 4, yo = cy - 4 + lid * 4;
          eye = (
            <g>
              <ellipse cx={cx} cy={cy + 1} rx={8.5 * far} ry={11 * eyeOpen} fill={c.eye || INK} />
              <path d={`M ${cx - s * 12} ${yi} L ${cx + s * 12} ${yo} L ${cx + s * 12} ${cy - 16} L ${cx - s * 12} ${cy - 16} Z`} fill={c.skin} />
              <path d={`M ${cx - s * 12} ${yi} L ${cx + s * 12} ${yo}`} stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
            </g>
          );
        } else {
          eye = <ellipse cx={cx} cy={cy} rx={8.5 * far} ry={12 * eyeOpen} fill={c.eye || INK} />;
        }
        return (
          <g key={s}>
            {eye}
            <path d={`M ${s * 13 + dx} ${-24 + b[0]} L ${s * 37 + dx} ${-21 + b[1]}`} stroke={c.brow} strokeWidth={5} strokeLinecap="round" />
            <circle cx={s * 42 + dx} cy={30} r={11} fill={c.cheek} opacity={ex.cheek} />
          </g>
        );
      })}
      {MOUTH(talk > 0 ? talk : ex.mouth, c.mouth, dx)}
    </g>
  );
};
