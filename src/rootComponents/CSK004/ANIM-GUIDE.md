# ANIM-GUIDE — Viết cảnh hoạt hình cho video DetPro (#106)

Giọng đọc **tiếng Anh** (`say`), phụ đề **tiếng Việt** (`sub`), chữ trên thẻ tiếng Việt.
Dàn nhân vật đóng vai mọi tình huống; **Đét** (tê tê, Vòng Đét) dẫn chuyện và dừng cảnh nhận xét.
Mỗi video = hoạt hình (mở đầu, tình huống, dừng nhận xét) + thẻ có sẵn (kiến thức chính, câu đố).

Kiểm kịch bản: `node tools/check-script.mjs <tệp>` → phải **LỖI 0** (máy kiểm cả `who`, `face`, `pose`, `side`, `stop`, `phase`).
Danh mục ô + mẫu: `MODULE-REF.md`. Mẫu đầy đủ: `data/samples/anim.js` (mẫu ba vai Bé Bin, Bà Tư, Sam: SCENE-01 `ba-vai`; cảnh thử: `lab/cast2/scenes.js`).

## 1. Module

| Mã | Tên | Dùng khi | Bong bóng |
|---|---|---|---|
| SCENE-01 | Cảnh nhân vật | 1–3 người (+ Đét) nói chuyện trong một bối cảnh | có (câu có `who`) |
| SCENE-02 | Nhân vật nhắn tin | 1 người cầm điện thoại, màn hình chat lớn | có |
| SCENE-03 | Hai cách xử lý | chia đôi: trái Cách A, phải Cách B (🔀 Hai lựa chọn) | có |
| DLG-01 | Khoan đã! Đét dừng cảnh | diễn → câu sai → đứng hình → Đét nhận xét → tua lại → làm đúng | có |
| HOST-01 | Đét dẫn + thẻ | Đét đứng cạnh danh sách / câu chốt | không (lời Đét ở thanh phụ đề) |
| HOST-02 | Đét giơ thẻ Đúng/Sai | một nhận định, Đét lật thẻ | không |
| HOST-03 | Đét mở chương | thẻ "PHẦN n / of", Vòng Đét lấp theo n/of | không |
| END-05 | Đét kết – Vòng khép | cảnh cuối, mời làm 40 câu (thay được END-04) | không |

"Bong bóng" = module tự vẽ `sub` của câu có `who` trong bong bóng thoại, câu đó **không** hiện ở thanh phụ đề.
Câu **không có** `who` là lời người kể → hiện ở thanh phụ đề như mọi module.

## 2. Bối cảnh (`set`)

`cafe` quán cơm · `shop` cửa hàng, quầy thu ngân · `office` văn phòng · `meeting` phòng họp có màn chiếu · `room` phòng trọ ·
`home` phòng khách · `kitchen` bếp · `campus` lớp học · `street` phố, xe máy · `airport` sân bay, quầy làm thủ tục ·
`park` công viên, đường chạy · `heritage` di tích, cổng mái cong · `hotel` sảnh lễ tân · `online` họp trực tuyến (3 ô hình).

**Chỗ đứng (`side`)**: `farleft` · `left` · `center` · `right` · `farright` (x = 250 · 560 · 960 · 1360 · 1660), Đét đứng `det` (trước, góc phải).
`online` chỉ có `left` · `center` · `right` (mỗi người một ô, bong bóng hiện dưới ô).
Không ghi `side`: 1 người → `center`; 2 → `left`, `right`; 3 → `left`, `center`, `right`.
Luật NN-L2: chỗ đứng **không đổi** trong cảnh và trong cả video; hai người không cùng `side`.

## 3. Nhân vật

| id | Tên (tự hiện trên bong bóng) | Vai | Màu tên |
|---|---|---|---|
| `lan` | Lan | sinh viên năm 2, phục vụ quán cơm (ngại hỏi) | xanh lá |
| `dung` | Dũng | sinh viên làm kho / giao hàng (bỏ qua giấy tờ) | xanh lam |
| `thao` | Thảo | nhân viên văn phòng mới, chạy bộ (cầu toàn) | tím |
| `hoa` | Cô Hoa | chủ quán cơm / shop nhỏ (thẳng tính, bận) | hồng |
| `binh` | Bác Bình | nghỉ hưu, đi bộ, ăn lành mạnh (điềm tĩnh) | ô-liu |
| `bin` | Bé Bin | bé trai ~9 tuổi, con / cháu trong nhà (hay hỏi "Sao vậy ạ?"); thấp ≈ 0,65 người lớn, áo phông cam, ba lô | cam |
| `tu` | Bà Tư | bà ~66 tuổi: bà nội / ngoại, hàng xóm, khách lớn tuổi (hiền, chậm, hay dặn); tóc bạc búi, kính lão, áo bà ba, hơi còng | xanh ngọc |
| `sam` | Sam | người nước ngoài ~35 tuổi: đối tác, khách du lịch, đồng nghiệp nước ngoài; tóc vàng ngắn, áo khoác đỏ san hô | đỏ san hô |
| `det` | Đét | mascot dẫn chuyện, dừng cảnh | đất nung |

