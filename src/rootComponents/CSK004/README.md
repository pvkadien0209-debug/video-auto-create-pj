# CSK004 — Video bài học DetPro (thư viện module, video W tóm tắt trên web)

> ⭐ **Quy ước chung:** đổi project = sửa **dòng import trong `src/RemotionRoot.js`** (chỉ 1 chỗ).
> Quy trình: trỏ về CSK004 → `npm run dev` xem → OK rồi mới `npm run renderw`.
> Luật làm video: `SEO-PT-projectjs/DetPro/noi-dung/HUONG-DAN-VIDEO.md`. Danh mục module: `DetPro/video/DANH-MUC-MODULE-DOT-1.md`.

| Lệnh | Việc |
|---|---|
| `npm run dev` | Studio. Thư mục **DP-W** = video thật; **Gallery** = từng module (bộ dữ liệu vừa và dài nhất) + `GalleryReel` |
| `npm run renderw` | Render mọi video W → `renders/dp/<id>.mp4` |
| `npm run renderw -- --only=<id>` | Chỉ một video |
| `npm run renderw -- --gallery --only=GalleryReel` | Video xem lướt cả 100 module (khoảng 21 phút) |
| `npm run renderw -- --scale=0.5` | Bản nhẹ 960×540 để xem nhanh |
| `npm run kichban` | Kiểm kịch bản + xuất kịch bản đọc được và `loi-doc.json` sang `SEO-PT-projectjs/DetPro/video/kich-ban/` |

## Làm video cho một bài

1. Viết kịch bản riêng: `data/scripts/<slug>--w01.js` (mẫu: 3 kịch bản có sẵn). Mỗi cảnh ghi **module** + **data** + `ref` về đoạn của bài + `lines` (lời đọc).
2. Thêm một dòng import vào `data/scripts/index.js`.
3. `npm run kichban` (sửa đến khi LỖI 0) → `npm run dev` xem trong thư mục DP-W.
4. Video cho web: `npm run renderw -- --only=<id> --scale=2/3` (1280×720) → chép mp4 sang `client/public/videos/dp/` và thêm một dòng vào `index.json` ở đó.

Thời lượng tự tính ở **chế độ chỉ chữ** theo tốc độ đọc (3 âm tiết/giây tiếng Việt, 2,3 từ/giây tiếng Anh) + nhịp lặng `beats.after` (ms).

## Hình minh hoạ màu

`public/illus/<tên>.svg`: 1.585 hình Fluent Emoji Flat (Microsoft, giấy phép MIT, xem `public/illus/LICENSE.txt`). Tên tra trong `core/illus-names.js`. Dùng: `<Illus name="house" />`. Lần đầu: giải nén `public/illus.zip` ngay tại `public/` (sẽ ra thư mục `public/illus`).

## Âm thanh (khi đã có tệp)

Trong kịch bản, mở các dòng `audio`:
- `music.file`: nhạc nền (đặt ở `public/audio/dp/_nhac/`). Tự hạ mức: chữ −6 dB, thẻ chương mức gốc, tắt khi đếm ngược.
- `logo`: âm hiệu cuối video. `sfx.tick`, `sfx.reveal`: tích tắc đếm ngược, âm lộ đáp án.
- Mỗi tệp ghi nguồn và giấy phép ở `DetPro/video/am-thanh.csv`.
- Giọng đọc (mp3 anh tạo sẵn theo `code`): đợt sau (chế độ giọng).

## Cấu trúc

```
CSK004/
├─ R_CSK004.jsx              Composition: DP-W (video), Gallery (module), GalleryReel
├─ core/                     theme (màu web) · fonts (Be Vietnam Pro, OFL) · timing · motion (cả hiệu ứng kịch tính) · ui (Illus, IllusBadge, SpotScene) · icons (1.539 biểu tượng Lucide, ISC)
├─ modules/                  100 module, gom theo họ; index.js = danh mục
├─ script/ScriptVideo.jsx    kịch bản → dãy cảnh, chuyển cảnh mờ, thanh tiến độ, lớp nhạc
└─ data/                     scripts/ (kịch bản từng bài) · samples.js (dữ liệu mẫu cho Gallery)
```

Hướng dẫn viết module mới: `MODULE-GUIDE.md` ở thư mục này. Cảnh hoạt hình (dàn nhân vật + Đét, #106): `ANIM-GUIDE.md`; nhân vật ở `cast/`, bối cảnh ở `core/sets.jsx`, module ở `modules/anim.jsx`. Thêm module: viết component trong `modules/<họ>.jsx` với `{ name, family, limits, estimate, Component }`, gộp vào `modules/index.js`, thêm dữ liệu mẫu `thuong` và `dai` vào `data/samples.js`.
