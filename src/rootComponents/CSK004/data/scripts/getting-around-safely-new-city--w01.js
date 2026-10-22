// Kịch bản video W lần 3 (#110) — "Đi lại an toàn ở thành phố mới: xe buýt, xe công nghệ, về khuya" · chuỗi "Chuẩn bị vào đại học xa nhà"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "getting-around-safely-new-city--w01",
  hook: "HOOK-18",
  loop: { open: "s01", close: "s29" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "first-year-students-living-away", slug: "getting-around-safely-new-city", door: "ky-nang", level: "B1",
    title: "Đi lại an toàn ở thành phố mới: xe buýt, xe công nghệ, về khuya", series: "Chuẩn bị vào đại học xa nhà" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” trong khung 🔀 p24 → Lan, bạn cùng hướng → Dũng; Thư (p7) → Lan; Khánh (p13) → Dũng; Sơn (p18) → Dũng; phụ huynh (p28) → Bác Bình (bố Lan). Người tự xưng “xe đặt qua ứng dụng”, người đứng sát trên xe buýt, người va chạm không lên hình (lời do người kể đọc). Vai mới: không dùng. Phủ ý: 28/28. Hai DLG: s09 (ba lô sau lưng, p5, p7, p8) và s13 (xe giả, p9, p13, p14). Tin nhắn chia sẻ vị trí ở s07 là cách diễn đạt ý p3, không có nguyên văn trong bài; câu “chỉ chia sẻ với người tin cậy” theo questions[36]. Câu mẫu từ chối khi biển số không khớp (s14) lấy từ explain của questions[12]. Câu đố: questions[12].",
  scenes: [
    // ── Mở đầu: hai kết cục
    { id: "s01", module: "SCENE-03", ref: "p24",
      data: { set: "street", actors: [{ id: "lan" }, { id: "dung" }],
        left: { label: "Vui đâu tính đó", ok: false }, right: { label: "Tính đường về trước", ok: true } },
      lines: [
        L("a1", "lan", "A birthday party! Let's go, we'll see about getting home later.", "Sinh nhật bạn! Cứ đi đã, vui đến đâu tính đến đó!", { phase: "a", face: "happy" }),
        L("a2", null, "Later: a dead phone, a dark shortcut alone, footsteps behind her.", "Cuối buổi: hết pin, một mình qua đường tắt tối, tiếng bước chân phía sau.", { phase: "a" }),
        L("b1", "lan", "Phone charged. Dũng, shall we leave together at ten?", "Pin sạc đầy rồi. Dũng, mười giờ mình cùng về nhé?", { phase: "b", pose: "explain" }),
        L("b2", "dung", "Sure, we go the same way. Main roads.", "Ừ, cùng hướng mà. Đi đường lớn nhé.", { phase: "b", face: "happy", pose: "thumb" }),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Đi học, đi chơi, về phòng bình yên?", pose: "present",
        items: ["Thử đường khi trời sáng", "Túi luôn ở phía trước", "So biển số rồi mới lên xe", "Khoá xe, rút chìa", "Tính đường về trước"] },
      lines: [
        L("l1", "det", "Two endings. How do you get around safely? A few small habits.", "Hai kết cục. Đi lại thế nào cho an toàn? Vài thói quen nhỏ."),
        L("l2", "det", "Try the route in daylight.", "Thử đường khi trời còn sáng."),
        L("l3", "det", "Keep your bag in front.", "Túi luôn ở phía trước."),
        L("l4", "det", "Check the plate before you get in.", "So biển số rồi mới lên xe."),
        L("l5", "det", "Lock your bike. And plan the way home first.", "Khoá xe. Và tính đường về trước."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng đi lại an toàn", chapters: [
        { label: "Làm quen đường sá", illus: "world-map" },
        { label: "Xe buýt", illus: "bus" },
        { label: "Xe công nghệ", illus: "oncoming-taxi" },
        { label: "Xe máy, xe đạp", illus: "motor-scooter" },
        { label: "Về khuya", illus: "crescent-moon" },
        { label: "Va chạm, sự cố", illus: "ambulance" } ] },
      lines: [
        L("l1", null, "Six parts: your first week, buses, ride apps,", "Sáu phần: tuần đầu, xe buýt, xe công nghệ,"),
        L("l2", null, "bikes, late nights, and small accidents.", "xe máy xe đạp, về khuya, và khi có va chạm."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Làm quen đường sá" },
      lines: [L("l1", "det", "Part one: getting to know the roads.", "Phần một: tuần đầu làm quen đường sá.")] },
    { id: "s05", module: "SCENE-01", ref: "p1",
      data: { set: "street", label: "Đi thử một lượt", actors: [{ id: "lan", side: "left", enter: "walk" }], props: ["bus", "school"] },
      lines: [
        L("l1", "lan", "Before my first class: a test trip, room to school, by daylight.", "Trước buổi học đầu: đi thử từ trọ đến trường, ban ngày.", { face: "happy", pose: "explain" }),
        L("l2", "lan", "By bus, the same way I'll go on Monday.", "Bằng xe buýt, đúng như thứ Hai mình sẽ đi.", { pose: "point" }),
        L("l3", null, "Knowing the turns, the parking and the class gate makes day one calmer.", "Biết trước chỗ rẽ, chỗ gửi xe, cổng vào lớp: sáng đầu bớt cuống."),
      ] },
    { id: "s06", module: "LIST-05", ref: "p2",
      data: { title: "Tuần đầu, chuẩn bị", items: ["Lưu địa chỉ trọ, trường, bệnh viện gần nhất", "Tải bản đồ xem được khi mất mạng", "Ghi địa chỉ trọ ra giấy, để trong ví", "Mang sạc dự phòng khi đi xa"], illus: "world-map" },
      lines: [
        L("l1", null, "Save your room, school and nearest hospital in your phone.", "Lưu địa chỉ trọ, trường, bệnh viện gần nhất vào điện thoại."),
        L("l2", null, "Download an offline map.", "Tải bản đồ khu vực để xem khi mất mạng."),
        L("l3", null, "Write your address on paper, and keep it in your wallet.", "Ghi địa chỉ trọ ra giấy, để trong ví."),
        L("l4", null, "Carry a power bank. Your phone is your map and your way to call for help.", "Mang sạc dự phòng: điện thoại là bản đồ và là cách gọi giúp đỡ."),
      ] },
    { id: "s07", module: "SCENE-02", ref: "p3",
      data: { set: "room", label: "Những tuần đầu", actor: { id: "lan", side: "left" }, contact: { name: "Bạn cùng phòng", illus: "woman-student" },
        messages: [{ from: "me", text: "Mấy tuần đầu mình chia sẻ vị trí với cậu nhé.", at: "l2" }, { from: "them", text: "Ừ, có gì mình biết tìm cậu ở đâu.", at: "l3" }] },
      lines: [
        L("l1", "lan", "Going somewhere new? Someone should know where I am.", "Đi nơi lạ, nên có người biết mình ở đâu.", { face: "thinking" }),
        L("l2", "lan", "I'll share my location with you for the first few weeks.", "Mấy tuần đầu mình chia sẻ vị trí với cậu nhé."),
        L("l3", "them", "Okay. If anything happens, I'll know where to find you.", "Ừ, có gì mình biết tìm cậu ở đâu."),
        L("l4", null, "It's not being watched. And share only with someone you trust, not publicly.", "Không phải bị theo dõi. Chỉ chia sẻ với người tin cậy, đừng công khai."),
      ] },

    // ── Chương 2
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Đi xe buýt" },
      lines: [L("l1", "det", "Part two: taking the bus.", "Phần hai: đi xe buýt cần biết gì?")] },
    { id: "s09", module: "DLG-01", ref: "p5,p7,p8",
      data: { set: "street", label: "Xe buýt giờ tan tầm",
        actors: [{ id: "lan", side: "left" }],
        verdict: { ok: false, label: "Điện thoại ở ngăn ngoài ba lô sau lưng",
          why: "Xe đông, người chen, khoá ngăn bị mở mà bạn không thấy.", rule: "Xe càng đông, túi càng phải ở phía trước" } },
      lines: [
        L("l1", null, "Rush hour. The bus is packed. Lan's phone is in the outside pocket of her backpack.", "Giờ tan tầm, xe chật. Điện thoại Lan ở ngăn ngoài ba lô."),
        L("l2", "lan", "Which stop is mine? Let me look out the window…", "Điểm dừng của mình đâu nhỉ? Nhìn ra cửa sổ xem…", { face: "thinking", pose: "point", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Her pocket is open now. The phone is gone, with photos and numbers not backed up.", "Ngăn ba lô đã mở toang. Mất điện thoại, mất cả ảnh, số chưa sao lưu."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "lan", "Backpack on my front. Phone in the zipped inside pocket.", "Ba lô đeo phía trước. Điện thoại ở túi trong có khoá kéo.", { phase: "redo", pose: "hold" }),
        L("l7", "lan", "And not in my hand near the door.", "Và không cầm điện thoại sát cửa xe.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s10", module: "LIST-13", ref: "p4",
      data: { title: "Lên đúng xe", items: [
        { title: "Tra tuyến trên bản đồ hoặc thông tin chính thức", detail: "Nhìn bảng ở trạm: số xe, hướng đi.", illus: "bus-stop" },
        { title: "Vé tháng cho sinh viên", detail: "Hỏi ở trạm hoặc phòng công tác sinh viên; tuỳ từng thành phố.", illus: "ticket" } ] },
      lines: [
        L("l1", null, "Check routes on a map or the city's official information.", "Tra tuyến trên bản đồ hoặc thông tin chính thức của thành phố."),
        L("l2", null, "At the stop, check the bus number and the direction.", "Ở trạm, nhìn bảng để chắc số xe, hướng đi."),
        L("l3", null, "Many cities have cheap monthly passes for students. Ask at the station or student affairs.", "Nhiều nơi có vé tháng ưu đãi: hỏi ở trạm hoặc phòng công tác sinh viên."),
      ] },
    { id: "s11", module: "SCENE-01", ref: "p6",
      data: { set: "street", label: "Bạn có quyền lên tiếng", actors: [{ id: "lan", side: "left" }] },
      lines: [
        L("l1", null, "Someone stands too close, touches you, or says something unpleasant?", "Có người đứng sát, chạm vào người, nói lời khó chịu?"),
        L("l2", null, "Move near the driver or other people.", "Di chuyển lại gần tài xế hoặc chỗ đông người."),
        L("l3", "lan", "Please step back a little.", "Anh đứng lùi ra giúp em.", { face: "stern", pose: "stop" }),
        L("l4", null, "Say it clearly. You can tell the conductor or the driver.", "Nói rõ ràng, và báo phụ xe, tài xế."),
      ] },

    // ── Chương 3
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Đặt xe công nghệ" },
      lines: [L("l1", "det", "Part three: ride apps.", "Phần ba: đặt xe công nghệ sao cho an toàn?")] },
    { id: "s13", module: "DLG-01", ref: "p9,p13,p14",
      data: { set: "street", label: "Bến xe, gần mười giờ tối",
        actors: [{ id: "dung", side: "right", pose: "phone" }],
        verdict: { ok: false, label: "Đi theo người tự xưng “xe đặt qua ứng dụng”",
          why: "Chưa kiểm tra thì chưa biết có phải đúng xe mình đã đặt.", rule: "Chỉ đặt qua ứng dụng, lên đúng xe đã đặt" } },
      lines: [
        L("l1", null, "Nearly ten p.m. at the bus station. A man walks up: “Your app car is here!”", "Gần mười giờ tối ở bến xe, một người lại gần: “Xe đặt qua ứng dụng đây em!”"),
        L("l2", "dung", "Oh, great. Let's go!", "Ồ, hay quá. Đi thôi anh!", { face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Fakes wait at stations and school gates, for tired people who skip checking.", "Người giả hay đứng ở bến xe, cổng trường, chờ người mệt quên kiểm tra."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "dung", "No, thanks. I'll stand in the light and book on my app.", "Dạ thôi ạ. Mình đứng chỗ sáng, tự đặt trên ứng dụng.", { phase: "redo", face: "thinking", pose: "phone" }),
        L("l7", "dung", "The plate matches. Excuse me, who are you picking up?", "Biển số khớp rồi. Anh ơi, anh đón ai ạ?", { phase: "redo", pose: "explain", face: "happy" }),
        L("l8", "det", "Plate matches, then get in.", "Biển số khớp rồi hãy lên xe.", { phase: "redo" }),
      ] },
    { id: "s14", module: "LIST-05", ref: "p10",
      data: { title: "Trước khi lên xe", items: ["So biển số với ứng dụng", "Nhìn tên và ảnh tài xế", "Hỏi tài xế tên người đặt", "Chia sẻ chuyến đi cho bạn cùng phòng"], illus: "oncoming-taxi" },
      lines: [
        L("l1", null, "Check the plate number. Check the driver's name and photo.", "So biển số. Nhìn tên và ảnh tài xế."),
        L("l2", null, "Ask whose booking it is. Don't say your own name first.", "Hỏi tài xế tên người đặt, đừng tự nói tên mình."),
        L("l3", null, "A real driver knows it from the app. A fake one can just agree.", "Tài xế thật biết tên trên ứng dụng, người giả chỉ việc gật đầu."),
        L("l4", null, "Share the trip with your roommate. Doesn't match? “The plate isn't the same as the app. I'll book again.”", "Chia sẻ chuyến đi. Không khớp: “Biển số không giống ứng dụng, em xin đặt lại ạ.”"),
      ] },
    { id: "s15", module: "LIST-13", ref: "p11,p12",
      data: { title: "Trên xe", items: [
        { title: "Đi một mình: ngồi ghế sau", detail: "Theo dõi đường trên bản đồ của mình.", illus: "world-map" },
        { title: "Tài xế lệch hướng không giải thích", detail: "Hỏi lại, đề nghị dừng ở nơi đông người.", illus: "round-pushpin" },
        { title: "Trả đúng giá trên ứng dụng", detail: "Bị đòi thêm vô lý: bình tĩnh, chụp thông tin chuyến, phản ánh sau khi xuống xe.", illus: "money-bag" } ] },
      lines: [
        L("l1", null, "Riding alone in a car? Sit in the back, and follow the route on your own map.", "Đi ô tô một mình: ngồi ghế sau, theo dõi đường trên bản đồ."),
        L("l2", null, "The driver changes route with no reason? Ask, and ask to stop somewhere busy.", "Tài xế lệch hướng không giải thích: hỏi lại, xin dừng nơi đông người."),
        L("l3", null, "Pay the price in the app. Asked for much more? Stay calm.", "Trả đúng giá trên ứng dụng. Bị đòi thêm vô lý: giữ bình tĩnh."),
        L("l4", null, "Take a photo of the trip details, and report it once you're safely out.", "Chụp thông tin chuyến, phản ánh qua ứng dụng khi đã xuống an toàn."),
      ] },

    // ── Chương 4
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Xe máy, xe đạp" },
      lines: [L("l1", "det", "Part four: riding your own bike.", "Phần bốn: tự đi xe máy, xe đạp.")] },
    { id: "s17", module: "HOST-02", ref: "p15",
      data: { statement: "“Ai cũng đi thế”, nên chưa có bằng vẫn cứ đi xe máy", truth: false,
        why: "Đi xe máy cần đủ tuổi và giấy phép lái xe; xe điện có quy định riêng." },
      lines: [
        L("l1", "det", "Everyone rides without a licence, so you can too. True or false?", "“Ai cũng đi thế”, chưa có bằng vẫn đi xe máy được. Đúng hay sai?"),
        L("l2", "det", "False. You need the right age and a licence. E-bikes have their own rules.", "Sai. Cần đủ tuổi và giấy phép lái xe. Xe điện có quy định riêng.", { face: "stern" }),
        L("l3", "det", "Check the current rules before you buy or borrow a bike.", "Tìm hiểu quy định hiện hành trước khi mua hay mượn xe."),
      ] },
    { id: "s18", module: "CMP-06", ref: "p16",
      data: { do: ["Mũ bảo hiểm đạt chuẩn, cài quai, kể cả quãng ngắn", "Xem bản đồ: dừng hẳn vào lề"], dont: ["Vừa đi vừa dùng điện thoại"],
        doIcons: ["billed-cap", "world-map"], dontIcons: ["mobile-phone"] },
      lines: [
        L("l1", null, "Wear a proper helmet, strap fastened, every time. Even for short trips.", "Đội mũ bảo hiểm đạt chuẩn, cài quai, mỗi lần đi, kể cả quãng ngắn."),
        L("l2", null, "Never use your phone while riding. To check the map, pull over and stop.", "Không vừa đi vừa dùng điện thoại. Xem bản đồ thì dừng hẳn vào lề."),
      ] },
    { id: "s19", module: "LIST-05", ref: "p17",
      data: { title: "Giữ xe", items: ["Gửi bãi có người trông, giữ vé cẩn thận", "Ở trọ: khoá cổ xe", "Thêm một khoá phụ, kể cả dừng một lát"], illus: "locked" },
      lines: [
        L("l1", null, "Park where there's an attendant, and keep your ticket safe.", "Gửi xe ở bãi có người trông, giữ vé cẩn thận."),
        L("l2", null, "At your room, lock the steering and add an extra lock.", "Ở trọ, khoá cổ xe và dùng thêm khoá phụ."),
        L("l3", null, "Even when you stop for just a moment.", "Kể cả khi chỉ dừng một lát."),
      ] },
    { id: "s20", module: "SCENE-01", ref: "p18,p19",
      data: { set: "street", label: "Chỉ năm phút", actors: [{ id: "dung", side: "right" }], props: ["motor-scooter"] },
      lines: [
        L("l1", "dung", "Just five minutes to grab my stuff. No need to lock it.", "Chạy vào lấy đồ “chỉ năm phút”, khỏi khoá.", { face: "happy", pose: "point" }),
        L("l2", null, "No steering lock. The key still in. When Dũng comes back, the bike is gone.", "Không khoá cổ, chìa vẫn cắm. Quay ra, xe đã không còn."),
        L("l3", null, "The camera shows only a figure in a full helmet.", "Camera đầu ngõ chỉ quay được một bóng người đội mũ kín."),
        L("l4", "det", "Lock it even for a minute. Take the key even for one step.", "Dừng một phút cũng khoá, rời một bước cũng rút chìa.", { react: { dung: "sad" } }),
      ] },

    // ── Chương 5
    { id: "s21", module: "HOST-03", data: { n: 5, of: 6, title: "Về khuya yên tâm" },
      lines: [L("l1", "det", "Part five: coming home late.", "Phần năm: về khuya thì làm sao cho yên tâm?")] },
    { id: "s22", module: "LIST-01", ref: "p20",
      data: { title: "Trước khi đi chơi, tính đường về", items: ["Đi bằng gì", "Mấy giờ về", "Khu trọ đóng cổng lúc nào", "Báo giờ về, nhắn khi đã tới"], illus: "crescent-moon", icons: ["motor-scooter", "alarm-clock", "door", "mobile-phone"] },
      lines: [
        L("l1", null, "Before going out: how will you get home, and when?", "Trước khi đi chơi: về bằng gì, mấy giờ về?"),
        L("l2", null, "What time does your building close?", "Khu trọ đóng cổng lúc nào?"),
        L("l3", null, "Tell your roommate when you'll be back, and text when you arrive.", "Báo bạn cùng phòng giờ về, và nhắn khi đã về đến nơi."),
      ] },
    { id: "s23", module: "CMP-01", ref: "p21",
      data: { labels: ["Đường tắt", "Đường lớn"], left: "Vắng, tối, đi một mình, dù nhanh hơn", right: "Có đèn, đi cùng bạn, điện thoại đủ pin", illus: ["crescent-moon", "light-bulb"] },
      lines: [
        L("l1", null, "Go with friends, on big bright roads.", "Ưu tiên đi cùng bạn, đi đường lớn có đèn."),
        L("l2", null, "Avoid dark empty shortcuts, even if they're faster.", "Tránh đường tắt vắng, tối, dù nhanh hơn."),
        L("l3", null, "Keep enough battery to book a car, find the way, or call for help.", "Giữ đủ pin để đặt xe, tìm đường, gọi giúp đỡ."),
      ] },
    { id: "s24", module: "LIST-13", ref: "p22,p23",
      data: { title: "Đêm muộn", items: [
        { title: "Thấy có người bám theo", detail: "Vào cửa hàng còn mở hoặc chỗ đông người, gọi người quen, nói rõ mình ở đâu.", illus: "convenience-store" },
        { title: "Đừng đi thẳng về trọ", detail: "Khi người đó vẫn đang theo sau.", illus: "house" },
        { title: "Đã uống rượu bia", detail: "Không lái xe: đặt xe hoặc nhờ người không uống chở về.", illus: "beer-mug" },
        { title: "Chỗ đông người", detail: "Đồ uống của mình luôn trong tầm mắt.", illus: "eyes" } ] },
      lines: [
        L("l1", null, "Someone following you? Go into an open shop or a busy place.", "Có người bám theo: vào cửa hàng còn mở hoặc chỗ đông người."),
        L("l2", null, "Call someone and say exactly where you are. Don't lead them to your room.", "Gọi người quen, nói rõ mình ở đâu. Đừng đi thẳng về trọ."),
        L("l3", null, "Had a drink? Don't ride. Book a car, or ride with someone who hasn't drunk.", "Đã uống thì không lái: đặt xe hoặc nhờ người không uống chở."),
        L("l4", null, "In a crowd, keep your drink in sight.", "Ở chỗ đông người, giữ đồ uống trong tầm mắt."),
      ] },
    { id: "s25", module: "HOST-01", ref: "p25",
      data: { title: "Nhớ buổi tối thứ hai của Lan", pose: "point", text: "Tính đường về trước khi tính chỗ vui." },
      lines: [
        L("l1", "det", "Remember Lan's second ending? Charged phone, a friend going the same way, main roads.", "Nhớ kết cục thứ hai của Lan: pin đầy, bạn cùng hướng, đường lớn."),
        L("l2", "det", "Plan the way home before you plan the fun.", "Tính đường về trước khi tính chỗ vui.", { face: "wink" }),
      ] },

    // ── Chương 6
    { id: "s26", module: "HOST-03", data: { n: 6, of: 6, title: "Va chạm, sự cố" },
      lines: [L("l1", "det", "Part six: a small accident on the road.", "Phần sáu: gặp va chạm thì xử lý sao?")] },
    { id: "s27", module: "LIST-06", ref: "p26",
      data: { title: "Va chạm nhẹ", steps: [
        { text: "Bình tĩnh, đưa xe vào lề", illus: "motor-scooter" },
        { text: "Xem mình và người kia có bị thương không", illus: "adhesive-bandage" },
        { text: "Chụp hiện trường, biển số", illus: "camera-with-flash" },
        { text: "Lúng túng thì gọi người quen đến", illus: "mobile-phone" } ] },
      lines: [
        L("l1", null, "A small crash? Stay calm, and move to the side of the road.", "Va chạm nhẹ: bình tĩnh, đưa xe vào lề cho an toàn."),
        L("l2", null, "Check if you or the other person is hurt.", "Kiểm tra mình và người kia có bị thương không."),
        L("l3", null, "Take photos of the scene and the plates. They're evidence later.", "Chụp ảnh hiện trường, biển số: đó là bằng chứng về sau."),
        L("l4", null, "Feeling lost? Call someone you know to come.", "Thấy lúng túng thì gọi một người quen đến."),
      ] },
    { id: "s28", module: "CMP-06", ref: "p27",
      data: { do: ["Không thoả thuận được hoặc có người bị thương: gọi cơ quan chức năng, cấp cứu"], dont: ["Cãi nhau to tiếng", "Vội đưa tiền vì bị dồn ép"],
        doIcons: ["police-car"], dontIcons: ["angry-face", "money-with-wings"] },
      lines: [
        L("l1", null, "Don't shout. And don't hand over money just because you're pressured.", "Đừng cãi to tiếng, cũng đừng vội đưa tiền vì bị dồn ép."),
        L("l2", null, "Can't agree, or someone is hurt? Call the authorities, and an ambulance if needed.", "Không thoả thuận được, có người bị thương: gọi cơ quan chức năng, cấp cứu."),
      ] },
    { id: "s29", module: "SCENE-01", ref: "p28",
      data: { set: "home", label: "Nếu bạn là phụ huynh", actors: [{ id: "lan", side: "left" }, { id: "binh", side: "right" }] },
      lines: [
        L("l1", null, "Parents: instead of banning nights out, agree on a few rules together.", "Phụ huynh: thay vì cấm con đi tối, cùng con thống nhất vài nguyên tắc."),
        L("l2", "binh", "Text me when you get home. Share your location when you go far.", "Về đến nơi thì nhắn bố. Đi xa thì chia sẻ vị trí.", { pose: "explain", to: "lan" }),
        L("l3", "binh", "And never ride after drinking.", "Và không bao giờ lái xe sau khi uống.", { face: "stern" }),
        L("l4", "lan", "Deal, Dad.", "Dạ, con nhớ rồi.", { face: "happy", pose: "thumb" }),
        L("l5", null, "Clear rules keep them safe even when you're not there. A ban may just mean going out secretly.", "Nguyên tắc rõ giúp con tự giữ an toàn. Cấm hẳn, con dễ đi lén."),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s30", module: "HOST-01", ref: "p8,p14,p19,p25",
      data: { title: "Bốn câu nhớ đường", pose: "present", items: ["Xe càng đông, túi càng ở phía trước", "Biển số khớp rồi hãy lên xe", "Dừng một phút cũng khoá", "Tính đường về trước"] },
      lines: [
        L("l1", "det", "The busier the bus, the more your bag goes in front.", "Xe càng đông, túi càng phải ở phía trước."),
        L("l2", "det", "Plate matches, then get in.", "Biển số khớp rồi hãy lên xe."),
        L("l3", "det", "Lock it even for a minute.", "Dừng một phút cũng khoá."),
        L("l4", "det", "Plan the way home before the fun.", "Tính đường về trước khi tính chỗ vui."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[12]",
      data: {
        q: "The plate number does not match the app, but the driver says it is fine, what should you do?",
        options: [
          "Ask for a discount, and then accept the ride if the price is lower",
          "Get in anyway, because drivers often change cars and forget to update",
          "Politely refuse the ride, cancel, and book again through the app",
        ],
        correct: 2, countdown: 5, illus: "oncoming-taxi",
        why: "Không khớp biển số là không biết chắc người lái là ai.",
      },
      lines: [
        L("l1", null, "The plate number does not match the app, but the driver says it is fine, what should you do?", "Biển số không khớp ứng dụng nhưng tài xế bảo không sao, bạn nên làm gì?"),
        L("l2", null, "Politely refuse the ride, cancel, and book again through the app.", "Từ chối lịch sự, huỷ và đặt lại qua ứng dụng."),
        L("l3", null, "If it doesn't match, you can't be sure who is driving. A few minutes is worth it.", "Không khớp là không biết chắc ai lái. Mất vài phút vẫn đáng."),
      ] },
    { id: "s32", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Tonight, charge your power bank, and share your location with your roommate.", "Tối nay sạc đầy pin dự phòng, chia sẻ vị trí với bạn cùng phòng."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
