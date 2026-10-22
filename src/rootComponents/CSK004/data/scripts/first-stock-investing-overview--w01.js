// first-stock-investing-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "first-stock-investing-overview--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "first-time-stock-investors-35",
    "slug": "first-stock-investing-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bắt đầu đầu tư chứng khoán ở tuổi 35+ cần hiểu gì trước khi mở tài khoản?",
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
            "fit": [
              "a-obj"
            ],
            "move": "cut",
            "zoom": 1.6
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-obj",
            "t": "illus",
            "name": "ledger",
            "x": 120,
            "y": 110,
            "size": 300,
            "at": 0
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Sổ tiết kiệm 15 năm",
            "x": 470,
            "y": 140,
            "size": 64,
            "at": "l1:savings",
            "hl": [
              {
                "text": "15 năm",
                "at": "l1:fifteen"
              }
            ]
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "còn 30 ngày đáo hạn",
            "x": 470,
            "y": 240,
            "size": 52,
            "at": "l2:thirty",
            "color": "coral",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l2:thirty"
              }
            ]
          },
          {
            "id": "a-z",
            "t": "text",
            "text": "Zalo: “ting ting”",
            "x": 470,
            "y": 330,
            "size": 46,
            "at": "l3:ping",
            "color": "muted"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: vào là lãi?",
            "x": 60,
            "y": 470,
            "size": 50,
            "at": "l4:everyone",
            "color": "muted"
          },
          {
            "id": "a-mythx",
            "t": "strike",
            "over": "a-myth",
            "at": "l4:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One small book: a savings book, fifteen years old.",
          "sub": "Một cuốn sổ nhỏ: sổ tiết kiệm, mười lăm năm tuổi.",
          "keys": [
            "sổ tiết kiệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thirty days until it matures. A piggy bank coming out of hibernation.",
          "sub": "Còn ba mươi ngày nữa là đáo hạn. Con heo đất sắp thức dậy sau giấc ngủ đông.",
          "keys": [
            "ba mươi ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile the phone keeps going ping: stock groups, stock tips, stock screenshots.",
          "sub": "Trong khi đó điện thoại cứ “ting ting”: nhóm chứng khoán, mã này mã kia, ảnh chụp lãi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Everyone seems to win. Is it really that simple?",
          "sub": "Ai cũng có vẻ thắng. Có thật đơn giản vậy không?",
          "keys": [
            "đơn giản vậy không"
          ]
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
            "at": "l3",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "ledger",
                "mobile-phone"
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
            "at": "l1",
            "caption": "Còn 30 ngày · quán vừa đóng cửa",
            "icon": "ledger"
          },
          {
            "id": "a-who",
            "t": "text",
            "text": "Chị Hoa · 42 · chủ quán cơm",
            "x": 60,
            "y": 580,
            "size": 40,
            "at": "l2:forty-two",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn chắc mặc bền”",
            "x": 900,
            "y": 650,
            "size": 56,
            "at": "l5:eat",
            "color": "accent",
            "hl": [
              {
                "text": "Ăn chắc",
                "at": "l5:safe"
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
          "say": "Meet chị Hoa.",
          "sub": "Đây là chị Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Forty-two, runs a rice shop. Fifteen years of savings, and not one share.",
          "sub": "42 tuổi, chủ quán cơm đầu ngõ. Mười lăm năm gửi tiết kiệm, chưa mua một cổ phiếu nào.",
          "keys": [
            "chưa mua một cổ phiếu nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Everyone's opening a stock account. Am I too late?",
          "sub": "Ai cũng mở tài khoản chứng khoán. Mình có chậm chân quá không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "But this money is for my son, and for my mother.",
          "sub": "Nhưng tiền này còn lo cho thằng Bin, cho mẹ nữa.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Her motto has always been: eat safe, dress to last.",
          "sub": "Phương châm của chị xưa nay: “Ăn chắc mặc bền.”",
          "keys": [
            "Ăn chắc mặc bền"
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
      "ref": "intro,p8"
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
            "text": "Hiểu gì trước khi mở tài khoản?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:understand",
            "hl": [
              {
                "text": "Hiểu gì",
                "at": "l1:understand"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Lướt sóng theo tin",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:chasing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Đầu tư có kế hoạch",
            "x": 2668,
            "y": 170,
            "size": 58,
            "at": "l2:plan",
            "color": "accent",
            "hl": [
              {
                "text": "có kế hoạch",
                "at": "l2:plan"
              }
            ]
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Kế hoạch trước, mã sau",
            "x": 2028,
            "y": 300,
            "size": 52,
            "at": "l3:first",
            "hl": [
              {
                "text": "Kế hoạch trước",
                "at": "l3:plan first"
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
          "say": "So what should you understand before opening an account, after thirty-five?",
          "sub": "Vậy ngoài 35 tuổi, cần hiểu gì trước khi mở tài khoản chứng khoán?",
          "keys": [
            "cần hiểu gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not chasing tips and riding waves. But investing with a plan.",
          "sub": "Không phải lướt sóng theo tin. Mà là đầu tư có kế hoạch.",
          "keys": [
            "đầu tư có kế hoạch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The plan first, the stock names later.",
          "sub": "Kế hoạch trước, tên mã tính sau.",
          "keys": [
            "Kế hoạch trước"
          ]
        }
      ],
      "ref": "intro,p5"
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
            "id": "b-5",
            "t": "text",
            "text": "5 chặng",
            "x": 2028,
            "y": 440,
            "size": 60,
            "at": "l1:Five",
            "hl": [
              {
                "text": "5 chặng",
                "at": "l1:Five"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 300,
            "h": 100,
            "at": "l1:split",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 560,
            "w": 300,
            "h": 100,
            "at": "l1:funds",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 560,
            "w": 300,
            "h": 100,
            "at": "l2:years",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 560,
            "w": 300,
            "h": 100,
            "at": "l2:rules",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 560,
            "w": 300,
            "h": 100,
            "at": "l3:tip groups",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Tách tiền",
            "x": 2053,
            "y": 578,
            "size": 44,
            "at": "l1:split+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Quỹ hay lẻ",
            "x": 2383,
            "y": 578,
            "size": 44,
            "at": "l1:funds+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Còn mấy năm",
            "x": 2713,
            "y": 578,
            "size": 44,
            "at": "l2:years+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Quy tắc",
            "x": 3043,
            "y": 578,
            "size": 44,
            "at": "l2:rules+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Phím hàng",
            "x": 3373,
            "y": 578,
            "size": 44,
            "at": "l3:tip groups+200"
          },
          {
            "id": "b-cd",
            "t": "text",
            "text": "30 ngày của chị Hoa",
            "x": 2868,
            "y": 440,
            "size": 50,
            "at": "l4:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l4:thirty"
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
          "say": "Five stages: split your money, then funds or single stocks.",
          "sub": "Năm chặng: tách tiền, rồi chọn quỹ hay cổ phiếu lẻ.",
          "keys": [
            "Năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count the years to retirement, and write your own rules.",
          "sub": "Tính số năm còn lại đến tuổi hưu, và viết quy tắc riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And stay away from tip groups.",
          "sub": "Và tránh xa các nhóm “phím hàng”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "We'll walk them through chị Hoa's thirty days.",
          "sub": "Ta đi qua cả năm chặng trong ba mươi ngày của chị Hoa.",
          "keys": [
            "ba mươi ngày"
          ]
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
            "text": "Còn 29 ngày · Ai cũng mở",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:lunch",
            "hl": [
              {
                "text": "Ai cũng mở",
                "at": "l3:accounts"
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
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
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
            "at": "l1:Dũng",
            "caption": "Trưa · quán cơm chị Hoa",
            "icon": "mobile-phone"
          },
          {
            "id": "c-num",
            "t": "text",
            "text": "+2,6 triệu",
            "x": 3996,
            "y": 150,
            "size": 84,
            "at": "l3:two point six",
            "color": "accent",
            "hl": [
              {
                "text": "2,6 triệu",
                "at": "l3:million"
              }
            ]
          },
          {
            "id": "c-num2",
            "t": "text",
            "text": "tài khoản mới năm 2025",
            "x": 3996,
            "y": 255,
            "size": 44,
            "at": "l3:new"
          },
          {
            "id": "c-tot",
            "t": "text",
            "text": "Tổng: 11.821.745 tài khoản",
            "x": 3996,
            "y": 320,
            "size": 44,
            "at": "l4:total"
          },
          {
            "id": "c-goal",
            "t": "text",
            "text": "vượt mục tiêu 11 triệu",
            "x": 3996,
            "y": 385,
            "size": 44,
            "at": "l4:target",
            "color": "muted"
          },
          {
            "id": "c-goal2",
            "t": "text",
            "text": "vốn đặt cho năm 2030",
            "x": 3996,
            "y": 440,
            "size": 40,
            "at": "l4:twenty thirty",
            "color": "muted"
          },
          {
            "id": "c-vn",
            "t": "text",
            "text": "VN-Index +40,87%",
            "x": 3996,
            "y": 500,
            "size": 56,
            "at": "l5:forty",
            "color": "coral",
            "hl": [
              {
                "text": "+40,87%",
                "at": "l5:percent"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Nhân Dân 09/01/2026, số liệu VSDC",
            "x": 3996,
            "y": 590,
            "size": 28,
            "at": "l4",
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
          "say": "Next day, lunch. Meet Dũng, chị Hoa's cousin: opened an account, already an expert.",
          "sub": "Hôm sau, giờ trưa. Còn đây là Dũng, em họ chị Hoa: mới mở tài khoản, đã thành “chuyên gia”.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Chị, everyone's in! I won three times this month!",
          "sub": "Chị ơi, ai cũng vào rồi! Tháng này em thắng ba lần liền!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "He's not wrong about the crowd. In 2025, about two point six million new accounts opened.",
          "sub": "Về đám đông thì Dũng nói không sai. Năm 2025 có thêm khoảng 2,6 triệu tài khoản.",
          "keys": [
            "2,6 triệu tài khoản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The total passed eleven million, a target first set for twenty thirty.",
          "sub": "Tổng số đã vượt mục tiêu 11 triệu tài khoản, vốn đặt cho năm 2030.",
          "keys": [
            "vượt mục tiêu 11 triệu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The paper links it to a record year: VN-Index up forty point eight seven percent.",
          "sub": "Bài báo gắn chuyện này với một năm kỷ lục: VN-Index tăng 40,87%.",
          "keys": [
            "40,87%"
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
            "id": "c-slow",
            "t": "text",
            "text": "Thấy mình chậm chân?",
            "x": 4836,
            "y": 690,
            "size": 46,
            "at": "l1:behind",
            "color": "muted"
          },
          {
            "id": "c-risk",
            "t": "text",
            "text": "SEC: có thể mất một phần",
            "x": 3996,
            "y": 645,
            "size": 44,
            "at": "l2:lose",
            "color": "coral",
            "hl": [
              {
                "text": "mất một phần",
                "at": "l2:lose"
              }
            ]
          },
          {
            "id": "c-ins",
            "t": "text",
            "text": "Ở Mỹ: không bảo hiểm như tiền gửi",
            "x": 3996,
            "y": 715,
            "size": 30,
            "at": "l3:insured",
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
          "say": "When the whole chat is counting profits, a saver feels left behind.",
          "sub": "Khi cả nhóm chat bàn lãi lỗ mỗi ngày, người gửi tiết kiệm dễ thấy mình chậm chân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But the US SEC reminds us: every investment has risk. You can lose some, or all.",
          "sub": "Nhưng Ủy ban Chứng khoán Mỹ, SEC, nhắc: khoản đầu tư nào cũng có rủi ro, có thể mất một phần hoặc toàn bộ tiền.",
          "keys": [
            "mất một phần hoặc toàn bộ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And in the US, stocks usually aren't insured like a bank deposit.",
          "sub": "Ở Mỹ, khoản đầu tư chứng khoán thường không được bảo hiểm như tiền gửi ngân hàng."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Thị trường vừa tăng mạnh, vào lúc nào cũng lãi",
        "right": "Cổ phiếu lớn ở Mỹ từng lỗ khoảng 1 trong 3 năm",
        "wrongIllus": "rocket",
        "rightIllus": "chart-decreasing"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Big jump, so you always win?",
          "sub": "Vừa tăng mạnh, vào là lãi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Big US stocks lost money about one year in three.",
          "sub": "Không. Cổ phiếu lớn ở Mỹ từng lỗ khoảng một trong ba năm.",
          "keys": [
            "một trong ba năm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "text": "Còn 26 ngày · Hóng tin?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:later",
            "hl": [
              {
                "text": "Hóng tin",
                "at": "l1:rumours"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:group",
            "caption": "Tối · nhóm Zalo “Đội lãi khủng”",
            "icon": "speech-balloon"
          },
          {
            "id": "d-h1",
            "t": "text",
            "text": "“hóng tin”, “nghe phím”",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:tip",
            "color": "coral"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "“đánh nhanh, thắng nhanh”",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "l2:fast",
            "color": "coral"
          },
          {
            "id": "d-luck",
            "t": "text",
            "text": "Thắng vài lần = may ngắn hạn",
            "x": 5964,
            "y": 350,
            "size": 46,
            "at": "l3:luck",
            "hl": [
              {
                "text": "may ngắn hạn",
                "at": "l3:short-term luck"
              }
            ]
          },
          {
            "id": "d-small",
            "t": "text",
            "text": "Muốn lướt: chỉ một phần nhỏ vốn",
            "x": 5964,
            "y": 440,
            "size": 42,
            "at": "l4:small",
            "color": "accent",
            "hl": [
              {
                "text": "phần nhỏ",
                "at": "l4:small share"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Tin nhanh chứng khoán, bẫy tâm lý",
            "x": 5964,
            "y": 520,
            "size": 26,
            "at": "l3",
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
          "say": "Three days later. Dũng's group chat is a market fair of rumours.",
          "sub": "Ba hôm sau. Nhóm chat của Dũng là cả một phiên chợ tin đồn.",
          "keys": [
            "phiên chợ tin đồn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Got a tip from the group! In fast, out fast, win fast!",
          "sub": "Có phím từ nhóm rồi! Đánh nhanh, thắng nhanh!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A trading paper describes exactly this. Early wins are mostly short-term luck, gone when the market corrects.",
          "sub": "Báo Tin nhanh chứng khoán tả đúng kiểu này: mấy lần thắng đầu chủ yếu là may ngắn hạn, dễ mất khi thị trường điều chỉnh.",
          "keys": [
            "may ngắn hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Higher returns carry matching risk. If you must trade fast, use only a small share.",
          "sub": "Lợi nhuận cao đi kèm rủi ro tương ứng. Muốn lướt sóng thì chỉ dành một phần nhỏ vốn.",
          "keys": [
            "một phần nhỏ vốn"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l2",
            "fit": [
              "d-plan",
              "d-long",
              "d-short"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-plan",
            "t": "text",
            "text": "SEC: nhìn cả bức tranh",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l1:whole",
            "hl": [
              {
                "text": "cả bức tranh",
                "at": "l1:picture"
              }
            ]
          },
          {
            "id": "d-long",
            "t": "text",
            "text": "Xa (hưu): một phần cổ phiếu",
            "x": 6804,
            "y": 690,
            "size": 40,
            "at": "l2:long",
            "color": "accent"
          },
          {
            "id": "d-short",
            "t": "text",
            "text": "Gần: tiền gửi, có lạm phát",
            "x": 5964,
            "y": 690,
            "size": 40,
            "at": "l3:short",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The plan way? The SEC says: look at your whole financial picture, your goals, and the risk you can take.",
          "sub": "Cách có kế hoạch? SEC khuyên nhìn toàn bộ tình hình tài chính, mục tiêu và mức rủi ro mình chịu được.",
          "keys": [
            "toàn bộ tình hình tài chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Long goals, like retirement, often need some riskier assets, like stocks or stock funds.",
          "sub": "Mục tiêu dài như hưu trí thường cần một phần tài sản rủi ro hơn, như cổ phiếu hay quỹ cổ phiếu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Short goals suit deposits and cash, though inflation still nibbles at them.",
          "sub": "Mục tiêu ngắn hợp với tiền gửi và tương đương tiền, dù lạm phát vẫn gặm dần.",
          "keys": [
            "lạm phát vẫn gặm dần"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Dũng thắng ba lần liền. Chị Hoa có nên đổ cả sổ vào?",
        "illus": "ledger"
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
          "say": "Dũng won three times in a row. Should chị Hoa pour the whole book in?",
          "sub": "Dũng thắng ba lần liền. Vậy chị Hoa có nên đổ cả cuốn sổ vào?",
          "keys": [
            "đổ cả cuốn sổ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "Còn 20 ngày · Chặng 1: Tách tiền",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Twenty",
            "hl": [
              {
                "text": "Tách tiền",
                "at": "l1:split"
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pen",
                "money-bag"
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
            "caption": "Tối · bàn bếp nhà chị Hoa",
            "icon": "memo"
          },
          {
            "id": "e-p1",
            "t": "text",
            "text": "① Dự phòng: cả nhà nhiều tháng",
            "x": 7932,
            "y": 160,
            "size": 40,
            "at": "l3:one"
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "② Học phí của Bin",
            "x": 7932,
            "y": 230,
            "size": 40,
            "at": "l4:two"
          },
          {
            "id": "e-p3",
            "t": "text",
            "text": "③ Tiền cho tuổi hưu",
            "x": 7932,
            "y": 300,
            "size": 40,
            "at": "l4:three",
            "color": "accent"
          },
          {
            "id": "e-r3",
            "t": "box",
            "x": 7912,
            "y": 285,
            "w": 520,
            "h": 70,
            "at": "l5:Only",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "① ② vẫn gửi tiết kiệm",
            "x": 7932,
            "y": 390,
            "size": 44,
            "at": "l5:stay",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twenty days left. Stage one: split the money before it goes anywhere.",
          "sub": "Còn hai mươi ngày. Chặng một: tách tiền trước khi đem đi đâu.",
          "keys": [
            "tách tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Chị Hoa takes a pen, and does what bookkeepers do best.",
          "sub": "Chị Hoa cầm bút, làm đúng nghề thu ngân: chia tiền ra giấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Part one: emergencies, enough for the whole family for many months.",
          "sub": "Phần một: dự phòng, đủ cả nhà chi tiêu nhiều tháng.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Part two: Bin's school fees. Part three: money only for retirement.",
          "sub": "Phần hai: học phí của Bin. Phần ba: tiền chỉ dùng khi nghỉ hưu.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only part three may go to stocks. The first two stay in savings.",
          "sub": "Chỉ phần ba mới xét đưa vào chứng khoán. Hai phần đầu vẫn gửi tiết kiệm.",
          "keys": [
            "Chỉ phần ba"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
      "module": "BRK-03",
      "data": {
        "value": 6,
        "suffix": " tháng",
        "label": "thu nhập: có người giữ làm quỹ dự phòng (SEC)",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "How big is the emergency pot?",
          "sub": "Nồi cơm để dành nên to cỡ nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Some keep up to six months of income.",
          "sub": "Có người giữ tới sáu tháng thu nhập.",
          "keys": [
            "sáu tháng thu nhập"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p7"
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
            "id": "e-job",
            "t": "text",
            "text": "Lo khi mất việc, ốm đau",
            "x": 7932,
            "y": 470,
            "size": 44,
            "at": "l1:job"
          },
          {
            "id": "e-fam",
            "t": "text",
            "text": "Tính cả Bin và bà Tư",
            "x": 7932,
            "y": 540,
            "size": 44,
            "at": "l1:parents",
            "hl": [
              {
                "text": "bà Tư",
                "at": "l1:parents"
              }
            ]
          },
          {
            "id": "e-debt",
            "t": "text",
            "text": "Nợ thẻ lãi cao: trả trước",
            "x": 7932,
            "y": 620,
            "size": 48,
            "at": "l2:debt",
            "color": "coral",
            "hl": [
              {
                "text": "trả trước",
                "at": "l2:paying"
              }
            ]
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Tiền đầu tư = tiền còn lại",
            "x": 7932,
            "y": 700,
            "size": 48,
            "at": "l3:left over",
            "color": "accent",
            "hl": [
              {
                "text": "tiền còn lại",
                "at": "l3:left over"
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
          "say": "It covers things like losing a job. With a family, count the kids and parents too: Bin, and Bà Tư.",
          "sub": "Khoản này lo những chuyện như mất việc. Có gia đình thì tính cả con và cha mẹ: Bin, và bà Tư.",
          "keys": [
            "tính cả con và cha mẹ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "High-interest debt, like a credit card? The SEC says paying it off beats any strategy for safety.",
          "sub": "Còn nợ lãi cao như thẻ tín dụng? SEC nói không chiến lược nào chắc và ít rủi ro bằng trả hết nợ đó.",
          "keys": [
            "trả hết nợ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So investing money is what's left over, after the emergency pot and the soon-needed money.",
          "sub": "Vậy tiền đầu tư là tiền còn lại, sau khi đã có dự phòng và tách riêng tiền sắp dùng.",
          "keys": [
            "tiền còn lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our next video shows how to split it, and why to go in gradually.",
          "sub": "Bài sau nói kỹ cách chia, và vì sao nên vào dần."
        }
      ],
      "ref": "p7,p9,p10"
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "Còn 14 ngày · Quỹ hay lẻ?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourteen",
            "hl": [
              {
                "text": "Quỹ",
                "at": "l1:funds"
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "basket",
                "egg"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1:Thảo",
            "caption": "Chiều Chủ nhật · quán vắng khách",
            "icon": "basket"
          },
          {
            "id": "f-def",
            "t": "text",
            "text": "Quỹ = gom tiền nhiều người",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l3:pools",
            "hl": [
              {
                "text": "gom tiền",
                "at": "l3:pools"
              }
            ]
          },
          {
            "id": "f-buy",
            "t": "text",
            "text": "mua cổ phiếu, trái phiếu…",
            "x": 60,
            "y": 1325,
            "size": 40,
            "at": "l3:bonds",
            "color": "muted"
          },
          {
            "id": "f-own",
            "t": "text",
            "text": "Mỗi người: phần nhỏ của nhiều",
            "x": 60,
            "y": 1395,
            "size": 42,
            "at": "l3:small piece",
            "color": "accent"
          },
          {
            "id": "f-cert",
            "t": "text",
            "text": "Chứng chỉ quỹ: giấy sở hữu",
            "x": 60,
            "y": 1480,
            "size": 42,
            "at": "l5:certificate",
            "hl": [
              {
                "text": "sở hữu",
                "at": "l5:ownership"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: SEC; Thư viện Pháp luật",
            "x": 60,
            "y": 1560,
            "size": 26,
            "at": "l3",
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
          "say": "Fourteen days left. Stage two: funds or single stocks? Meet Thảo, chị Hoa's school friend.",
          "sub": "Còn mười bốn ngày. Chặng hai: quỹ hay cổ phiếu lẻ? Còn đây là Thảo, bạn cấp ba của chị Hoa.",
          "keys": [
            "quỹ hay cổ phiếu lẻ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, I'm an accountant, not a stock picker. So I buy a fund, every month.",
          "sub": "Thứ nhất, mình là kế toán, không phải người chọn mã. Nên mình mua quỹ, đều mỗi tháng.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC explains: a fund pools many people's money to buy stocks, bonds and more. Each owns a small piece.",
          "sub": "SEC giải thích: quỹ gom tiền nhiều người để mua cổ phiếu, trái phiếu và các công cụ khác. Mỗi người sở hữu một phần nhỏ.",
          "keys": [
            "gom tiền nhiều người"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So one basket, many eggs, and someone else carries it?",
          "sub": "Vậy là một giỏ, nhiều trứng, có người xách giùm hả?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Close. A fund certificate confirms your ownership of part of the fund's capital.",
          "sub": "Gần đúng. Chứng chỉ quỹ xác nhận quyền sở hữu của bạn với một phần vốn của quỹ.",
          "keys": [
            "quyền sở hữu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "f-10",
            "t": "text",
            "text": "Mệnh giá: 10 nghìn đồng",
            "x": 60,
            "y": 1630,
            "size": 48,
            "at": "l1:ten thousand",
            "hl": [
              {
                "text": "10 nghìn đồng",
                "at": "l1:ten thousand"
              }
            ]
          },
          {
            "id": "f-open",
            "t": "text",
            "text": "Quỹ mở: mua lại khi yêu cầu",
            "x": 60,
            "y": 1705,
            "size": 40,
            "at": "l2:open",
            "color": "accent"
          },
          {
            "id": "f-closed",
            "t": "text",
            "text": "Quỹ đóng: không mua lại",
            "x": 60,
            "y": 1760,
            "size": 40,
            "at": "l2:closed",
            "color": "muted"
          },
          {
            "id": "f-ask",
            "t": "text",
            "text": "Hỏi trước: mở hay đóng?",
            "x": 900,
            "y": 1780,
            "size": 50,
            "at": "l3:ask",
            "color": "coral",
            "hl": [
              {
                "text": "mở hay đóng",
                "at": "l3:open or closed"
              }
            ]
          },
          {
            "id": "f-lawsrc",
            "t": "text",
            "text": "Luật Chứng khoán 2019 (Thư viện Pháp luật)",
            "x": 60,
            "y": 1815,
            "size": 24,
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
          "say": "Did you know? Under the 2019 Securities Law, public stocks and fund certificates have a face value of ten thousand dong.",
          "sub": "Bạn có biết: theo Luật Chứng khoán 2019, mệnh giá cổ phiếu và chứng chỉ quỹ chào bán ra công chúng là 10 nghìn đồng.",
          "keys": [
            "10 nghìn đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An open fund must buy back your certificates when you ask. A closed fund doesn't.",
          "sub": "Quỹ mở phải mua lại chứng chỉ quỹ khi bạn yêu cầu. Quỹ đóng thì không.",
          "keys": [
            "Quỹ mở"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So before buying, ask: open or closed? That's asking how you get your money out.",
          "sub": "Vậy trước khi mua, hỏi: quỹ mở hay quỹ đóng? Tức là hỏi cách lấy tiền ra.",
          "keys": [
            "quỹ mở hay quỹ đóng"
          ]
        }
      ],
      "ref": "p12,p13,p14"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "Còn 9 ngày · Còn mấy năm?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Nine",
            "hl": [
              {
                "text": "Còn mấy năm",
                "at": "l1:years"
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
              "set": "park",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "hourglass-not-done"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bác Bình",
            "caption": "Sáng sớm · công viên đầu ngõ",
            "icon": "hourglass-not-done"
          },
          {
            "id": "g-long",
            "t": "text",
            "text": "Thời gian dài → chờ qua đợt giảm",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l3:wait",
            "hl": [
              {
                "text": "chờ qua",
                "at": "l3:wait"
              }
            ]
          },
          {
            "id": "g-near",
            "t": "text",
            "text": "Gần đích → bớt cổ phiếu",
            "x": 2028,
            "y": 1325,
            "size": 44,
            "at": "l3:Near",
            "color": "accent",
            "hl": [
              {
                "text": "bớt cổ phiếu",
                "at": "l3:fewer"
              }
            ]
          },
          {
            "id": "g-near2",
            "t": "text",
            "text": "thêm trái phiếu, tiền mặt",
            "x": 2028,
            "y": 1390,
            "size": 40,
            "at": "l3:bonds",
            "color": "muted"
          },
          {
            "id": "g-mg",
            "t": "text",
            "text": "Vay ký quỹ: bán lúc giá thấp",
            "x": 2028,
            "y": 1490,
            "size": 40,
            "at": "l5:sell",
            "color": "coral",
            "hl": [
              {
                "text": "giá thấp",
                "at": "l5:low"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: SEC; Thư viện Pháp luật, call margin",
            "x": 2028,
            "y": 1570,
            "size": 26,
            "at": "l3",
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
          "say": "Nine days left. Stage three: how many years to retirement? Meet Bác Bình, the retired neighbour.",
          "sub": "Còn chín ngày. Chặng ba: còn bao nhiêu năm đến tuổi hưu? Còn đây là bác Bình, hàng xóm đã nghỉ hưu.",
          "keys": [
            "bao nhiêu năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Count your years before you count your profits.",
          "sub": "Từ từ, mình xem lại đã. Đếm số năm trước, rồi hẵng đếm tiền lãi.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC agrees: a long horizon can wait out the dips. Near the goal, hold fewer stocks, more bonds and cash.",
          "sub": "SEC cũng nói: thời gian còn dài thì chờ qua được đợt giảm. Gần đích thì bớt cổ phiếu, thêm trái phiếu, tiền mặt.",
          "keys": [
            "chờ qua được đợt giảm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Or borrow on margin, and get there faster!",
          "sub": "Hay vay ký quỹ cho nhanh tới đích, bác!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Careful. With borrowed money, the broker can sell your shares when prices are already low.",
          "sub": "Cẩn thận. Dùng tiền vay, công ty chứng khoán có thể bán cổ phiếu của bạn đúng lúc giá đang thấp.",
          "keys": [
            "giá đang thấp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1800
        }
      ],
      "ref": "p15"
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
            "text": "Còn 5 ngày · Chặng 4: Quy tắc",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Five",
            "hl": [
              {
                "text": "Quy tắc",
                "at": "l1:rules"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
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
            "at": "l2",
            "caption": "Tối · lịch treo tường nhà Thảo",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-r1",
            "t": "text",
            "text": "Đầu tư đều theo định kỳ",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l3:regularly",
            "hl": [
              {
                "text": "định kỳ",
                "at": "l3:regularly"
              }
            ]
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "Tái cân bằng theo lịch",
            "x": 3996,
            "y": 1325,
            "size": 46,
            "at": "l3:rebalancing"
          },
          {
            "id": "h-r3",
            "t": "text",
            "text": "hoặc theo ngưỡng đặt trước",
            "x": 3996,
            "y": 1390,
            "size": 40,
            "at": "l3:threshold",
            "color": "muted"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Viết ra giấy",
            "x": 3996,
            "y": 1470,
            "size": 56,
            "at": "l4:paper",
            "color": "accent",
            "hl": [
              {
                "text": "ra giấy",
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
          "say": "Five days left. Stage four: your own rules.",
          "sub": "Còn năm ngày. Chặng bốn: quy tắc của riêng mình.",
          "keys": [
            "quy tắc của riêng mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Second, my rules live on the calendar, not in my mood.",
          "sub": "Thứ hai, quy tắc của mình nằm trên lịch, không nằm trong tâm trạng.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC suggests investing regularly, and rebalancing on a schedule or at a set threshold.",
          "sub": "SEC gợi ý đầu tư đều đặn theo định kỳ, tái cân bằng theo lịch hoặc theo ngưỡng đặt trước.",
          "keys": [
            "đầu tư đều đặn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write those rules on paper. A later video helps you do it.",
          "sub": "Hãy viết các quy tắc ấy ra giấy. Có bài riêng giúp bạn làm việc này.",
          "keys": [
            "ra giấy"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l1",
            "fit": [
              "h-s5",
              "h-s1",
              "h-s2",
              "h-s3"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-s5",
            "t": "text",
            "text": "Chặng 5: nhóm phím hàng",
            "x": 3996,
            "y": 1570,
            "size": 48,
            "at": "l1:Stage five",
            "color": "coral",
            "hl": [
              {
                "text": "phím hàng",
                "at": "l1:tip groups"
              }
            ]
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "① xưng nhân viên công ty CK",
            "x": 3996,
            "y": 1640,
            "size": 38,
            "at": "l2:staff"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "② mời vào nhóm kín",
            "x": 3996,
            "y": 1695,
            "size": 38,
            "at": "l2:private"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "③ cho thấy lãi ảo",
            "x": 4836,
            "y": 1780,
            "size": 38,
            "at": "l3:fake"
          },
          {
            "id": "h-s4",
            "t": "text",
            "text": "④ chặn rút tiền",
            "x": 3996,
            "y": 1750,
            "size": 38,
            "at": "l3:block",
            "color": "coral"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Nhân Dân 04/5/2024, cảnh báo của Bộ Công an",
            "x": 3996,
            "y": 1818,
            "size": 24,
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
          "say": "Stage five: tip groups. Police in Vietnam have described the script.",
          "sub": "Chặng năm: các nhóm phím hàng. Bộ Công an đã tả rõ kịch bản.",
          "keys": [
            "phím hàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Scammers pose as securities firm staff, and invite you into a private group.",
          "sub": "Kẻ gian tự xưng nhân viên công ty chứng khoán, mời bạn vào nhóm kín."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They show you fake profits. Then they block your withdrawals.",
          "sub": "Chúng cho bạn thấy lãi ảo. Rồi chặn không cho rút tiền.",
          "keys": [
            "chặn không cho rút tiền"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s18",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Còn 3 ngày · trưa ở quán",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Vào nhóm “chuyên gia”, mua giá ưu đãi",
          "why": "Đây đúng kịch bản lừa đảo mà Bộ Công an cảnh báo: nhóm kín, lãi ảo, chặn rút tiền.",
          "rule": "Không vào nhóm lạ; chỉ dùng nền tảng được cấp phép"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "A securities firm called! A private group, and shares below market price. I'll join!",
          "sub": "Công ty chứng khoán gọi! Có nhóm riêng, cổ phiếu rẻ hơn giá thị trường. Vào thôi!",
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
          "say": "A stranger with a discount is a red flag, not a bargain.",
          "sub": "Người lạ kèm “giá ưu đãi” là cờ đỏ, không phải món hời.",
          "keys": [
            "cờ đỏ"
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
          "who": "hoa",
          "say": "No thanks. I'll check the State Securities Commission's website myself.",
          "sub": "Thôi cảm ơn. Chị tự lên trang Ủy ban Chứng khoán Nhà nước kiểm tra.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Skip unknown groups. Use only licensed platforms and official sources.",
          "sub": "Đúng. Không vào nhóm lạ, chỉ dùng nền tảng được cấp phép và nguồn chính thống.",
          "phase": "redo",
          "keys": [
            "nền tảng được cấp phép"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p18"
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
            "text": "Còn 2 ngày · Dấu hiệu dừng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Two",
            "hl": [
              {
                "text": "dừng",
                "at": "l1:stop"
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2",
            "caption": "Tờ giấy cạnh lịch treo tường",
            "icon": "memo"
          },
          {
            "id": "i-st",
            "t": "text",
            "text": "Nhóm lạ + giá ưu đãi = dừng",
            "x": 5964,
            "y": 1250,
            "size": 44,
            "at": "l1:invitation",
            "color": "coral",
            "hl": [
              {
                "text": "dừng",
                "at": "l1:stop"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 44,
            "h": 44,
            "at": "l2:three",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1346,
            "size": 56,
            "at": "l2:three+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Tách 3 phần tiền",
            "x": 6030,
            "y": 1350,
            "size": 40,
            "at": "l2:three+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l2:open",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1416,
            "size": 56,
            "at": "l2:open+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Hỏi quỹ mở hay đóng",
            "x": 6030,
            "y": 1420,
            "size": 40,
            "at": "l2:open+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l3:years",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1486,
            "size": 56,
            "at": "l3:years+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Đếm số năm đến hưu",
            "x": 6030,
            "y": 1490,
            "size": 40,
            "at": "l3:years+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1570,
            "w": 44,
            "h": 44,
            "at": "l3:rules",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1556,
            "size": 56,
            "at": "l3:rules+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Viết quy tắc ra giấy",
            "x": 6030,
            "y": 1560,
            "size": 40,
            "at": "l3:rules+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1640,
            "w": 44,
            "h": 44,
            "at": "l4:groups",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1626,
            "size": 56,
            "at": "l4:groups+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Không vào nhóm lạ",
            "x": 6030,
            "y": 1630,
            "size": 40,
            "at": "l4:groups+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two days left. An invitation plus a special price is a sign to stop, not a chance.",
          "sub": "Còn hai ngày. Lời mời vào nhóm kèm giá ưu đãi là dấu hiệu dừng lại, không phải cơ hội.",
          "keys": [
            "dấu hiệu dừng lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "My list: three parts of money. Ask if a fund is open or closed.",
          "sub": "Danh sách của chị: tách ba phần tiền. Hỏi quỹ mở hay đóng.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Count my years to retirement. Write my rules down.",
          "sub": "Đếm số năm đến tuổi hưu. Viết quy tắc ra giấy.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And stay out of strange groups. Five stages, one sheet of paper.",
          "sub": "Và không vào nhóm lạ. Năm chặng, gói trong một tờ giấy.",
          "keys": [
            "một tờ giấy"
          ]
        }
      ],
      "ref": "p19,outro"
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
            "at": "l3",
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
            "text": "Ngày đáo hạn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:matures"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
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
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone"
                }
              ],
              "props": [
                "ledger",
                "bank"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1:bank",
            "caption": "Sáng · quầy giao dịch ngân hàng",
            "icon": "bank"
          },
          {
            "id": "j-obj",
            "t": "illus",
            "name": "ledger",
            "x": 7932,
            "y": 1250,
            "size": 130,
            "at": "l1:book"
          },
          {
            "id": "j-o",
            "t": "text",
            "text": "① ② gửi tiếp",
            "x": 8092,
            "y": 1270,
            "size": 50,
            "at": "l4:keep",
            "color": "muted"
          },
          {
            "id": "j-r",
            "t": "text",
            "text": "③ chờ học bài sau",
            "x": 8092,
            "y": 1350,
            "size": 50,
            "at": "l4:three",
            "color": "accent",
            "hl": [
              {
                "text": "bài sau",
                "at": "l4:lesson"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Ăn chắc mặc bền”",
            "x": 7932,
            "y": 1490,
            "size": 60,
            "at": "l5:dress",
            "color": "accent",
            "hl": [
              {
                "text": "Ăn chắc",
                "at": "l5:safe"
              }
            ]
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Bắt đầu từ kế hoạch",
            "x": 7932,
            "y": 1610,
            "size": 50,
            "at": "l6:plan",
            "hl": [
              {
                "text": "kế hoạch",
                "at": "l6:plan"
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
          "say": "The day the book matures. Same book, now at the bank counter.",
          "sub": "Ngày sổ đáo hạn. Vẫn cuốn sổ ấy, giờ ở quầy ngân hàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng tags along, phone in hand, still pinging.",
          "sub": "Dũng đi theo, tay cầm điện thoại, vẫn “ting ting”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Chị, all in today? The group says now is the time!",
          "sub": "Chị ơi, hôm nay dồn hết vào chứ? Nhóm bảo đúng lúc rồi!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Parts one and two keep saving. Part three waits until I finish the next lesson.",
          "sub": "Phần một, phần hai chị gửi tiếp. Phần ba chờ chị học xong bài sau đã.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Eat safe, dress to last. Still true, now with a plan.",
          "sub": "“Ăn chắc mặc bền.” Vẫn đúng, giờ thêm một kế hoạch.",
          "keys": [
            "Ăn chắc mặc bền"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Investing after thirty-five starts with a plan, not a tip.",
          "sub": "Đầu tư ở tuổi 35+ bắt đầu từ kế hoạch, không phải từ một lời “phím”.",
          "keys": [
            "bắt đầu từ kế hoạch"
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
      "ref": "p8,outro"
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
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
            "x": 8472,
            "y": 300,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 820,
            "y": 1780,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1340,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4696,
            "y": 1650,
            "at": "l4+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo, không khuyến nghị mua bán cụ thể; cần thì hỏi chuyên gia. Nhân vật là minh hoạ.",
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
          "say": "So: split your money first. Investing money is what's left.",
          "sub": "Tóm lại: tách tiền trước. Tiền đầu tư là tiền còn lại.",
          "keys": [
            "tách tiền trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before a fund, ask: open or closed?",
          "sub": "Trước khi mua quỹ, hỏi: mở hay đóng?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Count your years. Borrowed money can be sold at the worst time.",
          "sub": "Đếm số năm còn lại. Tiền vay có thể bị bán đúng lúc tệ nhất.",
          "keys": [
            "Đếm số năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rules on paper, and no strange groups.",
          "sub": "Quy tắc ra giấy, và không vào nhóm lạ."
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
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the takeaway about money for investing?",
        "options": [
          "It is money borrowed from relatives when a share looks cheap",
          "It is what remains after emergencies and soon needed money are set aside",
          "It is all the money a family has, including next month's rent"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "money-bag",
        "why": "Tiền đầu tư là phần còn lại sau dự phòng và tiền sắp phải dùng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the takeaway about money for investing?",
          "sub": "Bài rút ra điều gì về tiền dùng để đầu tư?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "What's left after the emergency fund and soon-needed money.",
          "sub": "Phần còn lại sau quỹ dự phòng và tiền sắp phải dùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Split first, invest later.",
          "sub": "Tách trước, đầu tư sau."
        }
      ],
      "ref": "questions[22]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi ghi ra ba phần tiền của nhà mình"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write down your family's three parts of money, like chị Hoa.",
          "sub": "Tối nay, ghi ra ba phần tiền của gia đình mình, như chị Hoa."
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
  "notes": "#145 bài MỚI (bài tổng chuỗi first-time-stock-investors-35) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cuốn sổ tiết kiệm 15 năm của chị Hoa, còn 30 ngày đáo hạn → kết ở ngày đáo hạn, cùng cuốn sổ. Dòng thời gian: 30 NGÀY ĐẾM NGƯỢC (còn 30 quán đóng cửa → 29 Dũng khoe → 26 nhóm Zalo → 20 tách tiền → 14 Thảo/quỹ → 9 bác Bình/số năm + ký quỹ → 5 quy tắc + nhóm phím hàng → 3 “Khoan đã!” cuộc gọi lạ → 2 dấu hiệu dừng + lộ trình → ngày đáo hạn). Nhân vật theo w145/_series/first-time-stock-investors-35.md: chị Hoa (= chị Lan p8), Dũng (F0 hóng tin p6, vay ký quỹ p15), Thảo (quỹ p11, quy tắc p16), Bác Bình (p15), Dũng ở kết (khép vòng); Bé Bin, bà Tư chỉ được nhắc tên. Số chỉ từ bài: 11.821.745 tài khoản, ~2,6 triệu năm 2025, mục tiêu 11 triệu cho 2030, VN-Index +40,87%, ~1 trong 3 năm lỗ, tới 6 tháng thu nhập, mệnh giá 10 nghìn đồng, Luật Chứng khoán 2019. Ngắt nhịp: BRK-04 s06 (hiểu lầm p3), BRK-07 s09 (rehook), BRK-03 s11 (6 tháng p7), DLG-01 s18 (p18). Tục ngữ: “Ăn chắc mặc bền” (mở + khép vòng). Lưu ý chung (#133) ở cảnh tóm tắt; không khuyến nghị mua bán cụ thể. Câu đố questions[22].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
