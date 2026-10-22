// seed-to-leaf-matrix--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "seed-to-leaf-matrix--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "epc-legal-counsel",
    "slug": "seed-to-leaf-matrix",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao hợp đồng EPC có từng điều khoản: dựng từ hạt đến lá thế nào?",
    "series": "Soạn và rà hợp đồng EPC từ hạt đến lá — cho pháp chế, viết câu đủ vế, dẫn chiếu đúng và giữ vững khi đàm phán"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "anchor": {
    "type": "object",
    "value": "tờ giấy trắng",
    "ref": "p23"
  },
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
            "fit": [
              "a-sheet",
              "a-pen"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1400
          },
          {
            "at": "l4",
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
            "id": "a-sheet",
            "t": "illus",
            "name": "page-facing-up",
            "x": 200,
            "y": 120,
            "size": 330,
            "at": 0
          },
          {
            "id": "a-pen",
            "t": "illus",
            "name": "pencil",
            "x": 560,
            "y": 330,
            "size": 120,
            "at": "l1:pencil"
          },
          {
            "id": "a-blank",
            "t": "text",
            "text": "Tờ giấy trắng",
            "x": 120,
            "y": 500,
            "size": 60,
            "at": "l1:blank",
            "hl": [
              {
                "text": "trắng",
                "at": "l1:blank"
              }
            ]
          },
          {
            "id": "a-eve",
            "t": "text",
            "text": "Tối nay: cả một hợp đồng?",
            "x": 60,
            "y": 600,
            "size": 46,
            "at": "l2:evening",
            "color": "coral"
          },
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Thứ Bảy, 8:00 · bàn pháp chế",
            "icon": "page-facing-up"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A blank sheet of paper, and one red pencil.",
          "sub": "Một tờ giấy trắng, và một cây bút chì đỏ.",
          "keys": [
            "tờ giấy trắng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "By this evening, it should hold a whole EPC contract. Without a template.",
          "sub": "Đến tối nay, nó phải chứa cả một hợp đồng EPC. Không cần mẫu.",
          "keys": [
            "Không cần mẫu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It belongs to Bác Bình, head of legal for the owner. Saturday, eight a.m.",
          "sub": "Tờ giấy của Bác Bình, trưởng pháp chế bên Chủ đầu tư. Tám giờ sáng thứ Bảy.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Last week, a map of nine families. Today: why each clause exists at all.",
          "sub": "Tuần trước là bản đồ chín nhóm. Hôm nay: vì sao từng điều khoản phải có.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: a tree has its roots, water has its source.",
          "sub": "Ông bà dặn: “Cây có cội, nước có nguồn.”",
          "keys": [
            "Cây có cội, nước có nguồn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p23"
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
          }
        ],
        "items": [
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cây có cội, nước có nguồn”",
            "x": 60,
            "y": 690,
            "size": 44,
            "at": "l1:roots",
            "color": "accent",
            "hl": [
              {
                "text": "có cội",
                "at": "l1:roots"
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
          "say": "Every clause has roots too: a real question that grew it.",
          "sub": "Điều khoản cũng có cội: một câu hỏi thực tế đã mọc ra nó.",
          "keys": [
            "có cội"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A contract does not drop from the sky as twenty ready clauses. It grows as the parties meet.",
          "sub": "Hợp đồng không rơi xuống thành 20 điều có sẵn. Nó mọc theo đúng trình tự hai bên gặp nhau."
        }
      ],
      "ref": "intro,p1"
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
            "text": "Vì sao có từng điều khoản?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:EPC",
            "hl": [
              {
                "text": "Vì sao",
                "at": "l1:have"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Theo số điều: biết có gì",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:numbers",
            "color": "muted"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Theo tầng: biết vì sao",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l2:layers",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "l2:why"
              }
            ]
          },
          {
            "id": "b-gap",
            "t": "text",
            "text": "Không có điều trả lời = lỗ hổng",
            "x": 2028,
            "y": 345,
            "size": 40,
            "at": "l3:gap",
            "color": "coral",
            "hl": [
              {
                "text": "lỗ hổng",
                "at": "l3:gap"
              }
            ]
          },
          {
            "id": "b-l0",
            "t": "box",
            "x": 2028,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+0",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-l1",
            "t": "box",
            "x": 2233,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+250",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-l2",
            "t": "box",
            "x": 2438,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+500",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-l3",
            "t": "box",
            "x": 2643,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+750",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-l4",
            "t": "box",
            "x": 2848,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+1000",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-l5",
            "t": "box",
            "x": 3053,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+1250",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-l6",
            "t": "box",
            "x": 3258,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+1500",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-l7",
            "t": "box",
            "x": 3463,
            "y": 470,
            "w": 185,
            "h": 90,
            "at": "l4:eight+1750",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-lt0",
            "t": "text",
            "text": "Tầng 0",
            "x": 2048,
            "y": 488,
            "size": 38,
            "at": "l4:eight+150"
          },
          {
            "id": "b-lt1",
            "t": "text",
            "text": "Tầng 1",
            "x": 2253,
            "y": 488,
            "size": 38,
            "at": "l4:eight+400"
          },
          {
            "id": "b-lt2",
            "t": "text",
            "text": "Tầng 2",
            "x": 2458,
            "y": 488,
            "size": 38,
            "at": "l4:eight+650"
          },
          {
            "id": "b-lt3",
            "t": "text",
            "text": "Tầng 3",
            "x": 2663,
            "y": 488,
            "size": 38,
            "at": "l4:eight+900"
          },
          {
            "id": "b-lt4",
            "t": "text",
            "text": "Tầng 4",
            "x": 2868,
            "y": 488,
            "size": 38,
            "at": "l4:eight+1150"
          },
          {
            "id": "b-lt5",
            "t": "text",
            "text": "Tầng 5",
            "x": 3073,
            "y": 488,
            "size": 38,
            "at": "l4:eight+1400"
          },
          {
            "id": "b-lt6",
            "t": "text",
            "text": "Tầng 6",
            "x": 3278,
            "y": 488,
            "size": 38,
            "at": "l4:eight+1650"
          },
          {
            "id": "b-lt7",
            "t": "text",
            "text": "Tầng 7",
            "x": 3483,
            "y": 488,
            "size": 38,
            "at": "l4:eight+1900"
          },
          {
            "id": "b-9",
            "t": "text",
            "text": "8 tầng: kiểm · 9 nhóm: soạn",
            "x": 2028,
            "y": 620,
            "size": 42,
            "at": "l5:nine",
            "hl": [
              {
                "text": "9 nhóm",
                "at": "l5:nine"
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
          "say": "So why does an EPC contract have each clause? And how do you build it from zero?",
          "sub": "Vậy vì sao hợp đồng EPC có từng điều khoản, và dựng từ con số không thế nào?",
          "keys": [
            "vì sao hợp đồng EPC",
            "từ con số không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read by clause numbers, you know what is there. Read by layers, you know why.",
          "sub": "Đọc theo số điều, biết hợp đồng có gì. Đọc theo tầng, biết vì sao nó phải có.",
          "keys": [
            "vì sao nó phải có"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When a real question has no clause to answer it, that is a gap, however thick the draft.",
          "sub": "Một câu hỏi thực tế không có điều khoản trả lời là một lỗ hổng, dù bản nháp dày đến đâu.",
          "keys": [
            "lỗ hổng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eight layers, from seed to leaf. Each question born from the one before.",
          "sub": "Tám tầng, từ hạt đến lá. Mỗi câu hỏi sinh ra từ tầng trước."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Layers to understand and check. For drafting, the contract still sits in nine families.",
          "sub": "Tám tầng để hiểu và kiểm; khi soạn, hợp đồng vẫn sắp theo 9 nhóm.",
          "keys": [
            "9 nhóm"
          ]
        }
      ],
      "ref": "p1,p2"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:30 · Tầng 0 · Hạt",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:seed"
          },
          {
            "id": "c-seed",
            "t": "illus",
            "name": "seedling",
            "x": 5416,
            "y": 40,
            "size": 150,
            "at": "l1:seed"
          },
          {
            "id": "c-q0",
            "t": "text",
            "text": "Ai với ai?",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l2:who"
          },
          {
            "id": "c-ar0",
            "t": "arrow",
            "from": [
              4396,
              200
            ],
            "to": [
              4516,
              200
            ],
            "at": "l2:who+300"
          },
          {
            "id": "c-a0",
            "t": "text",
            "text": "các bên, người ký",
            "x": 4536,
            "y": 170,
            "size": 46,
            "at": "l2:who+500",
            "color": "accent"
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "Mua cái gì?",
            "x": 3996,
            "y": 265,
            "size": 48,
            "at": "l2:what"
          },
          {
            "id": "c-ar1",
            "t": "arrow",
            "from": [
              4396,
              295
            ],
            "to": [
              4516,
              295
            ],
            "at": "l2:what+300"
          },
          {
            "id": "c-a1",
            "t": "text",
            "text": "phạm vi công việc",
            "x": 4536,
            "y": 265,
            "size": 46,
            "at": "l2:what+500",
            "color": "accent"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "Giá bao nhiêu?",
            "x": 3996,
            "y": 360,
            "size": 48,
            "at": "l3:price"
          },
          {
            "id": "c-ar2",
            "t": "arrow",
            "from": [
              4396,
              390
            ],
            "to": [
              4516,
              390
            ],
            "at": "l3:price+300"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "giá hợp đồng",
            "x": 4536,
            "y": 360,
            "size": 46,
            "at": "l3:price+500",
            "color": "accent"
          },
          {
            "id": "c-q3",
            "t": "text",
            "text": "Khi nào xong?",
            "x": 3996,
            "y": 455,
            "size": 48,
            "at": "l3:when"
          },
          {
            "id": "c-ar3",
            "t": "arrow",
            "from": [
              4396,
              485
            ],
            "to": [
              4516,
              485
            ],
            "at": "l3:when+300"
          },
          {
            "id": "c-a3",
            "t": "text",
            "text": "thời hạn hoàn thành",
            "x": 4536,
            "y": 455,
            "size": 46,
            "at": "l3:when+500",
            "color": "accent"
          },
          {
            "id": "c-bad",
            "t": "text",
            "text": "Sai chủ thể, sai người ký →",
            "x": 3996,
            "y": 580,
            "size": 44,
            "at": "l4:wrong",
            "color": "coral"
          },
          {
            "id": "c-bad2",
            "t": "text",
            "text": "tranh chấp hiệu lực, thẩm quyền",
            "x": 4036,
            "y": 650,
            "size": 40,
            "at": "l4:validity",
            "color": "coral",
            "hl": [
              {
                "text": "hiệu lực",
                "at": "l4:validity"
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
          "say": "Eight thirty. Layer zero, the seed: two parties meet and agree to work together.",
          "sub": "Tám rưỡi. Tầng 0 là hạt: hai bên gặp nhau, đồng ý hợp tác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four root questions. Who with whom? Buying what?",
          "sub": "Bốn câu hỏi gốc. Ai với ai? Mua cái gì?",
          "keys": [
            "Bốn câu hỏi gốc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At what price? Finished when? They grow the parties, scope, price and completion time.",
          "sub": "Giá bao nhiêu? Khi nào xong? Từ đó mọc ra các bên, phạm vi, giá và thời hạn hoàn thành."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Get the wrong party or the wrong signatory, and validity or authority can be disputed.",
          "sub": "Sai chủ thể hay sai người ký thì hợp đồng có thể bị tranh chấp về hiệu lực hoặc thẩm quyền.",
          "keys": [
            "hiệu lực hoặc thẩm quyền"
          ]
        }
      ],
      "ref": "p3"
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
            "text": "② 9:30 · Tầng 1 và 2",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Layer"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Tầng 1: nhận đúng thứ đã mua?",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l1:Layer",
            "hl": [
              {
                "text": "nhận đúng",
                "at": "l1:right thing"
              }
            ]
          },
          {
            "id": "d-1a",
            "t": "text",
            "text": "Yêu cầu CĐT · thông số phụ lục",
            "x": 6004,
            "y": 230,
            "size": 36,
            "at": "l2:requirements",
            "color": "muted"
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "thiết kế, phù hợp mục đích",
            "x": 6004,
            "y": 285,
            "size": 36,
            "at": "l2:purpose",
            "color": "muted"
          },
          {
            "id": "d-1c",
            "t": "text",
            "text": "thử nghiệm · thứ tự ưu tiên",
            "x": 6004,
            "y": 340,
            "size": 36,
            "at": "l2:precedence",
            "color": "muted"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Tầng 2: tiền đi thế nào?",
            "x": 5964,
            "y": 420,
            "size": 44,
            "at": "l3:money",
            "hl": [
              {
                "text": "tiền",
                "at": "l3:money"
              }
            ]
          },
          {
            "id": "d-2a",
            "t": "text",
            "text": "trả trước nhiều: mất đòn bẩy",
            "x": 6004,
            "y": 490,
            "size": 36,
            "at": "l3:early",
            "color": "coral"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "trả sau nhiều: thầu thiếu vốn",
            "x": 6004,
            "y": 545,
            "size": 36,
            "at": "l3:late",
            "color": "coral"
          },
          {
            "id": "d-2c",
            "t": "text",
            "text": "theo mốc · bảo lãnh · tiền giữ lại",
            "x": 6004,
            "y": 605,
            "size": 36,
            "at": "l3:milestone",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nine thirty. Layer one: how do we know we got the right thing?",
          "sub": "Chín rưỡi. Tầng 1: làm sao biết nhận đúng thứ mình mua?",
          "keys": [
            "nhận đúng thứ mình mua"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Requirements and specs, design duty, fitness for purpose, tests, and an order of precedence.",
          "sub": "Yêu cầu của chủ đầu tư và thông số, trách nhiệm thiết kế, phù hợp mục đích, thử nghiệm, thứ tự ưu tiên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Layer two: how does money move? Pay early, lose leverage; pay late, the contractor runs dry. So: milestone payments, guarantees, retention, tax.",
          "sub": "Tầng 2: tiền đi thế nào? Trả trước nhiều mất đòn bẩy; trả sau nhiều nhà thầu thiếu vốn. Nên có thanh toán theo mốc, bảo lãnh, tiền giữ lại, thuế."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then a call. This is Thảo, an electrical engineer on the technical team.",
          "sub": "Rồi có cuộc gọi. Đây là Thảo, kỹ sư điện ban kỹ thuật.",
          "keys": [
            "Thảo"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s05",
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
            "at": "l1",
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
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": 0,
            "caption": "9:45 · gọi trực tuyến",
            "icon": "telephone-receiver"
          },
          {
            "id": "d-n1",
            "t": "text",
            "text": "NĐ 210: phạm vi, thiết kế rõ",
            "x": 6804,
            "y": 690,
            "size": 32,
            "at": "l2:scope",
            "hl": [
              {
                "text": "NĐ 210",
                "at": "l1:Decree"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Nghị định 210/2026/NĐ-CP (theo bài học)",
            "x": 5964,
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
          "who": "thao",
          "say": "Bác, Decree two ten has its own principles for EPC. First: scope, design and equipment must be clear.",
          "sub": "Bác ơi, Nghị định 210 có nguyên tắc riêng cho EPC. Thứ nhất: phạm vi, yêu cầu thiết kế, cung cấp thiết bị phải rõ.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Second: design, scope and price controlled as one. Third: the contractor answers for complete, matching design and equipment.",
          "sub": "Thứ hai: thiết kế, phạm vi, giá kiểm soát thống nhất. Thứ ba: nhà thầu chịu trách nhiệm về tính đầy đủ, đồng bộ của thiết kế, thiết bị, công nghệ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Fourth: payment tied to the main milestones.",
          "sub": "Thứ tư: thanh toán gắn với mốc chính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Four ideas, sitting right in layers one and two. Good.",
          "sub": "Bốn ý, nằm đúng ở tầng 1 và tầng 2. Tốt.",
          "keys": [
            "tầng 1 và tầng 2"
          ],
          "face": "happy"
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s06",
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
            "text": "③ 11:00 · Tầng 3 · Hậu quả",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Eleven"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Làm sai, chậm, kém thì sao?",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:wrong",
            "color": "coral"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Mỗi nghĩa vụ → 1 vế hậu quả",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l2:consequence",
            "color": "accent",
            "hl": [
              {
                "text": "vế hậu quả",
                "at": "l2:consequence"
              }
            ]
          },
          {
            "id": "e-a0",
            "t": "text",
            "text": "Chậm",
            "x": 7932,
            "y": 340,
            "size": 40,
            "at": "l3:late"
          },
          {
            "id": "e-ar0",
            "t": "arrow",
            "from": [
              8342,
              365
            ],
            "to": [
              8432,
              365
            ],
            "at": "l3:late+200"
          },
          {
            "id": "e-b0",
            "t": "text",
            "text": "phạt chậm, bồi thường định trước",
            "x": 8452,
            "y": 340,
            "size": 40,
            "at": "l3:late+400",
            "color": "muted"
          },
          {
            "id": "e-a1",
            "t": "text",
            "text": "Kém hiệu suất",
            "x": 7932,
            "y": 415,
            "size": 40,
            "at": "l3:performance"
          },
          {
            "id": "e-ar1",
            "t": "arrow",
            "from": [
              8342,
              440
            ],
            "to": [
              8432,
              440
            ],
            "at": "l3:performance+200"
          },
          {
            "id": "e-b1",
            "t": "text",
            "text": "bảo đảm hiệu suất",
            "x": 8452,
            "y": 415,
            "size": 40,
            "at": "l3:performance+400",
            "color": "muted"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "Hỏng sau bàn giao",
            "x": 7932,
            "y": 490,
            "size": 40,
            "at": "l4:handover"
          },
          {
            "id": "e-ar2",
            "t": "arrow",
            "from": [
              8342,
              515
            ],
            "to": [
              8432,
              515
            ],
            "at": "l4:handover+200"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "bảo đảm khiếm khuyết",
            "x": 8452,
            "y": 490,
            "size": 40,
            "at": "l4:handover+400",
            "color": "muted"
          },
          {
            "id": "e-a3",
            "t": "text",
            "text": "Gây thiệt hại",
            "x": 7932,
            "y": 565,
            "size": 40,
            "at": "l4:others"
          },
          {
            "id": "e-ar3",
            "t": "arrow",
            "from": [
              8342,
              590
            ],
            "to": [
              8432,
              590
            ],
            "at": "l4:others+200"
          },
          {
            "id": "e-b3",
            "t": "text",
            "text": "bồi hoàn",
            "x": 8452,
            "y": 565,
            "size": 40,
            "at": "l4:others+400",
            "color": "muted"
          },
          {
            "id": "e-box",
            "t": "box",
            "x": 9052,
            "y": 160,
            "w": 500,
            "h": 400,
            "at": "l5:cap",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "e-cap",
            "t": "text",
            "text": "Tối đa bao nhiêu?",
            "x": 9082,
            "y": 190,
            "size": 40,
            "at": "l5:most",
            "hl": [
              {
                "text": "Tối đa",
                "at": "l5:most"
              }
            ]
          },
          {
            "id": "e-sum",
            "t": "text",
            "text": "Phạt + bồi thường: cộng dồn?",
            "x": 9082,
            "y": 260,
            "size": 32,
            "at": "l5:combine"
          },
          {
            "id": "e-nocap",
            "t": "text",
            "text": "Không trần → thầu đội giá",
            "x": 9082,
            "y": 350,
            "size": 32,
            "at": "l6:cap",
            "color": "coral"
          },
          {
            "id": "e-vn",
            "t": "text",
            "text": "Im lặng → luật quyết thay",
            "x": 9082,
            "y": 420,
            "size": 32,
            "at": "l6:decide",
            "color": "coral",
            "hl": [
              {
                "text": "luật quyết thay",
                "at": "l6:decide"
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
          "say": "Eleven o'clock. Layer three: what if it goes wrong, late, or poor?",
          "sub": "Mười một giờ. Tầng 3: nếu làm sai, làm chậm, làm kém thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The most important layer. Every duty in layers zero to two needs a consequence here.",
          "sub": "Tầng quan trọng nhất. Mỗi nghĩa vụ ở tầng 0 đến 2 phải có một vế hậu quả ở đây.",
          "keys": [
            "vế hậu quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Late: delay damages or liquidated damages. Finished but weak performance: a performance guarantee.",
          "sub": "Chậm: phạt chậm hoặc bồi thường chậm định trước. Xong mà kém hiệu suất: bảo đảm hiệu suất."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Broken after handover: defects liability. Harm to others: an indemnity.",
          "sub": "Hỏng sau bàn giao: bảo đảm khiếm khuyết. Gây thiệt hại cho người khác: bồi hoàn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two questions many drafts skip: what is the cap at most, and do penalties and damages combine?",
          "sub": "Hai câu nhiều bản nháp bỏ qua: tối đa chịu bao nhiêu, và phạt với bồi thường có cộng dồn không?",
          "keys": [
            "cộng dồn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "No cap, and the contractor walks or raises the price. Silent on both, and Vietnamese law, which separates them, will decide.",
          "sub": "Không có trần thì nhà thầu không ký hoặc đội giá. Không nói rõ thì luật Việt Nam, vốn tách hai chế tài này, sẽ quyết thay.",
          "keys": [
            "quyết thay"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s07",
      "module": "BRK-07",
      "data": {
        "question": "Có hạn hoàn thành mà không có điều phạt chậm: còn gì trong tay?",
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
          "say": "A finish date, but no delay damages clause. What is left in your hand?",
          "sub": "Có hạn hoàn thành mà không có điều phạt chậm: chủ đầu tư còn gì trong tay?",
          "keys": [
            "còn gì trong tay"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "e-cod",
            "t": "text",
            "text": "“Đạt Vận hành Thương mại trước Ngày [ ]”",
            "x": 7932,
            "y": 660,
            "size": 34,
            "at": "l1:before",
            "color": "muted"
          },
          {
            "id": "e-nod",
            "t": "text",
            "text": "— không có điều phạt chậm",
            "x": 8772,
            "y": 660,
            "size": 34,
            "at": "l1:delay",
            "color": "coral",
            "hl": [
              {
                "text": "không có điều phạt chậm",
                "at": "l1:delay"
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
          "say": "Try it: the draft says commercial operation before a date, with no delay damages anywhere.",
          "sub": "Thử nghĩ: bản nháp ghi “đạt Vận hành Thương mại trước Ngày [ ]”, cả hợp đồng không có điều phạt chậm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Noon. Meet Dũng, a young site engineer, back from the site with an opinion.",
          "sub": "Mười hai giờ trưa. Đây là Dũng, kỹ sư hiện trường trẻ, từ công trường về, có ngay ý kiến.",
          "keys": [
            "Dũng"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "12:00 · bàn pháp chế",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thiếu điều phạt chậm? Cứ kiện là xong",
          "why": "Vẫn đòi bồi thường theo luật, nhưng phải tự chứng minh thiệt hại; không mức định trước, không trần, không quyền chấm dứt.",
          "rule": "Nghĩa vụ không có hậu quả là lời hứa"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Contractor's late? No clause, no problem. We just sue. Done!",
          "sub": "Nhà thầu trễ? Không có điều cũng chẳng sao. Kiện thôi. Ok, làm luôn!",
          "pose": "thumb",
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
          "say": "You can claim under the law, but you must prove the loss and the link.",
          "sub": "Đòi bồi thường theo luật được, nhưng phải tự chứng minh thiệt hại và mối liên hệ với vi phạm.",
          "keys": [
            "tự chứng minh thiệt hại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Then write delay damages, a cap, and termination for long delay.",
          "sub": "Vậy viết thêm phạt chậm, trần, và quyền chấm dứt khi chậm kéo dài.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. A duty with no consequence is a promise, not a clause.",
          "sub": "Đúng. Nghĩa vụ không có hậu quả là lời hứa, không phải điều khoản.",
          "phase": "redo",
          "keys": [
            "lời hứa, không phải điều khoản"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 13:30 · Tầng 4 · Khi thay đổi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "f-a0",
            "t": "text",
            "text": "CĐT muốn đổi",
            "x": 60,
            "y": 1250,
            "size": 38,
            "at": "l2:change"
          },
          {
            "id": "f-b0",
            "t": "text",
            "text": "→ Thay đổi",
            "x": 560,
            "y": 1250,
            "size": 38,
            "at": "l2:change+300",
            "color": "accent"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "Luật đổi",
            "x": 60,
            "y": 1322,
            "size": 38,
            "at": "l2:law"
          },
          {
            "id": "f-b1",
            "t": "text",
            "text": "→ thay đổi pháp luật",
            "x": 560,
            "y": 1322,
            "size": 38,
            "at": "l2:law+300",
            "color": "accent"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "Chậm do CĐT, khách quan",
            "x": 60,
            "y": 1394,
            "size": 38,
            "at": "l2:delay"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "→ gia hạn",
            "x": 560,
            "y": 1394,
            "size": 38,
            "at": "l2:delay+300",
            "color": "accent"
          },
          {
            "id": "f-a3",
            "t": "text",
            "text": "Địa chất khác",
            "x": 60,
            "y": 1466,
            "size": 38,
            "at": "l3:ground"
          },
          {
            "id": "f-b3",
            "t": "text",
            "text": "→ điều kiện công trường",
            "x": 560,
            "y": 1466,
            "size": 38,
            "at": "l3:ground+300",
            "color": "accent"
          },
          {
            "id": "f-a4",
            "t": "text",
            "text": "Thiên tai",
            "x": 60,
            "y": 1538,
            "size": 38,
            "at": "l3:disaster"
          },
          {
            "id": "f-b4",
            "t": "text",
            "text": "→ bất khả kháng",
            "x": 560,
            "y": 1538,
            "size": 38,
            "at": "l3:disaster+300",
            "color": "accent"
          },
          {
            "id": "f-a5",
            "t": "text",
            "text": "Đòi thêm",
            "x": 60,
            "y": 1610,
            "size": 38,
            "at": "l3:claims"
          },
          {
            "id": "f-b5",
            "t": "text",
            "text": "→ khiếu nại, thông báo",
            "x": 560,
            "y": 1610,
            "size": 38,
            "at": "l3:claims+300",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One thirty. Layer four: what if circumstances change?",
          "sub": "Một rưỡi chiều. Tầng 4: nếu hoàn cảnh thay đổi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The owner wants a change: a Variation clause. The law changes: change in law. Delay by the owner or outside events: extension.",
          "sub": "Chủ đầu tư muốn đổi: điều Thay đổi. Luật đổi: điều thay đổi pháp luật. Chậm vì lỗi chủ đầu tư hay sự kiện khách quan: gia hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Different ground: site conditions. Disaster: force majeure. Claims for money or time: notice and claim procedures.",
          "sub": "Địa chất khác dự kiến: điều kiện công trường. Thiên tai: bất khả kháng. Đòi thêm tiền, thời gian: thủ tục khiếu nại và thông báo."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Rủi ro địa chất không lường trước",
        "labels": [
          "Mẫu Silver Book",
          "Luật Xây dựng 2025"
        ],
        "wrong": "Rủi ro về phía nhà thầu, không điều chỉnh giá",
        "right": "Hoàn cảnh thay đổi cơ bản",
        "wrongIllus": "construction",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Silver Book, per law firms: ground risk on the contractor.",
          "sub": "Mẫu Silver Book, theo các hãng luật: rủi ro về nhà thầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The new law: a fundamental change.",
          "sub": "Luật Xây dựng 2025: hoàn cảnh thay đổi cơ bản.",
          "keys": [
            "hoàn cảnh thay đổi cơ bản"
          ]
        }
      ],
      "ref": "p12"
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
            "id": "f-box",
            "t": "box",
            "x": 1000,
            "y": 1250,
            "w": 680,
            "h": 420,
            "at": "l1:clash",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-vc",
            "t": "text",
            "text": "Ký tại Việt Nam:",
            "x": 1030,
            "y": 1280,
            "size": 44,
            "at": "l1:Vietnam"
          },
          {
            "id": "f-vc2",
            "t": "text",
            "text": "xử lý rõ điểm va chạm",
            "x": 1030,
            "y": 1350,
            "size": 40,
            "at": "l1:clash",
            "hl": [
              {
                "text": "va chạm",
                "at": "l1:clash"
              }
            ]
          },
          {
            "id": "f-law",
            "t": "text",
            "text": "Dồn hết rủi ro: hỏi luật sư",
            "x": 1030,
            "y": 1440,
            "size": 36,
            "at": "l2:lawyer",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Mẫu giao ai, luật chia lại",
            "x": 60,
            "y": 1730,
            "size": 46,
            "at": "l3:share",
            "color": "accent",
            "hl": [
              {
                "text": "chia lại",
                "at": "l3:share"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Luật Xây dựng 2025 · mẫu Silver Book (theo phân tích các hãng luật, nêu trong bài)",
            "x": 60,
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
          "say": "So a Silver Book contract signed in Vietnam must handle this clash clearly.",
          "sub": "Nên hợp đồng theo mẫu Silver Book ký tại Việt Nam phải xử lý rõ điểm va chạm này.",
          "keys": [
            "điểm va chạm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Whether a clause dumping all risk on the contractor holds up needs a lawyer, on current law.",
          "sub": "Điều khoản dồn toàn bộ rủi ro cho nhà thầu có hiệu lực không, cần luật sư xem theo văn bản hiện hành."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The foreign form gives risk to one side. Vietnamese law may share it again.",
          "sub": "Rủi ro mẫu nước ngoài giao cho ai, luật Việt Nam có thể chia lại.",
          "keys": [
            "chia lại"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s13",
      "module": "BRK-08",
      "data": {
        "title": "Tầng 5: khi nào coi là xong?",
        "points": [
          {
            "label": "Cơ khí",
            "sub": "Hoàn thành cơ khí",
            "illus": "wrench"
          },
          {
            "label": "Chạy thử",
            "sub": "Chạy thử, đấu nối",
            "illus": "high-voltage"
          },
          {
            "label": "Vận hành",
            "sub": "Vận hành thương mại",
            "illus": "factory"
          },
          {
            "label": "Danh mục tồn",
            "sub": "Việc còn sót",
            "illus": "clipboard"
          },
          {
            "label": "Bàn giao",
            "sub": "Chuyển rủi ro",
            "illus": "handshake"
          },
          {
            "label": "Cuối cùng",
            "sub": "Trả bảo lãnh, quyết toán",
            "illus": "chequered-flag"
          }
        ],
        "current": 4
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three p.m. Layer five, special to power plants: mechanical completion, testing and grid connection, commercial operation.",
          "sub": "Ba giờ chiều. Tầng 5, đặc thù nhà máy điện: hoàn thành cơ khí, chạy thử và đấu nối, vận hành thương mại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Punch list, handover with risk passing, then final completion.",
          "sub": "Danh mục tồn, bàn giao kèm chuyển rủi ro, rồi hoàn thành cuối cùng.",
          "keys": [
            "chuyển rủi ro"
          ]
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
            "at": 150,
            "fit": "G",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 15:00 · Tầng 5, 6, 7",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:asks"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Tầng 5: khi nào xong?",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l1:done",
            "hl": [
              {
                "text": "khi nào xong",
                "at": "l1:done"
              }
            ]
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Tầng 6: nếu đổ vỡ?",
            "x": 2028,
            "y": 1350,
            "size": 48,
            "at": "l2:breaks",
            "color": "coral"
          },
          {
            "id": "g-6a",
            "t": "text",
            "text": "tạm ngừng · chấm dứt · thủ tục",
            "x": 2068,
            "y": 1420,
            "size": 38,
            "at": "l2:suspension"
          },
          {
            "id": "g-6b",
            "t": "text",
            "text": "hậu quả thanh toán · tranh chấp",
            "x": 2068,
            "y": 1480,
            "size": 38,
            "at": "l2:disputes"
          },
          {
            "id": "g-leaf",
            "t": "illus",
            "name": "maple-leaf",
            "x": 3468,
            "y": 1130,
            "size": 140,
            "at": "l3:leaf"
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "Tầng 7: lá, quản trị",
            "x": 2028,
            "y": 1570,
            "size": 48,
            "at": "l3:leaf",
            "color": "accent",
            "hl": [
              {
                "text": "lá",
                "at": "l3:leaf"
              }
            ]
          },
          {
            "id": "g-7a",
            "t": "text",
            "text": "đại diện · bảo hiểm · bảo mật",
            "x": 2068,
            "y": 1640,
            "size": 36,
            "at": "l3:insurance"
          },
          {
            "id": "g-7b",
            "t": "text",
            "text": "cam đoan · bên cho vay · thông báo",
            "x": 2068,
            "y": 1700,
            "size": 36,
            "at": "l4:lenders"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Layer five asks: when is it done, and when does risk pass?",
          "sub": "Tầng 5 hỏi: khi nào coi là xong, rủi ro chuyển lúc nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Layer six: if it breaks? Suspension, termination with grounds and procedure, payment after, and where disputes go.",
          "sub": "Tầng 6: nếu đổ vỡ? Tạm ngừng, chấm dứt có căn cứ, thủ tục, hậu quả thanh toán, nơi giải quyết tranh chấp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Layer seven is the leaf, running things day to day: representatives, insurance, intellectual property and confidentiality.",
          "sub": "Tầng 7 là lá, phần quản trị suốt quá trình: đại diện, tổ chức, bảo hiểm, sở hữu trí tuệ và bảo mật.",
          "keys": [
            "Tầng 7 là lá"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Warranties, help for lenders, definitions, notices and general terms.",
          "sub": "Cam đoan, hỗ trợ bên cho vay, định nghĩa, thông báo và điều khoản chung."
        }
      ],
      "ref": "p14,p15"
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
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:00 · Gom về 9 nhóm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Four"
          },
          {
            "id": "h-a0",
            "t": "text",
            "text": "Tầng 0",
            "x": 3996,
            "y": 1250,
            "size": 34,
            "at": "l2:zero"
          },
          {
            "id": "h-b0",
            "t": "text",
            "text": "→ Khung, Làm gì, Tiền, Thời gian",
            "x": 4176,
            "y": 1250,
            "size": 34,
            "at": "l2:zero+200",
            "color": "muted"
          },
          {
            "id": "h-a1",
            "t": "text",
            "text": "Tầng 1",
            "x": 3996,
            "y": 1316,
            "size": 34,
            "at": "l2:one"
          },
          {
            "id": "h-b1",
            "t": "text",
            "text": "→ Làm gì, Khung, Hoàn thành",
            "x": 4176,
            "y": 1316,
            "size": 34,
            "at": "l2:one+200",
            "color": "muted"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "Tầng 2",
            "x": 3996,
            "y": 1382,
            "size": 34,
            "at": "l2:two"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "→ Tiền",
            "x": 4176,
            "y": 1382,
            "size": 34,
            "at": "l2:two+200",
            "color": "muted"
          },
          {
            "id": "h-a3",
            "t": "text",
            "text": "Tầng 3, 6",
            "x": 3996,
            "y": 1448,
            "size": 34,
            "at": "l3:three"
          },
          {
            "id": "h-b3",
            "t": "text",
            "text": "→ Khi có sự cố",
            "x": 4176,
            "y": 1448,
            "size": 34,
            "at": "l3:three+200",
            "color": "muted"
          },
          {
            "id": "h-a4",
            "t": "text",
            "text": "Tầng 4",
            "x": 3996,
            "y": 1514,
            "size": 34,
            "at": "l3:four"
          },
          {
            "id": "h-b4",
            "t": "text",
            "text": "→ Thời gian, Môi trường, Bảo vệ",
            "x": 4176,
            "y": 1514,
            "size": 34,
            "at": "l3:four+200",
            "color": "muted"
          },
          {
            "id": "h-a5",
            "t": "text",
            "text": "Tầng 5",
            "x": 3996,
            "y": 1580,
            "size": 34,
            "at": "l3:five"
          },
          {
            "id": "h-b5",
            "t": "text",
            "text": "→ Hoàn thành",
            "x": 4176,
            "y": 1580,
            "size": 34,
            "at": "l3:five+200",
            "color": "muted"
          },
          {
            "id": "h-a6",
            "t": "text",
            "text": "Tầng 7",
            "x": 3996,
            "y": 1646,
            "size": 34,
            "at": "l3:seven"
          },
          {
            "id": "h-b6",
            "t": "text",
            "text": "→ rải khắp",
            "x": 4176,
            "y": 1646,
            "size": 34,
            "at": "l3:seven+200",
            "color": "muted"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "label"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l4",
            "caption": "16:10 · Thảo gọi lại",
            "icon": "label"
          },
          {
            "id": "h-def",
            "t": "text",
            "text": "Định nghĩa: đặt đầu, viết sau cùng",
            "x": 4836,
            "y": 1780,
            "size": 34,
            "at": "l5:last",
            "color": "accent",
            "hl": [
              {
                "text": "viết sau cùng",
                "at": "l5:last"
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
          "say": "Four p.m. Real contracts are sorted by family, not by birth order.",
          "sub": "Bốn giờ chiều. Hợp đồng thật sắp theo nhóm, không theo thứ tự phát sinh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Layer zero spreads over the frame, scope, money and time. Layer one into scope, frame, completion. Layer two into money.",
          "sub": "Tầng 0 rải vào Khung, Làm gì, Tiền, Thời gian. Tầng 1 vào Làm gì, Khung, Hoàn thành. Tầng 2: Tiền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Layers three and six, when things go wrong. Four, time and change. Five, completion. Seven, everywhere.",
          "sub": "Tầng 3 và 6: Khi có sự cố. Tầng 4: Thời gian, Môi trường, Bảo vệ. Tầng 5: Hoàn thành. Tầng 7 rải khắp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Bác, should I finish all the definitions first, then the clauses?",
          "sub": "Bác ơi, cháu viết hết định nghĩa trước rồi mới soạn điều khoản nhé?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Definitions sit first, but are written last.",
          "sub": "Từ từ, mình xem lại đã. Định nghĩa đặt ở đầu, nhưng viết sau cùng.",
          "keys": [
            "viết sau cùng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Only when the families are drafted do we know which terms repeat and need one meaning.",
          "sub": "Chỉ khi các nhóm soạn xong mới biết thuật ngữ nào lặp lại, dùng ở nhiều nhóm và cần một nghĩa chung."
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s16",
      "module": "BRK-11",
      "data": {
        "title": "Thứ tự lập điều khoản",
        "items": [
          "Phạm vi và giá",
          "Thanh toán, bảo đảm",
          "Chế tài",
          "Thay đổi, hoàn thành",
          "Định nghĩa, đánh số lại"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last: definitions, notices, renumbering.",
          "sub": "Sau cùng: định nghĩa, thông báo, đánh số lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: change, completion, remedies.",
          "sub": "Trước đó: thay đổi, hoàn thành, chế tài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Payment, security. First of all: scope and price.",
          "sub": "Thanh toán, bảo đảm. Đầu tiên: phạm vi và giá.",
          "keys": [
            "phạm vi và giá"
          ]
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
            "fit": "H",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
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
            "at": "l7",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 16:30 · Bốn mối nối",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Four"
          },
          {
            "id": "i-j0",
            "t": "text",
            "text": "• Một bộ định nghĩa chung",
            "x": 5964,
            "y": 1250,
            "size": 34,
            "at": "l2:definitions"
          },
          {
            "id": "i-j1",
            "t": "text",
            "text": "• Mốc thời gian khớp nhau",
            "x": 5964,
            "y": 1320,
            "size": 34,
            "at": "l2:dates"
          },
          {
            "id": "i-j2",
            "t": "text",
            "text": "• Sự kiện kích hoạt thanh toán",
            "x": 5964,
            "y": 1390,
            "size": 34,
            "at": "l2:trigger",
            "color": "coral"
          },
          {
            "id": "i-j3",
            "t": "text",
            "text": "• Phạt – gia hạn – trần – chấm dứt",
            "x": 5964,
            "y": 1460,
            "size": 34,
            "at": "l2:chain"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "money-bag",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Đòi tiền · nếu không sửa chữ",
            "icon": "money-bag"
          },
          {
            "id": "i-fin",
            "t": "text",
            "text": "Tài chính: “sau khi nghiệm thu”",
            "x": 5964,
            "y": 1560,
            "size": 34,
            "at": "l3:acceptance",
            "color": "coral",
            "hl": [
              {
                "text": "nghiệm thu",
                "at": "l3:acceptance"
              }
            ]
          },
          {
            "id": "i-tech",
            "t": "text",
            "text": "Kỹ thuật: Vận hành TM · Bàn giao",
            "x": 5964,
            "y": 1620,
            "size": 34,
            "at": "l3:Handover"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four thirty. When each team drafts one family, cracks open at the joints.",
          "sub": "Bốn rưỡi. Khi mỗi phòng soạn một nhóm, chỗ vênh nằm ở mối nối giữa các nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four joints: one set of definitions, matching dates, the payment trigger, and one chain from delay to termination.",
          "sub": "Bốn mối nối: một bộ định nghĩa chung; mốc thời gian khớp nhau; sự kiện kích hoạt thanh toán; chuỗi phạt chậm, gia hạn, trần, chấm dứt chạy liền.",
          "keys": [
            "Bốn mối nối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Picture this. Finance writes the last payment after acceptance of the whole works. Thảo's team defines Commercial Operation and Handover.",
          "sub": "Thử hình dung. Phòng tài chính viết đợt cuối “sau khi nghiệm thu toàn bộ công trình”. Nhóm Thảo định nghĩa hai mốc: Vận hành Thương mại và Bàn giao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nobody changes the word when merging. Then Sam, the contractor's representative, asks for the money.",
          "sub": "Ghép bản, không ai đổi chữ. Rồi Sam, đại diện nhà thầu, đến đòi tiền.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Acceptance means commercial operation. Please pay.",
          "sub": "“Nghiệm thu” là ngày vận hành thương mại. Mời thanh toán.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "For us, acceptance means handover.",
          "sub": "Với chúng tôi, “nghiệm thu” là ngày bàn giao.",
          "face": "thinking"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Every money trigger must use the exact name of a defined milestone.",
          "sub": "Mỗi sự kiện kích hoạt tiền phải dùng đúng tên một mốc đã định nghĩa.",
          "keys": [
            "đúng tên một mốc đã định nghĩa"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p19,p20,p21"
    },
    {
      "id": "s18",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Luật Xây dựng 2025, Điều 80, 82",
        "detail": "Bằng văn bản · phân loại · 8 hình thức giá",
        "illus": "scroll",
        "around": [
          "page-facing-up",
          "balance-scale"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In writing, by type of work, eight price forms.",
          "sub": "Bằng văn bản, phân loại công việc, 8 hình thức giá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Layers: a thinking tool, not the legal list.",
          "sub": "Tám tầng: công cụ tư duy, không thay danh mục luật.",
          "keys": [
            "công cụ tư duy"
          ]
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
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "17:00 · Tờ giấy đã kín",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Five"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil",
                "sunset"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Five",
            "caption": "Thứ Bảy, 17:00 · cùng bàn ấy",
            "icon": "sunset"
          },
          {
            "id": "j-b0",
            "t": "badge",
            "n": 1,
            "x": 7962,
            "y": 1275,
            "at": "l2:eight"
          },
          {
            "id": "j-s0",
            "t": "text",
            "text": "8 câu hỏi = 8 dòng",
            "x": 8012,
            "y": 1250,
            "size": 34,
            "at": "l2:eight+200"
          },
          {
            "id": "j-b1",
            "t": "badge",
            "n": 2,
            "x": 7962,
            "y": 1353,
            "at": "l2:under"
          },
          {
            "id": "j-s1",
            "t": "text",
            "text": "Dưới mỗi câu: điều trả lời",
            "x": 8012,
            "y": 1328,
            "size": 34,
            "at": "l2:under+200"
          },
          {
            "id": "j-b2",
            "t": "badge",
            "n": 3,
            "x": 7962,
            "y": 1431,
            "at": "l3:family"
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "Bên cạnh: nhóm đích",
            "x": 8012,
            "y": 1406,
            "size": 34,
            "at": "l3:family+200"
          },
          {
            "id": "j-b3",
            "t": "badge",
            "n": 4,
            "x": 7962,
            "y": 1509,
            "at": "l3:joints"
          },
          {
            "id": "j-s3",
            "t": "text",
            "text": "Đánh dấu 4 mối nối",
            "x": 8012,
            "y": 1484,
            "size": 34,
            "at": "l3:joints+200"
          },
          {
            "id": "j-b4",
            "t": "badge",
            "n": 5,
            "x": 7962,
            "y": 1587,
            "at": "l4:draft"
          },
          {
            "id": "j-s4",
            "t": "text",
            "text": "Đặt bản nháp đối tác bên cạnh",
            "x": 8012,
            "y": 1562,
            "size": 34,
            "at": "l4:draft+200",
            "color": "coral"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Hỏi đủ 8 tầng, rồi đếm điều",
            "x": 7932,
            "y": 1670,
            "size": 38,
            "at": "l5:count",
            "color": "accent",
            "hl": [
              {
                "text": "8 tầng",
                "at": "l5:layers"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cây có cội, nước có nguồn”",
            "x": 7932,
            "y": 1730,
            "size": 44,
            "at": "l6:roots",
            "color": "accent",
            "hl": [
              {
                "text": "có cội",
                "at": "l6:roots"
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
          "say": "Five p.m. Same desk, same sheet. Now it is full.",
          "sub": "Năm giờ chiều. Vẫn bàn ấy, vẫn tờ giấy ấy. Giờ đã kín chữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight questions as eight lines. Under each, the clause that answers it: under delay, damages, cap, termination.",
          "sub": "Tám câu hỏi thành tám dòng. Dưới mỗi câu, điều trả lời nó: dưới “chậm thì sao?” ghi phạt chậm, trần, quyền chấm dứt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Beside it, the target family. Then the four joints, marked in red.",
          "sub": "Bên cạnh ghi nhóm đích. Rồi đánh dấu bốn mối nối bằng bút đỏ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Now the contractor's draft beside it. Any question with no answer is line one of my issues list.",
          "sub": "Giờ đặt bản nháp của đối tác bên cạnh. Câu hỏi nào không tìm thấy điều trả lời là dòng đầu của issues list.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Ask all eight layers first. Count clauses later.",
          "sub": "Hỏi đủ 8 tầng trước, rồi mới đếm điều khoản.",
          "keys": [
            "Hỏi đủ 8 tầng trước"
          ],
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A tree has roots, water has a source. And now every clause has its question.",
          "sub": "“Cây có cội, nước có nguồn.” Giờ điều khoản nào cũng có câu hỏi gốc.",
          "keys": [
            "câu hỏi gốc"
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
      "ref": "p23,p24,p25"
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
            "at": "l1:layer",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:definitions",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:trigger",
            "fit": "I",
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
            "x": 9452,
            "y": 40,
            "at": "l1:layer"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 5516,
            "y": 1130,
            "at": "l2:definitions"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7484,
            "y": 1130,
            "at": "l3:trigger"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1825,
            "size": 28,
            "at": "l4",
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
          "say": "So: eight layers, seed to leaf, and the consequence layer weighs most.",
          "sub": "Tóm lại: tám tầng từ hạt đến lá, tầng hậu quả nặng nhất.",
          "keys": [
            "tầng hậu quả nặng nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sort into nine families; write definitions last.",
          "sub": "Gom về 9 nhóm; định nghĩa viết sau cùng.",
          "keys": [
            "viết sau cùng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep the four joints, and tie every payment trigger to a defined milestone.",
          "sub": "Giữ bốn mối nối, gắn mọi sự kiện kích hoạt thanh toán vào một mốc đã định nghĩa.",
          "keys": [
            "bốn mối nối"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, illustrative story. For a real contract, check current law and ask a lawyer.",
          "sub": "Bài để tham khảo chung, tình huống là minh hoạ. Việc cụ thể, đối chiếu văn bản hiện hành và hỏi luật sư.",
          "keys": [
            "hỏi luật sư"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "Finance wrote payment after full acceptance while engineering defined two completion milestones, what should the lead fix?",
        "options": [
          "Keep both wordings, because each department knows its own clause best",
          "Replace the undefined word with the exact defined milestone that should trigger payment",
          "Delete the payment clause, because the price is lump sum and needs no trigger"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "money-bag",
        "why": "Sự kiện kích hoạt thanh toán phải dùng đúng tên một mốc đã định nghĩa, ví dụ Vận hành Thương mại hay Bàn giao, không dùng chữ chung chung “nghiệm thu”."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Finance wrote payment after full acceptance while engineering defined two completion milestones, what should the lead fix?",
          "sub": "Tài chính viết thanh toán sau nghiệm thu toàn bộ còn kỹ thuật định nghĩa hai mốc hoàn thành, lead nên sửa gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Replace the loose word with the exact defined milestone.",
          "sub": "Thay chữ chung chung bằng đúng tên mốc đã định nghĩa."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Every money trigger, one defined name.",
          "sub": "Mỗi sự kiện kích hoạt tiền, một tên mốc đã định nghĩa."
        }
      ],
      "ref": "questions[32]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi đặt 8 câu hỏi cạnh mục lục"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, put the eight layer questions beside your draft's table of contents. Mark the empty layers.",
          "sub": "Hôm nay, đặt 8 câu hỏi của 8 tầng cạnh mục lục bản nháp, đánh dấu tầng nào trống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: the complete obligation sentence. Now, the forty questions below.",
          "sub": "Bài sau: câu nghĩa vụ đủ vế. Giờ thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro,p25"
    }
  ],
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật kể chuyện — máy mở cận tờ giấy trắng + bút chì đỏ, kéo ra thấy Bác Bình 8:00 thứ Bảy; tờ giấy trở lại ở kết (17:00, đã kín: làm mẫu p23). Đét trái + bảng 10 ô theo MỘT THỨ BẢY: tầng 0 → tầng 1–2 (Thảo gọi đọc 4 nguyên tắc NĐ 210) → tầng 3 hậu quả (BRK-07 → “Khoan đã!” Dũng “kiện thôi”) → tầng 4 (BRK-04 mẫu Silver Book vs Luật XD 2025) → (BRK-08 chuỗi hoàn thành) tầng 5–7 → gom 9 nhóm, định nghĩa viết sau cùng (Thảo hỏi) + BRK-11 thứ tự lập → bốn mối nối, chuyện “nghiệm thu” (Sam vs Thảo) → BRK-09 Điều 80, 82 → 17:00 khép vòng “Cây có cội, nước có nguồn”. Nhân vật theo w145/_series/epc-legal-counsel.md. Không nêu tên người, pháp nhân, dự án, hợp đồng thật. Số/điều chỉ từ bài: 8 tầng, 9 nhóm, 4 mối nối, 20 điều, NĐ 210/2026, Luật XD 2025 Điều 80, 82, 8 hình thức giá. Câu đố questions[32]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s00",
    "close": "s19"
  }
};
