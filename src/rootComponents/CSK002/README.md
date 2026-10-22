# CSK002 — Remotion thuần (không qua pipeline Excel → JSON)

CSK001 được giữ nguyên để làm bản backup. Muốn quay lại CSK001 thì sửa import trong `src/RemotionRoot.js`.

## Cấu trúc

```
CSK002/
├─ R_CSK002.jsx          # Root: mỗi object trong data/videos.js → 1 <Composition id="1"...>
├─ paths.js              # Quy ước thư mục public/ (giống CSK001)
├─ data/videos.js        # NỘI DUNG từng video — thường chỉ cần sửa file này
└─ templates/
   ├─ CATALOG.md         # ⭐ Danh bạ template + mã mục + CÚ PHÁP RA LỆNH (đọc trước)
   ├─ index.js           # Đăng ký template (T01, T02...)
   ├─ _shared/Section.jsx# Bọc mục, nhãn debug, gộp style
   ├─ T01_TipCard/       # config.js (mặc định) · styles.js (style theo mục) · index.jsx (bố cục)
   └─ TipCard.jsx        # (cũ) chỉ re-export T01 để tương thích
```

Ra lệnh sửa template theo dạng `T01[@video].MỤC: yêu cầu` — xem `templates/CATALOG.md`.

## Quy ước assets (thư mục `public/`)

| Loại | Tên trong data | Đường dẫn thật |
|---|---|---|
| Video | `kd_vdA1.mp4` | `public/video/kd/kd_vdA1.mp4` |
| Nhạc/âm thanh | `nhacnen_vuituoi` | `public/audio/nhacnen/nhacnen_vuituoi.mp3` |
| Ảnh | `logo_brand-pvd.png` | `public/assets/logo/logo_brand-pvd.png` |
| Không có `_` | `abc.png` | `public/assets/khac/abc.png` (audio: `audio/Khac/`, video: `video/`) |

## Thêm một video theo mẫu có sẵn

Thêm một object vào `data/videos.js`:

```js
{
  id: "12",
  headline: "Tiêu đề",
  detail: "1/ ...\n2/ ...",
  bgVideo: "kd_vdA1.mp4",
  musicStartFrom: 20,          // giây
  // Tuỳ chọn, override mặc định trong TIPCARD_DEFAULTS:
  // bgVideoSeconds: 15, music: "nhacnen_xyz", musicVolume: 0.3, logo: null, footerText: "..."
}
```

## Làm video mới cùng Claude

Gửi cho Claude 3 thứ:

1. **Ý tưởng / kịch bản**: nội dung, bố cục, hiệu ứng, thời lượng (có thể gửi ảnh chụp/phác thảo).
2. **Thông số**: danh sách video (text, thời gian, âm lượng...), hoặc file Excel/CSV nếu nhiều video.
3. **Assets**: tên file (đặt đúng quy ước bên trên) hoặc gửi file trực tiếp.

Claude sẽ:

- Nếu hợp với mẫu có sẵn → chỉ thêm/sửa `data/videos.js`.
- Nếu là kiểu mới → tạo `templates/Txx_TenMau/` (config.js, styles.js, index.jsx) (Remotion thuần: `AbsoluteFill`, `Sequence`,
  `interpolate`, `spring`, `OffthreadVideo`, `Html5Audio`, `Img`...), đăng ký trong
  `templates/index.js` + `CATALOG.md`, rồi video dùng mẫu đó bằng `template: "Txx"`.

## Lưu ý kỹ thuật

- `OffthreadVideo` với prop `loop` KHÔNG lặp khi render → TipCard dùng `<Loop>` với độ dài video
  gốc, được đo tự động trong `calculateMetadata`. Nếu không đo được (xem cảnh báo trong console),
  có thể khai báo tay `bgVideoSourceSeconds` trong data.
- Thời lượng TipCard = 3 frame + `bgVideoSeconds` × 30 (giống hệt CSK001: 303 frame).
