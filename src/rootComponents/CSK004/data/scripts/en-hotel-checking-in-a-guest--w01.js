// en-hotel-checking-in-a-guest--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-hotel-checking-in-a-guest--w01",
  "unit": {
    "audience": "en-hotel-front-desk-staff",
    "slug": "en-hotel-checking-in-a-guest",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Làm thủ tục nhận phòng cho khách nước ngoài nói thế nào?",
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
            "fit": [
              "a-pp"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-pp",
            "t": "illus",
            "name": "passport-control",
            "x": 80,
            "y": 90,
            "size": 240,
            "at": 0
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "7:00 sáng · trên quầy",
            "x": 380,
            "y": 150,
            "size": 58,
            "at": "l1:seven"
          },
          {
            "id": "a-q1",
            "t": "text",
            "text": "Hộ chiếu trước hay tên trước?",
            "x": 60,
            "y": 400,
            "size": 50,
            "at": "l3:passport first",
            "hl": [
              {
                "text": "hay tên trước",
                "at": "l3:name first"
              }
            ]
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "Xin cọc sao khỏi mất lòng?",
            "x": 60,
            "y": 490,
            "size": 50,
            "at": "l4:deposit",
            "color": "coral",
            "hl": [
              {
                "text": "khỏi mất lòng",
                "at": "l4:upsetting"
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
          "say": "A passport lands on the front desk. Seven a.m.",
          "sub": "Một cuốn hộ chiếu đặt lên quầy lễ tân. Bảy giờ sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Its owner just stepped out of a taxi after a long flight, and is waiting for you.",
          "sub": "Chủ nhân vừa xuống taxi sau chuyến bay dài, và đang nhìn bạn chờ đợi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You know the job. But the English tumbles: passport first, or name first?",
          "sub": "Việc thì bạn biết. Nhưng câu tiếng Anh cứ lộn xộn: xin hộ chiếu trước hay hỏi tên trước?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And how do you ask for a deposit without upsetting anyone?",
          "sub": "Còn chuyện tiền cọc, nói sao cho khỏi mất lòng?",
          "keys": [
            "khỏi mất lòng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "go-bang",
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
                  "enter": "walk",
                  "at": "l1",
                  "face": "worried"
                }
              ],
              "props": [
                "luggage",
                "sunrise"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Một tháng sau · 7:00 · sảnh khách sạn",
            "icon": "luggage"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tiên học lễ, hậu học văn”",
            "x": 60,
            "y": 600,
            "size": 54,
            "at": "l4:manners",
            "color": "accent",
            "hl": [
              {
                "text": "học lễ",
                "at": "l4:manners"
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
          "say": "Pull back. It belongs to Sam Whitfield, back at the Lotus Hotel a month later.",
          "sub": "Lùi ra xa. Cuốn hộ chiếu của chị Sam Whitfield, quay lại khách sạn Lotus một tháng sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With her husband this time, straight off a night flight. At the desk: Dũng, the new receptionist.",
          "sub": "Lần này đi cùng chồng, vừa xuống chuyến bay đêm. Ở quầy là Dũng, lễ tân mới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Good morning. Can we check in? We're exhausted.",
          "sub": "Chào em. Cho chị nhận phòng nhé? Hai vợ chồng mệt rã rời.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The old school motto: first learn manners, then learn letters.",
          "sub": "Nhà trường xưa dạy: “Tiên học lễ, hậu học văn.”",
          "keys": [
            "Tiên học lễ, hậu học văn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "At the front desk too: courtesy first, paperwork after.",
          "sub": "Ở quầy lễ tân cũng thế: lễ trước, thủ tục sau.",
          "keys": [
            "lễ trước, thủ tục sau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 800
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
            "text": "Nói gì, thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:english",
            "hl": [
              {
                "text": "thứ tự nào",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 220,
            "w": 260,
            "h": 90,
            "at": "l2:greet",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2308,
            "y": 220,
            "w": 260,
            "h": 90,
            "at": "l2:booking",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2588,
            "y": 220,
            "w": 260,
            "h": 90,
            "at": "l2:documents",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 2868,
            "y": 220,
            "w": 260,
            "h": 90,
            "at": "l2:sign",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3148,
            "y": 220,
            "w": 260,
            "h": 90,
            "at": "l3:key",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s5",
            "t": "box",
            "x": 3428,
            "y": 220,
            "w": 260,
            "h": 90,
            "at": "l3:way",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Chào",
            "x": 2048,
            "y": 238,
            "size": 40,
            "at": "l2:greet+150"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "Đặt phòng",
            "x": 2328,
            "y": 238,
            "size": 40,
            "at": "l2:booking+150"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "Giấy tờ",
            "x": 2608,
            "y": 238,
            "size": 40,
            "at": "l2:documents+150"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "Ký phiếu",
            "x": 2888,
            "y": 238,
            "size": 40,
            "at": "l2:sign+150"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "Chìa khoá",
            "x": 3168,
            "y": 238,
            "size": 40,
            "at": "l3:key+150"
          },
          {
            "id": "b-st5",
            "t": "text",
            "text": "Chỉ đường",
            "x": 3448,
            "y": 238,
            "size": 40,
            "at": "l3:way+150"
          },
          {
            "id": "b-info",
            "t": "text",
            "text": "+ 3–4 thông tin cần nhất",
            "x": 3108,
            "y": 330,
            "size": 40,
            "at": "l3:three",
            "color": "muted"
          },
          {
            "id": "b-first",
            "t": "text",
            "text": "Gặp trực tiếp lần đầu = ấn tượng",
            "x": 2028,
            "y": 450,
            "size": 50,
            "at": "l4:first time",
            "color": "accent",
            "hl": [
              {
                "text": "ấn tượng",
                "at": "l4:impression"
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
          "say": "So how does a check in go in English, and in what order?",
          "sub": "Vậy check-in bằng tiếng Anh nói gì, theo thứ tự nào?",
          "keys": [
            "theo thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fixed sequence: greet, find the booking, ask for documents, sign the form.",
          "sub": "Một trình tự cố định: chào, tìm đặt phòng, xin giấy tờ, ký phiếu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the key with three or four key facts, and the way up to the room.",
          "sub": "Rồi giao chìa khoá kèm ba bốn thông tin cần nhất, và chỉ đường lên phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It's the first time the guest meets you face to face, where the impression of the whole hotel is made.",
          "sub": "Đây là lần đầu khách gặp bạn trực tiếp, nơi ấn tượng về cả khách sạn được hình thành.",
          "keys": [
            "ấn tượng về cả khách sạn"
          ]
        }
      ],
      "ref": "intro,p20"
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
            "at": "a1",
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
            "text": "① 7:05 · Phòng chưa sẵn",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
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
                  "side": "right"
                }
              ],
              "left": {
                "label": "A: báo giờ rồi quay đi",
                "ok": false
              },
              "right": {
                "label": "B: báo giờ + lựa chọn",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Cách A · Cách B",
            "icon": "hourglass-done"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "A: báo giờ, quay đi",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "a1:afternoon",
            "color": "coral"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "→ ngồi sảnh nhìn đồng hồ",
            "x": 4036,
            "y": 240,
            "size": 42,
            "at": "l2:clock",
            "color": "muted"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "B: báo giờ + giữ vali",
            "x": 3996,
            "y": 320,
            "size": 48,
            "at": "b1:luggage",
            "color": "accent"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "→ cà phê, gọi khi sẵn",
            "x": 4036,
            "y": 390,
            "size": 42,
            "at": "b2:call",
            "hl": [
              {
                "text": "gọi khi sẵn",
                "at": "b2:ready"
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
          "say": "First stop: seven a.m., and the room isn't ready. Two versions of Dũng.",
          "sub": "Chặng một: bảy giờ sáng, phòng chưa sẵn. Hai phiên bản của Dũng.",
          "keys": [
            "phòng chưa sẵn"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Check in is in the afternoon.",
          "sub": "Nhận phòng là buổi chiều ạ.",
          "phase": "a"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Version A turns back to his screen. Two tired guests sit with their bags, watching the clock.",
          "sub": "Bản A quay lại màn hình. Hai vị khách mệt ngồi sảnh với vali, cứ vài phút lại nhìn đồng hồ."
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "I'm afraid you can't check in until the afternoon. May I store your luggage while you wait?",
          "sub": "Rất tiếc, chiều anh chị mới nhận phòng được. Em giữ hành lý giúp anh chị trong lúc chờ nhé?",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "There's a nice café nearby. I'll call you as soon as your room is ready.",
          "sub": "Gần đây có quán cà phê dễ thương. Phòng sẵn là em gọi anh chị ngay.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Version B: bags stored, a stroll, a coffee, and a call when the room is ready.",
          "sub": "Bản B: gửi vali, đi dạo, uống cà phê, và nhận cuộc gọi khi phòng sẵn sàng."
        }
      ],
      "ref": "p11,p12"
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
            "id": "c-ea",
            "t": "text",
            "text": "Nhận sớm: chỉ khi còn phòng",
            "x": 3996,
            "y": 490,
            "size": 46,
            "at": "l1:availability",
            "hl": [
              {
                "text": "còn phòng",
                "at": "l2:free"
              }
            ]
          },
          {
            "id": "c-rut",
            "t": "text",
            "text": "Lựa chọn luôn có sẵn",
            "x": 4856,
            "y": 690,
            "size": 52,
            "at": "l3:options",
            "color": "accent",
            "hl": [
              {
                "text": "luôn có sẵn",
                "at": "l3:always"
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
          "say": "If your hotel allows it: early check in is subject to availability.",
          "sub": "Nếu khách sạn cho phép: “Early check-in is subject to availability.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meaning, only if a suitable room is already free. Then: let me check what I can do for you right now.",
          "sub": "Nghĩa là chỉ khi có sẵn phòng phù hợp. Rồi: “Let me check what I can do for you right now.”",
          "keys": [
            "có sẵn phòng phù hợp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The room may not be ready, but options always are.",
          "sub": "Phòng chưa sẵn, nhưng lựa chọn thì luôn có sẵn.",
          "keys": [
            "lựa chọn thì luôn có sẵn"
          ]
        }
      ],
      "ref": "p11,p13"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
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
            "at": "l6:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 14:00 · Câu chào",
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
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
                "bellhop-bell",
                "laptop"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "medium",
                  "on": "sam",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:ready",
            "caption": "14:00 · phòng đã sẵn",
            "icon": "bellhop-bell"
          },
          {
            "id": "d-busy",
            "t": "text",
            "text": "Đang bận: “just a moment”",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:moment",
            "hl": [
              {
                "text": "just a moment",
                "at": "l3:moment"
              }
            ]
          },
          {
            "id": "d-sil",
            "t": "text",
            "text": "Đừng im lặng",
            "x": 5964,
            "y": 245,
            "size": 46,
            "at": "l4:silent",
            "color": "coral"
          },
          {
            "id": "d-back",
            "t": "text",
            "text": "Khách cũ: “Welcome back” + họ",
            "x": 5964,
            "y": 320,
            "size": 46,
            "at": "l5:back",
            "color": "accent",
            "hl": [
              {
                "text": "Welcome back",
                "at": "l5:back"
              }
            ]
          },
          {
            "id": "d-tired",
            "t": "text",
            "text": "“You must be tired…”",
            "x": 5964,
            "y": 395,
            "size": 46,
            "at": "l6:tired"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: two p.m. The room is ready, and Sam is back at the desk.",
          "sub": "Chặng hai: hai giờ chiều. Phòng đã sẵn, chị Sam quay lại quầy.",
          "keys": [
            "Chặng hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, the senior receptionist, still finishing with another guest.",
          "sub": "Đây là Thảo, lễ tân ca chính, đang dở việc với một khách khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Thank you for your patience. I'll be with you in just a moment.",
          "sub": "Cảm ơn chị đã chờ, em sẽ giúp chị ngay ạ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Busy? Don't go silent. One sentence, and the guest knows she's been seen.",
          "sub": "Đang bận? Đừng im lặng. Một câu thôi là khách biết mình đã được nhìn thấy.",
          "keys": [
            "Đừng im lặng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Good afternoon. Welcome back, Ms Whitfield. It's wonderful to see you again.",
          "sub": "Chào chị. Chào mừng chị quay lại, chị Whitfield. Rất vui được gặp lại chị.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "You must be tired after your journey.",
          "sub": "Chắc chị mệt sau chuyến đi lắm."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s08",
      "module": "BRK-10",
      "data": {
        "quote": "Khách thường hình thành ý kiến về khách sạn ngay trong phút đầu ở quầy",
        "mark": "phút đầu",
        "by": "Một tài liệu hướng dẫn cho lễ tân (tóm ý)",
        "illus": "hotel"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One receptionist guide says it plainly.",
          "sub": "Một tài liệu cho lễ tân nói gọn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Guests judge the hotel in the first minute.",
          "sub": "Khách đánh giá khách sạn ngay trong phút đầu.",
          "keys": [
            "phút đầu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p3"
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
            "id": "d-std",
            "t": "text",
            "text": "Chào + tên khách sạn + mời giúp",
            "x": 5964,
            "y": 490,
            "size": 44,
            "at": "l1:welcome",
            "color": "muted"
          },
          {
            "id": "d-eye",
            "t": "text",
            "text": "Ngẩng lên khỏi màn hình",
            "x": 6824,
            "y": 690,
            "size": 50,
            "at": "l2:screen",
            "color": "accent",
            "hl": [
              {
                "text": "Ngẩng lên",
                "at": "l2:look up"
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
          "say": "A first-time guest gets the standard: good evening, welcome to the Lotus Hotel. How may I help you?",
          "sub": "Khách lần đầu thì câu chuẩn: “Good evening, welcome to the Lotus Hotel. How may I help you?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And look up from the screen. Eyes first, keyboard later.",
          "sub": "Và ngẩng lên khỏi màn hình. Ánh mắt trước, bàn phím sau.",
          "keys": [
            "Ánh mắt trước, bàn phím sau"
          ]
        }
      ],
      "ref": "p1,p3"
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Đặt phòng · giấy tờ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
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
                "credit-card"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:booking",
            "caption": "14:03 · tại quầy",
            "icon": "identification-card"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Họ hoặc mã đặt phòng?",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l2:last name"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Nhắc lại: tên + đặt phòng",
            "x": 7932,
            "y": 245,
            "size": 48,
            "at": "l5:booking",
            "hl": [
              {
                "text": "Nhắc lại",
                "at": "l5:sure"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "“May I see your passport?”",
            "x": 7932,
            "y": 320,
            "size": 46,
            "at": "l6:passport",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: find the booking, then the documents.",
          "sub": "Chặng ba: tìm đặt phòng, rồi xin giấy tờ.",
          "keys": [
            "Chặng ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "May I have your last name or confirmation number, please?",
          "sub": "Chị cho em xin họ hoặc mã đặt phòng ạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Whitfield.",
          "sub": "Whitfield."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Ms Whitfield, a double room for two guests?",
          "sub": "Chị Whitfield, một phòng giường đôi cho hai người ạ?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Repeat the name with the booking, just to be sure.",
          "sub": "Nhắc lại tên kèm đặt phòng cho chắc.",
          "keys": [
            "Nhắc lại tên"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "I've found your reservation. May I see your passport, please?",
          "sub": "Em thấy đặt phòng rồi ạ. Cho em xem hộ chiếu nhé."
        }
      ],
      "ref": "p4,p5"
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
            "at": "l1",
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
            "id": "e-cc",
            "t": "text",
            "text": "“Credit card, please.” → khựng",
            "x": 7932,
            "y": 420,
            "size": 44,
            "at": "l2:why",
            "color": "coral"
          },
          {
            "id": "e-why",
            "t": "text",
            "text": "Xin gì → nói để làm gì",
            "x": 7932,
            "y": 510,
            "size": 54,
            "at": "l5:say",
            "color": "accent",
            "hl": [
              {
                "text": "để làm gì",
                "at": "l5:for"
              }
            ]
          },
          {
            "id": "e-dep",
            "t": "text",
            "text": "Cọc bao nhiêu: tuỳ khách sạn",
            "x": 8792,
            "y": 690,
            "size": 44,
            "at": "l6:depends",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Credit card, please.",
          "sub": "Thẻ tín dụng ạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Why do you need my card? I've already paid online.",
          "sub": "Sao lại cần thẻ của chị? Chị trả online rồi mà.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "It's only for extra charges, such as the minibar or room service. We'll settle it when you check out.",
          "sub": "Chỉ để cho các khoản phát sinh như minibar, gọi món lên phòng ạ. Mình thanh toán lúc trả phòng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam nods and hands it over. Better from the start: could I also have a credit card for any extra charges?",
          "sub": "Chị Sam gật đầu, đưa thẻ. Hay hơn thì nói ngay từ đầu: “Could I also have a credit card for any extra charges?”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Whatever you ask a guest for, say what it's for.",
          "sub": "Xin gì của khách, nói luôn để làm gì.",
          "keys": [
            "nói luôn để làm gì"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Whether to take a deposit, and how much, depends on your own hotel.",
          "sub": "Có xin cọc không, cọc bao nhiêu, là tuỳ quy định khách sạn bạn.",
          "keys": [
            "tuỳ quy định khách sạn bạn"
          ]
        }
      ],
      "ref": "p5,p6,p7"
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Phiếu và chữ ký",
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
                  "id": "thao",
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
                "memo",
                "pen"
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
                }
              ]
            },
            "at": "l1:form",
            "caption": "14:05 · phiếu đăng ký",
            "icon": "memo"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "“Could you fill in this form?”",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:fill"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Xác nhận ngày đi",
            "x": 60,
            "y": 1340,
            "size": 48,
            "at": "l3:checking out",
            "color": "accent",
            "hl": [
              {
                "text": "ngày đi",
                "at": "l3:sunday"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Lúc rẻ nhất để bắt lỗi",
            "x": 60,
            "y": 1420,
            "size": 46,
            "at": "l5:cheapest",
            "hl": [
              {
                "text": "rẻ nhất",
                "at": "l5:cheapest"
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
          "say": "Fourth stop: the form, with a request, not an order.",
          "sub": "Chặng bốn: phiếu đăng ký, kèm lời nhờ chứ không phải mệnh lệnh.",
          "keys": [
            "Chặng bốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Could you fill in this registration form, please?",
          "sub": "Chị điền giúp em phiếu đăng ký ạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "You're checking out on Sunday, is that right?",
          "sub": "Chị trả phòng Chủ nhật, đúng không ạ?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Yes, Sunday.",
          "sub": "Ừ, Chủ nhật.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "While the guest writes is the cheapest moment to catch a wrong date.",
          "sub": "Lúc khách đang điền là lúc rẻ nhất để phát hiện sai ngày.",
          "keys": [
            "lúc rẻ nhất"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Khi cần chữ ký",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Sign.” (đẩy phiếu sang)",
        "right": "“Could you sign here at the bottom, please? Thank you.”",
        "wrongIllus": "pen",
        "rightIllus": "writing-hand"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Sign. And a pushed form.",
          "sub": "Trước: “Sign.” Kèm cú đẩy phiếu."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: could you sign here at the bottom, please? Thank you.",
          "sub": "Sau: “Could you sign here at the bottom, please? Thank you.”",
          "keys": [
            "Thank you"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "f-sign",
            "t": "text",
            "text": "“Sign.”",
            "x": 60,
            "y": 1530,
            "size": 64,
            "at": "l1:order",
            "color": "muted"
          },
          {
            "id": "f-signx",
            "t": "strike",
            "over": "f-sign",
            "at": "l2:could"
          },
          {
            "id": "f-req",
            "t": "text",
            "text": "Could you… please? = lời nhờ",
            "x": 60,
            "y": 1630,
            "size": 48,
            "at": "l2:please",
            "color": "accent",
            "hl": [
              {
                "text": "lời nhờ",
                "at": "l2:request"
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
          "say": "The first is short and correct, but it sounds like an order.",
          "sub": "Câu trước ngắn, đúng việc, nhưng nghe như ra lệnh.",
          "keys": [
            "nghe như ra lệnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add could you and please, and an order becomes a request. A few more words, a whole lot warmer.",
          "sub": "Thêm “Could you… please?”, lệnh hoá thành lời nhờ. Dài thêm vài chữ, ấm hơn hẳn.",
          "keys": [
            "lệnh hoá thành lời nhờ"
          ]
        }
      ],
      "ref": "p9,p10"
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
          },
          {
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chìa khoá + vài ý",
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
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "key",
                "croissant"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:key",
            "caption": "14:07 · giao thẻ phòng",
            "icon": "key"
          },
          {
            "id": "g-405",
            "t": "text",
            "text": "405 = four oh five",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l3:digit",
            "color": "accent",
            "hl": [
              {
                "text": "four oh five",
                "at": "l3:four"
              }
            ]
          },
          {
            "id": "g-2k",
            "t": "text",
            "text": "2 khách → 2 chìa",
            "x": 2028,
            "y": 1350,
            "size": 48,
            "at": "l4:two room keys"
          },
          {
            "id": "g-bf",
            "t": "text",
            "text": "Ăn sáng 7–10 · tầng trệt",
            "x": 2028,
            "y": 1430,
            "size": 48,
            "at": "l5:breakfast",
            "hl": [
              {
                "text": "7–10",
                "at": "l5:seven"
              }
            ]
          },
          {
            "id": "g-wf",
            "t": "text",
            "text": "Wifi: thẻ trong bìa chìa",
            "x": 2028,
            "y": 1510,
            "size": 48,
            "at": "l6:wifi"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: the key, with a few facts attached.",
          "sub": "Chặng năm: chìa khoá, kèm vài thông tin.",
          "keys": [
            "Chặng năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Your room number is four oh five, on the fourth floor. Here is your key card.",
          "sub": "Phòng của chị số bốn không năm, tầng bốn. Thẻ phòng của chị đây ạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say room numbers digit by digit: four oh five.",
          "sub": "Số phòng đọc từng chữ số: “four oh five”.",
          "keys": [
            "từng chữ số"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And for the two of you, I'll give you two room keys.",
          "sub": "Hai anh chị thì em đưa hai thẻ phòng ạ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Breakfast is served from seven to ten in the restaurant on the ground floor.",
          "sub": "Bữa sáng phục vụ từ bảy đến mười giờ ở nhà hàng tầng trệt."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "The wifi password is on the card inside the key folder.",
          "sub": "Mật khẩu wifi ghi trên tấm thẻ trong bìa đựng chìa khoá."
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s16",
      "module": "BRK-06",
      "data": {
        "title": "Dũng định kể hết…",
        "items": [
          {
            "illus": "person-swimming",
            "text": "Hồ bơi"
          },
          {
            "illus": "person-lifting-weights",
            "text": "Phòng gym"
          },
          {
            "illus": "cocktail-glass",
            "text": "Quầy bar"
          },
          {
            "illus": "spiral-notepad",
            "text": "Và còn nữa…"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Pool, gym, bar, and so much more.",
          "sub": "Hồ bơi, phòng gym, quầy bar, và còn nữa…"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Dũng wants to tell Sam everything.",
          "sub": "Dũng muốn kể hết cho chị Sam nghe."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s17",
      "module": "DLG-01",
      "data": {
        "set": "hotel",
        "label": "14:08 · Dũng chen vào",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Kể hết mọi tiện ích",
          "why": "Khách vừa đi xa chỉ nhớ vài điều; tối lại gọi xuống hỏi đúng những điều đó.",
          "rule": "Nói gọn bốn ý, phần còn lại đưa tờ thông tin"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "And there's the pool, the gym, the bar hours, the spa, the laundry...",
          "sub": "Còn hồ bơi, phòng gym, giờ quầy bar, spa, giặt là…",
          "pose": "explain",
          "face": "happy",
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
          "say": "Tired guests nod, then call down tonight asking those exact things.",
          "sub": "Khách mệt gật gù, rồi tối lại gọi xuống hỏi đúng những điều đó.",
          "keys": [
            "hỏi đúng những điều đó"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Room, breakfast, wifi, lifts. The rest is on this sheet. Call us anytime.",
          "sub": "Số phòng, ăn sáng, wifi, thang máy. Còn lại trong tờ này. Cần gì chị cứ gọi ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Say a little, but the right things. They remember, and ask later.",
          "sub": "Nói ít mà đúng, khách nhớ được và quay lại hỏi khi cần.",
          "phase": "redo",
          "keys": [
            "Nói ít mà đúng"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16,p17"
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
            "at": "l6:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Chỉ đường lên phòng",
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
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "sam",
                  "side": "center"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "walk",
                  "at": "l4"
                }
              ],
              "props": [
                "elevator",
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "medium",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l6:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:way",
            "caption": "14:10 · đường lên phòng",
            "icon": "elevator"
          },
          {
            "id": "h-el",
            "t": "illus",
            "name": "elevator",
            "x": 3996,
            "y": 1250,
            "size": 80,
            "at": "l2:lifts"
          },
          {
            "id": "h-lift",
            "t": "text",
            "text": "Thang máy: rẽ, bên trái",
            "x": 4096,
            "y": 1265,
            "size": 46,
            "at": "l2:left",
            "hl": [
              {
                "text": "bên trái",
                "at": "l2:left"
              }
            ]
          },
          {
            "id": "h-rest",
            "t": "text",
            "text": "Nhà hàng: trệt, cuối hành lang",
            "x": 3996,
            "y": 1360,
            "size": 44,
            "at": "l3:hall"
          },
          {
            "id": "h-por",
            "t": "text",
            "text": "Porter: giúp mang hành lý",
            "x": 3996,
            "y": 1440,
            "size": 46,
            "at": "l5:porter",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: the way up, in a few fixed phrases.",
          "sub": "Chặng sáu: chỉ đường lên phòng, bằng vài cụm cố định.",
          "keys": [
            "Chặng sáu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The lifts are just around the corner, on your left.",
          "sub": "Thang máy ngay chỗ rẽ, bên trái chị ạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The restaurant is on the ground floor, at the end of the hall.",
          "sub": "Nhà hàng ở tầng trệt, cuối hành lang ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, the porter, already reaching for the suitcase.",
          "sub": "Còn đây là bác Bình, nhân viên hành lý, đã kịp đưa tay đỡ vali."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Our porter will help you with your luggage.",
          "sub": "Bác nhân viên hành lý sẽ giúp chị mang đồ ạ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "This way, please.",
          "sub": "Mời chị đi lối này.",
          "face": "happy",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 600
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
          },
          {
            "at": "l1",
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
            "id": "h-q",
            "t": "text",
            "text": "“Anything else I can help with?”",
            "x": 3996,
            "y": 1550,
            "size": 44,
            "at": "l1:anything",
            "color": "accent"
          },
          {
            "id": "h-wish",
            "t": "text",
            "text": "“…a pleasant stay.”",
            "x": 3996,
            "y": 1630,
            "size": 50,
            "at": "l2:pleasant",
            "hl": [
              {
                "text": "pleasant stay",
                "at": "l2:stay"
              }
            ]
          },
          {
            "id": "h-door",
            "t": "text",
            "text": "Câu hỏi mở + lời chúc",
            "x": 4856,
            "y": 1780,
            "size": 48,
            "at": "l3:open question",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Is there anything else I can help you with?",
          "sub": "Chị còn cần gì nữa không ạ?",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I hope you have a pleasant stay.",
          "sub": "Chúc chị có kỳ nghỉ dễ chịu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An open question, then a warm wish. The door stays open, the guest goes up smiling.",
          "sub": "Một câu hỏi mở, rồi một lời chúc. Cửa vẫn để ngỏ, khách lên phòng mà vẫn cười.",
          "keys": [
            "Một câu hỏi mở"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l6",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Tối · 8 bước, một mạch",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:turns"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Tối · Dũng đọc to ở nhà",
            "icon": "notebook"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1240,
            "w": 46,
            "h": 46,
            "at": "l2:greet",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1222,
            "size": 58,
            "at": "l2:greet+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Chào, mời giúp",
            "x": 6034,
            "y": 1232,
            "size": 34,
            "at": "l2:greet+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1308,
            "w": 46,
            "h": 46,
            "at": "l2:name",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1290,
            "size": 58,
            "at": "l2:name+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Tên đặt phòng, nhắc lại",
            "x": 6034,
            "y": 1300,
            "size": 34,
            "at": "l2:name+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1376,
            "w": 46,
            "h": 46,
            "at": "l3:passport",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1358,
            "size": 58,
            "at": "l3:passport+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Hộ chiếu; thẻ: nói lý do",
            "x": 6034,
            "y": 1368,
            "size": 34,
            "at": "l3:passport+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1444,
            "w": 46,
            "h": 46,
            "at": "l3:form",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1426,
            "size": 58,
            "at": "l3:form+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Phiếu, chữ ký, ngày đi",
            "x": 6034,
            "y": 1436,
            "size": 34,
            "at": "l3:form+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1512,
            "w": 46,
            "h": 46,
            "at": "l4:key",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1494,
            "size": 58,
            "at": "l4:key+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Chìa khoá, số phòng, tầng",
            "x": 6034,
            "y": 1504,
            "size": 34,
            "at": "l4:key+200"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1580,
            "w": 46,
            "h": 46,
            "at": "l4:breakfast",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1562,
            "size": 58,
            "at": "l4:breakfast+600",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Ăn sáng, wifi",
            "x": 6034,
            "y": 1572,
            "size": 34,
            "at": "l4:breakfast+200"
          },
          {
            "id": "i-c6",
            "t": "box",
            "x": 5964,
            "y": 1648,
            "w": 46,
            "h": 46,
            "at": "l5:way",
            "stroke": 5
          },
          {
            "id": "i-k6",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1630,
            "size": 58,
            "at": "l5:way+600",
            "color": "accent"
          },
          {
            "id": "i-l6",
            "t": "text",
            "text": "Chỉ đường lên phòng",
            "x": 6034,
            "y": 1640,
            "size": 34,
            "at": "l5:way+200"
          },
          {
            "id": "i-c7",
            "t": "box",
            "x": 5964,
            "y": 1716,
            "w": 46,
            "h": 46,
            "at": "l5:anything",
            "stroke": 5
          },
          {
            "id": "i-k7",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1698,
            "size": 58,
            "at": "l5:anything+600",
            "color": "accent"
          },
          {
            "id": "i-l7",
            "t": "text",
            "text": "Cần gì thêm? Chúc vui",
            "x": 6034,
            "y": 1708,
            "size": 34,
            "at": "l5:anything+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That evening, Dũng turns the whole check in into one checklist.",
          "sub": "Tối hôm đó, Dũng gom cả lượt check-in thành một danh sách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Greet and offer help. Ask the booking name, and repeat it.",
          "sub": "Chào và mời giúp. Hỏi tên đặt phòng, nhắc lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The passport, plus the reason if you need a card. The form, a signature, the check out date.",
          "sub": "Xin hộ chiếu, nói rõ lý do nếu xin thẻ. Mời điền phiếu, ký tên, xác nhận ngày đi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The key, room number and floor. Breakfast and wifi.",
          "sub": "Giao chìa khoá, số phòng, tầng. Giờ ăn sáng, wifi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The way up. And: anything else? Have a pleasant stay.",
          "sub": "Chỉ đường lên phòng. Rồi hỏi khách cần gì thêm, chúc kỳ nghỉ vui."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Eight steps, one breath, no peeking. Again!",
          "sub": "Tám bước, một mạch, không nhìn sổ. Lại nào!",
          "face": "happy"
        }
      ],
      "ref": "p20"
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
            "at": "l3",
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
            "text": "14:15 · cùng mặt quầy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same counter"
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
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                }
              ],
              "props": [
                "key",
                "passport-control"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same counter",
            "caption": "14:15 · cùng mặt quầy",
            "icon": "key"
          },
          {
            "id": "j-pp",
            "t": "illus",
            "name": "passport-control",
            "x": 7932,
            "y": 1260,
            "size": 140,
            "at": "l2:passport"
          },
          {
            "id": "j-pp2",
            "t": "text",
            "text": "→ đã về túi",
            "x": 8092,
            "y": 1300,
            "size": 50,
            "at": "l2:bag"
          },
          {
            "id": "j-key",
            "t": "illus",
            "name": "key",
            "x": 7932,
            "y": 1420,
            "size": 120,
            "at": "l2:key"
          },
          {
            "id": "j-key2",
            "t": "text",
            "text": "→ thẻ phòng trên tay",
            "x": 8092,
            "y": 1450,
            "size": 50,
            "at": "l2:hand",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Tiên học lễ, hậu học văn” ✓",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l4:manners",
            "color": "accent",
            "hl": [
              {
                "text": "học lễ",
                "at": "l4:manners"
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
          "say": "Two fifteen. The same counter where the passport landed this morning.",
          "sub": "Hai giờ mười lăm. Vẫn mặt quầy nơi cuốn hộ chiếu đặt xuống sáng nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now the passport is back in Sam's bag, and a key card is in her hand.",
          "sub": "Giờ hộ chiếu đã về túi chị Sam, thẻ phòng nằm trên tay."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Thank you both. That was so smooth.",
          "sub": "Cảm ơn hai em. Nhẹ nhàng quá.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "First learn manners, then letters. Courtesy first, paperwork after, and it all flows.",
          "sub": "“Tiên học lễ, hậu học văn.” Lễ trước, thủ tục sau, mọi thứ trôi chảy.",
          "keys": [
            "Lễ trước, thủ tục sau"
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
      "ref": "p19"
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
            "at": "l2",
            "fit": "C",
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
            "x": 4556,
            "y": 480,
            "at": "l2:options"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 700,
            "y": 1630,
            "at": "l3:request"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2608,
            "y": 1510,
            "at": "l4:facts"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: one fixed order, from hello to the lift.",
          "sub": "Tóm lại: một trình tự cố định, từ lời chào đến cửa thang máy.",
          "keys": [
            "một trình tự cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: room not ready? Offer options.",
          "sub": "Một: phòng chưa sẵn? Đưa lựa chọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: could you, please. An order becomes a request.",
          "sub": "Hai: “Could you… please?” Lệnh thành lời nhờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: four key facts. The rest goes on paper.",
          "sub": "Ba: bốn ý chính, phần còn lại đưa tờ giấy.",
          "keys": [
            "bốn ý chính"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Do it now: read the eight steps aloud, each with its line, until you can say them in one go.",
          "sub": "Việc làm ngay: đọc to tám bước, mỗi bước kèm câu mẫu, đến khi nói liền một mạch không cần nhìn.",
          "keys": [
            "nói liền một mạch"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: the desk phone rings with a request. Towels, room changes, taxis.",
          "sub": "Bài tiếp theo: điện thoại quầy reo, khách nhờ việc. Thêm khăn, đổi phòng, gọi taxi."
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
        "q": "Why is listing every hotel facility at check in not a good idea?",
        "options": [
          "Tired guests remember only a few things, so they ask again later",
          "Guests already know everything about the hotel before they even arrive",
          "Facilities are secret, so receptionists are not allowed to mention them"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "key",
        "why": "Khách vừa đi xa chỉ nhớ vài điều; nói gọn bốn ý, phần còn lại đưa tờ thông tin."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is listing every hotel facility at check in not a good idea?",
          "sub": "Vì sao kể hết mọi tiện ích lúc check in không phải ý hay?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Tired guests remember only a few things, so they ask again later.",
          "sub": "Khách mệt chỉ nhớ vài điều, nên tối lại gọi xuống hỏi."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "questions[27]"
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về một lượt check-in",
        "sub": "Lễ trước, thủ tục sau"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are below. Courtesy first, paperwork after.",
          "sub": "Bốn mươi câu hỏi ở bên dưới. Lễ trước, thủ tục sau."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI (chuỗi en-hotel-front-desk-staff, bài 2) theo hạt nhân #136 + biến thể #144. HOOK-23 (đồ vật kể chuyện): cận cuốn hộ chiếu trên quầy lúc 7:00 → kéo ra thấy Sam và Dũng (intro) → câu hỏi chính; vật trở lại ở kết (hộ chiếu về túi, thẻ phòng trên tay). Dòng thời gian: ngày Sam quay lại khách sạn Lotus một tháng sau (7:00 → 7:05 phòng chưa sẵn → 14:00 → 14:03 → 14:05 → 14:07 → 14:08 → 14:10 → tối → 14:15 khép vòng). Nhân vật (w145/_series/en-hotel-front-desk-staff.md): Sam (khách cũ → “Welcome back” p2; đi cùng chồng không có hình = cặp vợ chồng đến sớm p12 và “two room keys” p14), Dũng (A/B p12 đúng như bài; DLG kể hết tiện ích = hiểu lầm p16; danh sách 8 bước p20), Thảo (p1–p9, p14–p15, p18–p19; chuyện “Credit card, please” p6 đúng như bài), Bác Bình (porter p18). Giờ nhận phòng không ghi số (bài để [giờ]) → “until the afternoon” theo câu Cách A của bài. “a double room for two guests” thay “Mr Wilson … three nights” (p4) để khớp chuyện, không thêm số đêm. Cảnh ngắt nhịp: BRK-10 trích “phút đầu ở quầy” (p3, tóm ý), BRK-04 “Sign.” Trước/Sau (p9), BRK-06 montage tiện ích Dũng định kể (p16). Tục ngữ: “Tiên học lễ, hậu học văn”.",
  "loop": {
    "open": "s00",
    "close": "s21"
  }
};
