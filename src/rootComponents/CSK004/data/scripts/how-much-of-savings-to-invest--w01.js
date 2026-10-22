// how-much-of-savings-to-invest--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-much-of-savings-to-invest--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "first-time-stock-investors-35",
    "slug": "how-much-of-savings-to-invest",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Có vài trăm triệu tích luỹ ở tuổi 40: nên đưa bao nhiêu vào chứng khoán?",
    "series": "Đầu tư chứng khoán lần đầu ở tuổi trung niên — cho người có tiền nhàn rỗi muốn bắt đầu an toàn"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "cafe",
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
                "credit-card",
                "chart-increasing"
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
            "at": "l1",
            "caption": "Tối thứ Hai · quán cơm chị Hoa",
            "icon": "credit-card"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Có tiền, còn nợ thẻ:",
            "x": 60,
            "y": 120,
            "size": 60,
            "at": "l3:debt",
            "hl": [
              {
                "text": "nợ thẻ",
                "at": "l3:card"
              }
            ]
          },
          {
            "id": "a-o1",
            "t": "box",
            "x": 60,
            "y": 240,
            "w": 360,
            "h": 110,
            "at": "l4:invest",
            "stroke": 5
          },
          {
            "id": "a-t1",
            "t": "text",
            "text": "Đầu tư",
            "x": 110,
            "y": 262,
            "size": 56,
            "at": "l4:invest+200"
          },
          {
            "id": "a-o2",
            "t": "box",
            "x": 460,
            "y": 240,
            "w": 360,
            "h": 110,
            "at": "l4:pay",
            "stroke": 5
          },
          {
            "id": "a-t2",
            "t": "text",
            "text": "Trả nợ",
            "x": 510,
            "y": 262,
            "size": 56,
            "at": "l4:pay+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Đoán đi…",
            "x": 60,
            "y": 400,
            "size": 50,
            "at": "l5:Guess",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, chị Hoa's cousin, our stock group superstar.",
          "sub": "Đây là Dũng, em họ chị Hoa, ngôi sao của nhóm chứng khoán.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'll keep my card debt. My stocks will earn more than the interest!",
          "sub": "Nợ thẻ em cứ để đó. Lãi chứng khoán chắc cao hơn lãi thẻ!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, some savings, and a credit card debt.",
          "sub": "Vậy: có ít tiền để dành, lại còn nợ thẻ tín dụng.",
          "keys": [
            "nợ thẻ tín dụng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Which comes first: invest it, or pay the debt?",
          "sub": "Việc nào trước: đem đầu tư, hay trả nợ?",
          "keys": [
            "Việc nào trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Guess.",
          "sub": "Đoán đi."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l4",
          "key": "cau-hoi"
        }
      ],
      "beats": {
        "after": 1500
      },
      "ref": "intro,p7"
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
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-o2",
              "a-t2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:Pay"
          },
          {
            "id": "a-x",
            "t": "strike",
            "over": "a-t1",
            "at": "l1:Pay+400"
          },
          {
            "id": "a-sure",
            "t": "text",
            "text": "Lãi nợ: chắc chắn phải trả",
            "x": 60,
            "y": 470,
            "size": 46,
            "at": "l2:certain",
            "color": "coral",
            "hl": [
              {
                "text": "chắc chắn",
                "at": "l2:certain"
              }
            ]
          },
          {
            "id": "a-not",
            "t": "text",
            "text": "Lãi đầu tư: không chắc",
            "x": 60,
            "y": 545,
            "size": 46,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 900,
            "y": 650,
            "size": 56,
            "at": "l4:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l4:rice"
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
          "say": "Pay the debt. Surprised?",
          "sub": "Trả nợ trước. Bất ngờ không?",
          "keys": [
            "Trả nợ trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Debt interest is certain. Investment profit is not.",
          "sub": "Lãi nợ là khoản chắc chắn phải trả. Lợi nhuận đầu tư thì không chắc.",
          "keys": [
            "chắc chắn phải trả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We'll prove it this week. Meanwhile, chị Hoa has a bigger question.",
          "sub": "Tuần này ta sẽ chứng minh. Còn chị Hoa thì có câu hỏi to hơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her shop motto: measure the rice before you pick the sauce.",
          "sub": "Câu ruột của quán chị: “Liệu cơm gắp mắm.”",
          "keys": [
            "Liệu cơm gắp mắm"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "Đưa bao nhiêu vào chứng khoán?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:how much",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l1:how much"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Bước đầu: chọn mã",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l3:picking",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:not"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Ghi ra: tiền nào, lúc nào",
            "x": 2668,
            "y": 170,
            "size": 54,
            "at": "l3:write",
            "color": "accent",
            "hl": [
              {
                "text": "lúc nào",
                "at": "l3:when"
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
          "say": "Around forty, a few hundred million saved. How much should go into stocks?",
          "sub": "Ngoài bốn mươi, vài trăm triệu tích luỹ. Nên đưa bao nhiêu vào chứng khoán?",
          "keys": [
            "bao nhiêu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At forty, money has many jobs: monthly bills, kids' schooling, parents, and your own retirement.",
          "sub": "Ở tuổi bốn mươi, tiền gánh nhiều việc: chi tiêu tháng, học của con, chăm cha mẹ, tuổi hưu của mình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So step one is not picking a stock. Write what each sum is for, and when you need it.",
          "sub": "Nên bước đầu không phải chọn mã, mà là ghi ra từng khoản dùng vào việc gì, khi nào cần.",
          "keys": [
            "khi nào cần"
          ]
        }
      ],
      "ref": "intro,p2"
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
            "id": "b-7",
            "t": "text",
            "text": "7 tối, 6 bước",
            "x": 2028,
            "y": 440,
            "size": 60,
            "at": "l1:Seven",
            "hl": [
              {
                "text": "6 bước",
                "at": "l1:six"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 250,
            "h": 100,
            "at": "l1:picture",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 560,
            "w": 250,
            "h": 100,
            "at": "l1:emergency",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 560,
            "w": 250,
            "h": 100,
            "at": "l1:debt",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 560,
            "w": 250,
            "h": 100,
            "at": "l2:columns",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 560,
            "w": 250,
            "h": 100,
            "at": "l2:ratio",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 560,
            "w": 250,
            "h": 100,
            "at": "l2:gradually",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Bức tranh",
            "x": 2048,
            "y": 578,
            "size": 40,
            "at": "l1:picture+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Dự phòng",
            "x": 2323,
            "y": 578,
            "size": 40,
            "at": "l1:emergency+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Nợ lãi cao",
            "x": 2598,
            "y": 578,
            "size": 40,
            "at": "l1:debt+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Ba cột",
            "x": 2873,
            "y": 578,
            "size": 40,
            "at": "l2:columns+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tỷ lệ",
            "x": 3148,
            "y": 578,
            "size": 40,
            "at": "l2:ratio+200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Vào dần",
            "x": 3423,
            "y": 578,
            "size": 40,
            "at": "l2:gradually+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven evenings, six steps: the big picture, the emergency fund, high-interest debt.",
          "sub": "Bảy buổi tối, sáu bước: bức tranh chung, quỹ dự phòng, nợ lãi cao.",
          "keys": [
            "sáu bước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then three columns, your own ratio, and going in gradually.",
          "sub": "Rồi ba cột tiền, tỷ lệ của riêng mình, và vào dần."
        }
      ],
      "ref": "intro,outro"
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
            "text": "Thứ Hai · Bức tranh cả nhà",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday",
            "hl": [
              {
                "text": "Bức tranh",
                "at": "l1:picture"
              }
            ]
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "ledger"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2",
            "caption": "Tối thứ Hai · phòng khách",
            "icon": "memo"
          },
          {
            "id": "c-who",
            "t": "text",
            "text": "Chị Hoa · 42 · chủ quán",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l2:forty-two",
            "color": "muted"
          },
          {
            "id": "c-g1",
            "t": "text",
            "text": "• chi tiêu tháng",
            "x": 3996,
            "y": 240,
            "size": 42,
            "at": "l3:bills"
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "• học của Bin",
            "x": 3996,
            "y": 300,
            "size": 42,
            "at": "l3:Bin"
          },
          {
            "id": "c-g3",
            "t": "text",
            "text": "• thuốc của bà Tư",
            "x": 3996,
            "y": 360,
            "size": 42,
            "at": "l3:medicine"
          },
          {
            "id": "c-g4",
            "t": "text",
            "text": "• tuổi hưu của chị",
            "x": 3996,
            "y": 420,
            "size": 42,
            "at": "l3:retirement",
            "color": "accent"
          },
          {
            "id": "c-sec",
            "t": "text",
            "text": "SEC: mục tiêu + rủi ro chịu được",
            "x": 3996,
            "y": 510,
            "size": 40,
            "at": "l4:goals",
            "hl": [
              {
                "text": "rủi ro chịu được",
                "at": "l4:risk"
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
          "say": "Monday evening: the whole family picture.",
          "sub": "Tối thứ Hai: bức tranh tài chính của cả nhà.",
          "keys": [
            "bức tranh tài chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here's chị Hoa, forty-two, rice shop owner. Her savings book just matured.",
          "sub": "Đây là chị Hoa, 42 tuổi, chủ quán cơm. Sổ tiết kiệm của chị vừa đáo hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Monthly bills, Bin's school, my mother's medicine, and my own retirement.",
          "sub": "Chi tiêu tháng, việc học của Bin, thuốc của bà Tư, và tuổi hưu của chị.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The SEC agrees: first assess your whole situation, your goals and the risk you can take.",
          "sub": "SEC cũng khuyên: đánh giá toàn bộ tình hình tài chính, mục tiêu và rủi ro mình chịu được.",
          "keys": [
            "rủi ro mình chịu được"
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
          }
        ],
        "items": [
          {
            "id": "c-pro",
            "t": "text",
            "text": "Chuyên gia: xem lịch sử kỷ luật",
            "x": 3996,
            "y": 600,
            "size": 38,
            "at": "l2:background",
            "color": "coral",
            "hl": [
              {
                "text": "lịch sử kỷ luật",
                "at": "l2:disciplinary"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: SEC, hướng dẫn phân bổ tài sản",
            "x": 3996,
            "y": 680,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You can do it yourself, or hire a financial professional.",
          "sub": "Có thể tự làm, hoặc nhờ chuyên gia tài chính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If you hire one, check their background and any disciplinary history.",
          "sub": "Nếu nhờ, hãy kiểm tra kỹ thông tin và lịch sử kỷ luật của người đó.",
          "keys": [
            "lịch sử kỷ luật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A doctor shows a licence. A money adviser should show a clean record.",
          "sub": "Bác sĩ có chứng chỉ hành nghề. Người tư vấn tiền bạc cũng nên có lý lịch sạch.",
          "keys": [
            "lý lịch sạch"
          ]
        }
      ],
      "ref": "p1"
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
            "text": "Thứ Ba · Dự phòng trước",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday",
            "hl": [
              {
                "text": "Dự phòng",
                "at": "l1:emergency"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "money-bag",
                "ledger"
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
            "at": "l1",
            "caption": "Tối thứ Ba · quầy thu ngân",
            "icon": "money-bag"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Có người giữ: 6 tháng thu nhập",
            "x": 5964,
            "y": 160,
            "size": 42,
            "at": "l3:six",
            "hl": [
              {
                "text": "6 tháng",
                "at": "l3:six months"
              }
            ]
          },
          {
            "id": "d-out",
            "t": "text",
            "text": "Để nơi rút được ngay",
            "x": 5964,
            "y": 240,
            "size": 48,
            "at": "l4:withdraw",
            "color": "accent",
            "hl": [
              {
                "text": "rút được ngay",
                "at": "l4:withdraw"
              }
            ]
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Không để trong cổ phiếu",
            "x": 5964,
            "y": 320,
            "size": 46,
            "at": "l4:shares",
            "color": "coral"
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "giá có thể giảm đúng lúc cần",
            "x": 5964,
            "y": 395,
            "size": 36,
            "at": "l5:falling",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday: the emergency fund comes first.",
          "sub": "Thứ Ba: quỹ dự phòng đi trước.",
          "keys": [
            "quỹ dự phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "If the shop closes for a month, or I get sick... who pays?",
          "sub": "Lỡ quán nghỉ một tháng, hay chị ốm... ai lo?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC notes many investors keep savings for things like job loss, some up to six months of income.",
          "sub": "SEC cho biết nhiều người giữ tiền để lo chuyện như mất việc, có người giữ tới sáu tháng thu nhập.",
          "keys": [
            "sáu tháng thu nhập"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep it where you can withdraw it, not in shares.",
          "sub": "Khoản này để ở nơi rút ra được khi cần, không nằm trong cổ phiếu.",
          "keys": [
            "rút ra được khi cần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Prices may be falling exactly when the family needs cash.",
          "sub": "Vì giá cổ phiếu có thể đang giảm đúng lúc gia đình cần tiền."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Trước – sau",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Sổ đáo hạn rồi, chuyển cả vào tài khoản chứng khoán",
        "right": "Giữ dự phòng, tách tiền học, phần còn lại mới tính",
        "wrongIllus": "money-with-wings",
        "rightIllus": "nest-with-eggs"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: move it all into stocks.",
          "sub": "Trước: chuyển cả vào chứng khoán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: keep the fund, set aside school money first.",
          "sub": "Sau: giữ dự phòng, tách tiền học trước đã.",
          "keys": [
            "giữ dự phòng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p4,p5"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "Thứ Tư · Nợ lãi cao",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday",
            "hl": [
              {
                "text": "Nợ lãi cao",
                "at": "l1:debt"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "credit-card",
                "receipt"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1",
            "caption": "Tối thứ Tư · Dũng ghé ăn tối",
            "icon": "credit-card"
          },
          {
            "id": "e-sec",
            "t": "text",
            "text": "SEC: trả hết càng sớm càng tốt",
            "x": 7932,
            "y": 160,
            "size": 42,
            "at": "l4:soon",
            "hl": [
              {
                "text": "càng sớm",
                "at": "l4:soon"
              }
            ]
          },
          {
            "id": "e-any",
            "t": "text",
            "text": "bất kể thị trường ra sao",
            "x": 7932,
            "y": 235,
            "size": 40,
            "at": "l4:market",
            "color": "muted"
          },
          {
            "id": "e-none",
            "t": "text",
            "text": "Không chiến lược nào chắc bằng",
            "x": 7932,
            "y": 320,
            "size": 42,
            "at": "l5:No",
            "color": "accent",
            "hl": [
              {
                "text": "chắc bằng",
                "at": "l5:surely"
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
          "say": "Wednesday: high-interest debt. Dũng drops by for dinner, and for a debate.",
          "sub": "Thứ Tư: nợ lãi cao. Dũng ghé ăn tối, tiện thể tranh luận.",
          "keys": [
            "nợ lãi cao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Chị, card interest is small change. Stocks went up so much last year!",
          "sub": "Chị ơi, lãi thẻ có đáng gì. Năm ngoái chứng khoán tăng mạnh thế cơ mà!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And this year? Who promised you that?",
          "sub": "Còn năm nay? Ai hứa với em?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The SEC says: pay off high-interest debt, like credit cards, as soon as possible, whatever the market does.",
          "sub": "SEC nói: trả hết nợ lãi suất cao như thẻ tín dụng càng sớm càng tốt, bất kể thị trường ra sao.",
          "keys": [
            "càng sớm càng tốt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No investment strategy pays off as surely, with so little risk.",
          "sub": "Không chiến lược đầu tư nào đem lại lợi ích chắc chắn và ít rủi ro bằng.",
          "keys": [
            "ít rủi ro bằng"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tối thứ Tư · Dũng mở app",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Giữ nợ thẻ, tiền đem đi đầu tư",
          "why": "Lãi nợ là khoản chắc chắn phải trả; lợi nhuận đầu tư thì không chắc, có thể mất một phần hoặc toàn bộ.",
          "rule": "Trả xong nợ lãi cao rồi mới tính đầu tư"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Fine, I'll just put my bonus into stocks, and keep the card debt.",
          "sub": "Thôi, tiền thưởng em bỏ vào cổ phiếu, nợ thẻ để đó.",
          "face": "happy",
          "pose": "phone",
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
          "say": "The SEC reminds us: any investment can lose some, or all, of its money.",
          "sub": "SEC nhắc: khoản đầu tư nào cũng có thể mất một phần hoặc toàn bộ tiền.",
          "keys": [
            "mất một phần hoặc toàn bộ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Okay. The bonus clears the card first. Then we talk stocks.",
          "sub": "Rồi. Tiền thưởng trả hết nợ thẻ trước. Xong mới bàn cổ phiếu.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Clearing that debt is like a sure return investing rarely matches.",
          "sub": "Đúng. Trả xong nợ lãi cao giống một khoản lãi chắc chắn mà đầu tư khó sánh được.",
          "phase": "redo",
          "keys": [
            "khoản lãi chắc chắn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p8"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Dự phòng xong, nợ hết. Phần còn lại dồn hết vào?",
        "illus": "money-bag"
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
          "say": "Fund set, debt gone. Does the rest all go into stocks?",
          "sub": "Dự phòng xong, nợ hết rồi. Phần còn lại dồn hết vào?",
          "keys": [
            "dồn hết vào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p5"
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
            "at": "l3",
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
            "text": "Thứ Năm · Ba cột tiền",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "Ba cột",
                "at": "l1:columns"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "pen",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Tối thứ Năm · tờ giấy cạnh lịch",
            "icon": "memo"
          },
          {
            "id": "f-a0",
            "t": "text",
            "text": "① 1–2 năm",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l3:One",
            "color": "ink"
          },
          {
            "id": "f-b0",
            "t": "text",
            "text": "học phí Bin",
            "x": 60,
            "y": 1315,
            "size": 34,
            "at": "l3:One+200"
          },
          {
            "id": "f-c0",
            "t": "text",
            "text": "tiết kiệm",
            "x": 60,
            "y": 1370,
            "size": 30,
            "at": "l3:One+500",
            "color": "muted"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "② vài năm",
            "x": 330,
            "y": 1250,
            "size": 40,
            "at": "l4:Two",
            "color": "ink"
          },
          {
            "id": "f-b1",
            "t": "text",
            "text": "sửa quán",
            "x": 330,
            "y": 1315,
            "size": 34,
            "at": "l4:Two+200"
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "phần lớn an toàn",
            "x": 330,
            "y": 1370,
            "size": 30,
            "at": "l4:Two+500",
            "color": "muted"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "③ còn xa",
            "x": 600,
            "y": 1250,
            "size": 40,
            "at": "l4:Three",
            "color": "accent"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "tuổi hưu",
            "x": 600,
            "y": 1315,
            "size": 34,
            "at": "l4:Three+200"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "xét một phần quỹ",
            "x": 600,
            "y": 1370,
            "size": 30,
            "at": "l4:Three+500",
            "color": "muted"
          },
          {
            "id": "f-hz",
            "t": "text",
            "text": "Thời gian đầu tư: tháng → thập kỷ",
            "x": 60,
            "y": 1470,
            "size": 36,
            "at": "l2:decades",
            "hl": [
              {
                "text": "Thời gian đầu tư",
                "at": "l2:horizon"
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
          "say": "Thursday: three columns, sorted by when you'll need the money.",
          "sub": "Thứ Năm: ba cột tiền, xếp theo lúc cần dùng.",
          "keys": [
            "ba cột tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The SEC calls it your time horizon: months, years, or decades.",
          "sub": "SEC gọi đó là thời gian đầu tư: tính bằng tháng, năm, hay thập kỷ.",
          "keys": [
            "thời gian đầu tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "One: money for the next year or two, Bin's fees. That stays in savings.",
          "sub": "Một: tiền cần trong một hai năm, học phí của Bin. Để tiết kiệm.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Two: fixing the shop in a few years, mostly safe. Three: retirement, still far.",
          "sub": "Hai: sửa quán vài năm nữa, phần lớn để an toàn. Ba: tuổi hưu, còn xa.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only column three gets considered for some stocks or funds.",
          "sub": "Chỉ cột ba mới xét đưa một phần vào cổ phiếu hoặc quỹ.",
          "keys": [
            "Chỉ cột ba"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "id": "f-teen",
            "t": "text",
            "text": "Sắp học đại học: rủi ro thấp",
            "x": 60,
            "y": 1560,
            "size": 36,
            "at": "l1:teenager"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Cần sớm → để nơi ít biến động",
            "x": 60,
            "y": 1650,
            "size": 46,
            "at": "l2:sooner",
            "color": "accent",
            "hl": [
              {
                "text": "ít biến động",
                "at": "l2:less"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: SEC, hướng dẫn phân bổ tài sản",
            "x": 60,
            "y": 1740,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saving for a teenager's university? Shorter time, so usually lower risk.",
          "sub": "Để dành cho con tuổi teen vào đại học? Thời gian ngắn, nên thường chọn rủi ro thấp hơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The sooner you need it, the less it should move.",
          "sub": "Tiền càng sớm phải dùng, càng nên để nơi ít biến động.",
          "keys": [
            "ít biến động"
          ]
        }
      ],
      "ref": "p9,p11"
    },
    {
      "id": "s12b",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, chị Hoa đã có",
        "points": [
          "Quỹ dự phòng, rút được ngay",
          "Nợ lãi cao: trả trước",
          "Ba cột theo lúc cần tiền"
        ],
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick recap of the week so far.",
          "sub": "Nhắc nhanh cả tuần đến giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An emergency fund you can reach.",
          "sub": "Quỹ dự phòng, rút được ngay.",
          "keys": [
            "rút được ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "High-interest debt paid first.",
          "sub": "Nợ lãi cao: trả trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three columns, by when the money is needed.",
          "sub": "Ba cột, theo lúc cần đến tiền."
        }
      ],
      "ref": "p5,p8,p11"
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
            "text": "Thứ Sáu · Tỷ lệ bao nhiêu?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l1:percent"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "balance-scale",
                "bird"
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
            "at": "l1",
            "caption": "Tối thứ Sáu · quán vắng",
            "icon": "balance-scale"
          },
          {
            "id": "g-mix",
            "t": "text",
            "text": "Cổ phiếu · trái phiếu · tiền mặt",
            "x": 2028,
            "y": 1250,
            "size": 42,
            "at": "l3:stocks"
          },
          {
            "id": "g-dep",
            "t": "text",
            "text": "tuỳ thời gian + sức chịu rủi ro",
            "x": 2028,
            "y": 1325,
            "size": 40,
            "at": "l3:depends",
            "hl": [
              {
                "text": "sức chịu rủi ro",
                "at": "l3:tolerance"
              }
            ]
          },
          {
            "id": "g-life",
            "t": "text",
            "text": "đổi theo từng giai đoạn đời",
            "x": 2028,
            "y": 1395,
            "size": 40,
            "at": "l4:stages",
            "color": "muted"
          },
          {
            "id": "g-alloc",
            "t": "text",
            "text": "Phân bổ > chọn từng mã",
            "x": 2028,
            "y": 1480,
            "size": 50,
            "at": "l5:matters",
            "color": "accent",
            "hl": [
              {
                "text": "Phân bổ",
                "at": "l5:allocation"
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
          "say": "Friday: so what percent? Fifty? Thirty?",
          "sub": "Thứ Sáu: vậy tỷ lệ bao nhiêu? Năm mươi? Ba mươi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Just tell me the number, and I'll write it down!",
          "sub": "Cứ cho chị con số, chị ghi liền!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The mix of stocks, bonds and cash depends on your time horizon and risk tolerance.",
          "sub": "Tỷ lệ cổ phiếu, trái phiếu, tiền mặt tuỳ thời gian đầu tư và sức chịu rủi ro.",
          "keys": [
            "sức chịu rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And it can change through life's stages.",
          "sub": "Và có thể đổi theo từng giai đoạn cuộc đời."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Many experts say allocation matters more than picking each investment.",
          "sub": "Nhiều chuyên gia cho rằng quyết định phân bổ quan trọng hơn chọn từng khoản.",
          "keys": [
            "phân bổ quan trọng hơn"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s14",
      "module": "BRK-10",
      "data": {
        "quote": "Không có mô hình phân bổ tài sản nào phù hợp với mọi người",
        "mark": "phù hợp với mọi người",
        "by": "SEC, hướng dẫn cho người mới",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "No single allocation model fits every investor.",
          "sub": "Không có mô hình phân bổ nào hợp với mọi người.",
          "keys": [
            "hợp với mọi người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The SEC's beginners' guide.",
          "sub": "Hướng dẫn cho người mới của SEC."
        }
      ],
      "ref": "p12"
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
          },
          {
            "at": "l2",
            "fit": [
              "g-bird",
              "g-bt"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-rt",
            "t": "text",
            "text": "Sức chịu rủi ro = chấp nhận mất",
            "x": 2028,
            "y": 1580,
            "size": 42,
            "at": "l1:willingness",
            "hl": [
              {
                "text": "chấp nhận mất",
                "at": "l1:lose"
              }
            ]
          },
          {
            "id": "g-bird",
            "t": "illus",
            "name": "bird",
            "x": 2868,
            "y": 1770,
            "size": 80,
            "at": "l2:bird"
          },
          {
            "id": "g-bt",
            "t": "text",
            "text": "1 chim trong tay > 2 trong bụi",
            "x": 2968,
            "y": 1785,
            "size": 40,
            "at": "l2:hand",
            "color": "accent"
          },
          {
            "id": "g-ag",
            "t": "text",
            "text": "Ưa rủi ro: nhắm lãi cao hơn",
            "x": 2028,
            "y": 1670,
            "size": 40,
            "at": "l3:aggressive",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Risk tolerance, says the SEC, is your ability and willingness to lose some or all, for maybe more return.",
          "sub": "Sức chịu rủi ro, theo SEC, là khả năng và mức sẵn lòng chấp nhận mất một phần hay toàn bộ vốn để có thể lãi hơn.",
          "keys": [
            "sẵn lòng chấp nhận mất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Careful people live by an English saying: a bird in the hand is worth two in the bush.",
          "sub": "Người thận trọng sống theo câu tiếng Anh: “một con chim trong tay hơn hai con trong bụi”.",
          "keys": [
            "một con chim trong tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Aggressive investors aim for better results instead.",
          "sub": "Người chấp nhận rủi ro cao thì nhắm tới kết quả tốt hơn."
        }
      ],
      "ref": "p13"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Thứ Bảy · Cùng tuổi, khác tỷ lệ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday",
            "hl": [
              {
                "text": "khác tỷ lệ",
                "at": "l4:same"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage",
                "mobile-phone"
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
            "at": "l1:Thảo",
            "caption": "Sáng thứ Bảy · cà phê với bạn cũ",
            "icon": "hot-beverage"
          },
          {
            "id": "h-th",
            "t": "text",
            "text": "Thảo: hai nguồn thu, bình tĩnh",
            "x": 3996,
            "y": 1250,
            "size": 40,
            "at": "l2:two incomes",
            "color": "accent"
          },
          {
            "id": "h-ho",
            "t": "text",
            "text": "Hoa: thu nhập chính, con nhỏ",
            "x": 3996,
            "y": 1330,
            "size": 40,
            "at": "l3:main",
            "color": "coral"
          },
          {
            "id": "h-ho2",
            "t": "text",
            "text": "mất ngủ khi tài khoản giảm",
            "x": 3996,
            "y": 1395,
            "size": 36,
            "at": "l3:night",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday. Meet Thảo, chị Hoa's school friend, same age, similar savings.",
          "sub": "Thứ Bảy. Còn đây là Thảo, bạn cấp ba của chị Hoa: cùng tuổi, khoản tích luỹ tương đương.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, our home has two incomes. When prices drop, I stay calm.",
          "sub": "Thứ nhất, nhà mình có hai nguồn thu. Giá giảm, mình vẫn bình tĩnh.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "I'm the main earner, Bin is small, and a falling account keeps me up at night.",
          "sub": "Chị là trụ cột, Bin còn nhỏ, tài khoản giảm là chị mất ngủ.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, the same ratio for both? Not necessarily.",
          "sub": "Vậy hai người dùng cùng một tỷ lệ cổ phiếu? Không nhất thiết.",
          "keys": [
            "Không nhất thiết"
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
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "h-why",
            "t": "text",
            "text": "Tuỳ thời gian + sức chịu rủi ro",
            "x": 3996,
            "y": 1510,
            "size": 42,
            "at": "l1:horizon"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "“Người khác bỏ bao nhiêu?”",
            "x": 3996,
            "y": 1610,
            "size": 46,
            "at": "l2:others",
            "color": "muted"
          },
          {
            "id": "h-nox",
            "t": "strike",
            "over": "h-no",
            "at": "l2:replace"
          },
          {
            "id": "h-yes",
            "t": "text",
            "text": "“Mình chịu mất bao nhiêu?”",
            "x": 3996,
            "y": 1700,
            "size": 54,
            "at": "l2:afford",
            "color": "accent",
            "hl": [
              {
                "text": "chịu mất",
                "at": "l2:lose"
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
          "say": "The ratio follows each person's time horizon and risk tolerance, so two people the same age can differ.",
          "sub": "Tỷ lệ tuỳ thời gian đầu tư và sức chịu rủi ro của từng người, nên cùng tuổi vẫn có thể khác.",
          "keys": [
            "cùng tuổi vẫn có thể khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Asking how much others put in can't replace asking: how much can I afford to lose?",
          "sub": "Hỏi người khác bỏ vào bao nhiêu không thay được câu: mình chịu được mất bao nhiêu?",
          "keys": [
            "mình chịu được mất bao nhiêu"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "Chủ nhật · Vào dần",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday",
            "hl": [
              {
                "text": "Vào dần",
                "at": "l1:gradually"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "coin"
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
            "at": "l2",
            "caption": "Sáng Chủ nhật · lịch treo tường",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-c0",
            "t": "illus",
            "name": "coin",
            "x": 5964,
            "y": 1260,
            "size": 80,
            "at": "l3:fixed+0"
          },
          {
            "id": "i-c1",
            "t": "illus",
            "name": "coin",
            "x": 6084,
            "y": 1260,
            "size": 80,
            "at": "l3:fixed+250"
          },
          {
            "id": "i-c2",
            "t": "illus",
            "name": "coin",
            "x": 6204,
            "y": 1260,
            "size": 80,
            "at": "l3:fixed+500"
          },
          {
            "id": "i-c3",
            "t": "illus",
            "name": "coin",
            "x": 6324,
            "y": 1260,
            "size": 80,
            "at": "l3:fixed+750"
          },
          {
            "id": "i-c4",
            "t": "illus",
            "name": "coin",
            "x": 6444,
            "y": 1260,
            "size": 80,
            "at": "l3:fixed+1000"
          },
          {
            "id": "i-c5",
            "t": "illus",
            "name": "coin",
            "x": 6564,
            "y": 1260,
            "size": 80,
            "at": "l3:fixed+1250"
          },
          {
            "id": "i-fix",
            "t": "text",
            "text": "Số tiền cố định, đều đặn",
            "x": 5964,
            "y": 1370,
            "size": 46,
            "at": "l3:regular",
            "hl": [
              {
                "text": "đều đặn",
                "at": "l3:regular"
              }
            ]
          },
          {
            "id": "i-one",
            "t": "text",
            "text": "tránh dồn hết vào một lúc xấu",
            "x": 5964,
            "y": 1445,
            "size": 40,
            "at": "l4:moment",
            "color": "coral"
          },
          {
            "id": "i-mod",
            "t": "text",
            "text": "Chưa rõ xu hướng: vừa phải",
            "x": 5964,
            "y": 1530,
            "size": 38,
            "at": "l5:moderate",
            "color": "accent",
            "hl": [
              {
                "text": "vừa phải",
                "at": "l5:moderate"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: SEC; Tin nhanh chứng khoán",
            "x": 5964,
            "y": 1610,
            "size": 28,
            "at": "l5",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday morning: go in gradually, not all at once.",
          "sub": "Sáng Chủ nhật: vào dần, không đổ một lần.",
          "keys": [
            "vào dần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, not one big pour. A small scoop each month, like rice into the jar.",
          "sub": "Vậy không đổ một lần. Mỗi tháng một ít, như đong gạo vào hũ.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC suggests a fixed amount at regular intervals over a long time.",
          "sub": "SEC gợi ý đầu tư một số tiền cố định, theo chu kỳ đều đặn, trong thời gian dài.",
          "keys": [
            "chu kỳ đều đặn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That avoids putting everything in at one bad moment.",
          "sub": "Cách này tránh dồn toàn bộ tiền vào đúng một thời điểm không thuận lợi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And with no clear market trend, a trading paper advises a moderate share of stocks.",
          "sub": "Báo Tin nhanh chứng khoán thêm: khi thị trường chưa rõ xu hướng, giữ tỷ trọng cổ phiếu vừa phải.",
          "keys": [
            "tỷ trọng cổ phiếu vừa phải"
          ]
        }
      ],
      "ref": "p16"
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
            "text": "Tối Chủ nhật · Vẫn quán ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "credit-card",
                "memo"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1",
            "caption": "Tối Chủ nhật · quán cơm chị Hoa",
            "icon": "memo"
          },
          {
            "id": "j-d",
            "t": "text",
            "text": "Dũng: nợ thẻ ✓ đã trả",
            "x": 7932,
            "y": 1250,
            "size": 48,
            "at": "l2:paid",
            "hl": [
              {
                "text": "đã trả",
                "at": "l2:paid"
              }
            ]
          },
          {
            "id": "j-h",
            "t": "text",
            "text": "Hoa: 3 cột, vào dần",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l3:columns",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 7932,
            "y": 1470,
            "size": 60,
            "at": "l4:measure",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l4:rice"
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
          "say": "Sunday night. Same shop, same two people, same question from Monday.",
          "sub": "Tối Chủ nhật. Vẫn quán ấy, vẫn hai người ấy, vẫn câu hỏi tối thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Card debt? Paid. Now I'm allowed to talk stocks, right?",
          "sub": "Nợ thẻ? Trả xong rồi. Giờ em được bàn cổ phiếu chưa?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Me: three columns, and a little each month. Your turn to copy.",
          "sub": "Chị thì: ba cột tiền, mỗi tháng một ít. Tới lượt em chép bài.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Measure the rice before you pick the sauce. Measure the money before you pick the stock.",
          "sub": "“Liệu cơm gắp mắm.” Liệu tiền rồi mới gắp... cổ phiếu.",
          "keys": [
            "Liệu cơm gắp mắm"
          ]
        }
      ],
      "ref": "p10,outro"
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6624,
            "y": 250,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8592,
            "y": 170,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1660,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6664,
            "y": 1380,
            "at": "l4+700"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo, không khuyến nghị mua bán cụ thể; mỗi nhà một khác, cần thì hỏi chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
            "size": 28,
            "at": "l5:end",
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
          "say": "So: emergency fund first.",
          "sub": "Tóm lại: quỹ dự phòng trước.",
          "keys": [
            "quỹ dự phòng trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "High-interest debt next.",
          "sub": "Nợ lãi cao trả kế tiếp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sort money by when you need it. Only the far column may meet stocks.",
          "sub": "Chia tiền theo lúc cần dùng. Chỉ cột xa mới gặp cổ phiếu.",
          "keys": [
            "Chỉ cột xa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick your own ratio, then go in gradually, a little each month.",
          "sub": "Chọn tỷ lệ của riêng mình, rồi vào dần, mỗi tháng một ít.",
          "keys": [
            "vào dần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This is general learning, not advice to buy or sell anything.",
          "sub": "Bài chỉ để học chung, không khuyên mua bán gì cụ thể."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "You owe card debt and have some savings, what does the article suggest doing first?",
        "options": [
          "Pay off the high interest card debt before putting money into stocks",
          "Open a second card to pay the first one and invest the savings",
          "Buy shares now and pay the card later from expected profits"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "credit-card",
        "why": "Nợ lãi cao là khoản chắc chắn phải trả, nên trả trước rồi mới đầu tư."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You owe card debt and have some savings, what does the article suggest doing first?",
          "sub": "Bạn còn nợ thẻ và có một ít tiền tiết kiệm, bài gợi ý làm gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pay off the card debt first, then invest.",
          "sub": "Trả hết nợ thẻ trước, rồi mới đầu tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Just like Dũng, take two.",
          "sub": "Như Dũng, ở lần quay thứ hai."
        }
      ],
      "ref": "questions[15]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi kẻ ba cột tiền cho nhà mình"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, draw three columns for your own family's money.",
          "sub": "Tối nay, kẻ ba cột cho tiền của nhà mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài 1 chuỗi first-time-stock-investors-35) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): Dũng có tiền mà còn nợ thẻ — đầu tư trước hay trả nợ trước? lặng 1,5 s rồi lật “Trả nợ trước” (p7). Dòng thời gian: MỘT TUẦN của chị Hoa sau ngày sổ đáo hạn (tối T2 quán, Dũng khoe → T2 bức tranh cả nhà → T3 dự phòng → T4 nợ lãi cao + “Khoan đã!” Dũng → T5 ba cột → T6 tỷ lệ → T7 Hoa–Thảo → sáng CN vào dần → tối CN cùng quán). Nhân vật theo w145/_series/first-time-stock-investors-35.md: chị Hoa (= anh Hùng p10, chị Hoa p14), Dũng (hiểu lầm nợ thẻ p7), Thảo (= anh Sơn p14). Bé Bin, bà Tư chỉ được nhắc. Số chỉ từ bài: tới 6 tháng thu nhập, “một con chim trong tay hơn hai con trong bụi”; Ngắt nhịp: BRK-04 s07 (trước–sau p4), DLG-01 s09 (p7, p8), BRK-07 s10 (rehook), BRK-10 s14 (trích SEC p12). Tục ngữ: “Liệu cơm gắp mắm” (mở + khép vòng). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[15].",
  "loop": {
    "open": "s00",
    "close": "s19"
  }
};
