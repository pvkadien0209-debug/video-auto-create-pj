// design-review-liability--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "design-review-liability--w01",
  "unit": {
    "audience": "epc-engineering",
    "slug": "design-review-liability",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Duyệt thiết kế của nhà thầu có làm chủ đầu tư gánh trách nhiệm thiết kế không?",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "triangular-ruler",
                "black-nib"
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
            "at": "l1",
            "caption": "Thứ Hai · ban kỹ thuật",
            "icon": "triangular-ruler"
          },
          {
            "id": "a-40",
            "t": "text",
            "text": "Mỗi tuần: hàng chục bản vẽ",
            "x": 70,
            "y": 140,
            "size": 50,
            "at": "l2:dozens",
            "hl": [
              {
                "text": "hàng chục",
                "at": "l2:dozens"
              }
            ]
          },
          {
            "id": "a-sig",
            "t": "text",
            "text": "Ký duyệt ✓",
            "x": 70,
            "y": 230,
            "size": 70,
            "at": "l3:signed",
            "color": "accent"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "Nếu thiết kế sai, thì…",
            "x": 70,
            "y": 340,
            "size": 60,
            "at": "l3:wrong",
            "color": "coral",
            "hl": [
              {
                "text": "thì…",
                "at": "l3:then"
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
          "say": "Meet Thảo again, engineer on the owner's technical team.",
          "sub": "Lại là Thảo, kỹ sư ban kỹ thuật Chủ đầu tư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every week, dozens of drawings, calculations and procedures from the contractor land on her desk.",
          "sub": "Mỗi tuần, hàng chục bản vẽ, tính toán, quy trình của nhà thầu đổ về bàn cô.",
          "keys": [
            "hàng chục bản vẽ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I signed the approval. If the design turns out wrong, then the owner…",
          "sub": "Em đã ký duyệt. Nếu thiết kế sai, thì Chủ đầu tư…",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hold that thought.",
          "sub": "Khoan, giữ câu ấy lại đã."
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
            "text": "“Im lặng là vàng”",
            "x": 70,
            "y": 470,
            "size": 60,
            "at": "l1:golden",
            "color": "accent",
            "hl": [
              {
                "text": "là vàng",
                "at": "l1:golden"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ quá hạn: im lặng thành chữ ký?",
            "x": 70,
            "y": 570,
            "size": 44,
            "at": "l2:signature",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "People say silence is golden.",
          "sub": "Người ta bảo: “Im lặng là vàng.”",
          "keys": [
            "Im lặng là vàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In design review, silence past a deadline can turn into a signature.",
          "sub": "Trong duyệt thiết kế, im lặng quá hạn có khi thành… chữ ký.",
          "keys": [
            "thành… chữ ký"
          ]
        }
      ],
      "ref": "intro,p10"
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
            "text": "Duyệt rồi, CĐT có gánh?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:carries",
            "hl": [
              {
                "text": "có gánh",
                "at": "l1:carries"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Thường là không, nếu có:",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:usually"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "• cam kết phù hợp mục đích",
            "x": 2028,
            "y": 235,
            "size": 44,
            "at": "l2:purpose",
            "color": "accent"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "• câu xem xét không giảm trách nhiệm",
            "x": 2028,
            "y": 295,
            "size": 40,
            "at": "l2:relief",
            "color": "accent",
            "hl": [
              {
                "text": "không giảm trách nhiệm",
                "at": "l2:relief"
              }
            ]
          },
          {
            "id": "b-but",
            "t": "text",
            "text": "Nhưng: mặc nhiên, sửa bản đã duyệt",
            "x": 2028,
            "y": 365,
            "size": 40,
            "at": "l3:deemed",
            "color": "coral"
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 450,
            "w": 300,
            "h": 110,
            "at": "l4:purpose",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2358,
            "y": 450,
            "w": 300,
            "h": 110,
            "at": "l4:process",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2688,
            "y": 450,
            "w": 300,
            "h": 110,
            "at": "l4:silence",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 3018,
            "y": 450,
            "w": 300,
            "h": 110,
            "at": "l4:sensitive",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 3348,
            "y": 450,
            "w": 300,
            "h": 110,
            "at": "l4:changes",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Mục đích",
            "x": 2043,
            "y": 478,
            "size": 40,
            "at": "l4:purpose+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Quy trình",
            "x": 2373,
            "y": 478,
            "size": 40,
            "at": "l4:process+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Im lặng",
            "x": 2703,
            "y": 478,
            "size": 40,
            "at": "l4:silence+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Hồ sơ nhạy cảm",
            "x": 3033,
            "y": 478,
            "size": 32,
            "at": "l4:sensitive+200"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ Thay đổi",
            "x": 3363,
            "y": 478,
            "size": 40,
            "at": "l4:changes+200"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: NĐ 210/2026/NĐ-CP · Đ10 Luật Xây dựng 2025 · phân tích mẫu hợp đồng EPC quốc tế (theo bài học)",
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
          "who": "thao",
          "say": "If the design turns out wrong, then the owner carries the liability too?",
          "sub": "Nếu thiết kế sai, thì Chủ đầu tư cũng phải gánh trách nhiệm à?",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usually not, if the contract has a fit for purpose promise and a no relief clause.",
          "sub": "Thường là không, nếu hợp đồng có cam kết phù hợp mục đích và câu xem xét không giảm trách nhiệm.",
          "keys": [
            "Thường là không"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But deemed approval on silence, and asking to change an approved design, can cost the owner its edge.",
          "sub": "Nhưng chấp thuận mặc nhiên khi im lặng, và yêu cầu sửa thiết kế đã duyệt, có thể làm Chủ đầu tư mất lợi thế.",
          "keys": [
            "mất lợi thế"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five stops this week: purpose, process, silence, sensitive files, and changes.",
          "sub": "Năm chặng trong tuần: mục đích, quy trình, im lặng, hồ sơ nhạy cảm, và thay đổi.",
          "keys": [
            "Năm chặng"
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
            "text": "① Thứ Hai · Phù hợp mục đích",
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
                  "pose": "hold"
                }
              ],
              "props": [
                "triangular-ruler"
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
            "at": "l1:monday",
            "caption": "Thứ Hai · họp với nhà thầu",
            "icon": "triangular-ruler"
          },
          {
            "id": "c-std",
            "t": "text",
            "text": "Đúng tiêu chuẩn = đủ?",
            "x": 3996,
            "y": 160,
            "size": 52,
            "at": "l2:standard",
            "color": "muted"
          },
          {
            "id": "c-fit",
            "t": "text",
            "text": "Phù hợp mục đích = kết quả",
            "x": 3996,
            "y": 250,
            "size": 48,
            "at": "l3:result",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả",
                "at": "l3:result"
              }
            ]
          },
          {
            "id": "c-care",
            "t": "text",
            "text": "Kỹ năng, cẩn trọng = nỗ lực",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l4:careful"
          },
          {
            "id": "c-both",
            "t": "text",
            "text": "Đúng tiêu chuẩn mà trượt mục đích → vẫn chịu",
            "x": 3996,
            "y": 410,
            "size": 30,
            "at": "l5:still",
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
          "say": "Monday. Sam, the EPC contractor's design manager, is back with a confident smile.",
          "sub": "Thứ Hai. Sam, quản lý thiết kế của nhà thầu EPC, trở lại với nụ cười tự tin.",
          "keys": [
            "quản lý thiết kế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Every drawing follows the standard. So if the plant underperforms, it's not on us.",
          "sub": "Bản vẽ nào cũng đúng tiêu chuẩn. Nhà máy có kém thì cũng không phải tại bên tôi.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fit for purpose is a promise of a result.",
          "sub": "Phù hợp mục đích là cam kết kết quả.",
          "keys": [
            "cam kết kết quả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Heavier than reasonable skill and care, which only promises to work like a careful designer.",
          "sub": "Nặng hơn kỹ năng và cẩn trọng hợp lý, vốn chỉ hứa làm như một nhà thiết kế cẩn thận."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Designs to standard, plant misses its purpose? The contractor is still on the hook.",
          "sub": "Thiết kế đúng tiêu chuẩn mà nhà máy vẫn không đạt mục đích? Nhà thầu vẫn chịu.",
          "keys": [
            "Nhà thầu vẫn chịu"
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
            "id": "c-cl",
            "t": "text",
            "text": "Câu mẫu: Mục đích + Bảo đảm Hiệu suất",
            "x": 3996,
            "y": 480,
            "size": 30,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-def",
            "t": "text",
            "text": "Mục đích phải định nghĩa rõ",
            "x": 3996,
            "y": 530,
            "size": 46,
            "at": "l1:defined",
            "hl": [
              {
                "text": "định nghĩa rõ",
                "at": "l1:defined"
              }
            ]
          },
          {
            "id": "c-src1",
            "t": "text",
            "text": "Mẫu EPC quốc tế: bồi hoàn nếu không phù hợp mục đích",
            "x": 3996,
            "y": 600,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-src2",
            "t": "text",
            "text": "NĐ 210/2026: EPC chịu về tính đầy đủ, đồng bộ",
            "x": 3996,
            "y": 640,
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
          "say": "The sample clause: the works will be fit for purpose and meet the performance guarantees. Strong only if purpose is clearly defined.",
          "sub": "Câu mẫu: công trình phù hợp Mục đích Sử dụng và đạt Bảo đảm Hiệu suất. Chỉ mạnh khi Mục đích được định nghĩa rõ.",
          "keys": [
            "định nghĩa rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Analyses of the international turnkey EPC model form say the contractor indemnifies the owner if the works aren't fit for purpose.",
          "sub": "Theo bài phân tích mẫu hợp đồng EPC quốc tế, nhà thầu bồi hoàn cho Chủ đầu tư nếu công trình không phù hợp mục đích."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Decree two ten: the EPC contractor answers for complete, consistent design. Check the current text.",
          "sub": "Nghị định 210/2026: bên nhận thầu EPC chịu trách nhiệm về tính đầy đủ, đồng bộ của thiết kế. Kiểm văn bản hiện hành."
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Thiết kế đúng tiêu chuẩn",
        "wrong": "Đúng tiêu chuẩn là nhà thầu hết trách nhiệm",
        "right": "Tiêu chuẩn là sàn, mục đích mới là đích",
        "wrongIllus": "straight-ruler",
        "rightIllus": "trophy"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Follow the standard, and you're done?",
          "sub": "Đúng tiêu chuẩn là hết trách nhiệm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. The standard is the floor. Purpose is the goal.",
          "sub": "Không. Đúng tiêu chuẩn là sàn, đúng mục đích mới là đích.",
          "keys": [
            "đúng mục đích mới là đích"
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
            "at": "l1",
            "fit": [
              "c-num"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l1:end",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-num",
            "t": "text",
            "text": "Mục đích = con số đo được",
            "x": 3996,
            "y": 700,
            "size": 52,
            "at": "l1:numbers",
            "color": "accent",
            "hl": [
              {
                "text": "con số đo được",
                "at": "l1:measurable"
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
          "say": "Thảo's job: describe the purpose with measurable numbers in the Employer's Requirements. Capacity, design life.",
          "sub": "Việc của Thảo: mô tả mục đích bằng con số đo được trong Yêu cầu của Chủ đầu tư. Công suất, tuổi thọ thiết kế.",
          "keys": [
            "con số đo được"
          ]
        }
      ],
      "ref": "p4"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Quy trình xem xét",
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
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "open-file-folder"
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · ban kỹ thuật",
            "icon": "open-file-folder"
          },
          {
            "id": "d-fl",
            "t": "text",
            "text": "Nộp → góp ý [ ] ngày → sửa → nộp lại",
            "x": 5964,
            "y": 160,
            "size": 40,
            "at": "l4:comments",
            "hl": [
              {
                "text": "[ ] ngày",
                "at": "l4:days"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Hai thời hạn khác nhau?",
            "x": 5964,
            "y": 240,
            "size": 44,
            "at": "l5:two",
            "color": "coral"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "→ pháp chế chốt một con số",
            "x": 5964,
            "y": 310,
            "size": 44,
            "at": "l5:legal",
            "color": "accent",
            "hl": [
              {
                "text": "một con số",
                "at": "l5:one"
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
          "say": "Tuesday. The review process.",
          "sub": "Thứ Ba. Quy trình xem xét."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here's Dũng, a young site engineer on the owner's team. Fast, sometimes too fast.",
          "sub": "Đây là Dũng, kỹ sư hiện trường trẻ bên Chủ đầu tư. Nhanh, có khi nhanh quá.",
          "keys": [
            "kỹ sư hiện trường trẻ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The schedule says ten days to review, the contract says something else. I'll just pick one!",
          "sub": "Lịch nộp tài liệu ghi một thời hạn, thân hợp đồng ghi khác. Em chọn đại một cái!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Normally: documents arrive by the schedule, the owner comments within a set number of days, the contractor fixes and resubmits.",
          "sub": "Thường thì: nhà thầu nộp theo lịch, Chủ đầu tư góp ý trong [ ] ngày, nhà thầu sửa và nộp lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two deadlines? Don't pick. Ask legal to confirm one number for the whole team.",
          "sub": "Hai thời hạn? Đừng chọn đại. Nhờ pháp chế xác nhận một con số, dùng cho cả đội.",
          "keys": [
            "một con số"
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
      "ref": "p6,p7"
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
            "id": "d-key",
            "t": "text",
            "text": "Xem xét ≠ miễn trừ",
            "x": 5964,
            "y": 390,
            "size": 48,
            "at": "l1:key",
            "color": "accent",
            "hl": [
              {
                "text": "≠ miễn trừ",
                "at": "l1:relieve"
              }
            ]
          },
          {
            "id": "d-k-c0",
            "t": "box",
            "x": 5964,
            "y": 470,
            "w": 44,
            "h": 44,
            "at": "l2:number",
            "stroke": 5
          },
          {
            "id": "d-k-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 452,
            "size": 56,
            "at": "l2:number+600",
            "color": "accent"
          },
          {
            "id": "d-k-l0",
            "t": "text",
            "text": "Số hiệu, phiên bản",
            "x": 6034,
            "y": 462,
            "size": 36,
            "at": "l2:number+200"
          },
          {
            "id": "d-k-c1",
            "t": "box",
            "x": 5964,
            "y": 530,
            "w": 44,
            "h": 44,
            "at": "l2:deadline",
            "stroke": 5
          },
          {
            "id": "d-k-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 512,
            "size": 56,
            "at": "l2:deadline+600",
            "color": "accent"
          },
          {
            "id": "d-k-l1",
            "t": "text",
            "text": "Ngày nhận, hạn trả lời",
            "x": 6034,
            "y": 522,
            "size": 36,
            "at": "l2:deadline+200"
          },
          {
            "id": "d-k-c2",
            "t": "box",
            "x": 5964,
            "y": 590,
            "w": 44,
            "h": 44,
            "at": "l3:conclusion",
            "stroke": 5
          },
          {
            "id": "d-k-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 572,
            "size": 56,
            "at": "l3:conclusion+600",
            "color": "accent"
          },
          {
            "id": "d-k-l2",
            "t": "text",
            "text": "Kết luận theo mức HĐ",
            "x": 6034,
            "y": 582,
            "size": 36,
            "at": "l3:conclusion+200"
          },
          {
            "id": "d-k-c3",
            "t": "box",
            "x": 5964,
            "y": 650,
            "w": 44,
            "h": 44,
            "at": "l3:reason",
            "stroke": 5
          },
          {
            "id": "d-k-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 632,
            "size": 56,
            "at": "l3:reason+600",
            "color": "accent"
          },
          {
            "id": "d-k-l3",
            "t": "text",
            "text": "Lý do + điều khoản",
            "x": 6034,
            "y": 642,
            "size": 36,
            "at": "l3:reason+200"
          },
          {
            "id": "d-k-c4",
            "t": "box",
            "x": 5964,
            "y": 710,
            "w": 44,
            "h": 44,
            "at": "l3:reminder",
            "stroke": 5
          },
          {
            "id": "d-k-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 692,
            "size": 56,
            "at": "l3:reminder+600",
            "color": "accent"
          },
          {
            "id": "d-k-l4",
            "t": "text",
            "text": "Câu nhắc không miễn trừ",
            "x": 6034,
            "y": 702,
            "size": 36,
            "at": "l3:reminder+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The key clause: owner review, approval, or none at all, does not relieve the contractor of any duty.",
          "sub": "Câu quan trọng nhất: Chủ đầu tư xem xét, chấp thuận hay không, đều không miễn trừ nghĩa vụ nào của Nhà thầu.",
          "keys": [
            "không miễn trừ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each comment records the document number and revision, date received and deadline.",
          "sub": "Mỗi lần trả ý kiến ghi: số hiệu và phiên bản tài liệu, ngày nhận và hạn trả lời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A clear conclusion at the contract's levels, the reason with its clause, and a reminder that review gives no relief.",
          "sub": "Kết luận rõ theo các mức hợp đồng, lý do kèm điều khoản, và câu nhắc việc xem xét không giảm trách nhiệm."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Hết hạn mà chưa trả lời thì sao?",
        "illus": "hourglass-not-done"
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
          "say": "What if the deadline passes with no reply?",
          "sub": "Hết hạn mà chưa trả lời thì sao?",
          "keys": [
            "chưa trả lời"
          ]
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Im lặng quá hạn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "e-dm",
            "t": "text",
            "text": "Không trả lời [ ] ngày → coi như duyệt",
            "x": 7932,
            "y": 160,
            "size": 40,
            "at": "l1:deemed",
            "color": "coral",
            "hl": [
              {
                "text": "coi như duyệt",
                "at": "l1:deemed"
              }
            ]
          },
          {
            "id": "e-ag",
            "t": "text",
            "text": "Im lặng = duyệt khi đã thỏa thuận",
            "x": 7932,
            "y": 235,
            "size": 36,
            "at": "l2:agreed",
            "hl": [
              {
                "text": "đã thỏa thuận",
                "at": "l2:agreed"
              }
            ]
          },
          {
            "id": "e-w",
            "t": "text",
            "text": "→ câu chữ quyết định rủi ro",
            "x": 7932,
            "y": 300,
            "size": 40,
            "at": "l3:wording",
            "color": "accent"
          },
          {
            "id": "e-f1",
            "t": "text",
            "text": "Hàng rào 1: văn bản nhắc",
            "x": 7932,
            "y": 385,
            "size": 44,
            "at": "l4:reminder",
            "hl": [
              {
                "text": "văn bản nhắc",
                "at": "l4:reminder"
              }
            ]
          },
          {
            "id": "e-f2",
            "t": "text",
            "text": "Hàng rào 2: thêm [ ] ngày làm việc",
            "x": 7932,
            "y": 450,
            "size": 40,
            "at": "l4:working"
          },
          {
            "id": "e-f3",
            "t": "text",
            "text": "Loại trừ: an toàn · lưới · hiệu suất",
            "x": 7932,
            "y": 515,
            "size": 40,
            "at": "l5:safety",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Many contracts say: no reply within a set number of days, and the document is deemed approved.",
          "sub": "Thứ Tư. Nhiều hợp đồng ghi: không trả lời trong [ ] ngày thì tài liệu coi như đã duyệt.",
          "keys": [
            "coi như đã duyệt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As a general rule, silence becomes approval only when the parties agreed so.",
          "sub": "Theo nguyên tắc chung, im lặng chỉ thành chấp thuận khi các bên đã thỏa thuận như vậy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That clause is the agreement. So its wording decides the risk, not team habits.",
          "sub": "Điều coi như chấp thuận chính là thỏa thuận đó. Câu chữ quyết định rủi ro, chứ không phải thói quen.",
          "keys": [
            "Câu chữ quyết định rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The owner adds fences: first a written reminder from the contractor, then extra working days.",
          "sub": "Chủ đầu tư thêm hàng rào: nhà thầu phải gửi văn bản nhắc, rồi thêm [ ] ngày làm việc.",
          "keys": [
            "văn bản nhắc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And no deemed approval at all for safety, grid connection, or performance guarantees.",
          "sub": "Và không chấp thuận mặc nhiên cho tài liệu an toàn, đấu nối lưới, Bảo đảm Hiệu suất."
        }
      ],
      "ref": "p10,p11,p12"
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
            "at": "a1",
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
            "text": "Chiều thứ Tư · Đợt nộp dồn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:batch"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "left": {
                "label": "A: mọi hồ sơ mặc nhiên",
                "ok": false
              },
              "right": {
                "label": "B: có hàng rào",
                "ok": true
              }
            },
            "at": "l1:batch",
            "caption": "Cùng một hồ sơ móng bị sót",
            "icon": "construction"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A: coi như duyệt, đã thi công",
            "x": 60,
            "y": 1260,
            "size": 38,
            "at": "a2:built",
            "color": "coral"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: chưa duyệt khi chưa nhắc",
            "x": 60,
            "y": 1340,
            "size": 36,
            "at": "b2:reminder",
            "color": "accent"
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "Im lặng cần hàng rào",
            "x": 60,
            "y": 1490,
            "size": 56,
            "at": "l5:fence",
            "color": "accent",
            "hl": [
              {
                "text": "hàng rào",
                "at": "l5:fence"
              }
            ]
          },
          {
            "id": "f-take2",
            "t": "text",
            "text": "hồ sơ nguy hiểm: rào cao nhất",
            "x": 60,
            "y": 1570,
            "size": 44,
            "at": "l5:highest"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday afternoon. A big batch arrives near the deadline, and one foundation file slips through.",
          "sub": "Chiều thứ Tư. Một đợt hồ sơ nộp dồn sát hạn, và một hồ sơ móng bị sót.",
          "keys": [
            "hồ sơ móng bị sót"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Every file is deemed approved on silence. That foundation one too.",
          "sub": "Hồ sơ nào im lặng quá hạn cũng coi như duyệt. Cả hồ sơ móng.",
          "phase": "a",
          "pose": "phone"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "And the contractor has already built to it!",
          "sub": "Mà nhà thầu đã thi công theo nó rồi!",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Our contract has fences: a reminder letter, then extra working days.",
          "sub": "Hợp đồng mình có hàng rào: phải có văn bản nhắc, rồi thêm ngày làm việc.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "So it's not approved until the reminder comes. We still have time to read it.",
          "sub": "Vậy hồ sơ chưa được duyệt cho đến khi có văn bản nhắc. Đội mình còn kịp xem.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Silence needs a fence. Dangerous files need the highest fence.",
          "sub": "Im lặng cần hàng rào, hồ sơ nguy hiểm cần hàng rào cao nhất.",
          "keys": [
            "hàng rào cao nhất"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s12",
      "module": "BRK-06",
      "data": {
        "title": "Không để duyệt chỉ vì hết hạn",
        "items": [
          {
            "illus": "warning",
            "text": "An toàn"
          },
          {
            "illus": "construction",
            "text": "Móng"
          },
          {
            "illus": "high-voltage",
            "text": "Đấu nối lưới"
          },
          {
            "illus": "bar-chart",
            "text": "Hiệu suất"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Safety, foundations, grid connection, performance.",
          "sub": "An toàn, móng, đấu nối lưới, hiệu suất."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Too costly to fix once built or energized.",
          "sub": "Sai rồi thì khó sửa rẻ sau khi đã thi công, đã đóng điện.",
          "keys": [
            "khó sửa rẻ"
          ]
        }
      ],
      "ref": "p15"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "④ Thứ Năm · Lịch theo dõi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:tracking"
          },
          {
            "id": "g-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 3468,
            "y": 1120,
            "size": 130,
            "at": "l1:schedule"
          },
          {
            "id": "g-0",
            "t": "text",
            "text": "① Đánh dấu hồ sơ nhạy cảm",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:mark"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "② Ghi ngày nhận, tính hạn",
            "x": 2028,
            "y": 1345,
            "size": 44,
            "at": "l3:date"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "③ Nhắc trước hạn: chính + dự phòng",
            "x": 2028,
            "y": 1430,
            "size": 44,
            "at": "l4:reminder"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "④ Mỗi tuần: xem sắp hết hạn",
            "x": 2028,
            "y": 1515,
            "size": 44,
            "at": "l5:week",
            "color": "accent"
          },
          {
            "id": "g-nok",
            "t": "text",
            "text": "chưa xem → “chưa chấp thuận”",
            "x": 2028,
            "y": 1610,
            "size": 36,
            "at": "l5:reasons",
            "color": "coral"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Thời hạn nào cũng cần người canh",
            "x": 2028,
            "y": 1710,
            "size": 50,
            "at": "l6:guard",
            "color": "accent",
            "hl": [
              {
                "text": "người canh",
                "at": "l6:guard"
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
          "say": "Thursday. Thảo builds a review tracking schedule.",
          "sub": "Thứ Năm. Thảo lập lịch theo dõi thời hạn xem xét."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: take the document schedule and mark the sensitive files.",
          "sub": "Một: lấy lịch nộp tài liệu, đánh dấu hồ sơ thuộc nhóm nhạy cảm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: for each file, log the date received and work out the reply date.",
          "sub": "Hai: mỗi hồ sơ, ghi ngày nhận và tính hạn trả lời theo thời hạn đã xác nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: set a reminder before the deadline, for a main reviewer and a backup.",
          "sub": "Ba: đặt nhắc trước hạn cho người duyệt chính và người dự phòng.",
          "keys": [
            "người dự phòng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: every week, the Employer's Representative checks what's due. Not read in time? Send not approved, with reasons.",
          "sub": "Bốn: mỗi tuần, Đại diện Chủ đầu tư xem danh sách sắp hết hạn; chưa kịp xem thì gửi “chưa chấp thuận” kèm lý do."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Every deadline needs a guard.",
          "sub": "Thời hạn nào cũng cần một người canh.",
          "keys": [
            "một người canh"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s14",
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
            "text": "⑤ Thứ Sáu · Thay đổi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "h-ls",
            "t": "text",
            "text": "Trọn gói: Thay đổi = đổi giá",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l1:variation",
            "hl": [
              {
                "text": "đổi giá",
                "at": "l1:price"
              }
            ]
          },
          {
            "id": "h-dev",
            "t": "text",
            "text": "Phát triển thiết kế ≠ Thay đổi",
            "x": 3996,
            "y": 1320,
            "size": 42,
            "at": "l2:development"
          },
          {
            "id": "h-err",
            "t": "text",
            "text": "Lỗi nhà thầu: không thêm gì",
            "x": 3996,
            "y": 1385,
            "size": 40,
            "at": "l2:faults",
            "color": "muted"
          },
          {
            "id": "h-in",
            "t": "text",
            "text": "Đúng Yêu cầu → không Thay đổi",
            "x": 3996,
            "y": 1460,
            "size": 40,
            "at": "l3:match",
            "color": "accent"
          },
          {
            "id": "h-out",
            "t": "text",
            "text": "Vượt Yêu cầu → có thể Thay đổi",
            "x": 3996,
            "y": 1525,
            "size": 40,
            "at": "l4:beyond",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday. In a lump sum contract, a variation is the main door to change the price.",
          "sub": "Thứ Sáu. Trong hợp đồng giá trọn gói, Thay đổi là cửa chính để đổi giá.",
          "keys": [
            "cửa chính để đổi giá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Normal design development is no variation, and contractor faults get no extra money or time.",
          "sub": "Phát triển thiết kế thông thường không phải Thay đổi; lỗi của nhà thầu thì không thêm tiền, không gia hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A comment that makes the design match the Requirements is not a variation.",
          "sub": "Ý kiến buộc thiết kế đúng Yêu cầu của Chủ đầu tư không phải Thay đổi.",
          "keys": [
            "không phải Thay đổi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But going beyond them, or changing something already settled, may be one.",
          "sub": "Còn yêu cầu vượt Yêu cầu, hoặc đổi điều đã chốt mà vẫn đúng Yêu cầu, có thể thành Thay đổi."
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Sáu · họp hiện trường",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "point"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi “đề nghị dời tủ” vào biên bản họp",
          "why": "Tủ đã duyệt, Yêu cầu không đòi vị trí đó: yêu cầu mới, nhà thầu làm rồi đòi tiền, hoặc không làm.",
          "rule": "Chuyển qua Đại diện Chủ đầu tư quyết định"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Operations want the control cabinet moved. I'll write: contractor to move the cabinet. Okay!",
          "sub": "Bên vận hành muốn dời tủ điều khiển. Em ghi biên bản: đề nghị nhà thầu dời tủ. Ok!",
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
          "say": "That layout was approved, and the Requirements don't demand that spot. It's a new request.",
          "sub": "Bản vẽ đã duyệt, Yêu cầu không đòi vị trí đó: đây là yêu cầu mới.",
          "keys": [
            "yêu cầu mới"
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
          "say": "I'll send it to the Employer's Representative to decide, in writing.",
          "sub": "Em chuyển đề nghị qua Đại diện Chủ đầu tư quyết định, bằng văn bản.",
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
      "ref": "p20"
    },
    {
      "id": "s16",
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
            "at": "l3",
            "fit": [
              "h-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-only",
            "t": "text",
            "text": "Thay đổi: văn bản, nêu rõ",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l1:written",
            "hl": [
              {
                "text": "văn bản",
                "at": "l1:written"
              }
            ]
          },
          {
            "id": "h-risk",
            "t": "text",
            "text": "Biên bản họp → đòi tiền, tranh cãi",
            "x": 3996,
            "y": 1680,
            "size": 40,
            "at": "l2:minutes",
            "color": "coral"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Sửa đã duyệt: qua cửa Thay đổi",
            "x": 3996,
            "y": 1770,
            "size": 48,
            "at": "l3:door",
            "color": "accent",
            "hl": [
              {
                "text": "cửa Thay đổi",
                "at": "l3:door"
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
          "say": "The sample clause: no instruction is a variation unless written by the owner, or its authorised representative, and named as one.",
          "sub": "Câu mẫu: không chỉ thị nào là Thay đổi trừ khi Chủ đầu tư, hoặc Đại diện được ủy quyền, đưa ra bằng văn bản và nêu rõ là Thay đổi.",
          "keys": [
            "nêu rõ là Thay đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A line in meeting minutes invites a fight: built then billed, or not built at all.",
          "sub": "Một câu trong biên bản họp dễ thành tranh cãi: nhà thầu làm rồi đòi tiền, hoặc không làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To change what's approved, go through the variation door.",
          "sub": "Muốn sửa điều đã duyệt, hãy đi qua cửa Thay đổi.",
          "keys": [
            "đi qua cửa Thay đổi"
          ]
        }
      ],
      "ref": "p19,p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Chiều thứ Sáu · Hồ sơ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:long"
          },
          {
            "id": "i-d",
            "t": "text",
            "text": "Hoàn công · vận hành · chất lượng",
            "x": 5964,
            "y": 1250,
            "size": 40,
            "at": "l1:built"
          },
          {
            "id": "i-lic",
            "t": "text",
            "text": "Giấy phép: vĩnh viễn, không hủy ngang",
            "x": 5964,
            "y": 1320,
            "size": 40,
            "at": "l2:perpetual",
            "color": "accent",
            "hl": [
              {
                "text": "vĩnh viễn",
                "at": "l2:perpetual"
              }
            ]
          },
          {
            "id": "i-lic2",
            "t": "text",
            "text": "chuyển nhượng được · gồm phần mềm SCADA",
            "x": 5964,
            "y": 1385,
            "size": 36,
            "at": "l2:SCADA"
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "→ đổi nhà vận hành, bán dự án",
            "x": 5964,
            "y": 1450,
            "size": 40,
            "at": "l3:operator",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday afternoon: files for the long run. As-built drawings, operation and maintenance manuals, quality records, test results.",
          "sub": "Chiều thứ Sáu: hồ sơ dùng lâu dài. Bản vẽ hoàn công, sách vận hành – bảo dưỡng, hồ sơ chất lượng, kết quả thử.",
          "keys": [
            "hồ sơ dùng lâu dài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The owner needs a perpetual, irrevocable, transferable licence to design files and software like SCADA.",
          "sub": "Chủ đầu tư nên có giấy phép vĩnh viễn, không hủy ngang, chuyển nhượng được với tài liệu thiết kế và phần mềm như SCADA.",
          "keys": [
            "giấy phép vĩnh viễn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Otherwise, changing the operator or selling the project gets stuck.",
          "sub": "Để còn dùng khi đổi nhà thầu vận hành hay bán dự án."
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s18",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Điều 10 Luật Xây dựng 2025",
        "detail": "Bảo hiểm nghề nghiệp cho thiết kế cấp II trở lên",
        "illus": "shield",
        "around": [
          "triangular-ruler",
          "page-facing-up"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Design consultants must buy professional liability insurance.",
          "sub": "Tư vấn thiết kế phải mua bảo hiểm trách nhiệm nghề nghiệp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "For works of grade two and above.",
          "sub": "Cho công trình từ cấp II trở lên.",
          "keys": [
            "cấp II trở lên"
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-chk",
            "t": "text",
            "text": "Chứng chỉ, đóng dấu: kiểm hiện hành",
            "x": 5964,
            "y": 1560,
            "size": 42,
            "at": "l1:certificates",
            "hl": [
              {
                "text": "hiện hành",
                "at": "l1:current"
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
          "say": "Designer certificates, signing and stamping rules? Check the current texts, the decrees under the new law just changed.",
          "sub": "Chứng chỉ người thiết kế, cách ký, đóng dấu? Kiểm văn bản hiện hành, vì bộ nghị định hướng dẫn luật mới vừa thay đổi.",
          "keys": [
            "Kiểm văn bản hiện hành"
          ]
        }
      ],
      "ref": "p23"
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
                  "enter": "pop",
                  "at": "l3",
                  "pose": "thumb"
                }
              ],
              "props": [
                "triangular-ruler",
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
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:next",
            "caption": "Thứ Hai tuần sau · cùng bàn ấy",
            "icon": "triangular-ruler"
          },
          {
            "id": "j-sig",
            "t": "text",
            "text": "Ký duyệt ✓ + câu nhắc",
            "x": 7942,
            "y": 1260,
            "size": 52,
            "at": "l2:signed",
            "color": "accent"
          },
          {
            "id": "j-dl",
            "t": "text",
            "text": "Trả lời trước hạn ✓",
            "x": 7942,
            "y": 1350,
            "size": 52,
            "at": "l2:deadline"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Im lặng là vàng…",
            "x": 7942,
            "y": 1540,
            "size": 52,
            "at": "l5:golden",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…nhưng trả lời đúng hạn",
            "x": 7942,
            "y": 1620,
            "size": 52,
            "at": "l5:time",
            "color": "accent",
            "hl": [
              {
                "text": "đúng hạn",
                "at": "l5:time"
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
          "say": "Next Monday. Same desk, same pile of drawings.",
          "sub": "Thứ Hai tuần sau. Vẫn bàn ấy, vẫn chồng bản vẽ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I signed the approval, with the no relief reminder, two days before the deadline.",
          "sub": "Em ký duyệt, kèm câu nhắc không giảm trách nhiệm, trước hạn hai ngày.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ms Hoa, head of the technical team, reads over her shoulder.",
          "sub": "Cô Hoa, trưởng ban kỹ thuật, ghé xem."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And if the design turns out wrong? Right, finish your sentence!",
          "sub": "Thế nếu thiết kế sai thì sao? Rồi, nói nốt câu đi!",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Then the contractor still carries it. Silence is golden, but I answer on time.",
          "sub": "Thì nhà thầu vẫn chịu. Im lặng là vàng, nhưng em trả lời đúng hạn.",
          "face": "happy",
          "keys": [
            "nhà thầu vẫn chịu"
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
      "ref": "p8,p17"
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
            "at": "l1:purpose",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:silence",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:variation",
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
            "at": "l1:purpose"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1600,
            "y": 1110,
            "at": "l2:silence"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1110,
            "at": "l3:variation"
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
          "say": "So: fit for purpose plus a no relief clause keeps design risk with the contractor.",
          "sub": "Tóm lại: phù hợp mục đích cộng câu không giảm trách nhiệm giữ rủi ro thiết kế ở nhà thầu.",
          "keys": [
            "giữ rủi ro thiết kế ở nhà thầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fence in silence, and guard every deadline.",
          "sub": "Rào điều im lặng, canh từng thời hạn.",
          "keys": [
            "canh từng thời hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And change approved designs only through the variation door.",
          "sub": "Và sửa thiết kế đã duyệt chỉ qua cửa Thay đổi.",
          "keys": [
            "cửa Thay đổi"
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
        "q": "In the foundation example, what went wrong when deemed approval covered every document?",
        "options": [
          "A missed foundation document was deemed approved and the contractor built to it",
          "The foundation design was automatically rejected and redone at the employer's cost",
          "The contractor had to stop all work until the employer visited the factory"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "construction",
        "why": "Ở cách A, hồ sơ móng bị sót trong một đợt nộp dồn. Hết hạn, hồ sơ coi như được duyệt và nhà thầu thi công theo đó. Sai sót có thể đã nằm dưới bê tông."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the foundation example, what went wrong when deemed approval covered every document?",
          "sub": "Trong ví dụ hồ sơ móng, chuyện gì xảy ra khi chấp thuận mặc nhiên áp dụng cho mọi hồ sơ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The missed foundation file was deemed approved, and the contractor built to it.",
          "sub": "Hồ sơ móng bị sót được coi như đã duyệt, và nhà thầu thi công theo nó."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
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
          "say": "Right now: find your deemed approval clause, and mark safety, foundation, grid and performance files.",
          "sub": "Việc làm ngay: tìm điều coi như chấp thuận, đánh dấu hồ sơ an toàn, móng, đấu nối, hiệu suất.",
          "keys": [
            "đánh dấu hồ sơ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: test criteria you can measure. Now, forty questions below!",
          "sub": "Bài sau: tiêu chí thử nghiệm đo được. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-22",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): Thảo “Em đã ký duyệt. Nếu thiết kế sai, thì Chủ đầu tư…” cắt ở s00, nói trọn ở s02 (< 90 s), và được trả lời trọn ở khép vòng s20 (“Thì nhà thầu vẫn chịu”). Dòng thời gian: MỘT TUẦN duyệt hồ sơ (T2 phù hợp mục đích với Sam p1–p5 → T3 quy trình xem xét, Dũng ra mắt p6–p9 → T4 im lặng quá hạn, hàng rào p10–p12; chiều T4 đợt nộp dồn hai cách p13–p14 → T5 hồ sơ nhạy cảm + lịch theo dõi p15–p17 → T6 Thay đổi, “Khoan đã!” Dũng ghi “đề nghị dời tủ” p18–p21 → chiều T6 hồ sơ lâu dài, Đ10 bảo hiểm p22–p23 → T2 sau khép vòng). Nhân vật (w145/_series/epc-engineering.md): Thảo, Sam, Dũng, cô Hoa. Câu neo mở/khép: “Im lặng là vàng” → im lặng quá hạn có khi thành chữ ký. BRK: 04 (đúng tiêu chuẩn là sàn p4–p5), 07 (rehook hết hạn), 06 (hồ sơ nhạy cảm p15), 09 (nguồn Đ10 LXD 2025 p23). Không tên dự án/công ty/hợp đồng thật; ô [ ] ngày giữ nguyên. Câu đố questions[18].",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
