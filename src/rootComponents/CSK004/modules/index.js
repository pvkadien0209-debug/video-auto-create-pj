// modules/index.js — DANH MỤC MODULE của CSK004: 100 module + 8 module hoạt hình (#106, anim.jsx) + 6 module video mẫu (#109, va.jsx) (xem DetPro/video/DANH-MUC-100-MODULE.md).
// Thêm module: viết component + {name, family, limits, estimate} rồi gộp vào REGISTRY.
import { OPEN } from "./open.jsx";
import { LIST } from "./list.jsx";
import { REL } from "./rel.jsx";
import { CMP } from "./cmp.jsx";
import { NUM_STORY } from "./num-story.jsx";
import { QUIZ } from "./quiz.jsx";
import { TEXT_END_BEAT } from "./text-end-beat.jsx";
import { OPEN2 } from "./open2.jsx";
import { OPEN_DRAMA } from "./open-drama.jsx";
import { BEAT_END2 } from "./beat-end2.jsx";
import { LIST2 } from "./list2.jsx";
import { TEXT2 } from "./text2.jsx";
import { REL2 } from "./rel2.jsx";
import { CMP2 } from "./cmp2.jsx";
import { NUM2 } from "./num2.jsx";
import { RSN } from "./rsn.jsx";
import { QUIZ2 } from "./quiz2.jsx";
import { STORY2 } from "./story2.jsx";
import { ANIM } from "./anim.jsx"; // #106: hoạt hình 2D — dàn nhân vật + mascot Đét
import { VA } from "./va.jsx"; // #109: 6 module từ video mẫu (TOC-01, TYPE-01, STAT-01, SRC-01, ASK-01, MYTH-01)
import { BOARD } from "./board.jsx"; // #130: bảng vẽ hành trình kiểu VideoScribe (BOARD-01)
import { BRK } from "./edit-breakers.jsx"; // #144: 12 cảnh ngắt nhịp toàn màn (BRK-01…12 = E-BRK-01…12)

export const REGISTRY = { ...OPEN, ...LIST, ...REL, ...CMP, ...NUM_STORY, ...QUIZ, ...TEXT_END_BEAT,
  ...OPEN2, ...OPEN_DRAMA, ...BEAT_END2, ...LIST2, ...TEXT2, ...REL2, ...CMP2, ...NUM2, ...RSN, ...QUIZ2, ...STORY2, ...ANIM, ...VA, ...BOARD, ...BRK };

export const getModule = (code) => {
  const m = REGISTRY[code];
  if (!m) throw new Error(`CSK004: không có module "${code}". Có: ${Object.keys(REGISTRY).join(", ")}`);
  return m;
};
