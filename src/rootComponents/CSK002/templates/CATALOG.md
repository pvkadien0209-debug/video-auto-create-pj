# CATALOG — Danh bạ template & cú pháp ra lệnh

> Claude: đọc file này TRƯỚC khi sửa bất kỳ template nào. Khi thêm template/mục mới,
> cập nhật file này + `templates/index.js` + `META.sections` trong `config.js`.

## 1. Cú pháp địa chỉ

```
<TEMPLATE>[@VIDEO].<MỤC>[.<THUỘC TÍNH>] : <yêu cầu>
```

| Phần | Ý nghĩa | Ví dụ |
|---|---|---|
| `T01` | Mã template | `T01`, `T02` |
| `@3`, `@1-5`, `@1,4,7`, `@*` | Phạm vi video (id trong `data/videos.js`). Không ghi = sửa **mặc định** của template (áp dụng cho mọi video) | `T01@3` |
| `.HEAD` | Mã mục (bảng bên dưới) | `T01.HEAD` |
| `.fontSize` | Thuộc tính cụ thể (không bắt buộc) | `T01.HEAD.fontSize` |

### Động từ gợi ý

| Lệnh | Claude làm gì |
|---|---|
| `T01.HEAD: chữ 90px, màu đỏ` | Sửa `STYLES.HEAD` trong `styles.js` (mọi video) |
| `T01@3.HEAD: chữ 90px` | Thêm `style: { HEAD: {...} }` vào video 3 trong `videos.js` |
| `T01.MUSIC.musicVolume = 0.3` | Sửa `DEFAULTS` trong `config.js` |
| `T01.DETAIL + hiệu ứng gõ chữ` | **Thêm** hiệu ứng vào mục (sửa `index.jsx`) |
| `T01.LOGO - ` | **Bỏ** mục (mặc định `null`, hoặc xoá khỏi bố cục) |
| `T01 + mục STICKER: ảnh góc trên phải, lắc nhẹ` | **Thêm mục mới** (mã mới, cập nhật CATALOG) |
| `T01 → T02: giống T01 nhưng DETAIL hiện từng dòng` | **Nhân bản** thành template mới, T01 giữ nguyên |
| `T01 ?` hoặc `T01.HEAD ?` | Chỉ **giải thích** mục đó đang cấu hình ra sao, không sửa |

Viết tự nhiên cũng được. Chỉ cần có **mã template + mã mục + phạm vi** là Claude biết chính xác sửa chỗ nào.

### Cách tìm mã mục

- Remotion Studio → timeline có tên dạng `T01·HEAD`.
- Studio → sidebar Props → đặt `showSections: true` → mỗi mục có viền đỏ và nhãn `T01.HEAD` ngay trên hình.

## 2. Mỗi template gồm những file gì

```
templates/Txx_Ten/
├─ config.js   META (mã, mô tả, danh sách mục) + DEFAULTS (nội dung, thông số, timing)
├─ styles.js   STYLES theo mã mục  → đổi giao diện
└─ index.jsx   bố cục + hiệu ứng, mỗi mục đánh dấu // ═══ [Txx.MÃ] ═══
```

Thứ tự ưu tiên khi render: `styles.js` / `config.js` (mặc định) ← bị ghi đè bởi field trong `videos.js` (từng video).

## 3. Danh sách template

### T01 — TipCard (từ CSK001 modeND)

Video nền, khung tiêu đề + nội dung danh sách mẹo, footer, logo, nhạc nền. Thời lượng = 3f + `bgVideoSeconds`×30.

| Mã mục | Là gì | Props (config.js) | Style (styles.js) |
|---|---|---|---|
| `BG` | Video nền cover, muted, loop, fade-in 30f/fade-out 5f | `bgVideo`, `bgVideoSeconds`, `bgVideoDelayFrames`, `bgFadeInFrames`, `bgFadeOutFrames` | `BG` |
| `CARD` | Khung viền xanh lá bao HEAD + DETAIL | — | `CARD` |
| `HEAD` | Tiêu đề (nền ảnh mờ trắng) | `headline`, `cardBgImage` | `HEAD` |
| `DETAIL` | Nội dung nhiều dòng (`\n` = xuống dòng) | `detail` | `DETAIL` |
| `FOOTER` | Chân trang viền xanh dương | `footerText` (`null` = ẩn) | `FOOTER` |
| `LOGO` | Logo tròn góc phải dưới | `logo` (`null` = ẩn) | `LOGO`, `LOGO_IMG` |
| `MUSIC` | Nhạc nền | `music`, `musicVolume`, `musicStartFrom` | — |
| (chung) | Nền đen, font | `style`, `showSections` | `ROOT` |

<!-- Thêm template mới theo đúng mẫu bảng trên: ### T02 — Tên ... -->
