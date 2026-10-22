// Kịch bản video W lần 3 (#110) — "Hiểu sếp thật sự cần nghe gì" · chuỗi "Báo cáo và thuyết trình trước sếp"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "know-what-your-boss-wants-to-hear--w01",
  "hook": "HOOK-09",
  "unit": {
    "audience": "presenting-to-managers",
    "slug": "know-what-your-boss-wants-to-hear",
    "door": "ky-nang",
    "level": "B1",
    "title": "Hiểu sếp thật sự cần nghe gì",
    "series": "Báo cáo và thuyết trình trước sếp"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Thảo và nhóm (Thứ Hai 9:00 giao ban → 10:00 hành lang → 14:00 năm mối lo → Thứ Ba 9:00 Dũng sửa lỗi, “Khoan đã!” → Thứ Tư 10:00 hỏi Dũng cách sếp thích nhận → 16:00 hỏi kèm phỏng đoán → Thứ Năm 9:00 họp, sếp xem điện thoại → 15:00 Dũng lên giám đốc khối → Thứ Hai tuần sau 9:00). Nhân vật (4, theo w145/_series/presenting-to-managers.md): Thảo (gộp “bạn” mở bài, Hoa p13, Thư p24), Dũng (Kiên p8, Bảo p20; đồng nghiệp lâu năm p11–p12), Cô Hoa (sếp “anh”, chị Lan p12 → “chị”), Bác Bình (giám đốc khối p20, người hỏi trong mẹo p3). Số liệu chỉ lấy từ bài: ba việc (p1), năm mối lo (p4), mười phút (p8), mười lăm phút hỏi đáp (p13), hai điều cho giám đốc khối (p20); “đúng hạn, hơi vượt chi phí” lấy từ câu đố questions[6]. Ngắt nhịp: BRK-04 (chỉ nói điều sếp muốn nghe ↔ nói cả rủi ro, p7), BRK-06 (dấu hiệu theo / chán, p22), BRK-07 (lên giám đốc khối). Khép vòng: giao ban Thứ Hai 9:00 — “Rốt cuộc em muốn chị làm gì?” (s01) → tuần sau Thảo mở đầu bằng việc cần sếp quyết (s29). Bản cũ: w145/bak/know-what-your-boss-wants-to-hear--w01.js.",
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
            "id": "a-q",
            "t": "text",
            "text": "“Rốt cuộc em muốn",
            "x": 60,
            "y": 110,
            "size": 96,
            "at": "l1:what",
            "color": "accent"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "chị làm gì?”",
            "x": 120,
            "y": 240,
            "size": 110,
            "at": "l1:want",
            "color": "accent",
            "hl": [
              {
                "text": "làm gì?",
                "at": "l1:do"
              }
            ]
          },
          {
            "id": "a-th",
            "t": "text",
            "text": "Ta tưởng: nói trôi chảy là đủ?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l2:smooth",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, in the end, what do you want me to do?",
          "sub": "Thế rốt cuộc em muốn chị làm gì?",
          "keys": [
            "rốt cuộc em muốn chị làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One question from the boss, after a week of prep and a smooth talk. Ouch.",
          "sub": "Một câu của sếp, sau cả tuần chuẩn bị và một bài nói trôi chảy. Đau chưa."
        }
      ],
      "ref": "intro"
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
            "at": "l2",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
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
            "at": "l1",
            "caption": "Thứ Hai 9:00 · họp giao ban",
            "icon": "page-facing-up"
          },
          {
            "id": "a-thx",
            "t": "strike",
            "over": "a-th",
            "at": "l4:knew"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "Nói chuyện mình biết nhất",
            "x": 70,
            "y": 530,
            "size": 54,
            "at": "l4:knew",
            "color": "muted"
          },
          {
            "id": "a-need",
            "t": "text",
            "text": "≠ chuyện sếp cần biết",
            "x": 70,
            "y": 620,
            "size": 54,
            "at": "l4:needed",
            "color": "accent",
            "hl": [
              {
                "text": "sếp cần biết",
                "at": "l4:needed"
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
          "say": "Meet Thảo, project coordinator, at Monday's team meeting.",
          "sub": "Đây là Thảo, điều phối dự án, trong buổi họp giao ban sáng thứ Hai.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "And that is everything we did this week.",
          "sub": "Dạ, đó là toàn bộ việc nhóm em làm tuần này ạ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "So, in the end, what do you want me to do?",
          "sub": "Thế rốt cuộc em muốn chị làm gì?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She talked about what she knew best, not what her boss needed.",
          "sub": "Cô nói chuyện mình biết nhiều nhất, không phải chuyện sếp cần biết.",
          "keys": [
            "chuyện sếp cần biết"
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
            "text": "Sếp thật sự cần nghe gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:really",
            "hl": [
              {
                "text": "cần nghe gì",
                "at": "l1:hear"
              }
            ]
          },
          {
            "id": "b-g",
            "t": "text",
            "text": "Đoán được, nếu nhìn vào:",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:guess",
            "hl": [
              {
                "text": "Đoán được",
                "at": "l2:guess"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Việc sếp phải quyết",
            "x": 2048,
            "y": 245,
            "size": 52,
            "at": "l3:decide",
            "color": "accent"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Điều sếp đang lo",
            "x": 2048,
            "y": 325,
            "size": 52,
            "at": "l3:worried",
            "color": "accent"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Cách sếp thích nhận",
            "x": 2048,
            "y": 405,
            "size": 52,
            "at": "l3:like",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does your boss really need to hear?",
          "sub": "Vậy sếp thật sự cần nghe gì?",
          "keys": [
            "cần nghe gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Good news: you can guess it quite well.",
          "sub": "Tin vui: điều đó đoán được khá chắc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Look at what they must decide, what they're worried about, and how they like to get information.",
          "sub": "Nhìn vào việc sếp phải quyết, điều sếp đang lo, và cách sếp thích nhận thông tin.",
          "keys": [
            "việc sếp phải quyết"
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
          }
        ],
        "items": [
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần của Thảo, Dũng · 8 chặng",
            "x": 2028,
            "y": 545,
            "size": 50,
            "at": "l1:week",
            "hl": [
              {
                "text": "8 chặng",
                "at": "l1:eight stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2228,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+620",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2428,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+840",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2628,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+1060",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2828,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+1280",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3028,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3228,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+1720",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3428,
            "y": 625,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+1940",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 10h",
            "x": 2044,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 14h",
            "x": 2244,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+740"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 9h",
            "x": 2444,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+960"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4 10h",
            "x": 2644,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1180"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4 16h",
            "x": 2844,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1400"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5 9h",
            "x": 3044,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T5 15h",
            "x": 3244,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1840"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T2 sau",
            "x": 3444,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+2060"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One week with Thảo and her team, eight stops, until next Monday's meeting.",
          "sub": "Một tuần với Thảo và nhóm của cô, tám chặng, tới buổi giao ban thứ Hai tuần sau.",
          "keys": [
            "tám chặng"
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
            "at": "l5",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 10:00 · Để làm gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4:corridor",
            "caption": "Thứ Hai 10:00 · hành lang",
            "icon": "hot-beverage"
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "Sếp nghe báo cáo để:",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l1:jobs"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "• nắm tình hình → bất thường?",
            "x": 4016,
            "y": 240,
            "size": 44,
            "at": "l2:going",
            "color": "accent",
            "hl": [
              {
                "text": "bất thường?",
                "at": "l2:unusual"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "• quyết định → lựa chọn + đề nghị",
            "x": 4016,
            "y": 310,
            "size": 44,
            "at": "l3:decide",
            "color": "accent"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "• báo lên trên → vài câu gọn",
            "x": 4016,
            "y": 380,
            "size": 44,
            "at": "l3:upward",
            "color": "accent",
            "hl": [
              {
                "text": "vài câu gọn",
                "at": "l3:few short lines"
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
          "say": "First stop: Monday, ten a.m. Most reports serve one of three jobs.",
          "sub": "Chặng một: mười giờ sáng thứ Hai. Hầu hết buổi báo cáo phục vụ một trong ba việc.",
          "keys": [
            "ba việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To know how things are going: is anything unusual?",
          "sub": "Để nắm tình hình: có gì bất thường không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To decide: options and your suggestion. To report upward: a few short lines to repeat.",
          "sub": "Để quyết định: các lựa chọn và đề nghị của bạn. Để báo lên trên: vài câu gọn để nói lại.",
          "keys": [
            "vài câu gọn để nói lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A small trick. In the corridor, Cô Hoa meets Bác Bình, the division director.",
          "sub": "Một mẹo nhỏ. Ngoài hành lang, cô Hoa gặp Bác Bình, giám đốc khối.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "So, how is Thảo's project doing?",
          "sub": "Dự án của Thảo thế nào rồi?",
          "face": "neutral"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Hmm…",
          "sub": "Ừm…",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The answer she gives there is the sentence you must help her say.",
          "sub": "Câu sếp trả lời ở đó chính là câu bạn cần giúp sếp nói được.",
          "keys": [
            "câu bạn cần giúp sếp nói được"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p1,p2,p3"
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
            "at": "l1:desk",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai 14:00 · 5 mối lo",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "memo",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:desk",
            "caption": "Thứ Hai 14:00 · tự trả lời",
            "icon": "memo"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l2:deadline",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 152,
            "size": 58,
            "at": "l2:deadline+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Kịp hạn?",
            "x": 6034,
            "y": 162,
            "size": 48,
            "at": "l2:deadline+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 250,
            "w": 46,
            "h": 46,
            "at": "l2:budget",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "!",
            "x": 5970,
            "y": 232,
            "size": 58,
            "at": "l2:budget+600",
            "color": "coral"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Vượt chi phí?",
            "x": 6034,
            "y": 242,
            "size": 48,
            "at": "l2:budget+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 330,
            "w": 46,
            "h": 46,
            "at": "l3:customers",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 312,
            "size": 58,
            "at": "l3:customers+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Khách, bộ phận khác?",
            "x": 6034,
            "y": 322,
            "size": 48,
            "at": "l3:customers+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 410,
            "w": 46,
            "h": 46,
            "at": "l3:risk",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 392,
            "size": 58,
            "at": "l3:risk+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Rủi ro sắp tới?",
            "x": 6034,
            "y": 402,
            "size": 48,
            "at": "l3:risk+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 490,
            "w": 46,
            "h": 46,
            "at": "l3:people",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 472,
            "size": 58,
            "at": "l3:people+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Đủ người?",
            "x": 6034,
            "y": 482,
            "size": 48,
            "at": "l3:people+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday afternoon. Back at her desk, Thảo learns what managers quietly worry about.",
          "sub": "Chặng hai: chiều thứ Hai. Về bàn, Thảo học điều người quản lý hay lo mà không nói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Will we meet the deadline? Will we go over budget?",
          "sub": "Có kịp hạn không? Có vượt chi phí không?",
          "keys": [
            "kịp hạn",
            "vượt chi phí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Are customers or other teams affected? Any risk coming? Enough people?",
          "sub": "Khách hàng, bộ phận khác có bị ảnh hưởng? Có rủi ro sắp tới? Đủ người không?"
        }
      ],
      "ref": "p4"
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
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
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
            "id": "d-top",
            "t": "text",
            "text": "Dòng “!” → nói ở đầu",
            "x": 5964,
            "y": 590,
            "size": 52,
            "at": "l3:top",
            "color": "coral",
            "hl": [
              {
                "text": "nói ở đầu",
                "at": "l3:top"
              }
            ]
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Dòng ổn → một câu",
            "x": 5964,
            "y": 680,
            "size": 52,
            "at": "l4:fine",
            "color": "accent",
            "hl": [
              {
                "text": "một câu",
                "at": "l4:one sentence"
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
          "say": "She answers each line for her own work.",
          "sub": "Cô tự trả lời từng dòng cho phần việc của mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "On time, but slightly over budget.",
          "sub": "Đúng hạn, nhưng hơi vượt chi phí.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A line with a problem goes at the top.",
          "sub": "Dòng nào có vấn đề thì nói ở đầu.",
          "keys": [
            "nói ở đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A line that's fine gets one sentence: this part is on plan.",
          "sub": "Dòng nào ổn chỉ cần một câu: phần này vẫn đúng kế hoạch.",
          "keys": [
            "một câu"
          ]
        }
      ],
      "ref": "p5"
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
          },
          {
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "text": "③ Thứ Ba 9:00 · Dũng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "gear",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Ba 9:00 · sau một đêm sửa lỗi",
            "icon": "gear"
          },
          {
            "id": "e-pr",
            "t": "text",
            "text": "Chi tiết kỹ thuật:",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l3:Technical"
          },
          {
            "id": "e-pr2",
            "t": "text",
            "text": "mình tự hào nhất",
            "x": 7972,
            "y": 250,
            "size": 48,
            "at": "l3:proudest",
            "color": "muted"
          },
          {
            "id": "e-pr3",
            "t": "text",
            "text": "sếp ít cần nhất",
            "x": 7972,
            "y": 330,
            "size": 48,
            "at": "l3:least",
            "color": "coral",
            "hl": [
              {
                "text": "ít cần nhất",
                "at": "l3:least"
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
          "say": "Third stop: Tuesday morning. Meet Dũng, the tech guy, who fixed a big customer's bug overnight.",
          "sub": "Chặng ba: sáng thứ Ba. Đây là Dũng, dân kỹ thuật, vừa thức đêm sửa lỗi phần mềm cho một khách lớn.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "That bug was beautiful. I can't wait to explain it!",
          "sub": "Con lỗi này đẹp lắm. Em nóng lòng giải thích quá!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Technical details: the part you're proudest of, and often the part your boss needs least.",
          "sub": "Chi tiết kỹ thuật: phần mình tự hào nhất, thường lại là phần sếp ít cần nhất.",
          "keys": [
            "sếp ít cần nhất"
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
      "ref": "p6"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "ref": "p8,p9",
      "data": {
        "set": "office",
        "label": "Thứ Ba 9:30 · bàn cô Hoa",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mở đầu bằng nguyên nhân kỹ thuật",
          "why": "Sếp lo nhất là tình trạng của khách; nguyên nhân và sơ đồ để dành khi sếp hỏi.",
          "rule": "Mình mê chuyện máy, sếp lo chuyện khách"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Dũng, how is the big customer's bug?",
          "sub": "Dũng, lỗi của khách lớn sao rồi?",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The bug started in the data sync. Let me draw a diagram for you…",
          "sub": "Dạ, lỗi bắt nguồn từ phần đồng bộ dữ liệu, em xin vẽ sơ đồ để chị dễ hình dung…",
          "face": "happy",
          "pose": "explain",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her biggest worry is the customer.",
          "sub": "Sếp lo nhất là khách.",
          "pose": "point",
          "keys": [
            "Sếp lo nhất là khách"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại nhé!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "The customer has worked normally since this morning. I sent them an apology.",
          "sub": "Dạ, khách đã dùng lại bình thường từ sáng nay, em đã gửi thư xin lỗi họ.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "If you like, I can explain the cause.",
          "sub": "Nếu chị muốn, em nói thêm nguyên nhân ạ.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Mê chuyện máy · lo chuyện khách",
            "x": 7932,
            "y": 430,
            "size": 48,
            "at": "l1:boss",
            "color": "accent",
            "hl": [
              {
                "text": "lo chuyện khách",
                "at": "l1:customer"
              }
            ]
          },
          {
            "id": "e-rd",
            "t": "text",
            "text": "Nguyên nhân: sẵn trong ghi chú",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l2:notes",
            "hl": [
              {
                "text": "sẵn",
                "at": "l2:ready"
              }
            ]
          },
          {
            "id": "e-ask",
            "t": "text",
            "text": "→ nói khi được hỏi",
            "x": 7972,
            "y": 600,
            "size": 46,
            "at": "l2:asked",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "We love the machine; the boss worries about the customer. Version two answers that first.",
          "sub": "Mình mê chuyện máy, sếp lo chuyện khách. Bản hai trả lời ngay điều đó.",
          "keys": [
            "sếp lo chuyện khách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The cause and the diagram? Keep them ready in your notes, and share when asked.",
          "sub": "Nguyên nhân, sơ đồ? Để sẵn trong ghi chú, nói khi được hỏi.",
          "keys": [
            "nói khi được hỏi"
          ]
        }
      ],
      "ref": "p6,p8,p9"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu sếp nghĩa là…",
        "wrong": "Chỉ nói điều sếp muốn nghe",
        "right": "Nói cả rủi ro, số không đẹp",
        "wrongIllus": "see-no-evil-monkey",
        "rightIllus": "warning"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Only say what the boss wants to hear?",
          "sub": "Chỉ nói điều sếp muốn nghe?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Risks and ugly numbers matter most.",
          "sub": "Không. Rủi ro, số không đẹp mới là điều sếp cần biết nhất.",
          "keys": [
            "cần biết nhất"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l3",
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
            "text": "④ Thứ Tư 10:00 · Cách nhận",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "open-book",
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Thứ Tư 10:00 · hỏi người làm lâu",
            "icon": "open-book"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Đọc trước ↔ nghe trực tiếp",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l1:read"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Con số ↔ ví dụ cụ thể",
            "x": 60,
            "y": 1340,
            "size": 48,
            "at": "l2:numbers"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Không kiểu nào đúng hơn",
            "x": 60,
            "y": 1420,
            "size": 48,
            "at": "l2:better",
            "color": "muted",
            "hl": [
              {
                "text": "đúng hơn",
                "at": "l2:better"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Để ý: hỏi gì đầu tiên?",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l2:first",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday. Some bosses read first, then ask. Others want it live.",
          "sub": "Chặng bốn: thứ Tư. Có sếp thích đọc trước rồi họp để hỏi. Có sếp thích nghe kể trực tiếp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Numbers first, or a real example? No style is better. Watch what your boss asks first.",
          "sub": "Con số trước hay ví dụ cụ thể? Không kiểu nào đúng hơn. Để ý sếp hay hỏi gì đầu tiên.",
          "keys": [
            "sếp hay hỏi gì đầu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "When you report to Cô Hoa, does she prefer the summary first, or the numbers?",
          "sub": "Khi báo cáo với chị Hoa, anh thấy chị ấy thích nghe tóm tắt trước hay xem số liệu trước ạ?",
          "face": "thinking",
          "to": "dung"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Our boss likes to read first.",
          "sub": "Dễ mà. Sếp mình thích đọc trước.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A colleague who's worked with the boss for years: the best map in the office.",
          "sub": "Đồng nghiệp làm lâu với sếp: tấm bản đồ quý nhất văn phòng.",
          "keys": [
            "tấm bản đồ quý nhất"
          ]
        }
      ],
      "ref": "p10,p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "f-lost",
            "t": "text",
            "text": "Nói kỹ trong họp → sếp hỏi lại",
            "x": 60,
            "y": 1610,
            "size": 44,
            "at": "l1:again",
            "color": "coral"
          },
          {
            "id": "f-pg",
            "t": "illus",
            "name": "page-facing-up",
            "x": 60,
            "y": 1690,
            "size": 80,
            "at": "l2:page"
          },
          {
            "id": "f-page",
            "t": "text",
            "text": "1 trang gửi từ chiều hôm trước",
            "x": 160,
            "y": 1705,
            "size": 44,
            "at": "l2:afternoon",
            "color": "accent",
            "hl": [
              {
                "text": "chiều hôm trước",
                "at": "l2:afternoon"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Nói đúng cách người nghe",
            "x": 60,
            "y": 1795,
            "size": 50,
            "at": "l3:listener",
            "hl": [
              {
                "text": "đúng cách người nghe",
                "at": "l3:listener"
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
          "say": "That explains it. In meetings, Thảo explains everything out loud, and the boss keeps asking again.",
          "sub": "Hoá ra vậy. Thảo hay trình bày kỹ bằng lời, và sếp cứ lơ đãng hỏi lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So this time, she sends a one-page summary the afternoon before.",
          "sub": "Nên lần này, cô gửi một trang tóm tắt từ chiều hôm trước.",
          "keys": [
            "một trang tóm tắt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Speaking well isn't enough. Speak the way your listener takes it in.",
          "sub": "Nói hay chưa đủ, phải nói đúng cách người nghe.",
          "keys": [
            "nói đúng cách người nghe"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư 16:00 · Hỏi lại",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
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
                  "id": "thao",
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
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
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
            "at": "l1:check",
            "caption": "Thứ Tư 16:00 · trước buổi chọn nhà cung cấp",
            "icon": "mobile-phone"
          },
          {
            "id": "g-g",
            "t": "text",
            "text": "Hỏi kèm phỏng đoán",
            "x": 2028,
            "y": 1260,
            "size": 54,
            "at": "l1:guess",
            "color": "accent",
            "hl": [
              {
                "text": "phỏng đoán",
                "at": "l1:guess"
              }
            ]
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "→ sếp chỉ cần gật / sửa",
            "x": 2068,
            "y": 1345,
            "size": 46,
            "at": "l4:nod",
            "hl": [
              {
                "text": "gật / sửa",
                "at": "l4:correct"
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
          "say": "Fifth stop: Wednesday, four p.m. Thảo needs to check one thing, so she asks with her own guess.",
          "sub": "Chặng năm: bốn giờ chiều thứ Tư. Thảo cần hỏi lại một điều, nên cô hỏi kèm phỏng đoán của mình.",
          "keys": [
            "kèm phỏng đoán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I understand you need to choose between two suppliers, so I'll compare price and delivery time. Is that enough?",
          "sub": "Em hiểu chị cần chọn giữa hai nhà cung cấp, nên em sẽ so giá và thời gian giao hàng, vậy đủ chưa ạ?",
          "pose": "explain",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Yes, that's enough.",
          "sub": "Ừ, vậy là đủ.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her boss only has to nod or correct. Five seconds, done.",
          "sub": "Sếp chỉ cần gật hoặc sửa. Năm giây là xong.",
          "keys": [
            "gật hoặc sửa"
          ]
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "g-self",
            "t": "text",
            "text": "Tự tìm được → đừng hỏi",
            "x": 2028,
            "y": 1450,
            "size": 46,
            "at": "l1:yourself",
            "color": "coral"
          },
          {
            "id": "g-ram",
            "t": "text",
            "text": "Hỏi lan man → đừng",
            "x": 2028,
            "y": 1530,
            "size": 46,
            "at": "l1:rambling",
            "color": "coral"
          },
          {
            "id": "g-1m",
            "t": "text",
            "text": "Sếp bận: 1 tin, đánh số",
            "x": 2028,
            "y": 1630,
            "size": 52,
            "at": "l2:message",
            "color": "accent",
            "hl": [
              {
                "text": "đánh số",
                "at": "l2:numbered"
              }
            ]
          },
          {
            "id": "g-care",
            "t": "text",
            "text": "Hỏi rõ trước khi làm = cẩn thận",
            "x": 2028,
            "y": 1730,
            "size": 44,
            "at": "l3:careful",
            "hl": [
              {
                "text": "cẩn thận",
                "at": "l3:careful"
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
          "say": "What looks unprepared? Asking what you could find yourself, or rambling questions.",
          "sub": "Điều làm bạn trông thiếu chuẩn bị: hỏi điều tự tìm ra được, hoặc hỏi lan man."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Boss busy? Put all your questions in one message, numbered.",
          "sub": "Sếp bận? Gom các câu hỏi vào một tin nhắn, đánh số rõ ràng.",
          "keys": [
            "một tin nhắn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Asking clearly before you start is the mark of a careful worker.",
          "sub": "Hỏi rõ trước khi làm là dấu hiệu của người làm việc cẩn thận.",
          "keys": [
            "người làm việc cẩn thận"
          ]
        }
      ],
      "ref": "p15,p17"
    },
    {
      "id": "s21",
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
            "text": "⑥ Thứ Năm 9:00 · Đọc dấu hiệu",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "page-facing-up",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meeting",
            "caption": "Thứ Năm 9:00 · sếp đã đọc trước",
            "icon": "mobile-phone"
          },
          {
            "id": "h-15",
            "t": "text",
            "text": "Họp chỉ còn 15 phút hỏi đáp",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l1:fifteen",
            "hl": [
              {
                "text": "15 phút",
                "at": "l1:fifteen"
              }
            ]
          },
          {
            "id": "h-ph",
            "t": "text",
            "text": "Sếp cúi xem điện thoại…",
            "x": 3996,
            "y": 1350,
            "size": 48,
            "at": "l2:phone",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Thursday. Cô Hoa read the page last night, so the meeting is just fifteen minutes of questions.",
          "sub": "Chặng sáu: thứ Năm. Cô Hoa đã đọc trang tóm tắt từ tối qua, nên buổi họp chỉ còn mười lăm phút hỏi đáp.",
          "keys": [
            "mười lăm phút hỏi đáp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then, mid-sentence, the boss looks down at her phone.",
          "sub": "Rồi, đang nói dở câu, sếp cúi xuống xem điện thoại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Uh oh. Bored? Or something else?",
          "sub": "Ối. Chán rồi? Hay chuyện gì khác?"
        }
      ],
      "ref": "p13,p22"
    },
    {
      "id": "s22",
      "module": "BRK-06",
      "data": {
        "title": "Sếp đang theo, hay đã chán?",
        "items": [
          {
            "illus": "check-mark-button",
            "text": "Gật, ghi chép"
          },
          {
            "illus": "red-question-mark",
            "text": "Hỏi thêm"
          },
          {
            "illus": "mobile-phone",
            "text": "Xem điện thoại"
          },
          {
            "illus": "page-facing-up",
            "text": "Lật trang khác"
          },
          {
            "illus": "alarm-clock",
            "text": "Nhìn đồng hồ"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nodding, notes, questions: they're with you.",
          "sub": "Gật đầu, ghi chép, hỏi thêm: sếp đang theo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Phone, flipping pages, the clock: maybe you're somewhere they don't need.",
          "sub": "Điện thoại, lật trang, nhìn đồng hồ: có thể bạn đang ở chỗ sếp không cần.",
          "keys": [
            "chỗ sếp không cần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s23",
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
            "at": "a1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "b2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-a",
            "t": "text",
            "text": "A: nói nhanh cho hết",
            "x": 3996,
            "y": 1450,
            "size": 48,
            "at": "a1:faster",
            "color": "muted"
          },
          {
            "id": "h-ax",
            "t": "strike",
            "over": "h-a",
            "at": "a2:misses"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ sót ý, số lệch không ai biết",
            "x": 4036,
            "y": 1530,
            "size": 40,
            "at": "a2:misses",
            "color": "coral"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: dừng một nhịp, hỏi thẳng",
            "x": 3996,
            "y": 1620,
            "size": 48,
            "at": "b1:checking",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Đừng đoán ý sếp, hãy hỏi",
            "x": 3996,
            "y": 1730,
            "size": 52,
            "at": "b2:guess",
            "color": "accent",
            "hl": [
              {
                "text": "hãy hỏi",
                "at": "b2:ask"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "a1",
          "lang": "en",
          "who": "det",
          "say": "Version A: Thảo panics and talks faster.",
          "sub": "Bản A: Thảo hoảng, nói nhanh hơn.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "det",
          "say": "She misses a key point. Later she learns the boss was checking a number that didn't match accounting.",
          "sub": "Cô sót một ý quan trọng. Sau họp mới biết sếp đang tra một con số lệch với phòng kế toán.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Which number are you checking?",
          "sub": "Chị đang cần kiểm tra số nào ạ?",
          "phase": "b",
          "face": "thinking",
          "to": "hoa"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "det",
          "say": "They find the mismatch, fix it on the spot, and go on. Don't guess your boss's mind, ask it.",
          "sub": "Hai người tìm ra chỗ lệch, xử lý ngay trong buổi họp, rồi đi tiếp. Đừng đoán ý sếp, hãy hỏi ý sếp.",
          "phase": "b",
          "keys": [
            "hãy hỏi ý sếp"
          ]
        }
      ],
      "ref": "p23,p24,p25"
    },
    {
      "id": "s24",
      "module": "BRK-07",
      "data": {
        "question": "Cùng kế hoạch ấy, lên giám đốc khối thì sao?",
        "illus": "office-building"
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
          "say": "Same plan, but now for the division director?",
          "sub": "Cùng kế hoạch ấy, lên giám đốc khối thì sao?",
          "keys": [
            "giám đốc khối"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s26",
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
            "at": "l3",
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
          },
          {
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm 15:00 · Sếp lớn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "chart-increasing",
                "money-bag"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:plan",
            "caption": "Thứ Năm 15:00 · với giám đốc khối",
            "icon": "office-building"
          },
          {
            "id": "i-dir",
            "t": "text",
            "text": "Trực tiếp: tiến độ, vướng mắc",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l1:detailed"
          },
          {
            "id": "i-big",
            "t": "text",
            "text": "Cấp cao: bức tranh rộng, ít giờ",
            "x": 5964,
            "y": 1335,
            "size": 44,
            "at": "l2:picture",
            "color": "accent",
            "hl": [
              {
                "text": "bức tranh rộng",
                "at": "l2:big picture"
              }
            ]
          },
          {
            "id": "i-old",
            "t": "text",
            "text": "Việc 1, tuần 1…",
            "x": 5964,
            "y": 1430,
            "size": 48,
            "at": "l3:Task",
            "color": "muted"
          },
          {
            "id": "i-oldx",
            "t": "strike",
            "over": "i-old",
            "at": "l4:opening"
          },
          {
            "id": "i-new",
            "t": "text",
            "text": "① Giúp gì mục tiêu năm?",
            "x": 5964,
            "y": 1520,
            "size": 48,
            "at": "l5:goal",
            "color": "accent"
          },
          {
            "id": "i-new2",
            "t": "text",
            "text": "② Cần bao nhiêu tiền?",
            "x": 5964,
            "y": 1600,
            "size": 48,
            "at": "l6:money",
            "color": "accent",
            "hl": [
              {
                "text": "bao nhiêu tiền",
                "at": "l6:money"
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
          "say": "Seventh stop: Thursday afternoon. Cô Hoa praised Dũng's quarterly plan: detailed, clear.",
          "sub": "Chặng bảy: chiều thứ Năm. Kế hoạch quý của Dũng được cô Hoa khen: chi tiết, rõ ràng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now the same plan goes to Bác Bình. Directors need the big picture, and have less time.",
          "sub": "Giờ cùng kế hoạch ấy lên Bác Bình. Giám đốc cần bức tranh rộng, và có ít thời gian hơn.",
          "keys": [
            "bức tranh rộng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "First, let me show each task of our team. Task one, week one…",
          "sub": "Trước hết em xin trình bày từng việc của nhóm. Việc thứ nhất, tuần thứ nhất…",
          "pose": "explain",
          "to": "binh"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep the content, but redo the opening.",
          "sub": "Nội dung giữ được, nhưng mở đầu nên làm lại.",
          "keys": [
            "mở đầu nên làm lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "First, how this plan helps our goal for the year.",
          "sub": "Thứ nhất, kế hoạch này giúp gì cho mục tiêu năm.",
          "pose": "explain",
          "to": "binh"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Second, how much money it needs. The details are at the back.",
          "sub": "Thứ hai, cần bao nhiêu tiền. Phần chi tiết em để phía sau ạ.",
          "face": "happy",
          "to": "binh"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Change the listener, change the opening.",
          "sub": "Đổi người nghe, đổi cách mở đầu.",
          "keys": [
            "Đổi người nghe, đổi cách mở đầu"
          ]
        }
      ],
      "ref": "p18,p20,p21"
    },
    {
      "id": "s27",
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
            "id": "i-ask",
            "t": "text",
            "text": "Hỏi trước: “Giám đốc quan tâm gì?”",
            "x": 5964,
            "y": 1700,
            "size": 42,
            "at": "l1:care",
            "hl": [
              {
                "text": "quan tâm gì",
                "at": "l1:care"
              }
            ]
          },
          {
            "id": "i-cut",
            "t": "text",
            "text": "Bớt chi tiết · thêm kết quả",
            "x": 5964,
            "y": 1780,
            "size": 46,
            "at": "l2:details",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Smart move: before that meeting, he asked Cô Hoa what the director would care about most.",
          "sub": "Nước đi khôn: trước buổi đó, anh đã hỏi cô Hoa giám đốc sẽ quan tâm nhất điều gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Higher up: fewer details, more results, and the decision needed.",
          "sub": "Lên cấp cao hơn: bớt chi tiết, nói nhiều hơn về kết quả và quyết định cần có.",
          "keys": [
            "quyết định cần có"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s29",
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
            "text": "⑧ Thứ Hai sau · 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Last"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
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
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
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
            "at": "l1:meeting",
            "caption": "Thứ Hai tuần sau 9:00 · cùng phòng họp",
            "icon": "page-facing-up"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Câu đầu: sếp cần làm gì?",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:need you",
            "color": "accent",
            "hl": [
              {
                "text": "sếp cần làm gì",
                "at": "l2:decide"
              }
            ]
          },
          {
            "id": "j-log",
            "t": "text",
            "text": "Sổ câu sếp hay hỏi",
            "x": 7932,
            "y": 1360,
            "size": 48,
            "at": "l5:notebook",
            "hl": [
              {
                "text": "hay hỏi",
                "at": "l5:questions"
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
          "say": "Last stop: next Monday, nine a.m. Same room, same meeting.",
          "sub": "Chặng cuối: chín giờ sáng thứ Hai tuần sau. Cùng phòng, cùng buổi giao ban."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "This week I need you to decide one thing: we're slightly over budget. Here are two options.",
          "sub": "Tuần này em cần chị quyết một việc: dự án hơi vượt chi phí. Em có hai phương án ạ.",
          "face": "happy",
          "pose": "explain",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Clear. Option two.",
          "sub": "Rõ rồi. Phương án hai.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last week: what do you want me to do? This week, Thảo says it first.",
          "sub": "Tuần trước: rốt cuộc em muốn chị làm gì? Tuần này, Thảo nói câu đó trước.",
          "keys": [
            "Thảo nói câu đó trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Her secret: a notebook of the boss's questions. They repeat, and become the list of what she needs.",
          "sub": "Bí quyết: cuốn sổ ghi các câu sếp hỏi. Chúng lặp lại, thành danh sách điều sếp thật sự cần nghe.",
          "keys": [
            "điều sếp thật sự cần nghe"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s30",
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
            "id": "j-fb",
            "t": "text",
            "text": "“Dài quá” → dài ở đâu?",
            "x": 7932,
            "y": 1450,
            "size": 50,
            "at": "l1:long",
            "color": "coral",
            "hl": [
              {
                "text": "dài ở đâu?",
                "at": "l1:which part"
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
          "say": "And when the boss says 'too long', ask: which part should I make shorter next time?",
          "sub": "Sếp góp ý “dài quá” thì hỏi: lần sau em nên làm ngắn phần nào ạ?",
          "keys": [
            "làm ngắn phần nào"
          ]
        }
      ],
      "ref": "p27"
    },
    {
      "id": "s31",
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
            "at": "l1:decide",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:worries",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:read",
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
            "x": 5536,
            "y": 40,
            "at": "l1:decide"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 40,
            "at": "l2:worries"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1130,
            "at": "l3:read"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: is this meeting to stay informed, to decide, or to report upward?",
          "sub": "Tóm lại: buổi này để nắm tình hình, ra quyết định, hay báo lên trên?",
          "keys": [
            "ra quyết định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Answer the five worries yourself. Problems first, the rest in one line.",
          "sub": "Tự trả lời năm mối lo. Vấn đề nói trước, phần ổn một câu.",
          "keys": [
            "năm mối lo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know if your boss likes to read first or hear it live, and fit your opening to the listener.",
          "sub": "Biết sếp thích đọc trước hay nghe trực tiếp, và đổi câu mở theo người nghe.",
          "keys": [
            "đổi câu mở theo người nghe"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your boss doesn't need you to say more. They need you to say it on target.",
          "sub": "Sếp không cần bạn nói nhiều hơn, mà cần bạn nói trúng hơn.",
          "keys": [
            "nói trúng hơn"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p28,outro"
    },
    {
      "id": "s40",
      "module": "QUIZ-01",
      "ref": "questions[6]",
      "data": {
        "q": "Your project is on time but slightly over budget, how should you report it?",
        "options": [
          "Talk about the timing in detail, and mention the budget only if someone asks",
          "Mention the budget problem first, and say in one line that timing is on plan",
          "Hide the budget issue until it gets bigger, so the report sounds more positive"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "money-bag",
        "why": "Dòng nào có vấn đề thì nói ở đầu, dòng nào ổn chỉ cần một câu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your project is on time but slightly over budget, how should you report it?",
          "sub": "Dự án của bạn đúng hạn nhưng hơi vượt chi phí, nên báo cáo thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Mention the budget problem first, and say in one line that timing is on plan.",
          "sub": "Nói vấn đề chi phí trước, một câu cho phần tiến độ vẫn đúng kế hoạch."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Problems go first. Things that are fine get one sentence.",
          "sub": "Dòng có vấn đề nói ở đầu, dòng ổn chỉ cần một câu."
        }
      ]
    },
    {
      "id": "s42",
      "module": "END-05",
      "data": {
        "text": "Trước buổi tới: sếp cần làm gì?",
        "sub": "Viết câu trả lời, đặt lên đầu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before your next report, write: after this, what must my boss be able to do? Then try the forty questions below!",
          "sub": "Trước buổi tới, viết ra: sau buổi này, sếp cần làm được gì? Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s29"
  }
};
