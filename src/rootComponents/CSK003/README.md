# CSK003 — Ảnh/Video 3s khổ ảnh Facebook (1080×1350, 4:5)

> ⭐ **Quy ước chung:** đổi project = sửa **dòng import trong `src/RemotionRoot.js`** (chỉ 1 chỗ).
> Quy trình: trỏ về CSK003 → `npm run dev` xem video mẫu → OK rồi mới `npm run renderimg3`.
> Script render tự kiểm tra, nếu RemotionRoot.js không trỏ CSK003 thì dừng.

| Lệnh | Việc |
|---|---|
| `npm run dev` | Mở Studio (project đang trỏ trong RemotionRoot.js) |
| `npm run renderimg3` | Chụp frame 30 mỗi video → `renders/img/IMGPLDT/IMGPLDT_<id>.png` |
| `npm run renderimg3 -- --frame=45` | Chụp frame khác |
| `npm run renderimg3 -- --only=1,3` | Chỉ vài id |

## Dữ liệu — `data/videos.js`
- Object có `subject` → **bắt đầu 1 video**; `tb-01..tb-N` của nó = **hàng tiêu đề bảng**.
- Các object sau có `subject: null` → **1 hàng** của bảng video đó.
- Số cột: đếm `tb-01`, `tb-02`… (+1) tới khi không còn key (01-03, 01-05… đều được).
- `id` không khai báo → tự đánh 1, 2, 3… theo thứ tự video.

Thứ tự hiện: SUBJECT → DETAIL → SUBJECT_TABLE → TABLE → NOTICE, tất cả xong trước frame 30.
Chữ quá dài → cả khối tự thu nhỏ vừa khung (không bị cắt).

## Cấu trúc
```
CSK003/
├─ R_CSK003.jsx                 # mỗi video → <Composition id="1"...> 1080x1350, 90 frame
├─ data/videos.js               # NỘI DUNG (dòng phẳng)
├─ data/group.js                # gom dòng → video {columns, rows}
└─ templates/T01_InfoTable/     # config.js (thời lượng, TIMING) · styles.js · index.jsx
```
Override 1 video: thêm `style: { SUBJECT: { fontSize: 60 } }` vào object có subject.
