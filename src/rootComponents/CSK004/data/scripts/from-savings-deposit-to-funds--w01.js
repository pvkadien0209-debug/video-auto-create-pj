// from-savings-deposit-to-funds--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "from-savings-deposit-to-funds--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "first-time-stock-investors-35",
    "slug": "from-savings-deposit-to-funds",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Sổ tiết kiệm đáo hạn: chuyển một phần sang chứng chỉ quỹ thế nào cho yên tâm?",
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
          }
        ],
        "items": [
          {
            "id": "a-ans",
            "t": "text",
            "text": "Chuyển MỘT PHẦN",
            "x": 60,
            "y": 110,
            "size": 96,
            "at": "l1:part",
            "color": "accent",
            "hl": [
              {
                "text": "MỘT PHẦN",
                "at": "l1:part"
              }
            ]
          },
          {
            "id": "a-keep",
            "t": "text",
            "text": "giữ lại phần an toàn",
            "x": 70,
            "y": 250,
            "size": 56,
            "at": "l1:safe"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "3 chỗ hay sai:",
            "x": 70,
            "y": 360,
            "size": 50,
            "at": "l2:three",
            "color": "coral",
            "hl": [
              {
                "text": "3 chỗ",
                "at": "l2:three"
              }
            ]
          },
          {
            "id": "a-m1",
            "t": "text",
            "text": "① quỹ = sổ lãi cao?",
            "x": 100,
            "y": 430,
            "size": 42,
            "at": "l3:savings book"
          },
          {
            "id": "a-m2",
            "t": "text",
            "text": "② vài mã = đa dạng?",
            "x": 100,
            "y": 490,
            "size": 42,
            "at": "l3:names"
          },
          {
            "id": "a-m3",
            "t": "text",
            "text": "③ tin lời gọi lạ?",
            "x": 100,
            "y": 550,
            "size": 42,
            "at": "l3:call"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your savings book matures. The safe answer: move only a part into funds, and keep the safe part.",
          "sub": "Sổ tiết kiệm đáo hạn. Đáp án an toàn: chỉ chuyển một phần sang quỹ, giữ lại phần an toàn.",
          "keys": [
            "chỉ chuyển một phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. But there are three places people slip.",
          "sub": "Nghe đơn giản. Nhưng có ba chỗ người ta hay trượt chân.",
          "keys": [
            "ba chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A fund as a better savings book. A few names as variety. And a stranger's call.",
          "sub": "Tưởng quỹ là sổ lãi cao. Tưởng vài mã quen là đa dạng. Và tin một cuộc gọi lạ."
        }
      ],
      "ref": "intro,p8,p16"
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
              "set": "shop",
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
                "bank"
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
            "at": "l1",
            "caption": "Tuần 1 · quầy ngân hàng",
            "icon": "bank"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 900,
            "y": 650,
            "size": 56,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l4:careful"
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
          "say": "Meet chị Hoa, rice shop owner, at the bank counter with a matured book.",
          "sub": "Đây là chị Hoa, chủ quán cơm, đang ở quầy ngân hàng với cuốn sổ vừa đáo hạn.",
          "keys": [
            "sổ vừa đáo hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "The bank says renew. My friends say buy fund certificates. My heart says... both?",
          "sub": "Ngân hàng mời gửi tiếp. Bạn bè rủ mua chứng chỉ quỹ. Lòng chị thì... cả hai?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her plan from last time: part three only, the retirement money.",
          "sub": "Kế hoạch từ bài trước: chỉ phần ba, tiền cho tuổi hưu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And her new motto: being careful never leaves regrets.",
          "sub": "Và câu ruột mới của chị: “Cẩn tắc vô áy náy.”",
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
            "text": "Sang quỹ thế nào cho yên tâm?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:peace",
            "hl": [
              {
                "text": "yên tâm",
                "at": "l1:peace"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Đổi sang sổ lãi cao hơn",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:higher",
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
            "text": "Đổi an toàn lấy cơ hội",
            "x": 2768,
            "y": 170,
            "size": 54,
            "at": "l2:trading",
            "color": "accent",
            "hl": [
              {
                "text": "lấy cơ hội",
                "at": "l2:chance"
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
          "say": "So how do you move part of a savings book into funds, with peace of mind?",
          "sub": "Vậy chuyển một phần sổ tiết kiệm sang quỹ thế nào cho yên tâm?",
          "keys": [
            "cho yên tâm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not swapping for a savings book with higher interest. But trading some safety for a chance to grow.",
          "sub": "Không phải đổi sang một sổ lãi cao hơn. Mà là đổi một phần an toàn lấy cơ hội sinh lời.",
          "keys": [
            "đổi một phần an toàn"
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
            "id": "b-6",
            "t": "text",
            "text": "6 tuần, 6 câu hỏi",
            "x": 2028,
            "y": 440,
            "size": 60,
            "at": "l1:Six",
            "hl": [
              {
                "text": "6 câu hỏi",
                "at": "l1:questions"
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
            "at": "l1:trading",
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
            "at": "l1:fund",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 560,
            "w": 250,
            "h": 100,
            "at": "l1:single",
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
            "at": "l2:fees",
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
            "at": "l2:safe",
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
            "at": "l2:seller",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Đổi gì?",
            "x": 2048,
            "y": 578,
            "size": 40,
            "at": "l1:trading+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Quỹ là gì?",
            "x": 2323,
            "y": 578,
            "size": 40,
            "at": "l1:fund+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Khác mã lẻ",
            "x": 2598,
            "y": 578,
            "size": 40,
            "at": "l1:single+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Phí, rủi ro",
            "x": 2873,
            "y": 578,
            "size": 40,
            "at": "l2:fees+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Giữ an toàn",
            "x": 3148,
            "y": 578,
            "size": 40,
            "at": "l2:safe+200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Kiểm nơi bán",
            "x": 3423,
            "y": 578,
            "size": 40,
            "at": "l2:seller+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six weeks, six questions: what am I trading, what is a fund, how is it unlike single stocks?",
          "sub": "Sáu tuần, sáu câu hỏi: mình đang đổi gì, quỹ là gì, khác cổ phiếu lẻ ra sao?",
          "keys": [
            "sáu câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then fees and risks, keeping the safe part, and checking the seller.",
          "sub": "Rồi phí và rủi ro, giữ phần an toàn, và kiểm tra nơi bán."
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
            "text": "Tuần 1 · Mình đang đổi gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "đổi gì",
                "at": "l1:trading"
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
                "ledger",
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
            "caption": "Tuần 1 · trưa ở quán",
            "icon": "chart-increasing"
          },
          {
            "id": "c-a0",
            "t": "text",
            "text": "Tiền gửi, tương đương tiền",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l3:safest",
            "color": "accent"
          },
          {
            "id": "c-b0",
            "t": "text",
            "text": "an toàn nhất, lãi thấp nhất",
            "x": 4026,
            "y": 220,
            "size": 32,
            "at": "l3:safest+300",
            "color": "muted"
          },
          {
            "id": "c-a1",
            "t": "text",
            "text": "Trái phiếu",
            "x": 3996,
            "y": 290,
            "size": 44,
            "at": "l4:Bonds",
            "color": "ink"
          },
          {
            "id": "c-b1",
            "t": "text",
            "text": "ít biến động hơn, lãi vừa",
            "x": 4026,
            "y": 350,
            "size": 32,
            "at": "l4:Bonds+300",
            "color": "muted"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "Cổ phiếu",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l4:Stocks",
            "color": "ink"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "lãi cao nhất, biến động mạnh",
            "x": 4026,
            "y": 480,
            "size": 32,
            "at": "l4:Stocks+300",
            "color": "muted"
          },
          {
            "id": "c-inf",
            "t": "text",
            "text": "Rủi ro chính: lạm phát",
            "x": 3996,
            "y": 560,
            "size": 42,
            "at": "l3:inflation",
            "color": "coral",
            "hl": [
              {
                "text": "lạm phát",
                "at": "l3:inflation"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: SEC, hướng dẫn phân bổ tài sản",
            "x": 3996,
            "y": 640,
            "size": 28,
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
          "say": "Week one: what am I really trading? Dũng, chị Hoa's cousin, has an opinion, as always.",
          "sub": "Tuần một: thật ra mình đang đổi gì? Dũng, em họ chị Hoa, như mọi khi, có ý kiến.",
          "keys": [
            "đang đổi gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Chị, a fund is just a savings book with better interest!",
          "sub": "Chị ơi, quỹ chỉ là sổ tiết kiệm lãi cao hơn thôi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC sorts deposits as cash equivalents: safest, lowest return, and inflation is the main risk.",
          "sub": "SEC xếp tiền gửi vào nhóm tương đương tiền: an toàn nhất, lãi thấp nhất, rủi ro chính là lạm phát.",
          "keys": [
            "an toàn nhất, lãi thấp nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bonds swing less than stocks, with modest returns. Stocks have the highest historical returns, and big swings.",
          "sub": "Trái phiếu ít biến động hơn cổ phiếu, lãi khiêm tốn hơn. Cổ phiếu có lãi lịch sử cao nhất, nhưng biến động mạnh."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm số ①",
        "wrong": "Quỹ là sổ tiết kiệm có lãi cao hơn",
        "right": "Quỹ có rủi ro, có thể mất một phần hoặc toàn bộ",
        "wrongIllus": "ledger",
        "rightIllus": "chart-decreasing"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A fund is a better savings book?",
          "sub": "Quỹ là sổ tiết kiệm lãi cao hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. It has risk. You can lose some or all.",
          "sub": "Không. Quỹ có rủi ro, có thể mất một phần hoặc toàn bộ.",
          "keys": [
            "có thể mất"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p2"
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
            "id": "c-ins",
            "t": "text",
            "text": "Mỹ: không bảo hiểm như tiền gửi",
            "x": 4836,
            "y": 690,
            "size": 36,
            "at": "l1:insured",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In the US, the SEC adds, securities usually aren't insured like bank deposits.",
          "sub": "SEC thêm: ở Mỹ, khoản đầu tư chứng khoán thường không được bảo hiểm như tiền gửi ngân hàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So moving to a fund means swapping some safety for a chance to grow.",
          "sub": "Vậy chuyển sang quỹ là đổi một phần an toàn lấy cơ hội sinh lời.",
          "keys": [
            "cơ hội sinh lời"
          ]
        }
      ],
      "ref": "p2"
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
            "text": "Tuần 2 · Chứng chỉ quỹ là gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "Chứng chỉ quỹ",
                "at": "l1:certificate"
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
                "page-facing-up",
                "basket"
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
            "at": "l1:Thảo",
            "caption": "Tuần 2 · tối, nhà chị Hoa",
            "icon": "page-facing-up"
          },
          {
            "id": "d-def",
            "t": "text",
            "text": "Giấy xác nhận sở hữu",
            "x": 5964,
            "y": 160,
            "size": 48,
            "at": "l3:confirms",
            "hl": [
              {
                "text": "sở hữu",
                "at": "l3:ownership"
              }
            ]
          },
          {
            "id": "d-def2",
            "t": "text",
            "text": "một phần vốn góp của quỹ",
            "x": 5964,
            "y": 235,
            "size": 40,
            "at": "l3:capital",
            "color": "muted"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Quỹ đại chúng · mở · đóng · ETF",
            "x": 5964,
            "y": 320,
            "size": 40,
            "at": "l4:types"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, 09/4/2024",
            "x": 5964,
            "y": 400,
            "size": 28,
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
          "say": "Week two: what is a fund certificate? Meet Thảo, chị Hoa's school friend and a calm monthly fund buyer.",
          "sub": "Tuần hai: chứng chỉ quỹ là gì? Còn đây là Thảo, bạn cấp ba của chị Hoa, mua quỹ đều mỗi tháng.",
          "keys": [
            "chứng chỉ quỹ là gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, it's not a bank book. It's a piece of a big shared basket.",
          "sub": "Thứ nhất, nó không phải sổ ngân hàng. Nó là một phần của cái giỏ chung rất to.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Legally, it's a security that confirms your ownership of part of a fund's capital.",
          "sub": "Về luật, đó là chứng khoán xác nhận quyền sở hữu của bạn với một phần vốn góp của quỹ.",
          "keys": [
            "quyền sở hữu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fund types include public funds, open funds, closed funds and exchange-traded funds.",
          "sub": "Các loại quỹ gồm quỹ đại chúng, quỹ mở, quỹ đóng và quỹ hoán đổi danh mục."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 2000
        }
      ],
      "ref": "p3"
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
            "id": "d-open",
            "t": "text",
            "text": "Quỹ mở: mua lại khi yêu cầu",
            "x": 5964,
            "y": 480,
            "size": 40,
            "at": "l1:open",
            "color": "accent"
          },
          {
            "id": "d-closed",
            "t": "text",
            "text": "Quỹ đóng: không",
            "x": 5964,
            "y": 540,
            "size": 40,
            "at": "l1:closed",
            "color": "muted"
          },
          {
            "id": "d-bank",
            "t": "text",
            "text": "Có ngân hàng giám sát",
            "x": 5964,
            "y": 610,
            "size": 40,
            "at": "l2:supervising"
          },
          {
            "id": "d-list",
            "t": "text",
            "text": "Phải niêm yết, trừ quỹ mở",
            "x": 6804,
            "y": 690,
            "size": 36,
            "at": "l3:listed",
            "color": "muted"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Mở hay đóng = cách lấy tiền ra",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l4:money out",
            "color": "coral",
            "hl": [
              {
                "text": "lấy tiền ra",
                "at": "l4:money out"
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
          "say": "Did you know? An open fund must buy back certificates when you ask. A closed fund doesn't.",
          "sub": "Bạn có biết: quỹ mở phải mua lại chứng chỉ quỹ khi nhà đầu tư yêu cầu, quỹ đóng thì không.",
          "keys": [
            "quỹ mở"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A first public offering also needs a supervising bank.",
          "sub": "Lần chào bán đầu ra công chúng còn phải có ngân hàng giám sát."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the certificates get listed after the offering, except for open funds.",
          "sub": "Và chứng chỉ quỹ phải niêm yết sau đợt chào bán, trừ quỹ mở."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So asking open or closed is really asking how you get your money out.",
          "sub": "Vậy hỏi quỹ mở hay đóng là hỏi trước cách lấy tiền ra.",
          "keys": [
            "cách lấy tiền ra"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 50,
        "suffix": " tỷ đồng",
        "label": "giá trị chào bán tối thiểu, quỹ ra công chúng lần đầu",
        "illus": "bank"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "How big must a new public fund be?",
          "sub": "Quỹ mới ra công chúng phải lớn cỡ nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At least fifty billion dong at the first offering.",
          "sub": "Tối thiểu năm mươi tỷ đồng khi chào bán lần đầu.",
          "keys": [
            "năm mươi tỷ đồng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p4"
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
            "text": "Tuần 3 · Khác cổ phiếu lẻ?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "cổ phiếu lẻ",
                "at": "l1:single"
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
              "set": "office",
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
                "office-building"
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
            "at": "l2",
            "caption": "Tuần 3 · văn phòng của Dũng",
            "icon": "office-building"
          },
          {
            "id": "e-pool",
            "t": "text",
            "text": "Quỹ gom tiền nhiều người",
            "x": 7932,
            "y": 160,
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
            "id": "e-idx",
            "t": "text",
            "text": "Quỹ chỉ số: hàng nghìn công ty",
            "x": 7932,
            "y": 240,
            "size": 42,
            "at": "l4:thousands",
            "color": "accent",
            "hl": [
              {
                "text": "hàng nghìn",
                "at": "l4:thousands"
              }
            ]
          },
          {
            "id": "e-12",
            "t": "text",
            "text": "Mã lẻ: ~1 tá, nhiều ngành",
            "x": 7932,
            "y": 330,
            "size": 40,
            "at": "l5:dozen",
            "hl": [
              {
                "text": "1 tá",
                "at": "l5:dozen"
              }
            ]
          },
          {
            "id": "e-45",
            "t": "text",
            "text": "4–5 mã: chưa đủ",
            "x": 7932,
            "y": 405,
            "size": 44,
            "at": "l5:four",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week three: how is a fund unlike single stocks? Over at Dũng's office...",
          "sub": "Tuần ba: quỹ khác cổ phiếu lẻ ở đâu? Ghé văn phòng của Dũng..."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My portfolio? Four famous names, plus my own company's shares. Very diversified!",
          "sub": "Danh mục của em á? Bốn mã nổi tiếng, cộng cổ phiếu công ty em. Đa dạng lắm!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC says a fund pools many investors' money, so each owns a small piece of many investments.",
          "sub": "SEC nói quỹ gom tiền của nhiều người, nên mỗi người sở hữu một phần nhỏ của nhiều khoản đầu tư.",
          "keys": [
            "gom tiền của nhiều người"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A total stock market index fund can hold shares in thousands of companies.",
          "sub": "Một quỹ chỉ số theo toàn thị trường có thể nắm cổ phiếu của hàng nghìn công ty.",
          "keys": [
            "hàng nghìn công ty"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "With single stocks, four or five isn't enough. You need at least about a dozen, across industries.",
          "sub": "Với cổ phiếu lẻ, bốn, năm mã là chưa đủ. Cần ít nhất khoảng một tá, ở nhiều ngành.",
          "keys": [
            "khoảng một tá"
          ]
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "e-emp",
            "t": "text",
            "text": "Dồn vào cổ phiếu công ty mình?",
            "x": 7932,
            "y": 510,
            "size": 42,
            "at": "l1:employer",
            "color": "muted"
          },
          {
            "id": "e-lose",
            "t": "text",
            "text": "→ mất tiền, tệ nhất mất việc",
            "x": 7932,
            "y": 590,
            "size": 40,
            "at": "l2:job",
            "color": "coral",
            "hl": [
              {
                "text": "mất việc",
                "at": "l2:job"
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
          "say": "And too much in one stock, even your employer's? The SEC warns against it.",
          "sub": "Còn dồn quá nhiều vào một mã, kể cả cổ phiếu công ty mình? SEC cảnh báo điều này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You could lose a lot of money, and at worst, your job too.",
          "sub": "Bạn có thể mất nhiều tiền, tệ nhất là mất cả việc.",
          "keys": [
            "mất cả việc"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Tuần 3 · tối ở quán",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mua vài mã quen tên là đã chia trứng nhiều giỏ",
          "why": "Theo SEC, bốn, năm mã là chưa đủ; cần nhiều công ty ở nhiều ngành.",
          "rule": "Đa dạng = nhiều công ty, nhiều ngành"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Chị, just copy me. Three or four famous names, eggs in many baskets!",
          "sub": "Chị cứ làm như em. Ba bốn mã quen tên, chia trứng ra nhiều giỏ rồi!",
          "face": "happy",
          "pose": "thumb",
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
          "say": "Four eggs in the same basket aren't four baskets.",
          "sub": "Bốn quả trứng trong cùng một giỏ đâu phải bốn giỏ.",
          "keys": [
            "cùng một giỏ"
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
          "say": "No time to pick and watch each stock. A fund holds many at once.",
          "sub": "Chị không có thời gian chọn và theo từng mã. Quỹ nắm nhiều khoản cùng lúc.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Diversity means many companies in many industries, not a few familiar names.",
          "sub": "Đúng. Đa dạng là nhiều công ty ở nhiều ngành, không phải vài mã quen tên.",
          "phase": "redo",
          "keys": [
            "nhiều công ty ở nhiều ngành"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p9"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "Tuần 4 · Phí và rủi ro",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "Phí",
                "at": "l1:fees"
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
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "receipt",
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Bác Bình",
            "caption": "Tuần 4 · sáng sớm, công viên",
            "icon": "receipt"
          },
          {
            "id": "f-narrow",
            "t": "text",
            "text": "Quỹ một ngành hẹp: chưa đủ",
            "x": 60,
            "y": 1250,
            "size": 42,
            "at": "l3:narrow",
            "color": "coral"
          },
          {
            "id": "f-more",
            "t": "text",
            "text": "Thêm quỹ → thêm phí",
            "x": 60,
            "y": 1330,
            "size": 50,
            "at": "l4:fees",
            "hl": [
              {
                "text": "thêm phí",
                "at": "l4:fees"
              }
            ]
          },
          {
            "id": "f-less",
            "t": "text",
            "text": "→ lợi nhuận giảm",
            "x": 100,
            "y": 1410,
            "size": 44,
            "at": "l4:returns",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Nhiều quỹ ≠ an toàn hơn",
            "x": 60,
            "y": 1500,
            "size": 50,
            "at": "l5:safer",
            "color": "accent",
            "hl": [
              {
                "text": "≠ an toàn hơn",
                "at": "l5:safer"
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
          "say": "Week four: fees and risks. Meet Bác Bình, the retired neighbour who has held funds for years.",
          "sub": "Tuần bốn: phí và rủi ro. Còn đây là bác Bình, hàng xóm đã nghỉ hưu, giữ quỹ nhiều năm.",
          "keys": [
            "phí và rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Every fund has a price tag. Read it before you buy.",
          "sub": "Từ từ, mình xem lại đã. Quỹ nào cũng có giá. Đọc kỹ rồi hẵng mua.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The SEC notes a fund focused on one narrow industry may not be diversified enough.",
          "sub": "SEC lưu ý quỹ tập trung vào một ngành hẹp có thể chưa đủ đa dạng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Adding more funds adds more fees and costs, which lowers your returns.",
          "sub": "Thêm quỹ là thêm phí và chi phí, làm giảm lợi nhuận.",
          "keys": [
            "thêm phí"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So a pile of funds isn't automatically safer.",
          "sub": "Vậy mua thật nhiều quỹ không có nghĩa là an toàn hơn.",
          "keys": [
            "không có nghĩa là an toàn hơn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 2000
        }
      ],
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
          }
        ],
        "items": [
          {
            "id": "f-q",
            "t": "text",
            "text": "3 câu hỏi trước khi mua:",
            "x": 60,
            "y": 1580,
            "size": 44,
            "at": "l2:questions",
            "hl": [
              {
                "text": "3 câu hỏi",
                "at": "l2:three"
              }
            ]
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1650,
            "w": 44,
            "h": 44,
            "at": "l2:where",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1636,
            "size": 50,
            "at": "l2:where+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Quỹ đầu tư vào đâu?",
            "x": 126,
            "y": 1640,
            "size": 36,
            "at": "l2:where+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1714,
            "w": 44,
            "h": 44,
            "at": "l2:open",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1700,
            "size": 50,
            "at": "l2:open+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Quỹ mở hay quỹ đóng?",
            "x": 126,
            "y": 1704,
            "size": 36,
            "at": "l2:open+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1778,
            "w": 44,
            "h": 44,
            "at": "l3:fees",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1764,
            "size": 50,
            "at": "l3:fees+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Phí khi mua, giữ, bán?",
            "x": 126,
            "y": 1768,
            "size": 36,
            "at": "l3:fees+200"
          },
          {
            "id": "f-ver",
            "t": "text",
            "text": "Kiểm với nguồn khách quan",
            "x": 900,
            "y": 1780,
            "size": 40,
            "at": "l4:check",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A fund is still a risky investment. Its value can fall.",
          "sub": "Quỹ vẫn là khoản đầu tư có rủi ro, giá trị có thể giảm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So ask three questions: where does it invest? Is it open or closed?",
          "sub": "Nên hỏi ba câu: quỹ đầu tư vào đâu? Là quỹ mở hay quỹ đóng?",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And what fees apply when you buy, hold and sell?",
          "sub": "Và có những phí nào khi mua, khi giữ, khi bán?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then check the answers with objective sources, and with family or friends you trust.",
          "sub": "Rồi kiểm câu trả lời với nguồn khách quan, và bàn với người thân, bạn bè đáng tin.",
          "keys": [
            "nguồn khách quan"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Hỏi đủ ba câu rồi. Rút cả phần ba ra mua một lần?",
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
          "say": "Three questions answered. So pull out all of part three and buy at once?",
          "sub": "Hỏi đủ ba câu rồi. Vậy rút hết phần ba ra mua một lần?",
          "keys": [
            "mua một lần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "text": "Tuần 5 · Giữ phần an toàn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "phần an toàn",
                "at": "l1:safe"
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
                "spiral-calendar",
                "coin"
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
            "caption": "Tuần 5 · tờ giấy cạnh lịch",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-mix",
            "t": "text",
            "text": "Cổ phiếu + trái phiếu + tiền mặt",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l2:combining"
          },
          {
            "id": "g-why",
            "t": "text",
            "text": "không cùng lên xuống một lúc",
            "x": 2028,
            "y": 1315,
            "size": 38,
            "at": "l2:together",
            "color": "muted"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Dự phòng: gửi kỳ hạn ngắn",
            "x": 2028,
            "y": 1400,
            "size": 42,
            "at": "l3:emergency"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Phần xa: chia nhỏ, quỹ mở",
            "x": 2028,
            "y": 1470,
            "size": 42,
            "at": "l4:split",
            "color": "accent",
            "hl": [
              {
                "text": "chia nhỏ",
                "at": "l4:split"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "mỗi tháng một lần",
            "x": 2068,
            "y": 1535,
            "size": 38,
            "at": "l4:month",
            "color": "muted"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Trước mỗi lần: đọc lại phí",
            "x": 2028,
            "y": 1610,
            "size": 42,
            "at": "l5:fees"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week five: keep the safe part, move only a part.",
          "sub": "Tuần năm: giữ phần an toàn, chỉ chuyển một phần.",
          "keys": [
            "chỉ chuyển một phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The SEC suggests combining stocks, bonds and cash, because they rarely move together.",
          "sub": "SEC khuyên kết hợp cổ phiếu, trái phiếu, tiền mặt, vì chúng thường không cùng lên xuống một lúc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "My emergency money stays in a short-term deposit.",
          "sub": "Tiền dự phòng chị vẫn gửi kỳ hạn ngắn.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "The far-goal money, I split it, and buy an open fund each month.",
          "sub": "Phần cho mục tiêu xa, chị chia nhỏ, mua chứng chỉ quỹ mở theo từng tháng.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Before each buy, she rereads where the fund invests, and the fees she asked about.",
          "sub": "Trước mỗi lần mua, chị đọc lại quỹ đầu tư vào đâu và các mức phí đã hỏi.",
          "keys": [
            "đọc lại"
          ]
        }
      ],
      "ref": "p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "g-life",
            "t": "text",
            "text": "Quỹ vòng đời: gần đích, thận trọng",
            "x": 2028,
            "y": 1700,
            "size": 34,
            "at": "l1:lifecycle",
            "hl": [
              {
                "text": "Quỹ vòng đời",
                "at": "l1:lifecycle"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Một phần · vào dần · giữ an toàn",
            "x": 2028,
            "y": 1780,
            "size": 44,
            "at": "l2:part",
            "color": "accent",
            "hl": [
              {
                "text": "vào dần",
                "at": "l2:gradually"
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
          "say": "There are even lifecycle funds, which turn more cautious as the target year nears.",
          "sub": "Còn có quỹ vòng đời, tự chuyển sang danh mục thận trọng hơn khi gần tới năm mục tiêu.",
          "keys": [
            "quỹ vòng đời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A part, gradually, with the safe part kept. Easier sleep when markets swing.",
          "sub": "Một phần, vào dần, giữ phần an toàn: ngủ yên hơn khi thị trường lên xuống.",
          "keys": [
            "ngủ yên hơn"
          ]
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s18",
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
            "text": "Tuần 6 · Kiểm nơi bán",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "Kiểm nơi bán",
                "at": "l1:check"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "telephone-receiver",
                "warning"
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
            "at": "l1:call",
            "caption": "Tuần 6 · cuộc gọi lúc quán đông",
            "icon": "telephone-receiver"
          },
          {
            "id": "h-c1",
            "t": "text",
            "text": "“Quỹ lãi cao hơn hẳn”",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:more",
            "color": "coral"
          },
          {
            "id": "h-c2",
            "t": "text",
            "text": "“Chuyển vào tài khoản em”",
            "x": 3996,
            "y": 1330,
            "size": 46,
            "at": "l2:personal",
            "color": "coral",
            "hl": [
              {
                "text": "tài khoản em",
                "at": "l2:personal"
              }
            ]
          },
          {
            "id": "h-stop",
            "t": "text",
            "text": "Dừng lại",
            "x": 3996,
            "y": 1430,
            "size": 72,
            "at": "l3:Stop",
            "color": "accent",
            "hl": [
              {
                "text": "Dừng lại",
                "at": "l3:Stop"
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
          "say": "Week six: check the seller. And right on cue, a call.",
          "sub": "Tuần sáu: kiểm tra nơi bán. Và đúng lúc, có cuộc gọi.",
          "keys": [
            "kiểm tra nơi bán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "A fund paying far more than savings? Send the money to your personal account?",
          "sub": "Quỹ lãi cao hơn hẳn tiết kiệm? Chuyển tiền vào tài khoản riêng của em á?",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stop. That's the exact pattern the State Securities Commission warns about.",
          "sub": "Dừng lại. Đúng y kịch bản Ủy ban Chứng khoán Nhà nước đã cảnh báo.",
          "keys": [
            "Dừng lại"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s19",
      "module": "BRK-01",
      "data": {
        "illus": "telephone-receiver",
        "around": [
          "money-with-wings",
          "warning"
        ],
        "label": "Sai ở đây!",
        "note": "Nộp tiền vào tài khoản riêng của người tư vấn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Freeze. Right here.",
          "sub": "Dừng hình. Ngay đây."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Money into a consultant's personal account.",
          "sub": "Nộp tiền vào tài khoản riêng của người tư vấn.",
          "keys": [
            "tài khoản riêng"
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-s1",
            "t": "text",
            "text": "Tự nhận được cấp phép",
            "x": 3996,
            "y": 1540,
            "size": 42,
            "at": "l1:licensed"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "Gọi mời vào nhóm Facebook, Zalo",
            "x": 3996,
            "y": 1605,
            "size": 38,
            "at": "l2:Zalo"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "Cài ứng dụng giao dịch giả",
            "x": 3996,
            "y": 1665,
            "size": 38,
            "at": "l2:fake",
            "color": "coral"
          },
          {
            "id": "h-chk",
            "t": "text",
            "text": "Kiểm giấy phép trên trang UBCKNN",
            "x": 3996,
            "y": 1735,
            "size": 40,
            "at": "l3:licence",
            "color": "accent",
            "hl": [
              {
                "text": "giấy phép",
                "at": "l3:licence"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Tạp chí Luật sư Việt Nam 21/3/2025; Nhân Dân 04/5/2024",
            "x": 3996,
            "y": 1810,
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
          "say": "The Commission warns: some claim to be licensed, then ask you to pay into their own accounts.",
          "sub": "Ủy ban cảnh báo: có tổ chức tự nhận được cấp phép, rồi bảo nhà đầu tư nộp tiền vào tài khoản của chúng.",
          "keys": [
            "tự nhận được cấp phép"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fake staff invite you into Facebook or Zalo groups, and install fake trading apps.",
          "sub": "Kẻ giả danh nhân viên gọi mời vào nhóm Facebook, Zalo, hướng dẫn cài ứng dụng giao dịch giả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check the firm through several channels, like its licence on the Commission's website.",
          "sub": "Hãy kiểm tra qua nhiều kênh, như giấy phép hoạt động và thông tin trên trang của Ủy ban.",
          "keys": [
            "giấy phép hoạt động"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Police add: scammers feed on our wish for high returns. A promise never replaces a check.",
          "sub": "Bộ Công an thêm: kẻ gian khai thác tâm lý muốn lãi cao. Lời hứa không thay được bước kiểm tra.",
          "keys": [
            "không thay được bước kiểm tra"
          ]
        }
      ],
      "ref": "p15,p17"
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
            "text": "Đầu tháng · Lần mua đầu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:first",
            "hl": [
              {
                "text": "Lần mua đầu",
                "at": "l1:first"
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
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo",
                "laptop"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1",
            "caption": "Đầu tháng · bàn nước nhà chị Hoa",
            "icon": "memo"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:licence",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1246,
            "size": 56,
            "at": "l2:licence+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Giấy phép: đã kiểm",
            "x": 6030,
            "y": 1250,
            "size": 40,
            "at": "l2:licence+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1340,
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
            "y": 1326,
            "size": 56,
            "at": "l2:open+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Quỹ mở, đầu tư vào đâu",
            "x": 6030,
            "y": 1330,
            "size": 40,
            "at": "l2:open+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l2:fees",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1406,
            "size": 56,
            "at": "l2:fees+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Phí mua, giữ, bán",
            "x": 6030,
            "y": 1410,
            "size": 40,
            "at": "l2:fees+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l3:emergency",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1486,
            "size": 56,
            "at": "l3:emergency+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Dự phòng: còn nguyên",
            "x": 6030,
            "y": 1490,
            "size": 40,
            "at": "l3:emergency+200"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Một phần nhỏ, tháng này",
            "x": 5964,
            "y": 1610,
            "size": 50,
            "at": "l4:small",
            "color": "accent",
            "hl": [
              {
                "text": "phần nhỏ",
                "at": "l4:small"
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
          "say": "Early next month: chị Hoa's first fund purchase.",
          "sub": "Đầu tháng sau: lần mua quỹ đầu tiên của chị Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Licence checked. Open fund, I know where it invests. Fees for buying, holding, selling: written down.",
          "sub": "Giấy phép đã kiểm. Quỹ mở, biết đầu tư vào đâu. Phí mua, giữ, bán: ghi đủ.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And your emergency money?",
          "sub": "Còn tiền dự phòng?",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Untouched. Just a small part this month, then again next month.",
          "sub": "Còn nguyên. Tháng này chỉ một phần nhỏ, tháng sau mua tiếp.",
          "face": "happy"
        }
      ],
      "ref": "p13,outro"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Vẫn quầy ngân hàng ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:counter"
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
                  "pose": "phone"
                }
              ],
              "props": [
                "ledger",
                "bank"
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
            "caption": "Vẫn quầy ngân hàng ấy",
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
            "text": "Sổ mới: phần an toàn",
            "x": 8092,
            "y": 1270,
            "size": 50,
            "at": "l3:safe",
            "color": "muted"
          },
          {
            "id": "j-r",
            "t": "text",
            "text": "+ quỹ mở, mua dần",
            "x": 8092,
            "y": 1350,
            "size": 50,
            "at": "l3:fund",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1490,
            "size": 60,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l4:careful"
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
          "say": "Same bank counter, a new savings book in hand.",
          "sub": "Vẫn quầy ngân hàng ấy, tay cầm một cuốn sổ mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Chị, only a part? Why so slow?",
          "sub": "Chị ơi, chỉ một phần thôi à? Sao chậm thế?",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "The safe part stays in the book. The fund part grows slowly. I sleep fine.",
          "sub": "Phần an toàn nằm trong sổ. Phần quỹ lớn dần. Chị ngủ ngon.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Being careful never leaves regrets. Same answer as the start: a part, not all.",
          "sub": "“Cẩn tắc vô áy náy.” Đáp án vẫn như lúc đầu: một phần, không phải tất cả.",
          "keys": [
            "một phần, không phải tất cả"
          ]
        }
      ],
      "ref": "p14,outro"
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
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
            "x": 4696,
            "y": 570,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6684,
            "y": 700,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 600,
            "y": 1590,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4736,
            "y": 1740,
            "at": "l4+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo, không khuyến nghị mua bán quỹ cụ thể; quy định có thể đổi, cần thì hỏi chuyên gia. Nhân vật là minh hoạ.",
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
          "say": "So: a fund trades some safety for a chance to grow.",
          "sub": "Tóm lại: quỹ là đổi một phần an toàn lấy cơ hội sinh lời.",
          "keys": [
            "đổi một phần an toàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask: open or closed, where it invests.",
          "sub": "Hỏi: quỹ mở hay đóng, đầu tư vào đâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask about every fee. More funds, more fees.",
          "sub": "Hỏi đủ các loại phí. Thêm quỹ là thêm phí."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And check the licence before a single dong moves.",
          "sub": "Và kiểm giấy phép trước khi chuyển dù một đồng.",
          "keys": [
            "kiểm giấy phép"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This is general learning, not advice to buy any fund.",
          "sub": "Bài chỉ để học chung, không khuyên mua quỹ nào cụ thể."
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
        "q": "What is the takeaway about moving money from savings to funds?",
        "options": [
          "Move a part, go in gradually and keep a safe portion to sleep better",
          "Never move anything, because funds always lose money in the end",
          "Move everything at once so the money starts working without delay"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "nest-with-eggs",
        "why": "Chuyển một phần, vào dần và giữ phần an toàn để ngủ yên khi thị trường lên xuống."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the takeaway about moving money from savings to funds?",
          "sub": "Bài rút ra điều gì về việc chuyển tiền từ tiết kiệm sang quỹ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Move a part, go in gradually, keep the safe part.",
          "sub": "Chuyển một phần, vào dần, giữ phần an toàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "That's how chị Hoa sleeps fine.",
          "sub": "Nhờ vậy chị Hoa ngủ ngon."
        }
      ],
      "ref": "questions[33]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết ba câu hỏi trước khi mua quỹ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write three questions you'll ask before buying your first fund.",
          "sub": "Tối nay, viết ba câu bạn sẽ hỏi trước khi mua quỹ đầu tiên."
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
  "notes": "#145 bài MỚI (bài 2 chuỗi first-time-stock-investors-35) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-20 (đáp án trước): “chỉ chuyển MỘT PHẦN, giữ phần an toàn” + ba chỗ hay sai (quỹ = sổ lãi cao p2, vài mã = đa dạng p8, cuộc gọi lạ p16) → kết lặp lại đáp án. Dòng thời gian: SÁU TUẦN của chị Hoa từ quầy ngân hàng ngày đáo hạn (T1 đổi gì, Dũng → T2 chứng chỉ quỹ, Thảo → T3 khác mã lẻ + “Khoan đã!” Dũng → T4 phí, bác Bình → T5 giữ an toàn → T6 cuộc gọi lạ → đầu tháng: lần mua đầu → cùng quầy ngân hàng). Nhân vật theo w145/_series/first-time-stock-investors-35.md: chị Hoa (= chị Hương p13, p16), Dũng (hiểu lầm p2, p8; cổ phiếu công ty mình p7), Thảo (p3), Bác Bình (p10). Số chỉ từ bài: tối thiểu 50 tỷ đồng, khoảng một tá cổ phiếu, 4–5 mã chưa đủ, hàng nghìn công ty. Ngắt nhịp: BRK-04 s05 (hiểu lầm ①), BRK-03 s09 (50 tỷ p4), DLG-01 s12 (p8), BRK-07 s15 (rehook), BRK-01 s19 (dừng hình tài khoản riêng p16). Tục ngữ: “Cẩn tắc vô áy náy” (mở + khép vòng). Lưu ý chung (#133) ở cảnh tóm tắt; không nêu tên quỹ/mã. Câu đố questions[33].",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
