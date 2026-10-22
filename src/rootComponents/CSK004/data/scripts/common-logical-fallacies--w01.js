// Kịch bản video W lần 3 (#110) — "Ngụy biện là gì? Các lỗi lập luận thường gặp khi tranh luận" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "common-logical-fallacies--w01",
  hook: "HOOK-09",
  loop: { open: "s01", close: "s24" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "everyday-information-readers", slug: "common-logical-fallacies", door: "ky-nang", level: "B1",
    title: "Ngụy biện là gì? Các lỗi lập luận thường gặp khi tranh luận", series: "Tư duy phản biện" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (lần 3, #110): Vinh → Dũng; bác cư dân lâu năm → Bác Bình; Giang → Thảo; cô của bé → Cô Hoa; bé (✍️ p7) → Bé Bin (nay lên hình, ngồi xem điện thoại trong DLG-01 s12, không có lời); Trinh (📌 p14) kể ẩn danh trên thẻ REL-02 (đã đủ 5 nhân vật có tên). Vai mới: Bin. Nhóm chat cư dân ở p4 dựng thành cảnh nói chuyện ở bãi xe (set street). s01 treo câu của bác (HOOK-09), s08 Dũng đáp theo đúng p4. DLG-01 s12 dựng từ ✍️ p7: Đét nhận xét câu đáp của Thảo, không chê cô Hoa; Cô Hoa không có lời ở phần làm lại (bài không ghi). DLG-01 là cảnh 3 người duy nhất. Lời “Thì tiền điện đấy” của Bác Bình rút từ “Bác góp ý về tiền điện”. Phủ ý: 22/22.",
  scenes: [
    // ── Mở đầu kể chuyện
    { id: "s01", module: "SCENE-01", ref: "intro,p4",
      data: { set: "street", label: "Bãi xe khu tập thể",
        actors: [{ id: "dung", side: "left" }, { id: "binh", side: "right" }] },
      lines: [
        L("l1", "dung", "It's too dark in the parking area. Could we add more lights?", "Bãi xe tối quá, mình lắp thêm đèn được không ạ?", { pose: "point" }),
        L("l2", "binh", "You've just moved in, what do you know? We've lived here for decades, no problem.", "Mới dọn đến thì biết gì, ở đây mấy chục năm có sao đâu.", { face: "stern", pose: "cross", react: { dung: "worried" } }),
        L("l3", null, "It feels wrong, but where exactly is the mistake?", "Nghe sai sai, nhưng sai ở đâu?"),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ngụy biện thay lý do bằng", pose: "present", items: ["Người nói", "Ý bị bóp méo", "Hai lựa chọn ép buộc", "Số đông, chức danh"] },
      lines: [
        L("l1", "det", "That's a fallacy. It sounds convincing but proves nothing. It swaps reasons for:", "Đó là ngụy biện: nghe thuyết phục mà không chứng minh được gì. Nó thay lý do bằng:"),
        L("l2", "det", "The person speaking.", "Người nói."),
        L("l3", "det", "A twisted version of your idea.", "Ý bị bóp méo."),
        L("l4", "det", "Only two choices, or a scary future.", "Hai lựa chọn ép buộc, hay doạ hậu quả."),
        L("l5", "det", "The crowd, or a job title. Today: six common ones, and calm replies.", "Số đông, chức danh. Hôm nay: sáu lỗi hay gặp và cách đáp bình tĩnh."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Các chặng của video", chapters: [
        { label: "Khác lập luận ở đâu", illus: "balance-scale" },
        { label: "Nhắm vào người", illus: "bust-in-silhouette" },
        { label: "Bóp méo ý", illus: "nesting-dolls" },
        { label: "Hai cửa, dốc trượt", illus: "door" },
        { label: "Số đông, chức danh", illus: "busts-in-silhouette" },
        { label: "Cách đáp, lỗi khi mới học", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "Our stops: fallacy versus argument, attacking the person, twisting ideas…", "Các chặng: ngụy biện khác lập luận ở đâu, nhắm vào người, bóp méo ý…"),
        L("l2", null, "…two doors and slippery slopes, crowds and titles, then how to reply.", "…hai cửa và dốc trượt, số đông và chức danh, rồi cách đáp lại."),
      ] },

    // ── Chương 1: Khác lập luận bình thường (p1–p2)
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Khác lập luận ở đâu?" },
      lines: [L("l1", "det", "Part one: how is a fallacy different from a normal argument?", "Phần một: ngụy biện khác lập luận bình thường ở đâu?")] },
    { id: "s05", module: "CMP-01", ref: "p1,p2",
      data: { labels: ["Lập luận", "Ngụy biện"], left: "Đưa lý do và bằng chứng cho kết luận", right: "Thay lý do bằng: chê người nói, bóp méo ý, doạ, số đông, chức danh",
        illus: ["check-mark-button", "warning"] },
      lines: [
        L("l1", null, "A normal argument gives reasons and evidence for its conclusion.", "Lập luận bình thường đưa ra lý do và bằng chứng cho kết luận."),
        L("l2", null, "A fallacy replaces reasons: attacking the speaker, twisting ideas, threats, the crowd, or titles.", "Ngụy biện thay lý do bằng thứ khác: chê người nói, bóp méo ý, doạ hậu quả, số đông, chức danh."),
      ] },
    { id: "s05b", module: "TEXT-04", ref: "p2",
      data: { text: "Bỏ đi giọng điệu, chức danh và cảm xúc, thì còn lại lý do gì?", marks: ["còn lại lý do gì", "giọng điệu"], illus: "thinking-face" },
      lines: [
        L("l1", null, "Ask: without the tone, the title and the feelings, what reason is left?", "Hỏi: bỏ đi giọng điệu, chức danh và cảm xúc, thì còn lại lý do gì?"),
        L("l2", null, "Reasons with evidence: a strong argument, even from a shy speaker. Nothing left: just a loud one.", "Còn lý do có bằng chứng: lập luận mạnh, dù người nói rụt rè. Không còn gì: chỉ là lập luận to tiếng."),
      ] },

    // ── Chương 2: Nhắm vào người (p3–p5)
    { id: "s06", module: "HOST-03", data: { n: 2, of: 7, title: "Nhắm vào người, không vào ý" },
      lines: [L("l1", "det", "Part two: when they aim at you, not your idea.", "Phần hai: khi người ta nhắm vào mình thay vì ý của mình.")] },
    { id: "s07", module: "TEXT-04", ref: "p3",
      data: { text: "Công kích cá nhân: bác ý tưởng bằng cách chê tuổi, nghề, quê quán, thời gian ở đó.", marks: ["chê"], illus: "bust-in-silhouette" },
      lines: [
        L("l1", null, "Personal attack: rejecting an idea by criticising the speaker.", "Công kích cá nhân: bác ý tưởng bằng cách chê người nói."),
        L("l2", null, "Their age, job, hometown, or how long they've lived there.", "Tuổi, nghề, quê quán, thời gian ở đó."),
        L("l3", null, "None of that tells you if the idea is right or wrong.", "Những điều này không cho biết ý tưởng đúng hay sai."),
      ] },
    { id: "s08", module: "SCENE-01", ref: "p4,p5",
      data: { set: "street", label: "Dũng đáp lại",
        actors: [{ id: "dung", side: "left" }, { id: "binh", side: "right", pose: "cross" }] },
      lines: [
        L("l1", null, "Dũng doesn't argue about new or old.", "Dũng không cãi chuyện mới hay cũ."),
        L("l2", "dung", "Yes, I'm new. Is there any part of the idea that doesn't work, so I can rethink it?", "Dạ cháu còn mới thật. Bác thấy lắp đèn có điểm nào chưa ổn để cháu tính lại ạ?", { face: "happy", pose: "explain" }),
        L("l3", "binh", "Well, the electricity bill.", "Thì tiền điện đấy.", { face: "thinking", pose: "think" }),
        L("l4", null, "And the group moves on to how to share the cost.", "Và cả nhóm chuyển sang bàn chuyện chia tiền."),
      ] },
    { id: "s09", module: "TEXT-01", ref: "p5",
      data: { text: "Đừng hỏi ai nói, hãy hỏi nói gì.", illus: "speech-balloon" },
      lines: [L("l1", "det", "Don't ask who said it. Ask what was said.", "Đừng hỏi ai nói, hãy hỏi nói gì.")] },

    // ── Chương 3: Bóp méo ý (p6–p8)
    { id: "s10", module: "HOST-03", data: { n: 3, of: 7, title: "Khi ý mình bị bóp méo" },
      lines: [L("l1", "det", "Part three: when your idea gets twisted.", "Phần ba: khi ý mình bị bóp méo thành ý khác.")] },
    { id: "s11", module: "CMP-01", ref: "p6",
      data: { labels: ["Bạn nói", "Người kia đáp như thể"], left: "“Mình nên bớt”", right: "“Phải cấm hẳn”", illus: ["speech-balloon", "nesting-dolls"] },
      lines: [
        L("l1", null, "The straw man: turn your idea into an extreme version that's easy to knock down.", "Ngụy biện người rơm: biến ý của bạn thành phiên bản cực đoan, dễ đánh đổ hơn."),
        L("l2", null, "Then attack that version.", "Rồi phản bác phiên bản đó."),
        L("l3", null, "You say: we should cut down. They answer as if you said: ban it completely.", "Bạn nói “nên bớt”, người kia đáp như thể bạn nói “phải cấm hẳn”."),
      ] },
    { id: "s12", module: "DLG-01", ref: "p7,p8",
      data: { set: "home", label: "Điện thoại lúc ăn",
        actors: [{ id: "thao", side: "left" }, { id: "bin", side: "center", pose: "phone" }, { id: "hoa", side: "right" }],
        verdict: { ok: false, label: "Cãi lại bản bị bóp méo",
          why: "Câu đáp cãi phiên bản bị bóp méo và chê người đối diện, câu chuyện xa mục tiêu chung." } },
      lines: [
        L("l1", "thao", "Maybe Bin could watch the phone less while eating.", "Hay mình giảm cho bé Bin xem điện thoại lúc ăn ạ.", { pose: "explain", to: "hoa" }),
        L("l2", "hoa", "So you're saying his mum doesn't know how to raise him?", "Vậy là chê mẹ nó không biết dạy con chứ gì?", { face: "stern", react: { thao: "surprised" } }),
        L("l3", "thao", "You always read too much into things. I never said that!", "Cô lúc nào cũng suy diễn, cháu có nói thế đâu!", { face: "stern", pose: "shrug", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "That fights the twisted version, and blames the person.", "Thế là cãi bản bị bóp méo, lại còn chê người đối diện."),
        L("l6", "det", "Let's rewind. Say your real idea again, then invite her view.", "Tua lại nhé. Nói lại ý thật, rồi mời cô góp ý.", { phase: "redo" }),
        L("l7", "thao", "I just hope he can focus on eating. Do you have a good way to help him watch less?", "Ý cháu chỉ mong bé ăn tập trung hơn. Cô có cách nào hay giúp bé bớt xem không ạ?", { phase: "redo", face: "happy", pose: "explain", to: "hoa", react: { hoa: "happy" } }),
      ] },
    { id: "s13", module: "TEXT-04", ref: "p8",
      data: { text: "Bị hiểu sai thì nói lại ý thật, đừng cãi bản bóp méo.", marks: ["nói lại ý thật"], illus: "speech-balloon" },
      lines: [L("l1", "det", "The talk returns to the shared goal. Misunderstood? Restate your real idea. Don't fight the twisted one.", "Câu chuyện quay về mục tiêu chung. Bị hiểu sai thì nói lại ý thật, đừng cãi bản bóp méo.")] },

    // ── Chương 4: Hai lựa chọn, dốc trượt (p9–p12)
    { id: "s14", module: "HOST-03", data: { n: 4, of: 7, title: "Hai cửa, hay bị doạ" },
      lines: [L("l1", "det", "Part four: only two choices, or a scary chain of events.", "Phần bốn: khi chỉ được đưa hai lựa chọn, hay bị doạ “rồi sẽ…”.")] },
    { id: "s15", module: "HOST-02", ref: "p9",
      data: { statement: "“Hoặc chia sẻ bài này, hoặc bạn không thương con”", truth: false,
        why: "Lựa chọn giả: đưa đúng hai khả năng trong khi còn nhiều khả năng khác." },
      lines: [
        L("l1", "det", "Either share this, or you don't love your children. Only two choices? True or false?", "“Hoặc chia sẻ bài này, hoặc bạn không thương con”. Chỉ có hai cách? Đúng hay sai?"),
        L("l2", "det", "False. A false choice hides other options. Gently ask: is there another way?", "Sai. Lựa chọn giả giấu các khả năng khác. Hỏi nhẹ: “Mình còn cách nào khác không nhỉ?”", { face: "stern" }),
      ] },
    { id: "s16", module: "BEAT-04", ref: "p10",
      data: { seconds: 5, prompt: "Bài đăng: “Không chia sẻ là đồng loã với kẻ xấu”, kèm chuyện một quán ăn bị tố. Bạn chỉ có hai cách?" },
      lines: [
        L("l1", null, "A post says: Not sharing makes you an accomplice. It's about a restaurant being accused.", "Bài đăng: “Không chia sẻ là đồng loã với kẻ xấu”, kèm chuyện một quán ăn bị tố."),
        L("l2", null, "You know nothing else. Share now, or ignore evil. Are those really your only two options?", "Bạn chưa biết gì thêm. Chia sẻ ngay, hay làm ngơ cái ác: thật sự chỉ có hai cách?"),
      ] },
    { id: "s17", module: "LIST-10", ref: "p10,p11",
      data: { title: "Cửa thứ ba", stops: [
        { label: "Chờ thêm thông tin", illus: "hourglass-not-done" },
        { label: "Xem phía quán nói gì", illus: "ear" },
        { label: "Rồi mới lên tiếng", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "No. The post hides a third door: wait for more information.", "Không. Bài đăng giấu đi cửa thứ ba: chờ thêm thông tin."),
        L("l2", null, "Hear what the restaurant says.", "Xem phía quán nói gì."),
        L("l3", null, "Then speak. Hasty posts like this are sometimes removed for blaming the wrong people.", "Rồi mới lên tiếng. Những bài tố vội đôi khi bị gỡ vì tố nhầm người."),
        L("l4", "det", "Early sharers may have hurt innocent people. See only two doors? Look for the third.", "Người chia sẻ sớm có thể đã vô tình hại người vô tội. Thấy hai cửa, hãy tìm cửa thứ ba."),
      ] },
    { id: "s18", module: "REL-02", ref: "p12",
      data: { chain: ["Cho con cầm máy tính bỏ túi", "(không chứng minh các bước giữa)", "“Rồi nó quên hết cách tính”"],
        illus: ["abacus", "red-question-mark", "face-screaming-in-fear"] },
      lines: [
        L("l1", null, "The slippery slope: one small step must lead to disaster, with no proof of the steps between.", "Dốc trượt: cho rằng một bước nhỏ chắc chắn dẫn tới thảm hoạ, mà không chứng minh các bước giữa."),
        L("l2", null, "Let the child use a calculator, and they'll forget how to count.", "“Cho con cầm máy tính bỏ túi thì rồi nó quên hết cách tính.”"),
        L("l3", null, "Reply: What would make that happen? Let's try it for a while.", "Đáp: “Điều gì sẽ khiến chuyện đó xảy ra? Mình thử một thời gian xem.”"),
      ] },

    // ── Chương 5: Số đông, chức danh (p13–p16)
    { id: "s19", module: "HOST-03", data: { n: 5, of: 7, title: "Ai cũng nói, chuyên gia nói" },
      lines: [L("l1", "det", "Part five: everyone says so, or the expert says so.", "Phần năm: khi “ai cũng nói vậy” hay “chuyên gia nói vậy”.")] },
    { id: "s20", module: "TEXT-04", ref: "p13",
      data: { text: "Dựa vào số đông: coi việc nhiều người tin, nhiều người dùng là bằng chứng.", marks: ["số đông"], illus: "busts-in-silhouette" },
      lines: [
        L("l1", null, "Appeal to the crowd: treating many believers or users as proof.", "Dựa vào số đông: coi việc nhiều người tin, nhiều người dùng là bằng chứng."),
        L("l2", null, "But many people can be fooled by the same ad, or the same rumour.", "Nhiều người có thể cùng bị một quảng cáo, một tin đồn thuyết phục."),
      ] },
    { id: "s21", module: "RSN-08", ref: "p14,p15",
      data: { beats: [
        { text: "Dưới bài của một tiệm bánh nhỏ, vài chục bình luận “lừa đảo”, “đừng mua”", illus: "speech-balloon" },
        { text: "Một người thấy đông người nói vậy, cũng vào bình luận theo", link: "therefore", illus: "mobile-phone" },
        { text: "Hôm sau chủ tiệm đăng tin nhắn, hoá đơn: chỉ là khách nhận nhầm đơn", link: "but", illus: "receipt" },
        { text: "Nhiều bình luận được xoá dần, có cả bình luận của người đó", link: "therefore", illus: "wastebasket" } ] },
      lines: [
        L("l1", null, "Under a small bakery's post, dozens of comments say scam, don't buy.", "Dưới bài của một tiệm bánh nhỏ, vài chục bình luận “lừa đảo”, “đừng mua”."),
        L("l2", null, "One reader sees so many, and joins in.", "Một người thấy đông người nói vậy, cũng vào bình luận theo."),
        L("l3", null, "Next day, the owner posts the messages and receipt. A customer just got the wrong order.", "Hôm sau chủ tiệm đăng tin nhắn và hoá đơn: chỉ là một khách nhận nhầm đơn."),
        L("l4", null, "Comments disappear one by one, including theirs. Many voices aren't always right.", "Bình luận được xoá dần, có cả của người đó. Đông người nói chưa chắc là đúng."),
      ] },
    { id: "s22", module: "CMP-07", ref: "p16",
      data: { wrong: "Ông ấy là giám đốc, ông ấy nói thế thì đúng.", right: "Có kết quả nào cho thấy điều đó không ạ?", diff: ["là giám đốc", "thì đúng"], note: "Ý kiến chuyên môn đáng nghe, nhưng chức danh không thay được bằng chứng" },
      lines: [
        L("l1", null, "Appeal to authority: a title instead of evidence. He's the director, so he must be right.", "Dựa vào uy quyền: chức danh thay cho bằng chứng. “Ông ấy là giám đốc, nói thế thì đúng.”"),
        L("l2", null, "Expert opinions are worth hearing. But still ask: Are there any results that show this?", "Ý kiến chuyên môn đáng nghe, nhưng vẫn hỏi: “Có kết quả nào cho thấy điều đó không ạ?”"),
      ] },

    // ── Chương 6: Cách đáp (p17–p19)
    { id: "s23", module: "HOST-03", data: { n: 6, of: 7, title: "Nhận ra rồi, đáp thế nào?" },
      lines: [L("l1", "det", "Part six: you spotted a fallacy. How do you reply?", "Phần sáu: nhận ra ngụy biện rồi, nên đáp thế nào?")] },
    { id: "s24", module: "CMP-06", ref: "p17,p18",
      data: { do: ["Nhắc lại đúng ý mình", "Hỏi về lý do hoặc bằng chứng"], dont: ["Chỉ thẳng “Anh đang ngụy biện!”", "Đáp bằng ngụy biện khác, kể lỗi cũ"],
        doIcons: ["speech-balloon", "magnifying-glass-tilted-left"], dontIcons: ["index-pointing-at-the-viewer", "boomerang"] },
      lines: [
        L("l1", null, "No need to say: You're using a fallacy! That turns the talk into win or lose.", "Không cần chỉ thẳng “Anh đang ngụy biện!”. Câu đó biến cuộc nói chuyện thành thắng thua."),
        L("l2", null, "Just two things: restate your idea, then ask for reasons or evidence.", "Chỉ cần hai việc: nhắc lại đúng ý mình, rồi hỏi về lý do hoặc bằng chứng."),
        L("l3", null, "Don't answer a fallacy with another, like bringing up their old mistakes.", "Đừng đáp ngụy biện bằng ngụy biện khác, như kể lại lỗi cũ của người kia."),
        L("l4", null, "Stay calm on the content. People around will see who makes sense.", "Bình tĩnh quay về nội dung, người xung quanh sẽ tự thấy bên nào có lý."),
      ] },
    { id: "s25", module: "LIST-08", ref: "p19",
      data: { title: "Bốn câu mẫu", items: [
        { title: "“Ý em không phải vậy, em chỉ đề xuất…”", detail: "Khi bị bóp méo", illus: "speech-balloon" },
        { title: "“Mình còn phương án nào khác không ạ?”", detail: "Khi bị ép hai lựa chọn", illus: "door" },
        { title: "“Có số liệu nào cho thấy điều đó không ạ?”", detail: "Khi viện số đông, chức danh", illus: "bar-chart" },
        { title: "“Anh thấy phần nào của ý tưởng chưa ổn?”", detail: "Khi bị nhắm vào người", illus: "puzzle-piece" } ] },
      lines: [
        L("l1", null, "That's not what I meant. I'm only suggesting…", "“Ý em không phải vậy, em chỉ đề xuất…”"),
        L("l2", null, "Do we have any other options?", "“Mình còn phương án nào khác không ạ?”"),
        L("l3", null, "Is there any data that shows that?", "“Có số liệu nào cho thấy điều đó không ạ?”"),
        L("l4", null, "Which part of the idea doesn't work for you?", "“Anh thấy phần nào của ý tưởng chưa ổn?”"),
      ] },

    // ── Chương 7: Lỗi khi mới học (p20–p22)
    { id: "s26", module: "HOST-03", data: { n: 7, of: 7, title: "Lỗi hay mắc khi mới học" },
      lines: [L("l1", "det", "Part seven: mistakes people make when they first learn about fallacies.", "Phần bảy: lỗi hay mắc khi mới học về ngụy biện.")] },
    { id: "s27", module: "LIST-04", ref: "p20,p21,p22",
      data: { title: "Ba lỗi của người mới học", items: [
        { text: "Dùng tên ngụy biện để dán nhãn người khác", illus: "label" },
        { text: "Cho rằng lập luận có lỗi thì kết luận sai", illus: "cross-mark" },
        { text: "Chỉ thấy ngụy biện của người khác", illus: "mirror" } ] },
      lines: [
        L("l1", null, "Using fallacy names as weapons to label people. Fix: talk about the content, not the person.", "Dùng tên ngụy biện làm vũ khí dán nhãn người khác. Sửa: nói về nội dung, không nói về người."),
        L("l2", null, "Thinking a conclusion is wrong because the argument has a flaw.", "Cho rằng kết luận sai chỉ vì lập luận có lỗi."),
        L("l3", null, "A weak argument can still reach a true conclusion. Look for better reasons before you reject it.", "Lập luận yếu vẫn có thể dẫn tới kết luận đúng; hãy tìm lý do tốt hơn trước khi gạt đi."),
        L("l4", null, "Only seeing other people's fallacies. Before a sharp comment, check: am I using pressure or the crowd?", "Chỉ thấy lỗi người khác. Trước bình luận gay gắt, xem mình có dựa vào áp lực, số đông không."),
      ] },

    // ── Câu đố và kết
    { id: "s28", module: "QUIZ-01", ref: "questions[16]",
      data: {
        q: "What is the third choice hidden by the post about the restaurant?",
        options: [
          "Going to the restaurant to argue with the owner in person",
          "Waiting for more information and hearing the restaurant's side before speaking",
          "Sharing the post twice so that more people could judge for themselves",
        ],
        correct: 1, countdown: 5, illus: "door",
        why: "Chờ thêm thông tin, nghe phía quán nói gì rồi mới lên tiếng.",
      },
      lines: [
        L("l1", null, "What is the third choice hidden by the post about the restaurant?", "Lựa chọn thứ ba bị bài đăng về quán ăn giấu đi là gì?"),
        L("l2", null, "Waiting for more information and hearing the restaurant's side before speaking.", "Chờ thêm thông tin, nghe phía quán nói gì rồi mới lên tiếng."),
        L("l3", null, "Posts like that are sometimes removed for blaming the wrong people.", "Những bài tố vội đôi khi bị gỡ vì tố nhầm người."),
      ] },
    { id: "s29", module: "END-02", ref: "p5,p8,p11",
      data: { kicker: "Rút ra", illus: "light-bulb",
        points: ["Đừng hỏi ai nói, hãy hỏi nói gì", "Bị hiểu sai thì nói lại ý thật", "Thấy chỉ hai cửa, tìm cửa thứ ba"],
        icons: ["bust-in-silhouette", "speech-balloon", "door"] },
      lines: [
        L("l1", null, "Ask what was said, not who said it.", "Hỏi nói gì, không hỏi ai nói."),
        L("l2", null, "Restate your real idea.", "Bị hiểu sai thì nói lại ý thật."),
        L("l3", null, "Look for a third door. Save the four sample lines today.", "Tìm cửa thứ ba. Hôm nay, lưu lại bốn câu mẫu."),
      ] },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Kéo về lý do" },
      lines: [L("l1", "det", "No need to win. Just bring it back to reasons. Forty questions are waiting.", "Không cần thắng, chỉ cần kéo về lý do. Bốn mươi câu hỏi đang chờ.")] },
  ],
};
