// Kịch bản video W lần 3 (#110) — "Mạng lưới quan hệ nghề nghiệp: bắt đầu từ đâu?" · chuỗi "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-start-professional-networking--w01",
  hook: "HOOK-01",
  loop: { open: "s01", close: "s26" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "students-preparing-early", slug: "how-to-start-professional-networking", door: "ky-nang", level: "B1",
    title: "Mạng lưới quan hệ nghề nghiệp: bắt đầu từ đâu?", series: "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp" },
  format: "W", mode: "text", audio: {},
  notes: "Lần 3 (#110). Đổi tên (nữ → Lan, nam → Dũng, người lớn nữ → Cô Hoa, bố → Bác Bình): Triều (p2) → Dũng; Hải (p9, p12) → Dũng; chị Thu (p9, chị khoá trên đã đi làm, trước là Cô Hoa) → Thảo (hợp tuổi hơn); Ly (p20) → Lan; chị khoá trên của Ly (trước là Cô Hoa) → Thảo; Vân (p17) → Lan; chị diễn giả (p17) → Cô Hoa; phụ huynh (p24) → Bác Bình. Bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng vai mới. Cảnh 1 bắt đầu giữa chuyện (⚖️ p2): bạn cùng phòng báo tin, Dũng ở nhà. Câu của Thảo ở s24 nhánh A là câu có trong bài (“Ủa, lần trước em có được không?”). Phủ ý: 24/24.",
  scenes: [
    { id: "s01", module: "SCENE-02", ref: "p2",
      data: { set: "room", label: "Dũng ở nhà",
        actor: { id: "dung", side: "left" },
        contact: { name: "Bạn cùng phòng", illus: "man-student" },
        messages: [
          { from: "them", text: "Buổi gặp cựu sinh viên vui lắm! Một chị ở tổ chức môi trường giới thiệu mình vào dự án tình nguyện.", at: "l2" },
          { from: "me", text: "Đúng mảng mình thích luôn…", at: "l3" } ] },
      lines: [
        L("l1", null, "Dung skipped the alumni talk. He thought it was only for asking for jobs.", "Dũng bỏ buổi gặp cựu sinh viên. Cậu nghĩ đi là để xin việc."),
        L("l2", "them", "The alumni talk was great! A woman from an environmental group invited me to a volunteer project.", "Buổi gặp cựu sinh viên vui lắm! Một chị ở tổ chức môi trường giới thiệu mình vào dự án tình nguyện."),
        L("l3", "dung", "That's exactly the field I like…", "Đúng mảng mình thích luôn…", { face: "sad" }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Mạng lưới nghề nghiệp bắt đầu từ đâu?", pose: "present",
        items: ["Từ người đã quen: thầy cô, bạn lớp, anh chị khoá trên", "Giữ liên lạc chân thành", "Sẵn lòng giúp lại"] },
      lines: [
        L("l1", "det", "So where does a network start? Not with strangers. With people you already know.", "Vậy mạng lưới bắt đầu từ đâu? Không phải người lạ, mà từ những người bạn đã quen."),
        L("l2", "det", "Teachers, classmates, older students, your part-time boss.", "Thầy cô, bạn lớp, anh chị khoá trên, quản lý chỗ làm thêm."),
        L("l3", "det", "The key is staying in touch sincerely.", "Chìa khoá là giữ liên lạc chân thành."),
        L("l4", "det", "And being ready to help back. Not knowing lots of people.", "Và sẵn lòng giúp lại, không phải quen thật nhiều người."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu chặng của video",
        chapters: [
          { label: "Không phải đi xin xỏ", illus: "ear" },
          { label: "Vì sao bắt đầu sớm", illus: "seedling" },
          { label: "Mình đang quen ai", illus: "busts-in-silhouette" },
          { label: "Nhắn tin lần đầu", illus: "mobile-phone" },
          { label: "Bắt chuyện ở sự kiện", illus: "microphone" },
          { label: "Sau khi gặp, giữ liên lạc", illus: "handshake" } ] },
      lines: [L("l1", null, "Six parts, each with words you can use.", "Sáu chặng, chặng nào cũng có câu mẫu dùng ngay.")] },

    // Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Có phải đi xin xỏ?" },
      lines: [L("l1", "det", "Part one: is networking begging?", "Phần một: xây quan hệ có phải là đi xin xỏ?")] },
    { id: "s05", module: "TEXT-02", ref: "p1",
      data: { text: "Giống kết bạn, nhưng có chủ đích hơn: hỏi han, chia sẻ, học hỏi.", keywords: ["hỏi han", "chia sẻ", "học hỏi"], illus: "handshake" },
      lines: [
        L("l1", null, "No. It's building relationships around a shared interest in work. Like making friends, but with a purpose.", "Không. Đó là xây quan hệ dựa trên sự quan tâm chung đến nghề, giống kết bạn nhưng có chủ đích hơn."),
        L("l2", null, "Most of the time you ask, share and learn. Very rarely do you ask for favours.", "Phần lớn thời gian là hỏi han, chia sẻ, học hỏi; rất ít khi là nhờ vả."),
      ] },
    { id: "s06", module: "CMP-09", ref: "p2,p3",
      data: { myth: "Đi buổi gặp cựu sinh viên là để xin việc",
        fact: "Chẳng ai mong sinh viên năm hai mang CV đến; người ta đến để nghe, hỏi một câu về nghề",
        illusMyth: "page-facing-up", illusFact: "ear" },
      lines: [
        L("l1", null, "Remember Dung? He thought the talk was for job hunting, so he stayed home.", "Nhớ Dũng chứ? Cậu nghĩ buổi gặp là để xin việc, nên ở nhà."),
        L("l2", null, "Nobody expects a second-year to bring a CV. People go to listen and ask one question. Sometimes that opens a door.", "Chẳng ai mong sinh viên năm hai mang CV đến. Người ta đến để nghe, hỏi một câu, và đôi khi một câu mở ra cả cơ hội."),
      ] },

    { id: "s06b", module: "TEXT-01", ref: "p3",
      data: { text: "Đi để hỏi và học, không phải để xin.", illus: "ear" },
      lines: [
        L("l3", null, "His roommate went, talked to a woman from an environmental group, and joined her volunteer project. Go to ask and learn, not to beg.", "Bạn cùng phòng đi, nói chuyện với chị ở tổ chức môi trường, rồi được vào dự án tình nguyện. Đi để hỏi và học, không phải để xin."),
      ] },
    // Chương 2
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Vì sao bắt đầu từ năm hai, năm ba?" },
      lines: [L("l1", "det", "Part two: why start in year two or three?", "Phần hai: vì sao nên bắt đầu ngay từ năm hai, năm ba?")] },
    { id: "s08", module: "LIST-13", ref: "p4,p5,p6",
      data: { title: "Người đi trước cho bạn",
        items: [
          { title: "Thông tin thật về nghề", detail: "Công việc ra sao, kỹ năng nào cần, khu vực nào tuyển; tránh sai lầm họ từng mắc", illus: "light-bulb" },
          { title: "Cơ hội nội bộ, lời giới thiệu", detail: "Có nơi chia sẻ trong nội bộ trước khi đăng rộng; hồ sơ được đọc kỹ hơn", illus: "envelope" },
          { title: "Thời gian để quen", detail: "Đến năm cuối đã có vài người hiểu bạn", illus: "seedling" } ] },
      lines: [
        L("l1", null, "People ahead of you share the truth about the job: the work, the skills needed, where they're hiring. And mistakes to avoid.", "Người đi trước cho thông tin thật: công việc ra sao, kỹ năng nào cần, khu vực nào tuyển, và sai lầm nên tránh."),
        L("l2", null, "Some internships are shared inside first. A referral gets your file read more carefully.", "Một số cơ hội được chia sẻ nội bộ trước khi đăng rộng; một lời giới thiệu giúp hồ sơ được đọc kỹ hơn."),
        L("l3", null, "Relationships take time. Start now, and by final year a few people know you, instead of strangers at the last minute.", "Quan hệ cần thời gian. Bắt đầu từ giờ, năm cuối đã có vài người hiểu bạn, thay vì đi tìm người lạ lúc gấp nhất."),
      ] },

    // Chương 3
    { id: "s09", module: "HOST-03", data: { n: 3, of: 6, title: "Mình đang quen những ai?" },
      lines: [L("l1", "det", "Part three: who do you already know?", "Phần ba: mình đang quen những ai?")] },
    { id: "s10", module: "LIST-09", ref: "p7",
      data: { title: "Viết ra năm nhóm người quen", illus: "busts-in-silhouette",
        keywords: [
          { text: "Thầy cô hướng dẫn, môn học tốt", illus: "teacher" },
          { text: "Anh chị khoá trên đang đi làm", illus: "graduation-cap" },
          { text: "Quản lý, đồng nghiệp chỗ thực tập, làm thêm", illus: "briefcase" },
          { text: "Câu lạc bộ, tình nguyện, cuộc thi", illus: "handshake" },
          { text: "Gia đình, người quen trong ngành", illus: "house" } ] },
      lines: [
        L("l1", null, "Take a sheet of paper and write names in groups. At school: your advisor, teachers of subjects you do well.", "Lấy tờ giấy, ghi tên theo nhóm. Ở trường: thầy cô hướng dẫn, thầy cô môn bạn học tốt."),
        L("l2", null, "Older students now working. Your manager and coworkers at internships or part-time jobs, who've seen you work.", "Anh chị khoá trên đang đi làm; quản lý, đồng nghiệp chỗ thực tập, làm thêm, những người đã thấy bạn làm việc."),
        L("l3", null, "Clubs, volunteer teams, contests. And family friends in related fields.", "Câu lạc bộ, đội tình nguyện, cuộc thi; và người quen trong gia đình làm lĩnh vực liên quan."),
      ] },
    { id: "s11", module: "TEXT-04", ref: "p8",
      data: { text: "Đánh dấu người làm trong lĩnh vực bạn quan tâm: danh sách này là nơi bắt đầu.", marks: ["nơi bắt đầu"], illus: "pushpin" },
      lines: [
        L("l1", null, "Mark the people working in fields you care about, and start with them.", "Đánh dấu những người làm trong lĩnh vực bạn quan tâm, và bắt đầu từ họ."),
        L("l2", null, "You have more connections than you think.", "Bạn có nhiều kết nối hơn bạn nghĩ."),
      ] },

    // Chương 4
    { id: "s12", module: "HOST-03", data: { n: 4, of: 6, title: "Nhắn tin lần đầu" },
      lines: [L("l1", "det", "Part four: your first message.", "Phần bốn: nhắn tin lần đầu thế nào cho tự nhiên.")] },
    { id: "s13", module: "SCENE-02", ref: "p9",
      data: { set: "room", label: "Tin nhắn đầu tiên", actor: { id: "dung", side: "left" },
        contact: { name: "Chị Thảo (khoá trên)", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Chào chị Thảo, em là Dũng, từng cùng chị trong ban tổ chức câu lạc bộ năm ngoái.", at: "l1" },
          { from: "me", text: "Em đang tìm hiểu nghề phân tích dữ liệu, nếu chị tiện, em xin mười lăm phút gọi điện để hỏi chị vài câu được không ạ?", at: "l2" },
          { from: "them", text: "Được em, tối thứ Năm nhé.", at: "l3" } ] },
      lines: [
        L("l1", "dung", "Hi Thao, I'm Dung. We were on the club organising team together last year.", "Chào chị Thảo, em là Dũng…"),
        L("l2", "dung", "I'm exploring data analysis. If you have time, could I have fifteen minutes on the phone to ask a few questions?", "Em đang tìm hiểu nghề phân tích dữ liệu…"),
        L("l3", "them", "Sure, Thursday evening.", "Được em, tối thứ Năm nhé."),
        L("l4", null, "Who you are, what you're exploring, and one small, specific request.", "Nói rõ bạn là ai, đang tìm hiểu gì, và một yêu cầu nhỏ, cụ thể."),
      ] },
    { id: "s14", module: "CMP-01", ref: "p10",
      data: { labels: ["Yêu cầu nhỏ", "Yêu cầu nặng"], left: "Xin mười lăm phút gọi điện", right: "“Chị giới thiệu em vào công ty chị nhé”",
        illus: ["telephone-receiver", "weary-face"] },
      lines: [
        L("l1", null, "A small request like that is much easier to accept than: please get me into your company.", "Yêu cầu nhỏ như vậy dễ được đồng ý hơn nhiều so với “Chị giới thiệu em vào công ty chị nhé”."),
      ] },
    { id: "s15", module: "HOST-01", ref: "p11",
      data: { title: "Ba câu mà mạng không trả lời được", pose: "present",
        items: ["Một ngày làm việc của chị gồm những gì ạ?", "Điều gì khó nhất mà người ngoài ít biết ạ?", "Nếu là sinh viên năm ba bây giờ, chị sẽ chuẩn bị gì ạ?"] },
      lines: [
        L("l1", "det", "Before the call, prepare three questions the internet can't answer.", "Trước cuộc gọi, chuẩn bị ba câu mà mạng không trả lời được."),
        L("l2", "det", "What does a working day look like for you?", "Một ngày làm việc của chị gồm những gì ạ?"),
        L("l3", "det", "What's the hardest part that outsiders rarely know?", "Điều gì khó nhất mà người ngoài ít biết ạ?"),
        L("l4", "det", "If you were a third-year student now, what would you prepare?", "Nếu là sinh viên năm ba bây giờ, chị sẽ chuẩn bị gì ạ?"),
      ] },
    { id: "s16", module: "DLG-01", ref: "p12,p13",
      data: { set: "online", label: "Cuộc gọi mười lăm phút",
        actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Gọi mà không chuẩn bị câu hỏi", why: "Hỏi những điều tra mạng là ra, cuộc gọi kết thúc sớm.",
          rule: "Xin mười lăm phút thì chuẩn bị ba câu hỏi" } },
      lines: [
        L("l1", "thao", "Hi Dung, I've got fifteen minutes. Go ahead.", "Chào Dũng, chị có mười lăm phút, em hỏi đi.", { face: "happy" }),
        L("l2", "dung", "So… is this job fun?", "Dạ… nghề này có vui không chị?", { face: "thinking", stop: true, react: { thao: "neutral" } }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Vague, and the web can answer it. The call will end early. Write three questions the night before.", "Câu mơ hồ, tra mạng là ra, cuộc gọi sẽ kết thúc sớm. Tối hôm trước viết sẵn ba câu."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "What does a normal working day look like for you?", "Một ngày làm việc của chị gồm những gì ạ?", { phase: "redo", pose: "explain" }),
        L("l7", "dung", "And if you were a third-year now, what would you prepare?", "Nếu là sinh viên năm ba bây giờ, chị sẽ chuẩn bị gì ạ?", { phase: "redo", face: "happy", react: { thao: "happy" } }),
      ] },

    // Chương 5
    { id: "s17", module: "HOST-03", data: { n: 5, of: 6, title: "Bắt chuyện ở sự kiện" },
      lines: [L("l1", "det", "Part five: starting conversations at events.", "Phần năm: ở sự kiện thì bắt chuyện thế nào.")] },
    { id: "s18", module: "LIST-13", ref: "p14,p15,p16",
      data: { title: "Ở ngày hội việc làm, hội thảo",
        items: [
          { title: "Giới thiệu ba mươi giây", detail: "Tên, ngành, năm học, điều đang tìm hiểu", illus: "stopwatch" },
          { title: "Câu mở đầu đơn giản", detail: "“Phần anh chia sẻ về khách hàng ở nông thôn rất hay, anh kể thêm được không ạ?” · “Anh làm ở mảng nào ạ?”", illus: "speech-balloon" },
          { title: "Mục tiêu thực tế", detail: "Hai, ba cuộc trò chuyện tử tế, không phải thật nhiều danh thiếp", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Career fairs, industry talks and alumni clubs are where you meet people in the field. Prepare a thirty-second intro: name, major, year, what you're exploring.", "Ngày hội việc làm, hội thảo, CLB cựu sinh viên là nơi gặp người trong nghề. Chuẩn bị giới thiệu ba mươi giây: tên, ngành, năm học, điều đang tìm hiểu."),
        L("l2", null, "Open simply. Ask about what you just heard, or about their work: which area do you work in?", "Mở đầu đơn giản: hỏi về điều vừa nghe, hoặc về công việc của họ: “Anh làm ở mảng nào ạ?”"),
        L("l3", null, "Aim for two or three good conversations, not a stack of business cards.", "Mục tiêu: hai, ba cuộc trò chuyện tử tế, không phải thu thật nhiều danh thiếp."),
      ] },
    { id: "s19", module: "SCENE-03", ref: "p17,p18",
      data: { set: "meeting", actors: [{ id: "lan", side: "left" }, { id: "hoa", side: "right" }],
        left: { label: "Nói một mạch", ok: false }, right: { label: "Nói ngắn, rồi hỏi", ok: true } },
      lines: [
        L("l1", null, "After a talk, Lan meets the speaker. She's nervous.", "Sau hội thảo, Lan gặp được diễn giả. Lan hồi hộp."),
        L("a1", "lan", "I study marketing, I'm in two clubs, my grades are good, and I plan to…", "Em học tiếp thị, ở hai câu lạc bộ, điểm em khá, em định…", { phase: "a", pose: "explain" }),
        L("a2", "hoa", "Thank you. Excuse me.", "Cảm ơn em nhé. Cô xin phép.", { phase: "a", face: "neutral" }),
        L("b1", "lan", "I'm Lan, third-year marketing. Your part on rural customers was great. Could you tell me more?", "Em là Lan, năm ba Tiếp thị. Phần cô nói về khách nông thôn rất hay, cô kể thêm được không ạ?", { phase: "b", face: "happy" }),
        L("b2", "hoa", "Of course! Let me tell you about one project.", "Được chứ! Để cô kể em nghe một dự án.", { phase: "b", face: "happy" }),
        L("l2", null, "In A, ten minutes pass with no question, and she learns nothing. Speak for thirty seconds, listen for the rest.", "Cách A: mười phút chưa hỏi câu nào, về nhà chẳng biết thêm gì. Nói ba mươi giây, nghe phần còn lại."),
      ] },

    // Chương 6
    { id: "s20", module: "HOST-03", data: { n: 6, of: 6, title: "Sau khi gặp, giữ liên lạc" },
      lines: [L("l1", "det", "Part six: after you meet, and keeping in touch.", "Phần sáu: sau khi gặp, và giữ liên lạc.")] },
    { id: "s21", module: "SCENE-02", ref: "p19",
      data: { set: "room", label: "Một ngày sau", actor: { id: "dung", side: "left" },
        contact: { name: "Anh cựu sinh viên", illus: "man-office-worker" },
        messages: [
          { from: "me", text: "Cảm ơn anh đã chia sẻ hôm qua. Em đã đăng ký khoá anh gợi ý và đang làm bài tập đầu tiên ạ.", at: "l2" },
          { from: "them", text: "Hay quá! Có gì vướng cứ hỏi anh nhé.", at: "l3" } ] },
      lines: [
        L("l1", null, "Within a day or two, say thank you, mention one detail, and, if you can, say you took their advice.", "Trong một, hai ngày: gửi lời cảm ơn, nhắc một chi tiết, và nếu có, cho biết đã làm theo lời khuyên."),
        L("l2", "dung", "Thanks for yesterday. I've signed up for the course you suggested, and I'm on the first exercise.", "Cảm ơn anh đã chia sẻ hôm qua…", { face: "happy" }),
        L("l3", "them", "Great! Ask me if you get stuck.", "Hay quá! Có gì vướng cứ hỏi anh nhé."),
        L("l4", null, "It shows their advice mattered, so they're glad to help again.", "Điều đó cho thấy lời khuyên có ích, nên họ vui lòng giúp tiếp."),
      ] },
    { id: "s22", module: "BEAT-04", ref: "p20",
      data: { seconds: 4, prompt: "Chị Thảo sửa giúp Lan bài luận học bổng, giới thiệu thêm một thầy góp ý. Lan được học bổng. Giờ Lan nên làm gì?" },
      lines: [L("l1", "det", "Thao helped Lan with a scholarship essay and found a teacher to comment. Lan won. What now?", "Chị Thảo sửa giúp bài luận, giới thiệu thêm thầy góp ý. Lan được học bổng. Giờ làm gì?")] },
    { id: "s23", module: "SCENE-03", ref: "p20,p21",
      data: { set: "online", actors: [{ id: "lan", side: "left" }, { id: "thao", side: "right" }],
        left: { label: "Quên báo lại", ok: false }, right: { label: "Báo ngay, cảm ơn", ok: true } },
      lines: [
        L("a1", "lan", "A year later: could you write me a reference letter?", "Một năm sau: chị viết giúp em thư giới thiệu được không ạ?", { phase: "a", pose: "explain" }),
        L("a2", "thao", "Oh, did you get it last time?", "Ủa, lần trước em có được không?", { phase: "a", face: "thinking" }),
        L("b1", "lan", "The same day: I got the scholarship! Thank you, and please thank the teacher too.", "Ngay hôm biết tin: em được học bổng rồi! Em cảm ơn chị, và cảm ơn cả thầy nữa ạ.", { phase: "b", face: "happy", react: { thao: "happy" } }),
        L("l1", null, "In A, the reply is polite but hesitant. In B, Thao remembers Lan, and knows her effort paid off.", "Cách A: chị trả lời lịch sự mà dè dặt. Cách B: chị nhớ rõ Lan và biết công sức mình đã có kết quả."),
        L("l2", null, "When someone helps you, report back the result.", "Được giúp thì báo lại kết quả."),
      ] },
    { id: "s24", module: "CMP-06", ref: "p22",
      data: { do: ["Thỉnh thoảng cập nhật tiến triển", "Chúc mừng khi họ có tin vui", "Chia sẻ bài viết họ quan tâm"],
        dont: ["Chỉ xuất hiện khi cần nhờ"], doIcons: ["chart-increasing", "party-popper", "newspaper"], dontIcons: ["red-question-mark"] },
      lines: [
        L("l1", null, "Keep in touch without bothering: share updates now and then, like finishing an internship or changing direction.", "Giữ liên lạc mà không làm phiền: thỉnh thoảng cập nhật, như khi xong kỳ thực tập hay đổi hướng học."),
        L("l2", null, "Congratulate their good news. Share articles they'd like. Don't only appear when you need a favour.", "Chúc mừng tin vui của họ, chia sẻ bài họ quan tâm. Đừng chỉ xuất hiện khi cần nhờ."),
      ] },
    { id: "s25", module: "LIST-01", ref: "p23",
      data: { title: "Cho đi trước",
        items: ["Giới thiệu bạn bè phù hợp khi ai đó cần tuyển", "Giúp các em khoá dưới làm quen với ngành", "Chia sẻ kinh nghiệm học một môn khó", "Báo tin một cuộc thi"],
        illus: "wrapped-gift", icons: ["handshake", "seedling", "books", "trophy"] },
      lines: [
        L("l1", null, "Give first. Recommend a friend when someone is hiring. Help younger students get to know the field.", "Cho đi trước: giới thiệu bạn phù hợp khi ai đó cần tuyển, giúp các em khoá dưới làm quen với ngành."),
        L("l2", null, "Even in year two you have things to give: tips on a hard course, news about a contest.", "Năm hai, năm ba cũng có thứ để cho: kinh nghiệm học một môn khó, thông tin một cuộc thi."),
      ] },
    { id: "s26", module: "SCENE-01", ref: "p24",
      data: { set: "home", label: "Bố giới thiệu",
        actors: [{ id: "binh", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "binh", "My friend works in data. Here's his number. You call him and ask yourself.", "Bác có người quen làm dữ liệu. Số đây, cháu tự gọi và tự hỏi nhé.", { pose: "give", face: "happy", to: "dung" }),
        L("l2", "dung", "Thank you! I'll prepare three questions.", "Dạ cháu cảm ơn! Cháu sẽ chuẩn bị ba câu hỏi.", { face: "happy" }),
        L("l3", null, "For parents: introduce, and let your child contact and ask, instead of asking for a job on their behalf.", "Với phụ huynh: giới thiệu để con tự liên lạc, tự hỏi, thay vì nhờ hộ một chỗ làm."),
      ] },

    // Tổng kết
    { id: "s27", module: "END-02", ref: "outro",
      data: { kicker: "Mang theo", illus: "handshake",
        points: ["Đi để hỏi và học, không phải để xin", "Xin mười lăm phút thì chuẩn bị ba câu hỏi", "Được giúp thì báo lại kết quả"],
        icons: ["ear", "telephone-receiver", "envelope-with-arrow"] },
      lines: [
        L("l1", null, "A network isn't built at one event. It grows with each message, each thank you, each time you help back.", "Mạng lưới không xây trong một buổi sự kiện, mà lớn dần qua từng tin nhắn, lời cảm ơn, lần giúp lại."),
      ] },
    { id: "s28", module: "QUIZ-01", ref: "questions[21]",
      data: {
        q: "A student talked about herself for ten minutes to a speaker, what was the result?",
        options: [
          "The speaker offered her a job because she shared so many details",
          "The speaker politely moved on, and she learned nothing about the speaker",
          "The speaker asked her to give the next talk instead of them",
        ],
        correct: 1, countdown: 5, illus: "microphone",
        why: "Mải nói nên không hỏi được câu nào: trò chuyện một chiều chỉ khiến người nghe muốn kết thúc lịch sự.",
      },
      lines: [
        L("l1", null, "A student talked about herself for ten minutes to a speaker, what was the result?", "Một bạn nói về mình suốt mười phút với diễn giả, kết quả ra sao?"),
        L("l2", null, "The speaker politely moved on, and she learned nothing about the speaker.", "Diễn giả lịch sự quay sang người khác, và bạn ấy chẳng biết thêm gì về chị."),
        L("l3", null, "Speak for thirty seconds. Listen for the rest.", "Nói ba mươi giây, nghe phần còn lại."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi trước khi nhắn tin đầu tiên", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Write your five groups, circle one person, and send one small request. Then try the forty questions below.", "Viết năm nhóm người quen, khoanh một người, nhắn một yêu cầu nhỏ. Rồi làm bốn mươi câu bên dưới nhé.", { face: "happy" })] },
  ],
};
