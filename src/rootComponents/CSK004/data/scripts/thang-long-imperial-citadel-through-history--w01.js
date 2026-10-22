// Kịch bản video W lần 3 (#110) — "Hoàng thành Thăng Long qua các thời kỳ" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "thang-long-imperial-citadel-through-history--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "heritage-travellers",
    "slug": "thang-long-imperial-citadel-through-history",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hoàng thành Thăng Long qua các thời kỳ",
    "series": "Di sản và du lịch Việt Nam"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT SÁNG CHỦ NHẬT Thảo dẫn người đi Hoàng thành (7:30 ở nhà → 8:00 cổng → 8:30 Đoan Môn → 9:00 Kính Thiên → 9:40 Hậu Lâu, Bắc Môn → 10:15 hố 18 Hoàng Diệu → “Khoan đã!” → 11:00 Nhà D67 → Chủ nhật sau 7:30). Nhân vật (w145/_series/heritage-travellers.md): Thảo (dẫn), Dũng (em họ, mong xem cung điện, muốn đi ngược từ hầm), Sam (đồng nghiệp nước ngoài, hỏi tên Thăng Long, nhìn hố khảo cổ), bà Tư (bà nội, còn bé thời chống Mỹ; chỉ kể ký ức chung: còi báo động, chạy xuống hầm). Cảnh ngắt nhịp: BRK-08 (các lớp), BRK-07 (rehook trước thời Nguyễn), BRK-03 (1967 → tên D67). Số liệu chỉ từ bài: gần 13 thế kỷ, 2010, trước TK X, 1010, 1428, 1831, 1967. Khép vòng: ca dao “Thăng Long Hà Nội đô thành…” → “Nghìn năm văn vật bây giờ là đây”. Bỏ câu đố giữa bài của bản cũ (s16) để giữ một câu đố cuối. Bản cũ: w145/bak/thang-long-imperial-citadel-through-history--w01.js.",
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
            "text": "~13",
            "x": 70,
            "y": 50,
            "size": 220,
            "at": "l1:thirteen",
            "color": "accent",
            "hl": [
              {
                "text": "~13",
                "at": "l1:centuries"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "thế kỷ, một khu đất",
            "x": 420,
            "y": 140,
            "size": 60,
            "at": "l1:centuries"
          },
          {
            "id": "a-pal",
            "t": "text",
            "text": "Ta tưởng: vào xem cung điện?",
            "x": 70,
            "y": 380,
            "size": 52,
            "at": "l2:palaces",
            "color": "muted"
          },
          {
            "id": "a-palx",
            "t": "strike",
            "over": "a-pal",
            "at": "l2:gone"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: UNESCO, Hoàng thành Thăng Long",
            "x": 60,
            "y": 720,
            "size": 28,
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
          "say": "Almost thirteen centuries of power, on one single piece of land in Hanoi.",
          "sub": "Gần mười ba thế kỷ quyền lực, trên cùng một khu đất ở Hà Nội.",
          "keys": [
            "Gần mười ba thế kỷ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And people still walk in looking for palaces. Spoiler: most palaces are gone.",
          "sub": "Vậy mà người ta vẫn vào tìm cung điện. Nói trước: phần lớn cung điện đã không còn.",
          "keys": [
            "phần lớn cung điện đã không còn"
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
            "y": 110,
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
                  "at": "l2"
                }
              ],
              "props": [
                "japanese-castle",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "7:30 sáng Chủ nhật · ở nhà",
            "icon": "japanese-castle"
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "Dũng: “cung điện như Huế!”",
            "x": 900,
            "y": 690,
            "size": 36,
            "at": "l3:Hue",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Thăng Long Hà Nội đô thành,",
            "x": 60,
            "y": 480,
            "size": 48,
            "at": "l4:Thang",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "Nước non ai vẽ nên tranh”",
            "x": 90,
            "y": 555,
            "size": 48,
            "at": "l4:painted",
            "color": "accent",
            "hl": [
              {
                "text": "ai vẽ nên tranh",
                "at": "l4:painted"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Tranh ở đâu? Dưới đất!",
            "x": 90,
            "y": 650,
            "size": 46,
            "at": "l5:underground",
            "color": "coral",
            "hl": [
              {
                "text": "Dưới đất!",
                "at": "l5:underground"
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
          "say": "Meet Thảo. Every Sunday she takes someone sightseeing, with a plan, of course.",
          "sub": "Đây là Thảo. Chủ nhật nào cũng dẫn ai đó đi chơi, tất nhiên là có kế hoạch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Today it's Dũng, her student cousin, speed level: motorbike.",
          "sub": "Hôm nay là Dũng, em họ Thảo, sinh viên, tốc độ: xe máy.",
          "keys": [
            "em họ Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The citadel? Great! We'll see the king's palaces, like in Hue!",
          "sub": "Hoàng thành à? Hay! Sẽ được xem cung điện vua như ở Huế!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An old folk verse says: Thang Long, royal city; who painted these hills and waters?",
          "sub": "Ca dao: “Thăng Long Hà Nội đô thành, nước non ai vẽ nên tranh họa đồ.”",
          "keys": [
            "ai vẽ nên tranh họa đồ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today, the painting is mostly underground. Dũng doesn't know yet.",
          "sub": "Hôm nay, bức tranh ấy phần lớn nằm dưới đất. Dũng chưa biết.",
          "keys": [
            "nằm dưới đất"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
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
            "text": "Không cung điện, sao là di sản?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:heritage",
            "hl": [
              {
                "text": "sao là di sản?",
                "at": "l1:heritage+200"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tìm cung điện",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l3:palace",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:time"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: tìm các lớp thời gian",
            "x": 2028,
            "y": 260,
            "size": 52,
            "at": "l3:layers",
            "color": "accent",
            "hl": [
              {
                "text": "các lớp thời gian",
                "at": "l3:layers"
              }
            ]
          },
          {
            "id": "b-gone",
            "t": "text",
            "text": "Nhà Nguyễn vào Huế → cung điện dỡ",
            "x": 2028,
            "y": 370,
            "size": 42,
            "at": "l2:Hue"
          },
          {
            "id": "b-left",
            "t": "text",
            "text": "Còn: cổng, nền, bậc rồng, móng",
            "x": 2028,
            "y": 440,
            "size": 42,
            "at": "l2:steps",
            "hl": [
              {
                "text": "bậc rồng",
                "at": "l2:dragon"
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
          "say": "So, no palaces. Why is it still World Heritage?",
          "sub": "Vậy không còn cung điện, sao vẫn là di sản thế giới?",
          "keys": [
            "sao vẫn là di sản thế giới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most palaces were taken down after the Nguyen moved the capital to Hue. What's left: gates, foundations, stone dragon steps.",
          "sub": "Nhiều cung điện bị dỡ khi nhà Nguyễn đóng đô ở Huế. Còn lại: cổng thành, nền điện, bậc rồng đá.",
          "keys": [
            "bậc rồng đá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So don't look for a palace. Look for layers of time.",
          "sub": "Vậy đừng tìm cung điện, hãy tìm các lớp thời gian.",
          "keys": [
            "các lớp thời gian"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "id": "b-un",
            "t": "text",
            "text": "UNESCO 2010 · nghìn năm Thăng Long",
            "x": 2908,
            "y": 165,
            "size": 40,
            "at": "l1:twenty",
            "hl": [
              {
                "text": "2010",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "b-vm",
            "t": "text",
            "text": "Văn Miếu: di tích riêng",
            "x": 2908,
            "y": 230,
            "size": 40,
            "at": "l2:Temple",
            "color": "coral",
            "hl": [
              {
                "text": "di tích riêng",
                "at": "l2:separate"
              }
            ]
          },
          {
            "id": "b-st",
            "t": "text",
            "text": "Chồng lớp = điều đặc biệt",
            "x": 2908,
            "y": 330,
            "size": 48,
            "at": "l1:layering",
            "color": "accent",
            "hl": [
              {
                "text": "Chồng lớp",
                "at": "l1:treasure"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 290,
            "h": 100,
            "at": "l3:stops+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 600,
            "w": 290,
            "h": 100,
            "at": "l3:stops+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 600,
            "w": 290,
            "h": 100,
            "at": "l3:stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 600,
            "w": 290,
            "h": 100,
            "at": "l3:stops+1200",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 600,
            "w": 290,
            "h": 100,
            "at": "l3:stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Đoan Môn",
            "x": 2058,
            "y": 618,
            "size": 46,
            "at": "l3:stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Kính Thiên",
            "x": 2388,
            "y": 618,
            "size": 46,
            "at": "l3:stops+720"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Hậu Lâu",
            "x": 2718,
            "y": 618,
            "size": 46,
            "at": "l3:stops+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "18 HD",
            "x": 3048,
            "y": 618,
            "size": 46,
            "at": "l3:stops+1320"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "D67",
            "x": 3378,
            "y": 618,
            "size": 46,
            "at": "l3:stops+1620"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "UNESCO listed the central sector in twenty ten, Thang Long's thousandth birthday, because the layering is the treasure.",
          "sub": "UNESCO ghi danh khu trung tâm năm 2010, dịp nghìn năm Thăng Long, vì chính sự chồng lớp là báu vật.",
          "keys": [
            "2010",
            "chồng lớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Note: the Temple of Literature nearby is a separate site, not part of it.",
          "sub": "Lưu ý: Văn Miếu – Quốc Tử Giám ở gần là di tích riêng, không thuộc khu này.",
          "keys": [
            "di tích riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today's morning: five stops, from the oldest layers to the newest.",
          "sub": "Buổi sáng hôm nay: năm điểm dừng, từ lớp cũ đến lớp mới.",
          "keys": [
            "năm điểm dừng"
          ]
        }
      ],
      "ref": "p1,p2,p5"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Các lớp trên một khu đất",
        "points": [
          {
            "label": "Đại La",
            "sub": "trước thế kỷ X",
            "illus": "brick"
          },
          {
            "label": "Lý, Trần",
            "sub": "từ 1010",
            "illus": "dragon"
          },
          {
            "label": "Lê",
            "sub": "từ 1428",
            "illus": "crown"
          },
          {
            "label": "Nguyễn",
            "sub": "trấn thành Bắc",
            "illus": "japanese-castle"
          },
          {
            "label": "Hiện đại",
            "sub": "Nhà D67",
            "illus": "office-building"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dai La, Ly, Tran, Le, Nguyen, modern times.",
          "sub": "Đại La, Lý, Trần, Lê, Nguyễn, hiện đại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Stacked like a cake. We start at the bottom.",
          "sub": "Chồng như bánh nhiều tầng. Ta bắt đầu từ đáy.",
          "keys": [
            "bánh nhiều tầng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p1,p7"
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
            "text": "① 8:00 · Cổng vào",
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
              "set": "heritage",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "japanese-castle",
                "hiking-boot"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:gate",
            "caption": "8:00 · cổng vào Hoàng thành",
            "icon": "japanese-castle"
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Dũng: đi ngược từ hầm?",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:backwards",
            "color": "coral"
          },
          {
            "id": "c-dx",
            "t": "strike",
            "over": "c-d",
            "at": "l3:Doan"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 50,
            "h": 50,
            "at": "l4:Doan",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 242,
            "size": 62,
            "at": "l4:Doan+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Đoan Môn, cổng nam",
            "x": 4071,
            "y": 252,
            "size": 40,
            "at": "l4:Doan+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 335,
            "w": 50,
            "h": 50,
            "at": "l4:Kinh",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 317,
            "size": 62,
            "at": "l4:Kinh+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Kính Thiên, bậc rồng",
            "x": 4071,
            "y": 327,
            "size": 40,
            "at": "l4:Kinh+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 410,
            "w": 50,
            "h": 50,
            "at": "l4:Hau",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 392,
            "size": 62,
            "at": "l4:Hau+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Hậu Lâu",
            "x": 4071,
            "y": 402,
            "size": 40,
            "at": "l4:Hau+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 485,
            "w": 50,
            "h": 50,
            "at": "l4:eighteen",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 467,
            "size": 62,
            "at": "l4:eighteen+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Hố 18 Hoàng Diệu",
            "x": 4071,
            "y": 477,
            "size": 40,
            "at": "l4:eighteen+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 560,
            "w": 50,
            "h": 50,
            "at": "l4:sixty",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 542,
            "size": 62,
            "at": "l4:sixty+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Nhà D67, hầm",
            "x": 4071,
            "y": 552,
            "size": 40,
            "at": "l4:sixty+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop, eight a.m., the gate.",
          "sub": "Điểm một, tám giờ sáng, cổng vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Let's start at the bunker and walk backwards. Faster!",
          "sub": "Mình bắt đầu từ hầm rồi đi ngược nhé. Cho nhanh!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No, we start at Doan Mon, the south gate. The modern layer comes last.",
          "sub": "Không, bắt đầu từ Đoan Môn, cổng phía nam. Lớp hiện đại để cuối.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Doan Mon, Kinh Thien and its dragons, Hau Lau, the dig at eighteen Hoang Dieu, then house D sixty seven.",
          "sub": "Đoan Môn, Kính Thiên với bậc rồng, Hậu Lâu, hố khảo cổ 18 Hoàng Diệu, rồi Nhà D67."
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
          }
        ],
        "items": [
          {
            "id": "c-shoe",
            "t": "text",
            "text": "Giày đi bộ thoải mái",
            "x": 3996,
            "y": 650,
            "size": 40,
            "at": "l1:shoes",
            "hl": [
              {
                "text": "thoải mái",
                "at": "l1:comfortable"
              }
            ]
          },
          {
            "id": "c-off",
            "t": "text",
            "text": "Giờ, vé: xem trang chính thức",
            "x": 3996,
            "y": 712,
            "size": 32,
            "at": "l2:official",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wear comfortable shoes. The site is big, and Dũng's sandals are already complaining.",
          "sub": "Mang giày đi bộ thoải mái. Khu rộng lắm, dép của Dũng đã kêu rồi.",
          "keys": [
            "giày đi bộ thoải mái"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Opening hours, tickets and open areas can change. Check official information first.",
          "sub": "Giờ mở cửa, vé, khu được vào có thể đổi. Xem thông tin chính thức trước.",
          "keys": [
            "thông tin chính thức"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 8:30 · Đoan Môn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Doan"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "dragon",
                "japanese-castle"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Sam",
            "caption": "8:30 · Đoan Môn, cổng nam",
            "icon": "dragon"
          },
          {
            "id": "d-dl",
            "t": "text",
            "text": "Trước TK X: thành Đại La",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l4:Dai",
            "hl": [
              {
                "text": "Đại La",
                "at": "l4:Dai"
              }
            ]
          },
          {
            "id": "d-1010",
            "t": "text",
            "text": "1010: Lý Công Uẩn dời đô",
            "x": 5964,
            "y": 250,
            "size": 44,
            "at": "l5:ten",
            "hl": [
              {
                "text": "1010",
                "at": "l5:ten"
              }
            ]
          },
          {
            "id": "d-tl",
            "t": "text",
            "text": "Thăng Long = rồng bay lên",
            "x": 5964,
            "y": 340,
            "size": 52,
            "at": "l3:rising",
            "color": "accent",
            "hl": [
              {
                "text": "rồng bay lên",
                "at": "l3:rising"
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
          "say": "Second stop, Doan Mon. Sam joins, Thảo's colleague from abroad, a walking question mark.",
          "sub": "Điểm hai, Đoan Môn. Sam nhập hội, đồng nghiệp nước ngoài của Thảo, một dấu hỏi biết đi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Thang Long. What does the name mean?",
          "sub": "Thăng Long. Cái tên nghĩa là gì vậy?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Thang Long means rising dragon.",
          "sub": "Thăng Long nghĩa là rồng bay lên.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Before the tenth century, northern rulers governed here, from a city called Dai La. That's the deepest layer.",
          "sub": "Trước thế kỷ 10, chính quyền đô hộ phương Bắc cai trị ở đây, thành Đại La. Đó là lớp sâu nhất.",
          "keys": [
            "lớp sâu nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In ten ten, King Ly Cong Uan moved the capital from Hoa Lu. Legend says a golden dragon flew up.",
          "sub": "Năm 1010, vua Lý Công Uẩn dời đô từ Hoa Lư ra. Tương truyền có rồng vàng bay lên.",
          "keys": [
            "rồng vàng bay lên"
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
      "ref": "p7,p8,p24"
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
            "id": "d-ly",
            "t": "text",
            "text": "Lý: cung gỗ, ngói rồng, sen",
            "x": 5964,
            "y": 480,
            "size": 42,
            "at": "l1:wooden"
          },
          {
            "id": "d-lyr",
            "t": "text",
            "text": "Rồng Lý: mềm, như sóng nước",
            "x": 5964,
            "y": 545,
            "size": 42,
            "at": "l2:waves",
            "color": "accent",
            "hl": [
              {
                "text": "như sóng nước",
                "at": "l2:waves"
              }
            ]
          },
          {
            "id": "d-tr",
            "t": "text",
            "text": "Trần: mở rộng, 3 lần thắng Nguyên",
            "x": 5964,
            "y": 640,
            "size": 40,
            "at": "l3:three",
            "hl": [
              {
                "text": "3 lần",
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
          "who": "det",
          "say": "Ly remains show big wooden palaces, roof tiles with dragons, bodhi leaves and lotus flowers.",
          "sub": "Dấu tích thời Lý: cung điện gỗ lớn, ngói trang trí rồng, lá đề, hoa sen tinh tế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Ly dragons are soft and curving, like waves of water.",
          "sub": "Rồng thời Lý thân mềm mại, uốn lượn như sóng nước.",
          "keys": [
            "như sóng nước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Tran kept the capital and enlarged it, while Dai Viet beat the Mongol Yuan armies three times.",
          "sub": "Nhà Trần tiếp tục đóng đô, mở rộng cung điện; Đại Việt ba lần thắng quân Nguyên Mông.",
          "keys": [
            "ba lần"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "text": "③ 9:00 · Bậc rồng Kính Thiên",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "point",
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "dragon",
                "crown"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1:steps",
            "caption": "9:00 · nền điện Kính Thiên",
            "icon": "dragon"
          },
          {
            "id": "e-1428",
            "t": "text",
            "text": "1428: Lê Lợi, Đông Kinh",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:fourteen",
            "hl": [
              {
                "text": "Đông Kinh",
                "at": "l2:Dong"
              }
            ]
          },
          {
            "id": "e-tt",
            "t": "text",
            "text": "Lê Thánh Tông: xây quy mô",
            "x": 7932,
            "y": 250,
            "size": 42,
            "at": "l2:Thanh"
          },
          {
            "id": "e-kt",
            "t": "text",
            "text": "Kính Thiên: thiết triều, đại lễ",
            "x": 7932,
            "y": 330,
            "size": 42,
            "at": "l4:court"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop, nine a.m., the stone dragon steps of Kinh Thien.",
          "sub": "Điểm ba, chín giờ, bậc rồng đá điện Kính Thiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After the Ming period, Le Loi took the throne in fourteen twenty eight. The city, now Dong Kinh, grew under Le Thanh Tong.",
          "sub": "Sau thời thuộc Minh, Lê Lợi lên ngôi năm 1428; kinh đô khi ấy gọi là Đông Kinh, xây quy mô thời Lê Thánh Tông.",
          "keys": [
            "Đông Kinh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Wait. This dragon looks angry. The one on the roof tile was dancing!",
          "sub": "Ơ. Con rồng này trông dữ ghê. Con trên ngói lúc nãy đang múa mà!",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sharp eyes. Kinh Thien was where the court met and held great ceremonies.",
          "sub": "Tinh mắt đấy. Kính Thiên là nơi thiết triều, cử hành đại lễ."
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p11,p12"
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
            "at": "l1",
            "fit": [
              "e-ly",
              "e-le"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-ly",
            "t": "text",
            "text": "Rồng Lý: mềm mại",
            "x": 7932,
            "y": 420,
            "size": 46,
            "at": "l1:soft",
            "hl": [
              {
                "text": "mềm mại",
                "at": "l1:soft"
              }
            ]
          },
          {
            "id": "e-lyw",
            "t": "text",
            "text": "→ Phật giáo",
            "x": 7992,
            "y": 480,
            "size": 40,
            "at": "l2:Buddhism",
            "color": "muted"
          },
          {
            "id": "e-le",
            "t": "text",
            "text": "Rồng Lê: uy nghiêm",
            "x": 7932,
            "y": 545,
            "size": 46,
            "at": "l1:stern",
            "hl": [
              {
                "text": "uy nghiêm",
                "at": "l1:stern"
              }
            ]
          },
          {
            "id": "e-lew",
            "t": "text",
            "text": "→ Nho giáo, quyền vua",
            "x": 7992,
            "y": 605,
            "size": 40,
            "at": "l2:Confucianism",
            "color": "muted"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "So hai con rồng, thấy hai thời",
            "x": 7932,
            "y": 685,
            "size": 48,
            "at": "l3:Compare",
            "color": "accent",
            "hl": [
              {
                "text": "thấy hai thời",
                "at": "l3:eras"
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
          "say": "Ly dragons: soft, like water. Le dragons: strong and stern, the power of a central state.",
          "sub": "Rồng Lý mềm mại như nước. Rồng Lê mạnh mẽ, uy nghiêm, quyền lực nhà nước tập trung.",
          "keys": [
            "uy nghiêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many researchers link it to each era: the Ly full of Buddhism, the Le valuing Confucianism and royal power.",
          "sub": "Nhiều nhà nghiên cứu cho rằng: thời Lý đậm Phật giáo, thời Lê đề cao Nho giáo và quyền vua."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Compare two dragons, and you see two eras.",
          "sub": "So hai con rồng, thấy hai thời đại.",
          "keys": [
            "thấy hai thời đại"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Kinh đô vào Huế rồi, Thăng Long còn gì?",
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
          "say": "If the capital moved to Hue, what's left here?",
          "sub": "Kinh đô vào Huế rồi, Thăng Long còn lại gì?",
          "keys": [
            "còn lại gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p15"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 9:40 · Hậu Lâu, Bắc Môn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Hau"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "japanese-castle",
                "bomb"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1:North",
            "caption": "9:40 · Bắc Môn",
            "icon": "japanese-castle"
          },
          {
            "id": "f-tr",
            "t": "text",
            "text": "Nguyễn: chỉ còn trấn thành Bắc",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l2:northern",
            "hl": [
              {
                "text": "trấn thành",
                "at": "l2:citadel"
              }
            ]
          },
          {
            "id": "f-1831",
            "t": "text",
            "text": "1831: tên Hà Nội chính thức",
            "x": 60,
            "y": 1340,
            "size": 44,
            "at": "l2:eighteen",
            "color": "accent",
            "hl": [
              {
                "text": "1831",
                "at": "l2:eighteen"
              }
            ]
          },
          {
            "id": "f-keep",
            "t": "text",
            "text": "Còn: Cột cờ, Hậu Lâu, Bắc Môn",
            "x": 60,
            "y": 1430,
            "size": 42,
            "at": "l4:Flag"
          },
          {
            "id": "f-gun",
            "t": "text",
            "text": "Vết đạn pháo Pháp, cuối TK XIX",
            "x": 60,
            "y": 1510,
            "size": 40,
            "at": "l5:French",
            "color": "coral",
            "hl": [
              {
                "text": "Vết đạn pháo",
                "at": "l5:cannon"
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
          "say": "Fourth stop, nine forty: Hau Lau, then the North Gate.",
          "sub": "Điểm bốn, chín giờ bốn mươi: Hậu Lâu, rồi Bắc Môn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With the Nguyen in Hue, this became a northern citadel. In eighteen thirty one, under Minh Mang, the name Hanoi became official.",
          "sub": "Nhà Nguyễn ở Huế, nơi đây chỉ còn là trấn thành phía bắc. Năm 1831, thời Minh Mạng, tên Hà Nội dùng chính thức.",
          "keys": [
            "1831"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "What are these holes in the wall? Pigeons?",
          "sub": "Mấy cái lỗ trên tường là gì vậy? Chim bồ câu à?",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not pigeons. The Nguyen left the Flag Tower, Hau Lau and this North Gate.",
          "sub": "Không phải bồ câu. Thời Nguyễn còn lại Cột cờ Hà Nội, Hậu Lâu và Bắc Môn này."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Those holes are cannon marks from the French attack in the late nineteenth century.",
          "sub": "Đó là vết đạn pháo khi quân Pháp tấn công thành, cuối thế kỷ 19.",
          "keys": [
            "vết đạn pháo"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑤ 10:15 · Hố 18 Hoàng Diệu",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "magnifying-glass-tilted-left",
                "brick"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:dig",
            "caption": "10:15 · khu khảo cổ",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "g-qh",
            "t": "text",
            "text": "Đầu những năm 2000:",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:early"
          },
          {
            "id": "g-qh2",
            "t": "text",
            "text": "định xây nhà Quốc hội",
            "x": 2068,
            "y": 1325,
            "size": 44,
            "at": "l2:Assembly",
            "hl": [
              {
                "text": "nhà Quốc hội",
                "at": "l2:Assembly"
              }
            ]
          },
          {
            "id": "g-f",
            "t": "text",
            "text": "Nền móng · giếng · cống",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l2:wells",
            "color": "accent"
          },
          {
            "id": "g-low",
            "t": "text",
            "text": "Lớp dưới thường cũ hơn",
            "x": 2028,
            "y": 1500,
            "size": 50,
            "at": "l4:lower",
            "color": "accent",
            "hl": [
              {
                "text": "cũ hơn",
                "at": "l4:older"
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
          "say": "Fifth stop, ten fifteen: the dig at eighteen Hoang Dieu.",
          "sub": "Điểm năm, mười giờ mười lăm: hố khảo cổ 18 Hoàng Diệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In the early two thousands, before a new National Assembly building, archaeologists found foundations, wells and drains.",
          "sub": "Đầu những năm 2000, trước khi xây nhà Quốc hội mới, khảo cổ tìm thấy nền móng, giếng nước, cống thoát nước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "So, what am I looking at down there?",
          "sub": "Vậy dưới kia là gì thế?",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Look for foundations at different depths. Lower layers are usually older. The clearest proof of layering.",
          "sub": "Tìm nền móng ở các độ sâu: lớp dưới thường cũ hơn. Bằng chứng rõ nhất của sự chồng lớp.",
          "keys": [
            "lớp dưới thường cũ hơn"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "heritage",
        "label": "10:20 · bên hố khảo cổ",
        "actors": [
          {
            "id": "sam",
            "side": "right"
          },
          {
            "id": "thao",
            "side": "left"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc một loạt mốc năm",
          "why": "Khách khó nhớ con số rời rạc; một hình ảnh quen thuộc khiến họ tự cúi xuống tìm.",
          "rule": "Một hình ảnh quen thuộc thay được mười mốc năm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Before the tenth century, ten ten, fourteen twenty eight, eighteen thirty one...",
          "sub": "Trước thế kỷ 10, 1010, 1428, 1831…",
          "pose": "explain",
          "stop": true
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sam's eyes just glazed over. Give one familiar image first.",
          "sub": "Mắt Sam đờ ra rồi. Đưa một hình ảnh quen thuộc trước.",
          "keys": [
            "một hình ảnh quen thuộc"
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
          "say": "Think of a layer cake. Each period is one layer. The deepest is usually oldest.",
          "sub": "Coi như chiếc bánh nhiều tầng. Mỗi thời một tầng, tầng sâu nhất thường cũ nhất.",
          "phase": "redo",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Look, an old well, and another layer below!",
          "sub": "Kìa, giếng cổ, còn một lớp nữa bên dưới!",
          "phase": "redo",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One familiar image can replace ten dates.",
          "sub": "Một hình ảnh quen thuộc thay được mười mốc năm.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "thay được mười mốc năm"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p22,p23"
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
          }
        ],
        "items": [
          {
            "id": "g-c1",
            "t": "text",
            "text": "1. Hình quen: bánh nhiều tầng",
            "x": 2028,
            "y": 1610,
            "size": 40,
            "at": "l1:familiar",
            "hl": [
              {
                "text": "bánh nhiều tầng",
                "at": "l1:image"
              }
            ]
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "2. Nhìn từ dưới lên",
            "x": 2028,
            "y": 1670,
            "size": 40,
            "at": "l1:bottom"
          },
          {
            "id": "g-c3",
            "t": "text",
            "text": "3. Biển tên + một chi tiết",
            "x": 2028,
            "y": 1730,
            "size": 40,
            "at": "l2:sign"
          },
          {
            "id": "g-c4",
            "t": "text",
            "text": "→ khách tự cúi xuống tìm",
            "x": 2028,
            "y": 1795,
            "size": 40,
            "at": "l2:lean",
            "color": "accent",
            "hl": [
              {
                "text": "tự cúi xuống",
                "at": "l2:lean"
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
          "say": "Three steps: a familiar image, then read from the bottom up.",
          "sub": "Ba bước: một hình ảnh quen thuộc, rồi đọc từ dưới lên.",
          "keys": [
            "từ dưới lên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the sign, plus one detail, like a well or a drain. Your guest will lean in to search.",
          "sub": "Rồi đọc biển, chọn một chi tiết như giếng, cống. Khách sẽ tự cúi xuống tìm.",
          "keys": [
            "tự cúi xuống tìm"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 1967,
        "from": 1900,
        "label": "năm xây, nên mới gọi là Nhà D67",
        "illus": "office-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop. A plain building, named after a year.",
          "sub": "Điểm cuối. Một dãy nhà giản dị, đặt tên theo năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Built in nineteen sixty seven: house D sixty seven.",
          "sub": "Xây năm 1967: Nhà D67.",
          "keys": [
            "Nhà D67"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
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
            "at": "l3",
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
            "text": "⑥ 11:00 · Nhà D67, hầm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "office-building",
                "world-map"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Tư",
            "caption": "11:00 · Nhà D67",
            "icon": "office-building"
          },
          {
            "id": "h-war",
            "t": "text",
            "text": "Chống Mỹ: Bộ Chính trị,",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l1:war"
          },
          {
            "id": "h-war2",
            "t": "text",
            "text": "Quân ủy TW họp ở đây",
            "x": 4036,
            "y": 1325,
            "size": 42,
            "at": "l1:met"
          },
          {
            "id": "h-bk",
            "t": "text",
            "text": "Hầm: điều hành khi bị ném bom",
            "x": 3996,
            "y": 1410,
            "size": 40,
            "at": "l2:bunker",
            "hl": [
              {
                "text": "khi bị ném bom",
                "at": "l2:bombing"
              }
            ]
          },
          {
            "id": "h-tu",
            "t": "text",
            "text": "Để người lớn tuổi kể trước",
            "x": 3996,
            "y": 1520,
            "size": 50,
            "at": "l5:first",
            "color": "accent",
            "hl": [
              {
                "text": "kể trước",
                "at": "l5:first"
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
          "say": "Eleven a.m. In the war against the US, the Politburo and Central Military Commission met here.",
          "sub": "Mười một giờ. Thời chống Mỹ, Bộ Chính trị và Quân ủy Trung ương họp bàn ở đây."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Below is a bunker, so work went on during bombing. Bà Tư, Thảo's grandma, joins them here.",
          "sub": "Bên dưới là hầm, để điều hành khi bị ném bom. Bà Tư, bà nội Thảo, đến cùng ở đây."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Grandma, you were a girl in Hanoi then. What do you remember?",
          "sub": "Bà ơi, hồi ấy bà còn bé ở Hà Nội. Bà còn nhớ gì không ạ?",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "The sirens. We ran to the shelters. Let me look around a little first.",
          "sub": "Tiếng còi báo động. Cả nhà chạy xuống hầm. Để bà nhìn một lúc đã.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tables and maps are still here. But older people can tell what no sign can. Let them speak first.",
          "sub": "Bàn ghế, bản đồ vẫn như xưa. Nhưng người lớn tuổi kể được điều không tấm bảng nào có. Để họ kể trước.",
          "keys": [
            "Để họ kể trước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 2200
        }
      ],
      "ref": "p17,p18,p19"
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
            "id": "h-20",
            "t": "text",
            "text": "TK XX: quân Pháp đóng quân",
            "x": 3996,
            "y": 1650,
            "size": 40,
            "at": "l1:French"
          },
          {
            "id": "h-20b",
            "t": "text",
            "text": "→ trụ sở Bộ Quốc phòng",
            "x": 4036,
            "y": 1710,
            "size": 40,
            "at": "l1:Defence"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In the twentieth century the site housed the French army, then Vietnam's Ministry of Defence. The newest layer.",
          "sub": "Thế kỷ 20, nơi đây là chỗ đóng quân của Pháp, sau là trụ sở Bộ Quốc phòng. Lớp mới nhất.",
          "keys": [
            "Lớp mới nhất"
          ]
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Ba câu để kể",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1252,
            "size": 62,
            "at": "l2+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Different dynasties, same site.",
            "x": 6039,
            "y": 1262,
            "size": 46,
            "at": "l2+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1380,
            "w": 50,
            "h": 50,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1362,
            "size": 62,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Thang Long: rising dragon.",
            "x": 6039,
            "y": 1372,
            "size": 46,
            "at": "l3+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1490,
            "w": 50,
            "h": 50,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1472,
            "size": 62,
            "at": "l4+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "This bunker: the war.",
            "x": 6039,
            "y": 1482,
            "size": 46,
            "at": "l4+200"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Mỗi điểm một câu là đủ",
            "x": 5964,
            "y": 1650,
            "size": 52,
            "at": "l4:end",
            "color": "accent",
            "hl": [
              {
                "text": "một câu",
                "at": "l4:end"
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
          "say": "Three short English sentences, ready for any guest.",
          "sub": "Ba câu tiếng Anh ngắn, khách nào cũng dùng được.",
          "keys": [
            "Ba câu tiếng Anh ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Different dynasties built on the same site.",
          "sub": "Nhiều triều đại xây trên cùng một khu đất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thang Long means rising dragon.",
          "sub": "Thăng Long nghĩa là rồng bay lên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This bunker was used during the war.",
          "sub": "Căn hầm này được dùng trong chiến tranh."
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
            "text": "Chủ nhật sau · 7:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:thirty"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "japanese-castle",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "caption": "Chủ nhật sau · 7:30 · ở nhà",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-no",
            "t": "text",
            "text": "“Xem cung điện”",
            "x": 7932,
            "y": 1270,
            "size": 54,
            "at": "l2:palaces",
            "color": "muted"
          },
          {
            "id": "j-nox",
            "t": "strike",
            "over": "j-no",
            "at": "l2:palaces+400"
          },
          {
            "id": "j-yes",
            "t": "text",
            "text": "Đi xuyên các lớp thời gian",
            "x": 7932,
            "y": 1360,
            "size": 52,
            "at": "l2:layers",
            "color": "accent",
            "hl": [
              {
                "text": "các lớp thời gian",
                "at": "l2:layers"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Nghìn năm văn vật",
            "x": 7932,
            "y": 1510,
            "size": 54,
            "at": "l3:thousand",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "bây giờ là đây”",
            "x": 7972,
            "y": 1590,
            "size": 54,
            "at": "l3:here",
            "color": "accent",
            "hl": [
              {
                "text": "là đây",
                "at": "l3:feet"
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
          "say": "Next Sunday, seven thirty. This time Dũng brings his friends.",
          "sub": "Chủ nhật sau, bảy rưỡi. Lần này Dũng dẫn bạn đi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "We're not seeing palaces today, guys. We're walking through layers of time!",
          "sub": "Hôm nay không xem cung điện đâu nhé. Mình đi xuyên các lớp thời gian!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A thousand years of culture, here and now, the verse ends. Here, right under your feet.",
          "sub": "Câu ca dao kết: “Nghìn năm văn vật bây giờ là đây.” Là đây, ngay dưới chân mình.",
          "keys": [
            "ngay dưới chân mình"
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
      "ref": "outro"
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
            "at": "l1:layers",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 2828,
            "y": 260,
            "at": "l1:layers"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 500,
            "at": "l2:Compare"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2668,
            "y": 1510,
            "at": "l3:lower"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-low"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:older"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Giờ, vé, khu tham quan: theo ban quản lý, xem trước khi đi.",
            "x": 7932,
            "y": 1810,
            "size": 28,
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
          "say": "So: no palace needed. Thirteen centuries in layers on one site.",
          "sub": "Tóm lại: không cần cung điện. Gần mười ba thế kỷ chồng lớp trên một khu đất.",
          "keys": [
            "chồng lớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Walk from Doan Mon to the modern layer. Compare the two dragons.",
          "sub": "Đi từ Đoan Môn tới lớp hiện đại. So hai con rồng.",
          "keys": [
            "So hai con rồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At the pit, lower is usually older. And let elders speak first.",
          "sub": "Ở hố khảo cổ, lớp dưới thường cũ hơn. Và để người lớn tuổi kể trước.",
          "keys": [
            "lớp dưới thường cũ hơn"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "ref": "questions[32]",
      "data": {
        "q": "When you look into the excavation pit, how can you tell which layer is older?",
        "options": [
          "Layers lower down are usually older than layers higher up",
          "Layers higher up are always older, because they are closer to the sky",
          "All layers are the same age, so it does not matter"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "magnifying-glass-tilted-left",
        "why": "Lớp nằm dưới thường cũ hơn lớp nằm trên."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "When you look into the excavation pit, how can you tell which layer is older?",
          "sub": "Khi nhìn xuống hố khảo cổ, làm sao biết lớp nào cũ hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Layers lower down are usually older than layers higher up.",
          "sub": "Lớp nằm dưới thường cũ hơn lớp nằm trên."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Hôm nay mình đi xuyên các lớp thời gian",
        "sub": "Nói câu này với người đi cùng, rồi làm bốn mươi câu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before you go, tell your companion: today we walk through layers of time. Then try the forty questions below.",
          "sub": "Trước khi đi, nói với người đi cùng: hôm nay mình đi xuyên các lớp thời gian. Rồi thử bốn mươi câu nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
