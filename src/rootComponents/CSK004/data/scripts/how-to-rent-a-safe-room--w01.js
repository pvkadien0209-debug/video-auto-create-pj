// Kịch bản video W lần 3 (#110) — "Cách tìm và thuê phòng trọ an toàn cho tân sinh viên" · chuỗi "Chuẩn bị vào đại học xa nhà"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-rent-a-safe-room--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "first-year-students-living-away",
    "slug": "how-to-rent-a-safe-room",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách tìm và thuê phòng trọ an toàn cho tân sinh viên",
    "series": "Chuẩn bị vào đại học xa nhà"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo CUỘC SĂN PHÒNG của Dũng (1 tháng trước ở quê → cùng tuần lọc tin → sáng thứ Bảy xem phòng → tối thứ Bảy quay lại → Chủ nhật hỏi, ký, cọc → ngày dọn vào → học kỳ hai, tối ở phòng Dũng). Nhân vật theo w145/_series/first-year-students-living-away.md: Dũng (gộp Minh p12), Bác Bình (bố, p4, p7), Cô Hoa (chủ trọ: câu ‘tuần sau sửa cửa sổ’ là ví dụ p21), Lan (Duy p39). Tuấn (p2) kể không tên (‘một anh khoá trên’); người đang thuê (p17) chỉ được nhắc. Số liệu: ‘1 tháng’ (p1), ‘30 ngày’ Luật Cư trú (p26, nguồn ghi nhỏ trên bảng), ‘báo trước 1 tháng’ (p39). Cảnh ngắt nhịp: DLG s08 (chuyển cọc khi chưa xem, p12–p13), BRK-07 s11 (rehook ban ngày/buổi tối, p18), BRK-04 s16 (Trước/Sau biên nhận, p28). Khép vòng: ‘Tai nghe không bằng mắt thấy’ → ‘mắt thấy… vẫn cần giấy cầm’; buổi tối mở ở quê, khép ở phòng trọ của Dũng. Câu đố giữ questions[19]. Bản cũ (W lần 3, #110): w145/bak/how-to-rent-a-safe-room--w01.js.",
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
            "text": "1 tháng",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:month",
            "color": "accent",
            "hl": [
              {
                "text": "1 tháng",
                "at": "l1:before"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "trước ngày nhập học: bắt đầu tìm",
            "x": 70,
            "y": 330,
            "size": 52,
            "at": "l1:hunt"
          },
          {
            "id": "a-late",
            "t": "text",
            "text": "Ta tưởng: tuần cuối vẫn kịp?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l2:last week",
            "color": "muted"
          },
          {
            "id": "a-latex",
            "t": "strike",
            "over": "a-late",
            "at": "l2:signed"
          },
          {
            "id": "a-res",
            "t": "text",
            "text": "→ phòng xa, ồn, ký vội",
            "x": 100,
            "y": 510,
            "size": 48,
            "at": "l2:far",
            "color": "coral",
            "hl": [
              {
                "text": "ký vội",
                "at": "l2:signed"
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
          "say": "One month. Start your room hunt about a month before school starts.",
          "sub": "Một tháng: bắt đầu tìm phòng khoảng một tháng trước ngày nhập học.",
          "keys": [
            "một tháng trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last week is fine? A senior tried: only far, noisy rooms, and he signed without reading.",
          "sub": "Tuần cuối vẫn kịp? Một anh khoá trên đã thử: chỉ còn phòng xa, ồn, lại ký vội không đọc.",
          "keys": [
            "ký vội không đọc"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "house",
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Tối · ở quê, lướt tin phòng",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tai nghe không bằng mắt thấy”",
            "x": 60,
            "y": 600,
            "size": 54,
            "at": "l3:hearing",
            "color": "accent",
            "hl": [
              {
                "text": "mắt thấy",
                "at": "l3:seeing"
              }
            ]
          },
          {
            "id": "a-lu",
            "t": "text",
            "text": "Trên mạng: chỉ là… lướt",
            "x": 60,
            "y": 690,
            "size": 48,
            "at": "l4:scrolling",
            "hl": [
              {
                "text": "lướt",
                "at": "l4:scrolling"
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
          "say": "Meet Dũng: new student, hunting for his first rented room in the city.",
          "sub": "Đây là Dũng: tân sinh viên, đang săn phòng trọ đầu tiên trên thành phố.",
          "keys": [
            "phòng trọ đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So many rooms online! This one's cheap, that one's pretty...",
          "sub": "Trên mạng nhiều phòng quá! Phòng này rẻ, phòng kia đẹp...",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: hearing is never as good as seeing.",
          "sub": "Ông bà dặn: “Tai nghe không bằng mắt thấy.”",
          "keys": [
            "Tai nghe không bằng mắt thấy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Online, it's not even hearing. It's scrolling.",
          "sub": "Trên mạng thì chưa tới mức nghe. Mới là... lướt.",
          "keys": [
            "lướt"
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
            "text": "Thuê phòng sao cho an toàn?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:rent",
            "hl": [
              {
                "text": "an toàn",
                "at": "l1:safe"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: rẻ nhất, đẹp nhất",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:cheapest",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:five"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 5 bước, đủ cả 5",
            "x": 2028,
            "y": 260,
            "size": 58,
            "at": "l2:five",
            "color": "accent",
            "hl": [
              {
                "text": "đủ cả 5",
                "at": "l2:skips"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:early",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2358,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:count",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2688,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:day",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3018,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:contract",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3348,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:paper",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Tìm sớm",
            "x": 2048,
            "y": 436,
            "size": 46,
            "at": "l3:early+200"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Tính đủ",
            "x": 2378,
            "y": 436,
            "size": 46,
            "at": "l3:count+200"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Xem ngày + tối",
            "x": 2708,
            "y": 436,
            "size": 38,
            "at": "l3:day+200"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Đọc hợp đồng",
            "x": 3038,
            "y": 436,
            "size": 38,
            "at": "l3:contract+200"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "Giữ giấy",
            "x": 3368,
            "y": 436,
            "size": 46,
            "at": "l3:paper+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you rent a room that's actually safe?",
          "sub": "Vậy thuê phòng thế nào cho thật an toàn?",
          "keys": [
            "an toàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the cheapest, not the prettiest. Five small steps, and nobody skips one.",
          "sub": "Không phải rẻ nhất, đẹp nhất. Mà là năm bước nhỏ, không bỏ bước nào.",
          "keys": [
            "năm bước nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Search early, count every cost, see it by day and night, read the contract, keep a paper for every payment.",
          "sub": "Tìm sớm, tính đủ chi phí, xem tận nơi cả ngày lẫn tối, đọc kỹ hợp đồng, giữ giấy cho mọi khoản tiền."
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
            "text": "① 1 tháng trước · Tính đủ tiền",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:maths"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "money-bag",
                "abacus"
              ]
            },
            "at": "l1:dad",
            "caption": "1 tháng trước · ở nhà",
            "icon": "money-bag"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l3:Rent",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 152,
            "size": 58,
            "at": "l3:Rent+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Tiền phòng",
            "x": 4064,
            "y": 160,
            "size": 44,
            "at": "l3:Rent+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 240,
            "w": 46,
            "h": 46,
            "at": "l3:power",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 222,
            "size": 58,
            "at": "l3:power+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Điện, nước, mạng, gửi xe",
            "x": 4064,
            "y": 230,
            "size": 44,
            "at": "l3:power+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 310,
            "w": 46,
            "h": 46,
            "at": "l3:food",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 292,
            "size": 58,
            "at": "l3:food+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Ăn, đi lại, sách vở",
            "x": 4064,
            "y": 300,
            "size": 44,
            "at": "l3:food+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 380,
            "w": 46,
            "h": 46,
            "at": "l3:sick",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 362,
            "size": 58,
            "at": "l3:sick+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Để dành lúc ốm",
            "x": 4064,
            "y": 370,
            "size": 44,
            "at": "l3:sick+200"
          },
          {
            "id": "c-sum",
            "t": "text",
            "text": "Tổng chi ↔ tiền bố mẹ gửi",
            "x": 3996,
            "y": 455,
            "size": 48,
            "at": "l4:compare",
            "color": "accent",
            "hl": [
              {
                "text": "Tổng chi",
                "at": "l4:total"
              }
            ]
          },
          {
            "id": "c-over",
            "t": "text",
            "text": "Phòng ăn gần hết → quá sức",
            "x": 4836,
            "y": 690,
            "size": 46,
            "at": "l4:too much",
            "color": "coral",
            "hl": [
              {
                "text": "quá sức",
                "at": "l4:too much"
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
          "say": "Stop one: the maths. Bác Bình, Dũng's dad, brings his old abacus.",
          "sub": "Chặng một: làm toán. Bác Bình, bố Dũng, mang bàn tính ra.",
          "keys": [
            "làm toán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Rent isn't the only cost, son.",
          "sub": "Tiền phòng chưa phải tất cả đâu con.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rent, plus power, water, internet, parking, plus food, transport, books, plus savings for sick days.",
          "sub": "Tiền phòng, cộng điện, nước, mạng, gửi xe, cộng ăn, đi lại, sách vở, cộng khoản để dành lúc ốm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Compare the total with what your parents send. If rent eats nearly all of it, the room is too much.",
          "sub": "So tổng chi với tiền bố mẹ gửi. Tiền phòng ăn gần hết thì phòng đó quá sức.",
          "keys": [
            "quá sức"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cheaper room, or share. Or you'll skip meals and keep asking for more.",
          "sub": "Tìm phòng rẻ hơn hoặc ở ghép; không thì nhịn ăn, hoặc xin thêm hoài.",
          "keys": [
            "phòng rẻ hơn hoặc ở ghép"
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
      "ref": "p3,p4,p7"
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
            "id": "c-far",
            "t": "text",
            "text": "Rẻ mà xa: + xăng, vé, giờ",
            "x": 3996,
            "y": 540,
            "size": 46,
            "at": "l1:far",
            "hl": [
              {
                "text": "+ xăng, vé",
                "at": "l1:fuel"
              }
            ]
          },
          {
            "id": "c-sh",
            "t": "text",
            "text": "Ở ghép: thoả thuận có chữ ký",
            "x": 3996,
            "y": 615,
            "size": 46,
            "at": "l2:paper",
            "color": "accent",
            "hl": [
              {
                "text": "có chữ ký",
                "at": "l2:paper"
              }
            ]
          },
          {
            "id": "c-par",
            "t": "text",
            "text": "Phụ huynh: bàn khoản trả một lần, đọc hợp đồng cùng con",
            "x": 3996,
            "y": 700,
            "size": 30,
            "at": "l3:parents",
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
          "say": "A cheap room far away can cost more: fuel, bus fares, hours on the road.",
          "sub": "Phòng rẻ mà xa có khi tốn hơn: tiền xăng, vé xe, thời gian ngồi xe.",
          "keys": [
            "tốn hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sharing? Agree on paper: whose name, how to split deposit and bills, what if someone leaves.",
          "sub": "Ở ghép? Thống nhất trên giấy: ai đứng tên, chia cọc và điện nước thế nào, một người chuyển đi thì sao.",
          "keys": [
            "trên giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Parents: plan the one-off costs, and read the contract together.",
          "sub": "Phụ huynh: cùng con bàn các khoản trả một lần lúc đầu, và đọc hợp đồng cùng con."
        }
      ],
      "ref": "p5,p6,p7"
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
            "at": "l5",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Cùng tuần · Lọc tin đăng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:finding"
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
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:Stop two",
            "caption": "Cùng tuần · trên điện thoại",
            "icon": "mobile-phone"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn tin nhất: người quen, phòng CTSV",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l1:people",
            "hl": [
              {
                "text": "người quen",
                "at": "l1:people"
              }
            ]
          },
          {
            "id": "d-f1",
            "t": "text",
            "text": "Tin giả: rẻ lạ · ảnh mẫu",
            "x": 5964,
            "y": 260,
            "size": 48,
            "at": "l2:cheap",
            "color": "coral"
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "giục cọc · né xem phòng",
            "x": 6004,
            "y": 330,
            "size": 48,
            "at": "l2:rush",
            "color": "coral"
          },
          {
            "id": "d-chk",
            "t": "text",
            "text": "Thử: tìm ảnh · gọi điện · hẹn xem",
            "x": 5964,
            "y": 420,
            "size": 44,
            "at": "l3:search",
            "color": "accent",
            "hl": [
              {
                "text": "hẹn xem",
                "at": "l3:visit"
              }
            ]
          },
          {
            "id": "d-mg",
            "t": "text",
            "text": "Môi giới: ký xong mới trả",
            "x": 5964,
            "y": 500,
            "size": 46,
            "at": "l4:broker"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: finding rooms. Best sources: people you know, seniors, the student office, the dorm.",
          "sub": "Chặng hai: tìm phòng. Nguồn tin nhất: người quen, anh chị khoá trên, phòng công tác sinh viên, ký túc xá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fake posts have tells: oddly cheap, catalogue photos, a rush, and never a real viewing.",
          "sub": "Tin giả hay có dấu hiệu: rẻ bất thường, ảnh đẹp như ảnh mẫu, hối thúc, luôn né cho xem phòng.",
          "keys": [
            "rẻ bất thường"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Checks: search the photo online, call instead of only texting, arrange a visit.",
          "sub": "Cách thử: tìm ảnh đó trên mạng, gọi điện thay vì chỉ nhắn, hẹn xem tận nơi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A broker? Ask the fee, and pay only after signing with the real owner.",
          "sub": "Qua môi giới? Hỏi rõ phí, ai trả, chỉ trả sau khi ký với đúng chủ nhà."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Ooh, a message about that pretty room!",
          "sub": "Ơ, có tin nhắn về căn phòng đẹp kia!",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "ref": "p8,p9,p10,p11"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tin nhắn: “chuyển cọc ngay”",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chuyển cọc khi chưa xem phòng",
          "why": "Ảnh đẹp, lời giục không chứng minh phòng có thật, hay giống ảnh.",
          "rule": "Chưa thấy tận mắt, chưa chuyển một đồng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Cheap, pretty, and someone's viewing it this afternoon? Sending the deposit!",
          "sub": "Rẻ, đẹp, chiều nay có người đến xem? Chuyển cọc luôn!",
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
          "say": "A student did that. Day one: damp room, no window, nothing like the photos.",
          "sub": "Có bạn đã làm y vậy. Ngày nhập học: phòng ẩm mốc, không cửa sổ, khác hẳn ảnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Thử lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I'll call, then see it in person, or have a friend video it.",
          "sub": "Gọi điện trước, xem tận nơi. Hoặc nhờ người quen trên đó gọi video cho xem.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Not seen with your own eyes? Not a single dong.",
          "sub": "Chưa thấy tận mắt, chưa chuyển một đồng.",
          "phase": "redo",
          "keys": [
            "Chưa thấy tận mắt"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13,p16"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Sáng thứ Bảy · Xem tận nơi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "key"
              ]
            },
            "at": "l1:visit",
            "caption": "Sáng thứ Bảy · khu trọ cô Hoa",
            "icon": "key"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l2:taps",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 152,
            "size": 58,
            "at": "l2:taps+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Vòi nước, đèn, quạt",
            "x": 8000,
            "y": 160,
            "size": 44,
            "at": "l2:taps+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 240,
            "w": 46,
            "h": 46,
            "at": "l2:sockets",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 222,
            "size": 58,
            "at": "l2:sockets+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ổ điện, khoá, cửa sổ",
            "x": 8000,
            "y": 230,
            "size": 44,
            "at": "l2:sockets+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 310,
            "w": 46,
            "h": 46,
            "at": "l2:damp",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 292,
            "size": 58,
            "at": "l2:damp+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Ẩm mốc, nhà vệ sinh",
            "x": 8000,
            "y": 300,
            "size": 44,
            "at": "l2:damp+200"
          },
          {
            "id": "e-route",
            "t": "text",
            "text": "Giờ cao điểm: đi thử tới trường",
            "x": 7932,
            "y": 400,
            "size": 46,
            "at": "l4:rush hour",
            "hl": [
              {
                "text": "Giờ cao điểm",
                "at": "l4:rush hour"
              }
            ]
          },
          {
            "id": "e-near",
            "t": "text",
            "text": "Chợ · hiệu thuốc · trạm y tế?",
            "x": 7932,
            "y": 480,
            "size": 44,
            "at": "l5:market",
            "color": "muted"
          },
          {
            "id": "e-ten",
            "t": "text",
            "text": "Hỏi người đang thuê",
            "x": 8772,
            "y": 690,
            "size": 48,
            "at": "l5:tenant",
            "color": "accent",
            "hl": [
              {
                "text": "người đang thuê",
                "at": "l5:repairs"
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
          "say": "Stop three: Saturday, a real visit. This is Cô Hoa, the landlady. Big smile, bigger key ring.",
          "sub": "Chặng ba: sáng thứ Bảy, đi xem tận nơi. Đây là cô Hoa, chủ trọ. Cười tươi, chùm chìa khoá còn to hơn.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng tests taps, lights, fan, sockets, lock, windows; checks for damp and the toilet.",
          "sub": "Dũng thử vòi nước, đèn, quạt, ổ điện, khoá, cửa sổ; nhìn vết ẩm mốc và nhà vệ sinh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Clean, quiet, and in your budget. Right?",
          "sub": "Sạch, yên tĩnh, vừa túi tiền. Đúng không cháu?",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then ride to school at rush hour, the way you really will. Maps don't show jams.",
          "sub": "Rồi đi thử tới trường vào giờ cao điểm, bằng đúng phương tiện sẽ dùng. Bản đồ không hiện cảnh tắc đường.",
          "keys": [
            "giờ cao điểm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Market, pharmacy, clinic nearby? And ask a tenant: quick repairs, full deposits back?",
          "sub": "Quanh đó có chợ, hiệu thuốc, trạm y tế? Hỏi người đang thuê: sửa đồ có nhanh, trả cọc có đủ?",
          "keys": [
            "người đang thuê"
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
      "ref": "p14,p15,p17"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Sạch, yên, vừa túi. Còn gì chưa biết?",
        "illus": "crescent-moon"
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
          "say": "Clean, quiet, affordable. What don't you know yet?",
          "sub": "Sạch, yên, vừa túi tiền. Còn điều gì bạn chưa biết?"
        }
      ],
      "ref": "p18"
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
            "text": "④ Tối thứ Bảy · Quay lại",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:dinner"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "surprised"
                }
              ],
              "props": [
                "crescent-moon",
                "beer-mug"
              ]
            },
            "at": "l1:comes back",
            "caption": "Tối thứ Bảy · đường về khu trọ",
            "icon": "crescent-moon"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Quán nhậu ồn tới khuya?",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:loud",
            "color": "coral"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Đường về có đèn?",
            "x": 60,
            "y": 1340,
            "size": 48,
            "at": "l2:lights",
            "color": "coral"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Mấy giờ đóng cổng?",
            "x": 60,
            "y": 1420,
            "size": 48,
            "at": "l4:gate"
          },
          {
            "id": "f-r1",
            "t": "text",
            "text": "Ban ngày xem căn phòng,",
            "x": 60,
            "y": 1560,
            "size": 56,
            "at": "l3:Daytime",
            "color": "accent"
          },
          {
            "id": "f-r2",
            "t": "text",
            "text": "buổi tối xem con đường",
            "x": 60,
            "y": 1640,
            "size": 56,
            "at": "l3:night",
            "color": "accent",
            "hl": [
              {
                "text": "con đường",
                "at": "l3:road"
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
          "say": "Stop four: after dinner, Dũng comes back the way he'll walk home from group study.",
          "sub": "Chặng bốn: cùng ngày, sau bữa tối. Dũng quay lại, đi đúng đoạn đường sẽ về sau buổi học nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Whoa. The bar at the alley is so loud. And this stretch has no lights!",
          "sub": "Ôi. Quán nhậu đầu hẻm ồn ghê. Đoạn này lại không có đèn!",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Daytime, you see the room. At night, you see the road.",
          "sub": "Ban ngày xem căn phòng, buổi tối xem con đường.",
          "keys": [
            "buổi tối xem con đường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And ask what time the gate closes.",
          "sub": "Và hỏi rõ mấy giờ khu trọ đóng cổng."
        }
      ],
      "ref": "p18,p19"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chủ nhật · Hỏi trước khi gật",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "memo"
              ]
            },
            "at": "l1:nodding",
            "caption": "Chủ nhật · phòng mẫu",
            "icon": "memo"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:include",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1242,
            "size": 58,
            "at": "l2:include+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Giá thuê gồm gì?",
            "x": 2096,
            "y": 1250,
            "size": 46,
            "at": "l2:include+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1330,
            "w": 46,
            "h": 46,
            "at": "l2:water",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1312,
            "size": 58,
            "at": "l2:water+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Điện nước tính sao?",
            "x": 2096,
            "y": 1320,
            "size": 46,
            "at": "l2:water+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l3:deposit",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1382,
            "size": 58,
            "at": "l3:deposit+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Cọc khi nào trả?",
            "x": 2096,
            "y": 1390,
            "size": 46,
            "at": "l3:deposit+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1470,
            "w": 46,
            "h": 46,
            "at": "l3:repairs",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1452,
            "size": 58,
            "at": "l3:repairs+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Hỏng thì ai sửa?",
            "x": 2096,
            "y": 1460,
            "size": 46,
            "at": "l3:repairs+200"
          },
          {
            "id": "g-oral",
            "t": "text",
            "text": "Hứa miệng → ghi vào hợp đồng",
            "x": 2868,
            "y": 1780,
            "size": 46,
            "at": "l5:promises",
            "color": "accent",
            "hl": [
              {
                "text": "ghi vào hợp đồng",
                "at": "l5:contract"
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
          "say": "Stop five: Sunday. Before nodding yes, four questions.",
          "sub": "Chặng năm: Chủ nhật. Trước khi gật đầu, hỏi bốn câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "What does the rent include? How are power and water charged?",
          "sub": "Giá thuê đã gồm những gì ạ? Điện nước tính thế nào ạ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "When is the deposit returned? Who pays for repairs?",
          "sub": "Tiền cọc khi nào được trả lại ạ? Đồ hỏng thì ai chịu tiền sửa ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And I'll fix that window next week, don't worry.",
          "sub": "Cửa sổ tuần sau cô sửa, cháu yên tâm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Spoken promises are easy to forget. Ask to put them in the contract.",
          "sub": "Lời hứa miệng rất dễ bị quên. Đề nghị ghi vào hợp đồng.",
          "keys": [
            "ghi vào hợp đồng"
          ]
        }
      ],
      "ref": "p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "g-m",
            "t": "text",
            "text": "Công tơ: dùng bao nhiêu, trả nấy",
            "x": 2028,
            "y": 1560,
            "size": 44,
            "at": "l1:meter"
          },
          {
            "id": "g-f",
            "t": "text",
            "text": "Khoán: tháng nào cũng như nhau",
            "x": 2028,
            "y": 1630,
            "size": 42,
            "at": "l1:flat"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "→ không cách nào luôn rẻ hơn",
            "x": 2028,
            "y": 1700,
            "size": 46,
            "at": "l1:Neither",
            "color": "coral",
            "hl": [
              {
                "text": "luôn rẻ hơn",
                "at": "l1:cheaper"
              }
            ]
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Hỏi: số điện, nước, mạng, rác, xe",
            "x": 2028,
            "y": 1780,
            "size": 44,
            "at": "l2:unit",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Power by meter: pay for what you use. Flat rate: the same every month. Neither is always cheaper.",
          "sub": "Điện theo công tơ: dùng bao nhiêu trả bấy nhiêu. Khoán theo tháng: tháng nào cũng như nhau. Không cách nào luôn rẻ hơn.",
          "keys": [
            "Không cách nào luôn rẻ hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask the price per unit, water, internet, rubbish, parking. Bills can differ a lot.",
          "sub": "Hỏi giá mỗi số điện, nước, mạng, rác, gửi xe. Cùng giá thuê, hoá đơn có thể chênh nhau khá nhiều.",
          "keys": [
            "chênh nhau khá nhiều"
          ]
        }
      ],
      "ref": "p22"
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
            "text": "⑥ Chủ nhật · Ký và đặt cọc",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:contract"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "pen"
              ]
            },
            "at": "l1:Stop six",
            "caption": "Chủ nhật · ký hợp đồng",
            "icon": "page-facing-up"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l1:parties",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1242,
            "size": 58,
            "at": "l1:parties+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Thông tin hai bên",
            "x": 4064,
            "y": 1250,
            "size": 42,
            "at": "l1:parties+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1326,
            "w": 46,
            "h": 46,
            "at": "l1:rent",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1308,
            "size": 58,
            "at": "l1:rent+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Giá thuê, cọc, điện nước",
            "x": 4064,
            "y": 1316,
            "size": 42,
            "at": "l1:rent+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1392,
            "w": 46,
            "h": 46,
            "at": "l2:term",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1374,
            "size": 58,
            "at": "l2:term+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Thời hạn, ngày đóng tiền",
            "x": 4064,
            "y": 1382,
            "size": 42,
            "at": "l2:term+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1458,
            "w": 46,
            "h": 46,
            "at": "l2:early",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1440,
            "size": 58,
            "at": "l2:early+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Trả phòng sớm thì sao",
            "x": 4064,
            "y": 1448,
            "size": 42,
            "at": "l2:early+200"
          },
          {
            "id": "h-price",
            "t": "text",
            "text": "Ghi: giá giữ nguyên suốt hạn",
            "x": 4836,
            "y": 1780,
            "size": 46,
            "at": "l4:same",
            "color": "accent",
            "hl": [
              {
                "text": "giữ nguyên",
                "at": "l4:same"
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
          "say": "Stop six: the contract. Both parties' details, the rent, deposit, power and water prices,",
          "sub": "Chặng sáu: hợp đồng. Thông tin hai bên, giá thuê, tiền cọc, giá điện nước,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "the term, payment day, and what happens if you leave early.",
          "sub": "thời hạn thuê, ngày đóng tiền, và điều kiện khi trả phòng sớm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Read it all before signing; unsure, photo it for your parents. Each side keeps a signed copy.",
          "sub": "Đọc hết trước khi ký; chưa hiểu thì chụp gửi bố mẹ. Mỗi bên giữ một bản có chữ ký.",
          "keys": [
            "Đọc hết trước khi ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Can we also write that the rent stays the same for the whole term?",
          "sub": "Mình ghi thêm giá thuê giữ nguyên suốt thời hạn được không ạ?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Smart. Otherwise, a mid-term hike has nothing to check against.",
          "sub": "Khôn đấy. Không có dòng ấy, giữa chừng bị đòi tăng giá thì chẳng có chữ nào để đối chiếu."
        }
      ],
      "ref": "p23,p24,p25"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Đưa cọc tiền mặt",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Dạ, mai cô viết giấy sau cũng được”",
        "right": "“Cô ghi biên nhận luôn: số tiền, ngày, hai bên ký”",
        "wrongIllus": "money-with-wings",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Cash deposit, paper “tomorrow”? Sure, that's fine?",
          "sub": "Cọc tiền mặt, giấy “để mai”? Dạ, cũng được?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. A receipt now: amount, date, both signatures.",
          "sub": "Không. Biên nhận luôn: số tiền, ngày, hai bên ký.",
          "keys": [
            "Biên nhận luôn"
          ]
        }
      ],
      "ref": "p28,p27"
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
            "id": "h-np",
            "t": "text",
            "text": "Chưa có giấy, chưa đưa tiền",
            "x": 3996,
            "y": 1550,
            "size": 48,
            "at": "l1:paper",
            "color": "coral",
            "hl": [
              {
                "text": "Chưa có giấy",
                "at": "l1:paper"
              }
            ]
          },
          {
            "id": "h-ck",
            "t": "text",
            "text": "CK đúng tên chủ nhà, ghi rõ",
            "x": 3996,
            "y": 1620,
            "size": 44,
            "at": "l2:transfer"
          },
          {
            "id": "h-29",
            "t": "text",
            "text": "Tiền đưa ra, giấy tờ cầm về",
            "x": 3996,
            "y": 1690,
            "size": 54,
            "at": "l3:Money",
            "color": "accent",
            "hl": [
              {
                "text": "giấy tờ cầm về",
                "at": "l3:papers"
              }
            ]
          },
          {
            "id": "h-tt",
            "t": "text",
            "text": "≥ 30 ngày → đăng ký tạm trú",
            "x": 3996,
            "y": 1780,
            "size": 46,
            "at": "l4:thirty",
            "hl": [
              {
                "text": "đăng ký tạm trú",
                "at": "l4:register"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật Cư trú 2020, Điều 27 · công an xã/phường hoặc VNeID",
            "x": 4836,
            "y": 1845,
            "size": 26,
            "at": "l5:VNeID",
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
          "say": "Rule for every deposit: no paper, no money. Even if it's “tomorrow”.",
          "sub": "Quy tắc cho mọi khoản cọc: chưa có giấy thì chưa đưa tiền, dù hẹn “mai viết sau”.",
          "keys": [
            "chưa có giấy thì chưa đưa tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A transfer to the owner's account, clearly noted, leaves a trace. Paperless cash doesn't.",
          "sub": "Chuyển khoản đúng tài khoản đứng tên chủ nhà, ghi rõ nội dung thì có dấu vết; tiền mặt không giấy thì gần như không."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Money goes out, papers come back.",
          "sub": "Tiền đưa ra, giấy tờ cầm về.",
          "keys": [
            "giấy tờ cầm về"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Residence Law: renting thirty days or more to study, away from your home ward? Register temporary residence.",
          "sub": "Theo Luật Cư trú, ở trọ từ ba mươi ngày trở lên để đi học, ngoài xã, phường thường trú: phải đăng ký tạm trú.",
          "keys": [
            "đăng ký tạm trú"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "At the ward police or on VNeID. Your contract proves the address: get a copy.",
          "sub": "Nộp ở công an xã, phường nơi ở, hoặc trực tuyến qua VNeID. Hợp đồng chứng minh chỗ ở, xin chủ nhà một bản."
        }
      ],
      "ref": "p27,p29,p26"
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
            "at": "l3",
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
            "text": "⑦ Ngày dọn vào",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:moving"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "camera-with-flash",
                "key"
              ]
            },
            "at": "l1:unpacking",
            "caption": "Ngày dọn vào · phòng của Dũng",
            "icon": "camera-with-flash"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l1:photos",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 58,
            "at": "l1:photos+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Chụp phòng, chỗ hỏng",
            "x": 6032,
            "y": 1250,
            "size": 46,
            "at": "l1:photos+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1330,
            "w": 46,
            "h": 46,
            "at": "l3:meter",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1312,
            "size": 58,
            "at": "l3:meter+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Chụp công tơ điện, nước",
            "x": 6032,
            "y": 1320,
            "size": 46,
            "at": "l3:meter+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l3:lock",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1382,
            "size": 58,
            "at": "l3:lock+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Thay ổ khoá",
            "x": 6032,
            "y": 1390,
            "size": 46,
            "at": "l3:lock+200"
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "Ảnh có ngày: khỏi trừ cọc oan",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l2:dated",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi trừ cọc oan",
                "at": "l2:unfair"
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
          "say": "Stop seven: moving day. Before unpacking, Dũng photos the room and every flaw, and sends them to Cô Hoa.",
          "sub": "Chặng bảy: ngày dọn vào. Trước khi xếp đồ, Dũng chụp căn phòng và mọi chỗ hỏng, gửi cô Hoa.",
          "keys": [
            "chụp căn phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dated photos mean no unfair deposit cuts later.",
          "sub": "Ảnh có ngày giờ: sau này khỏi bị trừ cọc oan."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Power meter, water meter: snap. Cô Hoa, could you change the lock for me?",
          "sub": "Công tơ điện, nước: chụp. Cô ơi, cô thay giúp cháu ổ khoá nhé?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Meter photos: no paying for the last tenant. New lock: the last tenant may still have a key.",
          "sub": "Chụp công tơ: khỏi trả phần người ở trước. Thay khoá: người thuê cũ có thể vẫn giữ chìa."
        }
      ],
      "ref": "p30,p31,p32"
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
            "id": "i-fix",
            "t": "text",
            "text": "Hỏng: nhắn sớm + ảnh, hỏi ai sửa",
            "x": 5964,
            "y": 1570,
            "size": 42,
            "at": "l1:breaks"
          },
          {
            "id": "i-hike",
            "t": "text",
            "text": "Tăng giá: xem hợp đồng, đừng ngừng",
            "x": 5964,
            "y": 1635,
            "size": 42,
            "at": "l2:hike",
            "color": "coral"
          },
          {
            "id": "i-fire",
            "t": "text",
            "text": "Lối thoát hiểm · ổ điện · sạc xe",
            "x": 5964,
            "y": 1700,
            "size": 42,
            "at": "l3:fire"
          },
          {
            "id": "i-post",
            "t": "text",
            "text": "Không đăng địa chỉ lên mạng",
            "x": 5964,
            "y": 1770,
            "size": 48,
            "at": "l4:post",
            "color": "accent",
            "hl": [
              {
                "text": "Không đăng địa chỉ",
                "at": "l4:never"
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
          "say": "Something breaks? Message early with a photo. Big repairs: agree first who fixes, who pays.",
          "sub": "Đồ hỏng? Nhắn sớm kèm ảnh: hỏng gì, từ khi nào. Sửa lớn thì thống nhất trước ai sửa, ai trả.",
          "keys": [
            "Nhắn sớm kèm ảnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Price hike mid-term? Check the contract, politely ask to keep the price. Don't stop paying; talk to your parents.",
          "sub": "Bị đòi tăng giá giữa chừng? Xem lại hợp đồng, lịch sự đề nghị giữ giá. Đừng tự ngừng đóng tiền, bàn với bố mẹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Find fire exits and extinguishers. Don't overload sockets or charge an e-bike unattended overnight.",
          "sub": "Tìm lối thoát hiểm, bình chữa cháy. Không cắm quá nhiều vào một ổ, không sạc xe điện qua đêm khi không ai trông."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And never post your address or room photos publicly.",
          "sub": "Và không đăng địa chỉ, số phòng, ảnh nơi ở lên mạng công khai.",
          "keys": [
            "không đăng địa chỉ"
          ]
        }
      ],
      "ref": "p33,p34,p35,p36"
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
            "at": "l2",
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
            "text": "⑧ Học kỳ hai · Trả phòng",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:semester"
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
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "face": "sad"
                }
              ],
              "props": [
                "crescent-moon",
                "luggage"
              ]
            },
            "at": "l1:evening",
            "caption": "Học kỳ hai · tối, phòng Dũng",
            "icon": "luggage"
          },
          {
            "id": "j-l",
            "t": "text",
            "text": "Lan: dọn đi 1 buổi, nhắn sau",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:afternoon",
            "color": "coral"
          },
          {
            "id": "j-c",
            "t": "text",
            "text": "Hợp đồng: báo trước 1 tháng",
            "x": 7932,
            "y": 1340,
            "size": 46,
            "at": "l3:notice",
            "hl": [
              {
                "text": "báo trước 1 tháng",
                "at": "l3:notice"
              }
            ]
          },
          {
            "id": "j-lost",
            "t": "text",
            "text": "→ mất trọn tiền cọc",
            "x": 7932,
            "y": 1420,
            "size": 50,
            "at": "l2:whole",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: semester two, evening, Dũng's room. Lan, his classmate, drops by, grim-faced.",
          "sub": "Chặng cuối: học kỳ hai, buổi tối ở phòng Dũng. Lan, bạn cùng khoa, ghé qua. Mặt buồn thiu.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I moved out in an afternoon, then texted. He kept my whole deposit!",
          "sub": "Mình dọn đi trong một buổi chiều rồi mới nhắn chủ nhà. Bị giữ trọn tiền cọc!",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Did your contract ask for a month's notice?",
          "sub": "Hợp đồng của cậu có ghi báo trước một tháng không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "I never read that part.",
          "sub": "Mình chưa đọc đoạn đó.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Leaving suddenly is the easiest way to lose a deposit.",
          "sub": "Bỏ đi đột ngột là cách dễ mất cọc nhất.",
          "keys": [
            "dễ mất cọc nhất"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p39"
    },
    {
      "id": "s22",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "J",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "j-n",
            "t": "text",
            "text": "Báo bằng tin nhắn, đúng hạn",
            "x": 7932,
            "y": 1510,
            "size": 44,
            "at": "l1:message"
          },
          {
            "id": "j-o",
            "t": "text",
            "text": "Dọn · chìa · điện nước · so ảnh",
            "x": 7932,
            "y": 1580,
            "size": 44,
            "at": "l2:clean"
          },
          {
            "id": "j-r1",
            "t": "text",
            "text": "Đọc kỹ lúc vào,",
            "x": 7932,
            "y": 1665,
            "size": 58,
            "at": "l3:coming",
            "color": "accent"
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "báo trước lúc ra",
            "x": 7932,
            "y": 1750,
            "size": 58,
            "at": "l3:going",
            "color": "accent",
            "hl": [
              {
                "text": "báo trước",
                "at": "l3:notice"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…mắt thấy, giấy cầm”",
            "x": 8772,
            "y": 1780,
            "size": 50,
            "at": "l4:paper",
            "hl": [
              {
                "text": "giấy cầm",
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
          "say": "Leaving early? Reread the early-leave clause, and give notice by message, on time.",
          "sub": "Muốn trả phòng sớm: đọc lại điều khoản, báo chủ nhà bằng tin nhắn, đúng thời gian báo trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On the day: clean, return keys, pay bills, compare with move-in photos.",
          "sub": "Ngày trả phòng: dọn sạch, trả đủ chìa, thanh toán điện nước, so phòng với ảnh ngày dọn vào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Read carefully coming in, give notice going out.",
          "sub": "Đọc kỹ lúc vào, báo trước lúc ra.",
          "keys": [
            "Đọc kỹ lúc vào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hearing is never as good as seeing. For renting, seeing needs paper too.",
          "sub": "“Tai nghe không bằng mắt thấy.” Còn thuê trọ thì mắt thấy... vẫn cần giấy cầm.",
          "keys": [
            "giấy cầm"
          ]
        }
      ],
      "ref": "p37,p38,p40"
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
            "ms": 1400
          },
          {
            "at": "l1:eyes",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:Daytime",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:Money",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4:Read",
            "fit": "J",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 330,
            "at": "l1:eyes"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 720,
            "y": 1570,
            "at": "l2:Daytime"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1690,
            "at": "l3:Money"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 8432,
            "y": 1680,
            "at": "l4:Read"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Thông tin chung, không thay tư vấn pháp lý; thủ tục có thể đổi — hỏi công an xã, phường nơi ở.",
            "x": 5964,
            "y": 1845,
            "size": 26,
            "at": "l4:end",
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
          "say": "Four sayings to screenshot. One: not seen with your own eyes, not a single dong.",
          "sub": "Bốn câu để chụp màn hình. Một: chưa thấy tận mắt, chưa chuyển một đồng.",
          "keys": [
            "chưa thấy tận mắt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: Daytime, the room. Night-time, the road.",
          "sub": "Hai: ban ngày xem căn phòng, buổi tối xem con đường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: Money goes out, papers come back.",
          "sub": "Ba: tiền đưa ra, giấy tờ cầm về.",
          "keys": [
            "giấy tờ cầm về"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four: Read carefully coming in, give notice going out.",
          "sub": "Bốn: đọc kỹ lúc vào, báo trước lúc ra.",
          "keys": [
            "báo trước lúc ra"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s41",
      "module": "QUIZ-01",
      "ref": "questions[19]",
      "data": {
        "q": "A landlord in another city sends lovely photos and asks for a deposit today, what rule should you follow?",
        "options": [
          "Send half the deposit now, so the room is held while you decide",
          "Send no money until you or someone you trust has seen the room",
          "Pay today if the photos look new and the landlord sounds friendly"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "eyes",
        "why": "Ảnh đẹp, lời giục không chứng minh phòng có thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A landlord in another city sends lovely photos and asks for a deposit today, what rule should you follow?",
          "sub": "Chủ nhà ở thành phố khác gửi ảnh phòng rất đẹp và giục cọc ngay hôm nay, bạn theo nguyên tắc nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Send no money until you or someone you trust has seen the room.",
          "sub": "Chưa chuyển tiền khi bạn hoặc người tin cậy chưa xem phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Nice photos and a rush prove nothing.",
          "sub": "Ảnh đẹp, lời giục không chứng minh gì."
        }
      ]
    },
    {
      "id": "s42",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Screenshot the four sayings and the checklists, and take them to your first visit.",
          "sub": "Chụp màn hình bốn câu “Rút ra” và các danh sách, mang theo khi đi xem phòng."
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
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
