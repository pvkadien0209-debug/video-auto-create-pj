// variation-instruction--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "variation-instruction--w01",
  "unit": {
    "audience": "epc-project-manager",
    "slug": "variation-instruction",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khi nào một yêu cầu ngoài công trường trở thành thay đổi phải trả tiền?",
    "series": "Giữ quyền chủ đầu tư ngoài công trường EPC — cho quản lý dự án và tư vấn giám sát, đúng thủ tục mỗi ngày và có chứng cứ khi cần"
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
              "a-env",
              "a-ln1"
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
            "id": "a-env",
            "t": "illus",
            "name": "envelope-with-arrow",
            "x": 70,
            "y": 110,
            "size": 200,
            "at": "l1:letter"
          },
          {
            "id": "a-ln1",
            "t": "text",
            "text": "“Xác nhận chỉ thị miệng”",
            "x": 300,
            "y": 120,
            "size": 62,
            "at": "l1:confirmation",
            "hl": [
              {
                "text": "chỉ thị miệng",
                "at": "l1:oral"
              }
            ]
          },
          {
            "id": "a-ln2",
            "t": "text",
            "text": "V/v: lớp chống ăn mòn bổ sung",
            "x": 300,
            "y": 210,
            "size": 46,
            "at": "l2:coat"
          },
          {
            "id": "a-ln3",
            "t": "text",
            "text": "→ đề nghị thanh toán như Thay đổi",
            "x": 300,
            "y": 280,
            "size": 42,
            "at": "l2:Variation",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Trả tiền cho một câu nói?",
            "x": 70,
            "y": 420,
            "size": 56,
            "at": "l3:sentence",
            "color": "accent",
            "hl": [
              {
                "text": "một câu nói",
                "at": "l3:sentence"
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
          "say": "One letter on a desk. Subject: confirmation of oral instruction.",
          "sub": "Một lá thư trên bàn. Tiêu đề: “Xác nhận chỉ thị miệng”.",
          "keys": [
            "Xác nhận chỉ thị miệng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An extra anti-corrosion coat, to be paid as a Variation.",
          "sub": "Lớp chống ăn mòn bổ sung, đề nghị thanh toán như một Thay đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Will the owner pay for one spoken sentence?",
          "sub": "Chủ đầu tư có phải trả tiền cho một câu nói không?",
          "keys": [
            "một câu nói"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
            "at": "l3",
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
            "x": 960,
            "y": 300,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "envelope-with-arrow",
                "notebook"
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
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 8:00 · lán Ban QLDA, một tháng sau",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "a-nk",
            "t": "text",
            "text": "Nhật ký: “để tôi báo lại”",
            "x": 70,
            "y": 520,
            "size": 40,
            "at": "l2:diary",
            "hl": [
              {
                "text": "để tôi báo lại",
                "at": "l2:report"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói gió bay”?",
            "x": 70,
            "y": 620,
            "size": 58,
            "at": "l5:wind",
            "color": "accent",
            "hl": [
              {
                "text": "gió bay",
                "at": "l5:wind"
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
          "say": "Meet Thảo again, from the owner's project team. Monday, one month later.",
          "sub": "Lại là Thảo, Ban quản lý dự án của Chủ đầu tư. Thứ Hai, một tháng sau.",
          "keys": [
            "một tháng sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Remember Dũng at the foundation? He wrote let me report this, in the diary that day.",
          "sub": "Nhớ Dũng ở móng tua-bin? Hôm ấy cậu ghi vào nhật ký: “để tôi báo lại”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "But the contractor says it was an instruction. If I stay quiet, it becomes one.",
          "sub": "Nhưng nhà thầu bảo đó là chỉ thị. Em mà im, nó thành chỉ thị thật.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She's right to worry.",
          "sub": "Lo là đúng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders said: spoken words fly with the wind.",
          "sub": "Ông bà nói: “Lời nói gió bay.”",
          "keys": [
            "Lời nói gió bay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "On site, they don't. They come back as invoices.",
          "sub": "Ở công trường thì không. Nó quay lại thành hoá đơn.",
          "keys": [
            "thành hoá đơn"
          ]
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
            "text": "Khi nào thành Thay đổi?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:paid",
            "hl": [
              {
                "text": "Thay đổi",
                "at": "l1:variation"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cứ làm thêm là trả",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:extra",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:paid"
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 270,
            "w": 790,
            "h": 105,
            "at": "l3:written",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2858,
            "y": 270,
            "w": 790,
            "h": 105,
            "at": "l3:oral",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 790,
            "h": 105,
            "at": "l4:valuation",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 2858,
            "y": 400,
            "w": 790,
            "h": 105,
            "at": "l4:development",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Văn bản, đúng người",
            "x": 2058,
            "y": 297,
            "size": 44,
            "at": "l3:written+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Lời miệng: ghi ngay",
            "x": 2888,
            "y": 297,
            "size": 44,
            "at": "l3:oral+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Định giá đúng thứ tự",
            "x": 2058,
            "y": 427,
            "size": 44,
            "at": "l4:valuation+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Phát triển thiết kế ≠ Thay đổi",
            "x": 2888,
            "y": 427,
            "size": 44,
            "at": "l4:development+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần · 6 chặng",
            "x": 2028,
            "y": 570,
            "size": 56,
            "at": "l5:week",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l5:six"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn (theo bài học): NĐ 210/2026/NĐ-CP Điều 4 khoản 5 · mẫu hợp đồng quốc tế 2017",
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
          "say": "So when does a site request become a paid variation?",
          "sub": "Vậy khi nào một yêu cầu ngoài công trường thành thay đổi phải trả tiền?",
          "keys": [
            "thay đổi phải trả tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not whenever extra work gets done and paid.",
          "sub": "Không phải cứ làm thêm là được trả tiền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Only by written instruction from the right person. Oral ones get recorded at once.",
          "sub": "Chỉ khi có chỉ thị bằng văn bản của đúng người. Lời miệng thì ghi lại ngay.",
          "keys": [
            "đúng người"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Valuation follows the contract's order. And design development is no Variation.",
          "sub": "Định giá theo đúng thứ tự hợp đồng. Và phát triển thiết kế không phải Thay đổi.",
          "keys": [
            "không phải Thay đổi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One week of Thảo's, six stops.",
          "sub": "Một tuần của Thảo, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-10",
      "data": {
        "quote": "Không chỉ thị nào là Thay đổi, trừ khi bằng văn bản và nêu rõ đó là Thay đổi",
        "mark": "nêu rõ",
        "by": "Câu mẫu của chủ đầu tư",
        "illus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "No instruction is a Variation unless in writing, and expressly called one.",
          "sub": "Không chỉ thị nào là Thay đổi, trừ khi bằng văn bản và nêu rõ đó là Thay đổi.",
          "keys": [
            "nêu rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The owner's clause.",
          "sub": "Câu mẫu của chủ đầu tư."
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
            "text": "① Thứ Hai · Cửa chính đổi giá",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:main"
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Trọn gói: Thay đổi = cửa chính",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l1:door",
            "hl": [
              {
                "text": "cửa chính",
                "at": "l1:door"
              }
            ]
          },
          {
            "id": "c-d2",
            "t": "text",
            "text": "(cùng thay đổi luật, điều chỉnh giá)",
            "x": 3996,
            "y": 225,
            "size": 34,
            "at": "l1:law",
            "color": "muted"
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "Người ra: CĐT hoặc Đại diện",
            "x": 3996,
            "y": 300,
            "size": 42,
            "at": "l2:Representative"
          },
          {
            "id": "c-w2",
            "t": "text",
            "text": "trong phạm vi uỷ quyền văn bản",
            "x": 3996,
            "y": 360,
            "size": 38,
            "at": "l2:authority",
            "hl": [
              {
                "text": "uỷ quyền",
                "at": "l2:authority"
              }
            ]
          },
          {
            "id": "c-r0b",
            "t": "box",
            "x": 3996,
            "y": 450,
            "w": 520,
            "h": 90,
            "at": "l3:instruction",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "c-r1b",
            "t": "box",
            "x": 4556,
            "y": 450,
            "w": 520,
            "h": 90,
            "at": "l3:proposal",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "c-r0",
            "t": "text",
            "text": "Đường 1: Theo chỉ thị",
            "x": 4021,
            "y": 472,
            "size": 36,
            "at": "l3:instruction+200"
          },
          {
            "id": "c-r1",
            "t": "text",
            "text": "Đường 2: Theo yêu cầu đề xuất",
            "x": 4581,
            "y": 472,
            "size": 36,
            "at": "l3:proposal+200"
          },
          {
            "id": "c-st",
            "t": "text",
            "text": "Đều bắt đầu bằng văn bản, không bằng câu nói",
            "x": 3996,
            "y": 600,
            "size": 32,
            "at": "l4:document",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Mẫu quốc tế 2017: hai đường Thay đổi",
            "x": 5176,
            "y": 600,
            "size": 28,
            "at": "l3:routes",
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
          "say": "In a lump sum EPC, Variation is the main door to a new price, besides change in law and agreed adjustment.",
          "sub": "Trong EPC trọn gói, Thay đổi là cửa chính để đổi giá, cùng thay đổi pháp luật và cơ chế điều chỉnh đã thoả thuận.",
          "keys": [
            "cửa chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Given by the owner, or its Representative within written authority.",
          "sub": "Do chủ đầu tư, hoặc Đại diện chủ đầu tư trong phạm vi uỷ quyền bằng văn bản đưa ra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The twenty seventeen form has two routes: by instruction, or after a request for proposal.",
          "sub": "Mẫu 2017 chia hai đường: theo chỉ thị, và theo yêu cầu đề xuất, tức hỏi giá trước rồi mới quyết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For the project team, both start with a document, not a remark.",
          "sub": "Với Ban quản lý dự án, cả hai đều bắt đầu bằng văn bản, không bằng một câu nói.",
          "keys": [
            "bắt đầu bằng văn bản"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l3",
            "fit": "D",
            "ms": 700
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
          },
          {
            "at": "l6",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 10:00 · Chắc thắng không?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:legal"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6864,
            "y": 130,
            "w": 700,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "balance-scale",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "binh",
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
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:legal",
            "caption": "10:00 · gọi trực tuyến pháp chế",
            "icon": "balance-scale"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "HĐ cũng ghi: chỉ thị miệng",
            "x": 5964,
            "y": 160,
            "size": 42,
            "at": "l3:oral"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "→ xác nhận bằng văn bản",
            "x": 5964,
            "y": 220,
            "size": 42,
            "at": "l3:confirmed"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Người nói được uỷ quyền?",
            "x": 5964,
            "y": 300,
            "size": 42,
            "at": "l3:authorised",
            "color": "coral"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "→ “chỉ còn thiếu xác nhận”",
            "x": 5964,
            "y": 360,
            "size": 42,
            "at": "l3:missing",
            "color": "coral",
            "hl": [
              {
                "text": "thiếu xác nhận",
                "at": "l3:missing"
              }
            ]
          },
          {
            "id": "d-ans",
            "t": "text",
            "text": "Chưa chắc!",
            "x": 5964,
            "y": 435,
            "size": 60,
            "at": "l5:sure",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ten o'clock. Thảo calls Mr Bình, the owner's head of legal. Slow, warm, careful.",
          "sub": "Mười giờ. Thảo gọi Bác Bình, trưởng pháp chế của Chủ đầu tư. Chậm, ấm, cẩn thận.",
          "keys": [
            "trưởng pháp chế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "First question, as always: where are the files?",
          "sub": "Câu đầu tiên, như mọi khi: hồ sơ đâu cháu?",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The trap: contracts also say oral instructions get confirmed in writing. If the speaker was authorised, only that step is missing.",
          "sub": "Cái khó: hợp đồng cũng ghi chỉ thị miệng phải xác nhận bằng văn bản. Người nói được uỷ quyền thì chỉ còn thiếu bước xác nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But the contract says written only. Surely we win?",
          "sub": "Nhưng hợp đồng ghi chỉ bằng văn bản. Mình chắc thắng chứ bác?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not so sure. Think it through.",
          "sub": "Chưa chắc. Thử nghĩ xem.",
          "keys": [
            "Chưa chắc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "It depends on the authority letter, the diary, and what we did when we found out.",
          "sub": "Còn tuỳ văn bản uỷ quyền, cuốn nhật ký, và mình phản ứng thế nào khi biết chuyện.",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A written-only clause is only as strong as your authority limits and your diary.",
          "sub": "Điều khoản “chỉ bằng văn bản” chỉ mạnh bằng giới hạn uỷ quyền và cuốn nhật ký.",
          "keys": [
            "giới hạn uỷ quyền và cuốn nhật ký"
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
      "ref": "p3,p4,p5"
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
          }
        ],
        "items": [
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 555,
            "w": 40,
            "h": 40,
            "at": "l1:authority",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5967,
            "y": 537,
            "size": 52,
            "at": "l1:authority+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Chỉ người có quyền nói “làm thêm”",
            "x": 6028,
            "y": 547,
            "size": 32,
            "at": "l1:authority+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 611,
            "w": 40,
            "h": 40,
            "at": "l2:diary",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5967,
            "y": 593,
            "size": 52,
            "at": "l2:diary+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Lỡ nói: ghi nhật ký, báo ngay",
            "x": 6028,
            "y": 603,
            "size": 32,
            "at": "l2:diary+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 667,
            "w": 40,
            "h": 40,
            "at": "l3:letter",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5967,
            "y": 649,
            "size": 52,
            "at": "l3:letter+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Thư xác nhận: trả lời có / không",
            "x": 6028,
            "y": 659,
            "size": 32,
            "at": "l3:letter+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 723,
            "w": 40,
            "h": 40,
            "at": "l4:notified",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5967,
            "y": 705,
            "size": 52,
            "at": "l4:notified+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Lưu và báo uỷ quyền từng người",
            "x": 6028,
            "y": 715,
            "size": 32,
            "at": "l4:notified+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Checklist. Only those with authority say do more. Others say let me report back.",
          "sub": "Bảng kiểm. Chỉ người có thẩm quyền mới nói “làm thêm”; người khác nói “để tôi báo lại”.",
          "keys": [
            "để tôi báo lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Said it anyway? Into the diary, and tell the authorised person that day.",
          "sub": "Lỡ nói thì ghi ngay nhật ký, báo người có thẩm quyền trong ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A letter confirming an oral instruction? Reply clearly, yes or no. Never leave it silent.",
          "sub": "Nhà thầu gửi thư xác nhận chỉ thị miệng? Trả lời rõ có hay không, đừng để thư nằm im.",
          "keys": [
            "đừng để thư nằm im"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep each person's written authority, and make sure the contractor was notified.",
          "sub": "Lưu văn bản uỷ quyền từng người, và đã thông báo cho nhà thầu."
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
            "at": 150,
            "fit": "E",
            "ms": 900
          },
          {
            "at": "l3",
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
            "text": "③ Thứ Ba · Dời nhà điều khiển",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:building"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8832,
            "y": 130,
            "w": 700,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "building-construction",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:building",
            "caption": "Thứ Ba · họp với nhà thầu",
            "icon": "building-construction"
          },
          {
            "id": "e-s0",
            "t": "text",
            "text": "(1) Gửi yêu cầu đề xuất",
            "x": 7932,
            "y": 160,
            "size": 30,
            "at": "l4:request",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "(2) Nhà thầu chào giá, tiến độ, hiệu suất",
            "x": 7932,
            "y": 226,
            "size": 30,
            "at": "l5:quote",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "(3) Đối chiếu đơn giá, tách việc vốn có",
            "x": 7932,
            "y": 292,
            "size": 30,
            "at": "l6:rates",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "(4) Vượt ngưỡng → trình lãnh đạo",
            "x": 7932,
            "y": 358,
            "size": 30,
            "at": "l7:threshold",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "e-s4",
            "t": "text",
            "text": "(5) Chỉ thị: “là Thay đổi theo Điều [ ]”",
            "x": 7932,
            "y": 424,
            "size": 30,
            "at": "l8:instruction",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Hỏi giá trước, chỉ thị sau",
            "x": 7932,
            "y": 520,
            "size": 50,
            "at": "l9:price",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi giá trước",
                "at": "l9:price"
              }
            ]
          },
          {
            "id": "e-take2",
            "t": "text",
            "text": "chỉ thị luôn có chữ “Thay đổi”",
            "x": 7932,
            "y": 590,
            "size": 42,
            "at": "l9:always",
            "hl": [
              {
                "text": "“Thay đổi”",
                "at": "l9:variation"
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
          "say": "Tuesday. Ms Hoa, head of the project team, wants to move a control building.",
          "sub": "Thứ Ba. Cô Hoa, trưởng Ban quản lý dự án, muốn dời vị trí một nhà điều khiển."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Across the table, Sam, the EPC contractor's project manager.",
          "sub": "Ngồi đối diện là Sam, quản lý dự án phía nhà thầu EPC.",
          "keys": [
            "phía nhà thầu EPC"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Happy to move it. Just send the request in writing.",
          "sub": "Dời được. Chỉ cần gửi yêu cầu bằng văn bản.",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step one: a written request for proposal, describing the scope.",
          "sub": "Bước một: gửi yêu cầu đề xuất bằng văn bản, mô tả phạm vi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two: the contractor's quote, with effects on time and performance, open for blank days.",
          "sub": "Hai: nhà thầu chào giá, ảnh hưởng tiến độ và bảo đảm hiệu suất, hiệu lực [ ] ngày."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three: compare with the contract's unit rates, and strip out work it already owed.",
          "sub": "Ba: đối chiếu đơn giá sẵn có, tách phần việc nhà thầu vốn phải làm."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "hoa",
          "say": "Four: over my authority threshold, it goes to management. Right!",
          "sub": "Bốn: vượt ngưỡng uỷ quyền của cô thì trình lãnh đạo. Rồi, vậy nha!",
          "pose": "point"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Five: a written instruction stating it's a Variation under the clause, with price and time.",
          "sub": "Năm: phát chỉ thị bằng văn bản, ghi rõ “là Thay đổi theo Điều [ ]”, kèm giá và thời gian đã chốt.",
          "keys": [
            "là Thay đổi theo Điều [ ]"
          ]
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "Ask the price first, instruct later, and always say variation.",
          "sub": "Hỏi giá trước, chỉ thị sau, và chỉ thị luôn có chữ “Thay đổi”.",
          "keys": [
            "Hỏi giá trước"
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
      "ref": "p7,p8,p9"
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
            "id": "e-o1",
            "t": "text",
            "text": "3 cách mở: CĐT chỉ thị · CĐT hỏi giá · nhà thầu đề xuất",
            "x": 7932,
            "y": 680,
            "size": 30,
            "at": "l1:three",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-o2",
            "t": "text",
            "text": "Bớt thời gian cần → mốc có thể rút ngắn",
            "x": 8832,
            "y": 640,
            "size": 32,
            "at": "l2:shortened",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Variations can start three ways: owner instruction, owner request, or a contractor proposal, say for the power purchase agreement.",
          "sub": "Có ba cách mở: chủ đầu tư chỉ thị, chủ đầu tư hỏi đề xuất, hoặc nhà thầu tự đề xuất, ví dụ đáp ứng hợp đồng mua bán điện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And if a Variation needs less time, the milestone can be shortened.",
          "sub": "Và Thay đổi làm giảm thời gian cần thiết thì mốc có thể được rút ngắn.",
          "keys": [
            "rút ngắn"
          ]
        }
      ],
      "ref": "p7"
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
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · Định giá",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:valuing"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 960,
            "y": 1220,
            "w": 700,
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
                "money-bag",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:valuing",
            "caption": "Thứ Tư · bàn Thảo",
            "icon": "money-bag"
          },
          {
            "id": "f-o0b",
            "t": "box",
            "x": 60,
            "y": 1250,
            "w": 600,
            "h": 64,
            "at": "l2:agree",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-o1b",
            "t": "box",
            "x": 90,
            "y": 1330,
            "w": 600,
            "h": 64,
            "at": "l2:rates",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-o2b",
            "t": "box",
            "x": 120,
            "y": 1410,
            "w": 600,
            "h": 64,
            "at": "l2:determines",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-o0",
            "t": "text",
            "text": "1. Hai bên thoả thuận",
            "x": 85,
            "y": 1260,
            "size": 36,
            "at": "l2:agree+200"
          },
          {
            "id": "f-o1",
            "t": "text",
            "text": "2. Đơn giá trong hợp đồng",
            "x": 115,
            "y": 1340,
            "size": 36,
            "at": "l2:rates+200"
          },
          {
            "id": "f-o2",
            "t": "text",
            "text": "3. Chủ đầu tư xác định",
            "x": 145,
            "y": 1420,
            "size": 36,
            "at": "l2:determines+200"
          },
          {
            "id": "f-x1",
            "t": "text",
            "text": "Chưa có đơn giá: chào giá cạnh tranh",
            "x": 60,
            "y": 1510,
            "size": 32,
            "at": "l3:competitive",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "f-x2",
            "t": "text",
            "text": "Cắt việc: khấu trừ · kéo dài: không lợi nhuận",
            "x": 60,
            "y": 1550,
            "size": 32,
            "at": "l4:profit",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "f-x3",
            "t": "text",
            "text": "Điều kiện tiên quyết: chỉ thị trước khi làm",
            "x": 60,
            "y": 1590,
            "size": 32,
            "at": "l4:precedent",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Thảo is valuing the move.",
          "sub": "Thứ Tư. Thảo định giá việc dời nhà điều khiển."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The usual order: agree. If not, use contract rates. If still not, the owner determines.",
          "sub": "Thứ tự thường gặp: hai bên thoả thuận; không được thì dùng đơn giá hợp đồng; vẫn không thì chủ đầu tư xác định.",
          "keys": [
            "chủ đầu tư xác định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No rate? Competitive quotes, with a capped management fee.",
          "sub": "Chưa có đơn giá thì lấy chào giá cạnh tranh, phí quản lý có trần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Omitted work is deducted. Prolongation costs, no profit. A condition precedent may require instruction first.",
          "sub": "Cắt việc thì khấu trừ; chi phí kéo dài không gồm lợi nhuận. Có thể đặt điều kiện tiên quyết: phải có chỉ thị trước khi làm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Can I just write: owner's absolute discretion?",
          "sub": "Em ghi luôn “chủ đầu tư toàn quyền tuyệt đối” được không ạ?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Common mistake. The contractor will push back, asking for reasonable prices it can challenge.",
          "sub": "Lỗi hay gặp. Nhà thầu sẽ phản đối, đòi “giá hợp lý, có thể khiếu nại”."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Better: write your basis. Which rate, which quote, and why.",
          "sub": "Tốt hơn: ghi căn cứ. Đơn giá nào, chào giá nào, vì sao chọn.",
          "keys": [
            "ghi căn cứ"
          ]
        }
      ],
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-bad",
            "t": "text",
            "text": "“Toàn quyền tuyệt đối”",
            "x": 60,
            "y": 1670,
            "size": 44,
            "at": "l1:absolute",
            "color": "muted"
          },
          {
            "id": "f-badx",
            "t": "strike",
            "over": "f-bad",
            "at": "l1:absolute+600"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "Ghi căn cứ: giá nào, vì sao",
            "x": 960,
            "y": 1710,
            "size": 40,
            "at": "l1:basis",
            "color": "accent"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "NĐ 210/2026 Điều 4 khoản 5: kiểm soát thống nhất thiết kế, phạm vi, giá",
            "x": 60,
            "y": 1760,
            "size": 28,
            "at": "l2:Decree",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-src2",
            "t": "text",
            "text": "Theo báo chí: điều chỉnh trọn gói khi bất khả kháng, hoàn cảnh thay đổi cơ bản, thay đổi phạm vi…",
            "x": 60,
            "y": 1795,
            "size": 24,
            "at": "l3:press",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-src3",
            "t": "text",
            "text": "Điều 84 Luật Xây dựng 2025 · kiểm văn bản hiện hành; một số quy định chỉ bắt buộc với đầu tư công, PPP",
            "x": 60,
            "y": 1825,
            "size": 24,
            "at": "l4:public",
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
          "say": "Absolute discretion, crossed out. A written basis, in.",
          "sub": "“Toàn quyền tuyệt đối”: gạch. Ghi căn cứ: giữ.",
          "keys": [
            "Ghi căn cứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese law: Decree two ten, Article four, says EPC controls design, scope and price consistently.",
          "sub": "Luật Việt Nam: Điều 4 khoản 5 Nghị định 210/2026 yêu cầu EPC kiểm soát thống nhất thiết kế, phạm vi và giá."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The press reports lump sums may be adjusted for force majeure, fundamental change, or scope change.",
          "sub": "Theo báo chí, Nghị định cho điều chỉnh trọn gói khi bất khả kháng, hoàn cảnh thay đổi cơ bản, thay đổi phạm vi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check the full text, and Article eighty-four of the Construction Law. Some rules bind only public and PPP projects.",
          "sub": "Kiểm toàn văn và Điều 84 Luật Xây dựng 2025; một số quy định chỉ bắt buộc với đầu tư công, PPP."
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Bản vẽ khác thiết kế ban đầu: chủ đầu tư phải trả thêm?",
        "illus": "triangular-ruler"
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
          "say": "New drawings differ from the first design. Must the owner pay more?",
          "sub": "Bản vẽ khác thiết kế ban đầu: chủ đầu tư phải trả thêm?",
          "keys": [
            "phải trả thêm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p14"
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
            "text": "⑤ Thứ Năm · Cáp to hơn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:cable"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2928,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "electric-plug",
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
            "at": "l1:cable",
            "caption": "Thứ Năm · tuyến cáp",
            "icon": "electric-plug"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Nhà thầu EPC chịu thiết kế",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l3:carries",
            "hl": [
              {
                "text": "chịu thiết kế",
                "at": "l3:design"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "phù hợp mục đích · việc cần thiết",
            "x": 2028,
            "y": 1315,
            "size": 36,
            "at": "l3:purpose"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Chi tiết · giá đỡ · cáp to hơn",
            "x": 2028,
            "y": 1390,
            "size": 40,
            "at": "l4:brackets"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "= thường đã nằm trong giá",
            "x": 2028,
            "y": 1450,
            "size": 40,
            "at": "l4:price",
            "color": "accent",
            "hl": [
              {
                "text": "trong giá",
                "at": "l4:price"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Lỗi nhà thầu: không thêm tiền, ngày",
            "x": 2028,
            "y": 1530,
            "size": 36,
            "at": "l5:fault",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday, on the cable route. Sam has a request.",
          "sub": "Thứ Năm, ở tuyến cáp. Sam có một đề nghị."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "We upsized the cables to reach guaranteed output. That's a Variation.",
          "sub": "Chúng tôi tăng cỡ cáp để đạt công suất cam kết. Đó là Thay đổi.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In EPC, the contractor carries the design, fit for purpose, doing all that's needed.",
          "sub": "Trong EPC, nhà thầu chịu thiết kế, giao nhà máy phù hợp mục đích, làm mọi việc cần thiết.",
          "keys": [
            "chịu thiết kế"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "More detailed drawings, extra brackets, bigger cables for guaranteed output: usually in the price.",
          "sub": "Bản vẽ chi tiết hơn, thêm giá đỡ, cáp to hơn để đạt công suất cam kết: thường đã nằm trong giá."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And a change caused by its own fault earns no extra money, no extra time.",
          "sub": "Thay đổi do lỗi nhà thầu thì không thêm tiền, không gia hạn."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Bản vẽ khác ban đầu thì sao?",
        "wrong": "Bản vẽ khác thiết kế ban đầu là phải trả thêm",
        "right": "Yêu cầu chủ đầu tư có đổi không? Không đổi: phát triển thiết kế",
        "wrongIllus": "money-with-wings",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Different drawings, so pay more?",
          "sub": "Bản vẽ khác ban đầu là phải trả thêm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask: did the requirements change? If not, it's design development.",
          "sub": "Hỏi: Yêu cầu của chủ đầu tư có đổi không? Không đổi: phát triển thiết kế.",
          "keys": [
            "phát triển thiết kế"
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-take",
            "t": "text",
            "text": "Yêu cầu không đổi",
            "x": 2028,
            "y": 1650,
            "size": 54,
            "at": "l2:requirements",
            "color": "accent"
          },
          {
            "id": "g-take2",
            "t": "text",
            "text": "→ thường không có Thay đổi",
            "x": 2028,
            "y": 1730,
            "size": 54,
            "at": "l2:usually",
            "color": "accent",
            "hl": [
              {
                "text": "không có Thay đổi",
                "at": "l2:no"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Did our requirements change, Sam? Or only the design detail?",
          "sub": "Yêu cầu của chủ đầu tư có đổi không, anh Sam? Hay chỉ chi tiết thiết kế?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Requirements unchanged? Usually, no Variation.",
          "sub": "Yêu cầu không đổi thì thường không có Thay đổi.",
          "keys": [
            "không có Thay đổi"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Sáu 9:00 · thư nhà thầu",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "hold",
            "face": "worried"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chốt giá cho nhanh",
          "why": "Hợp đồng thường buộc nhà thầu tiếp tục làm Thay đổi khi chưa chốt giá; giá đi đường khiếu nại.",
          "rule": "Cãi giá trên giấy, công trường vẫn chạy"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "They'll pause the cable works until the price is agreed? Then let's just accept their price!",
          "sub": "Họ tạm dừng hạng mục cáp tới khi chốt giá? Thôi mình nhận giá họ cho nhanh!",
          "face": "worried",
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
          "say": "Usually the contractor must keep doing the Variation while the price is open.",
          "sub": "Thông thường nhà thầu vẫn phải làm Thay đổi trong lúc chưa chốt giá.",
          "keys": [
            "vẫn phải làm"
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
          "who": "thao",
          "say": "We reply today: cite the continue-performance clause, and ask for a price claim.",
          "sub": "Trả lời ngay hôm nay: dẫn điều khoản tiếp tục thực hiện, đề nghị gửi khiếu nại về giá.",
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
            "text": "⑥ Thứ Sáu · Thư tạm dừng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:written"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4896,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "thumb"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "electric-plug",
                "page-facing-up"
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
            "at": "l2:back",
            "caption": "Thứ Sáu chiều · tuyến cáp chạy lại",
            "icon": "electric-plug"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Chỉ thị văn bản: dời tuyến cáp",
            "x": 3996,
            "y": 1250,
            "size": 40,
            "at": "l1:instruction"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Nhà thầu: “tạm dừng chờ chốt giá”",
            "x": 3996,
            "y": 1315,
            "size": 36,
            "at": "l1:pause",
            "color": "coral"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Mỗi bên vẫn làm, dù tranh chấp",
            "x": 3996,
            "y": 1390,
            "size": 40,
            "at": "l2:dispute"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Giá: xác định giá · khiếu nại",
            "x": 3996,
            "y": 1455,
            "size": 40,
            "at": "l2:claims",
            "hl": [
              {
                "text": "khiếu nại",
                "at": "l2:claims"
              }
            ]
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Cãi giá trên giấy,",
            "x": 3996,
            "y": 1560,
            "size": 56,
            "at": "l4:Argue",
            "color": "accent"
          },
          {
            "id": "h-take2",
            "t": "text",
            "text": "công trường vẫn chạy",
            "x": 3996,
            "y": 1640,
            "size": 56,
            "at": "l4:running",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn chạy",
                "at": "l4:running"
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
          "say": "The story: a written instruction moved a cable route. No agreed price. Sam's letter said pause.",
          "sub": "Chuyện là: chỉ thị bằng văn bản dời một tuyến cáp, chưa thống nhất giá. Thư Sam: tạm dừng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each side keeps performing, even in a dispute. Price goes to determination and claims. The site comes back.",
          "sub": "Mỗi bên vẫn thực hiện nghĩa vụ dù có tranh chấp. Giá đi theo thủ tục xác định giá, khiếu nại. Nhà thầu quay lại làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Fair enough. We'll file the claim and keep pulling cable.",
          "sub": "Được thôi. Chúng tôi gửi khiếu nại, vẫn kéo cáp tiếp.",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Argue about price on paper. Keep the site running.",
          "sub": "Cãi giá trên giấy, công trường vẫn chạy.",
          "keys": [
            "công trường vẫn chạy"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s17",
      "module": "BRK-11",
      "data": {
        "title": "Mỗi Thay đổi cần đủ 3 thứ",
        "items": [
          "Chỉ thị văn bản, đúng người",
          "Giá có căn cứ",
          "Hồ sơ: không phải việc vốn có"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Every Variation needs three things.",
          "sub": "Mỗi Thay đổi cần đủ ba thứ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: proof it wasn't owed already.",
          "sub": "Ba: hồ sơ: không phải việc vốn có."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: a price with a basis.",
          "sub": "Hai: giá có căn cứ."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: written, from the right person.",
          "sub": "Một: văn bản, đúng người.",
          "keys": [
            "đúng người"
          ]
        }
      ],
      "ref": "outro"
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
            "text": "Thứ Sáu 16:00 · Rà nhật ký",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:diary"
          },
          {
            "id": "i-nb",
            "t": "illus",
            "name": "notebook",
            "x": 5964,
            "y": 1250,
            "size": 150,
            "at": "l1:diary"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Đánh dấu mọi câu “làm thêm”",
            "x": 6144,
            "y": 1260,
            "size": 46,
            "at": "l2:marks",
            "hl": [
              {
                "text": "“làm thêm”",
                "at": "l2:extra"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "chưa văn bản → xử lý từng câu",
            "x": 6144,
            "y": 1335,
            "size": 40,
            "at": "l2:paper"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Thư xác nhận chỉ thị miệng:",
            "x": 5964,
            "y": 1470,
            "size": 44,
            "at": "l3:reply"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "“Không có chỉ thị. Nhật ký ghi:",
            "x": 5964,
            "y": 1540,
            "size": 40,
            "at": "l4:no",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "‘để tôi báo lại’.”",
            "x": 5964,
            "y": 1590,
            "size": 40,
            "at": "l4:report",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday, four p.m. Thảo goes through this month's diary.",
          "sub": "Thứ Sáu, bốn giờ chiều. Thảo rà nhật ký tháng này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She marks every extra work remark without paper, and deals with each one.",
          "sub": "Đánh dấu mọi câu “làm thêm” chưa có văn bản, và xử lý từng câu.",
          "keys": [
            "xử lý từng câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then she drafts the reply to Sam's letter.",
          "sub": "Rồi soạn thư trả lời lá thư của Sam."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "There was no instruction. Our diary that day says: let me report back.",
          "sub": "Không có chỉ thị. Nhật ký hôm ấy ghi: “để tôi báo lại”.",
          "face": "happy"
        }
      ],
      "ref": "outro,p6"
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
            "text": "Thứ Sáu 17:00 · cùng bàn ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:desk"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8832,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "envelope-with-arrow",
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
            "at": "l1:desk",
            "caption": "Thứ Sáu 17:00 · lán Ban QLDA",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "j-env",
            "t": "illus",
            "name": "envelope-with-arrow",
            "x": 7932,
            "y": 1250,
            "size": 120,
            "at": "l1:letter"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "“Xác nhận chỉ thị miệng”",
            "x": 8082,
            "y": 1260,
            "size": 40,
            "at": "l1:letter",
            "color": "muted"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "+ thư trả lời: đúng hạn, rõ ràng",
            "x": 8082,
            "y": 1325,
            "size": 40,
            "at": "l2:reply",
            "color": "accent",
            "hl": [
              {
                "text": "rõ ràng",
                "at": "l2:clear"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Lời nói gió bay…",
            "x": 7932,
            "y": 1470,
            "size": 52,
            "at": "l5:wind",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…giấy thì ở lại",
            "x": 7932,
            "y": 1545,
            "size": 52,
            "at": "l5:paper",
            "color": "accent",
            "hl": [
              {
                "text": "ở lại",
                "at": "l5:stays"
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
          "say": "Friday, five p.m. Same desk. Sam's letter is still there.",
          "sub": "Thứ Sáu, năm giờ chiều. Vẫn bàn ấy. Lá thư của Sam vẫn nằm đó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Reply stapled on. Clear, and on time.",
          "sub": "Thư trả lời kẹp kèm. Rõ ràng, đúng hạn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good. And the authority letters, all sent to the contractor? Right, that's it!",
          "sub": "Tốt. Văn bản uỷ quyền gửi nhà thầu đủ chưa? Rồi, vậy nha!",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "All sent. Copies in the file.",
          "sub": "Gửi đủ rồi ạ. Bản lưu trong hồ sơ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Spoken words fly with the wind. Paper stays. So put it on paper.",
          "sub": "Lời nói gió bay. Giấy thì ở lại. Nên hãy ghi giấy.",
          "keys": [
            "Giấy thì ở lại"
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
      "ref": "p6,outro"
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
            "at": "l1:writing",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:diary",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:requirements",
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
            "x": 5536,
            "y": 20,
            "at": "l1:writing+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 20,
            "at": "l2:diary+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1110,
            "at": "l3:requirements+900"
          },
          {
            "id": "z-src1",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1790,
            "size": 24,
            "at": "l4:case",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-src2",
            "t": "text",
            "text": "Việc cụ thể, đọc chính hợp đồng của bạn và hỏi pháp chế.",
            "x": 7932,
            "y": 1825,
            "size": 24,
            "at": "l4:legal",
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
          "say": "So: a Variation needs writing, from the right person.",
          "sub": "Tóm lại: Thay đổi cần văn bản, của đúng người.",
          "keys": [
            "của đúng người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Oral remarks go into the diary the same day.",
          "sub": "Lời miệng vào nhật ký ngay hôm đó.",
          "keys": [
            "ngay hôm đó"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Price follows the order. And if requirements don't change, usually no Variation.",
          "sub": "Giá theo đúng thứ tự. Yêu cầu không đổi thì thường không có Thay đổi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General information, made-up examples. For your case, ask legal.",
          "sub": "Bài tham khảo chung, tình huống minh hoạ. Việc cụ thể, hỏi pháp chế."
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
        "q": "The contractor sends a letter confirming an oral instruction you never gave, what should you do?",
        "options": [
          "File the letter away, and mention it only if a dispute starts one day",
          "Ignore the letter, because a letter you did not ask for has no effect",
          "Reply clearly in writing that there was no instruction, instead of staying silent"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "envelope-with-arrow",
        "why": "Hãy trả lời rõ bằng văn bản là không có chỉ thị, đừng để văn bản nằm im. Đây là kinh nghiệm chung: im lặng trước văn bản xác nhận dễ bị coi như đồng ý."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The contractor sends a letter confirming an oral instruction you never gave, what should you do?",
          "sub": "Nhà thầu gửi văn bản xác nhận một chỉ thị miệng anh chị chưa từng đưa ra, nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Reply clearly in writing: there was no instruction.",
          "sub": "Trả lời rõ bằng văn bản: không có chỉ thị."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[12]"
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
          "say": "Right now: scan this month's diary, mark every extra work remark without paper.",
          "sub": "Việc làm ngay: rà nhật ký tháng này, đánh dấu mọi câu “làm thêm” chưa có văn bản.",
          "keys": [
            "chưa có văn bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: checking an extension claim. Now, forty questions below!",
          "sub": "Bài sau: nhà thầu xin gia hạn, kiểm hồ sơ ra sao. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): lá thư “Xác nhận chỉ thị miệng” của Sam (lớp chống ăn mòn — câu Dũng nói ở bài tổng pm-epc-daily, nhật ký ghi “để tôi báo lại”) → kéo ra thấy Thảo; lá thư trở lại ở khép vòng s19, kẹp thư trả lời. Dòng thời gian: MỘT TUẦN (thứ Hai 8:00 thư đến → 9:00 câu mẫu Thay đổi p1–p2 → 10:00 gọi Bác Bình, “thử nghĩ xem” p3–p6 → thứ Ba dời nhà điều khiển, làm mẫu 5 bước p7–p9 → thứ Tư định giá p10–p12 → thứ Năm cáp to hơn p13–p15 → thứ Sáu thư tạm dừng, “Khoan đã!” Thảo định nhận giá cho nhanh p16–p18 → 16:00 rà nhật ký (outro) → 17:00 khép vòng). Nhân vật (w145/_series/epc-project-manager.md): Thảo, Bác Bình (pháp chế, trực tuyến), cô Hoa, Sam; Dũng chỉ được nhắc. Ca dao: “Lời nói gió bay” (lật: giấy thì ở lại). BRK: 10 (câu mẫu p1), 07 (rehook bản vẽ), 04 (p14), 11 (ba thứ, outro). Không tên người/dự án/công ty/hợp đồng thật; nguồn báo chí nói “theo báo chí”, không nêu tên báo, hãng luật. Số chỉ từ bài: NĐ 210/2026 Đ4 k5, Điều 84 Luật Xây dựng 2025, [ ] ngày, Điều [ ]. Câu đố questions[12]. Lưu ý chung (#133) ở s20.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
