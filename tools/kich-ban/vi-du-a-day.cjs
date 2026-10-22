// #135 — Kịch bản a-day bản 5: Đét đứng bên + MỘT tấm bảng trắng chung 10 ô (5 × 2), đi theo tuần của Thảo.
// Cảnh nhân vật = khung ảnh dán trên bảng (vignette). Từ khoá tô vàng đúng lúc đọc (hl trên bảng, keys ở phụ đề).
// Chạy: node build.cjs <tệp kịch bản cũ .json> <tệp ra .js>
const fs = require("fs");
const old = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const OUT = process.argv[3];
const OS = (id) => old.scenes.find((s) => s.id === id);

// ---------- bảng ----------
const CW = 1728, CH = 770, GX = 240, GY = 320;
const ORG = { A: [0, 0], B: [1, 0], C: [2, 0], D: [3, 0], E: [4, 0], F: [0, 1], G: [1, 1], H: [2, 1], I: [3, 1], J: [4, 1] };
const frames = Object.fromEntries(Object.entries(ORG).map(([k, [c, r]]) => [k, [c * (CW + GX), r * (CH + GY), CW, CH]]));
const at = (cell) => (x, y) => [frames[cell][0] + x, frames[cell][1] + y];
const BOARD = "bang-trang";

// ---------- trợ giúp ----------
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });
const T = (cell, id, text, x, y, size, when, extra = {}) => { const [X, Y] = at(cell)(x, y); return { id, t: "text", text, x: X, y: Y, size, at: when, ...extra }; };
const I = (cell, id, name, x, y, size, when, extra = {}) => { const [X, Y] = at(cell)(x, y); return { id, t: "illus", name, x: X, y: Y, size, at: when, ...extra }; };
const BX = (cell, id, x, y, w, h, when, extra = {}) => { const [X, Y] = at(cell)(x, y); return { id, t: "box", x: X, y: Y, w, h, at: when, ...extra }; };
const AR = (cell, id, a, b, when, extra = {}) => ({ id, t: "arrow", from: at(cell)(...a), to: at(cell)(...b), at: when, ...extra });
const V = (cell, id, x, y, w, data, when, caption, icon, module = "SCENE-01") => { const [X, Y] = at(cell)(x, y); return { id, t: "vignette", module, x: X, y: Y, w, data, at: when, caption, icon }; };
const TITLE = (cell, id, text, when, extra) => T(cell, id, text, 50, 24, 84, when, extra);
const shot = (when, fit, extra = {}) => ({ at: when, fit, ...extra });
const B = (id, data, lines, extra = {}) => ({ id, module: "BOARD-01", data: { board: BOARD, ...data }, lines, ...extra });
const shift = (items, dx, dy) => items.map((it) => {
  const o = { ...it };
  if (o.x != null) o.x += dx; if (o.y != null) o.y += dy;
  for (const k of ["from", "to"]) if (o[k]) o[k] = [o[k][0] + dx, o[k][1] + dy];
  if (o.pts) o.pts = o.pts.map((p) => [p[0] + dx, p[1] + dy]);
  return o;
});
// vị trí cũ (bản đồ 2 × 2 có khe) → ô mới
const OLD = { A: [0, 0], B: [1968, 0], C: [0, 1090], D: [1968, 1090] };
const moveOld = (sceneId, from, to) => shift(OS(sceneId).data.items, frames[to][0] - OLD[from][0], frames[to][1] - OLD[from][1]);

const scenes = [];

// ===================== Ô A — Mở: con số neo + Thảo, tối thứ Hai =====================
scenes.push(B("s00", { shots: [shot(0, "A", { move: "cut" })], items: [
  T("A", "a-16", "16 giờ", 60, 150, 200, "l1:sixteen", { color: "accent", hl: [{ text: "16 giờ", at: "l1:sixteen+500" }] }),
  T("A", "a-16b", "sau giờ làm, mỗi ngày", 70, 400, 56, "l1:after work"),
  T("A", "a-2", "Ta tưởng: 2 giờ?", 70, 500, 52, "l2:two", { color: "muted" }),
  { id: "a-2x", t: "strike", over: "a-2", at: "l2:two+700" },
  T("A", "a-src", "Nguồn: Arnold Bennett, How to Live on 24 Hours a Day (1908), chương IV", 60, 720, 28, "l1", { font: "base", color: "muted", enter: "fade" }),
] }, [
  L("l1", "det", "Sixteen hours. That is how much time an office worker owns after work, says Arnold Bennett.", "Mười sáu giờ. Arnold Bennett bảo đó là quỹ thời gian người đi làm có sau giờ tan sở.", { keys: ["Mười sáu giờ"] }),
  L("l2", "det", "Most of us think we own about... two.", "Còn ta cứ tưởng mình chỉ có... chừng hai.", { keys: ["chừng hai"] }),
]));

