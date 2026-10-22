// Kịch bản video W lần 3 (#110) — "Ăn sáng có thật sự quan trọng?" · chuỗi "Ăn uống lành mạnh hằng ngày"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "is-breakfast-really-important--w01",
  hook: "HOOK-04",
  loop: { open: "s01", close: "s29" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "healthy-eaters", slug: "is-breakfast-really-important", door: "kien-thuc", level: "B1",
    title: "Ăn sáng có thật sự quan trọng?", series: "Ăn uống lành mạnh hằng ngày" },
  format: "W", mode: "text", audio: {},
  notes: "Bài đã đánh lại mã đoạn (#107): mọi ref kiểm theo bài mới. Đổi tên: người tin nhịn sáng để giảm cân (⚖️ p10) → Dũng; người dùng thuốc tiểu đường (❓ p6) → Bác Bình; hàng xóm khoe nhịn sáng (❓ p6) → Bà Tư (vai mới #110, chỉ nói câu khoe của bài); “bạn” chọn bữa sáng ở cổng công ty (🔀 p17) → Thảo; phụ huynh có con đi học (p24) → Bà Tư chuẩn bị cho Bé Bin (vai mới #110; đổi quan hệ con → cháu cho khớp dàn nhân vật). Câu treo s01 được trả lời ở DLG-01 s13 + câu đố questions[9]. Phủ ý: 24/24. Hai DLG-01 (❓ p6, ⚖️ p10). Câu đố cuối questions[11].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p10",
      data: { set: "office", label: "Kế hoạch giảm cân", actors: [{ id: "dung", side: "center" }], props: ["hot-beverage"] },
      lines: [
        L("l1", "dung", "No breakfast from now on. Just black coffee. I'll lose weight for sure!", "Từ nay nhịn sáng, chỉ cà phê đen. Chắc chắn giảm cân!", { face: "happy", pose: "thumb" }),
        L("l2", null, "Many people believe this. But does skipping breakfast really help you lose weight?", "Nhiều người tin vậy. Nhưng nhịn sáng có thật giúp giảm cân?", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ăn sáng: có ích, không thần kỳ", pose: "present", items: ["Có ích, nhưng không phải bữa thần kỳ", "Cả ngày ăn gì mới quyết định", "Trẻ em, lao động nặng, người dùng thuốc: ăn đều"] },
      lines: [
        L("l1", "det", "So, is breakfast really that important?", "Vậy ăn sáng có thật sự quan trọng?"),
        L("l2", "det", "It helps, but it is not a magic meal.", "Có ích, nhưng không phải bữa thần kỳ."),
        L("l3", "det", "For healthy adults, what you eat all day decides.", "Với người lớn khoẻ mạnh, ăn gì cả ngày mới quyết định."),
        L("l4", "det", "Children, heavy workers and people on some medicines should eat it regularly.", "Trẻ em, người lao động nặng, người dùng một số thuốc nên ăn sáng đều."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Bỏ bữa sáng có sao không", "Ai nên ăn đều, bỏ thì sao", "Bữa tốt và bữa để dành", "Bận thì chuẩn bị thế nào"] },
      lines: [
        L("l1", "det", "Our route: is skipping breakfast a problem?", "Lộ trình: bỏ bữa sáng có sao không?"),
        L("l2", "det", "Who should eat it, and what skipping leads to.", "Ai nên ăn đều, và bỏ bữa dẫn tới chuyện gì."),
        L("l3", "det", "Good breakfasts, and ones for now and then.", "Bữa sáng tốt, và bữa để dành thỉnh thoảng."),
        L("l4", "det", "And how to prepare when you're busy.", "Và bận quá thì chuẩn bị thế nào."),
      ] },

    // Chương 1 — Bỏ bữa sáng có sao không?
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Bỏ bữa sáng có sao không?" },
      lines: [L("l1", "det", "Part one: is it bad to skip breakfast?", "Phần một: bỏ bữa sáng có sao không?")] },
    { id: "s05", module: "RSN-03", ref: "p1",
      data: { rule: "Ăn sáng đều thì khoẻ hơn", ruleIllus: "cooking", counter: "Người ăn sáng đều cũng thường ngủ đủ, ít hút thuốc, vận động nhiều", lesson: "Đi cùng nhau chưa chắc là nguyên nhân." },
      lines: [
        L("l2", null, "The most important meal? Studies see regular breakfast eaters are often healthier.", "“Bữa quan trọng nhất”? Nghiên cứu thấy người ăn sáng đều thường khoẻ hơn."),

        L("l3", null, "But they also sleep well, smoke less and exercise more. So it's hard to say breakfast is the cause.", "Nhưng họ cũng ngủ đủ, ít hút thuốc, vận động nhiều: khó nói bữa sáng là nguyên nhân."),
      ] },
    { id: "s05b", module: "CMP-01", ref: "p1",
      data: { labels: ["Có liên quan", "Là nguyên nhân"], left: "Ăn sáng và khoẻ hay đi cùng nhau", right: "Chính bữa sáng tạo ra khác biệt", illus: ["link", "check-mark-button"] },
      lines: [
        L("l1", null, "A link means they appear together.", "Liên quan là hay đi cùng nhau."),
        L("l2", null, "Proof means breakfast itself makes the difference.", "Chứng minh là chính bữa sáng tạo ra khác biệt."),
      ] },
    { id: "s06", module: "CMP-09", ref: "p2",
      data: { myth: "Ăn sáng giúp giảm cân, bỏ bữa sáng thì tăng cân", fact: "Thử nghiệm có đối chứng ở người lớn không cho thấy điều đó chắc chắn", illusMyth: "cooking", illusFact: "test-tube", source: "Sievert và cs., BMJ 2019" },
      lines: [
        L("l1", null, "Does breakfast make you lose weight, or skipping it make you gain? Controlled trials in adults say: not clearly.", "Ăn sáng giúp giảm cân, bỏ sáng làm tăng cân? Thử nghiệm ở người lớn: không chắc chắn."),
        L("l2", null, "For healthy adults, breakfast is a good choice, not a must.", "Với người lớn khoẻ, ăn sáng là lựa chọn tốt, không bắt buộc."),
      ] },
    { id: "s06b", module: "OPEN-06", ref: "p2",
      data: { quote: "Ăn đủ bữa sáng, trưa, tối, không bỏ bữa.", highlight: "không bỏ bữa", who: "Bộ Y tế", source: "10 lời khuyên dinh dưỡng hợp lý đến năm 2030 (QĐ 3594/QĐ-BYT)", label: "Lời khuyên chính thức", illus: "classical-building" },
      lines: [L("l1", null, "Still, the Ministry of Health advises: eat breakfast, lunch and dinner, and don't skip meals.", "Dù vậy, Bộ Y tế vẫn khuyên: ăn đủ bữa sáng, trưa, tối, không bỏ bữa.")] },

    { id: "s07", module: "TEXT-02", ref: "p3",
      data: { text: "Ăn gì trong cả ngày mới là phần lớn.", keywords: ["cả ngày"], illus: "spiral-calendar" },
      lines: [
        L("l1", null, "What decides your health is the quality of your whole day's food.", "Điều quyết định sức khoẻ là chất lượng ăn uống cả ngày."),
        L("l2", null, "A sugary breakfast plus junk food all day is not healthy, just because it's breakfast.", "Bữa sáng ngọt, cả ngày đồ ăn vặt thì không khoẻ chỉ vì có ăn sáng."),
      ] },

    // Chương 2 — Ai nên ăn sáng đều?
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Ai thật sự nên ăn sáng đều?" },
      lines: [L("l1", "det", "Part two: who really should eat breakfast regularly?", "Phần hai: ai thật sự nên ăn sáng đều đặn?")] },
    { id: "s09", module: "LIST-02", ref: "p4",
      data: { title: "Nên ăn sáng đều đặn", illus: "cooking",
        items: [{ icon: "child", illus: "child", text: "Trẻ em, thanh thiếu niên đang lớn" }, { icon: "construction-worker", illus: "construction-worker", text: "Lao động chân tay, vận động viên" },
          { icon: "pill", illus: "pill", text: "Người có bệnh cần ăn đúng giờ" }, { icon: "pregnant-woman", illus: "pregnant-woman", text: "Phụ nữ mang thai: chia nhỏ bữa" },
          { icon: "dizzy", illus: "face-with-spiral-eyes", text: "Người dễ mệt, chóng mặt khi đói" }] },
      lines: [
        L("l1", null, "Children and teenagers who are growing need energy for school.", "Trẻ em, thanh thiếu niên đang lớn cần năng lượng đi học."),
        L("l2", null, "Manual workers and athletes. Heavy lifting from early morning? Eat breakfast.", "Lao động chân tay, vận động viên. Bê vác từ sáng sớm? Hãy ăn sáng."),
        L("l3", null, "People whose illness needs meals on time. Pregnant women, often told to eat small meals.", "Người có bệnh cần ăn đúng giờ. Phụ nữ mang thai, thường chia nhỏ bữa."),
        L("l4", null, "And people who get tired or dizzy when hungry.", "Và người dễ mệt, chóng mặt khi đói."),
      ] },
    { id: "s10", module: "DLG-01", ref: "p5,p6,p7",
      data: { set: "home", label: "Lời khoe của hàng xóm", actors: [{ id: "tu", side: "left", pose: "hold" }, { id: "binh", side: "farright" }],
        verdict: { ok: false, label: "Đang dùng thuốc mà tự bỏ bữa", why: "Thuốc vẫn hạ đường huyết khi bụng trống: có thể run tay, vã mồ hôi, chóng mặt.",
          rule: "Đang dùng thuốc, đổi giờ ăn phải hỏi bác sĩ" } },
      lines: [
        L("l1", "tu", "I skip breakfast now. My blood sugar looks great!", "Tôi nhịn ăn sáng, đường huyết đẹp lắm!", { face: "happy", pose: "explain", to: "binh" }),
        L("l2", "binh", "Then I'll do the same, even with my insulin.", "Vậy tôi dùng insulin cũng nhịn theo.", { face: "happy", pose: "thumb", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "The medicine keeps lowering blood sugar, even on an empty stomach. It can drop too low: shaking, sweating, dizziness.", "Thuốc vẫn hạ đường huyết dù bụng trống, có thể xuống quá thấp: run tay, vã mồ hôi, chóng mặt."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "binh", "I won't change my meals on my own. I'll ask my doctor for a meal plan with my medicine.", "Tôi không tự đổi bữa. Tôi sẽ hỏi bác sĩ lịch ăn hợp với thuốc.", { phase: "redo", face: "thinking", pose: "think" }),
        L("l7", "det", "Right. If you take medicine, ask your doctor before changing when you eat.", "Đúng. Đang dùng thuốc, đổi giờ ăn phải hỏi bác sĩ.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 3 — Bỏ bữa sáng dẫn tới gì?
    { id: "s11", module: "HOST-03", data: { n: 3, of: 6, title: "Bỏ bữa sáng thường dẫn tới gì?" },
      lines: [L("l1", "det", "Part three: what often happens when you skip it?", "Phần ba: bỏ bữa sáng thường dẫn tới chuyện gì?")] },
    { id: "s12", module: "REL-02", ref: "p8",
      data: { chain: ["Bỏ bữa sáng", "Giữa buổi đói cồn cào, ăn bánh kẹo, trà sữa", "Trưa ăn quá nhiều, khó tập trung, dễ cáu"], illus: ["hot-beverage", "candy", "angry-face"] },
      lines: [
        L("l1", null, "For many people, skipping breakfast means strong hunger mid morning.", "Với nhiều người, bỏ sáng là giữa buổi đói cồn cào."),
        L("l2", null, "Then sweets and milk tea, and too much food at lunch.", "Rồi ăn bánh kẹo, trà sữa, và ăn quá nhiều bữa trưa."),
        L("l3", null, "Grumpy and unfocused before lunch? A small breakfast with protein may help.", "Hay cáu, khó tập trung trước trưa? Thử bữa sáng nhỏ có đạm."),
      ] },
    { id: "s13", module: "CMP-03", ref: "p9",
      data: { title: "Cùng bỏ bữa sáng", illus: "fork-and-knife-with-plate",
        a: { label: "Người thứ nhất", do: "Bỏ sáng, trưa và tối vẫn ăn đầy đủ, cân bằng", result: "Thấy khoẻ: không nhất thiết là vấn đề", illus: "green-salad" },
        b: { label: "Người thứ hai", do: "Bỏ sáng rồi bù bằng đồ nhiều đường, nhiều dầu mỡ", result: "Điều đáng lo hơn", illus: "doughnut" } },
      lines: [
        L("l1", null, "Skip breakfast, but eat a full, balanced lunch and dinner, and feel well? Not necessarily a problem.", "Bỏ sáng mà trưa, tối đầy đủ, cân bằng, thấy khoẻ: không nhất thiết là vấn đề."),
        L("l2", null, "The bigger worry: skipping it, then filling up on sugary, oily food.", "Đáng lo hơn: bỏ sáng rồi bù bằng đồ nhiều đường, dầu mỡ."),
      ] },
    { id: "s14", module: "DLG-01", ref: "p10,p11",
      data: { set: "office", label: "Kế hoạch giảm cân", actors: [{ id: "dung", side: "center" }],
        verdict: { ok: false, label: "Nhịn sáng để giảm cân", why: "Gần trưa đói cồn cào, ăn suất thật đầy, chiều thêm bánh ngọt: phần bớt bị bù lại." } },
      lines: [
        L("l1", "dung", "Black coffee only. Skipping breakfast will make me lose weight.", "Chỉ cà phê đen. Nhịn sáng là giảm cân thôi.", { face: "happy", pose: "thumb" }),
        L("l2", "dung", "So hungry... A big plate of rice with fried chicken! And a sweet cake later.", "Đói quá… Một suất cơm thật đầy kèm gà rán! Chiều thêm gói bánh ngọt.", { face: "sad", pose: "shrug", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Trials don't show that skipping breakfast clearly helps you lose weight. Weight depends on the whole day.", "Thử nghiệm không cho thấy nhịn sáng chắc chắn giảm cân. Cân nặng tính cả ngày."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "A small breakfast with protein: a boiled egg and a sweet potato.", "Bữa sáng nhỏ có đạm: trứng luộc và khoai lang.", { phase: "redo", face: "happy", pose: "explain" }),
        L("l7", "det", "Then lunch is lighter. Skip breakfast and overeat at lunch, and you save nothing.", "Trưa sẽ nhẹ hơn. Nhịn sáng mà ăn bù trưa, chẳng bớt được gì.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s15", module: "QUIZ-01", ref: "questions[9]",
      data: {
        q: "Why does skipping breakfast often fail to help people lose weight?",
        options: [
          "Black coffee contains so much sugar that it replaces the missing meal",
          "People forget to weigh themselves, so they never notice what happened",
          "Hunger builds up, so people eat a huge lunch and sweet snacks later",
        ],
        correct: 2, countdown: 5, illus: "hot-beverage",
        why: "Gần trưa đói cồn cào, ăn bữa thật đầy, chiều thêm bánh ngọt: phần bớt bị bù lại.",
      },
      lines: [
        L("l1", null, "Why does skipping breakfast often fail to help people lose weight?", "Vì sao bỏ bữa sáng thường không giúp người ta giảm cân?"),
        L("l2", null, "Hunger builds up, so people eat a huge lunch and sweet snacks later.", "Đói dồn lại, nên trưa ăn thật nhiều, chiều thêm đồ ngọt."),
      ],
      beats: { after: 500 } },

    // Chương 4 — Bữa sáng tốt kiểu Việt
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Bữa sáng tốt kiểu Việt" },
      lines: [L("l1", "det", "Part four: what is in a good Vietnamese breakfast?", "Phần bốn: bữa sáng tốt kiểu Việt gồm gì?")] },
    { id: "s17", module: "LIST-07", ref: "p12",
      data: { title: "Một bữa sáng tốt có ba phần", items: [
        { text: "Tinh bột: nguyên hạt, khoai, ngô, xôi vừa", illus: "roasted-sweet-potato" },
        { text: "Đạm: trứng, sữa, sữa chua không đường, đậu phụ, thịt nạc", illus: "egg" },
        { text: "Rau hoặc trái cây", illus: "banana" } ] },
      lines: [
        L("l1", null, "Three parts. A starch: whole grains, sweet potato, corn, or a moderate portion of sticky rice.", "Ba phần. Tinh bột: nguyên hạt, khoai, ngô, xôi lượng vừa."),
        L("l2", null, "A protein: egg, milk, unsweetened yogurt, tofu, lean meat.", "Đạm: trứng, sữa, sữa chua không đường, đậu phụ, thịt nạc."),
        L("l3", null, "And vegetables or fruit. Sweet potato, egg and banana: all three. A sweet bun: mostly sugar and flour.", "Và rau hoặc trái cây. Khoai, trứng, chuối: đủ ba. Bánh mì ngọt: chủ yếu đường, bột."),
      ] },
    { id: "s18", module: "LIST-05", ref: "p13",
      data: { title: "Bữa sáng kiểu Việt cân bằng", items: ["Bánh mì trứng thêm dưa leo, cà chua", "Phở, bún nhiều rau; bớt nước dùng để giảm muối", "Xôi đậu xanh vừa phải, sữa đậu nành không đường", "Khoai lang luộc, một quả trứng, một quả chuối"], illus: "steaming-bowl" },
      lines: [
        L("l1", null, "Banh mi with egg, cucumber and tomato.", "Bánh mì trứng thêm dưa leo, cà chua."),
        L("l2", null, "Pho or bun with plenty of herbs. Less broth if you want less salt.", "Phở, bún nhiều rau. Bớt nước dùng nếu muốn giảm muối."),
        L("l3", null, "Love sticky rice? A moderate portion with mung beans, and unsweetened soy milk.", "Mê xôi? Xôi đậu xanh vừa phải, kèm sữa đậu nành không đường."),
        L("l4", null, "Or a boiled sweet potato, an egg and a banana.", "Hoặc khoai lang luộc, một quả trứng, một quả chuối."),
      ] },
    { id: "s19", module: "OPEN-10", ref: "p14",
      data: { whatIs: "Chỉ cốc cà phê sữa đá thay cả bữa", couldBe: "Cà phê kèm ổ bánh mì trứng nhiều rau", illus: ["cup-with-straw", "sandwich"] },
      lines: [
        L("l1", null, "Iced milk coffee alone: lots of sugar, few nutrients.", "Chỉ cốc cà phê sữa đá: nhiều đường, thiếu dưỡng chất."),
        L("l2", null, "The same coffee with an egg banh mi and vegetables: a full breakfast. No need to give up your coffee.", "Cùng cốc đó kèm bánh mì trứng nhiều rau: đủ ba phần. Không cần bỏ cà phê."),
      ] },

    // Chương 5 — Bữa để dành thỉnh thoảng
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Bữa sáng để dành thỉnh thoảng" },
      lines: [L("l1", "det", "Part five: breakfasts for now and then.", "Phần năm: bữa sáng nên để dành cho thỉnh thoảng.")] },
    { id: "s21", module: "LIST-02", ref: "p15",
      data: { title: "Để dành cho thỉnh thoảng", illus: "doughnut",
        items: [{ icon: "cupcake", illus: "cupcake", text: "Bánh ngọt kèm trà sữa" }, { icon: "doughnut", illus: "doughnut", text: "Quẩy, bánh rán nhiều dầu" },
          { icon: "steaming-bowl", illus: "steaming-bowl", text: "Mì gói ăn thường xuyên" }, { icon: "cup-with-straw", illus: "cup-with-straw", text: "Chỉ cà phê sữa đá thay bữa" }] },
      lines: [
        L("l1", null, "Sweet buns with milk tea: lots of sugar, little protein, hungry again soon.", "Bánh ngọt kèm trà sữa: nhiều đường, ít đạm, nhanh đói lại."),
        L("l2", null, "Fried dough, oily cakes.", "Đồ chiên nhiều dầu như quẩy, bánh rán."),
        L("l3", null, "Instant noodles often: lots of salt, little protein or vegetables.", "Mì gói ăn thường xuyên: nhiều muối, ít rau và đạm."),
        L("l4", null, "And iced milk coffee instead of a meal.", "Và chỉ cà phê sữa đá thay bữa."),
      ] },
    { id: "s22", module: "HOST-02", ref: "p16",
      data: { statement: "Thỉnh thoảng ăn bánh mì ngọt buổi sáng là sai", truth: false, why: "Thỉnh thoảng không sao. Điều quan trọng là đừng biến nó thành thói quen hằng ngày." },
      lines: [
        L("l1", "det", "Eating a sweet bun for breakfast sometimes is wrong. True or false?", "Thỉnh thoảng ăn bánh ngọt buổi sáng là sai. Đúng hay sai?"),
        L("l2", "det", "False. Now and then is fine. Just don't make it a daily habit.", "Sai. Thỉnh thoảng không sao, miễn đừng thành thói quen hằng ngày.", { face: "wink" }),
      ] },
    { id: "s23", module: "SCENE-03", ref: "p17,p18",
      data: { set: "office", actors: [{ id: "thao", side: "right" }],
        left: { label: "Bánh bông lan, trà sữa", ok: false }, right: { label: "Sữa chua, chuối, hạt", ok: true } },
      lines: [
        L("a1", "thao", "Seven o'clock, no time. Sponge cake and milk tea in the lift.", "Bảy giờ, vội quá. Bánh bông lan, trà sữa ăn trong thang máy.", { phase: "a", face: "happy" }),
        L("a2", "thao", "Mid morning and I'm hungry again. Any sweets in my drawer?", "Chưa giữa buổi đã đói. Ngăn kéo còn kẹo không nhỉ?", { phase: "a", face: "sad", pose: "shrug" }),
        L("b1", "thao", "Unsweetened yogurt, a banana and some nuts from my desk.", "Sữa chua không đường, quả chuối, nắm hạt để sẵn ở bàn.", { phase: "b", pose: "explain" }),
        L("b2", "thao", "Just as fast. Protein, fibre and good fat, so I stay full longer.", "Cũng nhanh vậy. Có đạm, chất xơ, chất béo tốt nên no lâu hơn.", { phase: "b", face: "happy", pose: "thumb" }),
        L("b3", null, "A quick breakfast does not have to be a sweet one.", "Nhanh không có nghĩa là phải ngọt."),
      ] },

    // Chương 6 — Bận thì chuẩn bị thế nào?
    { id: "s24", module: "HOST-03", data: { n: 6, of: 6, title: "Bận quá thì chuẩn bị thế nào?" },
      lines: [L("l1", "det", "Last part: too busy? Here is how to prepare.", "Phần cuối: bận quá thì chuẩn bị thế nào?")] },
    { id: "s25", module: "LIST-08", ref: "p19",
      data: { title: "Ba cách cho người bận", items: [
        { title: "Chuẩn bị từ tối", detail: "Luộc trứng, khoai lang; ngâm yến mạch với sữa", illus: "egg" },
        { title: "Trái cây ở bàn làm việc", detail: "Chuối, táo dễ ăn", illus: "red-apple" },
        { title: "Ăn hàng thì chọn kỹ", detail: "Có rau và đạm, hạn chế chiên rán", illus: "sandwich" }] },
      lines: [
        L("l1", null, "Prepare the night before: boil eggs and sweet potatoes, or soak oats in milk.", "Chuẩn bị từ tối: luộc trứng, khoai lang, hoặc ngâm yến mạch với sữa."),
        L("l2", null, "Keep easy fruit like bananas and apples on your desk.", "Để sẵn chuối, táo ở bàn làm việc."),
        L("l3", null, "Buying on the street? Choose dishes with vegetables and protein, and fewer fried ones.", "Ăn hàng thì chọn món có rau và đạm, hạn chế chiên rán."),
      ] },
    { id: "s26", module: "LIST-06", ref: "p20,p21",
      data: { title: "Bữa sáng năm phút, chuẩn bị từ tối", steps: [
        { text: "Tối: luộc hai quả trứng, hấp một củ khoai lang", illus: "egg" },
        { text: "Để nguội, cho vào hộp, cất tủ lạnh", illus: "takeout-box" },
        { text: "Để sẵn một quả chuối cạnh túi xách", illus: "banana" },
        { text: "Sáng ra, hâm nóng, ngồi ăn năm phút", illus: "chair" } ] },
      lines: [
        L("l1", null, "A five-minute breakfast. After dinner, boil two eggs and steam a sweet potato. About fifteen minutes.", "Bữa sáng năm phút. Sau bữa tối, luộc hai trứng, hấp củ khoai, chừng mười lăm phút."),
        L("l2", null, "Let them cool, put them in a box with a lid, and into the fridge.", "Để nguội, cho vào hộp có nắp, cất tủ lạnh."),
        L("l3", null, "Put a banana next to your bag.", "Để sẵn quả chuối cạnh túi xách."),
        L("l4", null, "In the morning, warm it up if you like, and eat in five minutes. The quickest breakfast is the one you made last night.", "Sáng hâm nóng nếu muốn, ăn trong năm phút. Bữa nhanh nhất là bữa chuẩn bị từ tối."),
      ] },
    { id: "s27", module: "CMP-06", ref: "p22,p23",
      data: { do: ["Ngồi xuống ăn chậm vài phút", "Ăn trong 1–2 giờ sau khi dậy", "Thuốc uống cùng bữa: theo giờ bác sĩ"], dont: ["Vừa đi xe vừa ăn"], doIcons: ["chair", "alarm-clock", "pill"], dontIcons: ["motor-scooter"] },
      lines: [
        L("l1", null, "Sit down and eat slowly for a few minutes, not on your motorbike.", "Ngồi xuống ăn chậm vài phút, đừng vừa đi xe vừa ăn."),
        L("l2", null, "You notice when you are full, and it is safer in traffic.", "Ăn chậm biết mình đã no, lại an toàn khi đi đường."),
        L("l3", null, "No fixed breakfast time. Many people eat within one or two hours of waking.", "Không có giờ ăn sáng bắt buộc; nhiều người ăn trong 1–2 giờ sau khi dậy."),
        L("l4", null, "Medicine to take with food? Follow your doctor's timing.", "Thuốc cần uống cùng bữa? Theo giờ bác sĩ dặn."),
      ] },
    { id: "s28", module: "SCENE-01", ref: "p24",
      data: { set: "kitchen", label: "Tối hôm trước", actors: [{ id: "tu", side: "left", pose: "hold" }, { id: "bin", side: "center" }], props: ["egg", "glass-of-milk", "banana"] },
      lines: [
        L("l1", "bin", "Grandma, can I buy a sweet cake at the school gate tomorrow?", "Bà ơi, mai cháu mua bánh ngọt ở cổng trường nhé?", { face: "happy", to: "tu" }),
        L("l2", "tu", "I made your breakfast tonight: an egg, a glass of milk and some fruit.", "Bà chuẩn bị từ tối rồi: một quả trứng, cốc sữa, ít trái cây.", { face: "happy", pose: "give", to: "bin", react: { bin: "happy" } }),
        L("l3", null, "School children need a regular breakfast. Prepared the night before, nobody has to rush for sweets.", "Trẻ đi học cần ăn sáng đều. Chuẩn bị từ tối, cả nhà khỏi vội mua đồ ngọt."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s29", module: "END-02", ref: "outro",
      data: { points: ["Ăn sáng có ích, không phải phép màu", "Tinh bột, đạm, rau quả", "Dùng thuốc: hỏi bác sĩ trước khi đổi giờ ăn"], icons: ["cooking", "banana", "pill"] },
      lines: [
        L("l1", null, "Breakfast is not magic.", "Ăn sáng không phải phép màu."),
        L("l2", null, "But starch, protein and fruit or vegetables make the morning easier for many people.", "Nhưng tinh bột, đạm, rau quả giúp nhiều người qua buổi sáng nhẹ nhàng hơn."),
        L("l3", null, "On medicine? Ask your doctor before changing meal times.", "Đang dùng thuốc? Hỏi bác sĩ trước khi đổi giờ ăn."),
      ] },
    { id: "s30", module: "QUIZ-01", ref: "questions[11]",
      data: {
        q: "What three parts make up a good breakfast?",
        options: [
          "A starch, a protein food, and some vegetables or fruit",
          "A sweet cake, a sweet drink, and a piece of candy for energy",
          "Only a large coffee, because caffeine replaces every other nutrient",
        ],
        correct: 0, countdown: 5, illus: "cooking",
        why: "Tinh bột, chất đạm, rau hoặc trái cây giúp no lâu và đủ chất.",
      },
      lines: [
        L("l1", null, "What three parts make up a good breakfast?", "Một bữa sáng tốt gồm ba phần nào?"),
        L("l2", null, "A starch, a protein food, and some vegetables or fruit.", "Tinh bột, chất đạm, và rau hoặc trái cây."),
        L("l3", null, "Together they keep you full longer.", "Ba phần này giúp no lâu và đủ chất."),
      ],
      beats: { after: 600 } },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu về bữa sáng", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Tonight, boil two eggs for tomorrow. Then try the forty questions below.", "Tối nay luộc sẵn hai quả trứng. Rồi thử bốn mươi câu bên dưới nhé.")] },
  ],
};
