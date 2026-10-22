// Kịch bản video W lần 3 (#110) — "Cách đưa ra kết luận khách quan khi thông tin trái chiều" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-reach-a-balanced-conclusion--w01",
  hook: "HOOK-02",
  loop: { open: "s01", close: "s22" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "everyday-information-readers", slug: "how-to-reach-a-balanced-conclusion", door: "ky-nang", level: "B1",
    title: "Cách đưa ra kết luận khách quan khi thông tin trái chiều", series: "Tư duy phản biện" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: anh Tài → Dũng (dự báo bão từ một trang mạng, Dũng nhắn nhóm gia đình); “bạn” trả lời dì ở ✍️ p2 → Thảo; dì → Cô Hoa; Na → Lan (nay dựng cảnh SCENE-01 s10, lời Lan là lời dựng tối thiểu theo diễn biến p6); Toàn → Dũng (SCENE-02 s22, tin nhắn đúng chữ p17; lời cảm ơn của bạn rút từ “hai người bạn kịp huỷ đơn và cảm ơn anh”). Vai mới: không dùng. s01 dựng 🔀 p11 (hai tin nhắn đúng chữ của bài). DLG-01 s06 dựng từ ✍️ p2. Kết bằng mẫu trả lời bốn phần (p13) trong chương 4 và END-02 trước END-05, khép chuỗi. Phủ ý: 21/21.",
  scenes: [
    // ── Mở đầu kể chuyện
    { id: "s01", module: "SCENE-03", ref: "p11",
      data: { set: "room", actors: [{ id: "dung", pose: "phone" }],
        left: { label: "Nói chắc chắn", ok: false }, right: { label: "Nói “có khả năng”", ok: true } },
      lines: [
        L("a1", "dung", "The storm will definitely hit tonight. Everyone, stay home from work.", "Chắc chắn bão vào đêm nay, mọi người nghỉ làm ở nhà.", { phase: "a", face: "worried" }),
        L("a2", null, "The storm turns away. Next time, the family says: let's wait and see.", "Bão đổi hướng. Lần sau, cả nhóm nói “để xem đã”.", { react: { dung: "sad" } }),
        L("b1", "dung", "A storm may come. Please follow the official forecast.", "Có khả năng bão đến, mọi người theo dõi bản tin chính thức nhé.", { phase: "b", face: "thinking" }),
        L("b2", null, "His next message is still trusted.", "Lời nhắn sau của Dũng vẫn được tin."),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Kết luận khách quan", pose: "present", items: ["Một câu trả lời rõ", "Bằng chứng chính của hai phía", "Từ đúng mức chắc chắn", "Điều gì khiến mình đổi ý"] },
      lines: [
        L("l1", "det", "Conflicting news, and family asks: which one is right? A fair conclusion has:", "Tin trái chiều, người thân hỏi: rốt cuộc tin bên nào? Kết luận khách quan có:"),
        L("l2", "det", "A clear answer.", "Một câu trả lời rõ."),
        L("l3", "det", "The main evidence on both sides.", "Bằng chứng chính của cả hai phía."),
        L("l4", "det", "Words that match how sure you are.", "Từ ngữ đúng mức chắc chắn."),
        L("l5", "det", "And what would change your mind.", "Và điều gì sẽ khiến mình đổi ý."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Từ lúc gom tin đến lúc đổi ý", chapters: [
        { label: "Khách quan không phải nước đôi", illus: "balance-scale" },
        { label: "Gom và cân bằng chứng", illus: "clipboard" },
        { label: "Nói chắc đến mức nào", illus: "bar-chart" },
        { label: "Trả lời người thân", illus: "speech-balloon" },
        { label: "Khi mình đã sai", illus: "counterclockwise-arrows-button" },
        { label: "Bẫy cần tránh", illus: "warning" } ] },
      lines: [
        L("l1", null, "The last lesson of the series: from gathering mixed news to answering.", "Bài cuối của chuỗi: đi từ lúc gom thông tin trái chiều đến lúc trả lời."),
        L("l2", null, "And to changing your mind when you need to.", "Và cả lúc cần đổi ý."),
      ] },

    // ── Chương 1: Khách quan không phải nước đôi (p1–p3)
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Khách quan có phải nước đôi?" },
      lines: [L("l1", "det", "Part one: is being objective saying both sides have a point?", "Phần một: khách quan có phải là nói “bên nào cũng có lý”?")] },
    { id: "s05", module: "TEXT-04", ref: "p1",
      data: { text: "Khách quan: độ mạnh của kết luận tương xứng với độ mạnh của bằng chứng.", marks: ["tương xứng"], illus: "balance-scale" },
      lines: [
        L("l1", null, "No. Objective means your conclusion is as strong as your evidence, no more, no less.", "Không. Khách quan là để độ mạnh của kết luận tương xứng với độ mạnh của bằng chứng."),
        L("l2", null, "Sitting on the fence to avoid responsibility helps nobody decide.", "Nói nước đôi để khỏi chịu trách nhiệm không giúp ai quyết định cả."),
      ] },
    { id: "s06", module: "DLG-01", ref: "p2,p3",
      data: { set: "kitchen", label: "Chiếc nồi chiên",
        actors: [{ id: "hoa", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Nói nước đôi “con chịu”",
          why: "Dì phải tự xoay xở với tin đồn, và rất dễ bỏ luôn chiếc nồi mới mua." } },
      lines: [
        L("l1", "hoa", "I read that air fryers are harmful. Should I throw my new one away?", "Dì đọc tin nồi chiên không dầu gây hại. Bỏ cái mới mua đi không con?", { face: "worried", pose: "explain" }),
        L("l2", "thao", "This article says one thing, that one says another. I can't tell.", "Bài này nói vậy, bài kia nói khác, con chịu.", { pose: "shrug", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "That leaves her alone with the rumour. She may just throw it away.", "Thế là để dì tự xoay xở với tin đồn, rất dễ dì bỏ luôn nồi."),
        L("l5", "det", "Let's rewind and give a clear answer.", "Tua lại, trả lời có hướng rõ nhé.", { phase: "redo" }),
        L("l6", "thao", "I haven't seen any official warning. Most likely it's fine if you follow the instructions.", "Con chưa thấy nguồn chính thức nào cảnh báo. Nhiều khả năng dùng đúng hướng dẫn là ổn.", { phase: "redo", pose: "explain" }),
        L("l7", "thao", "If there's an official recall, I'll tell you right away.", "Nếu có thông báo thu hồi chính thức, con báo dì ngay.", { phase: "redo", face: "happy", react: { hoa: "happy" } }),
      ] },
    { id: "s07", module: "TEXT-01", ref: "p3",
      data: { text: "Khách quan vẫn phải có câu trả lời.", illus: "check-mark-button" },
      lines: [L("l1", "det", "A clear direction, a level of certainty, and when you'd change your mind. Fair still means an answer.", "Có hướng rõ, nói mức chắc chắn, nói khi nào đổi ý. Khách quan vẫn phải có câu trả lời.")] },

    // ── Chương 2: Gom và cân (p4–p8)
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Gom và cân thông tin" },
      lines: [L("l1", "det", "Part two: gathering and weighing conflicting information.", "Phần hai: thông tin trái chiều thì gom và cân thế nào?")] },
    { id: "s09", module: "LIST-06", ref: "p4,p5",
      data: { title: "Hai cột bằng chứng", steps: [
        { text: "Chia giấy làm hai cột, mỗi phía một cột", illus: "memo" },
        { text: "Ghi bằng chứng của từng bên", illus: "pencil" },
        { text: "Đánh dấu: nguồn là ai, kiểm tra được không", illus: "magnifying-glass-tilted-left" },
        { text: "Cân theo chất lượng, không theo số lượng", illus: "balance-scale" } ] },
      lines: [
        L("l1", null, "Split a page into two columns, one for each side.", "Chia một tờ giấy làm hai cột, mỗi phía một cột."),
        L("l2", null, "Write each side's evidence.", "Ghi bằng chứng của từng bên."),
        L("l3", null, "Mark each line: who is the source? Are there details you can check?", "Đánh dấu cạnh mỗi dòng: nguồn là ai, có chi tiết kiểm tra được không."),
        L("l4", null, "Weigh quality, not quantity. One dated photo or official notice beats ten vague stories.", "Cân theo chất lượng, không theo số lượng. Một ảnh có ngày giờ, một thông báo chính thức hơn mười lời kể chung chung."),
      ] },
    { id: "s10", module: "SCENE-01", ref: "p6",
      data: { set: "street", label: "Chuyện của Lan",
        actors: [{ id: "lan", side: "right", pose: "phone" }] },
      lines: [
        L("l1", null, "Lan wants to rent in a new area. Ten comments say it never floods.", "Lan định thuê nhà ở khu mới. Cả chục bình luận nói “khu này không bao giờ ngập”."),
        L("l2", null, "Only two people post flood photos, dated last rainy season.", "Chỉ hai người đăng ảnh nước ngập, kèm ngày tháng mùa mưa năm ngoái."),
        L("l3", "lan", "Wait… most of these comments are from people selling or renting here.", "Khoan… phần lớn bình luận khen là người đang bán, cho thuê nhà ở đây.", { face: "thinking" }),
        L("l4", null, "She asks long-time neighbours. The road floods a few times every rainy season.", "Lan hỏi hàng xóm lâu năm: đường đầu ngõ ngập vài lần mỗi mùa mưa.", { react: { lan: "surprised" } }),
      ] },
    { id: "s11", module: "TEXT-01", ref: "p7",
      data: { text: "Cân bằng chứng, đừng đếm người nói.", illus: "balance-scale" },
      lines: [
        L("l1", null, "Ten voices, or two dated photos?", "Chục lời nói, hay hai ảnh có ngày?"),
        L("l2", "det", "Weigh the evidence. Don't count the voices.", "Cân bằng chứng, đừng đếm người nói."),
      ] },
    { id: "s12", module: "TEXT-04", ref: "p8",
      data: { text: "Đừng kết luận từ một ví dụ: nhìn nhiều nhận xét và xu hướng chung.", marks: ["một ví dụ", "xu hướng chung"], illus: "bar-chart" },
      lines: [
        L("l1", null, "Don't conclude from one example either.", "Cũng đừng kết luận từ một ví dụ."),
        L("l2", null, "One bad review doesn't describe a whole clinic. Look at many reviews and the overall trend.", "Một nhận xét xấu không nói lên cả một phòng khám; hãy nhìn nhiều nhận xét và xu hướng chung."),
      ] },

    // ── Chương 3: Nói chắc đến mức nào (p9–p12)
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Nói chắc đến mức nào?" },
      lines: [L("l1", "det", "Part three: how sure should you sound?", "Phần ba: nói chắc đến mức nào thì vừa?")] },
    { id: "s14", module: "REL-10", ref: "p9",
      data: { title: "Từ ngữ theo độ mạnh của bằng chứng", levels: [
        { label: "Ít hoặc yếu", sub: "“có thể”, “có dấu hiệu”, “cần thêm thông tin”", illus: "seedling" },
        { label: "Khá", sub: "“nhiều khả năng”, “thông tin đến nay cho thấy”", illus: "potted-plant" },
        { label: "Mạnh, nhiều nguồn khớp nhau", sub: "“rõ ràng”, “đã được xác nhận”", illus: "deciduous-tree" } ] },
      lines: [
        L("l1", null, "Little or weak evidence: possibly, there are signs, we need more information.", "Bằng chứng ít hoặc yếu: “có thể”, “có dấu hiệu”, “cần thêm thông tin”."),
        L("l2", null, "Fair evidence: most likely, the information so far shows.", "Bằng chứng khá: “nhiều khả năng”, “thông tin đến nay cho thấy”."),
        L("l3", null, "Strong evidence, many sources agreeing: clearly, confirmed.", "Bằng chứng mạnh, nhiều nguồn khớp nhau: “rõ ràng”, “đã được xác nhận”."),
      ] },
    { id: "s15", module: "CMP-01", ref: "p10",
      data: { labels: ["“Chắc chắn” với bằng chứng yếu", "“Có thể” với bằng chứng rất mạnh"], left: "Nếu sai, lần sau người khác bớt tin bạn", right: "Người nghe không biết có nên hành động không",
        illus: ["warning", "red-question-mark"] },
      lines: [
        L("l1", null, "Say definitely with weak evidence, and if you're wrong, people trust you less next time.", "Nói “chắc chắn” với bằng chứng yếu, nếu sai thì lần sau người khác bớt tin bạn."),
        L("l2", null, "Say maybe with very strong evidence, and people don't know whether to act.", "Nói “có thể” với bằng chứng rất mạnh, người nghe lại không biết có nên hành động không."),
      ] },
    { id: "s16", module: "CMP-01", ref: "p11,p12",
      data: { labels: ["Cách A: “Chắc chắn bão đêm nay”", "Cách B: “Có khả năng bão đến”"], left: "Bão đổi hướng; lần sau cả nhóm nói “để xem đã”", right: "Chuẩn bị theo tin chính thức; lời nhắn sau vẫn được tin",
        illus: ["cross-mark", "check-mark-button"] },
      lines: [
        L("l1", null, "Back to Dũng. Way A: some people took the day off. The official forecast said the storm turned, just moderate rain.", "Quay lại Dũng. Cách A: vài người xin nghỉ, rồi bản tin chính thức báo bão đổi hướng, chỉ mưa vừa."),
        L("l2", null, "Way B: people prepared using the official news, and kept trusting him.", "Cách B: mọi người chuẩn bị theo tin chính thức, và vẫn tin lời nhắn sau của cậu."),
      ] },
    { id: "s16b", module: "TEXT-01", ref: "p12",
      data: { text: "Nói chắc quá, lần sau ít người tin.", illus: "loudspeaker" },
      lines: [
        L("l1", "det", "Sound too sure, and fewer people believe you next time.", "Nói chắc quá, lần sau ít người tin."),
      ] },

    // ── Chương 4: Trả lời người thân (p13–p15)
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Trả lời người thân cho rõ" },
      lines: [L("l1", "det", "Part four: answering your family clearly.", "Phần bốn: trả lời người thân thế nào cho rõ?")] },
    { id: "s18", module: "HOST-01", ref: "p13",
      data: { title: "Mẫu trả lời bốn phần", pose: "point", items: ["Kết luận", "Vì sao", "Điều chưa chắc", "Bước tiếp theo"] },
      lines: [
        L("l1", "det", "Use a four-part answer.", "Dùng mẫu trả lời bốn phần."),
        L("l2", "det", "Conclusion: I lean towards not buying yet.", "Kết luận: “Con nghiêng về chưa nên mua.”"),
        L("l3", "det", "Why: most of the praise is advertising.", "Vì sao: “Vì các bài khen phần lớn là quảng cáo.”"),
        L("l4", "det", "What's unclear: I don't know if the warranty is real.", "Điều chưa chắc: “Con chưa rõ hàng có bảo hành thật không.”"),
        L("l5", "det", "Next step: I'll ask the shop and tell you.", "Bước tiếp theo: “Con sẽ hỏi cửa hàng rồi báo mẹ.”"),
      ] },
    { id: "s19", module: "LIST-13", ref: "p14,p15",
      data: { title: "Vì sao mẫu này hiệu quả", items: [
        { title: "Có hướng đi lẫn mức tin cậy", detail: "Người nghe tự xem thêm được; có tin mới thì bạn cập nhật mà không mất mặt.", illus: "compass" },
        { title: "Đừng chờ đủ mọi thông tin", detail: "Kết luận tạm, kèm điều kiện đổi ý, tốt hơn im lặng.", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "It gives both a direction and a level of confidence. They can check further themselves.", "Mẫu này cho cả hướng đi lẫn mức tin cậy, người nghe có thể tự xem thêm."),
        L("l2", null, "With new information, you update without losing face. You said the conditions from the start.", "Có thông tin mới, bạn cập nhật mà không mất mặt, vì từ đầu đã nói rõ điều kiện đổi ý."),
        L("l3", null, "Don't wait for complete information. It's rarely complete.", "Đừng chờ đủ mọi thông tin mới trả lời; thông tin hiếm khi đầy đủ."),
        L("l4", null, "A temporary conclusion, with conditions to change it, beats silence.", "Kết luận tạm, kèm điều kiện đổi ý, tốt hơn im lặng."),
      ] },

    // ── Chương 5: Khi mình đã sai (p16–p19)
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Bằng chứng mới: mình đã sai" },
      lines: [L("l1", "det", "Part five: new evidence shows you were wrong.", "Phần năm: có bằng chứng mới cho thấy mình đã sai thì sao?")] },
    { id: "s21", module: "TEXT-04", ref: "p16",
      data: { text: "Đổi ý khi bằng chứng thay đổi là điểm mạnh. Nói rõ, nói sớm, giải thích điều gì đã thay đổi.", marks: ["điểm mạnh"], illus: "flexed-biceps" },
      lines: [
        L("l1", null, "Changing your mind when the evidence changes is a strength, not a weakness.", "Đổi ý khi bằng chứng thay đổi là điểm mạnh, không phải điểm yếu."),
        L("l2", null, "Say it clearly and early. Explain what changed, so people know it's not a whim.", "Nói rõ và sớm, giải thích điều gì đã thay đổi, để người khác hiểu không phải đổi ý tuỳ hứng."),
      ] },
    { id: "s22", module: "SCENE-02", ref: "p17,p18",
      data: { set: "room", label: "Dám đổi ý",
        actor: { id: "dung", side: "left" },
        contact: { name: "Nhóm bạn", illus: "busts-in-silhouette" },
        messages: [
          { from: "me", text: "Hôm trước mình giới thiệu chỗ này, nay có cảnh báo chính thức, mọi người khoan mua nhé.", at: "l2" },
          { from: "me", text: "Mình gửi đường dẫn đây.", at: "l3" },
          { from: "them", text: "Cảm ơn nhé, mình kịp huỷ đơn rồi!", at: "l4" } ] },
      lines: [
        L("l1", null, "Dũng recommended a cheap water filter shop to friends. A week later, the local market authority warns it sells goods of unknown origin.", "Dũng từng giới thiệu chỗ bán máy lọc nước giá tốt. Tuần sau, quản lý thị trường cảnh báo hàng không rõ nguồn gốc."),
        L("l2", "dung", "I recommended this shop, but there's an official warning now. Please hold off buying.", "Hôm trước mình giới thiệu chỗ này, nay có cảnh báo chính thức, mọi người khoan mua nhé."),
        L("l3", "dung", "Here's the link.", "Mình gửi đường dẫn đây."),
        L("l4", "them", "Thanks, I cancelled my order just in time!", "Cảm ơn nhé, mình kịp huỷ đơn rồi!"),
        L("l5", "dung", "Changing your mind for evidence is a strength.", "Đổi ý vì bằng chứng là điểm mạnh.", { face: "happy" }),
      ] },
    { id: "s23", module: "CMP-06", ref: "p19",
      data: { do: ["Nói rõ, sớm, kèm điều đã thay đổi"], dont: ["Lặng lẽ đổi ý mà không nói", "Cố bảo vệ điều mình nói trước đó"],
        doIcons: ["speech-balloon"], dontIcons: ["zipper-mouth-face", "shield"] },
      lines: [
        L("l1", null, "Quietly changing your mind without saying so…", "Lặng lẽ đổi ý mà không nói…"),
        L("l2", null, "…or defending what you said before, both lose trust in the long run.", "…hoặc cố bảo vệ điều mình đã nói, đều làm mất lòng tin lâu dài."),
      ] },

    // ── Chương 6: Bẫy khi kết luận (p20–p21)
    { id: "s24", module: "HOST-03", data: { n: 6, of: 6, title: "Bẫy cần tránh khi kết luận" },
      lines: [L("l1", "det", "Part six: traps to avoid when concluding.", "Phần sáu: những bẫy nào cần tránh khi kết luận?")] },
    { id: "s25", module: "LIST-04", ref: "p20",
      data: { title: "Năm cái bẫy", items: [
        { text: "Cân bằng giả", illus: "balance-scale" },
        { text: "Kết luận từ một ví dụ", illus: "pushpin" },
        { text: "Chờ đủ mọi thông tin", illus: "hourglass-not-done" },
        { text: "Theo người to tiếng nhất nhóm", illus: "loudspeaker" },
        { text: "Nói chắc hơn bằng chứng cho phép", illus: "warning" } ] },
      lines: [
        L("l1", null, "False balance: treating a baseless opinion like solid evidence.", "Cân bằng giả: coi ý kiến không cơ sở ngang với bằng chứng vững."),
        L("l2", null, "Concluding from one example.", "Kết luận từ một ví dụ."),
        L("l3", null, "Waiting for complete information.", "Chờ đủ mọi thông tin."),
        L("l4", null, "Following the loudest person in the group.", "Theo ý người to tiếng nhất nhóm."),
        L("l5", null, "Sounding surer than the evidence allows.", "Nói chắc hơn bằng chứng cho phép."),
      ] },
    { id: "s26", module: "TEXT-04", ref: "p21",
      data: { text: "Khi bí: quay về hai cột. Bên nào nguồn rõ hơn, chi tiết kiểm tra được nhiều hơn?", marks: ["hai cột"], illus: "clipboard" },
      lines: [
        L("l1", null, "Stuck? Go back to your two columns.", "Khi bí, hãy quay về hai cột bằng chứng."),
        L("l2", null, "Which side has clearer sources, and more details you can check?", "Bên nào có nguồn rõ hơn, chi tiết kiểm tra được nhiều hơn?"),
      ] },

    // ── Câu đố và kết
    { id: "s27", module: "QUIZ-01", ref: "questions[11]",
      data: {
        q: "You have only a little weak evidence, which words fit best?",
        options: [
          "It is clearly true, and anyone who doubts it is being foolish",
          "It has been confirmed, and everyone should act on it right now",
          "It is possible, there are some signs, we need more information",
        ],
        correct: 2, countdown: 5, illus: "seedling",
        why: "Bằng chứng yếu thì dùng mức thấp nhất.",
      },
      lines: [
        L("l1", null, "You have only a little weak evidence, which words fit best?", "Bạn chỉ có ít bằng chứng yếu, từ ngữ nào hợp nhất?"),
        L("l2", null, "It is possible, there are some signs, we need more information.", "Có thể, có dấu hiệu, cần thêm thông tin."),
        L("l3", null, "Saying confirmed goes beyond the evidence.", "Nói “đã xác nhận” là vượt quá bằng chứng."),
      ] },
    { id: "s28", module: "END-02", ref: "p3,p7,p12,p18",
      data: { kicker: "Rút ra", illus: "balance-scale",
        points: ["Khách quan vẫn phải có câu trả lời", "Cân bằng chứng, đừng đếm người nói", "Đổi ý vì bằng chứng là điểm mạnh"],
        icons: ["check-mark-button", "balance-scale", "flexed-biceps"] },
      lines: [
        L("l1", null, "Two opposite traps: sitting on the fence, and sounding too sure.", "Hai cái bẫy ngược nhau: nói nước đôi và nói chắc quá."),
        L("l2", null, "A good conclusion sits between: a clear direction, reasons, what's unsure, and the next step.", "Kết luận tốt nằm ở giữa: có hướng rõ, có lý do, có điều chưa chắc và bước tiếp theo."),
        L("l3", null, "Next time family asks which news is right, use the four-part answer.", "Lần tới người thân hỏi “tin nào đúng?”, hãy trả lời bằng mẫu bốn phần."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Khép lại chuỗi Tư duy phản biện" },
      lines: [L("l1", "det", "That's the whole series. Forty questions are waiting for you.", "Vậy là hết chuỗi rồi. Bốn mươi câu hỏi đang chờ bạn.", { face: "happy" })] },
  ],
};
