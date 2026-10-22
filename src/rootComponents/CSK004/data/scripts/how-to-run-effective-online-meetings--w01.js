// Kịch bản video W lần 3 (#110) — "Họp trực tuyến hiệu quả: những điều cần biết" · chuỗi "Giao tiếp nơi công sở"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-run-effective-online-meetings--w01",
  hook: "HOOK-01",
  loop: { open: "s01", close: "s29" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (D)
  unit: { audience: "office-communicators", slug: "how-to-run-effective-online-meetings", door: "ky-nang", level: "B1",
    title: "Họp trực tuyến hiệu quả: những điều cần biết", series: "Giao tiếp nơi công sở" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Đức (p17) → Dũng; người chủ trì (p17) → Cô Hoa (chỉ nói câu hỏi mẫu của p17); Quế (p6) → Thảo; đối tác ở Singapore (p6) → Sam (vai mới); “mình chủ trì” (p19–p21) → Thảo. Phượng (p10) và Hải (p13) kể không tên. Tên trong câu mẫu p20 (chị Hồng) và p24 (anh Bình, chị Hồng) giữ nguyên chữ của bài, không lên hình; ở cảnh s19 lời mời phát biểu đổi sang gọi tên Dũng (cùng khuôn câu của p20). Vai mới: Sam. Phủ ý: 27/27. Bài có 7 mục; gộp hai mục đầu thành chương 1 (6 chương). Cảnh nhiều người (3 người) chỉ có s01. HOOK-01 (bắt đầu giữa chuyện) quay lại ở DLG s17 (p17, p18). Hai DLG: s08 (hẹn giờ một bên, p6, p7) và s17. Lời đáp của Sam ở s08 và câu của Dũng ở phần làm lại s17 là lời trung lập. Câu đố: questions[12].",
  scenes: [
    // ── Mở đầu: giữa chuyện
    { id: "s01", module: "SCENE-01", ref: "p17",
      data: { set: "online", label: "Giữa cuộc họp", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "center" }, { id: "dung", side: "right", pose: "phone" }] },
      lines: [
        L("l1", "hoa", "Dũng, what does the warehouse think of this plan?", "Dũng ơi, bên kho thấy phương án này thế nào?", { pose: "explain", to: "dung" }),
        L("l2", "dung", "Sorry… could you repeat the question?", "Xin lỗi… cô nhắc lại câu hỏi được không ạ?", { face: "surprised", react: { thao: "worried" } }),
        L("l3", null, "Camera off, Dũng was answering client emails. And the part he missed was about his own team.", "Tắt camera, Dũng đang trả lời email khách. Mà phần vừa bỏ lỡ lại chính là phần của bộ phận mình."),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Họp trực tuyến thế nào cho hiệu quả?", pose: "present",
        items: ["Gửi mục tiêu, chương trình trước", "Kiểm tra thiết bị trước giờ", "Chia sẻ màn hình cẩn thận", "Có mặt thật khi họp", "Chốt ai làm gì, hạn nào"] },
      lines: [
        L("l1", "det", "How do you make online meetings work? Most problems can be avoided.", "Họp trực tuyến sao cho hiệu quả? Phần lớn sự cố đều tránh được."),
        L("l2", "det", "Send the goal and agenda first. Check your device before it starts.", "Gửi mục tiêu, chương trình trước. Kiểm tra thiết bị trước giờ."),
        L("l3", "det", "Share your screen carefully.", "Chia sẻ màn hình cẩn thận."),
        L("l4", "det", "Be really present.", "Có mặt thật khi họp."),
        L("l5", "det", "And end with who does what, by when.", "Và chốt ai làm gì, trước khi nào."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng một cuộc họp", chapters: [
        { label: "Có cần họp, gửi gì trước", illus: "envelope" },
        { label: "Kiểm tra trước giờ", illus: "laptop" },
        { label: "Người tham dự", illus: "busts-in-silhouette" },
        { label: "Người chủ trì", illus: "microphone" },
        { label: "Mạng yếu, sự cố", illus: "antenna-bars" },
        { label: "Kết thúc có việc chạy", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Six parts: before you invite, the device check, joining,", "Sáu phần: trước khi mời, kiểm tra thiết bị, khi tham dự,"),
        L("l2", null, "hosting, network problems, and how to end.", "khi chủ trì, khi gặp sự cố, và cách kết thúc."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Có cần họp, gửi gì trước" },
      lines: [L("l1", "det", "Part one: do you need a meeting, and what to send first.", "Phần một: có cần họp không, và gửi gì trước?")] },
    { id: "s05", module: "CMP-01", ref: "p1,p2",
      data: { labels: ["Nên họp", "Nên gửi email"], left: "Bàn hai chiều, quyết nhanh, gỡ vấn đề phức tạp", right: "Thông báo một chiều, như văn phòng đóng cửa sớm thứ Sáu", illus: ["busts-in-silhouette", "e-mail"] },
      lines: [
        L("l1", null, "Meet online to discuss both ways, decide fast, or solve something complex.", "Họp trực tuyến khi cần bàn hai chiều, quyết nhanh, gỡ việc phức tạp."),
        L("l2", null, "Just an announcement? A clear email saves everyone's time.", "Chỉ thông báo một chiều? Một email rõ ràng tiết kiệm thời gian cho tất cả."),
        L("l3", null, "Invite only people who give input or decide. Others can read the notes later.", "Chỉ mời người cần góp ý hoặc quyết định. Người khác đọc biên bản sau."),
      ] },
    { id: "s06", module: "LIST-05", ref: "p3,p4",
      data: { title: "Lời mời, gửi ít nhất một ngày trước", items: ["Mục tiêu một câu: “Chốt kế hoạch khuyến mãi tháng 12”", "Chương trình có thời lượng từng phần", "Tài liệu cần đọc trước", "Đường link họp"], illus: "envelope" },
      lines: [
        L("l1", null, "Send the invite at least a day before. A goal in one sentence: “Decide the December promotion plan.”", "Gửi lời mời ít nhất một ngày trước. Mục tiêu một câu: “Chốt kế hoạch khuyến mãi tháng 12”."),
        L("l2", null, "An agenda with times for each part, documents to read, and the link.", "Chương trình có thời lượng từng phần, tài liệu cần đọc, đường link."),
        L("l3", null, "Then the meeting is for discussion, not reading together. Say: please read pages two to four first.", "Như vậy buổi họp dành để bàn, không ngồi đọc chung. Ghi rõ: nhờ mọi người đọc trang 2 đến 4 trước."),
      ] },
    { id: "s07", module: "TEXT-01", ref: "p5",
      data: { kicker: "Mẹo đặt lịch", text: "Hai mươi lăm hoặc năm mươi phút, thay vì tròn một giờ", illus: "stopwatch" },
      lines: [
        L("l1", null, "Many teams book twenty-five or fifty minutes, not a full hour.", "Nhiều nhóm đặt lịch hai mươi lăm hoặc năm mươi phút, thay vì tròn một giờ."),
        L("l2", null, "It gives people a short break between back-to-back meetings.", "Để mọi người có vài phút nghỉ giữa các cuộc họp liên tiếp."),
      ] },
    { id: "s08", module: "DLG-01", ref: "p6,p7",
      data: { set: "online", label: "Hẹn đối tác ở Singapore",
        actors: [{ id: "thao", side: "left" }, { id: "sam", side: "right" }],
        verdict: { ok: false, label: "Chỉ ghi “9 giờ sáng thứ Ba”",
          why: "Mỗi bên hiểu “9 giờ” theo giờ của mình, rồi chờ nhau ở hai thời điểm khác nhau." } },
      lines: [
        L("l1", null, "Thảo is setting up a call with Sam, a partner in Singapore.", "Thảo hẹn Sam, đối tác ở Singapore, họp trực tuyến."),
        L("l2", "thao", "Let's meet at nine a.m. on Tuesday.", "Mình họp lúc chín giờ sáng thứ Ba nhé.", { face: "happy", to: "sam", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Nine o'clock where? Each side may wait at a different hour.", "Chín giờ ở đâu? Mỗi bên có thể chờ ở một giờ khác nhau."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "thao", "Nine a.m. Tuesday Vietnam time, which is ten a.m. Tuesday in Singapore.", "Chín giờ sáng thứ Ba giờ Việt Nam, tức mười giờ sáng thứ Ba giờ Singapore.", { phase: "redo", pose: "explain", to: "sam" }),
        L("l7", "thao", "I'll send a calendar invite too, so it converts the time.", "Em gửi kèm lời mời qua lịch để máy tự quy đổi.", { phase: "redo", face: "happy" }),
        L("l8", "sam", "Perfect. See you then.", "Tuyệt, hẹn gặp em.", { phase: "redo", face: "happy", pose: "thumb" }),
        L("l9", "det", "Meeting someone far away? Write the time for both sides.", "Hẹn người ở xa, ghi giờ theo cả hai bên.", { phase: "redo" }),
      ] },

    // ── Chương 2
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Kiểm tra trước giờ họp" },
      lines: [L("l1", "det", "Part two: a few minutes before, check these.", "Phần hai: trước giờ họp vài phút, kiểm tra gì?")] },
    { id: "s10", module: "LIST-05", ref: "p8",
      data: { title: "Vài phút trước giờ họp", items: ["Micro, loa, camera, mạng", "Tai nghe có micro, đỡ tiếng vọng", "Ánh sáng chiếu vào mặt, không ngồi ngược sáng", "Phông nền gọn hoặc nền ảo đơn giản", "Vào sớm hai ba phút"], illus: "laptop" },
      lines: [
        L("l1", null, "Check the mic, speakers, camera and internet.", "Kiểm tra micro, loa, camera và mạng."),
        L("l2", null, "A headset with a mic cuts the echo. Light on your face, not behind you.", "Tai nghe có micro đỡ tiếng vọng. Ánh sáng chiếu vào mặt, không ngồi ngược sáng."),
        L("l3", null, "A tidy background, or a simple virtual one.", "Phông nền gọn, hoặc nền ảo đơn giản."),
        L("l4", null, "Join two or three minutes early, especially when you host or present.", "Vào sớm hai ba phút, nhất là khi chủ trì hoặc trình bày."),
      ] },
    { id: "s11", module: "CMP-06", ref: "p9",
      data: { do: ["Đóng ứng dụng không cần, tắt thông báo", "Chỉ chia sẻ đúng cửa sổ cần dùng"], dont: ["Chia sẻ cả màn hình"],
        doIcons: ["bell-with-slash", "window"], dontIcons: ["desktop-computer"] },
      lines: [
        L("l1", null, "Before you share your screen, close unneeded apps and turn off notifications.", "Trước khi chia sẻ màn hình, đóng ứng dụng không cần và tắt thông báo."),
        L("l2", null, "Share only the window you need, not the whole screen.", "Chỉ chia sẻ đúng cửa sổ cần dùng, không chia sẻ cả màn hình."),
      ] },
    { id: "s12", module: "LIST-06", ref: "p10,p11",
      data: { title: "Sắp trình bày báo giá cho khách", steps: [
        { text: "Bật chế độ không làm phiền", illus: "bell-with-slash" },
        { text: "Đóng thẻ, ứng dụng không cần", illus: "laptop" },
        { text: "Chỉ chia sẻ cửa sổ báo giá", illus: "window" },
        { text: "Hỏi: “Anh chị đã thấy bảng báo giá chưa ạ?”", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "One colleague is about to present a quote. First, do not disturb mode, so chats and emails stay hidden.", "Một bạn sắp trình bày báo giá: bật không làm phiền để tin nhắn, email không hiện lên."),
        L("l2", null, "She closes other tabs, and shares only the quote window.", "Đóng các thẻ không cần, chỉ chia sẻ cửa sổ báo giá."),
        L("l3", null, "Then she asks: can you see the price table?", "Rồi hỏi: “Anh chị đã thấy bảng báo giá chưa ạ?”"),
        L("l4", "det", "The client sees only what they should, even if a colleague is sending private chat. Share one window, never the whole screen.", "Khách chỉ thấy đúng thứ cần thấy. Chia sẻ một cửa sổ, đừng chia sẻ cả màn hình."),
      ] },

    // ── Chương 3
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Khi mình tham dự" },
      lines: [L("l1", "det", "Part three: how to behave when you attend.", "Phần ba: trong lúc họp, người tham dự nên cư xử thế nào?")] },
    { id: "s14", module: "LIST-07", ref: "p12",
      data: { title: "Micro và camera", items: [
        { text: "Tắt micro khi không nói, nhất là nơi ồn", illus: "muted-speaker" },
        { text: "Bật camera nếu nhóm khuyến khích", illus: "movie-camera" },
        { text: "Thấy nét mặt, trao đổi tự nhiên hơn", illus: "smiling-face" } ] },
      lines: [
        L("l1", null, "Mute when you're not speaking, especially somewhere noisy.", "Tắt micro khi không nói, nhất là ở nơi ồn."),
        L("l2", null, "Turn your camera on if the team likes it. Seeing faces makes talk more natural.", "Bật camera nếu nhóm khuyến khích: nhìn thấy nét mặt, trao đổi tự nhiên hơn."),
      ] },
    { id: "s15", module: "STORY-05", ref: "p13,p14",
      data: { label: "Tình huống thường gặp", panels: [
        { scene: ["man-office-worker", "laptop", "busts-in-silhouette"], caption: "Một người dự cuộc họp đông người, quên tắt micro." },
        { scene: ["man-office-worker", "speaking-head", "house"], caption: "Đang chờ đến phần mình, anh quay sang nói với bạn cùng phòng.", say: "Họp gì mà dài thế!" },
        { scene: ["busts-in-silhouette", "ear", "face-with-open-mouth"], caption: "Hơn chục người trong cuộc họp nghe rõ câu đó." } ] },
      lines: [
        L("l1", null, "A colleague in a big meeting forgets to mute.", "Một người dự họp đông người, quên tắt micro."),
        L("l2", null, "Waiting for his turn, he tells his roommate: “Such a long meeting, nothing to do with me.”", "Chờ đến phần mình, anh quay sang bạn cùng phòng: “Họp gì mà dài thế, chẳng liên quan gì đến mình.”"),
        L("l3", null, "More than ten people heard it clearly.", "Hơn chục người trong cuộc họp nghe rõ câu đó."),
        L("l4", "det", "Not speaking? Mic off. Every single time.", "Không nói thì tắt micro, luôn luôn như vậy."),
      ] },
    { id: "s16", module: "LIST-13", ref: "p15,p16",
      data: { title: "Phát biểu và có mặt", items: [
        { title: "Muốn nói: giơ tay hoặc nhắn khung chat", detail: "Nói ngắn, vào thẳng ý: độ trễ dễ cắt câu dài.", illus: "raised-hand" },
        { title: "Không vừa họp vừa làm việc khác", detail: "Người khác nhận ra qua ánh mắt, câu trả lời chậm.", illus: "e-mail" },
        { title: "Phải rời sớm", detail: "Báo từ đầu buổi.", illus: "door" } ] },
      lines: [
        L("l1", null, "In a big meeting, use the raise hand button, or write in the chat.", "Họp đông muốn phát biểu: dùng nút giơ tay hoặc nhắn khung chat."),
        L("l2", null, "Speak briefly and get to the point. Delay can cut long sentences.", "Nói ngắn, vào thẳng ý: độ trễ đường truyền dễ cắt ngang câu dài."),
        L("l3", null, "Don't answer emails or scroll your phone. People notice from your eyes and slow replies.", "Đừng vừa họp vừa trả lời email, lướt điện thoại: người khác nhận ra."),
        L("l4", null, "Must leave early? Say so at the start.", "Phải rời sớm thì báo từ đầu buổi."),
      ] },
    { id: "s17", module: "DLG-01", ref: "p17,p18",
      data: { set: "online", label: "Quay lại cuộc họp của Dũng",
        actors: [{ id: "hoa", side: "center" }, { id: "dung", side: "right", pose: "phone" }],
        verdict: { ok: false, label: "Tắt camera, trả lời email khách",
          why: "Bỏ lỡ phần bàn trước; bị gọi tên phải xin nhắc lại, rồi trả lời lạc ý." } },
      lines: [
        L("l1", null, "Back to Dũng. Camera off, he's replying to client emails during the meeting.", "Quay lại Dũng: tắt camera, tranh thủ trả lời email khách trong giờ họp."),
        L("l2", "hoa", "Dũng, what does the warehouse think of this plan?", "Dũng ơi, bên kho thấy phương án này thế nào?", { pose: "explain", to: "dung" }),
        L("l3", "dung", "Sorry… could you repeat the question?", "Xin lỗi… cô nhắc lại câu hỏi được không ạ?", { face: "surprised", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "He missed the part about his own team, then answered off topic.", "Dũng bỏ lỡ đúng phần của bộ phận mình, rồi trả lời lạc ý."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l7", "dung", "Emails can wait until after the meeting. Camera on.", "Email để sau buổi họp. Bật camera.", { phase: "redo", pose: "stand", face: "neutral" }),
        L("l8", "hoa", "Dũng, what does the warehouse think of this plan?", "Dũng ơi, bên kho thấy phương án này thế nào?", { phase: "redo", pose: "explain", to: "dung" }),
        L("l9", "dung", "I followed the plan. Let me give the warehouse view.", "Em theo dõi phương án rồi, em xin nói ý của bên kho ạ.", { phase: "redo", face: "happy", pose: "explain", react: { hoa: "happy" } }),
        L("l10", "det", "Once you join, be really there, not just on the screen.", "Đã vào họp thì có mặt thật, đừng chỉ có mặt trên màn hình.", { phase: "redo" }),
      ] },

    // ── Chương 4
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Khi mình chủ trì" },
      lines: [L("l1", "det", "Part four: if you host, how do you keep it on track?", "Phần bốn: nếu mình chủ trì, giữ cuộc họp thế nào?")] },
    { id: "s19", module: "SCENE-01", ref: "p19,p20,p21",
      data: { set: "online", label: "Thảo chủ trì", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "Start on time. Restate the goal and the agenda in a minute.", "Bắt đầu đúng giờ, nhắc lại mục tiêu và chương trình trong một phút."),
        L("l2", "thao", "Our goal today: decide the December promotion plan. Dũng, could you take notes?", "Mục tiêu hôm nay: chốt kế hoạch khuyến mãi tháng 12. Dũng ghi biên bản giúp chị nhé?", { pose: "explain", to: "dung" }),
        L("l3", null, "In a long meeting, ask someone to watch the time too.", "Họp dài thì nhờ thêm một người canh giờ."),
        L("l4", "thao", "Dũng, does the warehouse think this option works?", "Dũng, bên kho thấy phương án này ổn chưa?", { pose: "point", react: { dung: "happy" } }),
        L("l5", null, "Invite people by name. Online, everyone is shy to interrupt, and quiet people often have good ideas.", "Mời từng người bằng tên: trên mạng ai cũng ngại cắt lời, người ít nói thường có ý hay."),
        L("l6", "thao", "Good point. Let's note it for later, and get back to the budget.", "Ý này hay, mình ghi lại bàn riêng sau nhé, giờ quay lại phần ngân sách.", { pose: "hold", face: "happy" }),
        L("l7", null, "At the end of each part, one sentence: what's agreed, what's still open.", "Cuối mỗi phần, tóm tắt một câu: đã thống nhất gì, còn gì để ngỏ."),
      ] },

    // ── Chương 5
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Mạng yếu, gặp sự cố" },
      lines: [L("l1", "det", "Part five: weak internet, or something goes wrong.", "Phần năm: mạng yếu hoặc gặp sự cố thì sao?")] },
    { id: "s21", module: "LIST-13", ref: "p22,p23",
      data: { title: "Khi gặp sự cố", items: [
        { title: "Mạng yếu", detail: "Tắt camera để giữ tiếng, nhắn một dòng trong khung chat.", illus: "antenna-bars" },
        { title: "Bị rớt mạng", detail: "Vào lại ngay, nhắn “em vừa rớt mạng khoảng hai phút”.", illus: "counterclockwise-arrows-button" },
        { title: "Mình trình bày", detail: "Gửi trước tài liệu cho người chủ trì, lỡ máy có sự cố.", illus: "open-file-folder" } ] },
      lines: [
        L("l1", null, "Weak internet? Turn off your camera to keep the sound, and say so in the chat.", "Mạng yếu: tắt camera để giữ tiếng, nhắn một dòng cho mọi người hiểu."),
        L("l2", null, "Dropped out? Rejoin, and write: I dropped for about two minutes. The host can sum up.", "Bị rớt: vào lại ngay, nhắn “em vừa rớt mạng khoảng hai phút” để chủ trì tóm tắt."),
        L("l3", null, "Presenting? Send your file to the host first. If your computer fails, someone else can open it.", "Nếu trình bày, gửi trước tài liệu cho chủ trì: máy bạn lỡ hỏng, người khác vẫn mở được."),
      ] },

    // ── Chương 6
    { id: "s22", module: "HOST-03", data: { n: 6, of: 6, title: "Kết thúc có việc chạy" },
      lines: [L("l1", "det", "Part six: how to end, so the work actually moves.", "Phần sáu: kết thúc thế nào để họp xong có việc chạy?")] },
    { id: "s23", module: "TEXT-04", ref: "p24",
      data: { text: "“Anh Bình gửi báo giá mới trước thứ Ba, chị Hồng cập nhật kế hoạch truyền thông trước thứ Năm.”", marks: ["trước thứ Ba", "trước thứ Năm"], illus: "check-mark-button" },
      lines: [
        L("l1", null, "Use the last five minutes to confirm tasks. Each one gets one owner and one deadline.", "Dành năm phút cuối chốt việc: mỗi đầu việc một người phụ trách, một hạn chót."),
        L("l2", null, "“Bình sends the new quote by Tuesday. Hồng updates the media plan by Thursday.”", "“Anh Bình gửi báo giá mới trước thứ Ba, chị Hồng cập nhật kế hoạch truyền thông trước thứ Năm.”"),
      ] },
    { id: "s24", module: "LIST-05", ref: "p25",
      data: { title: "Biên bản, gửi trong vòng một ngày", items: ["Các quyết định đã chốt", "Việc, người và hạn", "Điểm còn để ngỏ, khi nào bàn tiếp"], illus: "memo" },
      lines: [
        L("l1", null, "Within a day, send short notes, while everyone still remembers.", "Trong vòng một ngày, gửi biên bản ngắn, khi mọi người còn nhớ."),
        L("l2", null, "The decisions, the tasks with owners and deadlines, and open points with a date to discuss.", "Các quyết định, việc kèm người và hạn, điểm còn để ngỏ và khi nào bàn tiếp."),
      ] },
    { id: "s25", module: "HOST-02", ref: "p26",
      data: { statement: "Muốn ghi hình buổi họp thì cứ bấm ghi, khỏi báo", truth: false,
        why: "Báo mọi người trước khi ghi, chỉ chia sẻ bản ghi cho người cần; quy định tuỳ công ty." },
      lines: [
        L("l1", "det", "You can record a meeting without telling anyone. True or false?", "Muốn ghi hình buổi họp thì cứ bấm ghi, khỏi báo. Đúng hay sai?"),
        L("l2", "det", "False. Tell everyone before you start, and share the recording only with people who need it.", "Sai. Báo mọi người trước khi ghi, chỉ chia sẻ bản ghi cho người cần.", { face: "stern" }),
        L("l3", "det", "Rules depend on the company. Ask first if you're not sure.", "Quy định tuỳ từng công ty; chưa rõ thì hỏi trước."),
      ] },
    { id: "s26", module: "LIST-03", ref: "p27",
      data: { title: "Vài câu tiếng Anh hay dùng", items: [
        { front: "Can everyone hear me?", back: "Mọi người nghe rõ không?", illus: "speaker-high-volume", backIllus: "ear" },
        { front: "Sorry, you are on mute.", back: "Xin lỗi, anh/chị đang tắt micro.", illus: "muted-speaker", backIllus: "speech-balloon" },
        { front: "Let us come back to the agenda.", back: "Mình quay lại chương trình nhé.", illus: "memo", backIllus: "counterclockwise-arrows-button" },
        { front: "Who will take this action?", back: "Ai sẽ nhận việc này?", illus: "raised-hand", backIllus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Can everyone hear me?", "Mọi người nghe rõ không?"),
        L("l2", null, "Sorry, you are on mute.", "Xin lỗi, anh/chị đang tắt micro."),
        L("l3", null, "Let us come back to the agenda.", "Mình quay lại chương trình nhé."),
        L("l4", null, "Who will take this action?", "Ai sẽ nhận việc này?"),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s27", module: "HOST-01", ref: "p7,p11,p14,p18",
      data: { title: "Bốn câu mang về", pose: "present", items: ["Người ở xa: ghi giờ cả hai bên", "Chia sẻ một cửa sổ", "Không nói thì tắt micro", "Có mặt thật, không chỉ trên màn hình"] },
      lines: [
        L("l1", "det", "Far away? Write both times.", "Hẹn người ở xa, ghi giờ theo cả hai bên."),
        L("l2", "det", "Share one window, not the whole screen.", "Chia sẻ một cửa sổ, đừng chia sẻ cả màn hình."),
        L("l3", "det", "Not speaking? Mic off.", "Không nói thì tắt micro."),
        L("l4", "det", "And be really present.", "Đã vào họp thì có mặt thật."),
      ] },
    { id: "s28", module: "QUIZ-01", ref: "questions[12]",
      data: {
        q: "What is the rule about sharing your screen in an online meeting?",
        options: [
          "Share one window only, and do not share your whole screen",
          "Always ask colleagues not to message you during any meeting",
          "Never present prices online, because clients should only see them on paper",
        ],
        correct: 0, countdown: 5, illus: "window",
        why: "Chia sẻ một cửa sổ, đừng chia sẻ cả màn hình.",
      },
      lines: [
        L("l1", null, "What is the rule about sharing your screen in an online meeting?", "Khi chia sẻ màn hình trong họp trực tuyến, nguyên tắc là gì?"),
        L("l2", null, "Share one window only, and do not share your whole screen.", "Chỉ chia sẻ một cửa sổ, đừng chia sẻ cả màn hình."),
        L("l3", null, "Then pop-up chats and other files stay private.", "Như vậy tin nhắn bật lên và tệp khác không bị lộ."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Before your next meeting, take three minutes for the checklist.", "Trước cuộc họp kế tiếp, dành ba phút đi hết danh sách kiểm tra."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
