// Kịch bản video W lần 3 (#110) — "Hệ Mặt Trời có bao nhiêu hành tinh?" · chuỗi "Hệ Mặt Trời và vũ trụ"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ; đủ ý để làm 40 câu.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-many-planets-are-in-the-solar-system--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "space-curious",
    "slug": "how-many-planets-are-in-the-solar-system",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hệ Mặt Trời có bao nhiêu hành tinh?",
    "series": "Hệ Mặt Trời và vũ trụ"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân #136 + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô đi theo MỘT CHỦ NHẬT của Bin và ông Bình (7:00 sách mới “8 hành tinh” → 8:00 ba điều kiện → 9:00 Diêm Vương trượt điều ba, “Khoan đã!” (DLG ⚖️ p4) → 10:00 hai gia đình + mẹo nhớ → 14:00 mô hình tám quả bóng (❓ p10) → 16:00 nắng tám phút, rộng đến đâu → 19:00 hố đen trước? lộ trình (🧪 p20) → 20:00 bà Tư và “ngôi sao to” cạnh trăng (💡 p24) → 7:00 sáng thứ Hai khép vòng). Chuỗi space-curious (w145/_series). Ngắt nhịp: BRK-07 rehook, BRK-04 mô hình trước/sau, BRK-03 “8 phút”, BRK-08 lộ trình đọc. Số liệu chỉ từ bài (2006, 1930, 2005 Eris, ~11 lần, ~150 triệu km, ~30 lần, ~4,5 tỷ km, ~8 phút, 1980). Bản cũ (W lần 3, #110): w145/bak/how-many-planets-are-in-the-solar-system--w01.js.",
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
            "text": "8 hay 9?",
            "x": 60,
            "y": 110,
            "size": 200,
            "at": "l1:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8",
                "at": "l1:eight"
              },
              {
                "text": "9",
                "at": "l1:nine"
              }
            ]
          },
          {
            "id": "a-new",
            "t": "text",
            "text": "Sách mới: 8",
            "x": 70,
            "y": 400,
            "size": 56,
            "at": "l2:eight"
          },
          {
            "id": "a-old",
            "t": "text",
            "text": "Ông học thuở xưa: 9",
            "x": 70,
            "y": 490,
            "size": 56,
            "at": "l2:nine",
            "color": "muted"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: bài học · NASA Science — Planet Sizes and Locations",
            "x": 60,
            "y": 730,
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
          "say": "Eight planets, or nine? Depends on who you ask.",
          "sub": "Tám hành tinh hay chín? Tuỳ bạn hỏi ai.",
          "keys": [
            "Tám",
            "chín"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A new science book says eight. A grandpa who went to school long ago says nine.",
          "sub": "Sách khoa học mới bảo tám. Một ông đi học từ thuở xưa bảo chín."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
            "at": "l1",
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
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
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
                "open-book"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "7:00 Chủ nhật · cuốn sách mới",
            "icon": "open-book"
          },
          {
            "id": "a-who",
            "t": "text",
            "text": "Ai đúng?",
            "x": 920,
            "y": 640,
            "size": 60,
            "at": "l5:who",
            "color": "coral",
            "hl": [
              {
                "text": "Ai đúng?",
                "at": "l5:right"
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
          "say": "Meet Bin, nine, a professional question asker.",
          "sub": "Đây là Bin, chín tuổi, chuyên gia hỏi “sao vậy ạ”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And his grandpa, Mr Bình. Sunday, seven a.m., a brand new book.",
          "sub": "Còn đây là ông Bình. Bảy giờ sáng Chủ nhật, một cuốn sách mới tinh.",
          "keys": [
            "Bảy giờ sáng Chủ nhật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, my book says eight planets. You learned nine, right?",
          "sub": "Ông ơi, sách ghi tám hành tinh. Hồi xưa ông học chín mà?",
          "face": "surprised",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Nine, of course. Your book must be printed wrong.",
          "sub": "Chín chứ. Chắc sách in sai rồi.",
          "face": "thinking",
          "react": {
            "bin": "thinking"
          }
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So, who is right?",
          "sub": "Vậy ai đúng đây?",
          "keys": [
            "Ai đúng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "intro,p4"
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
            "text": "Mấy hành tinh: 8 hay 9?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:system",
            "hl": [
              {
                "text": "Mấy hành tinh",
                "at": "l2:short"
              }
            ]
          },
          {
            "id": "b-ans",
            "t": "text",
            "text": "8 · Diêm Vương: hành tinh lùn",
            "x": 2028,
            "y": 150,
            "size": 54,
            "at": "l2:eight",
            "color": "accent",
            "hl": [
              {
                "text": "hành tinh lùn",
                "at": "l2:dwarf"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: sách in sai",
            "x": 2028,
            "y": 250,
            "size": 52,
            "at": "l3:misprinted",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:anything"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: định nghĩa đã đổi",
            "x": 2028,
            "y": 340,
            "size": 58,
            "at": "l4:definition",
            "color": "accent",
            "hl": [
              {
                "text": "định nghĩa",
                "at": "l4:changed"
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
          "say": "So, how many planets are in the solar system?",
          "sub": "Vậy Hệ Mặt Trời có bao nhiêu hành tinh?",
          "keys": [
            "bao nhiêu hành tinh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: eight. Pluto became a dwarf planet in two thousand six.",
          "sub": "Trả lời ngắn: tám. Từ năm 2006, Sao Diêm Vương thành hành tinh lùn.",
          "keys": [
            "hành tinh lùn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nobody misprinted anything.",
          "sub": "Chẳng ai in sai cả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The definition changed, like a club rewriting its rules.",
          "sub": "Chỉ là định nghĩa đã đổi. Như câu lạc bộ bỗng viết lại luật cho rõ.",
          "keys": [
            "định nghĩa đã đổi"
          ]
        }
      ],
      "ref": "intro,p4"
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
            "text": "7 chặng · 1 Chủ nhật",
            "x": 2028,
            "y": 470,
            "size": 56,
            "at": "l1:seven",
            "hl": [
              {
                "text": "1 Chủ nhật",
                "at": "l1:sunday"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:stops+200",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:stops+460",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:stops+720",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:stops+980",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:stops+1240",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 570,
            "w": 212,
            "h": 100,
            "at": "l1:stops+1760",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:00",
            "x": 2053,
            "y": 590,
            "size": 48,
            "at": "l1:stops+320"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:00",
            "x": 2285,
            "y": 590,
            "size": 48,
            "at": "l1:stops+580"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "10:00",
            "x": 2517,
            "y": 590,
            "size": 48,
            "at": "l1:stops+840"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2749,
            "y": 590,
            "size": 48,
            "at": "l1:stops+1100"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "16:00",
            "x": 2981,
            "y": 590,
            "size": 48,
            "at": "l1:stops+1360"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "19:00",
            "x": 3213,
            "y": 590,
            "size": 48,
            "at": "l1:stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "20:00",
            "x": 3445,
            "y": 590,
            "size": 48,
            "at": "l1:stops+1880"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow them through one Sunday, in seven stops, from breakfast to stargazing.",
          "sub": "Theo hai ông cháu qua một Chủ nhật, bảy chặng, từ bữa sáng tới lúc ngắm sao.",
          "keys": [
            "một Chủ nhật"
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
            "at": "l3:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:00 Ba điều kiện",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 5036,
            "y": 140,
            "w": 600,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "open-book",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:breakfast",
            "caption": "8:00 · bữa sáng",
            "icon": "open-book"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop, eight a.m. Breakfast, book open by the bowl.",
          "sub": "Chặng một, tám giờ sáng. Bữa sáng, sách mở cạnh bát.",
          "keys": [
            "tám giờ sáng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "So what makes something a planet, Grandpa?",
          "sub": "Thế cái gì mới được gọi là hành tinh hả ông?",
          "face": "thinking",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Let's read the rules first. Slowly.",
          "sub": "Mình đọc luật đã. Từ từ.",
          "pose": "explain",
          "face": "happy"
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
          }
        ],
        "items": [
          {
            "id": "c-sun",
            "t": "ring",
            "x": 3996,
            "y": 150,
            "w": 110,
            "h": 110,
            "at": "l1:sun",
            "color": "coral",
            "stroke": 7
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "Thủy · Kim · Trái Đất · Hỏa",
            "x": 4136,
            "y": 150,
            "size": 46,
            "at": "l1:mercury",
            "hl": [
              {
                "text": "Trái Đất",
                "at": "l1:earth"
              }
            ]
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "Mộc · Thổ · Thiên Vương · Hải Vương",
            "x": 4136,
            "y": 220,
            "size": 46,
            "at": "l2:jupiter"
          },
          {
            "id": "c-iau",
            "t": "text",
            "text": "theo Liên đoàn Thiên văn Quốc tế",
            "x": 4136,
            "y": 290,
            "size": 34,
            "at": "l3:international",
            "color": "muted"
          },
          {
            "id": "c-06",
            "t": "text",
            "text": "2006 · ba điều kiện:",
            "x": 3996,
            "y": 360,
            "size": 46,
            "at": "l4:three",
            "color": "accent",
            "hl": [
              {
                "text": "ba điều kiện",
                "at": "l4:conditions"
              }
            ]
          },
          {
            "id": "c-r-c0",
            "t": "box",
            "x": 3996,
            "y": 440,
            "w": 46,
            "h": 46,
            "at": "l4:one",
            "stroke": 5
          },
          {
            "id": "c-r-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 422,
            "size": 58,
            "at": "l4:one+600",
            "color": "accent"
          },
          {
            "id": "c-r-l0",
            "t": "text",
            "text": "Quay quanh Mặt Trời",
            "x": 4066,
            "y": 432,
            "size": 44,
            "at": "l4:one+200"
          },
          {
            "id": "c-r-c1",
            "t": "box",
            "x": 3996,
            "y": 520,
            "w": 46,
            "h": 46,
            "at": "l5:round",
            "stroke": 5
          },
          {
            "id": "c-r-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 502,
            "size": 58,
            "at": "l5:round+600",
            "color": "accent"
          },
          {
            "id": "c-r-l1",
            "t": "text",
            "text": "Đủ nặng → gần tròn",
            "x": 4066,
            "y": 512,
            "size": 44,
            "at": "l5:round+200"
          },
          {
            "id": "c-r-c2",
            "t": "box",
            "x": 3996,
            "y": 600,
            "w": 46,
            "h": 46,
            "at": "l6:cleared",
            "stroke": 5
          },
          {
            "id": "c-r-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 582,
            "size": 58,
            "at": "l6:cleared+600",
            "color": "accent"
          },
          {
            "id": "c-r-l2",
            "t": "text",
            "text": "“Dọn sạch” đường đi",
            "x": 4066,
            "y": 592,
            "size": 44,
            "at": "l6:cleared+200"
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "Không xét: cỡ, nước, vành đai",
            "x": 3996,
            "y": 690,
            "size": 40,
            "at": "l7:size",
            "color": "muted",
            "hl": [
              {
                "text": "Không xét",
                "at": "l7:not"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: NASA Science; Liên đoàn Thiên văn Quốc tế (IAU)",
            "x": 5036,
            "y": 735,
            "size": 26,
            "at": "l3",
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
          "say": "From the Sun: Mercury, Venus, Earth, Mars,",
          "sub": "Từ Mặt Trời ra: Thủy, Kim, Trái Đất, Hỏa,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Jupiter, Saturn, Uranus, Neptune. Eight.",
          "sub": "Mộc, Thổ, Thiên Vương, Hải Vương. Tám.",
          "keys": [
            "Tám"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The list comes from the International Astronomical Union.",
          "sub": "Danh sách theo Liên đoàn Thiên văn Quốc tế, sách mới đều dùng.",
          "keys": [
            "Liên đoàn Thiên văn Quốc tế"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two thousand six, three conditions. One: it goes around the Sun.",
          "sub": "Năm 2006, họ thống nhất ba điều kiện. Một: quay quanh Mặt Trời.",
          "keys": [
            "ba điều kiện"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two: it is heavy enough to pull itself nearly round.",
          "sub": "Hai: đủ nặng để tự kéo mình thành hình gần tròn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three: it has cleared its path, ruling the small objects around its orbit.",
          "sub": "Ba: đã “dọn sạch” đường đi, áp đảo mọi vật thể nhỏ quanh quỹ đạo.",
          "keys": [
            "dọn sạch"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Size, water, rings? Not in the rules.",
          "sub": "Cỡ, nước, vành đai? Không có trong luật. Đâu phải thi hoa hậu."
        }
      ],
      "ref": "p1,p2"
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
            "at": "l3:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:00 Diêm Vương trượt đâu?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 7004,
            "y": 140,
            "w": 600,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "ringed-planet"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:pluto",
            "caption": "9:00 · soát luật",
            "icon": "ringed-planet"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, nine a.m. Bin checks Pluto, strict as a referee.",
          "sub": "Chặng hai, chín giờ. Bin soát Diêm Vương, nghiêm như trọng tài.",
          "keys": [
            "chín giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Pluto is round. It goes around the Sun. Two ticks!",
          "sub": "Diêm Vương tròn này. Quay quanh Mặt Trời này. Hai dấu tích!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And rule three? Look at its neighbourhood.",
          "sub": "Còn điều ba? Nhìn hàng xóm của nó xem.",
          "pose": "explain"
        }
      ],
      "ref": "p3"
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
            "id": "d-sun",
            "t": "ring",
            "x": 5964,
            "y": 230,
            "w": 90,
            "h": 90,
            "at": "l1:path",
            "color": "coral",
            "stroke": 6
          },
          {
            "id": "d-orb",
            "t": "line",
            "pts": [
              [
                6064,
                290
              ],
              [
                6304,
                290
              ],
              [
                6704,
                300
              ],
              [
                6904,
                300
              ]
            ],
            "at": "l1:shares",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "d-pl",
            "t": "ring",
            "x": 6444,
            "y": 270,
            "w": 50,
            "h": 50,
            "at": "l1:pluto",
            "stroke": 6
          },
          {
            "id": "d-o0",
            "t": "ring",
            "x": 6324,
            "y": 300,
            "w": 16,
            "h": 16,
            "at": "l1:icy+0",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o1",
            "t": "ring",
            "x": 6374,
            "y": 250,
            "w": 16,
            "h": 16,
            "at": "l1:icy+90",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o2",
            "t": "ring",
            "x": 6424,
            "y": 330,
            "w": 16,
            "h": 16,
            "at": "l1:icy+180",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o3",
            "t": "ring",
            "x": 6484,
            "y": 270,
            "w": 16,
            "h": 16,
            "at": "l1:icy+270",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o4",
            "t": "ring",
            "x": 6544,
            "y": 320,
            "w": 16,
            "h": 16,
            "at": "l1:icy+360",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o5",
            "t": "ring",
            "x": 6594,
            "y": 260,
            "w": 16,
            "h": 16,
            "at": "l1:icy+450",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o6",
            "t": "ring",
            "x": 6284,
            "y": 360,
            "w": 16,
            "h": 16,
            "at": "l1:icy+540",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o7",
            "t": "ring",
            "x": 6644,
            "y": 340,
            "w": 16,
            "h": 16,
            "at": "l1:icy+630",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-o8",
            "t": "ring",
            "x": 6514,
            "y": 220,
            "w": 16,
            "h": 16,
            "at": "l1:icy+720",
            "stroke": 4,
            "color": "muted"
          },
          {
            "id": "d-kb",
            "t": "text",
            "text": "vành đai Kuiper: chung đường",
            "x": 6184,
            "y": 160,
            "size": 44,
            "at": "l1:kuiper",
            "color": "accent",
            "hl": [
              {
                "text": "chung đường",
                "at": "l2:crowded"
              }
            ]
          },
          {
            "id": "d-x3",
            "t": "text",
            "text": "Điều 3: trượt",
            "x": 5964,
            "y": 420,
            "size": 56,
            "at": "l2:failed",
            "color": "coral",
            "hl": [
              {
                "text": "trượt",
                "at": "l2:failed"
              }
            ]
          },
          {
            "id": "d-eris",
            "t": "text",
            "text": "2005: Eris, nặng hơn",
            "x": 5964,
            "y": 520,
            "size": 46,
            "at": "l3:eris",
            "hl": [
              {
                "text": "nặng hơn",
                "at": "l3:heavier"
              }
            ]
          },
          {
            "id": "d-long",
            "t": "text",
            "text": "Hiểu cũ → danh sách dài mãi",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l4:endless",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Pluto shares its path with many icy objects, in the far Kuiper belt.",
          "sub": "Diêm Vương chung đường với rất nhiều vật thể băng giá ở vùng xa: vành đai Kuiper.",
          "keys": [
            "vành đai Kuiper"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the boss of its road. One face on a crowded bus. Rule three: failed.",
          "sub": "Không làm chủ con đường, chỉ chen chúc như xe buýt giờ tan tầm. Trượt điều ba.",
          "keys": [
            "Trượt điều ba"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And in two thousand five, Eris was found, heavier than Pluto.",
          "sub": "Năm 2005, người ta còn tìm thấy Eris, nặng hơn cả Diêm Vương.",
          "keys": [
            "Eris"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Old idea, endless list.",
          "sub": "Giữ cách hiểu cũ, danh sách dài ra mãi.",
          "keys": [
            "dài ra mãi"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "ref": "p4,p5,p6",
      "data": {
        "set": "home",
        "label": "9:00 · Tám hay chín?",
        "actors": [
          {
            "id": "bin",
            "side": "left"
          },
          {
            "id": "binh",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Bảo sách mới in sai",
          "why": "Từ 1930 đến 2006, Diêm Vương là hành tinh thứ chín. Năm 2006 nó thành hành tinh lùn.",
          "rule": "Sách không sai, khoa học đã cập nhật"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Nine. Pluto is the ninth planet. Your book is wrong.",
          "sub": "Chín. Diêm Vương là hành tinh thứ chín. Sách cháu sai rồi.",
          "pose": "point",
          "face": "stern",
          "stop": true
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hold on!",
          "sub": "Khoan đã!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both were right in their time. From nineteen thirty to two thousand six, Pluto was the ninth planet.",
          "sub": "Cả hai đúng với thời của mình. Từ 1930 đến 2006, Diêm Vương là hành tinh thứ chín.",
          "keys": [
            "đúng với thời của mình"
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
          "who": "binh",
          "say": "The book isn't wrong. Science has updated its definition.",
          "sub": "Sách không sai, khoa học đã cập nhật định nghĩa.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain",
          "keys": [
            "khoa học đã cập nhật"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Pluto is still there, a dwarf planet with many little friends.",
          "sub": "Diêm Vương vẫn ở đó, là hành tinh lùn, đường đi còn nhiều bạn nhỏ.",
          "phase": "redo",
          "face": "happy",
          "react": {
            "bin": "happy"
          }
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Tám hành tinh: to bằng nhau, đứng sát nhau?",
        "illus": "ringed-planet"
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
          "say": "Eight planets. Same size, standing in a neat little row?",
          "sub": "Tám hành tinh: to bằng nhau, đứng xếp hàng ngay ngắn?",
          "keys": [
            "to bằng nhau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s12",
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 10:00 Hai gia đình",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8972,
            "y": 140,
            "w": 600,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "world-map"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:poster",
            "caption": "10:00 · áp phích trên sàn",
            "icon": "world-map"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop, ten a.m. A planet poster across the floor.",
          "sub": "Chặng ba, mười giờ. Tấm áp phích hành tinh trải kín sàn.",
          "keys": [
            "mười giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Why are the first four so tiny, and the last four so huge?",
          "sub": "Sao bốn hành tinh đầu bé tí, bốn cái sau to đùng ạ?",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Two families. Rock near the Sun, gas and ice far away.",
          "sub": "Hai gia đình. Gần Mặt Trời là đá, xa thì khí với băng.",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "ref": "p7"
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
          }
        ],
        "items": [
          {
            "id": "e-i0",
            "t": "ring",
            "x": 7932,
            "y": 210,
            "w": 30,
            "h": 30,
            "at": "l1:mercury+0",
            "stroke": 5
          },
          {
            "id": "e-i1",
            "t": "ring",
            "x": 7992,
            "y": 200,
            "w": 44,
            "h": 44,
            "at": "l1:mercury+250",
            "stroke": 5
          },
          {
            "id": "e-i2",
            "t": "ring",
            "x": 8067,
            "y": 198,
            "w": 48,
            "h": 48,
            "at": "l1:mercury+500",
            "stroke": 5
          },
          {
            "id": "e-i3",
            "t": "ring",
            "x": 8147,
            "y": 206,
            "w": 36,
            "h": 36,
            "at": "l1:mercury+750",
            "stroke": 5
          },
          {
            "id": "e-il",
            "t": "text",
            "text": "nhỏ, mặt đất rắn",
            "x": 7932,
            "y": 280,
            "size": 40,
            "at": "l1:solid",
            "hl": [
              {
                "text": "mặt đất rắn",
                "at": "l1:ground"
              }
            ]
          },
          {
            "id": "e-belt",
            "t": "line",
            "pts": [
              [
                8232,
                160
              ],
              [
                8242,
                230
              ],
              [
                8232,
                300
              ],
              [
                8242,
                360
              ]
            ],
            "at": "l4:belt",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "e-o0",
            "t": "ring",
            "x": 8342,
            "y": 150,
            "w": 150,
            "h": 150,
            "at": "l2:outer+0",
            "stroke": 6
          },
          {
            "id": "e-o1",
            "t": "ring",
            "x": 8512,
            "y": 165,
            "w": 130,
            "h": 130,
            "at": "l2:outer+250",
            "stroke": 6
          },
          {
            "id": "e-o2",
            "t": "ring",
            "x": 8662,
            "y": 185,
            "w": 90,
            "h": 90,
            "at": "l2:outer+500",
            "stroke": 6
          },
          {
            "id": "e-o3",
            "t": "ring",
            "x": 8772,
            "y": 185,
            "w": 88,
            "h": 88,
            "at": "l2:outer+750",
            "stroke": 6
          },
          {
            "id": "e-ol",
            "t": "text",
            "text": "to, khí và băng, có vành đai",
            "x": 8342,
            "y": 330,
            "size": 38,
            "at": "l2:gas",
            "hl": [
              {
                "text": "khí và băng",
                "at": "l2:rings"
              }
            ]
          },
          {
            "id": "e-bl",
            "t": "text",
            "text": "vành đai tiểu hành tinh",
            "x": 7932,
            "y": 400,
            "size": 44,
            "at": "l4:asteroid",
            "color": "accent",
            "hl": [
              {
                "text": "tiểu hành tinh",
                "at": "l4:rocks"
              }
            ]
          },
          {
            "id": "e-cer",
            "t": "text",
            "text": "Ceres: cũng hành tinh lùn",
            "x": 7932,
            "y": 470,
            "size": 40,
            "at": "l5:dwarf",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Mercury, Venus, Earth, Mars: small, solid ground of rock and metal.",
          "sub": "Thủy, Kim, Trái Đất, Hỏa: nhỏ, mặt đất rắn bằng đá và kim loại.",
          "keys": [
            "mặt đất rắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The outer four: much bigger, gas and ice, rings and many moons.",
          "sub": "Bốn hành tinh xa: to hơn nhiều, khí và băng, có vành đai, nhiều vệ tinh.",
          "keys": [
            "khí và băng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Between them, the asteroid belt: countless small rocks between Mars and Jupiter.",
          "sub": "Giữa hai nhà: vành đai tiểu hành tinh, vô số đá nhỏ giữa Sao Hỏa và Sao Mộc.",
          "keys": [
            "vành đai tiểu hành tinh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Its biggest, Ceres, is a dwarf planet too.",
          "sub": "Ceres, lớn nhất ở đó, cũng là hành tinh lùn. Diêm Vương đâu cô đơn.",
          "keys": [
            "Ceres"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s14",
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
            "id": "e-m1",
            "t": "text",
            "text": "Mẹo 1: ngũ hành",
            "x": 7932,
            "y": 560,
            "size": 46,
            "at": "l1:trick",
            "color": "accent"
          },
          {
            "id": "e-m1b",
            "t": "text",
            "text": "Kim · Mộc · Thủy · Hỏa · Thổ",
            "x": 8312,
            "y": 560,
            "size": 46,
            "at": "l2:metal",
            "hl": [
              {
                "text": "Kim · Mộc · Thủy · Hỏa · Thổ",
                "at": "l2:earth"
              }
            ]
          },
          {
            "id": "e-m2",
            "t": "text",
            "text": "Mẹo 2: “My Very Educated…”",
            "x": 7932,
            "y": 660,
            "size": 46,
            "at": "l3:my",
            "color": "accent"
          },
          {
            "id": "e-m2b",
            "t": "text",
            "text": "M·V·E·M·J·S·U·N",
            "x": 8572,
            "y": 660,
            "size": 46,
            "at": "l3:letters",
            "hl": [
              {
                "text": "M·V·E·M·J·S·U·N",
                "at": "l3:neptune"
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
          "say": "Trick one: the Vietnamese names of the five naked eye planets come from the five elements.",
          "sub": "Mẹo một: tên Việt của năm hành tinh thấy bằng mắt thường lấy từ ngũ hành.",
          "keys": [
            "ngũ hành"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Metal, wood, water, fire, earth.",
          "sub": "Kim, Mộc, Thủy, Hỏa, Thổ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Trick two: My Very Educated Mother Just Served Us Noodles. First letters, Mercury to Neptune.",
          "sub": "Mẹo hai: My Very Educated Mother Just Served Us Noodles. Chữ cái đầu, Mercury tới Neptune.",
          "keys": [
            "Chữ cái đầu"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 14:00 Mô hình tám quả bóng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 1100,
            "y": 1230,
            "w": 600,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "soccer-ball"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "bin",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:model",
            "caption": "14:00 · mô hình nộp lớp",
            "icon": "soccer-ball"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop, two p.m. A school model, built with rocket engineer pride.",
          "sub": "Chặng bốn, hai giờ chiều. Bin làm mô hình nộp lớp, oai như kỹ sư tên lửa.",
          "keys": [
            "hai giờ chiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Eight foam balls, same size, close together on a stick. Done!",
          "sub": "Tám quả bóng xốp bằng nhau, xếp sát trên que. Xong!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Pretty. Now, if Earth were a pea, how big would Jupiter be?",
          "sub": "Đẹp đấy. Giờ nếu Trái Đất bằng hạt đậu, Sao Mộc to cỡ nào?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "Um... another pea?",
          "sub": "Ờ... một hạt đậu nữa ạ?",
          "face": "thinking"
        }
      ],
      "ref": "p10"
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
            "id": "f-pea",
            "t": "ring",
            "x": 100,
            "y": 1340,
            "w": 26,
            "h": 26,
            "at": "l1",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-pl",
            "t": "text",
            "text": "Trái Đất = hạt đậu",
            "x": 60,
            "y": 1390,
            "size": 40,
            "at": "l1+300"
          },
          {
            "id": "f-or",
            "t": "ring",
            "x": 560,
            "y": 1240,
            "w": 290,
            "h": 290,
            "at": "l1:orange",
            "stroke": 7,
            "color": "coral"
          },
          {
            "id": "f-orl",
            "t": "text",
            "text": "Sao Mộc = quả cam",
            "x": 580,
            "y": 1540,
            "size": 44,
            "at": "l1:orange+300",
            "color": "coral"
          },
          {
            "id": "f-11",
            "t": "text",
            "text": "rộng gấp ~11 lần",
            "x": 60,
            "y": 1470,
            "size": 48,
            "at": "l1:eleven",
            "hl": [
              {
                "text": "~11 lần",
                "at": "l1:times"
              }
            ]
          },
          {
            "id": "f-miss",
            "t": "text",
            "text": "Bằng nhau, xếp sát → hiểu sai",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l2:equal",
            "color": "muted"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Ghi: “không đúng tỉ lệ”",
            "x": 60,
            "y": 1740,
            "size": 52,
            "at": "l3:note",
            "color": "accent",
            "hl": [
              {
                "text": "không đúng tỉ lệ",
                "at": "l3:scale"
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
          "say": "An orange! Jupiter is about eleven times wider.",
          "sub": "Quả cam cơ! Sao Mộc rộng gấp khoảng 11 lần Trái Đất.",
          "keys": [
            "11 lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Equal balls, packed close? Kids think planets are equal and near.",
          "sub": "Bóng bằng nhau, xếp sát dễ khiến trẻ tưởng hành tinh cùng cỡ, ở gần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep it, it helps with the order. Just add a note: not to scale.",
          "sub": "Cứ giữ, nó giúp nhớ thứ tự. Chỉ cần ghi: không đúng tỉ lệ.",
          "keys": [
            "không đúng tỉ lệ"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "at": "l3:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:00 Rộng đến đâu?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 3068,
            "y": 1230,
            "w": 600,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "sun"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:yard",
            "caption": "16:00 · nắng ngoài sân",
            "icon": "sun"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop, four p.m. Afternoon sun in the yard.",
          "sub": "Chặng năm, bốn giờ chiều. Nắng chiều ngoài sân.",
          "keys": [
            "bốn giờ chiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, how far is the Sun? It feels so close!",
          "sub": "Ông ơi, Mặt Trời xa không? Nóng như ở sát bên!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "This sunlight on your face left the Sun about eight minutes ago.",
          "sub": "Ánh nắng con thấy bây giờ đã rời Mặt Trời từ khoảng tám phút trước đấy.",
          "pose": "point",
          "face": "happy"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s19",
      "module": "BRK-03",
      "data": {
        "value": 8,
        "suffix": " phút",
        "label": "ánh nắng đi từ Mặt Trời tới mặt Bin",
        "illus": "sun"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Eight minutes on the road.",
          "sub": "Tám phút đi đường."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Kids can't picture millions of kilometres. But they can feel time.",
          "sub": "Trẻ khó hình dung triệu km, nhưng dễ cảm nhận thời gian.",
          "keys": [
            "thời gian"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "g-sun",
            "t": "ring",
            "x": 2008,
            "y": 1260,
            "w": 90,
            "h": 90,
            "at": "l1:sun",
            "color": "coral",
            "stroke": 6
          },
          {
            "id": "g-axis",
            "t": "line",
            "pts": [
              [
                2108,
                1305
              ],
              [
                3028,
                1305
              ]
            ],
            "at": "l1:earth",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "g-ea",
            "t": "ring",
            "x": 2168,
            "y": 1292,
            "w": 26,
            "h": 26,
            "at": "l1:earth+300",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "g-150",
            "t": "text",
            "text": "Trái Đất: ~150 triệu km",
            "x": 2128,
            "y": 1340,
            "size": 40,
            "at": "l1:hundred",
            "hl": [
              {
                "text": "~150 triệu km",
                "at": "l1:kilometres"
              }
            ]
          },
          {
            "id": "g-ne",
            "t": "ring",
            "x": 2868,
            "y": 1288,
            "w": 34,
            "h": 34,
            "at": "l2:neptune",
            "stroke": 5
          },
          {
            "id": "g-45",
            "t": "text",
            "text": "Hải Vương: ~30 lần, ~4,5 tỷ km",
            "x": 2528,
            "y": 1340,
            "size": 40,
            "at": "l2:thirty",
            "hl": [
              {
                "text": "~4,5 tỷ km",
                "at": "l2:billion"
              }
            ]
          },
          {
            "id": "g-kb",
            "t": "text",
            "text": "Kuiper: Diêm Vương, nhiều sao chổi",
            "x": 2028,
            "y": 1490,
            "size": 40,
            "at": "l3:kuiper",
            "hl": [
              {
                "text": "Kuiper",
                "at": "l3:belt"
              }
            ]
          },
          {
            "id": "g-oo",
            "t": "text",
            "text": "Mây Oort: chỉ suy ra",
            "x": 2028,
            "y": 1570,
            "size": 40,
            "at": "l4:oort",
            "hl": [
              {
                "text": "suy ra",
                "at": "l4:worked"
              }
            ]
          },
          {
            "id": "g-p9",
            "t": "text",
            "text": "“Hành tinh Chín”: giả thuyết",
            "x": 2028,
            "y": 1650,
            "size": 46,
            "at": "l5:planet nine",
            "color": "coral",
            "hl": [
              {
                "text": "giả thuyết",
                "at": "l5:idea"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: NASA Science — Planet Sizes and Locations",
            "x": 2028,
            "y": 1825,
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
          "say": "Earth is about one hundred fifty million kilometres from the Sun.",
          "sub": "Trái Đất cách Mặt Trời khoảng 150 triệu km.",
          "keys": [
            "150 triệu km"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Neptune, thirty times farther: four and a half billion. The outer ones sit spread out.",
          "sub": "Hải Vương xa gấp khoảng 30 lần: chừng 4,5 tỷ km. Nhóm ngoài nằm thưa hơn nhiều.",
          "keys": [
            "4,5 tỷ km"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Beyond: the Kuiper belt, home of Pluto and many comets.",
          "sub": "Ngoài Hải Vương: vành đai Kuiper, nhà của Diêm Vương và nhiều sao chổi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Farther, maybe the Oort cloud, only worked out from comet paths.",
          "sub": "Xa nữa có thể là mây Oort: chưa thấy, chỉ suy ra từ quỹ đạo sao chổi.",
          "keys": [
            "suy ra"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Planet Nine? Just an idea. Nobody has seen it.",
          "sub": "Còn “Hành tinh Chín”? Mới là giả thuyết, chưa ai thấy.",
          "keys": [
            "giả thuyết"
          ]
        }
      ],
      "ref": "p12,p14"
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
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 19:00 Hố đen trước?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 5036,
            "y": 1230,
            "w": 600,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "hole"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:picks",
            "caption": "19:00 · chọn bài đọc",
            "icon": "hole"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop, seven p.m. Bin picks the scariest topic.",
          "sub": "Chặng sáu, bảy giờ tối. Bin chọn chủ đề đáng sợ nhất.",
          "keys": [
            "bảy giờ tối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Black holes first! Will one swallow our house?",
          "sub": "Hố đen trước ạ! Nó có nuốt nhà mình không?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Black holes are real, but the known ones are very far away. We are safe. Near to far, okay?",
          "sub": "Hố đen có thật, nhưng những hố đã biết đều ở rất xa. Nhà mình an toàn. Đi từ gần ra xa nhé?",
          "pose": "explain",
          "face": "happy",
          "react": {
            "bin": "happy"
          }
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s22",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình của Bin",
        "points": [
          {
            "label": "Tuần đầu",
            "sub": "Ngày đêm, bốn mùa",
            "illus": "globe-showing-asia-australia"
          },
          {
            "label": "Tuần sau",
            "sub": "Mặt Trăng, nhật thực",
            "illus": "crescent-moon"
          },
          {
            "label": "Rồi tới",
            "sub": "Kim, Hỏa, Mộc",
            "illus": "ringed-planet"
          },
          {
            "label": "Sau cùng",
            "sub": "Hố đen",
            "illus": "hole"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Day and night with a torch and an orange. Then the Moon.",
          "sub": "Ngày đêm với đèn pin, quả cam. Rồi Mặt Trăng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then the neighbours. Black holes last.",
          "sub": "Rồi hàng xóm. Hố đen sau cùng.",
          "keys": [
            "sau cùng"
          ]
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "h-b0",
            "t": "badge",
            "n": 1,
            "x": 3996,
            "y": 1240,
            "at": "l1:stand"
          },
          {
            "id": "h-r0",
            "t": "text",
            "text": "Ngày đêm, bốn mùa",
            "x": 4086,
            "y": 1245,
            "size": 42,
            "at": "l1:stand+200"
          },
          {
            "id": "h-b1",
            "t": "badge",
            "n": 2,
            "x": 3996,
            "y": 1330,
            "at": "l2:moon"
          },
          {
            "id": "h-r1",
            "t": "text",
            "text": "Mặt Trăng, nhật thực",
            "x": 4086,
            "y": 1335,
            "size": 42,
            "at": "l2:moon+200"
          },
          {
            "id": "h-b2",
            "t": "badge",
            "n": 3,
            "x": 3996,
            "y": 1420,
            "at": "l3:neighbours"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "Hàng xóm: Kim, Hỏa, Mộc",
            "x": 4086,
            "y": 1425,
            "size": 42,
            "at": "l3:neighbours+200"
          },
          {
            "id": "h-b3",
            "t": "badge",
            "n": 4,
            "x": 3996,
            "y": 1510,
            "at": "l4:comets"
          },
          {
            "id": "h-r3",
            "t": "text",
            "text": "Sao chổi, hố đen",
            "x": 4086,
            "y": 1515,
            "size": 42,
            "at": "l4:comets+200"
          },
          {
            "id": "h-b4",
            "t": "badge",
            "n": 5,
            "x": 3996,
            "y": 1600,
            "at": "l5:exploration"
          },
          {
            "id": "h-r4",
            "t": "text",
            "text": "Khám phá: Phạm Tuân, 1980",
            "x": 4086,
            "y": 1605,
            "size": 42,
            "at": "l5:exploration+200"
          },
          {
            "id": "h-near",
            "t": "text",
            "text": "Từ gần ra xa: hiểu, yên tâm",
            "x": 3996,
            "y": 1730,
            "size": 54,
            "at": "l6:near",
            "color": "accent",
            "hl": [
              {
                "text": "gần ra xa",
                "at": "l6:far"
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
          "say": "Start where we stand: seasons come from the tilt, not distance.",
          "sub": "Bắt đầu từ chỗ mình đứng: mùa do trục nghiêng, không do gần Mặt Trời.",
          "keys": [
            "chỗ mình đứng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the Moon's giant crash, and safe eclipse watching.",
          "sub": "Rồi vụ va chạm sinh ra Mặt Trăng, và nhật thực, xem cho an toàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Neighbours: hot Venus, life on Mars, giant Jupiter.",
          "sub": "Rồi hàng xóm: Sao Kim nóng, sự sống trên Sao Hỏa, Sao Mộc khổng lồ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then comets, and black holes far out in the Milky Way.",
          "sub": "Rồi sao chổi, và hố đen tận dải Ngân Hà."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Last, space exploration, with Phạm Tuân, first Vietnamese in space, nineteen eighty.",
          "sub": "Cuối cùng, con người khám phá vũ trụ, có Phạm Tuân, người Việt đầu tiên bay vào vũ trụ, năm 1980.",
          "keys": [
            "Phạm Tuân"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Near to far: your child understands, and feels safe.",
          "sub": "Từ gần ra xa: con vừa hiểu vừa yên tâm.",
          "keys": [
            "Từ gần ra xa"
          ]
        }
      ],
      "ref": "p15,p16,p17,p18,p19,p21"
    },
    {
      "id": "s24",
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
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 20:00 “Ngôi sao to”",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:last"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 7004,
            "y": 1230,
            "w": 600,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "tu",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "crescent-moon",
                "night-with-stars"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "bin",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:eight",
            "caption": "20:00 · ngoài sân",
            "icon": "crescent-moon"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop, eight p.m. And this is Grandma Tư, queen of the hand fan.",
          "sub": "Chặng cuối, tám giờ tối. Còn đây là bà Tư, nữ hoàng quạt nan.",
          "keys": [
            "tám giờ tối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Look, Bin. What a big star next to the Moon!",
          "sub": "Bin ơi, ngôi sao to cạnh Mặt Trăng kìa!",
          "pose": "point",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "It shines so steadily. It doesn't twinkle.",
          "sub": "Nó sáng đều quá, không lấp lánh ạ.",
          "face": "thinking",
          "to": "tu"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Not sure. Let's check the star map first.",
          "sub": "Ông chưa chắc. Mở bản đồ sao tra đã.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Found it. Not a star at all. It's a planet.",
          "sub": "Đây rồi. Chẳng phải sao đâu. Một hành tinh đấy.",
          "face": "happy",
          "react": {
            "tu": "surprised",
            "bin": "happy"
          }
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p24,p22"
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
          }
        ],
        "items": [
          {
            "id": "i-st",
            "t": "illus",
            "name": "glowing-star",
            "x": 5964,
            "y": 1230,
            "size": 80,
            "at": "l1:stars"
          },
          {
            "id": "i-stl",
            "t": "text",
            "text": "Sao: rất xa → lấp lánh",
            "x": 6064,
            "y": 1245,
            "size": 44,
            "at": "l1:twinkle",
            "hl": [
              {
                "text": "lấp lánh",
                "at": "l1:twinkle"
              }
            ]
          },
          {
            "id": "i-pl",
            "t": "illus",
            "name": "ringed-planet",
            "x": 5964,
            "y": 1330,
            "size": 80,
            "at": "l2:planets"
          },
          {
            "id": "i-pll",
            "t": "text",
            "text": "Hành tinh: gần → sáng đều",
            "x": 6064,
            "y": 1345,
            "size": 44,
            "at": "l2:steadily",
            "hl": [
              {
                "text": "sáng đều",
                "at": "l2:steadily"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Mắt thường: Thủy Kim Hỏa Mộc Thổ",
            "x": 5964,
            "y": 1450,
            "size": 42,
            "at": "l2:closer",
            "color": "muted"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Sáng đều: hành tinh",
            "x": 5964,
            "y": 1540,
            "size": 56,
            "at": "l3:steady",
            "color": "accent",
            "hl": [
              {
                "text": "Sáng đều",
                "at": "l3:steady"
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
          "say": "Stars are very far, mere points, so the air makes them twinkle.",
          "sub": "Sao rất xa, chỉ là điểm sáng, nên không khí làm nó lấp lánh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Planets are closer, tiny disks, so they shine more steadily.",
          "sub": "Hành tinh gần hơn, như cái đĩa tí xíu, nên sáng đều hơn.",
          "keys": [
            "sáng đều hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Steady usually means a planet. Twinkling usually means a star.",
          "sub": "Sáng đều thường là hành tinh, lấp lánh thường là sao.",
          "keys": [
            "Sáng đều thường là hành tinh"
          ]
        }
      ],
      "ref": "p24,p25"
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
          }
        ],
        "items": [
          {
            "id": "i-a-c0",
            "t": "box",
            "x": 5964,
            "y": 1650,
            "w": 46,
            "h": 46,
            "at": "l1:short",
            "stroke": 5
          },
          {
            "id": "i-a-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1632,
            "size": 58,
            "at": "l1:short+600",
            "color": "accent"
          },
          {
            "id": "i-a-l0",
            "t": "text",
            "text": "Trả lời ngắn trước",
            "x": 6034,
            "y": 1642,
            "size": 40,
            "at": "l1:short+200"
          },
          {
            "id": "i-a-c1",
            "t": "box",
            "x": 5964,
            "y": 1720,
            "w": 46,
            "h": 46,
            "at": "l2:home",
            "stroke": 5
          },
          {
            "id": "i-a-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1702,
            "size": 58,
            "at": "l2:home+600",
            "color": "accent"
          },
          {
            "id": "i-a-l1",
            "t": "text",
            "text": "Dùng đồ trong nhà",
            "x": 6034,
            "y": 1712,
            "size": 40,
            "at": "l2:home+200"
          },
          {
            "id": "i-a-c2",
            "t": "box",
            "x": 5964,
            "y": 1790,
            "w": 46,
            "h": 46,
            "at": "l2:look",
            "stroke": 5
          },
          {
            "id": "i-a-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1772,
            "size": 58,
            "at": "l2:look+600",
            "color": "accent"
          },
          {
            "id": "i-a-l2",
            "t": "text",
            "text": "Chưa chắc: tra rồi kể",
            "x": 6034,
            "y": 1782,
            "size": 40,
            "at": "l2:look+200"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Tra: cơ quan vũ trụ, bảo tàng",
            "x": 6724,
            "y": 1650,
            "size": 40,
            "at": "l3:space",
            "hl": [
              {
                "text": "cơ quan vũ trụ",
                "at": "l3:agencies"
              }
            ]
          },
          {
            "id": "i-clk",
            "t": "text",
            "text": "Video giật tít: không làm căn cứ",
            "x": 6724,
            "y": 1730,
            "size": 36,
            "at": "l3:clickbait",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "See how Grandpa answered? Short first. More if the child wants.",
          "sub": "Thấy ông trả lời chưa? Ngắn trước, giải thích thêm nếu con còn tò mò.",
          "keys": [
            "Ngắn trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Use home objects. Unsure? Look it up. A made up answer sticks for years.",
          "sub": "Dùng đồ quanh nhà. Chưa chắc thì tra rồi kể. Bịa đại, con nhớ sai rất lâu.",
          "keys": [
            "tra rồi kể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check space agencies, museums, new textbooks. Clickbait videos? A chat starter, never proof.",
          "sub": "Tra ở cơ quan vũ trụ, bảo tàng, sách mới. Video giật tít? Mở chuyện thì được, làm căn cứ thì không.",
          "keys": [
            "làm căn cứ thì không"
          ]
        }
      ],
      "ref": "p22,p23"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:your turn"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 56,
            "h": 56,
            "at": "l1",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1230,
            "size": 70,
            "at": "l1+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Lưu bản đồ chuỗi bài",
            "x": 8012,
            "y": 1250,
            "size": 46,
            "at": "l1+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1360,
            "w": 56,
            "h": 56,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1340,
            "size": 70,
            "at": "l2+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Hỏi con tò mò điều gì",
            "x": 8012,
            "y": 1360,
            "size": 46,
            "at": "l2+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1470,
            "w": 56,
            "h": 56,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1450,
            "size": 70,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Cùng chọn bài đầu tiên",
            "x": 8012,
            "y": 1470,
            "size": 46,
            "at": "l3+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Save this series map.",
          "sub": "Đến lượt bạn. Lưu bản đồ chuỗi bài này.",
          "keys": [
            "bản đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask your child what they're most curious about.",
          "sub": "Hỏi con tò mò nhất điều gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick the first article together.",
          "sub": "Cùng chọn bài đọc đầu tiên."
        }
      ],
      "ref": "outro"
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.4,
            "ms": 800
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 800
          }
        ],
        "items": [
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "open-book",
                "soccer-ball"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "bin",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "7:00 thứ Hai · vẫn cái bàn ấy",
            "icon": "open-book"
          },
          {
            "id": "j-end",
            "t": "text",
            "text": "Sách đúng, ông cũng đúng",
            "x": 7932,
            "y": 1610,
            "size": 50,
            "at": "l5:both",
            "color": "accent",
            "hl": [
              {
                "text": "ông cũng đúng",
                "at": "l5:both"
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
          "say": "Monday, seven a.m. Same table, same book.",
          "sub": "Bảy giờ sáng thứ Hai. Vẫn cái bàn ấy, cuốn sách ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Eight planets, Grandpa. You weren't wrong. Just early!",
          "sub": "Tám hành tinh ông ạ. Ông không sai. Chỉ là học sớm!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And your model?",
          "sub": "Còn mô hình của cháu?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "Note added: not to scale!",
          "sub": "Ghi rồi ạ: không đúng tỉ lệ!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Both right. Science just kept going.",
          "sub": "Sách đúng, ông cũng đúng với thời của ông. Khoa học chỉ đi tiếp thôi.",
          "keys": [
            "Khoa học chỉ đi tiếp"
          ]
        }
      ],
      "ref": "p5,p11,outro"
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
            "at": 100,
            "fit": "all",
            "ms": 1200
          },
          {
            "at": "l2:one+300",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3:two",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:three",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4836,
            "y": 420,
            "at": "l2:one"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 960,
            "y": 1650,
            "at": "l3:two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6904,
            "y": 1550,
            "at": "l4:three"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-rule"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:steady"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: eight planets, three conditions.",
          "sub": "Một: tám hành tinh, ba điều kiện.",
          "keys": [
            "ba điều kiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: a pretty model needs a note: not to scale.",
          "sub": "Hai: mô hình đẹp nhớ ghi “không đúng tỉ lệ”.",
          "keys": [
            "không đúng tỉ lệ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: a steady light is usually a planet.",
          "sub": "Ba: sáng đều thường là hành tinh.",
          "keys": [
            "sáng đều"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p2,p11,p25,outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "ref": "questions[3]",
      "data": {
        "q": "Why is Pluto no longer called a planet?",
        "options": [
          "It shares its path with many icy objects, so it has not cleared its orbit",
          "It stopped going around the Sun and now travels alone in empty space",
          "Scientists found out that it does not really exist and was a mistake"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "ringed-planet",
        "why": "Diêm Vương vẫn tròn, vẫn quay quanh Mặt Trời, chỉ trượt điều kiện thứ ba."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is Pluto no longer called a planet?",
          "sub": "Vì sao Sao Diêm Vương không còn được gọi là hành tinh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It shares its path with many icy objects, so it has not cleared its orbit.",
          "sub": "Nó chung đường với nhiều vật thể băng giá, nên chưa dọn sạch quỹ đạo."
        }
      ],
      "beats": {
        "after": 800
      }
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
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
