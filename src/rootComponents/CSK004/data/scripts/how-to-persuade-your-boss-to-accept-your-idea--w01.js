// Kịch bản video W lần 3 (#110) — "Làm sao thuyết phục sếp đồng ý với ý tưởng của mình?" · chuỗi "Thương lượng ở chỗ làm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý cho 40 câu hỏi của bài.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-persuade-your-boss-to-accept-your-idea--w01",
  hook: "HOOK-02",
  unit: { audience: "everyday-negotiators", slug: "how-to-persuade-your-boss-to-accept-your-idea", door: "ky-nang", level: "B1",
    title: "Làm sao thuyết phục sếp đồng ý với ý tưởng của mình?", series: "Thương lượng ở chỗ làm" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Hương → Thảo; Lực → Dũng; sếp → Cô Hoa (bài gọi sếp là “anh”, phụ đề đổi xưng hô thành “chị”). Thoa (p11), Định (p20) không dựng nhân vật, kể bằng thẻ. Bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng vai mới (#110). Ngã rẽ ở cảnh 1 (🔀 p14) được trả lời ở s19 (SCENE-03). Câu Cô Hoa chỉ là câu hỏi có trong bài (khách ở xa, giờ trưa ai trực). Phủ ý: 22/22.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p14",
      data: { set: "office", label: "Đề xuất của Thảo",
        actors: [{ id: "thao", side: "center", pose: "think", face: "thinking" }] },
      lines: [
        L("l1", "thao", "My idea: flexible shifts for the sales team.", "Ý tưởng của mình: cho nhân viên bán hàng đổi ca linh hoạt.", { pose: "explain", face: "happy" }),
        L("l2", "thao", "But at lunchtime, sometimes we're short of staff. Should I mention that?", "Nhưng giờ trưa có lúc thiếu người trực. Có nên nói ra không nhỉ?", { pose: "think", face: "thinking" }),
        L("l3", null, "Talk only about the benefits, or name the risk first? Hold that thought.", "Chỉ nói lợi ích, hay nêu rủi ro trước? Giữ câu hỏi đó nhé."),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Thuyết phục sếp thế nào?", pose: "present",
        items: ["Trả lời đúng điều sếp lo", "Một bằng chứng mạnh", "Tự nói ra chi phí, rủi ro", "Xin một bước thử nhỏ, có đường lui"] },
      lines: [
        L("l1", "det", "How do you get your boss to say yes? Think of it as a small negotiation. Your boss doesn't need the best idea, but", "Làm sao để sếp gật đầu? Hãy coi đó là cuộc thương lượng nhỏ. Sếp không cần ý hay nhất, mà cần"),
        L("l2", "det", "an answer to what they worry about,", "lời giải cho điều sếp đang lo,"),
        L("l3", "det", "one strong piece of evidence,", "một bằng chứng mạnh,"),
        L("l4", "det", "honest costs and risks,", "chi phí, rủi ro nói thật,"),
        L("l5", "det", "and a small trial with a clear way back.", "và một bước thử nhỏ, có đường lui rõ ràng."),
      ] },
    { id: "s03", module: "LIST-10", ref: "intro",
      data: { title: "Sáu chặng", stops: [
        { label: "Vì sao ý hay bị gạt", illus: "wastebasket" },
        { label: "Ba câu chuẩn bị", illus: "clipboard" },
        { label: "Mở lời", illus: "speech-balloon" },
        { label: "Khi sếp băn khoăn", illus: "thinking-face" },
        { label: "Chi phí, rủi ro", illus: "warning" },
        { label: "Để sếp dễ nói “có”", illus: "check-mark-button" } ] },
      lines: [
        L("l1", "det", "Six steps: why good ideas fail, preparing, opening,", "Sáu chặng: vì sao ý hay bị gạt, chuẩn bị, mở lời,"),
        L("l2", "det", "concerns, risks, and making yes easy.", "khi sếp băn khoăn, chi phí rủi ro, và để sếp dễ gật."),
      ] },

    // ── Phần 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao ý hay vẫn bị gạt?" },
      lines: [L("l1", "det", "Part one: why good ideas get rejected.", "Phần một: vì sao ý hay vẫn bị gạt đi?")] },
    { id: "s05", module: "LIST-02", ref: "p1",
      data: { title: "Ý tưởng chạm vào nỗi lo của sếp", illus: "thinking-face", items: [
        { icon: "lock", illus: "locked", text: "Mất kiểm soát" },
        { icon: "wallet", illus: "money-with-wings", text: "Tốn thêm tiền" },
        { icon: "user-round", illus: "office-building", text: "Bị cấp trên hỏi" },
        { icon: "triangle-alert", illus: "warning", text: "Phải xử lý nếu thất bại" } ] },
      lines: [
        L("l1", null, "Usually not because the idea is bad. It touches a worry nobody mentioned:", "Thường không phải vì ý dở, mà vì chạm vào nỗi lo không ai nhắc tới:"),
        L("l2", null, "losing control, extra cost, questions from above, or cleaning up if it fails.", "mất kiểm soát, tốn tiền, bị cấp trên hỏi, hay phải xử lý nếu thất bại."),
      ] },
    { id: "s06", module: "CMP-01", ref: "p2",
      data: { kicker: "Sếp cũng có lợi ích riêng", labels: ["Dễ bị gạt", "Được nghe"],
        left: "Ý tưởng chỉ làm việc của bạn dễ hơn", right: "Ý tưởng đáp ứng điều sếp lo, như giảm đơn trễ",
        illus: ["bust-in-silhouette", "bullseye"] },
      lines: [
        L("l1", null, "Like any negotiation, your boss has their own interests.", "Như mọi cuộc thương lượng, sếp có lợi ích riêng."),
        L("l2", null, "Your idea is heard when it meets them, like cutting late orders the boss worries about. Not when it only makes your job easier.", "Ý tưởng được nghe khi đáp ứng lợi ích ấy, như giảm đơn trễ sếp đang lo; không phải khi chỉ giúp việc của bạn dễ hơn."),
      ] },

    // ── Phần 2
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Ba câu trả lời trước khi gặp sếp" },
      lines: [L("l1", "det", "Part two: three questions to answer first.", "Phần hai: ba câu cần trả lời trước khi gặp sếp.")] },
    { id: "s08", module: "HOST-01", ref: "p3,p4",
      data: { title: "Xương sống cuộc nói chuyện", pose: "present",
        items: ["Sếp đang lo gì?", "Bằng chứng nào cho thấy hiệu quả?", "Bỏ ra gì, rủi ro gì, không được thì quay lại sao?"] },
      lines: [
        L("l1", "det", "Before the meeting, answer three questions.", "Trước khi gặp, trả lời ba câu."),
        L("l2", "det", "What does the boss worry about: sales, cost, quality, deadlines, customers?", "Sếp đang lo gì: doanh số, chi phí, chất lượng, thời hạn, khách hàng?"),
        L("l3", "det", "What proves it works: a small test, customer feedback, last time's results?", "Bằng chứng nào: thử nghiệm nhỏ, phản hồi khách, kết quả lần trước?"),
        L("l4", "det", "What does it cost, what's the risk, and how do we go back if it fails? Can't answer one yet? Find out more before asking to meet.", "Tốn gì, rủi ro gì, không hiệu quả thì quay lại sao? Chưa trả lời được thì tìm hiểu thêm đã."),
      ] },
    { id: "s09", module: "CMP-07", ref: "p5",
      data: { wrong: "Em chắc chắn cách này hiệu quả", right: "Tuần trước em thử với hai đơn, cả hai giao đúng hạn", diff: ["chắc chắn", "hiệu quả"],
        note: "Một bằng chứng mạnh tốt hơn mười lời khẳng định" },
      lines: [
        L("l2", null, "One strong piece of evidence beats ten claims. No data? Try it in your own work, or note real feedback.", "Một bằng chứng mạnh hơn mười lời khẳng định. Chưa có số liệu? Tự thử, hoặc ghi phản hồi thật."),
      ] },

    // ── Phần 3
    { id: "s10", module: "HOST-03", data: { n: 3, of: 6, title: "Mở lời để sếp muốn nghe tiếp" },
      lines: [L("l1", "det", "Part three: an opening that makes the boss listen.", "Phần ba: mở lời để sếp muốn nghe tiếp.")] },
    { id: "s11", module: "SCENE-01", ref: "p6,p7",
      data: { set: "office", label: "Câu mở lời",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "Start from a problem your boss has already seen, not from the solution you like.", "Bắt đầu từ vấn đề sếp đã thấy, không phải từ giải pháp bạn thích."),
        L("l2", "dung", "This month, our team often had to call customers back, because order details were missing.", "Tháng này nhóm mình phải gọi lại cho khách khá nhiều lần vì thiếu thông tin lúc nhận đơn.", { pose: "explain", to: "hoa" }),
        L("l3", null, "Then state your idea in one sentence. One idea, and your one strongest piece of evidence.", "Rồi nêu ý tưởng trong một câu. Một ý, kèm một bằng chứng mạnh nhất."),
        L("l4", null, "Five ideas at once? The boss can't remember them, and the safest choice is to refuse them all.", "Nói năm ý cùng lúc, sếp nhớ không nổi, lựa chọn an toàn nhất là từ chối tất cả."),
      ] },

    // ── Phần 4
    { id: "s12", module: "HOST-03", data: { n: 4, of: 6, title: "Sếp băn khoăn: đáp lại thế nào?" },
      lines: [L("l1", "det", "Part four: when your boss has a concern.", "Phần bốn: sếp băn khoăn, đáp lại thế nào?")] },
    { id: "s13", module: "DLG-01", ref: "p8,p9",
      data: { set: "meeting", label: "Đề xuất của Dũng",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Gạt nỗi lo của sếp đi",
          why: "Sếp hỏi thêm lại bị gạt, cuối buổi: “thôi cứ để như cũ”." } },
      lines: [
        L("l1", "dung", "I suggest a new way to schedule deliveries.", "Em đề xuất đổi cách xếp lịch giao hàng ạ.", { pose: "explain" }),
        L("l2", "hoa", "What about customers far away?", "Thế khách ở xa thì sao?", { face: "thinking" }),
        L("l3", "dung", "No problem. There are very few far customers.", "Không sao đâu chị, ít khách xa lắm.", { pose: "shrug", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "That brushes the worry away. Brush off each question, and the boss says: let's keep the old way.", "Câu đó gạt nỗi lo đi. Gạt mãi, cuối buổi sếp sẽ nói: thôi cứ để như cũ."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại nhé.", { phase: "redo" }),
        L("l7", "dung", "You're right, far customers will be affected.", "Đúng là khách xa sẽ bị ảnh hưởng.", { phase: "redo", face: "thinking" }),
        L("l8", "dung", "For them, I'll keep the old delivery days. Only city customers change.", "Với nhóm này em giữ ngày giao cũ, chỉ đổi lịch cho khách trong thành phố.", { phase: "redo", pose: "explain", react: { hoa: "happy" } }),
      ] },
    { id: "s14", module: "TEXT-04", ref: "p8,p10",
      data: { text: "Đó là điểm đáng lo, em đã nghĩ đến bằng cách này…", marks: ["điểm đáng lo"], illus: "ear" },
      lines: [
        L("l1", null, "A concern is useful: it tells you exactly what the boss worries about. Acknowledge it first: that's a fair worry; here's how I've thought about it.", "Băn khoăn là thông tin quý. Ghi nhận trước: “Đó là điểm đáng lo, em đã nghĩ đến bằng cách này…”"),
      ] },
    { id: "s14b", module: "HOST-01", ref: "p10",
      data: { title: "Ghi nhận trước, trả lời sau", pose: "present", text: "“Lỡ khách phàn nàn?” “Có thể ạ, nên tuần đầu em sẽ gọi hỏi các khách chính.”" },
      lines: [
        L("l2", "det", "Show you heard the worry first. Only then answer it.", "Ghi nhận nỗi lo trước, rồi mới trả lời nó."),
        L("l3", "det", "What if customers complain? That could happen, so in the first week I'll call key customers to check.", "“Lỡ khách phàn nàn?” “Có thể ạ, nên tuần đầu em sẽ gọi hỏi các khách chính.”"),
      ] },
    { id: "s15", module: "CMP-02", ref: "p11",
      data: { title: "Thoa xin làm ở nhà mỗi thứ Sáu",
        before: "“Ở nhà em tập trung hơn.” Sếp hỏi tiến độ, Thoa nhắc lại y vậy: bị từ chối",
        after: "Sáng gửi danh sách việc, chiều gửi kết quả; thử một tháng, chậm thì quay về. Sếp đồng ý",
        illusBefore: "cross-mark", illusAfter: "check-mark-button" },
      lines: [
        L("l1", null, "Thoa wanted to work from home on Fridays. Her reason: I focus better at home.", "Thoa muốn làm ở nhà mỗi thứ Sáu. Lý do: “Ở nhà em tập trung hơn.”"),
        L("l2", null, "Her boss worried: then how will I know your progress? She just repeated her reason, and heard no.", "Sếp lo: “Sao biết tiến độ?” Lần đầu Thoa chỉ nhắc lại lý do, bị từ chối."),
      ] },
    { id: "s15b", module: "HOST-01", ref: "p11",
      data: { title: "Lần sau, Thoa nói vào nỗi lo", pose: "thumb", text: "Sáng gửi danh sách việc, chiều gửi kết quả; thử một tháng, chậm thì quay về." },
      lines: [
        L("l3", "det", "Next time: a task list each morning, results each evening, a one-month trial, and back to normal if slower. Yes.", "Lần sau: sáng gửi danh sách việc, chiều gửi kết quả, thử một tháng, chậm thì quay về. Sếp đồng ý."),
      ] },
    { id: "s16", module: "TEXT-01", ref: "p12",
      data: { text: "Đừng trả lời câu sếp không hỏi, hãy trả lời điều sếp lo.", illus: "bullseye" },
      lines: [L("l1", "det", "Don't answer what the boss didn't ask. Answer what the boss worries about.", "Đừng trả lời câu sếp không hỏi, hãy trả lời điều sếp lo.")] },

    // ── Phần 5
    { id: "s17", module: "HOST-03", data: { n: 5, of: 6, title: "Nói thật chi phí và rủi ro?" },
      lines: [L("l1", "det", "Part five: back to Thảo. Should you mention costs and risks?", "Phần năm: quay lại Thảo. Có nên nói thật chi phí, rủi ro?")] },
    { id: "s18", module: "HOST-02", ref: "p13",
      data: { statement: "Nên giấu chi phí, rủi ro để đề xuất trông đẹp hơn", truth: false,
        why: "Sếp sẽ tự tìm ra; bạn giấu thì sếp nghi cả phần đúng. Nói chủ động, kèm cách hạn chế." },
      lines: [
        L("l1", "det", "Hide the costs and risks, so your idea looks better. True or false?", "Giấu chi phí, rủi ro cho đề xuất đẹp hơn. Đúng hay sai?"),
        L("l2", "det", "False. Your boss will find them, and then doubt even the true parts. Say them first, with a way to limit them.", "Sai. Sếp sẽ tự tìm ra, rồi nghi cả phần đúng. Nói chủ động, kèm cách hạn chế.", { face: "stern" }),
      ] },
    { id: "s19", module: "SCENE-03", ref: "p14",
      data: { set: "office",
        actors: [{ id: "thao" }, { id: "hoa", pose: "hold" }],
        left: { label: "A: chỉ nói lợi ích", ok: false }, right: { label: "B: nêu rủi ro trước", ok: true } },
      lines: [
        L("a1", "thao", "Flexible shifts will make everyone happier!", "Đổi ca linh hoạt, ai cũng sẽ vui hơn ạ!", { phase: "a", face: "happy" }),
        L("a2", "hoa", "And who is on duty at lunchtime?", "Thế giờ trưa ai trực?", { phase: "a", face: "stern" }),
        L("a3", null, "The boss found the gap herself, and doubted the whole plan.", "Sếp tự hỏi ra, rồi nhìn cả đề xuất với ánh mắt nghi ngờ.", { phase: "a" }),
        L("b1", "thao", "One risk: lunchtime. So at least two people must always be on duty then.", "Có một rủi ro là giờ trưa, nên luôn có ít nhất hai người trực.", { phase: "b", pose: "explain" }),
        L("b2", null, "The boss sees it's well thought out, and asks far fewer questions.", "Sếp thấy đề xuất đã tính kỹ, và hỏi ít hơn hẳn.", { phase: "b", react: { hoa: "happy" } }),
      ] },
    { id: "s20", module: "TEXT-01", ref: "p15",
      data: { text: "Rủi ro mình nói ra là kế hoạch, sếp tìm ra là lỗ hổng.", illus: "warning" },
      lines: [L("l1", "det", "A risk you mention is a plan. A risk the boss finds is a hole.", "Rủi ro mình nói ra là kế hoạch, rủi ro sếp tìm ra là lỗ hổng.")] },

    // ── Phần 6
    { id: "s21", module: "HOST-03", data: { n: 6, of: 6, title: "Để sếp dễ nói “có”" },
      lines: [L("l1", "det", "Last part: make yes easy.", "Phần cuối: để sếp dễ nói “có”.")] },
    { id: "s22", module: "LIST-08", ref: "p16,p17,p18",
      data: { title: "Ba cách để cái gật dễ hơn", items: [
        { title: "Xin một bước nhỏ", detail: "Thử hai tuần với nhóm em, rồi báo kết quả", illus: "footprints" },
        { title: "Đặt sẵn đường quay lại", detail: "Đo bằng gì, bao lâu, không đạt thì về cách cũ", illus: "counterclockwise-arrows-button" },
        { title: "Trao đổi bằng “nếu… thì…”", detail: "Em báo cáo hằng tuần, tự chịu phần sắp xếp lại", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Ask for a small decision: let my team try it for two weeks, then I'll report. Easier than: the whole department changes next month.", "Xin quyết định nhỏ: “Thử hai tuần với nhóm em, rồi em báo kết quả” dễ gật hơn “cả phòng đổi từ tháng sau”."),
        L("l2", null, "Set measures and a way back: how we measure, after how long, and if it misses, back to the old way.", "Đặt tiêu chí và đường quay lại: đo bằng gì, sau bao lâu, không đạt thì về cách cũ."),
        L("l3", null, "Then trade with if-then: if you let me try for two weeks, I'll report weekly and handle the rearranging myself.", "Rồi “nếu… thì…”: “Nếu chị cho thử hai tuần, em báo cáo hằng tuần, tự lo phần sắp xếp lại.”"),
      ] },
    { id: "s23", module: "LIST-10", ref: "p19,p20",
      data: { title: "Làm mẫu: Định và câu “để anh suy nghĩ”", stops: [
        { label: "Hỏi ngay: cần chuẩn bị thêm gì?", illus: "red-question-mark" },
        { label: "Sếp muốn biết kho có đủ chỗ", illus: "package" },
        { label: "Hẹn thứ Năm mang số liệu", illus: "spiral-calendar" },
        { label: "Mang số đo kho, lịch nhập thử: duyệt luôn", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "“Let me think about it.” Don't wait forever. Ask what else would help, and set a time.", "Sếp nói “để anh suy nghĩ”: đừng chờ mãi. Hỏi cần thêm gì, hẹn thời điểm."),
        L("l2", null, "Định proposed weekly orders for a better price. He asked at once: is there anything else I should prepare? The boss wanted to know if the storeroom had space.", "Định đề xuất gom đơn tuần. Hỏi ngay: “Em cần chuẩn bị thêm gì?” Sếp muốn biết kho đủ chỗ không."),
        L("l3", null, "I'll bring the numbers on Thursday. He came with storeroom measurements and a trial schedule, and got approval that day.", "“Thứ Năm em mang số liệu lên.” Đến hẹn mang số đo kho, lịch nhập thử. Sếp duyệt luôn."),
      ] },
    { id: "s24", module: "TEXT-01", ref: "p21",
      data: { text: "“Để suy nghĩ” cần một câu hỏi và một ngày hẹn.", illus: "spiral-calendar" },
      lines: [L("l1", "det", "“Let me think” needs one question and one date. Without a date, busy work buries the idea.", "“Để suy nghĩ” cần một câu hỏi và một ngày hẹn. Không hẹn, việc bận sẽ vùi ý tưởng.")] },
    { id: "s25", module: "LIST-05", ref: "p22",
      data: { title: "Email sau buổi gặp", illus: "e-mail",
        items: ["Vấn đề", "Ý tưởng", "Bước thử", "Tiêu chí đánh giá", "Ngày hẹn"] },
      lines: [
        L("l1", null, "After the meeting, a short email: the problem, the idea, the trial, how to measure it, and the next date.", "Sau buổi gặp, email ngắn: vấn đề, ý tưởng, bước thử, tiêu chí, ngày hẹn."),
        L("l2", null, "Your boss can think it over, or forward it to senior managers.", "Sếp có tài liệu để cân nhắc, hoặc chuyển lên cấp trên."),
      ] },

    // ── Tổng kết
    { id: "s26", module: "END-02", ref: "p10,p15,p21",
      data: { points: ["Ghi nhận nỗi lo trước, rồi mới trả lời", "Rủi ro mình nói ra là kế hoạch", "“Để suy nghĩ” cần một câu hỏi và một ngày hẹn"],
        icons: ["ear", "warning", "spiral-calendar"] },
      lines: [
        L("l1", "det", "Hear the worry first, then answer it.", "Ghi nhận nỗi lo trước, rồi mới trả lời."),
        L("l2", "det", "Thảo named the lunchtime risk, and it became a plan.", "Thảo nói ra rủi ro giờ trưa, và nó thành kế hoạch."),
        L("l3", "det", "And “let me think” needs a question and a date.", "Và “để suy nghĩ” cần một câu hỏi, một ngày hẹn."),
      ] },
    { id: "s27", module: "QUIZ-01", ref: "questions[7]",
      data: { q: "Your boss raises a concern, what should you do first?",
        options: [
          "Tell the boss at once that the worry is not a real problem at all",
          "Acknowledge that it is a fair worry, then explain how you have thought about it",
          "Change the topic quickly so the concern does not spoil the meeting",
        ],
        correct: 1, countdown: 5, illus: "ear",
        why: "Băn khoăn cho bạn biết sếp lo gì. Ghi nhận trước, rồi mới trả lời." },
      lines: [
        L("l1", null, "Your boss raises a concern, what should you do first?", "Sếp nêu một băn khoăn, việc đầu tiên bạn nên làm là gì?"),
        L("l2", null, "Acknowledge that it is a fair worry, then explain how you have thought about it.", "Ghi nhận đó là nỗi lo chính đáng, rồi nói cách bạn đã tính."),
        L("l3", null, "Brushing it off or changing the topic makes the boss feel unheard.", "Gạt đi hay đổi chủ đề làm sếp thấy không được nghe."),
      ],
      beats: { after: 500 } },
    { id: "s28", module: "END-05", data: { text: "Bốn mươi câu về thuyết phục sếp", sub: "Nghe câu hỏi tiếng Anh, chọn cách nói đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.", { face: "happy" })] },
  ],
};
