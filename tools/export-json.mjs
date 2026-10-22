// Xuất mọi kịch bản (từng tệp) ra một JSON để làm bảng Excel duyệt: node tools/export-json.mjs <out.json> <tệp .js>...
import fs from "fs"; import path from "path"; import { pathToFileURL } from "url";
// #110: độ dài mp3 thật (nếu đã chép thư mục audio/dp từ server sang) → thời lượng đúng theo giọng
const AUDIO_DAT = path.resolve("public/audio/dp/durations.dat");
const AUDIO_MS = (() => { try { return JSON.parse(fs.readFileSync(AUDIO_DAT, "utf8")); } catch { return {}; } })();
const [out, ...files] = process.argv.slice(2);
const lib = path.resolve("node_modules/.cache/check-lib.mjs");
const { REGISTRY, layoutScript } = await import(pathToFileURL(lib).href);
const SKIP = /^(illus|icon|icons|correct|countdown|highlight|n|of|truth|remaining|time|from|value|prefix|around|order|side|who)$|Illus|Icons$/;
const texts = (v, key = "") => {
  if (SKIP.test(key)) return [];
  if (typeof v === "string") return [v];
  if (typeof v === "number" && /^(value)$/.test(key)) return [String(v)];
  if (Array.isArray(v)) return v.flatMap((x) => texts(x, key));
  if (v && typeof v === "object") return Object.entries(v).flatMap(([k, x]) => texts(x, k));
  return [];
};
const res = [];
for (const f of files) {
  const s = (await import(pathToFileURL(path.resolve(f)).href)).default;
  const { scenes, total } = layoutScript(s, 30, AUDIO_MS);
  res.push({ id: s.id, hook: s.hook, unit: s.unit, notes: s.notes || "", total: total / 30,
    scenes: scenes.map((x) => ({ id: x.id, module: x.module, name: REGISTRY[x.module].name, family: REGISTRY[x.module].family, ref: x.ref || "",
      from: x.from / 30, dur: x.frames / 30, screen: texts(x.data).join(" · "), data: x.data, lines: x.lines || [] })) });
}
fs.writeFileSync(out, JSON.stringify(res));
console.log(res.length, "kịch bản");
