// Subtitles.jsx — phụ đề tiếng Việt cho lời đọc tiếng Anh (#106) + phát mp3 lời đọc khi audio.voice = true.
// Câu thoại của nhân vật (line.who) trong module tự vẽ bong bóng (mod.ownSubtitles) thì không hiện ở thanh phụ đề.
import React from "react";
import { Audio, Sequence, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT } from "../core/theme.js";
import { msToFrames } from "../core/timing.js";
import { NAME_OF, COLOR_OF } from "../cast/stage.jsx";

// #135: line.keys = ["cụm từ chính", …] → tô vàng quét đúng lúc lời đọc đi tới (ước theo vị trí trong câu)
const renderKeys = (l, t) => {
  const sub = String(l.sub || "");
  if (!l.keys?.length) return sub;
  const out = [];
  let i = 0;
  const hits = l.keys.map((k) => ({ k, at: sub.indexOf(k) })).filter((h) => h.at >= 0).sort((a, b) => a.at - b.at);
  const dur = l.endMs - l.startMs;
  for (const h of hits) {
    if (h.at < i) continue;
    if (h.at > i) out.push(<span key={i}>{sub.slice(i, h.at)}</span>);
    const t0 = l.startMs + (h.at / Math.max(1, sub.length)) * dur * 0.9;
    const q = Math.max(0, Math.min(1, (t - t0) / 350));
    out.push(<span key={"k" + h.at} style={{ color: q > 0.5 ? "#172033" : "#fff", background: `linear-gradient(to right, #ffd23f ${q * 100}%, transparent ${q * 100}%)`, borderRadius: 6, padding: "0 4px" }}>{h.k}</span>);
    i = h.at + h.k.length;
  }
  if (i < sub.length) out.push(<span key="end">{sub.slice(i)}</span>);
  return out;
};

export const Subtitles = ({ lines = [], own = false, voice = false, slug, sceneId, speakers = false, audioDir = "audio/dp" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = (frame / fps) * 1000;
  const cur = lines.find((l) => t >= l.startMs && t < l.endMs + 250);
  const show = cur && cur.sub && !(own && cur.who);
  const op = show ? interpolate(t, [cur.startMs, cur.startMs + 150, cur.endMs + 100, cur.endMs + 250], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
  return (
    <>
      {voice && lines.map((l) => (
        <Sequence key={l.id} from={msToFrames(l.startMs, fps)} layout="none">
          <Audio src={staticFile(`${audioDir}/${slug}/${sceneId}-${l.id}.mp3`)} />
        </Sequence>
      ))}
      {show && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 58, display: "flex", justifyContent: "center", opacity: op, pointerEvents: "none" }}>
          <div style={{ maxWidth: 1560, padding: "12px 28px", borderRadius: 14, background: "rgba(20,26,40,0.82)", color: "#fff",
            fontFamily: FONT, fontSize: 42, fontWeight: 600, lineHeight: 1.3, textAlign: "center" }}>
            {speakers && cur.who && cur.who !== "det" && (
              <span style={{ display: "inline-block", marginRight: 14, padding: "2px 14px", borderRadius: 999, background: COLOR_OF(cur.who), color: "#fff", fontSize: 32, fontWeight: 800, verticalAlign: "2px" }}>{NAME_OF(cur.who)}</span>
            )}
            {renderKeys(cur, t)}
          </div>
        </div>
      )}
    </>
  );
};
