let videoRandomSeed = 1;

// ⚡ PRNG xác định (mulberry32), seed theo rowIndex của video đang xử lý.
// TRƯỚC ĐÂY: setVideoRandomSeed()/pickRandom() dùng Math.random() thuần,
// không seed cố định → mỗi lần processData() chạy lại (mỗi lần start script
// C1x/C2x, và ĐẶC BIỆT là mỗi Chromium worker riêng khi Remotion render với
// concurrency > 1 — mỗi worker tự bundle + tự chạy lại data.js từ đầu) sẽ ra
// một giá trị RANDOM(...) khác nhau cho CÙNG một video → source video/audio
// (videoStartFrom, AudioStartFrom) bị "nhảy" ngay tại ranh giới giữa các đoạn
// frame do các worker khác nhau đảm nhiệm — đây là một phần nguyên nhân gây
// thiếu/nhấp nháy nội dung khi render.
// GIỜ: seed cố định theo rowIndex (không random nữa) → cùng 1 dataRow (cùng 1
// video) LUÔN resolve ra đúng cùng một chuỗi giá trị RANDOM(...), bất kể được
// resolve ở script nào hay worker nào. Các video (rowIndex) khác nhau vẫn ra
// giá trị khác nhau như cũ — giữ đúng tinh thần "ngẫu nhiên giữa các video".
function mulberry32(seed) {
  let state = seed | 0;
  return function () {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

let rngForRow = mulberry32(1);

export function setVideoRandomSeed(rowIndex = 0) {
  // +1 để tránh seed=0 (mulberry32 vẫn chạy được với 0, nhưng tránh cho chắc)
  videoRandomSeed = rowIndex + 1;
  rngForRow = mulberry32(videoRandomSeed);
}

export function getVideoRandomSeed() {
  return videoRandomSeed;
}

export function parseRandomArgs(argsStr) {
  return argsStr.split(",").map((s) => {
    const t = s.trim();
    if (t !== "" && !isNaN(t)) return Number(t);
    return t;
  });
}

export function pickRandom(items) {
  // ⚡ Dùng PRNG đã seed theo rowIndex thay vì Math.random() thô — xem giải
  // thích ở đầu file.
  return items[Math.floor(rngForRow() * items.length)];
}

export function pickRandomFixed(items) {
  return items[videoRandomSeed % items.length];
}

export function hasRandomPattern(value) {
  return (
    typeof value === "string" &&
    (value.includes("RANDOM(") || value.includes("RANDOMfixed("))
  );
}
