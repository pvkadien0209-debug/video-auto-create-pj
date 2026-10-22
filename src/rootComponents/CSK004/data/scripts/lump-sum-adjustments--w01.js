// lump-sum-adjustments--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "lump-sum-adjustments--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "epc-finance",
    "slug": "lump-sum-adjustments",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Giá trọn gói thì khi nào vẫn bị điều chỉnh?",
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
            "id": "a-q",
            "t": "text",
            "text": "Trọn gói = không bao giờ đổi?",
            "x": 60,
            "y": 60,
            "size": 76,
            "at": "l1:lump",
            "hl": [
              {
                "text": "không bao giờ đổi",
                "at": "l1:ever"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 220,
            "w": 760,
            "h": 130,
            "at": "l2:A",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A. Chốt là chốt",
            "x": 95,
            "y": 252,
            "size": 60,
            "at": "l2:A+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 900,
            "y": 220,
            "w": 760,
            "h": 130,
            "at": "l2:B",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B. Vẫn đổi, qua 3 cửa",
            "x": 935,
            "y": 252,
            "size": 56,
            "at": "l2:B+200"
          },
          {
            "id": "a-ax",
            "t": "strike",
            "over": "a-a",
            "at": "l3:doors"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-b"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:B"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You sign a lump sum price. Can it ever change?",
          "sub": "Bạn ký giá trọn gói. Giá ấy có bao giờ đổi không?",
          "keys": [
            "giá trọn gói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: fixed is fixed. B: it still changes. Take a guess.",
          "sub": "A: chốt là chốt. B: vẫn đổi. Đoán thử xem."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "B. It changes, but only through three doors.",
          "sub": "B. Vẫn đổi, nhưng chỉ qua ba cửa.",
          "keys": [
            "ba cửa"
          ]
        }
      ],
      "ref": "intro,p4"
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
            "y": 380,
            "w": 600,
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
                "page-facing-up",
                "chart-increasing"
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
            "at": "l1",
            "caption": "Sáng thứ Hai · ba đề nghị tăng giá",
            "icon": "chart-increasing"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 60,
            "y": 430,
            "size": 50,
            "at": "l4:book",
            "color": "accent",
            "hl": [
              {
                "text": "mách có chứng",
                "at": "l4:prove"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ tăng giá: có cửa, có giấy",
            "x": 60,
            "y": 520,
            "size": 44,
            "at": "l4:door",
            "hl": [
              {
                "text": "có giấy",
                "at": "l4:paper"
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
          "say": "Meet Thảo, the owner's finance officer on our wind farm EPC contract.",
          "sub": "Đây là Thảo, chuyên viên tài chính của Chủ đầu tư, phụ trách hợp đồng EPC nhà máy điện gió."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lump sum, they said. So why are three price increase requests on my desk?",
          "sub": "Trọn gói cơ mà. Sao trên bàn em có tới ba đề nghị tăng giá?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One week, three requests. Let's open them one by one.",
          "sub": "Một tuần, ba đề nghị. Ta mở từng cái."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: speak from the book, prove with evidence. For prices: a door, a clause, a paper.",
          "sub": "Ông bà dặn: “Nói có sách, mách có chứng.” Tăng giá cũng vậy: có cửa, có điều, có giấy.",
          "keys": [
            "Nói có sách, mách có chứng"
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
            "text": "Giá đổi qua cửa nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:doors",
            "hl": [
              {
                "text": "cửa nào",
                "at": "l1:doors"
              }
            ]
          },
          {
            "id": "b-ls",
            "t": "text",
            "text": "Trọn gói: đã gồm thuế, chở, công",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l2:taxes"
          },
          {
            "id": "b-base",
            "t": "text",
            "text": "= con số gốc: ngân sách, vay",
            "x": 2028,
            "y": 245,
            "size": 44,
            "at": "l3:base",
            "color": "accent",
            "hl": [
              {
                "text": "con số gốc",
                "at": "l3:base"
              }
            ]
          },
          {
            "id": "b-cl",
            "t": "text",
            "text": "“không điều chỉnh… trừ Điều [ ]”",
            "x": 2028,
            "y": 330,
            "size": 44,
            "at": "l4:except",
            "color": "muted"
          },
          {
            "id": "b-sil",
            "t": "text",
            "text": "NĐ 210 Điều 11 · FIDIC Silver",
            "x": 2868,
            "y": 170,
            "size": 40,
            "at": "l5:Decree"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: “hợp lý không?”",
            "x": 2868,
            "y": 250,
            "size": 44,
            "at": "l6:fair",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l6:Ask"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: cửa nào, điều nào?",
            "x": 2868,
            "y": 330,
            "size": 48,
            "at": "l6:which door",
            "color": "accent",
            "hl": [
              {
                "text": "cửa nào, điều nào",
                "at": "l6:clause"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Điều 11 Nghị định 210/2026/NĐ-CP; bài phân tích FIDIC 2017 của giới luật sư quốc tế",
            "x": 2028,
            "y": 748,
            "size": 26,
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
          "say": "So when can a lump sum EPC price still change? Through which doors?",
          "sub": "Vậy giá EPC trọn gói khi nào vẫn đổi? Qua những cửa nào?",
          "keys": [
            "Qua những cửa nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lump sum means taxes, transport, packing and labour included. Quantity and material risk stay with the contractor.",
          "sub": "Trọn gói là đã gồm thuế của nhà thầu, vận chuyển, đóng gói, nhân công; rủi ro khối lượng, giá vật tư thuộc nhà thầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For finance, it is the base number for budget, loan file and payment schedule.",
          "sub": "Với tài chính, đó là con số gốc để lập ngân sách, hồ sơ vay, lịch thanh toán.",
          "keys": [
            "con số gốc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A typical clause: fixed, not adjusted for labour, materials, freight or exchange rates, except under Variations and Change in Law.",
          "sub": "Câu mẫu: giá cố định, không điều chỉnh vì nhân công, vật tư, cước, tỷ giá, trừ Điều Thay đổi và Thay đổi Pháp luật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten calls lump sum common for EPC, not mandatory. FIDIC's Silver Book is lump sum too.",
          "sub": "Nghị định 210/2026 nói trọn gói phổ biến cho EPC, không bắt buộc. FIDIC Silver Book 2017 cũng là giá trọn gói."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So when a request lands, don't ask: is it fair? Ask: which door, which clause?",
          "sub": "Nên khi có đề nghị tăng giá, đừng hỏi “có hợp lý không”, mà hỏi “đi cửa nào, theo điều nào”.",
          "keys": [
            "đi cửa nào, theo điều nào"
          ]
        }
      ],
      "ref": "p1,p2,p3,p4"
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
            "id": "b-w0",
            "t": "box",
            "x": 2028,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l2:Variations",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-w1",
            "t": "box",
            "x": 2358,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l2:change",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-w2",
            "t": "box",
            "x": 2688,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l2:law",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-w3",
            "t": "box",
            "x": 3018,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l2:mechanism",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-w4",
            "t": "box",
            "x": 3348,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l3:Friday",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-wt0",
            "t": "text",
            "text": "Thứ Hai",
            "x": 2068,
            "y": 538,
            "size": 44,
            "at": "l2:Variations+200"
          },
          {
            "id": "b-wt1",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2398,
            "y": 538,
            "size": 44,
            "at": "l2:change+200"
          },
          {
            "id": "b-wt2",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2728,
            "y": 538,
            "size": 44,
            "at": "l2:law+200"
          },
          {
            "id": "b-wt3",
            "t": "text",
            "text": "Thứ Năm",
            "x": 3058,
            "y": 538,
            "size": 44,
            "at": "l2:mechanism+200"
          },
          {
            "id": "b-wt4",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 3388,
            "y": 538,
            "size": 44,
            "at": "l3:Friday+200"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Thay đổi · Luật đổi · Điều chỉnh giá",
            "x": 2028,
            "y": 640,
            "size": 44,
            "at": "l2:three",
            "hl": [
              {
                "text": "Thay đổi",
                "at": "l2:Variations"
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
          "say": "Ask the door first, the number second.",
          "sub": "Hỏi cửa trước, hỏi số sau.",
          "keys": [
            "Hỏi cửa trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The three doors: Variations, change in law, and the agreed price adjustment mechanism. Outside them, the risk is the contractor's.",
          "sub": "Ba cửa: Thay đổi, thay đổi pháp luật, và cơ chế điều chỉnh giá đã thoả thuận. Ngoài ba cửa, rủi ro thuộc nhà thầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday to Friday, we walk through them with Thảo.",
          "sub": "Từ thứ Hai đến thứ Sáu, ta đi qua từng cửa cùng Thảo."
        }
      ],
      "ref": "p4,p5"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Đường nội bộ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
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
                  "id": "thao",
                  "side": "left",
                  "face": "thinking"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "receipt",
                "construction"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Sam",
            "caption": "Thứ Hai · Lệnh Thanh toán mới",
            "icon": "receipt"
          },
          {
            "id": "c-line",
            "t": "text",
            "text": "+ “phát sinh đường nội bộ”",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:road",
            "color": "coral",
            "hl": [
              {
                "text": "phát sinh",
                "at": "l2:extra"
              }
            ]
          },
          {
            "id": "c-min",
            "t": "text",
            "text": "Chỉ có: biên bản họp",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l4:minutes"
          },
          {
            "id": "c-min2",
            "t": "text",
            "text": "“thống nhất phương án”",
            "x": 4036,
            "y": 335,
            "size": 42,
            "at": "l4:agreed",
            "color": "muted"
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "Chỉ thị thay đổi: không thấy",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l4:instruction",
            "color": "coral",
            "hl": [
              {
                "text": "không thấy",
                "at": "l4:none"
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
          "say": "Monday. Meet Sam, from the EPC contractor, with this month's payment order.",
          "sub": "Thứ Hai. Đây là Sam, người của nhà thầu EPC, mang Lệnh Thanh toán tháng này.",
          "keys": [
            "Lệnh Thanh toán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "One new line: extra works, the internal road. Your side agreed at the site meeting.",
          "sub": "Có một dòng mới: phát sinh đường nội bộ. Bên chị đã đồng ý ở buổi họp công trường.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Let me check the file first.",
          "sub": "Để em kiểm hồ sơ đã."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She digs. Only meeting minutes saying the plan was agreed. No written variation instruction. None.",
          "sub": "Cô lục hồ sơ. Chỉ có biên bản họp ghi “thống nhất phương án”. Chỉ thị thay đổi bằng văn bản: không thấy.",
          "keys": [
            "không thấy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Who agreed? Ms. Hoa, the Owner's Representative. Rewind two months, to the site meeting.",
          "sub": "Ai đồng ý? Cô Hoa, Đại diện Chủ đầu tư. Tua về hai tháng trước, buổi họp công trường.",
          "keys": [
            "Đại diện Chủ đầu tư"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s05",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Hai tháng trước · họp công trường",
        "actors": [
          {
            "id": "hoa",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đồng ý miệng làm thêm đường",
          "why": "Không có chỉ thị bằng văn bản nêu rõ là Thay đổi; biên bản họp chỉ ghi “thống nhất phương án”.",
          "rule": "Không có giấy chỉ thị, chưa có dòng tiền"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Okay, build that road section too. Go ahead!",
          "sub": "Rồi, làm luôn đoạn đường đó nha!",
          "pose": "point",
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
          "say": "A nod at a meeting is not a Variation. Where is the written instruction?",
          "sub": "Gật đầu trong cuộc họp chưa phải Thay đổi. Chỉ thị bằng văn bản đâu?",
          "keys": [
            "Chỉ thị bằng văn bản"
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
          "who": "hoa",
          "say": "Send me a variation proposal with a price. I'll issue a written instruction.",
          "sub": "Gửi tôi đề xuất thay đổi kèm giá. Tôi ra chỉ thị bằng văn bản.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. No written instruction, no money line.",
          "sub": "Đúng. Không có giấy chỉ thị, chưa có dòng tiền.",
          "phase": "redo",
          "keys": [
            "chưa có dòng tiền"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p10,p6"
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
            "text": "② Thứ Ba · Định giá Thay đổi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Hợp lệ: văn bản, ghi “Thay đổi”",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l2:writing",
            "hl": [
              {
                "text": "ghi “Thay đổi”",
                "at": "l2:saying"
              }
            ]
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "Lỗi nhà thầu · phát triển thiết kế",
            "x": 5964,
            "y": 245,
            "size": 40,
            "at": "l2:fault",
            "color": "muted"
          },
          {
            "id": "d-xx",
            "t": "strike",
            "over": "d-x",
            "at": "l2:design+300"
          },
          {
            "id": "d-b0",
            "t": "badge",
            "n": 1,
            "x": 5994,
            "y": 360,
            "at": "l3:agree"
          },
          {
            "id": "d-o0",
            "t": "text",
            "text": "Hai bên thoả thuận",
            "x": 6044,
            "y": 335,
            "size": 42,
            "at": "l3:agree+200"
          },
          {
            "id": "d-b1",
            "t": "badge",
            "n": 2,
            "x": 5994,
            "y": 440,
            "at": "l3:rates"
          },
          {
            "id": "d-o1",
            "t": "text",
            "text": "Đơn giá trong hợp đồng",
            "x": 6044,
            "y": 415,
            "size": 42,
            "at": "l3:rates+200"
          },
          {
            "id": "d-b2",
            "t": "badge",
            "n": 3,
            "x": 5994,
            "y": 520,
            "at": "l4:competitive"
          },
          {
            "id": "d-o2",
            "t": "text",
            "text": "Chào giá cạnh tranh + phí có trần",
            "x": 6044,
            "y": 495,
            "size": 42,
            "at": "l4:competitive+200"
          },
          {
            "id": "d-b3",
            "t": "badge",
            "n": 4,
            "x": 5994,
            "y": 600,
            "at": "l4:determines"
          },
          {
            "id": "d-o3",
            "t": "text",
            "text": "Chủ đầu tư xác định, hợp lý",
            "x": 6044,
            "y": 575,
            "size": 42,
            "at": "l4:determines+200"
          },
          {
            "id": "d-cut",
            "t": "text",
            "text": "Cắt việc → khấu trừ",
            "x": 6804,
            "y": 335,
            "size": 42,
            "at": "l5:Cut",
            "color": "accent"
          },
          {
            "id": "d-pr",
            "t": "text",
            "text": "Kéo dài: không lợi nhuận",
            "x": 6804,
            "y": 415,
            "size": 42,
            "at": "l5:profit",
            "color": "coral"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "Chào giá không huỷ ngang [ ] ngày",
            "x": 6804,
            "y": 520,
            "size": 36,
            "at": "l6:irrevocable",
            "hl": [
              {
                "text": "không huỷ ngang",
                "at": "l6:irrevocable"
              }
            ]
          },
          {
            "id": "d-cp",
            "t": "text",
            "text": "Thông báo đúng hạn → mới được trả",
            "x": 6804,
            "y": 590,
            "size": 36,
            "at": "l6:notice"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: tài liệu về FIDIC 2017 (hai đường: chỉ thị / đề xuất)",
            "x": 5964,
            "y": 748,
            "size": 26,
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
          "say": "Tuesday. Thảo asks Mr. Bình's favourite question: how is a Variation priced?",
          "sub": "Thứ Ba. Thảo hỏi câu Bác Bình hay hỏi: Thay đổi được định giá thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Valid only in writing, saying it is a Variation. Contractor fault or normal design development? No money.",
          "sub": "Chỉ hợp lệ khi bằng văn bản và nêu rõ là Thay đổi. Lỗi nhà thầu, phát triển thiết kế thông thường: không có tiền.",
          "keys": [
            "nêu rõ là Thay đổi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pricing order: first, the parties agree. Failing that, the contract's unit rates.",
          "sub": "Thứ tự định giá: trước hết hai bên thoả thuận. Không được thì dùng đơn giá trong hợp đồng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No unit rate? A competitive quote with a capped fee. Last, the owner determines, reasonably.",
          "sub": "Chưa có đơn giá? Chào giá cạnh tranh, phí quản lý có trần. Cuối cùng chủ đầu tư xác định, hợp lý."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cut work means a deduction. Prolongation costs carry no profit.",
          "sub": "Cắt bớt việc thì được khấu trừ. Chi phí kéo dài không gồm lợi nhuận."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Ask for an irrevocable quote for some days, and check the notice condition precedent.",
          "sub": "Đề xuất của nhà thầu nên là chào giá không huỷ ngang trong [ ] ngày; kiểm cả điều kiện thông báo đúng hạn.",
          "keys": [
            "không huỷ ngang"
          ]
        }
      ],
      "ref": "p6,p7,p8"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Sửa một câu",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Làm việc phát sinh theo yêu cầu",
        "right": "Chỉ thị bằng văn bản, nêu rõ là Thay đổi",
        "wrongIllus": "speaking-head",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: works arising at the owner's request.",
          "sub": "Trước: làm việc phát sinh theo yêu cầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: only a written instruction named a Variation.",
          "sub": "Sau: chỉ chỉ thị bằng văn bản, nêu rõ là Thay đổi.",
          "keys": [
            "nêu rõ là Thay đổi"
          ]
        }
      ],
      "ref": "p11"
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
            "text": "Có tên, có giấy, có người ký",
            "x": 5964,
            "y": 690,
            "size": 50,
            "at": "l2:name",
            "color": "accent",
            "hl": [
              {
                "text": "có người ký",
                "at": "l2:signer"
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
          "say": "The new sentence stops every chat from becoming a payable amount.",
          "sub": "Câu sau chặn việc biến mọi lời trao đổi thành khoản phải trả."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A Variation needs a name, a paper and a signer.",
          "sub": "Thay đổi phải có tên, có giấy, có người ký.",
          "keys": [
            "có tên, có giấy, có người ký"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "text": "③ Thứ Tư · Luật lưới mới",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "high-voltage",
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
                }
              ]
            },
            "at": "l1:letter",
            "caption": "Thứ Tư · thư nhà thầu",
            "icon": "high-voltage"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "Báo trong [ ] ngày, phải tuân thủ",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l3:notifies"
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "Mốc “luật hiện hành”: ngày nào?",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l4:date",
            "color": "accent",
            "hl": [
              {
                "text": "ngày nào",
                "at": "l4:date"
              }
            ]
          },
          {
            "id": "e-in",
            "t": "text",
            "text": "Ban hành trước mốc → đã trong giá",
            "x": 7932,
            "y": 330,
            "size": 40,
            "at": "l4:before"
          },
          {
            "id": "e-fr",
            "t": "text",
            "text": "Phụ lục: “quy chuẩn tại ngày ký”",
            "x": 7932,
            "y": 420,
            "size": 40,
            "at": "l5:freezes",
            "color": "coral",
            "hl": [
              {
                "text": "tại ngày ký",
                "at": "l5:signing"
              }
            ]
          },
          {
            "id": "e-fr2",
            "t": "text",
            "text": "→ thông tư mới = đòi thêm",
            "x": 7932,
            "y": 495,
            "size": 40,
            "at": "l5:circular",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. A letter from Sam: a new grid circular, so a change in law claim.",
          "sub": "Thứ Tư. Thư của Sam: có thông tư lưới mới, nên đòi theo thay đổi pháp luật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "The new grid rule costs us more. We claim money and time.",
          "sub": "Quy định lưới mới làm chúng tôi tốn thêm. Chúng tôi đòi thêm tiền và thời gian.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under the contract, the contractor complies and notifies within some days; the owner decides on a Variation.",
          "sub": "Theo hợp đồng, nhà thầu phải tuân thủ và thông báo trong [ ] ngày; chủ đầu tư quyết có cần Thay đổi không."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Finance asks: what is the cut off date for current law? Rules issued before it are usually priced in.",
          "sub": "Tài chính hỏi: mốc tính “pháp luật hiện hành” là ngày nào? Quy định ban hành trước mốc thường đã nằm trong giá.",
          "keys": [
            "ngày nào"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Trap: the technical appendix freezes grid codes at signing. Then every new circular becomes a claim.",
          "sub": "Cái bẫy: phụ lục kỹ thuật đóng băng quy chuẩn lưới tại ngày ký. Khi đó mọi thông tư mới thành cớ đòi thêm."
        }
      ],
      "ref": "p13,p14"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Chiều thứ Tư · Hai luật",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "thinking"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bình",
            "caption": "Chiều thứ Tư · cà phê với Bác Bình",
            "icon": "balance-scale"
          },
          {
            "id": "f-13",
            "t": "text",
            "text": "Điều 13: chính sách, địa chất",
            "x": 60,
            "y": 1260,
            "size": 38,
            "at": "l3:Article"
          },
          {
            "id": "f-13b",
            "t": "text",
            "text": "= hoàn cảnh thay đổi cơ bản",
            "x": 100,
            "y": 1330,
            "size": 40,
            "at": "l3:fundamental",
            "hl": [
              {
                "text": "cơ bản",
                "at": "l3:fundamental"
              }
            ]
          },
          {
            "id": "f-sb",
            "t": "text",
            "text": "Silver Book: nhà thầu tự chịu",
            "x": 60,
            "y": 1420,
            "size": 42,
            "at": "l4:Silver",
            "color": "coral"
          },
          {
            "id": "f-law",
            "t": "text",
            "text": "Mẫu quốc tế + luật VN → luật sư",
            "x": 60,
            "y": 1510,
            "size": 40,
            "at": "l5:lawyer",
            "color": "accent",
            "hl": [
              {
                "text": "luật sư",
                "at": "l5:lawyer"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Điều 13 Luật Xây dựng 135/2025/QH15; bài phân tích FIDIC",
            "x": 60,
            "y": 1838,
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
          "say": "Wednesday afternoon, coffee with Mr. Bình, the chief accountant.",
          "sub": "Chiều thứ Tư, cà phê với Bác Bình, kế toán trưởng.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Slowly. Our law and the international form don't sing the same tune.",
          "sub": "Từ từ. Luật mình với mẫu quốc tế không hát chung một điệu đâu.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Construction Law Article thirteen: policy changes and unforeseeable ground conditions are a fundamental change of circumstances.",
          "sub": "Điều 13 Luật Xây dựng 2025: Nhà nước đổi chính sách, địa chất bất thường không lường trước là hoàn cảnh thay đổi cơ bản."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yet the Silver Book leaves unforeseen difficulties with the contractor, no price change.",
          "sub": "Còn Silver Book để nhà thầu chịu khó khăn không lường trước, giá không điều chỉnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "International form meets local law? Ask a lawyer.",
          "sub": "Mẫu quốc tế gặp luật trong nước thì hỏi luật sư.",
          "keys": [
            "hỏi luật sư"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l1",
            "fit": [
              "f-18",
              "f-33"
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
            "id": "f-18",
            "t": "text",
            "text": "Điều 18: giá biến động bất thường",
            "x": 60,
            "y": 1610,
            "size": 36,
            "at": "l1:Eighteen"
          },
          {
            "id": "f-24",
            "t": "text",
            "text": "Điều 24: còn phải đối chiếu",
            "x": 60,
            "y": 1680,
            "size": 36,
            "at": "l2:Twenty"
          },
          {
            "id": "f-33",
            "t": "text",
            "text": "Ký trước 01/7/2026 → Điều 33",
            "x": 60,
            "y": 1750,
            "size": 40,
            "at": "l3:July",
            "color": "coral",
            "hl": [
              {
                "text": "Điều 33",
                "at": "l3:thirty"
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
          "say": "Decree two ten, Article eighteen: abnormal price swings mean assessing impact and amending the contract.",
          "sub": "Điều 18 Nghị định 210: biến động giá bất thường vượt dự báo thì đánh giá tác động, sửa đổi hợp đồng theo Điều 84 Luật Xây dựng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty four, per the press, allows lump sum changes for force majeure and more. Check the full text.",
          "sub": "Theo báo chí, Điều 24 cho điều chỉnh giá trọn gói khi bất khả kháng, hoàn cảnh thay đổi cơ bản, đổi phạm vi; cần đối chiếu toàn văn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Signed before July first, twenty twenty six? Transition rules, Article thirty three.",
          "sub": "Hợp đồng ký trước 01/7/2026 còn chịu quy định chuyển tiếp ở Điều 33.",
          "keys": [
            "Điều 33"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Đề nghị tăng giá thiết bị đến sau khi cửa sổ đã đóng?",
        "illus": "window"
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
          "say": "What if a price request arrives after the window has closed?",
          "sub": "Nếu đề nghị tăng giá đến sau khi cửa sổ đã đóng?",
          "keys": [
            "cửa sổ đã đóng"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "text": "⑤ Thứ Năm · Cửa sổ giá",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "window",
                "spiral-calendar"
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
            "at": "l1:window",
            "caption": "Thứ Năm · đề nghị giá thiết bị",
            "icon": "window"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l3:formula",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1247,
            "size": 58,
            "at": "l3:formula+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Đối chiếu công thức, trần [ ]",
            "x": 2096,
            "y": 1255,
            "size": 38,
            "at": "l3:formula+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1343,
            "w": 46,
            "h": 46,
            "at": "l3:dated",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1325,
            "size": 58,
            "at": "l3:dated+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Ngày đề nghị: trong cửa sổ?",
            "x": 2096,
            "y": 1333,
            "size": 38,
            "at": "l3:dated+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1421,
            "w": 46,
            "h": 46,
            "at": "l4:amendment",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1403,
            "size": 58,
            "at": "l4:amendment+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Phụ lục: giá mới, đóng cửa",
            "x": 2096,
            "y": 1411,
            "size": 38,
            "at": "l4:amendment+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1499,
            "w": 46,
            "h": 46,
            "at": "l4:together",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1481,
            "size": 58,
            "at": "l4:together+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Sửa cùng lúc 4 chỗ",
            "x": 2096,
            "y": 1489,
            "size": 38,
            "at": "l4:together+200"
          },
          {
            "id": "g-c4",
            "t": "box",
            "x": 2028,
            "y": 1577,
            "w": 46,
            "h": 46,
            "at": "l5:index",
            "stroke": 5
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1559,
            "size": 58,
            "at": "l5:index+600",
            "color": "accent"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "Cập nhật chỉ mục tiền",
            "x": 2096,
            "y": 1567,
            "size": 38,
            "at": "l5:index+200"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "định nghĩa, giá, mốc, bảo lãnh",
            "x": 2028,
            "y": 1660,
            "size": 30,
            "at": "l4:together",
            "color": "muted"
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Mở có hạn, đóng có giấy",
            "x": 2028,
            "y": 1730,
            "size": 50,
            "at": "l6:paper",
            "color": "accent",
            "hl": [
              {
                "text": "đóng có giấy",
                "at": "l6:paper"
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
          "say": "Thursday. Sam's third letter: adjust the main equipment price, under the agreed window.",
          "sub": "Thứ Năm. Thư thứ ba của Sam: điều chỉnh giá thiết bị chính theo cửa sổ đã thoả thuận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Window open when, closed when? Who proposes, with which papers? What cap?",
          "sub": "Cửa sổ mở ngày nào, đóng ngày nào? Ai đề nghị, kèm chứng từ gì? Trần bao nhiêu?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her steps: match the formula and cap. Check the request is dated inside the window.",
          "sub": "Các bước: đối chiếu công thức và trần [ ]. Kiểm ngày đề nghị còn trong cửa sổ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sign an amendment stating the window is closed, and fix price definition, appendices, milestones and guarantee together.",
          "sub": "Lập phụ lục ghi giá mới, nêu rõ cửa sổ đã đóng; sửa cùng lúc định nghĩa, phụ lục giá, phụ lục mốc, mức bảo lãnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then update the money index. Late requests? No basis.",
          "sub": "Rồi cập nhật chỉ mục tiền và bảo đảm. Đề nghị đến sau ngày đóng: không còn căn cứ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Open with a deadline, close with a paper.",
          "sub": "Mở cửa sổ có hạn, đóng cửa sổ có giấy.",
          "keys": [
            "đóng cửa sổ có giấy"
          ]
        }
      ],
      "ref": "p18,p19,p20,p21"
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
          },
          {
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Chiều thứ Năm · Tỷ giá",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l2:afternoon"
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
                  "id": "sam",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "dollar-banknote",
                "bank"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chiều thứ Năm · gọi nhà thầu",
            "icon": "dollar-banknote"
          },
          {
            "id": "h-vnd",
            "t": "text",
            "text": "Điều 87: Đồng Việt Nam",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l3:dong",
            "color": "accent",
            "hl": [
              {
                "text": "Đồng Việt Nam",
                "at": "l3:dong"
              }
            ]
          },
          {
            "id": "h-fx",
            "t": "text",
            "text": "Ngoại tệ: theo luật ngoại hối",
            "x": 3996,
            "y": 1340,
            "size": 42,
            "at": "l3:exchange"
          },
          {
            "id": "h-dom",
            "t": "text",
            "text": "Hai pháp nhân trong nước: hạn chế",
            "x": 3996,
            "y": 1420,
            "size": 40,
            "at": "l4:domestic",
            "color": "coral"
          },
          {
            "id": "h-ex",
            "t": "text",
            "text": "ngoại lệ: chi phí ngoài nước",
            "x": 4036,
            "y": 1490,
            "size": 36,
            "at": "l4:abroad",
            "color": "muted"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Ghi rõ: đồng tiền, ngân hàng, ngày",
            "x": 3996,
            "y": 1570,
            "size": 40,
            "at": "l5:bank",
            "hl": [
              {
                "text": "ngân hàng, ngày",
                "at": "l5:date"
              }
            ]
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Tỷ giá → rủi ro nhà thầu",
            "x": 3996,
            "y": 1650,
            "size": 48,
            "at": "l6:contractor",
            "color": "accent",
            "hl": [
              {
                "text": "rủi ro nhà thầu",
                "at": "l6:contractor"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 87 Luật Xây dựng 135/2025/QH15; văn bản ngoại hối cần kiểm hiện hành",
            "x": 3996,
            "y": 1838,
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
          "who": "sam",
          "say": "One more thing: the exchange rate moved. Can you pay us more?",
          "sub": "Thêm một chuyện: tỷ giá biến động. Chị trả thêm cho chúng tôi được không?",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thursday afternoon, door four? There is no door four.",
          "sub": "Chiều thứ Năm, cửa thứ tư à? Không có cửa thứ tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Construction Law Article eighty seven: pay in Vietnamese dong; foreign currency follows exchange law.",
          "sub": "Điều 87 Luật Xây dựng 2025: thanh toán bằng Đồng Việt Nam; dùng ngoại tệ theo pháp luật ngoại hối.",
          "keys": [
            "Đồng Việt Nam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Between two domestic entities, foreign currency is restricted, with exceptions like costs abroad in international tenders.",
          "sub": "Giữa hai pháp nhân trong nước, ngoại tệ bị hạn chế, chỉ có ngoại lệ như chi phí ngoài nước của gói thầu quốc tế."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The contract should name each part's currency, the bank and the date of the rate.",
          "sub": "Hợp đồng nên ghi rõ đồng tiền từng phần giá, tỷ giá của ngân hàng nào, vào ngày nào, tách theo thành viên liên danh."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And our clause excludes exchange rates. So that risk is the contractor's.",
          "sub": "Câu trọn gói đã loại tỷ giá, nên rủi ro tỷ giá thuộc nhà thầu, trừ khi hợp đồng nói khác.",
          "keys": [
            "rủi ro tỷ giá thuộc nhà thầu"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s15",
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
            "text": "⑦ Thứ Sáu · Ghi giá mới",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "i-where",
            "t": "text",
            "text": "Giá nằm ở 5 nơi",
            "x": 6804,
            "y": 1260,
            "size": 52,
            "at": "l2:places",
            "color": "coral",
            "hl": [
              {
                "text": "5 nơi",
                "at": "l2:places"
              }
            ]
          },
          {
            "id": "i-w2",
            "t": "text",
            "text": "định nghĩa · điều giá · phụ lục giá",
            "x": 6804,
            "y": 1340,
            "size": 34,
            "at": "l2:definition",
            "color": "muted"
          },
          {
            "id": "i-w3",
            "t": "text",
            "text": "phụ lục mốc · mẫu bảo lãnh",
            "x": 6804,
            "y": 1395,
            "size": 34,
            "at": "l2:guarantee",
            "color": "muted"
          },
          {
            "id": "i-sot",
            "t": "text",
            "text": "Sót một chỗ = lệch",
            "x": 6804,
            "y": 1470,
            "size": 48,
            "at": "l2:miss",
            "color": "coral",
            "hl": [
              {
                "text": "lệch",
                "at": "l2:mismatch"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l3:words",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1247,
            "size": 58,
            "at": "l3:words+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Số bằng số = bằng chữ",
            "x": 6032,
            "y": 1255,
            "size": 40,
            "at": "l3:words+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1350,
            "w": 46,
            "h": 46,
            "at": "l3:totals",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1332,
            "size": 58,
            "at": "l3:totals+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Tổng phụ lục = Giá Hợp đồng",
            "x": 6032,
            "y": 1340,
            "size": 40,
            "at": "l3:totals+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1435,
            "w": 46,
            "h": 46,
            "at": "l4:threshold",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1417,
            "size": 58,
            "at": "l4:threshold+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Ngưỡng bảo lãnh: theo giá mới",
            "x": 6032,
            "y": 1425,
            "size": 40,
            "at": "l4:threshold+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1520,
            "w": 46,
            "h": 46,
            "at": "l4:replaces",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1502,
            "size": 58,
            "at": "l4:replaces+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Phụ lục mới thay thế cũ",
            "x": 6032,
            "y": 1510,
            "size": 40,
            "at": "l4:replaces+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1605,
            "w": 46,
            "h": 46,
            "at": "l4:signatures",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1587,
            "size": 58,
            "at": "l4:signatures+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Đủ chữ ký liên danh",
            "x": 6032,
            "y": 1595,
            "size": 40,
            "at": "l4:signatures+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday: writing the new price so nothing drifts.",
          "sub": "Thứ Sáu: ghi giá mới sao cho không lệch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The price lives in five places: definition, price clause, price appendix, milestone appendix, guarantee form. Miss one, mismatch.",
          "sub": "Giá nằm ở nhiều nơi: định nghĩa, điều về giá, phụ lục giá, phụ lục mốc, mẫu bảo lãnh. Sót một chỗ là lệch."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My checklist: figures match words, appendix totals match the Contract Price.",
          "sub": "Danh sách của em: số bằng số khớp số bằng chữ, tổng phụ lục giá khớp Giá Hợp đồng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Guarantee threshold on the new price, the new appendix replaces the old, all consortium signatures.",
          "sub": "Ngưỡng bảo lãnh tính theo giá mới, phụ lục mới ghi rõ thay thế phụ lục cũ, đủ chữ ký mọi thành viên liên danh."
        }
      ],
      "ref": "p24,p25"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 35,
        "suffix": "%",
        "label": "tổng tài sản: thẩm quyền Đại hội đồng cổ đông",
        "illus": "classical-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Who may sign a price rise?",
          "sub": "Ai được ký phụ lục tăng giá?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From thirty five percent of assets: the shareholders decide.",
          "sub": "Từ 35% tổng tài sản: Đại hội đồng cổ đông quyết.",
          "keys": [
            "35%"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s17",
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
            "id": "i-35",
            "t": "text",
            "text": "Cổ phần: ≥ 35% tài sản → ĐHĐCĐ",
            "x": 5964,
            "y": 1710,
            "size": 40,
            "at": "l1:joint",
            "hl": [
              {
                "text": "≥ 35%",
                "at": "l1:thirty"
              }
            ]
          },
          {
            "id": "i-dl",
            "t": "text",
            "text": "trừ khi Điều lệ khác · kiểm trước",
            "x": 5964,
            "y": 1780,
            "size": 34,
            "at": "l2:charter",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: khoản 2 Điều 138 Luật Doanh nghiệp 2020",
            "x": 6804,
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
          "say": "In a joint stock company, investing or selling thirty five percent or more of assets needs the shareholders' meeting.",
          "sub": "Ở công ty cổ phần, đầu tư hoặc bán tài sản từ 35% tổng giá trị tài sản trở lên thuộc thẩm quyền Đại hội đồng cổ đông."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unless the charter says otherwise. Check the charter and current law before signing.",
          "sub": "Trừ khi Điều lệ quy định khác. Kiểm Điều lệ và văn bản hiện hành trước khi trình ký.",
          "keys": [
            "Kiểm Điều lệ"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s18",
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
            "text": "Tối thứ Sáu · Bảng đề nghị",
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
                "check-mark-button"
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
            "at": "l1:desk",
            "caption": "Tối thứ Sáu · cùng bàn",
            "icon": "card-index"
          },
          {
            "id": "j-r0a",
            "t": "text",
            "text": "Đường nội bộ",
            "x": 7932,
            "y": 1265,
            "size": 38,
            "at": "l2:road"
          },
          {
            "id": "j-r0b",
            "t": "text",
            "text": "→ Thay đổi",
            "x": 8272,
            "y": 1265,
            "size": 38,
            "at": "l2:road+300",
            "color": "accent"
          },
          {
            "id": "j-r0c",
            "t": "text",
            "text": "chờ chỉ thị",
            "x": 8532,
            "y": 1272,
            "size": 30,
            "at": "l2:road+600",
            "color": "muted"
          },
          {
            "id": "j-r1a",
            "t": "text",
            "text": "Quy chuẩn lưới",
            "x": 7932,
            "y": 1345,
            "size": 38,
            "at": "l3:grid"
          },
          {
            "id": "j-r1b",
            "t": "text",
            "text": "→ Luật đổi",
            "x": 8272,
            "y": 1345,
            "size": 38,
            "at": "l3:grid+300",
            "color": "accent"
          },
          {
            "id": "j-r1c",
            "t": "text",
            "text": "xét mốc ngày",
            "x": 8532,
            "y": 1352,
            "size": 30,
            "at": "l3:grid+600",
            "color": "muted"
          },
          {
            "id": "j-r2a",
            "t": "text",
            "text": "Giá thiết bị",
            "x": 7932,
            "y": 1425,
            "size": 38,
            "at": "l3:equipment"
          },
          {
            "id": "j-r2b",
            "t": "text",
            "text": "→ Điều chỉnh",
            "x": 8272,
            "y": 1425,
            "size": 38,
            "at": "l3:equipment+300",
            "color": "accent"
          },
          {
            "id": "j-r2c",
            "t": "text",
            "text": "trong cửa sổ",
            "x": 8532,
            "y": 1432,
            "size": 30,
            "at": "l3:equipment+600",
            "color": "muted"
          },
          {
            "id": "j-r3a",
            "t": "text",
            "text": "Tỷ giá",
            "x": 7932,
            "y": 1505,
            "size": 38,
            "at": "l4:rate"
          },
          {
            "id": "j-r3b",
            "t": "text",
            "text": "→ không cửa",
            "x": 8272,
            "y": 1505,
            "size": 38,
            "at": "l4:rate+300",
            "color": "coral"
          },
          {
            "id": "j-r3c",
            "t": "text",
            "text": "từ chối",
            "x": 8532,
            "y": 1512,
            "size": 30,
            "at": "l4:rate+600",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 7932,
            "y": 1610,
            "size": 44,
            "at": "l5:book",
            "color": "accent",
            "hl": [
              {
                "text": "mách có chứng",
                "at": "l5:prove"
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
          "say": "Friday evening. Same desk. Thảo tables the week's requests: door, clause.",
          "sub": "Tối thứ Sáu. Vẫn bàn ấy. Thảo lập bảng các đề nghị tuần này: cửa nào, điều nào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The road: Variations door, waiting for a written instruction.",
          "sub": "Đường nội bộ: cửa Thay đổi, chờ chỉ thị bằng văn bản.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The grid rule: change in law, check the cut off date. Equipment: inside the window.",
          "sub": "Quy chuẩn lưới: cửa thay đổi pháp luật, xét mốc ngày. Giá thiết bị: còn trong cửa sổ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "And the exchange rate: no door. Politely declined.",
          "sub": "Còn tỷ giá: không có cửa. Từ chối lịch sự.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Speak from the book, prove with evidence. Every rise in price came with its paper.",
          "sub": "“Nói có sách, mách có chứng.” Tăng giá nào cũng phải có giấy.",
          "keys": [
            "Nói có sách, mách có chứng"
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
      "ref": "outro,p5,p10"
    },
    {
      "id": "s19",
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
            "at": "l1:doors",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:written",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:places",
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
            "x": 3588,
            "y": 670,
            "at": "l1:doors"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6724,
            "y": 170,
            "at": "l2:written"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6724,
            "y": 1550,
            "at": "l3:places"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài tham khảo chung; tình huống minh hoạ, không lấy từ hợp đồng hay dự án cụ thể. Việc cụ thể hỏi pháp chế, luật sư; kiểm văn bản hiện hành.",
            "x": 3996,
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
          "say": "So: lump sum still moves, but only through three doors. Ask the door first.",
          "sub": "Tóm lại: trọn gói vẫn đổi, nhưng chỉ qua ba cửa. Hỏi cửa trước.",
          "keys": [
            "ba cửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A Variation is written, named, signed. A window opens with a deadline.",
          "sub": "Thay đổi phải bằng văn bản, có tên, có người ký. Cửa sổ mở có hạn.",
          "keys": [
            "bằng văn bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a new price is fixed in all five places, at once.",
          "sub": "Và giá mới phải sửa đồng bộ ở mọi nơi, cùng một lúc.",
          "keys": [
            "đồng bộ"
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
      "ref": "outro,p12,p21"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "data": {
        "q": "A payment order includes extra road works agreed only verbally at a meeting, what should finance check?",
        "options": [
          "Whether a written variation instruction exists, not only meeting minutes saying the plan was agreed",
          "Whether the road looks good, because good quality work should always be paid at once",
          "Whether the contractor needs cash, since helping its cash flow is part of the contract"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "memo",
        "why": "Biên bản họp ghi “thống nhất phương án” chưa phải chỉ thị Thay đổi. Cần chỉ thị bằng văn bản, nêu rõ là Thay đổi, của người có thẩm quyền."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A payment order includes extra road works agreed only verbally at a meeting, what should finance check?",
          "sub": "Lệnh thanh toán có hạng mục đường nội bộ chỉ được đồng ý miệng ở cuộc họp, tài chính nên kiểm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Look for a written variation instruction, not just meeting minutes.",
          "sub": "Tìm chỉ thị thay đổi bằng văn bản, không chỉ biên bản họp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "No written instruction, no money line.",
          "sub": "Không có giấy chỉ thị, chưa có dòng tiền."
        }
      ],
      "ref": "questions[12]"
    },
    {
      "id": "s21",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi lập bảng: đề nghị nào, cửa nào"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, list every price increase request: which door, which clause.",
          "sub": "Hôm nay, lập bảng mọi đề nghị tăng giá: đi cửa nào, theo điều nào."
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
  "notes": "#145 bài MỚI (chuỗi epc-finance, bài 1 sau bài tổng) theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (đoán sai): “Trọn gói = không bao giờ đổi?” A/B → lật: vẫn đổi qua ba cửa. Đét trái + bảng 10 ô theo MỘT TUẦN ba đề nghị tăng giá trên bàn Thảo: thứ Hai Sam mang Lệnh Thanh toán có dòng “phát sinh đường nội bộ”, chỉ có biên bản họp → “Khoan đã!” tua về họp công trường (cô Hoa đồng ý miệng) → thứ Ba định giá Thay đổi (BRK-04 trước/sau câu chỉ thị) → thứ Tư thư thay đổi pháp luật, quy chuẩn lưới đóng băng → chiều thứ Tư cà phê Bác Bình: Điều 13 vs Silver Book, Điều 18/24/33 → (BRK-07) thứ Năm cửa sổ giá thiết bị → chiều thứ Năm tỷ giá (không có cửa thứ tư) → thứ Sáu ghi giá mới (BRK-03 35%) → tối thứ Sáu bảng đề nghị, cùng bàn (khép vòng “Nói có sách, mách có chứng”). Nhân vật theo w145/_series/epc-finance.md: Thảo, Sam, cô Hoa, Bác Bình (Dũng không xuất hiện). Số/điều chỉ từ bài: NĐ 210/2026 Điều 11, 18, 24, 33; Luật Xây dựng 2025 Điều 13, 84, 87; 01/7/2026; FIDIC Silver Book 2017; 35% (khoản 2 Điều 138 LDN 2020). Ô trống [ ] giữ nguyên. Câu đố questions[12]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
