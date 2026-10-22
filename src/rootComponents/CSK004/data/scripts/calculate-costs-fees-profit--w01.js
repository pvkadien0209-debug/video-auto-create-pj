// Kịch bản video W lần 3 (#110) — "Tính giá vốn, phí sàn và lợi nhuận thật" · chuỗi "Bán hàng online cho người mới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "calculate-costs-fees-profit--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "online-sellers",
    "slug": "calculate-costs-fees-profit",
    "door": "ky-nang",
    "level": "B1",
    "title": "Tính giá vốn, phí sàn và lợi nhuận thật",
    "series": "Bán hàng online cho người mới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN LAN ĐI TÌM TIỀN (tối ngày 30 → ngày 1 → thứ Ba → thứ Tư → thứ Năm → thứ Sáu → thứ Bảy → tối ngày 30 tháng sau). Nhân vật (w145/_series/online-sellers.md): Lan (chính: “bạn” mở bài, p3, p7, p20), Dũng (đơn phụ kiện xe máy p12 dựng cho Dũng; Kiên chạy quảng cáo đèn ngủ p16), Cô Hoa (lời khuyên khi giá thấp nhất cao hơn thị trường p23), Thảo (Nhi, tài khoản chung p28; chỉ qua lời kể + BRK-04). Số liệu chỉ lấy từ bài: 90.000 − 60.000 − 12.000 − 8.000 = 10.000 đồng là VÍ DỤ GIẢ ĐỊNH của bài (ghi nhỏ trên bảng), mười lăm phút, 500 triệu đồng/năm, Nghị định 68/2026/NĐ-CP. Ngắt nhịp: BRK-02 công thức (p14), BRK-02 (p17), BRK-09 nguồn thuế (p21), BRK-04 hai kiểu khuyến mãi (p25), BRK-04 tài khoản chung (p28). Khoan đã: Dũng tăng ngân sách quảng cáo (p16). Mở/khép: “Một vốn bốn lời?” → chưa, nhưng biết từng đồng đi đâu. Lưu ý chung cuối bài (thuế). Bản cũ: w145/bak/calculate-costs-fees-profit--w01.js.",
  "narrator": "det",
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
            "id": "a-num",
            "t": "text",
            "text": "90.000 đ",
            "x": 60,
            "y": 130,
            "size": 150,
            "at": "l1:Ninety",
            "color": "accent",
            "hl": [
              {
                "text": "90.000 đ",
                "at": "l1:pays"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "→ còn lời 10.000 đ",
            "x": 70,
            "y": 330,
            "size": 64,
            "at": "l2:ten",
            "color": "coral",
            "hl": [
              {
                "text": "10.000 đ",
                "at": "l2:left"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: một vốn bốn lời?",
            "x": 70,
            "y": 450,
            "size": 52,
            "at": "l2:One",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l2:quite"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Ví dụ giả định trong bài; phí thật xem biểu phí của sàn",
            "x": 60,
            "y": 725,
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
          "say": "Ninety thousand dong. That's what the buyer pays.",
          "sub": "Chín mươi nghìn đồng. Đó là tiền khách trả.",
          "keys": [
            "tiền khách trả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In the lesson's example, ten thousand is left. One coin in, four out? Not quite.",
          "sub": "Trong ví dụ của bài, chỉ còn lời mười nghìn. “Một vốn bốn lời”? Chưa chắc đâu.",
          "keys": [
            "mười nghìn"
          ]
        }
      ],
      "ref": "p12"
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "package",
                "crescent-moon"
              ]
            },
            "at": "l1",
            "caption": "Tối ngày 30 · phòng trọ của Lan",
            "icon": "crescent-moon"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Tiền đi đâu?",
            "x": 70,
            "y": 570,
            "size": 60,
            "at": "l4:went",
            "color": "accent",
            "hl": [
              {
                "text": "đi đâu",
                "at": "l4:went"
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
          "say": "Meet Lan, owner of a tiny online shop.",
          "sub": "Đây là Lan, chủ một shop online nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Orders every day, packing late every night, for a whole month.",
          "sub": "Đơn về đều, tối nào cũng đóng gói đến khuya, suốt một tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "So why is there almost no money in my account?",
          "sub": "Vậy sao tài khoản gần như không có tiền?",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Many new sellers feel this. Let's find where the money went.",
          "sub": "Rất nhiều người mới bán từng như vậy. Ta đi tìm xem tiền đi đâu.",
          "keys": [
            "tiền đi đâu"
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
            "text": "Lãi thật ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:trap",
            "hl": [
              {
                "text": "Lãi thật",
                "at": "l1:profit"
              }
            ]
          },
          {
            "id": "b-ne",
            "t": "text",
            "text": "Tiền bán được ≠ tiền lãi",
            "x": 2028,
            "y": 165,
            "size": 54,
            "at": "l1:money",
            "color": "coral"
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 280,
            "w": 50,
            "h": 50,
            "at": "l2:cost",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 262,
            "size": 62,
            "at": "l2:cost+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Tính đủ giá vốn",
            "x": 2103,
            "y": 272,
            "size": 44,
            "at": "l2:cost+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2028,
            "y": 355,
            "w": 50,
            "h": 50,
            "at": "l2:fee",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 337,
            "size": 62,
            "at": "l2:fee+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Cộng đủ phí mỗi đơn",
            "x": 2103,
            "y": 347,
            "size": 44,
            "at": "l2:fee+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2028,
            "y": 430,
            "w": 50,
            "h": 50,
            "at": "l3:prices",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 412,
            "size": 62,
            "at": "l3:prices+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Đặt giá, khuyến mãi theo số",
            "x": 2103,
            "y": 422,
            "size": 44,
            "at": "l3:prices+200"
          },
          {
            "id": "b-c3",
            "t": "box",
            "x": 2028,
            "y": 505,
            "w": 50,
            "h": 50,
            "at": "l3:notes",
            "stroke": 5
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 487,
            "size": 62,
            "at": "l3:notes+600",
            "color": "accent"
          },
          {
            "id": "b-l3",
            "t": "text",
            "text": "Ghi chép đều đặn",
            "x": 2103,
            "y": 497,
            "size": 44,
            "at": "l3:notes+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Here's the trap: money from sales isn't profit.",
          "sub": "Cái bẫy ở đây: tiền bán được chưa phải tiền lãi.",
          "keys": [
            "chưa phải tiền lãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To find real profit, count the full cost, and add every fee per order.",
          "sub": "Muốn biết lãi thật: tính đủ giá vốn, cộng đủ phí cho mỗi đơn.",
          "keys": [
            "tính đủ giá vốn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then set prices and sales from those numbers, and keep notes regularly.",
          "sub": "Rồi đặt giá, khuyến mãi theo con số đó, và ghi chép đều đặn."
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
          }
        ],
        "items": [
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần Lan đi tìm tiền",
            "x": 2028,
            "y": 560,
            "size": 52,
            "at": "l1:week",
            "hl": [
              {
                "text": "đi tìm tiền",
                "at": "l1:hunting"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 1998,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2208,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+460",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2418,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+620",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2628,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2838,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+940",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3048,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+1260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3468,
            "y": 640,
            "w": 195,
            "h": 80,
            "at": "l1:follow+1420",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Tối 30",
            "x": 2013,
            "y": 655,
            "size": 32,
            "at": "l1:follow+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Ngày 1",
            "x": 2223,
            "y": 655,
            "size": 32,
            "at": "l1:follow+580"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2433,
            "y": 655,
            "size": 32,
            "at": "l1:follow+740"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2643,
            "y": 655,
            "size": 32,
            "at": "l1:follow+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Thứ Năm",
            "x": 2853,
            "y": 655,
            "size": 32,
            "at": "l1:follow+1060"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 3063,
            "y": 655,
            "size": 32,
            "at": "l1:follow+1220"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Thứ Bảy",
            "x": 3273,
            "y": 655,
            "size": 32,
            "at": "l1:follow+1380"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "30 sau",
            "x": 3483,
            "y": 655,
            "size": 32,
            "at": "l1:follow+1540"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Lan's week of hunting for the missing money.",
          "sub": "Ta theo Lan một tuần đi tìm số tiền biến mất.",
          "keys": [
            "đi tìm số tiền"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s05",
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
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối 30 · Doanh thu, lợi nhuận",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "lipstick",
                "mobile-phone"
              ]
            },
            "at": "l1:night",
            "caption": "Tối ngày 30 · lật lại một tháng",
            "icon": "chart-decreasing"
          },
          {
            "id": "c-rev",
            "t": "text",
            "text": "Doanh thu: tổng tiền khách trả",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l1:Revenue"
          },
          {
            "id": "c-pro",
            "t": "text",
            "text": "Lợi nhuận: trừ hết mọi phí",
            "x": 3996,
            "y": 245,
            "size": 42,
            "at": "l2:Profit",
            "color": "accent",
            "hl": [
              {
                "text": "trừ hết mọi phí",
                "at": "l2:cost"
              }
            ]
          },
          {
            "id": "c-3a",
            "t": "text",
            "text": "Thiếu giá vốn, quên phí,",
            "x": 3996,
            "y": 335,
            "size": 40,
            "at": "l3:short",
            "color": "coral"
          },
          {
            "id": "c-3b",
            "t": "text",
            "text": "giảm giá quá tay",
            "x": 3996,
            "y": 395,
            "size": 40,
            "at": "l3:discounts",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: that same night. Revenue is all the money buyers pay.",
          "sub": "Chặng một: ngay tối hôm ấy. Doanh thu là tổng tiền khách trả.",
          "keys": [
            "Doanh thu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Profit is what's left after goods and every cost. The two can be miles apart.",
          "sub": "Lợi nhuận là phần còn lại sau khi trừ hết tiền hàng và mọi chi phí. Hai số chênh nhau rất xa.",
          "keys": [
            "Lợi nhuận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many orders, no profit? Usually cost counted short, fees forgotten, or discounts too deep. Paper and a few sums fix that.",
          "sub": "Nhiều đơn mà không lãi? Thường do tính giá vốn thiếu, quên phí mỗi đơn, hoặc giảm giá quá tay. Một tờ giấy và vài phép tính sửa được."
        }
      ],
      "ref": "p1,p2"
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
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-sale",
            "t": "text",
            "text": "Shop bên: giảm giá, free ship",
            "x": 3996,
            "y": 480,
            "size": 42,
            "at": "l1:sale"
          },
          {
            "id": "c-test",
            "t": "text",
            "text": "→ thử một đơn son trước",
            "x": 4036,
            "y": 550,
            "size": 42,
            "at": "l2:Test",
            "color": "accent"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Bán chạy chưa chắc đã lãi",
            "x": 3996,
            "y": 650,
            "size": 54,
            "at": "l4:fast",
            "color": "accent",
            "hl": [
              {
                "text": "chưa chắc đã lãi",
                "at": "l4:profit"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "The cosmetics shop next door has a sale and free shipping. Their orders are flying! I'll copy it!",
          "sub": "Shop mỹ phẩm bên cạnh giảm giá, miễn phí ship, đơn tăng vọt! Em làm theo luôn!",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not yet. Test one lipstick order: sale price, minus goods, shipping you pay, platform fee.",
          "sub": "Chưa nên. Thử một đơn son: giá sau giảm, trừ tiền hàng, trừ ship shop chịu, trừ phí sàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Near zero? More orders, more work, no more money. Every shop's costs differ.",
          "sub": "Gần bằng không? Càng nhiều đơn càng mệt. Mỗi shop một giá vốn, khuyến mãi hợp họ chưa chắc hợp mình.",
          "keys": [
            "càng mệt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Selling fast doesn't always mean profit.",
          "sub": "Bán chạy chưa chắc đã lãi.",
          "keys": [
            "Bán chạy chưa chắc đã lãi"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "zoom": 1.2,
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
            "text": "② Ngày 1 · Giá vốn gồm gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "handbag",
                "package"
              ]
            },
            "at": "l1:month",
            "caption": "Ngày 1 · lô túi mới về",
            "icon": "package"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 180,
            "w": 50,
            "h": 50,
            "at": "l3:Buying",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 162,
            "size": 62,
            "at": "l3:Buying+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Giá nhập mỗi chiếc",
            "x": 6039,
            "y": 172,
            "size": 42,
            "at": "l3:Buying+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 255,
            "w": 50,
            "h": 50,
            "at": "l3:shipping",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 237,
            "size": 62,
            "at": "l3:shipping+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Ship nhập ÷ số chiếc",
            "x": 6039,
            "y": 247,
            "size": 42,
            "at": "l3:shipping+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 330,
            "w": 50,
            "h": 50,
            "at": "l3:boxes",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 312,
            "size": 62,
            "at": "l3:boxes+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Hộp, túi, tem, thiệp",
            "x": 6039,
            "y": 322,
            "size": 42,
            "at": "l3:boxes+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 405,
            "w": 50,
            "h": 50,
            "at": "l4:faulty",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 387,
            "size": 62,
            "at": "l4:faulty+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Phần hàng lỗi, ế",
            "x": 6039,
            "y": 397,
            "size": 42,
            "at": "l4:faulty+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: the first of the month. Cost isn't just the buying price.",
          "sub": "Chặng hai: ngày mùng một. Giá vốn không chỉ là giá nhập."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It's everything you spend to get one item ready to send.",
          "sub": "Đó là tất cả tiền bỏ ra để có một món sẵn sàng gửi khách.",
          "keys": [
            "sẵn sàng gửi khách"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Buying price, stock shipping split per item, boxes, tape, labels, thank-you cards.",
          "sub": "Giá nhập. Ship nhập chia cho số món. Hộp, túi, băng keo, tem nhãn, thiệp cảm ơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the share that's faulty or won't sell.",
          "sub": "Và phần hàng lỗi, hỏng, không bán được."
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
            "fit": "D",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-bad",
            "t": "text",
            "text": "Vài chiếc lỗi?",
            "x": 5964,
            "y": 500,
            "size": 46,
            "at": "l1:broken",
            "color": "coral"
          },
          {
            "id": "d-split",
            "t": "text",
            "text": "→ chia vào những chiếc còn lại",
            "x": 6004,
            "y": 570,
            "size": 40,
            "at": "l2:Spread"
          },
          {
            "id": "d-tie",
            "t": "text",
            "text": "Bỏ qua: tưởng lãi, thật hoà",
            "x": 5964,
            "y": 650,
            "size": 46,
            "at": "l2:break",
            "color": "muted",
            "hl": [
              {
                "text": "thật hoà",
                "at": "l2:even"
              }
            ]
          },
          {
            "id": "d-re",
            "t": "text",
            "text": "Giá nhập đổi → tính lại",
            "x": 6784,
            "y": 700,
            "size": 34,
            "at": "l3:redo",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "A few bags in this batch have broken straps. I still paid for them.",
          "sub": "Lô này có vài chiếc túi đứt quai. Mà em vẫn trả tiền cho chúng.",
          "face": "sad",
          "pose": "hold"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Spread their cost over the good ones. Skip it, and you think you profit, but you break even.",
          "sub": "Chia tiền của chúng vào giá vốn những chiếc còn lại. Bỏ qua thì tưởng lãi, thật ra hoà.",
          "keys": [
            "thật ra hoà"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write each cost down once, and redo it whenever buying price or stock shipping changes.",
          "sub": "Tính giá vốn từng món một lần, ghi sổ, và tính lại mỗi khi giá nhập hay ship nhập thay đổi."
        }
      ],
      "ref": "p7,p8"
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
            "text": "③ Thứ Ba · Phí mỗi đơn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "receipt",
                "mobile-phone"
              ]
            },
            "at": "l1:payout",
            "caption": "Thứ Ba · giờ nghỉ trưa",
            "icon": "receipt"
          },
          {
            "id": "e-plat",
            "t": "text",
            "text": "Phí sàn: cố định, thanh toán…",
            "x": 7932,
            "y": 170,
            "size": 42,
            "at": "l2:Fixed"
          },
          {
            "id": "e-read",
            "t": "text",
            "text": "Đọc biểu phí, xem tiền về",
            "x": 7932,
            "y": 245,
            "size": 44,
            "at": "l3:Read",
            "color": "accent",
            "hl": [
              {
                "text": "Đọc biểu phí",
                "at": "l3:Read"
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
          "say": "Third stop: Tuesday lunch. Lan opens the payout details of her first orders.",
          "sub": "Chặng ba: trưa thứ Ba. Lan mở chi tiết tiền về của vài đơn đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Fixed fee, payment fee, service fee, campaign fee… Where did these come from?",
          "sub": "Phí cố định, phí thanh toán, phí dịch vụ, phí chương trình… Ở đâu ra vậy trời?",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each platform has its own fee list, and it changes. Read the seller fee page.",
          "sub": "Mỗi sàn một biểu phí, và có thể thay đổi. Hãy đọc mục biểu phí cho người bán.",
          "keys": [
            "biểu phí"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 340,
            "w": 50,
            "h": 50,
            "at": "l1:Per",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 322,
            "size": 62,
            "at": "l1:Per+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Phí sàn mỗi đơn",
            "x": 8007,
            "y": 332,
            "size": 36,
            "at": "l1:Per+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 412,
            "w": 50,
            "h": 50,
            "at": "l1:shipping",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 394,
            "size": 62,
            "at": "l1:shipping+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ship shop hỗ trợ",
            "x": 8007,
            "y": 404,
            "size": 36,
            "at": "l1:shipping+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 484,
            "w": 50,
            "h": 50,
            "at": "l1:vouchers",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 466,
            "size": 62,
            "at": "l1:vouchers+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Mã giảm shop tự trả",
            "x": 8007,
            "y": 476,
            "size": 36,
            "at": "l1:vouchers+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 556,
            "w": 50,
            "h": 50,
            "at": "l1:ads",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 538,
            "size": 62,
            "at": "l1:ads+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Quảng cáo ÷ số đơn",
            "x": 8007,
            "y": 548,
            "size": 36,
            "at": "l1:ads+200"
          },
          {
            "id": "e-c4",
            "t": "box",
            "x": 7932,
            "y": 628,
            "w": 50,
            "h": 50,
            "at": "l2:returns",
            "stroke": 5
          },
          {
            "id": "e-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 610,
            "size": 62,
            "at": "l2:returns+600",
            "color": "accent"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "Ship hai chiều đơn hoàn",
            "x": 8007,
            "y": 620,
            "size": 36,
            "at": "l2:returns+200"
          },
          {
            "id": "e-soc",
            "t": "text",
            "text": "Mạng xã hội: không phí sàn ≠ miễn phí",
            "x": 8752,
            "y": 700,
            "size": 32,
            "at": "l3:Social",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Per order, add the shipping you cover, vouchers you fund, ads split per order,",
          "sub": "Mỗi đơn còn: phần ship shop hỗ trợ, mã giảm shop tự bỏ tiền, tiền quảng cáo chia theo đơn,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "and two-way shipping on returns.",
          "sub": "và ship hai chiều của đơn hoàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Social media only? No platform fee, but shipping, ads, and more returns. Not free.",
          "sub": "Chỉ bán trên mạng xã hội? Không phí sàn, nhưng có ship, quảng cáo, đơn hoàn cao hơn. Không phải miễn phí.",
          "keys": [
            "Không phải miễn phí"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "at": "l3",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · Tính thử một đơn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2",
                  "pose": "thumb"
                }
              ],
              "props": [
                "motor-scooter",
                "abacus"
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Tối thứ Tư · trước khi đăng bán",
            "icon": "motor-scooter"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday night. A motorbike accessory, about to be listed.",
          "sub": "Chặng bốn: tối thứ Tư. Một món phụ kiện xe máy sắp lên kệ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Its owner: Dũng, Lan's neighbour. Motto: send now, think later.",
          "sub": "Chủ món ấy: Dũng, hàng xóm của Lan. Phương châm: gửi luôn, tính sau.",
          "keys": [
            "gửi luôn, tính sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Ninety thousand a piece. Easy money, right?",
          "sub": "Chín mươi nghìn một cái. Ngon ăn, đúng không?",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p12"
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "id": "f-1",
            "t": "text",
            "text": "Giá vốn: 60.000",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l1:sixty"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Phí sàn ở giá 90.000: ~12.000",
            "x": 60,
            "y": 1335,
            "size": 40,
            "at": "l2:twelve"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Ship shop hỗ trợ: 8.000",
            "x": 60,
            "y": 1410,
            "size": 44,
            "at": "l3:eight"
          },
          {
            "id": "f-ln",
            "t": "box",
            "x": 60,
            "y": 1485,
            "w": 700,
            "h": 6,
            "at": "l3:Ten"
          },
          {
            "id": "f-eq",
            "t": "text",
            "text": "Còn lại: 10.000 đ",
            "x": 60,
            "y": 1510,
            "size": 64,
            "at": "l3:Ten+200",
            "color": "accent",
            "hl": [
              {
                "text": "10.000 đ",
                "at": "l3:left"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Ví dụ giả định trong bài",
            "x": 60,
            "y": 1610,
            "size": 28,
            "at": "l3:Ten",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-r1",
            "t": "text",
            "text": "Giá bán phải gánh đủ phí",
            "x": 60,
            "y": 1710,
            "size": 54,
            "at": "l5:carry",
            "color": "accent",
            "hl": [
              {
                "text": "gánh đủ phí",
                "at": "l5:fee"
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
          "say": "Step one: cost, with buying, stock shipping and packaging. Say sixty thousand.",
          "sub": "Một: giá vốn gồm giá nhập, ship nhập, bao bì, ví dụ sáu mươi nghìn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step two: platform fees at ninety thousand. Say about twelve thousand.",
          "sub": "Hai: phí sàn ở giá chín mươi nghìn, giả sử khoảng mười hai nghìn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step three: shipping support, say eight thousand. Ten thousand left.",
          "sub": "Ba: trừ ship shop hỗ trợ, giả sử tám nghìn. Còn lại mười nghìn.",
          "keys": [
            "Còn lại mười nghìn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Ten thousand, for all that packing? Then I change the price, or the product.",
          "sub": "Mười nghìn, cho bằng ấy công gói? Vậy anh chỉnh giá, hoặc đổi món.",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Your selling price must carry every fee.",
          "sub": "Đúng vậy. Giá bán phải gánh đủ phí.",
          "keys": [
            "Giá bán phải gánh đủ phí"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s16",
      "module": "BRK-02",
      "data": {
        "kicker": "Công thức",
        "title": "Lãi = khách trả − vốn − phí",
        "hl": "Lãi",
        "sub": "− ship shop chịu − giảm giá − quảng cáo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Profit per order: buyer pays, minus cost and fees,",
          "sub": "Lãi một đơn: tiền khách trả, trừ giá vốn, trừ phí sàn,",
          "keys": [
            "Lãi một đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "minus shipping, discounts and ads. For each main product.",
          "sub": "trừ ship shop chịu, giảm giá, quảng cáo. Tính cho từng món chính."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s18",
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
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Quảng cáo",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "light-bulb",
                "megaphone"
              ]
            },
            "at": "l1:lamps",
            "caption": "Thứ Năm · đèn ngủ của Dũng",
            "icon": "light-bulb"
          },
          {
            "id": "g-split",
            "t": "text",
            "text": "Tiền QC tuần ÷ đơn QC",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:divided",
            "color": "accent",
            "hl": [
              {
                "text": "÷ đơn QC",
                "at": "l2:orders"
              }
            ]
          },
          {
            "id": "g-loss",
            "t": "text",
            "text": "Lớn hơn lời mỗi đơn → lỗ",
            "x": 2028,
            "y": 1340,
            "size": 42,
            "at": "l3:Bigger",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Thursday. Dũng also sells night lamps, and runs ads.",
          "sub": "Chặng năm: thứ Năm. Dũng còn bán đèn ngủ, và chạy quảng cáo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split ad money by order: the week's ad spending, divided by orders the ads brought.",
          "sub": "Tiền quảng cáo nên chia theo đơn: tổng tiền quảng cáo tuần, chia cho số đơn quảng cáo mang về.",
          "keys": [
            "chia theo đơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bigger than the profit per order? Ads are losing you money, even with many orders.",
          "sub": "Lớn hơn tiền lời mỗi đơn? Quảng cáo đang làm bạn lỗ, dù đơn về nhiều."
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s19",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Mấy tuần quảng cáo",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tăng ngân sách vì tin nhắn nhiều",
          "why": "Cuối tháng chia ra mới thấy mỗi đơn tốn tiền quảng cáo hơn tiền lời của chính nó.",
          "rule": "Quảng cáo ra đơn, đơn phải trả tiền quảng cáo"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Messages pour in, many times more than before.",
          "sub": "Tin nhắn hỏi hàng tăng gấp mấy lần.",
          "keys": [
            "gấp mấy lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Look at all these messages! Raise the budget again!",
          "sub": "Đông khách quá! Tăng ngân sách tiếp!",
          "face": "happy",
          "pose": "thumb",
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
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Weeks later, he divides. Each order costs more in ads than it earns.",
          "sub": "Mấy tuần sau, Dũng mới chia: mỗi đơn tốn tiền quảng cáo hơn tiền lời của chính nó.",
          "keys": [
            "hơn tiền lời"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "First, ad money divided by ad orders. Then I decide.",
          "sub": "Chia tiền quảng cáo cho số đơn nó mang về trước. Rồi mới tính.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16"
    },
    {
      "id": "s20",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Đơn phải trả tiền quảng cáo",
        "hl": "trả tiền quảng cáo",
        "sub": "Quảng cáo ra đơn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ads bring orders.",
          "sub": "Quảng cáo ra đơn,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So orders must pay for the ads.",
          "sub": "đơn phải trả tiền quảng cáo.",
          "keys": [
            "trả tiền quảng cáo"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-paper",
            "t": "text",
            "text": "Lãi giấy ≠ tiền trong túi",
            "x": 2028,
            "y": 1450,
            "size": 50,
            "at": "l1:paper",
            "color": "accent",
            "hl": [
              {
                "text": "tiền trong túi",
                "at": "l1:pocket"
              }
            ]
          },
          {
            "id": "g-late",
            "t": "text",
            "text": "Tiền sàn về chậm",
            "x": 2028,
            "y": 1540,
            "size": 42,
            "at": "l2:later"
          },
          {
            "id": "g-shelf",
            "t": "text",
            "text": "Hàng tồn = tiền trên kệ",
            "x": 2028,
            "y": 1610,
            "size": 42,
            "at": "l2:shelf"
          },
          {
            "id": "g-cash",
            "t": "text",
            "text": "Theo dõi tiền mặt thật",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l3:cash",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And profit on paper isn't cash in your pocket.",
          "sub": "Và lãi trên giấy chưa phải tiền trong túi.",
          "keys": [
            "lãi trên giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Platform money arrives later. Stock is money sitting on a shelf.",
          "sub": "Tiền sàn về sau một thời gian. Hàng tồn là tiền nằm trên kệ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Watch your real cash, to keep buying stock.",
          "sub": "Theo dõi tiền mặt thật đang có, để không hụt vốn nhập hàng."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s23",
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
            "at": "l3",
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
            "text": "⑥ Thứ Sáu · Khoản hay quên",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "light-bulb",
                "camera-with-flash"
              ]
            },
            "at": "l1:forget",
            "caption": "Thứ Sáu · góc chụp ảnh của Lan",
            "icon": "camera-with-flash"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l2:Internet",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1252,
            "size": 62,
            "at": "l2:Internet+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Mạng, điện, điện thoại",
            "x": 4071,
            "y": 1262,
            "size": 40,
            "at": "l2:Internet+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l2:storage",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1327,
            "size": 62,
            "at": "l2:storage+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Thuê chỗ chứa hàng",
            "x": 4071,
            "y": 1337,
            "size": 40,
            "at": "l2:storage+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 50,
            "h": 50,
            "at": "l2:lights",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1402,
            "size": 62,
            "at": "l2:lights+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Đèn, phông chụp ảnh",
            "x": 4071,
            "y": 1412,
            "size": 40,
            "at": "l2:lights+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1495,
            "w": 50,
            "h": 50,
            "at": "l3:evenings",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1477,
            "size": 62,
            "at": "l3:evenings+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Thời gian của chính bạn",
            "x": 4071,
            "y": 1487,
            "size": 40,
            "at": "l3:evenings+200"
          },
          {
            "id": "h-time",
            "t": "text",
            "text": "Thua việc làm thêm? Xem lại",
            "x": 3996,
            "y": 1590,
            "size": 44,
            "at": "l4:part-time",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Friday. The costs people forget.",
          "sub": "Chặng sáu: thứ Sáu. Những khoản hay bị quên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Internet and phone for selling, storage rent, photo lights and backdrops.",
          "sub": "Mạng, điện, điện thoại dùng để bán. Tiền thuê chỗ chứa hàng nếu có. Đèn, phông chụp ảnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "And my own evenings. They have a price too, right?",
          "sub": "Và cả những buổi tối của em. Cũng có giá chứ ạ?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right. Earning less than a normal part-time job? Rethink the product, price or method.",
          "sub": "Đúng. Lời chia ra thấp hơn một việc làm thêm bình thường? Xem lại mặt hàng, giá hoặc cách làm.",
          "keys": [
            "Xem lại"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s24",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Nghị định 68/2026/NĐ-CP",
        "detail": "Doanh thu năm ≤ 500 triệu: không thuế GTGT, TNCN",
        "illus": "receipt",
        "around": [
          "ledger",
          "spiral-calendar"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tax: from twenty twenty-six, you declare it.",
          "sub": "Thuế: từ năm 2026, người bán tự kê khai.",
          "keys": [
            "tự kê khai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under five hundred million a year? No VAT, no income tax.",
          "sub": "Doanh thu năm tới 500 triệu đồng: không thuế GTGT, TNCN.",
          "keys": [
            "500 triệu đồng"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s25",
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
            "id": "h-tax",
            "t": "text",
            "text": "Sàn khấu trừ: xem dòng thuế",
            "x": 3996,
            "y": 1680,
            "size": 40,
            "at": "l1:deduct"
          },
          {
            "id": "h-cost",
            "t": "text",
            "text": "Thuế: tính vào chi phí",
            "x": 3996,
            "y": 1750,
            "size": 46,
            "at": "l2:cost",
            "color": "accent",
            "hl": [
              {
                "text": "tính vào chi phí",
                "at": "l2:cost"
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
          "say": "Platforms with payment deduct tax per sale. Find that line in your payout details.",
          "sub": "Sàn có đặt hàng, thanh toán thì khấu trừ thuế theo từng giao dịch. Tìm dòng ấy trong chi tiết tiền về."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under that line? Ask your tax office. And count tax as a cost from the start.",
          "sub": "Cả năm chưa tới mức đó? Hỏi cơ quan thuế. Và tính thuế vào chi phí ngay từ đầu.",
          "keys": [
            "tính thuế vào chi phí"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s27",
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
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Bảy · Giá từ dưới lên",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "worried"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "handbag",
                "wrapped-gift"
              ]
            },
            "at": "l1:stall",
            "caption": "Thứ Bảy · sạp Cô Hoa",
            "icon": "wrapped-gift"
          },
          {
            "id": "i-f1",
            "t": "text",
            "text": "Giá vốn",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:cost"
          },
          {
            "id": "i-f2",
            "t": "text",
            "text": "+ phí mỗi đơn",
            "x": 5964,
            "y": 1325,
            "size": 46,
            "at": "l2:fees"
          },
          {
            "id": "i-f3",
            "t": "text",
            "text": "+ phần lời muốn có",
            "x": 5964,
            "y": 1390,
            "size": 46,
            "at": "l2:want"
          },
          {
            "id": "i-f4",
            "t": "text",
            "text": "= giá thấp nhất",
            "x": 5964,
            "y": 1460,
            "size": 54,
            "at": "l3:lowest",
            "color": "accent",
            "hl": [
              {
                "text": "giá thấp nhất",
                "at": "l3:lowest"
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
          "say": "Seventh stop: Saturday, at the stall of Cô Hoa, who has seen every trend.",
          "sub": "Chặng bảy: thứ Bảy, ở sạp Cô Hoa, người đã thấy đủ mọi mốt đến rồi đi.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Build the price from the bottom: cost, plus fees per order, plus the profit you want.",
          "sub": "Tính giá từ dưới lên: giá vốn, cộng phí mỗi đơn, cộng phần lời muốn có.",
          "keys": [
            "từ dưới lên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's your lowest price. Then look at the market, to decide how much higher.",
          "sub": "Đó là giá thấp nhất. Rồi mới nhìn giá thị trường để đặt cao hơn bao nhiêu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "But my lowest price is already above the market…",
          "sub": "Nhưng giá thấp nhất của con đã cao hơn giá thị trường rồi…",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Don't just cut it, child. Find a better source, sell combos, or pick another item.",
          "sub": "Đừng vội hạ theo, con. Tìm nguồn tốt hơn, bán combo, hoặc đổi món khác.",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s28",
      "module": "BRK-04",
      "data": {
        "title": "Hai kiểu khuyến mãi",
        "labels": [
          "Giảm sâu",
          "Ưu đãi nhỏ"
        ],
        "wrong": "Giảm sâu cho mọi người: dễ có đơn, lời mỏng",
        "right": "Ưu đãi nhỏ cho khách quay lại, quà kèm",
        "wrongIllus": "label",
        "rightIllus": "wrapped-gift"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Deep discounts for all: easy orders, thin profit.",
          "sub": "Giảm sâu cho mọi người: dễ có đơn, lời mỏng.",
          "keys": [
            "lời mỏng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Small rewards for regulars: cheaper, and they stay.",
          "sub": "Ưu đãi nhỏ cho khách quen, quà kèm: tốn ít, vẫn giữ khách.",
          "keys": [
            "giữ khách"
          ]
        }
      ],
      "ref": "p25"
    },
    {
      "id": "s29",
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
            "id": "i-q1",
            "t": "text",
            "text": "“Giảm xong còn lời bao nhiêu?”",
            "x": 5964,
            "y": 1560,
            "size": 42,
            "at": "l1:discount"
          },
          {
            "id": "i-q2",
            "t": "text",
            "text": "“Cần thêm bao nhiêu đơn?”",
            "x": 5964,
            "y": 1630,
            "size": 42,
            "at": "l1:orders"
          },
          {
            "id": "i-end",
            "t": "text",
            "text": "Có thời hạn, có mục tiêu",
            "x": 5964,
            "y": 1720,
            "size": 48,
            "at": "l2:end",
            "color": "accent",
            "hl": [
              {
                "text": "có mục tiêu",
                "at": "l2:goal"
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
          "say": "Before a sale, ask: after this discount, what profit is left, and how many more orders?",
          "sub": "Trước khi khuyến mãi, tự hỏi: giảm xong, mỗi đơn còn lời bao nhiêu, và cần bán thêm bao nhiêu đơn để bù?",
          "keys": [
            "còn lời bao nhiêu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And every sale needs an end date and a clear goal.",
          "sub": "Và khuyến mãi nào cũng cần thời hạn và mục tiêu rõ."
        }
      ],
      "ref": "p24,p25"
    },
    {
      "id": "s31",
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối 30 tháng sau · Cuốn sổ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:thirtieth"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "ledger",
                "package"
              ]
            },
            "at": "l1:Last",
            "caption": "Tối ngày 30 · một tháng sau",
            "icon": "ledger"
          },
          {
            "id": "j-col",
            "t": "text",
            "text": "Cột: ngày, món, vốn, phí, lời",
            "x": 7932,
            "y": 1260,
            "size": 42,
            "at": "l2:Date"
          },
          {
            "id": "j-15",
            "t": "text",
            "text": "15 phút cuối tuần",
            "x": 7932,
            "y": 1335,
            "size": 50,
            "at": "l3:Fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15 phút",
                "at": "l3:Fifteen"
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
          "say": "Last stop: the thirtieth again, a month later. This time Lan has a sheet.",
          "sub": "Chặng cuối: lại tối ngày 30, một tháng sau. Lần này Lan có một bảng tính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Date, item, buyer paid, cost, fees, shipping, discount, profit.",
          "sub": "Ngày, mặt hàng, tiền khách trả, giá vốn, phí, ship, giảm giá, lợi nhuận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fifteen minutes every weekend. Don't let a month pile up.",
          "sub": "Mười lăm phút cuối mỗi tuần. Đừng để dồn cả tháng.",
          "keys": [
            "Mười lăm phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And her friend Thảo, who sells handmade goods? Shop money and salary share one account.",
          "sub": "Còn Thảo, bạn của Lan, bán đồ handmade? Tiền khách chuyển và tiền lương đổ chung một tài khoản.",
          "keys": [
            "chung một tài khoản"
          ]
        }
      ],
      "ref": "p26,p27,p28"
    },
    {
      "id": "s32",
      "module": "BRK-04",
      "data": {
        "title": "Mùa cao điểm, cần nhập nguyên liệu",
        "wrong": "Một tài khoản chung, thấy số dư nhiều là tiêu",
        "right": "Tách tài khoản shop, rút ra thì ghi lại",
        "wrongIllus": "money-with-wings",
        "rightIllus": "ledger"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Big balance, spent freely. Peak season: not enough for one batch.",
          "sub": "Số dư nhiều, tiêu thoải mái. Mùa cao điểm: không đủ một lô hàng.",
          "keys": [
            "không đủ một lô hàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Separate accounts. Note every withdrawal.",
          "sub": "Tách tài khoản shop. Rút ra thì ghi lại.",
          "keys": [
            "Tách tài khoản shop"
          ]
        }
      ],
      "ref": "p28,p27"
    },
    {
      "id": "s33",
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
            "at": "l4",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-r1",
            "t": "text",
            "text": "Tiền shop một túi,",
            "x": 7932,
            "y": 1435,
            "size": 52,
            "at": "l1:Shop"
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "tiền nhà một túi",
            "x": 7932,
            "y": 1505,
            "size": 52,
            "at": "l1:family",
            "color": "accent",
            "hl": [
              {
                "text": "tiền nhà một túi",
                "at": "l1:family"
              }
            ]
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "Mỗi tháng: dồn sức, sửa, ngừng",
            "x": 7932,
            "y": 1595,
            "size": 42,
            "at": "l2:month"
          },
          {
            "id": "j-fam",
            "t": "text",
            "text": "Cùng người nhà xem bảng",
            "x": 7932,
            "y": 1670,
            "size": 42,
            "at": "l3:family"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Một vốn bốn lời”?",
            "x": 8752,
            "y": 1780,
            "size": 44,
            "at": "l4:coin",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "→ biết từng đồng đi đâu",
            "x": 7932,
            "y": 1760,
            "size": 46,
            "at": "l4:goes",
            "color": "accent",
            "hl": [
              {
                "text": "từng đồng",
                "at": "l4:every"
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
          "say": "Shop money in one pocket, family money in another.",
          "sub": "Tiền shop một túi, tiền nhà một túi.",
          "keys": [
            "Tiền shop một túi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each month: push good earners, fix thin ones, stop the losers.",
          "sub": "Mỗi tháng nhìn lại: dồn sức cho món lời tốt, sửa giá món lời mỏng, sửa hoặc ngừng món lỗ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Selling with family? Read it together. Clear numbers calm money talks.",
          "sub": "Bán chung với người nhà? Cùng xem bảng. Con số rõ giúp bàn chuyện tiền nhẹ nhàng hơn đoán.",
          "keys": [
            "Cùng xem bảng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "One coin, four profits? Not yet. But now I know where every coin goes.",
          "sub": "Một vốn bốn lời? Chưa đâu. Nhưng giờ em biết từng đồng đi đâu.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p29,p30,p31,outro"
    },
    {
      "id": "s35",
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
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": [
              "j-r1",
              "j-r2",
              "j-m"
            ],
            "zoom": 0.8,
            "ms": 900
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
            "x": 4636,
            "y": 550,
            "at": "l1:profit"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 700,
            "y": 1610,
            "at": "l2:carry"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8572,
            "y": 1470,
            "at": "l3:family"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định thuế có thể thay đổi, xem hướng dẫn chính thức.",
            "x": 7932,
            "y": 1845,
            "size": 22,
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
          "say": "So: selling fast isn't always profit.",
          "sub": "Tóm lại: bán chạy chưa chắc đã lãi.",
          "keys": [
            "chưa chắc đã lãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your price must carry every fee.",
          "sub": "Giá bán phải gánh đủ phí.",
          "keys": [
            "gánh đủ phí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Shop money in one pocket, family money in another.",
          "sub": "Tiền shop một túi, tiền nhà một túi.",
          "keys": [
            "tiền nhà một túi"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p13,p29"
    },
    {
      "id": "s36",
      "module": "QUIZ-01",
      "ref": "questions[14]",
      "data": {
        "q": "How should you count advertising cost when checking profit?",
        "options": [
          "Do not count it, because advertising is an investment and not a real cost",
          "Count it only once a year, when you finally look at the whole picture",
          "Divide the weekly ad spending by the number of orders the ads brought in"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "chart-increasing",
        "why": "Chia tiền quảng cáo cho số đơn nó mang về. Lớn hơn tiền lời mỗi đơn là đang lỗ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How should you count advertising cost when checking profit?",
          "sub": "Nên tính chi phí quảng cáo thế nào khi kiểm tra lợi nhuận?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Divide the weekly ad spending by the number of orders the ads brought in.",
          "sub": "Chia tiền quảng cáo mỗi tuần cho số đơn quảng cáo mang về."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "If that's more than the profit per order, ads are making you lose money.",
          "sub": "Lớn hơn tiền lời mỗi đơn là quảng cáo đang làm bạn lỗ."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s37",
      "module": "END-05",
      "data": {
        "text": "Biết mỗi đơn lời bao nhiêu",
        "sub": "Bốn mươi câu hỏi đang chờ bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight: the real profit of one order. Then try the forty questions!",
          "sub": "Tối nay, lấy món bán chạy nhất, tính lãi thật của một đơn. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s31"
  }
};
