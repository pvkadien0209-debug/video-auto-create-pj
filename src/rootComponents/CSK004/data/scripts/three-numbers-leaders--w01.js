// three-numbers-leaders--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "three-numbers-leaders--w01",
  "unit": {
    "audience": "epc-owner-executive",
    "slug": "three-numbers-leaders",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Ba con số nào trong hợp đồng EPC lãnh đạo phải nhớ trước khi ký?",
    "series": "Hợp đồng EPC trên bàn lãnh đạo — cho HĐQT và Ban Tổng Giám đốc, quyết đúng thẩm quyền và không im lặng sai lúc"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "anchor": {
    "type": "number",
    "value": "ba con số",
    "ref": "intro"
  },
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
            "fit": [
              "a-3",
              "a-cs"
            ],
            "move": "cut",
            "zoom": 1.25
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-3",
            "t": "text",
            "text": "3",
            "x": 80,
            "y": 60,
            "size": 220,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3",
                "at": "l1:only three"
              }
            ]
          },
          {
            "id": "a-cs",
            "t": "text",
            "text": "con số",
            "x": 260,
            "y": 170,
            "size": 70,
            "at": "l1:numbers"
          },
          {
            "id": "a-dz",
            "t": "text",
            "text": "trong hàng chục con số",
            "x": 70,
            "y": 330,
            "size": 46,
            "at": "l1:dozens",
            "color": "muted"
          },
          {
            "id": "a-kh",
            "t": "text",
            "text": "khi mọi việc lệch kế hoạch",
            "x": 70,
            "y": 410,
            "size": 42,
            "at": "l2:plan"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three. Out of dozens of numbers in a board paper, only three decide if the project stands.",
          "sub": "Ba. Trong hàng chục con số của tờ trình, chỉ ba con số quyết định dự án có đứng vững.",
          "keys": [
            "chỉ ba con số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Especially when things don't go to plan.",
          "sub": "Nhất là khi mọi việc không như kế hoạch."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 100
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
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "think"
                }
              ],
              "props": [
                "page-facing-up",
                "pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "8:00 · bàn thư ký HĐQT",
            "icon": "pen"
          },
          {
            "id": "a-nd",
            "t": "text",
            "text": "Chi tiết: không đứng riêng",
            "x": 70,
            "y": 490,
            "size": 46,
            "at": "l5:alone",
            "color": "coral",
            "hl": [
              {
                "text": "không đứng riêng",
                "at": "l5:alone"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ba cây chụm lại…",
            "x": 70,
            "y": 580,
            "size": 54,
            "at": "l6:three trees",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "…nên hòn núi cao”",
            "x": 70,
            "y": 670,
            "size": 54,
            "at": "l6:mountain",
            "color": "accent",
            "hl": [
              {
                "text": "núi cao",
                "at": "l6:high mountain"
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
          "say": "Meet Thảo, the board secretary, red pen in hand.",
          "sub": "Đây là Thảo, thư ký Hội đồng quản trị, tay cầm bút đỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Price, COD date, penalty cap. Three red circles. Is that enough?",
          "sub": "Giá, mốc COD, trần phạt. Ba vòng đỏ. Thế đã đủ chưa ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Mr Bình, the chairman, who never votes in a hurry.",
          "sub": "Còn đây là bác Bình, Chủ tịch Hội đồng quản trị, chưa bao giờ biểu quyết vội.",
          "keys": [
            "Chủ tịch Hội đồng quản trị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. A number alone tells me little. What is it tied to?",
          "sub": "Từ từ, mình xem lại đã. Con số đứng một mình chẳng nói được mấy. Nó nối với cái gì?",
          "pose": "think"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That's the detail: the three numbers never stand alone.",
          "sub": "Chi tiết đáng chú ý: ba con số không đứng riêng.",
          "keys": [
            "không đứng riêng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "As our elders say: three trees together make a high mountain.",
          "sub": "Ông bà dặn: “Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.”",
          "keys": [
            "ba cây chụm lại"
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
      "ref": "intro,p2"
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
            "text": "Ba con số nào phải nhớ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:remember",
            "hl": [
              {
                "text": "phải nhớ",
                "at": "l1:remember"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Giá",
            "x": 2028,
            "y": 160,
            "size": 62,
            "at": "l2:price",
            "color": "accent"
          },
          {
            "id": "b-1n",
            "t": "text",
            "text": "↔ bảo lãnh",
            "x": 2028,
            "y": 250,
            "size": 42,
            "at": "l5:bonds"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Mốc COD",
            "x": 2528,
            "y": 160,
            "size": 62,
            "at": "l3:dates",
            "color": "accent"
          },
          {
            "id": "b-2n",
            "t": "text",
            "text": "↔ phạt chậm, gia hạn",
            "x": 2528,
            "y": 250,
            "size": 42,
            "at": "l5:penalties"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Trần",
            "x": 3128,
            "y": 160,
            "size": 62,
            "at": "l4:caps",
            "color": "accent"
          },
          {
            "id": "b-3n",
            "t": "text",
            "text": "↔ quyền chấm dứt",
            "x": 3128,
            "y": 250,
            "size": 42,
            "at": "l5:termination"
          },
          {
            "id": "b-hz",
            "t": "text",
            "text": "Nhớ số, bỏ mối nối → hở",
            "x": 2028,
            "y": 340,
            "size": 50,
            "at": "l6:leaky",
            "color": "coral",
            "hl": [
              {
                "text": "hở",
                "at": "l6:leaky"
              }
            ]
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 450,
            "w": 250,
            "h": 100,
            "at": "l7:six stops+400",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2303,
            "y": 450,
            "w": 250,
            "h": 100,
            "at": "l7:six stops+650",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2578,
            "y": 450,
            "w": 250,
            "h": 100,
            "at": "l7:six stops+900",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 2853,
            "y": 450,
            "w": 250,
            "h": 100,
            "at": "l7:six stops+1150",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 3128,
            "y": 450,
            "w": 250,
            "h": 100,
            "at": "l7:six stops+1400",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s5b",
            "t": "box",
            "x": 3403,
            "y": 450,
            "w": 250,
            "h": 100,
            "at": "l7:six stops+1650",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Cửa giá",
            "x": 2046,
            "y": 475,
            "size": 38,
            "at": "l7:six stops+550"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Cách trả",
            "x": 2321,
            "y": 475,
            "size": 38,
            "at": "l7:six stops+800"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Ba mốc",
            "x": 2596,
            "y": 475,
            "size": 38,
            "at": "l7:six stops+1050"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Trần",
            "x": 2871,
            "y": 475,
            "size": 38,
            "at": "l7:six stops+1300"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ Luật VN",
            "x": 3146,
            "y": 475,
            "size": 38,
            "at": "l7:six stops+1550"
          },
          {
            "id": "b-s5",
            "t": "text",
            "text": "⑥ 10 câu",
            "x": 3421,
            "y": 475,
            "size": 38,
            "at": "l7:six stops+1800"
          },
          {
            "id": "b-day",
            "t": "text",
            "text": "1 ngày trước biểu quyết",
            "x": 2028,
            "y": 610,
            "size": 50,
            "at": "l7:one day",
            "hl": [
              {
                "text": "biểu quyết",
                "at": "l7:vote"
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
          "say": "So which three numbers must leaders remember before signing?",
          "sub": "Vậy ba con số nào lãnh đạo phải nhớ trước khi ký?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The contract price: what the project costs.",
          "sub": "Giá hợp đồng: dự án tốn bao nhiêu.",
          "keys": [
            "Giá hợp đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The COD and handover dates: when power sales begin.",
          "sub": "Mốc vận hành thương mại và bàn giao: khi nào có doanh thu bán điện.",
          "keys": [
            "khi nào có doanh thu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The caps: what you can still claim if the contractor is late or fails.",
          "sub": "Trần phạt và trần trách nhiệm: nhà thầu chậm hoặc vỡ, mình còn đòi được bao nhiêu.",
          "keys": [
            "còn đòi được bao nhiêu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Each has a joint: price to bonds, dates to penalties and extensions, caps to termination.",
          "sub": "Mỗi con số có một mối nối: giá nối bảo lãnh, mốc nối phạt chậm và gia hạn, trần nối quyền chấm dứt.",
          "keys": [
            "mối nối"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Skip the joint, and you can still approve a leaky contract.",
          "sub": "Nhớ số mà bỏ mối nối, vẫn có thể duyệt một hợp đồng hở.",
          "keys": [
            "hợp đồng hở"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One day before the vote, six stops.",
          "sub": "Một ngày trước phiên biểu quyết, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        }
      ],
      "ref": "intro,p1,p2"
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
            "text": "① 9:00 · Giá đổi qua cửa nào?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:calls"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:calls",
            "caption": "9:00 · gọi nhà thầu",
            "icon": "laptop"
          },
          {
            "id": "c-in",
            "t": "text",
            "text": "Đã gồm: thuế, vận chuyển, nhân công",
            "x": 3996,
            "y": 160,
            "size": 40,
            "at": "l3:taxes"
          },
          {
            "id": "c-rk",
            "t": "text",
            "text": "Nhà thầu chịu: khối lượng, vật tư",
            "x": 3996,
            "y": 225,
            "size": 40,
            "at": "l3:quantity",
            "hl": [
              {
                "text": "khối lượng, vật tư",
                "at": "l3:material"
              }
            ]
          },
          {
            "id": "c-d1",
            "t": "illus",
            "name": "door",
            "x": 3996,
            "y": 300,
            "size": 90,
            "at": "l4:variations"
          },
          {
            "id": "c-d1t",
            "t": "text",
            "text": "Thay đổi",
            "x": 4096,
            "y": 320,
            "size": 44,
            "at": "l4:variations+200"
          },
          {
            "id": "c-d2",
            "t": "illus",
            "name": "door",
            "x": 3996,
            "y": 400,
            "size": 90,
            "at": "l4:change in law"
          },
          {
            "id": "c-d2t",
            "t": "text",
            "text": "Thay đổi pháp luật",
            "x": 4096,
            "y": 420,
            "size": 44,
            "at": "l4:change in law+200"
          },
          {
            "id": "c-d3",
            "t": "illus",
            "name": "door",
            "x": 3996,
            "y": 500,
            "size": 90,
            "at": "l4:formula"
          },
          {
            "id": "c-d3t",
            "t": "text",
            "text": "Công thức đã thỏa thuận",
            "x": 4096,
            "y": 520,
            "size": 44,
            "at": "l4:formula+200"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "NĐ 210/2026, Điều 11: trọn gói phổ biến cho EPC",
            "x": 3996,
            "y": 600,
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
          "say": "Nine a.m. Thảo calls Sam, the contractor's commercial lead. Polite, precise.",
          "sub": "Chín giờ sáng. Thảo gọi Sam, trưởng nhóm thương mại của nhà thầu. Lịch sự, chỉn chu.",
          "keys": [
            "trưởng nhóm thương mại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Our draft says the lump sum may be reviewed if costs rise. Quite normal.",
          "sub": "Bản nháp ghi giá trọn gói có thể được xem xét điều chỉnh khi chi phí tăng. Bình thường thôi.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A lump sum usually covers taxes, transport, packing, labour. Quantity and material risk stay with the contractor.",
          "sub": "Giá trọn gói thường đã gồm thuế, vận chuyển, đóng gói, nhân công; rủi ro khối lượng và giá vật tư thuộc nhà thầu.",
          "keys": [
            "rủi ro khối lượng và giá vật tư"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It should change through three named doors only: variations, change in law, and an agreed formula.",
          "sub": "Giá chỉ nên đổi qua ba cửa đã đặt tên: Thay đổi do chủ đầu tư chỉ thị, thay đổi pháp luật, cơ chế điều chỉnh đã thỏa thuận.",
          "keys": [
            "ba cửa đã đặt tên"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s04",
      "module": "BRK-04",
      "data": {
        "title": "Câu giá trong dự thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Có thể xem xét điều chỉnh khi chi phí tăng",
        "right": "Cố định, trừ điều Thay đổi và Thay đổi Pháp luật",
        "wrongIllus": "unlocked",
        "rightIllus": "locked"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: may be reviewed if costs rise.",
          "sub": "Trước: có thể xem xét điều chỉnh khi chi phí tăng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: fixed, except two named clauses.",
          "sub": "Sau: cố định, trừ hai điều đã đặt tên.",
          "keys": [
            "trừ hai điều đã đặt tên"
          ]
        }
      ],
      "ref": "p4"
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
          }
        ],
        "items": [
          {
            "id": "c-x",
            "t": "text",
            "text": "nhân công · vật tư · cước · tỷ giá: ✗",
            "x": 4836,
            "y": 680,
            "size": 38,
            "at": "l2:labour",
            "color": "coral"
          },
          {
            "id": "c-take",
            "t": "text",
            "text": "Đóng cửa, chừa lối đã đặt tên",
            "x": 3996,
            "y": 680,
            "size": 46,
            "at": "l3:named doors",
            "color": "accent",
            "hl": [
              {
                "text": "lối đã đặt tên",
                "at": "l3:named doors"
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
          "say": "The first opens the door to every price request. The second leaves two paths, each with a procedure.",
          "sub": "Bản trước mở cửa cho mọi đề nghị tăng giá. Bản sau chỉ chừa hai lối có thủ tục riêng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not even labour, materials, freight or exchange rates.",
          "sub": "Kể cả nhân công, vật tư, cước vận chuyển hay tỷ giá cũng không làm giá đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: shut the lump sum, leave only named doors.",
          "sub": "Rút ra: giá trọn gói phải đóng cửa, chỉ chừa lối đã đặt tên.",
          "keys": [
            "chỉ chừa lối đã đặt tên"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "id": "d-t",
            "t": "text",
            "text": "② 10:30 · Trả thế nào?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:payment terms"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "bar-chart",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l2:meet",
            "caption": "10:30 · ban dự án",
            "icon": "receipt"
          },
          {
            "id": "d-12",
            "t": "text",
            "text": "Đ12: chỉ đầu tư công, PPP",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l4:public",
            "color": "coral",
            "hl": [
              {
                "text": "chỉ đầu tư công, PPP",
                "at": "l4:only"
              }
            ]
          },
          {
            "id": "d-pv",
            "t": "text",
            "text": "Tư nhân: tự thỏa thuận",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l4:private"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Tạm ứng · theo mốc · trả chậm",
            "x": 5964,
            "y": 330,
            "size": 44,
            "at": "l5:advance"
          },
          {
            "id": "d-ev",
            "t": "text",
            "text": "Mốc ← vận đơn, biên bản, chứng nhận",
            "x": 5964,
            "y": 400,
            "size": 38,
            "at": "l5:bills"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Không trả trước giá trị chưa có",
            "x": 5964,
            "y": 470,
            "size": 42,
            "at": "l6:ahead",
            "color": "accent",
            "hl": [
              {
                "text": "chưa có",
                "at": "l6:not yet"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "NĐ 210/2026 Điều 12: chỉ đầu tư công, PPP",
            "x": 5964,
            "y": 545,
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
          "say": "Ten thirty. Same price, different payment terms, different risk.",
          "sub": "Mười giờ rưỡi. Cùng một con số giá, cách trả khác thì rủi ro khác.",
          "keys": [
            "cách trả khác thì rủi ro khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, a young project officer. Quick with numbers, quicker with conclusions.",
          "sub": "Đây là Dũng, chuyên viên ban dự án trẻ. Nhanh với con số, còn nhanh hơn với kết luận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Advance payment? I'll take the percentages straight from Article twelve of the decree!",
          "sub": "Tạm ứng à? Em lấy luôn mức phần trăm ở Điều 12 Nghị định!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful. Those levels apply only to public investment and PPP. A private project negotiates its own.",
          "sub": "Cẩn thận: các mức ấy chỉ áp dụng cho dự án đầu tư công, PPP. Vốn tư nhân thì tự thỏa thuận.",
          "keys": [
            "chỉ áp dụng cho dự án đầu tư công, PPP"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask about advance, milestone and deferred payment. Tie milestones to evidence: bills of lading, installation records, test certificates.",
          "sub": "Hỏi phần tạm ứng, trả theo mốc, trả chậm. Gắn mốc với bằng chứng: vận đơn, biên bản lắp đặt, chứng nhận chạy thử.",
          "keys": [
            "bằng chứng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Never pay ahead for value not yet created.",
          "sub": "Đừng trả trước giá trị chưa tạo ra.",
          "keys": [
            "giá trị chưa tạo ra"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-vo",
            "t": "text",
            "text": "Cửa Thay đổi: CĐT tự mở",
            "x": 5964,
            "y": 610,
            "size": 46,
            "at": "l1:variation door",
            "color": "coral",
            "hl": [
              {
                "text": "CĐT tự mở",
                "at": "l1:owner"
              }
            ]
          },
          {
            "id": "d-wr",
            "t": "text",
            "text": "Chỉ thị văn bản, ghi “Thay đổi”",
            "x": 5964,
            "y": 690,
            "size": 40,
            "at": "l2:written",
            "color": "accent",
            "hl": [
              {
                "text": "văn bản",
                "at": "l2:written"
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
          "say": "And the variation door? That's where prices swell most, usually opened by the owner itself.",
          "sub": "Còn cửa Thay đổi? Đó là nơi giá hay đội lên nhất, phần lớn do chính chủ đầu tư mở.",
          "keys": [
            "chính chủ đầu tư mở"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A tight contract pays only for written instructions that say: this is a variation.",
          "sub": "Hợp đồng chặt chỉ tính tiền chỉ thị bằng văn bản, nêu rõ là Thay đổi.",
          "keys": [
            "chỉ thị bằng văn bản"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Mốc COD trùng mốc vay: đã an toàn chưa?",
        "illus": "spiral-calendar"
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
          "say": "Is a COD equal to the loan date safe?",
          "sub": "Mốc COD trùng mốc vay: đã an toàn chưa?",
          "keys": [
            "đã an toàn chưa"
          ]
        }
      ],
      "ref": "p10"
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
            "text": "③ 13:30 · Ba mốc cạnh nhau",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:second number"
          },
          {
            "id": "e-cod",
            "t": "text",
            "text": "COD = ngày bắt đầu bán điện",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l1:selling power"
          },
          {
            "id": "e-lose",
            "t": "text",
            "text": "Chậm: mất tiền điện, lỡ mốc giá",
            "x": 7932,
            "y": 230,
            "size": 44,
            "at": "l2:lost",
            "color": "coral",
            "hl": [
              {
                "text": "mất tiền điện",
                "at": "l2:lost power sales"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật Điện lực 2024, khoản 1 Điều 12: mốc tiến độ từng giai đoạn ghi trong Giấy chứng nhận đăng ký đầu tư",
            "x": 7932,
            "y": 300,
            "size": 28,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-ln",
            "t": "line",
            "pts": [
              [
                7952,
                450
              ],
              [
                9512,
                450
              ]
            ],
            "at": "l4:side by side"
          },
          {
            "id": "e-m1",
            "t": "box",
            "x": 7992,
            "y": 400,
            "w": 300,
            "h": 100,
            "at": "l4:epc",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "e-m1t",
            "t": "text",
            "text": "COD EPC",
            "x": 8032,
            "y": 420,
            "size": 44,
            "at": "l4:epc+200",
            "color": "accent"
          },
          {
            "id": "e-m2",
            "t": "box",
            "x": 8632,
            "y": 400,
            "w": 300,
            "h": 100,
            "at": "l4:loan",
            "stroke": 5
          },
          {
            "id": "e-m2t",
            "t": "text",
            "text": "Mốc vay",
            "x": 8692,
            "y": 420,
            "size": 44,
            "at": "l4:loan+200"
          },
          {
            "id": "e-m3",
            "t": "box",
            "x": 9172,
            "y": 400,
            "w": 340,
            "h": 100,
            "at": "l4:legal",
            "stroke": 5
          },
          {
            "id": "e-m3t",
            "t": "text",
            "text": "Mốc pháp lý",
            "x": 9202,
            "y": 420,
            "size": 44,
            "at": "l4:legal+200"
          },
          {
            "id": "e-buf",
            "t": "text",
            "text": "← dự phòng →",
            "x": 8322,
            "y": 530,
            "size": 46,
            "at": "l5:buffer",
            "color": "accent",
            "hl": [
              {
                "text": "dự phòng",
                "at": "l5:buffer"
              }
            ]
          },
          {
            "id": "e-why",
            "t": "text",
            "text": "lưới chậm · bất khả kháng",
            "x": 8322,
            "y": 600,
            "size": 38,
            "at": "l5:grid"
          },
          {
            "id": "e-biz",
            "t": "text",
            "text": "Dài bao nhiêu? Quyết định kinh doanh",
            "x": 7932,
            "y": 680,
            "size": 44,
            "at": "l6:business decision",
            "hl": [
              {
                "text": "Quyết định kinh doanh",
                "at": "l6:business decision"
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
          "say": "One thirty. The second number: COD, the day the plant starts selling power.",
          "sub": "Một giờ rưỡi. Con số thứ hai: mốc COD, ngày nhà máy bắt đầu bán điện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Late COD means lost power sales, maybe a missed tariff or legal milestone.",
          "sub": "Chậm COD là mất tiền điện, có thể lỡ mốc cơ chế giá và mốc pháp lý.",
          "keys": [
            "mất tiền điện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Electricity Law puts stage milestones in the investment registration certificate.",
          "sub": "Luật Điện lực 2024 yêu cầu mốc tiến độ từng giai đoạn ghi trong Giấy chứng nhận đăng ký đầu tư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So lay three dates side by side: the EPC COD, the loan date, the legal date.",
          "sub": "Vậy hãy đặt ba mốc cạnh nhau: COD trong hợp đồng EPC, mốc trong hợp đồng vay, mốc pháp lý.",
          "keys": [
            "ba mốc cạnh nhau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The EPC date comes first. The gap is a buffer for valid extensions, like a late grid or force majeure.",
          "sub": "Mốc EPC nên sớm hơn hai mốc kia. Khoảng giữa là dự phòng cho gia hạn hợp lệ như lưới chậm, bất khả kháng.",
          "keys": [
            "dự phòng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "How long? A business decision, for finance and the project team.",
          "sub": "Dài bao nhiêu? Quyết định kinh doanh, do tài chính và quản lý dự án tính."
        }
      ],
      "ref": "p8,p9"
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
          }
        ],
        "items": [
          {
            "id": "e-hv",
            "t": "text",
            "text": "Bàn giao ≠ COD: mốc nặng nhất",
            "x": 8772,
            "y": 610,
            "size": 44,
            "at": "l1:heaviest",
            "color": "coral",
            "hl": [
              {
                "text": "mốc nặng nhất",
                "at": "l1:heaviest"
              }
            ]
          },
          {
            "id": "e-hv2",
            "t": "text",
            "text": "bán điện khi thử ≠ COD",
            "x": 8772,
            "y": 690,
            "size": 42,
            "at": "l3:tests",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And don't merge COD with handover. Handover is usually the heaviest milestone.",
          "sub": "Và đừng gộp COD với bàn giao. Bàn giao thường là mốc nặng nhất.",
          "keys": [
            "mốc nặng nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Warranty starts, risk passes, the bond is released, final payment falls due.",
          "sub": "Bảo hành bắt đầu, rủi ro chuyển sang chủ đầu tư, bảo lãnh thực hiện được giải tỏa, thanh toán cuối được kích hoạt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask: does selling power during tests trigger COD or handover? The contract should say no.",
          "sub": "Hỏi: bán điện trong lúc thử có làm phát sinh COD hay bàn giao không? Hợp đồng nên ghi rõ là không.",
          "keys": [
            "ghi rõ là không"
          ]
        }
      ],
      "ref": "p12"
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
          },
          {
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 15:00 · Bảng mốc của Dũng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:dates table"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "point",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:three",
            "caption": "15:00 · bảng mốc trong tờ trình",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-eq",
            "t": "text",
            "text": "COD EPC = mốc vay",
            "x": 60,
            "y": 1260,
            "size": 60,
            "at": "l2:same day",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three p.m. Dũng shows his dates table.",
          "sub": "Ba giờ chiều. Dũng trình bảng mốc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "EPC COD and loan date, the same day. Neat and tidy!",
          "sub": "Mốc COD EPC và mốc vay, cùng một ngày. Gọn gàng!",
          "face": "happy"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "15:00 · bảng mốc",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mốc EPC trùng mốc vay",
          "why": "Lưới chậm, nhà thầu được gia hạn hợp lệ: mốc EPC lùi, không có phạt; mốc vay không tự lùi.",
          "rule": "Mốc EPC sớm hơn mốc đã hứa với người khác"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Same day for both. Lock it in!",
          "sub": "Hai mốc một ngày. Chốt luôn!",
          "pose": "thumb",
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
          "say": "Say the grid energises late, and the contractor gets a valid extension.",
          "sub": "Giả sử lưới chậm đóng điện, nhà thầu được gia hạn hợp lệ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The EPC date moves, so no penalty. The loan date doesn't. Lost revenue, nothing to cover it.",
          "sub": "Mốc EPC lùi nên không có phạt. Mốc vay không tự lùi. Mất doanh thu mà không có khoản bù.",
          "keys": [
            "Mốc vay không tự lùi"
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
          "who": "dung",
          "say": "EPC date first, then a buffer, then the loan and legal dates.",
          "sub": "Mốc EPC trước, rồi khoảng dự phòng, rồi mới đến mốc vay và mốc pháp lý.",
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
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "f-eqx",
            "t": "strike",
            "over": "f-eq",
            "at": "l1:before"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "COD EPC < mốc vay < pháp lý",
            "x": 60,
            "y": 1360,
            "size": 46,
            "at": "l1:promised",
            "color": "accent"
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "Mốc EPC sớm hơn mốc đã hứa",
            "x": 60,
            "y": 1780,
            "size": 50,
            "at": "l1:promised+300",
            "color": "accent",
            "hl": [
              {
                "text": "mốc đã hứa",
                "at": "l1:promised"
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
          "say": "Lesson: the EPC date must come before every date you've promised others.",
          "sub": "Rút ra: mốc EPC phải sớm hơn mốc mình đã hứa với người khác.",
          "keys": [
            "sớm hơn mốc mình đã hứa"
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
            "text": "⑤ 16:00 · Các trần",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:caps"
          },
          {
            "id": "g-pot",
            "t": "illus",
            "name": "cooking",
            "x": 3368,
            "y": 1120,
            "size": 120,
            "at": "l1:caps"
          },
          {
            "id": "g-ld",
            "t": "text",
            "text": "Phạt chậm: theo ngày, có trần tổng",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l2:per day",
            "hl": [
              {
                "text": "trần tổng",
                "at": "l2:total cap"
              }
            ]
          },
          {
            "id": "g-up",
            "t": "text",
            "text": "+ không phải chứng minh thiệt hại",
            "x": 2028,
            "y": 1330,
            "size": 42,
            "at": "l3:prove",
            "color": "accent"
          },
          {
            "id": "g-up2",
            "t": "text",
            "text": "+ trừ thanh toán, rút bảo lãnh",
            "x": 2028,
            "y": 1395,
            "size": 42,
            "at": "l3:deduct"
          },
          {
            "id": "g-fin",
            "t": "text",
            "text": "Trả phạt ≠ hết nghĩa vụ hoàn thành",
            "x": 2028,
            "y": 1465,
            "size": 42,
            "at": "l4:finishing",
            "color": "coral"
          },
          {
            "id": "g-tn",
            "t": "text",
            "text": "Trần trách nhiệm: [ ]% giá",
            "x": 2028,
            "y": 1550,
            "size": 50,
            "at": "l5:liability cap",
            "hl": [
              {
                "text": "[ ]% giá",
                "at": "l5:percentage"
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
          "say": "Four p.m. The third number: the caps. Think of a lid on a pot.",
          "sub": "Bốn giờ chiều. Con số thứ ba: các trần. Như cái nắp nồi.",
          "keys": [
            "cái nắp nồi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Delay penalties usually run per day, from the required date to COD, up to a total cap.",
          "sub": "Phạt chậm thường tính theo ngày, từ mốc bắt buộc đến ngày đạt COD, có trần tổng.",
          "keys": [
            "trần tổng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The upside: no need to prove loss. Deduct from payments, or call the bond.",
          "sub": "Ưu điểm: không phải chứng minh thiệt hại, được trừ vào thanh toán hoặc rút bảo lãnh.",
          "keys": [
            "không phải chứng minh thiệt hại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Paying penalties doesn't release the contractor from finishing.",
          "sub": "Trả phạt không miễn nghĩa vụ hoàn thành."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then the total liability cap, often a set percentage of the price.",
          "sub": "Rồi trần tổng trách nhiệm, thường bằng [ ]% giá hợp đồng."
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s15",
      "module": "BRK-06",
      "data": {
        "title": "Hỏi: cái gì nằm ngoài trần?",
        "items": [
          {
            "illus": "detective",
            "text": "Gian lận"
          },
          {
            "illus": "angry-face",
            "text": "Cố ý vi phạm"
          },
          {
            "illus": "adhesive-bandage",
            "text": "Chết người, thương tích"
          },
          {
            "illus": "house",
            "text": "Bên thứ ba"
          },
          {
            "illus": "light-bulb",
            "text": "Sở hữu trí tuệ"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Fraud, wilful breach, death or injury, third party property, IP, abandonment.",
          "sub": "Gian lận, cố ý vi phạm, chết người, thương tích, tài sản bên thứ ba, sở hữu trí tuệ, bỏ dở công trình."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask what sits outside the cap.",
          "sub": "Hỏi rõ cái gì nằm ngoài trần.",
          "keys": [
            "nằm ngoài trần"
          ]
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "g-ex",
            "t": "text",
            "text": "Ngoài trần: gian lận, cố ý…",
            "x": 2028,
            "y": 1650,
            "size": 42,
            "at": "l1:exceptions"
          },
          {
            "id": "g-ins",
            "t": "text",
            "text": "Bảo hiểm trả: không tính trần",
            "x": 2028,
            "y": 1730,
            "size": 42,
            "at": "l1:insurance",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "List the exceptions outside the cap. And insurance payouts usually don't count toward the cap.",
          "sub": "Ghi rõ ngoại lệ ngoài trần. Phần bảo hiểm trả thường không tính vào trần.",
          "keys": [
            "không tính vào trần"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 17:00 · Chạm trần thì sao?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:common story"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "think",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "hourglass-not-done",
                "snail"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:months later",
            "caption": "Chuyện thường gặp · nhiều tháng sau",
            "icon": "snail"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Có trần, không nói chạm trần",
            "x": 3996,
            "y": 1250,
            "size": 40,
            "at": "l1:penalty cap"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "→ chạm trần, nhà thầu cầm chừng",
            "x": 3996,
            "y": 1320,
            "size": 42,
            "at": "l2:crawl",
            "color": "coral",
            "hl": [
              {
                "text": "cầm chừng",
                "at": "l2:crawl"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "→ không có quyền chấm dứt",
            "x": 3996,
            "y": 1390,
            "size": 42,
            "at": "l4:no termination",
            "color": "coral"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "→ thông báo khắc phục: thêm nhiều tuần",
            "x": 3996,
            "y": 1460,
            "size": 38,
            "at": "l4:notice"
          },
          {
            "id": "h-op",
            "t": "text",
            "text": "Chạm trần nên mở:",
            "x": 3996,
            "y": 1540,
            "size": 44,
            "at": "l5:options"
          },
          {
            "id": "h-op2",
            "t": "text",
            "text": "tự hoàn thành · giảm giá · chấm dứt",
            "x": 3996,
            "y": 1605,
            "size": 40,
            "at": "l5:finish",
            "color": "accent"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Hỏi trần, rồi: chạm trần làm gì?",
            "x": 3996,
            "y": 1780,
            "size": 48,
            "at": "l6:then ask",
            "color": "accent",
            "hl": [
              {
                "text": "chạm trần làm gì",
                "at": "l6:at the cap"
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
          "say": "Five p.m. A common story. A board paper states a penalty cap, but not what happens at the cap.",
          "sub": "Năm giờ chiều. Chuyện thường gặp: tờ trình ghi phạt chậm có trần, nhưng không nói chạm trần thì sao."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Months later the plant is late. Penalties hit the cap. The contractor works at a crawl.",
          "sub": "Nhiều tháng sau dự án chậm. Phạt chạm trần. Nhà thầu làm cầm chừng.",
          "keys": [
            "cầm chừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Then we terminate, surely?",
          "sub": "Thế thì chấm dứt chứ?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Legal checks: no termination right at the cap. The default notice route costs weeks more.",
          "sub": "Pháp chế tra lại: chạm trần không mở quyền chấm dứt. Phải đi đường thông báo khắc phục vi phạm, mất thêm nhiều tuần.",
          "keys": [
            "chạm trần không mở quyền chấm dứt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A good contract opens options at the cap: finish it yourself, cut the price, or terminate.",
          "sub": "Hợp đồng tốt mở lựa chọn khi chạm trần: tự hoàn thành, giảm giá, hoặc chấm dứt."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson: ask how big the cap is, then ask what you can do at the cap.",
          "sub": "Rút ra: hỏi trần bao nhiêu, rồi hỏi chạm trần thì được làm gì.",
          "keys": [
            "chạm trần thì được làm gì"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "text": "18:00 · Luật VN có trần không?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:vietnamese law"
          },
          {
            "id": "i-sep",
            "t": "text",
            "text": "Phạt vi phạm ≠ bồi thường",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l2:separates",
            "hl": [
              {
                "text": "≠ bồi thường",
                "at": "l2:damages"
              }
            ]
          },
          {
            "id": "i-418",
            "t": "text",
            "text": "Chỉ thỏa thuận phạt → chỉ chịu phạt",
            "x": 5964,
            "y": 1330,
            "size": 42,
            "at": "l2:only pays"
          },
          {
            "id": "i-src1",
            "t": "text",
            "text": "BLDS 2015 k3 Đ418 · LXD 2025 k2 Đ86",
            "x": 5964,
            "y": 1395,
            "size": 28,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-86",
            "t": "text",
            "text": "Bồi thường: thực tế hoặc định trước",
            "x": 5964,
            "y": 1445,
            "size": 42,
            "at": "l3:pre agreed",
            "hl": [
              {
                "text": "định trước",
                "at": "l3:pre agreed"
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
          "say": "Six p.m. Does Vietnamese law cap penalties?",
          "sub": "Sáu giờ chiều. Luật Việt Nam có đặt trần phạt không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It separates penalties from damages. Agree only on a penalty, and the breaching party only pays the penalty.",
          "sub": "Luật tách phạt vi phạm và bồi thường thiệt hại. Chỉ thỏa thuận phạt thì bên vi phạm chỉ chịu phạt.",
          "keys": [
            "chỉ chịu phạt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Construction Law allows damages by actual loss, or a pre agreed amount.",
          "sub": "Luật Xây dựng 2025 cho phép bồi thường theo thiệt hại thực tế hoặc theo mức thiệt hại định trước.",
          "keys": [
            "thiệt hại định trước"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Trần 12% của Luật Xây dựng",
        "wrong": "Dự án tư nhân: trần phạt 12%",
        "right": "12% chỉ cho đầu tư công, PPP",
        "wrongIllus": "factory",
        "rightIllus": "classical-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A private project capped at twelve percent?",
          "sub": "Dự án tư nhân bị trần 12%?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. That cap is for public and PPP projects.",
          "sub": "Không. Trần 12% chỉ cho đầu tư công, PPP.",
          "keys": [
            "chỉ cho đầu tư công, PPP"
          ]
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "i-12",
            "t": "text",
            "text": "12%: chỉ đầu tư công, PPP",
            "x": 5964,
            "y": 1520,
            "size": 44,
            "at": "l1:private",
            "color": "accent"
          },
          {
            "id": "i-8",
            "t": "text",
            "text": "Rủi ro trần 8%: LTM Đ301",
            "x": 6804,
            "y": 1250,
            "size": 46,
            "at": "l1:eight",
            "color": "coral",
            "hl": [
              {
                "text": "8%",
                "at": "l1:eight percent"
              }
            ]
          },
          {
            "id": "i-src8a",
            "t": "text",
            "text": "Tòa án, trọng tài chưa thống nhất",
            "x": 6804,
            "y": 1315,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-src8b",
            "t": "text",
            "text": "Điều 301 còn hiệu lực đến 20/10/2026",
            "x": 6804,
            "y": 1352,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-src8c",
            "t": "text",
            "text": "Dự thảo bỏ quy định này: đang thảo luận",
            "x": 6804,
            "y": 1389,
            "size": 28,
            "at": "l2:draft",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-8s2",
            "t": "text",
            "text": "→ kiểm văn bản hiện hành",
            "x": 6804,
            "y": 1430,
            "size": 40,
            "at": "l2:current law"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: phạt ngày, biện pháp duy nhất",
            "x": 6804,
            "y": 1510,
            "size": 40,
            "at": "l3:option a",
            "color": "muted"
          },
          {
            "id": "i-ax",
            "t": "strike",
            "over": "i-a",
            "at": "l3:cut"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: bồi thường định trước + bảng tính",
            "x": 6804,
            "y": 1580,
            "size": 40,
            "at": "l4:option b",
            "color": "accent"
          },
          {
            "id": "i-b2",
            "t": "text",
            "text": "giữ quyền đòi thêm",
            "x": 6804,
            "y": 1645,
            "size": 40,
            "at": "l4:claim more"
          },
          {
            "id": "i-take",
            "t": "text",
            "text": "Trần có giá khi câu chữ vững",
            "x": 5964,
            "y": 1780,
            "size": 48,
            "at": "l5:words",
            "color": "accent",
            "hl": [
              {
                "text": "câu chữ vững",
                "at": "l5:words"
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
          "say": "Still, a private project may face the eight percent cap of the Commercial Law.",
          "sub": "Dù vậy, dự án tư nhân vẫn có rủi ro bị áp trần 8% theo Điều 301 Luật Thương mại 2005 nếu bị coi là hoạt động thương mại.",
          "keys": [
            "trần 8%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Courts and arbitrators disagree, and a draft to drop it is still debated. Check current law.",
          "sub": "Tòa án, trọng tài chưa thống nhất; dự thảo bỏ quy định này còn đang thảo luận. Kiểm văn bản hiện hành."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option A: a daily fine as the sole remedy. If a legal cap applies, the excess can be cut.",
          "sub": "Cách A: phạt theo ngày, là biện pháp duy nhất. Bị áp trần luật thì phần vượt có thể bị cắt.",
          "keys": [
            "biện pháp duy nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Option B: pre agreed damages, a kept calculation, and the right to claim more.",
          "sub": "Cách B: bồi thường thiệt hại định trước, lưu bảng tính căn cứ, giữ quyền đòi bồi thường thêm.",
          "keys": [
            "bồi thường thiệt hại định trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Harder to negotiate, safer in a dispute. A cap is only worth the words around it.",
          "sub": "Đàm phán khó hơn, vững hơn khi tranh chấp. Con số trần chỉ có giá khi câu chữ quanh nó đứng vững.",
          "keys": [
            "câu chữ quanh nó đứng vững"
          ]
        }
      ],
      "ref": "p18,p19,p20,p21"
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Sáng hôm sau · Họp HĐQT",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:board room"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:board room",
            "caption": "Sáng hôm sau · phòng họp HĐQT",
            "icon": "office-building"
          },
          {
            "id": "j-10",
            "t": "text",
            "text": "10 câu hỏi kẹp tờ trình",
            "x": 7932,
            "y": 1250,
            "size": 48,
            "at": "l1:ten questions",
            "hl": [
              {
                "text": "10 câu hỏi",
                "at": "l1:ten questions"
              }
            ]
          },
          {
            "id": "j-tc",
            "t": "text",
            "text": "5 câu: tài chính",
            "x": 7932,
            "y": 1330,
            "size": 44,
            "at": "l2:finance",
            "color": "accent"
          },
          {
            "id": "j-tc2",
            "t": "text",
            "text": "giá · bằng chứng · bảo lãnh · mốc",
            "x": 7932,
            "y": 1390,
            "size": 36,
            "at": "l2:evidence"
          },
          {
            "id": "j-pc",
            "t": "text",
            "text": "5 câu: pháp chế",
            "x": 7932,
            "y": 1470,
            "size": 44,
            "at": "l3:legal",
            "color": "accent"
          },
          {
            "id": "j-pc2",
            "t": "text",
            "text": "phạt · trần · ngoại lệ · trần luật",
            "x": 7932,
            "y": 1530,
            "size": 36,
            "at": "l3:exceptions"
          },
          {
            "id": "j-bb",
            "t": "text",
            "text": "Ghi câu trả lời + điều dẫn chiếu",
            "x": 7932,
            "y": 1610,
            "size": 40,
            "at": "l4:clause numbers",
            "hl": [
              {
                "text": "điều dẫn chiếu",
                "at": "l4:clause numbers"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Ba cây chụm lại → hợp đồng vững",
            "x": 7932,
            "y": 1780,
            "size": 50,
            "at": "l5:three trees",
            "color": "accent",
            "hl": [
              {
                "text": "hợp đồng vững",
                "at": "l5:stands"
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
          "say": "Next morning, the board room. Thảo clips ten questions to the paper.",
          "sub": "Sáng hôm sau, phòng họp Hội đồng. Thảo kẹp mười câu hỏi vào tờ trình.",
          "keys": [
            "mười câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five for finance: price, payment evidence, bonds, the date gap, COD versus test sales.",
          "sub": "Năm câu cho tài chính: giá, bằng chứng thanh toán, bảo lãnh, khoảng cách các mốc, COD và bán điện khi thử.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Five for legal: penalty basis, cap and termination, exceptions, sole remedy, which legal cap applies.",
          "sub": "Năm câu cho pháp chế: căn cứ mức phạt, trần và quyền chấm dứt, ngoại lệ, biện pháp duy nhất, trần luật nào bị áp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Good. Put the answers and clause numbers in the paper. The minutes will show we asked.",
          "sub": "Tốt. Ghi câu trả lời và điều khoản dẫn chiếu vào tờ trình. Biên bản họp sẽ cho thấy mình đã hỏi.",
          "keys": [
            "điều khoản dẫn chiếu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three trees together make a high mountain. Three numbers, tied together, make a contract that stands.",
          "sub": "“Ba cây chụm lại nên hòn núi cao.” Ba con số nối chặt với nhau, hợp đồng mới đứng vững.",
          "keys": [
            "nối chặt với nhau"
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
      "ref": "p22,p23,p24"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:named doors",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:loan",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:act",
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
            "x": 5536,
            "y": 20,
            "at": "l1:named doors"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 20,
            "at": "l2:loan"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1110,
            "at": "l2:act"
          },
          {
            "id": "z-src1",
            "t": "text",
            "text": "Bài để tham khảo chung, không phải tư vấn pháp lý; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 60,
            "y": 20,
            "size": 24,
            "at": "l3:end",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-src2",
            "t": "text",
            "text": "Trước mỗi quyết định, nhờ pháp chế kiểm văn bản hiện hành.",
            "x": 60,
            "y": 55,
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
          "say": "So: the price changes only through named doors.",
          "sub": "Tóm lại: giá chỉ đổi qua cửa đã đặt tên.",
          "keys": [
            "cửa đã đặt tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The EPC date beats the loan and legal dates. And at the cap, you need the right to act.",
          "sub": "Mốc EPC sớm hơn mốc vay và mốc pháp lý. Chạm trần thì phải có quyền hành động.",
          "keys": [
            "quyền hành động"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "General information only, not legal advice.",
          "sub": "Bài là kiến thức chung, không phải tư vấn pháp lý."
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
      "data": {
        "q": "The EPC date equals the loan date and the grid is late, what does the owner face?",
        "options": [
          "The contractor pays double penalties, because the grid operator is its subcontractor",
          "Nothing changes, because extensions in EPC also move the loan date automatically",
          "A valid extension removes penalties for those days, while the loan date does not move"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Gia hạn hợp lệ làm mốc EPC lùi nên không có phạt cho những ngày đó. Mốc vay không tự lùi, nên chủ đầu tư mất doanh thu mà không có khoản phạt bù."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The EPC date equals the loan date and the grid is late, what does the owner face?",
          "sub": "Mốc EPC trùng mốc vay và lưới chậm, chủ đầu tư gặp gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A valid extension moves the EPC date, with no penalty. The loan date stays put.",
          "sub": "Gia hạn hợp lệ làm mốc EPC lùi, không có phạt. Mốc vay vẫn đứng yên."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[14]"
    },
    {
      "id": "s32",
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
          "say": "Right now: send the ten questions to legal and finance.",
          "sub": "Việc làm ngay: gửi mười câu hỏi cho pháp chế và tài chính.",
          "keys": [
            "gửi mười câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: the risks the owner still carries. Now, forty questions below!",
          "sub": "Bài sau: rủi ro chủ đầu tư vẫn phải gánh. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-24 (vật neo rồi phân tích): neo số “3” (ba con số trong hàng chục con số) → bối cảnh Thảo khoanh ba vòng đỏ → “chi tiết đáng chú ý”: không đứng riêng (p2) → câu hỏi chính → ba ý. Dòng thời gian: MỘT NGÀY TRƯỚC PHIÊN BIỂU QUYẾT (8:00 khoanh số → 9:00 gọi Sam, ba cửa giá p3–p5 → 10:30 cách trả, Dũng lấy mức tạm ứng Đ12 p6–p7 → 13:30 ba mốc cạnh nhau, COD ≠ bàn giao p8–p9, p12 → 15:00 “Khoan đã!” Dũng đặt COD EPC trùng mốc vay p10–p11 → 16:00 các trần p13–p14 → 17:00 chuyện chạm trần p15–p16 → 18:00 luật VN 12%/8%, Cách A/B p17–p21 → sáng hôm sau họp HĐQT, mười câu hỏi p22–p24). Nhân vật (w145/_series/epc-owner-executive.md): Thảo, bác Bình (Chủ tịch), Dũng, Sam (nhà thầu). Tục ngữ mở/khép: “Ba cây chụm lại nên hòn núi cao”. BRK: 04 (câu giá trước/sau p4), 07 (rehook COD trùng mốc vay), 06 (ngoại lệ ngoài trần p14), 04 (12% chỉ đầu tư công/PPP p18). Không tên dự án/công ty/hợp đồng thật. Số chỉ lấy từ bài: NĐ 210/2026 Đ11/Đ12, LĐL 2024 Đ12, BLDS Đ418 k3, LXD 2025 Đ86 k2/k3 12%, LTM 2005 Đ301 8%, 20/10/2026, [ ]%. Câu đố questions[14].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
