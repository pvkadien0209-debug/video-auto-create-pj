// paths.js — quy ước thư mục public/ (giữ y hệt CSK001 / ActionOrchestrator)
// Tên file có "_" → thư mục = phần trước dấu "_" đầu tiên.
import { staticFile } from "remotion";

const prefixOf = (name) => (name.includes("_") ? name.split("_")[0] : null);

// "kd_vdA1.mp4" → video/kd/kd_vdA1.mp4   |  "abc.mp4" → video/abc.mp4
export const videoSrc = (name) => {
  if (!name) return null;
  const p = prefixOf(name);
  return staticFile(p ? `video/${p}/${name}` : `video/${name}`);
};

// "nhacnen_vuituoi" → audio/nhacnen/nhacnen_vuituoi.mp3  |  không "_" → audio/Khac/...
// Nếu name đã có đuôi (.mp3/.m4a/.wav) thì giữ nguyên đuôi.
export const audioSrc = (name) => {
  if (!name) return null;
  const file = /\.(mp3|m4a|wav|aac|ogg)$/i.test(name) ? name : `${name}.mp3`;
  const p = prefixOf(name);
  return staticFile(p ? `audio/${p}/${file}` : `audio/Khac/${file}`);
};

// "logo_brand-pvd.png" → assets/logo/logo_brand-pvd.png  |  không "_" → assets/khac/...
// URL http(s) được dùng thẳng.
export const assetSrc = (name) => {
  if (!name) return null;
  if (/^https?:\/\//.test(name)) return name;
  const p = prefixOf(name);
  return staticFile(p ? `assets/${p}/${name}` : `assets/khac/${name}`);
};
