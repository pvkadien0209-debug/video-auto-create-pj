// Kịch bản video W lần 3 (#110) — "Thiên kiến xác nhận là gì và cách tránh khi ra quyết định" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "confirmation-bias--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "everyday-information-readers",
    "slug": "confirmation-bias",
    "door": "ky-nang",
    "level": "B1",
    "title": "Thiên kiến xác nhận là gì và cách tránh khi ra quyết định",
    "series": "Tư duy phản biện"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#143 dựng lại theo hạt nhân #136: Đét đứng trái + một bảng trắng 10 ô (5 × 2) theo ba ngày của cô Hoa (Tối thứ Sáu → Tối Chủ nhật): lướt video đất ven đô, dần tin “ai cũng mua”, rồi tự kiểm lại. Đổi tên: chị Bích → cô Hoa, anh trai → bác Bình; chuyện xe buýt của anh Sơn (p7) thành chuyện bác Bình tự kể; tình huống quán cà phê (p14) giữ là câu đố Đét hỏi người xem. Mở bằng neo “3 ngày” (thời gian trong truyện, không phải số liệu) + câu “Thấy người ta ăn khoai cũng vác mai đi đào”; khép vòng tối thứ Sáu tuần sau. Toàn màn: “Khoan đã!” (s11), câu đố (s27), kết (s29). Bản trước: w143/bak/confirmation-bias--w01.js.",
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
            "text": "3 ngày",
            "x": 60,
            "y": 140,
            "size": 200,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 ngày",
                "at": "l1:three+500"
              }
            ]
          },
          {
            "id": "a-3b",
            "t": "text",
            "text": "“nghe nói” → “tin chắc”",
            "x": 70,
            "y": 390,
            "size": 56,
            "at": "l1:heard"
          },
          {
            "id": "a-up",
            "t": "text",
            "text": "Cảm giác chắc chắn: ↑↑↑",
            "x": 70,
            "y": 470,
            "size": 50,
            "at": "l2:new"
          },
          {
            "id": "a-ev",
            "t": "text",
            "text": "Bằng chứng mới: gần như không",
            "x": 70,
            "y": 535,
            "size": 50,
            "at": "l2:hardly",
            "color": "muted",
            "hl": [
              {
                "text": "gần như không",
                "at": "l2:hardly"
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
          "say": "Three days. That is all it takes for “I heard” to become “I'm sure”.",
          "sub": "Ba ngày. Chỉ ba ngày là “nghe nói” thành “tin chắc”.",
          "keys": [
            "Ba ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Any new evidence in those three days? Hardly any.",
          "sub": "Ba ngày ấy có thêm bằng chứng nào không? Gần như không.",
          "keys": [
            "Gần như không"
          ]
        }
      ],
      "ref": "intro,p1"
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
              "a-hoa"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-hoa",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu",
            "icon": "mobile-phone"
          },
          {
            "id": "a-all",
            "t": "text",
            "text": "“Ai cũng đang mua?”",
            "x": 920,
            "y": 650,
            "size": 54,
            "at": "l4:everyone",
            "color": "coral",
            "hl": [
              {
                "text": "Ai cũng",
                "at": "l4:everyone"
              }
            ]
          },
          {
            "id": "a-kh1",
            "t": "text",
            "text": "“Thấy người ta ăn khoai",
            "x": 60,
            "y": 610,
            "size": 50,
            "at": "l5:sweet",
            "color": "accent"
          },
          {
            "id": "a-kh2",
            "t": "text",
            "text": "cũng vác mai đi đào”",
            "x": 100,
            "y": 680,
            "size": 50,
            "at": "l5:hoe",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Hoa.",
          "sub": "Đây là cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She runs a small eatery and scrolls every night like a guard on duty.",
          "sub": "Chủ một quán cơm nhỏ, tối nào cũng lướt điện thoại chăm như bảo vệ trực đêm.",
          "keys": [
            "lướt điện thoại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Another video about land near the city. Prices about to rise?",
          "sub": "Lại video đất ven đô. Sắp lên giá à?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "One video, two, three... Wow. Everyone seems to be buying there.",
          "sub": "Một video, hai, ba... Chà. Hình như ai cũng đang mua ở đó.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As we say: see others eat sweet potatoes, grab a hoe and dig.",
          "sub": "Đúng như các cụ nói: “Thấy người ta ăn khoai cũng vác mai đi đào.”",
          "keys": [
            "vác mai đi đào"
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
      "ref": "p10"
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
            "text": "Thiên kiến xác nhận là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:confirmation",
            "hl": [
              {
                "text": "xác nhận",
                "at": "l1:bias"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Tìm, nhớ, tin điều hợp ý",
            "x": 2028,
            "y": 150,
            "size": 56,
            "at": "l2:look",
            "hl": [
              {
                "text": "hợp ý",
                "at": "l2:fits"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Trái ý → lướt qua",
            "x": 2028,
            "y": 230,
            "size": 52,
            "at": "l2:disagrees",
            "color": "coral"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Lối tắt của não",
            "x": 2028,
            "y": 310,
            "size": 52,
            "at": "l3:shortcut",
            "hl": [
              {
                "text": "Lối tắt",
                "at": "l3:shortcut+300"
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
          "say": "What is going on in Hoa's head? It has a name: confirmation bias.",
          "sub": "Trong đầu cô Hoa đang diễn ra chuyện gì? Nó có tên: thiên kiến xác nhận.",
          "keys": [
            "thiên kiến xác nhận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We look for, remember, and believe what fits our view. What disagrees? We scroll past.",
          "sub": "Ta tìm, nhớ và tin những gì hợp với điều mình đã nghĩ. Còn điều trái ý? Lướt qua.",
          "keys": [
            "tìm, nhớ và tin"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A brain shortcut: agreeing news gets in, disagreeing news gets pushed away. Certainty grows, evidence barely does.",
          "sub": "Một lối tắt của não: hợp ý thì nhận ngay, trái ý thì gạt đi. Chắc chắn tăng, bằng chứng chẳng thêm bao nhiêu.",
          "keys": [
            "lối tắt của não"
          ]
        }
      ],
      "ref": "intro,p1"
    },
    {
      "id": "s02b",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "B",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: “mình không bị”",
            "x": 2028,
            "y": 390,
            "size": 52,
            "at": "l1:don't",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:warning"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: ai cũng có, cả mình",
            "x": 2028,
            "y": 470,
            "size": 56,
            "at": "l2:everyone",
            "color": "accent",
            "hl": [
              {
                "text": "cả mình",
                "at": "l2:including"
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
          "say": "Thinking I don't have it is a warning sign. We spot bias in others far more easily.",
          "sub": "Nghĩ “mình không bị” đã là dấu hiệu dễ bị dẫn dắt. Ai cũng dễ thấy thiên kiến ở người khác hơn ở mình.",
          "keys": [
            "“mình không bị”"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Safer: assume everyone has it, including you, and build habits to check.",
          "sub": "An toàn hơn: mặc định ai cũng có, kể cả mình, rồi đặt thói quen tự kiểm tra.",
          "keys": [
            "kể cả mình"
          ]
        }
      ],
      "ref": "p2"
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
          }
        ],
        "items": [
          {
            "id": "b-wk",
            "t": "text",
            "text": "3 ngày, 6 chặng của Hoa",
            "x": 2028,
            "y": 555,
            "size": 48,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 ngày",
                "at": "l1:days"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 625,
            "w": 240,
            "h": 100,
            "at": "l1:stops+0",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 625,
            "w": 240,
            "h": 100,
            "at": "l1:stops+250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 625,
            "w": 240,
            "h": 100,
            "at": "l1:stops+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 625,
            "w": 240,
            "h": 100,
            "at": "l1:stops+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 625,
            "w": 240,
            "h": 100,
            "at": "l1:stops+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 625,
            "w": 240,
            "h": 100,
            "at": "l1:stops+1250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T6 tối",
            "x": 2048,
            "y": 645,
            "size": 46,
            "at": "l1:stops+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T7 sáng",
            "x": 2318,
            "y": 645,
            "size": 46,
            "at": "l1:stops+370"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T7 trưa",
            "x": 2588,
            "y": 645,
            "size": 46,
            "at": "l1:stops+620"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "CN sáng",
            "x": 2858,
            "y": 645,
            "size": 46,
            "at": "l1:stops+870"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "CN chiều",
            "x": 3128,
            "y": 645,
            "size": 46,
            "at": "l1:stops+1120"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN tối",
            "x": 3398,
            "y": 645,
            "size": 46,
            "at": "l1:stops+1370"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Hoa for three days, in six stops, from Friday night to Sunday night.",
          "sub": "Mình theo cô Hoa ba ngày, qua sáu chặng, từ tối thứ Sáu đến tối Chủ nhật.",
          "keys": [
            "ba ngày"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s05",
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối thứ Sáu: tìm kiếm",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:homework",
            "caption": "Tối thứ Sáu · tìm kiếm",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "c-s",
            "t": "text",
            "text": "“vì sao… sắp lên giá”",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l2:why",
            "color": "coral"
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "→ kết quả nào cũng đồng ý",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l3:every"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Từ khoá mang sẵn kết luận",
            "x": 3996,
            "y": 340,
            "size": 56,
            "at": "l4:words",
            "hl": [
              {
                "text": "sẵn kết luận",
                "at": "l4:conclusion"
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
          "say": "Stop one: still Friday night. Hoa does her homework.",
          "sub": "Chặng một: vẫn tối thứ Sáu. Cô Hoa đi tìm hiểu.",
          "keys": [
            "tối thứ Sáu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Let me search: why land near the city will go up.",
          "sub": "Để mình gõ: “vì sao đất ven đô sắp lên giá”.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "See? Every result agrees with me!",
          "sub": "Thấy chưa? Kết quả nào cũng đồng ý với mình!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Of course. We type words with the conclusion built in: the harms of, why it is bad.",
          "sub": "Tất nhiên. Ta hay gõ từ khoá có sẵn kết luận: “tác hại của…”, “vì sao … không tốt”.",
          "keys": [
            "có sẵn kết luận"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The engine serves that exact dish, and we feel well researched.",
          "sub": "Công cụ tìm kiếm dọn đúng món đó, và ta tưởng mình đã tìm hiểu kỹ.",
          "keys": [
            "tưởng mình đã tìm hiểu kỹ"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l5",
            "fit": [
              "c-keep"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-b",
            "t": "text",
            "text": "Trước: “tác hại của sữa tối”",
            "x": 3996,
            "y": 450,
            "size": 46,
            "at": "l2:before",
            "color": "muted"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "→ 10 kết quả đầu: cảnh báo",
            "x": 3996,
            "y": 520,
            "size": 46,
            "at": "l2:ten",
            "hl": [
              {
                "text": "cảnh báo",
                "at": "l2:warn"
              }
            ]
          },
          {
            "id": "c-bx",
            "t": "strike",
            "over": "c-b",
            "at": "l3:after"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "Sau: “… có tốt không?”",
            "x": 3996,
            "y": 590,
            "size": 50,
            "at": "l3:after+300",
            "color": "accent"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "→ đủ ý kiến, tuỳ người",
            "x": 3996,
            "y": 660,
            "size": 46,
            "at": "l3:views",
            "hl": [
              {
                "text": "tuỳ người",
                "at": "l3:depends"
              }
            ]
          },
          {
            "id": "c-keep",
            "t": "text",
            "text": "Gõ câu hỏi, đừng gõ đáp án",
            "x": 4836,
            "y": 690,
            "size": 54,
            "at": "l5:type",
            "color": "accent",
            "hl": [
              {
                "text": "Gõ câu hỏi",
                "at": "l5:question"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Take milk. Before: the harms of milk at night. The top ten results all warn you.",
          "sub": "Lấy ví dụ ly sữa. Trước: gõ “tác hại của uống sữa buổi tối”. Mười kết quả đầu đều cảnh báo.",
          "keys": [
            "Mười kết quả đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After: is milk at night good or not? All views come back; many say it depends.",
          "sub": "Sau: gõ “uống sữa buổi tối có tốt không”. Có đủ ý kiến, nhiều bài nói còn tuỳ người, tuỳ sức khoẻ.",
          "keys": [
            "tuỳ người, tuỳ sức khoẻ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A neutral question doesn't pick the answer, so you get both sides.",
          "sub": "Câu hỏi trung tính không chọn sẵn đáp án, nên ra cả hai phía.",
          "keys": [
            "trung tính"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Type a question. Don't type the answer.",
          "sub": "Gõ câu hỏi, đừng gõ sẵn câu trả lời.",
          "keys": [
            "Gõ câu hỏi"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s07",
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
            "text": "② Sáng thứ Bảy: bảng tin",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                }
              ]
            },
            "at": "l1:phone",
            "caption": "Sáng thứ Bảy · bảng tin",
            "icon": "mobile-phone"
          },
          {
            "id": "d-eye",
            "t": "illus",
            "name": "eyes",
            "x": 5964,
            "y": 170,
            "size": 90,
            "at": "l4:watched"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Xem, thích một video",
            "x": 6074,
            "y": 185,
            "size": 50,
            "at": "l4:watched+200"
          },
          {
            "id": "d-a1",
            "t": "arrow",
            "from": [
              6024,
              270
            ],
            "to": [
              6024,
              320
            ],
            "at": "l4:serve"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Bảng tin đưa thêm giống vậy",
            "x": 5964,
            "y": 330,
            "size": 50,
            "at": "l4:more"
          },
          {
            "id": "d-a2",
            "t": "arrow",
            "from": [
              6024,
              400
            ],
            "to": [
              6024,
              450
            ],
            "at": "l5:everyone"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "“Ai cũng nói vậy”",
            "x": 5964,
            "y": 460,
            "size": 54,
            "at": "l5:everyone+200",
            "color": "coral"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "= một góc nhỏ chọn sẵn",
            "x": 5964,
            "y": 570,
            "size": 56,
            "at": "l5:corner",
            "color": "accent",
            "hl": [
              {
                "text": "góc nhỏ",
                "at": "l5:small corner"
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
          "say": "Stop two: Saturday morning. Hoa opens her phone before her eyes.",
          "sub": "Chặng hai: sáng thứ Bảy. Cô Hoa mở điện thoại trước cả mở mắt.",
          "keys": [
            "sáng thứ Bảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Land, land, more land. The whole internet is talking about it!",
          "sub": "Đất, đất, lại đất. Cả mạng đang nói chuyện này!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not the whole internet. Just her feed.",
          "sub": "Không phải cả mạng. Chỉ là bảng tin của cô.",
          "keys": [
            "bảng tin của cô"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Feeds serve more of what you watched and liked, like a waiter repeating your order.",
          "sub": "Bảng tin đưa thêm thứ bạn đã xem, đã thích, như người phục vụ cứ mang lại món vừa gọi.",
          "keys": [
            "đã xem, đã thích"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Soon everyone seems to agree. But it is a small corner, chosen for you.",
          "sub": "Lâu dần thấy “ai cũng nói vậy”. Nhưng đó chỉ là một góc nhỏ được chọn sẵn cho bạn.",
          "keys": [
            "một góc nhỏ"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l3",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Trưa thứ Bảy: hỏi ai?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ]
            },
            "at": "l1:eatery",
            "caption": "Trưa thứ Bảy · quán cơm",
            "icon": "pot-of-food"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nghe xong: yên tâm",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l5:calm"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Biết thêm: gần như không",
            "x": 7932,
            "y": 250,
            "size": 52,
            "at": "l5:learned",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "= nghe lại ý mình",
            "x": 7932,
            "y": 340,
            "size": 58,
            "at": "l5:own",
            "color": "accent",
            "hl": [
              {
                "text": "ý mình",
                "at": "l5:idea"
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
          "say": "Stop three: Saturday noon, at the eatery.",
          "sub": "Chặng ba: trưa thứ Bảy, ở quán cơm.",
          "keys": [
            "trưa thứ Bảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Lan, who works here. She has never said no to her boss.",
          "sub": "Còn đây là Lan, phục vụ ở quán, chưa từng cãi chủ câu nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Lan, I'm thinking of buying land. Good idea, right?",
          "sub": "Lan ơi, cô định mua đất. Hay đúng không?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Yes! Everyone is buying. Go for it!",
          "sub": "Hay ạ! Ai cũng mua mà cô. Mua đi cô!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Calm, yes. Learned anything? We ask people who agree, and hear our own idea in someone else's mouth.",
          "sub": "Cô Hoa yên tâm, nhưng có biết thêm gì? Ta hay hỏi người sẽ đồng ý, rồi nghe lại ý mình qua miệng người khác.",
          "keys": [
            "ý mình qua miệng người khác"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p13"
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
            "at": "l5",
            "fit": [
              "e-keep"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-f",
            "t": "text",
            "text": "Bạn bè: “Làm đi!”",
            "x": 7932,
            "y": 450,
            "size": 48,
            "at": "l1:friends",
            "color": "muted"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Chị họ từng đóng quán",
            "x": 7932,
            "y": 520,
            "size": 48,
            "at": "l2:cousin"
          },
          {
            "id": "e-y",
            "t": "text",
            "text": "→ Nên hỏi, hỏi thật kỹ",
            "x": 7932,
            "y": 590,
            "size": 50,
            "at": "l3:yes",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi thật kỹ",
                "at": "l3:detail"
              }
            ]
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "mặt bằng, nhân viên, mùa mưa",
            "x": 7932,
            "y": 660,
            "size": 46,
            "at": "l4:rent"
          },
          {
            "id": "e-keep",
            "t": "text",
            "text": "Hỏi cả người nói “khoan đã”",
            "x": 8772,
            "y": 690,
            "size": 54,
            "at": "l5:ask",
            "color": "accent",
            "hl": [
              {
                "text": "“khoan đã”",
                "at": "l5:wait"
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
          "say": "Puzzle: you plan a coffee shop. Friends all say: do it!",
          "sub": "Câu đố: bạn định nghỉ việc mở quán cà phê. Bạn thân đều bảo: “Làm đi!”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your cousin's cafe once closed. You avoid asking her. Should you?",
          "sub": "Chị họ từng mở quán rồi phải đóng cửa. Bạn ngại hỏi vì sợ chuyện buồn. Có nên hỏi không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes, and ask in detail. Cheering only repeats what you want to hear.",
          "sub": "Nên, và hỏi thật kỹ. Lời động viên chỉ lặp lại điều bạn muốn nghe.",
          "keys": [
            "hỏi thật kỹ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She knows the real troubles: rent, staff, empty tables in the rainy season.",
          "sub": "Chị họ biết khó khăn thật: mặt bằng, nhân viên, khách vắng mùa mưa.",
          "keys": [
            "khó khăn thật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask the person who might say: wait a minute.",
          "sub": "Hỏi cả người sẽ nói “khoan đã”.",
          "keys": [
            "“khoan đã”"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tối thứ Bảy, nhà Hoa",
        "actors": [
          {
            "id": "hoa",
            "side": "left"
          },
          {
            "id": "binh",
            "side": "right",
            "enter": "walk",
            "at": "l6"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Định rút hết tiền tiết kiệm",
          "why": "Vài video, một lần tìm và một lời “mua đi” chỉ là tiếng vọng, chưa phải bằng chứng.",
          "rule": "Hỏi cả người sẽ nói “khoan đã”"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Everyone is buying that land. Tomorrow I take out all my savings!",
          "sub": "Ai cũng đang mua khu đất đó. Mai rút hết tiền tiết kiệm thôi!",
          "face": "happy",
          "pose": "thumb",
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
          "say": "That's an echo, not evidence.",
          "sub": "Đó là tiếng vọng, chưa phải bằng chứng.",
          "keys": [
            "tiếng vọng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Enter big brother Bình. Motto: check again.",
          "sub": "Đây là bác Bình, anh trai cô Hoa. Câu cửa miệng: “Từ từ, xem lại đã.”",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "hoa",
          "say": "Brother, I want to buy that land. What do you think?",
          "sub": "Anh Bình, em định mua khu đất ấy. Anh thấy sao?",
          "phase": "redo",
          "face": "thinking"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "binh",
          "say": "Read these risk reports. Ask the planning office first.",
          "sub": "Anh gửi em vài bài phân tích rủi ro. Và đến cơ quan chức năng hỏi quy hoạch đã.",
          "phase": "redo",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p15"
    },
    {
      "id": "s12",
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Sáng Chủ nhật: trí nhớ chọn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ]
            },
            "at": "l1:park",
            "caption": "Sáng Chủ nhật · công viên",
            "icon": "person-walking"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Nhớ: người giàu nhờ đất",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:rich"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Quên: người bị kẹt",
            "x": 60,
            "y": 1340,
            "size": 50,
            "at": "l4:not",
            "color": "muted"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Khớp thì nhớ, lệch thì quên",
            "x": 60,
            "y": 1430,
            "size": 54,
            "at": "l5:picks",
            "color": "accent",
            "hl": [
              {
                "text": "lệch thì quên",
                "at": "l5:forget"
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
          "say": "Stop four: Sunday morning, a walk in the park.",
          "sub": "Chặng bốn: sáng Chủ nhật, hai anh em đi bộ trong công viên.",
          "keys": [
            "sáng Chủ nhật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "I remember so many people who got rich from land.",
          "sub": "Em nhớ bao nhiêu người giàu lên nhờ đất.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And those who got stuck? Remember them?",
          "sub": "Thế còn những người bị kẹt? Em có nhớ ai không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Hmm. Not really.",
          "sub": "Ờ… không nhớ lắm.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Memory picks for us: we remember what fits our belief, and forget what doesn't.",
          "sub": "Trí nhớ chọn giúp ta: nhớ rõ lần khớp với điều mình tin, quên lần không khớp.",
          "keys": [
            "Trí nhớ chọn giúp ta"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Like a colleague: every mistake remembered, the good work forgotten.",
          "sub": "Như nhớ hết lỗi của đồng nghiệp, mà khó nhớ lần họ làm tốt."
        }
      ],
      "ref": "p6"
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-moto",
            "t": "illus",
            "name": "motor-scooter",
            "x": 60,
            "y": 1530,
            "size": 90,
            "at": "l2:motorbike"
          },
          {
            "id": "f-late",
            "t": "text",
            "text": "“Lúc nào cũng trễ!”",
            "x": 170,
            "y": 1545,
            "size": 48,
            "at": "l2:always",
            "color": "coral"
          },
          {
            "id": "f-latex",
            "t": "strike",
            "over": "f-late",
            "at": "l4:only"
          },
          {
            "id": "f-wk",
            "t": "text",
            "text": "Ghi 1 tuần: 1 chuyến trễ",
            "x": 60,
            "y": 1650,
            "size": 50,
            "at": "l4:only+300",
            "hl": [
              {
                "text": "1 chuyến trễ",
                "at": "l4:late"
              }
            ]
          },
          {
            "id": "f-keep",
            "t": "text",
            "text": "Ghi lại trước, tin trí nhớ sau",
            "x": 900,
            "y": 1780,
            "size": 54,
            "at": "l5:write",
            "color": "accent",
            "hl": [
              {
                "text": "Ghi lại trước",
                "at": "l5:write+300"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Once I said this bus is always late! I'll take a motorbike taxi every day.",
          "sub": "Anh cũng từng bảo: “Tuyến này lúc nào cũng trễ! Từ mai đi xe ôm cho kịp.”",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "My wife said: write down the bus times for one week.",
          "sub": "Chị dâu em bảo: ghi lại giờ xe đến trong một tuần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Only one bus was really late. I'd just remembered the tiring waits.",
          "sub": "Chỉ một chuyến trễ đáng kể. Anh chỉ nhớ lâu những buổi chờ mệt, buổi suôn sẻ thì quên.",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "He kept the bus. Write it down first, trust your memory later.",
          "sub": "Bác vẫn đi xe buýt. Ghi lại trước, tin trí nhớ sau.",
          "keys": [
            "Ghi lại trước, tin trí nhớ sau"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s15",
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
            "at": "l2",
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
            "text": "⑤ Chiều Chủ nhật: tự kiểm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "memo"
              ]
            },
            "at": "l1:afternoon",
            "caption": "Chiều Chủ nhật · tự kiểm",
            "icon": "memo"
          },
          {
            "id": "g-0",
            "t": "text",
            "text": "Thử chứng minh mình sai",
            "x": 2028,
            "y": 1260,
            "size": 54,
            "at": "l1:prove",
            "color": "accent",
            "hl": [
              {
                "text": "mình sai",
                "at": "l1:wrong"
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
          "say": "Stop five: Sunday afternoon. Brave Hoa tries to prove herself wrong.",
          "sub": "Chặng năm: chiều Chủ nhật. Cô Hoa can đảm thử chứng minh mình sai.",
          "keys": [
            "chứng minh mình sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "A neutral search: is this land a good buy or not? Then my brother's risk reports.",
          "sub": "Gõ trung tính: “mua đất ven đô có nên không”. Rồi đọc mấy bài rủi ro anh gửi.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And one question: what would change my mind?",
          "sub": "Và một câu hỏi: điều gì sẽ khiến mình đổi ý?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Can't answer that? You may not really be open to evidence.",
          "sub": "Không trả lời được? Có thể bạn chưa thật sự mở lòng với bằng chứng.",
          "keys": [
            "chưa thật sự mở lòng"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s16",
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
            "at": "l7",
            "fit": [
              "g-gold"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l7:end",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-h0",
            "t": "text",
            "text": "1. Lập luận mạnh nhất phía kia",
            "x": 2028,
            "y": 1350,
            "size": 46,
            "at": "l1:one"
          },
          {
            "id": "g-h1",
            "t": "text",
            "text": "2. Điều gì khiến mình đổi ý?",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l2:two"
          },
          {
            "id": "g-h2",
            "t": "text",
            "text": "3. Từ khoá trung tính",
            "x": 2028,
            "y": 1490,
            "size": 46,
            "at": "l2:three"
          },
          {
            "id": "g-h3",
            "t": "text",
            "text": "4. Hỏi người nghĩ khác",
            "x": 2028,
            "y": 1560,
            "size": 46,
            "at": "l3:four"
          },
          {
            "id": "g-h4",
            "t": "text",
            "text": "5. Ghi dự đoán, rồi so",
            "x": 2028,
            "y": 1630,
            "size": 46,
            "at": "l3:five"
          },
          {
            "id": "g-test",
            "t": "text",
            "text": "Tìm để kiểm tra ≠ xác nhận",
            "x": 2028,
            "y": 1720,
            "size": 52,
            "at": "l6:confirm",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm tra",
                "at": "l6:test"
              }
            ]
          },
          {
            "id": "g-gold",
            "t": "text",
            "text": "“Vàng thật không sợ lửa”",
            "x": 2868,
            "y": 1780,
            "size": 54,
            "at": "l7:gold",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five small habits. One: find the other side's strongest argument, not the weakest.",
          "sub": "Năm thói quen nhỏ. Một: tìm lập luận mạnh nhất của phía bên kia, không phải yếu nhất.",
          "keys": [
            "mạnh nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: ask, what would change my mind? Three: use neutral search words.",
          "sub": "Hai: tự hỏi “điều gì sẽ khiến mình đổi ý?” Ba: dùng từ khoá trung tính khi tìm kiếm.",
          "keys": [
            "đổi ý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four: ask someone who disagrees, and listen to understand. Five: write your prediction, then compare.",
          "sub": "Bốn: hỏi người có quan điểm khác, nghe để hiểu. Năm: ghi lại dự đoán trước khi có kết quả, rồi so lại.",
          "keys": [
            "nghe để hiểu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The real difference: searching to confirm, or searching to test.",
          "sub": "Khác biệt ở mục đích: tìm để xác nhận, hay tìm để kiểm tra.",
          "keys": [
            "tìm để kiểm tra"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Survive your own attack, and your view is truly stronger. Real gold fears no fire.",
          "sub": "Cố tìm bằng chứng chống lại mà vẫn đứng vững, quan điểm ấy thật sự mạnh. Vàng thật không sợ lửa."
        }
      ],
      "ref": "p16,p18"
    },
    {
      "id": "s18",
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tối Chủ nhật: chưa mua",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                }
              ]
            },
            "at": "l1:phone",
            "caption": "Tối Chủ nhật · quyết định",
            "icon": "house"
          },
          {
            "id": "h-off",
            "t": "illus",
            "name": "office-building",
            "x": 3996,
            "y": 1255,
            "size": 100,
            "at": "l2:office"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Thứ Hai: hỏi quy hoạch",
            "x": 4116,
            "y": 1280,
            "size": 50,
            "at": "l2:planning"
          },
          {
            "id": "h-world",
            "t": "text",
            "text": "Bảng tin ≠ cả thế giới",
            "x": 3996,
            "y": 1410,
            "size": 58,
            "at": "l4:feed",
            "color": "accent",
            "hl": [
              {
                "text": "≠ cả thế giới",
                "at": "l4:whole"
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
          "say": "Last stop: Sunday night. Same phone, different Hoa.",
          "sub": "Chặng cuối: tối Chủ nhật. Vẫn điện thoại ấy, nhưng cô Hoa đã khác.",
          "keys": [
            "cô Hoa đã khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Not buying yet. On Monday I'll ask the office about the planning.",
          "sub": "Chưa mua vội. Thứ Hai mình đến cơ quan chức năng hỏi quy hoạch đã.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A feed that agrees with you is not the whole world.",
          "sub": "Bảng tin hợp ý mình không phải là cả thế giới.",
          "keys": [
            "không phải là cả thế giới"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s19",
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
            "id": "h-2",
            "t": "text",
            "text": "Đọc vài nguồn khác nhau",
            "x": 3996,
            "y": 1520,
            "size": 52,
            "at": "l1:sources",
            "hl": [
              {
                "text": "vài nguồn",
                "at": "l1:few"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Bảng tin: không là nguồn duy nhất",
            "x": 3996,
            "y": 1600,
            "size": 48,
            "at": "l1:only",
            "color": "muted"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "“Trăm nghe không bằng một thấy”",
            "x": 3996,
            "y": 1710,
            "size": 52,
            "at": "l2:hundred",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The fix: read a few different sources on important topics. Your feed is never the only one.",
          "sub": "Cách sửa: chủ đề quan trọng thì đọc thêm vài nguồn khác nhau. Đừng để bảng tin là nguồn tin duy nhất.",
          "keys": [
            "vài nguồn khác nhau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As grandma says: a hundred hearings are not worth one seeing.",
          "sub": "Ông bà dặn: “Trăm nghe không bằng một thấy.”",
          "keys": [
            "Trăm nghe không bằng một thấy"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s20",
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Cố công bằng: 2 lỗi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l2:mistake"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "① Cân bằng giả",
            "x": 5964,
            "y": 1260,
            "size": 58,
            "at": "l2:false",
            "color": "coral",
            "hl": [
              {
                "text": "Cân bằng giả",
                "at": "l2:balance"
              }
            ]
          },
          {
            "id": "i-1b",
            "t": "text",
            "text": "Cân chất lượng, không đếm phía",
            "x": 5964,
            "y": 1345,
            "size": 50,
            "at": "l3:quality",
            "hl": [
              {
                "text": "chất lượng",
                "at": "l3:quality+200"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "② Đổi ý liên tục",
            "x": 5964,
            "y": 1450,
            "size": 58,
            "at": "l4:changing",
            "color": "coral"
          },
          {
            "id": "i-2b",
            "t": "text",
            "text": "Đổi khi có bằng chứng mới",
            "x": 5964,
            "y": 1535,
            "size": 50,
            "at": "l5:new",
            "hl": [
              {
                "text": "bằng chứng mới",
                "at": "l5:evidence"
              }
            ]
          },
          {
            "id": "i-2c",
            "t": "text",
            "text": "không vì ai nói to hơn",
            "x": 5964,
            "y": 1605,
            "size": 46,
            "at": "l5:loudest",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Mistake one: false balance, treating a baseless opinion like solid evidence, just to look fair.",
          "sub": "Lỗi một: cân bằng giả. Coi ý kiến không cơ sở ngang bằng chứng vững, chỉ để tỏ ra công bằng.",
          "keys": [
            "cân bằng giả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Weigh by the quality of evidence, not by the number of sides.",
          "sub": "Hãy cân theo chất lượng bằng chứng, không theo số phía.",
          "keys": [
            "chất lượng bằng chứng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mistake two: changing your mind all the time, because everyone sounds right.",
          "sub": "Lỗi hai: đổi ý liên tục. Nghe ai cũng thấy đúng.",
          "keys": [
            "đổi ý liên tục"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Change it for new evidence, not for the loudest or the last voice.",
          "sub": "Đổi ý khi có bằng chứng mới, không phải khi ai nói to hơn hay nói sau cùng.",
          "keys": [
            "bằng chứng mới"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s21",
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
            "id": "i-bal",
            "t": "illus",
            "name": "speech-balloon",
            "x": 6804,
            "y": 1255,
            "size": 100,
            "at": "l1:comment"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Trước khi bình luận:",
            "x": 6924,
            "y": 1280,
            "size": 50,
            "at": "l1:hot"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Viết 3 lý do hợp lý nhất",
            "x": 6804,
            "y": 1390,
            "size": 54,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 lý do",
                "at": "l1:three+200"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "của phía bên kia",
            "x": 6804,
            "y": 1465,
            "size": 54,
            "at": "l1:side"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "Viết không ra → chưa đọc đủ",
            "x": 6804,
            "y": 1570,
            "size": 48,
            "at": "l2:read",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before you comment on a hot topic, write the three most reasonable reasons of the other side.",
          "sub": "Trước khi bình luận chủ đề nóng, viết ra ba lý do hợp lý nhất của phía bên kia.",
          "keys": [
            "ba lý do hợp lý nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Can't? Then you haven't read enough to comment. Keyboard down, slowly.",
          "sub": "Viết không ra? Có lẽ chưa đọc đủ để bình luận. Từ từ đặt bàn phím xuống.",
          "keys": [
            "chưa đọc đủ"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s22",
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ba ngày tới của bạn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l1:type"
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1230,
            "size": 70,
            "color": "accent",
            "at": "l1:type+600"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Gõ câu hỏi, không gõ đáp án",
            "x": 8012,
            "y": 1250,
            "size": 50,
            "at": "l1:type+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1360,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l1:notes"
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1340,
            "size": 70,
            "color": "accent",
            "at": "l1:notes+600"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Ghi lại trước, tin sau",
            "x": 8012,
            "y": 1360,
            "size": 50,
            "at": "l1:notes+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1470,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l2:read"
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1450,
            "size": 70,
            "color": "accent",
            "at": "l2:read+600"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Đọc ra ngoài bảng tin",
            "x": 8012,
            "y": 1470,
            "size": 50,
            "at": "l2:read+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l2:ask"
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1560,
            "size": 70,
            "color": "accent",
            "at": "l2:ask+600"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Hỏi người nói “khoan đã”",
            "x": 8012,
            "y": 1580,
            "size": 50,
            "at": "l2:ask+200"
          },
          {
            "id": "j-today",
            "t": "text",
            "text": "Hôm nay: viết điều khiến đổi ý",
            "x": 7932,
            "y": 1710,
            "size": 48,
            "at": "l3:today",
            "color": "accent",
            "hl": [
              {
                "text": "đổi ý",
                "at": "l3:change"
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
          "say": "Your turn. Type a question, not an answer. Take notes before trusting memory.",
          "sub": "Đến lượt bạn. Gõ câu hỏi, đừng gõ sẵn đáp án. Ghi lại trước, tin trí nhớ sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read beyond your feed. Ask someone who might say wait.",
          "sub": "Đọc ra ngoài bảng tin. Hỏi cả người sẽ nói “khoan đã”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And today: pick one belief, and write what would change your mind.",
          "sub": "Hôm nay: chọn một điều đang tin chắc, viết ra điều gì sẽ khiến bạn đổi ý.",
          "keys": [
            "điều gì sẽ khiến bạn đổi ý"
          ]
        }
      ],
      "ref": "outro,p5,p8,p15"
    },
    {
      "id": "s25b",
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.4,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "J",
            "ms": 800
          }
        ],
        "items": [
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu tuần sau",
            "icon": "mobile-phone"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A week later, Friday night. A hot new video pops up.",
          "sub": "Một tuần sau, lại tối thứ Sáu. Một video nóng mới hiện lên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Buy now before it's too late? Hmm. What would change my mind?",
          "sub": "“Mua ngay kẻo lỡ”? Hừm. Điều gì sẽ khiến mình đổi ý?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Let me type a question, not an answer.",
          "sub": "Để mình gõ câu hỏi, chứ không gõ sẵn câu trả lời.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Others eat sweet potatoes? Hoa leaves the hoe. She asks first.",
          "sub": "Người ta ăn khoai? Cô Hoa không vác mai nữa. Cô hỏi trước đã.",
          "keys": [
            "hỏi trước đã"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s26",
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
            "at": "l1:searching",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:remembering",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:asking",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:feed",
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
            "x": 5536,
            "y": 30,
            "at": "l1:searching"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1600,
            "y": 1120,
            "at": "l2:remembering"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 9472,
            "y": 30,
            "at": "l3:asking"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-world"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:feed"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three days, one story. Searching: type a question, not an answer.",
          "sub": "Ba ngày, một câu chuyện. Lúc tìm kiếm: gõ câu hỏi, đừng gõ sẵn câu trả lời.",
          "keys": [
            "gõ câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Remembering: write it down first, trust memory later.",
          "sub": "Lúc nhớ lại: ghi lại trước, tin trí nhớ sau.",
          "keys": [
            "ghi lại trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Asking: include the person who might say wait. And your feed is not the world.",
          "sub": "Lúc hỏi ý kiến: hỏi cả người sẽ nói “khoan đã”. Và bảng tin không phải cả thế giới.",
          "keys": [
            "“khoan đã”"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p8,p11,p15"
    },
    {
      "id": "s27",
      "module": "QUIZ-01",
      "ref": "questions[3]",
      "data": {
        "q": "Which search words are more neutral?",
        "options": [
          "Is drinking milk at night good or bad for health",
          "Why drinking milk at night is bad for your health",
          "The dangers of drinking milk at night for every member of the family"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "glass-of-milk",
        "why": "Câu hỏi mở “tốt hay không” cho kết quả nhiều phía."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which search words are more neutral?",
          "sub": "Từ khoá tìm kiếm nào trung tính hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Is drinking milk at night good or bad for health.",
          "sub": "Uống sữa buổi tối tốt hay không tốt cho sức khoẻ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The other two already carry an answer, so they return only warnings.",
          "sub": "Hai câu còn lại mang sẵn kết luận, nên chỉ ra bài cảnh báo."
        }
      ]
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Tìm để kiểm tra"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Search to test, not to confirm. Forty questions are waiting.",
          "sub": "Tìm để kiểm tra, không phải để xác nhận. Bốn mươi câu hỏi đang chờ."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s25b"
  }
};
