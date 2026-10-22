// Kịch bản video W lần 3 (#110, #112) — bài tổng "Lần đầu thuyết trình cần chuẩn bị và làm những gì?" · chuỗi "Thuyết trình và trình bày ý tưởng"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-give-your-first-presentation--w01",
  "hook": "HOOK-18",
  "unit": {
    "audience": "first-time-presenters",
    "slug": "how-to-give-your-first-presentation",
    "door": "ky-nang",
    "level": "B1",
    "title": "Lần đầu thuyết trình cần chuẩn bị và làm những gì?",
    "series": "Thuyết trình và trình bày ý tưởng"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN CHUẨN BỊ của Thảo (Thứ Hai 14:00 nhận việc → tối Thứ Hai → Thứ Ba → Thứ Tư → tối Thứ Năm → Thứ Sáu 8:30 → 9:00 → hỏi đáp). Nhân vật (4): Thảo (gộp Trâm p8, Phát p14, nhóm rác nhựa p4, “bạn” ở ❓ p24), Cô Hoa (trưởng phòng, giao việc, chủ trì, báo còn tám phút), Dũng (em họ, nghe thử p13), Bác Bình (giám đốc, hỏi số liệu từng phòng ban p20). Câu thông điệp ✍️ p4 đổi lớp → văn phòng; câu hứa p20 “trước thứ Sáu” → “trước thứ Sáu tuần sau” vì buổi nói là thứ Sáu. Số liệu chỉ lấy từ bài: 15 phút / 20 slide → 8 phút (p24), bài 10 phút 1 + 2×3 + 1 (p23), hít 4 thở 6 (p17), quá giờ gần 5 phút (p14), ba ý, năm dòng, hai nơi lưu file. Ngắt nhịp: BRK-07 (rehook trước bố cục), BRK-04 (đọc thầm ↔ nói to), BRK-06 (giọng và dáng p19), BRK-03 (15 → 8 phút), dải 8 chặng ở ô B thay bản đồ chuỗi p26. Khép vòng: mở Thứ Sáu 9:00 “còn tám phút” (s01) → Thảo nói bản rút gọn (s25). Bản cũ: w145/bak/how-to-give-your-first-presentation--w01.js.",
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
            "id": "a-15",
            "t": "text",
            "text": "15 phút · 20 slide",
            "x": 60,
            "y": 120,
            "size": 96,
            "at": "l1:fifteen",
            "color": "muted"
          },
          {
            "id": "a-8",
            "t": "text",
            "text": "→ còn 8 phút",
            "x": 60,
            "y": 260,
            "size": 130,
            "at": "l1:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8 phút",
                "at": "l1:eight"
              }
            ]
          },
          {
            "id": "a-fast",
            "t": "text",
            "text": "Ta tưởng: nói nhanh là kịp?",
            "x": 70,
            "y": 470,
            "size": 56,
            "at": "l2:faster",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifteen minutes prepared. Twenty slides. Then the chair says: you have eight.",
          "sub": "Chuẩn bị mười lăm phút, hai mươi slide. Rồi người chủ trì bảo: còn tám phút.",
          "keys": [
            "còn tám phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most think: just talk faster, like a rice cooker on turbo.",
          "sub": "Nhiều người nghĩ: nói nhanh là kịp, như nồi cơm nấu nhanh.",
          "keys": [
            "nói nhanh là kịp"
          ]
        }
      ],
      "ref": "p24"
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
              "set": "meeting",
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
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "stopwatch"
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
                  "shot": "medium",
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
            "caption": "Thứ Sáu 9:00 · họp công ty",
            "icon": "stopwatch"
          },
          {
            "id": "a-fastx",
            "t": "strike",
            "over": "a-fast",
            "at": "l6:Rewind"
          },
          {
            "id": "a-back",
            "t": "text",
            "text": "⟲ tua về Thứ Hai",
            "x": 60,
            "y": 600,
            "size": 60,
            "at": "l6:Monday",
            "color": "accent",
            "hl": [
              {
                "text": "Thứ Hai",
                "at": "l6:Monday"
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
          "say": "New at the company, giving her very first presentation.",
          "sub": "Nhân viên mới, lần đầu thuyết trình.",
          "keys": [
            "lần đầu thuyết trình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Beside her, Cô Hoa, her manager, runs the meeting.",
          "sub": "Cạnh đó là cô Hoa, trưởng phòng, chủ trì buổi họp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "We're running late. You have eight minutes, not fifteen.",
          "sub": "Họp trễ rồi. Em còn tám phút thôi, không phải mười lăm.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Then I'll keep all twenty slides and just talk faster!",
          "sub": "Vậy em giữ đủ hai mươi slide, nói nhanh hơn là được!",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Hold that thought. Rewind to Monday.",
          "sub": "Khoan đã. Tua lại thứ Hai.",
          "keys": [
            "Tua lại thứ Hai"
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
      "ref": "p24"
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
            "text": "Lần đầu: bắt đầu từ đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:start",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Slide? Tập? Hay run trước?",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l1:Slides",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:Short answer"
          },
          {
            "id": "b-n0",
            "t": "text",
            "text": "1.",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l2:message",
            "color": "accent"
          },
          {
            "id": "b-t0",
            "t": "text",
            "text": "Chốt 1 thông điệp",
            "x": 2088,
            "y": 240,
            "size": 50,
            "at": "l2:message+200"
          },
          {
            "id": "b-n1",
            "t": "text",
            "text": "2.",
            "x": 2028,
            "y": 310,
            "size": 50,
            "at": "l3:three",
            "color": "accent"
          },
          {
            "id": "b-t1",
            "t": "text",
            "text": "Bố cục 3 phần, slide gọn",
            "x": 2088,
            "y": 310,
            "size": 50,
            "at": "l3:three+200"
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "3.",
            "x": 2028,
            "y": 380,
            "size": 50,
            "at": "l4:out loud",
            "color": "accent"
          },
          {
            "id": "b-t2",
            "t": "text",
            "text": "Tập thành tiếng, bấm giờ",
            "x": 2088,
            "y": 380,
            "size": 50,
            "at": "l4:out loud+200"
          },
          {
            "id": "b-n3",
            "t": "text",
            "text": "4.",
            "x": 2028,
            "y": 450,
            "size": 50,
            "at": "l4:nerves",
            "color": "accent"
          },
          {
            "id": "b-t3",
            "t": "text",
            "text": "Run · hỏi khó · đồng hồ",
            "x": 2088,
            "y": 450,
            "size": 50,
            "at": "l4:nerves+200"
          },
          {
            "id": "b-r",
            "t": "ring",
            "around": [
              "b-t0"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l2:first"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your first presentation: where to start? Slides? Practice? Panic?",
          "sub": "Vậy lần đầu thuyết trình, bắt đầu từ đâu? Slide? Tập? Hay… run trước?",
          "keys": [
            "bắt đầu từ đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: fix one key message first.",
          "sub": "Câu trả lời ngắn: chốt một thông điệp trước đã.",
          "keys": [
            "một thông điệp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Build three parts around it, with simple slides.",
          "sub": "Dựng bố cục ba phần quanh nó, slide gọn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Practise out loud, then prepare for nerves, questions and the clock.",
          "sub": "Tập thành tiếng, rồi chuẩn bị cho cơn run, câu hỏi khó và cái đồng hồ.",
          "keys": [
            "Tập thành tiếng"
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
            "y": 545,
            "size": 52,
            "at": "l1:one week",
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
            "y": 620,
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
            "y": 620,
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
            "y": 620,
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
            "y": 620,
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
            "y": 620,
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
            "y": 620,
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
            "y": 620,
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
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:eight stops+1940",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 14h",
            "x": 2046,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 tối",
            "x": 2246,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+740"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3",
            "x": 2446,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+960"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4",
            "x": 2646,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+1180"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5 tối",
            "x": 2846,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+1400"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6 8:30",
            "x": 3046,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 9:00",
            "x": 3246,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+1840"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "Hỏi đáp",
            "x": 3446,
            "y": 640,
            "size": 36,
            "at": "l1:eight stops+2060"
          },
          {
            "id": "b-ser",
            "t": "text",
            "text": "Mỗi chặng: một bài đào sâu",
            "x": 2968,
            "y": 545,
            "size": 40,
            "at": "l1:live them",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Here's the map: one week of Thảo, eight stops, in the order you'll live them.",
          "sub": "Đây là bản đồ: một tuần của Thảo, tám chặng, đúng thứ tự bạn sẽ trải qua.",
          "keys": [
            "tám chặng"
          ]
        }
      ],
      "ref": "p26"
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
            "text": "① Thứ Hai 14:00 · Nhận việc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:hands out"
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
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "page-facing-up"
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
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai 14:00 · văn phòng",
            "icon": "page-facing-up"
          },
          {
            "id": "c-sw",
            "t": "text",
            "text": "Mở máy làm slide ngay",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:slide software",
            "color": "muted"
          },
          {
            "id": "c-swx",
            "t": "strike",
            "over": "c-sw",
            "at": "l4:Easy"
          },
          {
            "id": "c-bury",
            "t": "text",
            "text": "→ ý chính bị chôn",
            "x": 4036,
            "y": 250,
            "size": 52,
            "at": "l4:buried",
            "color": "coral",
            "hl": [
              {
                "text": "bị chôn",
                "at": "l4:buried"
              }
            ]
          },
          {
            "id": "c-pap",
            "t": "text",
            "text": "Lấy tờ giấy, trả lời:",
            "x": 3996,
            "y": 360,
            "size": 52,
            "at": "l5:paper",
            "hl": [
              {
                "text": "tờ giấy",
                "at": "l5:paper"
              }
            ]
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "• Ai đang nghe?",
            "x": 4016,
            "y": 450,
            "size": 56,
            "at": "l5:who",
            "color": "accent"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "• Họ cần nhớ / làm gì?",
            "x": 4016,
            "y": 540,
            "size": 56,
            "at": "l5:remember",
            "color": "accent",
            "hl": [
              {
                "text": "nhớ / làm gì",
                "at": "l5:or do"
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
          "say": "First stop: Monday, two p.m. Cô Hoa hands out the job.",
          "sub": "Chặng một: hai giờ chiều thứ Hai. Cô Hoa giao việc.",
          "keys": [
            "thứ Hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Friday: fifteen minutes on plastic waste in the office.",
          "sub": "Thứ Sáu em nói mười lăm phút về rác nhựa ở văn phòng nhé.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Got it! I'll open the slide software right now.",
          "sub": "Dạ! Em mở phần mềm làm slide luôn ạ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Easy. Slides first, and your point gets buried under data.",
          "sub": "Từ từ. Mở máy trước, ý chính bị chôn dưới dữ liệu.",
          "keys": [
            "ý chính bị chôn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Take paper. Who is listening, and what must they remember, or do?",
          "sub": "Hãy lấy tờ giấy. Ai đang nghe, và sau buổi nói họ cần nhớ hoặc làm gì?",
          "keys": [
            "Ai đang nghe"
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
      "ref": "p1"
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
            "text": "② Thứ Hai tối · Đề tài?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:writes"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
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
            "at": "l1:evening",
            "caption": "Thứ Hai tối · ở nhà",
            "icon": "pencil"
          },
          {
            "id": "d-top",
            "t": "text",
            "text": "“Rác nhựa ở văn phòng”",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l1:plastic waste",
            "color": "muted"
          },
          {
            "id": "d-tag",
            "t": "text",
            "text": "= tấm bảng tên",
            "x": 6004,
            "y": 250,
            "size": 52,
            "at": "l3:name tag",
            "color": "coral",
            "hl": [
              {
                "text": "bảng tên",
                "at": "l3:name tag"
              }
            ]
          },
          {
            "id": "d-msg",
            "t": "text",
            "text": "Thông điệp = việc + lý do",
            "x": 5964,
            "y": 340,
            "size": 52,
            "at": "l4:action",
            "color": "accent",
            "hl": [
              {
                "text": "việc + lý do",
                "at": "l4:reason"
              }
            ]
          },
          {
            "id": "d-br",
            "t": "text",
            "text": "nói được trong một hơi",
            "x": 6004,
            "y": 420,
            "size": 44,
            "at": "l4:breath",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday evening. Thảo writes: plastic waste in the office.",
          "sub": "Chặng hai: tối thứ Hai. Thảo ghi: rác nhựa ở văn phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Done. That's my key message!",
          "sub": "Xong. Thông điệp chính của em đây!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not yet. That's a topic, and a topic is just a name tag.",
          "sub": "Chưa đâu. Đó là đề tài, mà đề tài chỉ là tấm bảng tên.",
          "keys": [
            "tấm bảng tên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A message has an action and a reason, short enough for one breath.",
          "sub": "Thông điệp có việc cần làm và lý do, đủ ngắn để nói trong một hơi.",
          "keys": [
            "việc cần làm và lý do"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l1",
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
            "id": "d-topx",
            "t": "strike",
            "over": "d-top",
            "at": "l2:One action"
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "“Mỗi người mang bình riêng,",
            "x": 5964,
            "y": 510,
            "size": 50,
            "at": "l2:One action",
            "color": "accent"
          },
          {
            "id": "d-new2",
            "t": "text",
            "text": "để thùng rác bớt cốc nhựa.”",
            "x": 5994,
            "y": 580,
            "size": 50,
            "at": "l2:one reason",
            "color": "accent",
            "hl": [
              {
                "text": "bớt cốc nhựa",
                "at": "l2:one reason"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Giữ ~3 ý · còn lại → phụ lục",
            "x": 5964,
            "y": 670,
            "size": 44,
            "at": "l3:three",
            "hl": [
              {
                "text": "~3 ý",
                "at": "l3:three"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Take two: from Monday, everyone brings their own bottle, so the bin has fewer plastic cups.",
          "sub": "Viết lại: từ thứ Hai, mỗi người mang bình nước riêng, để thùng rác bớt đầy cốc nhựa.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One action, one reason. People can repeat it right away.",
          "sub": "Một việc, một lý do. Người nghe nhắc lại được ngay.",
          "keys": [
            "Một việc, một lý do"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep about three supporting points. The rest goes in an appendix.",
          "sub": "Giữ khoảng ba ý ủng hộ. Phần còn lại vào phụ lục, email gửi sau.",
          "keys": [
            "khoảng ba ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A topic is a name. A message is a request.",
          "sub": "Đề tài là cái tên, thông điệp là lời đề nghị.",
          "keys": [
            "thông điệp là lời đề nghị"
          ]
        }
      ],
      "ref": "p3,p4,p5"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Có thông điệp rồi, bài nói đi đường nào?",
        "illus": "world-map"
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
          "say": "You have a message. Which road does the talk take?",
          "sub": "Có thông điệp rồi, bài nói đi đường nào?",
          "keys": [
            "đi đường nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p6"
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
            "at": "l4",
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
            "text": "③ Thứ Ba 9:00 · Đường đi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:road"
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
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l4",
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
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · trước khi làm slide",
            "icon": "memo"
          },
          {
            "id": "e-once",
            "t": "text",
            "text": "Người nghe chỉ nghe 1 lần",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:once",
            "color": "coral",
            "hl": [
              {
                "text": "1 lần",
                "at": "l1:once"
              }
            ]
          },
          {
            "id": "e-o",
            "t": "text",
            "text": "Mở: vấn đề + thông điệp",
            "x": 7932,
            "y": 250,
            "size": 50,
            "at": "l2:Open"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "Thân: ~3 ý + bằng chứng",
            "x": 7932,
            "y": 330,
            "size": 50,
            "at": "l2:three points"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Kết: thông điệp + đề nghị",
            "x": 7932,
            "y": 410,
            "size": 50,
            "at": "l3:Close",
            "hl": [
              {
                "text": "đề nghị",
                "at": "l3:request"
              }
            ]
          },
          {
            "id": "e-link",
            "t": "text",
            "text": "Giữa các phần: câu chuyển ý",
            "x": 7932,
            "y": 490,
            "size": 44,
            "at": "l3:link",
            "color": "muted"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "5 dòng: mở · 3 ý · đề nghị",
            "x": 7932,
            "y": 600,
            "size": 54,
            "at": "l5:first sentence",
            "color": "accent",
            "hl": [
              {
                "text": "5 dòng",
                "at": "l5:first sentence"
              }
            ]
          },
          {
            "id": "e-sorry",
            "t": "text",
            "text": "Câu đầu: đừng xin lỗi",
            "x": 7932,
            "y": 690,
            "size": 50,
            "at": "l5:apology",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Tuesday. Listeners hear you only once, so Thảo draws the road.",
          "sub": "Chặng ba: thứ Ba. Người nghe chỉ nghe một lần, nên Thảo vẽ đường đi.",
          "keys": [
            "nghe một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Open with the problem and the message. Then about three points, each with evidence.",
          "sub": "Mở: nêu vấn đề và thông điệp. Thân: khoảng ba ý, mỗi ý một bằng chứng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Close with the message and a request, and link each part.",
          "sub": "Kết: nhắc thông điệp kèm lời đề nghị, giữa các phần có câu chuyển ý.",
          "keys": [
            "lời đề nghị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So, five lines before any slide: opening, three points, my request.",
          "sub": "Vậy năm dòng trước khi làm slide: câu mở, ba ý, câu đề nghị.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And that first sentence? No apology, no long self-introduction.",
          "sub": "Còn câu đầu? Đừng xin lỗi, đừng tự giới thiệu dài.",
          "keys": [
            "Đừng xin lỗi"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Ba · đọc thử phần kết",
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
        "verdict": {
          "ok": false,
          "label": "Kết bằng “em xin hết”",
          "why": "Không ai hỏi, họp tan, một tuần sau chẳng ai biết bước tiếp theo là gì.",
          "rule": "Kết bằng một bước tiếp theo"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "And that's all. I'm finished. Any questions?",
          "sub": "Em xin hết, mọi người có hỏi gì không ạ?",
          "face": "happy",
          "stop": true,
          "to": "hoa"
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
          "say": "Nobody asks. A week later, nobody knows the next step.",
          "sub": "Không ai hỏi. Một tuần sau chẳng ai biết bước tiếp theo.",
          "keys": [
            "bước tiếp theo"
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
          "say": "So my request: from Monday, please bring your own bottle.",
          "sub": "Vậy em đề nghị: từ thứ Hai, mỗi người mang bình nước riêng ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain",
          "to": "hoa"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "End with a next step, not with 'I'm finished'.",
          "sub": "Đừng kết bằng “em xin hết”, hãy kết bằng một bước tiếp theo.",
          "phase": "redo",
          "keys": [
            "một bước tiếp theo"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p9"
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
            "text": "④ Thứ Tư · Slide gọn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:opens"
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
                  "face": "worried"
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · giờ mới mở máy",
            "icon": "laptop"
          },
          {
            "id": "f-help",
            "t": "text",
            "text": "Slide không nói thay bạn",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l3:talk for you",
            "hl": [
              {
                "text": "không nói thay",
                "at": "l3:talk for you"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "• Mỗi slide một ý",
            "x": 60,
            "y": 1350,
            "size": 50,
            "at": "l4:One idea"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• Tiêu đề là một câu",
            "x": 60,
            "y": 1430,
            "size": 50,
            "at": "l4:title"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "• Một hình đơn giản",
            "x": 60,
            "y": 1510,
            "size": 50,
            "at": "l4:picture"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "• Tô màu đúng 1 điểm",
            "x": 60,
            "y": 1590,
            "size": 50,
            "at": "l5:Colour",
            "color": "accent",
            "hl": [
              {
                "text": "đúng 1 điểm",
                "at": "l5:one point"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "• Tắt gần hết hiệu ứng",
            "x": 60,
            "y": 1670,
            "size": 50,
            "at": "l5:effects",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday. Now Thảo opens the slides.",
          "sub": "Chặng bốn: thứ Tư. Giờ Thảo mới mở máy làm slide."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Paste my whole speech on the slides, just in case?",
          "sub": "Hay em chép hết lời lên slide? Lỡ quên còn có cái đọc?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Slides help people see what you say. They don't talk for you.",
          "sub": "Slide giúp người nghe thấy rõ điều bạn nói, không nói thay bạn.",
          "keys": [
            "không nói thay bạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One idea per slide, a sentence title, one simple picture.",
          "sub": "Mỗi slide một ý, tiêu đề là một câu, một hình đơn giản."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Colour just one point on the chart. Turn off most effects.",
          "sub": "Biểu đồ tô màu đúng một điểm. Tắt gần hết hiệu ứng.",
          "keys": [
            "đúng một điểm"
          ]
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "f-card",
            "t": "illus",
            "name": "memo",
            "x": 60,
            "y": 1750,
            "size": 80,
            "at": "l1:note cards"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "Slide cho người nghe · thẻ cho mình",
            "x": 160,
            "y": 1770,
            "size": 44,
            "at": "l1:audience",
            "color": "accent",
            "hl": [
              {
                "text": "thẻ cho mình",
                "at": "l1:cards are for you"
              }
            ]
          },
          {
            "id": "f-test",
            "t": "text",
            "text": "Chiếu thử · lưu 2 nơi",
            "x": 1000,
            "y": 1790,
            "size": 48,
            "at": "l3:projector",
            "hl": [
              {
                "text": "lưu 2 nơi",
                "at": "l3:two places"
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
          "say": "Afraid of forgetting? Keywords go on note cards. Slides are for the audience, cards are for you.",
          "sub": "Sợ quên? Ghi từ khoá lên thẻ cầm tay. Slide để người nghe nhìn, thẻ để mình nhớ.",
          "keys": [
            "thẻ để mình nhớ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Test the real projector, and save the file in two places.",
          "sub": "Chiếu thử trên đúng máy chiếu, và lưu file ở hai nơi.",
          "keys": [
            "hai nơi"
          ]
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "a1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "n2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm tối · Tập thật",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Two"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "pose": "think"
                }
              ],
              "left": {
                "label": "Cách A: đọc thầm",
                "ok": false
              },
              "right": {
                "label": "Cách B: nói thành tiếng",
                "ok": true
              }
            },
            "at": "l1:evening",
            "caption": "Thứ Năm tối · hai cách tập",
            "icon": "speaking-head"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: đọc thầm trên xe buýt",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "n2:trips",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ vấp, quá giờ gần 5 phút",
            "x": 2068,
            "y": 1340,
            "size": 46,
            "at": "n2:five minutes",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: nói to, bấm giờ, 2 lượt",
            "x": 2028,
            "y": 1430,
            "size": 50,
            "at": "n3:Version B",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ thấy chỗ vấp, kịp sửa",
            "x": 2068,
            "y": 1510,
            "size": 46,
            "at": "n3:fixes",
            "hl": [
              {
                "text": "kịp sửa",
                "at": "n3:fixes"
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
          "say": "Fifth stop: Thursday evening. Two Thảos.",
          "sub": "Chặng năm: tối thứ Năm. Hai cô Thảo."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "I read my slides silently on the bus. So smooth!",
          "sub": "Em đọc thầm slide trên xe buýt rồi. Trơn tru lắm!",
          "phase": "a",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "I'll stand up at home and say it out loud, with a timer. Twice.",
          "sub": "Em đứng nói thành tiếng ở nhà, bấm giờ. Hai lượt.",
          "phase": "b",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "n2",
          "lang": "en",
          "who": "det",
          "say": "Version A trips, forgets a key number, and runs nearly five minutes over.",
          "sub": "Bản A vấp, quên số chính, quá giờ gần năm phút.",
          "keys": [
            "quá giờ gần năm phút"
          ]
        },
        {
          "id": "n3",
          "lang": "en",
          "who": "det",
          "say": "Version B finds her stumbles at home, and fixes them.",
          "sub": "Bản B thấy chỗ vấp ngay ở nhà, và kịp sửa.",
          "keys": [
            "kịp sửa"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l1:Dũng",
            "fit": [
              "g-v2"
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
            "id": "g-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3b",
                  "shot": "medium",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:listener",
            "caption": "Thứ Năm 21:00 · nghe thử",
            "icon": "stopwatch"
          },
          {
            "id": "g-ask",
            "t": "text",
            "text": "Hỏi: nhớ gì? lạc ở đâu?",
            "x": 2028,
            "y": 1610,
            "size": 52,
            "at": "l4:Ask",
            "color": "accent",
            "hl": [
              {
                "text": "nhớ gì?",
                "at": "l4:Ask"
              }
            ]
          },
          {
            "id": "g-good",
            "t": "text",
            "text": "“Có hay không?” → “Hay lắm”",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l4:Great",
            "color": "muted"
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Thuộc câu mở + câu kết",
            "x": 2028,
            "y": 1780,
            "size": 50,
            "at": "l5:by heart",
            "hl": [
              {
                "text": "câu mở + câu kết",
                "at": "l5:ending"
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
          "say": "Then a listener: Dũng, her cousin, fast as a motorbike.",
          "sub": "Rồi cần một người nghe: Dũng, em họ Thảo, nhanh như xe máy.",
          "keys": [
            "một người nghe"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "What do you remember as my main message? And where did you get lost?",
          "sub": "Nghe xong, em nhớ thông điệp chính là gì? Chỗ nào bị lạc, hay dài?",
          "pose": "explain"
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "dung",
          "say": "Bring a bottle, fewer plastic cups. Got it!",
          "sub": "Mang bình riêng, bớt cốc nhựa. Nhớ rồi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask 'Was it good?', and you'll just hear 'Great!'",
          "sub": "Hỏi “Có hay không?” thì chỉ nhận về “Hay lắm”.",
          "keys": [
            "Hay lắm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Practise points and order. Learn only the opening and ending by heart.",
          "sub": "Tập theo ý chính và thứ tự. Chỉ học thuộc câu mở và câu kết.",
          "keys": [
            "câu mở và câu kết"
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
      "ref": "p12,p13"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "wrong": "Đọc thầm slide trong đầu",
        "right": "Nói thành tiếng, có bấm giờ",
        "wrongIllus": "bus",
        "rightIllus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In your head, everything flows.",
          "sub": "Trong đầu cái gì cũng trôi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Out loud, you find where you stumble.",
          "sub": "Ra miệng mới biết chỗ vấp.",
          "keys": [
            "chỗ vấp"
          ]
        }
      ],
      "ref": "p15"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu 8:30 · Run",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:drum"
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
                  "side": "center",
                  "face": "worried",
                  "pose": "hold"
                }
              ],
              "props": [
                "anxious-face-with-sweat",
                "microphone"
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
            "at": "l1:Friday",
            "caption": "Thứ Sáu 8:30 · phòng họp",
            "icon": "microphone"
          },
          {
            "id": "h-see",
            "t": "text",
            "text": "Người nghe thấy run ít hơn",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:far less",
            "hl": [
              {
                "text": "ít hơn",
                "at": "l3:far less"
              }
            ]
          },
          {
            "id": "h-ctl",
            "t": "text",
            "text": "Kiểm soát, không phải hết run",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l4:control",
            "color": "accent"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "• Viết nỗi lo + cách xử lý",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l4:worry"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "• Đến sớm thử micro",
            "x": 3996,
            "y": 1490,
            "size": 46,
            "at": "l5:early"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "• Tay run: thẻ bìa cứng",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l5:card",
            "hl": [
              {
                "text": "thẻ bìa cứng",
                "at": "l5:card"
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
          "say": "Sixth stop: Friday, eight thirty. Her heart beats like a school drum.",
          "sub": "Chặng sáu: tám rưỡi sáng thứ Sáu. Tim Thảo đánh như trống trường.",
          "keys": [
            "trống trường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Everyone will see my hands shaking!",
          "sub": "Ai cũng sẽ thấy tay em run mất!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Almost everyone is nervous, and people see far less than you feel.",
          "sub": "Ai cũng hồi hộp, và người nghe thấy bạn run ít hơn bạn tưởng.",
          "keys": [
            "ít hơn bạn tưởng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Aim for control, not zero nerves. Write each worry down, with a fix.",
          "sub": "Mục tiêu là kiểm soát, không phải hết run. Viết nỗi lo ra giấy, kèm cách xử lý."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Test the mic early. Shaky hands? Hold a stiff card, not thin paper.",
          "sub": "Đến sớm thử micro. Tay run thì cầm thẻ bìa cứng, đừng cầm giấy mỏng.",
          "keys": [
            "thẻ bìa cứng"
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
      "ref": "p16"
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
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-fast",
            "t": "text",
            "text": "Hít sâu, nhanh, liên tục",
            "x": 3996,
            "y": 1650,
            "size": 46,
            "at": "l2:Fast",
            "color": "muted"
          },
          {
            "id": "h-fastx",
            "t": "strike",
            "over": "h-fast",
            "at": "l2:dizzy"
          },
          {
            "id": "h-dz",
            "t": "text",
            "text": "→ chóng mặt",
            "x": 4496,
            "y": 1650,
            "size": 46,
            "at": "l2:dizzy",
            "color": "coral"
          },
          {
            "id": "h-br",
            "t": "text",
            "text": "Hít 4 (mũi) · thở ra 6",
            "x": 3996,
            "y": 1740,
            "size": 64,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "thở ra 6",
                "at": "l3:six"
              }
            ]
          },
          {
            "id": "h-pr",
            "t": "text",
            "text": "Hơi thở cũng cần tập",
            "x": 4936,
            "y": 1790,
            "size": 46,
            "at": "l4:rehearsal",
            "hl": [
              {
                "text": "cần tập",
                "at": "l4:rehearsal"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Deep, fast breaths. Lots of them. That will calm me down!",
          "sub": "Hít thật sâu, thật nhanh, thật nhiều. Thế là bình tĩnh!",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fast, hard breathing makes you dizzy, and you panic more.",
          "sub": "Hít mạnh và nhanh liên tục dễ chóng mặt, tê tay, rồi càng hoảng hơn.",
          "keys": [
            "càng hoảng hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Breathe slowly: in through your nose for four, out gently for six.",
          "sub": "Thở chậm: hít vào bằng mũi đếm đến bốn, thở ra từ từ đếm đến sáu.",
          "keys": [
            "đếm đến bốn",
            "đếm đến sáu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your breath needs rehearsal too, like your opening.",
          "sub": "Hơi thở cũng cần tập, như câu mở đầu.",
          "keys": [
            "Hơi thở cũng cần tập"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s21",
      "module": "BRK-06",
      "data": {
        "title": "Giọng và dáng khi lên nói",
        "items": [
          {
            "illus": "turtle",
            "text": "Chậm ở ý chính"
          },
          {
            "illus": "pause-button",
            "text": "Dừng 1–2 giây"
          },
          {
            "illus": "footprints",
            "text": "Chân đứng vững"
          },
          {
            "illus": "eyes",
            "text": "Nhìn từng góc"
          },
          {
            "illus": "person-walking",
            "text": "Ý mới mới đi"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Slow down. Pause. Feet steady.",
          "sub": "Chậm lại. Dừng một nhịp. Chân vững."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eyes on every corner. Move only for a new point.",
          "sub": "Nhìn khắp các góc. Sang ý mới mới di chuyển.",
          "keys": [
            "Sang ý mới"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p19"
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
            "text": "⑦ Thứ Sáu 9:00 · Online",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Back"
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
                  "id": "hoa",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "stopwatch"
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
            "at": "l1:nine",
            "caption": "Thứ Sáu 9:00 · chi nhánh dự online",
            "icon": "laptop"
          },
          {
            "id": "i-click",
            "t": "text",
            "text": "Online: cách 1 cú nhấp chuột",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l3:click",
            "color": "coral",
            "hl": [
              {
                "text": "1 cú nhấp",
                "at": "l3:one click"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "• Vào sớm thử tiếng, camera",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l4:early"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "• Tắt thông báo, gửi trước file",
            "x": 5964,
            "y": 1410,
            "size": 44,
            "at": "l4:alerts"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "• Chỉ chia sẻ cửa sổ slide",
            "x": 5964,
            "y": 1480,
            "size": 44,
            "at": "l5:window",
            "hl": [
              {
                "text": "cửa sổ slide",
                "at": "l5:slide window"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "• Nhìn camera · mời gõ chat",
            "x": 5964,
            "y": 1550,
            "size": 44,
            "at": "l5:camera"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Friday, nine a.m. Back where we started.",
          "sub": "Chặng bảy: chín giờ sáng thứ Sáu. Quay về chỗ ta bắt đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "The branch joins online. And we're late: eight minutes, not fifteen.",
          "sub": "Chi nhánh dự online. Mà họp trễ rồi: tám phút, không phải mười lăm.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Online, listeners are one click away from something else.",
          "sub": "Người nghe online chỉ cách việc khác một cú nhấp chuột.",
          "keys": [
            "một cú nhấp chuột"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo joined early, tested sound, muted alerts, and sent the host her file.",
          "sub": "May mà Thảo vào sớm thử âm thanh, tắt thông báo, gửi trước file cho người chủ trì."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She shares only the slide window, eyes the camera on key lines, and invites the chat.",
          "sub": "Cô chỉ chia sẻ cửa sổ trình chiếu, nhìn camera ở câu quan trọng, mời mọi người gõ chat.",
          "keys": [
            "cửa sổ trình chiếu"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s24",
      "module": "BRK-03",
      "data": {
        "from": 15,
        "value": 8,
        "suffix": " phút",
        "label": "còn lại: nói nhanh hơn, hay cắt bớt?",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifteen minutes, squeezed into eight.",
          "sub": "Mười lăm phút, bị ép còn tám."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Talk faster, or cut?",
          "sub": "Nói nhanh hơn, hay cắt bớt?",
          "keys": [
            "cắt bớt"
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
      "id": "s25",
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
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
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
            "id": "i-bud",
            "t": "text",
            "text": "Thời gian = ngân sách",
            "x": 5964,
            "y": 1630,
            "size": 52,
            "at": "l1:budget",
            "color": "accent",
            "hl": [
              {
                "text": "ngân sách",
                "at": "l1:budget"
              }
            ]
          },
          {
            "id": "i-10",
            "t": "text",
            "text": "10 phút = 1 + 6 + 1 + dự phòng",
            "x": 5964,
            "y": 1710,
            "size": 44,
            "at": "l2:ten-minute"
          },
          {
            "id": "i-cut",
            "t": "text",
            "text": "Quá giờ → cắt nguyên phần",
            "x": 5964,
            "y": 1790,
            "size": 46,
            "at": "l3:whole part",
            "color": "coral"
          },
          {
            "id": "i-keep",
            "t": "text",
            "text": "Giữ ý chính, không giữ slide",
            "x": 6864,
            "y": 1790,
            "size": 46,
            "at": "l5:main point",
            "color": "accent",
            "hl": [
              {
                "text": "Giữ ý chính",
                "at": "l5:main point"
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
          "say": "On time doesn't mean fast. Treat time like a budget.",
          "sub": "Đúng giờ không phải nói nhanh. Hãy chia thời gian như ngân sách.",
          "keys": [
            "như ngân sách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A ten-minute talk: about one to open, two per point, one to close, the rest spare.",
          "sub": "Bài mười phút: mở khoảng một phút, mỗi ý hai phút, kết một phút, còn lại dự phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Too long? Cut a whole part. Don't race.",
          "sub": "Quá giờ thì cắt nguyên một phần, đừng nói như chạy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "A short version today: three key slides, then my request.",
          "sub": "Hôm nay em xin nói bản rút gọn: ba slide chính, rồi lời đề nghị.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Short of time? Keep the main point, not every slide.",
          "sub": "Mất giờ thì giữ ý chính, đừng giữ đủ slide.",
          "keys": [
            "giữ ý chính"
          ]
        }
      ],
      "ref": "p23,p24,p25"
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
          },
          {
            "at": "l4",
            "fit": [
              "j-v"
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
            "id": "j-t",
            "t": "text",
            "text": "⑧ Hỏi đáp · Chưa có số",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:director"
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
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bác Bình",
            "caption": "Ngay sau đó · phần hỏi đáp",
            "icon": "red-question-mark"
          },
          {
            "id": "j-guess",
            "t": "text",
            "text": "Nói đại",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l3:guess",
            "color": "muted"
          },
          {
            "id": "j-guessx",
            "t": "strike",
            "over": "j-guess",
            "at": "l3:doubt"
          },
          {
            "id": "j-why",
            "t": "text",
            "text": "→ nghi cả phần đúng",
            "x": 8152,
            "y": 1265,
            "size": 48,
            "at": "l3:the rest",
            "color": "coral"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Hứa: việc · người · hạn",
            "x": 7932,
            "y": 1360,
            "size": 52,
            "at": "l5:deadline",
            "color": "accent",
            "hl": [
              {
                "text": "hạn",
                "at": "l5:deadline"
              }
            ]
          },
          {
            "id": "j-later",
            "t": "text",
            "text": "“Để em xem rồi báo sau”",
            "x": 7932,
            "y": 1450,
            "size": 46,
            "at": "l5:get back",
            "color": "muted"
          },
          {
            "id": "j-laterx",
            "t": "strike",
            "over": "j-later",
            "at": "l5:forgotten"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: questions. Bác Bình, the director, calm as a pond.",
          "sub": "Chặng cuối: hỏi đáp. Đây là Bác Bình, giám đốc, điềm tĩnh như mặt ao.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Do you have the figures for each department?",
          "sub": "Em có số liệu của từng phòng ban không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She doesn't. Don't guess: one wrong guess makes people doubt the rest.",
          "sub": "Chưa có. Đừng nói đại: một câu đoán sai làm người ta nghi cả phần đúng.",
          "keys": [
            "Đừng nói đại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I have the company total, not each department. I'll check and email you by next Friday.",
          "sub": "Em có số cả công ty, chưa có từng phòng. Em sẽ kiểm tra, gửi email cho bác trước thứ Sáu tuần sau.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Task, person, deadline. 'I'll get back to you' just gets forgotten.",
          "sub": "Có việc, người nhận, thời hạn. “Để em xem rồi báo sau” thì dễ bị quên.",
          "keys": [
            "Có việc, người nhận, thời hạn"
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
      "ref": "p20"
    },
    {
      "id": "s28",
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
            "at": "l3",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
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
            "id": "j-rep",
            "t": "text",
            "text": "Câu hỏi dài → nhắc lại ngắn",
            "x": 7932,
            "y": 1550,
            "size": 46,
            "at": "l1:briefly",
            "hl": [
              {
                "text": "nhắc lại ngắn",
                "at": "l1:briefly"
              }
            ]
          },
          {
            "id": "j-grp",
            "t": "text",
            "text": "Bài nhóm: phần ai, người ấy đáp",
            "x": 7932,
            "y": 1630,
            "size": 44,
            "at": "l2:group"
          },
          {
            "id": "j-end",
            "t": "text",
            "text": "Kết: “Mang bình riêng nhé!”",
            "x": 7932,
            "y": 1730,
            "size": 56,
            "at": "l4:one message",
            "color": "accent",
            "hl": [
              {
                "text": "Mang bình riêng",
                "at": "l4:next step"
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
          "say": "Long question? Repeat it briefly: you check it, and win a few seconds.",
          "sub": "Câu hỏi dài? Nhắc lại ngắn gọn để kiểm tra mình hiểu đúng, thêm vài giây nghĩ.",
          "keys": [
            "Nhắc lại ngắn gọn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In a group talk, whoever did that part answers it.",
          "sub": "Thuyết trình nhóm thì phần của ai, người ấy trả lời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So once more: from Monday, please bring your own bottle.",
          "sub": "Em xin nhắc lại: từ thứ Hai, mỗi người mang bình nước riêng ạ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eight minutes, one message, one next step. Thảo still shook, but she knew the road.",
          "sub": "Tám phút, một thông điệp, một bước tiếp theo. Thảo vẫn run, nhưng cô biết đường đi.",
          "keys": [
            "biết đường đi"
          ]
        }
      ],
      "ref": "p21"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:message",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:out loud",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:main point",
            "fit": "I",
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
            "x": 7504,
            "y": 690,
            "at": "l1:message"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3568,
            "y": 1780,
            "at": "l2:out loud"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6764,
            "y": 1780,
            "at": "l3:main point"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-keep"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:slide"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: one message first, a request, not a name.",
          "sub": "Tóm lại: chốt thông điệp trước, là lời đề nghị, không phải cái tên.",
          "keys": [
            "chốt thông điệp trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Practise out loud with a timer. In your head, everything flows.",
          "sub": "Tập thành tiếng có bấm giờ. Trong đầu cái gì cũng trôi.",
          "keys": [
            "Tập thành tiếng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when time runs short, keep the main point, not every slide.",
          "sub": "Và khi mất giờ, giữ ý chính, đừng giữ đủ slide.",
          "keys": [
            "giữ ý chính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No need for zero nerves. Just a clear message and real practice.",
          "sub": "Không cần hết run. Chỉ cần thông điệp rõ và vài lượt tập thật.",
          "keys": [
            "vài lượt tập thật"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s40",
      "module": "QUIZ-01",
      "ref": "questions[28]",
      "data": {
        "q": "Someone asks a question you cannot answer, what should you do?",
        "options": [
          "Pretend you did not hear it and quickly move on to your next slide",
          "Say what you know and what you don't, then promise a clear reply with a deadline",
          "Give a confident answer anyway, because silence always looks worse than a guess"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "red-question-mark",
        "why": "Một câu đoán sai làm người ta nghi cả phần đúng. Nói thật, rồi hứa có việc, người nhận, thời hạn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Someone asks a question you cannot answer, what should you do?",
          "sub": "Có người hỏi câu bạn không trả lời được, bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Say what you know and what you don't, then promise a clear reply with a deadline.",
          "sub": "Nói rõ phần biết, phần chưa biết, rồi hứa phản hồi có thời hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Be honest, then promise a task, a person and a deadline.",
          "sub": "Nói thật, rồi hứa có việc, người nhận và thời hạn."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s41",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: viết thông điệp một câu",
        "sub": "Đọc cho một người nghe, rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write your one-sentence message today. Then try the forty questions below!",
          "sub": "Hôm nay viết thông điệp một câu. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s25"
  }
};
