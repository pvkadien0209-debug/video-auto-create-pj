// er-spec-precedence--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "er-spec-precedence--w01",
  "unit": {
    "audience": "epc-engineering",
    "slug": "er-spec-precedence",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Yêu cầu của chủ đầu tư và đề xuất kỹ thuật mâu thuẫn thì theo cái nào?",
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-cab",
            "t": "illus",
            "name": "electric-plug",
            "x": 70,
            "y": 110,
            "size": 120,
            "at": "l1:cable"
          },
          {
            "id": "a-p",
            "t": "text",
            "text": "Đề xuất: cáp rẻ hơn",
            "x": 220,
            "y": 120,
            "size": 50,
            "at": "l1:proposal"
          },
          {
            "id": "a-r",
            "t": "text",
            "text": "Yêu cầu CĐT: cáp tốt hơn",
            "x": 220,
            "y": 190,
            "size": 50,
            "at": "l1:requirements",
            "color": "accent"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Đề xuất đã duyệt khi ký → thắng?",
            "x": 70,
            "y": 300,
            "size": 50,
            "at": "l2:approved",
            "hl": [
              {
                "text": "thắng?",
                "at": "l2:wins"
              }
            ]
          },
          {
            "id": "a-ob1",
            "t": "box",
            "x": 70,
            "y": 400,
            "w": 340,
            "h": 110,
            "at": "l3:yes",
            "stroke": 5
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "A · Đúng",
            "x": 110,
            "y": 425,
            "size": 54,
            "at": "l3:yes+200"
          },
          {
            "id": "a-ob2",
            "t": "box",
            "x": 460,
            "y": 400,
            "w": 340,
            "h": 110,
            "at": "l3:no",
            "stroke": 5
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "B · Chưa chắc",
            "x": 490,
            "y": 425,
            "size": 54,
            "at": "l3:no+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One cable. The contractor's proposal names a cheaper type. The Employer's Requirements, a better one.",
          "sub": "Một sợi cáp. Đề xuất của nhà thầu ghi loại rẻ hơn. Yêu cầu của Chủ đầu tư ghi loại tốt hơn.",
          "keys": [
            "Yêu cầu của Chủ đầu tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The proposal was approved when the contract was signed. So it wins?",
          "sub": "Đề xuất đã được chấp thuận khi ký hợp đồng. Vậy nó thắng?",
          "keys": [
            "chấp thuận khi ký"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes, or no? Take a guess.",
          "sub": "Đúng, hay chưa chắc? Đoán thử xem."
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "cau-hoi"
        }
      ],
      "beats": {
        "after": 1500
      },
      "ref": "intro,p11"
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
              "set": "meeting",
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
                  "enter": "pop",
                  "at": "l3",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "electric-plug",
                "page-facing-up"
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
                },
                {
                  "at": "l4",
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
            "at": "l1",
            "caption": "Thứ Hai · phòng họp với nhà thầu",
            "icon": "electric-plug"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Phép vua thua lệ làng”",
            "x": 70,
            "y": 570,
            "size": 58,
            "at": "l5:village",
            "color": "accent",
            "hl": [
              {
                "text": "lệ làng",
                "at": "l5:village"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ lệ của hợp đồng là gì?",
            "x": 70,
            "y": 660,
            "size": 46,
            "at": "l5:contract"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Sam, the EPC contractor's design manager. Polite, and very sure of every paper.",
          "sub": "Đây là Sam, quản lý thiết kế của nhà thầu EPC. Lịch sự, và rất chắc giấy tờ.",
          "keys": [
            "quản lý thiết kế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "My proposal was approved at signing. So we install the cable in the proposal.",
          "sub": "Đề xuất của tôi đã được chấp thuận khi ký. Nên bên tôi lắp loại cáp trong đề xuất.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Across the table, Thảo, engineer on the owner's technical team. Lists ready.",
          "sub": "Bên kia bàn là Thảo, kỹ sư ban kỹ thuật Chủ đầu tư. Danh sách đã sẵn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Hmm. But the Requirements say a better cable. Which document wins?",
          "sub": "Hừm. Nhưng Yêu cầu ghi loại tốt hơn. Tài liệu nào thắng ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Old saying: the king's law yields to village custom. So what is this contract's custom?",
          "sub": "Ông bà nói: “Phép vua thua lệ làng.” Vậy lệ làng của hợp đồng này là gì?",
          "keys": [
            "Phép vua thua lệ làng"
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
      "ref": "intro,p6"
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
            "text": "Vênh nhau: theo cái nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:decide",
            "hl": [
              {
                "text": "theo cái nào",
                "at": "l1:decide"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đề xuất đã duyệt",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l1:not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:approval"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: điều thứ tự ưu tiên",
            "x": 2028,
            "y": 270,
            "size": 58,
            "at": "l2:precedence",
            "color": "accent",
            "hl": [
              {
                "text": "thứ tự ưu tiên",
                "at": "l2:precedence"
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
            "at": "l3:set",
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
            "at": "l3:order",
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
            "at": "l3:highest",
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
            "at": "l3:boundaries",
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
            "at": "l3:editions",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Bộ tài liệu",
            "x": 2048,
            "y": 428,
            "size": 40,
            "at": "l3:set+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Thứ tự",
            "x": 2378,
            "y": 428,
            "size": 40,
            "at": "l3:order+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Cao nhất",
            "x": 2708,
            "y": 428,
            "size": 40,
            "at": "l3:highest+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Ranh giới",
            "x": 3038,
            "y": 428,
            "size": 40,
            "at": "l3:boundaries+200"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ Phiên bản",
            "x": 3368,
            "y": 428,
            "size": 40,
            "at": "l3:editions+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần, 5 chặng",
            "x": 2028,
            "y": 570,
            "size": 56,
            "at": "l3:week",
            "hl": [
              {
                "text": "5 chặng",
                "at": "l3:five"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Đ13, Đ80 Luật Xây dựng 2025 · phân tích mẫu hợp đồng EPC quốc tế (theo bài học)",
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
          "say": "The answer: not necessarily. Approval alone does not decide it.",
          "sub": "Đáp án: chưa chắc. Chỉ riêng việc đã chấp thuận không quyết định được.",
          "keys": [
            "chưa chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The order of precedence clause decides. Requirements should rank above the proposal.",
          "sub": "Điều thứ tự ưu tiên quyết định. Yêu cầu của Chủ đầu tư nên đứng trên đề xuất.",
          "keys": [
            "Điều thứ tự ưu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One week, five stops: the document set, the order, highest wins, boundaries, and editions.",
          "sub": "Một tuần, năm chặng: bộ tài liệu, thứ tự, yêu cầu cao nhất, ranh giới, phiên bản.",
          "keys": [
            "năm chặng"
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
          },
          {
            "at": 150,
            "fit": "C",
            "ms": 900
          },
          {
            "at": "l3",
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
            "text": "① Thứ Hai chiều · Bộ tài liệu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:afternoon"
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
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "books",
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:afternoon",
            "caption": "Thứ Hai chiều · bàn làm việc",
            "icon": "books"
          },
          {
            "id": "c-set",
            "t": "text",
            "text": "Một bộ, không phải một văn bản",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l1:set",
            "hl": [
              {
                "text": "Một bộ",
                "at": "l1:set"
              }
            ]
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "sửa đổi · thân HĐ · Yêu cầu CĐT",
            "x": 3996,
            "y": 230,
            "size": 38,
            "at": "l2:amendments"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "phụ lục khác · đề xuất kỹ thuật",
            "x": 3996,
            "y": 285,
            "size": 38,
            "at": "l2:proposal"
          },
          {
            "id": "c-dx",
            "t": "text",
            "text": "đề xuất: bố trí, sản lượng, điện, phòng cháy, móng",
            "x": 3996,
            "y": 345,
            "size": 28,
            "at": "l2:proposal+400",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-v1",
            "t": "text",
            "text": "Đề xuất thấp hơn Yêu cầu",
            "x": 3996,
            "y": 410,
            "size": 42,
            "at": "l4:lower",
            "color": "coral"
          },
          {
            "id": "c-v2",
            "t": "text",
            "text": "Dẫn sang phụ lục sai tên",
            "x": 3996,
            "y": 465,
            "size": 42,
            "at": "l4:wrong",
            "color": "coral"
          },
          {
            "id": "c-v3",
            "t": "text",
            "text": "Cách đo hiệu suất khác nhau",
            "x": 3996,
            "y": 520,
            "size": 42,
            "at": "l4:measuring",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday afternoon. An EPC contract is not one document, it's a set.",
          "sub": "Thứ Hai chiều. Hợp đồng EPC không phải một văn bản, mà là một bộ.",
          "keys": [
            "một bộ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Amendments, the body, the Employer's Requirements, other appendices, and the contractor's technical proposal.",
          "sub": "Văn bản sửa đổi, thân hợp đồng, Yêu cầu của Chủ đầu tư, các phụ lục khác, và đề xuất kỹ thuật của nhà thầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dozens of appendices, written at different times. No wonder they clash!",
          "sub": "Hàng chục phụ lục, soạn vào những lúc khác nhau. Vênh là phải!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Typical: a proposal lower than the Requirements, a reference to the wrong appendix, different ways of measuring performance.",
          "sub": "Hay gặp: đề xuất thấp hơn Yêu cầu, dẫn sang phụ lục sai tên, cách đo hiệu suất khác phụ lục hiệu suất."
        }
      ],
      "ref": "p1,p2"
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
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-k-c0",
            "t": "box",
            "x": 3996,
            "y": 590,
            "w": 44,
            "h": 44,
            "at": "l2:both",
            "stroke": 5
          },
          {
            "id": "c-k-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 572,
            "size": 56,
            "at": "l2:both+600",
            "color": "accent"
          },
          {
            "id": "c-k-l0",
            "t": "text",
            "text": "Ghi cả hai chỗ",
            "x": 4066,
            "y": 582,
            "size": 36,
            "at": "l2:both+200"
          },
          {
            "id": "c-k-c1",
            "t": "box",
            "x": 3996,
            "y": 650,
            "w": 44,
            "h": 44,
            "at": "l2:higher",
            "stroke": 5
          },
          {
            "id": "c-k-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 632,
            "size": 56,
            "at": "l2:higher+600",
            "color": "accent"
          },
          {
            "id": "c-k-l1",
            "t": "text",
            "text": "Bên nào đòi cao hơn",
            "x": 4066,
            "y": 642,
            "size": 36,
            "at": "l2:higher+200"
          },
          {
            "id": "c-k-c2",
            "t": "box",
            "x": 3996,
            "y": 710,
            "w": 44,
            "h": 44,
            "at": "l2:precedence",
            "stroke": 5
          },
          {
            "id": "c-k-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 692,
            "size": 56,
            "at": "l2:precedence+600",
            "color": "accent"
          },
          {
            "id": "c-k-l2",
            "t": "text",
            "text": "Tra thứ tự ưu tiên",
            "x": 4066,
            "y": 702,
            "size": 36,
            "at": "l2:precedence+200"
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "Báo bằng văn bản",
            "x": 4836,
            "y": 680,
            "size": 44,
            "at": "l3:writing",
            "color": "accent",
            "hl": [
              {
                "text": "văn bản",
                "at": "l3:writing"
              }
            ]
          },
          {
            "id": "c-x",
            "t": "text",
            "text": "Không tự chọn ở hiện trường",
            "x": 4836,
            "y": 735,
            "size": 30,
            "at": "l3:site",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Found one. What do I do first?",
          "sub": "Thấy một chỗ vênh rồi. Em làm gì trước ạ?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Note both places, see which side asks higher and by what measure, then check precedence.",
          "sub": "Ghi lại cả hai chỗ, xem bên nào đòi cao hơn và theo tiêu chí gì, rồi tra thứ tự ưu tiên.",
          "keys": [
            "Ghi lại cả hai chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tell the Employer's Representative and legal in writing. Never pick a side in a site record.",
          "sub": "Báo Đại diện Chủ đầu tư và pháp chế bằng văn bản. Đừng tự chọn một bên trong biên bản hiện trường.",
          "keys": [
            "bằng văn bản"
          ]
        }
      ],
      "ref": "p3"
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
            "at": 150,
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Thứ tự ưu tiên",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "d-o0",
            "t": "text",
            "text": "(i) Văn bản sửa đổi",
            "x": 5964,
            "y": 150,
            "size": 46,
            "at": "l2:amendments"
          },
          {
            "id": "d-o1",
            "t": "text",
            "text": "(ii) Thân hợp đồng",
            "x": 6024,
            "y": 225,
            "size": 46,
            "at": "l2:body"
          },
          {
            "id": "d-o2",
            "t": "text",
            "text": "(iii) Yêu cầu của CĐT",
            "x": 6084,
            "y": 300,
            "size": 46,
            "at": "l3:requirements",
            "color": "accent",
            "hl": [
              {
                "text": "Yêu cầu của CĐT",
                "at": "l3:requirements"
              }
            ]
          },
          {
            "id": "d-o3",
            "t": "text",
            "text": "(iv) Các phụ lục khác",
            "x": 6144,
            "y": 375,
            "size": 46,
            "at": "l3:appendices"
          },
          {
            "id": "d-o4",
            "t": "text",
            "text": "(v) Đề xuất kỹ thuật",
            "x": 6204,
            "y": 450,
            "size": 46,
            "at": "l3:proposal",
            "color": "coral"
          },
          {
            "id": "d-later",
            "t": "text",
            "text": "sửa đổi sau thắng sửa đổi trước",
            "x": 6804,
            "y": 160,
            "size": 36,
            "at": "l2:later",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Câu mẫu thường thấy: “Nếu có sự mơ hồ, khác biệt hoặc không thống nhất…”",
            "x": 5964,
            "y": 540,
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
          "say": "Tuesday. Thảo finds the clause. A typical sample reads like a staircase.",
          "sub": "Thứ Ba. Thảo tìm ra điều ấy. Câu mẫu thường thấy giống một cầu thang."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On top, signed amendments, the later one first. Then the contract body.",
          "sub": "Trên cùng: văn bản sửa đổi do hai bên ký, văn bản sau ưu tiên hơn. Rồi đến thân hợp đồng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the Employer's Requirements, other appendices, and last, the contractor's technical proposal.",
          "sub": "Rồi Yêu cầu của Chủ đầu tư, các phụ lục khác, và cuối cùng là đề xuất kỹ thuật của nhà thầu.",
          "keys": [
            "cuối cùng"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Đề xuất đã chấp thuận khi ký",
        "wrong": "Đã chấp thuận thì cứ làm theo đề xuất",
        "right": "Thắng hay thua do điều thứ tự ưu tiên",
        "wrongIllus": "handshake",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Approved at signing, so just follow it?",
          "sub": "Đã chấp thuận khi ký thì cứ làm theo?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Precedence decides if it wins or loses.",
          "sub": "Không. Thắng hay thua là do thứ tự ưu tiên.",
          "keys": [
            "thứ tự ưu tiên"
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
          },
          {
            "at": "l3",
            "fit": [
              "d-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-up",
            "t": "text",
            "text": "Đề xuất trên → rẻ vẫn đúng",
            "x": 5964,
            "y": 600,
            "size": 40,
            "at": "l1:above",
            "color": "coral"
          },
          {
            "id": "d-dn",
            "t": "text",
            "text": "Đề xuất đứng cuối → bị đè",
            "x": 5964,
            "y": 655,
            "size": 40,
            "at": "l2:last",
            "color": "accent"
          },
          {
            "id": "d-take",
            "t": "text",
            "text": "Đã duyệt ≠ thắng",
            "x": 6804,
            "y": 690,
            "size": 60,
            "at": "l3:approved",
            "color": "accent",
            "hl": [
              {
                "text": "≠ thắng",
                "at": "l3:winning"
              }
            ]
          },
          {
            "id": "d-src2",
            "t": "text",
            "text": "Đ80 Luật XD 2025: không thỏa thuận thứ tự → tiếng Việt ưu tiên",
            "x": 6804,
            "y": 600,
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
          "say": "If the proposal ranks above the Requirements, the contractor can do the cheaper option and still comply.",
          "sub": "Nếu đề xuất đứng trên Yêu cầu, nhà thầu làm phương án rẻ hơn mà vẫn đúng hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If it ranks last, anything lower gets overridden by the Requirements.",
          "sub": "Nếu đề xuất đứng cuối, phần nào thấp hơn sẽ bị Yêu cầu của Chủ đầu tư đè lên.",
          "keys": [
            "đè lên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An approved proposal is not always a winning proposal.",
          "sub": "Đề xuất đã duyệt chưa chắc là đề xuất thắng.",
          "keys": [
            "chưa chắc là đề xuất thắng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And data sheets in English only? Vietnamese prevails without an agreed order, so ask legal.",
          "sub": "Data sheet chỉ có tiếng Anh? Không thỏa thuận thứ tự thì tiếng Việt được ưu tiên: hỏi pháp chế.",
          "keys": [
            "hỏi pháp chế"
          ]
        }
      ],
      "ref": "p6,p7,p8"
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
            "text": "③ Thứ Tư · Cao nhất thắng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "e-r1",
            "t": "text",
            "text": "Cùng áp dụng → đáp ứng tất cả",
            "x": 7932,
            "y": 160,
            "size": 42,
            "at": "l1:all"
          },
          {
            "id": "e-r2",
            "t": "text",
            "text": "Loại trừ nhau → lấy mức cao nhất",
            "x": 7932,
            "y": 225,
            "size": 42,
            "at": "l2:highest",
            "color": "accent",
            "hl": [
              {
                "text": "cao nhất",
                "at": "l2:highest"
              }
            ]
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Cao hơn: tiêu chí? Ai định?",
            "x": 7932,
            "y": 310,
            "size": 40,
            "at": "l3:criterion",
            "color": "coral",
            "hl": [
              {
                "text": "Ai định",
                "at": "l3:decides"
              }
            ]
          },
          {
            "id": "e-fix",
            "t": "text",
            "text": "→ ghi rõ tiêu chí, người định",
            "x": 7932,
            "y": 380,
            "size": 38,
            "at": "l4:state"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Another rule: requirements that apply together must all be met.",
          "sub": "Thứ Tư. Thêm một quy tắc: các yêu cầu cùng áp dụng thì phải đáp ứng tất cả."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If they exclude each other, the highest standard wins, even from a lower ranking document.",
          "sub": "Loại trừ nhau thì lấy mức cao nhất, dù nằm ở tài liệu đứng sau.",
          "keys": [
            "lấy mức cao nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Good for the owner, but disputable: higher by what criterion, and who decides?",
          "sub": "Có lợi cho Chủ đầu tư nhưng dễ cãi: cao hơn theo tiêu chí nào, ai xác định?",
          "keys": [
            "ai xác định"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Contractors fear decided by the owner means highest everything, same price. So state the criteria and the decider.",
          "sub": "Nhà thầu lo câu “do Chủ đầu tư xác định” đẩy mọi chỗ lên mức cao nhất mà giá không đổi. Nên ghi rõ tiêu chí và bên xác định."
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": "a1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "A: không xếp thứ tự",
                "ok": false
              },
              "right": {
                "label": "B: Yêu cầu đứng trên",
                "ok": true
              }
            },
            "at": "l1",
            "caption": "Cùng chuyện loại cáp",
            "icon": "electric-plug"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: tranh luận chữ “cao hơn”",
            "x": 7932,
            "y": 470,
            "size": 42,
            "at": "a2:higher",
            "color": "coral"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: cáp đúng Yêu cầu từ đầu",
            "x": 7932,
            "y": 540,
            "size": 42,
            "at": "b2:requirements",
            "color": "accent"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Viết rõ trước, cãi ít sau",
            "x": 7932,
            "y": 650,
            "size": 48,
            "at": "l5:first",
            "color": "accent",
            "hl": [
              {
                "text": "Viết rõ trước",
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
          "say": "Same cable, two contracts.",
          "sub": "Cùng sợi cáp, hai hợp đồng."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "sam",
          "say": "Your contract doesn't rank the two documents. My cable is fine.",
          "sub": "Hợp đồng không xếp thứ tự hai tài liệu này. Cáp của tôi vẫn ổn.",
          "phase": "a",
          "pose": "explain"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "Then I can only argue the highest standard rule. What does higher mean?",
          "sub": "Vậy em chỉ còn viện dẫn điều yêu cầu cao nhất. Mà “cao hơn” là sao?",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "sam",
          "say": "Requirements rank above my proposal, and we confirmed we checked them.",
          "sub": "Yêu cầu đứng trên đề xuất, và bên tôi đã xác nhận kiểm tra Yêu cầu.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "So the design drawings use the cable in the Requirements. Done.",
          "sub": "Vậy hồ sơ thiết kế dùng cáp đúng Yêu cầu ngay từ đầu. Xong.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Write the order clearly first, and there's less to argue later.",
          "sub": "Thứ tự viết rõ trước, tranh luận về sau ít đi.",
          "keys": [
            "Thứ tự viết rõ trước"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Chính Yêu cầu của CĐT sai thì ai chịu?",
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
          "say": "What if the Requirements themselves are wrong?",
          "sub": "Nếu chính Yêu cầu của Chủ đầu tư sai thì sao?",
          "keys": [
            "Yêu cầu của Chủ đầu tư sai"
          ]
        }
      ],
      "ref": "p13"
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
            "text": "④ Thứ Năm · Yêu cầu sai?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "f-sb",
            "t": "text",
            "text": "Nhà thầu chịu về Yêu cầu CĐT",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l1:responsible",
            "hl": [
              {
                "text": "Nhà thầu chịu",
                "at": "l1:contractor"
              }
            ]
          },
          {
            "id": "f-src1",
            "t": "text",
            "text": "Mẫu EPC chìa khoá trao tay quốc tế, theo các bài phân tích",
            "x": 60,
            "y": 1315,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-as",
            "t": "text",
            "text": "“như thể tự soạn”",
            "x": 60,
            "y": 1370,
            "size": 50,
            "at": "l2:drafted",
            "color": "accent",
            "hl": [
              {
                "text": "tự soạn",
                "at": "l2:drafted"
              }
            ]
          },
          {
            "id": "f-ex",
            "t": "text",
            "text": "Trừ: dữ liệu CĐT nhận trách nhiệm",
            "x": 60,
            "y": 1460,
            "size": 40,
            "at": "l3:exception",
            "color": "coral"
          },
          {
            "id": "f-ex2",
            "t": "text",
            "text": "vd. dữ liệu gió, ranh giới",
            "x": 60,
            "y": 1520,
            "size": 34,
            "at": "l3:wind"
          },
          {
            "id": "f-src2",
            "t": "text",
            "text": "Đ13 Luật XD 2025: địa chất bất thường không lường trước = hoàn cảnh thay đổi cơ bản",
            "x": 60,
            "y": 1585,
            "size": 26,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-law",
            "t": "text",
            "text": "→ luật sư đánh giá từng hợp đồng",
            "x": 60,
            "y": 1625,
            "size": 36,
            "at": "l4:lawyer"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. Analyses of the international turnkey EPC model form say the contractor is responsible for the Requirements, except parts the owner takes on.",
          "sub": "Thứ Năm. Theo các bài phân tích mẫu hợp đồng EPC chìa khoá trao tay quốc tế, nhà thầu chịu trách nhiệm về Yêu cầu của Chủ đầu tư, trừ phần Chủ đầu tư chịu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Power EPC contracts often add: the contractor checked them, sometimes as if it had drafted them.",
          "sub": "Hợp đồng EPC điện hay thêm: nhà thầu bảo đảm đã kiểm tra Yêu cầu, có khi chặt tới mức “như thể tự soạn”.",
          "keys": [
            "như thể tự soạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The usual exception: data the owner accepts responsibility for, like wind data or site boundaries.",
          "sub": "Ngoại lệ hay gặp: dữ liệu Chủ đầu tư nhận trách nhiệm, như dữ liệu gió hay ranh giới công trường."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Article thirteen treats unforeseeable ground conditions as a fundamental change. That needs a lawyer.",
          "sub": "Còn Điều 13 Luật Xây dựng 2025 coi địa chất bất thường không lường trước là hoàn cảnh thay đổi cơ bản: cần luật sư đánh giá.",
          "keys": [
            "hoàn cảnh thay đổi cơ bản"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, Dũng, a young site engineer on Thảo's team, opens a letter from the contractor.",
          "sub": "Lúc đó, Dũng, kỹ sư hiện trường trẻ cùng ban, mở thư của nhà thầu.",
          "keys": [
            "kỹ sư hiện trường trẻ"
          ]
        }
      ],
      "ref": "p13,p14,p15"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · thư nhà thầu",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Khảo sát là của mình, mình trả thêm",
          "why": "Phải tìm ba chỗ trước: câu bảo đảm đã kiểm tra, danh sách dữ liệu CĐT nhận trách nhiệm, điều kiện không lường trước.",
          "rule": "Câu trả lời cuối để pháp chế xem"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Ground differs from our survey, they want a new price. Our survey, so we pay. Okay!",
          "sub": "Địa chất khác khảo sát, nhà thầu đòi đổi giá. Khảo sát của mình thì mình trả. Ok!",
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
          "say": "That survey was given for reference only. Check three places before you answer.",
          "sub": "Khảo sát ấy chỉ ghi “để tham khảo”. Tìm ba chỗ trước khi trả lời.",
          "keys": [
            "để tham khảo"
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
          "say": "The contractor's check warranty, our list of data, the unforeseeable conditions clause. Then legal.",
          "sub": "Câu nhà thầu bảo đảm đã kiểm tra, danh sách dữ liệu mình nhận trách nhiệm, điều kiện không lường trước. Rồi gửi pháp chế.",
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
      "ref": "p16"
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
            "at": "l2",
            "fit": [
              "f-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-ref",
            "t": "text",
            "text": "Không trong danh sách → khó đòi",
            "x": 60,
            "y": 1700,
            "size": 42,
            "at": "l1:list",
            "color": "coral"
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "Tham khảo ≠ cam kết",
            "x": 60,
            "y": 1770,
            "size": 60,
            "at": "l2:committed",
            "color": "accent",
            "hl": [
              {
                "text": "≠ cam kết",
                "at": "l2:committed"
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
          "say": "Reference only, and not on the list? Then a contract claim is hard. The law part, legal decides.",
          "sub": "Chỉ để tham khảo, không trong danh sách thì nhà thầu khó đòi theo hợp đồng; phần luật để pháp chế xem.",
          "keys": [
            "khó đòi theo hợp đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Data for reference is not data committed.",
          "sub": "Dữ liệu để tham khảo khác dữ liệu được cam kết.",
          "keys": [
            "khác dữ liệu được cam kết"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s14",
      "module": "BRK-06",
      "data": {
        "title": "Khoảng trống hay nằm ở ranh giới",
        "items": [
          {
            "illus": "electric-plug",
            "text": "Điểm đấu nối"
          },
          {
            "illus": "high-voltage",
            "text": "Trạm biến áp"
          },
          {
            "illus": "link",
            "text": "Nhà nối cáp"
          },
          {
            "illus": "construction",
            "text": "Đường vào"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Connection point, substation, cable joint house, access road.",
          "sub": "Điểm đấu nối, trạm biến áp, nhà nối cáp, đường vào công trường."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Gaps hide at the boundaries.",
          "sub": "Khoảng trống hay nằm ở ranh giới.",
          "keys": [
            "ranh giới"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "⑤ Thứ Sáu · Ranh giới",
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
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "construction",
                "high-voltage"
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
            "at": "l1:friday",
            "caption": "Thứ Sáu · cạnh trạm biến áp",
            "icon": "construction"
          },
          {
            "id": "g-sc",
            "t": "text",
            "text": "Phạm vi = thân HĐ + Yêu cầu + bảng phân định + loại trừ",
            "x": 2028,
            "y": 1250,
            "size": 28,
            "at": "l1:scope",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-pk",
            "t": "text",
            "text": "Gói thầu ngang hàng → hở phạm vi",
            "x": 2028,
            "y": 1305,
            "size": 40,
            "at": "l3:package",
            "color": "coral",
            "hl": [
              {
                "text": "hở phạm vi",
                "at": "l3:gap"
              }
            ]
          },
          {
            "id": "g-ppa",
            "t": "text",
            "text": "HĐ mua bán điện → vào Yêu cầu",
            "x": 2028,
            "y": 1380,
            "size": 38,
            "at": "l4:purchase",
            "hl": [
              {
                "text": "vào Yêu cầu",
                "at": "l4:requirements"
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
          "say": "Friday, at the substation. Scope lives in the body, the Requirements, the scope split table and the exclusions list.",
          "sub": "Thứ Sáu, cạnh trạm biến áp. Phạm vi nằm ở thân hợp đồng, Yêu cầu, bảng phân định phạm vi và danh mục loại trừ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The substation belongs to another package. So this earthing link is theirs. Or ours?",
          "sub": "Trạm biến áp là gói thầu khác. Vậy đoạn tiếp địa này của họ. Hay của mình?",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "With a parallel package, the risk is a scope gap: nobody does it, both sides blame.",
          "sub": "Có gói thầu ngang hàng thì rủi ro là hở phạm vi: không ai làm, hai bên cùng đổ lỗi.",
          "keys": [
            "hở phạm vi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And duties in the power purchase agreement must flow into the Requirements, so the contractor carries them.",
          "sub": "Nghĩa vụ kỹ thuật trong hợp đồng mua bán điện cũng phải đưa vào Yêu cầu, để nhà thầu gánh đúng phần đó.",
          "keys": [
            "đưa vào Yêu cầu"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "id": "g-k-c0",
            "t": "box",
            "x": 2028,
            "y": 1460,
            "w": 44,
            "h": 44,
            "at": "l1:drawing",
            "stroke": 5
          },
          {
            "id": "g-k-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1442,
            "size": 56,
            "at": "l1:drawing+600",
            "color": "accent"
          },
          {
            "id": "g-k-l0",
            "t": "text",
            "text": "Điểm chia trên bản vẽ",
            "x": 2098,
            "y": 1452,
            "size": 38,
            "at": "l1:drawing+200"
          },
          {
            "id": "g-k-c1",
            "t": "box",
            "x": 2028,
            "y": 1535,
            "w": 44,
            "h": 44,
            "at": "l1:supplies",
            "stroke": 5
          },
          {
            "id": "g-k-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1517,
            "size": 56,
            "at": "l1:supplies+600",
            "color": "accent"
          },
          {
            "id": "g-k-l1",
            "t": "text",
            "text": "Bên cấp, lắp, thử",
            "x": 2098,
            "y": 1527,
            "size": 38,
            "at": "l1:supplies+200"
          },
          {
            "id": "g-k-c2",
            "t": "box",
            "x": 2028,
            "y": 1610,
            "w": 44,
            "h": 44,
            "at": "l2:SCADA",
            "stroke": 5
          },
          {
            "id": "g-k-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1592,
            "size": 56,
            "at": "l2:SCADA+600",
            "color": "accent"
          },
          {
            "id": "g-k-l2",
            "t": "text",
            "text": "Dữ liệu SCADA",
            "x": 2098,
            "y": 1602,
            "size": 38,
            "at": "l2:SCADA+200"
          },
          {
            "id": "g-k-c3",
            "t": "box",
            "x": 2028,
            "y": 1685,
            "w": 44,
            "h": 44,
            "at": "l2:earthing",
            "stroke": 5
          },
          {
            "id": "g-k-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1667,
            "size": 56,
            "at": "l2:earthing+600",
            "color": "accent"
          },
          {
            "id": "g-k-l3",
            "t": "text",
            "text": "Tiếp địa chung, đo kiểm",
            "x": 2098,
            "y": 1677,
            "size": 38,
            "at": "l2:earthing+200"
          },
          {
            "id": "g-k-c4",
            "t": "box",
            "x": 2028,
            "y": 1760,
            "w": 44,
            "h": 44,
            "at": "l2:deadline",
            "stroke": 5
          },
          {
            "id": "g-k-k4",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1742,
            "size": 56,
            "at": "l2:deadline+600",
            "color": "accent"
          },
          {
            "id": "g-k-l4",
            "t": "text",
            "text": "Hạn xong mỗi bên",
            "x": 2098,
            "y": 1752,
            "size": 38,
            "at": "l2:deadline+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Each boundary records: the split point on the drawing, who supplies, installs and tests on each side.",
          "sub": "Mỗi ranh giới nên ghi: điểm chia trên bản vẽ; bên cung cấp, bên lắp, bên thử ở mỗi phía."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "SCADA data exchanged, who owns shared earthing and its tests, and each side's deadline.",
          "sub": "Dữ liệu trao đổi với SCADA; bên chịu tiếp địa chung và đo kiểm; thời điểm mỗi bên xong phần mình.",
          "keys": [
            "thời điểm mỗi bên"
          ]
        }
      ],
      "ref": "p20"
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
            "text": "Thứ Sáu chiều · Rà SCADA",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:boundary"
          },
          {
            "id": "h-sat",
            "t": "illus",
            "name": "satellite-antenna",
            "x": 5436,
            "y": 1120,
            "size": 130,
            "at": "l1:SCADA"
          },
          {
            "id": "h-0",
            "t": "text",
            "text": "① Tìm mục SCADA trong Yêu cầu",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:section"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "② Đối chiếu bảng phạm vi",
            "x": 3996,
            "y": 1345,
            "size": 46,
            "at": "l3:table"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "③ Đối chiếu đề xuất",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l4:proposal"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "④ Ghi bảng, gửi xác nhận",
            "x": 3996,
            "y": 1515,
            "size": 46,
            "at": "l5:record",
            "color": "accent"
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "khác → tra thứ tự ưu tiên",
            "x": 4636,
            "y": 1520,
            "size": 34,
            "at": "l4:differs",
            "color": "coral"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Không ghi tên = việc không ai",
            "x": 3996,
            "y": 1650,
            "size": 50,
            "at": "l6:nobody",
            "color": "accent",
            "hl": [
              {
                "text": "không ai",
                "at": "l6:nobody"
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
          "say": "Friday afternoon. Thảo walks the SCADA boundary in four steps.",
          "sub": "Thứ Sáu chiều. Thảo rà ranh giới SCADA qua bốn bước.",
          "keys": [
            "bốn bước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: find the SCADA interface section in the Requirements.",
          "sub": "Một: tìm mục giao diện SCADA trong Yêu cầu của Chủ đầu tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: check the scope table, who supplies, installs and tests the link.",
          "sub": "Hai: đối chiếu bảng phạm vi xem ai cung cấp, ai lắp, ai thử phần kết nối."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: check the contractor's proposal. Where it differs, check precedence.",
          "sub": "Ba: đối chiếu đề xuất của nhà thầu; chỗ nào ghi khác thì tra thứ tự ưu tiên."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: record it, and get the Employer's Representative to confirm before detailed design approval.",
          "sub": "Bốn: ghi vào bảng, gửi Đại diện Chủ đầu tư xác nhận trước khi duyệt thiết kế chi tiết."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A boundary with no name on it is nobody's job.",
          "sub": "Ranh giới không ghi tên ai thì là việc của không ai.",
          "keys": [
            "việc của không ai"
          ]
        }
      ],
      "ref": "p21,p22"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Sáng thứ Bảy · Phiên bản",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
          },
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "open-book",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:saturday",
            "caption": "Sáng thứ Bảy · ban kỹ thuật",
            "icon": "open-book"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Bản mới nhất hay tại ngày ký?",
            "x": 5964,
            "y": 1250,
            "size": 44,
            "at": "l3:latest",
            "hl": [
              {
                "text": "ngày ký",
                "at": "l3:signing"
              }
            ]
          },
          {
            "id": "i-e1",
            "t": "text",
            "text": "Lỗi 1: dẫn bản hết hiệu lực",
            "x": 5964,
            "y": 1330,
            "size": 40,
            "at": "l4:expired",
            "color": "coral"
          },
          {
            "id": "i-e2",
            "t": "text",
            "text": "Lỗi 2: đóng băng tại ngày ký",
            "x": 5964,
            "y": 1390,
            "size": 40,
            "at": "l4:freezing",
            "color": "coral"
          },
          {
            "id": "i-cl",
            "t": "text",
            "text": "Thông tư mới → thay đổi pháp luật",
            "x": 5964,
            "y": 1470,
            "size": 38,
            "at": "l5:circular",
            "hl": [
              {
                "text": "thay đổi pháp luật",
                "at": "l5:law"
              }
            ]
          },
          {
            "id": "i-cl2",
            "t": "text",
            "text": "nhà thầu đòi tiền, đòi gia hạn",
            "x": 5964,
            "y": 1530,
            "size": 34,
            "at": "l5:time",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday morning. Ms Hoa, head of the technical team, drops by with one question.",
          "sub": "Sáng thứ Bảy. Cô Hoa, trưởng ban kỹ thuật, ghé qua với một câu hỏi.",
          "keys": [
            "trưởng ban kỹ thuật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "These standards. Which edition? Right, tell me!",
          "sub": "Mấy tiêu chuẩn này, phiên bản nào? Rồi, nói cô nghe!",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The clause must say: the latest edition, or the one at signing.",
          "sub": "Điều tiêu chuẩn phải nói rõ: bản mới nhất hay bản tại ngày ký.",
          "keys": [
            "bản tại ngày ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two classic errors: citing an expired standard, or freezing everything at signing.",
          "sub": "Hai lỗi hay gặp: dẫn tiêu chuẩn đã hết hiệu lực, hoặc đóng băng mọi thứ tại ngày ký."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Freeze grid rules, and a new grid circular becomes a change in law. The contractor claims money and time.",
          "sub": "Đóng băng quy chuẩn lưới thì thông tư mới về lưới có thể thành thay đổi pháp luật để nhà thầu đòi tiền, đòi gia hạn.",
          "keys": [
            "thay đổi pháp luật"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p23,p24"
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
            "at": "l2",
            "fit": [
              "i-af",
              "i-af2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-bf",
            "t": "text",
            "text": "Trước: “tuân thủ Phụ lục [ ]”",
            "x": 5964,
            "y": 1610,
            "size": 40,
            "at": "l1:before",
            "color": "muted"
          },
          {
            "id": "i-bfx",
            "t": "strike",
            "over": "i-bf",
            "at": "l1:listed"
          },
          {
            "id": "i-af",
            "t": "text",
            "text": "Sau: tự chọn → phiên bản ngày [ ]",
            "x": 5964,
            "y": 1680,
            "size": 40,
            "at": "l2:edition",
            "color": "accent"
          },
          {
            "id": "i-af2",
            "t": "text",
            "text": "bắt buộc → hiệu lực từng thời điểm",
            "x": 5964,
            "y": 1740,
            "size": 40,
            "at": "l2:mandatory",
            "color": "accent"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "đổi sau ngày [ ] → Điều Thay đổi pháp luật · câu gợi ý, cần pháp chế duyệt",
            "x": 5964,
            "y": 1805,
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
          "say": "Before: the contractor follows the standards listed in the appendix.",
          "sub": "Trước: nhà thầu tuân thủ các tiêu chuẩn liệt kê tại Phụ lục."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: listed standards by the edition in force on a set date; mandatory grid rules as in force at each time.",
          "sub": "Sau: tiêu chuẩn liệt kê theo phiên bản có hiệu lực tại một ngày ghi rõ; quy chuẩn bắt buộc theo hiệu lực từng thời điểm.",
          "keys": [
            "phiên bản có hiệu lực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Later mandatory changes go to the change in law clause. A suggestion only, legal must approve.",
          "sub": "Thay đổi bắt buộc về sau xử lý theo điều Thay đổi pháp luật. Chỉ là gợi ý, cần pháp chế duyệt."
        }
      ],
      "ref": "p25"
    },
    {
      "id": "s20",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Không ghi phiên bản là để cãi",
        "hl": "để cãi",
        "sub": "Tiêu chuẩn không ghi phiên bản là tiêu chuẩn để cãi"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A standard with no edition",
          "sub": "Tiêu chuẩn không ghi phiên bản"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "is a standard to argue about.",
          "sub": "là tiêu chuẩn để cãi.",
          "keys": [
            "để cãi"
          ]
        }
      ],
      "ref": "p26"
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "thumb"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "electric-plug",
                "page-facing-up"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:next",
            "caption": "Thứ Hai tuần sau · cùng phòng họp",
            "icon": "electric-plug"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Yêu cầu (iii) > đề xuất (v)",
            "x": 7942,
            "y": 1260,
            "size": 50,
            "at": "l2:third",
            "color": "accent",
            "hl": [
              {
                "text": "> đề xuất",
                "at": "l2:fifth"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Cáp theo Yêu cầu ✓",
            "x": 7942,
            "y": 1350,
            "size": 50,
            "at": "l3:cable"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Phép vua thua lệ làng…",
            "x": 7942,
            "y": 1540,
            "size": 50,
            "at": "l4:king",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…lệ ghi ở thứ tự ưu tiên",
            "x": 7942,
            "y": 1620,
            "size": 50,
            "at": "l4:precedence",
            "color": "accent",
            "hl": [
              {
                "text": "thứ tự ưu tiên",
                "at": "l4:precedence"
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
          "say": "Next Monday. Same room, same cable.",
          "sub": "Thứ Hai tuần sau. Vẫn phòng ấy, vẫn sợi cáp ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Precedence: the Requirements rank third, your proposal fifth. The Requirements win.",
          "sub": "Thứ tự ưu tiên: Yêu cầu đứng thứ ba, đề xuất đứng thứ năm. Yêu cầu thắng ạ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Fair enough. We'll revise the design to the cable in the Requirements.",
          "sub": "Hợp lý. Bên tôi sửa thiết kế theo loại cáp trong Yêu cầu.",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The king's law yields to village custom. In a contract, the custom is written in precedence.",
          "sub": "Phép vua thua lệ làng. Trong hợp đồng, lệ làng viết ở điều thứ tự ưu tiên.",
          "keys": [
            "lệ làng viết ở điều thứ tự ưu tiên"
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
      "ref": "p5,p12"
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
            "at": "l1:precedence",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:boundary",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3:edition",
            "fit": "I",
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
            "x": 7504,
            "y": 20,
            "at": "l1:precedence"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 5536,
            "y": 1290,
            "at": "l2:boundary"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7504,
            "y": 1110,
            "at": "l3:edition"
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
          "say": "So: check precedence first, and put the Requirements above the proposal.",
          "sub": "Tóm lại: tra thứ tự ưu tiên trước, để Yêu cầu của Chủ đầu tư đứng trên đề xuất.",
          "keys": [
            "tra thứ tự ưu tiên trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write every boundary with a name, and highest standard rules with a criterion.",
          "sub": "Ranh giới nào cũng ghi tên bên chịu; điều yêu cầu cao nhất phải có tiêu chí.",
          "keys": [
            "ghi tên bên chịu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And give every standard an edition.",
          "sub": "Và tiêu chuẩn nào cũng ghi phiên bản.",
          "keys": [
            "ghi phiên bản"
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
        "q": "Many people think an approved proposal must always be followed, what is actually true?",
        "options": [
          "It has no legal effect at all once the contract has been signed",
          "It overrides every other document, because approval turns it into the main contract",
          "It is only one contract document, and precedence decides whether it wins"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Khung Hiểu lầm thường gặp giải thích đề xuất đã chấp thuận vẫn chỉ là một tài liệu trong bộ. Nó thắng hay thua do điều thứ tự ưu tiên. Đứng cuối thì phần thấp hơn sẽ bị Yêu cầu của Chủ đầu tư đè lên."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Many people think an approved proposal must always be followed, what is actually true?",
          "sub": "Nhiều người nghĩ đề xuất đã duyệt thì luôn phải làm theo, thực tế ra sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "An approved proposal is one document in the set. Precedence decides if it wins.",
          "sub": "Đề xuất đã duyệt chỉ là một tài liệu trong bộ; thắng hay thua do thứ tự ưu tiên."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[10]"
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
          "say": "Right now: open your precedence clause, then map one interface boundary.",
          "sub": "Việc làm ngay: mở điều thứ tự ưu tiên, rồi lập bảng ranh giới cho một giao diện.",
          "keys": [
            "lập bảng ranh giới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: does reviewing the design make the owner liable? Now, forty questions below!",
          "sub": "Bài sau: duyệt thiết kế có làm Chủ đầu tư gánh trách nhiệm? Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): “đề xuất đã chấp thuận khi ký → thắng?” hai lựa chọn, lặng 1,5 s, lật ở s02. Dòng thời gian: MỘT TUẦN rà tài liệu trước khi duyệt thiết kế chi tiết (T2 Sam viện dẫn đề xuất, bộ tài liệu p1–p3 → T3 thứ tự ưu tiên p4–p8 → T4 cao nhất thắng + hai cách p9–p12 → T5 Yêu cầu sai ai chịu p13–p15, “Khoan đã!” Dũng định trả thêm vì khảo sát p16–p17 → T6 ranh giới p18–p20, chiều T6 làm mẫu SCADA p21–p22 → sáng T7 phiên bản tiêu chuẩn p23–p26 → T2 sau khép vòng với Sam). Nhân vật (w145/_series/epc-engineering.md): Thảo, Sam, Dũng, cô Hoa. Tục ngữ mở/khép: “Phép vua thua lệ làng” → lệ làng của hợp đồng là điều thứ tự ưu tiên. BRK: 04 (hiểu lầm đề xuất đã duyệt p6), 07 (rehook Yêu cầu sai), 06 (montage ranh giới p18), 02 (tiêu chuẩn để cãi p26). Không tên dự án/công ty/hợp đồng thật; nguồn chỉ từ bài: Đ13, Đ80 LXD 2025, phân tích mẫu hợp đồng EPC quốc tế (không nêu tên tổ chức soạn mẫu); ô trống [ ] giữ nguyên. Câu đố questions[10].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
