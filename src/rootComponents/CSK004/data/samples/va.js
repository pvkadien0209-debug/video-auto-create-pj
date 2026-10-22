// Dữ liệu mẫu cho modules/va.jsx (#109): mỗi mã có thuong và dai, kèm `lines` (giọng tiếng Anh + phụ đề tiếng Việt).
// Nguồn chữ: time-management/live-on-24-hours-a-day-weekly-plan (p1, p4, p7, p13–p14; nguồn: Arnold Bennett,
// How to Live on 24 Hours a Day, 1908, Project Gutenberg) và kịch bản start-selling-online--w01 (mục lục 6 chặng).
// Câu tiếng Anh ở SRC-01 là nguyên văn Bennett đã ghi trong meta.sources của bài; không thêm số hay câu ngoài bài (#088).
const L = (id, say, sub, extra = {}) => ({ id, lang: "en", say, sub, ...extra });

const SIX = [
  { label: "Trước khi nhập hàng", illus: "package" },
  { label: "Đặt giá không lỗ", illus: "money-bag" },
  { label: "Trang bán hàng", illus: "camera-with-flash" },
  { label: "Trả lời tin nhắn", illus: "speech-balloon" },
  { label: "Gửi hàng cho chắc", illus: "delivery-truck" },
  { label: "Khách không vui, tháng đầu", illus: "notebook" },
];

