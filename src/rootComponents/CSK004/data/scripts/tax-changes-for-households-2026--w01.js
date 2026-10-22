// tax-changes-for-households-2026--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "tax-changes-for-households-2026--w01",
  "unit": {
    "audience": "household-business-owners-upgrading",
    "slug": "tax-changes-for-households-2026",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Từ 2026 thuế với hộ kinh doanh thay đổi những gì?",
    "series": "Từ hộ kinh doanh lên công ty — cho chủ hộ cân nhắc đổi mô hình khi quy định thuế đổi"
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
              "a-num"
            ],
            "zoom": 1.3,
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
            "id": "a-num",
            "t": "text",
            "text": "500 triệu",
            "x": 60,
            "y": 90,
            "size": 170,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "500 triệu",
                "at": "l1:million"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "doanh thu/năm · từ 2026",
            "x": 70,
            "y": 320,
            "size": 54,
            "at": "l2:yearly"
          },
          {
            "id": "a-sub2",
            "t": "text",
            "text": "→ không nộp TNCN, GTGT",
            "x": 70,
            "y": 410,
            "size": 52,
            "at": "l3:neither"
          },
          {
            "id": "a-det",
            "t": "text",
            "text": "Nhưng có một chi tiết…",
            "x": 70,
            "y": 520,
            "size": 54,
            "at": "l4:detail",
            "color": "coral",
            "hl": [
              {
                "text": "một chi tiết",
                "at": "l4:detail"
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
          "say": "Five hundred million dong.",
          "sub": "Năm trăm triệu đồng.",
          "keys": [
            "Năm trăm triệu đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From twenty twenty six, that is the yearly revenue line for household businesses.",
          "sub": "Từ năm 2026, đó là ngưỡng doanh thu mỗi năm của hộ kinh doanh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At or below it: neither personal income tax nor VAT.",
          "sub": "Từ đó trở xuống: không nộp thuế thu nhập cá nhân, không nộp thuế giá trị gia tăng.",
          "keys": [
            "không nộp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But there is one detail people get wrong.",
          "sub": "Nhưng có một chi tiết người ta hay hiểu sai.",
          "keys": [
            "một chi tiết"
          ]
        }
      ],
      "ref": "p5"
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
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
                "steaming-bowl",
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Ngày đầu quý · quán bún đầu chợ",
            "icon": "steaming-bowl"
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "“Bỏ khoán = hết thuế!”",
            "x": 60,
            "y": 640,
            "size": 54,
            "at": "l3:tax",
            "color": "muted"
          },
          {
            "id": "a-wx",
            "t": "strike",
            "over": "a-w",
            "at": "l5:wrong"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 920,
            "y": 660,
            "size": 50,
            "at": "l6:inch",
            "color": "accent",
            "hl": [
              {
                "text": "Sai một li",
                "at": "l6:inch"
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
          "say": "Meet Cô Hoa, noodle stall at the market gate, decades of presumptive tax.",
          "sub": "Đây là Cô Hoa, quán bún đầu chợ, mấy chục năm quen nộp thuế khoán.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, a carpentry workshop owner, reading news over his breakfast.",
          "sub": "Còn đây là Dũng, chủ xưởng mộc, vừa ăn sáng vừa đọc tin.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Cô Hoa! No more presumptive tax. So no more tax at all!",
          "sub": "Cô ơi! Bỏ thuế khoán rồi. Vậy là hết thuế luôn!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Really? Then I'll stop worrying, just like that?",
          "sub": "Thật hả? Thế cô khỏi lo luôn à?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So what does ending presumptive tax really mean? Not the end of tax. Dũng is wrong.",
          "sub": "Vậy bỏ khoán thực sự là gì? Không phải bỏ thuế. Dũng hiểu sai rồi.",
          "keys": [
            "Không phải bỏ thuế"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Off by an inch, lost by a mile. In tax, a small misreading costs a lot.",
          "sub": "“Sai một li, đi một dặm.” Chuyện thuế, hiểu lệch một chút là thiệt nhiều.",
          "keys": [
            "Sai một li, đi một dặm"
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
            "text": "Bỏ khoán: đổi những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:changes",
            "hl": [
              {
                "text": "đổi những gì",
                "at": "l1:changes"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Doanh thu thuộc nhóm nào",
            "x": 2028,
            "y": 180,
            "size": 48,
            "at": "l2:group",
            "hl": [
              {
                "text": "nhóm nào",
                "at": "l2:group"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Thuế tính ra sao",
            "x": 2028,
            "y": 260,
            "size": 48,
            "at": "l3:calculated"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Khai, nộp khi nào, ở đâu",
            "x": 2028,
            "y": 340,
            "size": 48,
            "at": "l4:where"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Quý tự khai đầu của cô Hoa",
            "x": 2028,
            "y": 460,
            "size": 44,
            "at": "l5:quarter"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:quarter+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:quarter+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:quarter+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:quarter+1250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:quarter+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:quarter+1750",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Đầu quý",
            "x": 2048,
            "y": 580,
            "size": 40,
            "at": "l5:quarter+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Tuần 2",
            "x": 2318,
            "y": 580,
            "size": 40,
            "at": "l5:quarter+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tuần 4",
            "x": 2588,
            "y": 580,
            "size": 40,
            "at": "l5:quarter+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tháng 2",
            "x": 2858,
            "y": 580,
            "size": 40,
            "at": "l5:quarter+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tháng 3",
            "x": 3128,
            "y": 580,
            "size": 40,
            "at": "l5:quarter+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Cuối quý",
            "x": 3398,
            "y": 580,
            "size": 40,
            "at": "l5:quarter+1870"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what really changes in household business tax from twenty twenty six?",
          "sub": "Vậy từ năm 2026, thuế với hộ kinh doanh thực sự đổi những gì?",
          "keys": [
            "đổi những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three things. One: which revenue group you are in.",
          "sub": "Ba điều. Một: doanh thu của bạn thuộc nhóm nào.",
          "keys": [
            "thuộc nhóm nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: how your tax is calculated.",
          "sub": "Hai: thuế tính ra sao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: when and where to file and pay.",
          "sub": "Ba: khai và nộp khi nào, ở đâu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Cô Hoa through her first quarter of self declaring.",
          "sub": "Cùng theo cô Hoa qua quý tự khai đầu tiên.",
          "keys": [
            "quý tự khai đầu tiên"
          ]
        }
      ],
      "ref": "intro"
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
            "text": "① Đầu quý · Bỏ khoán",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Nghị quyết 198/2025/QH15",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:Resolution",
            "hl": [
              {
                "text": "198/2025",
                "at": "l2:one nine eight"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "Quốc hội thông qua 17/5/2025",
            "x": 4036,
            "y": 250,
            "size": 40,
            "at": "l2:May"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Khoản 6 Điều 10: bỏ khoán",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l3:Clause six",
            "color": "accent",
            "hl": [
              {
                "text": "bỏ khoán",
                "at": "l3:presumptive"
              }
            ]
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "từ 01/01/2026",
            "x": 4036,
            "y": 410,
            "size": 44,
            "at": "l3:January"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Khoản 7: hết lệ phí môn bài",
            "x": 3996,
            "y": 480,
            "size": 48,
            "at": "l4:Clause seven"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Luật QLT 108/2025: từ 01/7/2026",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l5:July",
            "hl": [
              {
                "text": "108/2025",
                "at": "l5:one oh eight"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "→ tự khai, tự nộp theo kỳ",
            "x": 4896,
            "y": 170,
            "size": 50,
            "at": "l6:declare",
            "color": "accent",
            "hl": [
              {
                "text": "tự khai",
                "at": "l6:declare"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 10 Nghị quyết 198/2025/QH15; Luật Quản lý thuế 108/2025/QH15 (theo Thư viện Pháp luật)",
            "x": 3996,
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
          "say": "First stop: the first day of the quarter. Where did this all start?",
          "sub": "Chặng một: ngày đầu quý. Chuyện này bắt đầu từ đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Resolution one nine eight of twenty twenty five, passed by the National Assembly on the seventeenth of May.",
          "sub": "Nghị quyết 198/2025/QH15, Quốc hội thông qua ngày 17/5/2025.",
          "keys": [
            "Nghị quyết 198/2025/QH15"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Clause six of Article ten: from January twenty twenty six, no presumptive tax method.",
          "sub": "Khoản 6 Điều 10: từ 01/01/2026, hộ kinh doanh không áp dụng phương pháp khoán thuế.",
          "keys": [
            "Khoản 6 Điều 10"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clause seven: the business licence fee ends from the same day.",
          "sub": "Khoản 7: chấm dứt thu, nộp lệ phí môn bài từ cùng ngày.",
          "keys": [
            "lệ phí môn bài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the Tax Administration Law, one oh eight, took effect on the first of July twenty twenty six.",
          "sub": "Và Luật Quản lý thuế 108/2025/QH15 có hiệu lực từ 01/7/2026."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So now you declare yourself, and pay yourself, each period.",
          "sub": "Nên giờ cách làm là tự khai, tự nộp theo kỳ.",
          "keys": [
            "tự khai, tự nộp theo kỳ"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
      "module": "BRK-04",
      "data": {
        "title": "Bỏ thuế khoán là…",
        "wrong": "Bỏ thuế, từ nay khỏi nộp",
        "right": "Tự khai đúng doanh thu, vẫn nộp thuế",
        "wrongIllus": "money-with-wings",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "No presumptive tax means no tax? Wrong.",
          "sub": "Bỏ khoán là bỏ thuế? Sai.",
          "keys": [
            "bỏ thuế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only the method ends. You declare your real revenue.",
          "sub": "Chỉ bỏ cách khoán. Bạn tự khai đúng doanh thu.",
          "keys": [
            "tự khai đúng doanh thu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "c-6",
            "t": "text",
            "text": "Được miễn: nhờ dưới ngưỡng",
            "x": 4896,
            "y": 260,
            "size": 46,
            "at": "l1:below",
            "hl": [
              {
                "text": "dưới ngưỡng",
                "at": "l1:below"
              }
            ]
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "không phải nhờ bỏ khoán",
            "x": 4936,
            "y": 330,
            "size": 40,
            "at": "l1:not because",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Bỏ vé tháng ≠ bỏ xe buýt",
            "x": 4896,
            "y": 440,
            "size": 48,
            "at": "l2:bus",
            "color": "coral",
            "hl": [
              {
                "text": "≠ bỏ xe buýt",
                "at": "l2:bus"
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
          "say": "Some households are exempt because their revenue is below the line, not because presumptive tax ended.",
          "sub": "Hộ nào được miễn là nhờ doanh thu dưới ngưỡng, không phải nhờ bỏ khoán.",
          "keys": [
            "dưới ngưỡng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dropping the monthly bus pass doesn't mean dropping the bus. You still pay, per ride.",
          "sub": "Bỏ vé tháng đâu phải bỏ xe buýt. Vẫn trả tiền, chỉ là trả theo chuyến.",
          "keys": [
            "Bỏ vé tháng"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần 2 · Ngưỡng 500 triệu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Thảo"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "newspaper",
                "abacus"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Tuần 2 · quán vãn khách",
            "icon": "newspaper"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "≤ 500 triệu/năm:",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l4:five hundred",
            "color": "accent"
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "không nộp TNCN, GTGT",
            "x": 6004,
            "y": 255,
            "size": 48,
            "at": "l4:neither"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Luật TNCN 2025",
            "x": 5964,
            "y": 340,
            "size": 44,
            "at": "l5:Personal"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "Luật GTGT sửa đổi 2025",
            "x": 5964,
            "y": 405,
            "size": 44,
            "at": "l5:amended"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Hộ gia đình: 1 người đại diện",
            "x": 5964,
            "y": 490,
            "size": 42,
            "at": "l6:representative",
            "hl": [
              {
                "text": "1 người đại diện",
                "at": "l6:single"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, giải đáp 02/01/2026",
            "x": 5964,
            "y": 560,
            "size": 26,
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
          "say": "Second stop: week two. Meet Thảo, the accountant next door, with an old newspaper.",
          "sub": "Chặng hai: tuần thứ hai. Đây là Thảo, hàng xóm làm kế toán, tay cầm tờ báo cũ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, this paper says the line is one hundred million. Which is it?",
          "sub": "Thảo ơi, báo này ghi ngưỡng một trăm triệu. Rốt cuộc là bao nhiêu?",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "That paper is old, Cô Hoa. Look at the date first.",
          "sub": "Báo cũ rồi cô ơi. Xem ngày đăng trước đã.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "From twenty twenty six: five hundred million a year or less, neither income tax nor VAT.",
          "sub": "Từ 2026: doanh thu từ 500 triệu/năm trở xuống không nộp thuế thu nhập cá nhân, thuế giá trị gia tăng.",
          "keys": [
            "500 triệu/năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Under the Personal Income Tax Law twenty twenty five and the amended VAT Law twenty twenty five.",
          "sub": "Theo Luật Thuế thu nhập cá nhân 2025 và Luật Thuế giá trị gia tăng sửa đổi 2025."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "For a family doing business together, the line is set for one single representative.",
          "sub": "Với hộ gia đình, ngưỡng xác định cho một người đại diện duy nhất.",
          "keys": [
            "một người đại diện duy nhất"
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
      "ref": "p5"
    },
    {
      "id": "s07",
      "module": "BRK-08",
      "data": {
        "title": "Ngưỡng đã đổi nhiều lần",
        "points": [
          {
            "label": "100 triệu",
            "sub": "Thông tư 40/2021",
            "illus": "page-facing-up"
          },
          {
            "label": "200 triệu",
            "sub": "Luật GTGT 2024",
            "illus": "open-book"
          },
          {
            "label": "500 triệu",
            "sub": "Luật TNCN sửa đổi",
            "illus": "money-bag"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First one hundred million, then two hundred million.",
          "sub": "Lúc đầu 100 triệu, rồi 200 triệu.",
          "keys": [
            "100 triệu",
            "200 triệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the amended law of December twenty twenty five: five hundred.",
          "sub": "Rồi luật sửa đổi thông qua 10/12/2025: 500 triệu.",
          "keys": [
            "500 triệu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "d-il",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 5964,
            "y": 620,
            "size": 90,
            "at": "l1:published"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đọc tin thuế: xem ngày đăng",
            "x": 6074,
            "y": 630,
            "size": 48,
            "at": "l1:published",
            "color": "accent",
            "hl": [
              {
                "text": "xem ngày đăng",
                "at": "l1:published"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Trừ 500 triệu trước khi tính",
            "x": 6864,
            "y": 680,
            "size": 40,
            "at": "l2:deduct"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So when you read tax news, check when it was published. The number may be old.",
          "sub": "Vậy đọc tin thuế, hãy xem bài đăng lúc nào. Con số ngưỡng có thể đã cũ.",
          "keys": [
            "xem bài đăng lúc nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And the new law lets you deduct the five hundred million before applying the rate.",
          "sub": "Luật mới còn cho trừ phần 500 triệu trước khi tính thuế theo tỷ lệ.",
          "keys": [
            "trừ phần 500 triệu"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "text": "③ Tuần 4 · Nhóm giữa",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:week four"
          },
          {
            "id": "e-0",
            "t": "text",
            "text": "Trên 500 triệu – 3 tỷ",
            "x": 7932,
            "y": 170,
            "size": 54,
            "at": "l1:three billion",
            "color": "accent"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "TNCN = (DT − 500 triệu) × thuế suất",
            "x": 7932,
            "y": 260,
            "size": 44,
            "at": "l2:minus",
            "hl": [
              {
                "text": "− 500 triệu",
                "at": "l2:minus"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "GTGT trực tiếp: cũng trừ 500 triệu",
            "x": 7932,
            "y": 340,
            "size": 42,
            "at": "l3:direct"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "(trước đây không được trừ)",
            "x": 7972,
            "y": 405,
            "size": 36,
            "at": "l3:before",
            "color": "muted"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Đủ điều kiện: tự chọn khấu trừ",
            "x": 7932,
            "y": 470,
            "size": 42,
            "at": "l4:deduction"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Ăn uống: GTGT 3% · TNCN 1,5%",
            "x": 8832,
            "y": 650,
            "size": 44,
            "at": "l6:three percent",
            "color": "coral",
            "hl": [
              {
                "text": "3%",
                "at": "l6:three percent"
              },
              {
                "text": "1,5%",
                "at": "l6:one point five"
              }
            ]
          },
          {
            "id": "e-4b",
            "t": "text",
            "text": "ngành khác: tra Phụ lục I",
            "x": 8832,
            "y": 715,
            "size": 36,
            "at": "l5:Appendix"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, giải đáp 1/2026; hướng dẫn 11/2025",
            "x": 7932,
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
          "say": "Third stop: week four. The middle group, above five hundred million up to three billion.",
          "sub": "Chặng ba: tuần thứ tư. Nhóm giữa: trên 500 triệu đến 3 tỷ đồng.",
          "keys": [
            "Nhóm giữa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Income tax, revenue method: revenue minus five hundred million, times the rate.",
          "sub": "Thuế thu nhập cá nhân theo doanh thu: doanh thu trừ 500 triệu, nhân thuế suất.",
          "keys": [
            "doanh thu trừ 500 triệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Direct method VAT works the same way. Before, that part was not deducted.",
          "sub": "Thuế giá trị gia tăng trực tiếp cũng vậy. Trước đây không được trừ phần này."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eligible households may also choose the deduction method.",
          "sub": "Hộ đủ điều kiện có thể tự nguyện chọn phương pháp khấu trừ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The rate depends on your trade, listed in Appendix one of Circular forty.",
          "sub": "Tỷ lệ khác nhau theo ngành, ở Phụ lục I Thông tư 40/2021/TT-BTC."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Food service, for example: three percent VAT, one point five percent income tax.",
          "sub": "Ví dụ dịch vụ ăn uống: 3% thuế giá trị gia tăng, 1,5% thuế thu nhập cá nhân.",
          "keys": [
            "3%",
            "1,5%"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "abacus"
              ]
            },
            "at": "l1",
            "caption": "Tối tuần 4 · nhà cô Hoa",
            "icon": "abacus"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Let me try it myself, step by step, with my sales notebook.",
          "sub": "Để cô tự ước thử, từng bước, với cuốn sổ bán hằng ngày.",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step one: add up twelve months of revenue from the daily notes.",
          "sub": "Bước một: cộng doanh thu mười hai tháng từ sổ ghi hằng ngày.",
          "keys": [
            "mười hai tháng"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "BRK-05",
      "data": {
        "title": "Cô Hoa tự ước thuế",
        "points": [
          "So hai mốc 500 triệu, 3 tỷ",
          "Nhóm giữa: trừ 500 triệu, nhân tỷ lệ",
          "Mang số ước đi hỏi cơ quan thuế"
        ],
        "illus": "abacus"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step two: compare with the two marks.",
          "sub": "Bước hai: so với hai mốc.",
          "keys": [
            "hai mốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then subtract, and apply the food service rates.",
          "sub": "Rồi trừ 500 triệu, nhân tỷ lệ ngành ăn uống."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Last: check it with the tax office.",
          "sub": "Cuối cùng: hỏi cơ quan thuế đối chiếu.",
          "keys": [
            "hỏi cơ quan thuế"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p10"
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
            "id": "e-k",
            "t": "text",
            "text": "Doanh thu đúng + tỷ lệ đúng ngành",
            "x": 7932,
            "y": 560,
            "size": 44,
            "at": "l1:right rate",
            "color": "accent",
            "hl": [
              {
                "text": "tỷ lệ đúng ngành",
                "at": "l1:right rate"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "→ ước thuế không khó",
            "x": 7972,
            "y": 635,
            "size": 44,
            "at": "l1:hard"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Correct revenue, the right rate for my trade. Not so hard after all!",
          "sub": "Doanh thu đúng, tỷ lệ đúng ngành. Ước thuế hoá ra không khó!",
          "keys": [
            "Ước thuế hoá ra không khó"
          ],
          "face": "happy"
        }
      ],
      "ref": "p11"
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
            "text": "④ Tháng 2 · Trên 3 tỷ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:workshop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "carpentry-saw",
                "wood"
              ]
            },
            "at": "l1:workshop",
            "caption": "Tháng thứ hai · xưởng mộc",
            "icon": "carpentry-saw"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "TNCN = 17% × thu nhập tính thuế",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l3:seventeen",
            "color": "accent",
            "hl": [
              {
                "text": "17%",
                "at": "l3:seventeen"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "= doanh thu − chi phí hợp lý",
            "x": 100,
            "y": 1335,
            "size": 42,
            "at": "l4:minus"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "GTGT: khấu trừ bắt buộc",
            "x": 60,
            "y": 1410,
            "size": 44,
            "at": "l5:VAT"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Đ7 Luật Thuế TNCN 2025; QĐ 3389/QĐ-BTC",
            "x": 60,
            "y": 1485,
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
          "say": "Fourth stop: month two. Back to Dũng, at his small carpentry workshop.",
          "sub": "Chặng bốn: tháng thứ hai. Ghé xưởng mộc nhỏ của Dũng.",
          "keys": [
            "xưởng mộc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wardrobe orders everywhere! Revenue passed three billion this year.",
          "sub": "Đơn đóng tủ tới tấp! Năm nay doanh thu vượt 3 tỷ rồi.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Above three billion: income tax is seventeen percent of taxable income.",
          "sub": "Trên 3 tỷ: thuế thu nhập cá nhân bằng 17% thu nhập tính thuế.",
          "keys": [
            "17%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Taxable income means revenue minus reasonable costs.",
          "sub": "Thu nhập tính thuế là doanh thu trừ chi phí hợp lý.",
          "keys": [
            "trừ chi phí hợp lý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And VAT must use the deduction method.",
          "sub": "Thuế giá trị gia tăng bắt buộc theo phương pháp khấu trừ."
        }
      ],
      "ref": "p12"
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
            "id": "f-q",
            "t": "text",
            "text": "Gỗ, sơn không hoá đơn → ?",
            "x": 60,
            "y": 1570,
            "size": 50,
            "at": "l3:invoices",
            "color": "coral"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Chi phí khó được tính",
            "x": 60,
            "y": 1650,
            "size": 46,
            "at": "l4:hard",
            "hl": [
              {
                "text": "khó được tính",
                "at": "l4:hard"
              }
            ]
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "→ thu nhập tính thuế ↑, thuế ↑",
            "x": 60,
            "y": 1720,
            "size": 44,
            "at": "l5:goes up",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Giữ chứng từ chi như tiền thu",
            "x": 960,
            "y": 1780,
            "size": 38,
            "at": "l6:carefully",
            "color": "accent",
            "hl": [
              {
                "text": "như tiền thu",
                "at": "l6:money"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I write down every payment I receive. But wood and paint? No invoices kept.",
          "sub": "Tiền thu thì em ghi đủ. Còn gỗ, sơn mua về? Hoá đơn chẳng giữ.",
          "pose": "shrug"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Think about it. What happens to Dũng's tax?",
          "sub": "Thử nghĩ xem. Thuế của Dũng sẽ ra sao?",
          "keys": [
            "Thử nghĩ xem"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wood and paint bought without invoices.",
          "sub": "Gỗ, sơn mua không có hoá đơn.",
          "wait": 1200
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Costs without evidence are hard to count.",
          "sub": "Chi phí không có chứng từ thì khó được tính.",
          "keys": [
            "khó được tính"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So taxable income goes up, and the tax goes up too.",
          "sub": "Nên thu nhập tính thuế cao lên, số thuế cũng cao lên."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Big revenue? Keep cost papers as carefully as the money you collect.",
          "sub": "Doanh thu lớn thì giữ chứng từ chi phí kỹ như giữ tiền thu.",
          "keys": [
            "kỹ như giữ tiền thu"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Tính xong rồi, nộp ở đâu, hạn nào?",
        "illus": "spiral-calendar"
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
          "say": "Tax worked out. Now where do you file, and by when?",
          "sub": "Tính xong rồi. Nộp ở đâu, hạn nào?",
          "keys": [
            "hạn nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "text": "⑤ Tháng 3 · Khai và nộp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:month three"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "spiral-calendar"
              ]
            },
            "at": "l1:month three",
            "caption": "Tháng thứ ba · nhà cô Hoa",
            "icon": "mobile-phone"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Theo tháng: chậm nhất ngày 20",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l3:twentieth",
            "hl": [
              {
                "text": "ngày 20",
                "at": "l3:twentieth"
              }
            ]
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "của tháng sau",
            "x": 2068,
            "y": 1330,
            "size": 40,
            "at": "l3:following"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Theo quý: ngày cuối cùng",
            "x": 2028,
            "y": 1400,
            "size": 46,
            "at": "l4:last day",
            "color": "accent",
            "hl": [
              {
                "text": "ngày cuối cùng",
                "at": "l4:last day"
              }
            ]
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "của tháng đầu quý sau",
            "x": 2068,
            "y": 1470,
            "size": 40,
            "at": "l4:first month"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Hạn nộp tiền = hạn nộp hồ sơ",
            "x": 2028,
            "y": 1540,
            "size": 42,
            "at": "l5:same"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: giải đáp dẫn Quyết định 3078/QĐ-BTC năm 2025",
            "x": 2028,
            "y": 1610,
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
          "say": "Fifth stop: month three. Thảo sits with Cô Hoa and her phone.",
          "sub": "Chặng năm: tháng thứ ba. Thảo ngồi cùng cô Hoa và chiếc điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Monthly or quarterly, I just need to know the deadline!",
          "sub": "Khai tháng hay quý gì thì cô cũng cần biết hạn chót!",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monthly filers: by the twentieth of the following month.",
          "sub": "Khai theo tháng: chậm nhất ngày 20 của tháng sau.",
          "keys": [
            "ngày 20"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Quarterly filers: by the last day of the first month of the following quarter.",
          "sub": "Khai theo quý: chậm nhất ngày cuối cùng của tháng đầu quý sau.",
          "keys": [
            "ngày cuối cùng của tháng đầu quý sau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The payment deadline is the same as the filing deadline.",
          "sub": "Hạn nộp tiền thuế trùng với hạn nộp hồ sơ.",
          "keys": [
            "trùng"
          ]
        }
      ],
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-4",
            "t": "text",
            "text": "Tờ khai 01/CNKD + Bảng kê 01-2/BK-HĐKD",
            "x": 2028,
            "y": 1680,
            "size": 38,
            "at": "l1:form"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Hồ sơ: Cổng Thuế điện tử",
            "x": 2028,
            "y": 1750,
            "size": 40,
            "at": "l2:portal"
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Tiền: eTax Mobile",
            "x": 2928,
            "y": 1750,
            "size": 48,
            "at": "l3:eTax",
            "color": "accent",
            "hl": [
              {
                "text": "eTax Mobile",
                "at": "l3:eTax"
              }
            ]
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "Bán trên sàn: sàn nộp thay",
            "x": 2928,
            "y": 1815,
            "size": 36,
            "at": "l4:platform"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The file: form zero one CNKD and the list zero one dash two, unless officials already confirmed your revenue.",
          "sub": "Hồ sơ: tờ khai 01/CNKD và Bảng kê 01-2/BK-HĐKD, trừ khi cơ quan chức năng đã xác nhận doanh thu.",
          "keys": [
            "01/CNKD"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "File on the electronic tax portal or the national public service portal. Or in person, or by post.",
          "sub": "Nộp qua Cổng Thuế điện tử, Cổng Dịch vụ công quốc gia; không nộp điện tử được thì nộp trực tiếp, qua bưu chính."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And pay through the eTax Mobile app, Cô Hoa, or those same portals.",
          "sub": "Tiền thuế thì nộp qua eTax Mobile cô ạ, hoặc Cổng Thuế điện tử, Cổng Dịch vụ công.",
          "keys": [
            "eTax Mobile"
          ],
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Selling on a platform with payments? The platform withholds, declares and pays for you.",
          "sub": "Bán trên sàn thương mại điện tử có chức năng thanh toán? Sàn khấu trừ, khai và nộp thay.",
          "keys": [
            "Sàn khấu trừ, khai và nộp thay"
          ]
        }
      ],
      "ref": "p15,p16"
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
          },
          {
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
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
            "text": "⑥ Cuối quý · Hoá đơn, phạt",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:quarter"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "convenience-store",
                "locked"
              ]
            },
            "at": "l1:Bình",
            "caption": "Cuối quý · tạp hoá Bác Bình",
            "icon": "convenience-store"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Trên 1 tỷ: hoá đơn điện tử",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:billion",
            "color": "accent",
            "hl": [
              {
                "text": "hoá đơn điện tử",
                "at": "l2:electronic"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "có mã thuế / máy tính tiền",
            "x": 4036,
            "y": 1335,
            "size": 40,
            "at": "l2:register"
          },
          {
            "id": "h-1c",
            "t": "text",
            "text": "NĐ 254/2026 · TT 91/2026",
            "x": 3996,
            "y": 1405,
            "size": 42,
            "at": "l3:Decree"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Phạt: bằng ½ mức của tổ chức",
            "x": 3996,
            "y": 1490,
            "size": 44,
            "at": "l5:half",
            "color": "coral",
            "hl": [
              {
                "text": "½",
                "at": "l5:half"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: giải đáp 7/2026 về hoá đơn hộ kinh doanh",
            "x": 3996,
            "y": 1560,
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
          "say": "Sixth stop: end of the quarter. Meet Uncle Bình, grocery shop owner, quarterly filer.",
          "sub": "Chặng sáu: cuối quý. Đây là Bác Bình, chủ tạp hoá, khai thuế theo quý.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, invoices. Above one billion a year: electronic invoices, coded or from a cash register.",
          "sub": "Trước hết, hoá đơn. Trên 1 tỷ đồng/năm: hoá đơn điện tử có mã hoặc từ máy tính tiền.",
          "keys": [
            "hoá đơn điện tử"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From July twenty twenty six, under Decree two five four and Circular ninety one. Smaller households may register if they want.",
          "sub": "Từ 01/7/2026, theo Nghị định 254/2026 và Thông tư 91/2026. Hộ từ 1 tỷ trở xuống được đăng ký dùng nếu cần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "And if I get something wrong? Will they fine me like a big company?",
          "sub": "Lỡ sai thì sao? Có bị phạt như công ty lớn không?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Households are fined as individuals: half the rate for organisations.",
          "sub": "Hộ bị phạt như cá nhân, tức bằng một nửa mức phạt của tổ chức.",
          "keys": [
            "một nửa mức phạt"
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
      "ref": "p17,p18"
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
            "id": "h-3",
            "t": "text",
            "text": "Tạm ngừng: báo cơ quan thuế",
            "x": 3996,
            "y": 1630,
            "size": 46,
            "at": "l1:notify",
            "color": "accent",
            "hl": [
              {
                "text": "báo cơ quan thuế",
                "at": "l1:notify"
              }
            ]
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "trọn kỳ: khỏi nộp tờ khai",
            "x": 4036,
            "y": 1700,
            "size": 40,
            "at": "l2:whole"
          },
          {
            "id": "h-3c",
            "t": "text",
            "text": "không trọn tháng/quý: vẫn khai",
            "x": 4036,
            "y": 1765,
            "size": 40,
            "at": "l2:not",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Closing for a while? Notify the tax office.",
          "sub": "Tạm ngừng kinh doanh? Phải thông báo cho cơ quan thuế.",
          "keys": [
            "thông báo cho cơ quan thuế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No returns for the closed period, unless it does not cover a whole month or quarter.",
          "sub": "Trong thời gian tạm ngừng không phải nộp hồ sơ khai thuế, trừ khi nghỉ không trọn tháng, trọn quý theo kỳ khai."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s20",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Cuối quý · tạp hoá Bác Bình",
        "actors": [
          {
            "id": "binh",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Khoá cửa về quê, không báo ai",
          "why": "Tạm ngừng phải thông báo cơ quan thuế; nghỉ không trọn quý thì quý đó vẫn phải khai.",
          "rule": "Nghỉ bán cũng phải báo cơ quan thuế"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Family back home is sick. I'll lock up for a month. No need to tell anyone.",
          "sub": "Người nhà dưới quê ốm. Bác khoá cửa một tháng, cần gì báo ai.",
          "pose": "cross",
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
          "say": "Report a closure. And a month is not a whole quarter.",
          "sub": "Tạm ngừng phải báo. Mà nghỉ một tháng đâu phải trọn quý.",
          "keys": [
            "Tạm ngừng phải báo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Uncle, notify the tax office first. You still file this quarter.",
          "sub": "Bác báo tạm ngừng trước đã. Quý này vẫn phải khai.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Closing shop? Tell the tax office. Don't just lock up.",
          "sub": "Nghỉ bán cũng phải báo thuế, đừng chỉ khoá cửa rồi đi.",
          "phase": "redo",
          "keys": [
            "đừng chỉ khoá cửa rồi đi"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p19,p20"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Hạn nộp quý · Quán bún",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:deadline"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "mobile-phone",
                "steaming-bowl"
              ]
            },
            "at": "l1:deadline",
            "caption": "Hạn nộp quý · quán bún đầu chợ",
            "icon": "mobile-phone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "500 triệu: ngưỡng, không phải hết thuế",
            "x": 5964,
            "y": 1260,
            "size": 40,
            "at": "l3:line"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Đã khai ✓ đã nộp qua eTax ✓",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l2:filed",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Đúng một số, đỡ một dặm”",
            "x": 5964,
            "y": 1490,
            "size": 52,
            "at": "l5:number",
            "color": "accent",
            "hl": [
              {
                "text": "Đúng một số",
                "at": "l5:number"
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
          "say": "The quarterly deadline. Same stall, same morning rush.",
          "sub": "Hạn nộp quý. Vẫn quán ấy, vẫn đông khách buổi sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Filed, and paid on eTax, before the deadline!",
          "sub": "Khai xong, nộp qua eTax rồi, trước hạn nhé!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So five hundred million is a line, not the end of tax. Got it now.",
          "sub": "Vậy 500 triệu là ngưỡng, chứ không phải hết thuế. Giờ em hiểu rồi.",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And this year, I keep every invoice for wood and paint.",
          "sub": "Còn năm nay, em giữ đủ hoá đơn gỗ, sơn.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Off by an inch, lost by a mile. Get the number right, and save the mile.",
          "sub": "“Sai một li, đi một dặm.” Còn đúng một con số, đỡ cả dặm đường.",
          "keys": [
            "đúng một con số"
          ]
        }
      ],
      "ref": "p4,p21"
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
            "at": "l1:three",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
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
            "text": "Ba điều · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l5:period"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:tax"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:revenue"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l4:deadline"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Ghi lại kỳ khai của mình",
            "x": 7932,
            "y": 1270,
            "size": 50,
            "at": "l5:period",
            "color": "accent",
            "hl": [
              {
                "text": "kỳ khai",
                "at": "l5:period"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Cài eTax Mobile",
            "x": 7932,
            "y": 1350,
            "size": 50,
            "at": "l5:eTax"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Bài tiếp: ghi sổ, hoá đơn",
            "x": 7932,
            "y": 1430,
            "size": 46,
            "at": "l6:Next"
          },
          {
            "id": "j-src1",
            "t": "text",
            "text": "Bài để tham khảo, nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-src2",
            "t": "text",
            "text": "Quy định thuế, hoá đơn, đăng ký có thể đã được sửa đổi — kiểm văn bản mới nhất trước khi khai, nộp.",
            "x": 7932,
            "y": 1770,
            "size": 26,
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
          "say": "So, three things.",
          "sub": "Tóm lại, ba điều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: no presumptive tax is not no tax. You declare real revenue.",
          "sub": "Một: bỏ khoán không phải bỏ thuế. Bạn tự khai đúng doanh thu.",
          "keys": [
            "bỏ khoán không phải bỏ thuế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: yearly revenue sets your group and how tax is calculated.",
          "sub": "Hai: doanh thu cả năm quyết định nhóm và cách tính thuế.",
          "keys": [
            "doanh thu cả năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: know your period and your deadline.",
          "sub": "Ba: biết kỳ khai và hạn nộp của mình.",
          "keys": [
            "hạn nộp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: write down your filing period, and install the eTax Mobile app.",
          "sub": "Việc làm ngay: ghi lại kỳ khai của mình, cài ứng dụng eTax Mobile.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: books and invoices. Tax rules may have changed since, so check the latest texts.",
          "sub": "Bài tiếp: ghi sổ và hoá đơn. Quy định thuế có thể đã sửa đổi, hãy kiểm văn bản mới nhất.",
          "keys": [
            "kiểm văn bản mới nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "A customer jokes that shop owners pay no tax now, how could you correct him?",
        "options": [
          "Agree with him and stop keeping any notes about daily sales",
          "Say tax still applies, only the method changed to declaring actual revenue",
          "Tell him that only companies pay tax and households never did"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "receipt",
        "why": "Bỏ khoán chỉ đổi cách tính: tự khai doanh thu thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A customer jokes that shop owners pay no tax now, how could you correct him?",
          "sub": "Một khách đùa rằng giờ chủ tiệm khỏi nộp thuế, bạn đính chính thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Say tax still applies, only the method changed to declaring actual revenue.",
          "sub": "Nói rằng vẫn có thuế, chỉ đổi cách: tự khai doanh thu thực tế."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "No presumptive tax is not no tax.",
          "sub": "Bỏ khoán không phải bỏ thuế."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[7]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Thuế hộ kinh doanh từ 2026"
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
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI (bài 1 chuỗi household-business-owners-upgrading) theo hạt nhân (#136) + biến thể edit (#144). HOOK-24 (vật neo CON SỐ “500 triệu”, p5) → “Nhưng có một chi tiết” → Dũng hiểu sai “bỏ khoán = hết thuế” (p3) → “Vậy thực sự là gì?” → 3 ý. Dòng thời gian: QUÝ TỰ KHAI ĐẦU TIÊN của cô Hoa (vai chị Hồng p10): đầu quý NQ 198, Luật QLT 108 (p1, p2; BRK-04 p3, p4) → tuần 2 Thảo với tờ báo cũ, ngưỡng 500 triệu (p5; BRK-08 100 → 200 → 500 triệu p6; p7) → tuần 4 nhóm giữa, tỷ lệ ăn uống, cô Hoa tự ước 5 bước (p8–p11; BRK-05) → tháng 2 xưởng Dũng trên 3 tỷ, “Thử nghĩ xem” (vai anh Tuấn p12–p14) → BRK-07 rehook → tháng 3 kỳ khai, hạn, cổng, eTax, sàn (p15, p16) → cuối quý Bác Bình: hoá đơn, phạt ½, tạm ngừng (vai cô Mai p17–p19), “Khoan đã!” (p19, p20) → hạn nộp quý khép vòng (p21) → tóm tắt + lưu ý #133. Nhân vật: Cô Hoa, Dũng (vai người hiểu sai p3 + anh Tuấn), Thảo, Bác Bình. Ca dao neo: “Sai một li, đi một dặm” → “đúng một con số, đỡ cả dặm đường”. Số chỉ từ bài: 500 triệu, 3 tỷ, NQ 198/2025/QH15 (17/5/2025, k6, k7 Đ10, 01/01/2026), Luật QLT 108/2025/QH15 (01/7/2026), 100 triệu (TT 40/2021), 200 triệu (Luật GTGT 2024), 10/12/2025, 3%, 1,5%, 17%, Đ7 Luật TNCN 2025, QĐ 3389, QĐ 3078, ngày 20, 01/CNKD, 01-2/BK-HĐKD, 1 tỷ, NĐ 254/2026, TT 91/2026, ½. Câu đố questions[7].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
