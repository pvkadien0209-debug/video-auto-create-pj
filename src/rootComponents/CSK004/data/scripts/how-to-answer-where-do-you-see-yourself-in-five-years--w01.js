// Kịch bản video W lần 3 (#110) — "Trả lời câu "Where do you see yourself in five years?"" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-answer-where-do-you-see-yourself-in-five-years--w01",
  hook: "HOOK-03",
  loop: { open: "s01", close: "s22" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "english-interview-candidates", slug: "how-to-answer-where-do-you-see-yourself-in-five-years", door: "ky-nang", level: "B1",
    title: "Trả lời câu \"Where do you see yourself in five years?\"", series: "Trả lời phỏng vấn bằng tiếng Anh" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: ứng viên đùa ở ❓ p5 → Dũng; Trung (📌 p18, cùng vai ứng viên nam) → Dũng; trưởng phòng / người phỏng vấn → Cô Hoa (bài không nói người nước ngoài); Hạnh → Thảo. Vai mới: không dùng. s01 đặt câu hỏi ❓ p5, s09 (DLG-01) diễn lại và đưa lời giải của bài (câu “I'd like to be leading small projects by then”). Câu hỏi “Where do you see yourself in five years?” của Cô Hoa dựng theo đầu bài. s22 dựng 📌 p18 đúng chữ bài. Phủ ý: 24/24.",
  scenes: [
    // ── Mở đầu kể chuyện
    { id: "s01", module: "SCENE-01", ref: "p5",
      data: { set: "meeting", label: "Thử nghĩ xem",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "hoa", "Where do you see yourself in five years?", "Năm năm nữa em thấy mình ở đâu?"),
        L("l2", "dung", "In five years? Maybe I'll have your job!", "Năm năm nữa ạ? Chắc em ngồi ghế của chị!", { face: "happy", pose: "point", to: "hoa" }),
        L("l3", null, "But she is the head of the team he would join.", "Nhưng chị ấy chính là trưởng phòng sẽ quản lý cậu.", { react: { hoa: "stern" } }),
        L("l4", null, "The joke sounds fun. So why might the room go quiet?", "Câu đùa nghe vui. Vậy sao không khí có thể chững lại?"),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Không cần đoán tương lai", pose: "point", items: ["Một hướng đi trong cùng lĩnh vực", "Kỹ năng và trách nhiệm muốn có", "Vì sao công ty này giúp bạn"] },
      lines: [
        L("l1", "det", "Nobody asks you to predict the future. They want three things.", "Không ai bắt bạn đoán tương lai. Họ muốn nghe ba điều."),
        L("l2", "det", "A realistic path in the same field.", "Một hướng đi thực tế, cùng lĩnh vực."),
        L("l3", "det", "The skills and responsibilities you want.", "Kỹ năng và trách nhiệm bạn muốn có."),
        L("l4", "det", "And why this company helps you get there.", "Và vì sao công ty này giúp bạn đi tới đó."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Các chặng của video", chapters: [
        { label: "Họ kiểm tra gì", illus: "detective" },
        { label: "Có chí hướng, không quá đà", illus: "bullseye" },
        { label: "Câu mẫu theo nghề", illus: "briefcase" },
        { label: "Dự định giữ riêng", illus: "locked" },
        { label: "Chưa chắc tương lai", illus: "compass" },
        { label: "Tiếng Anh tự nhiên; mười năm, học thêm", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "Our stops: what they check, a frame with ambition, sample answers…", "Các chặng: họ kiểm tra gì, khung có chí hướng, câu mẫu…"),
        L("l2", null, "…plans to keep private, an unsure future, natural English, and ten years.", "…dự định giữ riêng, khi chưa chắc, tiếng Anh tự nhiên, và câu hỏi mười năm."),
      ] },

    // ── Chương 1: Họ kiểm tra gì (p1–p2)
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Họ kiểm tra điều gì?" },
      lines: [L("l1", "det", "Part one: what are they really checking?", "Phần một: họ hỏi năm năm tới để kiểm tra điều gì?")] },
    { id: "s05", module: "LIST-07", ref: "p1,p2",
      data: { title: "Ba điều họ đánh giá", items: [
        { text: "Bạn có định hướng không", illus: "compass" },
        { text: "Định hướng có khớp công ty không", illus: "puzzle-piece" },
        { text: "Bạn có định ở lại lâu không", illus: "house" } ] },
      lines: [
        L("l1", null, "Do you have a direction?", "Bạn có định hướng không?"),
        L("l2", null, "Does it match the company?", "Định hướng đó có khớp với công ty không?"),
        L("l3", null, "Will you stay? They invest in people who stay, not people who leave in months.", "Bạn có ở lại lâu không? Công ty đầu tư vào người gắn bó."),
        L("l4", null, "So talk about growing in the same field, ideally right there. A sensible direction, not an exact plan.", "Nên hãy nói về phát triển trong cùng lĩnh vực, tốt nhất ngay tại đó. Chỉ cần hướng đi hợp lý."),
      ] },

    // ── Chương 2: Có chí hướng, không quá đà (p3–p6)
    { id: "s06", module: "HOST-03", data: { n: 2, of: 7, title: "Có chí hướng, không quá đà" },
      lines: [L("l1", "det", "Part two: ambitious, but not too much.", "Phần hai: vừa có chí hướng, vừa không quá đà.")] },
    { id: "s07", module: "LIST-08", ref: "p3",
      data: { title: "Kỹ năng → trách nhiệm → lý do", items: [
        { title: "Kỹ năng muốn thành thạo", detail: "I'd like to become really strong in digital advertising.", illus: "bullseye" },
        { title: "Trách nhiệm muốn nhận thêm", detail: "I hope to be managing bigger campaigns.", illus: "busts-in-silhouette" },
        { title: "Vì sao chọn nơi này", detail: "You invest a lot in training.", illus: "office-building" } ] },
      lines: [
        L("l1", null, "A three-part frame. Skill: I'd like to become really strong in digital advertising.", "Khung ba phần. Kỹ năng: “Tôi muốn thật giỏi quảng cáo trực tuyến.”"),
        L("l2", null, "Responsibility: I hope to be managing bigger campaigns and helping new team members.", "Trách nhiệm: “Tôi mong quản lý chiến dịch lớn hơn và giúp người mới.”"),
        L("l3", null, "Reason: I know you invest a lot in training, so this feels like the right place to grow.", "Lý do: “Công ty đầu tư nhiều vào đào tạo, nên đây là nơi hợp để phát triển.”"),
      ] },
    { id: "s08", module: "CMP-07", ref: "p4",
      data: { wrong: "I want to be the marketing manager", right: "I'd like to take on a leadership role", diff: ["want to be", "the marketing manager"], note: "Nói về vai trò thay vì chức danh: vẫn có chí hướng, người hỏi không thấy bị đe doạ" },
      lines: [
        L("l1", null, "Talk about the role, not the job title.", "Nói về vai trò thay vì chức danh."),
        L("l2", null, "Not I want to be the marketing manager, but I'd like to take on a leadership role.", "Không nói “Tôi muốn làm trưởng phòng marketing”, mà “Tôi muốn nhận vai trò dẫn dắt”."),
        L("l3", null, "The person asking may be your future manager. They won't feel threatened.", "Người hỏi rất có thể là quản lý tương lai của bạn, họ không thấy bị đe doạ."),
      ] },
    { id: "s09", module: "DLG-01", ref: "p5,p6",
      data: { set: "meeting", label: "Diễn lại",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "dung", side: "right" }],
        verdict: { ok: false, label: "Đùa nhắm vào ghế người hỏi",
          why: "Câu đùa vô tình biến người sẽ quản lý mình thành đối thủ, thay vì người dẫn dắt." } },
      lines: [
        L("l1", "hoa", "Where do you see yourself in five years?", "Năm năm nữa em thấy mình ở đâu?"),
        L("l2", "dung", "Maybe I'll have your job!", "Chắc em ngồi ghế của chị!", { face: "happy", pose: "point", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "The joke aims at her chair. She becomes a rival, not a guide.", "Câu đùa nhắm vào ghế của chị ấy, biến người dẫn dắt thành đối thủ."),
        L("l5", "det", "Let's rewind. Talk about the path, not her chair.", "Tua lại nhé. Nói về con đường, đừng nhắm vào ghế.", { phase: "redo" }),
        L("l6", "dung", "I'd like to be leading small projects by then.", "Đến lúc đó, em muốn được dẫn dắt vài dự án nhỏ.", { phase: "redo", face: "happy", pose: "explain", react: { hoa: "happy" } }),
      ] },
    { id: "s10", module: "TEXT-01", ref: "p6",
      data: { text: "Nói về con đường, đừng nhắm vào ghế của người hỏi.", illus: "motorway" },
      lines: [L("l1", "det", "Talk about the path. Don't aim at the chair of the person asking.", "Nói về con đường, đừng nhắm vào ghế của người hỏi.")] },

    // ── Chương 3: Câu mẫu theo hoàn cảnh (p7–p9)
    { id: "s11", module: "HOST-03", data: { n: 3, of: 7, title: "Câu mẫu theo hoàn cảnh" },
      lines: [L("l1", "det", "Part three: sample answers for your situation.", "Phần ba: câu mẫu cho hoàn cảnh của mình.")] },
    { id: "s12", module: "LIST-13", ref: "p7,p8",
      data: { title: "Hai nghề, hai câu", items: [
        { title: "Nhân viên kinh doanh", detail: "Được giao khách lớn nhất, giúp đào tạo người mới; công ty đề bạt từ bên trong.", illus: "handshake" },
        { title: "Lập trình viên", detail: "Thành lập trình viên cấp cao, giỏi thiết kế hệ thống.", illus: "laptop" } ] },
      lines: [
        L("l1", null, "Sales: In five years, I'd like to be trusted with our biggest accounts, and I'd love to help train new salespeople.", "Kinh doanh: “Năm năm nữa, tôi muốn được giao khách lớn nhất và giúp đào tạo người mới.”"),
        L("l2", null, "I know you promote from within, so I see a clear path here.", "“Công ty đề bạt từ bên trong, nên tôi thấy con đường rõ ở đây.”"),
      ] },
    { id: "s12b", module: "TEXT-07", ref: "p8",
      data: { en: "My goal is to become a senior developer with strong system design skills.", vi: "Mục tiêu của tôi là thành lập trình viên cấp cao, giỏi thiết kế hệ thống.", chunks: [{ en: "My goal is", vi: "mục tiêu của tôi là" }, { en: "to become a senior developer", vi: "thành lập trình viên cấp cao" }, { en: "with strong system design skills.", vi: "giỏi thiết kế hệ thống" }], illus: "laptop" },
      lines: [
        L("l1", null, "Developer: My goal is to become a senior developer with strong system design skills.", "Lập trình: “Mục tiêu của tôi là thành lập trình viên cấp cao, giỏi thiết kế hệ thống.”"),
        L("l2", null, "Right now I'm comfortable building features, but I want to understand how to design systems that grow.", "“Giờ tôi làm tính năng tốt, nhưng muốn hiểu cách thiết kế hệ thống lớn dần.”"),
      ] },
    { id: "s13", module: "TEXT-07", ref: "p9",
      data: { en: "I want to build a solid foundation in supply chain work.",
        vi: "Tôi muốn xây nền tảng vững trong công việc chuỗi cung ứng.",
        chunks: [{ en: "I want to build", vi: "tôi muốn xây" }, { en: "a solid foundation", vi: "một nền tảng vững" }, { en: "in supply chain work.", vi: "trong việc chuỗi cung ứng" }],
        illus: "graduation-cap" },
      lines: [
        L("l1", null, "Just graduated: Over the next few years, I want to build a solid foundation in supply chain work…", "Mới ra trường: “Vài năm tới, tôi muốn xây nền tảng vững về chuỗi cung ứng…”"),
        L("l2", null, "…from purchasing to delivery, and eventually coordinate with suppliers on my own.", "“…từ mua hàng đến giao hàng, và dần tự làm việc với nhà cung cấp.”"),
      ] },

    // ── Chương 4: Dự định giữ riêng (p10–p13)
    { id: "s14", module: "HOST-03", data: { n: 4, of: 7, title: "Dự định nên giữ riêng" },
      lines: [L("l1", "det", "Part four: plans to keep to yourself.", "Phần bốn: những dự định nên giữ cho riêng mình.")] },
    { id: "s15", module: "LIST-04", ref: "p10,p11",
      data: { title: "Bốn câu nên tránh", items: [
        { text: "“I plan to study abroad next year”", illus: "airplane" },
        { text: "“I want to start my own business soon”", illus: "shopping-bags" },
        { text: "“I will be a manager in exactly two years”", illus: "alarm-clock" },
        { text: "“I don't know” rồi dừng hẳn", illus: "zipper-mouth-face" } ] },
      lines: [
        L("l1", null, "Honest doesn't mean telling every private plan. Share the work goals.", "Trung thực không có nghĩa kể hết dự định riêng. Hãy chia sẻ mục tiêu công việc."),
        L("l2", null, "Avoid: I plan to study abroad next year. I want to start my own business soon.", "Tránh: “Sang năm tôi định đi du học”, “Tôi muốn sớm mở kinh doanh riêng”."),
        L("l3", null, "I will be a manager in exactly two years sounds rigid and unrealistic.", "“Đúng hai năm nữa tôi sẽ làm quản lý” nghe cứng nhắc, thiếu thực tế."),
        L("l4", null, "And never I don't know, then silence.", "Và đừng nói “I don't know” rồi im luôn."),
      ] },
    { id: "s16", module: "SCENE-01", ref: "p12,p13",
      data: { set: "office", label: "Chuyện của Thảo",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "thao", "In two years I plan to study for a master's abroad, so I want some experience first.", "Hai năm nữa em định đi du học thạc sĩ, nên muốn có chút kinh nghiệm trước.", { face: "happy", pose: "explain" }),
        L("l2", null, "The interviewer nods, takes notes, and asks a few polite questions.", "Người phỏng vấn gật đầu, ghi chú, hỏi thêm vài câu xã giao.", { react: { hoa: "neutral" } }),
        L("l3", null, "A week later, Thảo gets a rejection email, even with good skills.", "Một tuần sau, Thảo nhận thư từ chối, dù chuyên môn khá tốt.", { react: { thao: "sad" } }),
        L("l4", null, "Keep plans to leave in your pocket, not on the table.", "Kế hoạch rời đi thì cất trong túi, đừng đặt lên bàn."),
      ] },

    // ── Chương 5: Chưa chắc tương lai (p14–p19)
    { id: "s17", module: "HOST-03", data: { n: 5, of: 7, title: "Chưa chắc thì kể hướng đi" },
      lines: [L("l1", "det", "Part five: not sure about the future? That's normal.", "Phần năm: chưa chắc tương lai? Điều đó bình thường.")] },
    { id: "s18", module: "CMP-01", ref: "p14",
      data: { labels: ["Đích đến", "Hướng đi"], left: "Năm năm nữa ở đâu: nhiều người trẻ chưa biết", right: "Lĩnh vực muốn ở lại, kiểu người muốn trở thành trong đội",
        illus: ["chequered-flag", "compass"] },
      lines: [
        L("l1", null, "Many people, especially young people, don't know where they'll be in five years.", "Rất nhiều người, nhất là người trẻ, chưa biết năm năm nữa mình ở đâu."),
        L("l2", null, "Talk about direction instead: the field you want to stay in, and the kind of teammate you want to be.", "Hãy nói về hướng đi: lĩnh vực muốn ở lại, và kiểu người bạn muốn là trong đội."),
      ] },
    { id: "s19", module: "TEXT-07", ref: "p15",
      data: { en: "What I do know is that I want to stay in finance.",
        vi: "Điều tôi biết chắc là tôi muốn ở lại ngành tài chính.",
        chunks: [{ en: "What I do know", vi: "điều tôi biết chắc" }, { en: "is that I want", vi: "là tôi muốn" }, { en: "to stay in finance.", vi: "ở lại ngành tài chính" }],
        illus: "chart-increasing" },
      lines: [
        L("l1", null, "To be honest, I'm still exploring which area I want to specialise in.", "“Thật lòng, tôi vẫn đang tìm hiểu mình muốn chuyên sâu mảng nào.”"),
        L("l2", null, "What I do know is that I want to stay in finance…", "“Điều tôi biết chắc là tôi muốn ở lại ngành tài chính…”"),
        L("l3", null, "…and become someone the team can rely on for accurate analysis.", "“…và thành người cả đội tin cậy về phân tích chính xác.”"),
      ] },
    { id: "s20", module: "CMP-02", ref: "p16",
      data: { title: "Thật, mà vẫn có hướng",
        before: "“Honestly, I don't know. Five years is a long time.” rồi im lặng",
        after: "“I'm not sure about the exact role yet, but I want to stay in customer service.”",
        illusBefore: "zipper-mouth-face", illusAfter: "compass" },
      lines: [
        L("l1", null, "Before: Honestly, I don't know. Five years is a long time. Then silence.", "Trước: “Thật lòng em không biết. Năm năm lâu lắm.” Rồi im lặng."),
        L("l2", null, "They may write: no direction.", "Người phỏng vấn dễ ghi: “chưa có định hướng”."),
      ] },
    { id: "s20b", module: "TEXT-04", ref: "p16",
      data: { text: "Bản sau vẫn thật y như vậy, chỉ thêm lĩnh vực muốn theo và kỹ năng muốn giỏi.", marks: ["lĩnh vực muốn theo", "kỹ năng muốn giỏi"], illus: "compass" },
      lines: [
        L("l1", null, "After: I'm not sure about the exact role yet, but I want to stay in customer service and get really good at difficult cases.", "Sau: chưa chắc vị trí, nhưng muốn ở lại chăm sóc khách hàng, giỏi xử lý ca khó."),
        L("l2", null, "Just as honest. It only adds a field and a skill.", "Vẫn thật y như vậy, chỉ thêm lĩnh vực và kỹ năng muốn giỏi."),
      ] },
    { id: "s21", module: "TEXT-01", ref: "p17",
      data: { text: "Chưa biết đích đến thì kể hướng đi.", illus: "compass" },
      lines: [L("l1", "det", "Don't know the destination? Describe the direction.", "Chưa biết đích đến thì kể hướng đi.")] },
    { id: "s22", module: "SCENE-01", ref: "p18,p19",
      data: { set: "meeting", label: "Đã chuẩn bị",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "dung", "I'm not sure about a title yet, but I want to stay in logistics…", "Em chưa chắc chức danh, nhưng em muốn ở lại ngành logistics…", { pose: "explain" }),
        L("l2", "dung", "…and become the person others ask when a shipment goes wrong.", "…và thành người mọi người tìm khi lô hàng gặp sự cố.", { face: "happy" }),
        L("l3", "hoa", "Ha! Tell me about a time a shipment was late.", "Hay đấy! Kể chị nghe một lần lô hàng bị trễ đi.", { face: "happy", react: { dung: "happy" } }),
        L("l4", null, "Honesty plus a direction is never a weak answer.", "Thật thà cộng hướng đi thì không bao giờ là câu trả lời yếu."),
      ] },

    // ── Chương 6: Tiếng Anh tự nhiên (p20–p21)
    { id: "s23", module: "HOST-03", data: { n: 6, of: 7, title: "Nói tương lai cho tự nhiên" },
      lines: [L("l1", "det", "Part six: talking about the future, naturally.", "Phần sáu: nói về tương lai bằng tiếng Anh cho tự nhiên.")] },
    { id: "s24", module: "LIST-03", ref: "p20",
      data: { title: "Đổi luân phiên, đừng chỉ dùng “will”", items: [
        { front: "I'd like to… / I hope to…", back: "Mong muốn, nhẹ nhàng", illus: "seedling", backIllus: "smiling-face" },
        { front: "My goal is to…", back: "Rõ ràng, chuyên nghiệp", illus: "bullseye", backIllus: "briefcase" },
        { front: "I see myself…", back: "Khớp đúng với câu hỏi", illus: "eyes", backIllus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Many Vietnamese speakers use will for every future sentence. It sounds like a promise.", "Người Việt hay dùng “will” cho mọi câu tương lai, nghe như đang hứa."),
        L("l2", null, "I'd like to, and I hope to, sound gentle.", "“I'd like to…”, “I hope to…” nói mong muốn nhẹ nhàng."),
        L("l3", null, "My goal is to sounds clear and professional. I see myself matches the question.", "“My goal is to…” rõ ràng, chuyên nghiệp; “I see myself…” khớp câu hỏi."),
      ] },
    { id: "s25", module: "CMP-01", ref: "p21",
      data: { labels: ["Xong trước một mốc", "Đang diễn ra lúc đó"], left: "By then, I'll have gained solid experience in project work", right: "I hope I'll be working on bigger projects",
        illus: ["check-mark-button", "hourglass-not-done"] },
      lines: [
        L("l1", null, "Two advanced forms, once you're comfortable.", "Hai cấu trúc nâng cao, dùng khi đã quen."),
        L("l2", null, "Done before a point: By then, I'll have gained solid experience in project work.", "Xong trước một mốc: “By then, I'll have gained solid experience in project work.”"),
        L("l3", null, "In progress at that time: I hope I'll be working on bigger projects.", "Đang diễn ra lúc đó: “I hope I'll be working on bigger projects.”"),
      ] },

    // ── Chương 7: Mười năm, học thêm (p22–p24)
    { id: "s26", module: "HOST-03", data: { n: 7, of: 7, title: "Mười năm, hay chuyện học thêm" },
      lines: [L("l1", "det", "Part seven: ten years, or more study?", "Phần bảy: họ hỏi mười năm, hay chuyện học thêm thì sao?")] },
    { id: "s27", module: "LIST-13", ref: "p22,p23",
      data: { title: "Hai biến thể", items: [
        { title: "“In ten years?”", detail: "Cùng khung, mục tiêu rộng hơn, vẫn cùng lĩnh vực.", illus: "mountain" },
        { title: "Học thêm buổi tối", detail: "Hỗ trợ công việc thì là điểm cộng; nghỉ việc đi học thì không nhắc.", illus: "books" } ] },
      lines: [
        L("l1", null, "In ten years? Same frame, bigger goal, like becoming an expert or leading an area. Still in the same field.", "Mười năm? Cùng khung, mục tiêu rộng hơn, như thành chuyên gia, phụ trách một mảng, vẫn cùng lĩnh vực."),
        L("l2", null, "Evening study that supports the job is a plus: I'm planning a part time course in data analysis to support this role.", "Học thêm buổi tối hỗ trợ công việc là điểm cộng: “Tôi định học khoá phân tích dữ liệu bán thời gian.”"),
        L("l3", null, "Planning to quit for school? Better not to mention it.", "Định nghỉ việc để đi học? Tốt nhất không nhắc."),
      ] },
    { id: "s28", module: "END-03", ref: "p24",
      data: { title: "Danh sách mang theo", illus: "clipboard",
        items: ["Một kỹ năng muốn thành thạo", "Một trách nhiệm muốn nhận", "Một lý do công ty này giúp bạn", "Một câu dự phòng khi chưa chắc", "Hai ba cấu trúc ngoài “will”"] },
      lines: [
        L("l1", null, "Take with you: one skill to master, one responsibility to take on.", "Mang theo: một kỹ năng muốn thành thạo, một trách nhiệm muốn nhận."),
        L("l2", null, "One reason this company helps you, and a backup line for when you're unsure.", "Một lý do công ty này giúp bạn, một câu dự phòng khi chưa chắc."),
        L("l3", null, "And two or three future forms besides will.", "Và hai ba cấu trúc tương lai ngoài “will”."),
      ] },

    // ── Câu đố và kết
    { id: "s29", module: "QUIZ-01", ref: "questions[15]",
      data: {
        q: "In the before and after example, what is the problem with the before answer?",
        options: [
          "Nothing is wrong, because this question is never important in real interviews",
          "It is too long, and the interviewer wants a one word answer instead",
          "It stops at I do not know, so the interviewer hears no direction",
        ],
        correct: 2, countdown: 5, illus: "compass",
        why: "Dừng ở “I don't know”, họ dễ ghi là chưa có định hướng.",
      },
      lines: [
        L("l1", null, "In the before and after example, what is the problem with the before answer?", "Trong ví dụ trước – sau, bản trước có vấn đề gì?"),
        L("l2", null, "It stops at I do not know, so the interviewer hears no direction.", "Nó dừng ở “I don't know”, nên người phỏng vấn không nghe thấy hướng đi."),
        L("l3", null, "One more line about your field makes all the difference.", "Thêm một câu về lĩnh vực muốn theo là đủ khác."),
      ] },
    { id: "s30", module: "END-02", ref: "p6,p13,p17",
      data: { kicker: "Rút ra", illus: "compass",
        points: ["Nói về con đường, đừng nhắm vào ghế", "Kế hoạch rời đi thì cất trong túi", "Chưa biết đích đến thì kể hướng đi"],
        icons: ["motorway", "briefcase", "compass"] },
      lines: [
        L("l1", null, "Talk about the path, not the chair.", "Nói về con đường, đừng nhắm vào ghế."),
        L("l2", null, "Keep plans to leave to yourself.", "Kế hoạch rời đi thì cất trong túi."),
        L("l3", null, "Unsure? Describe the direction. Today, write your three lines with I'd like to and My goal is to.", "Chưa chắc thì kể hướng đi. Hôm nay, viết ba câu với “I'd like to”, “My goal is to”."),
      ] },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Luyện ngay bằng tiếng Anh" },
      lines: [L("l1", "det", "Ready? Forty questions are waiting for you.", "Sẵn sàng chưa? Bốn mươi câu hỏi đang chờ bạn.")] },
  ],
};
