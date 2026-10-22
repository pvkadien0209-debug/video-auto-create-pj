// tell-your-spouse-about-debt--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "tell-your-spouse-about-debt--w01",
  "unit": {
    "audience": "families-in-debt-trouble",
    "slug": "tell-your-spouse-about-debt",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Giấu vợ chồng một khoản nợ: nói ra thế nào và cùng nhau lập kế hoạch?",
    "series": "Gỡ nợ mà giữ được nhà — cho gia đình có con nhỏ đang gánh nhiều khoản vay"
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
              "a-ph"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-ph",
            "t": "illus",
            "name": "mobile-phone",
            "x": 80,
            "y": 90,
            "size": 220,
            "at": "l1"
          },
          {
            "id": "a-bz",
            "t": "text",
            "text": "Bzz… bzz…",
            "x": 330,
            "y": 100,
            "size": 90,
            "at": "l1:Bzz",
            "color": "coral"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Úp màn hình xuống",
            "x": 330,
            "y": 260,
            "size": 58,
            "at": "l2:flips",
            "hl": [
              {
                "text": "Úp màn hình",
                "at": "l2:face down"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Cuộc gọi nhắc nợ?",
            "x": 330,
            "y": 360,
            "size": 56,
            "at": "l3:reminder",
            "color": "accent"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Chồng chưa hề biết",
            "x": 330,
            "y": 450,
            "size": 50,
            "at": "l3:knows",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Bzz. Bzz. A phone on an office desk.",
          "sub": "Bzz. Bzz. Một chiếc điện thoại trên bàn làm việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every time it buzzes, its owner jumps, and flips it face down.",
          "sub": "Mỗi lần rung, chủ nó giật mình, úp màn hình xuống.",
          "keys": [
            "úp màn hình xuống"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It might be a debt reminder. One her husband knows nothing about.",
          "sub": "Có thể là cuộc gọi nhắc nợ. Một khoản mà chồng chưa hề biết.",
          "keys": [
            "chưa hề biết"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "rung",
          "offsetMs": 0
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "mobile-phone",
                "credit-card"
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
            "caption": "Thứ Hai · bàn làm việc",
            "icon": "mobile-phone"
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "Ý tốt: không muốn chồng lo",
            "x": 60,
            "y": 560,
            "size": 44,
            "at": "l3:kindly"
          },
          {
            "id": "a-5",
            "t": "text",
            "text": "Trả nợ + giữ bí mật",
            "x": 60,
            "y": 630,
            "size": 46,
            "at": "l5:pays"
          },
          {
            "id": "a-6",
            "t": "text",
            "text": "= áp lực nhân đôi",
            "x": 100,
            "y": 695,
            "size": 46,
            "at": "l5:Double",
            "color": "coral",
            "hl": [
              {
                "text": "nhân đôi",
                "at": "l5:Double"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Giấy không gói được lửa”",
            "x": 920,
            "y": 650,
            "size": 46,
            "at": "l6:paper",
            "color": "accent",
            "hl": [
              {
                "text": "không gói được lửa",
                "at": "l6:wrap fire"
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
          "say": "Meet Thảo. Office worker, list lover, and lately, a secret keeper.",
          "sub": "Đây là Thảo. Dân văn phòng, mê lập danh sách, và dạo này: giữ một bí mật.",
          "keys": [
            "giữ một bí mật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll sort it out myself in a few months. Then I'll tell Dũng.",
          "sub": "Em tự xoay vài tháng là xong. Rồi mới kể với Dũng.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hiding a debt often starts kindly: you don't want your partner to worry.",
          "sub": "Giấu nợ thường bắt đầu từ ý tốt: không muốn người kia lo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But loans have due dates and interest. Late ones come with phone calls.",
          "sub": "Nhưng khoản vay có kỳ trả, có lãi. Trễ hạn là có người gọi đòi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So she pays the debt and guards the secret. Double the pressure.",
          "sub": "Thế là vừa trả nợ vừa giữ bí mật. Áp lực nhân đôi.",
          "keys": [
            "Áp lực nhân đôi"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: paper can't wrap fire.",
          "sub": "Ông bà dặn: “Giấy không gói được lửa.”",
          "keys": [
            "Giấy không gói được lửa"
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
      "ref": "intro,p1"
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
            "text": "Nói ra thế nào, tính ra sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:tell",
            "hl": [
              {
                "text": "Nói ra",
                "at": "l1:tell"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Trả nợ, tiền ăn học: chung túi",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:pocket",
            "hl": [
              {
                "text": "chung túi",
                "at": "l2:same pocket"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Một người vay, hai người trả?",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l3:both",
            "color": "coral"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: giấu, tự xoay",
            "x": 2028,
            "y": 370,
            "size": 48,
            "at": "l4:hide",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: nói hết, cùng tính",
            "x": 2028,
            "y": 450,
            "size": 56,
            "at": "l4:tell it all",
            "color": "accent",
            "hl": [
              {
                "text": "cùng tính",
                "at": "l4:plan as two"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 06/12/2022",
            "x": 2028,
            "y": 720,
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
          "say": "So: how do you tell your spouse, and plan together?",
          "sub": "Vậy: nói với vợ hoặc chồng thế nào, và cùng tính ra sao?",
          "keys": [
            "cùng tính ra sao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With small children, repayments come out of the same pocket as food and school.",
          "sub": "Khi con còn nhỏ, tiền trả nợ lấy chung túi với tiền ăn, tiền học của con.",
          "keys": [
            "chung túi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And some debts one spouse takes, both spouses may have to repay.",
          "sub": "Có những khoản một người vay mà cả hai vợ chồng cùng có nghĩa vụ trả.",
          "keys": [
            "cả hai vợ chồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So not: hide it and fix it alone. But: tell it all, and plan as two.",
          "sub": "Vậy không phải: giấu rồi tự xoay. Mà là: nói hết, rồi cùng tính.",
          "keys": [
            "nói hết, rồi cùng tính"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần tới buổi nói thật",
        "current": 3,
        "points": [
          {
            "label": "Thứ Ba",
            "sub": "Nợ chung hay riêng?",
            "illus": "balance-scale"
          },
          {
            "label": "Thứ Tư",
            "sub": "Tờ danh sách",
            "illus": "memo"
          },
          {
            "label": "Thứ Năm",
            "sub": "Tập câu nói",
            "illus": "speaking-head"
          },
          {
            "label": "Tối thứ Sáu",
            "sub": "Nói hết một lần",
            "illus": "crescent-moon"
          },
          {
            "label": "Chủ nhật",
            "sub": "Kế hoạch chung",
            "illus": "handshake"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One week to the big talk: check the law, write the list, practise the words.",
          "sub": "Một tuần tới buổi nói thật: xem luật, viết danh sách, tập câu nói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then Friday night, all at once. And a Sunday plan.",
          "sub": "Rồi tối thứ Sáu nói hết một lần. Chủ nhật lập kế hoạch.",
          "keys": [
            "nói hết một lần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p7,p10,p16"
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
            "text": "① Thứ Ba · Chung hay riêng?",
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
                "mobile-phone",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Tuesday",
            "caption": "Trưa thứ Ba · giờ nghỉ",
            "icon": "balance-scale"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Nợ trong hôn nhân ≠ luôn chung",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:Not every",
            "hl": [
              {
                "text": "≠ luôn chung",
                "at": "l3:shared"
              }
            ]
          },
          {
            "id": "c-law",
            "t": "text",
            "text": "Điều 27, 37 · Luật HN&GĐ 2014",
            "x": 3996,
            "y": 245,
            "size": 38,
            "at": "l4:twenty seven",
            "color": "muted"
          },
          {
            "id": "c-g1",
            "t": "text",
            "text": "1. Vay cho thiết yếu",
            "x": 3996,
            "y": 320,
            "size": 44,
            "at": "l5:essentials",
            "color": "accent"
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "2. Kinh doanh chung",
            "x": 3996,
            "y": 385,
            "size": 44,
            "at": "l5:business"
          },
          {
            "id": "c-g3",
            "t": "text",
            "text": "3. Hai người cùng thoả thuận",
            "x": 3996,
            "y": 450,
            "size": 44,
            "at": "l5:agreed"
          },
          {
            "id": "c-g4",
            "t": "text",
            "text": "4. Bồi thường cả hai chịu",
            "x": 3996,
            "y": 515,
            "size": 44,
            "at": "l5:damages"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Tuesday lunch. Thảo reads a legal Q and A on her phone.",
          "sub": "Chặng một: trưa thứ Ba. Thảo đọc bài giải đáp pháp luật trên điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So are my debts mine alone? Or ours?",
          "sub": "Vậy nợ em vay là của riêng em, hay của chung?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not every debt during a marriage is shared, the article stresses.",
          "sub": "Bài nhấn mạnh: không phải mọi khoản nợ trong thời kỳ hôn nhân đều là nợ chung.",
          "keys": [
            "không phải mọi khoản nợ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It cites Articles twenty seven and thirty seven of the Family Law 2014. Shared debts include four groups.",
          "sub": "Bài dẫn Điều 27 và 37 Luật Hôn nhân và gia đình 2014. Nợ chung gồm bốn nhóm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Loans for family essentials. A business run together. Deals both agreed. Damages the law makes both pay.",
          "sub": "Vay cho nhu cầu thiết yếu; kinh doanh chung; giao dịch hai người cùng thoả thuận; bồi thường luật buộc cả hai chịu."
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
          }
        ],
        "items": [
          {
            "id": "c-e",
            "t": "text",
            "text": "ăn · mặc · ở · học · chữa bệnh",
            "x": 4856,
            "y": 640,
            "size": 40,
            "at": "l1:food"
          },
          {
            "id": "c-p",
            "t": "text",
            "text": "Ngoài nhóm → nợ riêng",
            "x": 3996,
            "y": 610,
            "size": 48,
            "at": "l2:private",
            "color": "coral",
            "hl": [
              {
                "text": "nợ riêng",
                "at": "l2:private"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 06/12/2022",
            "x": 3996,
            "y": 720,
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
          "say": "Essential means ordinary living needs: food, clothes, housing, study, medical care.",
          "sub": "Thiết yếu là nhu cầu sinh hoạt thông thường: ăn, mặc, ở, học tập, khám chữa bệnh.",
          "keys": [
            "nhu cầu sinh hoạt thông thường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Anything outside those groups is usually a private debt. The borrower pays.",
          "sub": "Ngoài các nhóm đó thường là nợ riêng, ai vay người nấy trả.",
          "keys": [
            "nợ riêng"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s06",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Bản án phúc thẩm 2019",
        "detail": "Toà án nhân dân tỉnh Thanh Hoá",
        "illus": "balance-scale",
        "around": [
          "school",
          "house"
        ],
        "icon": "gavel"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The article also cites a real appeal case.",
          "sub": "Bài còn dẫn một bản án phúc thẩm có thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty nineteen, Thanh Hoá provincial court.",
          "sub": "Năm 2019, Toà án nhân dân tỉnh Thanh Hoá."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Tư · Vay để làm gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 7004,
            "y": 130,
            "w": 560,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "fountain-pen"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Wednesday",
            "caption": "Tối thứ Tư · ở nhà",
            "icon": "memo"
          },
          {
            "id": "d-i1",
            "t": "illus",
            "name": "school",
            "x": 5964,
            "y": 170,
            "size": 90,
            "at": "l2:raising"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Nuôi con, học phí, thuê trọ",
            "x": 6074,
            "y": 180,
            "size": 46,
            "at": "l2:raising"
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "→ chung, chồng chịu một nửa",
            "x": 6094,
            "y": 255,
            "size": 44,
            "at": "l3:half",
            "color": "accent",
            "hl": [
              {
                "text": "một nửa",
                "at": "l3:half"
              }
            ]
          },
          {
            "id": "d-i2",
            "t": "illus",
            "name": "house",
            "x": 5964,
            "y": 340,
            "size": 90,
            "at": "l4:repair"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Sửa nhà → vợ tự trả",
            "x": 6074,
            "y": 355,
            "size": 46,
            "at": "l4:repair",
            "color": "coral",
            "hl": [
              {
                "text": "vợ tự trả",
                "at": "l4:alone"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Mục đích vay quyết định",
            "x": 5964,
            "y": 500,
            "size": 56,
            "at": "l6:purpose",
            "color": "accent",
            "hl": [
              {
                "text": "Mục đích",
                "at": "l6:purpose"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 06/12/2022 (Bản án 26/2019/HNGĐ-PT)",
            "x": 5964,
            "y": 720,
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
          "say": "Second stop: Wednesday night. In that case, the wife had borrowed for two things.",
          "sub": "Chặng hai: tối thứ Tư. Trong bản án ấy, người vợ vay cho hai việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Money for raising the child, school fees and the child's rented room: essential.",
          "sub": "Tiền nuôi con, nộp học phí, thuê nhà trọ cho con: thiết yếu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So the court accepted it as shared debt, and the husband bore half.",
          "sub": "Nên toà chấp nhận là nợ chung, người chồng chịu một nửa.",
          "keys": [
            "chịu một nửa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Money to repair the house? Not essential. The wife repaid that alone.",
          "sub": "Còn tiền vay sửa nhà? Không được coi là thiết yếu, người vợ tự trả.",
          "keys": [
            "người vợ tự trả"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "So for each loan, I'll write what it was for.",
          "sub": "Vậy mỗi khoản, em ghi rõ vay để làm gì.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Exactly. The purpose decides a lot. Say what each loan was for.",
          "sub": "Đúng. Mục đích vay quyết định nhiều điều. Hãy nói rõ mỗi khoản vay để làm gì.",
          "keys": [
            "Mục đích vay quyết định nhiều điều"
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
            "at": "l7",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Khuya thứ Tư · Tờ giấy",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "neutral"
                }
              ],
              "props": [
                "memo",
                "page-facing-up",
                "credit-card"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:later",
            "caption": "Khuya thứ Tư · bàn bếp",
            "icon": "memo"
          },
          {
            "id": "e-0",
            "t": "text",
            "text": "Con số thật, không phải nỗi sợ",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:Facts",
            "color": "accent",
            "hl": [
              {
                "text": "Con số thật",
                "at": "l2:Facts"
              }
            ]
          },
          {
            "id": "e-f1",
            "t": "text",
            "text": "Ở đâu · còn bao nhiêu · kỳ trả",
            "x": 7932,
            "y": 245,
            "size": 38,
            "at": "l2:lender"
          },
          {
            "id": "e-f2",
            "t": "text",
            "text": "Ngày hạn · lãi suất · để làm gì",
            "x": 7932,
            "y": 300,
            "size": 38,
            "at": "l2:due date"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 390,
            "w": 40,
            "h": 40,
            "at": "l3:Step one",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 374,
            "size": 50,
            "at": "l3:Step one+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Từng khoản nợ",
            "x": 7994,
            "y": 380,
            "size": 42,
            "at": "l3:Step one+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 460,
            "w": 40,
            "h": 40,
            "at": "l4:Step two",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 444,
            "size": 50,
            "at": "l4:Step two+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Số nợ, kỳ trả, ngày hạn",
            "x": 7994,
            "y": 450,
            "size": 42,
            "at": "l4:Step two+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 530,
            "w": 40,
            "h": 40,
            "at": "l5:Step three",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 514,
            "size": 50,
            "at": "l5:Step three+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Dùng vào việc gì",
            "x": 7994,
            "y": 520,
            "size": 42,
            "at": "l5:Step three+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 600,
            "w": 40,
            "h": 40,
            "at": "l6:Step four",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 584,
            "size": 50,
            "at": "l6:Step four+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Kẹp hợp đồng, sao kê",
            "x": 7994,
            "y": 590,
            "size": 42,
            "at": "l6:Step four+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: later that night. Thảo makes one sheet for the talk.",
          "sub": "Chặng ba: khuya hôm đó. Thảo chuẩn bị một tờ giấy cho buổi nói chuyện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Facts, not fear. For each debt: lender, balance, monthly payment, due date, interest rate, and purpose.",
          "sub": "Con số thật, không phải nỗi sợ. Mỗi khoản: vay ở đâu, còn nợ bao nhiêu, kỳ trả, ngày đến hạn, lãi suất, dùng vào việc gì.",
          "keys": [
            "Con số thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step one: every debt. Consumer loan, card balance, and the money from my friend.",
          "sub": "Bước một: từng khoản. Vay tiêu dùng, dư nợ thẻ, khoản mượn của bạn.",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step two: balance, payment and due date, from the contracts and statements.",
          "sub": "Bước hai: số còn nợ, kỳ trả, ngày đến hạn, lấy từ hợp đồng và sao kê."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Step three: what each one paid for. I'll mark Bin's school and doctor bills.",
          "sub": "Bước ba: mỗi khoản dùng vào việc gì. Đánh dấu khoản cho Bin đi học, khám bệnh.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Step four: clip the contracts and statements, so he sees them himself.",
          "sub": "Bước bốn: kẹp kèm hợp đồng, sao kê để anh xem tận mắt.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Keep receipts that prove what a loan was for, the article advises.",
          "sub": "Bài cũng khuyên giữ chứng từ, hoá đơn chứng minh mục đích khoản vay.",
          "keys": [
            "giữ chứng từ, hoá đơn"
          ]
        }
      ],
      "ref": "p7,p8"
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
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Cùng nhìn vấn đề,",
            "x": 8792,
            "y": 640,
            "size": 46,
            "at": "l1:look at",
            "color": "accent"
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "không nhìn nhau trách móc",
            "x": 8832,
            "y": 700,
            "size": 42,
            "at": "l1:glaring",
            "hl": [
              {
                "text": "không nhìn nhau",
                "at": "l1:glaring"
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
          "say": "A full list lets two people look at the problem, instead of glaring at each other.",
          "sub": "Một tờ danh sách đủ thông tin giúp hai người cùng nhìn vào vấn đề, thay vì nhìn nhau trách móc.",
          "keys": [
            "cùng nhìn vào vấn đề"
          ]
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
            "text": "④ Thứ Năm · Tập câu nói",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "stern"
                }
              ],
              "props": [
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:rehearses",
            "caption": "Thứ Năm · tập trước gương",
            "icon": "memo"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "“Anh cứ hay tiêu hoang…”",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:overspend",
            "color": "muted"
          },
          {
            "id": "f-1x",
            "t": "strike",
            "over": "f-1",
            "at": "l3:indictment"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "= đổ lỗi, không phải nhận lỗi",
            "x": 100,
            "y": 1340,
            "size": 44,
            "at": "l3:confession",
            "color": "coral",
            "hl": [
              {
                "text": "đổ lỗi",
                "at": "l3:indictment"
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
          "say": "Fourth stop: Thursday. Thảo rehearses. Her first draft sounds like this.",
          "sub": "Chặng bốn: thứ Năm. Thảo tập nói. Bản nháp đầu tiên nghe thế này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "You always overspend, so I had to borrow. Now look at this mess.",
          "sub": "Anh cứ hay tiêu hoang nên em mới phải đi vay, giờ có chuyện rồi đây.",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ouch. That's not a confession, that's an indictment.",
          "sub": "Ối. Đó không phải lời thú nhận, mà là bản cáo trạng.",
          "keys": [
            "bản cáo trạng"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Câu mở đầu của Thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Anh cứ hay tiêu hoang nên em mới phải vay",
        "right": "Em xin lỗi vì đã giấu. Mình cùng xem nhé",
        "wrongIllus": "right-anger-bubble",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: blame.",
          "sub": "Trước: đổ lỗi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: own it, show it, invite him in.",
          "sub": "Sau: nhận lỗi, đưa giấy, mời cùng tính.",
          "keys": [
            "mời cùng tính"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p12"
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
            "at": "l1",
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
            "id": "f-3",
            "t": "text",
            "text": "Nhận lỗi · đưa giấy · mời tính",
            "x": 60,
            "y": 1440,
            "size": 46,
            "at": "l3:Own",
            "color": "accent",
            "hl": [
              {
                "text": "mời tính",
                "at": "l3:invite"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Không thanh minh dài dòng",
            "x": 60,
            "y": 1520,
            "size": 44,
            "at": "l3:excuses",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "I need to be honest with you. I owe a few debts I haven't mentioned. It's all on this sheet.",
          "sub": "Em có chuyện cần nói thật. Em đang nợ mấy khoản chưa kể, em đã ghi hết ra tờ này.",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm sorry I hid it. Let's look at it together, so Bin isn't affected.",
          "sub": "Em xin lỗi vì đã giấu. Mình cùng xem và tính cách trả, để không ảnh hưởng tới con.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Own your part, give the full facts, invite your partner in. No long excuses.",
          "sub": "Nhận phần của mình, đưa đủ thông tin, mời người kia cùng giải quyết. Không thanh minh dài dòng.",
          "keys": [
            "Nhận phần của mình"
          ]
        }
      ],
      "ref": "p11,p12,p13"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Năm · định nói dần",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nói nhỏ giọt từng khoản",
          "why": "Mỗi lần người kia phát hiện thêm một khoản, lòng tin lại tụt.",
          "rule": "Nói hết một lần, kể cả khoản ngại nhất"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Maybe tomorrow I'll only mention the card. The rest, some other time.",
          "sub": "Hay mai em chỉ kể khoản thẻ thôi. Mấy khoản kia để lúc khác.",
          "pose": "shrug",
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
          "say": "Bit by bit is the fastest way to lose trust. Each new find, trust drops again.",
          "sub": "Nói nhỏ giọt là cách mất lòng tin nhanh nhất. Mỗi lần phát hiện thêm, lòng tin lại tụt.",
          "keys": [
            "mất lòng tin nhanh nhất"
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
          "say": "Everything, in one talk. Even the one I'm most ashamed of.",
          "sub": "Nói hết, trong một lần. Kể cả khoản em ngại nhất.",
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
      "ref": "p10"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tối thứ Sáu · Nói hết",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross"
                }
              ],
              "props": [
                "memo",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Tối thứ Sáu · con đã ngủ",
            "icon": "crescent-moon"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Con ngủ · không vội · không người ngoài",
            "x": 2028,
            "y": 1260,
            "size": 38,
            "at": "l1:asleep"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“Em vay thì em lo”",
            "x": 2028,
            "y": 1350,
            "size": 48,
            "at": "l4:business",
            "color": "muted"
          },
          {
            "id": "g-2x",
            "t": "strike",
            "over": "g-2",
            "at": "l5:misconception"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Thiết yếu → có thể chung",
            "x": 2028,
            "y": 1430,
            "size": 50,
            "at": "l5:food",
            "color": "accent",
            "hl": [
              {
                "text": "có thể chung",
                "at": "l5:may be shared"
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
          "say": "Fifth stop: Friday night. Bin asleep, no rush, no guests. Good timing.",
          "sub": "Chặng năm: tối thứ Sáu. Bin đã ngủ, không vội, không người ngoài. Đúng lúc.",
          "keys": [
            "Đúng lúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Across the table: Dũng, her husband, a salesman, master of okay, let's go.",
          "sub": "Ngồi đối diện là Dũng, chồng Thảo, dân kinh doanh, chuyên gia “Ok, làm luôn”.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So that's everything. Every debt is on this sheet.",
          "sub": "Vậy đó là tất cả. Mọi khoản đều ở trên tờ này.",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Your loans, your business. I'm not involved, right?",
          "sub": "Nợ em vay thì em lo. Anh đâu có liên quan, đúng không?",
          "face": "stern",
          "pose": "cross"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A common misconception. Loans for family food, housing, study or treatment may be shared debt.",
          "sub": "Hiểu lầm hay gặp. Khoản vay vì ăn, ở, học tập, chữa bệnh của gia đình có thể là nợ chung.",
          "keys": [
            "có thể là nợ chung"
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
      "ref": "p10,p14"
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
            "id": "g-4",
            "t": "text",
            "text": "Vay trong hôn nhân ≠ cùng trả",
            "x": 2028,
            "y": 1530,
            "size": 44,
            "at": "l1:binds"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "→ tuỳ mục đích",
            "x": 2068,
            "y": 1600,
            "size": 48,
            "at": "l1:purpose",
            "color": "coral",
            "hl": [
              {
                "text": "mục đích",
                "at": "l1:purpose"
              }
            ]
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Đừng tự kết luận: cùng xác định",
            "x": 2028,
            "y": 1690,
            "size": 42,
            "at": "l2:decide",
            "hl": [
              {
                "text": "cùng xác định",
                "at": "l2:together"
              }
            ]
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "Hẹn mai nói tiếp,",
            "x": 2888,
            "y": 1730,
            "size": 44,
            "at": "l4:Pause",
            "color": "accent"
          },
          {
            "id": "g-8",
            "t": "text",
            "text": "không ai bỏ dở",
            "x": 2928,
            "y": 1790,
            "size": 44,
            "at": "l4:drop",
            "hl": [
              {
                "text": "không ai bỏ dở",
                "at": "l4:drop"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 06/12/2022",
            "x": 2028,
            "y": 1810,
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
          "say": "But not every loan in a marriage binds the other. It depends on the purpose.",
          "sub": "Ngược lại, không phải cứ vay trong hôn nhân là người kia phải trả. Còn tuỳ mục đích.",
          "keys": [
            "Còn tuỳ mục đích"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So don't decide alone which debts are private. Sort it out together.",
          "sub": "Nên đừng tự kết luận khoản nào là của riêng. Nói ra để cùng xác định.",
          "keys": [
            "cùng xác định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I need some air. Can we continue tomorrow?",
          "sub": "Anh cần bình tĩnh đã. Mai mình nói tiếp được không?",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fine. The listener needs time to digest. Pause it, just don't drop it.",
          "sub": "Được. Người nghe cần thời gian tiêu hoá. Hẹn nói tiếp, miễn là không ai bỏ dở.",
          "keys": [
            "không ai bỏ dở"
          ]
        }
      ],
      "ref": "p11,p14,p15"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Nửa đêm · Lượt của Dũng",
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
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
            "at": "l1:midnight",
            "caption": "Cùng đêm · quá nửa đêm",
            "icon": "mobile-phone"
          },
          {
            "id": "h-0",
            "t": "text",
            "text": "Công ty tài chính nhắc nợ",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l2:finance",
            "color": "coral"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: app mới trả app cũ",
            "x": 3996,
            "y": 1350,
            "size": 44,
            "at": "l4:Option A"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: kể hết, gọi bên vay",
            "x": 3996,
            "y": 1430,
            "size": 42,
            "at": "l5:Option B",
            "color": "accent",
            "hl": [
              {
                "text": "gọi bên vay",
                "at": "l5:call"
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
          "say": "Sixth stop: the same night, past midnight. Now Dũng's phone buzzes.",
          "sub": "Chặng sáu: cùng đêm, quá nửa đêm. Đến lượt điện thoại của Dũng rung."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "A finance company reminder. I never told Thảo about this one either.",
          "sub": "Công ty tài chính nhắc nợ. Khoản này anh cũng chưa kể với Thảo.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plot twist! The secret keeper had a partner in crime.",
          "sub": "Bất ngờ chưa! Người giữ bí mật hoá ra có… đồng phạm.",
          "keys": [
            "đồng phạm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Option A: download another lending app to pay this one, keep quiet, hope for next month's bonus.",
          "sub": "Cách A: tải một app vay khác trả khoản này, vẫn im lặng, chờ tháng sau có thưởng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Option B: tell Thảo tonight, add it to the list, call the lender in the morning about spreading payments.",
          "sub": "Cách B: kể với Thảo ngay đêm nay, ghi thêm vào danh sách, sáng mai gọi bên cho vay hỏi cách giãn kỳ trả.",
          "keys": [
            "giãn kỳ trả"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "rung",
          "offsetMs": 1500
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Vay khoản mới để che khoản cũ?",
        "illus": "money-with-wings"
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
          "say": "A new loan to cover an old one?",
          "sub": "Vay khoản mới để che khoản cũ?",
          "keys": [
            "che khoản cũ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p19"
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
            "id": "h-k",
            "t": "text",
            "text": "Che nợ cũ = đẩy sang tháng sau",
            "x": 3996,
            "y": 1540,
            "size": 44,
            "at": "l1:pushes",
            "color": "coral"
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "Nói ra = thêm người cùng gánh",
            "x": 3996,
            "y": 1630,
            "size": 48,
            "at": "l3:carrying",
            "color": "accent",
            "hl": [
              {
                "text": "cùng gánh",
                "at": "l3:load"
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
          "say": "That only pushes the problem to next month.",
          "sub": "Vay mới che nợ cũ chỉ đẩy vấn đề sang tháng sau.",
          "keys": [
            "đẩy vấn đề sang tháng sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thảo? Still awake? I have one more for your list.",
          "sub": "Thảo ơi, em còn thức không? Anh có thêm một khoản cho tờ danh sách.",
          "face": "sad",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Telling it means one more person carrying the load.",
          "sub": "Nói ra thì có thêm một người cùng gánh.",
          "keys": [
            "thêm một người cùng gánh"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Kế hoạch chung",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "memo",
                "handshake"
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
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật · bàn phòng khách",
            "icon": "memo"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l2:order",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1254,
            "size": 50,
            "at": "l2:order+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Xếp thứ tự các khoản",
            "x": 6026,
            "y": 1260,
            "size": 44,
            "at": "l2:order+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1345,
            "w": 40,
            "h": 40,
            "at": "l2:separate",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1329,
            "size": 50,
            "at": "l2:separate+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Giữ riêng phần cho con",
            "x": 6026,
            "y": 1335,
            "size": 44,
            "at": "l2:separate+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 40,
            "h": 40,
            "at": "l3:handle",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1404,
            "size": 50,
            "at": "l3:handle+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Ai liên hệ bên nào",
            "x": 6026,
            "y": 1410,
            "size": 44,
            "at": "l3:handle+200"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Vay lớn sau này: có văn bản",
            "x": 5964,
            "y": 1500,
            "size": 44,
            "at": "l4:big loan",
            "hl": [
              {
                "text": "có văn bản",
                "at": "l4:agreement"
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
          "say": "Seventh stop: Sunday. Dũng called the lender on Saturday morning. Now the plan.",
          "sub": "Chặng bảy: Chủ nhật. Sáng thứ Bảy Dũng đã gọi bên cho vay. Giờ là kế hoạch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: we put the debts in order. Two: Bin's money stays separate.",
          "sub": "Một: xếp các khoản theo thứ tự cần xử lý. Hai: giữ riêng phần chi cho Bin.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three: I handle the finance company and the bank. You handle the card.",
          "sub": "Ba: anh lo công ty tài chính với ngân hàng, em lo bên thẻ.",
          "pose": "thumb",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And for any big loan later, write an agreement so each person's duty is clear.",
          "sub": "Với khoản vay lớn về sau, lập thoả thuận bằng văn bản để rõ trách nhiệm từng người.",
          "keys": [
            "thoả thuận bằng văn bản"
          ]
        }
      ],
      "ref": "p16"
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
            "id": "i-5",
            "t": "text",
            "text": "“Đất đứng tên anh mà”",
            "x": 5964,
            "y": 1590,
            "size": 46,
            "at": "l1:my name",
            "color": "muted"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "→ vẫn là tài sản chung",
            "x": 6004,
            "y": 1665,
            "size": 48,
            "at": "l2:shared",
            "color": "accent",
            "hl": [
              {
                "text": "tài sản chung",
                "at": "l2:shared"
              }
            ]
          },
          {
            "id": "i-7",
            "t": "text",
            "text": "Điều 35: bán phải có văn bản",
            "x": 5964,
            "y": 1745,
            "size": 44,
            "at": "l3:thirty five"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 11/03/2023 (Luật HN&GĐ 2014)",
            "x": 6824,
            "y": 1780,
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
          "who": "dung",
          "say": "Should we sell the land back home? It's in my name anyway.",
          "sub": "Hay bán mảnh đất ở quê? Đằng nào cũng đứng tên anh.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Careful. Bought during the marriage, it stays shared, even in one name, unless a written agreement says otherwise.",
          "sub": "Cẩn thận. Mua trong thời kỳ hôn nhân thì vẫn là tài sản chung dù đứng tên một người, nếu không có văn bản thoả thuận khác.",
          "keys": [
            "vẫn là tài sản chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Article thirty five says disposing of shared real estate needs a written agreement of both.",
          "sub": "Và Điều 35 nói: định đoạt bất động sản chung phải có thoả thuận bằng văn bản của vợ chồng."
        }
      ],
      "ref": "p17"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần sau · Lại rung",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "memo"
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
            "at": "l1:desk",
            "caption": "Thứ Hai tuần sau · bàn làm việc",
            "icon": "mobile-phone"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Rung mà không úp",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l2:list",
            "color": "accent",
            "hl": [
              {
                "text": "không úp",
                "at": "l2:already knows"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Giận, khóc, im lặng: bình thường",
            "x": 7932,
            "y": 1350,
            "size": 42,
            "at": "l4:angry"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Mất ngủ → người thân, bác sĩ",
            "x": 7932,
            "y": 1430,
            "size": 42,
            "at": "l5:sleep"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday again. Same desk. Bzz. Bzz.",
          "sub": "Lại thứ Hai. Vẫn cái bàn ấy. Bzz. Bzz."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A reminder. It's on our list. Dũng already knows.",
          "sub": "Nhắc nợ. Có trong danh sách của hai đứa. Dũng biết rồi.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paper can't wrap fire. But two people can watch it together.",
          "sub": "“Giấy không gói được lửa.” Nhưng hai người thì canh được lửa.",
          "keys": [
            "hai người thì canh được lửa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hearing about debt, people may get angry, cry, or go silent for days. That's normal, not the end.",
          "sub": "Biết tin nợ, người ta có thể giận, khóc, im lặng nhiều ngày. Bình thường thôi, chưa phải hết đường.",
          "keys": [
            "chưa phải hết đường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If either of you can't sleep or feels it's too much, reach out: a trusted relative, a doctor, a psychologist.",
          "sub": "Nếu mất ngủ, lo âu kéo dài: tìm người thân đáng tin, bác sĩ, chuyên gia tâm lý."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "rung",
          "offsetMs": 1200
        }
      ],
      "ref": "p20"
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
            "at": "l1:purpose",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:Own",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6904,
            "y": 40,
            "at": "l1:purpose"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l2:everything"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l2:invite"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 7464,
            "y": 1130,
            "at": "l3:shared"
          },
          {
            "id": "j-s1",
            "t": "text",
            "text": "Tối nay: ghi mọi khoản nợ",
            "x": 7932,
            "y": 1530,
            "size": 48,
            "at": "l4:Tonight",
            "color": "accent",
            "hl": [
              {
                "text": "ghi mọi khoản nợ",
                "at": "l4:write"
              }
            ]
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "Hẹn nói khi con đã ngủ",
            "x": 7932,
            "y": 1605,
            "size": 44,
            "at": "l4:asleep"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: chia ngân sách",
            "x": 7932,
            "y": 1680,
            "size": 40,
            "at": "l5:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi.",
            "x": 7932,
            "y": 1740,
            "size": 28,
            "at": "l5",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Khi cần, kiểm lại với cơ quan, chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1785,
            "size": 28,
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
          "say": "So: essential loans can be shared, and the purpose of each loan matters.",
          "sub": "Tóm lại: khoản vay thiết yếu có thể là nợ chung, và mục đích vay quyết định nhiều điều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Make one full list. Say everything at once. Own your part, then invite your partner in.",
          "sub": "Lập một danh sách đủ. Nói hết một lần. Nhận phần mình, rồi mời người kia cùng tính.",
          "keys": [
            "Nói hết một lần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And any sale of shared property, you decide together.",
          "sub": "Mọi quyết định bán tài sản chung, phải cùng nhau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tonight: write every debt on one sheet, and book a talk for when the kids are asleep.",
          "sub": "Việc làm ngay: tối nay ghi mọi khoản nợ ra một tờ giấy, hẹn buổi nói chuyện khi con đã ngủ.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: splitting the budget to protect food and school money. Rules change, so check first.",
          "sub": "Bài tiếp: chia ngân sách để giữ tiền ăn, tiền học của con. Quy định có thể đổi, nhớ kiểm lại."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p21"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "In option B, what does Tuan do the next morning?",
        "options": [
          "He calls the lender to ask how the repayments could be spread out",
          "He changes his phone number so that the lender cannot reach him",
          "He asks his boss for a bonus in advance without telling anybody"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "telephone-receiver",
        "why": "Cách B: kể hết với vợ, rồi sáng hôm sau gọi bên cho vay hỏi cách giãn kỳ trả."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In option B, what does Tuan do the next morning?",
          "sub": "Ở cách B, sáng hôm sau anh Tuấn làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "He calls the lender to ask how the repayments could be spread out.",
          "sub": "Anh gọi cho bên cho vay, hỏi cách giãn kỳ trả."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "After telling his wife everything the night before.",
          "sub": "Sau khi đã kể hết với vợ từ tối hôm trước."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[33]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nói với vợ chồng về khoản nợ"
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
  "hook": "HOOK-19",
  "notes": "#145 bài MỚI (bài 1 chuỗi Gỡ nợ mà giữ được nhà) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-19: tiếng rung điện thoại trước hình → Thảo úp màn hình (intro, p1) → câu hỏi chính (p2) → BRK-08 một tuần. Bảng 10 ô theo MỘT TUẦN tới buổi nói thật (khớp “tối thứ Sáu” ở bài tổng quan): trưa thứ Ba nợ chung/riêng (p3, p4) → BRK-09 bản án 2019 Thanh Hoá (p5) → tối thứ Tư mục đích vay (p5, p6) → khuya thứ Tư tờ danh sách bốn bước (vai “chị Lan” p7–p9) → thứ Năm tập câu nói (p12; BRK-04 Trước/Sau; p11, p13) → “Khoan đã!” nói nhỏ giọt (p10) → tối thứ Sáu nói hết, Dũng “em vay thì em lo” (p10, p14, p15, p11) → nửa đêm lượt của Dũng, Cách A/B (vai “anh Tuấn” p18; BRK-07 p19) → Chủ nhật kế hoạch chung (p16), mảnh đất đứng tên Dũng, Điều 35 (p17) → thứ Hai tuần sau lại rung mà không úp (khép vòng “Giấy không gói được lửa”; p20, p21). Nhân vật: Thảo, Dũng (Bin chỉ nhắc tên). Điều luật, bản án chỉ từ bài; nguồn Thư viện Pháp luật ghi nhỏ. Lưu ý chung #133 ở ô J. Câu đố questions[33].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
