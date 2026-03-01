/**
 * ====================================
 *  REMOTION FONT LOADER
 *  Load toàn bộ font local bằng FontFace API + staticFile()
 * ====================================
 *
 *  CẤU TRÚC THƯ MỤC (đặt trong public/):
 *
 *  public/
 *  └── fonts/
 *      ├── Bangers/
 *      │   └── Bangers-Regular.ttf
 *      ├── Be_Vietnam_Pro/
 *      │   ├── BeVietnamPro-Thin.ttf
 *      │   ├── BeVietnamPro-ExtraLight.ttf
 *      │   ├── BeVietnamPro-Light.ttf
 *      │   ├── BeVietnamPro-Regular.ttf
 *      │   ├── BeVietnamPro-Medium.ttf
 *      │   ├── BeVietnamPro-SemiBold.ttf
 *      │   ├── BeVietnamPro-Bold.ttf
 *      │   ├── BeVietnamPro-ExtraBold.ttf
 *      │   └── BeVietnamPro-Black.ttf
 *      ├── Dancing_Script/
 *      │   └── static/
 *      │       ├── DancingScript-Regular.ttf
 *      │       ├── DancingScript-Medium.ttf
 *      │       ├── DancingScript-SemiBold.ttf
 *      │       └── DancingScript-Bold.ttf
 *      ├── Fuzzy_Bubbles/
 *      │   ├── FuzzyBubbles-Regular.ttf
 *      │   └── FuzzyBubbles-Bold.ttf
 *      ├── Montserrat/
 *      │   └── static/
 *      │       ├── Montserrat-Thin.ttf
 *      │       ├── Montserrat-ExtraLight.ttf
 *      │       ├── Montserrat-Light.ttf
 *      │       ├── Montserrat-Regular.ttf
 *      │       ├── Montserrat-Medium.ttf
 *      │       ├── Montserrat-SemiBold.ttf
 *      │       ├── Montserrat-Bold.ttf
 *      │       ├── Montserrat-ExtraBold.ttf
 *      │       └── Montserrat-Black.ttf
 *      └── Nunito/
 *          └── static/
 *              ├── Nunito-ExtraLight.ttf
 *              ├── Nunito-Light.ttf
 *              ├── Nunito-Regular.ttf
 *              ├── Nunito-Medium.ttf
 *              ├── Nunito-SemiBold.ttf
 *              ├── Nunito-Bold.ttf
 *              ├── Nunito-ExtraBold.ttf
 *              └── Nunito-Black.ttf
 */

import { staticFile } from "remotion";

// ====================================
//  DANH SÁCH TOÀN BỘ FONT
// ====================================

