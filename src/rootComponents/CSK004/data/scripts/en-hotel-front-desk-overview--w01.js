// en-hotel-front-desk-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-hotel-front-desk-overview--w01",
  "unit": {
    "audience": "en-hotel-front-desk-staff",
    "slug": "en-hotel-front-desk-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Lễ tân khách sạn cần nói tiếng Anh những gì trong một lượt khách?",
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
            "id": "a-num",
            "t": "text",
            "text": "5 chặng",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:five",
            "color": "accent"
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "mỗi chặng vài câu mẫu",
            "x": 70,
            "y": 340,
            "size": 56,
            "at": "l1:phrases",
            "hl": [
              {
                "text": "vài câu mẫu",
                "at": "l1:phrases"
              }
            ]
          },
          {
            "id": "a-dict",
            "t": "text",
            "text": "Ta tưởng: thuộc cả từ điển?",
            "x": 70,
            "y": 450,
            "size": 52,
            "at": "l3:dictionary",
            "color": "muted"
          },
          {
            "id": "a-dictx",
            "t": "strike",
            "over": "a-dict",
            "at": "l3:right"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five stages. A few phrases each. That's the whole answer, before we even start.",
          "sub": "Năm chặng. Mỗi chặng vài câu mẫu. Đáp án đây, trước cả khi bắt đầu.",
          "keys": [
            "Năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's all the English one hotel guest needs from the front desk.",
          "sub": "Đó là toàn bộ tiếng Anh một lượt khách cần ở quầy lễ tân."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a whole dictionary in your head. Just the right lines, said well.",
          "sub": "Không phải nhồi cả cuốn từ điển. Chỉ cần đúng câu, nói thật chắc.",
          "keys": [
            "nói thật chắc"
          ]
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
              "set": "hotel",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
              ],
              "props": [
                "luggage",
                "bellhop-bell"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu · 19:00 · sảnh khách sạn",
            "icon": "bellhop-bell"
          },
          {
            "id": "a-jam",
            "t": "text",
            "text": "Kẹt xe giờ cao điểm",
            "x": 980,
            "y": 695,
            "size": 46,
            "at": "l5:traffic",
            "color": "coral",
            "hl": [
              {
                "text": "Kẹt xe",
                "at": "l5:traffic"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Học ăn, học nói…”",
            "x": 60,
            "y": 580,
            "size": 58,
            "at": "l6:speak",
            "color": "accent",
            "hl": [
              {
                "text": "học nói",
                "at": "l6:speak"
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
          "say": "Meet Dũng, the new receptionist at the Lotus Hotel. Friday, seven p.m.",
          "sub": "Đây là Dũng, lễ tân mới của khách sạn Lotus. Bảy giờ tối thứ Sáu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam Whitfield, a guest, dragging her suitcase in after a long trip.",
          "sub": "Còn đây là chị Sam Whitfield, khách nước ngoài, kéo vali vào sau chuyến đi dài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Hi! What time is breakfast? What's the wifi? And how do I get to my room?",
          "sub": "Chào em! Mấy giờ ăn sáng? Wifi là gì? Mà lên phòng đi lối nào?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Uh... good evening... breakfast... wifi... one moment!",
          "sub": "Ơ… chào chị… ăn sáng… wifi… chị chờ em chút!",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The greeting, he knew. The rest? A traffic jam at rush hour.",
          "sub": "Câu chào thì thuộc. Phần còn lại? Kẹt xe giờ cao điểm.",
          "keys": [
            "Kẹt xe giờ cao điểm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: learn to eat, learn to speak, learn to wrap, learn to open.",
          "sub": "Ông bà dặn: “Học ăn, học nói, học gói, học mở.”",
          "keys": [
            "Học ăn, học nói, học gói, học mở"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "chuong",
          "offsetMs": 200
        },
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
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
            "text": "Lễ tân cần nói gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:english",
            "hl": [
              {
                "text": "nói gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 190,
            "w": 300,
            "h": 90,
            "at": "l3:booking",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2358,
            "y": 190,
            "w": 300,
            "h": 90,
            "at": "l3:in",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2688,
            "y": 190,
            "w": 300,
            "h": 90,
            "at": "l3:requests",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3018,
            "y": 190,
            "w": 300,
            "h": 90,
            "at": "l3:complaints",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3348,
            "y": 190,
            "w": 300,
            "h": 90,
            "at": "l3:payment",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Đặt phòng",
            "x": 2053,
            "y": 205,
            "size": 44,
            "at": "l3:booking+150"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Check-in",
            "x": 2383,
            "y": 205,
            "size": 44,
            "at": "l3:in+150"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Yêu cầu",
            "x": 2713,
            "y": 205,
            "size": 44,
            "at": "l3:requests+150"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Phàn nàn",
            "x": 3043,
            "y": 205,
            "size": 44,
            "at": "l3:complaints+150"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "Check-out",
            "x": 3373,
            "y": 205,
            "size": 44,
            "at": "l3:payment+150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what English does the front desk really need for one guest's stay?",
          "sub": "Vậy rốt cuộc, lễ tân cần nói tiếng Anh những gì cho một lượt khách?",
          "keys": [
            "những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From the booking call to the suitcase rolling out the door, there are five stages.",
          "sub": "Từ cuộc gọi đặt phòng đến lúc vali lăn ra cửa, có năm chặng.",
          "keys": [
            "năm chặng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Taking the booking, check in, requests, complaints, then check out and payment.",
          "sub": "Nhận đặt phòng, nhận phòng, yêu cầu, phàn nàn, rồi trả phòng và thanh toán."
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
            "fit": "B",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "b-bk",
            "t": "text",
            "text": "Giáo trình cũng chia theo việc thật",
            "x": 2028,
            "y": 320,
            "size": 46,
            "at": "l1:textbooks",
            "hl": [
              {
                "text": "việc thật",
                "at": "l1:real"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Highly Recommended (Oxford, 2004) · Career Paths: Hotels & Catering (Express Publishing, 2011)",
            "x": 2028,
            "y": 720,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: học từ rời",
            "x": 2028,
            "y": 430,
            "size": 50,
            "at": "l5:loose",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:otherwise"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: học theo chặng",
            "x": 2028,
            "y": 520,
            "size": 60,
            "at": "l5:stage",
            "color": "accent",
            "hl": [
              {
                "text": "theo chặng",
                "at": "l5:stage"
              }
            ]
          },
          {
            "id": "b-gao",
            "t": "text",
            "text": "khách ngồi mâm mới vo gạo",
            "x": 2868,
            "y": 440,
            "size": 46,
            "at": "l6:raw rice",
            "color": "coral",
            "hl": [
              {
                "text": "vo gạo",
                "at": "l6:rice"
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
          "say": "Hotel English textbooks split their units the same way, by real tasks.",
          "sub": "Giáo trình tiếng Anh khách sạn cũng chia bài đúng theo những việc thật ấy.",
          "keys": [
            "những việc thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Oxford's Highly Recommended covers bookings, receiving guests, complaints, phone calls, directions and bills.",
          "sub": "Cuốn Highly Recommended của Oxford có: đặt phòng, đón khách, yêu cầu và phàn nàn, điện thoại, chỉ đường, hoá đơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Career Paths: Hotels and Catering teaches job words and dialogues, bookings included.",
          "sub": "Cuốn Career Paths: Hotels & Catering dạy từ vựng, hội thoại nghề, có cả phần đặt phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each stage has a handful of lines you use almost every single day.",
          "sub": "Mỗi chặng có một nhóm câu lặp lại gần như ngày nào cũng dùng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So learn by stage, not by loose words. Otherwise you build sentences while the guest waits.",
          "sub": "Học theo chặng, đừng học từ rời, kẻo phải tự ghép câu khi khách đang đứng chờ.",
          "keys": [
            "Học theo chặng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Like washing raw rice after the guests have already sat down to eat.",
          "sub": "Như khách ngồi vào mâm rồi mới đi vo gạo.",
          "keys": [
            "vo gạo"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "at": "l3",
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
            "text": "① Sáng Thứ Hai · cuộc gọi",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stage"
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
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:phone",
            "caption": "Thứ Hai · 9:00 · Sam gọi đặt phòng",
            "icon": "telephone"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 180,
            "w": 46,
            "h": 46,
            "at": "l5:date",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 162,
            "size": 58,
            "at": "l5:date+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Ngày đến",
            "x": 4066,
            "y": 172,
            "size": 46,
            "at": "l5:date+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 46,
            "h": 46,
            "at": "l5:nights",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 242,
            "size": 58,
            "at": "l5:nights+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Số đêm",
            "x": 4066,
            "y": 252,
            "size": 46,
            "at": "l5:nights+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 340,
            "w": 46,
            "h": 46,
            "at": "l5:guests",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 322,
            "size": 58,
            "at": "l5:guests+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Số khách",
            "x": 4066,
            "y": 332,
            "size": 46,
            "at": "l5:guests+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 420,
            "w": 46,
            "h": 46,
            "at": "l5:type",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 402,
            "size": 58,
            "at": "l5:type+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Loại phòng",
            "x": 4066,
            "y": 412,
            "size": 46,
            "at": "l5:type+200"
          },
          {
            "id": "c-en",
            "t": "text",
            "text": "What date are you looking for?",
            "x": 3996,
            "y": 520,
            "size": 44,
            "at": "l3:date",
            "color": "accent",
            "hl": [
              {
                "text": "What date",
                "at": "l3:date"
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
          "say": "Rewind. Our first stage was on Monday morning, when the phone rang.",
          "sub": "Tua lại. Chặng một là sáng thứ Hai, lúc điện thoại reo.",
          "keys": [
            "Chặng một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, the senior receptionist. Her notebook is always open.",
          "sub": "Đây là Thảo, lễ tân ca chính. Sổ tay lúc nào cũng mở sẵn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "What date are you looking for? And how long will you be staying?",
          "sub": "Anh chị muốn đặt ngày nào ạ? Anh chị ở mấy đêm ạ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "How many adults will be in the room?",
          "sub": "Phòng có mấy người lớn ạ?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Date, nights, guests, room type. Four boxes, ticked in order.",
          "sub": "Ngày đến, số đêm, số khách, loại phòng: bốn ô, đánh dấu theo thứ tự.",
          "keys": [
            "bốn ô"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 600
        }
      ],
      "ref": "p4"
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
            "id": "c-slow",
            "t": "text",
            "text": "Nói chậm, rõ hơn",
            "x": 3996,
            "y": 610,
            "size": 50,
            "at": "l2:slower",
            "hl": [
              {
                "text": "chậm, rõ",
                "at": "l2:clearer"
              }
            ]
          },
          {
            "id": "c-read",
            "t": "text",
            "text": "Cúp máy? Đọc lại trước!",
            "x": 4856,
            "y": 690,
            "size": 50,
            "at": "l3:read",
            "color": "accent",
            "hl": [
              {
                "text": "Đọc lại",
                "at": "l3:read"
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
          "say": "On the phone, the guest can't see your gestures. Your voice does all the work.",
          "sub": "Qua điện thoại, khách không thấy cử chỉ của bạn. Giọng nói phải gánh hết.",
          "keys": [
            "Giọng nói phải gánh hết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So speak a little slower and clearer than face to face.",
          "sub": "Nên nói chậm và rõ hơn lúc nói trực tiếp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And before hanging up, read everything back so the guest can confirm.",
          "sub": "Trước khi cúp máy, đọc lại toàn bộ để khách xác nhận.",
          "keys": [
            "đọc lại toàn bộ"
          ]
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
            "text": "Tháng trước · Green?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:last month"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "telephone",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
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
            "at": "l1:notebook",
            "caption": "Tháng trước · một cuộc gọi khác",
            "icon": "laptop"
          },
          {
            "id": "d-g",
            "t": "text",
            "text": "Green",
            "x": 5964,
            "y": 170,
            "size": 110,
            "at": "l2:green",
            "color": "muted"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Không có đặt phòng nào!",
            "x": 5964,
            "y": 330,
            "size": 50,
            "at": "l3:nothing",
            "color": "coral",
            "hl": [
              {
                "text": "Không có",
                "at": "l3:no booking"
              }
            ]
          },
          {
            "id": "d-ge",
            "t": "text",
            "text": "Greene",
            "x": 5964,
            "y": 420,
            "size": 110,
            "at": "l5:greene",
            "color": "accent",
            "hl": [
              {
                "text": "Greene",
                "at": "l5:end"
              }
            ]
          },
          {
            "id": "d-gx",
            "t": "strike",
            "over": "d-g",
            "at": "l5:exact"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Why the notebook? Last month, Thảo learned the hard way.",
          "sub": "Sao phải kè kè sổ tay? Tháng trước, Thảo đã trả học phí đắt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Mister Green? Lovely. I've typed it straight in.",
          "sub": "Mr Green ạ? Dạ, em nhập máy luôn rồi ạ!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Arrival day. Thảo searches the system. No booking under Green. Nothing.",
          "sub": "Hôm khách đến, Thảo tìm mãi trong hệ thống: không có đặt phòng nào tên Green."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Green... Green... where are you?",
          "sub": "Green… Green… đâu rồi trời?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "His name was Greene, with an e at the end. The system only finds exact letters.",
          "sub": "Khách tên Greene, thêm chữ e ở cuối. Hệ thống chỉ tìm đúng từng chữ.",
          "keys": [
            "thêm chữ e ở cuối"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
      "module": "BRK-12",
      "data": {
        "word": "Greene",
        "sub": "Tên nghe một lần chưa chắc, đánh vần lại mới chắc",
        "from": [
          560,
          520
        ],
        "others": [
          "Green",
          "…"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Greene. One extra letter.",
          "sub": "Greene. Thêm đúng một chữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A name heard once isn't sure. A name spelled back is.",
          "sub": "Tên nghe một lần chưa chắc, đánh vần lại mới chắc.",
          "keys": [
            "đánh vần lại mới chắc"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-sp",
            "t": "text",
            "text": "Could you spell that, please?",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l2:spell",
            "color": "accent",
            "hl": [
              {
                "text": "spell",
                "at": "l2:spell"
              }
            ]
          },
          {
            "id": "d-rut",
            "t": "text",
            "text": "Đánh vần lại = bảo hiểm rẻ nhất",
            "x": 6804,
            "y": 695,
            "size": 44,
            "at": "l3:insurance",
            "hl": [
              {
                "text": "bảo hiểm rẻ nhất",
                "at": "l3:cheapest"
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
          "say": "So when Sam called that Monday, Thảo did it differently.",
          "sub": "Nên sáng thứ Hai chị Sam gọi tới, Thảo làm khác hẳn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Could you spell your surname for me, please?",
          "sub": "Chị đánh vần giúp em họ của mình được không ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Spelling a name back: the cheapest insurance in the whole hotel.",
          "sub": "Đánh vần lại tên: tấm bảo hiểm rẻ nhất cả khách sạn.",
          "keys": [
            "bảo hiểm rẻ nhất"
          ]
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
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "② Thứ Sáu 19:00 · check-in",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:second stage"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "identification-card",
                "key"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:steps",
            "caption": "Thứ Sáu · 19:00 · quầy lễ tân",
            "icon": "key"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1. Chào + tìm đặt phòng",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l3:welcome"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "2. Xin giấy tờ có ảnh",
            "x": 7932,
            "y": 250,
            "size": 48,
            "at": "l5:photo"
          },
          {
            "id": "e-dep",
            "t": "text",
            "text": "Thẻ cọc: tuỳ khách sạn",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l6:deposit",
            "color": "coral",
            "hl": [
              {
                "text": "tuỳ khách sạn",
                "at": "l6:rules"
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
          "say": "Second stage: back to Friday, seven p.m. Dũng is frozen, Sam is waiting.",
          "sub": "Chặng hai: trở lại bảy giờ tối thứ Sáu. Dũng đứng hình, chị Sam đang chờ.",
          "keys": [
            "Chặng hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo steps in. Watch the order.",
          "sub": "Thảo bước tới. Để ý thứ tự nhé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Good evening, welcome to our hotel. What name is the reservation under?",
          "sub": "Chào chị, chào mừng chị đến khách sạn. Đặt phòng mang tên ai ạ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Whitfield. Sam Whitfield.",
          "sub": "Whitfield. Sam Whitfield.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I've found your reservation. Could I see a photo ID, please?",
          "sub": "Em thấy đặt phòng rồi ạ. Chị cho em xem giấy tờ có ảnh nhé."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A deposit card or not? That depends on each hotel's own rules.",
          "sub": "Có cần thẻ đặt cọc hay không là tuỳ quy định từng khách sạn.",
          "keys": [
            "tuỳ quy định từng khách sạn"
          ]
        }
      ],
      "ref": "p8"
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
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 430,
            "w": 46,
            "h": 46,
            "at": "l1:room",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 412,
            "size": 58,
            "at": "l1:room+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Số phòng · tầng",
            "x": 8002,
            "y": 422,
            "size": 42,
            "at": "l1:room+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 505,
            "w": 46,
            "h": 46,
            "at": "l2:breakfast",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 487,
            "size": 58,
            "at": "l2:breakfast+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ăn sáng: 7 – 10 giờ",
            "x": 8002,
            "y": 497,
            "size": 42,
            "at": "l2:breakfast+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 580,
            "w": 46,
            "h": 46,
            "at": "l1:wifi",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 562,
            "size": 58,
            "at": "l1:wifi+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Mật khẩu wifi",
            "x": 8002,
            "y": 572,
            "size": 42,
            "at": "l1:wifi+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 655,
            "w": 46,
            "h": 46,
            "at": "l1:way",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 637,
            "size": 58,
            "at": "l1:way+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Đường lên phòng",
            "x": 8002,
            "y": 647,
            "size": 42,
            "at": "l1:way+200"
          },
          {
            "id": "e-scr",
            "t": "text",
            "text": "Dũng chép lia lịa",
            "x": 8792,
            "y": 695,
            "size": 46,
            "at": "l3:scribbles",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then the exact things Sam fired at Dũng: room and floor, wifi, the way up.",
          "sub": "Rồi đến đúng những thứ chị Sam hỏi dồn Dũng: số phòng, tầng, wifi, đường lên phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Breakfast is served from seven to ten in the restaurant on the ground floor.",
          "sub": "Bữa sáng phục vụ từ bảy đến mười giờ ở nhà hàng tầng trệt.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same questions, now in a calm order. Dũng scribbles every line.",
          "sub": "Vẫn những câu ấy, giờ đi theo thứ tự êm ru. Dũng chép lia lịa.",
          "keys": [
            "thứ tự êm ru"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "③ Thứ Bảy 7:00 · yêu cầu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:third stage"
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
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone",
                "bathtub"
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
                }
              ]
            },
            "at": "l1:rings",
            "caption": "Thứ Bảy · 7:00 · điện thoại quầy",
            "icon": "telephone"
          },
          {
            "id": "f-wait",
            "t": "text",
            "text": "“OK, wait.”",
            "x": 60,
            "y": 1260,
            "size": 72,
            "at": "l3:wait",
            "color": "muted"
          },
          {
            "id": "f-tet",
            "t": "text",
            "text": "Chờ tới… Tết?",
            "x": 60,
            "y": 1380,
            "size": 50,
            "at": "l4:tet",
            "color": "coral",
            "hl": [
              {
                "text": "Tết",
                "at": "l4:tet"
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
          "say": "Third stage: Saturday, seven a.m. Dũng has the morning shift. The desk phone rings.",
          "sub": "Chặng ba: bảy giờ sáng thứ Bảy. Dũng trực ca sáng. Điện thoại quầy reo.",
          "keys": [
            "Chặng ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi, could I get two extra towels, please?",
          "sub": "Chào em, cho chị xin thêm hai cái khăn nhé?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "OK, wait.",
          "sub": "Ừ, chờ đi.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Correct, but abrupt. Wait how long? Until lunch? Until next Tet?",
          "sub": "Đúng ý, nhưng cụt lủn. Chờ bao lâu? Tới trưa? Hay tới Tết?",
          "keys": [
            "Hay tới Tết"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 1800
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Khách xin thêm khăn",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“OK, wait.”",
        "right": "“Certainly. Two extra towels in about ten minutes. Anything else?”",
        "wrongIllus": "hourglass-done",
        "rightIllus": "bellhop-bell"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: OK, wait.",
          "sub": "Trước: “OK, wait.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: a polite word, a time, and an offer.",
          "sub": "Sau: một từ lịch sự, một mốc giờ, một lời mời.",
          "keys": [
            "một mốc giờ"
          ]
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-waitx",
            "t": "strike",
            "over": "f-wait",
            "at": "l1:certainly"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Từ lịch sự",
            "x": 60,
            "y": 1490,
            "size": 46,
            "at": "l3:polite"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "+ mốc giờ",
            "x": 330,
            "y": 1490,
            "size": 46,
            "at": "l3:time",
            "color": "accent",
            "hl": [
              {
                "text": "mốc giờ",
                "at": "l3:time"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "+ hỏi thêm",
            "x": 590,
            "y": 1490,
            "size": 46,
            "at": "l3:question"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Không được? Nói điều làm được",
            "x": 60,
            "y": 1590,
            "size": 46,
            "at": "l4:instead",
            "color": "coral",
            "hl": [
              {
                "text": "điều làm được",
                "at": "l4:instead"
              }
            ]
          },
          {
            "id": "f-std",
            "t": "text",
            "text": "“I'll have those sent up…”",
            "x": 920,
            "y": 1785,
            "size": 44,
            "at": "l5:certainly",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Certainly. I'll send someone up with two extra towels in about ten minutes.",
          "sub": "Vâng ạ. Khoảng mười phút nữa em cho người mang thêm hai khăn lên phòng chị.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Is there anything else I can do for you?",
          "sub": "Chị còn cần gì thêm không ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Polite word, a time, then a question. One promised time beats a hundred waits.",
          "sub": "Từ lịch sự, mốc giờ, rồi câu hỏi. Hứa một mốc giờ, khách yên tâm hơn trăm lời “wait”.",
          "keys": [
            "Hứa một mốc giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Can't do it, like a room change when the hotel is full? Say what you can do instead.",
          "sub": "Không đáp ứng được, như đổi phòng khi đã kín? Hãy nói điều bạn làm được.",
          "keys": [
            "điều bạn làm được"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The classic reply: certainly, I'll have those sent up to your room right away.",
          "sub": "Câu đáp kinh điển: “Vâng, tôi cho người mang lên phòng ngay ạ.”"
        }
      ],
      "ref": "p10,p11,p12,p13"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Xin lỗi xong, có nên giải thích lý do ngay?",
        "illus": "thinking-face"
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
          "say": "After you say sorry, should you explain why right away?",
          "sub": "Xin lỗi xong, có nên giải thích lý do ngay không?",
          "keys": [
            "giải thích lý do"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
            "text": "④ Thứ Bảy 23:00 · phàn nàn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stage"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "sad",
                  "enter": "walk",
                  "at": "l1"
                }
              ],
              "props": [
                "night-with-stars",
                "loudspeaker"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:desk",
            "caption": "Thứ Bảy · 23:00 · ca đêm",
            "icon": "night-with-stars"
          },
          {
            "id": "g-l",
            "t": "text",
            "text": "L · Listen: nghe hết",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l3:listen",
            "hl": [
              {
                "text": "nghe hết",
                "at": "l3:listen"
              }
            ]
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A · Apologise: xin lỗi",
            "x": 2028,
            "y": 1330,
            "size": 46,
            "at": "l3:apologise"
          },
          {
            "id": "g-s",
            "t": "text",
            "text": "S · Solve: giải pháp",
            "x": 2028,
            "y": 1400,
            "size": 46,
            "at": "l3:solve"
          },
          {
            "id": "g-th",
            "t": "text",
            "text": "T · Thank: cảm ơn",
            "x": 2028,
            "y": 1470,
            "size": 46,
            "at": "l3:thank"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stage: Saturday, eleven p.m. Dũng's on nights. Sam is back at the desk.",
          "sub": "Chặng bốn: mười một giờ đêm thứ Bảy. Dũng trực đêm. Chị Sam lại xuống quầy.",
          "keys": [
            "Chặng bốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "My room is so noisy. I can't sleep.",
          "sub": "Phòng chị ồn quá. Chị không ngủ được.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remember LAST. Listen without cutting in. Apologise. Solve. Thank.",
          "sub": "Nhớ LAST: nghe hết, không cắt lời; xin lỗi; đưa giải pháp; cảm ơn.",
          "keys": [
            "LAST"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "I'm really sorry about that. Thank you for bringing this to my attention.",
          "sub": "“Tôi thật sự xin lỗi về chuyện đó.” “Cảm ơn chị đã báo cho chúng tôi.”"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s17",
      "module": "DLG-01",
      "data": {
        "set": "hotel",
        "label": "Thứ Bảy · 23:00 · quầy lễ tân",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right",
            "face": "sad"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Xin lỗi xong rồi nói “but…”",
          "why": "Khách nghe như lời xin lỗi vừa bị rút lại.",
          "rule": "Xin lỗi xong thì nói việc sẽ làm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I'm sorry, but the hotel is full tonight.",
          "sub": "Em xin lỗi, nhưng tối nay khách sạn kín phòng rồi.",
          "pose": "shrug",
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
          "say": "That but takes the apology straight back. Like a gift with the price tag still on.",
          "sub": "Chữ “but” ấy rút ngay lời xin lỗi lại. Như tặng quà còn dán nguyên giá tiền.",
          "keys": [
            "rút ngay lời xin lỗi lại"
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
          "say": "I'm really sorry about that. Let me move you to a quieter room right away.",
          "sub": "Em thật sự xin lỗi chị. Để em chuyển chị sang phòng yên tĩnh hơn ngay ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Sorry, then what you'll do. No but.",
          "sub": "Xin lỗi xong thì nói việc sẽ làm, đừng nói “but”.",
          "phase": "redo",
          "keys": [
            "nói việc sẽ làm"
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
      "id": "s18",
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
            "id": "g-but",
            "t": "text",
            "text": "“I'm sorry, but…”",
            "x": 2028,
            "y": 1570,
            "size": 50,
            "at": "l1:sorry",
            "color": "muted"
          },
          {
            "id": "g-butx",
            "t": "strike",
            "over": "g-but",
            "at": "l1:cross"
          },
          {
            "id": "g-fix",
            "t": "text",
            "text": "→ “Let me move you…”",
            "x": 2028,
            "y": 1650,
            "size": 50,
            "at": "l1:fix",
            "color": "accent",
            "hl": [
              {
                "text": "Let me",
                "at": "l1:fix"
              }
            ]
          },
          {
            "id": "g-more",
            "t": "text",
            "text": "Hỏi chi tiết, gọi lại: bài riêng",
            "x": 2888,
            "y": 1785,
            "size": 42,
            "at": "l2:details",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "On the board: sorry, then the fix. Cross out the but.",
          "sub": "Ghi lên bảng: xin lỗi, rồi giải pháp. Gạch chữ “but”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Asking for details, the fix, and the call back each get their own lesson in this series.",
          "sub": "Hỏi thêm chi tiết, đưa giải pháp, gọi lại cho khách: có bài riêng trong chuỗi."
        }
      ],
      "ref": "p16,p17"
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
          },
          {
            "at": "l6",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l7:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Chủ nhật 11:00 · check-out",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth stage"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "walk",
                  "at": "l1"
                }
              ],
              "props": [
                "receipt",
                "credit-card",
                "luggage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:suitcase",
            "caption": "Chủ nhật · 11:00 · trả phòng",
            "icon": "receipt"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "1. Sẵn sàng trả phòng?",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:ready"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2. Đi qua hoá đơn",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l3:summary",
            "hl": [
              {
                "text": "hoá đơn",
                "at": "l3:charges"
              }
            ]
          },
          {
            "id": "h-x",
            "t": "text",
            "text": "Tổng khác? Thường do phụ phí",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l5:extra",
            "color": "coral",
            "hl": [
              {
                "text": "phụ phí",
                "at": "l5:extra"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3. Nhận thanh toán",
            "x": 3996,
            "y": 1520,
            "size": 48,
            "at": "l6:paying"
          },
          {
            "id": "h-bye",
            "t": "text",
            "text": "“Have a safe trip home.”",
            "x": 4856,
            "y": 1785,
            "size": 48,
            "at": "l7:safe",
            "color": "accent",
            "hl": [
              {
                "text": "safe trip",
                "at": "l7:trip"
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
          "say": "Fifth stage: Sunday, eleven a.m. Sam rolls her suitcase to the desk.",
          "sub": "Chặng năm: mười một giờ trưa Chủ nhật. Chị Sam kéo vali tới quầy.",
          "keys": [
            "Chặng năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Are you ready to check out?",
          "sub": "Chị trả phòng bây giờ ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Here's a summary of your charges. Would you like me to walk you through any items?",
          "sub": "Đây là bảng tóm tắt chi phí. Chị có muốn em giải thích dòng nào không ạ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Why is the total higher than the price at check in?",
          "sub": "Sao tổng tiền cao hơn giá lúc nhận phòng vậy em?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Usually extra charges, like food ordered up to the room.",
          "sub": "Thường là do phụ phí, như đồ ăn gọi lên phòng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "How will you be paying for this?",
          "sub": "Chị thanh toán bằng cách nào ạ?"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Thank you. Have a safe trip home.",
          "sub": "Cảm ơn chị. Chúc chị về nhà bình an.",
          "face": "happy"
        }
      ],
      "ref": "p18,p19"
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
            "at": "l7",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Chiều Chủ nhật · luyện",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:wants"
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "notebook",
                "pencil"
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
                  "shot": "medium",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meet",
            "caption": "Chủ nhật · 15:00 · sau ca",
            "icon": "notebook"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l3:copy",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1252,
            "size": 58,
            "at": "l3:copy+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Chép 5 câu vào sổ",
            "x": 6034,
            "y": 1262,
            "size": 42,
            "at": "l3:copy+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1355,
            "w": 46,
            "h": 46,
            "at": "l4:aloud",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1337,
            "size": 58,
            "at": "l4:aloud+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Đọc to khi vắng khách",
            "x": 6034,
            "y": 1347,
            "size": 42,
            "at": "l4:aloud+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1440,
            "w": 46,
            "h": 46,
            "at": "l5:colleague",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1422,
            "size": 58,
            "at": "l5:colleague+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Đồng nghiệp hỏi dồn",
            "x": 6034,
            "y": 1432,
            "size": 42,
            "at": "l5:colleague+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1525,
            "w": 46,
            "h": 46,
            "at": "l6:real",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1507,
            "size": 58,
            "at": "l6:real+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Dùng thật, tối ghi chỗ vấp",
            "x": 6034,
            "y": 1517,
            "size": 42,
            "at": "l6:real+200"
          },
          {
            "id": "i-rut",
            "t": "text",
            "text": "Mỗi lần một chặng",
            "x": 6824,
            "y": 1780,
            "size": 52,
            "at": "l7:one stage",
            "color": "accent",
            "hl": [
              {
                "text": "một chặng",
                "at": "l7:stage"
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
          "say": "Sunday afternoon. Dũng wants the main shift. Meet Cô Hoa, head of the front desk.",
          "sub": "Chiều Chủ nhật. Dũng muốn lên ca chính. Còn đây là cô Hoa, trưởng bộ phận lễ tân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "One stage at a time, Dũng. Start with check in.",
          "sub": "Từng chặng một nha con. Bắt đầu từ check-in.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Step one: copy the five main check in lines into my notebook.",
          "sub": "Bước một: chép năm câu chính của chặng check-in vào sổ tay.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Step two: read them aloud when the desk is quiet, until I don't need to look.",
          "sub": "Bước hai: đọc to khi quầy vắng khách, đến khi nói trôi không cần nhìn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Step three: a colleague plays a guest and fires questions at me.",
          "sub": "Bước ba: nhờ đồng nghiệp đóng vai khách hỏi dồn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Step four: use them with real guests, and note at night where I still trip.",
          "sub": "Bước bốn: dùng thật với khách, tối về ghi lại câu nào còn vấp."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One stage done, then the next. One stage at a time, one line said many times.",
          "sub": "Xong một chặng mới sang chặng kế. Mỗi lần một chặng, nói thật nhiều lần một câu.",
          "keys": [
            "Mỗi lần một chặng"
          ]
        }
      ],
      "ref": "p20,p21"
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
            "text": "Thứ Sáu sau · 19:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next friday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "luggage",
                "bellhop-bell"
              ],
              "camera": [
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
            "at": "l1:lobby",
            "caption": "Thứ Sáu tuần sau · 19:00 · cùng sảnh",
            "icon": "bellhop-bell"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 46,
            "h": 46,
            "at": "l3:dates",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1232,
            "size": 58,
            "at": "l3:dates+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Ngày, số đêm, số khách",
            "x": 8002,
            "y": 1242,
            "size": 36,
            "at": "l3:dates+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1322,
            "w": 46,
            "h": 46,
            "at": "l3:spell",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1304,
            "size": 58,
            "at": "l3:spell+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đánh vần lại tên",
            "x": 8002,
            "y": 1314,
            "size": 36,
            "at": "l3:spell+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1394,
            "w": 46,
            "h": 46,
            "at": "l3:greet",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1376,
            "size": 58,
            "at": "l3:greet+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Chào + tìm đặt phòng",
            "x": 8002,
            "y": 1386,
            "size": 36,
            "at": "l3:greet+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1466,
            "w": 46,
            "h": 46,
            "at": "l4:requests",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1448,
            "size": 58,
            "at": "l4:requests+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Yêu cầu: kèm mốc giờ",
            "x": 8002,
            "y": 1458,
            "size": 36,
            "at": "l4:requests+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1538,
            "w": 46,
            "h": 46,
            "at": "l4:sorry",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1520,
            "size": 58,
            "at": "l4:sorry+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Xin lỗi → giải pháp, không “but”",
            "x": 8002,
            "y": 1530,
            "size": 36,
            "at": "l4:sorry+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1610,
            "w": 46,
            "h": 46,
            "at": "l4:bill",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1592,
            "size": 58,
            "at": "l4:bill+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Mời xem hoá đơn",
            "x": 8002,
            "y": 1602,
            "size": 36,
            "at": "l4:bill+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Học ăn, học nói…” ✓",
            "x": 7932,
            "y": 1730,
            "size": 54,
            "at": "l6:speak",
            "color": "accent",
            "hl": [
              {
                "text": "học nói",
                "at": "l6:speak"
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
          "say": "Next Friday. Seven p.m. Same lobby, same desk, a new suitcase rolling in.",
          "sub": "Thứ Sáu tuần sau. Bảy giờ tối. Vẫn sảnh ấy, quầy ấy, một chiếc vali mới lăn vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng's notebook now holds one checklist for a whole guest stay.",
          "sub": "Sổ tay Dũng giờ có một danh sách cho trọn một lượt khách."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dates, nights and guests. Spell the name back. Greet, and find the booking.",
          "sub": "Ngày, số đêm, số khách. Đánh vần lại tên. Chào và tìm đặt phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Requests with a time. Sorry, then the fix, no but. Invite them to read the bill.",
          "sub": "Yêu cầu kèm mốc giờ. Xin lỗi rồi nói giải pháp, không “but”. Mời khách xem hoá đơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Good evening, welcome to the Lotus Hotel. What name is the reservation under?",
          "sub": "Chào anh chị, chào mừng đến khách sạn Lotus. Đặt phòng mang tên ai ạ?",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Learn to eat, learn to speak. This time, Dũng has learned to speak, one stage at a time.",
          "sub": "“Học ăn, học nói…” Lần này Dũng đã học nói, từng chặng một.",
          "keys": [
            "từng chặng một"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "chuong",
          "offsetMs": 300
        }
      ],
      "ref": "p22"
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
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
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
            "x": 6664,
            "y": 600,
            "at": "l2:spell"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 470,
            "y": 1410,
            "at": "l3:promise"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1650,
            "at": "l4:sorry"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: five stages, and a small set of lines for each, said with confidence.",
          "sub": "Tóm lại: năm chặng, mỗi chặng một nhóm câu nhỏ, nói thật chắc.",
          "keys": [
            "năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: spell names back.",
          "sub": "Một: đánh vần lại tên khách."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: promise a time.",
          "sub": "Hai: hứa một mốc giờ.",
          "keys": [
            "hứa một mốc giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: after sorry, say what you'll do.",
          "sub": "Ba: xin lỗi xong thì nói việc sẽ làm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Do it now: pick the stage you trip on most, copy its five lines, and read them aloud before your next shift.",
          "sub": "Việc làm ngay: chọn chặng bạn hay vấp nhất, chép năm câu mẫu, đọc to trước ca làm tới.",
          "keys": [
            "đọc to trước ca làm tới"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next in the series: taking a booking by phone.",
          "sub": "Bài tiếp theo: khách gọi điện đặt phòng bằng tiếng Anh, hỏi và xác nhận những gì."
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
        "q": "Which mistake is in the reply I'm sorry, but the hotel is full tonight?",
        "options": [
          "The sentence is too short, so it needs a long story about the hotel",
          "The word but makes the apology sound as if it is being taken back",
          "The word sorry is too strong, so staff should never apologise to guests"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bellhop-bell",
        "why": "Chữ “but” sau lời xin lỗi khiến khách nghe như lời xin lỗi vừa bị rút lại."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which mistake is in the reply I'm sorry, but the hotel is full tonight?",
          "sub": "Câu I'm sorry, but the hotel is full tonight sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The word but makes the apology sound as if it is being taken back.",
          "sub": "Chữ “but” làm lời xin lỗi nghe như bị rút lại."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "questions[22]"
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về một lượt khách ở quầy",
        "sub": "Mỗi lần một chặng, nói thật chắc"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are below. One stage at a time.",
          "sub": "Bốn mươi câu hỏi ở bên dưới. Mỗi lần một chặng."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-20",
  "notes": "#145 bài MỚI (bài tổng chuỗi en-hotel-front-desk-staff) theo hạt nhân #136 + biến thể #144. HOOK-20 (đáp án trước): “5 chặng · mỗi chặng vài câu mẫu” → Dũng đứng hình trước câu hỏi dồn của Sam (intro) → câu hỏi chính. Dòng thời gian: một lượt khách của Sam Whitfield ở khách sạn Lotus (Thứ Sáu 19:00 → tua về sáng Thứ Hai cuộc gọi → tháng trước Green/Greene → Thứ Sáu 19:00 check-in → Thứ Bảy 7:00 khăn → Thứ Bảy 23:00 phàn nàn → Chủ nhật 11:00 trả phòng → chiều Chủ nhật luyện → Thứ Sáu tuần sau 19:00 cùng sảnh). Nhân vật (w145/_series/en-hotel-front-desk-staff.md): Dũng (chính; lễ tân mới, “OK, wait” p11, “sorry, but” p15 ở DLG, kế hoạch luyện p20), Thảo (ca chính; cuộc gọi p4–p5, Green/Greene p6 — khách Greene không có hình, check-in p8–p9, trả phòng p18–p19), Sam (khách xuyên chuỗi), Cô Hoa (trưởng lễ tân, p20). Sam đóng vị khách xin khăn (p10–p11) và phàn nàn phòng ồn (p14–p15) để giữ một lượt khách liền mạch. Cảnh ngắt nhịp: BRK-12 “Greene” (p7), BRK-04 Trước/Sau “OK, wait” (p11), BRK-07 rehook “xin lỗi xong có giải thích lý do?” (p15). Số chỉ từ bài: 5 chặng, ăn sáng 7–10 giờ, “khoảng mười phút” (p11), 5 câu (p20). Tục ngữ: “Học ăn, học nói, học gói, học mở” mở/khép. Bài kỹ năng: không cần dòng lưu ý #133.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
