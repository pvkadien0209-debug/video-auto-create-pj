// Kịch bản video W lần 3 (#110) — "Cách viết email công việc rõ ràng, lịch sự" · chuỗi "Giao tiếp nơi công sở"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-write-a-clear-and-polite-work-email--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "office-communicators",
    "slug": "how-to-write-a-clear-and-polite-work-email",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách viết email công việc rõ ràng, lịch sự",
    "series": "Giao tiếp nơi công sở"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo MỘT TUẦN EMAIL của Thảo và Dũng (Thứ Hai 8:00 Thảo hỏi ba chuyện trong một thư → 10:00 → 14:00 → Thứ Ba 9:00 → 15:00 → Thứ Tư 23:00 “Khoan đã!” → Thứ Năm 9:00 → 16:00 → Thứ Sáu 9:00 nhắc khéo, khép vòng). Nhân vật: Thảo (Ngọc p3, người viết cho người nước ngoài p30), Dũng (Toàn p15, Sơn p20), Sam (p30). Hằng (p26) kể không tên. Tên trong câu mẫu (anh Lực, chị Duyên, anh Khôi, anh Bảo) giữ như bài. Ngắt nhịp: BRK-04 tiêu đề (p5), BRK-07 rehook (trước p20), BRK-03 20 lần làm phiền (p23). Tục ngữ mở/khép: “Bút sa gà chết” → “gà vẫn khoẻ”. Bản cũ: w145/bak/how-to-write-a-clear-and-polite-work-email--w01.js.",
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
            "text": "Hỏi 3 chuyện",
            "x": 60,
            "y": 110,
            "size": 120,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 chuyện",
                "at": "l1:three things"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "→ được trả lời 1",
            "x": 60,
            "y": 280,
            "size": 96,
            "at": "l1:one",
            "color": "coral",
            "hl": [
              {
                "text": "1",
                "at": "l1:one"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "giá ✓ · ngày giao ? · đóng gói ?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l2:price"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three things asked in one email. One thing answered.",
          "sub": "Hỏi ba chuyện trong một email. Được trả lời đúng một.",
          "keys": [
            "Được trả lời đúng một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The price, yes. The delivery date and packing? Lost at sea.",
          "sub": "Giá thì có. Ngày giao, cách đóng gói? Chìm nghỉm.",
          "keys": [
            "Chìm nghỉm"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
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
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "e-mail",
                "package"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 8:00",
            "icon": "e-mail"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Bút sa gà chết”",
            "x": 60,
            "y": 560,
            "size": 64,
            "at": "l4:pen",
            "color": "accent",
            "hl": [
              {
                "text": "gà chết",
                "at": "l4:chicken"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Neat, organised, loves numbered lists. Her supplier email this Monday: one long paragraph.",
          "sub": "Ngăn nắp, mê đánh số. Vậy mà email gửi nhà cung cấp sáng thứ Hai: một đoạn dài.",
          "keys": [
            "một đoạn dài"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Price, next delivery date, packing. All in one email. Send!",
          "sub": "Giá mới, ngày giao lô sau, cách đóng gói. Gộp một thư. Gửi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An old saying: when the pen drops, the chicken dies. Once sent, it's sent.",
          "sub": "Ông bà nói: “Bút sa gà chết.” Đã gửi là không rút lại được.",
          "keys": [
            "Bút sa gà chết"
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
      "ref": "p3"
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
            "text": "Đọc một lần là hiểu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:once",
            "hl": [
              {
                "text": "một lần",
                "at": "l1:once"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: văn hay, câu dài",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:fancy",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:habits"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 5 thói quen nhỏ",
            "x": 2028,
            "y": 260,
            "size": 58,
            "at": "l2:habits",
            "color": "accent",
            "hl": [
              {
                "text": "5 thói quen",
                "at": "l2:five small habits"
              }
            ]
          },
          {
            "id": "b-h0",
            "t": "text",
            "text": "① Tiêu đề nói đúng việc",
            "x": 2888,
            "y": 150,
            "size": 46,
            "at": "l3:subject"
          },
          {
            "id": "b-h1",
            "t": "text",
            "text": "② Câu đầu nêu mục đích",
            "x": 2888,
            "y": 222,
            "size": 46,
            "at": "l3:purpose"
          },
          {
            "id": "b-h2",
            "t": "text",
            "text": "③ Việc nhờ: tên người, thời hạn",
            "x": 2888,
            "y": 294,
            "size": 46,
            "at": "l4:name"
          },
          {
            "id": "b-h3",
            "t": "text",
            "text": "④ Giọng văn bình tĩnh",
            "x": 2888,
            "y": 366,
            "size": 46,
            "at": "l5:calm"
          },
          {
            "id": "b-h4",
            "t": "text",
            "text": "⑤ Một phút đọc lại",
            "x": 2888,
            "y": 438,
            "size": 46,
            "at": "l5:minute"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần email · 7 chặng",
            "x": 2028,
            "y": 560,
            "size": 52,
            "at": "l6:week",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l6:seven"
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
          "say": "So how do you write an email people understand at once?",
          "sub": "Vậy viết email thế nào để đọc một lần là hiểu?",
          "keys": [
            "đọc một lần là hiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not fancy words, not long sentences. Five small habits.",
          "sub": "Không cần văn hay, câu dài. Chỉ năm thói quen nhỏ.",
          "keys": [
            "năm thói quen nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A subject that says the job. The purpose in the first line.",
          "sub": "Tiêu đề nói đúng việc. Câu đầu nêu mục đích."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every request with a name and a deadline.",
          "sub": "Mỗi việc nhờ có tên người và thời hạn.",
          "keys": [
            "tên người và thời hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A calm tone. And one minute to check before you send.",
          "sub": "Giọng văn bình tĩnh. Và một phút đọc lại trước khi gửi.",
          "keys": [
            "một phút đọc lại"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One week of emails, seven stops. Inbox open!",
          "sub": "Một tuần email, bảy chặng. Mở hộp thư nào!"
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
            "text": "① Thứ Hai 10:00 · Một việc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "worried",
                  "pose": "phone"
                }
              ],
              "props": [
                "e-mail"
              ]
            },
            "at": "l1:replies",
            "caption": "Thứ Hai · 10:00",
            "icon": "e-mail"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Đọc xong, họ cần làm gì?",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l3:after reading",
            "color": "accent",
            "hl": [
              {
                "text": "cần làm gì",
                "at": "l3:must"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "duyệt · gửi số · xác nhận · biết",
            "x": 3996,
            "y": 250,
            "size": 44,
            "at": "l3:approve",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Monday, ten a.m. The supplier replies, fast.",
          "sub": "Chặng một: mười giờ sáng thứ Hai. Nhà cung cấp trả lời rất nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Only the price? What about delivery and packing?",
          "sub": "Chỉ trả lời giá thôi à? Còn ngày giao, đóng gói thì sao?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before typing, ask: after reading, what must they do? Approve, send data, confirm, or just know?",
          "sub": "Trước khi gõ, tự hỏi: đọc xong họ cần làm gì? Duyệt, gửi số liệu, xác nhận, hay chỉ cần biết?",
          "keys": [
            "cần làm gì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Can't say it in one sentence? You're not ready to write.",
          "sub": "Chưa nói được trong một câu thì chưa sẵn sàng viết."
        }
      ],
      "ref": "p1,p3"
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
            "id": "c-a",
            "t": "text",
            "text": "A: gộp một thư → chìm 2 ý",
            "x": 3996,
            "y": 340,
            "size": 46,
            "at": "l1:three",
            "color": "coral"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "B: tách thư, hoặc đánh số 1-2-3",
            "x": 3996,
            "y": 420,
            "size": 46,
            "at": "l2:split",
            "color": "accent"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "“nhờ anh trả lời cả ba ý”",
            "x": 4016,
            "y": 495,
            "size": 44,
            "at": "l2:all three",
            "color": "muted"
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Một email, một việc chính",
            "x": 3996,
            "y": 600,
            "size": 58,
            "at": "l3:one main",
            "color": "accent",
            "hl": [
              {
                "text": "một việc chính",
                "at": "l3:one main job"
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
          "say": "Three jobs in one email? People answer the easiest, forget the rest, and you can't find it later.",
          "sub": "Gộp ba việc một thư: người nhận trả lời việc dễ nhất, quên hai việc kia, bạn cũng khó tìm lại thư.",
          "keys": [
            "trả lời việc dễ nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split them, or number them and write: please answer all three. One extra minute.",
          "sub": "Tách thư, hoặc đánh số và ghi: “Nhờ anh trả lời cả ba ý.” Thêm một phút thôi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One email, one main job.",
          "sub": "Một email, một việc chính.",
          "keys": [
            "Một email, một việc chính"
          ]
        }
      ],
      "ref": "p2,p3,p4"
    },
    {
      "id": "s05",
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
            "text": "② Thứ Hai 14:00 · Tiêu đề",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "incoming-envelope"
              ]
            },
            "at": "l1:colleague",
            "caption": "Thứ Hai · 14:00",
            "icon": "incoming-envelope"
          },
          {
            "id": "d-bg",
            "t": "text",
            "text": "Tiêu đề: “Báo giá”",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:quote",
            "color": "coral"
          },
          {
            "id": "d-bc",
            "t": "text",
            "text": "Tiêu đề: “Báo cáo”",
            "x": 5964,
            "y": 250,
            "size": 54,
            "at": "l3:report",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: Monday afternoon. And this is Dũng, Thảo's colleague, a fast typist.",
          "sub": "Chặng hai: chiều thứ Hai. Còn đây là Dũng, đồng nghiệp của Thảo, gõ phím siêu tốc.",
          "keys": [
            "gõ phím siêu tốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Subject: Quote. Done!",
          "sub": "Tiêu đề: “Báo giá”. Xong!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quote for what? Urgent or not? Just Report says even less.",
          "sub": "Báo giá gì? Gấp hay không? Chỉ ghi “Báo cáo” thì còn chẳng nói gì.",
          "keys": [
            "chẳng nói gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Tiêu đề email",
        "wrong": "Báo giá",
        "right": "Báo giá lô hàng tháng 11, cần anh duyệt trước thứ Sáu",
        "wrongIllus": "envelope",
        "rightIllus": "incoming-envelope"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Just: Quote?",
          "sub": "Chỉ ghi: “Báo giá”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "November order quote, please approve before Friday.",
          "sub": "“Báo giá lô hàng tháng 11, cần anh duyệt trước thứ Sáu.”",
          "keys": [
            "duyệt trước thứ Sáu"
          ]
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "d-good",
            "t": "text",
            "text": "Tiêu đề: chủ đề + việc + hạn",
            "x": 5964,
            "y": 340,
            "size": 48,
            "at": "l1:topic",
            "color": "accent",
            "hl": [
              {
                "text": "việc + hạn",
                "at": "l1:deadline"
              }
            ]
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "Sang chuyện khác → thư mới",
            "x": 5964,
            "y": 420,
            "size": 48,
            "at": "l2:new topic"
          },
          {
            "id": "d-hi",
            "t": "text",
            "text": "Kính gửi · Chào anh Lực",
            "x": 5964,
            "y": 500,
            "size": 48,
            "at": "l3:dear"
          },
          {
            "id": "d-p1",
            "t": "text",
            "text": "Câu đầu: mục đích",
            "x": 5964,
            "y": 580,
            "size": 52,
            "at": "l4:purpose",
            "color": "accent",
            "hl": [
              {
                "text": "mục đích",
                "at": "l4:purpose"
              }
            ]
          },
          {
            "id": "d-new2",
            "t": "text",
            "text": "Người lạ: bạn là ai, vì sao",
            "x": 6784,
            "y": 685,
            "size": 44,
            "at": "l5:new",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A good subject gives the topic, plus the action or deadline. The reader sees how urgent it is.",
          "sub": "Tiêu đề tốt nêu chủ đề, kèm việc cần làm hoặc thời hạn. Người nhận biết ngay gấp đến đâu.",
          "keys": [
            "chủ đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thread moved to a new topic? New email, new subject. Or decisions get buried.",
          "sub": "Chuỗi thư đã sang chuyện khác? Mở thư mới, tiêu đề mới, kẻo quyết định bị chôn sâu.",
          "keys": [
            "thư mới, tiêu đề mới"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Greeting: dear sir or madam for clients and bosses at first. Hi Lực for colleagues you know.",
          "sub": "Lời chào: “Kính gửi anh/chị” với khách, cấp trên lần đầu; “Chào anh Lực” với đồng nghiệp quen."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the purpose in one line: I'm writing to ask your view on the new client discount.",
          "sub": "Rồi nêu mục đích một câu: “Em viết để xin ý kiến chị về mức chiết khấu cho khách hàng mới.”",
          "keys": [
            "mục đích một câu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Writing to someone new? Add who you are, your team, and why you're writing.",
          "sub": "Viết cho người chưa quen: thêm bạn là ai, bộ phận nào, vì sao liên hệ."
        }
      ],
      "ref": "p5,p6,p7,p8,p9"
    },
    {
      "id": "s08",
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
          },
          {
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba 9:00 · Thân thư",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:tuesday",
            "caption": "Thứ Ba · 9:00 · đọc trên điện thoại",
            "icon": "mobile-phone"
          },
          {
            "id": "e-scr",
            "t": "text",
            "text": "Cuộn… cuộn… vẫn chưa hết",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:scrolling",
            "color": "coral"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Mỗi đoạn một ý, câu ngắn",
            "x": 7932,
            "y": 255,
            "size": 48,
            "at": "l3:one idea"
          },
          {
            "id": "e-nb",
            "t": "text",
            "text": "Nhiều thông tin → đánh số",
            "x": 7932,
            "y": 330,
            "size": 48,
            "at": "l3:number"
          },
          {
            "id": "e-sc",
            "t": "text",
            "text": "Vừa 1 màn hình điện thoại",
            "x": 7932,
            "y": 405,
            "size": 48,
            "at": "l4:phone screen",
            "color": "accent",
            "hl": [
              {
                "text": "1 màn hình",
                "at": "l4:phone screen"
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
          "say": "Stop three: Tuesday morning. Dũng reads Thảo's report email on his phone.",
          "sub": "Chặng ba: sáng thứ Ba. Dũng đọc email báo cáo của Thảo trên điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Still scrolling... still scrolling... where's the point?",
          "sub": "Cuộn… cuộn mãi… ý chính đâu rồi?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One idea per paragraph, short sentences. Lots of points? Number them.",
          "sub": "Mỗi đoạn một ý, câu ngắn. Nhiều thông tin thì đánh số.",
          "keys": [
            "Mỗi đoạn một ý"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One phone screen is about right. Details go in the attachment.",
          "sub": "Đọc hết trong một màn hình điện thoại là vừa. Chi tiết để tệp đính kèm.",
          "keys": [
            "một màn hình điện thoại"
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
          }
        ],
        "items": [
          {
            "id": "e-bold",
            "t": "text",
            "text": "In đậm: chỉ 1–2 chỗ",
            "x": 7932,
            "y": 485,
            "size": 48,
            "at": "l1:bold",
            "hl": [
              {
                "text": "1–2 chỗ",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "e-att",
            "t": "text",
            "text": "Nhắc tệp ngay trong thư",
            "x": 7932,
            "y": 560,
            "size": 42,
            "at": "l2:attached"
          },
          {
            "id": "e-fn",
            "t": "text",
            "text": "“final mới nhất”",
            "x": 7932,
            "y": 635,
            "size": 52,
            "at": "l3:final",
            "color": "muted"
          },
          {
            "id": "e-fnx",
            "t": "strike",
            "over": "e-fn",
            "at": "l3:newest"
          },
          {
            "id": "e-fn2",
            "t": "text",
            "text": "→ tên theo nội dung + ngày",
            "x": 8752,
            "y": 685,
            "size": 44,
            "at": "l3:content",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Bold one or two things, like the deadline. Bold everywhere, and nothing stands out.",
          "sub": "In đậm một hai chỗ như thời hạn. In đậm khắp nơi thì chẳng chỗ nào nổi bật.",
          "keys": [
            "một hai chỗ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Mention the file in the email: I've attached the price quote as a PDF.",
          "sub": "Nhắc tệp trong thư: “Em gửi kèm bảng báo giá dạng PDF.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And name it by content and date, not final, newest, really final.",
          "sub": "Và đặt tên theo nội dung, ngày tháng, đừng “final mới nhất, final thật”.",
          "keys": [
            "nội dung, ngày tháng"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s10",
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Ba 15:00 · Nhờ việc",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "busts-in-silhouette"
              ]
            },
            "at": "l1:five",
            "caption": "Thứ Ba · 15:00",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "f-old",
            "t": "text",
            "text": "“Mọi người xem giúp em nhé”",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:everyone",
            "color": "muted"
          },
          {
            "id": "f-0",
            "t": "text",
            "text": "3 ngày · 0 trả lời",
            "x": 60,
            "y": 1340,
            "size": 56,
            "at": "l3:three days",
            "color": "coral",
            "hl": [
              {
                "text": "0 trả lời",
                "at": "l3:zero"
              }
            ]
          },
          {
            "id": "f-oldx",
            "t": "strike",
            "over": "f-old",
            "at": "l4:duyên"
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "Duyên: số liệu · Khôi: hợp đồng",
            "x": 60,
            "y": 1435,
            "size": 40,
            "at": "l4:duyên",
            "color": "accent"
          },
          {
            "id": "f-wed",
            "t": "text",
            "text": "Hạn: thứ Tư",
            "x": 60,
            "y": 1510,
            "size": 52,
            "at": "l4:wednesday",
            "color": "accent",
            "hl": [
              {
                "text": "thứ Tư",
                "at": "l4:wednesday"
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
          "say": "Stop four: Tuesday afternoon. Dũng needs five people to check his event plan.",
          "sub": "Chặng bốn: chiều thứ Ba. Dũng cần năm người góp ý kế hoạch sự kiện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Last time I wrote: everyone, please take a look...",
          "sub": "Lần trước mình viết: “Mọi người xem giúp em nhé”...",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three days, zero replies. Everyone thought someone else had answered.",
          "sub": "Ba ngày, không ai trả lời. Ai cũng tưởng người khác góp ý rồi.",
          "keys": [
            "Ai cũng tưởng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "This time: Duyên, the numbers. Khôi, the contract. By Wednesday, please.",
          "sub": "Lần này: chị Duyên kiểm tra số liệu, anh Khôi chuẩn bị hợp đồng. Hạn thứ Tư ạ.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That afternoon, every reply arrived.",
          "sub": "Chiều hôm đó, Dũng nhận đủ góp ý.",
          "keys": [
            "nhận đủ góp ý"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s11",
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
            "id": "f-who",
            "t": "text",
            "text": "Ai làm gì, trước khi nào",
            "x": 60,
            "y": 1595,
            "size": 50,
            "at": "l1:who does what",
            "hl": [
              {
                "text": "trước khi nào",
                "at": "l1:by when"
              }
            ]
          },
          {
            "id": "f-15",
            "t": "text",
            "text": "“…trước 15 giờ thứ Năm nhé”",
            "x": 60,
            "y": 1670,
            "size": 40,
            "at": "l1:thursday",
            "color": "muted"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Thiếu hạn → xếp cuối hàng",
            "x": 880,
            "y": 1775,
            "size": 46,
            "at": "l2:waits",
            "color": "coral"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Đúng tên · đúng việc · rõ hạn",
            "x": 60,
            "y": 1740,
            "size": 54,
            "at": "l3:name",
            "color": "accent",
            "hl": [
              {
                "text": "rõ hạn",
                "at": "l3:deadline"
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
          "say": "End with who does what, by when: could you reply before three p.m. Thursday?",
          "sub": "Kết bằng ai làm gì, trước khi nào: “Anh phản hồi trước 15 giờ thứ Năm nhé.”",
          "keys": [
            "ai làm gì, trước khi nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No deadline? Your job waits behind every job that has one.",
          "sub": "Thiếu thời hạn, việc của bạn xếp sau mọi việc có hạn khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right name, right task, clear deadline.",
          "sub": "Gọi đúng tên, giao đúng việc, ghi rõ hạn.",
          "keys": [
            "Gọi đúng tên",
            "ghi rõ hạn"
          ]
        }
      ],
      "ref": "p13,p16"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Mười một giờ đêm, ngón tay đã đặt lên nút Gửi…",
        "illus": "angry-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Eleven p.m. An angry finger above the Send button.",
          "sub": "Mười một giờ đêm. Một ngón tay đang bực, đặt trên nút Gửi.",
          "keys": [
            "nút Gửi"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Tư · 23:00 · đang bực",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gửi email lúc đang bực",
          "why": "Chữ hoa, chấm than, câu chê trách: dễ bị chuyển lên sếp kèm lời phàn nàn.",
          "rule": "Bực thì lưu nháp, sáng mai mới gửi"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stop five: Wednesday, eleven p.m. A week of waiting for a partner's documents.",
          "sub": "Chặng năm: mười một giờ đêm thứ Tư. Dũng chờ hồ sơ đối tác cả tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "URGENT! What kind of way is this to work?",
          "sub": "“KHẨN!!! Bên anh làm việc kiểu gì vậy?”",
          "face": "stern",
          "pose": "phone",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Capitals and blame? That gets forwarded to the boss.",
          "sub": "Chữ hoa, chê trách? Thư này dễ bị chuyển lên sếp.",
          "keys": [
            "chuyển lên sếp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Save the draft. Sleep on it.",
          "sub": "Tua lại! Lưu nháp. Ngủ một giấc đã.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Morning: Hi Bảo, the profile due last Monday hasn't come. I need it by five Thursday.",
          "sub": "Sáng: “Chào anh Bảo, em chưa nhận hồ sơ hẹn từ thứ Hai trước. Em cần trước 17 giờ thứ Năm.”",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p20"
    },
    {
      "id": "s14",
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
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư 23:00 · Đang bực",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:night"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "sunrise",
                "floppy-disk"
              ]
            },
            "at": "l1:night",
            "caption": "Sáng thứ Năm · bản viết lại",
            "icon": "floppy-disk"
          },
          {
            "id": "g-caps",
            "t": "text",
            "text": "VIẾT HOA · !!! · biểu tượng",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l2:capitals",
            "color": "coral"
          },
          {
            "id": "g-capsx",
            "t": "strike",
            "over": "g-caps",
            "at": "l2:serious"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Hồ sơ gì · chờ bao lâu · hạn",
            "x": 2028,
            "y": 1345,
            "size": 44,
            "at": "l3:which file",
            "color": "accent"
          },
          {
            "id": "g-ask",
            "t": "text",
            "text": "Hỏi thay vì ra lệnh",
            "x": 2028,
            "y": 1435,
            "size": 52,
            "at": "l4:ask",
            "hl": [
              {
                "text": "Hỏi",
                "at": "l4:ask"
              }
            ]
          },
          {
            "id": "g-ask2",
            "t": "text",
            "text": "“Chị gửi giúp em… được không ạ?”",
            "x": 2028,
            "y": 1515,
            "size": 44,
            "at": "l4:could you",
            "color": "muted"
          },
          {
            "id": "g-thx",
            "t": "text",
            "text": "Cảm ơn cụ thể, rõ vì sao",
            "x": 2028,
            "y": 1595,
            "size": 44,
            "at": "l5:thank",
            "color": "accent"
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Bực thì lưu nháp, mai mới gửi",
            "x": 2028,
            "y": 1690,
            "size": 52,
            "at": "l6:angry",
            "color": "accent",
            "hl": [
              {
                "text": "lưu nháp",
                "at": "l6:draft"
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
          "say": "Same email, after a night's sleep. The anger is gone, the facts stay.",
          "sub": "Cùng một email, sau một đêm ngủ. Cơn giận đi, sự việc ở lại.",
          "keys": [
            "sự việc ở lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Avoid capitals, rows of exclamation marks, and emojis. Readers think you're angry, or not serious.",
          "sub": "Tránh viết hoa cả câu, chấm than, biểu tượng cảm xúc: người đọc nghĩ bạn đang bực, hoặc thiếu nghiêm túc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Which file, how long you've waited, when you need it.",
          "sub": "Hồ sơ gì, chờ từ bao giờ, cần trước khi nào.",
          "keys": [
            "cần trước khi nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Polite means how you ask: could you send the figures before Thursday?",
          "sub": "Lịch sự nằm ở cách nhờ: “Chị gửi giúp em số liệu trước thứ Năm được không ạ?”",
          "keys": [
            "cách nhờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And thank them specifically: thanks for sending early, I finished my report in time.",
          "sub": "Và cảm ơn cụ thể: “Cảm ơn anh gửi sớm, nhờ vậy em kịp làm báo cáo.”"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Angry? Save a draft. Send it tomorrow.",
          "sub": "Bực thì lưu nháp, sáng mai mới gửi.",
          "keys": [
            "lưu nháp"
          ]
        }
      ],
      "ref": "p17,p18,p19,p20,p21"
    },
    {
      "id": "s15",
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
            "text": "⑥ Thứ Năm 9:00 · To, CC",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "busts-in-silhouette"
              ]
            },
            "at": "l1:thursday",
            "caption": "Thứ Năm · 9:00",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "h-to",
            "t": "text",
            "text": "To: người cần làm",
            "x": 3996,
            "y": 1260,
            "size": 54,
            "at": "l3:act",
            "color": "accent",
            "hl": [
              {
                "text": "cần làm",
                "at": "l3:act"
              }
            ]
          },
          {
            "id": "h-cc",
            "t": "text",
            "text": "CC: người chỉ cần biết",
            "x": 3996,
            "y": 1345,
            "size": 54,
            "at": "l3:know"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: Thursday morning. A thread with twenty people.",
          "sub": "Chặng sáu: sáng thứ Năm. Một chuỗi thư hai mươi người."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Reply all: got it, thanks!",
          "sub": "Trả lời tất cả: “Em nhận được rồi ạ!”",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "People who must act go in To. People who only need to know go in CC.",
          "sub": "Người cần hành động ở ô To. Người chỉ cần biết ở ô CC.",
          "keys": [
            "ô To",
            "ô CC"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 20,
        "suffix": " lần",
        "label": "làm phiền, chỉ vì một câu “em nhận được rồi ạ”",
        "illus": "bell"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Got it, thanks, to twenty people.",
          "sub": "“Em nhận được rồi ạ” gửi hai mươi người."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That's twenty interruptions.",
          "sub": "Là hai mươi lần làm phiền.",
          "keys": [
            "hai mươi lần làm phiền"
          ]
        }
      ],
      "ref": "p23"
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
          }
        ],
        "items": [
          {
            "id": "h-ra",
            "t": "text",
            "text": "Trả lời tất cả: khi cần thật",
            "x": 3996,
            "y": 1435,
            "size": 46,
            "at": "l1:reply all"
          },
          {
            "id": "h-fw",
            "t": "text",
            "text": "Chuyển tiếp ra ngoài? Đọc hết chuỗi",
            "x": 3996,
            "y": 1515,
            "size": 44,
            "at": "l2:forwarding",
            "color": "coral",
            "hl": [
              {
                "text": "Đọc hết chuỗi",
                "at": "l2:read"
              }
            ]
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "giá vốn · nhận xét về khách",
            "x": 3996,
            "y": 1590,
            "size": 44,
            "at": "l2:costs",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Reply all only when everyone really needs your answer.",
          "sub": "Chỉ “trả lời tất cả” khi mọi người thật sự cần đọc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Forwarding a thread outside? Read all of it first. Old costs or notes about the client may hide below.",
          "sub": "Chuyển tiếp chuỗi thư cho người ngoài? Đọc hết đã: giá vốn, nhận xét về khách có thể còn nằm dưới.",
          "keys": [
            "Đọc hết đã"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s18",
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
            "text": "⑦ Thứ Năm 16:00 · Một phút",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "paperclip"
              ]
            },
            "at": "l1:quote",
            "caption": "Thứ Năm · 16:00 · gửi báo giá cho khách",
            "icon": "paperclip"
          },
          {
            "id": "i-hang",
            "t": "text",
            "text": "Tệp tên gần giống bản cuối",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l2:name close",
            "color": "coral"
          },
          {
            "id": "i-in",
            "t": "text",
            "text": "= bản nội bộ, còn cột lợi nhuận",
            "x": 5964,
            "y": 1335,
            "size": 46,
            "at": "l2:profit",
            "color": "coral",
            "hl": [
              {
                "text": "cột lợi nhuận",
                "at": "l2:profit"
              }
            ]
          },
          {
            "id": "i-ep",
            "t": "text",
            "text": "→ lần sau khách ép giá",
            "x": 5964,
            "y": 1410,
            "size": 46,
            "at": "l3:pushed",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: Thursday, four p.m. Thảo is sending a price quote to a client.",
          "sub": "Chặng bảy: bốn giờ chiều thứ Năm. Thảo sắp gửi báo giá cho khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last month, a colleague attached a file with a name close to the final. It was internal, profit column and all.",
          "sub": "Tháng trước, một đồng nghiệp gắn tệp tên gần giống bản cuối. Đó là bản nội bộ, còn nguyên cột lợi nhuận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The client read it, and pushed the price hard next time.",
          "sub": "Khách đọc được, lần đàm phán sau ép giá rất gắt.",
          "keys": [
            "ép giá rất gắt"
          ]
        }
      ],
      "ref": "p26"
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
          }
        ],
        "items": [
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l1:subject",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1484,
            "size": 56,
            "at": "l1:subject+500",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Tiêu đề rõ việc?",
            "x": 6034,
            "y": 1492,
            "size": 40,
            "at": "l1:subject+150"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1562,
            "w": 44,
            "h": 44,
            "at": "l1:purpose",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1546,
            "size": 56,
            "at": "l1:purpose+500",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Câu đầu: mục đích?",
            "x": 6034,
            "y": 1554,
            "size": 40,
            "at": "l1:purpose+150"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1624,
            "w": 44,
            "h": 44,
            "at": "l1:request",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1608,
            "size": 56,
            "at": "l1:request+500",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Đề nghị: tên, hạn?",
            "x": 6034,
            "y": 1616,
            "size": 40,
            "at": "l1:request+150"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 6374,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l2:names",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 6378,
            "y": 1484,
            "size": 56,
            "at": "l2:names+500",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tên, số, ngày đúng?",
            "x": 6444,
            "y": 1492,
            "size": 40,
            "at": "l2:names+150"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 6374,
            "y": 1562,
            "w": 44,
            "h": 44,
            "at": "l2:attachment",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 6378,
            "y": 1546,
            "size": 56,
            "at": "l2:attachment+500",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Tệp đúng bản?",
            "x": 6444,
            "y": 1554,
            "size": 40,
            "at": "l2:attachment+150"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 6374,
            "y": 1624,
            "w": 44,
            "h": 44,
            "at": "l2:cc",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 6378,
            "y": 1608,
            "size": 56,
            "at": "l2:cc+500",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "To, CC đúng người?",
            "x": 6444,
            "y": 1616,
            "size": 40,
            "at": "l2:cc+150"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Mở lại tệp, đừng tin cái tên",
            "x": 5964,
            "y": 1700,
            "size": 54,
            "at": "l3:open",
            "color": "accent",
            "hl": [
              {
                "text": "đừng tin cái tên",
                "at": "l3:trust"
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
          "say": "One minute before Send: subject clear? Purpose first? A request with a name and deadline?",
          "sub": "Một phút trước khi gửi: tiêu đề rõ việc? Câu đầu nêu mục đích? Đề nghị có tên, có hạn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Names, numbers, dates right? The right attachment? The right people in To and CC?",
          "sub": "Tên, số, ngày đúng chưa? Tệp đúng bản chưa? Ô To, CC đúng người chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Open the attachment again. Never trust the file name.",
          "sub": "Mở lại tệp đính kèm. Đừng tin cái tên.",
          "face": "happy",
          "keys": [
            "Đừng tin cái tên"
          ]
        }
      ],
      "ref": "p25,p27"
    },
    {
      "id": "s20",
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
            "at": "l2",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Sáu 9:00 · Nhắc khéo",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope-with-arrow"
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · 9:00 · trả lời trên thư cũ",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "Trả lời ngay trên thư cũ",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l1:old",
            "hl": [
              {
                "text": "thư cũ",
                "at": "l1:old"
              }
            ]
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Đủ cả 3 câu trả lời ✓",
            "x": 7932,
            "y": 1345,
            "size": 52,
            "at": "l3:all three",
            "color": "accent",
            "hl": [
              {
                "text": "Đủ cả 3",
                "at": "l3:all three"
              }
            ]
          },
          {
            "id": "j-rec",
            "t": "text",
            "text": "Chưa đủ? Báo đã nhận, hẹn giờ",
            "x": 7932,
            "y": 1435,
            "size": 42,
            "at": "l4:received"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday morning. Still no delivery date. Thảo replies on the old email, so the context stays.",
          "sub": "Sáng thứ Sáu. Vẫn chưa có ngày giao. Thảo trả lời ngay trên thư cũ cho đủ bối cảnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Resending below in case you missed it. I need your reply by Friday to place the order.",
          "sub": "“Em gửi lại thư bên dưới phòng khi anh chưa kịp xem. Em cần phản hồi trước thứ Sáu để kịp đặt hàng ạ.”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Good faith, a reason, a deadline. By noon: all three answers.",
          "sub": "Giả định thiện ý, có lý do, có hạn. Trước trưa: đủ cả ba câu trả lời.",
          "keys": [
            "đủ cả ba câu trả lời"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Can't answer fully yourself? Confirm: received, I'll get back before tomorrow afternoon.",
          "sub": "Chính mình chưa trả lời đủ? Báo: “Em đã nhận, em gửi lại anh trước chiều mai.”"
        }
      ],
      "ref": "p28,p29"
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
            "at": "l4",
            "fit": [
              "j-sv"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-e1",
            "t": "text",
            "text": "I am writing to ask about…",
            "x": 7932,
            "y": 1520,
            "size": 44,
            "at": "l1:writing",
            "color": "accent",
            "hl": [
              {
                "text": "I am writing",
                "at": "l1:writing"
              }
            ]
          },
          {
            "id": "j-e2",
            "t": "text",
            "text": "Please find the report attached.",
            "x": 7932,
            "y": 1590,
            "size": 44,
            "at": "l2:attached"
          },
          {
            "id": "j-e3",
            "t": "text",
            "text": "Could you please reply by Friday?",
            "x": 7932,
            "y": 1660,
            "size": 44,
            "at": "l3:reply",
            "hl": [
              {
                "text": "by Friday",
                "at": "l3:friday"
              }
            ]
          },
          {
            "id": "j-sv",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "e-mail"
              ]
            },
            "at": "l1:abroad",
            "caption": "Sam · đối tác nước ngoài",
            "icon": "e-mail"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Bút sa” rồi… gà vẫn khoẻ",
            "x": 7932,
            "y": 1750,
            "size": 52,
            "at": "l5:pen",
            "color": "accent",
            "hl": [
              {
                "text": "gà vẫn khoẻ",
                "at": "l5:chicken"
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
          "say": "And this is Sam, a partner abroad. Same rules in English: I am writing to ask about the new price list.",
          "sub": "Còn đây là Sam, đối tác nước ngoài. Viết tiếng Anh, luật vẫn thế: “I am writing to ask about the new price list.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Please find the report attached.",
          "sub": "Báo cáo được gửi kèm theo thư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Could you please reply by Friday?",
          "sub": "Anh vui lòng trả lời trước thứ Sáu nhé?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Clear and short. I'll reply by Friday.",
          "sub": "Rõ ràng, ngắn gọn. Tôi sẽ trả lời trước thứ Sáu.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "When the pen drops, the chicken dies. This week, Thảo's pen dropped carefully. The chicken is fine.",
          "sub": "“Bút sa gà chết.” Tuần này bút của Thảo sa cẩn thận. Gà vẫn khoẻ.",
          "keys": [
            "Gà vẫn khoẻ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p30"
    },
    {
      "id": "s22",
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
            "at": "l1:one job",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:name",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:draft",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4:attachment",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 600,
            "at": "l1:one job"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1740,
            "at": "l2:name"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2748,
            "y": 1690,
            "at": "l3:draft"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6694,
            "y": 1700,
            "at": "l4:attachment"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "f-key"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:deadline"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four stories, one small skipped step. One email, one job.",
          "sub": "Bốn câu chuyện, cùng một bước nhỏ bị bỏ qua. Một email, một việc chính.",
          "keys": [
            "Một email, một việc chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Right name, right task, clear deadline.",
          "sub": "Gọi đúng tên, giao đúng việc, ghi rõ hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Angry? Save a draft.",
          "sub": "Bực thì lưu nháp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And open the attachment again.",
          "sub": "Và mở lại tệp đính kèm.",
          "keys": [
            "mở lại tệp đính kèm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p4,p16,p21,p27"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "ref": "questions[5]",
      "data": {
        "q": "Which subject line works best for a price quote that needs approval?",
        "options": [
          "Price quote for the November order, please approve before Friday",
          "Hello, here is something from me, please check it when you can",
          "Quote, just a quick question for you when you have some free time"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "incoming-envelope",
        "why": "Tiêu đề tốt nêu chủ đề, việc cần làm và thời hạn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which subject line works best for a price quote that needs approval?",
          "sub": "Tiêu đề nào phù hợp nhất cho một báo giá cần được duyệt?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Price quote for the November order, please approve before Friday.",
          "sub": "Báo giá lô hàng tháng mười một, cần anh duyệt trước thứ Sáu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "It says the topic, the action and the deadline.",
          "sub": "Có chủ đề, việc cần làm và thời hạn."
        }
      ]
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: một phút đọc lại",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Save the one-minute checklist, and use it on the next email you send today.",
          "sub": "Lưu danh sách một phút, dùng cho email tiếp theo bạn gửi hôm nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
