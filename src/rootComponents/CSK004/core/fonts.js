// fonts.js — nạp Be Vietnam Pro (OFL, có sẵn ở public/fonts) cho video CSK004. Đủ dấu tiếng Việt.
// #118: KHÔNG dùng delayRender nữa. Trên một số máy Windows, lời hẹn nạp phông không bao giờ được "trả" nên
// render dừng sau 118 s ("Nạp phông Be Vietnam Pro" ... not cleared). Nay khai báo @font-face bằng CSS
// (tệp nằm sẵn trên máy, nạp gần như tức thì) và không chặn khung hình nào.
import { staticFile } from "remotion";

const WEIGHTS = { 400: "Regular", 600: "SemiBold", 700: "Bold", 800: "ExtraBold" };
// #130: phông viết tay Patrick Hand (OFL, có dấu tiếng Việt) cho bảng vẽ BOARD-01 — 3 tệp theo dải ký tự
const HAND_SUBSETS = {"latin": "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD", "latin-ext": "U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF", "vietnamese": "U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB"};
let loaded = false;

export const ensureFonts = () => {
  if (loaded || typeof document === "undefined") return;
  loaded = true;
  const css = Object.entries(WEIGHTS)
    .map(([w, name]) =>
      `@font-face{font-family:"Be Vietnam Pro";font-weight:${w};font-style:normal;font-display:swap;` +
      `src:url("${staticFile(`fonts/Be_Vietnam_Pro/BeVietnamPro-${name}.ttf`)}") format("truetype");}`)
    .join("\n") + "\n" +
    Object.entries(HAND_SUBSETS)
      .map(([sub, range]) =>
        `@font-face{font-family:"Patrick Hand";font-weight:400;font-style:normal;font-display:swap;unicode-range:${range};` +
        `src:url("${staticFile(`fonts/Patrick_Hand/patrick-hand-${sub}-400-normal.woff2`)}") format("woff2");}`)
      .join("\n");
  const style = document.createElement("style");
  style.setAttribute("data-csk004-fonts", "1");
  style.textContent = css;
  document.head.appendChild(style);
  // Gọi nạp sẵn (không chờ) để khung hình đầu đã có phông
  Object.keys(WEIGHTS).forEach((w) => document.fonts?.load?.(`${w} 32px "Be Vietnam Pro"`).catch(() => {}));
  document.fonts?.load?.(`400 32px "Patrick Hand"`, "Cột giờ của Thảo").catch(() => {});
  console.log("CSK004: phông khai báo bằng CSS (không delayRender)");
};
