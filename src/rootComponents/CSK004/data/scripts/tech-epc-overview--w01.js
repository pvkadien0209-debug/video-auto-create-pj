// tech-epc-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "tech-epc-overview--w01",
  "unit": {
    "audience": "epc-engineering",
    "slug": "tech-epc-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Kỹ sư cần đọc hợp đồng EPC ở đâu để nhận đúng nhà máy đã mua?",
    "series": "Đọc hợp đồng EPC bằng mắt kỹ sư — cho đội kỹ thuật, nhận đúng nhà máy đã mua và ký biên bản không mất quyền"
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
            "fit": [
              "a-pp",
              "a-sig"
            ],
            "move": "cut",
            "zoom": 1.3
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-pp",
            "t": "illus",
            "name": "page-facing-up",
            "x": 70,
            "y": 130,
            "size": 250,
            "at": "l1:sheet"
          },
          {
            "id": "a-bb",
            "t": "text",
            "text": "Biên bản bàn giao",
            "x": 360,
            "y": 140,
            "size": 66,
            "at": "l1:sheet+300"
          },
          {
            "id": "a-sig",
            "t": "text",
            "text": "Chữ ký: …………",
            "x": 360,
            "y": 240,
            "size": 84,
            "at": "l2:signature",
            "color": "coral",
            "hl": [
              {
                "text": "…………",
                "at": "l2:empty"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Một trang, nặng cả nhà máy?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l3:weigh",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One sheet of paper. A handover record for a whole power plant.",
          "sub": "Một tờ giấy. Biên bản bàn giao cả một nhà máy điện.",
          "keys": [
            "Biên bản bàn giao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The signature line is still empty. And empty has consequences too.",
          "sub": "Dòng chữ ký vẫn để trống. Mà để trống cũng có hậu quả.",
          "keys": [
            "để trống"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How can one page weigh as much as a wind farm?",
          "sub": "Sao một trang giấy nặng ngang cả nhà máy điện gió?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "intro,p19"
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
            "at": "l6",
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
              "set": "office",
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
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "high-voltage"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · ban kỹ thuật Chủ đầu tư",
            "icon": "high-voltage"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 70,
            "y": 560,
            "size": 58,
            "at": "l6:elders",
            "color": "accent",
            "hl": [
              {
                "text": "mực đen",
                "at": "l6:elders"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ mực ở thân hợp đồng",
            "x": 70,
            "y": 650,
            "size": 46,
            "at": "l6:body+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Electrical engineer, first week on the owner's technical team for a wind farm.",
          "sub": "Kỹ sư điện, tuần đầu ở ban kỹ thuật Chủ đầu tư một nhà máy điện gió.",
          "keys": [
            "tuần đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I love data sheets. The contract body? That's for the legal team.",
          "sub": "Em mê data sheet. Thân hợp đồng là việc của pháp chế ạ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Ms Hoa, head of the technical team.",
          "sub": "Còn đây là cô Hoa, trưởng ban kỹ thuật.",
          "keys": [
            "trưởng ban kỹ thuật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Every technical signature links to a clause about money and risk!",
          "sub": "Chữ ký kỹ thuật nào cũng nối với điều khoản về tiền và rủi ro nha!",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Black ink on white paper, as elders say. And much of that ink sits in the contract body.",
          "sub": "Ông bà dặn: “Giấy trắng mực đen.” Mà phần lớn mực ấy nằm ở thân hợp đồng.",
          "keys": [
            "Giấy trắng mực đen"
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
            "text": "Kỹ sư đọc ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:contract",
            "hl": [
              {
                "text": "ở đâu",
                "at": "l1:contract"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chỉ phụ lục",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:only",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:enough"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: thứ tự ưu tiên trước",
            "x": 2028,
            "y": 270,
            "size": 56,
            "at": "l3:first",
            "color": "accent",
            "hl": [
              {
                "text": "thứ tự ưu tiên",
                "at": "l3:precedence"
              }
            ]
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:buy",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2358,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:appendices",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2688,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:review",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 3018,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:tests",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 3348,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:milestones",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Mua gì",
            "x": 2053,
            "y": 425,
            "size": 46,
            "at": "l4:buy+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Phụ lục",
            "x": 2383,
            "y": 425,
            "size": 46,
            "at": "l4:appendices+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Duyệt",
            "x": 2713,
            "y": 425,
            "size": 46,
            "at": "l4:review+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Thử",
            "x": 3043,
            "y": 425,
            "size": 46,
            "at": "l4:tests+200"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ Mốc",
            "x": 3373,
            "y": 425,
            "size": 46,
            "at": "l4:milestones+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần, 5 chặng",
            "x": 2028,
            "y": 570,
            "size": 56,
            "at": "l4:week",
            "hl": [
              {
                "text": "5 chặng",
                "at": "l4:five"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: NĐ 210/2026/NĐ-CP · Luật Xây dựng 2025 · Luật Điện lực 2024 (theo bài học)",
            "x": 2028,
            "y": 700,
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
          "say": "So where should an engineer read an EPC contract, to receive the plant that was paid for?",
          "sub": "Vậy kỹ sư đọc hợp đồng EPC ở đâu để nhận đúng nhà máy đã mua?",
          "keys": [
            "nhận đúng nhà máy đã mua"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not only the appendices. That's not enough.",
          "sub": "Không phải chỉ đọc phụ lục. Thế chưa đủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, the Employer's Requirements and the order of precedence clause.",
          "sub": "Trước hết: Yêu cầu của Chủ đầu tư và điều thứ tự ưu tiên.",
          "keys": [
            "điều thứ tự ưu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then what you buy, appendices, review, tests, milestones. One week, five stops.",
          "sub": "Rồi: mua gì, phụ lục, duyệt, thử nghiệm, các mốc. Một tuần, năm chặng.",
          "keys": [
            "năm chặng"
          ]
        }
      ],
      "ref": "intro,p24"
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
            "text": "① Thứ Hai · Mua cái gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "books"
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
                }
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai · nhận bộ hợp đồng",
            "icon": "books"
          },
          {
            "id": "c-epc",
            "t": "text",
            "text": "E · P · C",
            "x": 3996,
            "y": 160,
            "size": 80,
            "at": "l3:engineering",
            "color": "accent"
          },
          {
            "id": "c-epc2",
            "t": "text",
            "text": "thiết kế · mua sắm · thi công",
            "x": 3996,
            "y": 260,
            "size": 44,
            "at": "l3:construction"
          },
          {
            "id": "c-kq",
            "t": "text",
            "text": "Mua kết quả: nhà máy chạy",
            "x": 3996,
            "y": 340,
            "size": 50,
            "at": "l4:result",
            "hl": [
              {
                "text": "kết quả",
                "at": "l4:result"
              }
            ]
          },
          {
            "id": "c-src1",
            "t": "text",
            "text": "NĐ 210/2026: thiết kế → … → chạy thử,",
            "x": 3996,
            "y": 420,
            "size": 26,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-src2",
            "t": "text",
            "text": "nghiệm thu, bàn giao",
            "x": 3996,
            "y": 455,
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
          "who": "det",
          "say": "Monday. Ms Hoa drops the contract set on Thảo's desk. Thud.",
          "sub": "Thứ Hai. Cô Hoa đặt bộ hợp đồng lên bàn Thảo. Huỵch.",
          "keys": [
            "bộ hợp đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "All this is one contract? It's thicker than my thesis!",
          "sub": "Tất cả là một hợp đồng ạ? Dày hơn luận văn của em!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "EPC: engineering, procurement and construction.",
          "sub": "EPC: thiết kế, mua sắm và thi công.",
          "keys": [
            "thiết kế, mua sắm và thi công"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The owner buys a result, a working plant. Decree two ten: from design all the way to testing and handover.",
          "sub": "Chủ đầu tư mua một kết quả là nhà máy chạy được. Nghị định 210/2026: từ thiết kế đến chạy thử, nghiệm thu, bàn giao.",
          "keys": [
            "một kết quả"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-3",
            "t": "text",
            "text": "Nhà máy điện: 3 nét riêng",
            "x": 3996,
            "y": 520,
            "size": 50,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 nét riêng",
                "at": "l1:features"
              }
            ]
          },
          {
            "id": "c-31",
            "t": "text",
            "text": "• COD ↔ doanh thu",
            "x": 3996,
            "y": 590,
            "size": 42,
            "at": "l2:revenue"
          },
          {
            "id": "c-32",
            "t": "text",
            "text": "• Lưới: bên thứ ba",
            "x": 3996,
            "y": 645,
            "size": 42,
            "at": "l2:grid",
            "color": "coral"
          },
          {
            "id": "c-33",
            "t": "text",
            "text": "• Hiệu suất: đo theo tiêu chuẩn",
            "x": 3996,
            "y": 700,
            "size": 42,
            "at": "l3:measured"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A power plant has three special features, all engineering work.",
          "sub": "Nhà máy điện có ba nét riêng, cả ba là việc của kỹ sư.",
          "keys": [
            "ba nét riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Commercial operation tied to revenue. The grid, a third party: the power buyer and the grid operator.",
          "sub": "Mốc vận hành thương mại gắn với doanh thu. Lưới điện là bên thứ ba: Bên mua điện, Đơn vị vận hành lưới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And guaranteed performance, measured by the stated standards.",
          "sub": "Và hiệu suất cam kết, đo bằng tiêu chuẩn đã ghi."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Thân hợp đồng là việc của ai?",
        "wrong": "Phụ lục của kỹ sư, thân hợp đồng của pháp chế",
        "right": "Phụ lục nói đo gì, thân hợp đồng nói ký xong thì sao",
        "wrongIllus": "books",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Appendix for engineers, body for lawyers?",
          "sub": "Phụ lục của kỹ sư, thân hợp đồng của pháp chế?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. The body says what happens after you sign.",
          "sub": "Không. Thân hợp đồng nói ký xong thì sao.",
          "keys": [
            "ký xong thì sao"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "at": "l1",
            "fit": [
              "c-who"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-who",
            "t": "text",
            "text": "Ai ký · im bao lâu · ai trả?",
            "x": 4836,
            "y": 690,
            "size": 40,
            "at": "l1:issues",
            "color": "coral",
            "hl": [
              {
                "text": "im bao lâu",
                "at": "l1:silence"
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
          "say": "Who issues the certificate, how long silence means acceptance, who pays on failure.",
          "sub": "Ai phát chứng nhận, im lặng bao lâu thì coi như chấp nhận, không đạt thì ai chịu chi phí.",
          "keys": [
            "im lặng bao lâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Right numbers but wrong procedure? The record can still prove acceptance.",
          "sub": "Biên bản đúng thông số mà sai thủ tục vẫn có thể thành bằng chứng chấp nhận.",
          "keys": [
            "bằng chứng chấp nhận"
          ]
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Phụ lục",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "bookmark-tabs",
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · bàn làm việc",
            "icon": "bookmark-tabs"
          },
          {
            "id": "d-er",
            "t": "text",
            "text": "Yêu cầu CĐT = phụ lục gốc",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:root",
            "color": "accent",
            "hl": [
              {
                "text": "phụ lục gốc",
                "at": "l2:root"
              }
            ]
          },
          {
            "id": "d-er2",
            "t": "text",
            "text": "phạm vi · giao diện · thiết kế · thử nghiệm · đào tạo",
            "x": 5964,
            "y": 230,
            "size": 28,
            "at": "l2:scope",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 310,
            "w": 44,
            "h": 44,
            "at": "l3:scope",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 292,
            "size": 56,
            "at": "l3:scope+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Phạm vi: ai làm, duyệt",
            "x": 6034,
            "y": 302,
            "size": 40,
            "at": "l3:scope+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 390,
            "w": 44,
            "h": 44,
            "at": "l3:data",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 372,
            "size": 56,
            "at": "l3:data+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Data sheet, tiêu chuẩn",
            "x": 6034,
            "y": 382,
            "size": 40,
            "at": "l3:data+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 470,
            "w": 44,
            "h": 44,
            "at": "l3:tests",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 452,
            "size": 56,
            "at": "l3:tests+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Thử nghiệm, hiệu suất",
            "x": 6034,
            "y": 462,
            "size": 40,
            "at": "l3:tests+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 550,
            "w": 44,
            "h": 44,
            "at": "l3:certificate",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 532,
            "size": 56,
            "at": "l3:certificate+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Mẫu chứng nhận mốc",
            "x": 6034,
            "y": 542,
            "size": 40,
            "at": "l3:certificate+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday. Thảo opens the appendices, her home ground.",
          "sub": "Thứ Ba. Thảo mở các phụ lục, sân nhà của cô.",
          "keys": [
            "sân nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Employer's Requirements are the root: scope, interfaces like earthing, foundations, SCADA, plus design and tests.",
          "sub": "Yêu cầu của Chủ đầu tư là phụ lục gốc: phạm vi, giao diện như tiếp địa, móng, SCADA, rồi thiết kế, thử nghiệm.",
          "keys": [
            "phụ lục gốc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the scope table, data sheets and standards, tests and performance, and the certificate forms.",
          "sub": "Rồi bảng phạm vi, data sheet và tiêu chuẩn, thử nghiệm và hiệu suất, mẫu chứng nhận các mốc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And each one plugs into a clause in the body?",
          "sub": "Mỗi phụ lục cắm vào một điều của thân hợp đồng ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Know which clause each appendix links to.",
          "sub": "Đúng. Phải biết mỗi phụ lục nối với điều nào.",
          "keys": [
            "nối với điều nào"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-v1",
            "t": "text",
            "text": "“Chưa xác định” ở thông số chính",
            "x": 5964,
            "y": 640,
            "size": 36,
            "at": "l2:undetermined",
            "color": "coral",
            "hl": [
              {
                "text": "Chưa xác định",
                "at": "l2:undetermined"
              }
            ]
          },
          {
            "id": "d-win",
            "t": "text",
            "text": "Vênh → thứ tự ưu tiên",
            "x": 6804,
            "y": 685,
            "size": 46,
            "at": "l3:precedence",
            "color": "accent",
            "hl": [
              {
                "text": "thứ tự ưu tiên",
                "at": "l3:precedence"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Đ80 Luật XD 2025: không thỏa thuận thứ tự → tiếng Việt ưu tiên",
            "x": 6804,
            "y": 742,
            "size": 24,
            "at": "l4:Vietnamese",
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
          "say": "Wait. This data sheet says to be determined, on a key value!",
          "sub": "Ơ. Data sheet này ghi “chưa xác định”, ngay thông số quan trọng!",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Classic. Values left undetermined, outdated standards, or a commissioning time different from the body.",
          "sub": "Kinh điển: thông số “chưa xác định”, tiêu chuẩn đã bị thay, thời gian chạy thử khác thân hợp đồng.",
          "keys": [
            "chưa xác định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When two documents disagree, the order of precedence clause decides.",
          "sub": "Hai tài liệu nói khác nhau thì điều thứ tự ưu tiên quyết định.",
          "keys": [
            "điều thứ tự ưu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Language too: with no agreed order, Vietnamese prevails. Reading English? Ask legal which version wins.",
          "sub": "Ngôn ngữ cũng thế: không thỏa thuận thứ tự thì tiếng Việt được ưu tiên. Quen đọc tiếng Anh? Hỏi pháp chế bản nào thắng.",
          "keys": [
            "tiếng Việt được ưu tiên"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Đã ký duyệt, thiết kế sai thì ai chịu?",
        "illus": "writing-hand"
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
          "say": "You approved the design. If it's wrong, who carries it?",
          "sub": "Đã ký duyệt, thiết kế sai thì ai chịu?",
          "keys": [
            "ai chịu"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Duyệt thiết kế",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "triangular-ruler"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:wednesday",
            "caption": "Thứ Tư · họp với nhà thầu",
            "icon": "triangular-ruler"
          },
          {
            "id": "e-fit",
            "t": "text",
            "text": "Phù hợp mục đích",
            "x": 7932,
            "y": 160,
            "size": 58,
            "at": "l4:fit",
            "color": "accent",
            "hl": [
              {
                "text": "mục đích",
                "at": "l4:purpose"
              }
            ]
          },
          {
            "id": "e-fit2",
            "t": "text",
            "text": "= cam kết kết quả",
            "x": 7932,
            "y": 245,
            "size": 50,
            "at": "l4:result"
          },
          {
            "id": "e-care",
            "t": "text",
            "text": "> kỹ năng, cẩn trọng",
            "x": 7932,
            "y": 320,
            "size": 44,
            "at": "l4:reasonable",
            "color": "muted"
          },
          {
            "id": "e-src1",
            "t": "text",
            "text": "NĐ 210/2026: nhà thầu EPC chịu về tính đầy đủ,",
            "x": 7932,
            "y": 400,
            "size": 24,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-src2",
            "t": "text",
            "text": "đồng bộ của thiết kế, thiết bị, công nghệ",
            "x": 7932,
            "y": 432,
            "size": 24,
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
          "say": "Wednesday. A design review meeting with the contractor.",
          "sub": "Thứ Tư. Họp duyệt thiết kế với nhà thầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Sam, the EPC contractor's design manager. Polite, precise.",
          "sub": "Đây là Sam, quản lý thiết kế của nhà thầu EPC. Lịch sự, chỉn chu.",
          "keys": [
            "quản lý thiết kế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Please sign the approval today, so we can start the foundations.",
          "sub": "Chị ký duyệt giúp hôm nay nhé, để bên tôi làm móng.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In EPC, the contractor usually promises fit for purpose. A result, heavier than reasonable skill and care.",
          "sub": "Trong EPC, nhà thầu thường bảo đảm phù hợp mục đích: cam kết kết quả, nặng hơn kỹ năng và cẩn trọng hợp lý.",
          "keys": [
            "phù hợp mục đích"
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
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "BRK-10",
      "data": {
        "quote": "Việc Chủ đầu tư xem xét, chấp thuận hay không, không miễn trừ bất kỳ nghĩa vụ nào của Nhà thầu",
        "mark": "không miễn trừ",
        "by": "Câu mẫu: xem xét không giảm trách nhiệm",
        "illus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Review or not, approval or not: no relief for the contractor.",
          "sub": "Xem xét hay không, chấp thuận hay không: không miễn trừ nghĩa vụ nhà thầu.",
          "keys": [
            "không miễn trừ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Learn this clause by heart.",
          "sub": "Câu này nên thuộc lòng."
        }
      ],
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-keep",
            "t": "text",
            "text": "Duyệt ≠ gánh rủi ro thiết kế",
            "x": 7932,
            "y": 520,
            "size": 50,
            "at": "l1:signature",
            "hl": [
              {
                "text": "≠ gánh rủi ro",
                "at": "l1:risk"
              }
            ]
          },
          {
            "id": "e-dl",
            "t": "text",
            "text": "Coi chừng: “coi như chấp thuận”",
            "x": 7932,
            "y": 610,
            "size": 46,
            "at": "l2:deemed",
            "color": "coral",
            "hl": [
              {
                "text": "coi như chấp thuận",
                "at": "l2:deemed"
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
          "say": "With it, your approval signature does not pull design risk onto the owner.",
          "sub": "Có câu này, chữ ký duyệt không kéo rủi ro thiết kế về Chủ đầu tư.",
          "keys": [
            "không kéo rủi ro thiết kế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But beware a deemed approval clause. Meet Dũng, a young site engineer on Thảo's team.",
          "sub": "Nhưng coi chừng điều coi như chấp thuận. Đây là Dũng, kỹ sư hiện trường trẻ cùng ban.",
          "keys": [
            "coi như chấp thuận"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Chiều thứ Tư · trước lễ",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Hồ sơ đến dịp lễ, hết lễ mới mở",
          "why": "Hồ sơ coi như được duyệt, nhà thầu làm theo; sai sót thành sự cố ngoài công trường.",
          "rule": "Phân công người trực, gửi ý kiến trước hạn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The installation method arrived right before the holiday. I'll open it after. Okay!",
          "sub": "Hồ sơ biện pháp lắp đặt đến đúng dịp lễ. Hết lễ em mở. Ok!",
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
          "say": "It's deemed approved, they build, an accident follows. They still pay, but the mistake is on site now.",
          "sub": "Hồ sơ coi như được duyệt, nhà thầu làm theo, xảy ra sự cố. Nhà thầu vẫn chịu, nhưng sai sót đã ra công trường.",
          "keys": [
            "coi như được duyệt"
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
          "who": "dung",
          "say": "Someone on duty. Before the deadline we send: not approved, points to clarify.",
          "sub": "Phân công người trực. Trước hạn gửi ý kiến: chưa chấp thuận, cần làm rõ mấy điểm.",
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "e-take",
              "e-take2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l1:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-take",
            "t": "text",
            "text": "Câu miễn trừ giữ quyền,",
            "x": 7932,
            "y": 690,
            "size": 48,
            "at": "l1:keeps",
            "color": "accent",
            "hl": [
              {
                "text": "giữ quyền",
                "at": "l1:rights"
              }
            ]
          },
          {
            "id": "e-take2",
            "t": "text",
            "text": "đúng hạn giữ công trình",
            "x": 8772,
            "y": 690,
            "size": 48,
            "at": "l1:time",
            "color": "accent",
            "hl": [
              {
                "text": "đúng hạn",
                "at": "l1:time"
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
          "say": "So: the no relief clause keeps your rights. Answering on time keeps your plant.",
          "sub": "Rút ra: câu miễn trừ giữ quyền, trả lời đúng hạn giữ công trình.",
          "keys": [
            "trả lời đúng hạn giữ công trình"
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
            "text": "④ Thứ Năm · Thử nghiệm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "factory"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:thursday",
            "caption": "Thứ Năm · họp trực tuyến",
            "icon": "factory"
          },
          {
            "id": "f-ch",
            "t": "text",
            "text": "FAT → xuất xưởng → SAT → chạy thử",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l2:factory",
            "hl": [
              {
                "text": "FAT",
                "at": "l2:factory"
              }
            ]
          },
          {
            "id": "f-fail",
            "t": "text",
            "text": "Không đạt: nhà thầu sửa, thử lại, chịu phí",
            "x": 60,
            "y": 1320,
            "size": 28,
            "at": "l2:pays",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-bad",
            "t": "text",
            "text": "“Vận hành ổn định”",
            "x": 60,
            "y": 1410,
            "size": 52,
            "at": "l4:stable",
            "color": "muted"
          },
          {
            "id": "f-badx",
            "t": "strike",
            "over": "f-bad",
            "at": "l4:measure"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. An online call about factory tests.",
          "sub": "Thứ Năm. Họp trực tuyến về thử nghiệm tại xưởng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Factory tests, release, site tests, commissioning. A fail? The contractor fixes, retests, and pays.",
          "sub": "FAT, xuất xưởng, SAT, rồi chạy thử. Không đạt thì nhà thầu sửa, thử lại và chịu chi phí."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Good news. The cable results were good, so it passed.",
          "sub": "Tin vui: cáp thử cho kết quả tốt, vậy là đạt.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good? Stable? You can't measure those words.",
          "sub": "Tốt? Ổn định? Mấy chữ ấy không đo được.",
          "keys": [
            "không đo được"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "at": "l2",
            "fit": [
              "f-af",
              "f-af2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-bf",
            "t": "text",
            "text": "Trước: “kết quả tốt”",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l1:before",
            "color": "muted"
          },
          {
            "id": "f-bfx",
            "t": "strike",
            "over": "f-bf",
            "at": "l1:good"
          },
          {
            "id": "f-af",
            "t": "text",
            "text": "Sau: thông số · tiêu chuẩn · phiên bản",
            "x": 60,
            "y": 1590,
            "size": 40,
            "at": "l2:after",
            "color": "accent"
          },
          {
            "id": "f-af2",
            "t": "text",
            "text": "[ ] giờ liên tục · ngưỡng · bên độc lập",
            "x": 60,
            "y": 1655,
            "size": 40,
            "at": "l2:independent"
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "Không số, không chữ đạt",
            "x": 60,
            "y": 1760,
            "size": 56,
            "at": "l3:number",
            "color": "accent",
            "hl": [
              {
                "text": "Không số",
                "at": "l3:number"
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
          "say": "Before: the cable passes when results are good.",
          "sub": "Trước: cáp được coi là đạt khi thử nghiệm cho kết quả tốt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: this value, this standard and edition, these hours, this threshold, recorded by an independent tester.",
          "sub": "Sau: thông số này, tiêu chuẩn và phiên bản này, đo liên tục ngần ấy giờ, ngưỡng này, do Bên Thử nghiệm Độc lập ghi nhận.",
          "keys": [
            "Bên Thử nghiệm Độc lập"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No number, no pass. A ruler beats an adjective.",
          "sub": "Không có con số thì không có chữ đạt. Thước đo thắng tính từ.",
          "keys": [
            "Không có con số"
          ]
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s18",
      "module": "BRK-08",
      "data": {
        "title": "Từ lắp xong đến hoàn thành cuối cùng",
        "points": [
          {
            "label": "Lắp đặt",
            "sub": "hoàn thành cơ khí",
            "illus": "hammer-and-wrench"
          },
          {
            "label": "Đóng điện",
            "sub": "chạy thử",
            "illus": "high-voltage"
          },
          {
            "label": "COD",
            "sub": "vận hành thương mại",
            "illus": "electric-plug"
          },
          {
            "label": "Bàn giao",
            "sub": "danh mục tồn",
            "illus": "page-facing-up"
          },
          {
            "label": "Hoàn thành",
            "sub": "cuối cùng",
            "illus": "trophy"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Completion, energization, commercial operation, handover, final completion.",
          "sub": "Hoàn thành cơ khí, đóng điện, vận hành thương mại, bàn giao, hoàn thành cuối cùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Each milestone carries conditions and money.",
          "sub": "Mốc nào cũng có điều kiện và tiền.",
          "keys": [
            "điều kiện và tiền"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Các mốc",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "spiral-calendar",
                "electric-plug"
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
                }
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · bảng tiến độ",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-grid",
            "t": "text",
            "text": "Bán điện ≠ COD ≠ bàn giao",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l3:selling",
            "color": "coral",
            "hl": [
              {
                "text": "≠ COD",
                "at": "l3:commercial"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Đ12 Luật Điện lực 2024: mốc EPC bám mốc đầu tư",
            "x": 2028,
            "y": 1320,
            "size": 24,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-bg",
            "t": "text",
            "text": "Bàn giao = mốc nặng nhất",
            "x": 2028,
            "y": 1390,
            "size": 50,
            "at": "l4:heaviest",
            "color": "accent",
            "hl": [
              {
                "text": "nặng nhất",
                "at": "l4:heaviest"
              }
            ]
          },
          {
            "id": "g-b1",
            "t": "text",
            "text": "• bảo hành bắt đầu",
            "x": 2028,
            "y": 1470,
            "size": 40,
            "at": "l4:warranty"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "• rủi ro sang Chủ đầu tư",
            "x": 2028,
            "y": 1525,
            "size": 40,
            "at": "l4:risk"
          },
          {
            "id": "g-b3",
            "t": "text",
            "text": "• trả bảo lãnh thực hiện",
            "x": 2028,
            "y": 1580,
            "size": 40,
            "at": "l4:bond"
          },
          {
            "id": "g-ck",
            "t": "text",
            "text": "Kiểm từng mục: hoàn công · phụ tùng · tồn",
            "x": 2028,
            "y": 1650,
            "size": 30,
            "at": "l5:item",
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
          "say": "Friday. Ms Hoa walks Thảo through the milestone chart.",
          "sub": "Thứ Sáu. Cô Hoa cùng Thảo xem bảng các mốc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Once we export power to the grid, that's commercial operation, right?",
          "sub": "Phát điện lên lưới là coi như vận hành thương mại rồi, phải không cô?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A good contract says connection or selling power is not, by itself, commercial operation. Article twelve of the Electricity Law fixes project milestones; follow them.",
          "sub": "Hợp đồng tốt ghi rõ: đấu nối, bán điện không tự cấu thành COD. Điều 12 Luật Điện lực 2024 ghi mốc dự án; mốc EPC bám theo.",
          "keys": [
            "không tự cấu thành COD"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And handover is the heaviest: warranty starts, risk passes to the owner, the performance bond is released.",
          "sub": "Bàn giao là mốc nặng nhất: bảo hành bắt đầu, rủi ro sang Chủ đầu tư, bảo lãnh thực hiện được giải tỏa.",
          "keys": [
            "mốc nặng nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So check every item: as-built records, spare parts, special tools, type certificates, the punch list.",
          "sub": "Nên kiểm từng mục: hồ sơ hoàn công, phụ tùng, dụng cụ đặc biệt, chứng nhận kiểu, danh mục tồn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Right. And if I'm away on a trip when the handover request comes?",
          "sub": "Rồi. Mà nếu hồ sơ bàn giao đến lúc cô đi công tác thì sao?",
          "pose": "explain"
        }
      ],
      "ref": "p18,p19"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Nếu không ai trả lời…",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:nobody"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "airport",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "luggage",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:nobody",
            "caption": "Chuyện thường gặp · trưởng ban đi công tác",
            "icon": "airplane"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Quá hạn → “coi như đã cấp”",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l3:deemed",
            "color": "coral",
            "hl": [
              {
                "text": "coi như đã cấp",
                "at": "l3:deemed"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "bảo hành chạy · rủi ro · bảo lãnh",
            "x": 3996,
            "y": 1340,
            "size": 40,
            "at": "l3:warranty"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "2 tháng sau: lỗi cáp",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l4:two",
            "hl": [
              {
                "text": "lỗi cáp",
                "at": "l4:cable"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "→ chỉ còn bảo đảm khiếm khuyết",
            "x": 3996,
            "y": 1510,
            "size": 40,
            "at": "l4:defects",
            "color": "muted"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Im lặng cũng là chữ ký",
            "x": 3996,
            "y": 1710,
            "size": 62,
            "at": "l5:silence",
            "color": "accent",
            "hl": [
              {
                "text": "chữ ký",
                "at": "l5:signature"
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
          "say": "A common story. The handover request arrives while the head of the team is away. Nobody replies.",
          "sub": "Chuyện thường gặp: hồ sơ đề nghị bàn giao đến lúc trưởng ban đi công tác. Không ai trả lời."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "I thought someone else had it!",
          "sub": "Cô tưởng có người lo rồi chứ!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Handover is deemed issued. Warranty runs, risk moves to the owner, the bond goes back.",
          "sub": "Bàn giao coi như đã cấp. Bảo hành chạy, rủi ro sang Chủ đầu tư, bảo lãnh được trả lại.",
          "keys": [
            "coi như đã cấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two months later, a cable fault. Only the defects warranty is left.",
          "sub": "Hai tháng sau phát hiện lỗi cáp. Chủ đầu tư chỉ còn quyền theo bảo đảm khiếm khuyết.",
          "keys": [
            "bảo đảm khiếm khuyết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Moral: silence is also a signature.",
          "sub": "Rút ra: im lặng cũng là một chữ ký.",
          "keys": [
            "im lặng cũng là một chữ ký"
          ]
        }
      ],
      "ref": "p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Chiều thứ Sáu · Hiệu suất",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:performance"
          },
          {
            "id": "i-ix",
            "t": "text",
            "text": "Công suất · độ sẵn sàng · tỷ số",
            "x": 5964,
            "y": 1240,
            "size": 44,
            "at": "l1:curve",
            "hl": [
              {
                "text": "độ sẵn sàng",
                "at": "l1:availability"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "IEC 61400-12-1 (gió) · IEC 61724 (mặt trời) — kiểm phiên bản",
            "x": 5964,
            "y": 1305,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-pay",
            "t": "text",
            "text": "Không đạt: trả theo công thức",
            "x": 5964,
            "y": 1360,
            "size": 44,
            "at": "l2:formula",
            "color": "coral"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Soi 3 chỗ:",
            "x": 5964,
            "y": 1435,
            "size": 46,
            "at": "l3:three"
          },
          {
            "id": "i-31",
            "t": "text",
            "text": "① công thức đủ chưa",
            "x": 5964,
            "y": 1500,
            "size": 40,
            "at": "l3:formula"
          },
          {
            "id": "i-32",
            "t": "text",
            "text": "② mức từ chối nhận",
            "x": 5964,
            "y": 1555,
            "size": 40,
            "at": "l3:refuse",
            "hl": [
              {
                "text": "từ chối nhận",
                "at": "l3:refuse"
              }
            ]
          },
          {
            "id": "i-33",
            "t": "text",
            "text": "③ hạn thông báo thử",
            "x": 5964,
            "y": 1610,
            "size": 40,
            "at": "l3:notice"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday afternoon: performance. Power curve, availability, performance ratio, measured by the appendix method.",
          "sub": "Chiều thứ Sáu: hiệu suất. Đường cong công suất, độ sẵn sàng, tỷ số hiệu suất, đo theo phương pháp trong phụ lục.",
          "keys": [
            "hiệu suất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Miss it? The contractor pays by a formula, up to a cap, and still fixes it.",
          "sub": "Không đạt? Nhà thầu trả tiền theo công thức, có trần, và vẫn phải sửa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check three things: a complete formula, a minimum to refuse the plant, and a notice period long enough to measure.",
          "sub": "Soi ba chỗ: công thức điền đủ chưa, có mức tối thiểu để từ chối nhận nhà máy không, hạn thông báo thử có đủ cho đo không.",
          "keys": [
            "từ chối nhận nhà máy"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s23",
      "module": "BRK-11",
      "data": {
        "title": "Trước khi ký biên bản",
        "items": [
          "Nối với điều nào?",
          "Chứng nhận mốc hay biên bản?",
          "Còn mấy ngày trả lời?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: how many days left to reply?",
          "sub": "Ba: còn mấy ngày để trả lời?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: milestone certificate, or site record?",
          "sub": "Hai: chứng nhận mốc hay biên bản hiện trường?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: which clause does it link to?",
          "sub": "Một: biên bản nối với điều nào?",
          "keys": [
            "nối với điều nào"
          ]
        }
      ],
      "ref": "p25"
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
            "at": "l2",
            "fit": [
              "i-6"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-ck1",
            "t": "text",
            "text": "+ câu không giảm trách nhiệm?",
            "x": 5964,
            "y": 1680,
            "size": 40,
            "at": "l1:relief"
          },
          {
            "id": "i-ck2",
            "t": "text",
            "text": "+ phần chưa đạt ghi rõ?",
            "x": 5964,
            "y": 1735,
            "size": 40,
            "at": "l1:written"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "6 bài: Yêu cầu → … → bàn giao",
            "x": 5964,
            "y": 1795,
            "size": 34,
            "at": "l2:six",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Plus: is there a no relief clause, and is every unmet item written down?",
          "sub": "Thêm: có câu xem xét không giảm trách nhiệm không, phần chưa đạt đã ghi rõ chưa?",
          "keys": [
            "phần chưa đạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Six deep-dive lessons follow this work order, from requirements to handover.",
          "sub": "Sáu bài đào sâu đi đúng thứ tự công việc ấy, từ Yêu cầu của Chủ đầu tư đến bàn giao.",
          "keys": [
            "Sáu bài đào sâu"
          ]
        }
      ],
      "ref": "p24,p25"
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
            "text": "Thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next"
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
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "page-facing-up",
                "black-nib"
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
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:next",
            "caption": "Thứ Hai tuần sau · cùng bàn ấy",
            "icon": "page-facing-up"
          },
          {
            "id": "j-pp",
            "t": "illus",
            "name": "page-facing-up",
            "x": 7942,
            "y": 1250,
            "size": 120,
            "at": "l1:sheet"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "“Ghi nhận tại hiện trường,",
            "x": 8082,
            "y": 1260,
            "size": 40,
            "at": "l2:site"
          },
          {
            "id": "j-n2",
            "t": "text",
            "text": "không cấu thành chấp thuận”",
            "x": 8082,
            "y": 1320,
            "size": 40,
            "at": "l2:approval",
            "color": "accent",
            "hl": [
              {
                "text": "không cấu thành",
                "at": "l2:approval"
              }
            ]
          },
          {
            "id": "j-lg",
            "t": "text",
            "text": "(câu chữ bàn với pháp chế trước)",
            "x": 8082,
            "y": 1380,
            "size": 28,
            "at": "l3:legal",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Giấy trắng mực đen…",
            "x": 7942,
            "y": 1560,
            "size": 52,
            "at": "l4:black",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…đọc cả thân hợp đồng",
            "x": 7942,
            "y": 1640,
            "size": 52,
            "at": "l4:body",
            "color": "accent",
            "hl": [
              {
                "text": "thân hợp đồng",
                "at": "l4:body"
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
          "say": "Next Monday. Same desk, another sheet. A site record this time.",
          "sub": "Thứ Hai tuần sau. Vẫn bàn ấy, lại một tờ giấy: biên bản hiện trường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Not a milestone certificate. So I add: site results only, not approval or handover.",
          "sub": "Không phải chứng nhận mốc, nên em ghi thêm: chỉ ghi nhận kết quả hiện trường, không cấu thành chấp thuận hay Bàn giao.",
          "keys": [
            "không cấu thành chấp thuận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Check the wording with legal first. Right, done!",
          "sub": "Tốt. Câu chữ bàn với pháp chế trước. Rồi, vậy nha!",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Black ink on white paper. This time, she read the body too.",
          "sub": "Giấy trắng mực đen. Lần này, Thảo đọc cả thân hợp đồng.",
          "keys": [
            "đọc cả thân hợp đồng"
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
      "ref": "p26"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:body",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:review",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:silence",
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
            "at": "l1:body"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 20,
            "at": "l2:review"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1110,
            "at": "l3:silence"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào. Việc cụ thể, hỏi pháp chế hoặc luật sư.",
            "x": 7932,
            "y": 1790,
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
          "say": "So: the appendix says what to measure, the body says what happens after you sign.",
          "sub": "Tóm lại: phụ lục nói đo gì, thân hợp đồng nói ký xong thì sao.",
          "keys": [
            "ký xong thì sao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read precedence first, and make sure review gives the contractor no relief.",
          "sub": "Đọc thứ tự ưu tiên trước, và chắc rằng việc duyệt không giảm trách nhiệm nhà thầu.",
          "keys": [
            "Đọc thứ tự ưu tiên trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And watch every deadline. Silence is also a signature.",
          "sub": "Và canh mọi thời hạn. Im lặng cũng là một chữ ký.",
          "keys": [
            "Im lặng cũng là một chữ ký"
          ]
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
        "q": "In the handover story, what happened because nobody replied within the deadline?",
        "options": [
          "The contract ended immediately and both parties returned all payments",
          "The contractor had to restart every test from the beginning at its own cost",
          "Handover was deemed issued, so warranty started, risk moved and the bond was returned"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Hợp đồng có điều bàn giao coi như đã cấp. Vì không ai trả lời, thời hạn bảo hành bắt đầu, rủi ro chuyển sang Chủ đầu tư và bảo lãnh được trả lại. Một khoảng im lặng đã thay cho chữ ký."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the handover story, what happened because nobody replied within the deadline?",
          "sub": "Trong chuyện bàn giao, điều gì xảy ra vì không ai trả lời trong thời hạn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Handover was deemed issued: warranty started, risk passed, the bond went back.",
          "sub": "Bàn giao coi như đã cấp: bảo hành bắt đầu, rủi ro chuyển sang Chủ đầu tư, bảo lãnh được trả lại."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[31]"
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
          "say": "Right now: find the precedence clause and the no relief clause in your contract. Mark them.",
          "sub": "Việc làm ngay: tìm điều thứ tự ưu tiên và câu xem xét không giảm trách nhiệm trong hợp đồng, đánh dấu lại.",
          "keys": [
            "đánh dấu lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: requirements versus proposal, which wins? Now, forty questions below!",
          "sub": "Bài sau: Yêu cầu của Chủ đầu tư và đề xuất kỹ thuật vênh nhau thì theo cái nào? Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận tờ biên bản bàn giao, dòng chữ ký để trống → kéo ra thấy ban kỹ thuật thứ Hai; tờ giấy trở lại ở khép vòng s25 (biên bản hiện trường + câu p26). Dòng thời gian: TUẦN ĐẦU của Thảo ở ban kỹ thuật Chủ đầu tư (T2 EPC mua gì p1–p4 → T3 phụ lục p5–p8 → T4 duyệt thiết kế p9–p12, “Khoan đã!” Dũng để hồ sơ sau lễ p11 → T5 thử nghiệm p13–p16 → T6 các mốc, bàn giao p17–p19, chuyện “coi như đã cấp” p20–p21, chiều T6 hiệu suất p22–p23, checklist + lộ trình p24–p25 → T2 sau khép vòng p26). Nhân vật (w145/_series/epc-engineering.md): Thảo, cô Hoa, Sam (nhà thầu), Dũng. Ca dao mở/khép: “Giấy trắng mực đen”. BRK: 04 (phụ lục/thân HĐ p3), 07 (rehook trước duyệt thiết kế), 10 (câu xem xét không giảm trách nhiệm p10), 08 (chuỗi mốc p17), 11 (checklist trước khi ký p25). Không tên dự án/công ty/hợp đồng thật; số chỉ lấy từ bài: NĐ 210/2026, Đ80 LXD 2025, Đ12 LĐL 2024, IEC 61400-12-1 / 61724, 2 tháng. Câu đố questions[31].",
  "loop": {
    "open": "s01",
    "close": "s25"
  }
};
