// Kịch bản video W lần 3 (#110) — "Giữ tinh thần nhóm khi áp lực công việc tăng" · chuỗi "Lần đầu làm trưởng nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "keep-team-morale-under-pressure--w01",
  hook: "HOOK-13",
  loop: { open: "s01", close: "s26" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "first-time-team-leaders", slug: "keep-team-morale-under-pressure", door: "ky-nang", level: "B1",
    title: "Giữ tinh thần nhóm khi áp lực công việc tăng", series: "Lần đầu làm trưởng nhóm" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” (trưởng nhóm), Đạt (p13), Tâm (p23) → Thảo; thành viên nhắn việc nửa đêm (⚖️ p4), Tú (p15) → Dũng; Linh (p18) → Lan; chị quản lý / sếp (p7, p17, p21) → Cô Hoa (chỉ nói câu trung lập: chỉ thứ tự ưu tiên, “mình cùng xem”). Vai mới (#110): bài không có trẻ con, bà cụ, người nước ngoài → không dùng. Khuôn phóng to chi tiết bị bỏ qua: giờ gửi tin lúc nửa đêm (⚖️ p4), trả lời ở DLG-01 s06. Nội dung tin của Dũng chỉ dựng từ “nhắn việc lúc nửa đêm”. Đoạn an toàn p22 (#107) nay đưa vào thẻ TEXT-04 s25, lời đọc giữ đúng bài (hỏi han nhẹ nhàng, gợi ý hỗ trợ; nếu nói đến chuyện làm hại bản thân thì không để một mình, liên hệ người thân, nhân sự hoặc gọi 115) — người duyệt xem kỹ. Phủ ý: 27/27.",
  scenes: [
    { id: "s01", module: "SCENE-02", ref: "p4",
      data: { set: "home", label: "Mấy tuần nay", actor: { id: "thao", side: "left" },
        contact: { name: "Dũng · nửa đêm", illus: "crescent-moon" },
        messages: [
          { from: "them", text: "Chị ơi, em gửi phần việc hôm nay ạ.", at: "l2" },
          { from: "me", text: "Chăm quá! Mai chị khen em trước cả nhóm nhé.", at: "l3" } ] },
      lines: [
        L("l1", null, "For weeks, Dung has sent work messages at midnight.", "Mấy tuần nay, đêm nào Dũng cũng nhắn việc lúc nửa đêm."),
        L("l2", "them", "Here is today's work.", "Chị ơi, em gửi phần việc hôm nay ạ."),
        L("l3", "thao", "So hard-working! I will praise you in front of the team.", "Chăm quá! Mai chị khen em trước cả nhóm nhé.", { face: "happy" }),
        L("l4", null, "Look closer at the time. What is it really telling you?", "Nhìn kỹ giờ gửi tin. Nó đang nói điều gì?", { wait: 300 }),
      ],
      beats: { after: 700 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Giữ nhóm qua giai đoạn khó", pose: "present", items: ["Nói thật, có điểm dừng", "Bớt việc ít giá trị", "Cảm ơn cụ thể", "Giữ sức cho mình"] },
      lines: [
        L("l1", "det", "Pressure is rising. How do you keep the team going? Not with “keep going!”", "Áp lực tăng, giữ tinh thần nhóm thế nào? Không phải bằng “cố lên”."),
        L("l2", "det", "Tell the truth, with an end point.", "Nói thật, có điểm dừng."),
        L("l3", "det", "Cut low-value work.", "Bớt việc ít giá trị."),
        L("l4", "det", "Say thank you, specifically.", "Cảm ơn cụ thể."),
        L("l5", "det", "And look after yourself.", "Và giữ sức cho mình."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Năm phần của video", pose: "point", items: ["Dấu hiệu quá tải", "Nói với nhóm", "Giảm tải cho đúng", "Động viên thật", "Giữ sức, rút kinh nghiệm"] },
      lines: [
        L("l1", "det", "Signs of overload.", "Một: dấu hiệu quá tải."),
        L("l2", "det", "Talking to the team.", "Hai: nói với nhóm."),
        L("l3", "det", "Cutting the load.", "Ba: giảm tải cho đúng."),
        L("l4", "det", "Real encouragement.", "Bốn: động viên thật."),
        L("l5", "det", "Your own strength, and what comes after.", "Năm: giữ sức, rút kinh nghiệm."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 5, title: "Dấu hiệu quá tải" },
      lines: [L("l1", "det", "Part one: how do you know the team is overloaded?", "Phần một: làm sao biết nhóm đang quá tải?")] },
    { id: "s05", module: "LIST-05", ref: "p1",
      data: { title: "Vài dấu hiệu cùng lúc thì nên để ý", illus: "warning",
        items: ["Sai lỗi nhỏ trước đây không mắc", "Ít nói hẳn trong họp", "Dễ cáu vì chuyện nhỏ", "Thường nhắn việc lúc khuya", "Xin nghỉ đột xuất nhiều hơn"] },
      lines: [
        L("l1", null, "New small mistakes, going quiet in meetings, getting angry over little things.", "Sai lỗi nhỏ mới, ít nói trong họp, dễ cáu vì chuyện nhỏ."),
        L("l2", null, "Late-night messages, more sudden days off. Several at once deserve attention.", "Nhắn việc lúc khuya, nghỉ đột xuất nhiều hơn. Vài dấu hiệu cùng lúc thì nên để ý."),
      ] },
    { id: "s06", module: "DLG-01", ref: "p2,p4,p5",
      data: { set: "meeting", label: "Buổi họp sáng",
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }],
        verdict: { ok: false, label: "Khen làm khuya trước cả nhóm", why: "Làm khuya kéo dài thường là quá tải, và lời khen biến nó thành chuẩn cho cả nhóm." } },
      lines: [
        L("l1", "thao", "Dung works until midnight every night. Great job!", "Dũng tối nào cũng làm tới nửa đêm. Giỏi quá!", { face: "happy", pose: "thumb", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Late nights for weeks often mean overload. Praise it, and others think they must do it too.", "Làm khuya mấy tuần thường là quá tải. Khen lên, người khác nghĩ mình cũng phải thế."),
        L("l4", "det", "Let's rewind. Ask him in private.", "Tua lại. Hỏi riêng bạn ấy nhé.", { phase: "redo" }),
        L("l5", "thao", "You have been working late. Is any part too much for you?", "Dạo này em phải làm khuya, có phần nào đang quá sức không?", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l6", "dung", "Honestly, yes. I was afraid to say it.", "Dạ thật ra có ạ. Em ngại nói.", { phase: "redo", face: "sad" }),
        L("l7", "thao", "Thank you for telling me. Let's share the work.", "Cảm ơn em đã nói. Mình chia bớt việc nhé.", { phase: "redo", face: "happy" }),
        L("l8", "det", "See late nights? Ask if they are okay before you praise.", "Thấy làm khuya đừng vội khen, hãy hỏi có ổn không.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s07", module: "CMP-01", ref: "p2,p3",
      data: { labels: ["Áp lực ngắn", "Áp lực kéo dài"], left: "Có lý do rõ, có điểm dừng: nhóm chịu được", right: "Không ai biết bao giờ hết: kiệt sức", illus: ["stopwatch", "tired-face"] },
      lines: [
        L("l1", null, "If they say “I'm fine” to everything, ask a specific question: which task feels heaviest?", "Ai cũng đáp “em ổn”? Hỏi cụ thể hơn: việc nào tuần này nặng nhất?"),
        L("l2", null, "Short pressure with a reason and an end, a team can handle.", "Áp lực ngắn, có lý do, có điểm dừng thì nhóm chịu được."),
        L("l3", null, "Long pressure that nobody knows the end of, that is what exhausts people.", "Áp lực kéo dài, không biết bao giờ hết, mới làm người ta kiệt sức."),
      ] },

    // ---------- Phần 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 5, title: "Nói với nhóm" },
      lines: [L("l1", "det", "Part two: how to talk about a hard period.", "Phần hai: nói với nhóm thế nào về giai đoạn khó.")] },
    { id: "s09", module: "LIST-08", ref: "p6",
      data: { title: "Nói thật ba điều", items: [
        { title: "Vì sao gấp", detail: "Lý do thật của đợt căng", illus: "alarm-clock" },
        { title: "Căng đến bao giờ", detail: "Điểm dừng rõ ràng", illus: "spiral-calendar" },
        { title: "Xong đợt này thì sao", detail: "Điều nhóm có sau đó", illus: "beach-with-umbrella" } ] },
      lines: [
        L("l1", null, "Tell three truths: why it is urgent, how long it lasts, and what comes after.", "Nói thật ba điều: vì sao gấp, căng đến bao giờ, xong thì sao."),
        L("l2", null, "People handle hard times better when they see the end.", "Biết có điểm dừng, người ta chịu được khó khăn."),
      ] },
    { id: "s10", module: "SCENE-01", ref: "p7",
      data: { set: "meeting", label: "Đầu đợt căng", actors: [{ id: "thao", side: "left" }, { id: "lan", side: "center" }] },
      lines: [
        L("l1", "thao", "The next two weeks will be tough. The client moved the deadline earlier.", "Hai tuần tới sẽ căng vì khách dời hạn lên sớm.", { pose: "explain" }),
        L("l2", "thao", "I asked to move two less urgent tasks to next month.", "Mình đã xin lùi hai việc ít gấp sang tháng sau.", { pose: "explain" }),
        L("l3", "thao", "After this, I will propose rest days for us to our manager.", "Xong đợt này, mình sẽ đề xuất với chị quản lý cho nhóm nghỉ bù.", { face: "happy", react: { lan: "happy" } }),
      ] },
    { id: "s11", module: "HOST-02", ref: "p8",
      data: { statement: "Cứ hứa chắc nghỉ bù cho nhóm vui, dù sếp chưa duyệt", truth: false, why: "Chỉ hứa điều chắc làm được, hoặc nói rõ là đề xuất. Hứa mà không giữ, mất lòng tin." },
      lines: [
        L("l1", "det", "Promise rest days to cheer them up, even before your manager agrees. True or false?", "Cứ hứa chắc nghỉ bù cho vui, dù sếp chưa duyệt. Đúng hay sai?"),
        L("l2", "det", "False. Promise only what you can deliver, or say it is a proposal.", "Sai. Chỉ hứa điều chắc làm được, hoặc nói rõ là đề xuất.", { face: "stern" }),
        L("l3", "det", "A broken promise hurts trust more than the pressure itself.", "Lời hứa không giữ làm mất lòng tin hơn cả áp lực."),
      ] },
    { id: "s12", module: "CMP-06", ref: "p9",
      data: { do: ["Giọng bình tĩnh", "Nói rõ việc tiếp theo"], dont: ["Giả vờ mọi thứ vẫn ổn", "Than thở trước cả nhóm"],
        doIcons: ["relieved-face", "footprints"], dontIcons: ["upside-down-face", "loudly-crying-face"] },
      lines: [
        L("l1", null, "Do not pretend all is fine. Do not complain in front of the team either.", "Đừng giả vờ ổn, cũng đừng than thở trước cả nhóm."),
        L("l2", null, "Feel like shouting “we are doomed”? Admit it is tough, then calmly name the next step.", "Muốn kêu “toi rồi”? Nhận là khó, rồi bình tĩnh nói việc tiếp theo."),
      ] },

    // ---------- Phần 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 5, title: "Giảm tải cho đúng" },
      lines: [L("l1", "det", "Part three: how to cut the load the right way.", "Phần ba: giảm tải bằng cách nào cho đúng.")] },
    { id: "s14", module: "LIST-06", ref: "p10",
      data: { title: "Cùng nhóm xếp lại việc", steps: [
        { text: "Liệt kê mọi việc đang có", illus: "memo" },
        { text: "Xếp theo mức gấp và mức quan trọng", illus: "bar-chart" },
        { text: "Đề xuất lùi hoặc bỏ việc ít giá trị", illus: "wastebasket" },
        { text: "Xin sếp đồng ý trước khi bỏ", illus: "handshake" } ] },
      lines: [
        L("l1", null, "With the team, list every task. Rank them by urgency and importance.", "Cùng nhóm liệt kê mọi việc, xếp theo mức gấp và quan trọng."),
        L("l2", null, "Propose to delay or drop low-value tasks, and get your manager's okay first.", "Đề xuất lùi hoặc bỏ việc ít giá trị, xin sếp đồng ý trước."),
      ] },
    { id: "s15", module: "REL-02", ref: "p11,p13,p14",
      data: { chain: ["Trưởng nhóm ôm việc khó, làm đến khuya", "Các bạn không dám về sớm", "Việc chờ duyệt, cả nhóm kẹt"], illus: ["crescent-moon", "office-building", "hourglass-not-done"] },
      lines: [
        L("l1", null, "Thao feels sorry for the team, so she takes the hard work and stays late every night.", "Thảo thương nhóm mệt, nhận phần khó về mình, tối nào cũng làm khuya."),
        L("l2", null, "Nobody dares leave early. Everything waits for her approval. The team is tired and stuck.", "Không ai dám về sớm. Mọi việc chờ duyệt. Cả nhóm vừa mệt vừa kẹt."),
        L("l3", null, "Carry every task alone, and the team carries extra worry. Share work by each person's strength.", "Mình ôm hết việc, nhóm ôm thêm lo. Chia việc theo sức từng người."),
        L("l4", null, "Not all to the fastest one. Fast people burn out too.", "Đừng dồn cho người làm nhanh. Người nhanh cũng có lúc cạn sức."),
      ] },
    { id: "s16", module: "CMP-01", ref: "p12",
      data: { labels: ["Họp dài, họp nhiều", "Một tin nhắn mỗi ngày"], left: "Tốn giờ đúng lúc nhóm thiếu giờ nhất", right: "Hôm nay xong gì, đang vướng gì", illus: ["hourglass-not-done", "mobile-phone"] },
      lines: [
        L("l1", null, "Cut meetings that are not really needed.", "Cắt bớt những cuộc họp không thật cần."),
        L("l2", null, "Use one short message a day: what is done, and what is blocked.", "Thay bằng một tin ngắn mỗi ngày: xong gì, đang vướng gì."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s17", module: "HOST-03", data: { n: 4, of: 5, title: "Động viên thật" },
      lines: [L("l1", "det", "Part four: encouragement that is not empty.", "Phần bốn: động viên thế nào cho khỏi sáo rỗng.")] },
    { id: "s18", module: "SCENE-01", ref: "p15",
      data: { set: "meeting", label: "Sáng thứ Năm", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "Thank people specifically, and at the right time: who did what, and how it helped.", "Cảm ơn cụ thể, đúng lúc: ai làm việc gì, giúp nhóm thế nào."),
        L("l2", "thao", "Thanks, Dung, for checking the price list last night. We sent it to the client on time.", "Cảm ơn Dũng tối qua rà lại bảng giá, nhờ vậy sáng nay gửi khách kịp.", { face: "happy", pose: "thumb", react: { dung: "happy" } }),
      ] },
    { id: "s19", module: "LIST-02", ref: "p16",
      data: { title: "Điều nhỏ mà có ý nghĩa", illus: "red-heart", items: [
        { icon: "utensils", illus: "bento-box", text: "Nhắc nghỉ trưa đúng giờ" },
        { icon: "house", illus: "house", text: "Cho về sớm sau ngày căng nhất" },
        { icon: "heart", illus: "face-with-thermometer", text: "Hỏi thăm người vừa ốm dậy" } ] },
      lines: [
        L("l1", null, "Small things matter: lunch on time, leaving early after the hardest day.", "Điều nhỏ có ý nghĩa: nghỉ trưa đúng giờ, về sớm sau ngày căng nhất."),
        L("l2", null, "Ask about someone who was just sick. It costs nothing, and shows you notice.", "Hỏi thăm người vừa ốm dậy. Không tốn kém, mà cho thấy bạn để ý."),
      ] },
    { id: "s20", module: "SCENE-01", ref: "p17",
      data: { set: "office", label: "Việc phát sinh", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "farright", pose: "hold" }] },
      lines: [
        L("l1", null, "Protect the team from extra requests. Do not pass new work straight down.", "Che chắn nhóm khỏi việc phát sinh. Đừng đẩy ngay xuống cho mọi người."),
        L("l2", "thao", "Before I give this to the team, which one is the priority?", "Trước khi giao cho nhóm, chị cho em biết việc nào ưu tiên trước ạ?", { pose: "explain", to: "hoa" }),
        L("l3", "hoa", "The client report first. The new one can wait.", "Báo cáo cho khách trước. Việc mới để sau.", { pose: "explain", to: "thao" }),
      ] },
    { id: "s21", module: "SCENE-02", ref: "p18,p19",
      data: { set: "office", label: "Cuối ngày", actor: { id: "thao", side: "left" },
        contact: { name: "Lan", illus: "woman-office-worker" },
        messages: [ { from: "me", text: "Cảm ơn Lan đã gọi lại cho khách chiều nay, nhờ vậy mình giữ được hạn thứ Sáu.", at: "l3" } ] },
      lines: [
        L("l1", null, "Before: every morning, “Keep going, team!” in the group chat. A week later, nobody replies.", "Trước: sáng nào cũng “Cố lên cả nhà!”. Một tuần sau, không ai trả lời."),
        L("l2", null, "The general cheer is not wrong. It is just too light for heavy work.", "Cổ vũ chung không sai, chỉ quá nhẹ so với sức nặng công việc."),
        L("l3", "thao", "Thanks, Lan, for calling the client back this afternoon. We kept Friday's deadline.", "Cảm ơn Lan đã gọi lại cho khách chiều nay, nhờ vậy mình giữ được hạn thứ Sáu.", { face: "happy" }),
        L("l4", null, "One specific thank you means more than ten cheers.", "Một lời cảm ơn cụ thể hơn mười câu cố lên."),
      ] },

    // ---------- Phần 5 ----------
    { id: "s22", module: "HOST-03", data: { n: 5, of: 5, title: "Giữ sức, rút kinh nghiệm" },
      lines: [L("l1", "det", "Last part: who keeps the leader strong?", "Phần cuối: ai giữ sức cho trưởng nhóm?")] },
    { id: "s23", module: "STORY-01", ref: "p20,p23,p24",
      data: { context: "Thảo muốn tỏ ra cứng rắn, không kể ai mình mất ngủ nhiều tuần.", action: "Một buổi họp, Thảo gắt lên với cả nhóm vì một lỗi nhỏ.", outcome: "Tối đó Thảo nhắn xin lỗi, nói chuyện với sếp, được chia bớt một dự án.",
        illus: ["sleepy-face", "anger-symbol", "handshake"] },
      lines: [
        L("l1", null, "Thao hides weeks of bad sleep. In a meeting, she snaps at the team over a small mistake.", "Thảo giấu chuyện mất ngủ nhiều tuần. Một buổi họp, Thảo gắt lên vì lỗi nhỏ."),
        L("l2", null, "That night she says sorry, talks to her manager, and one project is moved.", "Tối đó Thảo xin lỗi nhóm, nói chuyện với sếp, được chia bớt một dự án."),
        L("l3", null, "A stressed leader spreads stress. Sleep, meals, and time offline are not selfish.", "Trưởng nhóm căng, cả nhóm cảm nhận. Ngủ, ăn đúng bữa, ngắt máy không phải ích kỷ."),
        L("l4", null, "Looking after your own strength keeps the team's fire burning.", "Giữ sức cho mình là giữ lửa cho nhóm."),
      ] },
    { id: "s24", module: "SCENE-01", ref: "p21",
      data: { set: "office", label: "Nói với sếp", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "farright", pose: "hold" }] },
      lines: [
        L("l1", "thao", "I am a bit overloaded. Could you help me see which tasks could be delayed?", "Em đang hơi quá tải, chị giúp em xem việc nào có thể lùi được không ạ?", { face: "worried", pose: "hold", to: "hoa" }),
        L("l2", "hoa", "Sure. Let's look at the list together.", "Được. Mình cùng xem danh sách nhé.", { face: "neutral", pose: "explain", to: "thao" }),
        L("l3", null, "Too much? Tell your manager, or a mentor you trust.", "Thấy quá sức, hãy nói với sếp hoặc một người đi trước mà bạn tin."),
      ] },
    { id: "s25", module: "LIST-05", ref: "p22",
      data: { title: "Thành viên mệt mỏi, buồn bã kéo dài", illus: "handshake",
        items: ["Hỏi han nhẹ nhàng", "Gợi ý hỗ trợ: nhân sự, người thân, chuyên viên tâm lý, bác sĩ", "Bạn không cần, không nên tự gánh hết", "Nói đến chuyện làm hại bản thân: không để một mình, báo người thân, nhân sự, gọi 115"] },
      lines: [
        L("l1", null, "If a member is tired or sad for a long time, check in kindly.", "Thành viên mệt mỏi, buồn bã kéo dài: hãy hỏi han nhẹ nhàng."),
        L("l2", null, "Suggest support from HR, family, a counsellor, or a doctor. You should not carry it alone.", "Gợi ý tìm hỗ trợ: nhân sự, người thân, chuyên viên tâm lý, bác sĩ. Đừng tự gánh hết."),
        L("l3", null, "If they talk about harming themselves, do not leave them alone. Contact family, HR, or call one one five.", "Nếu họ nói đến chuyện làm hại bản thân: đừng để họ một mình, báo người thân, nhân sự hoặc gọi 115."),
      ] },
    { id: "s26", module: "SCENE-01", ref: "p25,p26",
      data: { set: "meeting", label: "Qua đợt căng", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "After the crunch, sit down for half an hour. Ask the team first, before giving your view.", "Qua đợt căng, ngồi lại nửa tiếng. Hỏi ý mọi người trước khi nói ý mình."),
        L("l2", "thao", "What helped us get through? What should we avoid next time?", "Điều gì giúp mình vượt qua? Lần sau nên tránh điều gì?", { pose: "hold" }),
        L("l3", "dung", "The daily message helped. Late approvals did not.", "Tin nhắn mỗi ngày giúp nhiều. Duyệt chậm thì không.", { pose: "explain", react: { thao: "thinking" } }),
        L("l4", "thao", "One more thing. The rest days were not approved. I wanted you to hear it from me.", "Thêm một chuyện: đề xuất nghỉ bù chưa được duyệt. Mình muốn nói thật với mọi người.", { face: "sad" }),
        L("l5", null, "Keep what you promised or proposed. If it was refused, say so honestly.", "Giữ đúng điều đã hứa, đã đề xuất. Chưa được duyệt thì nói thật, đừng im lặng."),
      ] },
    { id: "s27", module: "LIST-09", ref: "p27",
      data: { title: "Mỗi khi việc dồn dập", illus: "clipboard", keywords: [
        { text: "Nhận ra dấu hiệu", illus: "eyes" }, { text: "Nói thật, có điểm dừng", illus: "spiral-calendar" },
        { text: "Bỏ việc ít giá trị", illus: "wastebasket" }, { text: "Chia việc theo sức", illus: "balance-scale" },
        { text: "Cảm ơn cụ thể", illus: "folded-hands" }, { text: "Che chắn việc phát sinh", illus: "shield" },
        { text: "Giữ sức cho mình", illus: "battery" }, { text: "Rút kinh nghiệm", illus: "light-bulb" } ] },
      lines: [
        L("l1", null, "Notice the signs. Be honest about the end. Cut low-value work. Share by strength.", "Nhận ra dấu hiệu. Nói thật, có điểm dừng. Bỏ việc ít giá trị. Chia theo sức."),
        L("l2", null, "Thank specifically. Shield the team. Keep your strength. Learn afterwards.", "Cảm ơn cụ thể. Che chắn nhóm. Giữ sức cho mình. Rút kinh nghiệm."),
      ] },

    { id: "s28", module: "END-01", ref: "outro",
      data: { takeaway: "Một lời cảm ơn cụ thể hơn mười câu cố lên.", marks: ["cảm ơn cụ thể"], illus: "folded-hands" },
      lines: [
        L("l1", null, "A team does not need a leader who is always cheerful. It needs one who tells the truth and notices people.", "Nhóm không cần trưởng nhóm lúc nào cũng vui, mà cần người nói thật và để ý từng người."),
        L("l2", null, "Today, message one member and thank them for one specific thing.", "Hôm nay, nhắn riêng một người, cảm ơn đúng một việc cụ thể."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[8]",
      data: {
        q: "What tone should a leader use during a stressful period?",
        options: [
          "Calm and honest, explaining clearly what the team will do next",
          "Cheerful and pretending everything is fine, even when it clearly is not",
          "Worried and complaining, so the team knows you feel the pressure too",
        ],
        correct: 0, countdown: 5, illus: "speaking-head",
        why: "Giả vờ ổn thì nhóm thấy bị giấu, than thở thì nhóm hoang mang.",
      },
      lines: [
        L("l1", null, "What tone should a leader use during a stressful period?", "Trưởng nhóm nên giữ giọng điệu nào trong giai đoạn căng thẳng?"),
        L("l2", null, "Calm and honest, explaining clearly what the team will do next.", "Bình tĩnh, thật lòng, nói rõ việc tiếp theo."),
        L("l3", null, "A calm voice gives the team something to hold on to.", "Giọng bình tĩnh cho nhóm một điểm tựa."),
      ],
      beats: { after: 600 } },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Giữ nhóm lúc áp lực" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.", { face: "happy" })] },
  ],
};
