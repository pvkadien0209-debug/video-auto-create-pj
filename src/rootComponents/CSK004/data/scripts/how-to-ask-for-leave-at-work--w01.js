// Kịch bản video W lần 3 (#110) — "Cách xin nghỉ phép đúng cách" · chuỗi "Giao tiếp nơi công sở"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-ask-for-leave-at-work--w01",
  hook: "HOOK-05",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "office-communicators", slug: "how-to-ask-for-leave-at-work", door: "ky-nang", level: "B1",
    title: "Cách xin nghỉ phép đúng cách", series: "Giao tiếp nơi công sở" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Nguyệt → Thảo; sếp → Cô Hoa (chỉ phản ứng, không thoại); Sang (p21) → Dũng; “bạn” trong khung ✍️ p12 kể ở thẻ CMP-01; Thuỷ (p16) kể không tên; người quản lý nói tiếng Anh (p25) → Sam (vai mới, chỉ phản ứng). Tên trong mẫu email p11 (anh Tuấn, chị Hà) và mẫu tin nhắn p20, p24 (chị Hà, khách B) giữ nguyên chữ của bài. Vai mới: Sam. Phủ ý: 25/25. Bài có 7 mục; gộp hai mục đầu thành chương 1 (6 chương). HOOK-05: kết cục ở s01 (vé đã đặt, không được duyệt); vòng đóng ở DLG s11 (p6–p8, câu mẫu p6). Hai DLG: s11 và s23 (báo ốm quên việc gấp, p20–p22). Con số 12 ngày ở NUM-01 theo p3 (Bộ luật Lao động 2019, Điều 113 trong meta.sources). Câu đố: questions[16].",
  scenes: [
    // ── Mở đầu: kết cục trước
    { id: "s01", module: "SCENE-01", ref: "p7",
      data: { set: "office", label: "Chuyện của Thảo", actors: [{ id: "thao", side: "left", pose: "phone" }], props: ["ticket"] },
      lines: [
        L("l1", "thao", "Not approved? But I've already booked the plane tickets!", "Không được duyệt? Mà mình đặt vé máy bay rồi!", { face: "surprised", pose: "shrug" }),
        L("l2", null, "Her dates fell in the end-of-quarter stock count week. Nobody could take leave.", "Ngày nghỉ rơi đúng tuần kiểm kê cuối quý, cả phòng không ai được nghỉ."),
        L("l3", null, "New tickets, extra money, a trip put off. Let's rewind.", "Đổi vé, trả thêm tiền, chuyến đi phải lùi. Tua lại nhé."),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Xin nghỉ thế nào cho đúng?", pose: "present",
        items: ["Nắm quy định nghỉ phép", "Nói với quản lý trước khi đặt vé", "Đơn, email ghi rõ ngày và người thay", "Bàn giao bằng văn bản"] },
      lines: [
        L("l1", "det", "How do you ask for leave the right way? Leave is your right. People judge how you ask.", "Xin nghỉ thế nào cho đúng? Nghỉ phép là quyền lợi; người ta chỉ đánh giá cách bạn xin."),
        L("l2", "det", "Know the rules.", "Nắm quy định nghỉ phép."),
        L("l3", "det", "Talk to your manager early, before you book.", "Nói với quản lý sớm, trước khi đặt vé."),
        L("l4", "det", "Send a request with the dates and who covers.", "Gửi đơn ghi rõ ngày và người thay."),
        L("l5", "det", "And hand over your work in writing.", "Và bàn giao bằng văn bản."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng xin nghỉ", chapters: [
        { label: "Quyền nghỉ và quy định", illus: "page-facing-up" },
        { label: "Chọn ngày, mở lời", illus: "spiral-calendar" },
        { label: "Đơn hoặc email", illus: "envelope" },
        { label: "Bàn giao", illus: "clipboard" },
        { label: "Ốm, việc gấp", illus: "face-with-thermometer" },
        { label: "Quay lại làm việc", illus: "office-building" } ] },
      lines: [
        L("l1", null, "Six parts: your rights and the rules, dates and asking, the email,", "Sáu phần: quyền và quy định, chọn ngày và mở lời, email xin nghỉ,"),
        L("l2", null, "the handover, sudden sick days, and coming back.", "bàn giao, khi ốm hay có việc gấp, và quay lại làm việc."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Quyền nghỉ và quy định" },
      lines: [L("l1", "det", "Part one: will leave make you look bad? And what to know first.", "Phần một: xin nghỉ có bị đánh giá kém? Cần biết gì trước?")] },
    { id: "s05", module: "HOST-02", ref: "p1",
      data: { statement: "Xin nghỉ phép là bị đánh giá thiếu nhiệt tình", truth: false,
        why: "Nghỉ ngơi là quyền lợi; điều làm mất điểm là báo muộn, báo sai người, để lại việc dở." },
      lines: [
        L("l1", "det", "Asking for leave makes you look less committed. True or false?", "Xin nghỉ phép là bị đánh giá thiếu nhiệt tình. Đúng hay sai?"),
        L("l2", "det", "False, if you ask the right way. Rest is a right in labour law and company rules.", "Sai, nếu xin đúng cách. Nghỉ ngơi là quyền lợi luật lao động và nội quy ghi nhận.", { face: "happy" }),
        L("l3", "det", "You lose points for late notice, the wrong person, or unfinished work.", "Mất điểm là vì báo muộn, báo sai người, hoặc để lại việc dở dang."),
      ] },
    { id: "s06", module: "REL-01", ref: "p2",
      data: { cause: "Chuẩn bị kỹ: ngày hợp lý, người thay, bảng bàn giao", effect: "Lời xin nghỉ đi kèm một kế hoạch, không phải gánh nặng", causeIllus: "clipboard", effectIllus: "relieved-face" },
      lines: [
        L("l1", null, "Feeling shy is real, especially when the team is busy.", "Cảm giác ngại là rất thật, nhất là khi nhóm đang bận."),
        L("l2", null, "The best cure is preparing: sensible dates, someone to cover, a handover table.", "Cách bớt ngại nhất: chọn ngày hợp lý, có người thay, có bảng bàn giao."),
        L("l3", null, "Then your request comes with a plan, not a burden.", "Khi đó lời xin nghỉ đi kèm một kế hoạch, không phải gánh nặng."),
      ] },
    { id: "s07", module: "NUM-01", ref: "p3",
      data: { kicker: "Theo luật", value: 12, unit: "ngày", label: "nghỉ hằng năm có lương khi làm đủ 12 tháng, điều kiện bình thường",
        source: "Bộ luật Lao động 2019, Điều 113", illus: "spiral-calendar" },
      lines: [
        L("l1", null, "Twelve months, normal conditions: twelve paid days of leave a year.", "Đủ mười hai tháng, điều kiện bình thường: mười hai ngày phép có lương."),
        L("l2", null, "Fewer months? By ratio. Every five years adds a day.", "Chưa đủ thì tính theo tỷ lệ; đủ năm năm thêm một ngày."),
        L("l3", null, "Company rules may give more.", "Nội quy có nơi còn rộng hơn luật."),
      ] },
    { id: "s08", module: "LIST-05", ref: "p4",
      data: { title: "Đọc nội quy hoặc hỏi nhân sự", items: ["Mình còn bao nhiêu ngày phép", "Mỗi loại nghỉ phải báo trước bao lâu", "Xin qua phần mềm, email hay đơn giấy", "Phép chưa dùng có chuyển sang năm sau"], illus: "page-facing-up" },
      lines: [
        L("l1", null, "Read the rules, or ask HR: how many days do I have left?", "Đọc nội quy hoặc hỏi nhân sự: mình còn bao nhiêu ngày phép?"),
        L("l2", null, "How early must I ask for each type? By software, email, or paper?", "Mỗi loại nghỉ báo trước bao lâu? Xin qua phần mềm, email hay đơn giấy?"),
        L("l3", null, "Do unused days carry over to next year?", "Phép chưa dùng có được chuyển sang năm sau không?"),
      ] },

    // ── Chương 2
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Chọn ngày, mở lời" },
      lines: [L("l1", "det", "Part two: back to Thảo. Choosing dates and asking your manager.", "Phần hai: quay lại Thảo. Chọn ngày và mở lời với quản lý.")] },
    { id: "s10", module: "LIST-07", ref: "p5",
      data: { title: "Trước khi chọn ngày, xem", items: [
        { text: "Lịch dự án, hạn chót của nhóm", illus: "spiral-calendar" },
        { text: "Lịch nghỉ của đồng nghiệp cùng vị trí", illus: "busts-in-silhouette" },
        { text: "Giai đoạn bận: cuối quý, mùa cao điểm", illus: "chart-increasing" } ] },
      lines: [
        L("l1", null, "For long leave, tell them as early as you can.", "Kỳ nghỉ dài: báo càng sớm càng tốt."),
        L("l2", null, "Check project deadlines, and when colleagues in your role are away.", "Xem lịch dự án, hạn chót, lịch nghỉ của đồng nghiệp cùng vị trí."),
        L("l3", null, "Avoid busy times like the end of a quarter. The team needs everyone then.", "Tránh giai đoạn bận như cuối quý: lúc đó nhóm cần đủ người."),
      ] },
    { id: "s11", module: "DLG-01", ref: "p6,p7,p8",
      data: { set: "office", label: "Vé rẻ đi Đà Lạt",
        actors: [{ id: "thao", side: "left", pose: "phone" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Đặt vé rồi mới xin nghỉ",
          why: "Ngày rơi vào tuần kiểm kê cuối quý: không được duyệt, phải đổi vé, trả thêm tiền." } },
      lines: [
        L("l1", "thao", "Cheap tickets to Đà Lạt! I'll book now, and ask for leave later.", "Vé rẻ đi Đà Lạt! Đặt luôn, xin nghỉ sau.", { face: "happy", pose: "phone", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Those dates were the stock count week. Ask first, then book.", "Ngày đó là tuần kiểm kê. Xin phép trước, đặt vé sau."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l5", "thao", "I plan to take leave from the twenty-third to the twenty-seventh of November, to go home.", "Em dự định nghỉ từ 23 đến 27 tháng 11 để về quê,", { phase: "redo", pose: "explain", to: "hoa" }),
        L("l6", "thao", "Would that work for the project?", "cô thấy thời gian này có ổn với dự án không ạ?", { phase: "redo", face: "thinking", react: { hoa: "happy" } }),
        L("l7", "det", "Say it in person, before the official request. That question lets the manager give input.", "Nói miệng trước khi gửi đơn: câu hỏi ấy cho sếp quyền góp ý, nên dễ đồng ý hơn.", { phase: "redo" }),
      ] },

    // ── Chương 3
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Đơn hoặc email xin nghỉ" },
      lines: [L("l1", "det", "Part three: what goes in the leave request.", "Phần ba: viết đơn hoặc email xin nghỉ cần những gì?")] },
    { id: "s13", module: "LIST-01", ref: "p9",
      data: { title: "Email xin nghỉ đủ ý", items: ["Tiêu đề: ngày nghỉ và tên bạn", "Thời gian, số ngày, loại nghỉ", "Lý do ngắn gọn", "Người phụ trách thay", "Cách liên hệ khi thật gấp", "Lời cảm ơn"], illus: "envelope", icons: ["memo", "spiral-calendar", "speech-balloon", "handshake", "telephone-receiver", "folded-hands"] },
      lines: [
        L("l1", null, "A subject line with the dates and your name.", "Tiêu đề ghi ngày nghỉ và tên bạn."),
        L("l2", null, "The dates, the number of working days, and the type: annual, personal, sick or unpaid.", "Thời gian, số ngày làm việc, loại nghỉ: phép năm, việc riêng, ốm hay không lương."),
        L("l3", null, "A short reason, who covers your work, how to reach you if urgent, and a thank you.", "Lý do ngắn, người thay, cách liên hệ khi gấp, và lời cảm ơn."),
      ] },
    { id: "s14", module: "CMP-06", ref: "p10",
      data: { do: ["“Có việc gia đình”, “về quê” là đủ"], dont: ["Kể chi tiết chuyện riêng", "Bịa lý do"],
        doIcons: ["house"], dontIcons: ["speech-balloon", "lying-face"] },
      lines: [
        L("l1", null, "You don't need to share private details. “A family matter” or “going home” is enough.", "Không cần kể chi tiết chuyện riêng: “có việc gia đình”, “về quê” là đủ."),
        L("l2", null, "But never invent a reason. Made-up stories come out, and trust is lost for a long time.", "Nhưng đừng bịa lý do: chuyện bịa dễ lộ, mất lòng tin lâu dài."),
      ] },
    { id: "s15", module: "STORY-04", ref: "p11",
      data: { lang: "vi", to: "anh Tuấn", subject: "Xin nghỉ phép năm 23/11 đến 27/11",
        body: "Chào anh Tuấn,\nEm xin nghỉ phép năm 5 ngày, từ thứ Hai 23/11 đến thứ Sáu 27/11, để về quê có việc gia đình.\nTrong thời gian này, chị Hà theo dõi đơn hàng của khách A và B, em đã gửi chị bảng bàn giao.\nViệc thật gấp anh có thể gọi em.\nEm cảm ơn anh.",
        marks: [{ text: "phép năm 5 ngày", note: "Loại nghỉ, số ngày" }, { text: "chị Hà theo dõi đơn hàng", note: "Người thay: sếp yên tâm duyệt" }, { text: "Việc thật gấp anh có thể gọi em.", note: "Cách liên hệ khi gấp" }, { text: "Em cảm ơn anh.", note: "Lời cảm ơn" }],
        note: "Mẫu email xin nghỉ đủ ý" },
      lines: [
        L("l1", null, "A sample: five days of annual leave, Monday the twenty-third to Friday the twenty-seventh, for a family matter.", "Mẫu: nghỉ phép năm năm ngày, thứ Hai 23 đến thứ Sáu 27/11, về quê có việc gia đình."),
        L("l2", null, "Hà follows orders for clients A and B. She already has the handover table.", "Chị Hà theo dõi đơn của khách A và B, đã có bảng bàn giao."),
        L("l3", null, "Naming the cover tells the manager the work is safe, so approving is easy.", "Ghi người thay để sếp biết việc đã có người lo, dễ duyệt."),
        L("l4", null, "Call me if it's really urgent. Thank you.", "Việc thật gấp anh có thể gọi em. Em cảm ơn anh."),
      ] },
    { id: "s16", module: "CMP-01", ref: "p12",
      data: { labels: ["Nhắn nhóm chat chung", "Nhắn riêng quản lý"], left: "“Hôm nay em xin nghỉ ạ.” Dễ trôi, quản lý có khi không đọc kịp", right: "“Em sốt, xin nghỉ. Chín giờ khách C đến, nhờ anh cử người tiếp giúp em.”", illus: ["busts-in-silhouette", "mobile-phone"] },
      lines: [
        L("l1", null, "A fever overnight, and a client visit at nine.", "Sốt từ đêm, mà chín giờ có khách hẹn đến văn phòng."),
        L("l2", null, "At seven, a note in the team chat: “I'm taking today off.” It gets lost among dozens of messages.", "Bảy giờ nhắn nhóm chung “Hôm nay em xin nghỉ ạ”: dễ trôi giữa hàng chục tin."),
        L("l3", null, "Better, to your manager directly: “I have a fever, I need today off. Client C comes at nine. Could someone meet them?”", "Tốt hơn, nhắn riêng quản lý: “Em sốt, hôm nay xin nghỉ. Chín giờ khách C đến, nhờ anh cử người tiếp.”"),
      ] },
    { id: "s16b", module: "HOST-01", ref: "p13",
      data: { pose: "point", text: "Báo đúng người, đừng chỉ thả vào nhóm chung." },
      lines: [
        L("l4", "det", "Tell the right person. Don't just drop it in the group.", "Báo đúng người, đừng chỉ thả vào nhóm chung."),
      ] },

    // ── Chương 4
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Bàn giao để nghỉ cho yên" },
      lines: [L("l1", "det", "Part four: the handover, so you can really rest.", "Phần bốn: bàn giao thế nào để nghỉ cho yên?")] },
    { id: "s18", module: "LIST-13", ref: "p14,p15",
      data: { title: "Trước ngày nghỉ", items: [
        { title: "Chốt xong việc có hạn rơi vào lúc vắng", detail: "Hoặc thống nhất rõ ai làm tiếp.", illus: "check-mark-button" },
        { title: "Bảng bàn giao", detail: "Việc gì, đang đến đâu, cần làm tiếp gì, liên hệ ai.", illus: "clipboard" },
        { title: "Chia sẻ quyền truy cập qua công cụ chung", detail: "Không đưa mật khẩu cá nhân.", illus: "open-file-folder" },
        { title: "Báo khách, đối tác hay liên hệ", detail: "Ngày bạn vắng và người thay.", illus: "telephone-receiver" } ] },
      lines: [
        L("l1", null, "Before you go, finish the tasks with deadlines during your leave.", "Trước ngày nghỉ, chốt xong việc có hạn rơi vào lúc bạn vắng."),
        L("l2", null, "The rest goes in a handover table: the task, its status, the next step, who to contact.", "Phần còn lại ghi bảng bàn giao: việc gì, đến đâu, làm tiếp gì, liên hệ ai."),
        L("l3", null, "Share files through company tools. Never give your personal password.", "Chia sẻ tài liệu qua công cụ chung, không đưa mật khẩu cá nhân."),
        L("l4", null, "Tell your regular clients and partners when you're away, and who covers.", "Báo khách, đối tác hay liên hệ ngày bạn vắng và người thay."),
      ] },
    { id: "s19", module: "LIST-06", ref: "p16,p17",
      data: { title: "Nghỉ năm ngày, ba khách đang chờ báo giá", steps: [
        { text: "Bảng ngắn: mỗi khách đang ở bước nào, làm gì tiếp, hạn nào", illus: "clipboard" },
        { text: "Chia sẻ thư mục báo giá qua ổ chung", illus: "open-file-folder" },
        { text: "Ngồi mười lăm phút với người thay", illus: "handshake" },
        { text: "Nhắn ba khách ngày vắng và người thay", illus: "mobile-phone" } ] },
      lines: [
        L("l1", null, "One colleague, five days off, three clients waiting for quotes.", "Một bạn sắp nghỉ năm ngày, ba khách quen đang chờ báo giá."),
        L("l2", null, "A short table for each client: the step, what's next, the deadline.", "Bảng ngắn cho từng khách: đang ở bước nào, làm gì tiếp, hạn khi nào."),
        L("l3", null, "She shares the folder, spends fifteen minutes with her cover, and messages the clients.", "Chia sẻ thư mục, ngồi mười lăm phút với người thay, nhắn cho ba khách."),
        L("l4", null, "The whole holiday, her cover handled it without calling her.", "Cả kỳ nghỉ, người thay tự xử lý được mà không cần gọi."),
        L("l5", "det", "Hand it over on paper, and you can rest in peace.", "Bàn giao trên giấy thì nghỉ mới yên."),
      ] },
    { id: "s20", module: "TEXT-04", ref: "p18",
      data: { text: "Bật trả lời tự động trên email: ghi ngày bạn quay lại và người liên hệ thay.", marks: ["ngày bạn quay lại", "người liên hệ thay"], illus: "envelope-with-arrow" },
      lines: [
        L("l1", null, "Turn on your email auto-reply, with your return date and who to contact.", "Bật trả lời tự động: ghi ngày quay lại và người liên hệ thay."),
        L("l2", null, "Senders won't wait in vain.", "Người gửi thư sẽ không phải chờ trong vô vọng."),
      ] },

    // ── Chương 5
    { id: "s21", module: "HOST-03", data: { n: 5, of: 6, title: "Ốm, việc gấp" },
      lines: [L("l1", "det", "Part five: sick, or an emergency, with no notice.", "Phần năm: ốm hoặc việc gấp, không báo trước được thì sao?")] },
    { id: "s22", module: "LIST-07", ref: "p19",
      data: { title: "Báo sớm, trước giờ làm, gọi hoặc nhắn riêng", items: [
        { text: "Lý do", illus: "face-with-thermometer" },
        { text: "Dự kiến nghỉ bao lâu", illus: "hourglass-not-done" },
        { text: "Việc gì đang gấp cần người khác xử lý", illus: "alarm-clock" } ] },
      lines: [
        L("l1", null, "Tell your manager as early as you can, ideally before work, by call or direct message.", "Báo sớm nhất có thể, tốt nhất trước giờ làm, gọi hoặc nhắn riêng quản lý."),
        L("l2", null, "Keep it short: the reason, how long, and which urgent work needs someone else.", "Nói ngắn: lý do, dự kiến nghỉ bao lâu, việc gì gấp cần người khác xử lý."),
      ] },
    { id: "s23", module: "DLG-01", ref: "p20,p21,p22",
      data: { set: "home", label: "Sáng sớm, đau bụng dữ dội",
        actors: [{ id: "dung", side: "right", pose: "phone" }],
        verdict: { ok: false, label: "Báo ốm mà quên việc gấp",
          why: "Chỉ mình Dũng biết file báo cáo ở đâu; đến trưa sếp mới phát hiện, báo cáo trễ nửa ngày." } },
      lines: [
        L("l1", null, "Early morning. Dũng has terrible stomach pain.", "Sáng sớm, Dũng đau bụng dữ dội."),
        L("l2", "dung", "I'm sick. Taking today off.", "Em ốm, xin nghỉ hôm nay ạ.", { face: "sad", pose: "phone", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "The sales report is due at ten, and only Dũng knows where the file is.", "Báo cáo doanh số phải gửi trước 10 giờ, mà chỉ Dũng biết file nằm đâu."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "dung", "I've had a fever since last night. I need the morning off to see a doctor.", "Em sốt từ tối qua, sáng nay em xin nghỉ để đi khám.", { phase: "redo", pose: "phone", face: "thinking" }),
        L("l7", "dung", "Client B's quote is ready in the shared folder. Could Hà send it before ten?", "Báo giá khách B soạn xong trong thư mục chung, nhờ chị Hà gửi trước 10 giờ.", { phase: "redo" }),
        L("l8", "dung", "I'll update you this afternoon.", "Chiều nay em cập nhật tình hình ạ.", { phase: "redo", face: "neutral" }),
        L("l9", "det", "Report a sick day with the urgent task, or the work will wait.", "Báo nghỉ kèm việc gấp, kẻo việc nằm chờ.", { phase: "redo" }),
      ] },
    { id: "s24", module: "TEXT-04", ref: "p23",
      data: { text: "Đi làm lại: bổ sung đơn, giấy tờ theo quy định công ty, như giấy cơ sở y tế nếu nghỉ ốm hưởng chế độ.", marks: ["hỏi nhân sự"], illus: "page-facing-up" },
      lines: [
        L("l1", null, "When you're back, add any forms your company requires.", "Khi đi làm lại, bổ sung đơn, giấy tờ theo quy định công ty."),
        L("l2", null, "For example, a medical paper for paid sick leave. Ask HR what's needed.", "Ví dụ giấy của cơ sở y tế nếu nghỉ ốm hưởng chế độ. Hỏi nhân sự cần gì."),
      ] },

    // ── Chương 6
    { id: "s25", module: "HOST-03", data: { n: 6, of: 6, title: "Quay lại làm việc" },
      lines: [L("l1", "det", "Part six: your first day back.", "Phần sáu: quay lại làm việc thì nên làm gì?")] },
    { id: "s26", module: "SCENE-01", ref: "p24",
      data: { set: "office", label: "Ngày đầu quay lại", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "First day back: ask your cover what came up, and skim emails by importance.", "Ngày đầu quay lại: hỏi người thay có gì phát sinh, đọc lướt email theo thứ tự quan trọng."),
        L("l2", "dung", "Anything new while I was away?", "Mấy hôm em vắng có gì phát sinh không chị?", { to: "thao" }),
        L("l3", "dung", "Thank you for sending the quote to client B for me.", "Cảm ơn chị đã gửi báo giá cho khách B giúp em.", { face: "happy", pose: "thumb", react: { thao: "happy" } }),
        L("l4", null, "A specific thank you. Next time, they'll be glad to help again.", "Lời cảm ơn cụ thể: lần sau họ sẽ sẵn lòng giúp tiếp."),
      ] },
    { id: "s27", module: "SCENE-01", ref: "p25",
      data: { set: "office", label: "Nếu làm việc bằng tiếng Anh", actors: [{ id: "thao", side: "left" }, { id: "sam", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "thao", "I would like to request leave from the twentieth to the twenty-fourth.", "Em xin nghỉ phép từ ngày 20 đến ngày 24.", { pose: "explain", to: "sam" }),
        L("l2", "thao", "Hà will cover my work while I am away.", "Chị Hà sẽ làm thay việc của em khi em vắng.", { to: "sam", react: { sam: "happy" } }),
        L("l3", null, "And when you're ill:", "Còn khi bị ốm:"),
        L("l4", "thao", "I am not feeling well and need to take a sick day today.", "Em thấy không khoẻ, hôm nay em cần nghỉ ốm.", { face: "sad", pose: "phone" }),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s28", module: "HOST-01", ref: "p8,p13,p17,p22",
      data: { title: "Bốn câu mang về", pose: "present", items: ["Xin phép trước, đặt vé sau", "Báo đúng người, đừng thả vào nhóm chung", "Bàn giao trên giấy thì nghỉ mới yên", "Báo nghỉ kèm việc gấp"] },
      lines: [
        L("l1", "det", "Ask first, book later.", "Xin phép trước, đặt vé sau."),
        L("l2", "det", "Tell the right person.", "Báo đúng người, đừng chỉ thả vào nhóm chung."),
        L("l3", "det", "Hand over on paper.", "Bàn giao trên giấy thì nghỉ mới yên."),
        L("l4", "det", "Sick? Mention the urgent task.", "Báo nghỉ kèm việc gấp, kẻo việc nằm chờ."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[16]",
      data: {
        q: "Why is posting only in the team group chat risky when you are sick?",
        options: [
          "Your colleagues will think you are lying because everyone can read it",
          "Group chats always delete any message sent before office hours begin",
          "The message can get lost, and your manager may not see it in time",
        ],
        correct: 2, countdown: 5, illus: "face-with-thermometer",
        why: "Tin nhắn dễ trôi, quản lý có thể không đọc kịp.",
      },
      lines: [
        L("l1", null, "Why is posting only in the team group chat risky when you are sick?", "Vì sao chỉ nhắn vào nhóm chat chung khi bị ốm là rủi ro?"),
        L("l2", null, "The message can get lost, and your manager may not see it in time.", "Tin nhắn dễ trôi, và quản lý có thể không đọc kịp."),
        L("l3", null, "Tell the right person directly, with any urgent task.", "Báo thẳng đúng người, kèm luôn việc gấp."),
      ] },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Check how many leave days you have, and save the sample email.", "Xem mình còn bao nhiêu ngày phép, lưu sẵn mẫu email xin nghỉ."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
