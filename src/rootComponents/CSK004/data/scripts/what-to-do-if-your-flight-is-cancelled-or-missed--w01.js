// Kịch bản video W lần 3 (#110) — "Lỡ chuyến bay hoặc bị huỷ chuyến thì phải làm sao?" · chuỗi "Gặp sự cố ở nước ngoài: làm gì ngay"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); nhân vật hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "what-to-do-if-your-flight-is-cancelled-or-missed--w01",
  hook: "HOOK-03",
  loop: { open: "s01", close: "s22" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "travellers-in-trouble", slug: "what-to-do-if-your-flight-is-cancelled-or-missed", door: "ky-nang", level: "B1",
    title: "Lỡ chuyến bay hoặc bị huỷ chuyến thì phải làm sao?", series: "Gặp sự cố ở nước ngoài: làm gì ngay" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” trong ❓ p7 và Mai (p5) → Thảo; Nam → Dũng; Lan (p5) → Bác Bình (tránh trùng với nhân vật Lan của dàn); nhân viên quầy hãng bay ở nước ngoài (p14–p16, không tên) → Sam (vai mới, chỉ nói câu trung lập). Chuyện Nhân (p12) và Sang (p19) kể qua thẻ, không nêu tên, không lên hình. Vai mới: Sam (s15). HOOK-03: câu hỏi “có nên mua ngay vé hãng khác” ở s01 được trả lời ở s08 (DLG-01). s09 là cảnh ba người duy nhất của video. Phủ ý: 22/22.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p7",
      data: { set: "airport", label: "Chuyến bay của Thảo", actors: [{ id: "thao", side: "center" }], props: ["airplane-departure"] },
      lines: [
        L("l1", "thao", "Cancelled? My flight is cancelled!", "Huỷ chuyến? Chuyến của mình bị huỷ rồi!", { face: "surprised" }),
        L("l2", "thao", "The next counter still has tickets. Expensive, but should I buy one now, just to be safe?", "Quầy hãng bên cạnh vẫn còn vé. Hơi đắt, mua ngay cho chắc nhỉ?", { face: "worried", pose: "think" }),
        L("l3", null, "Flight cancelled or missed. What would you do first?", "Bị huỷ hay lỡ chuyến: bạn sẽ làm gì trước?"),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Sự cố ở sân bay", pose: "present", illus: "airplane-departure",
        items: ["Hành động trong 15 phút đầu", "Nói rõ điều mình cần ở quầy", "Giữ mọi giấy tờ, hoá đơn"] },
      lines: [
        L("l1", "det", "People who act in the first fifteen minutes get more seat choices. Remember three things:", "Ai hành động trong mười lăm phút đầu thường có nhiều lựa chọn chỗ hơn. Nhớ ba điều:"),
        L("l2", "det", "Contact the airline through every channel, at once.", "Liên hệ hãng qua mọi kênh cùng lúc."),
        L("l3", "det", "Say clearly what you need at the desk.", "Nói rõ điều mình cần ở quầy."),
        L("l4", "det", "Keep every paper and receipt.", "Giữ mọi giấy tờ, hoá đơn."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Hôm nay mình đi qua",
        chapters: [
          { label: "Lỡ chuyến hay bị huỷ", illus: "balance-scale" },
          { label: "Mười lăm phút đầu", illus: "stopwatch" },
          { label: "Đến muộn, lỡ chuyến", illus: "running-shoe" },
          { label: "Nói gì ở quầy", illus: "speech-balloon" },
          { label: "Chờ lâu, giữ giấy tờ", illus: "receipt" },
          { label: "Báo ai, gửi hồ sơ", illus: "e-mail" } ] },
      lines: [
        L("l1", null, "Six stops. Missed or cancelled. The first fifteen minutes. Arriving late.", "Sáu chặng. Lỡ hay huỷ. Mười lăm phút đầu. Đến muộn."),
        L("l2", null, "At the desk. Long waits. And who to tell.", "Ở quầy. Chờ lâu. Và báo ai."),
      ] },

    // Chương 1: p1–p2
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Lỡ chuyến hay bị huỷ" },
      lines: [L("l1", "det", "Part one: missed or cancelled. What's the difference?", "Phần một: lỡ chuyến và bị huỷ khác nhau ở đâu?")] },
    { id: "s05", module: "TEXT-01", ref: "p1",
      data: { text: "Khác nhau ở chỗ lỗi thuộc về ai", illus: "balance-scale" },
      lines: [
        { id: "l1", lang: "en", say: "The difference is whose fault it is.", sub: "Khác nhau ở chỗ lỗi thuộc về ai." },
      ] },
    { id: "s05b", module: "CMP-01", ref: "p1",
      data: { labels: ["Lỗi của bạn", "Lỗi của hãng"], left: "Đến muộn, quên giấy tờ, kẹt xe: thường bạn chịu phí đổi vé", right: "Huỷ chuyến, đổi giờ, chặng trước cùng vé bị trễ: hãng có trách nhiệm hỗ trợ", illus: ["automobile", "airplane"] },
      lines: [
        { id: "l2", lang: "en", say: "You're late, forgot your papers, or stuck in traffic? You usually pay to change.", sub: "Bạn đến muộn, quên giấy tờ, kẹt xe? Thường bạn chịu phí đổi vé." },
        { id: "l3", lang: "en", say: "The airline cancels, changes the time, or a late first flight on the same ticket makes you miss the next?", sub: "Hãng huỷ, đổi giờ, hay chặng trước cùng vé bị trễ làm lỡ nối chuyến?" },
        { id: "l4", lang: "en", say: "Then the airline is mainly responsible, and must help to some degree.", sub: "Thì hãng có trách nhiệm hỗ trợ ở một mức nhất định." },
      ] },
    { id: "s06", module: "LIST-13", ref: "p2",
      data: { title: "Được hỗ trợ đến đâu?",
        items: [
          { title: "Khác nhau theo nước, hãng, điều kiện vé", detail: "Hai người cùng chuyến có thể được hỗ trợ khác nhau.", illus: "ticket" },
          { title: "Ở nhiều nơi khi hãng huỷ", detail: "Ít nhất được chọn bay chuyến khác hoặc hoàn tiền; chờ lâu có thể được ăn, nghỉ.", illus: "fork-and-knife-with-plate" },
          { title: "Đừng đoán", detail: "Hỏi thẳng nhân viên hãng.", illus: "red-question-mark" } ] },
      lines: [
        L("l1", null, "How much help depends on the country, the airline and your ticket.", "Mức hỗ trợ khác nhau theo quốc gia, theo hãng, theo điều kiện vé."),
        L("l2", null, "So two people on the same flight can get different help.", "Nên hai người cùng chuyến có thể được hỗ trợ khác nhau."),
        L("l3", null, "In many places, if the airline cancels, you can choose another flight or your money back.", "Ở nhiều nơi, hãng huỷ thì ít nhất bạn được chọn chuyến khác hoặc hoàn tiền."),
        L("l4", null, "A long wait may come with a meal or a place to sleep.", "Chờ lâu có thể được hỗ trợ ăn uống hay chỗ nghỉ."),
        L("l5", "det", "Don't guess. Ask the staff directly.", "Đừng đoán, hãy hỏi thẳng nhân viên."),
      ] },

    // Chương 2: p3–p8
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Mười lăm phút đầu" },
      lines: [L("l1", "det", "Part two: the first fifteen minutes after a cancellation.", "Phần hai: mười lăm phút đầu sau khi bị huỷ chuyến.")] },
    { id: "s08", module: "DLG-01", ref: "p3,p7,p8",
      data: { set: "airport", label: "Ngay lúc ấy",
        actors: [{ id: "thao", side: "center" }],
        verdict: { ok: false, label: "Mua ngay vé hãng khác khi chưa hỏi",
          why: "Vé tự mua có thể không hoàn được, và đòi hãng cũ trả khoản này thường rất khó.",
          rule: "Đọc tin của hãng trước khi móc ví" } },
      lines: [
        L("l1", "thao", "No time to waste.", "Không chần chừ nữa.", { face: "worried" }),
        L("l2", "thao", "I'll buy that other ticket right now!", "Mua luôn vé hãng kia cho chắc!", { pose: "point", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern", pose: "stop" }),
        L("l4", "det", "Many airlines rebook you on their own. Check your email and messages first.", "Nhiều hãng đã tự xếp bạn sang chuyến khác. Xem email, tin nhắn trước."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "First, my airline's email and messages…", "Trước tiên, email và tin nhắn của hãng mình…", { phase: "redo", pose: "phone", face: "thinking" }),
        L("l7", "thao", "They've put me on a flight a few hours later. No extra cost!", "Hãng đã xếp mình sang chuyến vài tiếng sau. Không mất thêm tiền!", { phase: "redo", face: "happy", pose: "thumb" }),
        L("l8", "det", "Read the airline's messages before you open your wallet.", "Đọc tin của hãng trước khi móc ví.", { phase: "redo" }),
      ] },
    { id: "s09", module: "SCENE-01", ref: "p4,p5",
      data: { set: "airport", label: "Làm mẫu: ba người bạn",
        actors: [{ id: "thao", side: "left", pose: "phone" }, { id: "dung", side: "center" }, { id: "binh", side: "right", enter: "walk", at: "l3" }] },
      lines: [
        L("l1", "thao", "Nothing in the email yet. I'll call the airline.", "Email chưa có chuyến mới. Mình gọi tổng đài.", { pose: "phone" }),
        L("l2", "dung", "I'll queue at the desk.", "Tôi ra quầy xếp hàng.", { pose: "point" }),
        L("l3", "binh", "The app says the evening flight still has seats! I'll message you, Dung.", "Ứng dụng báo chuyến tối còn chỗ! Bác nhắn Dũng nhé.", { face: "happy", pose: "phone", to: "dung" }),
        L("l4", null, "One queues, one calls, one checks online. Seats on the next flight go fast.", "Một người xếp hàng, một người gọi, một người tra mạng. Ghế chuyến kế hết rất nhanh."),
        L("l5", null, "Whichever channel answers first, the group follows it.", "Kênh nào xong trước, cả nhóm theo kênh đó."),
      ] },
    { id: "s10", module: "TEXT-02", ref: "p6",
      data: { text: "Huỷ chuyến thì chia việc, đừng ngồi chờ loa.", keywords: ["chia việc", "chờ loa"], illus: "loudspeaker" },
      lines: [L("l1", "det", "Cancelled? Share the tasks. Don't wait for announcements.", "Huỷ chuyến thì chia việc, đừng ngồi chờ loa.")] },

    // Chương 3: p9–p13
    { id: "s11", module: "HOST-03", data: { n: 3, of: 6, title: "Đến muộn, lỡ chuyến" },
      lines: [L("l1", "det", "Part three: you arrived late, and missed it.", "Phần ba: mình đến muộn, lỡ chuyến rồi.")] },
    { id: "s12", module: "LIST-13", ref: "p9,p10,p11",
      data: { title: "Lỡ chuyến: làm ngay", items: [{ title: "Ra quầy hãng hoặc quầy chuyển chuyến", detail: "Đừng về khách sạn trước.", illus: "airplane" }, { title: "Hỏi các phương án", detail: "Chuyến sau trong ngày, phí đổi vé, vé có linh hoạt không.", illus: "red-question-mark" }, { title: "Hỏi chặng về", detail: "Không bay một chặng, các chặng sau cùng vé có thể bị huỷ.", illus: "airplane-arrival" }, { title: "Mua qua đại lý? Gọi song song", detail: "So phí đổi vé với giá vé mới rồi mới quyết.", illus: "telephone-receiver" }] },
      lines: [
        { id: "l1", lang: "en", say: "Go straight to the airline's ticket desk or transfer desk. Not back to the hotel.", sub: "Ra ngay quầy hãng hoặc quầy chuyển chuyến, đừng về khách sạn trước." },
        { id: "l2", lang: "en", say: "Ask about later flights today, the change fee, and whether your ticket is flexible.", sub: "Hỏi chuyến sau trong ngày, phí đổi vé, vé có linh hoạt không." },
        { id: "l3", lang: "en", say: "With many airlines, skip one flight and the later ones on that ticket can be cancelled.", sub: "Ở nhiều hãng, không bay một chặng thì các chặng sau cùng vé có thể bị huỷ." },
        { id: "l4", lang: "en", say: "So tell them early, and ask if your return flight is still kept.", sub: "Báo hãng sớm, hỏi rõ chặng về còn giữ không." },
        { id: "l5", lang: "en", say: "Booked through an agent? Call them at the same time. Either may be faster.", sub: "Mua qua đại lý? Gọi đại lý song song, bên nào cũng có thể nhanh hơn." },
        { id: "l6", lang: "en", say: "Compare the change fee with a new ticket before you decide.", sub: "So phí đổi vé với giá vé mới trước khi quyết định." },
      ] },
    { id: "s13", module: "RSN-08", ref: "p12,p13",
      data: { beats: [
        { text: "Kẹt xe, đến nơi quầy làm thủ tục đã đóng", illus: "automobile" },
        { text: "Bực, mệt, bắt xe về khách sạn “cho bình tĩnh”", link: "therefore", illus: "hotel" },
        { text: "Tối mới gọi tổng đài: chuyến sau đã hết chỗ", link: "but", illus: "telephone-receiver" },
        { text: "Chặng về cũng bị huỷ, vì không bay chặng đi", link: "therefore", illus: "cross-mark" } ] },
      lines: [
        L("l1", null, "One traveller got stuck in traffic. The check in desk had closed.", "Một vị khách kẹt xe, đến nơi thì quầy thủ tục đã đóng."),
        L("l2", null, "Angry and tired, he went back to the hotel to calm down.", "Bực và mệt, anh bắt xe về khách sạn cho bình tĩnh."),
        L("l3", null, "He called that evening. The next flight was full.", "Tối mới gọi tổng đài: chuyến sau trong ngày đã hết chỗ."),
        L("l4", null, "And his return flight was cancelled too, because he didn't fly the first one.", "Còn bị báo chặng về cũng huỷ, vì không bay chặng đi."),
        L("l5", "det", "Missed a flight? Go to the desk, not back to your room.", "Lỡ chuyến thì ra quầy, đừng về phòng."),
      ] },

    // Chương 4: p14–p16
    { id: "s14", module: "HOST-03", data: { n: 4, of: 6, title: "Nói gì ở quầy" },
      lines: [L("l1", "det", "Part four: at the desk, what do you say?", "Phần bốn: đến quầy rồi, nói gì để được giúp nhanh?")] },
    { id: "s15", module: "SCENE-01", ref: "p14,p15",
      data: { set: "airport", label: "Quầy hãng bay", actors: [{ id: "dung", side: "left" }, { id: "sam", side: "right" }] },
      lines: [
        L("l1", "dung", "I saw the evening flight still has seats. Can you put me on that flight?", "Tôi thấy chuyến tối còn chỗ. Anh xếp giúp tôi lên chuyến đó được không?", { pose: "explain", to: "sam" }),
        L("l2", "sam", "Let me check. Yes, I can do that.", "Để tôi xem. Vâng, được ạ.", { face: "happy" }),
        L("l3", "dung", "Am I entitled to a meal or a hotel?", "Tôi có được hỗ trợ bữa ăn hay khách sạn không?", { face: "thinking" }),
        L("l4", "dung", "Could I have that in writing, please?", "Anh ghi giúp tôi bằng văn bản được không?", { pose: "give" }),
        L("l5", null, "A specific request gets help faster than a complaint. And written proof matters for insurance.", "Đề xuất cụ thể được giúp nhanh hơn than phiền. Và giấy xác nhận rất cần cho bảo hiểm."),
      ] },
    { id: "s16", module: "HOST-02", ref: "p16",
      data: { statement: "Không đồng ý với quầy thì cứ to tiếng cho họ sợ", truth: false,
        why: "Nhân viên không gây ra việc huỷ, nhưng họ giúp bạn có chỗ sớm hơn. Hỏi kênh khiếu nại chính thức." },
      lines: [
        L("l1", "det", "Don't like the offer? Shout, and they'll give you more. True or false?", "Không đồng ý thì to tiếng cho được việc. Đúng hay sai?"),
        L("l2", "det", "False. The desk staff didn't cancel your flight. But they can get you a seat sooner.", "Sai. Nhân viên quầy không gây ra việc huỷ, nhưng họ giúp bạn có chỗ sớm hơn.", { face: "stern" }),
        L("l3", "det", "Stay polite. Disagree? Ask calmly for the official complaint channel.", "Giữ giọng lịch sự. Không đồng ý thì bình tĩnh hỏi kênh khiếu nại chính thức."),
      ] },

    // Chương 5: p17–p20
    { id: "s17", module: "HOST-03", data: { n: 5, of: 6, title: "Chờ lâu, giữ giấy tờ" },
      lines: [L("l1", "det", "Part five: a long wait. Food, sleep, and papers.", "Phần năm: phải chờ lâu, ăn ngủ và giữ giấy tờ thế nào.")] },
    { id: "s18", module: "LIST-05", ref: "p17",
      data: { title: "Trong lúc chờ, giữ lại",
        items: ["Ảnh bảng hoặc tin nhắn báo huỷ chuyến", "Phiếu ăn, phiếu khách sạn hãng đưa", "Ảnh mọi hoá đơn ăn, đi lại, phòng nghỉ", "Tên nhân viên và giờ trao đổi"] },
      lines: [
        L("l1", null, "Photograph the cancellation notice or message.", "Chụp ảnh bảng thông báo hoặc tin nhắn huỷ chuyến."),
        L("l2", null, "Keep any meal or hotel vouchers.", "Giữ phiếu ăn, phiếu khách sạn hãng đưa."),
        L("l3", null, "Photograph every receipt: food, transport, a room.", "Chụp mọi hoá đơn: ăn uống, đi lại, phòng nghỉ."),
        L("l4", null, "Note staff names and times. If a promise isn't kept, you can explain clearly later.", "Ghi tên nhân viên và giờ trao đổi, để sau này giải thích rõ nếu lời hứa không thành."),
      ] },
    { id: "s19", module: "TEXT-03", ref: "p18",
      data: { text: "Có chuyến mới hoặc hướng dẫn rõ mới rời sân bay.", illus: "airplane-departure" },
      lines: [
        L("l1", null, "Only leave the airport with a new flight, or clear instructions from the airline.", "Chỉ rời sân bay khi đã có chuyến mới hoặc hãng hướng dẫn rõ."),
        L("l2", null, "Must leave the secure area? First ask what happens to your checked suitcase.", "Phải ra khỏi khu cách ly? Hỏi trước hành lý ký gửi sẽ được xử lý thế nào."),
      ] },
    { id: "s20", module: "RSN-08", ref: "p19,p20",
      data: { beats: [
        { text: "Trễ chuyến gần một ngày, tự trả tiền ăn và một đêm khách sạn", illus: "hotel" },
        { text: "Trả tiền mặt, không lấy hoá đơn, không xin hãng xác nhận", link: "but", illus: "dollar-banknote" },
        { text: "Về nước: bảo hiểm có hỗ trợ chậm chuyến, cần hoá đơn và xác nhận", link: "therefore", illus: "page-facing-up" },
        { text: "Không có thứ nào để nộp", link: "therefore", illus: "cross-mark" } ] },
      lines: [
        L("l1", null, "Another traveller: delayed almost a day, paid for meals and a hotel night.", "Một vị khách khác: trễ chuyến gần một ngày, tự trả tiền ăn và một đêm khách sạn."),
        L("l2", null, "He paid cash, kept no receipts, and asked for no airline confirmation.", "Trả tiền mặt, không lấy hoá đơn, không xin hãng xác nhận."),
        L("l3", null, "At home, his insurance covered delays. But it needed receipts and the airline's confirmation.", "Về nước mới thấy bảo hiểm có hỗ trợ chậm chuyến, nhưng cần hoá đơn và xác nhận của hãng."),
        L("l4", null, "He had nothing to send.", "Anh không có thứ nào để nộp."),
        L("l5", "det", "Today's receipts are tomorrow's money back.", "Hoá đơn hôm nay là tiền về ngày mai."),
      ] },

    // Chương 6: p21–p22
    { id: "s21", module: "HOST-03", data: { n: 6, of: 6, title: "Báo ai, gửi hồ sơ" },
      lines: [L("l1", "det", "Last part: who to tell, and what to do after the trip.", "Phần cuối: báo cho ai, và sau chuyến đi làm gì.")] },
    { id: "s22", module: "SCENE-02", ref: "p21",
      data: { set: "airport", label: "Báo giờ mới", actor: { id: "thao", side: "left" },
        contact: { name: "Đối tác", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Chuyến của em bị huỷ, em đổi sang chuyến tối mai, dự kiến đến lúc chín giờ tối, em sẽ báo lại nếu có thay đổi.", at: "l2" },
          { from: "them", text: "Cảm ơn em đã báo.", at: "l3" } ] },
      lines: [
        L("l1", null, "New flight time? Tell the hotel at your destination, the person meeting you, or partners if you're working.", "Có giờ bay mới? Báo ngay khách sạn nơi đến, người đón, hoặc đối tác nếu đang công tác."),
        L("l2", "thao", "My flight was cancelled. I'm on tomorrow evening's flight, arriving around nine p.m. I'll update you if anything changes.", "Chuyến em bị huỷ, em đổi sang chuyến tối mai, dự kiến chín giờ tối đến, có thay đổi em báo.", { face: "neutral" }),
        L("l3", "them", "Thanks for letting me know.", "Cảm ơn em đã báo."),
        L("l4", null, "Short: the reason, the new flight, and when you'll arrive.", "Ngắn gọn: lý do, chuyến mới, giờ dự kiến đến."),
      ] },
    { id: "s23", module: "TEXT-04", ref: "p22",
      data: { text: "Về đến nơi, gửi hồ sơ cho hãng hoặc bảo hiểm sớm, kèm xác nhận huỷ hoặc trễ chuyến và hoá đơn.", marks: ["sớm"], illus: "e-mail" },
      lines: [
        L("l1", null, "Once you arrive, send your claim to the airline or insurer soon.", "Về đến nơi, gửi hồ sơ cho hãng hoặc bảo hiểm sớm."),
        L("l2", null, "Include the cancellation or delay confirmation, and the receipts. There's usually a time limit.", "Kèm xác nhận huỷ hoặc trễ chuyến và hoá đơn. Thời hạn nộp thường có giới hạn."),
      ] },

    { id: "s24", module: "END-02", ref: "outro",
      data: { points: ["Đọc tin của hãng, rồi chia việc", "Ra quầy, đề xuất cụ thể, lịch sự", "Chụp mọi hoá đơn, xin xác nhận"], icons: ["mobile-phone", "speech-balloon", "receipt"] },
      lines: [
        L("l1", null, "Act early and keep papers. Read the airline's messages. Go to the desk and call at once.", "Hành động sớm, giữ giấy tờ. Đọc tin của hãng. Ra quầy và gọi cùng lúc."),
        L("l2", null, "Ask about your rights, and photograph every receipt.", "Hỏi rõ quyền lợi, chụp mọi hoá đơn."),
      ] },
    { id: "s25", module: "QUIZ-01", ref: "questions[25]",
      data: {
        q: "Why should you ask the airline for written confirmation of the cancellation?",
        options: [
          "Insurers and refund claims often need proof that the flight was cancelled",
          "It is only a souvenir, so you can show friends what happened",
          "It lets you board any other airline's plane without buying a ticket",
        ],
        correct: 0, countdown: 5, illus: "page-facing-up",
        why: "Giấy xác nhận là bằng chứng cho hồ sơ bảo hiểm.",
      },
      lines: [
        L("l1", null, "Why should you ask the airline for written confirmation of the cancellation?", "Vì sao nên xin hãng xác nhận bằng văn bản việc huỷ chuyến?"),
        L("l2", null, "Insurers and refund claims often need proof that the flight was cancelled.", "Bảo hiểm và hồ sơ hoàn tiền thường cần bằng chứng chuyến bị huỷ."),
        L("l3", null, "That paper is key evidence for your insurance claim.", "Giấy xác nhận là bằng chứng quan trọng cho hồ sơ bảo hiểm."),
      ] },
    { id: "s26", module: "END-05", ref: "outro",
      data: { text: "Mở email của hãng trước tiên", sub: "Rồi làm bốn mươi câu bên dưới" },
      lines: [L("l1", "det", "Right now: open your airline's email and app before anything else. Then try the forty questions!", "Ngay bây giờ: mở email và ứng dụng của hãng trước tiên. Rồi thử bốn mươi câu nhé!", { face: "happy" })] },
  ],
};
