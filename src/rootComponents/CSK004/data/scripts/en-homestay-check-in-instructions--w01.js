// en-homestay-check-in-instructions--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-homestay-check-in-instructions--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "en-homestay-airbnb-hosts",
    "slug": "en-homestay-check-in-instructions",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Gửi hướng dẫn nhận phòng bằng tiếng Anh thế nào để khách không lạc?",
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
              "a-box"
            ],
            "zoom": 1.7,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-box",
            "t": "illus",
            "name": "locked",
            "x": 120,
            "y": 100,
            "size": 260,
            "at": "l1"
          },
          {
            "id": "a-code",
            "t": "text",
            "text": "• • • •",
            "x": 420,
            "y": 130,
            "size": 110,
            "at": "l1:code",
            "color": "muted"
          },
          {
            "id": "a-x3",
            "t": "text",
            "text": "× 3",
            "x": 420,
            "y": 270,
            "size": 110,
            "at": "l2:three",
            "color": "coral",
            "hl": [
              {
                "text": "× 3",
                "at": "l2:three times"
              }
            ]
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "Cửa không mở.",
            "x": 120,
            "y": 420,
            "size": 64,
            "at": "l2:won't open"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“I'm lost. Where is the gate?”",
            "x": 120,
            "y": 540,
            "size": 50,
            "at": "l4:lost",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This small metal box holds a key, and a four digit code.",
          "sub": "Chiếc hộp kim loại nhỏ này giữ một chiếc chìa, và một mã bốn số."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tonight it's been tried three times. The door still won't open.",
          "sub": "Tối nay nó bị bấm ba lần rồi. Cửa vẫn không mở.",
          "keys": [
            "ba lần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pull back, and you see who's pressing.",
          "sub": "Lùi ra một chút, sẽ thấy ai đang bấm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Most messages like I'm lost, or the code doesn't work, start with one unclear instruction.",
          "sub": "Phần lớn những tin “mình lạc rồi”, “mã không mở” đều bắt đầu từ một bản hướng dẫn viết chưa rõ.",
          "keys": [
            "viết chưa rõ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "sai",
          "offsetMs": 200
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
              "set": "street",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "luggage",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "sam",
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
            "caption": "Thứ Sáu 22:00 · Đà Lạt, trời lạnh",
            "icon": "crescent-moon"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Muốn sang thì bắc cầu kiều”",
            "x": 120,
            "y": 660,
            "size": 48,
            "at": "l4:cross",
            "color": "accent",
            "hl": [
              {
                "text": "bắc cầu",
                "at": "l4:build a bridge"
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
          "say": "Meet Sam, a traveller from abroad, outside Dũng's apartment building in Đà Lạt.",
          "sub": "Đây là Sam, du khách nước ngoài, đứng trước toà nhà căn hộ của Dũng ở Đà Lạt.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ten p.m. Cold air, a heavy bag, and a door that says no.",
          "sub": "Mười giờ đêm. Trời lạnh, vali nặng, và một cánh cửa lắc đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "I've entered the code three times. It doesn't work!",
          "sub": "Mình nhập mã ba lần rồi. Không mở được!",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: if you want to cross, build a bridge.",
          "sub": "Ông bà dặn: “Muốn sang thì bắc cầu kiều.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For a guest, your check in instructions are the bridge.",
          "sub": "Với khách, bản hướng dẫn nhận phòng chính là chiếc cầu ấy.",
          "keys": [
            "chiếc cầu"
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
      "ref": "intro,p12"
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
            "text": "Viết sao để khách không lạc?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:lost",
            "hl": [
              {
                "text": "không lạc",
                "at": "l1:never get lost"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: một đoạn văn dài",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:paragraph",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:essay"
          },
          {
            "id": "b-p0",
            "t": "box",
            "x": 2028,
            "y": 300,
            "w": 300,
            "h": 90,
            "at": "l3:right time",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt0",
            "t": "text",
            "text": "Gửi đúng lúc",
            "x": 2046,
            "y": 318,
            "size": 38,
            "at": "l3:right time+200"
          },
          {
            "id": "b-p1",
            "t": "box",
            "x": 2358,
            "y": 300,
            "w": 300,
            "h": 90,
            "at": "l3:step by step",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt1",
            "t": "text",
            "text": "Từng bước, câu lệnh",
            "x": 2376,
            "y": 318,
            "size": 38,
            "at": "l3:step by step+200"
          },
          {
            "id": "b-p2",
            "t": "box",
            "x": 2688,
            "y": 300,
            "w": 300,
            "h": 90,
            "at": "l3:landmarks",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt2",
            "t": "text",
            "text": "Mốc nhìn thấy",
            "x": 2706,
            "y": 318,
            "size": 38,
            "at": "l3:landmarks+200"
          },
          {
            "id": "b-p3",
            "t": "box",
            "x": 3018,
            "y": 300,
            "w": 300,
            "h": 90,
            "at": "l3:lock codes",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-pt3",
            "t": "text",
            "text": "Mã khoá rõ",
            "x": 3036,
            "y": 318,
            "size": 38,
            "at": "l3:lock codes+200"
          },
          {
            "id": "b-p4",
            "t": "box",
            "x": 3348,
            "y": 300,
            "w": 300,
            "h": 90,
            "at": "l3:contact number",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt4",
            "t": "text",
            "text": "Số liên lạc",
            "x": 3366,
            "y": 318,
            "size": 38,
            "at": "l3:contact number+200"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Người lạ, trời tối: vẫn theo được",
            "x": 2028,
            "y": 470,
            "size": 50,
            "at": "l4:stranger",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn theo được",
                "at": "l4:still follow"
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
          "say": "So how do you write check in instructions, so guests never get lost?",
          "sub": "Vậy viết hướng dẫn nhận phòng thế nào để khách không lạc?",
          "keys": [
            "không lạc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not one long paragraph, like an essay.",
          "sub": "Không phải một đoạn văn dài như bài tập làm văn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Send them at the right time, step by step, with landmarks, clear lock codes, and a contact number.",
          "sub": "Gửi đúng lúc, viết từng bước, có mốc nhận biết, mã khoá rõ ràng và số liên lạc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The test: a stranger, reading on a phone in the dark, can still follow them.",
          "sub": "Phép thử: một người lạ, đọc trên điện thoại lúc trời tối, vẫn làm theo được.",
          "keys": [
            "vẫn làm theo được"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "text": "① Thứ Tư 22:00 · 48 giờ trước",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Rewind"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
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
            "at": "l1:Dũng",
            "caption": "Thứ Tư 22:00 · căn hộ Dũng",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-ag",
            "t": "text",
            "text": "Arrival guide gồm:",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:arrival guide",
            "hl": [
              {
                "text": "Arrival guide",
                "at": "l3:arrival guide"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "chỉ đường · cách nhận phòng",
            "x": 4036,
            "y": 250,
            "size": 44,
            "at": "l3:directions"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "· từng bước nhận phòng",
            "x": 4036,
            "y": 315,
            "size": 44,
            "at": "l3:step by step"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Rewind two days. First stop: Wednesday night. Dũng, Sam's host, opens the app.",
          "sub": "Tua lại hai ngày. Chặng một: tối thứ Tư. Dũng, chủ nhà của Sam, mở ứng dụng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Where do I even put the instructions?",
          "sub": "Mà hướng dẫn đặt ở đâu nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Airbnb says the arrival guide holds three things: directions, the check in method, and step by step instructions.",
          "sub": "Airbnb khuyên phần hướng dẫn đến nơi có ba thứ: chỉ đường, cách nhận phòng, và hướng dẫn từng bước."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tua",
          "offsetMs": 0
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-03",
      "data": {
        "value": 48,
        "suffix": " giờ",
        "label": "trước giờ nhận phòng · 24 giờ nếu huỷ linh hoạt",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "When do guests see them?",
          "sub": "Khi nào khách thấy?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Forty eight hours before check in, or twenty four with flexible cancellation.",
          "sub": "48 giờ trước giờ nhận phòng, hoặc 24 giờ nếu chính sách huỷ linh hoạt.",
          "keys": [
            "48 giờ"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-rem",
            "t": "text",
            "text": "1–2 ngày trước: tin nhắc",
            "x": 3996,
            "y": 420,
            "size": 50,
            "at": "l1:reminder",
            "hl": [
              {
                "text": "tin nhắc",
                "at": "l1:reminder"
              }
            ]
          },
          {
            "id": "c-tr",
            "t": "text",
            "text": "Your guide is in the Trips tab.",
            "x": 3996,
            "y": 510,
            "size": 40,
            "at": "l2:Trips",
            "color": "accent"
          },
          {
            "id": "c-tr2",
            "t": "text",
            "text": "Here are a few important notes.",
            "x": 3996,
            "y": 570,
            "size": 40,
            "at": "l2:notes",
            "color": "accent"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Airbnb Resource Center — The essentials: welcome your first guests",
            "x": 3996,
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
          "say": "Then, one to two days before, a reminder about how to get in.",
          "sub": "Rồi một đến hai ngày trước, gửi tin nhắc về cách vào nhà.",
          "keys": [
            "tin nhắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many hosts schedule it: Your check in guide is in the Trips tab. Here are a few important notes.",
          "sub": "Nhiều chủ nhà hẹn giờ gửi: “Hướng dẫn nhận phòng có ở mục Trips. Đây là vài lưu ý quan trọng.”"
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
          },
          {
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Năm · Câu mệnh lệnh",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v1",
            "t": "text",
            "text": "Just press the button.",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:Just press",
            "color": "accent",
            "hl": [
              {
                "text": "press",
                "at": "l2:press"
              }
            ]
          },
          {
            "id": "d-ord",
            "t": "text",
            "text": "First · Then · Next · After that",
            "x": 5964,
            "y": 250,
            "size": 46,
            "at": "l2:First",
            "hl": [
              {
                "text": "First",
                "at": "l2:First"
              }
            ]
          },
          {
            "id": "d-pol",
            "t": "text",
            "text": "Không bất lịch sự · thêm “please”",
            "x": 5964,
            "y": 330,
            "size": 42,
            "at": "l3:rude",
            "color": "muted"
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
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "red-paper-lantern",
                "oncoming-taxi"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4",
            "caption": "Thứ Năm 20:00 · Hội An",
            "icon": "red-paper-lantern"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop, Thursday. The British Council's lesson on giving instructions starts with the verb.",
          "sub": "Chặng hai, thứ Năm. Bài nói về đưa chỉ dẫn của British Council để động từ đứng đầu câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Just press the button. Then order words: First, Then, Next, After that.",
          "sub": "“Just press the button.” Rồi từ chỉ thứ tự: First, Then, Next, After that."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In directions, that's not rude. Add please for the careful steps.",
          "sub": "Khi chỉ đường, câu mệnh lệnh không bất lịch sự. Bước cần cẩn thận thì thêm “please”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same evening in Hội An, meet Cô Hoa. She rewrites her directions, in the order guests walk.",
          "sub": "Cùng tối ở Hội An, đây là cô Hoa. Cô viết lại chỉ đường theo đúng đường khách đi.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "First, ask the taxi driver to stop at the Tran family temple.",
          "sub": "Trước tiên, bảo tài xế dừng ở nhà thờ họ Trần.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Then, walk into the small lane on the left of the temple. Next, look for a yellow gate with a lantern.",
          "sub": "Sau đó, đi vào hẻm nhỏ bên trái nhà thờ. Tiếp theo, tìm cổng vàng có treo đèn lồng."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "hoa",
          "say": "After that, open the key box on the wall with the code I'll send you.",
          "sub": "Sau đó nữa, mở hộp khoá trên tường bằng mã cô sẽ gửi.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p3,p4,p5"
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
            "id": "d-one",
            "t": "text",
            "text": "1 bước = 1 hành động",
            "x": 5964,
            "y": 430,
            "size": 54,
            "at": "l1:one action",
            "color": "accent",
            "hl": [
              {
                "text": "1 hành động",
                "at": "l1:one action"
              }
            ]
          },
          {
            "id": "d-vb",
            "t": "text",
            "text": "Go straight · Turn left · Walk past…",
            "x": 5964,
            "y": 520,
            "size": 40,
            "at": "l2:Go straight"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Mỗi bước một việc, không sót bước",
            "x": 5964,
            "y": 620,
            "size": 50,
            "at": "l3:no step",
            "color": "accent",
            "hl": [
              {
                "text": "không sót bước",
                "at": "l3:no step"
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
          "say": "One action per step, on its own line. Machine translations cram three jobs into one long sentence.",
          "sub": "Mỗi bước một hành động, một dòng riêng. Câu dịch máy hay nhồi ba việc vào một câu dài.",
          "keys": [
            "Mỗi bước một hành động"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Handy verbs: Go straight, Turn left, Walk past, Open, Take the stairs to.",
          "sub": "Động từ hay dùng: Go straight, Turn left, Walk past, Open, Take the stairs to."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One job per step, and no step gets skipped on a dark street.",
          "sub": "Mỗi bước một việc, khách đi không sót bước nào.",
          "keys": [
            "không sót bước nào"
          ]
        }
      ],
      "ref": "p4,p6"
    },
    {
      "id": "s08",
      "module": "BRK-06",
      "data": {
        "title": "Mốc khách nhìn thấy",
        "items": [
          {
            "illus": "pill",
            "text": "Tiệm thuốc"
          },
          {
            "illus": "deciduous-tree",
            "text": "Cây lớn"
          },
          {
            "illus": "door",
            "text": "Cổng màu"
          },
          {
            "illus": "hot-beverage",
            "text": "Quán góc đường"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A pharmacy, a big tree, a coloured gate, a corner café.",
          "sub": "Tiệm thuốc, cây lớn, cổng màu, quán cà phê góc đường.",
          "keys": [
            "cổng màu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Things a stranger can actually see.",
          "sub": "Những thứ người lạ nhìn thấy được."
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
            "at": 150,
            "fit": "E",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Mốc nhìn thấy",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-num",
            "t": "text",
            "text": "Số nhà trong hẻm: khó tìm",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l1:house numbers",
            "color": "muted"
          },
          {
            "id": "e-map",
            "t": "text",
            "text": "Bản đồ: có thể lệch",
            "x": 7932,
            "y": 245,
            "size": 48,
            "at": "l1:maps",
            "color": "muted"
          },
          {
            "id": "e-see",
            "t": "text",
            "text": "You'll see a big tree…",
            "x": 7932,
            "y": 340,
            "size": 50,
            "at": "l2:big tree",
            "color": "accent",
            "hl": [
              {
                "text": "You'll see",
                "at": "l2:see"
              }
            ]
          },
          {
            "id": "e-tree",
            "t": "illus",
            "name": "deciduous-tree",
            "x": 9322,
            "y": 300,
            "size": 160,
            "at": "l2:big tree"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop. In many lanes, house numbers are hard to find, and maps can point a little off.",
          "sub": "Chặng ba. Trong nhiều con hẻm, số nhà khó tìm, bản đồ có thể chỉ lệch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So describe what they'll see: You'll see a big tree on your right.",
          "sub": "Nên viết mốc theo đúng thứ khách sẽ thấy: “You'll see a big tree on your right.”",
          "keys": [
            "thứ khách sẽ thấy"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Chỉ đường vào hẻm",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“go inside the alley about one hundred meters…”",
        "right": "Turn into the alley next to the blue pharmacy",
        "wrongIllus": "confused-face",
        "rightIllus": "pill"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: about one hundred meters, house is having green door.",
          "sub": "Trước: “khoảng một trăm mét, nhà đang có cửa xanh”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: turn in next to the blue pharmacy.",
          "sub": "Sau: “rẽ vào hẻm cạnh tiệm thuốc màu xanh dương.”",
          "keys": [
            "tiệm thuốc màu xanh dương"
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
          }
        ],
        "items": [
          {
            "id": "e-a1",
            "t": "text",
            "text": "Walk about two minutes.",
            "x": 7932,
            "y": 440,
            "size": 40,
            "at": "l1:two minutes"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "On the left, with a green door.",
            "x": 7932,
            "y": 495,
            "size": 40,
            "at": "l1:left"
          },
          {
            "id": "e-a3",
            "t": "text",
            "text": "You'll see our sign above it.",
            "x": 7932,
            "y": 550,
            "size": 40,
            "at": "l1:sign"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Chỉ bằng thứ khách thấy",
            "x": 7932,
            "y": 640,
            "size": 56,
            "at": "l2:what the guest",
            "color": "accent",
            "hl": [
              {
                "text": "khách thấy",
                "at": "l2:guest sees"
              }
            ]
          },
          {
            "id": "e-cam",
            "t": "illus",
            "name": "camera-with-flash",
            "x": 9172,
            "y": 560,
            "size": 100,
            "at": "l3:photo"
          },
          {
            "id": "e-gate",
            "t": "text",
            "text": "“This is our gate.”",
            "x": 9292,
            "y": 580,
            "size": 44,
            "at": "l3:This is our gate"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then: walk about two minutes. Our house is on the left, with a green door. You'll see our sign above it.",
          "sub": "Rồi: đi khoảng hai phút. Nhà ở bên trái, cửa màu xanh lá. Bạn sẽ thấy bảng tên phía trên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Directions with what the guest sees, not what only you know.",
          "sub": "Chỉ đường bằng thứ khách thấy, không bằng thứ chỉ mình biết.",
          "keys": [
            "thứ khách thấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many hosts add a photo of the gate if they can, with one line: This is our gate.",
          "sub": "Nhiều chủ nhà đính kèm ảnh cổng nếu được, ghi một câu: “This is our gate.”"
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Có mã khoá rồi, sao khách vẫn đứng ngoài?",
        "illus": "locked"
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
          "say": "The code was in the message. So why was Sam still outside?",
          "sub": "Mã đã có trong tin. Vậy sao Sam vẫn đứng ngoài?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s13",
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
            "text": "④ Thứ Sáu 22:00 · Hai lớp khoá",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-self",
            "t": "text",
            "text": "Self check-in: nhiều khách thích",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l1:self check in"
          },
          {
            "id": "f-box",
            "t": "text",
            "text": "Hộp ở đâu · mã cho cửa nào",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l2:where the box",
            "hl": [
              {
                "text": "cửa nào",
                "at": "l2:which door"
              }
            ]
          },
          {
            "id": "f-box2",
            "t": "text",
            "text": "· lấy chìa xong làm gì",
            "x": 60,
            "y": 1410,
            "size": 46,
            "at": "l2:after"
          },
          {
            "id": "f-eg",
            "t": "text",
            "text": "Enter the code, pull the lid.",
            "x": 60,
            "y": 1500,
            "size": 44,
            "at": "l3:pull",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: back to Friday, ten p.m. Airbnb notes many guests like self check in.",
          "sub": "Chặng bốn: trở lại mười giờ đêm thứ Sáu. Airbnb ghi nhận nhiều khách thích tự nhận phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So say where the box is, which door the code opens, and what to do after.",
          "sub": "Vậy nói rõ hộp ở đâu, mã dùng cho cửa nào, lấy chìa xong làm gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The key box is on the left of the gate. Enter the code, then pull the lid down.",
          "sub": "“Hộp khoá ở bên trái cổng. Nhập mã, rồi kéo nắp xuống.”"
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Thứ Sáu 22:00 · cửa toà nhà",
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
        "verdict": {
          "ok": false,
          "label": "“The code is the same for everything.”",
          "why": "Cửa toà nhà phải bấm thêm “#” sau mã. Sam nhập ba lần, đứng ngoài trời lạnh.",
          "rule": "Mỗi cửa một dòng hướng dẫn riêng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Two locks? Easy: the code is the same for everything.",
          "sub": "Hai lớp khoá? Dễ: “The code is the same for everything.”",
          "pose": "thumb",
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
          "say": "The building door needs hash after the code. So Sam is stuck in the cold.",
          "sub": "Cửa toà nhà phải bấm thêm phím “#” sau mã. Thế nên Sam đứng ngoài trời lạnh.",
          "keys": [
            "thêm phím “#”"
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
          "who": "dung",
          "say": "Building door: enter the code, then press hash.",
          "sub": "Cửa toà nhà: nhập mã, rồi bấm phím “#”.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Key box at the apartment door: same code, then pull the lid down.",
          "sub": "Hộp khoá cạnh cửa căn hộ: nhập cùng mã, rồi kéo nắp xuống.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "sam",
          "say": "Got it. I'm in!",
          "sub": "Được rồi. Mình vào rồi!",
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
      "ref": "p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "f-d1",
            "t": "text",
            "text": "Building door: code, then #",
            "x": 60,
            "y": 1570,
            "size": 42,
            "at": "l1:Each door",
            "color": "accent"
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "Key box: same code, lid down",
            "x": 60,
            "y": 1630,
            "size": 42,
            "at": "l1:each lock"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Mỗi cửa một dòng riêng",
            "x": 60,
            "y": 1720,
            "size": 58,
            "at": "l1:own line",
            "color": "accent",
            "hl": [
              {
                "text": "một dòng riêng",
                "at": "l1:own line"
              }
            ]
          },
          {
            "id": "f-1h",
            "t": "text",
            "text": "Kẹt cửa: trả lời trong 1 giờ",
            "x": 880,
            "y": 1690,
            "size": 40,
            "at": "l2:one hour",
            "hl": [
              {
                "text": "1 giờ",
                "at": "l2:one hour"
              }
            ]
          },
          {
            "id": "f-call",
            "t": "text",
            "text": "Code not working? Call me.",
            "x": 880,
            "y": 1770,
            "size": 40,
            "at": "l3:call me",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Each door, each lock, gets its own line.",
          "sub": "Mỗi cửa, mỗi khoá, một dòng hướng dẫn riêng.",
          "keys": [
            "một dòng hướng dẫn riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Locked out is urgent. Airbnb suggests replying within one hour.",
          "sub": "Không vào được nhà là việc gấp. Airbnb khuyên trả lời trong vòng một giờ.",
          "keys": [
            "một giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So write it in advance: If the code doesn't work, call me right away on this number.",
          "sub": "Nên ghi sẵn: “Nếu mã không mở được, gọi ngay cho mình theo số này.”"
        }
      ],
      "ref": "p13,p14"
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
            "text": "⑤ 22:15 · Vào phòng rồi",
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
              "set": "room",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "shower",
                "antenna-bars"
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
            "caption": "Thứ Sáu 22:15 · trong căn hộ",
            "icon": "shower"
          },
          {
            "id": "g-man",
            "t": "text",
            "text": "Sổ tay hướng dẫn (house manual)",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l3:house manual",
            "hl": [
              {
                "text": "house manual",
                "at": "l3:house manual"
              }
            ]
          },
          {
            "id": "g-tag",
            "t": "text",
            "text": "Dán ngay cạnh thiết bị",
            "x": 2028,
            "y": 1335,
            "size": 46,
            "at": "l3:next to",
            "color": "accent"
          },
          {
            "id": "g-wifi",
            "t": "text",
            "text": "Wifi: on the card by the TV.",
            "x": 2028,
            "y": 1420,
            "size": 42,
            "at": "l4:card by the TV"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop, quarter past ten. Sam is in, shivering, and has two questions.",
          "sub": "Chặng năm, mười giờ mười lăm. Sam vào được rồi, còn run, và có hai câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "What's the wifi password? And how do I get hot water?",
          "sub": "Mật khẩu wifi là gì? Còn nước nóng thì bật sao?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Airbnb suggests a house manual, a printed copy in plain sight, and key info right next to each device.",
          "sub": "Airbnb khuyên có sổ tay hướng dẫn, một bản in ở chỗ dễ thấy, và thông tin quan trọng dán ngay cạnh thiết bị."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the answer is one line: The wifi name and password are on the card by the TV.",
          "sub": "Thế là trả lời một câu: “Tên và mật khẩu wifi có trên tấm thẻ cạnh tivi.”"
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "g-h1",
            "t": "text",
            "text": "First, switch on the red button.",
            "x": 2028,
            "y": 1560,
            "size": 40,
            "at": "l1:First",
            "color": "accent"
          },
          {
            "id": "g-h2",
            "t": "text",
            "text": "Then, wait about ten minutes.",
            "x": 2028,
            "y": 1620,
            "size": 40,
            "at": "l1:Then"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "In person: “Is this OK?”",
            "x": 2028,
            "y": 1710,
            "size": 54,
            "at": "l2:Is this OK",
            "color": "accent",
            "hl": [
              {
                "text": "Is this OK?",
                "at": "l2:Is this OK"
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
          "say": "Hot water, same frame: First, switch on the red button on the wall. Then, wait about ten minutes for the water to heat up.",
          "sub": "Nước nóng, cùng khung: “Trước tiên, bật nút đỏ trên tường. Sau đó, đợi khoảng mười phút cho nước nóng.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Showing someone in person? Check with: Is this OK?",
          "sub": "Hướng dẫn trực tiếp thì hỏi lại: “Is this OK?”, để biết khách làm được chưa.",
          "keys": [
            "Is this OK?"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy 23:50 · Khách đến khuya",
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
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "left": {
                "label": "Cách A: mã + “Enjoy!”",
                "ok": false
              },
              "right": {
                "label": "Cách B: đèn + người nghe máy",
                "ok": true
              }
            },
            "at": "l1:co host",
            "caption": "Thứ Bảy 23:50 · khách sau, máy bay trễ",
            "icon": "crescent-moon"
          },
          {
            "id": "h-lan",
            "t": "text",
            "text": "Co-host: Lan",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l1:Lan",
            "hl": [
              {
                "text": "Lan",
                "at": "l1:Lan"
              }
            ]
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: im lặng, chờ tới sáng",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l3:silent",
            "color": "coral"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: gọi được Lan, vào nhà",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l4:minutes",
            "color": "accent",
            "hl": [
              {
                "text": "vào nhà",
                "at": "l4:inside"
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
          "say": "Sixth stop: Saturday, ten to midnight. A later guest's plane landed late. Dũng's co host is Lan.",
          "sub": "Chặng sáu: mười hai giờ kém mười đêm thứ Bảy. Một vị khách sau hạ cánh trễ. Đồng chủ nhà của Dũng là chị Lan.",
          "keys": [
            "chị Lan"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "say": "Way A: the instructions have only the code, and Enjoy your stay.",
          "sub": "Cách A: hướng dẫn chỉ có mã và câu “Enjoy your stay!”.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "say": "The lane is dark. No key box in sight. The host's phone is on silent.",
          "sub": "Hẻm tối, không thấy hộp khoá. Gọi chủ nhà thì máy để im lặng.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "lan",
          "say": "The key box is lit by a small lamp. If you have any trouble, call me any time tonight.",
          "sub": "Hộp khoá có đèn nhỏ chiếu sáng. Có trục trặc gì, gọi chị, tối nay giờ nào cũng được.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Way A: the guest waits outside the gate until someone wakes up. Silent all night.",
          "sub": "Cách A: khách chờ ngoài cổng đến khi có người dậy. Im lặng cả đêm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Way B: still a moment of confusion, but Lan answers, and the guest is inside in a few minutes.",
          "sub": "Cách B: vẫn lúng túng một lúc, nhưng gọi được chị Lan, vài phút sau là vào nhà."
        }
      ],
      "ref": "p17,p18"
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
            "id": "h-back",
            "t": "text",
            "text": "Can't reach me? Please call Lan.",
            "x": 3996,
            "y": 1540,
            "size": 44,
            "at": "l1:can't reach"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Khách đến khuya → có người nghe máy",
            "x": 3996,
            "y": 1650,
            "size": 50,
            "at": "l2:late",
            "color": "accent",
            "hl": [
              {
                "text": "có người nghe máy",
                "at": "l2:answers the phone"
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
          "say": "Busy that night? Name a backup: If you can't reach me, please call Lan on this number.",
          "sub": "Tối đó bận? Cử người dự phòng: “Nếu không gọi được mình, bạn gọi chị Lan theo số này nhé.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Late guest? Someone answers the phone.",
          "sub": "Khách đến khuya, phải có người nghe máy.",
          "keys": [
            "phải có người nghe máy"
          ]
        }
      ],
      "ref": "p17,p19"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Viết lại cả bản",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-in",
            "t": "text",
            "text": "Please message me when you're inside.",
            "x": 5964,
            "y": 1260,
            "size": 40,
            "at": "l2:inside",
            "color": "accent",
            "hl": [
              {
                "text": "when you're inside",
                "at": "l2:inside"
              }
            ]
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "→ im lâu thì hỏi thăm",
            "x": 5964,
            "y": 1330,
            "size": 36,
            "at": "l3:silent",
            "color": "muted"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l4:landmark",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1402,
            "size": 56,
            "at": "l4:landmark+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Bắt đầu từ mốc dễ thấy",
            "x": 6029,
            "y": 1412,
            "size": 38,
            "at": "l4:landmark+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1490,
            "w": 44,
            "h": 44,
            "at": "l4:command",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1472,
            "size": 56,
            "at": "l4:command+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Mỗi bước một câu lệnh",
            "x": 6029,
            "y": 1482,
            "size": 38,
            "at": "l4:command+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1560,
            "w": 44,
            "h": 44,
            "at": "l4:lock",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1542,
            "size": 56,
            "at": "l4:lock+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Mỗi cửa, mỗi khoá một dòng",
            "x": 6029,
            "y": 1552,
            "size": 38,
            "at": "l4:lock+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1630,
            "w": 44,
            "h": 44,
            "at": "l4:wifi",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1612,
            "size": 56,
            "at": "l4:wifi+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Wifi, thiết bị ghi rõ",
            "x": 6029,
            "y": 1622,
            "size": 38,
            "at": "l4:wifi+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1700,
            "w": 44,
            "h": 44,
            "at": "l4:backup",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1682,
            "size": 56,
            "at": "l4:backup+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Số mình + số dự phòng",
            "x": 6029,
            "y": 1692,
            "size": 38,
            "at": "l4:backup+200"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1770,
            "w": 44,
            "h": 44,
            "at": "l4:message",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1752,
            "size": 56,
            "at": "l4:message+600",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Nhờ khách nhắn khi vào",
            "x": 6029,
            "y": 1762,
            "size": 38,
            "at": "l4:message+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Sunday. Dũng rewrites the whole thing, and ends with one more line.",
          "sub": "Chặng bảy: Chủ nhật. Dũng viết lại cả bản, và thêm một câu cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Please message me when you're inside, so I know you've arrived safely.",
          "sub": "Vào nhà rồi nhắn mình một tiếng nhé, để mình biết bạn tới nơi an toàn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It tells you the instructions worked. And if the guest stays silent too long, you have a reason to check in.",
          "sub": "Câu này cho biết hướng dẫn có ổn không. Khách im lặng quá lâu thì có lý do để hỏi thăm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "His checklist: a landmark start, one command per step, a line for each lock, wifi and devices, his number plus a backup, and a message when inside.",
          "sub": "Danh sách kiểm: mốc dễ thấy, mỗi bước một câu lệnh, mỗi khoá một dòng, wifi và thiết bị, số mình và số dự phòng, lời nhờ nhắn khi vào nhà."
        }
      ],
      "ref": "p20,p21"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Sáu tuần sau · 22:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Next Friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "locked",
                "crescent-moon"
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
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu tuần sau 22:00 · cùng cửa",
            "icon": "locked"
          },
          {
            "id": "j-box",
            "t": "illus",
            "name": "unlocked",
            "x": 7932,
            "y": 1250,
            "size": 160,
            "at": "l1:same box"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "× 1 · cửa mở",
            "x": 8132,
            "y": 1280,
            "size": 84,
            "at": "l1:first try",
            "color": "accent",
            "hl": [
              {
                "text": "× 1",
                "at": "l1:first try"
              }
            ]
          },
          {
            "id": "j-msg",
            "t": "text",
            "text": "“I'm inside!” ✓",
            "x": 7932,
            "y": 1470,
            "size": 60,
            "at": "l2:inside",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Muốn sang thì bắc cầu kiều”",
            "x": 7932,
            "y": 1610,
            "size": 48,
            "at": "l3:bridge",
            "hl": [
              {
                "text": "bắc cầu",
                "at": "l3:bridge"
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
          "say": "Next Friday, ten p.m. Same door, same box. A new guest opens it on the first try.",
          "sub": "Thứ Sáu tuần sau, mười giờ đêm. Vẫn cửa ấy, hộp ấy. Khách mới mở ngay lần đầu.",
          "keys": [
            "ngay lần đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Hi! I'm inside. Thanks for the clear steps!",
          "sub": "Chào bạn! Mình vào nhà rồi. Cảm ơn hướng dẫn rõ ràng nhé!"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If you want them to cross, build a bridge. Dũng built it, one short line at a time.",
          "sub": "“Muốn sang thì bắc cầu kiều.” Dũng đã bắc cầu, từng câu ngắn một.",
          "keys": [
            "bắc cầu kiều"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich",
          "offsetMs": 2600
        },
        {
          "at": "l2",
          "key": "tin-den",
          "offsetMs": 0
        }
      ],
      "ref": "p20,outro"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:command",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:landmarks",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:lock",
            "fit": "F",
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
            "x": 6664,
            "y": 430,
            "at": "l1:command"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 170,
            "at": "l2:landmarks"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1500,
            "y": 1260,
            "at": "l3:lock"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: đi hẻm, ghi mốc",
            "x": 7932,
            "y": 1730,
            "size": 40,
            "at": "l4:Try",
            "hl": [
              {
                "text": "ghi mốc",
                "at": "l4:landmark"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Theo Airbnb Resource Center và British Council; nhân vật là minh hoạ.",
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
          "say": "So: one short command per step, with First, Then, Next.",
          "sub": "Tóm lại: mỗi bước một câu lệnh ngắn, có First, Then, Next.",
          "keys": [
            "một câu lệnh ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Give landmarks the guest can see, not house numbers.",
          "sub": "Chỉ bằng mốc khách nhìn thấy, không bằng số nhà."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One line for each lock, plus your number and a backup.",
          "sub": "Mỗi khoá một dòng, kèm số của bạn và số dự phòng.",
          "keys": [
            "Mỗi khoá một dòng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: walk from the lane entrance to your gate, note each landmark, and write First, Then, Next.",
          "sub": "Làm ngay: tự đi từ đầu hẻm vào cổng nhà mình, ghi từng mốc, rồi viết thành First, Then, Next."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: house rules and local tips, in English.",
          "sub": "Bài tiếp: giới thiệu nội quy nhà và gợi ý ăn chơi bằng tiếng Anh."
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
        "q": "Sam could not open the building door, what was missing from Dung's message?",
        "options": [
          "That the building door needed an extra key pressed after the code",
          "That the code for the key box was written on the back of the door",
          "That the apartment was in Da Lat, where nights can be quite cold"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "locked",
        "why": "Tin của Dũng chỉ nói mã giống nhau cho mọi cửa. Cửa toà nhà lại cần bấm thêm một phím sau mã, nên Sam nhập mãi không được."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Sam could not open the building door, what was missing from Dung's message?",
          "sub": "Sam không mở được cửa toà nhà, tin của Dũng thiếu điều gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The building door needed the hash key after the code.",
          "sub": "Cửa toà nhà cần bấm thêm phím “#” sau mã."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[21]"
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
          "say": "Walk your lane tonight, and write First, Then, Next. Then try the forty questions below.",
          "sub": "Tối nay đi lại con hẻm, viết First, Then, Next. Rồi thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô. Mở bằng HOOK-23 (đồ vật kể chuyện: hộp khoá, bấm mã ba lần) ở Thứ Sáu 22:00, Sam đứng ngoài toà nhà Dũng ở Đà Lạt → tua về Thứ Tư 22:00 (arrival guide, 48/24 giờ, BRK-03) → Thứ Năm: câu mệnh lệnh British Council, cô Hoa viết lại chỉ đường Hội An → mốc nhìn thấy (BRK-06 montage, BRK-04 hẻm trước–sau, ảnh cổng) → BRK-07 rehook → Thứ Sáu 22:00 hai lớp khoá, “Khoan đã!” (thiếu phím #), việc gấp trả lời trong 1 giờ → 22:15 wifi, máy nước nóng, “Is this OK?” → Thứ Bảy 23:50 khách đến khuya, hai cách, chị Lan (co-host) nghe máy → Chủ nhật viết lại + danh sách kiểm → Thứ Sáu tuần sau 22:00 cùng hộp khoá, mở ngay lần đầu (khép vòng). Ca dao: “Muốn sang thì bắc cầu kiều”. Khách đến khuya và khách tuần sau: không tên (hình Thảo làm vai phụ). Nhân vật: Sam, Dũng, Cô Hoa, Lan — w145/_series/en-homestay-airbnb-hosts.md. Câu đố questions[21].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
