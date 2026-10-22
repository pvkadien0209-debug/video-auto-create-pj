// record-keeping-for-households--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "record-keeping-for-households--w01",
  "unit": {
    "audience": "household-business-owners-upgrading",
    "slug": "record-keeping-for-households",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hộ kinh doanh phải ghi chép sổ sách, hoá đơn ra sao khi chuyển sang kê khai?",
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
              "a-nb",
              "a-l1"
            ],
            "zoom": 1.25,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-nb",
            "t": "illus",
            "name": "notebook",
            "x": 60,
            "y": 90,
            "size": 150,
            "at": "l1:notebook"
          },
          {
            "id": "a-l1",
            "t": "text",
            "text": "“Hôm nay bán khá,",
            "x": 230,
            "y": 100,
            "size": 58,
            "at": "l2:sold"
          },
          {
            "id": "a-l2",
            "t": "text",
            "text": "đưa tiền chợ,",
            "x": 260,
            "y": 190,
            "size": 54,
            "at": "l2:market"
          },
          {
            "id": "a-l3",
            "t": "text",
            "text": "trả nợ mối rau.”",
            "x": 260,
            "y": 275,
            "size": 54,
            "at": "l2:greens"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Bao nhiêu? Ngày nào?",
            "x": 230,
            "y": 380,
            "size": 54,
            "at": "l3:how much",
            "color": "coral",
            "hl": [
              {
                "text": "Bao nhiêu?",
                "at": "l3:how much"
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
          "say": "One line from a small notebook.",
          "sub": "Một dòng trong cuốn sổ tay nhỏ.",
          "keys": [
            "cuốn sổ tay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sold well today. Gave money for the market. Paid back the greens supplier.",
          "sub": "“Hôm nay bán khá, đưa tiền chợ, trả nợ mối rau.”",
          "keys": [
            "Hôm nay bán khá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How much? Which day? Nobody knows. Remember this line.",
          "sub": "Bao nhiêu? Ngày nào? Không ai biết. Nhớ dòng này nhé.",
          "keys": [
            "Nhớ dòng này"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
            "at": "l2",
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
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "notebook",
                "steaming-bowl"
              ]
            },
            "at": "l1",
            "caption": "Ngày 1 · quán bún đầu chợ",
            "icon": "notebook"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Năng nhặt chặt bị”",
            "x": 60,
            "y": 520,
            "size": 56,
            "at": "l6:pick",
            "color": "accent",
            "hl": [
              {
                "text": "Năng nhặt",
                "at": "l6:pick"
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
          "say": "The notebook belongs to Cô Hoa, noodle stall at the market gate. No more presumptive tax for her.",
          "sub": "Cuốn sổ là của Cô Hoa, quán bún đầu chợ. Từ nay cô không còn nộp khoán.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Before, I just remembered one fixed amount. Now I need figures to declare!",
          "sub": "Trước cô chỉ nhớ mức khoán. Giờ phải có số liệu để tự khai!",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, the accountant next door, neat as a ruler.",
          "sub": "Còn đây là Thảo, hàng xóm làm kế toán, ngăn nắp như cây thước kẻ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "One line a day, Cô Hoa. Done right, it's enough.",
          "sub": "Mỗi ngày vài dòng thôi cô. Ghi đúng là đủ.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The stall is busy from dawn to dusk. Books sound like a second job.",
          "sub": "Quán bận từ sáng tới tối. Ghi sổ nghe như thêm một nghề."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grandma would say: pick up a little, often, and the bag gets full.",
          "sub": "Ông bà dặn: “Năng nhặt chặt bị.”",
          "keys": [
            "Năng nhặt chặt bị"
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
            "text": "Ghi sổ thế nào cho đúng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:books",
            "hl": [
              {
                "text": "cho đúng",
                "at": "l1:right"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thành kế toán",
            "x": 2028,
            "y": 180,
            "size": 50,
            "at": "l2:accountant",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đúng sổ, đủ dòng",
            "x": 2028,
            "y": 270,
            "size": 52,
            "at": "l3:right book",
            "color": "accent",
            "hl": [
              {
                "text": "đúng sổ",
                "at": "l3:right book"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Sổ nào · ghi gì · giữ · hoá đơn",
            "x": 2028,
            "y": 370,
            "size": 46,
            "at": "l4:which"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Tháng ghi sổ đầu tiên",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l5:month"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:month+500",
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
            "at": "l5:month+750",
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
            "at": "l5:month+1000",
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
            "at": "l5:month+1250",
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
            "at": "l5:month+1500",
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
            "at": "l5:month+1750",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Ngày 1",
            "x": 2058,
            "y": 580,
            "size": 44,
            "at": "l5:month+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Ngày 2",
            "x": 2328,
            "y": 580,
            "size": 44,
            "at": "l5:month+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Ngày 3",
            "x": 2598,
            "y": 580,
            "size": 44,
            "at": "l5:month+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tuần 2",
            "x": 2868,
            "y": 580,
            "size": 44,
            "at": "l5:month+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tuần 3",
            "x": 3138,
            "y": 580,
            "size": 44,
            "at": "l5:month+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tuần 4",
            "x": 3408,
            "y": 580,
            "size": 44,
            "at": "l5:month+1870"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you keep books and invoices right, after presumptive tax?",
          "sub": "Vậy bỏ khoán rồi, ghi sổ sách, hoá đơn thế nào cho đúng?",
          "keys": [
            "thế nào cho đúng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by becoming an accountant.",
          "sub": "Không phải biến mình thành kế toán."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by the right book, and complete lines.",
          "sub": "Mà là chọn đúng sổ, ghi đủ dòng.",
          "keys": [
            "chọn đúng sổ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Which book, what to write, how long to keep it, and when to issue invoices.",
          "sub": "Sổ nào, ghi gì, giữ bao lâu, và lúc nào lập hoá đơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Cô Hoa's first month of bookkeeping.",
          "sub": "Cùng theo cô Hoa qua tháng ghi sổ đầu tiên.",
          "keys": [
            "tháng ghi sổ đầu tiên"
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
            "text": "① Ngày 1 · Vì sao ghi sổ?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Day one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Điều 5 TT 40/2021/TT-BTC",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l2:Article five",
            "hl": [
              {
                "text": "Điều 5",
                "at": "l2:Article five"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Kê khai → chế độ kế toán,",
            "x": 3996,
            "y": 250,
            "size": 48,
            "at": "l2:declaration",
            "color": "accent"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "hoá đơn, chứng từ",
            "x": 4036,
            "y": 320,
            "size": 46,
            "at": "l2:invoice"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Trừ: doanh thu đã được xác nhận",
            "x": 3996,
            "y": 400,
            "size": 42,
            "at": "l3:confirmed"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Không phải quyết toán thuế",
            "x": 3996,
            "y": 470,
            "size": 44,
            "at": "l4:year end"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 5 Thông tư 40/2021/TT-BTC (theo Thư viện Pháp luật)",
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
          "say": "First stop: day one. Why do books come with self declaration?",
          "sub": "Chặng một: ngày đầu. Vì sao tự khai thì phải ghi sổ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article five of Circular forty: declaration households follow accounting, invoice and voucher rules.",
          "sub": "Điều 5 Thông tư 40/2021: hộ nộp thuế theo kê khai phải thực hiện chế độ kế toán, hoá đơn, chứng từ.",
          "keys": [
            "Điều 5 Thông tư 40/2021"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Unless their trade's revenue is confirmed by a competent authority.",
          "sub": "Trừ ngành nghề có doanh thu theo xác nhận của cơ quan chức năng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And good news: no year end tax finalisation for them.",
          "sub": "Tin vui: hộ kê khai không phải quyết toán thuế.",
          "keys": [
            "không phải quyết toán thuế"
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
            "id": "c-il",
            "t": "illus",
            "name": "balance-scale",
            "x": 4896,
            "y": 160,
            "size": 110,
            "at": "l1:income"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Đủ sổ → tính trên thu nhập",
            "x": 5026,
            "y": 170,
            "size": 44,
            "at": "l1:income",
            "hl": [
              {
                "text": "thu nhập",
                "at": "l1:income"
              }
            ]
          },
          {
            "id": "c-5b",
            "t": "text",
            "text": "(doanh thu − chi phí)",
            "x": 5026,
            "y": 245,
            "size": 40,
            "at": "l1:minus",
            "color": "muted"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Sổ ≠ đối phó kiểm tra",
            "x": 4896,
            "y": 360,
            "size": 50,
            "at": "l2:inspection",
            "color": "muted"
          },
          {
            "id": "c-6x",
            "t": "strike",
            "over": "c-6",
            "at": "l2:not just"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Sổ = căn cứ tính đúng thuế",
            "x": 4896,
            "y": 450,
            "size": 48,
            "at": "l3:basis",
            "color": "accent",
            "hl": [
              {
                "text": "tính đúng thuế",
                "at": "l3:right"
              }
            ]
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "Sổ = vé gửi xe của tiền chi",
            "x": 4896,
            "y": 560,
            "size": 44,
            "at": "l4:parking",
            "color": "coral",
            "hl": [
              {
                "text": "vé gửi xe",
                "at": "l4:parking"
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
          "say": "A December article also mentions taxing income, revenue minus costs, for households with full books.",
          "sub": "Một bài tháng 12/2025 còn nêu định hướng tính thuế trên thu nhập, doanh thu trừ chi phí, với hộ có đủ sổ sách.",
          "keys": [
            "doanh thu trừ chi phí"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So books are not just for surviving an inspection.",
          "sub": "Vậy sổ sách không chỉ để đối phó kiểm tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They are the basis to work out your own tax, right.",
          "sub": "Mà là căn cứ để tính đúng số thuế của chính mình.",
          "keys": [
            "tính đúng số thuế"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Think of it as a parking ticket for every coin you spend. No ticket, no bike.",
          "sub": "Coi như vé gửi xe cho từng đồng chi ra. Mất vé là khó lấy xe.",
          "keys": [
            "vé gửi xe"
          ]
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Ngày 2 · Chọn đúng sổ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Day two"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Thông tư 152/2025/TT-BTC",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:Circular",
            "hl": [
              {
                "text": "152/2025",
                "at": "l2:one five two"
              }
            ]
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "ban hành 31/12/2025",
            "x": 6004,
            "y": 250,
            "size": 42,
            "at": "l2:December"
          },
          {
            "id": "d-1c",
            "t": "text",
            "text": "hiệu lực 01/01/2026",
            "x": 6004,
            "y": 315,
            "size": 42,
            "at": "l2:January"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 400,
            "w": 800,
            "h": 100,
            "at": "l3:S one a",
            "stroke": 4
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "S1a-HKD: không nộp 2 thuế",
            "x": 5994,
            "y": 415,
            "size": 50,
            "at": "l3:S one a+200",
            "hl": [
              {
                "text": "S1a-HKD",
                "at": "l3:S one a"
              }
            ]
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 520,
            "w": 800,
            "h": 100,
            "at": "l4:S two a",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "S2a-HKD: nộp theo tỷ lệ",
            "x": 5994,
            "y": 535,
            "size": 50,
            "at": "l4:S two a+200",
            "color": "coral",
            "hl": [
              {
                "text": "S2a-HKD",
                "at": "l4:S two a"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thông tư 152/2025/TT-BTC (theo Thư viện Pháp luật, 12/02/2026)",
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
          "say": "Second stop: day two. Choose the right book.",
          "sub": "Chặng hai: ngày thứ hai. Chọn đúng sổ.",
          "keys": [
            "Chọn đúng sổ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Circular one five two, issued on the last day of December twenty twenty five, in effect from January twenty twenty six.",
          "sub": "Thông tư 152/2025/TT-BTC, ban hành 31/12/2025, hiệu lực từ 01/01/2026.",
          "keys": [
            "Thông tư 152/2025/TT-BTC"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No VAT, no income tax? Use book S one a.",
          "sub": "Không chịu thuế giá trị gia tăng, không nộp thuế thu nhập cá nhân: dùng sổ S1a-HKD.",
          "keys": [
            "sổ S1a-HKD"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Paying both taxes as a percentage of revenue? Book S two a.",
          "sub": "Nộp hai loại thuế theo tỷ lệ trên doanh thu: dùng sổ S2a-HKD.",
          "keys": [
            "sổ S2a-HKD"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "BRK-06",
      "data": {
        "title": "Các sổ chi tiết khác",
        "items": [
          {
            "illus": "chart-increasing",
            "text": "S2b: doanh thu"
          },
          {
            "illus": "balance-scale",
            "text": "S2c: thu, chi"
          },
          {
            "illus": "package",
            "text": "S2d: hàng hoá"
          },
          {
            "illus": "dollar-banknote",
            "text": "S2e: tiền"
          },
          {
            "illus": "scroll",
            "text": "S3a: thuế khác"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "S two b, sales. S two c, revenue and costs. S two d, goods. S two e, cash.",
          "sub": "S2b doanh thu bán hàng. S2c doanh thu, chi phí. S2d vật liệu, hàng hoá. S2e tiền.",
          "keys": [
            "S2c"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And S three a, for activities under other taxes.",
          "sub": "Và S3a-HKD cho hoạt động chịu các loại thuế khác."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p4"
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
            "text": "③ Tối ngày 3 · Sửa một dòng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:evening"
          },
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
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "pencil"
              ]
            },
            "at": "l1:evening",
            "caption": "Tối ngày 3 · nhà cô Hoa",
            "icon": "notebook"
          },
          {
            "id": "e-old",
            "t": "text",
            "text": "Trước: “bán khá, đưa tiền chợ…”",
            "x": 7932,
            "y": 170,
            "size": 42,
            "at": "l3:Before",
            "color": "muted"
          },
          {
            "id": "e-oldx",
            "t": "strike",
            "over": "e-old",
            "at": "l3:vague"
          },
          {
            "id": "e-n1",
            "t": "text",
            "text": "Ngày · nội dung · số tiền",
            "x": 7932,
            "y": 260,
            "size": 52,
            "at": "l4:date",
            "color": "accent",
            "hl": [
              {
                "text": "số tiền",
                "at": "l4:amount"
              }
            ]
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "Thu: tiền bán bún",
            "x": 7932,
            "y": 350,
            "size": 46,
            "at": "l5:sales"
          },
          {
            "id": "e-n3",
            "t": "text",
            "text": "Chi: rau, thịt + số hoá đơn",
            "x": 7932,
            "y": 420,
            "size": 46,
            "at": "l5:costs"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: the evening of day three. Cô Hoa opens the same notebook.",
          "sub": "Chặng ba: tối ngày thứ ba. Cô Hoa mở lại cuốn sổ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo said: fix just one line tonight. Let's see.",
          "sub": "Thảo dặn tối nay sửa một dòng thôi. Để xem nào.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before: sold well, gave market money. Vague, and no amounts.",
          "sub": "Trước: bán khá, đưa tiền chợ. Mơ hồ, không có con số."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After: every line has a date, what it was for, and an amount.",
          "sub": "Sau: mỗi dòng có ngày, nội dung và số tiền.",
          "keys": [
            "ngày, nội dung và số tiền"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Noodle sales go under revenue. Greens and meat under costs, with the invoice number if any.",
          "sub": "Tiền bán bún ghi ở phần doanh thu. Tiền rau, thịt ghi ở phần chi phí, kèm số hoá đơn nếu có."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Một dòng sổ",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Bán khá, đưa tiền chợ, trả nợ mối rau",
        "right": "Ngày · nội dung · số tiền, thu tách chi",
        "wrongIllus": "spiral-notepad",
        "rightIllus": "ledger"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: a diary of feelings.",
          "sub": "Trước: nhật ký cảm xúc.",
          "keys": [
            "nhật ký cảm xúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: date, content, amount. Income and costs apart.",
          "sub": "Sau: ngày, nội dung, số tiền. Thu tách khỏi chi.",
          "keys": [
            "Thu tách khỏi chi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p5,p6"
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
            "id": "e-sum",
            "t": "text",
            "text": "Cuối tháng: cộng ra 2 con số",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l1:month",
            "hl": [
              {
                "text": "2 con số",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Không cầu kỳ, chỉ cần đủ",
            "x": 7932,
            "y": 610,
            "size": 50,
            "at": "l2:fancy",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ cần đủ",
                "at": "l2:complete"
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
          "say": "At month end, she can add up two numbers straight away.",
          "sub": "Cuối tháng, cô cộng được ngay hai con số.",
          "keys": [
            "hai con số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A good book needn't be fancy, just complete, with income and costs apart.",
          "sub": "Sổ đúng không cần cầu kỳ, chỉ cần đủ dòng và tách thu với chi.",
          "keys": [
            "không cần cầu kỳ"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "④ Tuần 2 · Sổ S2c-HKD",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:week two"
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
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "wood",
                "receipt"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Tuần 2 · xưởng mộc của Dũng",
            "icon": "wood"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "GTGT tỷ lệ, TNCN trên thu nhập",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l3:percentage"
          },
          {
            "id": "f-ca",
            "t": "box",
            "x": 60,
            "y": 1330,
            "w": 180,
            "h": 80,
            "at": "l4:A",
            "stroke": 4
          },
          {
            "id": "f-cat",
            "t": "text",
            "text": "A, B",
            "x": 95,
            "y": 1342,
            "size": 44,
            "at": "l4:A+200"
          },
          {
            "id": "f-cad",
            "t": "text",
            "text": "số, ngày chứng từ",
            "x": 270,
            "y": 1342,
            "size": 44,
            "at": "l4:voucher"
          },
          {
            "id": "f-cc",
            "t": "box",
            "x": 60,
            "y": 1430,
            "w": 180,
            "h": 80,
            "at": "l4:C",
            "stroke": 4
          },
          {
            "id": "f-cct",
            "t": "text",
            "text": "C",
            "x": 130,
            "y": 1442,
            "size": 44,
            "at": "l4:C+200"
          },
          {
            "id": "f-ccd",
            "t": "text",
            "text": "diễn giải",
            "x": 270,
            "y": 1442,
            "size": 44,
            "at": "l4:describe"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1530,
            "w": 180,
            "h": 80,
            "at": "l4:one",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-c1t",
            "t": "text",
            "text": "1",
            "x": 135,
            "y": 1542,
            "size": 44,
            "at": "l4:one+200",
            "color": "coral"
          },
          {
            "id": "f-c1d",
            "t": "text",
            "text": "số tiền",
            "x": 270,
            "y": 1542,
            "size": 44,
            "at": "l4:amount"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: week two, at the carpentry workshop of Dũng, Cô Hoa's regular customer.",
          "sub": "Chặng bốn: tuần thứ hai, ở xưởng mộc của Dũng, khách quen ăn bún của cô Hoa.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My wood comes with invoices. But where do I write them?",
          "sub": "Gỗ em mua có hoá đơn. Mà ghi vào đâu đây?",
          "face": "thinking",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Book S two c: VAT as a percentage of revenue, income tax on taxable income.",
          "sub": "Sổ S2c-HKD: cho hộ nộp thuế giá trị gia tăng theo tỷ lệ, thuế thu nhập cá nhân trên thu nhập tính thuế.",
          "keys": [
            "Sổ S2c-HKD"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Columns A and B: voucher number and date. C: describe it. One: the amount.",
          "sub": "Cột A, B: số hiệu và ngày chứng từ. Cột C: diễn giải. Cột 1: số tiền.",
          "keys": [
            "Cột A, B"
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
      "ref": "p7"
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
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-s1",
            "t": "text",
            "text": "① Số hoá đơn → cột A, ngày → B",
            "x": 60,
            "y": 1650,
            "size": 38,
            "at": "l1:A"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "② “mua gỗ làm tủ cho khách”",
            "x": 60,
            "y": 1705,
            "size": 38,
            "at": "l2:wood"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "③ Số tiền → cột 1, phần chi phí",
            "x": 60,
            "y": 1760,
            "size": 38,
            "at": "l3:costs"
          },
          {
            "id": "f-s4",
            "t": "text",
            "text": "④ Kẹp vào bìa tháng",
            "x": 960,
            "y": 1760,
            "size": 40,
            "at": "l4:folder",
            "hl": [
              {
                "text": "bìa tháng",
                "at": "l4:folder"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Mỗi dòng → một chứng từ thật",
            "x": 960,
            "y": 1815,
            "size": 34,
            "at": "l5:real",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Step one: the invoice number in column A, its date in column B.",
          "sub": "Bước một: số hoá đơn vào cột A, ngày trên hoá đơn vào cột B.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Step two, column C: wood for a customer's wardrobe.",
          "sub": "Bước hai, cột C: mua gỗ làm tủ cho đơn hàng của khách."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Step three: the amount in column one, under costs.",
          "sub": "Bước ba: số tiền vào cột 1, ở phần chi phí."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step four: clip the invoice into that month's folder. Easy to find later.",
          "sub": "Bước bốn: kẹp hoá đơn vào bìa của tháng đó, khi cần là tìm thấy ngay.",
          "keys": [
            "bìa của tháng đó"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Each line in the book should point back to a real voucher.",
          "sub": "Mỗi dòng sổ nên trỏ được về một chứng từ thật.",
          "keys": [
            "một chứng từ thật"
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
            "id": "f-d1",
            "t": "text",
            "text": "DT − chi phí hợp lý = căn cứ",
            "x": 60,
            "y": 1815,
            "size": 30,
            "at": "l1:difference",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Total revenue minus reasonable costs: that difference is the basis for income tax.",
          "sub": "Tổng doanh thu trừ tổng chi phí hợp lý: phần chênh lệch là căn cứ tính thuế thu nhập cá nhân.",
          "keys": [
            "phần chênh lệch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And if the tax office sends its figures, you check them against this book.",
          "sub": "Nếu cơ quan thuế cung cấp dữ liệu nộp thuế, hộ dùng sổ này để đối chiếu.",
          "keys": [
            "đối chiếu"
          ]
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tuần 3 · Giữ bao lâu?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:week three"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Tối thiểu 05 năm",
            "x": 2028,
            "y": 1260,
            "size": 70,
            "at": "l2:five years",
            "color": "accent",
            "hl": [
              {
                "text": "05 năm",
                "at": "l2:five years"
              }
            ]
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "giấy hoặc điện tử",
            "x": 2068,
            "y": 1370,
            "size": 46,
            "at": "l2:paper"
          },
          {
            "id": "g-1c",
            "t": "text",
            "text": "hoá đơn: theo pháp luật thuế",
            "x": 2068,
            "y": 1440,
            "size": 40,
            "at": "l3:invoices",
            "color": "muted"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Sổ tự mở: tên sổ, ngày lập,",
            "x": 2028,
            "y": 1530,
            "size": 44,
            "at": "l4:name"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "họ tên, chữ ký, dấu nếu có",
            "x": 2068,
            "y": 1600,
            "size": 42,
            "at": "l4:signature"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 3 Thông tư 152/2025/TT-BTC (theo bài hướng dẫn)",
            "x": 2028,
            "y": 1810,
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
          "say": "Fifth stop: week three. How long do you keep all this paper?",
          "sub": "Chặng năm: tuần thứ ba. Giấy tờ này giữ bao lâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article three of Circular one five two: at least five years, on paper or electronically.",
          "sub": "Điều 3 Thông tư 152/2025: tối thiểu 05 năm, bản giấy hoặc điện tử.",
          "keys": [
            "tối thiểu 05 năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Invoices follow the tax rules.",
          "sub": "Riêng hoá đơn thực hiện theo pháp luật về thuế."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You may add books or adapt forms. Each shows its name, start date, and the representative's name and signature.",
          "sub": "Được mở thêm sổ, sửa biểu mẫu; sổ ghi rõ tên sổ, ngày lập, họ tên, chữ ký, dấu nếu có của người đại diện hộ."
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": "l1",
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
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "ledger"
              ]
            },
            "at": 0,
            "caption": "Tuần 3 · xưởng mộc",
            "icon": "mobile-phone"
          },
          {
            "id": "g-m",
            "t": "text",
            "text": "Có hoá đơn điện tử → khỏi sổ",
            "x": 2028,
            "y": 1680,
            "size": 40,
            "at": "l1:electronic",
            "color": "muted"
          },
          {
            "id": "g-mx",
            "t": "strike",
            "over": "g-m",
            "at": "l3:still"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Vẫn dùng sổ để đối chiếu",
            "x": 2028,
            "y": 1740,
            "size": 46,
            "at": "l3:compare",
            "color": "accent",
            "hl": [
              {
                "text": "đối chiếu",
                "at": "l3:compare"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "Hoá đơn: nhanh · Sổ: tự kiểm",
            "x": 2928,
            "y": 1770,
            "size": 40,
            "at": "l4:faster"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I use electronic invoices now. The tax office sees everything, so no books, right?",
          "sub": "Em dùng hoá đơn điện tử rồi. Cơ quan thuế thấy hết, khỏi sổ chứ?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A common myth.",
          "sub": "Hiểu lầm thường gặp.",
          "keys": [
            "Hiểu lầm thường gặp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Even when the tax office works out your tax, you still compare its notice with your books.",
          "sub": "Kể cả khi cơ quan thuế hỗ trợ xác định, thông báo số thuế, hộ vẫn dùng sổ để đối chiếu.",
          "keys": [
            "vẫn dùng sổ để đối chiếu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "E-invoices make writing faster. The book lets you check your own tax.",
          "sub": "Hoá đơn điện tử giúp ghi nhanh hơn, còn sổ là cách tự kiểm tra con số thuế.",
          "keys": [
            "tự kiểm tra con số thuế"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Chưa thu tiền, đã phải lập hoá đơn?",
        "illus": "receipt"
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
          "say": "No money yet. Do you still issue the invoice?",
          "sub": "Chưa thu tiền. Đã phải lập hoá đơn?",
          "keys": [
            "lập hoá đơn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Tuần 4 · Lúc nào lập?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:week four"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "delivery-truck",
                "receipt"
              ]
            },
            "at": "l1:delivers",
            "caption": "Tuần 4 · giao tủ cho cô Hoa",
            "icon": "delivery-truck"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Hàng hoá: lúc giao quyền",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:hand",
            "color": "accent",
            "hl": [
              {
                "text": "lúc giao",
                "at": "l3:hand"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "dù đã thu tiền hay chưa",
            "x": 4036,
            "y": 1335,
            "size": 42,
            "at": "l3:paid"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Dịch vụ: lúc hoàn thành",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l4:Services"
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "thu trước: lúc thu (trừ tiền cọc)",
            "x": 4036,
            "y": 1480,
            "size": 38,
            "at": "l4:deposit"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Mỗi lần giao: một hoá đơn",
            "x": 3996,
            "y": 1550,
            "size": 44,
            "at": "l5:batches"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 9 Nghị định 254/2026/NĐ-CP (giải đáp 7/2026)",
            "x": 3996,
            "y": 1620,
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
          "say": "Sixth stop: week four. Dũng delivers a new cupboard to Cô Hoa's stall.",
          "sub": "Chặng sáu: tuần thứ tư. Dũng giao tủ mới cho quán cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Pay you next week, Dũng. Invoice later, no rush!",
          "sub": "Tuần sau cô trả nhé Dũng. Hoá đơn tính sau, từ từ!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article nine of Decree two five four: for goods, invoice when you hand them over, paid or not.",
          "sub": "Điều 9 Nghị định 254/2026: bán hàng thì lập hoá đơn lúc chuyển giao, không phân biệt đã thu tiền hay chưa.",
          "keys": [
            "không phân biệt đã thu tiền hay chưa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Services: when finished. Paid before or during? When you collect, except a deposit.",
          "sub": "Dịch vụ: lúc hoàn thành; thu tiền trước hoặc trong khi làm thì lập lúc thu, trừ tiền đặt cọc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Delivering in batches? One invoice for each delivery.",
          "sub": "Giao hàng nhiều lần thì mỗi lần giao lập hoá đơn tương ứng.",
          "keys": [
            "mỗi lần giao"
          ]
        }
      ],
      "ref": "p17"
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
            "id": "h-il",
            "t": "illus",
            "name": "crescent-moon",
            "x": 3996,
            "y": 1680,
            "size": 80,
            "at": "l1:ten"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "22h – 6h: hạn ngày làm việc sau",
            "x": 4096,
            "y": 1690,
            "size": 40,
            "at": "l1:ten"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Vượt 1 tỷ: đăng ký 30 ngày",
            "x": 3996,
            "y": 1770,
            "size": 42,
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
            "id": "h-6",
            "t": "text",
            "text": "Nhiều điểm bán: 1 mã số thuế",
            "x": 4896,
            "y": 1770,
            "size": 40,
            "at": "l3:locations"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sales from ten p.m. to six a.m., with no automatic software? Invoice by the next working day.",
          "sub": "Giao dịch từ 22 giờ đến 6 giờ sáng, không có phần mềm tự động: lập chậm nhất ngày làm việc tiếp theo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under one billion last year, over it this year? Register for e-invoices within thirty days.",
          "sub": "Năm trước chưa đến 1 tỷ, năm nay vượt: đăng ký hoá đơn điện tử trong 30 ngày.",
          "keys": [
            "trong 30 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Several locations? One tax code, with a location code on each invoice.",
          "sub": "Nhiều địa điểm: một mã số thuế, ghi mã địa điểm trên hoá đơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, meet Uncle Bình, the grocer by the market. He just got some bad advice.",
          "sub": "Cùng tuần đó, đây là Bác Bình, chủ tạp hoá cạnh chợ. Bác vừa được mách một mẹo dở.",
          "keys": [
            "Bác Bình"
          ]
        }
      ],
      "ref": "p18,p15"
    },
    {
      "id": "s18",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Tuần 4 · tạp hoá Bác Bình",
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
          "label": "Hai cuốn sổ: một thật, một để khai",
          "why": "Lập hai hệ thống sổ kế toán là hành vi bị cấm theo Điều 13 Luật Kế toán 2015.",
          "rule": "Một bộ sổ, ghi thật"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "A friend says keep two books: a true one, and a thin one for tax.",
          "sub": "Người quen mách: làm hai cuốn sổ, một ghi thật, một ghi ít để khai thuế.",
          "pose": "cross",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "det",
          "say": "A second book for tax? That's not a trick. That's a ban.",
          "sub": "Cuốn sổ thứ hai để khai? Đó không phải mẹo, mà là điều cấm.",
          "keys": [
            "điều cấm"
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
          "say": "Uncle Bình, two sets of books are prohibited. One true book.",
          "sub": "Bác ơi, lập hai hệ thống sổ là bị cấm. Một bộ sổ, ghi thật thôi.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One true book: the only way that's safe, and less tiring.",
          "sub": "Một bộ sổ, ghi thật: vừa an toàn vừa đỡ mệt.",
          "phase": "redo",
          "keys": [
            "vừa an toàn vừa đỡ mệt"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15,p16"
    },
    {
      "id": "s19",
      "module": "BRK-11",
      "data": {
        "title": "Điều 13 Luật Kế toán 2015 cấm",
        "items": [
          "Hai hệ thống sổ",
          "Giả mạo, tẩy xoá chứng từ",
          "Để ngoài sổ tài sản, nợ",
          "Huỷ tài liệu trước hạn"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The Accounting Law, Article thirteen, bans:",
          "sub": "Điều 13 Luật Kế toán 2015 cấm:",
          "keys": [
            "Điều 13"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four: early destruction.",
          "sub": "Bốn: huỷ tài liệu trước hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: off book debts.",
          "sub": "Ba: để ngoài sổ tài sản, nợ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two: fake vouchers.",
          "sub": "Hai: giả mạo, tẩy xoá chứng từ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One: two sets of books.",
          "sub": "Một: hai hệ thống sổ.",
          "keys": [
            "hai hệ thống sổ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p14"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Cuối tháng · Cuốn sổ ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "laptop"
              ]
            },
            "at": "l1:month",
            "caption": "Cuối tháng · nhà cô Hoa",
            "icon": "notebook"
          },
          {
            "id": "i-nb",
            "t": "illus",
            "name": "notebook",
            "x": 5964,
            "y": 1250,
            "size": 110,
            "at": "l2:line"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Ngày · nội dung · số tiền ✓",
            "x": 6094,
            "y": 1265,
            "size": 46,
            "at": "l2:line",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Thu 1 số · Chi 1 số",
            "x": 6094,
            "y": 1345,
            "size": 46,
            "at": "l3:two"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Phần mềm miễn phí? Hỏi thuế",
            "x": 5964,
            "y": 1450,
            "size": 44,
            "at": "l4:free",
            "hl": [
              {
                "text": "miễn phí",
                "at": "l4:free"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Năng ghi chặt sổ”",
            "x": 5964,
            "y": 1560,
            "size": 56,
            "at": "l5:write",
            "color": "accent",
            "hl": [
              {
                "text": "Năng ghi",
                "at": "l5:write"
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
          "say": "End of the month. Same notebook, same kitchen table.",
          "sub": "Cuối tháng. Vẫn cuốn sổ ấy, vẫn bàn bếp ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Every line has a date, a reason and an amount now!",
          "sub": "Giờ dòng nào cũng có ngày, nội dung, số tiền!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Two numbers: income and costs. Added up in five minutes.",
          "sub": "Hai con số: thu và chi. Cộng năm phút là xong.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Want software? Ask the tax office first. Simple free tools and support exist.",
          "sub": "Muốn dùng phần mềm thì hỏi cơ quan thuế trước, có loại miễn phí và được hỗ trợ.",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Pick up a little, often. Here: write a little, every day, and the book stays tight.",
          "sub": "“Năng nhặt chặt bị.” Ở đây: năng ghi, chặt sổ.",
          "keys": [
            "năng ghi, chặt sổ"
          ]
        }
      ],
      "ref": "p5,p19"
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
            "at": "l1:three",
            "fit": "all",
            "ms": 1400
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
            "at": "l5:open"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l2:book"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l3:voucher"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l4:invoice"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Mở sổ cho tháng này",
            "x": 7932,
            "y": 1270,
            "size": 52,
            "at": "l5:open",
            "color": "accent",
            "hl": [
              {
                "text": "tháng này",
                "at": "l5:month"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Bài tiếp: so hộ và công ty",
            "x": 7932,
            "y": 1360,
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
            "text": "Quy định thuế, kế toán, hoá đơn có thể đã được sửa đổi — kiểm văn bản mới nhất trước khi áp dụng.",
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
          "say": "One: pick the right book for your tax group.",
          "sub": "Một: chọn đúng mẫu sổ theo nhóm thuế của mình.",
          "keys": [
            "chọn đúng mẫu sổ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: date, content, amount, and a voucher behind every line. Keep them five years.",
          "sub": "Hai: ngày, nội dung, số tiền, mỗi dòng có chứng từ. Giữ ít nhất năm năm.",
          "keys": [
            "ít nhất năm năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: issue the invoice at the right moment.",
          "sub": "Ba: lập hoá đơn đúng lúc.",
          "keys": [
            "đúng lúc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: open a book for this month.",
          "sub": "Việc làm ngay: mở sổ cho tháng này.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: household or company? Rules may have changed since, so check the latest texts.",
          "sub": "Bài tiếp: so hộ kinh doanh với công ty. Quy định có thể đã sửa đổi, hãy kiểm văn bản mới nhất.",
          "keys": [
            "kiểm văn bản mới nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p20"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "Your cousin writes costs from memory without receipts, what should you advise?",
        "options": [
          "Write larger amounts so the tax looks smaller at the end of the year",
          "Stop recording costs at all because only revenue matters for tax",
          "Keep the invoice or voucher for each cost so every entry can be traced"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "receipt",
        "why": "Mỗi dòng sổ nên trỏ được về một chứng từ thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your cousin writes costs from memory without receipts, what should you advise?",
          "sub": "Anh họ bạn ghi chi phí theo trí nhớ, không có chứng từ, bạn nên khuyên gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Keep the invoice or voucher for each cost so every entry can be traced.",
          "sub": "Giữ hoá đơn, chứng từ cho từng khoản chi để dòng nào cũng lần ra được."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Every line should point back to a real voucher.",
          "sub": "Mỗi dòng sổ trỏ về một chứng từ thật."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[20]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Ghi sổ, hoá đơn cho hộ kinh doanh"
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
  "notes": "#145 bài MỚI (bài 2 chuỗi household-business-owners-upgrading) theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận dòng sổ tay “Hôm nay bán khá, đưa tiền chợ, trả nợ mối rau” (p5) → kéo ra thấy cô Hoa, Thảo → cuối tháng cuốn sổ trở lại với dòng đủ ngày, nội dung, số tiền (khép vòng s20). Dòng thời gian: THÁNG GHI SỔ ĐẦU TIÊN của cô Hoa (vai chị Hồng p5): ngày 1 vì sao ghi sổ (p1, p2) → ngày 2 TT 152, S1a/S2a (p3; BRK-06 các sổ chi tiết p4) → tối ngày 3 sửa một dòng (p5; BRK-04 Trước/Sau p6) → tuần 2 xưởng Dũng, sổ S2c, làm mẫu 4 bước (vai anh Tuấn p7–p10) → tuần 3 lưu 05 năm, hiểu lầm hoá đơn điện tử (p11–p13) → BRK-07 rehook → tuần 4 Dũng giao tủ, lúc nào lập hoá đơn (p17, p18) → “Khoan đã!” Bác Bình hai cuốn sổ (vai cô Mai p15, p16; Thảo vai con gái kế toán) → BRK-11 điều cấm (p14) → cuối tháng khép vòng + phần mềm miễn phí (p19) → tóm tắt + lưu ý #133 (p20). Nhân vật: Cô Hoa, Thảo, Dũng, Bác Bình. Ca dao neo: “Năng nhặt chặt bị” → “năng ghi, chặt sổ”. Số chỉ từ bài: Đ5 TT 40/2021, TT 152/2025 (31/12/2025, 01/01/2026), S1a, S2a, S2b, S2c, S2d, S2e, S3a, cột A/B/C/1, Đ3 TT 152, 05 năm, Đ13 Luật Kế toán 2015, Đ9 NĐ 254/2026, 22 giờ–6 giờ, 1 tỷ, 30 ngày. Câu đố questions[20].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
