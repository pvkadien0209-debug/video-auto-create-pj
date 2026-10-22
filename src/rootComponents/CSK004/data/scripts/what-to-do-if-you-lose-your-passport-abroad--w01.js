// Kịch bản video W lần 3 (#110) — "Làm gì khi mất hộ chiếu ở nước ngoài?" · chuỗi "Gặp sự cố ở nước ngoài: làm gì ngay"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); nhân vật hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-to-do-if-you-lose-your-passport-abroad--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "travellers-in-trouble",
    "slug": "what-to-do-if-you-lose-your-passport-abroad",
    "door": "ky-nang",
    "level": "B1",
    "title": "Làm gì khi mất hộ chiếu ở nước ngoài?",
    "series": "Gặp sự cố ở nước ngoài: làm gì ngay"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo BA NGÀY của Dũng (Ngày 3 22:00 phát hiện mất → 22:15 gọi từng nơi → 23:00 “Khoan đã!” đi thẳng lãnh sự → Ngày 4 8:00 đồn công an → 13:00 lãnh sự quán → tối Ngày 4 sắp lại lịch, nhắn nhà → Ngày 5 tin nhắn lạ → sáng Ngày 6 xếp vali thấy hộ chiếu cũ, cùng phòng, khép vòng). Mạch chuỗi: w145/_series/travellers-in-trouble.md (sự cố Ngày 3 của bài tổng). Đổi tên: “bạn” (intro, p1–p4, p10, p25) → Dũng; Khải (p16) → “một người khách” không lên hình (Dũng có ảnh hộ chiếu Thảo gửi bố trước chuyến đi — nối chuỗi first-trip-abroad); “bạn” trong 🔀 p5 → kể chung qua BRK-04; Tú (p23) → “có người đã chuyển cọc” (BRK-10), Dũng nhận tin nhắn, Thảo cản; cán bộ công an → Sam. Cảnh ngắt nhịp: BRK-04 (s06 p5–p6), BRK-07 (s13 rehook bản chụp), BRK-10 (s17 “Giấy tờ thật chỉ có một cửa”). Số liệu chỉ từ bài: ≤ 12 tháng, dùng 1 lần (Luật 49/2019), hai đêm khách sạn, nửa buổi, hai ảnh thẻ, mười phút. Bản cũ (W lần 3): w145/bak/what-to-do-if-you-lose-your-passport-abroad--w01.js.",
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
            "text": "2 đêm",
            "x": 60,
            "y": 110,
            "size": 160,
            "at": "l1:two",
            "color": "accent",
            "hl": [
              {
                "text": "2 đêm",
                "at": "l1:nights"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "+ một chuyến bay lỡ",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l1:missed",
            "color": "coral"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "vì thiếu… một tấm ảnh",
            "x": 70,
            "y": 430,
            "size": 54,
            "at": "l2:photo",
            "hl": [
              {
                "text": "một tấm ảnh",
                "at": "l2:photo"
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
          "say": "Two extra hotel nights and a missed flight.",
          "sub": "Hai đêm khách sạn trả thêm, một chuyến bay lỡ.",
          "keys": [
            "Hai đêm khách sạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The price one traveller paid for a photo he never took.",
          "sub": "Cái giá một người khách trả cho một tấm ảnh chưa từng chụp.",
          "keys": [
            "một tấm ảnh"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l5",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "worried",
                  "pose": "shrug",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "passport-control",
                "backpack"
              ]
            },
            "at": "l1",
            "caption": "Ngày 3 · 22:00 · phòng khách sạn",
            "icon": "passport-control"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Mất hộ chiếu: hết đường về?",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l4:stuck",
            "color": "muted"
          },
          {
            "id": "a-qx",
            "t": "strike",
            "over": "a-q",
            "at": "l5:fixed"
          },
          {
            "id": "a-ok",
            "t": "text",
            "text": "Xử lý được, nếu đúng thứ tự",
            "x": 60,
            "y": 650,
            "size": 50,
            "at": "l5:order",
            "color": "accent",
            "hl": [
              {
                "text": "đúng thứ tự",
                "at": "l5:right order"
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
          "say": "Meet Dũng. Day three of the family trip, ten at night.",
          "sub": "Đây là Dũng. Ngày 3 của chuyến đi, mười giờ tối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My passport! It's not in my bag!",
          "sub": "Hộ chiếu! Không có trong túi!",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "His cousin Thảo, the family list keeper, looks up.",
          "sub": "Chị họ Thảo, người giữ danh sách của cả nhà, ngẩng lên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Am I stuck here forever?",
          "sub": "Em kẹt lại đây luôn à?",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Breathe. A lost passport can be fixed, if you go in the right order.",
          "sub": "Hít một hơi. Mất hộ chiếu xử lý được, nếu đi đúng thứ tự.",
          "keys": [
            "đi đúng thứ tự"
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
            "text": "Làm gì, theo thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:order",
            "hl": [
              {
                "text": "thứ tự nào",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Chạy khắp nơi cùng lúc",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:everywhere",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:chicken"
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 300,
            "w": 370,
            "h": 110,
            "at": "l3:search+0",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2438,
            "y": 300,
            "w": 370,
            "h": 110,
            "at": "l3:search+500",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2848,
            "y": 300,
            "w": 370,
            "h": 110,
            "at": "l3:search+1000",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3258,
            "y": 300,
            "w": 370,
            "h": 110,
            "at": "l3:search+1500",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "1. Tìm lại",
            "x": 2053,
            "y": 325,
            "size": 52,
            "at": "l3:search+150"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "2. Công an",
            "x": 2463,
            "y": 325,
            "size": 52,
            "at": "l3:search+650"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "3. Lãnh sự",
            "x": 2873,
            "y": 325,
            "size": 52,
            "at": "l3:search+1150"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "4. Chuyến bay",
            "x": 3283,
            "y": 325,
            "size": 52,
            "at": "l3:search+1650"
          },
          {
            "id": "b-paper",
            "t": "text",
            "text": "Bước trước tạo giấy cho bước sau",
            "x": 2028,
            "y": 480,
            "size": 48,
            "at": "l4:paper",
            "hl": [
              {
                "text": "tạo giấy",
                "at": "l4:makes"
              }
            ]
          },
          {
            "id": "b-skip",
            "t": "text",
            "text": "Đừng nhảy cóc",
            "x": 2028,
            "y": 570,
            "size": 60,
            "at": "l4:skip",
            "color": "accent",
            "hl": [
              {
                "text": "nhảy cóc",
                "at": "l4:skip"
              }
            ]
          },
          {
            "id": "b-days",
            "t": "text",
            "text": "Tối Ngày 3 → sáng Ngày 6",
            "x": 2028,
            "y": 690,
            "size": 44,
            "at": "l5:follow"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what do you do, and in what order?",
          "sub": "Vậy làm gì, theo thứ tự nào?",
          "keys": [
            "theo thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not running everywhere at once, like a headless chicken.",
          "sub": "Không phải chạy khắp nơi một lúc, như gà mắc tóc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But four steps: search, police, consulate, then your flight.",
          "sub": "Mà là bốn bước: tìm lại, công an, lãnh sự, rồi chuyến bay.",
          "keys": [
            "bốn bước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each step makes the paper for the next. Don't skip.",
          "sub": "Bước trước tạo giấy tờ cho bước sau. Đừng nhảy cóc.",
          "keys": [
            "Đừng nhảy cóc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "We follow Dũng from tonight to the morning of day six.",
          "sub": "Ta theo Dũng từ tối nay tới sáng Ngày 6."
        }
      ],
      "ref": "intro,outro"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
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
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 22:00 · Mười phút đầu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:ten minutes"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "backpack",
                "luggage",
                "memo"
              ]
            },
            "at": "l1:minutes",
            "caption": "Ngày 3 · ngồi xuống đã",
            "icon": "backpack"
          },
          {
            "id": "c-sit",
            "t": "text",
            "text": "Ngồi xuống, lục theo thứ tự",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l3:sit",
            "hl": [
              {
                "text": "theo thứ tự",
                "at": "l3:order"
              }
            ]
          },
          {
            "id": "c-ord",
            "t": "text",
            "text": "túi đeo → ba lô → vali → két → áo",
            "x": 3996,
            "y": 240,
            "size": 36,
            "at": "l3:shoulder bag",
            "color": "muted"
          },
          {
            "id": "c-last",
            "t": "text",
            "text": "Lần cuối cầm ở đâu?",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l5:last time",
            "hl": [
              {
                "text": "Lần cuối",
                "at": "l5:last"
              }
            ]
          },
          {
            "id": "c-list",
            "t": "text",
            "text": "Viết ra giấy, theo giờ",
            "x": 3996,
            "y": 420,
            "size": 50,
            "at": "l6:write",
            "color": "accent",
            "hl": [
              {
                "text": "theo giờ",
                "at": "l6:times"
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
          "say": "Step one, the first ten minutes.",
          "sub": "Bước một, mười phút đầu.",
          "keys": [
            "mười phút đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'll run back to the market!",
          "sub": "Em chạy ra chợ đây!",
          "pose": "point",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sit down first. Shoulder bag, backpack, suitcase, room safe, jacket. In order.",
          "sub": "Ngồi xuống đã. Túi đeo, ba lô, vali, két sắt, áo khoác. Theo thứ tự.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Panic skips the exact pocket where it's hiding.",
          "sub": "Lúc hoảng, ta lướt qua đúng cái ngăn đang giấu nó.",
          "keys": [
            "lướt qua đúng cái ngăn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not there? Recall the last time you held it. Reception, money exchange, tax refund shop, taxi.",
          "sub": "Không có? Nhớ lần cuối cầm: lễ tân, quầy đổi tiền, cửa hàng hoàn thuế, taxi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Write them down, with times. A worried head forgets.",
          "sub": "Viết ra giấy, kèm giờ. Đầu đang rối dễ quên lắm.",
          "pose": "hold"
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
            "id": "c-a1",
            "t": "text",
            "text": "Lễ tân có giữ không?",
            "x": 3996,
            "y": 520,
            "size": 44,
            "at": "l1:reception"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "Gọi nơi vừa ghé",
            "x": 3996,
            "y": 590,
            "size": 44,
            "at": "l1:call"
          },
          {
            "id": "c-a3",
            "t": "text",
            "text": "Xe ứng dụng: lịch sử chuyến",
            "x": 3996,
            "y": 660,
            "size": 44,
            "at": "l2:ride app"
          },
          {
            "id": "c-a4",
            "t": "text",
            "text": "Báo người đi cùng",
            "x": 4816,
            "y": 690,
            "size": 44,
            "at": "l2:travelling",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then ask reception if they kept it at check in, and call the places you visited.",
          "sub": "Rồi hỏi lễ tân có giữ hộ chiếu lúc nhận phòng không, gọi những nơi vừa ghé."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Used a ride app? Open your trip history. And tell everyone travelling with you.",
          "sub": "Đi xe qua ứng dụng? Mở lịch sử chuyến. Và báo ngay người đi cùng."
        }
      ],
      "ref": "p3"
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
            "text": "② 22:15 · Gọi từng nơi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:calls"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone-receiver",
                "memo"
              ]
            },
            "at": "l1:list",
            "caption": "Danh sách trên tay",
            "icon": "telephone-receiver"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "“I think I left my passport",
            "x": 5964,
            "y": 160,
            "size": 40,
            "at": "l2:think"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "here this afternoon.”",
            "x": 5964,
            "y": 220,
            "size": 40,
            "at": "l2:afternoon"
          },
          {
            "id": "d-slow",
            "t": "text",
            "text": "Nói chậm · giờ ghé · màu vỏ",
            "x": 5964,
            "y": 310,
            "size": 44,
            "at": "l3:slowly",
            "color": "accent",
            "hl": [
              {
                "text": "Nói chậm",
                "at": "l3:slowly"
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
          "say": "Step two. Dũng takes the list and calls.",
          "sub": "Bước hai. Dũng cầm danh sách và gọi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I think I left my passport here this afternoon. Could you please check?",
          "sub": "Hình như chiều nay tôi để quên hộ chiếu ở đây. Kiểm tra giúp tôi được không?",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Speak slowly. Say what time you were there, and the colour of the cover.",
          "sub": "Nói chậm. Nêu giờ bạn ở đó và màu vỏ bọc hộ chiếu.",
          "keys": [
            "Nói chậm"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Mười giờ tối, mất hộ chiếu",
        "wrong": "Đăng nhóm du lịch, đọc bình luận đến nửa đêm",
        "right": "Gọi ngay từng nơi vừa ghé",
        "wrongIllus": "mobile-phone",
        "rightIllus": "telephone-receiver"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Post in a travel group, read fifty comments till midnight?",
          "sub": "Đăng nhóm du lịch, đọc mấy chục bình luận đến nửa đêm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Call the places first. Ask online later.",
          "sub": "Gọi nơi vừa ghé trước, hỏi cộng đồng mạng sau.",
          "keys": [
            "Gọi nơi vừa ghé trước"
          ]
        }
      ],
      "ref": "p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "d-shop",
            "t": "text",
            "text": "Có người: cửa hàng giữ từ chiều",
            "x": 5964,
            "y": 420,
            "size": 42,
            "at": "l1:shop",
            "color": "muted"
          },
          {
            "id": "d-one",
            "t": "text",
            "text": "Một cuộc gọi, có câu trả lời",
            "x": 5964,
            "y": 500,
            "size": 48,
            "at": "l2:one call",
            "color": "accent",
            "hl": [
              {
                "text": "Một cuộc gọi",
                "at": "l2:one call"
              }
            ]
          },
          {
            "id": "d-none",
            "t": "text",
            "text": "Dũng: không ai giữ cả",
            "x": 5964,
            "y": 600,
            "size": 50,
            "at": "l3:nobody",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Some travellers learn next morning: the shop had it all afternoon, and stayed open.",
          "sub": "Có người sáng hôm sau mới biết: cửa hàng giữ từ chiều, tối vẫn mở cửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Often, one call is enough.",
          "sub": "Nhiều khi, chỉ một cuộc gọi là có câu trả lời.",
          "keys": [
            "một cuộc gọi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dũng is less lucky. Nobody has it.",
          "sub": "Dũng kém may hơn. Không ai giữ cả."
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Ngày 3 · 23:00",
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
        "verdict": {
          "ok": false,
          "label": "Đến thẳng lãnh sự quán, chưa có biên bản",
          "why": "Đến tay không, dễ bị hướng dẫn quay lại đồn, xếp hàng nửa buổi.",
          "rule": "Biên bản đi trước, lãnh sự theo sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Nobody has it. It just fell somewhere. Tomorrow, straight to the consulate!",
          "sub": "Không ai giữ. Chắc rơi đâu đó thôi. Mai đi thẳng lên lãnh sự!",
          "face": "worried",
          "pose": "point",
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
          "say": "Empty handed, you may be sent back to the station. Half a day queuing, back as they close.",
          "sub": "Đến tay không, dễ bị bảo quay lại đồn, xếp hàng nửa buổi, trở lại khi sắp hết giờ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Police first. Which station covers this area? I'll ask reception.",
          "sub": "Công an trước. Đồn nào phụ trách khu này? Em hỏi lễ tân.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right order, and each place only once.",
          "sub": "Đi đúng thứ tự thì mỗi nơi chỉ đến một lần.",
          "phase": "redo"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 23:00 · Có cần báo công an?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:police"
          },
          {
            "id": "e-myth",
            "t": "text",
            "text": "“Chỉ đánh rơi thôi mà”",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l1:still",
            "color": "muted"
          },
          {
            "id": "e-mx",
            "t": "strike",
            "over": "e-myth",
            "at": "l1:yes"
          },
          {
            "id": "e-1st",
            "t": "text",
            "text": "Biên bản = giấy đầu tiên",
            "x": 7932,
            "y": 270,
            "size": 56,
            "at": "l2:first paper",
            "color": "accent",
            "hl": [
              {
                "text": "giấy đầu tiên",
                "at": "l2:first paper"
              }
            ]
          },
          {
            "id": "e-who",
            "t": "text",
            "text": "lãnh sự · bảo hiểm đều hỏi",
            "x": 7932,
            "y": 360,
            "size": 46,
            "at": "l2:insurer"
          },
          {
            "id": "e-slow",
            "t": "text",
            "text": "Thiếu nó: mọi bước chậm lại",
            "x": 7932,
            "y": 450,
            "size": 46,
            "at": "l3:slows",
            "color": "coral"
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Biên bản trước, lãnh sự sau",
            "x": 8772,
            "y": 280,
            "size": 56,
            "at": "l4:report first",
            "color": "accent",
            "hl": [
              {
                "text": "lãnh sự sau",
                "at": "l4:consulate second"
              }
            ]
          },
          {
            "id": "e-box",
            "t": "box",
            "x": 8742,
            "y": 250,
            "w": 820,
            "h": 120,
            "at": "l4:report first+400",
            "color": "accent",
            "stroke": 5
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Only dropped it? Do you still need the police? Yes.",
          "sub": "Chỉ đánh rơi thôi, có cần báo công an không? Có.",
          "keys": [
            "Có"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The police report is usually the first paper the embassy and your insurer ask for.",
          "sub": "Biên bản công an thường là giấy đầu tiên cơ quan đại diện và bảo hiểm cần.",
          "keys": [
            "giấy đầu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Without it, every next step slows down.",
          "sub": "Thiếu nó, các bước sau dễ bị chậm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Report first, consulate second.",
          "sub": "Biên bản đi trước, lãnh sự theo sau.",
          "keys": [
            "Biên bản đi trước"
          ]
        }
      ],
      "ref": "p7,p10,p11"
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
          },
          {
            "at": "l6",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Ngày 4 · 8:00 · Đồn công an",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:station"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "police-officer",
                "page-facing-up"
              ]
            },
            "at": "l1:station",
            "caption": "Ngày 4 · đồn công an khu chợ",
            "icon": "police-officer"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ở đâu · mấy giờ · mất gì",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:brief",
            "hl": [
              {
                "text": "mất gì",
                "at": "l2:lost"
              }
            ]
          },
          {
            "id": "f-ck1",
            "t": "text",
            "text": "Bản sao hoặc số hồ sơ",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l5:copy"
          },
          {
            "id": "f-ck2",
            "t": "text",
            "text": "Tên, số hộ chiếu đúng chưa?",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l5:name"
          },
          {
            "id": "f-ck3",
            "t": "text",
            "text": "Chụp ảnh → email mình",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l5:photograph",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day four, eight a.m. The station that covers the market area.",
          "sub": "Ngày 4, tám giờ sáng. Đồn công an phụ trách khu chợ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Sam, the officer on duty. Keep it brief: where, what time, what was lost.",
          "sub": "Đây là Sam, cán bộ trực. Kể ngắn: ở đâu, mấy giờ, mất gì.",
          "keys": [
            "Kể ngắn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I lost my passport near the night market this evening. I need a police report.",
          "sub": "Tôi mất hộ chiếu gần chợ đêm tối qua. Tôi cần biên bản trình báo.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Here is your report.",
          "sub": "Biên bản của anh đây.",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Get a copy or a case number. Check your name and passport number. Photograph it to your email.",
          "sub": "Xin bản sao hoặc số hồ sơ. Kiểm tra họ tên, số hộ chiếu. Chụp ảnh, gửi vào email mình."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Could you read me the main lines, please?",
          "sub": "Chị đọc giúp tôi mấy dòng chính được không?",
          "pose": "think"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p8,p9"
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
            "text": "⑤ Ngày 4 · 13:00 · Lãnh sự quán",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:one"
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
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "classical-building",
                "identification-card"
              ]
            },
            "at": "l1:consulate",
            "caption": "Ngày 4 · Tổng lãnh sự quán",
            "icon": "classical-building"
          },
          {
            "id": "g-num",
            "t": "text",
            "text": "Số: trang Bộ Ngoại giao",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l2:website",
            "hl": [
              {
                "text": "Bộ Ngoại giao",
                "at": "l2:foreign"
              }
            ]
          },
          {
            "id": "g-str",
            "t": "text",
            "text": "Số người lạ gửi",
            "x": 2028,
            "y": 1330,
            "size": 46,
            "at": "l2:stranger",
            "color": "muted"
          },
          {
            "id": "g-strx",
            "t": "strike",
            "over": "g-str",
            "at": "l2:never+400"
          },
          {
            "id": "g-call",
            "t": "text",
            "text": "Gọi trước: giờ, giấy cần mang",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l3:hours",
            "color": "accent",
            "hl": [
              {
                "text": "Gọi trước",
                "at": "l3:called"
              }
            ]
          },
          {
            "id": "g-b1",
            "t": "text",
            "text": "Biên bản · bản chụp hộ chiếu",
            "x": 2028,
            "y": 1510,
            "size": 42,
            "at": "l4:report"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "Ảnh thẻ · căn cước · vé về",
            "x": 2028,
            "y": 1580,
            "size": 42,
            "at": "l4:photos"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day four, one p.m. Next door: the Vietnamese consulate.",
          "sub": "Ngày 4, một giờ chiều. Cửa tiếp theo: Tổng lãnh sự quán Việt Nam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Find the number on the Foreign Ministry website. Never one a stranger sends.",
          "sub": "Số điện thoại tìm trên trang Bộ Ngoại giao, không dùng số người lạ gửi.",
          "keys": [
            "Bộ Ngoại giao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I called first: opening hours, and what to bring. It depends on the case.",
          "sub": "Chị gọi trước rồi: giờ làm việc, giấy cần mang. Tuỳ từng trường hợp.",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bring the police report, a passport copy, photos, your citizen card, and your ticket home.",
          "sub": "Mang biên bản, bản chụp hộ chiếu cũ, ảnh thẻ, căn cước, vé hoặc lịch trình về nước."
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "g-rg",
              "g-rg2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-rg",
            "t": "text",
            "text": "Hộ chiếu rút gọn:",
            "x": 2028,
            "y": 1650,
            "size": 46,
            "at": "l1:short procedure",
            "hl": [
              {
                "text": "rút gọn",
                "at": "l1:short procedure"
              }
            ]
          },
          {
            "id": "g-rg2",
            "t": "text",
            "text": "≤ 12 tháng · dùng 1 lần",
            "x": 2028,
            "y": 1715,
            "size": 46,
            "at": "l1:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "1 lần",
                "at": "l1:once"
              }
            ]
          },
          {
            "id": "g-long",
            "t": "text",
            "text": "Hỏi: mất bao lâu?",
            "x": 2028,
            "y": 1780,
            "size": 46,
            "at": "l2:how long",
            "hl": [
              {
                "text": "bao lâu",
                "at": "l2:how long"
              }
            ]
          },
          {
            "id": "g-imm",
            "t": "text",
            "text": "Cần qua xuất nhập cảnh?",
            "x": 2848,
            "y": 1780,
            "size": 44,
            "at": "l3:immigration",
            "color": "coral"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Luật Xuất cảnh, nhập cảnh 49/2019/QH14, Điều 17–18",
            "x": 2848,
            "y": 1838,
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
          "say": "Usually a passport by short procedure: twelve months at most, no extension, used once. Or a new one.",
          "sub": "Thường được cấp hộ chiếu rút gọn: hạn không quá 12 tháng, không gia hạn, dùng một lần. Hoặc hộ chiếu mới.",
          "keys": [
            "dùng một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask how long it takes, so you know whether to change your flight.",
          "sub": "Hỏi mất bao lâu, để biết có cần đổi chuyến bay không.",
          "keys": [
            "mất bao lâu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "New papers may lack your entry stamp. Ask now: must I see local immigration before the airport?",
          "sub": "Giấy mới có thể thiếu dấu nhập cảnh. Hỏi ngay: có phải qua xuất nhập cảnh nước sở tại trước khi ra sân bay?"
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Không có bản chụp hộ chiếu thì sao?",
        "illus": "camera-with-flash"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "What if you have no copy at all?",
          "sub": "Nếu không có bản chụp nào thì sao?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p16"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Ngày 4 · tối · Một tấm ảnh",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:photo"
          },
          {
            "id": "h-s0",
            "t": "text",
            "text": "Không bản chụp",
            "x": 3996,
            "y": 1270,
            "size": 44,
            "at": "l1:copy",
            "color": "ink"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "Xác minh lâu",
            "x": 4416,
            "y": 1270,
            "size": 44,
            "at": "l2:longer",
            "color": "ink"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "Nhà gửi căn cước",
            "x": 4836,
            "y": 1270,
            "size": 44,
            "at": "l3:family",
            "color": "ink"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "Lỡ chuyến, +2 đêm",
            "x": 5256,
            "y": 1270,
            "size": 44,
            "at": "l4:missed",
            "color": "coral"
          },
          {
            "id": "h-a0",
            "t": "arrow",
            "from": [
              4266,
              1300
            ],
            "to": [
              4346,
              1300
            ],
            "at": "l2:longer"
          },
          {
            "id": "h-a1",
            "t": "arrow",
            "from": [
              4686,
              1300
            ],
            "to": [
              4766,
              1300
            ],
            "at": "l3:family"
          },
          {
            "id": "h-a2",
            "t": "arrow",
            "from": [
              5106,
              1300
            ],
            "to": [
              5186,
              1300
            ],
            "at": "l4:missed"
          },
          {
            "id": "h-dung",
            "t": "text",
            "text": "Dũng: ảnh đã gửi nhà từ trước",
            "x": 3996,
            "y": 1390,
            "size": 48,
            "at": "l5:dad",
            "color": "accent",
            "hl": [
              {
                "text": "gửi nhà từ trước",
                "at": "l5:before"
              }
            ]
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Một tấm ảnh chụp trước,",
            "x": 3996,
            "y": 1490,
            "size": 56,
            "at": "l6:photo",
            "hl": [
              {
                "text": "chụp trước",
                "at": "l6:taken before"
              }
            ]
          },
          {
            "id": "h-rule2",
            "t": "text",
            "text": "đỡ mấy ngày chạy sau",
            "x": 3996,
            "y": 1570,
            "size": 56,
            "at": "l6:running",
            "color": "accent",
            "hl": [
              {
                "text": "mấy ngày chạy sau",
                "at": "l6:days"
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
          "say": "Back to that traveller with no photo, no copy, just a vague memory of the number.",
          "sub": "Quay lại người khách không ảnh, không bản chụp, chỉ nhớ mang máng số hộ chiếu.",
          "keys": [
            "không bản chụp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Checking who he was took longer.",
          "sub": "Xác minh nhân thân mất thêm thời gian."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "His family had to find and email a copy of his citizen card.",
          "sub": "Gia đình phải tìm và gửi bản chụp căn cước qua email."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "He missed his flight and paid two extra hotel nights.",
          "sub": "Anh lỡ chuyến bay, trả thêm hai đêm khách sạn.",
          "keys": [
            "hai đêm khách sạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng? Before the trip, Thảo sent everyone's passport photos to Dad at home.",
          "sub": "Còn Dũng? Trước chuyến đi, Thảo đã gửi ảnh hộ chiếu cả nhà cho bố ở nhà."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One photo taken before saves days of running later.",
          "sub": "Một tấm ảnh chụp trước, đỡ mấy ngày chạy sau.",
          "keys": [
            "Một tấm ảnh chụp trước"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s15",
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
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4936,
            "y": 1380,
            "w": 680,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "airplane",
                "hotel"
              ]
            },
            "at": "l1:airline",
            "caption": "Ngày 4 · tối · sắp lại lịch",
            "icon": "airplane"
          },
          {
            "id": "h-f",
            "t": "text",
            "text": "Gọi hãng bay: phí đổi ngày",
            "x": 3996,
            "y": 1660,
            "size": 44,
            "at": "l1:airline",
            "hl": [
              {
                "text": "phí đổi ngày",
                "at": "l1:changing"
              }
            ]
          },
          {
            "id": "h-nb",
            "t": "text",
            "text": "Vé có, giấy không → không bay",
            "x": 3996,
            "y": 1730,
            "size": 40,
            "at": "l2:board",
            "color": "coral"
          },
          {
            "id": "h-ks",
            "t": "text",
            "text": "Báo khách sạn, công ty, bảo hiểm",
            "x": 3996,
            "y": 1790,
            "size": 40,
            "at": "l3:hotel"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Once you know how long, call the airline about changing the date. Don't wait.",
          "sub": "Biết thời gian làm giấy, gọi hãng bay hỏi phí đổi ngày, đừng đợi.",
          "keys": [
            "phí đổi ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A ticket without a valid document won't get you on board.",
          "sub": "Có vé mà không có giấy tờ hợp lệ thì không lên được máy bay."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tell the hotel, your company on a work trip, and your insurer. Keep every receipt.",
          "sub": "Báo khách sạn, báo công ty nếu đi công tác, gọi bảo hiểm. Giữ mọi hoá đơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I lost my passport. I've told the police. Tomorrow I'll go to the consulate. I'm fine.",
          "sub": "Con mất hộ chiếu, đã báo công an, mai con lên lãnh sự quán. Con vẫn ổn, có gì con gọi.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One short message home: what's done, what's next. Family worry less.",
          "sub": "Một tin ngắn về nhà: đã làm gì, làm gì tiếp. Người nhà bớt lo.",
          "keys": [
            "Người nhà bớt lo"
          ]
        }
      ],
      "ref": "p18,p19,p20"
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
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Ngày 5 · Tin nhắn lạ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:posted"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "stop"
                }
              ],
              "props": [
                "mobile-phone",
                "money-with-wings"
              ]
            },
            "at": "l1:message",
            "caption": "Ngày 5 · chờ giấy",
            "icon": "mobile-phone"
          },
          {
            "id": "i-msg",
            "t": "text",
            "text": "“Làm giấy về nước trong 1 ngày,",
            "x": 5964,
            "y": 1250,
            "size": 40,
            "at": "l2:one day"
          },
          {
            "id": "i-msg2",
            "t": "text",
            "text": "chuyển cọc trước nhé”",
            "x": 5964,
            "y": 1310,
            "size": 40,
            "at": "l2:deposit",
            "color": "coral"
          },
          {
            "id": "i-x1",
            "t": "text",
            "text": "“Làm giấy nhanh”",
            "x": 5964,
            "y": 1410,
            "size": 46,
            "at": "l4:fast",
            "color": "muted"
          },
          {
            "id": "i-x2",
            "t": "text",
            "text": "“Có quen trong lãnh sự”",
            "x": 5964,
            "y": 1480,
            "size": 46,
            "at": "l4:inside",
            "color": "muted"
          },
          {
            "id": "i-x3",
            "t": "text",
            "text": "“Chuyển tiền giữ suất”",
            "x": 5964,
            "y": 1550,
            "size": 46,
            "at": "l4:place",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day five. Dũng posted for help online. A private message pops up.",
          "sub": "Ngày 5. Dũng lên mạng xin giúp. Một tin nhắn riêng hiện ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Papers home in one day? Send a deposit first? Tempting!",
          "sub": "Làm giấy về nước trong một ngày? Chuyển cọc trước? Hấp dẫn ghê!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Panicked people are easy targets.",
          "sub": "Người đang hoảng là mục tiêu dễ.",
          "keys": [
            "mục tiêu dễ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Watch for fast papers, a friend inside the consulate, money first to keep your place.",
          "sub": "Cảnh giác: “làm giấy nhanh”, “có quen trong lãnh sự”, “chuyển tiền trước giữ suất”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Don't. Papers come only from the consulate.",
          "sub": "Đừng em. Giấy tờ chỉ làm ở lãnh sự thôi.",
          "pose": "stop",
          "face": "stern"
        }
      ],
      "ref": "p21,p23"
    },
    {
      "id": "s17",
      "module": "BRK-10",
      "data": {
        "quote": "Giấy tờ thật chỉ có một cửa: cơ quan chính thức",
        "mark": "một cửa",
        "by": "Rút ra",
        "illus": "classical-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One traveller paid. Blocked.",
          "sub": "Có người đã chuyển cọc. Bị chặn ngay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Real papers have one door: the official one.",
          "sub": "Giấy tờ thật chỉ có một cửa: cơ quan chính thức.",
          "keys": [
            "một cửa"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s18",
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
            "id": "i-x1s",
            "t": "strike",
            "over": "i-x1",
            "at": "l1:illegal"
          },
          {
            "id": "i-x2s",
            "t": "strike",
            "over": "i-x2",
            "at": "l1:illegal+300"
          },
          {
            "id": "i-x3s",
            "t": "strike",
            "over": "i-x3",
            "at": "l1:illegal+600"
          },
          {
            "id": "i-law",
            "t": "text",
            "text": "Giấy không chính thức = phạm pháp",
            "x": 5964,
            "y": 1670,
            "size": 44,
            "at": "l1:illegal",
            "color": "coral",
            "hl": [
              {
                "text": "phạm pháp",
                "at": "l1:illegal"
              }
            ]
          },
          {
            "id": "i-wait",
            "t": "text",
            "text": "Chờ vài ngày vẫn hơn",
            "x": 5964,
            "y": 1760,
            "size": 52,
            "at": "l2:wait",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn hơn",
                "at": "l2:better"
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
          "say": "Buying or using unofficial papers is illegal. You could be stopped at the airport.",
          "sub": "Mua hay dùng giấy tờ không chính thức là phạm pháp, có thể bị giữ ở sân bay.",
          "keys": [
            "phạm pháp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A few days' wait is far better.",
          "sub": "Chờ thêm vài ngày vẫn hơn nhiều."
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
            "text": "Sáng Ngày 6 · Xếp vali",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:room"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "passport-control",
                "luggage"
              ]
            },
            "at": "l1:packs",
            "caption": "Ngày 6 · cùng căn phòng ấy",
            "icon": "luggage"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "Hộ chiếu cũ: đã báo mất",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l3:reported",
            "color": "coral"
          },
          {
            "id": "j-void",
            "t": "text",
            "text": "→ bị huỷ giá trị",
            "x": 7932,
            "y": 1340,
            "size": 50,
            "at": "l3:cancelled",
            "hl": [
              {
                "text": "huỷ giá trị",
                "at": "l3:cancelled"
              }
            ]
          },
          {
            "id": "j-dont",
            "t": "text",
            "text": "Không tự dùng lại",
            "x": 7932,
            "y": 1430,
            "size": 52,
            "at": "l4:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "Không tự dùng",
                "at": "l4:yourself"
              }
            ]
          },
          {
            "id": "j-tell",
            "t": "text",
            "text": "Báo cơ quan đại diện",
            "x": 7932,
            "y": 1510,
            "size": 46,
            "at": "l4:embassy"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day six, morning. Same room. Dũng packs his suitcase, and...",
          "sub": "Sáng Ngày 6. Vẫn căn phòng ấy. Dũng xếp vali, và…"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The old passport! In the jacket lining! I can use it again!",
          "sub": "Hộ chiếu cũ! Kẹt trong lót áo khoác! Dùng lại được rồi!",
          "face": "surprised",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. A passport reported lost is cancelled. Only some cases allow it back, by law.",
          "sub": "Không. Hộ chiếu đã khai báo mất bị huỷ giá trị; chỉ vài trường hợp luật định mới xét khôi phục.",
          "keys": [
            "huỷ giá trị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't use it yourself. Tell the embassy and follow their steps.",
          "sub": "Đừng tự dùng lại. Báo cơ quan đại diện, làm theo hướng dẫn."
        }
      ],
      "ref": "p25"
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
          }
        ],
        "items": [
          {
            "id": "j-n1",
            "t": "text",
            "text": "Chụp trang thông tin + in bản",
            "x": 7932,
            "y": 1610,
            "size": 42,
            "at": "l1:photograph"
          },
          {
            "id": "j-n2",
            "t": "text",
            "text": "Hai ảnh thẻ dự phòng",
            "x": 7932,
            "y": 1675,
            "size": 42,
            "at": "l2:spare"
          },
          {
            "id": "j-n3",
            "t": "text",
            "text": "Số lãnh sự: máy + giấy",
            "x": 7932,
            "y": 1740,
            "size": 42,
            "at": "l2:number"
          },
          {
            "id": "j-n4",
            "t": "text",
            "text": "Không cần mang: két phòng",
            "x": 7932,
            "y": 1805,
            "size": 42,
            "at": "l3:safe",
            "color": "accent",
            "hl": [
              {
                "text": "két phòng",
                "at": "l3:safe"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Next trip: photograph the info page, email it, and print a copy for another bag.",
          "sub": "Chuyến sau: chụp trang thông tin, lưu email, in một bản cất túi khác.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Two spare passport photos. The consulate number in your phone and on paper.",
          "sub": "Hai ảnh thẻ dự phòng. Số lãnh sự lưu trong máy và ra giấy.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not needed today? Leave it in the room safe.",
          "sub": "Ngày không cần mang thì cất trong két phòng."
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s21",
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
            "at": "l1:call",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:report",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:photo",
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
            "x": 6664,
            "y": 500,
            "at": "l1:call"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9572,
            "y": 250,
            "at": "l2:report"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4636,
            "y": 1490,
            "at": "l3:photo"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định, thủ tục có thể thay đổi, hỏi cơ quan đại diện.",
            "x": 8752,
            "y": 1830,
            "size": 24,
            "at": "l3:end",
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
          "say": "So: call the places first, ask online later.",
          "sub": "Tóm lại: gọi nơi vừa ghé trước, hỏi cộng đồng mạng sau.",
          "keys": [
            "gọi nơi vừa ghé trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Police report first, consulate second.",
          "sub": "Biên bản đi trước, lãnh sự theo sau.",
          "keys": [
            "Biên bản đi trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And one photo taken before saves days later.",
          "sub": "Và một tấm ảnh chụp trước, đỡ mấy ngày chạy sau.",
          "keys": [
            "một tấm ảnh chụp trước"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "What is the difference between travelling with and without a passport copy?",
        "options": [
          "With a copy, the embassy can check who you are much faster",
          "Without a copy is better, because copies make your bag heavier to carry",
          "There is no real difference, since embassies never look at copies"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "camera-with-flash",
        "why": "Không có bản chụp, xác minh lâu hơn, như người khách lỡ chuyến."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the difference between travelling with and without a passport copy?",
          "sub": "Đi du lịch có và không có bản chụp hộ chiếu khác nhau thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "With a copy, the embassy can check who you are much faster.",
          "sub": "Có bản chụp, cơ quan đại diện xác minh bạn nhanh hơn nhiều."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Without one, it takes longer, like that traveller who missed his flight.",
          "sub": "Không có, xác minh lâu hơn, như người khách lỡ chuyến kia."
        }
      ]
    },
    {
      "id": "s23",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Chưa báo công an? Đi trong hôm nay",
        "sub": "Rồi làm 40 câu hỏi bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Not reported yet? Ask reception for the nearest station, and go today. Next: a lost wallet.",
          "sub": "Chưa báo công an? Hỏi lễ tân đồn gần nhất, đi trong hôm nay. Bài sau: mất ví.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
