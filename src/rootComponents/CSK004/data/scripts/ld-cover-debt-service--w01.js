// ld-cover-debt-service--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ld-cover-debt-service--w01",
  "unit": {
    "audience": "epc-lender",
    "slug": "ld-cover-debt-service",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Phạt chậm và trần có đủ bù nghĩa vụ trả nợ khi chậm vận hành?",
    "series": "Hợp đồng EPC dưới mắt bên cho vay — cho ngân hàng và bên tài trợ, biết dự án có trả nợ được và giữ quyền can thiệp"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "anchor": {
    "type": "number",
    "value": "12% · 8%",
    "ref": "p9,p10"
  },
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
              "a-12",
              "a-8"
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
            "id": "a-12",
            "t": "text",
            "text": "12%",
            "x": 60,
            "y": 90,
            "size": 170,
            "at": "l1:Twelve",
            "color": "accent"
          },
          {
            "id": "a-8",
            "t": "text",
            "text": "8%",
            "x": 470,
            "y": 90,
            "size": 170,
            "at": "l2:Eight",
            "color": "coral"
          },
          {
            "id": "a-12l",
            "t": "text",
            "text": "Luật Xây dựng 2025 · đầu tư công, PPP",
            "x": 60,
            "y": 300,
            "size": 30,
            "at": "l3:construction",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "a-8l",
            "t": "text",
            "text": "Luật Thương mại 2005 · Điều 301",
            "x": 470,
            "y": 340,
            "size": 30,
            "at": "l3:commercial",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "EPC vốn tư nhân: ?",
            "x": 60,
            "y": 430,
            "size": 60,
            "at": "l4:privately",
            "hl": [
              {
                "text": "vốn tư nhân",
                "at": "l4:privately"
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
          "say": "Twelve percent.",
          "sub": "Mười hai phần trăm.",
          "keys": [
            "Mười hai phần trăm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight percent.",
          "sub": "Tám phần trăm.",
          "keys": [
            "Tám phần trăm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two penalty caps: the construction law's for public projects, and the commercial law's.",
          "sub": "Hai mức trần phạt: của Luật Xây dựng cho đầu tư công, PPP, và của Luật Thương mại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But one contract sits in between: a privately funded EPC.",
          "sub": "Nhưng có một loại hợp đồng nằm lửng ở giữa: EPC vốn tư nhân.",
          "keys": [
            "EPC vốn tư nhân"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 100
        }
      ],
      "ref": "p9,p10"
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
            "x": 900,
            "y": 90,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "chart-decreasing"
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
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Sáng thứ Hai · nhà máy lỡ mốc COD",
            "icon": "spiral-calendar"
          },
          {
            "id": "a-dung",
            "t": "text",
            "text": "“Gọi là bồi thường định trước",
            "x": 60,
            "y": 540,
            "size": 40,
            "at": "l4:liquidated",
            "color": "coral"
          },
          {
            "id": "a-dung2",
            "t": "text",
            "text": "là khỏi lo trần!”",
            "x": 60,
            "y": 600,
            "size": 40,
            "at": "l4:cap",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 900,
            "y": 612,
            "size": 48,
            "at": "l6:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l6:rice"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "đo phạt trước khi trông vào",
            "x": 900,
            "y": 685,
            "size": 40,
            "at": "l6:measure"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday morning. Our wind farm has missed its COD. Thảo, the bank's analyst, frowns.",
          "sub": "Sáng thứ Hai. Nhà máy điện gió đã lỡ mốc COD. Thảo, chuyên viên thẩm định của ngân hàng, nhíu mày.",
          "keys": [
            "lỡ mốc COD"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "No power money yet. But the repayment schedule keeps running.",
          "sub": "Tiền điện chưa về. Nhưng lịch trả nợ vẫn chạy.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, from the owner's side, has an answer for everything.",
          "sub": "Còn Dũng, bên Chủ đầu tư, chuyện gì cũng có câu trả lời."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Relax! We called it liquidated damages. No cap can touch it.",
          "sub": "Yên tâm! Mình gọi là bồi thường định trước rồi. Trần nào chạm tới được.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So how much does the delay penalty really cover?",
          "sub": "Vậy phạt chậm thực sự che được bao nhiêu?",
          "keys": [
            "thực sự che được bao nhiêu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grandparents say: measure the rice before picking the fish sauce. Measure the penalty before you lean on it.",
          "sub": "Ông bà dạy: “Liệu cơm gắp mắm.” Đo tiền phạt trước khi trông vào nó.",
          "keys": [
            "Liệu cơm gắp mắm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "intro,p11"
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
            "text": "Phạt chậm đủ bù trả nợ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:debt",
            "hl": [
              {
                "text": "bù trả nợ",
                "at": "l1:debt"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: có phạt là yên tâm",
            "x": 2028,
            "y": 150,
            "size": 48,
            "at": "l2:Not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:enough"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Mức phạt ngày",
            "x": 2028,
            "y": 240,
            "size": 52,
            "at": "l3:daily",
            "color": "accent"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Trần che bao nhiêu ngày",
            "x": 2028,
            "y": 310,
            "size": 52,
            "at": "l3:days",
            "color": "accent"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Chạm trần thì sao",
            "x": 2028,
            "y": 380,
            "size": 52,
            "at": "l3:cap",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The real question: can delay damages keep the debt paid while the plant is late?",
          "sub": "Câu hỏi thật: khi nhà máy chậm, tiền phạt chậm có đủ để vẫn trả được nợ?",
          "keys": [
            "vẫn trả được nợ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not: there's a penalty, so we're fine. Having one is not enough.",
          "sub": "Không phải: có điều phạt là yên tâm. Có thôi chưa đủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three things: the daily rate, how many days the cap covers, and what happens at the cap.",
          "sub": "Ba việc: mức phạt ngày, trần che được bao nhiêu ngày, và chạm trần thì sao.",
          "keys": [
            "Ba việc"
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
            "id": "b-m1",
            "t": "text",
            "text": "NT bảo đảm COD trước mốc",
            "x": 2868,
            "y": 150,
            "size": 36,
            "at": "l1:guarantees"
          },
          {
            "id": "b-m2",
            "t": "text",
            "text": "Chậm → phạt ngày, có bậc thang",
            "x": 2868,
            "y": 210,
            "size": 36,
            "at": "l1:per day"
          },
          {
            "id": "b-m3",
            "t": "text",
            "text": "Trừ thanh toán, rút bảo lãnh",
            "x": 2868,
            "y": 270,
            "size": 36,
            "at": "l2:deducted"
          },
          {
            "id": "b-m4",
            "t": "text",
            "text": "Không miễn hoàn thành; khỏi chứng minh",
            "x": 2868,
            "y": 330,
            "size": 36,
            "at": "l3:finishing"
          },
          {
            "id": "b-len",
            "t": "text",
            "text": "Với ngân hàng: tiền thay doanh thu",
            "x": 2868,
            "y": 410,
            "size": 40,
            "at": "l4:replaces",
            "color": "accent",
            "hl": [
              {
                "text": "thay doanh thu",
                "at": "l4:replaces"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần sau mốc COD, 6 chặng",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l5:six",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l5:six"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l5:six+400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l5:six+680",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l5:six+960",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l5:six+1240",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l5:six+1520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 240,
            "h": 90,
            "at": "l5:six+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Mức ngày",
            "x": 2048,
            "y": 580,
            "size": 38,
            "at": "l5:six+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Số ngày",
            "x": 2318,
            "y": 580,
            "size": 38,
            "at": "l5:six+800"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Trần luật",
            "x": 2588,
            "y": 580,
            "size": 38,
            "at": "l5:six+1080"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "DSU",
            "x": 2858,
            "y": 580,
            "size": 38,
            "at": "l5:six+1360"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Chạm trần",
            "x": 3128,
            "y": 580,
            "size": 38,
            "at": "l5:six+1640"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Câu chữ",
            "x": 3398,
            "y": 580,
            "size": 38,
            "at": "l5:six+1920"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "How it works: the contractor guarantees COD by a date. Late? It pays per day, sometimes in steps: low first, higher later.",
          "sub": "Cơ chế: Nhà thầu bảo đảm đạt COD trước một mốc. Chậm thì trả phạt theo ngày, có khi bậc thang: thấp trước, cao sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It's a debt due, deducted from payments or drawn from a guarantee.",
          "sub": "Khoản phạt là nợ đến hạn, trừ vào thanh toán hoặc rút từ bảo lãnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paying doesn't excuse the contractor from finishing, and the owner needn't prove its loss.",
          "sub": "Trả phạt không miễn nghĩa vụ hoàn thành; Chủ đầu tư không phải chứng minh thiệt hại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For the owner, it's compensation. For the lender, it replaces power revenue while the plant is late.",
          "sub": "Với Chủ đầu tư, đó là tiền bù thiệt hại. Với bên cho vay, đó là nguồn tiền thay doanh thu điện lúc chậm.",
          "keys": [
            "thay doanh thu điện"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One week after the missed date, six stops.",
          "sub": "Một tuần sau mốc COD bị lỡ, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Ba · Mức phạt ngày",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
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
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "abacus"
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
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · cô Hoa ghé bàn",
            "icon": "abacus"
          },
          {
            "id": "c-id",
            "t": "text",
            "text": "Lý tưởng: = chi phí mỗi ngày chậm",
            "x": 3996,
            "y": 150,
            "size": 38,
            "at": "l3:Ideally",
            "hl": [
              {
                "text": "chi phí mỗi ngày",
                "at": "l3:each day"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 240,
            "w": 44,
            "h": 44,
            "at": "l4:interest",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 222,
            "size": 56,
            "at": "l4:interest+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Lãi, nợ đến hạn",
            "x": 4066,
            "y": 232,
            "size": 38,
            "at": "l4:interest+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 312,
            "w": 44,
            "h": 44,
            "at": "l4:PPA",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 294,
            "size": 56,
            "at": "l4:PPA+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Khoản phải trả theo PPA",
            "x": 4066,
            "y": 304,
            "size": 38,
            "at": "l4:PPA+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 384,
            "w": 44,
            "h": 44,
            "at": "l4:fixed",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 366,
            "size": 56,
            "at": "l4:fixed+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Chi phí cố định khác",
            "x": 4066,
            "y": 376,
            "size": 38,
            "at": "l4:fixed+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 456,
            "w": 44,
            "h": 44,
            "at": "l4:revenue",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 438,
            "size": 56,
            "at": "l4:revenue+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Doanh thu điện mất",
            "x": 4066,
            "y": 448,
            "size": 38,
            "at": "l4:revenue+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 528,
            "w": 44,
            "h": 44,
            "at": "l5:tariff",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 510,
            "size": 56,
            "at": "l5:tariff+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Lỡ mốc giá, mốc pháp lý",
            "x": 4066,
            "y": 520,
            "size": 38,
            "at": "l5:tariff+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Tuesday. Ms Hoa, head of project finance, drops by.",
          "sub": "Chặng một, thứ Ba. Cô Hoa, trưởng phòng tài trợ dự án, ghé bàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Each day late costs us what, exactly?",
          "sub": "Mỗi ngày chậm, mình tốn chính xác những gì?",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One international law firm's checklist: ideally, the daily rate equals what each day of delay costs the owner.",
          "sub": "Theo bảng kiểm của một hãng luật quốc tế: lý tưởng là phạt mỗi ngày bằng chi phí Chủ đầu tư gánh mỗi ngày chậm.",
          "keys": [
            "chi phí Chủ đầu tư gánh mỗi ngày chậm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Interest and debt due, PPA delay payments, other fixed costs, and lost power revenue per day.",
          "sub": "Lãi và nợ đến hạn, khoản phải trả theo PPA, chi phí cố định khác, doanh thu điện mất theo ngày.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Plus the risk of missing a tariff or legal milestone.",
          "sub": "Cộng rủi ro lỡ mốc chính sách giá hoặc mốc pháp lý."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p3,p4"
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
            "at": "l2",
            "fit": [
              "c-gap"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-b2b",
            "t": "text",
            "text": "Back-to-back: bám PPA, HĐ vay",
            "x": 3996,
            "y": 615,
            "size": 38,
            "at": "l1:back-to-back"
          },
          {
            "id": "c-gap",
            "t": "text",
            "text": "Đo khoảng thiếu: ai che?",
            "x": 4836,
            "y": 690,
            "size": 36,
            "at": "l2:gap",
            "color": "coral",
            "hl": [
              {
                "text": "khoảng thiếu",
                "at": "l2:gap"
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
          "say": "The back-to-back rule says the same: track losses under the PPA and the loan.",
          "sub": "Nguyên tắc back-to-back cũng vậy: mức phạt bám thiệt hại theo PPA và hợp đồng vay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Contractors often cap performance damages at a share of the price. Same idea here: measure the gap.",
          "sub": "Nhà thầu thường giới hạn phạt hiệu suất ở một tỷ lệ giá hợp đồng. Phạt chậm cũng thế: đo khoảng thiếu.",
          "keys": [
            "đo khoảng thiếu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then ask who covers it: equity or insurance.",
          "sub": "Rồi hỏi ai che khoảng đó: vốn chủ sở hữu hay bảo hiểm.",
          "keys": [
            "vốn chủ sở hữu hay bảo hiểm"
          ]
        }
      ],
      "ref": "p3,p5"
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
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
            "text": "② Thứ Tư · Trần che mấy ngày?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
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
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "abacus",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "caption": "Thứ Tư · bàn của Thảo",
            "icon": "abacus"
          },
          {
            "id": "d-cap",
            "t": "text",
            "text": "Trần = [B]% giá hợp đồng",
            "x": 5964,
            "y": 150,
            "size": 44,
            "at": "l1:cap"
          },
          {
            "id": "d-af",
            "t": "text",
            "text": "Sau trần: 0 đồng mỗi ngày",
            "x": 5964,
            "y": 220,
            "size": 40,
            "at": "l2:After",
            "color": "coral"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "1) [B]% × [C] = trần bằng tiền",
            "x": 5964,
            "y": 310,
            "size": 40,
            "at": "l4:times"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "2) trần ÷ [A] = số ngày",
            "x": 5964,
            "y": 380,
            "size": 40,
            "at": "l4:divide",
            "hl": [
              {
                "text": "số ngày",
                "at": "l4:days"
              }
            ]
          },
          {
            "id": "d-s2b",
            "t": "text",
            "text": "bậc thang: cộng dần từng bậc",
            "x": 5964,
            "y": 440,
            "size": 28,
            "at": "l4:tiered",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "3) cạnh lịch trả nợ, PPA",
            "x": 5964,
            "y": 490,
            "size": 40,
            "at": "l5:repayment"
          },
          {
            "id": "d-s4",
            "t": "text",
            "text": "4) so với thời gian thay thầu",
            "x": 5964,
            "y": 560,
            "size": 40,
            "at": "l6:replace",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Wednesday. The cap is the most the contractor pays in total, often a percentage of the contract price.",
          "sub": "Chặng hai, thứ Tư. Trần là tổng phạt tối đa, thường viết bằng [ ]% giá hợp đồng.",
          "keys": [
            "tổng phạt tối đa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After the cap, each extra day of delay brings zero.",
          "sub": "Sau trần, mỗi ngày chậm thêm không còn đồng phạt nào.",
          "keys": [
            "không còn đồng phạt nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three numbers from the contract: daily rate A, cap B percent, contract price C.",
          "sub": "Ba con số trong hợp đồng: mức phạt ngày [A], trần [B]% giá hợp đồng, giá hợp đồng [C].",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "B percent times C gives the cap in money. Divide by A for the days covered. Tiered? Add step by step.",
          "sub": "[B]% nhân [C] ra trần bằng tiền. Chia cho [A] ra số ngày phạt còn chảy. Bậc thang thì cộng dần."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Then I put those days beside the repayment schedule and the PPA date.",
          "sub": "Rồi em đặt số ngày ấy cạnh lịch trả nợ và mốc PPA."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Last, estimate the time to replace the contractor and finish if you terminate.",
          "sub": "Cuối cùng, ước thời gian thay Nhà thầu và hoàn thành nếu phải chấm dứt."
        }
      ],
      "ref": "p6,p7"
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
            "at": "l2",
            "fit": [
              "d-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-take",
            "t": "text",
            "text": "Trần ÷ mức ngày = số ngày được che",
            "x": 5964,
            "y": 650,
            "size": 40,
            "at": "l2:divided",
            "color": "accent",
            "hl": [
              {
                "text": "số ngày được che",
                "at": "l2:covered"
              }
            ]
          },
          {
            "id": "d-rest",
            "t": "text",
            "text": "phần còn lại là của mình",
            "x": 6804,
            "y": 690,
            "size": 40,
            "at": "l2:yours",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fewer covered days than replacement time? That gap needs another source.",
          "sub": "Số ngày phạt ngắn hơn thời gian thay thầu? Khoảng chênh phải che bằng nguồn khác.",
          "keys": [
            "nguồn khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: cap divided by daily rate gives the days covered. The rest is yours.",
          "sub": "Rút ra: lấy trần chia mức ngày ra số ngày được che; phần còn lại là của mình.",
          "keys": [
            "phần còn lại là của mình"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s08",
      "module": "BRK-12",
      "data": {
        "word": "Số ngày được che",
        "sub": "Trần chia mức phạt ngày",
        "from": [
          700,
          640
        ],
        "others": [
          "[A]",
          "[B]%",
          "[C]"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Days covered.",
          "sub": "Số ngày được che."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The cap divided by the daily rate.",
          "sub": "Trần chia mức phạt ngày.",
          "keys": [
            "Trần chia mức phạt ngày"
          ]
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Năm · Trần luật",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "e-86",
            "t": "text",
            "text": "Luật XD 2025, Điều 86:",
            "x": 7932,
            "y": 150,
            "size": 44,
            "at": "l1:Article"
          },
          {
            "id": "e-86a",
            "t": "text",
            "text": "thiệt hại thực tế hoặc định trước",
            "x": 7932,
            "y": 215,
            "size": 40,
            "at": "l1:pre-agreed",
            "hl": [
              {
                "text": "định trước",
                "at": "l1:pre-agreed"
              }
            ]
          },
          {
            "id": "e-12",
            "t": "text",
            "text": "Trần 12%: chỉ đầu tư công, PPP",
            "x": 7932,
            "y": 290,
            "size": 40,
            "at": "l2:twelve",
            "hl": [
              {
                "text": "12%",
                "at": "l2:twelve"
              }
            ]
          },
          {
            "id": "e-pv",
            "t": "text",
            "text": "Tư nhân: Luật XD không đặt trần",
            "x": 7932,
            "y": 360,
            "size": 40,
            "at": "l2:private"
          },
          {
            "id": "e-301",
            "t": "text",
            "text": "Rủi ro: LTM Điều 301, trần 8%",
            "x": 8772,
            "y": 150,
            "size": 44,
            "at": "l3:three-oh-one",
            "color": "coral",
            "hl": [
              {
                "text": "8%",
                "at": "l3:eight"
              }
            ]
          },
          {
            "id": "e-cut",
            "t": "text",
            "text": "Có bản án cắt về 8%",
            "x": 8772,
            "y": 230,
            "size": 38,
            "at": "l4:cut"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Có bản án nhận mức cao hơn",
            "x": 8772,
            "y": 290,
            "size": 38,
            "at": "l4:higher"
          },
          {
            "id": "e-dr",
            "t": "text",
            "text": "Dự thảo bỏ trần: chưa thông qua",
            "x": 8772,
            "y": 370,
            "size": 40,
            "at": "l5:draft",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Quốc hội thảo luận 20/10/2026 — cần kiểm văn bản hiện hành",
            "x": 8772,
            "y": 430,
            "size": 28,
            "at": "l5:debated",
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
          "say": "Stop three, Thursday. Article eighty-six of the Construction Law twenty twenty-five allows actual or pre-agreed damages.",
          "sub": "Chặng ba, thứ Năm. Điều 86 Luật Xây dựng 2025 cho bồi thường theo thiệt hại thực tế hoặc mức định trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Its twelve percent cap covers only public investment and PPP. For private projects, no cap there.",
          "sub": "Trần phạt 12% chỉ cho dự án đầu tư công, PPP. Dự án vốn tư nhân: Luật Xây dựng không đặt trần.",
          "keys": [
            "không đặt trần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The risk is Article three-oh-one of the Commercial Law twenty oh five: eight percent of the breached part.",
          "sub": "Rủi ro nằm ở Điều 301 Luật Thương mại 2005: phạt không quá 8% giá trị phần nghĩa vụ bị vi phạm.",
          "keys": [
            "không quá 8%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Practice is split: some rulings cut construction penalties to eight percent, others accept higher.",
          "sub": "Thực tiễn chưa thống nhất: có bản án, phán quyết cắt về 8%, cũng có bản án chấp nhận mức cao hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A draft removing the cap was debated on October twentieth, twenty twenty-six, but not passed. Check current law.",
          "sub": "Dự thảo bỏ trần này được Quốc hội thảo luận ngày 20/10/2026 nhưng chưa thông qua; cần kiểm văn bản hiện hành.",
          "keys": [
            "chưa thông qua"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · bàn của Thảo",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gọi là “bồi thường định trước” thì khỏi lo trần",
          "why": "Có cách tiếp cận coi bồi thường định trước là một dạng phạt, vẫn có thể bị áp trần 8%.",
          "rule": "Đổi tên chưa đủ, phải giữ bảng tính căn cứ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Easy fix: rename it liquidated damages. Then no eight percent, guaranteed!",
          "sub": "Dễ ợt: đổi tên thành bồi thường định trước. Thế là thoát 8%, chắc chắn!",
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
          "say": "Some approaches treat liquidated damages as a kind of penalty, so the eight percent cap may still bite.",
          "sub": "Đã có cách tiếp cận coi bồi thường định trước là một dạng phạt vi phạm, khi đó vẫn có thể bị áp trần 8%.",
          "keys": [
            "một dạng phạt vi phạm"
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
          "say": "Okay: keep the calculation behind the number, revenue lost per day, interest.",
          "sub": "Rồi: giữ bảng tính căn cứ, doanh thu điện mất theo ngày, lãi vay.",
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
      "ref": "p11"
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
            "at": "l2",
            "fit": [
              "e-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-w",
            "t": "text",
            "text": "“bị phạt [ ] đồng mỗi ngày” → dễ bị coi là phạt",
            "x": 7932,
            "y": 470,
            "size": 30,
            "at": "l1:fined",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-86b",
            "t": "text",
            "text": "Một tác giả: Điều 86 = cách tính bồi thường",
            "x": 7932,
            "y": 520,
            "size": 30,
            "at": "l2:author",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-ex",
            "t": "text",
            "text": "+ phần vượt trần luật = bồi thường thỏa thuận trước",
            "x": 7932,
            "y": 570,
            "size": 30,
            "at": "l3:excess",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Đổi tên chưa đủ: giữ bảng tính",
            "x": 7932,
            "y": 650,
            "size": 48,
            "at": "l3:calculation",
            "color": "accent",
            "hl": [
              {
                "text": "giữ bảng tính",
                "at": "l3:calculation"
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
          "say": "Wording like 'fined so much per day' looks even more like a penalty.",
          "sub": "Câu chữ “bị phạt [ ] đồng mỗi ngày” càng dễ bị coi là phạt.",
          "keys": [
            "càng dễ bị coi là phạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One author reads Article eighty-six as a way to compute damages, but lawyers still judge each contract.",
          "sub": "Một tác giả cho rằng Điều 86 tạo căn cứ coi đây là cách tính bồi thường, nhưng luật sư vẫn phải đánh giá từng hợp đồng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So keep the calculation, and say any excess over the legal cap is pre-agreed damages. Renaming isn't enough.",
          "sub": "Vậy hãy lưu bảng tính căn cứ, ghi phần vượt mức tối đa theo luật là bồi thường thỏa thuận trước. Đổi tên chưa đủ.",
          "keys": [
            "Đổi tên chưa đủ"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Ngoài trần phạt, bảo hiểm có che phần thiếu?",
        "illus": "umbrella-with-rain-drops"
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
          "say": "Beyond the cap, can insurance cover the gap?",
          "sub": "Ngoài trần phạt, bảo hiểm có che được phần thiếu?",
          "keys": [
            "bảo hiểm"
          ]
        }
      ],
      "ref": "p13"
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
            "text": "④ Thứ Sáu · Bảo hiểm DSU",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:pays"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "shrug"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "construction-worker",
                "umbrella"
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
            "at": "l1:Friday",
            "caption": "Thứ Sáu · họp tiến độ",
            "icon": "construction-worker"
          },
          {
            "id": "f-dsu",
            "t": "text",
            "text": "DSU: bù doanh thu mất, lãi tăng",
            "x": 60,
            "y": 1240,
            "size": 40,
            "at": "l1:start-up",
            "hl": [
              {
                "text": "DSU",
                "at": "l1:DSU"
              }
            ]
          },
          {
            "id": "f-ext",
            "t": "text",
            "text": "mở rộng của BH công trình; không mua sau được",
            "x": 60,
            "y": 1300,
            "size": 28,
            "at": "l1:insured",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Thiếu nhân lực → DSU trả?",
            "x": 60,
            "y": 1390,
            "size": 46,
            "at": "l4:workers",
            "color": "coral"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Thường là không",
            "x": 60,
            "y": 1470,
            "size": 56,
            "at": "l5:Usually not",
            "color": "accent",
            "hl": [
              {
                "text": "không",
                "at": "l5:not"
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
          "say": "Stop four, Friday. Delay in start-up cover, DSU, pays lost revenue and extra interest after an insured accident.",
          "sub": "Chặng bốn, thứ Sáu. Bảo hiểm chậm khởi động, DSU, bù doanh thu mất và lãi tăng thêm khi chậm vì sự cố được bảo hiểm.",
          "keys": [
            "sự cố được bảo hiểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam, the contractor's commercial manager, explains the delay.",
          "sub": "Sam, đại diện thương mại của Nhà thầu, giải thích chuyện chậm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "No damage on site. We are simply short of workers.",
          "sub": "Công trường không hư hỏng gì. Chúng tôi chỉ thiếu nhân lực.",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Short of workers. Can we lean on DSU for the gap beyond the cap?",
          "sub": "Thiếu nhân lực. Mình trông vào DSU để bù phần ngoài trần được không?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Usually not. DSU pays only for delay caused by an insured risk under the works policy.",
          "sub": "Thường là không. DSU chỉ trả khi chậm do rủi ro được bảo hiểm của đơn bảo hiểm công trình gây ra.",
          "keys": [
            "Thường là không"
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
      "ref": "p13,p14"
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
            "at": "l2",
            "fit": [
              "f-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-exc",
            "t": "text",
            "text": "Loại trừ: phạt hợp đồng, lỗi thiết kế,",
            "x": 60,
            "y": 1555,
            "size": 28,
            "at": "l1:exclusions",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-exc2",
            "t": "text",
            "text": "mất khả năng thanh toán, phi vật chất",
            "x": 60,
            "y": 1595,
            "size": 28,
            "at": "l1:insolvency",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-co",
            "t": "text",
            "text": "Bên cho vay: được ghi đồng được bảo hiểm",
            "x": 60,
            "y": 1645,
            "size": 30,
            "at": "l1:co-insured",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "DSU: tai nạn · phạt: thầu chậm",
            "x": 60,
            "y": 1710,
            "size": 40,
            "at": "l2:accidents",
            "color": "accent",
            "hl": [
              {
                "text": "tai nạn",
                "at": "l2:accidents"
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
          "say": "One broker lists common exclusions: contract penalties, design faults, insolvency, non-physical causes. Lenders can be co-insured.",
          "sub": "Một hãng môi giới bảo hiểm liệt kê loại trừ: phạt hợp đồng, lỗi thiết kế, mất khả năng thanh toán, nguyên nhân phi vật chất. Bên cho vay có thể là đồng được bảo hiểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: DSU covers accidents. Delay damages cover a slow contractor.",
          "sub": "Rút ra: DSU che tai nạn, phạt chậm che Nhà thầu chậm.",
          "keys": [
            "DSU che tai nạn"
          ]
        }
      ],
      "ref": "p14,p15"
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
          },
          {
            "at": "l6",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Vài tuần sau · Chạm trần",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:later"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "stop-sign",
                "handshake"
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
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
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
            "caption": "Vài tuần sau · phòng họp",
            "icon": "stop-sign"
          },
          {
            "id": "g-opt",
            "t": "text",
            "text": "tự hoàn thành · giảm giá · buộc hoàn thành",
            "x": 2028,
            "y": 1240,
            "size": 28,
            "at": "l1:finish",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-opt2",
            "t": "text",
            "text": "từ chối công trình, đòi tiền · chấm dứt",
            "x": 2028,
            "y": 1280,
            "size": 28,
            "at": "l1:reject",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-fx",
            "t": "text",
            "text": "Mẫu quốc tế 2017: chạm trần → được chấm dứt",
            "x": 2028,
            "y": 1325,
            "size": 30,
            "at": "l2:international",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-fx2",
            "t": "text",
            "text": "trần không áp khi gian lận, cố ý, liều lĩnh",
            "x": 2028,
            "y": 1365,
            "size": 30,
            "at": "l2:fraud",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: chấm dứt ngay",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l3:terminate",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ thay thầu lâu, không còn phạt",
            "x": 2058,
            "y": 1480,
            "size": 36,
            "at": "l4:grow",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: phụ lục dời mốc",
            "x": 2028,
            "y": 1550,
            "size": 44,
            "at": "l5:amendment",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ cam kết mới, bảo lãnh thêm",
            "x": 2058,
            "y": 1610,
            "size": 36,
            "at": "l5:guarantee"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Được chấm dứt ≠ nên chấm dứt",
            "x": 2028,
            "y": 1690,
            "size": 48,
            "at": "l7:allowed",
            "color": "accent",
            "hl": [
              {
                "text": "≠ nên chấm dứt",
                "at": "l7:should"
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
          "say": "Stop five, weeks later. Damages hit the cap. The owner may finish it, cut the price, force completion, reject the works, or terminate.",
          "sub": "Chặng năm, vài tuần sau. Phạt chạm trần. Chủ đầu tư có thể tự hoàn thành, giảm giá, buộc hoàn thành, từ chối công trình, hoặc chấm dứt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The twenty seventeen international form makes hitting the cap a ground to terminate; the cap fails with fraud, deliberate breach or recklessness.",
          "sub": "Mẫu hợp đồng quốc tế 2017: chạm trần là căn cứ chấm dứt; trần không áp khi gian lận, cố ý vi phạm hay liều lĩnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Then terminate today! Find a new contractor.",
          "sub": "Vậy chấm dứt luôn hôm nay! Tìm nhà thầu khác.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Way A: a new contractor takes over half-built works, the delay may grow, and no penalty pays the debt.",
          "sub": "Cách A. Nhà thầu mới phải tiếp nhận công trình dở dang, chậm có thể còn dài hơn, mà không còn đồng phạt nào bù lịch trả nợ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Way B: an amendment moves the date, for new commitments and an extra guarantee, with lender consent.",
          "sub": "Cách B: phụ lục dời mốc, đổi lấy cam kết mới và bảo lãnh bổ sung, có chấp thuận của bên cho vay.",
          "keys": [
            "có chấp thuận của bên cho vay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "The site keeps running, and old rights are dealt with in the amendment. Way B.",
          "sub": "Công trường không dừng, quyền cũ xử lý rõ trong phụ lục. Cách B.",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Hitting the cap means you're allowed to terminate. Not that you should.",
          "sub": "Chạm trần là lúc được chấm dứt, chưa chắc là lúc nên chấm dứt.",
          "keys": [
            "chưa chắc là lúc nên chấm dứt"
          ]
        }
      ],
      "ref": "p16,p17,p18"
    },
    {
      "id": "s16",
      "module": "BRK-10",
      "data": {
        "quote": "Tổng phạt không quá [ ]% giá hợp đồng; trả phạt không miễn nghĩa vụ hoàn thành",
        "mark": "không miễn nghĩa vụ hoàn thành",
        "by": "Câu mẫu trong bài học",
        "illus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A complete clause: total no more than so many percent, and payment never excuses completion.",
          "sub": "Câu đủ vế: tổng phạt không quá [ ]%, trả phạt không miễn nghĩa vụ hoàn thành."
        }
      ],
      "ref": "p19"
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
            "at": "l4",
            "fit": [
              "h-e1",
              "h-e2"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Câu chữ đủ vế",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:clause"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1250,
            "w": 44,
            "h": 44,
            "at": "l1:COD",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1232,
            "size": 56,
            "at": "l1:COD+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Mốc COD, đã tính gia hạn",
            "x": 4066,
            "y": 1242,
            "size": 36,
            "at": "l1:COD+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1322,
            "w": 44,
            "h": 44,
            "at": "l1:rate",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1304,
            "size": 56,
            "at": "l1:rate+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Mức ngày theo phụ lục",
            "x": 4066,
            "y": 1314,
            "size": 36,
            "at": "l1:rate+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1394,
            "w": 44,
            "h": 44,
            "at": "l1:total",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1376,
            "size": 56,
            "at": "l1:total+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Tổng ≤ [ ]% giá hợp đồng",
            "x": 4066,
            "y": 1386,
            "size": 36,
            "at": "l1:total+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1466,
            "w": 44,
            "h": 44,
            "at": "l2:termination",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1448,
            "size": 56,
            "at": "l2:termination+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Không miễn hoàn thành, chấm dứt",
            "x": 4066,
            "y": 1458,
            "size": 36,
            "at": "l2:termination+200"
          },
          {
            "id": "h-x1",
            "t": "text",
            "text": "≠ “thiệt hại gián tiếp”",
            "x": 4836,
            "y": 1250,
            "size": 40,
            "at": "l3:indirect",
            "color": "coral"
          },
          {
            "id": "h-x2",
            "t": "text",
            "text": "≠ “biện pháp duy nhất”",
            "x": 4836,
            "y": 1320,
            "size": 40,
            "at": "l3:sole",
            "color": "coral",
            "hl": [
              {
                "text": "biện pháp duy nhất",
                "at": "l3:sole"
              }
            ]
          },
          {
            "id": "h-e",
            "t": "text",
            "text": "Lỗi hay gặp:",
            "x": 3996,
            "y": 1560,
            "size": 44,
            "at": "l4:mistakes"
          },
          {
            "id": "h-e1",
            "t": "text",
            "text": "• hai trần cộng lại vượt trần luật, thiếu câu “phần vượt là bồi thường”",
            "x": 3996,
            "y": 1620,
            "size": 28,
            "at": "l4:add",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-e2",
            "t": "text",
            "text": "• điều chấm dứt dẫn chiếu hỏng · loại trừ “mất lợi nhuận”",
            "x": 3996,
            "y": 1665,
            "size": 28,
            "at": "l5:reference",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Mỗi lỗi: tiền trong mô hình có thể không thu được",
            "x": 3996,
            "y": 1730,
            "size": 30,
            "at": "l5:model",
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
          "say": "Stop six. A full clause: a COD date with extensions counted, a daily rate schedule, a total cap.",
          "sub": "Chặng sáu. Điều phạt chậm đủ vế: mốc COD bắt buộc đã tính gia hạn, mức ngày theo phụ lục, tổng phạt không quá [ ]%."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Paying never excuses completion or affects termination rights.",
          "sub": "Trả phạt không miễn nghĩa vụ hoàn thành, không ảnh hưởng quyền chấm dứt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lenders also check: damages aren't excluded as indirect loss, and aren't the sole remedy.",
          "sub": "Bên cho vay kiểm thêm: phạt chậm không bị coi là thiệt hại gián tiếp bị loại trừ, không thành biện pháp duy nhất.",
          "keys": [
            "biện pháp duy nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Common mistakes: two caps that add up past the legal cap with no excess sentence.",
          "sub": "Lỗi hay gặp: trần phạt chậm cộng trần hiệu suất vượt xa trần luật mà không có câu “phần vượt là bồi thường”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A broken cross reference in termination. A loss of profit exclusion that guts the damages. Each can empty the model.",
          "sub": "Điều chấm dứt dẫn chiếu hỏng. Loại trừ “mất lợi nhuận” làm phạt chậm gần như vô nghĩa. Lỗi nào cũng làm tiền trong mô hình có thể không thu được.",
          "keys": [
            "không thu được"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Sáng thứ Hai sau · cùng bàn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:desk"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
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
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "abacus"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai sau · bàn của Thảo",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Số ngày được che ↔ lịch trả nợ ✓",
            "x": 5964,
            "y": 1250,
            "size": 38,
            "at": "l2:covered"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Khoảng chênh: ai che? ✓",
            "x": 5964,
            "y": 1320,
            "size": 38,
            "at": "l2:gap"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Bảng tính căn cứ ✓",
            "x": 5964,
            "y": 1390,
            "size": 38,
            "at": "l3:calculation"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Liệu cơm gắp mắm",
            "x": 5964,
            "y": 1510,
            "size": 56,
            "at": "l4:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l4:rice"
              }
            ]
          },
          {
            "id": "i-ca2",
            "t": "text",
            "text": "đo phạt trước, trông vào sau",
            "x": 5964,
            "y": 1595,
            "size": 42,
            "at": "l4:measured"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Monday morning. Same desk, same calendar.",
          "sub": "Sáng thứ Hai sau. Vẫn bàn ấy, vẫn tờ lịch ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Covered days next to the repayment schedule, and the gap with a name on it.",
          "sub": "Số ngày được che đặt cạnh lịch trả nợ, khoảng chênh đã có người che.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And I'm keeping the calculation. Renaming isn't enough!",
          "sub": "Còn em giữ bảng tính căn cứ. Đổi tên chưa đủ!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Measure the rice before the fish sauce. This time, the penalty was measured first.",
          "sub": "“Liệu cơm gắp mắm.” Lần này, tiền phạt được đo trước rồi mới trông vào.",
          "keys": [
            "được đo trước"
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
      "ref": "p12,outro"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:divide",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:legal",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:allowed",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:end",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7504,
            "y": 20,
            "at": "l1:divide+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 520,
            "at": "l2:legal+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1110,
            "at": "l3:allowed+900"
          },
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm tắt",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l3:end"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Trần ÷ mức ngày = số ngày",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l3:end+200"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Trần luật chưa chắc: giữ bảng tính",
            "x": 7932,
            "y": 1350,
            "size": 48,
            "at": "l3:end+400"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Chạm trần: được ≠ nên chấm dứt",
            "x": 7932,
            "y": 1440,
            "size": 48,
            "at": "l3:end+600"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung, không phải tư vấn pháp lý; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1790,
            "size": 28,
            "at": "l3:end+800",
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
          "say": "So: divide the cap by the daily rate, and set the days beside the repayment schedule.",
          "sub": "Tóm lại: lấy trần chia mức ngày, đặt số ngày cạnh lịch trả nợ.",
          "keys": [
            "trần chia mức ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The legal cap isn't settled, so keep the calculation behind every number.",
          "sub": "Trần luật chưa chắc, nên giữ bảng tính căn cứ cho mọi con số.",
          "keys": [
            "giữ bảng tính căn cứ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And at the cap, being allowed to terminate is not the same as needing to.",
          "sub": "Và chạm trần: được chấm dứt chưa chắc là nên chấm dứt.",
          "keys": [
            "chưa chắc là nên chấm dứt"
          ]
        }
      ],
      "beats": {
        "after": 900
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "data": {
        "q": "The plant is late because the contractor lacks workers, can the lender rely on delay insurance?",
        "options": [
          "Usually not, because no insured physical accident caused the delay",
          "Yes, because the insurer pays for every delay of any kind",
          "Yes, as long as the lender sends a complaint to the newspaper"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "umbrella-with-rain-drops",
        "why": "DSU chỉ trả khi chậm do rủi ro được bảo hiểm của đơn bảo hiểm công trình. Chậm do Nhà thầu tổ chức kém vẫn chỉ có phạt chậm che."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The plant is late because the contractor lacks workers, can the lender rely on delay insurance?",
          "sub": "Nhà máy chậm vì nhà thầu thiếu nhân lực, bên cho vay có trông vào bảo hiểm chậm khởi động được không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Usually not. DSU covers insured accidents, not a slow contractor.",
          "sub": "Thường là không. DSU che tai nạn được bảo hiểm, không che Nhà thầu chậm."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[23]"
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
          "say": "Right now: work out the covered days from your contract, and set them beside the repayment schedule.",
          "sub": "Việc làm ngay: tính số ngày phạt còn chảy từ hợp đồng, đặt cạnh lịch trả nợ.",
          "keys": [
            "số ngày phạt còn chảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: guarantees and assignment to the lender. Now, forty questions below!",
          "sub": "Bài sau: bảo lãnh và quyền chuyển nhượng cho bên cho vay. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-24 neo CON SỐ “12% · 8%” (p9, p10) → “EPC vốn tư nhân nằm lửng” → Dũng nói sai (p11) → “phạt chậm thực sự che được bao nhiêu?” → 3 ý (mức ngày, số ngày, chạm trần). Dòng thời gian: TUẦN SAU KHI NHÀ MÁY LỠ MỐC COD (sáng T2 → ① T3 mức ngày p3–p5 → ② T4 số ngày được che p6–p8, BRK-12 → ③ T5 trần luật p9–p10, “Khoan đã!” Dũng đổi tên p11–p12 → ④ T6 DSU, Sam thiếu nhân lực p13–p15 → ⑤ vài tuần sau chạm trần, Cách A/B p16–p18 → ⑥ câu chữ đủ vế p19–p20, BRK-10 → sáng T2 sau khép vòng, tóm tắt ô J). Nhân vật: w145/_series/epc-lender.md (Thảo, cô Hoa, Dũng, Sam). Không nêu tên hãng luật / hãng môi giới (bài dẫn → nói chung); mẫu quốc tế 2017 → nói chung. Tục ngữ mở/khép: “Liệu cơm gắp mắm”. BRK: 12 (số ngày được che p8), 07 (rehook DSU), 10 (câu mẫu p19). Số chỉ lấy từ bài: Điều 86 Luật Xây dựng 2025 trần 12%, Điều 301 LTM 2005 trần 8%, ngày 20/10/2026 (dự thảo), [A]/[B]%/[C] giữ ô trống. Câu đố questions[23].",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