const thaoRoom = { ...OS("s01").data, label: undefined, camera: [{ at: "l3", shot: "close", on: "thao", move: "push" }, { at: "l5", shot: "wide", move: "push" }] };
thaoRoom.actors = thaoRoom.actors.filter((a) => a.id !== "det");
scenes.push(B("s01", { shots: [shot(0, "A", { move: "cut" }), shot("l1", ["a-thao"], { zoom: 1.35, ms: 700 }), shot("l5", "A", { ms: 700 })], items: [
  V("A", "a-thao", 880, 110, 800, thaoRoom, "l1", "Tối thứ Hai", "mobile-phone"),
  T("A", "a-10", "10 phút → 23:00", 920, 650, 56, "l4:almost eleven", { hl: [{ text: "23:00", at: "l4:eleven" }] }),
  T("A", "a-kieu", "“Ngày xuân con én đưa thoi”", 60, 600, 54, "l6:spring", { color: "accent" }),
] }, [
  L("l1", "det", "Meet Thảo.", "Đây là Thảo."),
  L("l2", "det", "Office worker by day, phone-scrolling champion by night. It is Monday night.", "Ngày đi làm, tối về thành vô địch lướt điện thoại. Hôm ấy là tối thứ Hai.", { keys: ["vô địch lướt điện thoại"] }),
  L("l3", "thao", "Dinner's done. Just ten minutes on my phone.", "Ăn tối xong rồi. Lướt điện thoại mười phút thôi.", { face: "happy" }),
  L("l4", "det", "Ten minutes, she said. Now it is almost eleven.", "Mười phút, cô bảo. Giờ đã gần mười một giờ.", { keys: ["gần mười một giờ"] }),
  L("l5", "thao", "Oh no. And that book is still on the table.", "Ôi. Cuốn sách mua tháng trước vẫn nằm trên bàn.", { face: "worried" }),
  L("l6", "det", "Nguyen Du wrote: spring days fly like a swallow. Thảo's evenings fly even faster.", "Nguyễn Du viết: “Ngày xuân con én đưa thoi.” Buổi tối của Thảo còn bay nhanh hơn."),
], { sfx: [{ at: "l1", key: "pop", offsetMs: 300 }, { at: "l4", to: "l4", key: "tich-tac-dai" }] }));
scenes[1].data.items[0].data.actors = scenes[1].data.items[0].data.actors.map((a) => (a.id === "thao" ? { ...a, enter: "pop", at: "l1" } : a));

