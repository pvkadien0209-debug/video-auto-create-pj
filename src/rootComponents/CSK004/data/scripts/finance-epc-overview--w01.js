// finance-epc-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "finance-epc-overview--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "epc-finance",
    "slug": "finance-epc-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Tài chính cần theo dõi những dòng tiền và bảo đảm nào trong hợp đồng EPC?",
    "series": "Dòng tiền và bảo đảm trong hợp đồng EPC — cho tài chính kế toán, trả đúng mốc và không để bảo lãnh nào hết hạn"
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
            "id": "a-3",
            "t": "text",
            "text": "3 câu hỏi gốc",
            "x": 60,
            "y": 60,
            "size": 110,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 câu hỏi gốc",
                "at": "l1:questions"
              }
            ]
          },
          {
            "id": "a-q0",
            "t": "text",
            "text": "① Tiền đi lúc nào?",
            "x": 80,
            "y": 230,
            "size": 60,
            "at": "l2:When"
          },
          {
            "id": "a-q1",
            "t": "text",
            "text": "② Lấy gì bảo đảm?",
            "x": 80,
            "y": 325,
            "size": 60,
            "at": "l2:secures"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "③ Giấy nào còn hạn?",
            "x": 80,
            "y": 420,
            "size": 60,
            "at": "l2:papers"
          },
          {
            "id": "a-trip",
            "t": "text",
            "text": "3 chỗ hay vấp",
            "x": 80,
            "y": 540,
            "size": 52,
            "at": "l3:three spots",
            "color": "coral",
            "hl": [
              {
                "text": "hay vấp",
                "at": "l3:trip"
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
          "say": "Hundreds of pages of EPC contract. For finance, just three questions.",
          "sub": "Hợp đồng EPC dày hàng trăm trang. Với tài chính, chỉ có ba câu hỏi gốc.",
          "keys": [
            "ba câu hỏi gốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When does money go? What secures it? Which papers must still be valid?",
          "sub": "Tiền đi lúc nào? Lấy gì bảo đảm? Giấy tờ nào phải còn hiệu lực?",
          "keys": [
            "Lấy gì bảo đảm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Simple? Yet three spots trip people up.",
          "sub": "Đơn giản? Vậy mà có ba chỗ hay vấp.",
          "keys": [
            "ba chỗ hay vấp"
          ]
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
                  "pose": "hold",
                  "face": "thinking"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "wind-face"
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
                  "shot": "E-SHOT-10",
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
            "caption": "Thứ Hai · tuần đầu nhận hợp đồng",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tiền trao cháo múc”",
            "x": 80,
            "y": 640,
            "size": 56,
            "at": "l5:porridge",
            "color": "accent",
            "hl": [
              {
                "text": "cháo múc",
                "at": "l5:porridge"
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
          "say": "Meet Thảo, finance officer for the owner of a wind farm built under EPC.",
          "sub": "Đây là Thảo, chuyên viên tài chính của Chủ đầu tư một nhà máy điện gió làm theo EPC."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First week on this contract. Hundreds of pages. Where do I start?",
          "sub": "Tuần đầu nhận hợp đồng. Hàng trăm trang. Bắt đầu từ đâu đây?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Mr. Bình, the chief accountant. Decades of closing books.",
          "sub": "Còn đây là Bác Bình, kế toán trưởng, mấy chục năm khoá sổ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Slowly. Don't read the clauses yet. Draw the timeline first.",
          "sub": "Từ từ. Chưa đọc điều khoản vội. Vẽ dòng thời gian trước đã.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: cash handed, porridge ladled. In EPC, cash goes against paper.",
          "sub": "Ông bà nói: “Tiền trao cháo múc.” Ở EPC: trao tiền theo giấy.",
          "keys": [
            "trao tiền theo giấy"
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
      "ref": "intro,p3"
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
            "text": "Tài chính theo dõi gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:track",
            "hl": [
              {
                "text": "theo dõi gì",
                "at": "l1:track"
              }
            ]
          },
          {
            "id": "b-epc",
            "t": "text",
            "text": "EPC = mua kết quả",
            "x": 2028,
            "y": 160,
            "size": 58,
            "at": "l2:result",
            "color": "accent",
            "hl": [
              {
                "text": "mua kết quả",
                "at": "l2:result"
              }
            ]
          },
          {
            "id": "b-epc2",
            "t": "text",
            "text": "thiết kế · mua sắm · thi công",
            "x": 2028,
            "y": 250,
            "size": 36,
            "at": "l2:design",
            "color": "muted"
          },
          {
            "id": "b-p0",
            "t": "box",
            "x": 2028,
            "y": 320,
            "w": 370,
            "h": 90,
            "at": "l3:responsible",
            "stroke": 4
          },
          {
            "id": "b-p1",
            "t": "box",
            "x": 2428,
            "y": 320,
            "w": 370,
            "h": 90,
            "at": "l3:lump",
            "stroke": 4
          },
          {
            "id": "b-p2",
            "t": "box",
            "x": 2828,
            "y": 320,
            "w": 370,
            "h": 90,
            "at": "l3:firm",
            "stroke": 4
          },
          {
            "id": "b-pt0",
            "t": "text",
            "text": "1 đầu mối",
            "x": 2053,
            "y": 338,
            "size": 44,
            "at": "l3:responsible+200"
          },
          {
            "id": "b-pt1",
            "t": "text",
            "text": "Giá trọn gói",
            "x": 2453,
            "y": 338,
            "size": 44,
            "at": "l3:lump+200"
          },
          {
            "id": "b-pt2",
            "t": "text",
            "text": "Hạn chắc chắn",
            "x": 2853,
            "y": 338,
            "size": 44,
            "at": "l3:firm+200"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đọc từng trang",
            "x": 2028,
            "y": 450,
            "size": 50,
            "at": "l4:reading",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:page"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: vẽ dòng thời gian",
            "x": 2868,
            "y": 450,
            "size": 50,
            "at": "l4:drawing",
            "color": "accent",
            "hl": [
              {
                "text": "vẽ dòng thời gian",
                "at": "l4:timeline"
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
          "say": "So what money and securities must finance track in an EPC contract?",
          "sub": "Vậy tài chính phải theo dõi những dòng tiền và bảo đảm nào trong hợp đồng EPC?",
          "keys": [
            "dòng tiền và bảo đảm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One contractor, design to handover. The owner buys a result: a whole feast, not each spice.",
          "sub": "Ở EPC, một nhà thầu nhận trọn từ thiết kế tới bàn giao. Chủ đầu tư mua kết quả: đặt cả mâm cỗ, không mua từng gói gia vị.",
          "keys": [
            "mua kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three pillars: one responsible party, a lump sum price, a firm completion date.",
          "sub": "Ba trụ cột: một đầu mối chịu trách nhiệm, giá trọn gói, thời hạn hoàn thành chắc chắn.",
          "keys": [
            "Ba trụ cột"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So money hugs the milestones. Not reading page by page, but drawing the timeline.",
          "sub": "Nên dòng tiền bám sát các mốc. Không phải đọc từng trang, mà là vẽ dòng thời gian.",
          "keys": [
            "vẽ dòng thời gian"
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
          }
        ],
        "items": [
          {
            "id": "b-r0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l1:signing",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-r1",
            "t": "box",
            "x": 2264,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l1:proceed",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-r2",
            "t": "box",
            "x": 2500,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l1:delivery",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-r3",
            "t": "box",
            "x": 2736,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l1:testing",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-r4",
            "t": "box",
            "x": 2972,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l1:COD",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-r5",
            "t": "box",
            "x": 3208,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l1:handover",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-r6",
            "t": "box",
            "x": 3444,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l2:final",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-rt0",
            "t": "text",
            "text": "Ký",
            "x": 2043,
            "y": 578,
            "size": 38,
            "at": "l1:signing+200"
          },
          {
            "id": "b-rt1",
            "t": "text",
            "text": "Khởi công",
            "x": 2279,
            "y": 578,
            "size": 38,
            "at": "l1:proceed+200"
          },
          {
            "id": "b-rt2",
            "t": "text",
            "text": "Giao hàng",
            "x": 2515,
            "y": 578,
            "size": 38,
            "at": "l1:delivery+200"
          },
          {
            "id": "b-rt3",
            "t": "text",
            "text": "Chạy thử",
            "x": 2751,
            "y": 578,
            "size": 38,
            "at": "l1:testing+200"
          },
          {
            "id": "b-rt4",
            "t": "text",
            "text": "COD",
            "x": 2987,
            "y": 578,
            "size": 38,
            "at": "l1:COD+200"
          },
          {
            "id": "b-rt5",
            "t": "text",
            "text": "Bàn giao",
            "x": 3223,
            "y": 578,
            "size": 38,
            "at": "l1:handover+200"
          },
          {
            "id": "b-rt6",
            "t": "text",
            "text": "Cuối cùng",
            "x": 3459,
            "y": 578,
            "size": 38,
            "at": "l2:final+200"
          },
          {
            "id": "b-ff",
            "t": "text",
            "text": "Đét tua nhanh ▸▸",
            "x": 3218,
            "y": 680,
            "size": 40,
            "at": "l2:Fast",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The usual road: signing, notice to proceed, delivery, testing, commercial operation or COD, handover.",
          "sub": "Con đường thường gặp: ký, lệnh khởi công, giao hàng, chạy thử, vận hành thương mại tức COD, bàn giao.",
          "keys": [
            "COD"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Defects period over, then final completion. Fast forward, with Thảo!",
          "sub": "Rồi hết thời hạn bảo đảm khiếm khuyết, hoàn thành cuối cùng. Đét tua nhanh cùng Thảo!"
        }
      ],
      "ref": "p2"
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
          },
          {
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ngày ký · Năm cột",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:signing"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "fountain-pen",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bình",
            "caption": "Ngày ký · dòng thời gian đầu tiên",
            "icon": "fountain-pen"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 175,
            "w": 46,
            "h": 46,
            "at": "l2:event",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 157,
            "size": 58,
            "at": "l2:event+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Sự kiện gì",
            "x": 4064,
            "y": 165,
            "size": 44,
            "at": "l2:event+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 250,
            "w": 46,
            "h": 46,
            "at": "l2:payment",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 232,
            "size": 58,
            "at": "l2:payment+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Khoản tiền nào",
            "x": 4064,
            "y": 240,
            "size": 44,
            "at": "l2:payment+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 325,
            "w": 46,
            "h": 46,
            "at": "l2:guarantee",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 307,
            "size": 58,
            "at": "l2:guarantee+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Bảo lãnh nào",
            "x": 4064,
            "y": 315,
            "size": 44,
            "at": "l2:guarantee+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 400,
            "w": 46,
            "h": 46,
            "at": "l3:insurance",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 382,
            "size": 58,
            "at": "l3:insurance+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Bảo hiểm nào",
            "x": 4064,
            "y": 390,
            "size": 44,
            "at": "l3:insurance+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 475,
            "w": 46,
            "h": 46,
            "at": "l3:penalty",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 457,
            "size": 58,
            "at": "l3:penalty+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Khoản phạt nào",
            "x": 4064,
            "y": 465,
            "size": 44,
            "at": "l3:penalty+200"
          },
          {
            "id": "c-buf",
            "t": "text",
            "text": "Đặt cạnh: vay + mua bán điện",
            "x": 3996,
            "y": 560,
            "size": 40,
            "at": "l4:loan",
            "hl": [
              {
                "text": "vay + mua bán điện",
                "at": "l4:purchase"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Mốc nào cũng kéo tiền",
            "x": 3996,
            "y": 625,
            "size": 46,
            "at": "l5:pulls",
            "color": "accent",
            "hl": [
              {
                "text": "kéo tiền",
                "at": "l5:money"
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
          "say": "Stop one: signing day. Mr. Bình adds the columns.",
          "sub": "Chặng một: ngày ký. Bác Bình kẻ thêm cột."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "At each milestone, five things. The event. The payment. Which guarantee is issued, reduced or returned.",
          "sub": "Ở mỗi mốc, năm thứ. Sự kiện gì. Khoản tiền nào. Bảo lãnh nào phát hành, giảm hay trả lại.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Which insurance starts or ends. Which penalty starts or stops.",
          "sub": "Bảo hiểm nào bắt đầu, kết thúc. Khoản phạt nào bắt đầu hay dừng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And I set it beside the loan and the power purchase schedules, to see the buffer.",
          "sub": "Rồi em đặt cạnh tiến độ hợp đồng vay và hợp đồng mua bán điện để thấy khoảng dự phòng.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every milestone pulls money, like a buffalo pulls the plough.",
          "sub": "Mốc nào cũng kéo theo tiền, như trâu kéo cày.",
          "keys": [
            "Mốc nào cũng kéo theo tiền"
          ]
        }
      ],
      "ref": "p3,p5"
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
            "id": "c-87",
            "t": "text",
            "text": "Điều 87: ghi rõ thanh, quyết toán",
            "x": 3996,
            "y": 690,
            "size": 36,
            "at": "l1:spell",
            "hl": [
              {
                "text": "ghi rõ",
                "at": "l1:spell"
              }
            ]
          },
          {
            "id": "c-87b",
            "t": "text",
            "text": "Đồng Việt Nam",
            "x": 4836,
            "y": 690,
            "size": 44,
            "at": "l2:dong",
            "color": "accent",
            "hl": [
              {
                "text": "Đồng Việt Nam",
                "at": "l2:dong"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 87 Luật Xây dựng 135/2025/QH15, hiệu lực 01/7/2026",
            "x": 3996,
            "y": 748,
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
          "say": "Did you know? Construction Law Article eighty seven: contracts must spell out payment and settlement.",
          "sub": "Bạn có biết: Điều 87 Luật Xây dựng 2025, hiệu lực từ 01/7/2026, yêu cầu ghi rõ thanh toán, tạm thanh toán, quyết toán, thanh lý.",
          "keys": [
            "ghi rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Payment is in Vietnamese dong; foreign currency follows foreign exchange law.",
          "sub": "Đồng tiền thanh toán là Đồng Việt Nam; dùng ngoại tệ phải theo pháp luật ngoại hối.",
          "keys": [
            "Đồng Việt Nam"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "② Giá hợp đồng · Trọn gói",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:price"
          },
          {
            "id": "d-ls",
            "t": "text",
            "text": "Đã gồm: thuế, chở, công",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l1:included",
            "hl": [
              {
                "text": "Đã gồm",
                "at": "l1:included"
              }
            ]
          },
          {
            "id": "d-risk",
            "t": "text",
            "text": "Rủi ro khối lượng → nhà thầu",
            "x": 5964,
            "y": 250,
            "size": 44,
            "at": "l2:risk",
            "color": "coral"
          },
          {
            "id": "d-pot",
            "t": "illus",
            "name": "pot-of-food",
            "x": 6804,
            "y": 225,
            "size": 90,
            "at": "l2:cook"
          },
          {
            "id": "d-cook",
            "t": "text",
            "text": "đầu bếp báo giá cả nồi",
            "x": 6914,
            "y": 250,
            "size": 40,
            "at": "l2:cook",
            "color": "muted"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Chỉ đổi qua 3 cửa:",
            "x": 5964,
            "y": 340,
            "size": 50,
            "at": "l3:three doors",
            "color": "accent",
            "hl": [
              {
                "text": "3 cửa",
                "at": "l3:doors"
              }
            ]
          },
          {
            "id": "d-3a",
            "t": "text",
            "text": "Thay đổi · Luật · Điều chỉnh",
            "x": 6004,
            "y": 410,
            "size": 42,
            "at": "l3:Variations"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: the price. Usually lump sum, with the contractor's taxes, transport, packing and labour included.",
          "sub": "Chặng hai: giá. Thường là trọn gói, đã gồm thuế của nhà thầu, vận chuyển, đóng gói và nhân công.",
          "keys": [
            "trọn gói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quantity and material price risk sit with the contractor, like a cook who quoted the whole pot.",
          "sub": "Rủi ro khối lượng và giá vật tư thuộc nhà thầu, như đầu bếp đã báo giá cả nồi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It changes through only three doors: Variations, change in law, and the agreed adjustment mechanism.",
          "sub": "Giá chỉ đổi qua ba cửa: Thay đổi, thay đổi pháp luật, và cơ chế điều chỉnh giá đã thoả thuận.",
          "keys": [
            "ba cửa"
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-p0",
            "t": "box",
            "x": 5964,
            "y": 500,
            "w": 385,
            "h": 100,
            "at": "l1:advance",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-p1",
            "t": "box",
            "x": 6374,
            "y": 500,
            "w": 385,
            "h": 100,
            "at": "l1:cash",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-p2",
            "t": "box",
            "x": 6784,
            "y": 500,
            "w": 385,
            "h": 100,
            "at": "l2:deferred",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-p3",
            "t": "box",
            "x": 7194,
            "y": 500,
            "w": 385,
            "h": 100,
            "at": "l3:finance costs",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-pt0",
            "t": "text",
            "text": "① Tạm ứng",
            "x": 5984,
            "y": 522,
            "size": 40,
            "at": "l1:advance+200"
          },
          {
            "id": "d-pt1",
            "t": "text",
            "text": "② Tiền mặt theo mốc",
            "x": 6394,
            "y": 522,
            "size": 40,
            "at": "l1:cash+200"
          },
          {
            "id": "d-pt2",
            "t": "text",
            "text": "③ Trả chậm",
            "x": 6804,
            "y": 522,
            "size": 40,
            "at": "l2:deferred+200"
          },
          {
            "id": "d-pt3",
            "t": "text",
            "text": "④ Chi phí tài chính",
            "x": 7214,
            "y": 522,
            "size": 40,
            "at": "l3:finance costs+200"
          },
          {
            "id": "d-lc",
            "t": "text",
            "text": "LC trả chậm / bảo hiểm tín dụng",
            "x": 6784,
            "y": 625,
            "size": 34,
            "at": "l2:letter",
            "color": "muted"
          },
          {
            "id": "d-11",
            "t": "text",
            "text": "Trọn gói: phổ biến, không bắt buộc",
            "x": 5964,
            "y": 680,
            "size": 40,
            "at": "l4:mandatory",
            "hl": [
              {
                "text": "không bắt buộc",
                "at": "l4:mandatory"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Điều 11 Nghị định 210/2026/NĐ-CP",
            "x": 7004,
            "y": 690,
            "size": 26,
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
          "who": "thao",
          "say": "Four parts. First, the advance. Second, cash paid by milestone.",
          "sub": "Bốn phần. Thứ nhất, tạm ứng. Thứ hai, tiền mặt trả theo mốc.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Third, a deferred part the contractor finances, backed by a deferred letter of credit or export credit insurance.",
          "sub": "Thứ ba, phần trả chậm do nhà thầu cấp vốn, bảo đảm bằng thư tín dụng trả chậm hoặc bảo hiểm tín dụng xuất khẩu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Fourth, finance costs: interest and credit insurance premiums.",
          "sub": "Thứ tư, chi phí tài chính: tiền lãi, phí bảo hiểm tín dụng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten: lump sum is common for EPC when risks can be managed, but not mandatory.",
          "sub": "Nghị định 210/2026: trọn gói phổ biến cho EPC khi quản lý được rủi ro, chứ không bắt buộc.",
          "keys": [
            "không bắt buộc"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Mốc giao thiết bị chính",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Months"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "factory"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Vài tháng sau · Lệnh Thanh toán về",
            "icon": "page-facing-up"
          },
          {
            "id": "e-lt",
            "t": "text",
            "text": "Thư báo: hàng đã xuất xưởng",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l2:dispatch",
            "color": "muted"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Số tiền khớp phụ lục giá",
            "x": 7932,
            "y": 240,
            "size": 44,
            "at": "l2:matches"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Hợp đồng đòi thứ gì?",
            "x": 7932,
            "y": 320,
            "size": 52,
            "at": "l3:contract",
            "color": "coral",
            "hl": [
              {
                "text": "đòi thứ gì",
                "at": "l3:asks"
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
          "say": "Months later. Meet Dũng, the owner's young site engineer, with the contractor's payment order.",
          "sub": "Vài tháng sau. Đây là Dũng, kỹ sư hiện trường trẻ bên Chủ đầu tư, mang Lệnh Thanh toán của nhà thầu.",
          "keys": [
            "Lệnh Thanh toán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Main equipment milestone! Dispatch letter attached, amount matches the price appendix. Sign it today!",
          "sub": "Mốc giao thiết bị chính! Có thư báo xuất xưởng, số tiền khớp phụ lục giá. Trình ký luôn trong ngày nhé!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A letter saying goods left the factory. Is that what the contract asks for?",
          "sub": "Một lá thư báo hàng rời xưởng. Đó có phải thứ hợp đồng đòi không?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Vài tháng sau · phòng tài chính",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Trình ký theo thư báo xuất xưởng",
          "why": "Phụ lục mốc yêu cầu vận đơn, trong khi lô hàng vẫn đang chờ xếp tàu.",
          "rule": "Trả theo bằng chứng, không theo lời báo"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Numbers match. Sending it for signature now.",
          "sub": "Số khớp rồi. Em trình ký ngay đây.",
          "pose": "explain",
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
          "say": "Matching the price appendix is not enough. Which evidence does the milestone appendix require?",
          "sub": "Khớp phụ lục giá chưa đủ. Phụ lục mốc đòi bằng chứng nào?",
          "keys": [
            "Phụ lục mốc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Let me open the milestone appendix first, then send it.",
          "sub": "Để em mở phụ lục mốc trước, rồi mới trình.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Pay against evidence, not against a message.",
          "sub": "Đúng. Trả theo bằng chứng, không theo lời báo.",
          "phase": "redo",
          "keys": [
            "Trả theo bằng chứng"
          ]
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
            "at": "l2",
            "fit": [
              "e-v2"
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
            "id": "e-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "ship",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
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
            "caption": "Gọi công trường · phụ lục mốc",
            "icon": "ship"
          },
          {
            "id": "e-bl",
            "t": "text",
            "text": "Cần: vận đơn",
            "x": 7932,
            "y": 410,
            "size": 54,
            "at": "l2:bill",
            "color": "accent",
            "hl": [
              {
                "text": "vận đơn",
                "at": "l2:lading"
              }
            ]
          },
          {
            "id": "e-wait",
            "t": "text",
            "text": "Hàng: còn chờ xếp tàu",
            "x": 7932,
            "y": 485,
            "size": 44,
            "at": "l2:awaits",
            "color": "coral"
          },
          {
            "id": "e-lev",
            "t": "text",
            "text": "Trả trước → mất đòn bẩy",
            "x": 7932,
            "y": 560,
            "size": 46,
            "at": "l3:leverage",
            "color": "coral",
            "hl": [
              {
                "text": "mất đòn bẩy",
                "at": "l3:leverage"
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
          "say": "And this is Ms. Hoa, the Owner's Representative, calling from site.",
          "sub": "Còn đây là cô Hoa, Đại diện Chủ đầu tư, gọi từ công trường.",
          "keys": [
            "Đại diện Chủ đầu tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Milestones need hard evidence. This one asks for the bill of lading, and the shipment still awaits a ship.",
          "sub": "Mốc phải gắn bằng chứng. Mốc này đòi vận đơn, mà lô hàng vẫn đang chờ xếp tàu.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like installation records or COD confirmation. Prepay, and you lose leverage if the contractor stumbles.",
          "sub": "Như biên bản lắp đặt, xác nhận COD. Trả trước phần chưa tạo ra là mất đòn bẩy khi nhà thầu gặp khó.",
          "keys": [
            "mất đòn bẩy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-prov",
            "t": "text",
            "text": "Trả ≠ chấp nhận · tạm tính",
            "x": 7932,
            "y": 640,
            "size": 44,
            "at": "l1:provisional",
            "hl": [
              {
                "text": "tạm tính",
                "at": "l1:provisional"
              }
            ]
          },
          {
            "id": "e-wh",
            "t": "text",
            "text": "Được giữ lại có lý do",
            "x": 7932,
            "y": 705,
            "size": 40,
            "at": "l2:withhold",
            "color": "accent",
            "hl": [
              {
                "text": "giữ lại",
                "at": "l2:withhold"
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
          "say": "And paying is not accepting the works. Payments are usually provisional.",
          "sub": "Thanh toán không phải là chấp nhận công trình; mọi khoản thường chỉ là tạm tính.",
          "keys": [
            "tạm tính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The owner may withhold for defects, a late COD risk, unpaid subcontractors or disputes.",
          "sub": "Chủ đầu tư còn được giữ lại thanh toán khi có khuyết tật, nguy cơ chậm COD, nợ thầu phụ hay tranh chấp.",
          "keys": [
            "giữ lại thanh toán"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s12",
      "module": "BRK-02",
      "data": {
        "kicker": "Câu hỏi thứ hai",
        "title": "Nhà thầu đổ vỡ, tiền ở đâu?",
        "hl": "tiền ở đâu",
        "sub": "Bảo lãnh: tiền dự phòng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Question two. If the contractor collapses, where is the money?",
          "sub": "Câu hỏi thứ hai. Nhà thầu đổ vỡ, tiền ở đâu?",
          "keys": [
            "tiền ở đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In the guarantees. Your backup cash.",
          "sub": "Trong các bảo lãnh: tiền dự phòng."
        }
      ],
      "ref": "p14"
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
            "zoom": 1.3,
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
            "text": "④ Tối ấy · Két bảo lãnh",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "locked-with-key",
                "bank"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:safe",
            "caption": "Tối hôm ấy · két giữ bản gốc",
            "icon": "locked-with-key"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Tạm ứng: giảm dần",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:Advance",
            "hl": [
              {
                "text": "giảm dần",
                "at": "l2:shrinks"
              }
            ]
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "Thực hiện: [ ]%, tới bàn giao",
            "x": 60,
            "y": 1345,
            "size": 48,
            "at": "l3:Performance"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "Bảo hành: tới hết bảo đảm",
            "x": 60,
            "y": 1430,
            "size": 48,
            "at": "l3:warranty",
            "hl": [
              {
                "text": "Bảo hành",
                "at": "l3:warranty"
              }
            ]
          },
          {
            "id": "f-od",
            "t": "text",
            "text": "Trả ngay · không huỷ ngang",
            "x": 60,
            "y": 1525,
            "size": 46,
            "at": "l4:demand",
            "color": "accent"
          },
          {
            "id": "f-tyre",
            "t": "text",
            "text": "Bánh dự phòng: phải còn hạn",
            "x": 60,
            "y": 1610,
            "size": 42,
            "at": "l5:spare",
            "color": "coral",
            "hl": [
              {
                "text": "còn hạn",
                "at": "l5:valid"
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
          "say": "Stop four, that evening. Thảo opens the safe of original guarantees.",
          "sub": "Chặng bốn, tối hôm ấy. Thảo mở két giữ bản gốc bảo lãnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Advance guarantee: it shrinks as the advance is recovered, and must be extended if not recovered.",
          "sub": "Bảo lãnh tạm ứng: giảm dần theo mức đã thu hồi, phải gia hạn nếu chưa thu hồi hết.",
          "keys": [
            "giảm dần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Performance guarantee: a set percentage, to handover or beyond. Then warranty guarantee, to the defects period end.",
          "sub": "Bảo lãnh thực hiện: [ ]% giá, tới bàn giao hoặc [ ] ngày sau. Rồi bảo lãnh bảo hành tới hết thời hạn bảo đảm khiếm khuyết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Best on demand and unconditional: the bank pays when called.",
          "sub": "Tốt nhất: trả ngay khi yêu cầu, không huỷ ngang, vô điều kiện. Đòi là ngân hàng trả."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A spare tyre, useful only if still valid and the original kept right.",
          "sub": "Bánh xe dự phòng: chỉ có ích khi còn hiệu lực và bản gốc được giữ đúng.",
          "keys": [
            "còn hiệu lực"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Luật đặt sẵn 2%–10% cho mọi hợp đồng",
        "right": "Chỉ đầu tư công, PPP; vốn tư nhân tự thoả thuận",
        "wrongIllus": "balance-scale",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Myth: the law fixes two to ten percent for all.",
          "sub": "Hiểu lầm: luật đặt sẵn 2%–10% cho mọi hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only public and PPP projects. Private ones negotiate.",
          "sub": "Chỉ đầu tư công, PPP. Tư nhân: hai bên thoả thuận.",
          "keys": [
            "hai bên thoả thuận"
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-13",
            "t": "text",
            "text": "NĐ 210 Điều 13: công, PPP",
            "x": 60,
            "y": 1700,
            "size": 38,
            "at": "l1:thirteen"
          },
          {
            "id": "f-83",
            "t": "text",
            "text": "Luật Điều 83: không ghi tỷ lệ",
            "x": 60,
            "y": 1760,
            "size": 38,
            "at": "l1:eighty",
            "color": "muted"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Số của mình: trong hợp đồng",
            "x": 900,
            "y": 1780,
            "size": 40,
            "at": "l2:contract",
            "color": "accent",
            "hl": [
              {
                "text": "trong hợp đồng",
                "at": "l2:contract"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Điều 13 Nghị định 210/2026/NĐ-CP · Điều 83 Luật Xây dựng 135/2025/QH15",
            "x": 60,
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
          "say": "Decree two ten, Article thirteen, holds that range. Construction Law Article eighty three sets no rate.",
          "sub": "Điều 13 Nghị định 210 có khoảng ấy; Điều 83 Luật Xây dựng 2025 cho quyền đòi bảo đảm, không ghi tỷ lệ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the capital type first. The law's number has a scope; yours lives in your contract.",
          "sub": "Xác định loại vốn trước. Con số luật có phạm vi; con số của mình nằm trong hợp đồng.",
          "keys": [
            "nằm trong hợp đồng"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thư nhà thầu · Hai chiều",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "surprised"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "envelope",
                "bank"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1:letter",
            "caption": "Thư nhà thầu · đòi bảo đảm",
            "icon": "envelope"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Nhà thầu → bảo lãnh → CĐT",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l3:both"
          },
          {
            "id": "g-83",
            "t": "text",
            "text": "Điều 83: được đòi bảo đảm trả",
            "x": 2028,
            "y": 1340,
            "size": 42,
            "at": "l3:payment",
            "hl": [
              {
                "text": "bảo đảm trả",
                "at": "l3:security"
              }
            ]
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "trừ đầu tư công",
            "x": 2068,
            "y": 1405,
            "size": 36,
            "at": "l3:except",
            "color": "muted"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "CĐT → LC, bảo lãnh mẹ → NT",
            "x": 2028,
            "y": 1490,
            "size": 46,
            "at": "l4:parent",
            "color": "accent"
          },
          {
            "id": "g-stop",
            "t": "text",
            "text": "Chậm mở LC → tạm ngừng",
            "x": 2028,
            "y": 1580,
            "size": 50,
            "at": "l5:suspend",
            "color": "coral",
            "hl": [
              {
                "text": "tạm ngừng",
                "at": "l5:suspend"
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
          "say": "Stop five: a contractor letter. Now they want security from the owner.",
          "sub": "Chặng năm: thư nhà thầu. Giờ đến lượt họ đòi Chủ đầu tư bảo đảm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Wait, we give security too?",
          "sub": "Ơ, mình cũng phải bảo đảm cho nhà thầu ạ?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Both ways. Article eighty three lets them ask for payment security, except in public investment.",
          "sub": "Hai chiều em ạ. Điều 83 cho nhà thầu đòi chứng minh tài chính, bảo đảm thanh toán, trừ đầu tư công.",
          "face": "happy",
          "keys": [
            "bảo đảm thanh toán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "With deferred payment, we may give a parent guarantee, a mortgage, or a letter of credit.",
          "sub": "Khi nhà thầu cấp vốn trả chậm, mình có thể phải cấp bảo lãnh công ty mẹ, thế chấp, hoặc mở thư tín dụng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Open that letter of credit late, and the contractor may gain a right to suspend.",
          "sub": "Chậm mở thư tín dụng có thể mở quyền tạm ngừng của nhà thầu.",
          "keys": [
            "quyền tạm ngừng"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "text": "⑥ Thuế nằm ở đâu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "ledger",
                "globe-showing-asia-australia"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:tax",
            "caption": "Thuế nào của ai?",
            "icon": "ledger"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Thuế nhà thầu (cả NTNN)",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:contractor"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Thuế chủ đầu tư · ưu đãi",
            "x": 3996,
            "y": 1335,
            "size": 46,
            "at": "l2:incentives"
          },
          {
            "id": "h-on",
            "t": "text",
            "text": "Không rõ offshore → onshore",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l3:onshore",
            "color": "accent",
            "hl": [
              {
                "text": "onshore",
                "at": "l3:onshore"
              }
            ]
          },
          {
            "id": "h-tt",
            "t": "text",
            "text": "TT 103/2014 → TT 20/2026",
            "x": 3996,
            "y": 1520,
            "size": 46,
            "at": "l4:Circular"
          },
          {
            "id": "h-tt2",
            "t": "text",
            "text": "bãi bỏ phần TNDN từ 12/3/2026",
            "x": 4036,
            "y": 1590,
            "size": 38,
            "at": "l4:March",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Kiểm văn bản hiện hành",
            "x": 3996,
            "y": 1690,
            "size": 48,
            "at": "l5:current",
            "color": "coral",
            "hl": [
              {
                "text": "hiện hành",
                "at": "l5:current"
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
          "say": "Stop six: tax. Whose tax is whose?",
          "sub": "Chặng sáu: thuế. Thuế nào của ai?",
          "keys": [
            "Thuế nào của ai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split the contractor's taxes, foreign contractor tax included, from the owner's. Cover incentives, and their withdrawal.",
          "sub": "Hợp đồng cần tách thuế của nhà thầu, gồm thuế nhà thầu nước ngoài, với thuế của Chủ đầu tư; cả ưu đãi thuế và hậu quả khi bị thu hồi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Split offshore and onshore? Anything not clearly offshore should fall onshore.",
          "sub": "Tách offshore và onshore? Phần không ghi rõ là offshore thì nên quy về onshore.",
          "keys": [
            "quy về onshore"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "From March twelfth, Circular twenty repealed the income tax part of Circular one oh three.",
          "sub": "Từ 12/3/2026, Thông tư 20/2026 đã bãi bỏ phần thuế TNDN của Thông tư 103/2014."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Check the current text before calculating. Tax rules change faster than spring weather.",
          "sub": "Kiểm văn bản hiện hành trước khi tính; luật thuế đổi nhanh hơn thời tiết tháng Ba.",
          "keys": [
            "Kiểm văn bản hiện hành"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s18",
      "module": "BRK-07",
      "data": {
        "question": "Còn khoản phạt chưa thu, có ký chứng nhận cuối?",
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
          "say": "A penalty still unpaid, and the final certificate on the desk. Sign it?",
          "sub": "Còn khoản phạt chưa thu, chứng nhận cuối đã nằm trên bàn. Ký không?",
          "keys": [
            "Ký không"
          ]
        }
      ],
      "ref": "p23"
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
            "text": "⑦ Phạt · Hoàn thành cuối",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-debt",
            "t": "text",
            "text": "Phạt = nợ đến hạn",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l1:debts",
            "hl": [
              {
                "text": "nợ đến hạn",
                "at": "l1:debts"
              }
            ]
          },
          {
            "id": "i-debt2",
            "t": "text",
            "text": "trừ thanh toán / rút bảo lãnh",
            "x": 6004,
            "y": 1335,
            "size": 36,
            "at": "l1:deducted",
            "color": "muted"
          },
          {
            "id": "i-12",
            "t": "text",
            "text": "Trần 12%: chỉ công, PPP",
            "x": 5964,
            "y": 1410,
            "size": 46,
            "at": "l2:twelve",
            "hl": [
              {
                "text": "12%",
                "at": "l2:twelve"
              }
            ]
          },
          {
            "id": "i-8",
            "t": "text",
            "text": "Tư nhân: rủi ro trần 8%",
            "x": 5964,
            "y": 1490,
            "size": 46,
            "at": "l3:eight",
            "color": "coral",
            "hl": [
              {
                "text": "8%",
                "at": "l3:eight"
              }
            ]
          },
          {
            "id": "i-8b",
            "t": "text",
            "text": "đang đề xuất bãi bỏ",
            "x": 6004,
            "y": 1560,
            "size": 36,
            "at": "l3:repeal",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, years later. Penalties are usually debts due, deducted or drawn from guarantees.",
          "sub": "Chặng bảy, nhiều năm sau. Tiền phạt thường là nợ đến hạn, trừ vào thanh toán hoặc rút bảo lãnh.",
          "keys": [
            "nợ đến hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Construction Law's twelve percent cap covers public investment and PPP only.",
          "sub": "Trần phạt 12% của Luật Xây dựng 2025 chỉ cho dự án đầu tư công, PPP.",
          "keys": [
            "12%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Private projects risk the Commercial Law's eight percent cap, now proposed for repeal.",
          "sub": "Vốn tư nhân có rủi ro bị áp trần 8% của Luật Thương mại, mà trần này đang được đề xuất bãi bỏ."
        }
      ],
      "ref": "p22"
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
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "stop"
                }
              ],
              "props": [
                "scroll",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": "l1:certificate",
            "caption": "Nhiều năm sau · chứng nhận cuối",
            "icon": "scroll"
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "“Mọi nghĩa vụ đã giải quyết”",
            "x": 5964,
            "y": 1650,
            "size": 40,
            "at": "l4:settled",
            "color": "coral",
            "hl": [
              {
                "text": "đã giải quyết",
                "at": "l4:settled"
              }
            ]
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Kiểm nợ trước khi khoá",
            "x": 5964,
            "y": 1730,
            "size": 50,
            "at": "l5:check",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi khoá",
                "at": "l5:lock"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Điều 86 Luật Xây dựng 135/2025/QH15 · Luật Thương mại; dự thảo bỏ trần 8%",
            "x": 5964,
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
          "say": "Then Dũng walks in with the final completion certificate.",
          "sub": "Rồi Dũng bước vào, tay cầm chứng nhận hoàn thành cuối cùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "All done! Sign it and we close the project. The penalty can wait.",
          "sub": "Xong hết rồi! Ký là khép dự án. Khoản phạt tính sau.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Not yet. One performance penalty is still unpaid.",
          "sub": "Chưa đâu. Còn một khoản phạt hiệu suất chưa thu.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right. If the certificate says all obligations are settled, that penalty may count as waived.",
          "sub": "Đúng. Nếu chứng nhận ghi mọi nghĩa vụ đã giải quyết, khoản phạt chưa thu có thể coi như đã từ bỏ.",
          "keys": [
            "đã từ bỏ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Check the exclusion wording, record what is owed. Signing locks the books: check debts before you lock.",
          "sub": "Kiểm câu loại trừ, ghi rõ khoản còn nợ. Ký là khoá sổ: kiểm nợ trước khi khoá.",
          "keys": [
            "kiểm nợ trước khi khoá"
          ]
        }
      ],
      "ref": "p23,p24,p25"
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
            "at": "l3",
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
            "text": "Thứ Sáu · Chỉ mục tiền",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
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
                "card-index",
                "spiral-calendar"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:Back",
            "caption": "Thứ Sáu tuần đầu · cùng bàn",
            "icon": "card-index"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l3:amount",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1247,
            "size": 58,
            "at": "l3:amount+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Khoản tiền + điều khoản",
            "x": 8000,
            "y": 1255,
            "size": 40,
            "at": "l3:amount+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 46,
            "h": 46,
            "at": "l3:milestone",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1322,
            "size": 58,
            "at": "l3:milestone+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Mốc + bằng chứng",
            "x": 8000,
            "y": 1330,
            "size": 40,
            "at": "l3:milestone+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1415,
            "w": 46,
            "h": 46,
            "at": "l3:guarantee",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1397,
            "size": 58,
            "at": "l3:guarantee+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Bảo lãnh, ngân hàng, hạn",
            "x": 8000,
            "y": 1405,
            "size": 40,
            "at": "l3:guarantee+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1490,
            "w": 46,
            "h": 46,
            "at": "l3:notice",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1472,
            "size": 58,
            "at": "l3:notice+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Ngày phải báo trước",
            "x": 8000,
            "y": 1480,
            "size": 40,
            "at": "l3:notice+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1565,
            "w": 46,
            "h": 46,
            "at": "l3:who",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1547,
            "size": 58,
            "at": "l3:who+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Người chịu trách nhiệm",
            "x": 8000,
            "y": 1555,
            "size": 40,
            "at": "l3:who+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Tiền trao… theo giấy”",
            "x": 7932,
            "y": 1630,
            "size": 44,
            "at": "l5:porridge",
            "color": "accent",
            "hl": [
              {
                "text": "theo giấy",
                "at": "l5:paper"
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
          "say": "Back to today: Friday of Thảo's first week, same desk, same Mr. Bình.",
          "sub": "Quay về hiện tại: thứ Sáu tuần đầu của Thảo, vẫn bàn ấy, vẫn Bác Bình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Of a contract's six indexes, the money and security index belongs to finance.",
          "sub": "Trong sáu chỉ mục của một hợp đồng EPC, chỉ mục tiền và bảo đảm giao cho tài chính.",
          "keys": [
            "chỉ mục tiền và bảo đảm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Each row: amount, milestone and evidence, guarantee and expiry, notice date, and who.",
          "sub": "Mỗi dòng: khoản tiền và điều khoản, mốc và bằng chứng, bảo lãnh và hạn, ngày báo trước, người lo.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Good. Every expiry date needs a guard.",
          "sub": "Tốt. Ngày hết hạn phải có người canh.",
          "face": "happy",
          "keys": [
            "có người canh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cash handed, porridge ladled. Thảo hands it over against paper.",
          "sub": "“Tiền trao cháo múc.” Thảo trao tiền theo giấy.",
          "keys": [
            "trao tiền theo giấy"
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
      "ref": "p26,p27,p29"
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
          }
        ],
        "items": [
          {
            "id": "j-s0",
            "t": "text",
            "text": "① Điều + mẫu",
            "x": 7932,
            "y": 1705,
            "size": 32,
            "at": "l1:clause",
            "color": "ink"
          },
          {
            "id": "j-s1",
            "t": "text",
            "text": "② Giá trị, giảm dần",
            "x": 8332,
            "y": 1705,
            "size": 32,
            "at": "l1:value",
            "color": "ink"
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "③ Hạn − [ ] ngày",
            "x": 7932,
            "y": 1760,
            "size": 32,
            "at": "l2:expiry",
            "color": "coral"
          },
          {
            "id": "j-s3",
            "t": "text",
            "text": "④ Người giữ gốc",
            "x": 8332,
            "y": 1760,
            "size": 32,
            "at": "l3:original",
            "color": "ink"
          },
          {
            "id": "j-s4",
            "t": "text",
            "text": "⑤ Sửa đổi: mở lại",
            "x": 7932,
            "y": 1815,
            "size": 32,
            "at": "l3:amendment",
            "color": "ink"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Sample row, advance guarantee: the clause and form, the starting value and how it shrinks.",
          "sub": "Dòng mẫu, bảo lãnh tạm ứng: điều và phụ lục mẫu, giá trị ban đầu, cách giảm dần.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The expiry date, minus some working days: my reminder date.",
          "sub": "Ngày hết hạn, lùi lại [ ] ngày làm việc: ngày nhắc nhà thầu thay hoặc gia hạn.",
          "keys": [
            "ngày nhắc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Who holds the original. Each amendment, reopen the row: price, milestones, guarantees move together.",
          "sub": "Người giữ bản gốc. Mỗi phụ lục sửa đổi, mở lại dòng này: giá, mốc, bảo lãnh thường đổi cùng lúc."
        }
      ],
      "ref": "p28,p30"
    },
    {
      "id": "s23",
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
            "at": "l1:pulls",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:evidence",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:debts",
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
            "x": 4696,
            "y": 640,
            "at": "l1:pulls"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 430,
            "at": "l2:evidence"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6664,
            "y": 1750,
            "at": "l3:debts"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài tham khảo chung; tình huống minh hoạ, không lấy từ hợp đồng hay dự án cụ thể. Việc cụ thể hỏi pháp chế, luật sư; kiểm văn bản hiện hành.",
            "x": 60,
            "y": 735,
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
          "say": "So: draw the timeline first. Every milestone pulls money, guarantees, penalties.",
          "sub": "Tóm lại: vẽ dòng thời gian trước. Mốc nào cũng kéo theo tiền, bảo lãnh, phạt.",
          "keys": [
            "vẽ dòng thời gian trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pay against evidence. The law's numbers have a scope; yours are in the contract.",
          "sub": "Trả theo bằng chứng. Con số luật có phạm vi; con số của mình nằm trong hợp đồng.",
          "keys": [
            "Trả theo bằng chứng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check debts before the final signature, and guard every expiry date.",
          "sub": "Kiểm nợ trước chữ ký cuối, và canh mỗi ngày hết hạn.",
          "keys": [
            "Kiểm nợ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General reference only, not advice on any real contract. Check the current law.",
          "sub": "Bài để tham khảo chung, không phải tư vấn cho hợp đồng cụ thể. Nhớ kiểm văn bản hiện hành.",
          "keys": [
            "tham khảo chung"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p5,p11,p16,p24"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "The contractor sends a payment order with only a factory dispatch letter, what should finance check first?",
        "options": [
          "Pay immediately, because the amount matches the price appendix and delays cause disputes",
          "Check the milestone appendix to see which evidence the contract requires for payment",
          "Ask the contractor to lower the amount, since dispatch letters prove only half the work"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Phụ lục mốc quy định bằng chứng cần có (ví dụ vận đơn). Số tiền khớp phụ lục giá chưa đủ: trả theo bằng chứng, không theo lời báo."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The contractor sends a payment order with only a factory dispatch letter, what should finance check first?",
          "sub": "Nhà thầu gửi lệnh thanh toán chỉ kèm thư báo xuất xưởng, tài chính nên kiểm gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Open the milestone appendix: which evidence does the contract require?",
          "sub": "Mở phụ lục mốc: hợp đồng đòi bằng chứng nào?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Pay against evidence, not against a message.",
          "sub": "Trả theo bằng chứng, không theo lời báo."
        }
      ],
      "ref": "questions[10]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi vẽ dòng thời gian từ ngày ký"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, take the milestone appendix and draw the timeline, from signing to final completion.",
          "sub": "Hôm nay, lấy phụ lục mốc, vẽ dòng thời gian từ ngày ký đến hoàn thành cuối cùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài tổng chuỗi epc-finance) theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-20 (đáp án trước): ba câu hỏi gốc của tài chính → ba chỗ hay vấp. Đét trái + bảng 10 ô theo dòng đời hợp đồng qua mắt Thảo: thứ Hai tuần đầu (Bác Bình: vẽ dòng thời gian trước) → Đét tua nhanh: ① ngày ký, năm cột → ② giá trọn gói, ba cửa, bốn phần → ③ mốc giao thiết bị: Dũng giục trình ký theo thư báo xuất xưởng, “Khoan đã!”, cô Hoa: hợp đồng đòi vận đơn → (BRK-02) ④ két bảo lãnh → (BRK-04 hiểu lầm 2%–10%) → ⑤ thư nhà thầu: bảo đảm hai chiều → ⑥ thuế → (BRK-07) ⑦ phạt + chứng nhận hoàn thành cuối → thứ Sáu tuần đầu, cùng bàn: chỉ mục tiền và bảo đảm (khép vòng “Tiền trao cháo múc” → trao theo giấy). Nhân vật theo w145/_series/epc-finance.md: Thảo, Bác Bình, Dũng, cô Hoa (Sam không xuất hiện bài này). Số/điều chỉ từ bài: Điều 83, 86, 87 Luật Xây dựng 135/2025; Điều 11, 13 NĐ 210/2026; 2%–10%, 12%, 8%; TT 103/2014 → TT 20/2026 từ 12/3/2026; 01/7/2026. Ô trống [ ]% / [ ] ngày giữ nguyên. Câu đố questions[10]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