**Chọn vai** (#110): cần trẻ con → `bin`; bà cụ / người lớn tuổi nữ → `tu` (ông cụ → `binh`); người nước ngoài (đối tác, khách du lịch, đồng nghiệp) → `sam`.
Mọi vai đều nói tiếng Anh trong `say` như nhau; với Sam, `sub` là lời dịch như mọi vai (không thêm "(tiếng Anh)"). Sam không gắn quốc tịch — đừng viết lời biếm hoạ hay giọng lơ lớ.
Bin thấp nên bong bóng có đuôi dài hơn — bình thường; nên để Bin đứng cạnh người lớn (cảnh gia đình: Bin + Bà Tư / Bác Bình).

Tối đa **3 người + Đét** một cảnh (NN-L1). Người có quyền (cô Hoa, quản lý) chỉ nói câu trung lập có trong bài (NN-L15).

**Nét mặt (`face`)** — người: `neutral` `happy` `surprised` `worried` `sad` `thinking` `stern`; Đét thêm `wink` `laugh`.

**Tư thế (`pose`)** — người: `stand` `wave` `point` `pointL` `stop` `cross` `phone` `thumb` `give` (đưa giấy tờ) `think` (chống cằm) `explain` (xoè tay giải thích) `shrug` (nhún vai) `hold` (chắp tay chờ). Đi bộ tự có khi `enter: "walk"`.
Đét: `idle`(= `stand`) `wave` `stop` `point` `pointL` `thumb` `card` `think` `cheer` `present`.
- Tư thế **có hướng** (`point` `give` `explain` `wave` `stop` `thumb`) tự lật về phía người đang nghe. `pointL` luôn chỉ sang trái màn hình.
- Tư thế **cử chỉ** (`explain` `point` `pointL` `wave` `stop` `shrug` `thumb`) chỉ giữ trong câu đó, 0,35 s sau tự về tư thế gốc. Muốn giữ: thêm `hold: true` vào câu.
- Tư thế **đứng yên** (`give` `phone` `cross` `think` `hold` `stand`) giữ tới khi câu sau của chính người đó đổi.
- Nét mặt giữ tới khi đổi.

## 4. Diễn viên trong `data.actors`

```js
{ id: "dung", side: "center", enter: "walk", at: "l2", from: "left", face: "neutral", pose: "stand" }
```
- `enter`: `none` (có sẵn, mặc định) · `pop` (nảy ra) · `walk` (đi bộ vào ~1,1 s, từ mép gần nhất hoặc `from`).
- `at`: id câu — người này vào cảnh sao cho tới nơi đúng lúc câu đó bắt đầu (NN-L3: cảnh 3 người, đừng cho cả ba vào cùng lúc).
- `face`, `pose`: nét mặt, tư thế lúc đầu (tư thế gốc).

## 5. Viết `lines`

```js
{ id: "l2", lang: "en", who: "dung", say: "Sure, here is my original card.", sub: "Dạ, cháu gửi cô bản chính ạ.",
  face: "happy", pose: "give", react: { hoa: "neutral" }, to: "hoa", stop: true }
```

| Ô | Nghĩa |
|---|---|
| `lang` | luôn `"en"` |
| `say` | câu tiếng Anh (giọng đọc mp3, mấp máy miệng theo câu này) |
| `sub` | tiếng Việt: chữ trong bong bóng (câu có `who`) hoặc thanh phụ đề (câu không có `who`). **≤ 26 tiếng**, nên ≤ 20 (NN-L5) |
| `who` | id người nói. Bỏ trống = người kể chuyện |
| `face`, `pose` | nét mặt / tư thế của người nói, từ câu này |
| `react` | phản ứng người nghe: `{ lan: "worried" }` (đổi nét mặt 0,25 s sau khi câu bắt đầu). Mỗi câu then chốt một phản ứng |
| `to` | id người được nói với (người nói quay về phía đó). Mặc định: người đứng gần nhất. Đét không có `to` thì nhìn người xem |
| `stop` | DLG-01: câu sai, cảnh đứng hình ngay sau câu này |
| `phase` | DLG-01: `"redo"` = phần làm lại sau khi tua · SCENE-03: `"a"` (nửa trái) / `"b"` (nửa phải) |

Lịch thời gian tự tính: mỗi câu dài = max(thời gian nói tiếng Anh, thời gian đọc `sub`), cách nhau 0,3 s. Không cần ghi giờ.
Người nói **sáng**, người nghe **hơi mờ** và quay về phía người nói — tự động.

## 6. Luật riêng từng module

**SCENE-01** `data { set, label?, actors, props? }` — `label` ≤ 6 tiếng ("Tình huống", "Chuyện của Lan"); `props` ≤ 4 hình Fluent đặt trên sàn. Cần ít nhất một câu có `who`.

**SCENE-02** `data { set?, label?, actor: { id, side? }, contact: { name, illus? }, messages: [{ from: "me"|"them", text, at? }] }`
- Tin `me` = nhân vật gõ; `them` = người bên kia (ba chấm rồi hiện). `at` = id câu: tin hiện theo câu đó; không có `at` thì lần lượt theo các câu.
- Câu được tin nhắn trỏ tới thì **không** hiện bong bóng (chữ đã nằm trong tin). Câu giọng của người bên kia ghi `who: "them"` (chỉ SCENE-02).
- `text` ≤ 30 tiếng, tối đa 6 tin. Nhân vật mặc định cầm điện thoại (`pose: "phone"`).

**SCENE-03** `data { set, actors: [2 người], left: { label, ok? }, right: { label, ok? } }` — mọi câu có `who` phải có `phase: "a"` hoặc `"b"`. Viết hết câu `a` rồi tới câu `b`. Nhãn đổi đỏ/xanh khi mỗi nửa nói xong (`ok` mặc định: trái sai, phải đúng).

**DLG-01** `data { set, label?, actors (1–3 người, không có Đét), verdict: { ok, label, why, rule? } }`
1. Câu thoại chạy như SCENE-01 tới câu `stop: true` → đứng hình, nhạt màu, tem **Khoan đã!**, khung hình thu nhỏ sang trái, Đét lăn vào → Vòng Đét khép "Đét!" → bung ra.
2. Câu `who: "det"` sau câu stop = lời Đét (bong bóng). **Câu Đét đầu tiên nên ngắn**: "Wait a second!" / "Khoan đã!" (Đét lăn vào trong câu này).
3. Thẻ verdict hiện ở **câu Đét thứ hai** (Không nên / Nên + `label` + `why` + `rule`), Vòng Đét khoanh bong bóng câu sai.
4. Câu `phase: "redo"` đầu tiên → **tua lại** (0,95 s). Nên để câu redo đầu tiên là của Đét: "Let us rewind and try another way." — tua chạy trong câu đó.
5. Diễn viên làm lại cách đúng (các câu `phase: "redo"`), kết thúc: **dấu tích xanh** trên đầu người đã làm lại + Đét giơ ngón cái.
- `verdict.label` 2–12 tiếng, `why` 4–26 tiếng, `rule` ≤ 16 tiếng (căn cứ luật / quy định, có thì ghi).
- `verdict.ok: true` = Đét dừng để khen (thẻ "Nên"), không cần phần redo.
- Đét chỉ nói **sau** câu stop. 4–6 lượt trước khi Đét vào (NN-L5).

**HOST-01** `data { title?, items?: [2–5], text?, pose?: point|wave|think|thumb|present, illus? }` — chỉ câu `who: "det"` (hoặc người kể). Số câu = số mục + 1 → câu đầu là lời dẫn, mỗi mục hiện ở câu của nó; số câu = số mục → mỗi câu một mục.

**HOST-02** `data { statement (4–20 tiếng), truth: true|false, why (3–26 tiếng), kicker? }` — thẻ lật ở **câu thứ hai**. Câu 1: đọc nhận định + "True or false?"; câu 2: đáp án + vì sao.

**HOST-03** `data { n, of, title }` — n ≤ of ≤ 9; n = of thì vòng khép đủ và loé "Đét!".

**END-05** `data { text (3–16 tiếng), sub? (≤ 14) }` — Đét nói hết các câu rồi cuộn tròn, Vòng Đét khép, hiện "DetPro". Tự thêm ~2,6 s sau câu cuối.

Âm hiệu tuỳ chọn (DLG-01) trong `audio.sfx` của kịch bản: `stop` (đứng hình), `det` (vòng khép), `rewind` (tua), `ok` (dấu tích).

## 7. Ví dụ cảnh đầy đủ

```js
{ id: "s06", module: "DLG-01", ref: "p18,p19",
  data: { set: "shop", label: "Tình huống",
    actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
    verdict: { ok: false, label: "Đưa bản chính căn cước",
      why: "Lúc nghỉ việc dễ bị hẹn “mai lấy” mãi, và kẹt mọi thủ tục cần căn cước.",
      rule: "Nơi làm không được giữ bản chính giấy tờ tuỳ thân" } },
  lines: [
    { id: "l1", lang: "en", who: "hoa", say: "Leave your ID card with me, just to be safe.", sub: "Cháu để căn cước lại cô giữ, để làm tin nhé.", pose: "explain" },
    { id: "l2", lang: "en", who: "dung", say: "Sure, here is my original card.", sub: "Dạ, cháu gửi cô bản chính ạ.", pose: "give", face: "happy", stop: true },
    { id: "l3", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
    { id: "l4", lang: "en", who: "det", say: "If the shop keeps the original, getting it back can take visit after visit.", sub: "Đưa bản chính, lúc nghỉ việc dễ bị hẹn “mai lấy” hết lần này đến lần khác." },
    { id: "l5", lang: "en", who: "det", say: "Let us rewind and try another way.", sub: "Tua lại, thử cách khác nhé.", phase: "redo" },
    { id: "l6", lang: "en", who: "dung", say: "Here is a copy for your records. I need to keep the original for paperwork.", sub: "Dạ, cháu gửi cô bản sao để làm hồ sơ, bản chính cháu cần giữ để làm giấy tờ ạ.", phase: "redo", pose: "give", face: "happy" },
    { id: "l7", lang: "en", who: "hoa", say: "Okay, a copy is fine.", sub: "Ừ, bản sao là được rồi.", phase: "redo", face: "happy" },
  ] },
```

## 8. Lưu ý

- Cảnh hoạt hình **được** đặt làm cảnh 1 (mở đầu kể chuyện): ScriptVideo không tua trước module hoạt hình, nên miệng và bong bóng khớp giọng mp3.
- **Nhịp lặng** (máy tự chèn): sau câu `stop: true` thêm 1 s (tem "Khoan đã!", Đét lăn vào); trước câu `phase: "redo"` đầu tiên thêm 1,1 s (đoạn tua lại). Muốn thêm lặng ở chỗ khác: ghi `wait: <ms>` vào câu (ví dụ `wait: 600` trước câu chốt).
- Một video W: tối đa 1 cảnh nhiều người (≥ 3 người), cảnh nhiều người ≤ 40 s (NN-L14); tối đa 4 nhân vật có tên.
- Đổi lời đọc thì lịch tự đổi; khi có mp3 thật, độ dài câu sẽ theo tệp (Claude chính lo ở `core/timing.js`).

## 9. Sáu module nhịp dựng từ video mẫu (#109, `modules/va.jsx`)

Các module này không có diễn viên. Mỗi phần tử mới hiện **đúng lúc câu đọc thứ i bắt đầu**, nên câu đọc thứ i ứng với phần tử thứ i. Như vậy không khung nào đứng yên quá 4 s (§9).

| Mã | Tên đã chốt | Dùng khi | data |
|---|---|---|---|
| `TOC-01` | MUC-LUC-CHUONG | Ngay sau câu hỏi chính, hiện cả mục lục 01/02/03 (3–4 s). `current: n` nhắc lại mục lục với chương n sáng lên. | `{ title?, chapters: [string \| {label, illus?}] (2–7), current? }` · bỏ trống `chapters` thì lấy tên các cảnh HOST-03 |
| `TYPE-01` | CHU-GO-DAN | Gõ dần một số, một nhãn hoặc một phép tính (≤ 48 ký tự mỗi dòng) | `{ kicker?, items: [string] (1–3), note?, illus? }` · tiếng gõ lấy từ `audio.sfx["go-phim-01"]`, ≤ 1,2 s, −20 dB |
| `STAT-01` | THE-SO-LIEU | Một đến ba con số **lấy từ bài có dẫn nguồn**, đếm từ 0 | `{ kicker?, stats: [{ value, prefix?, suffix?, decimals?, label }] (1–3), source }` |
| `SRC-01` | TRICH-NGUON-TO-CAU | Đọc nguyên văn câu trong nguồn của bài; câu đang đọc được tô vàng | `{ source, kind?, title?, sentences: [string] (2–6), hl?: [chỉ số câu theo từng câu đọc] }` |
| `ASK-01` | CAU-HOI-PHU | Mỗi chương một câu hỏi phụ "Vậy … là gì?" trước phần giải thích | `{ q (3–18 tiếng), kicker?, illus? }` |
| `MYTH-01` | KHONG-PHAI-MA-LA | Gỡ hiểu lầm ở đầu bài; dùng `recap: true` để nhắc lại ở kết | `{ wrong, right, kicker?, recap? }` · câu đọc 1 cho vế A, câu đọc 2 cho vế B |

- HOST-03 (Đét mở chương) nay tự hiện **dải mục lục 01…n**: chương đang học sáng vàng, chương đã qua có dấu ✓. Không cần sửa kịch bản.
- 231 kịch bản đã đổi mục lục đầu bài (LIST-10/09/11/01) sang `TOC-01`. Còn 56 bài để Đét cầm mục lục (HOST-01).
