// Kịch bản video W lần 3 (#110) — "Một ngày trước buổi phỏng vấn: danh sách việc cần làm" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "checklist-for-the-day-before-an-interview--w01",
  hook: "HOOK-10",
  loop: { open: "s01", close: "s22" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "job-seekers", slug: "checklist-for-the-day-before-an-interview", door: "ky-nang", level: "B1",
    title: "Một ngày trước buổi phỏng vấn: danh sách việc cần làm", series: "Chuẩn bị phỏng vấn xin việc" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 24/24. Đổi tên: Công → Dũng; “bạn” ở Hai lựa chọn p22 → Thảo; “bạn” xác nhận lịch hẹn (p2) → Dũng; chị Mai (Làm mẫu p4) → không nêu tên, ghi “người hẹn”; bạn bè hỏi thử (p19) → Lan. Vai mới (Bin, Bà Tư, Sam): không dùng, bài không có trẻ con, bà cụ hay người nước ngoài. Mốc giờ ở s01 lấy từ p15 (“đúng chín giờ”, “muộn gần mười lăm phút”). Danh sách giấy tờ không ghi số bản in hồ sơ cố định (p7 có hai cách tính tuỳ phỏng vấn thường hay hội đồng — đọc cả hai). Câu kết p9 theo bài đã sửa (#107): liên lạc được dù gọi điện hay gửi thư. Hai cảnh DLG-01: s19 (p15–p16, Dũng tối hôm trước định để sáng mới mở link — phần làm lại theo câu rút ra p16) và s25 (p21–p23, Thảo ôn khuya). s22: hai câu hỏi thử của Lan là hai câu p18 dặn chuẩn bị (lương mong muốn, ngày bắt đầu); câu trả lời không có trong bài nên Dũng chỉ nói sẽ trả lời thành tiếng. Câu đố: questions[26], questions[19] (không có tên nhân vật).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p15",
      data: { set: "online", label: "Chín giờ sáng",
        actors: [{ id: "dung", side: "center" }] },
      lines: [
        L("l1", null, "Dũng never tested the link. Just click and go, he thought.", "Dũng không mở thử link, nghĩ mai bấm là vào."),
        L("l2", null, "Nine a.m. The software wants an update. The bar runs on and on.", "Chín giờ sáng. Phần mềm đòi cập nhật, thanh tiến trình chạy mãi."),
        L("l3", "dung", "I'm so sorry I'm late...", "Em xin lỗi vì vào muộn ạ…", { face: "worried", pose: "hold" }),
        L("l4", null, "Nearly fifteen minutes late, he never finds his rhythm.", "Muộn gần mười lăm phút, cả buổi không lấy lại được nhịp."),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ngày hôm trước: sắp xếp, không học thêm", pose: "present",
        items: ["Xác nhận lịch hẹn", "Xếp giấy tờ, trang phục", "Thử đường đi hoặc thiết bị", "Ôn nhẹ, ngủ sớm"] },
      lines: [
        L("l1", "det", "What should you do the day before an interview? Organise, don't cram.", "Ngày trước phỏng vấn nên làm gì? Sắp xếp, không phải học thêm."),
        L("l2", "det", "Confirm the appointment.", "Xác nhận lịch hẹn."),
        L("l3", "det", "Prepare papers and clothes.", "Xếp giấy tờ, chuẩn bị trang phục."),
        L("l4", "det", "Test the route or the device.", "Thử đường đi hoặc thiết bị."),
        L("l5", "det", "Light review, then early sleep.", "Ôn nhẹ, rồi đi ngủ sớm."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "Sáng: lịch hẹn", illus: "spiral-calendar" },
        { label: "Giấy tờ, đồ mang theo", illus: "briefcase" },
        { label: "Chiều: trang phục", illus: "necktie" },
        { label: "Đường đi, thiết bị", illus: "world-map" },
        { label: "Ôn tập vừa đủ", illus: "open-book" },
        { label: "Tối: nghỉ ngơi", illus: "sleeping-face" } ] },
      lines: [
        L("l1", null, "Six parts: the appointment, your bag, your clothes,", "Sáu phần: lịch hẹn, giấy tờ mang theo, trang phục,"),
        L("l2", null, "route or device, light review, and the evening.", "đường đi hay thiết bị, ôn vừa đủ, và buổi tối."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Buổi sáng: lịch hẹn đã chắc?" },
      lines: [L("l1", "det", "Part one, the morning: is the appointment sure?", "Phần một, buổi sáng: lịch hẹn đã chắc chưa?")] },
    { id: "s05", module: "LIST-05", ref: "p1",
      data: { title: "Đọc lại thư mời", illus: "envelope", items: [
        "Ghi giờ, địa chỉ, toà, tầng, phòng, tên người gặp", "Lưu số người liên hệ để gọi khi có sự cố", "Trả lời xác nhận nếu chưa làm" ] },
      lines: [
        L("l1", null, "Reread the invitation. Note the time, address, building, floor, room, and who you'll meet.", "Đọc lại thư mời: giờ, địa chỉ, toà, tầng, phòng, tên người sẽ gặp."),
        L("l2", null, "Save the contact's number, in case something goes wrong on the way.", "Lưu số người liên hệ, để gọi khi có sự cố trên đường."),
        L("l3", null, "And reply to confirm, if you haven't.", "Và trả lời xác nhận nếu chưa làm."),
      ] },
    { id: "s06", module: "SCENE-02", ref: "p2,p3",
      data: { set: "room", label: "Xác nhận lịch hẹn",
        actor: { id: "dung", side: "center" },
        contact: { name: "Người liên hệ", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Em xin xác nhận sẽ có mặt lúc chín giờ sáng mai tại văn phòng tầng năm ạ.", at: "l1" },
          { from: "me", text: "Em có cần mang bản gốc bằng cấp không ạ? Có bài kiểm tra không, và buổi phỏng vấn kéo dài bao lâu ạ?", at: "l2" } ] },
      lines: [
        L("l1", "dung", "I confirm I'll be at your office on the fifth floor at nine tomorrow morning.", "Em xin xác nhận…", { face: "thinking" }),
        L("l2", "dung", "Should I bring my original certificates? Is there a test? How long will it take?", "Em có cần mang bản gốc…"),
        L("l3", null, "Asking the day before is polite. On the morning itself, they may be too busy to reply.", "Hỏi trước một ngày là lịch sự. Sáng hôm đó người liên hệ có thể bận, không kịp trả lời."),
      ] },
    { id: "s07", module: "LIST-06", ref: "p4",
      data: { title: "Thư mời ghi “Phòng 802, tầng 8, toà B”", steps: [
        { text: "Chép nguyên cả dòng địa chỉ vào điện thoại", illus: "memo" },
        { text: "Mở bản đồ, tìm cổng gần toà B nhất", illus: "world-map" },
        { text: "Lưu số người hẹn: “Mai – phỏng vấn”", illus: "mobile-phone" },
        { text: "Sáng ra đi thẳng lên tầng tám", illus: "office-building" } ] },
      lines: [
        L("l1", null, "The email says: room 802, eighth floor, building B. Copy the whole line, not just the street.", "Thư ghi: phòng 802, tầng 8, toà B. Chép nguyên cả dòng, không chỉ tên đường."),
        L("l2", null, "Open the map. Which gate is nearest to building B?", "Mở bản đồ: cổng nào gần toà B nhất?"),
        L("l3", null, "Save the contact with a clear name, so you can call if you get lost.", "Lưu số người hẹn với tên rõ ràng, để gọi hỏi khi lạc."),
        L("l4", null, "Next morning, go straight up to the eighth floor.", "Sáng hôm sau, đến cổng là đi thẳng lên tầng tám."),
      ] },
    { id: "s08", module: "TEXT-02", ref: "p5",
      data: { text: "Chép đến tầng, đến phòng, lưu cả số người hẹn.", keywords: ["tầng", "phòng", "số người hẹn"], illus: "office-building" },
      lines: [L("l1", null, "Copy it down to the floor and room. Save the contact's number.", "Chép đến tầng, đến phòng, lưu cả số người hẹn.")] },

    // ---------- Phần 2 ----------
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Giấy tờ và đồ mang theo" },
      lines: [L("l1", "det", "Part two: papers and things to bring.", "Phần hai: giấy tờ và đồ mang theo gồm những gì?")] },
    { id: "s10", module: "LIST-02", ref: "p6,p7",
      data: { title: "Một túi, đặt gần cửa", items: [
        { illus: "file-folder", text: "Hồ sơ in, trong bìa kẹp" }, { illus: "scroll", text: "Bản sao bằng cấp, chứng chỉ" },
        { illus: "identification-card", text: "Giấy tờ tuỳ thân" }, { illus: "notebook", text: "Sổ, bút, vài câu muốn hỏi" },
        { illus: "mobile-phone", text: "Điện thoại sạc đầy" }, { illus: "umbrella", text: "Khăn giấy, nước, ô" } ], illus: "briefcase" },
      lines: [
        L("l1", null, "Pack everything in one bag, by the front door.", "Xếp mọi thứ vào một túi, đặt gần cửa ra vào."),
        L("l2", null, "Two or three printed CVs. For a panel, one per interviewer plus one extra.", "Hai, ba bản in hồ sơ; gặp hội đồng thì mỗi người một bản, dư một bản."),
        L("l3", null, "Keep them in a folder, so they stay flat.", "Để trong bìa kẹp cho khỏi gấp nếp."),
        L("l4", null, "Certificate copies, originals if asked, and ID for parking or the building.", "Bản sao bằng cấp, bản gốc nếu được yêu cầu, giấy tờ tuỳ thân để gửi xe, vào toà nhà."),
        L("l5", null, "A notebook with questions, a charged phone, tissues, water, an umbrella.", "Sổ ghi sẵn câu hỏi, điện thoại sạc đầy, khăn giấy, nước, ô."),
      ] },
    { id: "s11", module: "CMP-07", ref: "p8,p9",
      data: { wrong: "0905 123 4567 – lan.tran@gmial.com", right: "0905 123 456 – lan.tran@gmail.com", diff: ["4567", "gmial"],
        note: "Thừa một chữ số, sai tên miền: đọc lướt thì không thấy" },
      lines: [
        L("l1", null, "Reread the phone and email on your CV. The company uses them to give results.", "Đọc lại số điện thoại và email trên hồ sơ: công ty dùng để báo kết quả."),
        L("l2", null, "Before: one extra digit, and gmail spelt wrong. You miss it when skimming.", "Trước: thừa một chữ số, sai tên miền. Đọc lướt thì không thấy."),
        L("l3", null, "After: each digit read aloud, checked with the phone, and a test email sent.", "Sau: đọc to từng số, so với số trong máy, gửi thử một email."),
      ] },
    { id: "s12", module: "TEXT-01", ref: "p10",
      data: { text: "Đọc to từng số, gửi thử một thư.", illus: "e-mail" },
      lines: [L("l1", null, "Read each number aloud. Send one test email.", "Đọc to từng số, gửi thử một thư.")] },

    // ---------- Phần 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Buổi chiều: trang phục" },
      lines: [L("l1", "det", "Part three, the afternoon: are your clothes ready?", "Phần ba, buổi chiều: trang phục đã sẵn chưa?")] },
    { id: "s14", module: "LIST-05", ref: "p11",
      data: { title: "Trang phục cho ngày mai", illus: "necktie", items: [
        "Thử mặc cả bộ: đủ cúc, không bung chỉ", "Là phẳng, treo sẵn", "Lau giày, chuẩn bị tất sạch", "Đi xe máy: áo khoác, áo mưa trong cốp" ] },
      lines: [
        L("l1", null, "Try the whole outfit on. A missing button? You still have time to sew it.", "Thử mặc cả bộ. Thiếu cúc? Còn kịp khâu sửa."),
        L("l2", null, "Iron it and hang it up. Don't iron in the morning.", "Là phẳng và treo sẵn, đừng để sáng mai mới là."),
        L("l3", null, "Clean your shoes, and get clean socks.", "Lau giày, chuẩn bị tất sạch."),
        L("l4", null, "By motorbike? Put a jacket or raincoat under the seat.", "Đi xe máy? Để sẵn áo khoác hoặc áo mưa trong cốp."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Đường đi hoặc thiết bị" },
      lines: [L("l1", "det", "Part four: have you tested the route, or the device?", "Phần bốn: đường đi hoặc thiết bị đã thử chưa?")] },
    { id: "s16", module: "LIST-05", ref: "p12",
      data: { title: "Phỏng vấn trực tiếp", illus: "world-map", items: [
        "Tra bản đồ đúng khung giờ sẽ đi", "Tìm sẵn chỗ gửi xe gần toà nhà", "Đi xe dịch vụ: cộng thời gian chờ xe" ] },
      lines: [
        L("l1", null, "In person: check the map for the exact time you'll travel. Rush hour is slower.", "Trực tiếp: tra bản đồ đúng khung giờ sẽ đi, giờ cao điểm lâu hơn nhiều."),
        L("l2", null, "Find parking nearby. Many lots are full early.", "Tìm sẵn chỗ gửi xe gần toà nhà, nhiều bãi kín từ sáng."),
        L("l3", null, "Taking a ride app? Add waiting time.", "Đi xe dịch vụ thì cộng thêm thời gian chờ xe."),
      ] },
    { id: "s17", module: "CMP-01", ref: "p13",
      data: { labels: ["Trước mười đến mười lăm phút", "Sớm cả tiếng"], left: "Đủ để bình tĩnh, chỉnh trang", right: "Ngồi chờ lâu, hồi hộp thêm", illus: ["alarm-clock", "anxious-face-with-sweat"] },
      lines: [
        L("l1", null, "Aim to arrive ten to fifteen minutes early. Not much more.", "Đặt mục tiêu có mặt trước mười đến mười lăm phút, không cần sớm hơn nhiều."),
        L("l2", null, "Too early, and you just wait and get more nervous.", "Đến quá sớm, bạn chỉ ngồi chờ lâu và hồi hộp thêm."),
      ] },
    { id: "s18", module: "LIST-09", ref: "p14",
      data: { title: "Phỏng vấn trực tuyến: thử từ hôm trước", illus: "laptop", keywords: [
        { text: "Mở thử link", illus: "link" }, { text: "Cập nhật phần mềm", illus: "counterclockwise-arrows-button" },
        { text: "Camera, micro, loa", illus: "video-camera" }, { text: "Mạng, phát mạng dự phòng", illus: "antenna-bars" },
        { text: "Chỗ yên tĩnh, sáng phía trước", illus: "light-bulb" }, { text: "Báo người trong nhà", illus: "house" } ] },
      lines: [
        L("l1", null, "Online: open the link, install and update the software, and log in early.", "Trực tuyến: mở thử link, cài và cập nhật phần mềm, đăng nhập trước."),
        L("l2", null, "Test the camera, microphone, speakers and internet.", "Kiểm tra camera, micro, loa, mạng."),
        L("l3", null, "Have a backup, like your phone's mobile data.", "Có phương án dự phòng, như phát mạng từ điện thoại."),
        L("l4", null, "A quiet place, light from the front, a tidy background. Tell your family.", "Chỗ yên tĩnh, ánh sáng phía trước, phông nền gọn. Báo trước người trong nhà."),
      ] },
    { id: "s19", module: "DLG-01", ref: "p15,p16",
      data: { set: "room", label: "Tối hôm trước",
        actors: [{ id: "dung", side: "center", pose: "phone" }],
        verdict: { ok: false, label: "Để sáng mai mới mở link",
          why: "Đúng giờ, phần mềm đòi cập nhật: vào muộn gần mười lăm phút, mất nhịp cả buổi." } },
      lines: [
        L("l1", null, "Back to Dũng, the night before.", "Quay lại Dũng, tối hôm trước."),
        L("l2", "dung", "The link? I'll just click it tomorrow at nine.", "Link à? Mai chín giờ bấm là vào.", { face: "happy", pose: "shrug", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "At nine, the software asked for an update. He was almost fifteen minutes late.", "Đúng chín giờ, phần mềm đòi cập nhật. Dũng vào muộn gần mười lăm phút."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "dung", "Let me open the link tonight, update the app, and test my camera.", "Tối nay mở thử link, cập nhật phần mềm, thử camera luôn.", { phase: "redo", face: "thinking", pose: "phone" }),
        L("l7", "det", "Test the link in the evening. In the morning, just click.", "Link thử từ tối, sáng ra chỉ việc bấm.", { phase: "redo", face: "happy" }),
      ] },

    // ---------- Phần 5 ----------
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Ôn tập thế nào là vừa?" },
      lines: [L("l1", "det", "Part five: how much review is enough?", "Phần năm: ôn tập thế nào là vừa?")] },
    { id: "s21", module: "LIST-08", ref: "p17",
      data: { title: "Ôn lại một đến hai tiếng", items: [
        { title: "Đọc lại", detail: "Mô tả công việc, trang tóm tắt về công ty", illus: "page-facing-up" },
        { title: "Nói to phần giới thiệu", detail: "Canh khoảng một đến hai phút", illus: "stopwatch" },
        { title: "Ôn ba bốn câu chuyện", detail: "Chỉ cần nhớ ý", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "Review, don't learn new things. One or two hours.", "Đây là lúc ôn lại, không phải học mới. Một đến hai tiếng."),
        L("l2", null, "Reread the job description and your company notes.", "Đọc lại mô tả công việc và trang tóm tắt về công ty."),
        L("l3", null, "Say your self-introduction aloud: one to two minutes.", "Nói to phần giới thiệu bản thân, canh một đến hai phút."),
        L("l4", null, "Go over three or four main stories. Just the ideas.", "Ôn ba bốn câu chuyện kinh nghiệm chính, chỉ cần nhớ ý."),
      ] },
    { id: "s22", module: "SCENE-01", ref: "p18,p19",
      data: { set: "home", label: "Hỏi thử",
        actors: [{ id: "lan", side: "left" }, { id: "dung", side: "center" }] },
      lines: [
        L("l1", "lan", "Let me interview you. What salary do you expect, and when can you start?", "Để mình hỏi thử nhé. Lương mong muốn bao nhiêu, bao giờ đi làm được?", { pose: "explain", to: "dung" }),
        L("l2", "dung", "Good questions. I'll answer out loud, in English too.", "Hỏi đúng chỗ. Mình trả lời thành tiếng, cả phần tiếng Anh.", { face: "thinking", pose: "think" }),
        L("l3", null, "Have answers ready on salary and start date. Practise English aloud, not silently.", "Chuẩn bị sẵn câu về lương và ngày bắt đầu. Tiếng Anh thì luyện thành tiếng, đừng đọc thầm."),
        L("l4", null, "A friend asking helps: you get used to answering while someone watches.", "Nhờ người hỏi thử: bạn quen trả lời khi có người nhìn."),
      ] },

    // ---------- Phần 6 ----------
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Buổi tối: nghỉ ngơi đúng cách" },
      lines: [L("l1", "det", "Last part, the evening: rest the right way.", "Phần cuối, buổi tối: nghỉ ngơi đúng cách ra sao?")] },
    { id: "s24", module: "LIST-05", ref: "p20",
      data: { title: "Buổi tối", illus: "crescent-moon", items: [
        "Dừng ôn trước giờ ngủ khoảng một tiếng", "Ăn tối nhẹ, tránh món lạ", "Hạn chế cà phê, rượu bia", "Hai báo thức cách nhau mười phút", "Chuẩn bị sẵn bữa sáng đơn giản" ] },
      lines: [
        L("l1", null, "Stop reviewing about an hour before bed.", "Dừng ôn trước giờ ngủ khoảng một tiếng."),
        L("l2", null, "A light, familiar dinner.", "Ăn tối nhẹ, tránh món lạ dễ khó tiêu."),
        L("l3", null, "Little coffee or alcohol in the evening.", "Hạn chế cà phê, rượu bia buổi tối."),
        L("l4", null, "Two alarms, ten minutes apart, in case you switch one off asleep.", "Hai báo thức cách nhau mười phút, lỡ tắt cái đầu trong lúc ngủ."),
        L("l5", null, "And a simple breakfast, ready.", "Và chuẩn bị sẵn bữa sáng đơn giản."),
      ] },
    { id: "s25", module: "DLG-01", ref: "p21,p22,p23",
      data: { set: "room", label: "Đêm trước buổi phỏng vấn",
        actors: [{ id: "thao", side: "center", pose: "think" }],
        verdict: { ok: false, label: "Ôn đến hai giờ sáng, đặt một báo thức",
          why: "Dễ dậy muộn, bỏ bữa sáng, đầu óc nặng, đứng hình trước câu đơn giản nhất." } },
      lines: [
        L("l1", "thao", "What if they ask something I don't know?", "Lỡ bị hỏi bí thì sao?", { face: "worried", pose: "think" }),
        L("l2", "thao", "I'll study until two a.m. and read every article about them. One alarm is fine.", "Mình ôn đến hai giờ sáng, đọc hết bài về công ty. Một báo thức là đủ.", { face: "stern", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "She may wake late, skip breakfast, and freeze at: tell me about yourself.", "Dễ dậy muộn, bỏ bữa sáng, đứng hình trước câu “Em giới thiệu ngắn về mình nhé”."),
        L("l5", "det", "Late reading adds worry, not memory. A clear head answers better.", "Đọc khuya làm lo hơn là nhớ thêm. Đầu tỉnh táo trả lời mạch lạc hơn."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l7", "thao", "I'll stop an hour before bed, set two alarms, and eat a light breakfast.", "Mình dừng ôn trước giờ ngủ một tiếng, đặt hai báo thức, sáng ăn nhẹ.", { phase: "redo", face: "happy", pose: "explain" }),
        L("l8", "det", "Almost the same knowledge, a much clearer head. One more hour of sleep beats one more hour of study.", "Kiến thức gần như không kém, đầu óc tỉnh hơn hẳn. Ngủ sớm một giờ, lợi hơn ôn thêm một giờ.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s26", module: "TEXT-04", ref: "p24",
      data: { text: "Vẫn hồi hộp? Viết ra ba điểm mạnh bạn muốn người phỏng vấn nhớ về mình.", marks: ["ba điểm mạnh"], illus: "flexed-biceps" },
      lines: [
        L("l1", null, "Still nervous? Write three strengths you want them to remember.", "Vẫn hồi hộp? Viết ra ba điểm mạnh bạn muốn người phỏng vấn nhớ."),
        L("l2", null, "Focus on what you can do, not on what could go wrong.", "Tập trung vào điều mình làm được, thay vì những gì có thể sai."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s27", module: "END-02", ref: "outro",
      data: { kicker: "Nhớ mang theo", illus: "clipboard", points: [
        "Chép đến tầng, đến phòng, lưu số người hẹn",
        "Đọc to từng số, link thử từ tối",
        "Ngủ sớm một giờ, lợi hơn ôn thêm một giờ" ],
        icons: ["office-building", "laptop", "sleeping-face"] },
      lines: [
        L("l1", null, "Copy the address fully. Check every digit. Test the link at night.", "Chép đủ địa chỉ. Soát từng số. Thử link từ tối."),
        L("l2", null, "And sleep early. Tomorrow, you just go and answer.", "Và ngủ sớm. Sáng mai, chỉ việc đi và trả lời."),
      ] },
    { id: "s28", module: "QUIZ-01", ref: "questions[26]",
      data: { q: "Which short rule fits an online interview starting at nine in the morning?",
        options: [
          "Test the link in the evening, so in the morning you only click",
          "Skip testing, because video software never asks for updates in the morning",
          "Open the link for the first time a minute before it begins",
        ],
        correct: 0, countdown: 5, illus: "laptop",
        why: "Mở thử từ tối, bạn còn thời gian cập nhật phần mềm." },
      lines: [
        L("l1", null, "Which short rule fits an online interview starting at nine in the morning?", "Câu rút ra nào hợp với buổi phỏng vấn trực tuyến lúc chín giờ sáng?"),
        L("l2", null, "Test the link in the evening, so in the morning you only click.", "Link thử từ tối, sáng ra chỉ việc bấm."),
        L("l3", null, "The evening gives you time for updates.", "Thử từ tối cho bạn thời gian cập nhật phần mềm."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[19]",
      data: { q: "How early should you aim to arrive for an in person interview?",
        options: [
          "At least two hours early, to show the company how keen you are",
          "About ten to fifteen minutes early, not much earlier than that",
          "Exactly on time or a little late, so you do not seem too eager",
        ],
        correct: 1, countdown: 5, illus: "alarm-clock",
        why: "Đủ để bình tĩnh, chỉnh trang; quá sớm chỉ thêm hồi hộp." },
      lines: [
        L("l1", null, "How early should you aim to arrive for an in person interview?", "Nên đặt mục tiêu đến sớm bao lâu khi phỏng vấn trực tiếp?"),
        L("l2", null, "About ten to fifteen minutes early, not much earlier than that.", "Khoảng mười đến mười lăm phút, không cần sớm hơn nhiều."),
        L("l3", null, "Enough to calm down. Too early only adds nerves.", "Đủ để bình tĩnh, chỉnh trang. Quá sớm chỉ thêm hồi hộp."),
      ] },
    { id: "s30", module: "END-05", data: { text: "Bài cuối của chuỗi: bốn mươi câu đang chờ", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Copy these lists onto paper and tick them today.", "Chép các danh sách ra giấy, đánh dấu ngay hôm nay."),
        L("l2", "det", "Then, forty questions are waiting below.", "Rồi bốn mươi câu hỏi đang chờ bên dưới."),
      ] },
  ],
};
