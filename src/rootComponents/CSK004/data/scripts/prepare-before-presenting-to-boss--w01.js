// Kịch bản video W lần 3 (#110) — "Cần chuẩn bị những gì trước khi báo cáo, thuyết trình với sếp?" · chuỗi "Báo cáo và thuyết trình trước sếp"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "prepare-before-presenting-to-boss--w01",
  "hook": "HOOK-08",
  "unit": {
    "audience": "presenting-to-managers",
    "slug": "prepare-before-presenting-to-boss",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cần chuẩn bị những gì trước khi báo cáo, thuyết trình với sếp?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Thảo (Thứ Hai 9:00 nhận việc → 9:15 hỏi lại → 14:00 xếp ý → 16:00 Dũng tập đề xuất → Thứ Ba 10:00 slide → 15:00 “Khoan đã!” tin xấu → 15:30 → Thứ Tư tối tập to → Thứ Năm 9:00 họp → 16:00 gửi tóm tắt). Nhân vật (4, theo w145/_series/presenting-to-managers.md): Thảo (gộp “bạn” mở bài, Hằng p4, Châu p18, Khánh p24), Dũng (Phúc p10), Cô Hoa (sếp “anh” → “chị”), Bác Bình (anh Tổng p4, ban giám đốc p24). Số liệu chỉ lấy từ bài: 20 trang (p4), phút thứ mười (p10), trễ một tuần (p16), 15 phút / mở đầu 7 phút gấp đôi → 3 phút → ~12 phút (p24), năm phút tự hỏi (p32). Ngắt nhịp: BRK-02 (không phải buổi nào cũng cần slide), BRK-03 (7 phút mở đầu), BRK-07 (sếp ngắt lời). Khép vòng: bàn làm việc — Thứ Hai nhận lời giao, định soạn 20 trang (s01) → Thứ Năm 16:00 gửi lại một trang tóm tắt (s28–s29). Bản cũ: w145/bak/prepare-before-presenting-to-boss--w01.js.",
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
            "id": "a-20",
            "t": "text",
            "text": "20 trang",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:Twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 trang",
                "at": "l1:pages"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "quy trình · cho một buổi báo cáo",
            "x": 70,
            "y": 320,
            "size": 46,
            "at": "l1:team"
          },
          {
            "id": "a-th",
            "t": "text",
            "text": "Ta tưởng: càng dày càng chắc?",
            "x": 70,
            "y": 420,
            "size": 54,
            "at": "l2:thicker",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twenty pages on how the team works. That's how many of us prepare to report.",
          "sub": "Hai mươi trang về quy trình của nhóm. Nhiều người chuẩn bị báo cáo như thế.",
          "keys": [
            "Hai mươi trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The thicker the file, the safer we feel.",
          "sub": "Tập càng dày, càng thấy yên tâm.",
          "keys": [
            "càng thấy yên tâm"
          ]
        }
      ],
      "ref": "p4"
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
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "walk",
                  "at": "l3"
                }
              ],
              "props": [
                "laptop",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 9:00 · văn phòng",
            "icon": "page-facing-up"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Chuẩn bị từ đâu?",
            "x": 70,
            "y": 540,
            "size": 60,
            "at": "l5:start",
            "color": "accent",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l5:start"
              }
            ]
          },
          {
            "id": "a-thx",
            "t": "strike",
            "over": "a-th",
            "at": "l6:Hold"
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
          "say": "She runs a new warehouse project: software, scanners, mountains of data.",
          "sub": "Cô điều phối dự án kho mới: phần mềm, máy quét mã vạch, cả núi dữ liệu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, her manager, who hears reports all day.",
          "sub": "Còn đây là cô Hoa, trưởng phòng, ngày nào cũng nghe báo cáo nối báo cáo.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, on Thursday please present the project status.",
          "sub": "Thảo, thứ Năm em trình bày tình hình dự án nhé.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "My heart is racing. Where do I start? Twenty pages tonight!",
          "sub": "Tim em đập nhanh rồi. Chuẩn bị từ đâu đây? Tối nay soạn hai mươi trang!",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Hold that thought.",
          "sub": "Khoan, giữ ý đó lại.",
          "keys": [
            "giữ ý đó lại"
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
            "text": "Gặp sếp: chuẩn bị gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:prepare",
            "hl": [
              {
                "text": "chuẩn bị gì",
                "at": "l1:prepare"
              }
            ]
          },
          {
            "id": "b-n0",
            "t": "text",
            "text": "1.",
            "x": 2028,
            "y": 230,
            "size": 46,
            "at": "l3:decide",
            "color": "accent"
          },
          {
            "id": "b-t0",
            "t": "text",
            "text": "Biết sếp cần quyết gì",
            "x": 2088,
            "y": 230,
            "size": 46,
            "at": "l3:decide+200"
          },
          {
            "id": "b-n1",
            "t": "text",
            "text": "2.",
            "x": 2028,
            "y": 292,
            "size": 46,
            "at": "l3:conclusion",
            "color": "accent"
          },
          {
            "id": "b-t1",
            "t": "text",
            "text": "Nói kết luận trước",
            "x": 2088,
            "y": 292,
            "size": 46,
            "at": "l3:conclusion+200"
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "3.",
            "x": 2028,
            "y": 354,
            "size": 46,
            "at": "l4:numbers",
            "color": "accent"
          },
          {
            "id": "b-t2",
            "t": "text",
            "text": "Có sẵn số liệu",
            "x": 2088,
            "y": 354,
            "size": 46,
            "at": "l4:numbers+200"
          },
          {
            "id": "b-n3",
            "t": "text",
            "text": "4.",
            "x": 2028,
            "y": 416,
            "size": 46,
            "at": "l4:out loud",
            "color": "accent"
          },
          {
            "id": "b-t3",
            "t": "text",
            "text": "Tập nói to một lần",
            "x": 2088,
            "y": 416,
            "size": 46,
            "at": "l4:out loud+200"
          },
          {
            "id": "b-n4",
            "t": "text",
            "text": "5.",
            "x": 2028,
            "y": 478,
            "size": 46,
            "at": "l4:summary",
            "color": "accent"
          },
          {
            "id": "b-t4",
            "t": "text",
            "text": "Gửi tóm tắt sau họp",
            "x": 2088,
            "y": 478,
            "size": 46,
            "at": "l4:summary+200"
          },
          {
            "id": "b-r",
            "t": "ring",
            "around": [
              "b-t0"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:decide+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what should you prepare before reporting to your boss?",
          "sub": "Vậy trước khi báo cáo với sếp, cần chuẩn bị những gì?",
          "keys": [
            "chuẩn bị những gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know what your boss must decide, and say your conclusion first.",
          "sub": "Biết sếp cần quyết điều gì, và nói kết luận trước.",
          "keys": [
            "sếp cần quyết điều gì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Have numbers ready, practise out loud once, send a summary after.",
          "sub": "Có sẵn số liệu, tập nói to một lần, và gửi lại tóm tắt sau buổi họp.",
          "keys": [
            "tập nói to một lần"
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
            "text": "1 tuần của Thảo · 8 chặng",
            "x": 2028,
            "y": 550,
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
            "color": "coral",
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
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 9:15",
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
            "text": "T2 16h",
            "x": 2444,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+960"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T3 10h",
            "x": 2644,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1180"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T3 15h",
            "x": 2844,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1400"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T4 tối",
            "x": 3044,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T5 9h",
            "x": 3244,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+1840"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T5 16h",
            "x": 3444,
            "y": 645,
            "size": 36,
            "at": "l1:eight stops+2060"
          },
          {
            "id": "b-ser",
            "t": "text",
            "text": "Bản đồ của cả chuỗi",
            "x": 3048,
            "y": 550,
            "size": 44,
            "at": "l1:map",
            "color": "muted",
            "hl": [
              {
                "text": "cả chuỗi",
                "at": "l1:series"
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
          "say": "The map of the whole series: Thảo's week, eight stops, Monday to Thursday.",
          "sub": "Bản đồ của cả chuỗi: tuần làm việc của Thảo, tám chặng, thứ Hai đến thứ Năm.",
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
            "at": "l2",
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
            "text": "① Thứ Hai 9:15 · Hỏi lại",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:goes",
            "caption": "Thứ Hai 9:15 · bàn cô Hoa",
            "icon": "red-question-mark"
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "Hỏi lại 3 điều:",
            "x": 3996,
            "y": 160,
            "size": 54,
            "at": "l2",
            "hl": [
              {
                "text": "3 điều",
                "at": "l5:Three"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "• Để làm gì?",
            "x": 4016,
            "y": 240,
            "size": 52,
            "at": "l2:update",
            "color": "accent"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "• Bao nhiêu phút?",
            "x": 4016,
            "y": 315,
            "size": 52,
            "at": "l3:minutes",
            "color": "accent"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "• Ai sẽ nghe?",
            "x": 4016,
            "y": 390,
            "size": 52,
            "at": "l3:attend",
            "color": "accent"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "→ dài/ngắn · sâu/khái quát",
            "x": 3996,
            "y": 480,
            "size": 46,
            "at": "l5:long",
            "hl": [
              {
                "text": "sâu/khái quát",
                "at": "l5:deep"
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
          "say": "First stop: Monday, nine fifteen. Thảo goes back to ask.",
          "sub": "Chặng một: chín giờ mười lăm thứ Hai. Chưa mở máy, Thảo quay lại hỏi.",
          "keys": [
            "quay lại hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Do you need a progress update, or do you need to decide something?",
          "sub": "Buổi này chị cần em cập nhật tiến độ, hay cần chị quyết một việc ạ?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "About how many minutes do I have? And who else will attend?",
          "sub": "Em có khoảng bao nhiêu phút ạ? Ngoài chị còn ai dự không ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Fifteen minutes. Bác Bình, the division director, joins too.",
          "sub": "Mười lăm phút. Bác Bình, giám đốc khối, cũng dự.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three answers decide: long or short, deep or general.",
          "sub": "Ba câu trả lời quyết định tất cả: nói dài hay ngắn, sâu hay khái quát.",
          "keys": [
            "dài hay ngắn, sâu hay khái quát"
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
      "ref": "p1,p2"
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
            "at": 0,
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
            "id": "c-bb",
            "t": "text",
            "text": "Bác Bình: kịp hạn? thêm người?",
            "x": 3996,
            "y": 590,
            "size": 48,
            "at": "l3:deadline",
            "color": "coral",
            "hl": [
              {
                "text": "kịp hạn?",
                "at": "l3:deadline"
              }
            ]
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "→ trang đầu · quy trình: phụ lục",
            "x": 4816,
            "y": 700,
            "size": 40,
            "at": "l4:page one",
            "hl": [
              {
                "text": "trang đầu",
                "at": "l4:page one"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Hỏi đúng, khỏi nói thừa",
            "x": 3996,
            "y": 700,
            "size": 50,
            "at": "l5:right question",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi nói thừa",
                "at": "l5:too much"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One more: what does Bác Bình need to know to decide?",
          "sub": "Thêm một câu: bác Bình cần biết gì để quyết định ạ?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "In short: will we meet the deadline? Do we need more people?",
          "sub": "Tóm lại: có kịp hạn không, có cần thêm người không."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That answer goes on page one. The process becomes an appendix.",
          "sub": "Vậy câu trả lời ấy lên trang đầu. Phần quy trình co lại thành vài trang phụ lục.",
          "keys": [
            "lên trang đầu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask the right question first, and you won't say too much later.",
          "sub": "Hỏi đúng câu trước, khỏi nói thừa sau.",
          "keys": [
            "Hỏi đúng câu trước"
          ]
        }
      ],
      "ref": "p3,p4,p5"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai 14:00 · Xếp ý",
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
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:orders",
            "caption": "Thứ Hai 14:00 · sắp xếp nội dung",
            "icon": "memo"
          },
          {
            "id": "d-old",
            "t": "text",
            "text": "Tháng Một… ý chính cuối",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:January",
            "color": "muted"
          },
          {
            "id": "d-oldx",
            "t": "strike",
            "over": "d-old",
            "at": "l4:cut"
          },
          {
            "id": "d-cut",
            "t": "text",
            "text": "→ bị ngắt trước khi tới",
            "x": 6004,
            "y": 235,
            "size": 46,
            "at": "l4:cut",
            "color": "coral",
            "hl": [
              {
                "text": "bị ngắt",
                "at": "l4:cut"
              }
            ]
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "Kết luận → lý do → chi tiết",
            "x": 5964,
            "y": 325,
            "size": 52,
            "at": "l5:Conclusion",
            "color": "accent",
            "hl": [
              {
                "text": "Kết luận",
                "at": "l5:Conclusion"
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
          "say": "Second stop: Monday afternoon. Thảo orders her content.",
          "sub": "Chặng hai: chiều thứ Hai. Thảo sắp xếp nội dung."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll start from January, then the problems, my point at the end. Like a story!",
          "sub": "Em kể từ tháng Một, rồi khó khăn, ý chính để cuối. Như kể chuyện ấy!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bosses hear many reports a day. Main point last? You get cut off first. Dessert after the guests left.",
          "sub": "Sếp nghe nhiều báo cáo một ngày. Ý chính để cuối dễ bị ngắt trước khi kịp nói tới. Tráng miệng bưng ra khi khách đã về.",
          "keys": [
            "bị ngắt trước khi kịp nói tới"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Conclusion first, reasons next, details when asked.",
          "sub": "Kết luận trước, lý do sau, chi tiết để dành khi được hỏi.",
          "keys": [
            "Kết luận trước"
          ]
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-fr",
            "t": "text",
            "text": "Khung cho mọi buổi báo cáo:",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l1:frame",
            "hl": [
              {
                "text": "mọi buổi",
                "at": "l1:any report"
              }
            ]
          },
          {
            "id": "d-n0",
            "t": "text",
            "text": "1.",
            "x": 5964,
            "y": 485,
            "size": 46,
            "at": "l1:sentence",
            "color": "accent"
          },
          {
            "id": "d-t0",
            "t": "text",
            "text": "Kết luận / đề nghị: 1 câu",
            "x": 6024,
            "y": 485,
            "size": 46,
            "at": "l1:sentence+200"
          },
          {
            "id": "d-n1",
            "t": "text",
            "text": "2.",
            "x": 5964,
            "y": 547,
            "size": 46,
            "at": "l2:reasons",
            "color": "accent"
          },
          {
            "id": "d-t1",
            "t": "text",
            "text": "2–3 lý do chính",
            "x": 6024,
            "y": 547,
            "size": 46,
            "at": "l2:reasons+200"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "3.",
            "x": 5964,
            "y": 609,
            "size": 46,
            "at": "l2:approve",
            "color": "accent"
          },
          {
            "id": "d-t2",
            "t": "text",
            "text": "Sếp: duyệt · chọn · biết",
            "x": 6024,
            "y": 609,
            "size": 46,
            "at": "l2:approve+200"
          },
          {
            "id": "d-num",
            "t": "text",
            "text": "Vài số + “nghĩa là gì”",
            "x": 5964,
            "y": 690,
            "size": 46,
            "at": "l4:Numbers",
            "color": "coral",
            "hl": [
              {
                "text": "nghĩa là gì",
                "at": "l4:mean"
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
          "say": "A simple frame for any report. One: your conclusion or request, in one sentence.",
          "sub": "Một khung cho mọi buổi báo cáo. Một: kết luận hoặc đề nghị, gói trong một câu.",
          "keys": [
            "một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: two or three main reasons. Three: what you need. Approve, choose, or just know.",
          "sub": "Hai: hai ba lý do chính. Ba: việc cần sếp làm: duyệt, chọn, hay chỉ cần biết.",
          "keys": [
            "duyệt, chọn, hay chỉ cần biết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Numbers? Pick the few that matter, say what they mean. Don't read the whole table.",
          "sub": "Có số liệu? Chọn vài con số quan trọng nhất, nói chúng nghĩa là gì. Đừng đọc cả bảng.",
          "keys": [
            "nghĩa là gì"
          ]
        }
      ],
      "ref": "p7,p8,p9"
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
            "at": "a1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Hai 16:00 · Dũng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
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
              "left": {
                "label": "Kể bối cảnh trước",
                "ok": false
              },
              "right": {
                "label": "Nói đề xuất trước",
                "ok": true
              }
            },
            "at": "l2:versions",
            "caption": "Thứ Hai 16:00 · tập với cô Hoa",
            "icon": "speaking-head"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: kể bối cảnh trước",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "a1:market",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ phút 10: “Vào ý chính đi”",
            "x": 7972,
            "y": 250,
            "size": 44,
            "at": "a2:main point",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: nói đề xuất trước",
            "x": 7932,
            "y": 340,
            "size": 50,
            "at": "b1:suggest",
            "color": "accent"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ sếp biết ngay cần quyết gì",
            "x": 7972,
            "y": 420,
            "size": 44,
            "at": "b2:explain",
            "hl": [
              {
                "text": "biết ngay",
                "at": "b2:explain"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Ý chính trước, chuyện sau",
            "x": 7932,
            "y": 560,
            "size": 58,
            "at": "b3:story",
            "color": "accent",
            "hl": [
              {
                "text": "Ý chính trước",
                "at": "b3:follows"
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
          "say": "Third stop: four p.m. Meet Dũng, the tech guy, quick as a scanner beep.",
          "sub": "Chặng ba: bốn giờ chiều. Đây là Dũng, đồng nghiệp kỹ thuật, nhanh như tiếng bíp máy quét.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He has a proposal too. Two versions.",
          "sub": "Anh cũng có một đề xuất. Xem hai phiên bản."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "The market changed a lot this year. Our project started in January…",
          "sub": "Dạ, thị trường năm nay nhiều biến động, dự án mình bắt đầu từ đầu năm…",
          "phase": "a",
          "pose": "explain"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "hoa",
          "say": "Please get to the main point.",
          "sub": "Em vào ý chính đi.",
          "phase": "a",
          "face": "thinking"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "I suggest hiring one more salesperson from next month.",
          "sub": "Em đề xuất tuyển thêm một nhân viên bán hàng từ tháng sau.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "We can't reply to buyers in time. Let me explain why.",
          "sub": "Nhóm không kịp trả lời khách hỏi mua. Em xin trình bày lý do ạ.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "b3",
          "lang": "en",
          "say": "Main point first. The story follows.",
          "sub": "Ý chính đi trước, câu chuyện theo sau.",
          "phase": "b",
          "who": "det"
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s11",
      "module": "BRK-02",
      "data": {
        "kicker": "Thứ Ba",
        "title": "Không phải buổi nào cũng cần slide",
        "hl": "cần slide",
        "sub": "Cập nhật ngắn: một tin nhắn, hoặc một trang giấy"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Not every meeting needs slides.",
          "sub": "Không phải buổi nào cũng cần slide.",
          "keys": [
            "cần slide"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A short update may need just a message, or one page.",
          "sub": "Cập nhật ngắn có khi chỉ cần một tin nhắn, hoặc một trang giấy."
        }
      ],
      "ref": "p12"
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
            "text": "④ Thứ Ba 10:00 · Slide?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Tuesday"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:slides",
            "caption": "Thứ Ba 10:00 · mở máy",
            "icon": "laptop"
          },
          {
            "id": "f-all",
            "t": "text",
            "text": "Slide cho từng việc",
            "x": 60,
            "y": 1255,
            "size": 48,
            "at": "l2:every",
            "color": "muted"
          },
          {
            "id": "f-allx",
            "t": "strike",
            "over": "f-all",
            "at": "l3:pictures"
          },
          {
            "id": "f-use",
            "t": "text",
            "text": "Khi cần: hình · so sánh · bảng số",
            "x": 60,
            "y": 1335,
            "size": 42,
            "at": "l3:pictures",
            "hl": [
              {
                "text": "hình · so sánh · bảng số",
                "at": "l3:table"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "• Mỗi slide 1 ý",
            "x": 60,
            "y": 1420,
            "size": 50,
            "at": "l4:One idea"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• Tiêu đề = câu kết luận",
            "x": 60,
            "y": 1495,
            "size": 50,
            "at": "l4:title",
            "color": "accent",
            "hl": [
              {
                "text": "câu kết luận",
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
          "say": "Fourth stop: Tuesday morning. Now, slides.",
          "sub": "Chặng bốn: sáng thứ Ba. Giờ Thảo mới mở phần mềm làm slide."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Should I make a slide for every single task?",
          "sub": "Em làm slide cho từng việc một nhé?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Slides are for pictures, comparisons, or a table of numbers.",
          "sub": "Slide dành cho hình ảnh, so sánh hay một bảng số.",
          "keys": [
            "hình ảnh, so sánh hay một bảng số"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One idea per slide, and the title is that slide's conclusion.",
          "sub": "Mỗi slide một ý, tiêu đề chính là câu kết luận của slide đó.",
          "keys": [
            "câu kết luận"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "at": "l2",
            "fit": [
              "f-bk",
              "f-pr"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-ph",
            "t": "illus",
            "name": "mobile-phone",
            "x": 60,
            "y": 1600,
            "size": 80,
            "at": "l1:phone"
          },
          {
            "id": "f-bk",
            "t": "text",
            "text": "Dự phòng: gửi trước + điện thoại",
            "x": 160,
            "y": 1615,
            "size": 42,
            "at": "l1:backup",
            "color": "accent",
            "hl": [
              {
                "text": "Dự phòng",
                "at": "l1:backup"
              }
            ]
          },
          {
            "id": "f-pr",
            "t": "text",
            "text": "Máy hỏng: đứng im mới đáng nhớ",
            "x": 60,
            "y": 1730,
            "size": 44,
            "at": "l2:Projectors",
            "color": "coral",
            "hl": [
              {
                "text": "đứng im",
                "at": "l2:frozen"
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
          "say": "Always a backup: file sent ahead, a copy on your phone.",
          "sub": "Và luôn có bản dự phòng: gửi trước file cho người tổ chức, lưu thêm một bản trong điện thoại.",
          "keys": [
            "bản dự phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Projectors fail. Standing frozen without a copy is what people remember.",
          "sub": "Máy chiếu hỏng không phải lỗi bạn. Đứng im vì không có bản khác thì người ta sẽ nhớ.",
          "keys": [
            "người ta sẽ nhớ"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba 15:00 · tin xấu",
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
        "verdict": {
          "ok": false,
          "label": "Giấu tin xấu đến buổi họp",
          "why": "Sếp có thể nghe từ người khác trước; chuyện nhỏ dễ thành chuyện niềm tin.",
          "rule": "Tin xấu báo sớm, từ chính mình"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "The scanners will be a week late. I'll just tell her on Thursday.",
          "sub": "Máy quét giao trễ một tuần. Thôi, để họp thứ Năm báo luôn.",
          "face": "worried",
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
          "say": "Hide it, and a small problem becomes about trust.",
          "sub": "Giấu đến buổi họp thì chuyện nhỏ thành chuyện niềm tin.",
          "keys": [
            "chuyện niềm tin"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại nhé!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I want to tell you early: the delivery will be a week late.",
          "sub": "Em xin báo sớm một việc chưa tốt: đợt giao hàng sẽ trễ một tuần.",
          "phase": "redo",
          "pose": "explain",
          "to": "hoa"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "I have two options. Could you help me choose one?",
          "sub": "Em đã có hai hướng xử lý, chị xem giúp em chọn hướng nào ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain",
          "to": "hoa"
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
      "id": "s17",
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
            "at": "l3",
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
            "text": "⑤ Thứ Ba 15:30 · Tin xấu",
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
                  "id": "hoa",
                  "side": "left",
                  "face": "stern",
                  "pose": "cross"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "delivery-truck"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
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
            "at": "l2:Wednesday",
            "caption": "Nếu đợi… Thứ Tư · phòng cô Hoa",
            "icon": "delivery-truck"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "Đợi thứ Năm mới báo",
            "x": 2028,
            "y": 1255,
            "size": 48,
            "at": "l1:waited",
            "color": "muted"
          },
          {
            "id": "g-wx",
            "t": "strike",
            "over": "g-w",
            "at": "l5:Hide"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "→ sếp nghe từ phòng mua hàng",
            "x": 2068,
            "y": 1330,
            "size": 42,
            "at": "l2:purchasing",
            "color": "coral"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ hỏi kỹ cả dự án khác",
            "x": 2068,
            "y": 1400,
            "size": 42,
            "at": "l4:closely",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi kỹ",
                "at": "l4:closely"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“Giấu đầu hở đuôi”",
            "x": 2028,
            "y": 1490,
            "size": 56,
            "at": "l5:Hide",
            "color": "accent",
            "hl": [
              {
                "text": "hở đuôi",
                "at": "l5:tail"
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
          "say": "Fifth stop: what if she had waited?",
          "sub": "Chặng năm: nếu Thảo cứ đợi thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wednesday: Cô Hoa hears it from purchasing.",
          "sub": "Thứ Tư, cô Hoa nghe chuyện từ phòng mua hàng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Purchasing just told me about the delay. Why didn't you tell me?",
          "sub": "Phòng mua hàng vừa nói với chị chuyện giao trễ. Sao em không báo?",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A small delay. But from then on, she checks all Thảo's projects closely.",
          "sub": "Trễ hàng chỉ là chuyện nhỏ. Nhưng từ hôm đó, sếp hỏi kỹ cả các dự án khác của Thảo.",
          "keys": [
            "hỏi kỹ cả các dự án khác"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Hide the head, the tail shows. Bad news should come from you, early.",
          "sub": "Giấu đầu hở đuôi. Tin xấu nên đến tai sếp từ chính bạn, và sớm.",
          "keys": [
            "từ chính bạn"
          ]
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "g-how",
            "t": "text",
            "text": "Chuyện gì · tới đâu · đề nghị gì",
            "x": 2028,
            "y": 1590,
            "size": 44,
            "at": "l1:happened",
            "hl": [
              {
                "text": "đề nghị gì",
                "at": "l1:suggest"
              }
            ]
          },
          {
            "id": "g-bl",
            "t": "text",
            "text": "Không đổ lỗi",
            "x": 2028,
            "y": 1660,
            "size": 44,
            "at": "l1:next",
            "color": "muted"
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "Báo sớm còn đường xoay,",
            "x": 2028,
            "y": 1735,
            "size": 50,
            "at": "l3:early",
            "color": "accent",
            "hl": [
              {
                "text": "đường xoay",
                "at": "l3:room"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "báo muộn mất lòng tin",
            "x": 2068,
            "y": 1802,
            "size": 50,
            "at": "l3:late",
            "color": "coral",
            "hl": [
              {
                "text": "mất lòng tin",
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
          "say": "The recipe: what happened, how far it reaches, what you suggest next. No blaming.",
          "sub": "Công thức: chuyện gì đã xảy ra, ảnh hưởng tới đâu, bạn đề nghị gì tiếp. Không đổ lỗi.",
          "keys": [
            "bạn đề nghị gì tiếp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bad news told early leaves room to act. Told late, it costs trust.",
          "sub": "Tin xấu báo sớm còn đường xoay, báo muộn mất lòng tin.",
          "keys": [
            "báo sớm còn đường xoay"
          ]
        }
      ],
      "ref": "p16,p17,p19"
    },
    {
      "id": "s20",
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
            "text": "⑥ Thứ Tư tối · Tập to",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "stopwatch",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Thứ Tư 20:00 · ở nhà",
            "icon": "stopwatch"
          },
          {
            "id": "h-head",
            "t": "text",
            "text": "Đọc thầm: trôi chảy",
            "x": 3996,
            "y": 1255,
            "size": 48,
            "at": "l3:head",
            "color": "muted"
          },
          {
            "id": "h-headx",
            "t": "strike",
            "over": "h-head",
            "at": "l3:Out"
          },
          {
            "id": "h-loud",
            "t": "text",
            "text": "Nói to: lộ chỗ vấp",
            "x": 3996,
            "y": 1335,
            "size": 50,
            "at": "l3:stumbles",
            "color": "accent",
            "hl": [
              {
                "text": "lộ chỗ vấp",
                "at": "l3:stumbles"
              }
            ]
          },
          {
            "id": "h-tm",
            "t": "text",
            "text": "Có bấm giờ, như thật",
            "x": 3996,
            "y": 1415,
            "size": 48,
            "at": "l4:timer",
            "hl": [
              {
                "text": "bấm giờ",
                "at": "l4:timer"
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
          "say": "Sixth stop: Wednesday evening. Tomorrow, fifteen minutes.",
          "sub": "Chặng sáu: tối thứ Tư. Mai, mười lăm phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll just run it in my head. It already sounds smooth!",
          "sub": "Em đọc thầm trong đầu thôi. Nghe trơn tru rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In your head, it flows. Out loud, the stumbles show.",
          "sub": "Trong đầu cái gì cũng trôi. Nói thành tiếng mới lộ chỗ vấp.",
          "keys": [
            "chỗ vấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So she stands, starts a timer, and says it all aloud.",
          "sub": "Thế là cô đứng dậy, bấm giờ, nói to cả bài như thật.",
          "keys": [
            "bấm giờ"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s21",
      "module": "BRK-03",
      "data": {
        "value": 7,
        "suffix": " phút",
        "label": "chỉ riêng phần mở đầu · gấp đôi dự tính",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The timer says the opening alone took seven minutes.",
          "sub": "Đồng hồ báo: riêng phần mở đầu đã mất bảy phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twice the plan!",
          "sub": "Gấp đôi dự tính!",
          "keys": [
            "Gấp đôi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s22",
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
            "at": "l4",
            "fit": [
              "h-q",
              "h-no"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5:end",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-7",
            "t": "text",
            "text": "Mở đầu: 7 → 3 phút",
            "x": 3996,
            "y": 1505,
            "size": 52,
            "at": "l1:three",
            "color": "coral",
            "hl": [
              {
                "text": "3 phút",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "h-12",
            "t": "text",
            "text": "Cả bài ~12 / 15 phút",
            "x": 3996,
            "y": 1585,
            "size": 52,
            "at": "l2:twelve",
            "hl": [
              {
                "text": "12",
                "at": "l2:twelve"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Tập to 1, đỡ run 10",
            "x": 3996,
            "y": 1670,
            "size": 56,
            "at": "l3:once",
            "color": "accent",
            "hl": [
              {
                "text": "đỡ run 10",
                "at": "l3:ten"
              }
            ]
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "Câu sợ nhất → trả lời ngắn",
            "x": 3996,
            "y": 1750,
            "size": 42,
            "at": "l4:fears",
            "hl": [
              {
                "text": "Câu sợ nhất",
                "at": "l4:fears"
              }
            ]
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Không biết: nói thật + hẹn",
            "x": 3996,
            "y": 1810,
            "size": 42,
            "at": "l5:exact",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "She cuts the opening to three minutes and moves the proposal page up.",
          "sub": "Cô cắt phần mở đầu còn ba phút, đưa trang đề xuất lên sớm hơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Once more: about twelve minutes, room for questions.",
          "sub": "Nói to thêm một lần: khoảng mười hai phút, còn chỗ cho câu hỏi.",
          "keys": [
            "mười hai phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Practise aloud once, and you'll shake ten times less.",
          "sub": "Tập to một lần, đỡ run mười lần.",
          "keys": [
            "Tập to một lần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then she lists the questions she fears, with short answers.",
          "sub": "Rồi cô viết ra những câu sợ bị hỏi nhất, kèm câu trả lời ngắn.",
          "keys": [
            "sợ bị hỏi nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "If I don't know: no exact number yet, I'll send it before tomorrow afternoon.",
          "sub": "Câu không biết: em chưa có số chính xác, em gửi chị trước chiều mai ạ.",
          "face": "thinking"
        }
      ],
      "ref": "p21,p22,p24,p25"
    },
    {
      "id": "s23",
      "module": "BRK-07",
      "data": {
        "question": "Đang nói mà sếp ngắt lời thì sao?",
        "illus": "raised-hand"
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
          "say": "What if the boss cuts in halfway?",
          "sub": "Đang nói mà sếp ngắt lời thì sao?",
          "keys": [
            "ngắt lời"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s25",
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
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm 9:00 · Bị ngắt",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:nine",
            "caption": "Thứ Năm 9:00 · phòng họp",
            "icon": "raised-hand"
          },
          {
            "id": "i-calm",
            "t": "text",
            "text": "Thở chậm · câu mở · đến sớm",
            "x": 5964,
            "y": 1255,
            "size": 44,
            "at": "l1:breathed",
            "color": "muted",
            "hl": [
              {
                "text": "đến sớm",
                "at": "l1:early"
              }
            ]
          },
          {
            "id": "i-int",
            "t": "text",
            "text": "Bị ngắt ≠ nói dở",
            "x": 5964,
            "y": 1340,
            "size": 54,
            "at": "l6:understands",
            "color": "coral",
            "hl": [
              {
                "text": "≠ nói dở",
                "at": "l6:badly"
              }
            ]
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "→ hiểu đủ, hoặc lo 1 điểm",
            "x": 6004,
            "y": 1425,
            "size": 44,
            "at": "l6:one point",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Thursday, nine. Thảo breathed slowly, knew her opening, came early.",
          "sub": "Chặng bảy: chín giờ thứ Năm. Hồi hộp là thường: Thảo thở chậm, thuộc câu mở, đến sớm.",
          "keys": [
            "thở chậm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, the director, calm as a lotus pond.",
          "sub": "Còn đây là Bác Bình, giám đốc khối, điềm tĩnh như ao sen.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "In short: we can meet the deadline, and we need one more person.",
          "sub": "Tóm lại: dự án kịp hạn, và cần thêm một người ạ.",
          "pose": "explain",
          "to": "binh"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Fine. I understand this part.",
          "sub": "Được. Phần này bác hiểu rồi.",
          "face": "neutral"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Interrupting usually means he understands, or he's worried about one point. Not that you spoke badly.",
          "sub": "Không. Sếp ngắt lời thường vì đã hiểu đủ, hoặc đang lo một điểm. Không phải bạn nói dở.",
          "keys": [
            "đã hiểu đủ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p23,p26"
    },
    {
      "id": "s26",
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
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "I",
            "ms": 700
          },
          {
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-ask",
            "t": "text",
            "text": "“Đi tiếp, hay đi sâu chỗ này?”",
            "x": 5964,
            "y": 1520,
            "size": 48,
            "at": "l1:deeper",
            "color": "accent",
            "hl": [
              {
                "text": "đi sâu",
                "at": "l1:deeper"
              }
            ]
          },
          {
            "id": "i-skip",
            "t": "text",
            "text": "Bỏ bớt = tôn trọng",
            "x": 5964,
            "y": 1605,
            "size": 50,
            "at": "l3:respect",
            "hl": [
              {
                "text": "tôn trọng",
                "at": "l3:respect"
              }
            ]
          },
          {
            "id": "i-sum",
            "t": "text",
            "text": "Chốt: ai · làm gì · khi nào",
            "x": 5964,
            "y": 1690,
            "size": 52,
            "at": "l5:Who",
            "color": "accent",
            "hl": [
              {
                "text": "ai · làm gì · khi nào",
                "at": "l5:by when"
              }
            ]
          },
          {
            "id": "i-sum2",
            "t": "text",
            "text": "“Bác duyệt phương án hai…”",
            "x": 5964,
            "y": 1780,
            "size": 44,
            "at": "l4:approve",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Shall I go on with the rest, or go deeper here?",
          "sub": "Em đi tiếp phần còn lại, hay bác muốn đi sâu chỗ này ạ?",
          "face": "thinking",
          "to": "binh"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Go on with the rest.",
          "sub": "Em đi tiếp đi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Skipping what he already gets shows you respect his time.",
          "sub": "Bỏ bớt phần sếp đã nắm là tôn trọng thời gian của sếp.",
          "keys": [
            "tôn trọng thời gian"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Let me sum up: you approve option two, and I'll send the detailed plan on Monday.",
          "sub": "Em tóm lại: bác duyệt phương án hai, em gửi kế hoạch chi tiết vào thứ Hai.",
          "pose": "explain",
          "to": "binh"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Who does what, by when. No mix-ups.",
          "sub": "Ai làm gì, đến khi nào. Không ai hiểu sai.",
          "keys": [
            "Ai làm gì, đến khi nào"
          ]
        }
      ],
      "ref": "p26,p27,p28"
    },
    {
      "id": "s28",
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
            "at": "l3",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
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
            "id": "j-t",
            "t": "text",
            "text": "⑧ Thứ Năm 16:00 · Tóm tắt",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
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
                "envelope",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:desk",
            "caption": "Thứ Năm 16:00 · cùng bàn hôm thứ Hai",
            "icon": "envelope"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ Duyệt phương án hai",
            "x": 7932,
            "y": 1255,
            "size": 46,
            "at": "l3:approved"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ Kế hoạch: trước thứ Hai",
            "x": 7932,
            "y": 1325,
            "size": 46,
            "at": "l3:plan"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ Phí vận chuyển: trước thứ Tư",
            "x": 7932,
            "y": 1395,
            "size": 46,
            "at": "l4:shipping"
          },
          {
            "id": "j-day",
            "t": "text",
            "text": "Trong ngày: kết luận · việc · hạn",
            "x": 7932,
            "y": 1485,
            "size": 44,
            "at": "l2:same day",
            "color": "accent",
            "hl": [
              {
                "text": "Trong ngày",
                "at": "l2:same day"
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
          "say": "Last stop: Thursday, four p.m. The same desk as Monday.",
          "sub": "Chặng cuối: bốn giờ chiều thứ Năm. Vẫn cái bàn hôm thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo writes back the same day: conclusion, next steps, deadlines.",
          "sub": "Thảo viết lại ngay trong ngày: kết luận, việc tiếp theo, hạn.",
          "keys": [
            "ngay trong ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Summary: option two approved. Detailed plan before Monday.",
          "sub": "Em gửi lại tóm tắt buổi họp sáng nay: phương án hai đã được duyệt; kế hoạch chi tiết em gửi trước thứ Hai.",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And the shipping cost question, I'll answer before Wednesday.",
          "sub": "Câu hỏi về chi phí vận chuyển, em trả lời trước thứ Tư ạ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Memories differ. Writing is what you both look at.",
          "sub": "Trí nhớ sau họp mỗi người một khác. Văn bản là thứ cả hai cùng nhìn vào.",
          "keys": [
            "Văn bản"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p29,p30"
    },
    {
      "id": "s29",
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
            "id": "j-later",
            "t": "text",
            "text": "“Em gửi sau” → gửi đúng hạn",
            "x": 7932,
            "y": 1570,
            "size": 44,
            "at": "l1:later",
            "hl": [
              {
                "text": "đúng hạn",
                "at": "l1:on time"
              }
            ]
          },
          {
            "id": "j-loop",
            "t": "text",
            "text": "20 trang → 1 trang",
            "x": 7932,
            "y": 1740,
            "size": 60,
            "at": "l3:Monday",
            "color": "accent",
            "hl": [
              {
                "text": "1 trang",
                "at": "l3:one clear page"
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
          "say": "Every 'I'll send it later' goes on a list, and goes out on time.",
          "sub": "Câu nào đã hứa “em gửi sau” thì ghi lại, gửi đúng hạn.",
          "keys": [
            "gửi đúng hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday: twenty pages of panic. Thursday: one clear page.",
          "sub": "Thứ Hai: hai mươi trang hoảng loạn. Thứ Năm: một trang rõ ràng.",
          "keys": [
            "một trang rõ ràng"
          ]
        }
      ],
      "ref": "p31,p32"
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
            "at": "l2:Conclusion",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:Bad news",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:out loud",
            "fit": "H",
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
            "at": "l2:Conclusion"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1130,
            "at": "l2:Bad news"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 5536,
            "y": 1130,
            "at": "l3:out loud"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: ask the purpose, time and audience, and what your boss must decide.",
          "sub": "Tóm lại: hỏi rõ buổi này để làm gì, bao lâu, ai nghe, và sếp cần quyết điều gì.",
          "keys": [
            "sếp cần quyết điều gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Conclusion on top, key numbers, a backup file. Bad news before the meeting.",
          "sub": "Kết luận nằm ở đầu, số liệu chính có nguồn, có file dự phòng. Tin xấu báo trước buổi họp.",
          "keys": [
            "Kết luận nằm ở đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Practise out loud, prepare hard questions, send a summary the same day.",
          "sub": "Tập nói to có bấm giờ, viết sẵn câu hỏi khó, và gửi tóm tắt ngay trong ngày.",
          "keys": [
            "gửi tóm tắt ngay trong ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No star talk. Know the decision, say it first, write it down.",
          "sub": "Không cần nói như diễn giả. Hiểu sếp cần quyết gì, nói điều đó trước, rồi gửi lại bằng chữ.",
          "keys": [
            "nói điều đó trước"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p33,p34,outro"
    },
    {
      "id": "s36",
      "module": "QUIZ-01",
      "ref": "questions[7]",
      "data": {
        "q": "What three parts make a simple frame for almost any report to your boss?",
        "options": [
          "A list of every task done, every problem met, and every person involved",
          "A one sentence conclusion, two or three main reasons, and what you need from them",
          "A long introduction, a full history of the project, and a thank you slide"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bullseye",
        "why": "Sếp biết ngay chuyện gì, vì sao, và cần làm gì: duyệt, chọn hay chỉ cần biết."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What three parts make a simple frame for almost any report to your boss?",
          "sub": "Ba phần nào tạo thành một khung đơn giản cho hầu hết các buổi báo cáo với sếp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A one sentence conclusion, two or three main reasons, and what you need from them.",
          "sub": "Kết luận một câu, hai ba lý do chính, và việc cần sếp làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Your boss knows at once what, why, and what they must do.",
          "sub": "Sếp biết ngay chuyện gì, vì sao, và họ cần làm gì."
        }
      ]
    },
    {
      "id": "s37",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: hỏi sếp một câu",
        "sub": "Buổi báo cáo tới để làm gì?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, ask your boss what your next report is for. Then try the forty questions below!",
          "sub": "Hôm nay, gửi sếp một câu hỏi làm rõ mục đích buổi báo cáo tới. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s28"
  }
};
