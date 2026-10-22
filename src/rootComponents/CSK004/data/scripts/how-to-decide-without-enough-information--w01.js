// Kịch bản video W lần 3 (#110) — "Quyết định khi chưa đủ thông tin" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-decide-without-enough-information--w01",
  hook: "HOOK-03",
  loop: { open: "s01", close: "s28" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "workplace-problem-solvers", slug: "how-to-decide-without-enough-information", door: "ky-nang", level: "B1",
    title: "Ra quyết định khi chưa có đủ thông tin thế nào?", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” trong khung ❓ p3 → Thảo; người giao việc → Cô Hoa (câu thoại của cô chỉ nhắc lại đề bài p3; tin nhắn mẫu p22 đổi “anh” → “chị”); người quyết thuê kho (🔀 p12, bài không nêu tên) → Dũng; Xuân (📌 p7) và Hạnh (📌 p18) kể không tên, dựng bằng thẻ. Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng. Chỗ đứng cố định: Thảo left, Dũng center, Cô Hoa right. DLG-01 dựng từ lời giải ❓ p3; SCENE-03 dựng từ 🔀 p12. Tin nhắn SCENE-02 lấy nguyên văn câu mẫu p22, tách ba tin. Câu đố đổi sang questions[7] (kỹ năng chính của bài, không tên). Phủ ý: 23/23.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p3",
      data: { set: "office", label: "Bạn sẽ làm gì?", props: ["page-facing-up"],
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "hoa", "A big client wants our price quote within ten days.", "Một khách lớn mời mình gửi báo giá trong mười ngày.", { pose: "explain" }),
        L("l2", "thao", "I want to know next month's material prices, our capacity, and our competitor's prices.", "Em muốn biết chắc giá nguyên liệu tháng sau, năng lực xưởng, và cả giá đối thủ.", { face: "thinking", pose: "think" }),
        L("l3", null, "Should Thảo wait for all three before sending? What would you do?", "Có nên chờ đủ cả ba rồi mới gửi? Bạn sẽ làm gì?"),
      ], beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Quyết có cơ sở khi thiếu dữ kiện", pose: "present", items: ["Chỉ tìm thông tin làm đổi lựa chọn", "Cửa một chiều hay hai chiều?", "Ghi giả định, hẹn ngày xem lại"] },
      lines: [
        L("l1", "det", "How do you decide well without enough information?", "Quyết thế nào cho tốt khi chưa đủ thông tin?"),
        L("l2", "det", "Look only for what can change your choice.", "Chỉ tìm thông tin làm đổi được lựa chọn."),
        L("l3", "det", "Know which kind of door you face.", "Biết mình đứng trước loại cửa nào."),
        L("l4", "det", "Write your assumptions, and set a date to review.", "Ghi giả định, và hẹn ngày xem lại."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng của bài", chapters: [
        { label: "Có nên chờ thêm?", illus: "hourglass-not-done" },
        { label: "Thông tin nào cần tìm", illus: "magnifying-glass-tilted-left" },
        { label: "Cửa một chiều, hai chiều", illus: "door" },
        { label: "Giảm rủi ro", illus: "shield" },
        { label: "Ghi giả định", illus: "memo" },
        { label: "Báo quyết định", illus: "mobile-phone" } ] },
      lines: [
        L("l1", null, "Waiting, what to look for, and two kinds of doors.", "Chờ hay không, tìm gì, và hai loại cửa."),
        L("l2", null, "Then less risk, written assumptions, and how to report.", "Rồi giảm rủi ro, ghi giả định, và cách báo lại."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Có nên chờ thêm?" },
      lines: [L("l1", "det", "Part one: should you wait for more information?", "Phần một: chưa đủ thông tin, có nên chờ thêm?")] },
    { id: "s05", module: "CMP-01", ref: "p1",
      data: { labels: ["Quyết bừa", "Chờ mãi"], left: "“Đằng nào cũng không biết”", right: "Chờ cho đến khi biết chắc", illus: ["game-die", "hourglass-not-done"] },
      lines: [
        L("l1", null, "You rarely have it all: will the client agree, what will prices do?", "Hiếm khi có đủ: khách có đồng ý không, giá tháng sau ra sao?"),
        L("l2", null, "Two common reactions: decide carelessly, or wait until you're sure.", "Hai phản ứng dễ gặp: quyết bừa, hoặc chờ mãi tới khi biết chắc."),
        L("l3", null, "The middle path: decide, while clear about what you don't know.", "Con đường ở giữa: quyết có ý thức về điều mình chưa biết."),
      ] },
    { id: "s06", module: "HOST-02", ref: "p2",
      data: { statement: "Chờ mãi cho đủ thông tin là cách an toàn", truth: false,
        why: "Chờ là đang chọn “không làm gì” mà không cân nhắc. Hạn trôi, cơ hội đi, vấn đề lớn lên." },
      lines: [
        L("l1", "det", "Waiting for complete information is the safe choice. True or false?", "Chờ mãi cho đủ thông tin là an toàn. Đúng hay sai?"),
        L("l2", "det", "False. Waiting is choosing to do nothing, without weighing it.", "Sai. Chờ là chọn “không làm gì” mà không hề cân nhắc.", { face: "stern" }),
        L("l3", "det", "Meanwhile, deadlines pass, chances go, problems grow.", "Trong lúc chờ, hạn trôi, cơ hội đi, vấn đề lớn lên."),
      ] },
    { id: "s07", module: "DLG-01", ref: "p3",
      data: { set: "office", label: "Thảo và báo giá", actors: [{ id: "thao", side: "left", pose: "stand" }],
        verdict: { ok: false, label: "Chờ đủ cả ba thông tin", why: "Giá đối thủ gần như không thể biết chắc; chờ thì khách chọn bên khác." } },
      lines: [
        L("l1", null, "Back to Thảo and the ten-day quote.", "Quay lại Thảo và báo giá mười ngày."),
        L("l2", "thao", "I'll wait until I know all three. Then I'll send the quote.", "Chờ biết đủ cả ba rồi em mới gửi báo giá.", { face: "neutral", pose: "cross", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Competitor prices are almost impossible to know. On day eleven, the client picks someone else.", "Giá đối thủ gần như không thể biết chắc. Ngày thứ mười một, khách đã chọn bên khác."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "thao", "I'll set an internal deadline, and find two things: material prices and capacity.", "Em đặt hạn nội bộ, chỉ tìm hai thứ: giá nguyên liệu và năng lực xưởng.", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l7", "thao", "For the rest, I'll write down my assumptions.", "Phần còn lại, em ghi rõ giả định.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s08", module: "TEXT-01", ref: "p4",
      data: { text: "Chờ đủ chắc thì cơ hội đã đi.", illus: "hourglass-done" },
      lines: [L("l1", null, "Wait until you're sure, and the chance is gone.", "Chờ đủ chắc thì cơ hội đã đi.")] },

    // ---------- Chương 2 ----------
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Thông tin nào cần tìm?" },
      lines: [L("l1", "det", "Part two: which information is worth looking for?", "Phần hai: thông tin nào thật sự cần đi tìm?")] },
    { id: "s10", module: "LIST-06", ref: "p5",
      data: { title: "Lọc thông tin cần tìm", steps: [
        { text: "Viết ra điều đã biết chắc", illus: "check-mark-button" },
        { text: "Viết ra điều chưa biết", illus: "red-question-mark" },
        { text: "Hỏi: biết điều này, lựa chọn có đổi không?", illus: "counterclockwise-arrows-button" },
        { text: "Chỉ đi tìm những điều trả lời là “có”", illus: "magnifying-glass-tilted-left" } ] },
      lines: [
        L("l1", null, "Write what you know for sure. Then what you don't know yet.", "Viết điều đã biết chắc. Rồi viết điều chưa biết."),
        L("l2", null, "For each unknown, ask: if I knew this, would my choice change?", "Với mỗi điều chưa biết, hỏi: nếu biết thì lựa chọn có đổi không?"),
        L("l3", null, "Look only for the ones where the answer is yes.", "Chỉ đi tìm những điều có câu trả lời là “có”."),
      ] },
    { id: "s11", module: "LIST-07", ref: "p6",
      data: { title: "Đặt điểm dừng cho việc tìm", items: [
        { text: "Có hạn chót, ví dụ “đến trưa thứ Sáu”", illus: "alarm-clock" },
        { text: "Tối đa khoảng ba thông tin", illus: "keycap-3" } ] },
      lines: [
        L("l1", null, "Set a deadline for searching, like Friday noon.", "Đặt hạn cho việc tìm, ví dụ “đến trưa thứ Sáu”."),
        L("l2", null, "And chase three pieces of information at most.", "Và tối đa khoảng ba thông tin cần tìm."),
        L("l3", null, "With no stopping point, searching eats the time for deciding.", "Không có điểm dừng, việc tìm sẽ nuốt hết thời gian để quyết."),
      ] },
    { id: "s12", module: "REL-09", ref: "p7",
      data: { title: "Chọn đơn vị vận chuyển mới", stages: [
        { label: "Bốn đơn vị, hơn hai mươi chỉ số", value: "gần một tuần", illus: "bar-chart" },
        { label: "Phát hiện: hai bên không giao tới một tỉnh nhiều khách", illus: "world-map" },
        { label: "Chỉ một thông tin ấy, còn hai bên", value: "2 bên", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Choosing a new delivery company, one employee built a table of twenty measures.", "Chọn đơn vị vận chuyển mới, một nhân viên lập bảng hơn hai mươi chỉ số."),
        L("l2", null, "Almost a week later, she found two firms don't deliver to a key province.", "Gần một tuần sau mới thấy hai bên không giao tới một tỉnh nhiều khách."),
        L("l3", null, "That one fact left two choices. Most measures changed nothing.", "Chỉ thông tin ấy đã gọn còn hai bên. Phần lớn chỉ số kia không đổi kết quả."),
      ] },
    { id: "s13", module: "TEXT-01", ref: "p8",
      data: { text: "Chỉ đi tìm thông tin làm đổi được lựa chọn.", illus: "magnifying-glass-tilted-left" },
      lines: [L("l1", null, "Only look for information that can change your choice.", "Chỉ đi tìm thông tin làm đổi được lựa chọn.")] },

    // ---------- Chương 3 ----------
    { id: "s14", module: "HOST-03", data: { n: 3, of: 6, title: "Cửa một chiều hay hai chiều?" },
      lines: [L("l1", "det", "Part three: a one-way door, or a two-way door?", "Phần ba: cửa một chiều hay hai chiều?")] },
    { id: "s15", module: "LIST-03", ref: "p9,p10",
      data: { title: "Hai loại cửa", items: [
        { front: "Cửa hai chiều", back: "Quay lại được: quyết nhanh, học từ kết quả", illus: "door", backIllus: "counterclockwise-arrows-button" },
        { front: "Cửa một chiều", back: "Khó quay lại: thêm thời gian, ý kiến, dự phòng", illus: "door", backIllus: "warning" } ] },
      lines: [
        L("l1", null, "Two-way door: you can come back. A new meeting time, a new email for a month.", "Cửa hai chiều: quay lại được. Thử đổi giờ họp, mẫu email mới một tháng."),
        L("l2", null, "Decide fast, and learn from the results.", "Loại này nên quyết nhanh rồi học từ kết quả."),
        L("l3", null, "One-way door: a long contract, letting someone go, a promise to a big client.", "Cửa một chiều: hợp đồng dài hạn, cho người nghỉ, cam kết với khách lớn."),
        L("l4", null, "Give it more time, more opinions, and a backup plan.", "Loại này đáng thêm thời gian, thêm ý kiến và kế hoạch dự phòng."),
      ] },
    { id: "s16", module: "HOST-01", ref: "p11",
      data: { text: "Nếu sai, sửa lại có khó không?", pose: "think" },
      lines: [
        L("l1", "det", "Most daily decisions are two-way doors.", "Phần lớn quyết định hằng ngày là cửa hai chiều."),
        L("l2", "det", "People who fear mistakes treat them as one-way, and lose time.", "Người sợ sai lại coi chúng như cửa một chiều, nên mất quá nhiều thời gian."),
        L("l3", "det", "Quick question: if it's wrong, how hard is it to fix?", "Câu hỏi nhanh: nếu sai, sửa lại có khó không?"),
      ] },
    { id: "s17", module: "SCENE-03", ref: "p12",
      data: { set: "office", actors: [{ id: "dung" }],
        left: { label: "Cách A: thuê một năm", ok: false }, right: { label: "Cách B: thuê theo tháng", ok: true } },
      lines: [
        L("l0", null, "Orders jumped for two months. The company needs more storage.", "Đơn tăng mạnh hai tháng liền, công ty cần thêm chỗ chứa."),
        L("a1", "dung", "Let's sign for a warehouse for one year. If it doesn't work, fine.", "Cứ ký thuê kho một năm, không hợp thì thôi.", { phase: "a", pose: "give", face: "happy" }),
        L("a2", null, "Month three: orders are normal, the warehouse is empty, and the contract can't end early.", "Tháng thứ ba: đơn bình thường, kho bỏ trống, hợp đồng không cho trả sớm.", { phase: "a" }),
        L("b1", "dung", "Let's rent month by month, even if it costs a bit more.", "Thuê ngắn hạn theo tháng, giá cao hơn một chút.", { phase: "b", pose: "explain" }),
        L("b2", null, "Orders drop? Give notice for next month. Growth lasts? Then sign long.", "Đơn giảm thì báo trả kho tháng sau; đơn tăng kéo dài thật thì mới ký dài.", { phase: "b" }),
      ] },
    { id: "s18", module: "TEXT-01", ref: "p13",
      data: { text: "Cửa khó quay lại thì bước chậm, cửa dễ quay lại thì bước nhanh.", illus: "door" },
      lines: [L("l1", null, "Hard to undo? Step slowly. Easy to undo? Step quickly.", "Cửa khó quay lại thì bước chậm, cửa dễ quay lại thì bước nhanh.")] },

    // ---------- Chương 4 ----------
    { id: "s19", module: "HOST-03", data: { n: 4, of: 6, title: "Còn phân vân: giảm rủi ro" },
      lines: [L("l1", "det", "Part four: still unsure? Lower the risk.", "Phần bốn: còn phân vân thì giảm rủi ro.")] },
    { id: "s20", module: "LIST-08", ref: "p14,p15",
      data: { title: "Giảm rủi ro khi còn phân vân", items: [
        { title: "Thử nhỏ trước", detail: "Một nhóm, một chi nhánh, một tuần", illus: "test-tube" },
        { title: "Biến cửa một chiều thành gần hai chiều", detail: "Hợp đồng ngắn, quyền trả sớm, điều khoản điều chỉnh giá", illus: "page-facing-up" } ] },
      lines: [
        L("l1", null, "Try small first: one team, one branch, one week.", "Thử nhỏ trước: một nhóm, một chi nhánh, một tuần."),
        L("l2", null, "Real results beat any prediction on paper.", "Kết quả thật thường đáng tin hơn mọi dự đoán trên giấy."),
        L("l3", null, "Make a one-way door closer to two-way: short terms, early exit, price adjustment.", "Biến cửa một chiều thành gần hai chiều: hợp đồng ngắn, quyền trả sớm, điều chỉnh giá."),
        L("l4", null, "Ask your company's legal or contract person before signing.", "Các điều khoản này nên hỏi người phụ trách pháp lý trước khi ký."),
      ] },
    { id: "s20b", module: "HOST-01", ref: "p16",
      data: { text: "Gọi người từng làm việc tương tự: mười phút thay cả tuần tự đoán.", pose: "wave" },
      lines: [
        L("l5", "det", "Others may already know what you don't. Call someone who did this before.", "Điều mình chưa biết, người khác có thể đã biết. Gọi người từng làm tương tự.", { face: "happy" }),
        L("l5b", "det", "Ten minutes on the phone can replace a week of guessing.", "Một cuộc gọi mười phút có thể thay cả tuần tự đoán."),
        L("l6", "det", "Ask why they chose it, to see if it fits your situation.", "Hỏi cả lý do họ chọn, để biết có hợp hoàn cảnh của bạn không."),
      ] },

    // ---------- Chương 5 ----------
    { id: "s21", module: "HOST-03", data: { n: 5, of: 6, title: "Ghi giả định lúc quyết" },
      lines: [L("l1", "det", "Part five: you decided. What should you write down?", "Phần năm: quyết rồi, ghi lại gì?")] },
    { id: "s22", module: "RSN-05", ref: "p17",
      data: { if: "Hai tuần liền đơn thấp hơn mức này", then: "Xem lại quyết định", quote: "Giả định: đơn tăng sẽ kéo dài ít nhất ba tháng",
        illus: "chart-decreasing", thenIllus: "counterclockwise-arrows-button" },
      lines: [
        L("l1", null, "Write two or three main assumptions. For example: high orders will last three months.", "Ghi hai ba giả định chính, ví dụ “đơn tăng sẽ kéo dài ít nhất ba tháng”."),
        L("l2", null, "And a sign to change: if orders stay below this level two weeks, we review.", "Kèm dấu hiệu đổi hướng: “Hai tuần liền đơn thấp hơn mức này thì xem lại.”"),
      ] },
    { id: "s23", module: "REL-02", ref: "p18",
      data: { chain: ["Mở ca tối vì đơn dồn, không ghi giả định", "Hai tháng sau đơn giảm, ca tối vẫn chạy", "Kế toán hỏi: không ai nhớ vì sao mở, khi nào dừng"],
        illus: ["package", "crescent-moon", "red-question-mark"] },
      lines: [
        L("l1", null, "A team opened an evening shift because orders piled up. No assumption, no stop sign.", "Một bộ phận mở ca tối vì đơn dồn. Không ghi giả định, không đặt dấu hiệu dừng."),
        L("l2", null, "Two months later, orders were down, but the shift kept running.", "Hai tháng sau đơn đã giảm, ca tối vẫn chạy, không ai hỏi."),
        L("l3", null, "Accounting asked why costs rose. Nobody remembered why it started, or when to stop.", "Kế toán hỏi vì sao chi phí tăng. Không ai nhớ ca tối mở vì đâu, khi nào dừng."),
      ] },
    { id: "s24", module: "TEXT-01", ref: "p19",
      data: { text: "Ghi giả định lúc quyết, để biết lúc nào phải đổi.", illus: "memo" },
      lines: [L("l1", null, "Write your assumptions when you decide, so you know when to change.", "Ghi giả định lúc quyết, để biết lúc nào phải đổi.")] },
    { id: "s25", module: "LIST-06", ref: "p20",
      data: { title: "Hẹn ngày xem lại", steps: [
        { text: "Hẹn ngay khi quyết, ví dụ sau hai tuần", illus: "spiral-calendar" },
        { text: "Đến ngày: so giả định với thực tế", illus: "balance-scale" },
        { text: "Còn đúng thì đi tiếp, sai thì điều chỉnh", illus: "counterclockwise-arrows-button" } ] },
      lines: [
        L("l1", null, "Set a review date when you decide, for example in two weeks.", "Hẹn ngày xem lại ngay khi quyết, ví dụ sau hai tuần."),
        L("l2", null, "On that day, compare your assumptions with reality.", "Đến ngày đó, so giả định với thực tế."),
        L("l3", null, "Still true? Go on. Wrong? Adjust, with no shame.", "Còn đúng thì đi tiếp, sai thì điều chỉnh mà không cần xấu hổ."),
      ] },

    // ---------- Chương 6 ----------
    { id: "s26", module: "HOST-03", data: { n: 6, of: 6, title: "Báo quyết định khi chưa chắc" },
      lines: [L("l1", "det", "Part six: how to report a decision with open questions.", "Phần sáu: báo quyết định khi còn điều chưa chắc.")] },
    { id: "s27", module: "LIST-07", ref: "p21",
      data: { title: "Khi báo lại, nói rõ", items: [
        { text: "Điều đã biết", illus: "check-mark-button" },
        { text: "Điều còn là giả định", illus: "thinking-face" },
        { text: "Khi nào sẽ xem lại", illus: "spiral-calendar" } ] },
      lines: [
        L("l1", null, "Say what you know, what's still an assumption, and when you'll review.", "Nói rõ điều đã biết, điều còn là giả định, và khi nào xem lại."),
        L("l2", null, "People trust you more when you're honest about how sure you are.", "Người nghe tin bạn hơn khi bạn thành thật về độ chắc chắn."),
      ] },
    { id: "s28", module: "SCENE-02", ref: "p22",
      data: { set: "room", label: "Thảo báo quyết định", actor: { id: "thao", side: "left" },
        contact: { name: "Chị Hoa (sếp)", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Em đề xuất gửi báo giá đúng hạn thứ Năm.", at: "l1" },
          { from: "me", text: "Giá nguyên liệu em tạm tính theo tháng này, có thêm điều khoản điều chỉnh nếu tăng mạnh.", at: "l2" },
          { from: "me", text: "Em sẽ cập nhật chị khi nhà cung cấp báo giá mới.", at: "l3" } ] },
      lines: [
        L("l1", "thao", "I suggest we send the quote on time, on Thursday.", "Em đề xuất gửi báo giá đúng hạn thứ Năm."),
        L("l2", "thao", "I used this month's material prices, with a clause in case they rise sharply.", "Giá nguyên liệu tạm tính theo tháng này, có điều khoản nếu tăng mạnh."),
        L("l3", "thao", "I'll update you when the supplier sends new prices.", "Em sẽ cập nhật khi có giá mới."),
      ] },
    { id: "s29", module: "LIST-05", ref: "p23",
      data: { title: "Sẵn sàng quyết khi", illus: "clipboard", items: [
        "Đã tách điều biết chắc với điều còn đoán", "Chỉ tìm thông tin làm đổi lựa chọn, có hạn chót",
        "Biết đây là cửa một chiều hay hai chiều", "Đã ghi giả định và dấu hiệu đổi hướng", "Đã hẹn ngày xem lại" ] },
      lines: [
        L("l1", null, "Known and guessed, kept apart. Only useful information, with a deadline.", "Tách điều biết chắc với điều còn đoán. Chỉ tìm thông tin cần, có hạn."),
        L("l2", null, "You know the door type.", "Biết đây là loại cửa nào."),
        L("l3", null, "Assumptions and change signs are written. A review date is set.", "Đã ghi giả định, dấu hiệu đổi hướng, và hẹn ngày xem lại."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s30", module: "END-01", ref: "outro",
      data: { takeaway: "Ghi giả định lúc quyết, để biết lúc nào phải đổi.", marks: ["giả định"], illus: "memo" },
      lines: [
        L("l1", null, "Missing information is normal. It's no reason to guess or to wait forever.", "Thiếu thông tin là chuyện thường, không phải lý do để quyết bừa hay chờ mãi."),
        L("l2", null, "Write one line: I'm assuming that... And one more: if I see..., I'll change.", "Viết một dòng “mình đang giả định rằng…”, và một dòng “nếu thấy… thì mình đổi”."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[7]",
      data: {
        q: "How can you tell which missing information is worth looking for?",
        options: [
          "Look for all of it, because more information always leads to a better decision",
          "Ask whether knowing it would actually change your choice, and look only for those",
          "Look for whatever is easiest to find, so you can finish the task quickly",
        ],
        correct: 1, countdown: 5, illus: "magnifying-glass-tilted-left",
        why: "Thông tin đáng tìm là thông tin làm đổi được lựa chọn; còn lại chỉ làm chậm quyết định.",
      },
      lines: [
        L("l1", null, "How can you tell which missing information is worth looking for?", "Làm sao biết thông tin còn thiếu nào đáng đi tìm?"),
        L("l2", null, "Ask whether knowing it would actually change your choice, and look only for those.", "Hỏi: biết điều đó có làm đổi lựa chọn không, và chỉ tìm những điều ấy."),
        L("l3", null, "Interesting facts that change nothing only slow you down.", "Thông tin hay mà không đổi được gì chỉ làm chậm quyết định."),
      ], beats: { after: 600 } },
    { id: "s32", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Đủ để bắt đầu rồi" },
      lines: [L("l1", "det", "You know enough to start. Forty questions are below!", "Bạn biết đủ để bắt đầu rồi. Bốn mươi câu hỏi ở bên dưới!")] },
  ],
};
