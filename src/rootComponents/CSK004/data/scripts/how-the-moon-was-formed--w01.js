// Kịch bản video W lần 3 (#110) — "Mặt Trăng hình thành như thế nào?" · chuỗi "Hệ Mặt Trời và vũ trụ"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ; đủ ý để làm 40 câu.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-the-moon-was-formed--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "space-curious",
    "slug": "how-the-moon-was-formed",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Mặt Trăng hình thành như thế nào?",
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
  "notes": "#145 dựng lại theo hạt nhân #136 + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô đi theo MỘT THÁNG TRĂNG của Bin (đêm rằm “trăng ở đâu ra?” → ① rằm: to, xa, “đèn lồng?” (⚖️ p3) → ② đêm 16 sách cũ, ba giả thuyết, “Khoan đã!” (DLG ❓ p7) → ③ đêm 17 đá Apollo → ④ đêm 18 hai viên đất nặn, Theia → ⑤ mồng 1 trăng non, bà Tư “mặt tối” (⚖️ p16) → ⑥ mồng 4 lưỡi liềm, đèn pin + quả bóng (🧪 p19) → ⑦ mồng 10 biển, thủy triều, gần 4 cm/năm → rằm tháng sau khép vòng). Chuỗi space-curious (w145/_series). Ngắt nhịp: BRK-06 montage ba giả thuyết cũ, BRK-07 rehook “một mặt”, BRK-01 dừng hình “mặt tối”. Ca dao “Mồng một lưỡi trai…”. Số liệu chỉ từ bài (3.475 km, ¼, 384.000 km, 1969–1972, hàng trăm ký, 4,5 tỷ năm, gần 4 cm/năm). Bản cũ (W lần 3, #110): w145/bak/how-the-moon-was-formed--w01.js.",
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
            "text": "~4 cm/năm",
            "x": 60,
            "y": 110,
            "size": 180,
            "at": "l1:four",
            "color": "accent",
            "hl": [
              {
                "text": "~4 cm",
                "at": "l1:centimetres"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "Mặt Trăng đang rời xa ta",
            "x": 70,
            "y": 360,
            "size": 56,
            "at": "l1:moving",
            "hl": [
              {
                "text": "rời xa",
                "at": "l1:away"
              }
            ]
          },
          {
            "id": "a-nail",
            "t": "text",
            "text": "chậm như móng tay mọc",
            "x": 70,
            "y": 460,
            "size": 52,
            "at": "l2:fingernails",
            "color": "muted"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: bài học · NASA Science — Tidal Locking; Moon Facts",
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
          "say": "Almost four centimetres a year. That's how fast the Moon is moving away from us.",
          "sub": "Gần bốn xăng-ti-mét mỗi năm: Mặt Trăng đang rời xa ta.",
          "keys": [
            "Gần bốn xăng-ti-mét"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't panic. That's about as fast as your fingernails grow.",
          "sub": "Đừng hoảng. Chậm cỡ móng tay mọc thôi.",
          "keys": [
            "móng tay mọc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p21"
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
              "set": "park",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "full-moon",
                "night-with-stars"
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
            "caption": "Đêm rằm · ngoài sân",
            "icon": "full-moon"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Bin: “Trăng ở đâu ra?”",
            "x": 920,
            "y": 650,
            "size": 50,
            "at": "l3:come",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Bin, nine, a professional sky watcher.",
          "sub": "Đây là Bin, chín tuổi, chuyên gia ngắm trời."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And his grandpa, Mr Bình. Full moon night, mid month, in the yard.",
          "sub": "Còn đây là ông Bình. Đêm rằm, ngoài sân.",
          "keys": [
            "Đêm rằm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, where did the Moon come from?",
          "sub": "Ông ơi, Mặt Trăng ở đâu ra ạ?",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Hmm. It's in an old book somewhere.",
          "sub": "Ờ… có trong một cuốn sách cũ của ông.",
          "face": "thinking",
          "pose": "hold"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So Bin decides: draw the Moon every night for a month.",
          "sub": "Thế là Bin quyết: vẽ trăng mỗi tối, trọn một tháng.",
          "keys": [
            "vẽ trăng mỗi tối"
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
      "ref": "intro,p7"
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
            "text": "Mặt Trăng từ đâu ra?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:come",
            "hl": [
              {
                "text": "từ đâu ra",
                "at": "l1:from"
              }
            ]
          },
          {
            "id": "b-ans",
            "t": "text",
            "text": "~4,5 tỷ năm trước: va chạm",
            "x": 2028,
            "y": 150,
            "size": 52,
            "at": "l2:billion",
            "color": "accent",
            "hl": [
              {
                "text": "va chạm",
                "at": "l2:crashed"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: sự thật đã chốt",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l3:proven",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:proven+500"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: giả thuyết, nhiều bằng chứng",
            "x": 2028,
            "y": 340,
            "size": 54,
            "at": "l3:hypothesis",
            "color": "accent",
            "hl": [
              {
                "text": "giả thuyết",
                "at": "l3:hypothesis"
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
          "say": "So where did the Moon come from?",
          "sub": "Vậy Mặt Trăng từ đâu ra?",
          "keys": [
            "từ đâu ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Best supported answer: about four and a half billion years ago, a Mars sized body crashed into the young Earth.",
          "sub": "Câu trả lời được ủng hộ nhất: khoảng 4,5 tỷ năm trước, một thiên thể cỡ Sao Hỏa đâm vào Trái Đất non trẻ.",
          "keys": [
            "4,5 tỷ năm trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a proven fact. A hypothesis, with plenty of evidence.",
          "sub": "Chưa phải sự thật đã chốt. Là giả thuyết, nhưng nhiều bằng chứng.",
          "keys": [
            "giả thuyết"
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
            "text": "7 chặng · 1 tháng trăng",
            "x": 2028,
            "y": 470,
            "size": 56,
            "at": "l1:seven",
            "hl": [
              {
                "text": "1 tháng trăng",
                "at": "l1:moon"
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
            "text": "Rằm",
            "x": 2048,
            "y": 590,
            "size": 46,
            "at": "l1:stops+320"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "16",
            "x": 2280,
            "y": 590,
            "size": 46,
            "at": "l1:stops+580"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "17",
            "x": 2512,
            "y": 590,
            "size": 46,
            "at": "l1:stops+840"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "18",
            "x": 2744,
            "y": 590,
            "size": 46,
            "at": "l1:stops+1100"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Mồng 1",
            "x": 2976,
            "y": 590,
            "size": 46,
            "at": "l1:stops+1360"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Mồng 4",
            "x": 3208,
            "y": 590,
            "size": 46,
            "at": "l1:stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Mồng 10",
            "x": 3440,
            "y": 590,
            "size": 46,
            "at": "l1:stops+1880"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One moon month, seven stops, one drawing every night.",
          "sub": "Một tháng trăng, bảy chặng, mỗi tối một bức vẽ.",
          "keys": [
            "Một tháng trăng"
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
            "text": "① Rằm · Trăng có đèn?",
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
              "set": "park",
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
                "full-moon"
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
            "at": "l1:drawing",
            "caption": "Rằm · bức vẽ số 1",
            "icon": "full-moon"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop, that same full moon. Drawing number one.",
          "sub": "Chặng một, vẫn đêm rằm. Bức vẽ số một.",
          "keys": [
            "Bức vẽ số một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "It glows like a lantern up there!",
          "sub": "Trăng sáng như cái đèn lồng ông ạ!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "A lantern needs a lamp inside. Does the Moon have one?",
          "sub": "Đèn lồng thì phải có đèn bên trong. Trăng có không?",
          "pose": "explain"
        }
      ],
      "ref": "p3"
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
            "id": "c-earth",
            "t": "ring",
            "x": 3996,
            "y": 160,
            "w": 200,
            "h": 200,
            "at": "l1:quarter",
            "stroke": 6
          },
          {
            "id": "c-el",
            "t": "text",
            "text": "Trái Đất",
            "x": 4026,
            "y": 370,
            "size": 36,
            "at": "l1:earth"
          },
          {
            "id": "c-moon",
            "t": "ring",
            "x": 4696,
            "y": 225,
            "w": 56,
            "h": 56,
            "at": "l1:wide",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "~3.475 km, gần ¼ Trái Đất",
            "x": 4536,
            "y": 300,
            "size": 38,
            "at": "l1:three",
            "hl": [
              {
                "text": "gần ¼",
                "at": "l1:quarter"
              }
            ]
          },
          {
            "id": "c-dist",
            "t": "line",
            "pts": [
              [
                4206,
                255
              ],
              [
                4686,
                255
              ]
            ],
            "at": "l2:away",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "c-km",
            "t": "text",
            "text": "~384.000 km",
            "x": 4316,
            "y": 200,
            "size": 40,
            "at": "l2:thousand",
            "hl": [
              {
                "text": "~384.000 km",
                "at": "l2:kilometres"
              }
            ]
          },
          {
            "id": "c-big",
            "t": "text",
            "text": "vệ tinh rất lớn",
            "x": 3996,
            "y": 430,
            "size": 40,
            "at": "l3:big",
            "color": "muted"
          },
          {
            "id": "c-lan",
            "t": "text",
            "text": "Đèn lồng?",
            "x": 3996,
            "y": 520,
            "size": 50,
            "at": "l4:lamp",
            "color": "muted"
          },
          {
            "id": "c-lanx",
            "t": "strike",
            "over": "c-lan",
            "at": "l4:no"
          },
          {
            "id": "c-mir",
            "t": "text",
            "text": "Đá xám mượn nắng, như gương",
            "x": 4256,
            "y": 520,
            "size": 50,
            "at": "l5:borrows",
            "color": "accent",
            "hl": [
              {
                "text": "mượn nắng",
                "at": "l5:borrows"
              }
            ]
          },
          {
            "id": "c-dark",
            "t": "text",
            "text": "Rằm rực rỡ: trời quanh tối",
            "x": 3996,
            "y": 610,
            "size": 42,
            "at": "l6:dark"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: NASA Science — Moon Facts",
            "x": 5036,
            "y": 735,
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
          "say": "About three thousand four hundred seventy five kilometres wide: nearly a quarter of Earth.",
          "sub": "Mặt Trăng rộng khoảng 3.475 km, gần bằng một phần tư Trái Đất.",
          "keys": [
            "một phần tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On average, about three hundred eighty four thousand kilometres away.",
          "sub": "Cách ta trung bình khoảng 384.000 km.",
          "keys": [
            "384.000 km"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Big for its planet. So scientists wonder about its origin.",
          "sub": "Vệ tinh rất lớn so với hành tinh mẹ, nên các nhà khoa học tò mò nguồn gốc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lamp inside? No. It's a grey, fairly dark rock.",
          "sub": "Đèn bên trong? Không. Chỉ là khối đá xám, khá tối."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Sunlight hits it and bounces to our eyes. The Moon borrows light, like a mirror.",
          "sub": "Nắng chiếu vào rồi phản chiếu tới mắt ta. Trăng mượn nắng, như cái gương.",
          "keys": [
            "Trăng mượn nắng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A full moon dazzles partly because the sky is so dark.",
          "sub": "Trăng rằm rực rỡ một phần vì bầu trời quanh nó quá tối."
        }
      ],
      "ref": "p1,p2,p3,p4"
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
            "at": "l2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Đêm 16 · Cuốn sách cũ",
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
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "closed-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "binh",
                  "move": "push"
                }
              ]
            },
            "at": "l1:book",
            "caption": "Đêm 16 · sách cũ của ông",
            "icon": "closed-book"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, the next night. Grandpa finds the old book.",
          "sub": "Chặng hai, đêm hôm sau. Ông tìm ra cuốn sách cũ.",
          "keys": [
            "cuốn sách cũ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Here. Before Moon rocks, people had three main guesses.",
          "sub": "Đây. Trước khi có đá Mặt Trăng, người ta có ba giả thuyết chính.",
          "pose": "hold"
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "BRK-06",
      "data": {
        "title": "Ba giả thuyết cũ",
        "items": [
          {
            "illus": "globe-showing-asia-australia",
            "text": "Văng ra"
          },
          {
            "illus": "full-moon",
            "text": "Bị bắt giữ"
          },
          {
            "illus": "handshake",
            "text": "Cùng hình thành"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Split off. Captured. Formed side by side.",
          "sub": "Văng ra. Bị bắt giữ. Cùng hình thành."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three old guesses.",
          "sub": "Ba giả thuyết cũ."
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
      "id": "s09",
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
            "id": "d-h1",
            "t": "text",
            "text": "Văng ra từ Trái Đất quay nhanh",
            "x": 5964,
            "y": 150,
            "size": 44,
            "at": "l1:split"
          },
          {
            "id": "d-p1",
            "t": "text",
            "text": "→ khó quay nhanh thế",
            "x": 6024,
            "y": 215,
            "size": 40,
            "at": "l1:hardly",
            "color": "coral"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "Bị Trái Đất “bắt giữ”",
            "x": 5964,
            "y": 300,
            "size": 44,
            "at": "l2:captured"
          },
          {
            "id": "d-p2",
            "t": "text",
            "text": "→ vật to thế, rất khó bắt",
            "x": 6024,
            "y": 365,
            "size": 40,
            "at": "l2:hard",
            "color": "coral"
          },
          {
            "id": "d-h3",
            "t": "text",
            "text": "Cùng hình thành cạnh nhau",
            "x": 5964,
            "y": 450,
            "size": 44,
            "at": "l3:together"
          },
          {
            "id": "d-p3",
            "t": "text",
            "text": "→ lõi sắt lại quá nhỏ",
            "x": 6024,
            "y": 515,
            "size": 40,
            "at": "l3:core",
            "color": "coral",
            "hl": [
              {
                "text": "quá nhỏ",
                "at": "l3:small"
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
          "say": "Split off from a fast spinning Earth? Earth could hardly spin that fast.",
          "sub": "Văng ra từ Trái Đất quay nhanh? Trái Đất khó quay nhanh đến thế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Captured as it passed by? Catching something that big is very hard.",
          "sub": "Bị bắt giữ khi đi ngang? Bắt một vật to thế rất khó."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Formed together? Then it needs a big iron core like Earth. Its core is small.",
          "sub": "Cùng hình thành? Thì phải có lõi sắt lớn như Trái Đất. Mà lõi nó rất nhỏ.",
          "keys": [
            "lõi nó rất nhỏ"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "ref": "p7,p8",
      "data": {
        "set": "home",
        "label": "Đêm 16 · Kể lại sách cũ",
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
          "label": "Kể giả thuyết cũ như sự thật",
          "why": "Tách ra chỉ là một trong ba giả thuyết cũ, và nó vướng chỗ khó.",
          "rule": "Khoa học chưa chốt thì nói “giả thuyết”"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "bin",
          "say": "So which one is true, Grandpa?",
          "sub": "Vậy cái nào đúng hả ông?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "The first. It's a fact. The Moon split off from Earth.",
          "sub": "Cái đầu. Sự thật là vậy: trăng tách ra từ Trái Đất.",
          "pose": "explain",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold on!",
          "sub": "Khoan đã!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's one of three old ideas, with a big problem. Not a fact.",
          "sub": "Đó chỉ là một trong ba giả thuyết cũ, lại vướng chỗ khó. Không phải sự thật.",
          "keys": [
            "giả thuyết cũ"
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
          "who": "binh",
          "say": "People used to think that. Now most scientists back a giant crash. Still a hypothesis.",
          "sub": "Ngày xưa người ta nghĩ thế. Giờ phần đông ủng hộ một vụ va chạm. Vẫn là giả thuyết.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain",
          "keys": [
            "Vẫn là giả thuyết"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "bin",
          "say": "A crash? Tell me more!",
          "sub": "Va chạm ạ? Ông kể tiếp đi!",
          "phase": "redo",
          "face": "surprised"
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
            "id": "d-rule",
            "t": "text",
            "text": "Chưa chốt → nói “giả thuyết”",
            "x": 5964,
            "y": 640,
            "size": 56,
            "at": "l1:hypothesis",
            "color": "accent",
            "hl": [
              {
                "text": "giả thuyết",
                "at": "l1:hypothesis"
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
          "say": "When science hasn't decided, say hypothesis.",
          "sub": "Khoa học chưa chốt thì mình nói “giả thuyết”.",
          "keys": [
            "giả thuyết"
          ]
        }
      ],
      "ref": "p8"
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
            "text": "③ Đêm 17 · Đá từ Mặt Trăng",
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
                "rock",
                "rocket"
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
            "at": "l1:documentary",
            "caption": "Đêm 17 · phim tài liệu",
            "icon": "rocket"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop. Night seventeen, a space documentary.",
          "sub": "Chặng ba. Đêm 17, ti vi chiếu phim tài liệu vũ trụ.",
          "keys": [
            "Đêm 17"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, did anyone bring back a piece of the Moon?",
          "sub": "Ông ơi, có ai mang được mẩu Mặt Trăng về không?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Hundreds of kilos. Best evidence we have.",
          "sub": "Hàng trăm ký. Bằng chứng quý nhất đấy.",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "ref": "p9"
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
            "id": "e-rk",
            "t": "illus",
            "name": "rock",
            "x": 7932,
            "y": 150,
            "size": 90,
            "at": "l1:apollo"
          },
          {
            "id": "e-ap",
            "t": "text",
            "text": "Apollo 1969–1972: hàng trăm ký đá, đất",
            "x": 8042,
            "y": 170,
            "size": 40,
            "at": "l1:sixty",
            "hl": [
              {
                "text": "hàng trăm ký",
                "at": "l1:hundreds"
              }
            ]
          },
          {
            "id": "e-same",
            "t": "text",
            "text": "Giống: đá dưới vỏ Trái Đất",
            "x": 7932,
            "y": 280,
            "size": 40,
            "at": "l2:fingerprint",
            "hl": [
              {
                "text": "Giống",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "e-diff",
            "t": "text",
            "text": "Khác: khô, nghèo sắt",
            "x": 7932,
            "y": 360,
            "size": 40,
            "at": "l3:dry",
            "color": "coral",
            "hl": [
              {
                "text": "nghèo sắt",
                "at": "l3:iron"
              }
            ]
          },
          {
            "id": "e-melt",
            "t": "text",
            "text": "từng nóng chảy",
            "x": 8352,
            "y": 360,
            "size": 40,
            "at": "l3:melted",
            "color": "coral"
          },
          {
            "id": "e-fit",
            "t": "text",
            "text": "→ hợp giả thuyết va chạm",
            "x": 7932,
            "y": 450,
            "size": 50,
            "at": "l4:crash",
            "color": "accent",
            "hl": [
              {
                "text": "va chạm",
                "at": "l4:crash"
              }
            ]
          },
          {
            "id": "e-why",
            "t": "text",
            "text": "đá ngoài văng ra; sắt chìm",
            "x": 7932,
            "y": 530,
            "size": 38,
            "at": "l5:outer",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "From nineteen sixty nine to seventy two, Apollo brought back hundreds of kilos of Moon rock and soil.",
          "sub": "Từ 1969 đến 1972, phi hành gia Apollo mang về hàng trăm ký đá và đất Mặt Trăng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Their chemical fingerprint is almost the same as the rock under Earth's crust.",
          "sub": "“Dấu vân tay hoá học” gần như giống hệt đá bên dưới vỏ Trái Đất.",
          "keys": [
            "Dấu vân tay hoá học"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But very dry, low in iron, and once melted into an ocean of hot rock.",
          "sub": "Nhưng đá rất khô, nghèo sắt, bề mặt từng nóng chảy thành đại dương đá nóng.",
          "keys": [
            "nghèo sắt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Similar yet different: that fits the crash idea best.",
          "sub": "Giống mà lại khác: hợp nhất với giả thuyết va chạm.",
          "keys": [
            "giả thuyết va chạm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Mostly outer rock flew off, losing water. Heavy iron sank into Earth's core.",
          "sub": "Mảnh văng ra chủ yếu là đá lớp ngoài, mất nước; sắt nặng chìm vào lõi Trái Đất."
        }
      ],
      "ref": "p9,p10,p11"
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
          },
          {
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Đêm 18 · Hai viên đất nặn",
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
                  "pose": "give"
                }
              ],
              "props": [
                "collision"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "bin",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:clay",
            "caption": "Đêm 18 · đất nặn",
            "icon": "collision"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop, night eighteen. Clay on the table.",
          "sub": "Chặng bốn, đêm 18. Đất nặn trên bàn.",
          "keys": [
            "Đất nặn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "A small planet hit Earth, like two clay balls smashing. The bits flew round, then rolled into the Moon.",
          "sub": "Một hành tinh nhỏ đâm vào Trái Đất, như hai viên đất nặn đập nhau. Mảnh văng bay vòng, rồi vo lại thành trăng.",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Smash! I made a moon!",
          "sub": "Bốp! Cháu nặn ra trăng rồi!",
          "face": "happy",
          "pose": "hold"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop"
        }
      ],
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "f-earth",
            "t": "ring",
            "x": 60,
            "y": 1310,
            "w": 200,
            "h": 200,
            "at": "l1:young",
            "stroke": 6
          },
          {
            "id": "f-theia",
            "t": "ring",
            "x": 330,
            "y": 1230,
            "w": 110,
            "h": 110,
            "at": "l1:mars",
            "stroke": 6,
            "color": "coral"
          },
          {
            "id": "f-tl",
            "t": "text",
            "text": "Theia, cỡ Sao Hỏa",
            "x": 450,
            "y": 1240,
            "size": 40,
            "at": "l1:theia",
            "color": "coral",
            "hl": [
              {
                "text": "Theia",
                "at": "l1:theia"
              }
            ]
          },
          {
            "id": "f-hit",
            "t": "arrow",
            "from": [
              340,
              1340
            ],
            "to": [
              250,
              1390
            ],
            "at": "l1:angle",
            "color": "coral",
            "stroke": 7
          },
          {
            "id": "f-ring",
            "t": "ring",
            "x": 20,
            "y": 1270,
            "w": 280,
            "h": 280,
            "at": "l2:ring",
            "dash": true,
            "color": "muted"
          },
          {
            "id": "f-moon",
            "t": "ring",
            "x": 330,
            "y": 1470,
            "w": 50,
            "h": 50,
            "at": "l2:moon",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "vành đá nóng → vo lại thành trăng",
            "x": 400,
            "y": 1475,
            "size": 40,
            "at": "l2:together",
            "hl": [
              {
                "text": "thành trăng",
                "at": "l2:moon"
              }
            ]
          },
          {
            "id": "f-open",
            "t": "text",
            "text": "Câu hỏi mở: sao giống thế?",
            "x": 60,
            "y": 1680,
            "size": 42,
            "at": "l3:why",
            "color": "coral",
            "hl": [
              {
                "text": "sao giống",
                "at": "l3:like"
              }
            ]
          },
          {
            "id": "f-seen",
            "t": "text",
            "text": "Theia: chưa ai thấy, suy ra",
            "x": 60,
            "y": 1760,
            "size": 42,
            "at": "l5:seen",
            "hl": [
              {
                "text": "suy ra",
                "at": "l5:clues"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: NASA Science — Moon Formation; Britannica",
            "x": 1100,
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
          "say": "About four and a half billion years ago, a Mars sized body named Theia hit the young Earth at an angle.",
          "sub": "Khoảng 4,5 tỷ năm trước, một thiên thể cỡ Sao Hỏa tên Theia đâm chéo vào Trái Đất non trẻ.",
          "keys": [
            "Theia"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Melted rock and rock vapour made a ring around Earth, then slowly came together as the Moon.",
          "sub": "Đá nóng chảy và hơi đá tạo vành quanh Trái Đất, rồi kết dần thành Mặt Trăng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Open question: in many simulations, Theia gives most of the material. So why so much like Earth?",
          "sub": "Câu hỏi mở: nhiều mô phỏng cho Theia góp phần lớn vật liệu. Vậy sao trăng giống Trái Đất thế?",
          "keys": [
            "Câu hỏi mở"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Other versions are being tested. In some, Earth gives more.",
          "sub": "Các nhà khoa học đang thử phiên bản khác, có bản cho Trái Đất góp nhiều hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And Theia? Nobody has seen it. It was worked out from clues.",
          "sub": "Còn Theia? Chưa ai thấy, chỉ suy ra từ bằng chứng.",
          "keys": [
            "suy ra từ bằng chứng"
          ]
        }
      ],
      "ref": "p12,p13,p14"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Trăng mới vo xong, sao ta chỉ thấy một mặt?",
        "illus": "full-moon-face"
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
          "say": "If the Moon spins, why do we only ever see one face?",
          "sub": "Trăng cũng tự quay, sao ta chỉ thấy một mặt?",
          "keys": [
            "một mặt"
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
            "at": "l4:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Mồng 1 · Trăng non",
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
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "new-moon"
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
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:grandma",
            "caption": "Mồng 1 · ảnh mặt khuất",
            "icon": "new-moon"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop, new moon. And this is Grandma Tư, queen of photo albums.",
          "sub": "Chặng năm, mồng một, trăng non. Còn đây là bà Tư, nữ hoàng album ảnh.",
          "keys": [
            "trăng non"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Grandma, this photo of the Moon's far side is so bright!",
          "sub": "Bà ơi, ảnh mặt sau Mặt Trăng sáng quá!",
          "face": "surprised",
          "pose": "hold",
          "to": "tu"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Must be wrong. The back of the Moon is the dark side. It never gets light.",
          "sub": "Chắc ảnh sai. Mặt sau là mặt tối, quanh năm không có ánh sáng.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "Really? Never?",
          "sub": "Thật ạ? Không bao giờ?",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s18",
      "module": "BRK-01",
      "data": {
        "illus": "new-moon-face",
        "around": [
          "sun",
          "camera-with-flash"
        ],
        "label": "Sai ở đây!",
        "note": "Mặt khuất vẫn có ngày và đêm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stop right there.",
          "sub": "Dừng lại đã."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The far side has day and night too.",
          "sub": "Mặt khuất vẫn có ngày và đêm.",
          "keys": [
            "ngày và đêm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "re-dia"
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "g-earth",
            "t": "ring",
            "x": 2028,
            "y": 1350,
            "w": 140,
            "h": 140,
            "at": "l1:spins",
            "stroke": 6
          },
          {
            "id": "g-orbit",
            "t": "ring",
            "x": 1988,
            "y": 1270,
            "w": 560,
            "h": 300,
            "at": "l1:around",
            "dash": true,
            "color": "muted"
          },
          {
            "id": "g-moon",
            "t": "ring",
            "x": 2448,
            "y": 1390,
            "w": 60,
            "h": 60,
            "at": "l1:same",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Tự quay = quay quanh",
            "x": 2028,
            "y": 1590,
            "size": 44,
            "at": "l1:once",
            "hl": [
              {
                "text": "= quay quanh",
                "at": "l1:around"
              }
            ]
          },
          {
            "id": "g-face",
            "t": "text",
            "text": "→ luôn một mặt hướng về ta",
            "x": 2028,
            "y": 1650,
            "size": 44,
            "at": "l2:face",
            "color": "accent",
            "hl": [
              {
                "text": "một mặt",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "g-far",
            "t": "text",
            "text": "Mặt khuất: tàu vũ trụ thấy",
            "x": 2588,
            "y": 1290,
            "size": 40,
            "at": "l2:spacecraft"
          },
          {
            "id": "g-dark",
            "t": "text",
            "text": "“Mặt tối”",
            "x": 2588,
            "y": 1390,
            "size": 46,
            "at": "l3:dark",
            "color": "muted"
          },
          {
            "id": "g-darkx",
            "t": "strike",
            "over": "g-dark",
            "at": "l3:faces"
          },
          {
            "id": "g-new",
            "t": "text",
            "text": "Trăng non: mặt khuất được nắng",
            "x": 2028,
            "y": 1730,
            "size": 42,
            "at": "l4:new moon",
            "color": "coral",
            "hl": [
              {
                "text": "được nắng",
                "at": "l4:lit"
              }
            ]
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Mặt khuất ≠ mặt tối",
            "x": 2588,
            "y": 1470,
            "size": 50,
            "at": "l5:hidden",
            "color": "accent",
            "hl": [
              {
                "text": "≠ mặt tối",
                "at": "l5:dark"
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
          "say": "The Moon spins once in the same time it takes to go around Earth.",
          "sub": "Mặt Trăng tự quay một vòng đúng bằng thời gian nó quay quanh Trái Đất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So it always shows the same face. The far side: only spacecraft see it.",
          "sub": "Nên luôn hướng một mặt về ta. Mặt bên kia, mặt khuất, chỉ tàu vũ trụ nhìn được.",
          "keys": [
            "một mặt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a dark side. It just faces away from Earth.",
          "sub": "Không phải mặt tối. Nó chỉ luôn quay ra xa Trái Đất."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At new moon, the far side is almost fully lit. Hence the bright photo.",
          "sub": "Đêm nay trăng non, mặt khuất được nắng chiếu gần hết. Nên ảnh mới sáng.",
          "keys": [
            "chiếu gần hết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The hidden side is not the dark side.",
          "sub": "Mặt khuất không phải mặt tối.",
          "keys": [
            "không phải mặt tối"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Mồng 4 · Lưỡi liềm",
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
              "set": "room",
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
                "flashlight",
                "waxing-crescent-moon"
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
            "at": "l1:sickle",
            "caption": "Mồng 4 · phòng tối",
            "icon": "flashlight"
          },
          {
            "id": "h-poem",
            "t": "text",
            "text": "“Mồng một lưỡi trai…”",
            "x": 3996,
            "y": 1240,
            "size": 50,
            "at": "l1:rhyme",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop, the fourth night: a thin sickle. As the old rhyme counts: eyelash, rice leaf, hook, sickle.",
          "sub": "Chặng sáu, mồng bốn: trăng lưỡi liềm. Ca dao đếm: “Mồng một lưỡi trai, mồng hai lá lúa, mồng ba câu liêm, mồng bốn lưỡi liềm.”",
          "keys": [
            "lưỡi liềm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Is Earth's shadow eating the Moon?",
          "sub": "Có phải bóng Trái Đất đang ăn mất trăng không ạ?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Let's test it. Torch, ball, dark room.",
          "sub": "Thử nhé. Đèn pin, quả bóng, phòng tối.",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s21",
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
            "id": "h-torch",
            "t": "illus",
            "name": "flashlight",
            "x": 3996,
            "y": 1350,
            "size": 90,
            "at": "l2:torch"
          },
          {
            "id": "h-sun",
            "t": "text",
            "text": "đèn = Mặt Trời",
            "x": 3976,
            "y": 1450,
            "size": 34,
            "at": "l2:sun"
          },
          {
            "id": "h-kid",
            "t": "ring",
            "x": 4406,
            "y": 1390,
            "w": 100,
            "h": 100,
            "at": "l3:bin",
            "stroke": 6
          },
          {
            "id": "h-kidl",
            "t": "text",
            "text": "con = Trái Đất",
            "x": 4366,
            "y": 1500,
            "size": 34,
            "at": "l3:earth"
          },
          {
            "id": "h-ball",
            "t": "ring",
            "x": 4436,
            "y": 1310,
            "w": 40,
            "h": 40,
            "at": "l3:ball",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "h-path",
            "t": "ring",
            "x": 4316,
            "y": 1290,
            "w": 290,
            "h": 260,
            "at": "l4:turn",
            "dash": true,
            "color": "muted"
          },
          {
            "id": "h-p1",
            "t": "illus",
            "name": "waxing-crescent-moon",
            "x": 4656,
            "y": 1340,
            "size": 60,
            "at": "l4:grows"
          },
          {
            "id": "h-p2",
            "t": "illus",
            "name": "first-quarter-moon",
            "x": 4726,
            "y": 1340,
            "size": 60,
            "at": "l4:grows+300"
          },
          {
            "id": "h-p3",
            "t": "illus",
            "name": "full-moon",
            "x": 4796,
            "y": 1340,
            "size": 60,
            "at": "l4:shrinks"
          },
          {
            "id": "h-p4",
            "t": "illus",
            "name": "last-quarter-moon",
            "x": 4866,
            "y": 1340,
            "size": 60,
            "at": "l4:shrinks+300"
          },
          {
            "id": "h-half",
            "t": "text",
            "text": "Luôn nửa sáng, thấy nhiều/ít",
            "x": 3996,
            "y": 1570,
            "size": 40,
            "at": "l1:half",
            "hl": [
              {
                "text": "nhiều/ít",
                "at": "l1:less"
              }
            ]
          },
          {
            "id": "h-ecl",
            "t": "text",
            "text": "Ngang đầu → nguyệt thực (hiếm)",
            "x": 3996,
            "y": 1650,
            "size": 40,
            "at": "l5:lower",
            "color": "coral"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Khuyết vì góc nhìn, không vì bóng",
            "x": 3996,
            "y": 1740,
            "size": 50,
            "at": "l6:angle",
            "color": "accent",
            "hl": [
              {
                "text": "góc nhìn",
                "at": "l6:angle"
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
          "say": "Half of the Moon is always lit. As it circles us, we see more or less of that half.",
          "sub": "Mặt Trăng luôn có một nửa được chiếu sáng. Nó đi quanh ta, ta thấy nửa ấy nhiều hay ít.",
          "keys": [
            "nhiều hay ít"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Torch on the table: that's the Sun.",
          "sub": "Đèn pin trên bàn: Mặt Trời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bin is Earth, holding a ball just above his head: the Moon.",
          "sub": "Bin đứng giữa là Trái Đất, giơ quả bóng cao hơn đầu một chút: Mặt Trăng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Turn slowly. The bright part grows, then shrinks. Those are the phases.",
          "sub": "Xoay chậm. Phần sáng lớn dần rồi nhỏ dần: đó là các pha trăng.",
          "keys": [
            "các pha trăng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lower it behind your head: your head blocks the torch. Eclipse!",
          "sub": "Hạ bóng ngang đầu, ra sau gáy: đầu che đèn. Nguyệt thực!"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The real path tilts, like the raised ball: phases monthly, eclipses rarely. Angle, not shadow.",
          "sub": "Đường đi thật hơi nghiêng như bóng giơ cao: tháng nào cũng khuyết, hiếm khi nguyệt thực. Khuyết vì góc nhìn, không vì bóng.",
          "keys": [
            "góc nhìn"
          ]
        }
      ],
      "ref": "p18,p19,p20"
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
            "at": "l3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Mồng 10 · Biển rút",
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
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "water-wave",
                "waxing-gibbous-moon"
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
            "at": "l1:beach",
            "caption": "Mồng 10 · bờ biển",
            "icon": "water-wave"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop, the tenth night, a beach trip.",
          "sub": "Chặng cuối, mồng mười, cả nhà đi biển.",
          "keys": [
            "mồng mười"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, the sea walked away from our sandcastle!",
          "sub": "Ông ơi, biển bỏ lâu đài cát của cháu mà đi rồi!",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "That's the Moon pulling. Tides.",
          "sub": "Mặt Trăng kéo đấy. Thủy triều.",
          "pose": "explain"
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s23",
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
            "id": "i-wave",
            "t": "illus",
            "name": "water-wave",
            "x": 5964,
            "y": 1240,
            "size": 90,
            "at": "l1:pull"
          },
          {
            "id": "i-tide",
            "t": "text",
            "text": "Lực hút Mặt Trăng → thủy triều",
            "x": 6074,
            "y": 1260,
            "size": 44,
            "at": "l1:tides",
            "hl": [
              {
                "text": "thủy triều",
                "at": "l1:tides"
              }
            ]
          },
          {
            "id": "i-slow",
            "t": "text",
            "text": "Trái Đất quay chậm dần",
            "x": 5964,
            "y": 1360,
            "size": 40,
            "at": "l2:slowly"
          },
          {
            "id": "i-day",
            "t": "text",
            "text": "xưa rất xa: ngày ngắn hơn",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l2:shorter",
            "color": "muted",
            "hl": [
              {
                "text": "ngày ngắn hơn",
                "at": "l2:shorter"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "~4 cm/năm: xa dần",
            "x": 5964,
            "y": 1540,
            "size": 54,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "~4 cm/năm",
                "at": "l3:centimetres"
              }
            ]
          },
          {
            "id": "i-bn",
            "t": "text",
            "text": "hàng tỷ năm → khỏi lo “bay mất”",
            "x": 5964,
            "y": 1630,
            "size": 44,
            "at": "l4:billions",
            "hl": [
              {
                "text": "khỏi lo",
                "at": "l4:worry"
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
          "say": "The Moon's pull makes the tides rise and fall.",
          "sub": "Lực hút của Mặt Trăng tạo ra thủy triều lên xuống.",
          "keys": [
            "thủy triều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tides slowly slow Earth's spin. So long ago, a day was shorter.",
          "sub": "Thủy triều làm Trái Đất quay chậm dần, nên thời rất xa xưa một ngày ngắn hơn bây giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And remember our opening number? Almost four centimetres a year, moving away.",
          "sub": "Nhớ con số mở đầu chứ? Gần 4 cm mỗi năm, trăng xa dần.",
          "keys": [
            "4 cm mỗi năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It takes billions of years. No need to worry it will fly off.",
          "sub": "Chuyện diễn ra trong hàng tỷ năm. Khỏi lo trăng “bay mất”.",
          "keys": [
            "Khỏi lo"
          ]
        }
      ],
      "ref": "p21,p22"
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.4,
            "ms": 800
          },
          {
            "at": "l4",
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
              "set": "park",
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
                "full-moon",
                "night-with-stars"
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
            "at": "l1",
            "caption": "Rằm tháng sau · ngoài sân",
            "icon": "full-moon"
          },
          {
            "id": "j-end",
            "t": "text",
            "text": "Câu trả lời mới của ông",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l3:most",
            "color": "accent",
            "hl": [
              {
                "text": "của ông",
                "at": "l3:likely"
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
          "say": "Full moon again. Same yard, same question.",
          "sub": "Lại đêm rằm. Vẫn khoảng sân ấy, câu hỏi ấy.",
          "keys": [
            "Lại đêm rằm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "So, Grandpa, where did the Moon come from?",
          "sub": "Vậy ông ơi, Mặt Trăng ở đâu ra ạ?",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Most likely a child of Earth, after a giant crash. A hypothesis, with good evidence.",
          "sub": "Nhiều khả năng là “mảnh con” của Trái Đất sau một vụ va chạm. Là giả thuyết, nhiều bằng chứng.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same old book on the shelf. A brand new answer on the lips.",
          "sub": "Sách cũ vẫn trên giá. Câu trả lời thì mới tinh.",
          "keys": [
            "Câu trả lời thì mới tinh"
          ]
        }
      ],
      "ref": "outro,p4,p8,p17"
    },
    {
      "id": "s25",
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
            "text": "Mỗi tối một tuần: vẽ trăng",
            "x": 8012,
            "y": 1250,
            "size": 44,
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
            "text": "Tìm vùng tối: dung nham cũ",
            "x": 8012,
            "y": 1360,
            "size": 44,
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
            "text": "Kể vụ va chạm bằng đất nặn",
            "x": 8012,
            "y": 1470,
            "size": 44,
            "at": "l3+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn: every evening this week, draw the Moon with your child.",
          "sub": "Đến lượt bạn: mỗi tối tuần này, cùng con vẽ trăng.",
          "keys": [
            "vẽ trăng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Find the dark patches: plains of old lava, cooled long ago.",
          "sub": "Tìm những vùng tối: đồng bằng dung nham nguội từ rất lâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And tell the crash story with two balls of clay.",
          "sub": "Và kể chuyện va chạm bằng hai viên đất nặn."
        }
      ],
      "ref": "p23"
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
            "at": 100,
            "fit": "all",
            "ms": 1200
          },
          {
            "at": "l1:one+300",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:two",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:three",
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
            "x": 4936,
            "y": 520,
            "at": "l1:one"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6804,
            "y": 640,
            "at": "l2:two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4896,
            "y": 1740,
            "at": "l3:angle"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "d-rule"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:hypothesis+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One: the Moon borrows sunlight.",
          "sub": "Một: trăng mượn nắng Mặt Trời.",
          "keys": [
            "mượn nắng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: not decided yet? Say hypothesis.",
          "sub": "Hai: chưa chốt thì nói “giả thuyết”.",
          "keys": [
            "giả thuyết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: phases come from our angle, not Earth's shadow.",
          "sub": "Ba: trăng khuyết vì góc nhìn, không vì bóng Trái Đất.",
          "keys": [
            "góc nhìn"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p8,p20,outro"
    },
    {
      "id": "s27",
      "module": "QUIZ-01",
      "ref": "questions[39]",
      "data": {
        "q": "Is the giant impact idea a proven fact, according to the article?",
        "options": [
          "No, it is the most widely supported idea, but it is still a hypothesis",
          "Yes, scientists found pieces of Theia lying on the Moon's surface",
          "Yes, astronauts filmed the crash when they visited the Moon in the past"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "collision",
        "why": "Được ủng hộ rộng rãi nhất, nhưng vẫn là giả thuyết. Theia chưa ai thấy."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Is the giant impact idea a proven fact, according to the article?",
          "sub": "Theo bài, giả thuyết va chạm khổng lồ đã là sự thật được chứng minh chưa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, it is the most widely supported idea, but it is still a hypothesis.",
          "sub": "Chưa. Đây là giả thuyết được ủng hộ nhất, nhưng vẫn là giả thuyết."
        }
      ],
      "beats": {
        "after": 800
      }
    },
    {
      "id": "s28",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi về Mặt Trăng",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions about the Moon are waiting.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi về Mặt Trăng đang chờ."
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