// ===================== Ô B — Câu hỏi chính, Bennett, không phải/mà là, bản đồ tuần =====================
scenes.push(B("s02", { shots: [shot(0, "A", { move: "cut" }), shot(150, "B", { ms: 900 })], items: [
  T("B", "b-q", "Ngày bên trong ngày là gì?", 50, 24, 84, "l1:within", { hl: [{ text: "bên trong", at: "l1:within" }] }),
  T("B", "b-mis", "Hết giờ làm = hết ngày", 60, 160, 56, "l3:ends", { color: "muted" }),
  { id: "b-misx", t: "strike", over: "b-mis", at: "l3:biggest" },
  T("B", "b-big", "← “sai lầm lớn nhất”", 700, 160, 52, "l3:biggest", { color: "coral" }),
  T("B", "b-no", "Không phải: nhồi thêm việc", 60, 270, 52, "l4:cramming", { color: "muted" }),
  { id: "b-nox", t: "strike", over: "b-no", at: "l4:suitcase" },
  T("B", "b-yes", "Mà là: tự chọn giờ của mình", 60, 360, 58, "l5:yours", { color: "accent", hl: [{ text: "tự chọn", at: "l5:choosing" }] }),
] }, [
  L("l1", "det", "So what on earth is a day within a day?", "Vậy rốt cuộc “một ngày bên trong một ngày” là cái gì?", { keys: ["một ngày bên trong một ngày"] }),
  L("l2", "det", "Bennett, a writer from more than a hundred years ago, starts with how we see the day.", "Bennett, ông nhà văn từ hơn trăm năm trước, mở đầu bằng cách ta nhìn một ngày."),
  L("l3", "det", "We think the day ends when work ends. He calls that the biggest mistake.", "Ta nghĩ hết giờ làm là hết ngày. Ông gọi đó là sai lầm lớn nhất.", { keys: ["sai lầm lớn nhất"] }),
  L("l4", "det", "Relax, it does not mean cramming more tasks into your evening, like stuffing a suitcase.", "Khoan hoảng. Nó không phải là nhồi thêm việc vào buổi tối, kiểu nhồi vali đến bung khoá."),
  L("l5", "det", "It means knowing those hours are yours, and choosing what to do with them.", "Mà là biết mấy giờ ấy là của mình, rồi tự chọn dùng vào đâu.", { keys: ["của mình", "tự chọn"] }),
]));
const days = [["T2", "tối"], ["T3", "sáng"], ["T3", "tối"], ["T4", "sáng"], ["T4", "tối"], ["T5", "17:00"]];
scenes.push(B("s03", { shots: [shot(0, "B", { move: "cut" })], items: [
  T("B", "b-wk", "6 chặng · 1 tuần của Thảo", 60, 470, 56, "l1:six", { hl: [{ text: "1 tuần", at: "l1:week" }] }),
  ...days.map(([d, p], i) => BX("B", `b-d${i}`, 60 + i * 270, 560, 240, 110, `l2+${i * 260}`, { color: i === 0 ? "muted" : "ink", stroke: 4 })),
  ...days.map(([d, p], i) => T("B", `b-dt${i}`, `${d} ${p}`, 80 + i * 270, 585, 48, `l2+${i * 260 + 120}`)),
] }, [
  L("l1", "det", "We will follow one week in Thảo's life, in six stops. Fasten your seatbelt.", "Mình đi theo một tuần của Thảo, qua sáu chặng. Thắt dây an toàn nhé.", { keys: ["một tuần của Thảo"] }),
  L("l2", "det", "Tuesday morning, Tuesday night, Wednesday morning, Wednesday night, and Thursday at five.", "Sáng thứ Ba, tối thứ Ba, sáng thứ Tư, tối thứ Tư, và năm giờ chiều thứ Năm."),
]));

// ===================== Ô C — Chặng 1, sáng thứ Ba ở công ty =====================
const office = { ...OS("s05").data, label: undefined, camera: [{ at: "l4", shot: "close", on: "thao", move: "push" }, { at: "l7", shot: "close", on: "thao", move: "cut" }, { at: "l8", shot: "wide", move: "cut" }] };
office.actors = office.actors.filter((a) => a.id !== "det").map((a) => (a.id === "dung" ? { ...a, enter: "pop", at: "l2" } : a));
scenes.push(B("s05", { shots: [shot(0, "B", { move: "cut" }), shot(150, "C", { ms: 900 }), shot("l3", ["c-off"], { zoom: 1.35, ms: 700 }), shot("l8", "C", { ms: 700 })], items: [
  TITLE("C", "c-t", "① Sáng thứ Ba: phần bị quên", "l1:tuesday"),
  V("C", "c-off", 880, 150, 800, office, "l1:office", "Sáng thứ Ba · công ty", "office-building"),
  T("C", "c-w", "Ở công ty: kể đủ 3 việc", 60, 200, 54, "l8:office", { hl: [{ text: "3 việc", at: "l8:full" }] }),
  T("C", "c-e", "Sau giờ làm: “chẳng có gì”", 60, 300, 54, "l8:evening", { color: "coral", hl: [{ text: "“chẳng có gì”", at: "l8:nothing" }] }),
] }, [
  L("l1", "det", "First stop: Tuesday morning, at the office.", "Chặng một: sáng thứ Ba, ở công ty.", { keys: ["sáng thứ Ba"] }),
  L("l2", "det", "And this is Dũng, the colleague at the next desk. A professional question-asker.", "Còn đây là Dũng, đồng nghiệp bàn bên, chuyên gia hỏi han."),
  L("l3", "dung", "Morning, Thảo! How was your day yesterday?", "Chào Thảo! Hôm qua của chị thế nào?"),
  L("l4", "thao", "Busy! Two meetings, a new client, and a report for the boss.", "Bận lắm! Hai cuộc họp, một khách mới, thêm báo cáo cho sếp.", { face: "happy" }),
  L("l5", "dung", "And after work? What did you do?", "Thế còn sau giờ làm? Chị làm gì?"),
  L("l6", "thao", "After work? Oh... nothing much. I just went home.", "Sau giờ làm á? Ờ... chẳng có gì. Về nhà thôi.", { face: "thinking" }),
  L("l7", "det", "Did you catch that?", "Nghe thấy không?"),
  L("l8", "det", "The office part gets a full report. The evening gets one word: nothing.", "Chuyện công ty kể đủ như báo cáo. Buổi tối chỉ được một chữ: chẳng có gì.", { keys: ["chẳng có gì"] }),
], { sfx: [{ at: "l2", key: "pop", offsetMs: 900 }] }));
scenes.push(B("s06", { shots: [shot(0, "C", { move: "cut" })], items: [
  I("C", "c-box", "takeout-box", 70, 420, 120, "l1:leftovers"),
  T("C", "c-left", "16 giờ = đồ ăn thừa?", 220, 450, 58, "l1:sixteen", { hl: [{ text: "đồ ăn thừa", at: "l1:leftovers" }] }),
  T("C", "c-plan", "Không kế hoạch → ôi thiu", 70, 580, 48, "l2:plans", { color: "muted", hl: [{ text: "ôi thiu", at: "l2:stale" }] }),
] }, [
  L("l1", "det", "Many of us treat work as the whole day, and the other sixteen hours as leftovers in the fridge.", "Nhiều người coi giờ làm là cả ngày, còn mười sáu giờ kia là đồ ăn thừa trong tủ lạnh.", { keys: ["đồ ăn thừa"] }),
  L("l2", "det", "And who makes plans for leftovers? Nobody. So they quietly go stale.", "Mà đồ thừa thì ai lên kế hoạch? Chẳng ai. Thế là nó cứ lặng lẽ... ôi thiu."),
]));

