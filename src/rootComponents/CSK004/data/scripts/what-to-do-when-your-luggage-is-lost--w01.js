// Kịch bản video W lần 3 (#110) — "Hành lý bị thất lạc khi đi máy bay ở nước ngoài thì làm gì?" · chuỗi "Gặp sự cố ở nước ngoài: làm gì ngay"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); nhân vật hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "what-to-do-when-your-luggage-is-lost--w01",
  hook: "HOOK-13",
  loop: { open: "s01", close: "s23" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "travellers-in-trouble", slug: "what-to-do-when-your-luggage-is-lost", door: "ky-nang", level: "B1",
    title: "Hành lý bị thất lạc khi đi máy bay ở nước ngoài thì làm gì?", series: "Gặp sự cố ở nước ngoài: làm gì ngay" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Đông → Dũng; “bạn” trong ✍️ p5 → Thảo; lễ tân khách sạn ở nước ngoài (p8, không tên) → Sam (vai mới, trước là Cô Hoa; đổi theo #110, cùng vai lễ tân như bài khách sạn; chỉ nói câu trung lập); nhân viên quầy hành lý không lên hình. Chuyện Liên (p17) kể qua thẻ RSN-08, không nêu tên, không lên hình. Vai mới: Sam (s01). HOOK-13: phóng to chi tiết bị bỏ qua trên tờ khai của Dũng (số Việt Nam đã tắt chuyển vùng, thiếu số phòng — p8); s10 (DLG-01) tua lại lúc khai ở quầy, làm lại theo checklist p7. Thời hạn Công ước Montreal (p16) và quy định sạc dự phòng từ 1/7/2026 (p22) theo bài hiện tại. Phủ ý: 22/22.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p8",
      data: { set: "hotel", label: "Hai ngày sau", actors: [{ id: "sam", side: "center", pose: "phone" }], props: ["luggage"] },
      lines: [
        L("l1", "sam", "A suitcase for Mr Dung? There's no room number.", "Vali của anh Dũng à? Không có số phòng.", { face: "thinking" }),
        L("l2", "sam", "And his phone doesn't answer.", "Gọi số của anh ấy cũng không được.", { face: "worried" }),
        L("l3", null, "Look closer at Dung's form: a phone with roaming off, and no room number.", "Nhìn kỹ tờ khai của Dũng: số đã tắt chuyển vùng, không có số phòng."),
        L("l4", null, "Back to the airport it goes. So what do you do when your bag doesn't arrive?", "Vali lại về sân bay. Vali không ra thì làm gì?"),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Vali không ra", pose: "present", illus: "luggage",
        items: ["Báo tại quầy trước khi ra cửa", "Lấy biên bản có mã hồ sơ", "Để lại số gọi được", "Mua đồ thiết yếu, giữ hoá đơn"] },
      lines: [
        L("l1", "det", "Many late bags are found. But the first half hour at the airport decides a lot.", "Nhiều vali đến chậm vẫn được tìm thấy. Nhưng nửa giờ đầu ở sân bay quyết định nhiều chuyện."),
        L("l2", "det", "Report it before you walk out.", "Báo tại quầy trước khi ra cửa."),
        L("l3", "det", "Get a report with a reference number.", "Lấy biên bản có mã hồ sơ."),
        L("l4", "det", "Leave a number that works.", "Để lại số gọi được."),
        L("l5", "det", "Buy only essentials, and keep receipts.", "Mua đồ thiết yếu, giữ hoá đơn."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Hôm nay mình đi qua",
        chapters: [
          { label: "Vali chưa ra: kiểm tra gì", illus: "baggage-claim" },
          { label: "Ở quầy hành lý", illus: "luggage" },
          { label: "Tối nay không có đồ", illus: "toothbrush" },
          { label: "Vali về nhưng hỏng", illus: "hammer-and-wrench" },
          { label: "Mấy ngày chờ", illus: "hourglass-not-done" },
          { label: "Xếp đồ cho lần sau", illus: "backpack" } ] },
      lines: [
        L("l1", null, "Six stops. First checks. The baggage desk. Tonight's needs.", "Sáu chặng. Kiểm tra đầu. Quầy hành lý. Đồ dùng tối nay."),
        L("l2", null, "Damage. Waiting. And packing for next time.", "Vali hỏng. Chờ đợi. Và xếp đồ lần sau."),
      ] },

    // Chương 1: p1–p2
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vali chưa ra: kiểm tra gì" },
      lines: [L("l1", "det", "Part one: no suitcase yet. What do you check?", "Phần một: vali chưa ra, kiểm tra gì trước?")] },
    { id: "s05", module: "LIST-06", ref: "p1,p2",
      data: { title: "Trước khi ra cửa",
        steps: [
          { text: "Nhìn kỹ băng chuyền thêm một lượt", illus: "baggage-claim" },
          { text: "Hỏi khu hành lý quá khổ", illus: "luggage" },
          { text: "Tìm quầy Baggage Services / Lost and Found", illus: "information" },
          { text: "Báo xong mới đi qua cửa ra", illus: "door" } ] },
      lines: [
        L("l1", null, "Check the belt once more. Then ask about the oversized bag area.", "Nhìn kỹ băng chuyền một lượt nữa. Rồi hỏi khu hành lý quá khổ."),
        L("l2", null, "Big cases, strollers and sports gear often come out there, away from the main belt.", "Vali lớn, xe đẩy em bé, đồ thể thao thường được trả ở chỗ riêng."),
        L("l3", null, "Still nothing? Find the airline's desk: Baggage Services, or Lost and Found, inside the baggage hall.", "Vẫn không thấy? Tìm quầy Baggage Services hoặc Lost and Found ngay trong khu nhận hành lý."),
        L("l4", "det", "Don't walk out first. Many airports won't let you back in.", "Đừng ra cửa trước khi báo: nhiều sân bay không cho quay lại."),
      ] },

    // Chương 2: p3–p9
    { id: "s06", module: "HOST-03", data: { n: 2, of: 6, title: "Ở quầy hành lý" },
      lines: [L("l1", "det", "Part two: at the baggage desk, what to give and say.", "Phần hai: ở quầy hành lý, đưa gì, nói gì.")] },
    { id: "s07", module: "TEXT-07", ref: "p3",
      data: { en: "My suitcase did not arrive. Here is my baggage tag.", vi: "Vali của tôi không ra. Đây là thẻ hành lý của tôi.",
        chunks: [{ en: "My suitcase", vi: "vali của tôi" }, { en: "did not arrive.", vi: "không ra" }, { en: "Here is my baggage tag.", vi: "đây là thẻ hành lý" }], illus: "label" },
      lines: [
        L("l1", null, "Hand over the baggage tag stuck on your ticket or boarding pass.", "Đưa thẻ hành lý dán trên vé hoặc thẻ lên máy bay."),
        L("l2", null, "The code lets the airline trace your bag in their system. Better than searching yourself.", "Mã trên thẻ giúp hãng truy tìm vali trong hệ thống, hơn hẳn tự đi tìm."),
        L("l3", null, "Say: My suitcase did not arrive. Here is my baggage tag.", "Nói: My suitcase did not arrive. Here is my baggage tag."),
      ] },
    { id: "s08", module: "SCENE-03", ref: "p4,p5,p6",
      data: { set: "airport", actors: [{ id: "thao" }],
        left: { label: "Trước: “đen, to”", ok: false }, right: { label: "Sau: có ảnh, dấu riêng", ok: true } },
      lines: [
        L("l0", null, "Describe it exactly: colour, size, material, straps, tags, a few things inside. And a photo.", "Tả thật cụ thể: màu, cỡ, chất liệu, dây đai, móc khoá, vài món bên trong. Và ảnh."),
        L("a1", "thao", "It is black and large.", "Nó màu đen, cỡ to.", { phase: "a", pose: "explain" }),
        L("a2", null, "No photo, no mark. The store room is full of bags just like it. Days more of checking.", "Không ảnh, không dấu riêng. Trong kho đầy vali giống hệt. Đối chiếu thêm mấy ngày."),
        L("b1", "thao", "It is a large black hard suitcase with a red strap and a yellow tag. Here is a photo.", "Vali cứng màu đen, cỡ to, dây đai đỏ, thẻ vàng. Đây là ảnh ạ.", { phase: "b", pose: "give", face: "happy" }),
        L("b2", null, "Staff spot it at once among hundreds. So before you fly, photograph your bag and tie on a coloured strap.", "Nhân viên nhận ra ngay giữa hàng trăm chiếc. Trước khi đi: chụp ảnh vali, buộc dây màu."),
        L("l1", null, "A bag with a photo and a special mark finds its way back more easily.", "Vali có ảnh và dấu riêng thì dễ tìm đường về."),
      ] },
    { id: "s09", module: "LIST-05", ref: "p7",
      data: { title: "Trước khi rời quầy",
        items: ["Lấy biên bản có mã hồ sơ", "Hỏi cách theo dõi trên mạng", "Ghi tên quầy và giờ báo", "Để lại địa chỉ khách sạn, số gọi được ở nước này", "Hỏi vali tìm thấy giao đến đâu"] },
      lines: [
        L("l1", null, "Get a written report with a reference number.", "Lấy biên bản có mã hồ sơ."),
        L("l2", null, "Ask how to track it online.", "Hỏi cách theo dõi trên mạng."),
        L("l3", null, "Note the desk name and the time.", "Ghi tên quầy và giờ báo."),
        L("l4", null, "Leave your hotel address, and a phone number that works in this country.", "Để lại địa chỉ khách sạn và số điện thoại gọi được ở nước này."),
        L("l5", null, "Ask where the bag will be delivered when it's found.", "Hỏi vali tìm thấy sẽ giao đến đâu."),
      ] },
    { id: "s10", module: "DLG-01", ref: "p8,p9",
      data: { set: "airport", label: "Ở quầy hành lý",
        actors: [{ id: "dung", side: "center" }],
        verdict: { ok: false, label: "Để lại số không gọi được, thiếu số phòng",
          why: "Vali tìm thấy mà bên giao hàng không liên lạc được, lại chở về sân bay.",
          rule: "Để lại số gọi được, không phải số cho có" } },
      lines: [
        L("l1", "dung", "My suitcase did not arrive. Here is my baggage tag.", "Vali của tôi không ra. Đây là thẻ hành lý.", { pose: "give" }),
        L("l2", "dung", "Phone? My Vietnamese number. Address? Just the hotel name.", "Số điện thoại: số Việt Nam. Địa chỉ: tên khách sạn là được.", { pose: "shrug", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern", pose: "stop" }),
        L("l4", "det", "Your roaming is off. And which room? The courier can't reach you.", "Số đó đang tắt chuyển vùng. Còn phòng nào? Bên giao hàng sẽ không liên lạc được."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "Here's a number I can answer here, the hotel address and my room number.", "Đây là số tôi nghe được ở đây, địa chỉ khách sạn và số phòng.", { phase: "redo", pose: "give", face: "happy" }),
        L("l7", "dung", "And could I have the report with the reference number?", "Cho tôi xin biên bản có mã hồ sơ nhé?", { phase: "redo", face: "happy" }),
        L("l8", "det", "Leave a number that really works, not just any number.", "Để lại số gọi được, không phải số cho có.", { phase: "redo" }),
      ] },

    // Chương 3: p10–p14
    { id: "s11", module: "HOST-03", data: { n: 3, of: 6, title: "Tối nay không có đồ" },
      lines: [L("l1", "det", "Part three: nothing to use tonight?", "Phần ba: tối nay không có đồ dùng thì sao?")] },
    { id: "s12", module: "TEXT-07", ref: "p10",
      data: { en: "Will you cover the cost of essential items?", vi: "Hãng có hỗ trợ chi phí đồ thiết yếu không?",
        chunks: [{ en: "Will you cover", vi: "hãng có trả" }, { en: "the cost of", vi: "chi phí" }, { en: "essential items?", vi: "đồ thiết yếu" }], illus: "toothbrush" },
      lines: [
        L("l1", null, "Ask right at the desk: Will you cover the cost of essential items?", "Hỏi ngay tại quầy: Will you cover the cost of essential items?"),
        L("l2", null, "Many airlines help when a bag is late, but amounts and rules differ.", "Nhiều hãng hỗ trợ khi vali đến chậm, nhưng mức chi và điều kiện khác nhau."),
        L("l3", null, "So ask first what amount counts as reasonable.", "Nên hỏi trước mức nào được coi là hợp lý."),
      ] },
    { id: "s13", module: "CMP-01", ref: "p11,p12,p13",
      data: { title: "Vali thất lạc ngay ngày đầu", labels: ["Cách A: mua “cho đỡ buồn”", "Cách B: mua thứ cần"], left: "Quần áo mới, mỹ phẩm, giày đắt tiền; vứt hoá đơn: không chứng từ", right: "Hỏi trước, rồi mua bàn chải, đồ vệ sinh, một bộ đồ, sạc", illus: ["high-heeled-shoe", "toothbrush"] },
      lines: [
        { id: "l1", lang: "en", say: "Way A: new clothes, make up, expensive shoes, to feel better. Receipts left at the shop.", sub: "Cách A: quần áo mới, mỹ phẩm, giày đắt tiền cho đỡ buồn. Hoá đơn vứt ở cửa hàng." },
        { id: "l2", lang: "en", say: "No proof of costs, and shoes are hard to call essential.", sub: "Không có chứng từ, mà đôi giày cũng khó coi là thiết yếu." },
        { id: "l3", lang: "en", say: "Way B: ask first. Then a toothbrush, toiletries, one set of clothes, a phone charger.", sub: "Cách B: hỏi trước. Rồi mua bàn chải, đồ vệ sinh, một bộ đồ, sạc điện thoại." },
      ] },
    { id: "s13b", module: "TEXT-04", ref: "p11,p12,p13",
      data: { text: "Giữ từng hoá đơn, chụp ảnh luôn. Mua thứ cần, giữ từng tờ hoá đơn.", marks: ["Mua thứ cần"], illus: "receipt" },
      lines: [
        { id: "l4", lang: "en", say: "Keep each receipt, and photograph it too. Paper fades or gets lost.", sub: "Giữ từng hoá đơn, chụp ảnh luôn: giấy dễ mất, dễ phai." },
        { id: "l5", lang: "en", who: "det", say: "Buy what you need, and keep every receipt.", sub: "Mua thứ cần, giữ từng tờ hoá đơn." },
      ] },
    { id: "s14", module: "SCENE-02", ref: "p14",
      data: { set: "hotel", label: "Mai có họp", actor: { id: "thao", side: "left" },
        contact: { name: "Chị trưởng phòng", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Vali của em bị thất lạc, đã có mã hồ sơ, em cần mua một bộ đồ để họp mai, chị cho em hỏi mức chi ạ.", at: "l2" },
          { from: "them", text: "Em mua bộ vừa phải, giữ hoá đơn nhé.", at: "l3" } ] },
      lines: [
        L("l1", null, "On a business trip with a meeting tomorrow? Tell your company before you buy.", "Đang công tác, mai có họp? Báo công ty trước khi mua."),
        L("l2", "thao", "My bag is lost, I have a reference number. I need clothes for tomorrow's meeting. What's my limit?", "Vali em thất lạc, đã có mã hồ sơ. Em cần một bộ đồ để họp mai, chị cho em hỏi mức chi ạ.", { face: "worried" }),
        L("l3", "them", "Buy something reasonable, and keep the receipt.", "Em mua bộ vừa phải, giữ hoá đơn nhé."),
      ] },

    // Chương 4: p15–p18
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Vali về nhưng hỏng" },
      lines: [L("l1", "det", "Part four: the bag is back, but damaged or missing things.", "Phần bốn: vali về rồi, nhưng hỏng hay mất đồ.")] },
    { id: "s16", module: "LIST-13", ref: "p15,p16",
      data: { title: "Kiểm tra ngay khi nhận", items: [{ title: "Ở băng chuyền hoặc lúc giao", detail: "Kiểm tra vali ngay khi nhận.", illus: "baggage-claim" }, { title: "Mở ra xem tại chỗ", detail: "Rách, vỡ bánh xe, ướt, thiếu đồ: chụp ảnh, báo luôn “My suitcase is damaged.”", illus: "camera-with-flash" }, { title: "Công ước Montreal (chuyến quốc tế)", detail: "Hư hỏng: khiếu nại văn bản trong 7 ngày từ khi nhận. Đến chậm: trong 21 ngày từ khi được giao lại.", illus: "spiral-calendar" }, { title: "Đọc điều kiện hành lý của hãng", detail: "Hoặc hỏi quầy, để biết thời hạn chính xác.", illus: "page-facing-up" }] },
      lines: [
        { id: "l1", lang: "en", say: "Check the bag as soon as you get it: at the belt, or when the courier brings it.", sub: "Kiểm tra vali ngay khi nhận: ở băng chuyền hoặc lúc bên giao hàng mang đến." },
        { id: "l2", lang: "en", say: "Torn, a broken wheel, wet, something missing? Photograph it and say: My suitcase is damaged.", sub: "Rách, vỡ bánh, ướt, thiếu đồ? Chụp ảnh và báo: My suitcase is damaged." },
        { id: "l3", lang: "en", say: "Time limits are short. On international flights under the Montreal Convention, damage must be claimed in writing within seven days.", sub: "Thời hạn rất ngắn. Chuyến quốc tế theo Công ước Montreal: hư hỏng phải khiếu nại bằng văn bản trong bảy ngày." },
        { id: "l4", lang: "en", say: "A delayed bag: within twenty one days of getting it back.", sub: "Vali đến chậm: trong hai mươi mốt ngày kể từ khi được giao lại." },
        { id: "l5", lang: "en", say: "Check the airline's baggage conditions, or ask the desk, for the exact limit.", sub: "Đọc điều kiện hành lý của hãng, hoặc hỏi quầy, để biết thời hạn chính xác." },
      ] },
    { id: "s17", module: "RSN-08", ref: "p17,p18",
      data: { beats: [
        { text: "Nhận vali: gãy một bánh xe, quần áo bên trong bị ướt", illus: "luggage" },
        { text: "Đang vội, nghĩ “về nước rồi khiếu nại”", link: "therefore", illus: "hotel" },
        { text: "Hai tuần sau mới gửi email cho hãng", link: "but", illus: "e-mail" },
        { text: "Hãng trả lời: quá thời hạn báo hư hỏng", link: "therefore", illus: "cross-mark" } ] },
      lines: [
        L("l1", null, "One traveller got her bag back: a broken wheel, and wet clothes inside.", "Một chị khách nhận vali: gãy một bánh, quần áo bên trong ướt."),
        L("l2", null, "In a hurry, she thought: I'll complain back home.", "Đang vội, chị nghĩ: về nước rồi khiếu nại."),
        L("l3", null, "Two weeks later she emailed. The airline said the time limit had passed.", "Hai tuần sau mới gửi email. Hãng trả lời đã quá thời hạn báo hư hỏng."),
        L("l4", "det", "Report any damage right there, at the belt.", "Hỏng gì báo ngay tại băng chuyền."),
      ] },

    // Chương 5: p19–p20
    { id: "s18", module: "HOST-03", data: { n: 5, of: 6, title: "Mấy ngày chờ" },
      lines: [L("l1", "det", "Part five: following up while you wait.", "Phần năm: mấy ngày chờ, theo dõi thế nào.")] },
    { id: "s19", module: "TEXT-07", ref: "p19",
      data: { en: "My reference number is on my report. Is there any news about my suitcase?", vi: "Mã hồ sơ của tôi có trong biên bản. Có tin gì về vali của tôi chưa?",
        chunks: [{ en: "My reference number", vi: "mã hồ sơ của tôi" }, { en: "is on my report.", vi: "có trong biên bản" }, { en: "Is there any news", vi: "có tin gì chưa" }, { en: "about my suitcase?", vi: "về vali của tôi" }], illus: "telephone-receiver" },
      lines: [
        L("l1", null, "Save the reference number and check the status every day.", "Lưu mã hồ sơ và kiểm tra trạng thái mỗi ngày."),
        L("l2", null, "Past the promised time? Call or message again, reference number first.", "Quá thời gian hãng hẹn? Gọi hoặc nhắn lại, nêu mã hồ sơ ngay câu đầu."),
        L("l3", null, "My reference number is on my report. Is there any news about my suitcase?", "Mã hồ sơ của tôi có trong biên bản. Có tin gì về vali của tôi chưa?"),
      ] },
    { id: "s20", module: "LIST-13", ref: "p20",
      data: { title: "Trong lúc chờ",
        items: [
          { title: "Đọc phần hành lý trong bảo hiểm du lịch", detail: "Nhiều gói hỗ trợ hành lý đến chậm hoặc mất hẳn; xem cần giấy tờ gì.", illus: "page-facing-up" },
          { title: "Hỏi hãng mốc thời gian", detail: "Khi nào làm thủ tục bồi thường nếu vali không được tìm thấy.", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "Read the baggage part of your travel insurance. Many plans cover delayed or lost bags.", "Đọc phần hành lý trong bảo hiểm du lịch: nhiều gói hỗ trợ vali đến chậm hoặc mất hẳn."),
        L("l2", null, "Check which papers a claim needs.", "Xem hồ sơ cần những giấy gì."),
        L("l3", null, "And ask the airline when and how to start a claim if the bag is never found.", "Và hỏi hãng mốc thời gian làm bồi thường nếu vali không được tìm thấy."),
      ] },

    // Chương 6: p21–p22
    { id: "s21", module: "HOST-03", data: { n: 6, of: 6, title: "Xếp đồ cho lần sau" },
      lines: [L("l1", "det", "Last part: pack so you can cope if it happens again.", "Phần cuối: xếp đồ sao cho chịu được nếu chuyện lặp lại.")] },
    { id: "s22", module: "LIST-05", ref: "p21,p22",
      data: { title: "Luôn trong hành lý xách tay",
        items: ["Hộ chiếu, ví, giấy tờ công việc", "Thuốc đang dùng, trong hộp gốc", "Sạc, sạc dự phòng theo quy định của hãng", "Một bộ quần áo, đồ vệ sinh nhỏ", "Đồ quý giá, thiết bị điện tử"], illus: "backpack" },
      lines: [
        L("l1", null, "Ask yourself: if my checked bag were two days late, would I be fine?", "Tự hỏi: vali đến chậm hai ngày, mình có ổn không?"),
        L("l2", null, "Keep what you can't do without in your hand luggage. Passport, wallet, work papers.", "Thứ không thể thiếu để trong hành lý xách tay: hộ chiếu, ví, giấy tờ công việc."),
        L("l3", null, "Your medicine, in its original box. Chargers.", "Thuốc đang dùng, trong hộp gốc. Sạc điện thoại."),
        L("l4", null, "Flying from Vietnam from July first, twenty twenty six: at most two power banks, hand luggage only.", "Bay từ Việt Nam, từ 1/7/2026: mỗi khách tối đa hai sạc dự phòng, chỉ trong hành lý xách tay."),
        L("l5", null, "One change of clothes, small toiletries, valuables and electronics.", "Một bộ quần áo, đồ vệ sinh nhỏ, đồ quý, thiết bị điện tử."),
        L("l6", "det", "And remove old baggage tags. They can confuse the sorting and send your bag the wrong way.", "Và tháo thẻ hành lý cũ, kẻo hệ thống phân loại nhầm, gửi vali đi sai đường."),
      ] },

    { id: "s23", module: "END-02", ref: "outro",
      data: { points: ["Báo tại quầy, lấy mã hồ sơ", "Để lại số gọi được, mua vừa đủ", "Kiểm tra vali khi nhận, hỏng báo ngay"], icons: ["page-facing-up", "mobile-phone", "camera-with-flash"] },
      lines: [
        L("l1", null, "A lost bag is annoying, but it usually ends well.", "Mất vali khó chịu, nhưng thường có kết thúc."),
        L("l2", null, "Report at the desk, keep the reference, leave a working number, buy only what you need, check the bag on arrival.", "Báo tại quầy, giữ mã hồ sơ, để số gọi được, mua vừa đủ, kiểm tra vali khi nhận."),
      ] },
    { id: "s24", module: "QUIZ-01", ref: "questions[8]",
      data: {
        q: "Compare buying only essentials with shopping freely while your bag is delayed, which is wiser?",
        options: [
          "Shopping freely, because the airline pays for everything on any receipt",
          "Buying only essentials, because extra items may not be paid back",
          "There is no difference, since nobody checks what you bought",
        ],
        correct: 1, countdown: 5, illus: "toothbrush",
        why: "Hỗ trợ thường chỉ cho đồ thiết yếu, ở mức hợp lý.",
      },
      lines: [
        L("l1", null, "Compare buying only essentials with shopping freely while your bag is delayed, which is wiser?", "So sánh mua vừa đủ với mua thoải mái khi vali đến chậm, cách nào khôn ngoan hơn?"),
        L("l2", null, "Buying only essentials, because extra items may not be paid back.", "Chỉ mua đồ thiết yếu, vì đồ mua thêm có thể không được hoàn."),
        L("l3", null, "Help usually covers essentials only, at a reasonable amount.", "Hỗ trợ thường chỉ cho đồ thiết yếu, ở mức hợp lý."),
      ] },
    { id: "s25", module: "END-05", ref: "outro",
      data: { text: "Còn ở sân bay? Đi tìm Baggage Services", sub: "Rồi làm bốn mươi câu bên dưới" },
      lines: [L("l1", "det", "Still at the airport? Don't walk out. Find Baggage Services now. Then try the forty questions!", "Còn ở sân bay? Đừng ra cửa, tìm quầy Baggage Services ngay. Rồi thử bốn mươi câu nhé!", { face: "happy" })] },
  ],
};
