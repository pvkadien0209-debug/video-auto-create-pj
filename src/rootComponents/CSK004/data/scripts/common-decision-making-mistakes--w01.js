// Kịch bản video W lần 3 (#110) — "Những sai lầm thường gặp khi ra quyết định" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "common-decision-making-mistakes--w01",
  hook: "HOOK-16",
  loop: { open: "s01", close: "s33" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (A)
  unit: { audience: "workplace-problem-solvers", slug: "common-decision-making-mistakes", door: "ky-nang", level: "B1",
    title: "Những sai lầm thường gặp khi ra quyết định và cách tránh", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Oanh → Thảo; sếp hào hứng trong cuộc họp → Cô Hoa (câu thoại chỉ là lời rủ tham gia hội chợ); một người trong phòng đồng ý → Dũng; “bạn” phỏng vấn ứng viên cùng trường (❓ p14) → Thảo, ứng viên → Dũng; người chọn phần mềm (🔀 p6) → Dũng; người phải phản hồi ngay (p20) → Thảo. Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài (đối tác p18 viết thư tiếng Việt) nên không dùng. Chỗ đứng cố định: Thảo left, Dũng center, Cô Hoa right; cảnh nhiều người duy nhất là DLG-01 hội chợ. Bài viết “Oanh không nói gì”: trong DLG-01 Thảo chỉ “Dạ…” rồi cảnh dừng. DLG-01 thứ hai dựng từ lời giải ❓ p14 (câu khó nhất về phần việc chính, kiểm thêm người quản lý cũ); bài không nêu nội dung câu hỏi khó nên lời thoại để chung. Hai bản email p18 đọc bằng tiếng Anh, phụ đề giữ nguyên chữ bài. Câu đố đổi sang questions[22] (không tên, chưa lộ đáp án trong cảnh trước). Khuôn HOOK-16 quay lại Thảo ở END-01. Phủ ý: 22/22. #112 nhịp hình (§9): tách hoặc đổi module các cảnh s26, giữ lời đọc và ref.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "intro,p10",
      data: { set: "shop", label: "Tuần cao điểm", props: ["package", "telephone-receiver"],
        actors: [{ id: "thao", side: "left", pose: "phone" }, { id: "dung", side: "center", pose: "hold" }] },
      lines: [
        L("l1", null, "Peak delivery week. The warehouse is short of staff, and many orders are late.", "Tuần giao hàng cao điểm. Kho thiếu người, nhiều đơn giao trễ."),
        L("l2", "thao", "Customers keep calling to complain. Why did we choose this?", "Khách gọi phàn nàn suốt. Sao lúc đó mình lại chọn vậy?", { face: "worried", react: { dung: "worried" } }),
      ], beats: { after: 700 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Năm sai lầm quen thuộc", pose: "present", items: ["Quyết vội", "Chỉ tin một nguồn", "Gật theo số đông", "Chỉ tìm điều thuận tai", "Quyết lúc cảm xúc cao"] },
      lines: [
        L("l1", "det", "Why did we choose that? Usually, one of five mistakes.", "Sao mình lại chọn vậy? Thường là một trong năm sai lầm."),
        L("l2", "det", "Deciding in a hurry.", "Quyết vội."),
        L("l3", "det", "Trusting one source.", "Chỉ tin một nguồn."),
        L("l4", "det", "Following the crowd.", "Gật theo số đông."),
        L("l5", "det", "Hearing only what you like.", "Chỉ tìm điều thuận tai."),
        L("l6", "det", "Deciding in strong emotion. Each one has a small habit to stop it.", "Quyết lúc cảm xúc cao. Mỗi cái có một thói quen nhỏ để chặn."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng của bài", chapters: [
        { label: "Quyết vội: nói trọn ba câu", illus: "alarm-clock" },
        { label: "Một nguồn chưa đủ", illus: "magnifying-glass-tilted-left" },
        { label: "Cả phòng đã gật", illus: "busts-in-silhouette" },
        { label: "Chỉ thấy lý do ủng hộ", illus: "thumbs-up" },
        { label: "Đang nóng thì chờ", illus: "hot-face" },
        { label: "Tự kiểm trước khi chốt", illus: "clipboard" } ] },
      lines: [
        L("l1", null, "One habit per mistake, then a checklist to use before big decisions.", "Mỗi sai lầm một thói quen, rồi một danh sách tự kiểm."),
        L("l2", null, "Let's start with hurry.", "Bắt đầu từ chuyện quyết vội."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Quyết vội: nói trọn ba câu" },
      lines: [L("l1", "det", "Part one: was it a rushed decision?", "Phần một: mình quyết có vội không?")] },
    { id: "s05", module: "REL-01", ref: "p1",
      data: { cause: "Áp lực phải “làm gì đó ngay” để tỏ ra có trách nhiệm", effect: "Không ai giải thích được vấn đề, phương án, lý do chọn",
        causeIllus: "alarm-clock", effectIllus: "confused-face" },
      lines: [
        L("l1", null, "Rushed decisions often come from pressure to do something right now.", "Quyết vội thường đến từ áp lực phải “làm gì đó ngay”."),
        L("l2", null, "The sign: nobody can explain the problem, the options, or why this one.", "Dấu hiệu: không ai giải thích được vấn đề, các phương án, vì sao chọn."),
      ] },
    { id: "s06", module: "LIST-07", ref: "p2",
      data: { title: "Trước khi chốt, nói to ba câu", items: [
        { text: "“Vấn đề là…”", illus: "red-question-mark" },
        { text: "“Mình đã cân nhắc…”", illus: "balance-scale" },
        { text: "“Mình chọn cách này vì…”", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Before you decide, say three sentences out loud. The problem is...", "Trước khi chốt, nói to ba câu. “Vấn đề là…”"),
        L("l2", null, "We considered... We chose this because...", "“Mình đã cân nhắc…”, “Mình chọn cách này vì…”"),
        L("l3", null, "Can't finish them? Take more time, even fifteen minutes.", "Không nói trọn được? Cần thêm thời gian, dù chỉ mười lăm phút."),
      ] },
    { id: "s07", module: "TEXT-04", ref: "p3",
      data: { text: "Nói trọn được ba câu thì dù kết quả chưa như ý, bạn vẫn giải thích được mình đã nghĩ thế nào.",
        marks: ["giải thích được"], illus: "man-office-worker" },
      lines: [
        L("l1", null, "These three sentences are also what you need when your manager asks later.", "Ba câu này cũng là thứ bạn cần khi sếp hỏi lại."),
        L("l2", null, "Even if the result disappoints, you can show how you thought.", "Kết quả chưa như ý, bạn vẫn giải thích được mình đã nghĩ thế nào."),
      ] },

    // ---------- Chương 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Một nguồn chưa đủ" },
      lines: [L("l1", "det", "Part two: is one source enough?", "Phần hai: một nguồn tin có đủ để quyết?")] },
    { id: "s09", module: "LIST-02", ref: "p4",
      data: { title: "Chỉ dựa vào một nguồn", illus: "warning", items: [
        { icon: "newspaper", illus: "newspaper", text: "Đọc một bài giới thiệu rồi mua" },
        { icon: "speaking-head", illus: "speaking-head", text: "Nghe một người kể, kết luận cả bộ phận" },
        { icon: "movie-camera", illus: "movie-camera", text: "Xem một video rồi đổi cách làm" } ] },
      lines: [
        L("l1", null, "One review, then you buy. One story, then you judge a whole department.", "Đọc một bài rồi mua. Nghe một người kể, kết luận cả bộ phận."),
        L("l2", null, "One video, then you change how you work.", "Xem một video rồi đổi cách làm."),
        L("l3", null, "One source may be biased, old, or wrong. The speaker may have their own interest.", "Một nguồn có thể thiên lệch, đã cũ, hoặc sai; người nói có thể có lợi riêng."),
        L("l4", null, "Or their situation is very different from yours.", "Hoặc hoàn cảnh của họ rất khác bạn."),
      ] },
    { id: "s10", module: "SCENE-03", ref: "p6",
      data: { set: "office", actors: [{ id: "dung" }],
        left: { label: "Cách A: chỉ xem video", ok: false }, right: { label: "Cách B: hỏi, dùng thử", ok: true } },
      lines: [
        L("l0", null, "The factory needs time-tracking software that plans rotating night shifts.", "Xưởng cần phần mềm chấm công xếp được ca đêm xoay vòng."),
        L("a1", "dung", "The vendor's video is great. Let's sign for one year.", "Video của nhà cung cấp thuyết phục quá. Ký luôn một năm.", { phase: "a", face: "happy", pose: "thumb" }),
        L("a2", null, "Month one: it can't plan the rotating night shifts. The video only showed what it can do.", "Tháng đầu: không xếp được ca đêm xoay vòng. Video chỉ nói cái làm được.", { phase: "a" }),
        L("b1", "dung", "Let's ask a company that uses it, and let a shift leader try it for a week.", "Hỏi một công ty cùng ngành đang dùng, cho tổ trưởng ca dùng thử một tuần.", { phase: "b", pose: "explain" }),
        L("b2", null, "The gap shows before signing. There's still time to change vendors.", "Chỗ thiếu lộ ra trước khi ký, vẫn kịp đổi nhà cung cấp.", { phase: "b" }),
      ] },
    { id: "s11", module: "LIST-07", ref: "p5",
      data: { title: "Quyết định quan trọng: ít nhất ba nguồn độc lập", items: [
        { text: "Đọc đánh giá từ nhiều nơi", illus: "newspaper" },
        { text: "Dùng thử với người sẽ dùng thật", illus: "man-technologist" },
        { text: "Hỏi một đơn vị đang dùng", illus: "telephone-receiver" } ] },
      lines: [
        L("l1", null, "For important decisions, check at least three independent sources.", "Quyết định quan trọng: kiểm ít nhất ba nguồn độc lập."),
        L("l2", null, "For software: reviews from many places, a trial with real users,", "Với phần mềm: đánh giá từ nhiều nơi, dùng thử với người dùng thật,"),
        L("l3", null, "and a company that already uses it.", "và hỏi một đơn vị đang dùng."),
      ] },
    { id: "s12", module: "TEXT-01", ref: "p7",
      data: { text: "Một nguồn là một góc nhìn, ba nguồn mới thành bức tranh.", illus: "framed-picture" },
      lines: [L("l1", null, "One source is one view. Three sources make a picture.", "Một nguồn là một góc nhìn, ba nguồn mới thành bức tranh.")] },

    // ---------- Chương 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Cả phòng đã gật" },
      lines: [L("l1", "det", "Part three: everyone agrees. Should you speak up?", "Phần ba: cả phòng đã gật, mình có nên lên tiếng?")] },
    { id: "s14", module: "REL-02", ref: "p8",
      data: { chain: ["Ai cũng gật đầu", "Khó làm người lên tiếng", "Rủi ro rõ ràng không ai nhắc", "Cả nhóm bước vào quyết định chưa ổn"],
        illus: ["busts-in-silhouette", "zipper-mouth-face", "warning", "chart-decreasing"] },
      lines: [
        L("l1", null, "When everyone nods, it's hard to be the one with doubts.", "Ai cũng gật đầu thì rất khó làm người nêu băn khoăn."),
        L("l2", null, "Clear risks go unsaid, and the group walks into a choice many doubt.", "Rủi ro rõ ràng không ai nhắc, cả nhóm bước vào quyết định nhiều người thầm thấy chưa ổn."),
        L("l3", null, "That's agreeing with the crowd.", "Đó là sai lầm đồng ý theo số đông."),
      ] },
    { id: "s15", module: "DLG-01", ref: "p9,p10",
      data: { set: "meeting", label: "Cuộc họp chọn hội chợ",
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "center" }, { id: "hoa", side: "right", pose: "stand" }],
        verdict: { ok: false, label: "Thấy rủi ro mà im cho êm", why: "Tuần đó kho thiếu người, đơn trễ, khách phàn nàn suốt mấy ngày." } },
      lines: [
        L("l1", "hoa", "Let's join the trade fair! What do you think?", "Mình tham gia hội chợ nhé! Mọi người thấy sao?", { face: "happy", pose: "explain" }),
        L("l2", "dung", "Great idea!", "Hay quá ạ!", { face: "happy", pose: "thumb" }),
        L("l3", null, "Thảo sees the fair is in peak delivery week. But everyone looks happy.", "Thảo để ý hội chợ trùng tuần giao hàng cao điểm. Nhưng ai cũng vui."),
        L("l4", "thao", "Um... okay.", "Dạ…", { face: "worried", stop: true }),
        L("l5", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l6", "det", "Staying quiet lets a clear risk slip by. That week, orders were late.", "Im cho êm thì rủi ro trôi qua. Tuần đó đơn giao trễ."),
        L("l7", "det", "Let's rewind and ask gently.", "Tua lại, hỏi nhẹ nhé.", { phase: "redo" }),
        L("l8", "thao", "I like this idea. But if it's in peak week, how will we plan our staff?", "Em thấy ý này hay, nhưng nếu trùng tuần cao điểm thì mình xếp người thế nào ạ?", { phase: "redo", pose: "explain", react: { hoa: "thinking" } }),
      ] },
    { id: "s16", module: "LIST-13", ref: "p9",
      data: { title: "Nêu băn khoăn thế nào", items: [
        { title: "Nếu bạn là thành viên", detail: "Khen ý trước, rồi hỏi nhẹ về một rủi ro cụ thể, dạng câu hỏi thay vì phủ định.", illus: "woman-raising-hand" },
        { title: "Nếu bạn chủ trì", detail: "Chủ động hỏi: “Có điều gì có thể khiến kế hoạch này thất bại không?”", illus: "man-office-worker" } ] },
      lines: [
        L("l1", null, "As a member, ask a question instead of saying no. Like Thảo did.", "Là thành viên: hỏi thay vì phủ định, như Thảo vừa làm."),
        L("l2", null, "As the leader, ask: is there anything that could make this plan fail?", "Là người chủ trì, hỏi: “Có điều gì có thể khiến kế hoạch này thất bại không?”"),
      ] },
    { id: "s17", module: "TEXT-01", ref: "p11",
      data: { text: "Thấy khác thì hỏi nhẹ, đừng im cho êm.", illus: "speech-balloon" },
      lines: [L("l1", null, "See it differently? Ask gently. Don't stay quiet to keep the peace.", "Thấy khác thì hỏi nhẹ, đừng im cho êm.")] },

    // ---------- Chương 4 ----------
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Chỉ thấy lý do ủng hộ" },
      lines: [L("l1", "det", "Part four: why do you only see reasons for what you like?", "Phần bốn: sao chỉ thấy lý do ủng hộ điều mình thích?")] },
    { id: "s19", module: "TEXT-04", ref: "p12",
      data: { text: "Thiên kiến xác nhận: đã thích một phương án thì chú ý điều ủng hộ nó, lướt qua điều phản đối.",
        marks: ["Thiên kiến xác nhận"], illus: "eyes" },
      lines: [
        L("l1", null, "Once you like an option, you notice what supports it and skip what doesn't.", "Đã thích một phương án, ta chú ý điều ủng hộ, lướt qua điều phản đối."),
        L("l2", null, "It's called confirmation bias. Everyone has it, so it feels natural.", "Đó là thiên kiến xác nhận, kiểu tự lừa mình rất tự nhiên ai cũng có."),
      ] },
    { id: "s20", module: "LIST-08", ref: "p13",
      data: { title: "Chặn thiên kiến xác nhận", items: [
        { title: "Tìm lý do mạnh nhất để không chọn", detail: "Chủ động, với chính phương án đang thích", illus: "magnifying-glass-tilted-left" },
        { title: "Viết ra ba điều có thể sai", detail: "Tự viết, trên giấy", illus: "memo" },
        { title: "Nhờ người phản biện", detail: "Đóng vai phản đối trong mười phút", illus: "speaking-head" } ] },
      lines: [
        L("l1", null, "The fix: look for the strongest reason not to choose it.", "Cách sửa: tìm lý do mạnh nhất để không chọn phương án mình thích."),
        L("l2", null, "Write three things that could go wrong.", "Tự viết ra ba điều có thể sai."),
        L("l3", null, "Or ask a critical colleague to argue against it for ten minutes.", "Hoặc nhờ người hay phản biện đóng vai phản đối mười phút."),
      ] },
    { id: "s21", module: "DLG-01", ref: "p14",
      data: { set: "office", label: "Phỏng vấn ứng viên",
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "center" }],
        verdict: { ok: false, label: "Thấy thích nên hỏi nhẹ tay", why: "Cảm tình khiến ta lướt qua lúc ứng viên lúng túng và quên gọi người tham khảo." } },
      lines: [
        L("l1", null, "Thảo interviews Dũng, from her old school. By minute five, she likes him.", "Thảo phỏng vấn Dũng, học cùng trường. Từ phút thứ năm đã thấy thích."),
        L("l2", "dung", "I loved that school. Great teachers!", "Trường mình vui lắm chị, thầy cô hay!", { face: "happy", pose: "explain" }),
        L("l3", "thao", "Me too! Let's keep it easy. Tell me about your hobbies.", "Chị cũng vậy! Hỏi nhẹ thôi, em kể sở thích đi.", { face: "happy", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "Liking him is the signal. Ask the hardest question, and check one more source.", "Đã thích chính là tín hiệu: hỏi câu khó nhất, kiểm thêm một nguồn."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l7", "thao", "Now the hardest one, about the main job. Here's a real situation.", "Giờ là câu khó nhất về phần việc chính. Một tình huống thật nhé.", { phase: "redo", pose: "explain", face: "neutral" }),
        L("l8", "thao", "I'd also like to call your former manager.", "Chị cũng muốn gọi cho người quản lý cũ của em.", { phase: "redo", react: { dung: "neutral" } }),
        L("l9", "dung", "Of course.", "Dạ được ạ.", { phase: "redo" }),
      ] },
    { id: "s22", module: "TEXT-01", ref: "p15",
      data: { text: "Càng thích một phương án, càng phải tìm lý do để không chọn nó.", illus: "balance-scale" },
      lines: [L("l1", null, "The more you like an option, the harder you look for reasons against it.", "Càng thích một phương án, càng phải tìm lý do để không chọn nó.")] },

    // ---------- Chương 5 ----------
    { id: "s23", module: "HOST-03", data: { n: 5, of: 6, title: "Đang nóng thì chờ" },
      lines: [L("l1", "det", "Part five: angry or excited? Should you decide now?", "Phần năm: đang bực hay đang hào hứng thì có nên quyết?")] },
    { id: "s24", module: "LIST-02", ref: "p16",
      data: { title: "Quyết lúc cảm xúc cao", illus: "hot-face", items: [
        { icon: "e-mail", illus: "e-mail", text: "Gửi email lúc đang bực" },
        { icon: "handshake", illus: "handshake", text: "Nhận việc lớn lúc hào hứng" },
        { icon: "shopping-bags", illus: "shopping-bags", text: "Mua đồ đắt khi đang buồn" } ] },
      lines: [
        L("l1", null, "An angry email. A big yes when excited. An expensive buy when sad.", "Email lúc bực, nhận việc lớn lúc hào hứng, mua đồ đắt khi buồn."),
        L("l2", null, "Strong feelings narrow your view.", "Cảm xúc mạnh thu hẹp tầm nhìn,"),
        L("l3", null, "They push you to the fastest reaction, not the best.", "đẩy ta tới phản ứng nhanh nhất, không phải tốt nhất."),
      ] },
    { id: "s25", module: "LIST-13", ref: "p17",
      data: { title: "Quy tắc chờ cho mình", items: [
        { title: "Email gây bực", detail: "Viết nháp, đợi ít nhất một giờ mới gửi; chuyện càng nặng càng để qua đêm.", illus: "e-mail" },
        { title: "Khoản chi lớn", detail: "Đợi qua một đêm.", illus: "money-bag" },
        { title: "Lời hứa lớn", detail: "Ngủ một giấc rồi mới nhận.", illus: "bed" } ] },
      lines: [
        L("l1", null, "Set waiting rules. Angry email: write a draft, wait at least an hour.", "Đặt quy tắc chờ. Email gây bực: viết nháp, đợi ít nhất một giờ."),
        L("l2", null, "The heavier it is, the more it should wait overnight.", "Chuyện càng nặng càng nên để qua một đêm."),
        L("l3", null, "Big spending: wait one night. Big promise: sleep on it first.", "Khoản chi lớn: đợi qua đêm. Lời hứa lớn: ngủ một giấc rồi nhận."),
      ] },
    { id: "s26", module: "CMP-02", ref: "p18",
      data: { title: "Đối tác trách giao chậm, dù chính họ gửi muộn",
        before: "Bên anh gửi yêu cầu trễ mà giờ lại đổ cho bọn em?",
        after: "Yêu cầu bên anh gửi ngày 12, nhóm em giao ngày 15. Từ đợt sau mình chốt hạn ngay nhé.",
        illusBefore: "angry-face", illusAfter: "envelope-with-arrow" },
      lines: [
        L("l1", null, "Before, sent at once, copying both bosses: You sent the request late, and now you blame us?", "Bản trước, gửi ngay, kèm cả sếp hai bên: “Bên anh gửi yêu cầu trễ mà giờ lại đổ cho bọn em?”"),
        L("l2", null, "After, saved as a draft for an hour: Noted. Your request came on the twelfth.", "Bản sau, lưu nháp một giờ: “Em đã nhận góp ý. Yêu cầu bên anh gửi ngày 12,"),
      ] },
    { id: "s26b", module: "TEXT-04", ref: "p18",
      data: { text: "“Từ đợt sau, mình chốt hạn giao ngay khi nhận yêu cầu nhé.” Ngắn, mốc thời gian thay cảm xúc, có cách sửa, không ai mất mặt.",
        marks: ["mốc thời gian thay cảm xúc"], illus: "envelope-with-arrow" },
      lines: [
        L("l3", null, "We delivered on the fifteenth. Next time, let's set the deadline right away.", "nhóm em giao ngày 15. Từ đợt sau, mình chốt hạn giao ngay khi nhận yêu cầu nhé.”"),
        L("l4", null, "Short, dates instead of feelings, a fix, and nobody loses face.", "Ngắn, mốc thời gian thay cảm xúc, có cách sửa, không ai mất mặt."),
      ] },
    { id: "s27", module: "TEXT-01", ref: "p19",
      data: { text: "Viết lúc nóng, gửi lúc nguội.", illus: "envelope-with-arrow" },
      lines: [L("l1", null, "Write while you're hot. Send when you're cool.", "Viết lúc nóng, gửi lúc nguội.")] },
    { id: "s28", module: "SCENE-02", ref: "p20",
      data: { set: "office", label: "Câu mua thời gian", actor: { id: "thao", side: "left" },
        contact: { name: "Đối tác", illus: "man-office-worker" },
        messages: [
          { from: "them", text: "Sao tài liệu bên em giao chậm vậy?", at: "l2" },
          { from: "me", text: "Cảm ơn anh đã báo, em kiểm tra lại và trả lời anh trong chiều nay.", at: "l3" } ] },
      lines: [
        L("l1", null, "Must you answer right now? Use a sentence that buys time.", "Buộc phải phản hồi ngay? Dùng câu mua thời gian."),
        L("l2", "them", "Why was your document so late?", "Sao tài liệu bên em giao chậm vậy?"),
        L("l3", "thao", "Thanks for letting me know. I'll check and reply this afternoon.", "Cảm ơn anh đã báo, em kiểm tra lại và trả lời anh trong chiều nay.", { face: "neutral" }),
        L("l4", "thao", "Polite, and I don't decide while I'm angry.", "Vẫn lịch sự, mà mình không phải quyết lúc đang nóng.", { face: "happy" }),
      ] },

    // ---------- Chương 6 ----------
    { id: "s29", module: "HOST-03", data: { n: 6, of: 6, title: "Tự kiểm trước khi chốt" },
      lines: [L("l1", "det", "Part six: your checklist before an important decision.", "Phần sáu: tự kiểm trước một quyết định quan trọng.")] },
    { id: "s30", module: "LIST-05", ref: "p21",
      data: { title: "Trước quyết định quan trọng", illus: "clipboard", items: [
        "Giải thích được trong ba câu chưa?", "Đã kiểm ít nhất ba nguồn độc lập?", "Đã có ai nêu rủi ro, lý do phản đối?",
        "Đã tìm lý do mạnh nhất để không chọn?", "Mình đang bình tĩnh, hay đang bực, quá hào hứng?" ] },
      lines: [
        L("l1", null, "Can I explain it in three sentences? Did I check three sources?", "Giải thích được trong ba câu chưa? Đã kiểm ba nguồn chưa?"),
        L("l2", null, "Has anyone raised a risk, or a reason against it?", "Đã có ai nêu rủi ro hay lý do phản đối chưa?"),
        L("l3", null, "Did I look for the strongest reason not to choose it?", "Đã tìm lý do mạnh nhất để không chọn chưa?"),
        L("l4", null, "Am I calm? Anger or excitement can push me to a choice I wouldn't make calmly.", "Mình có đang bình tĩnh? Bực hay hào hứng dễ đẩy tới lựa chọn khác lúc tỉnh."),
      ] },
    { id: "s31", module: "LIST-07", ref: "p22",
      data: { title: "Nếu sai, có dễ sửa không?", items: [
        { text: "Dùng thử trước", illus: "test-tube" },
        { text: "Hợp đồng ngắn hạn", illus: "page-facing-up" },
        { text: "Chạy thử với một nhóm nhỏ", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "One last question: if this is wrong, how easy is it to fix?", "Câu cuối: nếu sai, quyết định này có dễ sửa không?"),
        L("l2", null, "A trial, a short contract, a small test group.", "Dùng thử trước, hợp đồng ngắn hạn, chạy thử với nhóm nhỏ."),
        L("l3", null, "Then a mistake, if any, stays a small one.", "Để sai lầm, nếu có, cũng chỉ là sai lầm nhỏ."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s32", module: "END-03", ref: "outro",
      data: { title: "Năm thói quen nhỏ", illus: "clipboard",
        items: ["Nói trọn ba câu", "Kiểm ba nguồn", "Thấy khác thì hỏi nhẹ", "Tìm lý do để không chọn", "Chờ cho nguội"] },
      lines: [
        L("l1", null, "Nobody avoids every mistake. Five small habits stop most of them.", "Không ai tránh được mọi sai lầm, nhưng năm thói quen chặn được phần lớn."),
        L("l2", null, "Three sentences, three sources, a gentle question,", "Nói trọn ba câu, kiểm ba nguồn, hỏi nhẹ khi thấy khác,"),
        L("l3", null, "a reason not to choose, and time to cool down.", "tìm lý do để không chọn, và chờ cho nguội."),
      ] },
    { id: "s33", module: "END-01", ref: "p11",
      data: { takeaway: "Thấy khác thì hỏi nhẹ, đừng im cho êm.", marks: ["hỏi nhẹ"], illus: "speech-balloon" },
      lines: [
        L("l1", null, "Back to Thảo: one gentle question in that meeting could have saved peak week.", "Quay lại Thảo: chỉ cần một câu hỏi nhẹ trong cuộc họp hôm ấy."),
        L("l2", null, "Save the checklist, and use it for your next big decision.", "Chụp lại danh sách tự kiểm, dùng cho quyết định quan trọng tiếp theo."),
      ] },
    { id: "s34", module: "QUIZ-01", ref: "questions[22]",
      data: {
        q: "What is a sensible waiting rule for an angry email?",
        options: [
          "Write a draft, but wait at least an hour before you send it",
          "Never reply to any email that makes you feel upset in any way",
          "Send it immediately, so the other person knows how strongly you feel",
        ],
        correct: 0, countdown: 5, illus: "e-mail",
        why: "Viết nháp để xả bực, chờ một giờ để đọc lại tỉnh táo. Im lặng mãi cũng không giải quyết được việc.",
      },
      lines: [
        L("l1", null, "What is a sensible waiting rule for an angry email?", "Quy tắc chờ hợp lý cho một email đang bực là gì?"),
        L("l2", null, "Write a draft, but wait at least an hour before you send it.", "Viết nháp, nhưng đợi ít nhất một giờ rồi mới gửi."),
        L("l3", null, "The draft lets the anger out. The hour lets you reread it calmly.", "Viết nháp để xả bực, chờ một giờ để đọc lại tỉnh táo."),
      ], beats: { after: 600 } },
    { id: "s35", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Bình tĩnh, rồi hãy chọn" },
      lines: [L("l1", "det", "Stay calm, then choose. Forty questions are below.", "Bình tĩnh rồi hãy chọn. Bốn mươi câu hỏi ở bên dưới.")] },
  ],
};