// ===================== Ô D — Ai hầu ai? (bảng cũ ô A) =====================
const s07 = OS("s07"), s07b = OS("s07b");
scenes.push(B("s07", { shots: [shot(0, "C", { move: "cut" }), shot(150, "D", { ms: 900 })], items: moveOld("s07", "A", "D") }, s07.lines));
scenes.push(B("s07b", { shots: [shot(0, "D", { move: "cut" })], items: moveOld("s07b", "A", "D") }, s07b.lines));
// tô vàng thêm cho chữ cũ
for (const it of scenes.at(-2).data.items) if (it.id === "a-title") it.hl = [{ text: "Ai hầu ai?", at: "l2:whom" }];
for (const it of scenes.at(-1).data.items) if (it.id === "a-23") it.hl = [{ text: "2/3", at: "l3:two thirds" }];

// ===================== Ô E — Một ngày bên trong một ngày (bảng cũ ô B) =====================
const s08line = OS("s08").lines[0];
const s09a = OS("s09a"), s09 = OS("s09"), s09b = OS("s09b");
scenes.push(B("s09a", { shots: [shot(0, "D", { move: "cut" }), shot(150, "E", { ms: 900 })], items: moveOld("s09a", "B", "E") }, [
  L("l0", "det", "Second stop. If work isn't the whole day, what on earth is the rest?", "Chặng hai. Giờ làm không phải cả ngày, vậy phần còn lại là cái gì?"),
  ...s09a.lines,
]));
scenes.push(B("s09", { shots: s09.data.shots, items: moveOld("s09", "B", "E") }, s09.lines.map((l) => (l.id === "l3" ? { ...l, keys: ["Bạn là chủ"] } : l))));
scenes.at(-1).data.shots = [shot(0, "E", { move: "cut" }), shot("l3:boss", ["b-16", "b-crown", "b-boss"], { zoom: 1.25 }), shot("l4", "E")];
for (const it of scenes.at(-1).data.items) if (it.id === "b-boss") it.hl = [{ text: "bạn là chủ", at: "l3:boss+500" }];
scenes.push(B("s09b", { shots: [shot(0, "E", { move: "cut" })], items: moveOld("s09b", "B", "E") }, s09b.lines.map((l) => ({ ...l, keys: ["ngày thứ hai bắt đầu"] }))));

// ===================== Đét "Khoan đã!" — toàn màn (tối thứ Ba) =====================
scenes.push({ ...OS("s11"), transition: { type: "whip", frames: 5, dir: 1 } });

