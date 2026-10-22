// Kịch bản video W lần 3 (#110) — "Ra quyết định nhanh khi bị áp lực" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-make-quick-decisions-under-pressure--w01",
  hook: "HOOK-07",
  loop: { open: "s01", close: "s32" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "workplace-problem-solvers", slug: "how-to-make-quick-decisions-under-pressure", door: "ky-nang", level: "B1",
    title: "Ra quyết định nhanh khi bị áp lực thời gian thế nào?", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” trong khung ❓ p9 và ✍️ p5 → Dũng (người xem nhập vai Dũng); đối tác gọi điện p5 → Bác Bình (Dũng xưng “cháu”); Ánh → Thảo; công ty của Kiên (🔀 p14) kể không tên bằng thẻ. Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài (đối tác p5 giữ Bác Bình như lần 2) nên không dùng. Chỗ đứng cố định: Thảo left, Dũng center, Bác Bình right. Câu treo ở cảnh mở đầu (xe hỏng, ❓ p9) được trả lời bằng DLG-01 ở phần ba; câu mẫu p11 gọi khách do Dũng nói trong SCENE-02 (khách chỉ là tên liên hệ). Câu đố đổi sang questions[3] (không tên, đáp án không bị cảnh trước đọc sẵn). Phủ ý: 22/22. #112 nhịp hình (§9): tách hoặc đổi module các cảnh s21, giữ lời đọc và ref.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p9",
      data: { set: "street", label: "Bạn là Dũng", props: ["delivery-truck"], actors: [{ id: "dung", side: "center", pose: "phone" }] },
      lines: [
        L("l1", null, "Imagine you are Dũng. Three p.m. The truck with an urgent order breaks down.", "Bạn là Dũng. Ba giờ chiều, xe chở đơn gấp hỏng giữa đường."),
        L("l2", "dung", "The customer needs it before five! I'll call everywhere for a truck the same size.", "Khách cần hàng trước năm giờ! Gọi khắp nơi tìm xe tải cùng cỡ thôi.", { face: "worried" }),
        L("l3", null, "Is that really the first thing to do?", "Đó có thật là việc đầu tiên nên làm?"),
      ], beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Quyết nhanh mà không quyết bừa", pose: "present", items: ["Gọi tên mục tiêu", "Có thật phải quyết ngay?", "Hỏi ý có hạn giờ", "Quyết xong, báo ngay"] },
      lines: [
        L("l1", "det", "How do you decide fast, without deciding carelessly?", "Quyết nhanh mà không quyết bừa thế nào?"),
        L("l2", "det", "Stop a few seconds, and name your goal.", "Dừng vài giây, gọi tên mục tiêu."),
        L("l3", "det", "Check if you really must decide now.", "Kiểm tra có thật phải quyết ngay không."),
        L("l4", "det", "Ask others, with a time limit.", "Hỏi ý người khác, có hạn giờ."),
        L("l5", "det", "Then tell people right away.", "Rồi báo ngay cho người liên quan."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng của bài", chapters: [
        { label: "Vì sao đầu óc trống rỗng", illus: "face-with-spiral-eyes" },
        { label: "Có thật phải quyết ngay?", illus: "alarm-clock" },
        { label: "Nghĩ theo thứ tự", illus: "footprints" },
        { label: "Hỏi ý đến đâu là đủ", illus: "speech-balloon" },
        { label: "Báo ai, báo thế nào", illus: "mobile-phone" },
        { label: "Hết gấp rồi làm gì", illus: "memo" } ] },
      lines: [
        L("l1", null, "Panic, real deadlines, and an order for thinking.", "Đầu óc trống rỗng, hạn thật, và thứ tự nghĩ."),
        L("l2", null, "Then asking, telling, and what to do after.", "Rồi hỏi ý, báo tin, và việc làm sau đó."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao đầu óc trống rỗng?" },
      lines: [L("l1", "det", "Part one: why does your mind go blank?", "Phần một: bị dồn gấp, sao đầu óc lại trống rỗng?")] },
    { id: "s05", module: "LIST-02", ref: "p1",
      data: { title: "Ba phản ứng khi bị dồn", illus: "anxious-face-with-sweat", items: [
        { icon: "high-voltage", illus: "high-voltage", text: "Quyết bừa theo ý đầu tiên" },
        { icon: "ice", illus: "ice", text: "Đứng hình" },
        { icon: "locked", illus: "locked", text: "Bám kế hoạch cũ dù đã hỏng" } ] },
      lines: [
        L("l1", null, "Under pressure, your body reacts as if in danger. Your heart races, your thinking narrows.", "Bị dồn, cơ thể phản ứng như gặp nguy: tim đập nhanh, suy nghĩ thu hẹp."),
        L("l2", null, "Some decide on the first idea. Some freeze.", "Người quyết bừa theo ý đầu tiên, người đứng hình,"),
        L("l3", null, "Some hold on to an old plan that has already failed.", "người bám chặt kế hoạch cũ dù nó đã hỏng."),
        L("l4", null, "All three are understandable, and all three are costly.", "Cả ba đều dễ hiểu, và đều tốn kém."),
      ] },
    { id: "s06", module: "HOST-01", ref: "p2",
      data: { text: "Hít thở chậm hai lần: “Điều quan trọng nhất phải giữ lúc này là gì?”", pose: "think" },
      lines: [
        L("l1", "det", "Noticing it is half the fix. Breathe slowly, twice.", "Nhận ra mình đang như vậy là gỡ được một nửa. Hít thở chậm hai lần."),
        L("l2", "det", "Then ask yourself: what matters most to protect right now?", "Rồi nói thầm: “Điều quan trọng nhất phải giữ lúc này là gì?”"),
        L("l3", "det", "That one question pulls your mind back to the main job.", "Câu hỏi đó kéo đầu óc về lại việc chính."),
      ] },

    // ---------- Chương 2 ----------
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Có thật phải quyết ngay?" },
      lines: [L("l1", "det", "Part two: do you really have to decide now?", "Phần hai: có thật sự phải quyết ngay không?")] },
    { id: "s08", module: "TEXT-07", ref: "p3",
      data: { en: "I've got it. I'll confirm with you before three.", vi: "Em nắm rồi, em xác nhận lại với anh trước ba giờ nhé.",
        chunks: [{ en: "I've got it.", vi: "em nắm rồi" }, { en: "I'll confirm with you", vi: "em xác nhận lại với anh" }, { en: "before three.", vi: "trước ba giờ" }], illus: "alarm-clock" },
      lines: [
        L("l1", null, "Many things look urgent, but don't need an answer in five minutes.", "Nhiều việc trông gấp nhưng không cần trả lời trong năm phút."),
        L("l2", null, "Ask: when is the real deadline? Sometimes, just say:", "Hỏi: hạn thật là khi nào? Đôi khi chỉ cần nói:"),
        L("l3", null, "I've got it. I'll confirm with you before three.", "“Em nắm rồi, em xác nhận lại với anh trước ba giờ nhé.”"),
      ] },
    { id: "s09", module: "CMP-01", ref: "p4",
      data: { labels: ["Dễ rút lại", "Khó rút lại"], left: "Đổi phòng họp, đổi thứ tự việc: sai cũng sửa được, cứ quyết nhanh",
        right: "Hứa với khách, ký cam kết, nhận đơn lớn: thêm thời gian, hỏi người có quyền", illus: ["counterclockwise-arrows-button", "locked"] },
      lines: [
        L("l1", null, "Second question: is this easy to take back?", "Câu hỏi thứ hai: quyết định này có dễ rút lại không?"),
        L("l2", null, "A new meeting room, a new task order: easy to fix. Decide fast.", "Đổi phòng họp, đổi thứ tự việc: sai cũng sửa được, cứ quyết nhanh."),
        L("l3", null, "Promises, commitments, big orders: hard to undo. Take a bit more time, or ask someone in charge.", "Hứa với khách, ký cam kết, nhận đơn lớn: khó rút, nên thêm thời gian hoặc hỏi người có thẩm quyền."),
      ] },
    { id: "s10", module: "DLG-01", ref: "p5",
      data: { set: "office", label: "Năm giờ chiều thứ Sáu",
        actors: [{ id: "dung", side: "center", pose: "phone" }, { id: "binh", side: "right", pose: "phone" }],
        verdict: { ok: false, label: "Nhận ngay đơn khó rút lại", why: "Thứ Hai xưởng thiếu người, phải xin rút một nửa, đối tác rất phật ý." } },
      lines: [
        L("l1", null, "Five p.m. on Friday. A partner calls.", "Năm giờ chiều thứ Sáu, một đối tác gọi."),
        L("l2", "binh", "Can you take an extra order, double the usual, for mid next week? I need an answer now.", "Bên cháu nhận thêm đơn gấp đôi, giao giữa tuần sau không? Cần trả lời ngay.", { pose: "explain" }),
        L("l3", "dung", "Yes, sure. We'll take it.", "Dạ được ạ, bên cháu nhận.", { face: "happy", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "Monday, the factory lacked staff and materials. Half the order was cancelled.", "Sáng thứ Hai xưởng báo thiếu người, nguyên liệu, phải xin rút một nửa."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l7", "dung", "I'd really like to. Give me one hour to ask the factory. I'll confirm by six.", "Dạ cháu rất muốn nhận. Bác cho cháu một giờ hỏi xưởng, sáu giờ cháu trả lời chắc ạ.", { phase: "redo", face: "happy", pose: "explain" }),
        L("l8", null, "Still friendly, with no promise he isn't sure he can keep.", "Vẫn giữ thiện chí, mà không hứa điều chưa chắc làm được.", { phase: "redo" }),
      ] },
    { id: "s11", module: "TEXT-01", ref: "p6",
      data: { text: "Việc khó rút lại thì xin thêm một giờ.", illus: "hourglass-not-done" },
      lines: [L("l1", null, "Hard to take back? Ask for one more hour.", "Việc khó rút lại thì xin thêm một giờ.")] },

    // ---------- Chương 3 ----------
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Vài phút: nghĩ theo thứ tự" },
      lines: [L("l1", "det", "Part three: only a few minutes? Think in this order.", "Phần ba: chỉ có vài phút thì nghĩ theo thứ tự nào?")] },
    { id: "s13", module: "LIST-06", ref: "p7",
      data: { title: "Bốn bước quyết gấp", steps: [
        { text: "Mục tiêu: điều quan trọng nhất phải giữ", illus: "bullseye" },
        { text: "Phương án: hai ba cách, nghĩ trong một phút", illus: "light-bulb" },
        { text: "Chọn: cách đơn giản nhất mà chắc làm được", illus: "check-mark-button" },
        { text: "Báo: đã quyết gì, vì sao", illus: "mobile-phone" } ] },
      lines: [
        L("l1", null, "Goal: what matters most to protect?", "Mục tiêu: điều quan trọng nhất phải giữ là gì?"),
        L("l2", null, "Options: two or three ways to reach it, in one minute.", "Phương án: hai ba cách đạt mục tiêu, nghĩ trong một phút."),
        L("l3", null, "Choose: the simplest one you can surely do.", "Chọn: cách đơn giản nhất mà chắc làm được."),
        L("l4", null, "Tell: briefly, what you decided, and why.", "Báo: nói ngắn cho người liên quan đã quyết gì, vì sao."),
      ] },
    { id: "s14", module: "HOST-02", ref: "p8",
      data: { statement: "Lúc gấp, hãy tìm phương án hoàn hảo", truth: false,
        why: "Chọn cách đủ tốt, ít phụ thuộc người khác, chắc làm được ngay. Đủ tốt mà kịp lúc hơn hoàn hảo mà muộn." },
      lines: [
        L("l1", "det", "In a rush, look for the perfect option. True or false?", "Lúc gấp, hãy tìm phương án hoàn hảo. Đúng hay sai?"),
        L("l2", "det", "False. Pick good enough, depending little on others, sure to work now.", "Sai. Chọn cách đủ tốt, ít phụ thuộc người khác, chắc làm được ngay.", { face: "stern" }),
        L("l3", "det", "Good enough on time beats perfect and late.", "Đủ tốt mà kịp lúc hơn hoàn hảo mà muộn."),
      ] },
    { id: "s15", module: "DLG-01", ref: "p9",
      data: { set: "street", label: "Xe hỏng giữa đường", props: ["delivery-truck"], actors: [{ id: "dung", side: "center", pose: "phone" }],
        verdict: { ok: false, label: "Gọi khắp nơi tìm xe cùng cỡ", why: "Hơn một tiếng tìm xe rất dễ khiến hàng đến muộn." } },
      lines: [
        L("l1", null, "Back to the broken truck. The customer needs the goods before five.", "Quay lại chiếc xe hỏng. Khách cần hàng trước năm giờ."),
        L("l2", "dung", "I'll call everywhere until I find a truck the same size.", "Gọi khắp nơi tới khi tìm được xe tải cùng cỡ.", { face: "worried", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "The goal is goods on time, not one truck. An hour of calls makes them late.", "Mục tiêu là hàng tới đúng giờ, không phải một chiếc xe tải. Gọi hơn một tiếng là muộn."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "dung", "What must I protect? Goods there by five.", "Điều phải giữ là gì? Hàng tới trước năm giờ.", { phase: "redo", face: "thinking", pose: "think" }),
        L("l7", "dung", "Split the goods into small vans, or ask the customer to take the urgent part first.", "Chia hàng sang vài xe nhỏ, hoặc hỏi khách nhận trước phần cần gấp nhất.", { phase: "redo", face: "happy", pose: "explain" }),
      ] },
    { id: "s16", module: "TEXT-01", ref: "p10",
      data: { text: "Giữ mục tiêu, đừng giữ kế hoạch.", illus: "bullseye" },
      lines: [L("l1", null, "Keep the goal. Don't hold on to the plan.", "Giữ mục tiêu, đừng giữ kế hoạch.")] },
    { id: "s17", module: "SCENE-02", ref: "p11",
      data: { set: "street", label: "Gọi cho khách", actor: { id: "dung", side: "center" },
        contact: { name: "Khách hàng", illus: "woman-office-worker" },
        messages: [{ from: "me", text: "Xe bên em gặp sự cố, em chuyển phần hàng chị cần gấp sang xe nhỏ, đến trước năm giờ; phần còn lại sáng mai, chị thấy được không ạ?", at: "l2" }] },
      lines: [
        L("l1", null, "When you change plans, tell the customer the problem, the new plan, and ask.", "Đổi phương án thì báo khách: sự cố, cách mới, và hỏi ý."),
        L("l2", "dung", "Our truck broke down. Your urgent goods go by small van, before five. The rest tomorrow morning. Is that okay?", "Xe bên em gặp sự cố, phần chị cần gấp sang xe nhỏ, trước năm giờ; còn lại sáng mai, được không ạ?"),
      ] },

    // ---------- Chương 4 ----------
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Hỏi ý đến đâu là đủ?" },
      lines: [L("l1", "det", "Part four: how much advice is enough?", "Phần bốn: hỏi ý người khác đến đâu thì đủ?")] },
    { id: "s19", module: "CMP-06", ref: "p12",
      data: { do: ["Hỏi một hai người hiểu việc nhất"], dont: ["Hỏi hết người này tới người khác đến hết giờ"],
        doIcons: ["busts-in-silhouette"], dontIcons: ["hourglass-done"] },
      lines: [
        L("l1", null, "Asking one or two people who know the work best is wise.", "Hỏi một hai người hiểu việc nhất là khôn ngoan."),
        L("l2", null, "Asking person after person until time's up avoids the decision, while damage grows.", "Hỏi hết người này tới người khác tới hết giờ là né quyết định, thiệt hại vẫn chạy."),
      ] },
    { id: "s20", module: "TEXT-07", ref: "p13",
      data: { en: "I'll decide in ten minutes. Any concerns, tell me before then.", vi: "Mười phút nữa em chốt, ai có lo ngại gì thì nói trước nhé.",
        chunks: [{ en: "I'll decide", vi: "em chốt" }, { en: "in ten minutes.", vi: "mười phút nữa" }, { en: "Any concerns,", vi: "ai có lo ngại gì" }, { en: "tell me before then.", vi: "thì nói trước nhé" }], illus: "stopwatch" },
      lines: [
        L("l1", null, "Set a time limit: I'll decide in ten minutes. Any concerns, tell me before then.", "Đặt hạn: “Mười phút nữa em chốt, ai có lo ngại gì thì nói trước nhé.”"),
        L("l2", null, "Time's up? Choose the best option you have, even if nobody says sure.", "Hết mười phút, chọn phương án tốt nhất đang có, kể cả khi chưa ai nói “chắc chắn”."),
      ] },
    { id: "s21a", module: "TEXT-01", ref: "p14",
      data: { text: "Trang đặt hàng không nhận thanh toán đúng tối khuyến mãi", illus: "mobile-phone" },
      lines: [
        L("l1", null, "The order page stops taking payments on a sale night.", "Trang đặt hàng không nhận thanh toán đúng tối khuyến mãi."),
      ] },
    { id: "s21", module: "REL-02", ref: "p14",
      data: { chain: ["Cách A: hỏi trưởng nhóm, rồi kỹ thuật, rồi kế toán", "Chờ từng người trả lời", "Gần một tiếng sau, khách bỏ đi, bình luận bực bội"],
        illus: ["speech-balloon", "hourglass-not-done", "angry-face"] },
      lines: [
        L("l2", null, "Way A: ask the leader, then tech, then accounts, one by one.", "Cách A: hỏi trưởng nhóm, rồi kỹ thuật, rồi kế toán, chờ từng người."),
        L("l3", null, "An hour later, customers have left angry comments.", "Gần một tiếng sau, khách bỏ đi, để lại bình luận bực bội."),
      ] },
    { id: "s21b", module: "LIST-05", ref: "p14",
      data: { title: "Cách B", items: ["Nhắn cả ba cùng lúc, hẹn trả lời trong mười phút", "Trong lúc chờ, tự đăng thông báo xin lỗi", "Kèm cách chuyển khoản tạm"], illus: "check-mark-button" },
      lines: [
        L("l4", null, "Way B: message all three, ten minutes. Meanwhile, post an apology and a bank transfer option.", "Cách B: nhắn cả ba, hẹn mười phút; trong lúc chờ, tự đăng xin lỗi kèm cách chuyển khoản tạm."),
      ] },
    { id: "s22", module: "TEXT-01", ref: "p15",
      data: { text: "Hỏi ý có hạn giờ, hết giờ thì tự chọn.", illus: "stopwatch" },
      lines: [L("l1", null, "Ask with a time limit. When time's up, choose.", "Hỏi ý có hạn giờ, hết giờ thì tự chọn.")] },

    // ---------- Chương 5 ----------
    { id: "s23", module: "HOST-03", data: { n: 5, of: 6, title: "Quyết xong, báo ngay" },
      lines: [L("l1", "det", "Part five: you decided. Who do you tell, and how?", "Phần năm: quyết xong rồi, báo ai và báo thế nào?")] },
    { id: "s24", module: "LIST-07", ref: "p16",
      data: { title: "Một tin ngắn gồm", items: [
        { text: "Đã quyết gì", illus: "check-mark-button" },
        { text: "Vì sao", illus: "red-question-mark" },
        { text: "Ai cần làm gì", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "A decision nobody hears about hasn't happened for them.", "Quyết định chưa được báo thì coi như chưa xảy ra với người khác."),
        L("l2", null, "Send a short message: what, why, and who does what. Short, but clear.", "Gửi ngay một tin ngắn: quyết gì, vì sao, ai làm gì. Không cần dài, chỉ cần rõ."),
      ] },
    { id: "s25", module: "REL-02", ref: "p17",
      data: { chain: ["Máy lạnh phòng họp lớn hỏng", "Thảo chuyển sang phòng nhỏ, xử lý rất gọn", "Chưa nhắn lễ tân, chưa báo sếp", "Khách vào phòng cũ nóng, chờ gần mười lăm phút"],
        illus: ["hot-face", "chair", "mobile-phone-off", "hourglass-done"] },
      lines: [
        L("l1", null, "Before a client meeting, the big room's air conditioner breaks.", "Máy lạnh phòng họp lớn hỏng ngay trước buổi gặp khách."),
        L("l2", null, "Thảo quickly moves to a small room upstairs. Very neat.", "Thảo nhanh chóng chuyển sang phòng nhỏ tầng trên, rất gọn."),
        L("l3", null, "But she tells neither reception nor the boss.", "Nhưng chưa nhắn lễ tân, cũng chưa báo sếp."),
        L("l4", null, "Guests wait in the hot old room almost fifteen minutes.", "Khách được dẫn vào phòng cũ nóng bức, đứng chờ gần mười lăm phút."),
      ] },
    { id: "s26", module: "TEXT-01", ref: "p18",
      data: { text: "Quyết xong một câu, báo ngay một dòng.", illus: "mobile-phone" },
      lines: [L("l1", null, "One decision, one quick line to the people involved.", "Quyết xong một câu, báo ngay một dòng.")] },
    { id: "s27", module: "SCENE-02", ref: "p19",
      data: { set: "meeting", label: "Thảo báo nhanh", actor: { id: "thao", side: "left" },
        contact: { name: "Lễ tân", illus: "bellhop-bell" },
        messages: [
          { from: "me", text: "Em báo nhanh: phòng họp lớn hỏng máy lạnh, buổi gặp khách chuyển sang phòng nhỏ tầng ba, vẫn đúng chín giờ.", at: "l1" },
          { from: "me", text: "Lễ tân giúp em dẫn khách lên ạ.", at: "l2" } ] },
      lines: [
        L("l1", "thao", "Quick update: the big room's AC is broken. The meeting moves to the small room on floor three, still at nine.", "Phòng họp lớn hỏng máy lạnh, buổi gặp khách chuyển sang phòng nhỏ tầng ba, vẫn chín giờ."),
        L("l2", "thao", "Please bring the guests up.", "Lễ tân giúp em dẫn khách lên ạ."),
      ] },

    // ---------- Chương 6 ----------
    { id: "s28", module: "HOST-03", data: { n: 6, of: 6, title: "Hết gấp rồi, làm gì tiếp?" },
      lines: [L("l1", "det", "Part six: the rush is over. Now what?", "Phần sáu: hết gấp rồi, cần làm gì tiếp?")] },
    { id: "s29", module: "LIST-13", ref: "p20",
      data: { title: "Sau khi hết gấp", items: [
        { title: "Ghi ngay vài dòng", detail: "Chuyện gì xảy ra, bạn đã chọn gì, vì sao", illus: "memo" },
        { title: "Khi đầu óc đã nguội", detail: "Cuối ngày hoặc hôm sau, xem có cần sửa gốc", illus: "magnifying-glass-tilted-left" } ] },
      lines: [
        L("l1", null, "Write a few lines now: what happened, what you chose, and why.", "Ghi ngay vài dòng: chuyện gì xảy ra, bạn chọn gì, vì sao."),
        L("l2", null, "Later, with a cool head, see if the root needs fixing.", "Cuối ngày hoặc hôm sau, khi đã nguội, xem có cần sửa gốc."),
      ] },
    { id: "s30", module: "HOST-02", ref: "p21",
      data: { statement: "Sau này nghĩ ra cách hay hơn nghĩa là lúc đó đã quyết sai", truth: false,
        why: "Đánh giá theo điều bạn biết lúc đó, không theo điều biết sau." },
      lines: [
        L("l1", "det", "Later you find a better way. So your quick choice was wrong. True or false?", "Sau này nghĩ ra cách hay hơn, vậy lúc đó đã sai. Đúng hay sai?"),
        L("l2", "det", "False. Judge it by what you knew then, not what you learned later.", "Sai. Đánh giá theo điều bạn biết lúc đó, không theo điều biết sau.", { face: "happy" }),
      ] },
    { id: "s31", module: "LIST-05", ref: "p22",
      data: { title: "Chuẩn bị cho lần gấp sau", illus: "clipboard", items: [
        "Danh bạ người cần gọi khi có sự cố", "Một phương án dự phòng cho việc quan trọng nhất tuần", "Vài câu mẫu để xin thời gian và báo nhanh" ] },
      lines: [
        L("l1", null, "Prepare now: a list of who to call when things go wrong.", "Chuẩn bị trước: danh bạ người cần gọi khi có sự cố."),
        L("l2", null, "A backup plan for this week's most important task.", "Một phương án dự phòng cho việc quan trọng nhất trong tuần."),
        L("l3", null, "And a few sentences to buy time and to update fast.", "Và vài câu mẫu để xin thời gian, để báo nhanh."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s32", module: "END-02", ref: "outro",
      data: { points: ["Giữ mục tiêu, đừng giữ kế hoạch", "Việc khó rút lại: xin thêm một giờ", "Hỏi ý có hạn giờ, quyết xong báo ngay"],
        icons: ["bullseye", "hourglass-not-done", "mobile-phone"] },
      lines: [
        L("l1", null, "Fast is not careless. Keep the goal, buy time for hard choices,", "Quyết nhanh không phải quyết bừa: giữ mục tiêu, xin thêm giờ cho việc khó rút,"),
        L("l2", null, "ask with a time limit, and tell people right away.", "hỏi ý có hạn giờ, và báo ngay sau khi quyết."),
        L("l3", null, "Today, save two sentences on your phone: one to buy time, one to update fast.", "Hôm nay, lưu hai câu mẫu vào điện thoại: một câu xin thời gian, một câu báo nhanh."),
      ] },
    { id: "s33", module: "QUIZ-01", ref: "questions[3]",
      data: {
        q: "Someone says they need your answer now, what should you check first?",
        options: [
          "When the real deadline is, since many urgent requests can wait an hour",
          "Nothing, because saying yes quickly is always the polite and professional choice",
          "Whether the person is senior, because senior people should always be answered first",
        ],
        correct: 0, countdown: 5, illus: "alarm-clock",
        why: "Nhiều việc trông gấp nhưng hạn thật không phải năm phút. Hỏi hạn thật để có thêm thời gian khi cần.",
      },
      lines: [
        L("l1", null, "Someone says they need your answer now, what should you check first?", "Ai đó nói cần câu trả lời của bạn ngay, bạn nên kiểm tra gì trước?"),
        L("l2", null, "When the real deadline is, since many urgent requests can wait an hour.", "Hạn thật là khi nào, vì nhiều yêu cầu gấp vẫn chờ được một giờ."),
        L("l3", null, "Knowing the real deadline gives you time when you need it.", "Biết hạn thật giúp bạn có thêm thời gian khi cần."),
      ], beats: { after: 600 } },
    { id: "s34", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nhanh mà không vội" },
      lines: [L("l1", "det", "Forty quick questions are waiting below. Take a breath, and go!", "Bốn mươi câu hỏi đang chờ bên dưới. Hít thở, rồi bắt đầu nhé!")] },
  ],
};
