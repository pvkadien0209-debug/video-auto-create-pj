// what-makes-a-valid-accounting-voucher--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-makes-a-valid-accounting-voucher--w01",
  "unit": {
    "audience": "junior-accountants-invoices",
    "slug": "what-makes-a-valid-accounting-voucher",
    "door": "ky-nang",
    "level": "B1",
    "title": "Chứng từ kế toán hợp lệ cần những yếu tố gì?",
    "series": "Chứng từ không sai một dòng — hoá đơn điện tử cho kế toán năm đầu"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "receipt",
                "pencil"
              ]
            },
            "at": "l1",
            "caption": "8:00 · ngày cuối tháng · phiếu thu",
            "icon": "receipt"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Bút xoá sửa số, số cuối đúng:",
            "x": 60,
            "y": 150,
            "size": 46,
            "at": "l3:final"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "còn giá trị không?",
            "x": 60,
            "y": 225,
            "size": 56,
            "at": "l3:valid",
            "color": "coral",
            "hl": [
              {
                "text": "còn giá trị",
                "at": "l3:still valid"
              }
            ]
          },
          {
            "id": "a-bA",
            "t": "box",
            "x": 60,
            "y": 330,
            "w": 780,
            "h": 90,
            "at": "l4:A",
            "stroke": 4
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A · Còn, vì số đã đúng",
            "x": 90,
            "y": 345,
            "size": 46,
            "at": "l4:A+200"
          },
          {
            "id": "a-bB",
            "t": "box",
            "x": 60,
            "y": 450,
            "w": 780,
            "h": 90,
            "at": "l4:B",
            "stroke": 4
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B · Mất giá trị",
            "x": 90,
            "y": 465,
            "size": 46,
            "at": "l4:B+200"
          },
          {
            "id": "a-Ax",
            "t": "strike",
            "over": "a-A",
            "at": "l5:B"
          },
          {
            "id": "a-Br",
            "t": "ring",
            "around": [
              "a-B"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l5:B"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Bút xoá = cục tẩy của niềm tin",
            "x": 60,
            "y": 650,
            "size": 52,
            "at": "l6:eraser",
            "color": "accent",
            "hl": [
              {
                "text": "cục tẩy của niềm tin",
                "at": "l6:trust"
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
          "say": "Meet Lan, a first year accountant. Eight a.m., last day of the month.",
          "sub": "Đây là Lan, kế toán năm đầu. Tám giờ sáng, ngày cuối tháng.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Oops, a wrong number on this receipt slip. A dab of correction fluid, done!",
          "sub": "Ối, ghi nhầm một số trên phiếu thu. Chấm tí bút xoá là xong!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The final number is right. So, is this receipt still valid?",
          "sub": "Số cuối cùng đã đúng. Vậy phiếu thu này còn giá trị không?",
          "keys": [
            "còn giá trị không"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A: yes, the number is right. B: no, it has lost its value. Your guess?",
          "sub": "A: còn, vì số đã đúng. B: mất giá trị. Bạn đoán xem?",
          "wait": 1500
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "B. An erased voucher has no value for payment or for the books.",
          "sub": "Đáp án B. Chứng từ bị tẩy xoá không có giá trị thanh toán và ghi sổ.",
          "keys": [
            "không có giá trị thanh toán và ghi sổ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Correction fluid is the eraser of trust.",
          "sub": "Bút xoá chính là cục tẩy của niềm tin.",
          "keys": [
            "cục tẩy của niềm tin"
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
          "at": "l5",
          "key": "nhan"
        }
      ],
      "ref": "intro,p7,p8"
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
            "at": 150,
            "fit": "B",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Chứng từ hợp lệ cần gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:valid",
            "hl": [
              {
                "text": "hợp lệ",
                "at": "l1:valid"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Phiếu chi thiếu chữ ký",
            "x": 2028,
            "y": 165,
            "size": 44,
            "at": "l2:missing"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Bảng kê không ghi ngày",
            "x": 2028,
            "y": 235,
            "size": 44,
            "at": "l2:no date"
          },
          {
            "id": "b-p",
            "t": "text",
            "text": "Nhìn là biết: đủ hay thiếu",
            "x": 2868,
            "y": 165,
            "size": 48,
            "at": "l3:complete",
            "color": "accent",
            "hl": [
              {
                "text": "đủ hay thiếu",
                "at": "l3:complete"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Luật Kế toán 2015 · NĐ 174/2016",
            "x": 2868,
            "y": 245,
            "size": 42,
            "at": "l4:Accounting"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một ngày dài của Lan",
            "x": 2028,
            "y": 420,
            "size": 50,
            "at": "l5:long day",
            "hl": [
              {
                "text": "Một ngày dài",
                "at": "l5:long day"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 520,
            "w": 210,
            "h": 90,
            "at": "l5:day+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2258,
            "y": 520,
            "w": 210,
            "h": 90,
            "at": "l5:day+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 520,
            "w": 210,
            "h": 90,
            "at": "l5:day+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2718,
            "y": 520,
            "w": 210,
            "h": 90,
            "at": "l5:day+1000",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2948,
            "y": 520,
            "w": 210,
            "h": 90,
            "at": "l5:day+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3178,
            "y": 520,
            "w": 210,
            "h": 90,
            "at": "l5:day+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3408,
            "y": 520,
            "w": 210,
            "h": 90,
            "at": "l5:day+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:30",
            "x": 2053,
            "y": 538,
            "size": 44,
            "at": "l5:day+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:30",
            "x": 2283,
            "y": 538,
            "size": 44,
            "at": "l5:day+720"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "10:30",
            "x": 2513,
            "y": 538,
            "size": 44,
            "at": "l5:day+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2743,
            "y": 538,
            "size": 44,
            "at": "l5:day+1120"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "15:00",
            "x": 2973,
            "y": 538,
            "size": 44,
            "at": "l5:day+1320"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "15:45",
            "x": 3203,
            "y": 538,
            "size": 44,
            "at": "l5:day+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "16:30",
            "x": 3433,
            "y": 538,
            "size": 44,
            "at": "l5:day+1720"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Luật Kế toán 2015 (88/2015/QH13) — Điều 16, 17, 18, 19, 41; Nghị định 174/2016/NĐ-CP — Điều 5",
            "x": 2028,
            "y": 720,
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
          "say": "So what makes an accounting voucher valid?",
          "sub": "Vậy chứng từ kế toán hợp lệ cần những yếu tố gì?",
          "keys": [
            "hợp lệ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Payment slips missing a signature, lists with no date: they arrive almost every week.",
          "sub": "Phiếu chi thiếu chữ ký, bảng kê không ghi ngày: tuần nào cũng gặp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stage one of the series promise: look at a voucher and know if it's complete.",
          "sub": "Chặng đầu của lời hứa: nhìn một chứng từ là biết đủ yếu tố hay chưa.",
          "keys": [
            "đủ yếu tố hay chưa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Based on the Accounting Law twenty fifteen and Decree one seven four of twenty sixteen.",
          "sub": "Dựa trên Luật Kế toán 2015 và Nghị định 174/2016/NĐ-CP."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Lan through one long day, stop by stop.",
          "sub": "Cùng theo Lan qua một ngày dài, từng chặng một.",
          "keys": [
            "một ngày dài"
          ]
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
            "text": "① 8:30 · Chứng từ là gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
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
                "ledger",
                "receipt"
              ]
            },
            "at": "l1:Thảo",
            "caption": "8:30 · chị Thảo ngồi cạnh Lan",
            "icon": "ledger"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Ghi lại nghiệp vụ đã xảy ra",
            "x": 3996,
            "y": 165,
            "size": 46,
            "at": "l2:happened",
            "hl": [
              {
                "text": "đã xảy ra",
                "at": "l2:happened"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "chi, thu, nhập, xuất, bán",
            "x": 4036,
            "y": 240,
            "size": 44,
            "at": "l3:Paying",
            "color": "muted"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Điều 18: mọi nghiệp vụ",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l4:every",
            "color": "accent",
            "hl": [
              {
                "text": "mọi nghiệp vụ",
                "at": "l4:every"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Không chứng từ: không căn cứ",
            "x": 3996,
            "y": 420,
            "size": 46,
            "at": "l5:basis",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: eight thirty. Meet Thảo, the senior accountant beside Lan.",
          "sub": "Chặng một: tám rưỡi. Đây là chị Thảo, kế toán tổng hợp ngồi cạnh Lan.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lan, a voucher records a transaction that has happened. On paper, or as data.",
          "sub": "Lan à, chứng từ ghi lại một nghiệp vụ đã xảy ra. Trên giấy, hoặc dữ liệu điện tử.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paying cash, receiving cash, stock in, stock out, selling goods.",
          "sub": "Chi tiền, thu tiền, nhập kho, xuất kho, bán hàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article eighteen, clause one: every economic or financial transaction must have one.",
          "sub": "Khoản 1 Điều 18: mọi nghiệp vụ kinh tế, tài chính đều phải lập chứng từ.",
          "keys": [
            "mọi nghiệp vụ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No voucher, no basis to record it in the books.",
          "sub": "Không có chứng từ, kế toán không có căn cứ ghi sổ.",
          "keys": [
            "không có căn cứ ghi sổ"
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
      "ref": "p1"
    },
    {
      "id": "s03",
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
            "id": "c-5",
            "t": "text",
            "text": "Mỗi nghiệp vụ: lập một lần",
            "x": 3996,
            "y": 520,
            "size": 50,
            "at": "l1:once",
            "hl": [
              {
                "text": "một lần",
                "at": "l1:only once"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Không “lập lại cho đẹp”",
            "x": 3996,
            "y": 610,
            "size": 48,
            "at": "l2:prettier",
            "color": "coral"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Sai → huỷ đúng cách",
            "x": 4896,
            "y": 640,
            "size": 50,
            "at": "l3:Cancel",
            "color": "accent",
            "hl": [
              {
                "text": "huỷ đúng cách",
                "at": "l3:properly"
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
          "say": "Same clause: one voucher per transaction, made only once.",
          "sub": "Cũng khoản 1: mỗi nghiệp vụ chỉ lập chứng từ một lần.",
          "keys": [
            "một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One payment never gets two different slips. No remaking it prettier.",
          "sub": "Một khoản chi không thể có hai phiếu chi. Đã lập thì không “lập lại cho đẹp”.",
          "keys": [
            "lập lại cho đẹp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wrote it wrong? Cancel it properly, don't slip a new sheet on top.",
          "sub": "Viết sai thì huỷ đúng cách, đừng lập thêm tờ mới để ghi đè."
        }
      ],
      "ref": "p2"
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
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:30 · Bảy nội dung",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:nine",
            "hl": [
              {
                "text": "Bảy nội dung",
                "at": "l2:seven"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "receipt",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:slip",
            "caption": "9:30 · phiếu chi văn phòng phẩm",
            "icon": "receipt"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 40,
            "h": 40,
            "at": "l3:name",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 154,
            "size": 50,
            "at": "l3:name+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Tên, số hiệu",
            "x": 6026,
            "y": 160,
            "size": 40,
            "at": "l3:name+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 232,
            "w": 40,
            "h": 40,
            "at": "l3:date",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 216,
            "size": 50,
            "at": "l3:date+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Ngày, tháng, năm lập",
            "x": 6026,
            "y": 222,
            "size": 40,
            "at": "l3:date+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 294,
            "w": 40,
            "h": 40,
            "at": "l4:issued",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 278,
            "size": 50,
            "at": "l4:issued+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Bên lập: tên, địa chỉ",
            "x": 6026,
            "y": 284,
            "size": 40,
            "at": "l4:issued+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 356,
            "w": 40,
            "h": 40,
            "at": "l4:received",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 340,
            "size": 50,
            "at": "l4:received+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Bên nhận: tên, địa chỉ",
            "x": 6026,
            "y": 346,
            "size": 40,
            "at": "l4:received+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 418,
            "w": 40,
            "h": 40,
            "at": "l5:what",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 402,
            "size": 50,
            "at": "l5:what+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Nội dung nghiệp vụ",
            "x": 6026,
            "y": 408,
            "size": 40,
            "at": "l5:what+200"
          },
          {
            "id": "d-c5",
            "t": "box",
            "x": 5964,
            "y": 480,
            "w": 40,
            "h": 40,
            "at": "l6:quantity",
            "stroke": 5
          },
          {
            "id": "d-k5",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 464,
            "size": 50,
            "at": "l6:quantity+600",
            "color": "accent"
          },
          {
            "id": "d-l5",
            "t": "text",
            "text": "Số lượng, giá, tiền",
            "x": 6026,
            "y": 470,
            "size": 40,
            "at": "l6:quantity+200"
          },
          {
            "id": "d-c6",
            "t": "box",
            "x": 5964,
            "y": 542,
            "w": 40,
            "h": 40,
            "at": "l7:signatures",
            "stroke": 5
          },
          {
            "id": "d-k6",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 526,
            "size": 50,
            "at": "l7:signatures+600",
            "color": "accent"
          },
          {
            "id": "d-l6",
            "t": "text",
            "text": "Chữ ký, họ tên",
            "x": 6026,
            "y": 532,
            "size": 40,
            "at": "l7:signatures+200"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "thu, chi: bằng số + bằng chữ",
            "x": 6864,
            "y": 640,
            "size": 42,
            "at": "l6:words",
            "color": "coral",
            "hl": [
              {
                "text": "bằng chữ",
                "at": "l6:words"
              }
            ]
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "Khoản 2: thêm nội dung tuỳ loại",
            "x": 6864,
            "y": 705,
            "size": 40,
            "at": "l8:extra"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: khoản 1, 2 Điều 16 Luật Kế toán 2015",
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
          "say": "Second stop: nine thirty. A payment slip for office supplies lands on Lan's desk.",
          "sub": "Chặng hai: chín rưỡi. Một phiếu chi mua văn phòng phẩm đến bàn Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article sixteen, clause one, lists seven main contents.",
          "sub": "Khoản 1 Điều 16 liệt kê bảy nội dung chủ yếu.",
          "keys": [
            "bảy nội dung chủ yếu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One, the name and number. Two, the date it was made.",
          "sub": "Một, tên và số hiệu. Hai, ngày, tháng, năm lập."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three, who issued it, with address. Four, who received it, with address.",
          "sub": "Ba, tên, địa chỉ bên lập. Bốn, tên, địa chỉ bên nhận."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five, what the transaction is.",
          "sub": "Năm, nội dung nghiệp vụ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Six: quantity, unit price, amount. Cash slips show the total in numbers and in words.",
          "sub": "Sáu, số lượng, đơn giá, số tiền; chứng từ thu, chi tiền ghi tổng cả bằng số và bằng chữ.",
          "keys": [
            "bằng số và bằng chữ"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Seven: signatures and full names of the maker, the approver and others involved.",
          "sub": "Bảy, chữ ký, họ tên người lập, người duyệt và người liên quan."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Clause two allows extra contents, depending on the type.",
          "sub": "Khoản 2 cho thêm nội dung khác tuỳ loại chứng từ."
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
            "fit": "D",
            "move": "cut"
          },
          {
            "at": "l1",
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
            "id": "d-miss",
            "t": "text",
            "text": "Thiếu ô ký → ghi chú, bổ sung",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l4:notes",
            "color": "coral",
            "hl": [
              {
                "text": "bổ sung",
                "at": "l4:asks"
              }
            ]
          },
          {
            "id": "d-r",
            "t": "ring",
            "around": [
              "d-l6"
            ],
            "color": "coral",
            "stroke": 8,
            "at": "l4:notes"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Step one: name and number. Step two: the date. Okay.",
          "sub": "Bước một: tên phiếu, số phiếu. Bước hai: ngày lập. Ổn.",
          "pose": "think"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Three: payer and receiver. Four: is the content clear? Yes.",
          "sub": "Ba: bên chi, người nhận tiền. Bốn: nội dung chi rõ chưa? Rõ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Five: numbers against words. Six: signatures and names... one box is empty!",
          "sub": "Năm: số tiền bằng số so với bằng chữ. Sáu: chữ ký, họ tên… trống một ô!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So Lan notes it, and asks for it before recording.",
          "sub": "Lan ghi chú lại, đề nghị bổ sung trước khi ghi sổ.",
          "keys": [
            "bổ sung trước khi ghi sổ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Check all seven in a fixed order, and nothing slips through.",
          "sub": "Dò đủ bảy mục theo một thứ tự cố định thì không sót.",
          "keys": [
            "thứ tự cố định"
          ]
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
            "text": "③ 10:30 · Lập chứng từ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "give",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "pencil",
                "package"
              ]
            },
            "at": "l1:Dũng",
            "caption": "10:30 · phiếu xuất kho viết bút chì",
            "icon": "pencil"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Bút chì, viết tắt, chừa trống",
            "x": 7932,
            "y": 165,
            "size": 46,
            "at": "l2:pencil",
            "color": "muted"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Khoản 3 Điều 18:",
            "x": 7932,
            "y": 255,
            "size": 48,
            "at": "l3:Clause"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Không viết tắt",
            "x": 7972,
            "y": 330,
            "size": 44,
            "at": "l4:abbreviations"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Không tẩy xoá, sửa chữa",
            "x": 7972,
            "y": 395,
            "size": 44,
            "at": "l4:erasing",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Viết bằng bút mực",
            "x": 7972,
            "y": 460,
            "size": 44,
            "at": "l4:Ink",
            "hl": [
              {
                "text": "bút mực",
                "at": "l4:Ink"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Chỗ trống: gạch chéo",
            "x": 7972,
            "y": 525,
            "size": 44,
            "at": "l5:diagonal",
            "color": "accent",
            "hl": [
              {
                "text": "gạch chéo",
                "at": "l5:diagonal"
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
          "say": "Third stop: ten thirty. Meet Dũng from the warehouse, holding a stock slip.",
          "sub": "Chặng ba: mười rưỡi. Đây là Dũng, bên kho, cầm phiếu xuất kho.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wrote it in pencil, short forms, left some gaps. Easy to fix later!",
          "sub": "Em viết bút chì, viết tắt, chừa chỗ trống. Sau sửa cho dễ!",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Easy to fix is exactly the problem. Clause three of Article eighteen sets the rules.",
          "sub": "Dễ sửa chính là vấn đề. Khoản 3 Điều 18 đặt quy tắc ghi.",
          "keys": [
            "Dễ sửa chính là vấn đề"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No abbreviations. No erasing or altering. Ink pen only.",
          "sub": "Không viết tắt. Không tẩy xoá, sửa chữa. Viết bằng bút mực.",
          "keys": [
            "bút mực"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And blank spaces get a diagonal line, so nothing sneaks in later.",
          "sub": "Chỗ còn trống phải gạch chéo, để không ai chen thêm.",
          "keys": [
            "gạch chéo"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-5",
            "t": "text",
            "text": "Không mẫu: tự lập, đủ Điều 16",
            "x": 7932,
            "y": 640,
            "size": 42,
            "at": "l1:form",
            "hl": [
              {
                "text": "đủ Điều 16",
                "at": "l1:sixteen"
              }
            ]
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "NĐ 174: tự thiết kế biểu mẫu",
            "x": 7932,
            "y": 710,
            "size": 40,
            "at": "l2:design"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Đủ liên · các liên giống nhau",
            "x": 8832,
            "y": 640,
            "size": 44,
            "at": "l3:copy",
            "color": "accent",
            "hl": [
              {
                "text": "giống nhau",
                "at": "l3:same"
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
          "say": "No official form? Make your own, with all the contents of Article sixteen.",
          "sub": "Chưa có mẫu? Đơn vị tự lập, nhưng phải đủ nội dung Điều 16.",
          "keys": [
            "đủ nội dung Điều 16"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article five of Decree one seven four also lets businesses design their own forms.",
          "sub": "Điều 5 Nghị định 174/2016 cũng cho đơn vị kinh doanh tự thiết kế biểu mẫu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Several copies? Clause four: make them all, and every copy says the same thing.",
          "sub": "Nhiều liên? Khoản 4: lập đủ số liên, nội dung các liên phải giống nhau.",
          "keys": [
            "giống nhau"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Viết sai trên phiếu thu",
        "wrong": "Bút xoá sửa số, số cuối đúng là được",
        "right": "Gạch chéo huỷ, giữ tờ huỷ, lập tờ mới",
        "wrongIllus": "pencil",
        "rightIllus": "black-nib"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Correction fluid on a receipt? It loses its value.",
          "sub": "Bút xoá trên phiếu thu? Mất giá trị.",
          "keys": [
            "Mất giá trị"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cross it out, keep it, write a fresh one.",
          "sub": "Gạch chéo huỷ, giữ tờ huỷ, lập tờ mới.",
          "keys": [
            "lập tờ mới"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "E",
            "move": "cut"
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-8",
            "t": "text",
            "text": "Khoản 5: người ký chịu trách nhiệm",
            "x": 8832,
            "y": 705,
            "size": 40,
            "at": "l1:answer"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Sai: huỷ, lập lại · không sửa tờ cũ",
            "x": 7932,
            "y": 760,
            "size": 30,
            "at": "l2:Never",
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
          "say": "Clause five: the maker, the approver and every signer answer for the content.",
          "sub": "Khoản 5: người lập, người duyệt và người ký tên chịu trách nhiệm về nội dung.",
          "keys": [
            "chịu trách nhiệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Written wrong? Cancel and redo. Never fix the old sheet.",
          "sub": "Viết sai thì huỷ và lập lại, đừng bao giờ sửa trên tờ cũ.",
          "keys": [
            "đừng bao giờ sửa trên tờ cũ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Got it. Ink pen, full words, lines through the gaps.",
          "sub": "Rõ rồi. Bút mực, viết đủ chữ, gạch chéo chỗ trống.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p7,p9"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 14:00 · Ai ký, ký thế nào?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Meet"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "writing-hand",
                "receipt"
              ]
            },
            "at": "l1:Hoa",
            "caption": "14:00 · phòng giám đốc",
            "icon": "writing-hand"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Điều 19: ký theo chức danh",
            "x": 60,
            "y": 1255,
            "size": 40,
            "at": "l2:box",
            "hl": [
              {
                "text": "chức danh",
                "at": "l2:printed"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Không mực đỏ · không dấu khắc sẵn",
            "x": 60,
            "y": 1335,
            "size": 40,
            "at": "l3:red",
            "color": "coral"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Người có thẩm quyền / uỷ quyền",
            "x": 60,
            "y": 1415,
            "size": 40,
            "at": "l4:authorised"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Phiếu chi: duyệt chi + KTT",
            "x": 60,
            "y": 1495,
            "size": 44,
            "at": "l5:approver",
            "color": "accent"
          },
          {
            "id": "f-4b",
            "t": "text",
            "text": "ký theo từng liên",
            "x": 100,
            "y": 1565,
            "size": 42,
            "at": "l5:every copy",
            "hl": [
              {
                "text": "từng liên",
                "at": "l5:every copy"
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
          "say": "Fourth stop: two p.m. Meet Cô Hoa, the director, forever in a hurry.",
          "sub": "Chặng bốn: hai giờ chiều. Đây là cô Hoa, giám đốc, lúc nào cũng vội.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article nineteen, clause one: sign every box printed on the voucher.",
          "sub": "Khoản 1 Điều 19: ký đủ chữ ký theo chức danh in trên chứng từ.",
          "keys": [
            "chức danh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No red ink. No ready made signature stamps.",
          "sub": "Không ký mực đỏ. Không đóng dấu chữ ký khắc sẵn.",
          "keys": [
            "mực đỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clause two: only the authorised person, or their deputy, signs.",
          "sub": "Khoản 2: chữ ký do người có thẩm quyền hoặc người được uỷ quyền ký."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Clause three: payment slips need the approver and the chief accountant, on every copy.",
          "sub": "Khoản 3: chứng từ chi tiền do người duyệt chi và kế toán trưởng ký, ký theo từng liên.",
          "keys": [
            "ký theo từng liên"
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
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "14:15 · phòng giám đốc",
        "actors": [
          {
            "id": "hoa",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ký sẵn xấp phiếu chi, điền sau",
          "why": "Khoản 2 Điều 19 nghiêm cấm ký chứng từ khi chưa ghi đủ nội dung thuộc trách nhiệm của người ký.",
          "rule": "Chữ ký đi sau nội dung"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "So busy, Lan. Here, all signed already. Fill in the amounts later!",
          "sub": "Bận quá Lan ơi. Đây, cô ký sẵn hết. Em điền số tiền sau nhé!",
          "pose": "give",
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
          "say": "Clause two strictly bans signing before the signer's part is filled in.",
          "sub": "Khoản 2 nghiêm cấm ký khi chưa ghi đủ nội dung thuộc trách nhiệm người ký.",
          "keys": [
            "nghiêm cấm"
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
          "who": "lan",
          "say": "Cô Hoa, may I fill in each slip first, then bring them back to sign?",
          "sub": "Cô ơi, em điền đủ từng phiếu rồi mang cô ký được không ạ?",
          "phase": "redo",
          "pose": "hold"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The signature comes after the content, never before.",
          "sub": "Chữ ký đi sau nội dung, không bao giờ đi trước.",
          "phase": "redo",
          "keys": [
            "Chữ ký đi sau nội dung"
          ]
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
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Không có tờ giấy nào, chứng từ còn tính?",
        "illus": "laptop"
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
          "say": "No paper at all? Is an electronic voucher still a voucher?",
          "sub": "Chẳng có tờ giấy nào? Chứng từ điện tử có tính không?",
          "keys": [
            "Chứng từ điện tử"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
            "text": "⑤ 15:00 · Chứng từ điện tử",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "locked"
              ]
            },
            "at": "l1:opens",
            "caption": "15:00 · chứng từ trên máy",
            "icon": "laptop"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Điều 17: đủ nội dung Điều 16",
            "x": 2028,
            "y": 1255,
            "size": 46,
            "at": "l3:seventeen",
            "hl": [
              {
                "text": "Điều 17",
                "at": "l3:seventeen"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "dữ liệu mã hoá, không đổi",
            "x": 2068,
            "y": 1335,
            "size": 44,
            "at": "l4:encoded",
            "color": "accent",
            "hl": [
              {
                "text": "không đổi",
                "at": "l4:change"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Bảo mật, bảo toàn dữ liệu",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l5:secure"
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "chống sao chép, đánh cắp",
            "x": 2068,
            "y": 1490,
            "size": 42,
            "at": "l5:copying",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: three p.m. Lan opens an electronic voucher.",
          "sub": "Chặng năm: ba giờ chiều. Lan mở một chứng từ điện tử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "No paper, no ink. Does this even count?",
          "sub": "Không giấy, không mực. Thế này có tính không nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen, clause one: yes, if it has the Article sixteen contents...",
          "sub": "Khoản 1 Điều 17: có, nếu đủ nội dung ở Điều 16…",
          "keys": [
            "đủ nội dung"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "...as encoded data that doesn't change when sent or stored.",
          "sub": "…và là dữ liệu điện tử được mã hoá, không bị thay đổi khi truyền hay lưu.",
          "keys": [
            "không bị thay đổi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Clause two: keep it secure and intact, safe from copying, theft and misuse.",
          "sub": "Khoản 2: bảo mật, bảo toàn dữ liệu, chống sao chép, đánh cắp, dùng sai quy định."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s14",
      "module": "BRK-10",
      "data": {
        "quote": "Chứng từ điện tử phải có chữ ký điện tử, có giá trị như chữ ký trên chứng từ giấy",
        "mark": "có giá trị như chữ ký",
        "by": "Khoản 4 Điều 19 Luật Kế toán (tóm ý)",
        "illus": "writing-hand"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "An e-voucher needs an e-signature, worth the same as one on paper.",
          "sub": "Chứng từ điện tử cần chữ ký điện tử, có giá trị như chữ ký trên giấy.",
          "keys": [
            "có giá trị như chữ ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article nineteen, clause four.",
          "sub": "Khoản 4 Điều 19 Luật Kế toán."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "g-4",
            "t": "text",
            "text": "NĐ 174: dùng chữ ký điện tử",
            "x": 2028,
            "y": 1730,
            "size": 44,
            "at": "l1:signatures"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Khoản 6 Điều 18: tra cứu được",
            "x": 2928,
            "y": 1730,
            "size": 44,
            "at": "l2:searchable",
            "color": "accent",
            "hl": [
              {
                "text": "tra cứu được",
                "at": "l2:searchable"
              }
            ]
          },
          {
            "id": "g-5b",
            "t": "text",
            "text": "suốt thời hạn lưu trữ",
            "x": 2968,
            "y": 1800,
            "size": 40,
            "at": "l2:storage"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Article five of Decree one seven four lets units use e-signatures in accounting work.",
          "sub": "Điều 5 Nghị định 174/2016 cho dùng chữ ký điện tử trong công tác kế toán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And stored e-vouchers must stay safe and searchable for the whole storage period.",
          "sub": "Khoản 6 Điều 18: chứng từ điện tử phải an toàn, bảo mật, tra cứu được suốt thời hạn lưu trữ.",
          "keys": [
            "tra cứu được"
          ]
        }
      ],
      "ref": "p14"
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
            "text": "⑥ 15:45 · Giấy hay điện tử?",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "printer",
                "laptop"
              ]
            },
            "at": "l1:Dũng",
            "caption": "15:45 · hai bản của một phiếu",
            "icon": "printer"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "Bản giấy thanh toán tiếp?",
            "x": 3996,
            "y": 1255,
            "size": 48,
            "at": "l2:paper",
            "color": "coral"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Điều 17 khoản 3:",
            "x": 3996,
            "y": 1345,
            "size": 46,
            "at": "l3:clause three"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "bản điện tử thực hiện nghiệp vụ",
            "x": 4036,
            "y": 1420,
            "size": 42,
            "at": "l3:electronic",
            "color": "accent",
            "hl": [
              {
                "text": "bản điện tử",
                "at": "l3:electronic version"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "bản giấy: chỉ để lưu giữ",
            "x": 4036,
            "y": 1490,
            "size": 42,
            "at": "l4:records"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Hai bản → chỉ một bản thanh toán",
            "x": 3996,
            "y": 1740,
            "size": 48,
            "at": "l5:Only one",
            "hl": [
              {
                "text": "chỉ một bản",
                "at": "l5:Only one"
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
          "say": "Sixth stop: quarter to four. Dũng turned a paper slip into an electronic one, to pay.",
          "sub": "Chặng sáu: bốn giờ kém mười lăm. Dũng chuyển phiếu giấy thành chứng từ điện tử để thanh toán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So now there are two. Can I pay with the paper one too?",
          "sub": "Giờ có hai bản. Bản giấy đem thanh toán tiếp được không?",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. Article seventeen, clause three: once converted for payment, the electronic version does the job.",
          "sub": "Không. Khoản 3 Điều 17: đã chuyển để giao dịch, thanh toán thì bản điện tử có giá trị thực hiện.",
          "keys": [
            "bản điện tử"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The paper one is kept only for records, tracking and checks.",
          "sub": "Bản giấy chỉ còn giá trị lưu giữ để ghi sổ, theo dõi, kiểm tra."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two copies, one wallet. Only one of them can pay.",
          "sub": "Hai bản cùng tồn tại thì chỉ một bản có giá trị thanh toán.",
          "keys": [
            "chỉ một bản"
          ]
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
            "text": "⑦ 16:30 · Tiếng nước ngoài",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "globe-with-meridians",
                "laptop"
              ]
            },
            "at": "l1:software",
            "caption": "16:30 · hoá đơn phần mềm nước ngoài",
            "icon": "globe-with-meridians"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "NĐ 174: dịch nội dung chủ yếu",
            "x": 5964,
            "y": 1255,
            "size": 44,
            "at": "l3:translate",
            "color": "accent",
            "hl": [
              {
                "text": "dịch",
                "at": "l3:translate"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "bản dịch kẹp cùng bản chính",
            "x": 6004,
            "y": 1335,
            "size": 42,
            "at": "l4:Clip"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Kèm theo: dịch khi có yêu cầu",
            "x": 5964,
            "y": 1415,
            "size": 40,
            "at": "l4:Attachments",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: four thirty. A software bill from an overseas supplier, all in English.",
          "sub": "Chặng bảy: bốn rưỡi. Hoá đơn phần mềm của nhà cung cấp nước ngoài, toàn tiếng Anh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I can read English. Do I still need to translate it?",
          "sub": "Tiếng Anh em đọc được. Vẫn phải dịch ạ?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes. Article five of Decree one seven four: translate the main content into Vietnamese.",
          "sub": "Có. Điều 5 Nghị định 174/2016: dịch nội dung chủ yếu ra tiếng Việt.",
          "keys": [
            "dịch nội dung chủ yếu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clip the translation to the original. Attachments, only if a state body asks.",
          "sub": "Bản dịch đính kèm bản chính. Tài liệu kèm theo chỉ dịch khi cơ quan nhà nước yêu cầu."
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s18",
      "module": "BRK-02",
      "data": {
        "kicker": "Lưu trữ tối thiểu",
        "title": "5 năm và 10 năm",
        "hl": "10 năm",
        "sub": "Khoản 5 Điều 41 Luật Kế toán"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then storage. Five years, or ten.",
          "sub": "Rồi đến lưu trữ. Năm năm, hay mười năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clause five of Article forty one sets the minimum.",
          "sub": "Khoản 5 Điều 41 Luật Kế toán đặt mức tối thiểu.",
          "keys": [
            "mức tối thiểu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-4",
            "t": "text",
            "text": "≥ 5 năm: tài liệu quản lý",
            "x": 5964,
            "y": 1610,
            "size": 46,
            "at": "l1:five"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "≥ 10 năm: chứng từ ghi sổ",
            "x": 5964,
            "y": 1690,
            "size": 52,
            "at": "l2:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 năm",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "i-5b",
            "t": "text",
            "text": "+ sổ, báo cáo tài chính năm",
            "x": 6004,
            "y": 1770,
            "size": 38,
            "at": "l2:reports"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "1 năm đã huỷ?",
            "x": 6904,
            "y": 1730,
            "size": 50,
            "at": "l3:Shred",
            "color": "coral"
          },
          {
            "id": "i-6x",
            "t": "strike",
            "over": "i-6",
            "at": "l3:faint"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "At least five years for management papers not used to record the books.",
          "sub": "Tối thiểu 5 năm: tài liệu quản lý, điều hành không dùng trực tiếp ghi sổ.",
          "keys": [
            "5 năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At least ten for vouchers used directly, the books, and the annual financial reports.",
          "sub": "Tối thiểu 10 năm: chứng từ dùng trực tiếp ghi sổ, sổ kế toán, báo cáo tài chính năm.",
          "keys": [
            "10 năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Shred them after one year? Your future inspector would faint.",
          "sub": "Một năm đã cắt huỷ? Người kiểm tra sau này ngất mất."
        }
      ],
      "ref": "p18"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "17:30 · Phiếu thu sáng nay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Five"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "receipt",
                "black-nib"
              ]
            },
            "at": "l1:receipt",
            "caption": "17:30 · vẫn tờ phiếu thu ấy",
            "icon": "receipt"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Gạch chéo huỷ ✓ giữ tờ huỷ ✓",
            "x": 7932,
            "y": 1255,
            "size": 42,
            "at": "l2:Crossed"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Tờ mới, bút mực, ký sau ✓",
            "x": 7932,
            "y": 1330,
            "size": 42,
            "at": "l2:fresh"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Bút xoá về ngăn kéo",
            "x": 7932,
            "y": 1420,
            "size": 52,
            "at": "l3:drawer",
            "color": "accent",
            "hl": [
              {
                "text": "ngăn kéo",
                "at": "l3:drawer"
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
          "say": "Five thirty. Back to this morning's receipt slip.",
          "sub": "Năm rưỡi chiều. Quay lại tờ phiếu thu sáng nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Crossed out and kept. A fresh one in ink, signed after filling in!",
          "sub": "Gạch chéo huỷ, giữ lại. Lập tờ mới bằng bút mực, điền đủ rồi mới ký!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Correction fluid, the eraser of trust, goes back in the drawer.",
          "sub": "Bút xoá, cục tẩy của niềm tin, về lại ngăn kéo.",
          "keys": [
            "cục tẩy của niềm tin"
          ]
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
            "at": "l1:So",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:seven",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:signed",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l1:seven"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l2:signed"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Việc làm ngay: 5 phiếu chi",
            "x": 7932,
            "y": 1520,
            "size": 44,
            "at": "l3:Today",
            "hl": [
              {
                "text": "Việc làm ngay",
                "at": "l3:Today"
              }
            ]
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "dò 7 mục, ghi chỗ thiếu",
            "x": 7972,
            "y": 1595,
            "size": 42,
            "at": "l3:seven"
          },
          {
            "id": "j-src1",
            "t": "text",
            "text": "Nhân vật là minh hoạ. Bài để tham khảo khi học.",
            "x": 7932,
            "y": 1750,
            "size": 26,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-src2",
            "t": "text",
            "text": "Quy định có thể thay đổi — khi áp dụng, kiểm lại với cơ quan thuế hoặc chuyên gia.",
            "x": 7932,
            "y": 1790,
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
          "say": "So: a valid voucher has all seven main contents.",
          "sub": "Tóm lại: chứng từ hợp lệ có đủ bảy nội dung chủ yếu.",
          "keys": [
            "bảy nội dung chủ yếu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Made once, never erased, and signed by the right people.",
          "sub": "Lập một lần, không tẩy xoá, đủ chữ ký đúng người."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today: take your last five payment slips, check the seven items, note what's missing.",
          "sub": "Việc làm ngay: lấy năm phiếu chi gần nhất, dò bảy mục, ghi lại chỗ thiếu.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Characters are illustrations. Rules may change, so check with the tax office or an expert.",
          "sub": "Nhân vật là minh hoạ. Quy định có thể thay đổi, khi áp dụng hãy kiểm lại với cơ quan thuế hoặc chuyên gia.",
          "keys": [
            "kiểm lại"
          ]
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
        "q": "You made a mistake on a receipt, what is the correct way to fix it?",
        "options": [
          "Tear the receipt into pieces so nobody sees the error later",
          "Cross out and cancel that receipt, keep it, then make a fresh one",
          "Scratch out the wrong number and write the right one above it"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "black-nib",
        "why": "Gạch chéo huỷ tờ sai, giữ lại, lập tờ mới."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You made a mistake on a receipt, what is the correct way to fix it?",
          "sub": "Bạn ghi nhầm trên phiếu thu, cách xử lý đúng là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Cross out and cancel that receipt, keep it, then make a fresh one.",
          "sub": "Gạch chéo huỷ tờ viết sai, giữ lại tờ huỷ, rồi lập tờ mới."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Never fix the old sheet.",
          "sub": "Đừng bao giờ sửa trên tờ cũ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[16]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Chứng từ kế toán hợp lệ"
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
  "hook": "HOOK-21",
  "anchor": {
    "type": "myth",
    "value": "Bút xoá sửa một số trên phiếu thu, số cuối đúng là được",
    "ref": "p8"
  },
  "notes": "#145 bài MỚI (bài 1 đào sâu, chuỗi junior-accountants-invoices) theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (đoán sai): Lan chấm bút xoá sửa số trên phiếu thu → “còn giá trị không?” A/B, lặng 1,5 s → B: mất giá trị (p7, p8). Dòng thời gian: MỘT NGÀY CUỐI THÁNG của Lan: 8:30 chứng từ là gì, lập một lần (p1, p2) → 9:30 bảy nội dung Điều 16 + làm mẫu (p3–p5) → 10:30 Dũng viết bút chì: quy tắc ghi, tự lập mẫu, đủ liên (p6, p7; BRK-04 bút xoá p8; p9) → 14:00 cô Hoa: Điều 19 ký (p10), “Khoan đã!” xấp phiếu ký sẵn (p11, p12) → BRK-07 rehook → 15:00 chứng từ điện tử Điều 17 (p13; BRK-10 khoản 4 Điều 19 tóm ý, p14) → 15:45 hai bản giấy/điện tử (p15, p16) → 16:30 hoá đơn phần mềm nước ngoài (p17; BRK-02 5 năm / 10 năm p18) → 17:30 khép vòng: phiếu thu sáng nay đã huỷ, lập lại đúng → tóm tắt + lưu ý #133. Nhân vật: Lan (chính), chị Thảo, Dũng, cô Hoa. Số chỉ từ bài: Luật Kế toán 2015 (88/2015/QH13) Điều 16, 17, 18 (khoản 1–6), 19 (khoản 1–4), 41 khoản 5; NĐ 174/2016 Điều 5; 7 nội dung; 5 năm; 10 năm. Câu đố questions[16].",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
