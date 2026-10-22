// Kịch bản video W lần 3 (#110) — "Câu bị động: cách dùng tự nhiên trong công việc" · chuỗi "Ngữ pháp tiếng Anh cần biết"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "the-passive-voice-at-work--w01",
  hook: "HOOK-13",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "grammar-relearners", slug: "the-passive-voice-at-work", door: "kien-thuc", level: "B1",
    title: "Câu bị động: cách dùng tự nhiên trong công việc", series: "Ngữ pháp tiếng Anh cần biết" },
  format: "W", mode: "text", audio: {},
  notes: "Lần 3 (#110). Đổi tên: người nhắn khách “The goods delivered yesterday” (p24) → Dũng (giao hàng); khách → Cô Hoa (chủ shop đặt hàng); “bạn” nhắc nhóm chat (p10), báo lỗi hoá đơn (p17), viết CV (p19) → Thảo; thành viên nhóm → Dũng; sếp nghe báo lỗi → Bác Bình; đồng nghiệp nước ngoài nghe tin tăng lương (câu 31, p23) → Sam (vai mới). Cảnh 1 (DLG-01) “phóng to” chữ were bị thiếu (⚖️ p24). Phủ ý: 26/26.",
  scenes: [
    { id: "s01", module: "DLG-01", ref: "p24,p25",
      data: { set: "street", label: "Tin nhắn cho khách",
        actors: [{ id: "dung", side: "left", pose: "phone" }, { id: "hoa", side: "right", pose: "phone" }],
        verdict: { ok: false, label: "Bị động thiếu be", why: "Thiếu were, người đọc chỉ thấy một cụm danh từ và chờ phần còn lại của câu.",
          rule: "Bị động: be đúng thì + quá khứ phân từ" } },
      lines: [
        L("l1", "dung", "The goods delivered yesterday.", "The goods delivered yesterday.", { face: "happy" }),
        L("l2", "hoa", "The goods delivered yesterday… what about them? Is there a problem?", "Số hàng giao hôm qua… làm sao? Có vấn đề gì à?", { face: "worried", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "One small word is missing: were.", "Thiếu đúng một chữ were."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "The goods were delivered yesterday.", "The goods were delivered yesterday.", { phase: "redo", face: "happy", react: { hoa: "happy" } }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Khi nào bị động, khi nào chủ động?", pose: "present",
        items: ["Người làm không quan trọng → bị động", "Cần khách quan, tế nhị → bị động", "Cần rõ ai làm, nhất là bạn → chủ động"] },
      lines: [
        L("l1", "det", "Without be, the sentence hangs. So when should you use the passive?", "Bị động thiếu be, câu treo lơ lửng. Vậy khi nào nên dùng bị động?"),
        L("l2", "det", "When the doer doesn't matter.", "Khi người làm không quan trọng."),
        L("l3", "det", "When you need to sound neutral or gentle.", "Khi cần khách quan, tế nhị."),
        L("l4", "det", "But when it matters who did it, especially you, use the active.", "Còn khi cần rõ ai làm, nhất là bạn: dùng chủ động."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu chặng của video",
        chapters: [
          { label: "Tạo câu bị động", illus: "gear" },
          { label: "Các dạng hay gặp", illus: "envelope" },
          { label: "Khi bị động giúp viết hay hơn", illus: "feather" },
          { label: "Mẫu câu nên lưu", illus: "floppy-disk" },
          { label: "Quay về chủ động", illus: "bust-in-silhouette" },
          { label: "Lỗi người Việt hay mắc", illus: "warning" } ] },
      lines: [L("l1", null, "Six parts, from the formula to the mistakes we make most.", "Sáu chặng, từ công thức đến những lỗi hay mắc nhất.")] },

    // Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Tạo câu bị động" },
      lines: [L("l1", "det", "Part one: making a passive sentence.", "Phần một: tạo câu bị động.")] },
    { id: "s05", module: "TEXT-07", ref: "p1",
      data: { en: "The report was sent yesterday.", vi: "Báo cáo đã được gửi hôm qua.",
        chunks: [{ en: "The report", vi: "báo cáo" }, { en: "was sent", vi: "đã được gửi" }, { en: "yesterday.", vi: "hôm qua" }],
        illus: "page-facing-up" },
      lines: [
        L("l1", null, "The passive puts the thing affected first, not the doer. The formula: be in the right tense, plus the past participle.", "Bị động đưa đối tượng chịu tác động lên làm chủ ngữ. Công thức: be chia theo thì + quá khứ phân từ."),
        L("l2", null, "The report was sent yesterday, instead of I sent the report yesterday.", "The report was sent yesterday, thay cho I sent the report yesterday."),
      ] },
    { id: "s06", module: "LIST-08", ref: "p2",
      data: { title: "Ba bước tạo câu bị động",
        items: [
          { title: "Tân ngữ lên làm chủ ngữ", detail: "The manager approved the budget → The budget…", illus: "up-arrow" },
          { title: "Be đúng thì + cột ba", detail: "… was approved", illus: "gear" },
          { title: "By + người làm khi thật cần", detail: "… by the manager", illus: "bust-in-silhouette" } ] },
      lines: [
        L("l1", null, "Step one: the object becomes the new subject. Step two: be in the original tense, plus the past participle.", "Bước một: tân ngữ lên làm chủ ngữ. Bước hai: be đúng thì câu gốc + quá khứ phân từ."),
        L("l2", null, "Step three: add by and the doer only when it's needed. The budget was approved by the manager.", "Bước ba: chỉ thêm by + người làm khi thật cần. The budget was approved by the manager."),
      ] },
    { id: "s07", module: "CMP-07", ref: "p3",
      data: { wrong: "The problem was happened last week.", right: "The problem happened last week.", diff: ["was"],
        note: "Happen, arrive, sleep không có tân ngữ, không có dạng bị động" },
      lines: [
        L("l1", null, "Only verbs with an object can be passive. Happen, arrive and sleep have no passive.", "Chỉ động từ có tân ngữ mới chuyển được sang bị động. Happen, arrive, sleep thì không."),
        L("l2", null, "Write the problem happened last week. Not the problem was happened.", "Viết The problem happened last week, không viết was happened."),
      ] },

    // Chương 2
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Các dạng hay gặp" },
      lines: [L("l1", "det", "Part two: the forms you meet most at work.", "Phần hai: các dạng bị động hay gặp trong công việc.")] },
    { id: "s09", module: "CMP-05", ref: "p4,p5",
      data: { title: "Sáu dạng đủ cho hầu hết email",
        columns: [{ label: "Dạng", illus: "gear" }, { label: "Câu mẫu", illus: "envelope" }],
        rows: [
          { label: "Hiện tại đơn", cells: ["are + V3", "Invoices are processed every Friday."] },
          { label: "Quá khứ đơn", cells: ["was + V3", "The contract was signed in June."] },
          { label: "Hiện tại hoàn thành", cells: ["has been + V3", "Your request has been received."] },
          { label: "Tương lai, tiếp diễn", cells: ["will be · is being", "The system is being updated."] },
          { label: "Sau must, can…", cells: ["must be + V3", "This form must be signed."] } ] },
      lines: [
        L("l1", null, "Present simple: invoices are processed every Friday. Past simple: the contract was signed in June.", "Hiện tại đơn: Invoices are processed every Friday. Quá khứ đơn: The contract was signed in June."),
        L("l2", null, "Present perfect: your request has been received.", "Hiện tại hoàn thành: Your request has been received."),
        L("l3", null, "Future: the new policy will be announced next month. Continuous: the system is being updated, so please wait.", "Tương lai: The new policy will be announced next month. Tiếp diễn: The system is being updated, so please wait."),
        L("l4", null, "After a modal: this form must be signed by your supervisor.", "Sau động từ khuyết thiếu: This form must be signed by your supervisor."),
      ] },
    { id: "s10", module: "HOST-02", ref: "p6",
      data: { statement: "Che phân từ đi, phần be còn lại phải đúng thì câu gốc", truth: true, why: "Câu gốc ở quá khứ thì be phải là was hoặc were." },
      lines: [
        L("l1", "det", "Quick check: cover the past participle. The be part must match the original tense. True or false?", "Mẹo kiểm tra: che phân từ đi, phần be còn lại phải đúng thì câu gốc. Đúng hay sai?"),
        L("l2", "det", "True. If the original is past, be must be was or were.", "Đúng. Câu gốc ở quá khứ thì be phải là was hoặc were.", { face: "happy" }),
      ] },

    // Chương 3
    { id: "s11", module: "HOST-03", data: { n: 3, of: 6, title: "Khi bị động giúp viết hay hơn" },
      lines: [L("l1", "det", "Part three: when the passive helps.", "Phần ba: khi nào bị động giúp mình viết hay hơn.")] },
    { id: "s12", module: "LIST-13", ref: "p7,p8",
      data: { title: "Hai lúc nên dùng bị động",
        items: [
          { title: "Người làm không quan trọng", detail: "The office is cleaned every evening. · My laptop was stolen from the car.", illus: "broom" },
          { title: "Nhấn kết quả, viết nội quy", detail: "Three new branches were opened this year. · Visitors are required to register at reception.", illus: "office-building" } ] },
      lines: [
        L("l1", null, "When the doer doesn't matter, everyone knows, or nobody knows. The office is cleaned every evening. My laptop was stolen from the car.", "Khi người làm không quan trọng, ai cũng biết hoặc không ai biết: The office is cleaned every evening. My laptop was stolen from the car."),
        L("l2", null, "To stress the result: three new branches were opened this year.", "Khi nhấn vào kết quả: Three new branches were opened this year."),
        L("l3", null, "And for rules: Visitors are required to register at reception. All expenses must be approved before payment.", "Và viết nội quy: Visitors are required to register at reception. All expenses must be approved before payment."),
      ] },
    { id: "s13", module: "CMP-01", ref: "p9",
      data: { labels: ["Chỉ mặt một người", "Tế nhị hơn"], left: "You made a mistake in the invoice.",
        right: "A mistake was made in the invoice.", illus: ["backhand-index-pointing-left", "feather"] },
      lines: [
        L("l1", null, "To be tactful, avoid pointing at one person. A mistake was made in the invoice is softer than you made a mistake.", "Muốn tế nhị, tránh chỉ mặt một người: A mistake was made in the invoice mềm hơn You made a mistake."),
        L("l2", null, "It helps the team focus on fixing, not on blaming.", "Cách này giúp cả nhóm tập trung sửa lỗi thay vì tìm người để trách."),
      ] },
    { id: "s14", module: "SCENE-03", ref: "p10,p11",
      data: { set: "office", actors: [{ id: "thao", side: "left", pose: "phone" }, { id: "dung", side: "right", pose: "phone" }],
        left: { label: "Cách A: you", ok: false }, right: { label: "Cách B: bị động", ok: true } },
      lines: [
        L("l1", null, "Some teammates forgot the expense form again. Thao reminds the group chat.", "Vài bạn lại quên nộp mẫu chi phí. Thảo nhắc trong nhóm chat."),
        L("a1", "thao", "You didn't fill in the expense form again.", "You didn't fill in the expense form again.", { phase: "a", react: { dung: "sad" } }),
        L("b1", "thao", "The expense form needs to be completed by Friday. Thanks, everyone!", "The expense form needs to be completed by Friday. Thanks, everyone!", { phase: "b", face: "happy", react: { dung: "happy" } }),
        L("l2", null, "With you, each person feels blamed, and the chat goes quiet. Reminding a group? Make the task the subject.", "Chữ you khiến ai cũng thấy bị chỉ mặt, nhóm im lặng. Nhắc cả nhóm, để công việc làm chủ ngữ."),
      ] },

    // Chương 4
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Mẫu câu nên lưu" },
      lines: [L("l1", "det", "Part four: lines to save.", "Phần bốn: những mẫu câu nên lưu sẵn.")] },
    { id: "s16", module: "HOST-01", ref: "p12",
      data: { title: "Năm câu gặp mỗi tuần", pose: "present",
        items: ["Your request has been received.", "Your order has been shipped and will be delivered within three days.", "The meeting has been postponed.", "You will be contacted soon.", "Please find attached the document that was requested."] },
      lines: [
        L("l1", "det", "Your request has been received.", "Yêu cầu của bạn đã được tiếp nhận."),
        L("l2", "det", "Your order has been shipped and will be delivered within three days.", "Đơn đã được gửi đi, sẽ giao trong vòng ba ngày."),
        L("l3", "det", "The meeting has been postponed.", "Cuộc họp đã được hoãn."),
        L("l4", "det", "You will be contacted soon.", "Bạn sẽ sớm được liên hệ."),
        L("l5", "det", "Please find attached the document that was requested.", "Gửi kèm tài liệu đã được yêu cầu."),
      ] },
    { id: "s17", module: "TEXT-04", ref: "p13",
      data: { text: "It has been decided that the office will close early on Friday.", marks: ["It has been decided"], illus: "pushpin" },
      lines: [
        L("l1", null, "Passive with it shares general news objectively. It has been decided that the office will close early on Friday.", "Bị động với it truyền đạt thông tin chung khách quan: It has been decided that the office will close early on Friday."),
        L("l2", null, "Or: it is expected that sales will rise. Common in internal notices.", "Hoặc It is expected that sales will rise. Hay gặp trong thông báo nội bộ."),
      ] },
    { id: "s18", module: "SCENE-01", ref: "p14,p23",
      data: { set: "cafe", label: "Giờ nghỉ trưa",
        actors: [{ id: "thao", side: "left" }, { id: "sam", side: "right" }] },
      lines: [
        L("l1", "sam", "You look happy today!", "Hôm nay trông chị vui thế!", { face: "happy", to: "thao" }),
        L("l2", "thao", "I got a raise last month.", "I got a raise last month.", { face: "happy", pose: "explain", react: { sam: "surprised" } }),
        L("l3", "sam", "Great! My bag got lost at the airport, so I need good news.", "Tuyệt! Túi của tôi bị thất lạc ở sân bay, đang cần tin vui đây.", { face: "happy", pose: "shrug" }),
        L("l4", null, "In casual speech, get replaces be: he got promoted, my bag got lost. Often for sudden or personal events.", "Văn nói thân mật hay dùng get thay be: got promoted, got lost, nhất là việc bất ngờ, ảnh hưởng trực tiếp."),
        L("l5", null, "And don't translate được word by word. Say I got a raise, or I was given a raise. Not I was raised salary.", "Đừng dịch “được” sát chữ: nói I got a raise hoặc I was given a raise, không nói I was raised salary."),
      ] },

    // Chương 5
    { id: "s19", module: "HOST-03", data: { n: 5, of: 6, title: "Quay về chủ động" },
      lines: [L("l1", "det", "Part five: when to go back to the active.", "Phần năm: khi nào quay về câu chủ động.")] },
    { id: "s20", module: "CMP-01", ref: "p15,p16",
      data: { labels: ["Bị động: che người làm", "Chủ động: rõ ai lo"], left: "The issue has been identified and a fix is being prepared.",
        right: "Our team has identified the issue and we're preparing a fix.", illus: ["face-with-raised-eyebrow", "handshake"] },
      lines: [
        L("l1", null, "If the doer matters, especially you or your team, use the active. It's shorter, clearer, and shows who is responsible.", "Nếu người làm là thông tin quan trọng, nhất là bạn hay nhóm bạn, dùng chủ động: ngắn, rõ, cho thấy ai chịu trách nhiệm."),
        L("l2", null, "Our team has identified the issue and we're preparing a fix. Readers see who is on it, so they trust it more.", "Our team has identified the issue and we're preparing a fix. Người đọc biết rõ ai đang lo, nên dễ tin hơn."),
      ] },
    { id: "s21", module: "DLG-01", ref: "p17,p18",
      data: { set: "office", label: "Báo lỗi hoá đơn",
        actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right" }],
        verdict: { ok: false, label: "Lỗi của mình mà dùng bị động", why: "Bị động che mất người làm, sếp phải hỏi lại và bạn nghe như đang né.",
          rule: "Lỗi của mình, nói câu chủ động" } },
      lines: [
        L("l1", "thao", "A mistake was made in the invoice, and it will be fixed.", "A mistake was made in the invoice, and it will be fixed.", { pose: "explain" }),
        L("l2", "binh", "Who made it, and who is fixing it?", "Ai làm sai, và ai đang sửa?", { face: "thinking", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "The passive hides who did it. It sounds like you're dodging.", "Bị động che mất người làm, nghe như đang né."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "I made a mistake in the invoice, and I'm fixing it now.", "I made a mistake in the invoice, and I'm fixing it now.", { phase: "redo", pose: "explain", react: { binh: "happy" } }),
      ] },
    { id: "s22", module: "CMP-01", ref: "p19,p20",
      data: { labels: ["CV bị động", "CV chủ động"], left: "A team of five was led by me. Monthly reports were prepared.",
        right: "I led a team of five. I prepared monthly reports for the director.", illus: ["foggy", "flexed-biceps"] },
      lines: [
        L("l1", null, "Before: a team of five was led by me. Monthly reports were prepared. Longer, and still unclear. Who made the reports?", "Trước: dài hơn mà vẫn mờ. Dòng hai còn không cho biết ai làm báo cáo."),
        L("l2", null, "After: I led a team of five. I prepared monthly reports for the director. A CV is the place for I.", "Sau: I led a team of five. I prepared monthly reports for the director. CV là chỗ của chữ I."),
      ] },

    // Chương 6
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Lỗi người Việt hay mắc" },
      lines: [L("l1", "det", "Part six: mistakes we often make.", "Phần sáu: những lỗi người Việt hay mắc.")] },
    { id: "s24", module: "CMP-07", ref: "p21",
      data: { wrong: "The goods delivered yesterday.", right: "The goods were delivered yesterday.", diff: ["delivered"],
        note: "Thiếu were, nghe như hàng tự đi giao, hoặc câu bỏ dở" },
      lines: [
        L("l1", null, "Mistake one: no be. The goods were delivered yesterday.", "Lỗi số một: thiếu be. The goods were delivered yesterday."),
        L("l2", null, "Without were, it sounds like the goods delivered something, or an unfinished sentence.", "Thiếu were, câu nghe như hàng tự đi giao, hoặc như câu bỏ dở."),
      ] },
    { id: "s25", module: "CMP-05", ref: "p22",
      data: { title: "Lỗi thứ hai và thứ ba",
        columns: [{ label: "Sai", illus: "cross-mark" }, { label: "Đúng", illus: "check-mark-button" }],
        rows: [
          { label: "Sai phân từ", cells: ["The email was wrote.", "The email was written."] },
          { label: "Thừa by", cells: ["The decision was made by someone.", "The decision was made."] } ] },
      lines: [
        L("l1", null, "Mistake two: the wrong participle. The email was written, not was wrote.", "Lỗi thứ hai: sai phân từ. The email was written, không phải was wrote."),
        L("l2", null, "Mistake three: an extra by. The decision was made. By someone adds nothing.", "Lỗi thứ ba: thêm by thừa. The decision was made, by someone không thêm gì."),
      ] },
    { id: "s26", module: "TEXT-01", ref: "p25",
      data: { text: "Bị động thiếu be, câu treo lơ lửng.", illus: "balloon" },
      lines: [L("l1", null, "Remember the opening message: a passive without be leaves the reader hanging.", "Nhớ tin nhắn ở đầu video: bị động thiếu be, câu treo lơ lửng.")] },

    // Tổng kết
    { id: "s27", module: "END-03", ref: "p26,outro",
      data: { title: "Soát trước khi bấm gửi", illus: "clipboard",
        items: ["Có đủ be đúng thì chưa", "Phân từ đúng cột ba chưa", "By có thật sự cần không", "Câu này có nên là chủ động không"] },
      lines: [
        L("l1", null, "Before you send: be in the right tense? The third form? Is by really needed?", "Trước khi gửi: đủ be đúng thì chưa? Phân từ đúng cột ba chưa? By có thật cần không?"),
        L("l2", null, "And should this be active? For notices, passive. For your own work, I.", "Và câu này có nên là chủ động không? Thông báo dùng bị động; việc của mình dùng chữ I."),
      ] },
    { id: "s28", module: "QUIZ-01", ref: "questions[22]",
      data: {
        q: "Why might your manager ask who made the mistake after a mistake was made in the invoice?",
        options: [
          "The message is sent at night, so the manager is angry and tired",
          "The message has too much detail, so the manager cannot find the main point",
          "The passive hides the doer, so it is unclear who made and who fixes it",
        ],
        correct: 2, countdown: 5, illus: "receipt",
        why: "Câu bị động không nói ai làm sai, ai đang sửa, nghe như đang né trách nhiệm.",
      },
      lines: [
        L("l1", null, "Why might your manager ask who made the mistake after a mistake was made in the invoice?", "Vì sao sếp có thể hỏi ai làm sai sau câu a mistake was made in the invoice?"),
        L("l2", null, "The passive hides the doer, so it is unclear who made and who fixes it.", "Bị động che mất người làm: không rõ ai làm sai, ai đang sửa."),
        L("l3", null, "It can sound like you are avoiding responsibility.", "Nghe như người báo đang né trách nhiệm."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đã được chuẩn bị", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Check your last email for passive lines. Then, forty questions have been prepared for you!", "Soát các câu bị động trong email gần nhất. Rồi làm bốn mươi câu hỏi đã được chuẩn bị nhé!", { face: "wink" })] },
  ],
};
