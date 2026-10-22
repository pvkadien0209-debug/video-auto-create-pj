// TỰ SINH bởi tools/sfx-kho.mjs — đừng sửa tay (sửa tools/make-sfx.mjs hoặc thêm tệp vào public/sfx/_goc/ rồi chạy lại).
// khoá → { nhom, mota, gain (độ to khi phát 0..1), ms (độ dài tệp), loop? (lặp được), nguon }
export const KHO = {
 "cau-hoi": {
  "nhom": "cau-truc",
  "mota": "Đặt câu hỏi (ASK-01): hai nốt đi lên",
  "gain": 0.34,
  "ms": 550,
  "nguon": "code"
 },
 "chuong": {
  "nhom": "cau-truc",
  "mota": "Mở chương (HOST-03): vút ngắn + hai nốt",
  "gain": 0.42,
  "ms": 800,
  "nguon": "code"
 },
 "lat-the": {
  "nhom": "cau-truc",
  "mota": "Thẻ chữ lật/hiện (TEXT-01/02)",
  "gain": 0.34,
  "ms": 220,
  "nguon": "code"
 },
 "muc-luc": {
  "nhom": "cau-truc",
  "mota": "Mục lục hiện ra (TOC-01)",
  "gain": 0.34,
  "ms": 750,
  "nguon": "code"
 },
 "y-tuong": {
  "nhom": "cau-truc",
  "mota": "Ý chính / \"à ra thế\": ting + lấp lánh",
  "gain": 0.34,
  "ms": 1100,
  "nguon": "code"
 },
 "nay": {
  "nhom": "chuyen-dong",
  "mota": "Nảy \"boing\" (nhân vật bật dậy, chỗ vui)",
  "gain": 0.32,
  "ms": 600,
  "nguon": "code"
 },
 "roi": {
  "nhom": "chuyen-dong",
  "mota": "Rơi xuống (huýt đi xuống + chạm)",
  "gain": 0.26,
  "ms": 800,
  "nguon": "code"
 },
 "truot": {
  "nhom": "chuyen-dong",
  "mota": "Trượt (bảng/thẻ kéo ngang)",
  "gain": 0.28,
  "ms": 500,
  "nguon": "code"
 },
 "vuot-man-hinh": {
  "nhom": "chuyen-dong",
  "mota": "Vuốt màn hình điện thoại",
  "gain": 0.24,
  "ms": 250,
  "nguon": "code"
 },
 "vut-len": {
  "nhom": "chuyen-dong",
  "mota": "Vút lên (vật bay lên / hiện ra từ dưới)",
  "gain": 0.3,
  "ms": 600,
  "nguon": "code"
 },
 "whoosh": {
  "nhom": "chuyen-dong",
  "mota": "Vút (chuyển cảnh whip)",
  "gain": 0.32,
  "ms": 420,
  "nguon": "code"
 },
 "whoosh-dai": {
  "nhom": "chuyen-dong",
  "mota": "Vút dài (đổi cảnh lớn, bay qua thành phố)",
  "gain": 0.3,
  "ms": 1300,
  "nguon": "code"
 },
 "whoosh-ngan": {
  "nhom": "chuyen-dong",
  "mota": "Vút ngắn (chữ/thẻ trượt vào)",
  "gain": 0.3,
  "ms": 220,
  "nguon": "code"
 },
 "chup-anh": {
  "nhom": "dien-thoai",
  "mota": "Chụp ảnh / chụp màn hình",
  "gain": 0.3,
  "ms": 350,
  "nguon": "code"
 },
 "go-phim": {
  "nhom": "dien-thoai",
  "mota": "Gõ phím ngắn (TYPE-01)",
  "gain": 0.16,
  "ms": 1100,
  "nguon": "code"
 },
 "go-phim-dai": {
  "nhom": "dien-thoai",
  "mota": "Gõ phím liên tục — LẶP (làm việc trên máy tính)",
  "gain": 0.14,
  "ms": 4000,
  "loop": true,
  "nguon": "code"
 },
 "nhac-chuong": {
  "nhom": "dien-thoai",
  "mota": "Nhạc chuông (cuộc gọi đến)",
  "gain": 0.24,
  "ms": 3000,
  "nguon": "code"
 },
 "rung": {
  "nhom": "dien-thoai",
  "mota": "Điện thoại rung (hai nhịp)",
  "gain": 0.26,
  "ms": 750,
  "nguon": "code"
 },
 "rung-dai": {
  "nhom": "dien-thoai",
  "mota": "Điện thoại rung liên tục — LẶP (cuộc gọi bị lờ đi)",
  "gain": 0.24,
  "ms": 3000,
  "loop": true,
  "nguon": "code"
 },
 "tin-den": {
  "nhom": "dien-thoai",
  "mota": "Tin nhắn đến",
  "gain": 0.34,
  "ms": 300,
  "nguon": "code"
 },
 "tin-di": {
  "nhom": "dien-thoai",
  "mota": "Tin nhắn gửi đi",
  "gain": 0.3,
  "ms": 200,
  "nguon": "code"
 },
 "xu": {
  "nhom": "dien-thoai",
  "mota": "Một đồng xu / tiền vào",
  "gain": 0.34,
  "ms": 400,
  "nguon": "code"
 },
 "xu-nhieu": {
  "nhom": "dien-thoai",
  "mota": "Nhiều xu rơi (tiết kiệm được, lương về)",
  "gain": 0.26,
  "ms": 1600,
  "nguon": "code"
 },
 "buon": {
  "nhom": "dung-sai",
  "mota": "\"Ôi thôi\" (kèn buồn wah-wah) — chỉ dùng cho chỗ hài nhẹ",
  "gain": 0.28,
  "ms": 2200,
  "nguon": "code"
 },
 "chon": {
  "nhom": "dung-sai",
  "mota": "Chọn đáp án / bấm nút (blip)",
  "gain": 0.3,
  "ms": 120,
  "nguon": "code"
 },
 "chuc-mung": {
  "nhom": "dung-sai",
  "mota": "Chúc mừng / hoàn thành (kèn ngắn + lấp lánh)",
  "gain": 0.32,
  "ms": 1900,
  "nguon": "code"
 },
 "click": {
  "nhom": "dung-sai",
  "mota": "Bấm chuột / công tắc",
  "gain": 0.3,
  "ms": 50,
  "nguon": "code"
 },
 "dung": {
  "nhom": "dung-sai",
  "mota": "Đúng (ba nốt đi lên)",
  "gain": 0.38,
  "ms": 600,
  "nguon": "code"
 },
 "khong-phai": {
  "nhom": "dung-sai",
  "mota": "Không phải / gỡ hiểu lầm (hai nốt đi xuống, nhẹ)",
  "gain": 0.34,
  "ms": 550,
  "nguon": "code"
 },
 "nhan": {
  "nhom": "dung-sai",
  "mota": "Nhấn câu chốt (TEXT-04): \"bụp\" trầm",
  "gain": 0.5,
  "ms": 320,
  "nguon": "code"
 },
 "pop": {
  "nhom": "dung-sai",
  "mota": "Vật/ô nhỏ bật ra",
  "gain": 0.3,
  "ms": 130,
  "nguon": "code"
 },
 "sai": {
  "nhom": "dung-sai",
  "mota": "Sai rõ ràng (còi trầm) — dùng ít",
  "gain": 0.22,
  "ms": 550,
  "nguon": "code"
 },
 "thang-cap": {
  "nhom": "dung-sai",
  "mota": "Lên cấp / tiến bộ (rải nốt nhanh đi lên)",
  "gain": 0.32,
  "ms": 850,
  "nguon": "code"
 },
 "tich": {
  "nhom": "dung-sai",
  "mota": "Đánh dấu một ý trong danh sách",
  "gain": 0.3,
  "ms": 80,
  "nguon": "code"
 },
 "ting": {
  "nhom": "dung-sai",
  "mota": "Con số / kết luận hiện ra",
  "gain": 0.36,
  "ms": 650,
  "nguon": "code"
 },
 "hit": {
  "nhom": "hoi-hop",
  "mota": "Đập mạnh (lộ con số/đáp án lớn)",
  "gain": 0.4,
  "ms": 1400,
  "nguon": "code"
 },
 "hoi-hop": {
  "nhom": "hoi-hop",
  "mota": "Nền hồi hộp trầm — LẶP (đoạn căng, trước câu hỏi khó)",
  "gain": 0.14,
  "ms": 4000,
  "loop": true,
  "nguon": "code"
 },
 "lap-lanh": {
  "nhom": "hoi-hop",
  "mota": "Lấp lánh nhẹ (vật mới, sạch, đẹp)",
  "gain": 0.24,
  "ms": 900,
  "nguon": "code"
 },
 "rise": {
  "nhom": "hoi-hop",
  "mota": "Dâng ngắn trước khi lộ",
  "gain": 0.28,
  "ms": 700,
  "nguon": "code"
 },
 "rise-dai": {
  "nhom": "hoi-hop",
  "mota": "Dâng dài 3 s (trước đáp án / con số lớn), nên nối với \"hit\"",
  "gain": 0.22,
  "ms": 3200,
  "nguon": "code"
 },
 "tiet-lo": {
  "nhom": "hoi-hop",
  "mota": "Lộ ra lấp lánh (đáp án đẹp, \"đây rồi\")",
  "gain": 0.28,
  "ms": 1300,
  "nguon": "code"
 },
 "tim-dap": {
  "nhom": "hoi-hop",
  "mota": "Tim đập (lo lắng, phỏng vấn) — LẶP",
  "gain": 0.36,
  "ms": 2000,
  "loop": true,
  "nguon": "code"
 },
 "trong-don": {
  "nhom": "hoi-hop",
  "mota": "Trống dồn rồi \"chát\" (công bố kết quả)",
  "gain": 0.3,
  "ms": 2600,
  "nguon": "code"
 },
 "mua": {
  "nhom": "khong-khi",
  "mota": "Mưa ngoài cửa sổ — LẶP (bản code, nên thay tệp thật)",
  "gain": 0.14,
  "ms": 6000,
  "loop": true,
  "nguon": "code"
 },
 "phong-yen": {
  "nhom": "khong-khi",
  "mota": "Tiếng phòng yên (nền rất nhỏ cho cảnh trong nhà) — LẶP",
  "gain": 0.1,
  "ms": 6000,
  "loop": true,
  "nguon": "code"
 },
 "bao-thuc": {
  "nhom": "thoi-gian",
  "mota": "Chuông báo thức (sáng hôm sau, trễ giờ)",
  "gain": 0.2,
  "ms": 2500,
  "nguon": "code"
 },
 "dem-nguoc": {
  "nhom": "thoi-gian",
  "mota": "Đếm ngược 3–2–1–bíp (hết giờ)",
  "gain": 0.3,
  "ms": 3700,
  "nguon": "code"
 },
 "dem-so": {
  "nhom": "thoi-gian",
  "mota": "Con số chạy ngắn (chậm dần)",
  "gain": 0.16,
  "ms": 1000,
  "nguon": "code"
 },
 "dem-so-dai": {
  "nhom": "thoi-gian",
  "mota": "Con số chạy lên rồi dừng \"ting\" (đếm 0 → 16)",
  "gain": 0.18,
  "ms": 2600,
  "nguon": "code"
 },
 "dong-ho": {
  "nhom": "thoi-gian",
  "mota": "Một tiếng tích (đồng hồ hiện ra)",
  "gain": 0.14,
  "ms": 70,
  "nguon": "code"
 },
 "dong-ho-chuong": {
  "nhom": "thoi-gian",
  "mota": "Chuông đồng hồ điểm giờ (hai tiếng boong)",
  "gain": 0.24,
  "ms": 2400,
  "nguon": "code"
 },
 "re-dia": {
  "nhom": "thoi-gian",
  "mota": "Khựng lại (đĩa rè) — dừng hình trong DLG-01",
  "gain": 0.5,
  "ms": 500,
  "nguon": "code"
 },
 "tich-tac": {
  "nhom": "thoi-gian",
  "mota": "Một nhịp đếm (câu đố dùng)",
  "gain": 0.22,
  "ms": 80,
  "nguon": "code"
 },
 "tich-tac-dai": {
  "nhom": "thoi-gian",
  "mota": "Đồng hồ tích tắc, 1 nhịp/giây — LẶP suốt cảnh (vd. đêm khuya, giờ tan làm)",
  "gain": 0.2,
  "ms": 4000,
  "loop": true,
  "nguon": "code"
 },
 "tua": {
  "nhom": "thoi-gian",
  "mota": "Tua lại (DLG-01)",
  "gain": 0.34,
  "ms": 800,
  "nguon": "code"
 },
 "det": {
  "nhom": "thuong-hieu",
  "mota": "\"Đét\" (vòng Vòng Đét, iris)",
  "gain": 0.55,
  "ms": 250,
  "nguon": "code"
 },
 "logo": {
  "nhom": "thuong-hieu",
  "mota": "Nhạc hiệu DetPro (END-05)",
  "gain": 0.55,
  "ms": 1400,
  "nguon": "code"
 },
 "but-gach": {
  "nhom": "vat-that",
  "mota": "Gạch một nét bút (bản code tạm)",
  "gain": 0.24,
  "ms": 350,
  "nguon": "code"
 },
 "but-viet": {
  "nhom": "vat-that",
  "mota": "Bút chì viết lên giấy — LẶP (bản code tạm; bảng vẽ BOARD-01)",
  "gain": 0.2,
  "ms": 3000,
  "loop": true,
  "nguon": "code"
 },
 "go-bang": {
  "nhom": "vat-that",
  "mota": "Bút dạ gõ lên bảng \"cộc\" (mỗi lần tay Đét đặt bút vẽ)",
  "gain": 0.3,
  "ms": 180,
  "nguon": "code"
 },
 "go-bang-2": {
  "nhom": "vat-that",
  "mota": "Gõ bảng hai cái \"cộc cộc\" (chỉ vào một ô: nhìn đây!)",
  "gain": 0.3,
  "ms": 400,
  "nguon": "code"
 }
};
