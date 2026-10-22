// Kịch bản video W lần 3 (#110) — "Kỹ năng lắng nghe chủ động trong công việc" · chuỗi "Giao tiếp nơi công sở"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "active-listening-skills-at-work--w01",
  hook: "HOOK-14",
  loop: { open: "s01", close: "s22" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "office-communicators", slug: "active-listening-skills-at-work", door: "ky-nang", level: "B1",
    title: "Kỹ năng lắng nghe chủ động trong công việc", series: "Giao tiếp nơi công sở" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Na → Thảo; đối tác (p15) → Sam (vai mới, đối tác gọi trực tuyến; lần 2 là Bác Bình); Thành → Dũng; chị Thu → Cô Hoa; khách phàn nàn giao trễ (p17) → Bác Bình; đồng nghiệp bị khách mắng (p19) → Dũng. “Anh Hùng” trong câu tóm tắt mẫu p14 giữ nguyên chữ của bài (không lên hình). Vai mới: Sam. Phủ ý: 23/23. Bài có 7 mục; gộp “khác nghe bình thường ở đâu” và “vì sao hay nghe sót” thành chương 1 (6 chương). Chuyện Thảo bỏ lửng ở s01, đóng ở s19 (p15, p16). Hai DLG: s08 (nghĩ sẵn lời đáp, p3–p5) và s22 (vội khuyên, p19, p20). Khách gọi ở s12 không lên hình. Lời “Thôi, mình bình tĩnh nói tiếp” của Bác Bình ở s21 là lời trung lập dựng theo p18. Câu đố: questions[11].",
  scenes: [
    // ── Mở đầu: chuyện bỏ lửng
    { id: "s01", module: "SCENE-01", ref: "p15",
      data: { set: "online", label: "Cuối cuộc gọi", actors: [{ id: "thao", side: "left" }, { id: "sam", side: "right" }], props: ["package"] },
      lines: [
        L("l1", null, "Thảo is on a call with a partner, Sam, about a packaging order.", "Thảo trao đổi với đối tác Sam về một đơn bao bì."),
        L("l2", "thao", "So we'll order five hundred boxes, delivered on Thursday. Okay?", "Vậy bên em đặt năm trăm hộp, giao thứ Năm, anh nhé.", { pose: "explain", face: "happy" }),
        L("l3", null, "On the other end, a second of silence…", "Đầu bên kia lặng đi một giây…", { wait: 300 }),
      ], beats: { after: 700 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Nghe thế nào để hiểu đúng?", pose: "present",
        items: ["Gác việc khác", "Nghe hết câu", "Hỏi để làm rõ", "Nhắc lại, tóm tắt"] },
      lines: [
        L("l1", "det", "We'll come back to that silence. Most misunderstandings come from how we listen. So how do you really listen?", "Lát nữa quay lại khoảng lặng ấy. Hiểu lầm thường đến từ cách nghe. Vậy nghe thế nào?"),
        L("l2", "det", "Put other work aside.", "Gác việc khác."),
        L("l3", "det", "Hear the whole sentence.", "Nghe hết câu, đừng ngắt lời."),
        L("l4", "det", "Ask to make things clear.", "Hỏi để làm rõ."),
        L("l5", "det", "Then repeat and sum up.", "Rồi nhắc lại và tóm tắt."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng lắng nghe", chapters: [
        { label: "Nghe chủ động, nghe sót", illus: "ear" },
        { label: "Cho người nói thấy mình nghe", illus: "eyes" },
        { label: "Hỏi cho rõ", illus: "red-question-mark" },
        { label: "Nhắc lại, tóm tắt", illus: "memo" },
        { label: "Nghe cả cảm xúc", illus: "red-heart" },
        { label: "Điện thoại, họp trực tuyến", illus: "telephone-receiver" } ] },
      lines: [
        L("l1", null, "Six parts: what active listening is, showing you listen, asking,", "Sáu phần: nghe chủ động là gì, cho thấy mình nghe, hỏi,"),
        L("l2", null, "repeating and summing up, feelings, and calls or online meetings.", "nhắc lại và tóm tắt, cảm xúc, điện thoại và họp trực tuyến."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Nghe chủ động, vì sao nghe sót" },
      lines: [L("l1", "det", "Part one: active listening, and why we miss things.", "Phần một: nghe chủ động khác gì, vì sao hay nghe sót?")] },
    { id: "s05", module: "CMP-01", ref: "p1",
      data: { labels: ["Nghe bình thường", "Lắng nghe chủ động"], left: "Để âm thanh đi vào tai", right: "Chủ động kiểm tra mình hiểu đúng chưa: hỏi lại, nhắc lại, tóm tắt", illus: ["ear", "magnifying-glass-tilted-left"] },
      lines: [
        L("l1", null, "Hearing is letting sound into your ears.", "Nghe bình thường là để âm thanh đi vào tai."),
        L("l2", null, "Active listening checks you've understood: you ask, you repeat, you sum up.", "Lắng nghe chủ động là kiểm tra mình hiểu đúng chưa: hỏi lại, nhắc lại, tóm tắt."),
        L("l3", null, "The speaker feels the difference at once.", "Người nói cảm nhận được sự khác biệt ngay."),
      ] },
    { id: "s06", module: "REL-12", ref: "p2",
      data: { center: { label: "Người biết lắng nghe", illus: "ear" }, spokes: [
        { label: "Ít phải làm lại việc", illus: "counterclockwise-arrows-button" },
        { label: "Ít hiểu sai khách hàng", illus: "handshake" },
        { label: "Được đồng nghiệp tin tưởng", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "Good listeners redo less work and misunderstand clients less.", "Người biết lắng nghe ít phải làm lại việc, ít hiểu sai khách."),
        L("l2", null, "And colleagues trust them more. Everyone likes talking to someone who really hears them.", "Và được đồng nghiệp tin hơn: ai cũng thích nói với người thật sự nghe mình."),
      ] },
    { id: "s07", module: "LIST-05", ref: "p3",
      data: { title: "Thói quen làm nghe sót", items: ["Vừa nghe vừa nhìn điện thoại, màn hình", "Soạn câu trả lời khi người kia chưa nói xong", "Đoán trước người kia định nói gì", "Vội khuyên khi họ chỉ cần được hiểu", "Định kiến: người mới thì chưa có ý hay"], illus: "ear" },
      lines: [
        L("l1", null, "Looking at your phone or screen while listening.", "Vừa nghe vừa nhìn điện thoại, màn hình."),
        L("l2", null, "Planning your answer before they finish. Guessing what they'll say.", "Soạn câu trả lời khi người kia chưa nói xong. Đoán trước họ định nói gì."),
        L("l3", null, "Giving advice when they only need to be understood.", "Vội khuyên khi người kia chỉ cần được hiểu."),
        L("l4", null, "And bias, like thinking a new person can't have a good idea.", "Và định kiến, như nghĩ người mới thì chưa có ý hay."),
      ] },
    { id: "s08", module: "DLG-01", ref: "p4,p5",
      data: { set: "meeting", label: "Trong buổi họp",
        actors: [{ id: "dung", side: "right" }, { id: "hoa", side: "center", pose: "hold" }],
        verdict: { ok: false, label: "Nghĩ sẵn lời đáp khi người kia chưa nói xong",
          why: "Phản bác nhầm chuyện; cuộc họp mất thêm mười phút để quay lại đúng điều đang lo." } },
      lines: [
        L("l1", "hoa", "I'm a bit worried about the shipping cost of this plan…", "Chị hơi lo về chi phí vận chuyển của kế hoạch này…", { pose: "explain", face: "worried" }),
        L("l2", "dung", "The product price is perfectly reasonable!", "Giá sản phẩm như vậy là hợp lý rồi ạ!", { pose: "point", face: "stern", react: { hoa: "surprised" }, stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "She was talking about shipping, not price. He planned his reply while she was still talking.", "Chị ấy nói phí vận chuyển, không phải giá. Dũng nghĩ sẵn lời đáp khi chị chưa nói xong."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "hoa", "I'm a bit worried about the shipping cost of this plan.", "Chị hơi lo về chi phí vận chuyển của kế hoạch này.", { phase: "redo", pose: "explain" }),
        L("l7", "dung", "So your concern is shipping. Could you tell me more about it?", "Vậy chị lo về phí vận chuyển. Chị nói rõ hơn giúp em được không ạ?", { phase: "redo", face: "thinking", pose: "explain", react: { hoa: "happy" } }),
        L("l8", "det", "Hear the whole sentence, then answer.", "Nghe hết câu, rồi hãy trả lời.", { phase: "redo" }),
      ] },
    { id: "s09", module: "TEXT-03", ref: "p6",
      data: { text: "Hôm nay mình đã ngắt lời ai bao nhiêu lần?", illus: "thinking-face" },
      lines: [
        L("l1", null, "Noticing these habits in yourself is the first step.", "Nhận ra những thói quen này ở chính mình là bước đầu để đổi."),
        L("l2", null, "Count how many times you interrupt someone in a day.", "Thử để ý trong một ngày, bạn ngắt lời ai bao nhiêu lần."),
      ] },

    // ── Chương 2
    { id: "s10", module: "HOST-03", data: { n: 2, of: 6, title: "Cho người nói thấy mình nghe" },
      lines: [L("l1", "det", "Part two: show the speaker you're really listening.", "Phần hai: làm sao để người nói thấy mình thật sự nghe?")] },
    { id: "s11", module: "SCENE-01", ref: "p7,p8",
      data: { set: "office", label: "Đồng nghiệp sang bàn", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right", enter: "walk", at: "l1" }] },
      lines: [
        L("l1", null, "Someone comes to talk about something important. Turn your phone over, turn from the screen, look at them.", "Có người đến bàn việc quan trọng: úp điện thoại, quay khỏi màn hình, nhìn vào họ."),
        L("l2", "thao", "Yes. I see. And then what?", "Vâng. Em hiểu. Rồi sao nữa anh?", { face: "happy", pose: "hold", to: "dung" }),
        L("l3", null, "Short words like these help people keep talking.", "Những câu ngắn như vậy khuyến khích họ nói tiếp."),
        L("l4", "thao", "Or, if I'm really busy: I'm in the middle of something urgent. Can I come over in fifteen minutes?", "Hoặc khi đang bận thật: “Em đang dở việc gấp, mười lăm phút nữa em qua chỗ anh được không?”", { pose: "explain", react: { dung: "happy" } }),
        L("l5", null, "Far better than listening while typing. You'd miss details, and they'd feel ignored.", "Tốt hơn nhiều so với vừa nghe vừa gõ: vừa sót ý, người kia vừa thấy bị phớt lờ."),
      ] },
    { id: "s12", module: "SCENE-03", ref: "p9,p10",
      data: { set: "office", actors: [{ id: "thao" }],
        left: { label: "Vừa nghe vừa gõ", ok: false }, right: { label: "Dừng gõ, ghi chú", ok: true } },
      lines: [
        L("a1", null, "A client calls with order details, just as Thảo is typing an email.", "Khách gọi dặn lại đơn hàng đúng lúc Thảo đang gõ dở email.", { phase: "a" }),
        L("a2", "thao", "Yes, yes… mm-hm…", "Dạ, dạ…", { phase: "a", pose: "phone" }),
        L("a3", null, "“This week, deliver to the new warehouse” slips past. The goods may go to the old one.", "Câu “tuần này giao về kho mới” trôi qua tai; hàng có thể bị chở đến kho cũ.", { phase: "a" }),
        L("b1", null, "Or: stop typing, pick up a pen, take notes.", "Hoặc: dừng gõ, cầm bút ghi chú.", { phase: "b" }),
        L("b2", "thao", "Let me repeat the delivery address to check.", "Em xin nhắc lại địa chỉ giao để kiểm tra ạ.", { phase: "b", pose: "phone", face: "happy" }),
        L("b3", null, "The email is a few minutes late, but if she misheard, the client fixes it right away.", "Email chậm vài phút, nhưng nghe nhầm thì khách sửa được ngay.", { phase: "b" }),
        L("b4", "det", "On the phone, take your hands off the keyboard.", "Nghe điện thoại thì rời tay khỏi bàn phím.", { phase: "b" }),
      ] },

    // ── Chương 3
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Hỏi thế nào cho rõ" },
      lines: [L("l1", "det", "Part three: asking questions to understand.", "Phần ba: hỏi thế nào để hiểu cho rõ?")] },
    { id: "s14", module: "LIST-13", ref: "p11,p12",
      data: { title: "Hai loại câu hỏi", items: [
        { title: "Câu hỏi mở", detail: "“Anh nói rõ hơn về vấn đề khách gặp được không?”", illus: "speech-balloon" },
        { title: "Câu hỏi mở", detail: "“Chị hình dung kết quả cuối cùng thế nào?”", illus: "thought-balloon" },
        { title: "Câu hỏi làm rõ", detail: "“Hạn là cuối ngày thứ Sáu hay sáng thứ Hai ạ?”", illus: "pushpin" },
        { title: "Câu hỏi làm rõ", detail: "“Báo cáo gửi anh hay gửi thẳng cho khách?”", illus: "envelope" } ] },
      lines: [
        L("l1", null, "Open questions get people to say more.", "Câu hỏi mở giúp người kia nói thêm."),
        L("l2", null, "“Could you tell me more about the problem the client is facing?”", "“Anh nói rõ hơn về vấn đề khách gặp được không?”"),
        L("l3", null, "“How do you picture the final result?”", "“Chị hình dung kết quả cuối cùng thế nào?”"),
        L("l4", null, "Clarifying questions pin down details.", "Câu hỏi làm rõ giúp chốt chi tiết."),
        L("l5", null, "“Is the deadline the end of Friday, or Monday morning?” “Do I send the report to you, or straight to the client?”", "“Hạn là cuối thứ Sáu hay sáng thứ Hai ạ?” “Báo cáo gửi anh hay gửi thẳng cho khách?”"),
      ] },
    { id: "s15", module: "HOST-02", ref: "p12",
      data: { statement: "Hỏi lại chi tiết khi nhận việc là mất thời gian", truth: false,
        why: "Mười giây hỏi có thể cứu hai ngày làm sai hướng." },
      lines: [
        L("l1", "det", "Asking about details when you get a task wastes time. True or false?", "Hỏi lại chi tiết khi nhận việc là mất thời gian. Đúng hay sai?"),
        L("l2", "det", "False. Ten seconds of asking can save two days of work in the wrong direction.", "Sai. Mười giây hỏi có thể cứu hai ngày làm sai hướng.", { face: "wink" }),
      ] },

    // ── Chương 4
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Nhắc lại và tóm tắt" },
      lines: [L("l1", "det", "Part four: repeating and summing up.", "Phần bốn: nhắc lại và tóm tắt có tác dụng gì?")] },
    { id: "s17", module: "SCENE-01", ref: "p13",
      data: { set: "office", label: "Nhắc lại", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "center", pose: "hold" }] },
      lines: [
        L("l1", null, "Repeating means saying the main point in your own words, then asking if it's right.", "Nhắc lại là nói lại ý chính bằng lời của bạn, rồi hỏi đúng chưa."),
        L("l2", "thao", "As I understand it, you need a price comparison of three suppliers, focused on shipping,", "Như em hiểu, chị cần so sánh giá ba nhà cung cấp, tập trung vào phí vận chuyển,", { pose: "explain", to: "hoa" }),
        L("l3", "thao", "for the director on Wednesday. Is that right?", "để trình giám đốc thứ Tư. Em hiểu vậy đúng không ạ?", { face: "thinking", react: { hoa: "happy" } }),
        L("l4", null, "If it's wrong, she corrects you at once. If it's right, she relaxes.", "Nếu sai, người kia sửa ngay; nếu đúng, họ yên tâm."),
      ] },
    { id: "s18", module: "TEXT-04", ref: "p14",
      data: { text: "“Vậy mình thống nhất ba việc: em làm bản so sánh, anh Hùng liên hệ nhà cung cấp, chị duyệt trước thứ Tư.”", marks: ["thống nhất ba việc"], illus: "memo" },
      lines: [
        L("l1", null, "A summary goes at the end of a talk or a meeting: who does what, by when.", "Tóm tắt dùng ở cuối cuộc trao đổi, cuộc họp: ai làm gì, khi nào."),
        L("l2", null, "“So we agree on three things: I do the comparison, Hùng contacts suppliers, you approve by Wednesday.”", "“Vậy mình thống nhất ba việc: em làm bản so sánh, anh Hùng liên hệ nhà cung cấp, chị duyệt trước thứ Tư.”"),
      ] },
    { id: "s19", module: "SCENE-01", ref: "p15,p16",
      data: { set: "online", label: "Khoảng lặng ấy", actors: [{ id: "thao", side: "left" }, { id: "sam", side: "right" }], props: ["package"] },
      lines: [
        L("l1", null, "Back to Thảo's call, and that second of silence.", "Quay lại cuộc gọi của Thảo, và một giây lặng ấy."),
        L("l2", "sam", "No, five hundred cartons. Fifty boxes in each.", "Không, năm trăm thùng em ạ, mỗi thùng năm mươi hộp.", { pose: "explain" }),
        L("l3", "thao", "Five hundred cartons. Thank you! I'll fix it now.", "Năm trăm thùng ạ. Em cảm ơn anh, em sửa ngay!", { face: "surprised", pose: "thumb", react: { sam: "happy" } }),
        L("l4", null, "They fixed it while still on the phone. Now Thảo always confirms numbers and dates before hanging up.", "Hai bên sửa ngay khi còn trên điện thoại. Từ đó Thảo luôn chốt số và ngày trước khi gác máy."),
        L("l5", "det", "One summary sentence can save a whole order.", "Một câu tóm tắt cứu được cả một đơn hàng."),
      ] },

    // ── Chương 5
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Nghe cả cảm xúc" },
      lines: [L("l1", "det", "Part five: listening for feelings, not just facts.", "Phần năm: nghe cả cảm xúc, không chỉ nội dung.")] },
    { id: "s21", module: "SCENE-01", ref: "p17,p18",
      data: { set: "office", label: "Khách phàn nàn giao trễ", actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "cross", face: "stern" }] },
      lines: [
        L("l1", null, "A client complains about a late delivery. He needs the goods, and he needs respect.", "Khách phàn nàn giao trễ: vừa cần hàng, vừa cần thấy mình được tôn trọng."),
        L("l2", null, "Notice his voice, his face, and what he stresses. Then gently name the feeling.", "Để ý giọng nói, nét mặt, điều họ nhấn mạnh, rồi gọi tên cảm xúc nhẹ nhàng."),
        L("l3", "thao", "I understand you're very upset, because you promised your own client last week.", "Em hiểu anh rất bực vì đã hẹn khách của anh từ tuần trước.", { pose: "hold", face: "neutral", to: "binh" }),
        L("l4", "binh", "Alright. Let's talk calmly about what to do.", "Thôi được, mình bình tĩnh bàn cách làm.", { face: "neutral", pose: "stand", react: { thao: "happy" } }),
        L("l5", null, "Naming a feeling isn't agreeing with everything. It shows you understand, so you can solve it together.", "Ghi nhận cảm xúc không phải đồng ý mọi điều; nó cho thấy bạn hiểu, để cùng giải quyết."),
      ] },
    { id: "s22", module: "DLG-01", ref: "p19,p20",
      data: { set: "office", label: "Vừa bị khách mắng",
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right", face: "sad" }],
        verdict: { ok: false, label: "Nhảy ngay vào lời khuyên",
          why: "Người kia mới nói vài câu đã thấy bị trách, và thôi không kể nữa." } },
      lines: [
        L("l1", "dung", "A difficult client just yelled at me on the phone…", "Vừa bị một khách khó tính mắng qua điện thoại…", { face: "sad", to: "thao" }),
        L("l2", "thao", "You should do this, and this. That's the right way.", "Em phải làm thế này, thế này mới đúng.", { pose: "point", face: "stern", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Advice too soon can feel like blame. He may stop telling you.", "Khuyên vội dễ khiến người kia thấy bị trách, rồi thôi không kể."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "thao", "That sounds tiring. Do you want me to just listen, or would you like my advice?", "Nghe mệt thật đấy. Em muốn chị nghe thôi, hay muốn chị góp ý?", { phase: "redo", face: "happy", pose: "hold", react: { dung: "happy" } }),
        L("l7", "det", "People need to feel understood before they need advice.", "Người ta cần được hiểu trước khi cần lời khuyên.", { phase: "redo" }),
      ] },

    // ── Chương 6
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Điện thoại, họp trực tuyến" },
      lines: [L("l1", "det", "Part six: listening on the phone and online.", "Phần sáu: nghe qua điện thoại hay họp trực tuyến thì sao?")] },
    { id: "s24", module: "LIST-05", ref: "p21",
      data: { title: "Không thấy mặt nhau", items: ["Tắt các thẻ không liên quan", "Ghi chú bằng tay", "Cuối buổi nhắc lại con số, ngày tháng"], illus: "laptop" },
      lines: [
        L("l1", null, "Without faces, it's harder to focus.", "Không thấy mặt nhau, tập trung càng khó."),
        L("l2", null, "Close unrelated tabs. Take notes by hand.", "Tắt các thẻ không liên quan, ghi chú bằng tay."),
        L("l3", null, "At the end, repeat the key numbers and dates.", "Cuối buổi, nhắc lại các con số, ngày tháng quan trọng."),
      ] },
    { id: "s25", module: "LIST-05", ref: "p22",
      data: { title: "Tự luyện mỗi ngày", items: ["Một cuộc họp không ngắt lời ai, ghi ý chính từng người", "Nhận việc nào cũng nhắc lại trước khi làm", "Đồng nghiệp kể: hỏi thêm một câu trước khi nói ý mình", "Cuối tuần: lần nào mình hiểu sai, vì sao?"], illus: "spiral-calendar" },
      lines: [
        L("l1", null, "Practise daily. One meeting with no interrupting. Note each person's main idea.", "Luyện mỗi ngày: một cuộc họp không ngắt lời ai, ghi ý chính từng người."),
        L("l2", null, "Repeat every task back before you start it.", "Nhận việc nào cũng nhắc lại trước khi làm."),
        L("l3", null, "When a colleague talks, ask one more question before giving your view.", "Đồng nghiệp kể chuyện: hỏi thêm một câu trước khi nói ý mình."),
        L("l4", null, "At the weekend: when did I misunderstand, and why?", "Cuối tuần tự hỏi: lần nào mình hiểu sai, vì sao?"),
      ] },
    { id: "s26", module: "LIST-03", ref: "p23",
      data: { title: "Vài câu tiếng Anh", items: [
        { front: "So what you are saying is…", back: "Vậy ý anh/chị là…", illus: "speech-balloon", backIllus: "ear" },
        { front: "Could you tell me more about that?", back: "Anh/chị nói thêm về chuyện đó được không?", illus: "red-question-mark", backIllus: "speech-balloon" },
        { front: "Just to confirm, the deadline is Friday, right?", back: "Xác nhận lại: hạn là thứ Sáu, đúng không?", illus: "spiral-calendar", backIllus: "check-mark-button" },
        { front: "That sounds really stressful.", back: "Nghe căng thẳng thật đấy.", illus: "red-heart", backIllus: "hugging-face" } ] },
      lines: [
        L("l1", null, "So what you are saying is…", "Vậy ý anh/chị là…"),
        L("l2", null, "Could you tell me more about that?", "Anh/chị nói thêm về chuyện đó được không?"),
        L("l3", null, "Just to confirm, the deadline is Friday, right?", "Xác nhận lại: hạn là thứ Sáu, đúng không?"),
        L("l4", null, "That sounds really stressful.", "Nghe căng thẳng thật đấy."),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s27", module: "HOST-01", ref: "p5,p10,p16,p20",
      data: { title: "Bốn câu mang về", pose: "present", items: ["Nghe hết câu, rồi hãy trả lời", "Nghe điện thoại thì rời tay khỏi bàn phím", "Một câu tóm tắt cứu cả đơn hàng", "Được hiểu trước, lời khuyên sau"] },
      lines: [
        L("l1", "det", "Hear it all, then answer.", "Nghe hết câu, rồi hãy trả lời."),
        L("l2", "det", "On the phone, hands off the keyboard.", "Nghe điện thoại thì rời tay khỏi bàn phím."),
        L("l3", "det", "One summary can save a whole order.", "Một câu tóm tắt cứu được cả một đơn hàng."),
        L("l4", "det", "Understanding first, advice later.", "Người ta cần được hiểu trước khi cần lời khuyên."),
      ] },
    { id: "s28", module: "QUIZ-01", ref: "questions[11]",
      data: {
        q: "What risk comes with typing an email while a client explains an order?",
        options: [
          "The client may get angry because they can hear your keyboard clearly",
          "You may miss a detail like the new warehouse and deliver to the old one",
          "Nothing at all, because a short email never needs much of your attention",
        ],
        correct: 1, countdown: 5, illus: "keyboard",
        why: "Câu về kho mới dễ trôi qua tai khi đang gõ.",
      },
      lines: [
        L("l1", null, "What risk comes with typing an email while a client explains an order?", "Vừa gõ email vừa nghe khách dặn đơn hàng thì có rủi ro gì?"),
        L("l2", null, "You may miss a detail like the new warehouse and deliver to the old one.", "Bạn có thể nghe sót chuyện kho mới, và hàng bị chở đến kho cũ."),
        L("l3", null, "On the phone, take your hands off the keyboard and take notes.", "Nghe điện thoại thì rời tay khỏi bàn phím, cầm bút ghi lại."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "In your next work talk, say: let me sum up. Then confirm three main points.", "Lần trao đổi tới, nói “để em tóm tắt lại nhé” và chốt ba ý chính."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
