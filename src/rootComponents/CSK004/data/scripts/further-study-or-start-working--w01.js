// Kịch bản video W lần 3 (#110) — "Học tiếp lên cao hay đi làm ngay?" · chuỗi "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "further-study-or-start-working--w01",
  hook: "HOOK-12",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "students-preparing-early", slug: "further-study-or-start-working", door: "ky-nang", level: "B1",
    title: "Học tiếp lên cao hay đi làm ngay?", series: "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp" },
  format: "W", mode: "text", audio: {},
  notes: "Lần 3 (#110). Đổi tên (nữ → Lan, nam → Dũng, bố → Bác Bình): “bạn” → Lan; bố mẹ khuyên học thạc sĩ, phụ huynh (p24) → Bác Bình (bố); bạn bè khuyên đi làm → Dũng; Phụng (p9) → Lan; Huyền (p19) → Lan; chị Đông đã đi làm (p15) → Thảo. Bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng vai mới. Hai lời khuyên trái nhau ở s01 (theo mở bài) được trả lời ở s27 bằng việc làm ngay của outro. Phần làm lại DLG-01 (s25) dùng cách tính chi phí thật của p18, bài không kể Huyền làm lại. Phủ ý: 24/24.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "intro",
      data: { set: "home", label: "Hai lời khuyên",
        actors: [{ id: "binh", side: "left" }, { id: "lan", side: "center" }, { id: "dung", side: "right", enter: "walk", at: "l2" }] },
      lines: [
        L("l1", "binh", "Do a master's degree, to be safe.", "Học thạc sĩ cho chắc con ạ.", { pose: "explain", to: "lan" }),
        L("l2", "dung", "Start working early. That's how you get experience!", "Đi làm sớm mới có kinh nghiệm chứ!", { pose: "point", to: "lan" }),
        L("l3", "lan", "I'm only in my third year. Who should I listen to?", "Mình mới năm ba. Nghe ai bây giờ?", { face: "worried", pose: "shrug" }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Học tiếp hay đi làm: chọn thế nào?", pose: "think",
        items: ["Học tiếp: nghề cần bằng cao, mục tiêu rõ, có kế hoạch tài chính", "Đi làm ngay: chưa chắc hướng, ngành coi trọng kinh nghiệm", "Chuẩn bị từ bây giờ để giữ cả hai cửa"] },
      lines: [
        L("l1", "det", "Study more, or start working? There's no right answer for everyone.", "Học tiếp hay đi làm? Không có đáp án đúng cho mọi người."),
        L("l2", "det", "Study more when the job needs it, and you have a clear goal and a money plan.", "Học tiếp khi nghề cần bằng cao, mục tiêu rõ và có kế hoạch tài chính."),
        L("l3", "det", "Start working when you're unsure, or your field values experience.", "Đi làm ngay khi chưa chắc hướng, hoặc ngành coi trọng kinh nghiệm."),
        L("l4", "det", "And prepare now, so both doors stay open.", "Và chuẩn bị từ bây giờ để giữ cả hai cánh cửa."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu chặng của video",
        chapters: [
          { label: "Đã cần nghĩ chưa", illus: "hourglass-not-done" },
          { label: "Năm câu tự hỏi", illus: "thinking-face" },
          { label: "Khi nào học tiếp", illus: "graduation-cap" },
          { label: "Khi nào đi làm ngay", illus: "briefcase" },
          { label: "Cách thứ ba", illus: "left-right-arrow" },
          { label: "Quyết cho có cơ sở", illus: "balance-scale" } ] },
      lines: [L("l1", null, "Six parts. Then what to prepare in year two and three.", "Sáu chặng, rồi những việc chuẩn bị ngay từ năm hai, năm ba.")] },

    // Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Năm hai, năm ba đã cần nghĩ chưa?" },
      lines: [L("l1", "det", "Part one: do you need to think about this yet?", "Phần một: năm hai, năm ba đã cần nghĩ chưa?")] },
    { id: "s05", module: "LIST-02", ref: "p1",
      data: { title: "Không gom được trong học kỳ cuối", illus: "hourglass-not-done",
        items: [
          { icon: "chart-line", illus: "bar-chart", text: "Điểm trung bình nhiều năm" },
          { icon: "flask-conical", illus: "microscope", text: "Kinh nghiệm nghiên cứu" },
          { icon: "mail", illus: "envelope", text: "Thư giới thiệu của thầy cô" },
          { icon: "languages", illus: "speaking-head", text: "Chứng chỉ ngoại ngữ" } ] },
      lines: [
        L("l1", null, "You don't need to decide yet, but start thinking. Some doors depend on your whole time at university.", "Chưa cần quyết, nhưng nên bắt đầu nghĩ. Một số cánh cửa phụ thuộc cả quá trình học."),
        L("l2", null, "Grades over several years, research experience, letters from teachers, a language certificate. You can't gather them in one last term.", "Điểm nhiều năm, kinh nghiệm nghiên cứu, thư giới thiệu, chứng chỉ ngoại ngữ: không gom được trong một học kỳ cuối."),
      ] },
    { id: "s06", module: "TEXT-02", ref: "p2",
      data: { text: "Nghĩ sớm thì bớt bị cuốn theo ý người khác.", keywords: ["Nghĩ sớm", "ý người khác"], illus: "compass" },
      lines: [
        L("l1", null, "Thinking early also means you're less pushed by other people. When it's time to choose, you've already researched and asked.", "Nghĩ sớm giúp bạn bớt bị cuốn theo ý người khác: đến lúc chọn, bạn đã có thời gian tìm hiểu, hỏi han."),
      ] },

    // Chương 2
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Năm câu tự hỏi" },
      lines: [L("l1", "det", "Part two: five honest questions for yourself.", "Phần hai: năm câu hỏi tự trả lời thật lòng.")] },
    { id: "s08", module: "LIST-01", ref: "p3",
      data: { title: "Năm câu tự hỏi", illus: "thinking-face",
        items: ["Vì sao muốn học tiếp: đam mê, nghề yêu cầu, hay né tìm việc?", "Nghề mình nhắm có cần bằng cao hơn?", "Đã rõ chuyên ngành muốn học chưa?", "Tài chính có cho phép?", "Gia đình có cần mình hỗ trợ sớm?"],
        icons: ["red-heart", "briefcase", "books", "money-bag", "house"] },
      lines: [
        L("l1", null, "Why do I want to study more? Passion, a job requirement, or not wanting to face the job hunt?", "Vì sao mình muốn học tiếp: vì đam mê, vì nghề yêu cầu, hay vì chưa muốn đối mặt chuyện tìm việc?"),
        L("l2", null, "Does my target job need a higher degree? Do I know which subject I want?", "Nghề mình nhắm có cần bằng cao hơn? Đã biết rõ muốn học chuyên ngành gì chưa?"),
        L("l3", null, "Can I afford it? And does my family need my support soon? A few years without income can be hard.", "Tài chính có cho phép? Gia đình có cần mình hỗ trợ sớm? Vài năm không thu nhập có thể là khó."),
      ] },
    { id: "s09", module: "CMP-01", ref: "p4",
      data: { labels: ["Đừng chỉ dựa vào", "Hãy kiểm tra bằng"], left: "Cảm giác “có bằng cao thì hơn”",
        right: "Tin tuyển dụng thật của vị trí bạn muốn, và hỏi người đang làm", illus: ["thought-balloon", "magnifying-glass-tilted-left"] },
      lines: [
        L("l1", null, "To answer question two, read real job ads for the role you want, and ask people doing it.", "Để trả lời câu thứ hai: đọc tin tuyển dụng thật của vị trí bạn muốn, và hỏi người đang làm."),
        L("l2", null, "Don't rely only on the feeling that a higher degree is always better.", "Đừng chỉ dựa vào cảm giác “có bằng cao thì hơn”."),
      ] },
    { id: "s10", module: "BEAT-04", ref: "p5",
      data: { seconds: 5, prompt: "Chưa biết muốn làm nghề gì, có người khuyên “cứ học thạc sĩ luôn cho chắc”. Học ngay có giúp bạn biết mình muốn gì?" },
      lines: [L("l1", "det", "About to graduate, no idea what job you want. Someone says: just do a master's. Will that help you know?", "Sắp tốt nghiệp, chưa biết muốn làm gì, có người khuyên học thạc sĩ luôn. Có giúp bạn biết mình muốn gì không?")] },
    { id: "s11", module: "RSN-08", ref: "p5,p6",
      data: { beats: [
        { text: "Chưa rõ hướng, Lan vào học thạc sĩ luôn “cho chắc”", illus: "graduation-cap" },
        { text: "Thạc sĩ đi theo một chuyên ngành hẹp, dễ học thứ sau không dùng tới", link: "but", illus: "pinching-hand" },
        { text: "Hai năm sau, câu hỏi “mình muốn làm gì” vẫn còn nguyên", link: "therefore", illus: "red-question-mark" },
        { text: "Nhà tuyển dụng hỏi thêm: “Em đã làm dự án thực tế nào chưa?”", link: "but", illus: "briefcase" } ] },
      lines: [
        L("l1", null, "Usually not. A master's follows a narrow subject. Chosen while unsure, you may study what you never use.", "Thường là không. Thạc sĩ theo chuyên ngành hẹp; chọn khi còn mơ hồ dễ học thứ không dùng tới."),
        L("l2", null, "Two years on, the question is still there. And employers ask: have you done any real projects?", "Hai năm sau câu hỏi vẫn còn, nhà tuyển dụng lại hỏi: “Em đã làm dự án thực tế nào chưa?”"),
        L("l3", null, "Working for a while shows what knowledge a real job needs. Then you choose the right course. Don't use a degree to hide.", "Đi làm một thời gian để thấy công việc cần gì, rồi mới chọn ngành cho trúng. Đừng lấy tấm bằng để né."),
      ] },

    // Chương 3
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Khi nào học tiếp là tốt?" },
      lines: [L("l1", "det", "Part three: when further study is a good choice.", "Phần ba: khi nào học tiếp lên cao là lựa chọn tốt.")] },
    { id: "s13", module: "LIST-07", ref: "p7",
      data: { title: "Học tiếp hợp khi",
        items: [
          { text: "Theo nghiên cứu, giảng dạy đại học", illus: "microscope" },
          { text: "Có học bổng, cơ hội hiếm, nhất là có giới hạn tuổi hay năm tốt nghiệp", illus: "gem-stone" },
          { text: "Muốn chuyển ngành, cần nền tảng bài bản", illus: "left-right-arrow" } ] },
      lines: [
        L("l1", null, "When you want research or university teaching, where a postgraduate degree is often required.", "Khi muốn theo nghiên cứu hoặc giảng dạy đại học, nơi bằng sau đại học thường là yêu cầu."),
        L("l2", null, "When you have a rare scholarship, especially one with an age or graduation-year limit.", "Khi có học bổng hay cơ hội hiếm, nhất là loại giới hạn độ tuổi hay năm tốt nghiệp."),
        L("l3", null, "When you want to change fields and need a solid base in the new one.", "Khi muốn chuyển ngành và cần nền tảng bài bản ở lĩnh vực mới."),
      ] },
    { id: "s14", module: "CMP-01", ref: "p8",
      data: { labels: ["Ưu điểm", "Nhược điểm"], left: "Kiến thức sâu, mạng lưới học thuật, thêm cơ hội ở vài vị trí",
        right: "Tốn thời gian, chi phí; chậm kinh nghiệm; có nơi chê “nhiều bằng, ít kinh nghiệm”", illus: ["books", "hourglass-not-done"] },
      lines: [
        L("l1", null, "Pros: deeper knowledge, a network, more chances for some roles.", "Ưu: kiến thức sâu, mạng lưới học thuật, thêm cơ hội ở vài vị trí."),
        L("l2", null, "Cons: time, money, later experience. Some say: many degrees, little experience.", "Nhược: tốn thời gian, tiền, chậm kinh nghiệm; có nơi chê “nhiều bằng, ít kinh nghiệm”."),
      ] },
    { id: "s15", module: "LIST-06", ref: "p9,p10",
      data: { title: "Lan năm hai, mơ học bổng thạc sĩ nước ngoài",
        steps: [
          { text: "Đọc kỹ điều kiện: xét điểm cả quá trình, cần thư của thầy hướng dẫn nghiên cứu", illus: "magnifying-glass-tilted-left" },
          { text: "Ghi hai việc: giữ điểm đều mọi kỳ, xin vào nhóm nghiên cứu của một thầy", illus: "memo" },
          { text: "Xếp lại lịch làm thêm để không lấn giờ học", illus: "spiral-calendar" },
          { text: "Năm cuối: có sẵn bảng điểm đều và người thầy đủ hiểu mình để viết thư", illus: "envelope" } ] },
      lines: [
        L("l1", null, "Lan is in year two and dreams of a master's scholarship abroad. She reads the conditions carefully.", "Lan năm hai, mơ học bổng thạc sĩ nước ngoài, đọc kỹ điều kiện."),
        L("l2", null, "They look at grades from all years, and want letters from research teachers.", "Học bổng xét điểm cả quá trình, cần thư giới thiệu của thầy cô từng hướng dẫn nghiên cứu."),
        L("l3", null, "So she keeps her grades steady, joins a teacher's research group, and moves her part-time hours.", "Lan giữ điểm đều, xin vào nhóm nghiên cứu của một thầy, xếp lại lịch làm thêm."),
        L("l4", null, "By final year, her file is ready. Scholarships look at the whole journey, not just the last year.", "Năm cuối, hồ sơ đã sẵn. Học bổng nhìn cả chặng, không chỉ năm cuối."),
      ] },

    // Chương 4
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Khi nào đi làm ngay hợp hơn?" },
      lines: [L("l1", "det", "Part four: when starting work fits better.", "Phần bốn: khi nào đi làm ngay hợp hơn.")] },
    { id: "s17", module: "LIST-07", ref: "p11",
      data: { title: "Đi làm ngay hợp khi",
        items: [
          { text: "Ngành coi trọng kinh nghiệm, sản phẩm thực tế: kinh doanh, tiếp thị, công nghệ, thiết kế", illus: "artist-palette" },
          { text: "Chưa chắc muốn chuyên sâu vào đâu", illus: "compass" },
          { text: "Cần thu nhập để tự lập, hỗ trợ gia đình, hoặc đã có lời mời tốt, đúng hướng", illus: "money-bag" } ] },
      lines: [
        L("l1", null, "When your field values experience and real work, like business, marketing, tech and design.", "Khi ngành coi trọng kinh nghiệm và sản phẩm thực tế: kinh doanh, tiếp thị, công nghệ, thiết kế."),
        L("l2", null, "When you're not sure what to specialise in yet.", "Khi bạn chưa chắc muốn chuyên sâu vào đâu."),
        L("l3", null, "When you need income to be independent or help your family, or you already have a good offer in the right direction.", "Khi cần thu nhập để tự lập, hỗ trợ gia đình, hay đã có lời mời tốt, đúng hướng."),
      ] },
    { id: "s18", module: "CMP-01", ref: "p12",
      data: { labels: ["Ưu điểm", "Nhược điểm"], left: "Có thu nhập, kinh nghiệm, hiểu thị trường, biết mình còn thiếu gì",
        right: "Đã đi làm rồi, quay lại học toàn thời gian thường khó hơn", illus: ["briefcase", "books"] },
      lines: [
        L("l1", null, "Pros: income, experience, knowing the market, and seeing what you still lack.", "Ưu điểm: có thu nhập, kinh nghiệm, hiểu thị trường và biết rõ mình còn thiếu gì."),
        L("l2", null, "Con: once you work, going back to full-time study is harder. Duties and habits change.", "Nhược điểm: đã đi làm, quay lại học toàn thời gian khó hơn vì trách nhiệm, thói quen đã khác."),
      ] },

    // Chương 5
    { id: "s19", module: "HOST-03", data: { n: 5, of: 6, title: "Có cách thứ ba không?" },
      lines: [L("l1", "det", "Part five: is there a third way?", "Phần năm: có cách thứ ba không?")] },
    { id: "s20", module: "LIST-13", ref: "p13,p14",
      data: { title: "Cách thứ ba: vừa làm, vừa học",
        items: [
          { title: "Đi làm vài năm rồi học tiếp", detail: "Chọn chuyên ngành theo nhu cầu thật; vài chương trình quản trị còn ưu tiên người có kinh nghiệm", illus: "briefcase" },
          { title: "Học bán thời gian, buổi tối", detail: "Giữ được thu nhập", illus: "crescent-moon" },
          { title: "Chứng chỉ, khoá ngắn hạn", detail: "Đúng nhu cầu công việc", illus: "scroll" },
          { title: "Hỏi khi nhận việc", detail: "Công ty có hỗ trợ nhân viên đi học không?", illus: "red-question-mark" } ] },
      lines: [
        L("l1", null, "Yes. Work a few years, then study. You choose your subject from real job needs, and some management programs prefer experience.", "Có. Đi làm vài năm rồi học tiếp: chọn ngành theo nhu cầu thật; vài chương trình quản trị còn ưu tiên người có kinh nghiệm."),
        L("l2", null, "Or study part-time or in the evening to keep your income. Or take certificates and short courses for your job.", "Hoặc học bán thời gian, buổi tối để giữ thu nhập; hay học chứng chỉ, khoá ngắn hạn đúng nhu cầu."),
        L("l3", null, "Some companies support staff who study. Ask about it when you accept a job.", "Một số công ty hỗ trợ nhân viên đi học: đáng hỏi khi nhận việc."),
      ] },
    { id: "s21", module: "STORY-06", ref: "p15",
      data: { label: "Tình huống thường gặp", title: "Lời hứa “hai năm nữa học tiếp” của chị Thảo",
        entries: [
          { time: "Năm 1", text: "Đi làm ngay, tự hứa hai năm nữa học tiếp", illus: "briefcase" },
          { time: "Năm 2–3", text: "Lùi vì dự án mới, chuyển nhà, lên vị trí mới", illus: "package" },
          { time: "Năm 4", text: "Cần bằng cao để lên quản lý, ôn thi đúng lúc bận nhất", illus: "anxious-face-with-sweat" } ] },
      lines: [
        L("l1", null, "Thao started working after graduating, and promised: two years, then I'll study again.", "Chị Thảo đi làm ngay sau tốt nghiệp, tự hứa “hai năm nữa học tiếp”."),
        L("l2", null, "But every year there was a reason to wait: a new project, a move, a new position. The promise had no date.", "Nhưng năm nào cũng có lý do lùi: dự án mới, chuyển nhà, vị trí mới. Lời hứa không gắn với ngày nào."),
        L("l3", null, "Four years later, a manager role needs a higher degree. She starts studying just when work is busiest.", "Bốn năm sau, muốn lên quản lý cần bằng cao hơn, chị mới ôn thi, đúng lúc bận nhất."),
      ] },
    { id: "s22", module: "TEXT-01", ref: "p16",
      data: { text: "Hẹn ngày xem lại, đừng để “sau này” trôi mãi.", illus: "spiral-calendar" },
      lines: [L("l1", null, "Set a review date. Don't let someday drift forever.", "Hẹn ngày xem lại, đừng để “sau này” trôi mãi.")] },

    // Chương 6
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Quyết cho có cơ sở" },
      lines: [L("l1", "det", "Part six: deciding on solid ground.", "Phần sáu: quyết định thế nào cho có cơ sở.")] },
    { id: "s24", module: "CMP-10", ref: "p17",
      data: { issue: "Học tiếp hay đi làm ngay?", kicker: "Hỏi ít nhất hai người cùng lĩnh vực",
        views: [
          { role: "Người đã học tiếp", view: "Kể cái được và cái mất khi học tiếp", illus: "graduation-cap" },
          { role: "Người đi làm ngay", view: "Kể cái được và cái mất khi đi làm sớm", illus: "briefcase" } ] },
      lines: [
        L("l1", null, "Ask at least two people in your field: one who studied more, and one who started working.", "Hỏi ít nhất hai người cùng lĩnh vực: một người đã học tiếp, một người đi làm ngay."),
        L("l2", null, "Each person tends to defend their own path. Hear only one side, and your view gets biased.", "Ai cũng dễ bênh con đường mình chọn; nghe một phía dễ có cái nhìn lệch."),
      ] },
    { id: "s25", module: "DLG-01", ref: "p18,p19,p20",
      data: { set: "room", label: "Lan tính tiền học thạc sĩ",
        actors: [{ id: "lan", side: "center", pose: "think" }],
        verdict: { ok: false, label: "Chỉ cộng học phí", why: "Sang kỳ hai tiền làm thêm không đủ, nhận thêm ca tối, đến lớp mệt, luận văn chậm.",
          rule: "Tính cả tiền sống, không chỉ tiền học" } },
      lines: [
        L("l1", "lan", "A full-time master's in another city. I'll just add up the tuition.", "Học thạc sĩ toàn thời gian ở thành phố khác. Mình chỉ cần cộng học phí.", { face: "thinking" }),
        L("l2", "lan", "Rent and food? A part-time job will cover it.", "Tiền nhà, tiền ăn hả? Làm thêm là đủ.", { face: "happy", pose: "shrug", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "By term two, it's not enough. Evening shifts, tired in class, the thesis falls behind.", "Sang kỳ hai, tiền làm thêm không đủ: thêm ca tối, đến lớp mệt, luận văn chậm."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "lan", "Tuition, rent, food, and the income I won't have while studying. Let me count it all.", "Học phí, tiền nhà, tiền ăn, và cả thu nhập mình không có khi đi học. Tính đủ đã.", { phase: "redo", face: "thinking", pose: "explain" }),
      ] },
    { id: "s26", module: "LIST-05", ref: "p21",
      data: { title: "Viết ra kế hoạch sau tốt nghiệp",
        items: ["Học xong, mình ứng tuyển vị trí gì?", "Vị trí đó có thật sự cần tấm bằng này?", "Đặt một mốc xem lại, ví dụ sau hai năm đi làm"],
        illus: "memo" },
      lines: [
        L("l1", null, "Write your plan: after the degree, which job will you apply for? Does it really need this degree?", "Viết kế hoạch: học xong ứng tuyển vị trí gì? Vị trí đó có thật cần tấm bằng này?"),
        L("l2", null, "Then set a review point, like after two years of work. You'll decide again with real experience.", "Rồi đặt mốc xem lại, ví dụ sau hai năm đi làm, để quyết lại bằng kinh nghiệm thật."),
      ] },
    { id: "s27", module: "SCENE-01", ref: "p17,outro",
      data: { set: "home", label: "Lan quyết thế nào?",
        actors: [{ id: "binh", side: "left" }, { id: "lan", side: "center" }, { id: "det", enter: "pop", at: "l3" }] },
      lines: [
        L("l1", "lan", "Dad, I'll answer the five questions on paper first.", "Bố ơi, con sẽ trả lời năm câu hỏi ra giấy trước.", { face: "happy", pose: "explain", to: "binh" }),
        L("l2", "lan", "Then I'll ask two people in my field: one who studied more, and one who started working.", "Rồi con hỏi hai người cùng ngành: một người đã học tiếp, một người đi làm ngay.", { pose: "explain", react: { binh: "happy" } }),
        L("l3", "det", "Not right or wrong. Just a fit for your goal and situation now.", "Không đúng sai, chỉ là hợp hay chưa hợp với mục tiêu, hoàn cảnh lúc này.", { pose: "thumb" }),
      ] },

    // Tổng kết
    { id: "s28", module: "END-03", ref: "p22,p23",
      data: { title: "Năm hai, năm ba chuẩn bị ngay", illus: "door",
        items: ["Giữ điểm đều qua các năm", "Thử một dự án nghiên cứu cùng thầy cô", "Thi chứng chỉ ngoại ngữ khi còn nhẹ việc", "Một kỳ thực tập để biết mặt kia", "Ghi hạn nộp vài học bổng quan tâm"] },
      lines: [
        L("l1", null, "Keep your grades steady. Try a research project with a teacher. Take a language test while you're less busy.", "Giữ điểm đều; thử một dự án nghiên cứu cùng thầy cô; thi chứng chỉ ngoại ngữ khi còn nhẹ việc."),
        L("l2", null, "Do one internship to see the other side. Note a few scholarship deadlines.", "Đi một kỳ thực tập để biết mặt kia; ghi lại hạn nộp vài học bổng."),
        L("l3", null, "Both doors stay open. In final year, either way, you don't start from zero.", "Cả hai cửa vẫn mở; đến năm cuối, chọn bên nào cũng không bắt đầu từ con số không."),
      ] },
    { id: "s29", module: "HOST-01", ref: "p24",
      data: { title: "Nếu bạn là phụ huynh", pose: "think",
        text: "Bằng cao chỉ “chắc” khi con biết học để làm gì. Cùng con tính đủ chi phí, hỏi người đi trước." },
      lines: [
        L("l1", "det", "For parents: a higher degree is only safe when your child knows what it's for.", "Với phụ huynh: tấm bằng cao hơn chỉ thật sự “chắc” khi con biết mình học để làm gì."),
        L("l2", "det", "Count the full cost together, and talk to people ahead. Don't decide for them.", "Cùng con tính đủ chi phí, hỏi người đi trước, thay vì quyết thay con."),
      ] },
    { id: "s30", module: "QUIZ-01", ref: "questions[5]",
      data: {
        q: "You are unsure what job you want, does starting a master's degree right away usually solve that?",
        options: [
          "Yes, because employers stop asking about practical experience after a master's",
          "Usually not, because a narrow degree chosen while unsure may never get used",
          "Yes, because any master's degree automatically shows you the perfect career path",
        ],
        correct: 1, countdown: 5, illus: "graduation-cap",
        why: "Thạc sĩ đi theo chuyên ngành hẹp, chọn khi còn mơ hồ dễ học thứ không dùng tới.",
      },
      lines: [
        L("l1", null, "You are unsure what job you want, does starting a master's degree right away usually solve that?", "Bạn chưa biết mình muốn làm nghề gì, học thạc sĩ ngay có thường giúp giải quyết điều đó không?"),
        L("l2", null, "Usually not, because a narrow degree chosen while unsure may never get used.", "Thường là không: chuyên ngành hẹp chọn khi còn mơ hồ dễ không dùng tới."),
        L("l3", null, "Two years later, the question is still there. Don't use a degree to hide.", "Hai năm sau câu hỏi vẫn còn nguyên. Đừng lấy tấm bằng để né."),
      ] },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu hỏi giúp bạn tự trả lời", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Answer the five questions on one page. Then try the forty questions below!", "Trả lời năm câu hỏi ra một trang giấy, rồi làm bốn mươi câu bên dưới nhé!", { face: "happy" })] },
  ],
};