const ALL_FONTS = [
  // ── MONTSERRAT (9 weights) ──
  {
    family: "Montserrat",
    weight: 100,
    file: "fonts/Montserrat/static/Montserrat-Thin.ttf",
  },
  {
    family: "Montserrat",
    weight: 200,
    file: "fonts/Montserrat/static/Montserrat-ExtraLight.ttf",
  },
  {
    family: "Montserrat",
    weight: 300,
    file: "fonts/Montserrat/static/Montserrat-Light.ttf",
  },
  {
    family: "Montserrat",
    weight: 400,
    file: "fonts/Montserrat/static/Montserrat-Regular.ttf",
  },
  {
    family: "Montserrat",
    weight: 500,
    file: "fonts/Montserrat/static/Montserrat-Medium.ttf",
  },
  {
    family: "Montserrat",
    weight: 600,
    file: "fonts/Montserrat/static/Montserrat-SemiBold.ttf",
  },
  {
    family: "Montserrat",
    weight: 700,
    file: "fonts/Montserrat/static/Montserrat-Bold.ttf",
  },
  {
    family: "Montserrat",
    weight: 800,
    file: "fonts/Montserrat/static/Montserrat-ExtraBold.ttf",
  },
  {
    family: "Montserrat",
    weight: 900,
    file: "fonts/Montserrat/static/Montserrat-Black.ttf",
  },

  // ── NUNITO (8 weights) ──
  {
    family: "Nunito",
    weight: 200,
    file: "fonts/Nunito/static/Nunito-ExtraLight.ttf",
  },
  {
    family: "Nunito",
    weight: 300,
    file: "fonts/Nunito/static/Nunito-Light.ttf",
  },
  {
    family: "Nunito",
    weight: 400,
    file: "fonts/Nunito/static/Nunito-Regular.ttf",
  },
  {
    family: "Nunito",
    weight: 500,
    file: "fonts/Nunito/static/Nunito-Medium.ttf",
  },
  {
    family: "Nunito",
    weight: 600,
    file: "fonts/Nunito/static/Nunito-SemiBold.ttf",
  },
  {
    family: "Nunito",
    weight: 700,
    file: "fonts/Nunito/static/Nunito-Bold.ttf",
  },
  {
    family: "Nunito",
    weight: 800,
    file: "fonts/Nunito/static/Nunito-ExtraBold.ttf",
  },
  {
    family: "Nunito",
    weight: 900,
    file: "fonts/Nunito/static/Nunito-Black.ttf",
  },

  // ── BE VIETNAM PRO (9 weights) ──
  {
    family: "Be Vietnam Pro",
    weight: 100,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-Thin.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 200,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraLight.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 300,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 400,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-Regular.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 500,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 600,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 700,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 800,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf",
  },
  {
    family: "Be Vietnam Pro",
    weight: 900,
    file: "fonts/Be_Vietnam_Pro/BeVietnamPro-Black.ttf",
  },

  // ── DANCING SCRIPT (4 weights) ──
  {
    family: "Dancing Script",
    weight: 400,
    file: "fonts/Dancing_Script/static/DancingScript-Regular.ttf",
  },
  {
    family: "Dancing Script",
    weight: 500,
    file: "fonts/Dancing_Script/static/DancingScript-Medium.ttf",
  },
  {
    family: "Dancing Script",
    weight: 600,
    file: "fonts/Dancing_Script/static/DancingScript-SemiBold.ttf",
  },
  {
    family: "Dancing Script",
    weight: 700,
    file: "fonts/Dancing_Script/static/DancingScript-Bold.ttf",
  },

  // ── FUZZY BUBBLES (2 weights) ──
  {
    family: "Fuzzy Bubbles",
    weight: 400,
    file: "fonts/Fuzzy_Bubbles/FuzzyBubbles-Regular.ttf",
  },
  {
    family: "Fuzzy Bubbles",
    weight: 700,
    file: "fonts/Fuzzy_Bubbles/FuzzyBubbles-Bold.ttf",
  },

  // ── BANGERS (1 weight) ──
  { family: "Bangers", weight: 400, file: "fonts/Bangers/Bangers-Regular.ttf" },
];

// ====================================
//  SINGLETON LOADER — chỉ load 1 lần duy nhất
// ====================================

let _loaded = false;
let _promise = null;

/**
 * Load toàn bộ font 1 lần duy nhất.
 * Gọi hàm này trong calculateMetadata hoặc useEffect + delayRender.
 *
 * @returns {Promise<void>}
 */
export const ensureFontsLoaded = async () => {
  if (_loaded) return;

  if (!_promise) {
    _promise = (async () => {
      console.log(`⏳ Đang load ${ALL_FONTS.length} font...`);
      const startTime = Date.now();

      const results = await Promise.allSettled(
        ALL_FONTS.map(async ({ family, weight, file }) => {
          const url = staticFile(file);
          const font = new FontFace(family, `url('${url}')`, {
            weight: String(weight),
            style: "normal",
          });
          const loaded = await font.load();
          document.fonts.add(loaded);
          return `${family} ${weight}`;
        }),
      );

      // Log kết quả
      const success = results.filter((r) => r.status === "fulfilled");
      const failed = results.filter((r) => r.status === "rejected");
      const elapsed = Date.now() - startTime;

      console.log(
        `✅ Load thành công: ${success.length}/${ALL_FONTS.length} font (${elapsed}ms)`,
      );

      if (failed.length > 0) {
        console.warn(`⚠️ Load thất bại ${failed.length} font:`);
        failed.forEach((r, i) => {
          const fontInfo = ALL_FONTS[results.indexOf(r)];
          console.warn(
            `   ❌ ${fontInfo?.family} ${fontInfo?.weight}: ${r.reason}`,
          );
        });
      }

      _loaded = true;
    })();
  }

  return _promise;
};

// ====================================
//  EXPORT DANH SÁCH ĐỂ DÙNG Ở NƠI KHÁC
// ====================================
export { ALL_FONTS };
