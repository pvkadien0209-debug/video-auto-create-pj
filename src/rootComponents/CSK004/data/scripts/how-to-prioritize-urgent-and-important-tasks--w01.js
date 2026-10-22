// Kịch bản video W lần 3 (#110) — "Cách sắp xếp công việc theo mức độ ưu tiên khi việc gì cũng gấp" · chuỗi "Quản lý thời gian và sắp xếp ưu tiên"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). Mở đầu hoạt hình từ ⚖️ Hiểu lầm (p5).
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-prioritize-urgent-and-important-tasks--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "busy-workers",
    "slug": "how-to-prioritize-urgent-and-important-tasks",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách sắp xếp công việc theo mức độ ưu tiên khi việc gì cũng gấp",
    "series": "Quản lý thời gian và sắp xếp ưu tiên"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Dũng (thứ Hai 8:00 mười tám việc đỏ → 9:00 chạy theo cuộc gọi → “Khoan đã!” tua lại 8:00 → thứ Ba 14:00 → thứ Tư → thứ Năm 10:00 → 17:00 → thứ Sáu 16:00 → thứ Hai tuần sau 8:00 một việc đỏ). Nhân vật (mạch chủ đề w145/_series/busy-workers.md): Dũng (người điều phối kho p5, người quá tải p15), Lan (Loan bán hàng bảy nhóm chat p19), Cô Hoa (người giao việc p15, hỏi hạn p21). Người nhân sự (p13) và người thiết kế tự do (p23) kể trên bảng + BRK. Cảnh ngắt nhịp: BRK-10 trích Eisenhower 1954 (nguồn trong bài), BRK-07 rehook p13, BRK-04 Cách A/B p23. Khép vòng: “Nước đến chân mới nhảy” → nhảy trước khi nước đến. Bản cũ (W lần 3, #110): w145/bak/how-to-prioritize-urgent-and-important-tasks--w01.js.",
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
            "id": "a-num",
            "t": "text",
            "text": "18 việc",
            "x": 60,
            "y": 110,
            "size": 170,
            "at": "l1:eighteen",
            "color": "coral",
            "hl": [
              {
                "text": "18 việc",
                "at": "l1:red"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "cùng tô đỏ · cùng “gấp”",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:urgent"
          },
          {
            "id": "a-idea",
            "t": "text",
            "text": "Đỏ hết = không sót?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l1:marked",
            "color": "muted"
          },
          {
            "id": "a-ideax",
            "t": "strike",
            "over": "a-idea",
            "at": "l3:alarm"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eighteen tasks. All marked red. All urgent, at the same time.",
          "sub": "Mười tám việc. Tô đỏ hết. Việc nào cũng gấp, cùng một lúc.",
          "keys": [
            "Tô đỏ hết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Clever? Like a fire alarm that rings all day. Soon, nobody hears it.",
          "sub": "Như chuông báo cháy kêu suốt ngày. Chẳng mấy chốc, chẳng ai nghe nữa.",
          "keys": [
            "chẳng ai nghe nữa"
          ]
        }
      ],
      "ref": "intro,p5"
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "red-circle",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "dung",
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
            "caption": "8:00 sáng thứ Hai",
            "icon": "eight-oclock"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nước đến chân mới nhảy”",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l4:water",
            "color": "accent",
            "hl": [
              {
                "text": "mới nhảy",
                "at": "l4:jump"
              }
            ]
          },
          {
            "id": "a-neck",
            "t": "text",
            "text": "Dũng: nước đến cổ mới nhảy",
            "x": 60,
            "y": 660,
            "size": 46,
            "at": "l5:neck",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Planner and warehouse coordinator, armed with a red pen.",
          "sub": "Nhân viên kế hoạch kiêm điều phối kho, vũ khí là cây bút đỏ.",
          "keys": [
            "bút đỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Monday, eight a.m. Everything is urgent, so I'll mark it all red!",
          "sub": "Tám giờ sáng thứ Hai. Việc gì cũng gấp, tô đỏ hết!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: only when the water reaches your feet do you jump.",
          "sub": "Ông bà dặn: “Nước đến chân mới nhảy.”",
          "keys": [
            "Nước đến chân mới nhảy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng waits until it reaches his neck.",
          "sub": "Dũng thì đợi nước đến cổ."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p5"
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
            "text": "Việc gì cũng gấp: chọn sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:choose",
            "hl": [
              {
                "text": "chọn sao?",
                "at": "l1:choose"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: làm nhanh hơn",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:faster",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:wheel"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: tách 2 câu hỏi",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "tách 2 câu hỏi",
                "at": "l3:separate"
              }
            ]
          },
          {
            "id": "b-2q",
            "t": "text",
            "text": "Gấp? · Quan trọng?",
            "x": 2028,
            "y": 340,
            "size": 64,
            "at": "l3:urgent"
          },
          {
            "id": "b-one",
            "t": "text",
            "text": "→ 1 việc chính, có giờ",
            "x": 2028,
            "y": 440,
            "size": 46,
            "at": "l4:main task",
            "hl": [
              {
                "text": "1 việc chính",
                "at": "l4:one main"
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
          "say": "So when every task feels urgent, how do you choose?",
          "sub": "Vậy khi việc gì cũng gấp, chọn thế nào?",
          "keys": [
            "chọn thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by running faster, like a hamster on a wheel.",
          "sub": "Không phải chạy nhanh hơn, như chuột chạy bánh xe."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by asking two separate questions. Is it urgent? Is it important?",
          "sub": "Mà bằng cách tách hai câu hỏi: có gấp không? Có quan trọng không?",
          "keys": [
            "tách hai câu hỏi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then pick one main task, and book it a seat on your calendar.",
          "sub": "Rồi chọn một việc chính, giữ cho nó một chỗ trên lịch.",
          "keys": [
            "một việc chính"
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
            "id": "b-u",
            "t": "text",
            "text": "Gấp = có người đang chờ",
            "x": 2028,
            "y": 540,
            "size": 46,
            "at": "l1:waiting",
            "hl": [
              {
                "text": "đang chờ",
                "at": "l1:waiting"
              }
            ]
          },
          {
            "id": "b-i",
            "t": "text",
            "text": "Quan trọng = kết quả mình",
            "x": 2028,
            "y": 610,
            "size": 46,
            "at": "l2:results",
            "hl": [
              {
                "text": "kết quả mình",
                "at": "l2:own"
              }
            ]
          },
          {
            "id": "b-ex",
            "t": "text",
            "text": "Hỏi file: gấp, 1 phút",
            "x": 2028,
            "y": 690,
            "size": 36,
            "at": "l3:file",
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
          "say": "Urgent means someone, or a deadline, is waiting.",
          "sub": "Gấp nghĩa là có người hoặc thời hạn đang chờ.",
          "keys": [
            "đang chờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Important means it affects results you own: clients, revenue, quality, your health.",
          "sub": "Quan trọng là ảnh hưởng kết quả bạn chịu trách nhiệm: khách, doanh thu, chất lượng, sức khoẻ.",
          "keys": [
            "kết quả bạn chịu trách nhiệm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Asking for a file? Urgent, one minute. A new skill? Important, nobody chases.",
          "sub": "Hỏi file? Gấp, một phút. Học kỹ năng? Quan trọng, chẳng ai giục."
        }
      ],
      "ref": "p1"
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
          }
        ],
        "items": [
          {
            "id": "q1-b",
            "t": "box",
            "x": 2868,
            "y": 130,
            "w": 380,
            "h": 230,
            "at": "l1:now",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "q1-h",
            "t": "text",
            "text": "Gấp + quan trọng",
            "x": 2892,
            "y": 150,
            "size": 40,
            "at": "l1:now+200",
            "color": "coral"
          },
          {
            "id": "q1-t",
            "t": "text",
            "text": "Làm ngay",
            "x": 2892,
            "y": 240,
            "size": 48,
            "at": "l1:now+500",
            "hl": [
              {
                "text": "Làm ngay",
                "at": "l1:now+700"
              }
            ]
          },
          {
            "id": "q2-b",
            "t": "box",
            "x": 3268,
            "y": 130,
            "w": 380,
            "h": 230,
            "at": "l2:calendar",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "q2-h",
            "t": "text",
            "text": "Quan trọng, chưa gấp",
            "x": 3292,
            "y": 150,
            "size": 40,
            "at": "l2:calendar+200",
            "color": "accent"
          },
          {
            "id": "q2-t",
            "t": "text",
            "text": "Ghi lịch",
            "x": 3292,
            "y": 240,
            "size": 48,
            "at": "l2:calendar+500",
            "hl": [
              {
                "text": "Ghi lịch",
                "at": "l2:calendar+700"
              }
            ]
          },
          {
            "id": "q3-b",
            "t": "box",
            "x": 2868,
            "y": 380,
            "w": 380,
            "h": 230,
            "at": "l3:fast",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "q3-h",
            "t": "text",
            "text": "Gấp, ít quan trọng",
            "x": 2892,
            "y": 400,
            "size": 40,
            "at": "l3:fast+200",
            "color": "ink"
          },
          {
            "id": "q3-t",
            "t": "text",
            "text": "Làm gọn / nhờ",
            "x": 2892,
            "y": 490,
            "size": 48,
            "at": "l3:fast+500",
            "hl": [
              {
                "text": "Làm gọn / nhờ",
                "at": "l3:fast+700"
              }
            ]
          },
          {
            "id": "q4-b",
            "t": "box",
            "x": 3268,
            "y": 380,
            "w": 380,
            "h": 230,
            "at": "l3:cross",
            "stroke": 5,
            "color": "muted"
          },
          {
            "id": "q4-h",
            "t": "text",
            "text": "Không gấp, không QT",
            "x": 3292,
            "y": 400,
            "size": 40,
            "at": "l3:cross+200",
            "color": "muted"
          },
          {
            "id": "q4-t",
            "t": "text",
            "text": "Gạch đi",
            "x": 3292,
            "y": 490,
            "size": 48,
            "at": "l3:cross+500",
            "hl": [
              {
                "text": "Gạch đi",
                "at": "l3:cross+700"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Trễ 1 tuần thì sao?",
            "x": 2868,
            "y": 650,
            "size": 50,
            "at": "l5:week late",
            "color": "accent",
            "hl": [
              {
                "text": "Trễ 1 tuần",
                "at": "l5:week late"
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
          "say": "Now four boxes. Urgent and important: do it now.",
          "sub": "Giờ là bốn ô. Gấp và quan trọng: làm ngay.",
          "keys": [
            "làm ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Important, not urgent: into your calendar, with a day and time.",
          "sub": "Quan trọng, chưa gấp: ghi vào lịch, có ngày giờ.",
          "keys": [
            "ghi vào lịch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Urgent, less important: do it fast, batch it, or hand it over. Neither? Cross it out.",
          "sub": "Gấp, ít quan trọng: làm gọn, gộp, nhờ người. Chẳng gấp chẳng quan trọng? Gạch."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Ask: if this is a week late, what happens, and to whom?",
          "sub": "Phân vân? Hỏi: trễ một tuần thì sao, ai bị ảnh hưởng?",
          "keys": [
            "trễ một tuần thì sao"
          ]
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s05",
      "module": "BRK-10",
      "data": {
        "quote": "Việc quan trọng hiếm khi gấp, việc gấp hiếm khi quan trọng",
        "mark": "hiếm khi gấp",
        "by": "Dwight Eisenhower, 1954",
        "illus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "What is important is seldom urgent, and what is urgent is seldom important.",
          "sub": "Việc quan trọng hiếm khi gấp, việc gấp hiếm khi quan trọng.",
          "keys": [
            "hiếm khi gấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dwight Eisenhower, in nineteen fifty-four.",
          "sub": "Dwight Eisenhower, năm 1954."
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
            "text": "① Thứ Hai 9:00 · Chuông reo",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "telephone-receiver",
                "red-circle"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:phone",
            "caption": "9:00 · chuông reo liên tục",
            "icon": "telephone-receiver"
          },
          {
            "id": "c-rep",
            "t": "text",
            "text": "Bản kiểm kê: sếp đang chờ",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:waiting",
            "hl": [
              {
                "text": "sếp đang chờ",
                "at": "l3:waiting+300"
              }
            ]
          },
          {
            "id": "c-red",
            "t": "text",
            "text": "…đỏ y như 17 việc kia",
            "x": 3996,
            "y": 250,
            "size": 46,
            "at": "l4:seventeen",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday, nine. The phone rings like a fire alarm.",
          "sub": "Chặng một: chín giờ thứ Hai. Điện thoại réo như chuông báo cháy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Another loud call! I'll do that first. The inventory report can wait.",
          "sub": "Lại một cuộc gọi to! Làm cái này trước. Bản kiểm kê để sau.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The inventory report: the one task his boss is really waiting for.",
          "sub": "Bản kiểm kê: việc duy nhất sếp thật sự đang chờ.",
          "keys": [
            "sếp thật sự đang chờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But it's red like the other seventeen, so it never looks redder.",
          "sub": "Nhưng nó đỏ y như mười bảy việc kia, nên chẳng lúc nào “đỏ hơn”.",
          "keys": [
            "chẳng lúc nào “đỏ hơn”"
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
            "id": "c-loud",
            "t": "text",
            "text": "→ chạy theo ai gọi to nhất",
            "x": 3996,
            "y": 360,
            "size": 50,
            "at": "l2:loudest",
            "hl": [
              {
                "text": "gọi to nhất",
                "at": "l2:loudest"
              }
            ]
          },
          {
            "id": "c-cn",
            "t": "text",
            "text": "Cháy nhà = việc để quá lâu",
            "x": 3996,
            "y": 460,
            "size": 50,
            "at": "l3:fires",
            "hl": [
              {
                "text": "để quá lâu",
                "at": "l3:too long"
              }
            ]
          },
          {
            "id": "c-wk",
            "t": "text",
            "text": "Mỗi tuần một chút → bớt cháy",
            "x": 3996,
            "y": 560,
            "size": 50,
            "at": "l4:little",
            "color": "accent",
            "hl": [
              {
                "text": "bớt cháy",
                "at": "l4:fewer"
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
          "say": "So you follow whoever calls the loudest. Dũng becomes an office firefighter.",
          "sub": "Nên ta chạy theo ai gọi to nhất. Dũng thành lính cứu hoả văn phòng.",
          "keys": [
            "ai gọi to nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And many fires are just important tasks, left too long.",
          "sub": "Mà nhiều đám “cháy nhà” chỉ là việc quan trọng bị để quá lâu.",
          "keys": [
            "để quá lâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A little each week on important work means fewer firefighting days.",
          "sub": "Mỗi tuần làm một chút việc quan trọng, bớt dần ngày chữa cháy.",
          "keys": [
            "bớt dần ngày chữa cháy"
          ]
        }
      ],
      "ref": "p4,p6"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "ref": "p5,p6",
      "data": {
        "set": "office",
        "label": "Thứ Hai 9:30",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tô đỏ mọi việc, chạy theo ai gọi to nhất",
          "why": "Việc nào cũng đỏ thì màu đỏ hết giúp phân biệt; bản kiểm kê sếp chờ dễ nộp trễ.",
          "rule": "Mỗi sáng một việc quan trọng nhất, làm trước"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Nine thirty. Five calls done. The report? Still zero lines.",
          "sub": "Chín rưỡi. Xong năm cuộc gọi. Bản kiểm kê? Vẫn chưa được dòng nào.",
          "face": "worried",
          "pose": "shrug",
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
          "say": "When everything is a priority, nothing is.",
          "sub": "Cái gì cũng ưu tiên thì chẳng còn gì là ưu tiên.",
          "keys": [
            "chẳng còn gì là ưu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind to eight a.m. Take two!",
          "sub": "Tua lại tám giờ sáng. Quay lại cảnh này!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Each morning, one most important task. Today, the report.",
          "sub": "Mỗi sáng một việc quan trọng nhất. Hôm nay: bản kiểm kê.",
          "phase": "redo",
          "face": "thinking",
          "pose": "stand"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "I'll do it before calls that aren't urgent.",
          "sub": "Làm nó trước các cuộc gọi không khẩn.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
    },
    {
      "id": "s09",
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
            "text": "② Thứ Hai 8:00 · Tua lại",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:take two"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-notepad",
                "envelope"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:inbox",
            "caption": "8:00 · trước khi mở hộp thư",
            "icon": "spiral-notepad"
          },
          {
            "id": "d-10",
            "t": "text",
            "text": "10 phút · 1 việc chính",
            "x": 5964,
            "y": 170,
            "size": 60,
            "at": "l3:one",
            "color": "accent",
            "hl": [
              {
                "text": "1 việc chính",
                "at": "l3:one"
              }
            ]
          },
          {
            "id": "d-fr",
            "t": "text",
            "text": "→ đặt vào giờ tỉnh táo nhất",
            "x": 5964,
            "y": 260,
            "size": 46,
            "at": "l3:freshest",
            "hl": [
              {
                "text": "tỉnh táo nhất",
                "at": "l3:freshest"
              }
            ]
          },
          {
            "id": "d-mail",
            "t": "illus",
            "name": "envelope",
            "x": 5964,
            "y": 340,
            "size": 90,
            "at": "l4:inbox"
          },
          {
            "id": "d-in",
            "t": "text",
            "text": "Hộp thư = việc người khác",
            "x": 6074,
            "y": 360,
            "size": 46,
            "at": "l4:other",
            "color": "coral",
            "hl": [
              {
                "text": "việc người khác",
                "at": "l4:other people"
              }
            ]
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Lướt 5 phút, trả lời sau",
            "x": 5964,
            "y": 460,
            "size": 50,
            "at": "l4:five"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, take two: Monday, eight a.m., before the inbox opens.",
          "sub": "Chặng hai, quay lại: tám giờ sáng thứ Hai, trước khi mở hộp thư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ten minutes. If I finish only one thing today, which one?",
          "sub": "Mười phút. Nếu hôm nay chỉ xong một việc, việc nào?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's the one. Put it in your freshest hours, usually early morning.",
          "sub": "Chính nó. Đặt vào giờ tỉnh táo nhất, thường là đầu buổi sáng.",
          "keys": [
            "giờ tỉnh táo nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your inbox is other people's to do list. Scan five minutes, reply later.",
          "sub": "Hộp thư là danh sách việc của người khác. Lướt năm phút, trả lời sau.",
          "keys": [
            "việc của người khác"
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
      "ref": "p7,p8"
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
          }
        ],
        "items": [
          {
            "id": "d-wk",
            "t": "text",
            "text": "Việc lớn → nhìn cấp tuần",
            "x": 5964,
            "y": 560,
            "size": 50,
            "at": "l1:week",
            "hl": [
              {
                "text": "cấp tuần",
                "at": "l1:week"
              }
            ]
          },
          {
            "id": "d-fri",
            "t": "text",
            "text": "Thứ Sáu: chọn 3 kết quả",
            "x": 5964,
            "y": 630,
            "size": 44,
            "at": "l1:three"
          },
          {
            "id": "d-solo",
            "t": "text",
            "text": "Tự làm: 1 danh sách chung",
            "x": 5964,
            "y": 700,
            "size": 44,
            "at": "l2:one list",
            "color": "accent"
          },
          {
            "id": "d-sort",
            "t": "text",
            "text": "Xếp theo hậu quả",
            "x": 6804,
            "y": 690,
            "size": 50,
            "at": "l2:consequences",
            "hl": [
              {
                "text": "hậu quả",
                "at": "l2:consequences"
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
          "say": "Big tasks? Zoom out to the week: choose three results on Friday afternoon.",
          "sub": "Việc lớn? Nhìn từ cấp tuần: chiều thứ Sáu chọn ba kết quả.",
          "keys": [
            "cấp tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Work for yourself? Put every client on one list. Sort by consequences, not the latest text.",
          "sub": "Tự làm? Ghi mọi khách lên một danh sách. Xếp theo hậu quả, không theo tin mới.",
          "keys": [
            "Xếp theo hậu quả"
          ]
        }
      ],
      "ref": "p9,p10"
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
          },
          {
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "text": "③ Thứ Ba 14:00 · 7 nhóm chat",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
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
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "laptop",
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "14:00 · bàn bên cạnh",
            "icon": "speech-balloon"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Lan: thông báo 7 nhóm",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:seven",
            "hl": [
              {
                "text": "7 nhóm",
                "at": "l2:seven"
              }
            ]
          },
          {
            "id": "e-14",
            "t": "text",
            "text": "14:00 mở bảng báo giá",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l4:price sheet"
          },
          {
            "id": "e-17",
            "t": "text",
            "text": "17:00 vẫn chưa xong",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l5:five",
            "color": "coral"
          },
          {
            "id": "e-sai",
            "t": "text",
            "text": "→ gửi đi, sai một giá",
            "x": 7932,
            "y": 410,
            "size": 46,
            "at": "l6:wrong price",
            "color": "coral",
            "hl": [
              {
                "text": "sai một giá",
                "at": "l6:wrong price"
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
          "say": "Third stop: Tuesday, two p.m. Meet Lan, Dũng's desk neighbour.",
          "sub": "Chặng ba: hai giờ chiều thứ Ba. Đây là Lan, bàn bên cạnh Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lan sells to dealers, with alerts on for all seven chat groups.",
          "sub": "Lan bán hàng cho đại lý, bật thông báo cho cả bảy nhóm chat.",
          "keys": [
            "cả bảy nhóm chat"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "So I never miss a client!",
          "sub": "Để không sót khách nào!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At two she opens the price sheet, replying every few minutes.",
          "sub": "Hai giờ cô mở bảng báo giá, vài phút lại quay sang trả lời."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Five o'clock already? And it's still not done!",
          "sub": "Năm giờ rồi á? Mà vẫn chưa xong!",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "It finally goes out, with one wrong price.",
          "sub": "Cuối cùng bảng cũng gửi đi, còn sai giá một mặt hàng.",
          "keys": [
            "sai giá một mặt hàng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p19"
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
            "id": "e-cost",
            "t": "text",
            "text": "Bị kéo đi = mất công nhớ lại",
            "x": 7932,
            "y": 500,
            "size": 46,
            "at": "l1:remember"
          },
          {
            "id": "e-mute",
            "t": "illus",
            "name": "mobile-phone",
            "x": 7932,
            "y": 570,
            "size": 80,
            "at": "l2:mute"
          },
          {
            "id": "e-st",
            "t": "text",
            "text": "“Tập trung, 11 giờ trả lời”",
            "x": 8032,
            "y": 585,
            "size": 46,
            "at": "l2:focusing",
            "hl": [
              {
                "text": "11 giờ trả lời",
                "at": "l2:eleven"
              }
            ]
          },
          {
            "id": "e-call",
            "t": "text",
            "text": "Gấp thật thì gọi điện",
            "x": 7932,
            "y": 680,
            "size": 44,
            "at": "l2:call"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đúng lúc > nhanh",
            "x": 8772,
            "y": 680,
            "size": 46,
            "at": "l5:right time",
            "color": "accent",
            "hl": [
              {
                "text": "Đúng lúc",
                "at": "l5:right time"
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
          "say": "Every interruption costs time to remember where you were.",
          "sub": "Mỗi lần bị kéo đi, lại mất công nhớ đang làm đến đâu.",
          "keys": [
            "nhớ đang làm đến đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In your main block, mute group chats. Status: focusing, I'll reply at eleven. Emergencies can call.",
          "sub": "Khung việc chính: tắt nhóm chat. Trạng thái: “Tập trung, mười một giờ trả lời.” Gấp thì gọi.",
          "keys": [
            "Đang tập trung"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Reply in a few rounds a day. The right time beats fast.",
          "sub": "Trả lời theo vài đợt. Trả lời nhanh không bằng trả lời đúng lúc.",
          "keys": [
            "trả lời đúng lúc"
          ]
        }
      ],
      "ref": "p17,p18,p20"
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
            "text": "④ Thứ Tư · Việc lớn nằm im",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:line"
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
                  "pose": "shrug",
                  "face": "worried"
                }
              ],
              "props": [
                "clipboard",
                "hourglass-not-done"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · dòng cũ trong danh sách",
            "icon": "hourglass-not-done"
          },
          {
            "id": "f-old",
            "t": "text",
            "text": "“Làm đề án”",
            "x": 60,
            "y": 1260,
            "size": 64,
            "at": "l2:proposal",
            "color": "muted"
          },
          {
            "id": "f-oldx",
            "t": "strike",
            "over": "f-old",
            "at": "l5:result"
          },
          {
            "id": "f-tm",
            "t": "text",
            "text": "Ngày mai: bận nhất tuần",
            "x": 60,
            "y": 1360,
            "size": 44,
            "at": "l3:tomorrow",
            "color": "coral"
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "Kết quả cuối → bước 1–2 giờ",
            "x": 60,
            "y": 1440,
            "size": 46,
            "at": "l5:result",
            "color": "accent",
            "hl": [
              {
                "text": "bước 1–2 giờ",
                "at": "l5:steps"
              }
            ]
          },
          {
            "id": "f-v1",
            "t": "text",
            "text": "mở đầu bằng động từ",
            "x": 60,
            "y": 1510,
            "size": 40,
            "at": "l5:verb",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday. One line hasn't moved for weeks.",
          "sub": "Chặng bốn: thứ Tư. Một dòng nằm im mấy tuần liền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Write proposal. I'll start it... tomorrow.",
          "sub": "“Làm đề án.” Để mai… mình làm.",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ah, tomorrow, the busiest day of the week. That line has no starting point.",
          "sub": "À, ngày mai, ngày bận nhất tuần. Dòng ấy không có điểm bắt đầu.",
          "keys": [
            "ngày mai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Write the end result, split it into one to two hour verb steps, and book step one.",
          "sub": "Viết kết quả cuối, chia bước một hai giờ có động từ, đặt bước đầu vào lịch.",
          "keys": [
            "bước một hai giờ"
          ]
        }
      ],
      "ref": "p11"
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
            "id": "f-lazy",
            "t": "text",
            "text": "Trì hoãn ≠ lười",
            "x": 60,
            "y": 1590,
            "size": 60,
            "at": "l1:laziness",
            "color": "accent",
            "hl": [
              {
                "text": "≠ lười",
                "at": "l1:laziness+300"
              }
            ]
          },
          {
            "id": "f-r1",
            "t": "text",
            "text": "mơ hồ ·",
            "x": 60,
            "y": 1690,
            "size": 48,
            "at": "l1:unclear"
          },
          {
            "id": "f-r2",
            "t": "text",
            "text": "quá lớn ·",
            "x": 250,
            "y": 1690,
            "size": 48,
            "at": "l1:big"
          },
          {
            "id": "f-r3",
            "t": "text",
            "text": "sợ làm dở",
            "x": 460,
            "y": 1690,
            "size": 48,
            "at": "l1:scary",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Procrastination is rarely laziness. The task is unclear, too big, or scary.",
          "sub": "Trì hoãn ít khi do lười: việc mơ hồ, quá lớn, hoặc sợ làm không tốt.",
          "keys": [
            "ít khi do lười"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know the real reason, and you can fix the right spot.",
          "sub": "Biết đúng lý do thì mới chữa đúng chỗ.",
          "keys": [
            "chữa đúng chỗ"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Việc chẳng bao giờ gấp, đến tháng Chín có tám người mới thì sao?",
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
          "say": "What about work that is never urgent, until eight new people arrive?",
          "sub": "Việc chẳng bao giờ gấp, đến lúc tám người mới vào thì sao?",
          "keys": [
            "chẳng bao giờ gấp"
          ]
        }
      ],
      "ref": "p13"
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
            "at": "l1",
            "fit": [
              "f-hr2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-hr2",
            "t": "text",
            "text": "Tháng Chín: 8 người mới",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l1:September",
            "color": "coral"
          },
          {
            "id": "f-hr3",
            "t": "text",
            "text": "Việc quan trọng: tự hẹn",
            "x": 60,
            "y": 1780,
            "size": 50,
            "at": "l3:book",
            "color": "accent",
            "hl": [
              {
                "text": "tự hẹn",
                "at": "l3:yourself"
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
          "say": "An HR officer keeps postponing the onboarding guide. Then in September, eight people join.",
          "sub": "Người làm nhân sự cứ hoãn viết quy trình đón người mới. Rồi tháng Chín, tám người vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A whole week goes to repeated questions. Fix: book one morning a week, months earlier.",
          "sub": "Mất trọn tuần trả lời câu lặp lại. Cách tránh: từ sớm, giữ một buổi sáng mỗi tuần.",
          "keys": [
            "giữ một buổi sáng mỗi tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nobody chases important work. You book it yourself.",
          "sub": "Việc quan trọng không ai giục, mình phải tự hẹn.",
          "keys": [
            "tự hẹn"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm 10:00 · Thêm việc",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
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
                  "side": "left"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "walk",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "10:00 · Cô Hoa ghé bàn",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "g-old",
            "t": "text",
            "text": "Gật hết, tối ôm về",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:urgent",
            "color": "muted"
          },
          {
            "id": "g-oldx",
            "t": "strike",
            "over": "g-old",
            "at": "l4:three"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3 việc có hạn + giờ cần",
            "x": 2028,
            "y": 1350,
            "size": 46,
            "at": "l4:three",
            "hl": [
              {
                "text": "+ giờ cần",
                "at": "l4:time"
              }
            ]
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“Em lùi việc nào ạ?”",
            "x": 2028,
            "y": 1440,
            "size": 50,
            "at": "l5:move",
            "color": "accent",
            "hl": [
              {
                "text": "lùi việc nào",
                "at": "l5:move"
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
          "say": "Fifth stop: Thursday. Meet Cô Hoa, Dũng's manager, with one more urgent task.",
          "sub": "Chặng năm: thứ Năm. Đây là Cô Hoa, trưởng phòng của Dũng, cầm thêm một việc gấp.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Dũng, can you finish this report by Friday? It's urgent.",
          "sub": "Dũng ơi, em làm xong báo cáo này trước thứ Sáu nhé? Gấp đấy.",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I have three tasks due this week. Here's the time each one needs.",
          "sub": "Em đang có ba việc hạn tuần này, đây là thời gian mỗi việc cần.",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "If I take this one too, which should I move later?",
          "sub": "Nếu nhận thêm việc này, cô muốn em lùi việc nào ạ?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Good question. Let me look at the list.",
          "sub": "Hỏi hay đấy. Để cô xem danh sách.",
          "face": "thinking",
          "pose": "hold"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p15"
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
            "id": "g-k",
            "t": "text",
            "text": "Danh sách → người giao chọn",
            "x": 2028,
            "y": 1550,
            "size": 46,
            "at": "l1:choose",
            "hl": [
              {
                "text": "người giao chọn",
                "at": "l1:choose"
              }
            ]
          },
          {
            "id": "g-2t",
            "t": "text",
            "text": "Hai người cùng bảo gấp?",
            "x": 2028,
            "y": 1645,
            "size": 50,
            "at": "l2:two"
          },
          {
            "id": "g-like",
            "t": "text",
            "text": "Tự chọn theo cảm tình",
            "x": 2028,
            "y": 1730,
            "size": 42,
            "at": "l2:like",
            "color": "muted"
          },
          {
            "id": "g-likex",
            "t": "strike",
            "over": "g-like",
            "at": "l2:fear"
          },
          {
            "id": "g-both",
            "t": "text",
            "text": "Báo cả hai cùng lúc",
            "x": 2868,
            "y": 1770,
            "size": 50,
            "at": "l4:both",
            "color": "accent",
            "hl": [
              {
                "text": "cả hai cùng lúc",
                "at": "l4:same time"
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
          "say": "List tasks with their time, and let the person giving work choose what moves.",
          "sub": "Liệt kê việc kèm thời gian, để người giao việc chọn việc nào lùi.",
          "keys": [
            "người giao việc chọn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two people both say urgent? Don't pick by who you like or fear.",
          "sub": "Hai người cùng bảo gấp? Đừng chọn theo cảm tình hay nỗi sợ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tell both at the same time, so they agree on one order.",
          "sub": "Báo cho cả hai cùng lúc, để họ thống nhất một thứ tự.",
          "keys": [
            "cả hai cùng lúc"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 17:00 · Bao lâu thì xong?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:five"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
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
            "at": "l1:question",
            "caption": "17:00 · hứa hạn cho đề án",
            "icon": "stopwatch"
          },
          {
            "id": "h-pretty",
            "t": "text",
            "text": "Con số đẹp nhất",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l4:prettiest",
            "color": "muted"
          },
          {
            "id": "h-prettyx",
            "t": "strike",
            "over": "h-pretty",
            "at": "l4:last time"
          },
          {
            "id": "h-range",
            "t": "text",
            "text": "Lần trước + chờ duyệt → khoảng",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l4:range",
            "color": "accent",
            "hl": [
              {
                "text": "khoảng",
                "at": "l4:range"
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
          "say": "Sixth stop: Thursday, five p.m. Cô Hoa asks the classic question.",
          "sub": "Chặng sáu: năm giờ chiều thứ Năm. Cô Hoa hỏi câu kinh điển."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, how long will the proposal take?",
          "sub": "Thế đề án bao lâu thì xong em?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Let me check how long the last one really took, plus approval time.",
          "sub": "Để em xem lần trước thật sự mất bao lâu, cộng giờ chờ duyệt.",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Smart. Not the prettiest number: last time, plus waiting, as a range.",
          "sub": "Khôn đấy. Đừng đưa con số đẹp nhất: nhìn lần trước, cộng giờ chờ, đưa một khoảng.",
          "keys": [
            "đưa một khoảng"
          ]
        }
      ],
      "ref": "p21"
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
          }
        ],
        "items": [
          {
            "id": "h-you",
            "t": "text",
            "text": "Ưu tiên cả chính mình",
            "x": 3996,
            "y": 1430,
            "size": 56,
            "at": "l1:you",
            "color": "accent",
            "hl": [
              {
                "text": "cả chính mình",
                "at": "l1:you"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1510,
            "w": 46,
            "h": 46,
            "at": "l2:hard",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1492,
            "size": 58,
            "at": "l2:hard+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Việc khó lúc đầu óc tốt",
            "x": 4066,
            "y": 1502,
            "size": 44,
            "at": "l2:hard+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1575,
            "w": 46,
            "h": 46,
            "at": "l2:breaks",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1557,
            "size": 58,
            "at": "l2:breaks+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Nghỉ ngắn xa màn hình",
            "x": 4066,
            "y": 1567,
            "size": 44,
            "at": "l2:breaks+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1640,
            "w": 46,
            "h": 46,
            "at": "l2:sleep",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1622,
            "size": 58,
            "at": "l2:sleep+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Ngủ đủ",
            "x": 4066,
            "y": 1632,
            "size": 44,
            "at": "l2:sleep+200"
          },
          {
            "id": "h-free",
            "t": "text",
            "text": "Thiết kế tự do: khách thứ 4",
            "x": 4836,
            "y": 1780,
            "size": 44,
            "at": "l3:fourth",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And priorities include you, too.",
          "sub": "Và ưu tiên cũng gồm cả chính bạn.",
          "keys": [
            "cả chính bạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hard work when fresh, short screen breaks, enough sleep. A tired hour is worth less.",
          "sub": "Việc khó lúc tỉnh, nghỉ ngắn xa màn hình, ngủ đủ. Giờ kiệt sức chẳng đáng bao nhiêu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A freelance designer with three clients takes a fourth.",
          "sub": "Một người thiết kế tự do có ba khách, nhận thêm khách thứ tư."
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s21",
      "module": "BRK-04",
      "data": {
        "title": "Khách thứ tư",
        "wrong": "Hứa như mọi lần, làm đến một giờ sáng",
        "right": "“Tuần này em kín lịch, thứ Sáu tuần sau em giao”",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrongIllus": "sleepy-face",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Way A: same promises, work until one a.m.",
          "sub": "Cách A: hứa như mọi lần, làm đến một giờ sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Way B: I'm booked this week. Next Friday.",
          "sub": "Cách B: “Tuần này em kín lịch, thứ Sáu tuần sau em giao.”"
        }
      ],
      "ref": "p23"
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
          }
        ],
        "items": [
          {
            "id": "h-a",
            "t": "text",
            "text": "A: gửi nhầm bản nháp",
            "x": 3996,
            "y": 1730,
            "size": 42,
            "at": "l1:draft",
            "color": "coral"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Hứa bằng ngủ, trả bằng lỗi",
            "x": 3996,
            "y": 1790,
            "size": 48,
            "at": "l3:sleep",
            "color": "accent",
            "hl": [
              {
                "text": "trả bằng lỗi",
                "at": "l3:mistakes"
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
          "say": "Way A: by week three, a draft goes to his biggest client. Way B: all four get quality.",
          "sub": "Cách A: tuần thứ ba gửi nhầm bản nháp cho khách lớn nhất. Cách B: cả bốn được làm kỹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Deadlines promised with sleep are paid back in mistakes.",
          "sub": "Hạn hứa bằng giấc ngủ, trả bằng sai sót.",
          "keys": [
            "trả bằng sai sót"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 16:00 · Thói quen",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "shrug",
                  "face": "sad"
                }
              ],
              "props": [
                "spiral-calendar",
                "light-bulb"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "16:00 thứ Sáu · nhìn lại tuần",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-all",
            "t": "text",
            "text": "Cả loạt mẹo trong 1 tuần",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:ten",
            "color": "muted"
          },
          {
            "id": "i-allx",
            "t": "strike",
            "over": "i-all",
            "at": "l4:Pick"
          },
          {
            "id": "i-one",
            "t": "text",
            "text": "1 thói quen nhỏ × 2 tuần",
            "x": 5964,
            "y": 1350,
            "size": 58,
            "at": "l4:two weeks",
            "color": "accent",
            "hl": [
              {
                "text": "× 2 tuần",
                "at": "l4:two weeks"
              }
            ]
          },
          {
            "id": "i-10",
            "t": "text",
            "text": "vd. 10 phút mỗi sáng",
            "x": 5964,
            "y": 1440,
            "size": 46,
            "at": "l4:ten minutes"
          },
          {
            "id": "i-bad",
            "t": "text",
            "text": "Ngày bị cuốn đi: mai quay lại",
            "x": 5964,
            "y": 1530,
            "size": 46,
            "at": "l5:tomorrow",
            "hl": [
              {
                "text": "mai quay lại",
                "at": "l5:return"
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
          "say": "Seventh stop: Friday afternoon. Dũng looks back at his week.",
          "sub": "Chặng bảy: chiều thứ Sáu. Dũng nhìn lại cả tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "This week I tried ten new tips. I kept... none of them.",
          "sub": "Tuần này mình thử mười mẹo mới. Giữ được… chẳng cái nào.",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick one small habit, like ten minutes each morning, for two weeks.",
          "sub": "Chọn một thói quen nhỏ, như mười phút mỗi sáng, làm đủ hai tuần.",
          "keys": [
            "một thói quen nhỏ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A bad day? Don't blame yourself. Return to the habit tomorrow.",
          "sub": "Ngày bị cuốn đi? Đừng tự trách. Mai quay lại thói quen đó.",
          "keys": [
            "Mai quay lại"
          ]
        }
      ],
      "ref": "p25,p26"
    },
    {
      "id": "s24",
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
            "at": "l1:Same"
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
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "red-circle",
                "spiral-notepad"
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
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:eight",
            "caption": "Thứ Hai tuần sau · 8:00",
            "icon": "eight-oclock"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "1 việc đỏ",
            "x": 7932,
            "y": 1240,
            "size": 120,
            "at": "l2:one",
            "color": "coral",
            "hl": [
              {
                "text": "1 việc đỏ",
                "at": "l2:red"
              }
            ]
          },
          {
            "id": "j-step",
            "t": "text",
            "text": "Đề án: bước 1 trước",
            "x": 7932,
            "y": 1410,
            "size": 46,
            "at": "l3:step one"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Nhảy trước khi nước đến",
            "x": 7932,
            "y": 1510,
            "size": 52,
            "at": "l4:jumps",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi",
                "at": "l4:before"
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
          "say": "Next Monday. Eight a.m. Same desk, same Dũng.",
          "sub": "Thứ Hai tuần sau. Tám giờ sáng. Vẫn bàn ấy, vẫn Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ten minutes first. And this week, only one red task.",
          "sub": "Mười phút trước đã. Tuần này, chỉ một việc đỏ.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The proposal, step one, before the inbox.",
          "sub": "Đề án, bước một, làm trước khi mở hộp thư.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Water reaches your feet, then you jump? Dũng now jumps before the water comes.",
          "sub": "“Nước đến chân mới nhảy”? Giờ Dũng nhảy trước khi nước đến.",
          "keys": [
            "nhảy trước khi nước đến"
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
      "ref": "p7,outro"
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
            "at": "l1:urgent",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:one",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:early",
            "fit": "G",
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
            "x": 3608,
            "y": 40,
            "at": "l1:urgent"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 170,
            "at": "l2:one"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1440,
            "at": "l3:early"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "d-10"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:first"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: separate urgent from important. Ask what happens if it's late.",
          "sub": "Tóm lại: tách gấp với quan trọng. Hỏi trễ thì sao.",
          "keys": [
            "tách gấp với quan trọng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Choose one main task a day, and do it first, before the inbox.",
          "sub": "Mỗi ngày chọn một việc chính, làm nó trước hộp thư.",
          "keys": [
            "một việc chính"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Speak up early, keep your strength, and do the right thing first.",
          "sub": "Quá tải thì nói sớm, giữ sức, và làm đúng việc trước.",
          "keys": [
            "làm đúng việc trước"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p27,outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[9]",
      "data": {
        "q": "What does the article suggest doing each morning instead of marking everything red?",
        "options": [
          "Pick one most important task and do it before answering calls that are not urgent",
          "Answer every call first, then start the inventory report late in the evening at home",
          "Add even more red marks, so the real priorities stand out above the others"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "red-circle",
        "why": "Chọn một việc quan trọng nhất và làm trước, việc chính luôn có giờ tốt nhất trong ngày."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does the article suggest doing each morning instead of marking everything red?",
          "sub": "Bài viết gợi ý mỗi sáng nên làm gì thay vì tô đỏ mọi việc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pick one most important task and do it before answering calls that are not urgent.",
          "sub": "Chọn một việc quan trọng nhất, làm trước các cuộc gọi không khẩn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Then your main task gets the best hours. Other calls still get answered, just later.",
          "sub": "Việc chính có giờ tốt nhất. Cuộc gọi khác vẫn được trả lời, chỉ là sau."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Sáng mai: một việc quan trọng nhất",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
