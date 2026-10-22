// Kịch bản video W lần 3 (#110) — "Cách lên kế hoạch làm việc mỗi ngày để không bị cuốn theo việc vặt" · chuỗi "Quản lý thời gian và sắp xếp ưu tiên"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). Mở đầu hoạt hình từ 🔀 Hai lựa chọn (p3). Đủ ý cho 40 câu hỏi.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-plan-your-workday--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "busy-workers",
    "slug": "how-to-plan-your-workday",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách lên kế hoạch làm việc mỗi ngày để không bị cuốn theo việc vặt",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT NGÀY của Thảo, kế toán tự do (thứ Ba 7:45 danh sách 20 dòng → 8:00 tin nhắn trước → “Khoan đã!” tua lại 7:50 → 9:00 văn phòng Dũng → 10:30 khách gọi gấp → 11:30 việc mới → 17:30 đóng ngày → 20:00 nhà Cô Hoa → 7:45 thứ Tư). Nhân vật (mạch chủ đề w145/_series/busy-workers.md): Thảo (p16, giữ tên bài), Dũng (người làm kế hoạch bán hàng p3, SCENE-03 hai cách), Cô Hoa + Bé Bin (Chị Diệu p20). Người bảo trì (p11) kể trên bảng + BRK-07. Cảnh ngắt nhịp: BRK-02 “chỉ còn ba bốn tiếng” (p6), BRK-07 rehook (p11), BRK-04 quá tải/vừa sức (p22). Khép vòng: “Ăn có nơi, chơi có chốn” → việc có giờ. Bản cũ (W lần 3, #110): w145/bak/how-to-plan-your-workday--w01.js.",
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
            "text": "20 việc",
            "x": 60,
            "y": 110,
            "size": 170,
            "at": "l1:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "20 việc",
                "at": "l1:twenty+400"
              }
            ]
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "cho 4 tiếng trống",
            "x": 70,
            "y": 330,
            "size": 64,
            "at": "l1:four",
            "hl": [
              {
                "text": "4 tiếng",
                "at": "l1:hours"
              }
            ]
          },
          {
            "id": "a-fail",
            "t": "text",
            "text": "→ tối nào cũng thấy thất bại",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:failure",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twenty tasks on the list. Four free hours in the day.",
          "sub": "Hai mươi việc trong danh sách. Bốn tiếng trống trong ngày.",
          "keys": [
            "Hai mươi việc",
            "Bốn tiếng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do the maths, and every evening ends with the same feeling: failure.",
          "sub": "Làm phép tính đi, tối nào cũng kết thúc bằng một cảm giác: thất bại.",
          "keys": [
            "thất bại"
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
              "set": "home",
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
                "spiral-notepad",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1",
            "caption": "7:45 sáng thứ Ba",
            "icon": "spiral-notepad"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn có nơi, chơi có chốn”",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l4:place",
            "color": "accent",
            "hl": [
              {
                "text": "có nơi",
                "at": "l4:place"
              }
            ]
          },
          {
            "id": "a-job",
            "t": "text",
            "text": "Còn việc thì… chưa có giờ",
            "x": 60,
            "y": 660,
            "size": 46,
            "at": "l5:time",
            "color": "coral"
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
          "say": "Freelance accountant for five small businesses, and queen of long lists.",
          "sub": "Kế toán tự do cho năm hộ kinh doanh, nữ hoàng của những danh sách dài.",
          "keys": [
            "nữ hoàng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Tuesday, seven forty-five. Twenty lines today. I'll just start from the top!",
          "sub": "Bảy giờ bốn lăm thứ Ba. Hôm nay hai mươi dòng. Cứ làm từ trên xuống!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: eat in a proper place, play in a proper place.",
          "sub": "Ông bà dặn: “Ăn có nơi, chơi có chốn.”",
          "keys": [
            "Ăn có nơi, chơi có chốn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo's tasks? No place, no time. They just float.",
          "sub": "Còn việc của Thảo? Chẳng có chốn, chẳng có giờ, cứ trôi lềnh bềnh."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p1"
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
            "text": "Việc vặt cuốn đi: làm sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:small jobs",
            "hl": [
              {
                "text": "Việc vặt",
                "at": "l1:small jobs"
              }
            ]
          },
          {
            "id": "b-10",
            "t": "text",
            "text": "10 phút mỗi ngày",
            "x": 2028,
            "y": 160,
            "size": 64,
            "at": "l2:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 phút",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "• 2–3 việc chính, có giờ",
            "x": 2028,
            "y": 260,
            "size": 48,
            "at": "l3:main"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "• chừa khoảng trống",
            "x": 2028,
            "y": 330,
            "size": 48,
            "at": "l3:space"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "• 5 phút đóng ngày",
            "x": 2028,
            "y": 400,
            "size": 48,
            "at": "l3:close"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you plan a day, so small jobs don't swallow it?",
          "sub": "Vậy lên kế hoạch thế nào để việc vặt không nuốt cả ngày?",
          "keys": [
            "việc vặt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "About ten minutes is enough.",
          "sub": "Khoảng mười phút là đủ.",
          "keys": [
            "mười phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two or three main tasks, each with a real time slot. Some empty space. And five minutes to close the day.",
          "sub": "Hai ba việc chính, mỗi việc một khung giờ thật. Chừa khoảng trống. Và năm phút đóng ngày.",
          "keys": [
            "khung giờ thật"
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
            "id": "b-note",
            "t": "illus",
            "name": "notebook",
            "x": 2928,
            "y": 150,
            "size": 120,
            "at": "l1:list"
          },
          {
            "id": "b-list",
            "t": "text",
            "text": "Danh sách: làm gì",
            "x": 3068,
            "y": 170,
            "size": 50,
            "at": "l1:what"
          },
          {
            "id": "b-not",
            "t": "text",
            "text": "không biết: lúc nào, kịp không",
            "x": 3068,
            "y": 240,
            "size": 40,
            "at": "l1:when",
            "color": "muted"
          },
          {
            "id": "b-cal",
            "t": "illus",
            "name": "alarm-clock",
            "x": 2928,
            "y": 330,
            "size": 120,
            "at": "l2:calendar"
          },
          {
            "id": "b-cal2",
            "t": "text",
            "text": "Lịch: 9:00–10:30 viết đề xuất",
            "x": 3068,
            "y": 350,
            "size": 44,
            "at": "l3:nine",
            "hl": [
              {
                "text": "9:00–10:30",
                "at": "l3:nine"
              }
            ]
          },
          {
            "id": "b-full",
            "t": "text",
            "text": "Nhìn là biết: còn chỗ hay đầy",
            "x": 3068,
            "y": 430,
            "size": 40,
            "at": "l3:room",
            "color": "muted"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Chưa có giờ = chưa là kế hoạch",
            "x": 2028,
            "y": 560,
            "size": 54,
            "at": "l4:time slot",
            "color": "accent",
            "hl": [
              {
                "text": "chưa là kế hoạch",
                "at": "l4:plan"
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
          "say": "A list tells you what to do. Not when, and not if it fits.",
          "sub": "Danh sách cho biết làm gì. Không cho biết lúc nào, có kịp không.",
          "keys": [
            "lúc nào, có kịp không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So keep the list as a store room, and move two or three main tasks to your calendar.",
          "sub": "Vậy giữ danh sách làm kho chứa, chuyển hai ba việc chính sang lịch.",
          "keys": [
            "sang lịch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like: nine to ten thirty, write the proposal. Now you see if the day still has room.",
          "sub": "Như: chín giờ đến mười rưỡi, viết đề xuất. Nhìn là biết ngày còn chỗ hay đã đầy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A task without a time slot is not yet a plan.",
          "sub": "Việc chưa có giờ thì chưa phải kế hoạch.",
          "keys": [
            "chưa phải kế hoạch"
          ]
        }
      ],
      "ref": "p1,p2,p4"
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
            "text": "① 8:00 · Tin nhắn trước",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
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
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:messages",
            "caption": "8:00 · bàn làm việc ở nhà",
            "icon": "mobile-phone"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Khách hỏi gì → làm ngay",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:right now",
            "color": "coral"
          },
          {
            "id": "c-15",
            "t": "text",
            "text": "15:00 mới nhớ: hồ sơ sắp hạn",
            "x": 3996,
            "y": 270,
            "size": 46,
            "at": "l3:three",
            "hl": [
              {
                "text": "hồ sơ sắp hạn",
                "at": "l3:due"
              }
            ]
          },
          {
            "id": "c-sot",
            "t": "text",
            "text": "Làm vội → sót 1 hoá đơn",
            "x": 3996,
            "y": 360,
            "size": 50,
            "at": "l4:invoice",
            "color": "coral",
            "hl": [
              {
                "text": "sót 1 hoá đơn",
                "at": "l4:invoice"
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
          "say": "First stop: eight a.m. Thảo opens her messages first.",
          "sub": "Chặng một: tám giờ sáng. Thảo mở tin nhắn trước tiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Client questions! I'll answer every one right now.",
          "sub": "Khách hỏi kìa! Trả lời hết ngay luôn.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At three p.m., she suddenly remembers a client's file, due very soon.",
          "sub": "Ba giờ chiều, cô chợt nhớ bộ hồ sơ của một khách, sắp đến hạn nộp.",
          "keys": [
            "sắp đến hạn nộp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She rushes until evening, and misses one invoice. Now she must file again.",
          "sub": "Cô làm vội đến tối, sót một hoá đơn, phải nộp bổ sung.",
          "keys": [
            "sót một hoá đơn"
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
      "id": "s05",
      "module": "DLG-01",
      "ref": "p16,p17",
      "data": {
        "set": "home",
        "label": "8:00 · tin nhắn trước",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mở tin nhắn trước, khách hỏi gì làm ngay",
          "why": "Chiều mới nhớ bộ hồ sơ sắp đến hạn, làm vội và bỏ sót một hoá đơn.",
          "rule": "Việc có hạn đặt giờ trước, việc hỏi han xếp hàng sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "New messages first. Whatever clients ask, I do it now.",
          "sub": "Mở tin nhắn trước. Khách hỏi gì làm ngay.",
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
          "say": "The file with a deadline has no time slot. Rewind to seven fifty!",
          "sub": "Bộ hồ sơ có hạn lại chưa có giờ. Tua lại bảy giờ năm mươi!",
          "phase": "redo"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "The file with a deadline gets nine to ten. Questions wait in line.",
          "sub": "Hồ sơ có hạn: chín đến mười giờ. Việc hỏi han xếp hàng sau.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Deadlines get time slots first. Questions queue after.",
          "sub": "Việc có hạn đặt giờ trước, việc hỏi han xếp hàng sau.",
          "phase": "redo",
          "keys": [
            "đặt giờ trước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "text": "② 7:50 · Mười phút",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "spiral-notepad"
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
            "at": "l1:minutes",
            "caption": "7:50 · trước khi mở tin nhắn",
            "icon": "spiral-calendar"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l3:fixed",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 152,
            "size": 58,
            "at": "l3:fixed+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Lịch cố định: họp, hẹn, đón con",
            "x": 6034,
            "y": 162,
            "size": 40,
            "at": "l3:fixed+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 258,
            "w": 46,
            "h": 46,
            "at": "l3:hours",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 240,
            "size": 58,
            "at": "l3:hours+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Đếm giờ thật còn lại",
            "x": 6034,
            "y": 250,
            "size": 40,
            "at": "l3:hours+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 346,
            "w": 46,
            "h": 46,
            "at": "l4:two",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 328,
            "size": 58,
            "at": "l4:two+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Chọn 2–3 việc chính",
            "x": 6034,
            "y": 338,
            "size": 40,
            "at": "l4:two+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 434,
            "w": 46,
            "h": 46,
            "at": "l4:hardest",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 416,
            "size": 58,
            "at": "l4:hardest+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Việc khó → giờ tỉnh nhất",
            "x": 6034,
            "y": 426,
            "size": 40,
            "at": "l4:hardest+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 522,
            "w": 46,
            "h": 46,
            "at": "l5:small",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 504,
            "size": 58,
            "at": "l5:small+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Gom việc nhỏ vào 1–2 khung",
            "x": 6034,
            "y": 514,
            "size": 40,
            "at": "l5:small+200"
          },
          {
            "id": "d-c5",
            "t": "box",
            "x": 5964,
            "y": 610,
            "w": 46,
            "h": 46,
            "at": "l5:empty",
            "stroke": 5
          },
          {
            "id": "d-k5",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 592,
            "size": 58,
            "at": "l5:empty+600",
            "color": "accent"
          },
          {
            "id": "d-l5",
            "t": "text",
            "text": "Chừa khoảng trống",
            "x": 6034,
            "y": 602,
            "size": 40,
            "at": "l5:empty+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, take two: seven fifty. Ten minutes of planning.",
          "sub": "Chặng hai, quay lại: bảy giờ năm mươi. Mười phút lên kế hoạch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Okay. What's already fixed today?",
          "sub": "Rồi. Hôm nay có gì cố định sẵn?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fixed events first: meetings, client visits, picking up kids. Then count the real hours left.",
          "sub": "Lịch cố định trước: họp, hẹn khách, giờ đón con. Rồi đếm số giờ thật còn lại.",
          "keys": [
            "số giờ thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choose two or three main tasks. The hardest one goes where you're most awake.",
          "sub": "Chọn hai ba việc chính. Việc khó nhất vào giờ tỉnh táo nhất.",
          "keys": [
            "giờ tỉnh táo nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Group small jobs into one or two blocks, and leave some empty space.",
          "sub": "Gom việc nhỏ vào một hai khung, và chừa khoảng trống.",
          "keys": [
            "chừa khoảng trống"
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
      "module": "BRK-02",
      "data": {
        "kicker": "Ngày 8 tiếng, 3 cuộc họp",
        "title": "Chỉ còn ba bốn tiếng",
        "hl": "ba bốn tiếng",
        "sub": "Trừ họp, ăn trưa, đi lại"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eight hours, three meetings, lunch. Three or four hours left.",
          "sub": "Tám tiếng, ba cuộc họp, ăn trưa. Còn ba bốn tiếng.",
          "keys": [
            "ba bốn tiếng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plan for eight? Plan to be let down.",
          "sub": "Tính như còn tám tiếng? Hẹn trước thất vọng."
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
            "id": "d-bad",
            "t": "text",
            "text": "“Làm báo cáo”",
            "x": 5964,
            "y": 690,
            "size": 46,
            "at": "l1:report",
            "color": "muted"
          },
          {
            "id": "d-badx",
            "t": "strike",
            "over": "d-bad",
            "at": "l2:open"
          },
          {
            "id": "d-good",
            "t": "text",
            "text": "→ mở file, lọc khu vực",
            "x": 6804,
            "y": 690,
            "size": 44,
            "at": "l2:open",
            "color": "accent",
            "hl": [
              {
                "text": "mở file",
                "at": "l2:open"
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
          "say": "For each main task, write the first step. Not just: do the report.",
          "sub": "Mỗi việc chính, ghi luôn bước đầu. Đừng chỉ ghi “làm báo cáo”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write: open the September sales file, filter by region. You start at once, no half hour lost.",
          "sub": "Hãy ghi: mở file doanh số tháng Chín, lọc theo khu vực. Bắt tay ngay, khỏi mất nửa giờ loay hoay.",
          "keys": [
            "Bắt tay ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Even better: plan at the end of the day before. In the morning, a five minute check before email.",
          "sub": "Tốt hơn nữa: lên kế hoạch cuối ngày hôm trước. Sáng chỉ xem lại năm phút trước khi mở thư.",
          "keys": [
            "cuối ngày hôm trước"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 9:00 · Văn phòng của Dũng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:office"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "face": "neutral",
                  "pose": "stand"
                }
              ],
              "left": {
                "label": "Cách A: từ trên xuống",
                "ok": false
              },
              "right": {
                "label": "Cách B: giữ giờ trước",
                "ok": true
              }
            },
            "at": "l2:Dũng",
            "caption": "Cùng một danh sách",
            "icon": "office-building"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: từ trên xuống",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "a1:top",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ 18:00 dự báo vẫn trắng",
            "x": 7972,
            "y": 250,
            "size": 44,
            "at": "a2:empty",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: 9–11 giờ cho dự báo",
            "x": 7932,
            "y": 340,
            "size": 50,
            "at": "b1:nine",
            "color": "accent"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ việc chính xong trước",
            "x": 7972,
            "y": 420,
            "size": 44,
            "at": "l3:before",
            "hl": [
              {
                "text": "xong trước",
                "at": "l3:before"
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
          "say": "Third stop: nine a.m., same morning, across town in an office.",
          "sub": "Chặng ba: chín giờ, cùng sáng ấy, ở một văn phòng bên kia thành phố."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, Thảo's old classmate. He plans sales, and his list has twenty lines too.",
          "sub": "Đây là Dũng, bạn học cũ của Thảo, làm kế hoạch bán hàng. Danh sách cũng hai mươi dòng.",
          "keys": [
            "hai mươi dòng"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Orders, calls, prices. Top to bottom.",
          "sub": "Duyệt đơn, gọi điện, sửa giá. Từ trên xuống.",
          "phase": "a",
          "pose": "point"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "Six p.m. The forecast is still empty. Work at home tonight.",
          "sub": "Sáu giờ, dự báo vẫn trắng. Tối mang về làm.",
          "phase": "a",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Nine to eleven: the forecast. Small jobs after.",
          "sub": "Chín đến mười một: dự báo. Việc nhỏ để sau.",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same list. In way B, the main task is done before the day gets chopped up.",
          "sub": "Cùng danh sách. Cách B, việc chính xong trước khi ngày bị chia vụn.",
          "keys": [
            "chia vụn"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 10:30 · Khách hỏi gấp",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:call"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "telephone-receiver"
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
            "at": "l1:client",
            "caption": "10:30 · chuông điện thoại",
            "icon": "telephone-receiver"
          },
          {
            "id": "f-kin",
            "t": "text",
            "text": "Lịch kín từng phút",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l3:every minute",
            "color": "muted"
          },
          {
            "id": "f-dom",
            "t": "text",
            "text": "→ 1 cuộc gọi, trễ dây chuyền",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l3:everything",
            "color": "coral",
            "hl": [
              {
                "text": "trễ dây chuyền",
                "at": "l3:later"
              }
            ]
          },
          {
            "id": "f-gap",
            "t": "text",
            "text": "Chỉ xếp phần lớn giờ trống",
            "x": 60,
            "y": 1440,
            "size": 40,
            "at": "l4:most"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "Ngày yên: làm sớm hơn",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l5:calm"
          },
          {
            "id": "f-ok2",
            "t": "text",
            "text": "Ngày biến: kế hoạch còn khung",
            "x": 60,
            "y": 1580,
            "size": 44,
            "at": "l5:busy",
            "hl": [
              {
                "text": "còn khung",
                "at": "l5:shape"
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
          "say": "Fourth stop: ten thirty. An urgent call from a client.",
          "sub": "Chặng bốn: mười giờ rưỡi. Một khách gọi gấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A tax question, right now? Okay, I have a gap after this.",
          "sub": "Hỏi thuế ngay bây giờ á? Được, sau khung này mình còn khoảng trống.",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Workdays rarely go to plan. If every minute is full, one call pushes everything later.",
          "sub": "Ngày làm việc hiếm khi đúng kế hoạch. Lịch kín từng phút thì một cuộc gọi đẩy mọi thứ trễ dây chuyền.",
          "keys": [
            "trễ dây chuyền"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So plan tasks for most of your free hours. Leave the rest empty.",
          "sub": "Vậy chỉ xếp việc cho phần lớn giờ trống, phần còn lại để không.",
          "keys": [
            "để không"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "On a calm day, start the next task early. On a busy day, the plan keeps its shape.",
          "sub": "Ngày yên ổn thì làm việc tiếp sớm hơn. Ngày nhiều biến, kế hoạch vẫn còn khung.",
          "keys": [
            "vẫn còn khung"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Lịch kín, máy hỏng lúc 9 giờ: gạch hết kế hoạch?",
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
          "say": "Full calendar, broken machine at nine. Cross out the whole plan?",
          "sub": "Lịch kín, chín giờ máy hỏng. Gạch hết kế hoạch?",
          "keys": [
            "Gạch hết kế hoạch"
          ]
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-mt",
            "t": "text",
            "text": "Bảo trì: sửa máy 2 tiếng",
            "x": 60,
            "y": 1670,
            "size": 44,
            "at": "l1:two hours",
            "color": "muted"
          },
          {
            "id": "f-keep",
            "t": "text",
            "text": "Giữ kế hoạch, dời việc kế tiếp",
            "x": 60,
            "y": 1740,
            "size": 46,
            "at": "l2:keep",
            "color": "accent",
            "hl": [
              {
                "text": "dời việc kế tiếp",
                "at": "l2:move"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Kín từng phút, vỡ từ phút đầu",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l3:breaks",
            "color": "coral",
            "hl": [
              {
                "text": "vỡ từ phút đầu",
                "at": "l3:first minute"
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
          "say": "A maintenance worker loses two hours fixing it. Now every task looks late.",
          "sub": "Người làm bảo trì mất hai tiếng sửa máy. Nhìn lịch, việc nào cũng đã trễ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The answer: keep the plan. Just move the next task into a free slot, left there from the start.",
          "sub": "Lời giải: giữ kế hoạch, chỉ dời việc kế tiếp sang khoảng trống đã chừa sẵn từ đầu.",
          "keys": [
            "giữ kế hoạch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A plan with no gaps breaks at the first minute.",
          "sub": "Lịch kín từng phút, vỡ từ phút đầu.",
          "keys": [
            "vỡ từ phút đầu"
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
            "text": "⑤ 11:30 · Việc mới chen vào",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:new"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:request",
            "caption": "11:30 · khách nhờ thêm",
            "icon": "envelope"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Làm ngay, hay khoảng trống chiều?",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:now",
            "hl": [
              {
                "text": "khoảng trống chiều",
                "at": "l2:afternoon"
              }
            ]
          },
          {
            "id": "g-back",
            "t": "text",
            "text": "Làm ngay → quay lại khung kế",
            "x": 2028,
            "y": 1340,
            "size": 44,
            "at": "l2:back"
          },
          {
            "id": "g-say",
            "t": "text",
            "text": "“Em nhận rồi, 2 giờ chiều gửi”",
            "x": 2028,
            "y": 1440,
            "size": 46,
            "at": "l3:Got",
            "color": "accent",
            "hl": [
              {
                "text": "2 giờ chiều",
                "at": "l3:two"
              }
            ]
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "→ họ yên tâm, mình giữ thứ tự",
            "x": 2028,
            "y": 1520,
            "size": 42,
            "at": "l4:calm",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: eleven thirty. A new request lands in the middle of the day.",
          "sub": "Chặng năm: mười một giờ rưỡi. Một việc mới rơi vào giữa ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask fast: now, or a free slot this afternoon? If now, do it, then go back to your next block.",
          "sub": "Hỏi nhanh: làm ngay, hay để khoảng trống chiều nay? Cần ngay thì làm, xong quay lại khung kế tiếp.",
          "keys": [
            "khoảng trống chiều nay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Got it. I'll send it to you at two this afternoon.",
          "sub": "Em nhận rồi, hai giờ chiều em gửi anh nhé.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A clear time often keeps people calm. You keep your word, in your own order.",
          "sub": "Một giờ cụ thể thường đủ làm người nhờ yên tâm. Bạn vẫn giữ lời, theo thứ tự của mình.",
          "keys": [
            "theo thứ tự của mình"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s14",
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
            "id": "g-sm",
            "t": "text",
            "text": "Email · ký giấy · gọi ngắn",
            "x": 2028,
            "y": 1630,
            "size": 46,
            "at": "l1:emails"
          },
          {
            "id": "g-bl",
            "t": "text",
            "text": "→ 1 khung trước trưa + 1 giữa chiều",
            "x": 2028,
            "y": 1700,
            "size": 40,
            "at": "l1:lunch",
            "hl": [
              {
                "text": "trước trưa",
                "at": "l1:lunch"
              }
            ]
          },
          {
            "id": "g-one",
            "t": "text",
            "text": "Một lượt > rải rác",
            "x": 2868,
            "y": 1780,
            "size": 50,
            "at": "l2:round",
            "color": "accent",
            "hl": [
              {
                "text": "Một lượt",
                "at": "l2:round"
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
          "say": "Emails, signing papers, short calls? One block before lunch, one in mid afternoon.",
          "sub": "Email, ký giấy tờ, gọi điện ngắn? Gom một khung trước trưa, một khung giữa chiều.",
          "keys": [
            "Gom một khung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One round is much faster than switching all day.",
          "sub": "Làm liền một lượt nhanh hơn nhiều so với rải rác cả ngày.",
          "keys": [
            "một lượt"
          ]
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
            "text": "⑥ 17:30 · Năm phút đóng ngày",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
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
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:close",
            "caption": "17:30 · trước khi gập máy",
            "icon": "memo"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l3:done",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1252,
            "size": 58,
            "at": "l3:done+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đánh dấu việc đã xong",
            "x": 4066,
            "y": 1262,
            "size": 40,
            "at": "l3:done+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1365,
            "w": 46,
            "h": 46,
            "at": "l3:unfinished",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1347,
            "size": 58,
            "at": "l3:unfinished+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Việc dở: hẹn ngày, hoặc bỏ",
            "x": 4066,
            "y": 1357,
            "size": 40,
            "at": "l3:unfinished+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1460,
            "w": 46,
            "h": 46,
            "at": "l4:first",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1442,
            "size": 58,
            "at": "l4:first+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Việc đầu sáng mai + bước đầu",
            "x": 4066,
            "y": 1452,
            "size": 40,
            "at": "l4:first+200"
          },
          {
            "id": "h-rest",
            "t": "text",
            "text": "Đầu “đóng” việc, tối khỏi tự nhắc",
            "x": 3996,
            "y": 1570,
            "size": 44,
            "at": "l5:reminding",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi tự nhắc",
                "at": "l5:reminding"
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
          "say": "Sixth stop: five thirty. Five minutes to close the day.",
          "sub": "Chặng sáu: năm rưỡi chiều. Năm phút đóng ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five minutes, then the laptop sleeps. And so do I.",
          "sub": "Năm phút thôi, rồi máy đi ngủ. Mình cũng thế.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Mark what's done. Unfinished tasks go to a specific day, or get dropped.",
          "sub": "Đánh dấu việc đã xong. Việc dở chuyển sang một ngày cụ thể, hoặc bỏ.",
          "keys": [
            "một ngày cụ thể"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choose tomorrow's first task, and write its first step.",
          "sub": "Chọn việc đầu tiên sáng mai, ghi bước làm đầu tiên.",
          "keys": [
            "việc đầu tiên sáng mai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Unfinished work now has a place, so your mind stops reminding you at night.",
          "sub": "Việc dở đã có chỗ, nên tối bạn đỡ phải tự nhắc, sáng khỏi nửa giờ nhớ lại."
        }
      ],
      "ref": "p18,p19"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "text": "⑦ 20:00 · Nhà Cô Hoa",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:eight"
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
                  "pose": "phone",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
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
                  "shot": "medium",
                  "on": "bin",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "20:00 · sau bữa tối",
            "icon": "house"
          },
          {
            "id": "i-ph",
            "t": "text",
            "text": "Tối mở việc vì sợ quên",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l1:messages",
            "color": "muted"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Tập 5 phút trước giờ về",
            "x": 5964,
            "y": 1360,
            "size": 48,
            "at": "l4:five"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Cất điện thoại, ngủ dễ hơn",
            "x": 5964,
            "y": 1450,
            "size": 48,
            "at": "l6:sleeps",
            "hl": [
              {
                "text": "ngủ dễ hơn",
                "at": "l6:sleeps"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Ghi ra giấy cho đầu được nghỉ",
            "x": 5964,
            "y": 1560,
            "size": 50,
            "at": "l6:paper",
            "color": "accent",
            "hl": [
              {
                "text": "đầu được nghỉ",
                "at": "l6:rest"
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
          "say": "Seventh stop: eight p.m., at Cô Hoa's home. Dũng's manager, mum of two, checking work messages after dinner.",
          "sub": "Chặng bảy: tám giờ tối, nhà Cô Hoa. Trưởng phòng của Dũng, mẹ hai con, ăn cơm xong lại mở tin nhắn công ty.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Which client do I call tomorrow? I'm afraid I'll forget.",
          "sub": "Mai phải gọi khách nào nhỉ? Sợ quên quá.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Mum, are you working again?",
          "sub": "Mẹ lại làm việc nữa ạ?",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So she tries five minutes before leaving work: unfinished tasks, and tomorrow's first task, on paper.",
          "sub": "Rồi cô tập năm phút trước giờ về: ghi việc dở và việc đầu tiên sáng mai ra giấy."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "It's all written down. The phone can wait.",
          "sub": "Ghi hết rồi. Điện thoại cất đi thôi.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now she sleeps more easily. Write it on paper, so your head can rest.",
          "sub": "Giờ cô ngủ dễ hơn. Ghi ra giấy cho đầu được nghỉ.",
          "keys": [
            "Ghi ra giấy cho đầu được nghỉ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p20,p21"
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
            "text": "7:45 sáng thứ Tư",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "hot-beverage"
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
            "at": "l1:same",
            "caption": "7:45 sáng thứ Tư · vẫn bàn ấy",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "3 việc · 3 khung giờ",
            "x": 7932,
            "y": 1260,
            "size": 64,
            "at": "l2:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 khung giờ",
                "at": "l2:slots"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Việc có giờ, ngày có chốn",
            "x": 7932,
            "y": 1380,
            "size": 54,
            "at": "l3:time",
            "hl": [
              {
                "text": "ngày có chốn",
                "at": "l3:place"
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
          "say": "Next morning, Wednesday, seven forty-five. Same desk, same Thảo.",
          "sub": "Sáng hôm sau, thứ Tư, bảy giờ bốn lăm. Vẫn bàn ấy, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Plan's done since yesterday. Three tasks, three slots, and a gap. Coffee time!",
          "sub": "Kế hoạch xong từ chiều qua. Ba việc, ba khung giờ, một khoảng trống. Uống cà phê thôi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Eat in its place, play in its place. Now every task has its time.",
          "sub": "“Ăn có nơi, chơi có chốn.” Giờ việc nào cũng có giờ của nó.",
          "keys": [
            "có giờ của nó"
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
      "ref": "p8,outro"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Vì sao hay bỏ kế hoạch?",
        "wrong": "Ghi bốn mươi việc, xong sáu",
        "right": "Chỉ lên lịch vừa số giờ thật",
        "labels": [
          "Quá tải",
          "Vừa sức"
        ],
        "wrongIllus": "weary-face",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty tasks written, six done.",
          "sub": "Ghi bốn mươi việc, xong sáu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Calendar only what fits. The rest stays listed.",
          "sub": "Chỉ lên lịch việc vừa giờ thật. Còn lại để danh sách."
        }
      ],
      "ref": "p22"
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
          }
        ],
        "items": [
          {
            "id": "j-nb",
            "t": "illus",
            "name": "notebook",
            "x": 7932,
            "y": 1490,
            "size": 90,
            "at": "l1:paper"
          },
          {
            "id": "j-app",
            "t": "text",
            "text": "Giấy hay app: cái mở hằng ngày",
            "x": 8042,
            "y": 1510,
            "size": 44,
            "at": "l1:every day",
            "hl": [
              {
                "text": "mở hằng ngày",
                "at": "l1:every day"
              }
            ]
          },
          {
            "id": "j-mix",
            "t": "text",
            "text": "Lịch điện tử + sổ nhỏ",
            "x": 7932,
            "y": 1600,
            "size": 46,
            "at": "l2:notebook"
          },
          {
            "id": "j-ops",
            "t": "text",
            "text": "Toàn phát sinh? Giữ 1 khung",
            "x": 7932,
            "y": 1690,
            "size": 40,
            "at": "l3:support",
            "color": "coral"
          },
          {
            "id": "j-one",
            "t": "text",
            "text": "Một khung > không khung",
            "x": 7932,
            "y": 1770,
            "size": 50,
            "at": "l4:better",
            "color": "accent",
            "hl": [
              {
                "text": "Một khung",
                "at": "l4:One block"
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
          "say": "Paper or app? Whichever you open every day.",
          "sub": "Giấy hay ứng dụng? Cái nào bạn mở ra hằng ngày.",
          "keys": [
            "mở ra hằng ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many people use a digital calendar for slots, and a small notebook for quick notes.",
          "sub": "Nhiều người dùng lịch điện tử cho khung giờ, sổ nhỏ để ghi nhanh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your job is all surprises, like a support desk or operations? Protect one small block for main work.",
          "sub": "Việc toàn phát sinh, như trực khách hay vận hành? Giữ một khung nhỏ cho việc chính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One block is better than none.",
          "sub": "Có một khung vẫn hơn không có khung nào.",
          "keys": [
            "một khung"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "at": "l1:few",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:gaps",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:close",
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
            "x": 2728,
            "y": 260,
            "at": "l1:few"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1440,
            "at": "l2:gaps"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1270,
            "at": "l3:close"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: pick few tasks, and give them real time on the calendar.",
          "sub": "Tóm lại: chọn ít việc, cho chúng giờ thật trên lịch.",
          "keys": [
            "giờ thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Leave gaps for surprises.",
          "sub": "Chừa khoảng trống cho việc phát sinh.",
          "keys": [
            "Chừa khoảng trống"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And close the day in five minutes. A day plan doesn't make you do more. It tells you what, and when.",
          "sub": "Và năm phút đóng ngày. Kế hoạch ngày không bắt bạn làm nhiều hơn, mà cho biết lúc nào làm gì.",
          "keys": [
            "lúc nào làm gì"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s32",
      "module": "QUIZ-01",
      "ref": "questions[17]",
      "data": {
        "q": "In the maintenance question, what is suggested instead of crossing out the whole plan?",
        "options": [
          "Stay late every evening that week to catch up on each crossed out task",
          "Move the next task into a free slot and continue from there",
          "Make a brand new plan for the whole day starting from zero"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "wrench",
        "why": "Dời việc kế tiếp sang khoảng trống đã chừa sẵn là kế hoạch vẫn dùng được."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the maintenance question, what is suggested instead of crossing out the whole plan?",
          "sub": "Trong câu hỏi về kỹ thuật bảo trì, lời giải gợi ý làm gì thay vì gạch bỏ cả kế hoạch?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Move the next task into a free slot and continue from there.",
          "sub": "Dời việc kế tiếp sang một khoảng trống rồi làm tiếp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Starting over wastes time. A plan with no gaps breaks at the first minute.",
          "sub": "Làm lại từ đầu thì phí thời gian. Lịch kín từng phút, vỡ từ phút đầu."
        }
      ]
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Chiều nay: ghi việc đầu sáng mai",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now try forty questions on planning your day.",
          "sub": "Giờ thử bốn mươi câu về kế hoạch ngày nhé.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
