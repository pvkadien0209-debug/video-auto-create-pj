# Kho tiếng động DetPro (#127)

> TỰ SINH bởi `node tools/sfx-kho.mjs` — 61 âm (61 tạo bằng code, 0 tệp thật). Nghe thử: mở `public/sfx/_nghe-thu.html` bằng trình duyệt.

## Dùng trong kịch bản

- Bật kho: `audio: { sfxPack: "detpro-1" }`. Âm mặc định theo module tự có (xem `core/sfx.js`, bảng AUTO).
- Thêm âm ở một cảnh: `sfx: [{ at: "l2", key: "lat-sach" }]` — phát trước câu l2 150 ms.
- Âm kéo dài một đoạn: `{ at: "l1", to: "l3", key: "tich-tac-dai" }` — chạy từ câu l1 đến hết câu l3 (âm lặp tự lặp, cuối đoạn nhỏ dần). `at: "start"`, `to: "end"` = đầu/cuối cảnh.
- Tuỳ chọn: `gain` (độ to), `offsetMs` (dời), `end: true` (đặt ở cuối câu). `sfx: false` = cảnh im. Khoá không có trong kho → bỏ qua và `check-script` báo.

## Cấu trúc bài (chương, mục lục, câu hỏi)

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `cau-hoi` | 0.55 s |  | 0.34 | Đặt câu hỏi (ASK-01): hai nốt đi lên | code |
| `chuong` | 0.80 s |  | 0.42 | Mở chương (HOST-03): vút ngắn + hai nốt | code |
| `lat-the` | 0.22 s |  | 0.34 | Thẻ chữ lật/hiện (TEXT-01/02) | code |
| `muc-luc` | 0.75 s |  | 0.34 | Mục lục hiện ra (TOC-01) | code |
| `y-tuong` | 1.1 s |  | 0.34 | Ý chính / "à ra thế": ting + lấp lánh | code |

## Đúng – sai – nhấn

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `buon` | 2.2 s |  | 0.28 | "Ôi thôi" (kèn buồn wah-wah) — chỉ dùng cho chỗ hài nhẹ | code |
| `chon` | 0.12 s |  | 0.3 | Chọn đáp án / bấm nút (blip) | code |
| `chuc-mung` | 1.9 s |  | 0.32 | Chúc mừng / hoàn thành (kèn ngắn + lấp lánh) | code |
| `click` | 0.05 s |  | 0.3 | Bấm chuột / công tắc | code |
| `dung` | 0.60 s |  | 0.38 | Đúng (ba nốt đi lên) | code |
| `khong-phai` | 0.55 s |  | 0.34 | Không phải / gỡ hiểu lầm (hai nốt đi xuống, nhẹ) | code |
| `nhan` | 0.32 s |  | 0.5 | Nhấn câu chốt (TEXT-04): "bụp" trầm | code |
| `pop` | 0.13 s |  | 0.3 | Vật/ô nhỏ bật ra | code |
| `sai` | 0.55 s |  | 0.22 | Sai rõ ràng (còi trầm) — dùng ít | code |
| `thang-cap` | 0.85 s |  | 0.32 | Lên cấp / tiến bộ (rải nốt nhanh đi lên) | code |
| `tich` | 0.08 s |  | 0.3 | Đánh dấu một ý trong danh sách | code |
| `ting` | 0.65 s |  | 0.36 | Con số / kết luận hiện ra | code |

## Chuyển động & chuyển cảnh

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `nay` | 0.60 s |  | 0.32 | Nảy "boing" (nhân vật bật dậy, chỗ vui) | code |
| `roi` | 0.80 s |  | 0.26 | Rơi xuống (huýt đi xuống + chạm) | code |
| `truot` | 0.50 s |  | 0.28 | Trượt (bảng/thẻ kéo ngang) | code |
| `vuot-man-hinh` | 0.25 s |  | 0.24 | Vuốt màn hình điện thoại | code |
| `vut-len` | 0.60 s |  | 0.3 | Vút lên (vật bay lên / hiện ra từ dưới) | code |
| `whoosh` | 0.42 s |  | 0.32 | Vút (chuyển cảnh whip) | code |
| `whoosh-dai` | 1.3 s |  | 0.3 | Vút dài (đổi cảnh lớn, bay qua thành phố) | code |
| `whoosh-ngan` | 0.22 s |  | 0.3 | Vút ngắn (chữ/thẻ trượt vào) | code |

