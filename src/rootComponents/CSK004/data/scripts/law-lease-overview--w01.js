// law-lease-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-lease-overview--w01",
  "unit": {
    "audience": "law-commercial-lease",
    "slug": "law-lease-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thuê văn phòng hay nhà xưởng dài hạn, bên thuê phải lo những gì?",
    "series": "Thuê văn phòng, nhà xưởng không bị động — hợp đồng thuê dài hạn cho pháp chế bên thuê"
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
            "at": 0,
            "fit": [
              "a-doc",
              "a-t"
            ],
            "zoom": 1.3,
            "ms": 0
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-doc",
            "t": "illus",
            "name": "page-facing-up",
            "x": 70,
            "y": 90,
            "size": 200,
            "at": "l1:draft"
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Bản nháp",
            "x": 300,
            "y": 100,
            "size": 120,
            "at": "l1:lease",
            "color": "coral",
            "hl": [
              {
                "text": "Bản nháp",
                "at": "l1:draft"
              }
            ]
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Hợp đồng thuê · 10 năm",
            "x": 310,
            "y": 240,
            "size": 52,
            "at": "l1:ten"
          },
          {
            "id": "a-by",
            "t": "text",
            "text": "do bên cho thuê soạn",
            "x": 310,
            "y": 310,
            "size": 44,
            "at": "l1:landlord",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A draft lease. Ten years long, written by the landlord.",
          "sub": "Một bản nháp hợp đồng thuê. Mười năm, do bên cho thuê soạn.",
          "keys": [
            "bản nháp hợp đồng thuê"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Still warm from the printer. Who reads it, and how?",
          "sub": "Còn ấm hơi máy in. Ai đọc nó, và đọc thế nào?"
        }
      ],
      "beats": {
        "after": 300
      },
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
            "at": "l3",
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "page-facing-up",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "9:00 · Thứ Hai · phòng pháp chế",
            "icon": "office-building"
          },
          {
            "id": "a-rush",
            "t": "text",
            "text": "“Chiều nay ký!”",
            "x": 60,
            "y": 400,
            "size": 52,
            "at": "l3:afternoon",
            "color": "coral",
            "hl": [
              {
                "text": "Chiều nay ký",
                "at": "l3:sign"
              }
            ]
          },
          {
            "id": "a-w0",
            "t": "text",
            "text": "• Ai là chủ toà nhà?",
            "x": 60,
            "y": 480,
            "size": 42,
            "at": "l6:owns"
          },
          {
            "id": "a-w1",
            "t": "text",
            "text": "• Có đang thế chấp?",
            "x": 60,
            "y": 540,
            "size": 42,
            "at": "l6:mortgaged"
          },
          {
            "id": "a-w2",
            "t": "text",
            "text": "• Năm 3 dọn đi: mất bao nhiêu?",
            "x": 60,
            "y": 600,
            "size": 42,
            "at": "l6:year three",
            "hl": [
              {
                "text": "mất bao nhiêu",
                "at": "l6:costs"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 920,
            "y": 650,
            "size": 54,
            "at": "l7:care",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l7:care"
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
          "say": "Meet Thảo, in-house counsel for four years at a service company.",
          "sub": "Đây là Thảo, pháp chế bốn năm ở một công ty dịch vụ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, her director, always at full speed.",
          "sub": "Còn đây là Cô Hoa, giám đốc của Thảo, sống ở tốc độ tối đa.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, just a quick look. We sign this afternoon!",
          "sub": "Thảo xem nhanh nhé. Chiều nay ký!",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Clause one to the end. Fixing typos... wait.",
          "sub": "Từ điều một đến điều cuối. Sửa lỗi chính tả... khoan.",
          "pose": "hold",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Who owns the building? Is it mortgaged? Leaving in year three costs what?",
          "sub": "Ai là chủ toà nhà? Có đang thế chấp? Năm thứ ba dọn đi thì mất bao nhiêu?",
          "keys": [
            "mất bao nhiêu"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: take care first, and you'll have no regrets.",
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
            "text": "Thuê dài hạn: lo những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:worry",
            "hl": [
              {
                "text": "lo những gì",
                "at": "l1:worry"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Giao tài sản · một thời hạn",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l2:hands over"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Bên thuê trả tiền thuê",
            "x": 2028,
            "y": 240,
            "size": 46,
            "at": "l2:pays"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "máy · người · địa chỉ · cải tạo",
            "x": 2028,
            "y": 320,
            "size": 42,
            "at": "l4:Machines",
            "color": "muted"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Hôn nhân có hạn",
            "x": 2028,
            "y": 410,
            "size": 56,
            "at": "l4:marriage",
            "color": "accent",
            "hl": [
              {
                "text": "có hạn",
                "at": "l4:end date"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Bộ luật Dân sự 2015 — hợp đồng thuê tài sản",
            "x": 2028,
            "y": 700,
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
          "say": "So, leasing an office or a factory long term: what must the tenant worry about?",
          "sub": "Vậy thuê văn phòng, nhà xưởng dài hạn, bên thuê phải lo những gì?",
          "keys": [
            "phải lo những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Civil Code 2015: the landlord hands over an asset for a period, the tenant pays rent.",
          "sub": "Bộ luật Dân sự 2015: bên cho thuê giao tài sản dùng trong một thời hạn, bên thuê trả tiền thuê.",
          "keys": [
            "trả tiền thuê"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Machines, staff, your address, fitout money all move in. A marriage with an end date.",
          "sub": "Máy móc, nhân sự, địa chỉ, tiền cải tạo đều dọn vào. Một cuộc hôn nhân có hạn.",
          "keys": [
            "hôn nhân có hạn"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "b-dr",
            "t": "text",
            "text": "Bản nháp: quyền họ may đo",
            "x": 2888,
            "y": 170,
            "size": 42,
            "at": "l1:tailored",
            "color": "coral",
            "hl": [
              {
                "text": "may đo",
                "at": "l1:tailored"
              }
            ]
          },
          {
            "id": "b-dr2",
            "t": "text",
            "text": "quyền mình: chung chung",
            "x": 2888,
            "y": 235,
            "size": 42,
            "at": "l1:one size"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đọc từ điều 1",
            "x": 2888,
            "y": 330,
            "size": 44,
            "at": "l3:clause one",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:end"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: câu hỏi rủi ro trước",
            "x": 2888,
            "y": 410,
            "size": 46,
            "at": "l3:risk",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi rủi ro",
                "at": "l3:risk questions"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 300,
            "h": 110,
            "at": "l4:five stops+400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 560,
            "w": 300,
            "h": 110,
            "at": "l4:five stops+700",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 560,
            "w": 300,
            "h": 110,
            "at": "l4:five stops+1000",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 560,
            "w": 300,
            "h": 110,
            "at": "l4:five stops+1300",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 560,
            "w": 300,
            "h": 110,
            "at": "l4:five stops+1600",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Quyền",
            "x": 2053,
            "y": 570,
            "size": 44,
            "at": "l4:five stops+550"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Tiền",
            "x": 2383,
            "y": 570,
            "size": 44,
            "at": "l4:five stops+850"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Sửa",
            "x": 2713,
            "y": 570,
            "size": 44,
            "at": "l4:five stops+1150"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Rời đi",
            "x": 3043,
            "y": 570,
            "size": 44,
            "at": "l4:five stops+1450"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "KCN",
            "x": 3373,
            "y": 570,
            "size": 44,
            "at": "l4:five stops+1750"
          },
          {
            "id": "b-dd0",
            "t": "text",
            "text": "10:00",
            "x": 2053,
            "y": 622,
            "size": 30,
            "at": "l4:five stops+650",
            "color": "muted"
          },
          {
            "id": "b-dd1",
            "t": "text",
            "text": "11:00",
            "x": 2383,
            "y": 622,
            "size": 30,
            "at": "l4:five stops+950",
            "color": "muted"
          },
          {
            "id": "b-dd2",
            "t": "text",
            "text": "13:30",
            "x": 2713,
            "y": 622,
            "size": 30,
            "at": "l4:five stops+1250",
            "color": "muted"
          },
          {
            "id": "b-dd3",
            "t": "text",
            "text": "15:00",
            "x": 3043,
            "y": 622,
            "size": 30,
            "at": "l4:five stops+1550",
            "color": "muted"
          },
          {
            "id": "b-dd4",
            "t": "text",
            "text": "16:00",
            "x": 3373,
            "y": 622,
            "size": 30,
            "at": "l4:five stops+1850",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The landlord drafts it. Their rights are tailored, yours are one size fits all.",
          "sub": "Bản nháp do bên cho thuê soạn: quyền họ may đo kỹ, quyền bên thuê chung chung.",
          "keys": [
            "may đo kỹ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So ask: if the worst happens in ten years, where does the company stand?",
          "sub": "Nên hãy hỏi: điều xấu nhất xảy ra trong mười năm, công ty đứng ở đâu?",
          "keys": [
            "điều xấu nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not reading from clause one. But risk questions first.",
          "sub": "Không phải đọc từ điều một, mà là câu hỏi rủi ro trước.",
          "keys": [
            "câu hỏi rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five stops, one Monday: the right to lease, money, repairs, leaving, and industrial parks.",
          "sub": "Năm chặng, một ngày thứ Hai: quyền cho thuê, tiền, sửa chữa, rời đi, và khu công nghiệp.",
          "keys": [
            "Năm chặng"
          ]
        }
      ],
      "ref": "p2,p4"
    },
    {
      "id": "s04",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Câu hỏi rủi ro trước, điều khoản sau",
        "hl": "rủi ro",
        "sub": "Đọc như người phải sống với nó mười năm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Risk questions first, clause order second.",
          "sub": "Câu hỏi rủi ro trước, thứ tự điều khoản sau.",
          "keys": [
            "Câu hỏi rủi ro trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read it like you'll live with it for ten years.",
          "sub": "Đọc như người phải sống với nó mười năm."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 10:00 · Quyền cho thuê",
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "office-building",
                "mobile-phone"
              ]
            },
            "at": "l2",
            "caption": "10:00 · Thảo gọi bên cho thuê",
            "icon": "mobile-phone"
          },
          {
            "id": "c-clean",
            "t": "text",
            "text": "“Pháp lý sạch!”",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l3:clean",
            "color": "muted"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Giấy chứng nhận",
            "x": 3996,
            "y": 260,
            "size": 56,
            "at": "l5:certificate",
            "color": "accent",
            "hl": [
              {
                "text": "Giấy chứng nhận",
                "at": "l5:certificate"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "hoặc giấy tờ tương đương",
            "x": 4016,
            "y": 340,
            "size": 42,
            "at": "l5:equivalent"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Luật Kinh doanh bất động sản 2023 (Điều 14)",
            "x": 3996,
            "y": 700,
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
          "say": "First stop: ten a.m. Does the landlord really have the right to lease?",
          "sub": "Chặng một: mười giờ sáng. Bên cho thuê có thật sự được cho thuê không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo calls Lan, who handles leasing for the building owner.",
          "sub": "Thảo gọi cho Lan, người phụ trách cho thuê của chủ toà nhà.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The papers? All clean, don't worry!",
          "sub": "Giấy tờ hả chị? Pháp lý sạch, chị yên tâm!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Great. Then please send the certificate, and more.",
          "sub": "Vậy chị gửi em giấy chứng nhận, và vài giấy nữa nhé.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The Real Estate Business Law 2023 asks for a certificate or equivalent papers.",
          "sub": "Luật Kinh doanh bất động sản 2023 đòi giấy chứng nhận hoặc giấy tờ tương đương.",
          "keys": [
            "giấy chứng nhận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 430,
            "w": 40,
            "h": 40,
            "at": "l1:dispute",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 414,
            "size": 50,
            "at": "l1:dispute+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Không có tranh chấp",
            "x": 4058,
            "y": 420,
            "size": 38,
            "at": "l1:dispute+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 492,
            "w": 40,
            "h": 40,
            "at": "l1:seized",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 476,
            "size": 50,
            "at": "l1:seized+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Không bị kê biên",
            "x": 4058,
            "y": 482,
            "size": 38,
            "at": "l1:seized+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 554,
            "w": 40,
            "h": 40,
            "at": "l1:suspended",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 538,
            "size": 50,
            "at": "l1:suspended+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Không bị đình chỉ",
            "x": 4058,
            "y": 544,
            "size": 38,
            "at": "l1:suspended+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 616,
            "w": 40,
            "h": 40,
            "at": "l2:public",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 600,
            "size": 50,
            "at": "l2:public+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Đã công khai thông tin",
            "x": 4058,
            "y": 606,
            "size": 38,
            "at": "l2:public+200"
          },
          {
            "id": "c-sign",
            "t": "text",
            "text": "Người ký: có quyền với sàn này",
            "x": 4856,
            "y": 650,
            "size": 36,
            "at": "l2:exact floor",
            "hl": [
              {
                "text": "sàn này",
                "at": "l2:floor"
              }
            ]
          },
          {
            "id": "c-um",
            "t": "text",
            "text": "Bồi thường = ô mở sau mưa",
            "x": 4856,
            "y": 705,
            "size": 38,
            "at": "l4:umbrella",
            "color": "coral",
            "hl": [
              {
                "text": "ô mở sau mưa",
                "at": "l4:rain"
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
          "say": "Plus: no dispute pending, not seized for a judgment, not suspended from trading.",
          "sub": "Thêm: không tranh chấp đang giải quyết, không bị kê biên thi hành án, không bị đình chỉ giao dịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Information made public. And the signer holds rights over that exact floor.",
          "sub": "Đã công khai thông tin. Người ký có quyền với đúng phần diện tích ấy.",
          "keys": [
            "đúng phần diện tích"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If an ownership dispute blocks stable use, the Civil Code lets you terminate and claim damages.",
          "sub": "Tranh chấp sở hữu làm không dùng ổn định được: bên thuê được chấm dứt, đòi bồi thường."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But money can't return a fitted out office. An umbrella that opens after the rain.",
          "sub": "Nhưng tiền không trả lại mặt bằng đã cải tạo. Như cái ô bung ra sau cơn mưa.",
          "keys": [
            "cái ô bung ra sau cơn mưa"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "② 11:00 · Tiền",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "money-bag",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "11:00 · phòng họp với Cô Hoa",
            "icon": "money-bag"
          },
          {
            "id": "d-y1",
            "t": "text",
            "text": "Giá năm đầu: rẻ!",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l2:bargain",
            "color": "muted"
          },
          {
            "id": "d-y5",
            "t": "text",
            "text": "Năm 5? Năm 10? Công thức?",
            "x": 5964,
            "y": 225,
            "size": 42,
            "at": "l3:formula",
            "color": "accent",
            "hl": [
              {
                "text": "Công thức",
                "at": "l3:formula"
              }
            ]
          },
          {
            "id": "d-sv",
            "t": "text",
            "text": "Phí dịch vụ tăng riêng?",
            "x": 5964,
            "y": 290,
            "size": 40,
            "at": "l3:service",
            "color": "coral"
          },
          {
            "id": "d-mk",
            "t": "text",
            "text": "Không rõ → giá thị trường",
            "x": 5964,
            "y": 355,
            "size": 40,
            "at": "l4:market",
            "hl": [
              {
                "text": "giá thị trường",
                "at": "l4:market price"
              }
            ]
          },
          {
            "id": "d-mk2",
            "t": "text",
            "text": "lúc, nơi giao kết",
            "x": 6004,
            "y": 410,
            "size": 34,
            "at": "l4:signed",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: eleven a.m. Money.",
          "sub": "Chặng hai: mười một giờ. Tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "The first year rent is a bargain. What else?",
          "sub": "Giá năm đầu rẻ thế. Xem gì nữa?",
          "pose": "thumb",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And year five? Year ten? Which formula? Can service charges rise alone?",
          "sub": "Còn năm năm, năm mười? Công thức nào? Phí dịch vụ tăng riêng không?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Parties agree the rent. No clear deal? Market price where and when you signed.",
          "sub": "Giá do hai bên thoả thuận. Không rõ thì theo giá thị trường nơi và lúc giao kết.",
          "keys": [
            "giá thị trường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So the real question is the formula for every year after.",
          "sub": "Câu hỏi thật là công thức cho mọi năm sau.",
          "keys": [
            "công thức cho mọi năm sau"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-c",
            "t": "text",
            "text": "Điều 328 · Đặt cọc",
            "x": 5964,
            "y": 470,
            "size": 44,
            "at": "l1:deposit",
            "color": "accent"
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "Thực hiện → hoàn hoặc trừ",
            "x": 5964,
            "y": 535,
            "size": 36,
            "at": "l1:performed"
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "Bên đặt từ chối → mất cọc",
            "x": 5964,
            "y": 590,
            "size": 36,
            "at": "l2:payer",
            "color": "coral",
            "hl": [
              {
                "text": "mất cọc",
                "at": "l2:loses"
              }
            ]
          },
          {
            "id": "d-c3",
            "t": "text",
            "text": "Bên nhận từ chối → trả + bằng",
            "x": 5964,
            "y": 645,
            "size": 36,
            "at": "l2:receiver"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then the deposit. Article 328: contract performed, deposit returned or set off.",
          "sub": "Rồi tiền cọc. Điều 328: hợp đồng thực hiện thì cọc được trả lại hoặc trừ vào tiền phải trả.",
          "keys": [
            "Điều 328"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Payer refuses, it loses the deposit. Receiver refuses, it pays it back plus an equal sum.",
          "sub": "Bên đặt cọc từ chối thì mất cọc; bên nhận cọc từ chối thì trả lại cọc và thêm khoản tương đương.",
          "keys": [
            "mất cọc"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Tiền cọc khi hết hạn",
        "wrong": "Hết hạn thuê là đương nhiên nhận lại cọc",
        "right": "Có hạn hoàn và danh mục khoản được trừ",
        "wrongIllus": "money-with-wings",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Lease ends, deposit comes home?",
          "sub": "Hết hạn là cọc tự về nhà?",
          "keys": [
            "cọc tự về nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only with a refund date and a list.",
          "sub": "Chỉ khi có hạn hoàn và danh mục khoản trừ.",
          "keys": [
            "hạn hoàn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p9"
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
            "at": "l3",
            "fit": [
              "d-k1",
              "d-k3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-k1",
            "t": "text",
            "text": "Cọc: bảo đảm gì? trừ gì?",
            "x": 6824,
            "y": 650,
            "size": 38,
            "at": "l3:secures",
            "color": "accent"
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "hoàn trong bao lâu?",
            "x": 6824,
            "y": 705,
            "size": 38,
            "at": "l3:refunded",
            "color": "accent",
            "hl": [
              {
                "text": "bao lâu",
                "at": "l3:how soon"
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
          "say": "Landlord drafts deduct repairs, unpaid bills, restoration costs.",
          "sub": "Bản nháp bên cho thuê hay cho trừ vào cọc tiền sửa chữa, điện nước còn nợ, chi phí hoàn trả."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No refund date, no list? The tenant can only negotiate, hat in hand.",
          "sub": "Không hạn hoàn, không danh mục? Bên thuê chỉ còn cách thương lượng, tay cầm mũ xin.",
          "keys": [
            "chỉ còn cách thương lượng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So state three things: what it secures, what's deducted, how soon it's refunded.",
          "sub": "Nên điều khoản cọc nói rõ ba thứ: bảo đảm gì, trừ gì, hoàn trong bao lâu.",
          "keys": [
            "ba thứ"
          ]
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
            "text": "③ 13:30 · Ai sửa, ai cải tạo?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain",
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
                "hammer-and-wrench",
                "door"
              ]
            },
            "at": "l1",
            "caption": "13:30 · xem sàn trống",
            "icon": "hammer-and-wrench"
          },
          {
            "id": "e-l",
            "t": "text",
            "text": "Bên cho thuê: hư hỏng, khuyết tật",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l4:landlord",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "giữ đúng mục đích thuê",
            "x": 7972,
            "y": 230,
            "size": 36,
            "at": "l4:fit"
          },
          {
            "id": "e-t1",
            "t": "text",
            "text": "Bên thuê: bảo dưỡng, sửa nhỏ",
            "x": 7932,
            "y": 310,
            "size": 40,
            "at": "l5:maintains"
          },
          {
            "id": "e-t2",
            "t": "text",
            "text": "không chịu hao mòn tự nhiên",
            "x": 7972,
            "y": 370,
            "size": 36,
            "at": "l5:natural wear",
            "hl": [
              {
                "text": "hao mòn tự nhiên",
                "at": "l5:natural wear"
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
          "say": "Third stop: one thirty, a visit to the empty floor.",
          "sub": "Chặng ba: một rưỡi chiều, đi xem sàn trống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Build anything you like. Just hand it back as you found it!",
          "sub": "Chị muốn làm gì thì làm. Trả lại y như lúc nhận là được!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "As we found it? Then who pays for the walls we build?",
          "sub": "Y như lúc nhận? Vậy vách mình dựng thì ai trả tiền?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The Civil Code splits repairs. The landlord keeps it fit for purpose, fixing damage and defects.",
          "sub": "Luật chia đôi việc sửa. Bên cho thuê giữ đúng mục đích thuê, sửa hư hỏng, khuyết tật.",
          "keys": [
            "sửa hư hỏng, khuyết tật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The tenant maintains and does small repairs, but never pays for natural wear.",
          "sub": "Bên thuê bảo dưỡng, sửa nhỏ, nhưng không chịu hao mòn tự nhiên.",
          "keys": [
            "hao mòn tự nhiên"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
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
            "id": "e-f1",
            "t": "text",
            "text": "Có đồng ý → đòi chi phí",
            "x": 7932,
            "y": 460,
            "size": 40,
            "at": "l2:consent"
          },
          {
            "id": "e-f2",
            "t": "text",
            "text": "Trả lại: như khi nhận",
            "x": 7932,
            "y": 530,
            "size": 40,
            "at": "l3:as received"
          },
          {
            "id": "e-ar",
            "t": "arrow",
            "from": [
              8572,
              490
            ],
            "to": [
              8572,
              540
            ],
            "at": "l4:head on",
            "color": "coral"
          },
          {
            "id": "e-clash",
            "t": "text",
            "text": "Va nhau!",
            "x": 8612,
            "y": 480,
            "size": 52,
            "at": "l4:head on",
            "color": "coral",
            "hl": [
              {
                "text": "Va nhau",
                "at": "l4:motorbikes"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Ghi trước: phần nào để lại",
            "x": 8792,
            "y": 640,
            "size": 44,
            "at": "l4:stay",
            "color": "accent",
            "hl": [
              {
                "text": "để lại",
                "at": "l4:stay"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Offices always get fitted out. With consent, the tenant claims reasonable costs.",
          "sub": "Văn phòng luôn được cải tạo. Có đồng ý, bên thuê đòi được chi phí hợp lý.",
          "keys": [
            "chi phí hợp lý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But on return, premises go back as received, except natural wear.",
          "sub": "Nhưng khi trả, phải trả như lúc nhận, trừ hao mòn tự nhiên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two rules head on, like motorbikes in one alley. Unless the lease says which works stay.",
          "sub": "Hai quy định đâm nhau như xe máy trong hẻm, trừ khi hợp đồng nói trước phần cải tạo nào được để lại.",
          "keys": [
            "phần cải tạo nào được để lại"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Năm thứ ba công ty phải dọn đi thì sao?",
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
          "say": "What if, in year three, the company has to move out?",
          "sub": "Năm thứ ba công ty phải dọn đi thì sao?",
          "keys": [
            "phải dọn đi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p3,p13"
    },
    {
      "id": "s14",
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
            "text": "④ 15:00 · Rời sớm, đổi chủ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-428",
            "t": "text",
            "text": "Điều 428 · đơn phương chấm dứt",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:Article",
            "color": "accent"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "• bên kia vi phạm nghiêm trọng",
            "x": 80,
            "y": 1330,
            "size": 38,
            "at": "l2:serious"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• đã thoả thuận · luật quy định",
            "x": 80,
            "y": 1390,
            "size": 38,
            "at": "l2:agreement"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Không căn cứ → thành bên vi phạm",
            "x": 60,
            "y": 1470,
            "size": 42,
            "at": "l3:without",
            "color": "coral",
            "hl": [
              {
                "text": "bên vi phạm",
                "at": "l3:breach"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Ghi rõ: báo trước + khoản trả",
            "x": 60,
            "y": 1550,
            "size": 38,
            "at": "l4:write",
            "hl": [
              {
                "text": "báo trước",
                "at": "l4:notice"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Bộ luật Dân sự 2015 (Điều 428); Luật Kinh doanh bất động sản 2023",
            "x": 60,
            "y": 1790,
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
          "say": "Fourth stop: three p.m. In ten years, plans change.",
          "sub": "Chặng bốn: ba giờ chiều. Mười năm, kế hoạch nào cũng có thể đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article 428: you may end it on a serious breach, by agreement, or where law says so.",
          "sub": "Điều 428: được đơn phương chấm dứt khi bên kia vi phạm nghiêm trọng, đã thoả thuận, hoặc luật quy định.",
          "keys": [
            "Điều 428"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Notice must be given at once. Ending without grounds makes you the party in breach.",
          "sub": "Phải thông báo ngay. Chấm dứt không có căn cứ thì bị coi là bên vi phạm.",
          "keys": [
            "bên vi phạm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So write in the early exit, with a notice period and a sum to pay.",
          "sub": "Nên ghi quyền rút sớm vào hợp đồng, kèm thời hạn báo trước và khoản phải trả.",
          "keys": [
            "thời hạn báo trước"
          ]
        }
      ],
      "ref": "p13"
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
            "id": "f-5",
            "t": "text",
            "text": "Nợ 3 kỳ liên tiếp → chấm dứt",
            "x": 920,
            "y": 1260,
            "size": 36,
            "at": "l1:three"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Toà nhà bán → vẫn thuê tiếp",
            "x": 920,
            "y": 1330,
            "size": 40,
            "at": "l2:sold",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn thuê tiếp",
                "at": "l2:continues"
              }
            ]
          },
          {
            "id": "f-6b",
            "t": "text",
            "text": "theo điều kiện đã thoả thuận",
            "x": 960,
            "y": 1390,
            "size": 34,
            "at": "l2:agreed terms"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The other way: unpaid rent for three periods in a row lets the landlord end it.",
          "sub": "Ngược lại: bên thuê không trả tiền ba kỳ liên tiếp thì bên cho thuê được chấm dứt.",
          "keys": [
            "ba kỳ liên tiếp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Building sold? Under the 2023 law, the tenant continues on the agreed terms.",
          "sub": "Toà nhà được bán? Theo luật 2023, bên thuê được tiếp tục thuê theo điều kiện đã thoả thuận.",
          "keys": [
            "tiếp tục thuê"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "15:00 · chuẩn bị đàm phán",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Rút sớm không mất gì",
          "why": "Dễ bị từ chối, hoặc bị đổi bằng giá thuê cao hơn suốt mười năm.",
          "rule": "Rút sớm có giá: báo trước, trả khoản đã định"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "I'll ask for a free early exit. Leave any time, pay nothing!",
          "sub": "Em sẽ xin quyền rút sớm không mất gì. Đi lúc nào cũng được, khỏi trả!",
          "pose": "explain",
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
          "say": "Fast forward: refused, or accepted with higher rent for ten years.",
          "sub": "Tua nhanh: bị từ chối, hoặc được gật kèm giá thuê cao hơn suốt mười năm.",
          "keys": [
            "giá thuê cao hơn"
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
          "who": "thao",
          "say": "We may leave early with notice, and pay a fixed sum. In writing.",
          "sub": "Mình được rút sớm nếu báo trước và trả một khoản đã định. Ghi rõ trên giấy.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "They can price their loss, we know our maximum. Right, deal!",
          "sub": "Họ tính trước được thiệt hại, mình biết mức tối đa. Rồi, vậy nha!",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "f-k",
            "t": "text",
            "text": "Rút sớm có giá > hứa linh hoạt",
            "x": 920,
            "y": 1510,
            "size": 42,
            "at": "l1:priced",
            "color": "accent",
            "hl": [
              {
                "text": "có giá",
                "at": "l1:priced"
              }
            ]
          },
          {
            "id": "f-ca",
            "t": "text",
            "text": "“Mất lòng trước, được lòng sau”",
            "x": 920,
            "y": 1610,
            "size": 40,
            "at": "l2:frankly",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A priced exit with a clear number is often worth more than a flexible promise with no number.",
          "sub": "Quyền rút sớm có giá rõ ràng thường đáng giá hơn một lời hứa linh hoạt không ghi số.",
          "keys": [
            "có giá rõ ràng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As our elders say: speak frankly first, stay friends later.",
          "sub": "Ông bà nói: “Mất lòng trước, được lòng sau.”",
          "keys": [
            "Mất lòng trước, được lòng sau"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s18",
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:00 · Khu công nghiệp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "factory",
                "mobile-phone"
              ]
            },
            "at": "l2",
            "caption": "16:00 · Dũng gọi từ xưởng",
            "icon": "factory"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "“Như thuê văn phòng thôi!”",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l3:same",
            "color": "muted"
          },
          {
            "id": "g-nx",
            "t": "strike",
            "over": "g-n",
            "at": "l4:Not quite"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Cho thuê: chủ đầu tư hạ tầng",
            "x": 2028,
            "y": 1340,
            "size": 40,
            "at": "l4:developer",
            "color": "accent",
            "hl": [
              {
                "text": "chủ đầu tư hạ tầng",
                "at": "l4:infrastructure"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Thời hạn đất = thời hạn dự án",
            "x": 2028,
            "y": 1420,
            "size": 42,
            "at": "l5:project"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Đặt cạnh: thời hạn còn lại",
            "x": 2028,
            "y": 1500,
            "size": 42,
            "at": "l5:remaining",
            "color": "coral",
            "hl": [
              {
                "text": "còn lại",
                "at": "l5:remaining"
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
          "say": "Fifth stop: four p.m. Thảo's phone rings.",
          "sub": "Chặng năm: bốn giờ chiều. Điện thoại Thảo reo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, her old classmate, in-house counsel at a factory in a park.",
          "sub": "Đây là Dũng, bạn học cũ, pháp chế một xưởng trong khu công nghiệp.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "A factory lease in the park? Same as an office. Let's sign!",
          "sub": "Thuê xưởng trong khu à? Như thuê văn phòng thôi. Ký luôn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not quite. In a park, the landlord is usually the infrastructure developer.",
          "sub": "Chưa hẳn. Trong khu, bên cho thuê thường là chủ đầu tư hạ tầng.",
          "keys": [
            "chủ đầu tư hạ tầng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Land Law 2024: land there follows the project term. Check the remaining term.",
          "sub": "Luật Đất đai 2024: đất trong khu theo thời hạn dự án. Xem thời hạn còn lại.",
          "keys": [
            "thời hạn còn lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": "l4",
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
            "id": "g-4",
            "t": "text",
            "text": "Trả tiền năm: cho thuê tài sản",
            "x": 2028,
            "y": 1580,
            "size": 38,
            "at": "l1:assets"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Thuê lại đất: cần hạ tầng xong",
            "x": 2028,
            "y": 1640,
            "size": 38,
            "at": "l2:infrastructure",
            "hl": [
              {
                "text": "cần hạ tầng xong",
                "at": "l2:built"
              }
            ]
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "Thuê xưởng hay thuê lại đất?",
            "x": 2888,
            "y": 1740,
            "size": 38,
            "at": "l4:factory",
            "color": "accent"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "Khu còn bao lâu?",
            "x": 2888,
            "y": 1795,
            "size": 38,
            "at": "l4:left",
            "color": "accent",
            "hl": [
              {
                "text": "bao lâu",
                "at": "l4:how long"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Luật Đất đai 2024 · đang sửa đổi, kỳ họp 17/10–21/11/2026",
            "x": 2028,
            "y": 1790,
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
          "say": "Did you know? Renting land with yearly payments, you may lease out your assets on it.",
          "sub": "Bạn có biết: thuê đất trả tiền hằng năm vẫn được cho thuê tài sản gắn liền với đất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But subleasing land needs built infrastructure, in parks, clusters or high tech parks.",
          "sub": "Nhưng cho thuê lại quyền sử dụng đất chỉ khi đã xong hạ tầng, trong khu, cụm công nghiệp, khu công nghệ cao.",
          "keys": [
            "cho thuê lại quyền sử dụng đất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the Land Law is being amended, October seventeenth to November twenty first. Check again after.",
          "sub": "Luật Đất đai đang sửa ở kỳ họp 17/10–21/11/2026. Kiểm lại sau kỳ họp.",
          "keys": [
            "Kiểm lại sau kỳ họp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "So I ask: a factory, or sublet land? And how long is left?",
          "sub": "Vậy mình hỏi: thuê xưởng hay thuê lại đất? Và khu còn bao lâu?",
          "face": "thinking"
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
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "17:00 · Bảng kiểm năm dòng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Five p.m.",
            "hl": [
              {
                "text": "năm dòng",
                "at": "l1:checklist"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
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
                "clipboard",
                "fountain-pen"
              ]
            },
            "at": "l1",
            "caption": "17:00 · trước buổi đàm phán",
            "icon": "clipboard"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1265,
            "w": 40,
            "h": 40,
            "at": "l2:paper",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1249,
            "size": 50,
            "at": "l2:paper+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Ai có quyền? Giấy gì?",
            "x": 4058,
            "y": 1255,
            "size": 38,
            "at": "l2:paper+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1337,
            "w": 40,
            "h": 40,
            "at": "l2:formula",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1321,
            "size": 50,
            "at": "l2:formula+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Giá, công thức, phí, cọc",
            "x": 4058,
            "y": 1327,
            "size": 38,
            "at": "l2:formula+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1409,
            "w": 40,
            "h": 40,
            "at": "l4:repairs",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1393,
            "size": 50,
            "at": "l4:repairs+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Sửa chữa, cải tạo: ai?",
            "x": 4058,
            "y": 1399,
            "size": 38,
            "at": "l4:repairs+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1481,
            "w": 40,
            "h": 40,
            "at": "l4:exit",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1465,
            "size": 50,
            "at": "l4:exit+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Rút sớm, khoản trả, đổi chủ",
            "x": 4058,
            "y": 1471,
            "size": 38,
            "at": "l4:exit+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1553,
            "w": 40,
            "h": 40,
            "at": "l5:park",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1537,
            "size": 50,
            "at": "l5:park+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "KCN: thời hạn, loại giao dịch",
            "x": 4058,
            "y": 1543,
            "size": 38,
            "at": "l5:park+200"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "Dòng trống → câu hỏi gửi đi",
            "x": 3996,
            "y": 1650,
            "size": 44,
            "at": "l6:question",
            "color": "coral",
            "hl": [
              {
                "text": "câu hỏi gửi đi",
                "at": "l6:question"
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
          "say": "Five p.m. Before the negotiation, Thảo builds a five line checklist.",
          "sub": "Năm giờ chiều. Trước buổi đàm phán, Thảo dựng một bảng kiểm năm dòng.",
          "keys": [
            "bảng kiểm năm dòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: who may lease, which paper. Two: rent, formula, charges, deposit.",
          "sub": "Một: ai có quyền, giấy gì. Hai: giá, công thức, phí, cọc.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three: repairs for each side. Four: early exit, its price, a new owner.",
          "sub": "Ba: sửa chữa mỗi bên. Bốn: rút sớm, khoản trả, đổi chủ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Five: in a park, the remaining term and the deal type.",
          "sub": "Năm: ở khu công nghiệp, thời hạn còn lại, loại giao dịch.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Any line the draft can't answer becomes a question for the landlord.",
          "sub": "Dòng nào bản nháp không trả lời được thì thành câu hỏi gửi bên cho thuê.",
          "keys": [
            "câu hỏi gửi bên cho thuê"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s21",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-k",
            "t": "text",
            "text": "Mỗi chặng = một điều khoản",
            "x": 3996,
            "y": 1730,
            "size": 46,
            "at": "l1:clause",
            "color": "accent",
            "hl": [
              {
                "text": "một điều khoản",
                "at": "l1:clause"
              }
            ]
          },
          {
            "id": "h-o1",
            "t": "text",
            "text": "Thuê căn hộ cá nhân → chuỗi khác",
            "x": 4856,
            "y": 1740,
            "size": 34,
            "at": "l2:flat",
            "color": "muted"
          },
          {
            "id": "h-o2",
            "t": "text",
            "text": "Phạt, bồi thường → chuỗi khác",
            "x": 4856,
            "y": 1795,
            "size": 34,
            "at": "l2:penalties",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Every risk stop needs a clause that answers it. An empty stop is where you ask, before you sign.",
          "sub": "Mỗi chặng rủi ro cần một điều khoản trả lời. Chặng nào trống là chỗ phải hỏi trước khi ký.",
          "keys": [
            "phải hỏi trước khi ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Renting a flat yourself, or penalties in general? Other series cover those.",
          "sub": "Thuê căn hộ cá nhân, hay phạt, bồi thường nói chung? Có chuỗi khác lo."
        }
      ],
      "ref": "p21,p22"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "17:30 · Cùng bàn ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Five thirty"
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
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "clipboard"
              ]
            },
            "at": "l1",
            "caption": "17:30 · cùng bản nháp ấy",
            "icon": "page-facing-up"
          },
          {
            "id": "i-doc",
            "t": "illus",
            "name": "page-facing-up",
            "x": 5964,
            "y": 1260,
            "size": 120,
            "at": "l1:draft"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Bản nháp + bảng kiểm",
            "x": 6104,
            "y": 1280,
            "size": 46,
            "at": "l3:questions"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Chưa ký: gửi 5 câu hỏi",
            "x": 5964,
            "y": 1420,
            "size": 46,
            "at": "l3:Not yet",
            "color": "accent",
            "hl": [
              {
                "text": "gửi 5 câu hỏi",
                "at": "l3:Five questions"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 5964,
            "y": 1610,
            "size": 58,
            "at": "l5:care",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l5:care"
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
          "say": "Five thirty. Same desk, same draft.",
          "sub": "Năm rưỡi chiều. Vẫn cái bàn ấy, vẫn bản nháp ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, Thảo. Do we sign this afternoon?",
          "sub": "Sao Thảo, chiều nay ký chứ?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Not yet. Five questions go to the landlord first. Then we sign, eyes open.",
          "sub": "Chưa ạ. Gửi năm câu hỏi cho bên cho thuê trước, rồi ký với đôi mắt mở to.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right. Send them today!",
          "sub": "Rồi, vậy nha! Gửi ngay hôm nay!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Take care first, no regrets. The draft now wears its checklist like a seatbelt.",
          "sub": "“Cẩn tắc vô áy náy.” Bản nháp giờ đeo bảng kiểm như thắt dây an toàn.",
          "keys": [
            "thắt dây an toàn"
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
      "ref": "outro"
    },
    {
      "id": "s23",
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
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2:lease",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:money",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:repairs",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3b",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Năm câu hỏi · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:lease"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 40,
            "at": "l2:money"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 9432,
            "y": 40,
            "at": "l3:repairs+300"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 1560,
            "y": 1130,
            "at": "l3b:leave+300"
          },
          {
            "id": "z-5",
            "t": "badge",
            "n": 5,
            "x": 3528,
            "y": 1130,
            "at": "l4:park"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Hôm nay: bảng kiểm năm dòng",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l5:Today",
            "color": "accent",
            "hl": [
              {
                "text": "năm dòng",
                "at": "l5:five line"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "cho bản nháp trên bàn bạn",
            "x": 7952,
            "y": 1340,
            "size": 42,
            "at": "l5:desk"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: giấy tờ quyền cho thuê",
            "x": 7932,
            "y": 1450,
            "size": 38,
            "at": "l6:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1710,
            "size": 28,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Quy định có thể thay đổi; Luật Đất đai đang sửa — kiểm lại trước khi áp dụng.",
            "x": 7932,
            "y": 1760,
            "size": 28,
            "at": "l6",
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
          "say": "So, five questions make a long lease safe.",
          "sub": "Tóm lại, năm câu hỏi giữ an toàn cho một hợp đồng thuê dài hạn.",
          "keys": [
            "năm câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Who may lease. How the money moves.",
          "sub": "Ai có quyền cho thuê. Tiền đi thế nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Who repairs and fits out.",
          "sub": "Ai sửa chữa, cải tạo."
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "det",
          "say": "How you leave early.",
          "sub": "Rời đi sớm ra sao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And in a park, how long is left.",
          "sub": "Và ở khu công nghiệp, còn bao lâu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: build a five line checklist for the draft on your desk.",
          "sub": "Việc làm ngay: dựng bảng kiểm năm dòng cho bản nháp đang trên bàn bạn.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: papers that prove the right to lease. Rules change, so check first.",
          "sub": "Bài tiếp: giấy tờ chứng minh quyền cho thuê. Quy định có thể đổi, kiểm lại trước."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "What does the takeaway say about early exit rights?",
        "options": [
          "A priced exit right is often worth more than a vague promise of flexibility",
          "An exit right is useless, because tenants never move during a long lease",
          "An exit right should be kept secret until the lease has been signed"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Quyền rút sớm có giá rõ ràng đáng giá hơn lời hứa linh hoạt không ghi số."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does the takeaway say about early exit rights?",
          "sub": "Câu rút ra nói gì về quyền rút sớm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A priced exit right is often worth more than a vague promise of flexibility.",
          "sub": "Quyền rút sớm có giá rõ ràng thường đáng giá hơn lời hứa linh hoạt."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A clear number beats a vague promise.",
          "sub": "Một con số rõ ràng thắng một lời hứa mơ hồ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[31]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Thuê văn phòng, nhà xưởng dài hạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật kể chuyện (bản nháp hợp đồng thuê 10 năm trên bàn → kết 17:30 cùng bàn, bản nháp kẹp bảng kiểm năm dòng). Đét đứng trái + bảng trắng 10 ô theo MỘT NGÀY THỨ HAI của Thảo: 9:00 Cô Hoa “chiều nay ký” (p3) → câu hỏi chính (p1, p2; BRK-02 p4) → 10:00 quyền cho thuê, gọi Lan (p5, p6) → 11:00 tiền với Cô Hoa (p7, p8; BRK-04 p9; p10) → 13:30 xem sàn trống, sửa chữa/cải tạo (p11, p12) → BRK-07 rehook → 15:00 rời sớm, đổi chủ (p13, p14; “Khoan đã!” rút sớm miễn phí p15; p16) → 16:00 Dũng gọi từ khu công nghiệp (p17–p19) → 17:00 bảng kiểm năm dòng (p20–p22) → 17:30 khép vòng “Cẩn tắc vô áy náy”. Nhân vật: Thảo (vai “Ngọc”), Cô Hoa, Lan, Dũng. Mọi điều, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