// ===================== Ô F — Chặng 3, vẫn tối thứ Ba: "mệt rồi?" =====================
const tired = { ...OS("s12a").data, label: undefined, camera: [{ at: "l2", shot: "medium", on: "thao" }, { at: "l3", shot: "close", on: "thao", move: "push" }] };
scenes.push(B("s12", { shots: [shot(0, "F", { move: "cut" }), shot("l2", ["f-v"], { zoom: 1.35, ms: 700 }), shot("l4", "F", { ms: 700 })], items: [
  TITLE("F", "f-t", "③ Tối thứ Ba: mệt rồi?", "l1:third"),
  V("F", "f-v", 880, 150, 800, tired, "l1:evening", "Tối thứ Ba · nhà", "tired-face"),
  T("F", "f-q", "“Tối học thêm → mai làm kém?”", 60, 200, 52, "l3:worse", { color: "coral" }),
  T("F", "f-a", "Bennett: không.", 60, 300, 64, "l4:no", { color: "accent", hl: [{ text: "không", at: "l4:no" }] }),
] }, [
  L("l1", "det", "Third stop: that same Tuesday evening. Thảo has a fair question.", "Chặng ba: vẫn tối thứ Ba ấy. Thảo có một câu hỏi rất thật."),
  L("l2", "thao", "A day within a day sounds nice.", "Một ngày bên trong một ngày nghe hay đấy.", { face: "thinking" }),
  L("l3", "thao", "But after work I'm exhausted. If I study at night, won't I do worse tomorrow?", "Nhưng tan làm là mình kiệt sức. Tối học thêm thì mai làm kém đi thì sao?", { face: "worried" }),
  L("l4", "det", "Bennett's answer is no. Using your mind in the evening does not weaken you at work.", "Bennett trả lời: không. Dùng trí óc buổi tối không làm bạn yếu đi lúc làm việc.", { keys: ["không"] }),
]));
scenes.push(B("s14", { shots: [shot(0, "F", { move: "cut" })], items: [
  T("F", "f-l0", "Tan làm, Thảo vẫn:", 60, 410, 52, "l1:look"),
  I("F", "f-i1", "newspaper", 70, 480, 70, "l2:news"), T("F", "f-l1", "đọc tin", 150, 490, 48, "l2:news+200"),
  I("F", "f-i2", "speech-balloon", 330, 480, 70, "l2:group chat"), T("F", "f-l2", "cãi nhau 1 tiếng", 410, 490, 48, "l2:hour"),
  I("F", "f-i3", "soccer-ball", 70, 570, 70, "l3:football"), T("F", "f-l3", "xem phân tích bóng đá", 150, 580, 48, "l3:football+200"),
  T("F", "f-k", "→ chỉ chưa có việc mình chọn", 60, 670, 50, "l4:energy", { color: "accent", hl: [{ text: "việc mình chọn", at: "l4:chose" }] }),
] }, [
  L("l1", "det", "Now look at what our exhausted Thảo still manages after work.", "Giờ nhìn xem cô Thảo “kiệt sức” của chúng ta tan làm vẫn làm được gì."),
  L("l2", "det", "She reads the news. She argues in a group chat for a whole hour, full of fighting spirit!", "Đọc tin tức. Cãi nhau trong nhóm chat nguyên một tiếng, khí thế bừng bừng!"),
  L("l3", "det", "She watches a long football analysis, as serious as a national coach.", "Xem phân tích trận bóng say sưa như huấn luyện viên đội tuyển."),
  L("l4", "det", "Your mind still has energy. It just hasn't been given a job you chose.", "Đầu óc chưa cạn, chỉ chưa được giao một việc mình chọn.", { keys: ["một việc mình chọn"] }),
]));
scenes.push(B("s15", { shots: [shot(0, "F", { move: "cut" }), shot("l1", ["f-c1", "f-c2"], { zoom: 1.2, ms: 600 }), shot("l2", "F", { ms: 600 })], items: [
  I("F", "f-c0", "bed", 880, 685, 70, "l1:exhausted"),
  T("F", "f-c1", "Kiệt sức thật → nghỉ", 960, 690, 44, "l1:sick", { hl: [{ text: "nghỉ", at: "l1:rest" }] }),
  T("F", "f-c2", "Tự quan sát vài tuần", 880, 750, 44, "l2:differs", { color: "muted" }),
] }, [
  L("l1", "det", "Of course, some days you really are exhausted. A sick child, an urgent project. On those days, rest is right.", "Tất nhiên, có ngày kiệt sức thật: con ốm, dự án gấp. Những ngày ấy, nghỉ là đúng.", { keys: ["nghỉ là đúng"] }),
  L("l2", "det", "Energy differs from person to person. Watch yourself for a few weeks.", "Sức mỗi người khác nhau. Tự quan sát vài tuần."),
]));

