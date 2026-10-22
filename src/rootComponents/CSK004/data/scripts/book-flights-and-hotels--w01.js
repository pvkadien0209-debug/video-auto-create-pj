// Kịch bản video W lần 3 (#110) — "Đặt vé máy bay và phòng khách sạn lần đầu" · chuỗi "Lần đầu đi du lịch nước ngoài"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "book-flights-and-hotels--w01",
  "hook": "HOOK-08",
  "unit": {
    "audience": "first-trip-abroad",
    "slug": "book-flights-and-hotels",
    "door": "ky-nang",
    "level": "B1",
    "title": "Đặt vé máy bay và phòng khách sạn lần đầu",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo việc ĐẶT VÉ, PHÒNG của nhà Thảo (23 giờ tối cuối tháng Một, quảng cáo vé rẻ một nửa → đặt ở đâu (hai cách) → thẳng hay nối → giá gồm gì → điền tên cho mẹ, “Khoan đã!” → chọn khách sạn → đặt xong, nhắn khách sạn → chia tiền cả nhóm → 23 giờ đêm 12/3 quầy lễ tân, khép vòng “Của rẻ là của ôi”). Mạch chuỗi: w145/_series/first-trip-abroad.md. Đổi tên: Diệp (p3) → Dũng (diễn hai cách); Hiếu (p8) → Dũng đề xuất vé rời, Thảo chọn bay thẳng; Nhung (p14) → Thảo, mẹ Nhung → cô Hoa, tên hộ chiếu đổi NGUYEN THI LAN → NGUYEN THI HOA cho khớp nhân vật; Sơn (p20) → Dũng định đặt phòng “trung tâm”, Thảo xem bản đồ trước; lễ tân → Sam. Tin nhắn mẫu p23 giữ nguyên tiếng Anh. Cảnh ngắt nhịp: BRK-07 (s03), BRK-04 (s09 vé rẻ nhất / vé linh hoạt). Bản cũ (W lần 3, #110): w145/bak/book-flights-and-hotels--w01.js.",
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
            "text": "½ giá",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:half",
            "color": "accent",
            "hl": [
              {
                "text": "½ giá",
                "at": "l1:half price"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "vé khứ hồi · “chỉ còn 2 chỗ”",
            "x": 70,
            "y": 330,
            "size": 50,
            "at": "l1:seats",
            "hl": [
              {
                "text": "chỉ còn 2 chỗ",
                "at": "l1:two seats"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: rẻ thế là lời?",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:bargain",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:spoiled"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Của rẻ là của ôi”",
            "x": 60,
            "y": 560,
            "size": 60,
            "at": "l3:cheap",
            "color": "coral",
            "hl": [
              {
                "text": "của ôi",
                "at": "l3:spoiled"
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
          "say": "Half price return tickets. Only two seats left!",
          "sub": "Vé khứ hồi rẻ bằng một nửa. Chỉ còn hai chỗ!",
          "keys": [
            "rẻ bằng một nửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sounds like the bargain of the year, right?",
          "sub": "Nghe như món hời của năm, phải không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents warned: cheap goods are often spoiled goods.",
          "sub": "Ông bà dặn: “Của rẻ là của ôi.”",
          "keys": [
            "Của rẻ là của ôi"
          ]
        }
      ],
      "ref": "intro,p3"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "mobile-phone",
                "eleven-oclock"
              ]
            },
            "at": "l1",
            "caption": "23 giờ · một tối cuối tháng Một",
            "icon": "eleven-oclock"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Sợ bấm nhầm một nút",
            "x": 60,
            "y": 660,
            "size": 48,
            "at": "l5:wrong button",
            "hl": [
              {
                "text": "bấm nhầm",
                "at": "l5:wrong button"
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
          "say": "Eleven at night. Dũng, Thảo's cousin, finds that ad on social media.",
          "sub": "Mười một giờ đêm. Dũng, em họ Thảo, thấy quảng cáo ấy trên mạng xã hội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sis, the seller says pay now or lose the seats!",
          "sub": "Chị ơi, người bán bảo chuyển tiền ngay kẻo hết chỗ!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Thảo, the planner, stares at a hundred flights and hotels.",
          "sub": "Còn Thảo, người lên kế hoạch, đang nhìn cả trăm chuyến bay, khách sạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Prices jump up and down. What if I click the wrong button and lose money?",
          "sub": "Giá nhảy lên nhảy xuống. Lỡ bấm nhầm một nút là mất tiền thì sao?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Fear of the wrong button: the classic first booking feeling.",
          "sub": "Sợ bấm nhầm nút: cảm giác kinh điển của lần đặt đầu tiên.",
          "keys": [
            "Sợ bấm nhầm nút"
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
            "text": "Đặt lần đầu thế nào cho êm?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:book",
            "hl": [
              {
                "text": "cho êm",
                "at": "l1:smoothly"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Mua nơi chính thức",
            "x": 2028,
            "y": 160,
            "size": 48,
            "at": "l2:official"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Đọc điều kiện trước khi trả",
            "x": 2028,
            "y": 230,
            "size": 48,
            "at": "l2:conditions"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Điền tên đúng từng ô",
            "x": 2028,
            "y": 300,
            "size": 48,
            "at": "l3:names",
            "hl": [
              {
                "text": "đúng từng ô",
                "at": "l3:every box"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Xem bản đồ khách sạn",
            "x": 2868,
            "y": 160,
            "size": 48,
            "at": "l3:map"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "Soát xác nhận ngay",
            "x": 2868,
            "y": 230,
            "size": 48,
            "at": "l3:confirmation"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 470,
            "w": 255,
            "h": 90,
            "at": "l4:steps+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 470,
            "w": 255,
            "h": 90,
            "at": "l4:steps+550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 470,
            "w": 255,
            "h": 90,
            "at": "l4:steps+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 470,
            "w": 255,
            "h": 90,
            "at": "l4:steps+1050",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 470,
            "w": 255,
            "h": 90,
            "at": "l4:steps+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 470,
            "w": 255,
            "h": 90,
            "at": "l4:steps+1550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Đặt ở đâu",
            "x": 2043,
            "y": 490,
            "size": 38,
            "at": "l4:steps+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thẳng / nối",
            "x": 2318,
            "y": 490,
            "size": 38,
            "at": "l4:steps+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Giá gồm gì",
            "x": 2593,
            "y": 490,
            "size": 38,
            "at": "l4:steps+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Điền tên",
            "x": 2868,
            "y": 490,
            "size": 38,
            "at": "l4:steps+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Khách sạn",
            "x": 3143,
            "y": 490,
            "size": 38,
            "at": "l4:steps+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Đặt xong",
            "x": 3418,
            "y": 490,
            "size": 38,
            "at": "l4:steps+1670"
          },
          {
            "id": "b-who",
            "t": "text",
            "text": "Theo nhà Thảo: cuối tháng Một → 12/3",
            "x": 2028,
            "y": 620,
            "size": 44,
            "at": "l4:order",
            "hl": [
              {
                "text": "12/3",
                "at": "l4:twelfth"
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
          "say": "So how do you book a first trip smoothly?",
          "sub": "Vậy lần đầu đặt vé, đặt phòng thế nào cho êm?",
          "keys": [
            "cho êm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Buy from official places. Read the conditions before paying.",
          "sub": "Mua ở nơi chính thức. Đọc điều kiện trước khi trả tiền.",
          "keys": [
            "nơi chính thức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fill names in every box right, check the hotel on a map, and check the confirmation.",
          "sub": "Điền tên đúng từng ô, xem khách sạn trên bản đồ, soát lại xác nhận.",
          "keys": [
            "đúng từng ô"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Six steps, in the order you will do them, up to March the twelfth.",
          "sub": "Sáu chặng, đúng thứ tự bạn sẽ làm, tới ngày 12 tháng Ba."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-07",
      "data": {
        "question": "Vé rẻ một nửa, chỉ còn hai chỗ: chuyển tiền không?",
        "illus": "money-with-wings"
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
          "say": "Half price, two seats left. Pay now?",
          "sub": "Rẻ một nửa, còn hai chỗ. Chuyển tiền không?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
          },
          {
            "at": 150,
            "fit": "C",
            "ms": 900
          },
          {
            "at": "a1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
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
            "text": "① Cuối tháng Một · Đặt ở đâu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "left": {
                "label": "Cách A: tài khoản cá nhân",
                "ok": false
              },
              "right": {
                "label": "Cách B: trang của hãng",
                "ok": true
              }
            },
            "at": "l1:two ways",
            "caption": "Cùng một tối, hai cách",
            "icon": "mobile-phone"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "A: chuyển khoản tài khoản riêng",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "a1:transfer",
            "color": "coral"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "→ “mã” không có, bị chặn",
            "x": 4036,
            "y": 235,
            "size": 42,
            "at": "a2:nothing",
            "color": "muted"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "B: tự gõ trang hãng, trả thẻ",
            "x": 3996,
            "y": 315,
            "size": 46,
            "at": "b1:type",
            "color": "accent"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "→ email xác nhận ngay",
            "x": 4036,
            "y": 390,
            "size": 42,
            "at": "b2:email"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: where to buy. Let's play that night two ways.",
          "sub": "Chặng một: mua ở đâu. Diễn lại tối ấy theo hai cách."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Transfer to his personal account, done! He sent a booking code.",
          "sub": "Chuyển khoản vào tài khoản riêng, xong! Anh ấy gửi mã đặt chỗ rồi.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "The airline site shows nothing. And he blocked me.",
          "sub": "Tra trên trang hãng thì không thấy gì. Còn anh ấy chặn em rồi.",
          "phase": "a",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "I type the airline address myself, and pay by card.",
          "sub": "Em tự gõ địa chỉ trang hãng, trả bằng thẻ.",
          "phase": "b",
          "pose": "phone"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "Confirmation email, right away!",
          "sub": "Email xác nhận về ngay!",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Version A buys a photo of a code, and a blocked chat.",
          "sub": "Cách A mua được tấm ảnh có mã, và một cuộc trò chuyện bị chặn.",
          "keys": [
            "tấm ảnh có mã"
          ]
        }
      ],
      "ref": "p1,p2,p3"
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
            "id": "c-stop",
            "t": "text",
            "text": "Dừng lại khi:",
            "x": 3996,
            "y": 470,
            "size": 50,
            "at": "l1:stop"
          },
          {
            "id": "c-s1",
            "t": "text",
            "text": "• rẻ hơn hẳn mọi nơi",
            "x": 3996,
            "y": 535,
            "size": 42,
            "at": "l1:cheaper"
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "• chỉ nhận tài khoản cá nhân",
            "x": 3996,
            "y": 590,
            "size": 42,
            "at": "l1:personal"
          },
          {
            "id": "c-s3",
            "t": "text",
            "text": "• giục “chỉ còn vài phút”",
            "x": 3996,
            "y": 645,
            "size": 42,
            "at": "l1:rushes",
            "color": "coral"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Mua cửa chính, tra cửa chính",
            "x": 4836,
            "y": 690,
            "size": 50,
            "at": "l3:front door",
            "color": "accent",
            "hl": [
              {
                "text": "tra cửa chính",
                "at": "l3:check"
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
          "say": "Stop when it's far cheaper than everywhere, takes only personal accounts, and rushes you.",
          "sub": "Dừng lại khi rẻ hơn hẳn mọi nơi, chỉ nhận tài khoản cá nhân, giục “chỉ còn vài phút”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Use the airline, the hotel, or a known agent. Never a strange link.",
          "sub": "Mua ở trang hãng, khách sạn, đại lý có tiếng. Đừng bấm link lạ.",
          "keys": [
            "Đừng bấm link lạ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Buy at the front door, check at the front door.",
          "sub": "Mua ở cửa chính, tra ở cửa chính.",
          "keys": [
            "tra ở cửa chính"
          ]
        }
      ],
      "ref": "p1,p2,p4"
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
            "text": "② Đầu tháng Hai · Thẳng hay nối?",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "airplane",
                "world-map"
              ]
            },
            "at": "l1:direct",
            "caption": "Đầu tháng Hai · so chuyến bay",
            "icon": "airplane"
          },
          {
            "id": "d-dir",
            "t": "text",
            "text": "Bay thẳng: đắt hơn, đơn giản",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l4:simple",
            "hl": [
              {
                "text": "đơn giản",
                "at": "l4:simple"
              }
            ]
          },
          {
            "id": "d-con",
            "t": "text",
            "text": "Nối chuyến: rẻ, dễ lỡ chặng sau",
            "x": 5964,
            "y": 235,
            "size": 46,
            "at": "l4:connections",
            "color": "coral"
          },
          {
            "id": "d-one",
            "t": "text",
            "text": "Nối: chung một mã, chờ rộng",
            "x": 5964,
            "y": 310,
            "size": 46,
            "at": "l5:one booking",
            "color": "accent",
            "hl": [
              {
                "text": "chung một mã",
                "at": "l5:one booking"
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
          "say": "Stop two, early February: direct flight, or a connection?",
          "sub": "Chặng hai, đầu tháng Hai: bay thẳng hay nối chuyến?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Two separate tickets on two airlines, under two hours to connect. Cheaper!",
          "sub": "Hai vé rời của hai hãng, nối chưa đến hai tiếng. Rẻ hơn!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And if the first flight is late, the second airline just leaves without us.",
          "sub": "Lỡ chặng đầu trễ thì hãng thứ hai coi như mình không đến.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Direct costs more but stays simple. Connections are cheaper, with a strange airport and a missed leg risk.",
          "sub": "Bay thẳng đắt hơn nhưng đơn giản. Nối chuyến rẻ hơn, nhưng sân bay lạ, dễ lỡ chặng sau."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Connecting? One booking, and plenty of time. Then the airline usually fixes a late first leg.",
          "sub": "Nối chuyến thì chung một mã, chờ rộng. Chặng đầu trễ, hãng thường lo chuyến tiếp.",
          "keys": [
            "chung một mã"
          ]
        }
      ],
      "ref": "p5,p6,p8"
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
            "id": "d-solo",
            "t": "text",
            "text": "Vé rời → rủi ro tự gánh",
            "x": 5964,
            "y": 410,
            "size": 54,
            "at": "l1:separate",
            "color": "accent",
            "hl": [
              {
                "text": "tự gánh",
                "at": "l1:own"
              }
            ]
          },
          {
            "id": "d-night",
            "t": "text",
            "text": "Nửa đêm? Xem giờ địa phương",
            "x": 5964,
            "y": 500,
            "size": 40,
            "at": "l2:midnight",
            "hl": [
              {
                "text": "giờ địa phương",
                "at": "l2:local time"
              }
            ]
          },
          {
            "id": "d-bus",
            "t": "text",
            "text": "tàu, xe nghỉ · báo khách sạn",
            "x": 5964,
            "y": 565,
            "size": 38,
            "at": "l3:trains",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Separate tickets? The risk is all your own. Thảo picks the direct flight.",
          "sub": "Vé rời thì rủi ro cũng tự gánh. Thảo chọn bay thẳng.",
          "keys": [
            "rủi ro cũng tự gánh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then check the landing time in local time. Landing near midnight?",
          "sub": "Rồi xem giờ hạ cánh theo giờ địa phương. Đến lúc nửa đêm?",
          "keys": [
            "giờ địa phương"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Trains and buses may have stopped, and the hotel needs to know you'll be late.",
          "sub": "Tàu, xe buýt có thể đã nghỉ, và khách sạn cần biết bạn nhận phòng muộn."
        }
      ],
      "ref": "p7,p8,p9"
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
            "text": "③ Giữa tháng Hai · Giá gồm gì?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-open",
            "t": "text",
            "text": "Mở điều kiện vé, xem:",
            "x": 7932,
            "y": 160,
            "size": 52,
            "at": "l1:conditions",
            "hl": [
              {
                "text": "điều kiện vé",
                "at": "l1:conditions"
              }
            ]
          },
          {
            "id": "e-ck-c0",
            "t": "box",
            "x": 7932,
            "y": 250,
            "w": 44,
            "h": 44,
            "at": "l2:kilos",
            "stroke": 5
          },
          {
            "id": "e-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 234,
            "size": 56,
            "at": "l2:kilos+500",
            "color": "accent"
          },
          {
            "id": "e-ck-l0",
            "t": "text",
            "text": "Hành lý: bao nhiêu cân",
            "x": 7997,
            "y": 242,
            "size": 44,
            "at": "l2:kilos+200"
          },
          {
            "id": "e-ck-c1",
            "t": "box",
            "x": 7932,
            "y": 320,
            "w": 44,
            "h": 44,
            "at": "l2:changes",
            "stroke": 5
          },
          {
            "id": "e-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 304,
            "size": 56,
            "at": "l2:changes+500",
            "color": "accent"
          },
          {
            "id": "e-ck-l1",
            "t": "text",
            "text": "Đổi ngày, đổi tên: phí gì",
            "x": 7997,
            "y": 312,
            "size": 44,
            "at": "l2:changes+200"
          },
          {
            "id": "e-ck-c2",
            "t": "box",
            "x": 7932,
            "y": 390,
            "w": 44,
            "h": 44,
            "at": "l3:cancel",
            "stroke": 5
          },
          {
            "id": "e-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 374,
            "size": 56,
            "at": "l3:cancel+500",
            "color": "accent"
          },
          {
            "id": "e-ck-l2",
            "t": "text",
            "text": "Huỷ có hoàn tiền không",
            "x": 7997,
            "y": 382,
            "size": 44,
            "at": "l3:cancel+200"
          },
          {
            "id": "e-ck-c3",
            "t": "box",
            "x": 7932,
            "y": 460,
            "w": 44,
            "h": 44,
            "at": "l3:seats",
            "stroke": 5
          },
          {
            "id": "e-ck-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 444,
            "size": 56,
            "at": "l3:seats+500",
            "color": "accent"
          },
          {
            "id": "e-ck-l3",
            "t": "text",
            "text": "Chọn ghế, suất ăn: tính thêm?",
            "x": 7997,
            "y": 452,
            "size": 44,
            "at": "l3:seats+200"
          },
          {
            "id": "e-tot",
            "t": "text",
            "text": "Nhìn tổng tiền bước cuối",
            "x": 8772,
            "y": 160,
            "size": 52,
            "at": "l4:total",
            "color": "accent",
            "hl": [
              {
                "text": "tổng tiền",
                "at": "l4:total"
              }
            ]
          },
          {
            "id": "e-add",
            "t": "text",
            "text": "thuế + phí + hành lý + ghế",
            "x": 8772,
            "y": 240,
            "size": 46,
            "at": "l4:taxes",
            "color": "muted"
          },
          {
            "id": "e-eq",
            "t": "text",
            "text": "chênh nhiều → gần bằng",
            "x": 8772,
            "y": 310,
            "size": 46,
            "at": "l5:nearly",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, mid February. Before paying, open the fare conditions.",
          "sub": "Chặng ba, giữa tháng Hai. Trước khi trả tiền, mở điều kiện vé ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "How many kilos, carry on and checked? What do date or name changes cost?",
          "sub": "Xách tay, ký gửi bao nhiêu cân? Đổi ngày, đổi tên mất phí gì?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Can you cancel for a refund? Do seats and meals cost extra?",
          "sub": "Huỷ có được hoàn tiền không? Chọn ghế, suất ăn có tính thêm?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then look at the total on the last step, after taxes, fees, bags and seats.",
          "sub": "Rồi nhìn tổng tiền ở bước cuối, sau thuế, phí, hành lý, chọn ghế.",
          "keys": [
            "tổng tiền ở bước cuối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two fares that looked far apart can end up nearly equal.",
          "sub": "Hai vé tưởng chênh nhau nhiều, hoá ra gần bằng nhau."
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Lịch chưa chắc, chờ thị thực",
        "wrong": "Vé rẻ nhất: không đổi, không hoàn",
        "right": "Trả thêm chút cho vé linh hoạt",
        "labels": [
          "Tiết kiệm giả",
          "Rẻ về sau"
        ],
        "wrongIllus": "ticket",
        "rightIllus": "counterclockwise-arrows-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Cheapest fare: no changes, no refunds.",
          "sub": "Vé rẻ nhất: không đổi, không hoàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Plans not sure? Flexible can be cheaper later.",
          "sub": "Lịch chưa chắc? Vé linh hoạt có khi rẻ hơn về sau."
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Cuối tháng Hai · Điền tên",
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
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "give",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "passport-control",
                "keyboard"
              ]
            },
            "at": "l1:names",
            "caption": "Cuối tháng Hai · đặt cho mẹ",
            "icon": "passport-control"
          },
          {
            "id": "f-sur",
            "t": "text",
            "text": "Surname / Last name = HỌ",
            "x": 60,
            "y": 1250,
            "size": 56,
            "at": "l4:surname",
            "hl": [
              {
                "text": "HỌ",
                "at": "l4:family name"
              }
            ]
          },
          {
            "id": "f-giv",
            "t": "text",
            "text": "Given / First name = đệm + tên",
            "x": 60,
            "y": 1340,
            "size": 50,
            "at": "l4:given",
            "hl": [
              {
                "text": "đệm + tên",
                "at": "l4:middle"
              }
            ]
          },
          {
            "id": "f-nod",
            "t": "text",
            "text": "Y như hộ chiếu, không dấu",
            "x": 60,
            "y": 1430,
            "size": 50,
            "at": "l5:accents",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: names. Thảo books for the whole family, starting with her mum.",
          "sub": "Chặng bốn: điền tên. Thảo đặt cho cả nhà, bắt đầu từ mẹ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa, Thảo's mum, hands over her passport like a royal seal.",
          "sub": "Cô Hoa, mẹ Thảo, trao hộ chiếu như trao ấn tín."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "My passport says NGUYEN THI HOA. Type it carefully, dear.",
          "sub": "Hộ chiếu mẹ ghi NGUYEN THI HOA. Gõ cẩn thận nhé con.",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Remember: surname or last name is the family name. Given or first name is middle plus first.",
          "sub": "Nhớ: Surname, Last name là họ. Given name, First name là tên đệm và tên.",
          "keys": [
            "Surname, Last name là họ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Copy the passport page exactly, without accents. A photo of it, sent to yourself, helps.",
          "sub": "Chép y trang hộ chiếu, không dấu. Gửi ảnh trang ấy cho chính mình để vừa nhìn vừa gõ.",
          "keys": [
            "không dấu"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Đặt vé cho mẹ",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "phone"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Điền đảo họ và tên",
          "why": "Tên trên vé ngược với hộ chiếu, ra sân bay có thể phải chờ sửa và trả phí.",
          "rule": "Surname là họ; Given name là tên đệm và tên"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Surname: HOA. Given name: NGUYEN THI. Done!",
          "sub": "Surname: HOA. Given name: NGUYEN THI. Xong!",
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
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Surname is the family name. Now the ticket is backwards from the passport.",
          "sub": "Surname là họ. Giờ tên trên vé bị ngược so với hộ chiếu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At the airport, that can mean waiting for a fix, and a fee per person. Rewind!",
          "sub": "Ra sân bay có thể phải chờ sửa, trả phí cho từng người. Tua lại!"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Surname: NGUYEN. Given name: THI HOA. No accents.",
          "sub": "Surname: NGUYEN. Given name: THI HOA. Không dấu.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "That's exactly my passport. Good girl!",
          "sub": "Đúng y hộ chiếu mẹ. Giỏi lắm!",
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
      "ref": "p14,p15"
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
            "id": "f-fam",
            "t": "text",
            "text": "Cả nhà: từng hộ chiếu bên cạnh",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l1:family"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Ô nào chữ nấy, nhìn hộ chiếu",
            "x": 60,
            "y": 1610,
            "size": 52,
            "at": "l2:box",
            "color": "accent",
            "hl": [
              {
                "text": "Ô nào chữ nấy",
                "at": "l2:each name"
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
          "say": "Booking for family? Keep each person's passport beside you.",
          "sub": "Đặt cho cả nhà thì để hộ chiếu từng người bên cạnh.",
          "keys": [
            "hộ chiếu từng người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each name in its box, copied from the passport.",
          "sub": "Ô nào chữ nấy, nhìn hộ chiếu mà điền.",
          "keys": [
            "Ô nào chữ nấy"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s125",
      "module": "BRK-06",
      "data": {
        "title": "Đọc nhận xét theo 4 điểm",
        "items": [
          {
            "illus": "sparkles",
            "text": "Sạch sẽ"
          },
          {
            "illus": "speaker-high-volume",
            "text": "Tiếng ồn"
          },
          {
            "illus": "shield",
            "text": "Khu vực an toàn"
          },
          {
            "illus": "bellhop-bell",
            "text": "Nhân viên giúp khách"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Clean? Quiet? Safe? Helpful staff?",
          "sub": "Sạch? Yên? An toàn? Nhân viên giúp khách?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Four things to read in every review.",
          "sub": "Bốn điểm đọc trong mỗi nhận xét."
        }
      ],
      "ref": "p16"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Cuối tháng Hai · Khách sạn",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "hotel",
                "world-map"
              ]
            },
            "at": "l1:hotel",
            "caption": "Cùng tối · chọn phòng",
            "icon": "hotel"
          },
          {
            "id": "g-rev",
            "t": "text",
            "text": "Sạch · ồn · an toàn · nhân viên",
            "x": 2028,
            "y": 1250,
            "size": 40,
            "at": "l2:reviews",
            "hl": [
              {
                "text": "an toàn",
                "at": "l2:four points"
              }
            ]
          },
          {
            "id": "g-bad",
            "t": "text",
            "text": "đọc cả lời chê",
            "x": 2068,
            "y": 1315,
            "size": 40,
            "at": "l2:complaints",
            "color": "muted"
          },
          {
            "id": "g-cen",
            "t": "text",
            "text": "“Trung tâm” = tên quận?",
            "x": 2028,
            "y": 1390,
            "size": 50,
            "at": "l5:district",
            "color": "coral",
            "hl": [
              {
                "text": "tên quận",
                "at": "l5:district"
              }
            ]
          },
          {
            "id": "g-walk",
            "t": "text",
            "text": "hẻm vắng, ra ga hơn nửa tiếng",
            "x": 2068,
            "y": 1465,
            "size": 40,
            "at": "l5:station",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: the hotel. Price is only the first line.",
          "sub": "Chặng năm: khách sạn. Giá chỉ là dòng đầu tiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read reviews on those four points, and read the complaints too.",
          "sub": "Đọc nhận xét theo bốn điểm ấy, đọc cả lời chê."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Cheapest room, no refund, and it says central!",
          "sub": "Phòng rẻ nhất, không hoàn tiền, ghi là trung tâm!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Let me check it on the map first.",
          "sub": "Để chị xem trên bản đồ đã.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Good call. Some central rooms sit in a quiet alley, half an hour from the station. Central is just the district.",
          "sub": "Khéo đấy. Có phòng “trung tâm” nằm trong hẻm vắng, ra ga hơn nửa tiếng; “trung tâm” chỉ là tên quận."
        }
      ],
      "ref": "p16,p20"
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
            "id": "g-type",
            "t": "text",
            "text": "Giường · cửa sổ · tắm riêng · bữa sáng",
            "x": 2028,
            "y": 1560,
            "size": 38,
            "at": "l1:beds"
          },
          {
            "id": "g-tax",
            "t": "text",
            "text": "Xem dòng “trả tại khách sạn”",
            "x": 2028,
            "y": 1630,
            "size": 44,
            "at": "l2:pay",
            "hl": [
              {
                "text": "trả tại khách sạn",
                "at": "l2:pay at the hotel"
              }
            ]
          },
          {
            "id": "g-free",
            "t": "text",
            "text": "Chuyến đầu: huỷ miễn phí",
            "x": 2028,
            "y": 1705,
            "size": 50,
            "at": "l3:free",
            "color": "accent",
            "hl": [
              {
                "text": "huỷ miễn phí",
                "at": "l3:free cancellation"
              }
            ]
          },
          {
            "id": "g-map",
            "t": "text",
            "text": "Xem bản đồ trước, ảnh sau",
            "x": 2868,
            "y": 1780,
            "size": 50,
            "at": "l4:map first",
            "color": "accent",
            "hl": [
              {
                "text": "bản đồ trước",
                "at": "l4:map first"
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
          "say": "Check the room type: beds, a window, private bathroom, breakfast. The prettiest photo is often the lobby.",
          "sub": "Xem loại phòng: mấy giường, cửa sổ, tắm riêng, bữa sáng. Ảnh đẹp nhất thường là ảnh sảnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nightly prices may skip taxes and local fees. Read the total, and the line pay at the hotel.",
          "sub": "Giá theo đêm có thể chưa gồm thuế, phí. Xem tổng cuối và dòng “trả tại khách sạn”.",
          "keys": [
            "trả tại khách sạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First trip, plans may move: free cancellation usually beats no refund.",
          "sub": "Chuyến đầu, lịch dễ đổi: huỷ miễn phí thường đáng tiền hơn không hoàn tiền.",
          "keys": [
            "huỷ miễn phí"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check the map first, the photos second.",
          "sub": "Xem bản đồ trước, xem ảnh sau.",
          "keys": [
            "Xem bản đồ trước"
          ]
        }
      ],
      "ref": "p17,p18,p19,p21"
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
            "text": "⑥ Đầu tháng Ba · Đặt xong rồi",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "e-mail",
                "spiral-calendar"
              ]
            },
            "at": "l1:booked",
            "caption": "Đầu tháng Ba · giờ nghỉ trưa",
            "icon": "e-mail"
          },
          {
            "id": "h-ck-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:email",
            "stroke": 5
          },
          {
            "id": "h-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1244,
            "size": 56,
            "at": "l2:email+500",
            "color": "accent"
          },
          {
            "id": "h-ck-l0",
            "t": "text",
            "text": "Soát email: tên, ngày, mã",
            "x": 4061,
            "y": 1252,
            "size": 42,
            "at": "l2:email+200"
          },
          {
            "id": "h-ck-c1",
            "t": "box",
            "x": 3996,
            "y": 1326,
            "w": 44,
            "h": 44,
            "at": "l2:code",
            "stroke": 5
          },
          {
            "id": "h-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1310,
            "size": 56,
            "at": "l2:code+500",
            "color": "accent"
          },
          {
            "id": "h-ck-l1",
            "t": "text",
            "text": "Tra mã trên trang hãng",
            "x": 4061,
            "y": 1318,
            "size": 42,
            "at": "l2:code+200"
          },
          {
            "id": "h-ck-c2",
            "t": "box",
            "x": 3996,
            "y": 1392,
            "w": 44,
            "h": 44,
            "at": "l2b:print",
            "stroke": 5
          },
          {
            "id": "h-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1376,
            "size": 56,
            "at": "l2b:print+500",
            "color": "accent"
          },
          {
            "id": "h-ck-l2",
            "t": "text",
            "text": "Lưu và in xác nhận",
            "x": 4061,
            "y": 1384,
            "size": 42,
            "at": "l2b:print+200"
          },
          {
            "id": "h-ck-c3",
            "t": "box",
            "x": 3996,
            "y": 1458,
            "w": 44,
            "h": 44,
            "at": "l2b:deadline",
            "stroke": 5
          },
          {
            "id": "h-ck-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1442,
            "size": 56,
            "at": "l2b:deadline+500",
            "color": "accent"
          },
          {
            "id": "h-ck-l3",
            "t": "text",
            "text": "Hạn huỷ miễn phí → lịch",
            "x": 4061,
            "y": 1450,
            "size": 42,
            "at": "l2b:deadline+200"
          },
          {
            "id": "h-msg",
            "t": "text",
            "text": "Nhắn khách sạn: giờ đến",
            "x": 3996,
            "y": 1540,
            "size": 50,
            "at": "l3:hello",
            "color": "accent",
            "hl": [
              {
                "text": "giờ đến",
                "at": "l3:arrive"
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
          "say": "Stop six, early March: booked. Now the checks.",
          "sub": "Chặng sáu, đầu tháng Ba: đặt xong. Giờ là soát."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the email: names, dates, code. Look up the code on the airline site.",
          "sub": "Soát email: tên, ngày, mã. Tra mã trên trang hãng."
        },
        {
          "id": "l2b",
          "lang": "en",
          "who": "det",
          "say": "Print the confirmation, and put the free cancel deadline in your calendar.",
          "sub": "In xác nhận, ghi hạn huỷ miễn phí vào lịch."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hello, I have a booking from the twelfth to the fifteenth. I will arrive around eleven at night. Is that okay?",
          "sub": "Chào anh, tôi đặt phòng từ ngày 12 đến 15. Tôi đến khoảng 11 giờ đêm. Được không ạ?",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A few days before, confirm and say when you arrive, especially late.",
          "sub": "Vài ngày trước, nhắn xác nhận và báo giờ đến, nhất là khi đến muộn.",
          "keys": [
            "báo giờ đến"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s16",
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
            "id": "h-in",
            "t": "text",
            "text": "Nhận phòng chiều · trả phòng sáng",
            "x": 3996,
            "y": 1620,
            "size": 42,
            "at": "l1:afternoon"
          },
          {
            "id": "h-bag",
            "t": "text",
            "text": "Sớm, muộn? Hỏi gửi hành lý",
            "x": 3996,
            "y": 1690,
            "size": 44,
            "at": "l1:luggage",
            "hl": [
              {
                "text": "gửi hành lý",
                "at": "l1:store"
              }
            ]
          },
          {
            "id": "h-fly",
            "t": "text",
            "text": "Xem lại giờ bay, cả ngày bay",
            "x": 4836,
            "y": 1780,
            "size": 40,
            "at": "l2:times",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Check in is usually afternoon, check out morning. Early or late? Ask to store your luggage.",
          "sub": "Nhận phòng thường buổi chiều, trả phòng buổi sáng. Đến sớm, bay muộn? Hỏi gửi hành lý.",
          "keys": [
            "Hỏi gửi hành lý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Flight times do change. Recheck a few days before, and on the day, with an email you actually read.",
          "sub": "Giờ bay đôi khi đổi. Kiểm tra lại vài ngày trước và trong ngày bay, bằng email bạn hay xem."
        }
      ],
      "ref": "p24,p25"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Đặt cho cả nhóm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:group"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "center"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "money-bag",
                "receipt"
              ]
            },
            "at": "l1:one person",
            "caption": "Quán quen · chia tiền",
            "icon": "receipt"
          },
          {
            "id": "i-ph",
            "t": "text",
            "text": "Gửi ảnh hộ chiếu rõ nét",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l1:photos"
          },
          {
            "id": "i-chk",
            "t": "text",
            "text": "Cả nhóm soát tên trước khi trả",
            "x": 5964,
            "y": 1325,
            "size": 44,
            "at": "l1:check",
            "hl": [
              {
                "text": "soát tên",
                "at": "l1:check"
              }
            ]
          },
          {
            "id": "i-split",
            "t": "text",
            "text": "Chia tiền ngay, ghi ai trả gì",
            "x": 5964,
            "y": 1405,
            "size": 46,
            "at": "l4:split",
            "color": "accent",
            "hl": [
              {
                "text": "ghi ai trả gì",
                "at": "l4:who paid"
              }
            ]
          },
          {
            "id": "i-code",
            "t": "text",
            "text": "Chung mã: một người huỷ thì sao?",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l5:one code",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: one person books for the group. Everyone sends clear passport photos, and all check the names.",
          "sub": "Chặng bảy: một người đặt cho cả nhóm. Ai cũng gửi ảnh hộ chiếu rõ nét, cả nhóm cùng soát tên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thanks, sis! I'll pay you back after the trip.",
          "sub": "Cảm ơn chị! Đi về em trả nhé.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "No. We split it today, and write who paid what.",
          "sub": "Không. Chia luôn hôm nay, ghi rõ ai trả gì.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mum is right. Split it now and write who paid what, so nobody feels awkward later.",
          "sub": "Mẹ nói chuẩn. Chia ngay, ghi ai trả gì, để sau chuyến đi không ai ngại nhắc ai.",
          "keys": [
            "ghi ai trả gì"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One code for all? Ask first: if one person cancels or changes, are the others affected?",
          "sub": "Chung một mã? Hỏi trước: một người huỷ hay đổi ngày, người còn lại có bị ảnh hưởng không?"
        }
      ],
      "ref": "p26,p27"
    },
    {
      "id": "s18",
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
            "text": "23 giờ · đêm 12/3",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "walk"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "eleven-oclock",
                "bellhop-bell"
              ]
            },
            "at": "l1:hotel",
            "caption": "23 giờ đêm 12/3 · quầy lễ tân",
            "icon": "bellhop-bell"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Tên đúng · phòng đúng · đã báo",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l3:names",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Của rẻ là của ôi”",
            "x": 7932,
            "y": 1360,
            "size": 56,
            "at": "l5:cheap"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… của đúng mới là của ngon",
            "x": 7932,
            "y": 1450,
            "size": 50,
            "at": "l5:right",
            "color": "accent",
            "hl": [
              {
                "text": "của ngon",
                "at": "l5:right"
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
          "say": "Eleven at night again, but now it's March the twelfth, at the hotel.",
          "sub": "Lại mười một giờ đêm, nhưng giờ là 12 tháng Ba, ở khách sạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Welcome! We got your message. Your rooms are ready.",
          "sub": "Chào mừng! Chúng tôi nhận tin nhắn rồi. Phòng đã sẵn sàng.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Names right, room right, and they knew we were coming late.",
          "sub": "Tên đúng, phòng đúng, lại biết mình đến muộn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam again, now on the night shift. That man never sleeps.",
          "sub": "Lại là Sam, giờ trực ca đêm. Anh này chẳng bao giờ ngủ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cheap goods can be spoiled goods. Right goods are the good ones.",
          "sub": "“Của rẻ là của ôi.” Còn của đúng, mới là của ngon.",
          "keys": [
            "của đúng, mới là của ngon"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s19",
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
            "at": "l1:front",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:separate",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:box",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:map",
            "fit": "G",
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
            "x": 5556,
            "y": 690,
            "at": "l1:front"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 410,
            "at": "l2:separate"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 790,
            "y": 1610,
            "at": "l3:box"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 3588,
            "y": 1780,
            "at": "l4:map"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; điều kiện vé, phòng mỗi nơi một khác, đọc kỹ trước khi trả tiền.",
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
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: buy at the front door, check at the front door.",
          "sub": "Tóm lại: mua ở cửa chính, tra ở cửa chính.",
          "keys": [
            "cửa chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Separate tickets, separate risks.",
          "sub": "Vé rời thì rủi ro cũng tự gánh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each name in its box, copied from the passport.",
          "sub": "Ô nào chữ nấy, nhìn hộ chiếu mà điền.",
          "keys": [
            "Ô nào chữ nấy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the map before the photos.",
          "sub": "Và xem bản đồ trước, xem ảnh sau.",
          "keys": [
            "bản đồ trước"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p4,p9,p15,p21"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "ref": "questions[19]",
      "data": {
        "q": "On a booking form, what do surname and given name mean for a Vietnamese passport?",
        "options": [
          "Surname means your first name, while the other box is for a nickname",
          "They mean the same thing, so you can type your full name in both boxes",
          "Surname is your family name, and given name is your middle and first name"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "passport-control",
        "why": "Surname là họ, ví dụ Nguyen; given name là tên đệm và tên, ví dụ Thi Lan."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "On a booking form, what do surname and given name mean for a Vietnamese passport?",
          "sub": "Trên mẫu đặt vé, surname và given name nghĩa là gì với hộ chiếu Việt Nam?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Surname is your family name, and given name is your middle and first name.",
          "sub": "Surname là họ, given name là tên đệm và tên."
        }
      ]
    },
    {
      "id": "s21",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Chụp trang hộ chiếu, gửi cho chính mình",
        "sub": "Rồi làm 40 câu hỏi bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Send a photo of your passport page to yourself, then try the forty questions. Next: money and cards.",
          "sub": "Chụp trang hộ chiếu gửi cho chính mình, rồi làm bốn mươi câu hỏi. Bài sau: tiền và thẻ."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
