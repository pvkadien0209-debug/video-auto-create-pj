// edit-breakers-list.js — #144 danh mục họ "Cảnh ngắt nhịp toàn màn" (E-BRK-01…12) ↔ module BRK-01…12 (modules/edit-breakers.jsx).
// Kịch bản ghi một cảnh riêng: { id, module: "BRK-07", data: {...}, lines: [...] } chèn giữa các cảnh bảng (BOARD-01).
// Mỗi cảnh 3–8 s (check() báo lỗi khi lời đọc > 8 s). Kịch bản có presenter: thêm panel: false để cảnh giữ toàn màn.
// Gợi ý nhịp (NGHIEN-CUU-QUAY-DUNG §4.4): ~1 cảnh ngắt mỗi 60–120 s, không dùng cùng mã hai lần liên tiếp; rehook (E-BRK-07) mỗi ~2 phút.
// sfx gợi ý (scene.sfx): BRK-01 "re-dia" lúc đứng hình · BRK-02/03 "nhan" · BRK-06 "whoosh" · BRK-07 "cau-hoi" · BRK-12 "whoosh" lúc cắt.
const L = (id, say, sub, extra = {}) => ({ id, lang: "en", say, sub, ...extra });

export const EDIT_BREAK = [
  {
    id: "E-BRK-01", module: "BRK-01", name: "Dừng hình + nhãn chú thích",
    how: "Cảnh đang chạy loé trắng rồi đứng hình, ngả xám; khoanh đỏ vào hình chính, mũi tên + nhãn (label), ghi chú nhỏ (note) dưới nhãn; Đét chỉ vào. tone: \"good\" → màu xanh (chỉ chỗ làm đúng). Câu 1 = lúc khoanh, câu 2 = lúc hiện note.",
    data: { illus: "mobile-phone", around: ["alarm-clock", "bed"], label: "Sai ở đây!", note: "Lướt điện thoại ngay khi vừa mở mắt" },
    lines: [L("l1", "Stop right there.", "Dừng lại đã."), L("l2", "The phone comes first, before anything else.", "Điện thoại đến trước mọi thứ khác.")],
  },
  {
    id: "E-BRK-02", module: "BRK-02", name: "Tiêu đề đập vào",
    how: "Nền tối, từng từ của title lao xuống, màn rung theo mỗi cú; hl = cụm tô vàng (mặc định từ cuối); kicker nhãn trên, sub dòng phụ hiện ở câu 2. Dùng mở một ý mới / chương nhỏ.",
    data: { kicker: "Ý chính", title: "Bảy tiếng không ai nhìn thấy", hl: "không ai nhìn thấy", sub: "Thời gian ngoài giờ làm và giờ ngủ" },
    lines: [L("l1", "Seven hours nobody sees.", "Bảy tiếng không ai nhìn thấy."), L("l2", "The time outside work and sleep.", "Thời gian ngoài giờ làm và giờ ngủ.")],
  },
  {
    id: "E-BRK-03", module: "BRK-03", name: "Con số đếm nhảy",
    how: "Nền màu nhấn, số lăn từ from (mặc định 0) tới value rồi \"đấm\" vào (nảy, rung, vòng sáng); prefix/suffix, decimals; label hiện ở câu 2. Dùng một con số neo, không cần nguồn (có nguồn → STAT-01).",
    data: { value: 112, suffix: " giờ", label: "mỗi tháng ngoài giờ làm và giờ ngủ", illus: "hourglass-done" },
    lines: [L("l1", "Add it up across a month.", "Cộng cả tháng lại."), L("l2", "That is one hundred and twelve hours.", "Là một trăm mười hai giờ.")],
  },
  {
    id: "E-BRK-04", module: "BRK-04", name: "Chia đôi Sai / Đúng",
    how: "Nửa Sai (wrong) lấp màn trước, câu 2 thì nửa Đúng (right) đẩy vào chia đôi, bên Sai mờ đi và bị đóng dấu ✗. wrongIllus/rightIllus, labels [\"Sai\",\"Đúng\"] đổi được (vd. [\"Trước\",\"Sau\"]), title nhãn trên cùng.",
    data: { wrong: "Đợi có hứng mới bắt đầu", right: "Bắt đầu năm phút, hứng sẽ đến sau", wrongIllus: "sleeping-face", rightIllus: "person-running" },
    lines: [L("l1", "Waiting for the mood to start?", "Đợi có hứng mới bắt đầu?"), L("l2", "Start for five minutes. The mood follows.", "Bắt đầu năm phút. Hứng sẽ đến sau.")],
  },
  {
    id: "E-BRK-05", module: "BRK-05", name: "Nhắc lại, Đét trong khung nhỏ (PiP)",
    how: "Thẻ \"Nhắc nhanh\" bên trái, các ý (points 1–3) tick lần lượt theo câu đọc (có câu dẫn đầu thì ý i theo câu i+1); Đét nói trong cửa sổ PiP góc phải (miệng theo câu không có who). Dùng tóm tắt giữa bài.",
    data: { title: "Đến đây, mình đã biết", points: ["Một ngày có bảy tiếng tự do", "Mệt là do đầu óc, không phải cơ thể", "Bắt đầu nhỏ, đều đặn"], illus: "light-bulb" },
    lines: [L("l1", "Recap: seven free hours a day.", "Nhắc lại: một ngày có bảy tiếng tự do."), L("l2", "Tired minds, not tired bodies.", "Mệt là do đầu óc, không phải cơ thể."), L("l3", "Start small.", "Bắt đầu nhỏ, đều đặn.")],
  },
  {
    id: "E-BRK-06", module: "BRK-06", name: "Dải montage nhanh",
    how: "3–5 ô cắt dồn (mỗi ô 0,6 s toàn màn, màu khác nhau, hình + chữ ≤ 4 tiếng), rồi xếp thành dải phim kèm title. Lời đọc ngắn, một hơi (burst). Dùng liệt kê ví dụ nhanh.",
    data: { title: "Bảy tiếng ấy trôi đi đâu?", items: [{ illus: "mobile-phone", text: "Lướt mạng" }, { illus: "television", text: "Xem phim" }, { illus: "bed", text: "Nằm nghỉ" }, { illus: "hot-beverage", text: "Ngồi quán" }] },
    lines: [L("l1", "Scrolling, shows, naps, coffee.", "Lướt mạng, xem phim, nằm nghỉ, ngồi quán."), L("l2", "Where did the seven hours go?", "Bảy tiếng ấy trôi đi đâu?")],
  },
  {
    id: "E-BRK-07", module: "BRK-07", name: "Câu hỏi mở rehook \"Nhưng khoan…\"",
    how: "Màn tối lại, chữ viết tay kicker (mặc định \"Nhưng khoan…\") gõ ra, câu 2 thì question đập vào; Đét ló lên góc phải, ngạc nhiên. Dùng mỗi ~2 phút để giữ người xem (rehook).",
    data: { question: "Nếu mệt thật, sao tối nào cũng thức khuya?", illus: "thinking-face" },
    lines: [L("l1", "But wait.", "Nhưng khoan."), L("l2", "If you're so tired, why stay up late every night?", "Nếu mệt thật, sao tối nào cũng thức khuya?")],
  },
  {
    id: "E-BRK-08", module: "BRK-08", name: "Dòng thời gian quét nhanh",
    how: "Đầu quét chạy trái → phải, mốc (points 3–6: label ≤ 4 tiếng, sub, illus) bật lên khi được quét qua, xen trên/dưới; current = chỉ số mốc sáng vàng (mặc định mốc cuối). Dùng định vị \"ta đang ở đâu\" trong ngày / trong câu chuyện.",
    data: { title: "Một ngày của bạn", points: [{ label: "7 giờ", sub: "Thức dậy", illus: "alarm-clock" }, { label: "8–17 giờ", sub: "Đi làm", illus: "office-building" }, { label: "18 giờ", sub: "Về nhà", illus: "house" }, { label: "19–23 giờ", sub: "Bảy tiếng tự do", illus: "sparkles" }], current: 3 },
    lines: [L("l1", "Morning, work, home.", "Sáng, đi làm, về nhà."), L("l2", "And then, the free hours.", "Rồi đến những giờ tự do.")],
  },
  {
    id: "E-BRK-09", module: "BRK-09", name: "Lower-third thông tin nguồn",
    how: "Cảnh toàn (illus lớn + around, máy đẩy chậm) và dải tên kiểu Vox hiện theo bước ở 1/3 dưới: kind (nhãn: Nguồn / Nhân vật / Địa điểm), title (≤ 8 tiếng, một dòng), detail hiện ở câu 2; icon Lucide trong ô màu.",
    data: { kind: "Nguồn", title: "Arnold Bennett, 1908", detail: "How to Live on 24 Hours a Day", illus: "open-book", around: ["spiral-calendar", "alarm-clock"], icon: "book-open" },
    lines: [L("l1", "This idea is over a hundred years old.", "Ý này đã hơn một trăm năm tuổi."), L("l2", "Arnold Bennett, nineteen-oh-eight.", "Arnold Bennett, năm 1908.")],
  },
  {
    id: "E-BRK-10", module: "BRK-10", name: "Trích dẫn lớn (pull quote)",
    how: "Ngoặc kép khổng lồ, quote hiện từng từ, mark (cụm có trong quote) được tô dạ quang, rồi by (người nói) trượt vào ở câu 2. Câu trích ≤ 26 tiếng.",
    data: { quote: "Bạn không thiếu thời gian, bạn chỉ chưa dùng đúng bảy tiếng mỗi tối", mark: "bảy tiếng mỗi tối", by: "Arnold Bennett", illus: "open-book" },
    lines: [L("l1", "You don't lack time. You just haven't used your evenings.", "Bạn không thiếu thời gian, bạn chỉ chưa dùng đúng buổi tối."), L("l2", "Arnold Bennett.", "Arnold Bennett.")],
  },
  {
    id: "E-BRK-11", module: "BRK-11", name: "\"3 điều cần nhớ\" đếm ngược",
    how: "Cột trái số lớn lật n → 1, mỗi số kéo một dòng vào danh sách bên phải (điều số 1 ở trên, hiện sau cùng, vàng). items[0] = điều số 1. Lời đọc theo thứ tự đếm ngược; có câu dẫn đầu thì điều thứ j theo câu j+1.",
    data: { title: "3 điều cần nhớ", items: ["Bắt đầu tối nay", "Chỉ chín mươi phút", "Không bỏ hai tối liền"] },
    lines: [L("l1", "Three: never skip two nights.", "Ba: không bỏ hai tối liền."), L("l2", "Two: just ninety minutes.", "Hai: chỉ chín mươi phút."), L("l3", "One: start tonight.", "Một: bắt đầu tối nay.")],
  },
  {
    id: "E-BRK-12", module: "BRK-12", name: "Chữ khớp chuyển (match cut từ bảng)",
    how: "Chữ viết tay word trên bảng (ở from [x, y], nên trùng chỗ chữ đó trên ô bảng vừa xem) được khoanh, máy lao vào chữ, CẮT sang màn màu: cùng chữ in đậm, rồi sub hiện ở câu 2. others = chữ mờ khác trên bảng.",
    data: { word: "90 phút", sub: "Ba buổi tối mỗi tuần, chín mươi phút mỗi buổi", from: [620, 360], others: ["7 giờ", "…", "tối"] },
    lines: [L("l1", "Ninety minutes.", "Chín mươi phút."), L("l2", "Three evenings a week, ninety minutes each.", "Ba buổi tối mỗi tuần, chín mươi phút mỗi buổi.")],
  },
];
