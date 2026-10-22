// Kịch bản video W lần 3 (#110) — "Vì sao có ngày và đêm, có bốn mùa?" · chuỗi "Hệ Mặt Trời và vũ trụ"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ; đủ ý để làm 40 câu.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "why-we-have-day-and-night-and-seasons--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "space-curious",
    "slug": "why-we-have-day-and-night-and-seasons",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao có ngày và đêm, có bốn mùa?",
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
  "notes": "#145 dựng lại theo hạt nhân #136 + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô đi theo MỘT NĂM của nhà Bin (17:30 ngày 1/1 trời tối sớm → ① ông bảo Mặt Trời đi vòng (⚖️ p3) → ② 7:00 sáng 2/1 gọi chú ở Mỹ (p5) → ③ 7:30 chú Sam ở Úc mặc đồ bơi (❓ p11), trục nghiêng 23,5°, đèn pin → ④ tối 2/1 bà Tư “hè do gần Mặt Trời”, “Khoan đã!” (DLG p12) → ⑤ 21/6 hạ chí, ca dao “chưa nằm đã sáng” → ⑥ tháng 7 đi Nam bán cầu (🔀 p13) → ⑦ tháng 9 Cần Thơ (💡 p20) → 17:30 ngày 31/12 khép vòng “chưa cười đã tối”). Chuỗi space-curious (w145/_series). Ngắt nhịp: BRK-07 rehook (Úc tắm biển ngày Tết), BRK-10 trích ca dao, BRK-04 cách A/B xếp vali. Số liệu chỉ từ bài (23,5°, đầu tháng Một, 20/3, 21/6, 22–23/9, 21–22/12, 24 tiết khí). Bản cũ (W lần 3, #110): w145/bak/why-we-have-day-and-night-and-seasons--w01.js.",
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
            "text": "23,5°",
            "x": 60,
            "y": 110,
            "size": 200,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "23,5°",
                "at": "l1:degrees"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "nghiêng chút xíu → bốn mùa",
            "x": 70,
            "y": 380,
            "size": 56,
            "at": "l1:tilt",
            "hl": [
              {
                "text": "bốn mùa",
                "at": "l1:seasons"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: hè vì gần Mặt Trời?",
            "x": 70,
            "y": 480,
            "size": 52,
            "at": "l2:closer",
            "color": "muted"
          },
          {
            "id": "a-mythx",
            "t": "strike",
            "over": "a-myth",
            "at": "l2:end"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: bài học · NASA Space Place; Britannica — Why Do We Have Seasons?",
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
          "say": "Twenty three and a half degrees. A tiny tilt, and it makes four seasons.",
          "sub": "Hai mươi ba phẩy năm độ. Nghiêng chút xíu, mà sinh ra bốn mùa.",
          "keys": [
            "bốn mùa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most of us think summer comes from being closer to the Sun.",
          "sub": "Còn ta cứ tưởng: hè là do Trái Đất tới gần Mặt Trời."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "intro,p9"
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
                  "id": "bin",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "sunset"
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
                  "shot": "wide",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "17:30 · ngày 1/1 · trời đã tối",
            "icon": "sunset"
          },
          {
            "id": "a-poem",
            "t": "text",
            "text": "“Ngày tháng mười chưa cười đã tối”",
            "x": 60,
            "y": 600,
            "size": 46,
            "at": "l4:rhyme",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Bin, nine, a professional why asker.",
          "sub": "Đây là Bin, chín tuổi, chuyên gia hỏi “vì sao”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And his grandpa, Mr Bình. New Year's Day, half past five, and it's already dark.",
          "sub": "Còn đây là ông Bình. Ngày 1/1, năm rưỡi chiều, trời đã tối.",
          "keys": [
            "năm rưỡi chiều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, why does it get dark? And why is it so cold?",
          "sub": "Ông ơi, sao trời tối ạ? Mà sao lạnh thế?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An old rhyme says: in the tenth month, day is gone before you can smile.",
          "sub": "Ca dao: “Ngày tháng mười chưa cười đã tối.”",
          "keys": [
            "chưa cười đã tối"
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
            "text": "Ngày đêm, bốn mùa từ đâu ra?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:seasons",
            "hl": [
              {
                "text": "từ đâu ra",
                "at": "l1:from"
              }
            ]
          },
          {
            "id": "b-n1",
            "t": "text",
            "text": "Không phải: Mặt Trời đi vòng",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l2:walking",
            "color": "muted"
          },
          {
            "id": "b-n1x",
            "t": "strike",
            "over": "b-n1",
            "at": "l2:walking+500"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: Trái Đất tự quay",
            "x": 2848,
            "y": 150,
            "size": 54,
            "at": "l2:spins",
            "color": "accent",
            "hl": [
              {
                "text": "tự quay",
                "at": "l2:spins"
              }
            ]
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "Không phải: gần Mặt Trời",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l3:closer",
            "color": "muted"
          },
          {
            "id": "b-n2x",
            "t": "strike",
            "over": "b-n2",
            "at": "l3:closer+500"
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "Mà là: trục nghiêng",
            "x": 2848,
            "y": 260,
            "size": 54,
            "at": "l3:tilts",
            "color": "accent",
            "hl": [
              {
                "text": "trục nghiêng",
                "at": "l3:tilts"
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
          "say": "So where do day, night and seasons come from?",
          "sub": "Vậy ngày đêm và bốn mùa từ đâu ra?",
          "keys": [
            "từ đâu ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Day and night: Earth spins. The Sun isn't walking around us.",
          "sub": "Ngày đêm: Trái Đất tự quay. Mặt Trời chẳng đi vòng quanh ta.",
          "keys": [
            "Trái Đất tự quay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Seasons: Earth's axis tilts. Earth isn't getting closer to the Sun.",
          "sub": "Bốn mùa: trục Trái Đất nghiêng. Không phải do tới gần Mặt Trời.",
          "keys": [
            "trục Trái Đất nghiêng"
          ]
        }
      ],
      "ref": "intro,p4,p12"
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
            "text": "7 chặng · 1 năm của nhà Bin",
            "x": 2028,
            "y": 470,
            "size": 56,
            "at": "l1:seven",
            "hl": [
              {
                "text": "1 năm",
                "at": "l1:year"
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
            "text": "1/1",
            "x": 2068,
            "y": 590,
            "size": 48,
            "at": "l1:stops+320"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "2/1",
            "x": 2300,
            "y": 590,
            "size": 48,
            "at": "l1:stops+580"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "2/1",
            "x": 2532,
            "y": 590,
            "size": 48,
            "at": "l1:stops+840"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "2/1",
            "x": 2764,
            "y": 590,
            "size": 48,
            "at": "l1:stops+1100"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "21/6",
            "x": 2996,
            "y": 590,
            "size": 48,
            "at": "l1:stops+1360"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3228,
            "y": 590,
            "size": 48,
            "at": "l1:stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T9",
            "x": 3460,
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
          "say": "We'll follow Bin's family through one whole year, in seven stops.",
          "sub": "Mình theo nhà Bin qua trọn một năm, bảy chặng.",
          "keys": [
            "một năm"
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
            "text": "① 1/1 · 17:30 Vì sao trời tối?",
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
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "sunset"
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
            "at": "l1:answers",
            "caption": "17:30 · ông giải thích",
            "icon": "sunset"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop, still New Year's evening. Grandpa answers.",
          "sub": "Chặng một, vẫn chiều 1/1. Ông trả lời.",
          "keys": [
            "chiều 1/1"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "The Sun goes around to the other side of Earth.",
          "sub": "Mặt Trời đi vòng qua bên kia Trái Đất đấy.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "So the Sun takes a walk every night?",
          "sub": "Vậy tối nào Mặt Trời cũng đi dạo ạ?",
          "face": "surprised"
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
            "id": "c-myth",
            "t": "text",
            "text": "Mặt Trời đi vòng?",
            "x": 3996,
            "y": 150,
            "size": 50,
            "at": "l1:walking",
            "color": "muted"
          },
          {
            "id": "c-mythx",
            "t": "strike",
            "over": "c-myth",
            "at": "l1:anywhere"
          },
          {
            "id": "c-spin",
            "t": "text",
            "text": "→ Mình đang quay",
            "x": 4456,
            "y": 150,
            "size": 54,
            "at": "l1:spinning",
            "color": "accent",
            "hl": [
              {
                "text": "Mình đang quay",
                "at": "l1:spinning"
              }
            ]
          },
          {
            "id": "c-sun",
            "t": "ring",
            "x": 3996,
            "y": 300,
            "w": 120,
            "h": 120,
            "at": "l2:spins",
            "color": "coral",
            "stroke": 7
          },
          {
            "id": "c-sunl",
            "t": "text",
            "text": "Mặt Trời",
            "x": 3996,
            "y": 430,
            "size": 34,
            "at": "l2:spins+300",
            "color": "coral"
          },
          {
            "id": "c-earth",
            "t": "ring",
            "x": 4416,
            "y": 280,
            "w": 170,
            "h": 170,
            "at": "l2:line",
            "stroke": 6
          },
          {
            "id": "c-axis",
            "t": "line",
            "pts": [
              [
                4501,
                250
              ],
              [
                4501,
                480
              ]
            ],
            "at": "l2:poles",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "c-day",
            "t": "text",
            "text": "ngày",
            "x": 4296,
            "y": 345,
            "size": 40,
            "at": "l3:day",
            "hl": [
              {
                "text": "ngày",
                "at": "l3:day"
              }
            ]
          },
          {
            "id": "c-night",
            "t": "text",
            "text": "đêm",
            "x": 4616,
            "y": 345,
            "size": 40,
            "at": "l3:night",
            "color": "muted"
          },
          {
            "id": "c-1d",
            "t": "text",
            "text": "~1 vòng / ngày",
            "x": 4636,
            "y": 270,
            "size": 38,
            "at": "l2:once"
          },
          {
            "id": "c-we",
            "t": "arrow",
            "from": [
              4406,
              520
            ],
            "to": [
              4616,
              520
            ],
            "at": "l4:west",
            "color": "accent"
          },
          {
            "id": "c-wel",
            "t": "text",
            "text": "tây → đông: mọc đông, lặn tây",
            "x": 4356,
            "y": 545,
            "size": 40,
            "at": "l4:rises",
            "hl": [
              {
                "text": "mọc đông",
                "at": "l4:east"
              }
            ]
          },
          {
            "id": "c-train",
            "t": "illus",
            "name": "bullet-train",
            "x": 3996,
            "y": 620,
            "size": 80,
            "at": "l5:train"
          },
          {
            "id": "c-trl",
            "t": "text",
            "text": "như ngồi tàu thấy cây lùi",
            "x": 4096,
            "y": 635,
            "size": 42,
            "at": "l5:trees",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nice try, Grandpa. The Sun isn't walking anywhere. We are spinning.",
          "sub": "Ông ơi, Mặt Trời chẳng đi đâu cả. Chính mình đang quay.",
          "keys": [
            "Chính mình đang quay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Earth spins around an imaginary line through the poles, about once a day.",
          "sub": "Trái Đất tự quay quanh trục tưởng tượng nối hai cực, mỗi vòng khoảng một ngày.",
          "keys": [
            "mỗi vòng khoảng một ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The half facing the Sun has day. The other half has night.",
          "sub": "Nửa hướng về Mặt Trời là ngày, nửa quay đi là đêm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It turns west to east, so the Sun rises in the east and sets in the west.",
          "sub": "Quay từ tây sang đông, nên Mặt Trời mọc ở đông, lặn ở tây."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "We can't feel it, like trees sliding backwards outside a smooth train.",
          "sub": "Ta không thấy mình quay, như ngồi tàu êm thấy cây cối lùi lại."
        }
      ],
      "ref": "p1,p3,p4"
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
            "id": "c-lamp",
            "t": "illus",
            "name": "light-bulb",
            "x": 5036,
            "y": 560,
            "size": 80,
            "at": "l1:lamp"
          },
          {
            "id": "c-or",
            "t": "illus",
            "name": "tangerine",
            "x": 5136,
            "y": 560,
            "size": 80,
            "at": "l1:orange"
          },
          {
            "id": "c-dot",
            "t": "text",
            "text": "chấm = nhà mình",
            "x": 5236,
            "y": 575,
            "size": 40,
            "at": "l1:dot"
          },
          {
            "id": "c-demo",
            "t": "text",
            "text": "Quay ra đèn: sáng · quay đi: ngủ",
            "x": 5036,
            "y": 670,
            "size": 40,
            "at": "l2:turn",
            "color": "accent",
            "hl": [
              {
                "text": "quay đi: ngủ",
                "at": "l2:bedtime"
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
          "say": "Try it tonight: a lamp for the Sun, an orange for Earth, a dot for home.",
          "sub": "Tối nay thử nhé: đèn bàn là Mặt Trời, quả cam là Trái Đất, một chấm là nhà mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Turn it slowly. Dot faces the lamp: daytime. Dot turns away: bedtime.",
          "sub": "Xoay chậm. Chấm quay ra đèn: trời sáng. Quay ra sau: nhà mình đi ngủ.",
          "keys": [
            "nhà mình đi ngủ"
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
            "text": "② 2/1 · 7:00 Gọi chú ở Mỹ",
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
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "mobile-phone"
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
            "at": "l1:uncle",
            "caption": "7:00 · bữa sáng",
            "icon": "mobile-phone"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, next morning, seven a.m. Bin wants to call his uncle in America.",
          "sub": "Chặng hai, bảy giờ sáng hôm sau. Bin muốn gọi chú ở Mỹ.",
          "keys": [
            "bảy giờ sáng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Breakfast time! Let's wish Uncle a happy new year!",
          "sub": "Giờ ăn sáng! Gọi chúc Tết chú thôi!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Wait. Our morning is his evening. He's getting ready for bed.",
          "sub": "Khoan. Sáng của mình là tối của chú. Chú sắp đi ngủ đấy.",
          "pose": "explain"
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
            "id": "d-globe",
            "t": "ring",
            "x": 6104,
            "y": 200,
            "w": 300,
            "h": 300,
            "at": "l1:round",
            "stroke": 6
          },
          {
            "id": "d-mid",
            "t": "line",
            "pts": [
              [
                6254,
                200
              ],
              [
                6254,
                500
              ]
            ],
            "at": "l1:turning",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "d-sun",
            "t": "illus",
            "name": "sun",
            "x": 5964,
            "y": 300,
            "size": 90,
            "at": "l1:sun"
          },
          {
            "id": "d-vn",
            "t": "text",
            "text": "VN: sáng",
            "x": 6024,
            "y": 530,
            "size": 44,
            "at": "l1:different",
            "hl": [
              {
                "text": "sáng",
                "at": "l1:different"
              }
            ]
          },
          {
            "id": "d-us",
            "t": "text",
            "text": "châu Mỹ: tối",
            "x": 6324,
            "y": 530,
            "size": 44,
            "at": "l1:times",
            "color": "muted"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Gọi xa: chọn giờ",
            "x": 6504,
            "y": 300,
            "size": 56,
            "at": "l2:pick",
            "color": "accent",
            "hl": [
              {
                "text": "chọn giờ",
                "at": "l2:time"
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
          "say": "Round, turning Earth: two places face the Sun at different times.",
          "sub": "Trái Đất tròn và quay: hai nơi hướng về Mặt Trời vào giờ khác nhau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So to call far away, pick your time.",
          "sub": "Nên gọi cho người ở xa, nhớ chọn giờ.",
          "keys": [
            "chọn giờ"
          ]
        }
      ],
      "ref": "p5"
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
            "text": "③ 2/1 · 7:30 Tắm biển ngày Tết?",
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
              "set": "online",
              "actors": [
                {
                  "id": "bin",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "beach-with-umbrella"
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
                  "on": "sam",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sam",
            "caption": "7:30 · gọi sang Úc",
            "icon": "beach-with-umbrella"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop. So Bin calls someone else. This is Sam, a family friend in Australia.",
          "sub": "Chặng ba. Bin gọi người khác. Đây là chú Sam, người quen của nhà ở Úc.",
          "keys": [
            "chú Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Happy New Year, Sam! It's so cold in Hanoi.",
          "sub": "Chúc mừng năm mới chú Sam! Hà Nội lạnh lắm ạ.",
          "face": "happy",
          "pose": "wave",
          "to": "sam"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Happy New Year! Here, I'm in my swimsuit on the beach!",
          "sub": "Chúc mừng năm mới! Chú đang mặc đồ bơi trên bãi biển!",
          "face": "happy",
          "pose": "thumb",
          "to": "bin"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Cùng ngày Tết: Hà Nội rét, Úc tắm biển?",
        "illus": "beach-with-umbrella"
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
          "say": "Same New Year's Day. Hanoi shivers, Australia swims. How?",
          "sub": "Cùng ngày Tết. Hà Nội rét run, Úc tắm biển. Sao vậy?",
          "keys": [
            "Sao vậy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
            "id": "e-sun",
            "t": "ring",
            "x": 8342,
            "y": 300,
            "w": 120,
            "h": 120,
            "at": "l2:circles",
            "color": "coral",
            "stroke": 7
          },
          {
            "id": "e-e1",
            "t": "ring",
            "x": 7992,
            "y": 300,
            "w": 110,
            "h": 110,
            "at": "l2:circles+300",
            "stroke": 6
          },
          {
            "id": "e-ax1",
            "t": "line",
            "pts": [
              [
                8012,
                270
              ],
              [
                8082,
                440
              ]
            ],
            "at": "l2:same way",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "e-e2",
            "t": "ring",
            "x": 8712,
            "y": 300,
            "w": 110,
            "h": 110,
            "at": "l2:circles+600",
            "stroke": 6
          },
          {
            "id": "e-ax2",
            "t": "line",
            "pts": [
              [
                8732,
                270
              ],
              [
                8802,
                440
              ]
            ],
            "at": "l2:same way+300",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "e-235",
            "t": "text",
            "text": "trục nghiêng ~23,5°, giữ hướng",
            "x": 7932,
            "y": 150,
            "size": 46,
            "at": "l1:tilted",
            "hl": [
              {
                "text": "~23,5°",
                "at": "l1:degrees"
              }
            ]
          },
          {
            "id": "e-n1",
            "t": "text",
            "text": "Bắc ngả vào",
            "x": 8692,
            "y": 450,
            "size": 38,
            "at": "l3:toward"
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "Bắc ngả ra",
            "x": 7972,
            "y": 450,
            "size": 38,
            "at": "l3:away",
            "color": "muted"
          },
          {
            "id": "e-sum",
            "t": "text",
            "text": "Ngả vào: nắng thẳng + ngày dài = hè",
            "x": 7932,
            "y": 540,
            "size": 46,
            "at": "l4:direct",
            "color": "accent",
            "hl": [
              {
                "text": "= hè",
                "at": "l4:summer"
              }
            ]
          },
          {
            "id": "e-win",
            "t": "text",
            "text": "Ngả ra: nắng xiên + ngày ngắn = đông",
            "x": 7932,
            "y": 620,
            "size": 46,
            "at": "l5:slanted",
            "hl": [
              {
                "text": "= đông",
                "at": "l5:winter"
              }
            ]
          },
          {
            "id": "e-jan",
            "t": "text",
            "text": "Tháng 1: Nam ngả vào → Úc hè",
            "x": 7932,
            "y": 700,
            "size": 40,
            "at": "l6:january",
            "color": "coral",
            "hl": [
              {
                "text": "Úc hè",
                "at": "l6:summer"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: NASA Space Place; Britannica",
            "x": 8972,
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
          "say": "Earth's axis is tilted about twenty three and a half degrees.",
          "sub": "Trục Trái Đất nghiêng khoảng 23,5 độ.",
          "keys": [
            "23,5 độ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As Earth circles the Sun, the axis points the same way all year.",
          "sub": "Khi đi quanh Mặt Trời, trục luôn chỉ về cùng một hướng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So half the year the north leans toward the Sun, half the year away.",
          "sub": "Nên nửa năm Bắc bán cầu ngả về Mặt Trời, nửa năm ngả ra xa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Leaning in gives two gifts: more direct sun, and days longer than nights. Summer.",
          "sub": "Ngả vào được hai quà: nắng gần thẳng, ngày dài hơn đêm. Mùa hè.",
          "keys": [
            "Mùa hè"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Leaning away: slanted sun, short days. Winter.",
          "sub": "Ngả ra: nắng xiên, ngày ngắn. Mùa đông."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "In January the south leans in. Sam's beach summer.",
          "sub": "Tháng Một, Nam bán cầu ngả vào. Mùa hè bãi biển của chú Sam.",
          "keys": [
            "Nam bán cầu ngả vào"
          ]
        }
      ],
      "ref": "p6,p7,p11"
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
            "id": "e-fl",
            "t": "illus",
            "name": "flashlight",
            "x": 8972,
            "y": 560,
            "size": 80,
            "at": "l1:torch"
          },
          {
            "id": "e-s1",
            "t": "ring",
            "x": 9092,
            "y": 580,
            "w": 60,
            "h": 60,
            "at": "l1:spot",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "e-s1l",
            "t": "text",
            "text": "thẳng: nhỏ, chói",
            "x": 9172,
            "y": 585,
            "size": 38,
            "at": "l1:bright"
          },
          {
            "id": "e-s2",
            "t": "ring",
            "x": 9072,
            "y": 660,
            "w": 160,
            "h": 70,
            "at": "l2:spreads",
            "dash": true,
            "color": "muted"
          },
          {
            "id": "e-s2l",
            "t": "text",
            "text": "xiên: loang, nhạt",
            "x": 9252,
            "y": 670,
            "size": 38,
            "at": "l2:pale",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Torch test: shine straight down, a small, bright spot.",
          "sub": "Thử đèn pin: chiếu thẳng xuống, vòng sáng nhỏ và chói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tilt it: the spot spreads wide and pale.",
          "sub": "Chiếu xiên: vòng sáng loang rộng, nhạt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Straight sun gathers in one spot: hot. Slanted sun spreads thin: cool.",
          "sub": "Nắng thẳng gom một chỗ nên nóng, nắng xiên trải mỏng nên mát.",
          "keys": [
            "gom một chỗ nên nóng"
          ]
        }
      ],
      "ref": "p8"
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
            "at": "l2:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 2/1 · tối: bà nói gì?",
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
                  "side": "left"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "tu",
                  "move": "push"
                }
              ]
            },
            "at": "l1:grandma",
            "caption": "Tối 2/1 · bên ấm trà",
            "icon": "teacup-without-handle"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop, that evening. And this is Grandma Tư, queen of the teapot.",
          "sub": "Chặng bốn, tối hôm ấy. Còn đây là bà Tư, nữ hoàng ấm trà.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Cold tonight. Never mind, summer comes when Earth moves closer to the Sun.",
          "sub": "Tối nay rét nhỉ. Đợi hè, Trái Đất tới gần Mặt Trời là ấm.",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "ref": "p12,p10",
      "data": {
        "set": "home",
        "label": "Tối 2/1 · Mùa do đâu?",
        "actors": [
          {
            "id": "bin",
            "side": "left"
          },
          {
            "id": "tu",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Bảo người khác “sai rồi” cụt lủn",
          "why": "Sửa nhẹ nhàng, có ví dụ: Úc đang hè khi mình mùa đông, nên lý do phải là độ nghiêng.",
          "rule": "Mùa đến từ độ nghiêng, không đến từ khoảng cách"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "bin",
          "say": "No! You're wrong, Grandma!",
          "sub": "Không! Bà sai rồi!",
          "face": "stern",
          "pose": "cross",
          "stop": true
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hold on!",
          "sub": "Khoan đã!",
          "face": "wink"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The fact is right. But correct her kindly, with an example.",
          "sub": "Ý thì đúng, nhưng sửa nhẹ nhàng, có ví dụ nhé.",
          "keys": [
            "sửa nhẹ nhàng"
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
          "who": "bin",
          "say": "Grandma, when it's winter here, Sam has summer in Australia.",
          "sub": "Bà ơi, mình đang đông thì chú Sam ở Úc đang hè ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "bin",
          "say": "So it must be the tilt, not the distance.",
          "sub": "Vậy phải do độ nghiêng, không do khoảng cách.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "tu",
          "say": "Oh, I see. Seasons come from the tilt!",
          "sub": "À, bà hiểu rồi. Mùa đến từ độ nghiêng!",
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
            "id": "f-orb",
            "t": "ring",
            "x": 80,
            "y": 1260,
            "w": 620,
            "h": 300,
            "at": "l1:circle",
            "stroke": 5
          },
          {
            "id": "f-sun",
            "t": "ring",
            "x": 330,
            "y": 1370,
            "w": 90,
            "h": 90,
            "at": "l1:circle+300",
            "color": "coral",
            "stroke": 6
          },
          {
            "id": "f-near",
            "t": "ring",
            "x": 70,
            "y": 1390,
            "w": 40,
            "h": 40,
            "at": "l1:closest",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "f-nl",
            "t": "text",
            "text": "gần nhất: đầu tháng 1",
            "x": 130,
            "y": 1570,
            "size": 42,
            "at": "l1:january",
            "hl": [
              {
                "text": "đầu tháng 1",
                "at": "l1:january"
              }
            ]
          },
          {
            "id": "f-win",
            "t": "text",
            "text": "= đang đông ở Hà Nội!",
            "x": 130,
            "y": 1630,
            "size": 42,
            "at": "l2:winter",
            "color": "coral"
          },
          {
            "id": "f-opp",
            "t": "text",
            "text": "Bắc ↔ Nam: luôn ngược mùa",
            "x": 700,
            "y": 1660,
            "size": 40,
            "at": "l3:opposite",
            "hl": [
              {
                "text": "ngược mùa",
                "at": "l3:opposite"
              }
            ]
          },
          {
            "id": "f-if",
            "t": "text",
            "text": "Nếu do khoảng cách: cùng mùa",
            "x": 700,
            "y": 1710,
            "size": 34,
            "at": "l4:distance",
            "color": "muted"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Mùa: do độ nghiêng",
            "x": 60,
            "y": 1750,
            "size": 50,
            "at": "l5:tilt",
            "color": "accent",
            "hl": [
              {
                "text": "độ nghiêng",
                "at": "l5:tilt"
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
          "say": "Earth's path is nearly a circle. It's closest to the Sun in early January.",
          "sub": "Quỹ đạo Trái Đất gần tròn. Gần Mặt Trời nhất là đầu tháng Một.",
          "keys": [
            "đầu tháng Một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Right in our winter! The distance changes only a little.",
          "sub": "Đúng mùa đông của mình! Khoảng cách chỉ chênh chút xíu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Best proof: north and south always have opposite seasons.",
          "sub": "Bằng chứng dễ thấy nhất: Bắc, Nam bán cầu luôn ngược mùa.",
          "keys": [
            "luôn ngược mùa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If distance made seasons, the whole Earth would be hot or cold together.",
          "sub": "Nếu do khoảng cách, cả Trái Đất phải cùng nóng hoặc cùng lạnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Seasons come from the tilt, not the distance.",
          "sub": "Mùa đến từ độ nghiêng, không đến từ khoảng cách.",
          "keys": [
            "độ nghiêng"
          ]
        }
      ],
      "ref": "p9,p10,p12"
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
            "at": "l3:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 21/6 · Chưa nằm đã sáng",
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
              "set": "room",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "face": "surprised"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "sunrise"
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
            "at": "l1:june",
            "caption": "Sáng sớm 21/6",
            "icon": "sunrise"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop, around June twenty first. Early morning, and the sky is already bright.",
          "sub": "Chặng năm, khoảng 21 tháng Sáu. Sáng sớm, trời đã sáng bừng.",
          "keys": [
            "21 tháng Sáu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Light already? I feel like I just lay down!",
          "sub": "Sáng rồi á? Cháu tưởng vừa mới nằm!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Short summer nights. Our ancestors made a rhyme about it.",
          "sub": "Đêm hè ngắn. Ông bà mình có cả câu ca dao.",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s18",
      "module": "BRK-10",
      "data": {
        "quote": "Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã tối",
        "mark": "chưa nằm đã sáng",
        "by": "Ca dao",
        "illus": "sunrise"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Fifth month: dawn before you lie down. Tenth month: dark before you smile.",
          "sub": "“Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã tối.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A Vietnamese folk rhyme.",
          "sub": "Ca dao Việt Nam."
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
          }
        ],
        "items": [
          {
            "id": "g-b0",
            "t": "box",
            "x": 2028,
            "y": 1250,
            "w": 240,
            "h": 130,
            "at": "l3:march",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-d0",
            "t": "text",
            "text": "~20/3",
            "x": 2048,
            "y": 1265,
            "size": 40,
            "at": "l3:march+200"
          },
          {
            "id": "g-n0",
            "t": "text",
            "text": "Xuân phân",
            "x": 2048,
            "y": 1315,
            "size": 40,
            "at": "l3:march+400"
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 2288,
            "y": 1250,
            "w": 240,
            "h": 130,
            "at": "l1:june",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "g-d1",
            "t": "text",
            "text": "~21/6",
            "x": 2308,
            "y": 1265,
            "size": 40,
            "at": "l1:june+200"
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "Hạ chí",
            "x": 2308,
            "y": 1315,
            "size": 40,
            "at": "l1:june+400",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "box",
            "x": 2548,
            "y": 1250,
            "w": 240,
            "h": 130,
            "at": "l3:september",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-d2",
            "t": "text",
            "text": "~22–23/9",
            "x": 2568,
            "y": 1265,
            "size": 40,
            "at": "l3:september+200"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "Thu phân",
            "x": 2568,
            "y": 1315,
            "size": 40,
            "at": "l3:september+400"
          },
          {
            "id": "g-b3",
            "t": "box",
            "x": 2808,
            "y": 1250,
            "w": 240,
            "h": 130,
            "at": "l2:december",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-d3",
            "t": "text",
            "text": "~21–22/12",
            "x": 2828,
            "y": 1265,
            "size": 40,
            "at": "l2:december+200"
          },
          {
            "id": "g-n3",
            "t": "text",
            "text": "Đông chí",
            "x": 2828,
            "y": 1315,
            "size": 40,
            "at": "l2:december+400"
          },
          {
            "id": "g-long",
            "t": "text",
            "text": "Hạ chí: ngày dài nhất",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l1:longest",
            "hl": [
              {
                "text": "ngày dài nhất",
                "at": "l1:longest"
              }
            ]
          },
          {
            "id": "g-short",
            "t": "text",
            "text": "Đông chí: ngày ngắn nhất",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l2:shortest"
          },
          {
            "id": "g-eq",
            "t": "text",
            "text": "Hai ngày phân: ngày ≈ đêm, mọi nơi",
            "x": 2028,
            "y": 1560,
            "size": 44,
            "at": "l3:equal",
            "hl": [
              {
                "text": "ngày ≈ đêm",
                "at": "l3:equal"
              }
            ]
          },
          {
            "id": "g-24",
            "t": "text",
            "text": "trong 24 tiết khí",
            "x": 2028,
            "y": 1640,
            "size": 44,
            "at": "l4:solar terms",
            "color": "muted"
          },
          {
            "id": "g-pole",
            "t": "text",
            "text": "Gần cực: ngày, đêm kéo dài",
            "x": 2028,
            "y": 1730,
            "size": 40,
            "at": "l5:poles",
            "color": "coral",
            "hl": [
              {
                "text": "kéo dài",
                "at": "l5:days"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: NASA Earth Observatory — Equinoxes and Solstices",
            "x": 3068,
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
          "say": "Around June twenty first, the north leans most toward the Sun: longest day, shortest night.",
          "sub": "Khoảng 21/6, Bắc bán cầu ngả về Mặt Trời nhiều nhất: hạ chí, ngày dài nhất, đêm ngắn nhất.",
          "keys": [
            "hạ chí"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Around December twenty first or twenty second, the shortest day.",
          "sub": "Khoảng 21 hoặc 22/12: đông chí, ngày ngắn nhất năm.",
          "keys": [
            "đông chí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Around March twentieth and September twenty second or third, day and night are nearly equal everywhere.",
          "sub": "Khoảng 20/3 và 22 hoặc 23/9: ngày và đêm gần bằng nhau ở mọi nơi.",
          "keys": [
            "gần bằng nhau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "All four are among the twenty four solar terms our grandparents used.",
          "sub": "Bốn mốc này có trong hai mươi bốn tiết khí ông bà ta dùng từ lâu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Near the poles, the summer Sun may not set for days. Winter nights last for days.",
          "sub": "Gần hai cực, mùa hè Mặt Trời không lặn nhiều ngày, mùa đông đêm kéo dài nhiều ngày."
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
            "at": "l4:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tháng 7 · Đi qua xích đạo",
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
              "set": "airport",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "luggage"
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
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "bin",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:trip",
            "caption": "Tháng 7 · xếp vali",
            "icon": "luggage"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop, July. A family trip south of the equator.",
          "sub": "Chặng sáu, tháng Bảy. Cả nhà đi chơi một nước ở Nam bán cầu.",
          "keys": [
            "Nam bán cầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "July is summer. Shorts and sandals for everyone!",
          "sub": "Tháng Bảy là hè. Áo cộc, dép lê cả nhà!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Wait, Grandpa. Let me check the season there first.",
          "sub": "Khoan ông. Để cháu tra mùa ở nơi đến đã.",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "It's winter there! Jackets and scarves.",
          "sub": "Bên đó đang đông! Áo khoác, khăn quàng ạ.",
          "face": "surprised"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s21",
      "module": "BRK-04",
      "data": {
        "title": "Tháng 7, đi Nam bán cầu",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Xếp vali theo thời tiết ở nhà",
        "right": "Tra mùa ở nơi đến trước",
        "wrongIllus": "shorts",
        "rightIllus": "coat"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Way A: pack for home, buy coats at the airport.",
          "sub": "Cách A: xếp đồ theo ở nhà, xuống máy bay mua áo ấm."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Way B: check the season there first.",
          "sub": "Cách B: tra mùa nơi đến, cứ thế đi chơi.",
          "keys": [
            "tra mùa nơi đến"
          ]
        }
      ],
      "ref": "p13"
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
            "id": "h-globe",
            "t": "ring",
            "x": 4136,
            "y": 1290,
            "w": 300,
            "h": 300,
            "at": "l1:cross",
            "stroke": 6
          },
          {
            "id": "h-eq",
            "t": "line",
            "pts": [
              [
                4106,
                1440
              ],
              [
                4466,
                1440
              ]
            ],
            "at": "l1:equator",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Bắc: tháng 7 = hè",
            "x": 4496,
            "y": 1340,
            "size": 46,
            "at": "l1:seasons"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "Nam: tháng 7 = đông",
            "x": 4496,
            "y": 1490,
            "size": 46,
            "at": "l1:flip",
            "color": "coral",
            "hl": [
              {
                "text": "đông",
                "at": "l1:upside"
              }
            ]
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Qua xích đạo, mùa lộn ngược",
            "x": 3996,
            "y": 1730,
            "size": 56,
            "at": "l1:upside",
            "color": "accent",
            "hl": [
              {
                "text": "mùa lộn ngược",
                "at": "l1:down"
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
          "say": "Cross the equator, and the seasons flip upside down.",
          "sub": "Qua xích đạo, mùa lộn ngược.",
          "keys": [
            "mùa lộn ngược"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tháng 9 · Cần Thơ",
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
              "set": "street",
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
            "at": "l1:relatives",
            "caption": "Tháng 9 · thăm họ hàng",
            "icon": "sun"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop, September, visiting relatives in Cần Thơ.",
          "sub": "Chặng cuối, tháng Chín, thăm họ hàng ở Cần Thơ.",
          "keys": [
            "Cần Thơ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Books say spring, summer, autumn, winter. Why no winter here?",
          "sub": "Sách nói xuân, hạ, thu, đông. Sao ở đây không có mùa đông ạ?",
          "face": "thinking",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "We're near the equator. The Sun is high all year.",
          "sub": "Ở đây gần xích đạo, nắng chiếu cao quanh năm.",
          "pose": "explain"
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "i-even",
            "t": "text",
            "text": "Ngày đêm ít đổi → nhiệt độ đều",
            "x": 5964,
            "y": 1240,
            "size": 46,
            "at": "l1:little",
            "hl": [
              {
                "text": "nhiệt độ đều",
                "at": "l1:even"
              }
            ]
          },
          {
            "id": "i-rain",
            "t": "illus",
            "name": "cloud-with-rain",
            "x": 5964,
            "y": 1320,
            "size": 80,
            "at": "l2:monsoon"
          },
          {
            "id": "i-mon",
            "t": "text",
            "text": "Gió mùa: mùa mưa · mùa khô",
            "x": 6064,
            "y": 1335,
            "size": 46,
            "at": "l2:rainy",
            "hl": [
              {
                "text": "mùa mưa · mùa khô",
                "at": "l2:dry"
              }
            ]
          },
          {
            "id": "i-snow",
            "t": "illus",
            "name": "snowflake",
            "x": 5964,
            "y": 1430,
            "size": 80,
            "at": "l3:north"
          },
          {
            "id": "i-north",
            "t": "text",
            "text": "Miền Bắc: gió mùa đông bắc → rét",
            "x": 6064,
            "y": 1445,
            "size": 44,
            "at": "l3:northeast"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Xích đạo: mùa mưa, mùa khô",
            "x": 5964,
            "y": 1550,
            "size": 50,
            "at": "l4:replace",
            "color": "accent",
            "hl": [
              {
                "text": "mùa mưa, mùa khô",
                "at": "l4:rainy"
              }
            ]
          },
          {
            "id": "i-shad",
            "t": "text",
            "text": "Giữa trưa: gần mất bóng",
            "x": 5964,
            "y": 1670,
            "size": 44,
            "at": "l5:tropics",
            "color": "coral",
            "hl": [
              {
                "text": "mất bóng",
                "at": "l6:disappears"
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
          "say": "Down south, day length changes little, so temperatures stay even. No cold winter.",
          "sub": "Miền Nam ngày đêm ít đổi, nên nhiệt độ khá đều. Không có mùa đông lạnh.",
          "keys": [
            "nhiệt độ khá đều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The weather changes with the monsoon: a rainy season and a dry season.",
          "sub": "Thời tiết đổi theo gió mùa: mùa mưa và mùa khô."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The north is farther away, and gets the cold northeast monsoon. So, a real winter.",
          "sub": "Miền Bắc xa xích đạo hơn, lại đón gió mùa đông bắc. Nên có mùa đông rét."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Near the equator, rainy and dry seasons replace the four.",
          "sub": "Gần xích đạo, mùa mưa nắng thay cho xuân hạ thu đông.",
          "keys": [
            "mùa mưa nắng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And all of Vietnam is in the tropics. Some days at noon, the Sun is almost overhead.",
          "sub": "Cả Việt Nam nằm trong vùng nhiệt đới. Có ngày giữa trưa, Mặt Trời gần như đứng trên đầu."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Your shadow nearly disappears under your feet. Fun to watch together!",
          "sub": "Bóng người gần như biến mất dưới chân. Cùng con quan sát nhé!",
          "keys": [
            "biến mất dưới chân"
          ]
        }
      ],
      "ref": "p18,p19,p20,p21,p22"
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
                "sunset",
                "notebook"
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
            "caption": "17:30 · ngày 31/12",
            "icon": "sunset"
          },
          {
            "id": "j-end",
            "t": "text",
            "text": "Giờ Bin biết vì sao",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l3:smile",
            "color": "accent",
            "hl": [
              {
                "text": "biết vì sao",
                "at": "l3:why"
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
          "say": "December thirty first, half past five. Dark again, just like a year ago.",
          "sub": "Ngày 31/12, năm rưỡi chiều. Lại tối, y như một năm trước.",
          "keys": [
            "một năm trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Grandpa, my stick's noon shadow grew long again, and sunset came early.",
          "sub": "Ông ơi, bóng cây que giữa trưa lại dài ra, Mặt Trời lặn sớm.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Day gone before you smile. Now you know why.",
          "sub": "“Chưa cười đã tối”. Giờ cháu biết vì sao rồi.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Earth kept turning, the tilt stayed. And Bin saw it himself.",
          "sub": "Trái Đất cứ quay, trục cứ nghiêng. Và Bin tự thấy được.",
          "keys": [
            "tự thấy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p23,outro"
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
            "text": "Cắm que: đánh dấu bóng trưa",
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
            "text": "Ghi giờ lặn đầu tháng",
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
            "text": "Đèn bàn + quả cam",
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
          "say": "Your turn: a stick in the yard. Mark its noon shadow once a month.",
          "sub": "Đến lượt bạn: cắm que ngoài sân, mỗi tháng đánh dấu bóng giữa trưa một lần.",
          "keys": [
            "bóng giữa trưa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write down the sunset time each month.",
          "sub": "Ghi giờ Mặt Trời lặn đầu mỗi tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And act out day and night with a lamp and an orange.",
          "sub": "Và diễn lại ngày đêm bằng đèn bàn, quả cam."
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s27",
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
            "fit": "F",
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
            "y": 140,
            "at": "l1:one"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 480,
            "y": 1745,
            "at": "l2:two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4836,
            "y": 1730,
            "at": "l3:three"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "f-rule"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:tilt"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One: day and night, Earth spins.",
          "sub": "Một: ngày đêm, vì Trái Đất tự quay.",
          "keys": [
            "Trái Đất tự quay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: seasons come from the tilt, not distance.",
          "sub": "Hai: mùa đến từ độ nghiêng, không do khoảng cách.",
          "keys": [
            "độ nghiêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: cross the equator, seasons flip.",
          "sub": "Ba: qua xích đạo, mùa lộn ngược.",
          "keys": [
            "mùa lộn ngược"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p12,p14,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "ref": "questions[13]",
      "data": {
        "q": "What is the easiest proof that distance does not cause the seasons?",
        "options": [
          "The Moon has the same seasons as Earth throughout the whole year",
          "The northern and southern halves of Earth always have opposite seasons",
          "Every country on Earth has summer at exactly the same time"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "globe-showing-asia-australia",
        "why": "Hà Nội vào hè thì Úc vào đông. Nếu do khoảng cách, cả Trái Đất phải cùng mùa."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the easiest proof that distance does not cause the seasons?",
          "sub": "Bằng chứng dễ thấy nhất rằng khoảng cách không tạo ra mùa là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The northern and southern halves of Earth always have opposite seasons.",
          "sub": "Bắc bán cầu và Nam bán cầu luôn có mùa ngược nhau."
        }
      ],
      "beats": {
        "after": 800
      }
    },
    {
      "id": "s29",
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
          "say": "Tonight, a lamp and an orange. Then forty questions are waiting below.",
          "sub": "Tối nay: đèn bàn và quả cam. Rồi bốn mươi câu hỏi đang chờ bên dưới."
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
