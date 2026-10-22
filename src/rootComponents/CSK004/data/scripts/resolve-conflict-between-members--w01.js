// Kịch bản video W lần 3 (#110) — "Giải quyết mâu thuẫn giữa hai thành viên trong nhóm" · chuỗi "Lần đầu làm trưởng nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "resolve-conflict-between-members--w01",
  hook: "HOOK-15",
  loop: { open: "s01", close: "s26" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "first-time-team-leaders", slug: "resolve-conflict-between-members", door: "ky-nang", level: "B1",
    title: "Giải quyết mâu thuẫn giữa hai thành viên trong nhóm", series: "Lần đầu làm trưởng nhóm" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Nam (p4), Lộc (p25), “bạn” (trưởng nhóm) → Thảo; hai thành viên căng thẳng → Lan và Dũng. Vai mới (#110): bài không có trẻ con, bà cụ, người nước ngoài → không dùng (thành viên khác hỏi chuyện ở p24 để trên thẻ CMP-06, không thêm nhân vật). Khuôn cái giá của bước bị bỏ qua: thiệt hại có thật trong 📌 p4; câu treo “Thảo đã bỏ qua bước nào?” trả lời ở s07. Hai câu “Mình ngồi bàn này” / “Tuỳ cậu” dựng từ “giờ ăn trưa ngồi hai bàn, tin nhắn cộc lốc”. Cảnh mở đầu nay chỉ có Lan và Dũng, để cảnh ba người duy nhất là buổi ngồi chung s18 (p16–p18). DLG-01 s10 dựng từ ✍️ p9; SCENE-03 s17 từ 🔀 p20 (“Đâu phải lỗi em” dựng từ “thủ thế, đổ lỗi qua lại”); LIST-06 s14 theo 🧪 p14. Lời Dũng ở s18 (“phải chờ bản nháp nên bị trễ”) lấy từ câu tóm mẫu p18. Thoả thuận ở SCENE-02 s19 dựng theo cách chia của p14. Phủ ý: 29/29.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p4",
      data: { set: "cafe", label: "Giờ ăn trưa", actors: [{ id: "lan", side: "center" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "Two teammates go cold. Thao, the leader, thinks it is private, and lets it go.", "Hai bạn lạnh nhạt với nhau. Thảo, trưởng nhóm, nghĩ là chuyện riêng nên lờ đi."),
        L("l2", "lan", "I will sit at this table.", "Mình ngồi bàn này.", { face: "stern", to: "dung" }),
        L("l3", "dung", "Suit yourself.", "Tuỳ cậu.", { face: "stern", pose: "cross", to: "lan", react: { lan: "sad" } }),
        L("l4", null, "Two months later, one asks to move teams. Which step did Thao skip?", "Hai tháng sau, một bạn xin chuyển nhóm. Thảo đã bỏ qua bước nào?", { wait: 300 }),
      ],
      beats: { after: 700 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Gỡ mâu thuẫn trong nhóm", pose: "present", items: ["Vào cuộc sớm", "Nghe riêng, chưa phán", "Tìm gốc ở công việc", "Ngồi chung, hẹn xem lại"] },
      lines: [
        L("l1", "det", "Two members in conflict. How do you fix it, without being a judge?", "Hai thành viên mâu thuẫn. Gỡ thế nào mà không làm trọng tài?"),
        L("l2", "det", "Step in early.", "Vào cuộc sớm."),
        L("l3", "det", "Listen to each person, without judging.", "Nghe riêng từng người, chưa phán xét."),
        L("l4", "det", "Look for the cause in the work.", "Tìm gốc ở công việc."),
        L("l5", "det", "Then meet together, and check again later.", "Rồi ngồi chung, và hẹn xem lại."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Năm phần của video", pose: "point", items: ["Khi nào vào cuộc", "Nghe riêng từng người", "Tìm gốc ở công việc", "Ngồi chung ba người", "Sau đó, và khi quá sức"] },
      lines: [
        L("l1", "det", "When to step in.", "Một: khi nào vào cuộc."),
        L("l2", "det", "Listening to each person.", "Hai: nghe riêng từng người."),
        L("l3", "det", "The cause in the work.", "Ba: tìm gốc ở công việc."),
        L("l4", "det", "The meeting for three.", "Bốn: ngồi chung ba người."),
        L("l5", "det", "Afterwards, and when it is too big.", "Năm: sau đó, và khi vượt sức mình."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 5, title: "Khi nào vào cuộc" },
      lines: [L("l1", "det", "Part one: should you step in at all?", "Phần một: chuyện này mình có nên can thiệp không?")] },
    { id: "s05", module: "HOST-02", ref: "p1",
      data: { statement: "Hai người tranh luận về cách làm là trưởng nhóm phải can ngay", truth: false, why: "Nói thẳng rồi tìm được hướng chung là bình thường, còn giúp việc tốt hơn." },
      lines: [
        L("l1", "det", "Two members argue about how to do a task. You must step in at once. True or false?", "Hai người tranh luận về cách làm, trưởng nhóm phải can ngay. Đúng hay sai?"),
        L("l2", "det", "False. Open debate that ends in a shared plan is normal, and can improve the work.", "Sai. Nói thẳng rồi tìm được hướng chung là bình thường, còn giúp việc tốt hơn.", { face: "happy" }),
      ] },
    { id: "s06", module: "LIST-02", ref: "p2",
      data: { title: "Thấy một dấu hiệu là vào cuộc", illus: "warning", items: [
        { icon: "message-circle", illus: "speech-balloon", text: "Nhắn nhau qua người khác" },
        { icon: "hourglass", illus: "hourglass-not-done", text: "Việc chung bị chậm" },
        { icon: "users", illus: "busts-in-silhouette", text: "Người thứ ba phải chọn phe" },
        { icon: "user-x", illus: "face-with-steam-from-nose", text: "Chuyện việc thành chuyện người" } ] },
      lines: [
        L("l1", null, "But step in if they avoid each other and send messages through others, or shared work slows down.", "Nhưng vào cuộc khi hai người nhắn qua người khác, hoặc việc chung chậm lại."),
        L("l2", null, "Or a third person must choose a side, or talk moves from the work to the person.", "Hay người thứ ba phải chọn phe, hoặc chuyện việc thành chuyện người."),
      ] },
    { id: "s07", module: "REL-02", ref: "p3,p4,p5",
      data: { chain: ["Lạnh nhạt, nghĩ là chuyện riêng nên lờ đi", "Hai tháng sau, nhóm chia hai phe", "Một bạn xin chuyển nhóm"], illus: ["see-no-evil-monkey", "busts-in-silhouette", "door"] },
      lines: [
        L("l1", null, "Thao skipped the first step: stepping in early. Conflicts rarely fade. They grow and pull others in.", "Thảo bỏ qua bước đầu: vào cuộc sớm. Mâu thuẫn hiếm khi tự hết, nó lớn dần, kéo thêm người."),
        L("l2", null, "“None of your business”? Say calmly that it now affects shared work, and you want to help.", "Bị bảo “không phải việc của chị”? Bình tĩnh nói nó đã ảnh hưởng việc chung, mình muốn giúp."),
        L("l3", null, "Talk about small conflicts early, or they grow into a team split in two.", "Mâu thuẫn nhỏ nói sớm, để lâu thành chia phe."),
      ] },

    // ---------- Phần 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 5, title: "Nghe riêng từng người" },
      lines: [L("l1", "det", "Part two: talking to each person alone.", "Phần hai: nói chuyện riêng với từng người.")] },
    { id: "s09", module: "SCENE-01", ref: "p6,p7",
      data: { set: "office", label: "Gặp riêng Dũng", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "Meet each person alone first, so each can speak freely. Say why you are there.", "Gặp riêng từng người trước, để ai cũng nói được thoải mái. Nói rõ mục đích."),
        L("l2", "thao", "I see the work between you two is stuck. I would like to hear your side first.", "Chị thấy việc giữa hai em đang vướng, chị muốn nghe em kể trước.", { pose: "hold" }),
        L("l3", "thao", "When did it start? What upsets you most? How would you like things to change?", "Chuyện bắt đầu từ lúc nào? Điều gì làm em khó chịu nhất? Em mong thay đổi thế nào?", { pose: "explain", react: { dung: "thinking" } }),
        L("l4", null, "Open questions get the full story, not just yes or no.", "Câu hỏi mở giúp người kia kể đủ, không chỉ có hay không."),
      ] },
    { id: "s10", module: "DLG-01", ref: "p8,p9,p10",
      data: { set: "office", label: "Gặp riêng Lan",
        actors: [{ id: "thao", side: "left" }, { id: "lan", side: "center" }],
        verdict: { ok: false, label: "Gật đầu với người kể trước", why: "Người kể có thể nói với cả nhóm là trưởng nhóm đứng về phía mình." } },
      lines: [
        L("l1", "lan", "So that is my side of the story.", "Chuyện là vậy đó chị.", { face: "sad", pose: "explain" }),
        L("l2", "thao", "Yes, that is really not okay.", "Ừ, vậy thì không ổn thật.", { face: "stern", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "That sounds like agreement. Dung has not said a word, and already looks treated unfairly.", "Nghe như đồng ý. Dũng chưa kịp nói câu nào đã thấy bị thiên vị."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "thao", "I understand you are really upset. I will hear Dung too, then we find a way.", "Chị hiểu em đang rất bực. Chị nghe thêm Dũng rồi mới bàn cách gỡ.", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l7", "lan", "Okay. Thank you for listening.", "Dạ, cảm ơn chị đã nghe em.", { phase: "redo", face: "happy" }),
        L("l8", "det", "Just listen and take notes. No verdict, no promises. Hear both sides first.", "Chỉ nghe và ghi lại, chưa phán, chưa hứa. Nghe đủ hai phía rồi mới nói.", { phase: "redo", face: "happy" }),
      ] },

    // ---------- Phần 3 ----------
    { id: "s11", module: "HOST-03", data: { n: 3, of: 5, title: "Tìm gốc ở công việc" },
      lines: [L("l1", "det", "Part three: where is the root of the conflict?", "Phần ba: gốc của mâu thuẫn nằm ở đâu?")] },
    { id: "s12", module: "LIST-01", ref: "p11",
      data: { title: "Gốc thường nằm ở công việc", items: ["Hai người được giao chồng lên nhau", "Hạn chót người này đè lên người kia", "Một người phải chờ kết quả người kia"],
        illus: "puzzle-piece", icons: ["counterclockwise-arrows-button", "alarm-clock", "hourglass-not-done"] },
      lines: [
        L("l1", null, "Many conflicts come from the work, not personality: overlapping tasks, clashing deadlines, waiting on each other.", "Nhiều mâu thuẫn đến từ công việc: giao chồng, hạn đè nhau, người này chờ người kia."),
        L("l2", null, "“He is impossible to work with”? Ask for one example of when the work got stuck.", "Nghe “không làm nổi với bạn ấy”? Hỏi một ví dụ cụ thể lúc việc bị kẹt."),
      ] },
    { id: "s13", module: "TEXT-04", ref: "p12",
      data: { text: "Cả hai đều muốn việc xong và xong tốt; chỉ khác cách làm hoặc thứ tự làm.", marks: ["xong tốt"], illus: "handshake" },
      lines: [L("l1", null, "Put the two stories side by side. Usually both want good work. They differ in method or order.", "Đặt hai câu chuyện cạnh nhau. Thường cả hai đều muốn việc tốt, chỉ khác cách làm, thứ tự.")] },
    { id: "s14", module: "LIST-06", ref: "p13,p14",
      data: { title: "Hai bạn đều bực vì người kia “giành việc”", steps: [
        { text: "Nghe riêng: cả hai lo phần thiết kế cho cùng một khách", illus: "ear" },
        { text: "Xem lại tin nhắn: trưởng nhóm giao trùng", illus: "mobile-phone" },
        { text: "Nhận rằng lời giao chưa rõ", illus: "handshake" },
        { text: "Chia lại: một người bản trình bày, một người hình ảnh", illus: "scissors" } ] },
      lines: [
        L("l1", null, "Both say they handle the design for the same client. The message shows: the leader asked both.", "Cả hai nói đang lo thiết kế cho cùng khách. Tin nhắn cho thấy: trưởng nhóm nhờ cả hai."),
        L("l2", null, "So the leader admits it first: “I did not assign this clearly, so you got tangled.”", "Trưởng nhóm nhận trước: “Phần này mình giao chưa rõ nên hai bạn mới vướng nhau.”"),
        L("l3", null, "Then splits it: one does the slides, one does the images. Each decides their own part.", "Rồi chia lại: một người bản trình bày, một người hình ảnh, ai tự quyết phần nấy."),
      ] },
    { id: "s15", module: "TEXT-01", ref: "p15",
      data: { text: "Gỡ việc chồng chéo, người tự hết căng.", illus: "puzzle-piece" },
      lines: [L("l1", null, "Untangle overlapping work, and the tension often fades by itself.", "Gỡ việc chồng chéo, người tự hết căng.")] },

    // ---------- Phần 4 ----------
    { id: "s16", module: "HOST-03", data: { n: 4, of: 5, title: "Ngồi chung ba người" },
      lines: [L("l1", "det", "Part four: the three of you, together.", "Phần bốn: ngồi chung ba người, giữ sao cho êm.")] },
    { id: "s17", module: "SCENE-03", ref: "p20,p21",
      data: { set: "meeting", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }],
        left: { label: "Mở bằng lời trách", ok: false }, right: { label: "Mở bằng điểm chung", ok: true } },
      lines: [
        L("a1", "thao", "You two are wearing the whole team out.", "Hai bạn làm cả nhóm mệt mỏi lắm rồi đấy.", { phase: "a", face: "stern", pose: "point" }),
        L("a2", "dung", "But it is not my fault!", "Nhưng đâu phải lỗi em!", { phase: "a", face: "stern", pose: "cross" }),
        L("b1", "thao", "You both want this project on time and the client happy. Let's find a way to split the work.", "Cả hai đều muốn dự án đúng hạn, khách hài lòng. Mình cùng tìm cách chia việc nhé.", { phase: "b", pose: "explain", face: "happy" }),
        L("b2", "dung", "Okay. Let's try.", "Dạ, mình thử nhé.", { phase: "b", face: "happy" }),
        L("l1", null, "Way A opens with blame: both defend themselves from the first minute.", "Cách A mở bằng lời trách: cả hai thủ thế ngay phút đầu."),
        L("l2", null, "Begin with what you share. Never begin with blame.", "Mở bằng điểm chung, đừng mở bằng lời trách."),
      ] },
    { id: "s18", module: "SCENE-01", ref: "p16,p17,p18",
      data: { set: "meeting", label: "Ngồi chung", actors: [{ id: "thao", side: "left" }, { id: "lan", side: "center", enter: "walk", at: "l2" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "thao", "Today we are not looking for who is right. We are finding a way for the work to run.", "Hôm nay mình không tìm ai đúng ai sai, mình tìm cách để việc chạy.", { pose: "explain" }),
        L("l2", "thao", "One person finishes before the other speaks. Talk about specific work. No old stories.", "Một người nói xong mới đến người kia. Nói việc cụ thể. Không lôi chuyện cũ.", { pose: "explain" }),
        L("l3", "dung", "I had to wait for the draft, so I was late.", "Em phải chờ bản nháp nên bị trễ.", { pose: "explain", to: "thao" }),
        L("l4", "thao", "So you mean you had to wait for the draft, and that made you late, right?", "Ý em là phải chờ bản nháp nên bị trễ, đúng không?", { face: "thinking", to: "dung", react: { lan: "thinking" } }),
        L("l5", null, "Sum up each view, so they feel heard. If it turns to the person, gently steer back to the work.", "Tóm lại lời mỗi người. Lạc sang chê con người thì nhẹ nhàng kéo về việc."),
      ] },
    { id: "s19", module: "SCENE-02", ref: "p19",
      data: { set: "office", label: "Thoả thuận", actor: { id: "thao", side: "left" }, contact: { name: "Lan, Dũng", illus: "busts-in-silhouette" },
        messages: [
          { from: "me", text: "Chị ghi lại: Lan lo bản trình bày, Dũng lo hình ảnh.", at: "l2" },
          { from: "me", text: "Lan gửi nháp cho Dũng trước khi Dũng làm hình. Vướng thì báo chị ngay.", at: "l3" } ] },
      lines: [
        L("l1", "thao", "End with a clear agreement, written and sent to both.", "Kết thúc bằng thoả thuận rõ, ghi lại, gửi cho cả hai.", { face: "thinking" }),
        L("l2", "thao", "Lan does the slides. Dung does the images.", "Lan lo bản trình bày, Dũng lo hình ảnh."),
        L("l3", "thao", "Lan sends the draft before Dung starts. If stuck, tell me.", "Lan gửi nháp trước khi Dũng làm hình. Vướng thì báo chị."),
        L("l4", null, "Who does what, when work is handed over, and who to tell. Both remember the same thing.", "Ai làm phần nào, chuyển việc lúc nào, vướng báo ai. Hai người nhớ giống nhau."),
      ] },

    // ---------- Phần 5 ----------
    { id: "s20", module: "HOST-03", data: { n: 5, of: 5, title: "Sau đó, và khi quá sức" },
      lines: [L("l1", "det", "Last part: after the meeting, and when it is too big for you.", "Phần cuối: sau buổi nói chuyện, và khi chuyện vượt sức mình.")] },
    { id: "s21", module: "STORY-01", ref: "p22,p25,p26",
      data: { context: "Sau buổi nói chuyện, hai bạn vui vẻ trở lại. Thảo yên tâm, không hỏi thêm.", action: "Ba tuần sau, một bạn lặng lẽ xin nghỉ.", outcome: "“Thoả thuận chỉ đúng được tuần đầu thôi chị.”",
        illus: ["handshake", "spiral-calendar", "door"] },
      lines: [
        L("l1", null, "After the meeting, they seem happy again. Thao stops asking.", "Sau buổi nói chuyện, hai bạn vui vẻ lại. Thảo yên tâm, không hỏi thêm."),
        L("l2", null, "Three weeks later, one quietly quits: “The deal only lasted the first week.”", "Ba tuần sau, một bạn lặng lẽ xin nghỉ: “Thoả thuận chỉ đúng tuần đầu thôi.”"),
        L("l3", null, "So check again in one or two weeks. Ask each person privately how it is going.", "Vậy nên một hai tuần sau, hỏi riêng từng người thoả thuận chạy thế nào."),
        L("l4", null, "One handshake is a start. Keep following up for a few weeks.", "Bắt tay một buổi, theo dõi vài tuần."),
      ] },
    { id: "s22", module: "CMP-01", ref: "p23",
      data: { labels: ["Mục tiêu không thực tế", "Mục tiêu thực tế"], left: "Hai người thành bạn thân", right: "Làm việc được với nhau, tôn trọng nhau, việc chung không chậm", illus: ["two-hearts", "handshake"] },
      lines: [L("l1", null, "The goal is not best friends. It is working together with respect, and no delays.", "Mục tiêu không phải thành bạn thân, mà là làm việc được, tôn trọng nhau, việc không chậm.")] },
    { id: "s23", module: "CMP-06", ref: "p24",
      data: { do: ["Nói “chuyện đang được xử lý”", "Giữ kín chi tiết"], dont: ["Kể cho người ngoài nhóm", "Bàn tán với thành viên khác"],
        doIcons: ["shield", "locked"], dontIcons: ["loudspeaker", "speech-balloon"] },
      lines: [
        L("l1", null, "Another member asks what happened? Say politely it is being handled. Keep the details private.", "Thành viên khác hỏi chuyện? Lịch sự nói đang được xử lý, giữ kín chi tiết."),
        L("l2", null, "Keeping it private keeps the trust of both people.", "Giữ kín là giữ lòng tin của cả hai người."),
      ] },
    { id: "s24", module: "LIST-13", ref: "p27,p28",
      data: { title: "Khi chuyện vượt sức mình", items: [
        { title: "Xúc phạm, quấy rối, đe doạ", detail: "Báo cấp trên hoặc nhân sự theo quy định công ty.", illus: "warning" },
        { title: "Đã thử nhiều lần vẫn nặng", detail: "Nhờ sếp hoặc nhân sự, kể những gì đã thử.", illus: "raising-hands" },
        { title: "Một người là bạn thân cũ", detail: "Nói rõ mình xử theo công việc; khó công bằng thì nhờ sếp ngồi cùng.", illus: "balance-scale" } ] },
      lines: [
        L("l1", null, "Insults, harassment, threats? Do not handle it alone. Report to your manager or HR.", "Xúc phạm, quấy rối, đe doạ? Không tự xử. Báo cấp trên hoặc nhân sự."),
        L("l2", null, "Keeps coming back? Ask for help, and share what you tried.", "Đã thử mà vẫn lặp lại? Nhờ giúp, kể những gì đã thử."),
        L("l3", null, "An old friend involved? “I am on the side of the work.” Hard to be fair? Ask your manager to join.", "Có bạn thân cũ? “Chị đứng về phía công việc.” Khó công bằng thì nhờ sếp ngồi cùng."),
      ] },
    { id: "s25", module: "LIST-09", ref: "p29",
      data: { title: "Khi nhóm có mâu thuẫn", illus: "clipboard", keywords: [
        { text: "Nhận ra dấu hiệu sớm", illus: "eyes" }, { text: "Gặp riêng từng người", illus: "busts-in-silhouette" },
        { text: "Chỉ nghe, chưa phán", illus: "ear" }, { text: "Tìm gốc ở công việc", illus: "puzzle-piece" },
        { text: "Ngồi chung, mở bằng điểm chung", illus: "handshake" }, { text: "Thoả thuận ghi lại", illus: "memo" },
        { text: "Hẹn xem lại", illus: "spiral-calendar" }, { text: "Biết khi nào báo lên", illus: "raising-hands" } ] },
      lines: [
        L("l1", null, "Notice early. Meet each alone. Listen, do not judge. Find the cause in the work.", "Nhận ra sớm. Gặp riêng từng người. Chỉ nghe, chưa phán. Tìm gốc ở việc."),
        L("l2", null, "Meet together with a shared goal. Write it down. Follow up. Know when to report.", "Ngồi chung, mở bằng điểm chung. Ghi thoả thuận. Hẹn xem lại. Biết khi nào báo lên."),
      ] },

    { id: "s26", module: "END-01", ref: "outro",
      data: { takeaway: "Không làm trọng tài, giúp hai người nhìn cùng một mục tiêu.", marks: ["cùng một mục tiêu"], illus: "bullseye" },
      lines: [
        L("l1", null, "You are not a referee. You help two people see one goal, with a clear way of working.", "Bạn không phải trọng tài. Bạn giúp hai người nhìn cùng một mục tiêu, có cách làm rõ ràng."),
        L("l2", null, "Two people avoiding each other? This week, book a private talk with the first one.", "Nhóm có hai người tránh mặt nhau? Tuần này, hẹn nói riêng với người thứ nhất."),
      ] },
    { id: "s27", module: "QUIZ-01", ref: "questions[10]",
      data: {
        q: "Where do many team conflicts really come from?",
        options: [
          "Mostly bad personalities, so the only fix is to replace one of the people",
          "Mostly the weather and stress at home, which a leader can never affect",
          "Overlapping tasks, clashing deadlines, or one person waiting on another person's work",
        ],
        correct: 2, countdown: 5, illus: "puzzle-piece",
        why: "Việc giao chồng hoặc phải chờ nhau thì sửa được bằng cách sắp lại việc.",
      },
      lines: [
        L("l1", null, "Where do many team conflicts really come from?", "Nhiều mâu thuẫn trong nhóm thực ra bắt nguồn từ đâu?"),
        L("l2", null, "Overlapping tasks, clashing deadlines, or one person waiting on another person's work.", "Việc giao chồng, hạn đè nhau, hoặc người này chờ việc người kia."),
        L("l3", null, "You can fix those by rearranging the work.", "Những chuyện đó sửa được bằng cách sắp lại việc."),
      ],
      beats: { after: 600 } },
    { id: "s28", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Gỡ mâu thuẫn trong nhóm" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.", { face: "happy" })] },
  ],
};
