// Kịch bản video W lần 3 (#110) — "Thực tập có quan trọng không? Cách chọn nơi thực tập" · chuỗi "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-choose-an-internship--w01",
  hook: "HOOK-03",
  loop: { open: "s01", close: "s24" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "students-preparing-early", slug: "how-to-choose-an-internship", door: "ky-nang", level: "B1",
    title: "Thực tập có quan trọng không? Cách chọn nơi thực tập", series: "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp" },
  format: "W", mode: "text", audio: {},
  notes: "Lần 3 (#110). Đổi tên (nữ → Lan, nam → Dũng, người lớn nữ → Cô Hoa, nam → Bác Bình): “bạn” được mời làm thực tập sinh (❓ p14) → Lan; người mời / nơi nhận thực tập → Cô Hoa (chỉ nói câu trung lập); Ánh (p10) → Lan; Thoa (p21) → Lan; anh hướng dẫn của Thoa và của Bình → Bác Bình; Bình (p24, thực tập sinh nam) → Dũng; phụ huynh (p26) → lời Đét. Bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng vai mới. Câu treo s01 (nên hỏi gì trước khi gật đầu?) trả lời ở chương 4 (s17) và câu đố s30. Phần làm lại DLG-01 s12 dùng cách của p9, bài không kể Ánh làm lại. Câu của người hướng dẫn ở SCENE-03 s24 (nhánh B) dựng theo p21. Phủ ý: 26/26.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p14",
      data: { set: "office", label: "Buổi nói chuyện mười phút",
        actors: [{ id: "lan", side: "left" }, { id: "hoa", side: "right" }] },
      lines: [
        L("l1", "hoa", "We'd like you to join us as a market development intern.", "Cô mời em làm thực tập sinh phát triển thị trường nhé.", { pose: "explain", face: "happy" }),
        L("l2", "lan", "Really? That sounds great!", "Thật ạ? Nghe hay quá!", { face: "happy", react: { hoa: "happy" } }),
        L("l3", null, "After a ten-minute chat. Before Lan says yes, which question matters most?", "Chỉ sau mười phút nói chuyện. Trước khi gật đầu, câu nào Lan đáng hỏi nhất?"),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Chọn nơi thực tập dựa vào đâu?", pose: "present",
        items: ["Việc bạn sẽ được làm", "Người hướng dẫn bạn", "Hơn là tên tuổi"] },
      lines: [
        L("l1", "det", "Is an internship worth it, and how do you choose? It's worth it, but not for the certificate.", "Thực tập có đáng không, chọn thế nào? Rất đáng, nhưng không vì tờ giấy xác nhận."),
        L("l2", "det", "Choose by the work you'll do.", "Chọn theo việc bạn sẽ được làm."),
        L("l3", "det", "And by who will guide you.", "Theo người hướng dẫn bạn."),
        L("l4", "det", "More than by the big name.", "Hơn là theo tên tuổi."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu chặng của video",
        chapters: [
          { label: "Có cần đi thực tập", illus: "red-question-mark" },
          { label: "Các kiểu nơi thực tập", illus: "office-building" },
          { label: "Chọn nơi dựa vào đâu", illus: "check-mark-button" },
          { label: "Hỏi lại khi phỏng vấn, dấu hiệu dừng", illus: "warning" },
          { label: "Đang thực tập", illus: "memo" },
          { label: "Ngày cuối", illus: "handshake" } ] },
      lines: [L("l1", null, "Six parts, from wondering to your last day.", "Sáu chặng, từ lúc phân vân đến ngày cuối kỳ thực tập.")] },

    // Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Năm hai, năm ba có cần thực tập?" },
      lines: [L("l1", "det", "Part one: do you need an internship in year two or three?", "Phần một: năm hai, năm ba có cần đi thực tập không?")] },
    { id: "s05", module: "LIST-07", ref: "p1",
      data: { title: "Ba thứ khó có trong lớp",
        items: [
          { text: "Trải nghiệm công việc thật", illus: "briefcase" },
          { text: "Câu chuyện cụ thể cho CV và phỏng vấn", illus: "page-facing-up" },
          { text: "Biết mình có hợp nghề không", illus: "compass" } ] },
      lines: [
        L("l1", null, "An internship gives three things a classroom rarely can. Real work.", "Thực tập cho ba thứ khó có trong lớp. Một: trải nghiệm công việc thật."),
        L("l2", null, "Concrete stories for your CV and interviews. A real task beats saying you know the theory.", "Hai: chuyện cụ thể để kể trong CV, phỏng vấn; một việc thật mạnh hơn câu “em nắm lý thuyết”."),
        L("l3", null, "And a chance to see if the job suits you.", "Ba: cơ hội biết mình có hợp với nghề hay không."),
      ] },
    { id: "s06", module: "CMP-01", ref: "p2,p3",
      data: { labels: ["Không nhất thiết", "Bắt đầu nhẹ nhàng"], left: "Sáu tháng toàn thời gian",
        right: "Thực tập hè, vài buổi mỗi tuần, trợ lý dự án nghiên cứu của thầy cô", illus: ["hourglass-not-done", "sun"] },
      lines: [
        L("l1", null, "It doesn't have to be six months full-time. A summer internship, a few sessions a week, or helping a teacher's research.", "Không bắt buộc sáu tháng toàn thời gian: thực tập hè, vài buổi mỗi tuần, hay trợ lý dự án nghiên cứu của thầy cô."),
        L("l2", null, "Finding out early that a job doesn't suit you is a good result too. You still have time to change.", "Biết sớm mình không hợp một nghề cũng là kết quả tốt: vẫn còn thời gian đổi hướng."),
      ] },

    // Chương 2
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Các kiểu nơi thực tập" },
      lines: [L("l1", "det", "Part two: kinds of internship places.", "Phần hai: có những kiểu nơi thực tập nào.")] },
    { id: "s08", module: "CMP-05", ref: "p4,p5,p6",
      data: { title: "Mỗi nơi một kiểu",
        columns: [{ label: "Công ty lớn", illus: "office-building" }, { label: "Công ty nhỏ, khởi nghiệp", illus: "house" }, { label: "Nhà nước, phi lợi nhuận, trường", illus: "classical-building" }],
        rows: [
          { label: "Được", cells: ["quy trình bài bản, tên tuổi", "làm nhiều việc, gặp quản lý", "hợp hướng khu vực này, học tiếp"] },
          { label: "Cần lưu ý", cells: ["cạnh tranh cao, việc nhỏ", "thiếu người hướng dẫn", "nghiên cứu rèn đọc, phân tích, viết"] } ] },
      lines: [
        L("l1", null, "Big companies: clear programs and a known name. But strong competition, and maybe only small tasks.", "Công ty lớn: quy trình, chương trình rõ, tên tuổi giúp CV; đổi lại cạnh tranh cao, có thể chỉ làm việc nhỏ."),
        L("l2", null, "Small companies and startups: more tasks and direct contact with managers. But maybe no mentor, and unclear processes.", "Công ty nhỏ, khởi nghiệp: làm nhiều việc, gặp trực tiếp quản lý; nhưng có thể thiếu người hướng dẫn, quy trình chưa rõ."),
        L("l3", null, "Public offices and non-profits suit people aiming there. A research project at school suits those planning further study.", "Nhà nước, phi lợi nhuận hợp bạn hướng tới khu vực đó; dự án nghiên cứu ở trường hợp bạn định học tiếp."),
      ] },

    // Chương 3
    { id: "s09", module: "HOST-03", data: { n: 3, of: 6, title: "Chọn nơi dựa vào đâu?" },
      lines: [L("l1", "det", "Part three: what to base your choice on.", "Phần ba: chọn nơi thực tập dựa vào đâu.")] },
    { id: "s10", module: "LIST-05", ref: "p7",
      data: { title: "Năm ô tiêu chí", illus: "clipboard",
        items: ["Mỗi ngày làm việc gì cụ thể", "Ai hướng dẫn, họ có thời gian không", "Việc có gần hướng mình muốn", "Giờ giấc, đường đi hợp lịch học", "Đã từng giữ thực tập sinh lại làm chưa"] },
      lines: [
        L("l1", null, "What exactly will I do each day? Who will guide me, and do they have time?", "Mỗi ngày mình làm gì cụ thể? Ai hướng dẫn, họ có thời gian không?"),
        L("l2", null, "Is the work close to my direction? Do the hours and travel fit my timetable?", "Việc có gần hướng mình muốn? Giờ giấc, đường đi có hợp lịch học không?"),
        L("l3", null, "Have they kept interns as staff before? That shows if it could lead to a real job.", "Nơi đó từng giữ thực tập sinh lại làm chưa? Điều đó cho thấy có thể thành việc thật."),
      ] },
    { id: "s11", module: "REL-11", ref: "p8",
      data: { left: { label: "Nơi tên tuổi", illus: "office-building", items: ["Tên đẹp trong CV", "Chỉ ngồi photo tài liệu"] },
        right: { label: "Công ty nhỏ", illus: "house", items: [{ text: "Tự làm một việc từ đầu đến cuối", weight: 4 }] },
        heavier: "right", verdict: "Việc thật nặng hơn tên tuổi." },
      lines: [
        L("l1", null, "A famous name where you only make photocopies is often worth less than a small firm where you finish a task from start to end.", "Nơi tên tuổi mà chỉ ngồi photo thường kém giá trị hơn công ty nhỏ cho bạn tự làm một việc từ đầu đến cuối."),
      ] },
    { id: "s12", module: "DLG-01", ref: "p9,p10,p11",
      data: { set: "office", label: "Lịch thực tập",
        actors: [{ id: "lan", side: "left" }, { id: "hoa", side: "right" }],
        verdict: { ok: false, label: "Nhận lịch trùng giờ học", why: "Cuối kỳ trượt một môn, phải học lại đúng kỳ hè định đi thực tập tiếp.",
          rule: "Thực tập vào kỳ hè hoặc buổi trống" } },
      lines: [
        L("l1", "hoa", "Can you come four mornings a week?", "Em đi được bốn buổi sáng mỗi tuần không?", { pose: "explain" }),
        L("l2", "lan", "Yes! Two of them are my classes, but I'll copy my friends' notes.", "Dạ được! Trùng hai buổi học, em xin bạn chép bài là được.", { face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Your timetable comes first. An internship should add to your bag, not cost you a subject.", "Lịch học là điều kiện đầu tiên. Thực tập để thêm hành trang, đừng để mất môn học."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "lan", "Could I come on my free mornings, so I don't miss classes or exams?", "Em đi vào các buổi trống được không ạ, để không lỡ giờ học, giờ thi?", { phase: "redo", pose: "explain", face: "thinking", react: { hoa: "thinking" } }),
      ] },
    { id: "s13", module: "STORY-05", ref: "p10",
      data: { label: "Nếu Lan không tua lại",
        panels: [
          { scene: ["woman-student", "office-building", "spiral-calendar"], caption: "Lan nhận đi bốn buổi sáng, trùng hai buổi học chuyên ngành.", say: "Chép bài là được." },
          { scene: ["closed-book", "cross-mark", "anxious-face-with-sweat"], caption: "Cuối kỳ, Lan trượt một môn." },
          { scene: ["sun", "school", "weary-face"], caption: "Phải học lại đúng kỳ hè định đi thực tập tiếp." } ] },
      lines: [
        L("l1", null, "Without the rewind: Lan takes four mornings, two of them major classes.", "Nếu không tua lại: Lan nhận bốn buổi sáng, trùng hai buổi học chuyên ngành."),
        L("l2", null, "At the end of term, she fails a subject, and retakes it in the very summer she planned to intern.", "Cuối kỳ trượt một môn, phải học lại vào đúng kỳ hè định đi thực tập tiếp."),
      ] },

    // Chương 4
    { id: "s14", module: "HOST-03", data: { n: 4, of: 6, title: "Hỏi lại khi phỏng vấn" },
      lines: [L("l1", "det", "Part four: what to ask at the interview, and when to stop.", "Phần bốn: hỏi lại gì khi phỏng vấn, và khi nào nên dừng.")] },
    { id: "s15", module: "HOST-01", ref: "p12",
      data: { title: "Ba câu nên hỏi lại", pose: "present",
        items: ["Một ngày bình thường của thực tập sinh gồm những việc gì ạ?", "Ai sẽ hướng dẫn em, trao đổi tiến độ thế nào ạ?", "Các bạn thực tập trước đã làm dự án gì ạ?"] },
      lines: [
        L("l1", "det", "The interview is your chance to judge them too. Ask: what does a normal day look like for an intern?", "Phỏng vấn cũng là lúc bạn đánh giá nơi đó. Hỏi: một ngày bình thường của thực tập sinh gồm việc gì?"),
        L("l2", "det", "Who will guide me, and how do we check progress?", "Ai sẽ hướng dẫn em, và mình trao đổi tiến độ thế nào?"),
        L("l3", "det", "What projects did past interns do?", "Các bạn thực tập trước đã làm dự án gì?"),
      ] },
    { id: "s16", module: "TEXT-04", ref: "p13",
      data: { text: "Câu trả lời mơ hồ như “hỗ trợ các phòng ban”? Lịch sự xin một ví dụ cụ thể.", marks: ["một ví dụ cụ thể"], illus: "magnifying-glass-tilted-left" },
      lines: [
        L("l1", null, "A vague answer, like supporting all departments? Politely ask for one concrete example.", "Câu trả lời mơ hồ như “hỗ trợ các phòng ban”? Lịch sự hỏi thêm một ví dụ cụ thể."),
        L("l2", null, "Asking clearly doesn't lose you points. It shows you're serious.", "Hỏi rõ không làm bạn mất điểm, mà cho thấy bạn nghiêm túc."),
      ] },
    { id: "s17", module: "SCENE-01", ref: "p14,p15",
      data: { set: "office", label: "Lan hỏi lại",
        actors: [{ id: "lan", side: "left" }, { id: "hoa", side: "right" }] },
      lines: [
        L("l1", "lan", "Before I say yes, what does a normal working day in this role include?", "Trước khi nhận lời, cho em hỏi một ngày làm việc bình thường ở vị trí này gồm những việc gì ạ?", { pose: "explain", face: "thinking" }),
        L("l2", null, "A nice title can hide different work. Some places give interns a phone list and a target to sell to relatives.", "Tên vị trí nghe hay mà việc có thể khác hẳn: có nơi giao danh sách số điện thoại và chỉ tiêu rủ người thân mua hàng."),
        L("l3", null, "Many students fear looking difficult. But a polite question only shows you're serious. Ask about daily work before you say yes.", "Nhiều bạn ngại bị coi là khó tính, nhưng câu hỏi lịch sự chỉ cho thấy bạn nghiêm túc. Hỏi rõ việc hằng ngày trước khi gật đầu."),
      ] },
    { id: "s18", module: "LIST-02", ref: "p16",
      data: { title: "Dấu hiệu nên dừng lại", illus: "warning",
        items: [
          { icon: "badge-percent", illus: "money-with-wings", text: "Phải đóng tiền, mua khoá học, “đặt cọc” để được nhận" },
          { icon: "id-card", illus: "identification-card", text: "Đòi giữ bản gốc giấy tờ tuỳ thân, bằng cấp" },
          { icon: "shopping-cart", illus: "shopping-cart", text: "Việc khác hẳn mô tả, ép bán hàng cho người quen" },
          { icon: "file-x", illus: "page-facing-up", text: "Không có thoả thuận bằng văn bản về thời gian, nhiệm vụ" } ] },
      lines: [
        L("l1", null, "Stop if they ask for a fee, a course purchase or a deposit to take you. Or want to keep your original ID or degree.", "Dừng lại nếu phải đóng tiền, mua khoá học, “đặt cọc” để được nhận; hay đòi giữ bản gốc giấy tờ, bằng cấp."),
        L("l2", null, "Or if the work is mostly pushing sales to people you know. Or nothing is in writing about your hours and tasks.", "Hoặc việc khác hẳn mô tả, chủ yếu ép bán hàng cho người quen; hay không có văn bản nào về thời gian, nhiệm vụ."),
      ] },
    { id: "s19", module: "HOST-02", ref: "p17",
      data: { statement: "Người giới thiệu bảo “không sao đâu” thì cứ nhận", truth: false, why: "Gặp dấu hiệu lạ, hỏi thầy cô hoặc phòng công tác sinh viên trước; rút lui sớm không có gì đáng ngại." },
      lines: [
        L("l1", "det", "You see a warning sign, but the friend who introduced you says it's fine. Just accept? True or false?", "Thấy dấu hiệu lạ, nhưng người giới thiệu bảo không sao. Cứ nhận? Đúng hay sai?"),
        L("l2", "det", "False. Ask a teacher or the student office first. Walking away early is nothing to fear.", "Sai. Hỏi thầy cô hoặc phòng công tác sinh viên trước. Rút lui sớm không có gì đáng ngại.", { face: "stern" }),
      ] },

    // Chương 5
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Đang thực tập" },
      lines: [L("l1", "det", "Part five: making those months count.", "Phần năm: đang thực tập, làm sao cho đáng mấy tháng.")] },
    { id: "s21", module: "TEXT-04", ref: "p18",
      data: { text: "Tuần đầu đặt hai mục tiêu nhỏ: học cách lập báo cáo tuần, làm xong một sản phẩm đưa vào CV.", marks: ["hai mục tiêu nhỏ"], illus: "bullseye" },
      lines: [
        L("l1", null, "In week one, set two small goals. Learn to make the weekly report. Finish one piece of work for your CV.", "Tuần đầu đặt hai mục tiêu nhỏ: học cách lập báo cáo tuần, làm xong một sản phẩm đưa vào CV."),
        L("l2", null, "Tell your mentor, so the tasks match.", "Nói với người hướng dẫn để họ giao việc phù hợp."),
      ] },
    { id: "s22", module: "LIST-13", ref: "p19",
      data: { title: "Mỗi ngày",
        items: [
          { title: "Ghi ba dòng", detail: "Hôm nay làm gì, học được gì, còn vướng gì", illus: "memo" },
          { title: "Xong việc thì hỏi", detail: "“Em xong phần này rồi, anh chị cần em hỗ trợ thêm việc gì không ạ?”", illus: "raising-hands" } ] },
      lines: [
        L("l1", null, "Each day, write three lines: what you did, what you learned, what's still unclear.", "Mỗi ngày ghi ba dòng: hôm nay làm gì, học được gì, còn vướng gì."),
        L("l2", null, "Finished early and nobody gives you more? Say: I've finished this part. Is there anything else I can help with?", "Xong việc mà chưa ai giao thêm? Hỏi: “Em xong phần này rồi, anh chị cần em hỗ trợ thêm việc gì không ạ?”"),
      ] },
    { id: "s23", module: "TEXT-01", ref: "p20",
      data: { text: "Giữa kỳ, chủ động xin nhận xét.", illus: "speech-balloon" },
      lines: [L("l1", null, "Halfway through, ask for feedback: what you do well, and what to fix. Hear it early, and there's time to improve.", "Giữa kỳ, chủ động xin nhận xét: làm tốt gì, cần sửa gì. Nghe sớm thì còn thời gian sửa.")] },
    { id: "s24", module: "SCENE-03", ref: "p21,p22",
      data: { set: "office", actors: [{ id: "lan", side: "left" }, { id: "binh", side: "right" }],
        left: { label: "Đợi nhận xét ngày cuối", ok: false }, right: { label: "Hỏi từ tuần thứ ba", ok: true } },
      lines: [
        L("l1", null, "Lan has a two-month summer internship at a design office.", "Lan thực tập hè hai tháng ở một văn phòng thiết kế."),
        L("a1", "binh", "Final review: still shy, doesn't report progress.", "Nhận xét cuối kỳ: còn rụt rè, chưa chủ động báo tiến độ.", { phase: "a", pose: "explain", react: { lan: "sad" } }),
        L("b1", "lan", "What am I doing well, and what should I fix?", "Bác thấy em làm tốt điều gì, cần sửa điều gì ạ?", { phase: "b", pose: "explain", face: "thinking" }),
        L("b2", "binh", "Try reporting your progress every Friday afternoon.", "Thử báo tiến độ mỗi chiều thứ Sáu nhé.", { phase: "b", face: "happy" }),
        L("l2", null, "In A, the internship is over, no chance to fix it. In B, she still has over a month. Ask midway, don't wait for the last day.", "Cách A: hết kỳ, không còn dịp sửa. Cách B: còn hơn một tháng. Xin nhận xét giữa kỳ, đừng đợi ngày cuối."),
      ] },

    // Chương 6
    { id: "s25", module: "HOST-03", data: { n: 6, of: 6, title: "Ngày cuối" },
      lines: [L("l1", "det", "Part six: ending well, and keeping the relationship.", "Phần sáu: kết thúc thế nào để còn giữ được mối quan hệ.")] },
    { id: "s26", module: "LIST-05", ref: "p23",
      data: { title: "Ngày cuối kỳ thực tập", illus: "handshake",
        items: ["Bàn giao việc đang dở và nơi lưu tệp", "Cảm ơn người hướng dẫn, các anh chị trong nhóm", "Xin phép giữ liên lạc", "Hỏi người hướng dẫn có thể nhận xét cho mình sau này"] },
      lines: [
        L("l1", null, "Hand over unfinished work, and say where the files are saved. Thank your mentor and the team.", "Bàn giao việc dở và nơi lưu tệp; cảm ơn người hướng dẫn và các anh chị trong nhóm."),
        L("l2", null, "Ask to stay in touch. And ask if your mentor could be a reference later. They saw your work.", "Xin giữ liên lạc, và hỏi người hướng dẫn có thể làm người nhận xét sau này: họ đã thấy bạn làm việc."),
      ] },
    { id: "s27", module: "STORY-03", ref: "p24,p25",
      data: { label: "Tình huống thường gặp", title: "Dũng làm tốt cả kỳ, rồi ngày cuối…", illus: "man-student",
        around: ["file-folder", "speech-balloon"], contact: { name: "Anh hướng dẫn", illus: "man-office-worker" },
        messages: [
          { from: "me", text: "Chào cả nhóm, em về nhé!" },
          { from: "me", time: "Một năm sau", text: "Anh ơi, anh làm người nhận xét cho hồ sơ xin việc của em được không ạ?" },
          { from: "them", text: "Ừ… để anh xem đã." } ] },
      lines: [
        L("l1", null, "Dung did well all summer. On the last day, he just said goodbye in the group chat.", "Dũng làm tốt suốt kỳ hè. Ngày cuối chỉ nhắn một câu chào vào nhóm rồi về."),
        L("l2", null, "His half-done files? Nobody knew where they were. The team lost a whole morning.", "Mấy tệp dở dang không ai biết lưu ở đâu, nhóm mất cả buổi tìm lại."),
        L("l3", null, "A year later, he asks his mentor for a reference. The reply is cautious. The last day is the one people remember longest.", "Một năm sau xin anh hướng dẫn nhận xét, anh trả lời dè dặt. Ngày cuối là ngày người ta nhớ lâu nhất."),
      ] },
    { id: "s28", module: "HOST-01", ref: "p26",
      data: { title: "Nếu bạn là phụ huynh", pose: "think",
        items: ["Không lương vẫn đáng nếu con làm việc thật, có người hướng dẫn", "Cùng con hỏi rõ lịch và nhiệm vụ", "Nói không với mọi khoản phí để được nhận"] },
      lines: [
        L("l1", "det", "For parents: an unpaid or low-paid internship can still be worth it, with real work and a guide.", "Với phụ huynh: thực tập không lương hay lương thấp vẫn đáng, nếu con làm việc thật và có người hướng dẫn."),
        L("l2", "det", "Ask together about the schedule and tasks.", "Cùng con hỏi rõ lịch và nhiệm vụ."),
        L("l3", "det", "And say no to any fee to get in.", "Và nói không với mọi khoản phí để được nhận."),
      ] },

    // Tổng kết
    { id: "s29", module: "END-02", ref: "outro",
      data: { kicker: "Mang theo", illus: "briefcase",
        points: ["Hỏi rõ việc hằng ngày trước khi gật đầu", "Xin nhận xét giữa kỳ", "Ngày cuối: bàn giao, cảm ơn, giữ liên lạc"],
        icons: ["magnifying-glass-tilted-left", "speech-balloon", "handshake"] },
      lines: [
        L("l1", null, "A good internship isn't measured by the company name, but by the work, the guide, and the story you bring home.", "Kỳ thực tập tốt không đo bằng tên công ty, mà bằng việc được làm, người dẫn và câu chuyện bạn mang về."),
      ] },
    { id: "s30", module: "QUIZ-01", ref: "questions[16]",
      data: {
        q: "A company offers you a market development intern role after a short chat, what should you ask first?",
        options: [
          "Whether you can skip the interview and start working tomorrow morning instead",
          "What a normal working day in this role actually includes, task by task",
          "How many relatives you are expected to bring along to the first meeting",
        ],
        correct: 1, countdown: 5, illus: "magnifying-glass-tilted-left",
        why: "Hỏi một ngày làm việc bình thường cho thấy nội dung thật của vị trí.",
      },
      lines: [
        L("l1", null, "A company offers you a market development intern role after a short chat, what should you ask first?", "Một công ty mời bạn làm thực tập sinh phát triển thị trường sau buổi nói chuyện ngắn, nên hỏi gì trước?"),
        L("l2", null, "What a normal working day in this role actually includes, task by task.", "Một ngày làm việc bình thường ở vị trí này gồm những việc gì."),
        L("l3", null, "A nice job title may hide something else, like selling products to your relatives.", "Tên nghe hay mà việc có thể khác hẳn, như rủ người thân mua hàng."),
      ] },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu hỏi trước kỳ thực tập", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Save the five checks and three questions on your phone. Then try the forty questions below.", "Chép năm ô tiêu chí và ba câu hỏi vào điện thoại, rồi làm bốn mươi câu bên dưới nhé.", { face: "happy" })] },
  ],
};
