# Danh mục module CSK004 — ô dữ liệu và mẫu (tự xuất)

Mỗi module: mã · tên · họ · ô bắt buộc (limits: [tối thiểu, tối đa] số chữ/tiếng; ô số so như số) · cần nguồn · dữ liệu mẫu `thuong` (vừa) — viết data đúng các khoá như mẫu.
Module hoạt hình (#106, xem ANIM-GUIDE.md) có thêm `lines` mẫu: mỗi câu `{ id, lang, who?, say (tiếng Anh), sub (phụ đề / bong bóng tiếng Việt), face?, pose?, react?, to?, stop?, phase? }` — đặt ở cấp CẢNH (scene.lines), không đặt trong data.

## OPEN-01 · Câu hỏi thẳng · OPEN
- limits: {"question":[4,20]}
```json
{"question":"Thuê phòng trọ lần đầu, nên bắt đầu từ đâu?","illus":"house","around":["red-question-mark","thinking-face"]}
```

## OPEN-02 · Hiểu lầm · OPEN
- limits: {"myth":[5,18]}
```json
{"myth":"Ảnh đẹp, giá mềm thì cứ chuyển cọc để giữ phòng","illus":"money-with-wings","illusAfter":"face-screaming-in-fear"}
```

## OPEN-07 · Diễn dịch: kết luận trước · OPEN
- limits: {"claim":[4,16]}
```json
{"claim":"Tìm phòng sớm là bước dễ nhất để có chỗ ở tốt","count":3,"illus":"spiral-calendar"}
```

## OPEN-11 · Lời hứa + từ khoá · OPEN
- limits: {"promise":[4,16],"keywords":[3,4]}
```json
{"promise":"Bốn việc giúp bạn thuê phòng an toàn","keywords":["Xem tận mắt","Xem buổi tối","Lấy giấy biên nhận","Báo trước khi đi"],"illus":"house","keywordIllus":["eyes","crescent-moon","receipt","spiral-calendar"]}
```

## LIST-01 · Gạch đầu dòng · LIST
- limits: {"items":[3,6]}
```json
{"title":"Tổng chi mỗi tháng gồm","items":["Tiền phòng","Điện, nước, mạng, gửi xe","Ăn uống, đi lại, sách vở","Một khoản để dành lúc ốm"],"illus":"money-bag","icons":["house","electric-plug","bowl-with-spoon","pill"]}
```

## LIST-02 · Lưới biểu tượng · LIST
- limits: {"items":[2,6]}
```json
{"title":"Dấu hiệu tin đăng giả","items":[{"icon":"badge-percent","illus":"money-with-wings","text":"Giá rẻ bất thường"},{"icon":"image","illus":"framed-picture","text":"Ảnh đẹp như ảnh mẫu"},{"icon":"alarm-clock","illus":"alarm-clock","text":"Giục chuyển cọc ngay"},{"icon":"eye-off","illus":"see-no-evil-monkey","text":"Né cho xem tận nơi"}],"illus":"warning"}
```

## LIST-05 · Checklist tick · LIST
- limits: {"items":[2,5]}
```json
{"title":"Khi xem phòng, thử ngay","items":["Mở vòi nước, bật đèn và quạt","Thử ổ điện, khoá cửa, cửa sổ","Nhìn vết ẩm mốc, nhà vệ sinh"],"illus":"detective"}
```

## LIST-13 · Tiêu đề rồi chi tiết · LIST
- limits: {"items":[2,4]}
```json
{"title":"Ngày dọn vào","items":[{"title":"Chụp ảnh căn phòng","detail":"Ảnh có ngày giờ giúp bạn không bị trừ cọc oan.","illus":"camera-with-flash"},{"title":"Chụp công tơ điện, nước","detail":"Để không phải trả phần của người ở trước.","illus":"high-voltage"}]}
```

## REL-01 · Nhân quả bằng đường nối · REL
- limits: {"cause":[3,14],"effect":[3,14]}
```json
{"cause":"Đưa cọc mà không có giấy biên nhận","effect":"Rất khó đòi lại tiền","causeIllus":"money-bag","effectIllus":"money-with-wings"}
```

## REL-02 · Chuỗi domino · REL
- limits: {"chain":[3,5]}
```json
{"chain":["Không đọc điều khoản trả phòng sớm","Dọn đi rồi mới báo","Mất toàn bộ tiền cọc"],"illus":["page-facing-up","package","money-with-wings"]}
```

## CMP-01 · Hai bên chia đôi · CMP
- limits: {"left":[3,16],"right":[3,16]}
```json
{"labels":["Ban ngày","Buổi tối"],"left":"Thấy căn phòng","right":"Thấy con đường: có ồn không, đường về có đèn không","illus":["sun","crescent-moon"]}
```

## CMP-06 · Nên / Không nên · CMP
- limits: {"do":[1,4],"dont":[1,4]}
```json
{"do":["Nhắn chủ nhà sớm kèm ảnh","Thống nhất ai sửa, ai trả"],"dont":["Tự ý sửa lớn rồi mới đòi tiền"],"doIcons":["mobile-phone","handshake"],"dontIcons":["hammer"]}
```

## NUM-01 · Số chạy lớn · NUM
- limits: {"label":[3,16]}
- cần ô source
```json
{"kicker":"Bạn có biết","value":9.42,"unit":"g muối/ngày","label":"là lượng muối trung bình người Việt ăn, gần gấp đôi mức WHO khuyên","source":"Điều tra STEPS 2015, Bộ Y tế","illus":"salt"}
```

## STORY-01 · Tình huống 3 nhịp · STORY
- limits: {"context":[4,24],"action":[4,24],"outcome":[4,24]}
```json
{"context":"Minh ở quê, thấy trên mạng một phòng đẹp, giá mềm.","action":"Chủ nhà giục, Minh chuyển cọc ngay.","outcome":"Đến nơi mới thấy phòng ẩm mốc, không có cửa sổ.","illus":["man-student","money-with-wings","face-screaming-in-fear"]}
```

## QUIZ-01 · 3 đáp án + đếm ngược · QUIZ
- limits: {"options":[3,3]}
```json
{"q":"A landlord asks for a deposit but gives you no receipt, what should you do?","options":["Pay now and ask for the receipt later, after you have moved into the room","Pay in cash quickly, because good rooms are taken by other people very fast","Ask for a written receipt with the amount, the date, and both signatures"],"correct":2,"countdown":5,"illus":"receipt","why":"Biên nhận là bằng chứng để đòi lại tiền cọc."}
```

## TEXT-01 · Câu chốt chữ lớn · TEXT
- limits: {"text":[3,14]}
```json
{"text":"Chưa thấy tận mắt, chưa chuyển một đồng.","illus":"eyes"}
```

## TEXT-04 · Bút dạ quang · TEXT
- limits: {"text":[6,30]}
```json
{"text":"Mỗi lần đưa tiền, hãy xin giấy biên nhận ghi rõ số tiền, ngày đưa và chữ ký hai bên.","marks":["giấy biên nhận"],"illus":"receipt"}
```

## END-02 · Rút ra 3 dòng · END
- limits: {"points":[3,3]}
```json
{"points":["Ban ngày xem căn phòng, buổi tối xem con đường","Tiền đưa ra, giấy tờ cầm về","Đọc kỹ lúc vào, báo trước lúc ra"],"icons":["crescent-moon","receipt","page-facing-up"]}
```

## END-04 · Mời làm 40 câu · END
- limits: {}
```json
{"remaining":40}
```

## BEAT-05 · Thẻ chương · BEAT
- limits: {"title":[2,10]}
```json
{"n":1,"of":4,"title":"Tìm phòng và nhận ra tin giả","illus":"magnifying-glass-tilted-left"}
```

## OPEN-03 · Con số gây sốc · OPEN
- limits: {"context":[3,12]}
```json
{"value":"2,5","unit":"lít","context":"Tổng lượng nước mỗi ngày cho nam giới","source":"Nguồn: EFSA (tính cả nước từ thức ăn)","illus":"droplet"}
```

## OPEN-04 · Chạy đáp án · OPEN
- limits: {"options":[3,3],"optionWords":[1,10]}
```json
{"question":"How many Earths could fit inside Jupiter?","options":["About 11","About 100","More than 1,000"],"illus":"ringed-planet"}
```

## OPEN-05 · Tình huống "Bạn đang…" · OPEN
- limits: {"scene":[8,18]}
```json
{"scene":"Bạn đang xem phòng trọ vào buổi sáng: sạch, yên tĩnh, vừa túi tiền","illus":"house-with-garden","around":["sun","money-bag","sparkles"]}
```

## OPEN-06 · Trích dẫn · OPEN
- limits: {"quote":[4,24]}
```json
{"quote":"Ăn đủ bữa sáng, trưa, tối, không bỏ bữa.","highlight":"không bỏ bữa","who":"Bộ Y tế","source":"10 lời khuyên dinh dưỡng hợp lý đến năm 2030 (QĐ 3594/QĐ-BYT)","label":"Lời khuyên chính thức","illus":"classical-building"}
```

## OPEN-08 · Quy nạp: 3 ví dụ nhanh · OPEN
- limits: {"examples":[3,3],"exampleSyllables":[2,8]}
```json
{"examples":[{"text":"Giá rẻ bất thường","illus":"money-with-wings"},{"text":"Ảnh đẹp như ảnh mẫu","illus":"framed-picture"},{"text":"Giục chuyển cọc ngay","illus":"alarm-clock"}],"prompt":"Ba tin đăng này giống nhau ở đâu?"}
```

## OPEN-09 · Bối cảnh – Vướng mắc – Câu hỏi · OPEN
- limits: {"situation":[3,12],"complication":[3,12],"question":[3,12]}
```json
{"situation":"Tuấn tìm phòng vào tuần cuối trước nhập học","complication":"Chỉ còn phòng xa và ồn, lại ký vội","question":"Nên bắt đầu tìm phòng từ khi nào?","illus":["calendar","warning","red-question-mark"]}
```

## OPEN-10 · Hiện tại và có thể · OPEN
- limits: {"whatIs":[3,10],"couldBe":[3,10]}
```json
{"whatIs":"Chỉ cốc cà phê sữa đá thay cả bữa","couldBe":"Cà phê kèm ổ bánh mì trứng nhiều rau","illus":["cup-with-straw","sandwich"]}
```

## OPEN-12 · Hé lộ top N · OPEN
- limits: {"n":[3,5],"topic":[3,12]}
```json
{"n":3,"topic":"việc cần làm ngay ngày dọn vào phòng trọ"}
```

## OPEN-13 · Câu bị che chữ · OPEN
- limits: {"sentenceWords":[4,16]}
```json
{"sentence":"That is a good question, let me check with my team.","hiddenWord":"check","vi":"Câu dùng khi chưa có câu trả lời trong buổi họp"}
```

## OPEN-14 · Trước – sau chớp nhoáng · OPEN
- limits: {"before":[3,12],"after":[3,12]}
```json
{"context":"Đưa tiền cọc, chủ nhà bảo “để mai anh viết giấy”","before":"Dạ vâng, mai anh viết sau cũng được ạ.","after":"Anh ghi giúp em giấy biên nhận luôn nhé."}
```

## OPEN-15 · A hay B? · OPEN
- limits: {"a":[2,8],"b":[2,8],"question":[3,14]}
```json
{"question":"Bảy giờ sáng, chỉ có vài phút. Bạn chọn gì?","a":"Bánh bông lan và trà sữa","b":"Sữa chua, chuối và nắm hạt","illus":["cupcake","banana"]}
```

## OPEN-16 · Bạn có biết · OPEN
- limits: {"fact":[4,16]}
```json
{"fact":"Quy tắc “8 cốc nước mỗi ngày” không có cơ sở khoa học chặt chẽ.","source":"Nguồn: Valtin, Dartmouth Medical School","illus":"droplet"}
```

## OPEN-17 · Chữ đập · OPEN
- limits: {"line":[3,12]}
```json
{"line":"Chưa thấy tận mắt, chưa chuyển một đồng.","hot":["tận","mắt"],"illus":"eyes"}
```

## OPEN-18 · Phóng to hé lộ · OPEN
- limits: {"teaser":[0,8],"headline":[4,16],"around":[0,4]}
```json
{"teaser":"Nhìn kỹ góc này","illus":"derelict-house","focus":[0.35,0.45],"around":["mobile-phone","luggage","magnifying-glass-tilted-left"],"headline":"Ảnh trên mạng thì đẹp, phòng thật ẩm mốc, không có cửa sổ"}
```

## OPEN-19 · Cảnh báo đỏ · OPEN
- limits: {"warning":[3,12],"detail":[0,14]}
```json
{"label":"Dấu hiệu tin giả","warning":"“Chuyển cọc ngay kẻo hết!”","detail":"Người đăng hối thúc là dấu hiệu tin đăng giả."}
```

## OPEN-20 · Đồng hồ đếm ngược · OPEN
- limits: {"from":[3,60],"kicker":[0,12],"question":[4,22]}
```json
{"from":3,"kicker":"“Hôm nay giảm sâu, mai về giá gốc.”","question":"Đăng ký ngay, hay xin thêm một ngày để xem lại?"}
```

## OPEN-21 · Tin nhắn bất ngờ · OPEN
- limits: {"notes":[2,4],"caption":[0,8]}
```json
{"notes":[{"from":"Tin đăng phòng","icon":"house","text":"Phòng đẹp, giá mềm, xem ảnh nhé"},{"from":"Chủ nhà","icon":"user-round","text":"Chiều nay có người đến xem rồi đấy"},{"from":"Chủ nhà","icon":"user-round","text":"Em chuyển cọc ngay kẻo hết nhé!"}],"caption":"Bạn có chuyển không?"}
```

## OPEN-22 · Đèn sân khấu · OPEN
- limits: {"kicker":[0,8],"headline":[4,16]}
```json
{"kicker":"Chuyện của Duy","illus":"luggage","around":["house","spiral-calendar"],"headline":"Xếp đồ đi trong một buổi chiều, mất toàn bộ tiền cọc"}
```

## OPEN-23 · Mưa câu hỏi · OPEN
- limits: {"kicker":[0,8],"question":[4,18],"items":[0,4]}
```json
{"kicker":"Trước khi gật đầu","question":"Nên hỏi chủ nhà những gì?","items":["house","key","receipt"]}
```

## OPEN-24 · Cái giá đắt · OPEN
- limits: {"headline":[4,16],"label":[0,12]}
```json
{"kicker":"Cái giá đắt","headline":"Mất trắng tiền cọc chỉ vì dọn đi rồi mới báo"}
```

## BEAT-03 · Câu hỏi treo · BEAT
- limits: {"question":[0,12]}
```json
{"question":"Còn điều gì bạn chưa biết?"}
```

## BEAT-04 · Vòng suy nghĩ · BEAT
- limits: {"prompt":[4,26],"seconds":[3,7]}
```json
{"seconds":5,"prompt":"Bạn đến xem phòng vào buổi sáng, thấy sạch, yên tĩnh, vừa túi tiền. Còn điều gì bạn chưa biết?"}
```

## END-01 · Rút ra một câu · END
- limits: {"takeaway":[3,14]}
```json
{"takeaway":"Tiền đưa ra, giấy tờ cầm về.","marks":["giấy tờ"],"illus":"receipt"}
```

## END-03 · Checklist mang về · END
- limits: {"items":[3,5]}
```json
{"title":"Ngày trả phòng","items":["Dọn sạch phòng","Trả đủ chìa khoá","Thanh toán điện nước","Cùng chủ nhà so phòng với ảnh ngày dọn vào"],"illus":"clipboard"}
```

## END-07 · Bài tiếp trong chuỗi · END
- limits: {"nextTitle":[3,16],"series":[2,8]}
```json
{"series":"Chuẩn bị vào đại học xa nhà","nextTitle":"Quản lý tiền bố mẹ gửi hằng tháng khi học xa nhà","n":3,"of":10,"illus":"money-bag"}
```

## LIST-03 · Thẻ lật · LIST
- limits: {"items":[2,4]}
```json
{"title":"Ba từ hay đi kèm khi báo việc vừa xong","items":[{"front":"just","back":"Vừa mới","illus":"stopwatch","backIllus":"high-voltage"},{"front":"already","back":"Đã rồi, thường sớm hơn mong đợi","illus":"check-mark-button","backIllus":"rocket"},{"front":"yet","back":"Dùng trong câu hỏi và phủ định","illus":"hourglass-not-done","backIllus":"red-question-mark"}]}
```

## LIST-04 · Đếm ngược top N · LIST
- limits: {"items":[3,5]}
```json
{"title":"Ba thói quen nên bỏ khi trả lời phỏng vấn","items":[{"text":"Nói “I don't know” rồi dừng hẳn","illus":"zipper-mouth-face"},{"text":"Lạm dụng “um”, “like”, “you know”","illus":"speaking-head"},{"text":"Chen “ờ”, “à” vào câu tiếng Anh","illus":"face-with-diagonal-mouth"}]}
```

## LIST-06 · Bậc thang · LIST
- limits: {"steps":[3,5]}
```json
{"title":"Buổi chạy mẫu cho tuần đầu","steps":[{"text":"Đi bộ nhanh 5 phút làm ấm người","illus":"person-walking"},{"text":"Chạy chậm 1 phút, đi bộ 2 phút","illus":"person-running"},{"text":"Lặp lại 6–8 lần","illus":"counterclockwise-arrows-button"},{"text":"Đi bộ chậm 5 phút, giãn cơ nhẹ","illus":"person-in-lotus-position"}]}
```

## LIST-07 · Số lớn 1-2-3 · LIST
- limits: {"items":[2,4]}
```json
{"title":"Buổi chạy đầu tiên chỉ cần","items":[{"text":"Đôi giày thể thao vừa chân","illus":"running-shoe"},{"text":"Cung đường bằng phẳng, an toàn","illus":"national-park"},{"text":"Một khung giờ mát","illus":"sunrise"}]}
```

## LIST-08 · Chồng thẻ · LIST
- limits: {"items":[2,5]}
```json
{"title":"Ba điều nhớ trong tháng đầu chạy bộ","items":[{"title":"Chạy thật chậm","detail":"Chậm đến mức vẫn nói được một câu ngắn","illus":"speech-balloon"},{"title":"Chạy xen đi bộ","detail":"Chạy 1 phút, đi bộ 2 phút","illus":"person-running"},{"title":"Mỗi lần tăng một thứ","detail":"Khi buổi tập đã thấy dễ","illus":"chart-increasing"}]}
```

## LIST-09 · Chip từ khoá · LIST
- limits: {"keywords":[4,8]}
```json
{"title":"Trước buổi chạy đầu","illus":"running-shoe","keywords":[{"text":"Giày vừa chân","illus":"running-shoe"},{"text":"Cung đường ít xe","illus":"national-park"},{"text":"Giờ mát","illus":"sunrise"},{"text":"Ba ngày cố định","illus":"spiral-calendar"},{"text":"Hỏi bác sĩ nếu có bệnh","illus":"stethoscope"}]}
```

## LIST-10 · Lộ trình · LIST
- limits: {"stops":[3,6]}
```json
{"title":"Từ con số không đến vạch đích","stops":[{"label":"Chuẩn bị giày, cung đường, giờ mát","illus":"running-shoe"},{"label":"Chạy xen đi bộ, thật chậm","illus":"person-walking"},{"label":"Thấy dễ thì tăng một chút","illus":"chart-increasing"},{"label":"Giải 5 km đầu tiên","illus":"chequered-flag"}]}
```

## LIST-11 · Bánh xe · LIST
- limits: {"items":[4,6]}
```json
{"title":"Bốn lúc dùng hiện tại hoàn thành","illus":"spiral-calendar","items":[{"text":"Báo việc vừa xong, kết quả còn đó","illus":"envelope-with-arrow"},{"text":"Kể kinh nghiệm đã từng hay chưa từng","illus":"man-office-worker"},{"text":"Việc bắt đầu từ trước, kéo dài đến nay","illus":"hourglass-not-done"},{"text":"Khoảng thời gian chưa kết thúc","illus":"tear-off-calendar"}]}
```

## TEXT-02 · Từng từ bật · TEXT
- limits: {"text":[3,24],"keywords":[0,3]}
```json
{"text":"Chạy chậm không xấu, bỏ cuộc mới tiếc.","keywords":["Chạy chậm","bỏ cuộc"],"illus":"person-running"}
```

## TEXT-03 · Gõ chữ · TEXT
- limits: {"text":[3,20]}
```json
{"text":"Mỏi thì nghỉ ngơi, nhói thì đi khám.","illus":"adhesive-bandage"}
```

## TEXT-06 · Thẻ định nghĩa · TEXT
- limits: {"meaning":[3,20],"example":[3,14]}
```json
{"term":"since","ipa":"/sɪns/","pos":"giới từ","meaning":"Đi với một mốc thời gian, việc vẫn kéo dài đến nay","example":"I've worked here since 2020.","illus":"spiral-calendar"}
```

## TEXT-07 · Câu mẫu song ngữ · TEXT
- limits: {"en":[3,16],"chunks":[1,5]}
```json
{"en":"Let me think about that for a moment.","vi":"Cho tôi suy nghĩ về điều đó một chút.","chunks":[{"en":"Let me think","vi":"cho tôi nghĩ"},{"en":"about that","vi":"về điều đó"},{"en":"for a moment.","vi":"một chút"}],"illus":"man-office-worker"}
```

## REL-03 · Vòng lặp · REL
- limits: {"nodes":[3,5]}
```json
{"center":"Vòng trì hoãn","tone":"bad","nodes":[{"label":"Né một việc khó chịu","illus":"see-no-evil-monkey"},{"label":"Tự trách cả buổi tối","illus":"downcast-face-with-sweat"},{"label":"Việc càng nặng nề","illus":"weary-face"},{"label":"Hôm sau càng muốn né","illus":"alarm-clock"}]}
```

## REL-04 · Xương cá · REL
- limits: {"bones":[4,6],"causes":[0,2]}
```json
{"problem":"Chạy vài tuần đã muốn bỏ","bones":[{"group":"Sức","illus":"tired-face","causes":["Chạy quá sức","Buổi nào cũng mệt"]},{"group":"Mục tiêu","illus":"mountain","causes":["Mục tiêu quá xa","Mãi chưa thấy tới đâu"]},{"group":"Lịch","illus":"spiral-calendar","causes":["Hôm nào rảnh mới chạy"]},{"group":"Bạn chạy","illus":"bust-in-silhouette","causes":["Chạy một mình mãi","Thấy đơn điệu"]}]}
```

## REL-05 · Sơ đồ cây · REL
- limits: {"children":[2,4],"leaves":[0,3]}
```json
{"title":"Ba loại chất béo","root":"Chất béo","rootIllus":"olive","children":[{"label":"Không bão hoà","sub":"Nên ưu tiên","tone":"ok","illus":"fish","children":["Dầu ô liu, dầu lạc","Cá béo","Các loại hạt"]},{"label":"Bão hoà","sub":"Nên hạn chế","tone":"warn","illus":"cut-of-meat","children":["Mỡ động vật","Bơ sữa","Nước cốt dừa"]},{"label":"Chuyển hoá","sub":"Nên tránh","tone":"bad","illus":"warning","children":["Bơ thực vật cứng","Một số bánh quy","Đồ chiên công nghiệp"]}]}
```

## REL-06 · Venn 2 vòng · REL
- limits: {"items":[1,3]}
```json
{"a":{"label":"Đạm động vật","illus":"fish","items":["Cá, thịt, trứng","Sữa, hải sản"]},"b":{"label":"Đạm thực vật","illus":"peanuts","items":["Đậu phụ, đậu nành","Lạc, vừng, các loại hạt"]},"both":{"label":"Cả hai","items":["Đều cho chất đạm","Lượng vừa đủ là được"]}}
```

## REL-07 · Venn 3 vòng · REL
- limits: {"sets":[3,3]}
```json
{"a":{"label":"Điều bạn thích","illus":"red-heart"},"b":{"label":"Điều bạn làm tốt","illus":"flexed-biceps"},"c":{"label":"Điều bạn coi trọng","illus":"gem-stone"},"center":"Hướng phù hợp"}
```

## REL-08 · Ma trận 2×2 · REL
- limits: {"quadrants":[4,4],"dots":[0,4]}
```json
{"xAxis":"Gấp","yAxis":"Quan trọng","quadrants":[{"title":"Quan trọng, chưa gấp","text":"Ghi vào lịch","illus":"spiral-calendar","tone":"soft"},{"title":"Gấp và quan trọng","text":"Làm ngay","illus":"fire","tone":"marker"},{"title":"Không gấp, không quan trọng","text":"Gạch đi","illus":"wastebasket","tone":"paper"},{"title":"Gấp, ít quan trọng","text":"Làm gọn hoặc nhờ người khác","illus":"handshake","tone":"surface"}],"dots":[{"label":"Học kỹ năng mới","q":0},{"label":"Tin nhắn hỏi file","q":3}]}
```

## REL-09 · Phễu · REL
- limits: {"stages":[3,5]}
```json
{"title":"Từ một ý quen đến ba cách nhỏ","stages":[{"label":"Đi qua bốn hướng nghĩ","value":"9 cách","illus":"light-bulb"},{"label":"Giữ những cách làm được","value":"3 cách","illus":"check-mark-button"},{"label":"Tiết kiệm gần bằng khoản thưởng","illus":"money-bag"}]}
```

## REL-10 · Kim tự tháp · REL
- limits: {"levels":[3,5]}
```json
{"title":"Ba tháng đầu chạy bộ","levels":[{"label":"Tháng 1: chạy xen đi bộ","sub":"Ba buổi, mỗi buổi 20–30 phút","illus":"person-walking"},{"label":"Tháng 2: đoạn chạy dài dần","sub":"Vẫn ba buổi, đi bộ ngắn lại","illus":"person-running"},{"label":"Tháng 3: chạy liền 20–30 phút","sub":"Ở tốc độ chậm","illus":"trophy"}]}
```

## REL-11 · Cân so sánh · REL
- limits: {"items":[1,3]}
```json
{"left":{"label":"Bên rẻ hơn","illus":"package","items":["Bán hàng nhiệt tình","Bao bì đẹp","Giá rẻ hơn"]},"right":{"label":"Một dòng nhược","illus":"delivery-truck","items":[{"text":"Hay giao trễ","weight":4}]},"heavier":"right","verdict":"Đừng đếm dòng, hãy cân dòng."}
```

## REL-12 · Toả tia · REL
- limits: {"spokes":[3,6]}
```json
{"center":{"label":"Bữa ăn cân bằng","illus":"bento-box"},"spokes":[{"label":"Rau và trái cây: khoảng nửa đĩa","illus":"leafy-green"},{"label":"Tinh bột: cơm, bún, khoai","illus":"cooked-rice"},{"label":"Đạm: cá, thịt, trứng, đậu phụ","illus":"egg"},{"label":"Chất béo tốt, vừa phải","illus":"avocado"},{"label":"Nước lọc đi kèm","illus":"droplet"}]}
```

## CMP-02 · Trước – sau thanh trượt · CMP
- limits: {"before":[3,20],"after":[3,20]}
```json
{"title":"Buổi tối của anh Toàn","before":"Tám giờ mới ăn, chín rưỡi mở laptop thì đã buồn ngủ","after":"Ăn lúc bảy giờ cùng vợ con, từ tám rưỡi có hai tiếng liền","illusBefore":"sleepy-face","illusAfter":"open-book"}
```

## CMP-03 · Hai lựa chọn · CMP
- limits: {"a.do":[4,18],"a.result":[3,16],"b.do":[4,18],"b.result":[3,16]}
```json
{"title":"Hai người cùng đi xe buýt bốn mươi phút","illus":"bus","a":{"label":"Người thứ nhất","do":"Coi chuyến xe là phần “chưa tính”, lướt video cho hết đường","result":"Đến công ty vẫn thấy uể oải","illus":"mobile-phone"},"b":{"label":"Người thứ hai","do":"Nghe một bài podcast đã chọn từ tối","result":"Bước vào công ty khi ngày của mình đã bắt đầu","illus":"headphone"}}
```

## CMP-04 · Đúng – sai · CMP
- limits: {"statement":[5,20],"why":[4,24]}
```json
{"statement":"Uống 8 cốc nước mỗi ngày là con số khoa học bắt buộc","truth":false,"why":"Đó chỉ là một cách nhớ; nhu cầu thật còn tuỳ thức ăn, thời tiết, mức vận động","illus":"potable-water"}
```

## CMP-05 · Bảng so sánh · CMP
- limits: {"columns":[2,3],"rows":[1,5],"cell":[1,8]}
```json
{"title":"Ba nhóm chất cho năng lượng","columns":[{"label":"Đạm","illus":"egg"},{"label":"Bột đường","illus":"cooked-rice"},{"label":"Chất béo","illus":"peanuts"}],"rows":[{"label":"Mỗi gam cho","cells":["khoảng 4 kcal","khoảng 4 kcal","khoảng 9 kcal"]},{"label":"Nên ưu tiên","cells":["cá, trứng, đậu phụ","gạo lứt, khoai lang","dầu thực vật, cá béo, hạt"]},{"label":"Nên nhớ","cells":["đủ là được, ăn dồn không thành cơ","nhiên liệu chính cho não và cơ","giúp hấp thu vitamin A, D, E, K"]}]}
```

## CMP-07 · Sửa câu · CMP
- limits: {"wrong":[3,12],"right":[3,12],"note":[0,20]}
```json
{"wrong":"I have 3 years experiences","right":"I have three years of experience","diff":["3","experiences"],"note":"“Experience” là kinh nghiệm làm việc: không đếm được, và cần “of”"}
```

## CMP-08 · Thanh đôi · CMP
- limits: {"a.label":[1,10],"b.label":[1,10],"note":[0,10]}
- cần ô source
```json
{"title":"Tổng lượng nước mỗi ngày cho người lớn","unit":"lít mỗi ngày","a":{"label":"Nữ","value":2,"illus":"woman"},"b":{"label":"Nam","value":2.5,"illus":"man"},"note":"Đã tính cả nước từ thức ăn","noteIllus":"potable-water","source":"EFSA, giá trị tham chiếu về nước"}
```

## CMP-09 · Lật thẻ hiểu lầm · CMP
- limits: {"myth":[4,20],"fact":[4,26]}
```json
{"myth":"Một ngày làm việc đã vắt hết sức, tối học thêm thì mai làm kém đi","fact":"Bennett cho rằng dùng trí óc buổi tối không làm giảm sức làm việc ban ngày","illusMyth":"tired-face","illusFact":"brain","source":"Arnold Bennett, How to Live on 24 Hours a Day (1908)"}
```

## CMP-10 · Nhiều vai cùng nhìn · CMP
- limits: {"issue":[4,16],"views":[2,4],"views.view":[3,14]}
```json
{"issue":"Hỏi “vì sao” về chính công việc mình làm","kicker":"Học không cần sách","views":[{"role":"Kế toán","view":"Vì sao quy định thuế thay đổi?","illus":"ledger"},{"role":"Bán hàng","view":"Vì sao khách mua nhiều vào tháng này?","illus":"shopping-cart"},{"role":"Giao nhận","view":"Vì sao giá cước lúc lên lúc xuống?","illus":"delivery-truck"}]}
```

## NUM-02 · Thanh ngang · NUM
- limits: {"bars":[2,8],"bars.label":[1,10]}
- cần ô source
```json
{"title":"Người Việt ăn bao nhiêu muối mỗi ngày?","illus":"salt","unit":"g","highlight":2,"bars":[{"label":"Người trưởng thành, năm 2015","value":9.42},{"label":"Người trưởng thành, năm 2021","value":8.07},{"label":"Mức WHO khuyến nghị","value":5,"prefix":"dưới"}],"source":"Điều tra STEPS 2015–2021; WHO"}
```

## NUM-04 · Mảng biểu tượng 10×10 · NUM
- limits: {"label":[3,24]}
- cần ô source
```json
{"n":20,"of":100,"illus":"droplet","label":"Khoảng 20% lượng nước mỗi ngày đến từ thức ăn","source":"Mayo Clinic, Water: how much should you drink every day?"}
```

## NUM-05 · Vòng tỉ lệ · NUM
- limits: {"label":[3,24]}
- cần ô source
```json
{"percent":50,"illus":"green-salad","label":"Nửa đĩa là rau và trái cây","source":"Harvard T.H. Chan, Healthy Eating Plate"}
```

## NUM-06 · Dòng thời gian · NUM
- limits: {"events":[3,8],"events.label":[2,11]}
- cần ô source
```json
{"title":"Bát phở đã đi một chặng đường dài","illus":"steaming-bowl","illusEach":"steaming-bowl","events":[{"date":"Đầu thế kỷ 20","label":"Phở hình thành ở miền Bắc, quanh Nam Định và Hà Nội"},{"date":"Sau 1954","label":"Theo người di cư vào Nam, thêm giá, húng quế, ngò gai"},{"date":"Sau 1975","label":"Theo cộng đồng người Việt ra nhiều nước","illus":"globe-showing-asia-australia"}],"source":"Andrea Nguyen, The evolution of pho"}
```

## NUM-09 · Bong bóng độ lớn · NUM
- limits: {"items":[2,3],"items.label":[1,10]}
- cần ô source
```json
{"title":"Năng lượng trong mỗi gam","unit":"kcal","items":[{"label":"1 g chất béo","value":9,"illus":"peanuts"},{"label":"1 g đạm hoặc bột đường","value":4,"illus":"egg"}],"note":"Gần gấp đôi","source":"British Dietetic Association, Fat: food fact sheet"}
```

## NUM-11 · Phép tính từng bước · NUM
- limits: {"steps":[1,5]}
- cần ô source
```json
{"title":"Một gói mì có bao nhiêu muối?","illus":"steaming-bowl","steps":[{"expr":"Natri trên nhãn: 1.800 mg × 2,5","result":"≈ 4,5 g muối"},{"expr":"So với mức WHO cho cả ngày","op":"→","result":"dưới 5 g"}],"source":"FDA, Nutrition Facts Label; WHO"}
```

## NUM-12 · Ngân sách thời gian · NUM
- limits: {"blocks":[2,6],"blocks.label":[1,10]}
- cần ô source
```json
{"title":"Bảy tiếng còn lại của ngày đi đâu?","highlight":3,"blocks":[{"label":"Làm việc","hours":8,"illus":"briefcase"},{"label":"Ngủ","hours":7,"illus":"bed"},{"label":"Đi xe và ăn uống","hours":2,"illus":"bus"},{"label":"Trôi qua không ai để ý","rest":true,"illus":"mobile-phone"}],"source":"Ví dụ theo Arnold Bennett, How to Live on 24 Hours a Day (1908)"}
```

## RSN-01 · Diễn dịch · RSN
- limits: {"reasons":[2,4],"claim":[4,18],"reason":[3,16],"example":[0,20]}
```json
{"claim":"Bắt đầu tìm phòng khoảng một tháng trước ngày nhập học","illus":"calendar","reasons":[{"text":"Có thời gian xem và so sánh vài phòng","illus":"balance-scale"},{"text":"Sát ngày, phòng tốt gần trường hết nhanh","illus":"house"},{"text":"Người vội thường bỏ qua bước đọc hợp đồng","illus":"page-facing-up"}]}
```

## RSN-02 · Quy nạp · RSN
- limits: {"examples":[3,3],"example":[4,16],"conclusion":[4,16]}
```json
{"examples":[{"text":"Mùa hè, kem bán chạy và đuối nước cùng tăng: do trời nóng","illus":"ice-cream"},{"text":"Người uống nhiều cà phê làm nhiều giờ: có thể ngược chiều","illus":"hot-beverage"},{"text":"Hai con số tình cờ cùng tăng vài tháng: trùng hợp","illus":"bar-chart"}],"conclusion":"Hai thứ đi cùng nhau chưa chắc cái này gây ra cái kia"}
```

## RSN-03 · Phản ví dụ · RSN
- limits: {"rule":[3,14],"counter":[4,22],"lesson":[3,14]}
```json
{"rule":"Uống cái này là hết cảm","ruleIllus":"teacup-without-handle","counter":"Lần trước không uống, anh Khang cũng khỏi sau chừng ấy ngày","lesson":"Khỏi sau khi uống chưa chắc là khỏi vì uống."}
```

## RSN-04 · Loại trừ · RSN
- limits: {"options":[3,5],"option":[1,7],"reason":[0,12]}
```json
{"question":"Tiệm anh Phát giao nhầm hai đơn trong tuần, vì sao?","illus":"package","options":[{"text":"Cậu nhân viên mới làm ẩu","illus":"man-office-worker"},{"text":"Chỉ là trùng hợp","illus":"game-die"},{"text":"Nhãn in mờ từ cuộn giấy hỏng","illus":"printer"}],"answer":2,"reasons":["Tuần trước, khi cậu chưa vào làm, cũng có đơn nhầm","Đơn nhầm lặp lại cả hai tuần","Thay cuộn giấy, đơn nhầm hết hẳn"]}
```

## RSN-05 · Nếu… thì… · RSN
- limits: {"if":[3,14],"then":[3,12],"else":[0,12],"quote":[0,16]}
```json
{"if":"Muốn trả phòng sớm, bạn báo trước đúng hạn bằng tin nhắn","then":"Bạn có cơ sở đòi lại tiền cọc","else":"Chủ nhà có căn cứ giữ cọc, như Duy","illus":"mobile-phone","thenIllus":"money-bag"}
```

## RSN-08 · Nhưng / Vì vậy · RSN
- limits: {"beats":[3,6],"beat":[3,16]}
```json
{"beats":[{"text":"Anh Khang bị cảm, uống nước thảo mộc bạn cho, năm ngày sau khỏi","illus":"face-with-thermometer"},{"text":"Anh nhắn vào nhóm công ty: “Uống cái này là hết cảm”","link":"therefore","illus":"mobile-phone"},{"text":"Đồng nghiệp hỏi: “Lần trước anh không uống thì bao lâu khỏi?”","link":"but","illus":"thinking-face"},{"text":"Anh nghĩ lại: cũng chừng ấy ngày","link":"therefore","illus":"light-bulb"}]}
```

## QUIZ-03 · Đúng hay sai · QUIZ
- limits: {"statement":[4,24],"why":[0,40],"countdown":[3,7]}
```json
{"statement":"Ice cream sales and drowning both rise in summer because hot weather makes people buy ice cream and swim more.","truth":true,"why":"Trời nóng là yếu tố thứ ba tác động lên cả hai. Kem không gây đuối nước.","countdown":5}
```

## QUIZ-05 · Điền chỗ trống · QUIZ
- limits: {"sentence":[4,18],"options":[3,3],"why":[0,40],"countdown":[3,7]}
```json
{"sentence":"If the client ___ the design, we'll start production next week.","blank":"approves","options":["approved","approves","will approve"],"why":"Vế if của loại 1 dùng hiện tại đơn, kể cả khi nói về tương lai. Will thuộc về vế kết quả.","countdown":5}
```

## QUIZ-06 · Ghép cặp · QUIZ
- limits: {"pairs":[3,3],"left":[1,4],"right":[2,10],"why":[0,24],"countdown":[3,10]}
```json
{"q":"Match each conditional to what it means","pairs":[{"left":"Really possible","right":"If I get the job, I'll move to Da Nang"},{"left":"Imagined now","right":"If I had a bigger budget, I would hire two more people"},{"left":"Missed in the past","right":"If I'd known, I'd have called you"}],"why":"Càng xa thực tế, động từ càng lùi về quá khứ.","countdown":6}
```

## QUIZ-07 · Sắp thứ tự · QUIZ
- limits: {"items":[3,4],"item":[2,12],"why":[0,30],"countdown":[3,10]}
```json
{"q":"Order them from really possible, to imagined, to missed","items":["If I had got the job, I would have moved to Da Nang","If I get the job, I'll move to Da Nang","If I got the job, I would move to Da Nang"],"order":[1,2,0],"why":"Đang chờ kết quả, nghĩ khả năng thấp, rồi đã trượt: mức độ có thật giảm dần.","countdown":6}
```

## QUIZ-09 · Bạn chọn gì? · QUIZ
- limits: {"options":[2,3],"option":[1,12],"question":[4,22],"countdown":[3,7]}
```json
{"question":"Which is a stronger reason to buy a product, many users or independent test results?","options":[{"text":"Many users","illus":"busts-in-silhouette"},{"text":"Independent test results","illus":"test-tube"}],"countdown":5}
```

## STORY-02 · Bong bóng hội thoại · STORY
- limits: {"messages":[2,8],"text":[1,16]}
```json
{"label":"Tình huống minh hoạ","left":{"name":"Bác hàng xóm","illus":"old-man"},"right":{"name":"Vinh","illus":"man"},"messages":[{"who":"right","text":"Cháu đề xuất lắp thêm đèn ở bãi xe vì tối quá ạ."},{"who":"left","text":"Mới dọn đến thì biết gì, ở đây mấy chục năm có sao đâu."},{"who":"right","text":"Dạ cháu còn mới thật."},{"who":"right","text":"Bác thấy lắp đèn có điểm nào chưa ổn để cháu tính lại ạ?"}]}
```

## STORY-03 · Tin nhắn điện thoại · STORY
- limits: {"messages":[2,7],"text":[1,30]}
```json
{"label":"Tình huống minh hoạ","title":"Thấy sẽ trễ, báo ngay từ thứ Tư","illus":"woman-office-worker","around":["spiral-calendar","speech-balloon"],"contact":{"name":"Sếp","illus":"man-office-worker"},"messages":[{"from":"me","text":"Phần giới thiệu và bảng giá đã xong."},{"from":"me","text":"Phần thông số phức tạp hơn em dự tính, em cần thêm ba ngày."},{"from":"me","text":"Em đề xuất gửi phần đã xong vào thứ Sáu để anh dùng trước, phần còn lại gửi thứ Ba ạ."},{"from":"them","time":"5 phút sau","text":"Đồng ý, em gửi trước phần đã xong nhé."}]}
```

## STORY-04 · Email · STORY
- limits: {"body":[5,90],"marks":[1,4],"note":[3,14]}
```json
{"lang":"en","to":"Ms Linh","subject":"Thank you for the interview","body":"Hi Linh!!!\nThank you for the interview. I hope to get the job.\nWhen will I know the result?\nthx","marks":[{"text":"Hi Linh!!!","note":"Quá thân mật: viết “Dear Ms Linh,”"},{"text":"I hope to get the job.","note":"Câu chung chung, thiếu một chi tiết từ buổi phỏng vấn"},{"text":"When will I know the result?","note":"Đừng hỏi kết quả trong thư cảm ơn"},{"text":"thx","note":"Tránh viết tắt, kết bằng lời chào và tên"}]}
```

## STORY-05 · Truyện tranh 3 khung · STORY
- limits: {"panels":[3,3],"caption":[4,22],"say":[0,8]}
```json
{"label":"Tình huống minh hoạ","panels":[{"scene":["woman-office-worker","house","fork-and-knife-with-plate"],"caption":"Sáu giờ rưỡi, chị Phượng về đến nhà, ăn tối xong.","say":"Hôm nay xong rồi."},{"scene":["mobile-phone","couch-and-lamp","television"],"caption":"Chị nằm xem điện thoại, định chỉ mười phút."},{"scene":["mantelpiece-clock","closed-book","anxious-face-with-sweat"],"caption":"Ngẩng lên đã gần mười một giờ. Cuốn sách vẫn nằm trên bàn."}]}
```

## STORY-06 · Mốc giờ trong ngày · STORY
- limits: {"entries":[3,6],"text":[3,14]}
```json
{"label":"Tình huống minh hoạ","title":"Buổi tối của Khánh Linh","entries":[{"time":"18:45","text":"Về đến nhà, tự hứa học tiếng Anh một tiếng","illus":"house"},{"time":"19:45","text":"Ăn cơm xong, mở điện thoại, rồi video ngắn, rồi một tập phim","illus":"mobile-phone"},{"time":"22:30","text":"Cuốn sách vẫn nằm trong túi. “Mai bắt đầu.”","illus":"closed-book"}]}
```

## STORY-07 · Bạn là… · STORY
- limits: {"role":[3,10],"scene":[6,36],"question":[5,22]}
```json
{"role":"Bạn làm kỹ thuật bảo trì","scene":"Lịch kín từ tám giờ sáng đến năm giờ chiều. Chín giờ, một máy ở xưởng báo lỗi, bạn mất hai tiếng sửa.","question":"Gạch hết kế hoạch và chạy theo việc phát sinh, hay làm gì khác?","illus":"man-mechanic","props":["factory","wrench","spiral-calendar","alarm-clock"]}
```

## STORY-10 · Tài liệu đánh dấu · STORY
- limits: {"lines":[4,8],"marks":[1,3],"note":[3,16]}
```json
{"docTitle":"Hợp đồng lao động","disclaimer":"Tham khảo, không phải tư vấn pháp lý","lines":["Tên công việc, nhiệm vụ chính","Địa điểm làm việc: văn phòng công ty và các địa điểm khác theo phân công","Mức lương, phụ cấp, ngày và cách trả lương","Giờ làm, ngày nghỉ","Bảo hiểm","Thời hạn hợp đồng"],"marks":[{"line":1,"note":"Hỏi: có thường đi công tác hay chuyển chi nhánh không?"},{"line":2,"note":"So với thư mời: lương, phụ cấp có khớp không?"}]}
```

## SCENE-01 · Cảnh nhân vật · SCENE
- limits: {"set":[1,1],"actors":[1,4],"label":[1,6],"props":[0,4]}
- ownSubtitles: câu có `who` hiện trong bong bóng của module, không hiện ở thanh phụ đề
```json
{"set":"cafe","label":"Tình huống","actors":[{"id":"lan","side":"left"},{"id":"hoa","side":"right","pose":"hold"}]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"hoa","say":"The shop is quiet today, Lan. You can go home early.","sub":"Quán vắng rồi, Lan về sớm nhé.","pose":"explain"}
{"id":"l2","lang":"en","who":"lan","say":"Oh, okay. Thank you.","sub":"Dạ… vâng ạ.","face":"worried","react":{"hoa":"neutral"}}
{"id":"l3","lang":"en","say":"Lan only asked about the hourly pay. The hours she misses are not paid.","sub":"Lúc nhận việc, Lan chỉ hỏi lương mỗi giờ. Giờ bị cho về sớm thì không được tính."}
```

- mẫu `ba-vai`:
```json
{"set":"home","label":"Khách tới nhà","actors":[{"id":"tu","side":"left","pose":"hold"},{"id":"bin","side":"center","enter":"pop"},{"id":"sam","side":"right","enter":"walk","at":"l2"}]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"bin","say":"Grandma, there is a guest at the door!","sub":"Bà ơi, có khách tới nhà ạ!","face":"happy","pose":"pointL","to":"tu"}
{"id":"l2","lang":"en","who":"sam","say":"Hello! I am Sam. Thank you for inviting me.","sub":"Xin chào! Tôi là Sam. Cảm ơn bà đã mời tôi tới chơi.","face":"happy","pose":"wave","to":"tu"}
{"id":"l3","lang":"en","who":"tu","say":"Welcome. Please come in and have some tea.","sub":"Chào cháu, vào nhà uống chén trà đã.","face":"happy","pose":"explain","to":"sam"}
{"id":"l4","lang":"en","who":"bin","say":"Where are you from? Do you like Vietnamese food?","sub":"Cô ở đâu tới ạ? Cô có thích món Việt không?","face":"surprised","to":"sam","react":{"sam":"happy"}}
{"id":"l5","lang":"en","who":"sam","say":"I love it, especially pho in the morning.","sub":"Thích lắm, nhất là phở buổi sáng.","face":"happy","pose":"thumb","to":"bin"}
```

## SCENE-02 · Nhân vật nhắn tin · SCENE
- limits: {"set":[1,1],"messages":[1,6],"text":[1,30],"name":[1,5],"label":[1,6]}
- ownSubtitles: câu có `who` hiện trong bong bóng của module, không hiện ở thanh phụ đề
```json
{"set":"room","label":"Nhắn lại để nhớ","actor":{"id":"lan","side":"left"},"contact":{"name":"Cô Hoa (chủ quán)","illus":"woman-cook"},"messages":[{"from":"me","text":"Em xin nhắn lại để nhớ ạ: lương theo giờ, thử việc một tuần có lương, trả ngày mùng năm.","at":"l2"},{"from":"them","text":"Đúng rồi con nhé.","at":"l3"}]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"lan","say":"Let me write down what we agreed.","sub":"Mình nhắn lại cho cô Hoa để nhớ.","face":"thinking"}
{"id":"l2","lang":"en","who":"lan","say":"Pay by the hour, a paid one-week trial, paid on the fifth.","sub":"Em xin nhắn lại để nhớ ạ: lương theo giờ, thử việc một tuần có lương, trả ngày mùng năm."}
{"id":"l3","lang":"en","who":"them","say":"Yes, that is right.","sub":"Đúng rồi con nhé."}
{"id":"l4","lang":"en","who":"lan","say":"Now it is all in writing.","sub":"Vậy là có tin nhắn ghi lại rồi.","face":"happy"}
```

## SCENE-03 · Hai cách xử lý (chia đôi) · SCENE
- limits: {"set":[1,1],"actors":[1,2],"left.label":[1,5],"right.label":[1,5]}
- ownSubtitles: câu có `who` hiện trong bong bóng của module, không hiện ở thanh phụ đề
```json
{"set":"shop","actors":[{"id":"dung"},{"id":"hoa","pose":"hold"}],"left":{"label":"Cách A: bản chính","ok":false},"right":{"label":"Cách B: bản sao","ok":true}}
```
- lines mẫu:
```json
{"id":"a1","lang":"en","who":"hoa","say":"Leave your ID card with me, just to be safe.","sub":"Cháu để căn cước lại cô giữ nhé.","phase":"a"}
{"id":"a2","lang":"en","who":"dung","say":"Sure, here is the original.","sub":"Dạ, cháu gửi cô bản chính ạ.","phase":"a","pose":"give"}
{"id":"b1","lang":"en","who":"hoa","say":"Leave your ID card with me, just to be safe.","sub":"Cháu để căn cước lại cô giữ nhé.","phase":"b"}
{"id":"b2","lang":"en","who":"dung","say":"Here is a copy. I need the original for paperwork.","sub":"Dạ, cháu gửi bản sao, bản chính cháu cần giữ ạ.","phase":"b","pose":"give","face":"happy"}
```

## DLG-01 · Khoan đã! Đét dừng cảnh · DLG
- limits: {"set":[1,1],"actors":[1,3],"label":[1,6],"verdict.label":[2,12],"verdict.why":[4,26],"verdict.rule":[0,16]}
- ownSubtitles: câu có `who` hiện trong bong bóng của module, không hiện ở thanh phụ đề
```json
{"set":"shop","label":"Tình huống","actors":[{"id":"dung","side":"left"},{"id":"hoa","side":"right","pose":"hold"}],"verdict":{"ok":false,"label":"Đưa bản chính căn cước","why":"Lúc nghỉ việc dễ bị hẹn “mai lấy” mãi, và kẹt mọi thủ tục cần căn cước.","rule":"Nơi làm không được giữ bản chính giấy tờ tuỳ thân"}}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"hoa","say":"Leave your ID card with me, just to be safe.","sub":"Cháu để căn cước lại cô giữ, để làm tin nhé.","pose":"explain"}
{"id":"l2","lang":"en","who":"dung","say":"Sure, here is my original card.","sub":"Dạ, cháu gửi cô bản chính ạ.","pose":"give","face":"happy","stop":true}
{"id":"l3","lang":"en","who":"det","say":"Wait a second!","sub":"Khoan đã!","face":"stern"}
{"id":"l4","lang":"en","who":"det","say":"If the shop keeps the original, getting it back can take visit after visit.","sub":"Đưa bản chính, lúc nghỉ việc dễ bị hẹn “mai lấy” hết lần này đến lần khác."}
{"id":"l5","lang":"en","who":"det","say":"Let us rewind and try another way.","sub":"Tua lại, thử cách khác nhé.","phase":"redo"}
{"id":"l6","lang":"en","who":"dung","say":"Here is a copy for your records. I need to keep the original for paperwork.","sub":"Dạ, cháu gửi cô bản sao để làm hồ sơ, bản chính cháu cần giữ để làm giấy tờ ạ.","phase":"redo","pose":"give","face":"happy"}
{"id":"l7","lang":"en","who":"hoa","say":"Okay, a copy is fine.","sub":"Ừ, bản sao là được rồi.","phase":"redo","face":"happy"}
```

## HOST-01 · Đét dẫn + thẻ · HOST
- limits: {"title":[1,10],"items":[2,5],"text":[3,24]}
```json
{"title":"Trước ngày đầu, hỏi rõ bốn điều","pose":"present","items":["Lương và thử việc","Ca, đổi ca, cắt ca","Các khoản phạt","Giấy tờ: đưa gì, giữ gì"]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"det","say":"Before your first day, ask about four things.","sub":"Trước ngày đầu, hỏi rõ bốn điều."}
{"id":"l2","lang":"en","who":"det","say":"Pay and the trial period.","sub":"Một: lương và thử việc."}
{"id":"l3","lang":"en","who":"det","say":"Shifts, swaps, and cuts.","sub":"Hai: ca làm, đổi ca, cắt ca."}
{"id":"l4","lang":"en","who":"det","say":"Any fines.","sub":"Ba: các khoản phạt."}
{"id":"l5","lang":"en","who":"det","say":"And which papers to give, and which to keep.","sub":"Bốn: giấy tờ nào đưa, giấy tờ nào giữ."}
```

## HOST-02 · Đét giơ thẻ Đúng/Sai · HOST
- limits: {"statement":[4,20],"why":[3,26]}
```json
{"statement":"Khoản phạt nào quán đặt ra cũng là hợp lệ","truth":false,"why":"Luật lao động cấm phạt tiền, cắt lương thay cho xử lý kỷ luật."}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"det","say":"Every fine a shop sets is valid. True or false?","sub":"Khoản phạt nào quán đặt ra cũng hợp lệ. Đúng hay sai?"}
{"id":"l2","lang":"en","who":"det","say":"False. The law bans fines and pay cuts as discipline.","sub":"Sai. Luật cấm phạt tiền, cắt lương thay cho kỷ luật.","face":"stern"}
```

## HOST-03 · Đét mở chương · BEAT
- limits: {"n":[1,9],"of":[2,9],"title":[2,10]}
```json
{"n":2,"of":4,"title":"Ca làm, đổi ca, cắt ca"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"det","say":"Part two: shifts, swaps, and cuts.","sub":"Phần hai: ca làm, đổi ca, cắt ca."}
```

## END-05 · Đét kết – Vòng khép · END
- limits: {"text":[3,16],"sub":[0,14]}
```json
{"text":"Bốn mươi câu hỏi đang chờ bạn","sub":"Nghe câu hỏi tiếng Anh, chọn đáp án đúng"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","who":"det","say":"Your turn. Forty questions are waiting below.","sub":"Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới."}
```

## TOC-01 · Mục lục chương (MUC-LUC-CHUONG) · TOC
- limits: {"chapters":[2,7]}
```json
{"title":"Sáu chặng của một shop mới","chapters":[{"label":"Trước khi nhập hàng","illus":"package"},{"label":"Đặt giá không lỗ","illus":"money-bag"},{"label":"Trang bán hàng","illus":"camera-with-flash"},{"label":"Trả lời tin nhắn","illus":"speech-balloon"},{"label":"Gửi hàng cho chắc","illus":"delivery-truck"},{"label":"Khách không vui, tháng đầu","illus":"notebook"}]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Six stops, in the order you will live them.","sub":"Sáu chặng, đúng thứ tự bạn sẽ trải qua."}
```

## TYPE-01 · Chữ gõ dần (CHU-GO-DAN) · TYPE
- limits: {"items":[1,3]}
```json
{"kicker":"Một ngày của bạn","items":["8 + 7 + 2 = 17 giờ","Còn 7 giờ"],"note":"Bảy tiếng còn lại đi đâu?"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Eight hours at work, seven asleep, about two on the road and at meals. That's seventeen.","sub":"Tám tiếng làm, bảy tiếng ngủ, khoảng hai tiếng đi xe và ăn. Là mười bảy."}
{"id":"l2","lang":"en","say":"So where do the other seven hours go?","sub":"Vậy bảy tiếng còn lại đi đâu?"}
```

## STAT-01 · Thẻ số liệu (THE-SO-LIEU) · NUM
- limits: {"stats":[1,3]}
- cần ô source
```json
{"stats":[{"value":7.5,"suffix":" giờ","label":"mỗi tuần dành cho riêng bạn"}],"source":"Arnold Bennett, How to Live on 24 Hours a Day (1908), chương VI"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Bennett's whole plan is seven and a half hours a week.","sub":"Cả kế hoạch của Bennett chỉ là bảy tiếng rưỡi mỗi tuần."}
```

## SRC-01 · Trích nguồn, tô câu (TRICH-NGUON-TO-CAU) · SRC
- limits: {"sentences":[2,6]}
- cần ô source
```json
{"source":"Arnold Bennett · How to Live on 24 Hours a Day (1908) · chương III","kind":"sách","sentences":["“… just jump …”","“Beware of undertaking too much at the start.”"]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Bennett says there is no secret. You just jump, like into cold water.","sub":"Bennett nói không có bí quyết nào. Cứ bước xuống, như xuống nước lạnh."}
{"id":"l2","lang":"en","say":"But beware of undertaking too much at the start.","sub":"Nhưng đừng ôm quá nhiều lúc mới bắt đầu."}
```

## ASK-01 · Câu hỏi phụ (CAU-HOI-PHU) · ASK
- limits: {"q":[3,18]}
```json
{"q":"Vậy bảy tiếng còn lại của ngày đi đâu?"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"So where do the other seven hours of the day go?","sub":"Vậy bảy tiếng còn lại của ngày đi đâu?"}
```

## MYTH-01 · Không phải… mà là (KHONG-PHAI-MA-LA) · MYTH
- limits: {"wrong":[2,18],"right":[2,20]}
```json
{"wrong":"Mình có bao nhiêu giờ","right":"Mình sống trọn được bao nhiêu giờ","kicker":"Câu hỏi đáng hỏi"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"The question is not how many hours you have.","sub":"Câu hỏi không phải là mình có bao nhiêu giờ."}
{"id":"l2","lang":"en","say":"It's how many of them you really live.","sub":"Mà là mình sống trọn được bao nhiêu giờ."}
```

## BRK-01 · Dừng hình + nhãn (E-BRK-01) · BRK
- limits: {"label":[1,6],"note":[0,14]}
- cách dùng: Cảnh đang chạy loé trắng rồi đứng hình, ngả xám; khoanh đỏ vào hình chính, mũi tên + nhãn (label), ghi chú nhỏ (note) dưới nhãn; Đét chỉ vào. tone: "good" → màu xanh (chỉ chỗ làm đúng). Câu 1 = lúc khoanh, câu 2 = lúc hiện note.
```json
{"illus":"mobile-phone","around":["alarm-clock","bed"],"label":"Sai ở đây!","note":"Lướt điện thoại ngay khi vừa mở mắt"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Stop right there.","sub":"Dừng lại đã."}
{"id":"l2","lang":"en","say":"The phone comes first, before anything else.","sub":"Điện thoại đến trước mọi thứ khác."}
```

## BRK-02 · Tiêu đề đập vào (E-BRK-02) · BRK
- limits: {"title":[2,8],"sub":[0,14]}
- cách dùng: Nền tối, từng từ của title lao xuống, màn rung theo mỗi cú; hl = cụm tô vàng (mặc định từ cuối); kicker nhãn trên, sub dòng phụ hiện ở câu 2. Dùng mở một ý mới / chương nhỏ.
```json
{"kicker":"Ý chính","title":"Bảy tiếng không ai nhìn thấy","hl":"không ai nhìn thấy","sub":"Thời gian ngoài giờ làm và giờ ngủ"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Seven hours nobody sees.","sub":"Bảy tiếng không ai nhìn thấy."}
{"id":"l2","lang":"en","say":"The time outside work and sleep.","sub":"Thời gian ngoài giờ làm và giờ ngủ."}
```

## BRK-03 · Con số đếm nhảy (E-BRK-03) · BRK
- limits: {"label":[2,12]}
- cách dùng: Nền màu nhấn, số lăn từ from (mặc định 0) tới value rồi "đấm" vào (nảy, rung, vòng sáng); prefix/suffix, decimals; label hiện ở câu 2. Dùng một con số neo, không cần nguồn (có nguồn → STAT-01).
```json
{"value":112,"suffix":" giờ","label":"mỗi tháng ngoài giờ làm và giờ ngủ","illus":"hourglass-done"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Add it up across a month.","sub":"Cộng cả tháng lại."}
{"id":"l2","lang":"en","say":"That is one hundred and twelve hours.","sub":"Là một trăm mười hai giờ."}
```

## BRK-04 · Chia đôi Sai/Đúng (E-BRK-04) · BRK
- limits: {"wrong":[2,14],"right":[2,14],"title":[0,8]}
- cách dùng: Nửa Sai (wrong) lấp màn trước, câu 2 thì nửa Đúng (right) đẩy vào chia đôi, bên Sai mờ đi và bị đóng dấu ✗. wrongIllus/rightIllus, labels ["Sai","Đúng"] đổi được (vd. ["Trước","Sau"]), title nhãn trên cùng.
```json
{"wrong":"Đợi có hứng mới bắt đầu","right":"Bắt đầu năm phút, hứng sẽ đến sau","wrongIllus":"sleeping-face","rightIllus":"person-running"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Waiting for the mood to start?","sub":"Đợi có hứng mới bắt đầu?"}
{"id":"l2","lang":"en","say":"Start for five minutes. The mood follows.","sub":"Bắt đầu năm phút. Hứng sẽ đến sau."}
```

## BRK-05 · Nhắc lại, Đét PiP (E-BRK-05) · BRK
- limits: {"title":[2,8],"points":[1,3]}
- cách dùng: Thẻ "Nhắc nhanh" bên trái, các ý (points 1–3) tick lần lượt theo câu đọc (có câu dẫn đầu thì ý i theo câu i+1); Đét nói trong cửa sổ PiP góc phải (miệng theo câu không có who). Dùng tóm tắt giữa bài.
```json
{"title":"Đến đây, mình đã biết","points":["Một ngày có bảy tiếng tự do","Mệt là do đầu óc, không phải cơ thể","Bắt đầu nhỏ, đều đặn"],"illus":"light-bulb"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Recap: seven free hours a day.","sub":"Nhắc lại: một ngày có bảy tiếng tự do."}
{"id":"l2","lang":"en","say":"Tired minds, not tired bodies.","sub":"Mệt là do đầu óc, không phải cơ thể."}
{"id":"l3","lang":"en","say":"Start small.","sub":"Bắt đầu nhỏ, đều đặn."}
```

## BRK-06 · Dải montage nhanh (E-BRK-06) · BRK
- limits: {"items":[3,5],"title":[0,8]}
- cách dùng: 3–5 ô cắt dồn (mỗi ô 0,6 s toàn màn, màu khác nhau, hình + chữ ≤ 4 tiếng), rồi xếp thành dải phim kèm title. Lời đọc ngắn, một hơi (burst). Dùng liệt kê ví dụ nhanh.
```json
{"title":"Bảy tiếng ấy trôi đi đâu?","items":[{"illus":"mobile-phone","text":"Lướt mạng"},{"illus":"television","text":"Xem phim"},{"illus":"bed","text":"Nằm nghỉ"},{"illus":"hot-beverage","text":"Ngồi quán"}]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Scrolling, shows, naps, coffee.","sub":"Lướt mạng, xem phim, nằm nghỉ, ngồi quán."}
{"id":"l2","lang":"en","say":"Where did the seven hours go?","sub":"Bảy tiếng ấy trôi đi đâu?"}
```

## BRK-07 · Nhưng khoan… (rehook) (E-BRK-07) · BRK
- limits: {"question":[3,16]}
- cách dùng: Màn tối lại, chữ viết tay kicker (mặc định "Nhưng khoan…") gõ ra, câu 2 thì question đập vào; Đét ló lên góc phải, ngạc nhiên. Dùng mỗi ~2 phút để giữ người xem (rehook).
```json
{"question":"Nếu mệt thật, sao tối nào cũng thức khuya?","illus":"thinking-face"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"But wait.","sub":"Nhưng khoan."}
{"id":"l2","lang":"en","say":"If you're so tired, why stay up late every night?","sub":"Nếu mệt thật, sao tối nào cũng thức khuya?"}
```

## BRK-08 · Dòng thời gian quét (E-BRK-08) · BRK
- limits: {"points":[3,6],"title":[0,8]}
- cách dùng: Đầu quét chạy trái → phải, mốc (points 3–6: label ≤ 4 tiếng, sub, illus) bật lên khi được quét qua, xen trên/dưới; current = chỉ số mốc sáng vàng (mặc định mốc cuối). Dùng định vị "ta đang ở đâu" trong ngày / trong câu chuyện.
```json
{"title":"Một ngày của bạn","points":[{"label":"7 giờ","sub":"Thức dậy","illus":"alarm-clock"},{"label":"8–17 giờ","sub":"Đi làm","illus":"office-building"},{"label":"18 giờ","sub":"Về nhà","illus":"house"},{"label":"19–23 giờ","sub":"Bảy tiếng tự do","illus":"sparkles"}],"current":3}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Morning, work, home.","sub":"Sáng, đi làm, về nhà."}
{"id":"l2","lang":"en","say":"And then, the free hours.","sub":"Rồi đến những giờ tự do."}
```

## BRK-09 · Lower-third nguồn (E-BRK-09) · BRK
- limits: {"title":[1,8],"detail":[0,14]}
- cách dùng: Cảnh toàn (illus lớn + around, máy đẩy chậm) và dải tên kiểu Vox hiện theo bước ở 1/3 dưới: kind (nhãn: Nguồn / Nhân vật / Địa điểm), title (≤ 8 tiếng, một dòng), detail hiện ở câu 2; icon Lucide trong ô màu.
```json
{"kind":"Nguồn","title":"Arnold Bennett, 1908","detail":"How to Live on 24 Hours a Day","illus":"open-book","around":["spiral-calendar","alarm-clock"],"icon":"book-open"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"This idea is over a hundred years old.","sub":"Ý này đã hơn một trăm năm tuổi."}
{"id":"l2","lang":"en","say":"Arnold Bennett, nineteen-oh-eight.","sub":"Arnold Bennett, năm 1908."}
```

## BRK-10 · Trích dẫn lớn (E-BRK-10) · BRK
- limits: {"quote":[3,26],"by":[1,10]}
- cách dùng: Ngoặc kép khổng lồ, quote hiện từng từ, mark (cụm có trong quote) được tô dạ quang, rồi by (người nói) trượt vào ở câu 2. Câu trích ≤ 26 tiếng.
```json
{"quote":"Bạn không thiếu thời gian, bạn chỉ chưa dùng đúng bảy tiếng mỗi tối","mark":"bảy tiếng mỗi tối","by":"Arnold Bennett","illus":"open-book"}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"You don't lack time. You just haven't used your evenings.","sub":"Bạn không thiếu thời gian, bạn chỉ chưa dùng đúng buổi tối."}
{"id":"l2","lang":"en","say":"Arnold Bennett.","sub":"Arnold Bennett."}
```

## BRK-11 · Điều cần nhớ, đếm ngược (E-BRK-11) · BRK
- limits: {"items":[2,5],"title":[0,8]}
- cách dùng: Cột trái số lớn lật n → 1, mỗi số kéo một dòng vào danh sách bên phải (điều số 1 ở trên, hiện sau cùng, vàng). items[0] = điều số 1. Lời đọc theo thứ tự đếm ngược; có câu dẫn đầu thì điều thứ j theo câu j+1.
```json
{"title":"3 điều cần nhớ","items":["Bắt đầu tối nay","Chỉ chín mươi phút","Không bỏ hai tối liền"]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Three: never skip two nights.","sub":"Ba: không bỏ hai tối liền."}
{"id":"l2","lang":"en","say":"Two: just ninety minutes.","sub":"Hai: chỉ chín mươi phút."}
{"id":"l3","lang":"en","say":"One: start tonight.","sub":"Một: bắt đầu tối nay."}
```

## BRK-12 · Chữ khớp chuyển (match cut) (E-BRK-12) · BRK
- limits: {"word":[1,5],"sub":[0,14]}
- cách dùng: Chữ viết tay word trên bảng (ở from [x, y], nên trùng chỗ chữ đó trên ô bảng vừa xem) được khoanh, máy lao vào chữ, CẮT sang màn màu: cùng chữ in đậm, rồi sub hiện ở câu 2. others = chữ mờ khác trên bảng.
```json
{"word":"90 phút","sub":"Ba buổi tối mỗi tuần, chín mươi phút mỗi buổi","from":[620,360],"others":["7 giờ","…","tối"]}
```
- lines mẫu:
```json
{"id":"l1","lang":"en","say":"Ninety minutes.","sub":"Chín mươi phút."}
{"id":"l2","lang":"en","say":"Three evenings a week, ninety minutes each.","sub":"Ba buổi tối mỗi tuần, chín mươi phút mỗi buổi."}
```
