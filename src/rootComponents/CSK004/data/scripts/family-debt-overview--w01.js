// family-debt-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "family-debt-overview--w01",
  "unit": {
    "audience": "families-in-debt-trouble",
    "slug": "family-debt-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Gia đình có con nhỏ, đang gánh nhiều khoản vay: gỡ nợ mà vẫn lo được cho con thế nào?",
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
              "a-cal"
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
            "id": "a-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 60,
            "y": 70,
            "size": 200,
            "at": "l1"
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Lịch dán tủ lạnh",
            "x": 300,
            "y": 100,
            "size": 72,
            "at": "l1:calendar"
          },
          {
            "id": "a-d1",
            "t": "text",
            "text": "• Trả góp căn hộ",
            "x": 60,
            "y": 320,
            "size": 46,
            "at": "l2:apartment",
            "color": "coral"
          },
          {
            "id": "a-d2",
            "t": "text",
            "text": "• Trả góp xe",
            "x": 60,
            "y": 390,
            "size": 46,
            "at": "l2:car",
            "color": "coral"
          },
          {
            "id": "a-d3",
            "t": "text",
            "text": "• Vay tiêu dùng",
            "x": 60,
            "y": 460,
            "size": 46,
            "at": "l2:consumer",
            "color": "coral"
          },
          {
            "id": "a-d4",
            "t": "text",
            "text": "• Dư nợ thẻ",
            "x": 60,
            "y": 530,
            "size": 46,
            "at": "l2:credit card",
            "color": "coral"
          },
          {
            "id": "a-d5",
            "t": "text",
            "text": "• Vay hộ em trai",
            "x": 60,
            "y": 600,
            "size": 46,
            "at": "l3:brother",
            "color": "coral",
            "hl": [
              {
                "text": "Vay hộ",
                "at": "l3:loan"
              }
            ]
          },
          {
            "id": "a-c1",
            "t": "text",
            "text": "Học phí",
            "x": 520,
            "y": 340,
            "size": 46,
            "at": "l4:school",
            "color": "accent"
          },
          {
            "id": "a-c2",
            "t": "text",
            "text": "Tiền sữa",
            "x": 520,
            "y": 440,
            "size": 46,
            "at": "l4:milk",
            "color": "accent"
          },
          {
            "id": "a-c3",
            "t": "text",
            "text": "Khám bệnh",
            "x": 520,
            "y": 540,
            "size": 46,
            "at": "l4:doctor",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A fridge calendar. Five days circled in red.",
          "sub": "Một tờ lịch dán tủ lạnh. Năm ngày khoanh đỏ.",
          "keys": [
            "Năm ngày khoanh đỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The apartment, the car, a consumer loan, a credit card.",
          "sub": "Trả góp căn hộ, trả góp xe, vay tiêu dùng, thẻ tín dụng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And one loan in your name, taken for your younger brother.",
          "sub": "Và một khoản đứng tên mình, vay hộ em trai.",
          "keys": [
            "vay hộ em trai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And squeezed in between: school fees, milk, the doctor.",
          "sub": "Chen giữa: học phí, tiền sữa, tiền khám bệnh."
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "spiral-calendar",
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Đầu tháng · bên tủ lạnh",
            "icon": "spiral-calendar"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Thuận vợ thuận chồng,",
            "x": 920,
            "y": 640,
            "size": 44,
            "at": "l5:agree",
            "color": "accent",
            "hl": [
              {
                "text": "Thuận vợ thuận chồng",
                "at": "l5:agree"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "tát biển Đông cũng cạn”",
            "x": 960,
            "y": 700,
            "size": 44,
            "at": "l5:East Sea",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Whose calendar? Meet Thảo, office worker and queen of to do lists.",
          "sub": "Lịch của ai? Đây là Thảo, dân văn phòng, nữ hoàng lập danh sách.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, her husband, a salesman who says: okay, let's go!",
          "sub": "Và Dũng, chồng Thảo, dân kinh doanh: “Ok, làm luôn!”",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Every circle comes with its own phone number. I jump whenever it rings.",
          "sub": "Mỗi vòng đỏ một số điện thoại gọi tới. Chuông reo là em giật mình.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Relax. We pay whoever shouts the loudest first. Done!",
          "sub": "Bình tĩnh. Ai đòi gắt nhất thì trả trước. Xong!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: when husband and wife agree, they can scoop the East Sea dry.",
          "sub": "Ông bà dặn: “Thuận vợ thuận chồng, tát biển Đông cũng cạn.”",
          "keys": [
            "Thuận vợ thuận chồng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "These two? Right now they can't even agree on a calendar.",
          "sub": "Còn hai người này? Hiện giờ chưa thuận nổi… một tờ lịch."
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
            "text": "Gỡ nợ mà vẫn lo cho con?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:still care",
            "hl": [
              {
                "text": "lo cho con",
                "at": "l1:kids"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Tiền nợ, tiền con: chung nồi",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:same pot",
            "hl": [
              {
                "text": "chung nồi",
                "at": "l2:pot"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Trễ hạn → lãi → cuộc gọi → căng thẳng",
            "x": 2028,
            "y": 260,
            "size": 42,
            "at": "l3:late"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: bài toán tiền",
            "x": 2028,
            "y": 430,
            "size": 46,
            "at": "l5:money puzzle",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:keeping"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: nhà vẫn là nhà",
            "x": 2028,
            "y": 510,
            "size": 56,
            "at": "l5:keeping",
            "color": "accent",
            "hl": [
              {
                "text": "nhà vẫn là nhà",
                "at": "l5:home a home"
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
          "say": "So the big question: how do you get out of debt and still care for the kids?",
          "sub": "Vậy câu hỏi lớn: gỡ nợ thế nào mà vẫn lo được cho con?",
          "keys": [
            "vẫn lo được cho con"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With small children, debt payments and child money come from the same pot.",
          "sub": "Khi con còn nhỏ, tiền trả nợ và tiền nuôi con múc chung một nồi.",
          "keys": [
            "chung một nồi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One late payment brings higher interest, collection calls, then tension between husband and wife.",
          "sub": "Một kỳ trễ hạn kéo theo lãi cao hơn, cuộc gọi đòi nợ, rồi vợ chồng căng thẳng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So this is not just a money puzzle. It's keeping home a home.",
          "sub": "Nên gỡ nợ không chỉ là bài toán tiền, mà là giữ cho nhà vẫn là nhà.",
          "keys": [
            "giữ cho nhà vẫn là nhà"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s03",
      "module": "BRK-07",
      "data": {
        "question": "Ai đòi gắt nhất thì trả trước?",
        "illus": "loudspeaker"
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
          "say": "Pay whoever shouts the loudest first? That's Dũng's plan.",
          "sub": "Ai đòi gắt nhất thì trả trước? Kế của Dũng đấy.",
          "keys": [
            "Ai đòi gắt nhất"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "b-m",
            "t": "text",
            "text": "Gọi to nhất = trả trước",
            "x": 2928,
            "y": 170,
            "size": 48,
            "at": "l1:loudest",
            "color": "muted"
          },
          {
            "id": "b-mx",
            "t": "strike",
            "over": "b-m",
            "at": "l1:always"
          },
          {
            "id": "b-r1",
            "t": "text",
            "text": "Người thân không ký:",
            "x": 2928,
            "y": 260,
            "size": 44,
            "at": "l2:relative"
          },
          {
            "id": "b-r1b",
            "t": "text",
            "text": "không phải trả thay",
            "x": 2968,
            "y": 330,
            "size": 44,
            "at": "l2:no duty",
            "color": "accent",
            "hl": [
              {
                "text": "không phải trả thay",
                "at": "l2:no duty"
              }
            ]
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "Vay ngân hàng trễ hạn:",
            "x": 2928,
            "y": 420,
            "size": 44,
            "at": "l3:bank loan"
          },
          {
            "id": "b-r2b",
            "t": "text",
            "text": "lãi quá hạn, xử lý tài sản",
            "x": 2968,
            "y": 490,
            "size": 42,
            "at": "l3:collateral",
            "color": "coral"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Theo giấy đã ký, hậu quả thật",
            "x": 2028,
            "y": 620,
            "size": 52,
            "at": "l4:papers",
            "color": "accent",
            "hl": [
              {
                "text": "giấy đã ký",
                "at": "l4:papers"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Hệ thống Pháp luật 23/03/2021; Thư viện Pháp luật 21/12/2023",
            "x": 2928,
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
          "say": "The loudest caller is not always the debt to put first.",
          "sub": "Người gọi to nhất chưa chắc là khoản cần ưu tiên.",
          "keys": [
            "chưa chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A relative who never signed the loan or a guarantee has no duty to pay it.",
          "sub": "Người thân không ký vay, không ký bảo lãnh thì không có nghĩa vụ trả thay.",
          "keys": [
            "không có nghĩa vụ trả thay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But an overdue bank loan carries overdue interest, and the collateral may be dealt with.",
          "sub": "Còn khoản vay ngân hàng trễ hạn thì chịu lãi quá hạn, và tài sản bảo đảm có thể bị xử lý."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So rank debts by the papers you signed and the real cost, not by the volume of the call.",
          "sub": "Vậy ưu tiên theo giấy tờ đã ký và hậu quả thật, không theo độ ồn của cuộc gọi.",
          "keys": [
            "giấy tờ đã ký"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s05",
      "module": "BRK-08",
      "data": {
        "title": "Năm chặng gỡ nợ",
        "current": 0,
        "points": [
          {
            "label": "Nói thật",
            "sub": "Danh sách chung",
            "illus": "memo"
          },
          {
            "label": "Giữ phần con",
            "sub": "Tiền ăn, tiền học",
            "illus": "school"
          },
          {
            "label": "Bán đúng lúc",
            "sub": "Hỏi ngân hàng trước",
            "illus": "house"
          },
          {
            "label": "Gỡ vay hộ",
            "sub": "Đứng tên, bảo lãnh",
            "illus": "page-facing-up"
          },
          {
            "label": "Chặn quấy rối",
            "sub": "Giữ bằng chứng",
            "illus": "mobile-phone"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five stages: tell the truth, protect the kids' money, sell wisely.",
          "sub": "Năm chặng: nói thật, giữ phần con, bán đúng lúc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Untangle borrowed names, stop harassing collectors.",
          "sub": "Gỡ khoản đứng tên hộ, xử lý đòi nợ quấy rối.",
          "keys": [
            "đòi nợ quấy rối"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối thứ Sáu · Nói thật",
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
                  "side": "right"
                }
              ],
              "props": [
                "memo",
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
            "at": "l1:kitchen",
            "caption": "Tối thứ Sáu · bàn bếp",
            "icon": "memo"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Nợ trong hôn nhân",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l4:marriage"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "không phải lúc nào cũng chung",
            "x": 4016,
            "y": 245,
            "size": 42,
            "at": "l4:shared",
            "color": "muted"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Thiết yếu → có thể chung",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l5:essentials",
            "color": "accent",
            "hl": [
              {
                "text": "có thể chung",
                "at": "l5:can be"
              }
            ]
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "ăn · mặc · ở · học · chữa bệnh",
            "x": 4016,
            "y": 410,
            "size": 42,
            "at": "l5:food"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Friday night, the kitchen table. Their son is finally asleep.",
          "sub": "Chặng một: tối thứ Sáu, bàn bếp. Cậu con trai đã ngủ say."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I have to tell you something. My credit card balance, and a consumer loan.",
          "sub": "Anh ơi, em phải nói thật. Em còn dư nợ thẻ, và một khoản vay tiêu dùng.",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Your loan? Then it's your problem, not mine. Right?",
          "sub": "Khoản em vay à? Thì chuyện của em chứ, đâu phải của anh?",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not so fast. Not every debt during a marriage is a shared debt.",
          "sub": "Khoan kết luận. Không phải khoản nợ nào trong thời kỳ hôn nhân cũng là nợ chung.",
          "keys": [
            "nợ chung"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But loans for family essentials can be: food, clothes, housing, study, medical care.",
          "sub": "Nhưng khoản vay cho nhu cầu thiết yếu thì có thể: ăn, mặc, ở, học tập, khám chữa bệnh.",
          "keys": [
            "nhu cầu thiết yếu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 800
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
          }
        ],
        "items": [
          {
            "id": "c-3",
            "t": "text",
            "text": "Giấu nợ: không lâu",
            "x": 3996,
            "y": 520,
            "size": 50,
            "at": "l2:Hiding",
            "color": "coral"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "→ cùng biết, cùng tính",
            "x": 3996,
            "y": 600,
            "size": 52,
            "at": "l2:plan together",
            "color": "accent",
            "hl": [
              {
                "text": "cùng tính",
                "at": "l2:plan"
              }
            ]
          },
          {
            "id": "c-nx",
            "t": "text",
            "text": "Bài 1: nói với vợ chồng",
            "x": 4856,
            "y": 610,
            "size": 40,
            "at": "l3:lesson one",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 06/12/2022 (Luật Hôn nhân và gia đình 2014)",
            "x": 4856,
            "y": 690,
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
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hiding a debt is sitting on a slow bomb. The other one needs to know, to plan together.",
          "sub": "Giấu nợ là ôm bom nổ chậm. Người kia cần biết để cùng tính.",
          "keys": [
            "ôm bom nổ chậm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How to prepare the list and say it all at once? That's lesson one.",
          "sub": "Chuẩn bị danh sách, nói hết một lần thế nào? Có trong bài một."
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
            "text": "② Ngày lương · Ba ngăn",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "money-bag",
                "school",
                "credit-card"
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
            "at": "l1:payday",
            "caption": "Ngày lương về",
            "icon": "money-bag"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1 · Thiết yếu của con",
            "x": 5964,
            "y": 170,
            "size": 52,
            "at": "l3:Bin's",
            "color": "accent",
            "hl": [
              {
                "text": "của con",
                "at": "l4:Child"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2 · Trả nợ cố định",
            "x": 5964,
            "y": 250,
            "size": 52,
            "at": "l3:fixed"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3 · Phần còn lại: cắt",
            "x": 5964,
            "y": 330,
            "size": 52,
            "at": "l3:cut",
            "color": "coral",
            "hl": [
              {
                "text": "cắt",
                "at": "l4:cut"
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
          "say": "Second stop: payday. The money lands, and five red circles reach for it.",
          "sub": "Chặng hai: ngày lương về. Tiền vừa đến, năm vòng đỏ đã giơ tay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Pay the card first! It calls the most.",
          "sub": "Trả thẻ trước đi em! Nó gọi nhiều nhất.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No. Bin's money first. Then the fixed payments. Then we cut the rest.",
          "sub": "Không. Tiền của Bin trước. Rồi các khoản trả cố định. Còn lại thì cắt.",
          "pose": "explain",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Child essentials first, fixed debt payments second, and the rest is where you cut.",
          "sub": "Thiết yếu của con trước, trả nợ cố định sau, phần còn lại là chỗ cắt.",
          "keys": [
            "chỗ cắt"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 150,
        "suffix": "%",
        "label": "của lãi trong hạn: mức tối đa cho nợ gốc quá hạn",
        "illus": "chart-increasing"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Overdue principal?",
          "sub": "Nợ gốc quá hạn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Interest up to one fifty percent of normal.",
          "sub": "Lãi tới 150% lãi trong hạn.",
          "keys": [
            "150%"
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
            "at": "l2",
            "fit": [
              "d-cic",
              "d-cic2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-150",
            "t": "text",
            "text": "Quá hạn: lãi tới 150%",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l1:penalty",
            "color": "coral"
          },
          {
            "id": "d-ph",
            "t": "text",
            "text": "+ tiền phạt nếu hợp đồng ghi",
            "x": 5984,
            "y": 490,
            "size": 42,
            "at": "l1:contract"
          },
          {
            "id": "d-cic",
            "t": "text",
            "text": "CIC cập nhật hằng tháng",
            "x": 6824,
            "y": 640,
            "size": 42,
            "at": "l2:every month",
            "hl": [
              {
                "text": "hằng tháng",
                "at": "l2:every month"
              }
            ]
          },
          {
            "id": "d-cic2",
            "t": "text",
            "text": "Tự xem báo cáo trên CIC",
            "x": 6824,
            "y": 700,
            "size": 38,
            "at": "l3:register",
            "color": "accent"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Trễ hạn = để lại dấu vết",
            "x": 5964,
            "y": 580,
            "size": 50,
            "at": "l4:footprint",
            "color": "accent",
            "hl": [
              {
                "text": "dấu vết",
                "at": "l4:footprint"
              }
            ]
          },
          {
            "id": "d-nx",
            "t": "text",
            "text": "Bài 2: chia ba ngăn",
            "x": 5964,
            "y": 660,
            "size": 40,
            "at": "l5:lesson two",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 21/12/2023; 28/03/2024",
            "x": 5964,
            "y": 730,
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
          "say": "Plus a penalty, if the contract says so. Like a taxi meter that never stops.",
          "sub": "Cộng tiền phạt nếu hợp đồng thoả thuận. Như đồng hồ taxi không chịu dừng.",
          "keys": [
            "đồng hồ taxi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Did you know? CIC, the national credit information centre, updates repayment records every month.",
          "sub": "Bạn có biết: CIC, Trung tâm Thông tin tín dụng Quốc gia, cập nhật tình hình vay trả hằng tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You can register on the CIC website and read your own report.",
          "sub": "Bạn có thể đăng ký tài khoản trên trang CIC để tự xem báo cáo.",
          "keys": [
            "tự xem báo cáo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every late payment leaves a footprint. Kids' money first, fixed payments on time.",
          "sub": "Mỗi kỳ trễ hạn đều để lại dấu vết. Tiền của con trước, khoản cố định đúng ngày.",
          "keys": [
            "để lại dấu vết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The three compartments in detail? Lesson two.",
          "sub": "Chia ba ngăn chi tiết? Bài hai."
        }
      ],
      "ref": "p7,p8,p9,p10"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Cuối tuần · Bán đất?",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "house-with-garden",
                "money-bag"
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
            "at": "l1:idea",
            "caption": "Cuối tuần · quán cà phê",
            "icon": "house-with-garden"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đất ở quê: đang thế chấp",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l3:mortgaged",
            "hl": [
              {
                "text": "đang thế chấp",
                "at": "l3:mortgaged"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Mua sau cưới, tên Dũng",
            "x": 7932,
            "y": 250,
            "size": 48,
            "at": "l3:wedding"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Tự bán → báo sau?",
            "x": 7932,
            "y": 330,
            "size": 52,
            "at": "l4:okay",
            "color": "coral",
            "hl": [
              {
                "text": "báo sau",
                "at": "l4:okay"
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
          "say": "Third stop: the weekend. Dũng has an idea. A genius one, according to Dũng.",
          "sub": "Chặng ba: cuối tuần. Dũng nảy ra một ý, theo Dũng là thiên tài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The land back home! I'll find a buyer, take the money, then tell the bank and Thảo.",
          "sub": "Mảnh đất ở quê! Anh tự tìm người mua, nhận tiền rồi mới báo ngân hàng với Thảo.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That land is mortgaged for a loan. Bought after the wedding, in Dũng's name only.",
          "sub": "Mảnh đất đó đang thế chấp cho khoản vay. Mua sau khi cưới, chỉ đứng tên Dũng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Think about it. Is his plan okay?",
          "sub": "Thử nghĩ xem: kế hoạch ấy có ổn không?",
          "keys": [
            "có ổn không"
          ]
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "p12"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Cuối tuần · gọi người mua",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tự bán, nhận tiền rồi mới báo",
          "why": "Đất đang thế chấp cần ngân hàng đồng ý; đất mua trong hôn nhân là tài sản chung.",
          "rule": "Hỏi ngân hàng, bàn với vợ, rồi mới tìm người mua"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Hello? Yes, the land is for sale. Deposit first, papers later!",
          "sub": "Alô? Đúng rồi, đất bán. Cọc trước, giấy tờ tính sau!",
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
          "say": "A mortgaged asset can't be sold freely. The bank usually has to agree.",
          "sub": "Tài sản đang thế chấp không được tự ý bán, thường cần ngân hàng đồng ý.",
          "keys": [
            "không được tự ý bán"
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
          "who": "dung",
          "say": "First I ask the bank. Then I talk with Thảo. Then buyers.",
          "sub": "Trước hết hỏi ngân hàng. Rồi bàn với Thảo. Rồi mới tìm người mua.",
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
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "e-4",
            "t": "text",
            "text": "Mua trong hôn nhân = tài sản chung",
            "x": 7932,
            "y": 430,
            "size": 42,
            "at": "l1:marriage",
            "hl": [
              {
                "text": "tài sản chung",
                "at": "l1:shared property"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Bán: vợ chồng ký văn bản",
            "x": 7932,
            "y": 505,
            "size": 44,
            "at": "l2:written"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "So: chi phí giữ ↔ lãi đắt nhất",
            "x": 7932,
            "y": 580,
            "size": 42,
            "at": "l3:Compare"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Ngân hàng → vợ chồng → người mua",
            "x": 7932,
            "y": 665,
            "size": 44,
            "at": "l4:Bank first",
            "color": "accent",
            "hl": [
              {
                "text": "người mua",
                "at": "l4:buyer last"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 11/03/2022; 11/03/2023",
            "x": 8792,
            "y": 700,
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
          "say": "And land bought during the marriage is shared property, whatever name is on it.",
          "sub": "Đất mua trong thời kỳ hôn nhân vẫn là tài sản chung, dù đứng tên ai.",
          "keys": [
            "tài sản chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Disposing of shared real estate needs a written agreement of husband and wife.",
          "sub": "Định đoạt bất động sản chung cần vợ chồng thoả thuận bằng văn bản.",
          "keys": [
            "thoả thuận bằng văn bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sell or keep? Compare the cost of keeping it with the interest on your priciest debt.",
          "sub": "Bán hay giữ? So chi phí giữ tài sản với tiền lãi của khoản nợ đắt nhất.",
          "keys": [
            "khoản nợ đắt nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bank first, spouse second, buyer last. Lesson three goes deeper.",
          "sub": "Hỏi ngân hàng, bàn với vợ chồng, rồi mới tìm người mua. Bài ba đi sâu hơn."
        }
      ],
      "ref": "p11,p12,p13,p14"
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
            "text": "④ Giữa tháng · Vay hộ em",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "envelope",
                "page-facing-up"
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
            "at": "l1:letter",
            "caption": "Giữa tháng · thư ngân hàng",
            "icon": "envelope"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Đứng tên vay hộ",
            "x": 60,
            "y": 1260,
            "size": 52,
            "at": "l1:name"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "→ trên giấy: bạn là bên vay",
            "x": 80,
            "y": 1340,
            "size": 46,
            "at": "l3:borrower",
            "color": "coral",
            "hl": [
              {
                "text": "bên vay",
                "at": "l3:borrower"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Bảo lãnh = cam kết trả thay",
            "x": 60,
            "y": 1430,
            "size": 48,
            "at": "l4:guarantee",
            "hl": [
              {
                "text": "trả thay",
                "at": "l4:pay for"
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
          "say": "Fourth stop: a letter from a bank, about the loan Dũng took in his name for his younger brother.",
          "sub": "Chặng bốn: thư ngân hàng gửi về, về khoản Dũng đứng tên vay hộ em trai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "But that's my brother's loan! He just borrowed my name.",
          "sub": "Nhưng đó là nợ của em anh mà! Nó chỉ mượn tên anh thôi.",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On paper, the borrower is whoever signed. That is Dũng.",
          "sub": "Trên giấy tờ, bên vay là người đã ký. Tức là Dũng.",
          "keys": [
            "người đã ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A guarantee is a promise to pay for someone else, and it's bigger than it looks.",
          "sub": "Còn bảo lãnh là cam kết trả thay, và nó to hơn bạn tưởng.",
          "keys": [
            "cam kết trả thay"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s15",
      "module": "BRK-06",
      "data": {
        "title": "Bảo lãnh gồm những gì?",
        "items": [
          {
            "illus": "money-bag",
            "text": "Tiền gốc"
          },
          {
            "illus": "chart-increasing",
            "text": "Tiền lãi"
          },
          {
            "illus": "warning",
            "text": "Tiền phạt"
          },
          {
            "illus": "balance-scale",
            "text": "Bồi thường"
          },
          {
            "illus": "hourglass-not-done",
            "text": "Lãi chậm trả"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Principal, interest, penalties, compensation, late interest.",
          "sub": "Gốc, lãi, phạt, bồi thường, lãi chậm trả."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "All of it, unless agreed otherwise.",
          "sub": "Tất cả, trừ khi có thoả thuận khác.",
          "keys": [
            "trừ khi có thoả thuận khác"
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
          }
        ],
        "items": [
          {
            "id": "f-4",
            "t": "text",
            "text": "Đòi lại: thường rất khó",
            "x": 60,
            "y": 1530,
            "size": 48,
            "at": "l1:back",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Cho mượn tên = mượn cả lịch",
            "x": 60,
            "y": 1615,
            "size": 50,
            "at": "l2:Lending",
            "color": "accent",
            "hl": [
              {
                "text": "mượn cả lịch",
                "at": "l2:calendar"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Gỡ: văn bản, lịch trả",
            "x": 920,
            "y": 1730,
            "size": 42,
            "at": "l3:writing"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "hoặc thay tài sản bảo đảm",
            "x": 960,
            "y": 1790,
            "size": 38,
            "at": "l3:collateral"
          },
          {
            "id": "f-nx",
            "t": "text",
            "text": "Bài 4: vay hộ, bảo lãnh",
            "x": 60,
            "y": 1710,
            "size": 40,
            "at": "l3:lesson four",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Hệ thống Pháp luật 25/01/2025 (BLDS 2015)",
            "x": 60,
            "y": 1800,
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
          "say": "And getting money back from someone who can no longer pay? Usually very hard.",
          "sub": "Còn đòi lại tiền từ người đã mất khả năng trả? Thường rất khó.",
          "keys": [
            "Thường rất khó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lending your name means lending your whole family calendar.",
          "sub": "Cho mượn tên là cho mượn luôn cả tờ lịch nhà mình.",
          "keys": [
            "cả tờ lịch nhà mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Untangling it in writing, with a payment plan or new collateral, is lesson four.",
          "sub": "Gỡ bằng văn bản, lịch trả, hay thay tài sản bảo đảm: bài bốn."
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑤ Cuối tháng · Bị doạ",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "warning"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
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
            "at": "l1:office",
            "caption": "Cuối tháng · chỗ làm của Thảo",
            "icon": "mobile-phone"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Đăng ảnh cả nhà lên mạng”",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:photos",
            "color": "coral",
            "hl": [
              {
                "text": "cả nhà",
                "at": "l2:whole family"
              }
            ]
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: vay app khác, giấu kín",
            "x": 2028,
            "y": 1350,
            "size": 46,
            "at": "l4:Option A"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: chụp, kể, dặn, trình báo",
            "x": 2028,
            "y": 1430,
            "size": 46,
            "at": "l5:Option B",
            "color": "accent",
            "hl": [
              {
                "text": "trình báo",
                "at": "l5:police"
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
          "say": "Fifth stop: end of the month, Thảo's office. A message from a lending app.",
          "sub": "Chặng năm: cuối tháng, chỗ làm của Thảo. Một tin nhắn từ ứng dụng vay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "They'll post photos of our whole family online? Over one app loan?",
          "sub": "Họ doạ đăng ảnh cả nhà lên mạng? Chỉ vì một khoản vay qua app?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two ways from here.",
          "sub": "Từ đây có hai cách."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Option A: quickly borrow from another app to pay it off, and tell nobody.",
          "sub": "Cách A: vay vội một ứng dụng khác để trả cho xong, không cho ai biết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Option B: screenshot it, tell Dũng, warn the parents, take the evidence to the police.",
          "sub": "Cách B: chụp tin nhắn, kể với Dũng, dặn bố mẹ, mang bằng chứng đến công an.",
          "keys": [
            "mang bằng chứng đến công an"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Bị doạ bêu riếu",
        "wrong": "Vay vội app khác để dập lời doạ",
        "right": "Giữ bằng chứng, nói với người nhà, trình báo",
        "wrongIllus": "money-with-wings",
        "rightIllus": "camera-with-flash"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A rushed loan opens a new debt.",
          "sub": "Vay vội là mở thêm nợ mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Evidence and family first. Safer.",
          "sub": "Bằng chứng, người nhà trước. An toàn hơn.",
          "keys": [
            "An toàn hơn"
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
            "at": "l2",
            "fit": [
              "g-v2"
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
            "id": "g-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2028,
            "y": 1510,
            "w": 480,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "telephone"
              ]
            },
            "at": "l1:Bà Tư",
            "caption": "Cùng chiều · gọi về quê",
            "icon": "telephone"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Cấm: doạ, chửi, gọi sai giờ",
            "x": 2888,
            "y": 1720,
            "size": 40,
            "at": "l4:bans",
            "hl": [
              {
                "text": "Cấm",
                "at": "l4:bans"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "và bôi nhọ trên mạng",
            "x": 2928,
            "y": 1775,
            "size": 38,
            "at": "l4:online"
          },
          {
            "id": "g-nx",
            "t": "text",
            "text": "Bài 5: đòi nợ quấy rối",
            "x": 2538,
            "y": 1770,
            "size": 32,
            "at": "l5:lesson five",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Hệ thống Pháp luật 28/04/2026 (QĐ 15/QĐ-HHNH); 22/01/2025",
            "x": 2888,
            "y": 1828,
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
          "say": "Thảo calls Dũng's mother in the countryside. Meet Bà Tư.",
          "sub": "Thảo gọi về quê cho mẹ chồng. Đây là Bà Tư.",
          "keys": [
            "Bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Mom, if a strange number calls about money, don't pick up. Tell me.",
          "sub": "Mẹ ơi, số lạ gọi đòi tiền thì mẹ đừng nghe, báo con nhé.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Strange numbers? I'll just let them ring, dear.",
          "sub": "Số lạ hả? Mẹ để nó reo cho vui, con ạ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The banking code bans threats, abuse, calls at bad hours, and online smearing.",
          "sub": "Quy tắc của Hiệp hội Ngân hàng cấm đe doạ, chửi bới, gọi sai giờ, bôi nhọ trên mạng.",
          "keys": [
            "cấm đe doạ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keep evidence, warn relatives, report threats. Lesson five.",
          "sub": "Lưu bằng chứng, báo người thân, trình báo công an. Bài năm."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p17,p18,p20"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Đêm đó · Bé Bin thức giấc",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Meet"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "crescent-moon",
                "bed"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "bin",
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
            "at": "l1:Bin",
            "caption": "Đêm đó · phòng khách",
            "icon": "crescent-moon"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Con nghe nhiều hơn ta tưởng",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l1:hears",
            "color": "coral"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Gỡ nợ: nhiều tháng",
            "x": 3996,
            "y": 1360,
            "size": 52,
            "at": "l4:months"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "chạy đường dài",
            "x": 4036,
            "y": 1435,
            "size": 52,
            "at": "l4:marathon",
            "color": "accent",
            "hl": [
              {
                "text": "đường dài",
                "at": "l4:marathon"
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
          "say": "That night. Meet Bé Bin, their son, who hears far more than grown ups think.",
          "sub": "Đêm đó. Đây là Bé Bin, con trai hai người, nghe được nhiều hơn người lớn tưởng.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Why are you whispering, Dad? Is something wrong?",
          "sub": "Sao bố mẹ nói thầm vậy ạ? Có chuyện gì không bố?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Just grown up planning. Your school and food are covered. Back to bed, buddy.",
          "sub": "Bố mẹ tính việc người lớn thôi. Tiền học, tiền ăn của con vẫn đủ. Ngủ đi con.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Getting out of debt often takes many months. A marathon, not a sprint.",
          "sub": "Gỡ nợ thường kéo dài nhiều tháng. Chạy đường dài, không phải chạy nước rút.",
          "keys": [
            "Chạy đường dài"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p1,p22"
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
            "id": "h-4",
            "t": "text",
            "text": "Mất ngủ, lo âu → nói ra",
            "x": 3996,
            "y": 1530,
            "size": 46,
            "at": "l1:sleep"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Bác sĩ, chuyên gia tâm lý",
            "x": 3996,
            "y": 1605,
            "size": 46,
            "at": "l2:doctor"
          },
          {
            "id": "h-6",
            "t": "text",
            "text": "Xin giúp ≠ thất bại",
            "x": 3996,
            "y": 1690,
            "size": 54,
            "at": "l2:failure",
            "color": "accent",
            "hl": [
              {
                "text": "thất bại",
                "at": "l2:failure"
              }
            ]
          },
          {
            "id": "h-7",
            "t": "text",
            "text": "Chuỗi khác: thẻ tín dụng,",
            "x": 4856,
            "y": 1735,
            "size": 38,
            "at": "l3:Card traps",
            "color": "muted"
          },
          {
            "id": "h-8",
            "t": "text",
            "text": "mất lương, bị lừa",
            "x": 4896,
            "y": 1790,
            "size": 38,
            "at": "l3:scam",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Can't sleep, anxious for weeks? Talk to someone you trust.",
          "sub": "Mất ngủ, lo âu kéo dài? Nói với người thân tin cậy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or see a doctor, a psychologist. Asking for help is not failure. It's saving your strength.",
          "sub": "Hoặc tìm bác sĩ, chuyên gia tâm lý. Xin giúp đỡ không phải thất bại, mà là giữ sức.",
          "keys": [
            "không phải thất bại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Card traps, losing a salary, scam debts: other series cover those.",
          "sub": "Bẫy thẻ, mất lương, nợ do bị lừa: xem các chuỗi khác."
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Đầu tháng sau · Tủ lạnh",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:next month"
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
                  "pose": "hold",
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
            "at": "l1:fridge",
            "caption": "Đầu tháng sau · bên tủ lạnh",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 5964,
            "y": 1260,
            "size": 130,
            "at": "l1:calendar"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "+ danh sách chung",
            "x": 6124,
            "y": 1290,
            "size": 52,
            "at": "l2:list",
            "color": "accent",
            "hl": [
              {
                "text": "danh sách chung",
                "at": "l2:list"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Tiền của con: tài khoản riêng",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l3:account"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Thuận vợ thuận chồng ✓",
            "x": 5964,
            "y": 1530,
            "size": 56,
            "at": "l4:agree",
            "color": "accent",
            "hl": [
              {
                "text": "Thuận vợ thuận chồng",
                "at": "l4:agree"
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
          "say": "The start of next month. Same fridge, same calendar.",
          "sub": "Đầu tháng sau. Vẫn tủ lạnh ấy, vẫn tờ lịch ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Still five red circles. But next to them, a list of every debt, in both our handwriting.",
          "sub": "Vẫn năm vòng đỏ. Nhưng bên cạnh là danh sách đủ mọi khoản, chữ của cả hai.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And Bin's money sits in its own account. Nobody touches it.",
          "sub": "Còn tiền của Bin nằm riêng một tài khoản. Không ai đụng vào.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When husband and wife agree, they can scoop the East Sea dry. Or at least five red circles.",
          "sub": "“Thuận vợ thuận chồng, tát biển Đông cũng cạn.” Ít ra cũng tát được năm vòng đỏ.",
          "keys": [
            "năm vòng đỏ"
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
      "ref": "p4,p9"
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
            "at": "l1",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Năm chặng · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l6"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:spouse"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 40,
            "at": "l3:kids"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 9432,
            "y": 40,
            "at": "l4:Sell"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 1560,
            "y": 1130,
            "at": "l4:writing"
          },
          {
            "id": "z-5",
            "t": "badge",
            "n": 5,
            "x": 3528,
            "y": 1130,
            "at": "l5:evidence"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Tối nay: ghi mọi khoản nợ",
            "x": 7932,
            "y": 1280,
            "size": 52,
            "at": "l6:Tonight",
            "color": "accent",
            "hl": [
              {
                "text": "ghi mọi khoản nợ",
                "at": "l6:write down"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "kể cả khoản đứng tên hộ",
            "x": 7972,
            "y": 1360,
            "size": 46,
            "at": "l6:someone else"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: nói với vợ chồng",
            "x": 7932,
            "y": 1470,
            "size": 42,
            "at": "l7:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi.",
            "x": 7932,
            "y": 1710,
            "size": 28,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Khi cần, kiểm lại với cơ quan, chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1755,
            "size": 28,
            "at": "l7",
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
          "say": "So, five stages.",
          "sub": "Tóm lại, năm chặng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tell your spouse the truth, and make one shared list.",
          "sub": "Nói thật với vợ chồng, lập một danh sách chung.",
          "keys": [
            "danh sách chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Set the kids' essentials aside first, and keep fixed payments on time.",
          "sub": "Tách tiền thiết yếu của con trước, giữ đúng hạn các khoản cố định."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sell only after asking the bank and your spouse. Untangle borrowed names in writing.",
          "sub": "Bán sau khi hỏi ngân hàng, bàn với vợ chồng. Gỡ khoản đứng tên hộ bằng giấy tờ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And meet harassment with evidence and a police report.",
          "sub": "Gặp đòi nợ quấy rối: giữ bằng chứng và trình báo."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Tonight: write down every debt, even the ones in your name for someone else.",
          "sub": "Việc làm ngay: tối nay ghi ra mọi khoản đang nợ, kể cả khoản đứng tên hộ.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Next: telling your spouse about a hidden debt. Rules change, so check first.",
          "sub": "Bài tiếp: nói với vợ chồng về khoản nợ đang giấu. Quy định có thể đổi, nhớ kiểm lại."
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
        "q": "An app collector calls loudly while your bank loan is quietly overdue, which matters more?",
        "options": [
          "The loud caller, because the loudest debt is always the most urgent",
          "Look at what you signed and the real cost, such as overdue interest",
          "Neither, since quiet loans never lead to any serious consequences"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "loudspeaker",
        "why": "Ưu tiên theo giấy tờ đã ký và hậu quả thật, không theo độ ồn của cuộc gọi."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An app collector calls loudly while your bank loan is quietly overdue, which matters more?",
          "sub": "Người đòi nợ app gọi ầm ĩ trong khi khoản vay ngân hàng lặng lẽ trễ hạn, khoản nào đáng lo hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Look at what you signed and the real cost, such as overdue interest.",
          "sub": "Nhìn vào giấy tờ đã ký và hậu quả thật, như lãi quá hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The loudest call is not always the most urgent debt.",
          "sub": "Người gọi to nhất chưa chắc là khoản gấp nhất."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[7]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Gỡ nợ mà giữ được nhà"
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
  "notes": "#145 bài MỚI (tổng quan chuỗi) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật kể chuyện = tờ lịch dán tủ lạnh khoanh năm vòng đỏ (intro) → kéo ra thấy Thảo, Dũng → câu hỏi chính (p1) → BRK-07 rehook “ai đòi gắt nhất thì trả trước?” (p3, p4) → BRK-08 năm chặng (p2). Bảng 10 ô theo MỘT THÁNG của nhà Thảo – Dũng: tối thứ Sáu nói thật (p5, p6) → ngày lương ba ngăn (p7; BRK-03 150%; CIC p8–p10) → cuối tuần Dũng định tự bán đất đang thế chấp (vai “anh Tuấn” p12; “Khoan đã!”; p11, p13, p14) → giữa tháng thư ngân hàng về khoản vay hộ em trai (p15; BRK-06 phạm vi bảo lãnh; p16) → cuối tháng Thảo bị app doạ (vai “chị Lan” p18, A/B; BRK-04 p19; gọi Bà Tư; Bộ quy tắc HHNH p17, p20) → đêm đó Bé Bin thức giấc, giữ sức (p1, p21, p22) → đầu tháng sau cùng tờ lịch + danh sách chung (khép vòng “Thuận vợ thuận chồng”). Nhân vật: Thảo, Dũng, Bà Tư, Bé Bin. Số liệu chỉ từ bài: 150%, năm chặng; nguồn Thư viện Pháp luật / Hệ thống Pháp luật ghi nhỏ. Lưu ý chung #133 ở ô J. Câu đố questions[7].",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
