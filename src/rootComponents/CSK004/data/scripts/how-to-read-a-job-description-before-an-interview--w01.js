// Kịch bản video W lần 3 (#110) — "Đọc bản mô tả công việc sao cho đúng trước buổi phỏng vấn" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-read-a-job-description-before-an-interview--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "job-seekers",
    "slug": "how-to-read-a-job-description-before-an-interview",
    "door": "ky-nang",
    "level": "B1",
    "title": "Đọc bản mô tả công việc sao cho đúng trước buổi phỏng vấn",
    "series": "Chuẩn bị phỏng vấn xin việc"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo TUẦN CHUẨN BỊ của Dũng cho vị trí nhân viên kho. Mở bằng con số neo “3 lần” và cảnh nhìn trước thứ Sáu 9:00 hỏng (p14) → tua về T2 8:00 tin bị gỡ, xin lại, làm mẫu lưu tin → T2 tối bốn phần → T3 việc chính → T3 tối từ lặp lại, “Khoan đã!” đọc lướt → làm lại bằng bút, đếm “3 lần” → T4 hai cột → T4 tối Lan và chứng chỉ ưu tiên (Hai lựa chọn p19) → T5 đọc giữa dòng → bộ đề luyện → T6 9:00 khép vòng cùng phòng, cùng câu hỏi. Nhân vật: Dũng (chính, gộp Vũ p14, “bạn” p2/p18), cô Hoa (nhân sự, chỉ câu hỏi trong bài p14), Lan (bạn cùng trọ, “bạn” trong Hai lựa chọn p19). Câu trả lời của Dũng ở cảnh khép vòng (đang chuyển từ sổ tay sang bảng tính) dựng theo ý p17 “đáp ứng một phần: kinh nghiệm gần nhất và cách bạn đang bổ sung”. Câu neo: “Đọc kỹ hướng dẫn sử dụng trước khi dùng” → “… trước khi phỏng vấn” (outro). Cảnh ngắt nhịp: BRK-07 (rehook), BRK-03 (đếm “3 lần”), BRK-04 (Cách A/B p19). Bản cũ: w145/bak/how-to-read-a-job-description-before-an-interview--w01.js.",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "boards": {
    "bang-trang": {
      "size": [
        9600,
        1860
      ],
      "hand": "det-paw",
      "font": "hand",
      "frames": {
        "A": [
          0,
          0,
          1728,
          770
        ],
        "B": [
          1968,
          0,
          1728,
          770
        ],
        "C": [
          3936,
          0,
          1728,
          770
        ],
        "D": [
          5904,
          0,
          1728,
          770
        ],
        "E": [
          7872,
          0,
          1728,
          770
        ],
        "F": [
          0,
          1090,
          1728,
          770
        ],
        "G": [
          1968,
          1090,
          1728,
          770
        ],
        "H": [
          3936,
          1090,
          1728,
          770
        ],
        "I": [
          5904,
          1090,
          1728,
          770
        ],
        "J": [
          7872,
          1090,
          1728,
          770
        ]
      }
    }
  },
  "scenes": [
    {
      "id": "s00",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-3",
            "t": "text",
            "text": "3 lần",
            "x": 60,
            "y": 110,
            "size": 180,
            "at": "l1:Three",
            "color": "accent",
            "hl": [
              {
                "text": "3 lần",
                "at": "l1:times"
              }
            ]
          },
          {
            "id": "a-ph",
            "t": "text",
            "text": "“quản lý tồn kho bằng bảng tính”",
            "x": 60,
            "y": 340,
            "size": 52,
            "at": "l1:spreadsheets"
          },
          {
            "id": "a-sk",
            "t": "text",
            "text": "Ta tưởng: lướt một lần là đủ?",
            "x": 70,
            "y": 450,
            "size": 48,
            "at": "l2:skimmed",
            "color": "muted"
          },
          {
            "id": "a-skx",
            "t": "strike",
            "over": "a-sk",
            "at": "l2:once"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three times. One phrase appeared three times in a job ad: stock management on spreadsheets.",
          "sub": "Ba lần. Một cụm xuất hiện ba lần trong tin tuyển dụng: quản lý tồn kho bằng bảng tính.",
          "keys": [
            "Ba lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One candidate skimmed the ad, and didn't see it even once.",
          "sub": "Một ứng viên đọc lướt, và không thấy nó lần nào.",
          "keys": [
            "đọc lướt"
          ]
        }
      ],
      "ref": "p14,intro"
    },
    {
      "id": "s01",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "A",
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Nhìn trước: thứ Sáu 9:00 · phỏng vấn nhân viên kho",
            "icon": "office-building"
          },
          {
            "id": "a-um",
            "t": "text",
            "text": "“Dạ… em chỉ ghi sổ tay”",
            "x": 920,
            "y": 650,
            "size": 44,
            "at": "l5:notebook",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đọc kỹ hướng dẫn",
            "x": 60,
            "y": 560,
            "size": 54,
            "at": "l6:instructions",
            "color": "accent",
            "hl": [
              {
                "text": "Đọc kỹ",
                "at": "l6:carefully"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "trước khi dùng”",
            "x": 60,
            "y": 640,
            "size": 54,
            "at": "l6:use",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng. Warehouse part-timer, fast hands, faster eyes. A bit too fast.",
          "sub": "Đây là Dũng. Làm thêm ở kho, tay nhanh, mắt còn nhanh hơn. Hơi quá nhanh.",
          "keys": [
            "Hơi quá nhanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Friday, nine a.m., his warehouse job interview. This is Cô Hoa, from HR.",
          "sub": "Thứ Sáu, chín giờ, phỏng vấn nhân viên kho. Còn đây là cô Hoa, bên nhân sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "How do you track stock on a spreadsheet?",
          "sub": "Em theo dõi tồn kho trên bảng tính thế nào?",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And how do you filter items with wrong stock?",
          "sub": "Em lọc ra mã hàng bị lệch tồn ra sao?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Um... at my old job, I only used a notebook.",
          "sub": "Dạ… ở chỗ cũ em chỉ ghi sổ tay ạ.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Medicine boxes say: read the instructions carefully before use. Let's rewind to Monday.",
          "sub": "Hộp thuốc nào cũng dặn: “Đọc kỹ hướng dẫn sử dụng trước khi dùng.” Tua về thứ Hai nhé.",
          "keys": [
            "Đọc kỹ hướng dẫn sử dụng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s02",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "A",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "B",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Đọc bản mô tả thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:read",
            "hl": [
              {
                "text": "thế nào",
                "at": "l1:How"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: lướt một lần",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:skim",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:outline"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: như đề cương ôn thi",
            "x": 2028,
            "y": 240,
            "size": 56,
            "at": "l2:outline",
            "color": "accent",
            "hl": [
              {
                "text": "đề cương ôn thi",
                "at": "l2:outline"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Lưu lại, tách phần",
            "x": 2908,
            "y": 160,
            "size": 46,
            "at": "l3:Save"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Tìm từ lặp lại",
            "x": 2908,
            "y": 225,
            "size": 46,
            "at": "l3:repeated"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Đối chiếu với mình",
            "x": 2908,
            "y": 290,
            "size": 46,
            "at": "l3:yourself"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Đoán câu sẽ hỏi",
            "x": 2908,
            "y": 355,
            "size": 46,
            "at": "l3:guess",
            "hl": [
              {
                "text": "Đoán",
                "at": "l3:guess"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l4:Friday+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l4:Friday+250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l4:Friday+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l4:Friday+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l4:Friday+1000",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Hai",
            "x": 2048,
            "y": 535,
            "size": 44,
            "at": "l4:Friday+100"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2378,
            "y": 535,
            "size": 44,
            "at": "l4:Friday+350"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2708,
            "y": 535,
            "size": 44,
            "at": "l4:Friday+600"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Năm",
            "x": 3038,
            "y": 535,
            "size": 44,
            "at": "l4:Friday+850"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6 9:00",
            "x": 3368,
            "y": 535,
            "size": 44,
            "at": "l4:Friday+1100"
          },
          {
            "id": "b-ds0",
            "t": "text",
            "text": "lưu, tách",
            "x": 2048,
            "y": 640,
            "size": 36,
            "at": "l4:Friday+400",
            "color": "muted"
          },
          {
            "id": "b-ds1",
            "t": "text",
            "text": "việc, từ khoá",
            "x": 2378,
            "y": 640,
            "size": 36,
            "at": "l4:Friday+650",
            "color": "muted"
          },
          {
            "id": "b-ds2",
            "t": "text",
            "text": "đối chiếu",
            "x": 2708,
            "y": 640,
            "size": 36,
            "at": "l4:Friday+900",
            "color": "muted"
          },
          {
            "id": "b-ds3",
            "t": "text",
            "text": "giữa dòng",
            "x": 3038,
            "y": 640,
            "size": 36,
            "at": "l4:Friday+1150",
            "color": "muted"
          },
          {
            "id": "b-ds4",
            "t": "text",
            "text": "phỏng vấn",
            "x": 3368,
            "y": 640,
            "size": 36,
            "at": "l4:Friday+1400",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how should you read a job description before an interview?",
          "sub": "Vậy đọc bản mô tả công việc trước phỏng vấn thế nào cho đúng?",
          "keys": [
            "thế nào cho đúng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not one quick skim. Read it like an exam outline.",
          "sub": "Không phải lướt một lần. Mà đọc như đề cương ôn thi.",
          "keys": [
            "đề cương ôn thi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Save it and split it. Find repeated words. Compare with yourself. Guess their questions.",
          "sub": "Lưu lại, tách phần. Tìm từ lặp lại. Đối chiếu với bản thân. Đoán câu họ sẽ hỏi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Dũng's week, Monday to Friday.",
          "sub": "Theo tuần của Dũng, thứ Hai đến thứ Sáu.",
          "keys": [
            "thứ Hai đến thứ Sáu"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "B",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "C",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 8:00 · Tin đã gỡ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:invite"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "envelope"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai 8:00 · email mời phỏng vấn",
            "icon": "envelope"
          },
          {
            "id": "c-3w",
            "t": "text",
            "text": "Nộp từ 3 tuần trước",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l1:weeks",
            "color": "muted"
          },
          {
            "id": "c-gone",
            "t": "text",
            "text": "Mở lại tin: đã bị gỡ!",
            "x": 3996,
            "y": 250,
            "size": 52,
            "at": "l2:gone",
            "color": "coral",
            "hl": [
              {
                "text": "đã bị gỡ",
                "at": "l2:gone"
              }
            ]
          },
          {
            "id": "c-f1",
            "t": "text",
            "text": "Trang tuyển dụng của công ty",
            "x": 3996,
            "y": 350,
            "size": 42,
            "at": "l4:careers"
          },
          {
            "id": "c-f2",
            "t": "text",
            "text": "Email xác nhận nộp hồ sơ",
            "x": 3996,
            "y": 415,
            "size": 42,
            "at": "l4:email"
          },
          {
            "id": "c-f3",
            "t": "text",
            "text": "Nhờ nhân sự gửi lại",
            "x": 3996,
            "y": 480,
            "size": 42,
            "at": "l5:send",
            "color": "accent",
            "hl": [
              {
                "text": "gửi lại",
                "at": "l5:send"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday, eight a.m. The invite arrives. He applied three weeks ago.",
          "sub": "Chặng một: tám giờ sáng thứ Hai. Thư mời đến. Dũng nộp từ ba tuần trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Let me reread the ad... It's gone!",
          "sub": "Đọc lại tin xem nào... Bị gỡ rồi!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ads often vanish when they expire, sometimes after just a few weeks.",
          "sub": "Tin tuyển dụng thường bị gỡ khi hết hạn, có khi chỉ sau vài tuần.",
          "keys": [
            "bị gỡ khi hết hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try their careers page, or your application email.",
          "sub": "Thử tìm trên trang tuyển dụng của công ty, hoặc email xác nhận nộp hồ sơ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Could you send me the job description for this role, so I can prepare better?",
          "sub": "Anh chị có thể gửi giúp em bản mô tả công việc của vị trí này để em chuẩn bị kỹ hơn không ạ?",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A normal request. Nobody thinks less of you.",
          "sub": "Đề nghị bình thường. Không ai đánh giá thấp bạn vì nó.",
          "keys": [
            "Đề nghị bình thường"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 560,
            "w": 46,
            "h": 46,
            "at": "l1:screenshot",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 542,
            "size": 58,
            "at": "l1:screenshot+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Bấm nộp: chụp toàn bộ tin",
            "x": 4066,
            "y": 552,
            "size": 38,
            "at": "l1:screenshot+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 632,
            "w": 46,
            "h": 46,
            "at": "l2:name",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 614,
            "size": 58,
            "at": "l2:name+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Tên tệp: ngày – công ty – vị trí",
            "x": 4066,
            "y": 624,
            "size": 38,
            "at": "l2:name+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 704,
            "w": 46,
            "h": 46,
            "at": "l2:folder",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 686,
            "size": 58,
            "at": "l2:folder+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Thư mục riêng đợt tìm việc",
            "x": 4066,
            "y": 696,
            "size": 38,
            "at": "l2:folder+200"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Nộp tin nào, lưu tin đó",
            "x": 4836,
            "y": 690,
            "size": 48,
            "at": "l3:apply",
            "color": "accent",
            "hl": [
              {
                "text": "lưu tin đó",
                "at": "l3:save"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next time: the moment you click apply, screenshot the whole ad, title to last line.",
          "sub": "Lần sau: vừa bấm nộp, chụp màn hình toàn bộ tin, từ tiêu đề đến dòng cuối.",
          "keys": [
            "chụp màn hình toàn bộ tin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Name the file: date, company, role. One folder for your job search.",
          "sub": "Đặt tên tệp: ngày nộp, tên công ty, vị trí. Một thư mục riêng cho đợt tìm việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Later you may find the real job is contracts, not social media. Every ad you apply to, you save.",
          "sub": "Sau này đọc lại, có khi thấy việc chính là hợp đồng, không phải mạng xã hội. Nộp tin nào, lưu tin đó.",
          "keys": [
            "Nộp tin nào, lưu tin đó"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s05",
      "module": "BRK-07",
      "data": {
        "question": "Có lại tin rồi. Đọc từ đâu trước?",
        "illus": "thinking-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He has the ad back. Where does he even start?",
          "sub": "Có lại tin rồi. Mà đọc từ đâu trước?",
          "keys": [
            "đọc từ đâu"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "C",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai tối · Bốn phần",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:parts",
            "hl": [
              {
                "text": "Bốn phần",
                "at": "l1:parts"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pen"
              ]
            },
            "at": "l1:evening",
            "caption": "Thứ Hai 20:00 · bút dạ trong tay",
            "icon": "memo"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "① Trách nhiệm",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:Duties"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "② Yêu cầu bắt buộc",
            "x": 5964,
            "y": 240,
            "size": 48,
            "at": "l2:must-haves",
            "color": "accent"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "③ Yêu cầu ưu tiên",
            "x": 5964,
            "y": 310,
            "size": 48,
            "at": "l2:nice-to-haves"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "④ Quyền lợi, môi trường",
            "x": 5964,
            "y": 380,
            "size": 48,
            "at": "l2:benefits"
          },
          {
            "id": "d-must",
            "t": "text",
            "text": "Bắt buộc: phải chứng minh",
            "x": 5964,
            "y": 490,
            "size": 44,
            "at": "l4:prove",
            "color": "accent",
            "hl": [
              {
                "text": "chứng minh",
                "at": "l4:prove"
              }
            ]
          },
          {
            "id": "d-plus",
            "t": "text",
            "text": "“…là một lợi thế”: điểm cộng",
            "x": 5964,
            "y": 565,
            "size": 44,
            "at": "l5:advantage",
            "hl": [
              {
                "text": "điểm cộng",
                "at": "l5:bonus"
              }
            ]
          },
          {
            "id": "d-mark",
            "t": "text",
            "text": "Đánh dấu từng phần → biết dồn sức",
            "x": 5964,
            "y": 680,
            "size": 40,
            "at": "l6:effort",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday evening. Highlighter ready. First, the parts.",
          "sub": "Chặng hai: tối thứ Hai. Bút dạ sẵn sàng. Trước hết, tách phần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Duties, must-haves, nice-to-haves, benefits... Four parts!",
          "sub": "Trách nhiệm, bắt buộc, ưu tiên, quyền lợi... Bốn phần!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most ads have these four, whatever the names.",
          "sub": "Hầu hết tin đều có bốn phần này, dù tên gọi khác nhau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Required points are what you must prove: degree, years of experience, skills, certificates.",
          "sub": "Yêu cầu bắt buộc là điều phải chứng minh: bằng cấp, số năm kinh nghiệm, kỹ năng, chứng chỉ.",
          "keys": [
            "phải chứng minh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Preferably, or is an advantage? That's a bonus, not a rule-out.",
          "sub": "“Ưu tiên ứng viên…”, “là một lợi thế”? Đó là điểm cộng, không phải điều kiện loại.",
          "keys": [
            "điểm cộng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Mark each part, and you know where to put your effort.",
          "sub": "Đánh dấu từng phần, bạn biết dồn sức vào đâu."
        }
      ],
      "ref": "p5,p6,p7"
    },
    {
      "id": "s07",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "D",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "E",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba · Việc chính",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:main"
          },
          {
            "id": "e-first",
            "t": "text",
            "text": "Ghi đầu tiên ≈ nhiều thời gian nhất",
            "x": 7932,
            "y": 160,
            "size": 44,
            "at": "l2:first",
            "hl": [
              {
                "text": "Ghi đầu tiên",
                "at": "l2:first"
              }
            ]
          },
          {
            "id": "e-hint",
            "t": "text",
            "text": "(gợi ý, không tuyệt đối)",
            "x": 7932,
            "y": 225,
            "size": 36,
            "at": "l2:hint",
            "color": "muted"
          },
          {
            "id": "e-ex",
            "t": "text",
            "text": "Ví dụ tin marketing:",
            "x": 7932,
            "y": 310,
            "size": 44,
            "at": "l3:marketing",
            "color": "muted"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 390,
            "w": 46,
            "h": 46,
            "at": "l3:writing",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 372,
            "size": 58,
            "at": "l3:writing+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Viết nội dung mạng xã hội",
            "x": 8002,
            "y": 382,
            "size": 40,
            "at": "l3:writing+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 462,
            "w": 46,
            "h": 46,
            "at": "l3:designers",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 444,
            "size": 58,
            "at": "l3:designers+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Phối hợp với thiết kế",
            "x": 8002,
            "y": 454,
            "size": 40,
            "at": "l3:designers+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 534,
            "w": 46,
            "h": 46,
            "at": "l3:monthly",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 516,
            "size": 58,
            "at": "l3:monthly+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Theo dõi số liệu hằng tháng",
            "x": 8002,
            "y": 526,
            "size": 40,
            "at": "l3:monthly+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 606,
            "w": 46,
            "h": 46,
            "at": "l3:events",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 588,
            "size": 58,
            "at": "l3:events+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Hỗ trợ sự kiện khi cần",
            "x": 8002,
            "y": 598,
            "size": 40,
            "at": "l3:events+200"
          },
          {
            "id": "e-best",
            "t": "text",
            "text": "→ ví dụ mạnh: bài viết + kết quả",
            "x": 8772,
            "y": 400,
            "size": 34,
            "at": "l4:strongest",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Tuesday. Which duty is the main one?",
          "sub": "Chặng ba: thứ Ba. Việc nào mới là việc chính?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Duties listed first usually take the most time, or matter most. A good hint, not a law.",
          "sub": "Nhiệm vụ ghi đầu tiên thường chiếm nhiều thời gian hoặc quan trọng nhất. Gợi ý tốt, không phải luật.",
          "keys": [
            "ghi đầu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A marketing ad lists: writing social posts, working with designers, monthly numbers, events when needed.",
          "sub": "Một tin marketing ghi: viết nội dung mạng xã hội, phối hợp thiết kế, theo dõi số liệu hằng tháng, sự kiện khi cần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So your strongest example is content you wrote, and its results. Events are only now and then.",
          "sub": "Vậy ví dụ mạnh nhất là nội dung bạn từng viết và kết quả. Sự kiện chỉ thỉnh thoảng.",
          "keys": [
            "ví dụ mạnh nhất"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s08",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-long",
            "t": "text",
            "text": "Danh sách quá dài, nhiều mảng?",
            "x": 8772,
            "y": 560,
            "size": 42,
            "at": "l1:long",
            "color": "coral"
          },
          {
            "id": "e-note",
            "t": "text",
            "text": "→ ghi lại, hỏi cuối buổi",
            "x": 8772,
            "y": 630,
            "size": 46,
            "at": "l2:end",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi cuối buổi",
                "at": "l2:ask"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A very long list across many areas? It may mean juggling lots of tasks.",
          "sub": "Danh sách nhiệm vụ rất dài, trải nhiều mảng? Có thể là phải ôm nhiều việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't jump to conclusions. Note it, and ask at the end.",
          "sub": "Đừng vội kết luận. Ghi lại, cuối buổi hỏi.",
          "keys": [
            "Đừng vội kết luận"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s09",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "E",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Ba tối · Từ lặp lại",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:words",
            "hl": [
              {
                "text": "Từ lặp lại",
                "at": "l1:repeated"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:evening",
            "caption": "Thứ Ba 21:00 · đọc tin kho",
            "icon": "mobile-phone"
          },
          {
            "id": "f-u",
            "t": "text",
            "text": "Gạch chân từ kỹ năng, phẩm chất",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l1:underline"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Lặp nhiều lần · có ở 2 phần",
            "x": 60,
            "y": 1335,
            "size": 42,
            "at": "l2:both",
            "color": "accent"
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "= điều họ quan tâm nhất",
            "x": 60,
            "y": 1405,
            "size": 46,
            "at": "l2:most",
            "hl": [
              {
                "text": "quan tâm nhất",
                "at": "l2:most"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Tuesday evening, the repeated words. Underline skill and quality words.",
          "sub": "Chặng bốn: tối thứ Ba, từ lặp lại. Gạch chân các từ chỉ kỹ năng, phẩm chất.",
          "keys": [
            "Gạch chân"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Words that repeat, or appear in both duties and requirements, are what they care about most.",
          "sub": "Từ lặp nhiều lần, hoặc có ở cả trách nhiệm lẫn yêu cầu, là điều họ quan tâm nhất.",
          "keys": [
            "quan tâm nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But Dũng is in a hurry, as usual.",
          "sub": "Nhưng Dũng thì vẫn vội, như mọi khi."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Ba · đọc lướt tin kho",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc lướt một lần",
          "why": "Bỏ sót cụm “quản lý tồn kho bằng bảng tính” lặp ba lần, đúng hai câu hỏi đầu tiên.",
          "rule": "Chữ nào lặp lại, câu hỏi nằm ở đó"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Warehouse job? I've done that. Skim, done. Okay, ready!",
          "sub": "Nhân viên kho à? Làm rồi. Lướt cái, xong. Ok, sẵn sàng!",
          "face": "happy",
          "pose": "thumb",
          "stop": true
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Skim once, and you miss exactly the words that matter. Remember Friday?",
          "sub": "Lướt một lần là bỏ sót đúng những từ quan trọng. Nhớ sáng thứ Sáu chứ?",
          "keys": [
            "bỏ sót đúng những từ quan trọng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two, with a pen.",
          "sub": "Tua lại! Lần này cầm bút.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Stock management on spreadsheets... here, here, and here. Three times!",
          "sub": "Quản lý tồn kho bằng bảng tính... đây, đây, và đây. Ba lần!",
          "phase": "redo",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three times. That's the question, waiting for him.",
          "sub": "Ba lần. Câu hỏi đang nằm chờ ở đó.",
          "phase": "redo",
          "keys": [
            "Câu hỏi đang nằm chờ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14,p11"
    },
    {
      "id": "s11",
      "module": "BRK-03",
      "data": {
        "value": 3,
        "suffix": " lần",
        "label": "“quản lý tồn kho bằng bảng tính”",
        "illus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Count it.",
          "sub": "Đếm thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three times: stock on spreadsheets.",
          "sub": "Ba lần: tồn kho bằng bảng tính.",
          "keys": [
            "Ba lần"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s12",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-data",
            "t": "text",
            "text": "Số liệu, báo cáo, bảng tính ×3–4",
            "x": 60,
            "y": 1520,
            "size": 42,
            "at": "l1:reports",
            "color": "muted"
          },
          {
            "id": "f-test",
            "t": "text",
            "text": "→ có thể làm bài kiểm tra",
            "x": 100,
            "y": 1590,
            "size": 42,
            "at": "l1:test",
            "color": "coral"
          },
          {
            "id": "f-same",
            "t": "text",
            "text": "Trả lời bằng đúng từ khoá",
            "x": 60,
            "y": 1680,
            "size": 48,
            "at": "l2:key",
            "hl": [
              {
                "text": "đúng từ khoá",
                "at": "l2:key"
              }
            ]
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Chữ lặp lại, câu hỏi ở đó",
            "x": 60,
            "y": 1780,
            "size": 48,
            "at": "l3:repeats",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Data analysis, reports, spreadsheets, three or four times? You'll surely be asked, maybe with a small test.",
          "sub": "“Phân tích số liệu”, “báo cáo”, “bảng tính” lặp ba bốn lần? Gần như chắc bị hỏi, có khi còn làm bài kiểm tra nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Reuse those key words in your answers. Interviewers often score against the description.",
          "sub": "Khi trả lời, dùng lại đúng từ khoá đó. Người phỏng vấn thường chấm theo tiêu chí giống bản mô tả.",
          "keys": [
            "dùng lại đúng từ khoá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Where a word repeats, the question is waiting.",
          "sub": "Chữ nào lặp lại, câu hỏi nằm ở đó.",
          "keys": [
            "Chữ nào lặp lại, câu hỏi nằm ở đó"
          ]
        }
      ],
      "ref": "p12,p13,p15"
    },
    {
      "id": "s13",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Hai cột",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:columns",
            "hl": [
              {
                "text": "Hai cột",
                "at": "l1:columns"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo",
                "laptop"
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư 20:00 · tờ giấy hai cột",
            "icon": "memo"
          },
          {
            "id": "g-l",
            "t": "text",
            "text": "Yêu cầu",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l1:requirements",
            "color": "accent"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Bằng chứng",
            "x": 2408,
            "y": 1250,
            "size": 50,
            "at": "l1:evidence",
            "color": "accent"
          },
          {
            "id": "g-line",
            "t": "box",
            "x": 2368,
            "y": 1250,
            "w": 4,
            "h": 330,
            "at": "l1:evidence",
            "stroke": 4
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Tốt → ví dụ rõ",
            "x": 2028,
            "y": 1340,
            "size": 40,
            "at": "l2:Meet"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Một phần → đang bổ sung",
            "x": 2028,
            "y": 1410,
            "size": 40,
            "at": "l2:Partly"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Chưa có → trả lời thật",
            "x": 2028,
            "y": 1480,
            "size": 40,
            "at": "l3:honest",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Wednesday. Two columns: requirements on the left, your evidence on the right.",
          "sub": "Chặng năm: thứ Tư. Hai cột: trái là yêu cầu, phải là bằng chứng của bạn.",
          "keys": [
            "Hai cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet it well? A clear example. Partly? Your closest experience, and how you're catching up.",
          "sub": "Đáp ứng tốt: ví dụ rõ. Một phần: kinh nghiệm gần nhất và cách bạn đang bổ sung."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not at all? An honest answer, said calmly.",
          "sub": "Chưa có: một câu trả lời thành thật, nói bình tĩnh.",
          "keys": [
            "thành thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I haven't used this software, but at my last job I learned a similar one in two weeks, for daily work.",
          "sub": "Em chưa dùng phần mềm này, nhưng ở chỗ cũ em học một phần mềm tương tự trong hai tuần và dùng hằng ngày.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Missing one or two preferred points is normal. Just don't be surprised.",
          "sub": "Thiếu một hai yêu cầu ưu tiên là bình thường. Quan trọng là đừng bị bất ngờ.",
          "keys": [
            "đừng bị bất ngờ"
          ]
        }
      ],
      "ref": "p16,p17,p18"
    },
    {
      "id": "s14",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "G",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Tư tối · Lan định huỷ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Lan"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư 22:00 · phòng bên",
            "icon": "mobile-phone"
          },
          {
            "id": "h-pref",
            "t": "text",
            "text": "“Ưu tiên có chứng chỉ nghiệp vụ”",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l2:prefer",
            "color": "muted"
          },
          {
            "id": "h-cancel",
            "t": "text",
            "text": "→ nhắn xin huỷ lịch?",
            "x": 4036,
            "y": 1340,
            "size": 46,
            "at": "l2:cancel",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, next door: meet Lan, Dũng's roommate, who has an interview too.",
          "sub": "Cùng lúc, phòng bên: đây là Lan, bạn cùng trọ của Dũng, cũng sắp phỏng vấn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "They prefer a professional certificate. I'm still studying. I'd better cancel.",
          "sub": "Họ ưu tiên có chứng chỉ nghiệp vụ. Mình mới đang học. Thôi, xin huỷ lịch vậy.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two choices. Watch.",
          "sub": "Hai lựa chọn. Xem nhé."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Thiếu một yêu cầu ưu tiên",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Xin huỷ lịch, mất luôn cơ hội",
        "right": "Vẫn đi, nói thật đang học, thi khi nào",
        "wrongIllus": "crying-face",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Plan A: cancel, and lose the chance.",
          "sub": "Cách A: huỷ lịch, mất luôn cơ hội.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plan B: go, and say when she'll take the exam.",
          "sub": "Cách B: vẫn đi, nói thật khi nào thi.",
          "keys": [
            "Cách B"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s16",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-b",
            "t": "text",
            "text": "Phần bắt buộc: đủ cả",
            "x": 3996,
            "y": 1490,
            "size": 48,
            "at": "l1:required",
            "color": "accent"
          },
          {
            "id": "h-rule1",
            "t": "text",
            "text": "Bắt buộc thì chứng minh,",
            "x": 3996,
            "y": 1670,
            "size": 52,
            "at": "l2:prove",
            "color": "accent"
          },
          {
            "id": "h-rule2",
            "t": "text",
            "text": "ưu tiên thì thành thật",
            "x": 3996,
            "y": 1750,
            "size": 52,
            "at": "l2:honest",
            "color": "accent",
            "hl": [
              {
                "text": "thành thật",
                "at": "l2:honest"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "She meets every required point. With Plan B, the talk goes back to what matters: her experience.",
          "sub": "Phần bắt buộc Lan đủ cả. Theo cách B, buổi nói chuyện quay về điều quan trọng hơn: kinh nghiệm cô đã có."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Required: prove it. Preferred: be honest.",
          "sub": "Bắt buộc thì chứng minh, ưu tiên thì thành thật.",
          "keys": [
            "Bắt buộc thì chứng minh, ưu tiên thì thành thật"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s17",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "H",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm · Giữa các dòng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:between"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "alarm-clock"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm 19:00 · đọc giữa dòng",
            "icon": "alarm-clock"
          },
          {
            "id": "i-ot",
            "t": "text",
            "text": "“Sẵn sàng làm ngoài giờ khi cần”",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l2:overtime",
            "color": "coral"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Áp lực, ngoài giờ → việc nhiều?",
            "x": 5964,
            "y": 1360,
            "size": 40,
            "at": "l4:pressure"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Làm độc lập → nhóm nhỏ?",
            "x": 5964,
            "y": 1425,
            "size": 40,
            "at": "l4:independently"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Báo cáo giám đốc → gần sếp lớn",
            "x": 5964,
            "y": 1490,
            "size": 40,
            "at": "l4:director"
          },
          {
            "id": "i-hyp",
            "t": "text",
            "text": "Giả thuyết để hỏi, không kết luận",
            "x": 5964,
            "y": 1580,
            "size": 34,
            "at": "l5:guess",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Thursday. Reading between the lines.",
          "sub": "Chặng bảy: thứ Năm. Đọc giữa các dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ready to work overtime when needed... So it's overtime forever?",
          "sub": "Sẵn sàng làm ngoài giờ khi cần... Vậy là tăng ca triền miên à?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not for sure. Maybe just peak times, like quarter ends or busy seasons.",
          "sub": "Chưa chắc. Có khi chỉ vài đợt cao điểm, như cuối quý hay mùa hàng.",
          "keys": [
            "Chưa chắc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "High pressure may mean a big workload. Work independently, a small team. Reports to the director, close to top managers.",
          "sub": "“Áp lực cao” có thể là việc nhiều. “Làm độc lập”: nhóm nhỏ, ít người kèm. “Báo cáo giám đốc”: làm gần cấp cao."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Treat each one as a guess to check, not a verdict.",
          "sub": "Coi đó là giả thuyết để hỏi, không phải kết luận.",
          "keys": [
            "giả thuyết để hỏi"
          ]
        }
      ],
      "ref": "p21,p23"
    },
    {
      "id": "s18",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-q",
            "t": "text",
            "text": "“Nhóm bận nhất vào lúc nào ạ?”",
            "x": 5964,
            "y": 1680,
            "size": 46,
            "at": "l1:busiest",
            "color": "accent",
            "hl": [
              {
                "text": "bận nhất",
                "at": "l1:busiest"
              }
            ]
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Đọc giữa dòng để hỏi, không phán",
            "x": 5964,
            "y": 1780,
            "size": 44,
            "at": "l2:judge",
            "hl": [
              {
                "text": "để hỏi",
                "at": "l2:ask"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stay open, then ask gently at the end: when is the team busiest? What does a typical week look like?",
          "sub": "Cứ cởi mở, cuối buổi hỏi nhẹ: nhóm mình thường bận nhất lúc nào? Hay: một tuần điển hình trông thế nào?",
          "keys": [
            "hỏi nhẹ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read between the lines to ask, not to judge.",
          "sub": "Đọc giữa dòng để hỏi, đừng để phán.",
          "keys": [
            "để hỏi, đừng để phán"
          ]
        }
      ],
      "ref": "p22,p23,p24"
    },
    {
      "id": "s19",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "I",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "J",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Bộ đề luyện → Thứ Sáu 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:interviewer"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "walk",
                  "from": "left",
                  "at": "l3",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l3:Friday",
            "caption": "Thứ Sáu 9:00 · lần này đã đọc kỹ",
            "icon": "office-building"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Mỗi trách nhiệm → 1 câu hỏi",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l1:duty",
            "hl": [
              {
                "text": "1 câu hỏi",
                "at": "l1:ask"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "5–7 câu đoán trước",
            "x": 7932,
            "y": 1340,
            "size": 50,
            "at": "l2:Five",
            "color": "accent"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Tối hôm trước: đọc lại 1 lần",
            "x": 7932,
            "y": 1420,
            "size": 40,
            "at": "l2:evening",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop. For each main duty, ask: if I were the interviewer, what would I ask?",
          "sub": "Chặng cuối. Với mỗi trách nhiệm chính, tự hỏi: nếu là người phỏng vấn, mình sẽ hỏi gì?",
          "keys": [
            "mình sẽ hỏi gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five to seven predicted questions, each with a true story. Reread the ad the evening before.",
          "sub": "Năm đến bảy câu dự đoán, mỗi câu một chuyện thật. Tối hôm trước đọc lại bản mô tả.",
          "keys": [
            "Năm đến bảy câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Friday, nine a.m. Same office, same question. Different Dũng.",
          "sub": "Thứ Sáu, chín giờ. Vẫn văn phòng ấy, vẫn câu hỏi ấy. Dũng thì khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "How do you track stock on a spreadsheet?",
          "sub": "Em theo dõi tồn kho trên bảng tính thế nào?",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I'm moving from a notebook to spreadsheets now. Let me show you my practice file.",
          "sub": "Em đang chuyển từ sổ tay sang bảng tính. Em xin cho cô xem tệp em đang luyện ạ.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Not perfect. But honest, prepared, and not surprised.",
          "sub": "Chưa hoàn hảo. Nhưng thật, có chuẩn bị, và không bị bất ngờ.",
          "keys": [
            "không bị bất ngờ"
          ]
        }
      ],
      "ref": "p25,p26"
    },
    {
      "id": "s20",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "J",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Đọc kỹ hướng dẫn",
            "x": 7932,
            "y": 1610,
            "size": 52,
            "at": "l1:instructions",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "trước khi… phỏng vấn”",
            "x": 7932,
            "y": 1690,
            "size": 56,
            "at": "l1:interview",
            "color": "accent",
            "hl": [
              {
                "text": "phỏng vấn",
                "at": "l1:interview"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Read the instructions carefully before... the interview.",
          "sub": "“Đọc kỹ hướng dẫn trước khi… phỏng vấn.”",
          "keys": [
            "trước khi… phỏng vấn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The only paper the employer writes to tell you what they'll ask.",
          "sub": "Tờ giấy duy nhất nhà tuyển dụng viết sẵn để bạn biết họ sẽ hỏi gì."
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "J",
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:Save",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l1:repeated",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l2:honest",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4636,
            "y": 560,
            "at": "l1:Save+600"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1690,
            "at": "l1:repeated+600"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1680,
            "at": "l2:honest+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: Save it. Split it. Underline repeated words.",
          "sub": "Tóm lại: lưu lại, tách phần, gạch chân từ lặp lại.",
          "keys": [
            "gạch chân từ lặp lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Prove the must-haves, be honest about the rest, and ask about what's between the lines.",
          "sub": "Chứng minh phần bắt buộc, thành thật phần còn lại, và hỏi về điều nằm giữa các dòng.",
          "keys": [
            "thành thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today: open your next ad, underline the repeats, write five questions you expect.",
          "sub": "Hôm nay: mở bản mô tả sắp tới, gạch chân từ lặp, viết năm câu hỏi bạn đoán sẽ gặp.",
          "keys": [
            "viết năm câu hỏi"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s34",
      "module": "QUIZ-01",
      "ref": "questions[14]",
      "data": {
        "q": "How can you tell which skill the employer cares about most?",
        "options": [
          "Look only at the job title, since it already names the most important skill",
          "Choose the skill you like best, because employers always share your interests",
          "Look for words repeated many times or found in both duties and requirements"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "magnifying-glass-tilted-left",
        "why": "Từ lặp lại nhiều lần, hoặc có ở cả hai phần, thường là trọng tâm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How can you tell which skill the employer cares about most?",
          "sub": "Làm sao biết nhà tuyển dụng quan tâm kỹ năng nào nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Look for words repeated many times or found in both duties and requirements.",
          "sub": "Tìm từ lặp lại nhiều lần, hoặc có ở cả trách nhiệm lẫn yêu cầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Counting key words is a quick way to guess the questions.",
          "sub": "Đếm từ khoá là cách nhanh để đoán câu hỏi."
        }
      ]
    },
    {
      "id": "s35",
      "module": "QUIZ-01",
      "ref": "questions[29]",
      "data": {
        "q": "Which rule fits required and preferred skills?",
        "options": [
          "Treat every line as required, and give up if you miss even one",
          "Prove the required skills, and be honest about the preferred ones you lack",
          "Ignore the must have list and talk only about the bonus skills you own"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Bắt buộc thì chứng minh, ưu tiên thì thành thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which rule fits required and preferred skills?",
          "sub": "Quy tắc nào hợp với yêu cầu bắt buộc và yêu cầu ưu tiên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Prove the required skills, and be honest about the preferred ones you lack.",
          "sub": "Chứng minh phần bắt buộc, thành thật về phần ưu tiên còn thiếu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Put your effort into the musts.",
          "sub": "Dồn sức chứng minh phần bắt buộc."
        }
      ]
    },
    {
      "id": "s36",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: gạch chân, viết năm câu đoán trước",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
