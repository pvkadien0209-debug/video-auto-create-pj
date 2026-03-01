import { staticFile } from "remotion";

const ALL_FONTS = [
  // ... giữ nguyên danh sách ...
];

let _loaded = false;
let _promise = null;

export const ensureFontsLoaded = async () => {
  if (_loaded) return;
  if (!_promise) {
    _promise = (async () => {
      console.log(`⏳ Đang load ${ALL_FONTS.length} font...`);

      // ✅ Tạo <style> với @font-face — đáng tin hơn FontFace API
      const cssRules = ALL_FONTS.map(({ family, weight, file }) => {
        const url = staticFile(file);
        return `
          @font-face {
            font-family: '${family}';
            src: url('${url}') format('truetype');
            font-weight: ${weight};
            font-style: normal;
            font-display: block;
          }
        `;
      }).join("\n");

      const style = document.createElement("style");
      style.textContent = cssRules;
      document.head.appendChild(style);

      // ✅ Vẫn dùng FontFace API để force preload
      await Promise.allSettled(
        ALL_FONTS.map(async ({ family, weight, file }) => {
          const url = staticFile(file);
          const font = new FontFace(family, `url('${url}')`, {
            weight: String(weight),
            style: "normal",
          });
          const loaded = await font.load();
          document.fonts.add(loaded);
        }),
      );

      await document.fonts.ready;
      console.log(`✅ Loaded ${ALL_FONTS.length} fonts`);
      _loaded = true;
    })();
  }
  return _promise;
};

export { ALL_FONTS };
