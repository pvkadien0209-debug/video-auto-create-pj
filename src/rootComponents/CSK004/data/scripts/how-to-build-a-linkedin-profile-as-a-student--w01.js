// Kịch bản video W lần 3 (#110) — "Cách xây dựng hồ sơ LinkedIn cho sinh viên" · chuỗi "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp"
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-build-a-linkedin-profile-as-a-student--w01",
  hook: "HOOK-16",
  loop: { open: "s01", close: "s24" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "students-preparing-early", slug: "how-to-build-a-linkedin-profile-as-a-student", door: "ky-nang", level: "B1",
    title: "Cách xây dựng hồ sơ LinkedIn cho sinh viên", series: "Năm hai, năm ba: chuẩn bị sớm cho nghề nghiệp" },
  format: "W", mode: "text", audio: {},
  notes: "Lần 3 (#110). Đổi tên (nữ → Lan, nam → Dũng): Định (p9) → Dũng; Tuyết (p5) → Lan (tên hiển thị “Nguyễn Thị Lan” thay “Nguyễn Thị Tuyết”); Hoà (p22) → Lan; Lâm (p16) → Dũng đóng, lời kể gọi là “một bạn”; người phỏng vấn (p16) → Cô Hoa (câu hỏi trung lập có trong bài); anh cựu sinh viên (p9), anh khoá trên (p22), chị diễn giả (p21) → chỉ hiện tên trong khung chat. Bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng vai mới. HOOK-16: s01 Dũng than hồ sơ không ai xem → s11 sửa dòng tiêu đề → s24 quay lại Dũng nhận tin nhắn (đúng kết quả p9). Phủ ý: 25/25.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p9",
      data: { set: "campus", label: "Dũng than",
        actors: [{ id: "dung", side: "left" }, { id: "lan", side: "right" }], props: ["laptop"] },
      lines: [
        L("l1", "dung", "I made my profile a year ago. Almost nobody has looked at it!", "Mình lập hồ sơ từ năm hai, mà gần như chưa ai ghé xem!", { face: "sad", pose: "shrug" }),
        L("l2", "lan", "Can I see your headline?", "Cho mình xem dòng tiêu đề của cậu?", { pose: "point", face: "thinking" }),
        L("l3", null, "We'll come back to Dung's headline. First, what does a student profile need?", "Lát nữa quay lại dòng tiêu đề của Dũng. Trước hết, hồ sơ sinh viên cần gì?"),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Hồ sơ sinh viên cần gì để được tìm thấy?", pose: "present",
        items: ["Rõ ràng", "Đáng tin", "Khớp với CV"] },
      lines: [
        L("l1", "det", "You don't need many connections or daily posts. One evening to set it up, a little more each term.", "Không cần nhiều kết nối hay đăng bài mỗi ngày. Một buổi tối dựng khung, mỗi kỳ thêm một chút."),
        L("l2", "det", "When someone finds you, they should see a clear profile.", "Ai tìm đến cũng thấy một hồ sơ rõ ràng."),
        L("l3", "det", "A trustworthy one.", "Đáng tin."),
        L("l4", "det", "And one that matches your CV.", "Và khớp với CV."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu chặng của video",
        chapters: [
          { label: "Vì sao cần hồ sơ", illus: "magnifying-glass-tilted-left" },
          { label: "Ảnh và tên", illus: "camera-with-flash" },
          { label: "Dòng tiêu đề", illus: "pencil" },
          { label: "Giới thiệu, kinh nghiệm, dự án", illus: "page-facing-up" },
          { label: "Kỹ năng, chứng chỉ", illus: "toolbox" },
          { label: "Kết nối và nhắn tin", illus: "handshake" } ] },
      lines: [L("l1", null, "Six parts, one evening of work.", "Sáu chặng, đủ cho một buổi tối dựng khung.")] },

    // Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao cần hồ sơ trực tuyến?" },
      lines: [L("l1", "det", "Part one: why a student needs one.", "Phần một: sinh viên có cần hồ sơ trực tuyến không?")] },
    { id: "s05", module: "LIST-13", ref: "p1,p2",
      data: { title: "Ai tra tên bạn?",
        items: [
          { title: "Nhà tuyển dụng", detail: "Tìm ứng viên, kiểm tra lại thông tin trong CV", illus: "magnifying-glass-tilted-left" },
          { title: "Người phụ trách dự án", detail: "Thầy cô giới thiệu bạn, người ta tra tên bạn", illus: "man-teacher" },
          { title: "Dựng từ năm hai, năm ba", detail: "Thêm dần từng dự án, không vội điền mọi ô sát ngày nộp", illus: "spiral-calendar" } ] },
      lines: [
        L("l1", null, "Many recruiters look for candidates on professional networks, and check what your CV says.", "Nhiều nhà tuyển dụng tìm ứng viên trên mạng nghề nghiệp, và kiểm tra lại thông tin trong CV."),
        L("l2", null, "If a teacher recommends you for a project, the project leader may look you up there too.", "Thầy cô giới thiệu bạn cho một dự án, người phụ trách cũng có thể tra tên bạn ở đó."),
        L("l3", null, "Start in year two or three. Add projects slowly, instead of rushing the week before you apply.", "Dựng từ năm hai, năm ba: thêm dần từng dự án, thay vì vội điền mọi ô tuần trước khi nộp."),
      ] },

    // Chương 2
    { id: "s06", module: "HOST-03", data: { n: 2, of: 6, title: "Ảnh và tên hiển thị" },
      lines: [L("l1", "det", "Part two: your photo and your name.", "Phần hai: ảnh và tên hiển thị.")] },
    { id: "s07", module: "LIST-05", ref: "p3",
      data: { title: "Ảnh hồ sơ", illus: "camera-with-flash",
        items: ["Rõ mặt, khuôn mặt chiếm phần lớn khung hình", "Ánh sáng tốt, nền đơn giản", "Trang phục lịch sự", "Không ảnh nhóm cắt, kính râm, bộ lọc mạnh"] },
      lines: [
        L("l1", null, "A clear face that fills most of the frame. Good light, a simple background, neat clothes.", "Ảnh rõ mặt, khuôn mặt chiếm phần lớn khung; ánh sáng tốt, nền đơn giản, trang phục lịch sự."),
        L("l2", null, "No cropped group photos, no sunglasses, no strong filters. They look blurry and casual.", "Không ảnh nhóm đã cắt, kính râm hay bộ lọc mạnh: trông mờ và thiếu nghiêm túc."),
      ] },
    { id: "s08", module: "TEXT-02", ref: "p4",
      data: { text: "Nhờ bạn chụp bằng điện thoại, cạnh cửa sổ, ban ngày là đủ.", keywords: ["điện thoại", "cửa sổ"], illus: "mobile-phone" },
      lines: [
        L("l1", null, "No photographer needed. A friend with a phone, by a window, in daylight.", "Không cần thuê thợ ảnh: nhờ bạn chụp bằng điện thoại cạnh cửa sổ, ban ngày."),
        L("l2", null, "And your display name is your full real name, as on your CV. No nicknames, no icons.", "Tên hiển thị dùng đúng họ tên thật như trên CV, không biệt danh, không biểu tượng."),
      ] },
    { id: "s09", module: "CMP-02", ref: "p5,p6",
      data: { title: "Tên hiển thị trên hồ sơ của Lan", before: "Lan Xinh 🌸🌸", after: "Nguyễn Thị Lan",
        illusBefore: "cherry-blossom", illusAfter: "identification-card" },
      lines: [
        L("l1", null, "Before: a cute nickname. Recruiters search the CV name, so it won't show up.", "Trước: biệt danh dễ thương, nhưng gõ tên trên CV sẽ không ra."),
        L("l2", null, "After: her full name, as on her CV. Your profile name must match your CV.", "Sau: đúng họ tên trên CV. Tên hồ sơ phải giống tên trên CV."),
      ] },

    // Chương 3
    { id: "s10", module: "HOST-03", data: { n: 3, of: 6, title: "Dòng tiêu đề" },
      lines: [L("l1", "det", "Part three: the headline. Back to Dung.", "Phần ba: dòng tiêu đề. Quay lại với Dũng.")] },
    { id: "s11", module: "DLG-01", ref: "p7,p9,p10",
      data: { set: "campus", label: "Hồ sơ của Dũng",
        actors: [{ id: "dung", side: "left" }, { id: "lan", side: "right" }],
        verdict: { ok: false, label: "Để dòng tiêu đề mặc định", why: "“Sinh viên tại Trường X” không nói bạn học gì, quan tâm gì, đang tìm gì.",
          rule: "Ngành học + lĩnh vực quan tâm + điều đang tìm" } },
      lines: [
        L("l1", "lan", "Your headline just says: student at University X.", "Dòng tiêu đề chỉ ghi: sinh viên tại Trường X.", { pose: "point" }),
        L("l2", "dung", "That's the default. It's fine, isn't it?", "Mặc định đó mà. Vậy là ổn chứ?", { face: "neutral", pose: "shrug", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Your headline shows under your name and in search. Write your major, your interest, and what you're looking for.", "Dòng tiêu đề hiện dưới tên và trong tìm kiếm. Viết ngành học, lĩnh vực quan tâm, điều đang tìm."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "Third-year software engineering student, building websites, looking for a summer internship.", "Sinh viên năm ba Kỹ thuật phần mềm, làm web, tìm thực tập hè.", { phase: "redo", face: "happy", pose: "explain", react: { lan: "happy" } }),
      ] },
    { id: "s12", module: "LIST-09", ref: "p7,p8",
      data: { title: "Từ khoá người tuyển dụng hay gõ", illus: "magnifying-glass-tilted-left",
        keywords: [
          { text: "Tên ngành: Logistics", illus: "delivery-truck" }, { text: "Lĩnh vực: chuỗi cung ứng", illus: "link" },
          { text: "Điều đang tìm: thực tập hè", illus: "sun" }, { text: "Tên công việc", illus: "briefcase" },
          { text: "Kỹ năng chính", illus: "toolbox" } ] },
      lines: [
        L("l1", null, "Another example: third-year logistics student, interested in supply chains, looking for a summer internship.", "Ví dụ khác: “Sinh viên năm ba Logistics, quan tâm chuỗi cung ứng, tìm thực tập hè.”"),
        L("l2", null, "Use words recruiters type when they search: your field, job titles, key skills.", "Dùng từ người tuyển dụng ngành bạn hay gõ khi tìm: tên ngành, tên công việc, tên kỹ năng chính."),
      ] },

    // Chương 4
    { id: "s13", module: "HOST-03", data: { n: 4, of: 6, title: "Giới thiệu, kinh nghiệm, dự án" },
      lines: [L("l1", "det", "Part four: about, experience, and projects.", "Phần bốn: phần giới thiệu, kinh nghiệm và dự án.")] },
    { id: "s14", module: "LIST-06", ref: "p11,p12",
      data: { title: "Phần giới thiệu: ba đến năm câu, ngôi thứ nhất",
        steps: [
          { text: "Đang học gì, ở đâu: sinh viên năm ba Quản trị nhân sự", illus: "graduation-cap" },
          { text: "Làm tốt gì, kèm ví dụ: hai năm ban tổ chức CLB, phụ trách tuyển thành viên, buổi định hướng", illus: "busts-in-silhouette" },
          { text: "Đang tìm gì: thực tập tuyển dụng hoặc đào tạo", illus: "compass" } ] },
      lines: [
        L("l1", null, "Write three to five short sentences, in the first person. What you study, and where.", "Viết ba đến năm câu ở ngôi thứ nhất: bạn đang học gì, ở đâu."),
        L("l2", null, "What you do well, with an example. Two years on a club team, recruiting members and running orientation.", "Bạn làm tốt điều gì, kèm ví dụ: hai năm ban tổ chức CLB, phụ trách tuyển thành viên và buổi định hướng."),
        L("l3", null, "And what you're looking for: an internship in recruiting or training. Readers see how they could help.", "Và bạn đang tìm gì: thực tập tuyển dụng hoặc đào tạo. Người đọc biết họ giúp được gì."),
      ] },
    { id: "s15", module: "LIST-13", ref: "p13,p14",
      data: { title: "Chưa đi làm, vẫn có cái để ghi",
        items: [
          { title: "Học vấn", detail: "Trường, ngành, năm dự kiến tốt nghiệp, vài môn liên quan", illus: "school" },
          { title: "Kinh nghiệm", detail: "Thực tập, làm thêm, vai trò CLB: hai, ba dòng hành động và kết quả", illus: "briefcase" },
          { title: "Dự án", detail: "Môn học, nghiên cứu, cuộc thi, kèm đường dẫn sản phẩm", illus: "link" } ] },
      lines: [
        L("l1", null, "Education: school, major, expected graduation year, and a few related courses.", "Học vấn: trường, ngành, năm dự kiến tốt nghiệp, vài môn liên quan."),
        L("l2", null, "Experience: internships, part-time jobs, club roles. Two or three lines each, actions and results.", "Kinh nghiệm: thực tập, làm thêm, vai trò ở CLB, mỗi mục hai, ba dòng hành động và kết quả."),
        L("l3", null, "Projects are where students shine: class projects, research, contests. Add a link, so people see the real work.", "Dự án là chỗ nên tận dụng: dự án môn học, nghiên cứu, cuộc thi, kèm đường dẫn để người xem thấy sản phẩm thật."),
      ] },
    { id: "s16", module: "SCENE-03", ref: "p15,p16,p17",
      data: { set: "meeting", actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right" }],
        left: { label: "Chỉ sửa CV", ok: false }, right: { label: "Sửa cả hồ sơ", ok: true } },
      lines: [
        L("l1", null, "A student becomes head of his club's media team. He updates his CV.", "Một bạn vừa lên trưởng ban truyền thông CLB và sửa CV."),
        L("a1", "hoa", "Your CV says head, your profile says member. Which one is right?", "CV ghi trưởng ban, hồ sơ ghi thành viên. Cái nào mới đúng hả em?", { phase: "a", face: "thinking" }),
        L("a2", "dung", "Well, um, let me explain…", "Dạ, để em giải thích…", { phase: "a", face: "worried" }),
        L("b1", "hoa", "I see you lead the media team. Tell me about your work.", "Cô thấy em làm trưởng ban truyền thông. Kể cô nghe việc em làm nhé.", { phase: "b", face: "happy" }),
        L("b2", "dung", "Sure! Last term I ran our page and two events.", "Dạ, kỳ trước em phụ trách trang và hai sự kiện ạ.", { phase: "b", face: "happy", pose: "explain" }),
        L("l2", null, "Recruiters compare them. Different dates or titles cost you points. Edit the CV, edit the profile. Same story.", "Người tuyển dụng hay đối chiếu: lệch thời gian, chức danh là mất điểm. CV và hồ sơ phải kể cùng một câu chuyện."),
      ] },

    // Chương 5
    { id: "s17", module: "HOST-03", data: { n: 5, of: 6, title: "Kỹ năng và chứng chỉ" },
      lines: [L("l1", "det", "Part five: skills and certificates.", "Phần năm: kỹ năng và chứng chỉ, thêm gì, bỏ gì.")] },
    { id: "s18", module: "CMP-06", ref: "p18,p19",
      data: { do: ["Kỹ năng thật dùng được, liên quan đến ngành", "Ghim vài kỹ năng quan trọng nhất lên đầu", "Chứng chỉ ngoại ngữ, tin học, khoá có thực hành"],
        dont: ["Thêm mọi giấy chứng nhận dự hội thảo"], doIcons: ["toolbox", "pushpin", "scroll"], dontIcons: ["wastebasket"] },
      lines: [
        L("l1", null, "Add skills you can really use, for your field: software, spreadsheets, a language, a programming language.", "Thêm kỹ năng thật sự dùng được và liên quan ngành: phần mềm, bảng tính, ngoại ngữ, ngôn ngữ lập trình."),
        L("l2", null, "Pin the key ones to the top, so visitors see them first.", "Ghim vài kỹ năng quan trọng nhất lên đầu, người xem thấy ngay."),
        L("l3", null, "Certificates: language, IT, practical courses. Not every seminar paper, or the profile gets diluted.", "Chứng chỉ: ngoại ngữ, tin học, khoá có thực hành. Đừng thêm mọi giấy dự hội thảo, hồ sơ sẽ loãng."),
      ] },

    // Chương 6
    { id: "s19", module: "HOST-03", data: { n: 6, of: 6, title: "Kết nối và nhắn tin" },
      lines: [L("l1", "det", "Part six: who to connect with, and how to message politely.", "Phần sáu: kết nối với ai, nhắn tin thế nào cho lịch sự.")] },
    { id: "s20", module: "LIST-02", ref: "p20",
      data: { title: "Bắt đầu với người bạn thật sự biết", illus: "handshake",
        items: [
          { icon: "users", illus: "busts-in-silhouette", text: "Bạn cùng lớp" },
          { icon: "graduation-cap", illus: "man-teacher", text: "Thầy cô" },
          { icon: "briefcase", illus: "briefcase", text: "Người hướng dẫn thực tập" },
          { icon: "calendar", illus: "spiral-calendar", text: "Anh chị khoá trên gặp ở sự kiện" } ] },
      lines: [
        L("l1", null, "Start with people you really know: classmates, teachers, internship mentors, older students you met at events.", "Bắt đầu với người bạn thật sự biết: bạn cùng lớp, thầy cô, người hướng dẫn thực tập, anh chị khoá trên đã gặp."),
        L("l2", null, "For someone less close, add a short note: who you are, and why you want to connect.", "Với người chưa thân, kèm lời nhắn ngắn nói bạn là ai và vì sao muốn kết nối."),
      ] },
    { id: "s21", module: "SCENE-02", ref: "p21",
      data: { set: "room", label: "Lời mời kèm lời nhắn", actor: { id: "lan", side: "left" },
        contact: { name: "Chị diễn giả hội thảo", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Em chào chị, em là sinh viên năm ba ngành Logistics, vừa nghe chị chia sẻ ở hội thảo của khoa.", at: "l1" },
          { from: "me", text: "Em rất thích phần chị nói về kho vận, xin phép được kết nối để theo dõi chia sẻ của chị ạ.", at: "l2" } ] },
      lines: [
        L("l1", "lan", "Hello, I'm a third-year logistics student. I just heard your talk at our faculty seminar.", "Em chào chị, em là sinh viên năm ba ngành Logistics…"),
        L("l2", "lan", "I really liked your part on warehousing. May I connect, to follow your posts?", "Em rất thích phần chị nói về kho vận…"),
        L("l3", null, "Who you are, where you heard her, and which part you liked. Polite, and specific.", "Nói rõ mình là ai, nghe chị ở đâu, thích phần nào: lịch sự và cụ thể."),
      ] },
    { id: "s22", module: "LIST-06", ref: "p22,p23",
      data: { title: "Lan mở rộng mạng lưới, không thành người lạ xin việc",
        steps: [
          { text: "Tuần đầu: chỉ mời người đã quen", illus: "busts-in-silhouette" },
          { text: "Mỗi lời mời kèm một câu nhắc đã gặp ở đâu", illus: "speech-balloon" },
          { text: "Anh khoá trên đồng ý: cảm ơn, hỏi một câu nhỏ về nghề", illus: "thinking-face" },
          { text: "Nhờ giới thiệu việc để sau, khi đã trò chuyện vài lần", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "Lan wants a bigger network, without becoming a stranger asking for jobs.", "Lan muốn mở rộng mạng lưới mà không thành người lạ đi xin việc."),
        L("l2", null, "Week one: she only invites people she knows, each with a line about where they met.", "Tuần đầu, Lan chỉ mời người đã quen, mỗi lời mời kèm một câu nhắc đã gặp nhau ở đâu."),
        L("l3", null, "A senior accepts. She thanks him and asks: what skill matters most in your first year in logistics?", "Một anh khoá trên đồng ý, Lan cảm ơn và hỏi: năm đầu đi làm logistics cần kỹ năng gì nhất ạ?"),
        L("l4", null, "Asking for a referral comes later. Get to know people first, ask for favours later.", "Chuyện nhờ giới thiệu việc để sau. Làm quen trước, nhờ vả sau."),
      ] },
    { id: "s23", module: "CMP-01", ref: "p24",
      data: { labels: ["Không cần", "Chỉ cần"], left: "Đăng bài mỗi ngày",
        right: "Chia sẻ dự án xong, bình luận có nội dung, theo dõi công ty", illus: ["mobile-phone", "speech-balloon"] },
      lines: [
        L("l1", null, "You don't need to post every day. Share a finished project and what you learned.", "Không cần đăng bài mỗi ngày: chia sẻ khi xong một dự án kèm điều học được."),
        L("l2", null, "Leave useful comments on posts by people in your field. A real idea or question, not just thanks, so they remember you.", "Bình luận có nội dung dưới bài người trong ngành: một ý hay câu hỏi, không chỉ cảm ơn, để họ nhớ bạn."),
        L("l3", null, "And follow the companies you care about. That's enough.", "Và theo dõi trang các công ty bạn quan tâm. Vậy là đủ."),
      ] },

    // Quay lại + tổng kết
    { id: "s24", module: "SCENE-02", ref: "p9",
      data: { set: "room", label: "Vài tuần sau",
        actor: { id: "dung", side: "left" },
        contact: { name: "Anh cựu sinh viên", illus: "man-technologist" },
        messages: [{ from: "them", text: "Chào em, em có muốn thử vòng phỏng vấn thực tập ở nhóm anh không?", at: "l2" }] },
      lines: [
        L("l1", null, "And Dung? A few weeks after the new headline, a graduate of his school sends a message.", "Còn Dũng? Vài tuần sau khi đổi dòng tiêu đề, một anh cựu sinh viên của trường nhắn tin."),
        L("l2", "them", "Hi, would you like to try an internship interview with my team?", "Chào em, em có muốn thử vòng phỏng vấn thực tập ở nhóm anh không?"),
        L("l3", "dung", "Yes, I would. Thank you!", "Dạ có ạ, em cảm ơn anh!", { face: "happy" }),
      ] },
    { id: "s25", module: "END-03", ref: "p25,outro",
      data: { title: "Cuối mỗi học kỳ", illus: "spiral-calendar",
        items: ["Thêm dự án, hoạt động mới", "Sửa hồ sơ ngay khi sửa CV", "Dòng tiêu đề còn đúng điều mình đang tìm không"] },
      lines: [
        L("l1", null, "At the end of each term: add new projects and activities.", "Cuối mỗi học kỳ: thêm dự án, hoạt động mới."),
        L("l2", null, "Update the profile the moment you update your CV. And check your headline still says what you want.", "Sửa hồ sơ ngay khi sửa CV, và xem dòng tiêu đề còn đúng điều mình đang tìm không."),
      ] },
    { id: "s26", module: "QUIZ-01", ref: "questions[17]",
      data: {
        q: "In the first option, what happened when the CV said club head but the profile said member?",
        options: [
          "He spent the start of the interview explaining instead of talking about his work",
          "The interviewer chose the better title and never mentioned the difference",
          "He was offered a manager job because the profile showed two roles",
        ],
        correct: 0, countdown: 5, illus: "page-facing-up",
        why: "Mất mấy phút đầu buổi để thanh minh, lẽ ra để kể việc mình đã làm.",
      },
      lines: [
        L("l1", null, "In the first option, what happened when the CV said club head but the profile said member?", "Ở cách A, khi CV ghi trưởng ban còn hồ sơ ghi thành viên, chuyện gì xảy ra?"),
        L("l2", null, "He spent the start of the interview explaining instead of talking about his work.", "Bạn ấy mất mấy phút đầu buổi để thanh minh, thay vì kể việc mình làm."),
        L("l3", null, "Edit your CV, then edit your profile the same day. It takes minutes.", "Sửa CV xong thì sửa hồ sơ luôn: chỉ mất vài phút."),
      ] },
    { id: "s27", module: "END-05", data: { text: "Bốn mươi câu hỏi sau khi sửa hồ sơ", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Tonight: fix your name, rewrite your headline, and invite one teacher with a note. Then try the forty questions below.", "Tối nay: sửa tên, viết lại dòng tiêu đề, gửi lời mời kèm lời nhắn cho một thầy cô. Rồi làm bốn mươi câu bên dưới.", { face: "happy" })] },
  ],
};
