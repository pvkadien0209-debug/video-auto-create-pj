// Kịch bản video W lần 3 (#110) — "Cách trình bày ý tưởng trong cuộc họp" · chuỗi "Giao tiếp nơi công sở"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-present-an-idea-in-a-meeting--w01",
  hook: "HOOK-06",
  loop: { open: "s01", close: "s26" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "office-communicators", slug: "how-to-present-an-idea-in-a-meeting", door: "ky-nang", level: "B1",
    title: "Cách trình bày ý tưởng trong cuộc họp", series: "Giao tiếp nơi công sở" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Khuê (p9) → Thảo; Vũ (p6) → Dũng; Oanh (p15) → Thảo; người chủ trì → Cô Hoa (chỉ nói câu “Ý hay, để sau bàn nhé” của p7, không thêm lời); người lo tài chính hỏi khó (p3, p17) → Bác Bình (chỉ hỏi câu chi phí trung lập theo p3); người nghe tiếng Anh (p22) → Sam (vai mới, chỉ phản ứng). Tường (p12) kể không tên ở CMP-03. Vai mới: Sam. Phủ ý: 22/22. Bài có 8 mục; gộp mục 1–2 và mục 4–5 (6 chương). Hai DLG: s09 (chen ngang, p5–p7) và s19 (kết bằng im lặng, p14–p16). Câu đề xuất chạy thử ở s19 theo ví dụ “chạy thử bốn tuần ở một kho” của p14 và câu tiếng Anh p22. #112 (khớp bài sau sửa logic): bài đánh lại mã p5–p25 → p4–p22; mục 4 gộp số liệu, rủi ro, đề nghị nhỏ vào p14 (đổi tên 'Phần nội dung đề xuất: gói gọn trong mấy ý?') — bỏ thẻ “một con số nội bộ…” (s07) và cảnh Thảo đọc câu rủi ro mẫu (s17) vì câu mẫu không còn trong bài; thêm s17n (tự nêu rủi ro) và s17p (dẫn sang bài “Trình bày một đề xuất để xin sếp duyệt”). Câu đố: questions[20].",
  scenes: [
    // ── Mở đầu: câu nói trước – sau
    { id: "s01", module: "SCENE-03", ref: "p8,p9",
      data: { set: "meeting", actors: [{ id: "thao" }, { id: "hoa", pose: "hold" }],
        left: { label: "Câu trước", ok: false }, right: { label: "Câu sau", ok: true } },
      lines: [
        L("a1", "thao", "I'm not sure, it's probably not a good idea. You can skip it.", "Em nghĩ chắc không hay lắm, mọi người bỏ qua cũng được ạ.", { phase: "a", face: "worried", pose: "shrug", react: { hoa: "neutral" } }),
        L("b1", "thao", "Every week we answer the same customer questions again and again.", "Mỗi tuần nhóm mình trả lời đi trả lời lại cùng một số câu hỏi của khách.", { phase: "b", pose: "explain" }),
        L("b2", "thao", "I suggest we put them in one shared document.", "Em đề xuất gom chúng vào một tài liệu chung để ai cũng tra được.", { phase: "b", face: "happy", react: { hoa: "happy" } }),
        L("n1", null, "Same idea. The first version sinks it before anyone has heard it.", "Cùng một ý. Câu trước làm ý tưởng chìm trước khi kịp được nghe.", { phase: "b" }),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Trình bày để ý tưởng được nghe?", pose: "present",
        items: ["Ý tưởng gọn trong một câu", "Vấn đề trước, giải pháp sau", "Lợi ích kèm rủi ro", "Kết bằng một đề nghị nhỏ"] },
      lines: [
        L("l1", "det", "So how do you present an idea so people really listen?", "Vậy trình bày ý tưởng sao cho được nghe đến cùng?"),
        L("l2", "det", "Put your idea in one sentence.", "Gói ý tưởng trong một câu."),
        L("l3", "det", "The problem first, then the solution.", "Vấn đề trước, giải pháp sau."),
        L("l4", "det", "Benefits, and the risks too.", "Nêu lợi ích, kèm cả rủi ro."),
        L("l5", "det", "And end with a small request the meeting can decide now.", "Và kết bằng một đề nghị nhỏ mà cuộc họp quyết được ngay."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng trình bày ý tưởng", chapters: [
        { label: "Bắt đầu, chuẩn bị", illus: "memo" },
        { label: "Câu mở đầu", illus: "speech-balloon" },
        { label: "Vấn đề, lợi ích, rủi ro", illus: "balance-scale" },
        { label: "Kết bằng đề nghị", illus: "raised-hand" },
        { label: "Bị hỏi khó", illus: "red-question-mark" },
        { label: "Ngại nói trước đông người", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "Six parts: getting ready, your opening, problem and risks,", "Sáu phần: chuẩn bị, câu mở đầu, vấn đề và rủi ro,"),
        L("l2", null, "your ending, hard questions, and nerves in front of a crowd.", "câu kết, khi bị hỏi khó, và khi ngại nói trước đông người."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Bắt đầu và chuẩn bị" },
      lines: [L("l1", "det", "Part one: shy to speak? Start here, before the meeting.", "Phần một: ngại nói thì bắt đầu từ đâu, chuẩn bị gì?")] },
    { id: "s05", module: "REL-01", ref: "p1",
      data: { cause: "Biết chính xác sẽ nói gì trong hai ba phút, đoán trước câu hỏi", effect: "Nỗi sợ giảm hẳn", causeIllus: "memo", effectIllus: "relieved-face" },
      lines: [
        L("l1", null, "Feeling nervous is normal. But fear drops when you know exactly what you'll say in two or three minutes.", "Ngại là bình thường. Nỗi sợ giảm hẳn khi biết chính xác mình sẽ nói gì trong hai ba phút."),
        L("l2", null, "And when you've guessed the questions.", "Và đã đoán trước được câu hỏi."),
      ] },
    { id: "s05b", module: "HOST-01", ref: "p2",
      data: { pose: "point", text: "Viết ý tưởng thành đúng một câu. Chưa viết được thì chưa đủ rõ để đem ra họp." },
      lines: [
        L("l3", "det", "Start by writing your idea in one sentence. Can't do it? It isn't clear enough yet.", "Bắt đầu: viết ý tưởng thành đúng một câu. Chưa viết được thì chưa đủ rõ để đem ra họp."),
      ] },
    { id: "s06", module: "LIST-02", ref: "p3",
      data: { title: "Ai sẽ quyết, họ quan tâm gì?", items: [
        { icon: "wallet", illus: "money-bag", text: "Tài chính: chi phí" },
        { icon: "trending-up", illus: "chart-increasing", text: "Kinh doanh: doanh số" },
        { icon: "settings", illus: "gear", text: "Vận hành: khối lượng việc" } ], illus: "bullseye" },
      lines: [
        L("l1", null, "Ask: who will decide, and what do they care about?", "Tự hỏi: ai sẽ quyết, và họ quan tâm điều gì?"),
        L("l2", null, "Finance asks about cost. Sales asks about revenue. Operations asks about workload.", "Tài chính hỏi chi phí, kinh doanh hỏi doanh số, vận hành hỏi khối lượng việc."),
        L("l3", null, "Prepare answers for the decision maker's concern.", "Chuẩn bị sẵn câu trả lời cho mối quan tâm của người quyết."),
      ] },
    { id: "s08", module: "CMP-01", ref: "p4",
      data: { labels: ["Nói trước với người bị ảnh hưởng", "Họ nghe lần đầu giữa buổi họp"], left: "Chỉ ra chỗ bạn chưa nghĩ tới; trong họp không bất ngờ", right: "Bất ngờ, dễ phản đối gay gắt trước khi kịp nghĩ", illus: ["handshake", "face-with-open-mouth"] },
      lines: [
        L("l1", null, "Talk first with one or two people your idea affects. Hear their comments.", "Nói trước với một hai người sẽ bị ảnh hưởng để nghe góp ý."),
        L("l2", null, "They may spot gaps you missed. And in the meeting, they won't be surprised.", "Họ có thể chỉ ra chỗ bạn chưa nghĩ tới, và trong buổi họp không bị bất ngờ."),
        L("l3", null, "Hearing it first in the meeting, they may push back before thinking it through.", "Nghe lần đầu giữa buổi họp, họ dễ phản đối trước khi kịp nghĩ kỹ."),
      ] },
    { id: "s09", module: "DLG-01", ref: "p5,p6,p7",
      data: { set: "meeting", label: "Giữa buổi họp lịch giao hàng",
        actors: [{ id: "dung", side: "right", pose: "hold" }, { id: "hoa", side: "center", pose: "hold" }],
        verdict: { ok: false, label: "Chen ngang giữa chuyện khác",
          why: "Mọi người đang dở chuyện khác, chưa ai kịp nghĩ; “để sau” thường không bao giờ đến." } },
      lines: [
        L("l1", null, "The team is discussing delivery times. Dũng suddenly remembers an idea.", "Cả phòng đang bàn lịch giao hàng. Dũng chợt nhớ ra một ý tưởng."),
        L("l2", "dung", "Oh! I have an idea about how we take orders!", "À! Em có ý này về cách ghi nhận đơn!", { pose: "wave", face: "happy", react: { hoa: "surprised" } }),
        L("l3", "hoa", "Good idea. Let's discuss it later.", "Ý hay, để sau bàn nhé.", { pose: "explain", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "Mid-topic, nobody is ready to think. And that “later” never comes.", "Đang dở chuyện khác, chưa ai kịp nghĩ. Và lần “sau” ấy không bao giờ đến."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l7", "dung", "Could I have five minutes at the end of Monday's meeting for a small proposal about the call center?", "Cô cho em năm phút cuối buổi họp thứ Hai để nêu một đề xuất nhỏ về tổng đài được không ạ?", { phase: "redo", pose: "explain", face: "thinking", react: { hoa: "happy" } }),
        L("l8", "det", "Ask for a slot on the agenda. Don't jump in.", "Xin một chỗ trong chương trình, đừng chen ngang.", { phase: "redo" }),
      ] },

    // ── Chương 2
    { id: "s10", module: "HOST-03", data: { n: 2, of: 6, title: "Câu mở đầu" },
      lines: [L("l1", "det", "Part two: your opening line.", "Phần hai: câu mở đầu nên nói thế nào?")] },
    { id: "s11", module: "CMP-07", ref: "p8",
      data: { wrong: "Em cũng chưa chắc lắm, chắc ý này không hay đâu ạ", right: "Em đề xuất gom câu hỏi của khách vào tài liệu chung", diff: ["chưa chắc", "không hay"], note: "Mở bằng ý chính, không xin lỗi trước" },
      lines: [
        L("l1", null, "Open with your main point. Don't apologize first.", "Mở bằng ý chính, không xin lỗi trước."),
        L("l2", null, "“I'm not so sure, this idea probably isn't good” makes people rate it low before they hear it.", "Câu “em cũng chưa chắc lắm, chắc ý này không hay đâu ạ” khiến người nghe đánh giá thấp ngay."),
        L("l3", null, "Lead with the problem the team has, then your idea in one sentence.", "Mở bằng vấn đề cả nhóm đang gặp, rồi nói đề xuất gọn trong một câu."),
      ] },
    { id: "s12", module: "HOST-02", ref: "p10",
      data: { statement: "Xin lỗi trước cho khiêm tốn thì ý tưởng dễ được nhận", truth: false,
        why: "Tự hạ thấp trước như mời người nghe bỏ qua ý tưởng khi chưa kịp nghe." },
      lines: [
        L("l1", "det", "Apologizing first, to sound humble, helps your idea get accepted. True or false?", "Xin lỗi trước cho khiêm tốn thì ý tưởng dễ được nhận. Đúng hay sai?"),
        L("l2", "det", "False. It invites people to skip it. Don't apologize before you share your idea.", "Sai. Như mời người nghe bỏ qua. Đừng xin lỗi trước khi nói ý của mình.", { face: "wink" }),
      ] },

    // ── Chương 3
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Vấn đề, lợi ích, rủi ro" },
      lines: [L("l1", "det", "Part three: problem first, then benefits, costs and risks.", "Phần ba: vấn đề trước; rồi lợi ích, chi phí, rủi ro.")] },
    { id: "s14", module: "SCENE-01", ref: "p11",
      data: { set: "meeting", label: "Vấn đề trước", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "center", pose: "hold" }] },
      lines: [
        L("l1", null, "People only care about a solution once they see the problem.", "Người nghe chỉ quan tâm giải pháp khi đã thấy vấn đề."),
        L("l2", "thao", "Over the last three months, about a third of calls asked where an order is.", "Theo thống kê tổng đài ba tháng qua, khoảng một phần ba cuộc gọi là hỏi đơn hàng đang ở đâu,", { pose: "explain", to: "hoa" }),
        L("l3", "thao", "Each one takes a few minutes of staff time.", "mỗi cuộc mất vài phút của nhân viên.", { pose: "point", react: { hoa: "thinking" } }),
        L("l4", null, "Only then, the proposal, in one sentence.", "Sau đó mới nêu đề xuất trong một câu."),
      ] },
    { id: "s15", module: "CMP-03", ref: "p12",
      data: { title: "Đề xuất tin nhắn tự động báo trạng thái đơn", illus: "telephone-receiver",
        a: { label: "Mở bằng giải pháp", do: "“Em đề xuất làm hệ thống gửi tin nhắn tự động.”", result: "Bị hỏi chi phí, dễ bị gạt", illus: "mobile-phone" },
        b: { label: "Mở bằng vấn đề", do: "Số cuộc gọi chỉ hỏi đơn ở đâu", result: "Chi phí cạnh thời gian tiết kiệm", illus: "bar-chart" } },
      lines: [
        L("l1", null, "Open with the solution: finance asks the cost, tech says they are overloaded.", "Mở bằng giải pháp: tài chính hỏi chi phí, kỹ thuật bảo quá tải; ý tưởng bị gạt."),
        L("l2", null, "Open with the number of status calls: the cost sits next to time saved.", "Mở bằng số cuộc gọi hỏi đơn: chi phí đặt cạnh thời gian tiết kiệm."),
      ] },
    { id: "s15b", module: "HOST-01", ref: "p13",
      data: { pose: "point", text: "Cho thấy vấn đề trước, rồi mới đưa giải pháp." },
      lines: [
        L("l4", "det", "Show the problem first, then bring the solution.", "Cho thấy vấn đề trước, rồi mới đưa giải pháp."),
      ] },
    { id: "s16", module: "REL-12", ref: "p14",
      data: { center: { label: "Nội dung đề xuất trả lời ba câu", illus: "red-question-mark" }, spokes: [
        { label: "Được gì?", illus: "trophy" },
        { label: "Dựa vào đâu?", illus: "bar-chart" },
        { label: "Tốn bao nhiêu?", illus: "money-bag" } ] },
      lines: [
        L("l1b", null, "Your proposal should answer three questions people will surely think of.", "Nội dung đề xuất cần trả lời ba câu người nghe chắc chắn nghĩ đến."),
        L("l2", null, "What do we gain? What is it based on? How much does it cost?", "Được gì? Dựa vào đâu? Tốn bao nhiêu?"),
        L("l3b", null, "Bring one or two real numbers, and say where they come from.", "Kèm một hai con số có thật, nói rõ nguồn."),
      ] },
    { id: "s17n", module: "TEXT-04", ref: "p14",
      data: { text: "Tự nêu rủi ro kèm cách giảm: người nghe tin là bạn đã nghĩ kỹ.", marks: ["Tự nêu rủi ro"], illus: "balance-scale" },
      lines: [
        L("l1", null, "Name the risks yourself, with a way to reduce them.", "Hãy tự nêu rủi ro kèm cách giảm."),
        L("l2", null, "When you name the risk yourself, people trust that you thought it through.", "Khi bạn tự nói rủi ro, người nghe tin là bạn đã nghĩ kỹ."),
      ] },
    { id: "s17p", module: "TEXT-01", ref: "p14",
      data: { text: "Xem thêm: “Trình bày một đề xuất để xin sếp duyệt”", illus: "open-book" },
      lines: [
        L("l1", null, "How to prepare each part is in the lesson on presenting a proposal for approval. Here, we focus on speaking in the meeting.", "Cách chuẩn bị từng phần có ở bài “Trình bày một đề xuất để xin sếp duyệt”; bài này lo phần nói trong họp."),
      ] },

    // ── Chương 4
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Kết bằng một đề nghị" },
      lines: [L("l1", "det", "Part four: how to end so the idea isn't forgotten.", "Phần bốn: kết thúc thế nào để ý tưởng không bị bỏ quên?")] },
    { id: "s19", module: "DLG-01", ref: "p14,p15,p16",
      data: { set: "meeting", label: "Lịch trực mới",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "center", pose: "hold" }],
        verdict: { ok: false, label: "Kết bằng im lặng",
          why: "Không xin quyết định nào: người chủ trì chuyển mục, một tháng sau vẫn như cũ." } },
      lines: [
        L("l1", null, "Thảo presents a new duty schedule. It's convincing. Everyone nods.", "Thảo trình bày cách sắp lại lịch trực, khá thuyết phục, mọi người gật đầu."),
        L("l2", "thao", "That's my idea.", "Đó là ý tưởng của em ạ.", { face: "happy", pose: "hold", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Then silence. The chair moves on. A month later, the schedule hasn't changed.", "Rồi im lặng. Người chủ trì chuyển mục. Một tháng sau, lịch trực vẫn như cũ."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6b", "thao", "I propose a four-week trial in one warehouse.", "Em đề nghị cho chạy thử bốn tuần ở một kho.", { phase: "redo", pose: "explain", face: "happy", react: { hoa: "happy" } }),
        L("l7", "det", "A small request with a time limit is easier to approve than a big plan.", "Đề nghị nhỏ, có thời hạn, dễ được đồng ý hơn một kế hoạch lớn.", { phase: "redo" }),
        L("l8", "det", "End with a request, not with silence.", "Kết bằng một đề nghị, đừng kết bằng im lặng.", { phase: "redo" }),
      ] },

    // ── Chương 5
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Bị hỏi khó" },
      lines: [L("l1", "det", "Part five: hard questions and push-back.", "Phần năm: bị hỏi khó hay bị phản biện thì sao?")] },
    { id: "s21", module: "SCENE-01", ref: "p17,p18",
      data: { set: "meeting", label: "Câu hỏi về chi phí", actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "cross" }] },
      lines: [
        L("l1", "binh", "How much will this cost?", "Việc này tốn bao nhiêu?", { face: "stern", to: "thao" }),
        L("l2", null, "Push-back means people are interested. Thank them, and repeat the question.", "Phản biện là dấu hiệu người nghe quan tâm. Cảm ơn và nhắc lại câu hỏi."),
        L("l3", "thao", "Thank you. So you're asking about the cost.", "Cảm ơn bác. Bác đang hỏi về chi phí ạ.", { pose: "hold", face: "thinking" }),
        L("l4", "thao", "I don't have that number yet. I'll send it to you before Friday.", "Phần này em chưa có số liệu, em gửi lại bác trước thứ Sáu.", { pose: "explain", face: "neutral", react: { binh: "neutral" } }),
        L("l5", null, "Answer briefly and directly. A fair point? Accept it and adjust. Don't get defensive.", "Trả lời ngắn và thẳng. Góp ý hợp lý thì ghi nhận, điều chỉnh, không phòng thủ."),
      ] },

    // ── Chương 6
    { id: "s22", module: "HOST-03", data: { n: 6, of: 6, title: "Ngại nói trước đông người" },
      lines: [L("l1", "det", "Part six: nervous in front of many people?", "Phần sáu: ngại nói trước đông người thì có cách nào?")] },
    { id: "s23", module: "LIST-13", ref: "p19",
      data: { title: "Trước buổi họp", items: [
        { title: "Gửi trước một bản tóm tắt ngắn", detail: "Họ đọc rồi, phần nói chỉ cần nhấn ý chính, trả lời câu hỏi.", illus: "envelope-with-arrow" },
        { title: "Tập nói thử ở nhà", detail: "Canh giờ, không quá ba phút.", illus: "stopwatch" } ] },
      lines: [
        L("l1", null, "Send a short summary in advance.", "Gửi trước một bản tóm tắt ngắn cho mọi người."),
        L("l2", null, "If they've read it, you only need to stress the key points and answer questions.", "Khi họ đã đọc, phần nói chỉ cần nhấn ý chính và trả lời câu hỏi."),
        L("l3", null, "Practise at home with a timer. No more than three minutes.", "Tập nói thử ở nhà, canh giờ, không quá ba phút."),
      ] },
    { id: "s24", module: "LIST-05", ref: "p20",
      data: { title: "Khi nói", items: ["Chậm và rõ", "Dừng một chút sau mỗi ý quan trọng", "Nhìn người nghe, nhất là người quyết", "Slide: mỗi slide một ý, chữ ít, số to"], illus: "speaking-head" },
      lines: [
        L("l1", null, "Speak slowly and clearly. Pause after each key point.", "Nói chậm và rõ, dừng một chút sau mỗi ý quan trọng."),
        L("l2", null, "Look at your listeners, especially the decision maker.", "Nhìn vào người nghe, nhất là người quyết."),
        L("l3", null, "Slides? One idea each, few words, big numbers.", "Dùng slide: mỗi slide một ý, chữ ít, số to."),
      ] },
    { id: "s25", module: "TEXT-04", ref: "p21",
      data: { text: "Sau buổi họp, gửi email ngắn: đề xuất, câu hỏi còn mở, bước tiếp theo đã thống nhất.", marks: ["bước tiếp theo"], illus: "e-mail" },
      lines: [
        L("l1", null, "After the meeting, send a short email: the proposal, open questions, and agreed next steps.", "Sau buổi họp, gửi email ngắn: đề xuất, câu hỏi còn mở, bước tiếp theo."),
        L("l2", null, "So your idea doesn't drift away with the meeting.", "Để ý tưởng không trôi đi theo cuộc họp."),
      ] },
    { id: "s26", module: "SCENE-01", ref: "p22",
      data: { set: "meeting", label: "Bằng tiếng Anh", actors: [{ id: "thao", side: "left" }, { id: "sam", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "thao", "I would like to suggest a small change.", "Em muốn đề xuất một thay đổi nhỏ.", { pose: "explain", to: "sam" }),
        L("l2", "thao", "The problem is that many calls are about order status.", "Vấn đề là nhiều cuộc gọi chỉ hỏi trạng thái đơn hàng.", { pose: "point", react: { sam: "thinking" } }),
        L("l3", "thao", "I propose a four week trial.", "Em đề nghị chạy thử bốn tuần.", { face: "happy" }),
        L("l4", "thao", "I do not have that number now, I will send it by Friday.", "Con số đó em chưa có, em sẽ gửi trước thứ Sáu.", { face: "neutral", react: { sam: "happy" } }),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s27", module: "HOST-01", ref: "p7,p10,p13,p16",
      data: { title: "Bốn câu mang về", pose: "present", items: ["Xin chỗ trong chương trình, đừng chen ngang", "Đừng xin lỗi trước khi nói ý", "Vấn đề trước, giải pháp sau", "Kết bằng đề nghị, đừng bằng im lặng"] },
      lines: [
        L("l1", "det", "Ask for a slot. Don't jump in.", "Xin một chỗ trong chương trình, đừng chen ngang."),
        L("l2", "det", "Don't apologize before your idea.", "Đừng xin lỗi trước khi nói ý của mình."),
        L("l3", "det", "Problem first, solution second.", "Cho thấy vấn đề trước, rồi mới đưa giải pháp."),
        L("l4", "det", "End with a request, not silence.", "Kết bằng một đề nghị, đừng kết bằng im lặng."),
      ] },
    { id: "s28", module: "QUIZ-01", ref: "questions[20]",
      data: {
        q: "How should you end your idea presentation?",
        options: [
          "With a demand to start the full project from tomorrow",
          "With a clear, small request, like a four week trial in one warehouse",
          "With a thank you and silence, so people can think quietly",
        ],
        correct: 1, countdown: 5, illus: "test-tube",
        why: "Một đề nghị nhỏ, có thời hạn, dễ được quyết ngay.",
      },
      lines: [
        L("l1", null, "How should you end your idea presentation?", "Bạn nên kết thúc phần trình bày ý tưởng thế nào?"),
        L("l2", null, "With a clear, small request, like a four week trial in one warehouse.", "Bằng một đề nghị nhỏ, rõ ràng, như chạy thử bốn tuần ở một kho."),
        L("l3", null, "End in silence, and a month later, nothing has changed.", "Kết bằng im lặng thì một tháng sau, mọi thứ vẫn như cũ."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Write your idea in one sentence, with one number and one small request.", "Viết ý tưởng thành một câu, kèm một con số và một đề nghị nhỏ."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
