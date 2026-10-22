// law-security-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-security-overview--w01",
  "unit": {
    "audience": "law-contract-security",
    "slug": "law-security-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khách hàng nợ lớn: công ty có những cách nào để bảo đảm được trả?",
    "series": "Giữ chắc khoản phải thu — biện pháp bảo đảm và bảo lãnh cho pháp chế doanh nghiệp"
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
            "id": "a-9",
            "t": "text",
            "text": "9",
            "x": 60,
            "y": 60,
            "size": 220,
            "at": "l1:Nine",
            "color": "accent"
          },
          {
            "id": "a-9t",
            "t": "text",
            "text": "biện pháp bảo đảm",
            "x": 230,
            "y": 130,
            "size": 60,
            "at": "l1:ways",
            "hl": [
              {
                "text": "bảo đảm",
                "at": "l1:paid"
              }
            ]
          },
          {
            "id": "a-9s",
            "t": "text",
            "text": "để khoản nợ được trả",
            "x": 230,
            "y": 220,
            "size": 46,
            "at": "l1:debt",
            "color": "muted"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ta tưởng: ký hợp đồng là xong?",
            "x": 60,
            "y": 380,
            "size": 50,
            "at": "l2:signed",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:enough"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "BLDS 2015, Điều 292",
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
          "say": "Nine. The Civil Code gives companies nine ways to make sure a debt gets paid.",
          "sub": "Chín. Bộ luật Dân sự cho doanh nghiệp chín cách để bảo đảm khoản nợ được trả.",
          "keys": [
            "chín cách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet many of us think one signed contract is enough.",
          "sub": "Vậy mà nhiều người vẫn nghĩ: ký một hợp đồng là xong.",
          "keys": [
            "ký một hợp đồng là xong"
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "chart-increasing"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 8:00 · phòng họp",
            "icon": "office-building"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Lấy gì bảo đảm?”",
            "x": 60,
            "y": 480,
            "size": 64,
            "at": "l3:secures",
            "color": "coral",
            "hl": [
              {
                "text": "bảo đảm",
                "at": "l3:secures"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 60,
            "y": 600,
            "size": 54,
            "at": "l5:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l5:careful"
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
          "say": "Meet Thảo, in house counsel at an equipment distributor for four years.",
          "sub": "Đây là Thảo, pháp chế bốn năm ở một công ty phân phối thiết bị.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Cô Hoa, head of legal, Thảo's boss, just back from the board.",
          "sub": "Còn đây là Cô Hoa, trưởng phòng pháp chế, sếp của Thảo, vừa họp Ban giám đốc về."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "The board approved a big credit limit for a new distributor. One question: what secures it?",
          "sub": "Ban giám đốc duyệt hạn mức công nợ lớn cho một nhà phân phối mới. Hỏi một câu thôi: lấy gì bảo đảm?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "First, I need a map. Give me until Friday.",
          "sub": "Thứ nhất, em cần một tấm bản đồ. Cho em đến thứ Sáu ạ.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: better careful than sorry.",
          "sub": "Ông bà dặn: “Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
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
            "text": "Bảo đảm thực sự là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l2:really",
            "hl": [
              {
                "text": "thực sự",
                "at": "l2:really"
              }
            ]
          },
          {
            "id": "b-half",
            "t": "text",
            "text": "Ký xong = mới nửa đường",
            "x": 2028,
            "y": 165,
            "size": 54,
            "at": "l1:half",
            "color": "coral",
            "hl": [
              {
                "text": "nửa đường",
                "at": "l1:half"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: một hợp đồng thần kỳ",
            "x": 2028,
            "y": 255,
            "size": 48,
            "at": "l3:magic",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:chain"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một chuỗi việc",
            "x": 2028,
            "y": 340,
            "size": 60,
            "at": "l3:chain",
            "color": "accent",
            "hl": [
              {
                "text": "một chuỗi việc",
                "at": "l3:chain"
              }
            ]
          },
          {
            "id": "b-ch",
            "t": "text",
            "text": "chọn · soạn · đăng ký · theo dõi",
            "x": 2068,
            "y": 425,
            "size": 44,
            "at": "l3:registration"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But here is the detail that bites. Signing is only half the road.",
          "sub": "Nhưng có một chi tiết hay cắn người: ký xong mới đi được nửa đường.",
          "keys": [
            "nửa đường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So what does securing a debt really mean?",
          "sub": "Vậy bảo đảm khoản nợ thực sự là gì?",
          "keys": [
            "thực sự là gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not one magic contract. A chain: the right tool, the right scope, registration, follow up.",
          "sub": "Không phải một hợp đồng thần kỳ, mà là một chuỗi việc: chọn đúng công cụ, soạn đúng phạm vi, đăng ký, theo dõi.",
          "keys": [
            "một chuỗi việc"
          ]
        }
      ],
      "ref": "outro,p11"
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
            "id": "b-3",
            "t": "text",
            "text": "Tài sản gì · của ai · đăng ký?",
            "x": 2028,
            "y": 500,
            "size": 52,
            "at": "l1:asset",
            "hl": [
              {
                "text": "đăng ký",
                "at": "l1:registered"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+520",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+740",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+960",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+1180",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+1620",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 sáng",
            "x": 2044,
            "y": 632,
            "size": 34,
            "at": "l2:seven stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 chiều",
            "x": 2276,
            "y": 632,
            "size": 34,
            "at": "l2:seven stops+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2508,
            "y": 632,
            "size": 34,
            "at": "l2:seven stops+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2740,
            "y": 632,
            "size": 34,
            "at": "l2:seven stops+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Thứ Năm",
            "x": 2972,
            "y": 632,
            "size": 34,
            "at": "l2:seven stops+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5 tối",
            "x": 3204,
            "y": 632,
            "size": 34,
            "at": "l2:seven stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 3436,
            "y": 632,
            "size": 34,
            "at": "l2:seven stops+1740"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And three questions to ask every time: what asset, whose asset, registered yet?",
          "sub": "Và ba câu hỏi lần nào cũng phải hỏi: tài sản gì, của ai, đăng ký chưa?",
          "keys": [
            "tài sản gì, của ai, đăng ký chưa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's week, in seven stops, until Friday.",
          "sub": "Giờ theo Thảo qua một tuần, bảy chặng, đến buổi trình sáng thứ Sáu.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "p19"
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
            "text": "① Thứ Hai 9:00 · Chín biện pháp",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
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
                "books",
                "page-facing-up"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai 9:00 · bàn Thảo",
            "icon": "books"
          },
          {
            "id": "c-n0",
            "t": "text",
            "text": "1. Cầm cố",
            "x": 3996,
            "y": 170,
            "size": 40,
            "at": "l2:Nine+0"
          },
          {
            "id": "c-n1",
            "t": "text",
            "text": "2. Thế chấp",
            "x": 4276,
            "y": 170,
            "size": 40,
            "at": "l2:Nine+150"
          },
          {
            "id": "c-n2",
            "t": "text",
            "text": "3. Đặt cọc",
            "x": 4556,
            "y": 170,
            "size": 40,
            "at": "l2:Nine+300"
          },
          {
            "id": "c-n3",
            "t": "text",
            "text": "4. Ký cược",
            "x": 3996,
            "y": 250,
            "size": 40,
            "at": "l2:Nine+450"
          },
          {
            "id": "c-n4",
            "t": "text",
            "text": "5. Ký quỹ",
            "x": 4276,
            "y": 250,
            "size": 40,
            "at": "l2:Nine+600"
          },
          {
            "id": "c-n5",
            "t": "text",
            "text": "6. Bảo lưu QSH",
            "x": 4556,
            "y": 250,
            "size": 40,
            "at": "l2:Nine+750"
          },
          {
            "id": "c-n6",
            "t": "text",
            "text": "7. Bảo lãnh",
            "x": 3996,
            "y": 330,
            "size": 40,
            "at": "l2:Nine+900"
          },
          {
            "id": "c-n7",
            "t": "text",
            "text": "8. Tín chấp",
            "x": 4276,
            "y": 330,
            "size": 40,
            "at": "l2:Nine+1050"
          },
          {
            "id": "c-n8",
            "t": "text",
            "text": "9. Cầm giữ",
            "x": 4556,
            "y": 330,
            "size": 40,
            "at": "l2:Nine+1200"
          },
          {
            "id": "c-name",
            "t": "text",
            "text": "Gọi đúng tên → đúng luật áp dụng",
            "x": 3996,
            "y": 430,
            "size": 44,
            "at": "l3:exact name",
            "color": "accent",
            "hl": [
              {
                "text": "Gọi đúng tên",
                "at": "l3:exact name"
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
          "say": "First stop: Monday, nine a.m. Thảo opens Article two ninety two.",
          "sub": "Chặng một: chín giờ sáng thứ Hai. Thảo mở Điều 292."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Pledge, mortgage, deposit, rental deposit, escrow, retention of title, guarantee, trust guarantee, lien. Nine.",
          "sub": "Cầm cố, thế chấp, đặt cọc, ký cược, ký quỹ, bảo lưu quyền sở hữu, bảo lãnh, tín chấp, cầm giữ tài sản. Đủ chín.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each tool brings its own rule book. So call it by its exact name.",
          "sub": "Mỗi biện pháp kèm một bộ quy định riêng. Nên gọi đúng tên, để đúng quy định được áp dụng.",
          "keys": [
            "gọi đúng tên"
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
          }
        ],
        "items": [
          {
            "id": "c-r0",
            "t": "ring",
            "around": [
              "c-n0"
            ],
            "color": "accent",
            "stroke": 6,
            "at": "l1:six+0"
          },
          {
            "id": "c-r1",
            "t": "ring",
            "around": [
              "c-n1"
            ],
            "color": "accent",
            "stroke": 6,
            "at": "l1:six+200"
          },
          {
            "id": "c-r2",
            "t": "ring",
            "around": [
              "c-n2"
            ],
            "color": "accent",
            "stroke": 6,
            "at": "l1:six+400"
          },
          {
            "id": "c-r3",
            "t": "ring",
            "around": [
              "c-n4"
            ],
            "color": "accent",
            "stroke": 6,
            "at": "l1:six+600"
          },
          {
            "id": "c-r4",
            "t": "ring",
            "around": [
              "c-n5"
            ],
            "color": "accent",
            "stroke": 6,
            "at": "l1:six+800"
          },
          {
            "id": "c-r5",
            "t": "ring",
            "around": [
              "c-n6"
            ],
            "color": "accent",
            "stroke": 6,
            "at": "l1:six+1000"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "6 / 9 → trọng tâm chuỗi này",
            "x": 3996,
            "y": 530,
            "size": 52,
            "at": "l1:six",
            "color": "accent",
            "hl": [
              {
                "text": "6 / 9",
                "at": "l1:six"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "3 còn lại: ít dùng hơn",
            "x": 3996,
            "y": 620,
            "size": 42,
            "at": "l2:other three",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "BLDS 2015, Điều 292",
            "x": 4856,
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
          "say": "For trade receivables, six get real use. This series stays with those six.",
          "sub": "Với khoản phải thu từ bán hàng, sáu biện pháp hay được cân nhắc. Chuỗi này đi sâu vào sáu biện pháp đó.",
          "keys": [
            "sáu biện pháp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The other three stay on the list, just narrower between companies.",
          "sub": "Ba biện pháp còn lại vẫn trong danh sách, chỉ có phạm vi dùng hẹp hơn khi bán hàng giữa doanh nghiệp."
        }
      ],
      "ref": "p2"
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
            "text": "② Thứ Hai 14:00 · Phạm vi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "package",
                "delivery-truck"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Hai 14:00 · Dũng ghé",
            "icon": "delivery-truck"
          },
          {
            "id": "d-hot",
            "t": "text",
            "text": "Dũng: “Chốt cho nóng!”",
            "x": 5964,
            "y": 165,
            "size": 50,
            "at": "l2:hot",
            "color": "coral"
          },
          {
            "id": "d-o0",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 180,
            "h": 80,
            "at": "l3:every order+0",
            "stroke": 4
          },
          {
            "id": "d-o1",
            "t": "box",
            "x": 6164,
            "y": 260,
            "w": 180,
            "h": 80,
            "at": "l3:every order+200",
            "stroke": 4
          },
          {
            "id": "d-o2",
            "t": "box",
            "x": 6364,
            "y": 260,
            "w": 180,
            "h": 80,
            "at": "l3:every order+400",
            "stroke": 4
          },
          {
            "id": "d-o3",
            "t": "box",
            "x": 6564,
            "y": 260,
            "w": 180,
            "h": 80,
            "at": "l3:every order+600",
            "stroke": 4
          },
          {
            "id": "d-ot0",
            "t": "text",
            "text": "Đơn 1",
            "x": 5984,
            "y": 272,
            "size": 36,
            "at": "l3:every order+100"
          },
          {
            "id": "d-ot1",
            "t": "text",
            "text": "Đơn 2",
            "x": 6184,
            "y": 272,
            "size": 36,
            "at": "l3:every order+300"
          },
          {
            "id": "d-ot2",
            "t": "text",
            "text": "Đơn 3",
            "x": 6384,
            "y": 272,
            "size": 36,
            "at": "l3:every order+500"
          },
          {
            "id": "d-ot3",
            "t": "text",
            "text": "…",
            "x": 6584,
            "y": 272,
            "size": 36,
            "at": "l3:every order+700"
          },
          {
            "id": "d-fut",
            "t": "text",
            "text": "1 hợp đồng phủ đơn tương lai",
            "x": 5964,
            "y": 380,
            "size": 46,
            "at": "l4:future orders",
            "color": "accent",
            "hl": [
              {
                "text": "đơn tương lai",
                "at": "l4:future orders"
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
          "say": "Second stop: Monday afternoon. In walks Dũng, regional sales director.",
          "sub": "Chặng hai: chiều thứ Hai. Dũng bước vào, giám đốc kinh doanh khu vực.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "His motto: close it while it's hot.",
          "sub": "Khẩu hiệu của Dũng: chốt cho nóng!"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "We ship every week. Do I need a new security paper for every order?",
          "sub": "Tuần nào cũng giao hàng. Mỗi đơn lại phải ký một giấy bảo đảm mới à?",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "No. One contract can cover future orders made during its term, unless we agree otherwise.",
          "sub": "Không cần. Một hợp đồng bảo đảm phủ được các đơn hình thành trong thời hạn bảo đảm, trừ khi thoả thuận khác.",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p3"
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
            "id": "d-sil",
            "t": "text",
            "text": "Im lặng = bảo đảm toàn bộ",
            "x": 5964,
            "y": 470,
            "size": 46,
            "at": "l1:silent",
            "hl": [
              {
                "text": "toàn bộ",
                "at": "l1:whole debt"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "gốc · lãi · phạt · bồi thường",
            "x": 5964,
            "y": 550,
            "size": 50,
            "at": "l2:Principal",
            "color": "accent"
          },
          {
            "id": "d-lau",
            "t": "text",
            "text": "cả nồi lẩu, không chỉ nước dùng",
            "x": 5964,
            "y": 635,
            "size": 42,
            "at": "l2:hotpot",
            "color": "coral",
            "hl": [
              {
                "text": "cả nồi lẩu",
                "at": "l2:hotpot"
              }
            ]
          },
          {
            "id": "d-part",
            "t": "text",
            "text": "Bảo đảm một phần? Ghi rõ.",
            "x": 6824,
            "y": 610,
            "size": 44,
            "at": "l3:Partial"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "BLDS 2015, Điều 293",
            "x": 6824,
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
          "say": "Article two ninety three: if the contract is silent, the whole debt is covered.",
          "sub": "Điều 293: hợp đồng không nói về phạm vi thì coi như bảo đảm toàn bộ nghĩa vụ.",
          "keys": [
            "toàn bộ nghĩa vụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Principal, interest, penalties, damages. The whole hotpot, not just the broth.",
          "sub": "Gốc, lãi, phạt, bồi thường thiệt hại. Cả nồi lẩu, không chỉ nước dùng.",
          "keys": [
            "Cả nồi lẩu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Partial security is fine too. Just write it down.",
          "sub": "Muốn bảo đảm một phần cũng được, miễn ghi rõ."
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
            "text": "③ Thứ Ba · Hai giỏ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-b1",
            "t": "box",
            "x": 7932,
            "y": 150,
            "w": 820,
            "h": 420,
            "at": "l2:Basket one",
            "stroke": 5
          },
          {
            "id": "e-h1",
            "t": "text",
            "text": "Giỏ 1 · Dựa vào TÀI SẢN",
            "x": 7957,
            "y": 165,
            "size": 46,
            "at": "l2:Basket one+200",
            "color": "accent"
          },
          {
            "id": "e-1a",
            "t": "text",
            "text": "Đ309 Cầm cố: giao tài sản",
            "x": 7967,
            "y": 245,
            "size": 40,
            "at": "l2:Pledge",
            "hl": [
              {
                "text": "giao",
                "at": "l2:hand"
              }
            ]
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "Đ317 Thế chấp: không giao",
            "x": 7967,
            "y": 315,
            "size": 40,
            "at": "l2:Mortgage",
            "hl": [
              {
                "text": "không giao",
                "at": "l2:keeps"
              }
            ]
          },
          {
            "id": "e-1c",
            "t": "text",
            "text": "Đặt cọc, ký quỹ: một khoản tiền",
            "x": 7967,
            "y": 385,
            "size": 40,
            "at": "l3:money"
          },
          {
            "id": "e-1d",
            "t": "text",
            "text": "Đ331 Bảo lưu: bán vẫn là chủ",
            "x": 7967,
            "y": 455,
            "size": 38,
            "at": "l3:owner"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 8792,
            "y": 150,
            "w": 760,
            "h": 420,
            "at": "l4:Basket two",
            "stroke": 5
          },
          {
            "id": "e-h2",
            "t": "text",
            "text": "Giỏ 2 · Dựa vào NGƯỜI",
            "x": 8817,
            "y": 165,
            "size": 46,
            "at": "l4:Basket two+200",
            "color": "accent"
          },
          {
            "id": "e-2a",
            "t": "text",
            "text": "Đ335 Bảo lãnh: trả thay",
            "x": 8827,
            "y": 245,
            "size": 40,
            "at": "l4:pay",
            "hl": [
              {
                "text": "trả thay",
                "at": "l4:pay"
              }
            ]
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "khi đến hạn bên nợ không trả",
            "x": 8857,
            "y": 315,
            "size": 36,
            "at": "l4:fails"
          },
          {
            "id": "e-2c",
            "t": "text",
            "text": "Giá trị = khả năng trả",
            "x": 8827,
            "y": 400,
            "size": 44,
            "at": "l5:worth",
            "color": "coral",
            "hl": [
              {
                "text": "khả năng trả",
                "at": "l5:can pay"
              }
            ]
          },
          {
            "id": "e-2d",
            "t": "text",
            "text": "của bên bảo lãnh",
            "x": 8857,
            "y": 465,
            "size": 38,
            "at": "l5:guarantor"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Tuesday. Thảo sorts the tools into two baskets.",
          "sub": "Chặng ba: thứ Ba. Thảo chia các công cụ vào hai giỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Basket one rests on assets. Pledge: you hand the asset over. Mortgage: the owner keeps it.",
          "sub": "Giỏ một dựa vào tài sản. Cầm cố: giao tài sản cho bên nhận. Thế chấp: không giao, chủ vẫn giữ.",
          "keys": [
            "giao tài sản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Deposit and escrow rest on money. Retention of title keeps the seller the owner until paid in full.",
          "sub": "Đặt cọc, ký quỹ dựa vào một khoản tiền. Bảo lưu quyền sở hữu: bên bán vẫn là chủ đến khi được trả đủ.",
          "keys": [
            "bên bán vẫn là chủ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Basket two rests on a person. A guarantor promises to pay if the debtor fails when due.",
          "sub": "Giỏ hai dựa vào người. Bên bảo lãnh cam kết trả thay nếu đến hạn bên nợ không trả.",
          "keys": [
            "trả thay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So a guarantee is worth what the guarantor can pay. Parent company, owner, or bank.",
          "sub": "Nên bảo lãnh đáng giá đúng bằng khả năng trả của bên bảo lãnh: công ty mẹ, chủ doanh nghiệp hay ngân hàng.",
          "keys": [
            "khả năng trả"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s09",
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
            "x": 8872,
            "y": 230,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "worried",
                  "pose": "shrug"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "factory"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Ba · Dũng lo",
            "icon": "factory"
          },
          {
            "id": "e-295",
            "t": "text",
            "text": "Đ295: lớn hơn · bằng · nhỏ hơn",
            "x": 7932,
            "y": 610,
            "size": 44,
            "at": "l3:less",
            "color": "accent",
            "hl": [
              {
                "text": "nhỏ hơn",
                "at": "l3:less"
              }
            ]
          },
          {
            "id": "e-fut",
            "t": "text",
            "text": "Tài sản tương lai: xác định được",
            "x": 7932,
            "y": 690,
            "size": 36,
            "at": "l4:identified",
            "hl": [
              {
                "text": "xác định được",
                "at": "l4:identified"
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
          "say": "Tuesday evening, Dũng drops by, worried.",
          "sub": "Tối thứ Ba, Dũng ghé bàn Thảo, mặt lo lắng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Their machines are worth less than the debt. So the mortgage is invalid, right?",
          "sub": "Máy của khách trị giá thấp hơn khoản nợ. Vậy thế chấp vô hiệu rồi, đúng không?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Article two ninety five: the asset may be worth more, the same, or less.",
          "sub": "Điều 295: tài sản bảo đảm có thể lớn hơn, bằng hoặc nhỏ hơn nghĩa vụ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Even future assets work, described by type, as long as they can be identified.",
          "sub": "Tài sản hình thành trong tương lai cũng được, mô tả chung theo loại, miễn xác định được.",
          "keys": [
            "xác định được"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Tài sản nhỏ hơn khoản nợ",
        "wrong": "Hợp đồng bảo đảm vô hiệu",
        "right": "Vẫn hợp lệ, chỉ chưa đủ an toàn",
        "wrongIllus": "cross-mark",
        "rightIllus": "warning"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Smaller than the debt, so void?",
          "sub": "Nhỏ hơn khoản nợ là vô hiệu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Still valid, just not safe enough.",
          "sub": "Không. Vẫn hợp lệ, chỉ là chưa đủ an toàn.",
          "keys": [
            "chưa đủ an toàn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p6,p7"
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
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · Người thứ ba",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop",
            "hl": [
              {
                "text": "Người thứ ba",
                "at": "l2:who else"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "sad"
                }
              ],
              "props": [
                "hot-beverage",
                "bank"
              ]
            },
            "at": "l1:Uncle",
            "caption": "Trưa thứ Tư · cà phê với Bác Bình",
            "icon": "hot-beverage"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Thảo năm ngoái: kỹ, không đăng ký",
            "x": 60,
            "y": 1260,
            "size": 40,
            "at": "l3:carefully",
            "color": "muted"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Ngân hàng: đăng ký ngay",
            "x": 60,
            "y": 1340,
            "size": 40,
            "at": "l5:registered"
          },
          {
            "id": "f-ar",
            "t": "arrow",
            "from": [
              300,
              1410
            ],
            "to": [
              300,
              1490
            ],
            "at": "l5:collapsed",
            "color": "coral"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "→ ngân hàng được trả trước",
            "x": 60,
            "y": 1510,
            "size": 48,
            "at": "l5:paid first",
            "color": "coral",
            "hl": [
              {
                "text": "trả trước",
                "at": "l5:paid first"
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
          "say": "Fourth stop: Wednesday lunch. Thảo meets Uncle Bình, a veteran lawyer.",
          "sub": "Chặng bốn: trưa thứ Tư. Thảo hẹn Bác Bình, luật sư hành nghề lâu năm.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "A contract binds the two signers. When a customer goes bust, who else is in the queue?",
          "sub": "Hợp đồng chỉ ràng buộc hai bên ký. Khách vỡ nợ thì còn ai xếp hàng nữa?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I learnt that last year. I drafted a mortgage over a customer's machines, very carefully.",
          "sub": "Năm ngoái cháu học bài này rồi. Cháu soạn hợp đồng thế chấp dàn máy của khách, kỹ lắm.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But I never registered it. Then the customer mortgaged the same machines to a bank.",
          "sub": "Nhưng không đăng ký. Rồi khách đem chính dàn máy đó thế chấp cho ngân hàng.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The bank registered at once. When the customer collapsed, the bank was paid first.",
          "sub": "Ngân hàng đăng ký ngay. Khách mất khả năng trả nợ, ngân hàng được trả trước, công ty Thảo đứng sau.",
          "keys": [
            "ngân hàng được trả trước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p8,p10"
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
            "id": "f-297",
            "t": "text",
            "text": "Đ297: đối kháng từ khi đăng ký",
            "x": 60,
            "y": 1610,
            "size": 44,
            "at": "l1:registration",
            "color": "accent",
            "hl": [
              {
                "text": "từ khi đăng ký",
                "at": "l1:registration"
              }
            ]
          },
          {
            "id": "f-297b",
            "t": "text",
            "text": "Không đăng ký: từ khi nắm giữ",
            "x": 60,
            "y": 1680,
            "size": 36,
            "at": "l2:holds",
            "color": "muted"
          },
          {
            "id": "f-308",
            "t": "text",
            "text": "Đ308: ai có trước, trả trước",
            "x": 920,
            "y": 1700,
            "size": 44,
            "at": "l3:queue",
            "hl": [
              {
                "text": "trả trước",
                "at": "l3:paid first"
              }
            ]
          },
          {
            "id": "f-308b",
            "t": "text",
            "text": "có đối kháng > không có",
            "x": 920,
            "y": 1765,
            "size": 40,
            "at": "l3:beats",
            "color": "coral"
          },
          {
            "id": "f-tk",
            "t": "illus",
            "name": "ticket",
            "x": 60,
            "y": 1740,
            "size": 70,
            "at": "l4:ticket"
          },
          {
            "id": "f-tkt",
            "t": "text",
            "text": "bốc số trước, gọi trước",
            "x": 150,
            "y": 1750,
            "size": 40,
            "at": "l4:ticket+200",
            "color": "accent"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "BLDS 2015, Điều 297, 308 · NĐ 99/2022/NĐ-CP, Điều 4",
            "x": 60,
            "y": 1820,
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
          "say": "Article two ninety seven: a security is effective against third parties from registration.",
          "sub": "Điều 297: biện pháp bảo đảm có hiệu lực đối kháng với người thứ ba từ khi đăng ký.",
          "keys": [
            "từ khi đăng ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Without registration, only once the creditor holds or seizes the asset. Then it may follow the asset.",
          "sub": "Không đăng ký thì từ khi bên nhận bảo đảm nắm giữ, chiếm giữ tài sản. Khi đó được truy đòi tài sản.",
          "keys": [
            "truy đòi tài sản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article three oh eight sets the queue: earlier effect, paid first. Effective beats not effective.",
          "sub": "Điều 308 xếp hàng: cùng có hiệu lực đối kháng thì ai xác lập trước, trả trước. Có hiệu lực đối kháng đứng trước bên không có.",
          "keys": [
            "trả trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like a bank counter: take your ticket first, get called first.",
          "sub": "Như quầy giao dịch: ai bốc số trước, được gọi trước.",
          "keys": [
            "bốc số trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And Decree ninety nine of 2022 names mortgage, pledge and retention of title first for registration.",
          "sub": "Nghị định 99/2022, Điều 4, nêu ngay trường hợp đầu: đăng ký thế chấp, cầm cố, bảo lưu quyền sở hữu.",
          "keys": [
            "Nghị định 99/2022"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Sáng thứ Năm · bàn Thảo",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ký xong là xong việc",
          "why": "Hợp đồng chỉ ràng buộc hai bên. Chủ nợ đăng ký sau vẫn đứng trước bên không đăng ký.",
          "rule": "Ký xong, đăng ký mới giữ chỗ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Contract signed this morning. Done! Let's ship the goods.",
          "sub": "Sáng nay ký xong hợp đồng rồi. Xong việc! Giao hàng thôi.",
          "face": "happy",
          "pose": "thumb",
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
          "say": "Signed only binds two people. A bank that registers later still jumps ahead.",
          "sub": "Ký xong chỉ ràng buộc hai bên. Ngân hàng nào đăng ký sau vẫn chen lên trước.",
          "keys": [
            "chen lên trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Signed. So, Thảo, where do we register before we ship?",
          "sub": "Ký xong rồi. Vậy Thảo ơi, đăng ký ở đâu trước khi giao hàng?",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Already on it. File first, ship second.",
          "sub": "Em lo rồi. Nộp hồ sơ đăng ký trước, giao hàng sau.",
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
      "ref": "p10,p11"
    },
    {
      "id": "s14",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Ký xong mới đi nửa đường",
        "hl": "nửa đường",
        "sub": "Đăng ký mới giữ chỗ trước người thứ ba"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Signing is half the road.",
          "sub": "Ký xong mới đi nửa đường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Registration holds your place ahead of third parties.",
          "sub": "Đăng ký mới giữ chỗ trước người thứ ba.",
          "keys": [
            "giữ chỗ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p11"
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
            "text": "⑤ Thứ Năm · Chọn theo khách",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Có gì · ai đứng sau · bán sao",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l2:opening",
            "color": "accent"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Máy móc, kho hàng → thế chấp",
            "x": 2028,
            "y": 1340,
            "size": 42,
            "at": "l3:Machines"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Công ty con → bảo lãnh của mẹ",
            "x": 2028,
            "y": 1410,
            "size": 42,
            "at": "l3:subsidiary"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Khách mới → cọc · quỹ · BL ngân hàng",
            "x": 2028,
            "y": 1480,
            "size": 40,
            "at": "l4:new"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Máy đắt trả chậm → bảo lưu QSH",
            "x": 2028,
            "y": 1550,
            "size": 42,
            "at": "l5:credit",
            "hl": [
              {
                "text": "bảo lưu QSH",
                "at": "l5:retention"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Trước giao kết → đặt cọc (Đ328)",
            "x": 2028,
            "y": 1620,
            "size": 42,
            "at": "l5:signing"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Thursday. No tool is best for every customer.",
          "sub": "Chặng năm: thứ Năm. Không có biện pháp tốt nhất cho mọi khách.",
          "keys": [
            "mọi khách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three opening questions: what assets, who stands behind, one sale or repeat trading?",
          "sub": "Ba câu mở đầu: khách có tài sản gì, ai đứng sau khách, bán một lần hay mua đi bán lại liên tục?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Machines or a warehouse? Think mortgage. A subsidiary of a strong group? A parent guarantee.",
          "sub": "Có máy móc, kho hàng: nghĩ đến thế chấp. Công ty con của tập đoàn mạnh: bảo lãnh của công ty mẹ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A brand new customer? Deposit, escrow, or a bank guarantee.",
          "sub": "Khách mới, chưa có lịch sử giao dịch: đặt cọc, ký quỹ hoặc bảo lãnh ngân hàng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Big machines on credit? Retention of title. Before signing? A deposit, with forfeit and penalty rules.",
          "sub": "Máy đắt bán trả chậm: bảo lưu quyền sở hữu. Trước khi giao kết: đặt cọc, có mất cọc, phạt cọc rõ ràng.",
          "keys": [
            "bảo lưu quyền sở hữu"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "at": "a1",
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
            "module": "SCENE-03",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "pose": "thumb"
                },
                {
                  "id": "thao",
                  "pose": "explain"
                }
              ],
              "left": {
                "label": "Cách A: chỉ bảo lãnh",
                "ok": false
              },
              "right": {
                "label": "Cách B: thêm thế chấp",
                "ok": true
              }
            },
            "at": "l1",
            "caption": "Chiều thứ Năm · hai phương án",
            "icon": "handshake"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: nhanh, dựa vào tài sản chủ",
            "x": 2888,
            "y": 1700,
            "size": 34,
            "at": "l3:fast",
            "color": "coral"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: thêm hồ sơ, ưu tiên rõ",
            "x": 2888,
            "y": 1770,
            "size": 34,
            "at": "l4:paperwork",
            "color": "accent"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Bảo lãnh: người · tài sản: vật",
            "x": 2028,
            "y": 1710,
            "size": 46,
            "at": "l5:people",
            "color": "accent",
            "hl": [
              {
                "text": "tài sản: vật",
                "at": "l5:things"
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
          "say": "Thursday afternoon. Dũng wants to close a new distributor fast. Two options.",
          "sub": "Chiều thứ Năm. Dũng muốn chốt nhanh nhà phân phối mới. Hai phương án."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "The owner signs a personal guarantee. That's it, we ship tomorrow!",
          "sub": "Chủ doanh nghiệp ký bảo lãnh cá nhân. Thế thôi, mai giao hàng!",
          "phase": "a",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Plus a mortgage over their inventory, and we register it.",
          "sub": "Thêm thế chấp hàng tồn kho của họ, và đăng ký.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option A is fast and light, but recovery rests on the owner's private assets.",
          "sub": "Cách A nhanh, ít thủ tục, nhưng thu hồi phụ thuộc hoàn toàn vào tài sản riêng của chủ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Option B adds paperwork, but gives priority over a specific pool of goods.",
          "sub": "Cách B thêm hồ sơ đăng ký, đổi lại có quyền ưu tiên trên một khối tài sản cụ thể."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A guarantee rests on people. Registered assets rest on things.",
          "sub": "Bảo lãnh nhanh nhưng dựa vào người. Tài sản có đăng ký chậm hơn nhưng dựa vào vật.",
          "keys": [
            "dựa vào người",
            "dựa vào vật"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "at": "l2",
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
            "text": "⑥ Thứ Năm tối · Con đường",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
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
                "world-map",
                "spiral-notepad"
              ]
            },
            "at": "l1:night",
            "caption": "Tối thứ Năm · nhà Thảo",
            "icon": "world-map"
          },
          {
            "id": "h-r0",
            "t": "text",
            "text": "Bài 1: Bảo lãnh",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l2:Guarantees",
            "color": "accent"
          },
          {
            "id": "h-r1",
            "t": "text",
            "text": "Bài 2: Cầm cố / thế chấp",
            "x": 3996,
            "y": 1335,
            "size": 42,
            "at": "l2:pledge"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "Bài 3: Cọc, ký quỹ, bảo lưu",
            "x": 3996,
            "y": 1410,
            "size": 42,
            "at": "l3:deposits"
          },
          {
            "id": "h-r3",
            "t": "text",
            "text": "Bài 4: Đăng ký (NĐ 99)",
            "x": 3996,
            "y": 1485,
            "size": 42,
            "at": "l3:registration"
          },
          {
            "id": "h-r4",
            "t": "text",
            "text": "Bài 5: Xử lý tài sản",
            "x": 3996,
            "y": 1560,
            "size": 42,
            "at": "l4:enforcement"
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "thông báo · phương thức · Toà án",
            "x": 4036,
            "y": 1645,
            "size": 36,
            "at": "l4:notice",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Thursday night. Thảo sketches the road ahead, five lessons.",
          "sub": "Chặng sáu: tối thứ Năm. Thảo phác con đường phía trước: năm bài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Guarantees first: scope, order of claims, bank guarantees. Then pledge versus mortgage, with inventory clauses.",
          "sub": "Bài 1: bảo lãnh, phạm vi, thứ tự đòi, bảo lãnh ngân hàng. Bài 2: cầm cố hay thế chấp, điều khoản giám sát hàng tồn kho.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Then deposits, escrow and retention of title. Then registration under Decree ninety nine.",
          "sub": "Bài 3: đặt cọc, ký quỹ, bảo lưu quyền sở hữu. Bài 4: đăng ký theo Nghị định 99/2022, cơ quan, thời hạn, hồ sơ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last, enforcement: the notice, the methods, and the road to court.",
          "sub": "Bài 5: xử lý tài sản bảo đảm, thông báo, phương thức xử lý và đường ra Toà án.",
          "keys": [
            "đường ra Toà án"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s18",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình của chuỗi",
        "points": [
          {
            "label": "Bài 1",
            "sub": "Bảo lãnh",
            "illus": "handshake"
          },
          {
            "label": "Bài 2",
            "sub": "Cầm cố, thế chấp",
            "illus": "factory"
          },
          {
            "label": "Bài 3",
            "sub": "Cọc, ký quỹ",
            "illus": "money-bag"
          },
          {
            "label": "Bài 4",
            "sub": "Đăng ký",
            "illus": "memo"
          },
          {
            "label": "Bài 5",
            "sub": "Xử lý tài sản",
            "illus": "balance-scale"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Guarantees, pledge and mortgage, deposits, registration, enforcement.",
          "sub": "Bảo lãnh, cầm cố và thế chấp, đặt cọc, đăng ký, xử lý tài sản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next stop on the map: guarantees.",
          "sub": "Điểm dừng kế tiếp: bảo lãnh.",
          "keys": [
            "bảo lãnh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p16,p17"
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
          },
          {
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 8:00 · Phiếu 5 dòng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "hot-beverage"
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu 8:00 · bàn Thảo",
            "icon": "clipboard"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 40,
            "h": 40,
            "at": "l2:One",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1244,
            "size": 50,
            "at": "l2:One+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Phải thu tối đa: [ ]",
            "x": 6026,
            "y": 1250,
            "size": 38,
            "at": "l2:One+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1340,
            "w": 40,
            "h": 40,
            "at": "l2:Two",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1324,
            "size": 50,
            "at": "l2:Two+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Tài sản: máy, kho, quyền đòi nợ",
            "x": 6026,
            "y": 1330,
            "size": 38,
            "at": "l2:Two+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 40,
            "h": 40,
            "at": "l3:Three",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1404,
            "size": 50,
            "at": "l3:Three+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Ai đứng sau khách",
            "x": 6026,
            "y": 1410,
            "size": 38,
            "at": "l3:Three+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 40,
            "h": 40,
            "at": "l3:Four",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1484,
            "size": 50,
            "at": "l3:Four+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Biện pháp + phạm vi",
            "x": 6026,
            "y": 1490,
            "size": 38,
            "at": "l3:Four+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1580,
            "w": 40,
            "h": 40,
            "at": "l4:Five",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1564,
            "size": 50,
            "at": "l4:Five+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Sau ký: đăng ký, theo dõi hạn",
            "x": 6026,
            "y": 1570,
            "size": 38,
            "at": "l4:Five+200"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Tài sản gì · của ai · đăng ký?",
            "x": 5964,
            "y": 1690,
            "size": 46,
            "at": "l5:three",
            "color": "accent",
            "hl": [
              {
                "text": "đăng ký",
                "at": "l5:registered"
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
          "say": "Seventh stop: Friday, eight a.m. Thảo's five line form.",
          "sub": "Chặng bảy: tám giờ sáng thứ Sáu. Phiếu năm dòng của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: the maximum receivable. Two: their assets. Machines, stock, receivables, or just reputation.",
          "sub": "Một: khoản phải thu tối đa. Hai: tài sản khách có, máy móc, kho hàng, quyền đòi nợ, hay chỉ có uy tín.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three: who stands behind them. Four: the measure and its scope, interest, penalties, damages.",
          "sub": "Ba: ai đứng sau khách. Bốn: biện pháp và phạm vi, gốc, lãi, phạt, bồi thường."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Five: after signing. Where to register, who holds the asset, who tracks deadlines.",
          "sub": "Năm: việc sau khi ký. Đăng ký ở đâu, ai giữ tài sản, ai theo dõi hạn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every proposal must answer three questions: what asset, whose, registered yet?",
          "sub": "Mỗi đề xuất phải trả lời đủ ba câu: tài sản gì, của ai, đăng ký chưa.",
          "keys": [
            "tài sản gì, của ai, đăng ký chưa"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Sáu 9:00 · Trình Cô Hoa",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
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
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "clipboard",
                "chart-increasing"
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu 9:00 · vẫn phòng họp ấy",
            "icon": "office-building"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "“Lấy gì bảo đảm?”",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l2:secures",
            "color": "coral"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Bảo lãnh của chủ doanh nghiệp",
            "x": 7932,
            "y": 1360,
            "size": 42,
            "at": "l3:guarantee"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "+ thế chấp kho hàng, có đăng ký",
            "x": 7932,
            "y": 1430,
            "size": 42,
            "at": "l3:registered",
            "color": "accent",
            "hl": [
              {
                "text": "có đăng ký",
                "at": "l3:registered"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Phạm vi toàn bộ · theo dõi hạn",
            "x": 7932,
            "y": 1500,
            "size": 42,
            "at": "l3:deadlines"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc… và đăng ký”",
            "x": 7932,
            "y": 1630,
            "size": 54,
            "at": "l5:careful",
            "color": "accent",
            "hl": [
              {
                "text": "đăng ký",
                "at": "l5:registered"
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
          "say": "Friday, nine a.m. Same room, same question.",
          "sub": "Chín giờ sáng thứ Sáu. Vẫn phòng họp ấy, vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, Thảo. What secures it?",
          "sub": "Rồi, Thảo. Lấy gì bảo đảm?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The owner's guarantee, plus a registered mortgage over their stock. Full scope. I track the deadlines.",
          "sub": "Bảo lãnh của chủ doanh nghiệp, cộng thế chấp hàng tồn kho có đăng ký. Phạm vi toàn bộ. Em theo dõi hạn.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right, let's go with that!",
          "sub": "Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Better careful than sorry. Careful, and registered.",
          "sub": "“Cẩn tắc vô áy náy.” Cẩn tắc, và… đăng ký.",
          "keys": [
            "đăng ký"
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
      "ref": "p14,p19"
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
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
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
            "x": 5496,
            "y": 40,
            "at": "l1:nine"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l2:register"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l3:customer"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "f-297"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:register+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 2028,
            "y": 690,
            "size": 28,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note2",
            "t": "text",
            "text": "Quy định có thể thay đổi — kiểm lại với cơ quan/chuyên gia.",
            "x": 2028,
            "y": 732,
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
          "say": "So: nine tools in the Civil Code, six for trade debts. Call each by its name.",
          "sub": "Tóm lại: chín biện pháp trong BLDS, sáu biện pháp cho công nợ bán hàng. Gọi đúng tên.",
          "keys": [
            "Gọi đúng tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sign, then register. Registration holds your place in the queue.",
          "sub": "Ký xong thì đăng ký. Đăng ký mới giữ chỗ trong hàng.",
          "keys": [
            "giữ chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Choose by customer: guarantees rest on people, registered assets on things.",
          "sub": "Chọn theo khách: bảo lãnh dựa vào người, tài sản có đăng ký dựa vào vật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today: fill the five line form for your biggest debtors. Next: guarantees.",
          "sub": "Việc làm ngay: điền phiếu năm dòng cho các khách nợ lớn nhất. Bài sau: bảo lãnh của công ty mẹ hoặc cá nhân.",
          "keys": [
            "Việc làm ngay"
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
      "data": {
        "q": "Your manager says the contract is signed so the job is done, what do you reply?",
        "options": [
          "We still need to register it so that it ranks ahead of third parties",
          "We are done, because any later creditor must respect our private contract",
          "We should wait until the customer defaults and only then decide on filing"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "memo",
        "why": "Phải đăng ký để đứng trước người thứ ba."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your manager says the contract is signed so the job is done, what do you reply?",
          "sub": "Quản lý nói hợp đồng đã ký nên xong việc, bạn trả lời gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "We still need to register it so that it ranks ahead of third parties.",
          "sub": "Ta còn phải đăng ký để đứng trước người thứ ba."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The contract binds only the signers. Registration ranks you ahead of others.",
          "sub": "Hợp đồng chỉ ràng buộc hai bên ký. Đăng ký mới đưa công ty lên trước người khác."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[21]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Bản đồ biện pháp bảo đảm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For learning only, not advice on a specific case. Rules change, so check the latest.",
          "sub": "Bài để tham khảo, không phải tư vấn cho vụ việc cụ thể. Quy định có thể thay đổi, hãy kiểm lại."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "anchor": {
    "type": "number",
    "value": "chín",
    "ref": "p1"
  },
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24: vật neo con số 9 biện pháp (Điều 292, p1) → bối cảnh (Ban giám đốc duyệt hạn mức, Cô Hoa hỏi “Lấy gì bảo đảm?”) → chi tiết “ký xong mới nửa đường” → “Vậy bảo đảm thực sự là gì?” → không phải hợp đồng thần kỳ mà một chuỗi việc → ba câu hỏi. Đét đứng trái + bảng trắng 10 ô theo MỘT TUẦN của Thảo: T2 9:00 chín biện pháp (p1, p2) → T2 14:00 Dũng hỏi phạm vi, đơn tương lai (p3) → T3 hai giỏ tài sản/người (p4, p5), Dũng lo tài sản nhỏ hơn nợ (p6, BRK-04 p7) → T4 cà phê Bác Bình, chuyện Thảo năm ngoái không đăng ký (p10), Điều 297, 308, NĐ 99/2022 (p8, p9) → “Khoan đã!” Dũng “ký xong là xong” (p11) + BRK-02 → T5 chọn theo khách (p12, p13), SCENE-03 hai phương án (p14, p15) → T5 tối lộ trình năm bài (p16, p17) + BRK-08 → T6 8:00 phiếu năm dòng (p18, p19) → T6 9:00 trình Cô Hoa, khép vòng “Cẩn tắc vô áy náy”. Nhân vật: Thảo (chính, đóng vai chị Thu), Dũng (anh Minh), Cô Hoa, Bác Bình. Mọi điều luật lấy từ bài; lưu ý chung #133 ở tóm tắt + END.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
