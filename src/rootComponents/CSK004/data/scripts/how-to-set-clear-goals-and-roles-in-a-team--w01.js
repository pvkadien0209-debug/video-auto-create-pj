// Kịch bản video W lần 3 (#110) — "Cách phân vai trò rõ ràng khi bắt đầu làm việc nhóm" · chuỗi "Làm thành viên tốt trong nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-set-clear-goals-and-roles-in-a-team--w01",
  "hook": "HOOK-01",
  "unit": {
    "audience": "team-members",
    "slug": "how-to-set-clear-goals-and-roles-in-a-team",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách phân vai trò rõ ràng khi bắt đầu làm việc nhóm",
    "series": "Làm thành viên tốt trong nhóm"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo BUỔI HỌP ĐẦU của nhóm Lan kỳ này, từng phút (mở: 3 giờ sáng đêm trước hạn KỲ TRƯỚC, Lan làm nốt danh mục tài liệu tham khảo — 📌 p3) → 19:00 ba câu hỏi (BRK-03 “20 phút”), mục tiêu một câu (p6) → 19:05 hỏi lại thầy Bình (p7), mô tả “xong” (☐ p9), “Khoan đã!” bộ slide của chị Thảo (❓ p10) → 19:20 liệt kê việc, hỏi từng người → 19:35 một việc một tên (BRK-12, ✍️ p15 dùng nguyên dòng Mẫn/Thoa của kỳ trước, kỳ này gán Dũng/Lan; p17 Lan mở lời) → 21:00 tin nhắn ghim (p19) → BRK-07 rehook → chuyện thứ Tư/thứ Sáu ở công ty chị Thảo (📌 p21) → một tuần sau, mốc giữa chừng (p23) → Dũng xin đổi vai công khai (p24) → BRK-11 (☐ p25) → 3 giờ sáng đêm trước hạn KỲ NÀY, Lan ngủ ngon (khép vòng). Nhân vật (w145/_series/team-members.md): Lan (Khuê p3, Uyên/người nhắn p19), Dũng (bạn trong nhóm), chị Thảo (Diệp/Tín p10; Kiên p21 — đồng nghiệp không lên hình), thầy Bình chỉ được nhắc. Câu Dũng xin đổi vai (s19) và câu trả lời của Dũng ở s11 là lời dựng minh hoạ cho p13/p24. Tục ngữ mở/khép: “Cha chung không ai khóc” → việc có tên thì xong. Câu đố questions[17]. Bản cũ (W lần 3, #110): w145/bak/how-to-set-clear-goals-and-roles-in-a-team--w01.js.",
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
            "id": "a-n",
            "t": "text",
            "text": "3 giờ sáng",
            "x": 60,
            "y": 130,
            "size": 150,
            "at": "l1:Three",
            "color": "accent",
            "hl": [
              {
                "text": "3 giờ sáng",
                "at": "l1:Three a.m."
              }
            ]
          },
          {
            "id": "a-s",
            "t": "text",
            "text": "đêm trước hạn nộp · kỳ trước",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l1:night before"
          },
          {
            "id": "a-r",
            "t": "text",
            "text": "Danh mục tài liệu: chưa ai làm",
            "x": 70,
            "y": 430,
            "size": 50,
            "at": "l2:reference",
            "color": "coral",
            "hl": [
              {
                "text": "chưa ai làm",
                "at": "l2:nobody"
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
          "say": "Three a.m., the night before the deadline. Last term.",
          "sub": "Ba giờ sáng, đêm trước hạn nộp. Kỳ trước.",
          "keys": [
            "Ba giờ sáng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Someone is still typing. Not the essay. The reference list nobody did.",
          "sub": "Có người vẫn đang gõ. Không phải bài viết, mà là danh mục tài liệu tham khảo chưa ai làm."
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
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
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
            "y": 140,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "face": "worried",
                  "pose": "think",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
              ]
            },
            "at": "l1",
            "caption": "Kỳ trước · 3 giờ sáng",
            "icon": "crescent-moon"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cha chung không ai khóc”",
            "x": 60,
            "y": 540,
            "size": 52,
            "at": "l4:Nobody mourns",
            "color": "accent",
            "hl": [
              {
                "text": "không ai khóc",
                "at": "l4:mourns"
              }
            ]
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Việc chưa có tên → người thức khuya",
            "x": 60,
            "y": 690,
            "size": 48,
            "at": "l5:without a name",
            "color": "coral",
            "hl": [
              {
                "text": "người thức khuya",
                "at": "l5:stays up late"
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
          "say": "Meet Lan, a second-year student, and the biggest worrier in her four-person group.",
          "sub": "Đây là Lan, sinh viên năm hai, người hay lo nhất trong nhóm bốn người.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Who was doing the references? And who is submitting?",
          "sub": "Ai làm phần tài liệu tham khảo vậy? Mà ai nộp bài?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Their first meeting was fun, and ended with: let's all just do our part.",
          "sub": "Buổi đầu bàn rất vui, cuối buổi có người nói: “Thôi mọi người cứ làm phần mình nhé.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: a father shared by all, nobody mourns. A task shared by all, nobody does.",
          "sub": "Ông bà nói: “Cha chung không ai khóc.” Còn việc chung thì… không ai làm.",
          "keys": [
            "Cha chung không ai khóc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A task without a name belongs to whoever stays up late.",
          "sub": "Việc chưa có tên là việc của người thức khuya.",
          "keys": [
            "việc của người thức khuya"
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
      "ref": "p3,p4"
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
            "text": "Rõ vai ngay từ buổi đầu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:first meeting",
            "hl": [
              {
                "text": "Rõ vai",
                "at": "l1:clear"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Thiếu người giỏi",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:talent",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l2:pictures"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Mỗi người hiểu đề một kiểu",
            "x": 2468,
            "y": 170,
            "size": 52,
            "at": "l2:pictures",
            "hl": [
              {
                "text": "một kiểu",
                "at": "l2:differently"
              }
            ]
          },
          {
            "id": "b-e",
            "t": "text",
            "text": "“đọc sách”: khảo sát? tổng hợp tài liệu?",
            "x": 2028,
            "y": 260,
            "size": 40,
            "at": "l3:survey",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "Việc chung → người hay lo nhất",
            "x": 2028,
            "y": 330,
            "size": 50,
            "at": "l4:worrier",
            "color": "coral",
            "hl": [
              {
                "text": "người hay lo nhất",
                "at": "l4:worrier"
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
          "say": "So how do you set clear goals and roles at the very first meeting?",
          "sub": "Vậy làm sao để rõ mục tiêu, rõ vai ngay từ buổi họp đầu?",
          "keys": [
            "rõ vai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Groups rarely fail for lack of talent. Each person pictures the task differently.",
          "sub": "Nhóm hiếm khi rối vì thiếu người giỏi, mà vì mỗi người hiểu đề một kiểu.",
          "keys": [
            "mỗi người hiểu đề một kiểu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An essay on reading habits? One hears survey, another hears literature review. Nobody says it aloud.",
          "sub": "Tiểu luận về thói quen đọc sách? Người nghe ra khảo sát, người nghe ra tổng hợp tài liệu. Không ai nói ra."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And shared jobs, like booking or submitting, fall to the biggest worrier. Maybe you.",
          "sub": "Còn việc chung như đặt phòng, nộp bài thì rơi vào người hay lo nhất. Có khi là bạn.",
          "keys": [
            "người hay lo nhất"
          ]
        }
      ],
      "ref": "intro,p1,p2"
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
            "id": "b-4",
            "t": "text",
            "text": "1 câu · “xong” · 1 tên · ghim",
            "x": 2028,
            "y": 440,
            "size": 54,
            "at": "l1:one goal",
            "color": "accent",
            "hl": [
              {
                "text": "ghim",
                "at": "l1:pinned"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l3:minute+300",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l3:minute+550",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l3:minute+800",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l3:minute+1050",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l3:minute+1300",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l3:minute+1550",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "19:00",
            "x": 2058,
            "y": 620,
            "size": 44,
            "at": "l3:minute+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "19:05",
            "x": 2333,
            "y": 620,
            "size": 44,
            "at": "l3:minute+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "19:20",
            "x": 2608,
            "y": 620,
            "size": 44,
            "at": "l3:minute+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "19:35",
            "x": 2883,
            "y": 620,
            "size": 44,
            "at": "l3:minute+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "21:00",
            "x": 3158,
            "y": 620,
            "size": 44,
            "at": "l3:minute+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "+1 tuần",
            "x": 3433,
            "y": 620,
            "size": 44,
            "at": "l3:minute+1670"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The fix: one goal sentence, a clear done, one name per task, and one pinned message.",
          "sub": "Cách tránh: một câu mục tiêu, một mô tả “xong”, mỗi việc một tên, và một tin nhắn ghim.",
          "keys": [
            "một tin nhắn ghim"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty minutes at the start saves a week of sprinting at the end.",
          "sub": "Hai mươi phút lúc đầu đỡ cho bạn cả tuần cuối chạy nước rút.",
          "keys": [
            "Hai mươi phút lúc đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This term, let's sit in on Lan's first meeting, minute by minute.",
          "sub": "Kỳ này, ta ngồi dự buổi họp đầu của nhóm Lan, từng phút một."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s04",
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
            "text": "① 19:00 · Ba câu hỏi",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 140,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1:Dũng"
                }
              ],
              "props": [
                "books"
              ]
            },
            "at": "l1:library",
            "caption": "Thứ Năm · 19:00 · thư viện",
            "icon": "books"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Làm để làm gì?",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l4:What"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Xong trông thế nào?",
            "x": 3996,
            "y": 245,
            "size": 52,
            "at": "l4:done"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Ai lo phần nào?",
            "x": 3996,
            "y": 320,
            "size": 52,
            "at": "l4:Who"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Câu nào lúng túng → chưa chia",
            "x": 3996,
            "y": 400,
            "size": 44,
            "at": "l4:shaky",
            "color": "coral",
            "hl": [
              {
                "text": "chưa chia",
                "at": "l4:not ready"
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
          "say": "First stop: seven p.m., the library. Meet Dũng, Lan's teammate: fast hands, short memory.",
          "sub": "Chặng một: bảy giờ tối, thư viện. Đây là Dũng, bạn cùng nhóm: nhanh tay, mau quên.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Let's just split it and go home!",
          "sub": "Chia luôn cho nhanh rồi về thôi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not yet. Spend the first twenty minutes on three questions.",
          "sub": "Khoan đã. Dành hai mươi phút đầu cho ba câu hỏi.",
          "keys": [
            "hai mươi phút đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What is it for? What does done look like? Who takes which part? Any shaky answer means not ready.",
          "sub": "Làm để làm gì? Xong trông thế nào? Ai lo phần nào? Câu nào còn lúng túng là chưa sẵn sàng chia việc."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s05",
      "module": "BRK-03",
      "data": {
        "value": 20,
        "suffix": " phút",
        "label": "đầu buổi họp, trước khi ai nhận việc gì",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twenty minutes.",
          "sub": "Hai mươi phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before anyone takes a single task.",
          "sub": "Trước khi ai nhận bất cứ việc gì.",
          "keys": [
            "Trước khi ai nhận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "id": "c-g",
            "t": "text",
            "text": "Mục tiêu = một câu",
            "x": 3996,
            "y": 500,
            "size": 56,
            "at": "l1:one sentence",
            "color": "accent",
            "hl": [
              {
                "text": "một câu",
                "at": "l1:one sentence"
              }
            ]
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "khảo sát ~15 trang, trước tối thứ Sáu",
            "x": 3996,
            "y": 580,
            "size": 30,
            "at": "l2:fifteen",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-g3",
            "t": "text",
            "text": "Bốn người, bốn kiểu? Dừng lại!",
            "x": 4836,
            "y": 690,
            "size": 48,
            "at": "l3:Four people",
            "color": "coral",
            "hl": [
              {
                "text": "Dừng lại",
                "at": "l3:Stop"
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
          "say": "A good goal is one sentence everyone repeats the same way.",
          "sub": "Mục tiêu tốt là một câu mà ai nhắc lại cũng giống nhau.",
          "keys": [
            "một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "A survey report, about fifteen pages, on first-year reading habits, before Friday night.",
          "sub": "Bài khảo sát khoảng mười lăm trang về thói quen đọc sách của sinh viên năm nhất, trước tối thứ Sáu.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four people, four versions? Stop and agree first.",
          "sub": "Bốn người nói ra bốn kiểu? Dừng lại thống nhất trước.",
          "keys": [
            "thống nhất trước"
          ]
        }
      ],
      "ref": "p6"
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
            "text": "② 19:05 · Thế nào là “xong”?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 140,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "envelope"
              ]
            },
            "at": "l1:Mr. Bình",
            "caption": "19:05 · nhắn hỏi thầy Bình",
            "icon": "envelope"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Đoán rồi chia theo đoán",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l3:guess",
            "color": "muted"
          },
          {
            "id": "d-1x",
            "t": "strike",
            "over": "d-1",
            "at": "l3:cheaper"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "1 câu hỏi đầu < làm lại cuối",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l3:cheaper",
            "color": "accent",
            "hl": [
              {
                "text": "1 câu hỏi đầu",
                "at": "l3:One question"
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
          "say": "Second stop: seven-oh-five. Lan isn't sure what Mr. Bình, their lecturer, really wants.",
          "sub": "Chặng hai: bảy giờ năm phút. Lan chưa chắc thầy Bình, giảng viên môn này, muốn gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Excuse me, sir, do you want a survey or a literature review?",
          "sub": "Dạ, thầy muốn bài dạng khảo sát hay tổng hợp tài liệu ạ?",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't divide work on a guess. One question at the start is much cheaper than redoing it.",
          "sub": "Đừng đoán rồi chia việc theo phỏng đoán. Một câu hỏi lúc đầu rẻ hơn nhiều so với làm lại lúc cuối.",
          "keys": [
            "rẻ hơn nhiều"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-x",
            "t": "text",
            "text": "“Xong” là:",
            "x": 5964,
            "y": 340,
            "size": 52,
            "at": "l1:done",
            "hl": [
              {
                "text": "“Xong”",
                "at": "l1:done"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 420,
            "w": 44,
            "h": 44,
            "at": "l2:text",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 404,
            "size": 56,
            "at": "l2:text+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Dạng: văn bản, slide, video",
            "x": 6029,
            "y": 410,
            "size": 38,
            "at": "l2:text+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 482,
            "w": 44,
            "h": 44,
            "at": "l2:Length",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 466,
            "size": 56,
            "at": "l2:Length+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Độ dài, mẫu trình bày",
            "x": 6029,
            "y": 472,
            "size": 38,
            "at": "l2:Length+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 544,
            "w": 44,
            "h": 44,
            "at": "l2:deadline",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 528,
            "size": 56,
            "at": "l2:deadline+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Hạn chót kèm giờ nộp",
            "x": 6029,
            "y": 534,
            "size": 38,
            "at": "l2:deadline+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 606,
            "w": 44,
            "h": 44,
            "at": "l3:submits",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 590,
            "size": 56,
            "at": "l3:submits+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Ai nộp, nộp ở đâu",
            "x": 6029,
            "y": 596,
            "size": 38,
            "at": "l3:submits+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 668,
            "w": 44,
            "h": 44,
            "at": "l3:graded",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 652,
            "size": 56,
            "at": "l3:graded+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Tiêu chí chấm, tiêu chí duyệt",
            "x": 6029,
            "y": 658,
            "size": 38,
            "at": "l3:graded+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next: what does done look like? Many groups agree on the deadline, then forget the product.",
          "sub": "Tiếp: thế nào là “xong”? Nhiều nhóm chỉ chốt hạn chót mà quên mô tả sản phẩm cuối.",
          "keys": [
            "quên mô tả sản phẩm cuối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Text, slides or video. Length and template. The deadline, with the time.",
          "sub": "Văn bản, slide hay video. Độ dài và mẫu. Hạn chót kèm giờ nộp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Who submits, and where. How it's graded. Got last year's sample? Open it together.",
          "sub": "Ai nộp, nộp ở đâu. Chấm theo tiêu chí nào. Có bài mẫu khoá trước thì mở ra cùng xem."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
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
            "at": "l1:Thảo",
            "fit": [
              "d-v2"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 140,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Công ty chị Thảo · bộ slide sản phẩm mới",
            "icon": "laptop"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same trap at work. Meet Thảo, Lan's cousin. She and a colleague must make a new product deck.",
          "sub": "Ở công ty cũng y vậy. Đây là chị Thảo, chị họ của Lan. Chị và một đồng nghiệp được giao làm bộ slide giới thiệu sản phẩm mới.",
          "keys": [
            "chị Thảo"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Công ty · chia bộ slide",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chia slide mà chưa hỏi ai xem",
          "why": "Hai mươi slide thông số ghép với tám slide toàn hình, lệch giọng, làm lại gần hết trong một ngày.",
          "rule": "Xong là gì phải nói trước"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Let's split it. Half the slides each, merge later!",
          "sub": "Chia đôi nhé. Mỗi người một nửa, ghép sau!",
          "pose": "explain",
          "face": "happy",
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
          "say": "Nobody asked who will watch. Twenty spec slides meet eight picture slides. A day redoing.",
          "sub": "Chưa ai hỏi ai sẽ xem. Hai mươi slide thông số gặp tám slide toàn hình. Mất một ngày làm lại.",
          "keys": [
            "ai sẽ xem"
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
          "who": "thao",
          "say": "Before we split: who is this deck for? And let's open an old deck as a model.",
          "sub": "Trước khi chia: bộ slide này chiếu cho ai xem? Mình mở một bộ cũ làm mẫu nhé.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Say what done is first, or argue after it's done.",
          "sub": "Xong là gì phải nói trước, kẻo làm xong rồi mới cãi.",
          "phase": "redo",
          "keys": [
            "Xong là gì phải nói trước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11"
    },
    {
      "id": "s11",
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
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 19:20 · Liệt kê, hỏi ý",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 140,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l1:lists",
            "caption": "19:20 · liệt kê việc",
            "icon": "clipboard"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đặt phòng · hẹn người · soát chính tả · nộp",
            "x": 7932,
            "y": 170,
            "size": 34,
            "at": "l2:Booking",
            "font": "base"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Không ghi ra = bị quên",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l3:forgotten",
            "color": "coral",
            "hl": [
              {
                "text": "bị quên",
                "at": "l3:forgotten"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Mạnh gì? Thử gì? Bận cỡ nào?",
            "x": 7932,
            "y": 340,
            "size": 44,
            "at": "l4:good at",
            "color": "accent"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Được hỏi ý → nhận việc vui hơn",
            "x": 7932,
            "y": 690,
            "size": 48,
            "at": "l6:asked",
            "hl": [
              {
                "text": "vui hơn",
                "at": "l6:happily"
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
          "say": "Third stop: seven twenty. Lan lists every task, even the small ones.",
          "sub": "Chặng ba: bảy giờ hai mươi. Lan liệt kê mọi phần việc, kể cả việc nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Booking the room, setting up interviews, spell check, submitting. All on the list.",
          "sub": "Đặt phòng, hẹn người phỏng vấn, soát chính tả, nộp bài. Ghi hết vào.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A small job not written down is a small job forgotten.",
          "sub": "Việc nhỏ không được ghi ra là việc nhỏ bị quên.",
          "keys": [
            "việc nhỏ bị quên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Dũng, what are you good at, what do you want to try, and how busy are you this week?",
          "sub": "Dũng ơi, bạn mạnh phần nào, muốn thử phần nào, tuần này bận cỡ nào?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Exams next week. But I'd like to try the interviews!",
          "sub": "Tuần sau mình thi. Nhưng mình muốn thử phần phỏng vấn!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "People who are asked take tasks more happily than people who are told. And you learn who has exams.",
          "sub": "Người được hỏi ý nhận việc vui vẻ hơn người bị chỉ định. Bạn cũng biết ai đang kẹt lịch thi."
        }
      ],
      "ref": "p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 19:35 · Một việc, một tên",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop",
            "hl": [
              {
                "text": "một tên",
                "at": "l1:one name"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "label"
              ]
            },
            "at": "l1:golden",
            "caption": "19:35 · bảng phân công",
            "icon": "label"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Một tên",
            "x": 60,
            "y": 1260,
            "size": 110,
            "at": "l1:one name",
            "color": "accent"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Cùng làm được, một người lo xong",
            "x": 60,
            "y": 1420,
            "size": 44,
            "at": "l2:in charge"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: seven thirty-five. The golden rule: one name per task.",
          "sub": "Chặng bốn: bảy giờ ba lăm. Luật vàng: mỗi việc một tên.",
          "keys": [
            "mỗi việc một tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two can work on it, but one person is in charge of finishing on time.",
          "sub": "Hai người có thể cùng làm, nhưng chỉ một người phụ trách chính, lo việc xong đúng hạn."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s13",
      "module": "BRK-12",
      "data": {
        "word": "Một tên",
        "sub": "Mỗi việc đúng một người phụ trách chính",
        "from": [
          600,
          330
        ],
        "others": [
          "19:35",
          "việc",
          "hạn"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One name.",
          "sub": "Một tên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One main owner for every task.",
          "sub": "Mỗi việc đúng một người phụ trách chính.",
          "keys": [
            "một người phụ trách chính"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p14"
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
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-b",
            "t": "text",
            "text": "Trước: “Phỏng vấn 10 bạn: Mẫn, Thoa”",
            "x": 60,
            "y": 1510,
            "size": 40,
            "at": "l1:Mẫn",
            "color": "muted"
          },
          {
            "id": "f-bx",
            "t": "strike",
            "over": "f-b",
            "at": "l1:no interviews"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Sau: Dũng phụ trách, Lan hỗ trợ",
            "x": 60,
            "y": 1580,
            "size": 40,
            "at": "l2:Dũng leads",
            "color": "accent",
            "hl": [
              {
                "text": "phụ trách",
                "at": "l2:leads"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Hai tên một việc → ngồi chờ nhau",
            "x": 60,
            "y": 1670,
            "size": 44,
            "at": "l3:waits",
            "color": "coral"
          },
          {
            "id": "f-l",
            "t": "text",
            "text": "Không cần chức danh để mở lời",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l4:title",
            "hl": [
              {
                "text": "mở lời",
                "at": "l4:speak up"
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
          "say": "Last term's line: interview ten students, Mẫn, Thoa. Each thought the other would start. A week later, no interviews.",
          "sub": "Dòng kỳ trước: “Phỏng vấn mười bạn sinh viên: Mẫn, Thoa.” Ai cũng tưởng người kia lo. Một tuần sau, chưa ai phỏng vấn ai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This term: Dũng leads the interviews, Lan helps book people. A few words, and everyone knows who starts.",
          "sub": "Kỳ này: Dũng phụ trách phỏng vấn, Lan hỗ trợ hẹn người quen. Thêm vài chữ, ai cũng biết ai bắt đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two names, one task: each one waits for the other.",
          "sub": "Hai tên một việc, mỗi người ngồi chờ người kia.",
          "keys": [
            "mỗi người ngồi chờ người kia"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No leader yet? You don't need a title to speak up.",
          "sub": "Nhóm chưa có nhóm trưởng? Bạn không cần chức danh mới được mở lời."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Let's list the tasks and split them now. I'll write it down.",
          "sub": "Mình cùng liệt kê việc rồi chia luôn cho chắc nhé, mình ghi lại cho.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Most groups quietly thank the person who dares to start.",
          "sub": "Đa số các nhóm sẽ thầm cảm ơn người dám mở lời.",
          "keys": [
            "người dám mở lời"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 21:00 · Tin nhắn ghim",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop",
            "hl": [
              {
                "text": "Tin nhắn ghim",
                "at": "l1:summary"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "round-pushpin"
              ]
            },
            "at": "l1:home",
            "caption": "21:00 · nhóm chat",
            "icon": "round-pushpin"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "📌 Mục tiêu · Xong là · Phân công",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:Goal"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "khảo sát: Dũng, thứ Tư · nộp: Lan, thứ Sáu",
            "x": 2028,
            "y": 1330,
            "size": 30,
            "at": "l2:survey",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Ai thấy sai thì sửa giúp",
            "x": 2028,
            "y": 1400,
            "size": 46,
            "at": "l3:fix",
            "color": "accent"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Tin ghim = trí nhớ chung",
            "x": 2028,
            "y": 1780,
            "size": 52,
            "at": "l4:shared memory",
            "color": "accent",
            "hl": [
              {
                "text": "trí nhớ chung",
                "at": "l4:shared memory"
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
          "say": "Fifth stop: nine p.m. Lan is home, and sends one summary to the group chat.",
          "sub": "Chặng năm: chín giờ tối. Lan về nhà, gửi một tin tóm tắt vào nhóm chat."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Goal, done means, and tasks: survey, Dũng, Wednesday; merging and submitting, me, Friday night.",
          "sub": "“Chốt buổi hôm nay nhé. Mục tiêu, xong là, phân công: khảo sát, Dũng, thứ Tư; ghép bài và nộp, mình, tối thứ Sáu.”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "If anything is wrong, please fix it before tonight.",
          "sub": "“Ai thấy sai thì sửa giúp trước tối nay nha.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then she pins it. Words in a meeting fade. The pinned message is the group's shared memory.",
          "sub": "Rồi ghim lên đầu. Lời nói trong buổi họp dễ quên; tin nhắn ghim là trí nhớ chung của nhóm.",
          "keys": [
            "trí nhớ chung"
          ]
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Chia rõ rồi, sao vẫn cãi “thứ Tư hay thứ Sáu”?",
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
          "say": "Clear roles, and still a fight about the deadline?",
          "sub": "Chia rõ rồi, sao vẫn cãi nhau về hạn chót?",
          "keys": [
            "vẫn cãi nhau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p21"
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
            "at": "l2",
            "fit": [
              "g-v2"
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
            "id": "g-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "worried",
                  "pose": "cross"
                }
              ],
              "props": [
                "spiral-calendar"
              ]
            },
            "at": "l1:office",
            "caption": "Công ty chị Thảo · khảo sát nội bộ",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Thứ Tư? Thứ Sáu?",
            "x": 2028,
            "y": 1510,
            "size": 56,
            "at": "l3:Friday",
            "color": "coral"
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Không có gì để đối chiếu",
            "x": 2028,
            "y": 1600,
            "size": 44,
            "at": "l3:nothing",
            "color": "muted"
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "Nói miệng: mỗi người nhớ một kiểu",
            "x": 2868,
            "y": 1780,
            "size": 40,
            "at": "l4:Spoken",
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
          "say": "At Thảo's office, she coordinates a three-person survey. Roles were clear, but only spoken.",
          "sub": "Ở công ty, chị Thảo điều phối nhóm ba người làm khảo sát nội bộ. Chia việc rất rõ, nhưng chỉ nói miệng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The deadline is Wednesday. I'm sure!",
          "sub": "Hạn là thứ Tư. Chị nhớ chắc mà!",
          "face": "worried",
          "pose": "cross"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her colleague remembers Friday. They argue, with nothing to check.",
          "sub": "Đồng nghiệp lại nhớ thứ Sáu. Hai người cãi nhau mà không có gì để đối chiếu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Spoken plans live in many memories. Written plans live in one.",
          "sub": "Nói miệng thì mỗi người nhớ một kiểu, viết ra thì cả nhóm nhớ một kiểu.",
          "keys": [
            "viết ra thì cả nhóm nhớ một kiểu"
          ]
        }
      ],
      "ref": "p21,p22"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Một tuần sau · Giữa chừng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:halfway",
            "caption": "Một tuần sau · xem bản nháp",
            "icon": "page-facing-up"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Ít nhất một mốc giữa chừng",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:halfway check",
            "hl": [
              {
                "text": "mốc giữa chừng",
                "at": "l3:halfway check"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Thấy sớm phần chậm, lệch đề",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l3:slow",
            "color": "muted"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "→ lúc vẫn còn kịp sửa",
            "x": 4026,
            "y": 1410,
            "size": 46,
            "at": "l3:still fix",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: a week later, halfway to the deadline. Draft day.",
          "sub": "Chặng sáu: một tuần sau, thời hạn đã đi được một nửa. Ngày xem bản nháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Let's read the drafts together. Is any part slow, or off-topic?",
          "sub": "Mình cùng xem bản nháp nhé. Có phần nào đang chậm hay lệch đề không?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Set at least one halfway check. You catch slow or off-topic parts while you can still fix them.",
          "sub": "Đặt ít nhất một mốc kiểm tra giữa chừng, để thấy sớm phần chậm, phần lệch đề, lúc vẫn còn kịp sửa.",
          "keys": [
            "mốc kiểm tra giữa chừng"
          ]
        }
      ],
      "ref": "p23"
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
            "text": "⑦ Đổi vai giữa chừng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "worried",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "round-pushpin"
              ]
            },
            "at": "l1:swap",
            "caption": "Cùng buổi · Dũng xin đổi việc",
            "icon": "round-pushpin"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Đổi vai: nói công khai",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l3:openly",
            "hl": [
              {
                "text": "công khai",
                "at": "l3:openly"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "+ sửa tin nhắn ghim",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l3:update",
            "color": "accent"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Đổi ngầm → một phần trống",
            "x": 5964,
            "y": 1440,
            "size": 48,
            "at": "l4:secret",
            "color": "coral",
            "hl": [
              {
                "text": "một phần trống",
                "at": "l4:empty"
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
          "say": "Seventh stop: same day. Dũng's exams pile up, and he wants to swap.",
          "sub": "Chặng bảy: cùng buổi ấy. Lịch thi của Dũng dồn lại, Dũng muốn đổi việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Can I swap the interviews for the slides? Exams are crushing me.",
          "sub": "Mình đổi phần phỏng vấn lấy phần slide được không? Lịch thi đè bẹp mình rồi.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Swapping is fine. Say it openly, and update the pinned message.",
          "sub": "Đổi vai được, miễn là nói công khai và cập nhật tin nhắn ghim.",
          "keys": [
            "nói công khai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The danger is a secret swap. At merge time, one part is simply empty.",
          "sub": "Nguy hiểm là hai người đổi ngầm với nhau. Đến lúc ghép bài, một phần bị trống."
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s20",
      "module": "BRK-11",
      "data": {
        "title": "Giữ vai rõ đến cuối",
        "items": [
          "Đọc lại câu mục tiêu",
          "Đổi gì, sửa bảng việc",
          "Hỏi: việc nào chưa rõ ai lo?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: ask, is any task unclear?",
          "sub": "Ba: hỏi cả nhóm, việc nào chưa rõ ai lo?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: update the task list.",
          "sub": "Hai: có thay đổi thì sửa bảng việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: reread the goal.",
          "sub": "Một: đọc lại câu mục tiêu.",
          "keys": [
            "đọc lại câu mục tiêu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "3 giờ sáng · kỳ này",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Three a.m."
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "face": "happy",
                  "pose": "hold"
                }
              ],
              "props": [
                "crescent-moon",
                "bed"
              ]
            },
            "at": "l1:This term",
            "caption": "Kỳ này · 3 giờ sáng",
            "icon": "crescent-moon"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Tài liệu tham khảo: đã xong",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l2:references",
            "hl": [
              {
                "text": "đã xong",
                "at": "l2:done"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Nộp bài: Lan, tối thứ Sáu",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l2:Submitting",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Việc có tên → việc xong",
            "x": 7932,
            "y": 1490,
            "size": 60,
            "at": "l4:one name",
            "color": "accent",
            "hl": [
              {
                "text": "việc xong",
                "at": "l4:gets done"
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
          "say": "Three a.m., the night before the deadline. This term.",
          "sub": "Ba giờ sáng, đêm trước hạn nộp. Kỳ này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "References: done, by their owner. Submitting: Lan, Friday night, just as pinned.",
          "sub": "Tài liệu tham khảo: đã xong, bởi người phụ trách. Nộp bài: Lan, tối thứ Sáu, đúng như tin ghim."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Who takes this... zzz.",
          "sub": "Việc này ai nhận… khò khò.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A task shared by all, nobody does. A task with one name gets done.",
          "sub": "“Cha chung không ai khóc.” Còn việc có tên thì xong.",
          "keys": [
            "việc có tên thì xong"
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
      "ref": "outro,p3,p4"
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
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
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
            "x": 5496,
            "y": 40,
            "at": "l1:sentence"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l2:name"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1780,
            "at": "l3:message"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "f-1"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:name+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: one goal sentence, and a clear picture of done.",
          "sub": "Tóm lại: một câu mục tiêu, một mô tả “xong” rõ ràng.",
          "keys": [
            "một câu mục tiêu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One name per task.",
          "sub": "Mỗi việc một tên.",
          "keys": [
            "Mỗi việc một tên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And one pinned message as shared memory.",
          "sub": "Và một tin nhắn ghim làm trí nhớ chung.",
          "keys": [
            "tin nhắn ghim"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next meeting, read each task aloud and ask: who takes this? Next lesson: dividing tasks fairly.",
          "sub": "Buổi họp tới, đọc to từng việc và hỏi: “Việc này ai nhận?” Bài tiếp: chia việc công bằng.",
          "keys": [
            "Việc này ai nhận?"
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
      "ref": "questions[17]",
      "data": {
        "q": "Why should each task have only one main owner?",
        "options": [
          "One owner means that person must do all the work alone without any help",
          "Teachers only give marks to one person per task, so sharing is not allowed",
          "With two equal owners, each person may think the other one is taking care of it"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "label",
        "why": "Người phụ trách chính lo việc xong đúng hạn, vẫn có thể nhờ người khác giúp."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why should each task have only one main owner?",
          "sub": "Vì sao mỗi việc chỉ nên có một người phụ trách chính?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "With two equal owners, each person may think the other one is taking care of it.",
          "sub": "Hai tên ngang nhau, mỗi người dễ nghĩ người kia lo."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The owner makes sure it's done on time, and can still ask for help.",
          "sub": "Người phụ trách lo việc xong đúng hạn, vẫn có thể nhờ người khác giúp."
        }
      ]
    },
    {
      "id": "s36",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu để nhóm rõ vai từ buổi đầu",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now, forty questions are waiting below.",
          "sub": "Giờ thì bốn mươi câu hỏi đang chờ bên dưới."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