// ===================== Ô G — Chặng 4, sáng thứ Tư trên xe buýt =====================
const bus = { ...OS("s18").data };
scenes.push(B("s18", { shots: [shot(0, "F", { move: "cut" }), shot(150, "G", { ms: 900 }), shot("a1", ["g-v"], { zoom: 1.35, ms: 700 }), shot("l3", "G", { ms: 700 })], items: [
  TITLE("G", "g-t", "④ Sáng thứ Tư: trên xe buýt", "l1:wednesday"),
  T("G", "g-m", "Thân lên xe, hồn còn trên giường", 60, 150, 50, "l1:body", { color: "muted" }),
  V("G", "g-v", 880, 150, 800, bus, "l2:same bus", "40 phút, cùng một chuyến", "bus", "SCENE-03"),
  T("G", "g-a", "Dũng: “chuyến này chưa tính”", 60, 300, 48, "a1:count", { color: "coral" }),
  T("G", "g-b", "Thảo: ngày của mình đã bắt đầu", 60, 400, 48, "b1:podcast", { color: "accent", hl: [{ text: "đã bắt đầu", at: "l3:started" }] }),
  T("G", "g-k", "Buổi sáng cũng là ngày của bạn", 60, 560, 58, "l4:morning", { hl: [{ text: "ngày của bạn", at: "l4:your day" }] }),
] }, [
  L("l1", "det", "Fourth stop: Wednesday morning. Bennett saw people ride to work half asleep. Body on the bus, soul still in bed.", "Chặng bốn: sáng thứ Tư. Bennett thấy người ta đi làm mà mụ mị. Thân lên xe, hồn còn nằm trên giường."),
  L("l2", "det", "Same bus, same forty minutes. Dũng on the left, Thảo on the right.", "Cùng một chuyến xe, cùng bốn mươi phút. Bên trái là Dũng, bên phải là Thảo."),
  L("a1", "dung", "This ride doesn't count. Videos until my stop.", "Chuyến này chưa tính. Lướt video cho hết đường."),
  L("a2", "dung", "At work already, and I still feel sluggish.", "Đến công ty rồi mà vẫn uể oải.", { face: "sad" }),
  L("b1", "thao", "I picked this podcast last night.", "Bài podcast này mình chọn từ tối qua.", { face: "happy" }),
  L("b2", "thao", "Or I look out and think: what do I want tonight?", "Hoặc nhìn đường, nghĩ tối nay muốn làm gì cho mình.", { face: "thinking" }),
  L("l3", "det", "Both arrive. But Thảo walks in with her own day already started.", "Cả hai cùng tới. Nhưng Thảo bước vào khi ngày của mình đã bắt đầu.", { keys: ["đã bắt đầu"] }),
  L("l4", "det", "The morning before work is still your day, not waiting time.", "Buổi sáng trước giờ làm vẫn là ngày của bạn, không phải giờ chờ.", { keys: ["ngày của bạn"] }),
]));

// ===================== Ô H — Chặng 5, tối thứ Tư: cột giờ (bảng cũ ô C) =====================
const s20 = OS("s20");
const hItems = moveOld("s20", "C", "H").map((it) => (it.id === "c-mine" ? { ...it, hl: [{ text: "của mình", at: "l4:mine" }] } : it.id === "c-title" ? { ...it, text: "⑤ Tối thứ Tư: cột giờ", at: "l0:wednesday" } : it));
scenes.push(B("s20", { shots: [shot(0, "G", { move: "cut" }), shot(150, "H", { ms: 900 }), shot("l4:mine", ["c-e1", "c-mine", "c-89"], { zoom: 1.5, ms: 900 }), shot("l5", "H", { ms: 900 })], items: hItems }, [
  L("l0", "det", "Fifth stop: Wednesday night. How does Thảo find her own hours? Like a treasure hunt: she draws the map.", "Chặng năm: tối thứ Tư. Thảo tìm giờ của mình thế nào? Như đi tìm kho báu: vẽ bản đồ."),
  ...s20.lines.map((l) => (l.id === "l4" ? { ...l, keys: ["của mình"] } : l)),
], { sfx: [{ at: "l1", key: "giay-sot-soat", offsetMs: 1500 }] }));
scenes.push(B("s21", { shots: [shot(0, "H", { move: "cut" })], items: [
  T("H", "h-s1", "Ngày riêng dài hơn tưởng", 60, 690, 46, "l1:surprise", { hl: [{ text: "dài hơn tưởng", at: "l1:longer" }] }),
  T("H", "h-s2", "Hết quãng? → rút ngắn một việc", 60, 640, 46, "l2:no free slot", { color: "muted" }),
] }, OS("s21").lines.slice(0, 1).concat([L("l2", "det", "Others find no free slot. Then first, shorten one fixed task. Don't blame yourself.", "Có người thấy không còn quãng nào. Khi đó, rút ngắn một việc cố định trước, đừng tự trách.")])));