export const SAMPLES_VA = {
  "TOC-01": {
    thuong: {
      title: "Sáu chặng của một shop mới", chapters: SIX,
      lines: [L("l1", "Six stops, in the order you will live them.", "Sáu chặng, đúng thứ tự bạn sẽ trải qua.")],
    },
    dai: {
      chapters: SIX.concat([{ label: "Tính lợi nhuận thật", illus: "chart-increasing" }]), current: 3,
      lines: [L("l1", "Part three: a shop page that buyers trust.", "Phần ba: trang bán hàng để khách tin.")],
    },
  },
  "TYPE-01": {
    thuong: {
      kicker: "Một ngày của bạn", items: ["8 + 7 + 2 = 17 giờ", "Còn 7 giờ"], note: "Bảy tiếng còn lại đi đâu?",
      lines: [
        L("l1", "Eight hours at work, seven asleep, about two on the road and at meals. That's seventeen.", "Tám tiếng làm, bảy tiếng ngủ, khoảng hai tiếng đi xe và ăn. Là mười bảy."),
        L("l2", "So where do the other seven hours go?", "Vậy bảy tiếng còn lại đi đâu?"),
      ],
    },
    dai: {
      kicker: "Lịch của chị Ngân", items: ["6 sáng × 30 phút", "3 tối × 90 phút", "= 7,5 giờ mỗi tuần"],
      lines: [
        L("l1", "Six mornings, half an hour each.", "Sáu buổi sáng, mỗi sáng nửa tiếng."),
        L("l2", "Three evenings, ninety minutes each.", "Ba buổi tối, mỗi tối chín mươi phút."),
        L("l3", "Seven and a half hours a week.", "Bảy tiếng rưỡi mỗi tuần."),
      ],
    },
  },
  "STAT-01": {
    thuong: {
      stats: [{ value: 7.5, suffix: " giờ", label: "mỗi tuần dành cho riêng bạn" }],
      source: "Arnold Bennett, How to Live on 24 Hours a Day (1908), chương VI",
      lines: [L("l1", "Bennett's whole plan is seven and a half hours a week.", "Cả kế hoạch của Bennett chỉ là bảy tiếng rưỡi mỗi tuần.")],
    },
    dai: {
      kicker: "Nhỏ mà đủ đổi cả tuần",
      stats: [
        { value: 7.5, suffix: " giờ", label: "cho việc của riêng mình" },
        { value: 168, suffix: " giờ", label: "trong một tuần" },
        { value: 6, label: "ngày có lịch, ngày thứ bảy để nghỉ" },
      ],
      source: "Arnold Bennett, How to Live on 24 Hours a Day (1908), chương VI — Project Gutenberg",
      lines: [
        L("l1", "Seven and a half hours for yourself.", "Bảy tiếng rưỡi cho việc của riêng mình."),
        L("l2", "Out of one hundred and sixty-eight in a week.", "Trong một trăm sáu mươi tám tiếng của một tuần."),
        L("l3", "And the plan covers only six days. The seventh is for rest.", "Và kế hoạch chỉ tính sáu ngày. Ngày thứ bảy để nghỉ."),
      ],
    },
  },
  "SRC-01": {
    thuong: {
      source: "Arnold Bennett · How to Live on 24 Hours a Day (1908) · chương III", kind: "sách",
      sentences: ["“… just jump …”", "“Beware of undertaking too much at the start.”"],
      lines: [
        L("l1", "Bennett says there is no secret. You just jump, like into cold water.", "Bennett nói không có bí quyết nào. Cứ bước xuống, như xuống nước lạnh."),
        L("l2", "But beware of undertaking too much at the start.", "Nhưng đừng ôm quá nhiều lúc mới bắt đầu."),
      ],
    },
    dai: {
      source: "Arnold Bennett · How to Live on 24 Hours a Day (1908) · Project Gutenberg", kind: "sách", title: "Bennett viết",
      sentences: ["“… a day within a day …”", "“… like a dream …”", "“… start quietly, unostentatiously …”", "“… absurdly slow …”", "“Beware of undertaking too much at the start.”"],
      hl: [0, 1, 2, 4],
      lines: [
        L("l1", "The hours after work are a day within a day.", "Giờ sau khi tan làm là một ngày bên trong một ngày."),
        L("l2", "Without a plan, the evening passes like a dream.", "Không có kế hoạch, buổi tối trôi qua như một giấc mơ."),
        L("l3", "Start quietly, without telling everyone.", "Bắt đầu lặng lẽ, không cần khoe với ai."),
        L("l4", "And don't take on too much at the start.", "Và đừng ôm quá nhiều lúc mới bắt đầu."),
      ],
    },
  },
  "ASK-01": {
    thuong: {
      q: "Vậy bảy tiếng còn lại của ngày đi đâu?",
      lines: [L("l1", "So where do the other seven hours of the day go?", "Vậy bảy tiếng còn lại của ngày đi đâu?")],
    },
    dai: {
      kicker: "Thử nghĩ xem", q: "Một tuần dự án gấp làm vỡ lịch: bỏ hẳn rồi làm lại, hay giữ lịch nhưng làm ít đi?", illus: "thinking-face",
      lines: [L("l1", "A rush week breaks your schedule. Do you start over next month, or keep it and do less?", "Một tuần gấp làm vỡ lịch. Đợi tháng sau làm lại, hay giữ lịch mà làm ít đi?")],
    },
  },
  "MYTH-01": {
    thuong: {
      wrong: "Mình có bao nhiêu giờ", right: "Mình sống trọn được bao nhiêu giờ", kicker: "Câu hỏi đáng hỏi",
      lines: [
        L("l1", "The question is not how many hours you have.", "Câu hỏi không phải là mình có bao nhiêu giờ."),
        L("l2", "It's how many of them you really live.", "Mà là mình sống trọn được bao nhiêu giờ."),
      ],
    },
    dai: {
      wrong: "Tám, chín tiếng ở công ty là “cả ngày”, phần còn lại chỉ là đồ thừa",
      right: "Từ lúc tan làm đến sáng hôm sau là một ngày thứ hai, thuộc về riêng bạn", recap: true,
      lines: [
        L("l1", "Remember: work is not the whole day.", "Nhớ nhé: giờ làm không phải cả ngày."),
        L("l2", "The evening is a second day, and it's yours.", "Buổi tối là một ngày thứ hai, của riêng bạn."),
      ],
    },
  },
};
