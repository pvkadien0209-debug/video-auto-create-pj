// en-homestay-host-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-homestay-host-overview--w01",
  "hook": "HOOK-19",
  "unit": {
    "audience": "en-homestay-airbnb-hosts",
    "slug": "en-homestay-host-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chủ homestay cần nhắn và nói tiếng Anh những gì với khách?",
    "series": "Tiếng Anh cho chủ homestay — nhắn tin nhanh, đón khách chu đáo, được đánh giá 5 sao"
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
              "a-ph"
            ],
            "zoom": 1.5,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-ph",
            "t": "illus",
            "name": "mobile-phone",
            "x": 80,
            "y": 90,
            "size": 220,
            "at": "l1"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Is there parking?”",
            "x": 330,
            "y": 120,
            "size": 84,
            "at": "l1:parking",
            "color": "accent",
            "hl": [
              {
                "text": "parking",
                "at": "l1:parking"
              }
            ]
          },
          {
            "id": "a-mt",
            "t": "text",
            "text": "“Regarding to your question… please be noticed.”",
            "x": 330,
            "y": 300,
            "size": 40,
            "at": "l2:Regarding",
            "color": "muted"
          },
          {
            "id": "a-mtx",
            "t": "strike",
            "over": "a-mt",
            "at": "l3:asks again"
          },
          {
            "id": "a-again",
            "t": "text",
            "text": "Khách hỏi lại: ???",
            "x": 330,
            "y": 390,
            "size": 54,
            "at": "l3:asks again",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi lại",
                "at": "l3:again"
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
          "say": "Ting! A guest from abroad sends one short question: is there parking?",
          "sub": "Ting! Một vị khách nước ngoài nhắn đúng một câu: có chỗ đỗ xe không?",
          "keys": [
            "có chỗ đỗ xe không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The host pastes a machine translation: Regarding to your question, please be noticed.",
          "sub": "Chủ nhà dán câu dịch máy: “Regarding to your question… please be noticed.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The guest reads it twice, then asks again.",
          "sub": "Khách đọc hai lần, rồi… hỏi lại.",
          "keys": [
            "hỏi lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tin-den",
          "offsetMs": 0
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
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
                "mobile-phone",
                "bed"
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
            "at": "l1",
            "caption": "Thứ Hai 20:00 · Đà Lạt",
            "icon": "house"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 60,
            "y": 520,
            "size": 54,
            "at": "l4:greeting",
            "color": "accent",
            "hl": [
              {
                "text": "Lời chào",
                "at": "l4:greeting"
              }
            ]
          },
          {
            "id": "a-msg",
            "t": "text",
            "text": "= tin nhắn đầu tiên",
            "x": 100,
            "y": 610,
            "size": 48,
            "at": "l5:first message",
            "hl": [
              {
                "text": "tin nhắn đầu tiên",
                "at": "l5:first message"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He rents out a small apartment in Đà Lạt. His English? Mostly an app.",
          "sub": "Dũng cho thuê một căn hộ nhỏ ở Đà Lạt. Tiếng Anh à? Chủ yếu nhờ app dịch."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My English isn't great. Is the app good enough for guests?",
          "sub": "Tiếng Anh mình không giỏi. Dùng app dịch có ổn không nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: a greeting is worth more than a feast.",
          "sub": "Ông bà dặn: “Lời chào cao hơn mâm cỗ.”",
          "keys": [
            "Lời chào cao hơn mâm cỗ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For a host, that greeting is your first message.",
          "sub": "Với chủ homestay, lời chào ấy chính là tin nhắn đầu tiên.",
          "keys": [
            "tin nhắn đầu tiên"
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
            "text": "Nói tiếng Anh gì, lúc nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:need",
            "hl": [
              {
                "text": "lúc nào",
                "at": "l1:when"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tiếng Anh thật hay",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:beautiful",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:teacher"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: vài câu ngắn × 5 mốc",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l3:few",
            "color": "accent",
            "hl": [
              {
                "text": "vài câu ngắn",
                "at": "l3:short"
              }
            ]
          },
          {
            "id": "b-m0",
            "t": "box",
            "x": 2028,
            "y": 380,
            "w": 300,
            "h": 90,
            "at": "l4:Before booking",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-m1",
            "t": "box",
            "x": 2358,
            "y": 380,
            "w": 300,
            "h": 90,
            "at": "l4:after booking",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-m2",
            "t": "box",
            "x": 2688,
            "y": 380,
            "w": 300,
            "h": 90,
            "at": "l4:before arrival",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-m3",
            "t": "box",
            "x": 3018,
            "y": 380,
            "w": 300,
            "h": 90,
            "at": "l4:during",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-m4",
            "t": "box",
            "x": 3348,
            "y": 380,
            "w": 300,
            "h": 90,
            "at": "l4:after check out",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-mt0",
            "t": "text",
            "text": "Trước đặt",
            "x": 2048,
            "y": 398,
            "size": 38,
            "at": "l4:Before booking+200"
          },
          {
            "id": "b-mt1",
            "t": "text",
            "text": "Sau đặt",
            "x": 2378,
            "y": 398,
            "size": 38,
            "at": "l4:after booking+200"
          },
          {
            "id": "b-mt2",
            "t": "text",
            "text": "Trước ngày đến",
            "x": 2708,
            "y": 398,
            "size": 38,
            "at": "l4:before arrival+200"
          },
          {
            "id": "b-mt3",
            "t": "text",
            "text": "Đang ở",
            "x": 3038,
            "y": 398,
            "size": 38,
            "at": "l4:during+200"
          },
          {
            "id": "b-mt4",
            "t": "text",
            "text": "Sau trả phòng",
            "x": 3368,
            "y": 398,
            "size": 38,
            "at": "l4:after check out+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does a host really need to say in English, and when?",
          "sub": "Vậy chủ homestay thật ra cần nói tiếng Anh gì, và vào lúc nào?",
          "keys": [
            "vào lúc nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not beautiful essay English for a strict teacher.",
          "sub": "Không phải tiếng Anh thật hay, kiểu bài luận nộp cô giáo khó tính."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Just a few short sentences, at five moments of a stay.",
          "sub": "Mà chỉ là vài câu ngắn, ở năm mốc của một lần khách ở.",
          "keys": [
            "vài câu ngắn",
            "năm mốc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Before booking, after booking, before arrival, during the stay, and after check out.",
          "sub": "Trước khi đặt, sau khi đặt, trước ngày đến, trong lúc ở, và sau khi trả phòng."
        }
      ],
      "ref": "intro,p24"
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
            "id": "b-4",
            "t": "text",
            "text": "available · transparent · open · caring",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l2:Available",
            "color": "accent",
            "hl": [
              {
                "text": "transparent",
                "at": "l2:transparent"
              }
            ]
          },
          {
            "id": "b-4v",
            "t": "text",
            "text": "sẵn sàng · minh bạch · chu đáo",
            "x": 2028,
            "y": 600,
            "size": 40,
            "at": "l2:caring",
            "color": "muted"
          },
          {
            "id": "b-bed",
            "t": "text",
            "text": "= bốn chân giường tre",
            "x": 3148,
            "y": 610,
            "size": 44,
            "at": "l4:bamboo",
            "hl": [
              {
                "text": "giường tre",
                "at": "l4:bamboo bed"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Airbnb Resource Center — Communicating effectively with guests",
            "x": 2028,
            "y": 720,
            "size": 28,
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
          "say": "Airbnb's host guide sums it up in four words.",
          "sub": "Trang hướng dẫn chủ nhà của Airbnb gói cách nhắn tin tốt vào bốn chữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Available, transparent, open, and caring.",
          "sub": "Sẵn sàng, minh bạch, cởi mở và chu đáo.",
          "keys": [
            "minh bạch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Notifications on. Honest about what guests get. Ask what they need. Fix problems fast.",
          "sub": "Bật thông báo. Nói đúng những gì khách nhận. Hỏi khách cần gì. Xử lý sự cố nhanh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like four legs of a bamboo bed. Lose one, and the whole stay wobbles.",
          "sub": "Như bốn chân giường tre: thiếu một chân là cả kỳ nghỉ khập khiễng.",
          "keys": [
            "bốn chân giường tre"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một lần Sam ở nhà Dũng",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Hỏi phòng, đặt phòng",
            "illus": "speech-balloon"
          },
          {
            "label": "Thứ Năm",
            "sub": "Nhắc trước ngày đến",
            "illus": "spiral-calendar"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Nhận phòng",
            "illus": "key"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Mất điện",
            "illus": "flashlight"
          },
          {
            "label": "Chủ nhật",
            "sub": "Trả phòng, đánh giá",
            "illus": "star"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Let's follow one stay: Sam, a guest from abroad, at Dũng's apartment.",
          "sub": "Giờ theo trọn một lần ở: Sam, khách nước ngoài, ở căn hộ của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Monday to Sunday. Five moments, a handful of short messages.",
          "sub": "Từ thứ Hai đến Chủ nhật. Năm mốc, một nắm tin nhắn ngắn.",
          "keys": [
            "Năm mốc"
          ]
        }
      ],
      "ref": "p24"
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
            "text": "① Thứ Hai 20:00 · Tin đầu tiên",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "world-map"
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
            "at": "l1:Sam",
            "caption": "Thứ Hai 20:00 · Sam ở nước ngoài",
            "icon": "world-map"
          },
          {
            "id": "c-mt",
            "t": "text",
            "text": "Dịch máy: đúng chữ, sai giọng",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:words right",
            "color": "coral",
            "hl": [
              {
                "text": "sai giọng",
                "at": "l3:voice wrong"
              }
            ]
          },
          {
            "id": "c-mt2",
            "t": "text",
            "text": "dài · cứng · trang trọng thừa",
            "x": 4036,
            "y": 250,
            "size": 44,
            "at": "l3:stiff",
            "color": "muted"
          },
          {
            "id": "c-cv",
            "t": "text",
            "text": "= “câu đóng dấu công văn”",
            "x": 3996,
            "y": 340,
            "size": 48,
            "at": "l4:stamp",
            "hl": [
              {
                "text": "đóng dấu công văn",
                "at": "l4:official stamp"
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
          "say": "First stop: Monday, eight p.m. And this is Sam, planning a trip to Đà Lạt.",
          "sub": "Chặng một: tám giờ tối thứ Hai. Còn đây là Sam, đang lên kế hoạch đi Đà Lạt.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi! Is there parking at the apartment?",
          "sub": "Chào bạn! Căn hộ có chỗ đỗ xe không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A machine translation gets the words right, but the voice wrong: long, stiff, too formal.",
          "sub": "Câu dịch máy đúng chữ mà sai giọng: dài, cứng, trang trọng thừa.",
          "keys": [
            "đúng chữ mà sai giọng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "I call it the official stamp sentence. Read on a phone, after a long flight.",
          "sub": "Đét gọi nó là “câu đóng dấu công văn”. Mà khách đọc trên điện thoại, sau chuyến bay dài.",
          "keys": [
            "câu đóng dấu công văn"
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
      "ref": "p2"
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
              "c-v2"
            ],
            "zoom": 1.3,
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
            "id": "c-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
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
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "dung",
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
            "caption": "Dũng trả lời · bản sau",
            "icon": "mobile-phone"
          },
          {
            "id": "c-a1",
            "t": "text",
            "text": "Hi Sam, thanks for your message!",
            "x": 3996,
            "y": 510,
            "size": 40,
            "at": "l3:name",
            "color": "accent"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "Free motorbike parking. No cars.",
            "x": 3996,
            "y": 565,
            "size": 40,
            "at": "l3:One idea"
          },
          {
            "id": "c-a3",
            "t": "text",
            "text": "Car park nearby.",
            "x": 3996,
            "y": 620,
            "size": 40,
            "at": "l3:answered"
          },
          {
            "id": "c-a4",
            "t": "text",
            "text": "Need directions? Let me know.",
            "x": 3996,
            "y": 675,
            "size": 40,
            "at": "l3:answered+600"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Câu ngắn → khỏi hỏi lại",
            "x": 3996,
            "y": 430,
            "size": 50,
            "at": "l4:Short",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi hỏi lại",
                "at": "l4:asking twice"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Hi Sam, thanks for your message! We have free parking for motorbikes, but not for cars.",
          "sub": "Chào Sam, cảm ơn bạn đã nhắn! Nhà có chỗ đỗ xe máy miễn phí, không có chỗ cho ô tô.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "There is a car park nearby. Let me know if you need directions.",
          "sub": "Gần đây có bãi đỗ ô tô. Cần chỉ đường thì báo mình nhé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The guest's name. One idea per sentence. And the next question, answered early.",
          "sub": "Gọi tên khách. Mỗi câu một ý. Trả lời luôn câu Sam sắp hỏi.",
          "keys": [
            "Mỗi câu một ý"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short sentences, the right point, and no asking twice.",
          "sub": "Câu ngắn, đúng ý, khách khỏi hỏi lại.",
          "keys": [
            "khỏi hỏi lại"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 20:10 · Trước khi đặt",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "dung",
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
            "caption": "Thứ Hai 20:10 · Sam hỏi phòng",
            "icon": "speech-balloon"
          },
          {
            "id": "d-fast",
            "t": "text",
            "text": "Trả lời nhanh → xếp cao hơn",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:response rate",
            "hl": [
              {
                "text": "xếp cao hơn",
                "at": "l2:higher"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. Cảm ơn, trả lời đúng câu",
            "x": 5964,
            "y": 300,
            "size": 44,
            "at": "l6:exact"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. Một điểm mạnh đúng ý khách",
            "x": 5964,
            "y": 380,
            "size": 44,
            "at": "l6:strong point",
            "hl": [
              {
                "text": "đúng ý khách",
                "at": "l6:this guest"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3. Mời bước tiếp",
            "x": 5964,
            "y": 460,
            "size": 44,
            "at": "l6:next step",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, ten minutes later. Sam asks about the weekend.",
          "sub": "Chặng hai, mười phút sau. Sam hỏi phòng cuối tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Airbnb says reply fast: your response rate helps you rank higher in search.",
          "sub": "Airbnb khuyên trả lời thật nhanh: tỷ lệ phản hồi giúp chỗ ở xếp cao hơn khi khách tìm.",
          "keys": [
            "xếp cao hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thanks for your interest in our homestay!",
          "sub": "Cảm ơn bạn đã quan tâm đến homestay của mình!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "The room has a balcony with a garden view. Would you like me to hold these dates for you?",
          "sub": "Phòng có ban công nhìn ra vườn. Bạn có muốn mình giữ những ngày này cho bạn không?",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Thanks, the exact answer, one strong point for this guest, then the next step.",
          "sub": "Cảm ơn, trả lời đúng câu hỏi, một điểm mạnh khớp với khách, rồi mời bước tiếp theo.",
          "keys": [
            "mời bước tiếp theo"
          ]
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
          }
        ],
        "items": [
          {
            "id": "d-dr",
            "t": "illus",
            "name": "card-file-box",
            "x": 5964,
            "y": 560,
            "size": 110,
            "at": "l1:quick reply"
          },
          {
            "id": "d-qr",
            "t": "text",
            "text": "Quick reply = “ngăn kéo mẫu”",
            "x": 6104,
            "y": 580,
            "size": 50,
            "at": "l2:drawer",
            "color": "accent",
            "hl": [
              {
                "text": "ngăn kéo mẫu",
                "at": "l2:drawer"
              }
            ]
          },
          {
            "id": "d-qr2",
            "t": "text",
            "text": "soạn một lần, mở ra dùng mãi",
            "x": 6104,
            "y": 660,
            "size": 42,
            "at": "l2:forever",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same question every week? Airbnb says: save the answer as a quick reply.",
          "sub": "Câu hỏi tuần nào cũng gặp? Airbnb gợi ý lưu câu trả lời chuẩn làm tin nhắn nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I call it the template drawer: write once, open it forever.",
          "sub": "Đét gọi nó là “ngăn kéo mẫu”: soạn một lần, mở ra dùng mãi.",
          "keys": [
            "ngăn kéo mẫu"
          ]
        }
      ],
      "ref": "p6,p23"
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
            "at": "l2",
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
            "text": "③ Đặt phòng → Thứ Năm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
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
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:books",
            "caption": "Thứ Hai 20:30 · Sam vừa đặt",
            "icon": "party-popper"
          },
          {
            "id": "e-ty",
            "t": "text",
            "text": "Thanks for booking!",
            "x": 7932,
            "y": 170,
            "size": 56,
            "at": "l2:Thanks",
            "color": "accent",
            "hl": [
              {
                "text": "Thanks for booking!",
                "at": "l2:booking"
              }
            ]
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "1–2 ngày trước: tin nhắc",
            "x": 7932,
            "y": 290,
            "size": 50,
            "at": "l4:One to two",
            "hl": [
              {
                "text": "tin nhắc",
                "at": "l4:reminder"
              }
            ]
          },
          {
            "id": "e-48",
            "t": "text",
            "text": "Hướng dẫn hiện 48 giờ trước",
            "x": 7932,
            "y": 380,
            "size": 40,
            "at": "l5:forty eight"
          },
          {
            "id": "e-24",
            "t": "text",
            "text": "24 giờ nếu huỷ linh hoạt",
            "x": 7972,
            "y": 440,
            "size": 40,
            "at": "l5:twenty four",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Airbnb Resource Center — The essentials",
            "x": 8752,
            "y": 730,
            "size": 28,
            "at": "l5",
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
          "say": "Third stop: Sam books! Dũng says thanks right away.",
          "sub": "Chặng ba: Sam đặt phòng! Dũng cảm ơn ngay lập tức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thanks for booking! We're looking forward to hosting you. Feel free to message me with any questions.",
          "sub": "Cảm ơn bạn đã đặt phòng! Tụi mình rất mong được đón bạn. Có câu hỏi gì cứ nhắn mình nhé.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then, one to two days before arrival, a reminder.",
          "sub": "Rồi một đến hai ngày trước ngày đến, gửi tin nhắc.",
          "keys": [
            "tin nhắc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Guests see check in steps forty eight hours ahead, or twenty four with flexible cancellation.",
          "sub": "Khách thấy hướng dẫn nhận phòng 48 giờ trước, hoặc 24 giờ nếu chính sách huỷ linh hoạt."
        }
      ],
      "ref": "p7,p8"
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
            "at": "l2",
            "fit": [
              "e-v2"
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
            "id": "e-v2",
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
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1",
            "caption": "Thứ Năm · hẹn giờ gửi",
            "icon": "alarm-clock"
          },
          {
            "id": "e-p1",
            "t": "text",
            "text": "chào · giờ · chỗ xem đường",
            "x": 7932,
            "y": 520,
            "size": 44,
            "at": "l4:hello",
            "color": "muted"
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "+ MỘT lưu ý dễ nhầm",
            "x": 7932,
            "y": 590,
            "size": 50,
            "at": "l4:mistake",
            "color": "coral",
            "hl": [
              {
                "text": "lưu ý dễ nhầm",
                "at": "l4:easy mistake"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Nhắc trước 1 ngày → đúng cửa",
            "x": 7932,
            "y": 680,
            "size": 50,
            "at": "l5:Remind",
            "color": "accent",
            "hl": [
              {
                "text": "đúng cửa",
                "at": "l5:right door"
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
          "say": "Thursday, the day before. Dũng schedules his message.",
          "sub": "Thứ Năm, ngày trước khi khách đến. Dũng hẹn giờ gửi tin."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Hi Sam, we're excited to welcome you tomorrow! Check in is from two pm.",
          "sub": "Chào Sam, mai tụi mình đón bạn nhé! Nhận phòng từ hai giờ chiều."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Directions are in your Trips tab. Important: the building door is on the side street, not the main road.",
          "sub": "Chỉ đường có ở mục Trips. Lưu ý: cửa toà nhà ở hẻm bên, không phải mặt đường lớn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four parts: hello, the time, where the directions are, and one easy mistake to avoid.",
          "sub": "Bốn phần: chào, giờ, chỗ xem chỉ đường, và một lưu ý dễ nhầm.",
          "keys": [
            "một lưu ý dễ nhầm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Remind them a day early, and the guest finds the right door.",
          "sub": "Nhắc trước một ngày, khách đến đúng cửa.",
          "keys": [
            "đúng cửa"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Hướng dẫn nhận phòng thiếu một bước thì sao?",
        "illus": "door"
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
          "say": "What if the check in steps miss just one step?",
          "sub": "Hướng dẫn nhận phòng mà thiếu đúng một bước thì sao?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu 14:00 · Nhận phòng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Sai một bước → đứng ngoài cửa",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:outside",
            "color": "coral",
            "hl": [
              {
                "text": "đứng ngoài cửa",
                "at": "l2:outside"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Mỗi bước một câu lệnh",
            "x": 60,
            "y": 1345,
            "size": 48,
            "at": "l3:walking order",
            "hl": [
              {
                "text": "một câu lệnh",
                "at": "l3:one short command"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "First, go to the yellow gate.",
            "x": 60,
            "y": 1435,
            "size": 46,
            "at": "l4:First",
            "color": "accent"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Then, open the key box.",
            "x": 60,
            "y": 1505,
            "size": 46,
            "at": "l4:Then",
            "color": "accent"
          },
          {
            "id": "f-key",
            "t": "illus",
            "name": "key",
            "x": 1500,
            "y": 1420,
            "size": 110,
            "at": "l4:key box"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Friday, two p.m. The most important message: check in instructions.",
          "sub": "Chặng bốn: hai giờ chiều thứ Sáu. Tin quan trọng nhất: hướng dẫn nhận phòng.",
          "keys": [
            "hướng dẫn nhận phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Miss one step, and your guest is standing outside the door.",
          "sub": "Sai một bước là khách đứng ngoài cửa.",
          "keys": [
            "đứng ngoài cửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write them in walking order, one short command per step.",
          "sub": "Viết theo thứ tự đi đường, mỗi bước một câu mệnh lệnh ngắn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "First, go to the yellow gate. Then, open the key box with the code.",
          "sub": "Trước tiên, đi tới cổng vàng. Sau đó, mở hộp khoá bằng mã."
        }
      ],
      "ref": "p9"
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
                  "id": "sam",
                  "side": "left",
                  "enter": "walk",
                  "at": "l1",
                  "pose": "wave"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "luggage",
                "key"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu 15:00 · Sam đã vào nhà",
            "icon": "luggage"
          },
          {
            "id": "f-s",
            "t": "text",
            "text": "Have you settled in OK?",
            "x": 60,
            "y": 1620,
            "size": 50,
            "at": "l4:suggests",
            "color": "accent",
            "hl": [
              {
                "text": "settled in",
                "at": "l4:suggests"
              }
            ]
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "+ vài quán ăn, cửa hàng gần",
            "x": 60,
            "y": 1700,
            "size": 44,
            "at": "l4:restaurants"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "An hour later, Sam is inside.",
          "sub": "Một tiếng sau, Sam đã vào nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Have you settled in OK? Is there anything you need?",
          "sub": "Bạn ổn định chỗ ở chưa? Bạn có cần gì không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "All good, thanks! Any nice places to eat around here?",
          "sub": "Ổn cả, cảm ơn nhé! Quanh đây có quán nào ăn ngon không?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Airbnb suggests it, plus a few shops, restaurants and things to do nearby.",
          "sub": "Airbnb gợi ý đúng câu hỏi thăm ngắn ấy, kèm vài cửa hàng, quán ăn, chỗ chơi gần đó."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
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
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu 22:00 · Hội An",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
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
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo",
                "musical-notes"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "Thứ Sáu 22:00 · homestay cô Hoa",
            "icon": "red-paper-lantern"
          },
          {
            "id": "g-20",
            "t": "text",
            "text": "Nội quy 20 dòng dịch máy",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:twenty",
            "color": "muted"
          },
          {
            "id": "g-fb",
            "t": "text",
            "text": "“It is forbidden to…”",
            "x": 2028,
            "y": 1340,
            "size": 54,
            "at": "l2:forbidden",
            "color": "coral",
            "hl": [
              {
                "text": "forbidden",
                "at": "l2:forbidden"
              }
            ]
          },
          {
            "id": "g-mu",
            "t": "text",
            "text": "→ đọc lướt, rồi mở nhạc",
            "x": 2028,
            "y": 1430,
            "size": 44,
            "at": "l3:skim",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Friday, ten p.m., Hội An. Meet Cô Hoa, with three guest rooms.",
          "sub": "Chặng năm: mười giờ tối thứ Sáu, Hội An. Đây là cô Hoa, có ba phòng cho khách.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Her house rules: twenty lines, machine translated, all starting with: it is forbidden to.",
          "sub": "Nội quy của cô: hai mươi dòng dịch máy, dòng nào cũng mở bằng “It is forbidden to…”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Young guests skim it, then play music in the yard.",
          "sub": "Nhóm khách trẻ đọc lướt, rồi mở nhạc ngoài sân."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "The neighbours are knocking! Didn't they read my rules?",
          "sub": "Hàng xóm sang gõ cửa rồi! Mấy đứa không đọc nội quy à?",
          "face": "sad"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Sáu 22:10 · sân homestay",
        "actors": [
          {
            "id": "hoa",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nội quy 20 dòng “cấm”",
          "why": "Quá nhiều luật làm khách choáng: đọc lướt rồi bỏ qua, tối đó vẫn ồn.",
          "rule": "Luật ít mà rõ, có lý do"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Twenty clear rules. Forbidden, forbidden, forbidden!",
          "sub": "Hai mươi luật rõ ràng. Cấm, cấm, cấm!",
          "pose": "cross",
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
          "say": "Airbnb warns: too many rules overwhelm guests. This reads like a police notice.",
          "sub": "Airbnb nhắc: quá nhiều luật làm khách choáng. Đọc như thông báo phường.",
          "keys": [
            "quá nhiều luật làm khách choáng"
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
          "who": "hoa",
          "say": "We kindly ask guests to keep quiet after ten pm, as our neighbours sleep early.",
          "sub": "Mong các bạn giữ yên lặng sau mười giờ tối vì hàng xóm ngủ sớm.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fewer rules, each with a reason. Now guests remember.",
          "sub": "Luật ít mà rõ, có lý do, khách mới nhớ.",
          "phase": "redo",
          "keys": [
            "Luật ít mà rõ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p15"
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
            "id": "g-x",
            "t": "strike",
            "over": "g-fb",
            "at": "l1:Instead"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "We kindly ask… quiet after 10 pm,",
            "x": 2028,
            "y": 1550,
            "size": 42,
            "at": "l1:kindly",
            "color": "accent"
          },
          {
            "id": "g-ok2",
            "t": "text",
            "text": "as our neighbours sleep early.",
            "x": 2028,
            "y": 1620,
            "size": 42,
            "at": "l1:reason"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Luật ít mà rõ → khách nhớ",
            "x": 2028,
            "y": 1730,
            "size": 58,
            "at": "l1:Soft",
            "color": "accent",
            "hl": [
              {
                "text": "khách nhớ",
                "at": "l1:clear"
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
          "say": "Instead of forbidden: we kindly ask, plus the reason. Soft, but clear.",
          "sub": "Thay chữ “cấm” bằng “mong các bạn”, kèm lý do. Mềm mà rõ.",
          "keys": [
            "kèm lý do"
          ]
        }
      ],
      "ref": "p13,p15"
    },
    {
      "id": "s17",
      "module": "BRK-03",
      "data": {
        "value": 12,
        "suffix": " giờ",
        "label": "câu hỏi không gấp · việc gấp: trong 1 giờ",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How fast to reply?",
          "sub": "Trả lời nhanh cỡ nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Twelve hours if it can wait. Locked out? One hour.",
          "sub": "Không gấp: trong vòng 12 giờ. Khách không vào được nhà: một giờ.",
          "keys": [
            "một giờ"
          ]
        }
      ],
      "ref": "p16"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "a1",
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
            "text": "⑥ Thứ Bảy 21:00 · Mất điện",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "sam",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "left": {
                "label": "Cách A: chờ tin rồi mới nhắn",
                "ok": false
              },
              "right": {
                "label": "Cách B: trả lời ngay",
                "ok": true
              }
            },
            "at": "l2:Two",
            "caption": "Thứ Bảy 21:00 · cả con đường tối om",
            "icon": "flashlight"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: im lặng → “không phản hồi”",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l4:silence",
            "color": "coral",
            "hl": [
              {
                "text": "không phản hồi",
                "at": "l4:no response"
              }
            ]
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: chưa có điện, vẫn biết chuyện",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l5:knows",
            "color": "accent",
            "hl": [
              {
                "text": "biết chuyện",
                "at": "l5:knows"
              }
            ]
          },
          {
            "id": "h-fl",
            "t": "illus",
            "name": "flashlight",
            "x": 3996,
            "y": 1430,
            "size": 90,
            "at": "l5:torch"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "+ đèn pin dùng tạm",
            "x": 4106,
            "y": 1445,
            "size": 44,
            "at": "l5:torch+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Saturday, nine p.m. The whole street goes dark.",
          "sub": "Chặng sáu: chín giờ tối thứ Bảy. Cả con đường mất điện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two ways to handle Sam's message.",
          "sub": "Hai cách xử lý tin nhắn của Sam."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "sam",
          "say": "Hi, the power is out. Is everything OK?",
          "sub": "Chào bạn, mất điện rồi. Mọi thứ ổn chứ?",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "sam",
          "say": "Hello? Anyone?",
          "sub": "Alô? Có ai không?",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "sam",
          "say": "Hi, the power is out. Is everything OK?",
          "sub": "Chào bạn, mất điện rồi. Mọi thứ ổn chứ?",
          "phase": "b",
          "face": "worried"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "The power is out in the whole street. I'm checking with the electricity company.",
          "sub": "Cả con đường mất điện. Mình đang hỏi bên điện lực.",
          "phase": "b",
          "pose": "phone"
        },
        {
          "id": "b3",
          "lang": "en",
          "who": "dung",
          "say": "I'll update you in thirty minutes. There is a torch in the kitchen drawer.",
          "sub": "Ba mươi phút nữa mình báo lại. Có đèn pin trong ngăn kéo bếp.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Way A: silence while waiting for news. Sam's review: no response.",
          "sub": "Cách A: im lặng chờ tin. Đánh giá của Sam: “không phản hồi”.",
          "keys": [
            "không phản hồi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Way B: no power yet, but Sam knows what's happening, and has a torch.",
          "sub": "Cách B: điện chưa có, nhưng Sam biết chuyện gì đang xảy ra, lại có đèn pin dùng tạm."
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-4",
            "t": "text",
            "text": "ghi nhận, đang xử lý",
            "x": 3996,
            "y": 1530,
            "size": 44,
            "at": "l1:acknowledge"
          },
          {
            "id": "h-4b",
            "t": "text",
            "text": "khi nào xong, cập nhật",
            "x": 3996,
            "y": 1590,
            "size": 44,
            "at": "l1:say when"
          },
          {
            "id": "h-sorry",
            "t": "text",
            "text": "I'm calling the technician now.",
            "x": 3996,
            "y": 1655,
            "size": 40,
            "at": "l2:calling",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Chưa sửa ngay, vẫn trả lời ngay",
            "x": 3996,
            "y": 1730,
            "size": 54,
            "at": "l3:Not fixed",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn trả lời ngay",
                "at": "l3:Still reply"
              }
            ]
          },
          {
            "id": "h-co",
            "t": "text",
            "text": "Bận? Nhờ co-host, gửi số",
            "x": 4816,
            "y": 1790,
            "size": 44,
            "at": "l4:co-host",
            "hl": [
              {
                "text": "co-host",
                "at": "l4:co-host"
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
          "say": "A guest reports a problem? Airbnb's four moves: acknowledge, act, say when, say how you'll update.",
          "sub": "Khách báo sự cố? Bốn việc theo Airbnb: ghi nhận, nói đang xử lý, báo khi nào xong, và cách cập nhật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I'm so sorry about this. I'm calling the technician now, and will update you within thirty minutes.",
          "sub": "Mình rất xin lỗi. Mình đang gọi thợ, trong vòng ba mươi phút sẽ báo lại bạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not fixed yet? Still reply now.",
          "sub": "Chưa sửa được ngay, vẫn trả lời ngay.",
          "keys": [
            "vẫn trả lời ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Can't hold your phone? Ask a co-host, and send the number: please call my brother Minh.",
          "sub": "Không cầm được điện thoại? Nhờ đồng chủ nhà, gửi số cho khách: “please call my brother Minh”."
        }
      ],
      "ref": "p17,p19,p20"
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật 11:00 · Trả phòng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
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
                  "id": "sam",
                  "side": "left",
                  "pose": "wave",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "luggage",
                "key"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chủ nhật 11:00 · trước cửa toà nhà",
            "icon": "luggage"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l2:towels",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1252,
            "size": 56,
            "at": "l2:towels+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Gom khăn đã dùng",
            "x": 6029,
            "y": 1262,
            "size": 46,
            "at": "l2:towels+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 44,
            "h": 44,
            "at": "l2:rubbish",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1342,
            "size": 56,
            "at": "l2:rubbish+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Đổ rác, tắt đèn",
            "x": 6029,
            "y": 1352,
            "size": 46,
            "at": "l2:rubbish+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1450,
            "w": 44,
            "h": 44,
            "at": "l2:lock up",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1432,
            "size": 56,
            "at": "l2:lock up+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Khoá cửa, trả chìa",
            "x": 6029,
            "y": 1442,
            "size": 46,
            "at": "l2:lock up+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Sunday, eleven a.m. Keep check out simple.",
          "sub": "Chặng bảy: mười một giờ trưa Chủ nhật. Trả phòng nên thật đơn giản.",
          "keys": [
            "thật đơn giản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Reasonable asks: gather used towels, take out the rubbish, lights off, lock up, return the key.",
          "sub": "Việc hợp lý: gom khăn đã dùng, đổ rác, tắt đèn và thiết bị, khoá cửa, trả chìa khoá."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Check out is at eleven am. Please leave the key in the box by the door.",
          "sub": "Trả phòng lúc mười một giờ sáng. Bạn vui lòng để chìa khoá vào hộp cạnh cửa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Done! The key is in the box. Thanks for everything!",
          "sub": "Xong rồi! Chìa ở trong hộp. Cảm ơn bạn vì tất cả!",
          "face": "happy",
          "pose": "wave"
        }
      ],
      "ref": "p21"
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
            "id": "i-rv",
            "t": "text",
            "text": "Thank you for staying with us!",
            "x": 5964,
            "y": 1560,
            "size": 44,
            "at": "l1:Thank"
          },
          {
            "id": "i-rv2",
            "t": "text",
            "text": "We'd love a review.",
            "x": 5964,
            "y": 1630,
            "size": 48,
            "at": "l1:review",
            "color": "accent"
          },
          {
            "id": "i-14",
            "t": "text",
            "text": "14 ngày",
            "x": 5964,
            "y": 1710,
            "size": 90,
            "at": "l3:fourteen",
            "color": "coral",
            "hl": [
              {
                "text": "14 ngày",
                "at": "l3:fourteen days"
              }
            ]
          },
          {
            "id": "i-14b",
            "t": "text",
            "text": "để hai bên đánh giá nhau",
            "x": 6304,
            "y": 1740,
            "size": 40,
            "at": "l3:each other",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then: thank you for staying with us! If you have a moment, we'd love a review.",
          "sub": "Rồi: “Cảm ơn bạn đã ở cùng tụi mình! Có chút thời gian thì để lại đánh giá nhé.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Review your guest soon too. Both sides have fourteen days to review each other.",
          "sub": "Bạn cũng đánh giá khách sớm. Hai bên có 14 ngày sau khi trả phòng để đánh giá nhau.",
          "keys": [
            "14 ngày"
          ]
        }
      ],
      "ref": "p22"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Hai tuần sau · Thứ Hai 20:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Two weeks"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "card-file-box"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Ting",
            "caption": "Hai tuần sau · cùng giờ, khách mới",
            "icon": "card-file-box"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l4:enquiry",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1252,
            "size": 56,
            "at": "l4:enquiry+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Trả lời hỏi phòng",
            "x": 7997,
            "y": 1262,
            "size": 38,
            "at": "l4:enquiry+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1342,
            "w": 44,
            "h": 44,
            "at": "l4:booking",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1324,
            "size": 56,
            "at": "l4:booking+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Cảm ơn đặt phòng",
            "x": 7997,
            "y": 1334,
            "size": 38,
            "at": "l4:booking+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1414,
            "w": 44,
            "h": 44,
            "at": "l4:reminder",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1396,
            "size": 56,
            "at": "l4:reminder+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Nhắc trước + chỉ đường",
            "x": 7997,
            "y": 1406,
            "size": 38,
            "at": "l4:reminder+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1486,
            "w": 44,
            "h": 44,
            "at": "l4:settled",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1468,
            "size": 56,
            "at": "l4:settled+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Hỏi thăm khi đã vào",
            "x": 7997,
            "y": 1478,
            "size": 38,
            "at": "l4:settled+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1558,
            "w": 44,
            "h": 44,
            "at": "l4:review",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1540,
            "size": 56,
            "at": "l4:review+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Cảm ơn, mời đánh giá",
            "x": 7997,
            "y": 1550,
            "size": 38,
            "at": "l4:review+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two weeks later. Monday, eight p.m. Ting! A new guest asks about parking.",
          "sub": "Hai tuần sau. Tám giờ tối thứ Hai. Ting! Một vị khách mới hỏi chuyện đỗ xe."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Open the drawer, change the name, send!",
          "sub": "Dễ ợt. Mở ngăn kéo mẫu, sửa tên, gửi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quick replies fill in the guest's name, and can be scheduled.",
          "sub": "Tin nhắn nhanh tự điền tên khách, hẹn giờ gửi được."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five templates cover five moments: enquiry, booking, reminder, settled in, and review.",
          "sub": "Năm mẫu phủ năm mốc: hỏi phòng, đặt phòng, nhắc trước, hỏi thăm, đánh giá.",
          "keys": [
            "Năm mẫu phủ năm mốc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tin-den",
          "offsetMs": 2200
        }
      ],
      "ref": "p23,p25"
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
          }
        ],
        "items": [
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 7932,
            "y": 1650,
            "size": 52,
            "at": "l1:greeting",
            "color": "accent",
            "hl": [
              {
                "text": "Lời chào",
                "at": "l1:greeting"
              }
            ]
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… mà phải đúng lúc",
            "x": 7972,
            "y": 1730,
            "size": 48,
            "at": "l2:on time",
            "hl": [
              {
                "text": "đúng lúc",
                "at": "l2:on time"
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
          "say": "A greeting is worth more than a feast.",
          "sub": "“Lời chào cao hơn mâm cỗ.”",
          "keys": [
            "Lời chào cao hơn mâm cỗ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now Dũng's greeting is short, warm, and on time. Written once, edited each time.",
          "sub": "Giờ lời chào của Dũng ngắn, ấm, lại đúng lúc. Soạn kỹ một lần, mỗi lần gửi chỉ sửa vài chữ.",
          "keys": [
            "đúng lúc"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s24",
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
            "at": "l1:short",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:Remind",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:problem",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
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
            "y": 170,
            "at": "l1:short"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 170,
            "at": "l2:Remind"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1260,
            "at": "l3:problem"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: mẫu “Thanks for booking”",
            "x": 60,
            "y": 680,
            "size": 40,
            "at": "l4:Try",
            "hl": [
              {
                "text": "Thanks for booking",
                "at": "l4:Thanks for booking"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Theo Airbnb Resource Center; nhân vật trong bài là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l5:end",
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
          "say": "So: guests need short messages, at the right moment, about the right thing.",
          "sub": "Tóm lại: khách cần tin nhắn ngắn, đúng lúc, đúng việc.",
          "keys": [
            "ngắn, đúng lúc, đúng việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thank them when they book. Remind them, with directions, the day before.",
          "sub": "Cảm ơn khi khách đặt, và gửi tin nhắc kèm chỉ đường trước một ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When there's a problem, reply now, even before it's fixed.",
          "sub": "Có sự cố thì trả lời ngay, kể cả khi chưa sửa xong.",
          "keys": [
            "trả lời ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: open quick replies and write your Thanks for booking template.",
          "sub": "Làm ngay: mở mục tin nhắn nhanh, soạn mẫu “Thanks for booking”.",
          "keys": [
            "Thanks for booking"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: replying to enquiries so guests book.",
          "sub": "Bài tiếp: trả lời tin hỏi phòng sao cho khách chốt đặt."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "In Dung's reminder to Sam, which detail prevents the most likely mistake?",
        "options": [
          "The request to leave a review after the stay, written at the very end",
          "The note that the building door is on the side street, not the main road",
          "The greeting at the start, which tells Sam that the host is excited"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "door",
        "why": "Dũng chọn đúng một lưu ý dễ nhầm nhất là cửa toà nhà nằm ở hẻm bên. Đây là chỗ khách lạ hay đi sai, nên nói trước giúp Sam vào nhà suôn sẻ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In Dung's reminder to Sam, which detail prevents the most likely mistake?",
          "sub": "Trong tin nhắc của Dũng gửi Sam, chi tiết nào giúp tránh nhầm lẫn dễ xảy ra nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The note that the building door is on the side street, not the main road.",
          "sub": "Lưu ý cửa toà nhà ở hẻm bên, không phải mặt đường lớn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[16]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One template tonight: Thanks for booking. Then try the forty questions below.",
          "sub": "Tối nay soạn một mẫu: “Thanks for booking”. Rồi thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT LẦN SAM Ở CĂN HỘ CỦA DŨNG ở Đà Lạt (Thứ Hai 20:00 tin hỏi đỗ xe → 20:10 hỏi phòng → 20:30 đặt → Thứ Năm nhắc trước → Thứ Sáu 14:00 nhận phòng → cùng tối 22:00 Hội An, cô Hoa và tờ nội quy 20 dòng, “Khoan đã!” → Thứ Bảy 21:00 mất điện, hai cách → Chủ nhật 11:00 trả phòng, 14 ngày đánh giá → hai tuần sau Thứ Hai 20:00 khép vòng với “ngăn kéo mẫu”). Hook HOOK-19 (âm thanh trước hình: tiếng “tin đến”, câu dịch máy bị gạch). Nhân vật: Dũng, Sam, Cô Hoa (Minh chỉ nhắc tên) — w145/_series/en-homestay-airbnb-hosts.md. Cảnh ngắt nhịp: BRK-08 (năm mốc), BRK-07 (rehook), BRK-03 (12 giờ). Ca dao: “Lời chào cao hơn mâm cỗ”. Số liệu: 48/24 giờ, 12 giờ, 1 giờ, 14 ngày (Airbnb Resource Center). Câu đố questions[16].",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
