// Kịch bản video W lần 3 (#110) — "Trả lời câu “Bạn biết gì về công ty chúng tôi?” thế nào cho tốt" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-answer-what-do-you-know-about-our-company--w01",
  hook: "HOOK-06",
  loop: { open: "s01", close: "s28" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "job-seekers", slug: "how-to-answer-what-do-you-know-about-our-company", door: "ky-nang", level: "B1",
    title: "Trả lời câu \"Bạn biết gì về công ty chúng tôi?\" thế nào cho tốt", series: "Chuẩn bị phỏng vấn xin việc" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 26/26. Đổi tên: “bạn” ở Trước – sau p3 và các bước p5–p8 → Dũng; người phỏng vấn → Cô Hoa (chỉ hỏi câu “Bạn biết gì về công ty?” và câu nhắc nhẹ có trong bài p18); Thoa (p13) → Thảo; chủ tiệm bánh → Cô Hoa (chỉ nói câu “Chưa có kế hoạch đó đâu em” của bài); người đã đi làm ở câu mẫu p9 và “bạn” đi làm ba năm ở p25 → Thảo; người mới ra trường ở câu mẫu p10 → Dũng; Định (p18) → Dũng. Vai mới: Sam (s21) là người phỏng vấn phần tiếng Anh của p17, chỉ hỏi câu “What do you know about our company?”; Dũng đọc hai câu mẫu tiếng Anh p17. Không dùng Bin, Bà Tư. Hai cảnh DLG-01: s17 (p13–p14, tiệm bánh; làm lại bằng câu mẫu p12) và s28 (p25, mở đầu bằng chuyện gần nhà; làm lại bằng câu mẫu p9). Câu đố: questions[8], questions[22] (không có tên nhân vật).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-03", ref: "p3",
      data: { set: "office",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        left: { label: "Đọc dữ kiện trả bài", ok: false },
        right: { label: "Chi tiết và lý do", ok: true } },
      lines: [
        L("a1", "hoa", "What do you know about our company?", "Em biết gì về công ty chúng tôi?", { phase: "a" }),
        L("a2", "dung", "Founded over fifteen years ago, twelve branches, strong growth last year...", "Thành lập hơn mười lăm năm, mười hai chi nhánh, doanh thu tăng mạnh…", { phase: "a", react: { hoa: "neutral" } }),
        L("b2", "dung", "You make stock software for small factories. I noticed the phone stock alerts.", "Bên mình làm phần mềm kho cho xưởng nhỏ. Em chú ý tính năng báo tồn trên điện thoại.", { phase: "b", pose: "explain" }),
        L("b3", "dung", "At a print shop, I once spent a whole morning counting by hand.", "Hồi làm ở xưởng in, em từng mất cả buổi đếm hàng bằng tay.", { phase: "b", face: "happy", react: { hoa: "happy" } }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ba phần, khoảng một phút", pose: "present",
        items: ["Công ty làm gì, cho ai", "Một điểm cụ thể bạn chú ý", "Điểm đó gắn với bạn ra sao"] },
      lines: [
        L("l1", "det", "How do you answer: what do you know about us? Three short parts.", "Trả lời câu “Bạn biết gì về công ty?” thế nào? Ba phần ngắn."),
        L("l2", "det", "What the company does, and for whom.", "Công ty làm gì, cho ai."),
        L("l3", "det", "One detail you noticed.", "Một điểm cụ thể bạn chú ý."),
        L("l4", "det", "And how it links to you. About one minute.", "Và điểm đó gắn với bạn ra sao. Khoảng một phút."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "Họ muốn nghe gì", illus: "ear" },
        { label: "Ba phần của câu trả lời", illus: "puzzle-piece" },
        { label: "Câu trả lời mẫu", illus: "speech-balloon" },
        { label: "Công ty nhỏ, ít tin", illus: "magnifying-glass-tilted-left" },
        { label: "Luyện không học thuộc", illus: "stopwatch" },
        { label: "Câu dễ nhầm, câu mất điểm", illus: "cross-mark" } ] },
      lines: [
        L("l1", null, "Six parts: what they want, the three parts, sample answers,", "Sáu phần: họ muốn nghe gì, ba phần trả lời, câu mẫu,"),
        L("l2", null, "small companies, practising, and answers that lose points.", "công ty nhỏ, cách luyện, và những câu làm mất điểm."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Họ thật ra muốn nghe gì?" },
      lines: [L("l1", "det", "Part one: what do they really want to hear?", "Phần một: người phỏng vấn thật ra muốn nghe gì?")] },
    { id: "s05", module: "LIST-07", ref: "p1,p2",
      data: { title: "Câu hỏi này kiểm tra ba thứ", items: [
        { text: "Có bỏ công tìm hiểu không", illus: "magnifying-glass-tilted-left" },
        { text: "Có biết chọn điều quan trọng không", illus: "bullseye" },
        { text: "Có thấy mối nối với năng lực mình không", illus: "link" } ] },
      lines: [
        L("l1", null, "They don't count facts. Did you choose them on purpose, or apply everywhere?", "Họ không đếm dữ kiện. Bạn chọn nơi này có chủ đích, hay nộp hàng loạt?"),
        L("l2", null, "It tests three things. Did you do the research?", "Câu này kiểm tra ba thứ. Bạn có bỏ công tìm hiểu không?"),
        L("l3", null, "Can you pick what matters?", "Giữa nhiều thông tin, bạn có biết chọn điều quan trọng không?"),
        L("l4", null, "Do you see the link to your skills? So one detail and one reason beat a long list.", "Có thấy mối nối với năng lực mình không? Nên một chi tiết, một lý do thắng danh sách dài."),
      ] },
    { id: "s06", module: "TEXT-01", ref: "p3,p4",
      data: { kicker: "Rút ra", text: "Ít dữ kiện, nhiều lý do.", illus: "light-bulb" },
      lines: [
        L("l1", null, "Dũng's second answer was much shorter, with one detail and one real reason.", "Bản sau của Dũng ngắn hơn nhiều, có một chi tiết và một lý do thật."),
        L("l2", null, "Fewer facts, more reasons.", "Ít dữ kiện, nhiều lý do."),
      ] },

    // ---------- Phần 2 ----------
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Câu trả lời gồm những phần nào?" },
      lines: [L("l1", "det", "Part two: the parts of your answer.", "Phần hai: câu trả lời gồm những phần nào?")] },
    { id: "s08", module: "LIST-06", ref: "p5,p6",
      data: { title: "Từng bước", steps: [
        { text: "Một câu: công ty làm gì, cho ai", illus: "office-building" },
        { text: "Một điểm cụ thể: sản phẩm, cách chăm sóc khách, dự án cộng đồng", illus: "magnifying-glass-tilted-left" },
        { text: "Nối điểm đó với bạn", illus: "link" },
        { text: "Kết bằng một câu mở", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "Step one: one sentence. What they do, for whom.", "Bước một: một câu tóm tắt công ty, làm gì, cho ai."),
        L("l2", null, "Step two: one specific point. A new product, customer care, a community project.", "Bước hai: một điểm cụ thể. Sản phẩm mới, cách chăm sóc khách, dự án cộng đồng."),
        L("l3", null, "Not: a very reputable company. That fits everyone.", "Không phải “công ty rất uy tín”. Câu đó đúng với mọi nơi."),
      ] },
    { id: "s09", module: "CMP-01", ref: "p7",
      data: { labels: ["Chưa nối", "Đã nối với bạn"], left: "“Em thích tính năng mới của bên mình”", right: "“Em thích tính năng đó vì em từng làm báo cáo như vậy”", illus: ["thumbs-up", "link"] },
      lines: [
        L("l1", null, "Step three: link it to you. Why it attracts you, or what you can add.", "Bước ba: nối điểm đó với bạn. Vì sao hấp dẫn bạn, hay bạn góp được gì."),
        L("l2", null, "Many people skip this. It's what makes you different.", "Nhiều người bỏ qua bước này, mà đây là bước làm bạn khác người khác."),
      ] },
    { id: "s10", module: "SCENE-01", ref: "p8",
      data: { set: "office", label: "Kết bằng câu mở",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "dung", "From my research, you provide stock software for small and medium factories.", "Theo em tìm hiểu, công ty cung cấp phần mềm quản lý kho cho xưởng vừa và nhỏ.", { pose: "explain", to: "hoa" }),
        L("l2", "dung", "I'd really like to know how the team is building that feature.", "Em rất muốn biết thêm nhóm đang triển khai tính năng đó thế nào.", { face: "happy", react: { hoa: "happy" } }),
        L("l3", null, "End with an open line. Interviewers like talking about their team's work.", "Kết bằng một câu mở. Người phỏng vấn thường thích kể về việc nhóm mình đang làm."),
      ] },

    // ---------- Phần 3 ----------
    { id: "s11", module: "HOST-03", data: { n: 3, of: 6, title: "Câu trả lời mẫu" },
      lines: [L("l1", "det", "Part three: what a sample answer looks like.", "Phần ba: một câu trả lời mẫu trông như thế nào?")] },
    { id: "s12", module: "SCENE-01", ref: "p9",
      data: { set: "office", label: "Chăm sóc khách hàng",
        actors: [{ id: "thao", side: "farleft" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l2", "thao", "You sell home goods online, mostly to young families.", "Bên mình bán đồ gia dụng trực tuyến, khách chủ yếu là gia đình trẻ.", { pose: "explain", to: "hoa" }),
        L("l3", "thao", "I noticed your clear return policy, and how fast you reply to comments.", "Em chú ý chính sách đổi trả rõ ràng và việc trả lời bình luận khá nhanh.", { pose: "explain", to: "hoa" }),
        L("l4", "thao", "At my last job, I handled returns every day, so I know good after-sales keeps customers.", "Ở chỗ cũ em xử lý đổi trả hằng ngày, nên hiểu hậu mãi tốt giữ khách thế nào.", { face: "happy", react: { hoa: "happy" } }),
      ] },
    { id: "s13", module: "TEXT-04", ref: "p10",
      data: { text: "“Công ty vừa đầu tư dây chuyền mới. Sản xuất mở rộng thì chi phí cần theo dõi kỹ hơn, đó là mảng em học kỹ nhất.”", marks: ["dây chuyền mới", "em học kỹ nhất"], illus: "package" },
      lines: [
        L("l1", null, "A new graduate, for accounting at a packaging factory.", "Người mới ra trường, ứng tuyển kế toán ở một xưởng bao bì."),
        L("l2", null, "You make packaging and export. I read about your new production line.", "Công ty sản xuất bao bì, có xuất khẩu. Em đọc tin công ty vừa đầu tư dây chuyền mới."),
        L("l3", null, "Growing production needs closer cost tracking. That's what I studied most.", "Sản xuất mở rộng thì chi phí cần theo dõi kỹ hơn, đó là mảng em học kỹ nhất."),
      ] },
    { id: "s14", module: "LIST-05", ref: "p11",
      data: { title: "Hai câu mẫu giống nhau ở đâu?", illus: "check-mark-button", items: ["Không dài", "Có một chi tiết thật", "Quay về năng lực của người nói"] },
      lines: [
        L("l1", null, "Both are short, with one real detail, and come back to the speaker's skills.", "Cả hai đều ngắn, có một chi tiết thật, quay về năng lực người nói."),
        L("l2", null, "Even with one evening left, you can write three lines like this.", "Chỉ còn một buổi tối, bạn vẫn viết được ba dòng như vậy."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Công ty nhỏ, ít thông tin" },
      lines: [L("l1", "det", "Part four: a small company, with little information.", "Phần bốn: công ty nhỏ, tìm mãi không ra thông tin thì sao?")] },
    { id: "s16", module: "LIST-02", ref: "p12",
      data: { title: "Dựa vào điều chính bạn quan sát", items: [
        { illus: "shopping-bags", text: "Sản phẩm bạn dùng thử" }, { illus: "desktop-computer", text: "Trang bán hàng" },
        { illus: "memo", text: "Cách họ viết tin tuyển dụng" }, { illus: "red-question-mark", text: "Phần chưa rõ: biến thành câu hỏi" } ], illus: "eyes" },
      lines: [
        L("l1", null, "Use what you observed: products you tried, their sales page, the job post.", "Dựa vào điều bạn quan sát: sản phẩm dùng thử, trang bán hàng, cách viết tin tuyển dụng."),
        L("l2", null, "Say honestly there's little public information. Turn the gap into a question.", "Nói thật thông tin công khai còn ít, và biến phần chưa rõ thành câu hỏi."),
      ] },
    { id: "s17", module: "DLG-01", ref: "p13,p14",
      data: { set: "shop", label: "Phỏng vấn ở tiệm bánh",
        actors: [{ id: "thao", side: "farleft" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Đoán bừa khi không có thông tin",
          why: "Chủ tiệm sửa ngay, phần còn lại Thảo trả lời ngắn hẳn và ngượng." } },
      lines: [
        L("l1", null, "Thảo applies to a bakery opening a new branch. Online, there's only a sales page.", "Thảo ứng tuyển tiệm bánh đang mở chi nhánh. Trên mạng chỉ có trang bán hàng."),
        L("l2", "hoa", "What do you know about our bakery?", "Em biết gì về tiệm bánh của cô?", { pose: "explain" }),
        L("l3", "thao", "I think you're about to expand to many provinces.", "Em nghĩ bên mình sắp mở rộng ra nhiều tỉnh.", { face: "happy", pose: "explain", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "A guess, said as a fact. The owner laughs: no such plan yet.", "Đoán mà nói như thật. Chủ tiệm cười: “Chưa có kế hoạch đó đâu em.”"),
        L("l6", "det", "After that, she answers shorter and feels awkward about branches.", "Sau đó Thảo trả lời ngắn hẳn, cứ ngượng mỗi khi nhắc chi nhánh."),
        L("l7", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l8", "thao", "I couldn't find much about your plans for next year. Could you tell me more?", "Em chưa tìm được nhiều về kế hoạch năm tới, cô chia sẻ thêm được không ạ?", { phase: "redo", face: "thinking", pose: "explain", react: { hoa: "happy" } }),
        L("l9", "det", "Know little? Say so. Not sure? Ask.", "Biết ít thì nói thật, chưa rõ thì hỏi.", { phase: "redo", face: "happy" }),
      ] },

    // ---------- Phần 5 ----------
    { id: "s18", module: "HOST-03", data: { n: 5, of: 6, title: "Luyện mà không như học thuộc" },
      lines: [L("l1", "det", "Part five: practise without sounding memorised.", "Phần năm: luyện thế nào để không nghe như học thuộc?")] },
    { id: "s19", module: "LIST-05", ref: "p15",
      data: { title: "Cách luyện", illus: "stopwatch", items: [
        "Ba từ khoá cho ba bước: “phần mềm kho, báo cáo tồn, kinh nghiệm kiểm kê”", "Nói to, bấm giờ: quá một phút rưỡi thì cắt ý phụ", "Thu âm, nghe lại các từ “dạ”, “kiểu như”" ] },
      lines: [
        L("l1", null, "Three key words for three steps: stock software, stock reports, inventory experience.", "Ba từ khoá cho ba bước: phần mềm kho, báo cáo tồn, kinh nghiệm kiểm kê."),
        L("l2", null, "Speak aloud and time it. Over a minute and a half? Cut side points.", "Nói to và bấm giờ. Quá một phút rưỡi thì cắt bớt ý phụ."),
        L("l3", null, "Record yourself. Too many fillers?", "Thu âm, nghe lại xem có lặp “dạ”, “kiểu như” quá nhiều không."),
      ] },
    { id: "s20", module: "CMP-01", ref: "p16",
      data: { labels: ["Học thuộc từng chữ", "Nhớ ba từ khoá"], left: "Bị hỏi chen là quên mất đoạn sau", right: "Bị hỏi chen vẫn nói tiếp từ ý chính", illus: ["page-facing-up", "key"] },
      lines: [
        L("l1", null, "Writing helps you organise. But don't memorise every word.", "Viết ra giúp sắp xếp ý, nhưng đừng học thuộc từng chữ."),
        L("l2", null, "With three key words, you can go on even if they cut in.", "Nhớ ba từ khoá thì khi bị hỏi chen, bạn vẫn nói tiếp được từ ý chính."),
      ] },
    { id: "s21", module: "SCENE-01", ref: "p17",
      data: { set: "meeting", label: "Phần tiếng Anh",
        actors: [{ id: "dung", side: "left" }, { id: "sam", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "An English part? Practise a short version too.", "Có phần tiếng Anh? Luyện thêm một phiên bản ngắn."),
        L("l2", "sam", "What do you know about our company?", "Bạn biết gì về công ty chúng tôi?", { pose: "explain", to: "dung" }),
        L("l3", "dung", "From my research, your company focuses on small factories.", "Theo tìm hiểu của tôi, công ty tập trung vào các xưởng nhỏ.", { pose: "explain", to: "sam" }),
        L("l4", "dung", "That connects with my experience in stock control.", "Điều đó gắn với kinh nghiệm quản lý kho của tôi.", { face: "happy", react: { sam: "happy" } }),
      ] },
    { id: "s22", module: "SCENE-01", ref: "p18",
      data: { set: "office", label: "Công ty thứ hai",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "Dũng has three interviews in one week. He uses one great answer for all.", "Một tuần Dũng phỏng vấn ba nơi, dùng một câu trả lời hay cho tất cả."),
        L("l2", null, "At the second company, he says it smoothly, with the other company's product.", "Ở công ty thứ hai, Dũng nói trôi chảy, nhắc cả tên sản phẩm của nơi kia."),
        L("l3", "hoa", "That's another company's product.", "Đó là sản phẩm bên khác anh ạ.", { face: "neutral", react: { dung: "worried" } }),
        L("l4", null, "He apologises, but the rest sounds rushed and scattered.", "Dũng xin lỗi, cố nói tiếp, nhưng phần còn lại vội và rời rạc."),
      ] },
    { id: "s23", module: "TEXT-02", ref: "p19",
      data: { text: "Mỗi công ty một tờ, vào phòng nào ôn tờ nấy.", keywords: ["Mỗi công ty một tờ"], illus: "notebook" },
      lines: [L("l1", null, "One note per company. Review the right one before each room.", "Mỗi công ty một tờ, vào phòng nào ôn tờ nấy.")] },

    // ---------- Phần 6 ----------
    { id: "s24", module: "HOST-03", data: { n: 6, of: 6, title: "Câu dễ nhầm, câu mất điểm" },
      lines: [L("l1", "det", "Last part: a similar question, and answers that lose points.", "Phần cuối: câu dễ nhầm, và những câu làm mất điểm.")] },
    { id: "s25", module: "CMP-01", ref: "p20",
      data: { labels: ["“Bạn biết gì về chúng tôi?”", "“Vì sao muốn làm ở đây?”"], left: "Nghiêng về hiểu biết", right: "Nghiêng về động lực của bạn", illus: ["books", "fire"] },
      lines: [
        L("l1", null, "These two often come together. The first is about knowledge.", "Hai câu này hay đi liền nhau. Câu đầu nghiêng về hiểu biết."),
        L("l2", null, "Why here is about your motivation. Prepare different details, so you don't repeat.", "“Vì sao muốn làm ở đây” nghiêng về động lực. Chuẩn bị chi tiết khác nhau để khỏi lặp."),
      ] },
    { id: "s26", module: "HOST-02", ref: "p21",
      data: { statement: "Nhắc số liệu doanh thu luôn làm câu trả lời mạnh hơn", truth: false,
        why: "Chỉ khi lấy từ nguồn chính thức và liên quan vị trí. Thường chi tiết về sản phẩm, khách hàng có ích hơn." },
      lines: [
        L("l1", "det", "Quoting income figures always makes your answer stronger. True or false?", "Nhắc số liệu doanh thu luôn làm câu trả lời mạnh hơn. Đúng hay sai?"),
        L("l2", "det", "False. Only from official sources, and if it fits the role. Usually, a product or customer detail helps more.", "Sai. Chỉ khi từ nguồn chính thức, liên quan vị trí. Thường chi tiết sản phẩm, khách hàng có ích hơn.", { face: "wink" }),
      ] },
    { id: "s27", module: "CMP-06", ref: "p22,p23,p24",
      data: { doLabel: "Nên", dontLabel: "Không nên",
        do: ["Một chi tiết thật, đã kiểm chứng"],
        dont: ["“Dạ, em cũng chưa tìm hiểu nhiều”", "Khen chung, nói nhầm sản phẩm, nhắc tin đồn", "Chỉ nói “lương cao, gần nhà”"],
        doIcons: ["check-mark-button"], dontIcons: ["face-with-diagonal-mouth", "speaking-head", "money-bag"] },
      lines: [
        L("l1", null, "The worst: I haven't really looked into it. It says you didn't prepare.", "Tệ nhất: “Dạ, em cũng chưa tìm hiểu nhiều.” Nói thẳng là bạn không chuẩn bị."),
        L("l2", null, "A very professional company fits anyone. A wrong product or a rumour makes them doubt everything.", "“Rất chuyên nghiệp” đúng với mọi nơi. Nhầm sản phẩm hay tin đồn khiến họ nghi cả phần còn lại."),
        L("l3", null, "High pay, close to home: maybe true, but not the main point.", "“Lương cao, gần nhà” có thể thật, nhưng đừng làm trọng tâm."),
      ] },
    { id: "s28", module: "DLG-01", ref: "p25",
      data: { set: "office", label: "Chuyển việc",
        actors: [{ id: "thao", side: "farleft" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Mở đầu bằng chuyện gần nhà",
          why: "Sự thật, nhưng chỉ nói điều mình được; người phỏng vấn chưa thấy bạn hợp ở điểm nào." } },
      lines: [
        L("l1", "hoa", "What do you know about our company?", "Em biết gì về công ty chúng tôi?", { pose: "explain" }),
        L("l2", "thao", "Well, your office is only ten minutes from my home.", "Dạ, văn phòng bên mình chỉ cách nhà em mười phút.", { face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "True, but it's only what you get. Talk about the product and what you give first.", "Đúng, nhưng chỉ là điều bạn được. Nói về sản phẩm và điều mình góp trước."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "thao", "I noticed your clear return policy. I've handled returns every day for years.", "Em chú ý chính sách đổi trả rõ ràng của bên mình. Em xử lý đổi trả hằng ngày đã mấy năm.", { phase: "redo", pose: "explain", react: { hoa: "happy" } }),
        L("l7", "det", "Save close to home for the talk about working hours. Then it's a real plus.", "Chuyện gần nhà để dành lúc bàn giờ làm, khi nó thành điểm cộng thật.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s29", module: "TEXT-01", ref: "p26",
      data: { text: "Nói điều mình góp, đừng chỉ nói điều mình được.", illus: "handshake" },
      lines: [L("l1", null, "Talk about what you give, not only what you get.", "Nói điều mình góp, đừng chỉ nói điều mình được.")] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s30", module: "END-02", ref: "outro",
      data: { kicker: "Nhớ mang theo", illus: "speech-balloon", points: [
        "Một câu tóm tắt, một chi tiết, một mối nối",
        "Biết ít thì nói thật, chưa rõ thì hỏi",
        "Nói điều mình góp, đừng chỉ nói điều mình được" ],
        icons: ["puzzle-piece", "red-question-mark", "handshake"] },
      lines: [
        L("l1", null, "One summary, one real detail, one link to you, in about a minute.", "Một câu tóm tắt, một chi tiết thật, một mối nối với bạn, gọn trong một phút."),
        L("l2", null, "Today, write three key words, then say it aloud and time it three times.", "Hôm nay, viết ba từ khoá, rồi nói to và bấm giờ ba lần."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[8]",
      data: { q: "Which step of the answer do many candidates skip, even though it matters most?",
        options: [
          "Thanking the interviewer for asking such an easy and friendly question",
          "Saying the full official name of the company at the start of the answer",
          "Linking the company detail to their own experience or what they can offer",
        ],
        correct: 2, countdown: 5, illus: "link",
        why: "Bước nối với bản thân làm câu trả lời của bạn khác người khác." },
      lines: [
        L("l1", null, "Which step of the answer do many candidates skip, even though it matters most?", "Bước nào nhiều ứng viên bỏ qua dù quan trọng nhất?"),
        L("l2", null, "Linking the company detail to their own experience or what they can offer.", "Nối chi tiết về công ty với kinh nghiệm hoặc điều mình góp được."),
        L("l3", null, "Without it, your answer is information anyone can find.", "Thiếu nó, câu trả lời chỉ là thông tin ai cũng tìm được."),
      ] },
    { id: "s32", module: "QUIZ-01", ref: "questions[22]",
      data: { q: "How can you practise your answer about the company without sounding memorised?",
        options: [
          "Keep three keywords for three steps, speak aloud, time yourself, and record it",
          "Do not practise, because a fresh answer always sounds more honest and natural",
          "Write a full page and read it again and again until every word is fixed",
        ],
        correct: 0, countdown: 5, illus: "stopwatch",
        why: "Ba từ khoá giữ ý mà vẫn tự nhiên; bấm giờ, thu âm để sửa." },
      lines: [
        L("l1", null, "How can you practise your answer about the company without sounding memorised?", "Luyện câu trả lời về công ty thế nào để không nghe như học thuộc?"),
        L("l2", null, "Keep three keywords for three steps, speak aloud, time yourself, and record it.", "Ba từ khoá cho ba bước, nói to, bấm giờ, và thu âm."),
        L("l3", null, "Key words keep you natural. Timing and recording fix length and fillers.", "Từ khoá giúp nói tự nhiên. Bấm giờ, thu âm giúp sửa độ dài và từ đệm."),
      ] },
    { id: "s33", module: "END-05", data: { text: "Bốn mươi câu để trả lời gọn trong một phút", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
