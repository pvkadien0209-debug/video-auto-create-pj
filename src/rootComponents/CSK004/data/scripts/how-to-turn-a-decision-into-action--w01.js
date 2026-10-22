// Kịch bản video W lần 3 (#110) — "Biến quyết định thành hành động" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-turn-a-decision-into-action--w01",
  hook: "HOOK-10",
  loop: { open: "s01", close: "s31" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "workplace-problem-solvers", slug: "how-to-turn-a-decision-into-action", door: "ky-nang", level: "B1",
    title: "Biến quyết định thành hành động và đánh giá kết quả thế nào?", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Phát → Dũng; Duyên (chủ trì buổi nhìn lại) → Thảo; người trong nhóm của Phát nói “cách mới cũng chẳng ăn thua” (bài: “mọi người”) → Thảo; Quyên (📌 p11) kể không tên bằng thẻ; người bị vướng việc (p14) và người nhận việc (p7) → Dũng (đúng việc làm biểu mẫu của bài); người gửi tin tóm tắt (p8) → Thảo. Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng. Chỗ đứng cố định: Dũng left, Thảo right (SCENE-03 tự chia đôi). DLG-01 dựng từ ✍️ p3 + câu hỏi p6; SCENE-03 dựng từ 🔀 p22. Tin tóm tắt p8 ghép từ chính nội dung ✍️ p3 và dấu hiệu thành công p9 (“sau một tháng”). Câu đố đổi sang questions[13] (không tên; khung ❓ p18 đã dạy bằng BEAT-04 + TEXT-04). Phủ ý: 24/24. #112 nhịp hình (§9): tách hoặc đổi module các cảnh s11, s24, giữ lời đọc và ref.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p3",
      data: { set: "meeting", label: "Một tháng, ba mốc",
        actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", null, "Monday. Dũng's team decides on a shared order form.", "Thứ Hai: nhóm của Dũng chốt nhận đơn qua biểu mẫu chung."),
        L("l2", "dung", "From next week, we'll take orders through the form.", "Từ tuần sau mình nhận đơn qua biểu mẫu nhé.", { face: "happy", pose: "explain", react: { thao: "happy" } }),
        L("l3", null, "Next week, nobody makes the form. A month later, orders still get lost.", "Tuần sau chưa ai làm biểu mẫu. Một tháng sau, đơn vẫn sót."),
        L("l4", "thao", "The new way doesn't work either.", "Cách mới cũng chẳng ăn thua.", { face: "sad", pose: "shrug" }),
        L("l5", null, "But it was never even tried. What went wrong?", "Nhưng cách mới chưa từng được thử. Hỏng ở đâu?"),
      ], beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ngay sau khi chốt, trả lời ba câu", pose: "present", items: ["Ai làm gì?", "Xong khi nào?", "Nhìn vào đâu để biết thành công?"] },
      lines: [
        L("l1", "det", "How do you turn a decision into action? Right after deciding, answer three questions.", "Biến quyết định thành việc thế nào? Chốt xong, trả lời ba câu."),
        L("l2", "det", "Who does what?", "Ai làm gì?"),
        L("l3", "det", "Done by when?", "Xong khi nào?"),
        L("l4", "det", "And how will we know it worked? Then set a day to look back.", "Nhìn vào đâu để biết thành công? Rồi hẹn ngày nhìn lại."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng của bài", chapters: [
        { label: "Chốt rồi, sao chẳng đổi?", illus: "hourglass-not-done" },
        { label: "Chia thành việc cụ thể", illus: "clipboard" },
        { label: "Dấu hiệu thành công", illus: "bar-chart" },
        { label: "Theo dõi khi đang làm", illus: "eyes" },
        { label: "Ngày nhìn lại", illus: "spiral-calendar" },
        { label: "Học, không xử", illus: "light-bulb" } ] },
      lines: [
        L("l1", null, "Why nothing changes, real tasks, and signs of success.", "Vì sao chẳng đổi, việc cụ thể, dấu hiệu thành công."),
        L("l2", null, "Then tracking, the review day, and learning without blame.", "Rồi theo dõi, ngày nhìn lại, và học mà không đổ lỗi."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Chốt rồi, sao chẳng đổi?" },
      lines: [L("l1", "det", "Part one: you decided. Why does nothing change?", "Phần một: đã chốt rồi, sao mãi không thấy gì thay đổi?")] },
    { id: "s05", module: "TEXT-04", ref: "p1",
      data: { text: "Vấn đề hiếm khi nằm ở quyết định; nó nằm ở khoảng trống giữa quyết định và việc làm.",
        marks: ["khoảng trống"], illus: "hole" },
      lines: [
        L("l1", null, "Many meetings end with: so, we all agree. A month later, nothing has changed.", "Nhiều cuộc họp kết bằng “vậy thống nhất thế nhé”, một tháng sau chẳng gì thay đổi."),
        L("l2", null, "Agreeing feels like solving. But the gap is between the decision and the work.", "Thống nhất cho cảm giác đã giải quyết, nhưng khoảng trống nằm giữa quyết định và việc làm."),
      ] },
    { id: "s06", module: "LIST-07", ref: "p2",
      data: { title: "Ba lý do hay gặp", items: [
        { text: "Không ai nhận việc rõ ràng", illus: "bust-in-silhouette" },
        { text: "Không có hạn chót", illus: "spiral-calendar" },
        { text: "Không có dấu hiệu thành công", illus: "bullseye" } ] },
      lines: [
        L("l1", null, "Nobody clearly owns it. Shared by everyone means owned by no one.", "Không ai nhận việc rõ ràng: “cùng phụ trách” thành không ai phụ trách."),
        L("l2", null, "No deadline, so daily urgent work always jumps ahead.", "Không có hạn chót, nên việc gấp hằng ngày luôn chen lên trước."),
        L("l3", null, "No sign of success, so nobody knows when it's done.", "Không có dấu hiệu thành công, không ai biết làm tới đâu là xong."),
      ] },
    { id: "s07", module: "DLG-01", ref: "p3,p6",
      data: { set: "meeting", label: "Cuối buổi họp",
        actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Chỉ hẹn chung “từ tuần sau”", why: "Không ai nhận việc, không có ngày, việc gấp hằng ngày chen lên trước." } },
      lines: [
        L("l1", "dung", "So, we all agree. From next week, orders go through the form.", "Vậy thống nhất thế nhé. Từ tuần sau nhận đơn qua biểu mẫu.", { pose: "explain", face: "happy" }),
        L("l2", "thao", "Great!", "Tuyệt!", { face: "happy", pose: "thumb", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "No person, no start date. That's still a wish, not a decision.", "Chưa có người làm, chưa có ngày bắt đầu thì vẫn là ý định."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "thao", "Let me note it down. Who is in charge, and when will it be done?", "Để chị ghi lại cho chắc: việc này ai phụ trách, hẹn xong ngày nào?", { phase: "redo", pose: "explain" }),
        L("l7", "dung", "I'll make the form by Wednesday. Thursday, we tell customers. From next Monday, form only.", "Em làm biểu mẫu, xong thứ Tư. Thứ Năm báo khách. Từ thứ Hai tuần sau chỉ nhận qua biểu mẫu.", { phase: "redo", face: "happy", pose: "explain" }),
      ] },
    { id: "s08", module: "TEXT-04", ref: "p4",
      data: { text: "Có ngày bắt đầu mới thành quyết định, chưa có thì vẫn là ý định.", marks: ["ngày bắt đầu"], illus: "spiral-calendar" },
      lines: [L("l1", null, "With a start date, it's a decision. Without one, it's still a wish.", "Có ngày bắt đầu mới thành quyết định, chưa có thì vẫn là ý định.")] },

    // ---------- Chương 2 ----------
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Chia thành việc cụ thể" },
      lines: [L("l1", "det", "Part two: turn the decision into real tasks.", "Phần hai: biến quyết định thành việc cụ thể thế nào?")] },
    { id: "s10", module: "LIST-06", ref: "p5",
      data: { title: "Từ quyết định đến danh sách việc", steps: [
        { text: "Viết lại quyết định trong một câu", illus: "memo" },
        { text: "Chia việc, mỗi việc bắt đầu bằng động từ", illus: "hammer-and-wrench" },
        { text: "Mỗi việc một người chịu trách nhiệm chính", illus: "bust-in-silhouette" },
        { text: "Mỗi việc một hạn chót riêng", illus: "spiral-calendar" } ] },
      lines: [
        L("l1", null, "Write the decision in one sentence, so everyone understands it the same way.", "Viết lại quyết định trong một câu để mọi người hiểu giống nhau."),
        L("l2", null, "Split it into tasks, each starting with a verb: call, send, set up, train.", "Chia thành việc, mỗi việc bắt đầu bằng động từ: gọi, gửi, cài đặt, hướng dẫn."),
        L("l3", null, "One main owner per task.", "Mỗi việc một người chịu trách nhiệm chính."),
        L("l4", null, "And one deadline per task, not just one for the whole plan.", "Và mỗi việc một hạn chót, không chỉ một hạn cho cả kế hoạch."),
      ] },
    { id: "s11", module: "CMP-07", ref: "p7",
      data: { wrong: "Để em xem", right: "Em làm biểu mẫu, gửi cả nhóm xem trước thứ Tư", diff: ["xem"] },
      lines: [
        L("l1", null, "Taking a task? Say it clearly, right away. Not: let me see.", "Việc bạn nhận thì nói rõ ngay, đừng nói “để em xem”."),
        L("l2", null, "But: I'll make the form and send it to the team before Wednesday.", "Mà là: “Em làm biểu mẫu, gửi cả nhóm xem trước thứ Tư.”"),
      ] },
    { id: "s11b", module: "TEXT-01", ref: "p7",
      data: { text: "Lời nhận có ngày tháng khó bị quên hơn nhiều", illus: "spiral-calendar" },
      lines: [
        L("l3", null, "A promise with a date is much harder to forget.", "Lời nhận có ngày tháng khó bị quên hơn nhiều."),
      ] },
    { id: "s12", module: "SCENE-02", ref: "p8",
      data: { set: "office", label: "Tin tóm tắt sau họp", actor: { id: "thao", side: "right" },
        contact: { name: "Nhóm bán hàng", illus: "busts-in-silhouette" },
        messages: [
          { from: "me", text: "Quyết định: nhận đơn qua biểu mẫu chung.", at: "l2" },
          { from: "me", text: "Dũng làm biểu mẫu, xong thứ Tư; thứ Năm nhắn báo khách.", at: "l3" },
          { from: "me", text: "Từ thứ Hai tuần sau chỉ nhận đơn qua biểu mẫu. Sau một tháng mình nhìn lại số đơn sót.", at: "l4" } ] },
      lines: [
        L("l1", null, "Then send a three or four line summary. People remember meetings differently.", "Rồi gửi tin tóm tắt ba bốn dòng, vì mỗi người nhớ cuộc họp một kiểu."),
        L("l2", "thao", "Decision: orders go through a shared form.", "Quyết định: nhận đơn qua biểu mẫu chung."),
        L("l3", "thao", "Dũng makes the form by Wednesday. Thursday, we tell customers.", "Dũng làm biểu mẫu, xong thứ Tư; thứ Năm nhắn báo khách."),
        L("l4", "thao", "From next Monday, form only. In a month, we review missed orders.", "Từ thứ Hai chỉ nhận qua biểu mẫu. Sau một tháng nhìn lại số đơn sót.", { face: "happy" }),
      ] },

    // ---------- Chương 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Dấu hiệu thành công" },
      lines: [L("l1", "det", "Part three: how will you know it worked?", "Phần ba: nhìn vào đâu để biết đã thành công?")] },
    { id: "s14", module: "TEXT-04", ref: "p9",
      data: { text: "Dấu hiệu dễ kiểm tra: “số đơn bị sót mỗi tuần giảm rõ rệt sau một tháng”.", marks: ["giảm rõ rệt sau một tháng"], illus: "chart-decreasing" },
      lines: [
        L("l1", null, "Pick a sign that's easy to check: missed orders each week clearly drop within a month.", "Chọn dấu hiệu dễ kiểm: “số đơn bị sót mỗi tuần giảm rõ rệt sau một tháng”."),
        L("l2", null, "Without it, everyone judges by feeling, and feelings differ.", "Không có nó, mỗi người đánh giá theo cảm giác, mà cảm giác mỗi người một kiểu."),
      ] },
    { id: "s15", module: "HOST-02", ref: "p10",
      data: { statement: "Làm tốt là đủ, không cần ghi con số lúc bắt đầu", truth: false,
        why: "Muốn biết “giảm rõ rệt” phải biết lúc đầu là bao nhiêu. Quên đo trước thì không chứng minh được." },
      lines: [
        L("l1", "det", "If you do well, you don't need the starting numbers. True or false?", "Làm tốt là đủ, không cần ghi số lúc đầu. Đúng hay sai?"),
        L("l2", "det", "False. To show a clear drop, you must know where you started.", "Sai. Muốn biết “giảm rõ rệt”, phải biết lúc đầu là bao nhiêu.", { face: "stern" }),
        L("l3", "det", "Many teams do great work, and can't prove it. They forgot to measure first.", "Nhiều nhóm làm rất tốt mà không chứng minh được, chỉ vì quên đo trước khi đổi."),
      ] },
    { id: "s16", module: "REL-02", ref: "p11",
      data: { chain: ["Đổi sang bộ câu trả lời mẫu mới", "Trước khi đổi, không ai đếm khiếu nại kéo dài", "Một tháng sau: người bảo hiệu quả, người bảo không", "Cách làm tốt có thể bị bỏ oan"],
        illus: ["speech-balloon", "bar-chart", "thinking-face", "wastebasket"] },
      lines: [
        L("l1", null, "A support team tried new reply templates, to cut long complaints.", "Một nhóm chăm sóc khách dùng câu trả lời mẫu mới để giảm khiếu nại kéo dài."),
        L("l2", null, "Nobody had counted complaints needing three or more replies before.", "Trước khi đổi, chưa ai đếm số khiếu nại phải trả lời từ ba lần trở lên."),
        L("l3", null, "A month later, some said better, some said no different. No data.", "Một tháng sau, người bảo dễ chịu hơn, người bảo chẳng khác. Không ai có số liệu."),
        L("l4", null, "The meeting became an argument, and a good method might be dropped unfairly.", "Cuộc họp thành tranh luận cảm tính, cách làm tốt có thể bị bỏ oan."),
      ] },
    { id: "s17", module: "TEXT-01", ref: "p12",
      data: { text: "Không đo lúc đầu thì không biết lúc sau.", illus: "bar-chart" },
      lines: [L("l1", null, "Don't measure at the start, and you can't know later.", "Không đo lúc đầu thì không biết lúc sau.")] },

    // ---------- Chương 4 ----------
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Theo dõi khi đang làm" },
      lines: [L("l1", "det", "Part four: keep it going, so it isn't dropped halfway.", "Phần bốn: đang làm thì theo dõi thế nào để không bỏ dở?")] },
    { id: "s19", module: "LIST-13", ref: "p13",
      data: { title: "Hẹn ngày nhìn lại ngay trong buổi quyết", items: [
        { title: "Ghi vào lịch của mọi người", detail: "Việc không bị trôi", illus: "spiral-calendar" },
        { title: "Không ai phải hỏi dồn từng ngày", detail: "Ai cũng biết khi nào kiểm", illus: "relieved-face" } ] },
      lines: [
        L("l1", null, "Set the review date in the decision meeting, and put it in everyone's calendar.", "Hẹn ngày nhìn lại ngay trong buổi quyết, ghi vào lịch của mọi người."),
        L("l2", null, "The work won't drift, and nobody has to chase people every day.", "Việc không bị trôi, và không ai phải hỏi dồn từng ngày."),
      ] },
    { id: "s20", module: "SCENE-02", ref: "p14",
      data: { set: "office", label: "Vướng thì báo sớm", actor: { id: "dung", side: "left" },
        contact: { name: "Chị Thảo", illus: "woman-office-worker" },
        messages: [{ from: "me", text: "Biểu mẫu em đang vướng phần phân quyền, em cần thêm hai ngày, xong thứ Sáu ạ.", at: "l2" }] },
      lines: [
        L("l1", null, "Stuck? Tell people early, with a plan. Don't wait silently for the deadline.", "Việc bị vướng? Báo sớm kèm đề xuất, đừng im lặng chờ đến hạn."),
        L("l2", "dung", "I'm stuck on the access settings for the form. I need two more days, done by Friday.", "Biểu mẫu em đang vướng phần phân quyền, em cần thêm hai ngày, xong thứ Sáu ạ.", { face: "worried" }),
        L("l3", null, "One early sentence beats a missed deadline nobody knew about.", "Báo sớm một câu đỡ hơn trễ hạn mà không ai biết."),
      ] },
    { id: "s21", module: "HOST-01", ref: "p15",
      data: { text: "Kế hoạch là công cụ để đạt mục tiêu, không phải lời thề phải giữ bằng mọi giá", pose: "think" },
      lines: [
        L("l1", "det", "Find a starting assumption was wrong? Adjust, and tell the others.", "Thấy giả định ban đầu sai? Cứ điều chỉnh và báo lại."),
        L("l2", "det", "A plan is a tool to reach the goal, not a promise to keep at any cost.", "Kế hoạch là công cụ để đạt mục tiêu, không phải lời thề phải giữ bằng mọi giá."),
      ] },

    // ---------- Chương 5 ----------
    { id: "s22", module: "HOST-03", data: { n: 5, of: 6, title: "Ngày nhìn lại hỏi gì?" },
      lines: [L("l1", "det", "Part five: the review day. What do you ask?", "Phần năm: đến ngày nhìn lại thì hỏi những gì?")] },
    { id: "s23", module: "LIST-05", ref: "p16",
      data: { title: "Mười lăm phút, bốn câu hỏi", illus: "stopwatch", items: [
        "Mình đã mong đợi điều gì?", "Điều gì thật sự xảy ra?", "Vì sao có khác biệt?", "Lần sau giữ gì, làm khác gì?" ] },
      lines: [
        L("l1", null, "Sit down for about fifteen minutes. What did we expect?", "Ngồi lại khoảng mười lăm phút. Mình đã mong đợi điều gì?"),
        L("l2", null, "What really happened? Why the difference?", "Điều gì thật sự xảy ra? Vì sao có khác biệt?"),
        L("l3", null, "Next time, what do we keep, and what do we change?", "Lần sau giữ lại điều gì, làm khác điều gì?"),
      ] },
    { id: "s24", module: "CMP-04", ref: "p17",
      data: { statement: "Kết quả tốt nghĩa là quyết định tốt", truth: false,
        why: "Quyết định cẩn thận vẫn có thể gặp xui, quyết định ẩu vẫn có thể gặp may", illus: "game-die" },
      lines: [
        L("l1", null, "A good result means a good decision? Not always, and the other way round.", "Kết quả tốt là quyết định tốt? Chưa chắc, và ngược lại."),
        L("l2", null, "A careful choice can meet bad luck. A careless one can get lucky.", "Quyết định cẩn thận vẫn gặp xui; quyết định ẩu vẫn gặp may."),
      ] },
    { id: "s24b", module: "LIST-05", ref: "p17",
      data: { title: "Xem cả cách đã quyết", items: ["Hiểu đúng vấn đề chưa?", "Có so phương án chưa?", "Có tính rủi ro chưa?"], illus: "magnifying-glass-tilted-left" },
      lines: [
        L("l3", null, "So check how you decided: the problem, the options, the risks.", "Nên xem cả cách đã quyết: hiểu đúng vấn đề, so phương án, tính rủi ro chưa."),
      ] },
    { id: "s25", module: "BEAT-04", ref: "p18",
      data: { seconds: 5, prompt: "Nhóm ra mắt tính năng mới, bỏ bước chạy thử vì gấp. May mà ổn, cả nhóm được khen. Buổi nhìn lại nên ghi gì?" },
      lines: [
        L("l1", null, "A team launches a new feature and skips testing, because they're in a hurry.", "Một nhóm ra mắt tính năng mới, bỏ bước chạy thử vì gấp."),
        L("l2", null, "Luckily, it all works. Everyone is praised. What should the review record?", "May mà ổn, cả nhóm được khen. Buổi nhìn lại nên ghi gì?"),
      ] },
    { id: "s26", module: "TEXT-04", ref: "p18",
      data: { text: "“Kết quả tốt, nhưng mình đã liều; lần sau giữ bước chạy thử.”", marks: ["giữ bước chạy thử"], illus: "test-tube" },
      lines: [
        L("l1", null, "Good result, but we took a risk. Next time, we keep the testing step.", "“Kết quả tốt, nhưng mình đã liều; lần sau giữ bước chạy thử.”"),
        L("l2", null, "Without that note, they'll do it again, and the site may fail on a big sale day.", "Không ghi, lần sau dễ làm y vậy, và trang có thể lỗi đúng ngày khuyến mãi lớn."),
      ] },
    { id: "s27", module: "TEXT-01", ref: "p19",
      data: { text: "Ăn may một lần, đừng coi là cách làm.", illus: "four-leaf-clover" },
      lines: [L("l1", null, "Lucky once? Don't call it a method.", "Ăn may một lần, đừng coi là cách làm.")] },
    { id: "s28", module: "HOST-01", ref: "p20",
      data: { text: "Nhìn lại cả những việc thành công", pose: "thumb" },
      lines: [
        L("l1", "det", "Review successes too, not only failures.", "Hãy nhìn lại cả những việc thành công, không chỉ khi thất bại."),
        L("l2", "det", "Knowing why it worked helps you repeat the right things.", "Biết vì sao thành công giúp bạn lặp lại đúng điều đáng lặp lại."),
      ] },

    // ---------- Chương 6 ----------
    { id: "s29", module: "HOST-03", data: { n: 6, of: 6, title: "Nhìn lại để học, không để xử" },
      lines: [L("l1", "det", "Part six: a review, not a hunt for someone to blame.", "Phần sáu: buổi nhìn lại không thành buổi tìm người có lỗi.")] },
    { id: "s30", module: "CMP-07", ref: "p21",
      data: { wrong: "Ai làm sai?", right: "Điều gì trong cách làm cần thay đổi?", diff: ["Ai"],
        note: "Sợ bị xử, mọi người kể ít đi, chi tiết thật bị giấu" },
      lines: [
        L("l1", null, "Not: who did it wrong? But: what in the way we work should change?", "Đừng hỏi “ai làm sai?”, hãy hỏi “điều gì trong cách làm cần thay đổi?”."),
        L("l2", null, "When people fear punishment, they say less, and the review is just a formality.", "Sợ bị xử, mọi người kể ít đi, chi tiết bị giấu, buổi nhìn lại chỉ còn là thủ tục."),
      ] },
    { id: "s31", module: "SCENE-03", ref: "p22",
      data: { set: "meeting", actors: [{ id: "thao" }, { id: "dung" }],
        left: { label: "Cách A: tìm người", ok: false }, right: { label: "Cách B: tìm bước", ok: true } },
      lines: [
        L("l0", null, "Thảo leads a review after a late project.", "Thảo chủ trì buổi nhìn lại sau một dự án bị trễ."),
        L("a1", "thao", "The project was late. Whose fault was it?", "Lần này trễ là do ai?", { phase: "a", face: "stern", pose: "point" }),
        L("a2", "dung", "Well... it's hard to say.", "Dạ… cũng khó nói ạ.", { phase: "a", face: "worried" }),
        L("a3", null, "The room goes quiet. Nothing is learned.", "Cả phòng im lặng, không rút ra được gì.", { phase: "a" }),
        L("b1", "thao", "Let's look at which step slowed us down.", "Mình cùng xem bước nào làm mình chậm nhé.", { phase: "b", face: "neutral", pose: "explain" }),
        L("b2", "dung", "Approval took two days. And one file was sent in the wrong version.", "Chờ duyệt mất hai ngày. Có tệp còn bị gửi nhầm phiên bản.", { phase: "b", face: "thinking" }),
        L("b3", null, "The team fixed both.", "Nhóm sửa được cả hai.", { phase: "b" }),
      ] },
    { id: "s32", module: "TEXT-01", ref: "p23",
      data: { text: "Nhìn lại để học, không phải để xử.", illus: "light-bulb" },
      lines: [L("l1", null, "Look back to learn, not to punish.", "Nhìn lại để học, không phải để xử.")] },
    { id: "s33", module: "TEXT-04", ref: "p24",
      data: { text: "Cuối buổi, lưu vài dòng bài học ở chỗ cả nhóm tìm được, kèm tên người phụ trách thay đổi.",
        marks: ["kèm tên người phụ trách"], illus: "file-folder" },
      lines: [
        L("l1", null, "At the end, save a few lines of lessons where the team can find them, with an owner for each change.", "Cuối buổi, lưu vài dòng bài học ở chỗ cả nhóm tìm được, kèm tên người phụ trách."),
        L("l2", null, "Lessons not written down must be learned again from zero.", "Bài học không ghi lại thì lần sau phải học lại từ đầu."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s34", module: "END-01", ref: "outro",
      data: { takeaway: "Ai làm gì, xong khi nào, nhìn vào đâu để biết thành công.", marks: ["xong khi nào"], illus: "clipboard" },
      lines: [
        L("l1", null, "A decision is done only with names, dates, a starting number, and a review.", "Quyết định chỉ xong khi có tên người, ngày tháng, con số lúc đầu và buổi nhìn lại."),
        L("l2", null, "Open your team's last decision, and write those three lines.", "Mở lại quyết định gần nhất của nhóm, viết ba dòng: ai làm gì, xong khi nào, nhìn vào đâu."),
      ] },
    { id: "s35", module: "QUIZ-01", ref: "questions[13]",
      data: {
        q: "Why should you record the numbers before you start a change?",
        options: [
          "It is only a formality for the accountant and does not affect the result",
          "You need a starting point to show later how much things really improved",
          "Numbers before a change are always wrong, so they show what to avoid",
        ],
        correct: 1, countdown: 5, illus: "bar-chart",
        why: "Muốn chứng minh “giảm rõ rệt” thì phải biết lúc đầu là bao nhiêu.",
      },
      lines: [
        L("l1", null, "Why should you record the numbers before you start a change?", "Vì sao nên ghi số liệu trước khi bắt đầu thay đổi?"),
        L("l2", null, "You need a starting point to show later how much things really improved.", "Cần một mốc ban đầu để sau này thấy đã tiến bộ bao nhiêu."),
        L("l3", null, "To prove a clear drop, you must know where you began.", "Muốn chứng minh “giảm rõ rệt” thì phải biết lúc đầu là bao nhiêu."),
      ], beats: { after: 600 } },
    { id: "s36", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Từ quyết định đến việc làm" },
      lines: [L("l1", "det", "Decide to start now. Forty questions are below.", "Quyết rồi thì bắt đầu ngay. Bốn mươi câu hỏi ở bên dưới.")] },
  ],
};
