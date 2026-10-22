// Kịch bản video W lần 3 (#110) — "Báo cáo lên cấp trên: cả tin tốt lẫn tin xấu" · chuỗi "Lần đầu làm trưởng nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "report-to-your-manager-as-leader--w01",
  hook: "HOOK-09",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "first-time-team-leaders", slug: "report-to-your-manager-as-leader", door: "ky-nang", level: "B1",
    title: "Báo cáo lên cấp trên: cả tin tốt lẫn tin xấu", series: "Lần đầu làm trưởng nhóm" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” (trưởng nhóm), Hiếu (p4) → Thảo; sếp → Cô Hoa (chỉ nói câu có trong bài hoặc câu hỏi/đáp trung lập: “Thế em là trưởng nhóm, em đã làm gì?”, “Phần đó chậm vì sao?”, hỏi một con số, hỏi nhận thêm việc, “Ừ, thứ Năm nhé”); Hải (thành viên chậm phần số liệu, p17) → Dũng; Hằng (p20, p21) → Lan (chỉ được nhắc tên); Tú (p21) không dùng. Vai mới (#110): bài không có trẻ con, bà cụ, người nước ngoài → không dùng. Mở bằng câu thoại treo của 🔀 p17 Cách A; trả lời ở DLG-01 s19 (Cách B). SCENE-02 s16 dùng tin nhắn mẫu p12, s11 dùng tin mẫu p8. Câu hỏi của sếp ở s26 (“bao nhiêu khách trả lời khảo sát”) là ví dụ dựng cho tình huống “sếp hỏi mà mình chưa biết” (p23). Phủ ý: 26/26.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p17",
      data: { set: "office", label: "Dự án bị chậm", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "The project is late. One member's data part is not finished.", "Dự án bị chậm vì phần số liệu của một thành viên chưa xong."),
        L("l2", "thao", "It is because Dung is too slow with the data.", "Tại bạn Dũng làm phần số liệu chậm quá chị ạ.", { pose: "shrug", face: "worried" }),
        L("l3", "hoa", "You are the team leader. What have you done?", "Thế em là trưởng nhóm, em đã làm gì?", { face: "stern", react: { thao: "surprised" } }),
      ],
      beats: { after: 900 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Sếp cần một trưởng nhóm biết báo", pose: "present", items: ["Báo đều đặn", "Kết luận lên trước", "Tin xấu báo sớm, kèm đề xuất", "Ghi công đúng người"] },
      lines: [
        L("l1", "det", "Good news and bad news: how should a leader report up? Four things.", "Tin tốt lẫn tin xấu, trưởng nhóm báo sếp thế nào? Bốn điều."),
        L("l2", "det", "Regular updates.", "Báo đều đặn."),
        L("l3", "det", "The conclusion first.", "Kết luận lên trước."),
        L("l4", "det", "Bad news early, with a plan.", "Tin xấu báo sớm, kèm đề xuất."),
        L("l5", "det", "And credit to the right people.", "Và ghi công đúng người."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Năm phần của video", pose: "point", items: ["Sếp muốn biết gì", "Ngắn mà đủ", "Tin xấu", "Lỗi và công", "Chưa biết, việc thêm"] },
      lines: [
        L("l1", "det", "What your manager wants.", "Một: sếp thật sự muốn biết gì."),
        L("l2", "det", "Short but complete.", "Hai: viết ngắn mà đủ."),
        L("l3", "det", "Bad news.", "Ba: báo tin xấu."),
        L("l4", "det", "Blame and credit.", "Bốn: nhận lỗi, ghi công."),
        L("l5", "det", "When you do not know, or get more work.", "Năm: khi chưa biết, hay bị giao thêm."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 5, title: "Sếp muốn biết gì" },
      lines: [L("l1", "det", "Part one: what does your manager really want to know?", "Phần một: sếp thật sự muốn biết gì từ mình?")] },
    { id: "s05", module: "LIST-07", ref: "p1",
      data: { title: "Sếp cần biết", items: [
        { text: "Việc có đúng hạn không", illus: "alarm-clock" },
        { text: "Có rủi ro gì", illus: "warning" },
        { text: "Cần sếp quyết hay hỗ trợ gì", illus: "raising-hands" } ] },
      lines: [
        L("l1", null, "Not every detail. Is it on time? What are the risks? What help or decision is needed?", "Không cần mọi chi tiết. Có đúng hạn? Rủi ro gì? Cần sếp quyết hay giúp gì?"),
        L("l2", null, "Ten paragraphs of detail bury the risk and the request.", "Mười đoạn chi tiết sẽ chôn mất rủi ro và lời đề nghị."),
      ] },
    { id: "s06", module: "SCENE-01", ref: "p2",
      data: { set: "office", label: "Tuần đầu", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "thao", "How often would you like updates? By message, or in person?", "Chị muốn em cập nhật bao lâu một lần, qua tin nhắn hay gặp trực tiếp ạ?", { pose: "explain", to: "hoa" }),
        L("l2", "hoa", "Good question. Let's agree on that now.", "Hỏi hay đấy. Mình thống nhất luôn nhé.", { face: "happy", to: "thao" }),
        L("l3", null, "Every manager has a habit. Ask once, instead of guessing forever. Forgot to ask? Ask now.", "Mỗi sếp một thói quen. Hỏi một lần đỡ đoán mãi. Quên hỏi thì hỏi ngay bây giờ."),
      ] },
    { id: "s07", module: "STORY-01", ref: "p4",
      data: { context: "Thảo ngại làm phiền sếp, chỉ nhắn khi có chuyện.", action: "Cứ thấy tin của Thảo là sếp lo, vì tin đến là có vấn đề.", outcome: "Sếp hỏi dồn từng ngày. Thảo thấy bị soi, càng ngại nhắn.",
        illus: ["woman-office-worker", "worried-face", "magnifying-glass-tilted-left"] },
      lines: [
        L("l1", null, "Thao only messages when there is trouble. So every message makes her manager worry.", "Thảo chỉ nhắn khi có chuyện. Nên tin nào đến cũng làm sếp lo."),
        L("l2", null, "The manager starts asking every day. Thao feels watched, and messages even less.", "Sếp hỏi dồn từng ngày. Thảo thấy bị soi, càng ngại nhắn."),
      ] },
    { id: "s08", module: "TEXT-01", ref: "p3,p5",
      data: { text: "Báo đều lúc yên, sếp tin lúc biến.", illus: "spiral-calendar" },
      lines: [
        L("l1", null, "Report on the agreed rhythm, even when all is normal. “All work is on time this week” is enough.", "Báo đúng nhịp, cả khi bình thường. “Tuần này mọi việc đúng hạn” là đủ."),
        L("l2", null, "Report regularly when it is calm, and your manager trusts you in a crisis.", "Báo đều lúc yên, sếp tin lúc biến."),
      ] },

    // ---------- Phần 2 ----------
    { id: "s09", module: "HOST-03", data: { n: 2, of: 5, title: "Ngắn mà đủ" },
      lines: [L("l1", "det", "Part two: a short report that says enough.", "Phần hai: viết báo cáo ngắn mà đủ.")] },
    { id: "s10", module: "LIST-05", ref: "p6,p7",
      data: { title: "Câu đầu là kết luận, rồi ba dòng", illus: "memo",
        items: ["Đã xong việc gì", "Đang làm gì, có đúng hạn không", "Vướng gì, cần sếp giúp gì"] },
      lines: [
        L("l1", null, "First sentence: the conclusion. Good, slow, or at risk. One line tells them how much to care.", "Câu đầu là kết luận: tốt, đang chậm, hay có rủi ro. Đọc một câu là biết."),
        L("l2", null, "Then three lines: done, in progress and on time, and where you need help.", "Rồi ba dòng: đã xong, đang làm có đúng hạn không, cần sếp giúp gì."),
      ] },
    { id: "s11", module: "SCENE-02", ref: "p8",
      data: { set: "office", label: "Tin cập nhật tuần", actor: { id: "thao", side: "left" }, contact: { name: "Cô Hoa (sếp)", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Tuần này nhóm xong phần khảo sát, đúng hạn.", at: "l1" },
          { from: "me", text: "Phần báo giá chậm hai ngày vì chờ số liệu bên kho, em đã hẹn họ thứ Năm.", at: "l2" },
          { from: "me", text: "Em cần chị duyệt mẫu hợp đồng trước thứ Sáu ạ.", at: "l3" } ] },
      lines: [
        L("l1", "thao", "This week, we finished the survey, on time.", "Tuần này nhóm xong phần khảo sát, đúng hạn."),
        L("l2", "thao", "The quote is two days late, waiting for warehouse data. I booked them for Thursday.", "Báo giá chậm hai ngày vì chờ số liệu kho, em đã hẹn họ thứ Năm."),
        L("l3", "thao", "I need you to approve the contract template by Friday.", "Em cần chị duyệt mẫu hợp đồng trước thứ Sáu ạ."),
      ] },
    { id: "s12", module: "CMP-07", ref: "p9",
      data: { wrong: "The team worked very hard this week.", right: "We finished the survey on time.", diff: ["worked", "very", "hard"], note: "Cố gắng thật hiện ra qua việc cụ thể đã xong" },
      lines: [
        L("l1", null, "Talk in tasks and results. Not “The team worked very hard.”", "Nói bằng việc và kết quả. Không phải “Nhóm đã cố gắng rất nhiều”."),
        L("l2", null, "But “We finished the survey on time.” Mention the workload when you ask for support.", "Mà là “Nhóm xong phần khảo sát đúng hạn”. Khối việc thì nói khi xin hỗ trợ."),
      ] },

    // ---------- Phần 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 5, title: "Tin xấu" },
      lines: [L("l1", "det", "Part three: bad news. When, and how?", "Phần ba: có tin xấu thì báo lúc nào, báo ra sao?")] },
    { id: "s14", module: "CMP-01", ref: "p10",
      data: { labels: ["Báo khi rủi ro vừa có thật", "Đợi đến lúc chắc chắn hỏng"], left: "Sếp còn nhiều lựa chọn", right: "Chỉ còn hậu quả", illus: ["light-bulb", "collision"] },
      lines: [
        L("l1", null, "Report as soon as the risk is real. Do not wait until it surely fails.", "Báo ngay khi rủi ro có thật, đừng đợi đến lúc chắc chắn hỏng."),
        L("l2", null, "Early, there are options. Late, only consequences. A false alarm costs little.", "Báo sớm còn lựa chọn, báo muộn chỉ còn hậu quả. Báo nhầm cũng tốn ít."),
      ] },
    { id: "s15", module: "LIST-06", ref: "p11",
      data: { title: "Báo tin xấu theo thứ tự", steps: [
        { text: "Chuyện gì xảy ra", illus: "warning" },
        { text: "Ảnh hưởng đến đâu", illus: "chart-decreasing" },
        { text: "Nhóm đã làm gì", illus: "hammer-and-wrench" },
        { text: "Bạn đề xuất gì", illus: "light-bulb" },
        { text: "Cần sếp quyết điều gì", illus: "raising-hands" } ] },
      lines: [
        L("l1", null, "What happened, how far it reaches, and what the team has done.", "Chuyện gì xảy ra, ảnh hưởng đến đâu, nhóm đã làm gì."),
        L("l2", null, "Then your suggestion, and the decision you need. Now it is a choice, not a weight thrown on them.", "Rồi đề xuất, và điều cần sếp quyết. Tin xấu thành việc cần chọn, không phải gánh ném lên sếp."),
      ] },
    { id: "s16", module: "SCENE-02", ref: "p12",
      data: { set: "office", label: "Báo một rủi ro", actor: { id: "thao", side: "left" },
        contact: { name: "Cô Hoa (sếp)", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Em báo sớm một rủi ro: khách vừa đổi yêu cầu nên phần giao diện có thể trễ một tuần.", at: "l1" },
          { from: "me", text: "Em có hai cách: lùi hạn, hoặc bỏ bớt một tính năng. Em nghiêng về cách thứ hai.", at: "l2" },
          { from: "me", text: "Chị chọn giúp em trước chiều mai nhé.", at: "l3" } ] },
      lines: [
        L("l1", "thao", "An early risk: the client changed the request, so the design may be a week late.", "Em báo sớm một rủi ro: phần giao diện có thể trễ một tuần."),
        L("l2", "thao", "Two options: move the deadline, or drop one feature. I prefer the second.", "Hai cách: lùi hạn, hoặc bỏ bớt một tính năng. Em nghiêng về cách hai."),
        L("l3", "thao", "Please choose by tomorrow afternoon.", "Chị chọn giúp em trước chiều mai nhé."),
        L("l4", null, "A preferred option saves your manager time, and shows you thought it through.", "Nói cách mình nghiêng về giúp sếp đỡ mất thời gian, thấy bạn đã nghĩ kỹ."),
      ] },
    { id: "s17", module: "HOST-02", ref: "p13,p14",
      data: { statement: "Thấy dự án có thể trễ, cứ chờ đến thứ Sáu cho chắc rồi báo", truth: false,
        why: "Báo ngay, kèm hai phương án. Nói rõ đây là rủi ro, chưa chắc chắn.", kicker: "Tin xấu báo sớm còn cách, báo muộn chỉ còn lời xin lỗi" },
      lines: [
        L("l1", "det", "Monday, the project may be late. Overtime might save it. Wait until Friday to be sure. True or false?", "Thứ Hai thấy có thể trễ, làm thêm biết đâu kịp. Chờ thứ Sáu cho chắc. Đúng hay sai?"),
        L("l2", "det", "False. Tell now, with two options. Just say it is a risk, not certain yet.", "Sai. Báo ngay, kèm hai phương án. Nói rõ là rủi ro, chưa chắc chắn.", { face: "stern" }),
        L("l3", "det", "By Friday, your manager may have promised the client a date. Then only a sorry call is left.", "Đến thứ Sáu, sếp có khi đã hứa ngày giao với khách. Lúc đó chỉ còn gọi xin lỗi."),
        L("l4", "det", "What upsets managers is not the delay, but hearing too late.", "Điều làm sếp buồn không phải là trễ, mà là biết quá muộn."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s18", module: "HOST-03", data: { n: 4, of: 5, title: "Lỗi và công" },
      lines: [L("l1", "det", "Part four: back to Thao's answer.", "Phần bốn: quay lại câu trả lời của Thảo.")] },
    { id: "s19", module: "DLG-01", ref: "p15,p17,p18",
      data: { set: "office", label: "Tua lại",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Đổ lỗi cho thành viên trước sếp", why: "Sếp hỏi lại em đã làm gì, còn thành viên biết chuyện thì không tin trưởng nhóm nữa." } },
      lines: [
        L("l1", "thao", "It is because Dung is too slow with the data.", "Tại bạn Dũng làm phần số liệu chậm quá chị ạ.", { pose: "shrug", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Your manager will ask what you did. And Dung will only do his part, and stop trusting you.", "Sếp sẽ hỏi em đã làm gì. Còn Dũng chỉ làm đúng phần mình, hết tin trưởng nhóm."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l5", "thao", "Our team is two days late on the data. I have shared the work again.", "Nhóm em chậm phần số liệu hai ngày, em đã chia lại việc.", { phase: "redo", pose: "explain" }),
        L("l6", "thao", "You will get the full version on Thursday.", "Thứ Năm em gửi bản đủ ạ.", { phase: "redo", face: "happy" }),
        L("l7", "hoa", "Okay. Thursday.", "Ừ, thứ Năm nhé.", { phase: "redo", face: "neutral" }),
        L("l8", "det", "Outside the team, share the blame. Inside, talk one to one.", "Ra ngoài nhận chung, vào trong mới bàn riêng.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s20", module: "SCENE-01", ref: "p16",
      data: { set: "office", label: "Sếp hỏi nguyên nhân", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "hoa", "Why exactly was that part late?", "Phần đó chậm cụ thể vì sao em?", { face: "thinking", to: "thao" }),
        L("l2", "thao", "The data part was missing. I have shared the work again, so it will not repeat.", "Phần số liệu bị thiếu. Em đã chia lại việc để không lặp lại ạ.", { pose: "explain", to: "hoa" }),
        L("l3", null, "Talk about the work, not a name: what was missing, why, and what you changed.", "Nói về việc, không bêu tên: phần nào thiếu, vì sao, đã đổi gì."),
        L("l4", null, "Someone still not improving after help? That is a private talk with your manager.", "Một người đã được giúp mà vẫn không cải thiện? Đó là chuyện trao đổi riêng với sếp."),
      ] },
    { id: "s21", module: "SCENE-01", ref: "p15",
      data: { set: "office", label: "Nói riêng với Dũng", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "center" }] },
      lines: [
        L("l1", "dung", "Did you tell the boss it was my fault?", "Chị có nói với sếp là lỗi của em không?", { face: "worried" }),
        L("l2", "thao", "No. I reported it as a team delay. Now, what is blocking you?", "Không. Chị báo là nhóm chậm. Giờ mình xem em đang vướng ở đâu nhé.", { pose: "hold", react: { dung: "happy" } }),
        L("l3", null, "Who made the mistake, and how to fix it, is handled inside the team.", "Ai sai, sửa thế nào, là việc xử lý trong nhóm."),
      ] },
    { id: "s22", module: "SCENE-01", ref: "p19,p20",
      data: { set: "office", label: "Tin tốt", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "Good news? Report it too, with the names of the people who did it.", "Tin tốt cũng báo, kèm tên người làm được."),
        L("l2", "thao", "The client approved the quote the first time, mainly because Lan checked the numbers carefully.", "Khách duyệt báo giá ngay lần đầu, chủ yếu nhờ bạn Lan rà số liệu rất kỹ.", { face: "happy", pose: "explain", to: "hoa" }),
        L("l3", "hoa", "Good to know.", "Tốt quá, chị ghi nhận.", { face: "happy", to: "thao" }),
        L("l4", null, "A leader is judged by the whole team's results. Giving credit does not make you look smaller.", "Trưởng nhóm được đánh giá qua kết quả cả nhóm. Ghi công cho người khác không làm bạn mờ đi."),
      ] },
    { id: "s23", module: "CMP-02", ref: "p21,p22",
      data: { title: "Email báo dự án xong", before: "“Em đã hoàn thành dự án đúng hạn.”", after: "“Nhóm em đã hoàn thành đúng hạn. Bạn Lan rà toàn bộ số liệu.”", illusBefore: "pensive-face", illusAfter: "smiling-face-with-smiling-eyes" },
      lines: [
        L("l1", null, "“I finished the project.” A member's month of extra work vanishes in that “I”, and she stops volunteering.", "“Em đã hoàn thành dự án.” Một tháng làm thêm biến mất trong chữ “em”, bạn ấy thôi xung phong."),
        L("l2", null, "“My team finished. Lan checked all the data.” Praised? Name who did the key parts.", "“Nhóm em hoàn thành. Bạn Lan rà số liệu.” Được khen? Nêu tên người làm phần chính."),
      ] },

    // ---------- Phần 5 ----------
    { id: "s24", module: "HOST-03", data: { n: 5, of: 5, title: "Chưa biết, việc thêm" },
      lines: [L("l1", "det", "Last part: you do not know yet, or the team is already full.", "Phần cuối: khi chưa biết, hay khi nhóm đã kín việc.")] },
    { id: "s25", module: "SCENE-01", ref: "p23",
      data: { set: "office", label: "Câu hỏi bất ngờ", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "hoa", "How many customers replied to the survey?", "Bao nhiêu khách đã trả lời khảo sát em?", { to: "thao" }),
        L("l2", "thao", "I am not sure. I will check and reply before three this afternoon.", "Em chưa chắc, em kiểm tra và trả lời chị trước ba giờ chiều nay ạ.", { pose: "hold", to: "hoa" }),
        L("l3", null, "Do not guess. A wrong guess leads to wrong decisions, and hurts trust more than “not sure yet”.", "Đừng đoán. Đoán sai dẫn đến quyết sai, mất lòng tin hơn câu “em chưa biết”."),
      ] },
    { id: "s26", module: "SCENE-01", ref: "p24",
      data: { set: "office", label: "Thêm việc", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "hoa", "Can your team take this new task?", "Nhóm em nhận thêm việc này được không?", { pose: "explain", to: "thao" }),
        L("l2", "thao", "We are working on these two now. If we take the new one, which should I move back?", "Nhóm đang làm hai việc này. Nếu nhận thêm, chị muốn em lùi việc nào ạ?", { pose: "explain", to: "hoa" }),
        L("l3", null, "Do not take it all and then be late on everything. Show the load, and ask for the priority.", "Đừng nhận hết rồi trễ cả. Nói rõ tình hình, hỏi thứ tự ưu tiên."),
      ] },
    { id: "s27", module: "SCENE-02", ref: "p25",
      data: { set: "office", label: "Chốt lại", actor: { id: "thao", side: "left" }, contact: { name: "Cô Hoa (sếp)", illus: "woman-office-worker" },
        messages: [{ from: "me", text: "Em tóm lại buổi trao đổi: nhóm nhận việc mới, lùi một việc sang tuần sau như chị đã chọn.", at: "l2" }, { from: "them", text: "Đúng rồi em.", at: "l3" }] },
      lines: [
        L("l1", "thao", "After an important decision, send a short summary.", "Sau buổi có quyết định quan trọng, gửi lại một tin tóm tắt.", { face: "thinking" }),
        L("l2", "thao", "To sum up: we take the new task, and move one task to next week, as you chose.", "Em tóm lại: nhóm nhận việc mới, lùi một việc sang tuần sau như chị đã chọn."),
        L("l3", "them", "That is right.", "Đúng rồi em."),
        L("l4", null, "You both understand it the same way, and can check it later.", "Hai bên hiểu giống nhau, sau này có chỗ xem lại."),
      ] },
    { id: "s28", module: "LIST-09", ref: "p26",
      data: { title: "Trước mỗi lần báo cáo", illus: "clipboard", keywords: [
        { text: "Thống nhất nhịp báo", illus: "spiral-calendar" }, { text: "Kết luận lên đầu", illus: "index-pointing-up" },
        { text: "Tin xấu báo sớm, kèm đề xuất", illus: "alarm-clock" }, { text: "Nhận trách nhiệm chung", illus: "shield" },
        { text: "Tin tốt gọi tên người", illus: "trophy" }, { text: "Chưa biết thì hẹn giờ", illus: "stopwatch" },
        { text: "Chốt lại bằng tin nhắn", illus: "mobile-phone" } ] },
      lines: [
        L("l1", null, "Agree the rhythm. Conclusion first. Bad news early, with a plan. Share the blame.", "Thống nhất nhịp. Kết luận lên đầu. Tin xấu báo sớm, kèm đề xuất. Nhận chung."),
        L("l2", null, "Good news with names. Not sure? Give a time. And confirm in a message.", "Tin tốt gọi tên. Chưa biết thì hẹn giờ. Chốt lại bằng tin nhắn."),
      ] },

    { id: "s29", module: "END-02", ref: "outro",
      data: { points: ["Báo đều, kết luận lên đầu", "Tin xấu báo sớm, kèm đề xuất", "Lỗi nhận về mình, công gọi tên người"], icons: ["memo", "alarm-clock", "trophy"] },
      lines: [
        L("l1", null, "A good report is not about looking perfect. It means your manager is never surprised.", "Báo cáo tốt không để tỏ ra hoàn hảo, mà để sếp không bao giờ bị bất ngờ."),
        L("l2", null, "This week, write your update in three lines: done, in progress, need help.", "Tuần này, viết tin cập nhật ba dòng: đã xong, đang làm, cần giúp."),
      ] },
    { id: "s30", module: "QUIZ-01", ref: "questions[21]",
      data: {
        q: "Which saying sums up the difference between the two emails?",
        options: [
          "Keep both blame and credit vague, so nobody feels upset",
          "Take the blame yourself, and give the credit by name",
          "Take the credit yourself, and share the blame with everyone",
        ],
        correct: 1, countdown: 5, illus: "envelope-with-arrow",
        why: "Lỗi thì nhận về mình, công thì gọi tên người.",
      },
      lines: [
        L("l1", null, "Which saying sums up the difference between the two emails?", "Câu nào tóm tắt điểm khác giữa hai email?"),
        L("l2", null, "Take the blame yourself, and give the credit by name.", "Lỗi thì nhận về mình, công thì gọi tên người."),
        L("l3", null, "That is how a team learns to trust its leader.", "Đó là cách nhóm tin người dẫn mình."),
      ],
      beats: { after: 600 } },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Báo cáo cả tin tốt lẫn tin xấu" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.", { face: "happy" })] },
  ],
};