// ===================== Ô I — Chặng 6, chiều thứ Năm 17:00 + câu mở ngày thứ hai (bảng cũ ô D) =====================
const five = { ...OS("s25").data, label: undefined, camera: [{ at: "l3", shot: "medium", on: "thao", move: "push" }, { at: "l4", shot: "wide", move: "cut" }] };
five.actors = five.actors.filter((a) => a.id !== "det");
scenes.push(B("s25", { shots: [shot(0, "H", { move: "cut" }), shot(150, "I", { ms: 900 }), shot("l2", ["i-v"], { zoom: 1.35, ms: 700 }), shot("l5", "I", { ms: 700 })], items: [
  TITLE("I", "i-t", "⑥ Chiều thứ Năm, 17:00", "l1:thursday"),
  V("I", "i-v", 880, 150, 800, five, "l1:five", "17:00 · công ty", "office-building"),
  T("I", "i-k", "Ngày riêng ≠ coi nhẹ việc", 900, 700, 46, "l5:valuing", { color: "accent", hl: [{ text: "≠ coi nhẹ việc", at: "l5:lightly" }] }),
] }, [
  L("l1", "det", "Last stop: Thursday, five p.m. Thảo packs her bag.", "Chặng cuối: năm giờ chiều thứ Năm. Thảo xếp túi ra về."),
  L("l2", "dung", "Leaving right at five again? Caring about evenings sounds a bit lazy.", "Lại về đúng năm giờ à? Lo cho buổi tối nghe hơi lười đấy."),
  L("l3", "thao", "I still finish all my work here.", "Việc ở công ty mình vẫn làm đủ mà.", { face: "happy" }),
  L("l4", "thao", "I just choose what my free hours are for.", "Mình chỉ tự chọn giờ rảnh của mình dùng vào đâu."),
  L("l5", "det", "Valuing your own day doesn't mean taking your job lightly.", "Coi trọng ngày riêng không phải coi nhẹ công việc.", { keys: ["không phải coi nhẹ công việc"] }),
]));
const s23 = OS("s23");
scenes.push(B("s23", { shots: [shot(0, "I", { move: "cut" })], items: [
  I("I", "d-off", "office-building", 60, 160, 100, "l1:leaves the office"),
  AR("I", "d-a1", [175, 210], [270, 210], "l1:office+300"),
  T("I", "d-q", "“Ngày thứ hai của mình bắt đầu.”", 60, 290, 50, "l1:my second day", { hl: [{ text: "Ngày thứ hai", at: "l1:starts now" }] }),
  I("I", "d-key", "key", 60, 400, 110, "l2:key"),
  T("I", "d-rest", "phần còn lại", 190, 430, 50, "l2:rest of the day", { color: "muted" }),
  { id: "d-x", t: "strike", over: "d-rest", at: "l2:into" },
  AR("I", "d-a2", [480, 460], [580, 460], "l2:into+200", { color: "accent" }),
  T("I", "d-part", "phần của mình", 600, 430, 48, "l2:her part", { color: "accent", hl: [{ text: "phần của mình", at: "l2:her part+300" }] }),
] }, s23.lines.map((l, i) => ({ ...l, keys: i === 0 ? ["Ngày thứ hai của mình bắt đầu"] : ["phần của mình"] }))));

// ===================== Ô J — Tuần này + "Một tuần sau" =====================
const s24 = OS("s24");
scenes.push(B("s24", { shots: [shot(0, "I", { move: "cut" }), shot(150, "J", { ms: 900 })], items: [
  TITLE("J", "j-t", "Tuần này của bạn", "l1:checklist"),
  ...["Rời công sở = ngày mới", "Chọn một quãng cho mình", "Giữ giờ ngủ, bữa cơm gia đình", "Cuối tuần nhìn lại"].flatMap((txt, i) => [
    { id: `j-c${i}`, t: "box", x: frames.J[0] + 60, y: frames.J[1] + 160 + i * 110, w: 56, h: 56, stroke: 5, at: `l${i + 1}` },
    { id: `j-k${i}`, t: "text", text: "✓", x: frames.J[0] + 66, y: frames.J[1] + 140 + i * 110, size: 70, color: "accent", at: `l${i + 1}+600` },
    T("J", `j-l${i}`, txt, 140, 160 + i * 110, 50, `l${i + 1}+200`),
  ]),
] }, s24.lines));
const closing = { ...OS("s25b").data, label: undefined, camera: [{ at: "l3", shot: "close", on: "thao", move: "push" }] };
closing.actors = closing.actors.filter((a) => a.id !== "det");
scenes.push(B("s25b", { shots: [shot(0, "J", { move: "cut" }), shot("l1", ["j-v"], { zoom: 1.4, ms: 800 })], items: [
  V("J", "j-v", 900, 150, 780, closing, "l1", "Thứ Hai tuần sau · 22:50", "open-book"),
] }, OS("s25b").lines, { sfx: [{ at: "l1", to: "l1", key: "tich-tac-dai" }, { at: "l2", key: "lat-sach", offsetMs: 1300 }] }));

