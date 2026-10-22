// Kịch bản video W lần 3 (#110) — "Cách xác định thông điệp chính khi chuẩn bị thuyết trình" · chuỗi "Thuyết trình và trình bày ý tưởng"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-find-the-key-message-of-a-presentation--w01",
  "hook": "HOOK-01",
  "unit": {
    "audience": "first-time-presenters",
    "slug": "how-to-find-the-key-message-of-a-presentation",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách xác định thông điệp chính khi chuẩn bị thuyết trình",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Thảo (Thứ Hai 9:00 báo cáo bị ngắt ở slide 6 → Thứ Hai 14:00 nhận việc giới thiệu phần mềm cho tiệm Bác Bình → 16:00 → Thứ Ba → tối Thứ Ba → Thứ Tư → Thứ Năm → tối Thứ Năm → Thứ Hai tuần sau 9:00). Nhân vật (4): Thảo (gộp Thuỳ p19, người trình bày phần mềm ❓ p8, Khuê 🔀 p23), Cô Hoa (trưởng phòng: người ngắt lời “vậy kết luận gì” thay thầy p19, người giao việc p6–p7), Bác Bình (chủ tiệm p8), Dũng (em họ: nhóm rác nhựa ✍️ p13, nhân viên làm thêm ở tiệm = nhóm người thực hiện p23, người bạn nghe thử p25). Câu thông điệp của Thảo (“Tiệm nên dùng thử phần mềm, để bớt nhầm đơn”) dựng từ lời giải ❓ p8; ví dụ thư mục chung p11 và câu chung chung p12 giữ nguyên. Số liệu chỉ lấy từ bài: 20 câu khảo sát, slide thứ 6 (p19), 10 phút (p8), dưới 25 chữ (p11), ba ý (p15), hai lần (p26). p18 (người nghi ngờ) dạy bằng chữ, không bịa mối lo cụ thể. Ngắt nhịp: BRK-03 (dưới 25 chữ), BRK-07 (rehook trước phần giữ/bỏ), BRK-04 (một câu chốt ↔ khác câu chốt). Khép vòng: Thứ Hai 9:00 bị hỏi “vậy kết luận gì?” (s01) → Thứ Hai tuần sau 9:00 kết luận đi trước (s22). Bản cũ: w145/bak/how-to-find-the-key-message-of-a-presentation--w01.js.",
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
            "text": "20 câu khảo sát",
            "x": 60,
            "y": 110,
            "size": 110,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 câu",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "a-20s",
            "t": "text",
            "text": "= 20 slide, đi lần lượt",
            "x": 70,
            "y": 270,
            "size": 60,
            "at": "l1:one by one"
          },
          {
            "id": "a-safe",
            "t": "text",
            "text": "Ta tưởng: càng nhiều càng an toàn",
            "x": 70,
            "y": 400,
            "size": 50,
            "at": "l2:more safety",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twenty survey questions. Twenty slides, one by one.",
          "sub": "Hai mươi câu khảo sát. Hai mươi slide, đi lần lượt từng câu.",
          "keys": [
            "Hai mươi câu khảo sát"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We think: more slides, more safety. Like wearing three helmets.",
          "sub": "Ta tưởng: càng nhiều slide càng an toàn. Như đội ba cái mũ bảo hiểm.",
          "keys": [
            "càng nhiều slide càng an toàn"
          ]
        }
      ],
      "ref": "p19"
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
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "cross"
                }
              ],
              "props": [
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 9:00 · báo cáo khảo sát",
            "icon": "bar-chart"
          },
          {
            "id": "a-6",
            "t": "text",
            "text": "Slide 6: “Vậy kết luận gì?”",
            "x": 60,
            "y": 520,
            "size": 52,
            "at": "l6:slide six",
            "color": "coral",
            "hl": [
              {
                "text": "kết luận gì?",
                "at": "l6:slide six"
              }
            ]
          },
          {
            "id": "a-end",
            "t": "text",
            "text": "→ câu trả lời ở slide cuối",
            "x": 100,
            "y": 610,
            "size": 48,
            "at": "l6:very end",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, new at the company, neat to the last comma.",
          "sub": "Đây là Thảo, nhân viên mới, ngăn nắp tới từng dấu phẩy.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Slide six. Survey question six. Next, question seven…",
          "sub": "Slide sáu. Câu khảo sát số sáu. Tiếp theo, câu bảy…",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Across the table, Cô Hoa, her manager, arms folded.",
          "sub": "Bên kia bàn là cô Hoa, trưởng phòng, đang khoanh tay."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So, what is your conclusion?",
          "sub": "Vậy rốt cuộc em kết luận gì?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Um… it's on the last slide.",
          "sub": "Dạ… nó ở slide cuối ạ.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Stopped at slide six. The answer was buried at the very end.",
          "sub": "Bị ngắt ở slide sáu. Câu trả lời bị chôn tận cuối.",
          "keys": [
            "bị chôn tận cuối"
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
      "ref": "p19"
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
            "text": "Thông điệp chính ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:find",
            "hl": [
              {
                "text": "Thông điệp chính",
                "at": "l1:key message"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Ai đang nghe?",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:who",
            "color": "accent"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Họ cần nhớ / làm gì?",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l2:remember",
            "color": "accent"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "→ viết thành MỘT câu",
            "x": 2028,
            "y": 360,
            "size": 60,
            "at": "l3:one sentence",
            "hl": [
              {
                "text": "MỘT câu",
                "at": "l3:one sentence"
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
          "say": "So how do you find your one key message, before any slides?",
          "sub": "Vậy làm sao tìm ra một thông điệp chính, trước khi làm slide?",
          "keys": [
            "thông điệp chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Answer two questions: who is listening, and what must they remember or do?",
          "sub": "Trả lời hai câu: ai đang nghe, và họ cần nhớ hoặc làm gì?",
          "keys": [
            "ai đang nghe"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then write it as one sentence. That sentence decides every slide.",
          "sub": "Rồi viết thành một câu. Câu ấy quyết định mọi slide.",
          "keys": [
            "một câu"
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
            "text": "Tuần của Thảo · đến tiệm Bác Bình",
            "x": 2028,
            "y": 545,
            "size": 46,
            "at": "l1:week"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+500",
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
            "at": "l1:week+720",
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
            "at": "l1:week+940",
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
            "at": "l1:week+1160",
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
            "at": "l1:week+1380",
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
            "at": "l1:week+1600",
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
            "at": "l1:week+1820",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3428,
            "y": 620,
            "w": 185,
            "h": 90,
            "at": "l1:week+2040",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 14h",
            "x": 2046,
            "y": 640,
            "size": 36,
            "at": "l1:week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 16h",
            "x": 2246,
            "y": 640,
            "size": 36,
            "at": "l1:week+840"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3",
            "x": 2446,
            "y": 640,
            "size": 36,
            "at": "l1:week+1060"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T3 tối",
            "x": 2646,
            "y": 640,
            "size": 36,
            "at": "l1:week+1280"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4",
            "x": 2846,
            "y": 640,
            "size": 36,
            "at": "l1:week+1500"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5",
            "x": 3046,
            "y": 640,
            "size": 36,
            "at": "l1:week+1720"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T5 tối",
            "x": 3246,
            "y": 640,
            "size": 36,
            "at": "l1:week+1940"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T2 sau",
            "x": 3446,
            "y": 640,
            "size": 36,
            "at": "l1:week+2160"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's week, toward a much bigger talk.",
          "sub": "Theo Thảo qua một tuần, tới một buổi nói lớn hơn nhiều."
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
            "text": "① Thứ Hai 14:00 · Giấy trắng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:hands"
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
            "text": "Mở máy, làm thật nhiều slide",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l3:lots",
            "color": "muted"
          },
          {
            "id": "c-swx",
            "t": "strike",
            "over": "c-sw",
            "at": "l4:blank page"
          },
          {
            "id": "c-pap",
            "t": "text",
            "text": "→ tờ giấy trắng trước",
            "x": 4036,
            "y": 250,
            "size": 54,
            "at": "l4:blank page",
            "color": "accent",
            "hl": [
              {
                "text": "giấy trắng",
                "at": "l4:blank page"
              }
            ]
          },
          {
            "id": "c-bury",
            "t": "text",
            "text": "Mở máy trước: ý chính bị chôn",
            "x": 3996,
            "y": 360,
            "size": 46,
            "at": "l5:buried",
            "color": "coral",
            "hl": [
              {
                "text": "bị chôn",
                "at": "l5:buried"
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
          "say": "Monday afternoon. Cô Hoa hands Thảo a real challenge.",
          "sub": "Chiều thứ Hai. Cô Hoa giao Thảo một thử thách thật.",
          "keys": [
            "thử thách thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Friday, you have ten minutes to show our sales software to Bác Bình's shop.",
          "sub": "Thứ Sáu, em có mười phút giới thiệu phần mềm bán hàng cho tiệm của Bác Bình.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Then I'll make lots of slides. Just to be safe!",
          "sub": "Vậy em làm thật nhiều slide cho chắc ạ!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Start from a blank page, not from the slide software.",
          "sub": "Bắt đầu từ một tờ giấy trắng, không phải từ phần mềm làm slide.",
          "keys": [
            "tờ giấy trắng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Slides first, and you copy data as you found it. The point gets buried.",
          "sub": "Mở máy trước là chép dữ liệu theo thứ tự tìm được, ý chính bị chôn.",
          "keys": [
            "ý chính bị chôn"
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
      "id": "s06",
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
            "id": "c-feel",
            "t": "text",
            "text": "Người nghe không đếm slide",
            "x": 3996,
            "y": 460,
            "size": 50,
            "at": "l1:count",
            "hl": [
              {
                "text": "không đếm slide",
                "at": "l1:count"
              }
            ]
          },
          {
            "id": "c-calm",
            "t": "text",
            "text": "Yên tâm = biết rõ mình nói gì",
            "x": 3996,
            "y": 540,
            "size": 48,
            "at": "l2:calm",
            "color": "accent"
          },
          {
            "id": "c-topic",
            "t": "text",
            "text": "Đề tài ≠ thông điệp",
            "x": 3996,
            "y": 650,
            "size": 60,
            "at": "l3:topic",
            "color": "coral",
            "hl": [
              {
                "text": "≠",
                "at": "l3:not"
              }
            ]
          },
          {
            "id": "c-ex",
            "t": "text",
            "text": "“Rác nhựa ở KTX” → đề tài",
            "x": 4836,
            "y": 700,
            "size": 44,
            "at": "l4:dorm",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "More slides feel safer. But listeners don't count slides. They remember one clear idea.",
          "sub": "Nhiều slide thấy yên tâm. Nhưng người nghe không đếm slide, họ nhớ một ý rõ ràng.",
          "keys": [
            "không đếm slide"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Real calm comes from knowing exactly what you want to say.",
          "sub": "Yên tâm thật đến từ việc biết rõ mình muốn nói gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a message is not a topic.",
          "sub": "Và thông điệp không phải tên đề tài.",
          "keys": [
            "không phải tên đề tài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plastic waste in the dorm is a topic. Each floor needs a sorting bin, because plastic gets mixed in: that's a message.",
          "sub": "“Rác nhựa ở ký túc xá” là đề tài. “Mỗi tầng nên có thùng phân loại, vì rác nhựa bị bỏ lẫn” mới là thông điệp."
        }
      ],
      "ref": "p2,p3"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai 16:00 · Ai đang nghe?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:four o'clock"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 180,
            "w": 46,
            "h": 46,
            "at": "l2:Who",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 162,
            "size": 58,
            "at": "l2:Who+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Họ là ai?",
            "x": 6034,
            "y": 172,
            "size": 50,
            "at": "l2:Who+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 46,
            "h": 46,
            "at": "l2:know",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 242,
            "size": 58,
            "at": "l2:know+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Họ đã biết gì?",
            "x": 6034,
            "y": 252,
            "size": 50,
            "at": "l2:know+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 340,
            "w": 46,
            "h": 46,
            "at": "l3:worries",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 322,
            "size": 58,
            "at": "l3:worries+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Họ đang lo gì?",
            "x": 6034,
            "y": 332,
            "size": 50,
            "at": "l3:worries+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 420,
            "w": 46,
            "h": 46,
            "at": "l3:after",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 402,
            "size": 58,
            "at": "l3:after+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Nghe xong, họ làm gì?",
            "x": 6034,
            "y": 412,
            "size": 50,
            "at": "l3:after+200"
          },
          {
            "id": "d-agree",
            "t": "text",
            "text": "Xin đồng ý → lời đề nghị",
            "x": 6804,
            "y": 180,
            "size": 48,
            "at": "l4:agreement",
            "color": "accent",
            "hl": [
              {
                "text": "lời đề nghị",
                "at": "l4:request"
              }
            ]
          },
          {
            "id": "d-upd",
            "t": "text",
            "text": "Cập nhật → điều đã đổi",
            "x": 6804,
            "y": 260,
            "size": 48,
            "at": "l5:update",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, four o'clock. Thảo asks four questions about her listeners.",
          "sub": "Bốn giờ chiều thứ Hai. Thảo hỏi bốn câu về người nghe."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Who are they? What do they already know?",
          "sub": "Họ là ai? Họ đã biết gì về chủ đề?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What worries them? And after the talk, what should they do?",
          "sub": "Họ đang lo điều gì? Và nghe xong, họ cần làm gì?",
          "keys": [
            "họ cần làm gì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That last one matters most. Asking for agreement? Lead to a request.",
          "sub": "Câu cuối quan trọng nhất. Xin đồng ý thì phải dẫn tới lời đề nghị.",
          "keys": [
            "lời đề nghị"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Just an update? Show what has changed. Same data, different talk.",
          "sub": "Chỉ cập nhật thì nêu điều gì đã thay đổi. Cùng số liệu, khác bài nói."
        }
      ],
      "ref": "p4,p5"
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
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6864,
            "y": 330,
            "w": 560,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "page-facing-up"
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
            "at": "l1:sure",
            "caption": "Hỏi lại người giao việc",
            "icon": "speech-balloon"
          },
          {
            "id": "d-ask",
            "t": "text",
            "text": "Chưa chắc? Hỏi người giao việc",
            "x": 5964,
            "y": 560,
            "size": 46,
            "at": "l1:Not sure",
            "hl": [
              {
                "text": "Hỏi người giao việc",
                "at": "l1:ask"
              }
            ]
          },
          {
            "id": "d-ser",
            "t": "text",
            "text": "= nghiêm túc, không phải thiếu chuẩn bị",
            "x": 5964,
            "y": 680,
            "size": 34,
            "at": "l4:serious",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Ask the person who gave you the task.",
          "sub": "Chưa chắc? Hỏi lại người giao việc.",
          "keys": [
            "Hỏi lại người giao việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "After Friday, what does Bác Bình need to know, or decide?",
          "sub": "Sau buổi thứ Sáu, Bác Bình cần biết hay quyết định điều gì ạ?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good question. Whether to try it in his shop.",
          "sub": "Hỏi hay đấy. Có dùng thử ở tiệm hay không.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That answer is a clue to the message. And asking shows you're serious, not unprepared.",
          "sub": "Câu trả lời là gợi ý cho thông điệp. Hỏi lại cho thấy bạn nghiêm túc, không phải thiếu chuẩn bị.",
          "keys": [
            "nghiêm túc"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Tập thử ở tiệm Bác Bình",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "binh",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mở bằng danh sách tính năng",
          "why": "Chủ tiệm cần biết phần mềm gỡ được cái vướng nào của tiệm mình.",
          "rule": "Nói điều họ cần nghe, không phải điều mình muốn kể"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Here's Bác Bình, the shop owner, slow and careful. Thảo begins.",
          "sub": "Đây là Bác Bình, chủ tiệm, chậm rãi, kỹ tính. Thảo bắt đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Feature one, feature two, feature three…",
          "sub": "Tính năng một, hai, ba…",
          "pose": "explain",
          "face": "happy",
          "react": {
            "binh": "thinking"
          },
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
          "say": "Near the end he'd ask: so how does this cut my order mistakes?",
          "sub": "Gần cuối bác sẽ hỏi: vậy nó giúp tiệm tôi bớt nhầm đơn thế nào?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "First, where does your shop get stuck?",
          "sub": "Trước hết, tiệm mình đang vướng ở đâu ạ?",
          "phase": "redo",
          "face": "thinking",
          "to": "binh"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "We often mix up orders.",
          "sub": "Tiệm hay bị nhầm đơn.",
          "phase": "redo"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Then show only the features that fix that.",
          "sub": "Vậy chỉ giới thiệu tính năng gỡ đúng chỗ đó.",
          "phase": "redo",
          "keys": [
            "gỡ đúng chỗ đó"
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
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba · Viết một câu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
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
                  "pose": "think"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sentence",
            "caption": "Thứ Ba · bàn làm việc",
            "icon": "memo"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1. Viết hết điều mình biết",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:everything"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "2. Gạch điều họ đã biết",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l2:Cross out"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "3. Nhớ một câu: câu nào?",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l3:one sentence"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "4. Ai làm gì, vì sao",
            "x": 7932,
            "y": 410,
            "size": 50,
            "at": "l4:who does what",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "l4:why"
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
          "say": "Tuesday. Four steps to one sentence.",
          "sub": "Thứ Ba. Bốn bước ra một câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write down everything you know. Cross out what they know, or what doesn't matter.",
          "sub": "Viết ra mọi điều bạn biết. Gạch điều họ đã biết hoặc không liên quan."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask: if they remember only one sentence, which one?",
          "sub": "Tự hỏi: nếu họ chỉ nhớ một câu, đó là câu nào?",
          "keys": [
            "chỉ nhớ một câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Make it short: who does what, and why.",
          "sub": "Viết cho ngắn: ai làm gì, và vì sao.",
          "keys": [
            "ai làm gì, và vì sao"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Our shop should try this software, so fewer orders get mixed up.",
          "sub": "Tiệm mình nên dùng thử phần mềm này, để bớt nhầm đơn.",
          "face": "happy"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "BRK-03",
      "data": {
        "value": 25,
        "prefix": "< ",
        "suffix": " chữ",
        "label": "câu thông điệp, nói trong một hơi",
        "illus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Under twenty-five words.",
          "sub": "Dưới hai mươi lăm chữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short enough for one breath.",
          "sub": "Đủ ngắn để nói trong một hơi.",
          "keys": [
            "một hơi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p11"
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
            "id": "e-ex",
            "t": "text",
            "text": "“Nộp bài lên thư mục chung, khỏi thất lạc”",
            "x": 7932,
            "y": 500,
            "size": 32,
            "at": "l1:shared folder",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "e-env",
            "t": "text",
            "text": "“Bảo vệ môi trường rất quan trọng”",
            "x": 7932,
            "y": 610,
            "size": 46,
            "at": "l2:environment",
            "color": "muted"
          },
          {
            "id": "e-envx",
            "t": "strike",
            "over": "e-env",
            "at": "l3:forget"
          },
          {
            "id": "e-add",
            "t": "text",
            "text": "+ hành động + lý do",
            "x": 8772,
            "y": 700,
            "size": 54,
            "at": "l4:action",
            "color": "accent",
            "hl": [
              {
                "text": "hành động",
                "at": "l4:action"
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
          "say": "Like: our class should upload group work to one shared folder, so nothing gets lost.",
          "sub": "Ví dụ: lớp mình nên nộp bài nhóm lên một thư mục chung, để không ai bị thất lạc bài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now try: protecting the environment is very important.",
          "sub": "Còn câu: bảo vệ môi trường rất quan trọng?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Everyone agrees, nobody knows what to do, so they forget it.",
          "sub": "Ai cũng đồng ý, chẳng ai biết làm gì, nên nghe xong là quên.",
          "keys": [
            "nghe xong là quên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add an action and a reason, and the sentence gets weight.",
          "sub": "Thêm hành động và lý do, câu sẽ có sức nặng ngay.",
          "keys": [
            "hành động và lý do"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "text": "④ Thứ Ba tối · Slide đầu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:evening"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "potable-water"
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
            "caption": "Thứ Ba tối · nhóm của Dũng",
            "icon": "laptop"
          },
          {
            "id": "f-bef",
            "t": "text",
            "text": "Trước: “Rác nhựa trong trường học”",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:plastic",
            "color": "muted"
          },
          {
            "id": "f-bef2",
            "t": "text",
            "text": "→ nhớ tên đề tài, không biết làm gì",
            "x": 100,
            "y": 1340,
            "size": 36,
            "at": "l3:topic",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "f-befx",
            "t": "strike",
            "over": "f-bef",
            "at": "l4:From next week"
          },
          {
            "id": "f-aft",
            "t": "text",
            "text": "Sau: “Mỗi bạn mang bình riêng,",
            "x": 60,
            "y": 1440,
            "size": 48,
            "at": "l4:bottle",
            "color": "accent"
          },
          {
            "id": "f-aft2",
            "t": "text",
            "text": "để thùng rác bớt cốc nhựa”",
            "x": 100,
            "y": 1520,
            "size": 48,
            "at": "l4:fewer",
            "color": "accent",
            "hl": [
              {
                "text": "bớt cốc nhựa",
                "at": "l4:plastic cups"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đề tài là cái tên, thông điệp là lời đề nghị",
            "x": 60,
            "y": 1790,
            "size": 36,
            "at": "l5:request",
            "font": "base",
            "hl": [
              {
                "text": "lời đề nghị",
                "at": "l5:request"
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
          "say": "Tuesday evening. Her cousin Dũng, a student, fast as a motorbike, shows his group's first slide.",
          "sub": "Tối thứ Ba. Dũng, em họ Thảo, sinh viên, nhanh như xe máy, khoe slide đầu của nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Plastic waste in schools. Done!",
          "sub": "Rác thải nhựa trong trường học. Xong!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "People will remember the topic, but nobody will know what the group wants.",
          "sub": "Người nghe nhớ tên đề tài, nhưng chẳng ai biết nhóm muốn mình làm gì."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Try: from next week, bring your own bottle, so the class bin has fewer plastic cups.",
          "sub": "Thử: từ tuần sau, mỗi bạn mang bình nước riêng, để thùng rác lớp bớt đầy cốc nhựa.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One action, one reason. A topic is a name, a message is a request.",
          "sub": "Một việc, một lý do. Đề tài là cái tên, thông điệp là lời đề nghị.",
          "keys": [
            "thông điệp là lời đề nghị"
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
      "ref": "p13,p14"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Tài liệu cả chồng, bỏ đi có phí không?",
        "illus": "card-index-dividers"
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
          "say": "A whole pile of research. Isn't cutting it a waste?",
          "sub": "Tài liệu cả chồng, bỏ đi có phí không?",
          "keys": [
            "có phí không"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p15"
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
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
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
            "text": "⑤ Thứ Tư · Giữ gì, bỏ gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l2:Keep"
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
                  "side": "center",
                  "face": "worried",
                  "pose": "shrug"
                }
              ],
              "props": [
                "card-index-dividers",
                "file-folder"
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
            "at": "l1",
            "caption": "Thứ Tư · chồng tài liệu",
            "icon": "file-folder"
          },
          {
            "id": "g-keep",
            "t": "text",
            "text": "Giữ: ý, số, ví dụ ủng hộ",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l2:support",
            "color": "accent",
            "hl": [
              {
                "text": "ủng hộ",
                "at": "l2:support"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Thường 3 ý là đủ",
            "x": 2028,
            "y": 1340,
            "size": 56,
            "at": "l3:three",
            "hl": [
              {
                "text": "3 ý",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "g-rest",
            "t": "text",
            "text": "Còn lại → phụ lục, email",
            "x": 2028,
            "y": 1430,
            "size": 40,
            "at": "l4:appendix",
            "color": "muted"
          },
          {
            "id": "g-deep",
            "t": "text",
            "text": "Hiểu sâu để đứng vững",
            "x": 2028,
            "y": 1520,
            "size": 50,
            "at": "l5:answer",
            "hl": [
              {
                "text": "đứng vững",
                "at": "l5:answer"
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
          "say": "I spent days on this. Every chart is precious!",
          "sub": "Em tìm cả mấy ngày. Biểu đồ nào cũng quý!",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep only points, numbers and examples that directly support the message.",
          "sub": "Chỉ giữ ý, số liệu, ví dụ ủng hộ trực tiếp thông điệp.",
          "keys": [
            "ủng hộ trực tiếp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three main points are usually enough: enough to argue, few enough to remember.",
          "sub": "Thường ba ý chính là đủ: đủ để lập luận, đủ ít để nhớ.",
          "keys": [
            "ba ý chính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The rest isn't lost: it goes to an appendix, a handout, or a later email.",
          "sub": "Phần còn lại không mất: vào phụ lục, tài liệu phát tay, email gửi sau."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And what stays off the slides still helps you answer questions.",
          "sub": "Phần không lên slide vẫn giúp bạn trả lời khi bị hỏi.",
          "keys": [
            "trả lời khi bị hỏi"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "g-doubt",
            "t": "text",
            "text": "Có người nghi? Nêu mối lo sớm",
            "x": 2028,
            "y": 1650,
            "size": 48,
            "at": "l1:doubts",
            "color": "coral",
            "hl": [
              {
                "text": "Nêu mối lo sớm",
                "at": "l1:early"
              }
            ]
          },
          {
            "id": "g-late",
            "t": "text",
            "text": "Bỏ qua → hỏi lại lúc khó nhất",
            "x": 2028,
            "y": 1740,
            "size": 44,
            "at": "l2:ignore",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Someone in the room doubts the idea? Name their worry early, then say why it still works.",
          "sub": "Trong phòng có người nghi ngờ? Nêu đúng mối lo của họ sớm, rồi nói vì sao đề xuất vẫn ổn.",
          "keys": [
            "Nêu đúng mối lo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ignore them, and they'll ask later, when you least expect it.",
          "sub": "Bỏ qua họ, họ sẽ hỏi lại, đúng lúc bạn ít chờ nhất."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s17",
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
            "at": "a1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "n2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm · Hai nhóm nghe",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:twice"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "left": {
                "label": "Cách A: chung slide",
                "ok": false
              },
              "right": {
                "label": "Cách B: đổi câu chốt",
                "ok": true
              }
            },
            "at": "l1:staff",
            "caption": "Thứ Năm · nhân viên tiệm",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "h-dec",
            "t": "text",
            "text": "Người quyết: kết quả, việc cần quyết",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l1:owner",
            "color": "accent"
          },
          {
            "id": "h-do",
            "t": "text",
            "text": "Người làm: phải làm gì khác",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "n2:doers",
            "color": "accent"
          },
          {
            "id": "h-same",
            "t": "text",
            "text": "Giữ dữ kiện, đổi độ sâu, ví dụ, đề nghị",
            "x": 3996,
            "y": 1430,
            "size": 36,
            "at": "n2:depth",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. Thảo presents twice: to the owner, then to the shop staff, Dũng's part-time crew.",
          "sub": "Thứ Năm. Thảo trình bày hai lần: cho chủ tiệm, rồi cho nhân viên, trong đó có Dũng làm thêm."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Here's the price, and the trial contract.",
          "sub": "Đây là giá và hợp đồng dùng thử.",
          "phase": "a",
          "pose": "explain"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "So, what do we need to do differently?",
          "sub": "Vậy bọn em cần làm gì khác ạ?",
          "phase": "a",
          "face": "thinking"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "For you: how to enter an order, and who checks it.",
          "sub": "Với các em: cách nhập đơn, và ai kiểm tra.",
          "phase": "b",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "Got it. I know my job.",
          "sub": "Rõ rồi, em biết việc của mình.",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "n2",
          "lang": "en",
          "who": "det",
          "say": "Same facts. Deciders need results, doers need their new steps. Change the depth and the request.",
          "sub": "Cùng dữ kiện. Người quyết cần kết quả, người làm cần việc mới. Đổi độ sâu và lời đề nghị.",
          "keys": [
            "Đổi độ sâu và lời đề nghị"
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-grp",
            "t": "text",
            "text": "Bài nhóm: chốt câu trước, chia sau",
            "x": 3996,
            "y": 1690,
            "size": 48,
            "at": "l1:group",
            "color": "coral",
            "hl": [
              {
                "text": "chốt câu trước",
                "at": "l1:agree"
              }
            ]
          },
          {
            "id": "h-frag",
            "t": "text",
            "text": "không thì: mấy bài nhỏ lạc nhau",
            "x": 3996,
            "y": 1780,
            "size": 40,
            "at": "l2:small talks",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In a group talk, agree on one message before you split the parts.",
          "sub": "Thuyết trình nhóm: thống nhất một câu thông điệp trước khi chia phần.",
          "keys": [
            "thống nhất một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Otherwise you get small talks that don't fit, and nobody knows what you want.",
          "sub": "Không thì thành mấy bài nhỏ không ăn nhập, người nghe chẳng biết nhóm muốn gì."
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "wrong": "Một câu chốt cho mọi người nghe",
        "right": "Cùng dữ liệu, khác người nghe, khác câu chốt",
        "wrongIllus": "loudspeaker",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One closing line for everyone?",
          "sub": "Một câu chốt cho mọi người?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same data, different listeners, different closing line.",
          "sub": "Cùng dữ liệu, khác người nghe thì khác câu chốt.",
          "keys": [
            "khác câu chốt"
          ]
        }
      ],
      "ref": "p24"
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
            "text": "⑦ Thứ Năm tối · Thử câu",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "memo"
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
            "at": "l1:night",
            "caption": "Thứ Năm tối · đọc cho Dũng nghe",
            "icon": "memo"
          },
          {
            "id": "i-rep",
            "t": "text",
            "text": "Đọc to → nhờ nhắc lại",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l1:aloud",
            "hl": [
              {
                "text": "nhắc lại",
                "at": "l1:repeat"
              }
            ]
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Đúng ý → làm slide",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l4:right",
            "color": "accent"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Ngập ngừng → viết lại",
            "x": 5964,
            "y": 1430,
            "size": 50,
            "at": "l4:hesitates",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday night. Thảo reads her sentence aloud to Dũng, and asks him to repeat it.",
          "sub": "Tối thứ Năm. Thảo đọc to câu thông điệp cho Dũng, rồi nhờ cậu nhắc lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The shop should try this software, so fewer orders get mixed up.",
          "sub": "Tiệm nên dùng thử phần mềm, để bớt nhầm đơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So, try it, and stop mixing up orders?",
          "sub": "Tức là dùng thử, để hết nhầm đơn?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right idea, his own words? Make the slides. If he hesitates, rewrite first.",
          "sub": "Nhắc đúng ý bằng lời của mình? Làm slide được rồi. Ngập ngừng thì viết lại câu trước.",
          "keys": [
            "viết lại câu trước"
          ]
        }
      ],
      "ref": "p25"
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
            "id": "i-pos",
            "t": "text",
            "text": "Slide đầu + slide cuối · nói 2 lần",
            "x": 5964,
            "y": 1540,
            "size": 46,
            "at": "l1:first",
            "color": "accent",
            "hl": [
              {
                "text": "nói 2 lần",
                "at": "l1:twice"
              }
            ]
          },
          {
            "id": "i-once",
            "t": "text",
            "text": "Người nghe chỉ nghe một lần",
            "x": 5964,
            "y": 1630,
            "size": 46,
            "at": "l2:once"
          },
          {
            "id": "i-comp",
            "t": "text",
            "text": "Quên câu chữ, vẫn biết đường",
            "x": 5964,
            "y": 1730,
            "size": 52,
            "at": "l3:forget",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn biết đường",
                "at": "l3:where"
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
          "say": "Put the message on the first and last slides, and say it aloud at least twice.",
          "sub": "Đặt thông điệp ở slide đầu và slide cuối, nói to ít nhất hai lần.",
          "keys": [
            "slide đầu và slide cuối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Readers can flip back. Listeners hear it once, so repeat it on purpose.",
          "sub": "Người đọc lật lại được, người nghe chỉ nghe một lần, nên lặp lại có chủ đích."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And if you forget a line, you still know where you're going. Like a compass.",
          "sub": "Lỡ quên câu chữ, bạn vẫn biết mình đi về đâu. Như có la bàn.",
          "keys": [
            "la bàn"
          ]
        }
      ],
      "ref": "p26,p27"
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
            "text": "⑧ Thứ Hai sau · 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same"
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
            "at": "l1:same",
            "caption": "Thứ Hai tuần sau 9:00 · báo cáo lại",
            "icon": "bar-chart"
          },
          {
            "id": "j-first",
            "t": "text",
            "text": "Kết luận trước · 3 ý",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l2:conclusion",
            "color": "accent",
            "hl": [
              {
                "text": "Kết luận trước",
                "at": "l2:conclusion"
              }
            ]
          },
          {
            "id": "j-20",
            "t": "text",
            "text": "20 câu khảo sát → phụ lục",
            "x": 7932,
            "y": 1360,
            "size": 46,
            "at": "l2:appendix",
            "color": "muted"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Hiểu nhiều để trả lời,",
            "x": 7932,
            "y": 1470,
            "size": 54,
            "at": "l4:Know",
            "hl": [
              {
                "text": "Hiểu nhiều",
                "at": "l4:Know"
              }
            ]
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "nói ít để người ta nhớ",
            "x": 7972,
            "y": 1550,
            "size": 54,
            "at": "l4:Say little",
            "color": "accent",
            "hl": [
              {
                "text": "nói ít",
                "at": "l4:Say little"
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
          "say": "Next Monday, nine a.m. Same room, same survey.",
          "sub": "Thứ Hai tuần sau, chín giờ. Vẫn phòng ấy, vẫn khảo sát ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My conclusion first, with three points. All twenty questions are in the appendix.",
          "sub": "Kết luận của em trước, kèm ba ý. Đủ hai mươi câu khảo sát nằm ở phụ lục.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Clear. Right, next!",
          "sub": "Rõ. Rồi, tiếp nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Know a lot to answer. Say little to be remembered.",
          "sub": "Hiểu nhiều để trả lời, nói ít để người ta nhớ.",
          "keys": [
            "Hiểu nhiều để trả lời, nói ít để người ta nhớ"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "ms": 1400
          },
          {
            "at": "l1:listening",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:sentence",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:friend",
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
            "y": 40,
            "at": "l1:listening"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 690,
            "at": "l2:sentence"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7504,
            "y": 1780,
            "at": "l3:friend"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "e-4"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:reason"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: a blank page, then who is listening, and what they must do.",
          "sub": "Tóm lại: tờ giấy trắng, rồi hỏi ai đang nghe, họ cần làm gì.",
          "keys": [
            "ai đang nghe"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One sentence with an action and a reason. About three points to support it.",
          "sub": "Một câu có việc và lý do. Khoảng ba ý ủng hộ.",
          "keys": [
            "Một câu có việc và lý do"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a friend who can repeat it. Then, and only then, the slides.",
          "sub": "Và một người bạn nhắc lại được. Rồi mới đến slide.",
          "keys": [
            "nhắc lại được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your key message is a compass: fewer slides, fewer nerves, and listeners take home what you meant.",
          "sub": "Thông điệp chính là la bàn: slide gọn hơn, bớt run hơn, người nghe mang về đúng điều bạn muốn.",
          "keys": [
            "la bàn"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p28,outro"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[21]",
      "data": {
        "q": "Which points should you keep in your presentation?",
        "options": [
          "Only the points, numbers and examples that directly support your key message",
          "The points that took you the longest time to research and prepare",
          "All the interesting facts, because the audience can choose what they like best"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "scissors",
        "why": "Mỗi ý phải giúp người nghe tin hoặc hiểu thông điệp chính."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which points should you keep in your presentation?",
          "sub": "Bạn nên giữ lại những ý nào trong bài thuyết trình?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Only the points, numbers and examples that directly support your key message.",
          "sub": "Chỉ những ý, số liệu, ví dụ ủng hộ trực tiếp thông điệp chính."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Every point must help listeners believe or understand your message.",
          "sub": "Mỗi ý phải giúp người nghe tin hoặc hiểu thông điệp."
        }
      ]
    },
    {
      "id": "s35",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, write one sentence for your next talk and read it to a friend. Then try the forty questions below!",
          "sub": "Hôm nay viết một câu thông điệp, đọc cho một người bạn nghe. Rồi thử bốn mươi câu bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
