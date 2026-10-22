// law-directors-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-directors-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "law-corp-directors",
    "slug": "law-directors-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Làm thành viên HĐQT, giám đốc thì chịu trách nhiệm cá nhân đến đâu?",
    "series": "Ngồi ghế quản lý mà không mang rủi ro về nhà — trách nhiệm cá nhân của người quản lý doanh nghiệp"
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
          }
        ],
        "items": [
          {
            "id": "a-fl",
            "t": "illus",
            "name": "bouquet",
            "x": 1480,
            "y": 40,
            "size": 190,
            "at": "l1:flowers"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Không điều hành, không ký séc:",
            "x": 60,
            "y": 40,
            "size": 58,
            "at": "l2:run",
            "hl": [
              {
                "text": "không ký séc",
                "at": "l2:cheques"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 150,
            "w": 700,
            "h": 130,
            "at": "l3:safe",
            "stroke": 6
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Khỏi lo?",
            "x": 110,
            "y": 160,
            "size": 90,
            "at": "l3:safe+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 60,
            "y": 310,
            "w": 900,
            "h": 130,
            "at": "l3:still",
            "stroke": 6
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Vẫn chịu trách nhiệm?",
            "x": 110,
            "y": 320,
            "size": 84,
            "at": "l3:still+200",
            "color": "accent"
          },
          {
            "id": "a-1x",
            "t": "strike",
            "over": "a-1",
            "at": "l4:answer"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:hook"
          },
          {
            "id": "a-all",
            "t": "text",
            "text": "Điều 165: mọi thành viên HĐQT",
            "x": 60,
            "y": 480,
            "size": 52,
            "at": "l4:covers",
            "hl": [
              {
                "text": "mọi thành viên HĐQT",
                "at": "l4:every"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Luật Doanh nghiệp 2020, Điều 165",
            "x": 60,
            "y": 720,
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
          "say": "You've just joined a board of directors. Congratulations, and flowers everywhere.",
          "sub": "Bạn vừa vào Hội đồng quản trị. Chúc mừng, hoa tươi khắp phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. You don't run daily work, you never sign cheques. Any personal liability?",
          "sub": "Đoán nhanh: không điều hành, không ký séc. Có phải lo trách nhiệm cá nhân?",
          "keys": [
            "trách nhiệm cá nhân"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Safe, because that's the general director's job? Or still on the hook?",
          "sub": "Khỏi lo, vì đó là việc của tổng giám đốc? Hay vẫn dính?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Answer: still on the hook. Article one sixty-five covers every board member.",
          "sub": "Đáp án: vẫn dính. Điều 165 áp dụng cho mọi thành viên HĐQT, có điều hành hay không.",
          "keys": [
            "mọi thành viên HĐQT"
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "bouquet",
                "page-facing-up"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1",
            "caption": "8:00 thứ Hai · phòng Cô Hoa",
            "icon": "bouquet"
          },
          {
            "id": "a-house",
            "t": "text",
            "text": "Nhà riêng có bị kéo vào?",
            "x": 60,
            "y": 610,
            "size": 52,
            "at": "l3:house",
            "color": "coral",
            "hl": [
              {
                "text": "Nhà riêng",
                "at": "l5:house"
              }
            ]
          },
          {
            "id": "a-hs",
            "t": "illus",
            "name": "house-with-garden",
            "x": 720,
            "y": 590,
            "size": 110,
            "at": "l5:house"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Cô Hoa, a long-time sales director, just elected to the board of a manufacturing company.",
          "sub": "Đây là Cô Hoa, giám đốc kinh doanh lâu năm, vừa được bầu vào HĐQT một công ty cổ phần sản xuất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, the company's in-house lawyer and board secretary.",
          "sub": "Còn đây là Thảo, pháp chế của công ty, kiêm thư ký HĐQT."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, so many flowers. But honestly: could my own house get dragged in?",
          "sub": "Thảo này, hoa thì nhiều. Nhưng cô hỏi thật: nhà riêng của cô có bị kéo vào không?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Short answer: it can, if a manager breaches the duties.",
          "sub": "Câu ngắn: có thể, nếu người quản lý vi phạm nghĩa vụ ạ.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Flowers on the desk. And the house? Right behind the chair.",
          "sub": "Hoa thì trên bàn. Còn ngôi nhà? Ngay sau lưng chiếc ghế.",
          "keys": [
            "ngôi nhà"
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
          },
          {
            "at": "l3",
            "fit": [
              "b-m0",
              "b-m2"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Trách nhiệm cá nhân đến đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:far",
            "hl": [
              {
                "text": "đến đâu",
                "at": "l1:far"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: có ghế là mất nhà",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:lose",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:map"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một tấm bản đồ",
            "x": 2028,
            "y": 240,
            "size": 56,
            "at": "l2:map",
            "color": "accent",
            "hl": [
              {
                "text": "bản đồ",
                "at": "l2:map"
              }
            ]
          },
          {
            "id": "b-m0",
            "t": "box",
            "x": 2028,
            "y": 360,
            "w": 510,
            "h": 230,
            "at": "l3:three duties",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "b-mt0",
            "t": "text",
            "text": "3 nghĩa vụ",
            "x": 2058,
            "y": 380,
            "size": 54,
            "at": "l3:three duties+200",
            "color": "accent"
          },
          {
            "id": "b-mb0",
            "t": "text",
            "text": "cẩn trọng · trung thành · thông báo",
            "x": 2058,
            "y": 470,
            "size": 34,
            "at": "l3:three duties+500"
          },
          {
            "id": "b-m1",
            "t": "box",
            "x": 2578,
            "y": 360,
            "w": 510,
            "h": 230,
            "at": "l3:sources",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "b-mt1",
            "t": "text",
            "text": "3 nguồn rủi ro",
            "x": 2608,
            "y": 380,
            "size": 54,
            "at": "l3:sources+200",
            "color": "coral"
          },
          {
            "id": "b-mb1",
            "t": "text",
            "text": "bị kiện · lá phiếu · công ty",
            "x": 2608,
            "y": 470,
            "size": 34,
            "at": "l3:sources+500"
          },
          {
            "id": "b-m2",
            "t": "box",
            "x": 3128,
            "y": 360,
            "w": 510,
            "h": 230,
            "at": "l3:cushion",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "b-mt2",
            "t": "text",
            "text": "1 lớp đệm",
            "x": 3158,
            "y": 380,
            "size": 54,
            "at": "l3:cushion+200",
            "color": "accent"
          },
          {
            "id": "b-mb2",
            "t": "text",
            "text": "bảo hiểm D&O",
            "x": 3158,
            "y": 470,
            "size": 34,
            "at": "l3:cushion+500"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần: thứ Hai → thứ Hai",
            "x": 2028,
            "y": 640,
            "size": 48,
            "at": "l4:week",
            "hl": [
              {
                "text": "Một tuần",
                "at": "l4:week"
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
          "say": "So how far does personal liability go for board members and directors?",
          "sub": "Vậy thành viên HĐQT, giám đốc chịu trách nhiệm cá nhân đến đâu?",
          "keys": [
            "đến đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not: take a seat, lose your house. But a map you can read.",
          "sub": "Không phải: có ghế là mất nhà. Mà là một tấm bản đồ đọc được.",
          "keys": [
            "tấm bản đồ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three duties, three sources of personal risk, and one cushion.",
          "sub": "Ba nghĩa vụ, ba nguồn rủi ro cá nhân, và một lớp đệm.",
          "keys": [
            "ba nguồn rủi ro cá nhân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One week, Monday to Monday, Cô Hoa walks this map. Each stop leads to a deeper lesson.",
          "sub": "Một tuần, từ thứ Hai đến thứ Hai, Cô Hoa đi hết tấm bản đồ. Mỗi chặng dẫn sang một bài đào sâu."
        }
      ],
      "ref": "intro,p23"
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
            "text": "① Chiều thứ Hai · Ba nghĩa vụ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "closed-book",
                "page-facing-up"
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
            "at": "l1:opens",
            "caption": "Chiều thứ Hai · bàn Thảo",
            "icon": "closed-book"
          },
          {
            "id": "c-who",
            "t": "text",
            "text": "HĐQT · GĐ · TGĐ = người quản lý",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l2:managers",
            "hl": [
              {
                "text": "người quản lý",
                "at": "l2:managers"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "① Trung thực, cẩn trọng, tốt nhất",
            "x": 3996,
            "y": 240,
            "size": 44,
            "at": "l3:honestly",
            "color": "accent",
            "hl": [
              {
                "text": "cẩn trọng",
                "at": "l3:carefully"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "② Trung thành: không tư lợi",
            "x": 3996,
            "y": 320,
            "size": 44,
            "at": "l4:loyalty",
            "hl": [
              {
                "text": "Trung thành",
                "at": "l4:loyalty"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "③ Thông báo: DN mình, người liên quan",
            "x": 3996,
            "y": 400,
            "size": 40,
            "at": "l5:notify",
            "hl": [
              {
                "text": "Thông báo",
                "at": "l5:notify"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật Doanh nghiệp 2020, Điều 165",
            "x": 3996,
            "y": 480,
            "size": 28,
            "at": "l3:company",
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
          "say": "Stop one: Monday afternoon. Thảo opens the Enterprise Law of twenty twenty.",
          "sub": "Chặng một: chiều thứ Hai. Thảo mở Luật Doanh nghiệp 2020."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, board members, directors and general directors are all called managers.",
          "sub": "Thứ nhất, thành viên HĐQT, Giám đốc, Tổng giám đốc đều là người quản lý.",
          "keys": [
            "người quản lý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article one sixty-five: work honestly, carefully, and to your best, for the company's lawful interests.",
          "sub": "Điều 165: làm việc trung thực, cẩn trọng, tốt nhất, vì lợi ích hợp pháp tối đa của công ty.",
          "keys": [
            "trung thực, cẩn trọng, tốt nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Duty two: loyalty. Never use your position, information or company opportunities for yourself.",
          "sub": "Nghĩa vụ hai: trung thành. Không lạm dụng chức vụ, thông tin, cơ hội của công ty để tư lợi.",
          "keys": [
            "trung thành"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Duty three: notify. Tell the company about businesses you or related persons own.",
          "sub": "Nghĩa vụ ba: thông báo kịp thời về doanh nghiệp mà mình hoặc người có liên quan sở hữu.",
          "keys": [
            "thông báo"
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "c-71",
              "c-pay"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-71",
            "t": "text",
            "text": "Công ty TNHH: Điều 71, tương tự",
            "x": 3996,
            "y": 560,
            "size": 44,
            "at": "l1:seventy-one",
            "hl": [
              {
                "text": "Điều 71",
                "at": "l1:seventy-one"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Văn bản, trong 05 ngày làm việc",
            "x": 3996,
            "y": 625,
            "size": 40,
            "at": "l2:five",
            "color": "accent",
            "hl": [
              {
                "text": "05 ngày làm việc",
                "at": "l2:five"
              }
            ]
          },
          {
            "id": "c-pay",
            "t": "text",
            "text": "Nợ đến hạn → cấm tăng lương",
            "x": 3996,
            "y": 690,
            "size": 36,
            "at": "l3:pay rises",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Limited liability companies? Article seventy-one says much the same: honest, careful, loyal.",
          "sub": "Công ty TNHH? Điều 71 nói tương tự: trung thực, cẩn trọng, trung thành."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Notices about your own and related persons' stakes go in writing, within five working days.",
          "sub": "Thông báo phần vốn của mình và người có liên quan: bằng văn bản, trong 05 ngày làm việc.",
          "keys": [
            "05 ngày làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And no pay rises or bonuses while the company can't pay debts that are due?",
          "sub": "Còn không được tăng lương, trả thưởng khi công ty chưa trả nổi nợ đến hạn hả Thảo?",
          "keys": [
            "nợ đến hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Exactly, for the director. So a seat brings duties, executive or not.",
          "sub": "Đúng ạ, với Giám đốc. Vậy có ghế là có nghĩa vụ, điều hành hay không cũng vậy ạ."
        }
      ],
      "ref": "p3,p5"
    },
    {
      "id": "s05",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Có ghế là có nghĩa vụ",
        "hl": "có nghĩa vụ",
        "sub": "Không điều hành không có nghĩa là không chịu trách nhiệm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A seat comes with duties.",
          "sub": "Có ghế là có nghĩa vụ.",
          "keys": [
            "có nghĩa vụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not running things doesn't mean no liability. Your vote carries your name.",
          "sub": "Không điều hành không có nghĩa là không chịu trách nhiệm. Lá phiếu ghi tên bạn."
        }
      ],
      "ref": "p4,p5"
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
            "text": "② Thứ Ba · Bị kiện",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
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
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "balance-scale"
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
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "Thứ Ba · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Khoản 2 Điều 165:",
            "x": 5964,
            "y": 160,
            "size": 48,
            "at": "l2:clause two"
          },
          {
            "id": "d-ca",
            "t": "text",
            "text": "cá nhân hoặc liên đới",
            "x": 5964,
            "y": 230,
            "size": 54,
            "at": "l2:personally",
            "color": "accent",
            "hl": [
              {
                "text": "liên đới",
                "at": "l2:jointly"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "• đền bù lợi ích bị mất",
            "x": 5964,
            "y": 320,
            "size": 40,
            "at": "l3:lost"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "• trả lại lợi ích đã nhận",
            "x": 5964,
            "y": 375,
            "size": 40,
            "at": "l3:return"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "• bồi thường toàn bộ thiệt hại",
            "x": 5964,
            "y": 430,
            "size": 40,
            "at": "l3:compensate"
          },
          {
            "id": "d-own",
            "t": "text",
            "text": "→ tài sản của chính mình",
            "x": 5964,
            "y": 500,
            "size": 46,
            "at": "l4:own",
            "color": "coral",
            "hl": [
              {
                "text": "của chính mình",
                "at": "l4:own"
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
          "say": "Stop two: Tuesday. Cô Hoa has coffee with Uncle Bình, an old friend and a veteran lawyer.",
          "sub": "Chặng hai: thứ Ba. Cô Hoa cà phê với Bác Bình, bạn cũ, luật sư lâu năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Easy now, read the article first. Clause two: a manager who breaches is liable personally, or jointly.",
          "sub": "Từ từ, đọc điều luật đã. Khoản 2 Điều 165: vi phạm thì chịu trách nhiệm cá nhân hoặc liên đới.",
          "keys": [
            "cá nhân hoặc liên đới"
          ],
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Make up lost benefits, return benefits received, compensate all damage, to the company and third parties.",
          "sub": "Đền bù lợi ích bị mất, trả lại lợi ích đã nhận, bồi thường toàn bộ thiệt hại cho công ty và bên thứ ba."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Civil liability, paid from the manager's own pocket.",
          "sub": "Đây là trách nhiệm dân sự, đòi bằng tài sản của chính người quản lý.",
          "keys": [
            "tài sản của chính người quản lý"
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
      "ref": "p7"
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
              "d-166",
              "d-72"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-who",
            "t": "text",
            "text": "Ai kiện?",
            "x": 5964,
            "y": 575,
            "size": 44,
            "at": "l1:who",
            "color": "coral"
          },
          {
            "id": "d-166",
            "t": "text",
            "text": "Điều 166: ≥ 01% cổ phần",
            "x": 6184,
            "y": 575,
            "size": 40,
            "at": "l2:one percent",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 01%",
                "at": "l2:one percent"
              }
            ]
          },
          {
            "id": "d-72",
            "t": "text",
            "text": "TNHH: Điều 72, thành viên",
            "x": 5964,
            "y": 645,
            "size": 36,
            "at": "l3:seventy-two"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Luật Doanh nghiệp 2020, Điều 165, 166, 72",
            "x": 5964,
            "y": 725,
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
          "who": "hoa",
          "say": "But who would sue me? The company is on my side.",
          "sub": "Nhưng ai kiện cô? Công ty đứng về phía cô mà.",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Article one sixty-six: shareholders holding at least one percent of the ordinary shares.",
          "sub": "Điều 166: cổ đông hoặc nhóm cổ đông sở hữu ít nhất 01% tổng số cổ phần phổ thông.",
          "keys": [
            "ít nhất 01%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Alone, or in the company's name. In limited companies, Article seventy-two gives members the same right.",
          "sub": "Tự mình, hoặc nhân danh công ty. Ở công ty TNHH, Điều 72 cho thành viên quyền tương tự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When and why they sue gets its own lesson, lesson two.",
          "sub": "Kiện khi nào, vì sao: có bài riêng, bài 2."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 1,
        "suffix": "%",
        "label": "cổ phần phổ thông là đủ quyền khởi kiện",
        "illus": "busts-in-silhouette"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One percent. A low bar.",
          "sub": "Một phần trăm. Ngưỡng khá thấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Even a small group of shareholders qualifies.",
          "sub": "Một nhóm cổ đông nhỏ cũng đủ điều kiện.",
          "keys": [
            "nhóm cổ đông nhỏ"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Lá phiếu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "money-bag",
                "page-facing-up"
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
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:urgent",
            "caption": "Thứ Tư · họp HĐQT gấp",
            "icon": "money-bag"
          },
          {
            "id": "e-loan",
            "t": "text",
            "text": "Khoản vay có vẻ rủi ro",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l3:risky",
            "color": "coral"
          },
          {
            "id": "e-hand",
            "t": "illus",
            "name": "raised-hand",
            "x": 7932,
            "y": 240,
            "size": 110,
            "at": "l3:hand"
          },
          {
            "id": "e-later",
            "t": "text",
            "text": "“nói riêng sau”",
            "x": 8062,
            "y": 265,
            "size": 46,
            "at": "l3:later",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Wednesday, an urgent board meeting. Meet Dũng, the young general director. Always fast.",
          "sub": "Chặng ba: thứ Tư, họp HĐQT gấp. Đây là Dũng, Tổng giám đốc trẻ, việc gì cũng nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "A loan to a partner. We're short on time. All in favour? Okay, let's go!",
          "sub": "Cho đối tác vay một khoản. Gấp lắm rồi. Ai tán thành? Ok, làm luôn!",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The loan looks risky to Cô Hoa. But every hand goes up, so hers does too. She'll speak privately later.",
          "sub": "Cô Hoa thấy khoản vay có vẻ rủi ro. Nhưng ai cũng giơ tay, cô ngại nên giơ theo, định “nói riêng sau”."
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Tư · phòng họp HĐQT",
        "actors": [
          {
            "id": "hoa",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "dung",
            "side": "center",
            "pose": "explain"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Giơ tay vì ngại, định “nói riêng sau”",
          "why": "Biên bản ghi tán thành; khoản vay mất trắng thì người tán thành cùng liên đới chịu trách nhiệm.",
          "rule": "Ý kiến chỉ bảo vệ bạn khi nằm trong biên bản"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Fine, I'm in favour. I'll mention my worries to Dũng later.",
          "sub": "Thôi, cô tán thành. Lo lắng gì cô nói riêng với Dũng sau.",
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
          "say": "The minutes now say: Cô Hoa, in favour. Half a year later, the loan is lost completely.",
          "sub": "Biên bản giờ ghi: Cô Hoa, tán thành. Nửa năm sau, khoản vay mất trắng.",
          "keys": [
            "mất trắng"
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
          "who": "hoa",
          "say": "I don't approve this loan yet. Thảo, please put my opinion in the minutes.",
          "sub": "Cô chưa tán thành khoản vay này. Thảo, ghi ý kiến của cô vào biên bản nha!",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Noted. I'll put it in the minutes.",
          "sub": "Dạ. Để em ghi vào biên bản ạ.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13"
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
            "fit": [
              "e-153",
              "e-no"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-153",
            "t": "text",
            "text": "Khoản 4 Điều 153:",
            "x": 7932,
            "y": 380,
            "size": 42,
            "at": "l1:clause four"
          },
          {
            "id": "e-yes",
            "t": "text",
            "text": "Tán thành → cùng liên đới",
            "x": 7932,
            "y": 435,
            "size": 46,
            "at": "l2:approved",
            "color": "coral",
            "hl": [
              {
                "text": "cùng liên đới",
                "at": "l2:jointly"
              }
            ]
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Phản đối → được miễn trừ",
            "x": 7932,
            "y": 500,
            "size": 46,
            "at": "l2:exempt",
            "color": "accent",
            "hl": [
              {
                "text": "được miễn trừ",
                "at": "l2:exempt"
              }
            ]
          },
          {
            "id": "e-158",
            "t": "text",
            "text": "Điều 158: ai tán thành, ai không",
            "x": 7932,
            "y": 570,
            "size": 36,
            "at": "l3:fifty-eight"
          },
          {
            "id": "e-cam",
            "t": "text",
            "text": "Biên bản = camera hành trình",
            "x": 7932,
            "y": 625,
            "size": 42,
            "at": "l4:dashcam",
            "hl": [
              {
                "text": "camera hành trình",
                "at": "l4:dashcam"
              }
            ]
          },
          {
            "id": "e-wind",
            "t": "text",
            "text": "Lời nói gió bay",
            "x": 7932,
            "y": 690,
            "size": 44,
            "at": "l4:wind",
            "color": "accent"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật Doanh nghiệp 2020, Điều 153, 158",
            "x": 8772,
            "y": 725,
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
          "say": "Why does it matter? Article one fifty-three, clause four: an unlawful resolution that damages the company.",
          "sub": "Vì sao quan trọng? Khoản 4 Điều 153: nghị quyết HĐQT trái luật, trái Điều lệ, gây thiệt hại cho công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Members who approved are jointly and personally liable. Those who opposed are exempt.",
          "sub": "Thành viên tán thành cùng liên đới chịu trách nhiệm cá nhân. Thành viên phản đối được miễn trừ.",
          "keys": [
            "được miễn trừ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And Article one fifty-eight: the minutes record who approved, who didn't, and who gave no opinion.",
          "sub": "Điều 158: biên bản ghi rõ ai tán thành, ai không tán thành, ai không có ý kiến ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Minutes are the boardroom's dashcam. Private words after the meeting? Gone with the wind.",
          "sub": "Biên bản là camera hành trình của phòng họp. Còn lời nói riêng sau họp? Lời nói gió bay.",
          "keys": [
            "Lời nói gió bay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "How to dissent and record it: lesson three.",
          "sub": "Cách biểu quyết không tán thành, ghi ý kiến, lưu hồ sơ: bài 3."
        }
      ],
      "ref": "p10,p11,p13,p14"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Công ty vi phạm, lãnh đạo có bị kéo theo?",
        "illus": "thinking-face"
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
          "say": "If the company itself breaks the law, are its leaders dragged along?",
          "sub": "Nếu chính công ty vi phạm, lãnh đạo có bị kéo theo?",
          "keys": [
            "bị kéo theo"
          ]
        }
      ],
      "ref": "p15"
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
            "text": "④ Thứ Năm · Công ty vi phạm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "classical-building"
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
            "at": "l1:drops",
            "caption": "Thứ Năm · phòng Cô Hoa",
            "icon": "classical-building"
          },
          {
            "id": "f-dung",
            "t": "text",
            "text": "“Công ty chịu, mình yên!”",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l2:safe",
            "color": "coral"
          },
          {
            "id": "f-75",
            "t": "text",
            "text": "Điều 75 BLHS: pháp nhân chịu khi",
            "x": 60,
            "y": 1340,
            "size": 42,
            "at": "l3:seventy-five"
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "nhân danh · vì lợi ích",
            "x": 90,
            "y": 1405,
            "size": 40,
            "at": "l3:name"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "chỉ đạo, chấp thuận · thời hiệu",
            "x": 90,
            "y": 1465,
            "size": 36,
            "at": "l4:direction"
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "Khoản 2: không loại trừ cá nhân",
            "x": 60,
            "y": 1540,
            "size": 46,
            "at": "l5:does not",
            "color": "accent",
            "hl": [
              {
                "text": "không loại trừ",
                "at": "l5:exclude"
              }
            ]
          },
          {
            "id": "f-dx",
            "t": "strike",
            "over": "f-dung",
            "at": "l5:exclude"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Thursday. Dũng drops by Cô Hoa's office, cheerful as ever.",
          "sub": "Chặng bốn: thứ Năm. Dũng ghé phòng Cô Hoa, vui như mọi khi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "If the company breaks a rule, the company pays. We're safe. Okay!",
          "sub": "Công ty vi phạm thì công ty chịu. Mình yên! Ok!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Criminal Code, Article seventy-five: a company is liable only for acts in its name, for its benefit,",
          "sub": "Điều 75 Bộ luật Hình sự 2015: pháp nhân thương mại chỉ chịu khi hành vi nhân danh, vì lợi ích pháp nhân,"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "with its direction or approval, and within the time limit.",
          "sub": "có sự chỉ đạo, điều hành hoặc chấp thuận của pháp nhân, và chưa hết thời hiệu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And clause two: the company's liability does not exclude individual criminal liability.",
          "sub": "Và khoản 2: trách nhiệm của pháp nhân không loại trừ trách nhiệm hình sự của cá nhân.",
          "keys": [
            "không loại trừ"
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
            "fit": [
              "f-198",
              "f-fp"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-198",
            "t": "text",
            "text": "NQ 198/2025: tách người, công ty",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l1:separates",
            "hl": [
              {
                "text": "tách người",
                "at": "l1:separates"
              }
            ]
          },
          {
            "id": "f-as",
            "t": "text",
            "text": "ưu tiên dân sự, hành chính",
            "x": 60,
            "y": 1710,
            "size": 34,
            "at": "l2:civil",
            "color": "muted"
          },
          {
            "id": "f-mg",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 760,
            "y": 1690,
            "size": 100,
            "at": "l3:fingerprints"
          },
          {
            "id": "f-fp",
            "t": "text",
            "text": "Dấu vân tay của bạn ở đâu?",
            "x": 60,
            "y": 1770,
            "size": 40,
            "at": "l3:fingerprints",
            "color": "coral",
            "hl": [
              {
                "text": "Dấu vân tay",
                "at": "l3:fingerprints"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "BLHS 2015, Điều 75 · Nghị quyết 198/2025/QH15, Điều 5",
            "x": 900,
            "y": 1815,
            "size": 26,
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
          "say": "Good news: Resolution one ninety-eight of twenty twenty-five separates company liability from personal liability.",
          "sub": "Tin vui: Nghị quyết 198/2025/QH15 đặt nguyên tắc tách trách nhiệm pháp nhân với trách nhiệm cá nhân.",
          "keys": [
            "tách trách nhiệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It prefers civil, economic and administrative measures, and separates company assets from managers' assets.",
          "sub": "Ưu tiên biện pháp dân sự, kinh tế, hành chính; phân biệt tài sản doanh nghiệp với tài sản người quản lý."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But can you be separated? That depends on your fingerprints on the wrong decision.",
          "sub": "Nhưng tách được hay không còn tuỳ: dấu vân tay của bạn có trên quyết định sai không.",
          "keys": [
            "dấu vân tay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The general picture waits in lesson four.",
          "sub": "Bức tranh tổng quát nằm ở bài 4."
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
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
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tối thứ Sáu · Lớp đệm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "umbrella-with-rain-drops",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:reads",
            "caption": "Tối thứ Sáu · nhà Cô Hoa",
            "icon": "umbrella-with-rain-drops"
          },
          {
            "id": "g-do",
            "t": "text",
            "text": "Bảo hiểm D&O, khi bị kiện bởi:",
            "x": 2028,
            "y": 1250,
            "size": 42,
            "at": "l2:protects",
            "hl": [
              {
                "text": "D&O",
                "at": "l1:insurance"
              }
            ]
          },
          {
            "id": "g-who",
            "t": "text",
            "text": "cổ đông · khách hàng · cơ quan",
            "x": 2058,
            "y": 1315,
            "size": 40,
            "at": "l2:shareholders",
            "color": "muted"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "• tiền bồi thường",
            "x": 2028,
            "y": 1390,
            "size": 42,
            "at": "l3:damages"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "• chi phí biện hộ",
            "x": 2028,
            "y": 1450,
            "size": 42,
            "at": "l3:defence",
            "color": "accent",
            "hl": [
              {
                "text": "chi phí biện hộ",
                "at": "l3:defence"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "• hoàn trả khoản đã chi thay",
            "x": 2028,
            "y": 1510,
            "size": 42,
            "at": "l3:repays"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Friday evening. Cô Hoa reads about a cushion: D and O insurance, for directors and officers.",
          "sub": "Chặng năm: tối thứ Sáu. Cô Hoa đọc về lớp đệm: bảo hiểm trách nhiệm giám đốc và cán bộ quản lý, D&O.",
          "keys": [
            "D&O"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It protects managers when shareholders, customers or regulators bring claims.",
          "sub": "Nó bảo vệ người quản lý khi cổ đông, khách hàng hay cơ quan quản lý khiếu kiện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It usually covers damages, defence costs, and repays the company for what it paid on your behalf.",
          "sub": "Thường gồm tiền bồi thường, chi phí biện hộ, và hoàn trả cho doanh nghiệp khoản đã chi thay người quản lý.",
          "keys": [
            "chi phí biện hộ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So I buy it, and then I can sleep soundly?",
          "sub": "Vậy mua rồi là kê cao gối ngủ hả?",
          "face": "happy"
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Có bảo hiểm thì duyệt gì cũng yên",
        "right": "Loại trừ: không trung thực, trục lợi, biết từ trước",
        "wrongIllus": "umbrella-with-rain-drops",
        "rightIllus": "warning"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Insured, so approve anything?",
          "sub": "Có bảo hiểm thì duyệt gì cũng yên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Exclusions: dishonesty, self-dealing, claims known before.",
          "sub": "Không. Loại trừ: không trung thực, trục lợi, yêu cầu đã biết từ trước.",
          "keys": [
            "Loại trừ"
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
            "fit": [
              "g-coat",
              "g-5"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l2:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-coat",
            "t": "text",
            "text": "Áo mưa, không phải áo giáp",
            "x": 2028,
            "y": 1690,
            "size": 54,
            "at": "l1:raincoat",
            "color": "coral",
            "hl": [
              {
                "text": "không phải áo giáp",
                "at": "l1:armour"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "→ Có đáng mua? Bài 5",
            "x": 2028,
            "y": 1780,
            "size": 40,
            "at": "l2:worth",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Các bài phân tích công khai về bảo hiểm D&O",
            "x": 2868,
            "y": 1790,
            "size": 26,
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
          "say": "Insurance is a raincoat, not armour. It can't replace doing your duty.",
          "sub": "Bảo hiểm là áo mưa, không phải áo giáp. Không thay được việc làm đúng nghĩa vụ.",
          "keys": [
            "không phải áo giáp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Worth buying? What to ask before taking a seat? Lesson five.",
          "sub": "Có đáng mua không, hỏi gì trước khi nhận ghế: bài 5."
        }
      ],
      "ref": "p20"
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
            "text": "⑥ Thứ Bảy · Bốn câu tự hỏi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six",
            "hl": [
              {
                "text": "Bốn câu",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "h-nb",
            "t": "illus",
            "name": "notebook",
            "x": 5386,
            "y": 1130,
            "size": 180,
            "at": "l1:writes"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1280,
            "w": 46,
            "h": 46,
            "at": "l2:read",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1262,
            "size": 58,
            "at": "l2:read+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đã đọc đủ tài liệu?",
            "x": 4066,
            "y": 1272,
            "size": 54,
            "at": "l2:read+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l2:interest",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1382,
            "size": 58,
            "at": "l2:interest+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Mình có lợi ích gì?",
            "x": 4066,
            "y": 1392,
            "size": 54,
            "at": "l2:interest+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1520,
            "w": 46,
            "h": 46,
            "at": "l3:disagree",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1502,
            "size": 58,
            "at": "l3:disagree+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Ý kiến vào biên bản chưa?",
            "x": 4066,
            "y": 1512,
            "size": 54,
            "at": "l3:disagree+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1640,
            "w": 46,
            "h": 46,
            "at": "l3:sues",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1622,
            "size": 58,
            "at": "l3:sues+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Nếu sai, ai kiện ai?",
            "x": 4066,
            "y": 1632,
            "size": 54,
            "at": "l3:sues+200"
          },
          {
            "id": "h-sum",
            "t": "text",
            "text": "đọc · công khai · ghi · lường trước",
            "x": 3996,
            "y": 1770,
            "size": 44,
            "at": "l4:read",
            "color": "accent",
            "hl": [
              {
                "text": "ghi",
                "at": "l4:record"
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
          "say": "Stop six: Saturday. Cô Hoa writes four questions to ask herself before every meeting.",
          "sub": "Chặng sáu: thứ Bảy. Cô Hoa viết bốn câu tự hỏi trước mỗi cuộc họp.",
          "keys": [
            "bốn câu tự hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "One: have I read all the papers? Two: do I have any interest in this?",
          "sub": "Một: mình đã đọc đủ tài liệu chưa? Hai: mình có lợi ích gì trong việc này không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Three: if I disagree, is it in the minutes? Four: if it goes wrong, who sues whom?",
          "sub": "Ba: không đồng ý thì ý kiến đã vào biên bản chưa? Bốn: nếu sai, ai sẽ kiện và kiện ai?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Read, disclose, record, foresee. Four short questions hold the whole series.",
          "sub": "Đọc, công khai lợi ích, ghi ý kiến, lường trước người kiện. Bốn câu gói cả chuỗi.",
          "keys": [
            "Bốn câu gói cả chuỗi"
          ]
        }
      ],
      "ref": "p21,p22"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật · Lộ trình chuỗi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:route"
          },
          {
            "id": "i-b0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 510,
            "h": 190,
            "at": "l2:one",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "i-a0",
            "t": "text",
            "text": "Bài 1",
            "x": 5994,
            "y": 1275,
            "size": 50,
            "at": "l2:one+200",
            "color": "accent"
          },
          {
            "id": "i-d0",
            "t": "text",
            "text": "cẩn trọng trong cuộc họp",
            "x": 5994,
            "y": 1355,
            "size": 36,
            "at": "l2:one+400"
          },
          {
            "id": "i-b1",
            "t": "box",
            "x": 6514,
            "y": 1260,
            "w": 510,
            "h": 190,
            "at": "l2:two",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-a1",
            "t": "text",
            "text": "Bài 2",
            "x": 6544,
            "y": 1275,
            "size": 50,
            "at": "l2:two+200",
            "color": "ink"
          },
          {
            "id": "i-d1",
            "t": "text",
            "text": "cổ đông kiện khi nào",
            "x": 6544,
            "y": 1355,
            "size": 36,
            "at": "l2:two+400"
          },
          {
            "id": "i-b2",
            "t": "box",
            "x": 7064,
            "y": 1260,
            "w": 510,
            "h": 190,
            "at": "l3:three",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-a2",
            "t": "text",
            "text": "Bài 3",
            "x": 7094,
            "y": 1275,
            "size": 50,
            "at": "l3:three+200",
            "color": "ink"
          },
          {
            "id": "i-d2",
            "t": "text",
            "text": "ghi ý kiến phản đối",
            "x": 7094,
            "y": 1355,
            "size": 36,
            "at": "l3:three+400"
          },
          {
            "id": "i-b3",
            "t": "box",
            "x": 5964,
            "y": 1490,
            "w": 510,
            "h": 190,
            "at": "l3:four",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-a3",
            "t": "text",
            "text": "Bài 4",
            "x": 5994,
            "y": 1505,
            "size": 50,
            "at": "l3:four+200",
            "color": "ink"
          },
          {
            "id": "i-d3",
            "t": "text",
            "text": "công ty vi phạm",
            "x": 5994,
            "y": 1585,
            "size": 36,
            "at": "l3:four+400"
          },
          {
            "id": "i-b4",
            "t": "box",
            "x": 6514,
            "y": 1490,
            "w": 510,
            "h": 190,
            "at": "l3:five",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-a4",
            "t": "text",
            "text": "Bài 5",
            "x": 6544,
            "y": 1505,
            "size": 50,
            "at": "l3:five+200",
            "color": "ink"
          },
          {
            "id": "i-d4",
            "t": "text",
            "text": "bảo hiểm, bồi hoàn",
            "x": 6544,
            "y": 1585,
            "size": 36,
            "at": "l3:five+400"
          },
          {
            "id": "i-rel",
            "t": "text",
            "text": "Giao dịch liên quan → chuỗi riêng",
            "x": 7064,
            "y": 1730,
            "size": 30,
            "at": "l4:related",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday: the route for the whole series.",
          "sub": "Chủ nhật: lộ trình của cả chuỗi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lesson one: duties inside a meeting. Lesson two: when shareholders can sue.",
          "sub": "Bài 1: nghĩa vụ trong một cuộc họp. Bài 2: cổ đông kiện khi nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson three: recording dissent. Four: company violations. Five: insurance and indemnity.",
          "sub": "Bài 3: ghi ý kiến phản đối. Bài 4: công ty vi phạm. Bài 5: bảo hiểm và bồi hoàn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Related-party deals get their own series, on transactions inside a group.",
          "sub": "Giao dịch với người có liên quan có chuỗi riêng, về giao dịch trong cùng tập đoàn."
        }
      ],
      "ref": "p23,p6,p9,p14,p18,p20"
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
            "text": "8:00 thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
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
                "wilted-flower",
                "notebook"
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
            "at": "l1:same",
            "caption": "8:00 thứ Hai · trước cuộc họp đầu tiên",
            "icon": "notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Không điều hành = khỏi lo?",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l4:run",
            "color": "muted"
          },
          {
            "id": "j-1x",
            "t": "strike",
            "over": "j-1",
            "at": "l4:no"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Có ghế là có nghĩa vụ",
            "x": 7932,
            "y": 1350,
            "size": 60,
            "at": "l4:seat",
            "color": "accent",
            "hl": [
              {
                "text": "có nghĩa vụ",
                "at": "l4:duties"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Lời nói gió bay,",
            "x": 7932,
            "y": 1460,
            "size": 46,
            "at": "l4:words"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "biên bản ở lại",
            "x": 7932,
            "y": 1530,
            "size": 56,
            "at": "l4:minutes",
            "color": "accent",
            "hl": [
              {
                "text": "biên bản ở lại",
                "at": "l4:stay"
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
          "say": "Monday again, eight a.m. Same office, same flowers, a little tired now.",
          "sub": "Lại 8 giờ sáng thứ Hai. Vẫn căn phòng ấy, bó hoa ấy, đã hơi héo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, papers read, four questions ready. If I disagree, it goes in the minutes!",
          "sub": "Thảo, tài liệu cô đọc rồi, bốn câu hỏi sẵn rồi. Cô không đồng ý thì ghi vào biên bản nha!",
          "face": "happy",
          "to": "thao"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Of course. I'll put it in the minutes.",
          "sub": "Dạ. Để em ghi vào biên bản ạ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Safe because you don't run things? No. A seat brings duties. Words fly away; minutes stay.",
          "sub": "Không điều hành là khỏi lo? Không. Có ghế là có nghĩa vụ. Lời nói gió bay, biên bản ở lại.",
          "keys": [
            "biên bản ở lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "outro,p4,p5"
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
            "ms": 1400
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 5496,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 30,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ. Quy định có thể thay đổi — kiểm lại với cơ quan/chuyên gia.",
            "x": 7932,
            "y": 1790,
            "size": 26,
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
          "say": "Step back. Every seat comes with three duties.",
          "sub": "Lùi lại. Ghế nào cũng kèm ba nghĩa vụ.",
          "keys": [
            "ba nghĩa vụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your vote lives in the minutes.",
          "sub": "Lá phiếu của bạn sống trong biên bản.",
          "keys": [
            "trong biên bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And insurance is a raincoat, not armour.",
          "sub": "Và bảo hiểm là áo mưa, không phải áo giáp.",
          "keys": [
            "áo mưa"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p1,p11,p20"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "An independent board member says liability belongs only to the CEO, how should you respond?",
        "options": [
          "Independent members are fully protected because they never sign cheques",
          "Board member duties apply whether or not the member runs daily operations",
          "Only members who own shares can be liable for board decisions"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "ballot-box-with-ballot",
        "why": "Bài chỉ ra Điều 165 áp dụng cho cả thành viên HĐQT. Không điều hành không có nghĩa là không có nghĩa vụ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An independent board member says liability belongs only to the CEO. How should you respond?",
          "sub": "Một thành viên HĐQT độc lập nói trách nhiệm là của tổng giám đốc. Bạn đáp thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Board member duties apply whether or not the member runs daily operations.",
          "sub": "Nghĩa vụ áp dụng cho thành viên HĐQT, dù có điều hành hay không."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Article one sixty-five: every seat, every vote, a name in the minutes.",
          "sub": "Điều 165: ghế nào cũng có nghĩa vụ, lá phiếu nào cũng có tên trong biên bản."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[6]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Trước cuộc họp tới: viết bốn câu tự hỏi",
        "sub": "Rồi xem bài 1: cẩn trọng trong một cuộc họp"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before your next meeting, write your four questions. Then watch lesson one.",
          "sub": "Trước cuộc họp tới, viết bốn câu tự hỏi. Rồi xem bài 1: nghĩa vụ cẩn trọng trong một cuộc họp.",
          "face": "laugh",
          "keys": [
            "bốn câu tự hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For learning only, not advice for a specific case. Rules can change; check before you apply them.",
          "sub": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Quy định có thể thay đổi, hãy kiểm lại trước khi áp dụng."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-21: đoán sai “không điều hành, không ký séc thì khỏi lo?” (p4) → lật ngay bằng Điều 165, khép vòng ở J. Dòng thời gian: một tuần đầu Cô Hoa nhận ghế HĐQT — A 8:00 thứ Hai bó hoa + câu hỏi nhà riêng, B câu hỏi chính + bản đồ 3·3·1, C ① chiều thứ Hai ba nghĩa vụ (p1–p3) + BRK-02 'Có ghế là có nghĩa vụ' (p4–p5), D ② thứ Ba Bác Bình: bị kiện (p7–p9) + BRK-03 1%, E ③ thứ Tư họp gấp, Dũng xin duyệt khoản vay → Khoan đã! Cô Hoa (vai anh Minh p12) giơ tay vì ngại → Điều 153, 158 (p10–p14), BRK-07 rehook, F ④ thứ Năm công ty vi phạm: Điều 75 BLHS, NQ 198/2025 (p15–p18), G ⑤ tối thứ Sáu D&O (p19) + BRK-04 loại trừ (p20), H ⑥ thứ Bảy bốn câu tự hỏi (Cô Hoa vai chị Lan p21–p22), I Chủ nhật lộ trình chuỗi (p23), J 8:00 thứ Hai tuần sau khép vòng, tóm tắt lùi xa. Tục ngữ neo: 'Lời nói gió bay'. Số/điều chỉ từ bài: LDN 2020 Điều 71, 72, 153 (khoản 4), 158, 165 (khoản 2), 166 (01%); 05 ngày làm việc; BLHS 2015 Điều 75; NQ 198/2025/QH15. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[6].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