## Thời gian & đếm

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `bao-thuc` | 2.5 s |  | 0.2 | Chuông báo thức (sáng hôm sau, trễ giờ) | code |
| `dem-nguoc` | 3.7 s |  | 0.3 | Đếm ngược 3–2–1–bíp (hết giờ) | code |
| `dem-so` | 1.0 s |  | 0.16 | Con số chạy ngắn (chậm dần) | code |
| `dem-so-dai` | 2.6 s |  | 0.18 | Con số chạy lên rồi dừng "ting" (đếm 0 → 16) | code |
| `dong-ho` | 0.07 s |  | 0.14 | Một tiếng tích (đồng hồ hiện ra) | code |
| `dong-ho-chuong` | 2.4 s |  | 0.24 | Chuông đồng hồ điểm giờ (hai tiếng boong) | code |
| `re-dia` | 0.50 s |  | 0.5 | Khựng lại (đĩa rè) — dừng hình trong DLG-01 | code |
| `tich-tac` | 0.08 s |  | 0.22 | Một nhịp đếm (câu đố dùng) | code |
| `tich-tac-dai` | 4.0 s | ✓ | 0.2 | Đồng hồ tích tắc, 1 nhịp/giây — LẶP suốt cảnh (vd. đêm khuya, giờ tan làm) | code |
| `tua` | 0.80 s |  | 0.34 | Tua lại (DLG-01) | code |

## Hồi hộp & tiết lộ

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `hit` | 1.4 s |  | 0.4 | Đập mạnh (lộ con số/đáp án lớn) | code |
| `hoi-hop` | 4.0 s | ✓ | 0.14 | Nền hồi hộp trầm — LẶP (đoạn căng, trước câu hỏi khó) | code |
| `lap-lanh` | 0.90 s |  | 0.24 | Lấp lánh nhẹ (vật mới, sạch, đẹp) | code |
| `rise` | 0.70 s |  | 0.28 | Dâng ngắn trước khi lộ | code |
| `rise-dai` | 3.2 s |  | 0.22 | Dâng dài 3 s (trước đáp án / con số lớn), nên nối với "hit" | code |
| `tiet-lo` | 1.3 s |  | 0.28 | Lộ ra lấp lánh (đáp án đẹp, "đây rồi") | code |
| `tim-dap` | 2.0 s | ✓ | 0.36 | Tim đập (lo lắng, phỏng vấn) — LẶP | code |
| `trong-don` | 2.6 s |  | 0.3 | Trống dồn rồi "chát" (công bố kết quả) | code |

## Điện thoại & máy tính

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `chup-anh` | 0.35 s |  | 0.3 | Chụp ảnh / chụp màn hình | code |
| `go-phim` | 1.1 s |  | 0.16 | Gõ phím ngắn (TYPE-01) | code |
| `go-phim-dai` | 4.0 s | ✓ | 0.14 | Gõ phím liên tục — LẶP (làm việc trên máy tính) | code |
| `nhac-chuong` | 3.0 s |  | 0.24 | Nhạc chuông (cuộc gọi đến) | code |
| `rung` | 0.75 s |  | 0.26 | Điện thoại rung (hai nhịp) | code |
| `rung-dai` | 3.0 s | ✓ | 0.24 | Điện thoại rung liên tục — LẶP (cuộc gọi bị lờ đi) | code |
| `tin-den` | 0.30 s |  | 0.34 | Tin nhắn đến | code |
| `tin-di` | 0.20 s |  | 0.3 | Tin nhắn gửi đi | code |
| `xu` | 0.40 s |  | 0.34 | Một đồng xu / tiền vào | code |
| `xu-nhieu` | 1.6 s |  | 0.26 | Nhiều xu rơi (tiết kiệm được, lương về) | code |

## Không khí (nền, lặp)

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `mua` | 6.0 s | ✓ | 0.14 | Mưa ngoài cửa sổ — LẶP (bản code, nên thay tệp thật) | code |
| `phong-yen` | 6.0 s | ✓ | 0.1 | Tiếng phòng yên (nền rất nhỏ cho cảnh trong nhà) — LẶP | code |

## Thương hiệu

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `det` | 0.25 s |  | 0.55 | "Đét" (vòng Vòng Đét, iris) | code |
| `logo` | 1.4 s |  | 0.55 | Nhạc hiệu DetPro (END-05) | code |

## Vật thật (tệp thật)

| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |
|---|---|---|---|---|---|
| `but-gach` | 0.35 s |  | 0.24 | Gạch một nét bút (bản code tạm) | code |
| `but-viet` | 3.0 s | ✓ | 0.2 | Bút chì viết lên giấy — LẶP (bản code tạm; bảng vẽ BOARD-01) | code |
| `go-bang` | 0.18 s |  | 0.3 | Bút dạ gõ lên bảng "cộc" (mỗi lần tay Đét đặt bút vẽ) | code |
| `go-bang-2` | 0.40 s |  | 0.3 | Gõ bảng hai cái "cộc cộc" (chỉ vào một ô: nhìn đây!) | code |

## Cần tìm (âm thật) — còn 27/27

Tiếng vật thật làm bằng code nghe giả, nên lấy tệp thật. Tìm trên **Pixabay Sound Effects**, **Mixkit** hoặc **Freesound** (lọc giấy phép CC0), tải về, **đổi tên đúng khoá** rồi bỏ vào `public/sfx/_goc/` và chạy `node tools/sfx-kho.mjs`. Mp3 hay wav đều được; tệp dài cứ để nguyên, công cụ tự cắt lặng, chuẩn hoá, nối vòng cho âm nền.

| Khoá (tên tệp) | Âm | Từ khoá tìm | Dùng ở | Đã có |
|---|---|---|---|---|
| `lat-sach` | Lật một trang sách | page turn book | Thảo mở sách (cảnh khép vòng), mở chương bằng sách |  |
| `lat-sach-nhanh` | Lật nhanh nhiều trang | book pages flip fast | Tua thời gian, tìm trong sách |  |
| `gap-sach` | Gấp sách lại | book close | Kết một ý / bỏ dở việc đọc |  |
| `giay-sot-soat` | Cầm, xếp tờ giấy | paper handling rustle | Thảo lấy giấy kẻ lịch |  |
| `but-viet` | Bút chì viết lên giấy (2–4 s) (lặp) | pencil writing on paper | Vẽ cột giờ, ghi danh sách |  |
| `but-gach` | Gạch một nét bút | pen scribble cross out | Gạch bỏ thói quen cũ |  |
| `xe-giay` | Xé giấy | paper tear | Bỏ kế hoạch cũ |  |
| `vo-giay` | Vò giấy | paper crumple | Thất vọng, làm lại |  |
| `dat-dien-thoai` | Đặt điện thoại úp xuống bàn | phone put down on table | "Điện thoại úp xuống" (cảnh khép vòng) |  |
| `dat-coc` | Đặt cốc xuống bàn | mug put down table | Nghỉ giải lao, buổi sáng |  |
| `rot-nuoc` | Rót trà / nước | pour tea cup | Buổi sáng chậm, thư giãn |  |
| `mo-cua` | Mở cửa | door open interior | Về nhà, vào phòng họp |  |
| `dong-cua` | Đóng cửa | door close interior | Tan làm, khép lại một ngày |  |
| `chia-khoa` | Chùm chìa khoá, mở khoá | keys jingle unlock door | "Sáu rưỡi, về đến nhà" |  |
| `buoc-chan` | Bước chân trong nhà (lặp) | footsteps indoor wood | Nhân vật đi vào khung hình |  |
| `keo-ghe` | Kéo ghế ngồi xuống | chair drag sit down | Bắt đầu làm việc / học |  |
| `ban-phim-that` | Gõ bàn phím thật (lặp) | keyboard typing office | Cảnh văn phòng (thay go-phim-dai) |  |
| `chuot-that` | Click chuột thật | mouse click | Gửi email, nộp bài |  |
| `cong-tac-den` | Bật/tắt công tắc đèn | light switch | Đêm khuya, tắt đèn đi ngủ |  |
| `vo-tay` | Vỗ tay nhỏ | small group applause | Hoàn thành câu đố, chúc mừng |  |
| `van-phong` | Văn phòng: tiếng người xa, máy in (lặp) | office ambience | Mọi cảnh ở công ty |  |
| `quan-ca-phe` | Quán cà phê (lặp) | cafe ambience | Gặp bạn, học ngoài quán |  |
| `duong-pho` | Đường phố xa, xe cộ (lặp) | city traffic distant | Đi làm, tan làm |  |
| `dem-yen` | Đêm yên, côn trùng (lặp) | night ambience crickets | Đêm khuya trong phòng |  |
| `mua-that` | Mưa ngoài cửa sổ (lặp) | rain on window | Buổi tối ở nhà (thay mua) |  |
| `chim-sang` | Buổi sáng, chim hót (lặp) | morning birds | Sáng hôm sau, buổi sáng của mình |  |
| `lop-hoc` | Lớp học / giảng đường (lặp) | classroom ambience | Cảnh trường, lớp ôn thi |  |
