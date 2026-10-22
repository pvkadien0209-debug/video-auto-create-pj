// en-hotel-taking-a-booking-by-phone--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-hotel-taking-a-booking-by-phone--w01",
  "unit": {
    "audience": "en-hotel-front-desk-staff",
    "slug": "en-hotel-taking-a-booking-by-phone",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khách gọi điện đặt phòng bằng tiếng Anh: hỏi và xác nhận những gì?",
    "series": "Tiếng Anh quầy lễ tân — cho nhân viên khách sạn, đón khách nước ngoài trôi chảy từ check-in đến check-out"
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
            "id": "a-ring",
            "t": "text",
            "text": "Reng… reng…",
            "x": 60,
            "y": 110,
            "size": 130,
            "at": "l1:ring",
            "color": "accent"
          },
          {
            "id": "a-time",
            "t": "text",
            "text": "Thứ Hai · 9:00 · quầy lễ tân",
            "x": 70,
            "y": 320,
            "size": 56,
            "at": "l1:monday"
          },
          {
            "id": "a-miss",
            "t": "text",
            "text": "Ngày đến: ???",
            "x": 70,
            "y": 440,
            "size": 64,
            "at": "l3:date",
            "color": "coral",
            "hl": [
              {
                "text": "???",
                "at": "l3:never"
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
          "say": "Ring, ring. Monday, nine a.m., at the Lotus Hotel front desk.",
          "sub": "Reng reng. Chín giờ sáng thứ Hai, quầy lễ tân khách sạn Lotus."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fast English voice: a weekend room, the price, and can I cancel?",
          "sub": "Đầu dây là giọng Anh nói nhanh: đặt phòng cuối tuần, hỏi giá, hỏi có huỷ được không."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You write and write. You hang up. Then you realise you never asked the date.",
          "sub": "Bạn vừa nghe vừa ghi. Cúp máy rồi mới nhận ra: chưa hỏi ngày đến.",
          "keys": [
            "chưa hỏi ngày đến"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 0
        }
      ],
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
            "at": "l1",
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
              "set": "room",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Đầu dây bên kia · Sam Whitfield",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi đến nơi, về đến chốn”",
            "x": 60,
            "y": 580,
            "size": 54,
            "at": "l4:all the way",
            "color": "accent",
            "hl": [
              {
                "text": "đến nơi",
                "at": "l4:there"
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
          "say": "On the other end: Sam Whitfield, planning a weekend in the city.",
          "sub": "Đầu dây bên kia là chị Sam Whitfield, đang tính đi chơi cuối tuần trong thành phố."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi, I'd like to book a room for the weekend, please.",
          "sub": "Chào em, chị muốn đặt một phòng cuối tuần.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's follow that call, minute by minute.",
          "sub": "Mình theo dõi cuộc gọi ấy, từng phút một."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: go all the way there, and come all the way back.",
          "sub": "Ông bà dặn: “Đi đến nơi, về đến chốn.”",
          "keys": [
            "Đi đến nơi, về đến chốn"
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
            "text": "Hỏi gì, xác nhận gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:ask",
            "hl": [
              {
                "text": "xác nhận gì",
                "at": "l1:confirm"
              }
            ]
          },
          {
            "id": "b-r0",
            "t": "box",
            "x": 2028,
            "y": 220,
            "w": 215,
            "h": 90,
            "at": "l2:date",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r1",
            "t": "box",
            "x": 2263,
            "y": 220,
            "w": 215,
            "h": 90,
            "at": "l2:nights",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r2",
            "t": "box",
            "x": 2498,
            "y": 220,
            "w": 215,
            "h": 90,
            "at": "l2:guests",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r3",
            "t": "box",
            "x": 2733,
            "y": 220,
            "w": 215,
            "h": 90,
            "at": "l2:type",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r4",
            "t": "box",
            "x": 2968,
            "y": 220,
            "w": 215,
            "h": 90,
            "at": "l3:rate",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r5",
            "t": "box",
            "x": 3203,
            "y": 220,
            "w": 215,
            "h": 90,
            "at": "l3:spell",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r6",
            "t": "box",
            "x": 3438,
            "y": 220,
            "w": 215,
            "h": 90,
            "at": "l3:read",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-rt0",
            "t": "text",
            "text": "Ngày",
            "x": 2043,
            "y": 238,
            "size": 36,
            "at": "l2:date+150"
          },
          {
            "id": "b-rt1",
            "t": "text",
            "text": "Đêm",
            "x": 2278,
            "y": 238,
            "size": 36,
            "at": "l2:nights+150"
          },
          {
            "id": "b-rt2",
            "t": "text",
            "text": "Khách",
            "x": 2513,
            "y": 238,
            "size": 36,
            "at": "l2:guests+150"
          },
          {
            "id": "b-rt3",
            "t": "text",
            "text": "Loại phòng",
            "x": 2748,
            "y": 238,
            "size": 36,
            "at": "l2:type+150"
          },
          {
            "id": "b-rt4",
            "t": "text",
            "text": "Giá · cọc",
            "x": 2983,
            "y": 238,
            "size": 36,
            "at": "l3:rate+150"
          },
          {
            "id": "b-rt5",
            "t": "text",
            "text": "Tên",
            "x": 3218,
            "y": 238,
            "size": 36,
            "at": "l3:spell+150"
          },
          {
            "id": "b-rt6",
            "t": "text",
            "text": "Đọc lại",
            "x": 3453,
            "y": 238,
            "size": 36,
            "at": "l3:read+150"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tán gẫu tự do",
            "x": 2028,
            "y": 400,
            "size": 50,
            "at": "l4:free chat",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:fixed"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một lộ trình cố định",
            "x": 2028,
            "y": 490,
            "size": 58,
            "at": "l4:route",
            "color": "accent",
            "hl": [
              {
                "text": "lộ trình cố định",
                "at": "l4:route"
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
          "say": "So what do you ask on a booking call, and what do you confirm?",
          "sub": "Vậy nhận đặt phòng qua điện thoại thì hỏi gì, xác nhận gì?",
          "keys": [
            "hỏi gì, xác nhận gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: one fixed order. Date, nights, guests, room type.",
          "sub": "Trả lời ngắn: một thứ tự cố định. Ngày đến, số đêm, số khách, loại phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the rate and the policies. Spell the name. And read it all back before hanging up.",
          "sub": "Rồi báo giá, chính sách. Đánh vần lại tên. Và đọc lại toàn bộ trước khi cúp máy.",
          "keys": [
            "đọc lại toàn bộ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a free chat, but a fixed route. Seven stops, one call.",
          "sub": "Không phải tán gẫu tự do, mà là một lộ trình cố định. Bảy chặng, một cuộc gọi."
        }
      ],
      "ref": "intro,p4"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Câu đầu tiên",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1:hoa",
                  "pose": "hold"
                }
              ],
              "props": [
                "telephone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:meet",
            "caption": "Thứ Hai · 9:00 · nhấc máy",
            "icon": "telephone"
          },
          {
            "id": "c-sm",
            "t": "text",
            "text": "Nói chậm lại · mỉm cười",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l2:smile",
            "color": "coral",
            "hl": [
              {
                "text": "mỉm cười",
                "at": "l2:smile"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 280,
            "w": 46,
            "h": 46,
            "at": "l4:hotel",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 262,
            "size": 58,
            "at": "l4:hotel+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Tên khách sạn",
            "x": 4066,
            "y": 272,
            "size": 46,
            "at": "l4:hotel+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 360,
            "w": 46,
            "h": 46,
            "at": "l4:her",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 342,
            "size": 58,
            "at": "l4:her+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Tên mình",
            "x": 4066,
            "y": 352,
            "size": 46,
            "at": "l4:her+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 440,
            "w": 46,
            "h": 46,
            "at": "l4:offer",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 422,
            "size": 58,
            "at": "l4:offer+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Lời mời giúp",
            "x": 4066,
            "y": 432,
            "size": 46,
            "at": "l4:offer+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: the first sentence. Meet Thảo, the senior receptionist, and Cô Hoa, head of the desk.",
          "sub": "Chặng một: câu đầu tiên. Đây là Thảo, lễ tân ca chính, và cô Hoa, trưởng bộ phận lễ tân.",
          "keys": [
            "câu đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "They can't see your face, dear. Slow down a little, and smile.",
          "sub": "Khách không thấy mặt con đâu. Nói chậm lại chút, và mỉm cười.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Thanks for calling the Lotus Hotel, Thảo speaking. How can I help you?",
          "sub": "Cảm ơn chị đã gọi đến khách sạn Lotus, Thảo nghe đây ạ. Em có thể giúp gì ạ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three things: the hotel name, her name, an offer to help. Sam knows she called the right place.",
          "sub": "Ba thứ: tên khách sạn, tên mình, lời mời giúp. Chị Sam biết ngay mình gọi đúng nơi.",
          "keys": [
            "Ba thứ"
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
      "ref": "p1,p3"
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
            "at": "l1",
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
            "id": "c-en",
            "t": "text",
            "text": "“I'd be happy to…”",
            "x": 3996,
            "y": 540,
            "size": 48,
            "at": "l1:happy",
            "color": "accent",
            "hl": [
              {
                "text": "happy",
                "at": "l1:happy"
              }
            ]
          },
          {
            "id": "c-voice",
            "t": "text",
            "text": "Giọng nói gánh hết",
            "x": 4856,
            "y": 690,
            "size": 50,
            "at": "l3:voice",
            "hl": [
              {
                "text": "gánh hết",
                "at": "l3:everything"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "I'd be happy to book that for you. Could I have your preferred dates and the number of guests, please?",
          "sub": "Em rất sẵn lòng đặt phòng cho chị. Chị cho em xin ngày muốn ở và số khách ạ.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A yes that leads straight into the questions. A handshake that pulls the guest inside.",
          "sub": "Vừa nhận lời, vừa dẫn luôn vào câu hỏi. Như cái bắt tay kéo khách vào nhà.",
          "keys": [
            "cái bắt tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On the phone your voice carries everything. A smile makes it friendlier, even down a cable.",
          "sub": "Qua điện thoại, giọng nói gánh hết. Nụ cười làm giọng thân thiện hơn, dù qua dây điện thoại.",
          "keys": [
            "giọng nói gánh hết"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "at": "l8",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Hỏi theo thứ tự",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l8",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:order",
            "caption": "9:01 · sổ tay mở sẵn",
            "icon": "notebook"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. What date…? → T6, ngày 15",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l3:fifteenth"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. How long…? → 2 đêm",
            "x": 5964,
            "y": 245,
            "size": 42,
            "at": "l5:nights"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3. How many adults? → 1",
            "x": 5964,
            "y": 320,
            "size": 42,
            "at": "l7:one"
          },
          {
            "id": "d-kid",
            "t": "text",
            "text": "Có trẻ em → hỏi tuổi",
            "x": 5964,
            "y": 410,
            "size": 48,
            "at": "l8:children",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi tuổi",
                "at": "l8:ages"
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
          "say": "Second stop: the questions, in a fixed order, so nothing slips through.",
          "sub": "Chặng hai: câu hỏi, theo một thứ tự cố định để không bỏ sót.",
          "keys": [
            "thứ tự cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "What date are you looking for?",
          "sub": "Chị muốn đặt ngày nào ạ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Friday the fifteenth.",
          "sub": "Thứ Sáu, ngày mười lăm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "How long will you be staying?",
          "sub": "Chị ở mấy đêm ạ?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Two nights.",
          "sub": "Hai đêm."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "And how many adults will be in the room?",
          "sub": "Phòng có mấy người lớn ạ?"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "sam",
          "say": "Just one. Me.",
          "sub": "Một người thôi. Chị."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Children coming? Ask their ages. Many hotels set prices or extra beds by age.",
          "sub": "Có trẻ em? Hỏi thêm tuổi. Nhiều khách sạn tính giá hoặc kê giường phụ theo tuổi.",
          "keys": [
            "Hỏi thêm tuổi"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Hỏi qua điện thoại",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“When you come? How many people?”",
        "right": "“What date are you looking for? How many adults?”",
        "wrongIllus": "confused-face",
        "rightIllus": "telephone-receiver"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: When you come? How many people?",
          "sub": "Trước: “When you come? How many people?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: the standard patterns. Short, complete, professional.",
          "sub": "Sau: mẫu câu chuẩn của nghề. Ngắn, đủ, chuyên nghiệp.",
          "keys": [
            "mẫu câu chuẩn"
          ]
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-aux",
            "t": "text",
            "text": "Thiếu: are · will → nghe cộc",
            "x": 5964,
            "y": 510,
            "size": 46,
            "at": "l1:helping",
            "color": "muted",
            "hl": [
              {
                "text": "nghe cộc",
                "at": "l1:blunt"
              }
            ]
          },
          {
            "id": "d-rut",
            "t": "text",
            "text": "Đúng mẫu = chuyên nghiệp",
            "x": 6824,
            "y": 690,
            "size": 50,
            "at": "l2:professional",
            "color": "accent",
            "hl": [
              {
                "text": "chuyên nghiệp",
                "at": "l2:professional"
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
          "say": "The guest still understands the first one, but with no helping verbs it sounds blunt on the phone.",
          "sub": "Câu trước khách vẫn hiểu, nhưng thiếu trợ động từ nên nghe cộc qua điện thoại.",
          "keys": [
            "thiếu trợ động từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask with the standard patterns, and the caller hears a professional hotel.",
          "sub": "Hỏi đúng mẫu câu, khách nghe ra một khách sạn chuyên nghiệp.",
          "keys": [
            "khách sạn chuyên nghiệp"
          ]
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Double hay twin?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-b1",
            "t": "illus",
            "name": "bed",
            "x": 7932,
            "y": 170,
            "size": 110,
            "at": "l2:double"
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "Double: 1 giường đôi",
            "x": 8072,
            "y": 195,
            "size": 50,
            "at": "l2:big bed"
          },
          {
            "id": "e-b2",
            "t": "illus",
            "name": "bed",
            "x": 7932,
            "y": 320,
            "size": 80,
            "at": "l2:twin"
          },
          {
            "id": "e-b3",
            "t": "illus",
            "name": "bed",
            "x": 8002,
            "y": 320,
            "size": 80,
            "at": "l2:twin+200"
          },
          {
            "id": "e-tw",
            "t": "text",
            "text": "Twin: 2 giường đơn",
            "x": 8102,
            "y": 335,
            "size": 50,
            "at": "l2:single beds"
          },
          {
            "id": "e-s",
            "t": "text",
            "text": "Single: 1 người",
            "x": 8102,
            "y": 450,
            "size": 50,
            "at": "l2:one person"
          },
          {
            "id": "e-en",
            "t": "text",
            "text": "“A double or a twin?”",
            "x": 8772,
            "y": 190,
            "size": 50,
            "at": "l3:prefer",
            "color": "accent",
            "hl": [
              {
                "text": "double or a twin",
                "at": "l3:twin"
              }
            ]
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Sam: “A double, please.”",
            "x": 8772,
            "y": 280,
            "size": 46,
            "at": "l4:double"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "Will two double beds be enough?",
            "x": 8772,
            "y": 380,
            "size": 40,
            "at": "l5:enough"
          },
          {
            "id": "e-sd",
            "t": "text",
            "text": "Twin ≠ sinh đôi",
            "x": 8772,
            "y": 520,
            "size": 70,
            "at": "l6:twins",
            "color": "coral",
            "hl": [
              {
                "text": "sinh đôi",
                "at": "l6:twins"
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
          "say": "Third stop: the room type. Three little words that trip people up.",
          "sub": "Chặng ba: loại phòng. Ba chữ nhỏ hay làm người ta vấp.",
          "keys": [
            "loại phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A double usually has one big bed. A twin has two single beds. A single is for one person.",
          "sub": "Phòng double thường có một giường đôi, twin có hai giường đơn, single cho một người.",
          "keys": [
            "một giường đôi",
            "hai giường đơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Would you prefer a double or a twin room?",
          "sub": "Chị muốn phòng một giường đôi hay hai giường đơn ạ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "A double, please.",
          "sub": "Giường đôi nhé em."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For a bigger group: will two double beds be enough?",
          "sub": "Đoàn đông hơn thì hỏi: “Hai giường đôi có đủ không ạ?”"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And remember, twin is not twins. Nobody has to bring a sibling.",
          "sub": "Và nhớ: twin không phải sinh đôi. Chẳng ai phải dắt theo anh chị em ruột.",
          "keys": [
            "twin không phải sinh đôi"
          ]
        }
      ],
      "ref": "p5"
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
          },
          {
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Hết phòng · máy số 2",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:meet",
            "caption": "9:03 · máy số 2 · cuối tuần có sự kiện lớn",
            "icon": "telephone"
          },
          {
            "id": "f-af",
            "t": "text",
            "text": "“I'm afraid…” = bọc đường",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l4:afraid",
            "hl": [
              {
                "text": "bọc đường",
                "at": "l4:sugar"
              }
            ]
          },
          {
            "id": "f-alt",
            "t": "text",
            "text": "→ còn phòng từ tối Chủ nhật",
            "x": 60,
            "y": 1345,
            "size": 46,
            "at": "l5:sunday",
            "color": "accent"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "Khách đổi lịch, đặt 2 đêm ✓",
            "x": 60,
            "y": 1425,
            "size": 46,
            "at": "l6:books"
          },
          {
            "id": "f-rut",
            "t": "text",
            "text": "Hết phòng → mở lựa chọn khác",
            "x": 900,
            "y": 1780,
            "size": 46,
            "at": "l7:another",
            "color": "accent",
            "hl": [
              {
                "text": "lựa chọn khác",
                "at": "l7:another"
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
          "say": "Fourth stop: a full house. Meanwhile, on line two...",
          "sub": "Chặng bốn: hết phòng. Cùng lúc ấy, ở máy số hai…",
          "keys": [
            "hết phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, the new receptionist. His caller wants the weekend of a big city event.",
          "sub": "Đây là Dũng, lễ tân mới. Khách của anh muốn đúng cuối tuần thành phố có sự kiện lớn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I'm afraid we're fully booked that weekend.",
          "sub": "Rất tiếc, cuối tuần đó bên em kín phòng rồi ạ.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "I'm afraid. Two words that soften bad news, like sugar on bitter medicine.",
          "sub": "“I'm afraid”: hai chữ làm tin xấu nhẹ đi, như viên thuốc đắng bọc đường.",
          "keys": [
            "thuốc đắng bọc đường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "We do have rooms from Sunday night. Would that work for you?",
          "sub": "Bên em còn phòng từ tối Chủ nhật. Anh chị thấy được không ạ?",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The caller thinks, changes plans, and books two nights from Sunday.",
          "sub": "Khách nghĩ một chút, đổi lịch, đặt luôn hai đêm từ Chủ nhật."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Full? Say so, then open another door straight away.",
          "sub": "Báo hết phòng xong, mở ngay một lựa chọn khác.",
          "keys": [
            "mở ngay một lựa chọn khác"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 900
        }
      ],
      "ref": "p8,p9,p10"
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
            "id": "f-few",
            "t": "text",
            "text": "“only a few vacancies left”",
            "x": 60,
            "y": 1540,
            "size": 46,
            "at": "l1:vacancies",
            "hl": [
              {
                "text": "a few",
                "at": "l1:few"
              }
            ]
          },
          {
            "id": "f-adv",
            "t": "text",
            "text": "Cao điểm: “book in advance”",
            "x": 60,
            "y": 1630,
            "size": 46,
            "at": "l2:advance",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Only a few rooms left? Say: there are only a few vacancies left.",
          "sub": "Chỉ còn vài phòng? Nói: “There are only a few vacancies left.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In peak season, add: we advise that you book in advance.",
          "sub": "Mùa cao điểm, thêm: “We advise that you book in advance.”"
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Khách nghe “fifteen” hay “fifty”?",
        "illus": "ear"
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
          "say": "When you say a price, does the guest hear fifteen, or fifty?",
          "sub": "Khi bạn báo giá, khách nghe “fifteen” hay “fifty”?",
          "keys": [
            "fifteen"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p12"
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
            "text": "⑤ Giá · cọc · huỷ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:back",
            "caption": "9:05 · báo giá, chính sách",
            "icon": "credit-card"
          },
          {
            "id": "g-rate",
            "t": "text",
            "text": "Giá: … / đêm, đã gồm thuế",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:including",
            "hl": [
              {
                "text": "đã gồm thuế",
                "at": "l2:tax"
              }
            ]
          },
          {
            "id": "g-dep",
            "t": "text",
            "text": "Cọc bằng thẻ để giữ phòng",
            "x": 2028,
            "y": 1335,
            "size": 46,
            "at": "l3:deposit"
          },
          {
            "id": "g-can",
            "t": "text",
            "text": "Huỷ trước 5 ngày → hoàn cọc",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l4:cancel"
          },
          {
            "id": "g-own",
            "t": "text",
            "text": "(mẫu) → thay bằng chính sách của bạn",
            "x": 2028,
            "y": 1485,
            "size": 40,
            "at": "l5:own",
            "color": "coral",
            "hl": [
              {
                "text": "của bạn",
                "at": "l5:own"
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
          "say": "Fifth stop, back with Thảo and Sam: the price and the rules.",
          "sub": "Chặng năm, trở lại với Thảo và chị Sam: giá và chính sách.",
          "keys": [
            "giá và chính sách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "That rate is per night, including tax.",
          "sub": "Giá đó tính theo đêm, đã gồm thuế ạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "We do require a credit card deposit to hold the room.",
          "sub": "Bên em cần đặt cọc bằng thẻ tín dụng để giữ phòng ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "You can cancel up to five days in advance and we will refund your deposit.",
          "sub": "Chị có thể huỷ trước tối đa năm ngày, bên em sẽ hoàn cọc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That's one sample hotel's rule. Use your own hotel's real policy.",
          "sub": "Đó là quy định của một khách sạn mẫu. Bạn thay bằng chính sách nơi mình làm.",
          "keys": [
            "chính sách nơi mình làm"
          ]
        }
      ],
      "ref": "p11"
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
            "id": "g-15",
            "t": "text",
            "text": "fifTEEN ≠ FIFty",
            "x": 2028,
            "y": 1580,
            "size": 54,
            "at": "l2:fifty",
            "color": "coral"
          },
          {
            "id": "g-13",
            "t": "text",
            "text": "thirTEEN ≠ THIRty",
            "x": 2028,
            "y": 1670,
            "size": 54,
            "at": "l2:thirty",
            "color": "coral",
            "hl": [
              {
                "text": "TEEN",
                "at": "l2:stress"
              }
            ]
          },
          {
            "id": "g-d",
            "t": "text",
            "text": "“that's one five”",
            "x": 2888,
            "y": 1780,
            "size": 50,
            "at": "l3:digits",
            "color": "accent",
            "hl": [
              {
                "text": "one five",
                "at": "l3:five"
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
          "say": "Numbers are the easiest thing to mishear on the phone.",
          "sub": "Số là chỗ dễ nghe nhầm nhất qua điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fifteen and fifty. Thirteen and thirty. Only the stress is different.",
          "sub": "Fifteen và fifty, thirteen và thirty: chỉ khác nhau ở trọng âm.",
          "keys": [
            "trọng âm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So say prices and dates slowly, stress them clearly, and add the digits: fifteen, that's one five.",
          "sub": "Nên nói giá và ngày thật chậm, nhấn rõ, đọc thêm từng chữ số: “fifteen, that's one five”.",
          "keys": [
            "từng chữ số"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "hotel",
        "label": "Máy số 2 · đường dây rè",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nghe không rõ ngày thì đoán theo lịch",
          "why": "Đoán sai một ngày là khách đến nơi không có phòng.",
          "rule": "Số nào chưa chắc, hỏi lại bằng từng chữ số"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Thirteenth or thirtieth? Eh, the calendar says thirteenth. Done!",
          "sub": "Mười ba hay ba mươi? Thôi, nhìn lịch chắc là mười ba. Xong!",
          "pose": "shrug",
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
          "say": "Guess one day wrong, and the guest arrives to find no room.",
          "sub": "Đoán sai một ngày, khách đến nơi không có phòng.",
          "keys": [
            "không có phòng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Sorry, is that the thirteenth, one three, a Friday?",
          "sub": "Xin lỗi, có phải ngày mười ba, một ba, thứ Sáu không ạ?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Any number you're not sure of, ask again, digit by digit.",
          "sub": "Số nào nghe chưa chắc, hỏi lại bằng từng chữ số.",
          "phase": "redo",
          "keys": [
            "hỏi lại bằng từng chữ số"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p14"
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
            "text": "⑥ Đánh vần tên",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:back",
            "caption": "9:07 · giấy và bút, chưa gõ máy",
            "icon": "memo"
          },
          {
            "id": "h-name",
            "t": "text",
            "text": "Whitfield?",
            "x": 3996,
            "y": 1250,
            "size": 90,
            "at": "l3:whitfield",
            "color": "muted"
          },
          {
            "id": "h-en",
            "t": "text",
            "text": "Could you spell that for me, please?",
            "x": 3996,
            "y": 1390,
            "size": 40,
            "at": "l4:spell",
            "color": "accent",
            "hl": [
              {
                "text": "spell",
                "at": "l4:spell"
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
          "say": "Sixth stop: the name. Back to Thảo.",
          "sub": "Chặng sáu: tên khách. Trở lại với Thảo.",
          "keys": [
            "tên khách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Could I have your name, please?",
          "sub": "Chị cho em xin tên ạ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Sam Whitfield.",
          "sub": "Sam Whitfield."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Could you spell your surname for me, please?",
          "sub": "Chị đánh vần giúp em họ của mình được không ạ?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Many foreign names have several spellings for one sound. Hearing it right isn't writing it right.",
          "sub": "Nhiều tên nước ngoài có nhiều cách viết cho cùng một âm. Nghe đúng âm chưa chắc ghi đúng chữ.",
          "keys": [
            "Nghe đúng âm chưa chắc ghi đúng chữ"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s18",
      "module": "BRK-03",
      "data": {
        "value": 26,
        "suffix": " chữ cái",
        "label": "lễ tân tự đọc thật rõ để đọc lại",
        "illus": "input-latin-uppercase"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Receptionists should know the alphabet out loud, every letter clear.",
          "sub": "Lễ tân nên tự thuộc cách đọc bảng chữ cái thật rõ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "All twenty six of them.",
          "sub": "Cả hai mươi sáu chữ.",
          "keys": [
            "hai mươi sáu chữ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p16"
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
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-bd",
            "t": "text",
            "text": "B/D · M/N · P/V",
            "x": 3996,
            "y": 1470,
            "size": 56,
            "at": "l1:letters",
            "color": "coral"
          },
          {
            "id": "h-bravo",
            "t": "text",
            "text": "“B for Bravo or D for Delta?”",
            "x": 3996,
            "y": 1560,
            "size": 42,
            "at": "l2:bravo",
            "hl": [
              {
                "text": "Bravo",
                "at": "l2:bravo"
              }
            ]
          },
          {
            "id": "h-wf",
            "t": "text",
            "text": "W-H-I-T-F-I-E-L-D",
            "x": 3996,
            "y": 1650,
            "size": 56,
            "at": "l5",
            "color": "accent"
          },
          {
            "id": "h-rut",
            "t": "text",
            "text": "Giấy → đọc lại → gật → nhập",
            "x": 4836,
            "y": 1780,
            "size": 46,
            "at": "l7:paper",
            "color": "accent",
            "hl": [
              {
                "text": "gật",
                "at": "l7:yes"
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
          "say": "Watch the letters B and D, M and N, P and V. They blur on the phone.",
          "sub": "Cẩn thận B và D, M và N, P và V: qua điện thoại rất dễ nhoè."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask with a word, like the phonetic alphabet: is that B for Bravo or D for Delta?",
          "sub": "Hỏi kèm một từ, như bảng chữ cái phiên âm: “B for Bravo hay D for Delta?”",
          "keys": [
            "Hỏi kèm một từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo's four steps. One: ask. Two: write each letter on paper, not straight into the computer.",
          "sub": "Bốn bước của Thảo. Một: hỏi. Hai: ghi từng chữ ra giấy, không gõ thẳng vào máy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: read it back.",
          "sub": "Ba: đọc lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "That's W, H, I, T, F, I, E, L, D.",
          "sub": "Là W, H, I, T, F, I, E, L, D ạ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "That's right.",
          "sub": "Đúng rồi em."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Four: only now she types it in. Paper, read back, a yes, then the system.",
          "sub": "Bốn: lúc đó mới nhập máy. Ghi giấy, đọc lại, khách gật đầu rồi mới nhập.",
          "keys": [
            "khách gật đầu rồi mới nhập"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "text": "⑦ Đọc lại, rồi mới cúp",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "telephone",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:hanging",
            "caption": "9:10 · đọc lại toàn bộ",
            "icon": "check-mark-button"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Double · 2 đêm",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:double"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Đến: Thứ Sáu 15",
            "x": 5964,
            "y": 1335,
            "size": 50,
            "at": "l2:arriving"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Đi: Chủ nhật 17",
            "x": 5964,
            "y": 1410,
            "size": 50,
            "at": "l2:sunday"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "✓ Is that correct?",
            "x": 5964,
            "y": 1500,
            "size": 54,
            "at": "l3:correct",
            "color": "accent",
            "hl": [
              {
                "text": "correct",
                "at": "l3:correct"
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
          "say": "Seventh stop: before hanging up, read the whole booking back as one sentence.",
          "sub": "Chặng bảy: trước khi cúp máy, đọc lại cả đặt phòng thành một câu.",
          "keys": [
            "thành một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So that's a double room for two nights, arriving on Friday the fifteenth and checking out on Sunday the seventeenth.",
          "sub": "Vậy là một phòng giường đôi, hai đêm, đến thứ Sáu ngày mười lăm, trả phòng Chủ nhật ngày mười bảy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Is that correct?",
          "sub": "Đúng không ạ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "That's correct.",
          "sub": "Đúng rồi em.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Any mistake gets fixed now, not on arrival day with a suitcase in hand.",
          "sub": "Sai chỗ nào, khách sửa ngay lúc này, chứ không phải hôm đến với vali trên tay.",
          "keys": [
            "sửa ngay lúc này"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l1",
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
            "id": "i-ct",
            "t": "text",
            "text": "Số điện thoại / email",
            "x": 5964,
            "y": 1610,
            "size": 46,
            "at": "l1:email"
          },
          {
            "id": "i-code",
            "t": "text",
            "text": "Mã đặt phòng: [ … ]",
            "x": 5964,
            "y": 1690,
            "size": 46,
            "at": "l2:confirmation",
            "color": "muted"
          },
          {
            "id": "i-bye",
            "t": "text",
            "text": "“We look forward to seeing you.”",
            "x": 6804,
            "y": 1780,
            "size": 40,
            "at": "l3:forward",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Could I have a phone number or an email address, please?",
          "sub": "Chị cho em xin số điện thoại hoặc email ạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "And I'll send your confirmation number to that email.",
          "sub": "Em sẽ gửi mã đặt phòng của chị vào email đó ạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Thank you for calling. We look forward to seeing you.",
          "sub": "Cảm ơn chị đã gọi. Bên em mong được đón chị.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Click. A call that leaves no question for arrival day.",
          "sub": "Cạch. Một cuộc gọi không để lại câu hỏi nào cho ngày khách đến.",
          "keys": [
            "không để lại câu hỏi nào"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Cùng quầy · trang sổ kín",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same desk"
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
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "telephone"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same desk",
            "caption": "Thứ Hai · máy đã đặt xuống",
            "icon": "notebook"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1240,
            "w": 46,
            "h": 46,
            "at": "l2:date",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1222,
            "size": 58,
            "at": "l2:date+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Ngày đến",
            "x": 8002,
            "y": 1232,
            "size": 34,
            "at": "l2:date+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1302,
            "w": 46,
            "h": 46,
            "at": "l2:nights",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1284,
            "size": 58,
            "at": "l2:nights+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Số đêm / ngày đi",
            "x": 8002,
            "y": 1294,
            "size": 34,
            "at": "l2:nights+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1364,
            "w": 46,
            "h": 46,
            "at": "l2:adults",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1346,
            "size": 58,
            "at": "l2:adults+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Người lớn, trẻ em",
            "x": 8002,
            "y": 1356,
            "size": 34,
            "at": "l2:adults+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1426,
            "w": 46,
            "h": 46,
            "at": "l2:type",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1408,
            "size": 58,
            "at": "l2:type+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Loại phòng",
            "x": 8002,
            "y": 1418,
            "size": 34,
            "at": "l2:type+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1488,
            "w": 46,
            "h": 46,
            "at": "l3:rate",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1470,
            "size": 58,
            "at": "l3:rate+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Giá, cọc, huỷ",
            "x": 8002,
            "y": 1480,
            "size": 34,
            "at": "l3:rate+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1550,
            "w": 46,
            "h": 46,
            "at": "l3:spelled",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1532,
            "size": 58,
            "at": "l3:spelled+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Tên đã đánh vần",
            "x": 8002,
            "y": 1542,
            "size": 34,
            "at": "l3:spelled+200"
          },
          {
            "id": "j-c6",
            "t": "box",
            "x": 7932,
            "y": 1612,
            "w": 46,
            "h": 46,
            "at": "l3:phone",
            "stroke": 5
          },
          {
            "id": "j-k6",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1594,
            "size": 58,
            "at": "l3:phone+600",
            "color": "accent"
          },
          {
            "id": "j-l6",
            "t": "text",
            "text": "Điện thoại / email",
            "x": 8002,
            "y": 1604,
            "size": 34,
            "at": "l3:phone+200"
          },
          {
            "id": "j-c7",
            "t": "box",
            "x": 7932,
            "y": 1674,
            "w": 46,
            "h": 46,
            "at": "l4:read",
            "stroke": 5
          },
          {
            "id": "j-k7",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1656,
            "size": 58,
            "at": "l4:read+600",
            "color": "accent"
          },
          {
            "id": "j-l7",
            "t": "text",
            "text": "Đọc lại, khách xác nhận",
            "x": 8002,
            "y": 1666,
            "size": 34,
            "at": "l4:read+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Đi đến nơi, về đến chốn” ✓",
            "x": 7932,
            "y": 1750,
            "size": 50,
            "at": "l6:all the way",
            "color": "accent",
            "hl": [
              {
                "text": "về đến chốn",
                "at": "l6:back"
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
          "say": "Same desk, same Monday morning. The phone is down, and the page is full.",
          "sub": "Vẫn quầy ấy, vẫn sáng thứ Hai. Máy đã đặt xuống, trang sổ đã kín."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Date. Nights. Adults and children. Room type.",
          "sub": "Ngày đến. Số đêm. Người lớn, trẻ em. Loại phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rate, deposit and cancellation. The spelled name. A phone or email.",
          "sub": "Giá, cọc, huỷ. Tên đã đánh vần. Số điện thoại hoặc email."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the full read back, confirmed.",
          "sub": "Và đọc lại toàn bộ, khách đã xác nhận."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "On Friday, Sam won't find a single surprise.",
          "sub": "Thứ Sáu này, chị Sam sẽ chẳng gặp bất ngờ nào.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Go all the way there, come all the way back. This call went all the way.",
          "sub": "“Đi đến nơi, về đến chốn.” Cuộc gọi này đã đến nơi đến chốn.",
          "keys": [
            "đến nơi đến chốn"
          ]
        }
      ],
      "ref": "p21"
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
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
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
            "x": 6604,
            "y": 245,
            "at": "l2:order"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 4536,
            "y": 1650,
            "at": "l3:digit"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6404,
            "y": 1500,
            "at": "l4:read"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, three habits for every booking call.",
          "sub": "Tóm lại, ba thói quen cho mọi cuộc gọi đặt phòng.",
          "keys": [
            "ba thói quen"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: ask in a fixed order.",
          "sub": "Một: hỏi theo thứ tự cố định."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: spell names, and numbers, digit by digit.",
          "sub": "Hai: đánh vần tên, đọc số từng chữ số."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: read it all back before you hang up.",
          "sub": "Ba: đọc lại toàn bộ trước khi cúp máy.",
          "keys": [
            "đọc lại toàn bộ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Do it now: print the eight item checklist, put it by the desk phone, and tick it on your next call.",
          "sub": "Việc làm ngay: in danh sách tám mục, đặt cạnh điện thoại quầy, đánh dấu từng mục ở cuộc gọi tới.",
          "keys": [
            "đặt cạnh điện thoại quầy"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: the guest arrives. Checking in, in English.",
          "sub": "Bài tiếp theo: khách đến nơi. Làm thủ tục nhận phòng bằng tiếng Anh."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "data": {
        "q": "You are unsure if the guest said thirteenth or thirtieth, what should you do?",
        "options": [
          "Choose the closest date on the calendar and hope it is the correct one",
          "Book both dates for the guest, then cancel one of them later",
          "Ask again, adding the digits or the day of the week to be sure"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "telephone-receiver",
        "why": "Đoán sai một ngày là khách đến nơi không có phòng; hỏi lại kèm từng chữ số hoặc thứ trong tuần."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You are unsure if the guest said thirteenth or thirtieth, what should you do?",
          "sub": "Bạn không chắc khách nói thirteenth hay thirtieth, bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask again, adding the digits or the day of the week to be sure.",
          "sub": "Hỏi lại, kèm từng chữ số hoặc thứ trong tuần cho chắc."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "questions[20]"
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về một cuộc gọi đặt phòng",
        "sub": "Hỏi theo thứ tự, đọc lại trước khi cúp"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are below. Ask in order, read it back.",
          "sub": "Bốn mươi câu hỏi ở bên dưới. Hỏi theo thứ tự, đọc lại trước khi cúp."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-19",
  "notes": "#145 bài MỚI (chuỗi en-hotel-front-desk-staff, bài 1) theo hạt nhân #136 + biến thể #144. HOOK-19 (âm thanh trước hình): chuông “nhac-chuong” ở câu đầu + “Reng… reng…” → nỗi sợ trong intro (cúp máy mới nhớ chưa hỏi ngày) → câu hỏi chính. Dòng thời gian: MỘT cuộc gọi sáng Thứ Hai 9:00 → 9:10 (cùng cuộc gọi mà bài tổng nhắc), 7 chặng ô C–I, khép ở cùng quầy, trang sổ kín 8 mục (p21). Nhân vật (w145/_series/en-hotel-front-desk-staff.md): Thảo (chính; p1, p17 đánh vần — bà Whitfield trong bài = Sam Whitfield), Sam (người gọi; đặt double 2 đêm, đến Thứ Sáu 15, đi Chủ nhật 17 theo câu mẫu p19), Cô Hoa (mẹo p3 nói chậm, mỉm cười), Dũng (máy số 2: hết phòng p9 đúng như bài; DLG p13 đoán “thirteenth/thirtieth” theo lịch rồi tua lại). Giá không ghi số (bài để [giá]); cọc/huỷ 5 ngày ghi rõ là “mẫu”. Mã đặt phòng không bịa: Thảo hẹn gửi qua email. Cảnh ngắt nhịp: BRK-04 Trước/Sau câu hỏi cộc (p6), BRK-07 rehook fifteen/fifty (p12), BRK-03 26 chữ cái (p16). Tục ngữ: “Đi đến nơi, về đến chốn”.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
