// Kịch bản video W lần 3 (#110) — "Đọc nhãn dinh dưỡng trên bao bì" · chuỗi "Ăn uống lành mạnh hằng ngày"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-read-a-nutrition-label--w01",
  hook: "HOOK-13",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "healthy-eaters", slug: "how-to-read-a-nutrition-label", door: "kien-thuc", level: "B1",
    title: "Đọc nhãn dinh dưỡng trên bao bì", series: "Ăn uống lành mạnh hằng ngày" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: người chọn quà cho bạn dị ứng đậu phộng (⚖️ p19) → Thảo (người bạn dị ứng không xuất hiện); người chọn gói hạt sấy (❓ p4) và người ăn mì khuya tăng ca (🧪 p12) → Dũng; người chọn ngũ cốc ăn sáng “cho con” (🔀 p22) → Bác Bình chọn cho Bé Bin (vai mới #110: cháu trong nhà; đổi quan hệ con → cháu cho khớp dàn nhân vật). Câu treo s01 (dòng chữ nhỏ nói gì?) được trả lời ở DLG-01 s27 (chương 5). Số 1.800 mg natri là giả sử của bài (🧪 p12). Phủ ý: 25/25. Hai DLG-01 (❓ p4, ⚖️ p19). Câu đố cuối questions[14].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p19",
      data: { set: "shop", label: "Chọn quà", actors: [{ id: "thao", side: "right" }], props: ["chocolate-bar", "wrapped-gift"] },
      lines: [
        L("l1", "thao", "No nuts in the picture. Perfect for my friend with a peanut allergy!", "Ảnh hộp không thấy hạt nào. Hợp quà cho bạn dị ứng đậu phộng!", { face: "happy", pose: "give" }),
        L("l2", null, "But on the back, there's one tiny line in English. What does it say?", "Nhưng mặt sau có một dòng chữ nhỏ bằng tiếng Anh. Nó nói gì?", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Đọc nhãn trong một phút", pose: "present", items: ["Khẩu phần", "Năng lượng", "Muối, đường, chất béo", "%DV để so", "Thành phần"] },
      lines: [
        L("l1", "det", "How do you pick a snack in one minute? Five steps. Serving size first.", "Chọn gói đồ ăn trong một phút? Năm bước. Trước hết: khẩu phần."),
        L("l2", "det", "Then energy.", "Rồi năng lượng."),
        L("l3", "det", "Salt, sugar and fat.", "Muối, đường, chất béo."),
        L("l4", "det", "Daily value percent, to compare.", "Phần trăm giá trị hằng ngày để so."),
        L("l5", "det", "And the ingredients list.", "Và danh sách thành phần."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Khẩu phần, năng lượng", "Muối, đường, chất béo, %DV", "Thành phần, dòng dị ứng", "Chữ to mặt trước, danh sách mang theo"] },
      lines: [
        L("l1", "det", "Our route: serving size and energy.", "Lộ trình: khẩu phần và năng lượng."),
        L("l2", "det", "Salt, sugar, fat, and the percent column.", "Muối, đường, chất béo, cột phần trăm."),
        L("l3", "det", "The ingredients and the allergy line.", "Thành phần và dòng dị ứng."),
        L("l4", "det", "Big words on the front, and a one-minute checklist.", "Chữ to mặt trước, và danh sách một phút."),
      ] },

    // Chương 1 — Khẩu phần
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Nhìn khẩu phần trước" },
      lines: [L("l1", "det", "Part one: where to look first.", "Phần một: nhìn vào đâu trước?")] },
    { id: "s05", module: "TEXT-04", ref: "p1",
      data: { text: "Mọi con số thường tính cho một khẩu phần, hoặc cho 100 gam, 100 ml.", marks: ["một khẩu phần"], illus: "magnifying-glass-tilted-left" },
      lines: [
        L("l1", null, "Every number on the table is usually for one serving, or for one hundred grams or millilitres.", "Mọi con số thường tính cho một khẩu phần, hoặc 100 g, 100 ml."),
        L("l2", null, "This is where people make the most mistakes.", "Đây là chỗ nhiều người nhầm nhất."),
      ] },
    { id: "s06", module: "NUM-11", ref: "p2",
      data: { title: "Ăn hết cả gói là bao nhiêu?", illus: "cookie",
        steps: [{ expr: "Khẩu phần (Serving size)", result: "30 g" }, { expr: "Cả gói 90 g", op: "÷", result: "3 khẩu phần" }, { expr: "Ăn hết cả gói", op: "→", result: "× 3 mọi con số" }],
        source: "FDA, How to Understand and Use the Nutrition Facts Label" },
      lines: [
        L("l1", null, "Find the lines serving size, and servings per container.", "Tìm dòng Serving size và Servings per container."),
        L("l2", null, "A biscuit pack says one serving is thirty grams. The whole pack is ninety grams.", "Gói bánh ghi khẩu phần 30 g, cả gói nặng 90 g."),
        L("l3", null, "Eat it all, and you get three times every number: energy, sugar, salt.", "Ăn hết là gấp ba mọi con số: năng lượng, đường, muối."),
      ] },
    { id: "s07", module: "CMP-01", ref: "p3",
      data: { labels: ["So theo khẩu phần", "So theo 100 g"], left: "Mỗi hãng tự quy định, có thể khác nhau", right: "Như nhau cho mọi gói: so công bằng", illus: ["cookie", "balance-scale"] },
      lines: [
        L("l1", null, "Comparing two brands? Each brand chooses its own serving size.", "So hai hãng? Mỗi hãng tự quy định khẩu phần."),
        L("l2", null, "So use the per hundred gram column, if there is one. It is the same for all.", "Nên dùng cột “trên 100 g” nếu có. Nó như nhau cho mọi gói."),
      ] },
    { id: "s08", module: "DLG-01", ref: "p4,p5",
      data: { set: "office", label: "Đồ ăn vặt buổi chiều", actors: [{ id: "dung", side: "left" }],
        verdict: { ok: false, label: "Tin con số mà không xem khẩu phần", why: "Con số chỉ cho một khẩu phần; cả gói có bốn khẩu phần, ăn hết là gấp bốn." } },
      lines: [
        L("l1", "dung", "These dried nuts have half the energy of the biscuits next to them.", "Hạt sấy chỉ bằng nửa năng lượng gói bánh bên cạnh.", { face: "thinking", pose: "think" }),
        L("l2", "dung", "Great, I'll eat the whole pack this afternoon!", "Tuyệt, chiều nay ăn hết cả gói luôn!", { face: "happy", pose: "thumb", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "That number is for one serving. The pack has four. Eat it all, and it's four times as much.", "Con số đó cho một khẩu phần. Gói có bốn, ăn hết là gấp bốn."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "Let me compare the per hundred gram column on both packs.", "Để mình so cột 100 gam của cả hai gói đã.", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l7", "det", "Yes. Check the serving size first, and only then trust the numbers.", "Đúng. Nhìn khẩu phần trước, rồi mới tin con số.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 2 — Năng lượng
    { id: "s09", module: "HOST-03", data: { n: 2, of: 7, title: "Con số năng lượng" },
      lines: [L("l1", "det", "Part two: what does the energy number tell you?", "Phần hai: con số năng lượng nói lên điều gì?")] },
    { id: "s10", module: "HOST-02", ref: "p6",
      data: { statement: "So thẳng số kcal của gói này với số kJ của gói kia", truth: false, why: "Hai đơn vị khác nhau: 1 kcal xấp xỉ 4,2 kJ. Phải đổi cùng đơn vị rồi mới so." },
      lines: [
        L("l1", "det", "Energy is shown in kcal or kJ. Can you compare kcal on one pack with kJ on another? True or false?", "Năng lượng ghi bằng kcal hoặc kJ. So kcal gói này với kJ gói kia được không?"),
        L("l2", "det", "False. One kcal is about four point two kJ. Use the same unit first.", "Sai. 1 kcal xấp xỉ 4,2 kJ. Đổi cùng đơn vị rồi mới so.", { face: "stern" }),
      ] },
    { id: "s11", module: "CMP-01", ref: "p7",
      data: { labels: ["Một nắm hạt", "Một chai nước ngọt"], left: "Nhiều năng lượng, nhưng có chất béo tốt và chất xơ", right: "Năng lượng gần như chỉ đến từ đường", illus: ["peanuts", "cup-with-straw"] },
      lines: [
        L("l1", null, "Energy shows how rich a food is. But it is not everything.", "Năng lượng cho biết món “đậm” đến đâu, nhưng không phải tất cả."),
        L("l2", null, "A handful of nuts is high in energy, but brings healthy fats and fibre.", "Nắm hạt nhiều năng lượng, nhưng có chất béo tốt và chất xơ."),
        L("l3", null, "A bottle of soda gets its energy almost only from sugar.", "Chai nước ngọt: năng lượng gần như chỉ từ đường."),
      ] },

    // Chương 3 — Muối, đường, chất béo
    { id: "s12", module: "HOST-03", data: { n: 3, of: 7, title: "Muối, đường, chất béo" },
      lines: [L("l1", "det", "Part three: salt, sugar and fat.", "Phần ba: muối, đường, chất béo đọc thế nào?")] },
    { id: "s13", module: "TEXT-06", ref: "p8",
      data: { term: "sodium", ipa: "/ˈsəʊdiəm/", pos: "danh từ", meaning: "Natri. Nhân natri với khoảng 2,5 là ra lượng muối", example: "1,000 mg sodium is about 2.5 g salt.", illus: "salt" },
      lines: [
        L("l1", null, "Labels usually show sodium, the main part of salt. Multiply it by about two and a half.", "Nhãn thường ghi natri, phần chính của muối. Nhân với khoảng 2,5."),
        L("l2", null, "One thousand milligrams of sodium is about two and a half grams of salt.", "1.000 mg natri ≈ 2,5 g muối."),
      ] },
    { id: "s13b", module: "TEXT-01", ref: "p8",
      data: { text: "WHO: người lớn ăn dưới 5 g muối mỗi ngày.", illus: "salt" },
      lines: [L("l1", null, "The WHO advises adults to eat less than five grams of salt a day.", "WHO khuyên người lớn ăn dưới 5 g muối mỗi ngày.")] },

    { id: "s14", module: "NUM-11", ref: "p12",
      data: { title: "Một gói mì có bao nhiêu muối?", illus: "steaming-bowl",
        steps: [{ expr: "Natri trên nhãn: 1.800 mg", result: "giả sử, cả gói" }, { expr: "1.800 mg × 2,5", result: "≈ 4,5 g muối" }, { expr: "So với mức WHO cả ngày", op: "→", result: "dưới 5 g" }],
        source: "WHO, Sodium reduction; Food Standards Scotland, Salt" },
      lines: [
        L("l1", null, "Let's try it on instant noodles, before a late night at work. Say the label shows eighteen hundred milligrams of sodium.", "Thử với gói mì trước bữa khuya tăng ca. Giả sử nhãn ghi 1.800 mg natri."),
        L("l2", null, "Times two and a half: about four and a half grams of salt.", "Nhân 2,5: khoảng 4,5 g muối."),
        L("l3", null, "The daily limit is under five grams. One pack is already close to a whole day.", "Mức cả ngày là dưới 5 g. Một gói đã gần chạm mức cả ngày."),
      ] },
    { id: "s15", module: "SCENE-01", ref: "p9,p13",
      data: { set: "kitchen", label: "Bữa mì khuya", actors: [{ id: "dung", side: "left" }], props: ["steaming-bowl", "egg", "leafy-green"] },
      lines: [
        L("l1", "dung", "Most of the sodium is in the seasoning packet. So, half the packet.", "Phần lớn natri nằm ở gói gia vị. Vậy dùng nửa gói thôi.", { face: "thinking", pose: "explain" }),
        L("l2", "dung", "Less oil, plus some greens and an egg.", "Bớt gói dầu, thêm rau cải và một quả trứng.", { face: "happy", pose: "thumb" }),
        L("l3", null, "Less salt, more nutrients. And keep instant noodles for really busy nights.", "Bớt mặn mà đủ chất hơn. Và để mì gói cho những tối thật bận."),
        L("l4", null, "Remember: you don't have to pour in the whole seasoning packet.", "Nhớ: gói gia vị không bắt buộc phải đổ hết."),
      ] },
    { id: "s16", module: "LIST-02", ref: "p10",
      data: { title: "Hay nhiều “đường thêm vào” (added sugars)", illus: "candy",
        items: [{ icon: "glass-of-milk", illus: "glass-of-milk", text: "Sữa chua có đường" }, { icon: "teacup-without-handle", illus: "teacup-without-handle", text: "Trà đóng chai" }, { icon: "cup-with-straw", illus: "cup-with-straw", text: "Nước ngọt" }] },
      lines: [
        L("l1", null, "Sugars: some labels have a separate line for added sugars.", "Đường: một số nhãn tách riêng dòng “đường thêm vào”."),
        L("l2", null, "Sweetened yogurt, bottled tea and soft drinks often have a lot of added sugar.", "Sữa chua có đường, trà đóng chai, nước ngọt thường nhiều đường thêm vào."),
        L("l3", null, "Want a yogurt for a snack? Choose plain, unsweetened yogurt, and add fruit yourself.", "Muốn ăn sữa chua? Chọn loại không đường, tự thêm trái cây."),
      ] },
    { id: "s17", module: "CMP-06", ref: "p11",
      data: { do: ["Trans fat càng thấp càng tốt", "Chất béo bão hoà ở mức vừa phải"], dont: ["Bỏ qua dòng chất béo trên nhãn"], doIcons: ["check-mark-button", "butter"], dontIcons: ["warning"] },
      lines: [
        L("l1", null, "Fats: look at saturated fat, and trans fat.", "Chất béo: chú ý chất béo bão hoà và chất béo chuyển hoá."),
        L("l2", null, "Keep trans fat as low as possible, and saturated fat moderate.", "Trans fat càng thấp càng tốt, chất béo bão hoà ở mức vừa phải."),
      ] },

    // Chương 4 — %DV
    { id: "s18", module: "HOST-03", data: { n: 4, of: 7, title: "Phần trăm giá trị hằng ngày" },
      lines: [L("l1", "det", "Part four: how to use percent daily value.", "Phần bốn: dùng phần trăm giá trị hằng ngày thế nào?")] },
    { id: "s19", module: "TEXT-06", ref: "p14",
      data: { term: "%DV", pos: "% Daily Value, hoặc %NRV", meaning: "Một khẩu phần đáp ứng bao nhiêu phần trăm nhu cầu trong ngày của người lớn trung bình", example: "Added sugars: 10% DV", illus: "bar-chart" },
      lines: [
        L("l1", null, "Many labels have a column called percent D V, or percent N R V.", "Nhiều nhãn có cột %DV hoặc %NRV."),
        L("l2", null, "It tells you how much of an average adult's daily reference amount one serving gives.", "Nó cho biết một khẩu phần đáp ứng bao nhiêu phần trăm nhu cầu tham chiếu trong ngày."),
      ] },
    { id: "s20", module: "CMP-05", ref: "p15",
      data: { title: "Quy tắc 5 – 20", columns: [{ label: "5% trở xuống", illus: "down-arrow" }, { label: "20% trở lên", illus: "up-arrow" }],
        rows: [{ label: "Nghĩa là", cells: ["thấp", "cao"] }, { label: "Nên chọn cho", cells: ["natri, đường thêm, béo bão hoà", "chất xơ, canxi, sắt"] }] },
      lines: [
        L("l1", null, "Easy rule: five percent or less is low. Twenty percent or more is high.", "Quy tắc dễ nhớ: 5% trở xuống là thấp, 20% trở lên là cao."),
        L("l2", null, "Pick a low percent for sodium, added sugar and saturated fat.", "Chọn % thấp với natri, đường thêm vào, chất béo bão hoà."),
        L("l3", null, "Pick a high percent for fibre, calcium and iron.", "Chọn % cao với chất xơ, canxi, sắt."),
        L("l4", null, "Two yogurts? Take the lower percent for added sugar. Remember, it's a general reference, not your own needs.", "Hai hộp sữa chua? Lấy hộp % đường thêm thấp hơn. Đây là mức chung, không riêng bạn."),
      ] },

    // Chương 5 — Thành phần
    { id: "s21", module: "HOST-03", data: { n: 5, of: 7, title: "Danh sách thành phần" },
      lines: [L("l1", "det", "Part five: what the ingredients say, and the numbers don't.", "Phần năm: thành phần nói gì mà con số không nói?")] },
    { id: "s22", module: "LIST-06", ref: "p16",
      data: { title: "Thành phần xếp theo khối lượng", steps: [{ text: "Đứng đầu: chiếm nhiều nhất", illus: "1st-place-medal" }, { text: "Rồi giảm dần", illus: "chart-decreasing" }, { text: "Dầu, đường gần đầu: sản phẩm nhiều dầu, đường", illus: "warning" }] },
      lines: [
        L("l1", null, "Ingredients usually go by weight, from most to least. The first one is the biggest part.", "Thành phần xếp theo khối lượng giảm dần: thứ đứng đầu chiếm nhiều nhất."),
        L("l2", null, "Sugar or oil near the top? The product has a lot of it.", "Đường hay dầu gần đầu? Sản phẩm có nhiều thứ đó."),
        L("l3", null, "Two crackers look the same, but one lists oil first? Oil is its largest part.", "Hai loại bánh giống nhau, một loại ghi dầu đầu tiên? Dầu chiếm nhiều nhất."),
      ] },
    { id: "s23", module: "LIST-09", ref: "p17",
      data: { title: "Những tên khác của đường", illus: "candy",
        keywords: [{ text: "sucrose", illus: "candy" }, { text: "glucose", illus: "candy" }, { text: "fructose", illus: "candy" }, { text: "siro ngô", illus: "honey-pot" }, { text: "mạch nha", illus: "honey-pot" }, { text: "mật ong", illus: "honey-pot" }] },
      lines: [
        L("l1", null, "Sugar has many names: sucrose, glucose, fructose.", "Đường có nhiều tên: sucrose, glucose, fructose."),
        L("l2", null, "Corn syrup, malt, honey. Many of these names can mean a lot of sugar in total.", "Siro ngô, mạch nha, mật ong. Thấy nhiều tên, tổng đường có thể khá cao."),
      ] },
    { id: "s24", module: "OPEN-19", ref: "p17",
      data: { label: "Dấu hiệu trans fat", warning: "“Partially hydrogenated oil”", detail: "Dầu thực vật hydro hoá một phần: có thể chứa trans fat." },
      lines: [
        L("l1", null, "And watch for partially hydrogenated oil.", "Và để ý cụm partially hydrogenated oil."),
        L("l2", null, "It is a sign the product may contain trans fat, which is best avoided.", "Đó là dấu hiệu có thể chứa trans fat, nên tránh."),
      ] },
    { id: "s25", module: "CMP-01", ref: "p18",
      data: { labels: ["Contains peanuts", "May contain peanuts"], left: "Đậu phộng là một thành phần", right: "Có thể lẫn một chút khi sản xuất", illus: ["peanuts", "warning"] },
      lines: [
        L("l1", null, "Allergies? Read the allergen line: milk, egg, peanuts, seafood, gluten.", "Người dị ứng: đọc kỹ dòng chất gây dị ứng: sữa, trứng, đậu phộng, hải sản, gluten."),
        L("l2", null, "Contains milk and peanuts means they are ingredients.", "Contains milk and peanuts: đó là thành phần."),
        L("l3", null, "May contain peanuts means small traces may get mixed in during production.", "May contain peanuts: có thể lẫn một chút trong sản xuất."),
      ] },
    { id: "s27", module: "DLG-01", ref: "p19,p20",
      data: { set: "shop", label: "Chọn quà", actors: [{ id: "thao", side: "right" }],
        verdict: { ok: false, label: "Tin ảnh mặt trước hộp", why: "“May contain peanuts”: có thể lẫn đậu phộng do dùng chung dây chuyền. Với người dị ứng, một chút cũng đáng lo." } },
      lines: [
        L("l1", "thao", "No nuts in the picture. This box is safe for my friend!", "Ảnh không thấy hạt nào. Hộp này an toàn cho bạn mình!", { face: "happy", pose: "give", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "The back says may contain peanuts. It may share a production line. For an allergy, a little is too much.", "Mặt sau ghi may contain peanuts: có thể lẫn do chung dây chuyền. Dị ứng thì một chút cũng đáng lo."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l5", "thao", "Let me read the small line on the back first. This one has no peanut warning.", "Đọc dòng nhỏ mặt sau trước đã. Hộp này không có cảnh báo đậu phộng.", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l6", "det", "Right. Buying for someone with allergies? Read the smallest line first.", "Đúng. Mua cho người dị ứng, đọc dòng nhỏ nhất trước.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 6 — Chữ to mặt trước
    { id: "s28", module: "HOST-03", data: { n: 6, of: 7, title: "Chữ to ở mặt trước" },
      lines: [L("l1", "det", "Part six: can you trust the big words on the front?", "Phần sáu: chữ to ở mặt trước có tin được không?")] },
    { id: "s29", module: "LIST-13", ref: "p21",
      data: { title: "Lật ra sau mà đọc", items: [
        { title: "“Ít béo”", detail: "Đôi khi lại thêm đường.", illus: "butter" },
        { title: "“Không đường thêm vào”", detail: "Vẫn có thể có đường tự nhiên từ trái cây, sữa.", illus: "glass-of-milk" },
        { title: "“Ngũ cốc”", detail: "Chưa chắc là nguyên hạt.", illus: "bread" }] },
      lines: [
        L("l1", null, "The front often says low fat, no sugar, natural, good for your heart. Always turn it over.", "Mặt trước in to “ít béo”, “không đường”, “tốt cho tim”. Luôn lật ra sau."),
        L("l2", null, "Low fat foods sometimes add sugar.", "Đồ ít béo đôi khi thêm đường."),
        L("l3", null, "No added sugar means no extra sugar was added. Natural sugars from fruit or milk may remain.", "“Không đường thêm vào”: không thêm, nhưng vẫn có thể có đường tự nhiên."),
        L("l4", null, "And cereal is not always whole grain.", "Và “ngũ cốc” chưa chắc là nguyên hạt."),
      ] },
    { id: "s30", module: "SCENE-03", ref: "p22,p23",
      data: { set: "shop", actors: [{ id: "binh", side: "left" }, { id: "bin", side: "center" }],
        left: { label: "Tin chữ to mặt trước", ok: false }, right: { label: "Đọc thành phần", ok: true } },
      lines: [
        L("a1", "bin", "Grandpa, this box says high fibre!", "Ông ơi, hộp này ghi giàu chất xơ!", { phase: "a", face: "happy", pose: "point", to: "binh" }),
        L("a2", "binh", "High fibre, whole grain! Into the basket.", "Giàu chất xơ, nguyên hạt! Bỏ giỏ thôi.", { phase: "a", face: "happy", to: "bin" }),
        L("b1", "binh", "Let me read the back. Refined flour first, then sugar. Whole grain is near the end.", "Lật ra sau: bột tinh luyện đứng đầu, rồi đường. Nguyên hạt gần cuối.", { phase: "b", face: "thinking", pose: "think" }),
        L("b2", "binh", "Let's take whole oats with little sugar, and add sliced banana.", "Mình lấy yến mạch nguyên hạt ít đường, thêm chuối thái lát nhé.", { phase: "b", face: "happy", pose: "explain", to: "bin" }),
        L("b3", null, "The front is for advertising. The back is for reading.", "Mặt trước để quảng cáo, mặt sau mới để đọc."),
      ] },

    // Chương 7 — Đi siêu thị
    { id: "s31", module: "HOST-03", data: { n: 7, of: 7, title: "Mang gì theo khi đi siêu thị?" },
      lines: [L("l1", "det", "Last part: what to take to the supermarket.", "Phần cuối: mang gì theo khi đi siêu thị?")] },
    { id: "s32", module: "END-03", ref: "p24",
      data: { title: "Một phút ở kệ hàng", illus: "clipboard",
        items: ["Khẩu phần và số khẩu phần", "Năng lượng, đúng đơn vị", "Natri, đường thêm, béo bão hoà, trans fat", "%DV: 5% thấp, 20% cao", "Thành phần đầu và dòng dị ứng"] },
      lines: [
        L("l1", null, "A one-minute checklist. Serving size and servings per pack.", "Danh sách một phút: khẩu phần và số khẩu phần."),
        L("l2", null, "Energy, in the right unit.", "Năng lượng, đúng đơn vị."),
        L("l3", null, "Sodium, added sugar, saturated fat, trans fat.", "Natri, đường thêm, béo bão hoà, trans fat."),
        L("l4", null, "Percent daily value: five is low, twenty is high.", "%DV: 5% thấp, 20% cao."),
        L("l5", null, "Then the top ingredients and the allergy line.", "Rồi thành phần đứng đầu và dòng dị ứng."),
      ] },
    { id: "s33", module: "OPEN-19", ref: "p25",
      data: { label: "Có bệnh lý?", warning: "Hỏi bác sĩ chỉ số nào quan trọng với mình", detail: "Tiểu đường, tăng huyết áp, bệnh thận, dị ứng thực phẩm." },
      lines: [
        L("l1", null, "Diabetes, high blood pressure, kidney disease, or a food allergy?", "Tiểu đường, tăng huyết áp, bệnh thận, dị ứng thực phẩm?"),
        L("l2", null, "Ask a doctor or dietitian which numbers matter most for you, like sodium, and what amount is safe.", "Hỏi bác sĩ, chuyên gia dinh dưỡng chỉ số nào cần chú ý, như natri, và mức nào an toàn."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s34", module: "END-02", ref: "outro",
      data: { points: ["Khẩu phần trước, rồi mới tin con số", "Muối, đường, chất béo, %DV, thành phần", "Mặt trước quảng cáo, mặt sau để đọc"], icons: ["magnifying-glass-tilted-left", "salt", "page-facing-up"] },
      lines: [
        L("l1", null, "Reading labels needs no maths skills, just the right order.", "Đọc nhãn không cần giỏi toán, chỉ cần đúng thứ tự."),
        L("l2", null, "Serving size first, then salt, sugar, fat, percent and ingredients.", "Khẩu phần trước, rồi muối, đường, béo, %DV, thành phần."),
        L("l3", null, "And don't trust only the big words on the front.", "Và đừng chỉ tin chữ to ở mặt trước."),
      ] },
    { id: "s35", module: "QUIZ-01", ref: "questions[14]",
      data: {
        q: "Using the simple rule, what counts as low and high on the percent daily value?",
        options: [
          "Five percent or less is low, and twenty percent or more is high",
          "Any number is low, because percentages on labels are only decoration",
          "Fifty percent is low, and anything below ninety percent is still fine",
        ],
        correct: 0, countdown: 5, illus: "bar-chart",
        why: "5% trở xuống là thấp, 20% trở lên là cao.",
      },
      lines: [
        L("l1", null, "Using the simple rule, what counts as low and high on the percent daily value?", "Theo quy tắc đơn giản, %DV bao nhiêu là thấp, bao nhiêu là cao?"),
        L("l2", null, "Five percent or less is low, and twenty percent or more is high.", "5% trở xuống là thấp, 20% trở lên là cao."),
        L("l3", null, "Low for sodium and added sugar, high for fibre, calcium and iron.", "Thấp với natri, đường thêm; cao với chất xơ, canxi, sắt."),
      ],
      beats: { after: 600 } },
    { id: "s36", module: "END-05", data: { text: "Bốn mươi câu về đọc nhãn", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Next time you shop, compare the per hundred gram column. Now try the forty questions below.", "Lần tới đi siêu thị, so cột 100 gam. Giờ thử bốn mươi câu bên dưới nhé.")] },
  ],
};
