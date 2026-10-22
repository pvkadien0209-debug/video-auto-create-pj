// ielts-task1-trends-language--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-task1-trends-language--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "ielts-writing-task1-takers",
    "slug": "ielts-task1-trends-language",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Mô tả xu hướng tăng giảm và so sánh số liệu bằng từ nào?",
    "series": "IELTS Writing Task 1 rõ ràng — mô tả biểu đồ, bảng, quy trình cho thí sinh Academic"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
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
            "text": "20% → 30%",
            "x": 60,
            "y": 90,
            "size": 140,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "30%",
                "at": "l1:thirty"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“rose by 10%”?",
            "x": 80,
            "y": 290,
            "size": 80,
            "at": "l2:rose",
            "hl": [
              {
                "text": "10%",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "a-o1",
            "t": "box",
            "x": 80,
            "y": 430,
            "w": 300,
            "h": 110,
            "at": "l3:Right",
            "stroke": 5
          },
          {
            "id": "a-o1t",
            "t": "text",
            "text": "Đúng",
            "x": 150,
            "y": 450,
            "size": 64,
            "at": "l3:Right+200"
          },
          {
            "id": "a-o2",
            "t": "box",
            "x": 440,
            "y": 430,
            "w": 300,
            "h": 110,
            "at": "l3:wrong",
            "stroke": 5
          },
          {
            "id": "a-o2t",
            "t": "text",
            "text": "Sai",
            "x": 530,
            "y": 450,
            "size": 64,
            "at": "l3:wrong+200"
          },
          {
            "id": "a-ok",
            "t": "box",
            "x": 430,
            "y": 420,
            "w": 320,
            "h": 130,
            "at": "l5:Wrong",
            "stroke": 7,
            "color": "accent"
          },
          {
            "id": "a-22",
            "t": "text",
            "text": "10% của 20% = 2 → 22%",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l6:two",
            "color": "coral",
            "hl": [
              {
                "text": "22%",
                "at": "l6:twenty-two"
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
          "say": "You see a rate climb from twenty to thirty per cent.",
          "sub": "Bạn thấy một tỉ lệ tăng từ hai mươi lên ba mươi phần trăm.",
          "keys": [
            "ba mươi phần trăm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So you write: it rose by ten per cent.",
          "sub": "Thế là bạn viết: nó tăng mười phần trăm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right, or wrong? Take a guess.",
          "sub": "Đúng hay sai? Đoán thử đi.",
          "pause": 1500
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Most people say right. It looks like simple maths.",
          "sub": "Đa số chọn đúng. Trông như phép trừ đơn giản."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Wrong. Well, not accurate.",
          "sub": "Sai. À, nói đúng hơn là thiếu chính xác.",
          "keys": [
            "thiếu chính xác"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Ten per cent of twenty is two. That gives you just twenty-two per cent.",
          "sub": "Mười phần trăm của hai mươi là hai. Tức là chỉ hai mươi hai phần trăm.",
          "keys": [
            "hai mươi hai phần trăm"
          ]
        }
      ],
      "ref": "p12"
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
            "y": 120,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "memo",
                "chart-increasing"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu 19:00 · nhà Thảo",
            "icon": "memo"
          },
          {
            "id": "a-inc",
            "t": "text",
            "text": "increased × 3 · very higher",
            "x": 60,
            "y": 680,
            "size": 40,
            "at": "l2:increased",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That sentence came from Dũng, twenty-one, a biology student practising IELTS Writing.",
          "sub": "Câu ấy là của Dũng, hai mươi mốt tuổi, sinh viên sinh học đang luyện Viết IELTS.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sales increased. Then increased. Then increased again. And this bar is very higher!",
          "sub": "Doanh số increased. Rồi increased. Rồi lại increased. Còn cột này thì very higher!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Friday, seven p.m., at the home of his cousin Thảo, twenty-seven, an office worker taking IELTS Academic.",
          "sub": "Thứ Sáu, bảy giờ tối, nhà chị họ Thảo, hai mươi bảy tuổi, nhân viên văn phòng thi IELTS Academic.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "You've spotted the trend, Dũng. Now you need the words for it.",
          "sub": "Em nhìn ra xu hướng rồi. Giờ cần đúng chữ để tả nó.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying: words cost nothing, so choose them well.",
          "sub": "Ông bà dặn: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.”",
          "keys": [
            "lựa lời mà nói"
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
          "at": "l3",
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
            "text": "Tả tăng giảm bằng từ nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:words",
            "hl": [
              {
                "text": "từ nào",
                "at": "l1:words"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: từ lạ, từ kêu",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:fancy",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:words+300"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Mà là: ba lớp chính xác",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "ba lớp",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "b-i1",
            "t": "illus",
            "name": "chart-increasing",
            "x": 2048,
            "y": 360,
            "size": 70,
            "at": "l4:trend"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Từ xu hướng + mức độ",
            "x": 2148,
            "y": 370,
            "size": 50,
            "at": "l4:trend+200"
          },
          {
            "id": "b-i2",
            "t": "illus",
            "name": "balance-scale",
            "x": 2048,
            "y": 460,
            "size": 70,
            "at": "l5:comparatives"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "So sánh có bổ nghĩa",
            "x": 2148,
            "y": 470,
            "size": 50,
            "at": "l5:comparatives+200"
          },
          {
            "id": "b-i3",
            "t": "illus",
            "name": "straight-ruler",
            "x": 2048,
            "y": 560,
            "size": 70,
            "at": "l6:units"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Đơn vị, phần trăm đúng",
            "x": 2148,
            "y": 570,
            "size": 50,
            "at": "l6:units+200"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish; IELTS band descriptors",
            "x": 2028,
            "y": 720,
            "size": 28,
            "at": "l5",
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
          "say": "So which words describe rises, falls and comparisons?",
          "sub": "Vậy tả tăng, giảm và so sánh số liệu bằng từ nào?",
          "keys": [
            "bằng từ nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not fancy rare words.",
          "sub": "Không phải từ lạ, từ kêu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But three layers of precision.",
          "sub": "Mà là ba lớp chính xác.",
          "keys": [
            "ba lớp chính xác"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One: trend words with a degree.",
          "sub": "Một: từ xu hướng kèm mức độ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two: comparatives with the right modifier.",
          "sub": "Hai: so sánh hơn có bổ nghĩa đúng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three: units and percentages, no mix-ups.",
          "sub": "Ba: đơn vị và phần trăm, không nhầm.",
          "keys": [
            "không nhầm"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một tối thứ Sáu",
        "points": [
          {
            "label": "19:15",
            "sub": "Động từ",
            "illus": "chart-increasing"
          },
          {
            "label": "20:15",
            "sub": "Mức độ",
            "illus": "straight-ruler"
          },
          {
            "label": "20:45",
            "sub": "So sánh",
            "illus": "balance-scale"
          },
          {
            "label": "21:15",
            "sub": "Phần trăm",
            "illus": "input-numbers"
          },
          {
            "label": "21:45",
            "sub": "Ráp câu",
            "illus": "memo"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Friday night, five stops.",
          "sub": "Một tối thứ Sáu, năm chặng.",
          "keys": [
            "Một tối thứ Sáu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pens out.",
          "sub": "Mở vở ra."
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 19:15 · Bộ động từ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-up",
            "t": "text",
            "text": "↑ rise · increase · grow · climb",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:rise",
            "hl": [
              {
                "text": "rise",
                "at": "l2:rise"
              }
            ]
          },
          {
            "id": "c-dn",
            "t": "text",
            "text": "↓ fall · decrease · decline · drop",
            "x": 3996,
            "y": 245,
            "size": 46,
            "at": "l2:fall"
          },
          {
            "id": "c-st",
            "t": "text",
            "text": "→ remain stable · stay the same",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l3:stable"
          },
          {
            "id": "c-lv",
            "t": "text",
            "text": "⤴ level off: chững lại",
            "x": 3996,
            "y": 395,
            "size": 46,
            "at": "l3:level",
            "hl": [
              {
                "text": "level off",
                "at": "l3:level"
              }
            ]
          },
          {
            "id": "c-fl",
            "t": "text",
            "text": "〰 fluctuate: lên xuống",
            "x": 3996,
            "y": 470,
            "size": 46,
            "at": "l4:fluctuate"
          },
          {
            "id": "c-pk",
            "t": "text",
            "text": "▲ peak at: đạt đỉnh",
            "x": 3996,
            "y": 545,
            "size": 46,
            "at": "l4:peak"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, quarter past seven. Thảo writes the basic set.",
          "sub": "Chặng một, bảy giờ mười lăm. Thảo viết bộ từ cơ bản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Up: rise, increase, grow, climb. Down: fall, decrease, decline, drop.",
          "sub": "Tăng: rise, increase, grow, climb. Giảm: fall, decrease, decline, drop."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Steady: remain stable, stay the same. Flattening after a rise or fall: level off.",
          "sub": "Ổn định: remain stable, stay the same. Chững lại sau giai đoạn tăng hay giảm: level off.",
          "keys": [
            "level off"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Up and down again and again: fluctuate. The top: peak at, or reach a peak.",
          "sub": "Lên xuống thất thường: fluctuate. Đạt đỉnh: peak at, hay reach a peak."
        }
      ],
      "ref": "p1"
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
            "at": "l1",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "19:30 · Dũng viết thử",
            "icon": "pencil"
          },
          {
            "id": "c-x",
            "t": "text",
            "text": "rose the prices",
            "x": 3996,
            "y": 630,
            "size": 46,
            "at": "l1:rose",
            "color": "coral"
          },
          {
            "id": "c-xx",
            "t": "strike",
            "over": "c-x",
            "at": "l2:object"
          },
          {
            "id": "c-ok",
            "t": "text",
            "text": "Prices rose · raised prices",
            "x": 3996,
            "y": 700,
            "size": 40,
            "at": "l3:raise",
            "color": "accent",
            "hl": [
              {
                "text": "raised",
                "at": "l3:raise"
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
          "say": "The shop rose the prices last year.",
          "sub": "Năm ngoái cửa hàng rose the prices.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Careful. Rise takes no object. Prices rose.",
          "sub": "Cẩn thận. Rise không có tân ngữ. Viết: Prices rose.",
          "face": "thinking",
          "keys": [
            "không có tân ngữ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Want an object? Use raise. The shop raised its prices.",
          "sub": "Muốn có tân ngữ? Dùng raise. The shop raised its prices.",
          "keys": [
            "Dùng raise"
          ]
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
            "text": "② 19:45 · Danh từ: in hay of?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "a rise · an increase · a fall",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l1:nouns"
          },
          {
            "id": "d-in",
            "t": "text",
            "text": "a rise in prices",
            "x": 5964,
            "y": 270,
            "size": 60,
            "at": "l2:in",
            "hl": [
              {
                "text": "in",
                "at": "l2:in"
              }
            ]
          },
          {
            "id": "d-in2",
            "t": "text",
            "text": "in = thứ thay đổi",
            "x": 6544,
            "y": 285,
            "size": 46,
            "at": "l2:changed",
            "color": "muted"
          },
          {
            "id": "d-of",
            "t": "text",
            "text": "a rise of 5%",
            "x": 5964,
            "y": 370,
            "size": 60,
            "at": "l3:of",
            "color": "accent",
            "hl": [
              {
                "text": "of",
                "at": "l3:of"
              }
            ]
          },
          {
            "id": "d-of2",
            "t": "text",
            "text": "of = mức thay đổi",
            "x": 6544,
            "y": 385,
            "size": 46,
            "at": "l3:size",
            "color": "muted"
          },
          {
            "id": "d-p1",
            "t": "text",
            "text": "The number of visitors rose sharply.",
            "x": 5964,
            "y": 490,
            "size": 42,
            "at": "l4:rose"
          },
          {
            "id": "d-p2",
            "t": "text",
            "text": "There was a sharp rise in…",
            "x": 5964,
            "y": 560,
            "size": 42,
            "at": "l4:There"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hai khuôn câu, đỡ lặp",
            "x": 5964,
            "y": 650,
            "size": 50,
            "at": "l5:two",
            "color": "accent",
            "hl": [
              {
                "text": "đỡ lặp",
                "at": "l5:repeat"
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
          "say": "Stop two, quarter to eight. Most of those words are nouns too: a rise, an increase, a fall, a drop.",
          "sub": "Chặng hai, tám giờ kém mười lăm. Phần lớn có dạng danh từ: a rise, an increase, a fall, a drop."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After the noun, in shows what changed: a rise in prices.",
          "sub": "Sau danh từ, in chỉ thứ thay đổi: a rise in prices.",
          "keys": [
            "thứ thay đổi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Of shows the size of the change: a rise of five per cent.",
          "sub": "Còn of chỉ mức thay đổi: a rise of five per cent.",
          "keys": [
            "mức thay đổi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The number of visitors rose sharply. There was a sharp rise in the number of visitors. Same meaning.",
          "sub": "Hai câu “rose sharply” và “a sharp rise in” cùng nghĩa."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two patterns to rotate, so you don't repeat yourself.",
          "sub": "Có hai khuôn câu để luân phiên, bài đỡ lặp.",
          "keys": [
            "bài đỡ lặp"
          ]
        }
      ],
      "ref": "p2"
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
            "at": 150,
            "fit": "E",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 20:15 · Mạnh, đều, hay nhẹ?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Lớn: sharply · dramatically",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:sharply",
            "hl": [
              {
                "text": "sharply",
                "at": "l2:sharply"
              }
            ]
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "significantly",
            "x": 8252,
            "y": 235,
            "size": 42,
            "at": "l2:significantly"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Đều: steadily · gradually",
            "x": 7932,
            "y": 310,
            "size": 46,
            "at": "l3:steadily"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Nhỏ: slightly",
            "x": 7932,
            "y": 385,
            "size": 46,
            "at": "l3:slightly"
          },
          {
            "id": "e-pr",
            "t": "text",
            "text": "rose sharply ↔ a sharp rise",
            "x": 7932,
            "y": 480,
            "size": 50,
            "at": "l4:sharp",
            "color": "accent",
            "hl": [
              {
                "text": "a sharp rise",
                "at": "l4:sharp"
              }
            ]
          },
          {
            "id": "e-pr2",
            "t": "text",
            "text": "fell slightly ↔ a slight fall",
            "x": 7932,
            "y": 560,
            "size": 50,
            "at": "l4:slight"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, quarter past eight. How big was the change? Adverbs after verbs, adjectives before nouns.",
          "sub": "Chặng ba, tám giờ mười lăm. Thay đổi lớn cỡ nào? Trạng từ sau động từ, tính từ trước danh từ.",
          "keys": [
            "Trạng từ sau động từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Big change: sharply, dramatically, significantly.",
          "sub": "Thay đổi lớn: sharply, dramatically, significantly."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Steady change: steadily, gradually. Small change: slightly.",
          "sub": "Đều đặn: steadily, gradually. Nhỏ: slightly."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learn them in pairs: rose sharply goes with a sharp rise, fell slightly with a slight fall.",
          "sub": "Nhớ theo cặp: rose sharply đi với a sharp rise, fell slightly đi với a slight fall.",
          "keys": [
            "Nhớ theo cặp"
          ]
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
            "fit": "E",
            "move": "cut"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "chart-increasing",
                "classical-building"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:museum",
            "caption": "20:30 · đề luyện, số giả định",
            "icon": "classical-building"
          },
          {
            "id": "e-m",
            "t": "text",
            "text": "40.000 → 85.000 khách",
            "x": 7932,
            "y": 650,
            "size": 46,
            "at": "l1:forty",
            "hl": [
              {
                "text": "85.000",
                "at": "l1:eighty-five"
              }
            ]
          },
          {
            "id": "e-lv",
            "t": "text",
            "text": "+ …and then levelled off",
            "x": 8772,
            "y": 690,
            "size": 40,
            "at": "l4:levelled",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's made-up museum chart: foreign visitors, forty thousand in twenty eighteen to eighty-five thousand in twenty twenty-six.",
          "sub": "Biểu đồ bảo tàng giả định của Thảo: khách nước ngoài từ 40.000 năm 2018 lên 85.000 năm 2026."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Way one: the number of foreign visitors rose sharply, from forty thousand to eighty-five thousand.",
          "sub": "Cách một: the number of foreign visitors rose sharply, từ 40.000 lên 85.000.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Way two: there was a sharp rise in the number of foreign visitors.",
          "sub": "Cách hai: there was a sharp rise in the number of foreign visitors.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Flat afterwards? Add: and then levelled off. One idea, two patterns.",
          "sub": "Sau đó gần như không đổi? Thêm: and then levelled off. Một ý, hai khuôn câu.",
          "keys": [
            "Một ý, hai khuôn câu"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Sáu 20:40 · nhà Thảo",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thay đổi nhỏ mà gọi là dramatic",
          "why": "Từ mạnh chỉ có giá trị khi đúng với số liệu; band 7 cần dùng từ chính xác.",
          "rule": "Nhìn trục số rồi mới chọn mức độ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Here, sales rose dramatically! Look at that line.",
          "sub": "Chỗ này doanh số rose dramatically! Nhìn đường kia kìa.",
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
          "say": "Barely moved! Check the axis first. A tiny change isn't dramatic.",
          "sub": "Nhích chưa nổi một vạch! Nhìn trục số trước đã. Thay đổi nhỏ đâu phải dramatic.",
          "keys": [
            "Nhìn trục số trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Band six: imprecise word choice. Band seven: flexible and precise.",
          "sub": "Band 6: chọn từ thiếu chính xác. Band 7: linh hoạt và chính xác.",
          "keys": [
            "linh hoạt và chính xác"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Then: sales rose slightly over the period.",
          "sub": "Vậy thì: sales rose slightly over the period.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. A strong word only counts when the numbers back it.",
          "sub": "Đúng. Từ mạnh chỉ có giá trị khi đúng với số liệu.",
          "phase": "redo",
          "keys": [
            "đúng với số liệu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p6"
    },
    {
      "id": "s11",
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
            "text": "④ 20:45 · Cao hơn bao nhiêu?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-big",
            "t": "text",
            "text": "Lớn: much · far · a lot · even",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:much",
            "hl": [
              {
                "text": "much · far · a lot",
                "at": "l2:much"
              }
            ]
          },
          {
            "id": "f-bigx",
            "t": "text",
            "text": "…a lot higher than sales in June",
            "x": 100,
            "y": 1330,
            "size": 40,
            "at": "l2:July"
          },
          {
            "id": "f-sm",
            "t": "text",
            "text": "Nhỏ: slightly · a bit · a little",
            "x": 60,
            "y": 1410,
            "size": 46,
            "at": "l3:slightly",
            "hl": [
              {
                "text": "slightly",
                "at": "l3:slightly"
              }
            ]
          },
          {
            "id": "f-smx",
            "t": "text",
            "text": "…slightly lower than we expected",
            "x": 100,
            "y": 1480,
            "size": 40,
            "at": "l3:lower"
          },
          {
            "id": "f-nw",
            "t": "text",
            "text": "nowhere near as … as",
            "x": 60,
            "y": 1570,
            "size": 50,
            "at": "l4:nowhere",
            "color": "coral"
          },
          {
            "id": "f-al",
            "t": "text",
            "text": "almost / nearly as … as",
            "x": 60,
            "y": 1650,
            "size": 50,
            "at": "l5:almost",
            "color": "accent"
          },
          {
            "id": "f-na",
            "t": "text",
            "text": "not as … as = kém hơn",
            "x": 60,
            "y": 1730,
            "size": 46,
            "at": "l6:not"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish — Modifying comparatives",
            "x": 60,
            "y": 1810,
            "size": 28,
            "at": "l2",
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
          "say": "Stop four, quarter to nine. Task one compares a lot, and one modifier tells big gap or small.",
          "sub": "Chặng bốn, chín giờ kém mười lăm. Task 1 so sánh rất nhiều, và một chữ bổ nghĩa cho biết khác biệt lớn hay nhỏ.",
          "keys": [
            "một chữ bổ nghĩa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Big gap, says LearnEnglish: much, far, a lot, even. Sales in July were a lot higher than in June.",
          "sub": "Khác biệt lớn, theo LearnEnglish: much, far, a lot, even. Sales in July were a lot higher than in June.",
          "keys": [
            "Khác biệt lớn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Small gap: slightly, a little, a bit. Registrations were slightly lower than we expected.",
          "sub": "Khác biệt nhỏ: slightly, a little, a bit. Registrations were slightly lower than we expected.",
          "keys": [
            "Khác biệt nhỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "With as as: nowhere near as popular, for a big gap.",
          "sub": "Với as … as: nowhere near as popular, cho khác biệt lớn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Almost as high, nearly as high, for nearly equal.",
          "sub": "Almost as high, nearly as high, cho gần bằng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And not as high as simply means lower.",
          "sub": "Còn not as high as nghĩa là kém hơn.",
          "keys": [
            "kém hơn"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Trước so sánh hơn",
        "wrong": "very higher · more higher",
        "right": "much higher · slightly higher",
        "wrongIllus": "cross-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Very higher? More higher? No.",
          "sub": "Very higher? More higher? Không.",
          "keys": [
            "Không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Much higher. Slightly higher.",
          "sub": "Much higher. Slightly higher.",
          "keys": [
            "Much higher"
          ]
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
            "fit": "F",
            "move": "cut"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
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
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "20:55 · gạch chữ very",
            "icon": "pencil"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "But very makes it stronger, right?",
          "sub": "Nhưng thêm very cho mạnh hơn mà chị?",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "In LearnEnglish, very goes with different from and similar to, not with comparatives.",
          "sub": "Trong bảng của LearnEnglish, very chỉ đi với different from và similar to, không đi với so sánh hơn.",
          "keys": [
            "không đi với so sánh hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And higher already has er. No more in front. Much, far, a lot for big gaps; slightly for small.",
          "sub": "Higher đã có đuôi -er, không thêm more. Much, far, a lot cho khác biệt lớn; slightly cho nhỏ.",
          "keys": [
            "slightly cho nhỏ"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 21:15 · Đơn vị và phần trăm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-u",
            "t": "text",
            "text": "million tonnes · hours per week",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l1:tonnes"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "the number of + đếm được",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l2:number",
            "hl": [
              {
                "text": "the number of",
                "at": "l2:number"
              }
            ]
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "the amount of + không đếm",
            "x": 2028,
            "y": 1415,
            "size": 46,
            "at": "l2:amount"
          },
          {
            "id": "g-p",
            "t": "text",
            "text": "the proportion of + tỉ lệ",
            "x": 2028,
            "y": 1490,
            "size": 46,
            "at": "l3:proportion"
          },
          {
            "id": "g-pc",
            "t": "text",
            "text": "per cent (Anh) · % đều được",
            "x": 2028,
            "y": 1565,
            "size": 44,
            "at": "l4:per cent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, quarter past nine. Units exactly as the chart shows: million tonnes, hours per week, per cent of households.",
          "sub": "Chặng năm, chín giờ mười lăm. Đơn vị ghi đúng như hình: million tonnes, hours per week, % of households.",
          "keys": [
            "ghi đúng như hình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The number of with countable nouns, like students. The amount of with uncountable ones, like water.",
          "sub": "The number of đi với danh từ đếm được, như students. The amount of đi với danh từ không đếm được, như water."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The proportion of, or the percentage of, when the chart gives rates.",
          "sub": "The proportion of hay the percentage of khi hình cho tỉ lệ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "British English often writes per cent. The symbol works fine too.",
          "sub": "Tiếng Anh Anh hay viết per cent. Ký hiệu % vẫn dùng được."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s15",
      "module": "BRK-03",
      "data": {
        "value": 10,
        "suffix": " điểm",
        "label": "phần trăm: từ 20% lên 30%, không phải 10%",
        "illus": "chart-increasing"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Back to our opening question.",
          "sub": "Quay lại câu hỏi mở đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Twenty to thirty is a rise of ten percentage points.",
          "sub": "Hai mươi lên ba mươi là tăng mười điểm phần trăm.",
          "keys": [
            "mười điểm phần trăm"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
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
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "memo"
              ],
              "camera": [
                {
                  "at": "l1",
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
            "at": "l1",
            "caption": "21:20 · Dũng sửa câu mở đầu",
            "icon": "laptop"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "rose by 10 percentage points",
            "x": 2028,
            "y": 1660,
            "size": 44,
            "at": "l1:percentage",
            "hl": [
              {
                "text": "percentage points",
                "at": "l1:percentage"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "rose from 20% to 30% ✓",
            "x": 2028,
            "y": 1730,
            "size": 48,
            "at": "l2:safest",
            "color": "accent",
            "hl": [
              {
                "text": "from 20% to 30%",
                "at": "l2:from"
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
          "say": "So: rose by ten percentage points. Not ten per cent.",
          "sub": "Vậy là: rose by ten percentage points. Không phải ten per cent.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or the safest way of all: rose from twenty per cent to thirty per cent.",
          "sub": "Hoặc cách an toàn nhất: rose from 20% to 30%.",
          "keys": [
            "cách an toàn nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: when a rate changes, say percentage points, or give from and to.",
          "sub": "Rút ra: tỉ lệ đổi thì nói điểm phần trăm, hoặc nêu từ… đến.",
          "keys": [
            "điểm phần trăm"
          ]
        }
      ],
      "ref": "p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 21:30 · Ba câu thành một",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-b1",
            "t": "text",
            "text": "Sales increased in 2019.",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l1:increased",
            "color": "muted"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "Sales increased in 2020.",
            "x": 3996,
            "y": 1315,
            "size": 42,
            "at": "l1:increased+500",
            "color": "muted"
          },
          {
            "id": "h-b3",
            "t": "text",
            "text": "Sales increased again in 2021.",
            "x": 3996,
            "y": 1370,
            "size": 42,
            "at": "l1:again",
            "color": "muted"
          },
          {
            "id": "h-bx",
            "t": "strike",
            "over": "h-b2",
            "at": "l2:same"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Sales rose steadily between 2019 and 2021,",
            "x": 3996,
            "y": 1470,
            "size": 40,
            "at": "l3:steadily",
            "color": "accent",
            "hl": [
              {
                "text": "rose steadily",
                "at": "l3:steadily"
              }
            ]
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "with the largest increase in 2020.",
            "x": 3996,
            "y": 1530,
            "size": 40,
            "at": "l3:largest",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Gom giai đoạn + mức độ",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l4:Takeaway",
            "hl": [
              {
                "text": "Gom giai đoạn",
                "at": "l4:Group"
              }
            ]
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "+ điểm nổi bật",
            "x": 4036,
            "y": 1670,
            "size": 40,
            "at": "l4:key"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, half past nine. Dũng's draft, made-up sales: increased, increased, increased again.",
          "sub": "Chặng sáu, chín rưỡi. Bản nháp của Dũng, số giả định: increased, increased, rồi lại increased."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same pattern three times. Fast or slow? Nobody knows.",
          "sub": "Ba câu một khuôn. Tăng nhanh hay chậm? Chẳng ai biết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After: sales rose steadily between twenty nineteen and twenty twenty-one, with the largest increase in twenty twenty.",
          "sub": "Sau: sales rose steadily between 2019 and 2021, with the largest increase in 2020."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: group the period, add the degree, name the key point.",
          "sub": "Rút ra: gom giai đoạn, thêm mức độ, nêu điểm nổi bật.",
          "keys": [
            "gom giai đoạn"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "id": "h-r1",
            "t": "text",
            "text": "Band thấp: từ lạ dễ sai",
            "x": 3996,
            "y": 1750,
            "size": 40,
            "at": "l1:six",
            "color": "coral"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "rose steadily đúng > từ hiếm sai",
            "x": 4836,
            "y": 1700,
            "size": 40,
            "at": "l2:steadily",
            "color": "accent",
            "hl": [
              {
                "text": "rose steadily",
                "at": "l2:steadily"
              }
            ]
          },
          {
            "id": "h-r3",
            "t": "text",
            "text": "while · whereas · compared with",
            "x": 4836,
            "y": 1770,
            "size": 40,
            "at": "l3:whereas",
            "hl": [
              {
                "text": "whereas",
                "at": "l3:whereas"
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
          "say": "But variety doesn't mean rare words. The descriptors note that at band six and below, risk-taking brings more errors.",
          "sub": "Nhưng đa dạng không phải dùng từ lạ. Bản mô tả band ghi ở band 6 trở xuống, dám thử nhiều từ hơn dễ mắc nhiều lỗi hơn.",
          "keys": [
            "dễ mắc nhiều lỗi hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So skip skyrocketed. A correct rose steadily beats a rare word used wrong.",
          "sub": "Vậy bỏ skyrocketed. Một rose steadily dùng đúng hơn hẳn từ hiếm dùng sai.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To link two groups: while, whereas, compared with.",
          "sub": "Để nối hai nhóm số: while, whereas, compared with.",
          "keys": [
            "while, whereas, compared with"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s19",
      "module": "BRK-07",
      "data": {
        "question": "Có đủ từ rồi, ráp thành một câu số liệu thế nào?",
        "illus": "thinking-face"
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
          "say": "You have the words. How do you build one full data sentence?",
          "sub": "Có đủ từ rồi. Ráp thành một câu số liệu thế nào?",
          "keys": [
            "Ráp thành một câu số liệu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 21:45 · Năm mảnh ráp câu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven",
            "hl": [
              {
                "text": "Năm mảnh",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "from A to B",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:from"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "by X",
            "x": 6374,
            "y": 1260,
            "size": 50,
            "at": "l2:by"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "reaching X",
            "x": 6564,
            "y": 1260,
            "size": 50,
            "at": "l3:reaching"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "peaked at X",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l3:peaked"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "followed by…",
            "x": 6304,
            "y": 1340,
            "size": 50,
            "at": "l3:followed"
          },
          {
            "id": "i-pr",
            "t": "text",
            "text": "in 2020 · between … and … · at around 50%",
            "x": 5964,
            "y": 1430,
            "size": 40,
            "at": "l4:between",
            "color": "muted"
          },
          {
            "id": "i-ex1",
            "t": "text",
            "text": "Bus use climbed by 15 percentage points",
            "x": 5964,
            "y": 1530,
            "size": 46,
            "at": "l5:climbed",
            "color": "accent",
            "hl": [
              {
                "text": "by 15 percentage points",
                "at": "l5:fifteen"
              }
            ]
          },
          {
            "id": "i-ex2",
            "t": "text",
            "text": "between 2010 and 2020, reaching 35%.",
            "x": 5964,
            "y": 1600,
            "size": 46,
            "at": "l5:reaching",
            "color": "accent",
            "hl": [
              {
                "text": "reaching 35%",
                "at": "l5:reaching"
              }
            ]
          },
          {
            "id": "i-nx",
            "t": "text",
            "text": "Bài tiếp: bảng số liệu, bản đồ",
            "x": 5964,
            "y": 1710,
            "size": 44,
            "at": "l6:tables"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, quarter to ten. Five pieces to build a data sentence.",
          "sub": "Chặng bảy, mười giờ kém mười lăm. Năm mảnh ráp một câu số liệu.",
          "keys": [
            "Năm mảnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From A to B for start and end. By X for the size of change.",
          "sub": "From A to B cho điểm đầu, điểm cuối. By X cho mức thay đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Reaching X for the end point. Peaked at X for the top. Followed by for the next stage.",
          "sub": "Reaching X cho điểm đến. Peaked at X cho đỉnh. Followed by cho giai đoạn sau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Prepositions: in a year, between two years, at around a level.",
          "sub": "Giới từ: in cho năm, between … and cho giai đoạn, at around cho một mức."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Bus use climbed by fifteen percentage points between twenty ten and twenty twenty, reaching thirty-five per cent.",
          "sub": "Bus use climbed by 15 percentage points between 2010 and 2020, reaching 35%.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next comes choosing and grouping data, in tables and maps.",
          "sub": "Tiếp theo là chọn và nhóm số liệu, ở bảng và bản đồ.",
          "keys": [
            "chọn và nhóm số liệu"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "text": "22:00 · cùng bàn ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
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
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "chart-increasing"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:ten",
            "caption": "Thứ Sáu 22:00 · nhà Thảo",
            "icon": "memo"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "rose from 20% to 30% ✓",
            "x": 7932,
            "y": 1270,
            "size": 50,
            "at": "l2:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l2:thirty"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "very higher → much higher",
            "x": 7932,
            "y": 1360,
            "size": 46,
            "at": "l2:much"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Lựa lời: đúng mức, đúng đơn vị",
            "x": 7932,
            "y": 1460,
            "size": 46,
            "at": "l4:chose",
            "hl": [
              {
                "text": "Lựa lời",
                "at": "l4:chose"
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
          "say": "Ten p.m. Same table, same draft, new words.",
          "sub": "Mười giờ tối. Vẫn bàn ấy, bản nháp ấy, chữ đã khác.",
          "keys": [
            "chữ đã khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The rate rose from twenty to thirty per cent. And buses were much higher.",
          "sub": "The rate rose from twenty to thirty per cent. Còn xe buýt thì much higher.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No very, no dramatic for a tiny change. Nailed it!",
          "sub": "Không very, không dramatic cho thay đổi nhỏ. Chỉ tay được rồi!",
          "face": "happy",
          "keys": [
            "Chỉ tay được rồi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "He chose his words, and every number fits.",
          "sub": "Lựa lời mà viết, con số nào cũng vừa.",
          "keys": [
            "Lựa lời mà viết"
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": "l1:fancy",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-s",
            "t": "text",
            "text": "Tóm lại: ba lớp chính xác",
            "x": 7932,
            "y": 1550,
            "size": 50,
            "at": "l1:So",
            "hl": [
              {
                "text": "ba lớp",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: 2 khuôn câu mỗi ý",
            "x": 7932,
            "y": 1640,
            "size": 42,
            "at": "l5:Try",
            "hl": [
              {
                "text": "2 khuôn câu",
                "at": "l5:two"
              }
            ]
          },
          {
            "id": "j-do2",
            "t": "text",
            "text": "gạch mọi very trước so sánh hơn",
            "x": 7972,
            "y": 1710,
            "size": 42,
            "at": "l5:cross"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 9472,
            "y": 40,
            "at": "l2:words"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1600,
            "y": 1130,
            "at": "l3:far"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1130,
            "at": "l4:units"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; định dạng, tiêu chí thi có thể đổi — kiểm lại trang chính thức IELTS. Số liệu giả định, nhân vật minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "So, precise data language isn't about fancy words. It has three layers.",
          "sub": "Tóm lại, ngôn ngữ số liệu chính xác không nằm ở từ kêu. Nó có ba lớp.",
          "keys": [
            "ba lớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: trend words with the right degree.",
          "sub": "Một: từ xu hướng có mức độ đúng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: Much, far, a lot for big gaps; slightly for small. Never very.",
          "sub": "Hai: much, far, a lot cho khác biệt lớn; slightly cho nhỏ. Không very."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: correct units, and percentage points when a rate changes.",
          "sub": "Ba: đơn vị đúng, và điểm phần trăm khi tỉ lệ đổi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: take a line graph, write each change in two patterns, then cross out every very before a comparative.",
          "sub": "Làm ngay: lấy một biểu đồ đường, viết mỗi thay đổi bằng hai khuôn câu, rồi gạch mọi chữ very trước so sánh hơn.",
          "keys": [
            "hai khuôn câu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: tables and maps.",
          "sub": "Bài tiếp: bảng số liệu và bản đồ.",
          "keys": [
            "bảng số liệu và bản đồ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "A rate rises from twenty to thirty per cent, why is rose by ten per cent inaccurate?",
        "options": [
          "Because per cent can never be used to describe any kind of rate",
          "Because the rate actually fell, so rose is the wrong verb here",
          "A rise of ten per cent on twenty per cent would only give twenty two"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "chart-increasing",
        "why": "Tăng 10% của 20% chỉ là 22%. Thay đổi ở đây là 10 điểm phần trăm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A rate rises from twenty to thirty per cent, why is rose by ten per cent inaccurate?",
          "sub": "Một tỉ lệ tăng từ 20% lên 30%, vì sao rose by 10% không chính xác?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A rise of ten per cent on twenty per cent would only give twenty two.",
          "sub": "Tăng mười phần trăm của hai mươi chỉ ra hai mươi hai phần trăm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Say ten percentage points, or from twenty to thirty.",
          "sub": "Nói mười điểm phần trăm, hoặc từ hai mươi đến ba mươi."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[27]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Choose your words, check your units. Then try the forty questions below.",
          "sub": "Lựa lời, soát đơn vị. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TỐI THỨ SÁU ở nhà Thảo, Dũng sang ôn từ (19:00 bản nháp increased × 3 → 19:15 động từ, rise/raise → 19:45 danh từ in/of → 20:15 mức độ, ví dụ bảo tàng → 20:40 “dramatically” cho thay đổi nhỏ, “Khoan đã!” → 20:45 so sánh có bổ nghĩa, very higher → 21:15 đơn vị, điểm phần trăm → 21:30 gom giai đoạn → 21:45 năm mảnh ráp câu → 22:00 khép vòng). Mở HOOK-21: “20% → 30%: rose by 10%?” lặng cho đoán, lật: 22%. Nhân vật: Thảo, Dũng — w145/_series/ielts-writing-task1-takers.md. Cảnh ngắt nhịp: BRK-08 (một tối), BRK-04 (very higher / much higher), BRK-03 (10 điểm phần trăm), BRK-07 (rehook ráp câu). Ca dao: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau”. Câu đố questions[27].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
