// Kịch bản video W lần 3 (#110) — "Hộ chiếu, thị thực và giấy tờ cần mang theo" · chuỗi "Lần đầu đi du lịch nước ngoài"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "passport-visa-documents--w01",
  "hook": "HOOK-09",
  "unit": {
    "audience": "first-trip-abroad",
    "slug": "passport-visa-documents",
    "door": "ky-nang",
    "level": "B1",
    "title": "Hộ chiếu, thị thực và giấy tờ cần mang theo",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo GIẤY TỜ của nhà Thảo (tối đầu tháng Một bày giấy tờ → tháng Một hộ chiếu (cô Hoa ướt bìa, Dũng làm mới) → thị thực → soát đơn → 12/3 cửa nhập cảnh, “Khoan đã!” → tối 12/3 lễ tân → 14/3 “nếu mất hộ chiếu” → tối 15/3 về nhà, khép vòng “chai nước”). Mạch chuỗi: w145/_series/first-trip-abroad.md. Đổi tên: Kiên (p16) → Thảo; Vy (p21) → Dũng; người trả tiền tài khoản lạ (p7) → Dũng; Vinh (p27) → cô Hoa hỏi “nếu mất”, Thảo đã chuẩn bị bản chụp (giả định, không xảy ra); nhân viên nhập cảnh, lễ tân → Sam. Câu mẫu p20 đổi “five days” → “four days” cho khớp chuyến 12–15/3. Cảnh ngắt nhịp: BRK-07 (s03), BRK-11 (s11 ba bước soát đơn), BRK-04 (s18 bản chụp hai nơi). Ca dao/thành ngữ: “Cẩn tắc vô áy náy”. Bản cũ (W lần 3, #110): w145/bak/passport-visa-documents--w01.js.",
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
            "text": "2 phút",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:two",
            "color": "accent",
            "hl": [
              {
                "text": "2 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "soát hộ chiếu ↔ cả chuyến đi",
            "x": 70,
            "y": 330,
            "size": 50,
            "at": "l2:skip",
            "hl": [
              {
                "text": "cả chuyến đi",
                "at": "l2:whole trip"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: giấy tờ là cả núi?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l3:mountain",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:short"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two minutes. That is all a passport check takes.",
          "sub": "Hai phút. Soát hộ chiếu chỉ mất chừng ấy.",
          "keys": [
            "Hai phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Skip it, and you can lose the whole trip.",
          "sub": "Bỏ qua thì có thể mất cả chuyến đi.",
          "keys": [
            "mất cả chuyến đi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We picture travel papers as a mountain. Really, the list is short.",
          "sub": "Ta tưởng giấy tờ là cả núi. Thật ra danh sách không dài.",
          "keys": [
            "không dài"
          ]
        }
      ],
      "ref": "intro,p2"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "file-folder",
                "passport-control"
              ]
            },
            "at": "l1",
            "caption": "Đầu tháng Một · bàn phòng khách",
            "icon": "file-folder"
          },
          {
            "id": "a-bot",
            "t": "text",
            "text": "Hộ chiếu cạnh… chai nước?",
            "x": 60,
            "y": 560,
            "size": 52,
            "at": "l5:bottle",
            "color": "coral",
            "hl": [
              {
                "text": "chai nước",
                "at": "l5:water bottle"
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
          "say": "Early January. Thảo spreads her papers like a general's battle map.",
          "sub": "Đầu tháng Một. Thảo bày giấy tờ như tướng quân trải bản đồ trận.",
          "keys": [
            "bản đồ trận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "What if one paper is missing at the airport?",
          "sub": "Lỡ thiếu một tờ ở sân bay thì sao?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, Thảo's mum, joining the trip and guarding papers like gold.",
          "sub": "Đây là cô Hoa, mẹ Thảo, cùng đi chuyến này, giữ giấy tờ như giữ vàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Mine is safe in my bag, right next to my water bottle!",
          "sub": "Của mẹ cất trong túi, ngay cạnh chai nước, yên tâm!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next to the water bottle. Hold that thought.",
          "sub": "Cạnh chai nước. Nhớ chi tiết này nhé.",
          "keys": [
            "Cạnh chai nước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
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
            "text": "Đi nước ngoài cần giấy tờ gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:papers",
            "hl": [
              {
                "text": "giấy tờ gì",
                "at": "l1:what papers"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cả núi giấy",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:mountain",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:three"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Hộ chiếu còn đủ hạn",
            "x": 2028,
            "y": 245,
            "size": 52,
            "at": "l3:passport",
            "hl": [
              {
                "text": "đủ hạn",
                "at": "l3:enough"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Thị thực, nếu nơi đến đòi",
            "x": 2028,
            "y": 325,
            "size": 52,
            "at": "l3:visa"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Vé khứ hồi, phòng, bảo hiểm",
            "x": 2028,
            "y": 405,
            "size": 52,
            "at": "l4:return",
            "color": "accent",
            "hl": [
              {
                "text": "Vé khứ hồi",
                "at": "l4:return ticket"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 540,
            "w": 220,
            "h": 90,
            "at": "l5:follow+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 540,
            "w": 220,
            "h": 90,
            "at": "l5:follow+550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 540,
            "w": 220,
            "h": 90,
            "at": "l5:follow+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 540,
            "w": 220,
            "h": 90,
            "at": "l5:follow+1050",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 540,
            "w": 220,
            "h": 90,
            "at": "l5:follow+1300",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 540,
            "w": 220,
            "h": 90,
            "at": "l5:follow+1550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 540,
            "w": 220,
            "h": 90,
            "at": "l5:follow+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Soát hộ chiếu",
            "x": 2038,
            "y": 562,
            "size": 34,
            "at": "l5:follow+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Làm hộ chiếu",
            "x": 2273,
            "y": 562,
            "size": 34,
            "at": "l5:follow+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thị thực?",
            "x": 2508,
            "y": 562,
            "size": 34,
            "at": "l5:follow+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Xin thị thực",
            "x": 2743,
            "y": 562,
            "size": 34,
            "at": "l5:follow+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Cửa nhập cảnh",
            "x": 2978,
            "y": 562,
            "size": 34,
            "at": "l5:follow+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Giữ giấy tờ",
            "x": 3213,
            "y": 562,
            "size": 34,
            "at": "l5:follow+1670"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Phòng khi mất",
            "x": 3448,
            "y": 562,
            "size": 34,
            "at": "l5:follow+1920"
          },
          {
            "id": "b-who",
            "t": "text",
            "text": "Theo giấy tờ nhà Thảo → 12/3",
            "x": 2028,
            "y": 680,
            "size": 44,
            "at": "l5:border",
            "hl": [
              {
                "text": "12/3",
                "at": "l5:twelfth"
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
          "say": "So what papers do you really need abroad?",
          "sub": "Vậy đi nước ngoài thật sự cần giấy tờ gì?",
          "keys": [
            "giấy tờ gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a mountain. Three things.",
          "sub": "Không phải cả núi. Ba thứ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A passport with enough validity. A visa, if the destination asks.",
          "sub": "Hộ chiếu còn đủ hạn. Thị thực, nếu nơi đến yêu cầu.",
          "keys": [
            "còn đủ hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And proof of the trip: return ticket, hotel booking, insurance.",
          "sub": "Và giấy chứng minh chuyến đi: vé khứ hồi, đặt phòng, bảo hiểm.",
          "keys": [
            "vé khứ hồi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "We follow these papers from this table to the border on March the twelfth.",
          "sub": "Ta theo chồng giấy này từ chiếc bàn tới cửa nhập cảnh ngày 12 tháng Ba."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-07",
      "data": {
        "question": "Thẻ căn cước dùng được ở nước ngoài không?",
        "illus": "identification-card"
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
          "say": "Can your ID card do the job abroad?",
          "sub": "Thẻ căn cước dùng được ở nước ngoài không?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
            "fit": "B",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "C",
            "ms": 900
          },
          {
            "at": "l4",
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
            "text": "① Đầu tháng Một · Hộ chiếu",
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
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "passport-control",
                "potable-water"
              ]
            },
            "at": "l1:home",
            "caption": "Hộ chiếu của cô Hoa",
            "icon": "passport-control"
          },
          {
            "id": "c-id",
            "t": "text",
            "text": "Ra nước ngoài: xem hộ chiếu",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l1:abroad",
            "hl": [
              {
                "text": "hộ chiếu",
                "at": "l1:check passports"
              }
            ]
          },
          {
            "id": "c-ck-c0",
            "t": "box",
            "x": 3996,
            "y": 250,
            "w": 44,
            "h": 44,
            "at": "l3:expiry",
            "stroke": 5
          },
          {
            "id": "c-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 234,
            "size": 56,
            "at": "l3:expiry+500",
            "color": "accent"
          },
          {
            "id": "c-ck-l0",
            "t": "text",
            "text": "Ngày hết hạn",
            "x": 4061,
            "y": 242,
            "size": 44,
            "at": "l3:expiry+200"
          },
          {
            "id": "c-ck-c1",
            "t": "box",
            "x": 3996,
            "y": 312,
            "w": 44,
            "h": 44,
            "at": "l3:blank",
            "stroke": 5
          },
          {
            "id": "c-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 296,
            "size": 56,
            "at": "l3:blank+500",
            "color": "accent"
          },
          {
            "id": "c-ck-l1",
            "t": "text",
            "text": "Còn trang trống",
            "x": 4061,
            "y": 304,
            "size": 44,
            "at": "l3:blank+200"
          },
          {
            "id": "c-ck-c2",
            "t": "box",
            "x": 3996,
            "y": 374,
            "w": 44,
            "h": 44,
            "at": "l3:water",
            "stroke": 5
          },
          {
            "id": "c-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 358,
            "size": 56,
            "at": "l3:water+500",
            "color": "accent"
          },
          {
            "id": "c-ck-l2",
            "t": "text",
            "text": "Không rách, không ướt nhoè",
            "x": 4061,
            "y": 366,
            "size": 44,
            "at": "l3:water+200"
          },
          {
            "id": "c-wet",
            "t": "text",
            "text": "Đã hư → hỏi cơ quan cấp",
            "x": 3996,
            "y": 450,
            "size": 48,
            "at": "l5:ask",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi cơ quan cấp",
                "at": "l5:issuing office"
              }
            ]
          },
          {
            "id": "c-bag",
            "t": "text",
            "text": "Bao nhựa, xa chai nước",
            "x": 3996,
            "y": 530,
            "size": 56,
            "at": "l6:sleeve",
            "color": "accent",
            "hl": [
              {
                "text": "xa chai nước",
                "at": "l6:far from"
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
          "say": "Stop one. At home your ID card works. Abroad, people check passports.",
          "sub": "Chặng một. Trong nước có căn cước là đủ; ra nước ngoài, người ta xem hộ chiếu.",
          "keys": [
            "xem hộ chiếu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check in, immigration, hotels, police: all ask for it.",
          "sub": "Thủ tục bay, nhập cảnh, khách sạn, báo mất: đều cần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three lines, two minutes: expiry date, blank pages, no tears or water damage.",
          "sub": "Ba dòng, hai phút: ngày hết hạn, trang trống, không rách, không ướt nhoè.",
          "keys": [
            "Ba dòng, hai phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Oh no. The cover is wet, and my photo is a bit smudged.",
          "sub": "Thôi chết. Bìa ướt rồi, ảnh hơi nhoè.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Torn or smudged passports can be refused. Ask the issuing office if it still works.",
          "sub": "Hộ chiếu rách, ướt nhoè có thể bị từ chối. Hỏi cơ quan cấp xem còn dùng được không.",
          "keys": [
            "Hỏi cơ quan cấp"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "From now on: a plastic sleeve, far from the water bottle.",
          "sub": "Từ nay: bao nhựa, xa chai nước.",
          "keys": [
            "xa chai nước"
          ]
        }
      ],
      "ref": "p1,p2,p4"
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
            "id": "c-from",
            "t": "text",
            "text": "Hạn tính từ ngày nhập cảnh",
            "x": 3996,
            "y": 625,
            "size": 42,
            "at": "l1:entry",
            "hl": [
              {
                "text": "ngày nhập cảnh",
                "at": "l1:entry"
              }
            ]
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "Sát mốc → làm mới trước",
            "x": 4836,
            "y": 690,
            "size": 50,
            "at": "l2:renew",
            "color": "accent",
            "hl": [
              {
                "text": "làm mới",
                "at": "l2:renew"
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
          "say": "Many countries count validity from your entry or exit date, not from today.",
          "sub": "Nhiều nước tính hạn hộ chiếu từ ngày nhập cảnh hoặc rời đi, không phải từ hôm nay.",
          "keys": [
            "ngày nhập cảnh hoặc rời đi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the official site. Close to the limit? Renew before you go.",
          "sub": "Tra trang chính thức. Sắp chạm mốc thì làm mới trước khi đi.",
          "keys": [
            "làm mới trước khi đi"
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
            "at": "a1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
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
            "id": "d-t",
            "t": "text",
            "text": "② Tháng Một · Làm hộ chiếu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
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
              "left": {
                "label": "Cách A: tài khoản lạ",
                "ok": false
              },
              "right": {
                "label": "Cách B: kênh chính thức",
                "ok": true
              }
            },
            "at": "l1:passport",
            "caption": "Dũng, chưa có hộ chiếu",
            "icon": "mobile-phone"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: trả tiền tài khoản lạ",
            "x": 5964,
            "y": 160,
            "size": 48,
            "at": "a1:account",
            "color": "coral"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "→ bị chặn, làm lại từ đầu",
            "x": 6004,
            "y": 235,
            "size": 42,
            "at": "a2:blocked",
            "color": "muted"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: cơ quan XNC, dịch vụ công",
            "x": 5964,
            "y": 315,
            "size": 48,
            "at": "b1:immigration",
            "color": "accent"
          },
          {
            "id": "d-b2",
            "t": "text",
            "text": "+ hỏi thẳng thời gian chờ",
            "x": 6004,
            "y": 390,
            "size": 42,
            "at": "b2:wait"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: Dũng has no passport, and the flight date breathes down his neck.",
          "sub": "Chặng hai: Dũng chưa có hộ chiếu, ngày bay phả hơi vào gáy."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "This account says passport in one week, no office visit. Just send my ID photos!",
          "sub": "Tài khoản này hứa có hộ chiếu trong tuần, không cần đi. Chỉ gửi ảnh căn cước!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "I paid the fee... and now they blocked me?",
          "sub": "Chuyển phí rồi… giờ họ chặn mình?",
          "phase": "a",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "I'll apply at the immigration office, or on the public service portal.",
          "sub": "Em nộp ở cơ quan xuất nhập cảnh, hoặc qua cổng dịch vụ công.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "And I'll ask them straight how long the wait is.",
          "sub": "Và hỏi thẳng họ phải chờ bao lâu.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Version A: money gone, ID photos with a stranger, and starting over even later.",
          "sub": "Cách A: mất tiền, ảnh căn cước nằm ở chỗ người lạ, làm lại từ đầu còn chậm hơn.",
          "keys": [
            "làm lại từ đầu"
          ]
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
          }
        ],
        "items": [
          {
            "id": "d-only",
            "t": "text",
            "text": "Chỉ cơ quan XNC cấp hộ chiếu",
            "x": 5964,
            "y": 480,
            "size": 46,
            "at": "l1:issues",
            "hl": [
              {
                "text": "Chỉ cơ quan XNC",
                "at": "l1:only"
              }
            ]
          },
          {
            "id": "d-late",
            "t": "text",
            "text": "Sợ không kịp → lùi ngày đặt vé",
            "x": 5964,
            "y": 555,
            "size": 44,
            "at": "l2:later",
            "color": "muted"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Giấy tờ nhà nước → đường nhà nước",
            "x": 5964,
            "y": 630,
            "size": 54,
            "at": "l3:state roads",
            "color": "accent",
            "hl": [
              {
                "text": "đường nhà nước",
                "at": "l3:state roads"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Luật Xuất cảnh, nhập cảnh 49/2019/QH14, sửa đổi bởi Luật 23/2023/QH15",
            "x": 5964,
            "y": 728,
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
          "say": "Only the immigration authority issues passports, in person or through the portal.",
          "sub": "Hộ chiếu chỉ do cơ quan quản lý xuất nhập cảnh cấp, nộp trực tiếp hoặc qua cổng dịch vụ công.",
          "keys": [
            "chỉ do cơ quan quản lý xuất nhập cảnh cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No middleman can promise speed. Worried? Ask about the wait, and book tickets later.",
          "sub": "Người trung gian không rút ngắn được gì chắc chắn. Sợ không kịp? Hỏi thời gian chờ, lùi ngày đặt vé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "State papers, state roads.",
          "sub": "Giấy tờ nhà nước, đi đường nhà nước.",
          "keys": [
            "đi đường nhà nước"
          ]
        }
      ],
      "ref": "p5,p7,p8"
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
          },
          {
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Giữa tháng Một · Cần thị thực?",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "globe-showing-asia-australia",
                "page-facing-up"
              ]
            },
            "at": "l1:visa",
            "caption": "Giờ nghỉ trưa · tra thị thực",
            "icon": "globe-showing-asia-australia"
          },
          {
            "id": "e-def",
            "t": "text",
            "text": "Thị thực = phép nhập cảnh",
            "x": 7932,
            "y": 160,
            "size": 52,
            "at": "l2:permission",
            "hl": [
              {
                "text": "phép nhập cảnh",
                "at": "l2:permission"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "miễn · điện tử · đại sứ quán",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l3:visa free",
            "color": "muted"
          },
          {
            "id": "e-lim",
            "t": "text",
            "text": "Miễn ≠ ở bao lâu cũng được",
            "x": 7932,
            "y": 320,
            "size": 48,
            "at": "l6:fined",
            "color": "coral",
            "hl": [
              {
                "text": "≠ ở bao lâu",
                "at": "l6:limited"
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
          "say": "Stop three: does the destination need a visa?",
          "sub": "Chặng ba: nơi đến có cần thị thực không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A visa is the destination's permission to enter.",
          "sub": "Thị thực là sự cho phép nhập cảnh của nước đến.",
          "keys": [
            "sự cho phép nhập cảnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Some places are visa free for short trips. Some offer e-visas. Some need the embassy.",
          "sub": "Có nơi miễn thị thực ngắn ngày, có nơi cấp thị thực điện tử, có nơi phải nộp ở đại sứ quán."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Visa free? Then I can stay as long as I like!",
          "sub": "Miễn thị thực à? Vậy ở bao lâu cũng được!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "No. The days are still limited.",
          "sub": "Không. Số ngày vẫn có giới hạn.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. The days are limited. Overstay, and you may be fined and struggle to enter next time.",
          "sub": "Đúng. Số ngày có hạn. Ở quá hạn có thể bị phạt, lần sau khó vào lại.",
          "keys": [
            "bị phạt"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p9,p10"
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
            "id": "e-q1",
            "t": "text",
            "text": "? Hộ chiếu VN cần thị thực?",
            "x": 7932,
            "y": 410,
            "size": 44,
            "at": "l2:need"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "? Được ở mấy ngày?",
            "x": 7932,
            "y": 470,
            "size": 44,
            "at": "l2:days"
          },
          {
            "id": "e-q3",
            "t": "text",
            "text": "? Xin ở đâu, chờ bao lâu?",
            "x": 7932,
            "y": 530,
            "size": 44,
            "at": "l2:apply"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "→ trang đại sứ quán, cơ quan XNC",
            "x": 7932,
            "y": 600,
            "size": 42,
            "at": "l3:embassy",
            "hl": [
              {
                "text": "đại sứ quán",
                "at": "l3:embassy"
              }
            ]
          },
          {
            "id": "e-tr",
            "t": "text",
            "text": "Nối chuyến → tra quá cảnh",
            "x": 8772,
            "y": 690,
            "size": 52,
            "at": "l4:transit",
            "color": "accent",
            "hl": [
              {
                "text": "quá cảnh",
                "at": "l4:transit"
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
          "say": "So Thảo writes three questions before booking.",
          "sub": "Vậy Thảo ghi ba câu hỏi trước khi đặt vé."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do Vietnamese passports need a visa here? How many days? Where to apply, how long?",
          "sub": "Hộ chiếu Việt Nam có cần thị thực? Được ở mấy ngày? Xin ở đâu, chờ bao lâu?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Answers come from that country's embassy or immigration site.",
          "sub": "Câu trả lời lấy từ trang đại sứ quán hoặc cơ quan xuất nhập cảnh nước đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Connecting in a third country? Check its transit rules too.",
          "sub": "Nối chuyến ở nước thứ ba? Tra cả quy định quá cảnh nước đó.",
          "keys": [
            "quy định quá cảnh"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Cuối tháng Một · Xin thị thực",
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
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "passport-control",
                "keyboard"
              ]
            },
            "at": "l1:application",
            "caption": "Tối cuối tháng Một · điền đơn",
            "icon": "keyboard"
          },
          {
            "id": "f-list",
            "t": "text",
            "text": "Hồ sơ: ảnh, đơn, vé, phòng…",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l2:photo"
          },
          {
            "id": "f-more",
            "t": "text",
            "text": "+ công việc, tài chính nếu cần",
            "x": 60,
            "y": 1325,
            "size": 42,
            "at": "l2:money",
            "color": "muted"
          },
          {
            "id": "f-gold",
            "t": "text",
            "text": "Khai thật · khai khớp",
            "x": 60,
            "y": 1410,
            "size": 60,
            "at": "l3:true",
            "color": "accent",
            "hl": [
              {
                "text": "khai khớp",
                "at": "l3:matching"
              }
            ]
          },
          {
            "id": "f-early",
            "t": "text",
            "text": "Nộp sớm · vé, phòng huỷ được",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l6:apply early",
            "hl": [
              {
                "text": "Nộp sớm",
                "at": "l6:early"
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
          "say": "Stop four: the visa application.",
          "sub": "Chặng bốn: xin thị thực."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usually: valid passport, correct photo, the form, ticket or plan, hotel proof, and job or money papers if asked.",
          "sub": "Thường gồm: hộ chiếu, ảnh đúng cỡ, đơn khai, vé hoặc lịch trình, chỗ ở, giấy công việc, tài chính nếu cần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each country has its own list. And two golden rules: true, and matching.",
          "sub": "Mỗi nước một danh sách. Và hai luật vàng: khai thật, khai khớp.",
          "keys": [
            "khai thật, khai khớp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Name, birthday, passport number: copied from the passport, not from memory.",
          "sub": "Tên, ngày sinh, số hộ chiếu: chép từ hộ chiếu, không gõ theo trí nhớ.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And my dates and hotel match my ticket and booking.",
          "sub": "Ngày đi, nơi ở khớp với vé và đặt phòng.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Apply early. Reviews take time, and not all are approved. Meanwhile, book refundable.",
          "sub": "Nộp sớm, vì xét có thể lâu, không phải hồ sơ nào cũng đậu. Trong lúc chờ, chọn vé, phòng huỷ được.",
          "keys": [
            "Nộp sớm"
          ]
        }
      ],
      "ref": "p13,p14,p15"
    },
    {
      "id": "s11",
      "module": "BRK-11",
      "data": {
        "title": "Thảo soát đơn: 3 bước",
        "items": [
          "Chép từ trang hộ chiếu",
          "Đọc to số, so ngược",
          "Soát tên, ngày, chụp màn hình"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: check, then screenshot.",
          "sub": "Ba: soát, chụp màn hình."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: read it backwards.",
          "sub": "Hai: đọc so ngược."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: copy the passport.",
          "sub": "Một: chép từ hộ chiếu."
        }
      ],
      "ref": "p16"
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
            "id": "f-back",
            "t": "text",
            "text": "So ngược → bắt lỗi đảo số",
            "x": 60,
            "y": 1600,
            "size": 48,
            "at": "l1:backwards",
            "hl": [
              {
                "text": "đảo số",
                "at": "l1:swapped"
              }
            ]
          },
          {
            "id": "f-again",
            "t": "text",
            "text": "Nhận thị thực → so lần nữa",
            "x": 60,
            "y": 1680,
            "size": 46,
            "at": "l2:arrives"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Gõ một lần, soát hai lần",
            "x": 900,
            "y": 1780,
            "size": 56,
            "at": "l3:type once",
            "color": "accent",
            "hl": [
              {
                "text": "soát hai lần",
                "at": "l3:check twice"
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
          "say": "Reading backwards catches two swapped digits.",
          "sub": "Đọc ngược bắt được lỗi đảo chỗ hai chữ số.",
          "keys": [
            "đảo chỗ hai chữ số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When the visa arrives, compare again. A mismatch can stop you at check in.",
          "sub": "Nhận thị thực rồi, so thêm lần nữa. Lệch số là có thể bị từ chối ngay ở quầy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Type once, check twice.",
          "sub": "Gõ một lần, soát hai lần.",
          "keys": [
            "soát hai lần"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 12/3 · Cửa nhập cảnh",
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
                  "pose": "give"
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
                "passport-control",
                "file-folder"
              ]
            },
            "at": "l1:arrival",
            "caption": "12/3 · sảnh đến",
            "icon": "passport-control"
          },
          {
            "id": "g-fold",
            "t": "text",
            "text": "Túi xách tay: một tệp giấy in",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l1:folder",
            "hl": [
              {
                "text": "giấy in",
                "at": "l1:folder"
              }
            ]
          },
          {
            "id": "g-list",
            "t": "text",
            "text": "vé về · phòng · bảo hiểm · thị thực",
            "x": 2028,
            "y": 1325,
            "size": 40,
            "at": "l2:return",
            "color": "muted"
          },
          {
            "id": "g-ph",
            "t": "text",
            "text": "+ ảnh thẻ, số điện thoại trên giấy",
            "x": 2028,
            "y": 1390,
            "size": 40,
            "at": "l2:photos",
            "color": "muted"
          },
          {
            "id": "g-short",
            "t": "text",
            "text": "Trả lời ngắn, thật · hỏi thì đưa",
            "x": 2028,
            "y": 1470,
            "size": 46,
            "at": "l6:short",
            "color": "accent",
            "hl": [
              {
                "text": "ngắn, thật",
                "at": "l6:short and true"
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
          "say": "Stop five: March the twelfth, the arrival hall. One printed folder in the carry on.",
          "sub": "Chặng năm: 12 tháng Ba, sảnh đến. Một tệp giấy in trong túi xách tay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Return ticket, booking, insurance, e-visa printout, spare photos, phone numbers.",
          "sub": "Vé khứ hồi, phòng, bảo hiểm, bản in thị thực, ảnh thẻ, số điện thoại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sam again, today an immigration officer.",
          "sub": "Lại là Sam, hôm nay làm nhân viên cửa nhập cảnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "What is the purpose of your visit?",
          "sub": "Cô đến đây với mục đích gì?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I am here for a holiday. I am staying at this hotel for four days.",
          "sub": "Tôi đi du lịch. Tôi ở khách sạn này bốn ngày.",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Short and true. Asked for papers? Hand them over.",
          "sub": "Ngắn và thật. Được hỏi giấy tờ thì đưa ra.",
          "keys": [
            "Ngắn và thật"
          ]
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "airport",
        "label": "12/3 · cửa nhập cảnh",
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
        "verdict": {
          "ok": false,
          "label": "Chỉ lưu xác nhận phòng trong điện thoại",
          "why": "Điện thoại hết pin thì không có gì đưa ra khi được hỏi ở đâu, bao giờ về.",
          "rule": "Điện thoại hết pin, tờ giấy vẫn còn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Where are you staying?",
          "sub": "Anh ở đâu?",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "It's in my email... but my phone is dead.",
          "sub": "Trong email… mà điện thoại hết pin rồi.",
          "face": "worried",
          "pose": "shrug",
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
          "say": "No hotel name, no paper: that means a side room and almost an hour of questions.",
          "sub": "Không nhớ tên, không tờ giấy: bị mời sang phòng bên hỏi gần một tiếng."
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
          "say": "This hotel, four days. Here is my booking, on paper.",
          "sub": "Khách sạn này, bốn ngày. Đây là xác nhận phòng, bản in.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "sam",
          "say": "Thank you. Enjoy your stay.",
          "sub": "Cảm ơn. Chúc anh vui.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p21,p22"
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
            "id": "g-rule",
            "t": "text",
            "text": "Hết pin, giấy vẫn còn",
            "x": 2028,
            "y": 1560,
            "size": 60,
            "at": "l1:paper",
            "color": "accent",
            "hl": [
              {
                "text": "giấy vẫn còn",
                "at": "l1:paper still works"
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
          "say": "A phone can die. Paper still works.",
          "sub": "Điện thoại hết pin, tờ giấy vẫn còn.",
          "keys": [
            "tờ giấy vẫn còn"
          ]
        }
      ],
      "ref": "p22"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tối 12/3 · Giữ giấy tờ",
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
              "set": "hotel",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "bellhop-bell",
                "passport-control"
              ]
            },
            "at": "l1:hotel",
            "caption": "Tối 12/3 · quầy lễ tân",
            "icon": "bellhop-bell"
          },
          {
            "id": "h-back",
            "t": "text",
            "text": "Chụp xong → lấy lại ngay",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l4:take it back",
            "hl": [
              {
                "text": "lấy lại ngay",
                "at": "l4:take it back"
              }
            ]
          },
          {
            "id": "h-str",
            "t": "text",
            "text": "Không đưa người lạ giữ",
            "x": 3996,
            "y": 1330,
            "size": 50,
            "at": "l5:stranger",
            "color": "coral"
          },
          {
            "id": "h-desk",
            "t": "text",
            "text": "→ hỏi quầy chính thức",
            "x": 4036,
            "y": 1405,
            "size": 42,
            "at": "l5:official",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: the hotel desk that night. Sam again, now at reception. Busy guy.",
          "sub": "Chặng sáu: quầy khách sạn tối ấy. Lại Sam, giờ ở lễ tân. Bận ghê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "May I copy your passport, please?",
          "sub": "Cho tôi chụp hộ chiếu nhé?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Of course. I'll wait right here to get it back.",
          "sub": "Được chứ. Tôi đứng đây chờ lấy lại luôn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hotels may copy it. Take it back before you leave the desk.",
          "sub": "Khách sạn có thể xin chụp. Lấy lại ngay trước khi rời quầy.",
          "keys": [
            "Lấy lại ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Never hand it to a stranger, even one claiming to be staff. Ask the official desk.",
          "sub": "Đừng đưa người lạ giữ, kể cả người tự xưng nhân viên. Hỏi quầy chính thức."
        }
      ],
      "ref": "p25"
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
            "id": "h-safe",
            "t": "text",
            "text": "Đi dạo: hộ chiếu trong két",
            "x": 3996,
            "y": 1500,
            "size": 50,
            "at": "l1:safe",
            "hl": [
              {
                "text": "trong két",
                "at": "l1:room safe"
              }
            ]
          },
          {
            "id": "h-copy",
            "t": "text",
            "text": "mang bản chụp, trừ khi buộc gốc",
            "x": 3996,
            "y": 1575,
            "size": 40,
            "at": "l2:original",
            "color": "muted"
          },
          {
            "id": "h-two",
            "t": "text",
            "text": "Bản chụp: điện thoại + hộp thư",
            "x": 3996,
            "y": 1660,
            "size": 48,
            "at": "l3:two places",
            "color": "accent",
            "hl": [
              {
                "text": "+ hộp thư",
                "at": "l3:email"
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
          "say": "Out for the day? The passport can stay in the room safe. Carry a copy.",
          "sub": "Đi dạo trong ngày? Để hộ chiếu trong két phòng, mang bản chụp.",
          "keys": [
            "két phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unless the country says carry the original. Not sure? Ask reception.",
          "sub": "Trừ khi nơi đến buộc mang bản gốc. Không chắc thì hỏi lễ tân."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep copies in two places: your phone and your email or cloud.",
          "sub": "Lưu bản chụp hai nơi: điện thoại và hộp thư hoặc kho trên mạng.",
          "keys": [
            "hai nơi"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "wrong": "Bản chụp chỉ nằm trong điện thoại",
        "right": "Lưu hai nơi, mở được từ máy khác",
        "wrongIllus": "mobile-phone-off",
        "rightIllus": "e-mail"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Copies only on your phone?",
          "sub": "Bản chụp chỉ trong điện thoại?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Lose the phone, and email still opens them.",
          "sub": "Mất máy, hộp thư vẫn mở được."
        }
      ],
      "ref": "p24"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 14/3 · Nếu mất hộ chiếu?",
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
                  "id": "hoa",
                  "side": "left",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "oncoming-taxi",
                "police-officer"
              ]
            },
            "at": "l1:day three",
            "caption": "14/3 · ngày thứ ba, đứng chờ taxi",
            "icon": "oncoming-taxi"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "① Báo công an, xin giấy",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l3:police",
            "hl": [
              {
                "text": "xin giấy",
                "at": "l3:police"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "② Lãnh sự quán: bản chụp + ảnh",
            "x": 5964,
            "y": 1325,
            "size": 44,
            "at": "l3:consulate"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "③ Báo hãng bay nếu cần",
            "x": 5964,
            "y": 1400,
            "size": 44,
            "at": "l4:airline"
          },
          {
            "id": "i-prep",
            "t": "text",
            "text": "Sẵn: ảnh hộ chiếu, 2 ảnh thẻ",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l5:email",
            "hl": [
              {
                "text": "2 ảnh thẻ",
                "at": "l5:two"
              }
            ]
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Bản sao lúc rảnh → cứu lúc rối",
            "x": 5964,
            "y": 1590,
            "size": 52,
            "at": "l6:calm",
            "color": "accent",
            "hl": [
              {
                "text": "cứu lúc rối",
                "at": "l6:chaos"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Luật 49/2019/QH14 (Điều 17–18, 28); TP Osaka — khi mất hộ chiếu",
            "x": 5964,
            "y": 1818,
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
          "say": "Stop seven, day three. Cô Hoa asks the scary question.",
          "sub": "Chặng bảy, ngày thứ ba. Cô Hoa hỏi câu đáng sợ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "What if I leave my passport in a taxi?",
          "sub": "Lỡ mẹ để quên hộ chiếu trên taxi thì sao?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Calm, three steps. Police report, then the Vietnamese consulate with copies and photos.",
          "sub": "Bình tĩnh, ba bước. Báo công an, rồi lãnh sự quán Việt Nam, mang bản chụp, ảnh thẻ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And tell the airline if our flight home is affected.",
          "sub": "Rồi báo hãng bay nếu chuyến về bị ảnh hưởng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo already has passport photos in her email, and two ID photos in the suitcase.",
          "sub": "Thảo đã có ảnh hộ chiếu trong email, hai ảnh thẻ trong vali.",
          "keys": [
            "hai ảnh thẻ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Copies made in calm times save you in chaos.",
          "sub": "Bản sao làm lúc rảnh, cứu mình lúc rối.",
          "keys": [
            "cứu mình lúc rối"
          ]
        }
      ],
      "ref": "p26,p27,p28"
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
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "passport-control",
                "potable-water"
              ]
            },
            "at": "l1:same",
            "caption": "Tối 15/3 · vẫn chiếc bàn ấy",
            "icon": "passport-control"
          },
          {
            "id": "j-sl",
            "t": "text",
            "text": "Bao nhựa, xa chai nước ✓",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:sleeve"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "2 phút → cả chuyến êm",
            "x": 7932,
            "y": 1350,
            "size": 52,
            "at": "l3:two minutes",
            "hl": [
              {
                "text": "cả chuyến êm",
                "at": "l3:whole trip"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1450,
            "size": 58,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l4:regret"
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
          "say": "March the fifteenth, back home. Same table, same pile of papers.",
          "sub": "Tối 15 tháng Ba, về nhà. Vẫn chiếc bàn ấy, chồng giấy ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Passport, into its plastic sleeve. Far from my water bottle!",
          "sub": "Hộ chiếu vào bao nhựa. Xa chai nước nhé!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two minutes of checking, a whole trip without trouble.",
          "sub": "Hai phút soát giấy, cả chuyến êm ru.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful hands never regret. Even the water bottle agrees.",
          "sub": "“Cẩn tắc vô áy náy.” Đến chai nước cũng đồng ý.",
          "keys": [
            "Cẩn tắc vô áy náy"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "at": "l1:state",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:type",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l2:phone",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:copies",
            "fit": "I",
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
            "x": 6694,
            "y": 550,
            "at": "l1:state"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1640,
            "y": 1780,
            "at": "l2:type"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2688,
            "y": 1560,
            "at": "l2:phone"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6694,
            "y": 1590,
            "at": "l3:copies"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định thị thực thay đổi, tra trang chính thức nơi đến.",
            "x": 7932,
            "y": 1810,
            "size": 30,
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
          "say": "So: state papers, state roads.",
          "sub": "Tóm lại: giấy tờ nhà nước, đi đường nhà nước.",
          "keys": [
            "đi đường nhà nước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Type once, check twice. A phone can die, paper still works.",
          "sub": "Gõ một lần, soát hai lần. Điện thoại hết pin, tờ giấy vẫn còn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And copies made in calm times save you in chaos.",
          "sub": "Và bản sao làm lúc rảnh, cứu mình lúc rối.",
          "keys": [
            "cứu mình lúc rối"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p8,p17,p22,p28"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "ref": "questions[19]",
      "data": {
        "q": "Is it better to copy details from your passport or type them from memory?",
        "options": [
          "Either way is fine, since officers will fix small mistakes when you arrive",
          "Copy them from the passport, because one wrong letter can make the visa useless",
          "Type from memory, because you know your own name and birthday better than anyone"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "passport-control",
        "why": "Một ký tự sai có thể làm thị thực không khớp hộ chiếu. Mở hộ chiếu bên cạnh và chép theo."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Is it better to copy details from your passport or type them from memory?",
          "sub": "Nên chép thông tin từ hộ chiếu hay gõ theo trí nhớ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Copy them from the passport, because one wrong letter can make the visa useless.",
          "sub": "Chép từ hộ chiếu, vì sai một chữ là thị thực có thể vô dụng."
        }
      ]
    },
    {
      "id": "s23",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Tra trang chính thức nơi bạn đến",
        "sub": "Rồi làm 40 câu hỏi bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Check your destination's official site, then try the forty questions. Next: flights and hotels.",
          "sub": "Tra trang chính thức nơi bạn đến, rồi làm bốn mươi câu hỏi. Bài sau: đặt vé và phòng."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