// ===================== Tóm tắt: lùi xa toàn bảng rồi chỉ lại 3 ô =====================
scenes.push(B("s26", { shots: [shot(0, "J", { move: "cut" }), shot(200, "all", { ms: 1400 }), shot("l1:work hours", "D", { zoom: 0.8 }), shot("l2:from leaving", "E", { zoom: 0.8 }), shot("l3:draw", "H", { zoom: 0.8 }), shot("l3:end", "all", { ms: 1200 })], items: [
  { id: "f-1", t: "badge", n: 1, x: frames.D[0] + 1100, y: frames.D[1] + 40, at: "l1:work hours" },
  { id: "f-2", t: "badge", n: 2, x: frames.E[0] + 1500, y: frames.E[1] + 150, at: "l2:from leaving" },
  { id: "f-3", t: "badge", n: 3, x: frames.H[0] + 1300, y: frames.H[1] + 30, at: "l3:draw" },
  { id: "f-r", t: "ring", around: ["c-keep"], color: "accent", stroke: 10, at: "l3:circle" },
] }, OS("s26").lines.map((l, i) => ({ ...l, who: "det", keys: [["không phải cả ngày"], ["ngày riêng"], ["một quãng"]][i] })), { beats: { after: 600 } }));

scenes.push(OS("s27"), OS("s28"));

// ---------- ref: đoạn bài học mà mỗi cảnh phủ (lấy từ các cảnh cũ cùng ý) ----------
const REF = { s00: ["s00"], s01: ["s01"], s02: ["s02b", "s02", "s02c"], s03: ["s03"], s05: ["s04", "s05"], s06: ["s06", "s06b"], s07: ["s07"], s07b: ["s07b"],
  s09a: ["s08", "s09a"], s09: ["s09"], s09b: ["s09b"], s11: ["s11"], s12: ["s12", "s12a", "s13"], s14: ["s14"], s15: ["s15"], s18: ["s16", "s17", "s17b", "s18"],
  s20: ["s19", "s20"], s21: ["s21"], s25: ["s22", "s25"], s23: ["s23"], s24: ["s24"], s25b: ["s25b"], s26: ["s26"], s27: ["s27"], s28: ["s28"] };
for (const sc of scenes) {
  const refs = [...new Set((REF[sc.id] || []).flatMap((id) => String(OS(id)?.ref || "").split(",").map((x) => x.trim()).filter(Boolean)))];
  if (refs.length) sc.ref = refs.join(",");
}

// ---------- kịch bản ----------
const out = {
  ...Object.fromEntries(Object.entries(old).filter(([k]) => !["scenes", "boards", "storyline"].includes(k))),
  boards: { [BOARD]: { size: [5 * CW + 4 * GX, 2 * CH + GY], hand: "det-paw", font: "hand", frames } },
  scenes,
};
out.hook = "HOOK-24";
out.loop = { open: "s01", close: "s25b" };
out.notes = "#135 bản 5: Đét đứng bên trái + một tấm bảng trắng chung 10 ô (5 × 2) đi theo tuần của Thảo; cảnh nhân vật là khung ảnh dán trên bảng; tô vàng từ khoá đúng lúc đọc (hl trên bảng, keys ở phụ đề); bỏ thẻ chương toàn màn và dải tuần (chặng ghi ngay trên bảng); giữ toàn màn: Đét “Khoan đã!”, câu đố, kết. Bản 4: w130/a-day.v131.js.txt · bản trước nữa xem nhật ký #126–#134.";
const head = fs.readFileSync(OUT, "utf8").split("export default ")[0];
fs.writeFileSync(OUT, head + "export default " + JSON.stringify(out, null, 2) + ";\n");
console.log("ok", scenes.length, "cảnh");
