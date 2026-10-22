// Dữ liệu mẫu cho modules/edit-breakers.jsx (#144, họ BRK): thuong = mẫu trong core/edit-breakers-list.js, dai = bản chữ dài/nhiều mục nhất.
import { EDIT_BREAK } from "../../core/edit-breakers-list.js";

const DAI = {
  "BRK-01": { illus: "mobile-phone", around: ["alarm-clock", "bed", "hot-beverage"], label: "Chỗ này sai rồi!", note: "Vừa mở mắt đã lướt điện thoại, chưa uống nước, chưa rời giường", tone: "bad" },
  "BRK-02": { kicker: "Ý chính của phần hai", title: "Bảy tiếng mỗi ngày không ai nhìn thấy", sub: "Thời gian ngoài giờ làm và giờ ngủ, ngày nào bạn cũng có" },
  "BRK-03": { value: 1250000, from: 0, suffix: " đ", label: "là số tiền trung bình mỗi tháng cho cà phê ngoài quán", illus: "hot-beverage" },
  "BRK-04": { title: "Hai cách bắt đầu buổi tối", wrong: "Đợi có hứng và đủ thời gian rảnh rồi mới bắt đầu làm", right: "Bắt đầu năm phút ngay bây giờ, hứng thú sẽ đến sau", wrongIllus: "sleeping-face", rightIllus: "person-running", labels: ["Trước", "Sau"] },
  "BRK-05": { title: "Đến đây, mình đã biết ba điều", points: ["Một ngày có bảy tiếng tự do sau giờ làm", "Mệt là do đầu óc, không phải do cơ thể", "Bắt đầu nhỏ và giữ đều đặn mỗi tuần"], illus: "light-bulb" },
  "BRK-06": { title: "Bảy tiếng ấy trôi đi đâu mỗi tối?", items: [{ illus: "mobile-phone", text: "Lướt mạng xã hội" }, { illus: "television", text: "Xem phim bộ" }, { illus: "bed", text: "Nằm nghỉ" }, { illus: "hot-beverage", text: "Ngồi quán" }, { illus: "video-game", text: "Chơi game" }] },
  "BRK-07": { kicker: "Nhưng khoan đã…", question: "Nếu cả ngày mệt thật, vì sao tối nào mình cũng thức khuya lướt điện thoại?", illus: "thinking-face" },
  "BRK-08": { title: "Một ngày của bạn", points: [{ label: "6 giờ", sub: "Thức dậy", illus: "alarm-clock" }, { label: "7 giờ", sub: "Đi làm", illus: "bus" }, { label: "12 giờ", sub: "Ăn trưa", illus: "bento-box" }, { label: "17 giờ", sub: "Tan làm", illus: "office-building" }, { label: "19 giờ", sub: "Về nhà", illus: "house" }, { label: "21–23 giờ", sub: "Giờ tự do", illus: "sparkles" }], current: 5 },
  "BRK-09": { kind: "Nhân vật", title: "Cô Hoa, chủ quán cơm", detail: "Mở quán mười hai năm, mỗi ngày dậy lúc bốn giờ sáng", illus: "cook", around: ["cooked-rice", "alarm-clock", "money-bag"], icon: "user" },
  "BRK-10": { quote: "Bạn không thiếu thời gian, bạn chỉ chưa dùng đúng bảy tiếng mỗi tối mà ngày nào bạn cũng có trong tay", mark: "bảy tiếng mỗi tối", by: "Arnold Bennett, 1908", illus: "open-book" },
  "BRK-11": { title: "Năm điều cần nhớ", items: ["Bắt đầu ngay tối nay", "Chỉ chín mươi phút mỗi buổi", "Không bỏ hai tối liền", "Ghi lại việc đã làm", "Nghỉ một tối mỗi tuần"] },
  "BRK-12": { word: "Chín mươi phút", sub: "Ba buổi tối mỗi tuần, chín mươi phút mỗi buổi, không hơn", from: [1180, 640], others: ["7 giờ", "…", "tối"] },
};

export const SAMPLES_BRK = Object.fromEntries(EDIT_BREAK.map((e) => [e.module, {
  thuong: { ...e.data, lines: e.lines },
  dai: { ...(DAI[e.module] || e.data), lines: e.lines },
}]));
