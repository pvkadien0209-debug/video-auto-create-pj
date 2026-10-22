// en-homestay-replying-to-booking-enquiries--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-homestay-replying-to-booking-enquiries--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "en-homestay-airbnb-hosts",
    "slug": "en-homestay-replying-to-booking-enquiries",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khách hỏi phòng trước khi đặt: trả lời tin nhắn tiếng Anh sao cho chốt được?",
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "Khen phòng càng nhiều",
            "x": 60,
            "y": 90,
            "size": 84,
            "at": "l1:praise",
            "hl": [
              {
                "text": "càng nhiều",
                "at": "l1:more"
              }
            ]
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "→ càng dễ chốt?",
            "x": 100,
            "y": 210,
            "size": 84,
            "at": "l1:bookings",
            "color": "accent"
          },
          {
            "id": "a-y",
            "t": "box",
            "x": 120,
            "y": 380,
            "w": 300,
            "h": 120,
            "at": "l2:Yes",
            "stroke": 6
          },
          {
            "id": "a-yt",
            "t": "text",
            "text": "Đúng",
            "x": 190,
            "y": 400,
            "size": 72,
            "at": "l2:Yes+200"
          },
          {
            "id": "a-n",
            "t": "box",
            "x": 520,
            "y": 380,
            "w": 300,
            "h": 120,
            "at": "l2:no",
            "stroke": 6
          },
          {
            "id": "a-nt",
            "t": "text",
            "text": "Sai",
            "x": 610,
            "y": 400,
            "size": 72,
            "at": "l2:no+200"
          },
          {
            "id": "a-yx",
            "t": "strike",
            "over": "a-yt",
            "at": "l4:Airbnb"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-nt"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:honesty"
          },
          {
            "id": "a-hon",
            "t": "text",
            "text": "Minh bạch > khen",
            "x": 120,
            "y": 560,
            "size": 64,
            "at": "l4:honesty",
            "color": "accent",
            "hl": [
              {
                "text": "Minh bạch",
                "at": "l4:honesty"
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
          "say": "Quick guess. You're a host. Does more praise for your room win more bookings?",
          "sub": "Đoán nhanh. Bạn là chủ nhà. Khen phòng càng nhiều thì càng dễ chốt?",
          "keys": [
            "càng dễ chốt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yes, or no? Three seconds.",
          "sub": "Đúng hay sai? Ba giây."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most hosts say yes.",
          "sub": "Phần lớn chủ nhà chọn: đúng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But Airbnb stresses honesty: what you promise is what the guest finds.",
          "sub": "Nhưng Airbnb nhấn mạnh minh bạch: điều bạn hứa phải khớp điều khách thấy.",
          "keys": [
            "minh bạch"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "dem-nguoc",
          "offsetMs": 600
        },
        {
          "at": "l4",
          "key": "tiet-lo",
          "offsetMs": 300
        }
      ],
      "ref": "p10"
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
                "incoming-envelope"
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
            "caption": "Thứ Tư 20:00 · Đà Lạt",
            "icon": "incoming-envelope"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 60,
            "y": 660,
            "size": 50,
            "at": "l4:greeting",
            "color": "muted",
            "hl": [
              {
                "text": "Lời chào",
                "at": "l4:greeting"
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
          "say": "Meet Dũng. He rents out a small apartment in Đà Lạt.",
          "sub": "Đây là Dũng, cho thuê một căn hộ nhỏ ở Đà Lạt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wednesday, eight p.m. His phone starts buzzing like a market at dawn.",
          "sub": "Tám giờ tối thứ Tư. Điện thoại réo như chợ lúc rạng sáng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three enquiries already! I know the answers, but how do I write them?",
          "sub": "Ba tin hỏi phòng rồi! Biết câu trả lời, mà viết sao đây?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Remember: a greeting is worth more than a feast. The first reply is that greeting.",
          "sub": "Nhớ nhé: “Lời chào cao hơn mâm cỗ.” Tin trả lời đầu tiên chính là lời chào.",
          "keys": [
            "Lời chào cao hơn mâm cỗ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "rung",
          "offsetMs": 1200
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
            "text": "Trả lời sao cho chốt?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:reply",
            "hl": [
              {
                "text": "chốt",
                "at": "l1:actually books"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: văn hay, khen nhiều",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:fancy",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:praise"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: nhanh, đúng, thật, mời",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l3:fast",
            "color": "accent",
            "hl": [
              {
                "text": "mời",
                "at": "l3:invitation"
              }
            ]
          },
          {
            "id": "b-p0",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l4:greeting",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p1",
            "t": "box",
            "x": 2358,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l4:straight answer",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p2",
            "t": "box",
            "x": 2688,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l4:strong point",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p3",
            "t": "box",
            "x": 3018,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l4:need to know",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-p4",
            "t": "box",
            "x": 3348,
            "y": 400,
            "w": 300,
            "h": 90,
            "at": "l4:invitation",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt0",
            "t": "text",
            "text": "Chào + tên",
            "x": 2048,
            "y": 418,
            "size": 38,
            "at": "l4:greeting+200"
          },
          {
            "id": "b-pt1",
            "t": "text",
            "text": "Trả lời thẳng",
            "x": 2378,
            "y": 418,
            "size": 38,
            "at": "l4:straight answer+200"
          },
          {
            "id": "b-pt2",
            "t": "text",
            "text": "1 điểm mạnh",
            "x": 2708,
            "y": 418,
            "size": 38,
            "at": "l4:strong point+200"
          },
          {
            "id": "b-pt3",
            "t": "text",
            "text": "Điều cần biết",
            "x": 3038,
            "y": 418,
            "size": 38,
            "at": "l4:need to know+200"
          },
          {
            "id": "b-pt4",
            "t": "text",
            "text": "Lời mời",
            "x": 3368,
            "y": 418,
            "size": 38,
            "at": "l4:invitation+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you reply to an enquiry, so the guest actually books?",
          "sub": "Vậy trả lời tin hỏi phòng thế nào để khách chốt đặt?",
          "keys": [
            "khách chốt đặt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not with fancy English and a mountain of praise.",
          "sub": "Không phải bằng tiếng Anh văn hoa và một núi lời khen."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But fast, on point, honest, and ending with a clear invitation.",
          "sub": "Mà là nhanh, đúng câu hỏi, trung thực, và kết bằng một lời mời rõ ràng.",
          "keys": [
            "lời mời rõ ràng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five parts: a greeting, a straight answer, one strong point, what they need to know, and an invitation.",
          "sub": "Năm phần: lời chào, câu trả lời thẳng, một điểm mạnh, điều cần biết trước, và lời mời."
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
            "text": "① 20:05 · Trả lời nhanh",
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
                "world-map",
                "mobile-phone"
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
            "caption": "Thứ Tư 20:00 · Sam ở nước ngoài",
            "icon": "world-map"
          },
          {
            "id": "c-sev",
            "t": "text",
            "text": "Khách hỏi vài nơi cùng lúc",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:several",
            "hl": [
              {
                "text": "vài nơi cùng lúc",
                "at": "l3:several places"
              }
            ]
          },
          {
            "id": "c-win",
            "t": "text",
            "text": "→ tin rõ, đến sớm: dễ được chọn",
            "x": 4036,
            "y": 255,
            "size": 44,
            "at": "l3:clear",
            "color": "accent"
          },
          {
            "id": "c-rank",
            "t": "text",
            "text": "Tỷ lệ phản hồi → xếp cao hơn",
            "x": 3996,
            "y": 350,
            "size": 46,
            "at": "l4:response rate",
            "hl": [
              {
                "text": "xếp cao hơn",
                "at": "l4:higher"
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
          "say": "First stop. This is Sam, a traveller from abroad, planning Đà Lạt and Hội An.",
          "sub": "Chặng một. Đây là Sam, du khách nước ngoài, đang lên lịch đi Đà Lạt và Hội An.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "I'll message a few places tonight, and pick the best reply.",
          "sub": "Tối nay mình nhắn vài chỗ, chỗ nào trả lời ổn nhất thì chọn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Guests often ask several places at once. A clear first reply gets chosen.",
          "sub": "Khách thường hỏi vài nơi cùng lúc. Tin trả lời đầu tiên rõ ràng dễ được chọn.",
          "keys": [
            "vài nơi cùng lúc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Airbnb says your response rate helps your place rank higher in search.",
          "sub": "Airbnb còn nói: tỷ lệ phản hồi giúp chỗ ở xếp cao hơn khi khách tìm."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Airbnb Resource Center",
        "detail": "Không gấp: trả lời trong vòng 12 giờ, càng sớm càng tốt",
        "illus": "mobile-phone",
        "around": [
          "bell",
          "alarm-clock"
        ],
        "icon": "bell"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Airbnb's host guide sets the bar.",
          "sub": "Trang hướng dẫn chủ nhà của Airbnb đặt mốc."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not urgent? Within twelve hours is reasonable. Sooner is better.",
          "sub": "Câu hỏi không gấp: trong vòng 12 giờ là hợp lý, càng sớm càng tốt.",
          "keys": [
            "12 giờ"
          ]
        }
      ],
      "ref": "p2"
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
            "id": "c-bell",
            "t": "illus",
            "name": "bell",
            "x": 3996,
            "y": 450,
            "size": 100,
            "at": "l1:notifications"
          },
          {
            "id": "c-on",
            "t": "text",
            "text": "Bật thông báo: app + điện thoại",
            "x": 4116,
            "y": 470,
            "size": 46,
            "at": "l1:notifications",
            "hl": [
              {
                "text": "Bật thông báo",
                "at": "l1:Turn on"
              }
            ]
          },
          {
            "id": "c-near",
            "t": "text",
            "text": "Để máy gần, bật chuông",
            "x": 4116,
            "y": 550,
            "size": 46,
            "at": "l2:ringer",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So turn on notifications, in the app and in your phone settings.",
          "sub": "Vậy bật thông báo, trong ứng dụng và trong cài đặt điện thoại.",
          "keys": [
            "bật thông báo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep the phone close, ringer on. A silent phone is a closed door.",
          "sub": "Để máy gần mình, bật chuông. Điện thoại im lặng là cửa đóng then cài."
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
            "at": "l3",
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
            "text": "② 20:20 · Hội An: câu mở đầu",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "red-paper-lantern",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "Thứ Tư 20:20 · homestay cô Hoa",
            "icon": "red-paper-lantern"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "“Free next weekend? Far from town?”",
            "x": 5964,
            "y": 170,
            "size": 38,
            "at": "l2:free",
            "color": "muted"
          },
          {
            "id": "d-bad",
            "t": "text",
            "text": "We would like to inform you that…",
            "x": 5964,
            "y": 250,
            "size": 40,
            "at": "l3:inform"
          },
          {
            "id": "d-badx",
            "t": "strike",
            "over": "d-bad",
            "at": "l4:letter"
          },
          {
            "id": "d-hi",
            "t": "text",
            "text": "Hi Sam, thanks for reaching out!",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l5:Hi Sam",
            "color": "accent",
            "hl": [
              {
                "text": "Hi Sam",
                "at": "l5:name"
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
          "say": "Second stop, twenty past eight, Hội An. Meet Cô Hoa, who has three rooms for guests.",
          "sub": "Chặng hai, tám giờ hai mươi, Hội An. Đây là cô Hoa, có ba phòng cho khách.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam's message: is your room free next weekend? Is it far from the old town?",
          "sub": "Tin của Sam: cuối tuần sau còn phòng không? Có xa phố cổ không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Should I start with: we would like to inform you that?",
          "sub": "Hay mở đầu bằng: “We would like to inform you that…” nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That sounds like a letter from the ward office. Travellers prefer a friendly, chatty voice.",
          "sub": "Nghe như công văn phường gửi xuống. Khách du lịch thích giọng thân thiện, như nói chuyện.",
          "keys": [
            "thân thiện"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Start with the name and a thank you: Hi Sam, thanks for reaching out! One line is enough.",
          "sub": "Mở bằng tên khách và lời cảm ơn: “Hi Sam, thanks for reaching out!” Một câu là đủ.",
          "keys": [
            "Một câu là đủ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
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
            "fit": "D",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
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
            "id": "d-yes",
            "t": "text",
            "text": "Yes, the room is available…",
            "x": 5964,
            "y": 430,
            "size": 44,
            "at": "l3:second sentence",
            "color": "accent"
          },
          {
            "id": "d-10",
            "t": "text",
            "text": "about a ten minute walk",
            "x": 5964,
            "y": 500,
            "size": 44,
            "at": "l4:walking time",
            "color": "accent",
            "hl": [
              {
                "text": "ten minute",
                "at": "l4:walking time"
              }
            ]
          },
          {
            "id": "d-near",
            "t": "text",
            "text": "very near",
            "x": 6544,
            "y": 500,
            "size": 44,
            "at": "l4:very near",
            "color": "muted"
          },
          {
            "id": "d-nearx",
            "t": "strike",
            "over": "d-near",
            "at": "l4:very near+500"
          },
          {
            "id": "d-full",
            "t": "text",
            "text": "Hết phòng? → kèm ngày khác",
            "x": 5964,
            "y": 580,
            "size": 46,
            "at": "l5:Fully booked",
            "hl": [
              {
                "text": "kèm ngày khác",
                "at": "l5:following weekend"
              }
            ]
          },
          {
            "id": "d-many",
            "t": "text",
            "text": "Nhiều ý → mỗi ý một dòng",
            "x": 5964,
            "y": 660,
            "size": 46,
            "at": "l5:several",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Hi Sam, thanks for reaching out! Yes, the room is available from Friday to Sunday.",
          "sub": "Chào Sam, cảm ơn bạn đã nhắn! Có, phòng còn trống từ thứ Sáu đến Chủ nhật.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "It's about a ten minute walk to the old town.",
          "sub": "Đi bộ khoảng mười phút là tới phố cổ.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Whatever they asked, answer it in the second sentence.",
          "sub": "Khách hỏi gì, trả lời ngay ở câu thứ hai.",
          "keys": [
            "câu thứ hai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Real walking time beats very near. Very near can mean anything, even two bus rides.",
          "sub": "Thời gian đi thật hơn hẳn chữ “very near”. Gần là gần cỡ nào, có khi hai chuyến xe buýt."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Fully booked? Unfortunately, those dates are booked, but the following weekend is free. Several questions? One line each.",
          "sub": "Hết phòng thì: “those dates are booked, but the following weekend is free.” Hỏi nhiều ý? Mỗi ý một dòng."
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
            "text": "③ 20:40 · Đà Lạt: nói “không”",
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
                "basket",
                "t-shirt"
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
            "at": "l1",
            "caption": "Thứ Tư 20:40 · căn hộ Dũng",
            "icon": "basket"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Sam: “washing machine?”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l1:washing machine"
          },
          {
            "id": "e-bad",
            "t": "text",
            "text": "“we are not having in the room…”",
            "x": 7932,
            "y": 260,
            "size": 42,
            "at": "l2:having",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop, back in Đà Lạt. Sam asks Dũng: is there a washing machine?",
          "sub": "Chặng ba, về Đà Lạt. Sam hỏi Dũng: phòng có máy giặt không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Dear guest, about the washing machine, we are not having in the room, but there is the service of laundry with the fee.",
          "sub": "Thưa quý khách, về máy giặt, phòng không đang có, nhưng có dịch vụ giặt với phí.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hmm. Sam needs to read that twice, like a tax form.",
          "sub": "Hừm. Sam phải đọc hai lần, như đọc tờ khai thuế."
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Tin trả lời của Dũng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“we are not having… with the fee”",
        "right": "There's no washing machine, but we offer a laundry service",
        "wrongIllus": "confused-face",
        "rightIllus": "basket"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: a tangle.",
          "sub": "Trước: một mớ chữ rối."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: no washing machine, but we offer a laundry service for a small fee.",
          "sub": "Sau: phòng không có máy giặt, nhưng nhà có dịch vụ giặt đồ, phí nhỏ.",
          "keys": [
            "dịch vụ giặt đồ"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-no",
            "t": "text",
            "text": "There's no washing machine,",
            "x": 7932,
            "y": 360,
            "size": 44,
            "at": "l1:says no"
          },
          {
            "id": "e-but",
            "t": "text",
            "text": "but we offer a laundry service.",
            "x": 7932,
            "y": 425,
            "size": 44,
            "at": "l1:alternative",
            "color": "accent",
            "hl": [
              {
                "text": "but",
                "at": "l1:alternative"
              }
            ]
          },
          {
            "id": "e-how",
            "t": "text",
            "text": "Just leave your clothes in the basket.",
            "x": 7932,
            "y": 490,
            "size": 40,
            "at": "l2:basket"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Nói “không” rõ, kèm cách khác",
            "x": 7932,
            "y": 600,
            "size": 58,
            "at": "l3:Say no",
            "color": "accent",
            "hl": [
              {
                "text": "kèm cách khác",
                "at": "l3:another way"
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
          "say": "It says no plainly, then offers an alternative right away.",
          "sub": "Bản sau nói thẳng “không”, rồi đưa ngay cách khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And shows how: just leave your clothes in the basket, and we'll return them the next day.",
          "sub": "Và chỉ luôn cách dùng: để đồ vào giỏ, hôm sau tụi mình trả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say no clearly, and add another way.",
          "sub": "Nói “không” rõ ràng, kèm ngay một cách khác.",
          "keys": [
            "kèm ngay một cách khác"
          ]
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
            "text": "④ 21:00 · Điểm mạnh thật",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Hỏi đường → We can arrange a taxi.",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l2:taxi"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Có con nhỏ → The garden is safe.",
            "x": 60,
            "y": 1330,
            "size": 42,
            "at": "l3:children"
          },
          {
            "id": "f-max",
            "t": "text",
            "text": "Chọn 1, tối đa 2",
            "x": 60,
            "y": 1410,
            "size": 56,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "tối đa 2",
                "at": "l3:at most two"
              }
            ]
          },
          {
            "id": "f-taxi",
            "t": "illus",
            "name": "oncoming-taxi",
            "x": 1300,
            "y": 1240,
            "size": 120,
            "at": "l2:taxi"
          },
          {
            "id": "f-kid",
            "t": "illus",
            "name": "playground-slide",
            "x": 1450,
            "y": 1240,
            "size": 120,
            "at": "l3:children"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop, nine p.m. After the main answer, add one strong point that fits this guest.",
          "sub": "Chặng bốn, chín giờ tối. Sau câu trả lời chính, thêm một điểm mạnh hợp với khách này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Asking about the journey? We can arrange a taxi from the airport.",
          "sub": "Khách hỏi đường đi? “We can arrange a taxi from the airport.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Coming with children? The garden is safe for children to play in. Pick one, at most two.",
          "sub": "Đi cùng con nhỏ? “The garden is safe for children to play in.” Chọn một, tối đa hai.",
          "keys": [
            "tối đa hai"
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
            "at": "l3",
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
            "y": 1390,
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
                "motor-scooter"
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
            "at": "l1",
            "caption": "21:00 · phòng nhìn ra đường",
            "icon": "motor-scooter"
          },
          {
            "id": "f-myth",
            "t": "text",
            "text": "Khen thật nhiều → dễ chốt",
            "x": 60,
            "y": 1520,
            "size": 46,
            "at": "l1:praise",
            "color": "muted"
          },
          {
            "id": "f-mythx",
            "t": "strike",
            "over": "f-myth",
            "at": "l1:honesty"
          },
          {
            "id": "f-st",
            "t": "text",
            "text": "faces the street → hear some traffic",
            "x": 60,
            "y": 1600,
            "size": 38,
            "at": "l2:traffic",
            "color": "accent"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Hứa đúng điều có",
            "x": 60,
            "y": 1710,
            "size": 60,
            "at": "l4:Promise",
            "color": "accent",
            "hl": [
              {
                "text": "điều có",
                "at": "l4:what you have"
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
          "say": "Remember the opening guess? More praise isn't the key. Airbnb stresses honesty.",
          "sub": "Nhớ câu đoán mở đầu chứ? Khen nhiều không phải chìa khoá. Airbnb nhấn mạnh minh bạch.",
          "keys": [
            "minh bạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The room faces the street, so you may hear some traffic in the morning.",
          "sub": "Phòng nhìn ra đường nên buổi sáng có thể nghe tiếng xe.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Light sleepers can ask for another room right from the start. No nasty surprise at dawn.",
          "sub": "Người ngủ nhạy xin phòng khác ngay từ đầu. Khỏi bị tiếng còi đánh thức lúc rạng sáng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Promise only what you have, and the guest won't feel let down.",
          "sub": "Hứa đúng điều có, khách đến không hụt hẫng.",
          "keys": [
            "Hứa đúng điều có"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Trả lời nhanh, đúng câu hỏi… mà khách vẫn bực?",
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
          "say": "A fast reply, a correct answer, and still an annoyed guest?",
          "sub": "Trả lời nhanh, đúng câu hỏi, mà khách vẫn bực?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 21:30 · Nói trước nội quy",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "thú cưng · tiệc · hút thuốc",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:pets"
          },
          {
            "id": "g-r2",
            "t": "text",
            "text": "giờ yên tĩnh · giờ · số khách",
            "x": 2028,
            "y": 1330,
            "size": 42,
            "at": "l2:quiet hours"
          },
          {
            "id": "g-party",
            "t": "text",
            "text": "Just so you know: no parties.",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l3:Just so you know",
            "color": "accent",
            "hl": [
              {
                "text": "Just so you know",
                "at": "l3:Just so you know"
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
          "say": "Fifth stop, nine thirty. Airbnb says house rules help guests decide before they book.",
          "sub": "Chặng năm, chín rưỡi. Airbnb nói nội quy giúp khách biết chỗ ở có hợp không trước khi đặt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pets, parties, smoking, quiet hours, check in and check out times, and the maximum number of guests.",
          "sub": "Thú cưng, tiệc, hút thuốc, giờ yên tĩnh, giờ nhận và trả phòng, số khách tối đa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If a question touches one, say it now: Just so you know, we don't allow parties.",
          "sub": "Câu hỏi chạm tới mục nào, nói luôn: “Just so you know, we don't allow parties.”"
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "21:40 · tin cặp đôi",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Yes, parking available” rồi thôi",
          "why": "Không nhắc tầng ba, không thang máy: hôm đến, hai người kéo hai vali lớn lên cầu thang.",
          "rule": "Điều khách sẽ bất ngờ, nói trước khi khách đặt"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "A couple asks about car parking. Easy. Yes, parking available. Send!",
          "sub": "Một cặp đôi hỏi chỗ đỗ ô tô. Dễ. “Yes, parking available.” Gửi!",
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
          "say": "Fast forward to Saturday: two big suitcases, third floor, no lift. Why didn't the message say so?",
          "sub": "Tua tới thứ Bảy: hai vali lớn, tầng ba, không thang máy. Sao trong tin không nói?",
          "keys": [
            "tầng ba, không thang máy"
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
          "say": "Please note that the apartment is on the third floor and there is no lift.",
          "sub": "Xin lưu ý căn hộ ở tầng ba và không có thang máy.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "We're happy to help carry your bags.",
          "sub": "Tụi mình sẵn lòng giúp xách hành lý.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
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
            "id": "g-lug",
            "t": "illus",
            "name": "luggage",
            "x": 2028,
            "y": 1520,
            "size": 100,
            "at": "l1:bags"
          },
          {
            "id": "g-note",
            "t": "text",
            "text": "Please note that… no lift.",
            "x": 2148,
            "y": 1540,
            "size": 46,
            "at": "l1:Please note",
            "color": "accent",
            "hl": [
              {
                "text": "Please note that",
                "at": "l1:Please note"
              }
            ]
          },
          {
            "id": "g-help",
            "t": "text",
            "text": "+ We're happy to help.",
            "x": 2148,
            "y": 1610,
            "size": 44,
            "at": "l1:help"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Bất ngờ? → nói trước khi đặt",
            "x": 2028,
            "y": 1720,
            "size": 56,
            "at": "l2:surprise",
            "color": "accent",
            "hl": [
              {
                "text": "nói trước",
                "at": "l2:before"
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
          "say": "Please note that: gentle, but clear. Then a hand: we're happy to help carry your bags.",
          "sub": "“Please note that…”: nhẹ mà rõ. Rồi chìa tay: “We're happy to help carry your bags.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Anything that would surprise the guest, say it before they book.",
          "sub": "Điều gì khách sẽ bất ngờ, hãy nói trước khi khách đặt.",
          "keys": [
            "nói trước khi khách đặt"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑥ 22:00 · Kết bằng lời mời",
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
                "label": "Cách A: “Yes.”",
                "ok": false
              },
              "right": {
                "label": "Cách B: trả lời + mời",
                "ok": true
              }
            },
            "at": "l2:mountain",
            "caption": "Thứ Tư 22:00 · Sam hỏi view núi",
            "icon": "snow-capped-mountain"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: “Yes.” → mở trang khác",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l3:other places",
            "color": "coral",
            "hl": [
              {
                "text": "trang khác",
                "at": "l3:other places"
              }
            ]
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: gửi ảnh? → hỏi giờ → đặt",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l4:photo",
            "color": "accent",
            "hl": [
              {
                "text": "đặt",
                "at": "l4:books"
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
          "say": "Sixth stop, ten p.m. Sam's last question for Dũng.",
          "sub": "Chặng sáu, mười giờ tối. Câu hỏi cuối của Sam cho Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Does the room have a mountain view?",
          "sub": "Phòng có nhìn ra núi không?",
          "face": "happy"
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Yes.",
          "sub": "Có.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "sam",
          "say": "Okay... I'll check some other places.",
          "sub": "Ừm… để mình xem thêm vài chỗ khác.",
          "phase": "a",
          "face": "thinking"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Yes, the room has a mountain view from the balcony. Would you like me to send a photo?",
          "sub": "Có, phòng nhìn ra núi từ ban công. Bạn có muốn mình gửi ảnh không?",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "If the dates suit you, you can book directly in the app.",
          "sub": "Nếu hợp ngày, bạn có thể đặt ngay trên ứng dụng.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "b3",
          "lang": "en",
          "who": "sam",
          "say": "Yes please! And what time is check in?",
          "sub": "Gửi mình nhé! Mà mấy giờ nhận phòng vậy?",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Way A: Sam has nothing more to ask, opens other places, and never comes back.",
          "sub": "Cách A: Sam chẳng biết hỏi gì thêm, mở trang nơi khác để so, rồi không quay lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Way B: a photo, a question about check in, and then Sam books.",
          "sub": "Cách B: nhận ảnh, hỏi thêm giờ nhận phòng, rồi Sam đặt."
        }
      ],
      "sfx": [
        {
          "at": "b3",
          "key": "tin-den",
          "offsetMs": 200
        }
      ],
      "ref": "p17"
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
            "id": "h-q",
            "t": "text",
            "text": "Anything else you'd like to know?",
            "x": 3996,
            "y": 1510,
            "size": 42,
            "at": "l1:anything else"
          },
          {
            "id": "h-bk",
            "t": "text",
            "text": "…you can book directly through the app.",
            "x": 3996,
            "y": 1570,
            "size": 38,
            "at": "l1:book directly",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Trả lời xong, mở bước tiếp",
            "x": 3996,
            "y": 1690,
            "size": 58,
            "at": "l2:next step",
            "color": "accent",
            "hl": [
              {
                "text": "mở bước tiếp",
                "at": "l2:next step"
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
          "say": "End with a question and an invitation: Is there anything else you'd like to know? If everything looks good, you can book directly through the app.",
          "sub": "Kết bằng một câu hỏi và một lời mời: “Bạn còn muốn biết gì thêm không? Nếu mọi thứ ổn, bạn có thể đặt ngay trên ứng dụng.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Answer, then open the next step.",
          "sub": "Trả lời xong, mở luôn bước tiếp theo.",
          "keys": [
            "mở luôn bước tiếp theo"
          ]
        }
      ],
      "ref": "p16,p18"
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
            "text": "⑦ 22:30 · Hội An: lưu mẫu",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "airplane-arrival",
                "card-file-box"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "hoa",
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
            "caption": "Thứ Tư 22:30 · mẫu “Airport”",
            "icon": "airplane-arrival"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l2:Step one",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1252,
            "size": 56,
            "at": "l2:Step one+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Gom 3 câu hỏi nhiều nhất",
            "x": 6029,
            "y": 1262,
            "size": 44,
            "at": "l2:Step one+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1355,
            "w": 44,
            "h": 44,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1337,
            "size": 56,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Viết một mẫu",
            "x": 6029,
            "y": 1347,
            "size": 44,
            "at": "l3+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1440,
            "w": 44,
            "h": 44,
            "at": "l4:saves",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1422,
            "size": 56,
            "at": "l4:saves+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Lưu tên “Airport”",
            "x": 6029,
            "y": 1432,
            "size": 44,
            "at": "l4:saves+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1525,
            "w": 44,
            "h": 44,
            "at": "l4:rereads",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1507,
            "size": 56,
            "at": "l4:rereads+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Đọc lại, sửa trước khi gửi",
            "x": 6029,
            "y": 1517,
            "size": 44,
            "at": "l4:rereads+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop, back in Hội An. Airbnb suggests saving common answers as quick replies. I call them the template drawer.",
          "sub": "Chặng bảy, về Hội An. Airbnb gợi ý lưu câu trả lời hay gặp làm tin nhắn nhanh. Đét gọi là “ngăn kéo mẫu”.",
          "keys": [
            "ngăn kéo mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Guests keep asking Cô Hoa about Đà Nẵng airport. Step one: she lists the top three questions: the route, the fare, the travel time.",
          "sub": "Khách hay hỏi cô Hoa đường từ sân bay Đà Nẵng. Bước một: gom ba câu hỏi nhiều nhất: đường đi, giá xe, thời gian."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Hi first name, thanks for asking! We can book a taxi from Da Nang airport for you. Just send us your flight number.",
          "sub": "Chào [tên], cảm ơn bạn đã hỏi! Tụi mình đặt taxi từ sân bay Đà Nẵng cho bạn. Bạn chỉ cần gửi số hiệu chuyến bay.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She saves it as Airport. And each time, she rereads it and fixes it for that guest.",
          "sub": "Cô lưu mẫu tên “Airport”. Mỗi lần dùng, cô đọc lại và sửa cho đúng người hỏi."
        }
      ],
      "ref": "p19,p20"
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
          }
        ],
        "items": [
          {
            "id": "i-auto",
            "t": "text",
            "text": "Tự điền tên khách",
            "x": 5964,
            "y": 1630,
            "size": 46,
            "at": "l1:fill in",
            "hl": [
              {
                "text": "Tự điền",
                "at": "l1:fill in"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Soạn một lần, sửa cho đúng người",
            "x": 5964,
            "y": 1720,
            "size": 54,
            "at": "l2:once",
            "color": "accent",
            "hl": [
              {
                "text": "đúng người",
                "at": "l2:right person"
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
          "say": "Templates can fill in the guest's name from the booking. Edit Airbnb's own, or write yours.",
          "sub": "Mẫu tự điền được tên khách từ thông tin đặt phòng. Sửa mẫu có sẵn của Airbnb, hoặc tự viết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write it once, then tailor it for the right person every time.",
          "sub": "Soạn một lần, mỗi lần gửi sửa cho đúng người.",
          "keys": [
            "sửa cho đúng người"
          ]
        }
      ],
      "ref": "p19,p21"
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
            "text": "23:00 · Cùng tối thứ Tư",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "party-popper"
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
            "at": "l1",
            "caption": "Thứ Tư 23:00 · Đà Lạt",
            "icon": "party-popper"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l3:name",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1252,
            "size": 56,
            "at": "l3:name+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Chào bằng tên, cảm ơn",
            "x": 7997,
            "y": 1262,
            "size": 40,
            "at": "l3:name+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1342,
            "w": 44,
            "h": 44,
            "at": "l3:second sentence",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1324,
            "size": 56,
            "at": "l3:second sentence+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Trả lời ở câu thứ hai",
            "x": 7997,
            "y": 1334,
            "size": 40,
            "at": "l3:second sentence+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1414,
            "w": 44,
            "h": 44,
            "at": "l3:strong point",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1396,
            "size": 56,
            "at": "l3:strong point+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Một điểm mạnh đúng ý",
            "x": 7997,
            "y": 1406,
            "size": 40,
            "at": "l3:strong point+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1486,
            "w": 44,
            "h": 44,
            "at": "l3:surprises",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1468,
            "size": 56,
            "at": "l3:surprises+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Nói trước điều bất ngờ",
            "x": 7997,
            "y": 1478,
            "size": 40,
            "at": "l3:surprises+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1558,
            "w": 44,
            "h": 44,
            "at": "l3:invitation",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1540,
            "size": 56,
            "at": "l3:invitation+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Câu hỏi mở + lời mời",
            "x": 7997,
            "y": 1550,
            "size": 40,
            "at": "l3:invitation+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eleven p.m., same Wednesday. Ting! Sam has booked.",
          "sub": "Mười một giờ đêm, vẫn tối thứ Tư ấy. Ting! Sam đã đặt phòng.",
          "keys": [
            "Sam đã đặt phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Booked! And she knows about the traffic and the stairs.",
          "sub": "Đặt rồi! Mà khách biết trước cả tiếng xe lẫn cầu thang.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The checklist: name and thanks, the answer in the second sentence, one strong point, surprises told early, and an open question with an invitation.",
          "sub": "Danh sách kiểm: tên và lời cảm ơn, trả lời ở câu thứ hai, một điểm mạnh, nói trước điều bất ngờ, câu hỏi mở và lời mời."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tin-den",
          "offsetMs": 1800
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": "A",
            "ms": 1100
          },
          {
            "at": "l2",
            "fit": "J",
            "ms": 1100
          }
        ],
        "items": [
          {
            "id": "j-ca",
            "t": "text",
            "text": "Lời chào cao hơn mâm cỗ…",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l2:greeting",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… lời thật giữ được khách",
            "x": 7972,
            "y": 1730,
            "size": 50,
            "at": "l2:truth",
            "hl": [
              {
                "text": "lời thật",
                "at": "l2:truth"
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
          "say": "So, the opening guess: more praise, more bookings? No. Honesty, and a clear invitation.",
          "sub": "Vậy câu đoán mở đầu: khen nhiều thì dễ chốt? Sai. Minh bạch, và một lời mời rõ.",
          "keys": [
            "Minh bạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A greeting is worth more than a feast. And the truth keeps the guest.",
          "sub": "“Lời chào cao hơn mâm cỗ.” Còn lời thật thì giữ được khách.",
          "keys": [
            "lời thật"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "at": "l1:second sentence",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:surprise",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:invitation",
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
            "x": 6664,
            "y": 330,
            "at": "l1:second sentence"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3468,
            "y": 1260,
            "at": "l2:surprise"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1260,
            "at": "l3:invitation"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: 5 phần → lưu mẫu",
            "x": 2028,
            "y": 560,
            "size": 38,
            "at": "l4:Try",
            "hl": [
              {
                "text": "lưu",
                "at": "l4:save"
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
          "say": "So: thank them by name, and answer in the second sentence.",
          "sub": "Tóm lại: chào bằng tên, cảm ơn, trả lời ở câu thứ hai.",
          "keys": [
            "câu thứ hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One honest strong point, and any surprise told before they book.",
          "sub": "Một điểm mạnh thật, và điều bất ngờ nói trước khi khách đặt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Close with a question and an invitation.",
          "sub": "Kết bằng một câu hỏi và một lời mời.",
          "keys": [
            "lời mời"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: take your most common question, write the five parts, and save it as a quick reply.",
          "sub": "Làm ngay: lấy câu khách hỏi nhiều nhất, viết đủ năm phần, lưu thành tin nhắn nhanh.",
          "keys": [
            "lưu thành tin nhắn nhanh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: check in instructions, so guests never get lost.",
          "sub": "Bài tiếp: hướng dẫn nhận phòng sao cho khách không lạc."
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
        "q": "Dung answered the parking question but missed one detail, what problem followed?",
        "options": [
          "The couple cancelled the booking, because the price was higher than expected",
          "The couple could not find parking, because the car park was already full",
          "The couple had to carry heavy suitcases up the stairs without a lift"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "luggage",
        "why": "Dũng trả lời đúng câu hỏi đỗ xe nhưng không nhắc căn hộ ở tầng cao, không có thang máy. Hai vị khách phải kéo vali lớn lên cầu thang và hỏi vì sao không được báo trước."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Dung answered the parking question but missed one detail, what problem followed?",
          "sub": "Dũng trả lời câu hỏi đỗ xe nhưng bỏ sót một chi tiết, chuyện gì xảy ra sau đó?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The couple had to carry two big suitcases up the stairs to the third floor.",
          "sub": "Cặp đôi phải kéo hai vali lớn lên cầu thang tới tầng ba."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[23]"
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
          "say": "One question, five parts, one quick reply. Then try the forty questions below.",
          "sub": "Một câu hỏi, năm phần, một tin nhắn nhanh. Rồi thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TỐI THỨ TƯ 20:00 → 23:00: Sam nhắn hỏi vài chỗ cùng lúc (căn hộ Dũng ở Đà Lạt, homestay cô Hoa ở Hội An). 20:05 trả lời nhanh (12 giờ, bật thông báo) → 20:20 Hội An câu mở đầu, trả lời ở câu thứ hai (mười phút đi bộ) → 20:40 Đà Lạt máy giặt, nói “không” kèm cách khác (BRK-04 trước–sau) → 21:00 một điểm mạnh, phòng nhìn ra đường → 21:30 nội quy + “Khoan đã!” tin “Yes, parking available” (tua tới thứ Bảy: tầng ba, không thang máy) → 22:00 view núi hai cách → 22:30 cô Hoa lưu mẫu “Airport” → 23:00 Sam đặt phòng (khép vòng). Hook HOOK-21: “Khen càng nhiều càng dễ chốt?” → Sai, gọi lại ở ô F và kết. Nhân vật: Dũng, Sam, Cô Hoa — w145/_series/en-homestay-airbnb-hosts.md. Cảnh ngắt nhịp: BRK-09 (nguồn Airbnb, 12 giờ), BRK-04, BRK-07. Ca dao: “Lời chào cao hơn mâm cỗ”. Câu đố questions[23].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
