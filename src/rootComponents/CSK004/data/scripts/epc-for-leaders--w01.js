// epc-for-leaders--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "epc-for-leaders--w01",
  "unit": {
    "audience": "epc-owner-executive",
    "slug": "epc-for-leaders",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Ký một hợp đồng EPC nhà máy điện là mua cái gì và chấp nhận rủi ro gì?",
    "series": "Hợp đồng EPC trên bàn lãnh đạo — cho HĐQT và Ban Tổng Giám đốc, quyết đúng thẩm quyền và không im lặng sai lúc"
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
              "a-tt"
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
            "size": 220,
            "at": "l1:board paper"
          },
          {
            "id": "a-tt",
            "t": "text",
            "text": "Tờ trình: vài trang",
            "x": 320,
            "y": 140,
            "size": 60,
            "at": "l1:few pages",
            "hl": [
              {
                "text": "vài trang",
                "at": "l1:few pages"
              }
            ]
          },
          {
            "id": "a-bk",
            "t": "illus",
            "name": "books",
            "x": 330,
            "y": 250,
            "size": 110,
            "at": "l2:hundreds"
          },
          {
            "id": "a-hd",
            "t": "text",
            "text": "phía sau: hàng trăm trang",
            "x": 460,
            "y": 270,
            "size": 46,
            "at": "l2:hundreds+200",
            "color": "coral"
          },
          {
            "id": "a-vote",
            "t": "text",
            "text": "Biểu quyết?",
            "x": 70,
            "y": 420,
            "size": 60,
            "at": "l3:vote",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A board paper on the meeting table. Just a few pages.",
          "sub": "Một tờ trình trên bàn họp. Chỉ vài trang.",
          "keys": [
            "vài trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Behind it sit hundreds of pages of EPC clauses.",
          "sub": "Phía sau là hàng trăm trang điều khoản EPC.",
          "keys": [
            "hàng trăm trang"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the board has to vote on it.",
          "sub": "Và Hội đồng quản trị phải biểu quyết."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
            "x": 900,
            "y": 110,
            "w": 780,
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
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "think"
                }
              ],
              "props": [
                "page-facing-up",
                "books"
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
                  "on": "binh",
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
            "caption": "Thứ Hai · phòng họp HĐQT",
            "icon": "office-building"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tiền nào của nấy”",
            "x": 70,
            "y": 560,
            "size": 58,
            "at": "l6:pay for",
            "color": "accent",
            "hl": [
              {
                "text": "của nấy",
                "at": "l6:pay for"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ rủi ro nào đi kèm?",
            "x": 70,
            "y": 660,
            "size": 48,
            "at": "l7:which risks"
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
          "say": "Board secretary and assistant to the CEO. She wrote this paper.",
          "sub": "Thư ký Hội đồng quản trị, kiêm trợ lý Tổng Giám đốc. Tờ trình này do cô soạn.",
          "keys": [
            "Thư ký Hội đồng quản trị"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A short paper for the board. The thick contract stays in the drawer.",
          "sub": "Tờ trình gọn cho Hội đồng. Còn hợp đồng dày cộp nằm trong ngăn kéo em.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Mr Bình, the chairman. Slow, warm, never in a hurry.",
          "sub": "Còn đây là bác Bình, Chủ tịch Hội đồng quản trị. Chậm, ấm, chẳng bao giờ vội.",
          "keys": [
            "Chủ tịch Hội đồng quản trị"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Before I raise my hand, what exactly are we buying?",
          "sub": "Từ từ, mình xem lại đã. Trước khi giơ tay, mình mua cái gì?",
          "pose": "think"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders said: you get what you pay for.",
          "sub": "Ông bà dặn: “Tiền nào của nấy.”",
          "keys": [
            "Tiền nào của nấy"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "With EPC, also ask: which risks come with that price?",
          "sub": "Với EPC, còn phải hỏi: rủi ro nào đi kèm giá ấy?",
          "keys": [
            "rủi ro nào đi kèm"
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
            "text": "Ký EPC: mua gì, gánh gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:what do you buy",
            "hl": [
              {
                "text": "gánh gì",
                "at": "l1:risks"
              }
            ]
          },
          {
            "id": "b-a1",
            "t": "text",
            "text": "Mua: nhà máy chạy được",
            "x": 2028,
            "y": 160,
            "size": 56,
            "at": "l2:plant that runs",
            "color": "accent",
            "hl": [
              {
                "text": "chạy được",
                "at": "l2:runs"
              }
            ]
          },
          {
            "id": "b-a2",
            "t": "text",
            "text": "Trọn gói · mốc chắc",
            "x": 2028,
            "y": 250,
            "size": 48,
            "at": "l2:lump sum"
          },
          {
            "id": "b-a3",
            "t": "text",
            "text": "Một đầu mối thiết kế",
            "x": 2668,
            "y": 250,
            "size": 48,
            "at": "l2:one contractor"
          },
          {
            "id": "b-a4",
            "t": "text",
            "text": "Đổi lại: vẫn giữ vài rủi ro",
            "x": 2028,
            "y": 330,
            "size": 48,
            "at": "l3:keeps",
            "color": "coral"
          },
          {
            "id": "b-a5",
            "t": "text",
            "text": "+ trả lời đúng hạn",
            "x": 2728,
            "y": 330,
            "size": 48,
            "at": "l3:on time",
            "hl": [
              {
                "text": "đúng hạn",
                "at": "l3:on time"
              }
            ]
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 440,
            "w": 250,
            "h": 100,
            "at": "l4:six stops+400",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2303,
            "y": 440,
            "w": 250,
            "h": 100,
            "at": "l4:six stops+650",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2578,
            "y": 440,
            "w": 250,
            "h": 100,
            "at": "l4:six stops+900",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 2853,
            "y": 440,
            "w": 250,
            "h": 100,
            "at": "l4:six stops+1150",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 3128,
            "y": 440,
            "w": 250,
            "h": 100,
            "at": "l4:six stops+1400",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s5b",
            "t": "box",
            "x": 3403,
            "y": 440,
            "w": 250,
            "h": 100,
            "at": "l4:six stops+1650",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Mua gì",
            "x": 2046,
            "y": 465,
            "size": 38,
            "at": "l4:six stops+550"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Trọn gói",
            "x": 2321,
            "y": 465,
            "size": 38,
            "at": "l4:six stops+800"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Trụ cột",
            "x": 2596,
            "y": 465,
            "size": 38,
            "at": "l4:six stops+1050"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Chuỗi HĐ",
            "x": 2871,
            "y": 465,
            "size": 38,
            "at": "l4:six stops+1300"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ 9 nhóm",
            "x": 3146,
            "y": 465,
            "size": 38,
            "at": "l4:six stops+1550"
          },
          {
            "id": "b-s5",
            "t": "text",
            "text": "⑥ Ai duyệt",
            "x": 3421,
            "y": 465,
            "size": 38,
            "at": "l4:six stops+1800"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần trước phiên họp HĐQT",
            "x": 2028,
            "y": 600,
            "size": 50,
            "at": "l4:one week",
            "hl": [
              {
                "text": "phiên họp HĐQT",
                "at": "l4:board meeting"
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
          "say": "So, sign a power plant EPC contract: what do you buy, and what risks do you accept?",
          "sub": "Vậy ký hợp đồng EPC nhà máy điện là mua cái gì, và chấp nhận rủi ro gì?",
          "keys": [
            "chấp nhận rủi ro gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: a plant that runs. A lump sum, firm dates, one contractor for design.",
          "sub": "Trả lời ngắn: một nhà máy chạy được. Giá trọn gói, mốc chắc, một đầu mối chịu trách nhiệm thiết kế.",
          "keys": [
            "một nhà máy chạy được"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In return, the owner keeps some risks, and must answer on time, all the way.",
          "sub": "Đổi lại, chủ đầu tư vẫn giữ một số rủi ro, và phải trả lời đúng hạn suốt quá trình.",
          "keys": [
            "trả lời đúng hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One week before the board meeting, six stops. Pens ready.",
          "sub": "Một tuần trước phiên họp Hội đồng quản trị, sáu chặng. Cầm bút lên.",
          "keys": [
            "sáu chặng"
          ]
        }
      ],
      "ref": "intro,p26"
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
            "text": "① Sáng thứ Hai · EPC mua gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:the ceo"
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
                  "enter": "pop",
                  "at": "l1",
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
                "books",
                "spiral-calendar"
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
            "at": "l1:ms hoa",
            "caption": "Sáng thứ Hai · phòng Tổng Giám đốc",
            "icon": "office-building"
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
            "y": 265,
            "size": 44,
            "at": "l3:procurement"
          },
          {
            "id": "c-kq",
            "t": "text",
            "text": "Mua một kết quả",
            "x": 3996,
            "y": 330,
            "size": 62,
            "at": "l5:buys a result",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả",
                "at": "l5:result"
              }
            ]
          },
          {
            "id": "c-kq2",
            "t": "text",
            "text": "nhà máy chạy, đạt mục đích",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l5:plant that runs"
          },
          {
            "id": "c-dd",
            "t": "text",
            "text": "Nhà thầu: đầy đủ, đồng bộ",
            "x": 3996,
            "y": 500,
            "size": 46,
            "at": "l6:complete",
            "hl": [
              {
                "text": "đầy đủ, đồng bộ",
                "at": "l6:consistent"
              }
            ]
          },
          {
            "id": "c-tt",
            "t": "text",
            "text": "Trả tiền theo mốc chính",
            "x": 3996,
            "y": 580,
            "size": 46,
            "at": "l6:payment"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "NĐ 210/2026, điểm g khoản 1 Điều 6: thiết kế, mua sắm → thi công → chạy thử, nghiệm thu, bàn giao",
            "x": 3996,
            "y": 700,
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
          "say": "Monday morning. Ms Hoa, the CEO, drops the contract on Thảo's desk.",
          "sub": "Sáng thứ Hai. Cô Hoa, Tổng Giám đốc, đặt bộ hợp đồng lên bàn Thảo.",
          "keys": [
            "Tổng Giám đốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Board meets next Monday. Summarise it so they can decide. Right, that's it!",
          "sub": "Thứ Hai tuần sau họp Hội đồng. Em tóm lại cho Hội đồng quyết được. Rồi, vậy nha!",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First stop. EPC means engineering, procurement and construction.",
          "sub": "Chặng một. EPC là thiết kế, mua sắm và thi công.",
          "keys": [
            "thiết kế, mua sắm và thi công"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten: from design and supply to construction, testing, acceptance and handover.",
          "sub": "Nghị định 210/2026: từ thiết kế, mua sắm, cung cấp thiết bị đến thi công, chạy thử, nghiệm thu, bàn giao."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The key: the owner buys a result. A plant that runs, not loose work items.",
          "sub": "Điểm cốt lõi: chủ đầu tư mua một kết quả. Nhà máy chạy được, đạt mục đích, không mua từng hạng mục.",
          "keys": [
            "mua một kết quả"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The contractor answers for complete, consistent design and equipment. Payment follows main milestones.",
          "sub": "Nhà thầu chịu trách nhiệm về tính đầy đủ, đồng bộ của thiết kế, thiết bị, công nghệ. Thanh toán gắn với các mốc chính.",
          "keys": [
            "đầy đủ, đồng bộ"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Chiều thứ Hai · Trọn gói?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:briefs"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up"
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
                }
              ]
            },
            "at": "l1:briefs",
            "caption": "Chiều thứ Hai · báo cáo Chủ tịch",
            "icon": "page-facing-up"
          },
          {
            "id": "d-my",
            "t": "text",
            "text": "Trọn gói = hết rủi ro",
            "x": 5964,
            "y": 160,
            "size": 56,
            "at": "l2:every risk",
            "color": "muted"
          },
          {
            "id": "d-myx",
            "t": "strike",
            "over": "d-my",
            "at": "l3:expensive"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "• Trả tiền đúng hạn",
            "x": 5964,
            "y": 260,
            "size": 46,
            "at": "l4:pays"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "• Giao mặt bằng",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l4:site"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "• Giấy phép phần mình",
            "x": 5964,
            "y": 400,
            "size": 46,
            "at": "l4:permits"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "• Đấu nối: phụ thuộc lưới",
            "x": 5964,
            "y": 470,
            "size": 46,
            "at": "l4:grid",
            "color": "coral"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Gây chậm, không gia hạn",
            "x": 5964,
            "y": 620,
            "size": 50,
            "at": "l5:without"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "→ mốc bỏ ngỏ, mất phạt",
            "x": 5964,
            "y": 690,
            "size": 50,
            "at": "l5:left open",
            "color": "coral",
            "hl": [
              {
                "text": "mốc bỏ ngỏ",
                "at": "l5:left open"
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
          "say": "Monday afternoon. Thảo briefs the chairman.",
          "sub": "Chiều thứ Hai. Thảo báo cáo nhanh bác Chủ tịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Lump sum, then. So every risk now belongs to the contractor?",
          "sub": "Trọn gói rồi. Vậy mọi rủi ro giờ là của nhà thầu hết?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A very common belief. And a very expensive one.",
          "sub": "Hiểu lầm rất phổ biến. Và rất đắt.",
          "keys": [
            "rất đắt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The owner still pays on time, gives the site, gets its own permits. And the grid side controls connection.",
          "sub": "Chủ đầu tư vẫn phải trả tiền đúng hạn, giao mặt bằng, xin giấy phép phần mình. Đấu nối còn phụ thuộc bên lưới."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Delay the contractor without extending time? The completion date may be left open, and penalties lost.",
          "sub": "Gây chậm mà không gia hạn? Mốc hoàn thành có thể bị coi là bỏ ngỏ, mất căn cứ phạt chậm.",
          "keys": [
            "bỏ ngỏ"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Trọn gói là trọn cái gì?",
        "wrong": "Trọn gói là trọn mọi rủi ro",
        "right": "Trọn gói là trọn phần nhà thầu",
        "wrongIllus": "package",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lump sum covers every risk?",
          "sub": "Trọn gói là trọn mọi rủi ro?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. It covers the contractor's part.",
          "sub": "Không. Trọn gói là trọn phần nhà thầu.",
          "keys": [
            "trọn phần nhà thầu"
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
            "id": "d-nx",
            "t": "text",
            "text": "→ bài riêng: 5 rủi ro CĐT giữ",
            "x": 6804,
            "y": 690,
            "size": 40,
            "at": "l2:own lesson",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Then which risks do we still keep?",
          "sub": "Vậy mình còn giữ những rủi ro nào?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five. They get their own lesson in this series.",
          "sub": "Năm rủi ro. Chúng có riêng một bài trong chuỗi này.",
          "keys": [
            "riêng một bài"
          ]
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba · Ba trụ cột",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:three pillars"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "bank",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · bàn thư ký HĐQT",
            "icon": "bank"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1 đầu mối · trọn gói · mốc chắc",
            "x": 7932,
            "y": 160,
            "size": 44,
            "at": "l2:one responsible"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "→ 3 con số: giá · mốc · trần",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l3:three numbers",
            "color": "accent",
            "hl": [
              {
                "text": "3 con số",
                "at": "l3:three numbers"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Đổi lại: giá thường cao hơn",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l4:costs more",
            "color": "coral"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "CĐT ít kiểm soát thiết kế",
            "x": 7932,
            "y": 400,
            "size": 42,
            "at": "l4:controls less"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "NĐ 210/2026 Điều 11: trọn gói phổ biến, không bắt buộc",
            "x": 7932,
            "y": 470,
            "size": 28,
            "at": "l5",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Bên cho vay đọc kỹ nhất",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l6:lenders",
            "hl": [
              {
                "text": "đọc kỹ nhất",
                "at": "l6:most closely"
              }
            ]
          },
          {
            "id": "e-src2",
            "t": "text",
            "text": "Một hãng luật quốc tế: bên vay muốn giá cố định",
            "x": 7932,
            "y": 590,
            "size": 28,
            "at": "l6:firm dates",
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
          "say": "Tuesday. EPC stands on three pillars.",
          "sub": "Thứ Ba. EPC đứng trên ba trụ cột.",
          "keys": [
            "ba trụ cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One responsible party, a lump sum price, a firm completion date.",
          "sub": "Một đầu mối chịu trách nhiệm, giá trọn gói, thời hạn hoàn thành chắc chắn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On a leader's desk: three numbers. Price, the COD and handover dates, and the caps.",
          "sub": "Trên bàn lãnh đạo, chúng thành ba con số: giá, mốc vận hành thương mại và bàn giao, trần phạt và trần trách nhiệm.",
          "keys": [
            "ba con số"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The price of certainty: EPC usually costs more, since risk is priced in. And the owner controls less design.",
          "sub": "Cái giá của sự chắc chắn: EPC thường đắt hơn vì rủi ro đã tính vào giá; chủ đầu tư ít kiểm soát thiết kế.",
          "keys": [
            "rủi ro đã tính vào giá"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten: lump sum is common for EPC, but not compulsory.",
          "sub": "Nghị định 210/2026: giá trọn gói phổ biến cho EPC, nhưng không bắt buộc.",
          "keys": [
            "không bắt buộc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lenders read this contract most closely: one party, firm price, firm dates.",
          "sub": "Bên cho vay đọc hợp đồng này kỹ nhất: một đầu mối, giá chắc, mốc chắc.",
          "keys": [
            "kỹ nhất"
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-tk",
            "t": "text",
            "text": "Chìa khóa trao tay ≠ EPC",
            "x": 7932,
            "y": 680,
            "size": 50,
            "at": "l2:wider",
            "color": "coral",
            "hl": [
              {
                "text": "≠ EPC",
                "at": "l2:not"
              }
            ]
          },
          {
            "id": "e-ask",
            "t": "text",
            "text": "Hỏi tên loại hợp đồng trước",
            "x": 8772,
            "y": 680,
            "size": 46,
            "at": "l4:contract type",
            "color": "accent",
            "hl": [
              {
                "text": "tên loại hợp đồng",
                "at": "l4:contract type"
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
          "say": "Hang on. Our paper says turnkey EPC. Is that the same thing?",
          "sub": "Ơ. Tờ trình ghi “EPC chìa khóa trao tay”. Hai cái là một ạ?",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not under the decree. Turnkey is wider: the contractor even does the feasibility study.",
          "sub": "Theo Nghị định 210/2026 thì không. Chìa khóa trao tay rộng hơn: nhà thầu làm cả Báo cáo nghiên cứu khả thi.",
          "keys": [
            "rộng hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Mix the words, misread the scope.",
          "sub": "Dùng lẫn hai từ, dễ hiểu sai phạm vi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: ask the contract type before you ask the price.",
          "sub": "Rút ra: hỏi rõ tên loại hợp đồng trước khi hỏi giá.",
          "keys": [
            "tên loại hợp đồng"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Phạt chậm bao nhiêu thì đủ bù thiệt hại?",
        "illus": "money-with-wings"
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
          "say": "How big must a delay penalty be?",
          "sub": "Phạt chậm bao nhiêu thì đủ bù thiệt hại?",
          "keys": [
            "đủ bù thiệt hại"
          ]
        }
      ],
      "ref": "p14"
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
            "text": "④ Thứ Tư · Chuỗi hợp đồng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:project contracts"
          },
          {
            "id": "f-up",
            "t": "text",
            "text": "↑ PPA · đấu nối · vay",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:above"
          },
          {
            "id": "f-box",
            "t": "box",
            "x": 60,
            "y": 1325,
            "w": 190,
            "h": 90,
            "at": "l3:beside",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "f-epc",
            "t": "text",
            "text": "EPC",
            "x": 95,
            "y": 1335,
            "size": 56,
            "at": "l3:beside+200",
            "color": "accent"
          },
          {
            "id": "f-side",
            "t": "text",
            "text": "↔ trạm, đường dây: hở?",
            "x": 290,
            "y": 1345,
            "size": 42,
            "at": "l3:gaps",
            "color": "coral",
            "hl": [
              {
                "text": "hở?",
                "at": "l3:gaps"
              }
            ]
          },
          {
            "id": "f-down",
            "t": "text",
            "text": "↓ thầu phụ · nhà sản xuất",
            "x": 60,
            "y": 1440,
            "size": 44,
            "at": "l4:below"
          },
          {
            "id": "f-after",
            "t": "text",
            "text": "→ sau: hợp đồng O&M",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l4:behind"
          },
          {
            "id": "f-bb",
            "t": "text",
            "text": "Back-to-back: PPA → Yêu cầu CĐT",
            "x": 60,
            "y": 1590,
            "size": 44,
            "at": "l5:back to back",
            "color": "accent",
            "hl": [
              {
                "text": "Back-to-back",
                "at": "l5:glue"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Luật Điện lực 2024, khoản 1 Điều 12: mốc tiến độ ghi trong Giấy chứng nhận đăng ký đầu tư",
            "x": 60,
            "y": 1690,
            "size": 28,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-src2",
            "t": "text",
            "text": "Trễ mốc pháp lý: kiểm văn bản hiện hành (dự án luật sửa đổi đang thảo luận, 10/2026)",
            "x": 60,
            "y": 1735,
            "size": 28,
            "at": "l6:follow",
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
          "say": "Wednesday. Where does EPC sit among the project contracts?",
          "sub": "Thứ Tư. Hợp đồng EPC nằm ở đâu giữa các hợp đồng của dự án?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Above it: approvals, permits, the power purchase deal, grid connection, the loan.",
          "sub": "Phía trên: chủ trương đầu tư, giấy phép, hợp đồng mua bán điện, thỏa thuận đấu nối, hợp đồng vay.",
          "keys": [
            "Phía trên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Beside it: other packages like the substation and lines. Scope gaps hide there.",
          "sub": "Ngang hàng: các gói như trạm biến áp, đường dây, nơi dễ hở phạm vi.",
          "keys": [
            "dễ hở phạm vi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Below: subcontractors and equipment makers. Behind: the O and M contract.",
          "sub": "Phía dưới: thầu phụ, nhà sản xuất thiết bị. Phía sau: hợp đồng vận hành, bảo dưỡng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The glue is back to back. Grid duties in the power deal flow into the owner's requirements.",
          "sub": "Keo dán là back-to-back: nghĩa vụ kỹ thuật trong hợp đồng mua bán điện phải đi vào Yêu cầu của Chủ đầu tư.",
          "keys": [
            "back-to-back"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The Electricity Law puts project milestones in the investment certificate. EPC dates must follow, and check current law.",
          "sub": "Luật Điện lực 2024: mốc tiến độ ghi trong Giấy chứng nhận đăng ký đầu tư. Mốc EPC phải bám theo; kiểm văn bản hiện hành.",
          "keys": [
            "Mốc EPC phải bám theo"
          ]
        }
      ],
      "ref": "p11,p12,p13"
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
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
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
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
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
            "at": "l1:young",
            "caption": "Thứ Tư · bảng số cho tờ trình",
            "icon": "bar-chart"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now meet Dũng, a young project officer, building the numbers table for the paper.",
          "sub": "Giờ đến Dũng, chuyên viên ban dự án trẻ, đang làm bảng số cho tờ trình.",
          "keys": [
            "bảng số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Delay penalty rate? Easy. I'll copy the one from our last project.",
          "sub": "Mức phạt chậm à? Dễ. Em chép mức của dự án trước.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · bảng mức phạt",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chép mức phạt dự án cũ",
          "why": "Dự án chậm thì tiền phạt có thể không đủ bù doanh thu điện mất và tiền lãi; phần thiếu chủ đầu tư tự gánh.",
          "rule": "Phạt chậm tính từ thiệt hại của chính dự án"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Copy, paste, send it to the board. Done!",
          "sub": "Chép, dán, gửi Hội đồng. Xong!",
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
          "say": "If the plant is late, the old rate may not cover lost sales and interest. The owner pays the gap.",
          "sub": "Dự án chậm, mức cũ có thể không đủ bù doanh thu điện mất và tiền lãi. Phần thiếu, chủ đầu tư tự gánh.",
          "keys": [
            "chủ đầu tư tự gánh"
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
          "say": "First, finance tables lost revenue and daily interest. Then we set the rate and the cap.",
          "sub": "Trước hết, tài chính lập bảng doanh thu mất và lãi vay theo ngày. Rồi mới chốt mức và trần.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Slower, but the number has a basis.",
          "sub": "Lâu hơn, nhưng con số có căn cứ.",
          "phase": "redo",
          "keys": [
            "con số có căn cứ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-take",
            "t": "text",
            "text": "Phạt chậm = thiệt hại của chính mình",
            "x": 60,
            "y": 1790,
            "size": 46,
            "at": "l1:own",
            "color": "accent",
            "hl": [
              {
                "text": "của chính mình",
                "at": "l1:own"
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
          "say": "Lesson: delay penalties come from your own project's losses.",
          "sub": "Rút ra: phạt chậm phải tính từ thiệt hại của chính dự án mình.",
          "keys": [
            "thiệt hại của chính dự án mình"
          ]
        }
      ],
      "ref": "p15"
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
            "text": "⑤ Thứ Năm · Chín nhóm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:nine groups"
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
                  "id": "binh",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "card-index-dividers"
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
            "at": "l1:sorts",
            "caption": "Thứ Năm · chia hợp đồng thành nhóm",
            "icon": "card-index-dividers"
          },
          {
            "id": "g-9",
            "t": "text",
            "text": "9 nhóm → lãnh đạo đọc 4",
            "x": 2028,
            "y": 1240,
            "size": 46,
            "at": "l4:four",
            "hl": [
              {
                "text": "đọc 4",
                "at": "l4:four"
              }
            ]
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1335,
            "w": 40,
            "h": 40,
            "at": "l4:money",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1317,
            "size": 52,
            "at": "l4:money+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Tiền: giá, mốc trả, bảo lãnh",
            "x": 2092,
            "y": 1327,
            "size": 38,
            "at": "l4:money+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1410,
            "w": 40,
            "h": 40,
            "at": "l4:time",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1392,
            "size": 52,
            "at": "l4:time+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Thời gian và thay đổi",
            "x": 2092,
            "y": 1402,
            "size": 38,
            "at": "l4:time+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1485,
            "w": 40,
            "h": 40,
            "at": "l4:completion",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1467,
            "size": 52,
            "at": "l4:completion+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Hoàn thành: COD, bàn giao",
            "x": 2092,
            "y": 1477,
            "size": 38,
            "at": "l4:completion+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1560,
            "w": 40,
            "h": 40,
            "at": "l4:trouble",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1542,
            "size": 52,
            "at": "l4:trouble+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Sự cố: phạt, trần, chấm dứt",
            "x": 2092,
            "y": 1552,
            "size": 38,
            "at": "l4:trouble+200"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "5 nhóm kia: mỗi nhóm 1 dòng",
            "x": 2028,
            "y": 1635,
            "size": 38,
            "at": "l5:other five",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. Hundreds of pages. Thảo sorts them into nine groups.",
          "sub": "Thứ Năm. Hàng trăm trang. Thảo xếp chúng thành chín nhóm.",
          "keys": [
            "chín nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Framework, scope, money, setting, time and change, completion, trouble, protection, ending.",
          "sub": "Khung, làm gì, tiền, môi trường thực hiện, thời gian và thay đổi, hoàn thành, khi có sự cố, bảo vệ và cam kết, kết thúc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Nine groups? I won't read them all. Which ones are mine?",
          "sub": "Chín nhóm? Bác không đọc hết đâu. Nhóm nào là của bác?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four, at least in summary: money, time and change, completion, and trouble.",
          "sub": "Bốn nhóm, ít nhất phần tóm tắt: tiền; thời gian và thay đổi; hoàn thành; khi có sự cố.",
          "keys": [
            "Bốn nhóm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The other five go to legal, engineering and project teams, one line each.",
          "sub": "Năm nhóm còn lại giao pháp chế, kỹ thuật, quản lý dự án; mỗi nhóm một dòng báo cáo.",
          "keys": [
            "một dòng báo cáo"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "id": "g-j1",
            "t": "text",
            "text": "Mối nối: định nghĩa · mốc",
            "x": 2028,
            "y": 1700,
            "size": 44,
            "at": "l2:definitions"
          },
          {
            "id": "g-j2",
            "t": "text",
            "text": "thanh toán · chuỗi phạt–trần",
            "x": 2028,
            "y": 1755,
            "size": 40,
            "at": "l3:payment"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Đọc bốn nhóm, hỏi bốn mối nối",
            "x": 2868,
            "y": 1780,
            "size": 48,
            "at": "l3:one chain",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi bốn mối nối",
                "at": "l3:one chain"
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
          "say": "Where do contracts crack? At four joints between the groups.",
          "sub": "Hợp đồng hay nứt ở đâu? Ở bốn mối nối giữa các nhóm.",
          "keys": [
            "bốn mối nối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One set of definitions. Matching dates for schedule, payment, penalties and extensions.",
          "sub": "Một bộ định nghĩa chung. Mốc khớp giữa tiến độ, thanh toán, phạt chậm và gia hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Payment triggers matching acceptance. And penalty, extension, cap and termination running as one chain.",
          "sub": "Sự kiện thanh toán trùng nghiệm thu, bàn giao. Chuỗi phạt chậm, gia hạn, trần, chấm dứt chạy liền nhau.",
          "keys": [
            "chạy liền nhau"
          ]
        }
      ],
      "ref": "p19,p21"
    },
    {
      "id": "s16",
      "module": "BRK-11",
      "data": {
        "title": "Đọc tờ trình 15 phút",
        "items": [
          "Giá đổi qua đường nào?",
          "COD cạnh mốc pháp lý, mốc vay",
          "Trần phạt: chạm trần thì sao?",
          "Im lặng: điều nào coi như duyệt?",
          "Ai có thẩm quyền duyệt?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Five: who approves?",
          "sub": "Năm: ai duyệt?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Four: silent approvals?",
          "sub": "Bốn: im lặng là duyệt?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Three: at the cap?",
          "sub": "Ba: chạm trần?"
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Two: COD versus loan date.",
          "sub": "Hai: COD cạnh mốc vay."
        },
        {
          "id": "l5",
          "lang": "en",
          "say": "One: how can the price change?",
          "sub": "Một: giá đổi qua đâu?",
          "keys": [
            "giá đổi qua đâu"
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
          },
          {
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu · Ai duyệt?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:first question"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "classical-building",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                }
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · trước phiên họp",
            "icon": "classical-building"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday. Before signing, the first question: who has the power to approve?",
          "sub": "Thứ Sáu. Trước khi ký, câu hỏi đầu tiên: ai có quyền duyệt?",
          "keys": [
            "ai có quyền duyệt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "This contract is big. The board, or the shareholders' meeting?",
          "sub": "Hợp đồng này lớn. Hội đồng quản trị duyệt, hay phải lên Đại hội đồng cổ đông?",
          "face": "thinking"
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s18",
      "module": "BRK-03",
      "data": {
        "value": 35,
        "suffix": "%",
        "label": "tổng tài sản trong báo cáo tài chính gần nhất",
        "illus": "classical-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The Enterprise Law draws a line.",
          "sub": "Luật Doanh nghiệp 2020 vạch một ngưỡng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Thirty-five percent of total assets, unless the charter says otherwise.",
          "sub": "35% tổng tài sản, trừ khi Điều lệ quy định khác.",
          "keys": [
            "35% tổng tài sản"
          ]
        }
      ],
      "ref": "p22"
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
          }
        ],
        "items": [
          {
            "id": "h-35",
            "t": "text",
            "text": "35%: HĐQT ↔ Đại hội cổ đông",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "l1:splits",
            "color": "accent",
            "hl": [
              {
                "text": "35%",
                "at": "l1:splits"
              }
            ]
          },
          {
            "id": "h-rp",
            "t": "text",
            "text": "Cùng tập đoàn → người liên quan",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l2:same group",
            "color": "coral",
            "hl": [
              {
                "text": "người liên quan",
                "at": "l2:related party"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "LDN 2020, khoản 2 Điều 138 · Điều lệ có thể quy định khác",
            "x": 3996,
            "y": 1410,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-dm",
            "t": "text",
            "text": "“Coi như chấp thuận” sau [ ] ngày",
            "x": 3996,
            "y": 1480,
            "size": 44,
            "at": "l3:deemed",
            "hl": [
              {
                "text": "Coi như chấp thuận",
                "at": "l3:deemed"
              }
            ]
          },
          {
            "id": "h-bg",
            "t": "text",
            "text": "Bàn giao mặc nhiên kéo theo:",
            "x": 3996,
            "y": 1560,
            "size": 42,
            "at": "l4:handover"
          },
          {
            "id": "h-bg2",
            "t": "text",
            "text": "bảo hành chạy · trả bảo lãnh",
            "x": 3996,
            "y": 1630,
            "size": 40,
            "at": "l4:warranty"
          },
          {
            "id": "h-bg3",
            "t": "text",
            "text": "dừng phạt chậm · chuyển rủi ro",
            "x": 3996,
            "y": 1700,
            "size": 40,
            "at": "l4:penalties stop",
            "color": "coral"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Im lặng cũng là một chữ ký",
            "x": 4836,
            "y": 1770,
            "size": 50,
            "at": "l5:silence",
            "color": "accent",
            "hl": [
              {
                "text": "một chữ ký",
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
          "say": "That line splits power between board and shareholders.",
          "sub": "Ngưỡng ấy phân thẩm quyền giữa Hội đồng quản trị và Đại hội đồng cổ đông."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A contractor in the same group? That may bring related party procedures.",
          "sub": "Nhà thầu cùng tập đoàn? Có thể kéo theo thủ tục giao dịch với người có liên quan.",
          "keys": [
            "người có liên quan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After signing, another trap: deemed approval. No reply in a set number of days counts as yes.",
          "sub": "Sau khi ký, thêm một bẫy: điều coi như chấp thuận. Không trả lời trong [ ] ngày là coi như đồng ý.",
          "keys": [
            "coi như chấp thuận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Even handover can be deemed: warranty starts, the bond returns, penalties stop, risk moves.",
          "sub": "Cả bàn giao cũng có thể mặc nhiên: bảo hành chạy, trả bảo lãnh, dừng phạt, chuyển rủi ro."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Silence is also a signature.",
          "sub": "Im lặng cũng là một chữ ký.",
          "keys": [
            "Im lặng cũng là một chữ ký"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s20",
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
          },
          {
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chiều thứ Sáu · Khi chậm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:hard one"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
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
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "hourglass-not-done",
                "page-with-curl"
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
            "at": "l1:afternoon",
            "caption": "Chiều thứ Sáu · họp trước",
            "icon": "hourglass-not-done"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "4 ngả đường:",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l3:four roads",
            "hl": [
              {
                "text": "4 ngả đường",
                "at": "l3:four roads"
              }
            ]
          },
          {
            "id": "i-41",
            "t": "text",
            "text": "• Thu phạt chậm",
            "x": 5964,
            "y": 1330,
            "size": 44,
            "at": "l3:collect"
          },
          {
            "id": "i-42",
            "t": "text",
            "text": "• Gia hạn",
            "x": 6354,
            "y": 1330,
            "size": 44,
            "at": "l3:extend"
          },
          {
            "id": "i-43",
            "t": "text",
            "text": "• Tăng tốc",
            "x": 5964,
            "y": 1400,
            "size": 44,
            "at": "l3:acceleration"
          },
          {
            "id": "i-44",
            "t": "text",
            "text": "• Chấm dứt",
            "x": 6354,
            "y": 1400,
            "size": 44,
            "at": "l3:terminate"
          },
          {
            "id": "i-cap",
            "t": "text",
            "text": "Chạm trần: ngày chậm = 0 đồng",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l4:cap",
            "color": "coral",
            "hl": [
              {
                "text": "0 đồng",
                "at": "l4:nothing more"
              }
            ]
          },
          {
            "id": "i-pl",
            "t": "text",
            "text": "Phụ lục: phạt cũ · bảo lãnh · vay",
            "x": 5964,
            "y": 1730,
            "size": 48,
            "at": "l6:penalties",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday afternoon. Mr Bình asks the hard one.",
          "sub": "Chiều thứ Sáu. Bác Bình hỏi câu khó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "And if the plant is late anyway?",
          "sub": "Thế nếu nhà máy vẫn chậm thì sao?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four roads: collect penalties, extend time, order acceleration, or terminate.",
          "sub": "Bốn ngả đường: thu phạt chậm, gia hạn, chỉ thị tăng tốc, hoặc chấm dứt.",
          "keys": [
            "Bốn ngả đường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Penalties at the cap? Each extra day of delay brings in nothing more.",
          "sub": "Phạt đã chạm trần? Mỗi ngày chậm thêm không thu thêm đồng nào.",
          "keys": [
            "không thu thêm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "They'll offer an amendment with a new date. Do we sign?",
          "sub": "Nhà thầu sẽ đề nghị phụ lục sửa đổi, đặt mốc mới. Ký không?",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "First ask: penalties already due? Bonds and insurance extended? Lenders consent?",
          "sub": "Trước hết hỏi: phạt đã phát sinh xử lý sao? Bảo lãnh, bảo hiểm có gia hạn? Bên cho vay có chấp thuận?",
          "keys": [
            "Bên cho vay"
          ]
        }
      ],
      "ref": "p24,p25"
    },
    {
      "id": "s21",
      "module": "BRK-08",
      "data": {
        "title": "Sáu bài tiếp theo",
        "points": [
          {
            "label": "Ba con số",
            "sub": "giá · mốc · trần",
            "illus": "keycap-3"
          },
          {
            "label": "Rủi ro còn giữ",
            "sub": "dù trọn gói",
            "illus": "balance-scale"
          },
          {
            "label": "Ai duyệt",
            "sub": "thẩm quyền",
            "illus": "classical-building"
          },
          {
            "label": "Không im lặng",
            "sub": "coi như chấp thuận",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Khi chậm",
            "sub": "phạt, gia hạn…",
            "illus": "warning"
          },
          {
            "label": "Phụ lục",
            "sub": "trước khi ký",
            "illus": "page-with-curl"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Six deep dives, from before signing",
          "sub": "Sáu bài đào sâu, đi từ trước khi ký"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "to the day the plant runs late.",
          "sub": "đến lúc dự án chậm.",
          "keys": [
            "dự án chậm"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s22",
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
            "text": "Thứ Hai tuần sau · Họp HĐQT",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same board room"
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
                "page-with-curl"
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
                  "on": "binh",
                  "move": "cut"
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
            "at": "l1:same board room",
            "caption": "Thứ Hai tuần sau · phòng họp HĐQT",
            "icon": "office-building"
          },
          {
            "id": "j-pp",
            "t": "illus",
            "name": "page-facing-up",
            "x": 7932,
            "y": 1240,
            "size": 100,
            "at": "l1:paper"
          },
          {
            "id": "j-pc",
            "t": "illus",
            "name": "page-with-curl",
            "x": 8042,
            "y": 1240,
            "size": 100,
            "at": "l1:one page longer"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Trang 1: ba con số",
            "x": 7932,
            "y": 1370,
            "size": 46,
            "at": "l2:page one"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Trang 2: rủi ro · duyệt · hạn",
            "x": 7932,
            "y": 1440,
            "size": 46,
            "at": "l2:page two",
            "hl": [
              {
                "text": "hạn",
                "at": "l2:deadline"
              }
            ]
          },
          {
            "id": "j-lg",
            "t": "text",
            "text": "Pháp chế: kiểm văn bản hiện hành",
            "x": 7932,
            "y": 1520,
            "size": 40,
            "at": "l4:checked",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Tiền nào của nấy…",
            "x": 7932,
            "y": 1590,
            "size": 52,
            "at": "l5:pay for"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…rủi ro nào, ai trả",
            "x": 7932,
            "y": 1665,
            "size": 52,
            "at": "l5:which risks",
            "color": "accent",
            "hl": [
              {
                "text": "ai trả",
                "at": "l5:pays for"
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
          "say": "Next Monday. Same board room, same paper. But one page longer.",
          "sub": "Thứ Hai tuần sau. Vẫn phòng họp ấy, vẫn tờ trình ấy. Nhưng dày thêm một trang.",
          "keys": [
            "dày thêm một trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Page one: three numbers. Page two: risks we keep, who approves, every deadline.",
          "sub": "Trang một: ba con số. Trang hai: rủi ro mình giữ, ai duyệt, và mọi thời hạn không được im lặng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Good. And legal confirmed which laws are in force?",
          "sub": "Tốt. Pháp chế đã xác nhận văn bản còn hiệu lực chưa?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Yes. Articles and percentages can change, so legal checked them this week.",
          "sub": "Rồi ạ. Số điều, mức phần trăm có thể thay đổi, nên tuần này pháp chế đã kiểm lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "You get what you pay for. Now the board also knows which risks it pays for.",
          "sub": "“Tiền nào của nấy.” Giờ Hội đồng biết cả rủi ro nào mình đang trả tiền.",
          "keys": [
            "Tiền nào của nấy"
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
      "ref": "p27"
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
            "at": "l1:plant",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:contractor",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:silent",
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
            "at": "l1:plant"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 20,
            "at": "l2:contractor"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1110,
            "at": "l3:silent"
          },
          {
            "id": "z-src1",
            "t": "text",
            "text": "Bài để tham khảo chung, không phải tư vấn pháp lý; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1775,
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
            "x": 7932,
            "y": 1812,
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
          "say": "So: EPC buys a plant that runs, with one party, one price, firm dates.",
          "sub": "Tóm lại: EPC mua một nhà máy chạy được, một đầu mối, giá trọn gói, mốc chắc.",
          "keys": [
            "nhà máy chạy được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lump sum covers the contractor's part, not every risk. Read four groups, ask four joints.",
          "sub": "Trọn gói là trọn phần nhà thầu, không phải trọn mọi rủi ro. Đọc bốn nhóm, hỏi bốn mối nối.",
          "keys": [
            "trọn phần nhà thầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And never stay silent past a deadline. General information only, not legal advice.",
          "sub": "Và đừng im lặng quá hạn. Bài là kiến thức chung, không phải tư vấn pháp lý.",
          "keys": [
            "đừng im lặng quá hạn"
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
        "q": "A board member says a lump sum EPC moves every risk to the contractor, what should you answer?",
        "options": [
          "The owner still keeps duties like paying on time, giving site access and its own permits",
          "That is correct only for wind farms, while solar plants leave risks with owners",
          "That is correct, so the owner no longer needs to track any deadline under the contract"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "package",
        "why": "Trọn gói không có nghĩa chủ đầu tư hết nghĩa vụ. Chậm thanh toán, chậm mặt bằng, chậm giấy phép phần mình hay chậm đấu nối đều có thể quay về phía chủ đầu tư."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A board member says a lump sum EPC moves every risk to the contractor, what should you answer?",
          "sub": "Một thành viên HĐQT nói EPC trọn gói chuyển mọi rủi ro sang nhà thầu, anh chị nên đáp thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The owner still pays on time, gives site access and gets its own permits.",
          "sub": "Chủ đầu tư vẫn phải trả tiền đúng hạn, giao mặt bằng, xin giấy phép phần mình."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[3]"
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
          "say": "Right now: open your latest board paper. Circle the price, the COD date, the penalty cap.",
          "sub": "Việc làm ngay: mở tờ trình gần nhất, khoanh giá hợp đồng, mốc COD và trần phạt chậm.",
          "keys": [
            "khoanh giá hợp đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: the three numbers. Now, forty questions below!",
          "sub": "Bài sau: ba con số phải nhớ. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận tờ trình vài trang, phía sau hàng trăm trang → kéo ra thấy phòng họp HĐQT (Thảo, bác Bình); tờ trình trở lại ở khép vòng s22 (dày thêm trang câu hỏi). Dòng thời gian: TUẦN TRƯỚC PHIÊN HỌP HĐQT (sáng T2 EPC mua gì p1–p2 → chiều T2 trọn gói ≠ hết rủi ro p3–p5 → T3 ba trụ cột, bên cho vay, chìa khóa trao tay p6–p10 → T4 chuỗi hợp đồng p11–p13, “Khoan đã!” Dũng chép mức phạt dự án cũ p14–p15 → T5 chín nhóm, bốn nhóm, bốn mối nối, đọc 15 phút p16–p21 → T6 thẩm quyền 35%, coi như chấp thuận p22–p23 → chiều T6 khi chậm, phụ lục p24–p25, lộ trình p26 → T2 sau họp HĐQT p27). Nhân vật (w145/_series/epc-owner-executive.md): Thảo (thư ký HĐQT), bác Bình (Chủ tịch), cô Hoa (Tổng Giám đốc), Dũng (chuyên viên ban dự án). Tục ngữ mở/khép: “Tiền nào của nấy”. BRK: 04 (trọn gói p3–p4), 07 (rehook phạt chậm), 11 (đọc tờ trình 15 phút p20), 03 (35% p22), 08 (sáu bài p26). Không tên dự án/công ty/hợp đồng thật; hãng luật nguồn → “một hãng luật quốc tế”. Số chỉ lấy từ bài: NĐ 210/2026 Đ6/Đ11, LĐL 2024 Đ12, LDN 2020 35%, 9 nhóm/4 nhóm/4 mối nối/15 phút/6 bài. Câu đố questions[3].",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
