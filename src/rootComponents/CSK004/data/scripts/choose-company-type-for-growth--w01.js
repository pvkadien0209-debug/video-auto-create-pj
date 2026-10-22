// choose-company-type-for-growth--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "choose-company-type-for-growth--w01",
  "unit": {
    "audience": "founders-registering-a-company",
    "slug": "choose-company-type-for-growth",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đã có khách và doanh thu: chọn loại hình doanh nghiệp theo kế hoạch ba năm tới thế nào?",
    "series": "Thành lập công ty đúng ngay từ đầu — cho người lần đầu đăng ký doanh nghiệp ở Việt Nam"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "anchor": {
    "type": "number",
    "value": "ba năm",
    "ref": "p13"
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-n",
            "t": "text",
            "text": "3 năm",
            "x": 60,
            "y": 60,
            "size": 190,
            "at": "l1:Three",
            "color": "accent",
            "hl": [
              {
                "text": "3 năm",
                "at": "l1:years"
              }
            ]
          },
          {
            "id": "a-x1",
            "t": "text",
            "text": "không phải 3 tháng",
            "x": 80,
            "y": 300,
            "size": 48,
            "at": "l2:months",
            "color": "muted"
          },
          {
            "id": "a-x2",
            "t": "text",
            "text": "không phải 30 năm",
            "x": 80,
            "y": 370,
            "size": 48,
            "at": "l2:thirty",
            "color": "muted"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Chọn theo hôm nay?",
            "x": 60,
            "y": 470,
            "size": 54,
            "at": "l3:today",
            "color": "coral",
            "hl": [
              {
                "text": "hôm nay",
                "at": "l3:today"
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
          "say": "Three years.",
          "sub": "Ba năm.",
          "keys": [
            "Ba năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not three months, not thirty years. Just the next three.",
          "sub": "Không phải ba tháng, không phải ba mươi năm. Chỉ ba năm tới thôi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yet most people pick a company type for today.",
          "sub": "Vậy mà phần đông chọn loại hình cho hôm nay.",
          "keys": [
            "cho hôm nay"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p13"
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
                  "id": "dung",
                  "side": "right",
                  "pose": "shrug",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "laptop",
                "receipt"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · văn phòng kế toán của Thảo",
            "icon": "laptop"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Người bảo: cổ phần",
            "x": 920,
            "y": 630,
            "size": 34,
            "at": "l3:joint"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Người bảo: cứ giữ hộ",
            "x": 920,
            "y": 680,
            "size": 34,
            "at": "l3:household"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Chi tiết: kế hoạch 3 năm",
            "x": 60,
            "y": 600,
            "size": 44,
            "at": "l5:detail",
            "color": "accent",
            "hl": [
              {
                "text": "kế hoạch 3 năm",
                "at": "l5:plan"
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
          "say": "Meet Thảo. Her small accounting company now helps first time founders.",
          "sub": "Đây là Thảo. Công ty kế toán nhỏ của cô giờ giúp người lần đầu lập doanh nghiệp.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, her friend. An interior designer with clients, revenue, and too much advice.",
          "sub": "Còn đây là Dũng, bạn Thảo. Thiết kế nội thất, có khách, có doanh thu, và quá nhiều lời khuyên.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Big clients want contracts and invoices. One friend says joint stock, another says stay a household.",
          "sub": "Khách lớn đòi hợp đồng, hoá đơn. Bạn này bảo lập cổ phần, bạn kia bảo cứ giữ hộ kinh doanh.",
          "pose": "shrug",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And what do you plan for the next three years?",
          "sub": "Thế ba năm tới anh định làm gì?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But one detail matters more than all that advice: the three year plan.",
          "sub": "Nhưng có một chi tiết đáng chú ý hơn mọi lời khuyên: kế hoạch ba năm.",
          "keys": [
            "kế hoạch ba năm"
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
      "ref": "intro,p17"
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
            "text": "Chọn loại hình là chọn gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:choosing",
            "hl": [
              {
                "text": "chọn gì",
                "at": "l1:really"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cái tên oai nhất",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l2:grandest",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: rủi ro, bạn đồng hành",
            "x": 2028,
            "y": 250,
            "size": 48,
            "at": "l2:risk",
            "color": "accent",
            "hl": [
              {
                "text": "rủi ro",
                "at": "l2:risk"
              }
            ]
          },
          {
            "id": "b-yes2",
            "t": "text",
            "text": "và cách mở rộng",
            "x": 2068,
            "y": 320,
            "size": 46,
            "at": "l2:grow"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Không có lựa chọn chung",
            "x": 2928,
            "y": 170,
            "size": 42,
            "at": "l3:single"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 590,
            "w": 520,
            "h": 110,
            "at": "l4:three+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2588,
            "y": 590,
            "w": 520,
            "h": 110,
            "at": "l4:three+700",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 3148,
            "y": 590,
            "w": 520,
            "h": 110,
            "at": "l4:three+1100",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "1. Mấy người?",
            "x": 2058,
            "y": 610,
            "size": 48,
            "at": "l4:three+450"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "2. Rủi ro tới đâu?",
            "x": 2618,
            "y": 610,
            "size": 48,
            "at": "l4:three+850"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "3. Chuyển vốn?",
            "x": 3178,
            "y": 610,
            "size": 48,
            "at": "l4:three+1250"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 25/10/2023",
            "x": 2928,
            "y": 240,
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
          "say": "So what are you really choosing when you choose a type?",
          "sub": "Vậy chọn loại hình thực ra là chọn gì?",
          "keys": [
            "chọn gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the grandest name, but the risk you carry, who walks with you, and how you grow.",
          "sub": "Không phải cái tên oai nhất, mà là mức rủi ro bạn gánh, ai cùng đi, và cách mở rộng.",
          "keys": [
            "mức rủi ro bạn gánh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There's no single choice for everyone. It depends on your own situation.",
          "sub": "Không có lựa chọn chung cho mọi người; tuỳ tình hình của chính bạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One week at Thảo's office, three visitors, three questions.",
          "sub": "Một tuần ở văn phòng Thảo, ba người ghé, ba câu hỏi.",
          "keys": [
            "ba câu hỏi"
          ]
        }
      ],
      "ref": "p17,intro"
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
            "text": "① Hộ hay doanh nghiệp?",
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
              "set": "shop",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "shopping-cart",
                "abacus"
              ]
            },
            "at": "l1:Uncle",
            "caption": "Thứ Hai · tiệm tạp hoá Bác Bình",
            "icon": "shopping-cart"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Hộ: cá nhân hoặc cả nhà",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l3:household"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "nhiều người → cử chủ hộ",
            "x": 4036,
            "y": 230,
            "size": 36,
            "at": "l3:head"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Hộ: vô hạn, cả tài sản",
            "x": 3996,
            "y": 300,
            "size": 42,
            "at": "l4:limit",
            "color": "coral",
            "hl": [
              {
                "text": "vô hạn",
                "at": "l4:limit"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "TNHH, cổ phần: trong vốn góp",
            "x": 3996,
            "y": 380,
            "size": 40,
            "at": "l5:contributed",
            "color": "accent",
            "hl": [
              {
                "text": "trong vốn góp",
                "at": "l5:contributed"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Hợp danh: vô hạn",
            "x": 3996,
            "y": 450,
            "size": 40,
            "at": "l5:partners"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop, Monday afternoon. Meet Uncle Bình, who has run a household grocery for decades.",
          "sub": "Chặng một, chiều thứ Hai. Đây là Bác Bình, chạy tiệm tạp hoá hộ kinh doanh mấy chục năm.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Household business, simple taxes, no fuss. Slowly, let's think it over.",
          "sub": "Hộ kinh doanh, thuế gọn, khỏi rườm rà. Từ từ, mình xem lại đã.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A household business is registered by one person or a family. With several members, they name a head.",
          "sub": "Hộ kinh doanh do một cá nhân hoặc các thành viên hộ gia đình đăng ký; nhiều thành viên thì cử một người làm chủ hộ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But the household is liable without limit, with all its assets.",
          "sub": "Nhưng cá nhân, hộ gia đình chịu trách nhiệm vô hạn bằng toàn bộ tài sản.",
          "keys": [
            "vô hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In a limited company or joint stock company, members risk only what they contributed. General partners, without limit.",
          "sub": "Thành viên công ty trách nhiệm hữu hạn, cổ đông công ty cổ phần chỉ chịu trong phạm vi vốn đã góp; thành viên hợp danh thì vô hạn.",
          "keys": [
            "vốn đã góp"
          ]
        }
      ],
      "ref": "p1"
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
          }
        ],
        "items": [
          {
            "id": "c-10",
            "t": "text",
            "text": "Hộ dưới 10 lao động",
            "x": 3996,
            "y": 530,
            "size": 40,
            "at": "l1:ten",
            "color": "muted"
          },
          {
            "id": "c-10x",
            "t": "strike",
            "over": "c-10",
            "at": "l1:gone"
          },
          {
            "id": "c-10b",
            "t": "text",
            "text": "← NĐ 78/2015, nay bỏ",
            "x": 4456,
            "y": 535,
            "size": 34,
            "at": "l1:gone"
          },
          {
            "id": "c-dn",
            "t": "text",
            "text": "DN: chặt chẽ, mở chi nhánh",
            "x": 3996,
            "y": 610,
            "size": 40,
            "at": "l2:branches",
            "hl": [
              {
                "text": "chi nhánh",
                "at": "l2:branches"
              }
            ]
          },
          {
            "id": "c-dn2",
            "t": "text",
            "text": "đổi lại: thủ tục nặng hơn",
            "x": 4036,
            "y": 670,
            "size": 36,
            "at": "l3:heavier",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 25/10/2023",
            "x": 4856,
            "y": 690,
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
          "say": "The old ten worker limit for households, from Decree seventy eight of twenty fifteen, is gone.",
          "sub": "Giới hạn hộ dưới 10 lao động theo Nghị định 78/2015 trước đây, nay không còn.",
          "keys": [
            "nay không còn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An enterprise has a tighter structure, suits medium and large firms, and can open branches.",
          "sub": "Doanh nghiệp có cơ cấu chặt chẽ, hợp quy mô vừa và lớn, muốn mở chi nhánh, văn phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In return, procedures and duties are heavier. A household stays simple, with lighter tax steps.",
          "sub": "Đổi lại, thủ tục và nghĩa vụ phức tạp hơn. Hộ kinh doanh cơ cấu đơn giản, thủ tục thuế nhẹ hơn."
        }
      ],
      "ref": "p2"
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
            "text": "② Thứ Ba · Khách đòi hoá đơn",
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
              "set": "online",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "receipt",
                "mobile-phone"
              ]
            },
            "at": "l1:calls",
            "caption": "Thứ Ba · Bác Bình gọi hỏi",
            "icon": "receipt"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "≥ 1 tỷ/năm: bắt buộc có mã",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l3:billion",
            "color": "coral",
            "hl": [
              {
                "text": "bắt buộc",
                "at": "l3:must"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "500 triệu – 1 tỷ: tuỳ chọn",
            "x": 5964,
            "y": 250,
            "size": 40,
            "at": "l4:five hundred"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "< 500 triệu: nộp thuế trước",
            "x": 5964,
            "y": 330,
            "size": 40,
            "at": "l5:below"
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "→ được cấp từng lần",
            "x": 6004,
            "y": 395,
            "size": 36,
            "at": "l5:each",
            "hl": [
              {
                "text": "từng lần",
                "at": "l5:each"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Vừa đạt 1 tỷ: 30 ngày",
            "x": 5964,
            "y": 470,
            "size": 40,
            "at": "l6:thirty",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l6:thirty days"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: TVPL 03/7/2026 · NĐ 68/2026, sửa bởi NĐ 141/2026",
            "x": 5964,
            "y": 705,
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
          "say": "Second stop, Tuesday. Uncle Bình calls. A café chain wants invoices from him.",
          "sub": "Chặng hai, thứ Ba. Bác Bình gọi tới: một chuỗi cà phê đòi bác xuất hoá đơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "So I must close the shop and open a company? At my age?",
          "sub": "Vậy bác phải bỏ hộ, lập công ty à? Tuổi này rồi?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under Decree sixty eight of twenty twenty six, as amended, households earning one billion dong a year or more must use coded e-invoices.",
          "sub": "Theo Nghị định 68/2026/NĐ-CP, được sửa bởi Nghị định 141/2026/NĐ-CP: hộ doanh thu từ 1 tỷ đồng một năm phải dùng hoá đơn điện tử có mã.",
          "keys": [
            "1 tỷ đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Between five hundred million and one billion, it's optional if you qualify.",
          "sub": "Từ 500 triệu đến dưới 1 tỷ: không bắt buộc, đủ điều kiện thì có thể đăng ký."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Below five hundred million? Declare and pay tax first, then get a coded invoice each time.",
          "sub": "Dưới 500 triệu mà cần hoá đơn: khai, nộp thuế trước, rồi được cấp hoá đơn có mã theo từng lần.",
          "keys": [
            "theo từng lần"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "And when you cross one billion, register within thirty days, Uncle.",
          "sub": "Còn khi doanh thu vừa đạt 1 tỷ, bác đăng ký hoá đơn có mã trong 30 ngày nhé.",
          "pose": "explain"
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Khách đòi hoá đơn",
        "wrong": "Bắt buộc phải lập công ty",
        "right": "Hộ vẫn có cách xuất hoá đơn",
        "wrongIllus": "office-building",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Invoices means you must open a company?",
          "sub": "Đòi hoá đơn là phải lập công ty?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. A household can still issue them.",
          "sub": "Không. Hộ kinh doanh vẫn có cách xuất hoá đơn.",
          "keys": [
            "vẫn có cách"
          ]
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-k",
            "t": "text",
            "text": "Hoá đơn: lý do để tìm hiểu",
            "x": 5964,
            "y": 560,
            "size": 42,
            "at": "l2:look"
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Trách nhiệm, mở rộng: lý do chọn",
            "x": 5964,
            "y": 630,
            "size": 40,
            "at": "l2:choose",
            "color": "accent",
            "hl": [
              {
                "text": "lý do chọn",
                "at": "l2:choose"
              }
            ]
          },
          {
            "id": "d-bb",
            "t": "text",
            "text": "Bác Bình: giữ hộ ✓",
            "x": 6824,
            "y": 640,
            "size": 40,
            "at": "l3:keep",
            "hl": [
              {
                "text": "giữ hộ",
                "at": "l3:keep"
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
          "say": "The bigger difference lies in liability, organisation, and room to expand.",
          "sub": "Khác biệt lớn hơn nằm ở trách nhiệm tài sản, cách tổ chức và khả năng mở rộng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Invoices are a reason to look. Liability and growth plans are the reasons to choose.",
          "sub": "Hoá đơn là lý do để tìm hiểu; trách nhiệm và kế hoạch mở rộng mới là lý do để chọn.",
          "keys": [
            "lý do để chọn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "No branches, no partners at my age. I keep the household, and register invoices.",
          "sub": "Tuổi này bác chẳng mở chi nhánh, chẳng rủ ai góp. Bác giữ hộ, đăng ký hoá đơn.",
          "face": "happy"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Ba câu hỏi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-q1",
            "t": "text",
            "text": "1. Một mình hay có người góp?",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l2:alone",
            "color": "accent"
          },
          {
            "id": "e-a1",
            "t": "text",
            "text": "Tư nhân, một thành viên: một chủ",
            "x": 7972,
            "y": 240,
            "size": 34,
            "at": "l3:private"
          },
          {
            "id": "e-a1b",
            "t": "text",
            "text": "Hai thành viên: 2–50 · Cổ phần: ≥ 3",
            "x": 7972,
            "y": 290,
            "size": 34,
            "at": "l3:fifty",
            "hl": [
              {
                "text": "2–50",
                "at": "l3:fifty"
              }
            ]
          },
          {
            "id": "e-a1c",
            "t": "text",
            "text": "Hợp danh: ≥ 2 cá nhân",
            "x": 7972,
            "y": 340,
            "size": 34,
            "at": "l3:partnership"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "2. Chịu rủi ro tới đâu?",
            "x": 7932,
            "y": 410,
            "size": 44,
            "at": "l4:risk",
            "color": "accent"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "Tư nhân, hợp danh: vô hạn",
            "x": 7972,
            "y": 480,
            "size": 34,
            "at": "l4:limit",
            "color": "coral"
          },
          {
            "id": "e-q3",
            "t": "text",
            "text": "3. Có cần chuyển vốn?",
            "x": 7932,
            "y": 550,
            "size": 44,
            "at": "l5:transfer",
            "color": "accent"
          },
          {
            "id": "e-a3",
            "t": "text",
            "text": "Hai thành viên: chào nội bộ",
            "x": 7972,
            "y": 620,
            "size": 34,
            "at": "l6:offer",
            "hl": [
              {
                "text": "chào nội bộ",
                "at": "l6:offer"
              }
            ]
          },
          {
            "id": "e-a3b",
            "t": "text",
            "text": "Hợp danh: không chứng khoán",
            "x": 7972,
            "y": 670,
            "size": 34,
            "at": "l7:securities"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: TVPL, công việc pháp lý · Luật 76/2025/QH15",
            "x": 8832,
            "y": 720,
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
          "say": "Third stop, Wednesday. Thảo writes three questions on her whiteboard.",
          "sub": "Chặng ba, thứ Tư. Thảo viết ba câu hỏi lên bảng.",
          "keys": [
            "ba câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Question one: alone, or with co-investors?",
          "sub": "Câu một: làm một mình hay có người cùng góp vốn?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Private enterprise and single member company: one owner. Multi member: two to fifty. Joint stock: three or more. Partnership: two or more.",
          "sub": "Tư nhân và một thành viên: một chủ. Hai thành viên trở lên: 2 đến 50. Cổ phần: tối thiểu 3. Hợp danh: ít nhất 2 cá nhân."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Question two: how much risk? Private owners and general partners are liable without limit, one private enterprise per person.",
          "sub": "Câu hai: chịu rủi ro tới đâu? Chủ tư nhân, thành viên hợp danh chịu vô hạn; mỗi người chỉ lập một doanh nghiệp tư nhân.",
          "keys": [
            "chịu vô hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Question three: will capital need to transfer to someone else?",
          "sub": "Câu ba: phần vốn có cần chuyển cho người khác không?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "In a multi member company, shares aren't freely transferable. Under Law seventy six, you offer them to the other members first.",
          "sub": "Công ty hai thành viên trở lên không tự do chuyển nhượng; theo Luật 76/2025/QH15, phải chào bán cho các thành viên còn lại theo tỷ lệ góp.",
          "keys": [
            "chào bán cho các thành viên còn lại"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And a partnership can't issue securities.",
          "sub": "Còn công ty hợp danh không được phát hành chứng khoán."
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Ba câu hỏi loại được bao nhiêu lựa chọn?",
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
          "say": "Can three questions really narrow five types?",
          "sub": "Ba câu hỏi loại được bao nhiêu lựa chọn?",
          "keys": [
            "loại được bao nhiêu"
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Dũng thử",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "house",
                "automobile"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm · Dũng trả lời ba câu",
            "icon": "house"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Câu 1: một mình",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:just"
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "→ Tư nhân hoặc một thành viên",
            "x": 100,
            "y": 1325,
            "size": 36,
            "at": "l2:single"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Câu 2: không đem nhà, xe ra",
            "x": 60,
            "y": 1400,
            "size": 44,
            "at": "l3:house",
            "color": "coral"
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "Tư nhân",
            "x": 100,
            "y": 1465,
            "size": 40,
            "at": "l4:rules"
          },
          {
            "id": "f-2x",
            "t": "strike",
            "over": "f-2b",
            "at": "l4:out"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Câu 3: 3 năm chưa gọi vốn",
            "x": 60,
            "y": 1540,
            "size": 44,
            "at": "l5:raise"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "→ TNHH một thành viên",
            "x": 60,
            "y": 1630,
            "size": 56,
            "at": "l6:single",
            "color": "accent",
            "hl": [
              {
                "text": "một thành viên",
                "at": "l6:single"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "phương án đầu để hỏi kỹ thêm",
            "x": 100,
            "y": 1710,
            "size": 34,
            "at": "l6:first",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop, Thursday. Dũng tries the three questions himself.",
          "sub": "Chặng bốn, thứ Năm. Dũng tự trả lời ba câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One: just me. So private enterprise or a single member company.",
          "sub": "Một: chỉ mình tôi. Vậy là tư nhân hoặc công ty một thành viên.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Two: my house and my motorbike stay out of contract risk.",
          "sub": "Hai: nhà với xe của tôi không đem ra gánh rủi ro hợp đồng.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That rules the private enterprise out.",
          "sub": "Vậy là loại doanh nghiệp tư nhân.",
          "keys": [
            "loại doanh nghiệp tư nhân"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Three: no plans to raise capital for three years.",
          "sub": "Ba: ba năm tới chưa định gọi vốn.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Result: a single member limited company. His first option to look into further.",
          "sub": "Kết quả: công ty trách nhiệm hữu hạn một thành viên, phương án đầu tiên để hỏi kỹ thêm.",
          "keys": [
            "phương án đầu tiên"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "People, risk, capital transfer: three questions cut out most options.",
          "sub": "Số người, mức rủi ro, nhu cầu chuyển vốn: ba câu loại bớt phần lớn lựa chọn.",
          "keys": [
            "loại bớt phần lớn lựa chọn"
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
            "text": "⑤ Thứ Sáu · Ba người, ba năm",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "printer",
                "busts-in-silhouette"
              ]
            },
            "at": "l1:Lan",
            "caption": "Thứ Sáu · xưởng in của Lan",
            "icon": "printer"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "3 người góp: cổ phần,",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l3:three"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "hai thành viên, hoặc hợp danh",
            "x": 2068,
            "y": 1320,
            "size": 36,
            "at": "l3:partnership"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Ngành có điều kiện, vốn pháp định?",
            "x": 2028,
            "y": 1390,
            "size": 36,
            "at": "l4:conditions",
            "color": "coral"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "→ đáp ứng trước",
            "x": 2068,
            "y": 1450,
            "size": 36,
            "at": "l4:first",
            "hl": [
              {
                "text": "trước",
                "at": "l4:first"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: TVPL 14/11/2018 · Lựa chọn loại hình nào?",
            "x": 2028,
            "y": 1795,
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
          "say": "Fifth stop, Friday. Meet Lan, Thảo's cousin, opening a print shop with two friends.",
          "sub": "Chặng năm, thứ Sáu. Đây là Lan, em họ Thảo, cùng hai người bạn mở xưởng in.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Three of us now. In three years, maybe new investors. What fits?",
          "sub": "Giờ ba đứa. Ba năm nữa, có thể mời thêm người góp vốn. Chọn gì ạ?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three founders: joint stock, multi member, or partnership.",
          "sub": "Ba người góp vốn có thể chọn công ty cổ phần, hai thành viên trở lên, hoặc hợp danh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But if the line has conditions on company type, or needs legal capital, meet those first.",
          "sub": "Nhưng ngành có điều kiện về loại hình hoặc cần vốn pháp định thì phải đáp ứng điều kiện đó trước.",
          "keys": [
            "đáp ứng điều kiện đó trước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s12",
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
            "at": "l1",
            "fit": [
              "g-a",
              "g-a2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": [
              "g-b",
              "g-b2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-ba",
            "t": "box",
            "x": 2028,
            "y": 1520,
            "w": 800,
            "h": 200,
            "at": "l1:A",
            "stroke": 4
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A · Hai thành viên trở lên",
            "x": 2053,
            "y": 1535,
            "size": 38,
            "at": "l1:A+200"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "bán vốn: chào nội bộ trước",
            "x": 2053,
            "y": 1600,
            "size": 34,
            "at": "l1:offer"
          },
          {
            "id": "g-bb",
            "t": "box",
            "x": 2888,
            "y": 1720,
            "w": 720,
            "h": 120,
            "at": "l2:B",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B · Cổ phần, ≥ 3 cổ đông",
            "x": 2908,
            "y": 1735,
            "size": 36,
            "at": "l2:B+200"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "chuẩn bị đón người góp",
            "x": 2908,
            "y": 1790,
            "size": 30,
            "at": "l2:prepare"
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "Cả hai: hữu hạn trong vốn góp",
            "x": 2028,
            "y": 1740,
            "size": 38,
            "at": "l3:Both",
            "hl": [
              {
                "text": "hữu hạn",
                "at": "l3:limit"
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
          "say": "Option A: a multi member limited company. A small, close group. Want to sell your share? Offer it to the others first.",
          "sub": "Cách A: công ty hai thành viên trở lên, nhóm nhỏ quen nhau; ai muốn bán phần vốn thì trước hết chào bán cho các thành viên còn lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: a joint stock company with at least three shareholders, accepting its governance, to prepare for new investors.",
          "sub": "Cách B: công ty cổ phần, ít nhất ba cổ đông, chấp nhận cách quản trị của loại hình này để chuẩn bị đón người góp.",
          "keys": [
            "chuẩn bị đón người góp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both limit liability to the capital contributed.",
          "sub": "Cả hai cách đều giới hạn trách nhiệm trong phạm vi vốn góp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choose for who'll invest in three years, not only today's team. One tree makes no hill; three trees together make a mountain.",
          "sub": "Chọn theo người sẽ cùng góp vốn trong ba năm tới, không chỉ nhóm hôm nay. “Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.”",
          "keys": [
            "ba năm tới"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Sáu tối · Dũng điền vốn",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi vốn thật cao cho oai",
          "why": "Hết hạn chưa góp đủ, không giảm vốn: chịu bằng toàn bộ tài sản, có thể bị coi là kê khai khống.",
          "rule": "Hữu hạn chỉ khi góp đúng cam kết"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Single member, done. Now a sky high capital, to look impressive. Limited liability protects me anyway!",
          "sub": "Một thành viên, xong. Giờ ghi vốn thật cao cho oai. Đằng nào trách nhiệm hữu hạn cũng che cho tôi!",
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
          "say": "Limited liability is a raincoat, not armour. Some rain gets through.",
          "sub": "Trách nhiệm hữu hạn là áo mưa, không phải áo giáp. Có mưa vẫn lọt.",
          "keys": [
            "áo mưa, không phải áo giáp"
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
          "say": "Fine. I'll write what I can really pay.",
          "sub": "Thôi được. Tôi ghi số góp nổi thật.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
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
      "id": "s14",
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
            "text": "⑥ Thứ Bảy · Khiên có lỗ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-sh",
            "t": "illus",
            "name": "shield",
            "x": 3996,
            "y": 1260,
            "size": 120,
            "at": "l1:shield"
          },
          {
            "id": "h-75",
            "t": "text",
            "text": "Điều 75: chịu toàn bộ tài sản",
            "x": 4136,
            "y": 1270,
            "size": 38,
            "at": "l2:seventy five",
            "hl": [
              {
                "text": "toàn bộ tài sản",
                "at": "l2:everything"
              }
            ]
          },
          {
            "id": "h-75b",
            "t": "text",
            "text": "nếu không góp, góp thiếu, trễ hạn",
            "x": 4156,
            "y": 1335,
            "size": 34,
            "at": "l2:late",
            "color": "coral"
          },
          {
            "id": "h-76",
            "t": "text",
            "text": "Không điều chỉnh = kê khai khống",
            "x": 3996,
            "y": 1420,
            "size": 42,
            "at": "l3:false",
            "color": "coral",
            "hl": [
              {
                "text": "kê khai khống",
                "at": "l3:false"
              }
            ]
          },
          {
            "id": "h-76b",
            "t": "text",
            "text": "Luật 76/2025/QH15",
            "x": 4036,
            "y": 1485,
            "size": 34,
            "at": "l3:seventy six",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Hữu hạn = góp đúng cam kết",
            "x": 3996,
            "y": 1590,
            "size": 56,
            "at": "l5:exactly",
            "color": "accent",
            "hl": [
              {
                "text": "góp đúng cam kết",
                "at": "l5:exactly"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 75 Luật Doanh nghiệp 2020 (Hệ thống Pháp luật)",
            "x": 3996,
            "y": 1795,
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
          "say": "Sixth stop, Saturday. Why the shield has holes.",
          "sub": "Chặng sáu, thứ Bảy. Vì sao tấm khiên có lỗ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article seventy five: a single member owner answers with everything for damage from capital paid late, short, or not at all.",
          "sub": "Điều 75: chủ công ty một thành viên chịu bằng toàn bộ tài sản với thiệt hại do không góp, góp không đủ, không đúng hạn.",
          "keys": [
            "toàn bộ tài sản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Law seventy six calls unpaid capital never adjusted false declaration.",
          "sub": "Luật 76/2025/QH15 còn coi việc không góp đủ mà không điều chỉnh là kê khai khống vốn điều lệ.",
          "keys": [
            "kê khai khống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Dũng's sky high number? Not a shield. A target.",
          "sub": "Con số trên trời của Dũng? Không phải khiên. Là bia ngắm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Limited liability protects you only when you pay exactly what you promised.",
          "sub": "Trách nhiệm hữu hạn chỉ bảo vệ bạn khi bạn góp vốn đúng như đã cam kết.",
          "keys": [
            "góp vốn đúng như đã cam kết"
          ]
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s15",
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
            "text": "Chủ nhật · Kế hoạch 3 năm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday",
            "hl": [
              {
                "text": "3 năm",
                "at": "l1:three"
              }
            ]
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
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-notepad",
                "chart-increasing"
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật · mỗi người một trang",
            "icon": "spiral-notepad"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Doanh thu dự kiến",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l4:revenue"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Bao nhiêu người góp vốn",
            "x": 5964,
            "y": 1335,
            "size": 46,
            "at": "l4:investors"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Có mở chi nhánh không",
            "x": 5964,
            "y": 1410,
            "size": 46,
            "at": "l4:branch"
          },
          {
            "id": "i-d",
            "t": "text",
            "text": "Dũng: một thành viên",
            "x": 5964,
            "y": 1520,
            "size": 42,
            "at": "l2:single",
            "color": "accent"
          },
          {
            "id": "i-l",
            "t": "text",
            "text": "Lan: nghiêng về cổ phần",
            "x": 5964,
            "y": 1590,
            "size": 42,
            "at": "l3:joint",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday. Each of them writes one page: the next three years.",
          "sub": "Chủ nhật. Mỗi người viết một trang: ba năm tới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Single member company. And a capital I can actually pay.",
          "sub": "Công ty một thành viên. Và số vốn tôi góp nổi thật.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "We lean joint stock. We'll ask more questions first.",
          "sub": "Bọn em nghiêng về cổ phần. Nhưng hỏi kỹ thêm đã.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each page has three lines: expected revenue, how many investors, any branch.",
          "sub": "Mỗi trang có ba dòng: doanh thu dự kiến, bao nhiêu người cùng góp vốn, có định mở chi nhánh không.",
          "keys": [
            "ba dòng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three years. Monday they picked for today. Sunday, for the road ahead.",
          "sub": "Ba năm. Thứ Hai họ chọn cho hôm nay. Chủ nhật, họ chọn cho chặng đường phía trước.",
          "keys": [
            "chặng đường phía trước"
          ]
        }
      ],
      "ref": "p17,p13"
    },
    {
      "id": "s16",
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
            "at": "l2:invoices",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ba câu hỏi · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l2:invoices+600"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:three"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l4:promised"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Trả lời ba câu cho mình",
            "x": 7932,
            "y": 1270,
            "size": 46,
            "at": "l5:Answer",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Ghi một loại hình nghiêng về",
            "x": 7932,
            "y": 1350,
            "size": 46,
            "at": "l5:write"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: vốn điều lệ",
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
            "y": 1720,
            "size": 28,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Quy định về đăng ký doanh nghiệp có thể đã được sửa đổi: kiểm văn bản mới nhất trước khi nộp.",
            "x": 7932,
            "y": 1770,
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
          "say": "So: a type means your risk, your companions, your growth.",
          "sub": "Tóm lại: chọn loại hình là chọn mức rủi ro, người cùng đi và cách mở rộng.",
          "keys": [
            "chọn mức rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: invoices alone don't force a company.",
          "sub": "Một: chỉ vì hoá đơn thì chưa buộc phải lập công ty."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: three questions. How many people, how much risk, will capital change hands.",
          "sub": "Hai: ba câu hỏi. Mấy người, rủi ro tới đâu, vốn có cần chuyển."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: limited liability holds only if you pay what you promised.",
          "sub": "Ba: hữu hạn chỉ giữ được khi góp đúng cam kết.",
          "keys": [
            "góp đúng cam kết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: answer the three questions for yourself, and write down one type.",
          "sub": "Việc làm ngay: trả lời ba câu hỏi cho trường hợp của bạn, ghi ra một loại hình nghiêng về.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: charter capital, how much to write. Rules may have changed, so check the latest text before filing.",
          "sub": "Bài tiếp: vốn điều lệ ghi bao nhiêu. Quy định về đăng ký doanh nghiệp có thể đã sửa đổi, kiểm văn bản mới nhất trước khi nộp.",
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
      "id": "s17",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the takeaway about limited liability?",
        "options": [
          "It protects you completely, even if you never contribute any money",
          "It protects you only when you contribute capital exactly as you committed",
          "It applies only to companies with more than fifty employees"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "shield",
        "why": "Trách nhiệm hữu hạn chỉ bảo vệ khi góp vốn đúng như đã cam kết."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the takeaway about limited liability?",
          "sub": "Câu Rút ra về trách nhiệm hữu hạn là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It protects you only when you contribute capital exactly as you committed.",
          "sub": "Chỉ bảo vệ bạn khi góp vốn đúng như đã cam kết."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A raincoat, not armour.",
          "sub": "Áo mưa, không phải áo giáp."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[31]"
    },
    {
      "id": "s18",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Chọn loại hình theo kế hoạch ba năm"
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
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24: vật neo con số “3 năm” (p12, p13) → bối cảnh (Dũng có khách, bạn bè khuyên ngược nhau, intro) → “có một chi tiết đáng chú ý: kế hoạch ba năm” → chọn loại hình thực ra là chọn gì (p17) → ba câu hỏi. Đét đứng trái + bảng trắng 10 ô theo MỘT TUẦN Ở VĂN PHÒNG KẾ TOÁN CỦA THẢO: thứ Hai Bác Bình và hộ kinh doanh (p1, p2) → thứ Ba khách đòi hoá đơn (p3, p4; BRK-04 p5; p6) → thứ Tư ba câu hỏi (p7, p8; BRK-07) → thứ Năm Dũng làm mẫu (vai “Hải” p9, p10) → thứ Sáu Lan và xưởng in (vai “Ngọc” p11, p12, p13) → “Khoan đã!” Dũng ghi vốn thật cao (vai “Tuấn” p15) → thứ Bảy khiên có lỗ (p14, p15, p16) → Chủ nhật kế hoạch ba năm (p17, khép vòng “3 năm”). Nhân vật: Thảo, Dũng, Bác Bình, Lan. Mọi điều luật, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s15"
  }
};
