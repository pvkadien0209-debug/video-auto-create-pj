// Kịch bản video W lần 3 (#110) — "Trả lời câu "Why should we hire you?"" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-answer-why-should-we-hire-you--w01",
  hook: "HOOK-13",
  loop: { open: "s01", close: "s22" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "english-interview-candidates", slug: "how-to-answer-why-should-we-hire-you", door: "ky-nang", level: "B1",
    title: "Trả lời câu \"Why should we hire you?\"", series: "Trả lời phỏng vấn bằng tiếng Anh" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Tín → Dũng; Trinh (vừa tốt nghiệp) → Lan; ứng viên hai năm kinh nghiệm ở ✍️ p3 → Thảo; người phỏng vấn → Cô Hoa (bài chỉ nói chung “công ty nước ngoài”, không có người phỏng vấn nước ngoài cụ thể, nên không dùng Sam). Vai mới: không dùng. HOOK-13: s01 phóng to chi tiết “fifteen” nghe thành “fifty” (p9); s14 đóng vòng bằng p10. Câu khen của Cô Hoa ở s01 rút từ p9 (“khen rất ấn tượng”). s22 dựng ⚖️ p18 (câu hỏi lại đúng chữ bài). s14 thêm một câu chỉ cách nhấn fif-TEEN / FIF-ty để giải thích ý “nhấn sai trọng âm” của p9 (kiến thức phát âm chuẩn, bài không ghi). Phủ ý: 22/22.",
  scenes: [
    // ── Mở đầu kể chuyện
    { id: "s01", module: "SCENE-01", ref: "p9",
      data: { set: "meeting", label: "Một con số",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "dung", side: "right" }], props: ["package"] },
      lines: [
        L("l1", "dung", "I handle about fifteen shipments a week.", "Em xử lý khoảng mười lăm lô hàng mỗi tuần.", { pose: "explain" }),
        L("l2", null, "But he says fifteen too fast, with the wrong stress. It sounds like fifty.", "Nhưng Dũng nói “fifteen” nhanh, nhấn sai, nghe thành “fifty”."),
        L("l3", "hoa", "That's very impressive!", "Rất ấn tượng đấy!", { face: "surprised", react: { dung: "happy" } }),
        L("l4", null, "Next round, someone checks his CV: fifteen. Now he looks like he exaggerated.", "Vòng sau, người khác đối chiếu CV: mười lăm. Dũng trông như đã phóng đại."),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Đặt bằng chứng cạnh nhu cầu", pose: "present", items: ["Hai ba điểm mạnh khớp nhu cầu", "Mỗi điểm một bằng chứng", "Kết bằng việc bạn giúp được gì"] },
      lines: [
        L("l1", "det", "So why should we hire you? How do you show strengths without boasting?", "Vậy “Why should we hire you?”: nói điểm mạnh sao cho không khoe?"),
        L("l2", "det", "Pick two or three strengths that match what they need.", "Chọn hai ba điểm mạnh khớp điều họ cần."),
        L("l3", "det", "Prove each one with real evidence.", "Mỗi điểm một bằng chứng cụ thể."),
        L("l4", "det", "Then end with how you can help the team.", "Rồi kết bằng việc bạn giúp được gì cho đội."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Các chặng của video", chapters: [
        { label: "Câu này là lời mời gì", illus: "envelope" },
        { label: "Họ cần gì nhất", illus: "bullseye" },
        { label: "Chứng minh điểm mạnh", illus: "bar-chart" },
        { label: "Kết cho có sức nặng", illus: "flexed-biceps" },
        { label: "Khi thiếu kinh nghiệm", illus: "seedling" },
        { label: "Tự tin mà không kiêu", illus: "smiling-face" } ] },
      lines: [
        L("l1", null, "Our stops: the invitation, their needs, your proof, a strong ending…", "Các chặng: lời mời, nhu cầu của họ, bằng chứng, câu kết…"),
        L("l2", null, "…when experience is short, and confidence without arrogance.", "…khi thiếu kinh nghiệm, và tự tin mà không kiêu."),
      ] },

    // ── Chương 1: Câu này là lời mời gì (p1–p4)
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Câu này là lời mời gì?" },
      lines: [L("l1", "det", "Part one: what is this question really inviting?", "Phần một: câu này thật ra là lời mời gì?")] },
    { id: "s05", module: "LIST-13", ref: "p1,p2",
      data: { title: "Một lời mời tóm tắt", items: [
        { title: "Thường đến cuối buổi", detail: "Họ muốn bạn tự nối các mảnh ghép, như người bán hàng tóm tắt sản phẩm trong một phút.", illus: "puzzle-piece" },
        { title: "Nói rõ giá trị là điều được mong đợi", detail: "Bằng sự thật và bằng chứng, không bằng tính từ khen mình.", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "It usually comes near the end, when they already know a lot about you.", "Câu này thường đến cuối buổi, khi họ đã nghe nhiều về bạn."),
        L("l2", null, "They want you to put the pieces together, like a good seller summing up a product in one minute.", "Họ muốn bạn tự nối các mảnh ghép, như người bán hàng giỏi tóm tắt sản phẩm trong một phút."),
      ] },
    { id: "s05b", module: "TEXT-04", ref: "p2",
      data: { text: "Nói rõ giá trị là điều được mong đợi: bằng sự thật và bằng chứng, không bằng tính từ.", marks: ["sự thật và bằng chứng", "không bằng tính từ"], illus: "check-mark-button" },
      lines: [
        L("l1", null, "Especially at foreign companies, stating your value is expected. It's not a lack of modesty.", "Nhất là với công ty nước ngoài, nói rõ giá trị là điều được mong đợi, không phải thiếu khiêm tốn."),
        L("l2", null, "The secret: use facts and evidence, not adjectives.", "Bí quyết: nói bằng sự thật và bằng chứng, không bằng tính từ khen mình."),
      ] },
    { id: "s06", module: "DLG-01", ref: "p3,p4",
      data: { set: "office", label: "Trước – sau",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Chỉ hứa “cố gắng hết sức”",
          why: "Ai cũng nói được, người phỏng vấn dễ đáp “Everyone tells us that.”" } },
      lines: [
        L("l1", "hoa", "So, why should we hire you?", "Vậy, vì sao chúng tôi nên tuyển em?"),
        L("l2", "thao", "I don't have much to say, but I promise I will try my best.", "Em không có gì nhiều để nói, nhưng em hứa sẽ cố gắng hết sức.", { face: "worried", pose: "hold", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Everyone says that. She has two years of real experience. Use it as proof.", "Ai cũng nói vậy. Thảo có hai năm kinh nghiệm thật, hãy dùng làm bằng chứng."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "I've spent two years handling customer orders in this industry.", "Em đã xử lý đơn hàng trong ngành này hai năm.", { phase: "redo", pose: "explain" }),
        L("l7", "thao", "I cut our order errors by checking every invoice twice, and trained two new colleagues.", "Em giảm lỗi đơn bằng cách kiểm hoá đơn hai lần, và kèm hai đồng nghiệp mới.", { phase: "redo", face: "happy", react: { hoa: "happy" } }),
      ] },
    { id: "s07", module: "TEXT-04", ref: "p4",
      data: { text: "Khiêm tốn ở thái độ, rõ ràng ở bằng chứng.", marks: ["rõ ràng ở bằng chứng"], illus: "balance-scale" },
      lines: [L("l1", "det", "Still polite, but the promise became two strengths with examples. Modest in attitude, clear in evidence.", "Vẫn nhã nhặn, nhưng lời hứa thành hai điểm mạnh có ví dụ. Khiêm tốn ở thái độ, rõ ở bằng chứng.")] },

    // ── Chương 2: Họ cần gì nhất (p5–p6)
    { id: "s08", module: "HOST-03", data: { n: 2, of: 7, title: "Họ cần gì nhất?" },
      lines: [L("l1", "det", "Part two: what do they need most? How do you know?", "Phần hai: họ cần gì nhất, làm sao biết?")] },
    { id: "s09", module: "LIST-05", ref: "p5",
      data: { title: "Điều phối xuất nhập khẩu có thể cần", illus: "page-facing-up",
        items: ["Kinh nghiệm chứng từ hải quan", "Tiếng Anh làm việc với đối tác", "Xử lý nhiều lô hàng cùng lúc"] },
      lines: [
        L("l1", null, "Re-read the job description. Underline what is repeated, or at the top of the list.", "Đọc lại mô tả công việc, gạch chân yêu cầu nhắc nhiều lần hoặc đứng đầu."),
        L("l2", null, "An import export coordinator may need customs documents experience…", "Vị trí điều phối xuất nhập khẩu có thể cần kinh nghiệm chứng từ hải quan…"),
        L("l3", null, "…English with partners, and many shipments at the same time.", "…tiếng Anh với đối tác, và xử lý nhiều lô hàng cùng lúc."),
      ] },
    { id: "s10", module: "CMP-01", ref: "p6",
      data: { labels: ["Liệt kê mọi kỹ năng", "Chỉ một điểm"], left: "Nhiều quá, người nghe không nhớ", right: "Chưa đủ sức thuyết phục",
        illus: ["books", "pushpin"] },
      lines: [
        L("l1", null, "Choose two or three points you really have.", "Chọn hai ba điểm bạn thật sự có trong số đó."),
        L("l2", null, "List every skill, and nobody remembers. Just one isn't convincing enough.", "Liệt kê mọi kỹ năng thì không ai nhớ; một điểm thì chưa đủ thuyết phục."),
      ] },

    // ── Chương 3: Chứng minh điểm mạnh (p7–p10)
    { id: "s11", module: "HOST-03", data: { n: 3, of: 7, title: "Chứng minh mỗi điểm mạnh" },
      lines: [L("l1", "det", "Part three: prove each strength.", "Phần ba: chứng minh mỗi điểm mạnh thế nào.")] },
    { id: "s12", module: "CMP-01", ref: "p7",
      data: { labels: ["Tính từ khen mình", "Bằng chứng"],
        left: "“I'm very organised and hardworking.”",
        right: "“Last quarter, I handled about forty shipments a month without missing a deadline.”",
        illus: ["speech-balloon", "bar-chart"] },
      lines: [
        L("l1", null, "Compare: I'm very organised and hardworking.", "So sánh: “Tôi rất ngăn nắp và chăm chỉ.”"),
        L("l2", null, "And: Last quarter, I handled about forty shipments a month without missing a deadline.", "Với: “Quý trước, tôi xử lý khoảng bốn mươi lô mỗi tháng, không trễ hạn.”"),
        L("l3", null, "The second has no praise words, but it is far more convincing.", "Câu thứ hai không có tính từ khen nào, nhưng thuyết phục hơn nhiều."),
      ] },
    { id: "s13", module: "LIST-02", ref: "p8",
      data: { title: "Bằng chứng có thể là", illus: "trophy", items: [
        { icon: "hash", illus: "bar-chart", text: "Một con số, một kết quả" },
        { icon: "message-circle", illus: "speech-balloon", text: "Lời khen của quản lý, khách hàng" },
        { icon: "folder", illus: "card-index-dividers", text: "Một dự án cụ thể" },
        { icon: "award", illus: "scroll", text: "Một chứng chỉ liên quan" } ] },
      lines: [
        L("l1", null, "A number or a result.", "Một con số hay kết quả."),
        L("l2", null, "Praise from a manager or a customer.", "Lời khen của quản lý hoặc khách hàng."),
        L("l3", null, "A specific project.", "Một dự án cụ thể."),
        L("l4", null, "A relevant certificate. One piece of evidence per strength is enough.", "Một chứng chỉ liên quan. Mỗi điểm mạnh một bằng chứng là đủ."),
      ] },
    { id: "s14", module: "REL-02", ref: "p9,p10",
      data: { chain: ["Nói “fifteen” nhanh, nhấn sai: nghe thành “fifty”", "Được khen ấn tượng, ghi lại sai số", "Vòng sau đối chiếu CV, trông như phóng đại"],
        illus: ["speaking-head", "memo", "page-facing-up"] },
      lines: [
        L("l1", null, "Back to Dũng. Fifteen, said fast with the wrong stress, became fifty.", "Quay lại Dũng: “fifteen” nói nhanh, nhấn sai, thành “fifty”."),
        L("l2", null, "Stress the end: fif-TEEN. Fifty has the stress at the start: FIF-ty.", "Nhấn âm cuối: fif-TEEN. Còn “fifty” nhấn âm đầu: FIF-ty."),
        L("l3", null, "Numbers are evidence. Say them unclearly, and you lose the evidence.", "Con số là bằng chứng, nói không rõ là mất bằng chứng."),
      ] },

    // ── Chương 4: Kết cho có sức nặng (p11–p13)
    { id: "s15", module: "HOST-03", data: { n: 4, of: 7, title: "Kết cho có sức nặng" },
      lines: [L("l1", "det", "Part four: an ending with weight.", "Phần bốn: kết câu trả lời cho có sức nặng.")] },
    { id: "s16", module: "TEXT-07", ref: "p11",
      data: { en: "I'm confident I could take over your shipment workload quickly.",
        vi: "Tôi tin mình có thể nhanh chóng đảm nhận khối lượng lô hàng của đội.",
        chunks: [{ en: "I'm confident", vi: "tôi tin chắc" }, { en: "I could take over", vi: "tôi có thể đảm nhận" }, { en: "your shipment workload", vi: "khối lượng lô hàng của đội" }, { en: "quickly.", vi: "nhanh chóng" }],
        illus: "delivery-truck" },
      lines: [
        L("l1", null, "The last line points to the company and the future, not to you.", "Câu cuối hướng về công ty và tương lai, không về bạn."),
        L("l2", null, "So I'm confident I could take over your shipment workload quickly…", "“Nên tôi tin mình có thể nhanh chóng đảm nhận khối lượng lô hàng…”"),
        L("l3", null, "…and help the team reduce delays. Now they picture you working there.", "“…và giúp đội giảm chậm trễ.” Người nghe hình dung bạn đang làm ở đó."),
      ] },
    { id: "s17", module: "LIST-10", ref: "p12,p13",
      data: { title: "Ghép lại: ba lý do trong một phút", stops: [
        { label: "Mở: a strong fit for three reasons", illus: "speech-balloon" },
        { label: "Ba năm chứng từ hải quan", illus: "page-facing-up" },
        { label: "Tiếng Anh với đối tác Hàn, Nhật", illus: "globe-showing-asia-australia" },
        { label: "Nhiều lô hàng, không trễ hạn", illus: "package" },
        { label: "Kết: hỗ trợ đội từ tuần đầu", illus: "flexed-biceps" } ] },
      lines: [
        L("l1", null, "I think I'd be a strong fit for three reasons.", "“Tôi nghĩ mình rất phù hợp, vì ba lý do.”"),
        L("l2", null, "First, I have three years of hands on experience with customs documents, so I wouldn't need much training.", "“Thứ nhất, tôi có ba năm làm chứng từ hải quan, nên không cần đào tạo nhiều.”"),
        L("l3", null, "Second, I use English every day with suppliers in Korea and Japan.", "“Thứ hai, ngày nào tôi cũng dùng tiếng Anh với nhà cung cấp Hàn Quốc, Nhật Bản.”"),
        L("l4", null, "And third, I'm used to handling many shipments a month without missing deadlines.", "“Thứ ba, tôi quen xử lý nhiều lô mỗi tháng mà không trễ hạn.”"),
        L("l5", null, "So I could support the team from the first week. About one minute. The opener keeps you on track.", "“Nên tôi hỗ trợ được đội từ tuần đầu.” Khoảng một phút; câu mở giữ bạn không lạc ý."),
      ] },

    // ── Chương 5: Thiếu kinh nghiệm (p14–p16)
    { id: "s18", module: "HOST-03", data: { n: 5, of: 7, title: "Kinh nghiệm chưa đủ" },
      lines: [L("l1", "det", "Part five: what if your experience is not enough?", "Phần năm: kinh nghiệm chưa đủ so với yêu cầu thì nói sao?")] },
    { id: "s19", module: "TEXT-04", ref: "p14",
      data: { text: "Thành thật về điểm còn thiếu, nhấn vào kỹ năng chuyển đổi được và tốc độ học.", marks: ["tốc độ học"], illus: "rocket" },
      lines: [
        L("l1", null, "Honesty about a gap beats exaggeration.", "Thành thật về điểm còn thiếu tốt hơn phóng đại."),
        L("l2", null, "Stress transferable skills and how fast you learn, with an example of learning something quickly.", "Nhấn vào kỹ năng chuyển đổi được và tốc độ học, kèm ví dụ bạn từng học nhanh."),
      ] },
    { id: "s20", module: "SCENE-01", ref: "p15,p16",
      data: { set: "office", label: "Chuyện của Lan",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "lan", side: "right" }] },
      lines: [
        L("l0", null, "Lan just graduated. The accounting job asks for software experience.", "Lan vừa tốt nghiệp, ứng tuyển kế toán yêu cầu có kinh nghiệm phần mềm."),
        L("l1", "lan", "I don't have years of experience, but during my internship…", "Em chưa có nhiều năm kinh nghiệm, nhưng trong kỳ thực tập…", { face: "thinking" }),
        L("l2", "lan", "I learned the same accounting software your team uses in just two weeks.", "Em học xong đúng phần mềm kế toán đội mình đang dùng chỉ trong hai tuần.", { pose: "explain", face: "happy" }),
        L("l3", "lan", "And I finished every task ahead of schedule.", "Và em xong mọi việc trước hạn.", { face: "happy" }),
        L("l4", null, "The interviewer asked more about her internship, and Lan went to the next round.", "Người phỏng vấn hỏi thêm về kỳ thực tập, và Lan vào vòng sau.", { react: { hoa: "happy" } }),
        L("l5", null, "Short on years? Make up for it with speed, and proof.", "Thiếu năm kinh nghiệm thì bù bằng tốc độ có bằng chứng."),
      ] },

    // ── Chương 6: Tự tin mà không kiêu (p17–p20)
    { id: "s21", module: "HOST-03", data: { n: 6, of: 7, title: "Tự tin mà không kiêu" },
      lines: [L("l1", "det", "Part six: confident, but not arrogant.", "Phần sáu: tự tin mà không kiêu thì nói thế nào.")] },
    { id: "s22", module: "SCENE-01", ref: "p17,p18",
      data: { set: "meeting", label: "Nói thật mạnh?",
        actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "dung", "I'm the best person for this job. I'm sure the others can't do what I do.", "Em là người hợp nhất. Chắc chắn người khác không làm được như em.", { face: "happy", pose: "thumb" }),
        L("l2", "hoa", "How do you know what the others can do?", "Sao em biết người khác làm được gì?", { face: "stern", react: { dung: "worried" } }),
        L("l3", null, "The room goes quiet. Don't compare yourself with other candidates. You don't know them, and it sounds arrogant.", "Không khí chùng xuống. Đừng so với ứng viên khác: bạn không biết họ, và nghe kiêu ngạo."),
        L("l4", null, "What you do know: the job requirements, and your own evidence.", "Điều bạn biết chắc: yêu cầu công việc và bằng chứng của chính mình."),
      ] },
    { id: "s23", module: "CMP-09", ref: "p18,p19",
      data: { myth: "Phải nói “I'm the best person for this job” mới nổi bật",
        fact: "Nói mình làm được gì, kèm ví dụ, đã đủ mạnh",
        illusMyth: "trophy", illusFact: "clipboard" },
      lines: [
        L("l1", null, "Saying what you can do, with an example, is strong enough.", "Nói mình làm được gì, kèm ví dụ, đã đủ mạnh."),
        L("l2", null, "Compare yourself with the job, not with the people waiting outside.", "So với yêu cầu công việc, đừng so với người ngồi ngoài."),
      ] },
    { id: "s24", module: "LIST-01", ref: "p20",
      data: { title: "Cách nói cân bằng", illus: "balance-scale",
        items: ["“I believe I could…”", "“I'm confident that…”", "“That matches what you're looking for.”", "Nói chậm, rõ, nhìn vào người phỏng vấn"],
        icons: ["seedling", "flexed-biceps", "puzzle-piece", "eyes"] },
      lines: [
        L("l1", null, "Balanced phrases: I believe I could…", "Cách nói cân bằng: “I believe I could…”"),
        L("l2", null, "I'm confident that…, and That matches what you're looking for.", "“I'm confident that…”, “That matches what you're looking for.”"),
        L("l3", null, "Speak slowly and clearly, and look at the interviewer.", "Nói chậm, rõ, nhìn vào người phỏng vấn."),
        L("l4", null, "Don't drop your voice at the end, as if you weren't sure.", "Đừng hạ giọng ở cuối câu như thể chính bạn không chắc."),
      ] },

    // ── Chương 7: Khác “Tell me about yourself” (p21–p22)
    { id: "s25", module: "HOST-03", data: { n: 7, of: 7, title: "Khác “Tell me about yourself”" },
      lines: [L("l1", "det", "Part seven: how is this different from Tell me about yourself?", "Phần bảy: câu này khác gì “Tell me about yourself”?")] },
    { id: "s26", module: "CMP-01", ref: "p21",
      data: { labels: ["Tell me about yourself", "Why should we hire you?"], left: "Lời giới thiệu theo hành trình của bạn", right: "Lập luận thuyết phục: nhu cầu của công ty và cách bạn đáp ứng",
        illus: ["footprints", "balance-scale"] },
      lines: [
        L("l1", null, "Tell me about yourself is an introduction, following your journey.", "“Tell me about yourself” là lời giới thiệu theo hành trình của bạn."),
        L("l2", null, "Why should we hire you is a persuasive argument, about their needs and how you meet them.", "“Why should we hire you?” là lập luận thuyết phục, xoay quanh nhu cầu của công ty."),
      ] },
    { id: "s27", module: "END-03", ref: "p22",
      data: { title: "Danh sách mang theo", illus: "clipboard",
        items: ["Hai ba yêu cầu chính đã gạch chân", "Mỗi yêu cầu một bằng chứng", "Câu mở “a strong fit for three reasons”", "Câu kết về giá trị cho đội", "Thành thật phần còn thiếu, không so với ai"] },
      lines: [
        L("l1", null, "Take with you: two or three underlined needs, each with one piece of evidence.", "Mang theo: hai ba yêu cầu chính đã gạch chân, mỗi yêu cầu một bằng chứng."),
        L("l2", null, "The opener, a strong fit for three reasons, and an ending about value for the team.", "Câu mở “a strong fit for three reasons”, câu kết về giá trị cho đội."),
        L("l3", null, "One honest line for the gap. And no comparing with other candidates.", "Một câu thành thật cho phần còn thiếu. Và không so với ứng viên khác."),
      ] },

    // ── Câu đố và kết
    { id: "s28", module: "QUIZ-01", ref: "questions[2]",
      data: {
        q: "In the before and after example, why is the before answer weak?",
        options: [
          "The promise is too strong, so the interviewer thinks you are arrogant",
          "Everyone promises that, so it gives no reason to choose you over others",
          "It is not weak, because effort is the only thing interviewers want to hear",
        ],
        correct: 1, countdown: 5, illus: "handshake",
        why: "Lời hứa cố gắng ai cũng nói được, nên không tạo khác biệt.",
      },
      lines: [
        L("l1", null, "In the before and after example, why is the before answer weak?", "Trong ví dụ trước – sau, vì sao bản trước yếu?"),
        L("l2", null, "Everyone promises that, so it gives no reason to choose you over others.", "Ai cũng hứa như vậy, nên chẳng có lý do để chọn bạn."),
        L("l3", null, "She had real experience, but did not use it as proof.", "Ứng viên có kinh nghiệm thật mà không dùng làm bằng chứng."),
      ] },
    { id: "s29", module: "END-02", ref: "p4,p10,p16",
      data: { kicker: "Rút ra", illus: "balance-scale",
        points: ["Khiêm tốn ở thái độ, rõ ở bằng chứng", "Nói số cho rõ, kẻo mất bằng chứng", "Thiếu năm kinh nghiệm, bù bằng tốc độ"],
        icons: ["handshake", "bar-chart", "rocket"] },
      lines: [
        L("l1", null, "Modest in attitude, clear in evidence.", "Khiêm tốn ở thái độ, rõ ở bằng chứng."),
        L("l2", null, "Say your numbers clearly.", "Nói số cho rõ."),
        L("l3", null, "Short on years? Show how fast you learn. Today, write one proof next to each of three needs.", "Thiếu năm thì bù bằng tốc độ. Hôm nay, viết bằng chứng cạnh ba yêu cầu chính."),
      ] },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Thử ngay bằng tiếng Anh" },
      lines: [L("l1", "det", "Now show your evidence. Forty questions are waiting.", "Giờ thử sức nhé. Bốn mươi câu hỏi đang chờ.")] },
  ],
};
