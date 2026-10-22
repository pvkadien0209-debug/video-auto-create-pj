// experts-and-ai-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "experts-and-ai-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "experts-staying-relevant-with-ai",
    "slug": "experts-and-ai-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "AI sẽ thay phần nào công việc của chuyên gia, và phần nào không?",
    "series": "Làm cùng AI thay vì sợ AI — cho chuyên gia lâu năm học lại để giữ giá trị nghề"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "id": "a-88",
            "t": "text",
            "text": "88%",
            "x": 60,
            "y": 90,
            "size": 170,
            "at": "l1:Eighty",
            "color": "accent",
            "hl": [
              {
                "text": "88%",
                "at": "l1:percent"
              }
            ]
          },
          {
            "id": "a-who",
            "t": "text",
            "text": "lao động tri thức VN dùng AI",
            "x": 60,
            "y": 300,
            "size": 44,
            "at": "l1:knowledge"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Phần lớn dùng giỏi?",
            "x": 60,
            "y": 380,
            "size": 60,
            "at": "l2:most",
            "hl": [
              {
                "text": "dùng giỏi",
                "at": "l2:well"
              }
            ]
          },
          {
            "id": "a-yb",
            "t": "box",
            "x": 60,
            "y": 490,
            "w": 300,
            "h": 100,
            "at": "l2:Yes",
            "stroke": 5
          },
          {
            "id": "a-y",
            "t": "text",
            "text": "Có",
            "x": 160,
            "y": 505,
            "size": 60,
            "at": "l2:Yes+200"
          },
          {
            "id": "a-nb",
            "t": "box",
            "x": 420,
            "y": 490,
            "w": 300,
            "h": 100,
            "at": "l2:not yet",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Chưa",
            "x": 490,
            "y": 505,
            "size": 60,
            "at": "l2:not yet+200"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Tuổi Trẻ 26/1/2026, dẫn số liệu Microsoft 2024",
            "x": 60,
            "y": 720,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eighty-eight percent. That is how many Vietnamese knowledge workers already use generative AI.",
          "sub": "88%: tỷ lệ lao động tri thức Việt Nam đã dùng AI tạo sinh.",
          "keys": [
            "88%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So most of them use it well? Yes, or not yet? Take a guess.",
          "sub": "Vậy phần lớn dùng giỏi? Có, hay chưa? Đoán thử đi.",
          "keys": [
            "dùng giỏi"
          ]
        }
      ],
      "beats": {
        "after": 1500
      },
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
            "at": "l4",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "ledger"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Hoa",
            "caption": "Thứ Hai · 8:00 · phòng kế toán",
            "icon": "office-building"
          },
          {
            "id": "a-pen",
            "t": "illus",
            "name": "fountain-pen",
            "x": 1560,
            "y": 640,
            "size": 90,
            "at": "l2:red pen"
          },
          {
            "id": "a-bd",
            "t": "text",
            "text": "bút đỏ 20 năm",
            "x": 1190,
            "y": 650,
            "size": 44,
            "at": "l2:red pen",
            "color": "coral",
            "hl": [
              {
                "text": "bút đỏ",
                "at": "l2:red pen"
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
          "say": "Hold that guess. Meet chị Hoa.",
          "sub": "Giữ câu đoán đó. Đây là chị Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Chief accountant for twenty years, with a red pen sharper than any software.",
          "sub": "Kế toán trưởng hai mươi năm, cây bút đỏ sắc hơn mọi phần mềm.",
          "keys": [
            "cây bút đỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, her young colleague, who asks AI before he asks anyone.",
          "sub": "Còn đây là Dũng, kế toán viên trẻ, việc gì cũng hỏi AI trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Chị Hoa, the monthly report is done! AI wrote it before my coffee cooled.",
          "sub": "Chị Hoa ơi, báo cáo tháng xong rồi! AI viết xong trước khi cà phê kịp nguội.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Already? Twenty years in this job, and suddenly I am the slow one.",
          "sub": "Xong rồi á? Hai mươi năm nghề, tự nhiên mình thành người chậm.",
          "face": "worried"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "intro"
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
            "text": "AI thay phần nào, phần nào không?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l3:which parts",
            "hl": [
              {
                "text": "phần nào không",
                "at": "l3:will it not"
              }
            ]
          },
          {
            "id": "b-ans",
            "t": "text",
            "text": "Đáp án: CHƯA",
            "x": 2028,
            "y": 160,
            "size": 64,
            "at": "l1:not yet",
            "color": "coral"
          },
          {
            "id": "b-bas",
            "t": "text",
            "text": "Phần lớn: mới hỗ trợ cơ bản",
            "x": 2028,
            "y": 260,
            "size": 48,
            "at": "l1:basic",
            "hl": [
              {
                "text": "hỗ trợ cơ bản",
                "at": "l1:basic support"
              }
            ]
          },
          {
            "id": "b-gap",
            "t": "text",
            "text": "Dùng nhiều ≠ dùng giỏi",
            "x": 2028,
            "y": 350,
            "size": 52,
            "at": "l2:Few"
          },
          {
            "id": "b-exp",
            "t": "text",
            "text": "→ khoảng trống cho chuyên gia",
            "x": 2028,
            "y": 430,
            "size": 48,
            "at": "l2:gap",
            "color": "accent",
            "hl": [
              {
                "text": "khoảng trống",
                "at": "l2:gap"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Báo cáo Lương và Thị trường Lao động 2026 của Navigos, Tuổi Trẻ dẫn",
            "x": 2868,
            "y": 260,
            "size": 24,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The answer: not yet. Navigos's 2026 report says most workers use AI only for basic support.",
          "sub": "Đáp án: chưa. Báo cáo 2026 của Navigos: phần lớn người lao động mới dùng AI hỗ trợ cơ bản.",
          "keys": [
            "hỗ trợ cơ bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many use AI. Few use it well. That gap is exactly where experts fit.",
          "sub": "Nhiều người dùng, chưa nhiều người dùng giỏi. Khoảng trống ấy là chỗ của chuyên gia.",
          "keys": [
            "Khoảng trống"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, which parts of an expert's work will AI take over, and which will it not?",
          "sub": "Vậy AI sẽ thay phần nào trong việc của chuyên gia, phần nào không?",
          "keys": [
            "phần nào không"
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
            "id": "b-gin",
            "t": "illus",
            "name": "ginger-root",
            "x": 2028,
            "y": 520,
            "size": 120,
            "at": "l1:ginger"
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Gừng càng già càng cay”",
            "x": 2168,
            "y": 540,
            "size": 56,
            "at": "l1:ginger",
            "color": "accent",
            "hl": [
              {
                "text": "càng cay",
                "at": "l1:hottest"
              }
            ]
          },
          {
            "id": "b-rob",
            "t": "illus",
            "name": "robot",
            "x": 2968,
            "y": 520,
            "size": 120,
            "at": "l2:robot"
          },
          {
            "id": "b-vs",
            "t": "text",
            "text": "vs robot không ngủ",
            "x": 3108,
            "y": 545,
            "size": 48,
            "at": "l2:robot",
            "color": "muted"
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "6 chặng · 1 tuần của chị Hoa",
            "x": 2028,
            "y": 680,
            "size": 48,
            "at": "l3:six",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l3:six"
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
          "say": "Our elders say: old ginger is the hottest.",
          "sub": "Ông bà nói: “Gừng càng già càng cay.”",
          "keys": [
            "Gừng càng già càng cay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But can old ginger compete with a robot that never sleeps?",
          "sub": "Nhưng gừng già có địch nổi một con robot không bao giờ ngủ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's find out over one week of Hoa's life, and six stops of this series.",
          "sub": "Cùng xem qua một tuần của chị Hoa, và sáu chặng của chuỗi bài này.",
          "keys": [
            "sáu chặng"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Sáu chặng của chuỗi",
        "points": [
          {
            "label": "Tổng quan",
            "sub": "Bài hôm nay",
            "illus": "world-map"
          },
          {
            "label": "Liệt kê việc",
            "sub": "Phần nào giao AI",
            "illus": "clipboard"
          },
          {
            "label": "Kỹ năng khó thay",
            "sub": "Giữ giá trị nghề",
            "illus": "ginger-root"
          },
          {
            "label": "Dùng an toàn",
            "sub": "Không lộ dữ liệu",
            "illus": "locked"
          },
          {
            "label": "Viết yêu cầu",
            "sub": "Ra kết quả dùng được",
            "illus": "writing-hand"
          },
          {
            "label": "Học 90 ngày",
            "sub": "Từng kỹ năng một",
            "illus": "books"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, the big picture. Then list your tasks, and keep the skills AI can't replace.",
          "sub": "Hôm nay là bức tranh chung. Rồi liệt kê việc, giữ những kỹ năng AI khó thay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Use AI safely, write good requests, and relearn in ninety days.",
          "sub": "Dùng AI an toàn, viết yêu cầu tốt, và học lại trong 90 ngày.",
          "keys": [
            "90 ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p6,p13,p17,p21,p23"
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
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "Thứ Hai 10:00 · Nghề = nhiều việc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday",
            "hl": [
              {
                "text": "nhiều việc",
                "at": "l3:many small tasks"
              }
            ]
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4876,
            "y": 150,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:list",
            "caption": "Thứ Hai · 10:00 · tờ giấy nháp",
            "icon": "memo"
          },
          {
            "id": "c-wbsrc",
            "t": "text",
            "text": "Ngân hàng Thế giới, Báo cáo Phát triển Thế giới 2019",
            "x": 3996,
            "y": 140,
            "size": 26,
            "at": "l2:World Bank",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 220,
            "w": 44,
            "h": 44,
            "at": "l4:Entering",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 206,
            "size": 56,
            "at": "l4:Entering+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Nhập số",
            "x": 4062,
            "y": 210,
            "size": 46,
            "at": "l4:Entering+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 300,
            "w": 44,
            "h": 44,
            "at": "l4:Explaining",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 286,
            "size": 56,
            "at": "l4:Explaining+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Giải thích số cho giám đốc",
            "x": 4062,
            "y": 290,
            "size": 46,
            "at": "l4:Explaining+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 380,
            "w": 44,
            "h": 44,
            "at": "l4:Spotting",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 366,
            "size": 56,
            "at": "l4:Spotting+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Phát hiện chỗ bất thường",
            "x": 4062,
            "y": 370,
            "size": 46,
            "at": "l4:Spotting+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 460,
            "w": 44,
            "h": 44,
            "at": "l4:tax",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 446,
            "size": 56,
            "at": "l4:tax+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Trả lời cán bộ thuế",
            "x": 4062,
            "y": 450,
            "size": 46,
            "at": "l4:tax+200"
          },
          {
            "id": "c-bc",
            "t": "text",
            "text": "Chức danh = lá · nhiệm vụ = nhân",
            "x": 3996,
            "y": 560,
            "size": 46,
            "at": "l5:wrapper",
            "color": "accent",
            "hl": [
              {
                "text": "nhiệm vụ = nhân",
                "at": "l5:filling"
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
          "say": "Monday, ten a.m. Hoa stops worrying and does what accountants do best. She makes a list.",
          "sub": "Thứ Hai, 10 giờ. Chị Hoa thôi lo, làm việc kế toán giỏi nhất: lập danh sách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The World Bank's 2019 report looks at how technology changes the way work is done.",
          "sub": "Báo cáo Phát triển Thế giới 2019 của Ngân hàng Thế giới bàn về cách công nghệ đổi cách làm việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A handy way to see it: one job is many small tasks.",
          "sub": "Một cách nhìn dễ dùng: một nghề gồm rất nhiều nhiệm vụ nhỏ.",
          "keys": [
            "nhiều nhiệm vụ nhỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Entering numbers. Explaining them to the director. Spotting odd entries. Answering the tax officer.",
          "sub": "Nhập số. Giải thích số cho giám đốc. Phát hiện chỗ bất thường. Trả lời cán bộ thuế.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The job title is the leaf wrapper. The tasks are the filling, like a bánh chưng.",
          "sub": "Chức danh là lớp lá, nhiệm vụ mới là nhân bánh chưng.",
          "keys": [
            "nhiệm vụ mới là nhân"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "AI sẽ thay cả nghề của tôi",
        "right": "AI nhận một phần nhiệm vụ trong nghề",
        "wrongIllus": "robot",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "AI will take my whole job?",
          "sub": "AI sẽ thay cả nghề của tôi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usually AI takes some tasks: drafting, summarising, rough translation, sorting data.",
          "sub": "Thường AI chỉ nhận một phần: soạn nháp, tóm tắt, dịch thô, sắp xếp dữ liệu.",
          "keys": [
            "một phần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p4"
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
          }
        ],
        "items": [
          {
            "id": "c-ai",
            "t": "text",
            "text": "AI: nháp, tóm tắt, dịch thô",
            "x": 3996,
            "y": 630,
            "size": 44,
            "at": "l1:Deciding",
            "color": "muted"
          },
          {
            "id": "c-ng",
            "t": "text",
            "text": "Người: quyết · chịu trách nhiệm · giữ khách",
            "x": 3996,
            "y": 700,
            "size": 40,
            "at": "l1:clients",
            "hl": [
              {
                "text": "chịu trách nhiệm",
                "at": "l1:responsibility"
              }
            ]
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Hỏi: AI làm được việc nào?",
            "x": 4876,
            "y": 690,
            "size": 46,
            "at": "l2:Ask",
            "color": "accent",
            "hl": [
              {
                "text": "việc nào",
                "at": "l2:which tasks"
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
          "say": "Deciding, taking responsibility, keeping clients close: those still need people.",
          "sub": "Còn quyết định, chịu trách nhiệm, giữ quan hệ với khách: vẫn cần người.",
          "keys": [
            "vẫn cần người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So don't ask if AI will replace your job. Ask which tasks it can do.",
          "sub": "Vậy đừng hỏi AI có thay nghề mình không. Hãy hỏi AI làm được nhiệm vụ nào.",
          "keys": [
            "nhiệm vụ nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listing and sorting your own tasks is stage one. Our next video walks you through it.",
          "sub": "Liệt kê, phân loại việc của mình là chặng một. Bài tiếp theo hướng dẫn kỹ."
        }
      ],
      "ref": "p4,p5,p6"
    },
    {
      "id": "s08",
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "Thứ Ba · Doanh nghiệp cần gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "newspaper",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:news",
            "caption": "Trưa thứ Ba · quán cơm đối diện",
            "icon": "newspaper"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Công nghệ",
            "x": 5964,
            "y": 160,
            "size": 40,
            "at": "l2:technology"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 215,
            "w": 614,
            "h": 50,
            "at": "l2:technology+200",
            "fill": "#f2d64b",
            "stroke": 4
          },
          {
            "id": "d-v0",
            "t": "text",
            "text": "76,8%",
            "x": 6598,
            "y": 210,
            "size": 46,
            "at": "l2:technology+400",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Thích ứng",
            "x": 5964,
            "y": 290,
            "size": 40,
            "at": "l4:Adaptability"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 345,
            "w": 310,
            "h": 50,
            "at": "l4:Adaptability+200",
            "fill": "#cfd8e3",
            "stroke": 4
          },
          {
            "id": "d-v1",
            "t": "text",
            "text": "38,8%",
            "x": 6294,
            "y": 340,
            "size": 46,
            "at": "l4:Adaptability+400",
            "color": "ink"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Phân tích, giải quyết",
            "x": 5964,
            "y": 420,
            "size": 40,
            "at": "l4:Analysis"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 475,
            "w": 208,
            "h": 50,
            "at": "l4:Analysis+200",
            "fill": "#cfd8e3",
            "stroke": 4
          },
          {
            "id": "d-v2",
            "t": "text",
            "text": "26%",
            "x": 6192,
            "y": 470,
            "size": 46,
            "at": "l4:Analysis+400",
            "color": "ink"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Navigos 2026, Tuổi Trẻ dẫn ngày 26/1/2026",
            "x": 5964,
            "y": 560,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday lunch. Dũng reads the news out loud, as usual.",
          "sub": "Trưa thứ Ba. Dũng lại đọc báo to cho cả bàn nghe."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Navigos says the skill firms want most is understanding and using technology. Seventy-six point eight percent!",
          "sub": "Navigos bảo kỹ năng doanh nghiệp cần nhất là hiểu và ứng dụng công nghệ: 76,8%!",
          "face": "happy",
          "pose": "phone",
          "keys": [
            "76,8%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And what comes next?",
          "sub": "Thế còn sau đó?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Adaptability, thirty-eight point eight. Analysis and problem solving, twenty-six.",
          "sub": "Khả năng thích ứng: 38,8%. Phân tích, giải quyết vấn đề: 26%.",
          "keys": [
            "thích ứng"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 89.45,
        "decimals": 2,
        "suffix": "%",
        "label": "người lao động trong khảo sát sẵn sàng học kỹ năng mới",
        "illus": "books"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And the good news?",
          "sub": "Còn tin vui?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eighty-nine point four five percent are ready to learn new skills.",
          "sub": "89,45% sẵn sàng học kỹ năng mới.",
          "keys": [
            "sẵn sàng học"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s10",
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
            "text": "Thứ Tư · Thế giới cần gì?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Tư duy phân tích · 69%",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l2:analytical",
            "hl": [
              {
                "text": "69%",
                "at": "l2:sixty-nine"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Bền bỉ, linh hoạt · 67%",
            "x": 7932,
            "y": 215,
            "size": 44,
            "at": "l3:resilience"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Lãnh đạo, ảnh hưởng · 61%",
            "x": 7932,
            "y": 275,
            "size": 44,
            "at": "l3:Leadership"
          },
          {
            "id": "e-39",
            "t": "text",
            "text": "39% kỹ năng đổi đến 2030",
            "x": 7932,
            "y": 340,
            "size": 46,
            "at": "l4:thirty-nine",
            "color": "accent",
            "hl": [
              {
                "text": "39%",
                "at": "l4:thirty-nine"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: tóm tắt WEF Future of Jobs 2025, Human Resources Online",
            "x": 7932,
            "y": 410,
            "size": 24,
            "at": "l2",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Zoom out to the whole world.",
          "sub": "Thứ Tư. Nhìn rộng ra thế giới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The World Economic Forum's Future of Jobs 2025: analytical thinking tops the list, at sixty-nine percent of employers.",
          "sub": "Báo cáo Tương lai Việc làm 2025 của WEF: tư duy phân tích dẫn đầu, 69% nhà tuyển dụng chọn.",
          "keys": [
            "tư duy phân tích"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then resilience and flexibility, sixty-seven. Leadership and social influence, sixty-one.",
          "sub": "Rồi bền bỉ và linh hoạt 67%, lãnh đạo và ảnh hưởng xã hội 61%."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "AI and big data grow fastest, and about thirty-nine percent of core skills may change by 2030.",
          "sub": "AI và dữ liệu lớn tăng nhanh nhất; khoảng 39% kỹ năng cốt lõi dự báo sẽ đổi đến 2030.",
          "keys": [
            "39%"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "fountain-pen",
                "ledger"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:report",
            "caption": "Chiều thứ Tư · bàn chị Hoa",
            "icon": "fountain-pen"
          },
          {
            "id": "e-sm",
            "t": "text",
            "text": "Văn trơn tru ✓",
            "x": 7932,
            "y": 475,
            "size": 46,
            "at": "l2:Smooth"
          },
          {
            "id": "e-tot",
            "t": "text",
            "text": "Tổng không khớp sổ ✗",
            "x": 7932,
            "y": 545,
            "size": 50,
            "at": "l2:match",
            "color": "coral",
            "hl": [
              {
                "text": "không khớp",
                "at": "l2:match"
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
          "say": "Wednesday afternoon. Hoa reads Dũng's AI report, red pen in hand.",
          "sub": "Chiều thứ Tư. Chị Hoa đọc báo cáo AI của Dũng, tay cầm bút đỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Smooth writing. But this total doesn't match last month's ledger.",
          "sub": "Văn trơn tru lắm. Nhưng tổng này không khớp sổ tháng trước.",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Oh. I didn't check. The AI sounded so sure.",
          "sub": "Ơ. Em chưa kiểm. AI nói chắc nịch mà.",
          "face": "surprised"
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "BRK-02",
      "data": {
        "kicker": "Tuổi Trẻ, 26/1/2026",
        "title": "Từ dùng AI sang cộng tác",
        "hl": "cộng tác",
        "sub": "Hiểu cách AI chạy · hỏi đúng · đánh giá · cộng tác"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuổi Trẻ's headline: from using AI to working with AI.",
          "sub": "Tuổi Trẻ: từ sử dụng AI sang cộng tác với AI.",
          "keys": [
            "cộng tác với AI"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Know how it works, ask well, judge, collaborate.",
          "sub": "Hiểu cách AI chạy, hỏi đúng, đánh giá, cộng tác."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s13",
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
            "at": "l1",
            "fit": [
              "e-oc",
              "e-k"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-oc",
            "t": "text",
            "text": "Kiểm soát đầu ra",
            "x": 7932,
            "y": 625,
            "size": 56,
            "at": "l1:output control",
            "color": "accent",
            "hl": [
              {
                "text": "đầu ra",
                "at": "l1:output control"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Biết bấm < biết kiểm",
            "x": 7932,
            "y": 700,
            "size": 38,
            "at": "l2:checkers",
            "hl": [
              {
                "text": "biết kiểm",
                "at": "l2:checkers"
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
          "say": "Navigos also names a missing skill: output control, meaning checking what AI produces.",
          "sub": "Navigos nêu một kỹ năng còn thiếu: kiểm soát đầu ra, tức là kiểm kết quả AI làm ra.",
          "keys": [
            "kiểm soát đầu ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The market needs more than button pressers. It needs AI checkers, like Hoa and her red pen.",
          "sub": "Thị trường không chỉ cần người bấm AI, mà cần người kiểm kết quả, như chị Hoa với cây bút đỏ.",
          "keys": [
            "người kiểm kết quả"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "AI viết trơn tru thế, còn phần nào cho con người?",
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
          "say": "If AI writes so smoothly, what is left for people?",
          "sub": "AI viết trơn tru thế, còn phần nào cho con người?",
          "keys": [
            "còn phần nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s15",
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
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "Thứ Năm · Phần vẫn cần người",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "cần người",
                "at": "l3:name"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 1040,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "face": "worried"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bình",
            "caption": "Thứ Năm · phòng pháp chế",
            "icon": "page-facing-up"
          },
          {
            "id": "f-wb",
            "t": "text",
            "text": "Nhu cầu tăng (Ngân hàng Thế giới):",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l4:World Bank",
            "color": "muted"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "• giải quyết vấn đề phức tạp",
            "x": 60,
            "y": 1315,
            "size": 44,
            "at": "l4:complex",
            "hl": [
              {
                "text": "phức tạp",
                "at": "l4:complex"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• làm việc nhóm",
            "x": 60,
            "y": 1380,
            "size": 44,
            "at": "l4:teamwork"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "• kỹ năng giúp thích ứng",
            "x": 60,
            "y": 1445,
            "size": 44,
            "at": "l4:adapt"
          },
          {
            "id": "f-xp",
            "t": "text",
            "text": "= thứ người lâu năm tích luỹ",
            "x": 60,
            "y": 1520,
            "size": 44,
            "at": "l5:veterans",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. Hoa visits her old friend chú Bình, head of legal, calm as a lotus pond.",
          "sub": "Thứ Năm. Chị Hoa sang gặp chú Bình, trưởng pháp chế, bạn lâu năm, điềm tĩnh như ao sen.",
          "keys": [
            "chú Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Anh Bình, if AI writes everything, what's left for us?",
          "sub": "Anh Bình, AI viết hết rồi thì còn gì cho bọn mình?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Easy now. AI can suggest. But whose name goes on the report?",
          "sub": "Từ từ, mình xem lại đã. AI gợi ý được. Nhưng ai ký tên vào báo cáo?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The World Bank agrees: demand grows for complex problem solving, teamwork, and skills that help us adapt.",
          "sub": "Ngân hàng Thế giới cũng nói: nhu cầu tăng ở giải quyết vấn đề phức tạp, làm việc nhóm, kỹ năng thích ứng.",
          "keys": [
            "giải quyết vấn đề phức tạp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Exactly what veterans collect over years of hard cases.",
          "sub": "Đúng thứ người lâu năm tích luỹ qua bao năm xử lý ca khó.",
          "keys": [
            "tích luỹ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s16",
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
              "f-b0",
              "f-b2"
            ],
            "zoom": 1.1,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-b0",
            "t": "box",
            "x": 60,
            "y": 1690,
            "w": 520,
            "h": 160,
            "at": "l2:judgement",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-a0",
            "t": "text",
            "text": "① Phán đoán",
            "x": 90,
            "y": 1700,
            "size": 48,
            "at": "l2:judgement+200",
            "hl": [
              {
                "text": "Phán đoán",
                "at": "l2:judgement+300"
              }
            ]
          },
          {
            "id": "f-s0",
            "t": "text",
            "text": "theo bối cảnh",
            "x": 90,
            "y": 1775,
            "size": 38,
            "at": "l2:judgement+400",
            "color": "muted"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 620,
            "y": 1690,
            "w": 520,
            "h": 160,
            "at": "l3:signs",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "② Trách nhiệm",
            "x": 650,
            "y": 1700,
            "size": 48,
            "at": "l3:signs+200",
            "hl": [
              {
                "text": "Trách nhiệm",
                "at": "l3:signs+300"
              }
            ]
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "người ký tên",
            "x": 650,
            "y": 1775,
            "size": 38,
            "at": "l3:signs+400",
            "color": "muted"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 1180,
            "y": 1690,
            "w": 520,
            "h": 160,
            "at": "l4:trust",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "③ Niềm tin",
            "x": 1210,
            "y": 1700,
            "size": 48,
            "at": "l4:trust+200",
            "hl": [
              {
                "text": "Niềm tin",
                "at": "l4:trust+300"
              }
            ]
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "của khách quen",
            "x": 1210,
            "y": 1775,
            "size": 38,
            "at": "l4:trust+400",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "For experts, the hard-to-replace part sits in three places.",
          "sub": "Với chuyên gia, phần khó thay nằm ở ba chỗ.",
          "keys": [
            "ba chỗ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: judgement in the context of this client, this company.",
          "sub": "Một: phán đoán theo bối cảnh của khách này, công ty này.",
          "keys": [
            "phán đoán theo bối cảnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: the responsibility of the person who signs.",
          "sub": "Hai: trách nhiệm của người ký tên.",
          "keys": [
            "người ký tên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: the trust clients place in someone they know.",
          "sub": "Ba: niềm tin khách đặt vào người họ quen.",
          "keys": [
            "niềm tin"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "AI can suggest, but it won't sign, and won't take the blame for you. Video three goes deeper.",
          "sub": "AI gợi ý được, nhưng không đứng tên, không chịu trách nhiệm thay bạn. Bài thứ ba đi sâu hơn.",
          "keys": [
            "không đứng tên"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s17",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Sáu · 9:00 · phòng kế toán",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "phone",
            "face": "happy"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Dán nguyên bảng lương có tên, số tài khoản",
          "why": "Dữ liệu nhân viên ra công cụ bên ngoài; dữ liệu cá nhân rất khó xoá khỏi mô hình.",
          "rule": "Nhanh mà để lộ dữ liệu thì không phải giỏi hơn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Friday. Let AI check my payroll formulas. Paste the whole sheet, names, account numbers, everything!",
          "sub": "Thứ Sáu. Nhờ AI kiểm công thức bảng lương. Dán nguyên bảng: họ tên, số tài khoản, đủ cả!",
          "face": "happy",
          "pose": "phone",
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
          "say": "Staff names and bank accounts, sent to an outside tool? The answer comes fast. The data leaves faster.",
          "sub": "Họ tên, số tài khoản nhân viên gửi ra công cụ bên ngoài? Trả lời thì nhanh, dữ liệu đi còn nhanh hơn.",
          "keys": [
            "dữ liệu đi còn nhanh hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Names out, account numbers out. Only the formula columns go in.",
          "sub": "Bỏ họ tên, bỏ số tài khoản. Chỉ đưa cột công thức thôi.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Better. Clean the data before you ask.",
          "sub": "Thế mới được. Làm sạch dữ liệu trước khi hỏi.",
          "phase": "redo",
          "keys": [
            "Làm sạch dữ liệu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15,p16"
    },
    {
      "id": "s18",
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "Thứ Sáu · Trôi chảy ≠ chính xác",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l4:fluent",
            "hl": [
              {
                "text": "≠ chính xác",
                "at": "l4:accurate"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "label": "Tin nhắn toàn công ty",
              "actor": {
                "id": "hoa",
                "side": "left"
              },
              "contact": {
                "name": "Phòng công nghệ thông tin",
                "illus": "desktop-computer"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Nhắc toàn công ty: không đưa dữ liệu nhân sự lên công cụ bên ngoài.",
                  "at": "l2"
                }
              ]
            },
            "at": "l1:IT",
            "caption": "Chuyện thật trong bài: hôm sau",
            "icon": "desktop-computer"
          },
          {
            "id": "g-flu",
            "t": "text",
            "text": "Trôi chảy ≠ đáng tin",
            "x": 2028,
            "y": 1260,
            "size": 54,
            "at": "l4:fluent",
            "color": "coral"
          },
          {
            "id": "g-del",
            "t": "text",
            "text": "Dữ liệu cá nhân: rất khó xoá",
            "x": 2028,
            "y": 1350,
            "size": 46,
            "at": "l5:remove",
            "hl": [
              {
                "text": "rất khó xoá",
                "at": "l5:hard to remove"
              }
            ]
          },
          {
            "id": "g-tb",
            "t": "illus",
            "name": "toothbrush",
            "x": 2028,
            "y": 1440,
            "size": 100,
            "at": "l6:toothpaste"
          },
          {
            "id": "g-tp",
            "t": "text",
            "text": "bóp ra rồi, khó nhét lại",
            "x": 2148,
            "y": 1460,
            "size": 40,
            "at": "l6:toothpaste",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: UNESCO, hướng dẫn AI tạo sinh (bản Việt 2025)",
            "x": 2028,
            "y": 1570,
            "size": 24,
            "at": "l4",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Nhanh mà lộ ≠ giỏi hơn",
            "x": 2028,
            "y": 1730,
            "size": 60,
            "at": "l7:leaky",
            "color": "accent",
            "hl": [
              {
                "text": "≠ giỏi hơn",
                "at": "l7:better"
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
          "say": "In the lesson's real story, the next day IT reminded the whole company.",
          "sub": "Chuyện thật trong bài: hôm sau, phòng công nghệ thông tin nhắc cả công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No staff data in outside tools.",
          "sub": "Không đưa dữ liệu nhân sự lên công cụ bên ngoài.",
          "keys": [
            "dữ liệu nhân sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Without that rewind, this message would be about Hoa.",
          "sub": "Không có cú tua lại, tin nhắn này là nói chị Hoa đấy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "UNESCO's guidance on generative AI warns: output can be fluent, yet not reliably accurate.",
          "sub": "Hướng dẫn của UNESCO về AI tạo sinh: kết quả có thể trôi chảy mà không chính xác đáng tin.",
          "keys": [
            "trôi chảy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Models also learn from user data, and personal data is very hard to remove once trained.",
          "sub": "Mô hình còn học cả dữ liệu người dùng; dữ liệu cá nhân rất khó xoá sau khi đã huấn luyện.",
          "keys": [
            "rất khó xoá"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Like toothpaste: once it's out, good luck putting it back.",
          "sub": "Như kem đánh răng: bóp ra rồi thì khó mà nhét lại."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Fast but leaky is not better work. Video four shows how to clean data, check answers, and note what AI did.",
          "sub": "Nhanh mà để lộ dữ liệu thì không phải giỏi hơn. Bài thứ tư chỉ cách làm sạch, kiểm lại, ghi rõ phần AI làm.",
          "keys": [
            "không phải giỏi hơn"
          ]
        }
      ],
      "ref": "p14,p15,p16,p17"
    },
    {
      "id": "s19",
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Thứ Bảy · Giao việc cho AI",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bình",
            "caption": "Sáng thứ Bảy · quán cà phê",
            "icon": "laptop"
          },
          {
            "id": "h-bf",
            "t": "text",
            "text": "Trước: “Viết email trả lời khách”",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l2:Before",
            "color": "muted"
          },
          {
            "id": "h-bfx",
            "t": "strike",
            "over": "h-bf",
            "at": "l3:After"
          },
          {
            "id": "h-af",
            "t": "text",
            "text": "Sau: vai + việc + lý do + họp",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l3:After",
            "color": "accent"
          },
          {
            "id": "h-chk",
            "t": "text",
            "text": "“tôi sẽ tự kiểm trước khi gửi”",
            "x": 3996,
            "y": 1420,
            "size": 42,
            "at": "l4:check"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1510,
            "w": 180,
            "h": 80,
            "at": "l5:Role",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "h-ct0",
            "t": "text",
            "text": "Vai",
            "x": 4011,
            "y": 1522,
            "size": 42,
            "at": "l5:Role+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 4196,
            "y": 1510,
            "w": 180,
            "h": 80,
            "at": "l5:purpose",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "h-ct1",
            "t": "text",
            "text": "Mục đích",
            "x": 4211,
            "y": 1522,
            "size": 34,
            "at": "l5:purpose+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 4396,
            "y": 1510,
            "w": 180,
            "h": 80,
            "at": "l5:length",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "h-ct2",
            "t": "text",
            "text": "Độ dài",
            "x": 4411,
            "y": 1522,
            "size": 34,
            "at": "l5:length+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 4596,
            "y": 1510,
            "w": 180,
            "h": 80,
            "at": "l5:tone",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "h-ct3",
            "t": "text",
            "text": "Giọng",
            "x": 4611,
            "y": 1522,
            "size": 42,
            "at": "l5:tone+200"
          },
          {
            "id": "h-ctx",
            "t": "text",
            "text": "+ bối cảnh, dạng, ví dụ mẫu",
            "x": 3996,
            "y": 1630,
            "size": 40,
            "at": "l5:context"
          },
          {
            "id": "h-vet",
            "t": "text",
            "text": "Người lâu năm: biết nháp đạt chuẩn",
            "x": 3996,
            "y": 1730,
            "size": 46,
            "at": "l6:Veterans",
            "hl": [
              {
                "text": "nháp đạt chuẩn",
                "at": "l6:good draft"
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
          "say": "Saturday morning. Chú Bình shows Hoa two versions of the same request.",
          "sub": "Sáng thứ Bảy. Chú Bình cho chị Hoa xem hai phiên bản của cùng một yêu cầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Before: write me an email replying to a client.",
          "sub": "Trước: “Viết cho tôi một email trả lời khách.”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "After: you are a legal officer. Draft a short, polite email explaining why the contract needs an appendix.",
          "sub": "Sau: “Bạn là chuyên viên pháp chế. Viết nháp email ngắn, lịch sự, giải thích vì sao hợp đồng cần phụ lục.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Give two reasons and propose a meeting. I will check it myself before sending.",
          "sub": "Nêu hai lý do, đề nghị một buổi họp. Tôi sẽ tự kiểm lại trước khi gửi.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Role, purpose, length, tone. A good request also gives context, the format you need, and an example if you have one.",
          "sub": "Vai, mục đích, độ dài, giọng văn. Yêu cầu tốt còn nói bối cảnh, dạng kết quả, có ví dụ mẫu càng tốt.",
          "keys": [
            "Vai, mục đích, độ dài, giọng văn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Veterans have the edge here: they know what a good draft in their field looks like.",
          "sub": "Người lâu năm có lợi thế: họ biết bản nháp đạt chuẩn trong nghề trông thế nào.",
          "keys": [
            "bản nháp đạt chuẩn"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s20",
      "module": "BRK-10",
      "data": {
        "quote": "AI chỉ hiểu việc của bạn đến mức bạn mô tả nó",
        "mark": "đến mức bạn mô tả nó",
        "by": "Rút ra của bài học",
        "illus": "writing-hand"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "AI only understands your work as well as you describe it.",
          "sub": "AI chỉ hiểu việc của bạn đến mức bạn mô tả nó.",
          "keys": [
            "đến mức bạn mô tả nó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Video five: write, fix, repeat.",
          "sub": "Bài thứ năm: viết, sửa, lặp lại."
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s21",
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật · Học lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1:Bin",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:course",
            "caption": "Tối Chủ nhật · ở nhà",
            "icon": "laptop"
          },
          {
            "id": "i-ll",
            "t": "text",
            "text": "Học tập suốt đời",
            "x": 5964,
            "y": 1250,
            "size": 56,
            "at": "l4:lifelong",
            "hl": [
              {
                "text": "suốt đời",
                "at": "l4:lifelong"
              }
            ]
          },
          {
            "id": "i-3k",
            "t": "text",
            "text": "≈ 3.000 khoá",
            "x": 5964,
            "y": 1360,
            "size": 90,
            "at": "l5:three thousand",
            "color": "accent",
            "hl": [
              {
                "text": "3.000",
                "at": "l5:three thousand"
              }
            ]
          },
          {
            "id": "i-vi",
            "t": "text",
            "text": "dịch sang tiếng Việt · 7/2025",
            "x": 5964,
            "y": 1490,
            "size": 42,
            "at": "l5:Vietnamese"
          },
          {
            "id": "i-18",
            "t": "text",
            "text": "≈ 1,8 triệu người học ở VN",
            "x": 5964,
            "y": 1560,
            "size": 46,
            "at": "l5:million",
            "hl": [
              {
                "text": "1,8 triệu",
                "at": "l5:million"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: VTV English 11/7/2025 (Coursera)",
            "x": 5964,
            "y": 1635,
            "size": 26,
            "at": "l5",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-90",
            "t": "text",
            "text": "90 ngày · từng kỹ năng một",
            "x": 5964,
            "y": 1740,
            "size": 46,
            "at": "l6:ninety",
            "color": "accent",
            "hl": [
              {
                "text": "từng kỹ năng",
                "at": "l6:one skill"
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
          "say": "Sunday night. Hoa opens a course in Vietnamese. Her son, Bé Bin, nine years old, peeks over.",
          "sub": "Tối Chủ nhật. Chị Hoa mở một khoá học tiếng Việt. Con trai chín tuổi, Bé Bin, ló đầu vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Mom, you have homework too? Why?",
          "sub": "Mẹ cũng làm bài tập ạ? Sao vậy ạ?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Yes. Old ginger needs a new recipe.",
          "sub": "Ừ. Gừng già cũng phải học công thức mới.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The World Bank report gives a whole part to lifelong learning, including learning on the job.",
          "sub": "Báo cáo của Ngân hàng Thế giới dành hẳn một phần cho học tập suốt đời, cả học khi đi làm.",
          "keys": [
            "học tập suốt đời"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And in July 2025, VTV reported Coursera translated about three thousand courses into Vietnamese, with about 1.8 million learners here.",
          "sub": "Theo VTV, tháng 7/2025 Coursera dịch khoảng 3.000 khoá sang tiếng Việt, có khoảng 1,8 triệu người học ở Việt Nam.",
          "keys": [
            "3.000 khoá"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Video six: a ninety-day plan. One skill at a time, practised on real work.",
          "sub": "Bài thứ sáu: kế hoạch 90 ngày. Học từng kỹ năng một, ngay trên việc thật.",
          "keys": [
            "từng kỹ năng một"
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
      "ref": "p22,p23"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần sau · 8:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Next Monday"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "laptop",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:desk",
            "caption": "Vẫn bàn ấy · vẫn bút đỏ ấy",
            "icon": "fountain-pen"
          },
          {
            "id": "j-flow",
            "t": "text",
            "text": "AI soạn → em kiểm → chị ký",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l3:drafts",
            "color": "accent",
            "hl": [
              {
                "text": "chị ký",
                "at": "l3:I sign"
              }
            ]
          },
          {
            "id": "j-5",
            "t": "text",
            "text": "Tờ 5 việc làm nhiều nhất",
            "x": 7932,
            "y": 1360,
            "size": 48,
            "at": "l3:five"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Gừng càng già càng cay”",
            "x": 7932,
            "y": 1490,
            "size": 54,
            "at": "l4:ginger",
            "color": "accent",
            "hl": [
              {
                "text": "càng cay",
                "at": "l4:hottest"
              }
            ]
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… nhất là gừng biết làm cùng AI",
            "x": 7962,
            "y": 1570,
            "size": 44,
            "at": "l4:Especially"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Monday, eight a.m. Same desk, same Dũng, same AI report.",
          "sub": "Thứ Hai tuần sau, 8 giờ. Vẫn bàn ấy, vẫn Dũng ấy, vẫn báo cáo AI ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Chị Hoa, AI drafted it. This time I checked the totals against the ledger.",
          "sub": "Chị Hoa, AI soạn nháp. Lần này em đối chiếu tổng với sổ rồi ạ.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good. AI drafts, you check, I sign. And here is my list of the five tasks I do most.",
          "sub": "Tốt. AI soạn, em kiểm, chị ký. Còn đây là danh sách năm việc chị làm nhiều nhất.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Old ginger is still the hottest. Especially ginger that works with AI.",
          "sub": "“Gừng càng già càng cay.” Nhất là gừng biết làm cùng AI.",
          "keys": [
            "làm cùng AI"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s23",
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
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
            "y": 555,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8872,
            "y": 690,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 470,
            "y": 1700,
            "at": "l3+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; số liệu theo nguồn đã dẫn, có thể thay đổi. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1805,
            "size": 28,
            "at": "l4:end",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Step back. One week, one board.",
          "sub": "Lùi lại xem. Một tuần, một tấm bảng."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: AI takes tasks, not the whole job.",
          "sub": "Tóm lại: AI nhận nhiệm vụ, không nhận cả nghề.",
          "keys": [
            "không nhận cả nghề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The market needs people who check AI's output.",
          "sub": "Thị trường cần người kiểm được kết quả của AI.",
          "keys": [
            "kiểm được kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Judgement, signature and trust stay human.",
          "sub": "Phán đoán, chữ ký, niềm tin: vẫn là của con người.",
          "keys": [
            "vẫn là của con người"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your turn: write the five tasks you do most this week, and mark the ones that repeat.",
          "sub": "Đến lượt bạn: viết năm việc bạn làm nhiều nhất tuần này, đánh dấu việc lặp theo mẫu.",
          "keys": [
            "năm việc"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "What does output control mean in the Navigos report?",
        "options": [
          "Checking the results that AI produces, a skill many workers still lack",
          "Controlling who is allowed to leave the office before the shift ends",
          "Limiting how many pages a printer can produce in one working day"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "fountain-pen",
        "why": "Kiểm soát đầu ra là kiểm lại kết quả AI làm ra, kỹ năng nhiều người còn thiếu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does output control mean in the Navigos report?",
          "sub": "Kiểm soát đầu ra trong báo cáo Navigos nghĩa là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Checking what AI produces, a skill many workers still lack.",
          "sub": "Kiểm tra kết quả AI làm ra, kỹ năng nhiều người còn thiếu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Hoa's red pen, in one phrase.",
          "sub": "Cây bút đỏ của chị Hoa, gói trong một cụm từ."
        }
      ],
      "ref": "questions[15]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết năm việc bạn làm nhiều nhất tuần này"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This week, write down five tasks and mark the repeated ones.",
          "sub": "Tuần này, viết ra năm việc, đánh dấu việc lặp theo mẫu."
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
  "notes": "#145 bài MỚI (chuỗi experts-staying-relevant-with-ai, bài tổng) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để người xem đoán sai): “88% đã dùng AI tạo sinh — vậy phần lớn dùng giỏi?” → lặng 1,5 s → lật ở s02 (Navigos: phần lớn mới hỗ trợ cơ bản, p2). Dòng thời gian: MỘT TUẦN của chị Hoa (thứ Hai 8:00 Dũng nộp báo cáo AI → thứ Hai 10:00 tách nghề thành nhiệm vụ → thứ Ba thị trường VN → thứ Tư WEF + bút đỏ bắt tổng không khớp → thứ Năm chú Bình: phần cần người → thứ Sáu “Khoan đã!” dán bảng lương → thứ Bảy giao việc cho AI → Chủ nhật học lại cùng Bé Bin → thứ Hai tuần sau 8:00 cùng bàn). Nhân vật theo w145/_series/experts-staying-relevant-with-ai.md: chị Hoa (= chị Hương p15), chú Bình (= anh Tuấn p19), Dũng (đồng nghiệp trẻ dùng AI, minh hoạ intro), Bé Bin. Chi tiết minh hoạ tự đặt, không phải số liệu: tổng không khớp sổ (minh hoạ “kiểm soát đầu ra” p9), cảnh tua lại bỏ họ tên/số tài khoản (dẫn sang p17). Số chỉ từ bài: 88%, 76,8%, 38,8%, 26%, 89,45%, 69/67/61%, 39% đến 2030, khoảng 3.000 khoá, khoảng 1,8 triệu người học. Ngắt nhịp: BRK-08 s04 (sáu chặng), BRK-04 s06 (hiểu lầm p4), BRK-03 s09 (89,45%), BRK-02 s12 (tiêu đề Tuổi Trẻ p9), BRK-07 s14 (rehook), DLG-01 s17 (p15), BRK-10 s20 (rút ra p20). Tục ngữ: “Gừng càng già càng cay”. Câu đố questions[15]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
