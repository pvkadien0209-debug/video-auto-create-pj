> Ghi chú: hướng dẫn này viết cho các nhóm dựng module trong môi trường làm việc của Claude; các đường dẫn /tmp/... là đường dẫn tạm ở đó. Trên máy anh, thư mục gốc là `my-sta-video`.

# Guide for writing CSK004 video modules (DetPro lesson videos, Remotion 4.0.405, React 19, plain JSX)

Project root: /tmp/claude-0/-home-claude/4235599a-56e5-5c16-a85e-4a2d11384ce3/scratchpad/vid
Module code: src/rootComponents/CSK004/

## The owner's request (verbatim, Vietnamese)
"Tôi cần nhiều icon, hình ảnh minh họa hơn, module mở đầu phải hấp dẫn, kịch tính hơn. Làm thành 100 module"
→ Every module must look rich: use colour illustrations (<Illus>) and icons generously, purposeful motion. Openings must be dramatic and gripping.

## Read first (examples of the house style)
- core/theme.js (colours COLORS, TYPE sizes, SAFE area), core/ui.jsx (Stage, FitText, Icon, Kicker, Card, Marker, DrawArrow, Illus, IllusBadge, SpotScene), core/motion.js (fadeUp, pop, progress, idle, shake, flash, slam, zoom, typed, blink, flyIn), core/timing.js (readMs, plan, msToFrames).
- modules/open.jsx, modules/list.jsx, modules/quiz.jsx, modules/rel.jsx: existing modules = the pattern to follow.
- Spec of every module code (what it shows, data slots, limits): /mnt/user-data/outputs/c70/DetPro/research/2026-10-19-thu-vien-module-trinh-bay-video.md §3 (read the rows for your codes). Follow the spec's idea; you may add slots (e.g. `illus`) but keep the named slots.

## Module contract
Each family file exports one object, e.g. `export const REL2 = { "REL-03": {...}, ... }`. Each entry:
```js
"REL-03": { name: "Vòng lặp" /* Vietnamese name */, family: "REL", Component, limits: { nodes: [3, 5] }, estimate: (data, ctx) => ms }
```
- `Component({ data, ctx })`: ctx = { level: "B1", accent: "#0f6e5a", sfx: {} }. Use `useCurrentFrame()` / `useVideoConfig()`; frame 0 = scene start. Wrap in `<Stage accent={ctx.accent}>` (or `bg={COLORS.ink}` for dark dramatic scenes).
- `estimate(data, ctx)` returns the milliseconds the scene needs in TEXT-ONLY mode: everything has appeared AND the viewer had time to read it (use readMs / plan; Vietnamese 3 syllables/s, English lang:"en"). Animations must finish inside that time. The engine adds a beat after and an 8-frame crossfade.
- Text is Vietnamese (English only for quiz questions/answers and sample sentences). No text in the lowest 190 px (subtitle band) and nothing outside the safe area (x 96..1824, y 120..890 of 1920x1080). Minimum font size 40 px; body ≥ 44 px.
- Colours: only COLORS tokens; yellow `marker` only for highlights/answers.
- Illustrations: `<Illus name="..."/>` loads public/illus/<name>.svg (1585 Fluent Emoji Flat names, list in core/illus-names.js — grep it, e.g. `grep -o '"[a-z-]*money[a-z-]*"' core/illus-names.js`). Icons: `<Icon name="..."/>` = any Lucide name (core/icons.js). Let data choose illustrations via slots like `illus`, `icon`, with sensible defaults.
- No new npm packages. No Lottie, no external URLs, no Math.random() (use deterministic values; `random("seed")` from remotion is OK). No CSS animations/transitions: every motion is computed from the frame.
- Mock phone/email/chat UIs must be generic (no real app logos or brand colours).
- Numbers/statistics modules must show a `source` line.

## Samples (for the gallery)
In data/samples/<yourfile>.js export `SAMPLES_<CONST> = { "REL-03": { thuong: {...}, dai: {...} }, ... }`:
`thuong` = typical data, `dai` = the longest data allowed by limits (tests overflow). Take the text from real DetPro lessons (Vietnamese) in /tmp/claude-0/-home-claude/4235599a-56e5-5c16-a85e-4a2d11384ce3/scratchpad/u3/soan/units/*/*.json (article.body[].paragraphs[].text, questions[]); do not invent facts or numbers — numbers must come from a lesson that cites them (e.g. units/healthy-eaters/*.json meta.sources).

## Test (required)
1. From project root: `npx remotion compositions src/index.js --browser-executable=/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell | grep G-<FAM>` (bundles without errors).
2. Render stills: `node stills.mjs '^G-(REL-03|REL-04)' 0.9` → out/<id>.png (scale 0.5). Also check an early frame, e.g. `node stills.mjs '^G-REL-03' 0.3`, to see the animation mid-way.
3. LOOK at the PNGs with the Read tool (combine several into one sheet with PIL to save effort). Fix overflow, overlaps, tiny text, empty-looking layouts, missing illustrations. Repeat until clean.
CPU has 2 cores shared with other workers: render only your own modules, scale 0.5.

## Do not
- Do not edit core/, script/, R_CSK004.jsx, modules/index.js, data/samples.js or any other worker's files. If you need a helper, define it inside your own file.
- Report back: list of codes done with one line each (what it looks like), anything you could not do.
