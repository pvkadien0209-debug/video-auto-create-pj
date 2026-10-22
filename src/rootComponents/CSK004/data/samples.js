import { SAMPLES_OPEN2 } from "./samples/open2.js";
import { SAMPLES_OPEN_DRAMA } from "./samples/open-drama.js";
import { SAMPLES_BEAT_END2 } from "./samples/beat-end2.js";
import { SAMPLES_LIST2 } from "./samples/list2.js";
import { SAMPLES_TEXT2 } from "./samples/text2.js";
import { SAMPLES_REL2 } from "./samples/rel2.js";
import { SAMPLES_CMP2 } from "./samples/cmp2.js";
import { SAMPLES_NUM2 } from "./samples/num2.js";
import { SAMPLES_RSN } from "./samples/rsn.js";
import { SAMPLES_QUIZ2 } from "./samples/quiz2.js";
import { SAMPLES_STORY2 } from "./samples/story2.js";
import { SAMPLES_ANIM } from "./samples/anim.js"; // #106: mẫu có kèm lines
import { SAMPLES_VA } from "./samples/va.js"; // #109: 6 module video mẫu
import { SAMPLES_BRK } from "./samples/edit-breakers.js"; // #144: 12 cảnh ngắt nhịp (BRK)
// samples.js — dữ liệu mẫu cho trang trưng bày (gallery): mỗi module 2 bộ, "thuong" (vừa) và "dai" (dài nhất cho phép)
// để kiểm chữ có tràn khung không. Chữ lấy từ các bài đã có (thuê trọ, ăn uống lành mạnh).
const BASE = {
  "OPEN-01": {
    thuong: { question: "Thuê phòng trọ lần đầu, nên bắt đầu từ đâu?", illus: "house", around: ["red-question-mark", "thinking-face"] },
    dai: { question: "Bạn vừa nhận giấy báo nhập học, câu hỏi đầu tiên là ở đâu và thuê phòng thế nào cho an toàn?", kicker: "Chuỗi Chuẩn bị vào đại học xa nhà", illus: "school", around: ["backpack", "house", "red-question-mark"] },
  },
  "OPEN-02": {
    thuong: { myth: "Ảnh đẹp, giá mềm thì cứ chuyển cọc để giữ phòng", illus: "money-with-wings", illusAfter: "face-screaming-in-fear" },
    dai: { myth: "Chủ nhà đã hứa miệng sẽ sửa cửa sổ tuần sau thì không cần ghi vào hợp đồng nữa", label: "Hiểu lầm thường gặp", illus: "handshake", illusAfter: "anxious-face-with-sweat" },
  },
  "OPEN-07": {
    thuong: { claim: "Tìm phòng sớm là bước dễ nhất để có chỗ ở tốt", count: 3, illus: "spiral-calendar" },
    dai: { claim: "Bắt đầu tìm khoảng một tháng trước ngày nhập học để có thời gian so sánh vài phòng", count: 4, countLabel: "4 lý do", illus: "tear-off-calendar", icons: ["magnifying-glass-tilted-left", "house", "money-bag", "check-mark-button"] },
  },
  "OPEN-11": {
    thuong: { promise: "Bốn việc giúp bạn thuê phòng an toàn", keywords: ["Xem tận mắt", "Xem buổi tối", "Lấy giấy biên nhận", "Báo trước khi đi"], illus: "house", keywordIllus: ["eyes", "crescent-moon", "receipt", "spiral-calendar"] },
    dai: { promise: "Sau video này bạn sẽ biết đọc nhãn dinh dưỡng trên bao bì", keywords: ["Khẩu phần", "Natri và muối", "Đường thêm vào"], illus: "magnifying-glass-tilted-left", keywordIllus: ["fork-and-knife-with-plate", "salt", "candy"] },
  },
  "BEAT-05": {
    thuong: { n: 1, of: 4, title: "Tìm phòng và nhận ra tin giả", illus: "magnifying-glass-tilted-left" },
    dai: { n: 3, of: 4, title: "Hợp đồng, tiền cọc và giấy tờ cần giữ", illus: "page-facing-up" },
  },
  "LIST-01": {
    thuong: { title: "Tổng chi mỗi tháng gồm", items: ["Tiền phòng", "Điện, nước, mạng, gửi xe", "Ăn uống, đi lại, sách vở", "Một khoản để dành lúc ốm"], illus: "money-bag", icons: ["house", "electric-plug", "bowl-with-spoon", "pill"] },
    dai: { title: "Hỏi chủ nhà trước khi gật đầu", items: ["Giá thuê đã gồm những gì?", "Điện nước tính thế nào?", "Tiền cọc khi nào được trả lại?", "Đồ hỏng thì ai chịu tiền sửa?", "Có được ở ghép thêm người không?", "Mấy giờ khu trọ đóng cổng?"], illus: "person-raising-hand" },
  },
  "LIST-02": {
    thuong: { title: "Dấu hiệu tin đăng giả", items: [{ icon: "badge-percent", illus: "money-with-wings", text: "Giá rẻ bất thường" }, { icon: "image", illus: "framed-picture", text: "Ảnh đẹp như ảnh mẫu" }, { icon: "alarm-clock", illus: "alarm-clock", text: "Giục chuyển cọc ngay" }, { icon: "eye-off", illus: "see-no-evil-monkey", text: "Né cho xem tận nơi" }], illus: "warning" },
    dai: { title: "Kiểm tra tin đăng", items: [{ icon: "search", illus: "magnifying-glass-tilted-left", text: "Tìm thử ảnh trên mạng" }, { icon: "phone", illus: "telephone-receiver", text: "Gọi điện thay vì nhắn" }, { icon: "map-pin", illus: "round-pushpin", text: "Hẹn xem tận nơi" }, { icon: "users", illus: "busts-in-silhouette", text: "Hỏi người đang thuê" }, { icon: "receipt", illus: "receipt", text: "Hỏi rõ phí môi giới" }, { icon: "file-text", illus: "page-facing-up", text: "Đọc kỹ hợp đồng" }] },
  },
  "LIST-05": {
    thuong: { title: "Khi xem phòng, thử ngay", items: ["Mở vòi nước, bật đèn và quạt", "Thử ổ điện, khoá cửa, cửa sổ", "Nhìn vết ẩm mốc, nhà vệ sinh"], illus: "detective" },
    dai: { title: "Ngày trả phòng", items: ["Dọn sạch phòng", "Trả đủ chìa khoá", "Thanh toán điện nước", "Cùng chủ nhà so phòng với ảnh ngày dọn vào", "Xin lại tiền cọc có giấy xác nhận"], illus: "broom" },
  },
  "LIST-13": {
    thuong: { title: "Ngày dọn vào", items: [{ title: "Chụp ảnh căn phòng", detail: "Ảnh có ngày giờ giúp bạn không bị trừ cọc oan.", illus: "camera-with-flash" }, { title: "Chụp công tơ điện, nước", detail: "Để không phải trả phần của người ở trước.", illus: "high-voltage" }] },
    dai: { title: "Ngày dọn vào cần làm gì", items: [{ title: "Chụp ảnh căn phòng", detail: "Trước khi xếp đồ, chụp cả những chỗ hỏng rồi gửi cho chủ nhà.", illus: "camera-with-flash" }, { title: "Chụp công tơ điện, nước", detail: "Gửi chủ nhà xác nhận chỉ số ngày nhận phòng.", illus: "high-voltage" }, { title: "Đề nghị thay ổ khoá", detail: "Người thuê cũ có thể vẫn giữ chìa.", illus: "locked-with-key" }, { title: "Lưu số chủ nhà", detail: "Nhắn sớm kèm ảnh khi có đồ hỏng.", illus: "mobile-phone" }] },
  },
  "REL-01": {
    thuong: { cause: "Đưa cọc mà không có giấy biên nhận", effect: "Rất khó đòi lại tiền", causeIllus: "money-bag", effectIllus: "money-with-wings" },
    dai: { title: "Vì sao phải xem phòng buổi tối", cause: "Chỉ xem phòng vào buổi sáng khi khu trọ còn yên tĩnh", effect: "Không biết đường về ban đêm có ồn, có tối không", linkLabel: "nên", causeIllus: "sun", effectIllus: "crescent-moon" },
  },
  "REL-02": {
    thuong: { chain: ["Không đọc điều khoản trả phòng sớm", "Dọn đi rồi mới báo", "Mất toàn bộ tiền cọc"], illus: ["page-facing-up", "package", "money-with-wings"] },
    dai: { title: "Một bước nhỏ bị bỏ qua", chain: ["Tìm phòng vào tuần cuối", "Chỉ còn phòng xa và ồn", "Ký vội không đọc hợp đồng", "Bị tăng giá giữa chừng", "Phải chuyển đi, mất cọc"], illus: ["tear-off-calendar", "house", "writing-hand", "chart-increasing", "money-with-wings"] },
  },
  "CMP-01": {
    thuong: { labels: ["Ban ngày", "Buổi tối"], left: "Thấy căn phòng", right: "Thấy con đường: có ồn không, đường về có đèn không", illus: ["sun", "crescent-moon"] },
    dai: { title: "Khi chủ nhà nói “để mai viết giấy”", labels: ["Trước", "Sau"], left: "“Dạ vâng, mai anh viết sau cũng được ạ.”", right: "“Anh ghi giúp em giấy biên nhận luôn nhé: số tiền, ngày hôm nay, hai bên cùng ký.”", illus: ["anxious-face-with-sweat", "receipt"] },
  },
  "CMP-06": {
    thuong: { do: ["Nhắn chủ nhà sớm kèm ảnh", "Thống nhất ai sửa, ai trả"], dont: ["Tự ý sửa lớn rồi mới đòi tiền"], doIcons: ["mobile-phone", "handshake"], dontIcons: ["hammer"] },
    dai: { do: ["Xem lại hợp đồng khi bị tăng giá", "Lịch sự đề nghị giữ đúng giá", "Bàn với bố mẹ trước", "Báo trả phòng đúng hạn"], dont: ["Tự ý ngừng đóng tiền", "Dọn đi rồi mới báo", "Đăng địa chỉ phòng lên mạng", "Sạc xe điện qua đêm không ai trông"] },
  },
  "NUM-01": {
    thuong: { kicker: "Bạn có biết", value: 9.42, unit: "g muối/ngày", label: "là lượng muối trung bình người Việt ăn, gần gấp đôi mức WHO khuyên", source: "Điều tra STEPS 2015, Bộ Y tế", illus: "salt" },
    dai: { kicker: "Bạn có biết", value: 5, unit: "g", label: "là mức muối tối đa mỗi ngày WHO khuyên cho người lớn, chưa đến một thìa cà phê", source: "WHO, Sodium reduction", illus: "spoon" },
  },
  "STORY-01": {
    thuong: { context: "Minh ở quê, thấy trên mạng một phòng đẹp, giá mềm.", action: "Chủ nhà giục, Minh chuyển cọc ngay.", outcome: "Đến nơi mới thấy phòng ẩm mốc, không có cửa sổ.", illus: ["man-student", "money-with-wings", "face-screaming-in-fear"] },
    dai: { context: "Duy ký hợp đồng thuê cả năm mà không đọc phần trả phòng sớm.", action: "Sang học kỳ hai, Duy xếp đồ đi trong một buổi chiều rồi mới nhắn cho chủ nhà.", outcome: "Chủ nhà giữ toàn bộ tiền cọc vì hợp đồng ghi cần báo trước một tháng.", illus: ["man-student", "package", "crying-face"] },
  },
  "QUIZ-01": {
    thuong: {
      q: "A landlord asks for a deposit but gives you no receipt, what should you do?",
      options: ["Pay now and ask for the receipt later, after you have moved into the room", "Pay in cash quickly, because good rooms are taken by other people very fast", "Ask for a written receipt with the amount, the date, and both signatures"],
      correct: 2, countdown: 5, illus: "receipt", why: "Biên nhận là bằng chứng để đòi lại tiền cọc.",
    },
    dai: {
      q: "Which is safer for a deposit, cash with no paper or a bank transfer with a clear note?",
      options: ["Both are the same, because a deposit is always returned if the owner is kind", "Cash with no paper, because landlords trust students more when they pay in cash", "The bank transfer with a clear note, because it leaves a record of your payment"],
      correct: 2, countdown: 5, why: "Chuyển khoản đúng tài khoản chủ nhà, ghi rõ nội dung, để lại dấu vết có thể chứng minh; dù vậy vẫn nên xin biên nhận hoặc tin nhắn xác nhận.",
    },
  },
  "TEXT-01": {
    thuong: { text: "Chưa thấy tận mắt, chưa chuyển một đồng.", illus: "eyes" },
    dai: { text: "Ban ngày xem căn phòng, buổi tối xem con đường.", kicker: "Rút ra" /* illus mặc định: bóng đèn */ },
  },
  "TEXT-04": {
    thuong: { text: "Mỗi lần đưa tiền, hãy xin giấy biên nhận ghi rõ số tiền, ngày đưa và chữ ký hai bên.", marks: ["giấy biên nhận"], illus: "receipt" },
    dai: { text: "Chưa có giấy thì chưa đưa tiền, dù chủ nhà hứa “mai viết sau”. Nếu chuyển khoản, chuyển vào đúng tài khoản đứng tên chủ nhà và ghi rõ nội dung.", marks: ["Chưa có giấy thì chưa đưa tiền", "ghi rõ nội dung"] },
  },
  "END-02": {
    thuong: { points: ["Ban ngày xem căn phòng, buổi tối xem con đường", "Tiền đưa ra, giấy tờ cầm về", "Đọc kỹ lúc vào, báo trước lúc ra"], icons: ["crescent-moon", "receipt", "page-facing-up"] },
    dai: { kicker: "Mang theo khi đi xem phòng", points: ["Chưa thấy tận mắt, chưa chuyển một đồng, dù giá có rẻ đến đâu", "Mọi khoản tiền đưa ra đều cần một tờ giấy có chữ ký hai bên", "Muốn chuyển đi thì đọc lại hợp đồng và báo trước đúng hạn"], icons: ["eyes", "writing-hand", "spiral-calendar"] },
  },
  // #130: bảng vẽ hành trình (kịch bản thật dùng script.boards; mẫu trưng bày dùng bảng mặc định 3456×1540)
  "BOARD-01": {
    thuong: { board: "mau", shots: [{ at: 0, fit: ["b-t", "b-bar"], move: "cut" }],
      items: [
        { id: "b-t", t: "text", text: "Tiền thuê một tháng", x: 200, y: 200, size: 96, at: "l1:rent" },
        { id: "b-bar", t: "box", x: 200, y: 360, w: 1200, h: 100, at: "l1:month" },
        { id: "b-dep", t: "box", x: 200, y: 360, w: 400, h: 100, hatch: true, at: "l2:deposit" },
        { id: "b-dl", t: "text", text: "tiền cọc", x: 220, y: 480, size: 56, color: "accent", at: "l2:deposit+300" },
        { id: "b-r", t: "ring", around: ["b-dep", "b-dl"], color: "accent", at: "l2:receipt" } ],
      lines: [{ id: "l1", lang: "en", say: "First, write down the rent for one month.", sub: "Trước hết, ghi tiền thuê một tháng." },
              { id: "l2", lang: "en", say: "Then mark the deposit, and ask for a receipt.", sub: "Rồi đánh dấu tiền cọc, và xin giấy biên nhận." }] },
    dai: { board: "mau", shots: [{ at: 0, fit: "all", move: "cut" }],
      items: [{ id: "b-t", t: "text", text: "Bảng vẽ", x: 1400, y: 600, size: 140, at: "l1:board" }],
      lines: [{ id: "l1", lang: "en", say: "The whole board, seen from far away.", sub: "Toàn bộ bảng vẽ, nhìn từ xa." }] },
  },
  "END-04": {
    thuong: { remaining: 40 },
    dai: { text: "Còn 39 câu hỏi về thuê trọ đang chờ bạn ngay bên dưới", sub: "Nghe câu hỏi tiếng Anh, chọn một trong ba đáp án" },
  },
};

export const SAMPLES = { ...BASE, ...SAMPLES_OPEN2, ...SAMPLES_OPEN_DRAMA, ...SAMPLES_BEAT_END2, ...SAMPLES_LIST2, ...SAMPLES_TEXT2, ...SAMPLES_REL2, ...SAMPLES_CMP2, ...SAMPLES_NUM2, ...SAMPLES_RSN, ...SAMPLES_QUIZ2, ...SAMPLES_STORY2, ...SAMPLES_ANIM, ...SAMPLES_VA, ...SAMPLES_BRK };
