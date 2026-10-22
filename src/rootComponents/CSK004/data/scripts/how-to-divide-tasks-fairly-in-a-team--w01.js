// Kịch bản video W lần 3 (#110) — "Cách chia việc trong nhóm sao cho công bằng và hiệu quả" · chuỗi "Làm thành viên tốt trong nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-divide-tasks-fairly-in-a-team--w01",
  "hook": "HOOK-08",
  "unit": {
    "audience": "team-members",
    "slug": "how-to-divide-tasks-fairly-in-a-team",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách chia việc trong nhóm sao cho công bằng và hiệu quả",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo HAI TUẦN của nhóm Lan (mở: thứ Hai 20:00 hết ca ở quán, nửa tiếng sau chỉ còn phần phân tích dài nhất — 📌 p17) → thứ Ba họp chia lại: chia đều số trang? (🔀 p3 Cách A/B) → liệt kê, BRK-06 việc vô hình (p5), nhẹ/vừa/nặng, hỏi lịch bận (p6–p7) → nhớ lại kỳ trước Dũng “chỉ ghép bài” (📌 p8; BRK-01) → ghép việc với người (p10–p12) → hiểu lầm dồn hết cho người giỏi: chị Thảo ở công ty (⚖️ p13, “Khoan đã!” DLG) → BRK-05 nhắc nhanh → cùng xếp thay vì nhanh tay chọn (p15–p18) → Lan nói khi phần mình nặng, Dũng hỏi phụ ai, nói lý do (p19–p21) → hạn nhỏ, ghi ai làm gì (p22–p23; BRK-09 nguồn Worchel, Rothgerber & Day 2011 trong meta.sources) → hai tuần sau, cùng ca ở quán (khép vòng, ☐ p24). Nhân vật (w145/_series/team-members.md): Lan (Giao p17, người nói câu mẫu p19), Dũng (người đề xuất chia đều; Thịnh p8; người hỏi p20; Hiếu p21), chị Thảo (người duy nhất thạo bảng tính p13). Câu Lan đáp “tuần sau, tối nào cũng có ca” (s07), câu Dũng nhận phần nặng (s15), Lan nhờ Dũng kèm slide (s10) và câu khép vòng của Lan (s19) là lời dựng minh hoạ cho p7, p16, p12 và p22. Tục ngữ mở/khép: “Bàn tay có ngón ngắn ngón dài”. Câu đố questions[20]. Bản cũ (W lần 3, #110): w145/bak/how-to-divide-tasks-fairly-in-a-team--w01.js.",
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
            "text": "Nửa tiếng",
            "x": 60,
            "y": 130,
            "size": 150,
            "at": "l1:Half an hour",
            "color": "accent",
            "hl": [
              {
                "text": "Nửa tiếng",
                "at": "l1:Half an hour"
              }
            ]
          },
          {
            "id": "a-s",
            "t": "text",
            "text": "ba phần dễ đã có chủ",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:three easy"
          },
          {
            "id": "a-r",
            "t": "text",
            "text": "còn lại: phần phân tích dài nhất",
            "x": 70,
            "y": 430,
            "size": 50,
            "at": "l2:longest",
            "color": "coral",
            "hl": [
              {
                "text": "dài nhất",
                "at": "l2:longest"
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
          "say": "Half an hour. That's how long it takes for three easy parts to find owners.",
          "sub": "Nửa tiếng. Chừng ấy thời gian là ba phần dễ đã có chủ.",
          "keys": [
            "Nửa tiếng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What's left for the person who replies last? The longest analysis.",
          "sub": "Còn người trả lời sau cùng? Nhận phần phân tích dài nhất.",
          "keys": [
            "phần phân tích dài nhất"
          ]
        }
      ],
      "ref": "p17"
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
            "y": 140,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "sad",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "hot-beverage",
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 20:00 · hết ca ở quán",
            "icon": "hot-beverage"
          },
          {
            "id": "a-m",
            "t": "text",
            "text": "“Ai nhận phần nào thì nhắn vào nhóm”",
            "x": 60,
            "y": 540,
            "size": 40,
            "at": "l2:Whoever",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Bàn tay có ngón ngắn ngón dài”",
            "x": 60,
            "y": 690,
            "size": 52,
            "at": "l5:fingers",
            "color": "accent",
            "hl": [
              {
                "text": "ngón ngắn ngón dài",
                "at": "l5:long"
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
          "say": "Meet Lan, a second-year student, working an evening shift at a café.",
          "sub": "Đây là Lan, sinh viên năm hai, đang làm ca tối ở quán.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Her group splits tasks the quick way: whoever wants a part, post it in the chat.",
          "sub": "Nhóm Lan chia việc kiểu nhanh: “Ai nhận phần nào thì nhắn vào nhóm.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Only the long analysis is left? Fine. I'll take it, just to get it done.",
          "sub": "Chỉ còn phần phân tích dài à? Thôi, mình nhận cho xong chuyện.",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She says fine. She'll feel otherwise all month.",
          "sub": "Lan nói “thôi”. Nhưng ấm ức suốt cả tháng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say a hand has short and long fingers. Tasks too. So who gets the long one?",
          "sub": "Ông bà nói: “Bàn tay có ngón ngắn ngón dài.” Việc cũng vậy. Vậy ngón dài ai cầm?",
          "keys": [
            "Bàn tay có ngón ngắn ngón dài"
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
      "ref": "p17,p18"
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
            "text": "Chia việc sao cho công bằng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:fairly",
            "hl": [
              {
                "text": "công bằng",
                "at": "l1:fairly"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Chia đều số trang",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:equal pages",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l2:not"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Liệt kê hết, kể cả việc không ai thấy",
            "x": 2028,
            "y": 260,
            "size": 40,
            "at": "l3:List",
            "font": "base"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "nhẹ · vừa · nặng",
            "x": 2028,
            "y": 320,
            "size": 56,
            "at": "l3:light",
            "hl": [
              {
                "text": "nặng",
                "at": "l3:heavy"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Hỏi lịch bận · ghép công sức gần bằng",
            "x": 2028,
            "y": 410,
            "size": 40,
            "at": "l4:busy",
            "font": "base"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l5:Tuesday+300",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l5:Tuesday+550",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l5:Tuesday+800",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l5:Tuesday+1050",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l5:Tuesday+1300",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l5:Tuesday+1550",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Đếm gì?",
            "x": 2048,
            "y": 620,
            "size": 40,
            "at": "l5:Tuesday+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Liệt kê",
            "x": 2323,
            "y": 620,
            "size": 40,
            "at": "l5:Tuesday+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Ghép người",
            "x": 2598,
            "y": 620,
            "size": 40,
            "at": "l5:Tuesday+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Cùng xếp",
            "x": 2873,
            "y": 620,
            "size": 40,
            "at": "l5:Tuesday+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Nói ra",
            "x": 3148,
            "y": 620,
            "size": 40,
            "at": "l5:Tuesday+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Hạn nhỏ",
            "x": 3423,
            "y": 620,
            "size": 40,
            "at": "l5:Tuesday+1670"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you divide tasks fairly, and still get it done well?",
          "sub": "Vậy chia việc thế nào cho công bằng mà vẫn hiệu quả?",
          "keys": [
            "công bằng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fair is not equal pages.",
          "sub": "Công bằng không phải chia đều số trang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "List every task, even the ones nobody sees. Mark each light, medium or heavy.",
          "sub": "Liệt kê hết phần việc, kể cả việc không ai thấy. Đánh dấu nhẹ, vừa, nặng.",
          "keys": [
            "nhẹ, vừa, nặng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask how busy each person is, then match so the effort is almost equal.",
          "sub": "Hỏi lịch bận từng người, rồi ghép sao cho công sức gần bằng nhau.",
          "keys": [
            "công sức gần bằng nhau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lan asks for a redo on Tuesday. Let's watch, stop by stop.",
          "sub": "Lan xin cả nhóm chia lại vào thứ Ba. Theo dõi từng chặng nhé."
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
            "text": "① Thứ Ba · Đếm trang?",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1:Dũng"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Ba · 18:00 · thư viện",
            "icon": "page-facing-up"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "4 trang số liệu ≠ mở đầu",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l3:survey data",
            "color": "coral",
            "hl": [
              {
                "text": "≠",
                "at": "l3:far harder"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Khó: thức khuya · Dễ: xong sớm, ngồi chờ",
            "x": 3996,
            "y": 250,
            "size": 36,
            "at": "l4:late nights",
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
          "say": "First stop: Tuesday. Meet Dũng, Lan's teammate, the fastest replier in the chat.",
          "sub": "Chặng một: thứ Ba. Đây là Dũng, bạn cùng nhóm, người trả lời nhanh nhất nhóm chat.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Twenty pages, five people, four pages each. Fast, and fair!",
          "sub": "Hai mươi trang, năm người, mỗi người bốn trang. Nhanh, mà công bằng!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Looks fair. But four pages of survey data are far harder than four pages of introduction.",
          "sub": "Trông công bằng. Nhưng bốn trang phân tích số liệu khảo sát khó hơn hẳn bốn trang giới thiệu đề tài."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hard part, late nights. Easy part, done early and waiting. A few rounds, and the hard worker quits.",
          "sub": "Phần khó thì thức khuya, phần dễ xong sớm rồi ngồi chờ. Vài lần như vậy, người làm nhiều không muốn chung nhóm nữa."
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
            "id": "c-A",
            "t": "text",
            "text": "A: mỗi người 4 trang",
            "x": 3996,
            "y": 360,
            "size": 46,
            "at": "l1:Way A",
            "color": "coral"
          },
          {
            "id": "c-A2",
            "t": "text",
            "text": "số liệu gần một tuần · cùng điểm · kỳ sau từ chối",
            "x": 4026,
            "y": 425,
            "size": 30,
            "at": "l1:week",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-B",
            "t": "text",
            "text": "B: ước độ khó trước",
            "x": 3996,
            "y": 490,
            "size": 46,
            "at": "l2:Way B",
            "color": "accent"
          },
          {
            "id": "c-B2",
            "t": "text",
            "text": "người làm số liệu được bớt phần viết khác",
            "x": 4026,
            "y": 555,
            "size": 30,
            "at": "l2:less",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Công bằng đo bằng công sức",
            "x": 4836,
            "y": 690,
            "size": 52,
            "at": "l3:effort",
            "color": "accent",
            "hl": [
              {
                "text": "công sức",
                "at": "l3:effort"
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
          "say": "Way A: four pages each. The data part takes almost a week. Same grade, and next term, that person says no.",
          "sub": "Cách A: mỗi người bốn trang. Phần số liệu mất gần một tuần. Cả nhóm cùng điểm, kỳ sau người ấy từ chối chung nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Way B: estimate how hard each part is. The data person writes less elsewhere. Pages differ, effort is equal.",
          "sub": "Cách B: ước lượng độ khó trước, người nhận phần số liệu được bớt phần viết khác. Số trang lệch nhau, công sức gần bằng nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fairness is measured in effort, not in pages.",
          "sub": "Công bằng đo bằng công sức, không đo bằng số trang.",
          "keys": [
            "Công bằng đo bằng công sức"
          ]
        }
      ],
      "ref": "p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Liệt kê · nhẹ, vừa, nặng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Một tài liệu chung, ghi hết",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l1:shared document",
            "hl": [
              {
                "text": "ghi hết",
                "at": "l1:every task"
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
          "say": "Second stop: write every task in one shared document. Including the invisible ones.",
          "sub": "Chặng hai: ghi toàn bộ phần việc vào một tài liệu chung. Kể cả việc “vô hình”.",
          "keys": [
            "việc “vô hình”"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "BRK-06",
      "data": {
        "title": "Việc vô hình cũng tốn giờ",
        "items": [
          {
            "illus": "linked-paperclips",
            "text": "Ghép bài"
          },
          {
            "illus": "straight-ruler",
            "text": "Sửa định dạng"
          },
          {
            "illus": "framed-picture",
            "text": "Slide cuối"
          },
          {
            "illus": "envelope",
            "text": "Liên lạc thầy"
          },
          {
            "illus": "inbox-tray",
            "text": "Nộp bài"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Merging, formatting, final slides, emails, submitting.",
          "sub": "Ghép bài, sửa định dạng, slide cuối, liên lạc, nộp bài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As slow as writing.",
          "sub": "Tốn thời gian không kém viết.",
          "keys": [
            "không kém viết"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          },
          {
            "at": "l3",
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
            "x": 6784,
            "y": 140,
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
                  "id": "lan",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "spiral-calendar"
              ]
            },
            "at": "l2:busiest",
            "caption": "Thứ Ba · hỏi lịch bận",
            "icon": "spiral-calendar"
          },
          {
            "id": "d-l",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 200,
            "h": 70,
            "at": "l1:light",
            "stroke": 4
          },
          {
            "id": "d-lt",
            "t": "text",
            "text": "nhẹ",
            "x": 6014,
            "y": 268,
            "size": 44,
            "at": "l1:light+200"
          },
          {
            "id": "d-m",
            "t": "box",
            "x": 6194,
            "y": 260,
            "w": 200,
            "h": 70,
            "at": "l1:medium",
            "stroke": 4
          },
          {
            "id": "d-mt",
            "t": "text",
            "text": "vừa",
            "x": 6244,
            "y": 268,
            "size": 44,
            "at": "l1:medium+200"
          },
          {
            "id": "d-h",
            "t": "box",
            "x": 6424,
            "y": 260,
            "w": 200,
            "h": 70,
            "at": "l1:heavy",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-ht",
            "t": "text",
            "text": "nặng",
            "x": 6469,
            "y": 268,
            "size": 44,
            "at": "l1:heavy+200",
            "color": "coral"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Cả nhóm nhìn, gật đầu là được",
            "x": 5964,
            "y": 360,
            "size": 42,
            "at": "l1:nod",
            "color": "muted"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Tuần nào bạn kẹt nhất?",
            "x": 5964,
            "y": 450,
            "size": 50,
            "at": "l2:busiest",
            "color": "accent",
            "hl": [
              {
                "text": "kẹt nhất",
                "at": "l2:busiest"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "thi môn khác · làm thêm tối · dự án khác",
            "x": 5964,
            "y": 530,
            "size": 30,
            "at": "l4:exams",
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
          "say": "Mark each part light, medium or heavy. Not exact, just enough for everyone to look and nod.",
          "sub": "Đánh dấu từng phần nhẹ, vừa, nặng. Không cần chính xác, chỉ cần cả nhóm cùng nhìn và gật đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "From now until the deadline, which week are you busiest?",
          "sub": "Từ giờ đến hạn nộp, tuần nào bạn kẹt nhất?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Next week. Evening shifts, every day.",
          "sub": "Tuần sau. Tối nào cũng có ca làm thêm.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exams in another subject, evening jobs, another project at work. Ask before you divide.",
          "sub": "Thi môn khác, làm thêm buổi tối, gánh dự án khác ở công ty. Hỏi trước khi chia.",
          "keys": [
            "Hỏi trước khi chia"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Nhớ lại kỳ trước · Ghép bài",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "sad",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
                "sunrise"
              ]
            },
            "at": "l1:last term",
            "caption": "Kỳ trước · đêm cuối · gần sáng",
            "icon": "sunrise"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "“Ghép bài, làm slide” = phần nhẹ?",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l1:light",
            "color": "muted"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Chưa thống nhất mẫu trình bày",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l2:format",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "5 kiểu chữ · 5 cách trích dẫn",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l3:five fonts",
            "hl": [
              {
                "text": "5 kiểu chữ",
                "at": "l3:five fonts"
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
          "say": "Third stop: a flashback. Last term, Dũng took merging and slides. Everyone called it light.",
          "sub": "Chặng ba: nhớ lại kỳ trước. Dũng nhận việc ghép bài và làm slide, cả nhóm coi là phần nhẹ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nobody agreed on a format before writing.",
          "sub": "Nhóm cũng không thống nhất mẫu trình bày trước khi viết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Five parts, five fonts, five citation styles. It's almost morning!",
          "sub": "Năm phần, năm kiểu chữ, năm cách trích dẫn. Gần sáng rồi!",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then, in the self-review, someone wrote: Dũng only put it together.",
          "sub": "Rồi trong bảng tự đánh giá, có bạn còn ghi: Dũng “chỉ ghép bài”."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s09",
      "module": "BRK-01",
      "data": {
        "illus": "linked-paperclips",
        "around": [
          "sunrise",
          "laptop"
        ],
        "label": "“Chỉ ghép bài”?",
        "note": "Cả đêm sửa năm kiểu chữ, năm cách trích dẫn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop right there.",
          "sub": "Dừng lại đã."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Work nobody sees still needs credit.",
          "sub": "Việc không ai nhìn thấy vẫn phải được ghi công.",
          "keys": [
            "vẫn phải được ghi công"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "re-dia"
        }
      ],
      "ref": "p9"
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
            "at": "l4",
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
            "text": "④ Ghép việc với người",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
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
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l1:matching",
            "caption": "Thứ Ba · ghép việc",
            "icon": "clipboard"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Kỹ năng hợp?",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:skills"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Thời gian thật tuần này?",
            "x": 60,
            "y": 1335,
            "size": 50,
            "at": "l2:real time"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Có học thêm được gì?",
            "x": 60,
            "y": 1410,
            "size": 50,
            "at": "l2:learn",
            "hl": [
              {
                "text": "học thêm",
                "at": "l2:learn"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "nặng = 2 vừa = vừa + 2 nhẹ",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l3:heavy part",
            "color": "accent"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Gấp: ưu tiên kỹ năng · Còn thời gian: kèm người mới",
            "x": 900,
            "y": 1780,
            "size": 32,
            "at": "l5:hurry",
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
          "say": "Fourth stop: matching people and tasks. Three questions.",
          "sub": "Chặng bốn: ghép việc với người. Ba câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Right skills? How much real time this week? And will this task help them learn something?",
          "sub": "Người này có kỹ năng hợp không? Tuần này còn bao nhiêu thời gian thật? Việc này có giúp họ học thêm gì không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then balance totals: one heavy part, or two medium, or one medium and two light.",
          "sub": "Rồi ghép cho tổng gần bằng: một phần nặng, hoặc hai phần vừa, hoặc một vừa và hai nhẹ.",
          "keys": [
            "tổng gần bằng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Dũng, you're great with slides. Can you show me how, on the simple ones?",
          "sub": "Dũng giỏi slide. Bạn kèm mình làm mấy slide đơn giản được không?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In a hurry, choose skills. With time, pair a skilled member with a learner, so skills spread.",
          "sub": "Gấp thì ưu tiên kỹ năng. Còn thời gian thì ghép người giỏi với người đang học, để kỹ năng lan ra.",
          "keys": [
            "kỹ năng lan ra"
          ]
        }
      ],
      "ref": "p10,p11,p12"
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
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l1:Thảo",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Hiểu lầm: dồn cho người giỏi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
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
                  "face": "sad",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "bar-chart",
                "laptop"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Công ty chị Thảo · báo cáo tháng",
            "icon": "bar-chart"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Giao người giỏi nhất = nhanh, chắc?",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l2:best",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: a common myth. Meet Thảo, Lan's cousin, the only spreadsheet expert on her project team.",
          "sub": "Chặng năm: một hiểu lầm thường gặp. Đây là chị Thảo, chị họ của Lan, người duy nhất thạo bảng tính trong nhóm dự án.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Give the best person all the hard work. Fast and safe, right?",
          "sub": "Cứ giao việc khó cho người giỏi nhất là nhanh và chắc nhất, đúng không?"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Công ty · việc số liệu",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mọi việc số liệu về một người",
          "why": "Người ấy tối nào cũng về muộn; ngày quá tải hay xin rút, không ai làm được báo cáo tháng.",
          "rule": "Người giỏi nhận việc khó, đừng nhận hết"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "All the data work again? Fine, I'll do it all.",
          "sub": "Lại toàn bộ việc số liệu à? Thôi được, chị làm hết.",
          "face": "sad",
          "pose": "hold",
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
          "say": "She gets home late every night, and new members never open the data file.",
          "sub": "Tối nào chị cũng về muộn, còn các bạn mới chưa từng mở tệp số liệu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The day she's overloaded or leaves, nobody can do the monthly report.",
          "sub": "Ngày chị quá tải hay xin rút, cả nhóm không ai làm được báo cáo tháng.",
          "keys": [
            "không ai làm được báo cáo tháng"
          ]
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
          "say": "I'll take the hard part, and coach a new member on the simple parts.",
          "sub": "Chị nhận phần khó, và kèm một bạn mới làm phần đơn giản.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13"
    },
    {
      "id": "s13",
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
            "id": "g-k",
            "t": "text",
            "text": "Người giỏi nhận việc khó,",
            "x": 2028,
            "y": 1590,
            "size": 52,
            "at": "l1:hard tasks",
            "color": "accent"
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "đừng nhận hết việc khó",
            "x": 2028,
            "y": 1670,
            "size": 52,
            "at": "l1:all",
            "color": "accent",
            "hl": [
              {
                "text": "đừng nhận hết",
                "at": "l1:all"
              }
            ]
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "Kỹ năng không nằm trong tay một người",
            "x": 2868,
            "y": 1780,
            "size": 36,
            "at": "l2:one person",
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
          "say": "The skilled take the hard tasks. Just not all of them.",
          "sub": "Người giỏi nhận việc khó, đừng bắt người giỏi nhận hết việc khó.",
          "keys": [
            "đừng bắt người giỏi nhận hết việc khó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the skill doesn't sit in one person's hands.",
          "sub": "Như vậy kỹ năng không nằm trong tay một người."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s14",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, mình đã biết",
        "points": [
          "Đếm công sức, không đếm trang",
          "Tính cả việc vô hình",
          "Hỏi lịch bận trước khi chia"
        ],
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick recap. Count effort, not pages.",
          "sub": "Nhắc nhanh. Đếm công sức, không đếm trang."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count the invisible work.",
          "sub": "Tính cả việc vô hình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask who's busy first.",
          "sub": "Hỏi lịch bận trước khi chia."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "intro,p4,p5,p7"
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
            "at": "l4",
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
            "text": "⑥ Tự chọn hay cùng xếp?",
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
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l3:Fairer",
            "caption": "Thứ Ba · cùng xếp trên bảng",
            "icon": "clipboard"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "“Ai nhận thì nhắn” = dân chủ?",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l1:democratic",
            "color": "muted"
          },
          {
            "id": "h-1x",
            "t": "strike",
            "over": "h-1",
            "at": "l2:leftovers"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Rảnh, nhanh tay chọn trước",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l2:free",
            "color": "coral"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Mỗi người ≥ 1 phần vừa/nặng",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l3:at least",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 1 phần vừa/nặng",
                "at": "l3:medium or heavy"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Làm nhiều bài: luân phiên phần khó",
            "x": 3996,
            "y": 1510,
            "size": 40,
            "at": "l5:rotate",
            "hl": [
              {
                "text": "luân phiên",
                "at": "l5:rotate"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Nhanh tay chọn → người bận chịu thiệt",
            "x": 4836,
            "y": 1780,
            "size": 40,
            "at": "l6:busy",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: back to that chat. Choosing for yourself sounds democratic.",
          "sub": "Chặng sáu: quay lại nhóm chat hôm ấy. Tự chọn nghe có vẻ dân chủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But the free and fast choose first. The busy, like Lan at work, get leftovers, often the heaviest.",
          "sub": "Nhưng người rảnh, nhanh tay chọn trước. Người bận như Lan đang ca làm thì nhận phần còn lại, thường là phần nặng nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fairer: look at the light, medium, heavy list together. Everyone gets at least one medium or heavy part.",
          "sub": "Công bằng hơn: cả nhóm cùng nhìn bảng nhẹ, vừa, nặng rồi xếp. Mỗi người có ít nhất một phần vừa hoặc nặng.",
          "keys": [
            "ít nhất một phần vừa hoặc nặng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I took the easy intro last time. This time I'll take a heavy one.",
          "sub": "Kỳ trước mình nhận phần mở đầu dễ. Kỳ này mình nhận một phần nặng.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Many projects together? Rotate the hardest part.",
          "sub": "Còn làm nhiều bài với nhau? Luân phiên phần khó qua từng bài."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "When tasks go to the fastest hands, the busy always lose.",
          "sub": "Chia việc kiểu nhanh tay thì người bận luôn chịu thiệt.",
          "keys": [
            "người bận luôn chịu thiệt"
          ]
        }
      ],
      "ref": "p15,p16,p17,p18"
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
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Phần nặng thì nói ngay",
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
                  "id": "lan",
                  "side": "left",
                  "pose": "explain",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l1:analysis",
            "caption": "Thứ Ba · chốt phân công",
            "icon": "bar-chart"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Nhận cho êm, ôm ấm ức",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l1:peace",
            "color": "muted"
          },
          {
            "id": "i-1x",
            "t": "strike",
            "over": "i-1",
            "at": "l3:facts"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Nói bằng sự việc, không than",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l3:facts",
            "color": "accent",
            "hl": [
              {
                "text": "sự việc",
                "at": "l3:facts"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Phần nhẹ? “Mình phụ ai được?”",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l4:help",
            "hl": [
              {
                "text": "phụ ai",
                "at": "l4:help"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Chia xong, nói lý do",
            "x": 5964,
            "y": 1520,
            "size": 50,
            "at": "l6:because",
            "color": "accent",
            "hl": [
              {
                "text": "lý do",
                "at": "l6:because"
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
          "say": "Seventh stop: Lan gets the analysis again. This time, no saying fine to keep the peace.",
          "sub": "Chặng bảy: Lan lại được giao phần phân tích. Lần này, không nhận cho êm rồi ôm ấm ức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "The data part may take about four sessions. Can I drop the introduction?",
          "sub": "Phần xử lý số liệu chắc mất khoảng bốn buổi, mình xin bớt phần mở đầu để kịp nhé.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say it while dividing, with facts, not complaints.",
          "sub": "Thấy nặng thì nói ngay lúc chia, bằng sự việc, không than."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My part will be done early. Can I help anyone?",
          "sub": "Phần của mình xong sớm, mình phụ ai được không?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That one line keeps the team feeling fair, more than any promise.",
          "sub": "Câu ấy giữ cảm giác công bằng hơn mọi lời hứa.",
          "keys": [
            "hơn mọi lời hứa"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Dũng presents, because he has the fewest exams next week.",
          "sub": "Dũng thuyết trình, vì tuần sau Dũng thi ít môn nhất.",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "ref": "p19,p20,p21"
    },
    {
      "id": "s17",
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
            "text": "⑧ Giữ công bằng đến hạn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Last stop"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Hạn nhỏ cho từng phần",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l1:small deadline",
            "hl": [
              {
                "text": "Hạn nhỏ",
                "at": "l1:small deadline"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "→ thấy sớm phần kẹt, chia lại",
            "x": 7962,
            "y": 1335,
            "size": 44,
            "at": "l1:stuck",
            "color": "muted"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Ghi ngắn: ai đã làm gì",
            "x": 7932,
            "y": 1420,
            "size": 50,
            "at": "l2:who did what",
            "color": "accent",
            "hl": [
              {
                "text": "ai đã làm gì",
                "at": "l2:who did what"
              }
            ]
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Tự đánh giá: theo sự việc, không theo cảm tình",
            "x": 7932,
            "y": 1495,
            "size": 32,
            "at": "l2:facts",
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
          "say": "Last stop: a small deadline for each part, not just one final date. You spot stuck parts early.",
          "sub": "Chặng cuối: hạn nhỏ cho từng phần, không chỉ một hạn cuối. Thấy sớm phần nào đang kẹt để chia lại.",
          "keys": [
            "hạn nhỏ cho từng phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And note who did what in the shared document. Peer grading then follows facts, not friendship.",
          "sub": "Và ghi ngắn ai đã làm gì trong tài liệu chung. Lúc tự đánh giá, chấm theo sự việc, không theo cảm tình.",
          "keys": [
            "ai đã làm gì"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s18",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Worchel, Rothgerber & Day, 2011",
        "detail": "Đóng góp từng người được ghi nhận → ít người “ăn theo”",
        "illus": "memo",
        "around": [
          "busts-in-silhouette",
          "check-mark-button"
        ],
        "icon": "users"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "When each person's work is visible,",
          "sub": "Khi phần của từng người được ghi nhận,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "fewer people coast along.",
          "sub": "ít người “ăn theo” hơn.",
          "keys": [
            "ăn theo"
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
            "fit": "J",
            "move": "cut"
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
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "check-mark-button"
              ]
            },
            "at": "l1:Monday",
            "caption": "Hai tuần sau · 20:00 · hết ca",
            "icon": "hot-beverage"
          },
          {
            "id": "j-5",
            "t": "text",
            "text": "Ai cũng cầm một ngón dài",
            "x": 7932,
            "y": 1610,
            "size": 52,
            "at": "l3:long",
            "color": "accent",
            "hl": [
              {
                "text": "ngón dài",
                "at": "l3:long"
              }
            ]
          },
          {
            "id": "j-6",
            "t": "text",
            "text": "Có ai thấy quá tải không?",
            "x": 7932,
            "y": 1780,
            "size": 48,
            "at": "l4:overloaded",
            "color": "coral",
            "hl": [
              {
                "text": "quá tải",
                "at": "l4:overloaded"
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
          "say": "Two weeks later. Monday, eight p.m., same café, same shift.",
          "sub": "Hai tuần sau. Thứ Hai, tám giờ tối, vẫn quán ấy, vẫn ca ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "My small deadline: done. And Dũng helped with the charts. No grudges this month!",
          "sub": "Hạn nhỏ của mình: xong. Dũng còn phụ phần biểu đồ. Tháng này không ấm ức!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A hand has short and long fingers. This time, everyone held a long one.",
          "sub": "“Bàn tay có ngón ngắn ngón dài.” Lần này, ai cũng cầm một ngón dài.",
          "keys": [
            "ai cũng cầm một ngón dài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Before you lock a plan, ask: does anyone feel overloaded?",
          "sub": "Trước khi chốt, hỏi một câu: có ai thấy quá tải không?",
          "keys": [
            "có ai thấy quá tải không"
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
      "ref": "p24,outro"
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 5496,
            "y": 40,
            "at": "l1:effort"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 40,
            "at": "l2:nobody"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1780,
            "at": "l3:together"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "c-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:effort+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: count effort, not pages.",
          "sub": "Tóm lại: đếm công sức, không đếm trang.",
          "keys": [
            "đếm công sức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count the work nobody sees, and ask who's busy.",
          "sub": "Tính cả việc không ai thấy, và hỏi lịch bận.",
          "keys": [
            "việc không ai thấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Arrange together, instead of first come, first served.",
          "sub": "Cùng nhau xếp, thay vì ai nhanh tay thì chọn trước.",
          "keys": [
            "Cùng nhau xếp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do it now: open a shared list and mark light, medium, heavy. Next lesson: keeping everyone informed.",
          "sub": "Việc làm ngay: mở một bảng chung, rủ cả nhóm đánh dấu nhẹ, vừa, nặng. Bài tiếp: giữ cả nhóm nắm tiến độ.",
          "keys": [
            "Việc làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[20]",
      "data": {
        "q": "Your group lets people choose tasks in the chat, who usually loses out?",
        "options": [
          "Nobody, because choosing in the chat is clearly the fairest method for everyone",
          "Busy members who reply late and get the heaviest part that is left",
          "The fastest members, because they always pick the hardest tasks first"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "mobile-phone",
        "why": "Người rảnh, nhanh tay chọn phần dễ trước; người bận nhận phần còn sót lại."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your group lets people choose tasks in the chat, who usually loses out?",
          "sub": "Nhóm để mọi người tự chọn việc trong nhóm chat, ai thường bị thiệt?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Busy members who reply late and get the heaviest part that is left.",
          "sub": "Người bận, trả lời muộn, nhận phần nặng nhất còn lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Fast people pick the easy parts first. Busy people get what is left.",
          "sub": "Người nhanh tay chọn phần dễ trước. Người bận nhận phần còn sót lại."
        }
      ]
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về chia việc công bằng",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now try the forty questions below.",
          "sub": "Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
