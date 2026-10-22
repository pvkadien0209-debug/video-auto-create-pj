// Kịch bản video W lần 3 (#110) — "Làm gì khi bất đồng quan điểm? Cách nhìn vấn đề từ phía người khác" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-see-the-other-side--w01",
  hook: "HOOK-05",
  loop: { open: "s01", close: "s28" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "everyday-information-readers", slug: "how-to-see-the-other-side", door: "ky-nang", level: "B1",
    title: "Làm gì khi bất đồng quan điểm? Cách nhìn vấn đề từ phía người khác", series: "Tư duy phản biện" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Thảo (p15) giữ Thảo; chị dâu → Cô Hoa; em út → Dũng; Lâm → Dũng (cùng một gia đình, nên Dũng vừa là em út vừa là cháu của chú); chú ruột → Bác Bình; bố con Hạnh (📌 p9) và vợ chồng anh Cường (🧪 p12) kể ẩn danh trên thẻ (giữ số nhân vật có tên ở 4). Vai mới: không dùng (bố mẹ nằm viện không dựng cảnh; không có trẻ con hay người nước ngoài). HOOK-05: s01 mở bằng kết cục (Thảo nhắn xin lỗi), s19 tua lại chuyện 📌 p15 — câu xin lỗi cụ thể và lời Dũng là lời dựng rút từ p15. DLG-01 s09 dựng từ ✍️ p5: Lâm gọi riêng cho chú, dựng ở bối cảnh online. s19 là cảnh 3 người duy nhất. Phủ ý: 21/21.",
  scenes: [
    // ── Mở đầu kể chuyện (HOOK-05: kết cục trước)
    { id: "s01", module: "SCENE-01", ref: "p15",
      data: { set: "home", label: "Nhóm gia đình",
        actors: [{ id: "thao", side: "center", pose: "phone", face: "sad" }] },
      lines: [
        L("l1", "thao", "Dũng, I'm sorry. I blamed you without knowing the whole story.", "Dũng ơi, chị xin lỗi. Chị trách em khi chưa biết hết chuyện.", { face: "sad", pose: "phone" }),
        L("l2", null, "Thảo is apologising to her youngest brother in the family group. How did it come to this?", "Thảo nhắn xin lỗi em út trong nhóm gia đình. Chuyện gì đã xảy ra?"),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Hiểu trước, thuyết phục sau", pose: "present", items: ["Hiểu không phải là đồng ý", "Nhắc lại ý họ, đến khi họ gật đầu", "Hỏi điều họ lo"] },
      lines: [
        L("l1", "det", "We'll rewind later. First: when you disagree, understand what they think and why, before you persuade.", "Lát nữa ta tua lại. Trước hết: khi bất đồng, hiểu người kia nghĩ gì và vì sao, rồi mới thuyết phục."),
        L("l2", "det", "Understanding is not agreeing.", "Hiểu không có nghĩa là đồng ý."),
        L("l3", "det", "Restate their view until they nod: yes, that's what I mean.", "Nhắc lại ý họ, đến khi họ gật đầu “đúng rồi, ý tôi là vậy”."),
        L("l4", "det", "And ask what worries them.", "Và hỏi điều họ lo."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Từ lúc bất đồng đến lúc tìm điểm chung", chapters: [
        { label: "Hiểu không phải chịu thua", illus: "handshake" },
        { label: "Lúc đang nóng", illus: "fire" },
        { label: "Điều họ thật sự lo", illus: "worried-face" },
        { label: "Dữ kiện, ưu tiên hay giá trị", illus: "balance-scale" },
        { label: "Nghe cả hai phía", illus: "ear" },
        { label: "Nói ý mình, biết dừng", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "From the moment a disagreement starts…", "Đi từ lúc bất đồng nổ ra…"),
        L("l2", null, "…to finding common ground, or knowing when to stop.", "…đến lúc hai bên tìm được điểm chung, hoặc biết dừng đúng lúc."),
      ] },

    // ── Chương 1: Hiểu không phải chịu thua (p1–p2)
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Hiểu có phải chịu thua?" },
      lines: [L("l1", "det", "Part one: does understanding mean giving in?", "Phần một: hiểu người kia có phải là chịu thua không?")] },
    { id: "s05", module: "CMP-01", ref: "p1",
      data: { labels: ["“Tôi hiểu”", "“Tôi đồng ý”"], left: "“Con hiểu vì sao bố lo”: vẫn giữ quan điểm mình", right: "Là chuyện khác, nên tách rõ",
        illus: ["ear", "handshake"] },
      lines: [
        L("l1", null, "No. Understanding doesn't mean agreeing.", "Không. Hiểu không có nghĩa là đồng ý."),
        L("l2", null, "You can say: I understand why you're worried, Dad, and still keep your view.", "Bạn có thể nói “Con hiểu vì sao bố lo” mà vẫn giữ quan điểm của mình."),
        L("l3", null, "Keep I understand and I agree clearly apart.", "Hai câu “tôi hiểu” và “tôi đồng ý” nên được tách rõ."),
      ] },
    { id: "s06", module: "TEXT-04", ref: "p2",
      data: { text: "Nhiều cuộc cãi kéo dài vì mỗi bên phản bác một phiên bản méo mó của ý người kia.", marks: ["phiên bản méo mó"], illus: "nesting-dolls" },
      lines: [
        L("l1", null, "Many arguments drag on not because people are so different…", "Nhiều cuộc cãi kéo dài không phải vì hai bên quá khác nhau…"),
        L("l2", null, "…but because each side is attacking a twisted version of the other's idea.", "…mà vì mỗi bên đang phản bác một phiên bản méo mó của ý người kia."),
      ] },

    // ── Chương 2: Lúc đang nóng (p3–p6)
    { id: "s07", module: "HOST-03", data: { n: 2, of: 7, title: "Lúc đang nóng, làm gì trước?" },
      lines: [L("l1", "det", "Part two: things are heated. What first?", "Phần hai: lúc đang nóng, làm gì trước tiên?")] },
    { id: "s08", module: "LIST-06", ref: "p3,p4",
      data: { title: "Nghe, rồi nhắc lại", steps: [
        { text: "Tạm dừng phản bác vài phút, chỉ nghe", illus: "ear" },
        { text: "Đừng vừa nghe vừa soạn câu “Nhưng mà…”", illus: "zipper-mouth-face" },
        { text: "Nhắc lại phiên bản hợp lý nhất của ý họ", illus: "repeat-button" } ] },
      lines: [
        L("l1", null, "Stop arguing for a few minutes. Just listen.", "Tạm dừng phản bác vài phút, chỉ nghe."),
        L("l2", null, "Don't prepare your But… while listening. People who don't feel heard get louder and repeat themselves.", "Đừng vừa nghe vừa soạn câu “Nhưng mà…”. Người không thấy được nghe sẽ nói to hơn, lặp ý cũ."),
        L("l3", null, "Restate: If I understand you, you're worried that…, is that right? The most reasonable version, never sarcastic.", "Nhắc lại: “Nếu con hiểu đúng thì chú lo rằng…, có phải không ạ?” Bản hợp lý nhất, không mỉa mai."),
      ] },
    { id: "s09", module: "DLG-01", ref: "p5,p6",
      data: { set: "online", label: "Gọi riêng cho chú",
        actors: [{ id: "binh", side: "left" }, { id: "dung", side: "right" }],
        verdict: { ok: false, label: "Gạt ý người kia đi",
          why: "Chỉ nhắc lại ý mình và gạt ý chú, người không thấy được nghe sẽ nói to hơn." } },
      lines: [
        L("l0", null, "Dũng and his uncle argue about a new policy in the family group, dozens of messages each.", "Dũng và chú cãi nhau trong nhóm gia đình về một chính sách mới, mỗi người hàng chục tin."),
        L("l1", "binh", "This new policy is a problem. I keep telling you.", "Chính sách mới này có vấn đề. Chú nói mãi rồi.", { face: "stern", pose: "cross" }),
        L("l2", "dung", "You keep repeating the same point. There's nothing wrong with this policy!", "Chú cứ nhắc mãi một ý, chính sách này có gì sai đâu!", { face: "stern", pose: "shrug", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "That only repeats your view. Restate his worry, in your own words.", "Thế chỉ là nhắc ý mình. Hãy nói lại nỗi lo của chú bằng lời của bạn."),
        L("l5", "det", "Let's rewind. Call him privately.", "Tua lại nhé. Gọi riêng cho chú.", { phase: "redo" }),
        L("l6", "dung", "You're worried it makes things hard for small sellers like our family, right?", "Chú lo chính sách này làm khó người buôn bán nhỏ như nhà mình, đúng không ạ?", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l7", "binh", "Yes. That's exactly what I'm worried about.", "Ừ, chú lo đúng chuyện đó.", { phase: "redo", face: "neutral", pose: "stand" }),
      ] },
    { id: "s10", module: "TEXT-01", ref: "p6",
      data: { text: "Nhắc lại ý họ trước, nói ý mình sau.", illus: "repeat-button" },
      lines: [L("l1", "det", "He felt understood, so he talked calmly. Their view first, yours second.", "Chú thấy được hiểu nên chịu nói nhỏ nhẹ. Nhắc lại ý họ trước, nói ý mình sau.")] },

    // ── Chương 3: Điều họ thật sự lo (p7–p10)
    { id: "s11", module: "HOST-03", data: { n: 3, of: 7, title: "Nói một đằng, lo điều gì?" },
      lines: [L("l1", "det", "Part three: they say one thing, but what do they really worry about?", "Phần ba: họ nói một đằng, nhưng thật ra lo điều gì?")] },
    { id: "s12", module: "LIST-13", ref: "p7,p8",
      data: { title: "Lập trường và lợi ích", items: [
        { title: "Lập trường", detail: "Điều người ta nói họ muốn.", illus: "speech-balloon" },
        { title: "Lợi ích", detail: "Lý do phía sau, thường là một nỗi lo. Hỏi: “Điều gì quan trọng nhất với bố trong chuyện này ạ?”", illus: "worried-face" } ] },
      lines: [
        L("l1", null, "A position is what people say they want.", "Lập trường là điều người ta nói họ muốn."),
        L("l2", null, "An interest is the reason behind it, often a worry.", "Lợi ích là lý do phía sau, thường là một nỗi lo."),
        L("l3", null, "Opposite positions can still have interests that fit together.", "Hai lập trường trái ngược vẫn có thể có lợi ích dung hoà được."),
        L("l4", null, "To get there, ask: What matters most to you in this, Dad?", "Câu hỏi giúp đi tới đó: “Điều gì quan trọng nhất với bố trong chuyện này ạ?”"),
      ] },
    { id: "s13", module: "RSN-08", ref: "p9,p10",
      data: { beats: [
        { text: "Bố nhất định giữ hết tiền tiết kiệm bằng tiền mặt ở nhà; con gái muốn gửi ngân hàng", illus: "money-bag" },
        { text: "Cãi mãi không xong", link: "but", illus: "anger-symbol" },
        { text: "Con hỏi “Bố lo nhất điều gì ạ?”: bố sợ ốm đau cần tiền gấp mà không rút được", link: "therefore", illus: "face-with-thermometer" },
        { text: "Để một khoản nhỏ ở nhà, còn lại gửi tiết kiệm; con chỉ bố cách rút", link: "therefore", illus: "bank" } ] },
      lines: [
        L("l1", null, "A father insists on keeping all his savings in cash at home. His daughter wants it in a bank.", "Một ông bố nhất định giữ hết tiền tiết kiệm ở nhà, con gái muốn bố gửi ngân hàng."),
        L("l2", null, "They argue and argue.", "Cãi mãi không xong."),
        L("l3", null, "She asks: What worries you most? He fears needing money fast when sick, and not getting it.", "Con hỏi “Bố lo nhất điều gì ạ?”. Bố sợ ốm đau cần tiền gấp mà không rút được."),
        L("l4", null, "So a small amount stays home, the rest is saved, and she shows him how to withdraw.", "Thế là để khoản nhỏ ở nhà, còn lại gửi tiết kiệm, con chỉ bố cách rút."),
        L("l5", "det", "Ask what they worry about. Don't just argue with what they say.", "Hỏi điều họ lo, đừng chỉ cãi điều họ nói."),
      ] },

    // ── Chương 4: Dữ kiện, ưu tiên hay giá trị (p11–p13)
    { id: "s14", module: "HOST-03", data: { n: 4, of: 7, title: "Dữ kiện, ưu tiên, giá trị" },
      lines: [L("l1", "det", "Part four: where do you differ? Facts, priorities, or values?", "Phần bốn: hai bên khác nhau ở đâu: dữ kiện, ưu tiên hay giá trị?")] },
    { id: "s15", module: "CMP-05", ref: "p11",
      data: { title: "Khác ở đâu, làm gì", columns: [{ label: "Dữ kiện", illus: "bar-chart" }, { label: "Ưu tiên", illus: "balance-scale" }, { label: "Giá trị", illus: "red-heart" }],
        rows: [{ label: "Nên làm", cells: ["cùng nhau kiểm tra", "bàn điều gì nặng hơn", "tôn trọng nhau"] }, { label: "Ví dụ", cells: ["số liệu, văn bản, nguồn", "với gia đình lúc này", "không cần ai thắng"] }] },
      lines: [
        L("l1", null, "Different facts? Check together: numbers, documents, sources.", "Khác về dữ kiện thì cùng nhau kiểm tra: số liệu, văn bản, nguồn tin."),
        L("l2", null, "Different priorities? Discuss what matters more for the family right now.", "Khác về ưu tiên thì bàn xem điều gì nặng hơn với gia đình lúc này."),
        L("l3", null, "Different values? Sometimes you just respect each other. Nobody has to win.", "Khác về giá trị thì có khi chỉ cần tôn trọng nhau, không cần ai thắng."),
      ] },
    { id: "s16", module: "LIST-06", ref: "p12,p13",
      data: { title: "Làm mẫu: cho con đi du học?", steps: [
        { text: "Liệt kê từng điểm không đồng ý", illus: "memo" },
        { text: "Đánh dấu dữ kiện: chi phí học, chi phí sống", illus: "money-bag" },
        { text: "Đánh dấu ưu tiên: cơ hội học, con còn nhỏ", illus: "balance-scale" },
        { text: "Tìm chi phí trước, rồi mới bàn ưu tiên", illus: "magnifying-glass-tilted-left" } ] },
      lines: [
        L("l1", null, "A couple argues about sending their child abroad to study. First, list every point they disagree on.", "Một cặp vợ chồng tranh cãi chuyện cho con đi du học. Một: liệt kê từng điểm không đồng ý."),
        L("l2", null, "Mark the facts you can look up: tuition, living costs.", "Hai: đánh dấu điểm là dữ kiện, tra cứu được: chi phí học, chi phí sống."),
        L("l3", null, "Mark the priorities: he values the chance to study, she worries the child is young and far from home.", "Ba: đánh dấu ưu tiên: anh coi trọng cơ hội học, chị lo con còn nhỏ, xa nhà."),
        L("l4", null, "Find the costs first, then discuss priorities, like what age to go. They argue much less.", "Bốn: tìm chi phí trước, rồi mới bàn ưu tiên, như đi ở tuổi nào. Hai người cãi ít hẳn."),
        L("l5", "det", "Know where you differ, then you can discuss the right thing.", "Biết khác nhau ở đâu thì mới bàn đúng chỗ."),
      ] },

    // ── Chương 5: Nghe một người kể (p14–p16) — tua lại chuyện của Thảo
    { id: "s17", module: "HOST-03", data: { n: 5, of: 7, title: "Nghe một người kể người khác" },
      lines: [L("l1", "det", "Part five: hearing one person's story about someone else.", "Phần năm: nghe một người kể về người khác thì sao?")] },
    { id: "s18", module: "TEXT-04", ref: "p14",
      data: { text: "Câu chuyện đầu tiên có vẻ thuyết phục nhất, vì chưa có gì để so.", marks: ["chưa có gì để so"], illus: "speech-balloon" },
      lines: [
        L("l1", null, "The first story we hear often seems most convincing, because there's nothing to compare it with.", "Câu chuyện đầu tiên ta nghe thường có vẻ thuyết phục nhất, vì chưa có gì để so."),
        L("l2", null, "Before judging, ask at least one more question, and if possible, hear the other side.", "Trước khi nhận xét, hãy hỏi thêm ít nhất một câu, và nếu được thì nghe cả phía kia."),
      ] },
    { id: "s19", module: "SCENE-01", ref: "p15",
      data: { set: "home", label: "Tua lại chuyện của Thảo",
        actors: [{ id: "hoa", side: "left" }, { id: "thao", side: "center" }, { id: "dung", side: "right", enter: "walk", at: "l4" }] },
      lines: [
        L("l1", "hoa", "Mum and Dad are in hospital, and the youngest hasn't helped at all.", "Bố mẹ nằm viện mà em út chẳng đóng góp gì.", { face: "stern", pose: "explain" }),
        L("l2", "thao", "Really? I'll message the family group and tell him off!", "Thật à? Để em nhắn vào nhóm trách nó!", { face: "stern", pose: "phone" }),
        L("l3", null, "The next day, she hears the other side.", "Hôm sau, Thảo mới nghe phía bên kia."),
        L("l4", "dung", "I paid most of the hospital bill. I just couldn't stay, I work night shifts.", "Em đã trả phần lớn viện phí. Chỉ là em làm ca đêm, không ở viện được.", { face: "sad", react: { thao: "sad" } }),
      ] },
    { id: "s20", module: "TEXT-01", ref: "p16",
      data: { text: "Nghe một phía mới là nghe một nửa.", illus: "ear" },
      lines: [L("l1", "det", "So Thảo sent that apology. Hearing one side is hearing only half.", "Vì vậy Thảo nhắn lời xin lỗi. Nghe một phía mới là nghe một nửa.")] },

    // ── Chương 6: Nói ý mình (p17–p18)
    { id: "s21", module: "HOST-03", data: { n: 6, of: 7, title: "Nói ý mình cho người còn nghe" },
      lines: [L("l1", "det", "Part six: saying your view so they still listen.", "Phần sáu: nói ý mình thế nào để người kia còn nghe?")] },
    { id: "s22", module: "TEXT-07", ref: "p17",
      data: { en: "I also think rising prices are real.", vi: "Con cũng thấy giá cả tăng là thật.",
        chunks: [{ en: "I also think", vi: "con cũng thấy" }, { en: "rising prices", vi: "giá cả tăng" }, { en: "are real.", vi: "là thật" }], illus: "handshake" },
      lines: [
        L("l1", null, "Find a point you truly agree with, even a small one, and say it first.", "Tìm một điểm bạn thật sự đồng ý, dù nhỏ, và nói ra trước."),
        L("l2", null, "I also think rising prices are real.", "“Con cũng thấy giá cả tăng là thật.”"),
        L("l3", null, "Then give your view, with your reason.", "Sau đó mới nói ý mình kèm lý do."),
      ] },
    { id: "s23", module: "LIST-10", ref: "p18",
      data: { title: "Mẫu câu ba bước", stops: [
        { label: "Nhắc lại: “Chú lo rằng…”", illus: "repeat-button" },
        { label: "Điểm chung: “Con hiểu, con cũng thấy…”", illus: "handshake" },
        { label: "Ý mình: “Con thì nghĩ… vì…”", illus: "speech-balloon" },
        { label: "Mời cùng tìm: “Mình tìm cách nào… được không ạ?”", illus: "puzzle-piece" } ] },
      lines: [
        L("l1", null, "Restate: You're worried that…", "Nhắc lại: “Chú lo rằng…”"),
        L("l2", null, "Common ground: I understand, I also see…", "Điểm chung: “Con hiểu, con cũng thấy…”"),
        L("l3", null, "Your view: I think… because…", "Ý mình: “Con thì nghĩ… vì…”"),
        L("l4", null, "Then: Shall we find a way to…?", "Rồi: “Mình tìm cách nào… được không ạ?”"),
      ] },

    // ── Chương 7: Biết dừng (p19–p21)
    { id: "s24", module: "HOST-03", data: { n: 7, of: 7, title: "Khi nào nên dừng?" },
      lines: [L("l1", "det", "Part seven: when should you stop the argument?", "Phần bảy: khi nào nên dừng cuộc tranh luận?")] },
    { id: "s25", module: "HOST-02", ref: "p19,p20",
      data: { statement: "Dừng tranh luận giữa chừng nghĩa là mình thua", truth: false,
        why: "Dừng không phải là thua. Mục tiêu là hiểu nhau và giữ quan hệ, không phải thuyết phục mọi người." },
      lines: [
        L("l1", "det", "Stopping an argument halfway means you lost. True or false?", "Dừng tranh luận giữa chừng nghĩa là mình thua. Đúng hay sai?"),
        L("l2", "det", "False. Someone too angry, or both repeating old points? Suggest a pause.", "Sai. Một bên quá giận, hay cả hai lặp ý cũ? Hãy đề nghị dừng.", { face: "happy" }),
        L("l3", "det", "This matters. Let's continue when we're calmer.", "“Chuyện này quan trọng, mình nói tiếp lúc bình tĩnh hơn nhé.”"),
        L("l4", "det", "You don't need to convince everyone. Understand each other, keep the relationship. People often rethink after a few days.", "Bạn không cần thuyết phục mọi người. Hiểu nhau, giữ quan hệ; nhiều khi người kia tự nghĩ lại sau vài ngày."),
      ] },
    { id: "s26", module: "END-03", ref: "p21",
      data: { title: "Khi bất đồng", illus: "handshake",
        items: ["Nghe trọn ý trước khi đáp", "Nhắc lại ý họ, hỏi điều họ lo", "Dữ kiện, ưu tiên hay giá trị?", "Nói điểm chung trước ý mình", "Biết dừng khi quá nóng"] },
      lines: [
        L("l1", null, "Listen fully before replying. Restate their view. Ask what worries them.", "Nghe trọn ý trước khi đáp. Nhắc lại ý họ. Hỏi điều họ lo."),
        L("l2", null, "Facts, priorities, or values?", "Khác về dữ kiện, ưu tiên hay giá trị?"),
        L("l3", null, "Common ground before your view. And know when to stop.", "Nói điểm chung trước ý mình. Và biết dừng khi quá nóng."),
      ] },

    // ── Câu đố và kết
    { id: "s27", module: "QUIZ-01", ref: "questions[20]",
      data: {
        q: "Someone tells you a story about a third person, what should you do before judging?",
        options: [
          "Agree quickly, because the first story you hear is usually complete",
          "Share it with others to see whether they agree with your judgement",
          "Ask at least one more question and, if possible, hear the other side",
        ],
        correct: 2, countdown: 5, illus: "ear",
        why: "Hỏi thêm và nghe phía kia giúp nhận xét công bằng.",
      },
      lines: [
        L("l1", null, "Someone tells you a story about a third person, what should you do before judging?", "Ai đó kể về một người thứ ba, bạn nên làm gì trước khi nhận xét?"),
        L("l2", null, "Ask at least one more question and, if possible, hear the other side.", "Hỏi thêm ít nhất một câu, và nếu được, nghe cả phía kia."),
        L("l3", null, "The first story seems convincing only because there's nothing to compare yet.", "Chuyện đầu tiên có vẻ thuyết phục chỉ vì chưa có gì để so."),
      ] },
    { id: "s28", module: "END-02", ref: "p6,p10,p16",
      data: { kicker: "Rút ra", illus: "handshake",
        points: ["Nhắc lại ý họ trước, nói ý mình sau", "Hỏi điều họ lo, đừng chỉ cãi điều họ nói", "Nghe một phía mới là nghe một nửa"],
        icons: ["repeat-button", "worried-face", "ear"] },
      lines: [
        L("l1", null, "Their view first, yours second.", "Nhắc lại ý họ trước, nói ý mình sau."),
        L("l2", null, "Ask what they worry about.", "Hỏi điều họ lo."),
        L("l3", null, "One side is only half. Next disagreement, restate their view at least once before you reply.", "Một phía mới là một nửa. Lần bất đồng tới, nhắc lại ý người kia ít nhất một lần trước khi đáp."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Hiểu trước, nói sau" },
      lines: [L("l1", "det", "Understand first, speak second. Forty questions are waiting.", "Hiểu trước, nói sau. Bốn mươi câu hỏi đang chờ bạn.")] },
  ],
};
