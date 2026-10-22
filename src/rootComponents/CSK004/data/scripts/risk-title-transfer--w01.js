// risk-title-transfer--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "risk-title-transfer--w01",
  "unit": {
    "audience": "epc-om-operator",
    "slug": "risk-title-transfer",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Từ ngày nào đội vận hành chịu rủi ro và trách nhiệm nhà máy?",
    "series": "Nhận và vận hành nhà máy sau EPC — cho đội O&M, nhận đủ hồ sơ và bắt nhà thầu sửa đúng lỗi"
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
            "at": "l3",
            "fit": [
              "a-ab",
              "a-bb"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-fire",
            "t": "illus",
            "name": "fire",
            "x": 60,
            "y": 120,
            "size": 100,
            "at": "l2:fire"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Tủ đã trả đủ tiền → của CĐT",
            "x": 190,
            "y": 130,
            "size": 46,
            "at": "l1:paid",
            "hl": [
              {
                "text": "của CĐT",
                "at": "l1:belongs"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Chưa bàn giao · đang bán điện",
            "x": 190,
            "y": 200,
            "size": 44,
            "at": "l1:selling",
            "color": "muted"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Chập, cháy lan dãy cáp",
            "x": 190,
            "y": 270,
            "size": 46,
            "at": "l2:spreads",
            "color": "coral"
          },
          {
            "id": "a-ab",
            "t": "box",
            "x": 60,
            "y": 360,
            "w": 760,
            "h": 100,
            "at": "l3:a",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A · Chủ đầu tư (của mình mà)",
            "x": 90,
            "y": 378,
            "size": 44,
            "at": "l3:a+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 490,
            "w": 760,
            "h": 100,
            "at": "l3:b",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B · Nhà thầu",
            "x": 90,
            "y": 508,
            "size": 48,
            "at": "l3:b+200"
          },
          {
            "id": "a-th",
            "t": "illus",
            "name": "thinking-face",
            "x": 700,
            "y": 620,
            "size": 90,
            "at": "l4:lock"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A control panel, fully paid, so it belongs to the owner. The plant is testing and already selling power.",
          "sub": "Một tủ điều khiển đã trả đủ tiền, nên thuộc Chủ đầu tư. Nhà máy đang chạy thử, đã bán điện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No handover certificate yet. The panel shorts, and the fire spreads to the cable tray.",
          "sub": "Chưa có chứng nhận bàn giao. Tủ chập, cháy lan sang dãy cáp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Who repairs it? A: the owner, it's theirs. B: the contractor.",
          "sub": "Ai phải sửa? A: Chủ đầu tư, của mình mà. B: nhà thầu.",
          "keys": [
            "Ai phải sửa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lock in your answer.",
          "sub": "Chốt đáp án đi."
        }
      ],
      "beats": {
        "after": 1200
      },
      "ref": "p8"
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
            "at": "l3",
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
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "high-voltage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Tuần cuối chạy thử · phòng điều khiển",
            "icon": "notebook"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Của mình thì giữ bo bo”",
            "x": 60,
            "y": 690,
            "size": 50,
            "at": "l3:yours",
            "color": "accent",
            "hl": [
              {
                "text": "giữ bo bo",
                "at": "l3:tight"
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
          "say": "Meet Thảo, shift leader of the operations team, in the last week of testing.",
          "sub": "Đây là Thảo, trưởng ca đội vận hành, trong tuần cuối chạy thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My crew signs the shift log every night. But from which day is a breakdown ours?",
          "sub": "Đội em đêm nào cũng ký sổ ca. Nhưng từ ngày nào sự cố là chuyện của mình?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: what's yours, you guard tight. Today we test that.",
          "sub": "Ông bà dặn: “Của mình thì giữ bo bo.” Hôm nay ta thử lại câu ấy.",
          "keys": [
            "Của mình thì giữ bo bo"
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
            "text": "Từ ngày nào mình chịu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l3:which day",
            "hl": [
              {
                "text": "ngày nào",
                "at": "l3:which day"
              }
            ]
          },
          {
            "id": "b-ans",
            "t": "text",
            "text": "Thường là: B · Nhà thầu",
            "x": 2028,
            "y": 160,
            "size": 60,
            "at": "l1:split",
            "color": "accent",
            "hl": [
              {
                "text": "B · Nhà thầu",
                "at": "l1:contractor"
              }
            ]
          },
          {
            "id": "b-tw",
            "t": "text",
            "text": "trừ khi người CĐT gây ra",
            "x": 2028,
            "y": 255,
            "size": 40,
            "at": "l2:unless",
            "color": "muted"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Sở hữu · Rủi ro · Bảo hiểm",
            "x": 2028,
            "y": 345,
            "size": 56,
            "at": "l4:ownership",
            "hl": [
              {
                "text": "Rủi ro",
                "at": "l4:risk"
              }
            ]
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l4:testing+300",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2263,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l4:testing+520",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2498,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l4:testing+740",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 2733,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l4:testing+960",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 2968,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l4:testing+1180",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s5b",
            "t": "box",
            "x": 3203,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l4:testing+1400",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s6b",
            "t": "box",
            "x": 3438,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l4:testing+1620",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① T2",
            "x": 2048,
            "y": 495,
            "size": 40,
            "at": "l4:testing+420"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② T3",
            "x": 2283,
            "y": 495,
            "size": 40,
            "at": "l4:testing+640"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ T4",
            "x": 2518,
            "y": 495,
            "size": 40,
            "at": "l4:testing+860"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Đêm T4",
            "x": 2753,
            "y": 495,
            "size": 40,
            "at": "l4:testing+1080"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ T5",
            "x": 2988,
            "y": 495,
            "size": 40,
            "at": "l4:testing+1300"
          },
          {
            "id": "b-s5",
            "t": "text",
            "text": "⑥ T6",
            "x": 3223,
            "y": 495,
            "size": 40,
            "at": "l4:testing+1520"
          },
          {
            "id": "b-s6",
            "t": "text",
            "text": "⑦ T2 sau",
            "x": 3458,
            "y": 495,
            "size": 40,
            "at": "l4:testing+1740"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: mẫu hợp đồng quốc tế 2017 · Luật Xây dựng 135/2025/QH15 Điều 10 · NĐ 220/2026/NĐ-CP",
            "x": 2028,
            "y": 700,
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
          "say": "The answer, in the usual split: B, the contractor.",
          "sub": "Đáp án, theo cách phân bổ thường gặp: B, nhà thầu.",
          "keys": [
            "B, nhà thầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unless the owner's own people caused it. More at stop three.",
          "sub": "Trừ khi chính người của Chủ đầu tư gây ra. Chặng ba nói tiếp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, from which day does the operations team carry the plant's risk?",
          "sub": "Vậy từ ngày nào đội vận hành chịu rủi ro và trách nhiệm nhà máy?",
          "keys": [
            "từ ngày nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ownership, risk, insurance: when each one moves. Seven stops through the last week of testing.",
          "sub": "Sở hữu, rủi ro, bảo hiểm: mỗi thứ chuyển lúc nào. Bảy chặng qua tuần cuối chạy thử.",
          "keys": [
            "Sở hữu, rủi ro, bảo hiểm"
          ]
        }
      ],
      "ref": "intro,p8"
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
            "text": "① Thứ Hai · Sở hữu ≠ rủi ro",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-own",
            "t": "text",
            "text": "Sở hữu chuyển sớm, khi:",
            "x": 3996,
            "y": 160,
            "size": 52,
            "at": "l2:ownership",
            "hl": [
              {
                "text": "chuyển sớm",
                "at": "l2:early"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 44,
            "h": 44,
            "at": "l2:installed",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 242,
            "size": 56,
            "at": "l2:installed+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Lắp vào công trình",
            "x": 4066,
            "y": 252,
            "size": 42,
            "at": "l2:installed+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 330,
            "w": 44,
            "h": 44,
            "at": "l2:delivered",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 312,
            "size": 56,
            "at": "l2:delivered+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Giao tới công trường",
            "x": 4066,
            "y": 322,
            "size": 42,
            "at": "l2:delivered+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 400,
            "w": 44,
            "h": 44,
            "at": "l2:paid",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 382,
            "size": 56,
            "at": "l2:paid+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Trả đủ tiền",
            "x": 4066,
            "y": 392,
            "size": 42,
            "at": "l2:paid+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 470,
            "w": 44,
            "h": 44,
            "at": "l3:rail",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 452,
            "size": 56,
            "at": "l3:rail+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Qua lan can tàu, cảng dỡ",
            "x": 4066,
            "y": 462,
            "size": 42,
            "at": "l3:rail+200"
          },
          {
            "id": "c-first",
            "t": "text",
            "text": "mốc nào đến trước",
            "x": 4576,
            "y": 470,
            "size": 40,
            "at": "l3:first",
            "color": "accent"
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "→ CĐT, bên cho vay giữ tài sản",
            "x": 3996,
            "y": 560,
            "size": 40,
            "at": "l4:lenders"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Monday. First surprise: ownership and risk rarely move together.",
          "sub": "Chặng một, thứ Hai. Bất ngờ đầu tiên: sở hữu và rủi ro thường không chuyển cùng lúc.",
          "keys": [
            "không chuyển cùng lúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ownership of equipment often passes very early: when installed, delivered to site, or fully paid.",
          "sub": "Sở hữu thiết bị thường chuyển rất sớm: khi lắp vào công trình, khi giao tới công trường, hoặc khi trả đủ tiền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or when goods cross the ship's rail at the unloading port. Whichever comes first.",
          "sub": "Hoặc khi hàng qua lan can tàu tại cảng dỡ. Mốc nào đến trước thì tính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why so early? If the contractor gets into trouble, the owner and lenders keep the assets.",
          "sub": "Sao sớm thế? Nếu nhà thầu gặp khó khăn, Chủ đầu tư và bên cho vay vẫn giữ được tài sản."
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
            "id": "c-risk",
            "t": "text",
            "text": "Rủi ro: nhà thầu, đến bàn giao",
            "x": 4836,
            "y": 160,
            "size": 46,
            "at": "l1:risk",
            "color": "accent",
            "hl": [
              {
                "text": "đến bàn giao",
                "at": "l1:until"
              }
            ]
          },
          {
            "id": "c-fidic",
            "t": "text",
            "text": "trông giữ tới hoàn thành, trừ rủi ro của CĐT",
            "x": 4836,
            "y": 240,
            "size": 32,
            "at": "l2:except",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-eq",
            "t": "text",
            "text": "Thiết bị thi công: của nhà thầu",
            "x": 4836,
            "y": 320,
            "size": 40,
            "at": "l3:construction"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But the risk of loss and damage usually stays with the contractor until handover.",
          "sub": "Nhưng rủi ro mất mát, hư hỏng thường vẫn ở nhà thầu đến ngày bàn giao.",
          "keys": [
            "vẫn ở nhà thầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The international twenty seventeen model agrees: the contractor cares for the works until completion, except the owner's risks.",
          "sub": "Mẫu hợp đồng quốc tế 2017 cũng vậy: nhà thầu trông giữ công trình tới khi hoàn thành, trừ rủi ro thuộc về Chủ đầu tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the contractor's construction equipment? Still the contractor's.",
          "sub": "Còn thiết bị thi công của nhà thầu? Vẫn là của nhà thầu."
        }
      ],
      "ref": "p2"
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
            "text": "① Tối thứ Hai · Tin nhắn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:dũng"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "high-voltage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Tối thứ Hai · dãy tủ điện",
            "icon": "mobile-phone"
          },
          {
            "id": "d-msg",
            "t": "text",
            "text": "“Tủ là của bên anh rồi,",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:yours",
            "color": "coral"
          },
          {
            "id": "d-msg2",
            "t": "text",
            "text": "bên anh tự trông nhé.”",
            "x": 5964,
            "y": 240,
            "size": 48,
            "at": "l2:guard",
            "color": "coral",
            "hl": [
              {
                "text": "tự trông",
                "at": "l2:guard"
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
          "say": "Monday evening. Dũng, the young maintenance engineer, gets a message from Sam, the contractor's commissioning manager.",
          "sub": "Tối thứ Hai. Dũng, kỹ sư bảo dưỡng trẻ, nhận tin nhắn của Sam, quản lý chạy thử bên nhà thầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It says: the switchgear is paid for, so it's yours. Guard it yourselves.",
          "sub": "Tin ghi: “Dãy tủ điện đã thanh toán đủ, là của bên anh rồi. Bên anh tự trông nhé.”",
          "keys": [
            "tự trông"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Tối thứ Hai · dãy tủ điện",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đã trả tiền là của mình, mình tự trông",
          "why": "Sở hữu đã chuyển nhưng rủi ro và trông nom vẫn ở nhà thầu đến bàn giao; nhận trông bằng miệng dễ bị đổ lỗi.",
          "rule": "Của ai là một chuyện, ai chịu rủi ro là chuyện khác"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Ours? Then we guard it tight! Night watch, now.",
          "sub": "Của mình à? Vậy giữ bo bo! Cử người trực đêm luôn.",
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
          "say": "Paid means owned, not at risk. Until handover, the contractor still cares for the works.",
          "sub": "Trả tiền là sở hữu, chưa phải rủi ro. Đến bàn giao, nhà thầu vẫn trông nom công trình.",
          "keys": [
            "chưa phải rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rain gets into a panel, and the contractor says you took over. Meetings drag on.",
          "sub": "Nước mưa lọt vào tủ, nhà thầu nói đội bạn đã nhận trông. Họp mãi không xong."
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
          "say": "I ask Thảo first, then reply in writing: care stays with the contractor.",
          "sub": "Em hỏi chị Thảo trước, rồi trả lời bằng văn bản: trông nom vẫn là của nhà thầu.",
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
      "ref": "p3"
    },
    {
      "id": "s07",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Của ai ≠ ai chịu rủi ro",
        "hl": "ai chịu rủi ro",
        "sub": "Của mình chưa chắc là rủi ro của mình"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Owning is one thing. Carrying the risk is another.",
          "sub": "Của ai là một chuyện, ai chịu rủi ro là chuyện khác.",
          "keys": [
            "ai chịu rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Yours, not always your risk.",
          "sub": "Của mình chưa chắc là rủi ro của mình."
        }
      ],
      "ref": "p4"
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
            "text": "② Thứ Ba · Bàn giao mặc nhiên",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up"
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · phòng họp",
            "icon": "page-facing-up"
          },
          {
            "id": "e-bg",
            "t": "text",
            "text": "Bàn giao: rủi ro, trông nom → CĐT",
            "x": 7932,
            "y": 160,
            "size": 40,
            "at": "l2:control"
          },
          {
            "id": "e-dc",
            "t": "text",
            "text": "Im [ ] ngày → “coi như đã cấp”",
            "x": 7932,
            "y": 230,
            "size": 40,
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
            "id": "e-ky",
            "t": "text",
            "text": "Rủi ro sang dù chưa ký gì",
            "x": 7932,
            "y": 300,
            "size": 46,
            "at": "l4:signed",
            "hl": [
              {
                "text": "chưa ký gì",
                "at": "l4:nothing"
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
          "say": "Stop two, Tuesday. Ms Hoa, the owner's representative and future plant director, calls a meeting.",
          "sub": "Chặng hai, thứ Ba. Cô Hoa, Đại diện Chủ đầu tư, sắp làm giám đốc nhà máy, gọi họp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "At handover, risk, control and care all come to us. But when exactly?",
          "sub": "Bàn giao thì rủi ro, quyền kiểm soát, trông nom đều về tay mình. Nhưng chính xác là khi nào?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many contracts say: no certificate and no defects named within so many days, and it's deemed issued.",
          "sub": "Nhiều hợp đồng ghi: không cấp chứng nhận, không nêu khiếm khuyết trong [ ] ngày thì coi như đã cấp.",
          "keys": [
            "coi như đã cấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then risk passes, even though your team signed nothing.",
          "sub": "Khi đó rủi ro chuyển sang, dù đội vận hành chưa ký gì cả.",
          "keys": [
            "chưa ký gì"
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-hr",
            "t": "text",
            "text": "Hàng rào của CĐT:",
            "x": 7932,
            "y": 400,
            "size": 50,
            "at": "l1:fences",
            "color": "accent",
            "hl": [
              {
                "text": "Hàng rào",
                "at": "l1:fences"
              }
            ]
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 495,
            "w": 44,
            "h": 44,
            "at": "l2:reminder",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 477,
            "size": 56,
            "at": "l2:reminder+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Văn bản nhắc nêu điều khoản",
            "x": 8002,
            "y": 487,
            "size": 36,
            "at": "l2:reminder+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 565,
            "w": 44,
            "h": 44,
            "at": "l2:working",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 547,
            "size": 56,
            "at": "l2:working+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Thêm [ ] ngày làm việc",
            "x": 8002,
            "y": 557,
            "size": 36,
            "at": "l2:working+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 635,
            "w": 44,
            "h": 44,
            "at": "l3:guarantee",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 617,
            "size": 56,
            "at": "l3:guarantee+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Thiếu bảo lãnh, chứng nhận → không",
            "x": 8002,
            "y": 627,
            "size": 36,
            "at": "l3:guarantee+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Owners usually build fences around this.",
          "sub": "Chủ đầu tư thường dựng “hàng rào” cho điều này.",
          "keys": [
            "hàng rào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: the contractor sends a reminder citing the clause. Two: the owner gets so many more working days.",
          "sub": "Một: nhà thầu gửi văn bản nhắc nêu rõ điều khoản. Hai: Chủ đầu tư có thêm [ ] ngày làm việc để trả lời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: no deemed handover without the warranty guarantee or the type certificate.",
          "sub": "Ba: không có bàn giao mặc nhiên nếu chưa nộp bảo lãnh bảo hành hay chưa có chứng nhận kiểu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, find which fences we have, and who must answer the reminder. Right, done!",
          "sub": "Thảo tìm xem mình có hàng rào nào, và ai phải trả lời văn bản nhắc. Rồi, vậy nha!",
          "face": "happy"
        }
      ],
      "ref": "p6"
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
            "text": "③ Thứ Tư · Bán điện ≠ bàn giao",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:sells"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Đấu nối, bán điện, dùng nhà máy",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l2:connecting"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "≠ COD, ≠ bàn giao",
            "x": 60,
            "y": 1320,
            "size": 56,
            "at": "l2:not",
            "color": "coral",
            "hl": [
              {
                "text": "≠ bàn giao",
                "at": "l2:handover"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Đổi lại: CĐT hưởng tiền điện",
            "x": 60,
            "y": 1410,
            "size": 40,
            "at": "l3:revenue"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "nhà thầu có thể dùng khi thương lượng",
            "x": 60,
            "y": 1470,
            "size": 30,
            "at": "l3:bargaining",
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
          "say": "Stop three, Wednesday. The plant sells power every day now. Has the risk moved?",
          "sub": "Chặng ba, thứ Tư. Nhà máy giờ ngày nào cũng bán điện. Rủi ro đã chuyển chưa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many contracts say: connecting, exporting, selling power, or the owner using the plant is not COD or handover.",
          "sub": "Nhiều hợp đồng ghi: đấu nối, xuất hay bán điện, hay Chủ đầu tư sử dụng nhà máy không cấu thành COD hay bàn giao.",
          "keys": [
            "không cấu thành COD hay bàn giao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In return, the owner keeps test power revenue, a point the contractor may raise when bargaining.",
          "sub": "Đổi lại, Chủ đầu tư hưởng tiền điện bán lúc thử; nhà thầu có thể dùng điểm này khi thương lượng."
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s11",
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
            "at": "l4",
            "fit": [
              "f-who"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l4:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-fire",
            "t": "illus",
            "name": "fire",
            "x": 900,
            "y": 1240,
            "size": 110,
            "at": "l1:puzzle"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Câu đố đầu bài: tủ cháy",
            "x": 1030,
            "y": 1270,
            "size": 46,
            "at": "l1:puzzle+200"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Thường: nhà thầu sửa",
            "x": 900,
            "y": 1390,
            "size": 54,
            "at": "l2:repairs",
            "color": "accent",
            "hl": [
              {
                "text": "nhà thầu sửa",
                "at": "l2:repairs"
              }
            ]
          },
          {
            "id": "f-tw",
            "t": "text",
            "text": "Trừ: người CĐT tự ý thao tác",
            "x": 900,
            "y": 1490,
            "size": 46,
            "at": "l3:without permission",
            "color": "coral"
          },
          {
            "id": "f-who",
            "t": "text",
            "text": "Ai ra lệnh thao tác?",
            "x": 900,
            "y": 1610,
            "size": 64,
            "at": "l4:order",
            "color": "accent",
            "hl": [
              {
                "text": "Ai ra lệnh",
                "at": "l4:who"
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
          "say": "Back to our opening puzzle.",
          "sub": "Quay lại câu đố đầu bài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usual split: the contractor cares for the works until handover, so the contractor repairs.",
          "sub": "Theo cách phân bổ thường gặp: nhà thầu trông nom công trình đến bàn giao, nên nhà thầu sửa.",
          "keys": [
            "nhà thầu sửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The twist: if it's an owner's risk, say owner staff operated without permission, the answer can flip.",
          "sub": "Chỗ lật: nếu sự cố thuộc rủi ro của Chủ đầu tư, như người của Chủ đầu tư tự ý thao tác, đáp án có thể đổi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the deciding question is: who gave the order to operate?",
          "sub": "Vì thế câu hỏi quyết định là: ai ra lệnh thao tác lúc đó?",
          "keys": [
            "ai ra lệnh thao tác"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s12",
      "module": "BRK-10",
      "data": {
        "quote": "Bán điện chưa phải bàn giao, cháy máy chưa chắc là của mình",
        "mark": "chưa phải bàn giao",
        "by": "Rút ra ở chặng ba",
        "illus": "high-voltage"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Selling power isn't handover. A burnt machine isn't necessarily yours.",
          "sub": "Bán điện chưa phải bàn giao, cháy máy chưa chắc là của mình.",
          "keys": [
            "chưa phải bàn giao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Stop three, in one line.",
          "sub": "Chặng ba, gói trong một câu."
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
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l3",
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
            "text": "④ Đêm thứ Tư · Ai ra lệnh?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:night"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "warning",
                "thermometer"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:alarm",
            "caption": "Đêm thứ Tư · báo động máy biến áp",
            "icon": "thermometer"
          },
          {
            "id": "g-cd",
            "t": "text",
            "text": "Trước bàn giao: theo chỉ dẫn",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l1:instructions",
            "hl": [
              {
                "text": "theo chỉ dẫn",
                "at": "l1:instructions"
              }
            ]
          },
          {
            "id": "g-rr",
            "t": "text",
            "text": "Sai sót người CĐT = rủi ro CĐT",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l2:mistakes",
            "color": "coral"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "mẫu hợp đồng quốc tế 2017",
            "x": 2028,
            "y": 1395,
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
          "say": "Stop four, Wednesday night. Before handover, owner staff commission under the contractor's instructions and supervision.",
          "sub": "Chặng bốn, đêm thứ Tư. Trước bàn giao, người của Chủ đầu tư chạy thử theo chỉ dẫn, dưới giám sát của nhà thầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Why it matters: in the twenty seventeen model, acts or mistakes of owner staff are the owner's risk.",
          "sub": "Vì sao quan trọng: theo mẫu 2017, hành vi, sai sót của nhân sự Chủ đầu tư là rủi ro của Chủ đầu tư.",
          "keys": [
            "rủi ro của Chủ đầu tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then an alarm: transformer overheating. The contractor's engineer isn't here yet.",
          "sub": "Rồi báo động: máy biến áp quá nhiệt. Kỹ sư nhà thầu chưa tới."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Two ways to handle this. Only one leaves a trail.",
          "sub": "Có hai cách xử lý. Chỉ một cách để lại dấu vết.",
          "face": "worried"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Báo động quá nhiệt, trước bàn giao",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Tự giảm tải theo kinh nghiệm, không ghi ai ra lệnh",
        "right": "Gọi kỹ sư trực, theo quy trình đã duyệt, ghi nhật ký",
        "wrongIllus": "thermometer",
        "rightIllus": "telephone-receiver"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Option A: cut load by gut feel, no record.",
          "sub": "Cách A: tự giảm tải theo kinh nghiệm, không ghi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Option B: call, follow procedure, log it.",
          "sub": "Cách B: gọi kỹ sư trực, theo quy trình, ghi nhật ký.",
          "keys": [
            "ghi nhật ký"
          ]
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-a",
            "t": "text",
            "text": "A: không gì để phản bác",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l2:nothing",
            "color": "coral"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: giờ gọi, người ra lệnh",
            "x": 2028,
            "y": 1560,
            "size": 40,
            "at": "l3:call time"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ việc sửa về nhà thầu",
            "x": 2028,
            "y": 1630,
            "size": 44,
            "at": "l3:back",
            "color": "accent"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Theo lệnh ai, ghi tên người đó",
            "x": 2028,
            "y": 1780,
            "size": 50,
            "at": "l4:name",
            "color": "accent",
            "hl": [
              {
                "text": "ghi tên",
                "at": "l4:name"
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
          "say": "Next morning, the transformer shows damage.",
          "sub": "Sáng hôm sau, máy biến áp có dấu hiệu hỏng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option A: the contractor says your crew broke procedure, and the records have nothing to say back.",
          "sub": "Cách A: nhà thầu nói đội bạn sai quy trình, hồ sơ không có gì để phản bác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option B: the log shows the call time, who gave the order, every step. The repair goes back to the contractor.",
          "sub": "Cách B: nhật ký có giờ gọi, tên người ra lệnh, từng thao tác. Việc sửa quay về nhà thầu.",
          "keys": [
            "quay về nhà thầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: before handover, whoever gives the order, write their name down.",
          "sub": "Rút ra: trước bàn giao, làm theo lệnh ai thì ghi tên người đó.",
          "keys": [
            "ghi tên người đó"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "text": "⑤ Thứ Năm · Bảng kiểm ca",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "clipboard"
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
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:thursday",
            "caption": "Thứ Năm · phòng điều khiển",
            "icon": "clipboard"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1265,
            "w": 44,
            "h": 44,
            "at": "l2:assignment",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1247,
            "size": 56,
            "at": "l2:assignment+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Văn bản phân công, ai giám sát",
            "x": 4066,
            "y": 1257,
            "size": 38,
            "at": "l2:assignment+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1350,
            "w": 44,
            "h": 44,
            "at": "l2:procedures",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1332,
            "size": 56,
            "at": "l2:procedures+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Quy trình, giới hạn đã duyệt",
            "x": 4066,
            "y": 1342,
            "size": 38,
            "at": "l2:procedures+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1435,
            "w": 44,
            "h": 44,
            "at": "l3:number",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1417,
            "size": 56,
            "at": "l3:number+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Số kỹ sư trực từng ca",
            "x": 4066,
            "y": 1427,
            "size": 38,
            "at": "l3:number+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1520,
            "w": 44,
            "h": 44,
            "at": "l3:log",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1502,
            "size": 56,
            "at": "l3:log+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Nhật ký: giờ, người ra lệnh",
            "x": 4066,
            "y": 1512,
            "size": 38,
            "at": "l3:log+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1605,
            "w": 44,
            "h": 44,
            "at": "l4:emergency",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1587,
            "size": 56,
            "at": "l4:emergency+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Khẩn cấp, chưa gọi được",
            "x": 4066,
            "y": 1597,
            "size": 38,
            "at": "l4:emergency+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Thursday. Thảo writes a checklist before her crew takes any more test shifts.",
          "sub": "Chặng năm, thứ Năm. Thảo lập bảng kiểm trước khi đội đứng thêm ca chạy thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: a written assignment, under whose supervision. Two: approved test procedures and limits.",
          "sub": "Một: văn bản phân công, dưới giám sát của ai. Hai: quy trình chạy thử và giới hạn vận hành đã duyệt.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three: the duty engineer's number, every shift. Four: a log of time, who ordered, what was done.",
          "sub": "Ba: số điện thoại kỹ sư trực của nhà thầu từng ca. Bốn: nhật ký ghi giờ, người ra lệnh, thao tác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And five: what we do in an emergency if the contractor can't be reached.",
          "sub": "Và năm: xử lý thế nào khi khẩn cấp mà chưa liên lạc được nhà thầu.",
          "face": "thinking"
        }
      ],
      "ref": "p13"
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
            "text": "⑥ Thứ Sáu · Bảo hiểm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "i-cdt",
            "t": "text",
            "text": "CĐT mua bảo hiểm công trình",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l2:buys",
            "hl": [
              {
                "text": "bảo hiểm công trình",
                "at": "l2:insurance"
              }
            ]
          },
          {
            "id": "i-giao",
            "t": "text",
            "text": "có quyền giao nhà thầu mua",
            "x": 5964,
            "y": 1325,
            "size": 40,
            "at": "l2:assign",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Điều 10 Luật Xây dựng 135/2025/QH15",
            "x": 5964,
            "y": 1385,
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
          "say": "Stop six, Friday: insurance.",
          "sub": "Chặng sáu, thứ Sáu: bảo hiểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The twenty twenty-five Construction Law: the owner buys works insurance during construction, and may assign the contractor.",
          "sub": "Luật Xây dựng 2025: Chủ đầu tư mua bảo hiểm công trình trong thời gian xây dựng, có quyền giao nhà thầu mua.",
          "keys": [
            "bảo hiểm công trình"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s18",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Nghị định 220/2026/NĐ-CP",
        "detail": "Sửa quy định bảo hiểm bắt buộc · từ 01/7/2026",
        "illus": "shield",
        "around": [
          "page-facing-up",
          "spiral-calendar"
        ],
        "icon": "shield"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Mandatory insurance rules: amended by Decree two twenty.",
          "sub": "Bảo hiểm bắt buộc: đã sửa bởi Nghị định 220/2026/NĐ-CP."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "From July first. Check current lists and fees.",
          "sub": "Từ 01/7/2026. Danh mục, mức phí: kiểm văn bản hiện hành.",
          "keys": [
            "kiểm văn bản hiện hành"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "i-bs",
            "t": "text",
            "text": "Nhà thầu mua; CĐT, bên cho vay được bảo hiểm bổ sung",
            "x": 5964,
            "y": 1470,
            "size": 30,
            "at": "l1:additional",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-bg",
            "t": "text",
            "text": "Bàn giao: bảo hiểm XD hết, đổi",
            "x": 5964,
            "y": 1530,
            "size": 42,
            "at": "l2:ends",
            "color": "coral"
          },
          {
            "id": "i-hoi",
            "t": "text",
            "text": "Hỏi: hợp đồng nào? Báo ai?",
            "x": 5964,
            "y": 1610,
            "size": 42,
            "at": "l3:report",
            "color": "accent",
            "hl": [
              {
                "text": "Báo ai?",
                "at": "l3:report"
              }
            ]
          },
          {
            "id": "i-ds",
            "t": "text",
            "text": "BLDS 2015: điều cụ thể chưa kiểm",
            "x": 6804,
            "y": 1470,
            "size": 42,
            "at": "l4:civil"
          },
          {
            "id": "i-pc",
            "t": "text",
            "text": "Khác luật? Nhờ pháp chế",
            "x": 6804,
            "y": 1550,
            "size": 42,
            "at": "l5:legal",
            "color": "accent",
            "hl": [
              {
                "text": "Nhờ pháp chế",
                "at": "l5:legal"
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
          "say": "In EPC, the contractor usually buys the policies, with the owner and lenders as additional insureds.",
          "sub": "Trong hợp đồng EPC, nhà thầu thường mua bảo hiểm theo phụ lục, ghi Chủ đầu tư và bên cho vay là người được bảo hiểm bổ sung."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Handover is often when construction cover ends or changes.",
          "sub": "Bàn giao thường là lúc phạm vi bảo hiểm thời gian xây dựng kết thúc hoặc đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So ask your insurance team: from handover, which policy covers the plant, and who gets the report?",
          "sub": "Nên hỏi bộ phận bảo hiểm: từ ngày bàn giao, nhà máy được bảo hiểm theo hợp đồng nào, báo sự cố cho ai?",
          "keys": [
            "báo sự cố cho ai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Civil law? The Civil Code twenty fifteen has a risk-timing rule, unchecked in this series.",
          "sub": "Luật dân sự? Bộ luật Dân sự 2015 có quy định về thời điểm chịu rủi ro, điều cụ thể chưa kiểm trong chuỗi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The Construction Law points there for gaps, but contracts usually set the moment. Differences? Ask legal.",
          "sub": "Luật Xây dựng dẫn tới Bộ luật Dân sự cho phần chưa quy định; hợp đồng thường tự ghi mốc. Có vẻ khác? Nhờ pháp chế kiểm.",
          "keys": [
            "Nhờ pháp chế kiểm"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑦ Thứ Hai sau · Bảng trên tường",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8912,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "calendar"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
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
            "at": "l1:monday",
            "caption": "Thứ Hai · phòng điều khiển",
            "icon": "calendar"
          },
          {
            "id": "j-c0b",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 175,
            "h": 80,
            "at": "l2:one",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-c0",
            "t": "text",
            "text": "Mốc",
            "x": 7944,
            "y": 1276,
            "size": 32,
            "at": "l2:one+200"
          },
          {
            "id": "j-c1b",
            "t": "box",
            "x": 8122,
            "y": 1260,
            "w": 175,
            "h": 80,
            "at": "l3:two",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-c1",
            "t": "text",
            "text": "Sở hữu",
            "x": 8134,
            "y": 1276,
            "size": 32,
            "at": "l3:two+200"
          },
          {
            "id": "j-c2b",
            "t": "box",
            "x": 8312,
            "y": 1260,
            "w": 175,
            "h": 80,
            "at": "l3:three",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "j-c2",
            "t": "text",
            "text": "Rủi ro",
            "x": 8324,
            "y": 1276,
            "size": 32,
            "at": "l3:three+200"
          },
          {
            "id": "j-c3b",
            "t": "box",
            "x": 8502,
            "y": 1260,
            "w": 175,
            "h": 80,
            "at": "l4:four",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-c3",
            "t": "text",
            "text": "Bảo hiểm",
            "x": 8514,
            "y": 1276,
            "size": 32,
            "at": "l4:four+200"
          },
          {
            "id": "j-c4b",
            "t": "box",
            "x": 8692,
            "y": 1260,
            "w": 175,
            "h": 80,
            "at": "l4:five",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-c4",
            "t": "text",
            "text": "Người CĐT",
            "x": 8704,
            "y": 1276,
            "size": 32,
            "at": "l4:five+200"
          },
          {
            "id": "j-r1",
            "t": "text",
            "text": "Chạy thử",
            "x": 7944,
            "y": 1380,
            "size": 34,
            "at": "l6:testing"
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "CĐT",
            "x": 8134,
            "y": 1380,
            "size": 34,
            "at": "l6:owned"
          },
          {
            "id": "j-r3",
            "t": "text",
            "text": "Nhà thầu",
            "x": 8324,
            "y": 1380,
            "size": 34,
            "at": "l6:risk",
            "color": "accent",
            "hl": [
              {
                "text": "Nhà thầu",
                "at": "l6:contractor"
              }
            ]
          },
          {
            "id": "j-r5",
            "t": "text",
            "text": "Theo chỉ dẫn",
            "x": 8704,
            "y": 1380,
            "size": 30,
            "at": "l7:column"
          },
          {
            "id": "j-ans",
            "t": "text",
            "text": "Đáp án B, đọc trên tường",
            "x": 7932,
            "y": 1490,
            "size": 50,
            "at": "l7:wall",
            "color": "accent",
            "hl": [
              {
                "text": "Đáp án B",
                "at": "l7:answer b"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Rủi ro: theo hợp đồng",
            "x": 7932,
            "y": 1580,
            "size": 38,
            "at": "l8:guard",
            "hl": [
              {
                "text": "theo hợp đồng",
                "at": "l8:contract"
              }
            ]
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Treo tường, không nằm ngăn kéo",
            "x": 7932,
            "y": 1670,
            "size": 46,
            "at": "l9:wall",
            "color": "accent",
            "hl": [
              {
                "text": "Treo tường",
                "at": "l9:wall"
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
          "say": "Last stop, next Monday. Ms Hoa draws a timeline on the control room whiteboard.",
          "sub": "Chặng cuối, thứ Hai tuần sau. Cô Hoa vẽ một dòng thời gian lên bảng phòng điều khiển."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Column one, milestones: delivery, installed, energised, testing, COD, handover.",
          "sub": "Cột một, các mốc: giao thiết bị, lắp xong, đóng điện, chạy thử, COD, bàn giao."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Column two: who owns it. Column three: risk and care, contractor until handover, owner after.",
          "sub": "Cột hai: sở hữu thuộc ai. Cột ba: rủi ro, trông nom: nhà thầu đến bàn giao, Chủ đầu tư từ bàn giao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Column four: which insurance is live. Column five: what owner staff may do, on whose instructions.",
          "sub": "Cột bốn: bảo hiểm nào đang hiệu lực. Cột năm: người của Chủ đầu tư được làm gì, theo chỉ dẫn của ai."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Every contract amendment, I update this board. Right, done!",
          "sub": "Hợp đồng có phụ lục sửa đổi là cô cập nhật bảng. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Now the panel question answers itself. Testing row: owned by us, risk with the contractor.",
          "sub": "Giờ câu hỏi cái tủ tự có đáp án. Dòng chạy thử: sở hữu của mình, rủi ro ở nhà thầu.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Answer B, read straight off the wall. Column five catches anyone acting off script.",
          "sub": "Đáp án B, đọc thẳng trên tường. Ai tự ý thao tác, cột năm sẽ cho thấy."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "What's yours, you guard tight? Guard it, yes. But the risk sits where the contract puts it.",
          "sub": "“Của mình thì giữ bo bo”? Cứ giữ. Nhưng rủi ro nằm đúng chỗ hợp đồng đặt nó.",
          "keys": [
            "Của mình thì giữ bo bo"
          ]
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "Lesson: the line of responsibility hangs on the wall, not in a drawer.",
          "sub": "Rút ra: ranh giới trách nhiệm phải treo trên tường, không nằm trong ngăn kéo.",
          "keys": [
            "treo trên tường"
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:ownership",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:selling",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:order",
            "fit": "G",
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
            "x": 4756,
            "y": 160,
            "at": "l1:ownership"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 600,
            "y": 1320,
            "at": "l2:selling"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2768,
            "y": 1780,
            "at": "l3:order"
          },
          {
            "id": "z-src-note",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào. Việc cụ thể, đọc chính hợp đồng của bạn và hỏi pháp chế.",
            "x": 7932,
            "y": 1805,
            "size": 26,
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
          "say": "So: ownership often moves early, but risk usually stays with the contractor until handover.",
          "sub": "Tóm lại: sở hữu thường chuyển sớm, nhưng rủi ro thường ở nhà thầu đến bàn giao.",
          "keys": [
            "rủi ro thường ở nhà thầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Selling power isn't handover, and a deemed handover can pull risk early. Know your fences.",
          "sub": "Bán điện chưa phải bàn giao; bàn giao mặc nhiên có thể kéo rủi ro về sớm. Biết hàng rào của mình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before handover, log who gave each order. General info only: read your contract and ask legal.",
          "sub": "Trước bàn giao, ghi tên người ra lệnh. Bài là kiến thức chung: đọc chính hợp đồng của bạn, hỏi pháp chế.",
          "keys": [
            "ghi tên người ra lệnh"
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
        "q": "The contractor claims risk passed because you used the plant, how should you respond?",
        "options": [
          "Stop all operation at once and refuse to speak until the lawyers arrive",
          "Agree, because using a plant always means accepting all of its risks",
          "Point to the clause saying use of the plant is not handover until certified"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "high-voltage",
        "why": "Nhiều hợp đồng ghi việc CĐT sử dụng nhà máy không cấu thành bàn giao cho tới khi có chứng nhận. Viện dẫn đúng điều khoản là cách trả lời có căn cứ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The contractor claims risk passed because you used the plant, how should you respond?",
          "sub": "Nhà thầu nói rủi ro đã chuyển vì bên bạn đã sử dụng nhà máy, bạn nên trả lời thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Using the plant is not handover.",
          "sub": "Dùng nhà máy chưa phải bàn giao."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[37]"
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
          "say": "Right now: find three clauses, on ownership, risk and deemed handover. Then draw the timeline for your team.",
          "sub": "Việc làm ngay: tìm ba điều khoản chuyển sở hữu, chuyển rủi ro, bàn giao mặc nhiên, rồi vẽ dòng thời gian cho đội.",
          "keys": [
            "ba điều khoản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: a defect in the warranty period, who to tell, how, and who fixes it. Now, forty questions below!",
          "sub": "Bài sau: phát hiện lỗi trong thời hạn bảo đảm, báo ai, báo thế nào, ai sửa. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI (đào sâu 2) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (đoán sai, câu đố p8): tủ đã trả đủ tiền thuộc CĐT, chưa bàn giao, đang bán điện, chập cháy lan dãy cáp — ai sửa? A CĐT / B nhà thầu; lặng 1,2 s; lật ở s02 (thường B), chỗ lật thêm ở s11 (người CĐT tự ý thao tác → câu hỏi ai ra lệnh); khép vòng s20 (đọc đáp án trên bảng dòng thời gian treo tường). Dòng thời gian: TUẦN CUỐI CHẠY THỬ (T2 sở hữu ≠ rủi ro p1–p2 → tối T2 tin nhắn Sam “tự trông nhé”, “Khoan đã!” Dũng p3–p4 → T3 cô Hoa, bàn giao mặc nhiên, hàng rào p5–p6 → T4 bán điện ≠ bàn giao, câu đố p7–p9 → đêm T4 báo động quá nhiệt Cách A/B p10–p12 → T5 bảng kiểm ca p13 → T6 bảo hiểm, BLDS p14–p16 → T2 sau cô Hoa vẽ bảng năm cột p17–p18). Nhân vật: w145/_series/epc-om-operator.md (Thảo, Dũng, cô Hoa lên hình; Sam chỉ qua tin nhắn). Tục ngữ mở/khép: “Của mình thì giữ bo bo” → của mình chưa chắc là rủi ro của mình. BRK: 02 (của ai ≠ ai chịu rủi ro), 10 (rút ra chặng ba), 04 (Cách A/B báo động), 09 (NĐ 220/2026). Số chỉ lấy từ bài: mẫu 2017, Luật XD 135/2025 Điều 10, NĐ 220/2026 hiệu lực 01/7/2026, BLDS 2015, [ ] ngày giữ nguyên. Câu đố questions[37].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
