// Kịch bản video W lần 3 (#110) — "Lần đầu đi du lịch nước ngoài cần chuẩn bị những gì?" · chuỗi "Lần đầu đi du lịch nước ngoài"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "prepare-first-trip-abroad--w01",
  "hook": "HOOK-03",
  "unit": {
    "audience": "first-trip-abroad",
    "slug": "prepare-first-trip-abroad",
    "door": "ky-nang",
    "level": "B1",
    "title": "Lần đầu đi du lịch nước ngoài cần chuẩn bị những gì?",
    "series": "Lần đầu đi du lịch nước ngoài"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo BA THÁNG chuẩn bị chuyến đi đầu tiên của Thảo (tối thứ Sáu giữa tháng Mười Hai → tháng Một vé, phòng → hai tuần cuối tiền, thẻ → tuần cuối hành lý → 12/3 ngày bay, “Khoan đã!” ở cửa ra → tối 12/3 đến nơi → 13/3 chợ đêm → tối 15/3 về nhà, khép vòng). Mạch chuỗi: w145/_series/first-trip-abroad.md. Đổi tên: “bạn” (p4) → Thảo; nhóm bạn, Lộc (p12), Hoàng (p27) → Dũng (em họ Thảo); người từng đi nước ngoài (p3) → Bác Bình (bố Thảo, ở nhà); nhân viên sân bay, lễ tân, tài xế → Sam. Cảnh ngắt nhịp: BRK-07 (s04 rehook), BRK-05 (s11 nhắc nhanh), BRK-04 (s20 Sai/Đúng). Số liệu chỉ từ bài: mười phút, năm dòng, gần một tiếng, gần hai tiếng, gần hai ngày. Ca dao neo: “Đi một ngày đàng, học một sàng khôn”. Bản cũ (W lần 3, #110): w145/bak/prepare-first-trip-abroad--w01.js.",
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
            "text": "10 phút",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "xem giấy tờ > mọi đợt giảm giá",
            "x": 70,
            "y": 330,
            "size": 50,
            "at": "l1:papers",
            "hl": [
              {
                "text": "giảm giá",
                "at": "l1:sale"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: vé rẻ thì bấm ngay?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:cheap",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l2:laser"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ten minutes with your papers is worth more than any flight sale.",
          "sub": "Mười phút xem giấy tờ đáng giá hơn mọi đợt giảm giá vé.",
          "keys": [
            "Mười phút xem giấy tờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet a cheap ticket makes us click faster than a cat chasing a laser.",
          "sub": "Vậy mà thấy vé rẻ, ta bấm nhanh hơn mèo vồ đèn laze.",
          "keys": [
            "bấm nhanh hơn"
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "mobile-phone",
                "airplane"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu · giữa tháng Mười Hai",
            "icon": "airplane"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng…”",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l6:travel",
            "color": "accent",
            "hl": [
              {
                "text": "ngày đàng",
                "at": "l6:one day"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "…nhưng phải đủ giấy",
            "x": 60,
            "y": 650,
            "size": 52,
            "at": "l7:papers",
            "color": "coral",
            "hl": [
              {
                "text": "đủ giấy",
                "at": "l7:right papers"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "List lover, about to take her very first trip abroad.",
          "sub": "Mê lập danh sách, sắp đi nước ngoài lần đầu tiên.",
          "keys": [
            "lần đầu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, her cousin, who says yes before reading.",
          "sub": "Còn đây là Dũng, em họ Thảo, chưa đọc đã gật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Cheap tickets tonight! The whole group is booking. Pay now, sis!",
          "sub": "Tối nay vé rẻ! Cả nhóm đang đặt. Chị bấm thanh toán luôn đi!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: travel one day, gain a basket of wisdom.",
          "sub": "Ông bà dặn: “Đi một ngày đàng, học một sàng khôn.”",
          "keys": [
            "Đi một ngày đàng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "But first, you need the right papers.",
          "sub": "Nhưng trước hết, phải đủ giấy.",
          "keys": [
            "phải đủ giấy"
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
      "ref": "intro,p4"
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
            "text": "Chuẩn bị gì, theo thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:prepare",
            "hl": [
              {
                "text": "thứ tự nào",
                "at": "l1:what order"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: lo mọi thứ một lúc",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:everything",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:dark"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đúng thứ tự thời gian",
            "x": 2028,
            "y": 255,
            "size": 58,
            "at": "l3:time order",
            "color": "accent",
            "hl": [
              {
                "text": "thứ tự thời gian",
                "at": "l3:time order"
              }
            ]
          },
          {
            "id": "b-o1",
            "t": "text",
            "text": "Giấy tờ → vé, phòng",
            "x": 2868,
            "y": 170,
            "size": 50,
            "at": "l3:papers"
          },
          {
            "id": "b-o2",
            "t": "text",
            "text": "→ tiền, hành lý → sân bay",
            "x": 2868,
            "y": 250,
            "size": 50,
            "at": "l4:money"
          },
          {
            "id": "b-ok",
            "t": "text",
            "text": "Đi đúng thứ tự → đều ổn",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l4:most",
            "hl": [
              {
                "text": "đều ổn",
                "at": "l4:fine"
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
          "say": "So, what to prepare, and in what order?",
          "sub": "Vậy chuẩn bị gì, theo thứ tự nào?",
          "keys": [
            "theo thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not everything at once, like packing in the dark.",
          "sub": "Không phải lo mọi thứ một lúc, như xếp vali trong bóng tối."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But in time order: papers first, then tickets and a room.",
          "sub": "Mà là theo thứ tự thời gian: giấy tờ trước, rồi vé và phòng.",
          "keys": [
            "thứ tự thời gian"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Money and bags last, then the airport. Most first timers are fine.",
          "sub": "Tiền, hành lý sau cùng, rồi sân bay. Phần lớn đều ổn.",
          "keys": [
            "đều ổn"
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
          }
        ],
        "items": [
          {
            "id": "b-map",
            "t": "text",
            "text": "Bản đồ cả chuỗi: 7 chặng",
            "x": 2028,
            "y": 460,
            "size": 52,
            "at": "l1:map",
            "hl": [
              {
                "text": "Bản đồ",
                "at": "l1:map"
              }
            ]
          },
          {
            "id": "b-deep",
            "t": "text",
            "text": "mỗi chặng → một bài đào sâu",
            "x": 2868,
            "y": 465,
            "size": 44,
            "at": "l2:deeper",
            "color": "muted"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 220,
            "h": 90,
            "at": "l2:seven+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 560,
            "w": 220,
            "h": 90,
            "at": "l2:seven+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 560,
            "w": 220,
            "h": 90,
            "at": "l2:seven+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 560,
            "w": 220,
            "h": 90,
            "at": "l2:seven+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 560,
            "w": 220,
            "h": 90,
            "at": "l2:seven+1400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 560,
            "w": 220,
            "h": 90,
            "at": "l2:seven+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 560,
            "w": 220,
            "h": 90,
            "at": "l2:seven+1900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "3 tháng",
            "x": 2040,
            "y": 578,
            "size": 38,
            "at": "l2:seven+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "1–2 tháng",
            "x": 2275,
            "y": 578,
            "size": 38,
            "at": "l2:seven+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "2 tuần",
            "x": 2510,
            "y": 578,
            "size": 38,
            "at": "l2:seven+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "1 tuần",
            "x": 2745,
            "y": 578,
            "size": 38,
            "at": "l2:seven+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Ngày bay",
            "x": 2980,
            "y": 578,
            "size": 38,
            "at": "l2:seven+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Đến nơi",
            "x": 3215,
            "y": 578,
            "size": 38,
            "at": "l2:seven+1770"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Phòng khi mất",
            "x": 3450,
            "y": 578,
            "size": 38,
            "at": "l2:seven+2020"
          },
          {
            "id": "b-who",
            "t": "text",
            "text": "Theo Thảo: tối thứ Sáu → 12/3",
            "x": 2028,
            "y": 690,
            "size": 44,
            "at": "l3:follow",
            "hl": [
              {
                "text": "12/3",
                "at": "l3:twelfth"
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
          "say": "This lesson is the map of the whole series.",
          "sub": "Bài này là tấm bản đồ của cả chuỗi bài.",
          "keys": [
            "tấm bản đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Seven stops, each pointing to a deeper lesson.",
          "sub": "Bảy chặng, mỗi chặng chỉ sang một bài đào sâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We follow Thảo to her flight on March the twelfth.",
          "sub": "Ta theo Thảo tới chuyến bay ngày 12 tháng Ba.",
          "keys": [
            "12 tháng Ba"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s04",
      "module": "BRK-07",
      "data": {
        "question": "Vé rẻ đang chờ, việc đầu tiên là gì?",
        "illus": "ticket"
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
          "say": "Cheap tickets are waiting. What comes first?",
          "sub": "Vé rẻ đang chờ. Việc đầu tiên là gì?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p4"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          },
          {
            "at": "l9",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l11",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ba tháng trước · Giấy tờ",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "dung",
                  "side": "right"
                },
                {
                  "id": "binh",
                  "side": "center",
                  "enter": "pop",
                  "at": "l8",
                  "pose": "hold"
                }
              ],
              "props": [
                "passport-control",
                "world-map"
              ]
            },
            "at": "l1:drawer",
            "caption": "Tối thứ Sáu · mở ngăn kéo",
            "icon": "passport-control"
          },
          {
            "id": "c-exp",
            "t": "text",
            "text": "Xem ngày hết hạn hộ chiếu",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l4:expiry",
            "hl": [
              {
                "text": "ngày hết hạn",
                "at": "l4:expiry date"
              }
            ]
          },
          {
            "id": "c-plus",
            "t": "text",
            "text": "nhiều nước: còn hạn sau nhập cảnh",
            "x": 3996,
            "y": 235,
            "size": 40,
            "at": "l4:extra",
            "color": "muted"
          },
          {
            "id": "c-none",
            "t": "text",
            "text": "Chưa có → làm ngay, cần chờ",
            "x": 3996,
            "y": 305,
            "size": 48,
            "at": "l5:apply",
            "color": "coral",
            "hl": [
              {
                "text": "làm ngay",
                "at": "l5:apply now"
              }
            ]
          },
          {
            "id": "c-visa",
            "t": "text",
            "text": "Thị thực? Tra trang chính thức",
            "x": 3996,
            "y": 395,
            "size": 48,
            "at": "l6:visa",
            "hl": [
              {
                "text": "trang chính thức",
                "at": "l7:embassy"
              }
            ]
          },
          {
            "id": "c-blog",
            "t": "text",
            "text": "bài chia sẻ cũ",
            "x": 4056,
            "y": 465,
            "size": 40,
            "at": "l7:old",
            "color": "muted"
          },
          {
            "id": "c-blogx",
            "t": "strike",
            "over": "c-blog",
            "at": "l7:post"
          },
          {
            "id": "c-near",
            "t": "text",
            "text": "Lần đầu: gần, bay thẳng",
            "x": 3996,
            "y": 545,
            "size": 50,
            "at": "l9:near",
            "hl": [
              {
                "text": "bay thẳng",
                "at": "l9:direct"
              }
            ]
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Giấy tờ xong → vé sau",
            "x": 3996,
            "y": 640,
            "size": 60,
            "at": "l11:papers",
            "color": "accent",
            "hl": [
              {
                "text": "vé sau",
                "at": "l11:tickets"
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
          "say": "Stop one, three months out. Thảo opens a drawer, not the payment page.",
          "sub": "Chặng một, ba tháng trước. Thảo mở ngăn kéo, chưa mở trang thanh toán.",
          "keys": [
            "mở ngăn kéo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Here's my passport. Dũng, where is yours?",
          "sub": "Hộ chiếu của chị đây. Dũng, của em đâu?",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Passport? I don't have one yet.",
          "sub": "Hộ chiếu á? Em chưa có.",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check the expiry date. Many countries want extra validity after you arrive.",
          "sub": "Xem ngày hết hạn. Nhiều nước đòi còn hạn thêm sau ngày nhập cảnh.",
          "keys": [
            "ngày hết hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Nearly expired? Boarding may be refused. No passport? Apply now.",
          "sub": "Sắp hết hạn? Có thể bị từ chối lên máy bay. Chưa có? Làm ngay.",
          "keys": [
            "Làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: a visa for a Vietnamese passport?",
          "sub": "Tiếp theo: hộ chiếu Việt Nam có cần thị thực không?",
          "keys": [
            "thị thực"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Check the embassy website, not an old blog post.",
          "sub": "Tra trang đại sứ quán, đừng dựa vào bài chia sẻ cũ.",
          "keys": [
            "trang đại sứ quán"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Enter Bác Bình, Thảo's dad, a seasoned traveller.",
          "sub": "Bác Bình bước vào, bố Thảo, người đi nhiều."
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "binh",
          "say": "First trip? Somewhere near, direct flight, and go with someone experienced.",
          "sub": "Lần đầu à? Nơi gần, bay thẳng, đi cùng người từng đi.",
          "pose": "explain"
        },
        {
          "id": "l11",
          "lang": "en",
          "who": "det",
          "say": "Rule one: papers done, then tickets.",
          "sub": "Rút ra: giấy tờ xong rồi, vé hẵng mua sau.",
          "keys": [
            "vé hẵng mua sau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l8",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p1,p2,p3,p4,p5"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Một, hai tháng trước · Vé, phòng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6944,
            "y": 150,
            "w": 640,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "ticket",
                "hotel"
              ]
            },
            "at": "l1:tickets",
            "caption": "Tháng Một · đặt vé",
            "icon": "ticket"
          },
          {
            "id": "d-name",
            "t": "text",
            "text": "Tên trên vé = y như hộ chiếu",
            "x": 5964,
            "y": 160,
            "size": 48,
            "at": "l3:exactly",
            "hl": [
              {
                "text": "y như hộ chiếu",
                "at": "l3:passport"
              }
            ]
          },
          {
            "id": "d-bag",
            "t": "text",
            "text": "Hành lý ký gửi? Đổi, huỷ: phí?",
            "x": 5964,
            "y": 225,
            "size": 44,
            "at": "l4:baggage"
          },
          {
            "id": "d-room",
            "t": "text",
            "text": "Phòng: gần ga, nhận xét gần đây",
            "x": 5964,
            "y": 290,
            "size": 46,
            "at": "l5:station",
            "hl": [
              {
                "text": "nhận xét gần đây",
                "at": "l5:recent reviews"
              }
            ]
          },
          {
            "id": "d-addr",
            "t": "text",
            "text": "Lưu địa chỉ tiếng địa phương",
            "x": 5964,
            "y": 360,
            "size": 46,
            "at": "l6:local language",
            "color": "accent",
            "hl": [
              {
                "text": "tiếng địa phương",
                "at": "l6:local language"
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
          "say": "Stop two, a month or two out: tickets and a room.",
          "sub": "Chặng hai, một, hai tháng trước: đặt vé và phòng.",
          "keys": [
            "đặt vé và phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Just type my nickname. Everyone knows me!",
          "sub": "Chị cứ gõ biệt danh em. Ai chẳng biết em!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No. Exactly as in your passport, letter by letter.",
          "sub": "Không. Đúng như trong hộ chiếu, từng chữ một.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Is checked baggage included? Do changes or cancelling cost money?",
          "sub": "Giá gồm hành lý ký gửi chưa? Đổi, huỷ có mất tiền không?",
          "keys": [
            "hành lý ký gửi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The room: near a station, with recent reviews.",
          "sub": "Phòng: gần ga tàu, bến xe, đọc nhận xét gần đây.",
          "keys": [
            "nhận xét gần đây"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Save the address in the local language, for the driver.",
          "sub": "Lưu địa chỉ bằng tiếng địa phương để đưa tài xế.",
          "keys": [
            "tiếng địa phương"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "id": "d-ck-c0",
            "t": "box",
            "x": 5964,
            "y": 455,
            "w": 44,
            "h": 44,
            "at": "l2:passport",
            "stroke": 5
          },
          {
            "id": "d-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 439,
            "size": 56,
            "at": "l2:passport+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l0",
            "t": "text",
            "text": "Hộ chiếu còn hạn",
            "x": 6029,
            "y": 447,
            "size": 40,
            "at": "l2:passport+200"
          },
          {
            "id": "d-ck-c1",
            "t": "box",
            "x": 5964,
            "y": 517,
            "w": 44,
            "h": 44,
            "at": "l2:visa",
            "stroke": 5
          },
          {
            "id": "d-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 501,
            "size": 56,
            "at": "l2:visa+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l1",
            "t": "text",
            "text": "Thị thực, nếu nơi đến yêu cầu",
            "x": 6029,
            "y": 509,
            "size": 40,
            "at": "l2:visa+200"
          },
          {
            "id": "d-ck-c2",
            "t": "box",
            "x": 5964,
            "y": 579,
            "w": 44,
            "h": 44,
            "at": "l2:ticket",
            "stroke": 5
          },
          {
            "id": "d-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 563,
            "size": 56,
            "at": "l2:ticket+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l2",
            "t": "text",
            "text": "Vé: tên đúng như hộ chiếu",
            "x": 6029,
            "y": 571,
            "size": 40,
            "at": "l2:ticket+200"
          },
          {
            "id": "d-ck-c3",
            "t": "box",
            "x": 5964,
            "y": 641,
            "w": 44,
            "h": 44,
            "at": "l2:room",
            "stroke": 5
          },
          {
            "id": "d-ck-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 625,
            "size": 56,
            "at": "l2:room+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l3",
            "t": "text",
            "text": "Xác nhận đặt phòng",
            "x": 6029,
            "y": 633,
            "size": 40,
            "at": "l2:room+200"
          },
          {
            "id": "d-ck-c4",
            "t": "box",
            "x": 5964,
            "y": 703,
            "w": 44,
            "h": 44,
            "at": "l3:insurance",
            "stroke": 5
          },
          {
            "id": "d-ck-l4",
            "t": "text",
            "text": "Bảo hiểm du lịch",
            "x": 6029,
            "y": 695,
            "size": 40,
            "at": "l3:insurance+200"
          },
          {
            "id": "d-later",
            "t": "text",
            "text": "← để chặng ba",
            "x": 6464,
            "y": 690,
            "size": 38,
            "at": "l3:stop three",
            "color": "coral"
          },
          {
            "id": "d-done",
            "t": "text",
            "text": "Đủ 5 dòng = xong giấy tờ",
            "x": 6944,
            "y": 690,
            "size": 44,
            "at": "l4:five",
            "color": "accent",
            "hl": [
              {
                "text": "xong giấy tờ",
                "at": "l4:paperwork"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fridge checklist: passport valid, visa if needed, ticket name right, room confirmed.",
          "sub": "Dán tủ lạnh: hộ chiếu còn hạn, thị thực nếu cần, vé đúng tên, xác nhận phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four ticks now. Travel insurance waits for stop three.",
          "sub": "Bốn dấu tích ngay. Bảo hiểm du lịch để chặng ba.",
          "keys": [
            "Bốn dấu tích"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five ticks, paperwork done. Like passing the paper round of an exam.",
          "sub": "Đủ năm dòng là xong giấy tờ, như qua vòng hồ sơ.",
          "keys": [
            "xong giấy tờ"
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
          },
          {
            "at": "a1",
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
            "text": "③ Hai tuần cuối · Tiền, thẻ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Cách A: một thẻ",
                "ok": false
              },
              "right": {
                "label": "Cách B: hai đường",
                "ok": true
              }
            },
            "at": "l2:two ways",
            "caption": "Tua nhanh · tối đầu tiên",
            "icon": "credit-card"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: một thẻ, không tiền mặt",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "a1:declined",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ bị từ chối, gọi ngân hàng",
            "x": 7972,
            "y": 230,
            "size": 42,
            "at": "a2:atm",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: hỏi ngân hàng, bật quốc tế",
            "x": 7932,
            "y": 305,
            "size": 46,
            "at": "b1:bank",
            "color": "accent"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "+ ít tiền mặt ngày đầu",
            "x": 7972,
            "y": 375,
            "size": 42,
            "at": "b2:cash"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, two weeks out: money and cards.",
          "sub": "Chặng ba, hai tuần cuối: tiền và thẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng's plan: one card, zero cash. Jump to the first night, two ways.",
          "sub": "Kế hoạch của Dũng: một thẻ, không tiền mặt. Tua tới tối đầu, hai cách.",
          "keys": [
            "một thẻ, không tiền mặt"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "sam",
          "say": "Sorry, your card was declined.",
          "sub": "Xin lỗi, thẻ của anh bị từ chối.",
          "phase": "a",
          "pose": "explain"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "The ATM said no too! It's my only card.",
          "sub": "Máy rút tiền cũng từ chối! Em chỉ có mỗi thẻ này.",
          "phase": "a",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "I asked my bank and turned on international payments.",
          "sub": "Em đã hỏi ngân hàng, mở thanh toán quốc tế.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "Plus cash for day one. Here you go!",
          "sub": "Thêm ít tiền mặt ngày đầu. Gửi chị ạ!",
          "phase": "b",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Version A: a friend pays the room, and almost an hour calling the bank.",
          "sub": "Cách A: bạn trả hộ tiền phòng, gần một tiếng gọi về ngân hàng.",
          "keys": [
            "gần một tiếng"
          ]
        }
      ],
      "ref": "p12"
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
          }
        ],
        "items": [
          {
            "id": "e-rule",
            "t": "text",
            "text": "1 thẻ: may · 2 đường: chắc",
            "x": 7932,
            "y": 455,
            "size": 56,
            "at": "l3:luck",
            "color": "accent",
            "hl": [
              {
                "text": "2 đường: chắc",
                "at": "l3:safety"
              }
            ]
          },
          {
            "id": "e-ex",
            "t": "text",
            "text": "Đổi ít tiền ở nơi được phép",
            "x": 8772,
            "y": 690,
            "size": 42,
            "at": "l2:licensed"
          },
          {
            "id": "e-ins",
            "t": "text",
            "text": "Bảo hiểm: mua trước, đọc kỹ",
            "x": 7932,
            "y": 550,
            "size": 46,
            "at": "l4:insurance",
            "hl": [
              {
                "text": "mua trước",
                "at": "l4:before"
              }
            ]
          },
          {
            "id": "e-med",
            "t": "text",
            "text": "Thuốc: đủ chuyến + đơn thuốc",
            "x": 7932,
            "y": 640,
            "size": 46,
            "at": "l6:medicine",
            "hl": [
              {
                "text": "đơn thuốc",
                "at": "l6:prescription"
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
          "say": "Ask your bank: does it work abroad, what to turn on, what fees?",
          "sub": "Hỏi ngân hàng: dùng được ở nước ngoài không, bật gì, phí ra sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Change a little cash at a bank or licensed exchange.",
          "sub": "Đổi ít tiền mặt ở ngân hàng hoặc điểm đổi được phép.",
          "keys": [
            "được phép"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One card is luck. Two ways to pay is safety.",
          "sub": "Một thẻ là may, hai đường là chắc.",
          "keys": [
            "hai đường là chắc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Insurance: buy before you fly, read what it covers. Doctors abroad cost a lot.",
          "sub": "Bảo hiểm: mua trước ngày bay, đọc nó trả gì. Khám ở nước ngoài tốn lắm.",
          "keys": [
            "trước ngày bay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Daily medicine? Bring enough, with the prescription. Some are restricted abroad.",
          "sub": "Thuốc hằng ngày? Mang đủ, kèm đơn thuốc. Có loại bị cấm nơi khác.",
          "keys": [
            "kèm đơn thuốc"
          ]
        }
      ],
      "ref": "p9,p10,p11,p13"
    },
    {
      "id": "s11",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, Thảo đã có",
        "points": [
          "Giấy tờ xong, vé mới mua",
          "Tên đúng, phòng gần ga",
          "Hai đường để trả tiền"
        ],
        "illus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Recap: papers first, tickets later.",
          "sub": "Nhắc lại: giấy tờ trước, vé sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Names that match. Rooms near transport.",
          "sub": "Tên đúng, phòng gần ga."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two ways to pay.",
          "sub": "Hai đường để trả tiền."
        }
      ],
      "ref": "p5,p6,p13"
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tuần cuối · Hành lý, người nhà",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "luggage",
                "camera-with-flash"
              ]
            },
            "at": "l1:suitcase",
            "caption": "Đầu tháng Ba · xếp vali",
            "icon": "luggage"
          },
          {
            "id": "f-kg",
            "t": "text",
            "text": "Hãng cho mấy cân? Xếp theo đó",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:kilos",
            "hl": [
              {
                "text": "mấy cân",
                "at": "l2:kilos"
              }
            ]
          },
          {
            "id": "f-liq",
            "t": "text",
            "text": "Chất lỏng, pin sạc, dao: luật riêng",
            "x": 60,
            "y": 1325,
            "size": 42,
            "at": "l2:liquids",
            "color": "coral"
          },
          {
            "id": "f-ph",
            "t": "text",
            "text": "Chụp giấy tờ → gửi người nhà",
            "x": 60,
            "y": 1405,
            "size": 46,
            "at": "l4:photos"
          },
          {
            "id": "f-cp",
            "t": "text",
            "text": "Bản photo cất riêng hộ chiếu",
            "x": 60,
            "y": 1480,
            "size": 46,
            "at": "l5:apart",
            "hl": [
              {
                "text": "cất riêng",
                "at": "l5:apart"
              }
            ]
          },
          {
            "id": "f-bag",
            "t": "text",
            "text": "Xách tay: thêm một bộ đồ",
            "x": 60,
            "y": 1560,
            "size": 46,
            "at": "l6:clothes",
            "color": "accent",
            "hl": [
              {
                "text": "một bộ đồ",
                "at": "l6:clothes"
              }
            ]
          },
          {
            "id": "f-call",
            "t": "text",
            "text": "Gửi nhà: số chuyến bay, lịch",
            "x": 60,
            "y": 1650,
            "size": 46,
            "at": "l8:flight number"
          },
          {
            "id": "f-time",
            "t": "text",
            "text": "+ giờ gọi về cố định",
            "x": 900,
            "y": 1780,
            "size": 50,
            "at": "l8:call time",
            "color": "accent",
            "hl": [
              {
                "text": "giờ gọi về cố định",
                "at": "l8:regular call time"
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
          "say": "Stop four, the last week. The suitcase gapes like a hungry mouth.",
          "sub": "Chặng bốn, tuần cuối. Vali há miệng như đang đói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check how many kilos the airline allows. Liquids, power banks and knives have their own rules.",
          "sub": "Xem hãng cho bao nhiêu cân. Chất lỏng, pin sạc, dao kéo có luật riêng.",
          "keys": [
            "bao nhiêu cân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Photos of all my papers. One copy for you, Dad.",
          "sub": "Ảnh chụp mọi giấy tờ. Một bản gửi bố nhé.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Good. Keep the paper copy apart from the real passport.",
          "sub": "Tốt. Bản photo cất riêng, đừng để chung hộ chiếu thật.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Carry on: passport, wallet, phone, medicine, adapter, spare clothes for late bags.",
          "sub": "Xách tay: hộ chiếu, ví, điện thoại, thuốc, ổ chuyển đổi, bộ đồ dự phòng.",
          "face": "happy",
          "keys": [
            "bộ đồ dự phòng"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Last, send home the flight number, hotel and plan. And fix a regular call time.",
          "sub": "Cuối cùng: gửi nhà số chuyến bay, khách sạn, lịch trình. Hẹn giờ gọi về cố định.",
          "keys": [
            "giờ gọi về cố định"
          ]
        }
      ],
      "ref": "p14,p15,p16,p17"
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
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 12/3 · Ngày bay",
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
              "set": "airport",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "walk"
                },
                {
                  "id": "dung",
                  "side": "center"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "airplane-departure",
                "luggage"
              ]
            },
            "at": "l1:flight day",
            "caption": "12/3 · sân bay",
            "icon": "airplane-departure"
          },
          {
            "id": "g-early",
            "t": "text",
            "text": "Đến sớm · tìm quầy theo số chuyến",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l2:early",
            "hl": [
              {
                "text": "số chuyến",
                "at": "l2:flight number"
              }
            ]
          },
          {
            "id": "g-ask",
            "t": "text",
            "text": "Không biết? Cứ hỏi!",
            "x": 2028,
            "y": 1320,
            "size": 52,
            "at": "l6:ask",
            "color": "accent",
            "hl": [
              {
                "text": "Cứ hỏi",
                "at": "l6:just ask"
              }
            ]
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1. Thủ tục, gửi hành lý",
            "x": 2028,
            "y": 1405,
            "size": 44,
            "at": "l7:check in"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2. Cửa xuất cảnh",
            "x": 2028,
            "y": 1470,
            "size": 44,
            "at": "l7:immigration"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3. Kiểm tra an ninh",
            "x": 2028,
            "y": 1535,
            "size": 44,
            "at": "l7:security"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "4. Ra cửa lên máy bay",
            "x": 2028,
            "y": 1600,
            "size": 44,
            "at": "l7:gate"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, March the twelfth. Flight day!",
          "sub": "Chặng năm, ngày 12 tháng Ba. Ngày bay!"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Arrive early. Find your counter on the screen by flight number.",
          "sub": "Đến sớm. Tìm quầy trên màn hình theo số chuyến bay.",
          "keys": [
            "số chuyến bay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Meet Sam, airport staff.",
          "sub": "Đây là Sam, nhân viên sân bay."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Excuse me, where is the counter for this flight?",
          "sub": "Xin lỗi, quầy làm thủ tục chuyến này ở đâu ạ?",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Over there, on your left. Have a nice trip!",
          "sub": "Ở kia, bên tay trái. Chúc chuyến đi vui vẻ!",
          "pose": "point",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Don't know? Just ask.",
          "sub": "Không biết thì cứ hỏi.",
          "keys": [
            "cứ hỏi"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Usual order: check in and drop bags, immigration, security, then the gate.",
          "sub": "Thứ tự: làm thủ tục, gửi hành lý, xuất cảnh, an ninh, rồi ra cửa."
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "airport",
        "label": "12/3 · qua an ninh",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Uống cà phê trước, tìm cửa sau",
          "why": "Giờ lên máy bay sớm hơn giờ cất cánh khá nhiều, cửa có thể đóng trước, và có thể ở tận cuối nhà ga.",
          "rule": "Qua an ninh: xem giờ lên máy bay, tìm cửa trước"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Security done. Almost two hours left.",
          "sub": "Qua an ninh rồi. Còn gần hai tiếng.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Coffee and shops first. Gate later!",
          "sub": "Cà phê, dạo cửa hàng đã. Tìm cửa sau!",
          "face": "happy",
          "pose": "point",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Boarding is long before take off, and the gate can close first.",
          "sub": "Giờ lên máy bay sớm hơn giờ cất cánh nhiều, cửa có thể đóng trước."
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
          "say": "Boarding time on my pass. Gate first.",
          "sub": "Xem giờ lên máy bay trên thẻ. Tìm cửa trước.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Then coffee near the gate.",
          "sub": "Rồi cà phê gần cửa thôi.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "g-bt",
            "t": "text",
            "text": "Giờ lên máy bay ≠ giờ cất cánh",
            "x": 2028,
            "y": 1680,
            "size": 44,
            "at": "l1:boarding time",
            "color": "coral",
            "hl": [
              {
                "text": "Giờ lên máy bay",
                "at": "l1:boarding time"
              }
            ]
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Tìm cửa trước, cà phê sau",
            "x": 2868,
            "y": 1770,
            "size": 56,
            "at": "l3:gate first",
            "color": "accent",
            "hl": [
              {
                "text": "cà phê sau",
                "at": "l3:coffee second"
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
          "say": "The boarding time on your pass is much earlier than take off.",
          "sub": "Giờ lên máy bay trên thẻ sớm hơn giờ cất cánh khá nhiều.",
          "keys": [
            "Giờ lên máy bay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Gates can close early, and sit at the far end.",
          "sub": "Cửa có thể đóng trước, lại ở tận cuối nhà ga."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So after security: find the gate first, coffee second.",
          "sub": "Vậy qua an ninh xong: tìm cửa trước, cà phê sau.",
          "keys": [
            "tìm cửa trước, cà phê sau"
          ]
        }
      ],
      "ref": "p20,p21"
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
            "at": "l2",
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
            "text": "⑥ Tối 12/3 · Đến nơi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "face": "tired"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "oncoming-taxi",
                "night-with-stars"
              ]
            },
            "at": "l1:land",
            "caption": "Tối muộn · trước sân bay",
            "icon": "oncoming-taxi"
          },
          {
            "id": "h-addr",
            "t": "text",
            "text": "Đưa địa chỉ tiếng địa phương",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l3:address"
          },
          {
            "id": "h-price",
            "t": "text",
            "text": "Hỏi giá trước!",
            "x": 3996,
            "y": 1325,
            "size": 60,
            "at": "l5:ask the price",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi giá trước",
                "at": "l5:price"
              }
            ]
          },
          {
            "id": "h-trick",
            "t": "text",
            "text": "Taxi không đồng hồ, hàng không giá",
            "x": 3996,
            "y": 1415,
            "size": 40,
            "at": "l6:meterless",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: they land late at night. New city, tired legs.",
          "sub": "Chặng sáu: hạ cánh lúc tối muộn. Thành phố lạ, chân mỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam again, now driving a taxi. Same smile.",
          "sub": "Lại là Sam, giờ lái taxi. Vẫn nụ cười ấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Our hotel address, in your language. How much will it be?",
          "sub": "Địa chỉ khách sạn, bằng tiếng địa phương. Hết bao nhiêu ạ?",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "The meter is on. Let's go!",
          "sub": "Đồng hồ bật rồi. Đi thôi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask the price first. The simplest, most effective habit.",
          "sub": "Hỏi giá trước: thói quen đơn giản mà hiệu quả nhất.",
          "keys": [
            "Hỏi giá trước"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Watch for meterless taxis, overly kind guides, unpriced goods.",
          "sub": "Coi chừng taxi không đồng hồ, người lạ quá nhiệt tình, hàng không giá."
        }
      ],
      "ref": "p7,p23"
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
          }
        ],
        "items": [
          {
            "id": "h-map",
            "t": "text",
            "text": "Bản đồ ngoại tuyến + danh thiếp",
            "x": 3996,
            "y": 1500,
            "size": 44,
            "at": "l1:offline map",
            "hl": [
              {
                "text": "ngoại tuyến",
                "at": "l1:offline"
              }
            ]
          },
          {
            "id": "h-lost",
            "t": "text",
            "text": "Lạc → vào tiệm gần, đưa địa chỉ",
            "x": 3996,
            "y": 1570,
            "size": 42,
            "at": "l1:lost"
          },
          {
            "id": "h-app",
            "t": "text",
            "text": "Tiếng Anh cơ bản + app dịch",
            "x": 3996,
            "y": 1640,
            "size": 46,
            "at": "l3:basic english",
            "hl": [
              {
                "text": "app dịch",
                "at": "l3:translation app"
              }
            ]
          },
          {
            "id": "h-tuc",
            "t": "text",
            "text": "Nhập gia tuỳ tục",
            "x": 3996,
            "y": 1720,
            "size": 60,
            "at": "l5:rome",
            "color": "accent",
            "hl": [
              {
                "text": "tuỳ tục",
                "at": "l5:romans"
              }
            ]
          },
          {
            "id": "h-cul",
            "t": "text",
            "text": "xếp hàng · hút thuốc · thờ tự",
            "x": 4836,
            "y": 1780,
            "size": 40,
            "at": "l4:queues",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Get an offline map and the hotel card. Lost? Show the address in any shop.",
          "sub": "Tải bản đồ ngoại tuyến, mang danh thiếp khách sạn. Lạc thì vào tiệm, đưa địa chỉ.",
          "keys": [
            "bản đồ ngoại tuyến"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Basic English plus a translation app covers most situations.",
          "sub": "Tiếng Anh cơ bản cộng ứng dụng dịch là đủ phần lớn tình huống.",
          "keys": [
            "ứng dụng dịch"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each place has its manners: queues, smoking areas, temple clothes.",
          "sub": "Mỗi nơi một phép lịch sự: xếp hàng, hút thuốc, trang phục.",
          "keys": [
            "phép lịch sự"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "When in Rome, do as the Romans do.",
          "sub": "Nhập gia tuỳ tục.",
          "keys": [
            "Nhập gia tuỳ tục"
          ]
        }
      ],
      "ref": "p22,p24,p25"
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
            "text": "⑦ 13/3 · Chợ đêm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "handbag",
                "night-with-stars"
              ]
            },
            "at": "l1:night market",
            "caption": "13/3 · chợ đêm đông nghịt",
            "icon": "handbag"
          },
          {
            "id": "i-one",
            "t": "text",
            "text": "Chung một túi → mất sạch",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l4:cut bag",
            "color": "coral",
            "hl": [
              {
                "text": "mất sạch",
                "at": "l4:everything gone"
              }
            ]
          },
          {
            "id": "i-two",
            "t": "text",
            "text": "gần 2 ngày: công an ↔ lãnh sự",
            "x": 5964,
            "y": 1330,
            "size": 42,
            "at": "l4:two days",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: next evening, a packed night market.",
          "sub": "Chặng bảy: tối hôm sau, chợ đêm đông nghịt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Passport, wallet, phone, all in one bag. Easy to watch!",
          "sub": "Hộ chiếu, ví, điện thoại, chung một túi. Dễ trông!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And if someone cuts that bag, you lose everything at once.",
          "sub": "Lỡ ai rạch túi là mất sạch một lúc đó em.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It happens: cut bag, everything gone, almost two days between police and consulate.",
          "sub": "Hay gặp: túi bị rạch, mất sạch, gần hai ngày chạy giữa công an và lãnh sự.",
          "keys": [
            "mất sạch"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Okay, okay. I'll split them up.",
          "sub": "Thôi được. Em chia ra cất.",
          "face": "thinking"
        }
      ],
      "ref": "p27"
    },
    {
      "id": "s20",
      "module": "BRK-04",
      "data": {
        "wrong": "Hộ chiếu, ví, điện thoại chung một túi",
        "right": "Chia ra mà cất, mất một còn ba",
        "wrongIllus": "handbag",
        "rightIllus": "locked-with-key"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Everything in one bag?",
          "sub": "Tất cả chung một túi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Split them up. Lose one, keep three.",
          "sub": "Chia ra mà cất, mất một còn ba."
        }
      ],
      "ref": "p28"
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
          }
        ],
        "items": [
          {
            "id": "i-p1",
            "t": "text",
            "text": "① Báo công an, xin giấy",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l1:police",
            "hl": [
              {
                "text": "xin giấy",
                "at": "l1:written report"
              }
            ]
          },
          {
            "id": "i-p2",
            "t": "text",
            "text": "② Đại sứ quán, lãnh sự quán",
            "x": 5964,
            "y": 1500,
            "size": 46,
            "at": "l2:embassy"
          },
          {
            "id": "i-p3",
            "t": "text",
            "text": "Lưu địa chỉ trước khi đi",
            "x": 5964,
            "y": 1580,
            "size": 52,
            "at": "l3:save",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi đi",
                "at": "l3:before you leave"
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
          "say": "Passport lost? Report to local police for a written report.",
          "sub": "Mất hộ chiếu? Báo công an nơi đó, xin giấy xác nhận.",
          "keys": [
            "xin giấy xác nhận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the Vietnamese embassy or consulate, for papers home.",
          "sub": "Rồi liên hệ đại sứ quán, lãnh sự quán Việt Nam để làm giấy tờ về nước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Save their address before you leave.",
          "sub": "Lưu sẵn địa chỉ cơ quan đại diện trước khi đi.",
          "keys": [
            "trước khi đi"
          ]
        }
      ],
      "ref": "p26"
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
            "text": "Tối 15/3 · Về nhà",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:fifteenth"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "mobile-phone",
                "airplane"
              ]
            },
            "at": "l1:same",
            "caption": "Tối 15/3 · vẫn phòng khách ấy",
            "icon": "airplane"
          },
          {
            "id": "j-ord",
            "t": "text",
            "text": "Hộ chiếu → thị thực → vé",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l3:passport",
            "color": "accent",
            "hl": [
              {
                "text": "→ vé",
                "at": "l3:tickets"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Đi một ngày đàng…”",
            "x": 7932,
            "y": 1370,
            "size": 56,
            "at": "l4:travel"
          },
          {
            "id": "j-list",
            "t": "text",
            "text": "học một sàng… danh sách",
            "x": 7932,
            "y": 1460,
            "size": 52,
            "at": "l4:checklist",
            "color": "accent",
            "hl": [
              {
                "text": "danh sách",
                "at": "l4:checklist"
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
          "say": "March the fifteenth, back home. Same sofa, same group chat.",
          "sub": "Tối 15 tháng Ba, về nhà. Vẫn ghế ấy, nhóm chat ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Cheap tickets again! Next trip? Pay now, sis!",
          "sub": "Lại vé rẻ! Chuyến sau nhé? Chị bấm luôn đi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Passport date first. Then the visa. Then we talk tickets.",
          "sub": "Xem hạn hộ chiếu trước. Rồi thị thực. Rồi mới bàn vé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Travel one day, gain a basket of wisdom. Thảo gained a whole checklist.",
          "sub": "Đi một ngày đàng, học một sàng khôn. Thảo học được cả… một danh sách.",
          "keys": [
            "một danh sách"
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
      "ref": "p4,p5"
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
            "at": "l2:papers",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3:luck",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4:gate",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4:split",
            "fit": "I",
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
            "x": 4696,
            "y": 640,
            "at": "l2:papers"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 455,
            "at": "l3:luck"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3608,
            "y": 1770,
            "at": "l4:gate"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6664,
            "y": 1250,
            "at": "l4:split"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định thay đổi, tra trang chính thức nơi đến.",
            "x": 7932,
            "y": 1810,
            "size": 30,
            "at": "l4:end",
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
          "say": "So: papers first, tickets later.",
          "sub": "Tóm lại: giấy tờ xong rồi, vé hẵng mua sau.",
          "keys": [
            "vé hẵng mua sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One card is luck, two ways to pay is safety.",
          "sub": "Một thẻ là may, hai đường là chắc.",
          "keys": [
            "hai đường là chắc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Find the gate first, coffee second. And split your things: lose one, keep three.",
          "sub": "Tìm cửa trước, cà phê sau. Và chia ra mà cất, mất một còn ba.",
          "keys": [
            "mất một còn ba"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p5,p13,p21,p28"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "ref": "questions[28]",
      "data": {
        "q": "Which time on the boarding pass tells you when to be at the gate?",
        "options": [
          "The departure time, since gates stay open until the plane starts to move",
          "The arrival time, because it shows when the airline starts calling passengers",
          "The boarding time, which is quite a bit earlier than the departure time"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "airplane-departure",
        "why": "Giờ lên máy bay sớm hơn giờ cất cánh khá nhiều, cửa có thể đóng trước. Hãy tìm cửa trước khi ngồi nghỉ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which time on the boarding pass tells you when to be at the gate?",
          "sub": "Giờ nào trên thẻ lên máy bay cho bạn biết lúc cần có mặt ở cửa ra?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The boarding time, which is quite a bit earlier than the departure time.",
          "sub": "Giờ lên máy bay, sớm hơn giờ cất cánh khá nhiều."
        }
      ]
    },
    {
      "id": "s25",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Mở hộ chiếu, xem ngày hết hạn",
        "sub": "Rồi làm 40 câu hỏi bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Check your passport date now, then try the forty questions. Next: passports and visas.",
          "sub": "Xem ngay hạn hộ chiếu, rồi làm bốn mươi câu hỏi. Bài sau: hộ chiếu, thị thực."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
